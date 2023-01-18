const {Schema, model, ObjectId} = require("mongoose");

const PRSchema = new Schema(
        {

        },
        {
            collection: "pull-requests"
        }
    )
;



module.exports = model("PRModel", PRSchema);