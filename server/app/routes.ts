// SHARED BETWEEN FRONTEND AND BACKEND
export enum FontGroupEnum {
  SELECTABLE = 'selectable',
  BLACKLISTED = 'blacklisted'
}

export const routes = {
  api: {
    _root: '/api',
    font: {
      _root: '/font',
      _queryParam: {
        family: '?fontdata=family'
      },
      _urlParam: {
        fontGroup: 'fontGroup',
        values: [FontGroupEnum.SELECTABLE, FontGroupEnum.BLACKLISTED],
      }
    },
    test: '/test-data',
    other: '/other'
  },
  error: {
    _404: '/*'
  },
}
