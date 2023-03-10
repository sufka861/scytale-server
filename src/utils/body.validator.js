const { BodyNotSent } = require('./errors/bad.request.errors');
exports.bodyValidator = (req) => {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0)
        throw new BodyNotSent();
    return true;
};
