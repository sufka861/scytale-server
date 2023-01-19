const prRouter = require ('express').Router();
const prController = require('../controller/pr.controller');
// const prRouter = new Router();

prRouter.get("/", prController.getAllPrs);
prRouter.post("/", prController.createPr)

module.exports = { prRouter };