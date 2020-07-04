import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// shared from backend
import { routes, FontGroupEnum } from '../../../../../server/app/routes';

import { UiFont, IUiFont } from '../../../models/ui-font.model';
import { FontApi, FontWeight } from './font.api.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FontApiService {
  constructor(private http: HttpClient) {}

  /**
   * Return all Font objects from font table
   */
  public getAllFonts$(): Observable<UiFont[]> {
    const dbFonts: Observable<FontApi[]>
      = this.http.get<FontApi[]>(
          routes.api._root + routes.api.font._root
    );
    return this.mapDbFontToUiFont(dbFonts);
  }

  /**
   * Return all Font family values from font table
   */
  public getFontSelectable$(): Observable<UiFont[]> {
    const dbFonts: Observable<FontApi[]>
      = this.http.get<FontApi[]>(
          routes.api._root +
          routes.api.font._root + '/' +
          FontGroupEnum.SELECTABLE
    );
    return this.mapDbFontToUiFont(dbFonts);
  }

  public getFontBlacklisted$(): Observable<UiFont[]> {
    const dbFonts: Observable<FontApi[]>
      = this.http.get<FontApi[]>(
          routes.api._root +
          routes.api.font._root + '/' +
          FontGroupEnum.BLACKLISTED
    );
    return this.mapDbFontToUiFont(dbFonts);
  }

  public addFont(font: UiFont) {
    // TODO
  }


  /**
   * Map db results to UiFont
   * @param dbFonts fonts from db table
   */
  private mapDbFontToUiFont(dbFonts: Observable<FontApi[]>): Observable<UiFont[]> {
    console.log('font.api mapDbToUi');
    const uiFontArray: Observable<UiFont[]> = dbFonts.pipe(
      map((fontArray: FontApi[]) => {
        return fontArray.map((font: FontApi) => {
          const uiFont: IUiFont = {
            family: font.family,
            uiText: font.label,
            hrefId: font.href,
            properties: {
              id: font.id,
              variants: new Map<FontWeight, boolean>([[font.weight, font.italic]]),
              category: font.category,
            },
          };
          console.log('font.api mapDbToUi font: ');
          console.log(uiFont);
          return new UiFont(uiFont);
        });
      })
    );
    return uiFontArray;
  }
}