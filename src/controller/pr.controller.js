const prRepository = require('../repositories/pr.repository');
const { PropertyNotFound } = require('../utils/errors/not.found.errors');
const { ServerUnableError } = require('../utils/errors/internal.errors');
const { bodyValidator } = require('../utils/body.validator');
const { BodyNotSent } = require('../utils/errors/bad.request.errors');

const getAllPrs = async (req, res) => {
    const result = await prRepository.find();
    if (!result) throw new ServerUnableError('get all PRs');
    res.status(200).json(result);
};

const createPr = async (req, res) => {
    if (!bodyValidator(req)) throw new BodyNotSent();
    const prCounter = (await prRepository.count()) + 1;
    const prCounterObj = { prNumber: prCounter };
    const createdAt = Date.now();
    const createdAtObj = { createdAt: createdAt };
    const data = { ...req.body, ...prCounterObj, ...createdAtObj };
    const result = await prRepository.create(data);
    if (!result) throw new ServerUnableError('create PR');
    res.status(200).json(result);
};

module.exports = {
    getAllPrs,
    createPr,
};
