const apiExample = {
  "kind": "webfonts#webfont",
  "family": "Anonymous Pro",
  "variants": [
   "regular",
   "italic",
   "700",
   "700italic"
  ],
  "subsets": [
   "greek",
   "greek-ext",
   "cyrillic-ext",
   "latin-ext",
   "latin",
   "cyrillic"
  ],
  "version": "v3",
  "lastModified": "2012-07-25",
  "files": {
   "regular": "http://themes.googleusercontent.com/static/fonts/anonymouspro/v3/Zhfjj_gat3waL4JSju74E-V_5zh5b-_HiooIRUBwn1A.ttf",
   "italic": "http://themes.googleusercontent.com/static/fonts/anonymouspro/v3/q0u6LFHwttnT_69euiDbWKwIsuKDCXG0NQm7BvAgx-c.ttf",
   "700": "http://themes.googleusercontent.com/static/fonts/anonymouspro/v3/WDf5lZYgdmmKhO8E1AQud--Cz_5MeePnXDAcLNWyBME.ttf",
   "700italic": "http://themes.googleusercontent.com/static/fonts/anonymouspro/v3/_fVr_XGln-cetWSUc-JpfA1LL9bfs7wyIp6F8OC9RxA.ttf"
  }
}

export interface GoogleFontsApi {
  kind: string;
  family: string;
  variants: string[];
  subsets: string[];
  version: string;
  lastModified: string;
  files: { [key: string]: string; };
}

export type GoogleFontsApiSort = 'alpha' | 'date' | 'popularity' | 'style' | 'trending';

export interface GoogleFontsApiResponse {
  kind: string;
  items: GoogleFontsApi[];
}
