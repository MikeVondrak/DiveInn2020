// match what the backend is returning for the fonts API
export interface Font {
  font_id: number;
  font_family: string;
  href_id?: string | null;
  ui_text?: string | null;
}
