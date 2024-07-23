import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PermissionStore } from './pics-rbac-permissions/@core/permissions/permission.store';
import { DataStoreService } from './pics-rbac-permissions/@core/service/data-store.service';
import { RBACINFO } from './pics-rbac-permissions/@core/urls/rbac-url.config';
import * as i0 from "@angular/core";
export declare class RbacPermissionsComponent implements OnInit {
    private permissionStore;
    private _storeservice;
    RBACORG?: RBACINFO;
    PERMISSION?: any;
    permissionEvent: Observable<any>;
    COMMONSERVICE: Observable<any>;
    INPUTVALIDATIONMETHOD?: any;
    constructor(permissionStore: PermissionStore, _storeservice: DataStoreService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RbacPermissionsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RbacPermissionsComponent, "rbac-permissions", never, { "RBACORG": { "alias": "RBACORG"; "required": false; }; "PERMISSION": { "alias": "PERMISSION"; "required": false; }; "permissionEvent": { "alias": "permissionEvent"; "required": false; }; "COMMONSERVICE": { "alias": "COMMONSERVICE"; "required": false; }; "INPUTVALIDATIONMETHOD": { "alias": "INPUTVALIDATIONMETHOD"; "required": false; }; }, {}, never, never, false, never>;
}
