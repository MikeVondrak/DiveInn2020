"use strict";
// https://dev.to/aligoren/developing-an-express-application-using-typescript-3b1
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mysql_1 = __importDefault(require("mysql"));
var routes_1 = require("./routes");
var rxjs_1 = require("rxjs");
var ServerApp = /** @class */ (function () {
    function ServerApp(angularAppLocation, port, staticPathList, middleWareList, controllerList) {
        if (angularAppLocation === void 0) { angularAppLocation = ''; }
        if (port === void 0) { port = '3000'; }
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
    ServerApp.prototype.useStatic = function (paths) {
        var _this = this;
        paths.forEach(function (path) {
            _this.app.use(express_1.default.static(path));
            // this.app.use('/static', express.static(path)); // specify a mount path
        });
    };
    /**
     * Load middleware for processing requests
     * @param requestHandlers array of middleware RequestHandlers
     */
    ServerApp.prototype.useMiddleware = function (requestHandlers) {
        var _this = this;
        requestHandlers.forEach(function (requestHandler) {
            _this.app.use(requestHandler);
        });
    };
    /**
     * Load controllers to handle API routes
     * @param routers array of Routers
     */
    ServerApp.prototype.useControllers = function (routers) {
        var _this = this;
        routers.forEach(function (router) {
            // this.app.use(routes.api.root, router);
            _this.app.use(routes_1.routes.api._root, router);
        });
    };
    /**
     * Catch all unhandled routes
     * @TODO proper 404 etc error handling
     */
    ServerApp.prototype.setCatchAllRoutes = function () {
        this.app.all(routes_1.routes.error._404, function (req, res) {
            // res.status(200).sendFile('/', {root: angularAppLocation});
            res.status(404).send('Route Not Found');
        });
    };
    /**
     * Start Express app
     */
    ServerApp.prototype.beginListening = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log('********************************************************************************');
            console.log('Node Express server for "' + _this.app.name + '" listening on port: ' + _this.port + '\n');
        });
    };
    ServerApp.prototype.createPool = function (dbConfig, poolSize) {
        if (poolSize === void 0) { poolSize = 100; }
        var poolConfig = __assign({ connectionLimit: poolSize }, dbConfig);
        return mysql_1.default.createPool(poolConfig);
    };
    /**
     * Query using pool, automatically aquires and releases connection to db
     * @template T Type of Observable to return
     * @param sqlQuery SQL query string
     * @returns Observable of array of provided type, containing query results
     */
    // public poolQuery<T>(sqlQuery: string, callback: queryCallback): void {
    ServerApp.prototype.poolQuery = function (sqlQuery, values) {
        var _this = this;
        var queryResult$ = function (observer) {
            var queryOptions = {
                sql: sqlQuery,
            };
            var responseCallback = function (err, rows, fields) {
                if (err) {
                    observer.error(err);
                }
                observer.next(rows);
                observer.complete();
            };
            if (values) {
                _this.pool.query(queryOptions, values, responseCallback);
            }
            else {
                _this.pool.query(queryOptions, responseCallback);
            }
        };
        return new rxjs_1.Observable(queryResult$);
    };
    // Not sure we need to explicitly disconnet or do any cleanup?
    // Theoretically Node/Express "should never stop running"
    // can attach an event handler to process.on('exit', () => {})
    ServerApp.prototype.disconnectDb = function (connection) {
        connection.end();
    };
    return ServerApp;
}());
exports.ServerApp = ServerApp;
