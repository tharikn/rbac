import { EventEmitter, OnInit } from '@angular/core';
import { RBACINFO } from './pics-login/@core/urls/rbac-url.config';
import { Observable } from 'rxjs';
import { PermissionStore } from './pics-login/@core/permissions/permission.store';
import { DataStoreService } from './pics-login/@core/service/data-store.service';
import * as i0 from "@angular/core";
export declare class LoginComponent implements OnInit {
    private permissionStore;
    private _storeservice;
    RBACORG?: RBACINFO;
    PERMISSION?: any;
    LOGININFO?: any;
    loginEvent: Observable<any>;
    libOnPasswordExpired: EventEmitter<any>;
    libOnLoginSuccessful: EventEmitter<any>;
    constructor(permissionStore: PermissionStore, _storeservice: DataStoreService);
    ngOnInit(): void;
    onPasswordExpired($event: any): void;
    onLoginSuccessful($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoginComponent, "login", never, { "RBACORG": { "alias": "RBACORG"; "required": false; }; "PERMISSION": { "alias": "PERMISSION"; "required": false; }; "LOGININFO": { "alias": "LOGININFO"; "required": false; }; "loginEvent": { "alias": "loginEvent"; "required": false; }; }, { "libOnPasswordExpired": "libOnPasswordExpired"; "libOnLoginSuccessful": "libOnLoginSuccessful"; }, never, never, false, never>;
}
