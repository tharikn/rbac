import * as i11$1 from '@angular/cdk/drag-drop';
import { moveItemInArray, transferArrayItem, DragDropModule } from '@angular/cdk/drag-drop';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import * as i4 from '@angular/common';
import { Location, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Injectable, Component, EventEmitter, ViewChild, Input, Output, ViewEncapsulation, ViewChildren, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as i1 from '@angular/forms';
import { Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i7$1 from '@formio/angular';
import { FormioModule } from '@formio/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DxListModule } from 'devextreme-angular';
import { AutoCompleteModule } from 'primeng/autocomplete';
import * as i13 from 'primeng/panel';
import { PanelModule } from 'primeng/panel';
import { TreeSelectModule } from 'primeng/treeselect';
import { C as CommonUrlConfig, D as DataStoreService, P as PageBuilderAddService, L as LocalService, A as AuthService, a as AppConstants, b as AlertService, c as PermissionDirective, d as PageBuilderService, S as ShowFieldDirective, e as PageBuilderService$1, f as PageAccessService, g as PageBuilderAddURL, h as PermissionStore, R as RibbonDesignPageComponent, r as registerPopupComponent, i as registerDateRangeComponent, j as registerRatingComponent, k as registerFileUploadComponent, l as registerGlobalSearchComponent, m as registerBasicFileUploadComponent, n as PopupWrapperComponent, o as DateRangeWrapperComponent, p as RatingWrapperComponent, F as FileUploadWrapperComponent, G as GlobalSearchWrapperComponent, q as FileUploadBasicComponent, M as MaterialUIModule, s as SharedPipesModule, t as PrimengModule, u as GridListModule, v as DirectivesModule } from './pics-module-page-builder-pics-module-page-builder-05bdd017.mjs';
import * as i2 from '@angular/router';
import { NavigationEnd, RouterModule } from '@angular/router';
import * as i8 from '@angular/material/tooltip';
import * as i7 from 'primeng/inputtext';
import * as i9 from 'primeng/dropdown';
import * as i9$1 from 'primeng/inputtextarea';
import * as i10 from 'primeng/card';
import { Clipboard } from '@angular/cdk/clipboard';
import { Components, Utils } from 'formiojs';
import { Observable } from 'rxjs';
import * as i4$1 from '@angular/material/dialog';
import * as i7$2 from '@angular/material/input';
import * as i8$1 from '@angular/material/form-field';
import * as i5 from 'primeng/api';
import * as i8$2 from 'primeng/checkbox';
import * as i11 from 'primeng/multiselect';
import * as i6 from 'primeng/steps';
import * as i7$3 from 'primeng/inputswitch';
import * as i6$1 from 'primeng/tooltip';
import { forkJoin } from 'rxjs/observable/forkJoin';
import * as i9$2 from '@angular/material/radio';
import * as i8$3 from '@angular/material/select';
import * as i9$3 from '@angular/material/core';
import '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/operators';
import 'ngxf-uploader';
import 'primeng/ripple';
import 'devextreme/data/custom_store';
import 'devextreme/pdf_exporter';
import 'jspdf';
import 'moment';
import 'devextreme-angular/ui/nested';
import 'devextreme-angular/core';
import '@angular/material/bottom-sheet';
import '@angular/material/button';
import '@angular/material/card';
import '@angular/material/checkbox';
import '@angular/material/datepicker';
import '@angular/material/icon';
import '@angular/material/menu';
import '@angular/material/slide-toggle';
import '@angular/material/sort';
import '@angular/material/stepper';
import '@angular/material/table';
import '@angular/material/tabs';
import 'ngx-mask';
import 'ngx-pagination';
import 'primeng/accordion';
import 'primeng/tabmenu';
import 'primeng/message';
import 'primeng/table';
import 'primeng/calendar';
import 'primeng/editor';
import 'primeng/fieldset';
import 'primeng/button';
import 'primeng/radiobutton';
import 'primeng/inputmask';
import 'primeng/toast';
import 'primeng/avatar';
import 'primeng/badge';
import 'primeng/confirmdialog';
import 'primeng/progressspinner';
import 'primeng/speeddial';
import 'primeng/orderlist';
import 'primeng/dialog';
import 'primeng/fileupload';
import 'primeng/password';
import 'primeng/knob';
import 'primeng/tabview';
import 'primeng/sidebar';

class CommonDropdownsService {
    _storeservice;
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    getDropDownValues(refUrl) {
        return this.httpService.get(CommonUrlConfig.EndPoint.dropDown[refUrl] + '/');
    }
    getDropDownWithoutValues(refUrl) {
        return this.httpService.get(CommonUrlConfig.EndPoint.dropDown[refUrl]);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CommonDropdownsService, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CommonDropdownsService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CommonDropdownsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

class BasicInfoComponent {
    formBuilder;
    _router;
    route;
    _storeservice;
    _alertService;
    disableDropdown = false;
    pageTypeList;
    formDetails;
    id = '';
    formData;
    // url: any;
    layout;
    jsonForm;
    selectedPageValue;
    selectedPageType = [];
    basicPageInformation;
    rev;
    pagetype = '';
    service;
    localstore;
    dropdownService;
    orgSubs;
    authService;
    orgId;
    pageNameChanged = false;
    validationErrors = {};
    RBACORG;
    constructor(injector, formBuilder, _router, route, _storeservice, 
    // private location: Location,
    _alertService) {
        this.formBuilder = formBuilder;
        this._router = _router;
        this.route = route;
        this._storeservice = _storeservice;
        this._alertService = _alertService;
        this.service = injector.get(PageBuilderAddService);
        this.localstore = injector.get(LocalService);
        this.dropdownService = injector.get(CommonDropdownsService);
        this.authService = injector.get(AuthService);
        this.service.currentPageType.subscribe(page => (this.selectedPageType = page && typeof page === "string" ? JSON.parse(page) : page));
        this.orgSubs = this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.RBACORG = res['RBACORG'];
                this.orgId = parseInt(this.RBACORG['orgID']);
                if (this.orgId) {
                    this.loadForm();
                }
            }
        });
        this.basicPageInformation = this.localstore.getObj('PAGEDESIGN_BASICINFO');
        this.id = this.route.parent.parent.snapshot.paramMap.get('id');
        this.rev = this.route.parent.parent.snapshot.paramMap.get('rev');
    }
    ngOnInit() {
        this.loadForm();
        this.loadDropDowns();
        this.checkDropdownState();
    }
    ngOnDestroy() {
        this.orgSubs.unsubscribe();
    }
    loadForm() {
        this.formDetails = this.formBuilder.group({
            pagename: [this.basicPageInformation ? this.basicPageInformation.pagename : '', Validators.required],
            id: [''],
            description: [this.basicPageInformation ? this.basicPageInformation.description : '', Validators.required],
            pagetype: [this.basicPageInformation ? this.basicPageInformation.pagetype : '', Validators.required],
            organizationid: [this.orgId, Validators.required],
            modulekey: [''],
            submodulekey: ['']
        });
        this.checkDropdownState();
    }
    checkDropdownState() {
        this.disableDropdown = !!this.id;
        const pagetypeControl = this.formDetails.get('pagetype');
        if (this.disableDropdown) {
            pagetypeControl.disable();
        }
        else {
            pagetypeControl.enable();
        }
    }
    get detailsFormControl() {
        return this.formDetails.controls;
    }
    onInput(event, fieldtype, label, required) {
        const error = AppConstants.onInput(event, fieldtype, label, required);
        if (error && typeof error === 'string') {
            this.validationErrors[label] = error;
        }
        else {
            delete this.validationErrors[label];
        }
    }
    selectedPage(page) {
        const selectedPage = this.pageTypeList.filter(a => a.lookupkey === page && a);
        this.localstore.setObj('SELECTED_PAGE', selectedPage);
        this.service.setPageType(selectedPage);
        this.getBacisInfo();
    }
    loadDropDowns() {
        this.dropdownService.getDropDownValues('page').subscribe(result => {
            this.pageTypeList = result['data'];
            this.getBasicDetailsbyId();
        });
    }
    getBasicDetailsbyId() {
        if (this.id) {
            this.service.getBasicDetailsbyId(this.id).subscribe(result => {
                this.formData = result['data'];
                this.formDetails.patchValue({
                    pagename: this.formData.pagename,
                    description: this.formData.description,
                    pagetype: this.formData.pageDetails.pagetype
                });
                if (this.formData.pageDetails.pagetype) {
                    this.selectedPage(this.formData.pageDetails.pagetype);
                }
                this.service.setFormData(this.formData);
                this.layout = this.formData && this.formData.pageDetails.layouttype ? this.formData.pageDetails.layouttype : '';
                this.jsonForm = this.formData.templatejson ? JSON.parse(this.formData.templatejson) : [];
                setTimeout(() => {
                    this.filterPageList();
                }, 100);
                this.getBacisInfo();
            });
        }
        else {
            this.jsonForm = {
                components: []
            };
        }
    }
    filterPageList() {
        if (this.pageTypeList && this.pageTypeList.length) {
            const dName = this.pageTypeList.filter(key => key.refkey === this.formData.pagetype);
            if (dName.length) {
                this.setTooltip(dName[0]['displayvalue']);
            }
        }
    }
    setTooltip(displayValue) {
        this.selectedPageValue = displayValue;
    }
    getBacisInfo() {
        if (!this.formDetails.value.pagetype) {
            this.formDetails.value.pagetype = this.formDetails.controls['pagetype'].value;
        }
        this.localstore.setObj('PAGEDESIGN_BASICINFO', this.formDetails.value);
    }
    navigateToNextPage() {
        this.getBacisInfo();
        const validation = this.validationPage();
        if (validation) {
            if (!this.id) {
                // Call the API only in "add" mode
                this.service
                    .pageAlertChecking(this.formDetails.value.pagename, this.formDetails.value.organizationid)
                    .subscribe(_res => {
                    const data = this.formDetails.getRawValue();
                    this.service.setFormData(data);
                    this.routeToNextPage();
                }, error => {
                    this.pageNameChanged = false;
                    this._alertService.error(error.error.message);
                });
            }
            else {
                // In "edit" mode
                if (this.formData) {
                    // Check if the page name has changed
                    if (this.formDetails.value.pagename !== this.formData.pagename) {
                        // If page name changed, call API
                        this.service
                            .pageAlertChecking(this.formDetails.value.pagename, this.formDetails.value.organizationid)
                            .subscribe(_res => {
                            const data = this.formDetails.getRawValue();
                            this.service.setBasicData(data);
                            this.routeToNextPage();
                        }, error => {
                            this.pageNameChanged = false;
                            this._alertService.error(error.error.message);
                        });
                    }
                    else {
                        // If page name is same, directly set form data and navigate to the next page
                        this.service.setBasicData(this.formDetails.getRawValue());
                        this.routeToNextPage();
                    }
                }
            }
        }
        else {
            this._alertService.error('Please fill all mandatory fields');
        }
    }
    routeToNextPage() {
        this._router.navigate([`../${this.service.authorisedTabs[1].routerLink}`], { relativeTo: this.route });
    }
    goBack() {
        this.service.returnToList();
    }
    validationPage() {
        if (!this.formDetails.value.pagename || !this.formDetails.value.pagetype || !this.formDetails.value.description) {
            return false;
        }
        else {
            return true;
        }
    }
    pageNameFormat() {
        const pagenameControl = this.formDetails.get('pagename');
        if (pagenameControl.value) {
            pagenameControl.setValue(pagenameControl.value
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' '));
        }
    }
    onPageNameInput(event) {
        const input = event.target;
        const startPosition = input.selectionStart;
        const endPosition = input.selectionEnd;
        const pagenameControl = this.formDetails.get('pagename');
        if (pagenameControl.value) {
            const newValue = pagenameControl.value
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            pagenameControl.patchValue(newValue, { emitEvent: false });
            // Restore cursor position
            input.setSelectionRange(startPosition, endPosition);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BasicInfoComponent, deps: [{ token: i0.Injector }, { token: i1.UntypedFormBuilder }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: DataStoreService }, { token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BasicInfoComponent, selector: "app-basic-info", ngImport: i0, template: "<div class=\"page-design-basic-info\">\r\n  <div class=\"page-design-basic-info\">\r\n    <p-card styleClass=\"rbac-card w-100 mb-2\" [formGroup]=\"formDetails\">\r\n      <div class=\"strip_head page-designer toggleleft\">\r\n        <span class=\"report_head font-weight-bold\">Basic Page Information</span>\r\n      </div>\r\n      <div class=\"p-fluid p-formgrid p-grid\">\r\n        <div class=\"p-field p-col-12 p-md-6\">\r\n          <label for=\"pname\" class=\"referral-form-labels\"\r\n            >Page Name\r\n            <span class=\"requiredfield text-danger\">*</span>\r\n          </label>\r\n          <input\r\n            id=\"pname\"\r\n            type=\"text\"\r\n            placeholder=\"Enter Page Name\"\r\n            aria-describedby=\"pname\"\r\n            formControlName=\"pagename\"\r\n            fieldKey=\"PAG_DES_BASIC_PAG_INFO_PAGE_NAME\"\r\n            (keyup)=\"onPageNameInput($event)\"\r\n            pInputText\r\n            (input)=\"getBacisInfo()\"\r\n            (input)=\"onInput($event, 'name', 'Page Name', true)\"  />\r\n            <div *ngIf=\"validationErrors['Page Name']\" class=\"p-error block mt-1\">{{validationErrors['Page Name']}}</div>\r\n\r\n          <div *ngIf=\"!validationErrors['Page Name'] && detailsFormControl['pagename'].errors && detailsFormControl['pagename'].touched\">\r\n            <div class=\"p-error block mt-1\">Page Name is required </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"p-field p-col-12 p-md-6\">\r\n          <label for=\"pagetype\" class=\"referral-form-labels\"\r\n            >Page Type\r\n            <span class=\"requiredfield text-danger\">*</span>\r\n            <em class=\"pi pi-info-circle\"\r\n              matTooltip=\"Page Type cannot be changed after saving.\"\r\n              matTooltipPosition=\"right\"\r\n              matTooltipClass=\"custom-tooltip-color\"\r\n              aria-label=\"Information tooltip\">\r\n            </em>\r\n          </label>\r\n          <p-dropdown\r\n            [options]=\"pageTypeList\"\r\n            placeholder=\"Select Page Type\"\r\n            id=\"pagetype\"\r\n            optionLabel=\"lookupvalue\"\r\n            optionValue=\"lookupkey\"\r\n            formControlName=\"pagetype\"\r\n            fieldKey=\"PAG_DES_BASIC_PAG_INFO_PAGE_TYPE\"\r\n            (onChange)=\"selectedPage($event.value)\"\r\n            [ngClass]=\"{'disabled-dropdown': disableDropdown}\">\r\n          </p-dropdown>\r\n          <div *ngIf=\"detailsFormControl['pagetype'].errors && detailsFormControl['pagetype'].touched\">\r\n            <div class=\"p-error block mt-1\">Page Type is required </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"p-field p-col-12\">\r\n          <label for=\"description\" class=\"referral-form-labels\"\r\n            >Description\r\n            <span class=\"requiredfield text-danger\">*</span>\r\n          </label>\r\n          <textarea\r\n            id=\"description\"\r\n            placeholder=\"Enter Description\"\r\n            formControlName=\"description\"\r\n            aria-describedby=\"description\"\r\n            fieldKey=\"PAG_DES_BASIC_PAG_INFO_DESCRYPTION\"\r\n            (input)=\"getBacisInfo()\"\r\n            (input)=\"onInput($event, 'description', 'Description', true)\"\r\n            pInputTextarea>\r\n          </textarea>\r\n          <div *ngIf=\"validationErrors['Description']\" class=\"p-error block mt-1\">{{validationErrors['Description']}}</div>\r\n\r\n          <div *ngIf=\"!validationErrors['Description'] && detailsFormControl['description'].errors && detailsFormControl['description'].touched\">\r\n            <div class=\"p-error block mt-1\">Description is required </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </p-card>\r\n    <div class=\"formicon\">\r\n      <button\r\n        class=\"pull-right mb-2 btn btn-primary btncommon\"\r\n        fieldKey=\"PAG_DES_BASIC_PAG_INFO_NEXT\"\r\n        (click)=\"navigateToNextPage()\">\r\n        Next\r\n      </button>\r\n      <button class=\"pull-right mb-2 mr-2 btn btn-cancel\" fieldKey=\"PAG_DES_BASIC_PAG_INFO_CANCEL\" (click)=\"goBack()\">\r\n        Cancel\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n", styles: [":root{--background-color: #f8f8f8;--navigation: #fff;--primary: #0D3178;--checkbox-border: #D6D5D5;--text-dark: #000;--label-text: #0D3178;--hover-text: #fff;--bg-light: #fff;--forms: #fff;--nav-text: #696969;--light-gray: #696969;--material-icons: #0D3178;--highlight-list: #e3f2fd;--table-header: #f9f9f9;--table-odd: #f7f7f7;--table-border: #ddd;--table-hover: #dbf6ff;--table-odd-color: #f2fcff;--btn: #0D3178;--menu-panel: #032361;--menu-level2: #28447E;--border-trans: transparent;--btn-hover: #1258A7;--btn-dark: #0D3178;--dropdown-list: #fff;--btncancel: #0D3178;--primary-light: #1258A7;--primary-dark: #0D3178;--light-d-light: #fff;--ldl-text: #fff;--light-d-accent: #fff;--header-bg: #f7f7f7;--secondary-color: #0D3178;--menu-link: #1258A7;--menu-highlight: #0084d1;--sumbmenu-selected: #0084D1;--profile-bg: #f3f9f9;--disabled: #7A8EB5;--accordion-header: #F5F5F5;--input-label: #1F1F1F;--input-field: #4C4C4C;--ghost: #A2A2A2;--table-label: #f1f1f1;--error-msg: #DC0404;--menu-hover: #1258A7;--var-icon-font: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;--rocket-icon: \"/assets/images/rocket-ship.svg\";--base-font-size: 16px;--font-11: 11px;--font-12: 12px;--font-13: 13px;--font-14: 14px;--font-15: 15px;--font-16: 16px;--font-17: 17px;--font-18: 18px;--font-19: 19px;--font-20: 20px;--font-21: 21px;--font-24: 24px;--font-26: 26px}.disabled-dropdown{color:#d6d5d5;background-color:#f5f5f5;opacity:.65}.form_head{font-size:13px;font-weight:700;margin-bottom:.5rem;color:#0a0a0a;text-transform:uppercase}.toggleleft{display:block;margin-top:-12px;padding-bottom:13px}.tableActionBtns{width:50px;position:relative}.tableActionBtns:hover .actionBtnQa{width:250px}.tableActionBtns .actionBtnQa{position:absolute;text-align:right;top:8px;right:10px;width:50px;z-index:99}.tableActionBtns .actionBtnQa .btn.addBtnsNew{width:34px;height:34px;line-height:1;border-radius:50%;font-size:34px;padding:0;text-align:center;font-weight:400;transition:transform .3s linear 0s}.tableActionBtns .actionBtnQa .btn.addBtnsNew.addNew1,.tableActionBtns .actionBtnQa .btn.addBtnsNew.addNew2,.tableActionBtns .actionBtnQa .btn.addBtnsNew.addNew3,.tableActionBtns .actionBtnQa .btn.addBtnsNew.addNew4{position:relative;z-index:2;height:0;width:0;overflow:hidden;box-shadow:none;outline:none}.tableActionBtns .actionBtnQa .btn.addBtnsNew span,.tableActionBtns .actionBtnQa .btn.addBtnsNew a{display:block;width:100%;height:100%}.tableActionBtns .actionBtnQa .btn.addBtnsNew svg{width:16px;height:16px;margin-top:-8px;position:relative;top:-5px}.tableActionBtns .actionBtnQa .btn.addBtnsNew svg path{fill:#22273e}.tableActionBtns .actionBtnQa .btn.transparantDotBtn{background-color:transparent}.tableActionBtns .actionBtnQa .btn.transparantDotBtn svg{fill:#0d3178}.tableActionBtns .actionBtnQa .btn.clsFontIcon{font-size:14px;line-height:34px}.tableActionBtns .actionBtnQa .defultIconSetPerson{display:inline-block;background:transparent}.tableActionBtns .actionBtnQa .defultIconSetPerson .addBtnsNew{background-color:#0d3178!important;border:solid 0px transparent!important}.tableActionBtns .actionBtnQa .defultIconSetPerson .addBtnsNew svg{fill:#333;top:-5px}.tableActionBtns .actionBtnQa .defultIconSetPerson .addBtnsNew.transparantDotBtn{background-color:transparent!important;border:transparent}.tableActionBtns .actionBtnQa .defultIconSetPerson .addBtnsNew.transparantDotBtn svg{fill:#0d3178!important}.tableActionBtns .actionBtnQa .defultIconSetPerson .addBtnsNew.siteBtn{background-color:#0d3178!important}.tableActionBtns .actionBtnQa .defultIconSetPerson .afterHover{display:none}.tableActionBtns .actionBtnQa .defultIconSetPerson:hover .addBtnsNew{border:solid 1px #0D3178!important}.tableActionBtns .actionBtnQa .defultIconSetPerson:hover .afterHover{display:inline-block}.tableActionBtns .actionBtnQa .defultIconSetPerson:hover .btn.addBtnsNew{opacity:1;margin-right:0;margin-left:10px;width:34px;height:34px;overflow:inherit;background:#0d3178!important;border:1px solid #0D3178!important}.tableActionBtns .actionBtnQa .defultIconSetPerson:hover .btn.addBtnsNew[disabled]{background:#0d3178!important;cursor:not-allowed}.tableActionBtns .actionBtnQa .defultIconSetPerson:hover .btn.addBtnsNew.addNew1,.tableActionBtns .actionBtnQa .defultIconSetPerson:hover .btn.addBtnsNewaddNew2{animation:bounceAnimation .54s ease}.tableActionBtns .actionBtnQa .defultIconSetPerson:hover .btn.addBtnsNew:first-child{margin-left:0}.tableActionBtns .actionBtnQa .defultIconSetPerson:hover .beforeHover{display:none}.tableActionBtns .actionBtnQa:hover{width:250px}.defultIconSetPerson:hover .btn.addBtnsNew{opacity:1;margin-right:0;margin-left:10px;width:44px;height:44px;overflow:inherit;border:0;color:#fff}.defultIconSetPerson:hover .btn.addBtnsNew:focus{box-shadow:0 0 1px 3px #268fff80!important}.defultIconSetPerson:hover .btn.addBtnsNew.addNew2,.defultIconSetPerson:hover .btn.addBtnsNew.addNew1{animation:bounceAnimation .54s ease}.defultIconSetPerson:hover .afterHover{display:inline-block}.defultIconSetPerson:hover .beforeHover{display:none}@keyframes bounceAnimation{0%{transform:translate(20px)}50%{transform:translate(-20px)}to{transform:translate(0)}}.btn.addBtnsNew{border-radius:50%;font-size:32px;padding:0;text-align:center;font-weight:500;width:38px;height:38px;line-height:37px;transition:transform .3s linear 0s;background-color:#0d3178!important;border:0;color:#fff}.btn.addBtnsNew span,.btn.addBtnsNew a{display:block;width:100%;height:100%}.btn.addBtnsNew svg{width:16px;height:16px;fill:#fff;position:relative;top:-3px}.btn.addBtnsNew.searchIcon svg{width:20px;height:20px;position:relative;top:-2px}.btn.addBtnsNew.clsFontIcon{font-size:16px}.pi-plus{float:right;background-color:#0d3178;padding:7px;border-radius:3px;color:#fff;cursor:pointer}.formicon{padding-top:20px}\n"], dependencies: [{ kind: "directive", type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.RouterOutlet, selector: "router-outlet", inputs: ["name"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i8.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: i7.InputText, selector: "[pInputText]" }, { kind: "component", type: i9.Dropdown, selector: "p-dropdown", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }, { kind: "directive", type: i9$1.InputTextarea, selector: "[pInputTextarea]", inputs: ["autoResize"], outputs: ["onResize"] }, { kind: "component", type: i10.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { kind: "directive", type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BasicInfoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-basic-info', template: "<div class=\"page-design-basic-info\">\r\n  <div class=\"page-design-basic-info\">\r\n    <p-card styleClass=\"rbac-card w-100 mb-2\" [formGroup]=\"formDetails\">\r\n      <div class=\"strip_head page-designer toggleleft\">\r\n        <span class=\"report_head font-weight-bold\">Basic Page Information</span>\r\n      </div>\r\n      <div class=\"p-fluid p-formgrid p-grid\">\r\n        <div class=\"p-field p-col-12 p-md-6\">\r\n          <label for=\"pname\" class=\"referral-form-labels\"\r\n            >Page Name\r\n            <span class=\"requiredfield text-danger\">*</span>\r\n          </label>\r\n          <input\r\n            id=\"pname\"\r\n            type=\"text\"\r\n            placeholder=\"Enter Page Name\"\r\n            aria-describedby=\"pname\"\r\n            formControlName=\"pagename\"\r\n            fieldKey=\"PAG_DES_BASIC_PAG_INFO_PAGE_NAME\"\r\n            (keyup)=\"onPageNameInput($event)\"\r\n            pInputText\r\n            (input)=\"getBacisInfo()\"\r\n            (input)=\"onInput($event, 'name', 'Page Name', true)\"  />\r\n            <div *ngIf=\"validationErrors['Page Name']\" class=\"p-error block mt-1\">{{validationErrors['Page Name']}}</div>\r\n\r\n          <div *ngIf=\"!validationErrors['Page Name'] && detailsFormControl['pagename'].errors && detailsFormControl['pagename'].touched\">\r\n            <div class=\"p-error block mt-1\">Page Name is required </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"p-field p-col-12 p-md-6\">\r\n          <label for=\"pagetype\" class=\"referral-form-labels\"\r\n            >Page Type\r\n            <span class=\"requiredfield text-danger\">*</span>\r\n            <em class=\"pi pi-info-circle\"\r\n              matTooltip=\"Page Type cannot be changed after saving.\"\r\n              matTooltipPosition=\"right\"\r\n              matTooltipClass=\"custom-tooltip-color\"\r\n              aria-label=\"Information tooltip\">\r\n            </em>\r\n          </label>\r\n          <p-dropdown\r\n            [options]=\"pageTypeList\"\r\n            placeholder=\"Select Page Type\"\r\n            id=\"pagetype\"\r\n            optionLabel=\"lookupvalue\"\r\n            optionValue=\"lookupkey\"\r\n            formControlName=\"pagetype\"\r\n            fieldKey=\"PAG_DES_BASIC_PAG_INFO_PAGE_TYPE\"\r\n            (onChange)=\"selectedPage($event.value)\"\r\n            [ngClass]=\"{'disabled-dropdown': disableDropdown}\">\r\n          </p-dropdown>\r\n          <div *ngIf=\"detailsFormControl['pagetype'].errors && detailsFormControl['pagetype'].touched\">\r\n            <div class=\"p-error block mt-1\">Page Type is required </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"p-field p-col-12\">\r\n          <label for=\"description\" class=\"referral-form-labels\"\r\n            >Description\r\n            <span class=\"requiredfield text-danger\">*</span>\r\n          </label>\r\n          <textarea\r\n            id=\"description\"\r\n            placeholder=\"Enter Description\"\r\n            formControlName=\"description\"\r\n            aria-describedby=\"description\"\r\n            fieldKey=\"PAG_DES_BASIC_PAG_INFO_DESCRYPTION\"\r\n            (input)=\"getBacisInfo()\"\r\n            (input)=\"onInput($event, 'description', 'Description', true)\"\r\n            pInputTextarea>\r\n          </textarea>\r\n          <div *ngIf=\"validationErrors['Description']\" class=\"p-error block mt-1\">{{validationErrors['Description']}}</div>\r\n\r\n          <div *ngIf=\"!validationErrors['Description'] && detailsFormControl['description'].errors && detailsFormControl['description'].touched\">\r\n            <div class=\"p-error block mt-1\">Description is required </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </p-card>\r\n    <div class=\"formicon\">\r\n      <button\r\n        class=\"pull-right mb-2 btn btn-primary btncommon\"\r\n        fieldKey=\"PAG_DES_BASIC_PAG_INFO_NEXT\"\r\n        (click)=\"navigateToNextPage()\">\r\n        Next\r\n      </button>\r\n      <button class=\"pull-right mb-2 mr-2 btn btn-cancel\" fieldKey=\"PAG_DES_BASIC_PAG_INFO_CANCEL\" (click)=\"goBack()\">\r\n        Cancel\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n", styles: [":root{--background-color: #f8f8f8;--navigation: #fff;--primary: #0D3178;--checkbox-border: #D6D5D5;--text-dark: #000;--label-text: #0D3178;--hover-text: #fff;--bg-light: #fff;--forms: #fff;--nav-text: #696969;--light-gray: #696969;--material-icons: #0D3178;--highlight-list: #e3f2fd;--table-header: #f9f9f9;--table-odd: #f7f7f7;--table-border: #ddd;--table-hover: #dbf6ff;--table-odd-color: #f2fcff;--btn: #0D3178;--menu-panel: #032361;--menu-level2: #28447E;--border-trans: transparent;--btn-hover: #1258A7;--btn-dark: #0D3178;--dropdown-list: #fff;--btncancel: #0D3178;--primary-light: #1258A7;--primary-dark: #0D3178;--light-d-light: #fff;--ldl-text: #fff;--light-d-accent: #fff;--header-bg: #f7f7f7;--secondary-color: #0D3178;--menu-link: #1258A7;--menu-highlight: #0084d1;--sumbmenu-selected: #0084D1;--profile-bg: #f3f9f9;--disabled: #7A8EB5;--accordion-header: #F5F5F5;--input-label: #1F1F1F;--input-field: #4C4C4C;--ghost: #A2A2A2;--table-label: #f1f1f1;--error-msg: #DC0404;--menu-hover: #1258A7;--var-icon-font: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;--rocket-icon: \"/assets/images/rocket-ship.svg\";--base-font-size: 16px;--font-11: 11px;--font-12: 12px;--font-13: 13px;--font-14: 14px;--font-15: 15px;--font-16: 16px;--font-17: 17px;--font-18: 18px;--font-19: 19px;--font-20: 20px;--font-21: 21px;--font-24: 24px;--font-26: 26px}.disabled-dropdown{color:#d6d5d5;background-color:#f5f5f5;opacity:.65}.form_head{font-size:13px;font-weight:700;margin-bottom:.5rem;color:#0a0a0a;text-transform:uppercase}.toggleleft{display:block;margin-top:-12px;padding-bottom:13px}.tableActionBtns{width:50px;position:relative}.tableActionBtns:hover .actionBtnQa{width:250px}.tableActionBtns .actionBtnQa{position:absolute;text-align:right;top:8px;right:10px;width:50px;z-index:99}.tableActionBtns .actionBtnQa .btn.addBtnsNew{width:34px;height:34px;line-height:1;border-radius:50%;font-size:34px;padding:0;text-align:center;font-weight:400;transition:transform .3s linear 0s}.tableActionBtns .actionBtnQa .btn.addBtnsNew.addNew1,.tableActionBtns .actionBtnQa .btn.addBtnsNew.addNew2,.tableActionBtns .actionBtnQa .btn.addBtnsNew.addNew3,.tableActionBtns .actionBtnQa .btn.addBtnsNew.addNew4{position:relative;z-index:2;height:0;width:0;overflow:hidden;box-shadow:none;outline:none}.tableActionBtns .actionBtnQa .btn.addBtnsNew span,.tableActionBtns .actionBtnQa .btn.addBtnsNew a{display:block;width:100%;height:100%}.tableActionBtns .actionBtnQa .btn.addBtnsNew svg{width:16px;height:16px;margin-top:-8px;position:relative;top:-5px}.tableActionBtns .actionBtnQa .btn.addBtnsNew svg path{fill:#22273e}.tableActionBtns .actionBtnQa .btn.transparantDotBtn{background-color:transparent}.tableActionBtns .actionBtnQa .btn.transparantDotBtn svg{fill:#0d3178}.tableActionBtns .actionBtnQa .btn.clsFontIcon{font-size:14px;line-height:34px}.tableActionBtns .actionBtnQa .defultIconSetPerson{display:inline-block;background:transparent}.tableActionBtns .actionBtnQa .defultIconSetPerson .addBtnsNew{background-color:#0d3178!important;border:solid 0px transparent!important}.tableActionBtns .actionBtnQa .defultIconSetPerson .addBtnsNew svg{fill:#333;top:-5px}.tableActionBtns .actionBtnQa .defultIconSetPerson .addBtnsNew.transparantDotBtn{background-color:transparent!important;border:transparent}.tableActionBtns .actionBtnQa .defultIconSetPerson .addBtnsNew.transparantDotBtn svg{fill:#0d3178!important}.tableActionBtns .actionBtnQa .defultIconSetPerson .addBtnsNew.siteBtn{background-color:#0d3178!important}.tableActionBtns .actionBtnQa .defultIconSetPerson .afterHover{display:none}.tableActionBtns .actionBtnQa .defultIconSetPerson:hover .addBtnsNew{border:solid 1px #0D3178!important}.tableActionBtns .actionBtnQa .defultIconSetPerson:hover .afterHover{display:inline-block}.tableActionBtns .actionBtnQa .defultIconSetPerson:hover .btn.addBtnsNew{opacity:1;margin-right:0;margin-left:10px;width:34px;height:34px;overflow:inherit;background:#0d3178!important;border:1px solid #0D3178!important}.tableActionBtns .actionBtnQa .defultIconSetPerson:hover .btn.addBtnsNew[disabled]{background:#0d3178!important;cursor:not-allowed}.tableActionBtns .actionBtnQa .defultIconSetPerson:hover .btn.addBtnsNew.addNew1,.tableActionBtns .actionBtnQa .defultIconSetPerson:hover .btn.addBtnsNewaddNew2{animation:bounceAnimation .54s ease}.tableActionBtns .actionBtnQa .defultIconSetPerson:hover .btn.addBtnsNew:first-child{margin-left:0}.tableActionBtns .actionBtnQa .defultIconSetPerson:hover .beforeHover{display:none}.tableActionBtns .actionBtnQa:hover{width:250px}.defultIconSetPerson:hover .btn.addBtnsNew{opacity:1;margin-right:0;margin-left:10px;width:44px;height:44px;overflow:inherit;border:0;color:#fff}.defultIconSetPerson:hover .btn.addBtnsNew:focus{box-shadow:0 0 1px 3px #268fff80!important}.defultIconSetPerson:hover .btn.addBtnsNew.addNew2,.defultIconSetPerson:hover .btn.addBtnsNew.addNew1{animation:bounceAnimation .54s ease}.defultIconSetPerson:hover .afterHover{display:inline-block}.defultIconSetPerson:hover .beforeHover{display:none}@keyframes bounceAnimation{0%{transform:translate(20px)}50%{transform:translate(-20px)}to{transform:translate(0)}}.btn.addBtnsNew{border-radius:50%;font-size:32px;padding:0;text-align:center;font-weight:500;width:38px;height:38px;line-height:37px;transition:transform .3s linear 0s;background-color:#0d3178!important;border:0;color:#fff}.btn.addBtnsNew span,.btn.addBtnsNew a{display:block;width:100%;height:100%}.btn.addBtnsNew svg{width:16px;height:16px;fill:#fff;position:relative;top:-3px}.btn.addBtnsNew.searchIcon svg{width:20px;height:20px;position:relative;top:-2px}.btn.addBtnsNew.clsFontIcon{font-size:16px}.pi-plus{float:right;background-color:#0d3178;padding:7px;border-radius:3px;color:#fff;cursor:pointer}.formicon{padding-top:20px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.UntypedFormBuilder }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: DataStoreService }, { type: AlertService }]; } });

class SocketAdapterService {
    router;
    localstorage;
    socketOption = {
        query: null,
        transports: ['websocket'],
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
        reconnectionAttempts: 20
        // agent: false,
        // upgrade: false,
        // rejectUnauthorized: false,
        // secure: true,
        // pingTimeout: 60000,
        // autoConnect: true
    };
    // private url = environment.chatServer;
    socket;
    constructor(router, localstorage) {
        this.router = router;
        this.localstorage = localstorage;
        console.log('Constructing Socket IO');
        this.router.events.subscribe(() => {
            const user = this.localstorage.getObj('user');
            if (user && this.socketOption.query == null) {
                this.socketOption = {
                    ...this.socketOption,
                    query: {
                        userId: user?.id
                    }
                };
                // this.socket = io(this.url, this.socketOption);
                console.log(this.socket);
            }
        });
    }
    joinRoom(roomData) {
        console.log('Socket joining room : ', roomData);
        this.socket.emit('joinRoom', roomData);
    }
    leaveRoom(roomData) {
        console.log('Socket leaving room: ', roomData);
        this.socket.emit('leaveRoom', roomData);
    }
    onConnect() {
        console.log('Socket On Connect');
        return new Observable(observer => {
            this.socket.on('connect', () => {
                console.log('Socket new connect...');
                observer.next('connectd');
            });
            return () => {
                this.socket.disconnect();
            };
        });
    }
    onReConnect() {
        return new Observable(observer => {
            this.socket.on('reconnect', () => {
                observer.next('connectd');
            });
            return () => {
                this.socket.disconnect();
            };
        });
    }
    receivePageData() {
        return new Observable(observer => {
            this.socket.on('receive_page_data', (data) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
    }
    onlineEditPageUsers() {
        return new Observable(observer => {
            this.socket.on('online_edit_page_user', (data) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
    }
    sendPageData(payload) {
        console.log('Sending page data');
        console.log(payload);
        this.socket.emit('send_page_data', payload);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SocketAdapterService, deps: [{ token: i2.Router }, { token: LocalService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SocketAdapterService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SocketAdapterService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i2.Router }, { type: LocalService }]; } });

var displayType = [
	{
		name: "Form",
		value: "form"
	},
	{
		name: "Wizard",
		value: "wizard"
	}
];

var edit = "";
var editUrl = "";
var deleteUrl = "";
var externalLink = "";
var externalUrl = "";
var defaultSortColumn = null;
var gridTitle = "";
var defaultSortType = null;
var isShowOnTop = "";
var isInitialFormLoad = "";
var exportPageName = null;
var gridSelection = "";
var gridDownloadRangeQueryHeader = null;
var gridActionFormArray = [
	{
		action: "Add",
		icon: "fa fa-plus",
		isOutsideGrid: true,
		isOwner: false,
		link: "",
		name: "Add",
		type: "External Link"
	},
	{
		action: "edit",
		icon: "fa fa-pencil",
		isOutsideGrid: "",
		isOwner: false,
		link: "",
		name: "Edit",
		type: "External Link"
	},
	{
		action: "view",
		icon: "fa fa-eye",
		isOutsideGrid: "",
		isOwner: true,
		link: "",
		name: "Edit",
		type: "External Link"
	},
	{
		action: "delete",
		icon: "fa fa-trash",
		isOutsideGrid: "",
		isOwner: true,
		link: "",
		name: "Delete",
		type: "External Link"
	}
];
var gridConfigFormArray = [
	{
		header: "",
		columnDef: "",
		link: "",
		routelink: "",
		icon: "",
		icontext: "",
		dateFormat: "",
		datetext: "",
		sort: "",
		filter: "",
		hide: "",
		fixed: "",
		Choosable: "",
		visible: "",
		selected: [
		],
		mobileView: "",
		tabView: ""
	}
];
var gridDownloadRangeQueryArray = [
];
var chooser = "";
var gridConfig = {
	edit: edit,
	editUrl: editUrl,
	"delete": "",
	deleteUrl: deleteUrl,
	externalLink: externalLink,
	externalUrl: externalUrl,
	defaultSortColumn: defaultSortColumn,
	gridTitle: gridTitle,
	defaultSortType: defaultSortType,
	isShowOnTop: isShowOnTop,
	isInitialFormLoad: isInitialFormLoad,
	exportPageName: exportPageName,
	gridSelection: gridSelection,
	gridDownloadRangeQueryHeader: gridDownloadRangeQueryHeader,
	gridActionFormArray: gridActionFormArray,
	gridConfigFormArray: gridConfigFormArray,
	gridDownloadRangeQueryArray: gridDownloadRangeQueryArray,
	chooser: chooser
};

const options = {
    builder: {
        premium: false,
        basic: {
            title: 'Basic',
            weight: 0,
            components: {
                textfield: true,
                textarea: true,
                fileupload: false,
                myrating: false,
                globalsearch: false,
                picsselect: false,
            }
        },
        advanced: {
            title: 'Advanced',
            weight: 0,
            components: {
                email: true,
                url: false,
                tags: false,
                address: false,
                survey: false,
                currency: true,
                signature: true,
                day: false,
                time: false,
                DateFieldComponent: false,
                phoneNumber: true,
                datetime: true
            }
        },
        layout: {
            title: 'Layout',
            weight: 0,
            components: {
                panel: true,
                table: true,
                tabs: true,
                well: true,
                columns: true,
                fieldset: true,
                content: true,
                htmlelement: true
            }
        },
        data: {
            title: 'Data',
            weight: '5',
            components: {
                datagrid: true
            }
        }
    },
    language: 'en'
};

class DesignPageComponent {
    formBuilder;
    router;
    route;
    alert;
    dialog;
    _storeservice;
    manualForm;
    refreshForm;
    formData;
    form;
    isValidFormDetails;
    id = '';
    updatedfrom;
    jsonElement;
    codeElement;
    options;
    changedFormData;
    basicInfo;
    assetList;
    allFields = [];
    jsonForm;
    logedInUser;
    isEditPage = false;
    callPopup;
    updateNotification = new EventEmitter();
    onlineUserList = new EventEmitter();
    dialogRef;
    selectedPage;
    pageBuilderAddService;
    socketAdapter;
    localstorage;
    basicPageInformation;
    pageBuilderService;
    createDynamicPage;
    gridConfig;
    displayType;
    selectedDisplayType;
    clipboard;
    environment;
    constructor(injector, formBuilder, router, route, alert, dialog, _storeservice) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.alert = alert;
        this.dialog = dialog;
        this._storeservice = _storeservice;
        this.pageBuilderAddService = injector.get(PageBuilderAddService);
        this.socketAdapter = injector.get(SocketAdapterService);
        this.clipboard = injector.get(Clipboard);
        this.localstorage = injector.get(LocalService);
        this.pageBuilderAddService.currentPageType.subscribe(page => (this.selectedPage = page));
        this.pageBuilderService = injector.get(PageBuilderService);
        this.createDynamicPage = this.localstorage.getObj('CREATE PAGE') || false;
        this.gridConfig = gridConfig;
        this.displayType = displayType;
        this.options = options;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.environment = res['RBACORG'].environment;
            }
        });
    }
    ngOnInit() {
        console.log(this.selectedPage);
        this.checkBasicInfo();
        this.logedInUser = this.localstorage.getObj('user');
        // make a replica of Formio column component (column component is stock component in layout group of formio)
        const customDateComponent = Components.components.columns;
        // use the customDateComponent created earlier to inherit the formio component prototype properties
        function dateComponentRef(component, options, data) {
            customDateComponent.prototype.constructor.call(this, component, options, data);
        }
        dateComponentRef.prototype = Object.create(customDateComponent.prototype);
        // assign the schema (configuration) to the dateComponentRef with the JSON schema of custom component (date range component in this case)
        dateComponentRef.schema = function () {
            return customDateComponent.schema({
                key: 'dateRange',
                type: 'columns',
                input: false,
                tableView: false,
                columns: [
                    {
                        components: [
                            {
                                label: 'Columns',
                                columns: [
                                    {
                                        components: [
                                            {
                                                label: 'Start Date',
                                                format: 'MM/dd/yyyy',
                                                customClass: 'pr-0',
                                                tableView: false,
                                                datePicker: {
                                                    disableWeekends: false,
                                                    disableWeekdays: false,
                                                    minDate: 'moment(new Date()).format(\'MM/DD/YYYY\');'
                                                },
                                                enableTime: false,
                                                defaultDate: 'moment()',
                                                validate: {
                                                    required: true
                                                },
                                                enableMinDateInput: true,
                                                enableMaxDateInput: false,
                                                key: 'start_date',
                                                logic: [
                                                    {
                                                        name: 'check if radio is no',
                                                        trigger: {
                                                            type: 'simple',
                                                            simple: {
                                                                show: true,
                                                                when: 'radio',
                                                                eq: 'no'
                                                            }
                                                        },
                                                        actions: [
                                                            {
                                                                name: 'reset',
                                                                type: 'value',
                                                                value: '  if(moment(data.start_date).isAfter(moment(), \'day\')) {\r\n    value = moment();\r\n  } else {\r\n      value = data.start_date\r\n  }'
                                                            }
                                                        ]
                                                    }
                                                ],
                                                attributes: {
                                                    id: 'startDate'
                                                },
                                                type: 'datetime',
                                                input: true,
                                                widget: {
                                                    type: 'calendar',
                                                    displayInTimezone: 'viewer',
                                                    locale: 'en',
                                                    useLocaleSettings: false,
                                                    allowInput: true,
                                                    mode: 'single',
                                                    enableTime: false,
                                                    noCalendar: false,
                                                    format: 'MM/dd/yyyy',
                                                    hourIncrement: 1,
                                                    minuteIncrement: 1,
                                                    time_24hr: false,
                                                    minDate: 'moment(new Date()).format(\'MM/DD/YYYY\');',
                                                    disableWeekends: false,
                                                    disableWeekdays: false,
                                                    maxDate: null
                                                }
                                            }
                                        ],
                                        width: 9,
                                        offset: 0,
                                        push: 0,
                                        pull: 0,
                                        size: 'md',
                                        currentWidth: 9
                                    },
                                    {
                                        components: [
                                            {
                                                label: '&#160',
                                                action: 'custom',
                                                showValidations: false,
                                                leftIcon: 'fa fa-clipboard',
                                                customClass: 'mt-3 formio-icon-btn pr-add',
                                                tableView: false,
                                                key: 'copy',
                                                conditional: {
                                                    show: false,
                                                    when: 'action',
                                                    eq: 'view'
                                                },
                                                type: 'button',
                                                custom: 'navigator.clipboard.writeText(data.start_date? (moment(data.start_date).format(\'MM/DD/YYYY\')) : \'\');',
                                                input: true
                                            }
                                        ],
                                        width: 3,
                                        offset: 0,
                                        push: 0,
                                        pull: 0,
                                        size: 'md',
                                        currentWidth: 3
                                    }
                                ],
                                key: 'columns',
                                type: 'columns',
                                input: false,
                                tableView: false
                            }
                        ],
                        width: 4,
                        offset: 0,
                        push: 0,
                        pull: 0,
                        size: 'md',
                        currentWidth: 4
                    },
                    {
                        components: [
                            {
                                label: 'Select Range',
                                widget: 'choicesjs',
                                tableView: true,
                                data: {
                                    values: [
                                        {
                                            label: '0',
                                            value: '0'
                                        },
                                        {
                                            label: '30',
                                            value: '30'
                                        },
                                        {
                                            label: '45',
                                            value: '45'
                                        },
                                        {
                                            label: '60',
                                            value: '60'
                                        },
                                        {
                                            label: '90',
                                            value: '90'
                                        },
                                        {
                                            label: '120',
                                            value: '120'
                                        }
                                    ]
                                },
                                calculateValue: 'if (data.start_date && data.end_date) {\r\n    const dateDiff = parseInt(moment(data.end_date).diff(moment(data.start_date), \'days\'));\r\n    if (dateDiff >= 0) {\r\n        switch (dateDiff) {\r\n            case 0: \r\n                value = 0;\r\n                break;\r\n            case 30:\r\n                value = 30;\r\n                break;\r\n            case 45: \r\n                value = 45;\r\n                break;\r\n            case 60: \r\n                value = 60;\r\n                break;\r\n            case 90: \r\n                value = 90;\r\n                break;\r\n            case 120: value = 120;\r\n                break;\r\n        }\r\n    }\r\n}',
                                allowCalculateOverride: true,
                                key: 'selectRange',
                                conditional: {
                                    show: false,
                                    when: 'action',
                                    eq: 'view'
                                },
                                logic: [
                                    {
                                        name: 'check for disable condn',
                                        trigger: {
                                            type: 'javascript',
                                            javascript: 'result = ((moment(data.start_date).isAfter(moment(new Date()), \'day\')) && !(data.radio === \'yes\'));'
                                        },
                                        actions: [
                                            {
                                                name: 'disable field',
                                                type: 'property',
                                                property: {
                                                    label: 'Disabled',
                                                    value: 'disabled',
                                                    type: 'boolean'
                                                },
                                                state: true
                                            }
                                        ]
                                    }
                                ],
                                attributes: {
                                    id: 'range'
                                },
                                type: 'select',
                                input: true,
                                hideOnChildrenHidden: false
                            }
                        ],
                        width: 4,
                        offset: 0,
                        push: 0,
                        pull: 0,
                        size: 'md',
                        currentWidth: 4
                    },
                    {
                        components: [
                            {
                                label: 'Columns',
                                columns: [
                                    {
                                        components: [
                                            {
                                                label: 'End Date',
                                                format: 'MM/dd/yyyy',
                                                customClass: 'pr-0',
                                                tableView: false,
                                                datePicker: {
                                                    disableWeekends: false,
                                                    disableWeekdays: false,
                                                    minDate: 'moment(new Date()).format(\'MM/DD/YYYY\');'
                                                },
                                                enableTime: false,
                                                calculateValue: 'if (data.selectRange || data.selectRange === 0) {  \r\n    let result = new Date(data.start_date);\r\n    result.setDate(new Date(result).getDate() + data.selectRange); \r\n    if (result) {\r\n        value = result;\r\n    }\r\n} else {\r\n       value = value;\r\n}\r\n',
                                                validate: {
                                                    custom: 'if (moment(data.start_date).isValid() && moment(data.end_date).isValid()) {\r\n    valid =  moment(data.start_date).isSameOrBefore(moment(data.end_date), \'day\') ? true : "End date must be greater than start date"\r\n}\r\n'
                                                },
                                                enableMinDateInput: true,
                                                enableMaxDateInput: false,
                                                key: 'end_date',
                                                logic: [
                                                    {
                                                        name: 'disable end date',
                                                        trigger: {
                                                            type: 'javascript',
                                                            javascript: 'return data.selectRange > 0 || data.selectRange === 0'
                                                        },
                                                        actions: [
                                                            {
                                                                name: 'disable end date field',
                                                                type: 'property',
                                                                property: {
                                                                    label: 'Disabled',
                                                                    value: 'disabled',
                                                                    type: 'boolean'
                                                                },
                                                                state: true
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        name: 'disable',
                                                        trigger: {
                                                            type: 'javascript',
                                                            javascript: 'result = ((moment(data.start_date).isAfter(moment(new Date()), \'day\')) && !(data.radio === \'yes\'));'
                                                        },
                                                        actions: [
                                                            {
                                                                name: 'disable',
                                                                type: 'property',
                                                                property: {
                                                                    label: 'Disabled',
                                                                    value: 'disabled',
                                                                    type: 'boolean'
                                                                },
                                                                state: true
                                                            }
                                                        ]
                                                    }
                                                ],
                                                attributes: {
                                                    id: 'endDate'
                                                },
                                                type: 'datetime',
                                                input: true,
                                                widget: {
                                                    type: 'calendar',
                                                    displayInTimezone: 'viewer',
                                                    locale: 'en',
                                                    useLocaleSettings: false,
                                                    allowInput: true,
                                                    mode: 'single',
                                                    enableTime: false,
                                                    noCalendar: false,
                                                    format: 'MM/dd/yyyy',
                                                    hourIncrement: 1,
                                                    minuteIncrement: 1,
                                                    time_24hr: false,
                                                    minDate: 'moment(new Date()).format(\'MM/DD/YYYY\');',
                                                    disableWeekends: false,
                                                    disableWeekdays: false,
                                                    maxDate: null
                                                },
                                                hideOnChildrenHidden: false
                                            }
                                        ],
                                        width: 9,
                                        offset: 0,
                                        push: 0,
                                        pull: 0,
                                        size: 'md',
                                        currentWidth: 9
                                    },
                                    {
                                        components: [
                                            {
                                                label: '&#160',
                                                action: 'custom',
                                                showValidations: false,
                                                leftIcon: 'fa fa-clipboard',
                                                customClass: 'mt-3 formio-icon-btn pr-add',
                                                tableView: false,
                                                key: 'copy',
                                                conditional: {
                                                    show: false,
                                                    when: 'action',
                                                    eq: 'view'
                                                },
                                                type: 'button',
                                                custom: 'navigator.clipboard.writeText(data.end_date? (moment(data.end_date).format(\'MM/DD/YYYY\')) : \'\');',
                                                input: true
                                            }
                                        ],
                                        width: 1,
                                        offset: 0,
                                        push: 0,
                                        pull: 0,
                                        size: 'md',
                                        currentWidth: 1
                                    }
                                ],
                                key: 'columns1',
                                type: 'columns',
                                input: false,
                                tableView: false
                            }
                        ],
                        size: 'md',
                        width: 4,
                        offset: 0,
                        push: 0,
                        pull: 0,
                        currentWidth: 4
                    },
                    {
                        components: [
                            {
                                label: 'Do you wish to use a future start date',
                                optionsLabelPosition: 'right',
                                inline: true,
                                hidden: true,
                                tableView: false,
                                values: [
                                    {
                                        label: 'Yes',
                                        value: 'yes',
                                        shortcut: ''
                                    },
                                    {
                                        label: 'No',
                                        value: 'no',
                                        shortcut: ''
                                    }
                                ],
                                key: 'radio',
                                redrawOn: 'start_date',
                                clearOnHide: false,
                                calculateValue: 'if(data.action === \'edit\' && moment(data.initialApiDataSnap.start_date).isAfter(moment(), \'day\')) {\r\n    value = \'yes\'\r\n    // even hide it permanently\r\n}',
                                allowCalculateOverride: true,
                                validate: {
                                    required: true
                                },
                                logic: [
                                    {
                                        name: 'check future date',
                                        trigger: {
                                            type: 'javascript',
                                            javascript: 'return moment(data.start_date).isAfter(moment(new Date()), \'day\')'
                                        },
                                        actions: [
                                            {
                                                name: 'hide this',
                                                type: 'property',
                                                property: {
                                                    label: 'Hidden',
                                                    value: 'hidden',
                                                    type: 'boolean'
                                                },
                                                state: false
                                            }
                                        ]
                                    },
                                    {
                                        name: 'check if radio is yes',
                                        trigger: {
                                            type: 'javascript',
                                            javascript: 'result =  data.radio === \'yes\''
                                        },
                                        actions: [
                                            {
                                                name: 'hide radio',
                                                type: 'property',
                                                property: {
                                                    label: 'Hidden',
                                                    value: 'hidden',
                                                    type: 'boolean'
                                                },
                                                state: false
                                            }
                                        ]
                                    },
                                    {
                                        name: 'Hide for edit and view',
                                        trigger: {
                                            type: 'simple',
                                            simple: {
                                                show: true,
                                                when: 'action',
                                                eq: 'view'
                                            }
                                        },
                                        actions: [
                                            {
                                                name: 'Hide for edit and view',
                                                type: 'property',
                                                property: {
                                                    label: 'Hidden',
                                                    value: 'hidden',
                                                    type: 'boolean'
                                                },
                                                state: true
                                            }
                                        ]
                                    },
                                    {
                                        name: 'check action for edit mode',
                                        trigger: {
                                            type: 'simple',
                                            simple: {
                                                show: true,
                                                when: 'action',
                                                eq: 'edit'
                                            }
                                        },
                                        actions: [
                                            {
                                                name: 'set yes as default value',
                                                type: 'value',
                                                value: '// if (moment(data.start_date).isAfter(moment(), \'day\')) {\r\n//     value = \'yes\';\r\n// }'
                                            }
                                        ]
                                    },
                                    {
                                        name: 'check for past or current date',
                                        trigger: {
                                            type: 'javascript',
                                            javascript: 'return moment(data.start_date).isSameOrBefore(moment(new Date()), \'day\')'
                                        },
                                        actions: [
                                            {
                                                name: 'reset the radio button',
                                                type: 'value',
                                                value: 'value = \'\';'
                                            }
                                        ]
                                    },
                                    {
                                        name: 'check if snap date is future date',
                                        trigger: {
                                            type: 'javascript',
                                            javascript: 'if(data.action === \'edit\' && moment(data.initialApiDataSnap.start_date).isAfter(moment(), \'day\')) {\r\n    result = true\r\n} else {\r\n    result = false\r\n}\r\nreturn result'
                                        },
                                        actions: [
                                            {
                                                name: 'hide radio',
                                                type: 'property',
                                                property: {
                                                    label: 'Hidden',
                                                    value: 'hidden',
                                                    type: 'boolean'
                                                },
                                                state: true
                                            }
                                        ]
                                    }
                                ],
                                type: 'radio',
                                input: true
                            }
                        ],
                        size: 'md',
                        width: 4,
                        offset: 0,
                        push: 0,
                        pull: 0,
                        currentWidth: 4
                    },
                    {
                        label: 'initialApiDataSnap',
                        hidden: true,
                        tableView: false,
                        clearOnHide: false,
                        key: 'initialApiDataSnap',
                        type: 'datamap',
                        input: true,
                        valueComponent: {
                            type: 'textfield',
                            key: 'value',
                            label: 'Value',
                            input: true,
                            hideLabel: true,
                            tableView: true
                        },
                        size: 'md',
                        currentWidth: 6,
                        components: [],
                        width: 6,
                        offset: 0,
                        push: 0,
                        pull: 0
                    }
                ]
            });
        };
        // update the builderInfo of custom omponent with basic config (informing formio to place this component in builder view)
        dateComponentRef.builderInfo = {
            title: 'Date Range',
            group: 'advanced',
            icon: 'calendar',
            // weight: 0,
            documentation: '',
            schema: dateComponentRef.schema()
        };
        // use addComponent method provided by formio to inject the custom component in formio
        Components.addComponent('DateFieldComponent', dateComponentRef);
        const editForm = Components.components.panel.editForm;
        const form = editForm();
        this.id = this.route.parent.snapshot.paramMap.get('id');
        this.isEditPage = !!this.id;
        console.log(`Edit Page: ${this.isEditPage}`);
        Components.components.panel.editForm = function () {
            const tabs1 = Utils.getComponent(form.components, 'tabs', true);
            tabs1.components[0].components[4].data.values.push({
                label: 'Gray',
                value: 'gray'
            });
            tabs1.components[0].components[4].data.values.push({
                label: 'Light Gray',
                value: 'lightGray'
            });
            tabs1.components[0].components[4].data.values.push({
                label: 'Brown',
                value: 'brown'
            });
            tabs1.components[0].components[4].data.values.push({
                label: 'Greenish Brown',
                value: 'greenishBrown'
            });
            tabs1.components[0].components[4].data.values.push({
                label: 'Marron',
                value: 'marron'
            });
            tabs1.components[0].components[4].data.values.push({
                label: 'Light Blue',
                value: 'lightBlue'
            });
            return form;
        };
        this.getCurrentFormData();
        this.getCurrentBasicData();
        this.loadForm();
        // SOcket start
        console.log('Socket Connection');
        this.socketAdapter.onConnect().subscribe(str => {
            // alert(this.id)
            console.log(str);
            console.log(`Socket ID: ${this.id}`);
            this.socketAdapter.joinRoom({
                roomId: this.id,
                roomType: 'page',
                user: {
                    id: this.logedInUser.id,
                    firstname: this.logedInUser.firstname,
                    lastname: this.logedInUser.lastname
                }
            });
        });
        this.socketAdapter.receivePageData().subscribe(data => {
            this.form = data.form;
            this.updatedfrom = data.form;
            const name = `${data.user.firstname} ${data.user.lastname}`;
            // console.log(data.user)
            this.updateNotification.emit(`${name} has made changes`);
            console.log(`Socket: ${name} has made changes`);
        });
        this.socketAdapter.onReConnect().subscribe(() => {
            this.socketAdapter.joinRoom({
                roomId: this.id,
                // roomId: 'page-1',
                roomType: 'page',
                user: {
                    id: this.logedInUser.id,
                    firstname: this.logedInUser.firstname,
                    lastname: this.logedInUser.lastname
                }
            });
        });
        this.socketAdapter.onlineEditPageUsers().subscribe(data => {
            // console.log('online', data)
            this.onlineUserList.emit(data);
            console.log(`Socket: Edit Users: ${data.roomId}`);
            console.log(data);
        });
    }
    onChangeFormType(event) {
        if (this.formData.templatejson) {
            const templatejson = typeof this.formData.templatejson === 'string'
                ? JSON.parse(this.formData.templatejson)
                : this.formData.templatejson;
            templatejson.display = event.value;
            this.selectedDisplayType = event.value;
            this.form = templatejson;
            this.formData.templatejson = JSON.stringify(templatejson);
            this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(this.form, null, 4)));
        }
    }
    getCurrentFormData() {
        this.pageBuilderAddService.currentFormData.subscribe((data) => {
            this.formData = data;
            this.isValidFormDetails =
                this.formData.description !== '' && this.formData.pagename !== '' && this.formData.pagetype !== '';
            if (this.formData.templatejson) {
                this.form =
                    typeof this.formData.templatejson === 'string'
                        ? JSON.parse(this.formData.templatejson)
                        : this.formData.templatejson;
                if (!this.form.platformApi) {
                    this.form.platformApi = this.environment.apiHost;
                }
                this.selectedDisplayType =
                    (this.formData.templatejson && this.formData.templatejson.display) || 'form';
                this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(this.form, null, 4)));
            }
            else {
                this.form = { components: [] };
            }
            if (this.formData.templateins || this.formData.pageurl) {
                this.patchManualForm();
            }
        });
    }
    getCurrentBasicData() {
        this.pageBuilderAddService.currentBasicData.subscribe((data) => {
            if (data) {
                if (this.formData) {
                    this.formData.pagename = data.pagename;
                    this.formData.pagetype = data.pagetype;
                    this.formData.description = data.description;
                    this.formData.display = data.display;
                    this.form.display = data.display;
                }
            }
        });
    }
    ngOnDestroy() {
        console.log('Design Page Destroyed');
        // this.socketAdapter.leaveRoom({
        //   roomId: this.id,
        //   // roomId: 'page-1',
        //   roomType: 'page',
        //   user: {
        //     id: this.logedInUser?.id,
        //     firstname: this.logedInUser?.firstname,
        //     lastname: this.logedInUser?.lastname
        //   }
        // });
    }
    loadForm() {
        this.manualForm = this.formBuilder.group({
            routingURL: ['', Validators.required],
            initParam: ['', Validators.required]
        });
    }
    patchManualForm() {
        this.manualForm.patchValue({
            routingURL: this.formData.pageurl ? this.formData.pageurl : '',
            initParam: this.formData.templateins ? this.formData.templateins : ''
        });
    }
    resetForm = () => {
        this.router.navigate([this.isEditPage ? '../../../list' : '../../list'], { relativeTo: this.route });
    };
    goToDetailPage() {
        this.router.navigate(['../grid-field'], { relativeTo: this.route });
    }
    closePopup() {
        this.dialogRef.close();
    }
    previewForm() {
        this.dialogRef = this.dialog.open(this.callPopup, {
            width: '100%',
            height: '90%'
        });
        this.jsonForm = this.form;
    }
    formSubmit = publish => {
        const formDetails = this.setFormDetails();
        if (formDetails.id) {
            this.patchPage(formDetails, publish);
        }
        else {
            this.createPage(formDetails, publish);
        }
    };
    patchPage(formDetails, publish) {
        const createPage = this.localstorage.getObj('CREATE PAGE');
        formDetails.published = publish;
        if (createPage) {
            this.formData.id = formDetails.activeVersion.id;
        }
        this.pageBuilderService.updatePageVersion(formDetails.id, formDetails, createPage).subscribe(result => {
            if (result?.data && Object.keys(result?.data).length) {
                this.conditionCheckPatch(result, publish);
                this.saveAsset(formDetails?.pageid || formDetails.activeVersion.pageid, formDetails?.id);
                if (publish) {
                    this.router.navigate([
                        `pages/page-design/versions/${formDetails?.pageid || formDetails.activeVersion.pageid}`
                    ]);
                    this.alert.success(`The Version ${formDetails.version || formDetails.activeVersion.version} is published successfully`);
                }
                else {
                    this.alert.success('Page saved successfully');
                }
            }
        }, error => {
            this.alert.error('Error Occured', error);
        });
    }
    conditionCheckPatch(result, publish) {
        const id = result?.data.id ? result?.data.id : '';
        if (!this.id && publish) {
            if (id) {
                this.router.navigate(['../edit', id], { relativeTo: this.route });
            }
        }
    }
    createPage(formDetails, publish) {
        formDetails.published = publish;
        this.pageBuilderAddService.createPage(formDetails).subscribe(result => {
            const data = result['data'];
            if (data && Object.keys(data).length) {
                const pageId = data?.id || '';
                if (!this.id) {
                    if (pageId) {
                        this.router.navigate(['../edit', pageId], { relativeTo: this.route });
                    }
                }
                this.saveAsset(pageId, data.activeVersion.id);
                if (publish) {
                    this.router.navigate([`pages/page-design/versions/${pageId || formDetails.activeVersion.pageid}`]);
                    this.alert.success(`The Version ${formDetails.version || data.activeVersion.version} is published successfully`);
                }
                else {
                    this.alert.success('Page saved successfully');
                }
            }
        }, error => {
            this.alert.error('Error Occured', error);
        });
    }
    setFormDetails() {
        const formDetails = this.formData;
        if (this.formData.pagetype === 'MAF') {
            const manualData = this.manualForm.getRawValue();
            formDetails.pageurl = manualData.routingURL;
            formDetails.templateins = manualData.initParam;
        }
        else if (this.formData.pagetype === 'FFP') {
            const gridConfigForm = this.gridConfig.gridConfigFormArray[0];
            const formComponents = (this.updatedfrom || JSON.parse(formDetails.templatejson)).components.filter(a => a.key !== 'submit');
            this.gridConfig.gridConfigFormArray = formComponents.map(a => ({
                ...gridConfigForm,
                header: a.label,
                columnDef: a.key
            }));
            this.gridConfig.gridTitle = this.formData.pagename;
            formDetails.templatejson = JSON.stringify(this.updatedfrom);
            formDetails.gridconfig = JSON.stringify(this.gridConfig);
        }
        else {
            if (this.updatedfrom) {
                formDetails.templatejson = JSON.stringify(this.updatedfrom);
            }
            else {
                formDetails.templatejson = this.formData && this.formData.templatejson ? this.formData.templatejson : null;
            }
        }
        if (this.id) {
            formDetails.id = this.id;
        }
        return formDetails;
    }
    loadFields(componentsData) {
        for (const component of componentsData) {
            if (component?.label &&
                component?.label !== 'Columns' &&
                component?.label !== 'Table' &&
                component?.label !== 'Panel') {
                this.allFields.push({
                    label: component?.label,
                    field: component?.key
                });
            }
            // check inner data
            if (component?.columns) {
                this.loadFields(component?.columns);
            }
            else if (component?.components) {
                this.loadFields(component?.components);
            }
        }
    }
    onChange(event) {
        this.jsonElement.nativeElement.innerHTML = '';
        this.updatedfrom = event.form;
        this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
        if (event.type === 'saveComponent' || event.type === 'deleteComponent') {
            this.socketAdapter.sendPageData({
                roomId: this.id,
                // roomId: 'page-1',
                form: this.updatedfrom,
                user: this.logedInUser
            });
        }
    }
    saveAsset(pageId, versionId) {
        this.allFields = [];
        const formDetails = this.formData;
        const fields = JSON.parse(formDetails.templatejson);
        this.loadFields(fields.components);
        const fieldArr = this.allFields.map(item => item.field);
        const assetNameArr = this.assetList && this.assetList.length ? this.assetList.map(item => item.assetname) : [];
        const activeArr = [];
        const inactiveArr = [];
        if (this.assetList && this.assetList.length) {
            this.assetList.forEach(item => {
                if (fieldArr.includes(item.assetname)) {
                    activeArr.push(item);
                }
                else {
                    item.isactive = false;
                    inactiveArr.push(item);
                }
            });
        }
        const newAssetArr = fieldArr.filter(x => !assetNameArr.includes(x));
        if (newAssetArr.length) {
            this.setActiveAsset(newAssetArr, pageId, versionId).forEach(asset => {
                activeArr.push(asset);
            });
        }
        const assetData = [...activeArr, ...inactiveArr];
        this.getMenuList(assetData, pageId, versionId);
    }
    setActiveAsset(newAssetArr, pageId, versionId) {
        const createPage = this.localstorage.getObj('CREATE PAGE');
        const versionid = this.createDynamicPage ? versionId : this.formData.id;
        const activeArr = [];
        newAssetArr.forEach(item => {
            const getFieldData = this.allFields.find(res => res.field === item);
            const data = {
                assetname: item,
                assetpath: this.formData.pagename + '.' + item,
                assettype: '45F',
                dashboardtemplatejson: null,
                description: getFieldData && getFieldData.label ? getFieldData.label : null,
                displayname: getFieldData && getFieldData.label ? getFieldData.label : null,
                icon: null,
                id: null,
                pageid: pageId,
                parentassetid: null,
                url: null,
                isactive: createPage || this.formData.isactive,
                versionid: String(versionid)
            };
            activeArr.push(data);
        });
        return activeArr;
    }
    getMenuList(assetData, pageId, versionId) {
        const pageid = this.createDynamicPage ? pageId : Number(this.formData.pageid);
        const versionid = this.createDynamicPage ? versionId : Number(this.formData.id);
        this.pageBuilderAddService.createAssetByVersion(pageid, versionid, assetData).subscribe(() => {
            // This is intentional
        });
    }
    checkBasicInfo() {
        this.id = this.route.parent.snapshot.paramMap.get('id');
        this.basicPageInformation = this.localstorage.getObj('PAGEDESIGN_BASICINFO');
        if (!this.id) {
            const validation = this.validationPage();
            if (!validation && !this.selectedPage) {
                this.router.navigate(['/pages/page-design/add/basic-info'], { relativeTo: this.route });
                return this.alert.error('Please fill in all the required fields.');
            }
        }
    }
    validationPage() {
        if (!this.basicPageInformation.pagename ||
            !this.basicPageInformation.pagetype ||
            !this.basicPageInformation.description) {
            return false;
        }
        else {
            return true;
        }
    }
    copyText() {
        this.clipboard.copy(this.jsonElement.nativeElement.innerText);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DesignPageComponent, deps: [{ token: i0.Injector }, { token: i1.UntypedFormBuilder }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: AlertService }, { token: i4$1.MatDialog }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DesignPageComponent, selector: "app-design-page", inputs: { basicInfo: "basicInfo" }, outputs: { updateNotification: "updateNotification", onlineUserList: "onlineUserList" }, viewQueries: [{ propertyName: "jsonElement", first: true, predicate: ["json"], descendants: true, static: true }, { propertyName: "codeElement", first: true, predicate: ["code"], descendants: true, static: true }, { propertyName: "callPopup", first: true, predicate: ["callPopup"], descendants: true }], ngImport: i0, template: "<div class=\"page-design-basic-info\">\r\n  <p-card styleClass=\"rbac-card w-100 mb-2\">\r\n    <div class=\"strip_head page-designer toggleleft\">\r\n      <span class=\"report_head font-weight-bold\">Design Page</span>\r\n    </div>\r\n    <div class=\"p-fluid p-formgrid p-grid\">\r\n      <div class=\"p-field p-col-12 p-md-4\">\r\n        <label for=\"pagetype\" class=\"referral-form-labels\"\r\n          >Display Type\r\n          <span class=\"requiredfield text-danger\">*</span>\r\n        </label>\r\n        <p-dropdown\r\n          [options]=\"displayType\"\r\n          placeholder=\"Select Form Type\"\r\n          id=\"pagetype\"\r\n          optionLabel=\"name\"\r\n          optionValue=\"value\"\r\n          [(ngModel)]=\"selectedDisplayType\"\r\n          (onChange)=\"onChangeFormType($event)\">\r\n        </p-dropdown>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-2\">\r\n      <div class=\"col-12\">\r\n        <form-builder [form]=\"form\" (change)=\"onChange($event)\" [options]=\"options\"></form-builder>\r\n      </div>\r\n      <div class=\"col-12 text-right\">\r\n        <button\r\n          class=\"pull-right mb-2 btn btn-primary btncommon\"\r\n          *showField='\"PAG_DES_DES_PAG_PREVIEW\"'\r\n          (click)=\"previewForm()\">\r\n          Preview\r\n        </button>\r\n        <button class=\"pull-right mb-2 mr-2 btn btn-cancel\" *showField='\"PAG_DES_DES_PAG_CANCEL\"' (click)=\"resetForm()\">\r\n          Cancel\r\n        </button>\r\n        <button\r\n          class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\"\r\n          *showField='\"PAG_DES_DES_PAG_PREVIOUS\"'\r\n          (click)=\"goToDetailPage()\">\r\n          Previous\r\n        </button>\r\n        <button\r\n          class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\"\r\n          [disabled]=\"!isValidFormDetails\"\r\n          *showField='\"PAG_DES_DES_PAG_PUBLISH\"'\r\n          (click)=\"formSubmit(true)\">\r\n          Publish\r\n        </button>\r\n        <button\r\n          class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\"\r\n          [disabled]=\"!isValidFormDetails\"\r\n          *showField='\"PAG_DES_DES_PAG_SAVE\"'\r\n          (click)=\"formSubmit(false)\">\r\n          Save\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-2\" *ngIf=\"formData.pagetype === 'MAF'\">\r\n      <form [formGroup]=\"manualForm\" autocomplete=\"off\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <mat-form-field class=\"\">\r\n              <mat-label>URL For Routing</mat-label>\r\n              <input\r\n                type=\"text\"\r\n                matInput\r\n                formControlName=\"routingURL\"\r\n                appTitleCase\r\n                placeholder=\"URL For Routing\"\r\n                required />\r\n              <mat-error class=\"firstname-error\" *ngIf=\"manualForm.controls['routingURL'].invalid\">\r\n                Please enter URL For Routing</mat-error\r\n              >\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-12\">\r\n            <mat-form-field class=\"\">\r\n              <mat-label>Init Parameter</mat-label>\r\n              <input\r\n                type=\"text\"\r\n                matInput\r\n                formControlName=\"initParam\"\r\n                appTitleCase\r\n                placeholder=\"Init Parameter\"\r\n                required />\r\n              <mat-error class=\"firstname-error\" *ngIf=\"manualForm.controls['initParam'].invalid\">\r\n                Please enter Init Parameter</mat-error\r\n              >\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <ng-template #callPopup>\r\n      <h2 matDialogTitle>Preview</h2>\r\n      <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <formio [form]=\"jsonForm\"></formio>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"pull-right\">\r\n        <button (click)=\"closePopup()\" class=\"btn btn-cancel mr-2 mb-2\">Close</button>\r\n        <!-- btn btn-sec -->\r\n      </div>\r\n    </ng-template>\r\n    <div class=\"mt-3\">\r\n      <h6 class=\"text-left\">As JSON Schema</h6>\r\n      <div class=\"menuIcons\">\r\n        <span class=\"material-symbols-outlined\" role=\"button\" (click)=\"copyText()\" title=\"Copy JSON Schema\"> content_copy </span>\r\n      </div>\r\n      <div class=\"well jsonviewer p-3\">\r\n        <pre id=\"json\" class=\"mb-0\"><code class=\"language-json\" #json></code></pre>\r\n      </div>\r\n    </div>\r\n  </p-card>\r\n</div>\r\n<router-outlet></router-outlet>\r\n", styles: ["table.table tbody tr td{padding:0!important}:host ::ng-deep form-builder .formio .card,:host ::ng-deep form-builder .formio .p-card{background-color:var(--bg-light);border-color:var(--table-border)}:host ::ng-deep form-builder .formio .card .card-header,:host ::ng-deep form-builder .formio .p-card .card-header{background-color:var(--background-color);border-color:var(--table-border)}:host ::ng-deep form-builder .formio .card .card-header .builder-group-button,:host ::ng-deep form-builder .formio .p-card .card-header .builder-group-button{background-color:var(--background-color);color:var(--text-dark)}:host ::ng-deep .component-btn-group .component-settings-button{color:var(--text-dark)}.jsonviewer{background:var(--background-color)}.jsonviewer pre{font-size:var(--font-16)}.jsonviewer .language-json{color:var(--text-dark)}\n"], dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.RouterOutlet, selector: "router-outlet", inputs: ["name"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }, { kind: "component", type: i7$1.FormioComponent, selector: "formio" }, { kind: "component", type: i7$1.FormBuilderComponent, selector: "form-builder", inputs: ["form", "options", "formbuilder", "noeval", "refresh", "rebuild"], outputs: ["change"] }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i7$2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i8$1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i8$1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i8$1.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i4$1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "component", type: i9.Dropdown, selector: "p-dropdown", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }, { kind: "component", type: i10.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { kind: "directive", type: ShowFieldDirective, selector: "[showField]", inputs: ["showField"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DesignPageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-design-page', template: "<div class=\"page-design-basic-info\">\r\n  <p-card styleClass=\"rbac-card w-100 mb-2\">\r\n    <div class=\"strip_head page-designer toggleleft\">\r\n      <span class=\"report_head font-weight-bold\">Design Page</span>\r\n    </div>\r\n    <div class=\"p-fluid p-formgrid p-grid\">\r\n      <div class=\"p-field p-col-12 p-md-4\">\r\n        <label for=\"pagetype\" class=\"referral-form-labels\"\r\n          >Display Type\r\n          <span class=\"requiredfield text-danger\">*</span>\r\n        </label>\r\n        <p-dropdown\r\n          [options]=\"displayType\"\r\n          placeholder=\"Select Form Type\"\r\n          id=\"pagetype\"\r\n          optionLabel=\"name\"\r\n          optionValue=\"value\"\r\n          [(ngModel)]=\"selectedDisplayType\"\r\n          (onChange)=\"onChangeFormType($event)\">\r\n        </p-dropdown>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-2\">\r\n      <div class=\"col-12\">\r\n        <form-builder [form]=\"form\" (change)=\"onChange($event)\" [options]=\"options\"></form-builder>\r\n      </div>\r\n      <div class=\"col-12 text-right\">\r\n        <button\r\n          class=\"pull-right mb-2 btn btn-primary btncommon\"\r\n          *showField='\"PAG_DES_DES_PAG_PREVIEW\"'\r\n          (click)=\"previewForm()\">\r\n          Preview\r\n        </button>\r\n        <button class=\"pull-right mb-2 mr-2 btn btn-cancel\" *showField='\"PAG_DES_DES_PAG_CANCEL\"' (click)=\"resetForm()\">\r\n          Cancel\r\n        </button>\r\n        <button\r\n          class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\"\r\n          *showField='\"PAG_DES_DES_PAG_PREVIOUS\"'\r\n          (click)=\"goToDetailPage()\">\r\n          Previous\r\n        </button>\r\n        <button\r\n          class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\"\r\n          [disabled]=\"!isValidFormDetails\"\r\n          *showField='\"PAG_DES_DES_PAG_PUBLISH\"'\r\n          (click)=\"formSubmit(true)\">\r\n          Publish\r\n        </button>\r\n        <button\r\n          class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\"\r\n          [disabled]=\"!isValidFormDetails\"\r\n          *showField='\"PAG_DES_DES_PAG_SAVE\"'\r\n          (click)=\"formSubmit(false)\">\r\n          Save\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-2\" *ngIf=\"formData.pagetype === 'MAF'\">\r\n      <form [formGroup]=\"manualForm\" autocomplete=\"off\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <mat-form-field class=\"\">\r\n              <mat-label>URL For Routing</mat-label>\r\n              <input\r\n                type=\"text\"\r\n                matInput\r\n                formControlName=\"routingURL\"\r\n                appTitleCase\r\n                placeholder=\"URL For Routing\"\r\n                required />\r\n              <mat-error class=\"firstname-error\" *ngIf=\"manualForm.controls['routingURL'].invalid\">\r\n                Please enter URL For Routing</mat-error\r\n              >\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-12\">\r\n            <mat-form-field class=\"\">\r\n              <mat-label>Init Parameter</mat-label>\r\n              <input\r\n                type=\"text\"\r\n                matInput\r\n                formControlName=\"initParam\"\r\n                appTitleCase\r\n                placeholder=\"Init Parameter\"\r\n                required />\r\n              <mat-error class=\"firstname-error\" *ngIf=\"manualForm.controls['initParam'].invalid\">\r\n                Please enter Init Parameter</mat-error\r\n              >\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <ng-template #callPopup>\r\n      <h2 matDialogTitle>Preview</h2>\r\n      <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <formio [form]=\"jsonForm\"></formio>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"pull-right\">\r\n        <button (click)=\"closePopup()\" class=\"btn btn-cancel mr-2 mb-2\">Close</button>\r\n        <!-- btn btn-sec -->\r\n      </div>\r\n    </ng-template>\r\n    <div class=\"mt-3\">\r\n      <h6 class=\"text-left\">As JSON Schema</h6>\r\n      <div class=\"menuIcons\">\r\n        <span class=\"material-symbols-outlined\" role=\"button\" (click)=\"copyText()\" title=\"Copy JSON Schema\"> content_copy </span>\r\n      </div>\r\n      <div class=\"well jsonviewer p-3\">\r\n        <pre id=\"json\" class=\"mb-0\"><code class=\"language-json\" #json></code></pre>\r\n      </div>\r\n    </div>\r\n  </p-card>\r\n</div>\r\n<router-outlet></router-outlet>\r\n", styles: ["table.table tbody tr td{padding:0!important}:host ::ng-deep form-builder .formio .card,:host ::ng-deep form-builder .formio .p-card{background-color:var(--bg-light);border-color:var(--table-border)}:host ::ng-deep form-builder .formio .card .card-header,:host ::ng-deep form-builder .formio .p-card .card-header{background-color:var(--background-color);border-color:var(--table-border)}:host ::ng-deep form-builder .formio .card .card-header .builder-group-button,:host ::ng-deep form-builder .formio .p-card .card-header .builder-group-button{background-color:var(--background-color);color:var(--text-dark)}:host ::ng-deep .component-btn-group .component-settings-button{color:var(--text-dark)}.jsonviewer{background:var(--background-color)}.jsonviewer pre{font-size:var(--font-16)}.jsonviewer .language-json{color:var(--text-dark)}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.UntypedFormBuilder }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: AlertService }, { type: i4$1.MatDialog }, { type: DataStoreService }]; }, propDecorators: { jsonElement: [{
                type: ViewChild,
                args: ['json', { static: true }]
            }], codeElement: [{
                type: ViewChild,
                args: ['code', { static: true }]
            }], basicInfo: [{
                type: Input
            }], callPopup: [{
                type: ViewChild,
                args: ['callPopup']
            }], updateNotification: [{
                type: Output
            }], onlineUserList: [{
                type: Output
            }] } });

class GridConfigComponent {
    formBuilder;
    route;
    cdRef;
    router;
    alert;
    _storeservice;
    gridConfigForm;
    gridConfigFormArray;
    gridActionFormArray;
    formData;
    gridConfig;
    id = '';
    gridConfigCount;
    manualForm;
    actionButtonClicked = false;
    gridOptions;
    pageData = [];
    pagesList = [];
    editType = [
        { label: 'External Link', value: 'External Link' },
        { label: 'OCR', value: 'Ocr Scan' },
        { label: 'Open PopUp', value: 'Open PopUp' },
        { label: 'Document Generation', value: 'Document Generation' },
        { label: 'Document Report Generation', value: 'Document Report Generation' }
    ];
    documentReport = false;
    sortTypeValues;
    iconValues;
    pageBuilderAddService;
    pageAccessService;
    basicPageInformation;
    _localstore;
    pageBuilderService;
    createDynamicPage;
    orgSubs;
    orgId;
    authService;
    selectFieldsName;
    businessName;
    businessRules;
    tableSchemaObj;
    RBACORG;
    constructor(injector, formBuilder, route, cdRef, router, alert, _storeservice) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.cdRef = cdRef;
        this.router = router;
        this.alert = alert;
        this._storeservice = _storeservice;
        this.pageBuilderAddService = injector.get(PageBuilderAddService);
        this._localstore = injector.get(LocalService);
        this.pageBuilderService = injector.get(PageBuilderService$1);
        this.pageAccessService = injector.get(PageAccessService);
        this.authService = injector.get(AuthService);
        this.createDynamicPage = this._localstore.getObj('CREATE PAGE') || false;
        this.sortTypeValues = [
            { value: 'asc', label: 'Ascending' },
            { value: 'desc', label: 'Descending' }
        ];
        this.gridOptions = [
            { value: 'sort', label: 'Sorting' },
            { value: 'filter', label: 'Filtering' },
            { value: 'hide', label: 'Hide' },
            { value: 'fixed', label: 'Fixed' },
            // { value: 'Choosable', label: 'Default Columns' },
            // { value: 'visible', label: 'Visible' },
            // { value: 'dateFormat', label: 'Date' },
            { value: 'mobileView', label: 'Mobile' },
            { value: 'tabView', label: 'Tablet' }
        ];
        this.iconValues = [
            { name: 'Add', value: 'fa fa-plus', key: 'add' },
            { name: 'Edit', value: 'fa fa-pencil', key: 'edit' },
            { name: 'Delete', value: 'fa fa-trash', key: 'delete' },
            { name: 'View', value: 'fa fa-eye', key: 'view' }
        ];
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.RBACORG = res['RBACORG'];
                this.orgId = parseInt(this.RBACORG['orgID']);
                if (this.orgId) {
                    this.setPagesList();
                }
            }
        });
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.basicPageInformation = this._localstore.getObj('PAGEDESIGN_BASICINFO');
        if (!this.id) {
            const validation = this.validationPage();
            if (!validation) {
                this.router.navigate(['/pages/page-design/add/basic-info'], { relativeTo: this.route });
                return this.alert.error('Please fill all required fields!');
            }
        }
        this.loadForm();
        // this.setPagesList();
        this.pageBuilderAddService.currentFormData.subscribe((data) => {
            this.formData = data;
            if (this.formData && this.formData.tableschemaconfig) {
                this.tableSchemaObj = JSON.parse(this.formData.tableschemaconfig);
            }
            if (this.formData.gridconfig) {
                this.gridConfig =
                    typeof this.formData.gridconfig === 'string'
                        ? JSON.parse(this.formData.gridconfig)
                        : this.formData.gridconfig;
                this.gridConfigCount = this.gridConfig?.gridConfigFormArray.length;
                this.setQueryParams();
            }
            else {
                this.gridConfig = null;
            }
        });
        this.pageBuilderAddService.currentBasicData.subscribe((data) => {
            if (data) {
                if (this.formData) {
                    this.formData.pagename = data.pagename;
                    this.formData.pagetype = data.pagetype;
                    this.formData.description = data.description;
                }
            }
        });
    }
    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }
    loadForm() {
        this.gridConfigForm = this.formBuilder.group({
            edit: [''],
            editUrl: [''],
            delete: [''],
            deleteUrl: [''],
            externalLink: [''],
            externalUrl: [''],
            defaultSortColumn: [''],
            gridTitle: ['', Validators.required],
            defaultSortType: [''],
            isShowOnTop: [''],
            isInitialFormLoad: [''],
            exportPageName: [''],
            gridSelection: [''],
            gridDownloadRangeQueryHeader: [''],
            gridActionFormArray: this.formBuilder.array([this.createAction()]),
            gridConfigFormArray: this.formBuilder.array([this.createGridConfig()]),
            gridDownloadRangeQueryArray: this.formBuilder.array([this.createGridDownloadRangeQueryArray()]),
            chooser: [''],
            highlightRow: this.formBuilder.group({
                tableName: [''],
                columnName: [''],
                columnValue: [''],
                color: ['']
            })
        });
    }
    createGridConfig() {
        this.gridConfigForm = this.formBuilder.group({
            header: [''],
            columnDef: [''],
            link: [''],
            routelink: [''],
            icon: [''],
            icontext: [''],
            dateFormat: [''],
            datetext: [''],
            sort: [''],
            filter: [''],
            hide: [''],
            fixed: [''],
            Choosable: [''],
            visible: [''],
            selected: [''],
            mobileView: [''],
            tabView: [''],
            concatenate: false,
            businessrules: ['']
        });
    }
    changeGridOptions(value, i, gridConfigFormArray) {
        const arr = [];
        this.gridOptions.forEach(g => arr.push(g.value));
        arr.forEach(v => {
            if (value.includes(v)) {
                // if (v === 'dateFormat') {
                //   gridConfigFormArray.controls[i].get('datetext').patchValue('MDY');
                // }
                return gridConfigFormArray.controls[i].get(v).patchValue(true);
            }
            else {
                return gridConfigFormArray.controls[i].get(v).patchValue(false);
            }
        });
    }
    get formValidate() {
        return this.gridConfigForm.controls;
    }
    createAction() {
        return this.formBuilder.group({
            isOutsideGrid: [''],
            action: [''],
            icon: ['', Validators.required],
            name: [''],
            type: ['', Validators.required],
            link: ['', Validators.required],
            filterBy: [''],
            filterColumn: ['']
        });
    }
    createGridDownloadRangeQueryArray() {
        return this.formBuilder.group({
            query: ['']
        });
    }
    setPagesList() {
        this.pageAccessService.getOrganizationPage(this.orgId).subscribe(res => {
            const data = res['data']['data'];
            if (data && data?.length) {
                this.pageData = data?.filter(a => (a.activeVersion?.templatejson && a.activeVersion?.tableschemaconfig) || a.activeVersion?.tabconfig);
                this.pagesList = this.pageData.map(x => {
                    x.activeVersion.pageid = x.activeVersion.pageid.toString();
                    return {
                        id: x.activeVersion.pageid,
                        pagename: x.activeVersion.pagename,
                        value: x.activeVersion.pagename
                    };
                });
            }
        });
    }
    setQueryParams() {
        const control = this.gridConfigForm.controls['gridConfigFormArray'];
        control.controls = [];
        const controlAction = this.gridConfigForm.controls['gridActionFormArray'];
        controlAction.controls = [];
        const reportControl = this.gridConfigForm.controls['gridDownloadRangeQueryArray'];
        reportControl.controls = [];
        if (this.gridConfig && this.gridConfig.gridConfigFormArray.length) {
            this.patchGridConfig();
            if (this.gridConfig && this.gridConfig.exportPageName) {
                this.documentReport = true;
            }
            else {
                this.documentReport = false;
            }
            this.setControls();
        }
    }
    goToGridFieldPage() {
        this.router.navigate(['../grid-field'], { relativeTo: this.route });
    }
    setControls() {
        const control = this.gridConfigForm.controls['gridConfigFormArray'];
        control.controls = [];
        const controlAction = this.gridConfigForm.controls['gridActionFormArray'];
        controlAction.controls = [];
        const reportControl = this.gridConfigForm.controls['gridDownloadRangeQueryArray'];
        reportControl.controls = [];
        if (controlAction?.value?.length) {
            this.actionButtonClicked = true;
            controlAction.value.forEach(x => {
                if (x.action != '') {
                    controlAction.push(this.buildActionGridFormArray(x));
                }
            });
        }
        if (this.gridConfig?.gridDownloadRangeQueryArray?.length) {
            this.gridConfig.gridDownloadRangeQueryArray.forEach(x => {
                reportControl.push(this.buildGridDownloadRangeQueryArray(x));
            });
        }
        if (this.gridConfig?.gridActionFormArray?.length) {
            this.actionButtonClicked = true;
            this.gridConfig.gridActionFormArray.forEach(x => {
                controlAction.push(this.buildActionGridFormArray(x));
            });
        }
        if (this.gridConfig?.gridConfigFormArray?.length) {
            this.gridConfig.gridConfigFormArray.forEach(x => {
                control.push(this.buildGridFormArray(x));
            });
        }
        if (this.gridConfig?.highlightRow) {
            const obj = this.gridConfig?.highlightRow;
            this.gridConfigForm.get('highlightRow').setValue(obj);
        }
    }
    patchGridConfig() {
        this.gridConfigForm.patchValue({
            edit: this.gridConfig.edit ? this.gridConfig.edit : '',
            editUrl: this.gridConfig.editUrl ? this.gridConfig.editUrl : '',
            delete: this.gridConfig.delete ? this.gridConfig.delete : '',
            deleteUrl: this.gridConfig.deleteUrl ? this.gridConfig.deleteUrl : '',
            externalLink: this.gridConfig.externalLink ? this.gridConfig.externalLink : '',
            externalUrl: this.gridConfig.externalUrl ? this.gridConfig.externalUrl : '',
            defaultSortColumn: this.gridConfig.defaultSortColumn ? this.gridConfig.defaultSortColumn : null,
            gridTitle: this.basicPageInformation.pagename,
            defaultSortType: this.gridConfig.defaultSortType ? this.gridConfig.defaultSortType : null,
            exportPageName: this.gridConfig.exportPageName ? this.gridConfig.exportPageName : null,
            gridSelection: this.gridConfig.gridSelection ? this.gridConfig.gridSelection : '',
            gridDownloadRangeQueryHeader: this.gridConfig.gridDownloadRangeQueryHeader
                ? this.gridConfig.gridDownloadRangeQueryHeader
                : null,
            chooser: this.gridConfig.chooser ? this.gridConfig.chooser : ''
        });
    }
    buildGridFormArray(x) {
        return this.formBuilder.group({
            header: this.setHeader(x),
            selected: this.setSelected(x),
            columnDef: this.setColumnDef(x),
            icontext: this.setIconText(x),
            link: x.link ? x.link : '',
            routelink: x.routelink ? x.routelink : '',
            icon: x.icon ? x.icon : '',
            dateFormat: x.dateFormat ? x.dateFormat : '',
            datetext: x.datetext ? x.datetext : '',
            sort: x.sort ? x.sort : '',
            filter: x.filter ? x.filter : '',
            hide: x.hide ? x.hide : '',
            fixed: x.fixed ? x.fixed : '',
            Choosable: x.Choosable ? x.Choosable : '',
            visible: x.visible ? x.visible : '',
            mobileView: x.mobileView ? x.mobileView : '',
            tabView: x.tabView ? x.tabView : '',
            concatenate: x.concatenate ? x.concatenate : false,
            businessrules: x.businessrules ? x.businessrules : ''
        });
    }
    setIconText(x) {
        return x.icontext && x.icon ? x.icontext : '';
    }
    setSelected(x) {
        return [this.gridOptions.filter(opt => x[opt.value]).map(opt => opt.value)];
    }
    setHeader(x) {
        return x.header ? x.header : x.label || '';
    }
    setColumnDef(x) {
        return x.columnDef ? x.columnDef : x.field || '';
    }
    buildActionGridFormArray(x) {
        return this.formBuilder.group({
            isOutsideGrid: x.isOutsideGrid ? x.isOutsideGrid : '',
            isOwner: x.isOwner ? x.isowner : '',
            action: x.action ? x.action : '',
            icon: x.icon ? x.icon : '',
            name: x.name ? x.name : '',
            type: x.type ? x.type : '',
            link: x.link ? x.link : '',
            filterBy: x.filterBy ? x.filterBy : '',
            filterColumn: x.filterColumn ? x.filterColumn : ''
        });
    }
    buildGridDownloadRangeQueryArray(x) {
        return this.formBuilder.group({
            query: x.query ? x.query : ''
        });
    }
    // removeRouteLink(i, gridConfigFormArray: FormArray) {
    //   gridConfigFormArray.controls[i].get('link').patchValue(false);
    //   gridConfigFormArray.controls[i].get('routelink').patchValue(null);
    // }
    // checkValue(value, i, gridConfigFormArray: FormArray) {
    //   if (value) {
    //     gridConfigFormArray.controls[i].get('dateFormat').patchValue(false);
    //     gridConfigFormArray.controls[i].get('datetext').patchValue('');
    //     gridConfigFormArray.controls[i].get('sort').patchValue(false);
    //     gridConfigFormArray.controls[i].get('filter').patchValue(false);
    //     gridConfigFormArray.controls[i].get('hide').patchValue(false);
    //     gridConfigFormArray.controls[i].get('fixed').patchValue(false);
    //     gridConfigFormArray.controls[i].get('Choosable').patchValue(false);
    //     gridConfigFormArray.controls[i].get('visible').patchValue(false);
    //     gridConfigFormArray.controls[i].get('mobileView').patchValue(false);
    //     gridConfigFormArray.controls[i].get('tabView').patchValue(false);
    //   } else {
    //     gridConfigFormArray.controls[i].get('icontext').patchValue(null);
    //   }
    // }
    saveGridConfig(publish) {
        const formDetails = this.formData;
        const gridConfigData = this.gridConfigForm.getRawValue();
        if (gridConfigData) {
            if (!gridConfigData.edit) {
                gridConfigData.editUrl = '';
            }
            if (!gridConfigData.delete) {
                gridConfigData.deleteUrl = '';
            }
            if (!gridConfigData.externalLink) {
                gridConfigData.externalUrl = '';
            }
        }
        if (gridConfigData.gridActionFormArray) {
            gridConfigData.gridActionFormArray.forEach(x => {
                this.iconValues.forEach(y => {
                    if (x.icon === y.value) {
                        x.action = y.key;
                    }
                });
            });
        }
        formDetails.gridconfig = JSON.stringify(gridConfigData);
        if (this.id) {
            formDetails.id = this.id;
        }
        console.log(formDetails);
        console.log(publish);
        if (formDetails.id) {
            this.patchPage(formDetails, publish);
        }
        else {
            this.createPage(formDetails, publish);
        }
    }
    patchPage(formDetails, publish) {
        const createPage = this._localstore.getObj('CREATE PAGE');
        formDetails.published = publish;
        if (createPage) {
            this.formData.id = formDetails.activeVersion.id;
        }
        formDetails.pagename = this.gridConfigForm.get('gridTitle').value;
        this.pageBuilderService.updatePageVersion(this.formData.id, formDetails, createPage).subscribe(() => {
            if (publish) {
                this.router.navigate([`pages/page-design/versions/${formDetails?.pageid || formDetails.activeVersion.pageid}`]);
                this.alert.success(`The Version ${formDetails.version || formDetails.activeVersion.version} is published successfully`);
            }
            else {
                this.alert.success('Page saved successfully');
            }
        });
    }
    cancel() {
        this.pageBuilderAddService.returnToList();
    }
    createPage(formDetails, publish) {
        formDetails.published = publish;
        this.pageBuilderAddService.createPage(formDetails).subscribe(result => {
            if (!this.id) {
                const data = result['data'];
                if (data && Object.keys(data).length) {
                    const id = data.id ? data.id : '';
                    if (id) {
                        this.router.navigate(['../edit', id], { relativeTo: this.route });
                    }
                }
            }
            this.router.navigate(['../../list'], { relativeTo: this.route });
            this.alert.success('Page saved successfully');
        });
    }
    actionButtonEvent() {
        this.actionButtonClicked = true;
        const actionctrl = this.gridConfigForm.controls['gridActionFormArray'];
        actionctrl.push(this.createAction());
    }
    // addQuery() {
    //   const actionctrl = this.gridConfigForm.controls.gridDownloadRangeQueryArray as FormArray;
    //   actionctrl.push(this.createGridDownloadRangeQueryArray());
    // }
    delInput(index) {
        const actionctrl = this.gridConfigForm.controls['gridActionFormArray'];
        actionctrl.removeAt(index);
    }
    // deleteQuery(index) {
    //   const actionctrl = this.gridConfigForm.controls.gridDownloadRangeQueryArray as FormArray;
    //   actionctrl.removeAt(index);
    // }
    // typeChange(value) {
    //   if (value && value === 'Document Report Generation') {
    //     this.documentReport = true;
    //   } else {
    //     this.documentReport = false;
    //   }
    // }
    // onColumnChoosenChange(value, gridConfigFormArray) {
    //   if (value) {
    //     // enable only first 3 cols to be visible
    //     for (let i = 0; i < 3 && i < gridConfigFormArray.controls.length; i++) {
    //       gridConfigFormArray.controls[i].get('visible').patchValue(true);
    //     }
    //   }
    // }
    validationPage() {
        if (!this.basicPageInformation.pagename ||
            !this.basicPageInformation.pagetype ||
            !this.basicPageInformation.description) {
            return false;
        }
        else {
            return true;
        }
    }
    deleteAction(i) {
        const form = this.gridConfigForm.get('gridActionFormArray')['controls'][i];
        if (form.controls.icon.value === 'fa fa-trash') {
            form.controls.type.disable();
            form.controls.link.disable();
            form.controls.isOutsideGrid.disable();
        }
        else {
            form.controls.type.enable();
            form.controls.link.enable();
            form.controls.isOutsideGrid.enable();
        }
    }
    getVirtualColumns() {
        this.gridConfigForm.get('highlightRow').get('tableName').patchValue(this.tableSchemaObj?.tablefields?.primary);
        const actionctrl = this.gridConfigForm.controls['gridConfigFormArray'];
        return actionctrl?.value?.filter(x => x?.concatenate === false);
    }
    virtualColumnsButtonEvent() {
        if (!Array.isArray(this.selectFieldsName) || !this.selectFieldsName.length) {
            this.alert.error('Please select Virtual Column Field');
        }
        else if (!this.businessName || this.businessName.trim().length == 0) {
            this.alert.error('Please provide valid business name');
        }
        else {
            const actionctrl = this.gridConfigForm.controls['gridConfigFormArray'];
            actionctrl.push(this.createVColumn());
            this.selectFieldsName = [];
            this.businessName = '';
            this.businessRules = '';
        }
    }
    viewVirtualColumn() {
        if (this.selectFieldsName && this.selectFieldsName.length > 0) {
            return this.selectFieldsName.join('/{ }/');
        }
    }
    createVColumn() {
        let header;
        if (this.selectFieldsName.length === 1) {
            header = this.selectFieldsName.join('') + '/';
        }
        else {
            header = this.selectFieldsName.join('/{ }/');
        }
        return this.formBuilder.group({
            header: this.businessName,
            columnDef: header,
            link: '',
            routelink: '',
            icon: '',
            icontext: '',
            dateFormat: '',
            datetext: '',
            sort: '',
            filter: '',
            hide: '',
            fixed: '',
            Choosable: '',
            visible: '',
            selected: [],
            mobileView: '',
            tabView: '',
            concatenate: true,
            businessrules: this.generateBusinessRules()
        });
    }
    deleteVColumn(index) {
        const actionctrl = this.gridConfigForm.controls['gridConfigFormArray'];
        actionctrl.removeAt(index);
    }
    generateBusinessRules() {
        const columnName = this.businessName.toLowerCase();
        const cName = columnName.replace(/ /g, '_');
        const columnDef = `alias.${cName}`;
        return {
            colDef: columnDef,
            choices: this.businessRules
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridConfigComponent, deps: [{ token: i0.Injector }, { token: i1.UntypedFormBuilder }, { token: i2.ActivatedRoute }, { token: i0.ChangeDetectorRef }, { token: i2.Router }, { token: AlertService }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: GridConfigComponent, selector: "app-grid-config", ngImport: i0, template: "<div class=\"grid-config\">\r\n  <form [formGroup]=\"gridConfigForm\">\r\n    <p-card styleClass=\"rbac-card w-100 mb-3\">\r\n      <div class=\"strip_head toggleleft page-designer d-flex justify-content-between mb-4\">\r\n        <span class=\"report_head font-weight-bold\">Action</span>\r\n        <button\r\n          class=\"btn btn-primary btn-icon pull-right\"\r\n          fieldKey=\"PAG_DES_GRID_CONFIG_ADD_ACTION\"\r\n          title=\"Add Action\"\r\n          (click)=\"actionButtonEvent()\">\r\n          <em class=\"fa fa-plus\" aria-hidden=\"true\"></em>\r\n        </button>\r\n      </div>\r\n      <div *ngIf=\"actionButtonClicked\">\r\n        <div class=\"\">\r\n          <table aria-describedby=\"gridConfigTable\" class=\"table table-borderless actionadd mb-0\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">Action <span class=\"requiredfield text-danger\">*</span></th>\r\n                <th scope=\"col\">Name</th>\r\n                <th scope=\"col\">Choose Type <span class=\"requiredfield text-danger\">*</span></th>\r\n                <th scope=\"col\">API/Link <span class=\"requiredfield text-danger\">*</span></th>\r\n                <th scope=\"col\">Filter By</th>\r\n                <th scope=\"col\">Filter Column</th>\r\n                <th scope=\"col\">Is Owner</th>\r\n                <th scope=\"col\" class=\"text-center\">Outside Grid</th>\r\n                <th scope=\"col\">&#160;</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody\r\n              formArrayName=\"gridActionFormArray\"\r\n              *ngFor=\"let item of gridConfigForm.get('gridActionFormArray').controls; let i = index\">\r\n              <tr [formGroupName]=\"i\">\r\n                <td>\r\n                  <p-dropdown\r\n                    [options]=\"iconValues\"\r\n                    styleClass=\"w-100\"\r\n                    placeholder=\"Select action\"\r\n                    fieldKey=\"PAG_DES_GRID_CONFIG_ACTION\"\r\n                    (click)=\"deleteAction(i)\"\r\n                    formControlName=\"icon\"\r\n                    [showClear]=\"true\">\r\n                    <ng-template let-item pTemplate=\"selectedItem\">\r\n                      {{ item?.name }}&nbsp;<em class=\"{{ item?.value }}\" aria-hidden=\"true\"></em>\r\n                    </ng-template>\r\n                    <ng-template let-object pTemplate=\"item\">\r\n                      {{ object.name }}&nbsp;<em class=\"{{ object.value }}\" aria-hidden=\"true\"></em>\r\n                    </ng-template>\r\n                  </p-dropdown>\r\n                  <div class=\"p-error block mt-1\" *ngIf=\"item['controls'].icon.touched && item['controls'].icon.invalid\">\r\n                    Action is Required\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    fieldKey=\"PAG_DES_GRID_CONFIG_NAME\"\r\n                    formControlName=\"name\"\r\n                    placeholder=\"Enter Name\"\r\n                    pInputText />\r\n                </td>\r\n                <td>\r\n                  <p-dropdown\r\n                    [options]=\"editType\"\r\n                    styleClass=\"w-100\"\r\n                    placeholder=\"Choose Type\"\r\n                    formControlName=\"type\"\r\n                    optionLabel=\"label\"\r\n                    fieldKey=\"PAG_DES_GRID_CONFIG_CHOOSE_TYPE\"\r\n                    optionValue=\"value\"\r\n                    [showClear]=\"true\">\r\n                  </p-dropdown>\r\n                  <div class=\"p-error block mt-1\" *ngIf=\"item['controls'].type.touched && item['controls'].type.invalid\"\r\n                    >Type is Required</div\r\n                  >\r\n                </td>\r\n                <td *ngIf=\"item.value.type === 'External Link' || item.value.type === 'Ocr Scan'\">\r\n                  <p-dropdown\r\n                    [filter]=\"true\"\r\n                    [options]=\"pagesList\"\r\n                    styleClass=\"w-100\"\r\n                    placeholder=\"Enter API/Link\"\r\n                    formControlName=\"link\"\r\n                    ariaFilterLabel=\"null\"\r\n                    optionLabel=\"pagename\"\r\n                    optionValue=\"id\"\r\n                    [showClear]=\"true\">\r\n                  </p-dropdown\r\n                  ><br />\r\n                  <div class=\"p-error block mt-1\" *ngIf=\"item['controls'].link.touched && item['controls'].link.invalid\"\r\n                    >API/Link is Required</div\r\n                  >\r\n                </td>\r\n                <td *ngIf=\"item.value.type !== 'External Link' && item.value.type !== 'Ocr Scan'\">\r\n                  <input\r\n                    type=\"text\"\r\n                    styleClass=\"w-100\"\r\n                    class=\"form-control\"\r\n                    formControlName=\"link\"\r\n                    placeholder=\"Enter API/Link\"\r\n                    fieldKey=\"PAG_DES_GRID_CONFIG_API_LINK\"\r\n                    pInputText />\r\n                  <div class=\"p-error block mt-1\" *ngIf=\"item['controls'].link.touched && item['controls'].link.invalid\"\r\n                    >API/Link is Required</div\r\n                  >\r\n                </td>\r\n                <td>\r\n                  <p-dropdown\r\n                    placeholder=\"Choose Filter Column\"\r\n                    [options]=\"gridConfig.gridConfigFormArray\"\r\n                    styleClass=\"w-100\"\r\n                    formControlName=\"filterBy\"\r\n                    optionValue=\"columnDef\"\r\n                    optionLabel=\"columnDef\"\r\n                    [showClear]=\"true\">\r\n                  </p-dropdown>\r\n                </td>\r\n                <td>\r\n                  <input\r\n                    type=\"text\"\r\n                    styleClass=\"w-100\"\r\n                    class=\"form-control\"\r\n                    formControlName=\"filterColumn\"\r\n                    placeholder=\"Enter Filter Column\"\r\n                    fieldKey=\"PAG_DES_GRID_CONFIG_API_LINK\"\r\n                    pInputText />\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <label for=\"isOwner{{ i }}\" aria-labelledby=\"isOwner{{ i }}\" class=\"sr-only\"\r\n                    >IS Owner</label\r\n                  >\r\n                  <p-checkbox\r\n                    name=\"isOwner\"\r\n                    inputId=\"isOwner{{ i }}\"\r\n                    formControlName=\"isOwner\"\r\n                    fieldKey=\"PAG_DES_GRID_CONFIG_OUTSIDE_GRID\"\r\n                    [binary]=\"true\"></p-checkbox>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <label for=\"isOutsideGrid{{ i }}\" aria-labelledby=\"isOutsideGrid{{ i }}\" class=\"sr-only\"\r\n                    >Outside Grid</label\r\n                  >\r\n                  <p-checkbox\r\n                    name=\"outsidegrid\"\r\n                    inputId=\"isOutsideGrid{{ i }}\"\r\n                    formControlName=\"isOutsideGrid\"\r\n                    fieldKey=\"PAG_DES_GRID_CONFIG_OUTSIDE_GRID\"\r\n                    [binary]=\"true\"></p-checkbox>\r\n                </td>\r\n                <td class=\"text-left\">\r\n                  <a href=\"javascript:void(0)\" class=\"text-danger\" title=\"Delete\">\r\n                    <em class=\"pi pi-trash\" (click)=\"delInput(i)\" *showField=\"'PAG_DES_GRID_CONFIG_DELETE'\"></em>\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </p-card>\r\n\r\n    <p-card styleClass=\"rbac-card w-100 mb-3\">\r\n      <div class=\"strip_head toggleleft page-designer d-flex justify-content-between mb-4\">\r\n        <span class=\"report_head font-weight-bold\">Highlight Row</span>\r\n      </div>\r\n      <div class=\"\">\r\n        <table aria-describedby=\"gridConfigTable\" class=\"table table-borderless actionadd mb-0\">\r\n          <thead>\r\n            <tr>\r\n              <th scope=\"col\">Table</th>\r\n              <th scope=\"col\">Column</th>\r\n              <th scope=\"col\">Value</th>\r\n              <th scope=\"col\">Color</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr formGroupName=\"highlightRow\">\r\n              <td>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"tableName\"\r\n                  placeholder=\"Enter Name\"\r\n                  disabled\r\n                  pInputText />\r\n              </td>\r\n              <td>\r\n                <p-dropdown\r\n                  [options]=\"getVirtualColumns()\"\r\n                  styleClass=\"w-100\"\r\n                  placeholder=\"Choose Type\"\r\n                  formControlName=\"columnName\"\r\n                  optionLabel=\"columnDef\"\r\n                  optionValue=\"columnDef\"\r\n                  [showClear]=\"true\">\r\n                </p-dropdown>\r\n              </td>\r\n              <td>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"columnValue\"\r\n                  placeholder=\"Enter Name\"\r\n                  pInputText />\r\n              </td>\r\n              <td>\r\n                <input type=\"color\" class=\"form-control\" formControlName=\"color\" value=\"#fff\" pInputText />\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </p-card>\r\n\r\n    <p-card styleClass=\"rbac-card w-100 mb-3\">\r\n      <div class=\"p-fluid p-formgrid row\">\r\n        <div class=\"p-field col-lg-3 col-sm-3 col-md-6 col-12\">\r\n          <label for=\"gridTitle\" class=\"referral-form-labels\">Grid Title\r\n            <span class=\"requiredfield text-danger\">*</span>\r\n          </label>\r\n          <input\r\n            id=\"gridTitle\"\r\n            type=\"text\"\r\n            fieldKey=\"PAG_DES_GRID_CONFIG_ENTER_GRID_TITLE\"\r\n            formControlName=\"gridTitle\"\r\n            placeholder=\"Enter Grid Title\"\r\n            pInputText />\r\n            <div *ngIf=\"formValidate['gridTitle'].errors\">\r\n              <div *ngIf=\"formValidate['gridTitle'].invalid && formValidate['gridTitle'].touched\" class=\"p-error block mt-1\">Grid Title is required\r\n              </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p-field col-lg-3 col-sm-3 col-md-6 col-12\">\r\n          <label class=\"referral-form-labels\">Sort By Column </label>\r\n          <ng-container *ngIf=\"gridConfig && gridConfig.gridConfigFormArray\">\r\n            <p-dropdown\r\n              [options]=\"gridConfig.gridConfigFormArray\"\r\n              placeholder=\"Select Sort By Column\"\r\n              formControlName=\"defaultSortColumn\"\r\n              optionLabel=\"header\"\r\n              fieldKey=\"PAG_DES_GRID_CONFIG_ENTER_SORT_BY_COLOUMN\"\r\n              optionValue=\"columnDef\"\r\n              [showClear]=\"true\">\r\n            </p-dropdown>\r\n          </ng-container>\r\n        </div>\r\n        <div\r\n          class=\"p-field col-lg-3 col-sm-3 col-md-6 col-12\"\r\n          [hidden]=\"!gridConfigForm.get('defaultSortColumn').value\">\r\n          <label class=\"referral-form-labels\">Sort By Order</label>\r\n          <p-dropdown\r\n            [options]=\"sortTypeValues\"\r\n            placeholder=\"Select Sort By Order\"\r\n            formControlName=\"defaultSortType\"\r\n            optionLabel=\"label\"\r\n            optionValue=\"value\"\r\n            [showClear]=\"true\">\r\n          </p-dropdown>\r\n        </div>\r\n      </div>\r\n      <div class=\"p-fluid p-formgrid row\">\r\n        <div class=\"p-field col-lg-3 col-sm-3 col-md-4 col-4\">\r\n          <label class=\"referral-form-labels\">Virtual Column Field</label>\r\n          <ng-container *ngIf=\"gridConfig && gridConfig.gridConfigFormArray\">\r\n            <p-multiSelect\r\n              [options]=\"getVirtualColumns()\"\r\n              styleClass=\"filterFieldsOptions w-100\"\r\n              [maxSelectedLabels]=\"1\"\r\n              selectedItemsLabel=\"{0} items selected\"\r\n              defaultLabel=\"Select Fields\"\r\n              [(ngModel)]=\"selectFieldsName\"\r\n              [ngModelOptions]=\"{ standalone: true }\"\r\n              optionLabel=\"columnDef\"\r\n              optionValue=\"columnDef\"\r\n              id=\"filterFieldsOptions\">\r\n            </p-multiSelect>\r\n          </ng-container>\r\n        </div>\r\n        <div class=\"p-field col-lg-3 col-sm-3 col-md-4 col-4\">\r\n          <label for=\"businessName\" class=\"referral-form-labels\">Business Name</label>\r\n          <div class=\"input-group mb-3\">\r\n            <input\r\n              id=\"businessName\"\r\n              type=\"text\"\r\n              placeholder=\"Enter Business Name\"\r\n              [(ngModel)]=\"businessName\"\r\n              [ngModelOptions]=\"{ standalone: true }\"\r\n              pInputText \r\n              [disabled]=\"!selectFieldsName || selectFieldsName.length == 0\"/>\r\n          </div>\r\n        </div>\r\n        <div class=\"p-field col-lg-6 col-sm-6 col-md-4 col-4\">\r\n          <label for=\"businessRules\" class=\"referral-form-labels\">Business Rules</label>\r\n          <div class=\"input-group mb-3\">\r\n            <input\r\n              id=\"businessRules\"\r\n              type=\"text\"\r\n              placeholder=\"Enter Business Rules\"\r\n              [(ngModel)]=\"businessRules\"\r\n              [ngModelOptions]=\"{ standalone: true }\"\r\n              pInputText\r\n              style=\"width: 87%\" \r\n              [disabled]=\"!selectFieldsName || selectFieldsName.length == 0\"/>\r\n            <div class=\"input-group-append pl-2\">\r\n              <button class=\"btn btn-primary btn-icon\" title=\"Add Virtual Column\" (click)=\"virtualColumnsButtonEvent()\">\r\n                <em class=\"fa fa-plus\" aria-hidden=\"true\"></em>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"p-fluid p-formgrid row\" *ngIf=\"selectFieldsName?.length > 0\">\r\n        <div class=\"p-field col-lg-10 col-sm-10 col-md-10 col-10\">\r\n          <label class=\"referral-form-labels\">View Virtual Column Field </label>\r\n          <ng-container>\r\n            <div>\r\n              <em class=\"code-review p-2\"> {{ viewVirtualColumn() }} </em>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n      <table aria-describedby=\"configTable\" class=\"table table-bordered configTable\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\" class=\"py-2\">Field Name</th>\r\n            <th scope=\"col\" class=\"py-2\">Business Name</th>\r\n            <th scope=\"col\" class=\"py-2\">Link</th>\r\n            <th scope=\"col\" class=\"py-2\">Grid Options</th>\r\n            <th scope=\"col\" class=\"py-2\">Actions</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <ng-container\r\n            *ngIf=\"gridConfig && gridConfig.gridConfigFormArray && gridConfig.gridConfigFormArray.length\"\r\n            formArrayName=\"gridConfigFormArray\">\r\n            <tr\r\n              *ngFor=\"let item of gridConfigForm.get('gridConfigFormArray').controls; let i = index\"\r\n              [formGroupName]=\"i\">\r\n              <td>\r\n                <input\r\n                  id=\"fieldname1\"\r\n                  class=\"form-control w-100\"\r\n                  type=\"text\"\r\n                  [attr.disabled]=\"item.value.concatenate ? null : false\"\r\n                  placeholder=\"Enter Field Name\"\r\n                  formControlName=\"columnDef\"\r\n                  value=\"{{ item.value.columnDef }}\"\r\n                  pInputText />\r\n              </td>\r\n              <td>\r\n                <input\r\n                  id=\"businessname1\"\r\n                  class=\"w-100\"\r\n                  type=\"text\"\r\n                  fieldKey=\"PAG_DES_GRID_CONFIG_ENTER_BUSINESS_NAME\"\r\n                  placeholder=\"Enter Business Name\"\r\n                  value=\"{{ item.value.header ? item.value.header : item.value.columnDef }}\"\r\n                  formControlName=\"header\"\r\n                  pInputText />\r\n              </td>\r\n              <td>\r\n                <p-dropdown\r\n                  [filter]=\"true\"\r\n                  [options]=\"pagesList\"\r\n                  styleClass=\"w-100\"\r\n                  placeholder=\"Enter API/Link\"\r\n                  formControlName=\"link\"\r\n                  fieldKey=\"PAG_DES_GRID_CONFIG_ENTER_LINK\"\r\n                  optionValue=\"id\"\r\n                  optionLabel=\"pagename\"\r\n                  [showClear]=\"true\">\r\n                </p-dropdown>\r\n              </td>\r\n              <td>\r\n                <label class=\"sr-only\" for=\"gridoptions{{ i }}\" aria-labelledby=\"gridoptions{{ i }}\"></label>\r\n                <p-multiSelect\r\n                  [options]=\"gridOptions\"\r\n                  [binary]=\"true\"\r\n                  styleClass=\"w-100\"\r\n                  defaultLabel=\"Select Fields\"\r\n                  (onChange)=\"changeGridOptions($event.value, i, gridConfigForm.get('gridConfigFormArray'))\"\r\n                  optionLabel=\"label\"\r\n                  optionValue=\"value\"\r\n                  fieldKey=\"PAG_DES_GRID_CONFIG_ENTER_GRID_OPTIONS\"\r\n                  id=\"gridoptions{{ i }}\"\r\n                  formControlName=\"selected\">\r\n                </p-multiSelect>\r\n              </td>\r\n              <td class=\"text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"text-danger\" title=\"Delete\" *ngIf=\"item.value.concatenate\">\r\n                  <em class=\"pi pi-trash\" (click)=\"deleteVColumn(i)\"></em>\r\n                </a>\r\n              </td>\r\n            </tr>\r\n          </ng-container>\r\n        </tbody>\r\n      </table>\r\n    </p-card>\r\n  </form>\r\n\r\n  <div class=\"mt-2 formicon\">\r\n    <button\r\n      class=\"pull-right mb-2 btn btn-primary btncommon\"\r\n      *showField=\"'PAG_DES_GRID_CONFIG_SAVE'\"\r\n      [disabled]=\"!gridConfigCount || gridConfigForm.invalid\"\r\n      (click)=\"saveGridConfig(false)\">\r\n      Save\r\n    </button>\r\n    <button\r\n    class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\"\r\n    *showField='\"PAG_DES_DES_PAG_PREVIOUS\"'\r\n    (click)=\"goToGridFieldPage()\">\r\n    Previous\r\n  </button>\r\n    <button\r\n      *showField=\"'PAG_DES_GRID_CONFIG_PUBLISH'\"\r\n      class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\"\r\n      [disabled]=\"!gridConfigCount || gridConfigForm.invalid\"\r\n      (click)=\"saveGridConfig(true)\">\r\n      Publish\r\n    </button>\r\n    <button *showField=\"'PAG_DES_GRID_CONFIG_CANCEL'\" class=\"pull-right mb-2 mr-2 btn btn-cancel\" (click)=\"cancel()\">\r\n      Cancel\r\n    </button>\r\n  </div>\r\n</div>\r\n", styles: [":root{--background-color: #f8f8f8;--navigation: #fff;--primary: #0D3178;--checkbox-border: #D6D5D5;--text-dark: #000;--label-text: #0D3178;--hover-text: #fff;--bg-light: #fff;--forms: #fff;--nav-text: #696969;--light-gray: #696969;--material-icons: #0D3178;--highlight-list: #e3f2fd;--table-header: #f9f9f9;--table-odd: #f7f7f7;--table-border: #ddd;--table-hover: #dbf6ff;--table-odd-color: #f2fcff;--btn: #0D3178;--menu-panel: #032361;--menu-level2: #28447E;--border-trans: transparent;--btn-hover: #1258A7;--btn-dark: #0D3178;--dropdown-list: #fff;--btncancel: #0D3178;--primary-light: #1258A7;--primary-dark: #0D3178;--light-d-light: #fff;--ldl-text: #fff;--light-d-accent: #fff;--header-bg: #f7f7f7;--secondary-color: #0D3178;--menu-link: #1258A7;--menu-highlight: #0084d1;--sumbmenu-selected: #0084D1;--profile-bg: #f3f9f9;--disabled: #7A8EB5;--accordion-header: #F5F5F5;--input-label: #1F1F1F;--input-field: #4C4C4C;--ghost: #A2A2A2;--table-label: #f1f1f1;--error-msg: #DC0404;--menu-hover: #1258A7;--var-icon-font: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;--rocket-icon: \"/assets/images/rocket-ship.svg\";--base-font-size: 16px;--font-11: 11px;--font-12: 12px;--font-13: 13px;--font-14: 14px;--font-15: 15px;--font-16: 16px;--font-17: 17px;--font-18: 18px;--font-19: 19px;--font-20: 20px;--font-21: 21px;--font-24: 24px;--font-26: 26px}.grid-config .p-card-content{padding:0}.table.actionadd thead{background-color:var(--background-color)}.table.actionadd thead tr th{color:var(--table-label);padding:10px 8px}.table.actionadd tbody tr td{padding-left:8px;padding-right:8px}.table thead{background-color:var(--background-color)}.code-review{background-color:var(--background-color);color:var(--text-dark)}.configTable tbody tr td{vertical-align:middle}.text-danger{color:#d62f3f!important}\n"], dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i1.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { kind: "directive", type: i1.FormArrayName, selector: "[formArrayName]", inputs: ["formArrayName"] }, { kind: "directive", type: i5.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "directive", type: i7.InputText, selector: "[pInputText]" }, { kind: "component", type: i8$2.Checkbox, selector: "p-checkbox", inputs: ["value", "name", "disabled", "binary", "label", "ariaLabelledBy", "ariaLabel", "tabindex", "inputId", "style", "styleClass", "labelStyleClass", "formControl", "checkboxIcon", "readonly", "required", "trueValue", "falseValue"], outputs: ["onChange"] }, { kind: "component", type: i9.Dropdown, selector: "p-dropdown", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }, { kind: "component", type: i10.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { kind: "component", type: i11.MultiSelect, selector: "p-multiSelect", inputs: ["id", "ariaLabel", "style", "styleClass", "panelStyle", "panelStyleClass", "inputId", "disabled", "readonly", "group", "filter", "filterPlaceHolder", "filterLocale", "overlayVisible", "tabindex", "appendTo", "dataKey", "name", "ariaLabelledBy", "displaySelectedLabel", "maxSelectedLabels", "selectionLimit", "selectedItemsLabel", "showToggleAll", "emptyFilterMessage", "emptyMessage", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "showHeader", "filterBy", "scrollHeight", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "filterMatchMode", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "display", "autocomplete", "showClear", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "defaultLabel", "placeholder", "options", "filterValue", "itemSize", "selectAll", "focusOnHover", "filterFields", "selectOnFocus", "autoOptionFocus"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onClear", "onPanelShow", "onPanelHide", "onLazyLoad", "onRemove", "onSelectAllChange"] }, { kind: "directive", type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }, { kind: "directive", type: ShowFieldDirective, selector: "[showField]", inputs: ["showField"] }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridConfigComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-grid-config', encapsulation: ViewEncapsulation.None, template: "<div class=\"grid-config\">\r\n  <form [formGroup]=\"gridConfigForm\">\r\n    <p-card styleClass=\"rbac-card w-100 mb-3\">\r\n      <div class=\"strip_head toggleleft page-designer d-flex justify-content-between mb-4\">\r\n        <span class=\"report_head font-weight-bold\">Action</span>\r\n        <button\r\n          class=\"btn btn-primary btn-icon pull-right\"\r\n          fieldKey=\"PAG_DES_GRID_CONFIG_ADD_ACTION\"\r\n          title=\"Add Action\"\r\n          (click)=\"actionButtonEvent()\">\r\n          <em class=\"fa fa-plus\" aria-hidden=\"true\"></em>\r\n        </button>\r\n      </div>\r\n      <div *ngIf=\"actionButtonClicked\">\r\n        <div class=\"\">\r\n          <table aria-describedby=\"gridConfigTable\" class=\"table table-borderless actionadd mb-0\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">Action <span class=\"requiredfield text-danger\">*</span></th>\r\n                <th scope=\"col\">Name</th>\r\n                <th scope=\"col\">Choose Type <span class=\"requiredfield text-danger\">*</span></th>\r\n                <th scope=\"col\">API/Link <span class=\"requiredfield text-danger\">*</span></th>\r\n                <th scope=\"col\">Filter By</th>\r\n                <th scope=\"col\">Filter Column</th>\r\n                <th scope=\"col\">Is Owner</th>\r\n                <th scope=\"col\" class=\"text-center\">Outside Grid</th>\r\n                <th scope=\"col\">&#160;</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody\r\n              formArrayName=\"gridActionFormArray\"\r\n              *ngFor=\"let item of gridConfigForm.get('gridActionFormArray').controls; let i = index\">\r\n              <tr [formGroupName]=\"i\">\r\n                <td>\r\n                  <p-dropdown\r\n                    [options]=\"iconValues\"\r\n                    styleClass=\"w-100\"\r\n                    placeholder=\"Select action\"\r\n                    fieldKey=\"PAG_DES_GRID_CONFIG_ACTION\"\r\n                    (click)=\"deleteAction(i)\"\r\n                    formControlName=\"icon\"\r\n                    [showClear]=\"true\">\r\n                    <ng-template let-item pTemplate=\"selectedItem\">\r\n                      {{ item?.name }}&nbsp;<em class=\"{{ item?.value }}\" aria-hidden=\"true\"></em>\r\n                    </ng-template>\r\n                    <ng-template let-object pTemplate=\"item\">\r\n                      {{ object.name }}&nbsp;<em class=\"{{ object.value }}\" aria-hidden=\"true\"></em>\r\n                    </ng-template>\r\n                  </p-dropdown>\r\n                  <div class=\"p-error block mt-1\" *ngIf=\"item['controls'].icon.touched && item['controls'].icon.invalid\">\r\n                    Action is Required\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    fieldKey=\"PAG_DES_GRID_CONFIG_NAME\"\r\n                    formControlName=\"name\"\r\n                    placeholder=\"Enter Name\"\r\n                    pInputText />\r\n                </td>\r\n                <td>\r\n                  <p-dropdown\r\n                    [options]=\"editType\"\r\n                    styleClass=\"w-100\"\r\n                    placeholder=\"Choose Type\"\r\n                    formControlName=\"type\"\r\n                    optionLabel=\"label\"\r\n                    fieldKey=\"PAG_DES_GRID_CONFIG_CHOOSE_TYPE\"\r\n                    optionValue=\"value\"\r\n                    [showClear]=\"true\">\r\n                  </p-dropdown>\r\n                  <div class=\"p-error block mt-1\" *ngIf=\"item['controls'].type.touched && item['controls'].type.invalid\"\r\n                    >Type is Required</div\r\n                  >\r\n                </td>\r\n                <td *ngIf=\"item.value.type === 'External Link' || item.value.type === 'Ocr Scan'\">\r\n                  <p-dropdown\r\n                    [filter]=\"true\"\r\n                    [options]=\"pagesList\"\r\n                    styleClass=\"w-100\"\r\n                    placeholder=\"Enter API/Link\"\r\n                    formControlName=\"link\"\r\n                    ariaFilterLabel=\"null\"\r\n                    optionLabel=\"pagename\"\r\n                    optionValue=\"id\"\r\n                    [showClear]=\"true\">\r\n                  </p-dropdown\r\n                  ><br />\r\n                  <div class=\"p-error block mt-1\" *ngIf=\"item['controls'].link.touched && item['controls'].link.invalid\"\r\n                    >API/Link is Required</div\r\n                  >\r\n                </td>\r\n                <td *ngIf=\"item.value.type !== 'External Link' && item.value.type !== 'Ocr Scan'\">\r\n                  <input\r\n                    type=\"text\"\r\n                    styleClass=\"w-100\"\r\n                    class=\"form-control\"\r\n                    formControlName=\"link\"\r\n                    placeholder=\"Enter API/Link\"\r\n                    fieldKey=\"PAG_DES_GRID_CONFIG_API_LINK\"\r\n                    pInputText />\r\n                  <div class=\"p-error block mt-1\" *ngIf=\"item['controls'].link.touched && item['controls'].link.invalid\"\r\n                    >API/Link is Required</div\r\n                  >\r\n                </td>\r\n                <td>\r\n                  <p-dropdown\r\n                    placeholder=\"Choose Filter Column\"\r\n                    [options]=\"gridConfig.gridConfigFormArray\"\r\n                    styleClass=\"w-100\"\r\n                    formControlName=\"filterBy\"\r\n                    optionValue=\"columnDef\"\r\n                    optionLabel=\"columnDef\"\r\n                    [showClear]=\"true\">\r\n                  </p-dropdown>\r\n                </td>\r\n                <td>\r\n                  <input\r\n                    type=\"text\"\r\n                    styleClass=\"w-100\"\r\n                    class=\"form-control\"\r\n                    formControlName=\"filterColumn\"\r\n                    placeholder=\"Enter Filter Column\"\r\n                    fieldKey=\"PAG_DES_GRID_CONFIG_API_LINK\"\r\n                    pInputText />\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <label for=\"isOwner{{ i }}\" aria-labelledby=\"isOwner{{ i }}\" class=\"sr-only\"\r\n                    >IS Owner</label\r\n                  >\r\n                  <p-checkbox\r\n                    name=\"isOwner\"\r\n                    inputId=\"isOwner{{ i }}\"\r\n                    formControlName=\"isOwner\"\r\n                    fieldKey=\"PAG_DES_GRID_CONFIG_OUTSIDE_GRID\"\r\n                    [binary]=\"true\"></p-checkbox>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <label for=\"isOutsideGrid{{ i }}\" aria-labelledby=\"isOutsideGrid{{ i }}\" class=\"sr-only\"\r\n                    >Outside Grid</label\r\n                  >\r\n                  <p-checkbox\r\n                    name=\"outsidegrid\"\r\n                    inputId=\"isOutsideGrid{{ i }}\"\r\n                    formControlName=\"isOutsideGrid\"\r\n                    fieldKey=\"PAG_DES_GRID_CONFIG_OUTSIDE_GRID\"\r\n                    [binary]=\"true\"></p-checkbox>\r\n                </td>\r\n                <td class=\"text-left\">\r\n                  <a href=\"javascript:void(0)\" class=\"text-danger\" title=\"Delete\">\r\n                    <em class=\"pi pi-trash\" (click)=\"delInput(i)\" *showField=\"'PAG_DES_GRID_CONFIG_DELETE'\"></em>\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </p-card>\r\n\r\n    <p-card styleClass=\"rbac-card w-100 mb-3\">\r\n      <div class=\"strip_head toggleleft page-designer d-flex justify-content-between mb-4\">\r\n        <span class=\"report_head font-weight-bold\">Highlight Row</span>\r\n      </div>\r\n      <div class=\"\">\r\n        <table aria-describedby=\"gridConfigTable\" class=\"table table-borderless actionadd mb-0\">\r\n          <thead>\r\n            <tr>\r\n              <th scope=\"col\">Table</th>\r\n              <th scope=\"col\">Column</th>\r\n              <th scope=\"col\">Value</th>\r\n              <th scope=\"col\">Color</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr formGroupName=\"highlightRow\">\r\n              <td>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"tableName\"\r\n                  placeholder=\"Enter Name\"\r\n                  disabled\r\n                  pInputText />\r\n              </td>\r\n              <td>\r\n                <p-dropdown\r\n                  [options]=\"getVirtualColumns()\"\r\n                  styleClass=\"w-100\"\r\n                  placeholder=\"Choose Type\"\r\n                  formControlName=\"columnName\"\r\n                  optionLabel=\"columnDef\"\r\n                  optionValue=\"columnDef\"\r\n                  [showClear]=\"true\">\r\n                </p-dropdown>\r\n              </td>\r\n              <td>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"columnValue\"\r\n                  placeholder=\"Enter Name\"\r\n                  pInputText />\r\n              </td>\r\n              <td>\r\n                <input type=\"color\" class=\"form-control\" formControlName=\"color\" value=\"#fff\" pInputText />\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </p-card>\r\n\r\n    <p-card styleClass=\"rbac-card w-100 mb-3\">\r\n      <div class=\"p-fluid p-formgrid row\">\r\n        <div class=\"p-field col-lg-3 col-sm-3 col-md-6 col-12\">\r\n          <label for=\"gridTitle\" class=\"referral-form-labels\">Grid Title\r\n            <span class=\"requiredfield text-danger\">*</span>\r\n          </label>\r\n          <input\r\n            id=\"gridTitle\"\r\n            type=\"text\"\r\n            fieldKey=\"PAG_DES_GRID_CONFIG_ENTER_GRID_TITLE\"\r\n            formControlName=\"gridTitle\"\r\n            placeholder=\"Enter Grid Title\"\r\n            pInputText />\r\n            <div *ngIf=\"formValidate['gridTitle'].errors\">\r\n              <div *ngIf=\"formValidate['gridTitle'].invalid && formValidate['gridTitle'].touched\" class=\"p-error block mt-1\">Grid Title is required\r\n              </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p-field col-lg-3 col-sm-3 col-md-6 col-12\">\r\n          <label class=\"referral-form-labels\">Sort By Column </label>\r\n          <ng-container *ngIf=\"gridConfig && gridConfig.gridConfigFormArray\">\r\n            <p-dropdown\r\n              [options]=\"gridConfig.gridConfigFormArray\"\r\n              placeholder=\"Select Sort By Column\"\r\n              formControlName=\"defaultSortColumn\"\r\n              optionLabel=\"header\"\r\n              fieldKey=\"PAG_DES_GRID_CONFIG_ENTER_SORT_BY_COLOUMN\"\r\n              optionValue=\"columnDef\"\r\n              [showClear]=\"true\">\r\n            </p-dropdown>\r\n          </ng-container>\r\n        </div>\r\n        <div\r\n          class=\"p-field col-lg-3 col-sm-3 col-md-6 col-12\"\r\n          [hidden]=\"!gridConfigForm.get('defaultSortColumn').value\">\r\n          <label class=\"referral-form-labels\">Sort By Order</label>\r\n          <p-dropdown\r\n            [options]=\"sortTypeValues\"\r\n            placeholder=\"Select Sort By Order\"\r\n            formControlName=\"defaultSortType\"\r\n            optionLabel=\"label\"\r\n            optionValue=\"value\"\r\n            [showClear]=\"true\">\r\n          </p-dropdown>\r\n        </div>\r\n      </div>\r\n      <div class=\"p-fluid p-formgrid row\">\r\n        <div class=\"p-field col-lg-3 col-sm-3 col-md-4 col-4\">\r\n          <label class=\"referral-form-labels\">Virtual Column Field</label>\r\n          <ng-container *ngIf=\"gridConfig && gridConfig.gridConfigFormArray\">\r\n            <p-multiSelect\r\n              [options]=\"getVirtualColumns()\"\r\n              styleClass=\"filterFieldsOptions w-100\"\r\n              [maxSelectedLabels]=\"1\"\r\n              selectedItemsLabel=\"{0} items selected\"\r\n              defaultLabel=\"Select Fields\"\r\n              [(ngModel)]=\"selectFieldsName\"\r\n              [ngModelOptions]=\"{ standalone: true }\"\r\n              optionLabel=\"columnDef\"\r\n              optionValue=\"columnDef\"\r\n              id=\"filterFieldsOptions\">\r\n            </p-multiSelect>\r\n          </ng-container>\r\n        </div>\r\n        <div class=\"p-field col-lg-3 col-sm-3 col-md-4 col-4\">\r\n          <label for=\"businessName\" class=\"referral-form-labels\">Business Name</label>\r\n          <div class=\"input-group mb-3\">\r\n            <input\r\n              id=\"businessName\"\r\n              type=\"text\"\r\n              placeholder=\"Enter Business Name\"\r\n              [(ngModel)]=\"businessName\"\r\n              [ngModelOptions]=\"{ standalone: true }\"\r\n              pInputText \r\n              [disabled]=\"!selectFieldsName || selectFieldsName.length == 0\"/>\r\n          </div>\r\n        </div>\r\n        <div class=\"p-field col-lg-6 col-sm-6 col-md-4 col-4\">\r\n          <label for=\"businessRules\" class=\"referral-form-labels\">Business Rules</label>\r\n          <div class=\"input-group mb-3\">\r\n            <input\r\n              id=\"businessRules\"\r\n              type=\"text\"\r\n              placeholder=\"Enter Business Rules\"\r\n              [(ngModel)]=\"businessRules\"\r\n              [ngModelOptions]=\"{ standalone: true }\"\r\n              pInputText\r\n              style=\"width: 87%\" \r\n              [disabled]=\"!selectFieldsName || selectFieldsName.length == 0\"/>\r\n            <div class=\"input-group-append pl-2\">\r\n              <button class=\"btn btn-primary btn-icon\" title=\"Add Virtual Column\" (click)=\"virtualColumnsButtonEvent()\">\r\n                <em class=\"fa fa-plus\" aria-hidden=\"true\"></em>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"p-fluid p-formgrid row\" *ngIf=\"selectFieldsName?.length > 0\">\r\n        <div class=\"p-field col-lg-10 col-sm-10 col-md-10 col-10\">\r\n          <label class=\"referral-form-labels\">View Virtual Column Field </label>\r\n          <ng-container>\r\n            <div>\r\n              <em class=\"code-review p-2\"> {{ viewVirtualColumn() }} </em>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n      <table aria-describedby=\"configTable\" class=\"table table-bordered configTable\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\" class=\"py-2\">Field Name</th>\r\n            <th scope=\"col\" class=\"py-2\">Business Name</th>\r\n            <th scope=\"col\" class=\"py-2\">Link</th>\r\n            <th scope=\"col\" class=\"py-2\">Grid Options</th>\r\n            <th scope=\"col\" class=\"py-2\">Actions</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <ng-container\r\n            *ngIf=\"gridConfig && gridConfig.gridConfigFormArray && gridConfig.gridConfigFormArray.length\"\r\n            formArrayName=\"gridConfigFormArray\">\r\n            <tr\r\n              *ngFor=\"let item of gridConfigForm.get('gridConfigFormArray').controls; let i = index\"\r\n              [formGroupName]=\"i\">\r\n              <td>\r\n                <input\r\n                  id=\"fieldname1\"\r\n                  class=\"form-control w-100\"\r\n                  type=\"text\"\r\n                  [attr.disabled]=\"item.value.concatenate ? null : false\"\r\n                  placeholder=\"Enter Field Name\"\r\n                  formControlName=\"columnDef\"\r\n                  value=\"{{ item.value.columnDef }}\"\r\n                  pInputText />\r\n              </td>\r\n              <td>\r\n                <input\r\n                  id=\"businessname1\"\r\n                  class=\"w-100\"\r\n                  type=\"text\"\r\n                  fieldKey=\"PAG_DES_GRID_CONFIG_ENTER_BUSINESS_NAME\"\r\n                  placeholder=\"Enter Business Name\"\r\n                  value=\"{{ item.value.header ? item.value.header : item.value.columnDef }}\"\r\n                  formControlName=\"header\"\r\n                  pInputText />\r\n              </td>\r\n              <td>\r\n                <p-dropdown\r\n                  [filter]=\"true\"\r\n                  [options]=\"pagesList\"\r\n                  styleClass=\"w-100\"\r\n                  placeholder=\"Enter API/Link\"\r\n                  formControlName=\"link\"\r\n                  fieldKey=\"PAG_DES_GRID_CONFIG_ENTER_LINK\"\r\n                  optionValue=\"id\"\r\n                  optionLabel=\"pagename\"\r\n                  [showClear]=\"true\">\r\n                </p-dropdown>\r\n              </td>\r\n              <td>\r\n                <label class=\"sr-only\" for=\"gridoptions{{ i }}\" aria-labelledby=\"gridoptions{{ i }}\"></label>\r\n                <p-multiSelect\r\n                  [options]=\"gridOptions\"\r\n                  [binary]=\"true\"\r\n                  styleClass=\"w-100\"\r\n                  defaultLabel=\"Select Fields\"\r\n                  (onChange)=\"changeGridOptions($event.value, i, gridConfigForm.get('gridConfigFormArray'))\"\r\n                  optionLabel=\"label\"\r\n                  optionValue=\"value\"\r\n                  fieldKey=\"PAG_DES_GRID_CONFIG_ENTER_GRID_OPTIONS\"\r\n                  id=\"gridoptions{{ i }}\"\r\n                  formControlName=\"selected\">\r\n                </p-multiSelect>\r\n              </td>\r\n              <td class=\"text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"text-danger\" title=\"Delete\" *ngIf=\"item.value.concatenate\">\r\n                  <em class=\"pi pi-trash\" (click)=\"deleteVColumn(i)\"></em>\r\n                </a>\r\n              </td>\r\n            </tr>\r\n          </ng-container>\r\n        </tbody>\r\n      </table>\r\n    </p-card>\r\n  </form>\r\n\r\n  <div class=\"mt-2 formicon\">\r\n    <button\r\n      class=\"pull-right mb-2 btn btn-primary btncommon\"\r\n      *showField=\"'PAG_DES_GRID_CONFIG_SAVE'\"\r\n      [disabled]=\"!gridConfigCount || gridConfigForm.invalid\"\r\n      (click)=\"saveGridConfig(false)\">\r\n      Save\r\n    </button>\r\n    <button\r\n    class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\"\r\n    *showField='\"PAG_DES_DES_PAG_PREVIOUS\"'\r\n    (click)=\"goToGridFieldPage()\">\r\n    Previous\r\n  </button>\r\n    <button\r\n      *showField=\"'PAG_DES_GRID_CONFIG_PUBLISH'\"\r\n      class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\"\r\n      [disabled]=\"!gridConfigCount || gridConfigForm.invalid\"\r\n      (click)=\"saveGridConfig(true)\">\r\n      Publish\r\n    </button>\r\n    <button *showField=\"'PAG_DES_GRID_CONFIG_CANCEL'\" class=\"pull-right mb-2 mr-2 btn btn-cancel\" (click)=\"cancel()\">\r\n      Cancel\r\n    </button>\r\n  </div>\r\n</div>\r\n", styles: [":root{--background-color: #f8f8f8;--navigation: #fff;--primary: #0D3178;--checkbox-border: #D6D5D5;--text-dark: #000;--label-text: #0D3178;--hover-text: #fff;--bg-light: #fff;--forms: #fff;--nav-text: #696969;--light-gray: #696969;--material-icons: #0D3178;--highlight-list: #e3f2fd;--table-header: #f9f9f9;--table-odd: #f7f7f7;--table-border: #ddd;--table-hover: #dbf6ff;--table-odd-color: #f2fcff;--btn: #0D3178;--menu-panel: #032361;--menu-level2: #28447E;--border-trans: transparent;--btn-hover: #1258A7;--btn-dark: #0D3178;--dropdown-list: #fff;--btncancel: #0D3178;--primary-light: #1258A7;--primary-dark: #0D3178;--light-d-light: #fff;--ldl-text: #fff;--light-d-accent: #fff;--header-bg: #f7f7f7;--secondary-color: #0D3178;--menu-link: #1258A7;--menu-highlight: #0084d1;--sumbmenu-selected: #0084D1;--profile-bg: #f3f9f9;--disabled: #7A8EB5;--accordion-header: #F5F5F5;--input-label: #1F1F1F;--input-field: #4C4C4C;--ghost: #A2A2A2;--table-label: #f1f1f1;--error-msg: #DC0404;--menu-hover: #1258A7;--var-icon-font: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;--rocket-icon: \"/assets/images/rocket-ship.svg\";--base-font-size: 16px;--font-11: 11px;--font-12: 12px;--font-13: 13px;--font-14: 14px;--font-15: 15px;--font-16: 16px;--font-17: 17px;--font-18: 18px;--font-19: 19px;--font-20: 20px;--font-21: 21px;--font-24: 24px;--font-26: 26px}.grid-config .p-card-content{padding:0}.table.actionadd thead{background-color:var(--background-color)}.table.actionadd thead tr th{color:var(--table-label);padding:10px 8px}.table.actionadd tbody tr td{padding-left:8px;padding-right:8px}.table thead{background-color:var(--background-color)}.code-review{background-color:var(--background-color);color:var(--text-dark)}.configTable tbody tr td{vertical-align:middle}.text-danger{color:#d62f3f!important}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.UntypedFormBuilder }, { type: i2.ActivatedRoute }, { type: i0.ChangeDetectorRef }, { type: i2.Router }, { type: AlertService }, { type: DataStoreService }]; } });

class PageBuilderAddComponent {
    formBuilder;
    router;
    route;
    alert;
    permissionStore;
    formData;
    formDetails;
    pageTypeList;
    schemaList;
    templateJSON;
    layout;
    subscribeFormData;
    jsonForm;
    isShowDesign = false;
    rev;
    selectedPageValue;
    orgList;
    updateMessage = null;
    onlineUsersList = {
        shortNameUser: [],
        fullNameUser: []
    };
    logedInUser;
    activeIndex;
    pageBuildertabs = [];
    // selectedPageType: string;
    authorisedTabs = [];
    labelText = '';
    checked2 = true;
    auth;
    localstorage;
    location;
    service;
    dropdownService;
    canChangeFormData = true;
    constructor(injector, formBuilder, router, route, alert, permissionStore) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.alert = alert;
        this.permissionStore = permissionStore;
        this.auth = injector.get(AuthService);
        this.localstorage = injector.get(LocalService);
        this.location = injector.get(Location);
        this.service = injector.get(PageBuilderAddService);
        this.dropdownService = injector.get(CommonDropdownsService);
        const permission = this.permissionStore.state;
        this.pageBuildertabs = [
            {
                label: 'BASIC PAGE INFORMATION',
                routerLink: 'basic-info',
                visible: permission.PAG_DES_BASIC_PAG_INFO,
            },
            {
                label: 'GRID FIELD',
                routerLink: 'grid-field',
                visible: permission.PAG_DES_GRID_FIELDS,
            },
            {
                label: 'GRID FIELDS',
                routerLink: 'grid-field',
                visible: permission.PAG_DES_GRID_FIELDS,
            },
            {
                label: 'FORM FIELDS',
                routerLink: 'grid-field',
                visible: permission.PAG_DES_FORM_FIELDS,
            },
            {
                label: 'DESIGN PAGE',
                routerLink: 'page-design',
                visible: permission.PAG_DES_DES_PAG,
            },
            {
                label: 'GRID CONFIGURATION',
                routerLink: 'grid-config',
                visible: permission.PAG_DES_GRID_CONFIG,
            },
            {
                label: 'TAB CONFIGURATION',
                routerLink: 'tab-config',
                visible: permission.PAG_DES_TAB_CONFIG
            },
            {
                label: 'ROUTING CONFIGURATION',
                routerLink: 'routing-config',
                visible: permission.PAG_DES_ROUTE_CONFIG
            },
            {
                label: 'RIBBON TAB CONFIGURATION',
                routerLink: 'ribbon-tab-config',
                visible: permission.PAG_DES_RIBBON_TAB_CONFIG
            },
            {
                label: 'RIBBON DESIGN PAGE',
                routerLink: 'page-ribbon-design',
                visible: permission.PAG_DES_RIBBON_DES_PAG
            }
        ];
        this.pageBuildertabs = this.pageBuildertabs.filter(item => item.visible);
        this.service.currentPageType.subscribe(page => this.getAuthorisedTabs(page && typeof page === "string" ? JSON.parse(page) : page));
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                if (event.url.includes('add') || event.url.includes('edit')) {
                    this.canChangeFormData = false;
                }
            }
        });
    }
    // public form: any;
    id = '';
    onlineUserListSubscription;
    updateNotificationSubscription;
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.rev = this.route.snapshot.paramMap.get('rev');
        this.getBasicInfo();
        this.logedInUser = this.localstorage.getObj('user');
        this.getAuthorisedTabs();
        this.loadForm();
        // this.loadDropDowns();
        this.getPageUrl();
        this.subscribeFormData = this.service.currentFormData.subscribe((data) => {
            this.formData = data;
            this.jsonForm = this.formData?.templatejson ? this.formData?.templatejson : [];
            this.layout = this.formData && this.formData.layouttype ? this.formData.layouttype : '';
        });
        this.service.currentBasicData.subscribe((data) => {
            if (data) {
                if (this.formData) {
                    this.formData.pagename = data.pagename;
                    this.formData.pagetype = data.pagetype;
                    this.formData.description = data.description;
                    this.formData.organizationid = data.organizationid;
                    this.formData.modulekey = data.modulekey;
                    this.formData.submodulekey = data.submodulekey;
                }
            }
        });
        // this.getOrgList();
    }
    onActiveIndexChange(event) {
        const isSaved = this.localstorage.getItem('isTableFieldsSaved') === 'true';
        const isSchemaSelected = this.localstorage.getItem('isSchemaSelected') === 'true';
        const isTableSelected = this.localstorage.getItem('isTableSelected') === 'true';
        const isColumnChecked = this.localstorage.getItem('isColumnChecked') === 'true';
        const validateFields = this.fieldValidation();
        if (event === 2 && !isSaved) {
            let errorMessage;
            if (!isSchemaSelected && !this.id)
                errorMessage = 'Please select the schema.';
            else if (!isTableSelected && !this.id)
                errorMessage = 'Please select the table.';
            else if (!isColumnChecked && !this.id)
                errorMessage = 'Please select at least one column.';
            else if (validateFields && !this.id)
                errorMessage = 'Click the Next button to proceed.';
            if (errorMessage) {
                this.activeIndex = 1;
                const routePath = this.id ? `/pages/page-design/edit/${this.id}/grid-field` : '/pages/page-design/add/grid-field';
                this.router.navigate([routePath], { relativeTo: this.route });
                this.alert.error(errorMessage);
                return;
            }
        }
        this.activeIndex = event;
    }
    fieldValidation() {
        const isSchemaSelected = this.localstorage.getItem('isSchemaSelected') === 'true';
        const isTableSelected = this.localstorage.getItem('isTableSelected') === 'true';
        const isColumnChecked = this.localstorage.getItem('isColumnChecked') === 'true';
        return isSchemaSelected && isTableSelected && isColumnChecked;
    }
    getBasicInfo() {
        const editBaicDetails = this.localstorage.getObj('EDITBASICINFO');
        if (editBaicDetails?.pageDetails?.locked) {
            this.checked2 = true;
            this.labelText = 'Locked';
        }
        else {
            this.checked2 = false;
            this.labelText = 'Unlocked';
        }
    }
    getPageUrl() {
        let url = PageBuilderAddURL.EndPoints.page_config.pageVersion.replace('{id}', this.id);
        if (this.rev)
            url = PageBuilderAddURL.EndPoints.page_config.pageaudit.replace('{id}', this.id).replace('{id2}', this.rev);
        if (this.id) {
            this.getPageAPi(url);
        }
        else {
            this.jsonForm = {
                components: []
            };
        }
    }
    getPageAPi(url) {
        this.service.getAllPage(url).subscribe((result) => {
            if (result) {
                this.formData = result.data;
                this.formDetails.patchValue(this.formData);
                this.service.setFormData(this.formData);
                this.layout = this.formData && this.formData.layouttype ? this.formData.layouttype : '';
                this.jsonForm = this.formData.templatejson ? this.formData.templatejson : [];
                this.setTimetoGetPage();
            }
        });
    }
    setTimetoGetPage() {
        setTimeout(() => {
            if (this.pageTypeList && this.pageTypeList.length) {
                const dName = this.pageTypeList.filter(key => key.refkey === this.formData.pagetype);
                if (dName.length) {
                    this.setTooltip(dName[0]['displayvalue']);
                }
            }
        }, 100);
    }
    getAuthorisedTabs(page) {
        if (page) {
            if (page[0].lookupkey === 'BGP' || page[0].lookupkey === 'BUSP') {
                this.authorisedTabs = this.pageBuildertabs.filter(a => a.label === 'BASIC PAGE INFORMATION' || a.label === 'GRID FIELDS' || a.label === 'GRID CONFIGURATION');
            }
            else if (page[0].lookupkey === 'ATPBDM') {
                this.authorisedTabs = this.pageBuildertabs.filter(a => a.label === 'BASIC PAGE INFORMATION' || a.label === 'FORM FIELDS' || a.label === 'DESIGN PAGE');
            }
            else if (page[0].lookupkey === 'CP') {
                this.authorisedTabs = this.pageBuildertabs.filter(a => a.label === 'BASIC PAGE INFORMATION' || a.routerLink === 'routing-config');
            }
            else if (page[0].lookupkey === 'BTP') {
                this.authorisedTabs = this.pageBuildertabs.filter(a => a.label === 'BASIC PAGE INFORMATION' || a.routerLink === 'tab-config');
            }
            else if (page[0].lookupkey === 'FFP') {
                this.authorisedTabs = this.pageBuildertabs.filter(a => a.label === 'BASIC PAGE INFORMATION' || a.label === 'DESIGN PAGE');
            }
            else if (page[0].lookupkey === 'RBTP') {
                this.authorisedTabs = this.pageBuildertabs.filter(a => a.label === 'BASIC PAGE INFORMATION' || a.routerLink === 'ribbon-tab-config');
            }
            else if (page[0].lookupkey === 'DR') {
                this.authorisedTabs = this.pageBuildertabs.filter(a => a.label === 'BASIC PAGE INFORMATION' || a.label === 'FORM FIELDS' || a.label === 'RIBBON DESIGN PAGE');
            }
        }
        this.service.authorisedTabs = this.authorisedTabs;
    }
    ngOnDestroy() {
        this.subscribeFormData.unsubscribe();
        if (this.canChangeFormData) {
            this.service.setFormData('');
        }
        this.service.setBasicData('');
    }
    // loadDropDowns(): void {
    //   this.dropdownService.getDropDownValues('page').subscribe(result => {
    //     this.pageTypeList = result['data'];
    //   });
    // }
    loadForm() {
        this.formDetails = this.formBuilder.group({
            pagename: ['', Validators.required],
            id: [''],
            description: ['', Validators.required],
            pagetype: ['', Validators.required],
            organizationid: ['Select-ALL', Validators.required],
            modulekey: [''],
            submodulekey: ['']
        });
    }
    loadSchemas() {
        this.service.getSchema().subscribe(result => {
            this.schemaList = result['data'];
        });
    }
    saveLayout() {
        const formDetails = this.formData;
        formDetails.layouttype = this.layout;
        if (this.id) {
            formDetails.id = this.id;
        }
        this.service.createPage(formDetails).subscribe(result => {
            if (!this.id) {
                const data = result['data'];
                if (result && Object.keys(data).length) {
                    const id = data.id ? data.id : '';
                    if (id) {
                        this.router.navigate(['../edit', id], { relativeTo: this.route });
                    }
                }
            }
            this.alert.success('Page saved successfully');
        });
    }
    resetForm = () => {
        this.router.navigate(this.id ? ['../../list'] : ['../'], {
            relativeTo: this.route
        });
    };
    goToDesignPage() {
        if (!this.id) {
            const data = this.formDetails.getRawValue();
            this.service.setFormData(data);
        }
        else {
            if (this.formData) {
                this.service.setBasicData(this.formDetails.getRawValue());
            }
        }
    }
    // showDesign() {
    //   this.isShowDesign = !this.isShowDesign;
    // }
    formSubmit = () => {
        const formDetails = this.formData;
        console.log(this.jsonForm);
        formDetails.templatejson = JSON.stringify(this.jsonForm);
        if (this.id) {
            formDetails.id = this.id;
        }
        this.service.createPage(formDetails).subscribe(pages => {
            if (!this.id) {
                if (pages && Object.keys(pages['data']).length) {
                    const id = pages['data'].id ? pages['data'].id : '';
                    if (id) {
                        this.router.navigate(['../edit', id], { relativeTo: this.route });
                    }
                }
            }
            this.alert.success('Page saved successfully');
        });
    };
    setTooltip(displayValue) {
        this.selectedPageValue = displayValue;
    }
    goBack() {
        this.location.back();
    }
    getOrgList() {
        this.service.getAllOrganisations().subscribe(res => {
            if (res && res['data'].length) {
                this.orgList = res['data'].sort((a, b) => a?.name?.localeCompare(b?.name));
                this.orgList.length === 1
                    ? this.formDetails.patchValue({ organizationid: this.orgList[0].id })
                    : this.formDetails.patchValue({ organizationid: 'Select-ALL' });
            }
            else {
                this.orgList = [];
            }
        });
    }
    subscribeToPageDesign(componentRef) {
        if (!(componentRef instanceof DesignPageComponent)) {
            return;
        }
        const designPage = componentRef;
        this.onlineUserListSubscription = designPage.onlineUserList.subscribe(event => this.onlineUserList(event, this));
        this.updateNotificationSubscription = designPage.updateNotification.subscribe(event => this.showUpdateNotification(event, this));
    }
    unsubscribeToPageDesign() {
        console.log('Unsubscribing...');
        if (this.onlineUserListSubscription) {
            this.onlineUserListSubscription.unsubscribe();
        }
        if (this.updateNotificationSubscription) {
            this.updateNotificationSubscription.unsubscribe();
        }
    }
    showUpdateNotification(event, _this) {
        console.log(`Socket ${event}`);
        _this.updateMessage = event;
        setTimeout(() => {
            _this.updateMessage = null;
        }, 5000);
    }
    closeUpdateNotification() {
        this.updateMessage = null;
    }
    onlineUserList(event, _this) {
        const userList = event.map(el => el.user);
        console.log(`Socket ${userList}`);
        const finUserIndex = userList.findIndex(el => el.id === _this.logedInUser.id);
        if (finUserIndex > -1) {
            userList.splice(finUserIndex, 1);
        }
        const item = {
            shortNameUser: [],
            fullNameUser: []
        };
        for (let i = 0; i < userList.length; i++) {
            const element = {
                shortName: userList[i].firstname.split('')[0].toUpperCase() + userList[i].lastname.split('')[0].toUpperCase(),
                fullName: `${userList[i].firstname} ${userList[i].lastname}`
            };
            if (i >= 2) {
                item.fullNameUser.push(element);
            }
            else {
                item.shortNameUser.push(element);
            }
        }
        _this.onlineUsersList = item;
        console.log(`Socket ${_this.onlineUsersList}`);
    }
    getChange(text) {
        this.checked2 = text;
        if (this.checked2) {
            this.labelText = 'Locked';
        }
        else {
            this.labelText = 'Unlocked';
        }
        this.updatePageStatus();
    }
    updatePageStatus() {
        const inputRequest = {
            locked: this.checked2 ? true : false
        };
        this.service.editPageStatus(inputRequest, this.formData.pageid).subscribe(() => {
            if (this.checked2) {
                this.alert.success('Page is locked!');
            }
            else {
                this.alert.success('Page is Unlocked!');
            }
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddComponent, deps: [{ token: i0.Injector }, { token: i1.UntypedFormBuilder }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: AlertService }, { token: PermissionStore }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: PageBuilderAddComponent, selector: "app-page-builder-add", ngImport: i0, template: "<div class=\"position-relative\">\r\n  <div class=\"activepages\" *ngIf=\"id\">\r\n    <h5>{{ labelText }}</h5>\r\n    <p-inputSwitch\r\n      name=\"checkedChange\"\r\n      [(ngModel)]=\"checked2\"\r\n      inputId=\"checkedChange\"\r\n      (onChange)=\"getChange($event.checked)\"></p-inputSwitch>\r\n    <label aria-labelledby=\"checkedChange\" class=\"sr-only\">Locked / Unlocked</label>\r\n  </div>\r\n  <div class=\"wrk-user-list-wrp\">\r\n    <div class=\"wrk-user-list\" *ngFor=\"let item of onlineUsersList.shortNameUser\">\r\n      <span class=\"wrk-user-name text-uppercase\">{{ item.shortName }}</span>\r\n      <span class=\"wrk-user-tooltip\">{{ item.fullName }}</span>\r\n    </div>\r\n\r\n    <div class=\"wrk-user-list\" *ngIf=\"onlineUsersList.fullNameUser.length\">\r\n      <span class=\"wrk-user-name text-uppercase\">+{{ onlineUsersList.fullNameUser.length }}</span>\r\n      <span class=\"wrk-user-tooltip\">\r\n        <p *ngFor=\"let item of onlineUsersList.fullNameUser\">{{ item.fullName }}</p>\r\n      </span>\r\n    </div>\r\n    <div class=\"working-alert\" *ngIf=\"updateMessage\">\r\n      <div class=\"wrk-alert-wrp\">\r\n        <span>{{ updateMessage }}</span>\r\n        <span class=\"wrk-alert-close\" (click)=\"closeUpdateNotification()\"\r\n          ><i class=\"fa fa-times\" aria-hidden=\"true\"></i\r\n        ></span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"intakesteps mt-2\">\r\n    <p-steps [model]=\"authorisedTabs\" [(activeIndex)]=\"activeIndex\" [readonly]=\"false\" (activeIndexChange)=\"onActiveIndexChange($event)\"></p-steps>\r\n  </div>\r\n  <router-outlet (activate)=\"subscribeToPageDesign($event)\" (deactivate)=\"unsubscribeToPageDesign()\"></router-outlet>\r\n</div>\r\n", styles: [":root{--background-color: #f8f8f8;--navigation: #fff;--primary: #0D3178;--checkbox-border: #D6D5D5;--text-dark: #000;--label-text: #0D3178;--hover-text: #fff;--bg-light: #fff;--forms: #fff;--nav-text: #696969;--light-gray: #696969;--material-icons: #0D3178;--highlight-list: #e3f2fd;--table-header: #f9f9f9;--table-odd: #f7f7f7;--table-border: #ddd;--table-hover: #dbf6ff;--table-odd-color: #f2fcff;--btn: #0D3178;--menu-panel: #032361;--menu-level2: #28447E;--border-trans: transparent;--btn-hover: #1258A7;--btn-dark: #0D3178;--dropdown-list: #fff;--btncancel: #0D3178;--primary-light: #1258A7;--primary-dark: #0D3178;--light-d-light: #fff;--ldl-text: #fff;--light-d-accent: #fff;--header-bg: #f7f7f7;--secondary-color: #0D3178;--menu-link: #1258A7;--menu-highlight: #0084d1;--sumbmenu-selected: #0084D1;--profile-bg: #f3f9f9;--disabled: #7A8EB5;--accordion-header: #F5F5F5;--input-label: #1F1F1F;--input-field: #4C4C4C;--ghost: #A2A2A2;--table-label: #f1f1f1;--error-msg: #DC0404;--menu-hover: #1258A7;--var-icon-font: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;--rocket-icon: \"/assets/images/rocket-ship.svg\";--base-font-size: 16px;--font-11: 11px;--font-12: 12px;--font-13: 13px;--font-14: 14px;--font-15: 15px;--font-16: 16px;--font-17: 17px;--font-18: 18px;--font-19: 19px;--font-20: 20px;--font-21: 21px;--font-24: 24px;--font-26: 26px}.mat-horizontal-content-container,.mat-vertical-stepper-content{overflow:unset!important}.table.search td{vertical-align:middle}.display-field-table thead tr th:nth-child(2),.display-field-table tbody tr td:nth-child(2){width:100px}.widget-container{display:flex}.widget-container>*,.widget-field-container{height:300px;width:50%;margin-right:10px;box-sizing:border-box;background-color:#fff;border:1px solid #cecece}.widget-field-container{width:100%;overflow-y:scroll;padding:10px}.widget-field-container ul{list-style:none}.widget-field-container ul li{padding:10px 0;float:left;width:100%}.formio-component .card-header{padding:10px}.widget-field-container ul li span:first-child{display:inline-block;width:165px}.widget-field-container ul li span:nth-child(2){display:inline-block;width:130px}.widget-field-container div.tablename{font-style:italic;font-weight:600}.widget-field-container label{width:100%;text-align:right}.widget-field-container ul li label{text-align:left}.field{width:50%!important;float:left}.datatype{float:right!important;width:27%}.require{float:right!important;width:20%;margin-left:10px}.padding-0{padding:0}.health .mat-card-header{background-image:linear-gradient(to top,#1e3c72 0% 1%,#2a5298)!important;padding:5px!important;color:#fff!important}.health.mat-card{box-shadow:none}.health .mat-card-content{padding:5px!important}.working-alert{position:fixed;z-index:99;top:65px;right:20px}.working-alert .wrk-alert-wrp{background-color:#feb806;padding:15px 20px;width:100%;height:100%;border-radius:4px}.working-alert .wrk-alert-wrp span{color:#fff;font-weight:700}.working-alert .wrk-alert-wrp .wrk-alert-close{color:#fff;margin-left:10px;cursor:pointer}.wrk-user-list-wrp{position:relative;display:inline-block;margin:0 5px;float:right}.wrk-user-list-wrp .wrk-user-list{width:37px;height:37px;border-radius:50%;cursor:pointer;display:inline-block;margin:0 5px;position:relative}.wrk-user-list-wrp .wrk-user-list:hover .wrk-user-tooltip{display:block!important}.wrk-user-list-wrp .wrk-user-list:first-child{border:2px solid #864639;background:#fbded8}.wrk-user-list-wrp .wrk-user-list:first-child .wrk-user-name,.wrk-user-list-wrp .wrk-user-list:first-child .wrk-user-tooltip{color:#864639}.wrk-user-list-wrp .wrk-user-list:nth-child(2){border:2px solid #653854;background:#ebd3e1}.wrk-user-list-wrp .wrk-user-list:nth-child(2) .wrk-user-name,.wrk-user-list-wrp .wrk-user-list:nth-child(2) .wrk-user-tooltip{color:#653854}.wrk-user-list-wrp .wrk-user-list:last-child{border:2px solid #3d6538;background:#d3ebda}.wrk-user-list-wrp .wrk-user-list:last-child .wrk-user-name,.wrk-user-list-wrp .wrk-user-list:last-child .wrk-user-tooltip{color:#3d6538}.wrk-user-list-wrp .wrk-user-list .wrk-user-name{font-size:15px!important;font-weight:600;vertical-align:middle;text-align:center;display:block;line-height:2.3em}.wrk-user-list-wrp .wrk-user-list .wrk-user-tooltip{width:150px;background-color:#fff;text-align:center;border-radius:6px;padding:5px 10px;display:none;box-shadow:#00000040 0 .0625em .0625em,#00000040 0 .125em .5em,#ffffff1a 0 0 0 1px inset;font-weight:600;text-transform:capitalize;max-height:100px;overflow:auto;position:absolute;z-index:1;top:107%;left:50%;margin-left:-73px}.wrk-user-list-wrp .wrk-user-list .wrk-user-tooltip p{margin:3px 0!important;text-align:left}.activepages{position:absolute;z-index:1;top:0;left:20px}.activepages h5{font-size:var(--base-font-size)}.uploadFile{text-align:right}\n"], dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.RouterOutlet, selector: "router-outlet", inputs: ["name"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i6.Steps, selector: "p-steps", inputs: ["activeIndex", "model", "readonly", "style", "styleClass", "exact"], outputs: ["activeIndexChange"] }, { kind: "component", type: i7$3.InputSwitch, selector: "p-inputSwitch", inputs: ["style", "styleClass", "tabindex", "inputId", "name", "disabled", "readonly", "trueValue", "falseValue", "ariaLabel", "ariaLabelledBy"], outputs: ["onChange"] }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-page-builder-add', encapsulation: ViewEncapsulation.None, template: "<div class=\"position-relative\">\r\n  <div class=\"activepages\" *ngIf=\"id\">\r\n    <h5>{{ labelText }}</h5>\r\n    <p-inputSwitch\r\n      name=\"checkedChange\"\r\n      [(ngModel)]=\"checked2\"\r\n      inputId=\"checkedChange\"\r\n      (onChange)=\"getChange($event.checked)\"></p-inputSwitch>\r\n    <label aria-labelledby=\"checkedChange\" class=\"sr-only\">Locked / Unlocked</label>\r\n  </div>\r\n  <div class=\"wrk-user-list-wrp\">\r\n    <div class=\"wrk-user-list\" *ngFor=\"let item of onlineUsersList.shortNameUser\">\r\n      <span class=\"wrk-user-name text-uppercase\">{{ item.shortName }}</span>\r\n      <span class=\"wrk-user-tooltip\">{{ item.fullName }}</span>\r\n    </div>\r\n\r\n    <div class=\"wrk-user-list\" *ngIf=\"onlineUsersList.fullNameUser.length\">\r\n      <span class=\"wrk-user-name text-uppercase\">+{{ onlineUsersList.fullNameUser.length }}</span>\r\n      <span class=\"wrk-user-tooltip\">\r\n        <p *ngFor=\"let item of onlineUsersList.fullNameUser\">{{ item.fullName }}</p>\r\n      </span>\r\n    </div>\r\n    <div class=\"working-alert\" *ngIf=\"updateMessage\">\r\n      <div class=\"wrk-alert-wrp\">\r\n        <span>{{ updateMessage }}</span>\r\n        <span class=\"wrk-alert-close\" (click)=\"closeUpdateNotification()\"\r\n          ><i class=\"fa fa-times\" aria-hidden=\"true\"></i\r\n        ></span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"intakesteps mt-2\">\r\n    <p-steps [model]=\"authorisedTabs\" [(activeIndex)]=\"activeIndex\" [readonly]=\"false\" (activeIndexChange)=\"onActiveIndexChange($event)\"></p-steps>\r\n  </div>\r\n  <router-outlet (activate)=\"subscribeToPageDesign($event)\" (deactivate)=\"unsubscribeToPageDesign()\"></router-outlet>\r\n</div>\r\n", styles: [":root{--background-color: #f8f8f8;--navigation: #fff;--primary: #0D3178;--checkbox-border: #D6D5D5;--text-dark: #000;--label-text: #0D3178;--hover-text: #fff;--bg-light: #fff;--forms: #fff;--nav-text: #696969;--light-gray: #696969;--material-icons: #0D3178;--highlight-list: #e3f2fd;--table-header: #f9f9f9;--table-odd: #f7f7f7;--table-border: #ddd;--table-hover: #dbf6ff;--table-odd-color: #f2fcff;--btn: #0D3178;--menu-panel: #032361;--menu-level2: #28447E;--border-trans: transparent;--btn-hover: #1258A7;--btn-dark: #0D3178;--dropdown-list: #fff;--btncancel: #0D3178;--primary-light: #1258A7;--primary-dark: #0D3178;--light-d-light: #fff;--ldl-text: #fff;--light-d-accent: #fff;--header-bg: #f7f7f7;--secondary-color: #0D3178;--menu-link: #1258A7;--menu-highlight: #0084d1;--sumbmenu-selected: #0084D1;--profile-bg: #f3f9f9;--disabled: #7A8EB5;--accordion-header: #F5F5F5;--input-label: #1F1F1F;--input-field: #4C4C4C;--ghost: #A2A2A2;--table-label: #f1f1f1;--error-msg: #DC0404;--menu-hover: #1258A7;--var-icon-font: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;--rocket-icon: \"/assets/images/rocket-ship.svg\";--base-font-size: 16px;--font-11: 11px;--font-12: 12px;--font-13: 13px;--font-14: 14px;--font-15: 15px;--font-16: 16px;--font-17: 17px;--font-18: 18px;--font-19: 19px;--font-20: 20px;--font-21: 21px;--font-24: 24px;--font-26: 26px}.mat-horizontal-content-container,.mat-vertical-stepper-content{overflow:unset!important}.table.search td{vertical-align:middle}.display-field-table thead tr th:nth-child(2),.display-field-table tbody tr td:nth-child(2){width:100px}.widget-container{display:flex}.widget-container>*,.widget-field-container{height:300px;width:50%;margin-right:10px;box-sizing:border-box;background-color:#fff;border:1px solid #cecece}.widget-field-container{width:100%;overflow-y:scroll;padding:10px}.widget-field-container ul{list-style:none}.widget-field-container ul li{padding:10px 0;float:left;width:100%}.formio-component .card-header{padding:10px}.widget-field-container ul li span:first-child{display:inline-block;width:165px}.widget-field-container ul li span:nth-child(2){display:inline-block;width:130px}.widget-field-container div.tablename{font-style:italic;font-weight:600}.widget-field-container label{width:100%;text-align:right}.widget-field-container ul li label{text-align:left}.field{width:50%!important;float:left}.datatype{float:right!important;width:27%}.require{float:right!important;width:20%;margin-left:10px}.padding-0{padding:0}.health .mat-card-header{background-image:linear-gradient(to top,#1e3c72 0% 1%,#2a5298)!important;padding:5px!important;color:#fff!important}.health.mat-card{box-shadow:none}.health .mat-card-content{padding:5px!important}.working-alert{position:fixed;z-index:99;top:65px;right:20px}.working-alert .wrk-alert-wrp{background-color:#feb806;padding:15px 20px;width:100%;height:100%;border-radius:4px}.working-alert .wrk-alert-wrp span{color:#fff;font-weight:700}.working-alert .wrk-alert-wrp .wrk-alert-close{color:#fff;margin-left:10px;cursor:pointer}.wrk-user-list-wrp{position:relative;display:inline-block;margin:0 5px;float:right}.wrk-user-list-wrp .wrk-user-list{width:37px;height:37px;border-radius:50%;cursor:pointer;display:inline-block;margin:0 5px;position:relative}.wrk-user-list-wrp .wrk-user-list:hover .wrk-user-tooltip{display:block!important}.wrk-user-list-wrp .wrk-user-list:first-child{border:2px solid #864639;background:#fbded8}.wrk-user-list-wrp .wrk-user-list:first-child .wrk-user-name,.wrk-user-list-wrp .wrk-user-list:first-child .wrk-user-tooltip{color:#864639}.wrk-user-list-wrp .wrk-user-list:nth-child(2){border:2px solid #653854;background:#ebd3e1}.wrk-user-list-wrp .wrk-user-list:nth-child(2) .wrk-user-name,.wrk-user-list-wrp .wrk-user-list:nth-child(2) .wrk-user-tooltip{color:#653854}.wrk-user-list-wrp .wrk-user-list:last-child{border:2px solid #3d6538;background:#d3ebda}.wrk-user-list-wrp .wrk-user-list:last-child .wrk-user-name,.wrk-user-list-wrp .wrk-user-list:last-child .wrk-user-tooltip{color:#3d6538}.wrk-user-list-wrp .wrk-user-list .wrk-user-name{font-size:15px!important;font-weight:600;vertical-align:middle;text-align:center;display:block;line-height:2.3em}.wrk-user-list-wrp .wrk-user-list .wrk-user-tooltip{width:150px;background-color:#fff;text-align:center;border-radius:6px;padding:5px 10px;display:none;box-shadow:#00000040 0 .0625em .0625em,#00000040 0 .125em .5em,#ffffff1a 0 0 0 1px inset;font-weight:600;text-transform:capitalize;max-height:100px;overflow:auto;position:absolute;z-index:1;top:107%;left:50%;margin-left:-73px}.wrk-user-list-wrp .wrk-user-list .wrk-user-tooltip p{margin:3px 0!important;text-align:left}.activepages{position:absolute;z-index:1;top:0;left:20px}.activepages h5{font-size:var(--base-font-size)}.uploadFile{text-align:right}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.UntypedFormBuilder }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: AlertService }, { type: PermissionStore }]; } });

class DataSourceServiceConfig {
    static EndPoint = {
        Setting: {
            getOrganizationDbs: '/database/dataSource/getOrganizationDbs',
            updateData: '/database/DataSource/addOrUpdate',
            getList: '/database/getSchemasByDB/{dbaliasname}',
            schemaCheck: '/database/organization/{organizationid}/{dbaliasname}',
            updateSchema: '/database/addOrganizationSchemaByDB  '
        }
    };
}

class DataSourceService {
    _storeservice;
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    getOrganizationDbs() {
        return this.httpService.get(DataSourceServiceConfig.EndPoint.Setting.getOrganizationDbs);
    }
    getSchema(dbAliasName) {
        return this.httpService.get(DataSourceServiceConfig.EndPoint.Setting.getList.replace('{dbaliasname}', dbAliasName));
    }
    SchemaCheck(id, dbaliasname) {
        return this.httpService.get(DataSourceServiceConfig.EndPoint.Setting.schemaCheck.replace('{organizationid}', id).replace('{dbaliasname}', dbaliasname));
    }
    updateData(data) {
        return this.httpService.post(DataSourceServiceConfig.EndPoint.Setting.updateData, data);
    }
    updateSchemaList(data) {
        return this.httpService.post(DataSourceServiceConfig.EndPoint.Setting.updateSchema, data);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataSourceService, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataSourceService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataSourceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

var dataGrid = [
	{
		label: "Data Grid",
		reorder: true,
		addAnotherPosition: "bottom",
		layoutFixed: false,
		enableRowGroups: false,
		initEmpty: false,
		tableView: false,
		defaultValue: [
			{
			}
		],
		key: "dataGrid",
		type: "datagrid",
		input: true,
		components: [
		]
	}
];

const documentJson = [
    {
        doc_id: 1,
        doc_name: 'License',
        supported_types: ['png', 'jpg', 'pdf'],
        multi_page: false,
        mappings: [
            {
                label: 'First Name',
                attr: 'first_name'
            },
            {
                label: 'Middle Name',
                attr: 'middle_name'
            },
            {
                label: 'Last Name',
                attr: 'last_name'
            },
            {
                label: 'Age',
                attr: 'age'
            },
            {
                label: 'Address',
                attr: 'address'
            },
            {
                label: 'Date Of Birth',
                attr: 'date_of_birth'
            },
            {
                label: 'Sex',
                attr: 'sex'
            }
        ],
        accuracy_acceptance_level_pcnt: 90,
        purpose: ['Address Proof', 'ID Proof']
    },
    {
        doc_id: 2,
        doc_name: 'Aadhar',
        supported_types: ['png', 'jpg', 'pdf'],
        multi_page: false,
        mappings: [
            {
                label: 'First Name',
                attr: 'first_name'
            },
            {
                label: 'Middle Name',
                attr: 'middle_name'
            },
            {
                label: 'Last Name',
                attr: 'last_name'
            },
            {
                label: 'Age',
                attr: 'age'
            },
            {
                label: 'Address',
                attr: 'address'
            },
            {
                label: 'Date Of Birth',
                attr: 'date_of_birth'
            },
            {
                label: 'Sex',
                attr: 'sex'
            }
        ],
        accuracy_acceptance_level_pcnt: 90,
        purpose: ['Address Proof', 'ID Proof']
    },
    {
        doc_id: 3,
        doc_name: 'Pan',
        supported_types: ['png', 'jpg', 'pdf'],
        multi_page: false,
        mappings: [
            {
                label: 'First Name',
                attr: 'first_name'
            },
            {
                label: 'Middle Name',
                attr: 'middle_name'
            },
            {
                label: 'Last Name',
                attr: 'last_name'
            },
            {
                label: 'Age',
                attr: 'age'
            },
            {
                label: 'Address',
                attr: 'address'
            },
            {
                label: 'Date Of Birth',
                attr: 'date_of_birth'
            },
            {
                label: 'Sex',
                attr: 'sex'
            }
        ],
        accuracy_acceptance_level_pcnt: 90,
        purpose: ['Address Proof', 'ID Proof']
    },
    {
        doc_id: 4,
        doc_name: 'Mediciad Redetermination Form',
        supported_types: ['jpg', 'pdf'],
        multi_page: true,
        mappings: [
            {
                label: 'First Name',
                attr: 'first_name'
            },
            {
                label: 'Middle Name',
                attr: 'middle_name'
            },
            {
                label: 'Last Name',
                attr: 'last_name'
            },
            {
                label: 'Age',
                attr: 'age'
            },
            {
                label: 'Address Line1',
                attr: 'address_line1'
            },
            {
                label: 'Address Line2',
                attr: 'address_line2'
            },
            {
                label: 'State',
                attr: 'state'
            },
            {
                label: 'City',
                attr: 'city'
            },
            {
                label: 'County',
                attr: 'county'
            },
            {
                label: 'Contry',
                attr: 'contry'
            },
            {
                label: 'Date Of Birth',
                attr: 'date_of_birth'
            },
            {
                label: 'Sex',
                attr: 'sex'
            }
        ],
        acceptable_accuracy_pcnt: 90,
        purpose: ['New Redetermination']
    }
];

class QueryParamsService {
    _storeservice;
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    getSchemaList(orgid, dbAliasName) {
        return this.httpService.get(PageBuilderAddURL.EndPoints.db.schemaList.replace('{organizationid}', orgid).replace('{dbstring}', dbAliasName));
    }
    getTableBySchemaName(schema, dbAliasName) {
        return this.httpService.get(PageBuilderAddURL.EndPoints.db.tableBySchemaName.replace('{schema}', schema).replace('{dbstring}', dbAliasName));
    }
    getTableFields(schema, table, dbAliasName, pageType) {
        let url;
        url = PageBuilderAddURL.EndPoints.db.tableFields
            .replace('{table}', table)
            .replace('{schema}', schema)
            .replace('{dbstring}', dbAliasName)
            .concat('?includeAutoIncrementColumn=true&includeCreateColumns=true&includeUpdateColumns=true');
        return this.httpService.get(url);
    }
    getColumnsOfRelatedTables(relatedTables) {
        return this.httpService.post(PageBuilderAddURL.EndPoints.db.fieldsOfRelatedTable, relatedTables);
    }
    getRelatedTableFields(table, schema, dbAliasName) {
        return this.httpService.get(PageBuilderAddURL.EndPoints.db.relatedTableFields.replace('{table}', table).replace('{schema}', schema).replace('{dbstring}', dbAliasName));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: QueryParamsService, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: QueryParamsService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: QueryParamsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

class QueryParamsComponent {
    injector;
    formBuilder;
    cdRef;
    route;
    _storeservice;
    router;
    selectAllCheckBox;
    schemaList;
    tableList;
    relatedTableList;
    autoFieldMappingForm;
    autoFieldMappingArray;
    selectedSchema;
    selectedFields = [];
    unselectedFields = [];
    tableFields = {};
    tempTableFields = {};
    leftTableFields = [];
    rightTableFields = [];
    selectedTableList = [];
    selectedRelatedTableList = [];
    fieldMapping = [];
    totalFields;
    selectedTable;
    allFieldList = {};
    noOfColumns = 1;
    form;
    fieldDatatype;
    formData;
    tableSchemaConfig;
    tableSelection;
    relatedTableSelection = [];
    searchParams;
    isDynamicSearchBaseQuery;
    isGridPage;
    tableData;
    formDataChanged = new EventEmitter();
    id = '';
    tablelisturl = '/api/database';
    nColumns = [
        {
            key: 1,
            value: 1
        },
        {
            key: 2,
            value: 2
        },
        {
            key: 3,
            value: 3
        },
        {
            key: 4,
            value: 4
        }
    ];
    leftSelectionItem = [];
    rightSelectionItem = [];
    queryParamForm;
    queryParamFormArray;
    dublicateSchemaList = [];
    dublicateTableList = [];
    searchParamLength;
    assetList;
    tableFieldList;
    relatedTableFieldList;
    selectedTableField = [];
    relatedSelectedTableField = [];
    requiredField = [];
    selectedPage;
    basicPageInformation;
    showSearchInputFields;
    // pageTypeList: any;
    pageBuilderAddService;
    queryParamsService;
    _localstore;
    alert;
    pageBuilderService;
    filteredtableFieldList;
    authService;
    orgSubs;
    orgId;
    gridConfigFormArray = [];
    gridConfigList;
    fieldArr = [];
    isOCRChecked;
    selectedDocumentType;
    ocrFields;
    documentType = documentJson;
    dataGrid;
    isNewPage;
    isSchemaChanged;
    isRelatableTableSelected;
    isSaveGridFields;
    previousSelectedColumns = [];
    dataSourceService;
    dbAliasName;
    filteredrelatedtableFieldList;
    RBACORG;
    constructor(injector, formBuilder, cdRef, route, _storeservice, router) {
        this.injector = injector;
        this.formBuilder = formBuilder;
        this.cdRef = cdRef;
        this.route = route;
        this._storeservice = _storeservice;
        this.router = router;
        this.pageBuilderAddService = injector.get(PageBuilderAddService);
        this.dataSourceService = injector.get(DataSourceService);
        this.queryParamsService = injector.get(QueryParamsService);
        this._localstore = injector.get(LocalService);
        this.alert = injector.get(AlertService);
        this.pageBuilderService = injector.get(PageBuilderService$1);
        this.authService = injector.get(AuthService);
        this.dataGrid = dataGrid;
        this.requiredField = [
            {
                name: 'True',
                value: 'true'
            },
            {
                name: 'False',
                value: 'false'
            }
        ];
        this.pageBuilderAddService.currentPageType.subscribe(page => (this.selectedPage = page && typeof page === "string" ? JSON.parse(page) : page));
        this.showSearchInputFields = false;
        this.isSchemaChanged = false;
        this.isRelatableTableSelected = false;
        this.isSaveGridFields = false;
        this.isNewPage = this._localstore.getObj('CREATE PAGE');
        this.id = this.route.snapshot.paramMap.get('id');
        this.basicPageInformation = this._localstore.getObj('PAGEDESIGN_BASICINFO');
        this._localstore.setItem('isTableFieldsSaved', false);
        this._localstore.setItem('isSchemaSelected', false);
        this._localstore.setItem('isTableSelected', false);
        this._localstore.setItem('isColumnChecked', false);
        this._localstore.setItem('isColumnChanged', false);
    }
    async ngOnInit() {
        this.loadForm();
        this.dbAliasName = await this.getOrganizationDbs();
        this.orgSubs = this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.RBACORG = res['RBACORG'];
                this.orgId = parseInt(this.RBACORG['orgID']);
                if (this.orgId) {
                    this.getSchemaList();
                }
            }
        });
        if (this.basicPageInformation.pagetype === 'BUSP') {
            this.showSearchInputFields = true;
        }
        if (!this.id) {
            const validation = this.validationPage();
            if (!validation) {
                this.router.navigate(['/pages/page-design/add/basic-info'], { relativeTo: this.route });
                return this.alert.error('Please fill in all the required fields.');
            }
        }
        this.fieldDatatype = [
            { desc: 'Text Field', value: 'textfield' },
            { desc: 'Text Area', value: 'textarea' },
            {
                desc: 'Number',
                value: 'number'
            },
            {
                desc: 'Date',
                value: 'datetime'
            },
            {
                desc: 'Password',
                value: 'password'
            },
            {
                desc: 'Checkbox',
                value: 'checkbox'
            },
            {
                desc: 'Select Boxes',
                value: 'selectboxes'
            },
            {
                desc: 'Select',
                value: 'select'
            },
            {
                desc: 'Radio',
                value: 'radio'
            },
            {
                desc: 'Button',
                value: 'button'
            }
        ];
        this.pageBuilderAddService.currentFormData.subscribe((data) => {
            this.formData = data;
            // const gridConfigTest = JSON.parse(data.gridconfig);
            if (this.formData.id === '') {
                this.selectedSchema = '';
                this.resetTableFields();
            }
            if (this.formData.searchparams && typeof this.formData.searchparams === 'string') {
                this.searchParams = JSON.parse(this.formData.searchparams);
            }
            else {
                this.searchParams = this.formData.searchparams ? this.formData.searchparams : {};
            }
            this.baseQueryCheck();
            if (this.router.url.includes('grid-field') && !this.isSaveGridFields) {
                this.schemaTableCheck();
            }
        });
    }
    getOrganizationDbs() {
        return this.dataSourceService.getOrganizationDbs()
            .toPromise()
            .then(response => {
            return response['data']['dbaliasname'];
        }, _error => this.alert.error(AppConstants.errorMessage));
    }
    baseQueryCheck() {
        if (this.isDynamicSearchBaseQuery) {
            if (this.searchParams &&
                this.searchParams.baseQuery &&
                (this.selectedPage[0].lookupkey === 'DSP' || this.selectedPage[0].lookupkey === 'BUSP')) {
                this.tableSchemaConfig =
                    typeof this.searchParams.baseQuery === 'string'
                        ? JSON.parse(this.searchParams.baseQuery)
                        : this.searchParams.baseQuery;
            }
        }
        else {
            this.tableSchemaConfig =
                this.formData.tableschemaconfig && typeof this.formData.tableschemaconfig === 'string'
                    ? JSON.parse(this.formData.tableschemaconfig)
                    : this.formData.tableschemaconfig;
        }
    }
    schemaTableCheck() {
        if (this.tableSchemaConfig && Object.keys(this.tableSchemaConfig).length) {
            this.setTableSchemaConfig();
            this.setAutoFieldMapping();
            this._localstore.setItem('isTableFieldsSaved', true);
        }
        if (this.searchParams && this.searchParams.searchParamFormArray && this.searchParams.searchParamFormArray.length) {
            this.setQueryParams();
        }
    }
    ngOnDestroy() {
        this.orgSubs.unsubscribe();
    }
    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }
    async getSchemaList() {
        if (this.dbAliasName) {
            this.queryParamsService.getSchemaList(this.orgId, this.dbAliasName).subscribe(result => {
                this.schemaList = result['data'].map(data => data.name.includes('dmi') ? { ...data, label: 'jjis' } : { ...data, label: data.name });
                this.dublicateSchemaList = [...this.schemaList];
            }, _err => {
                this.selectedSchema = '';
                this.resetTableFields();
            });
        }
    }
    drop(event) {
        moveItemInArray(this.autoFieldMappingForm.controls['autoFieldMappingArray']['controls'], event.previousIndex, event.currentIndex);
    }
    loadForm() {
        this.autoFieldMappingForm = this.formBuilder.group({
            autoFieldMappingArray: this.formBuilder.array([this.createAutoFieldMapping()])
        });
        this.queryParamForm = this.formBuilder.group({
            queryParamFormArray: this.formBuilder.array([this.createQueryParams()])
        });
    }
    createQueryParams() {
        return this.formBuilder.group({
            paramName: [''],
            label: [''],
            logicalOperators: [''],
            operators: [''],
            tableName: [''],
            schema: ['']
        });
    }
    searchColumnFields(event) {
        const value = event.target.value.toLowerCase();
        this.filteredtableFieldList = this.tableFieldList.filter(a => a?.name?.toLowerCase().startsWith(value));
        this.filteredrelatedtableFieldList = this.relatedTableFieldList.map(tableField => {
            return {
                table: tableField.table,
                columns: tableField.columns.filter(field => field?.name?.toLowerCase().startsWith(value))
            };
        });
        this.selectAllCheckBox.forEach(element => {
            element.nativeElement.checked = false;
        });
    }
    clearSearch(inputElement) {
        inputElement.value = '';
        this.searchColumnFields({ target: inputElement });
    }
    setQueryParams() {
        const control = this.queryParamForm.controls['queryParamFormArray'];
        control.controls = [];
        this.searchParamLength = this.searchParams.searchParamFormArray.length;
        this.searchParams.searchParamFormArray.forEach(x => {
            control.push(this.buildQueryFormArray(x));
        });
    }
    buildQueryFormArray(x) {
        return this.formBuilder.group({
            paramName: x.paramName ? x.paramName : '',
            label: x.label ? x.label : '',
            logicalOperators: x.logicalOperators ? x.logicalOperators : '',
            operators: x.operators ? x.operators : '',
            tableName: x.tableName ? x.tableName : '',
            schema: x.schema ? x.schema : ''
        });
    }
    setTableSchemaConfig() {
        this.selectedSchema = this.tableSchemaConfig.schema;
        this.selectedTableList = this.tableSchemaConfig.tablelist;
        this.selectedRelatedTableList = this.tableSchemaConfig.selectedRelatedTableList;
        this.getTables(this.selectedSchema);
        if (typeof this.tableSchemaConfig === 'object') {
            this.tableSelection = this.tableSchemaConfig.tablefields?.primary;
        }
        this.totalFields = this.tableSchemaConfig.fieldmapping.length;
        this.tableFields = this.tableSchemaConfig.tablefields;
        this.tempTableFields = this.tableSchemaConfig.tablefields;
        this.rightTableFields = this.tableFields[this.tableSelection];
        this.fieldMapping = this.tableSchemaConfig.fieldmapping;
        this.previousSelectedColumns = this.tableSchemaConfig.fieldmapping;
        this.previousSelectedColumns.length && this._localstore.setItem('isColumnChecked', true);
        this.noOfColumns = this.tableSchemaConfig.noofcolumns ? this.tableSchemaConfig.noofcolumns : 1;
        this.isOCRChecked = this.tableSchemaConfig.ocrchecked ? this.tableSchemaConfig.ocrchecked : false;
        this.selectedDocumentType = this.tableSchemaConfig.selectedDocumentType
            ? this.tableSchemaConfig.selectedDocumentType
            : this.selectedDocumentType;
        this.relatedTableList = this.tableSchemaConfig.relatedTableList;
        this.getTableFields(this.tableSelection);
        this.relatedTableSelection = this.tableSchemaConfig.selectedRelatedTableList;
        this.getColumnsOfRelatedTables(this.relatedTableSelection);
    }
    createAutoFieldMapping() {
        this.autoFieldMappingForm = this.formBuilder.group({
            schema: ['', [Validators.required]],
            tablename: ['', [Validators.required]],
            field: ['', [Validators.required]],
            label: ['', [Validators.required]],
            datatype: ['', [Validators.required]],
            required: false,
            result: false,
            criteria: false,
            ocrkey: ['']
        });
    }
    setAutoFieldMapping() {
        const control = this.autoFieldMappingForm.controls['autoFieldMappingArray'];
        control.controls = [];
        if (this.fieldMapping.length) {
            this.fieldMapping.forEach(x => {
                control.push(this.buildAutoFieldMapping(x));
            });
        }
    }
    buildAutoFieldMapping(x) {
        const resultKey = x.hasOwnProperty('result') ? true : false;
        // const criteriaKey = x.hasOwnProperty('criteria') ? true : false;
        return this.formBuilder.group({
            schema: this.selectedSchema ? this.selectedSchema : x.schema,
            tablename: x.tablename ? x.tablename : '',
            field: x.field ? x.field : '',
            label: x.label ? x.label : '',
            datatype: x.datatype ? x.datatype : '',
            required: x.required ? x.required : false,
            result: !resultKey ? true : x.result,
            // criteria: !criteriaKey ? true : x.criteria,
            criteria: x.criteria ? x.criteria : false,
            ocrkey: x.ocrkey ? x.ocrkey : ''
        });
    }
    toggleLeftSelection(value, item) {
        if (value) {
            if (this.leftSelectionItem.indexOf(item) === -1) {
                this.leftSelectionItem.push(item);
            }
        }
        else {
            const index = this.leftSelectionItem.indexOf(item);
            if (index !== -1) {
                this.leftSelectionItem.splice(index, 1);
            }
        }
    }
    resetDropdownList(type) {
        if (type === 'schema') {
            this.schemaList = this.dublicateSchemaList;
        }
        else {
            this.tableList = this.dublicateTableList;
        }
    }
    clearSelectedColumnFields() {
        const control = this.autoFieldMappingForm.controls['autoFieldMappingArray'];
        control.controls = [];
        this.selectAllCheckBox.forEach(element => {
            element.nativeElement.checked = false;
        });
        this.filteredtableFieldList.map(a => (a.active = false));
        for (const tableField of this.filteredrelatedtableFieldList) {
            for (const field of tableField.columns) {
                field.active = field.disabled;
            }
        }
        this.selectedTableField = [];
    }
    checkAllColumnFields(event) {
        this.filteredtableFieldList.map(a => (a.active = event.target.checked));
        if (event.target.checked) {
            const control = this.autoFieldMappingForm.controls['autoFieldMappingArray'];
            control.controls = [];
            this.selectedTableField = [];
            for (const field of this.filteredtableFieldList) {
                this.selectedTableFields(field, 'all');
            }
            for (const tableField of this.filteredrelatedtableFieldList) {
                const table = tableField.table;
                for (const field of tableField.columns) {
                    if (!field.disabled) {
                        field.active = true;
                        this.selectedRelatedTableFields(table, field, 'all');
                    }
                }
            }
        }
        else {
            this._localstore.setItem('isColumnChecked', false);
            this.clearSelectedColumnFields();
        }
    }
    selectedRelatedTableFields(table, field, status) {
        field.related = true;
        field.relatedTable = table;
        this.selectedTableFields(field, status);
    }
    selectedTableFields(field, status) {
        if (field) {
            if (!this.selectedTableField.includes(field)) {
                this.fieldIncludeCheck(status, field);
                this._localstore.setItem('isColumnChecked', true);
            }
            else {
                const fieldIndex = this.selectedTableField.indexOf(field);
                if (fieldIndex !== -1) {
                    if (status !== 'all') {
                        field.active = false;
                    }
                    this.checkFields();
                    const index = 1;
                    const isRightAdd = false;
                    this.selectedTableField.splice(fieldIndex, 1);
                    this.selectedTableField.length == 0 && this._localstore.setItem('isColumnChecked', false);
                    this.validateColumnChanged();
                    const selectedFields = this.selectedTableField.map(a => a.name);
                    this.getSelectedTableFields(selectedFields, isRightAdd, field.name, index, this.selectedTableField, field);
                }
            }
        }
        else {
            this.selectedTableField = [];
        }
    }
    fieldIncludeCheck(status, field) {
        if (status !== 'all') {
            field.active = true;
        }
        this.checkFields();
        this.selectedTableField.push(field);
        this.validateColumnChanged();
        if (field.related) {
            const relatedTable = this.relatedSelectedTableField[field.relatedTable];
            if (relatedTable) {
                this.relatedSelectedTableField[field.relatedTable].push(field);
            }
            else {
                this.relatedSelectedTableField[field.relatedTable] = [field];
            }
        }
        const selectedFields = this.selectedTableField.map(a => a.name);
        const index = -1;
        const isRightAdd = true;
        this.getSelectedTableFields(selectedFields, isRightAdd, selectedFields, index, this.selectedTableField, field);
    }
    toggleRightSelection(value, item) {
        if (value) {
            if (this.rightSelectionItem.indexOf(item) === -1) {
                this.rightSelectionItem.push(item);
            }
        }
        else {
            const index = this.rightSelectionItem.indexOf(item);
            if (index !== -1) {
                this.rightSelectionItem.splice(index, 1);
            }
        }
    }
    getSelectedTableFields(data, isRightAdd, label, index = -1, fields, fieldDetails) {
        this.rightTableFields = data;
        if (fieldDetails) {
            this.rightAddCheckField(isRightAdd, index, fieldDetails, data); /*Complexity splitted */
        }
        else {
            this.rightAddCheck(isRightAdd, index, label, data); /*Complexity splitted */
        }
        this.tableFields = {
            primary: this.selectedTable,
            relations: this.selectedRelatedTableList
        };
        fields.forEach(_field => {
            this.fieldTablecheck(_field); /*Complexity splitted */
        });
        this.selectedTableList = this.tableFields ? Object.keys(this.tableFields) : [];
        if (label.length && isRightAdd) {
            let dataType;
            label.forEach((item, index) => {
                dataType = 'textfield';
                const selectedField = this.allFieldList[this.selectedTable];
                const autoFields = this.autoFieldMappingForm.getRawValue().autoFieldMappingArray;
                const field = Object.keys(selectedField).find(key => selectedField[key] === item);
                const selectedFields = this.selectedTableField.filter(list => (list.name === item && list.table_name === fields[index].table_name))[0];
                if (selectedFields.type === 'integer' || selectedFields.type === 'smallint') {
                    dataType = 'number';
                }
                else if (selectedFields.type === 'timestamp with time zone' ||
                    selectedFields.type === 'timestamp without time zone' ||
                    selectedFields.type === 'timestamp(6) with time zone' ||
                    selectedFields.type === 'timestamp(6) without time zone') {
                    dataType = 'datetime';
                }
                else if ((this.basicPageInformation.pagetype === 'BGP' || this.basicPageInformation.pagetype === 'DR') && selectedFields.type === 'date') {
                    dataType = 'date';
                }
                else if (this.basicPageInformation.pagetype === 'ATPBDM' && selectedFields.type === 'date') {
                    dataType = 'datetime';
                }
                else if (selectedFields.type === 'boolean') {
                    dataType = 'checkbox';
                }
                else if (selectedFields.type === 'text') {
                    dataType = 'textarea';
                }
                else {
                    dataType = 'textfield';
                }
                this.businessNameCheck(selectedFields, autoFields, item, dataType, field); /*Complexity splitted */
            });
        }
        this.totalFields = this.autoFieldMappingArray.length;
    }
    rightAddCheck(isRightAdd, index, label, data) {
        if (!isRightAdd && index > -1) {
            this.autoFieldMappingArray = this.autoFieldMappingForm.get('autoFieldMappingArray');
            for (let i = this.autoFieldMappingArray.length - 1; i >= 0; i--) {
                const item = this.autoFieldMappingArray.controls[i];
                if (label.includes(item.value.field)) {
                    this.autoFieldMappingArray.removeAt(i);
                }
            }
            this.queryParamFormArray = this.queryParamForm.get('queryParamFormArray');
            for (let i = this.queryParamFormArray.length - 1; i >= 0; i--) {
                const item = this.queryParamFormArray.controls[i];
                if (label.includes(item.value.field)) {
                    this.queryParamFormArray.removeAt(i);
                }
            }
            if (!data.length) {
                this.tableFields = [];
                this.selectedTableList = [];
            }
        }
    }
    rightAddCheckField(isRightAdd, index, label, data) {
        if (!isRightAdd && index > -1) {
            this.autoFieldMappingArray = this.autoFieldMappingForm.get('autoFieldMappingArray');
            for (let i = this.autoFieldMappingArray.length - 1; i >= 0; i--) {
                const item = this.autoFieldMappingArray.controls[i];
                if (label?.name == item.value.field && label?.table_name == item.value.tablename) {
                    this.autoFieldMappingArray.removeAt(i);
                }
            }
            this.queryParamFormArray = this.queryParamForm.get('queryParamFormArray');
            for (let i = this.queryParamFormArray.length - 1; i >= 0; i--) {
                const item = this.queryParamFormArray.controls[i];
                if (label?.name == item.value.field) {
                    this.queryParamFormArray.removeAt(i);
                }
            }
            if (!data.length) {
                this.tableFields = [];
                this.selectedTableList = [];
            }
        }
    }
    fieldTablecheck(_field) {
        const tableName = _field.table_name;
        // const isRelated = _field.related;
        // const table = isRelated ? this.tableFields[tableName] : this.tableFields[this.selectedTable];
        const table = tableName ? this.tableFields[tableName] : this.tableFields[this.selectedTable];
        if (table) {
            table.push(_field.name);
        }
        else {
            // this.tableFields[isRelated ? tableName : this.selectedTable] = [_field.name];
            this.tableFields[tableName] = [_field.name];
        }
    }
    businessNameCheck(selectedFields, autoFields, item, dataType, field) {
        let businessName = '';
        if (selectedFields.business_name) {
            businessName = selectedFields.business_name;
        }
        else {
            businessName = selectedFields.name;
        }
        // const tableName = selectedFields.relatedTable ? selectedFields.relatedTable : this.selectedTable;
        const tableName = selectedFields.table_name ? selectedFields.table_name : this.selectedTable;
        const isArrayExist = autoFields.find(list => list.schema === this.selectedSchema && list.tablename === tableName && list.field == item);
        if (!isArrayExist) {
            const obj = {
                schema: this.selectedSchema,
                tablename: tableName,
                field: item,
                label: businessName,
                datatype: dataType,
                required: false
            };
            this.autoFieldMappingArray = this.autoFieldMappingForm.get('autoFieldMappingArray');
            this.autoFieldMappingArray.push(this.buildAutoFieldMapping(obj));
            const queryObj = {
                paramName: field,
                label: item,
                tableName: selectedFields.relatedTable ? selectedFields.relatedTable : this.selectedTable,
                schema: this.selectedSchema,
                logicalOperators: 'and',
                operators: '='
            };
            this.queryParamFormArray = this.queryParamForm.get('queryParamFormArray');
            this.queryParamFormArray.push(this.buildQueryFormArray(queryObj));
        }
    }
    getTables(schema) {
        this.resetTableFields();
        this._localstore.setItem('isSchemaSelected', false);
        this._localstore.setItem('isTableSelected', false);
        this._localstore.setItem('isColumnChecked', false);
        this._localstore.setItem('isTableFieldsSaved', false);
        if (schema) {
            this._localstore.setItem('isSchemaSelected', true);
            this.tableFieldList = [];
            this.filteredtableFieldList = [];
            this.selectedSchema = schema;
            this.queryParamsService.getTableBySchemaName(schema, this.dbAliasName).subscribe(result => {
                if (result) {
                    this.tableList = result['data'];
                    this.dublicateTableList = this.tableList;
                }
            }, _err => {
                this.tableList = [];
            });
        }
    }
    getRelatedTablesFields(table, schema) {
        this.queryParamsService.getRelatedTableFields(table, schema, this.dbAliasName).subscribe((result) => {
            const relatedTables = result?.data;
            if (relatedTables && relatedTables.length) {
                this.relatedTableList = relatedTables.map(_relatedTable => {
                    return {
                        label: `${_relatedTable['relatedtable']}`,
                        value: _relatedTable
                    };
                });
            }
        });
    }
    enableDataGrid(_event, table) {
        for (const relatedTable of this.selectedRelatedTableList) {
            if (table.relatedtable === relatedTable.relatedtable) {
                relatedTable.showDataGrid = true;
            }
        }
    }
    removeSelectedRelatedTableColumns(tablename) {
        this.filteredrelatedtableFieldList.map(r => {
            if (r.table === tablename) {
                r.columns.map(c => {
                    c.active ? (c['active'] = false) : c.active;
                });
            }
        });
        const selectedFieldArray = this.autoFieldMappingForm.get('autoFieldMappingArray');
        const filteredArray = selectedFieldArray.controls.filter(control => control.value.tablename !== tablename);
        selectedFieldArray.clear();
        filteredArray.forEach(filteredControl => selectedFieldArray.push(filteredControl));
        if (this.tableFields[tablename]) {
            delete this.tableFields[tablename];
        }
        this.selectedTableField = this.selectedTableField.filter(c => !(c?.related && c?.relatedTable === tablename));
    }
    getColumnsOfRelatedTables(relatedTables) {
        if (relatedTables.length < this.selectedRelatedTableList.length) {
            const differences = [];
            this.selectedRelatedTableList.forEach(rt => {
                const matchingObject = relatedTables.find(mt => rt.relatedtable === mt.relatedtable);
                if (!matchingObject) {
                    differences.push(rt);
                }
            });
            this.removeSelectedRelatedTableColumns(differences[0].relatedtable);
        }
        this.selectedRelatedTableList = relatedTables;
        if (this.selectedRelatedTableList) {
            const tableDetails = relatedTables.map(_rt => {
                return {
                    dbaliasname: this.dbAliasName,
                    table: _rt.relatedtable,
                    schema: _rt.relatedschema
                };
            });
            this.coloumnNameCheck(tableDetails, relatedTables);
        }
    }
    coloumnNameCheck(tableDetails, relatedTables) {
        this.queryParamsService.getColumnsOfRelatedTables(tableDetails).subscribe((_tableDetails) => {
            if (_tableDetails?.data) {
                this.relatedTableFieldList = _tableDetails.data.map((_columns, _index) => {
                    _columns = _columns.map(_column => {
                        if (_column.name === relatedTables[_index].relatedcolumn) {
                            _column.disabled = true;
                            _column.active = true;
                            return _column;
                        }
                        const tableName = relatedTables[_index].relatedtable;
                        if (tableName) {
                            const tableActiveColumns = this.tableFields[tableName];
                            if (tableActiveColumns && tableActiveColumns.includes(_column.name)) {
                                _column.active = true;
                                this.selectedTableField.push(_column);
                            }
                        }
                        return _column;
                    });
                    return {
                        table: tableDetails[_index].table,
                        columns: _columns
                    };
                });
                this.filteredrelatedtableFieldList = this.relatedTableFieldList;
            }
        });
    }
    getTableFields(table, isSchemaChanged) {
        this.isSchemaChanged = isSchemaChanged;
        this.unselectedFields = [];
        this.selectedFields = [];
        this.relatedTableFieldList = [];
        this.relatedTableSelection = [];
        this.selectedRelatedTableList = [];
        const control = this.autoFieldMappingForm.controls['autoFieldMappingArray'];
        control.controls = [];
        control.setValue([]);
        this.selectedTableField = [];
        this.filteredtableFieldList = [];
        this.filteredrelatedtableFieldList = [];
        this.tableFieldList = [];
        this._localstore.setItem('isTableSelected', false);
        this._localstore.setItem('isColumnChecked', false);
        this._localstore.setItem('isTableFieldsSaved', false);
        if (table) {
            this._localstore.setItem('isTableSelected', true);
            this.selectedTable = table;
            this.getRelatedTablesFields(this.selectedTable, this.selectedSchema);
            this.queryParamsService
                .getTableFields(this.selectedSchema, this.selectedTable, this.dbAliasName, this.basicPageInformation.pagetype)
                .subscribe((result) => {
                if (result && result.data) {
                    this.tableFieldList = result['data'].map(field => ({
                        ...field,
                        type: field.type.toLowerCase()
                    }));
                    this.isCheckCondition();
                    this.selectedTableField = this.tableFieldList.filter(x => x.active === true);
                    this.allFieldList[this.selectedTable] = {};
                    const tableDesc = this.tableFieldList.map(item => (this.allFieldList[this.selectedTable][item.name] = item.name));
                    if (this.isSchemaChanged && !this.selectedRelatedTableList.length && this.tableSchemaConfig?.tablefields?.primary
                        && this.tableSchemaConfig?.tablefields?.primary === this.selectedTable) {
                        this.selectedTableField = [];
                        // this.fieldMapping = this.tableSchemaConfig.fieldmapping.filter(field => this.tableSchemaConfig?.tablefields?.primary === this.selectedTable
                        //   && field.tablename === this.selectedTable);
                        for (const field of this.tableFieldList) {
                            if (field.table_name === this.tableSchemaConfig?.tablefields?.primary && field.active) {
                                this.selectedTableFields(field);
                            }
                            else {
                                field.active = false;
                            }
                        }
                    }
                    else if (this.isSchemaChanged && !this.selectedRelatedTableList.length && this.tableSchemaConfig?.tablefields?.primary
                        && this.tableSchemaConfig?.tablefields?.primary !== this.selectedTable) {
                        this.selectedTableField = [];
                        this.tableFieldList.forEach(field => {
                            if (field.table_name !== this.tableSchemaConfig?.tablefields?.primary) {
                                field.active = false;
                            }
                        });
                    }
                    // const activeFields = this.tableFieldList.filter(field => field.active);
                    // if (activeFields.length) {
                    //   this.fieldMapping.forEach(x => {
                    //     control.push(this.buildAutoFieldMapping(x));
                    //   });
                    // }
                    this.filteredtableFieldList = this.tableFieldList;
                    this.previousSelectedColumns.length && this._localstore.setItem('isColumnChecked', true);
                    this.checkFields();
                    if (this.tableFields && this.tableFields[this.selectedTable]) {
                        // const primary = this.tableFieldList.find(t => t.is_primary);
                        // this.tableFields.primary_column = primary?.name || 'id';
                        this.selectedFields = this.tableFields[this.selectedTable];
                        this.unselectedFields = tableDesc.filter(item => !this.selectedFields.includes(item));
                    }
                    else {
                        this.unselectedFields = tableDesc;
                    }
                    this.tableSelection = table;
                }
            });
        }
    }
    isCheckCondition() {
        this.tableFieldList = this.tableFieldList.map(x => {
            // const ischeck = this.tableSchemaConfig ? this.tableSchemaConfig.fieldmapping.filter(y => y.field === x.name) : '';
            const ischeck = this.tableSchemaConfig ? this.tableSchemaConfig.fieldmapping.filter(y => (y.field === x.name && y.tablename === x.table_name)) : '';
            if (ischeck.length > 0) {
                x.active = true;
                return x;
            }
            else {
                x.active = false;
                return x;
            }
        });
    }
    checkFields() {
        this.selectAllCheckBox.forEach(element => {
            const fieldList = this.filteredtableFieldList.some(a => !a.active);
            if (fieldList) {
                element.nativeElement.checked = false;
            }
            else {
                element.nativeElement.checked = true;
            }
        });
        this.selectAllCheckBox.forEach(element => {
            const fieldList = this.filteredrelatedtableFieldList.some(tableField => tableField.columns.some(field => !field.active));
            if (fieldList) {
                element.nativeElement.checked = false;
            }
            else {
                element.nativeElement.checked = true;
            }
        });
    }
    resetTableFields() {
        this.leftSelectionItem = [];
        this.rightSelectionItem = [];
        this.selectedTable = '';
        this.tableSelection = '';
        this.relatedTableSelection = [];
        this.selectedRelatedTableList = [];
        this.tableFieldList = [];
        this.filteredtableFieldList = [];
        this.relatedTableFieldList = [];
        this.filteredrelatedtableFieldList = [];
        this.tableList = [];
        this.tableFields = {};
        this.leftTableFields = [];
        this.rightTableFields = [];
        this.unselectedFields = [];
        this.selectedFields = [];
        this.selectedTableList = [];
        this.fieldMapping = [];
        this.totalFields = 0;
        this.noOfColumns = 1;
        this.isOCRChecked = false;
        const control = this.autoFieldMappingForm.controls['autoFieldMappingArray'];
        control.controls = [];
        const queryFormcontrol = this.queryParamForm.controls['queryParamFormArray'];
        queryFormcontrol.controls = [];
        this.form = {
            components: []
        };
        // this.filteredtableFieldList.map(a => (a.active = false));
        // this.clearSelectedColumnFields();
    }
    skipToNextPage() {
        if (this.basicPageInformation.pagetype === 'BGP') {
            this.router.navigate(['../grid-config'], { relativeTo: this.route });
        }
        else if (this.basicPageInformation.pagetype === 'DR') {
            this.router.navigate(['../page-ribbon-design'], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['../page-design'], { relativeTo: this.route });
        }
    }
    saveTableField() {
        this.isSaveGridFields = true;
        if (this.selectedTableField.length < 1) {
            return this.alert.error('Please select at least one column.');
        }
        const primary = this.tableFieldList.find(t => t.is_primary);
        if (!primary) {
            return this.alert.error('Select Table not having Primary Key');
        }
        if (this.selectedPage[0].lookupkey == 'ATPBDM') {
            const isprimarycolumn = this.selectedTableField.find(t => t.name == primary['name']);
            if (isprimarycolumn) {
                return this.alert.error('Primary Key not allowed to Select as Input field');
            }
        }
        if (this.formData) {
            this.fieldMapping = this.autoFieldMappingForm.getRawValue().autoFieldMappingArray;
            const selectedTableList = this.fieldMapping.map((item) => item.tablename);
            this.selectedTableList = [...new Set(selectedTableList)];
            this.selectedPageTypeCheck(); /* Complexity splitted */
            const tableSchemaConfig = {
                schema: this.selectedSchema,
                dbaliasname: this.dbAliasName,
                tablelist: this.selectedTableList,
                tablefields: this.tableFields,
                fieldmapping: this.fieldMapping,
                noofcolumns: this.noOfColumns,
                ocrchecked: this.isOCRChecked,
                selectedDocumentType: this.selectedDocumentType,
                // relatedTableList: this.relatedTableList,
                selectedRelatedTableList: this.selectedRelatedTableList
            };
            this.formDataChanged.emit(tableSchemaConfig);
            this.baseSearchQueryCheck(tableSchemaConfig); /* Complexity splitted */
            this.gridConfigListConditions(tableSchemaConfig); /* Complexity splitted */
            const validation = this.validationSave();
            const createPage = this._localstore.getObj('CREATE PAGE');
            if (createPage) {
                if (this.formData && this.formData?.activeVersion?.id) {
                    this.formData.id = this.formData?.activeVersion?.id;
                }
            }
            if (this.selectedPage[0].lookupkey == 'BGP') {
                const isRelatedTableValid = this.checkInputData();
                if (!isRelatedTableValid) {
                    return this.alert.error('Please select atlease one field from selected table field list!');
                }
            }
            if (validation) {
                this.pageBuilderService.updatePageVersion(this.formData.id, this.formData, createPage).subscribe(() => {
                    this.isValidationCondition(); /* Complexity splitted */
                }, error => {
                    this.alert.error(error.error.message);
                });
                this.saveAssetCheck();
                this.pageBuilderAddService.setFormData(this.formData);
                /* Complexity splitted */
            }
            else {
                this.conditionCheckCreate(); /* Complexity splitted */
            }
        }
    }
    selectedPageTypeCheck() {
        /* From saveTableField() */
        if (this.selectedPage.length &&
            (this.selectedPage[0].lookupkey === 'DSP' ||
                this.selectedPage[0].lookupkey === 'BUSP' ||
                this.selectedPage[0].lookupkey === 'ATPBDM')) {
            this.generateDesignForm();
        }
    }
    baseSearchQueryCheck(tableSchemaConfig) {
        /* From saveTableField() */
        if (this.isDynamicSearchBaseQuery &&
            (this.selectedPage[0].lookupkey === 'DSP' || this.selectedPage[0].lookupkey === 'BUSP')) {
            this.searchParams.baseQuery = tableSchemaConfig;
            this.searchParams.searchParamFormArray = this.queryParamForm.getRawValue().queryParamFormArray;
            this.formData.searchparams = this.searchParams ? JSON.stringify(this.searchParams) : '';
            this.formData.templatejson = JSON.stringify(this.form);
        }
        else if ((!this.isDynamicSearchBaseQuery &&
            this.selectedPage.length &&
            (this.selectedPage[0].lookupkey === 'DSP' || this.selectedPage[0].lookupkey === 'BUSP')) ||
            (this.selectedPage.length && this.selectedPage[0].lookupkey === 'ATPBDM') ||
            this.selectedPage[0].lookupkey === 'DR') {
            this.formData.tableschemaconfig = JSON.stringify(tableSchemaConfig);
            if (this.selectedPage[0].lookupkey === 'ATPBDM') {
                this.formData.templatejson = JSON.stringify(this.form);
            }
        }
    }
    gridConfigListConditions(tableSchemaConfig) {
        /* From saveTableField() */
        if (this.selectedPage.length &&
            (this.selectedPage[0].lookupkey === 'DGP' ||
                this.selectedPage[0].lookupkey === 'BGP' ||
                (!this.isDynamicSearchBaseQuery && this.selectedPage[0].lookupkey === 'BUSP'))) {
            this.formData.tableschemaconfig = JSON.stringify(tableSchemaConfig);
            const gridConfig = this.formData.gridconfig && typeof this.formData.gridconfig === 'string'
                ? JSON.parse(this.formData.gridconfig)
                : this.formData.gridconfig;
            this.gridConfigCheckCondition(gridConfig); /* Complexity splitted */
            const tempData = [];
            const gridFieldList = this.fieldMapping;
            this.isGridConfigListCheck(gridFieldList, tempData, gridConfig); /* Complexity splitted */
            this.searchParamsCheck(); /* Complexity splitted */
        }
    }
    gridConfigCheckCondition(gridConfig) {
        /* From gridConfigListConditions --> saveTableField */
        if (gridConfig) {
            this.gridConfigFormArray =
                Object.keys(gridConfig).length && gridConfig.gridConfigFormArray && gridConfig.gridConfigFormArray.length
                    ? gridConfig.gridConfigFormArray
                    : [];
        }
    }
    isGridConfigListCheck(gridFieldList, tempData, gridConfig) {
        /* From gridConfigListConditions --> saveTableField */
        if (gridFieldList && gridFieldList.length) {
            this.tempDataItemCheck(gridFieldList, tempData); /* Complexity splitted */
            if (tempData.length) {
                let defaultSortColumn;
                if (gridConfig) {
                    defaultSortColumn = tempData.find(item => item.columnDef === gridConfig.defaultSortColumn);
                }
                this.getGridConfigList(defaultSortColumn, gridConfig, tempData);
            }
        }
        else {
            this.gridConfigList = '';
        }
    }
    tempDataItemCheck(gridFieldList, tempData) {
        /* From isGridConfigListCheck--> gridConfigListConditions --> saveTableField */
        for (const gridField of gridFieldList) {
            let item;
            gridField.columnDef = gridField.columnDef
                ? `${gridField.tablename}.${gridField.columnDef}`
                : `${gridField.tablename}.${gridField.field}`;
            // gridField.columnDef = gridField.columnDef ? gridField.columnDef : gridField.field
            gridField.header = gridField.header ? gridField.header : gridField.label;
            const gridResult = gridField.result;
            const gridCriteria = gridField.criteria;
            if (gridResult) {
                if (this.gridConfigFormArray.length) {
                    item = this.gridConfigFormArray.find(b => {
                        if (b.columnDef === (gridField.columnDef || gridField.field)) {
                            b.result = gridResult;
                            b.criteria = gridCriteria;
                            return b;
                        }
                    });
                }
                if (!item) {
                    item = {
                        columnDef: gridField.columnDef,
                        dateFormat: gridField.datatype === 'date' || gridField.datatype === 'datetime' ? gridField.datatype : '',
                        datetext: '',
                        filter: '',
                        header: gridField.header,
                        icon: '',
                        icontext: '',
                        link: '',
                        sort: '',
                        result: gridField.result,
                        criteria: gridField.criteria
                    };
                }
                tempData.push(item);
            }
        }
    }
    searchParamsCheck() {
        /* From gridConfigListConditions --> saveTableField */
        this.formData.gridconfig =
            this.gridConfigList && Object.keys(this.gridConfigList).length ? JSON.stringify(this.gridConfigList) : null;
        if (this.selectedPage.length &&
            (this.selectedPage[0].lookupkey === 'DGP' || this.selectedPage[0].lookupkey === 'BGP')) {
            this.formData.searchparams = '';
        }
    }
    isValidationCondition() {
        /* From saveTableField() */
        if (this.selectedPage.length && this.selectedPage[0].lookupkey === 'ATPBDM') {
            this.router.navigate(['../page-design'], { relativeTo: this.route });
        }
        else if (this.selectedPage[0].lookupkey === 'DR') {
            this.router.navigate(['../page-ribbon-design'], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['../grid-config'], { relativeTo: this.route });
        }
        this.alert.success('Fields updated successfully');
    }
    getGridConfigList(defaultSortColumn, gridConfig, tempData) {
        /* From isGridConfigListCheck--> gridConfigListConditions --> saveTableField */
        this.gridConfigList = {
            defaultSortColumn: defaultSortColumn ? gridConfig.defaultSortColumn : '',
            defaultSortType: defaultSortColumn ? gridConfig.defaultSortType : '',
            delete: gridConfig && gridConfig.delete ? gridConfig.delete : '',
            edit: gridConfig && gridConfig.edit ? gridConfig.edit : '',
            externalLink: gridConfig && gridConfig.externalLink ? gridConfig.externalLink : '',
            gridConfigFormArray: tempData,
            gridActionFormArray: gridConfig && gridConfig.gridActionFormArray ? gridConfig.gridActionFormArray : ''
        };
    }
    saveAssetCheck() {
        /* From saveTableField() */
        if (this.selectedPage.length &&
            (this.selectedPage[0].lookupkey === 'ATPBDM' ||
                this.selectedPage[0].lookupkey === 'BUSP' ||
                this.selectedPage[0].lookupkey === 'BGP' ||
                this.selectedPage[0].lookupkey === 'DR')) {
            this.saveAsset();
        }
    }
    conditionCheckCreate() {
        /* From saveTableField() */
        this.pageBuilderAddService.createPage(this.formData).subscribe(result => {
            const data = result['data'];
            this.formData.id = data?.id;
            this.formData.activeVersion = data.activeVersion;
            this.pageBuilderAddService.setFormData(this.formData);
            if (!this.id) {
                if (data && Object.keys(data).length) {
                    const id = data.id ? data.id : '';
                    this.formData.id = data.id;
                    if (id) {
                        this.router.navigate(['../edit', id], { relativeTo: this.route });
                    }
                }
            }
            this.saveAssetCheck();
            if (this.selectedPage.length && this.selectedPage[0].lookupkey === 'ATPBDM') {
                this.router.navigate(['../page-design'], { relativeTo: this.route });
            }
            else if (this.selectedPage[0].lookupkey === 'DR') {
                this.router.navigate(['../page-ribbon-design'], { relativeTo: this.route });
            }
            else {
                this.router.navigate(['../grid-config'], { relativeTo: this.route });
            }
            this.alert.success('Fields added successfully');
            this._localstore.setItem('isTableFieldsSaved', true);
        }, error => {
            this.alert.error(error.error.message);
        });
    }
    cancel() {
        this.pageBuilderAddService.returnToList();
    }
    processTemplateJSON(components, inputs) {
        if (components && components.length) {
            components.forEach(_component => {
                if (_component.components) {
                    this.processTemplateJSON(_component.components, inputs);
                }
                else if (_component.columns) {
                    this.processTemplateJSON(_component.columns, inputs);
                }
                else if (_component.input && _component.type !== 'button') {
                    console.log('Adding component');
                    inputs.push(_component);
                }
            });
        }
    }
    async generateDesignForm() {
        const formJSON = this.formData.templatejson ? JSON.parse(this.formData.templatejson) : {};
        console.log(formJSON);
        const inputs = [];
        if (formJSON.components) {
            this.processTemplateJSON(formJSON.components, inputs);
        }
        console.log(inputs);
        const formPanels = [];
        const tableCount = this.selectedTableList.length;
        this.fieldMapping = this.autoFieldMappingForm.getRawValue().autoFieldMappingArray;
        for (let i = 0; i < tableCount; i++) {
            let fieldColumns = [];
            let tableName = this.selectedTableList[i];
            let fieldMapping;
            if (this.fieldMapping && this.fieldMapping.length) {
                fieldMapping = this.fieldMapping.filter(x => x.tablename === tableName && x.field);
            }
            const tableFields = fieldMapping.filter(table => table.tablename === tableName);
            this.tableFieldsCheck(tableFields, inputs, tableName, fieldColumns);
            const uploadComponents = inputs.filter(_input => _input.type === 'fileupload');
            if (uploadComponents && uploadComponents.length) {
                fieldColumns = [...fieldColumns, ...uploadComponents];
            }
            if (this.noOfColumns > 1) {
                fieldColumns = this.splitFieldColumns(fieldColumns, this.noOfColumns);
                fieldColumns = [
                    {
                        clearOnHide: false,
                        label: 'Columns',
                        input: false,
                        tableView: false,
                        key: tableName + ' Columns',
                        columns: fieldColumns,
                        type: 'columns',
                        hideLabel: true,
                        tags: [],
                        conditional: {
                            show: '',
                            when: null,
                            eq: ''
                        },
                        properties: {}
                    }
                ];
            }
            tableName = tableName.split('_').join(' ');
            tableName = tableName[0].toUpperCase() + tableName.slice(1);
            const formPanel = {
                clearOnHide: false,
                key: tableName,
                input: false,
                title: tableName,
                theme: 'default',
                tableView: false,
                components: this.generateDataGrid(fieldColumns, tableName),
                type: 'panel',
                breadcrumb: 'default',
                tags: [],
                conditional: {
                    show: '',
                    when: null,
                    eq: ''
                },
                properties: {},
                hideLabel: false,
                isNew: false
            };
            formPanels.push(formPanel);
        }
        const searchButton = {
            type: 'button',
            theme: 'primary',
            disableOnInvalid: true,
            action: 'submit',
            block: false,
            rightIcon: '',
            leftIcon: '',
            size: 'md',
            key: 'submit',
            tableView: false,
            label: 'Submit',
            input: true,
            $$hashKey: 'object:22',
            autofocus: false,
            customClass: 'text-right',
            event: 'onFormSumit'
        };
        formPanels.push(searchButton);
        this.form = {
            components: formPanels
        };
    }
    tableFieldsCheck(tableFields, inputs, tableName, fieldColumns) {
        if (tableFields.length) {
            tableFields.forEach((element, _index) => {
                const addedElement = inputs.find(_input => _input.key === (tableName !== this.selectedTable ? `${tableName}.` : '') + element.field &&
                    _input.type === element.datatype);
                console.log({ addedElement });
                if (addedElement) {
                    this.addElementValidate(addedElement, element, fieldColumns);
                }
                else {
                    const field = element.field;
                    const datatype = element.datatype;
                    const label = element.label;
                    const require = element.required;
                    const fieldComponent = {
                        type: datatype,
                        input: true,
                        tableView: true,
                        inputType: datatype,
                        inputMask: '',
                        label: label,
                        key: (tableName !== this.selectedTable ? `${tableName}.` : '') + field,
                        placeholder: 'Enter ' + label,
                        prefix: '',
                        suffix: '',
                        multiple: false,
                        defaultValue: '',
                        protected: false,
                        unique: false,
                        persistent: true,
                        validate: {
                            required: require,
                            pattern: '',
                            custom: '',
                            customPrivate: false
                        },
                        conditional: {
                            show: '',
                            when: null,
                            eq: ''
                        }
                    };
                    fieldColumns.push(fieldComponent);
                }
            });
        }
    }
    addElementValidate(addedElement, element, fieldColumns) {
        if (addedElement.validate) {
            addedElement.validate.required = element.required;
        }
        fieldColumns.push(addedElement);
    }
    generateDataGrid(fieldColumns, tableName) {
        const fieldColumnList = [];
        const dataGridTemplate = this.dataGrid;
        const fieldColumnKey = fieldColumns && fieldColumns[0]?.key?.split('.')[0];
        const relatedTableKey = this.selectedRelatedTableList.filter(table => table?.showDataGrid && table.relatedtable === fieldColumnKey);
        if (relatedTableKey.length) {
            const newDataGridTemplate = [];
            for (let i = 0; i < dataGridTemplate.length; i++) {
                const template = { ...dataGridTemplate[i] };
                template.components = [];
                template.label = `${tableName} Data Grid`;
                template.key = `${relatedTableKey[i].relatedtable}`;
                for (const column of fieldColumns) {
                    if (relatedTableKey[i] && relatedTableKey[i].relatedtable === column.key.split('.')[0]) {
                        template.components.push(column);
                    }
                    else {
                        fieldColumnList.push(column);
                    }
                }
                newDataGridTemplate.push(template);
            }
            return fieldColumnList.length ? fieldColumnList : newDataGridTemplate;
        }
        else {
            return fieldColumns;
        }
    }
    splitFieldColumns(fields, columnCount) {
        const arrayLength = fields.length;
        const fieldColumn = [];
        const columnWidth = Math.ceil(12 / columnCount);
        for (let i = 0; i < columnCount; i++) {
            const obj = { components: [], width: columnWidth, offset: 0, push: 0, pull: 0 };
            fieldColumn.push(obj);
        }
        let k = 0;
        for (let i = 0; i < arrayLength; i++) {
            let j = i;
            if (j >= columnCount) {
                if (k >= columnCount) {
                    k = 0;
                }
                j = k;
                k++;
            }
            fieldColumn[j].components.push(fields[i]);
        }
        return fieldColumn;
    }
    saveAsset() {
        this.fieldMapping = this.autoFieldMappingForm.getRawValue().autoFieldMappingArray;
        this.fieldArrCondition();
        const assetNameArr = this.assetList && this.assetList.length ? this.assetList.map(item => item.assetname) : [];
        const activeArr = [];
        const inactiveArr = [];
        if (this.assetList && this.assetList.length) {
            this.assetList.forEach(item => {
                if (this.fieldArr.includes(item.assetname)) {
                    activeArr.push(item);
                }
                else {
                    item.isactive = false;
                    inactiveArr.push(item);
                }
            });
        }
        let newAssetArr = this.fieldArr;
        if (assetNameArr && assetNameArr.length && this.fieldArr && this.fieldArr.length) {
            newAssetArr = this.fieldArr.filter(x => !assetNameArr.includes(x));
        }
        const createPage = this._localstore.getObj('CREATE PAGE');
        if (newAssetArr.length) {
            newAssetArr.forEach(item => {
                const getFieldData = this.fieldMapping.find(value => value.field === item);
                this.gridArrayData(item, getFieldData, createPage, activeArr);
            });
        }
        const assetData = [...activeArr, ...inactiveArr];
        const pageid = createPage ? Number(this.formData.id) : Number(this.formData.pageid);
        const versionid = createPage ? Number(this.formData.activeVersion?.id) : Number(this.formData.id);
        this.pageBuilderAddService.createAssetByVersion(String(pageid), String(versionid), assetData).subscribe(() => {
            //This is intentional
        });
    }
    fieldArrCondition() {
        if (this.selectedPage.length &&
            this.selectedPage[0].lookupkey === 'BUSP' &&
            this.fieldMapping &&
            this.fieldMapping.length &&
            !this.isDynamicSearchBaseQuery) {
            this.fieldArr = this.fieldMapping.map(item => 'grid_' + item.field);
        }
        else {
            this.fieldArr = this.fieldMapping.map(item => item.field);
        }
    }
    gridArrayData(item, getFieldData, createPage, activeArr) {
        const data = {
            assetname: item,
            assetpath: this.formData.pagename + '.' + item,
            assettype: '45F',
            dashboardtemplatejson: null,
            description: getFieldData && getFieldData.label ? getFieldData.label : null,
            displayname: getFieldData && getFieldData.label ? getFieldData.label : null,
            icon: null,
            id: null,
            pageid: createPage ? Number(this.formData.id) : Number(this.formData.pageid),
            parentassetid: null,
            url: null,
            isactive: createPage ? this.formData.activeVersion?.isactive : this.formData.isactive,
            versionid: createPage ? Number(this.formData.activeVersion?.id) : Number(this.formData.id)
        };
        activeArr.push(data);
    }
    validationPage() {
        if (!this.basicPageInformation.pagename ||
            !this.basicPageInformation.pagetype ||
            !this.basicPageInformation.description) {
            return false;
        }
        else {
            return true;
        }
    }
    validationSave() {
        if (this.formData.id) {
            return true;
        }
        else if (this.id) {
            this.formData.id = this.id;
            return true;
        }
        return false;
    }
    getselectedPage(type) {
        if (this.selectedPage) {
            const pageType = this.selectedPage.filter(x => x.lookupkey === type);
            return pageType.length > 0 ? true : false;
        }
        return false;
    }
    getDisabledDataType(index) {
        const formArray = this.autoFieldMappingForm.get('autoFieldMappingArray');
        const formControl = formArray.at(index);
        const dataTypeControl = formControl.get('datatype');
        return (dataTypeControl.value === 'datetime' ||
            dataTypeControl.value === 'date' ||
            dataTypeControl.value === 'textarea' ||
            dataTypeControl.value === 'number');
    }
    selectedDocument(event) {
        const mapingObj = documentJson.find(res => res.doc_name === event.value);
        this.ocrFields = mapingObj.mappings;
    }
    ocrCheck(event) {
        const checked = event.target.checked;
        this._localstore.setItem('OCRCHECKED', checked);
        if (!checked) {
            this.selectedDocumentType = '';
            // const control = <FormArray>this.autoFieldMappingForm.controls.autoFieldMappingArray;
            // if (this.fieldMapping.length) {
            //   this.fieldMapping.forEach(x => {
            //   });
            // }
        }
    }
    searchSchemaList(event) {
        const value = event.target.value.toLowerCase();
        const originalSelectedTable = this.selectedSchema;
        this.schemaList = this.dublicateSchemaList.filter((a) => {
            const matchesSearch = a?.name?.toLowerCase().startsWith(value);
            const isSelected = a?.name === originalSelectedTable;
            return matchesSearch || isSelected;
        });
    }
    searchTableList(event) {
        const value = event.target.value.toLowerCase();
        const originalSelectedTable = this.tableSelection;
        this.tableList = this.dublicateTableList.filter((a) => {
            const matchesSearch = a?.name?.toLowerCase().startsWith(value);
            const isSelected = a?.name === originalSelectedTable;
            return matchesSearch || isSelected;
        });
    }
    checkInputData() {
        const gridConfig = this.formData.gridconfig && typeof this.formData.gridconfig === 'string'
            ? JSON.parse(this.formData.gridconfig)
            : this.formData.gridconfig;
        if (gridConfig?.gridConfigFormArray.length) {
            gridConfig?.gridConfigFormArray.forEach(element => {
                element.Choosable = '';
                element.filter = '';
                element.fixed = '';
                element.hide = '';
                element.mobileView = '';
                element.selected = [];
                element.sort = '';
                element.tabView = '';
            });
        }
        this.formData.gridconfig = JSON.stringify(gridConfig);
        const tableSchemaConfig = this.formData.tableschemaconfig && typeof this.formData.tableschemaconfig === 'string'
            ? JSON.parse(this.formData.tableschemaconfig)
            : this.formData.tableschemaconfig;
        const isRelatedTableValid = this.checkRelatedTables(tableSchemaConfig?.selectedRelatedTableList, tableSchemaConfig?.fieldmapping);
        if (tableSchemaConfig?.selectedRelatedTableList) {
            tableSchemaConfig.tablefields.relations = tableSchemaConfig?.selectedRelatedTableList;
        }
        else {
            tableSchemaConfig.tablefields.relations = [];
        }
        this.formData.tableschemaconfig = JSON.stringify(tableSchemaConfig);
        return isRelatedTableValid;
    }
    checkRelatedTables(selectedRelatedTableList, fieldmapping) {
        const relatedTables = selectedRelatedTableList.map(item => item.relatedtable);
        const tables = selectedRelatedTableList.map(item => item.table);
        return relatedTables.every(relatedTable => fieldmapping.some(item => item.tablename === relatedTable)) &&
            tables.every(table => fieldmapping.some(item => item.tablename === table));
    }
    validateColumnChanged() {
        if (this.previousSelectedColumns.length !== this.selectedTableField.length) {
            this._localstore.setItem('isTableFieldsSaved', false);
            this._localstore.setItem('isColumnChanged', true);
        }
        else {
            const map = {};
            for (const obj of this.selectedTableField) {
                const key = `${obj.table_name}-${obj.name}`;
                map[key] = obj;
            }
            let allSame = true;
            for (const obj of this.previousSelectedColumns) {
                const key = `${obj.tablename}-${obj.field}`;
                if (!(key in map)) {
                    allSame = false;
                    break;
                }
            }
            this._localstore.setItem('isTableFieldsSaved', allSame);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: QueryParamsComponent, deps: [{ token: i0.Injector }, { token: i1.UntypedFormBuilder }, { token: i0.ChangeDetectorRef }, { token: i2.ActivatedRoute }, { token: DataStoreService }, { token: i2.Router }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: QueryParamsComponent, selector: "app-query-params", inputs: { isDynamicSearchBaseQuery: "isDynamicSearchBaseQuery", isGridPage: "isGridPage", tableData: "tableData" }, outputs: { formDataChanged: "formDataChanged" }, viewQueries: [{ propertyName: "selectAllCheckBox", predicate: ["selectAllCheckBox"], descendants: true }], ngImport: i0, template: "<div class=\"grid-filed\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 mb-2\">\r\n      <div styleClass=\"rbac-card gridview w-100 h-100\">\r\n        <div class=\"strip_head toggleleft page-designer w-100 bg-white shadow-md d-none\">\r\n          <span class=\"report_head font-weight-bold p-2\">Select Form Fields</span>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-3 col-md-3 col-12 pr-md-1\">\r\n            <p-card styleClass=\"w-100 h-100 datasection\">\r\n              <div class=\"p-fluid p-formgrid row\">\r\n                <div class=\"p-field col-md-12 col-12\">\r\n                  <label for=\"schema\" class=\"referral-form-labels\">Schema\r\n                    <span class=\"requiredfield text-danger\">*</span>\r\n                  </label>\r\n                  <p-dropdown placeholder=\"Select Schema\" [options]=\"schemaList\" optionLabel=\"label\" optionValue=\"name\"\r\n                    [(ngModel)]=\"selectedSchema\" [filter]=\"true\" [resetFilterOnHide]=\"true\"\r\n                    (onHide)=\"resetDropdownList('schema')\" filterBy=\"name\" (keyup)=\"searchSchemaList($event)\"\r\n                    [showClear]=\"true\" fieldKey=\"PAG_DES_GRID_FIELDS_SELECT_SCHEMA\"\r\n                    (onChange)=\"getTables($event.value)\">\r\n                  </p-dropdown>\r\n                </div>\r\n              </div>\r\n              <div class=\"p-fluid p-formgrid row\">\r\n                <div class=\"p-field col-md-12 col-12\">\r\n                  <label for=\"schema\" class=\"referral-form-labels\">Table List\r\n                    <span class=\"requiredfield text-danger\">*</span>\r\n                  </label>\r\n                  <p-dropdown placeholder=\"Select Table\" [options]=\"tableList\" optionLabel=\"name\" optionValue=\"name\"\r\n                    fieldKey=\"PAG_DES_GRID_FIELDS_SELECT_TABLE\" [(ngModel)]=\"tableSelection\" [filter]=\"true\"\r\n                    [resetFilterOnHide]=\"true\" (onHide)=\"resetDropdownList('table')\" filterBy=\"name\"\r\n                    (keyup)=\"searchTableList($event)\" [showClear]=\"tableList && tableList?.length\"\r\n                    (onChange)=\"getTableFields($event.value,true)\">\r\n                  </p-dropdown>\r\n                </div>\r\n              </div>\r\n              <div class=\"p-fluid p-formgrid row\" *ngIf=\"\r\n                  selectedTable !== '' && (getselectedPage('ATPBDM') || getselectedPage('BGP') || getselectedPage('DR'))\r\n                \">\r\n                <div class=\"p-field col-md-12 col-12\">\r\n                  <label for=\"schema\" class=\"referral-form-labels\">Tables related to {{ this.selectedTable }}</label>\r\n                  <p-multiSelect placeholder=\"Select Related Tables\" [options]=\"relatedTableList\"\r\n                    (onChange)=\"getColumnsOfRelatedTables($event.value)\" [(ngModel)]=\"relatedTableSelection\"\r\n                    [resetFilterOnHide]=\"true\">\r\n                  </p-multiSelect>\r\n                </div>\r\n              </div>\r\n              <div class=\"p-fluid p-formgrid row\" *ngIf=\"\r\n                  selectedTable !== '' && (getselectedPage('ATPBDM') || getselectedPage('BGP') || getselectedPage('DR'))\r\n                \">\r\n                <div class=\"p-field col-md-12 col-12\">\r\n                  <div class=\"documentaccess pt-0\">\r\n                    <div class=\"header px-2 py-2\">\r\n                      <label class=\"mb-0\">Selected Related Tables</label>\r\n                    </div>\r\n                    <hr class=\"m-0\" />\r\n                    <div class=\"doc-body\">\r\n                      <ng-container *ngFor=\"let table of selectedRelatedTableList; let i = index\">\r\n                        <div class=\"row userdata border\">\r\n                          <div class=\"col-md-12 py-1 px-3\">\r\n                            <label aria-labelledby=\"related_table_img\" class=\"pl-2 mb-0 mr-2\">{{\r\n                              table.relatedtable\r\n                              }}</label>\r\n                            <ng-container *ngIf=\"getselectedPage('ATPBDM')\">\r\n                              <!-- <input type=\"checkbox\" id=\"showAsGrid{{ i }}\" class=\"packetsub-cls mt-0 required_ckbox\"\r\n                                [(ngModel)]=\"table.showDataGrid\" (change)=\"enableDataGrid($event, i)\" />\r\n                              <label for=\"showAsGrid{{ i }}\" aria-labelledby=\"showAsGrid{{ i }}\"\r\n                                class=\"pl-2 mt-0 mb-0\">Data Grid</label> -->\r\n\r\n                              <div class=\"g-checkbox\">\r\n                                <input type=\"checkbox\" id=\"showAsGrid{{ i }}\" class=\"packetsub-cls mt-0 required_ckbox\"\r\n                                  [(ngModel)]=\"table.showDataGrid\" (change)=\"enableDataGrid($event, i)\" />\r\n                                <label for=\"showAsGrid{{ i }}\" aria-labelledby=\"showAsGrid{{ i }}\"\r\n                                  class=\"pl-2 mt-0 mb-0\">Data Grid</label>\r\n                              </div>\r\n                            </ng-container>\r\n                          </div>\r\n                        </div>\r\n                      </ng-container>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </p-card>\r\n          </div>\r\n          <div class=\"col-md-9 col-12 pl-md-1\">\r\n            <p-card styleClass=\"w-100 h-100 beforeshow\" *ngIf=\"tableFieldList?.length < 1\">\r\n              <div class=\"d-flex align-items-center justify-content-center h-100 flex-column\">\r\n                <div class=\"pi-icon\"><em class=\"pi pi-database\"></em></div>\r\n                <p class=\"mb-0 text-muted\">No Schema and Table List selected!</p>\r\n              </div>\r\n            </p-card>\r\n            <p-card styleClass=\"w-100 h-100\" *ngIf=\"tableFieldList?.length > 0\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4 col-12 pr-md-2 mb-3\">\r\n                  <div class=\"documentaccess pt-0 selectcolumn\">\r\n                    <div class=\"header px-2 py-2\">\r\n                      <label class=\"mb-0\">Select Fields</label>\r\n                    </div>\r\n                    <hr class=\"m-0\" />\r\n                    <div class=\"doc-body\">\r\n                      <ng-container>\r\n                        <div class=\"row userdata mb-0\">\r\n                          <div class=\"col-md-12 group-data py-0 px-2\">\r\n                            <div class=\"my-2\">\r\n                              <div class=\"p-input-icon-left w-100\">\r\n                                <em class=\"pi pi-search\"></em>\r\n                                <input #gridSearchInput type=\"search\" id=\"gridSearch\" class=\"gridSearch form-control\"\r\n                                  pInputText title=\"Search\" (keyup)=\"searchColumnFields($event)\" />\r\n                                <em class=\"pi pi-times clear-icon\" (click)=\"clearSearch(gridSearchInput)\"\r\n                                  pTooltip=\"Clear search\" tooltipPosition=\"bottom\" *ngIf=\"gridSearchInput.value\"></em>\r\n                                <label class=\"sr-only\" for=\"gridSearch\" aria-labelledby=\"gridSearch\"\r\n                                  title=\"Grid Search\"></label>\r\n                              </div>\r\n                              <div class=\"col-md-12 py-0 px-3 d-flex align-items-center selectAllcolumn mt-2\">\r\n                                <div class=\"g-checkbox\">\r\n                                  <input type=\"checkbox\" #selectAllCheckBox id=\"selectAllcolumn\"\r\n                                    (change)=\"checkAllColumnFields($event)\" class=\"packetsub-cls mt-0\">\r\n                                  <label for=\"selectAllcolumn\" class=\"pl-2 mt-0 mb-0\">Select All</label>\r\n                                </div>\r\n                                <!-- <input type=\"checkbox\" #selectAllCheckBox id=\"selectAllcolumn\"\r\n                                  (change)=\"checkAllColumnFields($event)\" class=\"packetsub-cls mt-0\" />\r\n                                <label for=\"selectAllcolumn\" class=\"pl-2 mt-0 mb-0\">Select All</label> -->\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"max-h-selectcolumn\">\r\n                              <p-panel styleClass=\"mb-2\" [toggleable]=\"true\">\r\n                                <ng-template pTemplate=\"header\">\r\n                                  <span>{{ selectedTable }}</span>\r\n                                </ng-template>\r\n                                <ng-container *ngFor=\"let field of filteredtableFieldList; let i = index\">\r\n                                  <div class=\"row userdata border mb-0\"\r\n                                    (change)=\"selectedTableFields(field, field?.active)\">\r\n                                    <div class=\"col-md-12 py-0 px-3 d-flex align-items-center\">\r\n                                      <div class=\"g-checkbox\">\r\n                                        <input type=\"checkbox\" fieldKey=\"PAG_DES_GRID_FIELDS_SELECT_COLOUMN_FIELDS\"\r\n                                          id=\"packetsub{{ i }}\" [checked]=\"field?.active\" class=\"packetsub-cls mt-0\" />\r\n                                        <label for=\"packetsub{{ i }}\" class=\"pl-2 mt-0 mb-0\">{{ field.name }}</label>\r\n                                      </div>\r\n                                      <!-- <input type=\"checkbox\" fieldKey=\"PAG_DES_GRID_FIELDS_SELECT_COLOUMN_FIELDS\"\r\n                                        id=\"packetsub{{ i }}\" [checked]=\"field?.active\" class=\"packetsub-cls mt-0\" />\r\n                                      <label for=\"packetsub{{ i }}\" class=\"pl-2 mt-0 mb-0\">{{ field.name }}</label> -->\r\n                                    </div>\r\n                                  </div>\r\n                                </ng-container>\r\n                              </p-panel>\r\n                              <p-panel styleClass=\"mb-2\" *ngFor=\"let tableField of filteredrelatedtableFieldList\"\r\n                                [toggleable]=\"true\">\r\n                                <ng-template pTemplate=\"header\">\r\n                                  <span>{{ tableField.table }}</span>\r\n                                </ng-template>\r\n                                <ng-container *ngFor=\"let field of tableField.columns; let i = index\">\r\n                                  <div class=\"row userdata border mb-0\"\r\n                                    (change)=\"selectedRelatedTableFields(tableField.table, field, field?.active)\">\r\n                                    <div class=\"col-md-12 py-0 px-3 d-flex align-items-center\">\r\n                                      <div class=\"g-checkbox\">\r\n                                        <input type=\"checkbox\" id=\"related-packetsub{{ i }}\" [checked]=\"field?.active\"\r\n                                          class=\"packetsub-cls mt-0\" [disabled]=\"field?.disabled\" />\r\n                                        <label for=\"related-packetsub{{ i }}\" class=\"pl-2 mt-0 mb-0\">{{\r\n                                          field.name\r\n                                          }}</label>\r\n                                      </div>\r\n\r\n                                      <!-- <input type=\"checkbox\" id=\"related-packetsub{{ i }}\" [checked]=\"field?.active\"\r\n                                        class=\"packetsub-cls mt-0\" [disabled]=\"field?.disabled\" />\r\n                                      <label for=\"related-packetsub{{ i }}\" class=\"pl-2 mt-0 mb-0\">{{\r\n                                        field.name\r\n                                        }}</label> -->\r\n                                    </div>\r\n                                  </div>\r\n                                </ng-container>\r\n                              </p-panel>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </ng-container>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-8 col-12 pl-md-2 mb-3\">\r\n                  <div class=\"row col-12\">\r\n                    <div class=\"p-field col-4\" *ngIf=\"getselectedPage('ATPBDM')\">\r\n                      <div class=\"g-checkbox\">\r\n                        <input type=\"checkbox\" class=\"packetsub-cls mt-0\" (change)=\"ocrCheck($event)\"\r\n                          [checked]=\"isOCRChecked\" [(ngModel)]=\"isOCRChecked\" />\r\n                        <label for=\"ocr\" class=\"pl-2 mt-0 mb-0\">OCR</label>\r\n                      </div>\r\n\r\n                      <!-- <input type=\"checkbox\" class=\"packetsub-cls mt-0\" (change)=\"ocrCheck($event)\"\r\n                        [checked]=\"isOCRChecked\" [(ngModel)]=\"isOCRChecked\" />\r\n                      <label for=\"ocr\" class=\"pl-2 mt-0 mb-0\">OCR</label> -->\r\n                    </div>\r\n                    <div class=\"p-field col-4\" *ngIf=\"isOCRChecked && getselectedPage('ATPBDM')\">\r\n                      <label for=\"schema\" class=\"referral-form-labels mr-2\">select document type</label>\r\n                      <p-dropdown placeholder=\"select document type\" [options]=\"documentType\"\r\n                        (onChange)=\"selectedDocument($event)\" optionLabel=\"doc_name\" [(ngModel)]=\"selectedDocumentType\"\r\n                        optionValue=\"doc_name\">\r\n                      </p-dropdown>\r\n                    </div>\r\n                    <div class=\"p-field col-4 text-right\" *ngIf=\"getselectedPage('ATPBDM')\">\r\n                      <label for=\"schema\" class=\"referral-form-labels mr-2\">No of Columns </label>\r\n                      <p-dropdown placeholder=\"Select No of Columns\" [options]=\"nColumns\" optionLabel=\"key\"\r\n                        optionValue=\"key\" [(ngModel)]=\"noOfColumns\">\r\n                      </p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"documentaccess pt-0\">\r\n                    <div class=\"header px-2 py-2\">\r\n                      <label class=\"mb-0\">Selected Fields</label>\r\n                    </div>\r\n                    <hr class=\"m-0\" />\r\n                    <form [formGroup]=\"autoFieldMappingForm\">\r\n                      <div class=\"doc-body\" formArrayName=\"autoFieldMappingArray\" cdkDropList\r\n                        (cdkDropListDropped)=\"drop($event)\">\r\n                        <ng-container *ngFor=\"\r\n                            let errorItem of autoFieldMappingForm.controls['autoFieldMappingArray']['controls'];\r\n                            let j = index\r\n                          \" formGroupName=\"{{ j }}\">\r\n                          <div class=\"row userdata border\" cdkDrag>\r\n                            <div class=\"col-md-12 py-1 px-3\">\r\n                              <em class=\"fa-solid fa-grip-dots-vertical\"></em>\r\n                              <svg title=\"\" id=\"img{{ j }}\" width=\"8\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                                viewBox=\"0 0 320 512\">\r\n                                <path\r\n                                  d=\"M88 352C110.1 352 128 369.9 128 392V440C128 462.1 110.1 480 88 480H40C17.91 480 0 462.1 0 440V392C0 369.9 17.91 352 40 352H88zM280 352C302.1 352 320 369.9 320 392V440C320 462.1 302.1 480 280 480H232C209.9 480 192 462.1 192 440V392C192 369.9 209.9 352 232 352H280zM40 320C17.91 320 0 302.1 0 280V232C0 209.9 17.91 192 40 192H88C110.1 192 128 209.9 128 232V280C128 302.1 110.1 320 88 320H40zM280 192C302.1 192 320 209.9 320 232V280C320 302.1 302.1 320 280 320H232C209.9 320 192 302.1 192 280V232C192 209.9 209.9 192 232 192H280zM40 160C17.91 160 0 142.1 0 120V72C0 49.91 17.91 32 40 32H88C110.1 32 128 49.91 128 72V120C128 142.1 110.1 160 88 160H40zM280 32C302.1 32 320 49.91 320 72V120C320 142.1 302.1 160 280 160H232C209.9 160 192 142.1 192 120V72C192 49.91 209.9 32 232 32H280z\" />\r\n                              </svg>\r\n                              <label aria-labelledby=\"img{{ j }}\" class=\"pl-2 mb-0 mr-2\">{{\r\n                                errorItem?.value?.label\r\n                                }}</label>\r\n\r\n                              <div class=\"g-checkbox d-inline mr-1\">\r\n                                <input *ngIf=\"getselectedPage('BGP')\" type=\"checkbox\" formControlName=\"result\"\r\n                                  id=\"result{{ j }}\" class=\"packetsub-cls mt-0 required_ckbox\"\r\n                                  [checked]=\"errorItem?.value?.result\" />\r\n                                <label *ngIf=\"getselectedPage('BGP')\" for=\"result{{ j }}\"\r\n                                  aria-labelledby=\"result{{ j }}\" class=\"pl-2 mt-0 mb-0\">Result</label>\r\n                              </div>\r\n                              <div class=\"g-checkbox d-inline mr-1\">\r\n                                <input *ngIf=\"getselectedPage('BGP')\" type=\"checkbox\" formControlName=\"criteria\"\r\n                                  id=\"criteria{{ j }}\" class=\"packetsub-cls mt-0 required_ckbox\"\r\n                                  [checked]=\"errorItem?.value?.criteria\" />\r\n                                <label *ngIf=\"getselectedPage('BGP')\" for=\"criteria{{ j }}\"\r\n                                  aria-labelledby=\"criteria{{ j }}\" class=\"pl-2 mt-0 mb-0\">Criteria</label>\r\n                              </div>\r\n                              <p-dropdown *ngIf=\"getselectedPage('ATPBDM')\" styleClass=\"mr-2\" placeholder=\"Data Type\"\r\n                                [options]=\"fieldDatatype\" fieldKey=\"PAG_DES_GRID_FIELDS_SELECTED_FIELDS\"\r\n                                optionLabel=\"desc\" [disabled]=\"this.getDisabledDataType(j)\" formControlName=\"datatype\"\r\n                                optionValue=\"value\">\r\n                              </p-dropdown>\r\n                              <div class=\"g-checkbox d-inline mr-1\">\r\n                                <input type=\"checkbox\" *ngIf=\"getselectedPage('ATPBDM')\"\r\n                                  fieldKey=\"PAG_DES_GRID_FIELDS_REQUIRED_FIELDS\" id=\"required{{ j }}\"\r\n                                  class=\"packetsub-cls mt-0 required_ckbox\" formControlName=\"required\" />\r\n                                <label *ngIf=\"getselectedPage('ATPBDM')\" for=\"required{{ j }}\"\r\n                                  aria-labelledby=\"required{{ j }}\" class=\"pl-2 mt-0 mb-0\">Required</label>\r\n                              </div>\r\n                              <p-dropdown *ngIf=\"getselectedPage('ATPBDM') && isOCRChecked\" styleClass=\"ml-2\"\r\n                                placeholder=\"Field Name\" [options]=\"ocrFields\" optionLabel=\"label\"\r\n                                formControlName=\"ocrkey\" optionValue=\"attr\">\r\n                              </p-dropdown>\r\n                            </div>\r\n                          </div>\r\n                        </ng-container>\r\n                      </div>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-12 formicon\">\r\n                  <div class=\"d-flex justify-content-between\">\r\n                    <button class=\"btn btn-primary btncommon\" (click)=\"clearSelectedColumnFields()\">Clear All</button>\r\n                    <div class=\"text-right\">\r\n                      <button class=\"mr-2 btn btn-cancel\" fieldKey=\"PAG_DES_GRID_FIELDS_CANCEL\" (click)=\"cancel()\">\r\n                        Cancel\r\n                      </button>\r\n                      <button *ngIf=\"!isNewPage\" class=\"btn btn-primary btncommon\" (click)=\"skipToNextPage()\">\r\n                        Skip\r\n                      </button>\r\n                      <button class=\"btn btn-primary btncommon\" fieldKey=\"PAG_DES_GRID_FIELDS_NEXT\"\r\n                        (click)=\"saveTableField()\">\r\n                        Next\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </p-card>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>", styles: [":root{--background-color: #f8f8f8;--navigation: #fff;--primary: #0D3178;--checkbox-border: #D6D5D5;--text-dark: #000;--label-text: #0D3178;--hover-text: #fff;--bg-light: #fff;--forms: #fff;--nav-text: #696969;--light-gray: #696969;--material-icons: #0D3178;--highlight-list: #e3f2fd;--table-header: #f9f9f9;--table-odd: #f7f7f7;--table-border: #ddd;--table-hover: #dbf6ff;--table-odd-color: #f2fcff;--btn: #0D3178;--menu-panel: #032361;--menu-level2: #28447E;--border-trans: transparent;--btn-hover: #1258A7;--btn-dark: #0D3178;--dropdown-list: #fff;--btncancel: #0D3178;--primary-light: #1258A7;--primary-dark: #0D3178;--light-d-light: #fff;--ldl-text: #fff;--light-d-accent: #fff;--header-bg: #f7f7f7;--secondary-color: #0D3178;--menu-link: #1258A7;--menu-highlight: #0084d1;--sumbmenu-selected: #0084D1;--profile-bg: #f3f9f9;--disabled: #7A8EB5;--accordion-header: #F5F5F5;--input-label: #1F1F1F;--input-field: #4C4C4C;--ghost: #A2A2A2;--table-label: #f1f1f1;--error-msg: #DC0404;--menu-hover: #1258A7;--var-icon-font: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;--rocket-icon: \"/assets/images/rocket-ship.svg\";--base-font-size: 16px;--font-11: 11px;--font-12: 12px;--font-13: 13px;--font-14: 14px;--font-15: 15px;--font-16: 16px;--font-17: 17px;--font-18: 18px;--font-19: 19px;--font-20: 20px;--font-21: 21px;--font-24: 24px;--font-26: 26px}.item-selected{background:#cecece;color:#fff}.container{height:200px;display:flex;justify-content:space-evenly;align-items:center}.buttons-container{height:30%;display:flex;flex-direction:column;justify-content:space-evenly;margin:80px 0 0}.buttons-container button{padding:0 8px;margin:0 1px;height:32px;width:85px;border:1px solid #cecece}.buttons-container button.active{color:#fff!important;background:#387ee8;border:none}.buttons-container button.active i{color:#fff!important}.buttons-container button:first-child{border:1px solid #65c2ff;color:#65c2ff;position:relative}.buttons-container button:first-child i{color:#65c2ff;top:4px;right:16px;position:absolute}.buttons-container button:last-child{border:1px solid #284f93;color:#284f93;position:relative}.buttons-container button:last-child i{color:#284f93;top:4px;left:6px;position:absolute}.buttons-container .fa{font-size:20px}.listbox{border:1px solid #eee;height:300px!important;max-height:300px!important;overflow-y:auto;overflow-x:hidden;border-radius:2px}.listbox table tr td{padding:10px}.listbox::-webkit-scrollbar{width:4px!important;height:4px!important}.listbox::-webkit-scrollbar-track{background:#f6f6f6!important;border-radius:2px!important}.listbox::-webkit-scrollbar-corner{background:#f6f6f6!important}.listbox::-webkit-scrollbar-thumb{background:#ddd!important;border-radius:2px!important}.listbox::-webkit-scrollbar-thumb:hover{background:#999!important}.search-input-wrp{position:relative}.search-input-wrp .search-input{width:232px;height:24px;line-height:24px;border-bottom:1px solid #cacaca;border-top:0;border-left:0;border-right:0;padding:5px 0 4px 8px;border-radius:2px}.search-input-wrp .search-input-i{position:absolute;top:14px;right:19px}.col-light-blue{color:#65c2ff}.col-dark-blue{color:#284f93}.light-blue{background:#65c2ff;color:#fff;margin:0;padding:10px;text-align:center}.drk-blue{background:#284f93;color:#fff;margin:0;padding:10px;text-align:center}.query-textarea{height:200px}.grid-filed .p-card .p-card-content{padding:0}.grid-filed .documentaccess{border:solid 1px var(--table-border);border-radius:2px;padding:5px 0 0;background:var(--bg-light)}.grid-filed .documentaccess .header{background:var(--header-bg) 0% 0% no-repeat padding-box}.grid-filed .documentaccess .header label{color:var(--label-text);font-weight:600;font-size:var(--font-15)}.grid-filed .documentaccess .doc-body{height:100%}.grid-filed .documentaccess .row.userdata{margin:0 0 5px;padding:5px 0;cursor:pointer}.grid-filed .documentaccess .row.userdata:last-child{margin-bottom:0}.grid-filed .documentaccess .row.userdata .group-data .row.userdata:last-child{border-bottom:none}.grid-filed .documentaccess .row.userdata input{font-size:var(--base-font-size);accent-color:var(--primary)}.grid-filed .documentaccess .row.userdata label{cursor:pointer;display:initial;font-size:var(--font-14);font-weight:400;color:var(--input-label)}.grid-filed .documentaccess .selectAllcolumn label{cursor:pointer;display:initial;font-size:var(--base-font-size);font-weight:500;color:#444;-webkit-user-select:none;user-select:none}.grid-filed .documentaccess .row.userdata svg{opacity:.4;margin-top:-3px;fill:currentColor}.grid-filed .documentaccess.selectcolumn,.grid-filed .documentaccess.selectcolumn .doc-body{height:inherit}:host ::ng-deep .documentaccess .p-dropdown .p-dropdown-label{padding:6px}.required_ckbox{margin-left:5px}.p-input-icon-left .pi-search{position:absolute;left:8px;top:8px;z-index:2;display:block;text-align:center;pointer-events:none;color:var(--text-dark)}.clear-icon{position:absolute;right:10px;top:50%;transform:translateY(-50%);cursor:pointer}.gridSearch::-webkit-search-cancel-button{display:none}.gridSearch::-webkit-search-decoration,.gridSearch::-webkit-search-clear-button{display:none}:host ::ng-deep .p-panel.p-panel-toggleable .p-panel-header{font-weight:600;padding:.2rem 1rem}:host ::ng-deep .p-panel .p-panel-header{background:var(--header-bg);color:var(--label-text);border-color:var(--table-border);font-size:var(--font-15)}:host ::ng-deep .p-panel .p-panel-header .p-panel-header-icon{color:var(--ldl-text)}:host ::ng-deep .p-panel .p-panel-content{background:var(--bg-light);color:var(--text-dark);border-color:var(--table-border)}:host ::ng-deep .grid-filed .p-card .p-card-content{padding:0!important}:host ::ng-deep .grid-filed .datasection .p-fluid:last-child .p-field{margin-bottom:0}:host ::ng-deep .grid-filed .beforeshow .p-card-body,:host ::ng-deep .grid-filed .beforeshow .p-card-content{height:100%}:host ::ng-deep .grid-filed .beforeshow .pi-icon{margin-bottom:10px}:host ::ng-deep .grid-filed .beforeshow .pi-icon em{font-size:30px;font-weight:700;color:#ccc0e1}:host ::ng-deep .grid-filed .beforeshow p{font-size:var(--font-12);font-style:italic}\n"], dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i1.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { kind: "directive", type: i1.FormArrayName, selector: "[formArrayName]", inputs: ["formArrayName"] }, { kind: "directive", type: i5.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "directive", type: i6$1.Tooltip, selector: "[pTooltip]", inputs: ["tooltipPosition", "tooltipEvent", "appendTo", "positionStyle", "tooltipStyleClass", "tooltipZIndex", "escape", "showDelay", "hideDelay", "life", "positionTop", "positionLeft", "autoHide", "fitContent", "hideOnEscape", "pTooltip", "tooltipDisabled", "tooltipOptions"] }, { kind: "directive", type: i7.InputText, selector: "[pInputText]" }, { kind: "component", type: i9.Dropdown, selector: "p-dropdown", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }, { kind: "component", type: i10.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { kind: "component", type: i11.MultiSelect, selector: "p-multiSelect", inputs: ["id", "ariaLabel", "style", "styleClass", "panelStyle", "panelStyleClass", "inputId", "disabled", "readonly", "group", "filter", "filterPlaceHolder", "filterLocale", "overlayVisible", "tabindex", "appendTo", "dataKey", "name", "ariaLabelledBy", "displaySelectedLabel", "maxSelectedLabels", "selectionLimit", "selectedItemsLabel", "showToggleAll", "emptyFilterMessage", "emptyMessage", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "showHeader", "filterBy", "scrollHeight", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "filterMatchMode", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "display", "autocomplete", "showClear", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "defaultLabel", "placeholder", "options", "filterValue", "itemSize", "selectAll", "focusOnHover", "filterFields", "selectOnFocus", "autoOptionFocus"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onClear", "onPanelShow", "onPanelHide", "onLazyLoad", "onRemove", "onSelectAllChange"] }, { kind: "directive", type: i11$1.CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: i11$1.CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }, { kind: "directive", type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }, { kind: "component", type: i13.Panel, selector: "p-panel", inputs: ["toggleable", "header", "collapsed", "style", "styleClass", "iconPos", "expandIcon", "collapseIcon", "showHeader", "toggler", "transitionOptions"], outputs: ["collapsedChange", "onBeforeToggle", "onAfterToggle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: QueryParamsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-query-params', template: "<div class=\"grid-filed\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 mb-2\">\r\n      <div styleClass=\"rbac-card gridview w-100 h-100\">\r\n        <div class=\"strip_head toggleleft page-designer w-100 bg-white shadow-md d-none\">\r\n          <span class=\"report_head font-weight-bold p-2\">Select Form Fields</span>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-3 col-md-3 col-12 pr-md-1\">\r\n            <p-card styleClass=\"w-100 h-100 datasection\">\r\n              <div class=\"p-fluid p-formgrid row\">\r\n                <div class=\"p-field col-md-12 col-12\">\r\n                  <label for=\"schema\" class=\"referral-form-labels\">Schema\r\n                    <span class=\"requiredfield text-danger\">*</span>\r\n                  </label>\r\n                  <p-dropdown placeholder=\"Select Schema\" [options]=\"schemaList\" optionLabel=\"label\" optionValue=\"name\"\r\n                    [(ngModel)]=\"selectedSchema\" [filter]=\"true\" [resetFilterOnHide]=\"true\"\r\n                    (onHide)=\"resetDropdownList('schema')\" filterBy=\"name\" (keyup)=\"searchSchemaList($event)\"\r\n                    [showClear]=\"true\" fieldKey=\"PAG_DES_GRID_FIELDS_SELECT_SCHEMA\"\r\n                    (onChange)=\"getTables($event.value)\">\r\n                  </p-dropdown>\r\n                </div>\r\n              </div>\r\n              <div class=\"p-fluid p-formgrid row\">\r\n                <div class=\"p-field col-md-12 col-12\">\r\n                  <label for=\"schema\" class=\"referral-form-labels\">Table List\r\n                    <span class=\"requiredfield text-danger\">*</span>\r\n                  </label>\r\n                  <p-dropdown placeholder=\"Select Table\" [options]=\"tableList\" optionLabel=\"name\" optionValue=\"name\"\r\n                    fieldKey=\"PAG_DES_GRID_FIELDS_SELECT_TABLE\" [(ngModel)]=\"tableSelection\" [filter]=\"true\"\r\n                    [resetFilterOnHide]=\"true\" (onHide)=\"resetDropdownList('table')\" filterBy=\"name\"\r\n                    (keyup)=\"searchTableList($event)\" [showClear]=\"tableList && tableList?.length\"\r\n                    (onChange)=\"getTableFields($event.value,true)\">\r\n                  </p-dropdown>\r\n                </div>\r\n              </div>\r\n              <div class=\"p-fluid p-formgrid row\" *ngIf=\"\r\n                  selectedTable !== '' && (getselectedPage('ATPBDM') || getselectedPage('BGP') || getselectedPage('DR'))\r\n                \">\r\n                <div class=\"p-field col-md-12 col-12\">\r\n                  <label for=\"schema\" class=\"referral-form-labels\">Tables related to {{ this.selectedTable }}</label>\r\n                  <p-multiSelect placeholder=\"Select Related Tables\" [options]=\"relatedTableList\"\r\n                    (onChange)=\"getColumnsOfRelatedTables($event.value)\" [(ngModel)]=\"relatedTableSelection\"\r\n                    [resetFilterOnHide]=\"true\">\r\n                  </p-multiSelect>\r\n                </div>\r\n              </div>\r\n              <div class=\"p-fluid p-formgrid row\" *ngIf=\"\r\n                  selectedTable !== '' && (getselectedPage('ATPBDM') || getselectedPage('BGP') || getselectedPage('DR'))\r\n                \">\r\n                <div class=\"p-field col-md-12 col-12\">\r\n                  <div class=\"documentaccess pt-0\">\r\n                    <div class=\"header px-2 py-2\">\r\n                      <label class=\"mb-0\">Selected Related Tables</label>\r\n                    </div>\r\n                    <hr class=\"m-0\" />\r\n                    <div class=\"doc-body\">\r\n                      <ng-container *ngFor=\"let table of selectedRelatedTableList; let i = index\">\r\n                        <div class=\"row userdata border\">\r\n                          <div class=\"col-md-12 py-1 px-3\">\r\n                            <label aria-labelledby=\"related_table_img\" class=\"pl-2 mb-0 mr-2\">{{\r\n                              table.relatedtable\r\n                              }}</label>\r\n                            <ng-container *ngIf=\"getselectedPage('ATPBDM')\">\r\n                              <!-- <input type=\"checkbox\" id=\"showAsGrid{{ i }}\" class=\"packetsub-cls mt-0 required_ckbox\"\r\n                                [(ngModel)]=\"table.showDataGrid\" (change)=\"enableDataGrid($event, i)\" />\r\n                              <label for=\"showAsGrid{{ i }}\" aria-labelledby=\"showAsGrid{{ i }}\"\r\n                                class=\"pl-2 mt-0 mb-0\">Data Grid</label> -->\r\n\r\n                              <div class=\"g-checkbox\">\r\n                                <input type=\"checkbox\" id=\"showAsGrid{{ i }}\" class=\"packetsub-cls mt-0 required_ckbox\"\r\n                                  [(ngModel)]=\"table.showDataGrid\" (change)=\"enableDataGrid($event, i)\" />\r\n                                <label for=\"showAsGrid{{ i }}\" aria-labelledby=\"showAsGrid{{ i }}\"\r\n                                  class=\"pl-2 mt-0 mb-0\">Data Grid</label>\r\n                              </div>\r\n                            </ng-container>\r\n                          </div>\r\n                        </div>\r\n                      </ng-container>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </p-card>\r\n          </div>\r\n          <div class=\"col-md-9 col-12 pl-md-1\">\r\n            <p-card styleClass=\"w-100 h-100 beforeshow\" *ngIf=\"tableFieldList?.length < 1\">\r\n              <div class=\"d-flex align-items-center justify-content-center h-100 flex-column\">\r\n                <div class=\"pi-icon\"><em class=\"pi pi-database\"></em></div>\r\n                <p class=\"mb-0 text-muted\">No Schema and Table List selected!</p>\r\n              </div>\r\n            </p-card>\r\n            <p-card styleClass=\"w-100 h-100\" *ngIf=\"tableFieldList?.length > 0\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4 col-12 pr-md-2 mb-3\">\r\n                  <div class=\"documentaccess pt-0 selectcolumn\">\r\n                    <div class=\"header px-2 py-2\">\r\n                      <label class=\"mb-0\">Select Fields</label>\r\n                    </div>\r\n                    <hr class=\"m-0\" />\r\n                    <div class=\"doc-body\">\r\n                      <ng-container>\r\n                        <div class=\"row userdata mb-0\">\r\n                          <div class=\"col-md-12 group-data py-0 px-2\">\r\n                            <div class=\"my-2\">\r\n                              <div class=\"p-input-icon-left w-100\">\r\n                                <em class=\"pi pi-search\"></em>\r\n                                <input #gridSearchInput type=\"search\" id=\"gridSearch\" class=\"gridSearch form-control\"\r\n                                  pInputText title=\"Search\" (keyup)=\"searchColumnFields($event)\" />\r\n                                <em class=\"pi pi-times clear-icon\" (click)=\"clearSearch(gridSearchInput)\"\r\n                                  pTooltip=\"Clear search\" tooltipPosition=\"bottom\" *ngIf=\"gridSearchInput.value\"></em>\r\n                                <label class=\"sr-only\" for=\"gridSearch\" aria-labelledby=\"gridSearch\"\r\n                                  title=\"Grid Search\"></label>\r\n                              </div>\r\n                              <div class=\"col-md-12 py-0 px-3 d-flex align-items-center selectAllcolumn mt-2\">\r\n                                <div class=\"g-checkbox\">\r\n                                  <input type=\"checkbox\" #selectAllCheckBox id=\"selectAllcolumn\"\r\n                                    (change)=\"checkAllColumnFields($event)\" class=\"packetsub-cls mt-0\">\r\n                                  <label for=\"selectAllcolumn\" class=\"pl-2 mt-0 mb-0\">Select All</label>\r\n                                </div>\r\n                                <!-- <input type=\"checkbox\" #selectAllCheckBox id=\"selectAllcolumn\"\r\n                                  (change)=\"checkAllColumnFields($event)\" class=\"packetsub-cls mt-0\" />\r\n                                <label for=\"selectAllcolumn\" class=\"pl-2 mt-0 mb-0\">Select All</label> -->\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"max-h-selectcolumn\">\r\n                              <p-panel styleClass=\"mb-2\" [toggleable]=\"true\">\r\n                                <ng-template pTemplate=\"header\">\r\n                                  <span>{{ selectedTable }}</span>\r\n                                </ng-template>\r\n                                <ng-container *ngFor=\"let field of filteredtableFieldList; let i = index\">\r\n                                  <div class=\"row userdata border mb-0\"\r\n                                    (change)=\"selectedTableFields(field, field?.active)\">\r\n                                    <div class=\"col-md-12 py-0 px-3 d-flex align-items-center\">\r\n                                      <div class=\"g-checkbox\">\r\n                                        <input type=\"checkbox\" fieldKey=\"PAG_DES_GRID_FIELDS_SELECT_COLOUMN_FIELDS\"\r\n                                          id=\"packetsub{{ i }}\" [checked]=\"field?.active\" class=\"packetsub-cls mt-0\" />\r\n                                        <label for=\"packetsub{{ i }}\" class=\"pl-2 mt-0 mb-0\">{{ field.name }}</label>\r\n                                      </div>\r\n                                      <!-- <input type=\"checkbox\" fieldKey=\"PAG_DES_GRID_FIELDS_SELECT_COLOUMN_FIELDS\"\r\n                                        id=\"packetsub{{ i }}\" [checked]=\"field?.active\" class=\"packetsub-cls mt-0\" />\r\n                                      <label for=\"packetsub{{ i }}\" class=\"pl-2 mt-0 mb-0\">{{ field.name }}</label> -->\r\n                                    </div>\r\n                                  </div>\r\n                                </ng-container>\r\n                              </p-panel>\r\n                              <p-panel styleClass=\"mb-2\" *ngFor=\"let tableField of filteredrelatedtableFieldList\"\r\n                                [toggleable]=\"true\">\r\n                                <ng-template pTemplate=\"header\">\r\n                                  <span>{{ tableField.table }}</span>\r\n                                </ng-template>\r\n                                <ng-container *ngFor=\"let field of tableField.columns; let i = index\">\r\n                                  <div class=\"row userdata border mb-0\"\r\n                                    (change)=\"selectedRelatedTableFields(tableField.table, field, field?.active)\">\r\n                                    <div class=\"col-md-12 py-0 px-3 d-flex align-items-center\">\r\n                                      <div class=\"g-checkbox\">\r\n                                        <input type=\"checkbox\" id=\"related-packetsub{{ i }}\" [checked]=\"field?.active\"\r\n                                          class=\"packetsub-cls mt-0\" [disabled]=\"field?.disabled\" />\r\n                                        <label for=\"related-packetsub{{ i }}\" class=\"pl-2 mt-0 mb-0\">{{\r\n                                          field.name\r\n                                          }}</label>\r\n                                      </div>\r\n\r\n                                      <!-- <input type=\"checkbox\" id=\"related-packetsub{{ i }}\" [checked]=\"field?.active\"\r\n                                        class=\"packetsub-cls mt-0\" [disabled]=\"field?.disabled\" />\r\n                                      <label for=\"related-packetsub{{ i }}\" class=\"pl-2 mt-0 mb-0\">{{\r\n                                        field.name\r\n                                        }}</label> -->\r\n                                    </div>\r\n                                  </div>\r\n                                </ng-container>\r\n                              </p-panel>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </ng-container>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-8 col-12 pl-md-2 mb-3\">\r\n                  <div class=\"row col-12\">\r\n                    <div class=\"p-field col-4\" *ngIf=\"getselectedPage('ATPBDM')\">\r\n                      <div class=\"g-checkbox\">\r\n                        <input type=\"checkbox\" class=\"packetsub-cls mt-0\" (change)=\"ocrCheck($event)\"\r\n                          [checked]=\"isOCRChecked\" [(ngModel)]=\"isOCRChecked\" />\r\n                        <label for=\"ocr\" class=\"pl-2 mt-0 mb-0\">OCR</label>\r\n                      </div>\r\n\r\n                      <!-- <input type=\"checkbox\" class=\"packetsub-cls mt-0\" (change)=\"ocrCheck($event)\"\r\n                        [checked]=\"isOCRChecked\" [(ngModel)]=\"isOCRChecked\" />\r\n                      <label for=\"ocr\" class=\"pl-2 mt-0 mb-0\">OCR</label> -->\r\n                    </div>\r\n                    <div class=\"p-field col-4\" *ngIf=\"isOCRChecked && getselectedPage('ATPBDM')\">\r\n                      <label for=\"schema\" class=\"referral-form-labels mr-2\">select document type</label>\r\n                      <p-dropdown placeholder=\"select document type\" [options]=\"documentType\"\r\n                        (onChange)=\"selectedDocument($event)\" optionLabel=\"doc_name\" [(ngModel)]=\"selectedDocumentType\"\r\n                        optionValue=\"doc_name\">\r\n                      </p-dropdown>\r\n                    </div>\r\n                    <div class=\"p-field col-4 text-right\" *ngIf=\"getselectedPage('ATPBDM')\">\r\n                      <label for=\"schema\" class=\"referral-form-labels mr-2\">No of Columns </label>\r\n                      <p-dropdown placeholder=\"Select No of Columns\" [options]=\"nColumns\" optionLabel=\"key\"\r\n                        optionValue=\"key\" [(ngModel)]=\"noOfColumns\">\r\n                      </p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"documentaccess pt-0\">\r\n                    <div class=\"header px-2 py-2\">\r\n                      <label class=\"mb-0\">Selected Fields</label>\r\n                    </div>\r\n                    <hr class=\"m-0\" />\r\n                    <form [formGroup]=\"autoFieldMappingForm\">\r\n                      <div class=\"doc-body\" formArrayName=\"autoFieldMappingArray\" cdkDropList\r\n                        (cdkDropListDropped)=\"drop($event)\">\r\n                        <ng-container *ngFor=\"\r\n                            let errorItem of autoFieldMappingForm.controls['autoFieldMappingArray']['controls'];\r\n                            let j = index\r\n                          \" formGroupName=\"{{ j }}\">\r\n                          <div class=\"row userdata border\" cdkDrag>\r\n                            <div class=\"col-md-12 py-1 px-3\">\r\n                              <em class=\"fa-solid fa-grip-dots-vertical\"></em>\r\n                              <svg title=\"\" id=\"img{{ j }}\" width=\"8\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                                viewBox=\"0 0 320 512\">\r\n                                <path\r\n                                  d=\"M88 352C110.1 352 128 369.9 128 392V440C128 462.1 110.1 480 88 480H40C17.91 480 0 462.1 0 440V392C0 369.9 17.91 352 40 352H88zM280 352C302.1 352 320 369.9 320 392V440C320 462.1 302.1 480 280 480H232C209.9 480 192 462.1 192 440V392C192 369.9 209.9 352 232 352H280zM40 320C17.91 320 0 302.1 0 280V232C0 209.9 17.91 192 40 192H88C110.1 192 128 209.9 128 232V280C128 302.1 110.1 320 88 320H40zM280 192C302.1 192 320 209.9 320 232V280C320 302.1 302.1 320 280 320H232C209.9 320 192 302.1 192 280V232C192 209.9 209.9 192 232 192H280zM40 160C17.91 160 0 142.1 0 120V72C0 49.91 17.91 32 40 32H88C110.1 32 128 49.91 128 72V120C128 142.1 110.1 160 88 160H40zM280 32C302.1 32 320 49.91 320 72V120C320 142.1 302.1 160 280 160H232C209.9 160 192 142.1 192 120V72C192 49.91 209.9 32 232 32H280z\" />\r\n                              </svg>\r\n                              <label aria-labelledby=\"img{{ j }}\" class=\"pl-2 mb-0 mr-2\">{{\r\n                                errorItem?.value?.label\r\n                                }}</label>\r\n\r\n                              <div class=\"g-checkbox d-inline mr-1\">\r\n                                <input *ngIf=\"getselectedPage('BGP')\" type=\"checkbox\" formControlName=\"result\"\r\n                                  id=\"result{{ j }}\" class=\"packetsub-cls mt-0 required_ckbox\"\r\n                                  [checked]=\"errorItem?.value?.result\" />\r\n                                <label *ngIf=\"getselectedPage('BGP')\" for=\"result{{ j }}\"\r\n                                  aria-labelledby=\"result{{ j }}\" class=\"pl-2 mt-0 mb-0\">Result</label>\r\n                              </div>\r\n                              <div class=\"g-checkbox d-inline mr-1\">\r\n                                <input *ngIf=\"getselectedPage('BGP')\" type=\"checkbox\" formControlName=\"criteria\"\r\n                                  id=\"criteria{{ j }}\" class=\"packetsub-cls mt-0 required_ckbox\"\r\n                                  [checked]=\"errorItem?.value?.criteria\" />\r\n                                <label *ngIf=\"getselectedPage('BGP')\" for=\"criteria{{ j }}\"\r\n                                  aria-labelledby=\"criteria{{ j }}\" class=\"pl-2 mt-0 mb-0\">Criteria</label>\r\n                              </div>\r\n                              <p-dropdown *ngIf=\"getselectedPage('ATPBDM')\" styleClass=\"mr-2\" placeholder=\"Data Type\"\r\n                                [options]=\"fieldDatatype\" fieldKey=\"PAG_DES_GRID_FIELDS_SELECTED_FIELDS\"\r\n                                optionLabel=\"desc\" [disabled]=\"this.getDisabledDataType(j)\" formControlName=\"datatype\"\r\n                                optionValue=\"value\">\r\n                              </p-dropdown>\r\n                              <div class=\"g-checkbox d-inline mr-1\">\r\n                                <input type=\"checkbox\" *ngIf=\"getselectedPage('ATPBDM')\"\r\n                                  fieldKey=\"PAG_DES_GRID_FIELDS_REQUIRED_FIELDS\" id=\"required{{ j }}\"\r\n                                  class=\"packetsub-cls mt-0 required_ckbox\" formControlName=\"required\" />\r\n                                <label *ngIf=\"getselectedPage('ATPBDM')\" for=\"required{{ j }}\"\r\n                                  aria-labelledby=\"required{{ j }}\" class=\"pl-2 mt-0 mb-0\">Required</label>\r\n                              </div>\r\n                              <p-dropdown *ngIf=\"getselectedPage('ATPBDM') && isOCRChecked\" styleClass=\"ml-2\"\r\n                                placeholder=\"Field Name\" [options]=\"ocrFields\" optionLabel=\"label\"\r\n                                formControlName=\"ocrkey\" optionValue=\"attr\">\r\n                              </p-dropdown>\r\n                            </div>\r\n                          </div>\r\n                        </ng-container>\r\n                      </div>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-12 formicon\">\r\n                  <div class=\"d-flex justify-content-between\">\r\n                    <button class=\"btn btn-primary btncommon\" (click)=\"clearSelectedColumnFields()\">Clear All</button>\r\n                    <div class=\"text-right\">\r\n                      <button class=\"mr-2 btn btn-cancel\" fieldKey=\"PAG_DES_GRID_FIELDS_CANCEL\" (click)=\"cancel()\">\r\n                        Cancel\r\n                      </button>\r\n                      <button *ngIf=\"!isNewPage\" class=\"btn btn-primary btncommon\" (click)=\"skipToNextPage()\">\r\n                        Skip\r\n                      </button>\r\n                      <button class=\"btn btn-primary btncommon\" fieldKey=\"PAG_DES_GRID_FIELDS_NEXT\"\r\n                        (click)=\"saveTableField()\">\r\n                        Next\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </p-card>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>", styles: [":root{--background-color: #f8f8f8;--navigation: #fff;--primary: #0D3178;--checkbox-border: #D6D5D5;--text-dark: #000;--label-text: #0D3178;--hover-text: #fff;--bg-light: #fff;--forms: #fff;--nav-text: #696969;--light-gray: #696969;--material-icons: #0D3178;--highlight-list: #e3f2fd;--table-header: #f9f9f9;--table-odd: #f7f7f7;--table-border: #ddd;--table-hover: #dbf6ff;--table-odd-color: #f2fcff;--btn: #0D3178;--menu-panel: #032361;--menu-level2: #28447E;--border-trans: transparent;--btn-hover: #1258A7;--btn-dark: #0D3178;--dropdown-list: #fff;--btncancel: #0D3178;--primary-light: #1258A7;--primary-dark: #0D3178;--light-d-light: #fff;--ldl-text: #fff;--light-d-accent: #fff;--header-bg: #f7f7f7;--secondary-color: #0D3178;--menu-link: #1258A7;--menu-highlight: #0084d1;--sumbmenu-selected: #0084D1;--profile-bg: #f3f9f9;--disabled: #7A8EB5;--accordion-header: #F5F5F5;--input-label: #1F1F1F;--input-field: #4C4C4C;--ghost: #A2A2A2;--table-label: #f1f1f1;--error-msg: #DC0404;--menu-hover: #1258A7;--var-icon-font: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;--rocket-icon: \"/assets/images/rocket-ship.svg\";--base-font-size: 16px;--font-11: 11px;--font-12: 12px;--font-13: 13px;--font-14: 14px;--font-15: 15px;--font-16: 16px;--font-17: 17px;--font-18: 18px;--font-19: 19px;--font-20: 20px;--font-21: 21px;--font-24: 24px;--font-26: 26px}.item-selected{background:#cecece;color:#fff}.container{height:200px;display:flex;justify-content:space-evenly;align-items:center}.buttons-container{height:30%;display:flex;flex-direction:column;justify-content:space-evenly;margin:80px 0 0}.buttons-container button{padding:0 8px;margin:0 1px;height:32px;width:85px;border:1px solid #cecece}.buttons-container button.active{color:#fff!important;background:#387ee8;border:none}.buttons-container button.active i{color:#fff!important}.buttons-container button:first-child{border:1px solid #65c2ff;color:#65c2ff;position:relative}.buttons-container button:first-child i{color:#65c2ff;top:4px;right:16px;position:absolute}.buttons-container button:last-child{border:1px solid #284f93;color:#284f93;position:relative}.buttons-container button:last-child i{color:#284f93;top:4px;left:6px;position:absolute}.buttons-container .fa{font-size:20px}.listbox{border:1px solid #eee;height:300px!important;max-height:300px!important;overflow-y:auto;overflow-x:hidden;border-radius:2px}.listbox table tr td{padding:10px}.listbox::-webkit-scrollbar{width:4px!important;height:4px!important}.listbox::-webkit-scrollbar-track{background:#f6f6f6!important;border-radius:2px!important}.listbox::-webkit-scrollbar-corner{background:#f6f6f6!important}.listbox::-webkit-scrollbar-thumb{background:#ddd!important;border-radius:2px!important}.listbox::-webkit-scrollbar-thumb:hover{background:#999!important}.search-input-wrp{position:relative}.search-input-wrp .search-input{width:232px;height:24px;line-height:24px;border-bottom:1px solid #cacaca;border-top:0;border-left:0;border-right:0;padding:5px 0 4px 8px;border-radius:2px}.search-input-wrp .search-input-i{position:absolute;top:14px;right:19px}.col-light-blue{color:#65c2ff}.col-dark-blue{color:#284f93}.light-blue{background:#65c2ff;color:#fff;margin:0;padding:10px;text-align:center}.drk-blue{background:#284f93;color:#fff;margin:0;padding:10px;text-align:center}.query-textarea{height:200px}.grid-filed .p-card .p-card-content{padding:0}.grid-filed .documentaccess{border:solid 1px var(--table-border);border-radius:2px;padding:5px 0 0;background:var(--bg-light)}.grid-filed .documentaccess .header{background:var(--header-bg) 0% 0% no-repeat padding-box}.grid-filed .documentaccess .header label{color:var(--label-text);font-weight:600;font-size:var(--font-15)}.grid-filed .documentaccess .doc-body{height:100%}.grid-filed .documentaccess .row.userdata{margin:0 0 5px;padding:5px 0;cursor:pointer}.grid-filed .documentaccess .row.userdata:last-child{margin-bottom:0}.grid-filed .documentaccess .row.userdata .group-data .row.userdata:last-child{border-bottom:none}.grid-filed .documentaccess .row.userdata input{font-size:var(--base-font-size);accent-color:var(--primary)}.grid-filed .documentaccess .row.userdata label{cursor:pointer;display:initial;font-size:var(--font-14);font-weight:400;color:var(--input-label)}.grid-filed .documentaccess .selectAllcolumn label{cursor:pointer;display:initial;font-size:var(--base-font-size);font-weight:500;color:#444;-webkit-user-select:none;user-select:none}.grid-filed .documentaccess .row.userdata svg{opacity:.4;margin-top:-3px;fill:currentColor}.grid-filed .documentaccess.selectcolumn,.grid-filed .documentaccess.selectcolumn .doc-body{height:inherit}:host ::ng-deep .documentaccess .p-dropdown .p-dropdown-label{padding:6px}.required_ckbox{margin-left:5px}.p-input-icon-left .pi-search{position:absolute;left:8px;top:8px;z-index:2;display:block;text-align:center;pointer-events:none;color:var(--text-dark)}.clear-icon{position:absolute;right:10px;top:50%;transform:translateY(-50%);cursor:pointer}.gridSearch::-webkit-search-cancel-button{display:none}.gridSearch::-webkit-search-decoration,.gridSearch::-webkit-search-clear-button{display:none}:host ::ng-deep .p-panel.p-panel-toggleable .p-panel-header{font-weight:600;padding:.2rem 1rem}:host ::ng-deep .p-panel .p-panel-header{background:var(--header-bg);color:var(--label-text);border-color:var(--table-border);font-size:var(--font-15)}:host ::ng-deep .p-panel .p-panel-header .p-panel-header-icon{color:var(--ldl-text)}:host ::ng-deep .p-panel .p-panel-content{background:var(--bg-light);color:var(--text-dark);border-color:var(--table-border)}:host ::ng-deep .grid-filed .p-card .p-card-content{padding:0!important}:host ::ng-deep .grid-filed .datasection .p-fluid:last-child .p-field{margin-bottom:0}:host ::ng-deep .grid-filed .beforeshow .p-card-body,:host ::ng-deep .grid-filed .beforeshow .p-card-content{height:100%}:host ::ng-deep .grid-filed .beforeshow .pi-icon{margin-bottom:10px}:host ::ng-deep .grid-filed .beforeshow .pi-icon em{font-size:30px;font-weight:700;color:#ccc0e1}:host ::ng-deep .grid-filed .beforeshow p{font-size:var(--font-12);font-style:italic}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.UntypedFormBuilder }, { type: i0.ChangeDetectorRef }, { type: i2.ActivatedRoute }, { type: DataStoreService }, { type: i2.Router }]; }, propDecorators: { selectAllCheckBox: [{
                type: ViewChildren,
                args: ['selectAllCheckBox']
            }], isDynamicSearchBaseQuery: [{
                type: Input
            }], isGridPage: [{
                type: Input
            }], tableData: [{
                type: Input
            }], formDataChanged: [{
                type: Output
            }] } });

class RibbonTabConfigComponent {
    _formBuilder;
    _alert;
    _route;
    _router;
    _alertService;
    _storeservice;
    tabsForm;
    formData;
    id = '';
    pageTypeList;
    dropdownService;
    pageList;
    filteredPageList;
    pageBuilderAddService;
    pageBuilderService;
    authService;
    orgSubs;
    orgId;
    allFieldList = [];
    parentFieldList = [];
    pageErrorShow = false;
    tabErrorShow = false;
    ribbonpageList;
    taborientationList;
    iconList;
    basicPageInformation;
    localStore;
    RBACORG;
    constructor(injector, _formBuilder, _alert, _route, _router, _alertService, _storeservice) {
        this._formBuilder = _formBuilder;
        this._alert = _alert;
        this._route = _route;
        this._router = _router;
        this._alertService = _alertService;
        this._storeservice = _storeservice;
        this.pageBuilderAddService = injector.get(PageBuilderAddService);
        this.dropdownService = injector.get(CommonDropdownsService);
        this.pageBuilderService = injector.get(PageBuilderService$1);
        this.authService = injector.get(AuthService);
        this.localStore = injector.get(LocalService);
        this.id = this._route.snapshot.parent.paramMap.get('id');
        this.orgSubs = this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.RBACORG = res['RBACORG'];
                this.orgId = parseInt(this.RBACORG['orgID']);
                if (this.orgId) {
                    this.getAllPages();
                }
            }
        });
        const iconArray = AppConstants.iconList;
        this.iconList = iconArray.sort((a, b) => a.label.localeCompare(b.label));
        this.basicPageInformation = this.localStore.getObj('PAGEDESIGN_BASICINFO');
    }
    ngOnInit() {
        if (!this.id) {
            const validation = this.validationBasicInfo();
            if (!validation) {
                this._router.navigate(['/pages/page-design/add/basic-info'], { relativeTo: this._route });
                return this._alert.error('Please fill in all the required fields.');
            }
        }
        this.initTabConfigForm();
        this.loadDropDowns();
    }
    validationBasicInfo() {
        if (!this.basicPageInformation.pagename ||
            !this.basicPageInformation.pagetype ||
            !this.basicPageInformation.description) {
            return false;
        }
        else {
            return true;
        }
    }
    loadDropDowns() {
        this.dropdownService.getDropDownValues('page').subscribe(result => {
            this.pageTypeList = result['data'];
        });
        this.dropdownService.getDropDownValues('tabOrientation').subscribe(result => {
            this.taborientationList = result['data'];
        });
    }
    ngOnDestroy() {
        this.orgSubs.unsubscribe();
    }
    setCurrentFormData() {
        this.pageBuilderAddService.currentFormData.subscribe((data) => {
            this.formData = data;
            const tabConfig = this.formData ? (this.formData?.tabconfig ? JSON.parse(this.formData?.tabconfig) : null) : null;
            this.tabsForm.get('ribbonid').setValue(this.formData.ribbonid);
            this.tabsForm.get('taborientation').setValue(this.formData.taborientation);
            if (tabConfig && tabConfig.length) {
                const tabsControl = this.tabsForm.get('tabs');
                tabsControl.clear(); // Clear existing tabs before adding new ones
                tabConfig.forEach(val => {
                    const childTabs = this._formBuilder.array([]);
                    if (val.tabs && val.tabs.length) {
                        val.tabs.forEach(d => {
                            childTabs.push(this._formBuilder.group({
                                id: d.id,
                                name: d.name,
                                icon: d.icon,
                                tabs: d.tabs
                            }));
                        });
                    }
                    tabsControl.push(this._formBuilder.group({
                        id: val.id,
                        name: val.name,
                        icon: val.icon,
                        tabs: childTabs
                    }));
                });
            }
        });
    }
    initTabConfigForm() {
        this.tabsForm = this._formBuilder.group({
            ribbonid: [''],
            taborientation: [''],
            tabs: this._formBuilder.array([this.addTabGroup()])
        });
    }
    getAllPages() {
        this.pageBuilderAddService.getOrgList(this.orgId).subscribe((res) => {
            if (res) {
                this.pageList = res?.data?.data?.filter(page => page?.pageTypeDetails?.key !== 'BTP' &&
                    page?.pageTypeDetails?.key !== 'RBTP' &&
                    page?.pageTypeDetails?.key !== 'DR');
                this.ribbonpageList = res?.data?.data?.filter(page => page?.pageTypeDetails?.key === 'DR');
                this.setCurrentFormData();
            }
        }, _err => this._alert.error(AppConstants.errorMessage));
    }
    addTabGroup() {
        return this._formBuilder.group({
            name: ['', [Validators.required]],
            id: ['', [Validators.required]],
            icon: [],
            tableName: [''],
            tabs: this._formBuilder.array([])
        });
    }
    addTab() {
        this.tabs.push(this.addTabGroup());
        this.tabErrorShow = false;
        this.pageErrorShow = false;
    }
    get tabs() {
        return this.tabsForm.get('tabs');
    }
    /**
     * Method to Remove tab
     * @param _index index of the tab to be removed
     */
    removeTab(_index) {
        const tabs = this.tabsForm.get('tabs');
        tabs.removeAt(_index);
    }
    cancel() {
        this.pageBuilderAddService.returnToList();
    }
    saveTabs(publish) {
        const validation = this.validationPage();
        if (validation) {
            const tabs = this.tabsForm.getRawValue().tabs;
            this.tabErrorShow = true;
            this.pageErrorShow = true;
            tabs.forEach((tab) => {
                tab.type = this.pageList.length && this.pageList.filter(page => page.id === tab.id)[0]?.pageTypeDetails?.key;
                tab.tableName = JSON.parse(this.pageList.length && this.pageList.filter(page => page.id === tab.id)[0]?.activeVersion?.tableschemaconfig)?.tablelist;
                tab.tabs.forEach((childtab) => {
                    childtab.type = this.pageList.length && this.pageList.filter(page => page.id === childtab.id)[0]?.pageTypeDetails?.key;
                    childtab.tableName = JSON.parse(this.pageList.length && this.pageList.filter(page => page.id === childtab.id)[0]?.activeVersion?.tableschemaconfig)?.tablelist;
                });
            });
            this.formData.tabconfig = JSON.stringify(tabs);
            this.formData.ribbonid = this.tabsForm.get('ribbonid').value;
            this.formData.taborientation = this.tabsForm.get('taborientation').value;
            console.log(this.formData);
            if (!this.id) {
                this.formData.published = publish;
                this.pageBuilderAddService.createPage(this.formData).subscribe(result => {
                    const data = result['data'];
                    this._router.navigate([`pages/page-design/versions/${data.id}`]);
                    if (publish) {
                        this._alert.success(`Tab Page Version ${data.version || data.activeVersion.version}  is published successfully`);
                    }
                    else {
                        this._alert.success('Tab Page added successfully');
                    }
                });
            }
            else {
                const formDetails = this.formData;
                formDetails.id = this.id;
                formDetails.published = publish;
                this.pageBuilderService.updatePageVersion(this.id, formDetails).subscribe(() => {
                    this._router.navigate([`pages/page-design/versions/${formDetails.pageid}`]);
                    this._alert.success('Tab Page updated successfully');
                });
            }
        }
        else {
            this._alertService.error('Please fill all mandatory fields');
        }
    }
    validationPage() {
        if (!this.tabsForm.value.taborientation || !this.tabsForm.value.ribbonid) {
            return false;
        }
        else {
            return true;
        }
    }
    addChildTab(index) {
        this.childTabs(index).push(this.addTabGroup());
    }
    childTabs(tabIndex) {
        return this.tabs.at(tabIndex).get('tabs');
    }
    removeChildTab(tabIndex, childIndex) {
        this.childTabs(tabIndex).removeAt(childIndex);
    }
    dropItem(event) {
        if (event.container === event.previousContainer) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RibbonTabConfigComponent, deps: [{ token: i0.Injector }, { token: i1.UntypedFormBuilder }, { token: AlertService }, { token: i2.ActivatedRoute }, { token: i2.Router }, { token: AlertService }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: RibbonTabConfigComponent, selector: "app-ribbon-tab-config", ngImport: i0, template: "<div class=\"page-design-basic-info\">\r\n  <p-card styleClass=\"rbac-card w-100 mb-2\">\r\n    <div class=\"strip_head page-designer toggleleft\">\r\n      <span class=\"report_head font-weight-bold\">Ribbon Tab Configuration</span>\r\n    </div>\r\n    <div class=\"p-fluid\">\r\n      <div class=\"\">\r\n        <form [formGroup]=\"tabsForm\">\r\n          <div class=\"row mb-2\">\r\n            <div class=\"p-field col-12 col-md-6\">\r\n              <label for=\"ribbonpage\" class=\"referral-form-labels\">Ribbon Page\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <p-dropdown [options]=\"ribbonpageList\" placeholder=\"Select Ribbon Page\" id=\"ribbonpagetype\"\r\n                optionLabel=\"activeVersion.pagename\" fieldKey=\"PAG_DES_RIBBON_TAB_CONFIG_RIBBON_PAGE\" optionValue=\"id\"\r\n                formControlName=\"ribbonid\" [filter]=\"true\" [required]=\"true\">\r\n              </p-dropdown>\r\n              <div *ngIf=\"tabsForm.controls['ribbonid'].errors && tabsForm.controls['ribbonid'].touched\">\r\n                <div class=\"p-error block mt-1\">Ribbon Page is required </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"p-field col-12 col-md-6\">\r\n              <label for=\"taborientation\" class=\"referral-form-labels\">Tab Orientation\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <p-dropdown [options]=\"taborientationList\" placeholder=\"Select Page Type\" id=\"pagetype\"\r\n                optionLabel=\"lookupvalue\" optionValue=\"lookupkey\" formControlName=\"taborientation\"\r\n                fieldKey=\"PAG_DES_RIBBON_TAB_CONFIG_TAB_ORIENTATION\" [required]=\"true\">\r\n              </p-dropdown>\r\n              <div *ngIf=\"tabsForm.controls['taborientation'].errors && tabsForm.controls['taborientation'].touched\">\r\n                <div class=\"p-error block mt-1\">Tab Orientation is required </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"strip_head toggleleft page-designer d-flex justify-content-between mb-4\">\r\n            <span class=\"report_head font-weight-bold\"></span>\r\n            <button class=\"btn btn-primary\" fieldKey=\"PAG_DES_RIBBON_TAB_CONFIG_ADD_TAB\" (click)=\"addTab()\">\r\n              <em class=\"fa fa-plus\" aria-hidden=\"true\"></em> Add Tab\r\n            </button>\r\n          </div>\r\n          <div class=\"dragBoxtable\">\r\n            <div formArrayName=\"tabs\" class=\"cdkDropList-group\" cdkDropList cdkDropListGroup (cdkDropListDropped)=\"dropItem($event)\"\r\n            [cdkDropListData]=\"tabs.controls\">\r\n              <div *cdkDragPlaceholder></div>\r\n              <div class=\"mb-3\" *ngFor=\"let item of tabs.controls; let i = index\" [cdkDragData]=\"item\" [formGroupName]=\"i\" cdkDrag>\r\n                <div class=\"row my-2\">\r\n                  <div class=\"col-lg-1 pt-1\">\r\n                    <label class=\"d-block\">&#160;</label>\r\n                    <div class=\"drag-icon\">\r\n                      <svg title=\"\" id=\"img{{ i }}\" width=\"8\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\">\r\n                        <path\r\n                          d=\"M88 352C110.1 352 128 369.9 128 392V440C128 462.1 110.1 480 88 480H40C17.91 480 0 462.1 0 440V392C0 369.9 17.91 352 40 352H88zM280 352C302.1 352 320 369.9 320 392V440C320 462.1 302.1 480 280 480H232C209.9 480 192 462.1 192 440V392C192 369.9 209.9 352 232 352H280zM40 320C17.91 320 0 302.1 0 280V232C0 209.9 17.91 192 40 192H88C110.1 192 128 209.9 128 232V280C128 302.1 110.1 320 88 320H40zM280 192C302.1 192 320 209.9 320 232V280C320 302.1 302.1 320 280 320H232C209.9 320 192 302.1 192 280V232C192 209.9 209.9 192 232 192H280zM40 160C17.91 160 0 142.1 0 120V72C0 49.91 17.91 32 40 32H88C110.1 32 128 49.91 128 72V120C128 142.1 110.1 160 88 160H40zM280 32C302.1 32 320 49.91 320 72V120C320 142.1 302.1 160 280 160H232C209.9 160 192 142.1 192 120V72C192 49.91 209.9 32 232 32H280z\" />\r\n                      </svg>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-4 col-md-6 col-12\">\r\n                    <label class=\"d-block\">Tab Name</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"name\"\r\n                      fieldKey=\"PAG_DES_RIBBON_TAB_CONFIG_TAB_NAME\" placeholder=\"Enter Tab Name\" pInputText required />\r\n                    <div\r\n                      *ngIf=\"tabErrorShow ? item.get('name').invalid : item.get('name').errors && item.get('name').touched\">\r\n                      <small class=\"p-error block\">Tab Name is required </small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-2 col-md-6 col-12\">\r\n                    <label class=\"d-block\">Icon</label>\r\n                    <p-dropdown [options]=\"iconList\" styleClass=\"icon-dropdown\" formControlName=\"icon\" [filter]=\"true\"\r\n                      optionLabel=\"label\" optionValue=\"value\" [showClear]=\"true\" placeholder=\"Select Icon\"\r\n                      fieldKey=\"PAG_DES_RIBBON_TAB_CONFIG_TAB_NAME\">\r\n                      <ng-template let-selectedItem pTemplate=\"selectedItem\">\r\n                        <div pTooltip=\"{{selectedItem.label}}\" tooltipPosition=\"top\"\r\n                          class=\"d-flex flex-row align-items-center gap-2\" *ngIf=\"selectedItem.value\">\r\n                          <span class=\"material-symbols-outlined userempty ml-0\">{{ selectedItem.value }}</span>\r\n                          <div class=\"text-truncate\">{{ selectedItem.label }}</div>\r\n                        </div>\r\n                      </ng-template>\r\n                      <ng-template let-icon pTemplate=\"item\">\r\n                        <div class=\"d-flex flex-row align-items-start gap-2\">\r\n                          <span class=\"material-symbols-outlined userempty ml-0\">{{ icon.value }}</span>\r\n                          <div>{{ icon.label }}</div>\r\n                        </div>\r\n                      </ng-template>\r\n                    </p-dropdown>\r\n                  </div>\r\n                  <div class=\"col-lg-4 col-md-6 col-12\">\r\n                    <label class=\"d-block\">Page</label>\r\n                    <p-dropdown [options]=\"pageList\" placeholder=\"Select Page\" id=\"pagetype\"\r\n                      optionLabel=\"activeVersion.pagename\" fieldKey=\"PAG_DES_RIBBON_TAB_CONFIG_SELECT_PAGE\"\r\n                      optionValue=\"id\" formControlName=\"id\" [filter]=\"true\" [required]=\"true\"></p-dropdown>\r\n                    <div\r\n                      *ngIf=\"pageErrorShow ? item.get('id').invalid : item.get('id').errors && item.get('id').touched\">\r\n                      <small class=\"p-error block\">Page is required </small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-1 text-left pt-1\">\r\n                    <label class=\"d-block\">&#160;</label>\r\n                    <a href=\"javascript:void(0)\" class=\"mr-2 text-primary trash-align\" title=\"Add Child Tab\"\r\n                      fieldKey=\"PAG_DES_RIBBON_TAB_CONFIG_ADD_TAB\"><em class=\"pi pi-plus\"\r\n                        (click)=\"addChildTab(i)\"></em></a>\r\n                    <a href=\"javascript:void(0)\" class=\"mr-2 text-danger trash-align\" title=\"Delete\"\r\n                      fieldKey=\"PAG_DES_RIBBON_TAB_CONFIG_DELETE\" *ngIf=\"tabs.controls.length > 1\"><em\r\n                        class=\"pi pi-trash\" (click)=\"removeTab(i)\"></em></a>\r\n                  </div>\r\n                </div>\r\n                <!-- Begin of 2nd level Tab configuration -->\r\n                <div formArrayName=\"tabs\" class=\"childTabs\">\r\n                  <div cdkDropList (cdkDropListDropped)=\"dropItem($event)\"\r\n                    [cdkDropListData]=\"childTabs(i).controls\" [id]=\"i\">\r\n                    <div class=\"example-custom-placeholder\" *cdkDragPlaceholder></div>\r\n                    <div *ngFor=\"let childitem of childTabs(i).controls; let childTabIndex = index\"\r\n                      [formGroupName]=\"childTabIndex\" cdkDrag [cdkDragData]=\"childitem\">\r\n                      <div class=\"row my-2\">\r\n                        <div class=\"col-lg-1 pt-1\">\r\n                          <label class=\"d-block\">&#160;</label>\r\n                          <div class=\"drag-icon\">\r\n                            <svg title=\"\" id=\"img{{ childTabIndex }}\" width=\"8\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                              viewBox=\"0 0 320 512\">\r\n                              <path\r\n                                d=\"M88 352C110.1 352 128 369.9 128 392V440C128 462.1 110.1 480 88 480H40C17.91 480 0 462.1 0 440V392C0 369.9 17.91 352 40 352H88zM280 352C302.1 352 320 369.9 320 392V440C320 462.1 302.1 480 280 480H232C209.9 480 192 462.1 192 440V392C192 369.9 209.9 352 232 352H280zM40 320C17.91 320 0 302.1 0 280V232C0 209.9 17.91 192 40 192H88C110.1 192 128 209.9 128 232V280C128 302.1 110.1 320 88 320H40zM280 192C302.1 192 320 209.9 320 232V280C320 302.1 302.1 320 280 320H232C209.9 320 192 302.1 192 280V232C192 209.9 209.9 192 232 192H280zM40 160C17.91 160 0 142.1 0 120V72C0 49.91 17.91 32 40 32H88C110.1 32 128 49.91 128 72V120C128 142.1 110.1 160 88 160H40zM280 32C302.1 32 320 49.91 320 72V120C320 142.1 302.1 160 280 160H232C209.9 160 192 142.1 192 120V72C192 49.91 209.9 32 232 32H280z\" />\r\n                            </svg>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4\">\r\n                          <label class=\"d-block\">Tab Name</label>\r\n                          <input type=\"text\" class=\"form-control\" formControlName=\"name\"\r\n                            fieldKey=\"PAG_DES_RIBBON_TAB_CONFIG_TAB_NAME\" placeholder=\"Enter Tab Name\" pInputText\r\n                            required />\r\n                          <div\r\n                            *ngIf=\"tabErrorShow ? childitem.get('name').invalid : childitem.get('name').errors && childitem.get('name').touched\">\r\n                            <small class=\"p-error block\">Tab Name is required </small>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-lg-3\">\r\n                          <label class=\"d-block\">Icon</label>\r\n                          <p-dropdown [options]=\"iconList\" styleClass=\"icon-dropdown\" formControlName=\"icon\"\r\n                            [filter]=\"true\" optionLabel=\"label\" optionValue=\"value\" [showClear]=\"true\"\r\n                            placeholder=\"Select Icon\" fieldKey=\"PAG_DES_RIBBON_TAB_CONFIG_TAB_NAME\">\r\n                            <ng-template let-selectedItem pTemplate=\"selectedItem\">\r\n                              <div pTooltip=\"{{selectedItem.label}}\" tooltipPosition=\"top\"\r\n                                class=\"d-flex flex-row align-items-center gap-2\" *ngIf=\"selectedItem.value\">\r\n                                <span class=\"material-symbols-outlined userempty ml-0\">{{ selectedItem.value }}</span>\r\n                                <div class=\"text-truncate\">{{ selectedItem.label }}</div>\r\n                              </div>\r\n                            </ng-template>\r\n                            <ng-template let-icon pTemplate=\"item\">\r\n                              <div class=\"d-flex flex-row align-items-start gap-2\">\r\n                                <span class=\"material-symbols-outlined userempty ml-0\">{{ icon.value }}</span>\r\n                                <div>{{ icon.label }}</div>\r\n                              </div>\r\n                            </ng-template>\r\n                          </p-dropdown>\r\n                        </div>\r\n                        <div class=\"col-lg-3\">\r\n                          <label class=\"d-block\">Page</label>\r\n                          <p-dropdown [options]=\"pageList\" placeholder=\"Select Page\" id=\"pagetype\"\r\n                            optionLabel=\"activeVersion.pagename\" fieldKey=\"PAG_DES_RIBBON_TAB_CONFIG_SELECT_PAGE\"\r\n                            optionValue=\"id\" formControlName=\"id\" [filter]=\"true\" [required]=\"true\"></p-dropdown>\r\n                          <div\r\n                            *ngIf=\"pageErrorShow ? childitem.get('id').invalid : childitem.get('id').errors && childitem.get('id').touched\">\r\n                            <small class=\"p-error block\">Page is required </small>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-lg-1 text-left\">\r\n                          <label class=\"d-block\">&#160;</label>\r\n                          <a href=\"javascript:void(0)\" class=\"mr-2 text-danger trash-align\" title=\"Delete\"\r\n                            fieldKey=\"PAG_DES_RIBBON_TAB_CONFIG_DELETE\"><em class=\"pi pi-trash\"\r\n                              (click)=\"removeChildTab(i, childTabIndex)\"></em></a>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- End of 2nd level Tab configuration -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </p-card>\r\n  <div class=\"formicon mt-3 text-right\">\r\n    <button class=\"mb-2 mr-2 btn btn-cancel\" (click)=\"cancel()\">Cancel</button>\r\n    <button class=\"mb-2 mr-2 btn btn-primary btncommon\" fieldKey=\"PAG_DES_RIBBON_TAB_CONFIG_PUBLISH\"\r\n      (click)=\"saveTabs(true)\">\r\n      Publish\r\n    </button>\r\n    <button class=\"mb-2 btn btn-primary btncommon\" fieldKey=\"PAG_DES_RIBBON_TAB_CONFIG_SAVE_TABS\"\r\n      (click)=\"saveTabs(false)\">\r\n      Save\r\n    </button>\r\n  </div>\r\n</div>", styles: ["li{list-style:none}.page-design-basic-info .p-card-content{padding:0}.table.actionadd thead{background-color:var(--background-color)}.table.actionadd thead tr th{color:var(--text-dark);padding:10px 8px}.table.actionadd tbody tr td{padding:8px}.table.actionadd tbody tr td .submenu-arrow{color:var(--text-dark);opacity:.5;cursor:default;position:relative;top:4px;left:4px;-webkit-user-select:none;user-select:none}.table thead{background-color:var(--background-color)}.text-danger{color:#d62f3f!important}.table{width:100%;margin-bottom:1rem;color:#212529;border:solid 1px #ddd}.trash-align .pi-trash{line-height:2}.toggleleft{display:block;margin-top:-12px;padding-bottom:13px}:host ::ng-deep .icon-dropdown .material-symbols-outlined{font-size:18px}.dragBoxtable{padding:0}.dragBoxtable .cdkDropList-group{border:none}.dragBoxtable .dragBoxtable-header{background:#ccc;padding:10px}.dragBoxtable .cdk-drag{margin:10px 0;border:1px solid #c2c0e5;padding:4px 0;border-radius:2px}.dragBoxtable .childTabs .cdk-drag{width:100%;border:1px dotted #a5a5a5;background:#f5f5f5;box-shadow:0 .1rem .6rem #0000001a;border-radius:2px;padding:4px 15px}.dragBoxtable .secondChildTabs{width:100%;margin:10px 15px;border:1px dotted #ccc;padding:10px}.dragBoxtable .cdk-drop-list{margin:0 15px}.cdk-drop-list-dragging{background:var(--background-color)}.drag-icon{display:flex;align-items:center;justify-content:flex-end;position:relative;top:5px;cursor:move}\n"], dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i1.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { kind: "directive", type: i1.FormArrayName, selector: "[formArrayName]", inputs: ["formArrayName"] }, { kind: "directive", type: i5.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "directive", type: i6$1.Tooltip, selector: "[pTooltip]", inputs: ["tooltipPosition", "tooltipEvent", "appendTo", "positionStyle", "tooltipStyleClass", "tooltipZIndex", "escape", "showDelay", "hideDelay", "life", "positionTop", "positionLeft", "autoHide", "fitContent", "hideOnEscape", "pTooltip", "tooltipDisabled", "tooltipOptions"] }, { kind: "directive", type: i7.InputText, selector: "[pInputText]" }, { kind: "component", type: i9.Dropdown, selector: "p-dropdown", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }, { kind: "component", type: i10.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { kind: "directive", type: i11$1.CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: i11$1.CdkDropListGroup, selector: "[cdkDropListGroup]", inputs: ["cdkDropListGroupDisabled"], exportAs: ["cdkDropListGroup"] }, { kind: "directive", type: i11$1.CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }, { kind: "directive", type: i11$1.CdkDragPlaceholder, selector: "ng-template[cdkDragPlaceholder]", inputs: ["data"] }, { kind: "directive", type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RibbonTabConfigComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-ribbon-tab-config', template: "<div class=\"page-design-basic-info\">\r\n  <p-card styleClass=\"rbac-card w-100 mb-2\">\r\n    <div class=\"strip_head page-designer toggleleft\">\r\n      <span class=\"report_head font-weight-bold\">Ribbon Tab Configuration</span>\r\n    </div>\r\n    <div class=\"p-fluid\">\r\n      <div class=\"\">\r\n        <form [formGroup]=\"tabsForm\">\r\n          <div class=\"row mb-2\">\r\n            <div class=\"p-field col-12 col-md-6\">\r\n              <label for=\"ribbonpage\" class=\"referral-form-labels\">Ribbon Page\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <p-dropdown [options]=\"ribbonpageList\" placeholder=\"Select Ribbon Page\" id=\"ribbonpagetype\"\r\n                optionLabel=\"activeVersion.pagename\" fieldKey=\"PAG_DES_RIBBON_TAB_CONFIG_RIBBON_PAGE\" optionValue=\"id\"\r\n                formControlName=\"ribbonid\" [filter]=\"true\" [required]=\"true\">\r\n              </p-dropdown>\r\n              <div *ngIf=\"tabsForm.controls['ribbonid'].errors && tabsForm.controls['ribbonid'].touched\">\r\n                <div class=\"p-error block mt-1\">Ribbon Page is required </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"p-field col-12 col-md-6\">\r\n              <label for=\"taborientation\" class=\"referral-form-labels\">Tab Orientation\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <p-dropdown [options]=\"taborientationList\" placeholder=\"Select Page Type\" id=\"pagetype\"\r\n                optionLabel=\"lookupvalue\" optionValue=\"lookupkey\" formControlName=\"taborientation\"\r\n                fieldKey=\"PAG_DES_RIBBON_TAB_CONFIG_TAB_ORIENTATION\" [required]=\"true\">\r\n              </p-dropdown>\r\n              <div *ngIf=\"tabsForm.controls['taborientation'].errors && tabsForm.controls['taborientation'].touched\">\r\n                <div class=\"p-error block mt-1\">Tab Orientation is required </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"strip_head toggleleft page-designer d-flex justify-content-between mb-4\">\r\n            <span class=\"report_head font-weight-bold\"></span>\r\n            <button class=\"btn btn-primary\" fieldKey=\"PAG_DES_RIBBON_TAB_CONFIG_ADD_TAB\" (click)=\"addTab()\">\r\n              <em class=\"fa fa-plus\" aria-hidden=\"true\"></em> Add Tab\r\n            </button>\r\n          </div>\r\n          <div class=\"dragBoxtable\">\r\n            <div formArrayName=\"tabs\" class=\"cdkDropList-group\" cdkDropList cdkDropListGroup (cdkDropListDropped)=\"dropItem($event)\"\r\n            [cdkDropListData]=\"tabs.controls\">\r\n              <div *cdkDragPlaceholder></div>\r\n              <div class=\"mb-3\" *ngFor=\"let item of tabs.controls; let i = index\" [cdkDragData]=\"item\" [formGroupName]=\"i\" cdkDrag>\r\n                <div class=\"row my-2\">\r\n                  <div class=\"col-lg-1 pt-1\">\r\n                    <label class=\"d-block\">&#160;</label>\r\n                    <div class=\"drag-icon\">\r\n                      <svg title=\"\" id=\"img{{ i }}\" width=\"8\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\">\r\n                        <path\r\n                          d=\"M88 352C110.1 352 128 369.9 128 392V440C128 462.1 110.1 480 88 480H40C17.91 480 0 462.1 0 440V392C0 369.9 17.91 352 40 352H88zM280 352C302.1 352 320 369.9 320 392V440C320 462.1 302.1 480 280 480H232C209.9 480 192 462.1 192 440V392C192 369.9 209.9 352 232 352H280zM40 320C17.91 320 0 302.1 0 280V232C0 209.9 17.91 192 40 192H88C110.1 192 128 209.9 128 232V280C128 302.1 110.1 320 88 320H40zM280 192C302.1 192 320 209.9 320 232V280C320 302.1 302.1 320 280 320H232C209.9 320 192 302.1 192 280V232C192 209.9 209.9 192 232 192H280zM40 160C17.91 160 0 142.1 0 120V72C0 49.91 17.91 32 40 32H88C110.1 32 128 49.91 128 72V120C128 142.1 110.1 160 88 160H40zM280 32C302.1 32 320 49.91 320 72V120C320 142.1 302.1 160 280 160H232C209.9 160 192 142.1 192 120V72C192 49.91 209.9 32 232 32H280z\" />\r\n                      </svg>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-4 col-md-6 col-12\">\r\n                    <label class=\"d-block\">Tab Name</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"name\"\r\n                      fieldKey=\"PAG_DES_RIBBON_TAB_CONFIG_TAB_NAME\" placeholder=\"Enter Tab Name\" pInputText required />\r\n                    <div\r\n                      *ngIf=\"tabErrorShow ? item.get('name').invalid : item.get('name').errors && item.get('name').touched\">\r\n                      <small class=\"p-error block\">Tab Name is required </small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-2 col-md-6 col-12\">\r\n                    <label class=\"d-block\">Icon</label>\r\n                    <p-dropdown [options]=\"iconList\" styleClass=\"icon-dropdown\" formControlName=\"icon\" [filter]=\"true\"\r\n                      optionLabel=\"label\" optionValue=\"value\" [showClear]=\"true\" placeholder=\"Select Icon\"\r\n                      fieldKey=\"PAG_DES_RIBBON_TAB_CONFIG_TAB_NAME\">\r\n                      <ng-template let-selectedItem pTemplate=\"selectedItem\">\r\n                        <div pTooltip=\"{{selectedItem.label}}\" tooltipPosition=\"top\"\r\n                          class=\"d-flex flex-row align-items-center gap-2\" *ngIf=\"selectedItem.value\">\r\n                          <span class=\"material-symbols-outlined userempty ml-0\">{{ selectedItem.value }}</span>\r\n                          <div class=\"text-truncate\">{{ selectedItem.label }}</div>\r\n                        </div>\r\n                      </ng-template>\r\n                      <ng-template let-icon pTemplate=\"item\">\r\n                        <div class=\"d-flex flex-row align-items-start gap-2\">\r\n                          <span class=\"material-symbols-outlined userempty ml-0\">{{ icon.value }}</span>\r\n                          <div>{{ icon.label }}</div>\r\n                        </div>\r\n                      </ng-template>\r\n                    </p-dropdown>\r\n                  </div>\r\n                  <div class=\"col-lg-4 col-md-6 col-12\">\r\n                    <label class=\"d-block\">Page</label>\r\n                    <p-dropdown [options]=\"pageList\" placeholder=\"Select Page\" id=\"pagetype\"\r\n                      optionLabel=\"activeVersion.pagename\" fieldKey=\"PAG_DES_RIBBON_TAB_CONFIG_SELECT_PAGE\"\r\n                      optionValue=\"id\" formControlName=\"id\" [filter]=\"true\" [required]=\"true\"></p-dropdown>\r\n                    <div\r\n                      *ngIf=\"pageErrorShow ? item.get('id').invalid : item.get('id').errors && item.get('id').touched\">\r\n                      <small class=\"p-error block\">Page is required </small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-1 text-left pt-1\">\r\n                    <label class=\"d-block\">&#160;</label>\r\n                    <a href=\"javascript:void(0)\" class=\"mr-2 text-primary trash-align\" title=\"Add Child Tab\"\r\n                      fieldKey=\"PAG_DES_RIBBON_TAB_CONFIG_ADD_TAB\"><em class=\"pi pi-plus\"\r\n                        (click)=\"addChildTab(i)\"></em></a>\r\n                    <a href=\"javascript:void(0)\" class=\"mr-2 text-danger trash-align\" title=\"Delete\"\r\n                      fieldKey=\"PAG_DES_RIBBON_TAB_CONFIG_DELETE\" *ngIf=\"tabs.controls.length > 1\"><em\r\n                        class=\"pi pi-trash\" (click)=\"removeTab(i)\"></em></a>\r\n                  </div>\r\n                </div>\r\n                <!-- Begin of 2nd level Tab configuration -->\r\n                <div formArrayName=\"tabs\" class=\"childTabs\">\r\n                  <div cdkDropList (cdkDropListDropped)=\"dropItem($event)\"\r\n                    [cdkDropListData]=\"childTabs(i).controls\" [id]=\"i\">\r\n                    <div class=\"example-custom-placeholder\" *cdkDragPlaceholder></div>\r\n                    <div *ngFor=\"let childitem of childTabs(i).controls; let childTabIndex = index\"\r\n                      [formGroupName]=\"childTabIndex\" cdkDrag [cdkDragData]=\"childitem\">\r\n                      <div class=\"row my-2\">\r\n                        <div class=\"col-lg-1 pt-1\">\r\n                          <label class=\"d-block\">&#160;</label>\r\n                          <div class=\"drag-icon\">\r\n                            <svg title=\"\" id=\"img{{ childTabIndex }}\" width=\"8\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                              viewBox=\"0 0 320 512\">\r\n                              <path\r\n                                d=\"M88 352C110.1 352 128 369.9 128 392V440C128 462.1 110.1 480 88 480H40C17.91 480 0 462.1 0 440V392C0 369.9 17.91 352 40 352H88zM280 352C302.1 352 320 369.9 320 392V440C320 462.1 302.1 480 280 480H232C209.9 480 192 462.1 192 440V392C192 369.9 209.9 352 232 352H280zM40 320C17.91 320 0 302.1 0 280V232C0 209.9 17.91 192 40 192H88C110.1 192 128 209.9 128 232V280C128 302.1 110.1 320 88 320H40zM280 192C302.1 192 320 209.9 320 232V280C320 302.1 302.1 320 280 320H232C209.9 320 192 302.1 192 280V232C192 209.9 209.9 192 232 192H280zM40 160C17.91 160 0 142.1 0 120V72C0 49.91 17.91 32 40 32H88C110.1 32 128 49.91 128 72V120C128 142.1 110.1 160 88 160H40zM280 32C302.1 32 320 49.91 320 72V120C320 142.1 302.1 160 280 160H232C209.9 160 192 142.1 192 120V72C192 49.91 209.9 32 232 32H280z\" />\r\n                            </svg>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4\">\r\n                          <label class=\"d-block\">Tab Name</label>\r\n                          <input type=\"text\" class=\"form-control\" formControlName=\"name\"\r\n                            fieldKey=\"PAG_DES_RIBBON_TAB_CONFIG_TAB_NAME\" placeholder=\"Enter Tab Name\" pInputText\r\n                            required />\r\n                          <div\r\n                            *ngIf=\"tabErrorShow ? childitem.get('name').invalid : childitem.get('name').errors && childitem.get('name').touched\">\r\n                            <small class=\"p-error block\">Tab Name is required </small>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-lg-3\">\r\n                          <label class=\"d-block\">Icon</label>\r\n                          <p-dropdown [options]=\"iconList\" styleClass=\"icon-dropdown\" formControlName=\"icon\"\r\n                            [filter]=\"true\" optionLabel=\"label\" optionValue=\"value\" [showClear]=\"true\"\r\n                            placeholder=\"Select Icon\" fieldKey=\"PAG_DES_RIBBON_TAB_CONFIG_TAB_NAME\">\r\n                            <ng-template let-selectedItem pTemplate=\"selectedItem\">\r\n                              <div pTooltip=\"{{selectedItem.label}}\" tooltipPosition=\"top\"\r\n                                class=\"d-flex flex-row align-items-center gap-2\" *ngIf=\"selectedItem.value\">\r\n                                <span class=\"material-symbols-outlined userempty ml-0\">{{ selectedItem.value }}</span>\r\n                                <div class=\"text-truncate\">{{ selectedItem.label }}</div>\r\n                              </div>\r\n                            </ng-template>\r\n                            <ng-template let-icon pTemplate=\"item\">\r\n                              <div class=\"d-flex flex-row align-items-start gap-2\">\r\n                                <span class=\"material-symbols-outlined userempty ml-0\">{{ icon.value }}</span>\r\n                                <div>{{ icon.label }}</div>\r\n                              </div>\r\n                            </ng-template>\r\n                          </p-dropdown>\r\n                        </div>\r\n                        <div class=\"col-lg-3\">\r\n                          <label class=\"d-block\">Page</label>\r\n                          <p-dropdown [options]=\"pageList\" placeholder=\"Select Page\" id=\"pagetype\"\r\n                            optionLabel=\"activeVersion.pagename\" fieldKey=\"PAG_DES_RIBBON_TAB_CONFIG_SELECT_PAGE\"\r\n                            optionValue=\"id\" formControlName=\"id\" [filter]=\"true\" [required]=\"true\"></p-dropdown>\r\n                          <div\r\n                            *ngIf=\"pageErrorShow ? childitem.get('id').invalid : childitem.get('id').errors && childitem.get('id').touched\">\r\n                            <small class=\"p-error block\">Page is required </small>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-lg-1 text-left\">\r\n                          <label class=\"d-block\">&#160;</label>\r\n                          <a href=\"javascript:void(0)\" class=\"mr-2 text-danger trash-align\" title=\"Delete\"\r\n                            fieldKey=\"PAG_DES_RIBBON_TAB_CONFIG_DELETE\"><em class=\"pi pi-trash\"\r\n                              (click)=\"removeChildTab(i, childTabIndex)\"></em></a>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- End of 2nd level Tab configuration -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </p-card>\r\n  <div class=\"formicon mt-3 text-right\">\r\n    <button class=\"mb-2 mr-2 btn btn-cancel\" (click)=\"cancel()\">Cancel</button>\r\n    <button class=\"mb-2 mr-2 btn btn-primary btncommon\" fieldKey=\"PAG_DES_RIBBON_TAB_CONFIG_PUBLISH\"\r\n      (click)=\"saveTabs(true)\">\r\n      Publish\r\n    </button>\r\n    <button class=\"mb-2 btn btn-primary btncommon\" fieldKey=\"PAG_DES_RIBBON_TAB_CONFIG_SAVE_TABS\"\r\n      (click)=\"saveTabs(false)\">\r\n      Save\r\n    </button>\r\n  </div>\r\n</div>", styles: ["li{list-style:none}.page-design-basic-info .p-card-content{padding:0}.table.actionadd thead{background-color:var(--background-color)}.table.actionadd thead tr th{color:var(--text-dark);padding:10px 8px}.table.actionadd tbody tr td{padding:8px}.table.actionadd tbody tr td .submenu-arrow{color:var(--text-dark);opacity:.5;cursor:default;position:relative;top:4px;left:4px;-webkit-user-select:none;user-select:none}.table thead{background-color:var(--background-color)}.text-danger{color:#d62f3f!important}.table{width:100%;margin-bottom:1rem;color:#212529;border:solid 1px #ddd}.trash-align .pi-trash{line-height:2}.toggleleft{display:block;margin-top:-12px;padding-bottom:13px}:host ::ng-deep .icon-dropdown .material-symbols-outlined{font-size:18px}.dragBoxtable{padding:0}.dragBoxtable .cdkDropList-group{border:none}.dragBoxtable .dragBoxtable-header{background:#ccc;padding:10px}.dragBoxtable .cdk-drag{margin:10px 0;border:1px solid #c2c0e5;padding:4px 0;border-radius:2px}.dragBoxtable .childTabs .cdk-drag{width:100%;border:1px dotted #a5a5a5;background:#f5f5f5;box-shadow:0 .1rem .6rem #0000001a;border-radius:2px;padding:4px 15px}.dragBoxtable .secondChildTabs{width:100%;margin:10px 15px;border:1px dotted #ccc;padding:10px}.dragBoxtable .cdk-drop-list{margin:0 15px}.cdk-drop-list-dragging{background:var(--background-color)}.drag-icon{display:flex;align-items:center;justify-content:flex-end;position:relative;top:5px;cursor:move}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.UntypedFormBuilder }, { type: AlertService }, { type: i2.ActivatedRoute }, { type: i2.Router }, { type: AlertService }, { type: DataStoreService }]; } });

var customPageList = [
	{
		name: "Appointments",
		component: "AppointmentsComponent",
		componentName: "AppointmentsComponent",
		selectedTag: "<app-appointments></app-appointments>"
	},
	{
		name: "Event Scheduler",
		component: "EventSchedulerComponent",
		componentName: "EventSchedulerComponent",
		selectedTag: "<app-event-scheduler></app-event-scheduler>"
	},
	{
		name: "Document Packetization",
		component: "DocumentPacketizationComponent",
		componentName: "DocumentPacketizationComponent",
		selectedTag: "<app-document-packetization></app-document-packetization>"
	},
	{
		name: "Email Template",
		component: "EmailTemplateComponent",
		componentName: "EmailTemplateComponent",
		selectedTag: "<app-email-template></app-email-template>"
	},
	{
		name: "Event Scheduler",
		component: "EventSchedulerComponent",
		componentName: "EventSchedulerComponent",
		selectedTag: "<app-event-scheduler></app-event-scheduler>"
	},
	{
		name: "Inspection",
		component: "CreateSitevisitComponent",
		componentName: "CreateSitevisitComponent",
		selectedTag: "<app-create-sitevisit></app-create-sitevisit>"
	}
];

class RoutingConfigComponent {
    _formBuilder;
    _alert;
    _route;
    _router;
    _storeservice;
    tabsForm;
    formData;
    id = '';
    pageTypeList;
    dropdownService;
    pageList;
    filteredPageList;
    pageBuilderAddService;
    pageBuilderService;
    authService;
    orgSubs;
    orgId;
    customPage = customPageList;
    RBACORG;
    constructor(injector, _formBuilder, _alert, _route, _router, _storeservice) {
        this._formBuilder = _formBuilder;
        this._alert = _alert;
        this._route = _route;
        this._router = _router;
        this._storeservice = _storeservice;
        this.pageBuilderAddService = injector.get(PageBuilderAddService);
        this.dropdownService = injector.get(CommonDropdownsService);
        this.pageBuilderService = injector.get(PageBuilderService$1);
        this.authService = injector.get(AuthService);
        this.id = this._route.snapshot.parent.paramMap.get('id');
        this.orgSubs = this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.RBACORG = res['RBACORG'];
                this.orgId = parseInt(this.RBACORG['orgID']);
                if (this.orgId) {
                    this.getAllPages();
                }
            }
        });
    }
    ngOnInit() {
        this.getPageTypes();
        this.initTabConfigForm();
        this.setCurrentFormData();
    }
    ngOnDestroy() {
        this.orgSubs.unsubscribe();
    }
    setCurrentFormData() {
        this.pageBuilderAddService.currentFormData.subscribe((data) => {
            this.formData = data;
            const tabConfig = JSON.parse(this.formData?.tabconfig);
            if (tabConfig) {
                const tabsControl = this.tabsForm.controls['tabs'];
                tabsControl.controls = [];
                if (tabConfig?.length) {
                    tabConfig.forEach(val => {
                        tabsControl.push(this._formBuilder.group({
                            id: val.id,
                            pathname: val.pathname,
                            type: val.type ? val.type : 'ROUTING'
                        }));
                    });
                }
            }
        });
    }
    initTabConfigForm() {
        this.tabsForm = this._formBuilder.group({
            tabs: this._formBuilder.array([this.addTabGroup()])
        });
    }
    getPageTypes() {
        this.dropdownService.getDropDownValues('page').subscribe(result => {
            this.pageTypeList = result['data'];
        });
    }
    getAllPages() {
        this.pageBuilderAddService.getOrgList(this.orgId).subscribe((res) => {
            if (res) {
                this.pageList = res?.data?.filter(page => page?.pageTypeDetails?.key !== 'BTP');
            }
        }, _err => this._alert.error(AppConstants.errorMessage));
    }
    selectedPageType(event) {
        console.log(event);
        this.filteredPageList = this.pageList.filter(page => page.pageTypeDetails.id === event);
    }
    addTabGroup() {
        return this._formBuilder.group({
            pathname: ['', [Validators.required]],
            type: ['ROUTING'],
            id: ['']
        });
    }
    get tabs() {
        return this.tabsForm.get('tabs').controls;
    }
    // addTab() {
    //   const tabs = (this.tabsForm.get('tabs') as FormArray).controls;
    //   tabs.push(this.addTabGroup());
    // }
    // patchTab(tabValue) {
    //   const tabs = (this.tabsForm.get('tabs') as FormArray).controls;
    //   tabs.push(tabValue);
    // }
    /**
     * Method to Remove tab
     * @param _index index of the tab to be removed
     */
    // removeTab(_index: number) {
    //   const tabs = this.tabsForm.get('tabs') as FormArray;
    //   tabs.removeAt(_index);
    // }
    // getPage(id?: any) {
    //   console.log(id);
    //   if (id && id !== '') {
    //     return this.pageList.filter(_ => _.pageTypeDetails.id == id);
    //   }
    // }
    cancel() {
        this.pageBuilderAddService.returnToList();
    }
    saveTabs(publish) {
        if (!this.tabsForm.valid) {
            return this._alert.error('Please fill all mandatory fields.');
        }
        const tabs = this.tabsForm.getRawValue().tabs;
        this.formData.tabconfig = JSON.stringify(tabs);
        if (!this.id) {
            this.formData.published = publish;
            this.pageBuilderAddService.createPage(this.formData).subscribe(result => {
                const data = result['data'];
                this._router.navigate([`pages/page-design/versions/${data.id}`]);
                if (publish) {
                    this._alert.success(`Tab Page Version ${data.version || data.activeVersion.version}  is published successfully`);
                }
                else {
                    this._alert.success('Tab Page added successfully');
                }
            });
        }
        else {
            const formDetails = this.formData;
            formDetails.id = this.id;
            formDetails.published = publish;
            this.pageBuilderService.updatePageVersion(this.id, formDetails).subscribe(() => {
                this._router.navigate([`pages/page-design/versions/${formDetails.pageid}`]);
                this._alert.success('Tab Page updated successfully');
            });
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RoutingConfigComponent, deps: [{ token: i0.Injector }, { token: i1.UntypedFormBuilder }, { token: AlertService }, { token: i2.ActivatedRoute }, { token: i2.Router }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: RoutingConfigComponent, selector: "app-routing-config", ngImport: i0, template: "<div class=\"page-design-basic-info\">\r\n  <p-card styleClass=\"rbac-card w-100 mb-2\">\r\n    <div class=\"strip_head page-designer toggleleft\">\r\n      <span class=\"report_head font-weight-bold\">Routing Configuration</span>\r\n    </div>\r\n    <div class=\"p-fluid\">\r\n      <div class=\"\">\r\n        <form [formGroup]=\"tabsForm\">\r\n          <div formArrayName=\"tabs\">\r\n            <div *ngFor=\"let item of tabs; let i = index\">\r\n              <div class=\"row\" [formGroupName]=\"i\">\r\n                <div class=\"p-field p-col-3\">\r\n                  <label for=\"pname\" class=\"referral-form-labels\"\r\n                    >Routing Path\r\n                    <span class=\"requiredfield text-danger\">*</span>\r\n                  </label>\r\n                  <p-dropdown\r\n                    [options]=\"customPage\"\r\n                    placeholder=\"Select Routing Page\"\r\n                    id=\"pathname\"\r\n                    optionLabel=\"name\"\r\n                    optionValue=\"component\"\r\n                    formControlName=\"pathname\"\r\n                    fieldKey=\"PAG_DES_ROUTE_CONFIG_ROUTING_PATH\"\r\n                    (onChange)=\"selectedPage($event.value)\">\r\n                  </p-dropdown>\r\n                  <div *ngIf=\"item['controls'].pathname.errors && item['controls'].pathname.touched\">\r\n                    <small class=\"p-error block\">Routing Path is required </small>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"text-right\">\r\n            <button\r\n              class=\"pull-right mb-2 btn btn-primary btncommon\"\r\n              [disabled]=\"!tabsForm.valid\"\r\n              (click)=\"saveTabs(true)\"\r\n              fieldKey=\"PAG_DES_ROUTE_CONFIG_PUBLISH\">\r\n              <em class=\"fa fa-save\" aria-hidden=\"true\"></em> Publish\r\n            </button>\r\n            <button\r\n              class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\"\r\n              fieldKey=\"PAG_DES_ROUTE_CONFIG_SAVE_TABS\"\r\n              [disabled]=\"!tabsForm.valid\"\r\n              (click)=\"saveTabs(false)\">\r\n              <em class=\"fa fa-save\" aria-hidden=\"true\"></em> Save Tabs\r\n            </button>\r\n            <button class=\"pull-right mb-2 mr-2 btn btn-cancel\" (click)=\"cancel()\">Cancel</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </p-card>\r\n</div>\r\n", styles: ["li{list-style:none}\n"], dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i1.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { kind: "directive", type: i1.FormArrayName, selector: "[formArrayName]", inputs: ["formArrayName"] }, { kind: "component", type: i9.Dropdown, selector: "p-dropdown", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }, { kind: "component", type: i10.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { kind: "directive", type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RoutingConfigComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-routing-config', template: "<div class=\"page-design-basic-info\">\r\n  <p-card styleClass=\"rbac-card w-100 mb-2\">\r\n    <div class=\"strip_head page-designer toggleleft\">\r\n      <span class=\"report_head font-weight-bold\">Routing Configuration</span>\r\n    </div>\r\n    <div class=\"p-fluid\">\r\n      <div class=\"\">\r\n        <form [formGroup]=\"tabsForm\">\r\n          <div formArrayName=\"tabs\">\r\n            <div *ngFor=\"let item of tabs; let i = index\">\r\n              <div class=\"row\" [formGroupName]=\"i\">\r\n                <div class=\"p-field p-col-3\">\r\n                  <label for=\"pname\" class=\"referral-form-labels\"\r\n                    >Routing Path\r\n                    <span class=\"requiredfield text-danger\">*</span>\r\n                  </label>\r\n                  <p-dropdown\r\n                    [options]=\"customPage\"\r\n                    placeholder=\"Select Routing Page\"\r\n                    id=\"pathname\"\r\n                    optionLabel=\"name\"\r\n                    optionValue=\"component\"\r\n                    formControlName=\"pathname\"\r\n                    fieldKey=\"PAG_DES_ROUTE_CONFIG_ROUTING_PATH\"\r\n                    (onChange)=\"selectedPage($event.value)\">\r\n                  </p-dropdown>\r\n                  <div *ngIf=\"item['controls'].pathname.errors && item['controls'].pathname.touched\">\r\n                    <small class=\"p-error block\">Routing Path is required </small>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"text-right\">\r\n            <button\r\n              class=\"pull-right mb-2 btn btn-primary btncommon\"\r\n              [disabled]=\"!tabsForm.valid\"\r\n              (click)=\"saveTabs(true)\"\r\n              fieldKey=\"PAG_DES_ROUTE_CONFIG_PUBLISH\">\r\n              <em class=\"fa fa-save\" aria-hidden=\"true\"></em> Publish\r\n            </button>\r\n            <button\r\n              class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\"\r\n              fieldKey=\"PAG_DES_ROUTE_CONFIG_SAVE_TABS\"\r\n              [disabled]=\"!tabsForm.valid\"\r\n              (click)=\"saveTabs(false)\">\r\n              <em class=\"fa fa-save\" aria-hidden=\"true\"></em> Save Tabs\r\n            </button>\r\n            <button class=\"pull-right mb-2 mr-2 btn btn-cancel\" (click)=\"cancel()\">Cancel</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </p-card>\r\n</div>\r\n", styles: ["li{list-style:none}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.UntypedFormBuilder }, { type: AlertService }, { type: i2.ActivatedRoute }, { type: i2.Router }, { type: DataStoreService }]; } });

class SearchParamsComponent {
    formBuilder;
    cdRef;
    alert;
    route;
    router;
    searchParamsForm;
    searchParams;
    fieldMapping = [];
    formData;
    tableSchemaConfig;
    dynamicData;
    layout;
    id = '';
    baseQueryColumns;
    assetList;
    databaseType;
    columnText;
    jsonMode = [];
    dropdownService;
    service;
    gridFieldList;
    constructor(injector, formBuilder, cdRef, alert, route, router) {
        this.formBuilder = formBuilder;
        this.cdRef = cdRef;
        this.alert = alert;
        this.route = route;
        this.router = router;
        this.service = injector.get(PageBuilderAddService);
        this.dropdownService = injector.get(CommonDropdownsService);
    }
    ngOnInit() {
        this.dgpjsonMode();
        this.id = this.route.snapshot.paramMap.get('id');
        this.loadForm();
        this.loadDropDown();
        this.service.currentFormData.subscribe((data) => {
            this.formData = data;
            this.searchParams =
                this.formData.searchparams && typeof this.formData.searchparams === 'string'
                    ? JSON.parse(this.formData.searchparams)
                    : this.formData.searchparams;
            this.layout = this.formData && this.formData.layouttype ? this.formData.layouttype : null;
            if (this.formData.tableschemaconfig) {
                this.tableSchemaConfig =
                    typeof this.formData.tableschemaconfig === 'string'
                        ? JSON.parse(this.formData.tableschemaconfig)
                        : this.formData.tableschemaconfig;
                if (this.tableSchemaConfig && Object.keys(this.tableSchemaConfig).length) {
                    this.fieldMapping = this.tableSchemaConfig.fieldmapping;
                }
            }
            if (this.tableSchemaConfig) {
                this.patchQueryParams();
            }
        });
        this.service.currentBasicData.subscribe((data) => {
            if (data) {
                if (this.formData) {
                    this.formData.pagename = data.pagename;
                    this.formData.pagetype = data.pagetype;
                    this.formData.description = data.description;
                }
            }
        });
    }
    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }
    loadForm() {
        this.searchParamsForm = this.formBuilder.group({
            databasetypekey: [null],
            baseQuery: [''],
            baseQueryColumns: [null],
            jsontag: [null],
            mode: [null]
        });
    }
    loadDropDown() {
        this.dropdownService.getDropDownValues('Database').subscribe(result => {
            this.databaseType = result['data'];
        });
    }
    patchQueryParams() {
        this.searchParamsForm.patchValue({
            mode: this.tableSchemaConfig?.mode ? this.tableSchemaConfig?.mode : null,
            jsontag: this.tableSchemaConfig?.jsontag ? this.tableSchemaConfig?.jsontag : null,
            databasetypekey: this.tableSchemaConfig?.databasetypekey ? this.tableSchemaConfig?.databasetypekey : '',
            baseQuery: this.tableSchemaConfig.baseQuery ? this.tableSchemaConfig.baseQuery : ''
        });
    }
    formDataHandler(data) {
        this.dynamicData = data;
    }
    changeBaseQueryType() {
        this.searchParamsForm.get('baseQuery')?.setValue('');
        this.searchParamsForm.get('baseQuery')?.clearValidators();
        this.searchParamsForm.get('baseQuery')?.updateValueAndValidity();
    }
    parseSql(sql) {
        sql = sql.toLowerCase();
        const found = [];
        ['SELECT', ' WHERE ', ' FROM ', ' AND ', ' OR ', ';'].forEach(function (word) {
            word = word.toLowerCase();
            let idx = sql.indexOf(word.toLowerCase());
            while (idx !== -1) {
                found.push({ word: word, index: idx });
                idx = sql.indexOf(word, idx + 1);
            }
        });
        found.sort(function (x, y) {
            return x.index - y.index;
        });
        found.forEach(function (x, i, xs) {
            if (i < xs.length - 1) {
                x.text = sql
                    .substring(x.index, xs[i + 1].index)
                    .replace(xs[i].word, '')
                    .trim();
            }
        });
        return found;
    }
    saveSearchParams() {
        const formDetails = this.formData;
        const searchDetails = this.searchParamsForm.getRawValue();
        if (this.formData.pagetype === 'BUSP') {
            searchDetails.baseQuery = this.dynamicData ? JSON.stringify(this.dynamicData) : null;
            this.gridFieldList = this.dynamicData && this.dynamicData.fieldmapping ? this.dynamicData.fieldmapping : [];
            this.setPageJsonData(searchDetails, formDetails);
        }
        else {
            if (searchDetails.baseQuery) {
                let baseQuery = searchDetails.baseQuery;
                baseQuery = baseQuery.replace(/\n/g, ' '); // query - make single line if multiple lines
                baseQuery = baseQuery.replace('select', 'SELECT').replace('from', 'FROM').replace('join', 'JOIN');
                const sqlData = this.parseSql(baseQuery);
                this.checkSqlData(sqlData, baseQuery, searchDetails, formDetails);
            }
        }
    }
    checkSqlData(sqlData, baseQuery, searchDetails, formDetails) {
        if (sqlData && sqlData.length) {
            this.columnText = sqlData[0].text ? sqlData[0].text : '';
            if (this.columnText) {
                if (this.columnText === '*') {
                    this.checkColumnText(baseQuery, searchDetails, formDetails);
                }
                else {
                    this.columnListCheck(baseQuery, searchDetails, formDetails);
                }
            }
            else {
                this.alert.error('Please enter valid select query');
            }
        }
        else {
            this.alert.error('Please enter valid select query');
        }
    }
    checkColumnText(baseQuery, searchDetails, formDetails) {
        // Start - check schema exist in query
        const tableList = baseQuery.match(/(FROM|JOIN)\s+(\w+.\w+)/g).map(e => e.split(' ')[1]);
        if (tableList.length) {
            const checkSchema = tableList.filter(item => !item.includes('.'));
            if (checkSchema.length) {
                this.alert.error('Please enter query with schema');
                return;
            }
            // checkSchema
            this.getTableFields(tableList, searchDetails, formDetails);
            // End - check schema exist in query
        }
    }
    columnListCheck(baseQuery, searchDetails, formDetails) {
        // Start - check schema exist in query
        const tableList = baseQuery.match(/(FROM|JOIN)\s+(\w+.\w+)/g).map(e => e.split(' ')[1]);
        if (tableList.length) {
            const checkSchema = tableList.filter(item => !item.includes('.'));
            if (checkSchema.length) {
                this.alert.error('Please enter query with schema');
                return;
            }
        }
        // End - check schema exist in query
        const regex = AppConstants.checSchemaExistQuery; // column name with underscore issue fix
        this.columnText = baseQuery.match(regex);
        this.baseQueryColumns = this.columnText.map(data => {
            data = data.replaceAll('"', '');
            data = data.replaceAll('~', '');
            return {
                header: data.charAt(0).toUpperCase() + data.substring(1),
                columnDef: data.trim().toLowerCase()
            };
        });
        this.setPageJsonData(searchDetails, formDetails);
    }
    setPageJsonData(searchDetails, formDetails) {
        this.formDataPageType(searchDetails);
        // Start - Set grid config data
        const gridConfig = formDetails.gridconfig && typeof formDetails.gridconfig === 'string'
            ? JSON.parse(formDetails.gridconfig)
            : formDetails.gridconfig;
        let gridConfigFormArray = [];
        if (gridConfig) {
            gridConfigFormArray =
                Object.keys(gridConfig).length && gridConfig.gridConfigFormArray && gridConfig.gridConfigFormArray.length
                    ? gridConfig.gridConfigFormArray
                    : [];
        }
        const tempData = [];
        let gridConfigList;
        if (this.gridFieldList && this.gridFieldList.length) {
            for (const gridField of this.gridFieldList) {
                this.gridFieldListCondition(gridField, gridConfigFormArray, tempData);
            }
            this.templateDataCheck(tempData, gridConfig, gridConfigList);
        }
        else {
            gridConfigList = '';
        }
        // End - Set grid config data
        if (this.formData.pagetype === 'DSP' || this.formData.pagetype === 'DGP') {
            formDetails.tableschemaconfig = searchDetails;
        }
        formDetails.layouttype = this.layout;
        formDetails.gridconfig = gridConfigList;
        this.service.setFormData(formDetails);
        formDetails.tableschemaconfig = JSON.stringify(searchDetails);
        this.formDataIdcheck(formDetails, gridConfigList);
        this.checkCreatePage(formDetails, searchDetails);
    }
    formDataPageType(searchDetails) {
        if (this.formData.pagetype === 'DSP' || this.formData.pagetype === 'DGP') {
            this.gridFieldList = this.baseQueryColumns ? this.baseQueryColumns : [];
            searchDetails.baseQueryColumns = this.baseQueryColumns;
        }
    }
    gridFieldListCondition(gridField, gridConfigFormArray, tempData) {
        let item;
        gridField.columnDef = gridField.columnDef ? gridField.columnDef : gridField.field;
        gridField.header = gridField.header ? gridField.header : gridField.label;
        if (gridConfigFormArray.length) {
            item = gridConfigFormArray.find((b) => b.columnDef === (gridField.columnDef || gridField.field));
        }
        if (!item) {
            item = {
                columnDef: gridField.columnDef,
                dateFormat: '',
                datetext: '',
                filter: '',
                header: gridField.header,
                icon: '',
                icontext: '',
                link: '',
                sort: ''
            };
        }
        tempData.push(item);
    }
    templateDataCheck(tempData, gridConfig, gridConfigList) {
        if (tempData.length) {
            let defaultSortColumn;
            if (gridConfig) {
                defaultSortColumn = tempData.find(item => item.columnDef === gridConfig.defaultSortColumn);
            }
            gridConfigList = { ...gridConfig };
            gridConfigList.defaultSortColumn = defaultSortColumn ? gridConfig.defaultSortColumn : '';
            gridConfigList.defaultSortType = defaultSortColumn ? gridConfig.defaultSortType : '';
            gridConfigList.gridConfigFormArray = tempData;
        }
    }
    formDataIdcheck(formDetails, gridConfigList) {
        formDetails.gridconfig =
            gridConfigList && Object.keys(gridConfigList).length ? JSON.stringify(gridConfigList) : null;
        if (this.id) {
            formDetails.id = this.id;
        }
    }
    checkCreatePage(formDetails, searchDetails) {
        this.service.createPage(formDetails).subscribe(result => {
            if (!this.id) {
                const data = result['data'];
                this.resultCheckKey(result, data);
            }
            if (this.formData.pagetype === 'REPORT' && result) {
                this.saveReportTable(result['data']);
            }
            this.alert.success('Page saved successfully');
        });
        if (this.formData.pagetype === 'DGP' || this.formData.pagetype === 'DSP') {
            this.saveAsset(searchDetails.baseQueryColumns);
        }
    }
    resultCheckKey(result, data) {
        if (result && Object.keys(data).length) {
            const id = data?.id ? data?.id : '';
            if (id) {
                this.router.navigate(['../edit', id], { relativeTo: this.route });
            }
        }
    }
    saveAsset(columns) {
        const tableCoulmn = columns;
        const fieldArr = [];
        this.conditionCheckSaveAssests(fieldArr);
        const assetNameArr = this.assetList && this.assetList.length ? this.assetList.map(item => item.assetname) : [];
        const activeArr = [];
        const inactiveArr = [];
        this.conditionCheckSave(fieldArr, activeArr, inactiveArr);
        this.newAssetArrCheck(fieldArr, assetNameArr, tableCoulmn, activeArr);
        const assetData = [...activeArr, ...inactiveArr];
        this.service.getMenuList(assetData, this.formData.id).subscribe(() => {
            //This is intentional
        });
    }
    newAssetArrCheck(fieldArr, assetNameArr, tableCoulmn, activeArr) {
        let newAssetArr = fieldArr;
        if (assetNameArr && assetNameArr.length && fieldArr && fieldArr.length) {
            newAssetArr = fieldArr.filter(x => !assetNameArr.includes(x));
        }
        if (newAssetArr && newAssetArr.length) {
            newAssetArr.forEach(item => {
                const getFieldData = tableCoulmn.find(value => value.columnDef === item);
                const data = {
                    assetname: item,
                    assetpath: this.formData.pagename + '.' + item,
                    assettype: '45F',
                    dashboardtemplatejson: null,
                    description: getFieldData && getFieldData.header ? getFieldData.header : null,
                    displayname: getFieldData && getFieldData.header ? getFieldData.header : null,
                    icon: null,
                    id: null,
                    pageid: this.formData.id,
                    parentassetid: null,
                    url: null,
                    isactive: this.formData.activeVersion?.isactive,
                    versionid: this.formData.activeVersion?.id
                };
                activeArr.push(data);
            });
        }
    }
    conditionCheckSaveAssests(_fieldArr) {
        if (this.fieldMapping && this.fieldMapping.length) {
            if (this.formData.pagetype === 'DSP') {
                _fieldArr = this.fieldMapping.map((item) => 'grid_' + item.columnDef);
            }
            else {
                _fieldArr = this.fieldMapping.map((item) => item.columnDef);
            }
        }
    }
    conditionCheckSave(fieldArr, activeArr, inactiveArr) {
        if (this.assetList && this.assetList.length) {
            this.assetList.forEach(item => {
                if (fieldArr.includes(item.assetname)) {
                    activeArr.push(item);
                }
                else {
                    item.isactive = false;
                    inactiveArr.push(item);
                }
            });
        }
    }
    getTableFields(tableList, searchDetails, formDetails) {
        const tableSchemaList = tableList.map(item => item.split('.'));
        let fieldsArray = [];
        const requestArray = [];
        tableSchemaList.forEach((data, i) => {
            requestArray[i] = this.service.getTableFields(data[1], data[0]);
        });
        forkJoin(requestArray).subscribe(results => {
            if (results && results.length) {
                results.forEach(item => {
                    const fieldData = JSON.parse(JSON.stringify(item)).map(value => ({ columnDef: value[0], header: value[1] }));
                    fieldsArray = fieldsArray.concat(...fieldData);
                });
                this.baseQueryColumns = fieldsArray;
            }
            this.setPageJsonData(searchDetails, formDetails);
        });
    }
    saveReportTable(result) {
        this.service
            .createReportTable({
            sourcetypekey: 'page',
            sourceidorurl: result?.id,
            reportname: result?.pagename,
            organizationid: result?.organizationid
        })
            .subscribe(() => {
            // This is intentional
        });
    }
    dgpjsonMode() {
        this.dropdownService.getDropDownValues('DGPJsonMode').subscribe(result => {
            this.jsonMode = result['data'];
        });
    }
    modeChanges(jsonModeRefKey) {
        if (jsonModeRefKey === '143CN') {
            //143CN: Concatenate | 143MG: Merge
            this.searchParamsForm.get('jsontag')?.setValidators([Validators.pattern('^[.a-zA-Z0-9;!?]*$')]);
        }
        else {
            this.searchParamsForm.get('jsontag')?.clearValidators();
        }
        this.searchParamsForm.get('jsontag')?.updateValueAndValidity();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SearchParamsComponent, deps: [{ token: i0.Injector }, { token: i1.UntypedFormBuilder }, { token: i0.ChangeDetectorRef }, { token: AlertService }, { token: i2.ActivatedRoute }, { token: i2.Router }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: SearchParamsComponent, selector: "app-search-params", ngImport: i0, template: "<div *ngIf=\"formData.pagetype !== 'BGP'\">\r\n  <form [formGroup]=\"searchParamsForm\">\r\n    <div class=\"row mt-2\">\r\n      <div *ngIf=\"formData.pagetype === 'DGP' || formData.pagetype === 'REPORT'\" class=\"col-12 mt-3 mb-4\">\r\n        <mat-radio-group\r\n          formControlName=\"databasetypekey\"\r\n          aria-label=\"Database Type\"\r\n          [required]=\"formData.pagetype === 'DGP'\">\r\n          <mat-radio-button *ngFor=\"let item of databaseType\" value=\"{{ item.refkey }}\">\r\n            {{ item.description }}&nbsp;&nbsp;&nbsp;&nbsp;</mat-radio-button\r\n          >\r\n        </mat-radio-group>\r\n      </div>\r\n      <div class=\"col-6 mt-3 mb-4\" *ngIf=\"formData.pagetype === 'DGP'\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"JSON Mode\" formControlName=\"mode\" (selectionChange)=\"modeChanges($event.value)\">\r\n            <mat-option value=\"\">Select</mat-option>\r\n            <mat-option *ngFor=\"let jmode of jsonMode\" [value]=\"jmode.refkey\">\r\n              {{ jmode.displayvalue }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-6 mt-3 mb-4\" *ngIf=\"formData.pagetype === 'DGP'\">\r\n        <mat-form-field>\r\n          <mat-label>Json Tag</mat-label>\r\n          <input\r\n            type=\"text\"\r\n            matInput\r\n            formControlName=\"jsontag\"\r\n            [required]=\"searchParamsForm.value.mode && searchParamsForm.value.mode !== ''\" />\r\n          <mat-error\r\n            *ngIf=\"\r\n              searchParamsForm.get('mode')?.value &&\r\n              searchParamsForm.value.mode !== '' &&\r\n              !searchParamsForm.get('jsontag')?.value\r\n            \">\r\n            Json Tag is required</mat-error\r\n          >\r\n          <mat-error *ngIf=\"searchParamsForm.get('jsontag')?.value\"> Json Tag is invalid</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-12\">\r\n        <mat-form-field\r\n          class=\"out\"\r\n          *ngIf=\"formData.pagetype === 'DSP' || formData.pagetype === 'DGP' || formData.pagetype === 'REPORT'\">\r\n          <textarea\r\n            class=\"query-textarea\"\r\n            matInput\r\n            placeholder=\"Query\"\r\n            formControlName=\"baseQuery\"\r\n            [required]=\"formData.pagetype === 'DSP' || formData.pagetype === 'DGP'\"></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n      <ng-container *ngIf=\"formData.pagetype === 'BUSP'\">\r\n        <app-query-params [isDynamicSearchBaseQuery]=\"false\" (formDataChanged)=\"formDataHandler($event)\" class=\"col-12\">\r\n        </app-query-params>\r\n      </ng-container>\r\n    </div>\r\n  </form>\r\n  <div\r\n    class=\"col-12 mt-2 text-right\"\r\n    *ngIf=\"formData.pagetype === 'DSP' || formData.pagetype === 'DGP' || formData.pagetype === 'REPORT'\">\r\n    <button class=\"btn btn-pri\" [disabled]=\"searchParamsForm.invalid\" (click)=\"saveSearchParams()\">Save</button>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"formData.pagetype === 'BGP'\">\r\n  <app-query-params [isGridPage]=\"true\" (formDataChanged)=\"formDataHandler($event)\" class=\"col-12\"></app-query-params>\r\n</div>\r\n", styles: [":root{--background-color: #f8f8f8;--navigation: #fff;--primary: #0D3178;--checkbox-border: #D6D5D5;--text-dark: #000;--label-text: #0D3178;--hover-text: #fff;--bg-light: #fff;--forms: #fff;--nav-text: #696969;--light-gray: #696969;--material-icons: #0D3178;--highlight-list: #e3f2fd;--table-header: #f9f9f9;--table-odd: #f7f7f7;--table-border: #ddd;--table-hover: #dbf6ff;--table-odd-color: #f2fcff;--btn: #0D3178;--menu-panel: #032361;--menu-level2: #28447E;--border-trans: transparent;--btn-hover: #1258A7;--btn-dark: #0D3178;--dropdown-list: #fff;--btncancel: #0D3178;--primary-light: #1258A7;--primary-dark: #0D3178;--light-d-light: #fff;--ldl-text: #fff;--light-d-accent: #fff;--header-bg: #f7f7f7;--secondary-color: #0D3178;--menu-link: #1258A7;--menu-highlight: #0084d1;--sumbmenu-selected: #0084D1;--profile-bg: #f3f9f9;--disabled: #7A8EB5;--accordion-header: #F5F5F5;--input-label: #1F1F1F;--input-field: #4C4C4C;--ghost: #A2A2A2;--table-label: #f1f1f1;--error-msg: #DC0404;--menu-hover: #1258A7;--var-icon-font: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;--rocket-icon: \"/assets/images/rocket-ship.svg\";--base-font-size: 16px;--font-11: 11px;--font-12: 12px;--font-13: 13px;--font-14: 14px;--font-15: 15px;--font-16: 16px;--font-17: 17px;--font-18: 18px;--font-19: 19px;--font-20: 20px;--font-21: 21px;--font-24: 24px;--font-26: 26px}.query-textarea{height:200px}.grid-filed .p-card .p-card-content{padding:0}.grid-filed .documentaccess{border:solid 1px #dbdbdb;border-radius:2px;padding:5px 0;background:#fff;height:100%}.grid-filed .documentaccess .header label{color:#0d3178}.grid-filed .documentaccess .doc-body{overflow-y:auto;max-height:calc(100vh - 450px);min-height:calc(100vh - 450px)}.grid-filed .documentaccess .row.userdata{margin:0;padding:5px 0;cursor:pointer}.grid-filed .documentaccess .row.userdata .group-data .row.userdata:last-child{border-bottom:none}.grid-filed .documentaccess .row.userdata input{font-size:var(--base-font-size)}.grid-filed .documentaccess .row.userdata label{cursor:pointer;display:initial;font-size:var(--base-font-size)}.grid-filed .documentaccess .row.userdata svg{opacity:.4;margin-top:-3px}\n"], dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i7$2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i8$1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i8$1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i8$1.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i9$2.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { kind: "component", type: i9$2.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { kind: "component", type: i8$3.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "panelWidth", "hideSingleSelectionIndicator"], exportAs: ["matSelect"] }, { kind: "component", type: i9$3.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "component", type: QueryParamsComponent, selector: "app-query-params", inputs: ["isDynamicSearchBaseQuery", "isGridPage", "tableData"], outputs: ["formDataChanged"] }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SearchParamsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-search-params', encapsulation: ViewEncapsulation.None, template: "<div *ngIf=\"formData.pagetype !== 'BGP'\">\r\n  <form [formGroup]=\"searchParamsForm\">\r\n    <div class=\"row mt-2\">\r\n      <div *ngIf=\"formData.pagetype === 'DGP' || formData.pagetype === 'REPORT'\" class=\"col-12 mt-3 mb-4\">\r\n        <mat-radio-group\r\n          formControlName=\"databasetypekey\"\r\n          aria-label=\"Database Type\"\r\n          [required]=\"formData.pagetype === 'DGP'\">\r\n          <mat-radio-button *ngFor=\"let item of databaseType\" value=\"{{ item.refkey }}\">\r\n            {{ item.description }}&nbsp;&nbsp;&nbsp;&nbsp;</mat-radio-button\r\n          >\r\n        </mat-radio-group>\r\n      </div>\r\n      <div class=\"col-6 mt-3 mb-4\" *ngIf=\"formData.pagetype === 'DGP'\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"JSON Mode\" formControlName=\"mode\" (selectionChange)=\"modeChanges($event.value)\">\r\n            <mat-option value=\"\">Select</mat-option>\r\n            <mat-option *ngFor=\"let jmode of jsonMode\" [value]=\"jmode.refkey\">\r\n              {{ jmode.displayvalue }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-6 mt-3 mb-4\" *ngIf=\"formData.pagetype === 'DGP'\">\r\n        <mat-form-field>\r\n          <mat-label>Json Tag</mat-label>\r\n          <input\r\n            type=\"text\"\r\n            matInput\r\n            formControlName=\"jsontag\"\r\n            [required]=\"searchParamsForm.value.mode && searchParamsForm.value.mode !== ''\" />\r\n          <mat-error\r\n            *ngIf=\"\r\n              searchParamsForm.get('mode')?.value &&\r\n              searchParamsForm.value.mode !== '' &&\r\n              !searchParamsForm.get('jsontag')?.value\r\n            \">\r\n            Json Tag is required</mat-error\r\n          >\r\n          <mat-error *ngIf=\"searchParamsForm.get('jsontag')?.value\"> Json Tag is invalid</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-12\">\r\n        <mat-form-field\r\n          class=\"out\"\r\n          *ngIf=\"formData.pagetype === 'DSP' || formData.pagetype === 'DGP' || formData.pagetype === 'REPORT'\">\r\n          <textarea\r\n            class=\"query-textarea\"\r\n            matInput\r\n            placeholder=\"Query\"\r\n            formControlName=\"baseQuery\"\r\n            [required]=\"formData.pagetype === 'DSP' || formData.pagetype === 'DGP'\"></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n      <ng-container *ngIf=\"formData.pagetype === 'BUSP'\">\r\n        <app-query-params [isDynamicSearchBaseQuery]=\"false\" (formDataChanged)=\"formDataHandler($event)\" class=\"col-12\">\r\n        </app-query-params>\r\n      </ng-container>\r\n    </div>\r\n  </form>\r\n  <div\r\n    class=\"col-12 mt-2 text-right\"\r\n    *ngIf=\"formData.pagetype === 'DSP' || formData.pagetype === 'DGP' || formData.pagetype === 'REPORT'\">\r\n    <button class=\"btn btn-pri\" [disabled]=\"searchParamsForm.invalid\" (click)=\"saveSearchParams()\">Save</button>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"formData.pagetype === 'BGP'\">\r\n  <app-query-params [isGridPage]=\"true\" (formDataChanged)=\"formDataHandler($event)\" class=\"col-12\"></app-query-params>\r\n</div>\r\n", styles: [":root{--background-color: #f8f8f8;--navigation: #fff;--primary: #0D3178;--checkbox-border: #D6D5D5;--text-dark: #000;--label-text: #0D3178;--hover-text: #fff;--bg-light: #fff;--forms: #fff;--nav-text: #696969;--light-gray: #696969;--material-icons: #0D3178;--highlight-list: #e3f2fd;--table-header: #f9f9f9;--table-odd: #f7f7f7;--table-border: #ddd;--table-hover: #dbf6ff;--table-odd-color: #f2fcff;--btn: #0D3178;--menu-panel: #032361;--menu-level2: #28447E;--border-trans: transparent;--btn-hover: #1258A7;--btn-dark: #0D3178;--dropdown-list: #fff;--btncancel: #0D3178;--primary-light: #1258A7;--primary-dark: #0D3178;--light-d-light: #fff;--ldl-text: #fff;--light-d-accent: #fff;--header-bg: #f7f7f7;--secondary-color: #0D3178;--menu-link: #1258A7;--menu-highlight: #0084d1;--sumbmenu-selected: #0084D1;--profile-bg: #f3f9f9;--disabled: #7A8EB5;--accordion-header: #F5F5F5;--input-label: #1F1F1F;--input-field: #4C4C4C;--ghost: #A2A2A2;--table-label: #f1f1f1;--error-msg: #DC0404;--menu-hover: #1258A7;--var-icon-font: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;--rocket-icon: \"/assets/images/rocket-ship.svg\";--base-font-size: 16px;--font-11: 11px;--font-12: 12px;--font-13: 13px;--font-14: 14px;--font-15: 15px;--font-16: 16px;--font-17: 17px;--font-18: 18px;--font-19: 19px;--font-20: 20px;--font-21: 21px;--font-24: 24px;--font-26: 26px}.query-textarea{height:200px}.grid-filed .p-card .p-card-content{padding:0}.grid-filed .documentaccess{border:solid 1px #dbdbdb;border-radius:2px;padding:5px 0;background:#fff;height:100%}.grid-filed .documentaccess .header label{color:#0d3178}.grid-filed .documentaccess .doc-body{overflow-y:auto;max-height:calc(100vh - 450px);min-height:calc(100vh - 450px)}.grid-filed .documentaccess .row.userdata{margin:0;padding:5px 0;cursor:pointer}.grid-filed .documentaccess .row.userdata .group-data .row.userdata:last-child{border-bottom:none}.grid-filed .documentaccess .row.userdata input{font-size:var(--base-font-size)}.grid-filed .documentaccess .row.userdata label{cursor:pointer;display:initial;font-size:var(--base-font-size)}.grid-filed .documentaccess .row.userdata svg{opacity:.4;margin-top:-3px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.UntypedFormBuilder }, { type: i0.ChangeDetectorRef }, { type: AlertService }, { type: i2.ActivatedRoute }, { type: i2.Router }]; } });

class TabConfigComponent {
    _formBuilder;
    _alert;
    _route;
    _router;
    _storeservice;
    tabsForm;
    formData;
    id = '';
    pageTypeList;
    dropdownService;
    pageList;
    filteredPageList;
    pageBuilderAddService;
    pageBuilderService;
    authService;
    orgSubs;
    orgId;
    fieldList = [];
    allFieldList = [];
    parentFieldList = [];
    tempList = [];
    pageErrorShow = false;
    tabErrorShow = false;
    basicPageInformation;
    localStore;
    httpService;
    RBACORG;
    constructor(injector, _formBuilder, _alert, _route, _router, _storeservice) {
        this._formBuilder = _formBuilder;
        this._alert = _alert;
        this._route = _route;
        this._router = _router;
        this._storeservice = _storeservice;
        this.pageBuilderAddService = injector.get(PageBuilderAddService);
        this.dropdownService = injector.get(CommonDropdownsService);
        this.pageBuilderService = injector.get(PageBuilderService$1);
        this.authService = injector.get(AuthService);
        this.localStore = injector.get(LocalService);
        this.id = this._route.snapshot.parent.paramMap.get('id');
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
                this.RBACORG = res['RBACORG'];
                this.orgId = parseInt(this.RBACORG['orgID']);
                if (this.orgId) {
                    this.getAllPages();
                }
            }
        });
        this.basicPageInformation = this.localStore.getObj('PAGEDESIGN_BASICINFO');
    }
    ngOnInit() {
        if (!this.id) {
            const validation = this.validationPage();
            if (!validation) {
                this._router.navigate(['/pages/page-design/add/basic-info'], { relativeTo: this._route });
                return this._alert.error('Please fill in all the required fields.');
            }
        }
        this.getPageTypes();
        this.initTabConfigForm();
    }
    validationPage() {
        if (!this.basicPageInformation.pagename ||
            !this.basicPageInformation.pagetype ||
            !this.basicPageInformation.description) {
            return false;
        }
        else {
            return true;
        }
    }
    ngOnDestroy() {
        this.orgSubs.unsubscribe();
    }
    setCurrentFormData() {
        this.pageBuilderAddService.currentFormData.subscribe((data) => {
            this.formData = data;
            const tabConfig = this.formData ? JSON.parse(this.formData?.tabconfig) : null;
            if (tabConfig) {
                const tabsControl = this.tabsForm.controls['tabs'];
                tabsControl.controls = [];
                if (tabConfig?.length) {
                    tabConfig.forEach((val, index) => {
                        tabsControl.push(this._formBuilder.group({
                            id: val.id,
                            name: val.name,
                            field: val.field,
                            pfield: val.pfield,
                            icon: val.icon
                        }));
                        this.onChange(val.id, index);
                    });
                }
            }
        });
    }
    initTabConfigForm() {
        this.tabsForm = this._formBuilder.group({
            tabs: this._formBuilder.array([this.addTabGroup()])
        });
    }
    getPageTypes() {
        this.dropdownService.getDropDownValues('page').subscribe(result => {
            this.pageTypeList = result['data'];
        });
    }
    getAllPages() {
        this.pageBuilderAddService.getOrgList(this.orgId).subscribe((res) => {
            if (res) {
                this.pageList = res?.data?.filter(page => page?.pageTypeDetails?.key !== 'BTP');
                this.setCurrentFormData();
            }
        }, _err => this._alert.error(AppConstants.errorMessage));
    }
    // selectedPageType(event) {
    //   console.log(event);
    //   this.filteredPageList = this.pageList.filter(page => page.pageTypeDetails.id === event);
    // }
    addTabGroup() {
        return this._formBuilder.group({
            name: ['', [Validators.required]],
            id: ['', [Validators.required]],
            field: [''],
            pfield: [''],
            icon: [''],
            tableName: ['']
        });
    }
    get tabs() {
        return this.tabsForm.get('tabs').controls;
    }
    addTab() {
        const tabs = this.tabsForm.get('tabs').controls;
        tabs.push(this.addTabGroup());
        this.tabErrorShow = false;
        this.pageErrorShow = false;
    }
    // patchTab(tabValue) {
    //   const tabs = (this.tabsForm.get('tabs') as FormArray).controls;
    //   tabs.push(tabValue);
    // }
    // /**
    //  * Method to Remove tab
    //  * @param _index index of the tab to be removed
    //  */
    removeTab(_index) {
        const tabs = this.tabsForm.get('tabs');
        tabs.removeAt(_index);
    }
    // getPage(id?: any) {
    //   console.log(id);
    //   if (id && id !== '') {
    //     return this.pageList.filter(_ => _.pageTypeDetails.id == id);
    //   }
    // }
    cancel() {
        this.pageBuilderAddService.returnToList();
    }
    saveTabs(publish) {
        console.log(this.tabsForm.getRawValue());
        console.log(this.tabsForm.valid);
        // TODO: change to tabconfig
        const tabs = this.tabsForm.getRawValue().tabs;
        this.tabErrorShow = true;
        this.pageErrorShow = true;
        tabs.forEach(tab => {
            tab.type = this.pageList.length && this.pageList.filter(page => page.id === tab.id)[0]?.pageTypeDetails?.key;
            tab.tableName = JSON.parse(this.pageList.length && this.pageList.filter(page => page.id === tab.id)[0]?.activeVersion?.tableschemaconfig)?.tablelist;
            tab.parentTableName = tab.pfield?.split('.')[0];
        });
        this.formData.tabconfig = JSON.stringify(tabs);
        console.log('Saving....');
        console.log(this.formData);
        if (!this.id) {
            this.formData.published = publish;
            this.pageBuilderAddService.createPage(this.formData).subscribe(result => {
                const data = result['data'];
                this._router.navigate([`pages/page-design/versions/${data.id}`]);
                if (publish) {
                    this._alert.success(`Tab Page Version ${data.version || data.activeVersion.version}  is published successfully`);
                }
                else {
                    this._alert.success('Tab Page added successfully');
                }
            });
        }
        else {
            const formDetails = this.formData;
            formDetails.id = this.id;
            formDetails.published = publish;
            this.pageBuilderService.updatePageVersion(this.id, formDetails).subscribe(() => {
                this._router.navigate([`pages/page-design/versions/${formDetails.pageid}`]);
                this._alert.success('Tab Page updated successfully');
            });
        }
    }
    onChange(value, index) {
        if (value) {
            const selectedPage = this.pageList && this.pageList?.length ? this.pageList.find(x => x.id == value) : {};
            const fieldmapping = selectedPage.activeVersion
                ? JSON.parse(selectedPage?.activeVersion?.tableschemaconfig)?.fieldmapping
                : [];
            const data = fieldmapping && fieldmapping?.length
                ? fieldmapping.map(element => {
                    element.label = element.tablename + '.' + element.field;
                    return element;
                })
                : [];
            this.pageList[index].fieldmapping = data;
        }
        else {
            this.pageList[index].fieldmapping = [];
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TabConfigComponent, deps: [{ token: i0.Injector }, { token: i1.UntypedFormBuilder }, { token: AlertService }, { token: i2.ActivatedRoute }, { token: i2.Router }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TabConfigComponent, selector: "app-tab-config", ngImport: i0, template: "<div class=\"page-design-basic-info\">\r\n  <p-card styleClass=\"rbac-card w-100 mb-2\">\r\n    <div class=\"strip_head page-designer toggleleft\">\r\n      <span class=\"report_head font-weight-bold\">Tab Configuration</span>\r\n    </div>\r\n    <div class=\"p-fluid\">\r\n      <div class=\"\">\r\n        <form [formGroup]=\"tabsForm\">\r\n          <div class=\"strip_head toggleleft page-designer d-flex justify-content-between mb-4\">\r\n            <span class=\"report_head font-weight-bold\"></span>\r\n            <button class=\"btn btn-primary\" fieldKey=\"PAG_DES_TAB_CONFIG_ADD_TAB\" (click)=\"addTab()\">\r\n              <em class=\"fa fa-plus\" aria-hidden=\"true\"></em> Add Tab\r\n            </button>\r\n          </div>\r\n          <table aria-describedby=\"gridConfigTable\" class=\"table table-borderless actionadd mb-0\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">Tab Name <span class=\"requiredfield text-danger\">*</span></th>\r\n                <th scope=\"col\">Icon</th>\r\n                <th scope=\"col\">Page <span class=\"requiredfield text-danger\">*</span></th>\r\n                <th scope=\"col\">Field Mapping</th>\r\n                <th scope=\"col\">Parent Field Mapping</th>\r\n                <th scope=\"col\">&#160;</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody formArrayName=\"tabs\" *ngFor=\"let item of tabs; let i = index\">\r\n              <tr [formGroupName]=\"i\">\r\n                <td>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    formControlName=\"name\"\r\n                    fieldKey=\"PAG_DES_TAB_CONFIG_TAB_NAME\"\r\n                    placeholder=\"Enter Tab Name\"\r\n                    pInputText\r\n                    required />\r\n                  <div\r\n                    *ngIf=\"\r\n                      tabErrorShow ? item.get('name').invalid : item.get('name').errors && item.get('name').touched\r\n                    \">\r\n                    <div class=\"p-error block mt-1\">Tab Name is required </div>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    formControlName=\"icon\"\r\n                    fieldKey=\"PAG_DES_TAB_CONFIG_TAB_NAME\"\r\n                    placeholder=\"Enter Icon\"\r\n                    pInputText />\r\n                </td>\r\n                <td>\r\n                  <p-dropdown\r\n                    [options]=\"this.pageList\"\r\n                    placeholder=\"Select Page\"\r\n                    id=\"pagetype\"\r\n                    optionLabel=\"activeVersion.pagename\"\r\n                    fieldKey=\"PAG_DES_TAB_CONFIG_SELECT_PAGE\"\r\n                    optionValue=\"id\"\r\n                    formControlName=\"id\"\r\n                    [filter]=\"true\"\r\n                    (onChange)=\"onChange($event.value, i)\"\r\n                    [required]=\"true\">\r\n                  </p-dropdown>\r\n                  <div *ngIf=\"pageErrorShow ? item.get('id').invalid : item.get('id').errors && item.get('id').touched\">\r\n                    <div class=\"p-error block mt-1\">Page is required </div>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <p-dropdown\r\n                    [options]=\"pageList && pageList?.length ? pageList[i].fieldmapping : []\"\r\n                    placeholder=\"Select Field\"\r\n                    id=\"field\"\r\n                    optionLabel=\"field\"\r\n                    fieldKey=\"PAG_DES_TAB_CONFIG_SELECT_PAGE\"\r\n                    optionValue=\"field\"\r\n                    formControlName=\"field\"\r\n                    [filter]=\"true\">\r\n                  </p-dropdown>\r\n                </td>\r\n                <td>\r\n                  <p-dropdown\r\n                    [options]=\"this.parentFieldList[i]\"\r\n                    placeholder=\"Select Parent Field\"\r\n                    id=\"field\"\r\n                    optionLabel=\"label\"\r\n                    fieldKey=\"PAG_DES_TAB_CONFIG_SELECT_PAGE\"\r\n                    optionValue=\"label\"\r\n                    formControlName=\"pfield\"\r\n                    [filter]=\"true\">\r\n                  </p-dropdown>\r\n                </td>\r\n                <td class=\"text-center\" *ngIf=\"tabs.length > 1\">\r\n                  <a\r\n                    href=\"javascript:void(0)\"\r\n                    class=\"text-danger trash-align\"\r\n                    title=\"Delete\"\r\n                    fieldKey=\"PAG_DES_TAB_CONFIG_DELETE\">\r\n                    <em class=\"pi pi-trash\" (click)=\"removeTab(i)\"></em>\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </p-card>\r\n  <div class=\"formicon mt-3 text-right\">\r\n    <button class=\"mb-2 mr-2 btn btn-cancel\" (click)=\"cancel()\">Cancel</button>\r\n    <button class=\"mb-2 mr-2 btn btn-primary btncommon\" fieldKey=\"PAG_DES_TAB_CONFIG_PUBLISH\" (click)=\"saveTabs(true)\">\r\n      Publish\r\n    </button>\r\n    <button class=\"mb-2 btn btn-primary btncommon\" fieldKey=\"PAG_DES_TAB_CONFIG_SAVE_TABS\" (click)=\"saveTabs(false)\">\r\n      Save\r\n    </button>\r\n  </div>\r\n</div>\r\n", styles: ["li{list-style:none}.page-design-basic-info .p-card-content{padding:0}.table.actionadd thead{background-color:var(--background-color)}.table.actionadd thead tr th{color:var(--text-dark);padding:10px 8px}.table.actionadd tbody tr td{padding-left:8px;padding-right:8px}.table thead{background-color:var(--background-color)}.text-danger{color:#d62f3f!important}.table{width:100%;margin-bottom:1rem;color:#212529;border:solid 1px #ddd}.trash-align .pi-trash{line-height:2}\n"], dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i1.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { kind: "directive", type: i1.FormArrayName, selector: "[formArrayName]", inputs: ["formArrayName"] }, { kind: "directive", type: i7.InputText, selector: "[pInputText]" }, { kind: "component", type: i9.Dropdown, selector: "p-dropdown", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }, { kind: "component", type: i10.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { kind: "directive", type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TabConfigComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-tab-config', template: "<div class=\"page-design-basic-info\">\r\n  <p-card styleClass=\"rbac-card w-100 mb-2\">\r\n    <div class=\"strip_head page-designer toggleleft\">\r\n      <span class=\"report_head font-weight-bold\">Tab Configuration</span>\r\n    </div>\r\n    <div class=\"p-fluid\">\r\n      <div class=\"\">\r\n        <form [formGroup]=\"tabsForm\">\r\n          <div class=\"strip_head toggleleft page-designer d-flex justify-content-between mb-4\">\r\n            <span class=\"report_head font-weight-bold\"></span>\r\n            <button class=\"btn btn-primary\" fieldKey=\"PAG_DES_TAB_CONFIG_ADD_TAB\" (click)=\"addTab()\">\r\n              <em class=\"fa fa-plus\" aria-hidden=\"true\"></em> Add Tab\r\n            </button>\r\n          </div>\r\n          <table aria-describedby=\"gridConfigTable\" class=\"table table-borderless actionadd mb-0\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">Tab Name <span class=\"requiredfield text-danger\">*</span></th>\r\n                <th scope=\"col\">Icon</th>\r\n                <th scope=\"col\">Page <span class=\"requiredfield text-danger\">*</span></th>\r\n                <th scope=\"col\">Field Mapping</th>\r\n                <th scope=\"col\">Parent Field Mapping</th>\r\n                <th scope=\"col\">&#160;</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody formArrayName=\"tabs\" *ngFor=\"let item of tabs; let i = index\">\r\n              <tr [formGroupName]=\"i\">\r\n                <td>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    formControlName=\"name\"\r\n                    fieldKey=\"PAG_DES_TAB_CONFIG_TAB_NAME\"\r\n                    placeholder=\"Enter Tab Name\"\r\n                    pInputText\r\n                    required />\r\n                  <div\r\n                    *ngIf=\"\r\n                      tabErrorShow ? item.get('name').invalid : item.get('name').errors && item.get('name').touched\r\n                    \">\r\n                    <div class=\"p-error block mt-1\">Tab Name is required </div>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    formControlName=\"icon\"\r\n                    fieldKey=\"PAG_DES_TAB_CONFIG_TAB_NAME\"\r\n                    placeholder=\"Enter Icon\"\r\n                    pInputText />\r\n                </td>\r\n                <td>\r\n                  <p-dropdown\r\n                    [options]=\"this.pageList\"\r\n                    placeholder=\"Select Page\"\r\n                    id=\"pagetype\"\r\n                    optionLabel=\"activeVersion.pagename\"\r\n                    fieldKey=\"PAG_DES_TAB_CONFIG_SELECT_PAGE\"\r\n                    optionValue=\"id\"\r\n                    formControlName=\"id\"\r\n                    [filter]=\"true\"\r\n                    (onChange)=\"onChange($event.value, i)\"\r\n                    [required]=\"true\">\r\n                  </p-dropdown>\r\n                  <div *ngIf=\"pageErrorShow ? item.get('id').invalid : item.get('id').errors && item.get('id').touched\">\r\n                    <div class=\"p-error block mt-1\">Page is required </div>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <p-dropdown\r\n                    [options]=\"pageList && pageList?.length ? pageList[i].fieldmapping : []\"\r\n                    placeholder=\"Select Field\"\r\n                    id=\"field\"\r\n                    optionLabel=\"field\"\r\n                    fieldKey=\"PAG_DES_TAB_CONFIG_SELECT_PAGE\"\r\n                    optionValue=\"field\"\r\n                    formControlName=\"field\"\r\n                    [filter]=\"true\">\r\n                  </p-dropdown>\r\n                </td>\r\n                <td>\r\n                  <p-dropdown\r\n                    [options]=\"this.parentFieldList[i]\"\r\n                    placeholder=\"Select Parent Field\"\r\n                    id=\"field\"\r\n                    optionLabel=\"label\"\r\n                    fieldKey=\"PAG_DES_TAB_CONFIG_SELECT_PAGE\"\r\n                    optionValue=\"label\"\r\n                    formControlName=\"pfield\"\r\n                    [filter]=\"true\">\r\n                  </p-dropdown>\r\n                </td>\r\n                <td class=\"text-center\" *ngIf=\"tabs.length > 1\">\r\n                  <a\r\n                    href=\"javascript:void(0)\"\r\n                    class=\"text-danger trash-align\"\r\n                    title=\"Delete\"\r\n                    fieldKey=\"PAG_DES_TAB_CONFIG_DELETE\">\r\n                    <em class=\"pi pi-trash\" (click)=\"removeTab(i)\"></em>\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </p-card>\r\n  <div class=\"formicon mt-3 text-right\">\r\n    <button class=\"mb-2 mr-2 btn btn-cancel\" (click)=\"cancel()\">Cancel</button>\r\n    <button class=\"mb-2 mr-2 btn btn-primary btncommon\" fieldKey=\"PAG_DES_TAB_CONFIG_PUBLISH\" (click)=\"saveTabs(true)\">\r\n      Publish\r\n    </button>\r\n    <button class=\"mb-2 btn btn-primary btncommon\" fieldKey=\"PAG_DES_TAB_CONFIG_SAVE_TABS\" (click)=\"saveTabs(false)\">\r\n      Save\r\n    </button>\r\n  </div>\r\n</div>\r\n", styles: ["li{list-style:none}.page-design-basic-info .p-card-content{padding:0}.table.actionadd thead{background-color:var(--background-color)}.table.actionadd thead tr th{color:var(--text-dark);padding:10px 8px}.table.actionadd tbody tr td{padding-left:8px;padding-right:8px}.table thead{background-color:var(--background-color)}.text-danger{color:#d62f3f!important}.table{width:100%;margin-bottom:1rem;color:#212529;border:solid 1px #ddd}.trash-align .pi-trash{line-height:2}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.UntypedFormBuilder }, { type: AlertService }, { type: i2.ActivatedRoute }, { type: i2.Router }, { type: DataStoreService }]; } });

const routes = [
    {
        path: '',
        component: PageBuilderAddComponent,
        children: [
            {
                path: 'basic-info',
                component: BasicInfoComponent
            },
            {
                path: 'page-design',
                component: DesignPageComponent
            },
            {
                path: 'grid-config',
                component: GridConfigComponent
            },
            {
                path: 'search-params',
                component: SearchParamsComponent
            },
            {
                path: 'grid-field',
                component: QueryParamsComponent
            },
            {
                path: 'tab-config',
                component: TabConfigComponent
            },
            {
                path: 'routing-config',
                component: RoutingConfigComponent
            },
            // {
            //   path: 'ocr-validation',
            //   loadChildren: () => import('../../../ocr-validation/ocr-validation.module').then(m => m.OcrValidationModule)
            // },
            {
                path: 'ribbon-tab-config',
                component: RibbonTabConfigComponent
            },
            {
                path: 'page-ribbon-design',
                component: RibbonDesignPageComponent
            }
        ]
    }
];
class PageBuilderAddRoutingModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddRoutingModule, imports: [i2.RouterModule], exports: [RouterModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddRoutingModule, imports: [RouterModule.forChild(routes), RouterModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });

class PageBuilderAddModule {
    constructor(injector) {
        registerPopupComponent(injector);
        registerDateRangeComponent(injector);
        registerRatingComponent(injector);
        registerFileUploadComponent(injector);
        registerGlobalSearchComponent(injector);
        registerBasicFileUploadComponent(injector);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddModule, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddModule, declarations: [PageBuilderAddComponent,
            SearchParamsComponent,
            GridConfigComponent,
            DesignPageComponent,
            QueryParamsComponent,
            PopupWrapperComponent,
            BasicInfoComponent,
            TabConfigComponent,
            DateRangeWrapperComponent,
            RoutingConfigComponent,
            RatingWrapperComponent,
            FileUploadWrapperComponent,
            GlobalSearchWrapperComponent,
            FileUploadBasicComponent,
            RibbonTabConfigComponent,
            RibbonDesignPageComponent], imports: [CommonModule,
            PageBuilderAddRoutingModule,
            NgbModule,
            FormioModule,
            FormsModule,
            ReactiveFormsModule,
            MaterialUIModule,
            DxListModule,
            SharedPipesModule,
            PrimengModule,
            GridListModule,
            DirectivesModule,
            PanelModule,
            TreeSelectModule,
            DragDropModule,
            AutoCompleteModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddModule, providers: [
            {
                provide: STEPPER_GLOBAL_OPTIONS,
                useValue: { displayDefaultIndicatorType: false }
            }
        ], imports: [CommonModule,
            PageBuilderAddRoutingModule,
            NgbModule,
            FormioModule,
            FormsModule,
            ReactiveFormsModule,
            MaterialUIModule,
            DxListModule,
            SharedPipesModule,
            PrimengModule,
            GridListModule,
            DirectivesModule,
            PanelModule,
            TreeSelectModule,
            DragDropModule,
            AutoCompleteModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PageBuilderAddComponent,
                        SearchParamsComponent,
                        GridConfigComponent,
                        DesignPageComponent,
                        QueryParamsComponent,
                        PopupWrapperComponent,
                        BasicInfoComponent,
                        TabConfigComponent,
                        DateRangeWrapperComponent,
                        RoutingConfigComponent,
                        RatingWrapperComponent,
                        FileUploadWrapperComponent,
                        GlobalSearchWrapperComponent,
                        FileUploadBasicComponent,
                        RibbonTabConfigComponent,
                        RibbonDesignPageComponent
                    ],
                    imports: [
                        CommonModule,
                        PageBuilderAddRoutingModule,
                        NgbModule,
                        FormioModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MaterialUIModule,
                        DxListModule,
                        SharedPipesModule,
                        PrimengModule,
                        GridListModule,
                        DirectivesModule,
                        PanelModule,
                        TreeSelectModule,
                        DragDropModule,
                        AutoCompleteModule
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                    providers: [
                        {
                            provide: STEPPER_GLOBAL_OPTIONS,
                            useValue: { displayDefaultIndicatorType: false }
                        }
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });

export { PageBuilderAddModule };
//# sourceMappingURL=pics-module-page-builder-page-builder-add.module-5049aa5d.mjs.map
