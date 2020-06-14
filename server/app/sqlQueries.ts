export const sqlQueries = {
  selectTestTable: 'SELECT * FROM test_table',
  selectFontsTable:
    `SELECT * FROM font
      INNER JOIN font_weight ON fk_font_weight_id = font_weight.id
      INNER JOIN font_category ON fk_font_category_id = font_category.id`,
  selectFontsFontFamily: 'SELECT font_family FROM font'
}
