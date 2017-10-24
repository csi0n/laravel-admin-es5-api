"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class Menu extends base_1.Base {
    getMenu(params) {
        return this.currentAxios.get('menu', params);
    }
    storeMenu(params) {
        return this.currentAxios.post('menu', params);
    }
    deleteMenu(params) {
        return this.currentAxios.delete(`menu/${params.id}`);
    }
    patchMenu(params) {
        return this.currentAxios.patch(`menu/${params.id}`, params);
    }
    sortMenu(params) {
        return this.currentAxios.post('menu/sort', params);
    }
}
exports.Menu = Menu;
