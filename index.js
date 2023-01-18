require("dotenv").config();
// require("express-async-errors");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const app = express();
const {errorHandler} = require("./middleware/error.handler.mw");
const logPath = path.join(__dirname, "logs", "http.log");
const port = process.env.PORT || 3000;
// const {testRouter} = require("./router/external.routes");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
    logger(":date --> :method :url :status :response-time ms", {
        stream: fs.createWriteStream(logPath, {flags: "a"}),
    })
);
app.use(cors());

// Routes goes here!
// app.use("/test", testRouter);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});

const prRepository = require("./repositories/pr.repository");
