import { ChangeDetectorRef, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../@core/service/auth.service';
import { PageAccessService } from '../@core/urls/page-access.service';
import { AlertService } from '../@core/service/alert.service';
import { Subscription } from 'rxjs';
import { RBACINFO } from '../@core/urls/rbac-url.config';
import { DataStoreService } from '../@core/service/data-store.service';
import * as i0 from "@angular/core";
export declare class PageaccessComponent implements OnInit {
    private formBuilder;
    cdRef: ChangeDetectorRef;
    private _storeservice;
    private router;
    private alert;
    rbacForm: FormGroup;
    userList: any[];
    policyGroupData: any[];
    roleAddedData: any[];
    pageLevelAccess: boolean;
    multiPageAccess: boolean;
    fieldLevelAccess: boolean;
    moduleList: any[];
    subModuleList: any[];
    pageData: any[];
    pagesList: any[];
    selectedPageData: any[];
    fData: any[];
    moduleDropdownSettings: {};
    submoduleDropdownSettings: {};
    pageDropdownSettings: {};
    pageAccessDropdownSettings: {};
    fieldAccessDropdownSettings: {};
    AddComponent: any;
    fieldLevelClick: boolean;
    editPage: boolean;
    selectedFieldData: any[];
    organisationid: any;
    existingSelectedFieldData: any[];
    savedPageAccessPatching: boolean;
    savedFieldPagesPatching: any[];
    selectedPageLevelData: any[];
    selectedPageAccessChanges: any[];
    isRunCond: boolean;
    selectedAccess: string;
    updatePage: boolean;
    selectedId: number;
    assetList: any;
    policyGroupPages: Array<any>;
    selectedRole: string;
    conditions: Array<any>;
    permissions: Array<any>;
    showFieldValidity: boolean;
    pageAccessService: PageAccessService;
    orgSubs: Subscription;
    orgId: any;
    environment: any;
    RBACORG: RBACINFO;
    PERMISSION: any;
    authService: AuthService;
    pId: any;
    fullArray: any;
    mergedAsset: any;
    fieldLevelCheckCount: any;
    constructor(injector: Injector, formBuilder: FormBuilder, cdRef: ChangeDetectorRef, _storeservice: DataStoreService, router: Router, alert: AlertService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    loadRbacForm(): void;
    accessBy(evt: any): void;
    userDropdown(evt: any): void;
    roleDropdown(evt: any): void;
    policyDropdown(evt: any): void;
    dropDownSelectedValues(evt: any): void;
    getOrganizationPage(): void;
    getFallbackPermission(fAccess: any): any[];
    getSelectedPages(_selectedPages?: any, _pageConfig?: any, _assetconfig?: any): void;
    policyGroupCondition(data: any, policyGroup: any): void;
    getConfiguredAssetData(selectedAccess: any, selectedId: any): void;
    loadPages(tempPageData: any, action: any, pageids: any, pageConfig: any, fieldConfig: any): void;
    populatePage(action?: any, pageConfig?: any, fieldConfig?: any, pageids?: any): void;
    removeAllPopulatePage(): void;
    showLevelAccess(id: any): void;
    fPagesCheckLength(fpages: any, pageIds: any): void;
    getPageLevelList(action?: any, pageConfig?: any): void;
    getVersionAccessArray(existSelectedPageId: any, pId: any, i: any, accessArray: any, pageName: any, setAccess: any, pageConfig: any): void;
    getPageAccessArray(pId: any, i: any, accessArray: any, pageName: any, setAccess: any, pageConfig: any): void;
    forActionClick(action: any, pId: any, accessArray: any): void;
    checkAccessType(data: any): any;
    getFieldLevelList(action?: any, fieldConfig?: any): void;
    checkFieldLevelCondition(fieldLevel: any, pAccessId: any): void;
    fieldVersionCheck(fieldLevel: any, pAccessId: any): void;
    fieldConfigCheck(fieldConfig: any, accessArray: any): void;
    getMergedAsset(accessArray: any): void;
    getAccessArrayCheck(data: any, formValue: any, accessArray: any): void;
    checkMergedAsset(data: any): void;
    getAccessByAsset(accessArray: any): void;
    mergeAsset(arr1: any, arr2: any): any;
    saveRbac(): void;
    getPageLevelByArray(pageLevelData: any): void;
    getFieldLevelByAsset(fieldLevelData: any): void;
    setPolicyLevelPagePatching(pageConfig: any, assetconfig: any): void;
    setPolicyLevelFieldPatching(pageConfig: any, assetconfig: any, from?: any): void;
    getDataBasedOnPolicy(from?: any): void;
    getCheckPageConfig(pageConfig: any): void;
    getDataBasedOnRole(from?: any): void;
    getOrgId(pageConfig: any): void;
    getCheckRolePolicyGroup(pageConfig: any): void;
    getRoleAndPolicyData(from?: any): void;
    getCheckPolicyLevelField(pageConfig: any): void;
    resetForm(id?: any, clear?: any): void;
    redirectList(): void;
    saveAccessPatching(): void;
    changeFieldAccess(_index: any): void;
    changePageAccess(index: any): void;
    removeValue(e: any, item: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PageaccessComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PageaccessComponent, "lib-pageaccess", never, {}, {}, never, never, false, never>;
}
