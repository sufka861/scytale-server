const prRouter = require ('express').Router();
const prController = require('../controller/pr.controller');

prRouter.get("/", prController.getAllPrs);
prRouter.post("/", prController.createPr)
prRouter.put("/:pr_id", prController.updatePr)
prRouter.delete("/:pr_id", prController.deletePr)

module.exports = { prRouter };