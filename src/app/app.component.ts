import { Component, OnInit } from '@angular/core';

import { HeadUriLoaderService } from './services/head-uri-loader/head-uri-loader.service';
import { GoogleFontsApiResponse } from './services/external/google/google-fonts-api.model';
import { GoogleFontsApiService } from './services/external/google/google-fonts-api.service';
import { FontManagerService } from './services/font-manager/font-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dive-inn';

  constructor(private headUriLoader: HeadUriLoaderService, private fontManager: FontManagerService)
  {}

  ngOnInit(): void {
    this.headUriLoader.loadFontsLink();
    this.fontManager.init();
  }
}
