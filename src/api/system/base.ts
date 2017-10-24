import axios from 'axios';

export interface ApiConfig {
    type: string;
    instance: any;
}

export interface BaseModel {
    [propName: string]: any;
}

export class Base {
    protected currentAxios;
    protected apiConfig: ApiConfig;

    constructor(config: ApiConfig) {
        if (config.type === 'axios') {
            this.currentAxios = config.instance;
            this.apiConfig = config;
        }
    }
}