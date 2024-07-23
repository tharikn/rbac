import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmationService, MenuItem, TreeNode } from 'primeng/api';
import { AlertService } from '../@core/service/alert.service';
import { PermissionStore } from '../@core/permissions/permission.store';
import { ManagementGroupsService } from '../@core/service/management-groups.service';
import { DataStoreService } from '../@core/service/data-store.service';
import * as i0 from "@angular/core";
export declare class OrganizationComponent implements OnInit {
    private managementGroupService;
    private formBuilder;
    private alertService;
    private confirmationService;
    private permissionStore;
    private _storeservice;
    RBACORG: RBACINFO;
    PERMISSION: any;
    organizations: TreeNode[];
    menuItems: MenuItem[];
    organizationForm: FormGroup;
    managementGroupForm: FormGroup;
    managementGroups: any[];
    nodeType: string;
    saveMode: string;
    selectedItem: any;
    orgId: any;
    orgName: string;
    constructor(managementGroupService: ManagementGroupsService, formBuilder: FormBuilder, alertService: AlertService, confirmationService: ConfirmationService, permissionStore: PermissionStore, _storeservice: DataStoreService);
    ngOnInit(): void;
    initializeOrganizationForm(): void;
    initializeManagementGroupForm(): void;
    onNodeContextMenuSelect(_event: any): void;
    nodeSelect(event: any): void;
    nodeExpand(event: any): void;
    saveOrganization(): void;
    validationOrg(): any;
    saveManagementGroup(): void;
    clearForm(): void;
    createManagementGroupForm(): void;
    private loadContextMenu;
    deleteOrganization(): void;
    private loadTree;
    static ɵfac: i0.ɵɵFactoryDeclaration<OrganizationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OrganizationComponent, "cardi-organization", never, { "RBACORG": { "alias": "RBACORG"; "required": false; }; "PERMISSION": { "alias": "PERMISSION"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class RBACINFO {
    apiHost: string;
    tokenKey: string;
    others?: any;
    orgID?: any;
    environment?: Environment;
    smsNotificationEnabled?: boolean;
}
export declare class Environment {
    mstrUsername?: string;
    mstrPassword?: string;
    mstrURL?: string;
    mstrProjectID?: string;
    applicationid?: string;
    priority?: string;
}
