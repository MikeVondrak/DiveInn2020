
interface FontProperties {
  sizeRem?: number;
  weight?: number;
  bold?: boolean;
  letterSpacingPx?: number;
}

export interface IGoogleFont {
  uiText?: string;
  family: string;
  hrefId?: string;
  properties?: FontProperties;
}

export class GoogleFont implements IGoogleFont {
  readonly uiText: string;
  readonly family: string;
  readonly hrefId: string;
  readonly properties: FontProperties;
  constructor(font: IGoogleFont) {
    this.family = font.family;
    this.uiText = font.uiText ? font.uiText : font.family;
    this.hrefId = font.hrefId ? font.hrefId : font.family.split(' ').join('+');
    this.properties = font.properties ? Object.assign({}, font.properties) : {};
  }
}

/**
 * Include fonts here, will be downloaded via <link> element and added as an option in font dropdowns
 */
const googleFonts: IGoogleFont[] = [
  { family: 'Alfa Slab One' },
  { family: 'Anton' },
  { family: 'Bevan' },
  { family: 'Patua One' },
  { family: 'Piedra' },
  { family: 'PT Sans', hrefId: 'PT+Sans' },
  { family: 'PT Sans', hrefId: 'PT+Sans:wght@700', uiText: 'PT Sans Bold', properties: {  weight: 700 } }
];

function generateFonts(googleFonts: IGoogleFont[]): GoogleFont[] {
  return googleFonts.map(font => new GoogleFont(font));
}

export const fonts: GoogleFont[] = generateFonts(googleFonts);