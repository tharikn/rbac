import { Location } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { Validators } from '@angular/forms';
import { NavigationEnd } from '@angular/router';
import { AuthService } from '../../@core/services/auth.service';
import { CommonDropdownsService } from '../../@core/services/common-dropdowns.service';
import { LocalService } from '../../@core/services/local.service';
import { PageBuilderAddService } from '../../@core/services/page-builder-add.service';
import { PageBuilderAddURL } from '../../@core/url/page-builder-add-url.config';
import { DesignPageComponent } from './design-page/design-page.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/router";
import * as i3 from "../../@core/services/alert.service";
import * as i4 from "../../@core/permissions/permission.store";
import * as i5 from "@angular/common";
import * as i6 from "primeng/steps";
import * as i7 from "primeng/inputswitch";
export class PageBuilderAddComponent {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddComponent, deps: [{ token: i0.Injector }, { token: i1.UntypedFormBuilder }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: i3.AlertService }, { token: i4.PermissionStore }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: PageBuilderAddComponent, selector: "app-page-builder-add", ngImport: i0, template: "<div class=\"position-relative\">\r\n  <div class=\"activepages\" *ngIf=\"id\">\r\n    <h5>{{ labelText }}</h5>\r\n    <p-inputSwitch\r\n      name=\"checkedChange\"\r\n      [(ngModel)]=\"checked2\"\r\n      inputId=\"checkedChange\"\r\n      (onChange)=\"getChange($event.checked)\"></p-inputSwitch>\r\n    <label aria-labelledby=\"checkedChange\" class=\"sr-only\">Locked / Unlocked</label>\r\n  </div>\r\n  <div class=\"wrk-user-list-wrp\">\r\n    <div class=\"wrk-user-list\" *ngFor=\"let item of onlineUsersList.shortNameUser\">\r\n      <span class=\"wrk-user-name text-uppercase\">{{ item.shortName }}</span>\r\n      <span class=\"wrk-user-tooltip\">{{ item.fullName }}</span>\r\n    </div>\r\n\r\n    <div class=\"wrk-user-list\" *ngIf=\"onlineUsersList.fullNameUser.length\">\r\n      <span class=\"wrk-user-name text-uppercase\">+{{ onlineUsersList.fullNameUser.length }}</span>\r\n      <span class=\"wrk-user-tooltip\">\r\n        <p *ngFor=\"let item of onlineUsersList.fullNameUser\">{{ item.fullName }}</p>\r\n      </span>\r\n    </div>\r\n    <div class=\"working-alert\" *ngIf=\"updateMessage\">\r\n      <div class=\"wrk-alert-wrp\">\r\n        <span>{{ updateMessage }}</span>\r\n        <span class=\"wrk-alert-close\" (click)=\"closeUpdateNotification()\"\r\n          ><i class=\"fa fa-times\" aria-hidden=\"true\"></i\r\n        ></span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"intakesteps mt-2\">\r\n    <p-steps [model]=\"authorisedTabs\" [(activeIndex)]=\"activeIndex\" [readonly]=\"false\" (activeIndexChange)=\"onActiveIndexChange($event)\"></p-steps>\r\n  </div>\r\n  <router-outlet (activate)=\"subscribeToPageDesign($event)\" (deactivate)=\"unsubscribeToPageDesign()\"></router-outlet>\r\n</div>\r\n", styles: [":root{--background-color: #f8f8f8;--navigation: #fff;--primary: #0D3178;--checkbox-border: #D6D5D5;--text-dark: #000;--label-text: #0D3178;--hover-text: #fff;--bg-light: #fff;--forms: #fff;--nav-text: #696969;--light-gray: #696969;--material-icons: #0D3178;--highlight-list: #e3f2fd;--table-header: #f9f9f9;--table-odd: #f7f7f7;--table-border: #ddd;--table-hover: #dbf6ff;--table-odd-color: #f2fcff;--btn: #0D3178;--menu-panel: #032361;--menu-level2: #28447E;--border-trans: transparent;--btn-hover: #1258A7;--btn-dark: #0D3178;--dropdown-list: #fff;--btncancel: #0D3178;--primary-light: #1258A7;--primary-dark: #0D3178;--light-d-light: #fff;--ldl-text: #fff;--light-d-accent: #fff;--header-bg: #f7f7f7;--secondary-color: #0D3178;--menu-link: #1258A7;--menu-highlight: #0084d1;--sumbmenu-selected: #0084D1;--profile-bg: #f3f9f9;--disabled: #7A8EB5;--accordion-header: #F5F5F5;--input-label: #1F1F1F;--input-field: #4C4C4C;--ghost: #A2A2A2;--table-label: #f1f1f1;--error-msg: #DC0404;--menu-hover: #1258A7;--var-icon-font: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;--rocket-icon: \"/assets/images/rocket-ship.svg\";--base-font-size: 16px;--font-11: 11px;--font-12: 12px;--font-13: 13px;--font-14: 14px;--font-15: 15px;--font-16: 16px;--font-17: 17px;--font-18: 18px;--font-19: 19px;--font-20: 20px;--font-21: 21px;--font-24: 24px;--font-26: 26px}.mat-horizontal-content-container,.mat-vertical-stepper-content{overflow:unset!important}.table.search td{vertical-align:middle}.display-field-table thead tr th:nth-child(2),.display-field-table tbody tr td:nth-child(2){width:100px}.widget-container{display:flex}.widget-container>*,.widget-field-container{height:300px;width:50%;margin-right:10px;box-sizing:border-box;background-color:#fff;border:1px solid #cecece}.widget-field-container{width:100%;overflow-y:scroll;padding:10px}.widget-field-container ul{list-style:none}.widget-field-container ul li{padding:10px 0;float:left;width:100%}.formio-component .card-header{padding:10px}.widget-field-container ul li span:first-child{display:inline-block;width:165px}.widget-field-container ul li span:nth-child(2){display:inline-block;width:130px}.widget-field-container div.tablename{font-style:italic;font-weight:600}.widget-field-container label{width:100%;text-align:right}.widget-field-container ul li label{text-align:left}.field{width:50%!important;float:left}.datatype{float:right!important;width:27%}.require{float:right!important;width:20%;margin-left:10px}.padding-0{padding:0}.health .mat-card-header{background-image:linear-gradient(to top,#1e3c72 0% 1%,#2a5298)!important;padding:5px!important;color:#fff!important}.health.mat-card{box-shadow:none}.health .mat-card-content{padding:5px!important}.working-alert{position:fixed;z-index:99;top:65px;right:20px}.working-alert .wrk-alert-wrp{background-color:#feb806;padding:15px 20px;width:100%;height:100%;border-radius:4px}.working-alert .wrk-alert-wrp span{color:#fff;font-weight:700}.working-alert .wrk-alert-wrp .wrk-alert-close{color:#fff;margin-left:10px;cursor:pointer}.wrk-user-list-wrp{position:relative;display:inline-block;margin:0 5px;float:right}.wrk-user-list-wrp .wrk-user-list{width:37px;height:37px;border-radius:50%;cursor:pointer;display:inline-block;margin:0 5px;position:relative}.wrk-user-list-wrp .wrk-user-list:hover .wrk-user-tooltip{display:block!important}.wrk-user-list-wrp .wrk-user-list:first-child{border:2px solid #864639;background:#fbded8}.wrk-user-list-wrp .wrk-user-list:first-child .wrk-user-name,.wrk-user-list-wrp .wrk-user-list:first-child .wrk-user-tooltip{color:#864639}.wrk-user-list-wrp .wrk-user-list:nth-child(2){border:2px solid #653854;background:#ebd3e1}.wrk-user-list-wrp .wrk-user-list:nth-child(2) .wrk-user-name,.wrk-user-list-wrp .wrk-user-list:nth-child(2) .wrk-user-tooltip{color:#653854}.wrk-user-list-wrp .wrk-user-list:last-child{border:2px solid #3d6538;background:#d3ebda}.wrk-user-list-wrp .wrk-user-list:last-child .wrk-user-name,.wrk-user-list-wrp .wrk-user-list:last-child .wrk-user-tooltip{color:#3d6538}.wrk-user-list-wrp .wrk-user-list .wrk-user-name{font-size:15px!important;font-weight:600;vertical-align:middle;text-align:center;display:block;line-height:2.3em}.wrk-user-list-wrp .wrk-user-list .wrk-user-tooltip{width:150px;background-color:#fff;text-align:center;border-radius:6px;padding:5px 10px;display:none;box-shadow:#00000040 0 .0625em .0625em,#00000040 0 .125em .5em,#ffffff1a 0 0 0 1px inset;font-weight:600;text-transform:capitalize;max-height:100px;overflow:auto;position:absolute;z-index:1;top:107%;left:50%;margin-left:-73px}.wrk-user-list-wrp .wrk-user-list .wrk-user-tooltip p{margin:3px 0!important;text-align:left}.activepages{position:absolute;z-index:1;top:0;left:20px}.activepages h5{font-size:var(--base-font-size)}.uploadFile{text-align:right}\n"], dependencies: [{ kind: "directive", type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.RouterOutlet, selector: "router-outlet", inputs: ["name"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i6.Steps, selector: "p-steps", inputs: ["activeIndex", "model", "readonly", "style", "styleClass", "exact"], outputs: ["activeIndexChange"] }, { kind: "component", type: i7.InputSwitch, selector: "p-inputSwitch", inputs: ["style", "styleClass", "tabindex", "inputId", "name", "disabled", "readonly", "trueValue", "falseValue", "ariaLabel", "ariaLabelledBy"], outputs: ["onChange"] }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-page-builder-add', encapsulation: ViewEncapsulation.None, template: "<div class=\"position-relative\">\r\n  <div class=\"activepages\" *ngIf=\"id\">\r\n    <h5>{{ labelText }}</h5>\r\n    <p-inputSwitch\r\n      name=\"checkedChange\"\r\n      [(ngModel)]=\"checked2\"\r\n      inputId=\"checkedChange\"\r\n      (onChange)=\"getChange($event.checked)\"></p-inputSwitch>\r\n    <label aria-labelledby=\"checkedChange\" class=\"sr-only\">Locked / Unlocked</label>\r\n  </div>\r\n  <div class=\"wrk-user-list-wrp\">\r\n    <div class=\"wrk-user-list\" *ngFor=\"let item of onlineUsersList.shortNameUser\">\r\n      <span class=\"wrk-user-name text-uppercase\">{{ item.shortName }}</span>\r\n      <span class=\"wrk-user-tooltip\">{{ item.fullName }}</span>\r\n    </div>\r\n\r\n    <div class=\"wrk-user-list\" *ngIf=\"onlineUsersList.fullNameUser.length\">\r\n      <span class=\"wrk-user-name text-uppercase\">+{{ onlineUsersList.fullNameUser.length }}</span>\r\n      <span class=\"wrk-user-tooltip\">\r\n        <p *ngFor=\"let item of onlineUsersList.fullNameUser\">{{ item.fullName }}</p>\r\n      </span>\r\n    </div>\r\n    <div class=\"working-alert\" *ngIf=\"updateMessage\">\r\n      <div class=\"wrk-alert-wrp\">\r\n        <span>{{ updateMessage }}</span>\r\n        <span class=\"wrk-alert-close\" (click)=\"closeUpdateNotification()\"\r\n          ><i class=\"fa fa-times\" aria-hidden=\"true\"></i\r\n        ></span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"intakesteps mt-2\">\r\n    <p-steps [model]=\"authorisedTabs\" [(activeIndex)]=\"activeIndex\" [readonly]=\"false\" (activeIndexChange)=\"onActiveIndexChange($event)\"></p-steps>\r\n  </div>\r\n  <router-outlet (activate)=\"subscribeToPageDesign($event)\" (deactivate)=\"unsubscribeToPageDesign()\"></router-outlet>\r\n</div>\r\n", styles: [":root{--background-color: #f8f8f8;--navigation: #fff;--primary: #0D3178;--checkbox-border: #D6D5D5;--text-dark: #000;--label-text: #0D3178;--hover-text: #fff;--bg-light: #fff;--forms: #fff;--nav-text: #696969;--light-gray: #696969;--material-icons: #0D3178;--highlight-list: #e3f2fd;--table-header: #f9f9f9;--table-odd: #f7f7f7;--table-border: #ddd;--table-hover: #dbf6ff;--table-odd-color: #f2fcff;--btn: #0D3178;--menu-panel: #032361;--menu-level2: #28447E;--border-trans: transparent;--btn-hover: #1258A7;--btn-dark: #0D3178;--dropdown-list: #fff;--btncancel: #0D3178;--primary-light: #1258A7;--primary-dark: #0D3178;--light-d-light: #fff;--ldl-text: #fff;--light-d-accent: #fff;--header-bg: #f7f7f7;--secondary-color: #0D3178;--menu-link: #1258A7;--menu-highlight: #0084d1;--sumbmenu-selected: #0084D1;--profile-bg: #f3f9f9;--disabled: #7A8EB5;--accordion-header: #F5F5F5;--input-label: #1F1F1F;--input-field: #4C4C4C;--ghost: #A2A2A2;--table-label: #f1f1f1;--error-msg: #DC0404;--menu-hover: #1258A7;--var-icon-font: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;--rocket-icon: \"/assets/images/rocket-ship.svg\";--base-font-size: 16px;--font-11: 11px;--font-12: 12px;--font-13: 13px;--font-14: 14px;--font-15: 15px;--font-16: 16px;--font-17: 17px;--font-18: 18px;--font-19: 19px;--font-20: 20px;--font-21: 21px;--font-24: 24px;--font-26: 26px}.mat-horizontal-content-container,.mat-vertical-stepper-content{overflow:unset!important}.table.search td{vertical-align:middle}.display-field-table thead tr th:nth-child(2),.display-field-table tbody tr td:nth-child(2){width:100px}.widget-container{display:flex}.widget-container>*,.widget-field-container{height:300px;width:50%;margin-right:10px;box-sizing:border-box;background-color:#fff;border:1px solid #cecece}.widget-field-container{width:100%;overflow-y:scroll;padding:10px}.widget-field-container ul{list-style:none}.widget-field-container ul li{padding:10px 0;float:left;width:100%}.formio-component .card-header{padding:10px}.widget-field-container ul li span:first-child{display:inline-block;width:165px}.widget-field-container ul li span:nth-child(2){display:inline-block;width:130px}.widget-field-container div.tablename{font-style:italic;font-weight:600}.widget-field-container label{width:100%;text-align:right}.widget-field-container ul li label{text-align:left}.field{width:50%!important;float:left}.datatype{float:right!important;width:27%}.require{float:right!important;width:20%;margin-left:10px}.padding-0{padding:0}.health .mat-card-header{background-image:linear-gradient(to top,#1e3c72 0% 1%,#2a5298)!important;padding:5px!important;color:#fff!important}.health.mat-card{box-shadow:none}.health .mat-card-content{padding:5px!important}.working-alert{position:fixed;z-index:99;top:65px;right:20px}.working-alert .wrk-alert-wrp{background-color:#feb806;padding:15px 20px;width:100%;height:100%;border-radius:4px}.working-alert .wrk-alert-wrp span{color:#fff;font-weight:700}.working-alert .wrk-alert-wrp .wrk-alert-close{color:#fff;margin-left:10px;cursor:pointer}.wrk-user-list-wrp{position:relative;display:inline-block;margin:0 5px;float:right}.wrk-user-list-wrp .wrk-user-list{width:37px;height:37px;border-radius:50%;cursor:pointer;display:inline-block;margin:0 5px;position:relative}.wrk-user-list-wrp .wrk-user-list:hover .wrk-user-tooltip{display:block!important}.wrk-user-list-wrp .wrk-user-list:first-child{border:2px solid #864639;background:#fbded8}.wrk-user-list-wrp .wrk-user-list:first-child .wrk-user-name,.wrk-user-list-wrp .wrk-user-list:first-child .wrk-user-tooltip{color:#864639}.wrk-user-list-wrp .wrk-user-list:nth-child(2){border:2px solid #653854;background:#ebd3e1}.wrk-user-list-wrp .wrk-user-list:nth-child(2) .wrk-user-name,.wrk-user-list-wrp .wrk-user-list:nth-child(2) .wrk-user-tooltip{color:#653854}.wrk-user-list-wrp .wrk-user-list:last-child{border:2px solid #3d6538;background:#d3ebda}.wrk-user-list-wrp .wrk-user-list:last-child .wrk-user-name,.wrk-user-list-wrp .wrk-user-list:last-child .wrk-user-tooltip{color:#3d6538}.wrk-user-list-wrp .wrk-user-list .wrk-user-name{font-size:15px!important;font-weight:600;vertical-align:middle;text-align:center;display:block;line-height:2.3em}.wrk-user-list-wrp .wrk-user-list .wrk-user-tooltip{width:150px;background-color:#fff;text-align:center;border-radius:6px;padding:5px 10px;display:none;box-shadow:#00000040 0 .0625em .0625em,#00000040 0 .125em .5em,#ffffff1a 0 0 0 1px inset;font-weight:600;text-transform:capitalize;max-height:100px;overflow:auto;position:absolute;z-index:1;top:107%;left:50%;margin-left:-73px}.wrk-user-list-wrp .wrk-user-list .wrk-user-tooltip p{margin:3px 0!important;text-align:left}.activepages{position:absolute;z-index:1;top:0;left:20px}.activepages h5{font-size:var(--base-font-size)}.uploadFile{text-align:right}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.UntypedFormBuilder }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.AlertService }, { type: i4.PermissionStore }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1idWlsZGVyLWFkZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9wYWdlLWJ1aWxkZXIvc3JjL2xpYi9waWNzLXBhZ2VidWlsZGVyL3BhZ2UtYnVpbGRlci9wYWdlLWJ1aWxkZXItYWRkL3BhZ2UtYnVpbGRlci1hZGQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvcGFnZS1idWlsZGVyL3NyYy9saWIvcGljcy1wYWdlYnVpbGRlci9wYWdlLWJ1aWxkZXIvcGFnZS1idWlsZGVyLWFkZC9wYWdlLWJ1aWxkZXItYWRkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUErQixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQXdDLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xGLE9BQU8sRUFBa0IsYUFBYSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFLeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNoRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7Ozs7O0FBUTFFLE1BQU0sT0FBTyx1QkFBdUI7SUFpQ3hCO0lBQ0E7SUFDQTtJQUNBO0lB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bW1vbic7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVbnR5cGVkRm9ybUJ1aWxkZXIsIFVudHlwZWRGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFBlcm1pc3Npb25TdG9yZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3Blcm1pc3Npb25zL3Blcm1pc3Npb24uc3RvcmUnO1xyXG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlcy9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tb25Ecm9wZG93bnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZXMvY29tbW9uLWRyb3Bkb3ducy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9jYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZXMvbG9jYWwuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhZ2VCdWlsZGVyQWRkU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2VzL3BhZ2UtYnVpbGRlci1hZGQuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhZ2VCdWlsZGVyQWRkVVJMIH0gZnJvbSAnLi4vLi4vQGNvcmUvdXJsL3BhZ2UtYnVpbGRlci1hZGQtdXJsLmNvbmZpZyc7XHJcbmltcG9ydCB7IERlc2lnblBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2Rlc2lnbi1wYWdlL2Rlc2lnbi1wYWdlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1wYWdlLWJ1aWxkZXItYWRkJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlLWJ1aWxkZXItYWRkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wYWdlLWJ1aWxkZXItYWRkLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VCdWlsZGVyQWRkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGZvcm1EYXRhOiBhbnk7XHJcbiAgZm9ybURldGFpbHMhOiBVbnR5cGVkRm9ybUdyb3VwO1xyXG4gIHBhZ2VUeXBlTGlzdDogYW55O1xyXG4gIHNjaGVtYUxpc3Q6IGFueTtcclxuICB0ZW1wbGF0ZUpTT046IGFueTtcclxuICBsYXlvdXQ6IGFueTtcclxuICBzdWJzY3JpYmVGb3JtRGF0YTogYW55O1xyXG4gIGpzb25Gb3JtOiBhbnk7XHJcbiAgaXNTaG93RGVzaWduID0gZmFsc2U7XHJcbiAgcmV2OiBhbnk7XHJcbiAgc2VsZWN0ZWRQYWdlVmFsdWUhOiBzdHJpbmc7XHJcbiAgb3JnTGlzdDogYW55O1xyXG4gIHVwZGF0ZU1lc3NhZ2U6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIG9ubGluZVVzZXJzTGlzdDogeyBzaG9ydE5hbWVVc2VyOiBBcnJheTxhbnk+OyBmdWxsTmFtZVVzZXI6IEFycmF5PGFueT4gfSA9IHtcclxuICAgIHNob3J0TmFtZVVzZXI6IFtdLFxyXG4gICAgZnVsbE5hbWVVc2VyOiBbXVxyXG4gIH07XHJcbiAgbG9nZWRJblVzZXI6IGFueTtcclxuICBhY3RpdmVJbmRleDogbnVtYmVyO1xyXG4gIHBhZ2VCdWlsZGVydGFiczogTWVudUl0ZW1bXSA9IFtdO1xyXG4gIC8vIHNlbGVjdGVkUGFnZVR5cGU6IHN0cmluZztcclxuICBhdXRob3Jpc2VkVGFiczogTWVudUl0ZW1bXSA9IFtdO1xyXG4gIGxhYmVsVGV4dCA9ICcnO1xyXG4gIGNoZWNrZWQyID0gdHJ1ZTtcclxuICBhdXRoOiBBdXRoU2VydmljZTtcclxuICBsb2NhbHN0b3JhZ2U6IExvY2FsU2VydmljZTtcclxuICBsb2NhdGlvbjogTG9jYXRpb247XHJcbiAgc2VydmljZTogUGFnZUJ1aWxkZXJBZGRTZXJ2aWNlO1xyXG4gIGRyb3Bkb3duU2VydmljZTogQ29tbW9uRHJvcGRvd25zU2VydmljZTtcclxuICBjYW5DaGFuZ2VGb3JtRGF0YSA9IHRydWU7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBVbnR5cGVkRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIGFsZXJ0OiBBbGVydFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBlcm1pc3Npb25TdG9yZTogUGVybWlzc2lvblN0b3JlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmF1dGggPSBpbmplY3Rvci5nZXQ8QXV0aFNlcnZpY2U+KEF1dGhTZXJ2aWNlKTtcclxuICAgIHRoaXMubG9jYWxzdG9yYWdlID0gaW5qZWN0b3IuZ2V0PExvY2FsU2VydmljZT4oTG9jYWxTZXJ2aWNlKTtcclxuICAgIHRoaXMubG9jYXRpb24gPSBpbmplY3Rvci5nZXQ8TG9jYXRpb24+KExvY2F0aW9uKTtcclxuICAgIHRoaXMuc2VydmljZSA9IGluamVjdG9yLmdldDxQYWdlQnVpbGRlckFkZFNlcnZpY2U+KFBhZ2VCdWlsZGVyQWRkU2VydmljZSk7XHJcbiAgICB0aGlzLmRyb3Bkb3duU2VydmljZSA9IGluamVjdG9yLmdldDxDb21tb25Ecm9wZG93bnNTZXJ2aWNlPihDb21tb25Ecm9wZG93bnNTZXJ2aWNlKTtcclxuICAgIGNvbnN0IHBlcm1pc3Npb24gPSB0aGlzLnBlcm1pc3Npb25TdG9yZS5zdGF0ZTtcclxuICAgIHRoaXMucGFnZUJ1aWxkZXJ0YWJzID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdCQVNJQyBQQUdFIElORk9STUFUSU9OJyxcclxuICAgICAgICByb3V0ZXJMaW5rOiAnYmFzaWMtaW5mbycsXHJcbiAgICAgICAgdmlzaWJsZTogcGVybWlzc2lvbi5QQUdfREVTX0JBU0lDX1BBR19JTkZPLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdHUklEIEZJRUxEJyxcclxuICAgICAgICByb3V0ZXJMaW5rOiAnZ3JpZC1maWVsZCcsXHJcbiAgICAgICAgdmlzaWJsZTogcGVybWlzc2lvbi5QQUdfREVTX0dSSURfRklFTERTLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdHUklEIEZJRUxEUycsXHJcbiAgICAgICAgcm91dGVyTGluazogJ2dyaWQtZmllbGQnLFxyXG4gICAgICAgIHZpc2libGU6IHBlcm1pc3Npb24uUEFHX0RFU19HUklEX0ZJRUxEUyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiAnRk9STSBGSUVMRFMnLFxyXG4gICAgICAgIHJvdXRlckxpbms6ICdncmlkLWZpZWxkJyxcclxuICAgICAgICB2aXNpYmxlOiBwZXJtaXNzaW9uLlBBR19ERVNfRk9STV9GSUVMRFMsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogJ0RFU0lHTiBQQUdFJyxcclxuICAgICAgICByb3V0ZXJMaW5rOiAncGFnZS1kZXNpZ24nLFxyXG4gICAgICAgIHZpc2libGU6IHBlcm1pc3Npb24uUEFHX0RFU19ERVNfUEFHLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdHUklEIENPTkZJR1VSQVRJT04nLFxyXG4gICAgICAgIHJvdXRlckxpbms6ICdncmlkLWNvbmZpZycsXHJcbiAgICAgICAgdmlzaWJsZTogcGVybWlzc2lvbi5QQUdfREVTX0dSSURfQ09ORklHLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdUQUIgQ09ORklHVVJBVElPTicsXHJcbiAgICAgICAgcm91dGVyTGluazogJ3RhYi1jb25maWcnLFxyXG4gICAgICAgIHZpc2libGU6IHBlcm1pc3Npb24uUEFHX0RFU19UQUJfQ09ORklHXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogJ1JPVVRJTkcgQ09ORklHVVJBVElPTicsXHJcbiAgICAgICAgcm91dGVyTGluazogJ3JvdXRpbmctY29uZmlnJyxcclxuICAgICAgICB2aXNpYmxlOiBwZXJtaXNzaW9uLlBBR19ERVNfUk9VVEVfQ09ORklHXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogJ1JJQkJPTiBUQUIgQ09ORklHVVJBVElPTicsXHJcbiAgICAgICAgcm91dGVyTGluazogJ3JpYmJvbi10YWItY29uZmlnJyxcclxuICAgICAgICB2aXNpYmxlOiBwZXJtaXNzaW9uLlBBR19ERVNfUklCQk9OX1RBQl9DT05GSUdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiAnUklCQk9OIERFU0lHTiBQQUdFJyxcclxuICAgICAgICByb3V0ZXJMaW5rOiAncGFnZS1yaWJib24tZGVzaWduJyxcclxuICAgICAgICB2aXNpYmxlOiBwZXJtaXNzaW9uLlBBR19ERVNfUklCQk9OX0RFU19QQUdcclxuICAgICAgfVxyXG4gICAgXTtcclxuICAgIHRoaXMucGFnZUJ1aWxkZXJ0YWJzID0gdGhpcy5wYWdlQnVpbGRlcnRhYnMuZmlsdGVyKGl0ZW0gPT4gaXRlbS52aXNpYmxlKTtcclxuICAgIHRoaXMuc2VydmljZS5jdXJyZW50UGFnZVR5cGUuc3Vic2NyaWJlKHBhZ2UgPT4gdGhpcy5nZXRBdXRob3Jpc2VkVGFicyhwYWdlICYmIHR5cGVvZiBwYWdlID09PSBcInN0cmluZ1wiID8gSlNPTi5wYXJzZShwYWdlKSA6IHBhZ2UpKTtcclxuICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcclxuICAgICAgICBpZiAoZXZlbnQudXJsLmluY2x1ZGVzKCdhZGQnKSB8fCBldmVudC51cmwuaW5jbHVkZXMoJ2VkaXQnKSkge1xyXG4gICAgICAgICAgdGhpcy5jYW5DaGFuZ2VGb3JtRGF0YSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyBwdWJsaWMgZm9ybTogYW55O1xyXG4gIGlkOiBzdHJpbmcgfCBudWxsID0gJyc7XHJcbiAgb25saW5lVXNlckxpc3RTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICB1cGRhdGVOb3RpZmljYXRpb25TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XHJcbiAgICB0aGlzLnJldiA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdyZXYnKTtcclxuICAgIHRoaXMuZ2V0QmFzaWNJbmZvKCk7XHJcbiAgICB0aGlzLmxvZ2VkSW5Vc2VyID0gdGhpcy5sb2NhbHN0b3JhZ2UuZ2V0T2JqKCd1c2VyJyk7XHJcbiAgICB0aGlzLmdldEF1dGhvcmlzZWRUYWJzKCk7XHJcbiAgICB0aGlzLmxvYWRGb3JtKCk7XHJcbiAgICAvLyB0aGlzLmxvYWREcm9wRG93bnMoKTtcclxuICAgIHRoaXMuZ2V0UGFnZVVybCgpO1xyXG4gICAgdGhpcy5zdWJzY3JpYmVGb3JtRGF0YSA9IHRoaXMuc2VydmljZS5jdXJyZW50Rm9ybURhdGEuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5mb3JtRGF0YSA9IGRhdGE7XHJcbiAgICAgIHRoaXMuanNvbkZvcm0gPSB0aGlzLmZvcm1EYXRhPy50ZW1wbGF0ZWpzb24gPyB0aGlzLmZvcm1EYXRhPy50ZW1wbGF0ZWpzb24gOiBbXTtcclxuICAgICAgdGhpcy5sYXlvdXQgPSB0aGlzLmZvcm1EYXRhICYmIHRoaXMuZm9ybURhdGEubGF5b3V0dHlwZSA/IHRoaXMuZm9ybURhdGEubGF5b3V0dHlwZSA6ICcnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXJ2aWNlLmN1cnJlbnRCYXNpY0RhdGEuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICBpZiAodGhpcy5mb3JtRGF0YSkge1xyXG4gICAgICAgICAgdGhpcy5mb3JtRGF0YS5wYWdlbmFtZSA9IGRhdGEucGFnZW5hbWU7XHJcbiAgICAgICAgICB0aGlzLmZvcm1EYXRhLnBhZ2V0eXBlID0gZGF0YS5wYWdldHlwZTtcclxuICAgICAgICAgIHRoaXMuZm9ybURhdGEuZGVzY3JpcHRpb24gPSBkYXRhLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgdGhpcy5mb3JtRGF0YS5vcmdhbml6YXRpb25pZCA9IGRhdGEub3JnYW5pemF0aW9uaWQ7XHJcbiAgICAgICAgICB0aGlzLmZvcm1EYXRhLm1vZHVsZWtleSA9IGRhdGEubW9kdWxla2V5O1xyXG4gICAgICAgICAgdGhpcy5mb3JtRGF0YS5zdWJtb2R1bGVrZXkgPSBkYXRhLnN1Ym1vZHVsZWtleTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gdGhpcy5nZXRPcmdMaXN0KCk7XHJcbiAgfVxyXG4gIG9uQWN0aXZlSW5kZXhDaGFuZ2UoZXZlbnQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgaXNTYXZlZCA9IHRoaXMubG9jYWxzdG9yYWdlLmdldEl0ZW0oJ2lzVGFibGVGaWVsZHNTYXZlZCcpID09PSAndHJ1ZSc7XHJcbiAgICBjb25zdCBpc1NjaGVtYVNlbGVjdGVkID0gdGhpcy5sb2NhbHN0b3JhZ2UuZ2V0SXRlbSgnaXNTY2hlbWFTZWxlY3RlZCcpID09PSAndHJ1ZSc7XHJcbiAgICBjb25zdCBpc1RhYmxlU2VsZWN0ZWQgPSB0aGlzLmxvY2Fsc3RvcmFnZS5nZXRJdGVtKCdpc1RhYmxlU2VsZWN0ZWQnKSA9PT0gJ3RydWUnO1xyXG4gICAgY29uc3QgaXNDb2x1bW5DaGVja2VkID0gdGhpcy5sb2NhbHN0b3JhZ2UuZ2V0SXRlbSgnaXNDb2x1bW5DaGVja2VkJykgPT09ICd0cnVlJztcclxuICAgIGNvbnN0IHZhbGlkYXRlRmllbGRzID0gdGhpcy5maWVsZFZhbGlkYXRpb24oKTtcclxuICAgIGlmIChldmVudCA9PT0gMiAmJiAhaXNTYXZlZCkge1xyXG4gICAgICBsZXQgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gICAgICBpZiAoIWlzU2NoZW1hU2VsZWN0ZWQgJiYgIXRoaXMuaWQpIGVycm9yTWVzc2FnZSA9ICdQbGVhc2Ugc2VsZWN0IHRoZSBzY2hlbWEuJztcclxuICAgICAgZWxzZSBpZiAoIWlzVGFibGVTZWxlY3RlZCAmJiAhdGhpcy5pZCkgZXJyb3JNZXNzYWdlID0gJ1BsZWFzZSBzZWxlY3QgdGhlIHRhYmxlLic7XHJcbiAgICAgIGVsc2UgaWYgKCFpc0NvbHVtbkNoZWNrZWQgJiYgIXRoaXMuaWQpIGVycm9yTWVzc2FnZSA9ICdQbGVhc2Ugc2VsZWN0IGF0IGxlYXN0IG9uZSBjb2x1bW4uJztcclxuICAgICAgZWxzZSBpZiAodmFsaWRhdGVGaWVsZHMgJiYgIXRoaXMuaWQpIGVycm9yTWVzc2FnZSA9ICdDbGljayB0aGUgTmV4dCBidXR0b24gdG8gcHJvY2VlZC4nO1xyXG5cclxuICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSAxO1xyXG4gICAgICAgIGNvbnN0IHJvdXRlUGF0aCA9IHRoaXMuaWQgPyBgL3BhZ2VzL3BhZ2UtZGVzaWduL2VkaXQvJHt0aGlzLmlkfS9ncmlkLWZpZWxkYCA6ICcvcGFnZXMvcGFnZS1kZXNpZ24vYWRkL2dyaWQtZmllbGQnO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtyb3V0ZVBhdGhdLCB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUgfSk7XHJcbiAgICAgICAgdGhpcy5hbGVydC5lcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5hY3RpdmVJbmRleCA9IGV2ZW50O1xyXG4gIH1cclxuXHJcblxyXG4gIGZpZWxkVmFsaWRhdGlvbigpIHtcclxuICAgIGNvbnN0IGlzU2NoZW1hU2VsZWN0ZWQgPSB0aGlzLmxvY2Fsc3RvcmFnZS5nZXRJdGVtKCdpc1NjaGVtYVNlbGVjdGVkJykgPT09ICd0cnVlJztcclxuICAgIGNvbnN0IGlzVGFibGVTZWxlY3RlZCA9IHRoaXMubG9jYWxzdG9yYWdlLmdldEl0ZW0oJ2lzVGFibGVTZWxlY3RlZCcpID09PSAndHJ1ZSc7XHJcbiAgICBjb25zdCBpc0NvbHVtbkNoZWNrZWQgPSB0aGlzLmxvY2Fsc3RvcmFnZS5nZXRJdGVtKCdpc0NvbHVtbkNoZWNrZWQnKSA9PT0gJ3RydWUnO1xyXG4gICAgcmV0dXJuIGlzU2NoZW1hU2VsZWN0ZWQgJiYgaXNUYWJsZVNlbGVjdGVkICYmIGlzQ29sdW1uQ2hlY2tlZDtcclxuICB9XHJcblxyXG4gIGdldEJhc2ljSW5mbygpIHtcclxuICAgIGNvbnN0IGVkaXRCYWljRGV0YWlscyA9IHRoaXMubG9jYWxzdG9yYWdlLmdldE9iaignRURJVEJBU0lDSU5GTycpO1xyXG4gICAgaWYgKGVkaXRCYWljRGV0YWlscz8ucGFnZURldGFpbHM/LmxvY2tlZCkge1xyXG4gICAgICB0aGlzLmNoZWNrZWQyID0gdHJ1ZTtcclxuICAgICAgdGhpcy5sYWJlbFRleHQgPSAnTG9ja2VkJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2hlY2tlZDIgPSBmYWxzZTtcclxuICAgICAgdGhpcy5sYWJlbFRleHQgPSAnVW5sb2NrZWQnO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXRQYWdlVXJsKCkge1xyXG4gICAgbGV0IHVybCA9IFBhZ2VCdWlsZGVyQWRkVVJMLkVuZFBvaW50cy5wYWdlX2NvbmZpZy5wYWdlVmVyc2lvbi5yZXBsYWNlKCd7aWR9JywgdGhpcy5pZCk7XHJcbiAgICBpZiAodGhpcy5yZXYpXHJcbiAgICAgIHVybCA9IFBhZ2VCdWlsZGVyQWRkVVJMLkVuZFBvaW50cy5wYWdlX2NvbmZpZy5wYWdlYXVkaXQucmVwbGFjZSgne2lkfScsIHRoaXMuaWQpLnJlcGxhY2UoJ3tpZDJ9JywgdGhpcy5yZXYpO1xyXG4gICAgaWYgKHRoaXMuaWQpIHtcclxuICAgICAgdGhpcy5nZXRQYWdlQVBpKHVybCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmpzb25Gb3JtID0ge1xyXG4gICAgICAgIGNvbXBvbmVudHM6IFtdXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldFBhZ2VBUGkodXJsKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UuZ2V0QWxsUGFnZSh1cmwpLnN1YnNjcmliZSgocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIHRoaXMuZm9ybURhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICB0aGlzLmZvcm1EZXRhaWxzLnBhdGNoVmFsdWUodGhpcy5mb3JtRGF0YSk7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnNldEZvcm1EYXRhKHRoaXMuZm9ybURhdGEpO1xyXG4gICAgICAgIHRoaXMubGF5b3V0ID0gdGhpcy5mb3JtRGF0YSAmJiB0aGlzLmZvcm1EYXRhLmxheW91dHR5cGUgPyB0aGlzLmZvcm1EYXRhLmxheW91dHR5cGUgOiAnJztcclxuICAgICAgICB0aGlzLmpzb25Gb3JtID0gdGhpcy5mb3JtRGF0YS50ZW1wbGF0ZWpzb24gPyB0aGlzLmZvcm1EYXRhLnRlbXBsYXRlanNvbiA6IFtdO1xyXG4gICAgICAgIHRoaXMuc2V0VGltZXRvR2V0UGFnZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgc2V0VGltZXRvR2V0UGFnZSgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5wYWdlVHlwZUxpc3QgJiYgdGhpcy5wYWdlVHlwZUxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgZE5hbWUgPSB0aGlzLnBhZ2VUeXBlTGlzdC5maWx0ZXIoa2V5ID0+IGtleS5yZWZrZXkgPT09IHRoaXMuZm9ybURhdGEucGFnZXR5cGUpO1xyXG4gICAgICAgIGlmIChkTmFtZS5sZW5ndGgpIHtcclxuICAgICAgICAgIHRoaXMuc2V0VG9vbHRpcChkTmFtZVswXVsnZGlzcGxheXZhbHVlJ10pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcblxyXG4gIGdldEF1dGhvcmlzZWRUYWJzKHBhZ2U/OiBhbnkpIHtcclxuICAgIGlmIChwYWdlKSB7XHJcbiAgICAgIGlmIChwYWdlWzBdLmxvb2t1cGtleSA9PT0gJ0JHUCcgfHwgcGFnZVswXS5sb29rdXBrZXkgPT09ICdCVVNQJykge1xyXG4gICAgICAgIHRoaXMuYXV0aG9yaXNlZFRhYnMgPSB0aGlzLnBhZ2VCdWlsZGVydGFicy5maWx0ZXIoXHJcbiAgICAgICAgICBhID0+IGEubGFiZWwgPT09ICdCQVNJQyBQQUdFIElORk9STUFUSU9OJyB8fCBhLmxhYmVsID09PSAnR1JJRCBGSUVMRFMnIHx8IGEubGFiZWwgPT09ICdHUklEIENPTkZJR1VSQVRJT04nXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIGlmIChwYWdlWzBdLmxvb2t1cGtleSA9PT0gJ0FUUEJETScpIHtcclxuICAgICAgICB0aGlzLmF1dGhvcmlzZWRUYWJzID0gdGhpcy5wYWdlQnVpbGRlcnRhYnMuZmlsdGVyKFxyXG4gICAgICAgICAgYSA9PiBhLmxhYmVsID09PSAnQkFTSUMgUEFHRSBJTkZPUk1BVElPTicgfHwgYS5sYWJlbCA9PT0gJ0ZPUk0gRklFTERTJyB8fCBhLmxhYmVsID09PSAnREVTSUdOIFBBR0UnXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIGlmIChwYWdlWzBdLmxvb2t1cGtleSA9PT0gJ0NQJykge1xyXG4gICAgICAgIHRoaXMuYXV0aG9yaXNlZFRhYnMgPSB0aGlzLnBhZ2VCdWlsZGVydGFicy5maWx0ZXIoXHJcbiAgICAgICAgICBhID0+IGEubGFiZWwgPT09ICdCQVNJQyBQQUdFIElORk9STUFUSU9OJyB8fCBhLnJvdXRlckxpbmsgPT09ICdyb3V0aW5nLWNvbmZpZydcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2UgaWYgKHBhZ2VbMF0ubG9va3Vwa2V5ID09PSAnQlRQJykge1xyXG4gICAgICAgIHRoaXMuYXV0aG9yaXNlZFRhYnMgPSB0aGlzLnBhZ2VCdWlsZGVydGFicy5maWx0ZXIoXHJcbiAgICAgICAgICBhID0+IGEubGFiZWwgPT09ICdCQVNJQyBQQUdFIElORk9STUFUSU9OJyB8fCBhLnJvdXRlckxpbmsgPT09ICd0YWItY29uZmlnJ1xyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSBpZiAocGFnZVswXS5sb29rdXBrZXkgPT09ICdGRlAnKSB7XHJcbiAgICAgICAgdGhpcy5hdXRob3Jpc2VkVGFicyA9IHRoaXMucGFnZUJ1aWxkZXJ0YWJzLmZpbHRlcihcclxuICAgICAgICAgIGEgPT4gYS5sYWJlbCA9PT0gJ0JBU0lDIFBBR0UgSU5GT1JNQVRJT04nIHx8IGEubGFiZWwgPT09ICdERVNJR04gUEFHRSdcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2UgaWYgKHBhZ2VbMF0ubG9va3Vwa2V5ID09PSAnUkJUUCcpIHtcclxuICAgICAgICB0aGlzLmF1dGhvcmlzZWRUYWJzID0gdGhpcy5wYWdlQnVpbGRlcnRhYnMuZmlsdGVyKFxyXG4gICAgICAgICAgYSA9PiBhLmxhYmVsID09PSAnQkFTSUMgUEFHRSBJTkZPUk1BVElPTicgfHwgYS5yb3V0ZXJMaW5rID09PSAncmliYm9uLXRhYi1jb25maWcnXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIGlmIChwYWdlWzBdLmxvb2t1cGtleSA9PT0gJ0RSJykge1xyXG4gICAgICAgIHRoaXMuYXV0aG9yaXNlZFRhYnMgPSB0aGlzLnBhZ2VCdWlsZGVydGFicy5maWx0ZXIoXHJcbiAgICAgICAgICBhID0+IGEubGFiZWwgPT09ICdCQVNJQyBQQUdFIElORk9STUFUSU9OJyB8fCBhLmxhYmVsID09PSAnRk9STSBGSUVMRFMnIHx8IGEubGFiZWwgPT09ICdSSUJCT04gREVTSUdOIFBBR0UnXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXJ2aWNlLmF1dGhvcmlzZWRUYWJzID0gdGhpcy5hdXRob3Jpc2VkVGFicztcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5zdWJzY3JpYmVGb3JtRGF0YS51bnN1YnNjcmliZSgpO1xyXG4gICAgaWYgKHRoaXMuY2FuQ2hhbmdlRm9ybURhdGEpIHtcclxuICAgICAgdGhpcy5zZXJ2aWNlLnNldEZvcm1EYXRhKCcnKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2VydmljZS5zZXRCYXNpY0RhdGEoJycpO1xyXG4gIH1cclxuXHJcbiAgLy8gbG9hZERyb3BEb3ducygpOiB2b2lkIHtcclxuICAvLyAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLmdldERyb3BEb3duVmFsdWVzKCdwYWdlJykuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgLy8gICAgIHRoaXMucGFnZVR5cGVMaXN0ID0gcmVzdWx0WydkYXRhJ107XHJcbiAgLy8gICB9KTtcclxuICAvLyB9XHJcblxyXG4gIGxvYWRGb3JtKCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb3JtRGV0YWlscyA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICBwYWdlbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgaWQ6IFsnJ10sXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBwYWdldHlwZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgb3JnYW5pemF0aW9uaWQ6IFsnU2VsZWN0LUFMTCcsIFZhbGlkYXRvcnMucmVxdWlyZWRdLCAvLyB0aGlzLmF1dGguZ2V0T3JnSUQoKVxyXG4gICAgICBtb2R1bGVrZXk6IFsnJ10sXHJcbiAgICAgIHN1Ym1vZHVsZWtleTogWycnXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2FkU2NoZW1hcygpIHtcclxuICAgIHRoaXMuc2VydmljZS5nZXRTY2hlbWEoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgdGhpcy5zY2hlbWFMaXN0ID0gcmVzdWx0WydkYXRhJ107XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNhdmVMYXlvdXQoKSB7XHJcbiAgICBjb25zdCBmb3JtRGV0YWlscyA9IHRoaXMuZm9ybURhdGE7XHJcbiAgICBmb3JtRGV0YWlscy5sYXlvdXR0eXBlID0gdGhpcy5sYXlvdXQ7XHJcbiAgICBpZiAodGhpcy5pZCkge1xyXG4gICAgICBmb3JtRGV0YWlscy5pZCA9IHRoaXMuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXJ2aWNlLmNyZWF0ZVBhZ2UoZm9ybURldGFpbHMpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuaWQpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVzdWx0WydkYXRhJ107XHJcbiAgICAgICAgaWYgKHJlc3VsdCAmJiBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgpIHtcclxuICAgICAgICAgIGNvbnN0IGlkID0gZGF0YS5pZCA/IGRhdGEuaWQgOiAnJztcclxuICAgICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uL2VkaXQnLCBpZF0sIHsgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hbGVydC5zdWNjZXNzKCdQYWdlIHNhdmVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXNldEZvcm06IGFueSA9ICgpID0+IHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKHRoaXMuaWQgPyBbJy4uLy4uL2xpc3QnXSA6IFsnLi4vJ10sIHtcclxuICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZ29Ub0Rlc2lnblBhZ2UoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaWQpIHtcclxuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZm9ybURldGFpbHMuZ2V0UmF3VmFsdWUoKTtcclxuICAgICAgdGhpcy5zZXJ2aWNlLnNldEZvcm1EYXRhKGRhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuZm9ybURhdGEpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2Uuc2V0QmFzaWNEYXRhKHRoaXMuZm9ybURldGFpbHMuZ2V0UmF3VmFsdWUoKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHNob3dEZXNpZ24oKSB7XHJcbiAgLy8gICB0aGlzLmlzU2hvd0Rlc2lnbiA9ICF0aGlzLmlzU2hvd0Rlc2lnbjtcclxuICAvLyB9XHJcblxyXG4gIGZvcm1TdWJtaXQ6IGFueSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGZvcm1EZXRhaWxzID0gdGhpcy5mb3JtRGF0YTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuanNvbkZvcm0pO1xyXG4gICAgZm9ybURldGFpbHMudGVtcGxhdGVqc29uID0gSlNPTi5zdHJpbmdpZnkodGhpcy5qc29uRm9ybSk7XHJcbiAgICBpZiAodGhpcy5pZCkge1xyXG4gICAgICBmb3JtRGV0YWlscy5pZCA9IHRoaXMuaWQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlcnZpY2UuY3JlYXRlUGFnZShmb3JtRGV0YWlscykuc3Vic2NyaWJlKHBhZ2VzID0+IHtcclxuICAgICAgaWYgKCF0aGlzLmlkKSB7XHJcbiAgICAgICAgaWYgKHBhZ2VzICYmIE9iamVjdC5rZXlzKHBhZ2VzWydkYXRhJ10pLmxlbmd0aCkge1xyXG4gICAgICAgICAgY29uc3QgaWQgPSBwYWdlc1snZGF0YSddLmlkID8gcGFnZXNbJ2RhdGEnXS5pZCA6ICcnO1xyXG4gICAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vZWRpdCcsIGlkXSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmFsZXJ0LnN1Y2Nlc3MoJ1BhZ2Ugc2F2ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzZXRUb29sdGlwKGRpc3BsYXlWYWx1ZSkge1xyXG4gICAgdGhpcy5zZWxlY3RlZFBhZ2VWYWx1ZSA9IGRpc3BsYXlWYWx1ZTtcclxuICB9XHJcblxyXG4gIGdvQmFjaygpIHtcclxuICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0T3JnTGlzdCgpIHtcclxuICAgIHRoaXMuc2VydmljZS5nZXRBbGxPcmdhbmlzYXRpb25zKCkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgIGlmIChyZXMgJiYgcmVzWydkYXRhJ10ubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5vcmdMaXN0ID0gcmVzWydkYXRhJ10uc29ydCgoYSwgYikgPT4gYT8ubmFtZT8ubG9jYWxlQ29tcGFyZShiPy5uYW1lKSk7XHJcbiAgICAgICAgdGhpcy5vcmdMaXN0Lmxlbmd0aCA9PT0gMVxyXG4gICAgICAgICAgPyB0aGlzLmZvcm1EZXRhaWxzLnBhdGNoVmFsdWUoeyBvcmdhbml6YXRpb25pZDogdGhpcy5vcmdMaXN0WzBdLmlkIH0pXHJcbiAgICAgICAgICA6IHRoaXMuZm9ybURldGFpbHMucGF0Y2hWYWx1ZSh7IG9yZ2FuaXphdGlvbmlkOiAnU2VsZWN0LUFMTCcgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5vcmdMaXN0ID0gW107XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3Vic2NyaWJlVG9QYWdlRGVzaWduKGNvbXBvbmVudFJlZikge1xyXG4gICAgaWYgKCEoY29tcG9uZW50UmVmIGluc3RhbmNlb2YgRGVzaWduUGFnZUNvbXBvbmVudCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlc2lnblBhZ2U6IERlc2lnblBhZ2VDb21wb25lbnQgPSBjb21wb25lbnRSZWY7XHJcbiAgICB0aGlzLm9ubGluZVVzZXJMaXN0U3Vic2NyaXB0aW9uID0gZGVzaWduUGFnZS5vbmxpbmVVc2VyTGlzdC5zdWJzY3JpYmUoZXZlbnQgPT4gdGhpcy5vbmxpbmVVc2VyTGlzdChldmVudCwgdGhpcykpO1xyXG4gICAgdGhpcy51cGRhdGVOb3RpZmljYXRpb25TdWJzY3JpcHRpb24gPSBkZXNpZ25QYWdlLnVwZGF0ZU5vdGlmaWNhdGlvbi5zdWJzY3JpYmUoZXZlbnQgPT5cclxuICAgICAgdGhpcy5zaG93VXBkYXRlTm90aWZpY2F0aW9uKGV2ZW50LCB0aGlzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHVuc3Vic2NyaWJlVG9QYWdlRGVzaWduKCkge1xyXG4gICAgY29uc29sZS5sb2coJ1Vuc3Vic2NyaWJpbmcuLi4nKTtcclxuICAgIGlmICh0aGlzLm9ubGluZVVzZXJMaXN0U3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMub25saW5lVXNlckxpc3RTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnVwZGF0ZU5vdGlmaWNhdGlvblN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLnVwZGF0ZU5vdGlmaWNhdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvd1VwZGF0ZU5vdGlmaWNhdGlvbihldmVudCwgX3RoaXMpIHtcclxuICAgIGNvbnNvbGUubG9nKGBTb2NrZXQgJHtldmVudH1gKTtcclxuICAgIF90aGlzLnVwZGF0ZU1lc3NhZ2UgPSBldmVudDtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBfdGhpcy51cGRhdGVNZXNzYWdlID0gbnVsbDtcclxuICAgIH0sIDUwMDApO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VVcGRhdGVOb3RpZmljYXRpb24oKSB7XHJcbiAgICB0aGlzLnVwZGF0ZU1lc3NhZ2UgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgb25saW5lVXNlckxpc3QoZXZlbnQsIF90aGlzKSB7XHJcbiAgICBjb25zdCB1c2VyTGlzdCA9IGV2ZW50Lm1hcChlbCA9PiBlbC51c2VyKTtcclxuICAgIGNvbnNvbGUubG9nKGBTb2NrZXQgJHt1c2VyTGlzdH1gKTtcclxuXHJcbiAgICBjb25zdCBmaW5Vc2VySW5kZXggPSB1c2VyTGlzdC5maW5kSW5kZXgoZWwgPT4gZWwuaWQgPT09IF90aGlzLmxvZ2VkSW5Vc2VyLmlkKTtcclxuXHJcbiAgICBpZiAoZmluVXNlckluZGV4ID4gLTEpIHtcclxuICAgICAgdXNlckxpc3Quc3BsaWNlKGZpblVzZXJJbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaXRlbTogeyBzaG9ydE5hbWVVc2VyOiBBcnJheTxhbnk+OyBmdWxsTmFtZVVzZXI6IEFycmF5PGFueT4gfSA9IHtcclxuICAgICAgc2hvcnROYW1lVXNlcjogW10sXHJcbiAgICAgIGZ1bGxOYW1lVXNlcjogW11cclxuICAgIH07XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VyTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0ge1xyXG4gICAgICAgIHNob3J0TmFtZTogdXNlckxpc3RbaV0uZmlyc3RuYW1lLnNwbGl0KCcnKVswXS50b1VwcGVyQ2FzZSgpICsgdXNlckxpc3RbaV0ubGFzdG5hbWUuc3BsaXQoJycpWzBdLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgICAgZnVsbE5hbWU6IGAke3VzZXJMaXN0W2ldLmZpcnN0bmFtZX0gJHt1c2VyTGlzdFtpXS5sYXN0bmFtZX1gXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAoaSA+PSAyKSB7XHJcbiAgICAgICAgaXRlbS5mdWxsTmFtZVVzZXIucHVzaChlbGVtZW50KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpdGVtLnNob3J0TmFtZVVzZXIucHVzaChlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF90aGlzLm9ubGluZVVzZXJzTGlzdCA9IGl0ZW07XHJcblxyXG4gICAgY29uc29sZS5sb2coYFNvY2tldCAke190aGlzLm9ubGluZVVzZXJzTGlzdH1gKTtcclxuICB9XHJcbiAgZ2V0Q2hhbmdlKHRleHQpIHtcclxuICAgIHRoaXMuY2hlY2tlZDIgPSB0ZXh0O1xyXG4gICAgaWYgKHRoaXMuY2hlY2tlZDIpIHtcclxuICAgICAgdGhpcy5sYWJlbFRleHQgPSAnTG9ja2VkJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubGFiZWxUZXh0ID0gJ1VubG9ja2VkJztcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlUGFnZVN0YXR1cygpO1xyXG4gIH1cclxuICB1cGRhdGVQYWdlU3RhdHVzKCkge1xyXG4gICAgY29uc3QgaW5wdXRSZXF1ZXN0ID0ge1xyXG4gICAgICBsb2NrZWQ6IHRoaXMuY2hlY2tlZDIgPyB0cnVlIDogZmFsc2VcclxuICAgIH07XHJcbiAgICB0aGlzLnNlcnZpY2UuZWRpdFBhZ2VTdGF0dXMoaW5wdXRSZXF1ZXN0LCB0aGlzLmZvcm1EYXRhLnBhZ2VpZCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuY2hlY2tlZDIpIHtcclxuICAgICAgICB0aGlzLmFsZXJ0LnN1Y2Nlc3MoJ1BhZ2UgaXMgbG9ja2VkIScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYWxlcnQuc3VjY2VzcygnUGFnZSBpcyBVbmxvY2tlZCEnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJhY3RpdmVwYWdlc1wiICpuZ0lmPVwiaWRcIj5cclxuICAgIDxoNT57eyBsYWJlbFRleHQgfX08L2g1PlxyXG4gICAgPHAtaW5wdXRTd2l0Y2hcclxuICAgICAgbmFtZT1cImNoZWNrZWRDaGFuZ2VcIlxyXG4gICAgICBbKG5nTW9kZWwpXT1cImNoZWNrZWQyXCJcclxuICAgICAgaW5wdXRJZD1cImNoZWNrZWRDaGFuZ2VcIlxyXG4gICAgICAob25DaGFuZ2UpPVwiZ2V0Q2hhbmdlKCRldmVudC5jaGVja2VkKVwiPjwvcC1pbnB1dFN3aXRjaD5cclxuICAgIDxsYWJlbCBhcmlhLWxhYmVsbGVkYnk9XCJjaGVja2VkQ2hhbmdlXCIgY2xhc3M9XCJzci1vbmx5XCI+TG9ja2VkIC8gVW5sb2NrZWQ8L2xhYmVsPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJ3cmstdXNlci1saXN0LXdycFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIndyay11c2VyLWxpc3RcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBvbmxpbmVVc2Vyc0xpc3Quc2hvcnROYW1lVXNlclwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIndyay11c2VyLW5hbWUgdGV4dC11cHBlcmNhc2VcIj57eyBpdGVtLnNob3J0TmFtZSB9fTwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJ3cmstdXNlci10b29sdGlwXCI+e3sgaXRlbS5mdWxsTmFtZSB9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ3cmstdXNlci1saXN0XCIgKm5nSWY9XCJvbmxpbmVVc2Vyc0xpc3QuZnVsbE5hbWVVc2VyLmxlbmd0aFwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIndyay11c2VyLW5hbWUgdGV4dC11cHBlcmNhc2VcIj4re3sgb25saW5lVXNlcnNMaXN0LmZ1bGxOYW1lVXNlci5sZW5ndGggfX08L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwid3JrLXVzZXItdG9vbHRpcFwiPlxyXG4gICAgICAgIDxwICpuZ0Zvcj1cImxldCBpdGVtIG9mIG9ubGluZVVzZXJzTGlzdC5mdWxsTmFtZVVzZXJcIj57eyBpdGVtLmZ1bGxOYW1lIH19PC9wPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ3b3JraW5nLWFsZXJ0XCIgKm5nSWY9XCJ1cGRhdGVNZXNzYWdlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ3cmstYWxlcnQtd3JwXCI+XHJcbiAgICAgICAgPHNwYW4+e3sgdXBkYXRlTWVzc2FnZSB9fTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIndyay1hbGVydC1jbG9zZVwiIChjbGljayk9XCJjbG9zZVVwZGF0ZU5vdGlmaWNhdGlvbigpXCJcclxuICAgICAgICAgID48aSBjbGFzcz1cImZhIGZhLXRpbWVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pXHJcbiAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiaW50YWtlc3RlcHMgbXQtMlwiPlxyXG4gICAgPHAtc3RlcHMgW21vZGVsXT1cImF1dGhvcmlzZWRUYWJzXCIgWyhhY3RpdmVJbmRleCldPVwiYWN0aXZlSW5kZXhcIiBbcmVhZG9ubHldPVwiZmFsc2VcIiAoYWN0aXZlSW5kZXhDaGFuZ2UpPVwib25BY3RpdmVJbmRleENoYW5nZSgkZXZlbnQpXCI+PC9wLXN0ZXBzPlxyXG4gIDwvZGl2PlxyXG4gIDxyb3V0ZXItb3V0bGV0IChhY3RpdmF0ZSk9XCJzdWJzY3JpYmVUb1BhZ2VEZXNpZ24oJGV2ZW50KVwiIChkZWFjdGl2YXRlKT1cInVuc3Vic2NyaWJlVG9QYWdlRGVzaWduKClcIj48L3JvdXRlci1vdXRsZXQ+XHJcbjwvZGl2PlxyXG4iXX0=