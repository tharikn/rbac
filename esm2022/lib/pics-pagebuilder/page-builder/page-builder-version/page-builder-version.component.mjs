import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { AlertService } from '../../@core/services/alert.service';
import { DynamicsearchService } from '../../@core/services/dynamicsearch.service';
import { PageBuilderAddService } from '../../@core/services/page-builder-add.service';
import { PageBuilderService } from './@core/page-builder.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../@core/services/auth.service";
import * as i3 from "../../@core/services/local.service";
import * as i4 from "primeng/card";
import * as i5 from "primeng/ripple";
import * as i6 from "../../@shared/grid-list/grid-list.component";
export class PageBuilderVersionComponent {
    router;
    route;
    auth;
    localstore;
    pageList;
    tableColumns;
    updateGrid;
    totalcount = 0;
    id;
    pageBuilderService;
    pageBuilderAddService;
    dynamicSearchService;
    gridId;
    gridOptions;
    filterOptions;
    filterForm;
    fb;
    alertService;
    constructor(injector, router, route, auth, localstore) {
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.localstore = localstore;
        this.alertService = injector.get(AlertService);
        this.fb = injector.get(UntypedFormBuilder);
        this.pageBuilderService = injector.get(PageBuilderService);
        this.pageBuilderAddService = injector.get(PageBuilderAddService);
        this.dynamicSearchService = injector.get(DynamicsearchService);
        this.id = this.route.snapshot.paramMap.get('id');
        this.localstore.setObj('CREATE PAGE', false);
        this.gridId = 'page-version-grid';
        this.gridOptions = [
            { label: 'Sorting', value: 'sort', code: '' },
            { label: 'Filtering', value: 'filter', code: '' },
            { label: 'Hide', value: 'hide', code: '' },
            { label: 'Fixed', value: 'fixed', code: '' },
            { label: 'Default Columns', value: 'Choosable', code: '' },
            { label: 'Visible', value: 'visible', code: '' },
            { label: 'Date', value: 'dateFormat', code: '' }
            // { label: 'Mobile', value: 'mobileView', code: '' },
            // { label: 'Tab', value: 'tabView', code: '' }
        ];
    }
    ngOnInit() {
        this.loadFilterForm();
        this.setGridColumns();
        this.getGridConfig();
        this.getVersionList();
    }
    getVersionList() {
        this.pageBuilderService.getVersionList(this.id).subscribe(res => {
            if (res.data && res.data.length) {
                this.localstore.setObj('FILE EXPORT NAME', res.data[0]?.pagename);
                this.pageList = res.data;
                this.totalcount = this.pageList.length ? this.pageList.length : 0;
            }
        });
    }
    activateVersion(event) {
        this.pageBuilderService.activateVersion(event.data.id).subscribe(() => {
            this.getVersionList();
            this.alertService.success(`The Version ${event.data.version} Activated Succesfully`);
        }, () => this.alertService.error(`Failed to activate the Version ${event.data.version}`));
    }
    goToPrevious() {
        this.router.navigate(['../../list'], { relativeTo: this.route });
    }
    setGridColumns() {
        this.tableColumns = [
            {
                columnDef: 'version',
                header: 'Version Id',
                cell: (element) => `${element.version}`,
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
                columnDef: 'pagename',
                header: 'Page Name',
                cell: (element) => `${element.pagename}`,
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
                columnDef: 'sourceversion',
                header: 'Source Version',
                cell: (element) => `${element.sourceversion}`,
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
                columnDef: 'updatedOn',
                header: 'Updated On',
                cell: (element) => `${element.updatedOn}`,
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
            }
        ];
        this.updateGrid = { edit: true, view: true, lock: true, duplicate: true, delete: false, externalLink: false };
        this.setFilterOptions(this.tableColumns);
    }
    viewVersions(evt) {
        this.router.navigate(['../' + evt.data.id + '/versions'], { relativeTo: this.route });
    }
    editTableRow(evt) {
        this.localstore.setObj('EDITBASICINFO', evt.data);
        this.localstore.setObj('PAGEDESIGN_BASICINFO', '');
        const loginUser = sessionStorage.getItem('id');
        console.log(loginUser);
        if (evt.data.locked && Number(loginUser) === evt.data.lockedby) {
            this.router.navigate(['../../edit/' + evt.data.id + '/basic-info'], { relativeTo: this.route });
        }
        if (evt.data.locked && Number(loginUser) !== evt.data.lockedby) {
            this.alertService.error('Locked By - ' + (evt.data.lockedbyUser.lastname + ' ' + evt.data.lockedbyUser.firstname));
        }
        else {
            this.router.navigate(['../../edit/' + evt.data.id + '/basic-info'], { relativeTo: this.route });
        }
    }
    viewTableRow(evt) {
        this.localstore.removeItem('editValue');
        this.localstore.removeItem('target-tab-filter');
        this.localstore.setItem('version-id', this.id);
        if (evt.data.pageDetails.pagetype == 'BGP') {
            this.router.navigate(['../../../dynamic-sea/view/', evt.data.id], { relativeTo: this.route });
        }
        else if (evt.data.pageDetails.pagetype == 'BTP') {
            if (this.localstore.getObj('dynamic-tab-pages')) {
                this.localstore.removeItem('dynamic-tab-pages');
            }
            this.localstore.setObj('dynamic-tab-pages', evt.data.tabconfig);
            this.router.navigate(['/pages/dynamicpage-common/tab/', evt.data.id], { relativeTo: this.route });
        }
        else if (evt.data.pageDetails.pagetype == 'RBTP') {
            this.router.navigate(['/pages/dynamic-routing/tab/', evt.data.id], { relativeTo: this.route });
        }
        else if (evt.data.pageDetails.pagetype == 'DR') {
            if (this.localstore.getObj('dynamic-ribbon')) {
                this.localstore.removeItem('dynamic-ribbon');
            }
            this.localstore.setObj('dynamic-ribbon', evt.data);
            this.pageBuilderAddService.setFormData(evt.data);
            this.router.navigate([`/pages/page-design/view/${evt.data.id}/page-ribbon-design`], { relativeTo: this.route });
        }
        else
            this.router.navigate(['../../view', evt.data.id], { relativeTo: this.route });
    }
    duplicatePageVersion(evt) {
        this.pageBuilderService.copyPageVersion({}, evt.data.id).subscribe(() => {
            this.getVersionList();
            this.alertService.success('New version created successfully!');
        }, () => {
            this.alertService.error(`Failed to duplicate the version ${evt.data.version}`);
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
        this.checkconditionFilterOptions(isExists, value, code);
        const columnConfig = JSON.stringify(this.tableColumns);
        this.saveGridConfig(columnConfig);
    }
    checkconditionFilterOptions(isExists, value, code) {
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
    ngOnDestroy() {
        this.localstore.removeItem('FILE EXPORT NAME');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderVersionComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i1.ActivatedRoute }, { token: i2.AuthService }, { token: i3.LocalService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: PageBuilderVersionComponent, selector: "app-page-builder-version", ngImport: i0, template: "<div class=\"page-design\">\r\n  <div class=\"strip_head toggleleft my-2 d-flex justify-content-between\">\r\n    <div class=\"text-left\"></div>\r\n    <div class=\"text-right\">\r\n      <div class=\"btn-group\"></div>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-primary btn-icon my-2\"\r\n        title=\"Back To Previous Page\"\r\n        (click)=\"goToPrevious()\"\r\n        pRipple>\r\n        <em class=\"pi pi-arrow-left font-weight-bold\"></em>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12 mb-4\">\r\n      <p-card styleClass=\"rbac-card gridview w-100\">\r\n        <app-grid-list\r\n          [dataList]=\"pageList\"\r\n          [updateGrid]=\"updateGrid\"\r\n          [columns]=\"tableColumns\"\r\n          [totalCount]=\"totalcount\"\r\n          (editTableRow)=\"editTableRow($event)\"\r\n          (viewTableRow)=\"viewTableRow($event)\"\r\n          (viewVersions)=\"viewVersions($event)\"\r\n          (duplicatePageVersion)=\"duplicatePageVersion($event)\"\r\n          (activateVersion)=\"activateVersion($event)\">\r\n        </app-grid-list>\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n", styles: [":root{--background-color: #f8f8f8;--navigation: #fff;--primary: #0D3178;--checkbox-border: #D6D5D5;--text-dark: #000;--label-text: #0D3178;--hover-text: #fff;--bg-light: #fff;--forms: #fff;--nav-text: #696969;--light-gray: #696969;--material-icons: #0D3178;--highlight-list: #e3f2fd;--table-header: #f9f9f9;--table-odd: #f7f7f7;--table-border: #ddd;--table-hover: #dbf6ff;--table-odd-color: #f2fcff;--btn: #0D3178;--menu-panel: #032361;--menu-level2: #28447E;--border-trans: transparent;--btn-hover: #1258A7;--btn-dark: #0D3178;--dropdown-list: #fff;--btncancel: #0D3178;--primary-light: #1258A7;--primary-dark: #0D3178;--light-d-light: #fff;--ldl-text: #fff;--light-d-accent: #fff;--header-bg: #f7f7f7;--secondary-color: #0D3178;--menu-link: #1258A7;--menu-highlight: #0084d1;--sumbmenu-selected: #0084D1;--profile-bg: #f3f9f9;--disabled: #7A8EB5;--accordion-header: #F5F5F5;--input-label: #1F1F1F;--input-field: #4C4C4C;--ghost: #A2A2A2;--table-label: #f1f1f1;--error-msg: #DC0404;--menu-hover: #1258A7;--var-icon-font: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;--rocket-icon: \"/assets/images/rocket-ship.svg\";--base-font-size: 16px;--font-11: 11px;--font-12: 12px;--font-13: 13px;--font-14: 14px;--font-15: 15px;--font-16: 16px;--font-17: 17px;--font-18: 18px;--font-19: 19px;--font-20: 20px;--font-21: 21px;--font-24: 24px;--font-26: 26px}:host ::ng-deep .page-design .gridview.p-card .card-body,:host ::ng-deep .page-design .gridview.p-card .p-card-body,:host ::ng-deep .page-design .gridview.card .card-body,:host ::ng-deep .page-design .gridview.card .p-card-body{padding-top:0;padding-bottom:0}:host ::ng-deep .page-design .p-card-content{padding:0}:host ::ng-deep .page-design .dropdown-menu,:host ::ng-deep .page-design .p-component{font-size:var(--base-font-size)}:host ::ng-deep .page-design .dropdown-item.active,:host ::ng-deep .page-design .dropdown-item:active{background:transparent;color:#16181b}:host ::ng-deep .page-design .checkbox label{cursor:pointer}:host ::ng-deep .page-design .dropdown-item:focus{background:#431e8d12}:host ::ng-deep .page-design .dropdown-item:hover{background:#431e8d12}:host ::ng-deep .page-design .checkbox label,:host ::ng-deep .page-design .radio label{min-height:inherit}:host ::ng-deep .page-design .filter-menu{padding:8px;border:1px solid #a7a7a7;max-height:180px;overflow-y:auto}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar{width:4px!important;height:4px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-track{background:#f6f6f6!important;border-radius:2px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-corner{background:#f6f6f6!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-thumb{background:#0d3178!important;border-radius:2px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-thumb:hover{background:#0d3178!important}:host ::ng-deep .page-design .p-checkbox{width:16px;height:16px}:host ::ng-deep .page-design .p-checkbox .p-checkbox-box{width:16px;height:16px}:host ::ng-deep .page-design .p-checkbox .p-checkbox-box .p-checkbox-icon{font-size:9px;font-weight:600}\n"], dependencies: [{ kind: "directive", type: i1.RouterOutlet, selector: "router-outlet", inputs: ["name"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }, { kind: "component", type: i4.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { kind: "directive", type: i5.Ripple, selector: "[pRipple]" }, { kind: "component", type: i6.GridListComponent, selector: "app-grid-list", inputs: ["dataList", "dataSource", "columns", "updateGrid", "totalCount", "page", "isShow", "exportPageName"], outputs: ["currentPage", "editTableRow", "viewTableRow", "deleteTableRow", "openExternalLink", "openpopupLink", "routeTo", "openPopup", "sortOrder", "filterSearchValue", "filterBuilderPopup", "filterPanel", "multipleFilterValues", "downloadTableRow", "toggleRow", "duplicateRow", "viewVersions", "activateVersion", "activatePage", "deactivatePage", "duplicatePageVersion", "selectedRowsData"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderVersionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-page-builder-version', template: "<div class=\"page-design\">\r\n  <div class=\"strip_head toggleleft my-2 d-flex justify-content-between\">\r\n    <div class=\"text-left\"></div>\r\n    <div class=\"text-right\">\r\n      <div class=\"btn-group\"></div>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-primary btn-icon my-2\"\r\n        title=\"Back To Previous Page\"\r\n        (click)=\"goToPrevious()\"\r\n        pRipple>\r\n        <em class=\"pi pi-arrow-left font-weight-bold\"></em>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12 mb-4\">\r\n      <p-card styleClass=\"rbac-card gridview w-100\">\r\n        <app-grid-list\r\n          [dataList]=\"pageList\"\r\n          [updateGrid]=\"updateGrid\"\r\n          [columns]=\"tableColumns\"\r\n          [totalCount]=\"totalcount\"\r\n          (editTableRow)=\"editTableRow($event)\"\r\n          (viewTableRow)=\"viewTableRow($event)\"\r\n          (viewVersions)=\"viewVersions($event)\"\r\n          (duplicatePageVersion)=\"duplicatePageVersion($event)\"\r\n          (activateVersion)=\"activateVersion($event)\">\r\n        </app-grid-list>\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n", styles: [":root{--background-color: #f8f8f8;--navigation: #fff;--primary: #0D3178;--checkbox-border: #D6D5D5;--text-dark: #000;--label-text: #0D3178;--hover-text: #fff;--bg-light: #fff;--forms: #fff;--nav-text: #696969;--light-gray: #696969;--material-icons: #0D3178;--highlight-list: #e3f2fd;--table-header: #f9f9f9;--table-odd: #f7f7f7;--table-border: #ddd;--table-hover: #dbf6ff;--table-odd-color: #f2fcff;--btn: #0D3178;--menu-panel: #032361;--menu-level2: #28447E;--border-trans: transparent;--btn-hover: #1258A7;--btn-dark: #0D3178;--dropdown-list: #fff;--btncancel: #0D3178;--primary-light: #1258A7;--primary-dark: #0D3178;--light-d-light: #fff;--ldl-text: #fff;--light-d-accent: #fff;--header-bg: #f7f7f7;--secondary-color: #0D3178;--menu-link: #1258A7;--menu-highlight: #0084d1;--sumbmenu-selected: #0084D1;--profile-bg: #f3f9f9;--disabled: #7A8EB5;--accordion-header: #F5F5F5;--input-label: #1F1F1F;--input-field: #4C4C4C;--ghost: #A2A2A2;--table-label: #f1f1f1;--error-msg: #DC0404;--menu-hover: #1258A7;--var-icon-font: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;--rocket-icon: \"/assets/images/rocket-ship.svg\";--base-font-size: 16px;--font-11: 11px;--font-12: 12px;--font-13: 13px;--font-14: 14px;--font-15: 15px;--font-16: 16px;--font-17: 17px;--font-18: 18px;--font-19: 19px;--font-20: 20px;--font-21: 21px;--font-24: 24px;--font-26: 26px}:host ::ng-deep .page-design .gridview.p-card .card-body,:host ::ng-deep .page-design .gridview.p-card .p-card-body,:host ::ng-deep .page-design .gridview.card .card-body,:host ::ng-deep .page-design .gridview.card .p-card-body{padding-top:0;padding-bottom:0}:host ::ng-deep .page-design .p-card-content{padding:0}:host ::ng-deep .page-design .dropdown-menu,:host ::ng-deep .page-design .p-component{font-size:var(--base-font-size)}:host ::ng-deep .page-design .dropdown-item.active,:host ::ng-deep .page-design .dropdown-item:active{background:transparent;color:#16181b}:host ::ng-deep .page-design .checkbox label{cursor:pointer}:host ::ng-deep .page-design .dropdown-item:focus{background:#431e8d12}:host ::ng-deep .page-design .dropdown-item:hover{background:#431e8d12}:host ::ng-deep .page-design .checkbox label,:host ::ng-deep .page-design .radio label{min-height:inherit}:host ::ng-deep .page-design .filter-menu{padding:8px;border:1px solid #a7a7a7;max-height:180px;overflow-y:auto}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar{width:4px!important;height:4px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-track{background:#f6f6f6!important;border-radius:2px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-corner{background:#f6f6f6!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-thumb{background:#0d3178!important;border-radius:2px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-thumb:hover{background:#0d3178!important}:host ::ng-deep .page-design .p-checkbox{width:16px;height:16px}:host ::ng-deep .page-design .p-checkbox .p-checkbox-box{width:16px;height:16px}:host ::ng-deep .page-design .p-checkbox .p-checkbox-box .p-checkbox-icon{font-size:9px;font-weight:600}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i1.ActivatedRoute }, { type: i2.AuthService }, { type: i3.LocalService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1idWlsZGVyLXZlcnNpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvcGFnZS1idWlsZGVyL3NyYy9saWIvcGljcy1wYWdlYnVpbGRlci9wYWdlLWJ1aWxkZXIvcGFnZS1idWlsZGVyLXZlcnNpb24vcGFnZS1idWlsZGVyLXZlcnNpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvcGFnZS1idWlsZGVyL3NyYy9saWIvcGljcy1wYWdlYnVpbGRlci9wYWdlLWJ1aWxkZXIvcGFnZS1idWlsZGVyLXZlcnNpb24vcGFnZS1idWlsZGVyLXZlcnNpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBK0IsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFvQixNQUFNLGdCQUFnQixDQUFDO0FBRXRFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUVsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUVsRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7QUFPbEUsTUFBTSxPQUFPLDJCQUEyQjtJQWlCNUI7SUFDQTtJQUNEO0lBQ0M7SUFuQlYsUUFBUSxDQUFNO0lBQ2QsWUFBWSxDQUFRO0lBQ3BCLFVBQVUsQ0FBTTtJQUNoQixVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsRUFBRSxDQUFrQjtJQUNwQixrQkFBa0IsQ0FBcUI7SUFDdkMscUJBQXFCLENBQXdCO0lBQzdDLG9CQUFvQixDQUF1QjtJQUMzQyxNQUFNLENBQVM7SUFDZixX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QyxDQUFDO1lBQ25ELElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7Z0JBQ3hCLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUM1QixDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUMsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUNELE9BQU8sQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsY0FBYyxDQUFDLElBQUk7UUFDakIsTUFBTSxPQUFPLEdBQUc7WUFDZCxJQUFJLEVBQUUsYUFBYTtZQUNuQixRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDckIsTUFBTSxFQUFFLElBQUk7U0FDYixDQUFDO1FBQ0YsSUFBSSxDQUFDLG9CQUFvQixDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUN2RSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDakQsQ0FBQzt3R0ExU1UsMkJBQTJCOzRGQUEzQiwyQkFBMkIsZ0VDZnhDLDZ2Q0FtQ0E7OzRGRHBCYSwyQkFBMkI7a0JBTHZDLFNBQVM7K0JBQ0UsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVW50eXBlZEZvcm1CdWlsZGVyLCBVbnR5cGVkRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZXMvYWxlcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRHluYW1pY3NlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlcy9keW5hbWljc2VhcmNoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2NhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlcy9sb2NhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGFnZUJ1aWxkZXJBZGRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZXMvcGFnZS1idWlsZGVyLWFkZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGFnZUJ1aWxkZXJTZXJ2aWNlIH0gZnJvbSAnLi9AY29yZS9wYWdlLWJ1aWxkZXIuc2VydmljZSc7XHJcbmRlY2xhcmUgY29uc3QgXyQ6IGFueTtcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcGFnZS1idWlsZGVyLXZlcnNpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlLWJ1aWxkZXItdmVyc2lvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGFnZS1idWlsZGVyLXZlcnNpb24uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZUJ1aWxkZXJWZXJzaW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHBhZ2VMaXN0OiBhbnk7XHJcbiAgdGFibGVDb2x1bW5zOiBhbnlbXTtcclxuICB1cGRhdGVHcmlkOiBhbnk7XHJcbiAgdG90YWxjb3VudCA9IDA7XHJcbiAgaWQ6IG51bWJlciB8IHN0cmluZztcclxuICBwYWdlQnVpbGRlclNlcnZpY2U6IFBhZ2VCdWlsZGVyU2VydmljZTtcclxuICBwYWdlQnVpbGRlckFkZFNlcnZpY2U6IFBhZ2VCdWlsZGVyQWRkU2VydmljZTtcclxuICBkeW5hbWljU2VhcmNoU2VydmljZTogRHluYW1pY3NlYXJjaFNlcnZpY2U7XHJcbiAgZ3JpZElkOiBzdHJpbmc7XHJcbiAgZ3JpZE9wdGlvbnM6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZzsgY29kZTogc3RyaW5nIH1bXTtcclxuICBmaWx0ZXJPcHRpb25zOiBhbnlbXTtcclxuICBmaWx0ZXJGb3JtITogVW50eXBlZEZvcm1Hcm91cDtcclxuICBmYjogVW50eXBlZEZvcm1CdWlsZGVyO1xyXG4gIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHVibGljIGF1dGg6IEF1dGhTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2NhbHN0b3JlOiBMb2NhbFNlcnZpY2VcclxuICApIHtcclxuICAgIHRoaXMuYWxlcnRTZXJ2aWNlID0gaW5qZWN0b3IuZ2V0PEFsZXJ0U2VydmljZT4oQWxlcnRTZXJ2aWNlKTtcclxuICAgIHRoaXMuZmIgPSBpbmplY3Rvci5nZXQ8VW50eXBlZEZvcm1CdWlsZGVyPihVbnR5cGVkRm9ybUJ1aWxkZXIpO1xyXG4gICAgdGhpcy5wYWdlQnVpbGRlclNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8UGFnZUJ1aWxkZXJTZXJ2aWNlPihQYWdlQnVpbGRlclNlcnZpY2UpO1xyXG4gICAgdGhpcy5wYWdlQnVpbGRlckFkZFNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8UGFnZUJ1aWxkZXJBZGRTZXJ2aWNlPihQYWdlQnVpbGRlckFkZFNlcnZpY2UpO1xyXG4gICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZSA9IGluamVjdG9yLmdldDxEeW5hbWljc2VhcmNoU2VydmljZT4oRHluYW1pY3NlYXJjaFNlcnZpY2UpO1xyXG4gICAgdGhpcy5pZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xyXG4gICAgdGhpcy5sb2NhbHN0b3JlLnNldE9iaignQ1JFQVRFIFBBR0UnLCBmYWxzZSk7XHJcbiAgICB0aGlzLmdyaWRJZCA9ICdwYWdlLXZlcnNpb24tZ3JpZCc7XHJcbiAgICB0aGlzLmdyaWRPcHRpb25zID0gW1xyXG4gICAgICB7IGxhYmVsOiAnU29ydGluZycsIHZhbHVlOiAnc29ydCcsIGNvZGU6ICcnIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdGaWx0ZXJpbmcnLCB2YWx1ZTogJ2ZpbHRlcicsIGNvZGU6ICcnIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdIaWRlJywgdmFsdWU6ICdoaWRlJywgY29kZTogJycgfSxcclxuICAgICAgeyBsYWJlbDogJ0ZpeGVkJywgdmFsdWU6ICdmaXhlZCcsIGNvZGU6ICcnIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdEZWZhdWx0IENvbHVtbnMnLCB2YWx1ZTogJ0Nob29zYWJsZScsIGNvZGU6ICcnIH0sXHJcbiAgICAgIHsgbGFiZWw6ICdWaXNpYmxlJywgdmFsdWU6ICd2aXNpYmxlJywgY29kZTogJycgfSxcclxuICAgICAgeyBsYWJlbDogJ0RhdGUnLCB2YWx1ZTogJ2RhdGVGb3JtYXQnLCBjb2RlOiAnJyB9XHJcbiAgICAgIC8vIHsgbGFiZWw6ICdNb2JpbGUnLCB2YWx1ZTogJ21vYmlsZVZpZXcnLCBjb2RlOiAnJyB9LFxyXG4gICAgICAvLyB7IGxhYmVsOiAnVGFiJywgdmFsdWU6ICd0YWJWaWV3JywgY29kZTogJycgfVxyXG4gICAgXTtcclxuICB9XHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvYWRGaWx0ZXJGb3JtKCk7XHJcbiAgICB0aGlzLnNldEdyaWRDb2x1bW5zKCk7XHJcbiAgICB0aGlzLmdldEdyaWRDb25maWcoKTtcclxuICAgIHRoaXMuZ2V0VmVyc2lvbkxpc3QoKTtcclxuICB9XHJcbiAgZ2V0VmVyc2lvbkxpc3QoKSB7XHJcbiAgICB0aGlzLnBhZ2VCdWlsZGVyU2VydmljZS5nZXRWZXJzaW9uTGlzdCh0aGlzLmlkKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgaWYgKHJlcy5kYXRhICYmIHJlcy5kYXRhLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMubG9jYWxzdG9yZS5zZXRPYmooJ0ZJTEUgRVhQT1JUIE5BTUUnLCByZXMuZGF0YVswXT8ucGFnZW5hbWUpO1xyXG4gICAgICAgIHRoaXMucGFnZUxpc3QgPSByZXMuZGF0YTtcclxuICAgICAgICB0aGlzLnRvdGFsY291bnQgPSB0aGlzLnBhZ2VMaXN0Lmxlbmd0aCA/IHRoaXMucGFnZUxpc3QubGVuZ3RoIDogMDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZVZlcnNpb24oZXZlbnQpIHtcclxuICAgIHRoaXMucGFnZUJ1aWxkZXJTZXJ2aWNlLmFjdGl2YXRlVmVyc2lvbihldmVudC5kYXRhLmlkKS5zdWJzY3JpYmUoXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICB0aGlzLmdldFZlcnNpb25MaXN0KCk7XHJcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3VjY2VzcyhgVGhlIFZlcnNpb24gJHtldmVudC5kYXRhLnZlcnNpb259IEFjdGl2YXRlZCBTdWNjZXNmdWxseWApO1xyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB0aGlzLmFsZXJ0U2VydmljZS5lcnJvcihgRmFpbGVkIHRvIGFjdGl2YXRlIHRoZSBWZXJzaW9uICR7ZXZlbnQuZGF0YS52ZXJzaW9ufWApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ29Ub1ByZXZpb3VzKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuLi8uLi9saXN0J10sIHsgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSB9KTtcclxuICB9XHJcblxyXG4gIHNldEdyaWRDb2x1bW5zKCkge1xyXG4gICAgdGhpcy50YWJsZUNvbHVtbnMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBjb2x1bW5EZWY6ICd2ZXJzaW9uJyxcclxuICAgICAgICBoZWFkZXI6ICdWZXJzaW9uIElkJyxcclxuICAgICAgICBjZWxsOiAoZWxlbWVudDogYW55KSA9PiBgJHtlbGVtZW50LnZlcnNpb259YCxcclxuICAgICAgICBkYXRlRm9ybWF0OiBmYWxzZSxcclxuICAgICAgICBpY29uOiBmYWxzZSxcclxuICAgICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgbGluazogZmFsc2UsXHJcbiAgICAgICAgc29ydDogZmFsc2UsXHJcbiAgICAgICAgaGlkZTogZmFsc2UsXHJcbiAgICAgICAgZml4ZWQ6IGZhbHNlLFxyXG4gICAgICAgIENob29zYWJsZTogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IFsnZmlsdGVyJ11cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbHVtbkRlZjogJ3BhZ2VuYW1lJyxcclxuICAgICAgICBoZWFkZXI6ICdQYWdlIE5hbWUnLFxyXG4gICAgICAgIGNlbGw6IChlbGVtZW50OiBhbnkpID0+IGAke2VsZW1lbnQucGFnZW5hbWV9YCxcclxuICAgICAgICBkYXRlRm9ybWF0OiBmYWxzZSxcclxuICAgICAgICBpY29uOiBmYWxzZSxcclxuICAgICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgbGluazogZmFsc2UsXHJcbiAgICAgICAgc29ydDogZmFsc2UsXHJcbiAgICAgICAgaGlkZTogZmFsc2UsXHJcbiAgICAgICAgZml4ZWQ6IGZhbHNlLFxyXG4gICAgICAgIENob29zYWJsZTogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IFsnZmlsdGVyJ11cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbHVtbkRlZjogJ3NvdXJjZXZlcnNpb24nLFxyXG4gICAgICAgIGhlYWRlcjogJ1NvdXJjZSBWZXJzaW9uJyxcclxuICAgICAgICBjZWxsOiAoZWxlbWVudDogYW55KSA9PiBgJHtlbGVtZW50LnNvdXJjZXZlcnNpb259YCxcclxuICAgICAgICBkYXRlRm9ybWF0OiBmYWxzZSxcclxuICAgICAgICBpY29uOiBmYWxzZSxcclxuICAgICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgbGluazogZmFsc2UsXHJcbiAgICAgICAgc29ydDogZmFsc2UsXHJcbiAgICAgICAgaGlkZTogZmFsc2UsXHJcbiAgICAgICAgZml4ZWQ6IGZhbHNlLFxyXG4gICAgICAgIENob29zYWJsZTogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IFsnZmlsdGVyJ11cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbHVtbkRlZjogJ2luc2VydGVkT24nLFxyXG4gICAgICAgIGhlYWRlcjogJ0NyZWF0ZWQgT24nLFxyXG4gICAgICAgIGNlbGw6IChlbGVtZW50OiBhbnkpID0+IGAke2VsZW1lbnQuaW5zZXJ0ZWRPbn1gLFxyXG4gICAgICAgIGRhdGVGb3JtYXQ6IHRydWUsXHJcbiAgICAgICAgaWNvbjogZmFsc2UsXHJcbiAgICAgICAgZmlsdGVyOiB0cnVlLFxyXG4gICAgICAgIGxpbms6IGZhbHNlLFxyXG4gICAgICAgIHNvcnQ6IGZhbHNlLFxyXG4gICAgICAgIGhpZGU6IGZhbHNlLFxyXG4gICAgICAgIGZpeGVkOiBmYWxzZSxcclxuICAgICAgICBDaG9vc2FibGU6IGZhbHNlLFxyXG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIHNlbGVjdGVkOiBbJ2ZpbHRlcicsICdkYXRlRm9ybWF0J11cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbHVtbkRlZjogJ3VwZGF0ZWRPbicsXHJcbiAgICAgICAgaGVhZGVyOiAnVXBkYXRlZCBPbicsXHJcbiAgICAgICAgY2VsbDogKGVsZW1lbnQ6IGFueSkgPT4gYCR7ZWxlbWVudC51cGRhdGVkT259YCxcclxuICAgICAgICBkYXRlRm9ybWF0OiB0cnVlLFxyXG4gICAgICAgIGljb246IGZhbHNlLFxyXG4gICAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgICBsaW5rOiBmYWxzZSxcclxuICAgICAgICBzb3J0OiBmYWxzZSxcclxuICAgICAgICBoaWRlOiBmYWxzZSxcclxuICAgICAgICBmaXhlZDogZmFsc2UsXHJcbiAgICAgICAgQ2hvb3NhYmxlOiBmYWxzZSxcclxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICBzZWxlY3RlZDogWydmaWx0ZXInLCAnZGF0ZUZvcm1hdCddXHJcbiAgICAgIH1cclxuICAgIF07XHJcbiAgICB0aGlzLnVwZGF0ZUdyaWQgPSB7IGVkaXQ6IHRydWUsIHZpZXc6IHRydWUsIGxvY2s6IHRydWUsIGR1cGxpY2F0ZTogdHJ1ZSwgZGVsZXRlOiBmYWxzZSwgZXh0ZXJuYWxMaW5rOiBmYWxzZSB9O1xyXG4gICAgdGhpcy5zZXRGaWx0ZXJPcHRpb25zKHRoaXMudGFibGVDb2x1bW5zKTtcclxuICB9XHJcblxyXG4gIHZpZXdWZXJzaW9ucyhldnQpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vJyArIGV2dC5kYXRhLmlkICsgJy92ZXJzaW9ucyddLCB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUgfSk7XHJcbiAgfVxyXG5cclxuICBlZGl0VGFibGVSb3coZXZ0KSB7XHJcbiAgICB0aGlzLmxvY2Fsc3RvcmUuc2V0T2JqKCdFRElUQkFTSUNJTkZPJywgZXZ0LmRhdGEpO1xyXG4gICAgdGhpcy5sb2NhbHN0b3JlLnNldE9iaignUEFHRURFU0lHTl9CQVNJQ0lORk8nLCAnJyk7XHJcbiAgICBjb25zdCBsb2dpblVzZXIgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdpZCcpO1xyXG4gICAgY29uc29sZS5sb2cobG9naW5Vc2VyKTtcclxuICAgIGlmIChldnQuZGF0YS5sb2NrZWQgJiYgTnVtYmVyKGxvZ2luVXNlcikgPT09IGV2dC5kYXRhLmxvY2tlZGJ5KSB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vLi4vZWRpdC8nICsgZXZ0LmRhdGEuaWQgKyAnL2Jhc2ljLWluZm8nXSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2dC5kYXRhLmxvY2tlZCAmJiBOdW1iZXIobG9naW5Vc2VyKSAhPT0gZXZ0LmRhdGEubG9ja2VkYnkpIHtcclxuICAgICAgdGhpcy5hbGVydFNlcnZpY2UuZXJyb3IoXHJcbiAgICAgICAgJ0xvY2tlZCBCeSAtICcgKyAoZXZ0LmRhdGEubG9ja2VkYnlVc2VyLmxhc3RuYW1lICsgJyAnICsgZXZ0LmRhdGEubG9ja2VkYnlVc2VyLmZpcnN0bmFtZSlcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vLi4vZWRpdC8nICsgZXZ0LmRhdGEuaWQgKyAnL2Jhc2ljLWluZm8nXSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmlld1RhYmxlUm93KGV2dCkge1xyXG4gICAgdGhpcy5sb2NhbHN0b3JlLnJlbW92ZUl0ZW0oJ2VkaXRWYWx1ZScpO1xyXG4gICAgdGhpcy5sb2NhbHN0b3JlLnJlbW92ZUl0ZW0oJ3RhcmdldC10YWItZmlsdGVyJyk7XHJcbiAgICB0aGlzLmxvY2Fsc3RvcmUuc2V0SXRlbSgndmVyc2lvbi1pZCcsIHRoaXMuaWQpO1xyXG4gICAgaWYgKGV2dC5kYXRhLnBhZ2VEZXRhaWxzLnBhZ2V0eXBlID09ICdCR1AnKSB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vLi4vLi4vZHluYW1pYy1zZWEvdmlldy8nLCBldnQuZGF0YS5pZF0sIHsgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSB9KTtcclxuICAgIH0gZWxzZSBpZiAoZXZ0LmRhdGEucGFnZURldGFpbHMucGFnZXR5cGUgPT0gJ0JUUCcpIHtcclxuICAgICAgaWYgKHRoaXMubG9jYWxzdG9yZS5nZXRPYmooJ2R5bmFtaWMtdGFiLXBhZ2VzJykpIHtcclxuICAgICAgICB0aGlzLmxvY2Fsc3RvcmUucmVtb3ZlSXRlbSgnZHluYW1pYy10YWItcGFnZXMnKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxvY2Fsc3RvcmUuc2V0T2JqKCdkeW5hbWljLXRhYi1wYWdlcycsIGV2dC5kYXRhLnRhYmNvbmZpZyk7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3BhZ2VzL2R5bmFtaWNwYWdlLWNvbW1vbi90YWIvJywgZXZ0LmRhdGEuaWRdLCB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUgfSk7XHJcbiAgICB9IGVsc2UgaWYgKGV2dC5kYXRhLnBhZ2VEZXRhaWxzLnBhZ2V0eXBlID09ICdSQlRQJykge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wYWdlcy9keW5hbWljLXJvdXRpbmcvdGFiLycsIGV2dC5kYXRhLmlkXSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xyXG4gICAgfSBlbHNlIGlmIChldnQuZGF0YS5wYWdlRGV0YWlscy5wYWdldHlwZSA9PSAnRFInKSB7XHJcbiAgICAgIGlmICh0aGlzLmxvY2Fsc3RvcmUuZ2V0T2JqKCdkeW5hbWljLXJpYmJvbicpKSB7XHJcbiAgICAgICAgdGhpcy5sb2NhbHN0b3JlLnJlbW92ZUl0ZW0oJ2R5bmFtaWMtcmliYm9uJyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5sb2NhbHN0b3JlLnNldE9iaignZHluYW1pYy1yaWJib24nLCBldnQuZGF0YSk7XHJcbiAgICAgIHRoaXMucGFnZUJ1aWxkZXJBZGRTZXJ2aWNlLnNldEZvcm1EYXRhKGV2dC5kYXRhKTtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2AvcGFnZXMvcGFnZS1kZXNpZ24vdmlldy8ke2V2dC5kYXRhLmlkfS9wYWdlLXJpYmJvbi1kZXNpZ25gXSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xyXG4gICAgfSBlbHNlIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vLi4vdmlldycsIGV2dC5kYXRhLmlkXSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xyXG4gIH1cclxuXHJcbiAgZHVwbGljYXRlUGFnZVZlcnNpb24oZXZ0KSB7XHJcbiAgICB0aGlzLnBhZ2VCdWlsZGVyU2VydmljZS5jb3B5UGFnZVZlcnNpb24oe30sIGV2dC5kYXRhLmlkKS5zdWJzY3JpYmUoXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICB0aGlzLmdldFZlcnNpb25MaXN0KCk7XHJcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3VjY2VzcygnTmV3IHZlcnNpb24gY3JlYXRlZCBzdWNjZXNzZnVsbHkhJyk7XHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5lcnJvcihgRmFpbGVkIHRvIGR1cGxpY2F0ZSB0aGUgdmVyc2lvbiAke2V2dC5kYXRhLnZlcnNpb259YCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBsb2FkRmlsdGVyRm9ybSgpIHtcclxuICAgIHRoaXMuZmlsdGVyRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICBzZWxlY3RlZEZpbHRlcjogWycnXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRHcmlkQ29uZmlnKCkge1xyXG4gICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5nZXRTdGF0aWNHcmlkQ29uZmlnKHRoaXMuZ3JpZElkKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIGlmIChyZXMgJiYgcmVzLmRhdGE/LmNvbmZpZykge1xyXG4gICAgICAgIGNvbnN0IHNhbXBsZURhdGEgPSByZXMuZGF0YT8uY29uZmlnO1xyXG4gICAgICAgIGNvbnN0IGNvbHVtblJlc3BvbnNlQ29uZmlnID0gSlNPTi5wYXJzZShzYW1wbGVEYXRhKTtcclxuICAgICAgICB0aGlzLnRhYmxlQ29sdW1ucyA9IGNvbHVtblJlc3BvbnNlQ29uZmlnO1xyXG4gICAgICAgIHRoaXMuc2V0RmlsdGVyT3B0aW9ucyhjb2x1bW5SZXNwb25zZUNvbmZpZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRHcmlkQ29sdW1ucygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEZpbHRlck9wdGlvbnMoY29sQ29uZmlnKSB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gW107XHJcbiAgICBjb25zdCBhcnIgPSBbXTtcclxuICAgIGNvbENvbmZpZy5tYXAoY29sID0+IHtcclxuICAgICAgb3B0aW9ucy5wdXNoKHtcclxuICAgICAgICBjb2x1bW5OYW1lOiBjb2wuaGVhZGVyLFxyXG4gICAgICAgIGl0ZW1zOiB0aGlzLmdyaWRPcHRpb25zLm1hcChvcCA9PiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogYCR7Y29sLmNvbHVtbkRlZn0tJHtvcC52YWx1ZX1gLFxyXG4gICAgICAgICAgICBsYWJlbDogb3AubGFiZWwsXHJcbiAgICAgICAgICAgIHZhbHVlOiBvcC52YWx1ZSxcclxuICAgICAgICAgICAgY29kZTogY29sLmNvbHVtbkRlZixcclxuICAgICAgICAgICAgYWN0aXZlOiBjb2xbb3AudmFsdWVdID09PSB0cnVlID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb2wuc2VsZWN0ZWQubWFwKHYgPT4gYXJyLnB1c2goYCR7Y29sLmNvbHVtbkRlZn0tJHt2fWApKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5maWx0ZXJPcHRpb25zID0gb3B0aW9ucztcclxuICAgIHRoaXMuZmlsdGVyRm9ybS5wYXRjaFZhbHVlKHsgc2VsZWN0ZWRGaWx0ZXI6IGFyciB9KTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUZpbHRlck9wdGlvbnMoZSkge1xyXG4gICAgY29uc3QgW2NvZGUsIHZhbHVlXSA9IGUuaXRlbVZhbHVlLnNwbGl0KCctJyk7XHJcbiAgICBjb25zdCBpc0V4aXN0cyA9IHRoaXMudGFibGVDb2x1bW5zLmZpbHRlcihjb2wgPT4ge1xyXG4gICAgICByZXR1cm4gY29sLmNvbHVtbkRlZiA9PT0gY29kZSAmJiAhIWNvbFt2YWx1ZV07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2hlY2tjb25kaXRpb25GaWx0ZXJPcHRpb25zKGlzRXhpc3RzLCB2YWx1ZSwgY29kZSk7XHJcbiAgICBjb25zdCBjb2x1bW5Db25maWcgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnRhYmxlQ29sdW1ucyk7XHJcbiAgICB0aGlzLnNhdmVHcmlkQ29uZmlnKGNvbHVtbkNvbmZpZyk7XHJcbiAgfVxyXG4gIGNoZWNrY29uZGl0aW9uRmlsdGVyT3B0aW9ucyhpc0V4aXN0cywgdmFsdWUsIGNvZGUpIHtcclxuICAgIGlmIChpc0V4aXN0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy50YWJsZUNvbHVtbnMuZm9yRWFjaCh0YyA9PiB7XHJcbiAgICAgICAgdGNbdmFsdWVdID0gdGMuY29sdW1uRGVmID09PSBjb2RlID8gdHJ1ZSA6IHRjW3ZhbHVlXTtcclxuICAgICAgICBpZiAodGMuY29sdW1uRGVmID09PSBjb2RlKSB7XHJcbiAgICAgICAgICB0Yz8uc2VsZWN0ZWQucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YztcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNvbmRpdGlvbkNoZWNrRWxzZSh2YWx1ZSwgY29kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbmRpdGlvbkNoZWNrRWxzZSh2YWx1ZSwgY29kZSkge1xyXG4gICAgdGhpcy50YWJsZUNvbHVtbnMuZm9yRWFjaChjID0+IHtcclxuICAgICAgY1t2YWx1ZV0gPSBjLmNvbHVtbkRlZiA9PT0gY29kZSA/IGZhbHNlIDogY1t2YWx1ZV07XHJcbiAgICAgIGlmIChjLmNvbHVtbkRlZiA9PT0gY29kZSkge1xyXG4gICAgICAgIGM/LnNlbGVjdGVkPy5mb3JFYWNoKChzLCBpKSA9PiB7XHJcbiAgICAgICAgICBzID09PSB2YWx1ZSAmJiBjPy5zZWxlY3RlZC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGM7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgc2F2ZUdyaWRDb25maWcoZGF0YSkge1xyXG4gICAgY29uc3QgcmVxQm9keSA9IHtcclxuICAgICAgdHlwZTogJ1NUQVRJQ19HUklEJyxcclxuICAgICAgbWFwcGVkaWQ6IHRoaXMuZ3JpZElkLFxyXG4gICAgICBjb25maWc6IGRhdGFcclxuICAgIH07XHJcbiAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLnNhdmVHcmlkVXNlclByZWZlcmVuY2UocmVxQm9keSkuc3Vic2NyaWJlKF9yID0+IHtcclxuICAgICAgdGhpcy5nZXRHcmlkQ29uZmlnKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5sb2NhbHN0b3JlLnJlbW92ZUl0ZW0oJ0ZJTEUgRVhQT1JUIE5BTUUnKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInBhZ2UtZGVzaWduXCI+XHJcbiAgPGRpdiBjbGFzcz1cInN0cmlwX2hlYWQgdG9nZ2xlbGVmdCBteS0yIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInRleHQtbGVmdFwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiPjwvZGl2PlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWljb24gbXktMlwiXHJcbiAgICAgICAgdGl0bGU9XCJCYWNrIFRvIFByZXZpb3VzIFBhZ2VcIlxyXG4gICAgICAgIChjbGljayk9XCJnb1RvUHJldmlvdXMoKVwiXHJcbiAgICAgICAgcFJpcHBsZT5cclxuICAgICAgICA8ZW0gY2xhc3M9XCJwaSBwaS1hcnJvdy1sZWZ0IGZvbnQtd2VpZ2h0LWJvbGRcIj48L2VtPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgbWItNFwiPlxyXG4gICAgICA8cC1jYXJkIHN0eWxlQ2xhc3M9XCJyYmFjLWNhcmQgZ3JpZHZpZXcgdy0xMDBcIj5cclxuICAgICAgICA8YXBwLWdyaWQtbGlzdFxyXG4gICAgICAgICAgW2RhdGFMaXN0XT1cInBhZ2VMaXN0XCJcclxuICAgICAgICAgIFt1cGRhdGVHcmlkXT1cInVwZGF0ZUdyaWRcIlxyXG4gICAgICAgICAgW2NvbHVtbnNdPVwidGFibGVDb2x1bW5zXCJcclxuICAgICAgICAgIFt0b3RhbENvdW50XT1cInRvdGFsY291bnRcIlxyXG4gICAgICAgICAgKGVkaXRUYWJsZVJvdyk9XCJlZGl0VGFibGVSb3coJGV2ZW50KVwiXHJcbiAgICAgICAgICAodmlld1RhYmxlUm93KT1cInZpZXdUYWJsZVJvdygkZXZlbnQpXCJcclxuICAgICAgICAgICh2aWV3VmVyc2lvbnMpPVwidmlld1ZlcnNpb25zKCRldmVudClcIlxyXG4gICAgICAgICAgKGR1cGxpY2F0ZVBhZ2VWZXJzaW9uKT1cImR1cGxpY2F0ZVBhZ2VWZXJzaW9uKCRldmVudClcIlxyXG4gICAgICAgICAgKGFjdGl2YXRlVmVyc2lvbik9XCJhY3RpdmF0ZVZlcnNpb24oJGV2ZW50KVwiPlxyXG4gICAgICAgIDwvYXBwLWdyaWQtbGlzdD5cclxuICAgICAgPC9wLWNhcmQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuIl19