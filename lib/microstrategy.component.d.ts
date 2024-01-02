import { OnInit } from '@angular/core';
import { RBACINFO } from './@core/urls/analytics-url.config';
import { Observable } from 'rxjs';
import { PermissionStore } from './@core/permissions/permission.store';
import { DataStoreService } from './@core/service/data-store.service';
import * as i0 from "@angular/core";
export declare class MicrostrategyComponent implements OnInit {
    private permissionStore;
    private _storeservice;
    RBACORG?: RBACINFO;
    PERMISSION?: any;
    analyticsEvent: Observable<any>;
    constructor(permissionStore: PermissionStore, _storeservice: DataStoreService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MicrostrategyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MicrostrategyComponent, "microstrategy", never, { "RBACORG": "RBACORG"; "PERMISSION": "PERMISSION"; "analyticsEvent": "analyticsEvent"; }, {}, never, never>;
}
