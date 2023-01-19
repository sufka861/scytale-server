const { Router} = require ('express');
const prController = require('../controller/pr.controller');
const prRouter = new Router();

prRouter.get("/prs", prController.getAllPrs);
prRouter.post("/prs", prController.createPr)

module.exports = { prRouter };