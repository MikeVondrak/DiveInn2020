import { Injectable } from '@angular/core';
import { GoogleFontsApiService } from '../external/google/google-fonts-api.service';
import { GoogleFontsApi } from '../external/google/google-fonts-api.model';
import { FontApiService } from '../api/font/font.service';
import { HeadUriLoaderService } from '../head-uri-loader/head-uri-loader.service';
import { take, map } from 'rxjs/operators';
import { LoggerService } from '../logger/logger.service';
import { UiFont, IUiFont } from '../../models/ui-font.model';
import { FontVariants, FontWeight } from '../api/font/font.model';

@Injectable({
  providedIn: 'root'
})
export class FontManagerService {

  private googleFontCategories: Set<string> = new Set();

  private blacklistedCategories: string[];

  private allFonts: UiFont[] = [];

  private validCategoryFonts: UiFont[] = [];
  private blacklistedFonts: UiFont[] = [];
  private availableFonts: UiFont[] = [];
  private selectableFonts: UiFont[] = [];
  private fontsToDownload: UiFont[] = [];

  private timeStart;
  private timeStop;

  constructor(
    private googleFontsApiService: GoogleFontsApiService,
    private fontsApiService: FontApiService,
    private headUriService: HeadUriLoaderService,
    private logger: LoggerService
  ) {
    // this.logger.enableLogger(true);
  }

  public init() {

    // this.logger.log('Test');
    // this.logger.log('', undefined, { label: 'Get Font Categories', action: 'start' });
    // this.logger.log('', { 'Categories Size': this.googleFontCategories.size, 'another var': 100 });
    this.getAllGoogleFonts();
  }

  private getAllGoogleFonts() {
    if (!this.allFonts || !this.allFonts.length) {
      this.googleFontsApiService.getFonts$('popularity')
        .pipe(
          take(1),
          map(googleFonts => {
            this.allFonts = googleFonts.map(googleFont => {
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
            });
          })
      ).subscribe(() => {
        this.parseFontsForCategories();
        this.getSelectableFonts();
        this.getBlacklistedFonts();
      });
    }
  }

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

  private parseFontsForCategories() {
    // add category of each font to Set to retrieve unique category values
    this.allFonts.forEach(font => {
      this.googleFontCategories.add(font.properties.category);
    });
    // this.logger.log('', [{ 'Categories Size': this.googleFontCategories.size, Categories: this.googleFontCategories }]);
    // this.logger.log('', null, { label: 'Get Font Categories', action: 'stop' });
  }

  private getSelectableFonts() {
    // const selectableFontsFromDb$ = this.fontsApiService.getFontFamilySelectable$();
    const selectableFontsFromDb$ = this.fontsApiService.getAllFonts$();
    selectableFontsFromDb$.subscribe(selectableFontsFromDb => {
      // iterate over selectable fonts from db (small array) and verify they exist in allFonts array built from Google fonts (large array)
      selectableFontsFromDb.forEach(selectableFontFromDb => {
        const selectableFont = this.allFonts.find(font => font.family === selectableFontFromDb.family);
        debugger;
        let aaaaaa = selectableFont.contains(selectableFontFromDb);
        debugger;
        if (selectableFont) {
          this.selectableFonts.push(selectableFont);
        } else {
          console.log('WARNING: Font from DB not found in All Fonts array: ' + selectableFontFromDb.family);
        }
      });
    });
  }

  private getBlacklistedFonts() {

  }
}
