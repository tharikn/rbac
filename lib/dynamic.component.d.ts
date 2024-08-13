import { RBACINFO } from './pics-dynamic/@core/urls/rbac-url.config';
import { Observable } from 'rxjs';
import { PermissionStore } from './pics-dynamic/@core/permissions/permission.store';
import { DataStoreService } from './pics-dynamic/@core/service/data-store.service';
import * as i0 from "@angular/core";
export declare class DynamicComponent {
    private permissionStore;
    private _storeservice;
    RBACORG?: RBACINFO;
    PERMISSION?: any;
    tabEvent: Observable<any>;
    constructor(permissionStore: PermissionStore, _storeservice: DataStoreService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DynamicComponent, "lib-dynamic", never, { "RBACORG": { "alias": "RBACORG"; "required": false; }; "PERMISSION": { "alias": "PERMISSION"; "required": false; }; "tabEvent": { "alias": "tabEvent"; "required": false; }; }, {}, never, never, false, never>;
}
