"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express'); // old js way of importing
var express_1 = __importDefault(require("express"));
var compression_1 = __importDefault(require("compression"));
var _port = process.env.PORT || 3000; // process.env.PORT set by server (e.g. Heroku) when hosted, or use 3000 for local testing
var _appLocation = '../dist/dive-inn'; // output from ng build --prod
// create a new express application instance
var app = express_1.default();
// gzip compression middleware for performance
app.use(compression_1.default());
// serve static files
app.get('*.*', express_1.default.static(_appLocation, { maxAge: '1y' }));
// all app paths -> serve default file: www.diveinndenver.com/ -> look for index.html etc
app.all('*', function (req, res) {
    res.status(200).sendFile("/", { root: _appLocation });
});
app.listen(_port, function () {
    console.log("Node Express server for " + app.name + " listening on port: " + _port);
});
