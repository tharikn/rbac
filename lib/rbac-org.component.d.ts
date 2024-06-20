import { RBACINFO } from './pics-rbac-org/organization/organization.component';
import { Observable } from 'rxjs';
import { PermissionStore } from './pics-rbac-org/@core/permissions/permission.store';
import { DataStoreService } from './pics-rbac-org/@core/service/data-store.service';
import * as i0 from "@angular/core";
export declare class RbacOrgComponent {
    private permissionStore;
    private _storeservice;
    RBACORG: RBACINFO;
    PERMISSION: any;
    COMMONSERVICE: Observable<any>;
    INPUTVALIDATIONMETHOD?: any;
    constructor(permissionStore: PermissionStore, _storeservice: DataStoreService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RbacOrgComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RbacOrgComponent, "rbac-org", never, { "RBACORG": { "alias": "RBACORG"; "required": false; }; "PERMISSION": { "alias": "PERMISSION"; "required": false; }; "COMMONSERVICE": { "alias": "COMMONSERVICE"; "required": false; }; "INPUTVALIDATIONMETHOD": { "alias": "INPUTVALIDATIONMETHOD"; "required": false; }; }, {}, never, never, false, never>;
}
