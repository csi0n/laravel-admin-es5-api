"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class Auth extends base_1.Base {
    postLogin(params) {
        return this.currentAxios.post('login', params);
    }
    getLogout(params) {
        return this.currentAxios.get('logout', params);
    }
}
exports.Auth = Auth;
