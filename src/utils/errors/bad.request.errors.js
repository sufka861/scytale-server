class BadRequest extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        this.status = 400;
    }
}

class BodyNotSent extends BadRequest {
    constructor() {
        super("Body not sent");
        this.name = this.constructor.name;
    }
}

module.exports = {BadRequest, BodyNotSent};