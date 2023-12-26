import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PermissionStore } from './@core/permissions/permission.store';
import { DataStoreService } from './@core/service/data-store.service';
import { RBACINFO } from './@core/urls/rbac-url.config';
import * as i0 from "@angular/core";
export declare class ConfigLoginSettingsComponent implements OnInit {
    private permissionStore;
    private _storeservice;
    RBACORG?: RBACINFO;
    PERMISSION?: any;
    configureEvent: Observable<any>;
    COMMONSERVICE: Observable<any>;
    constructor(permissionStore: PermissionStore, _storeservice: DataStoreService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfigLoginSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConfigLoginSettingsComponent, "config-login-settings", never, { "RBACORG": "RBACORG"; "PERMISSION": "PERMISSION"; "configureEvent": "configureEvent"; "COMMONSERVICE": "COMMONSERVICE"; }, {}, never, never>;
}
