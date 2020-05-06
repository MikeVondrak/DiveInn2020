// const express = require('express'); // old js way of importing
import express from 'express';
import compression from 'compression';
import * as path from 'path';

const _port = process.env.PORT || 3000; // process.env.PORT set by server (e.g. Heroku) when hosted, or use 3000 for local testing
const _appLocation = '../../dist/dive-inn'; // output from ng build --prod

// create a new express application instance
const app: express.Application = express();

// gzip compression middleware for performance
app.use(compression());

console.log("********************************************************************************");
console.log("********************************************************************************");
console.log("Running in: " + __dirname);
let tmp = path.join(__dirname, _appLocation);
console.log("app: " + _appLocation + ", joined: " + tmp);

// serve static files
// __dirname = location where node script is currently executing
// use path.join to resolve relative path ('../') in _appLocation
// /server/dist/server.js -> ../../dist/dive-inn -> /dist/dive-inn/
app.use(express.static(path.join(__dirname, _appLocation)));

// all app paths -> serve default file: www.diveinndenver.com/ -> look for index.html etc
app.all('*', function (req, res) {
  res.status(200).sendFile(`/`, {root: _appLocation});
});

app.listen(_port, function () {
  console.log("********************************************************************************");
  console.log("********************************************************************************");
  console.log("Node Express server for " + app.name + " listening on port: " + _port);
});
