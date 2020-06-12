export type FontWeight = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | 'normal' | 'bold';
export type FontCategory = 'header' | 'text' | 'nav' | 'title';

// match what the backend is returning for the fonts API
export interface Font {
  id: number;
  family: string;
  label?: string | null;
  href?: string | null;
  italic: boolean;
  weight: FontWeight;
  category: FontCategory;
}
