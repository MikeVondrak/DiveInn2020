import { Injectable } from '@angular/core';
import { GoogleFontsApiService } from '../external/google/google-fonts-api.service';
import { GoogleFontsApi } from '../external/google/google-fonts-api.model';
import { FontApiService } from '../api/font/font.api.service';
import { HeadUriLoaderService } from '../head-uri-loader/head-uri-loader.service';
import { take, map, tap, filter, reduce, every } from 'rxjs/operators';
import { LoggerService } from '../logger/logger.service';
import { UiFont, IUiFont } from '../../models/ui-font.model';
import { FontVariants, FontWeight } from '../api/font/font.api.model';
import { Observable, BehaviorSubject, combineLatest, of, Subject } from 'rxjs';

enum GoogleFontsDataStateEnum {
  UNLOADED,
  LOADING,
  LOADED,
  ERROR
}
@Injectable({
  providedIn: 'root'
})
export class FontManagerService {

  private googleFontCategories: Set<string> = new Set();

  private blacklistedCategories: string[];

  public allFonts: UiFont[] = [];
  private allFonts$: Observable<UiFont[]>;

  private validCategoryFonts: UiFont[] = [];
  private blacklistedFonts: UiFont[] = [];
  private availableFonts: UiFont[] = [];
  private selectableFonts: UiFont[] = [];
  private fontsToDownload: UiFont[] = [];

  // tslint:disable: variable-name
  private _selectableFonts$: BehaviorSubject<UiFont[]> = new BehaviorSubject<UiFont[]>([]);
  private _blacklistedFonts$: BehaviorSubject<UiFont[]> = new BehaviorSubject<UiFont[]>([]);
  private _availableFonts$: BehaviorSubject<UiFont[]> = new BehaviorSubject<UiFont[]>([]);

  // validCategory
  public get selectableFonts$(): Subject<UiFont[]> { return this._selectableFonts$; }
  public get blacklistedFonts$(): Subject<UiFont[]> { return this._blacklistedFonts$; }
  public get availableFonts$(): Subject<UiFont[]> { return this._availableFonts$; }
  // fontsToDownload

  private timeStart;
  private timeStop;


  private googleFontDataLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private googleFontDataLoaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private googleFontDataError: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor(
    private googleFontsApiService: GoogleFontsApiService,
    private fontsApiService: FontApiService,
    private headUriService: HeadUriLoaderService,
    private logger: LoggerService
  ) {
    // this.logger.enableLogger(true);
  }

  public init() {
    // clear data to avoid duplicates when run twice in debugging build
    this.validCategoryFonts = [];
    this.blacklistedFonts = [];
    this.availableFonts = [];
    this.selectableFonts = [];
    this.fontsToDownload = [];

    this.setGoogleFontsDataState(GoogleFontsDataStateEnum.LOADING);
    this.allFonts$ = this.getAllGoogleFonts();
    // subscribe so we have the Google Fonts data available to sort
    //  - fast enough to not be an issue loading on app init
    //  - if we didn't want to load the data unless the UI was using it we could continue the Observable chain and avoid subscribing
    this.allFonts$.subscribe(
      (allFonts: UiFont[]) => {
        this.parseFontsData(allFonts);
      },
      (err: any) => {
        console.log('!!!!! FontManagerService Error Handler: ' + err);
        /** @TODO hande this in the GoogleFontsApiService / NgRx */
        this.setGoogleFontsDataState(GoogleFontsDataStateEnum.ERROR);
      },
      () => {
        // expect the subscription to complete
        this.setGoogleFontsDataState(GoogleFontsDataStateEnum.LOADED);
      }
    );
  }

  /**
   * Get the list of all Google Fonts and convert to UiFont[]
   */
  private getAllGoogleFonts(): Observable<UiFont[]> {
    if (!this.allFonts$) {
      return this.googleFontsApiService.getFonts$('popularity')
        .pipe(
          take(1),
          map(googleFonts => {
            return googleFonts.map(googleFont => {
              return this.mapGoogleFontToUiFont(googleFont);
            });
          })
        );
    } else {
      return this.allFonts$;
    }
  }

