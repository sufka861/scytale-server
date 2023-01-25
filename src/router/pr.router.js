const prRouter = require('express').Router();
const prController = require('../controller/pr.controller');

prRouter.get('/', prController.getAllPrs);
prRouter.post('/', prController.createPr);

module.exports = { prRouter };
