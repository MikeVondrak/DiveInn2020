"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = function (req, res, next) {
    console.log("LOGGER: " + req.method + " " + req.path);
    next();
};
