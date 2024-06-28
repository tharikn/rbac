import { Injector, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertService } from '../../../@core/services/alert.service';
import { AuthService } from '../../../@core/services/auth.service';
import { CommonDropdownsService } from '../../../@core/services/common-dropdowns.service';
import { PageBuilderAddService } from '../../../@core/services/page-builder-add.service';
import { PageBuilderService } from '../../page-builder-version/@core/page-builder.service';
import { DataStoreService } from '../../../@core/services/data-store.service';
import * as i0 from "@angular/core";
interface CustomPage {
    name: any;
    component: any;
    componentName: any;
    selectedTag: any;
}
export declare class RoutingConfigComponent implements OnInit, OnDestroy {
    private _formBuilder;
    private _alert;
    private _route;
    private _router;
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
    customPage: CustomPage[];
    RBACORG: any;
    constructor(injector: Injector, _formBuilder: UntypedFormBuilder, _alert: AlertService, _route: ActivatedRoute, _router: Router, _storeservice: DataStoreService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    setCurrentFormData(): void;
    initTabConfigForm(): void;
    getPageTypes(): void;
    getAllPages(): void;
    selectedPageType(event: any): void;
    private addTabGroup;
    get tabs(): UntypedFormControl[];
    /**
     * Method to Remove tab
     * @param _index index of the tab to be removed
     */
    cancel(): void;
    saveTabs(publish: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RoutingConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RoutingConfigComponent, "app-routing-config", never, {}, {}, never, never, false, never>;
}
export {};
