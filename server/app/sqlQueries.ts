export const sqlQueries = {
  selectTestTable: 'SELECT * FROM test_table',
  selectFontsTable:
    `SELECT font.*, font_weight.weight, font_category.category FROM font
      INNER JOIN font_weight ON fk_font_weight_id = font_weight.id
      INNER JOIN font_category ON fk_font_category_id = font_category.id`,
  selectFontsFontFamily: 'SELECT family FROM font',
  selectFontsSeletable:
    `SELECT selectable_font.*, font.* FROM selectable_font
      INNER JOIN font ON fk_font_id = font.id`,
  selectFontsBlacklisted:
    `SELECT blacklisted_font.*, font.* FROM blacklisted_font
      INNER JOIN font ON fk_font_id = font.id`,
}
