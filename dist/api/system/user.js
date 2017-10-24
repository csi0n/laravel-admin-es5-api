"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class User extends base_1.Base {
    getUser(params) {
        return this.currentAxios.get('user', params);
    }
    storeUser(params) {
        return this.currentAxios.post(`user`, params);
    }
    editUser(params) {
        return this.currentAxios.get(`user/${params.id}/edit`);
    }
    showUser(params) {
        return this.currentAxios.get(`user/${params.id}`);
    }
    patchUser(params) {
        return this.currentAxios.patch(`user/${params.id}`, params);
    }
    deleteUser(params) {
        return this.currentAxios.delete(`user/${params.id}`, params);
    }
}
exports.User = User;
