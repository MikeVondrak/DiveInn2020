"use strict";
// https://dev.to/aligoren/developing-an-express-application-using-typescript-3b1
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql_1 = __importDefault(require("mysql"));
const routes_1 = require("./routes");
const rxjs_1 = require("rxjs");
class ServerApp {
    constructor(angularAppLocation = '', port = '3000', staticPathList, middleWareList, controllerList) {
        this.angularAppLocation = angularAppLocation;
        this.port = port;
        this.staticPathList = staticPathList;
        this.middleWareList = middleWareList;
        this.controllerList = controllerList;
        this.dbConfig = {
            host: 'localhost',
            port: 3306,
            user: 'DiveMaster',
            password: 'D1v3M4st3r!!',
            database: 'dive_inn_test_db',
        };
        this.app = express_1.default(); // create a new express application instance
        this.port = process.env.PORT ? process.env.PORT : this.port; // process.env.PORT set by Heroku
        this.pool = this.createPool(this.dbConfig);
        // first to match route takes precedence,  static > middleware > controllers
        // '/' defaults to index.html from Express settings
        this.useStatic(this.staticPathList);
        this.useMiddleware(this.middleWareList);
        this.useControllers(this.controllerList);
        this.setCatchAllRoutes();
    }
    /**
     * Load app with paths from which to serve static files
     * @param paths array of paths to static file locations
     *  NOTE: express.static makes the files in the path passed in accessible from the root URL (e.g. localhost:3000/<file name>)
     *  Since we load the static paths first, calls to the root path (localhost:3000/) will end up loading /dist/dive-inn/index.html
     *  Can add a mount point to serve from a different path (e.g. '/static', doesn't have to exist) but causes problems w/Angular,
     *    may need to build with --base-href flag and/or set base href in index.html
     */
    useStatic(paths) {
        paths.forEach(path => {
            this.app.use(express_1.default.static(path));
            // this.app.use('/static', express.static(path)); // specify a mount path
        });
    }
    /**
     * Load middleware for processing requests
     * @param requestHandlers array of middleware RequestHandlers
     */
    useMiddleware(requestHandlers) {
        requestHandlers.forEach(requestHandler => {
            this.app.use(requestHandler);
        });
    }
    /**
     * Load controllers to handle API routes
     * @param routers array of Routers
     */
    useControllers(routers) {
        routers.forEach(router => {
            // this.app.use(routes.api.root, router);
            this.app.use(routes_1.routes.api._root, router);
        });
    }
    /**
     * Catch all unhandled routes
     * @TODO proper 404 etc error handling
     */
    setCatchAllRoutes() {
        this.app.all(routes_1.routes.error._404, (req, res) => {
            // res.status(200).sendFile('/', {root: angularAppLocation});
            res.status(404).send('Route Not Found');
        });
    }
    /**
     * Start Express app
     */
    beginListening() {
        this.app.listen(this.port, () => {
            console.log('********************************************************************************');
            console.log('Node Express server for "' + this.app.name + '" listening on port: ' + this.port + '\n');
        });
    }
    createPool(dbConfig, poolSize = 100) {
        const poolConfig = Object.assign({ connectionLimit: poolSize }, dbConfig);
        return mysql_1.default.createPool(poolConfig);
    }
    /**
     * Query using pool, automatically aquires and releases connection to db
     * @template T Type of Observable to return
     * @param sqlQuery SQL query string
     * @returns Observable of array of provided type, containing query results
     */
    // public poolQuery<T>(sqlQuery: string, callback: queryCallback): void {
    poolQuery(sqlQuery, values) {
        const queryResult$ = (observer) => {
            const queryOptions = {
                sql: sqlQuery,
            };
            const responseCallback = (err, rows, fields) => {
                if (err) {
                    observer.error(err);
                }
                observer.next(rows);
                observer.complete();
            };
            if (values) {
                this.pool.query(queryOptions, values, responseCallback);
            }
            else {
                this.pool.query(queryOptions, responseCallback);
            }
        };
        return new rxjs_1.Observable(queryResult$);
    }
    // Not sure we need to explicitly disconnet or do any cleanup?
    // Theoretically Node/Express "should never stop running"
    // can attach an event handler to process.on('exit', () => {})
    disconnectDb(connection) {
        connection.end();
    }
}
exports.ServerApp = ServerApp;
