import {Base, BaseModel} from './base';

export class User extends Base {
    public getUser(params: BaseModel) {
        return this.currentAxios.get('user', params);
    }

    public storeUser(params: BaseModel) {
        return this.currentAxios.post(`user`, params);
    }

    public editUser(params: BaseModel) {
        return this.currentAxios.get(`user/${params.id}/edit`);
    }

    public showUser(params: BaseModel) {
        return this.currentAxios.get(`user/${params.id}`);
    }

    public patchUser(params: BaseModel) {
        return this.currentAxios.patch(`user/${params.id}`, params);
    }

    public deleteUser(params: BaseModel) {
        return this.currentAxios.delete(`user/${params.id}`, params);
    }
}