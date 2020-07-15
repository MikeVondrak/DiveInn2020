export type FontWeight = '100' | '200' | '300' | 'regular' | '500' | '600' | '700' | '800' | '900';
export type FontCategory = 'header' | 'text' | 'nav' | 'title';

// export type FontVariant = { [key in FontWeight]: boolean };
// export type FontVariant = Record<FontWeight, boolean>;
export type FontVariants = Map<FontWeight, boolean>;

// match what the backend is returning for the fonts API
export interface FontApi {
  id: number;
  family: string;
  label?: string | null;
  href?: string | null;
  italic: boolean;
  weight: FontWeight;
  selectable: boolean;
  blacklisted: boolean;
  variants: FontVariants;
  category: FontCategory;
}
