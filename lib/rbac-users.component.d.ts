import { OnInit } from '@angular/core';
import { PermissionStore } from './pics-rbac-users/@core/permissions/permission.store';
import { RBACINFO } from './pics-rbac-users/@core/urls/users-url.config';
import { DataStoreService } from './pics-rbac-users/@core/service/data-store.service';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class RbacUsersComponent implements OnInit {
    private permissionStore;
    private _storeservice;
    RBACORG: RBACINFO;
    PERMISSION: any;
    COMMONSERVICE: Observable<any>;
    constructor(permissionStore: PermissionStore, _storeservice: DataStoreService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RbacUsersComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RbacUsersComponent, "rbac-users", never, { "RBACORG": "RBACORG"; "PERMISSION": "PERMISSION"; "COMMONSERVICE": "COMMONSERVICE"; }, {}, never, never>;
}
