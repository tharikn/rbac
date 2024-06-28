import { Injector, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertService } from '../../../@core/services/alert.service';
import { AuthService } from '../../../@core/services/auth.service';
import { CommonDropdownsService } from '../../../@core/services/common-dropdowns.service';
import { LocalService } from '../../../@core/services/local.service';
import { PageBuilderAddService } from '../../../@core/services/page-builder-add.service';
import { PageBuilderService } from '../../page-builder-version/@core/page-builder.service';
import { DataStoreService } from '../../../@core/services/data-store.service';
import * as i0 from "@angular/core";
export declare class RibbonTabConfigComponent implements OnInit, OnDestroy {
    private _formBuilder;
    private _alert;
    private _route;
    private _router;
    private _alertService;
    private _storeservice;
    tabsForm: UntypedFormGroup;
    formData: any;
    id: string;
    pageTypeList: any;
    dropdownService: CommonDropdownsService;
    pageList: any;
    filteredPageList: any;
    pageBuilderAddService: PageBuilderAddService;
    pageBuilderService: PageBuilderService;
    authService: AuthService;
    orgSubs: Subscription;
    orgId: any;
    allFieldList: any;
    parentFieldList: any;
    pageErrorShow: boolean;
    tabErrorShow: boolean;
    ribbonpageList: any;
    taborientationList: any;
    iconList: any;
    basicPageInformation: any;
    localStore: LocalService;
    RBACORG: any;
    constructor(injector: Injector, _formBuilder: UntypedFormBuilder, _alert: AlertService, _route: ActivatedRoute, _router: Router, _alertService: AlertService, _storeservice: DataStoreService);
    ngOnInit(): void;
    validationBasicInfo(): any;
    loadDropDowns(): void;
    ngOnDestroy(): void;
    setCurrentFormData(): void;
    initTabConfigForm(): void;
    getAllPages(): void;
    private addTabGroup;
    addTab(): void;
    get tabs(): UntypedFormArray;
    /**
     * Method to Remove tab
     * @param _index index of the tab to be removed
     */
    removeTab(_index: number): void;
    cancel(): void;
    saveTabs(publish: boolean): void;
    validationPage(): any;
    addChildTab(index: number): void;
    childTabs(tabIndex: number): UntypedFormArray;
    removeChildTab(tabIndex: number, childIndex: number): void;
    dropItem(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RibbonTabConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RibbonTabConfigComponent, "app-ribbon-tab-config", never, {}, {}, never, never, false, never>;
}
