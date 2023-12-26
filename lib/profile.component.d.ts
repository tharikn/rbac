import { OnInit } from '@angular/core';
import { RBACINFO } from './pics-profile/@core/urls/rbac-url.config';
import { Observable } from 'rxjs';
import { PermissionStore } from './pics-profile/@core/permissions/permission.store';
import { DataStoreService } from './pics-profile/@core/service/data-store.service';
import * as i0 from "@angular/core";
export declare class ProfileComponent implements OnInit {
    private permissionStore;
    private _storeservice;
    RBACORG?: RBACINFO;
    PERMISSION?: any;
    profileEvent: Observable<any>;
    constructor(permissionStore: PermissionStore, _storeservice: DataStoreService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProfileComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProfileComponent, "profile", never, { "RBACORG": "RBACORG"; "PERMISSION": "PERMISSION"; "profileEvent": "profileEvent"; }, {}, never, never>;
}
