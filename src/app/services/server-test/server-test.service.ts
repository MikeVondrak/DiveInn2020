import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerTestData } from './server-test.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerTestService {

  constructor(private http: HttpClient) { }

  public getServerConstData$(): Observable<ServerTestData> {
    console.log('**** service getServerTestData()');
    let r = this.http.get<ServerTestData>('/api/server-test').pipe(
      tap((d) => console.log("data from tap:  " + JSON.stringify(d, null, 4)))
    ); 
    r.subscribe(data => console.log('response: ' + JSON.stringify(data, null, 4)));
    return r;
  }

  public getServerTestData$() {
    
  }
}
