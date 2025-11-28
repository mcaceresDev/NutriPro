function requestInfoMiddleware(req, res, next) {
    req.requestMeta = {
        ip: req.ip,
        userAgent: req.headers["user-agent"],
        referrer: req.headers["referer"] || null,
        user: req.session?.user || null,
        path: req.originalUrl,
        method: req.method
    };

    next();
}

module.exports = requestInfoMiddleware;
