"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// SHARED BETWEEN FRONTEND AND BACKEND
var FontGroupEnum;
(function (FontGroupEnum) {
    FontGroupEnum["SELECTABLE"] = "selectable";
    FontGroupEnum["BLACKLISTED"] = "blacklisted";
})(FontGroupEnum = exports.FontGroupEnum || (exports.FontGroupEnum = {}));
exports.routes = {
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
