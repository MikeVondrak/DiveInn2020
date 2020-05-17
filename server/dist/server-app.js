"use strict";
// https://dev.to/aligoren/developing-an-express-application-using-typescript-3b1
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ServerApp = /** @class */ (function () {
    function ServerApp(port, staticPaths, middleWareList, controllerList) {
        if (port === void 0) { port = '3000'; }
        this.port = port;
        this.staticPaths = staticPaths;
        this.middleWareList = middleWareList;
        this.controllerList = controllerList;
        this.app = express_1.default(); // create a new express application instance
        this.port = process.env.PORT ? process.env.PORT : this.port;
        this.expressUseStatic(this.staticPaths);
        this.expressUse(this.middleWareList);
        this.expressUseRouters(this.controllerList);
    }
    ServerApp.prototype.expressUseStatic = function (paths) {
        var _this = this;
        paths.forEach(function (path) {
            _this.app.use(express_1.default.static(path));
        });
    };
    ServerApp.prototype.expressUseRouters = function (routers) {
        var _this = this;
        routers.forEach(function (router) {
            _this.app.use('/', router);
        });
    };
    ServerApp.prototype.expressUse = function (requestHandlers) {
        var _this = this;
        requestHandlers.forEach(function (requestHandler) {
            _this.app.use(requestHandler);
        });
    };
    ServerApp.prototype.beginListening = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log('********************************************************************************');
            console.log('Node Express server for ' + _this.app.name + ' listening on port: ' + _this.port);
        });
    };
    return ServerApp;
}());
exports.ServerApp = ServerApp;
