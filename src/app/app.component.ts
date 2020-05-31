import { Component, OnInit } from '@angular/core';

import { HeadUriLoaderService } from './services/head-uri-loader/head-uri-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dive-inn';
  
  constructor(private headUriLoader: HeadUriLoaderService) 
  {}

  ngOnInit(): void {
    this.headUriLoader.loadFontsLink();
  }
}
