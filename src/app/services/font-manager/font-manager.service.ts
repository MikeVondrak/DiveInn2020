import { Injectable } from '@angular/core';
import { GoogleFontsApiService } from '../external/google/google-fonts-api.service';
import { GoogleFontsApi } from '../external/google/google-fonts-api.model';
import { FontApiService } from '../api/font/font.service';
import { HeadUriLoaderService } from '../head-uri-loader/head-uri-loader.service';
import { take, map } from 'rxjs/operators';
import { LoggerService } from '../logger/logger.service';
import { UiFont, IUiFont, FontProperties } from '../../models/ui-font.model';

@Injectable({
  providedIn: 'root'
})
export class FontManagerService {

  private googleFontCategories: Set<string> = new Set();

  private blacklistedCategories: string[];

  private allFonts: UiFont[] = [];

  private validCategoryFonts;
  private blacklistedFonts;
  private availableFonts;
  private selectedFonts;
  private fontsToDownload;

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
                // uiText: leave this blank so UiFont uses family for the value
                // hrefId: @TODO build this based on the Google Font variants property

                // @TODO get the real values populated here
                properties: {
                  // id: 0,
                  // italic: false,
                  // weight
                  weightAble: this.canBeBold(googleFont),
                  category: googleFont.category,
                },
              };
              return new UiFont(iUiFont);
            });
          })
        ).subscribe(() => this.parseFontsForCategories());
    }
  }

  private canBeBold(googleFont: GoogleFontsApi): boolean {
    return (googleFont.variants.includes('700') || googleFont.variants.includes('bold'));
  }

  private parseFontsForCategories() {
    // add category of each font to Set to retrieve unique category values
    this.allFonts.forEach(font => {
      this.googleFontCategories.add(font.properties.category);
    });
    debugger;

    // this.logger.log('', [{ 'Categories Size': this.googleFontCategories.size, Categories: this.googleFontCategories }]);
    // this.logger.log('', null, { label: 'Get Font Categories', action: 'stop' });
  }

  private getSelectableFonts() {
    

  }

  private getBlacklistedFonts() {

  }
}
