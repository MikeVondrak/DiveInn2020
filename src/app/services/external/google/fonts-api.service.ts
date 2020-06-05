import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

import { GoogleFontsApi, GoogleFontsApiSort, GoogleFontsApiResponse} from './fonts-api.model';
import { map } from 'rxjs/operators';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class FontsApiService {

  private readonly baseUrl: string = 'https://www.googleapis.com/webfonts/v1/webfonts';
  private readonly apiKey: string = '?key=AIzaSyCqZ3dPYustmQUajzIhYu7MJeJ_ePHPnyk';
  private readonly sortKey: string = '&sort=';

  private cachePopularity: Observable<GoogleFontsApi[]>;
  private cacheTrending: Observable<GoogleFontsApi[]>;

  constructor(private http: HttpClient) { }

  // let data = getFonts$()


  public getFonts$(sort: GoogleFontsApiSort, clearCache: boolean = false): Observable<GoogleFontsApi[]> {

    console.log('***** Google FontsApi getFonts$ requested');
    const url = this.baseUrl + this.apiKey + this.sortKey + sort;

    switch (sort) {
      case 'popularity':
        console.log('getting cachePopularity');
        this.cachePopularity = this.setCache(this.cachePopularity, clearCache, url);
        return this.cachePopularity;
      case 'trending':
        console.log('getting cacheTrending');
        this.cacheTrending = this.setCache(this.cacheTrending, clearCache, url);
        return this.cacheTrending;
      default: throw new Error('Invalid sort option provided: ' + sort);
    }
  }

  /**
   * Get the cached data or from Google Fonts API
   */
  private setCache(cache: Observable<GoogleFontsApi[]>, clearCache:boolean = false, url: string) {
    if (!cache || clearCache) {
      console.log('!!!!! Google Webfonts API request !!!!!');
      cache = this.http.get<GoogleFontsApiResponse>(url)
        .pipe(
          map(apiresponse => apiresponse.items)
        );
    } else {
      console.log('----- Google Webfonts API returning cached data');
    }
    return cache;
  }

}
