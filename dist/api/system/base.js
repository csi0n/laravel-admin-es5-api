"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Base = /** @class */ (function () {
    function Base(config) {
        if (config.type === 'axios') {
            this.currentAxios = config.instance;
            this.apiConfig = config;
        }
    }
    return Base;
}());
exports.Base = Base;
