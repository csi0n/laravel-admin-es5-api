"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("./api/api");
var App = /** @class */ (function () {
    function App(apiConfig) {
        this.api = new api_1.Api(apiConfig);
    }
    return App;
}());
exports.App = App;
