// const express = require('express'); // old js way of importing

// express and middleware
import express, { RequestHandler, Router, Request, Response } from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import * as path from 'path';

// framework
import { take } from 'rxjs/operators';

// our backend
import { ServerApp } from './server-app';
import { logger } from './middleware/logger';
import { sqlQueries } from './sqlQueries';
import { routes, FontGroupEnum } from './routes';
import { queryCallback } from 'mysql';

import { TestData } from './models/test-data.model';
import { DbFont } from './models/font.model';


const PORT: string = process.env.PORT || '3000'; // process.env.PORT set by server (e.g. Heroku) when hosted, or use 3000 for local testing

// running server app from ./server/app or ./server/dist (for prod)
const ANGULAR_APP_LOCATION = '../../dist/dive-inn'; // output from ng build --prod
const ANGULAR_ASSETS_LOCATION = '../../src/assets'; /** @TODO more consistent locations / file structure */

debugFileAndDir();

// list of paths for statically served content
// __dirname provided by Express, location app is running from
const angularDist = path.join(__dirname, ANGULAR_APP_LOCATION);
const assets = path.join(__dirname, ANGULAR_ASSETS_LOCATION);
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

const default200Response: RequestHandler = (req: Request, res: Response) => {
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
function makePoolQuery<returnType>(route: string, query: string, res: Response) {
  // console.log('**** makePoolQuery: route= ' + route + ', query= ' + query);
  serverApp.poolQuery<returnType>(query)
    .pipe(take(1))
    .subscribe(
      (results: returnType[]) => {
        res.send(results);
      },
      (err) => {
        console.log('\n!!!!! Express - Failed getting data from: ' + route + '\n\t' + err);
      }
    );
}

const fontsRouter = express.Router();
fontsRouter.get(routes.api.font._root, (req: Request, res: Response) => {
  // console.log('Express: ' + routes.api.font._root);
  // handle routes where request has query parameters included
  if (req.query && Object.keys(req.query).length > 0) {

    const queryParam = Object.keys(req.query)[0];
    switch (queryParam) {

      case 'fontdata':
        const fontdataValue = req.query[queryParam];
        switch (fontdataValue) {

          case 'family':
            makePoolQuery<string[]>(routes.api.font._root, sqlQueries.selectFontsFontFamily, res);
            break;

          default: throw new Error('Invalid fontdata value: ' + fontdataValue);
        }
        break;
      default: throw new Error('Invalid query param: ' + queryParam);
    }

  } else {
    makePoolQuery<DbFont>(routes.api.font._root, sqlQueries.selectFontsTable, res);
  }
});

const fontGroupRoute = routes.api.font._root + '/:' + routes.api.font._urlParam.fontGroup;
console.log('FONTS ROUTER: ' + fontGroupRoute);
fontsRouter.get(fontGroupRoute, (req: Request, res: Response) => {
  // const route = routes.api.font._root + routes.api.font._urlParam.fontGroup;
  let fontGroupQuery = '';
  // .../font/:font-group = .../font/selectable or .../font/blacklisted
  let r = routes.api.font._urlParam.fontGroup;
  // console.log('Express: ' + fontGroupRoute + ', params: ' +
  //  JSON.stringify(req.params, null, 4) + '\nreq.params: ' + routes.api.font._urlParam.fontGroup);
  // handle routes with url param
  if (req.params && req.params[routes.api.font._urlParam.fontGroup]) {
    const urlParam = routes.api.font._urlParam.fontGroup;
    const fontGroup = req.params[urlParam];
    switch (fontGroup) {
      case FontGroupEnum.SELECTABLE: fontGroupQuery = sqlQueries.selectFontsSeletable; break;
      case FontGroupEnum.BLACKLISTED: fontGroupQuery = sqlQueries.selectFontsBlacklisted; break;
      default: {
        console.log('Error: invalid value for parameter "' + urlParam + '": ' + fontGroup);
        throw new Error('Error: invalid route: ' + fontGroup);
      }
    }
    makePoolQuery<DbFont>(fontGroupRoute, fontGroupQuery, res);
  }
});

const testDataRouter = express.Router();
testDataRouter.get(routes.api.test, (req: Request, res: Response) => {
  console.log('testDataRouter');
  makePoolQuery<TestData>(routes.api.test, sqlQueries.selectTestTable, res);
});

const allRoutes = express.Router();
allRoutes.get(routes.api.other, default200Response);

controllers.push(testDataRouter);
controllers.push(fontsRouter);
controllers.push(allRoutes);


const serverApp = new ServerApp(angularDist, PORT, staticPaths, middleWare, controllers);
serverApp.beginListening();


/**
 * __dirname = location where node script is currently executing
 * use path.join to resolve relative path ('../') in _appLocation
 * /server/dist/server.js -> ../../dist/dive-inn -> /dist/dive-inn/
 */
function debugFileAndDir() {
  console.log('\n\n********************************************************************************');
  console.log('Running:\t\t' + __filename);
  const tmp = path.join(__dirname, ANGULAR_APP_LOCATION);
  console.log('Angular App Path:\t' + ANGULAR_APP_LOCATION + '\nResolved:\t\t' + tmp);
}

