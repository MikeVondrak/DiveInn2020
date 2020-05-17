"use strict";
// https://dev.to/aligoren/developing-an-express-application-using-typescript-3b1
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ServerApp = /** @class */ (function () {
    function ServerApp(port, staticPathList, middleWareList, controllerList) {
        if (port === void 0) { port = '3000'; }
        this.port = port;
        this.staticPathList = staticPathList;
        this.middleWareList = middleWareList;
        this.controllerList = controllerList;
        this.app = express_1.default(); // create a new express application instance
        this.port = process.env.PORT ? process.env.PORT : this.port; // process.env.PORT set by Heroku
        // first to match route takes precedence,  static > middleware > controllers
        // '/' defaults to 
        this.useStatic(this.staticPathList);
        this.useMiddleware(this.middleWareList);
        this.useControllers(this.controllerList);
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
            //this.app.use('/static', express.static(path)); // specify a mount path
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
            _this.app.use('*', router);
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
    return ServerApp;
}());
exports.ServerApp = ServerApp;
