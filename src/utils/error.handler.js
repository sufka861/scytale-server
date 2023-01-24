const logger = require('./loggers/error.logger');

exports.errorHandler = (error, req, res, next) => {
    console.log(error);
    logger.error(error.message);
    res.status(error.status || 500);
    res.json({ message: error.message || 'Internal Server Error' });
};
