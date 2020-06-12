import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// shared from backend
import { routes } from '../../../../../server/app/routes';

import { UiFont, IUiFont } from '../../../models/ui-font.model';
import { Font } from './font.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FontApiService {

  constructor(private http: HttpClient) { }

  public getAllFonts$(): Observable<UiFont[]> {

    console.log('**** API service getFonts()');
    const results: Observable<Font[]> = this.http.get<Font[]>(routes.api._root + routes.api.font);

    const uifontArray: Observable<UiFont[]>
      = results.pipe(
        map((fontArray: Font[]) => {
          return fontArray.map( (font: Font) => {
            const uifont: IUiFont = {
              family: font.font_family,
              uiText: font.ui_text,
              hrefId: font.href_id,
              // properties: font.properties, @TODO need to add properties to table and BE/FE API models
            }
            return new UiFont(uifont);
          });
        })
    );
    return uifontArray;
  }

  public getFontFamilySelectable(): Observable<string[]> {
    return this.http.get<string[]>(routes.api._root + routes.api.font._root + routes.api.font._queryParam.family);

  }

  public getFontFamilyBlacklist(): Observable<string[]> {

  }

  public addFont(font: UiFont) {
    // TODO
  }
}
