"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class Permission extends base_1.Base {
    getPermission(params) {
        return this.currentAxios.get('permission', { params: params });
    }
    storePermission(params) {
        return this.currentAxios.post('permission', params);
    }
    editPermission(params) {
        return this.currentAxios.get(`permission/${params.id}/edit`);
    }
    showPermission(params) {
        return this.currentAxios.get(`permission/${params.id}`);
    }
    patchPermission(params) {
        return this.currentAxios.patch(`permission/${params.id}`, params);
    }
    deletePermission(params) {
        return this.currentAxios.delete(`permission/${params.id}`);
    }
}
exports.Permission = Permission;
