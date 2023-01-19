const {Schema, model, ObjectId} = require("mongoose");

const PRSchema = new Schema(
        {
            pr_number: {type: Number},
            title: {type: String},
            description: {type: String},
            author: {type: Object},
            status: {type: String},
            labels: {type: [String]},
            date: {type: String},
        },
        {
            collection: "pull-requests"
        }
    )
;

module.exports = model("PRModel", PRSchema);