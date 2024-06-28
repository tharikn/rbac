import { Location } from '@angular/common';
import { Injector, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertService } from '../../../@core/services/alert.service';
import { AuthService } from '../../../@core/services/auth.service';
import { LocalService } from '../../../@core/services/local.service';
import { PageAccessService } from '../../../@core/services/page-access.service';
import { PageBuilderAddService } from '../../../@core/services/page-builder-add.service';
import { PageBuilderService } from '../../page-builder-version/@core/page-builder.service';
import { DataStoreService } from '../../../@core/services/data-store.service';
import * as i0 from "@angular/core";
export declare class RibbonDesignPageComponent implements OnInit {
    private router;
    private route;
    private alert;
    dialog: MatDialog;
    private location;
    private localstore;
    private pageAccessService;
    private authService;
    private fb;
    private _storeservice;
    formData: any;
    form: any;
    isValidFormDetails: boolean;
    id: string;
    updatedfrom: any;
    options: any;
    changedFormData: any;
    assetList: any;
    allFields: any[];
    logedInUser: any;
    isEditPage: boolean;
    isViewPage: boolean;
    selectedPage: any;
    pageBuilderAddService: PageBuilderAddService;
    localstorage: LocalService;
    basicPageInformation: any;
    pageBuilderService: PageBuilderService;
    orgSubs: Subscription;
    positionList: any;
    orgId: any;
    pageData: any[];
    pagesList: any[];
    selectedLinkPage: any;
    selectedPosition: any;
    configForm: UntypedFormGroup;
    RBACORG: any;
    constructor(injector: Injector, router: Router, route: ActivatedRoute, alert: AlertService, dialog: MatDialog, location: Location, localstore: LocalService, pageAccessService: PageAccessService, authService: AuthService, fb: UntypedFormBuilder, _storeservice: DataStoreService);
    ngOnInit(): void;
    initialiseConfigForm(): void;
    ribbonConfigGroup(): void;
    get itemsFormArray(): UntypedFormArray;
    getCurrentFormData(): void;
    getCurrentBasicData(): void;
    resetForm: any;
    goToDetailPage(): void;
    formSubmit: any;
    patchPage(formDetails: any, publish: any): void;
    conditionCheckPatch(result: any, publish: any): void;
    createPage(formDetails: any, publish: any): void;
    setFormDetails(): any;
    goBack(): void;
    setPagesList(): void;
    selectPage(data: any, e: any): void;
    selectPosition(data: any, e: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RibbonDesignPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RibbonDesignPageComponent, "app-page-ribbon-design", never, {}, {}, never, never, false, never>;
}
