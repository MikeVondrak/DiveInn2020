export interface TestJson {
  id: string,
  value: number,
  stringArray?: string[],
  callback?: (data: string) => void,
  regularFunc?: () => {},
  numberFunc?: () => number
}

export interface TestData {
  test_id: number,
  test_char: string,
  test_null_char?: string | null,
  test_varchar?: string,
  test_text?: string,
  test_int?: number,
  test_double?: number,
  test_decimal?: number,
  test_date?: Date,
  test_time?: Date,
  test_datetime?: Date,
  test_json?: TestJson
}

export interface DrinkSpecial {
  product_name: string,
  price: number,
  day_of_week: Date,
  repeating: boolean,
  start_date: Date,
  end_date: Date
}