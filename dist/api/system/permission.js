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
var Permission = /** @class */ (function (_super) {
    __extends(Permission, _super);
    function Permission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Permission.prototype.getPermission = function (params) {
        return this.currentAxios.get('permission', { params: params });
    };
    Permission.prototype.storePermission = function (params) {
        return this.currentAxios.post('permission', params);
    };
    Permission.prototype.editPermission = function (params) {
        return this.currentAxios.get("permission/" + params.id + "/edit");
    };
    Permission.prototype.showPermission = function (params) {
        return this.currentAxios.get("permission/" + params.id);
    };
    Permission.prototype.patchPermission = function (params) {
        return this.currentAxios.patch("permission/" + params.id, params);
    };
    Permission.prototype.deletePermission = function (params) {
        return this.currentAxios.delete("permission/" + params.id);
    };
    return Permission;
}(base_1.Base));
exports.Permission = Permission;
