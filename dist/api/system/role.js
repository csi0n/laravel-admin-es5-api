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
var Role = /** @class */ (function (_super) {
    __extends(Role, _super);
    function Role() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Role.prototype.getRole = function (params) {
        return this.currentAxios.get('role', { params: params });
    };
    Role.prototype.storeRole = function (params) {
        return this.currentAxios.post('role', params);
    };
    Role.prototype.editRole = function (params) {
        return this.currentAxios.get("role/" + params.id + "/edit");
    };
    Role.prototype.showRole = function (params) {
        return this.currentAxios.get("role/" + params.id);
    };
    Role.prototype.patchRole = function (params) {
        return this.currentAxios.patch("role/" + params.id, params);
    };
    Role.prototype.deleteRole = function (params) {
        return this.currentAxios.delete("role/" + params.id);
    };
    return Role;
}(base_1.Base));
exports.Role = Role;
