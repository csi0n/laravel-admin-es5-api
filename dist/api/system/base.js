"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Base {
    constructor(config) {
        if (config.type === 'axios') {
            this.currentAxios = config.instance;
            this.apiConfig = config;
        }
    }
}
exports.Base = Base;
