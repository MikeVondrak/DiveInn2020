"use strict";
exports.__esModule = true;
exports.logger = function (req, res, next) {
    console.log("LOGGER: " + req.method + " " + req.path);
    next();
};
//# sourceMappingURL=logger.js.map