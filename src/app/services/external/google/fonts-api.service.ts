import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FontsApiService {

  private readonly baseUrl: string = "https://www.googleapis.com/webfonts/v1/webfonts"
  private readonly apiKey: string = "?key=AIzaSyCqZ3dPYustmQUajzIhYu7MJeJ_ePHPnyk";

  constructor() { }
}
