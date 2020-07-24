"use strict";
// const express = require('express'); // old js way of importing
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// express and middleware
var express_1 = __importDefault(require("express"));
var compression_1 = __importDefault(require("compression"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var path = __importStar(require("path"));
// framework
var operators_1 = require("rxjs/operators");
// our backend
var server_app_1 = require("./server-app");
var logger_1 = require("./middleware/logger");
var sql_queries_1 = require("./sql-queries");
var routes_1 = require("./routes");
var test1 = 2000;
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
    compression_1.default(),
    express_1.default.json(),
    cookie_parser_1.default(),
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
/**
 * Makes a typed request to poolQuery and returns array of results via Express Response
 * @param route API route to handle
 * @param query SQL query to make
 * @param res Response object from Express Router
 */
function makePoolQuery(route, query, res, values) {
    console.log('**** makePoolQuery: route= ' + route + ', query= ' + query + ', data= ' + JSON.stringify(values, null, 4) || 'none');
    serverApp.poolQuery(query, values)
        .pipe(operators_1.take(1))
        .subscribe(function (results) {
        res.send(results);
    }, function (err) {
        console.log('\n!!!!! Express - Failed getting data from: ' + route + '\n\t' + err);
    });
}
var fontsRouter = express_1.default.Router();
fontsRouter.get(routes_1.routes.api.font._root, function (req, res) {
    console.log('----- fontsRouter GET: ' + routes_1.routes.api.font._root);
    // handle routes where request has query parameters included
    if (req.query && Object.keys(req.query).length > 0) {
        var queryParam = Object.keys(req.query)[0];
        switch (queryParam) {
            case 'fontdata':
                var fontdataValue = req.query[queryParam];
                switch (fontdataValue) {
                    case 'family':
                        makePoolQuery(routes_1.routes.api.font._root, sql_queries_1.sqlQueries.selectFontsFontFamily, res);
                        break;
                    default: throw new Error('Invalid fontdata value: ' + fontdataValue);
                }
                break;
            default: throw new Error('Invalid query param: ' + queryParam);
        }
    }
    else {
        makePoolQuery(routes_1.routes.api.font._root, sql_queries_1.sqlQueries.selectFontsTable, res);
    }
});
// handle adding new font
var addFontRoute = routes_1.routes.api.font._root + routes_1.routes.api.font.add;
fontsRouter.post(addFontRoute, function (req, res) {
    var newFont = req.body;
    console.log('fontsRouter ADD: ' + JSON.stringify(newFont, null, 4));
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // TODO need to return the new font list array instead of poolQuery result (add functionality to makePoolQuery?)
    makePoolQuery(addFontRoute, sql_queries_1.sqlQueries.insertFont, res, newFont);
    //res.send([]);
});
// handle removing font
var removeFontRoute = routes_1.routes.api.font._root + routes_1.routes.api.font.remove;
fontsRouter.post(removeFontRoute, function (req, res) {
    var removeFontId = req.body.id;
    console.log('fontsRouter REMOVE: ' + removeFontId);
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // TODO need to return the new font list array instead of poolQuery result (add functionality to makePoolQuery?)
    makePoolQuery(removeFontRoute, sql_queries_1.sqlQueries.removeFont, res, removeFontId);
});
var testDataRouter = express_1.default.Router();
testDataRouter.get(routes_1.routes.api.test, function (req, res) {
    console.log('testDataRouter');
    makePoolQuery(routes_1.routes.api.test, sql_queries_1.sqlQueries.selectTestTable, res);
});
var allRoutes = express_1.default.Router();
allRoutes.get(routes_1.routes.api.other, default200Response);
controllers.push(testDataRouter);
controllers.push(fontsRouter);
controllers.push(allRoutes);
var serverApp = new server_app_1.ServerApp(angularDist, PORT, staticPaths, middleWare, controllers);
serverApp.beginListening();
/**
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
