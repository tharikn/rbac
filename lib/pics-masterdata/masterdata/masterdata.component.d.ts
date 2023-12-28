import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, AbstractControl } from '@angular/forms';
import { TreeNode, MenuItem, ConfirmationService } from 'primeng/api';
import { PermissionStore } from '../@core/permissions/permission.store';
import { AlertService } from '../@core/service/alert.service';
import { RbacService } from '../@core/service/rbac.service';
import { DataStoreService } from '../@core/service/data-store.service';
import { Subscription } from 'rxjs';
import { RBACINFO } from '../@core/urls/rbac-url.config';
import * as i0 from "@angular/core";
export declare class MasterdataComponent implements OnInit {
    private mastersService;
    private formBuilder;
    private alertService;
    private confirmationService;
    private permissionStore;
    private _storeservice;
    categories: TreeNode[];
    menuItems: MenuItem[];
    categoryForm: FormGroup;
    filterMasterList: any[];
    lookupForm: FormGroup;
    lookupRuleForm: FormGroup;
    roles: any[];
    permissions: any[];
    nodeType: string;
    saveMode: string;
    selectedItem: any;
    isGlobalLookup: boolean;
    dataControlActions: {
        value: string;
        name: string;
    }[];
    environment: any;
    RBACORG: RBACINFO;
    orgSubs: Subscription;
    orgId: any;
    constructor(mastersService: RbacService, formBuilder: FormBuilder, alertService: AlertService, confirmationService: ConfirmationService, permissionStore: PermissionStore, _storeservice: DataStoreService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    initializeCategoryForm(): void;
    initializeLookupForm(): void;
    get datarules(): FormArray;
    addRule(): FormGroup;
    onAddRule(): void;
    onDeleteRule(rowIndex: number): void;
    searchMaster(event: Event): void;
    onNodeContextMenuSelect(event: any): void;
    setInsertEvent(): void;
    nodeSelect(event: any): void;
    private clearRules;
    nodeExpand(event: any): void;
    saveCategory(): void;
    saveLookup(): void;
    clearForm(): void;
    createLookupForm(): void;
    setGlobal(checked: boolean): void;
    private loadContextMenu;
    private loadTree;
    private deleteItem;
    requiredIfValidator(predicate: () => any): (formControl: AbstractControl) => import("@angular/forms").ValidationErrors;
    static ɵfac: i0.ɵɵFactoryDeclaration<MasterdataComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MasterdataComponent, "lib-masterdata", never, {}, {}, never, never>;
}
