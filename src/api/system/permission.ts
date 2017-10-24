import {Base, BaseModel} from './base';

export class Permission extends Base {
    public getPermission(params: BaseModel) {
        return this.currentAxios.get('permission', {params:params});
    }

    public storePermission(params: BaseModel) {
        return this.currentAxios.post('permission', params);
    }

    public editPermission(params: BaseModel) {
        return this.currentAxios.get(`permission/${params.id}/edit`);
    }

    public showPermission(params: BaseModel) {
        return this.currentAxios.get(`permission/${params.id}`);
    }

    public patchPermission(params: BaseModel) {
        return this.currentAxios.patch(`permission/${params.id}`, params);
    }

    public deletePermission(params: BaseModel) {
        return this.currentAxios.delete(`permission/${params.id}`);
    }
}