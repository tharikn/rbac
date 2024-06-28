import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PermissionStore } from './pics-pagebuilder/@core/permissions/permission.store';
import { DataStoreService } from './pics-pagebuilder/@core/services/data-store.service';
import { RBACINFO } from './pics-pagebuilder/@core/url/page-builder-add-url.config';
import * as i0 from "@angular/core";
export declare class PageBuilderAddComponent implements OnInit {
    private permissionStore;
    private _storeservice;
    RBACORG: RBACINFO;
    PERMISSION: any;
    COMMONSERVICE: Observable<any>;
    INPUTVALIDATIONMETHOD?: any;
    constructor(permissionStore: PermissionStore, _storeservice: DataStoreService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PageBuilderAddComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PageBuilderAddComponent, "pagebuilder", never, { "RBACORG": { "alias": "RBACORG"; "required": false; }; "PERMISSION": { "alias": "PERMISSION"; "required": false; }; "COMMONSERVICE": { "alias": "COMMONSERVICE"; "required": false; }; "INPUTVALIDATIONMETHOD": { "alias": "INPUTVALIDATIONMETHOD"; "required": false; }; }, {}, never, never, false, never>;
}
