const {Schema, model} = require("mongoose");

const PRSchema = new Schema(
    {
        title: {type: String, required: true},
        description: String,
        author: {
            type: Object,
            required: true,
            properties: {
                firstName: {type: String, required: true},
                lastName: {type: String, required: true}
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
        prNumber: {type: Number, required: true, min: 1},
        createdAt: {type: Date, required: true}
    },
    {
        collection: "pull-requests"
    }
);

module.exports = model("PRModel", PRSchema);