"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class Role extends base_1.Base {
    getRole(params) {
        return this.currentAxios.get('role', { params: params });
    }
    storeRole(params) {
        return this.currentAxios.post('role', params);
    }
    editRole(params) {
        return this.currentAxios.get(`role/${params.id}/edit`);
    }
    showRole(params) {
        return this.currentAxios.get(`role/${params.id}`);
    }
    patchRole(params) {
        return this.currentAxios.patch(`role/${params.id}`, params);
    }
    deleteRole(params) {
        return this.currentAxios.delete(`role/${params.id}`);
    }
}
exports.Role = Role;
