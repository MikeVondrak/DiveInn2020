// const express = require('express'); // old js way of importing
import express, { RequestHandler, Router, Request, Response } from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import * as path from 'path';

import { ServerApp } from './server-app';
import { logger } from './middleware/logger';

const _port: string = process.env.PORT || '3000'; // process.env.PORT set by server (e.g. Heroku) when hosted, or use 3000 for local testing

// running server app from ./server/app or ./server/dist (for prod)
const _angularAppLocation: string = '../../dist/dive-inn'; // output from ng build --prod
const _angularAssetsLocation: string = '../../src/assets'; /** @TODO more consistent locations / file structure */

debugFileAndDir();

// list of paths for statically served content
// __dirname provided by Express, location app is running from
const angularDist = path.join(__dirname, _angularAppLocation);
const assets = path.join(__dirname, _angularAssetsLocation);
const staticPaths: string[] = [
  angularDist, // published files from Angular --prod build
  assets // images, fonts, etc
];

// compile our list of middleware
const middleWare: RequestHandler[] = [
  // Express Framework Built-Ins
  compression(), // gzip for smaller file size / better performance
  express.json(), // parse JSON in body of request
  cookieParser(), // parse cookie header of request

  // custom
  logger
];

// define controllers for paths
const controllers: Router[] = [];

const default200Response = (req: Request, res: Response) => {
  console.log('NODE: Router default 200 response');
  // serve default file (index.html) for Angular app
  //res.status(200).sendFile('/', {root: _angularAppLocation});
  res.send('{ "test_id": 99 }');
}

const allRoutes = express.Router();
allRoutes.get('*', default200Response);

controllers.push(allRoutes);

const serverApp = new ServerApp(_port, staticPaths, middleWare, controllers);
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
  let tmp = path.join(__dirname, _angularAppLocation);
  console.log('Angular App Path:\t' + _angularAppLocation + '\nResolved:\t\t' + tmp);
}