  private parseFontsData(fontsData: UiFont[]) {
    console.log('##### parseFontsData()');

    combineLatest([
      this.fontsApiService.getFontSelectable$().pipe(take(1)),
      this.fontsApiService.getFontBlacklisted$().pipe(take(1)),
      this.googleFontDataLoaded.pipe(filter(loaded => !!loaded), take(1)),
    ]).pipe(
      take(1), // unsubscribe after getting result
      every(([selectable, blacklisted,]) => {
        fontsData.forEach(uiFont => {
          this.parseFontCategory(uiFont);
          // remove blacklisted fonts by family (all variants of font)
          const isBlacklisted = blacklisted.find(blf => blf.family === uiFont.family);
          // selectable font variant should exist in UiFont (from GoogleFont allFonts)
          const isSelectable = selectable.find(sf => uiFont.contains(sf));
          if (isBlacklisted) {
            this.blacklistedFonts.push(isBlacklisted);
          } else if (isSelectable) {
            this.selectableFonts.push(isSelectable);
          } else {
            this.availableFonts.push(uiFont);
          }
        });
        this._selectableFonts$.next(this.selectableFonts);
        this._blacklistedFonts$.next(this.blacklistedFonts);
        this._availableFonts$.next(this.availableFonts);
        return true;
      }
    )).subscribe(() => { console.log('##### parseFontsData subscription COMPLETE'); });
  }

  /**
   * Add the category of the provided font to a set to capture all category values
   * @param uiFont font to parse for category value
   */
  private parseFontCategory(uiFont: UiFont) {
    this.googleFontCategories.add(uiFont.properties.category);
  }

  /**
   * Convert the provided GoogleFontsApi into a UiFont
   * @param googleFont GoogleFontsApi to convert
   */ 
  private mapGoogleFontToUiFont(googleFont: GoogleFontsApi): UiFont {
    const iUiFont: IUiFont = {
      family: googleFont.family,
      // uiText: is populated using family and overwritten if db has different value
      // hrefId: is populated from family and reconstructed when building URI for <link> tag
      properties: {
        id: -1,
        variants: this.parseVariants(googleFont),
        category: googleFont.category,
      },
    };
    return new UiFont(iUiFont);
  }

  /**
   * Crete a FontWeight-boolean map of whether font weight is italic-able
   * @param googleFont Font to parse variants of
   */
  private parseVariants(googleFont: GoogleFontsApi): FontVariants {
    // variants in format:
    //  100, 100italic, 200, 300, regular, italic, 500, 500italic... 900, 900italic
    // convert to:
    //  (100, true), (200, false), (300, false), (regular, true)...
    const variants: FontVariants = googleFont.variants.reduce((resultsMap, variant) => {

      const index = variant.indexOf('italic');
      const italicAble = index >= 0;
      // if variant has 'italic' take part of string before it
      // if variant is 'italic' set italicAble for 'regular' weight
      // else variant is weight
      const weight = index > 0 ? variant.substring(0, index) :
        index === 0 ? 'regular' : variant;

      resultsMap.set(weight as FontWeight, italicAble);

      return resultsMap;
    }, new Map<FontWeight, boolean>());

    if (googleFont.variants.includes('italic')) {
      variants.set('regular', true);
    }
    return variants;
  }

  // private mapUiFontToGoogleFontUri(googleFont: GoogleFontsApi): GoogleFontsUri { }
  // private mapUiFontToDbFont(uiFont: UiFont): DbFont { }

  private setGoogleFontsDataState(state: GoogleFontsDataStateEnum) {
    switch (state) {
      case GoogleFontsDataStateEnum.UNLOADED:
        // BehaviorSubjects have initial value when created
        break;
      case GoogleFontsDataStateEnum.LOADING:
        this.googleFontDataLoading.next(true);
        break;
      case GoogleFontsDataStateEnum.LOADED:
        this.googleFontDataLoading.next(false);
        this.googleFontDataLoaded.next(true);
        this.googleFontDataError.next(false);

        //this.googleFontDataLoading.complete();
        //this.googleFontDataLoaded.complete();
        //this.googleFontDataError.complete();
        break;
      case GoogleFontsDataStateEnum.ERROR:
        this.googleFontDataLoading.next(false);
        this.googleFontDataLoaded.next(true);
        this.googleFontDataError.next(true);

        //this.googleFontDataLoading.complete();
        //this.googleFontDataLoaded.complete();
        //this.googleFontDataError.complete();
        break;
      default: { }
    }
  }
}
