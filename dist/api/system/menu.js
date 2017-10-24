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
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Menu.prototype.getMenu = function (params) {
        return this.currentAxios.get('menu', params);
    };
    Menu.prototype.storeMenu = function (params) {
        return this.currentAxios.post('menu', params);
    };
    Menu.prototype.deleteMenu = function (params) {
        return this.currentAxios.delete("menu/" + params.id);
    };
    Menu.prototype.patchMenu = function (params) {
        return this.currentAxios.patch("menu/" + params.id, params);
    };
    Menu.prototype.sortMenu = function (params) {
        return this.currentAxios.post('menu/sort', params);
    };
    return Menu;
}(base_1.Base));
exports.Menu = Menu;
