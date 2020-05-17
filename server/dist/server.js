"use strict";
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
// const express = require('express'); // old js way of importing
var express_1 = __importDefault(require("express"));
var compression_1 = __importDefault(require("compression"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var path = __importStar(require("path"));
var server_app_1 = require("./server-app");
var logger_1 = require("./middleware/logger");
var _port = process.env.PORT || '3000'; // process.env.PORT set by server (e.g. Heroku) when hosted, or use 3000 for local testing
// running server app from ./server/app or ./server/dist (for prod)
var _angularAppLocation = '../../dist/dive-inn'; // output from ng build --prod
var _angularAssetsLocation = '../../src/assets'; /** @TODO more consistent locations / file structure */
debugFileAndDir();
// list of paths for statically served content
// __dirname provided by Express, location app is running from
var angularDist = path.join(__dirname, _angularAppLocation);
var assets = path.join(__dirname, _angularAssetsLocation);
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
    //res.status(200).sendFile('/', {root: _angularAppLocation});
    res.send('{ "test_id": 99 }');
};
var allRoutes = express_1.default.Router();
allRoutes.get('*', default200Response);
controllers.push(allRoutes);
var serverApp = new server_app_1.ServerApp(_port, staticPaths, middleWare, controllers);
serverApp.beginListening();
/**
 * @method debugFileAndDir
 * __dirname = location where node script is currently executing
 * use path.join to resolve relative path ('../') in _appLocation
 * /server/dist/server.js -> ../../dist/dive-inn -> /dist/dive-inn/
 */
function debugFileAndDir() {
    console.log("\n\n********************************************************************************");
    console.log('Running:\t\t' + __filename);
    var tmp = path.join(__dirname, _angularAppLocation);
    console.log('Angular App Path:\t' + _angularAppLocation + '\nResolved:\t\t' + tmp);
}
