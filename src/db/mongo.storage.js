const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const Path = require('path');

module.exports = class MongoStorage {
    constructor(entity) {
        this.entityName = entity.charAt(0).toUpperCase() + entity.slice(1);
        this.Model = require(Path.join(
            __dirname,
            `../models/${this.entityName}.model.js`
        ));
        this.connect();
    }
    connect() {
        const connectionUrl = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.vem43fe.mongodb.net/?retryWrites=true&w=majority`;
        mongoose
            .connect(connectionUrl)
            .then(() =>
                console.log(`connected to ${this.entityName} collection`)
            )
            .catch((err) => console.log(`connection error: ${err}`));
    }

    find() {
        return this.Model.find({});
    }

    create(data) {
        const entity = new this.Model(data);
        return entity.save();
    }

    delete(id) {
        return this.Model.findByIdAndDelete(id);
    }

    update(id, data) {
        return this.Model.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true,
        });
    }

    count() {
        return this.Model.countDocuments({});
    }
};
