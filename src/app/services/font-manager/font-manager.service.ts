import { Injectable } from '@angular/core';
import { GoogleFontsApiService } from '../external/google/google-fonts-api.service';
import { GoogleFontsApi } from '../external/google/google-fonts-api.model';
import { FontApiService } from '../api/font/font.api.service';
import { HeadUriLoaderService } from '../head-uri-loader/head-uri-loader.service';
import { take, map, tap, filter, reduce, every } from 'rxjs/operators';
import { LoggerService } from '../logger/logger.service';
import { UiFont, IUiFont, FontListsEnum } from '../../models/ui-font.model';
import { FontVariants, FontWeight } from '../api/font/font.api.model';
import { Observable, BehaviorSubject, combineLatest, of, Subject } from 'rxjs';
import { FontClickedPayload } from '../../shared/components/font-list-display/font-list-display.component';

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

    // !!! REMOVE THIS !!! - test with small data set
    let fontLimit = 10;
    let fontCount = 0;

    if (!this.allFonts$) {      
      return this.googleFontsApiService.getFonts$('popularity')
        .pipe(
          take(1),
          map(googleFonts => {
            return googleFonts
              .map(googleFont => {              
                return this.mapGoogleFontToUiFont(googleFont);
              })

              // !!! REMOVE THIS !!! - test with small data set
              .filter(googleFont => {
                console.log('^^^^^ getAllGoogleFonts count: ' + fontCount + ', limit: ' + fontLimit);
                fontCount++;
                return fontCount < fontLimit;
              })
            

          }),
        );
    } else {
      return this.allFonts$;
    }
  }

  /**
   * Breaks the set of Google fonts into Selectable, Blacklisted, and Available font lists
   * @param fontsData Set of Google fonts to check against our DB fonts
   */
  private parseFontsData(fontsData: UiFont[]) {
    combineLatest([
      this.fontsApiService.getAllFonts$().pipe(take(1)),
      this.googleFontDataLoaded.pipe(filter(loaded => !!loaded), take(1)), // fonts data loaded from Google API
    ]).pipe(
      take(1), // unsubscribe after getting result
      every(([dbFonts, googleFontsLoaded]) => {
        // iterate through each converted Google font to see if it exists in our DB fonts
        fontsData.forEach(uiFont => {
          this.parseFontCategory(uiFont);
          // match fonts by family only
          const dbFont = dbFonts.find(dbf => dbf.family === uiFont.family);
          uiFont.properties.listId = dbFont?.properties?.listId;
          if (uiFont.properties.listId === FontListsEnum.BLACKLISTED) {
            uiFont.properties.id = dbFont.properties.id;
            this.blacklistedFonts.push(uiFont);
          } else if (uiFont.properties.listId === FontListsEnum.SELECTABLE) {
            uiFont.properties.id = dbFont.properties.id;
            this.selectableFonts.push(uiFont);
          } else {
            uiFont.properties.listId = FontListsEnum.AVAILABLE;
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
   * Add the category of the provided font to a Set to capture all category values
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


  //public updateFontsState(font: UiFont, btn: FontListsEnum) {
  public updateFontsState(payload: FontClickedPayload) {
    const font = payload.fontObj;
    const moveToList = payload.buttonId;

    let fromList: UiFont[];
    let toList: UiFont[];
    let fromList$: BehaviorSubject<UiFont[]>;
    let toList$: BehaviorSubject<UiFont[]>;
    let newList: FontListsEnum;

    // determine which list from property in font
    switch (font.properties.listId) {
      case FontListsEnum.BLACKLISTED:
        fromList = this.blacklistedFonts;
        fromList$ = this._blacklistedFonts$;
        toList = this.availableFonts;
        toList$ = this._availableFonts$;
        newList = FontListsEnum.AVAILABLE;
        break;
      case FontListsEnum.SELECTABLE:
        fromList = this.selectableFonts;
        fromList$ = this._selectableFonts$;
        toList = this.availableFonts;
        toList$ = this._availableFonts$;
        newList = FontListsEnum.AVAILABLE;
        break;
      case FontListsEnum.AVAILABLE:
        fromList = this.availableFonts;
        fromList$ = this._availableFonts$;
        // figure out which list to move the font to, all actions move font from 1 list to another
        switch (moveToList) {
          case "left":
            toList = this.blacklistedFonts;
            toList$ = this._blacklistedFonts$;
            newList = FontListsEnum.BLACKLISTED;
            break;
          case "right":
            toList = this.selectableFonts;
            toList$ = this._selectableFonts$;
            newList = FontListsEnum.SELECTABLE;
            break;
          case FontListsEnum.AVAILABLE:
            throw new Error('Cannot move font, already in Available Fonts: ' + font.family);
            break;
          default: throw new Error('Invalid moveToList argument: ' + moveToList);
        }
        break;
      default: console.log('ERROR in updateFontsState - Invalid listId: ' + font?.properties?.listId);
    }

    // move the font and emit new data
    const idx = fromList.findIndex(f => f.family === font.family);
    fromList.splice(idx, 1);
    fromList$.next(fromList);

    toList.push(font);
    toList$.next(toList);

    font.properties.listId = newList;

    console.log('***** FontManagerService updateFontsState: ' + font.family + ', font list: ' + font.properties.listId + ', moveToList: ' + moveToList);    
  }

  public moveFontToAvailable(font: UiFont) {
    let type: Observable<UiFont[]>;
    switch (font.properties.listId) {
      case FontListsEnum.BLACKLISTED:
        type = this.blacklistedFonts$;
        break;
      case FontListsEnum.AVAILABLE:
        type = this.availableFonts$;
        break;
      case FontListsEnum.SELECTABLE:
        type = this.selectableFonts$;
        break;
    }
    type
      .pipe(take(1))
      .subscribe((fontList) => {
        const idx = fontList.indexOf(font);
        fontList.splice(idx, 1);
        console.log('***** FontManagerService removeFont: ' + font.family + ', enum: ' + font.properties.listId + " Index: " + idx);

      });
  }
}
