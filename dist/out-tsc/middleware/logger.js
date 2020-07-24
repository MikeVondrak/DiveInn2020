export const logger = (req, res, next) => {
    console.log(`LOGGER: ${req.method} ${req.path}`);
    next();
};
//# sourceMappingURL=logger.js.map