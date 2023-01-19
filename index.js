require("dotenv").config();
require("express-async-errors");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const app = express();
const {errorHandler} = require("./middleware/error.handler.mw");
const logPath = path.join(__dirname, "logs", "http.log");
const port = process.env.PORT || 3000;
const {prRouter} = require("./router/pr.router");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
    logger(":date --> :method :url :status :response-time ms", {
        stream: fs.createWriteStream(logPath, {flags: "a"}),
    })
);
app.use(cors());

app.use("/prs", prRouter);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});
