const {Schema, model, ObjectId} = require("mongoose");

const PRSchema = new Schema(
    {
        title: {type: String, required: true},
        description: String,
        author: {
            type: Object,
            required: true,
            properties: {
                first_name: {type: String, required: true},
                last_name: {type: String, required: true}
            }
        },
        status: {
            type: String,
            required: true,
            validate: {
                validator: (status) => {
                    return (status === "Draft" || status === "Closed" || status === "Open");
                },
                message: "Status could only be defines as Draft / Closed / Open",
            },
        },
        labels: [String],
        pr_number: {type: Number, required: true, min: 1},
        date: {type: Date, required: true}
    },
    {
        collection: "pull-requests"
    }
);

module.exports = model("PRModel", PRSchema);