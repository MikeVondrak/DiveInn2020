export interface DbFont {
  font_id: number;
  font_family: string;
  href_id?: string | null;
  ui_text?: string | null;
  weight: number;
  italic: boolean;
}
