import { Clipboard } from '@angular/cdk/clipboard';
import { ElementRef, EventEmitter, Injector, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../../@core/services/alert.service';
import { DataStoreService } from '../../../@core/services/data-store.service';
import { LocalService } from '../../../@core/services/local.service';
import { PageBuilderAddService } from '../../../@core/services/page-builder-add.service';
import { PageBuilderService } from '../../../@core/services/page-builder.service';
import { SocketAdapterService } from '../../../@core/services/socket-adapter.server';
import * as i0 from "@angular/core";
export declare class DesignPageComponent implements OnInit, OnDestroy {
    private formBuilder;
    private router;
    private route;
    private alert;
    dialog: MatDialog;
    private _storeservice;
    manualForm: UntypedFormGroup;
    refreshForm: EventEmitter<any>;
    formData: any;
    form: any;
    isValidFormDetails: boolean;
    id: string;
    updatedfrom: any;
    jsonElement?: ElementRef;
    codeElement?: ElementRef;
    options: any;
    changedFormData: any;
    basicInfo: any;
    assetList: any;
    allFields: any[];
    jsonForm: any;
    logedInUser: any;
    isEditPage: boolean;
    callPopup: TemplateRef<any>;
    updateNotification: EventEmitter<string>;
    onlineUserList: EventEmitter<string>;
    private dialogRef;
    selectedPage: any;
    pageBuilderAddService: PageBuilderAddService;
    socketAdapter: SocketAdapterService;
    localstorage: LocalService;
    basicPageInformation: any;
    pageBuilderService: PageBuilderService;
    createDynamicPage: boolean;
    gridConfig: any;
    displayType: any;
    selectedDisplayType: any;
    clipboard: Clipboard;
    environment: any;
    constructor(injector: Injector, formBuilder: UntypedFormBuilder, router: Router, route: ActivatedRoute, alert: AlertService, dialog: MatDialog, _storeservice: DataStoreService);
    ngOnInit(): void;
    onChangeFormType(event: any): void;
    getCurrentFormData(): void;
    getCurrentBasicData(): void;
    ngOnDestroy(): void;
    loadForm(): void;
    patchManualForm(): void;
    resetForm: any;
    goToDetailPage(): void;
    closePopup(): void;
    previewForm(): void;
    formSubmit: any;
    patchPage(formDetails: any, publish: any): void;
    conditionCheckPatch(result: any, publish: any): void;
    createPage(formDetails: any, publish: any): void;
    setFormDetails(): any;
    loadFields(componentsData: any): void;
    onChange(event: any): void;
    saveAsset(pageId: number, versionId?: number): void;
    setActiveAsset(newAssetArr: any, pageId?: number, versionId?: number): any[];
    getMenuList(assetData: any, pageId: number, versionId?: number): void;
    checkBasicInfo(): void;
    validationPage(): any;
    copyText(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DesignPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DesignPageComponent, "app-design-page", never, { "basicInfo": { "alias": "basicInfo"; "required": false; }; }, { "updateNotification": "updateNotification"; "onlineUserList": "onlineUserList"; }, never, never, false, never>;
}
