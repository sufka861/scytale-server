const prRepository = require("../repositories/pr.repository");
// const {PropertyNotFound} = require("../errors/NotFound.errors");
const {ServerUnableError} = require("../errors/internal.errors");
const {bodyValidator} = require("../errors/body.validator");
const {BodyNotSent} = require("../errors/bad.request.errors");

const getAllPrs = async (req, res) => {
    const result = await prRepository.find();
    console.log(result);
    if (!result) throw new ServerUnableError("getAllExperiments")
    res.status(200).json(result);
};

const createPr = async (req, res) => {
    if (!bodyValidator(req)) throw new BodyNotSent();
    const result = await prRepository.create(req.body)
    if (!result) throw new ServerUnableError("createExperiments")
    res.status(200).json(result);
}

module.exports = {
    getAllPrs,
    createPr
}

// const getExperimentById = async (req, res) => {
//     if (!req.params.experiment_id) throw new PropertyNotFound("experiment_id");
//     const experiment_id = req.params.experiment_id;
//     const result = await ExperimentRepository.retrieve(experiment_id);
//     if (!result) throw new ServerUnableError("getExperimentById")
//     res.status(200).json(result);
// };
//
// const getExperimentsByAccountId = async (req, res) => {
//     if (!req.params.account_id) throw new PropertyNotFound("account_id");
//     const account_id = req.params.account_id;
//     const result = await ExperimentRepository.findByAttribute("account_id", account_id);
//     if (!result) throw new ServerUnableError("getExperimentsByAccountId")
//     res.status(200).json(result);
// }
//
// const getExperimentsAB = async (req, res) => {
//     if (!req.params.account_id) throw new PropertyNotFound("account_id");
//     const account_id = req.params.account_id;
//     const result = await ExperimentRepository.findByTwoAttributes("type", "a-b", "account_id", account_id);
//     if (!result) throw new ServerUnableError("getExperimentsAB")
//     res.status(200).json(result);
//
// }
//
// const getExperimentsFF = async (req, res) => {
//     if (!req.params.account_id) throw new PropertyNotFound("account_id");
//     const account_id = req.params.account_id;
//     const result = await ExperimentRepository.findByTwoAttributes("type", "f-f", "account_id", account_id);
//     if (!result) throw new ServerUnableError("getExperimentsFF")
//     res.status(200).json(result);
//
// }
//
// const getExperimentsByDate = async (req, res) => {
//     if (!req.query.year && req.query.month) throw new PropertyNotFound("year and month");
//     const year = req.query.year;
//     const month = req.query.month;
//     const result = await ExperimentRepository.findByDate(year, month);
//     if (!result) throw new ServerUnableError("getExperimentsByDate")
//     res.status(200).json(result);
// }
//

//
// const updateExperimentsByID = async (req, res) => {
//     if (!req.params.experiment_id) throw new PropertyNotFound("experiment_id");
//     const experimentID = req.params.experiment_id;
//     const result = await ExperimentRepository.update(experimentID, req.body)
//     if (!result) throw new ServerUnableError("updateExperimentsByID")
//     res.status(200).json(result);
// }
//
// const deleteExperimentsByID = async (req, res) => {
//     if (!req.params.experiment_id) throw new PropertyNotFound("experiment_id");
//     const experimentID = req.params.experiment_id;
//     const result = await ExperimentRepository.delete(experimentID)
//     if (!result) throw new ServerUnableError("deleteExperimentsByID")
//     res.status(200).json(result);
// }

