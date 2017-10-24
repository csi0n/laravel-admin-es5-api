"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api/api");
class App {
    constructor(apiConfig) {
        this.api = new api_1.Api(apiConfig);
    }
}
exports.App = App;
