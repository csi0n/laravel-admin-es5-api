import {Base, BaseModel} from './base';

export class Menu extends Base {
    public getMenu(params: BaseModel) {
        return this.currentAxios.get('menu', params);
    }

    public storeMenu(params: BaseModel) {
        return this.currentAxios.post('menu', params);
    }

    public deleteMenu(params: BaseModel) {
        return this.currentAxios.delete(`menu/${params.id}`);
    }

    public patchMenu(params: BaseModel) {
        return this.currentAxios.patch(`menu/${params.id}`, params);
    }

    public sortMenu(params: BaseModel) {
        return this.currentAxios.post('menu/sort', params);
    }
}