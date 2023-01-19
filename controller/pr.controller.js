const prRepository = require("../repositories/pr.repository");
const {PropertyNotFound} = require("../errors/not.found.errors");
const {ServerUnableError} = require("../errors/internal.errors");
const {bodyValidator} = require("../errors/body.validator");
const {BodyNotSent} = require("../errors/bad.request.errors");

const getAllPrs = async (req, res) => {
    const result = await prRepository.find();
    if (!result) throw new ServerUnableError("get all PRs")
    res.status(200).json(result);
};

const createPr = async (req, res) => {
    if (!bodyValidator(req)) throw new BodyNotSent();
    const prCounter = await prRepository.count() + 1;
    const prCounterObj= {pr_number: prCounter};
    const date = Date.now();
    const dateObj = {date: date};
    const data = {...req.body, ...prCounterObj, ...dateObj};
    console.log(data);
    const result = await prRepository.create(data);
    if (!result) throw new ServerUnableError("create PR")
    res.status(200).json(result);
}

const updatePr = async (req, res) => {
    if (!req.params.pr_id) throw new PropertyNotFound("pr_id");
    const pr_id = req.params.pr_id;
    const result = await prRepository.update(pr_id, req.body)
    if (!result) throw new ServerUnableError("update PR")
    res.status(200).json(result);
}

const deletePr = async (req, res) => {
    if (!req.params.pr_id) throw new PropertyNotFound("pr_id");
    const prID = req.params.pr_id;
    const result = await prRepository.delete(prID)
    if (!result) throw new ServerUnableError("delete PR");
    res.status(200).json(result);
}

module.exports = {
    getAllPrs,
    createPr,
    updatePr,
    deletePr
}



