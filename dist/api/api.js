"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("./system/auth");
const menu_1 = require("./system/menu");
const permission_1 = require("./system/permission");
const role_1 = require("./system/role");
const user_1 = require("./system/user");
class Api {
    constructor(config) {
        this.auth = new auth_1.Auth(config);
        this.menu = new menu_1.Menu(config);
        this.permission = new permission_1.Permission(config);
        this.role = new role_1.Role(config);
        this.user = new user_1.User(config);
    }
}
exports.Api = Api;
