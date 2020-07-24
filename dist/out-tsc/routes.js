// SHARED BETWEEN FRONTEND AND BACKEND
export var FontGroupEnum;
(function (FontGroupEnum) {
    FontGroupEnum["SELECTABLE"] = "selectable";
    FontGroupEnum["BLACKLISTED"] = "blacklisted";
})(FontGroupEnum || (FontGroupEnum = {}));
export const routes = {
    api: {
        _root: '/api',
        font: {
            _root: '/font',
            add: '/add',
            remove: '/remove',
            _queryParam: {
                family: '?fontdata=family'
            },
        },
        test: '/test-data',
        other: '/other'
    },
    error: {
        _404: '/*'
    },
};
//# sourceMappingURL=routes.js.map