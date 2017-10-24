"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("./base");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User.prototype.getUser = function (params) {
        return this.currentAxios.get('user', params);
    };
    User.prototype.storeUser = function (params) {
        return this.currentAxios.post("user", params);
    };
    User.prototype.editUser = function (params) {
        return this.currentAxios.get("user/" + params.id + "/edit");
    };
    User.prototype.showUser = function (params) {
        return this.currentAxios.get("user/" + params.id);
    };
    User.prototype.patchUser = function (params) {
        return this.currentAxios.patch("user/" + params.id, params);
    };
    User.prototype.deleteUser = function (params) {
        return this.currentAxios.delete("user/" + params.id, params);
    };
    return User;
}(base_1.Base));
exports.User = User;
