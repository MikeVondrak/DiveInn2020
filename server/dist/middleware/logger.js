"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = (req, res, next) => {
    console.log(`LOGGER: ${req.method} ${req.path}`);
    next();
};
