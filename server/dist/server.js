"use strict";
exports.__esModule = true;
// const express = require('express'); // old js way of importing
// express and middleware
var express_1 = require("express");
//import * as express from 'express';
//import { RequestHandler, Router, Request, Response } from 'express';
var compression_1 = require("compression");
var cookie_parser_1 = require("cookie-parser");
var path = require("path");
var operators_1 = require("rxjs/operators");
// our backend
var server_app_1 = require("./server-app");
var logger_1 = require("./middleware/logger");
var sqlQueries_1 = require("./sqlQueries");
var routes_1 = require("./routes");
var PORT = process.env.PORT || '3000'; // process.env.PORT set by server (e.g. Heroku) when hosted, or use 3000 for local testing
// running server app from ./server/app or ./server/dist (for prod)
var ANGULAR_APP_LOCATION = '../../dist/dive-inn'; // output from ng build --prod
var ANGULAR_ASSETS_LOCATION = '../../src/assets'; /** @TODO more consistent locations / file structure */
debugFileAndDir();
// list of paths for statically served content
// __dirname provided by Express, location app is running from
var angularDist = path.join(__dirname, ANGULAR_APP_LOCATION);
var assets = path.join(__dirname, ANGULAR_ASSETS_LOCATION);
var staticPaths = [
    angularDist,
    assets // images, fonts, etc
];
// compile our list of middleware
var middleWare = [
    // Express Framework Built-Ins
    compression_1["default"](),
    express_1["default"].json(),
    cookie_parser_1["default"](),
    // custom
    logger_1.logger
];
// define controllers for paths
var controllers = [];
var default200Response = function (req, res) {
    console.log('NODE: Router default 200 response');
    // serve default file (index.html) for Angular app
    // res.status(200).sendFile('/', {root: ANGULAR_APP_LOCATION});
    res.send('{ "test_id": 200 }');
};
function makePoolQuery(route, query, res) {
    serverApp.poolQuery(query)
        .pipe(operators_1.take(1))
        .subscribe(function (results) {
        res.send(results);
    }, function (err) {
        console.log('\n!!!!! Failed getting data from: ' + route + '\n\t' + err);
    });
}
var fontsRouter = express_1["default"].Router();
fontsRouter.get(routes_1.routes.api.font, function (req, res) {
    console.log('fontsRouter');
    if (req.query && Object.keys(req.query).length > 0) {
        var queryParam = Object.keys(req.query)[0];
        switch (queryParam) {
            case 'fontdata':
                var fontdataValue = req.query[queryParam];
                switch (fontdataValue) {
                    case 'family':
                        makePoolQuery(routes_1.routes.api.font, sqlQueries_1.sqlQueries.selectFontsFontFamily, res);
                        break;
                    default: throw new Error('Invalid fontdata value: ' + fontdataValue);
                }
                break;
            default: throw new Error('Invalid query param: ' + queryParam);
        }
    }
    else {
        makePoolQuery(routes_1.routes.api.font, sqlQueries_1.sqlQueries.selectFontsTable, res);
    }
});
var testDataRouter = express_1["default"].Router();
testDataRouter.get(routes_1.routes.api.test, function (req, res) {
    console.log('testDataRouter');
    makePoolQuery(routes_1.routes.api.test, sqlQueries_1.sqlQueries.selectTestTable, res);
});
var allRoutes = express_1["default"].Router();
allRoutes.get(routes_1.routes.api.other, default200Response);
controllers.push(testDataRouter);
controllers.push(fontsRouter);
controllers.push(allRoutes);
var serverApp = new server_app_1.ServerApp(angularDist, PORT, staticPaths, middleWare, controllers);
serverApp.beginListening();
/**
 * @method debugFileAndDir
 * __dirname = location where node script is currently executing
 * use path.join to resolve relative path ('../') in _appLocation
 * /server/dist/server.js -> ../../dist/dive-inn -> /dist/dive-inn/
 */
function debugFileAndDir() {
    console.log('\n\n********************************************************************************');
    console.log('Running:\t\t' + __filename);
    var tmp = path.join(__dirname, ANGULAR_APP_LOCATION);
    console.log('Angular App Path:\t' + ANGULAR_APP_LOCATION + '\nResolved:\t\t' + tmp);
}
//# sourceMappingURL=server.js.map