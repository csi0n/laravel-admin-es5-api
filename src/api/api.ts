import {Auth} from './system/auth';
import {Menu} from './system/menu';
import {Permission} from './system/permission';
import {Role} from './system/role';
import {User} from './system/user';

export class Api {
    public auth: Auth;
    public menu: Menu;
    public permission: Permission;
    public role: Role;
    public user: User;

    constructor(config) {
        this.auth = new Auth(config);
        this.menu = new Menu(config);
        this.permission = new Permission(config);
        this.role = new Role(config);
        this.user = new User(config);
    }
}