import { Component, ViewEncapsulation } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { AppConstants } from '../@core/constants/app-constants';
import { AlertService } from '../@core/services/alert.service';
import { LocalService } from '../@core/services/local.service';
import { PageBuilderService } from '../@core/services/page-builder.service';
import * as i0 from "@angular/core";
import * as i1 from "../@core/services/page-builder.service";
import * as i2 from "@angular/router";
import * as i3 from "../@core/services/auth.service";
import * as i4 from "@angular/forms";
import * as i5 from "../@core/services/page-builder-add.service";
import * as i6 from "../@core/services/dynamicsearch.service";
import * as i7 from "../@core/services/data-store.service";
import * as i8 from "primeng/card";
import * as i9 from "primeng/ripple";
import * as i10 from "../@shared/alert/alert.component";
import * as i11 from "../@shared/grid-list/grid-list.component";
import * as i12 from "../@core/directives/permission.directive";
export class PageBuilderComponent {
    pageBuilderService;
    router;
    route;
    auth;
    fb;
    pageBuilderAddService;
    dynamicSearchService;
    _storeservice;
    pageList;
    tableColumns;
    updateGrid;
    totalcount = 0;
    orgSubs;
    orgId;
    filterOptions;
    filterForm;
    gridOptions;
    gridId;
    localstore;
    alertService;
    dataSource;
    http;
    storage;
    socket;
    pageBuilderServ;
    inputValidationMethod;
    RBACORG;
    constructor(injector, pageBuilderService, router, route, auth, fb, pageBuilderAddService, dynamicSearchService, _storeservice) {
        this.pageBuilderService = pageBuilderService;
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.fb = fb;
        this.pageBuilderAddService = pageBuilderAddService;
        this.dynamicSearchService = dynamicSearchService;
        this._storeservice = _storeservice;
        this.localstore = injector.get(LocalService);
        this.alertService = injector.get(AlertService);
        this.pageBuilderServ = injector.get(PageBuilderService);
        this.gridOptions = [
            { label: 'Sorting', value: 'sort', code: '' },
            { label: 'Filtering', value: 'filter', code: '' },
            { label: 'Hide', value: 'hide', code: '' },
            { label: 'Fixed', value: 'fixed', code: '' },
            { label: 'Default Columns', value: 'Choosable', code: '' },
            { label: 'Visible', value: 'visible', code: '' },
            { label: 'Date', value: 'dateFormat', code: '' },
            // { label: 'Mobile', value: 'mobileView', code: '' },
            // { label: 'Tab', value: 'tabView', code: '' }
        ];
        this.gridId = 'page-list-grid';
        this.orgSubs = this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.inputValidationMethod = res['INPUTVALIDATIONMETHOD'];
                this.RBACORG = res['RBACORG'];
                this.socket = this.RBACORG['socket'];
                this.orgId = parseInt(this.RBACORG['orgID']);
                if (this.orgId) {
                    this.getPageDesignList(this.pageBuilderService);
                }
            }
        });
    }
    form;
    id = '';
    onlineUserListSubscription;
    updateNotificationSubscription;
    ngOnInit() {
        this.localstore.setObj('EDITBASICINFO', '');
        this.localstore.setObj('CREATE PAGE', false);
        // $(document).on('click', '.strip_head .dropdown-menu', function (e) {
        //   e.stopPropagation();
        // });
        this.loadFilterForm();
        this.setGridColumns();
        this.getGridConfig();
    }
    ngOnDestroy() {
        this.orgSubs.unsubscribe();
    }
    getPageDesignList(http) {
        const data = {};
        function isNotEmpty(value) {
            return value !== undefined && value !== null && value !== '';
        }
        const _this = this;
        this.dataSource = new CustomStore({
            load(loadOptions) {
                console.log('data');
                ['skip', 'take', 'requireTotalCount', 'requireGroupCount', 'sort', 'filter', 'pageconfig', 'group'].forEach(item => {
                    if (item in loadOptions && isNotEmpty(loadOptions[item])) {
                        data[item] = loadOptions[item];
                    }
                    else {
                        delete data[item];
                    }
                });
                return new Promise((resolve, reject) => {
                    let sort = '';
                    if (isNotEmpty(data['sort'])) {
                        sort = JSON.stringify(data['sort']);
                    }
                    http.getAllPageDesigns(_this.auth.getOrgID() ? _this.auth.getOrgID() : `${_this.orgId}?returnUserPage=false&skip=${data['skip']}&take=${data['take']}&filter=${data['filter']}&sort=${sort}`)
                        .subscribe({
                        next: (result) => {
                            result.data.data.forEach(page => {
                                page.status = page.isEnable ? 'Active' : 'Inactive';
                            });
                            const response = {
                                data: result.data.data,
                                totalCount: result.data.totalcount ? result.data.totalcount : 0
                            };
                            resolve(response);
                        },
                        error: (error) => {
                            reject(error);
                        }
                    });
                });
            }
        });
        console.log(this.dataSource);
    }
    goToBuilder() {
        this.localstore.setObj('SELECTED_PAGE', '');
        this.pageBuilderAddService.setPageType('');
        this.localstore.setObj('PAGEDESIGN_BASICINFO', '');
        this.localstore.setObj('CREATE PAGE', true);
        this.router.navigate(['../add/basic-info'], { relativeTo: this.route });
    }
    setGridColumns() {
        this.tableColumns = [
            {
                columnDef: 'id',
                header: 'Page Id',
                cell: (element) => `${element.id}`,
                dateFormat: false,
                icon: false,
                filter: true,
                link: false,
                sort: false,
                hide: false,
                fixed: false,
                Choosable: false,
                visible: false,
                selected: ['filter']
            },
            {
                columnDef: 'activeVersion.pagename',
                header: 'Page Name',
                cell: (element) => `${element.activeVersion.pagename}`,
                dateFormat: false,
                icon: false,
                filter: true,
                link: false,
                sort: false,
                hide: false,
                fixed: false,
                Choosable: false,
                visible: false,
                selected: ['filter']
            },
            {
                columnDef: 'pageTypeDetails.value',
                header: 'Page Type',
                cell: (element) => `${element.pageTypeDetails.value}`,
                dateFormat: false,
                icon: false,
                filter: true,
                link: false,
                sort: false,
                hide: false,
                fixed: false,
                Choosable: false,
                visible: false,
                selected: ['filter']
            },
            {
                columnDef: 'insertedOn',
                header: 'Created On',
                cell: (element) => `${element.insertedOn}`,
                dateFormat: true,
                icon: false,
                filter: true,
                link: false,
                sort: false,
                hide: false,
                fixed: false,
                Choosable: false,
                visible: false,
                selected: ['filter', 'dateFormat']
            },
            {
                columnDef: 'insertedByDetails.firstname',
                header: 'Created By',
                cell: (element) => `${element.pageTypeDetails.value}`,
                dateFormat: false,
                icon: false,
                filter: true,
                link: false,
                sort: false,
                hide: false,
                fixed: false,
                Choosable: false,
                visible: false,
                selected: ['filter']
            },
            {
                columnDef: 'activeVersion.description',
                header: 'Description',
                cell: (element) => `${element.activeVersion.description}`,
                dateFormat: false,
                icon: false,
                filter: true,
                link: false,
                sort: false,
                hide: false,
                fixed: false,
                Choosable: false,
                visible: false,
                selected: ['filter']
            },
            {
                columnDef: 'status',
                header: 'Status',
                cell: (element) => `${element.status}`,
                dateFormat: false,
                icon: false,
                filter: true,
                link: false,
                sort: false,
                hide: false,
                fixed: false,
                Choosable: false,
                visible: true,
                selected: ['filter']
            }
        ];
        this.updateGrid = {
            edit: true,
            view: true,
            lock: true,
            version: true,
            activatePage: true,
            deactivatePage: true,
            duplicate: true,
            delete: false,
            externalLink: false
        };
        this.setFilterOptions(this.tableColumns);
    }
    viewVersions(evt) {
        if (evt) {
            this.router.navigate(['../versions/', evt.data.id], { relativeTo: this.route });
        }
    }
    //   updatePage(_evnet) {
    //     // This is intentional
    //   }
    editTableRow(evt) {
        this.localstore.setObj('EDITBASICINFO', evt.data);
        this.localstore.setObj('PAGEDESIGN_BASICINFO', '');
        const loginUser = sessionStorage.getItem('id');
        console.log(loginUser);
        if (evt.data.locked && Number(loginUser) === evt.data.lockedby) {
            this.router.navigate(['../edit/' + evt.data.id + '/basic-info'], { relativeTo: this.route });
        }
        if (evt.data.locked && Number(loginUser) !== evt.data.lockedby) {
            this.alertService.error('Locked By - ' + (evt.data.lockedbyUser.lastname + ' ' + evt.data.lockedbyUser.firstname));
        }
        else {
            this.router.navigate(['../edit/' + evt.data.id + '/basic-info'], { relativeTo: this.route });
        }
    }
    viewTableRow(evt) {
        if (evt.data.pageTypeDetails.key == 'BGP') {
            this.router.navigate(['../../dynamic-search/view/', evt.data.id], { relativeTo: this.route });
        }
        else if (evt.data.pageTypeDetails.key == 'BTP') {
            this.alertService.info('Navigating to tab view...');
            this.router.navigate([`pages/dynamic/tab/${evt.data.id}`]);
        }
        else {
            this.router.navigate(['../view', evt.data.id], { relativeTo: this.route });
        }
    }
    duplicateRow(evt) {
        this.pageBuilderService.duplicateDesignPage({}, evt.data.id).subscribe(response => {
            this.alertService.success(response['data'].pagename + ' created successfully');
            this.getPageDesignList(this.pageBuilderService);
        }, _error => {
            this.alertService.error(AppConstants.errorMessage);
        });
    }
    loadFilterForm() {
        this.filterForm = this.fb.group({
            selectedFilter: ['']
        });
    }
    getGridConfig() {
        this.dynamicSearchService.getStaticGridConfig(this.gridId).subscribe((res) => {
            if (res && res.data?.config) {
                const sampleData = res.data?.config;
                const columnResponseConfig = JSON.parse(sampleData);
                this.tableColumns = columnResponseConfig;
                this.setFilterOptions(columnResponseConfig);
            }
            else {
                this.setGridColumns();
            }
        });
    }
    setFilterOptions(colConfig) {
        const options = [];
        const arr = [];
        colConfig.map(col => {
            options.push({
                columnName: col.header,
                items: this.gridOptions.map(op => {
                    return {
                        id: `${col.columnDef}-${op.value}`,
                        label: op.label,
                        value: op.value,
                        code: col.columnDef,
                        active: col[op.value] === true ? true : false
                    };
                })
            });
            col.selected.map(v => arr.push(`${col.columnDef}-${v}`));
        });
        this.filterOptions = options;
        this.filterForm.patchValue({ selectedFilter: arr });
    }
    changeFilterOptions(e) {
        const [code, value] = e.itemValue.split('-');
        const isExists = this.tableColumns.filter(col => {
            return col.columnDef === code && !!col[value];
        });
        if (isExists.length === 0) {
            this.tableColumns.forEach(tc => {
                tc[value] = tc.columnDef === code ? true : tc[value];
                if (tc.columnDef === code) {
                    tc?.selected.push(value);
                }
                return tc;
            });
        }
        else {
            this.conditionCheckElse(value, code);
        }
        const columnConfig = JSON.stringify(this.tableColumns);
        this.saveGridConfig(columnConfig);
    }
    conditionCheckElse(value, code) {
        this.tableColumns.forEach(c => {
            c[value] = c.columnDef === code ? false : c[value];
            if (c.columnDef === code) {
                c?.selected?.forEach((s, i) => {
                    s === value && c?.selected.splice(i, 1);
                });
            }
            return c;
        });
    }
    saveGridConfig(data) {
        const reqBody = {
            type: 'STATIC_GRID',
            mappedid: this.gridId,
            config: data
        };
        this.dynamicSearchService.saveGridUserPreference(reqBody).subscribe(_r => {
            this.getGridConfig();
        });
    }
    activatePage(event) {
        const pageId = event.data.id;
        this.pageBuilderService.activatePage(pageId).subscribe(_response => {
            this.alertService.success('Page activated successfully.');
            this.getPageDesignList(this.pageBuilderService);
        }, _error => {
            this.alertService.error('Failed to activate page. Please try again.');
        });
    }
    deactivatePage(event) {
        const pageId = event.data.id;
        this.pageBuilderService.deactivatePage(pageId).subscribe(_response => {
            this.alertService.success('Page deactivated successfully.');
            this.getPageDesignList(this.pageBuilderService);
        }, _error => {
            this.alertService.error('Failed to deactivate page. Please try again.');
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderComponent, deps: [{ token: i0.Injector }, { token: i1.PageBuilderService }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: i3.AuthService }, { token: i4.UntypedFormBuilder }, { token: i5.PageBuilderAddService }, { token: i6.DynamicsearchService }, { token: i7.DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: PageBuilderComponent, selector: "lib-page-builder", ngImport: i0, template: "<app-alert></app-alert>\r\n<div class=\"page-design\">\r\n  <div class=\"strip_head def-addIcon toggleleft d-flex justify-content-between px-3\">\r\n    <div class=\"f-left\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-primary btn-icon my-2\"\r\n        title=\"Add New Page\"\r\n        fieldKey=\"PAG_DES_GRID_LIST_ADD_NEW_PAGE\"\r\n        (click)=\"goToBuilder()\"\r\n        pRipple>\r\n        <em class=\"pi pi-plus font-weight-bold\"></em>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12 mb-4\">\r\n      <p-card styleClass=\"rbac-card gridview w-100\">\r\n        <app-grid-list\r\n          [dataSource]=\"dataSource\"\r\n          [updateGrid]=\"updateGrid\"\r\n          [columns]=\"tableColumns\"\r\n          [totalCount]=\"totalcount\"\r\n          (editTableRow)=\"editTableRow($event)\"\r\n          (viewTableRow)=\"viewTableRow($event)\"\r\n          (viewVersions)=\"viewVersions($event)\"\r\n          (duplicateRow)=\"duplicateRow($event)\"\r\n          (activatePage)=\"activatePage($event)\"\r\n          (deactivatePage)=\"deactivatePage($event)\"\r\n          [remoteOperations]=\"false\">\r\n        </app-grid-list>\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n", styles: [":root{--background-color: #f8f8f8;--navigation: #fff;--primary: #0D3178;--checkbox-border: #D6D5D5;--text-dark: #000;--label-text: #0D3178;--hover-text: #fff;--bg-light: #fff;--forms: #fff;--nav-text: #696969;--light-gray: #696969;--material-icons: #0D3178;--highlight-list: #e3f2fd;--table-header: #f9f9f9;--table-odd: #f7f7f7;--table-border: #ddd;--table-hover: #dbf6ff;--table-odd-color: #f2fcff;--btn: #0D3178;--menu-panel: #032361;--menu-level2: #28447E;--border-trans: transparent;--btn-hover: #1258A7;--btn-dark: #0D3178;--dropdown-list: #fff;--btncancel: #0D3178;--primary-light: #1258A7;--primary-dark: #0D3178;--light-d-light: #fff;--ldl-text: #fff;--light-d-accent: #fff;--header-bg: #f7f7f7;--secondary-color: #0D3178;--menu-link: #1258A7;--menu-highlight: #0084d1;--sumbmenu-selected: #0084D1;--profile-bg: #f3f9f9;--disabled: #7A8EB5;--accordion-header: #F5F5F5;--input-label: #1F1F1F;--input-field: #4C4C4C;--ghost: #A2A2A2;--table-label: #f1f1f1;--error-msg: #DC0404;--menu-hover: #1258A7;--var-icon-font: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;--rocket-icon: \"/assets/images/rocket-ship.svg\";--base-font-size: 16px;--font-11: 11px;--font-12: 12px;--font-13: 13px;--font-14: 14px;--font-15: 15px;--font-16: 16px;--font-17: 17px;--font-18: 18px;--font-19: 19px;--font-20: 20px;--font-21: 21px;--font-24: 24px;--font-26: 26px}:host ::ng-deep .page-design .gridview.p-card .card-body,:host ::ng-deep .page-design .gridview.p-card .p-card-body,:host ::ng-deep .page-design .gridview.card .card-body,:host ::ng-deep .page-design .gridview.card .p-card-body{padding-top:0;padding-bottom:0;background:var(--bg-light)}:host ::ng-deep .page-design .p-card-content{padding:0}:host ::ng-deep .page-design .dropdown-menu,:host ::ng-deep .page-design .p-component{font-size:var(--base-font-size)}:host ::ng-deep .page-design .dropdown-item.active,:host ::ng-deep .page-design .dropdown-item:active{background:transparent;color:#16181b}:host ::ng-deep .page-design .checkbox label{cursor:pointer}:host ::ng-deep .page-design .dropdown-item:focus{background:#431e8d12}:host ::ng-deep .page-design .dropdown-item:hover{background:#431e8d12}:host ::ng-deep .page-design .checkbox label,:host ::ng-deep .page-design .radio label{min-height:inherit}:host ::ng-deep .page-design .filter-menu{padding:8px;border:1px solid #a7a7a7;max-height:180px;overflow-y:auto}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar{width:4px!important;height:4px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-track{background:#f6f6f6!important;border-radius:2px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-corner{background:#f6f6f6!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-thumb{background:#0d3178!important;border-radius:2px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-thumb:hover{background:#0d3178!important}:host ::ng-deep .page-design .p-checkbox{width:16px;height:16px}:host ::ng-deep .page-design .p-checkbox .p-checkbox-box{width:16px;height:16px}:host ::ng-deep .page-design .p-checkbox .p-checkbox-box .p-checkbox-icon{font-size:9px;font-weight:600}.def-addIcon{position:relative;margin-bottom:-50px;z-index:1;top:0;float:left}\n"], dependencies: [{ kind: "directive", type: i2.RouterOutlet, selector: "router-outlet", inputs: ["name"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }, { kind: "component", type: i8.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { kind: "directive", type: i9.Ripple, selector: "[pRipple]" }, { kind: "component", type: i10.AlertComponent, selector: "app-alert" }, { kind: "component", type: i11.GridListComponent, selector: "app-grid-list", inputs: ["dataList", "dataSource", "columns", "updateGrid", "totalCount", "page", "isShow", "exportPageName"], outputs: ["currentPage", "editTableRow", "viewTableRow", "deleteTableRow", "openExternalLink", "openpopupLink", "routeTo", "openPopup", "sortOrder", "filterSearchValue", "filterBuilderPopup", "filterPanel", "multipleFilterValues", "downloadTableRow", "toggleRow", "duplicateRow", "viewVersions", "activateVersion", "activatePage", "deactivatePage", "duplicatePageVersion", "selectedRowsData"] }, { kind: "directive", type: i12.PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-page-builder', encapsulation: ViewEncapsulation.None, template: "<app-alert></app-alert>\r\n<div class=\"page-design\">\r\n  <div class=\"strip_head def-addIcon toggleleft d-flex justify-content-between px-3\">\r\n    <div class=\"f-left\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-primary btn-icon my-2\"\r\n        title=\"Add New Page\"\r\n        fieldKey=\"PAG_DES_GRID_LIST_ADD_NEW_PAGE\"\r\n        (click)=\"goToBuilder()\"\r\n        pRipple>\r\n        <em class=\"pi pi-plus font-weight-bold\"></em>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12 mb-4\">\r\n      <p-card styleClass=\"rbac-card gridview w-100\">\r\n        <app-grid-list\r\n          [dataSource]=\"dataSource\"\r\n          [updateGrid]=\"updateGrid\"\r\n          [columns]=\"tableColumns\"\r\n          [totalCount]=\"totalcount\"\r\n          (editTableRow)=\"editTableRow($event)\"\r\n          (viewTableRow)=\"viewTableRow($event)\"\r\n          (viewVersions)=\"viewVersions($event)\"\r\n          (duplicateRow)=\"duplicateRow($event)\"\r\n          (activatePage)=\"activatePage($event)\"\r\n          (deactivatePage)=\"deactivatePage($event)\"\r\n          [remoteOperations]=\"false\">\r\n        </app-grid-list>\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n", styles: [":root{--background-color: #f8f8f8;--navigation: #fff;--primary: #0D3178;--checkbox-border: #D6D5D5;--text-dark: #000;--label-text: #0D3178;--hover-text: #fff;--bg-light: #fff;--forms: #fff;--nav-text: #696969;--light-gray: #696969;--material-icons: #0D3178;--highlight-list: #e3f2fd;--table-header: #f9f9f9;--table-odd: #f7f7f7;--table-border: #ddd;--table-hover: #dbf6ff;--table-odd-color: #f2fcff;--btn: #0D3178;--menu-panel: #032361;--menu-level2: #28447E;--border-trans: transparent;--btn-hover: #1258A7;--btn-dark: #0D3178;--dropdown-list: #fff;--btncancel: #0D3178;--primary-light: #1258A7;--primary-dark: #0D3178;--light-d-light: #fff;--ldl-text: #fff;--light-d-accent: #fff;--header-bg: #f7f7f7;--secondary-color: #0D3178;--menu-link: #1258A7;--menu-highlight: #0084d1;--sumbmenu-selected: #0084D1;--profile-bg: #f3f9f9;--disabled: #7A8EB5;--accordion-header: #F5F5F5;--input-label: #1F1F1F;--input-field: #4C4C4C;--ghost: #A2A2A2;--table-label: #f1f1f1;--error-msg: #DC0404;--menu-hover: #1258A7;--var-icon-font: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;--rocket-icon: \"/assets/images/rocket-ship.svg\";--base-font-size: 16px;--font-11: 11px;--font-12: 12px;--font-13: 13px;--font-14: 14px;--font-15: 15px;--font-16: 16px;--font-17: 17px;--font-18: 18px;--font-19: 19px;--font-20: 20px;--font-21: 21px;--font-24: 24px;--font-26: 26px}:host ::ng-deep .page-design .gridview.p-card .card-body,:host ::ng-deep .page-design .gridview.p-card .p-card-body,:host ::ng-deep .page-design .gridview.card .card-body,:host ::ng-deep .page-design .gridview.card .p-card-body{padding-top:0;padding-bottom:0;background:var(--bg-light)}:host ::ng-deep .page-design .p-card-content{padding:0}:host ::ng-deep .page-design .dropdown-menu,:host ::ng-deep .page-design .p-component{font-size:var(--base-font-size)}:host ::ng-deep .page-design .dropdown-item.active,:host ::ng-deep .page-design .dropdown-item:active{background:transparent;color:#16181b}:host ::ng-deep .page-design .checkbox label{cursor:pointer}:host ::ng-deep .page-design .dropdown-item:focus{background:#431e8d12}:host ::ng-deep .page-design .dropdown-item:hover{background:#431e8d12}:host ::ng-deep .page-design .checkbox label,:host ::ng-deep .page-design .radio label{min-height:inherit}:host ::ng-deep .page-design .filter-menu{padding:8px;border:1px solid #a7a7a7;max-height:180px;overflow-y:auto}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar{width:4px!important;height:4px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-track{background:#f6f6f6!important;border-radius:2px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-corner{background:#f6f6f6!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-thumb{background:#0d3178!important;border-radius:2px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-thumb:hover{background:#0d3178!important}:host ::ng-deep .page-design .p-checkbox{width:16px;height:16px}:host ::ng-deep .page-design .p-checkbox .p-checkbox-box{width:16px;height:16px}:host ::ng-deep .page-design .p-checkbox .p-checkbox-box .p-checkbox-icon{font-size:9px;font-weight:600}.def-addIcon{position:relative;margin-bottom:-50px;z-index:1;top:0;float:left}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.PageBuilderService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.AuthService }, { type: i4.UntypedFormBuilder }, { type: i5.PageBuilderAddService }, { type: i6.DynamicsearchService }, { type: i7.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1idWlsZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL3BhZ2UtYnVpbGRlci9zcmMvbGliL3BpY3MtcGFnZWJ1aWxkZXIvcGFnZS1idWlsZGVyL3BhZ2UtYnVpbGRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9wYWdlLWJ1aWxkZXIvc3JjL2xpYi9waWNzLXBhZ2VidWlsZGVyL3BhZ2UtYnVpbGRlci9wYWdlLWJ1aWxkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBK0IsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUYsT0FBTyxXQUFXLE1BQU0sOEJBQThCLENBQUM7QUFHdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUkvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFL0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBTzVFLE1BQU0sT0FBTyxvQkFBb0I7SUF1QnRCO0lBQ0M7SUFDQTtJQUNEO0lBQ0M7SUFDQTtJQUNBO0lBQ0E7SUE1QlYsUUFBUSxDQUFNO0lBQ2QsWUFBWSxDQUFRO0lBQ3BCLFVBQVUsQ0FBTTtJQUNoQixVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsT0FBTyxDQUFnQjtJQUN2QixLQUFLLENBQU07SUFDWCxhQUFhLENBQVE7SUFDckIsVUFBVSxDQUFvQjtJQUM5QixXQUFXLENBQW1EO0lBQzlELE1BQU0sQ0FBTTtJQUNaLFVBQVUsQ0FBZTtJQUN6QixZQUFZLENBQWU7SUFDM0IsVUFBVSxDQUFNO0lB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LENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNsRCxDQUFDLEVBQ0QsTUFBTSxDQUFDLEVBQUU7WUFDUCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1FBQzFFLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzt3R0EvWlUsb0JBQW9COzRGQUFwQixvQkFBb0Isd0RDckJqQyx3MENBcUNBOzs0RkRoQmEsb0JBQW9CO2tCQU5oQyxTQUFTOytCQUNFLGtCQUFrQixpQkFDYixpQkFBaUIsQ0FBQyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVudHlwZWRGb3JtQnVpbGRlciwgVW50eXBlZEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCBDdXN0b21TdG9yZSBmcm9tICdkZXZleHRyZW1lL2RhdGEvY3VzdG9tX3N0b3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFNvY2tldCB9IGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5pbXBvcnQgeyBBcHBDb25zdGFudHMgfSBmcm9tICcuLi9AY29yZS9jb25zdGFudHMvYXBwLWNvbnN0YW50cyc7XHJcbmltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gJy4uL0Bjb3JlL3NlcnZpY2VzL2FsZXJ0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL0Bjb3JlL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi9AY29yZS9zZXJ2aWNlcy9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEeW5hbWljc2VhcmNoU2VydmljZSB9IGZyb20gJy4uL0Bjb3JlL3NlcnZpY2VzL2R5bmFtaWNzZWFyY2guc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2FsU2VydmljZSB9IGZyb20gJy4uL0Bjb3JlL3NlcnZpY2VzL2xvY2FsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYWdlQnVpbGRlckFkZFNlcnZpY2UgfSBmcm9tICcuLi9AY29yZS9zZXJ2aWNlcy9wYWdlLWJ1aWxkZXItYWRkLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYWdlQnVpbGRlclNlcnZpY2UgfSBmcm9tICcuLi9AY29yZS9zZXJ2aWNlcy9wYWdlLWJ1aWxkZXIuc2VydmljZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLXBhZ2UtYnVpbGRlcicsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZS1idWlsZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wYWdlLWJ1aWxkZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZUJ1aWxkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIHBhZ2VMaXN0OiBhbnk7XHJcbiAgdGFibGVDb2x1bW5zOiBhbnlbXTtcclxuICB1cGRhdGVHcmlkOiBhbnk7XHJcbiAgdG90YWxjb3VudCA9IDA7XHJcbiAgb3JnU3VicyE6IFN1YnNjcmlwdGlvbjtcclxuICBvcmdJZDogYW55O1xyXG4gIGZpbHRlck9wdGlvbnM6IGFueVtdO1xyXG4gIGZpbHRlckZvcm0hOiBVbnR5cGVkRm9ybUdyb3VwO1xyXG4gIGdyaWRPcHRpb25zOiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmc7IGNvZGU6IHN0cmluZyB9W107XHJcbiAgZ3JpZElkOiBhbnk7XHJcbiAgbG9jYWxzdG9yZTogTG9jYWxTZXJ2aWNlO1xyXG4gIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlO1xyXG4gIGRhdGFTb3VyY2U6IGFueTtcclxuICBodHRwOiBIdHRwQ2xpZW50O1xyXG4gIHN0b3JhZ2U6IExvY2FsU2VydmljZTtcclxuICBzb2NrZXQ6IFNvY2tldFxyXG4gIHBhZ2VCdWlsZGVyU2VydjogUGFnZUJ1aWxkZXJTZXJ2aWNlO1xyXG4gIGlucHV0VmFsaWRhdGlvbk1ldGhvZDogYW55O1xyXG4gIFJCQUNPUkc6IGFueTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIHB1YmxpYyBwYWdlQnVpbGRlclNlcnZpY2U6IFBhZ2VCdWlsZGVyU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHB1YmxpYyBhdXRoOiBBdXRoU2VydmljZSxcclxuICAgIHByaXZhdGUgZmI6IFVudHlwZWRGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgcGFnZUJ1aWxkZXJBZGRTZXJ2aWNlOiBQYWdlQnVpbGRlckFkZFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGR5bmFtaWNTZWFyY2hTZXJ2aWNlOiBEeW5hbWljc2VhcmNoU2VydmljZSxcclxuICAgIHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5sb2NhbHN0b3JlID0gaW5qZWN0b3IuZ2V0PExvY2FsU2VydmljZT4oTG9jYWxTZXJ2aWNlKTtcclxuICAgIHRoaXMuYWxlcnRTZXJ2aWNlID0gaW5qZWN0b3IuZ2V0PEFsZXJ0U2VydmljZT4oQWxlcnRTZXJ2aWNlKTtcclxuICAgIHRoaXMucGFnZUJ1aWxkZXJTZXJ2ID0gaW5qZWN0b3IuZ2V0PFBhZ2VCdWlsZGVyU2VydmljZT4oUGFnZUJ1aWxkZXJTZXJ2aWNlKTtcclxuXHJcbiAgICB0aGlzLmdyaWRPcHRpb25zID0gW1xyXG4gICAgICB7IGxhYmVsOiAnU29ydGluZycsIHZhbHVlOiAnc29ydCcsIGNvZGU6ICcnIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdGaWx0ZXJpbmcnLCB2YWx1ZTogJ2ZpbHRlcicsIGNvZGU6ICcnIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdIaWRlJywgdmFsdWU6ICdoaWRlJywgY29kZTogJycgfSxcclxuICAgICAgeyBsYWJlbDogJ0ZpeGVkJywgdmFsdWU6ICdmaXhlZCcsIGNvZGU6ICcnIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdEZWZhdWx0IENvbHVtbnMnLCB2YWx1ZTogJ0Nob29zYWJsZScsIGNvZGU6ICcnIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdWaXNpYmxlJywgdmFsdWU6ICd2aXNpYmxlJywgY29kZTogJycgfSxcclxuICAgICAgeyBsYWJlbDogJ0RhdGUnLCB2YWx1ZTogJ2RhdGVGb3JtYXQnLCBjb2RlOiAnJyB9LFxyXG4gICAgICAvLyB7IGxhYmVsOiAnTW9iaWxlJywgdmFsdWU6ICdtb2JpbGVWaWV3JywgY29kZTogJycgfSxcclxuICAgICAgLy8geyBsYWJlbDogJ1RhYicsIHZhbHVlOiAndGFiVmlldycsIGNvZGU6ICcnIH1cclxuICAgIF07XHJcbiAgICB0aGlzLmdyaWRJZCA9ICdwYWdlLWxpc3QtZ3JpZCc7XHJcbiAgICB0aGlzLm9yZ1N1YnMgPSB0aGlzLl9zdG9yZXNlcnZpY2UuY3VycmVudFN0b3JlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIHRoaXMuaW5wdXRWYWxpZGF0aW9uTWV0aG9kID0gcmVzWydJTlBVVFZBTElEQVRJT05NRVRIT0QnXTtcclxuICAgICAgICB0aGlzLlJCQUNPUkcgPSByZXNbJ1JCQUNPUkcnXTtcclxuICAgICAgICB0aGlzLnNvY2tldCA9IHRoaXMuUkJBQ09SR1snc29ja2V0J11cclxuICAgICAgICB0aGlzLm9yZ0lkID0gcGFyc2VJbnQodGhpcy5SQkFDT1JHWydvcmdJRCddKTtcclxuICAgICAgICBpZiAodGhpcy5vcmdJZCkge1xyXG4gICAgICAgICAgdGhpcy5nZXRQYWdlRGVzaWduTGlzdCh0aGlzLnBhZ2VCdWlsZGVyU2VydmljZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGZvcm06IGFueTtcclxuICBpZDogc3RyaW5nIHwgbnVsbCA9ICcnO1xyXG4gIG9ubGluZVVzZXJMaXN0U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgdXBkYXRlTm90aWZpY2F0aW9uU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2NhbHN0b3JlLnNldE9iaignRURJVEJBU0lDSU5GTycsICcnKTtcclxuICAgIHRoaXMubG9jYWxzdG9yZS5zZXRPYmooJ0NSRUFURSBQQUdFJywgZmFsc2UpO1xyXG4gICAgLy8gJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zdHJpcF9oZWFkIC5kcm9wZG93bi1tZW51JywgZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIC8vIH0pO1xyXG4gICAgdGhpcy5sb2FkRmlsdGVyRm9ybSgpO1xyXG4gICAgdGhpcy5zZXRHcmlkQ29sdW1ucygpO1xyXG4gICAgdGhpcy5nZXRHcmlkQ29uZmlnKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMub3JnU3Vicy51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuICBnZXRQYWdlRGVzaWduTGlzdChodHRwKSB7XHJcbiAgICBjb25zdCBkYXRhID0ge307XHJcbiAgICBmdW5jdGlvbiBpc05vdEVtcHR5KHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09ICcnO1xyXG4gICAgfVxyXG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IEN1c3RvbVN0b3JlKHtcclxuICAgICAgbG9hZChsb2FkT3B0aW9uczogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEnKTtcclxuICAgICAgICBbJ3NraXAnLCAndGFrZScsICdyZXF1aXJlVG90YWxDb3VudCcsICdyZXF1aXJlR3JvdXBDb3VudCcsICdzb3J0JywgJ2ZpbHRlcicsICdwYWdlY29uZmlnJywgJ2dyb3VwJ10uZm9yRWFjaChcclxuICAgICAgICAgIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbSBpbiBsb2FkT3B0aW9ucyAmJiBpc05vdEVtcHR5KGxvYWRPcHRpb25zW2l0ZW1dKSkge1xyXG4gICAgICAgICAgICAgIGRhdGFbaXRlbV0gPSBsb2FkT3B0aW9uc1tpdGVtXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBkZWxldGUgZGF0YVtpdGVtXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIGxldCBzb3J0ID0gJyc7XHJcbiAgICAgICAgICBpZiAoaXNOb3RFbXB0eShkYXRhWydzb3J0J10pKSB7XHJcbiAgICAgICAgICAgIHNvcnQgPSBKU09OLnN0cmluZ2lmeShkYXRhWydzb3J0J10pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaHR0cC5nZXRBbGxQYWdlRGVzaWducyhfdGhpcy5hdXRoLmdldE9yZ0lEKCkgPyBfdGhpcy5hdXRoLmdldE9yZ0lEKCkgOiBgJHtfdGhpcy5vcmdJZH0/cmV0dXJuVXNlclBhZ2U9ZmFsc2Umc2tpcD0ke2RhdGFbJ3NraXAnXX0mdGFrZT0ke2RhdGFbJ3Rha2UnXX0mZmlsdGVyPSR7ZGF0YVsnZmlsdGVyJ119JnNvcnQ9JHtzb3J0fWApXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoe1xyXG4gICAgICAgICAgICAgIG5leHQ6IChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhLmRhdGEuZm9yRWFjaChwYWdlID0+IHtcclxuICAgICAgICAgICAgICAgICAgcGFnZS5zdGF0dXMgPSBwYWdlLmlzRW5hYmxlID8gJ0FjdGl2ZScgOiAnSW5hY3RpdmUnO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB7XHJcbiAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgIHRvdGFsQ291bnQ6IHJlc3VsdC5kYXRhLnRvdGFsY291bnQgPyByZXN1bHQuZGF0YS50b3RhbGNvdW50IDogMFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy5kYXRhU291cmNlKTtcclxuICB9XHJcblxyXG4gIGdvVG9CdWlsZGVyKCk6IGFueSB7XHJcbiAgICB0aGlzLmxvY2Fsc3RvcmUuc2V0T2JqKCdTRUxFQ1RFRF9QQUdFJywgJycpO1xyXG4gICAgdGhpcy5wYWdlQnVpbGRlckFkZFNlcnZpY2Uuc2V0UGFnZVR5cGUoJycpO1xyXG4gICAgdGhpcy5sb2NhbHN0b3JlLnNldE9iaignUEFHRURFU0lHTl9CQVNJQ0lORk8nLCAnJyk7XHJcbiAgICB0aGlzLmxvY2Fsc3RvcmUuc2V0T2JqKCdDUkVBVEUgUEFHRScsIHRydWUpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuLi9hZGQvYmFzaWMtaW5mbyddLCB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRHcmlkQ29sdW1ucygpIHtcclxuICAgIHRoaXMudGFibGVDb2x1bW5zID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgY29sdW1uRGVmOiAnaWQnLFxyXG4gICAgICAgIGhlYWRlcjogJ1BhZ2UgSWQnLFxyXG4gICAgICAgIGNlbGw6IChlbGVtZW50OiBhbnkpID0+IGAke2VsZW1lbnQuaWR9YCxcclxuICAgICAgICBkYXRlRm9ybWF0OiBmYWxzZSxcclxuICAgICAgICBpY29uOiBmYWxzZSxcclxuICAgICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgbGluazogZmFsc2UsXHJcbiAgICAgICAgc29ydDogZmFsc2UsXHJcbiAgICAgICAgaGlkZTogZmFsc2UsXHJcbiAgICAgICAgZml4ZWQ6IGZhbHNlLFxyXG4gICAgICAgIENob29zYWJsZTogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IFsnZmlsdGVyJ11cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbHVtbkRlZjogJ2FjdGl2ZVZlcnNpb24ucGFnZW5hbWUnLFxyXG4gICAgICAgIGhlYWRlcjogJ1BhZ2UgTmFtZScsXHJcbiAgICAgICAgY2VsbDogKGVsZW1lbnQ6IGFueSkgPT4gYCR7ZWxlbWVudC5hY3RpdmVWZXJzaW9uLnBhZ2VuYW1lfWAsXHJcbiAgICAgICAgZGF0ZUZvcm1hdDogZmFsc2UsXHJcbiAgICAgICAgaWNvbjogZmFsc2UsXHJcbiAgICAgICAgZmlsdGVyOiB0cnVlLFxyXG4gICAgICAgIGxpbms6IGZhbHNlLFxyXG4gICAgICAgIHNvcnQ6IGZhbHNlLFxyXG4gICAgICAgIGhpZGU6IGZhbHNlLFxyXG4gICAgICAgIGZpeGVkOiBmYWxzZSxcclxuICAgICAgICBDaG9vc2FibGU6IGZhbHNlLFxyXG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIHNlbGVjdGVkOiBbJ2ZpbHRlciddXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb2x1bW5EZWY6ICdwYWdlVHlwZURldGFpbHMudmFsdWUnLFxyXG4gICAgICAgIGhlYWRlcjogJ1BhZ2UgVHlwZScsXHJcbiAgICAgICAgY2VsbDogKGVsZW1lbnQ6IGFueSkgPT4gYCR7ZWxlbWVudC5wYWdlVHlwZURldGFpbHMudmFsdWV9YCxcclxuICAgICAgICBkYXRlRm9ybWF0OiBmYWxzZSxcclxuICAgICAgICBpY29uOiBmYWxzZSxcclxuICAgICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgbGluazogZmFsc2UsXHJcbiAgICAgICAgc29ydDogZmFsc2UsXHJcbiAgICAgICAgaGlkZTogZmFsc2UsXHJcbiAgICAgICAgZml4ZWQ6IGZhbHNlLFxyXG4gICAgICAgIENob29zYWJsZTogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IFsnZmlsdGVyJ11cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbHVtbkRlZjogJ2luc2VydGVkT24nLFxyXG4gICAgICAgIGhlYWRlcjogJ0NyZWF0ZWQgT24nLFxyXG4gICAgICAgIGNlbGw6IChlbGVtZW50OiBhbnkpID0+IGAke2VsZW1lbnQuaW5zZXJ0ZWRPbn1gLFxyXG4gICAgICAgIGRhdGVGb3JtYXQ6IHRydWUsXHJcbiAgICAgICAgaWNvbjogZmFsc2UsXHJcbiAgICAgICAgZmlsdGVyOiB0cnVlLFxyXG4gICAgICAgIGxpbms6IGZhbHNlLFxyXG4gICAgICAgIHNvcnQ6IGZhbHNlLFxyXG4gICAgICAgIGhpZGU6IGZhbHNlLFxyXG4gICAgICAgIGZpeGVkOiBmYWxzZSxcclxuICAgICAgICBDaG9vc2FibGU6IGZhbHNlLFxyXG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIHNlbGVjdGVkOiBbJ2ZpbHRlcicsICdkYXRlRm9ybWF0J11cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbHVtbkRlZjogJ2luc2VydGVkQnlEZXRhaWxzLmZpcnN0bmFtZScsXHJcbiAgICAgICAgaGVhZGVyOiAnQ3JlYXRlZCBCeScsXHJcbiAgICAgICAgY2VsbDogKGVsZW1lbnQ6IGFueSkgPT4gYCR7ZWxlbWVudC5wYWdlVHlwZURldGFpbHMudmFsdWV9YCxcclxuICAgICAgICBkYXRlRm9ybWF0OiBmYWxzZSxcclxuICAgICAgICBpY29uOiBmYWxzZSxcclxuICAgICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgbGluazogZmFsc2UsXHJcbiAgICAgICAgc29ydDogZmFsc2UsXHJcbiAgICAgICAgaGlkZTogZmFsc2UsXHJcbiAgICAgICAgZml4ZWQ6IGZhbHNlLFxyXG4gICAgICAgIENob29zYWJsZTogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IFsnZmlsdGVyJ11cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbHVtbkRlZjogJ2FjdGl2ZVZlcnNpb24uZGVzY3JpcHRpb24nLFxyXG4gICAgICAgIGhlYWRlcjogJ0Rlc2NyaXB0aW9uJyxcclxuICAgICAgICBjZWxsOiAoZWxlbWVudDogYW55KSA9PiBgJHtlbGVtZW50LmFjdGl2ZVZlcnNpb24uZGVzY3JpcHRpb259YCxcclxuICAgICAgICBkYXRlRm9ybWF0OiBmYWxzZSxcclxuICAgICAgICBpY29uOiBmYWxzZSxcclxuICAgICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgbGluazogZmFsc2UsXHJcbiAgICAgICAgc29ydDogZmFsc2UsXHJcbiAgICAgICAgaGlkZTogZmFsc2UsXHJcbiAgICAgICAgZml4ZWQ6IGZhbHNlLFxyXG4gICAgICAgIENob29zYWJsZTogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IFsnZmlsdGVyJ11cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbHVtbkRlZjogJ3N0YXR1cycsXHJcbiAgICAgICAgaGVhZGVyOiAnU3RhdHVzJyxcclxuICAgICAgICBjZWxsOiAoZWxlbWVudDogYW55KSA9PiBgJHtlbGVtZW50LnN0YXR1c31gLFxyXG4gICAgICAgIGRhdGVGb3JtYXQ6IGZhbHNlLFxyXG4gICAgICAgIGljb246IGZhbHNlLFxyXG4gICAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgICBsaW5rOiBmYWxzZSxcclxuICAgICAgICBzb3J0OiBmYWxzZSxcclxuICAgICAgICBoaWRlOiBmYWxzZSxcclxuICAgICAgICBmaXhlZDogZmFsc2UsXHJcbiAgICAgICAgQ2hvb3NhYmxlOiBmYWxzZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgIHNlbGVjdGVkOiBbJ2ZpbHRlciddXHJcbiAgICAgIH1cclxuICAgIF07XHJcbiAgICB0aGlzLnVwZGF0ZUdyaWQgPSB7XHJcbiAgICAgIGVkaXQ6IHRydWUsXHJcbiAgICAgIHZpZXc6IHRydWUsXHJcbiAgICAgIGxvY2s6IHRydWUsXHJcbiAgICAgIHZlcnNpb246IHRydWUsXHJcbiAgICAgIGFjdGl2YXRlUGFnZTogdHJ1ZSxcclxuICAgICAgZGVhY3RpdmF0ZVBhZ2U6IHRydWUsXHJcbiAgICAgIGR1cGxpY2F0ZTogdHJ1ZSxcclxuICAgICAgZGVsZXRlOiBmYWxzZSxcclxuICAgICAgZXh0ZXJuYWxMaW5rOiBmYWxzZVxyXG4gICAgfTtcclxuICAgIHRoaXMuc2V0RmlsdGVyT3B0aW9ucyh0aGlzLnRhYmxlQ29sdW1ucyk7XHJcbiAgfVxyXG5cclxuICB2aWV3VmVyc2lvbnMoZXZ0KSB7XHJcbiAgICBpZiAoZXZ0KSB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vdmVyc2lvbnMvJywgZXZ0LmRhdGEuaWRdLCB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAgIHVwZGF0ZVBhZ2UoX2V2bmV0KSB7XHJcbiAgLy8gICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxcclxuICAvLyAgIH1cclxuXHJcbiAgZWRpdFRhYmxlUm93KGV2dCkge1xyXG4gICAgdGhpcy5sb2NhbHN0b3JlLnNldE9iaignRURJVEJBU0lDSU5GTycsIGV2dC5kYXRhKTtcclxuICAgIHRoaXMubG9jYWxzdG9yZS5zZXRPYmooJ1BBR0VERVNJR05fQkFTSUNJTkZPJywgJycpO1xyXG4gICAgY29uc3QgbG9naW5Vc2VyID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnaWQnKTtcclxuICAgIGNvbnNvbGUubG9nKGxvZ2luVXNlcik7XHJcbiAgICBpZiAoZXZ0LmRhdGEubG9ja2VkICYmIE51bWJlcihsb2dpblVzZXIpID09PSBldnQuZGF0YS5sb2NrZWRieSkge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uL2VkaXQvJyArIGV2dC5kYXRhLmlkICsgJy9iYXNpYy1pbmZvJ10sIHsgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSB9KTtcclxuICAgIH1cclxuICAgIGlmIChldnQuZGF0YS5sb2NrZWQgJiYgTnVtYmVyKGxvZ2luVXNlcikgIT09IGV2dC5kYXRhLmxvY2tlZGJ5KSB7XHJcbiAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKFxyXG4gICAgICAgICdMb2NrZWQgQnkgLSAnICsgKGV2dC5kYXRhLmxvY2tlZGJ5VXNlci5sYXN0bmFtZSArICcgJyArIGV2dC5kYXRhLmxvY2tlZGJ5VXNlci5maXJzdG5hbWUpXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uL2VkaXQvJyArIGV2dC5kYXRhLmlkICsgJy9iYXNpYy1pbmZvJ10sIHsgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZpZXdUYWJsZVJvdyhldnQpIHtcclxuICAgIGlmIChldnQuZGF0YS5wYWdlVHlwZURldGFpbHMua2V5ID09ICdCR1AnKSB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vLi4vZHluYW1pYy1zZWFyY2gvdmlldy8nLCBldnQuZGF0YS5pZF0sIHsgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSB9KTtcclxuICAgIH0gZWxzZSBpZiAoZXZ0LmRhdGEucGFnZVR5cGVEZXRhaWxzLmtleSA9PSAnQlRQJykge1xyXG4gICAgICB0aGlzLmFsZXJ0U2VydmljZS5pbmZvKCdOYXZpZ2F0aW5nIHRvIHRhYiB2aWV3Li4uJyk7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgcGFnZXMvZHluYW1pYy90YWIvJHtldnQuZGF0YS5pZH1gXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uL3ZpZXcnLCBldnQuZGF0YS5pZF0sIHsgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgZHVwbGljYXRlUm93KGV2dCkge1xyXG4gICAgdGhpcy5wYWdlQnVpbGRlclNlcnZpY2UuZHVwbGljYXRlRGVzaWduUGFnZSh7fSwgZXZ0LmRhdGEuaWQpLnN1YnNjcmliZShcclxuICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN1Y2Nlc3MocmVzcG9uc2VbJ2RhdGEnXS5wYWdlbmFtZSArICcgY3JlYXRlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgICB0aGlzLmdldFBhZ2VEZXNpZ25MaXN0KHRoaXMucGFnZUJ1aWxkZXJTZXJ2aWNlKTtcclxuICAgICAgfSxcclxuICAgICAgX2Vycm9yID0+IHtcclxuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5lcnJvcihBcHBDb25zdGFudHMuZXJyb3JNZXNzYWdlKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGxvYWRGaWx0ZXJGb3JtKCkge1xyXG4gICAgdGhpcy5maWx0ZXJGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIHNlbGVjdGVkRmlsdGVyOiBbJyddXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEdyaWRDb25maWcoKSB7XHJcbiAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLmdldFN0YXRpY0dyaWRDb25maWcodGhpcy5ncmlkSWQpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlcyAmJiByZXMuZGF0YT8uY29uZmlnKSB7XHJcbiAgICAgICAgY29uc3Qgc2FtcGxlRGF0YSA9IHJlcy5kYXRhPy5jb25maWc7XHJcbiAgICAgICAgY29uc3QgY29sdW1uUmVzcG9uc2VDb25maWcgPSBKU09OLnBhcnNlKHNhbXBsZURhdGEpO1xyXG4gICAgICAgIHRoaXMudGFibGVDb2x1bW5zID0gY29sdW1uUmVzcG9uc2VDb25maWc7XHJcbiAgICAgICAgdGhpcy5zZXRGaWx0ZXJPcHRpb25zKGNvbHVtblJlc3BvbnNlQ29uZmlnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldEdyaWRDb2x1bW5zKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0RmlsdGVyT3B0aW9ucyhjb2xDb25maWcpIHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcclxuICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgY29sQ29uZmlnLm1hcChjb2wgPT4ge1xyXG4gICAgICBvcHRpb25zLnB1c2goe1xyXG4gICAgICAgIGNvbHVtbk5hbWU6IGNvbC5oZWFkZXIsXHJcbiAgICAgICAgaXRlbXM6IHRoaXMuZ3JpZE9wdGlvbnMubWFwKG9wID0+IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBgJHtjb2wuY29sdW1uRGVmfS0ke29wLnZhbHVlfWAsXHJcbiAgICAgICAgICAgIGxhYmVsOiBvcC5sYWJlbCxcclxuICAgICAgICAgICAgdmFsdWU6IG9wLnZhbHVlLFxyXG4gICAgICAgICAgICBjb2RlOiBjb2wuY29sdW1uRGVmLFxyXG4gICAgICAgICAgICBhY3RpdmU6IGNvbFtvcC52YWx1ZV0gPT09IHRydWUgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbC5zZWxlY3RlZC5tYXAodiA9PiBhcnIucHVzaChgJHtjb2wuY29sdW1uRGVmfS0ke3Z9YCkpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmZpbHRlck9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgdGhpcy5maWx0ZXJGb3JtLnBhdGNoVmFsdWUoeyBzZWxlY3RlZEZpbHRlcjogYXJyIH0pO1xyXG4gIH1cclxuICBjaGFuZ2VGaWx0ZXJPcHRpb25zKGUpIHtcclxuICAgIGNvbnN0IFtjb2RlLCB2YWx1ZV0gPSBlLml0ZW1WYWx1ZS5zcGxpdCgnLScpO1xyXG4gICAgY29uc3QgaXNFeGlzdHMgPSB0aGlzLnRhYmxlQ29sdW1ucy5maWx0ZXIoY29sID0+IHtcclxuICAgICAgcmV0dXJuIGNvbC5jb2x1bW5EZWYgPT09IGNvZGUgJiYgISFjb2xbdmFsdWVdO1xyXG4gICAgfSk7XHJcbiAgICBpZiAoaXNFeGlzdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMudGFibGVDb2x1bW5zLmZvckVhY2godGMgPT4ge1xyXG4gICAgICAgIHRjW3ZhbHVlXSA9IHRjLmNvbHVtbkRlZiA9PT0gY29kZSA/IHRydWUgOiB0Y1t2YWx1ZV07XHJcbiAgICAgICAgaWYgKHRjLmNvbHVtbkRlZiA9PT0gY29kZSkge1xyXG4gICAgICAgICAgdGM/LnNlbGVjdGVkLnB1c2godmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGM7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jb25kaXRpb25DaGVja0Vsc2UodmFsdWUsIGNvZGUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY29sdW1uQ29uZmlnID0gSlNPTi5zdHJpbmdpZnkodGhpcy50YWJsZUNvbHVtbnMpO1xyXG4gICAgdGhpcy5zYXZlR3JpZENvbmZpZyhjb2x1bW5Db25maWcpO1xyXG4gIH1cclxuICBjb25kaXRpb25DaGVja0Vsc2UodmFsdWUsIGNvZGUpIHtcclxuICAgIHRoaXMudGFibGVDb2x1bW5zLmZvckVhY2goYyA9PiB7XHJcbiAgICAgIGNbdmFsdWVdID0gYy5jb2x1bW5EZWYgPT09IGNvZGUgPyBmYWxzZSA6IGNbdmFsdWVdO1xyXG4gICAgICBpZiAoYy5jb2x1bW5EZWYgPT09IGNvZGUpIHtcclxuICAgICAgICBjPy5zZWxlY3RlZD8uZm9yRWFjaCgocywgaSkgPT4ge1xyXG4gICAgICAgICAgcyA9PT0gdmFsdWUgJiYgYz8uc2VsZWN0ZWQuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHNhdmVHcmlkQ29uZmlnKGRhdGEpIHtcclxuICAgIGNvbnN0IHJlcUJvZHkgPSB7XHJcbiAgICAgIHR5cGU6ICdTVEFUSUNfR1JJRCcsXHJcbiAgICAgIG1hcHBlZGlkOiB0aGlzLmdyaWRJZCxcclxuICAgICAgY29uZmlnOiBkYXRhXHJcbiAgICB9O1xyXG4gICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5zYXZlR3JpZFVzZXJQcmVmZXJlbmNlKHJlcUJvZHkpLnN1YnNjcmliZShfciA9PiB7XHJcbiAgICAgIHRoaXMuZ2V0R3JpZENvbmZpZygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZVBhZ2UoZXZlbnQpIHtcclxuICAgIGNvbnN0IHBhZ2VJZCA9IGV2ZW50LmRhdGEuaWQ7XHJcbiAgICB0aGlzLnBhZ2VCdWlsZGVyU2VydmljZS5hY3RpdmF0ZVBhZ2UocGFnZUlkKS5zdWJzY3JpYmUoXHJcbiAgICAgIF9yZXNwb25zZSA9PiB7XHJcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3VjY2VzcygnUGFnZSBhY3RpdmF0ZWQgc3VjY2Vzc2Z1bGx5LicpO1xyXG4gICAgICAgIHRoaXMuZ2V0UGFnZURlc2lnbkxpc3QodGhpcy5wYWdlQnVpbGRlclNlcnZpY2UpO1xyXG4gICAgICB9LFxyXG4gICAgICBfZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKCdGYWlsZWQgdG8gYWN0aXZhdGUgcGFnZS4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGRlYWN0aXZhdGVQYWdlKGV2ZW50KSB7XHJcbiAgICBjb25zdCBwYWdlSWQgPSBldmVudC5kYXRhLmlkO1xyXG4gICAgdGhpcy5wYWdlQnVpbGRlclNlcnZpY2UuZGVhY3RpdmF0ZVBhZ2UocGFnZUlkKS5zdWJzY3JpYmUoXHJcbiAgICAgIF9yZXNwb25zZSA9PiB7XHJcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3VjY2VzcygnUGFnZSBkZWFjdGl2YXRlZCBzdWNjZXNzZnVsbHkuJyk7XHJcbiAgICAgICAgdGhpcy5nZXRQYWdlRGVzaWduTGlzdCh0aGlzLnBhZ2VCdWlsZGVyU2VydmljZSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIF9lcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2UuZXJyb3IoJ0ZhaWxlZCB0byBkZWFjdGl2YXRlIHBhZ2UuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8YXBwLWFsZXJ0PjwvYXBwLWFsZXJ0PlxyXG48ZGl2IGNsYXNzPVwicGFnZS1kZXNpZ25cIj5cclxuICA8ZGl2IGNsYXNzPVwic3RyaXBfaGVhZCBkZWYtYWRkSWNvbiB0b2dnbGVsZWZ0IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBweC0zXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZi1sZWZ0XCI+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4taWNvbiBteS0yXCJcclxuICAgICAgICB0aXRsZT1cIkFkZCBOZXcgUGFnZVwiXHJcbiAgICAgICAgZmllbGRLZXk9XCJQQUdfREVTX0dSSURfTElTVF9BRERfTkVXX1BBR0VcIlxyXG4gICAgICAgIChjbGljayk9XCJnb1RvQnVpbGRlcigpXCJcclxuICAgICAgICBwUmlwcGxlPlxyXG4gICAgICAgIDxlbSBjbGFzcz1cInBpIHBpLXBsdXMgZm9udC13ZWlnaHQtYm9sZFwiPjwvZW0+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMiBtYi00XCI+XHJcbiAgICAgIDxwLWNhcmQgc3R5bGVDbGFzcz1cInJiYWMtY2FyZCBncmlkdmlldyB3LTEwMFwiPlxyXG4gICAgICAgIDxhcHAtZ3JpZC1saXN0XHJcbiAgICAgICAgICBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCJcclxuICAgICAgICAgIFt1cGRhdGVHcmlkXT1cInVwZGF0ZUdyaWRcIlxyXG4gICAgICAgICAgW2NvbHVtbnNdPVwidGFibGVDb2x1bW5zXCJcclxuICAgICAgICAgIFt0b3RhbENvdW50XT1cInRvdGFsY291bnRcIlxyXG4gICAgICAgICAgKGVkaXRUYWJsZVJvdyk9XCJlZGl0VGFibGVSb3coJGV2ZW50KVwiXHJcbiAgICAgICAgICAodmlld1RhYmxlUm93KT1cInZpZXdUYWJsZVJvdygkZXZlbnQpXCJcclxuICAgICAgICAgICh2aWV3VmVyc2lvbnMpPVwidmlld1ZlcnNpb25zKCRldmVudClcIlxyXG4gICAgICAgICAgKGR1cGxpY2F0ZVJvdyk9XCJkdXBsaWNhdGVSb3coJGV2ZW50KVwiXHJcbiAgICAgICAgICAoYWN0aXZhdGVQYWdlKT1cImFjdGl2YXRlUGFnZSgkZXZlbnQpXCJcclxuICAgICAgICAgIChkZWFjdGl2YXRlUGFnZSk9XCJkZWFjdGl2YXRlUGFnZSgkZXZlbnQpXCJcclxuICAgICAgICAgIFtyZW1vdGVPcGVyYXRpb25zXT1cImZhbHNlXCI+XHJcbiAgICAgICAgPC9hcHAtZ3JpZC1saXN0PlxyXG4gICAgICA8L3AtY2FyZD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4iXX0=