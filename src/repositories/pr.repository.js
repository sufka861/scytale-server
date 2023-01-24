const MongoStorage = require('../db/mongo.storage');
// Notice:
//     This repository is here to enable future expantion to more repositories (other than pull requests)
//     That will both use the same generic functions of the MongoStorage class, and only differ by their specific methods
module.exports = new (class PrRepository extends MongoStorage {
    constructor() {
        super('PR');
    }
})();
