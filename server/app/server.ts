// const express = require('express'); // old js way of importing
import express from 'express';
import compression from 'compression';

const _port = process.env.PORT || 3000; // process.env.PORT set by server (e.g. Heroku) when hosted, or use 3000 for local testing
const _appLocation = '../dist/dive-inn'; // output from ng build --prod

// create a new express application instance
const app: express.Application = express();

// gzip compression middleware for performance
app.use(compression());

// serve static files
app.get('*.*', express.static(_appLocation, { maxAge: '1y' }) );

// all app paths -> serve default file: www.diveinndenver.com/ -> look for index.html etc
app.all('*', function (req, res) {
  res.status(200).sendFile(`/`, {root: _appLocation});
});

app.listen(_port, function () {
  console.log("Node Express server for " + app.name + " listening on port: " + _port);
});
