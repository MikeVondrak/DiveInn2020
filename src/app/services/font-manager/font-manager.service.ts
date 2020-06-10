import { Injectable } from '@angular/core';
import { GoogleFontsApiService } from '../external/google/google-fonts-api.service';
import { GoogleFontsApi } from '../external/google/google-fonts-api.model';
import { FontApiService } from '../api/font/font.service';
import { HeadUriLoaderService } from '../head-uri-loader/head-uri-loader.service';
import { take } from 'rxjs/operators';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class FontManagerService {

  private googleFontCategories: Set<string> = new Set();

  private blacklistedCategories: string[];

  private allFonts: GoogleFontsApi[] = [];

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
        .pipe(take(1))
        .subscribe(fonts => {
          this.allFonts = fonts;
          // debugger;
          // this.logger.log('', undefined, { label: 'getFonts$', action: 'stop' });
          this.parseFontsForCategories();
        });
    }
  }

  private parseFontsForCategories() {
    // add category of each font to Set to retrieve unique category values
    this.allFonts.forEach(font => {
      this.googleFontCategories.add(font.category)
    });

    // this.logger.log('', [{ 'Categories Size': this.googleFontCategories.size, Categories: this.googleFontCategories }]);
    // this.logger.log('', null, { label: 'Get Font Categories', action: 'stop' });
  }

  private getSelectableFonts() {

  }

  private getBlacklistedFonts() {

  }
}
