import {Api} from './api/api';

export class App {
    public api: Api;

    constructor(apiConfig) {
        this.api = new Api(apiConfig);
    }
}