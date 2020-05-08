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
var path = __importStar(require("path"));
var _port = process.env.PORT || 3000; // process.env.PORT set by server (e.g. Heroku) when hosted, or use 3000 for local testing
var _appLocation = '../../dist/dive-inn'; // output from ng build --prod
// create a new express application instance
var app = express_1.default();
// gzip compression middleware for performance
app.use(compression_1.default());
console.log("********************************************************************************");
console.log("Running in: " + __dirname);
var tmp = path.join(__dirname, _appLocation);
console.log("app: " + _appLocation + ", joined: " + tmp);
// serve static files
// __dirname = location where node script is currently executing
// use path.join to resolve relative path ('../') in _appLocation
// /server/dist/server.js -> ../../dist/dive-inn -> /dist/dive-inn/
app.use(express_1.default.static(path.join(__dirname, _appLocation)));
// all app paths -> serve default file: www.diveinndenver.com/ -> look for index.html etc
app.all('*', function (req, res) {
    res.status(200).sendFile("/", { root: _appLocation });
});
app.listen(_port, function () {
    console.log("********************************************************************************");
    console.log("Node Express server for " + app.name + " listening on port: " + _port);
});
