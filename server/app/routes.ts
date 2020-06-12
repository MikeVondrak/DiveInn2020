// SHARED BETWEEN FRONTEND AND BACKEND

export const routes = {
  api: {
    _root: '/api',
    font: {
      _root: '/font',
      _queryParam: {
        family: '?fontdata=family'
      }
    },
    test: '/test-data',
    other: '/other'
  },
  error: {
    _404: '/*'
  },
}
