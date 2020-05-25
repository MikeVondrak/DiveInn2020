export interface FontOptions {
  uiText: string;
  weight?: number;
  letterSpacingPx?: number;
}

export interface IGoogleFont {
  uiText?: string;
  family: string;
  hrefId?: string;
  options?: FontOptions[];
}

export class GoogleFont implements IGoogleFont {
  readonly uiText: string;
  readonly family: string;
  readonly hrefId: string;
  readonly options?: FontOptions[];
  constructor(font: IGoogleFont) {
    this.uiText = font.uiText ? font.uiText : font.family;
    this.family = font.family;
    this.hrefId = font.hrefId;
    if (font.options) {
      this.options = Object.assign([], font.options);
    }
  }
}

/**
 * Define fonts to be tested here
 */
const googleFonts: IGoogleFont[] = [
  { family: 'Alfa Slab One', hrefId: 'Alfa+Slab+One' },
  { family: 'Anton', hrefId: 'Anton' },
  { family: 'Bevan', hrefId: 'Bevan' },
  { family: 'Patua One', hrefId: 'Patua+One' },
  { family: 'Piedra', hrefId: 'Piedra' },
  { family: 'PT Sans', hrefId: 'PT+Sans:wght@400;700', options: [{ uiText: 'PT Sans Bold', weight: 700 }] }, // regualr
];

function generateFonts(googleFonts: IGoogleFont[]): GoogleFont[] {
  return googleFonts.map(font => new GoogleFont(font));
}

export const fonts: GoogleFont[] = generateFonts(googleFonts);