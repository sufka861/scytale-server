const {Schema, model, ObjectId} = require("mongoose");

const PRSchema = new Schema(
        {
            title: {type: String, required: true},
            description: {type: String},
            author: {type: Object, required: true},
            status: {type: String, required: true},
            labels: {type: [String]},
            pr_number: {type: Number, required: true},
            date: {type: Date, required: true}
        },
        {
            collection: "pull-requests"
        }
    );

module.exports = model("PRModel", PRSchema);