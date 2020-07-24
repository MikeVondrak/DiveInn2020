// const express = require('express'); // old js way of importing
// express and middleware
import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import * as path from 'path';
// framework
import { take } from 'rxjs/operators';
// our backend
import { ServerApp } from './server-app';
import { logger } from './middleware/logger';
import { sqlQueries } from './sql-queries';
import { routes } from './routes';
const PORT = process.env.PORT || '3000'; // process.env.PORT set by server (e.g. Heroku) when hosted, or use 3000 for local testing
// running server app from ./server/app or ./server/dist (for prod)
const ANGULAR_APP_LOCATION = '../../dist/dive-inn'; // output from ng build --prod
const ANGULAR_ASSETS_LOCATION = '../../src/assets'; /** @TODO more consistent locations / file structure */
debugFileAndDir();
// list of paths for statically served content
// __dirname provided by Express, location app is running from
const angularDist = path.join(__dirname, ANGULAR_APP_LOCATION);
const assets = path.join(__dirname, ANGULAR_ASSETS_LOCATION);
const staticPaths = [
    angularDist,
    assets // images, fonts, etc
];
// compile our list of middleware
const middleWare = [
    // Express Framework Built-Ins
    compression(),
    express.json(),
    cookieParser(),
    // custom
    logger
];
// define controllers for paths
const controllers = [];
const default200Response = (req, res) => {
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
        .pipe(take(1))
        .subscribe((results) => {
        res.send(results);
    }, (err) => {
        console.log('\n!!!!! Express - Failed getting data from: ' + route + '\n\t' + err);
    });
}
const fontsRouter = express.Router();
fontsRouter.get(routes.api.font._root, (req, res) => {
    console.log('----- fontsRouter GET: ' + routes.api.font._root);
    // handle routes where request has query parameters included
    if (req.query && Object.keys(req.query).length > 0) {
        const queryParam = Object.keys(req.query)[0];
        switch (queryParam) {
            case 'fontdata':
                const fontdataValue = req.query[queryParam];
                switch (fontdataValue) {
                    case 'family':
                        makePoolQuery(routes.api.font._root, sqlQueries.selectFontsFontFamily, res);
                        break;
                    default: throw new Error('Invalid fontdata value: ' + fontdataValue);
                }
                break;
            default: throw new Error('Invalid query param: ' + queryParam);
        }
    }
    else {
        makePoolQuery(routes.api.font._root, sqlQueries.selectFontsTable, res);
    }
});
// handle adding new font
const addFontRoute = routes.api.font._root + routes.api.font.add;
fontsRouter.post(addFontRoute, (req, res) => {
    const newFont = req.body;
    console.log('fontsRouter ADD: ' + JSON.stringify(newFont, null, 4));
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // TODO need to return the new font list array instead of poolQuery result (add functionality to makePoolQuery?)
    makePoolQuery(addFontRoute, sqlQueries.insertFont, res, newFont);
    //res.send([]);
});
// handle removing font
const removeFontRoute = routes.api.font._root + routes.api.font.remove;
fontsRouter.post(removeFontRoute, (req, res) => {
    const removeFontId = req.body.id;
    console.log('fontsRouter REMOVE: ' + removeFontId);
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // TODO need to return the new font list array instead of poolQuery result (add functionality to makePoolQuery?)
    makePoolQuery(removeFontRoute, sqlQueries.removeFont, res, removeFontId);
});
const testDataRouter = express.Router();
testDataRouter.get(routes.api.test, (req, res) => {
    console.log('testDataRouter');
    makePoolQuery(routes.api.test, sqlQueries.selectTestTable, res);
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
//# sourceMappingURL=server.js.map