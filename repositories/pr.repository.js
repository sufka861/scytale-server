const MongoStorage = require("../db/mongo.storage");

module.exports = new (class PrRepository extends MongoStorage {
    constructor() {
        super("PR");
    }
})();