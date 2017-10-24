import {Base, BaseModel} from './base';

export class Role extends Base {
    public getRole(params: BaseModel) {
        return this.currentAxios.get('role', {params:params});
    }

    public storeRole(params: BaseModel) {
        return this.currentAxios.post('role', params);
    }

    public editRole(params: BaseModel) {
        return this.currentAxios.get(`role/${params.id}/edit`);
    }

    public showRole(params: BaseModel) {
        return this.currentAxios.get(`role/${params.id}`);
    }

    public patchRole(params: BaseModel) {
        return this.currentAxios.patch(`role/${params.id}`, params);
    }

    public deleteRole(params: BaseModel) {
        return this.currentAxios.delete(`role/${params.id}`);
    }
}