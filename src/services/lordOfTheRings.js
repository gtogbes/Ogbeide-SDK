const movies = require('./movies');
const quotes = require('./quotes');
const apiRequest = require("../utils/api");

class LordOfTheRings {
    #apiRequest
    constructor(apiKey) {
        if(!apiKey) throw "auth token is required";
        this.#apiRequest = apiRequest(apiKey)
        this.movies = movies("/movie", this.#apiRequest)
        this.quotes = quotes("/quote", this.#apiRequest)
    }
    
}

module.exports = LordOfTheRings;