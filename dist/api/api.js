"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = require("./system/auth");
var menu_1 = require("./system/menu");
var permission_1 = require("./system/permission");
var role_1 = require("./system/role");
var user_1 = require("./system/user");
var Api = /** @class */ (function () {
    function Api(config) {
        this.auth = new auth_1.Auth(config);
        this.menu = new menu_1.Menu(config);
        this.permission = new permission_1.Permission(config);
        this.role = new role_1.Role(config);
        this.user = new user_1.User(config);
    }
    return Api;
}());
exports.Api = Api;
