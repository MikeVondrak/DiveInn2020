import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// shared from backend
import { routes, FontGroupEnum } from '../../../../../server/app/routes';

import { UiFont, IUiFont } from '../../../models/ui-font.model';
import { Font, FontWeight } from './font.model';
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
    console.log('**** API service getFonts()');
    const results: Observable<Font[]> = this.http.get<Font[]>(
      routes.api._root + routes.api.font._root
    );

    const uifontArray: Observable<UiFont[]> = results.pipe(
      map((fontArray: Font[]) => {
        return fontArray.map((font: Font) => {
          const uifont: IUiFont = {
            family: font.family,
            uiText: font.label,
            hrefId: font.href,
            properties: {
              id: font.id,
              //weight: font.weight,
              //italic: font.italic,
              variants: new Map<FontWeight, boolean>([[font.weight, font.italic]]),
              category: font.category,
            },
          };
          return new UiFont(uifont);
        });
      })
    );
    return uifontArray;
  }

  /**
   * Return all Font family values from font table
   */
  public getFontFamilySelectable$(): Observable<UiFont[]> {
    return this.http.get<UiFont[]>(
      routes.api._root +
      routes.api.font._root + '/' +
      FontGroupEnum.SELECTABLE
    );
  }

  public getFontFamilyBlacklisted$(): Observable<UiFont[]> {
    return this.http.get<UiFont[]>(
      routes.api._root +
        routes.api.font._root + '/' +
        FontGroupEnum.BLACKLISTED
    );
  }

  public addFont(font: UiFont) {
    // TODO
  }
}
