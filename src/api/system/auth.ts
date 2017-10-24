import {Base, BaseModel} from './base';

export class Auth extends Base {
    public postLogin(params: BaseModel) {
        return this.currentAxios.post('login', params);
    }

    public getLogout(params: BaseModel) {
        return this.currentAxios.get('logout', params);
    }
}