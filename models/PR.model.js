const {Schema, model, ObjectId} = require("mongoose");

const PRSchema = new Schema(
        {
            pr_number: {type: Number},
            title: {type: String, required: true},
            description: {type: String},
            author: {type: Object},
            status: {type: String, required: true},
            labels: {type: [String]},
            date: {
                type: Date,
                validate: {
                    validator: (date) => {
                        return date >= Date.now();
                    },
                    message: "Time of PR cannot be prior to this time"
                }
            }
        },
        {
            collection: "pull-requests"
        }
    )
;

module.exports = model("PRModel", PRSchema);