import { FontWeight } from '../services/api/font/font.model';

export interface FontProperties {
  // sizeRem?: number;
  id?: number;
  weight?: FontWeight;
  weightAble?: boolean;
  italic?: boolean;
  italicAble?: boolean;
  category?: string;
  // bold?: boolean;
  // letterSpacingPx?: number;
}

export interface IUiFont {
  uiText?: string;
  family: string;
  hrefId?: string;
  properties?: FontProperties;
}

export class UiFont implements IUiFont {
  readonly uiText: string;
  readonly family: string;
  readonly hrefId: string;
  readonly properties: FontProperties;
  constructor(font: IUiFont) {
    if (!font.family) {
      throw new Error('font.family must exist and not be an empty string in constructor argument for UiFont');
    }
    this.family = font.family;
    this.uiText = font.uiText ? font.uiText : font.family;
    this.hrefId = font.hrefId ? font.hrefId : font.family.split(' ').join('+');
    this.properties = font.properties ? Object.assign({}, font.properties) : {};
  }
}

/**
 * Include fonts here, will be downloaded via <link> element and added as an option in font dropdowns
 */
const uiFonts: IUiFont[] = [
  { family: 'Alfa Slab One' },
  { family: 'Anton' },
  { family: 'Bevan' },
  { family: 'Patua One' },
  { family: 'Piedra' },
  { family: 'PT Sans', hrefId: 'PT+Sans' },
  { family: 'PT Sans', hrefId: 'PT+Sans:wght@700', uiText: 'PT Sans Bold', properties: {  weight: '700' } }
];

function generateFonts(fonts: IUiFont[]): UiFont[] {
  return fonts.map(font => new UiFont(font));
}

export const fonts: UiFont[] = generateFonts(uiFonts);

const _headerFonts: IUiFont[] = [
  { family: 'Alfa Slab One' },
  { family: 'Anton' },
  { family: 'Bevan' },
  { family: 'Patua One' },
  { family: 'Piedra' },
];
const _textFonts: IUiFont[] = [
  { family: 'PT Sans', hrefId: 'PT+Sans' },
  { family: 'PT Sans', hrefId: 'PT+Sans:wght@700', uiText: 'PT Sans Bold', properties: {  weight: '700' } }
];
export const headerFonts = generateFonts(_headerFonts);
export const textFonts = generateFonts(_textFonts);
