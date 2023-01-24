const prRouter = require ('express').Router();
const prController = require('../controller/pr.controller');

prRouter.get("/", prController.getAllPrs);
prRouter.post("/", prController.createPr)
prRouter.put("/:prId", prController.updatePr)
prRouter.delete("/:prId", prController.deletePr)

module.exports = { prRouter };