require('express-async-errors');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const app = express();
const { errorHandler } = require('./utils/error.handler');
const logPath = path.join(__dirname, '../logs', '/http.log');
const { prRouter } = require('./router/pr.router');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    logger(':date --> :method :url :status :response-time ms', {
        stream: fs.createWriteStream(logPath, { flags: 'a' }),
    }),
);
app.use(cors());

app.use('/prs', prRouter);

app.use(errorHandler);

module.exports = app;
