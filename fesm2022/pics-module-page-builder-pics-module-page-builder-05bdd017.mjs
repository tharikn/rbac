import * as i0 from '@angular/core';
import { Injectable, Component, Input, Directive, EventEmitter, ViewChild, Output, ViewEncapsulation, NgModule, Pipe, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import * as i2 from '@angular/router';
import { NavigationStart, RouterModule } from '@angular/router';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import * as i7$2 from '@formio/angular';
import { registerCustomFormioComponent, FormioModule } from '@formio/angular';
import 'rxjs/add/operator/map';
import * as i4 from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import * as i4$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@angular/forms';
import { FormGroup, FormControl, UntypedFormBuilder, FormsModule, ReactiveFormsModule, UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { mergeMap } from 'rxjs/operators';
import * as i1 from 'ngxf-uploader';
import { NgxfUploaderModule } from 'ngxf-uploader';
import * as i7 from 'primeng/inputtext';
import { InputTextModule } from 'primeng/inputtext';
import * as i9 from 'primeng/dropdown';
import { DropdownModule } from 'primeng/dropdown';
import * as i10 from 'primeng/card';
import { CardModule } from 'primeng/card';
import * as i5$1 from 'primeng/ripple';
import { RippleModule } from 'primeng/ripple';
import * as i5 from 'devextreme-angular';
import { DxDataGridComponent, DxDataGridModule, DxListModule } from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';
import { exportDataGrid } from 'devextreme/pdf_exporter';
import * as jsPDF from 'jspdf';
import * as moment from 'moment';
import * as i6 from 'devextreme-angular/ui/nested';
import * as i7$1 from 'devextreme-angular/core';
import * as i8 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import * as i6$1 from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import * as i8$1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import * as i7$3 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import * as i9$1 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import * as i1$2 from 'ngx-mask';
import { NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { DragDropModule } from '@angular/cdk/drag-drop';
import * as i1$3 from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { PanelModule } from 'primeng/panel';
import { TreeSelectModule } from 'primeng/treeselect';
import { AccordionModule } from 'primeng/accordion';
import { TabMenuModule } from 'primeng/tabmenu';
import { MessageModule } from 'primeng/message';
import * as i5$3 from 'primeng/table';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import * as i6$2 from 'primeng/button';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from 'primeng/inputmask';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputSwitchModule } from 'primeng/inputswitch';
import * as i11 from 'primeng/confirmdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SpeedDialModule } from 'primeng/speeddial';
import { OrderListModule } from 'primeng/orderlist';
import { DialogModule } from 'primeng/dialog';
import * as i7$4 from 'primeng/fileupload';
import { FileUploadModule } from 'primeng/fileupload';
import { PasswordModule } from 'primeng/password';
import { KnobModule } from 'primeng/knob';
import { TabViewModule } from 'primeng/tabview';
import { SidebarModule } from 'primeng/sidebar';
import * as i5$2 from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

class PageBuilderAddURL {
    static EndPoints = {
        page_config: {
            pageVersion: '/platform/page-designer/pageversion/{id}',
            page: '/platform/page-designer/page',
            dbSchema: '/database/',
            page_lock: '/platform/page-designer/page/{id}/lock',
            assetByVersion: '/platform/page-designer/asset/batch/{pageid}/version/{versionid}',
            pageExist: '/platform/page-designer/page/{pagename}/{orgid}',
            pageaudit: '/platform/page-designer/page/audit/pageaudit/{id}/{id2}',
            orgPageList: '/platform/page-designer/page/organization/{orgid}?returnUserPage=false&excludeNoActiveVersionPages=true'
        },
        rbac: {
            asset: {
                listByPageID: '/asset/getpagebyid',
                batch: '/asset/batch/'
            },
            organization: {
                list: '/platform/page-designer/page/organization/'
            }
        },
        report: {
            report: '/report'
        },
        db: {
            schemaList: '/database/organization/{organizationid}/{dbstring}',
            tableBySchemaName: '/database/{schema}/{dbstring}',
            relatedTableFields: '/database/{table}/{schema}/{dbstring}/related',
            columnsOfRelatedTables: '/database/{table}/related',
            fieldsOfRelatedTable: '/database/related',
            tableFields: '/database/{table}/{schema}/{dbstring}/validColumn'
        },
        attachment: {
            uploadKey: '/common/files/upload-key',
            list: '/solution/formresponse-attachment/{formid}/{responseid}',
            delete: '/solution/formresponse-attachment/{fileid}',
            downloadKey: '/file/download-key'
        }
    };
}
class RBACINFO {
    unsubscribe() {
        throw new Error('Method not implemented.');
    }
    apiHost = '';
    tokenKey = '';
    others;
    orgID;
    chatServer;
    environment;
}
class Environment {
    mstrUsername;
    mstrPassword;
    mstrURL;
    mstrProjectID;
    applicationid;
    priority;
}

class Store {
    state$;
    _state$;
    constructor(initialState) {
        this._state$ = new BehaviorSubject(initialState);
        this.state$ = this._state$.asObservable();
    }
    get state() {
        return this._state$.getValue();
    }
    setState(nextState) {
        this._state$.next(nextState);
    }
}

class PermissionStore extends Store {
    constructor() {
        super({});
        //permission
    }
    setStore(data) {
        if (data) {
            this.setState({ ...this.state, ...data });
        }
    }
    getStore(type = 'P') {
        if (type === 'P')
            return of(this.state);
        else
            return of(this.state);
    }
    flat(array) {
        let result = [];
        if (array) {
            array.forEach(item => {
                result.push(item);
                if (item && Array.isArray(item)) {
                    result = result.concat(this.flat(item));
                }
            });
        }
        return result;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionStore, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionStore, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionStore, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class DataStoreService {
    currentStoreSubject = new BehaviorSubject({});
    currentStore = this.currentStoreSubject.asObservable();
    constructor() {
        // test codesss
    }
    setData(key, value) {
        const currentStore = this.getCurrentStore();
        currentStore[key] = value;
        this.currentStoreSubject.next(currentStore);
    }
    setObject(value) {
        this.currentStoreSubject.next(value);
    }
    getData(key) {
        const currentStore = this.getCurrentStore();
        return currentStore[key];
    }
    clearStore() {
        const currentStore = this.getCurrentStore();
        Object.keys(currentStore).forEach((key) => {
            delete currentStore[key];
        });
        this.currentStoreSubject.next(currentStore);
    }
    getCurrentStore() {
        return this.currentStoreSubject.value;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataStoreService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataStoreService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataStoreService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class PageBuilderAddComponent {
    permissionStore;
    _storeservice;
    RBACORG = new RBACINFO();
    PERMISSION;
    COMMONSERVICE;
    INPUTVALIDATIONMETHOD;
    constructor(permissionStore, _storeservice) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
    }
    ngOnInit() {
        this.COMMONSERVICE.subscribe((val) => {
            if (val) {
                this.RBACORG = val.RBACORG;
                this.PERMISSION = val.PERMISSION;
                this._storeservice.setData('RBACORG', this.RBACORG);
                this.permissionStore.setStore(this.PERMISSION);
                this._storeservice.setData('HTTPSERVICE', val.httpService);
                this._storeservice.setData('INPUTVALIDATIONMETHOD', this.INPUTVALIDATIONMETHOD);
            }
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddComponent, deps: [{ token: PermissionStore }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: PageBuilderAddComponent, selector: "pagebuilder", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", COMMONSERVICE: "COMMONSERVICE", INPUTVALIDATIONMETHOD: "INPUTVALIDATIONMETHOD" }, ngImport: i0, template: `
  <router-outlet></router-outlet>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.RouterOutlet, selector: "router-outlet", inputs: ["name"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pagebuilder', template: `
  <router-outlet></router-outlet>
  ` }]
        }], ctorParameters: function () { return [{ type: PermissionStore }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], COMMONSERVICE: [{
                type: Input
            }], INPUTVALIDATIONMETHOD: [{
                type: Input
            }] } });

class StorageService {
    Storage;
    constructor(Storage) {
        this.Storage = Storage;
    }
    getItem(key) {
        return this.Storage.getItem(key);
    }
    setItem(key, item) {
        return this.Storage.setItem(key, item);
    }
    getObj(key, safe = true) {
        try {
            const item = this.getItem(key);
            return JSON.parse(item);
        }
        catch (e) {
            if (!safe) {
                throw e;
            }
        }
    }
    setObj(key, item) {
        return this.setItem(key, JSON.stringify(item));
    }
    removeItem(key) {
        this.Storage.removeItem(key);
    }
    clear() {
        this.Storage.clear();
    }
}

class LocalService extends StorageService {
    constructor() {
        super(window.sessionStorage);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LocalService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LocalService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LocalService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class PageBuilderAddService {
    router;
    localstore;
    _storeservice;
    authorisedTabs = [];
    httpService;
    constructor(router, localstore, _storeservice) {
        this.router = router;
        this.localstore = localstore;
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    getFormData = new BehaviorSubject('');
    currentFormData = this.getFormData.asObservable();
    setFormData(data) {
        this.getFormData.next(data);
    }
    getBasicData = new BehaviorSubject('');
    currentBasicData = this.getBasicData.asObservable();
    setBasicData(data) {
        this.getBasicData.next(data);
    }
    getPageType = new BehaviorSubject(sessionStorage.getItem('SELECTED_PAGE'));
    currentPageType = this.getPageType.asObservable();
    setPageType(data) {
        this.getPageType.next(data);
    }
    getBasicDetailsbyId(id) {
        return this.httpService.get(PageBuilderAddURL.EndPoints.page_config.pageVersion.replace('{id}', id));
    }
    pageAlertChecking(pagename, orgid, _body) {
        return this.httpService.post(PageBuilderAddURL.EndPoints.page_config.pageExist
            .replace('{pagename}', String(pagename))
            .replace('{orgid}', String(orgid)), _body);
    }
    createPage(data) {
        return this.httpService.post(PageBuilderAddURL.EndPoints.page_config.page + '/', data);
    }
    createAssetByVersion(pageid, versionid, assetData) {
        return this.httpService.post(PageBuilderAddURL.EndPoints.page_config.assetByVersion
            .replace('{pageid}', String(pageid))
            .replace('{versionid}', String(versionid)), assetData);
    }
    getMenuList(data, id) {
        return this.httpService.post(PageBuilderAddURL.EndPoints.rbac.asset.batch + id, data);
    }
    getTableFields(param1, param2) {
        return this.httpService.get(PageBuilderAddURL.EndPoints.page_config.dbSchema + param1 + '/' + param2 + '/true/');
    }
    createReportTable(data) {
        return this.httpService.post(PageBuilderAddURL.EndPoints.report.report + '/', data);
    }
    getAllPage(url) {
        return this.httpService.get(url);
    }
    getSchema() {
        return this.httpService.get(PageBuilderAddURL.EndPoints.page_config.dbSchema);
    }
    getAllOrganisations() {
        return this.httpService.get(PageBuilderAddURL.EndPoints.rbac.organization.list + 'all');
    }
    editPageStatus(data, id) {
        return this.httpService.post(PageBuilderAddURL.EndPoints.page_config.page_lock.replace('{id}', String(id)), data);
    }
    getOrgList(orgid) {
        return this.httpService.get(PageBuilderAddURL.EndPoints.page_config.orgPageList.replace('{orgid}', orgid));
    }
    getUploadKey(data) {
        return this.httpService.post(PageBuilderAddURL.EndPoints.attachment.uploadKey, data);
    }
    getFormResponseAttachment(formid, responseid) {
        return this.httpService.get(PageBuilderAddURL.EndPoints.attachment.list.replace('{formid}', formid).replace('{responseid}', responseid));
    }
    deleteFormResponseAttachment(fileid) {
        return this.httpService.delete(PageBuilderAddURL.EndPoints.attachment.delete.replace('{fileid}', fileid));
    }
    downloadFormResponseAttachment(data) {
        return this.httpService.post(PageBuilderAddURL.EndPoints.attachment.downloadKey, data);
    }
    returnToList() {
        this.router.navigate(['/pages/page-design/list']);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddService, deps: [{ token: i2.Router }, { token: LocalService }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i2.Router }, { type: LocalService }, { type: DataStoreService }]; } });

let PageBuilderVersionURL$1 = class PageBuilderVersionURL {
    static EndPoints = {
        page_config: {
            pageVersion: '/platform/page-designer/pageversion/',
            activateVersion: '/platform/page-designer/pageversion/{id}/activate',
            versionList: '/platform/page-designer/pageversion/page/{id}',
            updateVersion: '/platform/page-designer/pageversion/{id}/update',
            copyVersion: '/platform/page-designer/pageversion/{id}/create'
        }
    };
};

let PageBuilderService$1 = class PageBuilderService {
    _storeservice;
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
        // This is intentional
    }
    getVersionList(pageId) {
        return this.httpService.get(PageBuilderVersionURL$1.EndPoints.page_config.versionList.replace('{id}', String(pageId)));
    }
    activateVersion(versionId) {
        return this.httpService.patch(PageBuilderVersionURL$1.EndPoints.page_config.activateVersion.replace('{id}', String(versionId)));
    }
    updatePageVersion(versionId, formData, createPage) {
        const url = PageBuilderVersionURL$1.EndPoints.page_config.updateVersion.replace('{id}', String(versionId));
        return this.httpService.patch(createPage ? `${url}?updateActiveVersion=true` : `${url}`, formData);
    }
    copyPageVersion(data, id) {
        return this.httpService.post(PageBuilderVersionURL$1.EndPoints.page_config.copyVersion.replace('{id}', String(id)), data);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderService, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderService, providedIn: 'root' });
};
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderService$1, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

class AlertService {
    router;
    subject = new Subject();
    keepAfterRouteChange = false;
    constructor(router) {
        this.router = router;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }
    getAlert() {
        return this.subject.asObservable();
    }
    success(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Success, message, keepAfterRouteChange);
    }
    error(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Error, message, keepAfterRouteChange);
    }
    info(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Info, message, keepAfterRouteChange);
    }
    warn(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Warning, message, keepAfterRouteChange);
    }
    alert(type, message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    }
    clear() {
        // clear alerts
        this.subject.next({});
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService, deps: [{ token: i2.Router }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i2.Router }]; } });
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));
class Alert {
    type;
    message;
}
class UserGroupDto {
    id;
    name;
    description;
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserRolePageDto {
    id;
    name;
    route;
    icon;
    order;
    ismenu;
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserRoleDto {
    id;
    name;
    description;
    priority;
    order;
    defaultpage;
    defaultpageid;
    parentid;
    parent;
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserDto {
    id;
    name;
    description;
    priority;
    order;
    defaultpage;
    defaultpageid;
    parentid;
    parent;
    constructor(data) {
        Object.assign(this, data);
    }
}
let AccessManagementConfig$1 = class AccessManagementConfig {
    static EndPoint = {
        Organization: {
            getOrganizationList: '/org/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        }
    };
};

class AccessManagementConfig {
    static EndPoint = {
        Organization: {
            getOrganizationList: '/platform/page-designer/page/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        },
        Page: {
            getPage: '/page'
        },
        Asset: {
            getAsset: 'asset',
            getPageAsset: '/platform/page-designer/asset/getpagebyid',
            getUserAsset: '/platform/page-designer/asset/getUserAssets',
            getRoleAsset: '/platform/page-designer/asset/getRoleAssets',
            getPolicyGroupAsset: '/platform/page-designer/asset/getPolicyGroupAssets'
        },
        User: {
            getUser: '/org/user/',
            getUserList: '/org/user/all',
            getUserorgList: '/org/user/organization/'
        },
        PolicyGroup: {
            getPolicyGroup: '/platform/page-designer/policyGroup/',
            getPolicyGroupList: '/platform/page-designer/policyGroup/organization/{organizationid}'
        },
        Role: {
            getRole: '/access-control/role/',
            getRoleList: '/access-control/role/organization/{orgid}'
        }
    };
}

class PageAccessService {
    _storeservice;
    isfull = false;
    ishide = false;
    isread = false;
    isreadwrite = false;
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    /**
     * when user selected policy
     * @param access Raw valur of RBac form
     * @returns form array of DA
     * @childFunction of saveRbac
     */
    accessByPolicy(access, id, policyGroupData, selectedFieldData, pageData) {
        const fullArray = [];
        for (const value of id) {
            const selectedData = policyGroupData.filter(key => key.id === value);
            const formObj = {
                id: '',
                description: '',
                policygroupname: '',
                pageConfigs: [],
                assetConfigs: []
            };
            this.setPolicyObj(formObj, selectedData, value);
            this.loadAccessForPage(access, selectedData, formObj, value, pageData);
            if (access.fieldLevelData.length) {
                this.loadAccessForFields(access, selectedData, formObj, value, selectedFieldData, pageData);
            }
            fullArray.push(formObj);
        }
        return fullArray;
    }
    /**
     * when user selected Persona
     * @param access Raw valur of RBac form
     * @returns form array of DA
     * @childFunction of saveRbac
     */
    accessByPersona(access, personaId, id, roleAddedData, selectedFieldData, pageData) {
        const fullArray = [];
        // const personaId = this.rbacForm.get('roleid').value;
        // const personaId = this.rbacForm.get('roleid').value;
        const formObj = {
            id: '',
            rolekey: '',
            rolename: '',
            description: '',
            effectivedate: '',
            pageConfigs: [],
            assetConfigs: [],
            rolePolicyGroupConfigs: []
        };
        for (const item of personaId) {
            const selectedData = roleAddedData.filter(key => key.id === item);
            this.setRoleObj(formObj, selectedData, item, id);
            this.loadAccessForPage(access, selectedData, formObj, item, pageData);
            if (access.fieldLevelData.length) {
                this.loadAccessForFields(access, selectedData, formObj, item, selectedFieldData, pageData);
            }
            fullArray.push(formObj);
        }
        return fullArray;
    }
    /**
     * when user selected User
     * @param access Raw valur of RBac form
     * @returns form array of DA
     * @childFunction of saveRbac
     */
    accessByUser(access, userId, id, roleids, userList, selectedFieldData, pageData) {
        const fullArray = [];
        for (const item of userId) {
            const selectedData = userList.filter(key => key.id === item);
            const formObj = { ...selectedData[0] };
            formObj.pageConfigs = [];
            formObj.assetConfigs = [];
            formObj.policyGroupConfigs = [];
            formObj.roleConfigs = [];
            console.log('======');
            this.setUserObj(formObj, selectedData, item, id, roleids);
            console.log('======1');
            this.loadAccessForPage(access, selectedData, formObj, item, pageData);
            console.log('======2');
            if (access.fieldLevelData.length) {
                this.loadAccessForFields(access, selectedData, formObj, item, selectedFieldData, pageData);
            }
            fullArray.push(formObj);
        }
        return fullArray;
    }
    /**
     * Fetch access list for dashboard access
     * @param access
     * @param assetDashBoardConfigs
     * @param formObj
     * @param id
     */
    loadAccessForPage(access, selectedData, formObj, id, pageData) {
        const existPageConfigs = selectedData[0]['pageConfigs'];
        for (const item of access.pageLevelData) {
            const selectedModule = pageData.filter(key => key.id === item['pageid']);
            const pageAccess = access.pageLevelData.filter(key => key.pageid === item['pageid']);
            this.pageAccessCheck(pageAccess);
            const pageKey = {
                id: null,
                isactive: true,
                isfull: this.isfull,
                ishide: this.ishide,
                isread: this.isread,
                isreadwrite: this.isreadwrite,
                pageid: item['pageid'],
                policygroupid: id,
                modulekey: selectedModule[0]['modulekey'],
                submodulekey: selectedModule[0]['submodulekey']
            };
            // check exist page length
            if (existPageConfigs.length) {
                const existIds = existPageConfigs.map(p => p.pageid);
                const chkPage = existIds.includes(item['pageid']);
                if (chkPage) {
                    const index = existIds.indexOf(item['pageid']);
                    if (index > -1) {
                        //if found
                        pageKey.id = existPageConfigs[index]['id'];
                        pageKey.isactive = false;
                        formObj.pageConfigs.push(pageKey);
                        existPageConfigs.splice(index, 1);
                    }
                }
                const d = { ...pageKey };
                d.id = null;
                d.isactive = true;
                formObj.pageConfigs.push(d);
            }
            else {
                formObj.pageConfigs.push(pageKey);
            }
        }
        // still existconfig length
        if (existPageConfigs.length) {
            existPageConfigs.map(t => {
                t.isactive = false;
                formObj.pageConfigs.push(t);
                return t;
            });
        }
    }
    pageAccessCheck(pageAccess) {
        if (pageAccess[0].pageAccess === '1') {
            this.isfull = true;
        }
        else if (pageAccess[0].pageAccess === '4') {
            this.ishide = true;
        }
        else if (pageAccess[0].pageAccess === '3') {
            this.isread = true;
        }
        else if (pageAccess[0].pageAccess === '2') {
            this.isreadwrite = true;
        }
    }
    setPolicyObj(formObj, selectedData, id) {
        formObj.id = id;
        formObj.description = selectedData[0]['description'];
        formObj.policygroupname = selectedData[0]['policygroupname'];
    }
    loadAccessForFields(access, selectedData, formObj, id, selectedFieldData, pageData) {
        // console.log(selectedData)
        const assetConfigs = selectedData[0]['assetConfigs'].filter(key => key.modulekey !== null);
        // console.log('------------')
        const selectedModule = pageData.filter(key => key.id === access.fpages[0]['id']);
        // console.log(access.fieldLevelData)
        selectedFieldData =
            access.fieldLevelData !== null ? this.setSelectedFieldPage(access.fieldLevelData, selectedFieldData) : [];
        // console.log(selectedData, assetConfigs)
        for (const selectedField of selectedFieldData) {
            if (selectedField.access === null) {
                // continue;
            }
            console.log(selectedField);
            let isfull = false;
            let ishide = false;
            let isread = false;
            let isreadwrite = false;
            if (selectedField.access === '2' || selectedField.access === '1') {
                isfull = true;
            }
            else if (selectedField.access === '4') {
                ishide = true;
            }
            else if (selectedField.access === '3') {
                isread = true;
            }
            else if (selectedField.access === '2') {
                isreadwrite = true;
            }
            const aConfigs = {
                id: selectedField['id'] ? selectedField['id'] : null,
                isactive: true,
                isfull: isfull,
                ishide: ishide,
                isread: isread,
                isreadwrite: isreadwrite,
                assetid: selectedField['assetid'],
                policygroupid: id,
                pageid: selectedField['pageId'] ? selectedField['pageId'] : access.fpages[0]['id'],
                modulekey: selectedModule[0]['modulekey'],
                submodulekey: selectedModule[0]['submodulekey']
            };
            // check exist page length
            this.checkExistAsset(assetConfigs, selectedField, aConfigs, formObj);
        }
    }
    checkExistAsset(assetConfigs, selectedField, aConfigs, formObj) {
        if (assetConfigs.length) {
            const existIds = assetConfigs.map(p => p.assetid);
            const chkPage = existIds.includes(selectedField['assetid']);
            if (chkPage) {
                const index = existIds.indexOf(selectedField['assetid']);
                if (index > -1) {
                    //if found
                    aConfigs.id = assetConfigs[index]['id'];
                    aConfigs.isactive = false;
                    formObj.assetConfigs.push(aConfigs);
                    assetConfigs.splice(index, 1);
                }
            }
            const d = { ...aConfigs };
            d.isactive = true;
            d.id = null;
            formObj.assetConfigs.push(d);
        }
        else {
            formObj.assetConfigs.push(aConfigs);
        }
    }
    setRoleObj(formObj, selectedData, roleid, policyid) {
        formObj.id = roleid;
        formObj.rolekey = selectedData[0]['rolekey'];
        formObj.rolename = selectedData[0]['rolename'];
        formObj.effectivedate = selectedData[0]['effectivedate'];
        formObj.description = selectedData[0]['description'];
        // loop the policy group
        const id = policyid;
        const existRolePolicyConfig = selectedData[0]['rolePolicyGroupConfigs'];
        for (const item of id) {
            const rpolicyConfig = {
                id: null,
                isactive: true,
                policygroupid: item,
                roleid: roleid // role id
            };
            // check exist page length
            if (existRolePolicyConfig.length) {
                const existIds = existRolePolicyConfig.map(p => p.policygroupid);
                const chkPage = existIds.includes(item);
                if (chkPage) {
                    const index = existIds.indexOf(item);
                    if (index > -1) {
                        //if found
                        rpolicyConfig.id = existRolePolicyConfig[index]['id'];
                        existRolePolicyConfig.splice(index, 1);
                    }
                }
            }
            formObj.rolePolicyGroupConfigs.push(rpolicyConfig);
        }
        // still existconfig length
        if (existRolePolicyConfig.length) {
            existRolePolicyConfig.map(t => {
                t.isactive = false;
                formObj.rolePolicyGroupConfigs.push(t);
                return t;
            });
        }
    }
    setUserObj(formObj, selectedData, userId, id, roleids) {
        // loop the policy group
        const existRolePolicyConfig = selectedData[0]['policyGroupConfigs'];
        this.getCheckPolicyConfig(id, userId, existRolePolicyConfig, formObj);
        // still existconfig length
        if (existRolePolicyConfig.length) {
            existRolePolicyConfig.map(t => {
                t.isactive = false;
                formObj.policyGroupConfigs.push(t);
                return t;
            });
        }
        // loop the role group
        // const roleids = this.rbacForm.get('roleid').value;
        const existRoleId = selectedData[0]['roleConfigs'];
        for (const role of existRoleId) {
            const chkRoleData = roleids.includes(role['roleid']);
            const roleGrp = {
                id: role['id'],
                isactive: false,
                isdefaultrole: role['isdefaultrole'],
                userid: userId,
                roleid: role['roleid'],
                effectivedate: role['effectivedate']
            };
            if (chkRoleData) {
                const index1 = roleids.indexOf(role['roleid']);
                if (index1 > -1) {
                    //if found
                    roleids.splice(index1, 1);
                }
                roleGrp.isactive = true;
            }
            formObj.roleConfigs.push(roleGrp);
        }
        // check new roles group ids
        if (roleids.length) {
            for (const roleId of roleids) {
                const roleGrp = {
                    id: null,
                    isactive: true,
                    isdefaultrole: false,
                    userid: userId,
                    roleid: roleId,
                    effectivedate: new Date()
                };
                formObj.roleConfigs.push(roleGrp);
            }
        }
    }
    getCheckPolicyConfig(id, userId, existRolePolicyConfig, formObj) {
        for (const item of id) {
            const rpolicyConfig = {
                id: null,
                isactive: true,
                policygroupid: item,
                userid: userId // user id
            };
            // check exist page length
            if (existRolePolicyConfig.length) {
                const existIds = existRolePolicyConfig.map(p => p.policygroupid);
                const chkPage = existIds.includes(item);
                if (chkPage) {
                    const index = existIds.indexOf(item);
                    if (index > -1) {
                        //if found
                        rpolicyConfig.id = existRolePolicyConfig[index]['id'];
                        existRolePolicyConfig.splice(index, 1);
                    }
                }
            }
            formObj.policyGroupConfigs.push(rpolicyConfig);
        }
    }
    setSelectedFieldPage(updateArray, selectedFieldData) {
        // console.log('=========>', updateArray, selectedFieldData)
        if (updateArray?.length) {
            if (selectedFieldData?.length >= updateArray.length) {
                selectedFieldData = this.updateDuplicatesinArray([...selectedFieldData], [...updateArray]);
                return selectedFieldData;
            }
            else {
                selectedFieldData = [...updateArray];
                return selectedFieldData;
            }
        }
    }
    updateDuplicatesinArray(origArr, updatingArr) {
        const updatingArrids = new Set(updatingArr.map(ele => ele.assetid));
        return [...updatingArr, ...origArr.filter(ele => !updatingArrids.has(ele.assetid))];
    }
    getMostFrequentEle(arr) {
        const hashMap = arr.reduce((acc, val) => {
            acc[String(val)] = (acc[val] || 0) + 1;
            return acc;
        }, {});
        return Object.keys(hashMap).reduce((a, b) => (hashMap[a] > hashMap[b] ? a : b));
    }
    getAccessArrayOnClick(pagesFromField, pageData, selectedFieldData, savedPageAccessPatching, existingValue) {
        const pageAccessValue = null;
        const accessArray = [];
        for (let i = 0; i < pagesFromField?.length; i++) {
            const pageName = pageData.filter(key => key.id === pagesFromField[i]);
            const fieldLevelExist = selectedFieldData.filter(ele => ele.pageId == pagesFromField[i]);
            this.checkFieldLevelExist(fieldLevelExist, savedPageAccessPatching, pageAccessValue, pagesFromField, existingValue, i);
            accessArray.push(new FormGroup({
                pageName: new FormControl(pageName[0]['pagename']),
                pageid: new FormControl(pagesFromField[i]),
                pageAccess: new FormControl(pageAccessValue ? pageAccessValue : '2'),
                validity: new FormControl((existingValue[i]?.validity && String(existingValue[i].validity)) || '0'),
                condition: new FormControl((existingValue[i]?.condition && existingValue[i].condition) || 'always'),
                fallbackTo: new FormControl((existingValue[i]?.condition && existingValue[i].fallbackTo) || 'n')
            }));
        }
        return accessArray;
    }
    checkFieldLevelExist(fieldLevelExist, savedPageAccessPatching, _pageAccessValue, pagesFromField, existingValue, i) {
        if (fieldLevelExist?.length && savedPageAccessPatching) {
            _pageAccessValue = this.getMostFrequentEle(fieldLevelExist?.filter(ele => (ele.pageId = pagesFromField[i]))?.map(e => (e.access ? Number(e.access) : 0)));
        }
        else {
            _pageAccessValue = existingValue?.find(ele => ele.pageid === pagesFromField[i])?.pageAccess;
        }
    }
    getAccess(access) {
        let accessField;
        accessField = '2';
        if (access?.isreadwrite) {
            accessField = '2';
        }
        else if (access?.ishide) {
            accessField = '4';
        }
        else if (access?.isread) {
            accessField = '3';
        }
        else if (access?.isfull) {
            accessField = '5';
        }
        return accessField;
    }
    getOrganizationPage(orgId) {
        return this.httpService.get(AccessManagementConfig.EndPoint.Organization.getOrganization.replace('{orgId}', orgId));
    }
    getAssetByPageId(pId) {
        return this.httpService.get(`${AccessManagementConfig.EndPoint.Asset.getPageAsset}/${pId}`);
    }
    createAsset(selectedAccess, selectedId, asset) {
        let url;
        if (selectedAccess === 'user') {
            url = `org/user/${selectedId}`;
        }
        else if (selectedAccess === 'role') {
            url = `access-control/role/${selectedId}`;
        }
        else {
            url = `platform/page-designer/policygroup/${selectedId}`;
        }
        return this.httpService.post(`/${url}/${AccessManagementConfig.EndPoint.Asset.getAsset}`, asset);
    }
    getAssetById(selectedAccess, selectedId) {
        let url;
        if (selectedAccess === 'user') {
            url = AccessManagementConfig.EndPoint.Asset.getUserAsset;
        }
        else if (selectedAccess === 'role') {
            url = AccessManagementConfig.EndPoint.Asset.getRoleAsset;
        }
        else {
            url = AccessManagementConfig.EndPoint.Asset.getPolicyGroupAsset;
        }
        return this.httpService.get(`${url}/${selectedId}`);
    }
    getPolicyGroupPage(policygroupid) {
        return this.httpService.get(`/policygroup/${policygroupid}${AccessManagementConfig.EndPoint.Page.getPage}`);
    }
    getDynamicPage(selectedAccess, selectedId) {
        let url;
        if (selectedAccess === 'user') {
            url = 'org/user';
        }
        else if (selectedAccess === 'role') {
            url = 'access-control/role';
        }
        else {
            url = 'platform/page-designer/policygroup';
        }
        return this.httpService.get(`/${url}/${selectedId}${AccessManagementConfig.EndPoint.Page.getPage}`);
    }
    updateDynamicPage(selectedAccess, selectedId, pageData) {
        let url;
        if (selectedAccess === 'user') {
            url = 'org/user';
        }
        else if (selectedAccess === 'role') {
            url = 'access-control/role';
        }
        else {
            url = 'platform/page-designer/policygroup';
        }
        return this.httpService.put(`/${url}/${selectedId}${AccessManagementConfig.EndPoint.Page.getPage}`, pageData);
    }
    createAccess(fieldLevelAccess, accessBy, payload, userId, roleId, policyId) {
        let url;
        const createUrl = fieldLevelAccess
            ? AccessManagementConfig.EndPoint.Asset.getAsset
            : AccessManagementConfig.EndPoint.Page.getPage;
        // check only policy group
        if (accessBy === '3') {
            url = `${AccessManagementConfig.EndPoint.PolicyGroup.getPolicyGroup}${policyId ? policyId : '0'}${createUrl}`;
        }
        // check persona with policy group
        if (accessBy === '2') {
            url = `${AccessManagementConfig.EndPoint.Role.getRole}${roleId ? roleId : '0'}${createUrl}`;
        }
        // check user, persona with policy group
        if (accessBy === '1') {
            url = `${AccessManagementConfig.EndPoint.User.getUser}${userId ? userId : '0'}${createUrl}`;
        }
        return this.httpService.post(url, payload);
    }
    getApplicationAccess() {
        return this.httpService.get('/applicationaccess/');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageAccessService, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageAccessService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageAccessService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

class AppConstants {
    static categoryname = 'REFERRAL_ATTACHMENTS';
    static changePasswordText = 'text';
    static changePasswordPassword = 'password';
    static regexEmail = '^[0-9a-zA-Z.-]+[@][0-9a-zA-Z.-]+[.][0-9a-zA-Z]{2,}$';
    static regexPhone = '^[2-9][0-9]{2}-[2-9][0-9]{2}-[0-9]{4}$';
    static regexName = '^[a-zA-Z]{2,}$';
    static regexZipcode = '^[3][0-9]{4}$';
    static regexSsn = '^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$';
    static regexSsnDigits = /^(\d{3}-?\d{2}-?\d{4}|XXX-XX-XXXX)$/;
    static regexForPhone = '/^[()s-]*(d{8,12}|d{3}[)s-]*d{3}[s-]*d{4}|d{10})[()s-]*$/';
    static formatDate = 'MM/DD/YYYY';
    static camalize = '/[^a-zA-Z0-9]+(.)/g';
    static checSchemaExistQuery = '/(?<=(as|AS)s)("*[a-zA-Zs#~_]*"*)(?=,|(from|FROM))/g';
    static URLVALIDATE = '/(ftp|http|https)://(w+:{0,1}w*@)?(S+)(:[0-9]+)?(/|/([w#!:.?+=&%@!-/]))?/';
    static EventURLValidate;
    static RegexUrlConstant = '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/';
    static statusComments = '/<[^>]*>/g';
    static regexEmailType2 = '^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$';
    static errorMessage = 'Something went wrong!';
    static accessDeniedMessage = 'Access Denied';
    static sessionExpired = 'Your session is expired.';
    static pages = [
        { page: 'admin', title: 'User Management' },
        { page: 'intake-worker', title: 'Dashboard' },
        { page: 'microstrategy', title: 'Analytics' },
        { page: 'form-builder', title: 'Low Code Configurator' },
        { page: 'tab-order', title: 'Low Code Configurator' },
        { page: 'workflow', title: 'Low Code Configurator' },
        { page: 'document-packetization', title: 'Document Packetization' },
        { page: 'email-template', title: 'Email Template' },
        { page: 'chat', title: 'Chat' },
        { page: 'help-desk', title: 'Help' },
        { page: 'ocr-validation', title: 'Referrals' },
        { page: 'event-scheduler', title: 'Event Scheduler' },
        { page: 'config-dashboard', title: 'Config Dashboard' },
        { page: 'config-dashboard-user', title: 'Config Dashboard User' },
        { page: 'forms', title: 'Forms ' },
        { page: 'page-design', title: 'Page Design' },
        { page: 'dashboard-design', title: 'Dashboard Design' },
        { page: 'main-notification', title: 'Notification' },
        { page: 'dynamicPages', title: '' },
        { page: 'profile', title: 'Profile' }
    ];
    static errorList = [
        'Have at least one (1) number',
        'Have at least one (1) special character',
        'Have at least one (1) upper case letter',
        'Have at least one (1) lower case letter',
        'Contain a minimum of eight (8) characters'
    ];
    static referralSource = [
        { value: 'law enforcement', label: 'Law Enforcement' },
        { value: 'citizen complaint', label: 'Citizen Complaint' }
    ];
    static generateNumber() {
        const crypto = window.crypto;
        const array = new Uint32Array(1);
        crypto.getRandomValues(array);
        return array[0];
    }
    static iconList = [
        { label: 'Apps', value: 'apps' },
        { label: 'Admin Settings', value: 'admin_panel_settings' },
        { label: 'Description', value: 'description' },
        { label: 'Analytics', value: 'analytics' },
        { label: 'Settings', value: 'settings' },
        { label: 'Library', value: 'library_books' },
        { label: 'Long Receipt', value: 'receipt_long' },
        { label: 'List', value: 'list' },
        { label: 'Layers', value: 'layers' },
        { label: 'Summarize', value: 'summarize' },
        { label: 'Featured List', value: 'featured_play_list' },
        { label: 'Contract', value: 'contract' },
        { label: 'List Add', value: 'list_alt_add' },
        { label: 'Inactive Order', value: 'inactive_order' },
        { label: 'Receipt', value: 'receipt' },
        { label: 'Dataset', value: 'dataset' },
        { label: 'Density', value: 'density_medium' },
        { label: 'Data Thresholding', value: 'data_thresholding' },
        { label: 'View Comfy', value: 'view_comfy_alt' },
        { label: 'View Compact', value: 'view_compact_alt' },
        { label: 'Rebase', value: 'rebase' },
        { label: 'Data Check', value: 'data_check' },
        { label: 'Check', value: 'check' },
        { label: 'Right Panel Close', value: 'right_panel_close' },
        { label: 'Toolbar', value: 'toolbar' },
        { label: 'User List', value: 'patient_list' },
        { label: 'Tabs', value: 'tabs' },
        { label: 'Single Tab', value: 'tab' },
        { label: 'Shelf Position', value: 'shelf_position' },
        { label: 'Call', value: 'call' },
        { label: 'Bookmark', value: 'bookmark' },
        { label: 'Map', value: 'map' },
        { label: 'Book', value: 'book' },
        { label: 'Box', value: 'box' },
        { label: 'Lock', value: 'lock' },
        { label: 'Star', value: 'star' },
        { label: 'Menu', value: 'menu' },
        { label: 'School', value: 'school' },
        { label: 'Calendar', value: 'calendar_month' },
        { label: 'Circle', value: 'circle' },
        { label: 'Home', value: 'home' },
        { label: 'Bulleted List', value: 'format_list_bulleted' },
        { label: 'Database', value: 'database' },
        { label: 'View Timeline', value: 'view_timeline' },
        { label: 'Settings Account Box', value: 'settings_account_box' },
        { label: 'Iframe', value: 'iframe' },
        { label: 'Bottom Panel Close', value: 'bottom_panel_close' },
        { label: 'Bubbles', value: 'bubbles' },
        { label: 'Task', value: 'task' },
        { label: 'Quiz', value: 'quiz' },
        { label: 'Contact Mail', value: 'contact_mail' },
        { label: 'File Copy', value: 'file_copy' },
        { label: 'Post Add', value: 'post_add' },
        { label: 'Import Contacts', value: 'import_contacts' },
        { label: 'Pending Actions', value: 'pending_actions' },
        { label: 'History Edu', value: 'history_edu' },
        { label: 'Space Dashboard', value: 'space_dashboard' },
        { label: 'Dashboard', value: 'dashboard' },
        { label: 'Table Chart', value: 'table_chart' },
        { label: 'Edit Document', value: 'edit_document' },
    ];
    static defaultVariables = [
        { name: 'User_Name' },
        { name: 'Email_Id' },
        { name: 'Referral_Id' },
        { name: 'Attachment_Details' },
    ];
    static onInput(event, fieldtype, label, required) {
        const validationConfig = [
            {
                type: 'username',
                pattern: {
                    regex: /^[a-zA-ZÀ-ÖØ-öø-ÿ][a-zA-ZÀ-ÖØ-öø-ÿ' -]*$/,
                    errormessage: 'Allowed input - Alphabetic, accented letters, apostrophe, and hyphens.',
                    errormessage2: 'First character should be Alphabetic or accented letters.'
                },
                length: { maxlength: '100', errormessage: 'Input limit - 100 characters.' }
            },
            {
                type: 'description',
                length: { maxlength: '500', errormessage: 'Input limit - 500 characters.' }
            },
            {
                type: 'name',
                pattern: { regex: /^[a-zA-Z0-9-_ ]+$/, errormessage: 'Allowed input - Alpha numeric, hyphen, underscore and space.' },
                length: { maxlength: '100', errormessage: 'Input limit - 100 characters.' }
            },
            {
                type: 'email',
                pattern: { regex: /^[a-zA-Z0-9_]+(?:[.+][a-zA-Z0-9_]+)*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, errormessage: 'Valid Email ID is Required' },
                length: { maxlength: '200', errormessage: 'Input limit - 200 characters.' }
            }
        ];
        const config = validationConfig.find(item => item.type === fieldtype);
        const value = event.target.value;
        if (value) {
            if (config) {
                if (config.pattern) {
                    const pattern = new RegExp(config.pattern.regex);
                    if (fieldtype == 'username') {
                        const firstLetterValid = /^[a-zA-ZÀ-ÖØ-öø-ÿ]/.test(value.charAt(0));
                        if (!firstLetterValid) {
                            return config.pattern.errormessage2;
                        }
                    }
                    const patternValid = pattern.test(value);
                    if (!patternValid) {
                        return config.pattern.errormessage;
                    }
                }
                const maxLength = parseInt(config.length.maxlength);
                if (value.length > maxLength) {
                    return `${label} ${config.length.errormessage}`;
                }
            }
        }
        else {
            if (required) {
                return `${label} is Required`;
            }
        }
        return null; // No error
    }
}

class AuthURL {
    static EndPoints = {
        auth: {
            user: {
                conformMail: '/org/auth/forgot-password',
                changePassword: '/org/auth/forgot-password-verification',
                login: '/org/auth/login',
                refreshToken: '/org/auth/refresh-token',
                logout: '/org/auth/logout',
                userInfo: '/org/user/page/list',
                userRole: '/org/user/{id}',
                routeToDynamicPage: '/platform/page-designer/page/organization/{orgid}?returnUserPage=true&excludeNoActiveVersionPages=true',
                authMe: '/org/auth/me',
                resetPassword: '/org/user/reset-password',
                orgList: '/org/management-group/organization/tree',
                notification: '/worker/notification',
                workerAvailability: '/worker/updateAvailablity',
                getWorkerAvailability: '/worker/getByCurrentUser'
            },
            permission: {
                permissionRoleById: '/access-control/permission/role/{id}',
                pagePermission: '/access-control/permission/page',
                pageLookupPermission: '/access-control/permission/page/lookup'
            },
            microstrategy: {
                login: '/platform/microstrategy/login',
                getLibrary: '/platform/microstrategy/library'
            }
        }
    };
}
class CommonUrlConfig {
    static EndPoint = {
        dropDown: {
            page: '/platform/master/lookup/lookupbycategoryname/PAGE',
            Database: '/referencetype/Database',
            DGPJsonMode: '/referencetype/DGPJsonMode'
        },
        notification: {
            post: '/platform/notification/{id}'
        }
    };
}
class AttachmentConfig {
    static EndPoint = {
        Attachments: {
            GetAttachmentReferral: '/ref/attachment/referral',
            GetCategoryLookup: '/platform/master/lookup/lookupbycategoryname',
            UploadKey: '/common/files/upload-key',
            DownloadKey: '/common/files/download-key',
            PostAttachment: '/ref/attachment/create',
            PutAttachment: '/ref/attachment'
        }
    };
}

class DynamicTabPageConfig {
    static EndPoint = {
        Page: {
            getActivePage: '/platform/page-designer/pageversion/{id}',
            getPage: '/platform/page-designer/page',
            getPageById: '/platform/page-designer/page/{id}',
            getResponseByPageId: '/solution/formresponse/{responseId}/getByPageId/{pageId}',
            createFormResponse: '/solution/formresponse/create',
            patchFormResponse: '/solution/formresponse',
            updateFormResponse: '/pagedata/'
        },
        Narrative: {
            getIncidentListById: '/incident/listBySourceId/{id}'
        },
        Notification: {
            createSurveyConfig: '/surveyconfig/usersurvey/{id}/{status}/{pagedataid}'
        },
        Finance: {
            exportDocument: '/integrated/exportDocuments/',
            uploadDocument: 'document/upload',
            getUniqueId: '/uniqueIdLogic/'
        },
        Attachments: {
            createAttachment: '/solution/formresponse-attachment/create'
        }
    };
}

class DynamicTabPageService {
    uploadService;
    _storeservice;
    isPageDesign = new BehaviorSubject(false);
    observePage = this.isPageDesign.asObservable();
    httpService;
    constructor(uploadService, _storeservice) {
        this.uploadService = uploadService;
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    getActivePage(tabPageId, permission) {
        return this.httpService.get(`${DynamicTabPageConfig.EndPoint.Page.getActivePage.replace('{id}', tabPageId)}${permission ? '?applyPermissions=true' : ''}`);
    }
    getDynamicPage(pageId) {
        return this.httpService.get(`${DynamicTabPageConfig.EndPoint.Page.getPage}/${pageId}`);
    }
    getPageById(pageId) {
        return this.httpService.get(DynamicTabPageConfig.EndPoint.Page.getPageById.replace('{id}', pageId));
    }
    getListBySourceId(sourceId) {
        return this.httpService.get(DynamicTabPageConfig.EndPoint.Narrative.getIncidentListById.replace('{id}', sourceId));
    }
    getResponseByPageId(responseId, pageId) {
        return this.httpService.get(DynamicTabPageConfig.EndPoint.Page.getResponseByPageId
            .replace('{responseId}', responseId)
            .replace('{pageId}', pageId));
    }
    createFormResponse(id, requestData) {
        return this.httpService.post(id
            ? DynamicTabPageConfig.EndPoint.Page.updateFormResponse
            : DynamicTabPageConfig.EndPoint.Page.createFormResponse, requestData);
    }
    createUserSurvey(history, Id) {
        return this.httpService.post(DynamicTabPageConfig.EndPoint.Notification.createSurveyConfig
            .replace('{id}', history?.state?.usersurveyid)
            .replace('{status}', 'Completed')
            .replace('{pagedataid}', Id), {});
    }
    updateFormResponse(id, requestData) {
        return this.httpService.patch(`${DynamicTabPageConfig.EndPoint.Page.patchFormResponse}/${id}`, requestData);
    }
    exportReport(data) {
        return this.httpService.post(DynamicTabPageConfig.EndPoint.Finance.exportDocument, data);
    }
    uploadFile(file) {
        return this.uploadService.upload({
            url: this.httpService.baseUrl + '/' + DynamicTabPageConfig.EndPoint.Finance.uploadDocument,
            headers: new HttpHeaders()
                .set('ctype', 'file')
                .set('uniqueid', '6b61ac1e-221a-495c-957b-ad85f65be25a')
                .set('role', 'role=CP_PUBLIC'),
            files: file,
            process: true
        });
    }
    getUniqueId(api) {
        return this.httpService.get(DynamicTabPageConfig.EndPoint.Finance.getUniqueId + api);
    }
    changePage(page) {
        this.isPageDesign.next(page);
    }
    createFormResponseAttachment(data) {
        return this.httpService.post(DynamicTabPageConfig.EndPoint.Attachments.createAttachment, data);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageService, deps: [{ token: i1.NgxfUploaderService }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.NgxfUploaderService }, { type: DataStoreService }]; } });

class PageHeaderURL {
    static EndPoints = {
        page: {
            getAuthorizedPages: '/platform/page-designer/page/organization/{orgid}?returnUserPage=true&excludeNoActiveVersionPages=true'
        }
    };
}

class PageHeaderService {
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
    getAuthorizedPages(orgid) {
        return this.httpService.get(PageHeaderURL.EndPoints.page.getAuthorizedPages.replace('{orgid}', orgid));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageHeaderService, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageHeaderService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageHeaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

class AuthState {
    user;
}

class AuthStore extends Store {
    _storeservice;
    constructor(_storeservice) {
        super(new AuthState());
        this._storeservice = _storeservice;
    }
    addAuthInfo(user) {
        this.setState({ ...this.state, user });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthStore, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthStore });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthStore, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

const credentialsKey = 'jwt-token';
/**
 * Provides storage for authentication credentials.
 * The Credentials interface should be replaced with proper implementation.
 */
class CredentialsService {
    token = null;
    constructor() {
        const savedCredentials = sessionStorage.getItem(credentialsKey);
        if (savedCredentials) {
            this.token = savedCredentials;
        }
    }
    /**
     * Checks is the user is authenticated.
     * @return True if the user is authenticated.
     */
    isAuthenticated() {
        return !!this.credentials;
    }
    /**
     * Gets the user credentials.
     * @return The user credentials or null if the user is not authenticated.
     */
    get credentials() {
        const savedCredentials = sessionStorage.getItem(credentialsKey);
        if (savedCredentials) {
            this.token = savedCredentials;
        }
        return this.token;
    }
    /**
     * Sets the user credentials.
     * The credentials may be persisted across sessions by setting the `remember` parameter to true.
     * Otherwise, the credentials are only persisted for the current session.
     * @param credentials The user credentials.
     * @param remember True to remember credentials across sessions.
     */
    setCredentials(credentials) {
        this.token = credentials || null;
        if (credentials) {
            sessionStorage.setItem(credentialsKey, credentials);
        }
        else {
            sessionStorage.clear();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CredentialsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CredentialsService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CredentialsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class AuthService {
    _storeservice;
    store;
    _router;
    credentialsService;
    localstore;
    sharedInfo;
    alertService;
    dynamicTabPageService;
    pageHeaderService;
    httpService;
    constructor(injector, _storeservice, store, _router, credentialsService, localstore) {
        this._storeservice = _storeservice;
        this.store = store;
        this._router = _router;
        this.credentialsService = credentialsService;
        this.localstore = localstore;
        this.alertService = injector.get(AlertService);
        this.dynamicTabPageService = injector.get(DynamicTabPageService);
        this.pageHeaderService = injector.get(PageHeaderService);
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    orgInfo = new BehaviorSubject('');
    currentOrgInfo = this.orgInfo.asObservable();
    currentMenu = new BehaviorSubject('');
    currentMenuInfo = this.currentMenu.asObservable();
    feedOrgInfo(data) {
        this.orgInfo.next(data);
    }
    getCurrentMenu(data) {
        this.currentMenu.next(data);
    }
    getUserOrgList() {
        return this.httpService.get(AuthURL.EndPoints.auth.user.orgList);
    }
    getUnNotified() {
        return this.httpService.get(AuthURL.EndPoints.auth.user.notification);
    }
    updateUnNotified(data) {
        return this.httpService.post(AuthURL.EndPoints.auth.user.notification, data);
    }
    updateWorkerAvailability(data) {
        return this.httpService.patch(AuthURL.EndPoints.auth.user.workerAvailability, data);
    }
    getWorkerAvailability() {
        return this.httpService.get(AuthURL.EndPoints.auth.user.getWorkerAvailability);
    }
    getMstrToken() {
        return this.httpService.get(AuthURL.EndPoints.auth.microstrategy.login).pipe(res => {
            return res;
        });
    }
    login(email, password, otp) {
        const body = {
            email: email,
            password: password,
            secret: otp ? otp : ''
        };
        return this.httpService.post(AuthURL.EndPoints.auth.user.login, body).pipe(mergeMap((res) => {
            if (res['data'] === 'MFA_CODE_SEND') {
                return of(res['data']);
            }
            this.credentialsService.setCredentials(res['data'].idToken.jwtToken);
            sessionStorage.setItem('refreshToken', res['data'].refreshToken.token);
            sessionStorage.setItem('email', res['data'].idToken.payload['email']);
            sessionStorage.setItem('id', res['data'].idToken.payload['custom:id']);
            sessionStorage.setItem('username', res['data'].idToken.payload['name']);
            // return this.getUserInfo();
        }));
    }
    refreshToken() {
        const email = sessionStorage.getItem('email');
        const refreshToken = sessionStorage.getItem('refreshToken');
        const body = {
            email,
            refreshToken
        };
        return this.httpService.post(AuthURL.EndPoints.auth.user.refreshToken, body).pipe(mergeMap((res) => {
            this.credentialsService.setCredentials(res['data'].idToken.jwtToken);
            sessionStorage.setItem('refreshToken', res['data'].refreshToken.token);
            sessionStorage.setItem('email', res['data'].idToken.payload['email']);
            sessionStorage.setItem('id', res['data'].idToken.payload['custom:id']);
            sessionStorage.setItem('username', res['data'].idToken.payload['name']);
            console.log('new token generated...', res['data'].idToken.jwtToken);
            return [res['data'].idToken.jwtToken];
        }));
    }
    resetLoggedIn() {
        this.httpService
            .post(AuthURL.EndPoints.auth.user.logout, {
            email: sessionStorage.getItem('email')
        })
            .subscribe(() => {
            console.log('Logged in flag reset successful.');
        });
    }
    logout() {
        this._router.navigate(['/login']);
        sessionStorage.clear();
        localStorage.clear();
    }
    // public getUserInfo(): Observable<[any]> {
    //   return forkJoin([this.httpService.get(AuthURL.EndPoints.auth.user.userInfo)]).pipe(
    //     tap(([user]) => {
    //       this.store.addAuthInfo(user['data']);
    //       return user;
    //     })
    //   );
    // }
    getUserRole(id) {
        return this.httpService.get(AuthURL.EndPoints.auth.user.userRole.replace('{id}', id)).pipe(res => {
            return res;
        });
    }
    routeToDynamicPage(orgid) {
        return this.httpService
            .get(AuthURL.EndPoints.auth.user.routeToDynamicPage.replace('{orgid}', orgid))
            .pipe((res) => {
            return res;
        });
    }
    getAuthMe() {
        return this.httpService.get(AuthURL.EndPoints.auth.user.authMe);
    }
    ResetPassword(data) {
        return this.httpService.post(AuthURL.EndPoints.auth.user.resetPassword, data);
    }
    getRoleKey() {
        const user = this.localstore.getObj('user');
        if (user && user.role) {
            return user.role.rolekey;
        }
    }
    isAdmin() {
        return 'ADM' === this.getRoleKey();
    }
    getOrgID() {
        const user = this.localstore.getObj('user');
        if (user && user.userWorkInfo && user.userWorkInfo.organization && user.userWorkInfo.organization.id) {
            return user.userWorkInfo.organization.id;
        }
        else {
            return '';
        }
    }
    conformMail(data) {
        return this.httpService.post(AuthURL.EndPoints.auth.user.conformMail, data);
    }
    changePassword(data) {
        return this.httpService.post(AuthURL.EndPoints.auth.user.changePassword, data);
    }
    setSharedMessage(data) {
        this.sharedInfo = data;
    }
    getSharedMessage() {
        return this.sharedInfo;
    }
    async checkDynamicPagePermission(pageId) {
        const dynamicPages = await this.getAuthorizedPages();
        if (pageId) {
            this.dynamicTabPageService.getPageById(pageId).subscribe(res => {
                if (dynamicPages.some(page => page.id === res['data'][0].activeVersion.id)) {
                    this._router.navigate([`pages/dynamic-search/search/${res['data'][0].activeVersion.id}`]);
                }
                else {
                    this.alertService.error(`You don't have permissions for ${res['data'][0].activeVersion.pagename} . Please Contact Administrator`);
                }
            });
        }
        else {
            this.alertService.error('You don\'t have permissions to perform the following operations .Please Contact Administrator');
        }
    }
    getCurrentOrg() {
        return this.getUserOrgList()
            .toPromise()
            .then(response => {
            return response['data'][0].id;
        });
    }
    async getAuthorizedPages() {
        const orgId = await this.getCurrentOrg();
        return this.pageHeaderService
            .getAuthorizedPages(orgId)
            .toPromise()
            .then(response => {
            const dynamicPage = response['data'].filter(page => {
                return (page.activeVersion &&
                    (page.activeVersion.gridconfig || page.activeVersion.templatejson || this.getCustomPage(page)));
            });
            return dynamicPage.map(page => ({
                id: page.activeVersion.id,
                name: page.activeVersion.pagename,
                activeVersion: page.activeVersion
            }));
        }, _error => this.alertService.error(AppConstants.errorMessage));
    }
    getCustomPage(page) {
        if (page.activeVersion.tabconfig) {
            const routingTab = JSON.parse(page.activeVersion.tabconfig).filter(x => x.type === 'ROUTING');
            return routingTab.length && page;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, deps: [{ token: i0.Injector }, { token: DataStoreService }, { token: AuthStore }, { token: i2.Router }, { token: CredentialsService }, { token: LocalService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: DataStoreService }, { type: AuthStore }, { type: i2.Router }, { type: CredentialsService }, { type: LocalService }]; } });

class PermissionDirective {
    renderer;
    elementRef;
    dataStore;
    fieldKey;
    constructor(renderer, elementRef, dataStore) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.dataStore = dataStore;
    }
    ngAfterViewInit() {
        const permissions = this.dataStore.state;
        if (permissions && !permissions[this.fieldKey]) {
            const template = this.elementRef.nativeElement;
            if (template.tagName === 'A') {
                if (template) {
                    const r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                    r.innerHTML = template.innerHTML;
                    r.href = 'javascript:void(0);';
                    r['disabled'] = true;
                    r.className = template.className;
                    this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                }
            }
            else if (template.tagName === 'P-MULTISELECT' ||
                template.tagName === 'P-DROPDOWN' ||
                template.tagName === 'P-CHECKBOX' ||
                template.tagName === 'P-TREESELECT' ||
                template.tagName === 'P-RADIOBUTTON' ||
                template.tagName === 'P-CALENDAR') {
                if (template) {
                    const r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                    r.innerHTML = template.innerHTML;
                    r.className = template.className;
                    r.className += ' p-disabled';
                    this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                }
            }
            else {
                this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', 'true');
                const childInputNodes = this.elementRef.nativeElement.querySelectorAll('input, select, textarea, button, a, ng-select, div, lable');
                childInputNodes.forEach((elem) => {
                    this.renderer.setAttribute(elem, 'disabled', 'true');
                });
            }
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: PermissionStore }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: PermissionDirective, selector: "[fieldKey]", inputs: { fieldKey: "fieldKey" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fieldKey]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: PermissionStore }]; }, propDecorators: { fieldKey: [{
                type: Input
            }] } });

class ShowFieldDirective {
    templateRef;
    viewContainer;
    dataStore;
    showField;
    constructor(templateRef, viewContainer, dataStore) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.dataStore = dataStore;
    }
    ngOnInit() {
        const permissions = this.dataStore.state;
        if (!permissions || !permissions[this.showField]) {
            this.viewContainer.clear();
        }
        else {
            this.viewContainer.createEmbeddedView(this.templateRef);
            const lookupIds = sessionStorage.getItem('LOOKUP_IDS');
            if (lookupIds) {
                const lookupIdArray = lookupIds.split(',');
                Object.entries(permissions)
                    .filter(item => item[0].startsWith('GALKP_'))
                    .forEach(([key, value]) => {
                    for (const _value of value) {
                        const _key = key.replace('GALKP_', '');
                        if (_key === this.showField &&
                            lookupIdArray.includes(String(_value['lookupid'])) &&
                            _value['action'] === 'H') {
                            this.viewContainer.clear();
                        }
                    }
                });
            }
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ShowFieldDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: PermissionStore }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: ShowFieldDirective, selector: "[showField]", inputs: { showField: "showField" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ShowFieldDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[showField]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: PermissionStore }]; }, propDecorators: { showField: [{
                type: Input
            }] } });

class RibbonDesignPageComponent {
    router;
    route;
    alert;
    dialog;
    location;
    localstore;
    pageAccessService;
    authService;
    fb;
    _storeservice;
    formData;
    form;
    isValidFormDetails;
    id = '';
    updatedfrom;
    options;
    changedFormData;
    assetList;
    allFields = [];
    logedInUser;
    isEditPage = false;
    isViewPage = false;
    selectedPage;
    pageBuilderAddService;
    localstorage;
    basicPageInformation;
    pageBuilderService;
    orgSubs;
    positionList;
    orgId;
    pageData = [];
    pagesList = [];
    selectedLinkPage;
    selectedPosition;
    configForm;
    RBACORG;
    constructor(injector, router, route, alert, dialog, location, localstore, pageAccessService, authService, fb, _storeservice) {
        this.router = router;
        this.route = route;
        this.alert = alert;
        this.dialog = dialog;
        this.location = location;
        this.localstore = localstore;
        this.pageAccessService = pageAccessService;
        this.authService = authService;
        this.fb = fb;
        this._storeservice = _storeservice;
        this.pageBuilderAddService = injector.get(PageBuilderAddService);
        this.pageBuilderService = injector.get(PageBuilderService$1);
        this.localstorage = injector.get(LocalService);
        this.pageBuilderAddService.currentPageType.subscribe(page => (this.selectedPage = page));
        this.orgSubs = this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.RBACORG = res['RBACORG'];
                this.orgId = parseInt(this.RBACORG['orgID']);
                if (this.orgId) {
                    this.setPagesList();
                }
            }
        });
        this.positionList = [
            { value: 'top1', label: 'Header 1' },
            { value: 'top2', label: 'Header 2' },
            { value: 'top3', label: 'Header 3' },
            { value: 'top4', label: 'Header 4' },
        ];
    }
    ngOnInit() {
        this.initialiseConfigForm();
        if (this.route.snapshot.routeConfig.path.indexOf('view') > -1) {
            this.isViewPage = true;
        }
        this.formData = this.localstore.getObj('dynamic-ribbon');
        if (this.formData) {
            this.form =
                typeof this.formData.tableschemaconfig === 'string'
                    ? JSON.parse(this.formData.tableschemaconfig)
                    : this.formData.tableschemaconfig;
        }
        this.id = this.route.parent.snapshot.paramMap.get('id');
        this.isEditPage = !!this.id;
        this.getCurrentFormData();
        this.getCurrentBasicData();
    }
    initialiseConfigForm() {
        this.configForm = this.fb.group({
            configData: this.fb.array([this.ribbonConfigGroup()])
        });
    }
    ribbonConfigGroup() {
        this.configForm = this.fb.group({
            label: [''],
            field: [''],
            link: [''],
            place: [''],
            datatype: ['']
        });
    }
    get itemsFormArray() {
        return this.configForm.get('configData');
    }
    getCurrentFormData() {
        this.pageBuilderAddService.currentFormData.subscribe((data) => {
            const setConfig = data;
            const formTest = typeof setConfig.tableschemaconfig === 'string'
                ? JSON.parse(setConfig.tableschemaconfig)
                : setConfig.tableschemaconfig;
            formTest['ribbonconfig'] = formTest.fieldmapping.map((f, i) => {
                return {
                    field: f.field,
                    label: f.label,
                    place: i < 4 ? 'Header' : '',
                    link: '',
                    datatype: f.datatype,
                    disabled: i >= 4 ? true : false
                };
            });
            console.log(formTest, 'formTest');
            this.form = formTest;
            const ribbonConfig = formTest.fieldmapping.map((f, i) => {
                return {
                    field: f.field,
                    label: f.label,
                    place: i < 4 ? 'Header' : '',
                    link: '',
                    datatype: f.datatype,
                    disabled: i >= 4 ? true : false
                };
            });
            this.formData = setConfig;
            if (!this.formData?.ribbonconfig) {
                setConfig['ribbonconfig'] = JSON.stringify(ribbonConfig);
                this.formData = setConfig;
            }
        });
        const configData = typeof this.formData?.ribbonconfig === 'string' ? JSON.parse(this.formData?.ribbonconfig) : this.formData?.ribbonconfig;
        this.configForm.reset();
        const items = this.configForm.get('configData');
        items.controls = [];
        configData && configData.forEach(element => {
            items.push(this.fb.group(element));
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
    resetForm = () => {
        this.router.navigate([this.isEditPage ? '../../../list' : '../../list'], { relativeTo: this.route });
    };
    goToDetailPage() {
        this.router.navigate(['../grid-field'], { relativeTo: this.route });
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
        if (this.id) {
            formDetails.id = this.id;
        }
        return formDetails;
    }
    goBack() {
        this.localstore.removeItem('titletab');
        this.localstore.removeItem('editValue');
        this.localstore.removeItem('target-tab-filter');
        this.location.back();
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
    selectPage(data, e) {
        console.log(data, e.value);
        const setLinkPage = JSON.parse(this.formData.ribbonconfig);
        setLinkPage.map((r) => {
            if (r.field === data.value.field) {
                r['link'] = e.value;
            }
        });
        this.formData['ribbonconfig'] = JSON.stringify(setLinkPage);
    }
    selectPosition(data, e) {
        console.log(data, e.value);
        if (e.target.value) {
            // this.positionList.forEach(p => { if (p.value === e.value) p['disabled'] = true; });
            const setLinkPage = JSON.parse(this.formData.ribbonconfig);
            setLinkPage.forEach(r => { if (r.field === data.value.field)
                r['place'] = e.target.value; });
            this.formData['ribbonconfig'] = JSON.stringify(setLinkPage);
        }
        else {
            this.positionList.forEach(p => p['disabled'] = false);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RibbonDesignPageComponent, deps: [{ token: i0.Injector }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: AlertService }, { token: i4.MatDialog }, { token: i4$1.Location }, { token: LocalService }, { token: PageAccessService }, { token: AuthService }, { token: i1$1.UntypedFormBuilder }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: RibbonDesignPageComponent, selector: "app-page-ribbon-design", ngImport: i0, template: "<div class=\"page-design-basic-info\">\r\n  <p-card styleClass=\"rbac-card w-100 mb-2\">\r\n    <div class=\"d-flex justify-content-between align-items-center col-12 my-3\">\r\n      <h6 class=\"font-weight-bold mb-0 fromTitle\">Ribbon Design Page</h6>\r\n      <button type=\"button\" class=\"btn btn-cancel\" (click)=\"goBack()\" *ngIf=\"isViewPage\">Back</button>\r\n    </div>\r\n    <div class=\"row mt-2\" [formGroup]=\"configForm\">\r\n      <div class=\"card left-menu-card col-lg-12 col-md-12 col-12\">\r\n        <!-- <ul class=\"nav flex-column border shadow\" id=\"myTab\" role=\"tablist\">\r\n          <ng-container *ngFor=\"let field of form?.fieldmapping\">\r\n            <li\r\n              class=\"nav-item-btn nav-item border-bottom p-3 youth-image text-center\"\r\n              *ngIf=\"field.field.indexOf('_pic') !== -1\">\r\n              <img src=\"../../../../../../assets/images/user-empty.png\" width=\"64\" alt=\"youth image\" />\r\n            </li>\r\n          </ng-container>\r\n          <ng-container *ngFor=\"let field of form?.fieldmapping\">\r\n            <li\r\n              class=\"nav-item-btn nav-item border-bottom p-3 youth-image text-center\"\r\n              *ngIf=\"field.field.indexOf('_pic') === -1\">\r\n              <p class=\"mb-0\">{{ field.label }}</p>\r\n            </li>\r\n          </ng-container>\r\n        </ul> -->\r\n        <p-card styleClass=\"rbac-card w-100 mb-3\">\r\n          <table aria-describedby=\"configTable\" class=\"table table-bordered configTable\">\r\n            <thead>\r\n              <tr>\r\n                <!-- <th scope=\"col\" class=\"py-2\">Field Name</th> -->\r\n                <th scope=\"col\" class=\"py-2\">Field Name</th>\r\n                <th scope=\"col\" class=\"py-2\">Link</th>\r\n                <th scope=\"col\" class=\"py-2\">Render Position</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody formArrayName=\"configData\" *ngFor=\"let field of itemsFormArray.controls; let i = index\">\r\n              <tr [formGroupName]=\"i\">\r\n                <!-- *ngIf=\"field.field.indexOf('_pic') === -1\"  -->\r\n                <ng-container>\r\n                  <td>\r\n                    <input\r\n                      id=\"businessname1\"\r\n                      class=\"w-100\"\r\n                      type=\"text\"\r\n                      placeholder=\"Enter Business Name\"\r\n                      formControlName=\"field\"\r\n                      value=\"{{ field.label }}\"\r\n                      readonly\r\n                      pInputText />\r\n                  </td>\r\n                  <td>\r\n                    <p-dropdown\r\n                      [filter]=\"true\"\r\n                      [options]=\"pagesList\"\r\n                      styleClass=\"w-100\"\r\n                      placeholder=\"Enter API/Link\"\r\n                      fieldKey=\"PAG_DES_GRID_CONFIG_ENTER_LINK\"\r\n                      formControlName=\"link\"\r\n                      optionValue=\"id\"\r\n                      optionLabel=\"pagename\"\r\n                      [showClear]=\"true\"\r\n                      (onChange)=\"selectPage(field, $event)\">\r\n                    </p-dropdown>\r\n                  </td>\r\n                  <td>\r\n                    <input\r\n                      id=\"businessname1\"\r\n                      class=\"w-100\"\r\n                      type=\"text\"\r\n                      formControlName=\"place\"\r\n                      value=\"{{ field.place }}\"\r\n                      [showClear]=\"true\"\r\n                      [attr.disabled]=\"field.disabled\"\r\n                      pInputText\r\n                      (change)=\"selectPosition(field, $event)\"/>\r\n                  </td>\r\n                </ng-container>\r\n                \r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </p-card>\r\n      </div>\r\n      \r\n      <div class=\"col-12 text-right\">\r\n        <button\r\n          class=\"pull-right mb-2 mr-2 btn btn-cancel\"\r\n          *showField=\"'PAG_DES_RIBBON_DES_PAG_CANCEL'\"\r\n          (click)=\"resetForm()\">\r\n          Cancel\r\n        </button>\r\n        <button\r\n          class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\"\r\n          *showField=\"'PAG_DES_RIBBON_DES_PAG_PREVIOUS'\"\r\n          (click)=\"goToDetailPage()\">\r\n          Previous\r\n        </button>\r\n        <button\r\n          class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\"\r\n          *showField=\"'PAG_DES_RIBBON_DES_PAG_PUBLISH'\"\r\n          (click)=\"formSubmit(true)\">\r\n          Publish\r\n        </button>\r\n        <button\r\n          class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\"\r\n          *showField=\"'PAG_DES_RIBBON_DES_PAG_SAVE'\"\r\n          (click)=\"formSubmit(false)\">\r\n          Save\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </p-card>\r\n</div>\r\n<router-outlet></router-outlet>\r\n", styles: [":host ::ng-deep form-builder .formio .card,:host ::ng-deep form-builder .formio .p-card{background-color:var(--bg-light);border-color:var(--table-border)}:host ::ng-deep form-builder .formio .card .card-header,:host ::ng-deep form-builder .formio .p-card .card-header{background-color:var(--background-color);border-color:var(--table-border)}:host ::ng-deep form-builder .formio .card .card-header .builder-group-button,:host ::ng-deep form-builder .formio .p-card .card-header .builder-group-button{background-color:var(--background-color);color:var(--text-dark)}:host ::ng-deep .component-btn-group .component-settings-button{color:var(--text-dark)}.jsonviewer{background:var(--background-color)}.jsonviewer .language-json{color:var(--text-dark)}\n"], dependencies: [{ kind: "directive", type: i4$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.RouterOutlet, selector: "router-outlet", inputs: ["name"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }, { kind: "directive", type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i1$1.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { kind: "directive", type: i1$1.FormArrayName, selector: "[formArrayName]", inputs: ["formArrayName"] }, { kind: "directive", type: i7.InputText, selector: "[pInputText]" }, { kind: "component", type: i9.Dropdown, selector: "p-dropdown", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }, { kind: "component", type: i10.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { kind: "directive", type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }, { kind: "directive", type: ShowFieldDirective, selector: "[showField]", inputs: ["showField"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RibbonDesignPageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-page-ribbon-design', template: "<div class=\"page-design-basic-info\">\r\n  <p-card styleClass=\"rbac-card w-100 mb-2\">\r\n    <div class=\"d-flex justify-content-between align-items-center col-12 my-3\">\r\n      <h6 class=\"font-weight-bold mb-0 fromTitle\">Ribbon Design Page</h6>\r\n      <button type=\"button\" class=\"btn btn-cancel\" (click)=\"goBack()\" *ngIf=\"isViewPage\">Back</button>\r\n    </div>\r\n    <div class=\"row mt-2\" [formGroup]=\"configForm\">\r\n      <div class=\"card left-menu-card col-lg-12 col-md-12 col-12\">\r\n        <!-- <ul class=\"nav flex-column border shadow\" id=\"myTab\" role=\"tablist\">\r\n          <ng-container *ngFor=\"let field of form?.fieldmapping\">\r\n            <li\r\n              class=\"nav-item-btn nav-item border-bottom p-3 youth-image text-center\"\r\n              *ngIf=\"field.field.indexOf('_pic') !== -1\">\r\n              <img src=\"../../../../../../assets/images/user-empty.png\" width=\"64\" alt=\"youth image\" />\r\n            </li>\r\n          </ng-container>\r\n          <ng-container *ngFor=\"let field of form?.fieldmapping\">\r\n            <li\r\n              class=\"nav-item-btn nav-item border-bottom p-3 youth-image text-center\"\r\n              *ngIf=\"field.field.indexOf('_pic') === -1\">\r\n              <p class=\"mb-0\">{{ field.label }}</p>\r\n            </li>\r\n          </ng-container>\r\n        </ul> -->\r\n        <p-card styleClass=\"rbac-card w-100 mb-3\">\r\n          <table aria-describedby=\"configTable\" class=\"table table-bordered configTable\">\r\n            <thead>\r\n              <tr>\r\n                <!-- <th scope=\"col\" class=\"py-2\">Field Name</th> -->\r\n                <th scope=\"col\" class=\"py-2\">Field Name</th>\r\n                <th scope=\"col\" class=\"py-2\">Link</th>\r\n                <th scope=\"col\" class=\"py-2\">Render Position</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody formArrayName=\"configData\" *ngFor=\"let field of itemsFormArray.controls; let i = index\">\r\n              <tr [formGroupName]=\"i\">\r\n                <!-- *ngIf=\"field.field.indexOf('_pic') === -1\"  -->\r\n                <ng-container>\r\n                  <td>\r\n                    <input\r\n                      id=\"businessname1\"\r\n                      class=\"w-100\"\r\n                      type=\"text\"\r\n                      placeholder=\"Enter Business Name\"\r\n                      formControlName=\"field\"\r\n                      value=\"{{ field.label }}\"\r\n                      readonly\r\n                      pInputText />\r\n                  </td>\r\n                  <td>\r\n                    <p-dropdown\r\n                      [filter]=\"true\"\r\n                      [options]=\"pagesList\"\r\n                      styleClass=\"w-100\"\r\n                      placeholder=\"Enter API/Link\"\r\n                      fieldKey=\"PAG_DES_GRID_CONFIG_ENTER_LINK\"\r\n                      formControlName=\"link\"\r\n                      optionValue=\"id\"\r\n                      optionLabel=\"pagename\"\r\n                      [showClear]=\"true\"\r\n                      (onChange)=\"selectPage(field, $event)\">\r\n                    </p-dropdown>\r\n                  </td>\r\n                  <td>\r\n                    <input\r\n                      id=\"businessname1\"\r\n                      class=\"w-100\"\r\n                      type=\"text\"\r\n                      formControlName=\"place\"\r\n                      value=\"{{ field.place }}\"\r\n                      [showClear]=\"true\"\r\n                      [attr.disabled]=\"field.disabled\"\r\n                      pInputText\r\n                      (change)=\"selectPosition(field, $event)\"/>\r\n                  </td>\r\n                </ng-container>\r\n                \r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </p-card>\r\n      </div>\r\n      \r\n      <div class=\"col-12 text-right\">\r\n        <button\r\n          class=\"pull-right mb-2 mr-2 btn btn-cancel\"\r\n          *showField=\"'PAG_DES_RIBBON_DES_PAG_CANCEL'\"\r\n          (click)=\"resetForm()\">\r\n          Cancel\r\n        </button>\r\n        <button\r\n          class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\"\r\n          *showField=\"'PAG_DES_RIBBON_DES_PAG_PREVIOUS'\"\r\n          (click)=\"goToDetailPage()\">\r\n          Previous\r\n        </button>\r\n        <button\r\n          class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\"\r\n          *showField=\"'PAG_DES_RIBBON_DES_PAG_PUBLISH'\"\r\n          (click)=\"formSubmit(true)\">\r\n          Publish\r\n        </button>\r\n        <button\r\n          class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\"\r\n          *showField=\"'PAG_DES_RIBBON_DES_PAG_SAVE'\"\r\n          (click)=\"formSubmit(false)\">\r\n          Save\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </p-card>\r\n</div>\r\n<router-outlet></router-outlet>\r\n", styles: [":host ::ng-deep form-builder .formio .card,:host ::ng-deep form-builder .formio .p-card{background-color:var(--bg-light);border-color:var(--table-border)}:host ::ng-deep form-builder .formio .card .card-header,:host ::ng-deep form-builder .formio .p-card .card-header{background-color:var(--background-color);border-color:var(--table-border)}:host ::ng-deep form-builder .formio .card .card-header .builder-group-button,:host ::ng-deep form-builder .formio .p-card .card-header .builder-group-button{background-color:var(--background-color);color:var(--text-dark)}:host ::ng-deep .component-btn-group .component-settings-button{color:var(--text-dark)}.jsonviewer{background:var(--background-color)}.jsonviewer .language-json{color:var(--text-dark)}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: AlertService }, { type: i4.MatDialog }, { type: i4$1.Location }, { type: LocalService }, { type: PageAccessService }, { type: AuthService }, { type: i1$1.UntypedFormBuilder }, { type: DataStoreService }]; } });

class DynamicSearchURL {
    static EndPoints = {
        userConfig: {
            getUserConfig: '/org/user/getUserPreference/PAGE/',
            saveUserConfig: '/org/user/saveUserPreference',
            getStaticGridConfig: '/org/user/getUserPreference/STATIC_GRID/{id}'
        },
        documents: {
            generateExcel: '/document/exportExcel',
            generatePDF: '/document/exportPdf'
        },
        notification: {
            sendMail: 'communication/sendmail'
        },
        report: {
            schedulertrigger: '/schedulerreport/trigger/'
        },
        pageConfig: {
            pageVersion: '/platform/page-designer/pageversion',
            page: '/platform/page-designer/page',
            postApiurl: '/api/pagedata/'
        },
        formResponse: {
            get: '/solution/formresponse/getByPageId/{pageid}',
            delete: '/solution/formresponse/{id}/pageid'
        },
        provider: {
            providerData: '/provider'
        },
        criteria: {
            save: '/solution/dynamicsearchcriteria/save',
            getByPageId: '/solution/dynamicsearchcriteria/list/{pageId}'
        }
    };
}

;
class DynamicsearchService {
    _storeservice;
    port;
    port_communication;
    port_document;
    port_searchinput;
    port_report;
    onChangePageEventData;
    onChangePageEventId;
    onChangePageUserData;
    onChangePersonId;
    onChangeConfigData;
    inputFieldId;
    personTabName;
    personHealthTabName;
    personFinanceTabName;
    clickedId;
    rowData;
    caseNumberAfterApproval;
    isPageDesign = new BehaviorSubject(false);
    observePage = this.isPageDesign.asObservable();
    data = new BehaviorSubject(false);
    sourceId = new BehaviorSubject('');
    sourceIdService = new BehaviorSubject('');
    id = new BehaviorSubject('');
    pageId = new BehaviorSubject('');
    moduleid = new BehaviorSubject('');
    purposeid = new BehaviorSubject('');
    workFlowDesign = new BehaviorSubject(null);
    workFlowStatus = new BehaviorSubject('');
    result = new BehaviorSubject('');
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        console.log("HHTPPService2222", this._storeservice.getData('HTTPSERVICE'));
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
        this.port = 'workflow';
        this.port_communication = 'communication';
        this.port_document = 'document';
        this.port_searchinput = 'searchinput';
        this.port_report = 'report';
    }
    set clickableData(data) {
        this.inputFieldId = data;
    }
    get clickableData() {
        return this.inputFieldId;
    }
    set personTabNameData(data) {
        this.personTabName = data;
    }
    get personTabNameData() {
        return this.personTabName;
    }
    set personHealthTabNameData(data) {
        this.personHealthTabName = data;
    }
    get personHealthTabNameData() {
        return this.personHealthTabName;
    }
    set personFinanceTabNameData(data) {
        this.personFinanceTabName = data;
    }
    get personFinanceTabNameData() {
        return this.personFinanceTabName;
    }
    set clickedIdData(data) {
        this.clickedId = data;
    }
    get clickedIdData() {
        return this.clickedId;
    }
    set caseNumberAfterApprovalData(data) {
        this.caseNumberAfterApproval = data;
    }
    get caseNumberAfterApprovalData() {
        return this.caseNumberAfterApproval;
    }
    set clickedRowData(data) {
        this.rowData = data;
    }
    get clickedRowData() {
        return this.rowData;
    }
    getGridUserPreference(id) {
        return this.httpService.get(DynamicSearchURL.EndPoints.userConfig.getUserConfig + id);
    }
    getStaticGridConfig(id) {
        return this.httpService.get(DynamicSearchURL.EndPoints.userConfig.getStaticGridConfig.replace('{id}', id));
    }
    saveGridUserPreference(data) {
        return this.httpService.post(DynamicSearchURL.EndPoints.userConfig.saveUserConfig, data);
    }
    sendMail(data) {
        return this.httpService.post(DynamicSearchURL.EndPoints.notification.sendMail, data);
    }
    generateDocument(data, typeCheck) {
        const url = typeCheck
            ? DynamicSearchURL.EndPoints.documents.generateExcel
            : DynamicSearchURL.EndPoints.documents.generatePDF;
        return this.httpService.post(url, data);
    }
    exportData(data, link) {
        return this.httpService.post(link, data);
    }
    saveSearchCriteria(data) {
        return this.httpService.post(DynamicSearchURL.EndPoints.pageConfig.postApiurl, data);
    }
    startScheduling(data, url) {
        return this.httpService.post(url, data);
    }
    startSchedulingNoUrl(data, id) {
        return this.httpService.post(DynamicSearchURL.EndPoints.report.schedulertrigger + id, data);
    }
    getTemplate(formId) {
        return this.httpService.get(DynamicSearchURL.EndPoints.pageConfig.pageVersion + '/' + formId + '?applyPermissions=true');
    }
    // Remove Permission For Page-Designer View
    getTemplateView(formId) {
        return this.httpService.get(DynamicSearchURL.EndPoints.pageConfig.pageVersion + '/' + formId + '?applyPermissions=false');
    }
    getPageTabs(pageId) {
        return this.httpService.get(DynamicSearchURL.EndPoints.pageConfig.page + '/' + pageId);
    }
    changePage(page) {
        this.isPageDesign.next(page);
    }
    getFormResponse(pageId) {
        return this.httpService.get(DynamicSearchURL.EndPoints.formResponse.get.replace('{pageid}', pageId)).toPromise();
    }
    getProviderData(providerid) {
        return this.httpService.get(DynamicSearchURL.EndPoints.provider.providerData + '?userid=' + providerid);
    }
    saveCriteriaByPageId(data) {
        return this.httpService.post(DynamicSearchURL.EndPoints.criteria.save, data);
    }
    getCriteriaByPageId(pageId) {
        return this.httpService.get(DynamicSearchURL.EndPoints.criteria.getByPageId.replace('{pageId}', pageId));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicsearchService, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicsearchService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicsearchService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

class GridListService {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class GridListComponent {
    router;
    auth;
    localstorage;
    dataGrid;
    dataList;
    dataSource;
    columns;
    updateGrid;
    totalCount;
    page;
    isShow;
    exportPageName;
    currentPage = new EventEmitter();
    editTableRow = new EventEmitter();
    viewTableRow = new EventEmitter();
    deleteTableRow = new EventEmitter();
    openExternalLink = new EventEmitter();
    openpopupLink = new EventEmitter();
    routeTo = new EventEmitter();
    openPopup = new EventEmitter();
    sortOrder = new EventEmitter();
    filterSearchValue = new EventEmitter();
    filterBuilderPopup = new EventEmitter();
    filterPanel = new EventEmitter();
    multipleFilterValues = new EventEmitter();
    downloadTableRow = new EventEmitter();
    toggleRow = new EventEmitter();
    duplicateRow = new EventEmitter();
    viewVersions = new EventEmitter();
    activateVersion = new EventEmitter();
    activatePage = new EventEmitter();
    deactivatePage = new EventEmitter();
    duplicatePageVersion = new EventEmitter();
    selectedRowsData = new EventEmitter();
    orgList;
    dataField;
    columnHeader;
    popupPosition;
    filterValue;
    customOperations;
    fields;
    customStore;
    tempColumns;
    Organization;
    dUrl;
    rdUrl;
    rUrl;
    user;
    userId;
    tempList;
    showVersions;
    displayMode;
    registrationInfo;
    activepagename;
    url;
    oldUrl;
    constructor(
    // private dialog: MatDialog,
    router, auth, localstorage) {
        this.router = router;
        this.auth = auth;
        this.localstorage = localstorage;
        this.showVersions = false;
        this.loadGWithParam();
        this.user = this.localstorage.getObj('user');
        this.userId = this.localstorage.getItem('id');
        this.rUrl = this.router.url.split('/');
        if (this.rUrl.includes('versions')) {
            this.showVersions = true;
        }
        this.displayMode = 'compact';
    }
    ngOnInit() {
        if (this.isShow === false) {
            this.isShow = false;
        }
        else {
            this.isShow = true;
        }
        this.tempColumns = this.columns;
        if (this.columns && this.columns.gridConfigFormArray) {
            this.columnHeader = this.columns.gridConfigFormArray.map(column => column.header);
            this.columns = this.columns.gridConfigFormArray;
        }
        else {
            this.columnHeader = this.columns.map(column => column.header);
        }
        this.popupPosition = { of: window, at: 'top', my: 'top', offset: { y: 10 } };
        this.filterValue = [];
        this.customOperations = [];
    }
    ngOnChanges() {
        this.loadGWithParam();
    }
    loadGWithParam() {
        this.tempList = this.dataList;
        if (this.tempList) {
            const name = this.tempList.filter((item) => item.isactive == true);
            if (name.length > 0) {
                this.activepagename = name[0].pagename;
            }
        }
        if (!this.auth.isAdmin()) {
            this.loadGrid({ value: !this.Organization ? this.auth.getOrgID() : this.Organization }, false);
        }
        else {
            this.loadGrid({ value: this.Organization ? this.Organization : 'Select-ALL' }, false);
        }
    }
    ngAfterViewInit() {
        this.dataGrid.onOptionChanged.subscribe(e => {
            if (e.name === 'columns' && e.fullName.endsWith('filterValues')) {
                const colIndex = Number(e.fullName
                    .match(/\[\d+\]/)[0]
                    .replace('[', '')
                    .replace(']', ''));
                const values = e.component.columnOption(colIndex, 'filterValues');
                console.log(values);
                this.multipleFilterValues.emit(e);
            }
            // Search
            if (e.name === 'columns' && e.fullName.endsWith('filterValue')) {
                console.log(e);
                this.filterSearchValue.emit(e);
            }
            // filter Builder Popup
            if (e.name === 'filterBuilderPopup') {
                console.log('filterBuilderPopup');
                console.log(e);
                this.filterBuilderPopup.emit(e);
            }
            // filter Panel - enable or disable
            if (e.name === 'filterPanel') {
                console.log(e.value);
                this.filterPanel.emit(e);
            }
            // Sorting
            if (e.name === 'columns' && e.fullName.endsWith('sortOrder')) {
                this.sortOrder.emit(e);
            }
            // Paging
            if (e.name === 'paging') {
                this.currentPage.emit(e.value);
            }
        });
        const REGISTRATION = this.localstorage.getItem('REGISTRATION');
        if (REGISTRATION) {
            this.registrationInfo = JSON.parse(REGISTRATION);
        }
    }
    loadGrid(orgID, load = true) {
        this.Organization = orgID.value;
        if (load) {
            this.currentPage.emit(orgID.value === 'Select-ALL' ? 'all' : orgID.value);
        }
        if (this.tempList && this.tempList.length) {
            this.tempGridList(orgID);
        }
        else {
            this.customStore = this.dataSource;
        }
    }
    tempGridList(orgID) {
        if (orgID && orgID.value) {
            this.splitGridList(orgID);
        }
        if (this.dataList.length === 1 && this.rUrl && this.rUrl[2] === 'view-dashboard') {
            this.dUrl = 'view-dashboard/dashboard';
            this.router.navigateByUrl(`pages/${this.dUrl}/${this.dataList[0]['id']}`);
        }
        // Quick change
        this.customStore = new CustomStore({
            load: _opts => {
                return Promise.resolve(this.dataList);
            },
            totalCount: _opts => {
                return Promise.resolve(this.totalCount);
            }
        });
    }
    splitGridList(orgID) {
        this.dataList = this.tempList.filter(data => data.organizationid);
        this.dataList = this.tempList.filter(data => data.organizationid === orgID.value);
        if (this.tempList && this.tempList.length && this.tempList[0].displayname && this.tempList[0].userworkinfo) {
            this.dataList = this.tempList.filter(data => data.userworkinfo && data.userworkinfo[0] && data.userworkinfo[0].organizationid);
            this.dataList = this.tempList.filter(data => data.userworkinfo && data.userworkinfo[0] && data.userworkinfo[0].organizationid === orgID.value);
        }
        if ('Select-ALL' === orgID.value) {
            this.dataList = this.tempList;
        }
    }
    getRouter(data) {
        this.routeTo.emit(data);
    }
    navigateLink(event) {
        event.stopPropagation(); // Prevent other events
        const target = event.target;
        if (target.tagName === 'A' && target.href) {
            this.url = this.extractUrl(target.outerHTML);
            this.oldUrl = this.extractUrl(target.outerHTML);
            const activeId = this.extractID(this.url);
            const isNumberCheck = Number(activeId);
            this.checkPageId(isNumberCheck, activeId, event);
        }
    }
    async checkPageId(isNumberCheck, activeId, event) {
        if (isNumberCheck) {
            const menus = this.localstorage.getObj('MENU');
            const findMenu = menus.find(item => item.name === 'Pages');
            const isExists = findMenu.submenu.find(item => item.id == isNumberCheck);
            if (isExists) {
                this.url = this.url.replace(activeId, isExists.activeVersion.pageid);
                this.routeFunction(isNumberCheck, activeId, event, 'mainMenuWithId');
            }
            else {
                this.routeFunction(isNumberCheck, activeId, event, 'Pages');
            }
        }
        else {
            this.routeFunction(isNumberCheck, activeId, event, 'mainMenuWithURL');
        }
    }
    routeFunction(isNumberCheck, activeId, event, menuType) {
        const menus = this.localstorage.getObj('MENU');
        const mainMenu = menus.find(item => item.route === this.url);
        const mainMenuWithUrl = menus.forEach(element => {
            if (this.url.endsWith(element.route)) {
                return element;
            }
        });
        // const mainMenuWithUrl = menus.find(item => this.url.endsWith(item.route) ? item : [])
        // const mainMenus = menus.filter(item => item.submenu.length == 0);
        const submenus = menus.filter(item => item.submenu.length > 0);
        if (mainMenuWithUrl) {
            // this.appService.addValue('CurrentPages', mainMenuWithUrl);
            this.auth.getCurrentMenu(menus);
        }
        else if (mainMenu) {
            menus.forEach(element => {
                if (element.name === mainMenu.name) {
                    element.active = true;
                }
                else {
                    element.active = false;
                }
            });
            if (isNumberCheck) {
                // this.appService.addValue('dynamicPages', mainMenu);
                this.auth.getCurrentMenu(menus);
            }
            else {
                // this.appService.addValue('currentPages', mainMenu);
                this.auth.getCurrentMenu(menus);
            }
        }
        else {
            menus.forEach((element, index) => {
                if (element.submenu.length > 0) {
                    element.submenu.forEach((element1, index1) => {
                        if (element1?.route == this.url) {
                            this.setActive(menus, index, index1, isNumberCheck);
                        }
                        else if (element1?.activeVersion?.pageid == activeId) {
                            this.setActive(menus, index, index1, isNumberCheck);
                        }
                        else if (element1?.activeVersion?.id == activeId) {
                            this.setActive(menus, index, index1, isNumberCheck);
                        }
                    });
                }
                //  else if(element.submenu.length > 0 && element.name == 'Pages'){
                //   element.submenu.forEach((element1, index1) => {
                //     if(element1?.activeVersion?.pageid == activeId){
                //       this.setActive(menus, index, index1, isNumberCheck);
                //     }
                //   });
                // }
            });
        }
        this.router.navigateByUrl(this.oldUrl);
        event.preventDefault();
    }
    setActive(menus, menuIndex, submenuIndex, isNumberCheck) {
        menus.map(item => item.active = false);
        menus.forEach(element => {
            element.submenu.map(item => item.active = false);
        });
        if (menuIndex) {
            menus[menuIndex].active = true;
            if (submenuIndex >= 0) {
                menus[menuIndex].submenu[submenuIndex].active = true;
            }
            else {
                menus[menuIndex].active = true;
            }
        }
        else {
            menus[0].active = true;
        }
        // if(isNumberCheck){
        //   this.appService.addValue('dynamicPages', menus[menuIndex]);
        //   this.auth.getCurrentMenu(menus);
        // } else {
        //   this.appService.addValue('currentPages', menus[menuIndex]);
        //   this.auth.getCurrentMenu(menus);
        // }
    }
    extractID(url) {
        const parts = url.split("/");
        const lastIndex = parts.length - 1;
        const lastId = parts[lastIndex];
        return lastId;
    }
    extractUrl(html) {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        const link = doc.querySelector('a');
        return link ? link.getAttribute('href') : '';
    }
    popup(data) {
        this.openPopup.emit(data);
    }
    downloadData(evt) {
        this.downloadTableRow.emit(evt);
    }
    editData(evt) {
        this.editTableRow.emit(evt);
    }
    viewData(evt) {
        this.viewTableRow.emit(evt);
    }
    viewVersion(evt) {
        this.viewVersions.emit(evt);
    }
    activatePageVersion(evt) {
        this.activateVersion.emit(evt);
    }
    activatePages(evt) {
        this.activatePage.emit(evt);
    }
    deactivatePages(evt) {
        this.deactivatePage.emit(evt);
    }
    deleteData(evt) {
        this.deleteTableRow.emit(evt);
    }
    openLink(evt) {
        this.openExternalLink.emit(evt);
    }
    openPopupLink(evt) {
        this.openpopupLink.emit(evt);
    }
    activeUser(evt) {
        this.toggleRow.emit(evt);
    }
    duplicateDate(evt) {
        this.duplicateRow.emit(evt);
    }
    duplicateVersion(evt) {
        this.duplicatePageVersion.emit(evt);
    }
    onCellPrepared(e) {
        if (e.rowType == 'data' && e.data.isactive) {
            if (e.column.dataField === 'version') {
                const element = e.cellElement;
                const livetext = document.createElement('div');
                element.classList.add('live-td');
                livetext.classList.add('live-group');
                livetext.innerHTML = '<div class="live-text">Live</div>';
                element.appendChild(livetext);
            }
            else if (e.column.dataField === 'templatename') {
                this.exportPageName = e.value.includes('_') ? e.value.split('_')[0] : e.value;
            }
        }
    }
    onExporting(e) {
        const pageName = this.localstorage.getObj('FILE EXPORT NAME');
        const currentDate = moment().format('YYYY-MM-DD');
        let fileName;
        if (pageName) {
            fileName = `${pageName} Versions ${currentDate}`;
        }
        else if (this.exportPageName) {
            fileName = `${this.exportPageName}-${currentDate}`;
            if (this.exportPageName === 'version')
                fileName = `${this.exportPageName}-${currentDate}`;
        }
        else {
            fileName = `Dynamic-Pages ${currentDate}`;
        }
        e.component.columnOption('Action', 'visible', false);
        if (e.format === 'pdf') {
            const doc = new jsPDF.jsPDF();
            exportDataGrid({
                jsPDFDocument: doc,
                component: e.component,
                customizeCell: grid => {
                    grid.pdfCell.wordWrapEnabled = true;
                }
            }).then(() => {
                doc.save(`${fileName}.pdf`);
                e.component.columnOption('Action', 'visible', true);
            });
        }
        else if (e.format === 'xlsx') {
            e.fileName = fileName;
            setTimeout(() => {
                e.component.columnOption('Action', 'visible', true);
            }, 500);
        }
    }
    islocked(grid, user) {
        if (grid.lock && user.locked) {
            if (Number(user.lockedby) === Number(this.userId)) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
    getDateFormat(value) {
        if (this.registrationInfo) {
            if (value === 'date') {
                return this.registrationInfo['datetimeformat'].split(' ')[0];
            }
            return this.registrationInfo['datetimeformat'];
        }
        return 'MM/dd/yyyy';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListComponent, deps: [{ token: i2.Router }, { token: AuthService }, { token: LocalService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: GridListComponent, selector: "app-grid-list", inputs: { dataList: "dataList", dataSource: "dataSource", columns: "columns", updateGrid: "updateGrid", totalCount: "totalCount", page: "page", isShow: "isShow", exportPageName: "exportPageName" }, outputs: { currentPage: "currentPage", editTableRow: "editTableRow", viewTableRow: "viewTableRow", deleteTableRow: "deleteTableRow", openExternalLink: "openExternalLink", openpopupLink: "openpopupLink", routeTo: "routeTo", openPopup: "openPopup", sortOrder: "sortOrder", filterSearchValue: "filterSearchValue", filterBuilderPopup: "filterBuilderPopup", filterPanel: "filterPanel", multipleFilterValues: "multipleFilterValues", downloadTableRow: "downloadTableRow", toggleRow: "toggleRow", duplicateRow: "duplicateRow", viewVersions: "viewVersions", activateVersion: "activateVersion", activatePage: "activatePage", deactivatePage: "deactivatePage", duplicatePageVersion: "duplicatePageVersion", selectedRowsData: "selectedRowsData" }, providers: [GridListService], viewQueries: [{ propertyName: "dataGrid", first: true, predicate: DxDataGridComponent, descendants: true }], usesOnChanges: true, ngImport: i0, template: "<dx-data-grid\r\n          id=\"gridContainer\"\r\n          [dataSource]=\"customStore\"\r\n          [allowColumnReordering]=\"true\"\r\n          [allowColumnResizing]=\"true\"\r\n          [columnAutoWidth]=\"true\"\r\n          [columnMinWidth]=\"100\"\r\n          [width]=\"'100%'\"\r\n          [columnResizingMode]=\"'widget'\"\r\n          [showBorders]=\"true\"\r\n          [rowAlternationEnabled]=\"true\"\r\n          [showColumnLines]=\"true\"\r\n          [showRowLines]=\"false\"\r\n          [filterValue]=\"filterValue\"\r\n          (onCellPrepared)=\"onCellPrepared($event)\"\r\n          (onExporting)=\"onExporting($event)\"\r\n          [remoteOperations]=\"{ filtering: true, sorting: true, paging: true }\"\r\n          #dataGrid>\r\n          <dxo-load-panel [enabled]=\"false\"></dxo-load-panel>\r\n          <dxo-export [enabled]=\"true\" [formats]=\"['pdf', 'xlsx']\"></dxo-export>\r\n          <dxo-filter-panel [visible]=\"false\"></dxo-filter-panel>\r\n          <dxo-paging [pageSize]=\"10\"></dxo-paging>\r\n          <dxo-pager\r\n            [visible]=\"true\"\r\n            [allowedPageSizes]=\"[5, 10, 15, 20]\"\r\n            [displayMode]=\"displayMode\"\r\n            [showPageSizeSelector]=\"true\"\r\n            [showInfo]=\"true\"\r\n            [showNavigationButtons]=\"true\"></dxo-pager>\r\n          <!--end pagination-->\r\n          <dxo-filter-builder [customOperations]=\"customOperations\"> </dxo-filter-builder>\r\n          <dxo-filter-builder-popup [position]=\"popupPosition\"> </dxo-filter-builder-popup>\r\n          <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n          <dxo-header-filter [visible]=\"true\"></dxo-header-filter>\r\n          <ng-container *ngFor=\"let column of columns; let i = index\">\r\n            <ng-container *ngIf=\"column.hide !== true\">\r\n              <ng-container *ngIf=\"column.link; else noLink\">\r\n                <dxi-column [dataField]=\"column.columnDef\" [caption]=\"column.header\" [allowFiltering]=\"column.filter\"\r\n                  cellTemplate=\"cellTemplate\"></dxi-column>\r\n              </ng-container>\r\n              <ng-template #noLink>\r\n                <ng-container *ngIf=\"column.icon; else noIcon\">\r\n                  <dxi-column [dataField]=\"column.columnDef\" [caption]=\"column.header\" [allowFiltering]=\"column.filter\"\r\n                    cellTemplate=\"iconTemplate\"></dxi-column>\r\n                </ng-container>\r\n              </ng-template>\r\n              <ng-template #noIcon>\r\n                <ng-container *ngIf=\"column.dateFormat; else noDate\">\r\n                  <dxi-column *ngIf=\"column.dateFormat === 'date' || column.dateFormat === 'datetime'\"\r\n                    [dataField]=\"column.columnDef\" [caption]=\"column.header\" [allowFiltering]=\"column.filter\"\r\n                    dataType=\"datetime\" [format]=\"getDateFormat(column.dateFormat)\">\r\n                  </dxi-column>\r\n                </ng-container>\r\n              </ng-template>\r\n              <ng-template #noDate>\r\n                <dxi-column [dataField]=\"column.columnDef\" [caption]=\"column.header\" [allowFiltering]=\"column.filter\">\r\n                </dxi-column>\r\n              </ng-template>\r\n            </ng-container>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"\r\n              updateGrid &&\r\n              (updateGrid?.externalLink ||\r\n                updateGrid?.openPopup ||\r\n                updateGrid?.edit ||\r\n                updateGrid?.delete ||\r\n                updateGrid?.delete ||\r\n                updateGrid?.download ||\r\n                updateGrid?.activatePage ||\r\n                updateGrid?.deactivatePage)\">\r\n            <dxi-column [width]=\"100\" [allowFiltering]=\"false\" [allowSorting]=\"false\" caption=\"Action\"\r\n              cellTemplate=\"editCellTemplate\"></dxi-column>\r\n            <div class=\"action-icons\" *dxTemplate=\"let d of 'editCellTemplate'\">\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.externalLink\" class=\"no-bg\" matTooltip=\"Open\"\r\n                (click)=\"openLink(d)\">\r\n                <em class=\"fa fa-external-link\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.openPopup\" class=\"no-bg\" matTooltip=\"Open\"\r\n                (click)=\"openPopupLink(d)\">\r\n                <em class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.download\" class=\"no-bg\" matTooltip=\"Download\"\r\n                (click)=\"downloadData(d)\">\r\n                <em class=\"fa fa-download\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.edit && showVersions && !d.data.published\"\r\n                class=\"no-bg mr-2\" matTooltip=\"Edit\" (click)=\"editData(d)\">\r\n                <em class=\"fa fa-pencil\" aria-hidden=\"true\"><span class=\"sr-only\">Edit</span></em>\r\n                <span class=\"sr-only\">View</span>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.editRecord\" class=\"no-bg mr-2\" matTooltip=\"Edit\"\r\n                (click)=\"editData(d)\">\r\n                <em class=\"fa fa-pencil\" aria-hidden=\"true\"><span class=\"sr-only\">Edit</span></em>\r\n                <span class=\"sr-only\">View</span>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.duplicate && !showVersions\" class=\"no-bg mr-2\"\r\n                matTooltip=\"Copy\" (click)=\"duplicateDate(d)\">\r\n                <em class=\"fa fa-copy\" aria-hidden=\"true\" fieldKey=\"PAG_DES_GRID_LIST_COPY\">\r\n                  <span class=\"sr-only\">Copy</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.duplicate && showVersions\" class=\"no-bg mr-2\"\r\n                matTooltip=\"Copy Version\" (click)=\"duplicateVersion(d)\">\r\n                <em class=\"fa fa-copy\" *showField=\"'PAG_DES_GRID_LIST_VERSION'\" aria-hidden=\"true\"><span\r\n                    class=\"sr-only\">Copy Version</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.view && showVersions\" class=\"no-bg mr-2\" matTooltip=\"View\"\r\n                fieldKey=\"PAG_DES_GRID_LIST_VERSION\" (click)=\"viewData(d)\">\r\n                <em class=\"fa fa-eye\" aria-hidden=\"true\"><span class=\"sr-only\">View</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.viewRecord\" class=\"no-bg mr-2\" matTooltip=\"View\"\r\n                (click)=\"viewData(d)\">\r\n                <em class=\"fa fa-eye\" aria-hidden=\"true\"><span class=\"sr-only\">View</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.emailview && showVersions\" class=\"no-bg mr-2\"\r\n                matTooltip=\"Preview\" (click)=\"viewData(d)\">\r\n                <em class=\"fa fa-eye\" aria-hidden=\"true\"><span class=\"sr-only\">View</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" title=\"view\"\r\n                *ngIf=\"updateGrid?.version && !showVersions && islocked(updateGrid, d.data)\" class=\"no-bg\"\r\n                matTooltip=\"Versions\" (click)=\"viewVersion(d)\">\r\n                <em class=\"fa fa-code-fork\" title=\"View\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"!d.data.isEnable && updateGrid?.activatePage\" class=\"no-bg ml-2\"\r\n                matTooltip=\"Activate\" (click)=\"activatePages(d)\">\r\n                <span class=\"material-symbols-outlined activate\">check</span>\r\n              </a>\r\n\r\n              <a href=\"javascript:void(0)\" *ngIf=\"d.data.isEnable && updateGrid?.deactivatePage\" class=\"no-bg ml-2\"\r\n                matTooltip=\"Deactivate\" (click)=\"deactivatePages(d)\">\r\n                <span class=\"material-symbols-outlined deactivate\">close</span>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"showVersions && !d.data.isactive && d.data.published\"\r\n                class=\"no-bg mr-2\" matTooltip=\"Activate\" (click)=\"activatePageVersion(d)\">\r\n                <em class=\"fa fa-check-circle-o\" *showField=\"'PAG_DES_GRID_LIST_ACTIVATE'\" aria-hidden=\"true\"><span\r\n                    class=\"sr-only\">Activate</span></em>\r\n                <span class=\"sr-only\">View</span>\r\n              </a>\r\n              <span *ngIf=\"showVersions && !d.data.isactive && !d.data.published\" class=\"no-bg mr-2\"\r\n                matTooltip=\"This version is not published\">\r\n                <em class=\"fa fa-exclamation-triangle text-warning\" aria-hidden=\"true\"><span class=\"sr-only\">This\r\n                    version is not published</span></em>\r\n                <span class=\"sr-only\">View</span>\r\n              </span>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.lock && d.data.locked\" (click)=\"check(updateGrid, d)\"\r\n                class=\"no-bg ml-2\" matTooltip=\"Locked By - {{ d?.data?.lockedbyUser?.firstname }}\">\r\n                <em *ngIf=\"updateGrid?.lock && d.data.locked\" class=\"fa fa-lock\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.delete\" class=\"no-bg\" matTooltip=\"Delete\"\r\n                (click)=\"deleteData(d)\">\r\n                <em class=\"fa fa-trash\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.toggle\" class=\"no-bg\"\r\n                [matTooltip]=\"d.data.isactive === true ? 'Deactivate' : 'Activate'\" (click)=\"activeUser(d)\">\r\n                <em *ngIf=\"updateGrid?.toggle && d.data.isactive === true\" class=\"fa fa-toggle-on\"></em>\r\n                <em *ngIf=\"updateGrid?.toggle && d.data.isactive === false\" class=\"fa fa-toggle-off\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.activeordeactive\" class=\"no-bg\" (click)=\"deleteData(d)\">\r\n                <em *ngIf=\"updateGrid?.activeordeactive && d.data.activeflag === 1\" class=\"fa fa-toggle-on\"></em>\r\n                <em *ngIf=\"updateGrid?.activeordeactive && d.data.activeflag === 0\" class=\"fa fa-toggle-off\"></em>\r\n              </a>\r\n            </div>\r\n          </ng-container>\r\n\r\n          <div *dxTemplate=\"let d of 'cellTemplate'\">\r\n            <a href=\"javascript:void(0)\" *ngIf=\"d.value && d.value !== 'null'\" (click)=\"getRouter(d)\">{{\r\n              d.value !== 'null' ? d.value : ''\r\n              }}</a>\r\n          </div>\r\n          <!-- <ng-container *ngIf=\"updateGrid.linkVisible\">\r\n            <div *dxTemplate=\"let d of 'cellTemplate'\"  (click)=\"navigateLink($event)\">\r\n              <a *ngIf=\"d.value && d.value !== 'null'\" [innerHTML]=\"d.value | safeHtml\">{{\r\n                d.value !== 'null' ? d.value : ''\r\n              }}</a>\r\n            </div>\r\n          </ng-container> -->\r\n          <div *dxTemplate=\"let d of 'iconTemplate'\">\r\n            <em class=\"fa fa-book\" (click)=\"popup(d.value)\"></em>\r\n          </div>\r\n        </dx-data-grid>", styles: [":root{--background-color: #f8f8f8;--navigation: #fff;--primary: #0D3178;--checkbox-border: #D6D5D5;--text-dark: #000;--label-text: #0D3178;--hover-text: #fff;--bg-light: #fff;--forms: #fff;--nav-text: #696969;--light-gray: #696969;--material-icons: #0D3178;--highlight-list: #e3f2fd;--table-header: #f9f9f9;--table-odd: #f7f7f7;--table-border: #ddd;--table-hover: #dbf6ff;--table-odd-color: #f2fcff;--btn: #0D3178;--menu-panel: #032361;--menu-level2: #28447E;--border-trans: transparent;--btn-hover: #1258A7;--btn-dark: #0D3178;--dropdown-list: #fff;--btncancel: #0D3178;--primary-light: #1258A7;--primary-dark: #0D3178;--light-d-light: #fff;--ldl-text: #fff;--light-d-accent: #fff;--header-bg: #f7f7f7;--secondary-color: #0D3178;--menu-link: #1258A7;--menu-highlight: #0084d1;--sumbmenu-selected: #0084D1;--profile-bg: #f3f9f9;--disabled: #7A8EB5;--accordion-header: #F5F5F5;--input-label: #1F1F1F;--input-field: #4C4C4C;--ghost: #A2A2A2;--table-label: #f1f1f1;--error-msg: #DC0404;--menu-hover: #1258A7;--var-icon-font: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;--rocket-icon: \"/assets/images/rocket-ship.svg\";--base-font-size: 16px;--font-11: 11px;--font-12: 12px;--font-13: 13px;--font-14: 14px;--font-15: 15px;--font-16: 16px;--font-17: 17px;--font-18: 18px;--font-19: 19px;--font-20: 20px;--font-21: 21px;--font-24: 24px;--font-26: 26px}.split-page{outline:3px;margin:5px}.searchlist{min-width:620px!important;height:280px!important}.searchlist table,.searchlist table tr th,.searchlist table tr td{padding:0}.dx-datagrid .dx-data-row>td.bullet{padding-top:0;padding-bottom:0}.dx-datagrid .dx-row>tr>td{padding:0!important}.dx-datagrid .dx-row>td{padding:1px 5px!important;vertical-align:middle!important;text-align:center!important}.org-title{margin:0;font-size:16px!important;color:var(--primary)}:host ::ng-deep .card .card-body{padding:0 15px}:host ::ng-deep .dx-datagrid .dx-toolbar-after{margin-right:5px;margin-top:5px}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content{padding:5px 6px;border-radius:3px;color:var(--hover-text);background-color:var(--btn)}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content .dx-icon-export{color:var(--hover-text)}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content .dx-icon-spindown{color:var(--hover-text)}.action-icons .activate,.action-icons .deactivate{font-size:20px;line-height:normal;position:relative;top:5px;border-radius:30px;width:12px;display:inline-flex;align-items:center;justify-content:center;height:12px;font-weight:400}.landing-title{color:var(--nav-text);font-weight:700;font-size:var(--font-14);position:absolute;left:15px;z-index:99;top:12px;margin:0}\n"], dependencies: [{ kind: "directive", type: i4$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i5.DxDataGridComponent, selector: "dx-data-grid", inputs: ["accessKey", "activeStateEnabled", "allowColumnReordering", "allowColumnResizing", "autoNavigateToFocusedRow", "cacheEnabled", "cellHintEnabled", "columnAutoWidth", "columnChooser", "columnFixing", "columnHidingEnabled", "columnMinWidth", "columnResizingMode", "columns", "columnWidth", "customizeColumns", "dataRowTemplate", "dataSource", "dateSerializationFormat", "disabled", "editing", "elementAttr", "errorRowEnabled", "export", "filterBuilder", "filterBuilderPopup", "filterPanel", "filterRow", "filterSyncEnabled", "filterValue", "focusedColumnIndex", "focusedRowEnabled", "focusedRowIndex", "focusedRowKey", "grouping", "groupPanel", "headerFilter", "height", "highlightChanges", "hint", "hoverStateEnabled", "keyboardNavigation", "keyExpr", "loadPanel", "masterDetail", "noDataText", "pager", "paging", "remoteOperations", "renderAsync", "repaintChangesOnly", "rowAlternationEnabled", "rowDragging", "rowTemplate", "rtlEnabled", "scrolling", "searchPanel", "selectedRowKeys", "selection", "selectionFilter", "showBorders", "showColumnHeaders", "showColumnLines", "showRowLines", "sortByGroupSummaryInfo", "sorting", "stateStoring", "summary", "syncLookupFilterValues", "tabIndex", "toolbar", "twoWayBindingEnabled", "visible", "width", "wordWrapEnabled"], outputs: ["onAdaptiveDetailRowPreparing", "onCellClick", "onCellDblClick", "onCellHoverChanged", "onCellPrepared", "onContentReady", "onContextMenuPreparing", "onDataErrorOccurred", "onDisposing", "onEditCanceled", "onEditCanceling", "onEditingStart", "onEditorPrepared", "onEditorPreparing", "onExporting", "onFocusedCellChanged", "onFocusedCellChanging", "onFocusedRowChanged", "onFocusedRowChanging", "onInitialized", "onInitNewRow", "onKeyDown", "onOptionChanged", "onRowClick", "onRowCollapsed", "onRowCollapsing", "onRowDblClick", "onRowExpanded", "onRowExpanding", "onRowInserted", "onRowInserting", "onRowPrepared", "onRowRemoved", "onRowRemoving", "onRowUpdated", "onRowUpdating", "onRowValidating", "onSaved", "onSaving", "onSelectionChanged", "onToolbarPreparing", "accessKeyChange", "activeStateEnabledChange", "allowColumnReorderingChange", "allowColumnResizingChange", "autoNavigateToFocusedRowChange", "cacheEnabledChange", "cellHintEnabledChange", "columnAutoWidthChange", "columnChooserChange", "columnFixingChange", "columnHidingEnabledChange", "columnMinWidthChange", "columnResizingModeChange", "columnsChange", "columnWidthChange", "customizeColumnsChange", "dataRowTemplateChange", "dataSourceChange", "dateSerializationFormatChange", "disabledChange", "editingChange", "elementAttrChange", "errorRowEnabledChange", "exportChange", "filterBuilderChange", "filterBuilderPopupChange", "filterPanelChange", "filterRowChange", "filterSyncEnabledChange", "filterValueChange", "focusedColumnIndexChange", "focusedRowEnabledChange", "focusedRowIndexChange", "focusedRowKeyChange", "groupingChange", "groupPanelChange", "headerFilterChange", "heightChange", "highlightChangesChange", "hintChange", "hoverStateEnabledChange", "keyboardNavigationChange", "keyExprChange", "loadPanelChange", "masterDetailChange", "noDataTextChange", "pagerChange", "pagingChange", "remoteOperationsChange", "renderAsyncChange", "repaintChangesOnlyChange", "rowAlternationEnabledChange", "rowDraggingChange", "rowTemplateChange", "rtlEnabledChange", "scrollingChange", "searchPanelChange", "selectedRowKeysChange", "selectionChange", "selectionFilterChange", "showBordersChange", "showColumnHeadersChange", "showColumnLinesChange", "showRowLinesChange", "sortByGroupSummaryInfoChange", "sortingChange", "stateStoringChange", "summaryChange", "syncLookupFilterValuesChange", "tabIndexChange", "toolbarChange", "twoWayBindingEnabledChange", "visibleChange", "widthChange", "wordWrapEnabledChange"] }, { kind: "component", type: i6.DxiColumnComponent, selector: "dxi-column", inputs: ["alignment", "allowEditing", "allowExporting", "allowFiltering", "allowFixing", "allowGrouping", "allowHeaderFiltering", "allowHiding", "allowReordering", "allowResizing", "allowSearch", "allowSorting", "autoExpandGroup", "buttons", "calculateCellValue", "calculateDisplayValue", "calculateFilterExpression", "calculateGroupValue", "calculateSortValue", "caption", "cellTemplate", "columns", "cssClass", "customizeText", "dataField", "dataType", "editCellTemplate", "editorOptions", "encodeHtml", "falseText", "filterOperations", "filterType", "filterValue", "filterValues", "fixed", "fixedPosition", "format", "formItem", "groupCellTemplate", "groupIndex", "headerCellTemplate", "headerFilter", "hidingPriority", "isBand", "lookup", "minWidth", "name", "ownerBand", "renderAsync", "selectedFilterOperation", "setCellValue", "showEditorAlways", "showInColumnChooser", "showWhenGrouped", "sortIndex", "sortingMethod", "sortOrder", "trueText", "type", "validationRules", "visible", "visibleIndex", "width"], outputs: ["filterValueChange", "filterValuesChange", "groupIndexChange", "selectedFilterOperationChange", "sortIndexChange", "sortOrderChange", "visibleChange", "visibleIndexChange"] }, { kind: "component", type: i6.DxoHeaderFilterComponent, selector: "dxo-header-filter", inputs: ["allowSearch", "allowSelectAll", "dataSource", "groupInterval", "height", "search", "searchMode", "width", "searchTimeout", "texts", "visible", "showRelevantValues"] }, { kind: "component", type: i6.DxoExportComponent, selector: "dxo-export", inputs: ["backgroundColor", "enabled", "fileName", "formats", "margin", "printingEnabled", "svgToCanvas", "allowExportSelectedData", "texts"] }, { kind: "component", type: i6.DxoFilterBuilderComponent, selector: "dxo-filter-builder", inputs: ["accessKey", "activeStateEnabled", "allowHierarchicalFields", "customOperations", "disabled", "elementAttr", "fields", "filterOperationDescriptions", "focusStateEnabled", "groupOperationDescriptions", "groupOperations", "height", "hint", "hoverStateEnabled", "maxGroupLevel", "onContentReady", "onDisposing", "onEditorPrepared", "onEditorPreparing", "onInitialized", "onOptionChanged", "onValueChanged", "rtlEnabled", "tabIndex", "value", "visible", "width"], outputs: ["valueChange"] }, { kind: "component", type: i6.DxoFilterBuilderPopupComponent, selector: "dxo-filter-builder-popup", inputs: ["accessKey", "animation", "closeOnOutsideClick", "container", "contentTemplate", "copyRootClassesToWrapper", "deferRendering", "disabled", "dragAndResizeArea", "dragEnabled", "dragOutsideBoundary", "elementAttr", "enableBodyScroll", "focusStateEnabled", "fullScreen", "height", "hideOnOutsideClick", "hideOnParentScroll", "hint", "hoverStateEnabled", "maxHeight", "maxWidth", "minHeight", "minWidth", "onContentReady", "onDisposing", "onHidden", "onHiding", "onInitialized", "onOptionChanged", "onResize", "onResizeEnd", "onResizeStart", "onShowing", "onShown", "onTitleRendered", "position", "resizeEnabled", "restorePosition", "rtlEnabled", "shading", "shadingColor", "showCloseButton", "showTitle", "tabIndex", "title", "titleTemplate", "toolbarItems", "visible", "width", "wrapperAttr"], outputs: ["heightChange", "positionChange", "visibleChange", "widthChange"] }, { kind: "component", type: i6.DxoFilterPanelComponent, selector: "dxo-filter-panel", inputs: ["customizeText", "filterEnabled", "texts", "visible"], outputs: ["filterEnabledChange"] }, { kind: "component", type: i6.DxoFilterRowComponent, selector: "dxo-filter-row", inputs: ["applyFilter", "applyFilterText", "betweenEndText", "betweenStartText", "operationDescriptions", "resetOperationText", "showAllText", "showOperationChooser", "visible"] }, { kind: "component", type: i6.DxoLoadPanelComponent, selector: "dxo-load-panel", inputs: ["enabled", "height", "indicatorSrc", "shading", "shadingColor", "showIndicator", "showPane", "text", "width"] }, { kind: "component", type: i6.DxoPagerComponent, selector: "dxo-pager", inputs: ["allowedPageSizes", "displayMode", "infoText", "label", "showInfo", "showNavigationButtons", "showPageSizeSelector", "visible"] }, { kind: "component", type: i6.DxoPagingComponent, selector: "dxo-paging", inputs: ["enabled", "pageIndex", "pageSize"], outputs: ["pageIndexChange", "pageSizeChange"] }, { kind: "directive", type: i7$1.DxTemplateDirective, selector: "[dxTemplate]", inputs: ["dxTemplateOf"] }, { kind: "directive", type: i8.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }, { kind: "directive", type: ShowFieldDirective, selector: "[showField]", inputs: ["showField"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-grid-list', providers: [GridListService], template: "<dx-data-grid\r\n          id=\"gridContainer\"\r\n          [dataSource]=\"customStore\"\r\n          [allowColumnReordering]=\"true\"\r\n          [allowColumnResizing]=\"true\"\r\n          [columnAutoWidth]=\"true\"\r\n          [columnMinWidth]=\"100\"\r\n          [width]=\"'100%'\"\r\n          [columnResizingMode]=\"'widget'\"\r\n          [showBorders]=\"true\"\r\n          [rowAlternationEnabled]=\"true\"\r\n          [showColumnLines]=\"true\"\r\n          [showRowLines]=\"false\"\r\n          [filterValue]=\"filterValue\"\r\n          (onCellPrepared)=\"onCellPrepared($event)\"\r\n          (onExporting)=\"onExporting($event)\"\r\n          [remoteOperations]=\"{ filtering: true, sorting: true, paging: true }\"\r\n          #dataGrid>\r\n          <dxo-load-panel [enabled]=\"false\"></dxo-load-panel>\r\n          <dxo-export [enabled]=\"true\" [formats]=\"['pdf', 'xlsx']\"></dxo-export>\r\n          <dxo-filter-panel [visible]=\"false\"></dxo-filter-panel>\r\n          <dxo-paging [pageSize]=\"10\"></dxo-paging>\r\n          <dxo-pager\r\n            [visible]=\"true\"\r\n            [allowedPageSizes]=\"[5, 10, 15, 20]\"\r\n            [displayMode]=\"displayMode\"\r\n            [showPageSizeSelector]=\"true\"\r\n            [showInfo]=\"true\"\r\n            [showNavigationButtons]=\"true\"></dxo-pager>\r\n          <!--end pagination-->\r\n          <dxo-filter-builder [customOperations]=\"customOperations\"> </dxo-filter-builder>\r\n          <dxo-filter-builder-popup [position]=\"popupPosition\"> </dxo-filter-builder-popup>\r\n          <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n          <dxo-header-filter [visible]=\"true\"></dxo-header-filter>\r\n          <ng-container *ngFor=\"let column of columns; let i = index\">\r\n            <ng-container *ngIf=\"column.hide !== true\">\r\n              <ng-container *ngIf=\"column.link; else noLink\">\r\n                <dxi-column [dataField]=\"column.columnDef\" [caption]=\"column.header\" [allowFiltering]=\"column.filter\"\r\n                  cellTemplate=\"cellTemplate\"></dxi-column>\r\n              </ng-container>\r\n              <ng-template #noLink>\r\n                <ng-container *ngIf=\"column.icon; else noIcon\">\r\n                  <dxi-column [dataField]=\"column.columnDef\" [caption]=\"column.header\" [allowFiltering]=\"column.filter\"\r\n                    cellTemplate=\"iconTemplate\"></dxi-column>\r\n                </ng-container>\r\n              </ng-template>\r\n              <ng-template #noIcon>\r\n                <ng-container *ngIf=\"column.dateFormat; else noDate\">\r\n                  <dxi-column *ngIf=\"column.dateFormat === 'date' || column.dateFormat === 'datetime'\"\r\n                    [dataField]=\"column.columnDef\" [caption]=\"column.header\" [allowFiltering]=\"column.filter\"\r\n                    dataType=\"datetime\" [format]=\"getDateFormat(column.dateFormat)\">\r\n                  </dxi-column>\r\n                </ng-container>\r\n              </ng-template>\r\n              <ng-template #noDate>\r\n                <dxi-column [dataField]=\"column.columnDef\" [caption]=\"column.header\" [allowFiltering]=\"column.filter\">\r\n                </dxi-column>\r\n              </ng-template>\r\n            </ng-container>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"\r\n              updateGrid &&\r\n              (updateGrid?.externalLink ||\r\n                updateGrid?.openPopup ||\r\n                updateGrid?.edit ||\r\n                updateGrid?.delete ||\r\n                updateGrid?.delete ||\r\n                updateGrid?.download ||\r\n                updateGrid?.activatePage ||\r\n                updateGrid?.deactivatePage)\">\r\n            <dxi-column [width]=\"100\" [allowFiltering]=\"false\" [allowSorting]=\"false\" caption=\"Action\"\r\n              cellTemplate=\"editCellTemplate\"></dxi-column>\r\n            <div class=\"action-icons\" *dxTemplate=\"let d of 'editCellTemplate'\">\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.externalLink\" class=\"no-bg\" matTooltip=\"Open\"\r\n                (click)=\"openLink(d)\">\r\n                <em class=\"fa fa-external-link\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.openPopup\" class=\"no-bg\" matTooltip=\"Open\"\r\n                (click)=\"openPopupLink(d)\">\r\n                <em class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.download\" class=\"no-bg\" matTooltip=\"Download\"\r\n                (click)=\"downloadData(d)\">\r\n                <em class=\"fa fa-download\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.edit && showVersions && !d.data.published\"\r\n                class=\"no-bg mr-2\" matTooltip=\"Edit\" (click)=\"editData(d)\">\r\n                <em class=\"fa fa-pencil\" aria-hidden=\"true\"><span class=\"sr-only\">Edit</span></em>\r\n                <span class=\"sr-only\">View</span>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.editRecord\" class=\"no-bg mr-2\" matTooltip=\"Edit\"\r\n                (click)=\"editData(d)\">\r\n                <em class=\"fa fa-pencil\" aria-hidden=\"true\"><span class=\"sr-only\">Edit</span></em>\r\n                <span class=\"sr-only\">View</span>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.duplicate && !showVersions\" class=\"no-bg mr-2\"\r\n                matTooltip=\"Copy\" (click)=\"duplicateDate(d)\">\r\n                <em class=\"fa fa-copy\" aria-hidden=\"true\" fieldKey=\"PAG_DES_GRID_LIST_COPY\">\r\n                  <span class=\"sr-only\">Copy</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.duplicate && showVersions\" class=\"no-bg mr-2\"\r\n                matTooltip=\"Copy Version\" (click)=\"duplicateVersion(d)\">\r\n                <em class=\"fa fa-copy\" *showField=\"'PAG_DES_GRID_LIST_VERSION'\" aria-hidden=\"true\"><span\r\n                    class=\"sr-only\">Copy Version</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.view && showVersions\" class=\"no-bg mr-2\" matTooltip=\"View\"\r\n                fieldKey=\"PAG_DES_GRID_LIST_VERSION\" (click)=\"viewData(d)\">\r\n                <em class=\"fa fa-eye\" aria-hidden=\"true\"><span class=\"sr-only\">View</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.viewRecord\" class=\"no-bg mr-2\" matTooltip=\"View\"\r\n                (click)=\"viewData(d)\">\r\n                <em class=\"fa fa-eye\" aria-hidden=\"true\"><span class=\"sr-only\">View</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.emailview && showVersions\" class=\"no-bg mr-2\"\r\n                matTooltip=\"Preview\" (click)=\"viewData(d)\">\r\n                <em class=\"fa fa-eye\" aria-hidden=\"true\"><span class=\"sr-only\">View</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" title=\"view\"\r\n                *ngIf=\"updateGrid?.version && !showVersions && islocked(updateGrid, d.data)\" class=\"no-bg\"\r\n                matTooltip=\"Versions\" (click)=\"viewVersion(d)\">\r\n                <em class=\"fa fa-code-fork\" title=\"View\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"!d.data.isEnable && updateGrid?.activatePage\" class=\"no-bg ml-2\"\r\n                matTooltip=\"Activate\" (click)=\"activatePages(d)\">\r\n                <span class=\"material-symbols-outlined activate\">check</span>\r\n              </a>\r\n\r\n              <a href=\"javascript:void(0)\" *ngIf=\"d.data.isEnable && updateGrid?.deactivatePage\" class=\"no-bg ml-2\"\r\n                matTooltip=\"Deactivate\" (click)=\"deactivatePages(d)\">\r\n                <span class=\"material-symbols-outlined deactivate\">close</span>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"showVersions && !d.data.isactive && d.data.published\"\r\n                class=\"no-bg mr-2\" matTooltip=\"Activate\" (click)=\"activatePageVersion(d)\">\r\n                <em class=\"fa fa-check-circle-o\" *showField=\"'PAG_DES_GRID_LIST_ACTIVATE'\" aria-hidden=\"true\"><span\r\n                    class=\"sr-only\">Activate</span></em>\r\n                <span class=\"sr-only\">View</span>\r\n              </a>\r\n              <span *ngIf=\"showVersions && !d.data.isactive && !d.data.published\" class=\"no-bg mr-2\"\r\n                matTooltip=\"This version is not published\">\r\n                <em class=\"fa fa-exclamation-triangle text-warning\" aria-hidden=\"true\"><span class=\"sr-only\">This\r\n                    version is not published</span></em>\r\n                <span class=\"sr-only\">View</span>\r\n              </span>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.lock && d.data.locked\" (click)=\"check(updateGrid, d)\"\r\n                class=\"no-bg ml-2\" matTooltip=\"Locked By - {{ d?.data?.lockedbyUser?.firstname }}\">\r\n                <em *ngIf=\"updateGrid?.lock && d.data.locked\" class=\"fa fa-lock\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.delete\" class=\"no-bg\" matTooltip=\"Delete\"\r\n                (click)=\"deleteData(d)\">\r\n                <em class=\"fa fa-trash\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.toggle\" class=\"no-bg\"\r\n                [matTooltip]=\"d.data.isactive === true ? 'Deactivate' : 'Activate'\" (click)=\"activeUser(d)\">\r\n                <em *ngIf=\"updateGrid?.toggle && d.data.isactive === true\" class=\"fa fa-toggle-on\"></em>\r\n                <em *ngIf=\"updateGrid?.toggle && d.data.isactive === false\" class=\"fa fa-toggle-off\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.activeordeactive\" class=\"no-bg\" (click)=\"deleteData(d)\">\r\n                <em *ngIf=\"updateGrid?.activeordeactive && d.data.activeflag === 1\" class=\"fa fa-toggle-on\"></em>\r\n                <em *ngIf=\"updateGrid?.activeordeactive && d.data.activeflag === 0\" class=\"fa fa-toggle-off\"></em>\r\n              </a>\r\n            </div>\r\n          </ng-container>\r\n\r\n          <div *dxTemplate=\"let d of 'cellTemplate'\">\r\n            <a href=\"javascript:void(0)\" *ngIf=\"d.value && d.value !== 'null'\" (click)=\"getRouter(d)\">{{\r\n              d.value !== 'null' ? d.value : ''\r\n              }}</a>\r\n          </div>\r\n          <!-- <ng-container *ngIf=\"updateGrid.linkVisible\">\r\n            <div *dxTemplate=\"let d of 'cellTemplate'\"  (click)=\"navigateLink($event)\">\r\n              <a *ngIf=\"d.value && d.value !== 'null'\" [innerHTML]=\"d.value | safeHtml\">{{\r\n                d.value !== 'null' ? d.value : ''\r\n              }}</a>\r\n            </div>\r\n          </ng-container> -->\r\n          <div *dxTemplate=\"let d of 'iconTemplate'\">\r\n            <em class=\"fa fa-book\" (click)=\"popup(d.value)\"></em>\r\n          </div>\r\n        </dx-data-grid>", styles: [":root{--background-color: #f8f8f8;--navigation: #fff;--primary: #0D3178;--checkbox-border: #D6D5D5;--text-dark: #000;--label-text: #0D3178;--hover-text: #fff;--bg-light: #fff;--forms: #fff;--nav-text: #696969;--light-gray: #696969;--material-icons: #0D3178;--highlight-list: #e3f2fd;--table-header: #f9f9f9;--table-odd: #f7f7f7;--table-border: #ddd;--table-hover: #dbf6ff;--table-odd-color: #f2fcff;--btn: #0D3178;--menu-panel: #032361;--menu-level2: #28447E;--border-trans: transparent;--btn-hover: #1258A7;--btn-dark: #0D3178;--dropdown-list: #fff;--btncancel: #0D3178;--primary-light: #1258A7;--primary-dark: #0D3178;--light-d-light: #fff;--ldl-text: #fff;--light-d-accent: #fff;--header-bg: #f7f7f7;--secondary-color: #0D3178;--menu-link: #1258A7;--menu-highlight: #0084d1;--sumbmenu-selected: #0084D1;--profile-bg: #f3f9f9;--disabled: #7A8EB5;--accordion-header: #F5F5F5;--input-label: #1F1F1F;--input-field: #4C4C4C;--ghost: #A2A2A2;--table-label: #f1f1f1;--error-msg: #DC0404;--menu-hover: #1258A7;--var-icon-font: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;--rocket-icon: \"/assets/images/rocket-ship.svg\";--base-font-size: 16px;--font-11: 11px;--font-12: 12px;--font-13: 13px;--font-14: 14px;--font-15: 15px;--font-16: 16px;--font-17: 17px;--font-18: 18px;--font-19: 19px;--font-20: 20px;--font-21: 21px;--font-24: 24px;--font-26: 26px}.split-page{outline:3px;margin:5px}.searchlist{min-width:620px!important;height:280px!important}.searchlist table,.searchlist table tr th,.searchlist table tr td{padding:0}.dx-datagrid .dx-data-row>td.bullet{padding-top:0;padding-bottom:0}.dx-datagrid .dx-row>tr>td{padding:0!important}.dx-datagrid .dx-row>td{padding:1px 5px!important;vertical-align:middle!important;text-align:center!important}.org-title{margin:0;font-size:16px!important;color:var(--primary)}:host ::ng-deep .card .card-body{padding:0 15px}:host ::ng-deep .dx-datagrid .dx-toolbar-after{margin-right:5px;margin-top:5px}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content{padding:5px 6px;border-radius:3px;color:var(--hover-text);background-color:var(--btn)}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content .dx-icon-export{color:var(--hover-text)}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content .dx-icon-spindown{color:var(--hover-text)}.action-icons .activate,.action-icons .deactivate{font-size:20px;line-height:normal;position:relative;top:5px;border-radius:30px;width:12px;display:inline-flex;align-items:center;justify-content:center;height:12px;font-weight:400}.landing-title{color:var(--nav-text);font-weight:700;font-size:var(--font-14);position:absolute;left:15px;z-index:99;top:12px;margin:0}\n"] }]
        }], ctorParameters: function () { return [{ type: i2.Router }, { type: AuthService }, { type: LocalService }]; }, propDecorators: { dataGrid: [{
                type: ViewChild,
                args: [DxDataGridComponent, { static: false }]
            }], dataList: [{
                type: Input
            }], dataSource: [{
                type: Input
            }], columns: [{
                type: Input
            }], updateGrid: [{
                type: Input
            }], totalCount: [{
                type: Input
            }], page: [{
                type: Input
            }], isShow: [{
                type: Input
            }], exportPageName: [{
                type: Input
            }], currentPage: [{
                type: Output
            }], editTableRow: [{
                type: Output
            }], viewTableRow: [{
                type: Output
            }], deleteTableRow: [{
                type: Output
            }], openExternalLink: [{
                type: Output
            }], openpopupLink: [{
                type: Output
            }], routeTo: [{
                type: Output
            }], openPopup: [{
                type: Output
            }], sortOrder: [{
                type: Output
            }], filterSearchValue: [{
                type: Output
            }], filterBuilderPopup: [{
                type: Output
            }], filterPanel: [{
                type: Output
            }], multipleFilterValues: [{
                type: Output
            }], downloadTableRow: [{
                type: Output
            }], toggleRow: [{
                type: Output
            }], duplicateRow: [{
                type: Output
            }], viewVersions: [{
                type: Output
            }], activateVersion: [{
                type: Output
            }], activatePage: [{
                type: Output
            }], deactivatePage: [{
                type: Output
            }], duplicatePageVersion: [{
                type: Output
            }], selectedRowsData: [{
                type: Output
            }] } });

class PageBuilderVersionComponent {
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
        this.pageBuilderService = injector.get(PageBuilderService$1);
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderVersionComponent, deps: [{ token: i0.Injector }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: AuthService }, { token: LocalService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: PageBuilderVersionComponent, selector: "app-page-builder-version", ngImport: i0, template: "<div class=\"page-design\">\r\n  <div class=\"strip_head toggleleft my-2 d-flex justify-content-between\">\r\n    <div class=\"text-left\"></div>\r\n    <div class=\"text-right\">\r\n      <div class=\"btn-group\"></div>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-primary btn-icon my-2\"\r\n        title=\"Back To Previous Page\"\r\n        (click)=\"goToPrevious()\"\r\n        pRipple>\r\n        <em class=\"pi pi-arrow-left font-weight-bold\"></em>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12 mb-4\">\r\n      <p-card styleClass=\"rbac-card gridview w-100\">\r\n        <app-grid-list\r\n          [dataList]=\"pageList\"\r\n          [updateGrid]=\"updateGrid\"\r\n          [columns]=\"tableColumns\"\r\n          [totalCount]=\"totalcount\"\r\n          (editTableRow)=\"editTableRow($event)\"\r\n          (viewTableRow)=\"viewTableRow($event)\"\r\n          (viewVersions)=\"viewVersions($event)\"\r\n          (duplicatePageVersion)=\"duplicatePageVersion($event)\"\r\n          (activateVersion)=\"activateVersion($event)\">\r\n        </app-grid-list>\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n", styles: [":root{--background-color: #f8f8f8;--navigation: #fff;--primary: #0D3178;--checkbox-border: #D6D5D5;--text-dark: #000;--label-text: #0D3178;--hover-text: #fff;--bg-light: #fff;--forms: #fff;--nav-text: #696969;--light-gray: #696969;--material-icons: #0D3178;--highlight-list: #e3f2fd;--table-header: #f9f9f9;--table-odd: #f7f7f7;--table-border: #ddd;--table-hover: #dbf6ff;--table-odd-color: #f2fcff;--btn: #0D3178;--menu-panel: #032361;--menu-level2: #28447E;--border-trans: transparent;--btn-hover: #1258A7;--btn-dark: #0D3178;--dropdown-list: #fff;--btncancel: #0D3178;--primary-light: #1258A7;--primary-dark: #0D3178;--light-d-light: #fff;--ldl-text: #fff;--light-d-accent: #fff;--header-bg: #f7f7f7;--secondary-color: #0D3178;--menu-link: #1258A7;--menu-highlight: #0084d1;--sumbmenu-selected: #0084D1;--profile-bg: #f3f9f9;--disabled: #7A8EB5;--accordion-header: #F5F5F5;--input-label: #1F1F1F;--input-field: #4C4C4C;--ghost: #A2A2A2;--table-label: #f1f1f1;--error-msg: #DC0404;--menu-hover: #1258A7;--var-icon-font: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;--rocket-icon: \"/assets/images/rocket-ship.svg\";--base-font-size: 16px;--font-11: 11px;--font-12: 12px;--font-13: 13px;--font-14: 14px;--font-15: 15px;--font-16: 16px;--font-17: 17px;--font-18: 18px;--font-19: 19px;--font-20: 20px;--font-21: 21px;--font-24: 24px;--font-26: 26px}:host ::ng-deep .page-design .gridview.p-card .card-body,:host ::ng-deep .page-design .gridview.p-card .p-card-body,:host ::ng-deep .page-design .gridview.card .card-body,:host ::ng-deep .page-design .gridview.card .p-card-body{padding-top:0;padding-bottom:0}:host ::ng-deep .page-design .p-card-content{padding:0}:host ::ng-deep .page-design .dropdown-menu,:host ::ng-deep .page-design .p-component{font-size:var(--base-font-size)}:host ::ng-deep .page-design .dropdown-item.active,:host ::ng-deep .page-design .dropdown-item:active{background:transparent;color:#16181b}:host ::ng-deep .page-design .checkbox label{cursor:pointer}:host ::ng-deep .page-design .dropdown-item:focus{background:#431e8d12}:host ::ng-deep .page-design .dropdown-item:hover{background:#431e8d12}:host ::ng-deep .page-design .checkbox label,:host ::ng-deep .page-design .radio label{min-height:inherit}:host ::ng-deep .page-design .filter-menu{padding:8px;border:1px solid #a7a7a7;max-height:180px;overflow-y:auto}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar{width:4px!important;height:4px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-track{background:#f6f6f6!important;border-radius:2px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-corner{background:#f6f6f6!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-thumb{background:#0d3178!important;border-radius:2px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-thumb:hover{background:#0d3178!important}:host ::ng-deep .page-design .p-checkbox{width:16px;height:16px}:host ::ng-deep .page-design .p-checkbox .p-checkbox-box{width:16px;height:16px}:host ::ng-deep .page-design .p-checkbox .p-checkbox-box .p-checkbox-icon{font-size:9px;font-weight:600}\n"], dependencies: [{ kind: "directive", type: i2.RouterOutlet, selector: "router-outlet", inputs: ["name"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }, { kind: "component", type: i10.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { kind: "directive", type: i5$1.Ripple, selector: "[pRipple]" }, { kind: "component", type: GridListComponent, selector: "app-grid-list", inputs: ["dataList", "dataSource", "columns", "updateGrid", "totalCount", "page", "isShow", "exportPageName"], outputs: ["currentPage", "editTableRow", "viewTableRow", "deleteTableRow", "openExternalLink", "openpopupLink", "routeTo", "openPopup", "sortOrder", "filterSearchValue", "filterBuilderPopup", "filterPanel", "multipleFilterValues", "downloadTableRow", "toggleRow", "duplicateRow", "viewVersions", "activateVersion", "activatePage", "deactivatePage", "duplicatePageVersion", "selectedRowsData"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderVersionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-page-builder-version', template: "<div class=\"page-design\">\r\n  <div class=\"strip_head toggleleft my-2 d-flex justify-content-between\">\r\n    <div class=\"text-left\"></div>\r\n    <div class=\"text-right\">\r\n      <div class=\"btn-group\"></div>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-primary btn-icon my-2\"\r\n        title=\"Back To Previous Page\"\r\n        (click)=\"goToPrevious()\"\r\n        pRipple>\r\n        <em class=\"pi pi-arrow-left font-weight-bold\"></em>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12 mb-4\">\r\n      <p-card styleClass=\"rbac-card gridview w-100\">\r\n        <app-grid-list\r\n          [dataList]=\"pageList\"\r\n          [updateGrid]=\"updateGrid\"\r\n          [columns]=\"tableColumns\"\r\n          [totalCount]=\"totalcount\"\r\n          (editTableRow)=\"editTableRow($event)\"\r\n          (viewTableRow)=\"viewTableRow($event)\"\r\n          (viewVersions)=\"viewVersions($event)\"\r\n          (duplicatePageVersion)=\"duplicatePageVersion($event)\"\r\n          (activateVersion)=\"activateVersion($event)\">\r\n        </app-grid-list>\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n", styles: [":root{--background-color: #f8f8f8;--navigation: #fff;--primary: #0D3178;--checkbox-border: #D6D5D5;--text-dark: #000;--label-text: #0D3178;--hover-text: #fff;--bg-light: #fff;--forms: #fff;--nav-text: #696969;--light-gray: #696969;--material-icons: #0D3178;--highlight-list: #e3f2fd;--table-header: #f9f9f9;--table-odd: #f7f7f7;--table-border: #ddd;--table-hover: #dbf6ff;--table-odd-color: #f2fcff;--btn: #0D3178;--menu-panel: #032361;--menu-level2: #28447E;--border-trans: transparent;--btn-hover: #1258A7;--btn-dark: #0D3178;--dropdown-list: #fff;--btncancel: #0D3178;--primary-light: #1258A7;--primary-dark: #0D3178;--light-d-light: #fff;--ldl-text: #fff;--light-d-accent: #fff;--header-bg: #f7f7f7;--secondary-color: #0D3178;--menu-link: #1258A7;--menu-highlight: #0084d1;--sumbmenu-selected: #0084D1;--profile-bg: #f3f9f9;--disabled: #7A8EB5;--accordion-header: #F5F5F5;--input-label: #1F1F1F;--input-field: #4C4C4C;--ghost: #A2A2A2;--table-label: #f1f1f1;--error-msg: #DC0404;--menu-hover: #1258A7;--var-icon-font: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;--rocket-icon: \"/assets/images/rocket-ship.svg\";--base-font-size: 16px;--font-11: 11px;--font-12: 12px;--font-13: 13px;--font-14: 14px;--font-15: 15px;--font-16: 16px;--font-17: 17px;--font-18: 18px;--font-19: 19px;--font-20: 20px;--font-21: 21px;--font-24: 24px;--font-26: 26px}:host ::ng-deep .page-design .gridview.p-card .card-body,:host ::ng-deep .page-design .gridview.p-card .p-card-body,:host ::ng-deep .page-design .gridview.card .card-body,:host ::ng-deep .page-design .gridview.card .p-card-body{padding-top:0;padding-bottom:0}:host ::ng-deep .page-design .p-card-content{padding:0}:host ::ng-deep .page-design .dropdown-menu,:host ::ng-deep .page-design .p-component{font-size:var(--base-font-size)}:host ::ng-deep .page-design .dropdown-item.active,:host ::ng-deep .page-design .dropdown-item:active{background:transparent;color:#16181b}:host ::ng-deep .page-design .checkbox label{cursor:pointer}:host ::ng-deep .page-design .dropdown-item:focus{background:#431e8d12}:host ::ng-deep .page-design .dropdown-item:hover{background:#431e8d12}:host ::ng-deep .page-design .checkbox label,:host ::ng-deep .page-design .radio label{min-height:inherit}:host ::ng-deep .page-design .filter-menu{padding:8px;border:1px solid #a7a7a7;max-height:180px;overflow-y:auto}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar{width:4px!important;height:4px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-track{background:#f6f6f6!important;border-radius:2px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-corner{background:#f6f6f6!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-thumb{background:#0d3178!important;border-radius:2px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-thumb:hover{background:#0d3178!important}:host ::ng-deep .page-design .p-checkbox{width:16px;height:16px}:host ::ng-deep .page-design .p-checkbox .p-checkbox-box{width:16px;height:16px}:host ::ng-deep .page-design .p-checkbox .p-checkbox-box .p-checkbox-icon{font-size:9px;font-weight:600}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: AuthService }, { type: LocalService }]; } });

class FormioService {
    constructor() {
        //not to be empty
    }
    customEvent(event, formIO) {
        if (event.type === 'dateRange') {
            this.dateRangeEvent(event, formIO);
        }
    }
    dateRangeEvent(event, formIO) {
        const dateRange = event?.value?.dateRange;
        if (dateRange) {
            let startDateElement = formIO.formio.getComponent(dateRange.startDateKey);
            if (!startDateElement) {
                console.log('Creating start component...');
                startDateElement = formIO.formio.createComponent({
                    type: 'hidden',
                    value: dateRange.startDate,
                    key: dateRange.startDateKey
                });
            }
            startDateElement.setValue(dateRange.startDate);
            let endDateElement = formIO.formio.getComponent(dateRange.endDateKey);
            if (!endDateElement) {
                console.log('Creating end component...');
                endDateElement = formIO.formio.createComponent({
                    type: 'hidden',
                    value: dateRange.endDate,
                    key: dateRange.endDateKey
                });
            }
            endDateElement.setValue(dateRange.endDate);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormioService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormioService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormioService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class PageBuilderViewURL {
    static EndPoint = {
        page_config: {
            pageVersion: '/platform/page-designer/pageversion',
            page: '/platform/page-designer/page'
        },
        provider: {
            facilityDetails: '/facility'
        }
    };
}

class PageBuilderViewService {
    _storeservice;
    port_workflow;
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this.port_workflow = 'workflow';
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    getPageVersionByid(id) {
        return this.httpService.get(`${PageBuilderViewURL.EndPoint.page_config.pageVersion}/${id}`);
    }
    createPage(data) {
        return this.httpService.post(PageBuilderViewURL.EndPoint.page_config.page, data);
    }
    getFacilityDetails(providerid) {
        return this.httpService.get(PageBuilderViewURL.EndPoint.provider.facilityDetails + '?providerid=' + providerid);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderViewService, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderViewService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderViewService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

class PageBuilderViewComponent {
    route;
    _formIO;
    pageBuilderViewService;
    location;
    localstore;
    formId;
    jsonForm;
    fromTitle;
    id;
    submittedData;
    isformIO = false;
    routingConfig = false;
    appointmentList;
    formIO;
    dynamicTabPageService;
    pageid;
    editValue;
    authService;
    loggedUser;
    facility = [];
    providerData;
    constructor(injector, route, _formIO, pageBuilderViewService, location, localstore) {
        this.route = route;
        this._formIO = _formIO;
        this.pageBuilderViewService = pageBuilderViewService;
        this.location = location;
        this.localstore = localstore;
        this.dynamicTabPageService = injector.get(DynamicTabPageService);
        this.authService = injector.get(AuthService);
        this.loggedUser = this.localstore.getObj('user');
    }
    ngOnInit() {
        this.loggedUser = this.localstore.getObj('user');
        this.formId = this.route.snapshot.paramMap.get('id');
        this.editValue = this.localstore.getObj('editValue');
        this.pageBuilderViewService.getPageVersionByid(this.formId).subscribe((result) => {
            if (result) {
                this.conditionCheckPageBuilder(result);
                if (this.editValue) {
                    this.submittedData = {
                        data: this.editValue
                    };
                    this.submittedData.data['edit'] = true;
                }
                else {
                    this.submittedData = { data: {} };
                }
                this.pageBuilderViewService.getPageVersionByid(this.formId).subscribe((res) => {
                    if (res) {
                        this.id = res?.data.id;
                        this.pageid = res?.data.pageid;
                        this.submittedData = res?.data.submissiondata ? JSON.parse(res?.data.submissiondata) : this.submittedData;
                        setTimeout(() => {
                            this.modifyVideoContent();
                        }, 300);
                    }
                });
            }
            if (result.data.tabconfig) {
                const routingTab = JSON.parse(result.data.tabconfig);
                const routingPage = routingTab.filter(x => x.type === 'ROUTING');
                if (routingPage.length > 0) {
                    if (routingPage[0].pathname === 'CreateSitevisitComponent') {
                        this.routingConfig = true;
                        this.appointmentList = Promise.resolve(true);
                    }
                }
            }
        });
    }
    conditionCheckPageBuilder(result) {
        if (result.data.templatejson) {
            this.isformIO = true;
            this.jsonForm = JSON.parse(result.data.templatejson);
            this.fromTitle = this.jsonForm && this.jsonForm['page'] ? this.jsonForm['page'] : result.data.pagename;
        }
    }
    modifyVideoContent() {
        const videoElements = document.querySelectorAll('.changetoIframe');
        if (videoElements && videoElements.length) {
            videoElements.forEach((element) => {
                const src = element.src;
                const ifrm = document.createElement('iframe');
                ifrm.setAttribute('src', src);
                ifrm.style.width = element.width ? element.width + 'px' : '';
                ifrm.style.height = element.height ? element.height + 'px' : '';
                element.replaceWith(ifrm);
            });
        }
    }
    onSubmit(submission) {
        const submissionData = JSON.parse(JSON.stringify(submission));
        console.log(submissionData, 'fdfasd');
        if (!submissionData?.data?.provider_id) {
            submissionData.data.provider_id = this.localstore.getObj('providerId');
        }
        this.facilityDetails(submissionData?.data?.provider_id, submissionData);
    }
    addAttachment(info) {
        this.dynamicTabPageService.createFormResponseAttachment(info).subscribe(res => console.log(res));
    }
    goBack() {
        this.localstore.removeItem('titletab');
        this.localstore.removeItem('editValue');
        this.localstore.removeItem('target-tab-filter');
        this.location.back();
    }
    customEvent(event) {
        this._formIO.customEvent(event, this.formIO);
    }
    facilityDetails(id, submissionData) {
        const fileUploadData = this.authService.getSharedMessage();
        this.pageBuilderViewService.getFacilityDetails(id).subscribe((result) => {
            if (submissionData?.data?.provider_id != undefined && result.data.length == 0) {
                this.facility = result.data[result.data.length - 1];
                const data = submissionData.data && submissionData.data.data && submissionData.data.data.editGrid
                    ? submissionData.data.data
                    : submissionData.data;
                delete data.ribbonData;
                data.provider_id = id;
                if ((this, this.facility?.id)) {
                    data.facility_id = this.facility?.id;
                    data.facilty_id = this.facility?.id;
                }
                const requestData = {
                    pageid: this.pageid,
                    response: data
                };
                if (this.id && this.submittedData.data.edit) {
                    const id1 = this.submittedData.data.id;
                    this.dynamicTabPageService.updateFormResponse(id1, requestData).subscribe(() => {
                        const fileUploadInfo = Object.assign({ responseid: Number(result['data']['id']) }, fileUploadData);
                        if (fileUploadData?.attachmentdetails) {
                            this.addAttachment(fileUploadInfo);
                        }
                        this.goBack();
                    });
                }
                else {
                    const id2 = null;
                    this.dynamicTabPageService.createFormResponse(id2, requestData).subscribe(res => {
                        const fileUploadInfo = Object.assign({ responseid: Number(res['data']['id']) }, fileUploadData);
                        if (fileUploadData?.attachmentdetails) {
                            this.addAttachment(fileUploadInfo);
                        }
                        this.goBack();
                    });
                }
            }
            else if (submissionData?.data?.provider_id != undefined && result.data.length > 0) {
                this.facility = result.data[result.data.length - 1];
                const data = submissionData.data && submissionData.data.data && submissionData.data.data.editGrid
                    ? submissionData.data.data
                    : submissionData.data;
                delete data.ribbonData;
                data.provider_id = id;
                data.facilty_id = this.facility?.id;
                data.facility_id = this.facility?.id;
                const requestData = {
                    pageid: this.pageid,
                    response: data
                };
                if (this.id && this.submittedData.data.edit) {
                    const id3 = this.submittedData.data.id;
                    this.dynamicTabPageService.updateFormResponse(id3, requestData).subscribe(() => {
                        this.goBack();
                    });
                }
                else {
                    const id4 = null;
                    this.dynamicTabPageService.createFormResponse(id4, requestData).subscribe(_res => {
                        const fileUploadInfo = Object.assign({ responseid: Number(_res['data']['id']) }, fileUploadData);
                        if (fileUploadData?.attachmentdetails) {
                            this.addAttachment(fileUploadInfo);
                        }
                        this.goBack();
                    });
                }
            }
            else {
                const data = submissionData.data && submissionData.data.data && submissionData.data.data.editGrid
                    ? submissionData.data.data
                    : submissionData.data;
                delete data.ribbonData;
                const requestData = {
                    pageid: this.pageid,
                    response: data
                };
                if (this.id && this.submittedData.data.edit) {
                    const id5 = this.submittedData.data.id;
                    this.dynamicTabPageService.updateFormResponse(id5, requestData).subscribe(value => {
                        const fileUploadInfo = Object.assign({ responseid: Number(value['data']['id']) }, fileUploadData);
                        if (fileUploadData?.attachmentdetails) {
                            this.addAttachment(fileUploadInfo);
                        }
                        this.goBack();
                    });
                }
                else {
                    const id6 = null;
                    this.dynamicTabPageService.createFormResponse(id6, requestData).subscribe(_value => {
                        const fileUploadInfo = Object.assign({ responseid: Number(_value['data']['id']) }, fileUploadData);
                        if (fileUploadData?.attachmentdetails) {
                            this.addAttachment(fileUploadInfo);
                        }
                        this.goBack();
                    });
                }
            }
        }, _error => {
            // this is intentional
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderViewComponent, deps: [{ token: i0.Injector }, { token: i2.ActivatedRoute }, { token: FormioService }, { token: PageBuilderViewService }, { token: i4$1.Location }, { token: LocalService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: PageBuilderViewComponent, selector: "app-page-builder-view", viewQueries: [{ propertyName: "formIO", first: true, predicate: ["formIO"], descendants: true }], ngImport: i0, template: "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"d-flex justify-content-between align-items-center col-12 my-3\">\r\n      <h6 class=\"font-weight-bold mb-0 fromTitle\">{{ fromTitle }}</h6>\r\n      <button type=\"button\" class=\"btn btn-cancel\" (click)=\"goBack()\">Back</button>\r\n    </div>\r\n    <div class=\"col-12\" *ngIf=\"isformIO\">\r\n      <formio\r\n        #formIO\r\n        [form]=\"jsonForm\"\r\n        [submission]=\"submittedData\"\r\n        (submit)=\"onSubmit($event)\"\r\n        (customEvent)=\"customEvent($event)\"></formio>\r\n    </div>\r\n    <!-- <div class=\"col-12\" *ngIf=\"appointmentList | async\">\r\n      <app-create-sitevisit></app-create-sitevisit>\r\n    </div> -->\r\n  </div>\r\n</div>\r\n", styles: [".container-fluid{background:#fff}\n"], dependencies: [{ kind: "directive", type: i4$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i7$2.FormioComponent, selector: "formio" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-page-builder-view', template: "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"d-flex justify-content-between align-items-center col-12 my-3\">\r\n      <h6 class=\"font-weight-bold mb-0 fromTitle\">{{ fromTitle }}</h6>\r\n      <button type=\"button\" class=\"btn btn-cancel\" (click)=\"goBack()\">Back</button>\r\n    </div>\r\n    <div class=\"col-12\" *ngIf=\"isformIO\">\r\n      <formio\r\n        #formIO\r\n        [form]=\"jsonForm\"\r\n        [submission]=\"submittedData\"\r\n        (submit)=\"onSubmit($event)\"\r\n        (customEvent)=\"customEvent($event)\"></formio>\r\n    </div>\r\n    <!-- <div class=\"col-12\" *ngIf=\"appointmentList | async\">\r\n      <app-create-sitevisit></app-create-sitevisit>\r\n    </div> -->\r\n  </div>\r\n</div>\r\n", styles: [".container-fluid{background:#fff}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i2.ActivatedRoute }, { type: FormioService }, { type: PageBuilderViewService }, { type: i4$1.Location }, { type: LocalService }]; }, propDecorators: { formIO: [{
                type: ViewChild,
                args: ['formIO']
            }] } });

class PageBuilderURL {
    static EndPoints = {
        workflow: {
            pageByOrganization: '/platform/page-designer/page/organization/{id}',
            LockPageDesigner: '/platform/page-designer/page/{id}/duplicate',
            activatePage: '/platform/page-designer/page/{pageId}/activate',
            deactivatePage: '/platform/page-designer/page/{pageId}/deactivate'
        }
    };
}

class PageBuilderVersionURL {
    static EndPoints = {
        page_config: {
            pageVersion: '/platform/page-designer/pageversion/',
            activateVersion: '/platform/page-designer/pageversion/{id}/activate',
            versionList: '/platform/page-designer/pageversion/page/{id}',
            updateVersion: '/platform/page-designer/pageversion/{id}/update',
            copyVersion: '/platform/page-designer/pageversion/{id}/create'
        }
    };
}

class PageBuilderService {
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
    getAllPageDesigns(id) {
        return this.httpService.get(PageBuilderURL.EndPoints.workflow.pageByOrganization.replace('{id}', id));
    }
    duplicateDesignPage(data, id) {
        return this.httpService.post(PageBuilderURL.EndPoints.workflow.LockPageDesigner.replace('{id}', String(id)), data);
    }
    activatePage(pageId) {
        return this.httpService.patch(PageBuilderURL.EndPoints.workflow.activatePage
            .replace('{pageId}', pageId), {});
    }
    deactivatePage(pageId) {
        return this.httpService.patch(PageBuilderURL.EndPoints.workflow.deactivatePage
            .replace('{pageId}', pageId), {});
    }
    getVersionList(pageId) {
        return this.httpService.get(PageBuilderVersionURL.EndPoints.page_config.versionList.replace('{id}', String(pageId)));
    }
    activateVersion(versionId) {
        return this.httpService.patch(PageBuilderVersionURL.EndPoints.page_config.activateVersion.replace('{id}', String(versionId)));
    }
    updatePageVersion(versionId, formData, createPage) {
        const url = PageBuilderVersionURL.EndPoints.page_config.updateVersion.replace('{id}', String(versionId));
        return this.httpService.patch(createPage ? `${url}?updateActiveVersion=true` : `${url}`, formData);
    }
    copyPageVersion(data, id) {
        return this.httpService.post(PageBuilderVersionURL.EndPoints.page_config.copyVersion.replace('{id}', String(id)), data);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderService, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

const DISPLAY_IN_SECONDS = 8;
class AlertComponent {
    alertService;
    alerts = [];
    constructor(alertService) {
        this.alertService = alertService;
    }
    ngOnInit() {
        this.alertService.getAlert().subscribe((alert) => {
            if (!alert) {
                // clear alerts when an empty alert is received
                this.alerts = [];
                return;
            }
            // add alert to array
            this.alerts.push(alert);
            // remove alert after 5 seconds
            setTimeout(() => this.removeAlert(alert), DISPLAY_IN_SECONDS * 1000);
        });
    }
    removeAlert(alert) {
        this.alerts = this.alerts.filter(x => x !== alert);
    }
    cssClass(alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case AlertType.Success:
                return 'alert alert-success';
            case AlertType.Error:
                return 'alert alert-danger';
            case AlertType.Info:
                return 'alert alert-info';
            case AlertType.Warning:
                return 'alert alert-warning';
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertComponent, deps: [{ token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AlertComponent, selector: "app-alert", ngImport: i0, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], dependencies: [{ kind: "directive", type: i4$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-alert', template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"] }]
        }], ctorParameters: function () { return [{ type: AlertService }]; } });

class PageBuilderComponent {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderComponent, deps: [{ token: i0.Injector }, { token: PageBuilderService }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: AuthService }, { token: i1$1.UntypedFormBuilder }, { token: PageBuilderAddService }, { token: DynamicsearchService }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: PageBuilderComponent, selector: "lib-page-builder", ngImport: i0, template: "<app-alert></app-alert>\r\n<div class=\"page-design\">\r\n  <div class=\"strip_head def-addIcon toggleleft d-flex justify-content-between px-3\">\r\n    <div class=\"f-left\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-primary btn-icon my-2\"\r\n        title=\"Add New Page\"\r\n        fieldKey=\"PAG_DES_GRID_LIST_ADD_NEW_PAGE\"\r\n        (click)=\"goToBuilder()\"\r\n        pRipple>\r\n        <em class=\"pi pi-plus font-weight-bold\"></em>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12 mb-4\">\r\n      <p-card styleClass=\"rbac-card gridview w-100\">\r\n        <app-grid-list\r\n          [dataSource]=\"dataSource\"\r\n          [updateGrid]=\"updateGrid\"\r\n          [columns]=\"tableColumns\"\r\n          [totalCount]=\"totalcount\"\r\n          (editTableRow)=\"editTableRow($event)\"\r\n          (viewTableRow)=\"viewTableRow($event)\"\r\n          (viewVersions)=\"viewVersions($event)\"\r\n          (duplicateRow)=\"duplicateRow($event)\"\r\n          (activatePage)=\"activatePage($event)\"\r\n          (deactivatePage)=\"deactivatePage($event)\"\r\n          [remoteOperations]=\"false\">\r\n        </app-grid-list>\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n", styles: [":root{--background-color: #f8f8f8;--navigation: #fff;--primary: #0D3178;--checkbox-border: #D6D5D5;--text-dark: #000;--label-text: #0D3178;--hover-text: #fff;--bg-light: #fff;--forms: #fff;--nav-text: #696969;--light-gray: #696969;--material-icons: #0D3178;--highlight-list: #e3f2fd;--table-header: #f9f9f9;--table-odd: #f7f7f7;--table-border: #ddd;--table-hover: #dbf6ff;--table-odd-color: #f2fcff;--btn: #0D3178;--menu-panel: #032361;--menu-level2: #28447E;--border-trans: transparent;--btn-hover: #1258A7;--btn-dark: #0D3178;--dropdown-list: #fff;--btncancel: #0D3178;--primary-light: #1258A7;--primary-dark: #0D3178;--light-d-light: #fff;--ldl-text: #fff;--light-d-accent: #fff;--header-bg: #f7f7f7;--secondary-color: #0D3178;--menu-link: #1258A7;--menu-highlight: #0084d1;--sumbmenu-selected: #0084D1;--profile-bg: #f3f9f9;--disabled: #7A8EB5;--accordion-header: #F5F5F5;--input-label: #1F1F1F;--input-field: #4C4C4C;--ghost: #A2A2A2;--table-label: #f1f1f1;--error-msg: #DC0404;--menu-hover: #1258A7;--var-icon-font: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;--rocket-icon: \"/assets/images/rocket-ship.svg\";--base-font-size: 16px;--font-11: 11px;--font-12: 12px;--font-13: 13px;--font-14: 14px;--font-15: 15px;--font-16: 16px;--font-17: 17px;--font-18: 18px;--font-19: 19px;--font-20: 20px;--font-21: 21px;--font-24: 24px;--font-26: 26px}:host ::ng-deep .page-design .gridview.p-card .card-body,:host ::ng-deep .page-design .gridview.p-card .p-card-body,:host ::ng-deep .page-design .gridview.card .card-body,:host ::ng-deep .page-design .gridview.card .p-card-body{padding-top:0;padding-bottom:0;background:var(--bg-light)}:host ::ng-deep .page-design .p-card-content{padding:0}:host ::ng-deep .page-design .dropdown-menu,:host ::ng-deep .page-design .p-component{font-size:var(--base-font-size)}:host ::ng-deep .page-design .dropdown-item.active,:host ::ng-deep .page-design .dropdown-item:active{background:transparent;color:#16181b}:host ::ng-deep .page-design .checkbox label{cursor:pointer}:host ::ng-deep .page-design .dropdown-item:focus{background:#431e8d12}:host ::ng-deep .page-design .dropdown-item:hover{background:#431e8d12}:host ::ng-deep .page-design .checkbox label,:host ::ng-deep .page-design .radio label{min-height:inherit}:host ::ng-deep .page-design .filter-menu{padding:8px;border:1px solid #a7a7a7;max-height:180px;overflow-y:auto}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar{width:4px!important;height:4px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-track{background:#f6f6f6!important;border-radius:2px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-corner{background:#f6f6f6!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-thumb{background:#0d3178!important;border-radius:2px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-thumb:hover{background:#0d3178!important}:host ::ng-deep .page-design .p-checkbox{width:16px;height:16px}:host ::ng-deep .page-design .p-checkbox .p-checkbox-box{width:16px;height:16px}:host ::ng-deep .page-design .p-checkbox .p-checkbox-box .p-checkbox-icon{font-size:9px;font-weight:600}.def-addIcon{position:relative;margin-bottom:-50px;z-index:1;top:0;float:left}\n"], dependencies: [{ kind: "directive", type: i2.RouterOutlet, selector: "router-outlet", inputs: ["name"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }, { kind: "component", type: i10.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { kind: "directive", type: i5$1.Ripple, selector: "[pRipple]" }, { kind: "component", type: AlertComponent, selector: "app-alert" }, { kind: "component", type: GridListComponent, selector: "app-grid-list", inputs: ["dataList", "dataSource", "columns", "updateGrid", "totalCount", "page", "isShow", "exportPageName"], outputs: ["currentPage", "editTableRow", "viewTableRow", "deleteTableRow", "openExternalLink", "openpopupLink", "routeTo", "openPopup", "sortOrder", "filterSearchValue", "filterBuilderPopup", "filterPanel", "multipleFilterValues", "downloadTableRow", "toggleRow", "duplicateRow", "viewVersions", "activateVersion", "activatePage", "deactivatePage", "duplicatePageVersion", "selectedRowsData"] }, { kind: "directive", type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-page-builder', encapsulation: ViewEncapsulation.None, template: "<app-alert></app-alert>\r\n<div class=\"page-design\">\r\n  <div class=\"strip_head def-addIcon toggleleft d-flex justify-content-between px-3\">\r\n    <div class=\"f-left\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-primary btn-icon my-2\"\r\n        title=\"Add New Page\"\r\n        fieldKey=\"PAG_DES_GRID_LIST_ADD_NEW_PAGE\"\r\n        (click)=\"goToBuilder()\"\r\n        pRipple>\r\n        <em class=\"pi pi-plus font-weight-bold\"></em>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12 mb-4\">\r\n      <p-card styleClass=\"rbac-card gridview w-100\">\r\n        <app-grid-list\r\n          [dataSource]=\"dataSource\"\r\n          [updateGrid]=\"updateGrid\"\r\n          [columns]=\"tableColumns\"\r\n          [totalCount]=\"totalcount\"\r\n          (editTableRow)=\"editTableRow($event)\"\r\n          (viewTableRow)=\"viewTableRow($event)\"\r\n          (viewVersions)=\"viewVersions($event)\"\r\n          (duplicateRow)=\"duplicateRow($event)\"\r\n          (activatePage)=\"activatePage($event)\"\r\n          (deactivatePage)=\"deactivatePage($event)\"\r\n          [remoteOperations]=\"false\">\r\n        </app-grid-list>\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n", styles: [":root{--background-color: #f8f8f8;--navigation: #fff;--primary: #0D3178;--checkbox-border: #D6D5D5;--text-dark: #000;--label-text: #0D3178;--hover-text: #fff;--bg-light: #fff;--forms: #fff;--nav-text: #696969;--light-gray: #696969;--material-icons: #0D3178;--highlight-list: #e3f2fd;--table-header: #f9f9f9;--table-odd: #f7f7f7;--table-border: #ddd;--table-hover: #dbf6ff;--table-odd-color: #f2fcff;--btn: #0D3178;--menu-panel: #032361;--menu-level2: #28447E;--border-trans: transparent;--btn-hover: #1258A7;--btn-dark: #0D3178;--dropdown-list: #fff;--btncancel: #0D3178;--primary-light: #1258A7;--primary-dark: #0D3178;--light-d-light: #fff;--ldl-text: #fff;--light-d-accent: #fff;--header-bg: #f7f7f7;--secondary-color: #0D3178;--menu-link: #1258A7;--menu-highlight: #0084d1;--sumbmenu-selected: #0084D1;--profile-bg: #f3f9f9;--disabled: #7A8EB5;--accordion-header: #F5F5F5;--input-label: #1F1F1F;--input-field: #4C4C4C;--ghost: #A2A2A2;--table-label: #f1f1f1;--error-msg: #DC0404;--menu-hover: #1258A7;--var-icon-font: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;--rocket-icon: \"/assets/images/rocket-ship.svg\";--base-font-size: 16px;--font-11: 11px;--font-12: 12px;--font-13: 13px;--font-14: 14px;--font-15: 15px;--font-16: 16px;--font-17: 17px;--font-18: 18px;--font-19: 19px;--font-20: 20px;--font-21: 21px;--font-24: 24px;--font-26: 26px}:host ::ng-deep .page-design .gridview.p-card .card-body,:host ::ng-deep .page-design .gridview.p-card .p-card-body,:host ::ng-deep .page-design .gridview.card .card-body,:host ::ng-deep .page-design .gridview.card .p-card-body{padding-top:0;padding-bottom:0;background:var(--bg-light)}:host ::ng-deep .page-design .p-card-content{padding:0}:host ::ng-deep .page-design .dropdown-menu,:host ::ng-deep .page-design .p-component{font-size:var(--base-font-size)}:host ::ng-deep .page-design .dropdown-item.active,:host ::ng-deep .page-design .dropdown-item:active{background:transparent;color:#16181b}:host ::ng-deep .page-design .checkbox label{cursor:pointer}:host ::ng-deep .page-design .dropdown-item:focus{background:#431e8d12}:host ::ng-deep .page-design .dropdown-item:hover{background:#431e8d12}:host ::ng-deep .page-design .checkbox label,:host ::ng-deep .page-design .radio label{min-height:inherit}:host ::ng-deep .page-design .filter-menu{padding:8px;border:1px solid #a7a7a7;max-height:180px;overflow-y:auto}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar{width:4px!important;height:4px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-track{background:#f6f6f6!important;border-radius:2px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-corner{background:#f6f6f6!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-thumb{background:#0d3178!important;border-radius:2px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-thumb:hover{background:#0d3178!important}:host ::ng-deep .page-design .p-checkbox{width:16px;height:16px}:host ::ng-deep .page-design .p-checkbox .p-checkbox-box{width:16px;height:16px}:host ::ng-deep .page-design .p-checkbox .p-checkbox-box .p-checkbox-icon{font-size:9px;font-weight:600}.def-addIcon{position:relative;margin-bottom:-50px;z-index:1;top:0;float:left}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: PageBuilderService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: AuthService }, { type: i1$1.UntypedFormBuilder }, { type: PageBuilderAddService }, { type: DynamicsearchService }, { type: DataStoreService }]; } });

const pageBuilderRoutes = [
    {
        path: 'list',
        component: PageBuilderComponent,
    },
    {
        path: 'versions/:id',
        component: PageBuilderVersionComponent
    },
    {
        path: 'add',
        loadChildren: () => import('./pics-module-page-builder-page-builder-add.module-5049aa5d.mjs').then(m => m.PageBuilderAddModule)
    },
    {
        path: 'edit/:id',
        loadChildren: () => import('./pics-module-page-builder-page-builder-add.module-5049aa5d.mjs').then(n => n.PageBuilderAddModule)
    },
    {
        path: 'edit/:id/:rev',
        component: PageBuilderAddComponent
    },
    {
        path: 'view/:id',
        component: PageBuilderViewComponent
    },
    {
        path: 'view/:id/page-ribbon-design',
        component: RibbonDesignPageComponent
    },
    { path: '**', redirectTo: 'list', pathMatch: 'full' },
];
class PagebuilderRoutingModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PagebuilderRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: PagebuilderRoutingModule, imports: [i2.RouterModule], exports: [RouterModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PagebuilderRoutingModule, imports: [RouterModule.forChild(pageBuilderRoutes), RouterModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PagebuilderRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(pageBuilderRoutes)],
                    exports: [RouterModule]
                }]
        }] });

class MaterialUIModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaterialUIModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: MaterialUIModule, imports: [CommonModule,
            MatBottomSheetModule,
            MatButtonModule,
            MatCardModule,
            MatDatepickerModule,
            MatIconModule,
            MatInputModule,
            MatNativeDateModule,
            MatMenuModule,
            MatRadioModule,
            MatSelectModule,
            MatStepperModule,
            MatTooltipModule,
            MatDialogModule,
            MatTabsModule,
            MatCheckboxModule,
            MatSlideToggleModule,
            MatSortModule,
            MatTableModule,
            MatFormFieldModule], exports: [CommonModule,
            MatBottomSheetModule,
            MatButtonModule,
            MatCardModule,
            MatDatepickerModule,
            MatIconModule,
            MatInputModule,
            MatNativeDateModule,
            MatMenuModule,
            MatRadioModule,
            MatSelectModule,
            MatStepperModule,
            MatTooltipModule,
            MatDialogModule,
            MatTabsModule,
            MatCheckboxModule,
            MatSlideToggleModule,
            MatSortModule,
            MatTableModule,
            MatFormFieldModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaterialUIModule, imports: [CommonModule,
            MatBottomSheetModule,
            MatButtonModule,
            MatCardModule,
            MatDatepickerModule,
            MatIconModule,
            MatInputModule,
            MatNativeDateModule,
            MatMenuModule,
            MatRadioModule,
            MatSelectModule,
            MatStepperModule,
            MatTooltipModule,
            MatDialogModule,
            MatTabsModule,
            MatCheckboxModule,
            MatSlideToggleModule,
            MatSortModule,
            MatTableModule,
            MatFormFieldModule, CommonModule,
            MatBottomSheetModule,
            MatButtonModule,
            MatCardModule,
            MatDatepickerModule,
            MatIconModule,
            MatInputModule,
            MatNativeDateModule,
            MatMenuModule,
            MatRadioModule,
            MatSelectModule,
            MatStepperModule,
            MatTooltipModule,
            MatDialogModule,
            MatTabsModule,
            MatCheckboxModule,
            MatSlideToggleModule,
            MatSortModule,
            MatTableModule,
            MatFormFieldModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaterialUIModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        MatBottomSheetModule,
                        MatButtonModule,
                        MatCardModule,
                        MatDatepickerModule,
                        MatIconModule,
                        MatInputModule,
                        MatNativeDateModule,
                        MatMenuModule,
                        MatRadioModule,
                        MatSelectModule,
                        MatStepperModule,
                        MatTooltipModule,
                        MatDialogModule,
                        MatTabsModule,
                        MatCheckboxModule,
                        MatSlideToggleModule,
                        MatSortModule,
                        MatTableModule,
                        MatFormFieldModule
                    ],
                    exports: [
                        CommonModule,
                        MatBottomSheetModule,
                        MatButtonModule,
                        MatCardModule,
                        MatDatepickerModule,
                        MatIconModule,
                        MatInputModule,
                        MatNativeDateModule,
                        MatMenuModule,
                        MatRadioModule,
                        MatSelectModule,
                        MatStepperModule,
                        MatTooltipModule,
                        MatDialogModule,
                        MatTabsModule,
                        MatCheckboxModule,
                        MatSlideToggleModule,
                        MatSortModule,
                        MatTableModule,
                        MatFormFieldModule
                    ]
                }]
        }] });

class FilterPipe {
    transform(value, input) {
        if (input) {
            return value.filter(val => val.toLowerCase().indexOf(input.toLowerCase()) >= 0);
        }
        else {
            return value;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FilterPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FilterPipe, name: "FilterPipe" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FilterPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'FilterPipe'
                }]
        }] });

class MaskPipe {
    transform(value, showSsnMask) {
        if (showSsnMask === true) {
            if (String(value).startsWith('*')) {
                return '';
            }
            else if (String(value).match('^d{9}$')) {
                return '***-**-' + String(value).substring(String(value).length - 4);
            }
            else {
                return '';
            }
        }
        else {
            const cleaned = ('' + value).replace(/\D/g, '');
            const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
            if (match) {
                return '(' + match[1] + ') ' + match[2] + '-' + match[3];
            }
            else if (String(value).startsWith('*')) {
                return '';
            }
            else if (String(value).match('^d{9}$')) {
                return (String(value).substring(0, 3) + '-' + String(value).substring(3, 5) + '-' + String(value).substring(5, 9));
            }
            else {
                return '';
            }
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaskPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: MaskPipe, name: "ssnMask" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaskPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'ssnMask' }]
        }] });

class SharedPipesModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SharedPipesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: SharedPipesModule, declarations: [MaskPipe, FilterPipe], imports: [CommonModule], exports: [MaskPipe, FilterPipe] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SharedPipesModule, providers: [MaskPipe, FilterPipe], imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SharedPipesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [MaskPipe, FilterPipe],
                    exports: [MaskPipe, FilterPipe],
                    providers: [MaskPipe, FilterPipe]
                }]
        }] });

class DirectivesModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DirectivesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DirectivesModule, declarations: [PermissionDirective, ShowFieldDirective], imports: [CommonModule], exports: [PermissionDirective, ShowFieldDirective] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DirectivesModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DirectivesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [PermissionDirective, ShowFieldDirective],
                    imports: [CommonModule],
                    exports: [PermissionDirective, ShowFieldDirective]
                }]
        }] });

class GridListModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: GridListModule, declarations: [GridListComponent], imports: [CommonModule,
            NgxPaginationModule,
            DxDataGridModule,
            MaterialUIModule,
            SharedPipesModule,
            DirectivesModule,
            FormsModule,
            ReactiveFormsModule,
            NgxfUploaderModule, i1$2.NgxMaskModule], exports: [GridListComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListModule, imports: [CommonModule,
            NgxPaginationModule,
            DxDataGridModule,
            MaterialUIModule,
            SharedPipesModule,
            DirectivesModule,
            FormsModule,
            ReactiveFormsModule,
            NgxfUploaderModule,
            NgxMaskModule.forRoot()] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [GridListComponent],
                    imports: [
                        CommonModule,
                        NgxPaginationModule,
                        DxDataGridModule,
                        MaterialUIModule,
                        SharedPipesModule,
                        DirectivesModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgxfUploaderModule,
                        NgxMaskModule.forRoot()
                    ],
                    exports: [GridListComponent]
                }]
        }] });

class AlertModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: AlertModule, declarations: [AlertComponent], imports: [CommonModule], exports: [AlertComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [AlertComponent],
                    exports: [AlertComponent]
                }]
        }] });

class PrimengModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PrimengModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: PrimengModule, imports: [CommonModule,
            AccordionModule,
            TabMenuModule,
            MessageModule,
            TableModule,
            InputTextModule,
            CalendarModule,
            CheckboxModule,
            EditorModule,
            FieldsetModule,
            ButtonModule,
            RadioButtonModule,
            DropdownModule,
            InputTextareaModule,
            InputMaskModule,
            StepsModule,
            CardModule,
            ToastModule,
            RippleModule,
            AvatarModule,
            BadgeModule,
            MultiSelectModule,
            InputSwitchModule,
            AlertModule,
            ConfirmDialogModule,
            TreeSelectModule,
            ProgressSpinnerModule,
            SpeedDialModule,
            OrderListModule,
            FileUploadModule,
            DialogModule,
            PasswordModule,
            KnobModule,
            TabViewModule,
            SidebarModule], exports: [CommonModule,
            AccordionModule,
            TabMenuModule,
            MessageModule,
            TableModule,
            InputTextModule,
            CalendarModule,
            CheckboxModule,
            EditorModule,
            FieldsetModule,
            ButtonModule,
            RadioButtonModule,
            DropdownModule,
            InputTextareaModule,
            InputMaskModule,
            StepsModule,
            CardModule,
            ToastModule,
            RippleModule,
            AvatarModule,
            BadgeModule,
            MultiSelectModule,
            InputSwitchModule,
            AlertModule,
            ConfirmDialogModule,
            TreeSelectModule,
            ProgressSpinnerModule,
            SpeedDialModule,
            OrderListModule,
            FileUploadModule,
            DialogModule,
            PasswordModule,
            KnobModule,
            TabViewModule,
            SidebarModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PrimengModule, imports: [CommonModule,
            AccordionModule,
            TabMenuModule,
            MessageModule,
            TableModule,
            InputTextModule,
            CalendarModule,
            CheckboxModule,
            EditorModule,
            FieldsetModule,
            ButtonModule,
            RadioButtonModule,
            DropdownModule,
            InputTextareaModule,
            InputMaskModule,
            StepsModule,
            CardModule,
            ToastModule,
            RippleModule,
            AvatarModule,
            BadgeModule,
            MultiSelectModule,
            InputSwitchModule,
            AlertModule,
            ConfirmDialogModule,
            TreeSelectModule,
            ProgressSpinnerModule,
            SpeedDialModule,
            OrderListModule,
            FileUploadModule,
            DialogModule,
            PasswordModule,
            KnobModule,
            TabViewModule,
            SidebarModule, CommonModule,
            AccordionModule,
            TabMenuModule,
            MessageModule,
            TableModule,
            InputTextModule,
            CalendarModule,
            CheckboxModule,
            EditorModule,
            FieldsetModule,
            ButtonModule,
            RadioButtonModule,
            DropdownModule,
            InputTextareaModule,
            InputMaskModule,
            StepsModule,
            CardModule,
            ToastModule,
            RippleModule,
            AvatarModule,
            BadgeModule,
            MultiSelectModule,
            InputSwitchModule,
            AlertModule,
            ConfirmDialogModule,
            TreeSelectModule,
            ProgressSpinnerModule,
            SpeedDialModule,
            OrderListModule,
            FileUploadModule,
            DialogModule,
            PasswordModule,
            KnobModule,
            TabViewModule,
            SidebarModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PrimengModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        AccordionModule,
                        TabMenuModule,
                        MessageModule,
                        TableModule,
                        InputTextModule,
                        CalendarModule,
                        CheckboxModule,
                        EditorModule,
                        FieldsetModule,
                        ButtonModule,
                        RadioButtonModule,
                        DropdownModule,
                        InputTextareaModule,
                        InputMaskModule,
                        StepsModule,
                        CardModule,
                        ToastModule,
                        RippleModule,
                        AvatarModule,
                        BadgeModule,
                        MultiSelectModule,
                        InputSwitchModule,
                        AlertModule,
                        ConfirmDialogModule,
                        TreeSelectModule,
                        ProgressSpinnerModule,
                        SpeedDialModule,
                        OrderListModule,
                        FileUploadModule,
                        DialogModule,
                        PasswordModule,
                        KnobModule,
                        TabViewModule,
                        SidebarModule
                    ],
                    exports: [
                        CommonModule,
                        AccordionModule,
                        TabMenuModule,
                        MessageModule,
                        TableModule,
                        InputTextModule,
                        CalendarModule,
                        CheckboxModule,
                        EditorModule,
                        FieldsetModule,
                        ButtonModule,
                        RadioButtonModule,
                        DropdownModule,
                        InputTextareaModule,
                        InputMaskModule,
                        StepsModule,
                        CardModule,
                        ToastModule,
                        RippleModule,
                        AvatarModule,
                        BadgeModule,
                        MultiSelectModule,
                        InputSwitchModule,
                        AlertModule,
                        ConfirmDialogModule,
                        TreeSelectModule,
                        ProgressSpinnerModule,
                        SpeedDialModule,
                        OrderListModule,
                        FileUploadModule,
                        DialogModule,
                        PasswordModule,
                        KnobModule,
                        TabViewModule,
                        SidebarModule
                    ]
                }]
        }] });

const today = new Date();
const currentDate = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();
const currentDay = new Date(year, month, currentDate);
class DateRangeWrapperComponent {
    dynamicTabPageService;
    route;
    dataStoreService;
    value;
    startDateKey;
    endDateKey;
    valueChange = new EventEmitter();
    disabled;
    minDate = currentDay;
    formioEvent = new EventEmitter();
    rangePicker;
    selectRange;
    daysInput;
    dateRangeForm;
    showFutureDateConfirmation = false;
    allowFutureDate = '';
    isResponse;
    isEdited;
    disableInput = false;
    dayRange;
    enableBtn = true;
    dateDifference = 0;
    predefinedRanges = [0, 30, 45, 60, 90, 120];
    constructor(dynamicTabPageService, route, dataStoreService) {
        this.dynamicTabPageService = dynamicTabPageService;
        this.route = route;
        this.dataStoreService = dataStoreService;
        //
    }
    ngOnInit() {
        this.initForm();
        const loc = window.location.pathname.split('/');
        if (loc[5] && loc[6]) {
            this.getResponseById(loc[5], loc[6]);
        }
        else {
            this.isResponse = false;
        }
        const action = this.dataStoreService.getData('gridAction');
        if (action === 'view') {
            this.disableInput = true;
        }
    }
    getResponseById(formid, resid) {
        this.dynamicTabPageService.getResponseByPageId(resid, formid).subscribe((result) => {
            if (result.data) {
                this.isResponse = true;
                this.dateRangeForm.patchValue({
                    start: moment(result.data.start_date).format(),
                    end: moment(result.data.end_date).format()
                });
                const formValue = this.dateRangeForm.getRawValue();
                const dateRange = {
                    startDateKey: this.startDateKey,
                    startDate: moment(formValue.start).format('YYYY-MM-DD'),
                    endDateKey: this.endDateKey,
                    endDate: moment(formValue.end).format('YYYY-MM-DD')
                };
                this.dateDifference = moment(formValue.end).diff(moment(formValue.start), 'days');
                if (this.predefinedRanges.includes(this.dateDifference)) {
                    this.dayRange = '';
                }
                else {
                    this.dayRange = this.dateDifference;
                }
                this.value = dateRange;
                this.valueChange.emit(dateRange);
                this.formioEvent.emit({ eventName: 'customEvent', data: { value: { dateRange }, type: 'dateRange' } });
            }
        });
    }
    initForm() {
        console.log('currentDay', currentDay);
        this.dateRangeForm = new UntypedFormGroup({
            start: new UntypedFormControl(),
            end: new UntypedFormControl()
        });
    }
    resetForm() {
        console.log('currentDay', currentDay);
        this.dateRangeForm.patchValue({
            start: null,
            end: null
        });
    }
    selectedDateRange() {
        const formValue = this.dateRangeForm.getRawValue();
        if (new Date(formValue.start).getDate() > currentDate && this.isResponse) {
            this.isEdited = true;
            this.allowFutureDate = '';
            this.showFutureDateConfirmation = true;
            const test = null;
            this.value = test;
            this.valueChange.emit(test);
            this.formioEvent.emit({ eventName: 'customEvent', data: { value: { test }, type: 'dateRange' } });
            this.dateDifference = moment(formValue.end).diff(moment(formValue.start), 'days');
        }
    }
    ngAfterViewInit() {
        this.dateRangeForm.valueChanges.subscribe(value => {
            console.log('Date form value changes...', value.start, moment(value.start).isAfter(moment()));
            if (value.start && moment(value.start).isAfter(moment(currentDay))) {
                this.showFutureDateConfirmation = true;
                this.allowFutureDate = true;
                if (!this.isResponse) {
                    const test = null;
                    this.value = test;
                    this.valueChange.emit(test);
                    this.formioEvent.emit({ eventName: 'customEvent', data: { value: { test }, type: 'dateRange' } });
                }
            }
            if (new Date(value.start).getDate() === currentDate &&
                new Date(value.start).getMonth() + 1 === new Date().getMonth() + 1) {
                this.allowFutureDate = false;
                this.showFutureDateConfirmation = false;
            }
            else if ((new Date(value.start).getDate() > currentDate ||
                new Date(value.start).getMonth() + 1 > new Date().getMonth() + 1) &&
                this.isResponse) {
                this.allowFutureDate = this.isEdited ? '' : true;
                this.showFutureDateConfirmation = true;
            }
            else {
                this.allowFutureDate = '';
            }
        });
    }
    generateRange(eve, check) {
        if (eve?.key === 'Enter' || eve?.type === 'click') {
            this.assignEndDate(this.dayRange, check);
        }
    }
    checkInput() {
        this.enableBtn = false;
    }
    futureDateConfirmationChange($event) {
        console.log($event.source.name, $event.value);
        if ($event.source.value) {
            this.emitDateRange();
        }
        if (!$event.source.value) {
            this.resetForm();
            this.showFutureDateConfirmation = false;
            this.allowFutureDate = '';
            if (this.isResponse) {
                this.allowFutureDate = false;
            }
            this.daysInput.nativeElement.value = '';
            const test = null;
            this.value = test;
            this.valueChange.emit(test);
            this.formioEvent.emit({ eventName: 'customEvent', data: { value: { test }, type: 'dateRange' } });
        }
    }
    focusoutAssignRange(value) {
        console.log(value);
    }
    startDateChange($event) {
        console.log('start date change...', $event);
    }
    assignEndDate(value, check) {
        this.selectRange.nativeElement.click();
        if (check) {
            this.daysInput.nativeElement.value = '';
        }
        const formValue = this.dateRangeForm.getRawValue();
        console.log('form values...');
        const startDate = formValue.start;
        if (startDate) {
            console.log(startDate);
            const calculatedEndDate = this.addDays(startDate, value);
            this.dateRangeForm.get('end').setValue(calculatedEndDate);
            this.emitDateRange();
        }
    }
    emitDateRange() {
        const formValue = this.dateRangeForm.getRawValue();
        const startDate = formValue.start;
        const endDate = formValue.end;
        const dateRange = {
            startDateKey: this.startDateKey,
            startDate: moment(startDate).format('YYYY-MM-DD'),
            endDateKey: this.endDateKey,
            endDate: moment(endDate).format('YYYY-MM-DD')
        };
        console.log(dateRange);
        this.value = dateRange;
        if (this.allowFutureDate || this.allowFutureDate === false) {
            this.valueChange.emit(dateRange);
            this.formioEvent.emit({ eventName: 'customEvent', data: { value: { dateRange }, type: 'dateRange' } });
        }
        this.enableBtn = true;
        this.dateDifference = moment(formValue.end).diff(moment(formValue.start), 'days');
    }
    addDays(date, days) {
        date = new Date(date);
        date.setDate(date.getDate() + days);
        return date;
    }
    copyStartDate() {
        const formValue = this.dateRangeForm.getRawValue();
        this.copy(formValue.start ? moment(formValue.start).format('MM/DD/YYYY') : 'Start date is empty');
    }
    copyEndDate() {
        const formValue = this.dateRangeForm.getRawValue();
        this.copy(formValue.end ? moment(formValue.end).format('MM/DD/YYYY') : 'End Date is Empty');
    }
    copy(text) {
        navigator.clipboard.writeText(text);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DateRangeWrapperComponent, deps: [{ token: DynamicTabPageService }, { token: i2.ActivatedRoute }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DateRangeWrapperComponent, selector: "app-date-range-wrapper", inputs: { value: "value", startDateKey: "startDateKey", endDateKey: "endDateKey", disabled: "disabled", minDate: "minDate" }, outputs: { valueChange: "valueChange", formioEvent: "formioEvent" }, viewQueries: [{ propertyName: "rangePicker", first: true, predicate: ["rangePicker"], descendants: true }, { propertyName: "selectRange", first: true, predicate: ["selectRange"], descendants: true }, { propertyName: "daysInput", first: true, predicate: ["daysInput"], descendants: true }], ngImport: i0, template: "<div class=\"w-100\">\r\n  <div class=\"row\">\r\n    <button (click)=\"copyStartDate()\" class=\"btn btn-icon mt-2\" matTooltip=\"Copy Start Date\">\r\n      <em class=\"fa fa-files-o\"></em>\r\n    </button>\r\n    <mat-form-field appearance=\"outline\" class=\"cal-wrp\">\r\n      <mat-date-range-input\r\n        [formGroup]=\"dateRangeForm\"\r\n        [min]=\"minDate\"\r\n        [rangePicker]=\"rangePicker\"\r\n        [disabled]=\"disableInput\"\r\n        (dateInput)=\"startDateChange($event)\">\r\n        <input matStartDate readonly placeholder=\"Start date\" formControlName=\"start\" />\r\n        <input matEndDate readonly placeholder=\"End date\" (dateChange)=\"emitDateRange()\" formControlName=\"end\" />\r\n      </mat-date-range-input>\r\n      <mat-datepicker-toggle matSuffix [for]=\"rangePicker\"></mat-datepicker-toggle>\r\n      <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\r\n      <mat-date-range-picker #rangePicker>\r\n        <mat-datepicker-actions>\r\n          <div class=\"d-flex flex-column calendar-btn-wrp\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-12\">\r\n                <button class=\"btn-cal\" #selectRange matDateRangePickerApply (click)=\"selectedDateRange()\">\r\n                  Select Range\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <hr class=\"my-1\" />\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-12 date-range\">\r\n                <button (click)=\"assignEndDate(0, true)\" class=\"btn-cal\" [class.cal_active]=\"dateDifference === 0\">\r\n                  0 days\r\n                </button>\r\n                <button (click)=\"assignEndDate(30, true)\" class=\"btn-cal\" [class.cal_active]=\"dateDifference === 30\">\r\n                  30 Days\r\n                </button>\r\n                <button (click)=\"assignEndDate(45, true)\" class=\"btn-cal\" [class.cal_active]=\"dateDifference === 45\">\r\n                  45 Days\r\n                </button>\r\n                <button (click)=\"assignEndDate(60, true)\" class=\"btn-cal\" [class.cal_active]=\"dateDifference === 60\">\r\n                  60 Days\r\n                </button>\r\n                <button (click)=\"assignEndDate(90, true)\" class=\"btn-cal\" [class.cal_active]=\"dateDifference === 90\">\r\n                  90 Days\r\n                </button>\r\n                <button (click)=\"assignEndDate(120, true)\" class=\"btn-cal\" [class.cal_active]=\"dateDifference === 120\">\r\n                  120 Days\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <hr class=\"my-1\" />\r\n            <div class=\"row d-flex justify-content-center\">\r\n              <div class=\"col-12 mt-2 mb-1\">\r\n                <div class=\"text-md-center\">\r\n                  <input\r\n                    min=\"0\"\r\n                    class=\"mr-2\"\r\n                    style=\"width: 60px; height: 17px\"\r\n                    matInput\r\n                    #daysInput\r\n                    type=\"number\"\r\n                    [(ngModel)]=\"dayRange\"\r\n                    (input)=\"checkInput()\"\r\n                    (keyup)=\"generateRange($event, false)\" />\r\n                  <!-- <em class=\"fa fa-check check-btn\" [ngClass]=\"{'disabled': !enableBtn}\"\r\n                  (click)=\"enableBtn && generateRange($event, false)\"></em> -->\r\n                  <button\r\n                    class=\"btn-cal m-md-0\"\r\n                    [ngClass]=\"{ disabled: enableBtn }\"\r\n                    [disabled]=\"enableBtn\"\r\n                    (click)=\"generateRange($event, false)\">\r\n                    Submit\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-datepicker-actions>\r\n      </mat-date-range-picker>\r\n    </mat-form-field>\r\n    <button (click)=\"copyEndDate()\" class=\"btn btn-icon mt-2\" matTooltip=\"Copy End Date\">\r\n      <em class=\"fa fa-files-o\"></em>\r\n    </button>\r\n  </div>\r\n  <div class=\"row pl-4\" *ngIf=\"showFutureDateConfirmation\">\r\n    <label class=\"pr-2\">Do you wish to use a future start date?<span class=\"requiredfield text-danger\">*</span></label>\r\n    <mat-radio-group\r\n      [(ngModel)]=\"allowFutureDate\"\r\n      [disabled]=\"disableInput\"\r\n      (change)=\"futureDateConfirmationChange($event)\">\r\n      <mat-radio-button class=\"pr-2\" [value]=\"true\"> Yes </mat-radio-button>\r\n      <mat-radio-button class=\"pr-2\" [value]=\"false\"> No </mat-radio-button>\r\n    </mat-radio-group>\r\n  </div>\r\n</div>\r\n", styles: [".modal-action-button{width:100px;margin:15px}#myModal{display:block}.modal-content{background-color:#fefefe;margin:auto;padding:10px;border:1px solid #888}.modal-action-button-container{display:inline}.close{font-size:19px!important;position:absolute;top:20px;right:30px;transition:all .2s;font-weight:700;text-decoration:none;color:#333;opacity:.7}.close:hover,.close:focus{text-decoration:none;cursor:pointer}.modal-close{margin-bottom:30px}.overlay{position:fixed;inset:0;background:#0000008f;transition:opacity .5s;z-index:1000}.overlay:target{visibility:visible;opacity:1}.modal{display:block;top:30%;margin:70px auto;width:30%;position:relative;transition:all 5s ease-in-out}p{text-align:center;font-weight:600;margin:20px 0}.btn-cal{background:#f1f3f5;border-radius:4px;color:#4c4f55;border:none;margin:5px;display:inline-block;padding:5px 10px;font-size:12px}.calendar-btn-wrp{width:290px!important;text-align:center}.cal-lb{color:#3f619f;font-size:14px}.cal-wrp{position:relative;transition:0s .85s!important}.cal-wrp .copy-icon{position:absolute;top:0;right:-4px;height:21px;width:20px;outline:none;border:none;background-repeat:no-repeat;background-color:none;background-size:19px 27px;padding:0}.cal-wrp .copy-icon:active{transition:0s!important}.disabled{pointer-events:none;opacity:.5}.cal_active{background-color:var(--sumbmenu-selected)!important}.date-range .btn-cal{background:var(--bg-light)!important;border:1px solid var(--primary)!important;color:var(--primary)!important}.date-range .btn-cal.cal_active{background:var(--btn)!important;color:#fff!important}:host ::ng-deep .mat-form-field-type-mat-date-range-input .mat-form-field-infix{border:none;padding:11px 0}:host ::ng-deep .mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:7px}\n"], dependencies: [{ kind: "directive", type: i4$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i4$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$1.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$1.MinValidator, selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]", inputs: ["min"] }, { kind: "directive", type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i6$1.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "component", type: i6$1.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { kind: "directive", type: i6$1.MatStartDate, selector: "input[matStartDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { kind: "directive", type: i6$1.MatEndDate, selector: "input[matEndDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { kind: "component", type: i6$1.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }, { kind: "component", type: i6$1.MatDatepickerActions, selector: "mat-datepicker-actions, mat-date-range-picker-actions" }, { kind: "directive", type: i6$1.MatDatepickerApply, selector: "[matDatepickerApply], [matDateRangePickerApply]" }, { kind: "directive", type: i7$3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i8$1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i8$1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i8$1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "directive", type: i9$1.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { kind: "component", type: i9$1.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { kind: "directive", type: i8.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DateRangeWrapperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-date-range-wrapper', template: "<div class=\"w-100\">\r\n  <div class=\"row\">\r\n    <button (click)=\"copyStartDate()\" class=\"btn btn-icon mt-2\" matTooltip=\"Copy Start Date\">\r\n      <em class=\"fa fa-files-o\"></em>\r\n    </button>\r\n    <mat-form-field appearance=\"outline\" class=\"cal-wrp\">\r\n      <mat-date-range-input\r\n        [formGroup]=\"dateRangeForm\"\r\n        [min]=\"minDate\"\r\n        [rangePicker]=\"rangePicker\"\r\n        [disabled]=\"disableInput\"\r\n        (dateInput)=\"startDateChange($event)\">\r\n        <input matStartDate readonly placeholder=\"Start date\" formControlName=\"start\" />\r\n        <input matEndDate readonly placeholder=\"End date\" (dateChange)=\"emitDateRange()\" formControlName=\"end\" />\r\n      </mat-date-range-input>\r\n      <mat-datepicker-toggle matSuffix [for]=\"rangePicker\"></mat-datepicker-toggle>\r\n      <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\r\n      <mat-date-range-picker #rangePicker>\r\n        <mat-datepicker-actions>\r\n          <div class=\"d-flex flex-column calendar-btn-wrp\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-12\">\r\n                <button class=\"btn-cal\" #selectRange matDateRangePickerApply (click)=\"selectedDateRange()\">\r\n                  Select Range\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <hr class=\"my-1\" />\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-12 date-range\">\r\n                <button (click)=\"assignEndDate(0, true)\" class=\"btn-cal\" [class.cal_active]=\"dateDifference === 0\">\r\n                  0 days\r\n                </button>\r\n                <button (click)=\"assignEndDate(30, true)\" class=\"btn-cal\" [class.cal_active]=\"dateDifference === 30\">\r\n                  30 Days\r\n                </button>\r\n                <button (click)=\"assignEndDate(45, true)\" class=\"btn-cal\" [class.cal_active]=\"dateDifference === 45\">\r\n                  45 Days\r\n                </button>\r\n                <button (click)=\"assignEndDate(60, true)\" class=\"btn-cal\" [class.cal_active]=\"dateDifference === 60\">\r\n                  60 Days\r\n                </button>\r\n                <button (click)=\"assignEndDate(90, true)\" class=\"btn-cal\" [class.cal_active]=\"dateDifference === 90\">\r\n                  90 Days\r\n                </button>\r\n                <button (click)=\"assignEndDate(120, true)\" class=\"btn-cal\" [class.cal_active]=\"dateDifference === 120\">\r\n                  120 Days\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <hr class=\"my-1\" />\r\n            <div class=\"row d-flex justify-content-center\">\r\n              <div class=\"col-12 mt-2 mb-1\">\r\n                <div class=\"text-md-center\">\r\n                  <input\r\n                    min=\"0\"\r\n                    class=\"mr-2\"\r\n                    style=\"width: 60px; height: 17px\"\r\n                    matInput\r\n                    #daysInput\r\n                    type=\"number\"\r\n                    [(ngModel)]=\"dayRange\"\r\n                    (input)=\"checkInput()\"\r\n                    (keyup)=\"generateRange($event, false)\" />\r\n                  <!-- <em class=\"fa fa-check check-btn\" [ngClass]=\"{'disabled': !enableBtn}\"\r\n                  (click)=\"enableBtn && generateRange($event, false)\"></em> -->\r\n                  <button\r\n                    class=\"btn-cal m-md-0\"\r\n                    [ngClass]=\"{ disabled: enableBtn }\"\r\n                    [disabled]=\"enableBtn\"\r\n                    (click)=\"generateRange($event, false)\">\r\n                    Submit\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-datepicker-actions>\r\n      </mat-date-range-picker>\r\n    </mat-form-field>\r\n    <button (click)=\"copyEndDate()\" class=\"btn btn-icon mt-2\" matTooltip=\"Copy End Date\">\r\n      <em class=\"fa fa-files-o\"></em>\r\n    </button>\r\n  </div>\r\n  <div class=\"row pl-4\" *ngIf=\"showFutureDateConfirmation\">\r\n    <label class=\"pr-2\">Do you wish to use a future start date?<span class=\"requiredfield text-danger\">*</span></label>\r\n    <mat-radio-group\r\n      [(ngModel)]=\"allowFutureDate\"\r\n      [disabled]=\"disableInput\"\r\n      (change)=\"futureDateConfirmationChange($event)\">\r\n      <mat-radio-button class=\"pr-2\" [value]=\"true\"> Yes </mat-radio-button>\r\n      <mat-radio-button class=\"pr-2\" [value]=\"false\"> No </mat-radio-button>\r\n    </mat-radio-group>\r\n  </div>\r\n</div>\r\n", styles: [".modal-action-button{width:100px;margin:15px}#myModal{display:block}.modal-content{background-color:#fefefe;margin:auto;padding:10px;border:1px solid #888}.modal-action-button-container{display:inline}.close{font-size:19px!important;position:absolute;top:20px;right:30px;transition:all .2s;font-weight:700;text-decoration:none;color:#333;opacity:.7}.close:hover,.close:focus{text-decoration:none;cursor:pointer}.modal-close{margin-bottom:30px}.overlay{position:fixed;inset:0;background:#0000008f;transition:opacity .5s;z-index:1000}.overlay:target{visibility:visible;opacity:1}.modal{display:block;top:30%;margin:70px auto;width:30%;position:relative;transition:all 5s ease-in-out}p{text-align:center;font-weight:600;margin:20px 0}.btn-cal{background:#f1f3f5;border-radius:4px;color:#4c4f55;border:none;margin:5px;display:inline-block;padding:5px 10px;font-size:12px}.calendar-btn-wrp{width:290px!important;text-align:center}.cal-lb{color:#3f619f;font-size:14px}.cal-wrp{position:relative;transition:0s .85s!important}.cal-wrp .copy-icon{position:absolute;top:0;right:-4px;height:21px;width:20px;outline:none;border:none;background-repeat:no-repeat;background-color:none;background-size:19px 27px;padding:0}.cal-wrp .copy-icon:active{transition:0s!important}.disabled{pointer-events:none;opacity:.5}.cal_active{background-color:var(--sumbmenu-selected)!important}.date-range .btn-cal{background:var(--bg-light)!important;border:1px solid var(--primary)!important;color:var(--primary)!important}.date-range .btn-cal.cal_active{background:var(--btn)!important;color:#fff!important}:host ::ng-deep .mat-form-field-type-mat-date-range-input .mat-form-field-infix{border:none;padding:11px 0}:host ::ng-deep .mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:7px}\n"] }]
        }], ctorParameters: function () { return [{ type: DynamicTabPageService }, { type: i2.ActivatedRoute }, { type: DataStoreService }]; }, propDecorators: { value: [{
                type: Input
            }], startDateKey: [{
                type: Input
            }], endDateKey: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], disabled: [{
                type: Input
            }], minDate: [{
                type: Input
            }], formioEvent: [{
                type: Output
            }], rangePicker: [{
                type: ViewChild,
                args: ['rangePicker']
            }], selectRange: [{
                type: ViewChild,
                args: ['selectRange']
            }], daysInput: [{
                type: ViewChild,
                args: ['daysInput']
            }] } });

const COMPONENT_OPTIONS$5 = {
    type: 'dateWithRange',
    selector: 'date-angular',
    title: 'Date Range Angular',
    group: 'advanced',
    icon: 'calendar',
    editForm: minimalEditForm,
    fieldOptions: ['startDateKey', 'endDateKey'],
    schema: {
        validate: {
            required: true
        }
    }
};
function minimalEditForm() {
    return {
        components: [
            { key: 'type', type: 'hidden' },
            {
                weight: 0,
                type: 'textfield',
                input: true,
                key: 'label',
                label: 'Label',
                placeholder: 'Label',
                validate: {
                    required: true
                }
            },
            {
                weight: 10,
                type: 'textfield',
                input: true,
                key: 'key',
                label: 'API Key',
                placeholder: 'Field Code',
                tooltip: 'The code/key/ID/name of the field.',
                validate: {
                    required: true,
                    maxLength: 128,
                    pattern: '[A-Za-z]\\w*',
                    patternMessage: 'The property name must only contain alphanumeric characters, underscores and should only be started by any letter character.'
                }
            },
            {
                weight: 20,
                type: 'textfield',
                input: true,
                key: 'startDateKey',
                label: 'Start Date Key',
                placeholder: 'Start Date Key',
                tooltip: 'The code/key/ID/name of the start date.',
                validate: {
                    required: true,
                    maxLength: 128,
                    pattern: '[A-Za-z]\\w*',
                    patternMessage: 'The property name must only contain alphanumeric characters, underscores and should only be started by any letter character.'
                }
            },
            {
                weight: 30,
                type: 'textfield',
                input: true,
                key: 'endDateKey',
                label: 'End Date Key',
                placeholder: 'End Date Key',
                tooltip: 'The code/key/ID/name of the end date.',
                validate: {
                    required: true,
                    maxLength: 128,
                    pattern: '[A-Za-z]\\w*',
                    patternMessage: 'The property name must only contain alphanumeric characters, underscores and should only be started by any letter character.'
                }
            },
            {
                weight: 413,
                type: 'checkbox',
                input: true,
                key: 'validate.required',
                label: 'Required'
            }
        ]
    };
}
function registerDateRangeComponent(injector) {
    console.log('registerDateRangeComponent called...');
    try {
        registerCustomFormioComponent(COMPONENT_OPTIONS$5, DateRangeWrapperComponent, injector);
        console.log('registerDateRangeComponent complete...');
    }
    catch (err) {
        console.error('error occ in registercomp', err);
    }
}

class FileUploadBasicComponent {
    _storeservice;
    alertService;
    authService;
    pageBuilderAddService;
    value;
    valueChange = new EventEmitter();
    disabled = false;
    formioEvent = new EventEmitter();
    uploadedFiles;
    formStatus;
    sharedInfo = {};
    pageId;
    responseId;
    uploadedFilesTest = [];
    isShow;
    httpService;
    constructor(_storeservice, alertService, authService, pageBuilderAddService) {
        this._storeservice = _storeservice;
        this.alertService = alertService;
        this.authService = authService;
        this.pageBuilderAddService = pageBuilderAddService;
        this.formStatus = 'FORM_RESPONSE_ATTACHMENTS_';
        this.sharedInfo = this.authService.getSharedMessage();
        this.pageId = this.sharedInfo?.pageId;
        this.responseId = this.sharedInfo?.id;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    ngOnInit() {
        if (this.responseId) {
            this.formStatus = `${this.formStatus}UPDATE`;
        }
        else {
            this.formStatus = `${this.formStatus}CREATE`;
        }
        this.uploadedFiles = [];
        if (this.sharedInfo?.attachmentdetails) {
            this.uploadedFiles = this.sharedInfo?.attachmentdetails;
        }
        if (this.responseId) {
            this.getAllAttachments();
        }
    }
    onUpload(event, upload) {
        let resID = '';
        if (this.responseId) {
            resID = `/${this.responseId}`;
        }
        let data;
        event.files.map(f => {
            data = {
                fileName: `${this.pageId}${resID}/${f.name}`,
                contentType: f.type,
                type: this.formStatus
            };
            this.pageBuilderAddService.getUploadKey(data).subscribe((res) => {
                const url = res.data;
                const uploadDetails = f;
                const type = f.type;
                const fileURL = res.data;
                this.uploadedFiles = [
                    {
                        name: f.name,
                        path: fileURL,
                        attachmenttype: f.type
                    }
                ];
                const fileInfo = {
                    type: this.formStatus,
                    formid: Number(this.pageId),
                    attachmentdetails: this.uploadedFiles
                };
                this.httpService.putUpload(url, uploadDetails, type).subscribe(() => {
                    this.alertService.success('Uploaded Successfully!');
                    this.isShow = true;
                    console.log(this.uploadedFiles);
                    this.value = fileInfo;
                    this.valueChange.emit(fileInfo);
                    this.formioEvent.emit({ eventName: 'customEvent', data: { value: { fileInfo }, type: 'fileUpload' } });
                    upload.clear();
                });
                this.authService.setSharedMessage(fileInfo);
            });
        });
    }
    getAllAttachments() {
        this.pageBuilderAddService.getFormResponseAttachment(this.pageId, this.responseId).subscribe(res => {
            const data = res['data'];
            const fileInfo = {
                type: this.formStatus,
                formid: Number(this.pageId),
                attachmentdetails: data
            };
            this.formioEvent.emit({ eventName: 'customEvent', data: { value: { fileInfo }, type: 'fileUpload' } });
            this.authService.setSharedMessage(fileInfo);
            this.uploadedFiles = data.map(f => {
                return {
                    name: f.name,
                    path: f.path,
                    attachmenttype: f.attachmenttype
                };
            });
        });
    }
    deleteAttachment(e) {
        this.isShow = false;
        const file = e;
        if (file?.id) {
            this.pageBuilderAddService.deleteFormResponseAttachment(file.id).subscribe(() => {
                this.alertService.success('Deleted successfully!');
            });
        }
        else {
            this.uploadedFiles = [];
        }
    }
    viewAttachment(file) {
        console.log(file);
        const fileURL = file.path;
        window.open(fileURL, '_blank');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FileUploadBasicComponent, deps: [{ token: DataStoreService }, { token: AlertService }, { token: AuthService }, { token: PageBuilderAddService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FileUploadBasicComponent, selector: "app-file-upload-basic", inputs: { value: "value", disabled: "disabled" }, outputs: { valueChange: "valueChange", formioEvent: "formioEvent" }, ngImport: i0, template: "<p-fileUpload\r\n  #fileUpload\r\n  mode=\"basic\"\r\n  name=\"demo[]\"\r\n  [customUpload]=\"true\"\r\n  chooseLabel=\"Upload\"\r\n  [maxFileSize]=\"1000000\"\r\n  [auto]=\"true\"\r\n  [disabled]=\"isShow\"\r\n  (uploadHandler)=\"onUpload($event, fileUpload)\">\r\n</p-fileUpload>\r\n\r\n<ng-container *ngIf=\"isShow\">\r\n  <p>{{ uploadedFiles?.name }}</p>\r\n  <p-button (click)=\"deleteAttachment(uploadedFiles)\"><em class=\"pi pi-trash\"></em></p-button>\r\n  <p-button (click)=\"viewAttachment(uploadedFiles)\"><em class=\"fa fa-eye\"></em></p-button>\r\n</ng-container>\r\n", styles: ["li{list-style:none}\n"], dependencies: [{ kind: "directive", type: i4$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i6$2.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "size", "style", "styleClass", "badgeClass", "ariaLabel"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "component", type: i7$4.FileUpload, selector: "p-fileUpload", inputs: ["name", "url", "method", "multiple", "accept", "disabled", "auto", "withCredentials", "maxFileSize", "invalidFileSizeMessageSummary", "invalidFileSizeMessageDetail", "invalidFileTypeMessageSummary", "invalidFileTypeMessageDetail", "invalidFileLimitMessageDetail", "invalidFileLimitMessageSummary", "style", "styleClass", "previewWidth", "chooseLabel", "uploadLabel", "cancelLabel", "chooseIcon", "uploadIcon", "cancelIcon", "showUploadButton", "showCancelButton", "mode", "headers", "customUpload", "fileLimit", "uploadStyleClass", "cancelStyleClass", "removeStyleClass", "chooseStyleClass", "files"], outputs: ["onBeforeUpload", "onSend", "onUpload", "onError", "onClear", "onRemove", "onSelect", "onProgress", "uploadHandler", "onImageError"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FileUploadBasicComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-file-upload-basic', template: "<p-fileUpload\r\n  #fileUpload\r\n  mode=\"basic\"\r\n  name=\"demo[]\"\r\n  [customUpload]=\"true\"\r\n  chooseLabel=\"Upload\"\r\n  [maxFileSize]=\"1000000\"\r\n  [auto]=\"true\"\r\n  [disabled]=\"isShow\"\r\n  (uploadHandler)=\"onUpload($event, fileUpload)\">\r\n</p-fileUpload>\r\n\r\n<ng-container *ngIf=\"isShow\">\r\n  <p>{{ uploadedFiles?.name }}</p>\r\n  <p-button (click)=\"deleteAttachment(uploadedFiles)\"><em class=\"pi pi-trash\"></em></p-button>\r\n  <p-button (click)=\"viewAttachment(uploadedFiles)\"><em class=\"fa fa-eye\"></em></p-button>\r\n</ng-container>\r\n", styles: ["li{list-style:none}\n"] }]
        }], ctorParameters: function () { return [{ type: DataStoreService }, { type: AlertService }, { type: AuthService }, { type: PageBuilderAddService }]; }, propDecorators: { value: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], disabled: [{
                type: Input
            }], formioEvent: [{
                type: Output
            }] } });

const COMPONENT_OPTIONS$4 = {
    type: 'basicfileupload',
    selector: 'app-basicfileupload',
    group: 'basic',
    title: 'Basic File Upload',
    icon: 'file'
};
function registerBasicFileUploadComponent(injector) {
    console.log('registerBasicFileUploadComponent called...');
    try {
        registerCustomFormioComponent(COMPONENT_OPTIONS$4, FileUploadBasicComponent, injector);
        console.log('Basic File Upload Component Registration Done');
    }
    catch (error) {
        console.log('Error is register Basic File upload component');
    }
}

class AttachmentsService {
    _storeservice;
    http;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.http = res['HTTPSERVICE'];
            }
        });
    }
    getAttachmentReferral(referralid) {
        return this.http.get(AttachmentConfig.EndPoint.Attachments.GetAttachmentReferral + '/' + referralid);
    }
    getCategoryLookup(name) {
        return this.http.get(AttachmentConfig.EndPoint.Attachments.GetCategoryLookup + '/' + name);
    }
    uploadKey(objparams) {
        return this.http.post(AttachmentConfig.EndPoint.Attachments.UploadKey, objparams);
    }
    downloadKey(objparams) {
        return this.http.post(AttachmentConfig.EndPoint.Attachments.DownloadKey, objparams);
    }
    postAttachment(objparams) {
        return this.http.post(AttachmentConfig.EndPoint.Attachments.PostAttachment, objparams);
    }
    putAttachment(objparams, attachmentId) {
        console.log(AttachmentConfig.EndPoint.Attachments.PutAttachment + '/' + attachmentId, objparams);
        return this.http.patch(AttachmentConfig.EndPoint.Attachments.PutAttachment + '/' + attachmentId, objparams);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AttachmentsService, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AttachmentsService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AttachmentsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

class FileUploadWrapperComponent {
    _storeservice;
    alertService;
    authService;
    pageBuilderAddService;
    confirmationService;
    attachmentsService;
    value;
    valueChange = new EventEmitter();
    disabled = false;
    formioEvent = new EventEmitter();
    uploadedFiles = [];
    formStatus;
    sharedInfo = {};
    pageId;
    responseId;
    uploadedFilesTest = [];
    tableColumns;
    updateGrid;
    categoryList = [];
    subCategoryList = [];
    category;
    subCategory;
    lookupList = [];
    categoryid;
    subcategoryid;
    httpService;
    constructor(_storeservice, alertService, authService, pageBuilderAddService, confirmationService, attachmentsService) {
        this._storeservice = _storeservice;
        this.alertService = alertService;
        this.authService = authService;
        this.pageBuilderAddService = pageBuilderAddService;
        this.confirmationService = confirmationService;
        this.attachmentsService = attachmentsService;
        this.formStatus = 'FORM_RESPONSE_ATTACHMENTS_';
        this.sharedInfo = this.authService.getSharedMessage();
        this.pageId = this.sharedInfo?.pageId;
        this.responseId = this.sharedInfo?.id;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    ngOnInit() {
        this.setTableColumns();
        this.getCategory();
        if (this.responseId) {
            this.formStatus = `${this.formStatus}UPDATE`;
        }
        else {
            this.formStatus = `${this.formStatus}CREATE`;
        }
        this.uploadedFiles = [];
        if (this.responseId) {
            this.getAllAttachments();
        }
    }
    onUpload(event, upload) {
        let resID = '';
        if (this.responseId) {
            resID = `/${this.responseId}`;
        }
        let data;
        event.files.map(f => {
            data = {
                fileName: `${this.pageId}${resID}/${f.name}`,
                contentType: f.type,
                type: this.formStatus
            };
            this.pageBuilderAddService.getUploadKey(data).subscribe((res) => {
                const url = res.data;
                const uploadDetails = f;
                const type = f.type;
                const fileURL = res.data.split('?')[0];
                this.uploadedFiles.push({
                    name: f.name,
                    path: fileURL,
                    attachmenttype: f.type,
                    category: this.categoryid[0].id,
                    subcategory: this.subcategoryid[0].id,
                    categoryName: this.category,
                    subcategoryName: this.subCategory
                });
                const fileInfo = {
                    type: this.formStatus,
                    formid: Number(this.pageId),
                    attachmentdetails: this.uploadedFiles
                };
                this.httpService.putUpload(url, uploadDetails, type).subscribe(() => {
                    this.alertService.success('Uploaded Successfully!');
                    this.value = fileInfo;
                    this.valueChange.emit(fileInfo);
                    this.formioEvent.emit({ eventName: 'customEvent', data: { value: { fileInfo }, type: 'fileUpload' } });
                    this.setTableColumns();
                    upload.clear();
                    this.subCategory = '';
                    this.category = '';
                });
                this.authService.setSharedMessage(fileInfo);
            });
        });
    }
    getAllAttachments() {
        this.pageBuilderAddService.getFormResponseAttachment(this.pageId, this.responseId).subscribe(res => {
            const data = res['data'];
            const fileInfo = {
                type: this.formStatus,
                formid: Number(this.pageId),
                attachmentdetails: data
            };
            this.authService.setSharedMessage(fileInfo);
            this.uploadedFiles = data.map(f => {
                return {
                    id: f.id,
                    name: f.name,
                    path: f.path,
                    categoryName: f.categoryDetails.key,
                    subcategoryName: f.subcategoryDetails.key,
                    attachmenttype: f.attachmenttype,
                    category: f.category,
                    subcategory: f.subcategory
                };
            });
        });
    }
    deleteAttachment(e) {
        const file = e?.data;
        if (file?.id) {
            this.pageBuilderAddService.deleteFormResponseAttachment(file.id).subscribe(() => {
                this.alertService.success('Deleted successfully!');
                this.getAllAttachments();
            });
        }
        else {
            this.uploadedFiles.forEach((f, i) => {
                if (f.path === file.path) {
                    this.uploadedFiles.splice(i, 1);
                    this.setTableColumns();
                }
            });
        }
    }
    downloadAttachment(event) {
        const path = event.data.path.split('/');
        const path1 = path.pop();
        const path2 = path.pop();
        const path3 = path.pop();
        const path4 = path.pop();
        const data = {
            fileName: `${path4}/${path3}/${path2}/${path1}`
        };
        this.pageBuilderAddService.downloadFormResponseAttachment(data).subscribe((res) => {
            if (res && res.status == 'success') {
                window.open(res.data, '_blank');
            }
        });
    }
    confirm(event) {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: () => {
                this.deleteAttachment(event);
            }
        });
    }
    setTableColumns() {
        this.tableColumns = [
            // {
            //   columnDef: 'id',
            //   header: 'Id',
            //   cell: (element: any) => `${element.id}`,
            //   dateFormat: false,
            //   icon: false,
            //   filter: false,
            //   link: false
            // },
            {
                columnDef: 'name',
                header: 'File Name',
                cell: (element) => console.log(element, 'elementssss'),
                dateFormat: false,
                icon: false,
                filter: false,
                link: false
            },
            {
                columnDef: 'categoryName',
                header: 'Category',
                dateFormat: false,
                icon: false,
                filter: false,
                link: false
            },
            {
                columnDef: 'subcategoryName',
                header: 'Sub Category',
                dateFormat: false,
                icon: false,
                filter: false,
                link: false
            },
            {
                columnDef: 'attachmenttype',
                header: 'Type',
                cell: (element) => `${element.type}`,
                dateFormat: false,
                icon: false,
                filter: false,
                link: false
            }
        ];
        this.updateGrid = {
            edit: false,
            view: false,
            lock: false,
            duplicate: false,
            delete: false,
            externalLink: false,
            showDownload: true,
            showDelete: true,
            isNewlyUploaded: this.responseId ? false : true
        };
    }
    getCategory() {
        const categoryname = 'DOCUMENT_LIST';
        this.attachmentsService.getCategoryLookup(categoryname).subscribe((res) => {
            this.lookupList = res.data;
            this.lookupList.map(z => {
                if (!z.parentid) {
                    this.categoryList.push(z);
                }
            });
        });
    }
    getSubCategory() {
        this.subcategoryid = this.subCategoryList.filter(e => e.lookupvalue === this.subCategory);
    }
    getCatogoryItem() {
        const data = this.lookupList.filter(x => x.lookupvalue === this.category);
        this.categoryid = data;
        this.subCategoryList = this.lookupList.filter(y => y.parentid === data[0].id);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FileUploadWrapperComponent, deps: [{ token: DataStoreService }, { token: AlertService }, { token: AuthService }, { token: PageBuilderAddService }, { token: i5$2.ConfirmationService }, { token: AttachmentsService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FileUploadWrapperComponent, selector: "app-file-upload-wrapper", inputs: { value: "value", disabled: "disabled" }, outputs: { valueChange: "valueChange", formioEvent: "formioEvent" }, providers: [ConfirmationService], ngImport: i0, template: "<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\r\n<p-fileUpload\r\n  #fileUpload\r\n  name=\"demo[]\"\r\n  [customUpload]=\"true\"\r\n  (uploadHandler)=\"onUpload($event, fileUpload)\"\r\n  [auto]=\"true\"\r\n  maxFileSize=\"1000000\"\r\n  multiple=\"multiple\"\r\n  [disabled]=\"!subCategory\">\r\n  <ng-template pTemplate=\"toolbar\">\r\n    <span class=\"d-flex fileUpload-category\">\r\n      <p-dropdown\r\n        [options]=\"categoryList\"\r\n        placeholder=\"Select Category\"\r\n        [(ngModel)]=\"category\"\r\n        optionLabel=\"lookupkey\"\r\n        optionValue=\"lookupvalue\"\r\n        (onChange)=\"getCatogoryItem()\"\r\n        styleClass=\"mr-2\">\r\n      </p-dropdown>\r\n      <p-dropdown\r\n        [options]=\"subCategoryList\"\r\n        placeholder=\"Select Subcategory\"\r\n        [(ngModel)]=\"subCategory\"\r\n        optionLabel=\"lookupkey\"\r\n        (onChange)=\"getSubCategory()\"\r\n        optionValue=\"lookupvalue\"\r\n        styleClass=\"mr-2\">\r\n      </p-dropdown>\r\n    </span>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"content\">\r\n    <p-card styleClass=\"rbac-card gridview w-100\" *ngIf=\"uploadedFiles.length\">\r\n      <app-grid-list\r\n        [dataList]=\"uploadedFiles\"\r\n        [updateGrid]=\"updateGrid\"\r\n        [columns]=\"tableColumns\"\r\n        (downloadFormResponseFiles)=\"downloadAttachment($event)\"\r\n        (deleteFormResponseFiles)=\"confirm($event)\">\r\n      </app-grid-list>\r\n    </p-card>\r\n  </ng-template>\r\n</p-fileUpload>\r\n", styles: [":root{--background-color: #f8f8f8;--navigation: #fff;--primary: #0D3178;--checkbox-border: #D6D5D5;--text-dark: #000;--label-text: #0D3178;--hover-text: #fff;--bg-light: #fff;--forms: #fff;--nav-text: #696969;--light-gray: #696969;--material-icons: #0D3178;--highlight-list: #e3f2fd;--table-header: #f9f9f9;--table-odd: #f7f7f7;--table-border: #ddd;--table-hover: #dbf6ff;--table-odd-color: #f2fcff;--btn: #0D3178;--menu-panel: #032361;--menu-level2: #28447E;--border-trans: transparent;--btn-hover: #1258A7;--btn-dark: #0D3178;--dropdown-list: #fff;--btncancel: #0D3178;--primary-light: #1258A7;--primary-dark: #0D3178;--light-d-light: #fff;--ldl-text: #fff;--light-d-accent: #fff;--header-bg: #f7f7f7;--secondary-color: #0D3178;--menu-link: #1258A7;--menu-highlight: #0084d1;--sumbmenu-selected: #0084D1;--profile-bg: #f3f9f9;--disabled: #7A8EB5;--accordion-header: #F5F5F5;--input-label: #1F1F1F;--input-field: #4C4C4C;--ghost: #A2A2A2;--table-label: #f1f1f1;--error-msg: #DC0404;--menu-hover: #1258A7;--var-icon-font: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;--rocket-icon: \"/assets/images/rocket-ship.svg\";--base-font-size: 16px;--font-11: 11px;--font-12: 12px;--font-13: 13px;--font-14: 14px;--font-15: 15px;--font-16: 16px;--font-17: 17px;--font-18: 18px;--font-19: 19px;--font-20: 20px;--font-21: 21px;--font-24: 24px;--font-26: 26px}:host ::ng-deep .p-fileupload{font-size:12px!important}:host ::ng-deep .p-fileupload .p-fileupload-choose{padding:5px 10px;font-size:12px!important}:host ::ng-deep .p-fileupload .p-fileupload-choose .pi-plus{font-size:12px!important}:host ::ng-deep .p-fileupload .p-fileupload-choose .pTemplate{padding:5px 10px}:host ::ng-deep .p-fileupload .p-fileupload-buttonbar{display:flex;flex-direction:row-reverse;justify-content:flex-start}:host ::ng-deep .fileUpload-category .p-dropdown{max-width:180px}:host ::ng-deep .fileUpload-category .p-dropdown .p-dropdown-empty-message{font-size:var(--base-font-size)}:host ::ng-deep .fileUpload-category .p-fileupload-buttonbar{display:flex;flex-direction:row-reverse;justify-content:flex-start}\n"], dependencies: [{ kind: "directive", type: i4$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i5$2.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "component", type: i9.Dropdown, selector: "p-dropdown", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }, { kind: "component", type: i10.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { kind: "component", type: i11.ConfirmDialog, selector: "p-confirmDialog", inputs: ["header", "icon", "message", "style", "styleClass", "maskStyleClass", "acceptIcon", "acceptLabel", "closeAriaLabel", "acceptAriaLabel", "acceptVisible", "rejectIcon", "rejectLabel", "rejectAriaLabel", "rejectVisible", "acceptButtonStyleClass", "rejectButtonStyleClass", "closeOnEscape", "dismissableMask", "blockScroll", "rtl", "closable", "appendTo", "key", "autoZIndex", "baseZIndex", "transitionOptions", "focusTrap", "defaultFocus", "breakpoints", "visible", "position"], outputs: ["onHide"] }, { kind: "component", type: i7$4.FileUpload, selector: "p-fileUpload", inputs: ["name", "url", "method", "multiple", "accept", "disabled", "auto", "withCredentials", "maxFileSize", "invalidFileSizeMessageSummary", "invalidFileSizeMessageDetail", "invalidFileTypeMessageSummary", "invalidFileTypeMessageDetail", "invalidFileLimitMessageDetail", "invalidFileLimitMessageSummary", "style", "styleClass", "previewWidth", "chooseLabel", "uploadLabel", "cancelLabel", "chooseIcon", "uploadIcon", "cancelIcon", "showUploadButton", "showCancelButton", "mode", "headers", "customUpload", "fileLimit", "uploadStyleClass", "cancelStyleClass", "removeStyleClass", "chooseStyleClass", "files"], outputs: ["onBeforeUpload", "onSend", "onUpload", "onError", "onClear", "onRemove", "onSelect", "onProgress", "uploadHandler", "onImageError"] }, { kind: "component", type: GridListComponent, selector: "app-grid-list", inputs: ["dataList", "dataSource", "columns", "updateGrid", "totalCount", "page", "isShow", "exportPageName"], outputs: ["currentPage", "editTableRow", "viewTableRow", "deleteTableRow", "openExternalLink", "openpopupLink", "routeTo", "openPopup", "sortOrder", "filterSearchValue", "filterBuilderPopup", "filterPanel", "multipleFilterValues", "downloadTableRow", "toggleRow", "duplicateRow", "viewVersions", "activateVersion", "activatePage", "deactivatePage", "duplicatePageVersion", "selectedRowsData"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FileUploadWrapperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-file-upload-wrapper', providers: [ConfirmationService], template: "<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\r\n<p-fileUpload\r\n  #fileUpload\r\n  name=\"demo[]\"\r\n  [customUpload]=\"true\"\r\n  (uploadHandler)=\"onUpload($event, fileUpload)\"\r\n  [auto]=\"true\"\r\n  maxFileSize=\"1000000\"\r\n  multiple=\"multiple\"\r\n  [disabled]=\"!subCategory\">\r\n  <ng-template pTemplate=\"toolbar\">\r\n    <span class=\"d-flex fileUpload-category\">\r\n      <p-dropdown\r\n        [options]=\"categoryList\"\r\n        placeholder=\"Select Category\"\r\n        [(ngModel)]=\"category\"\r\n        optionLabel=\"lookupkey\"\r\n        optionValue=\"lookupvalue\"\r\n        (onChange)=\"getCatogoryItem()\"\r\n        styleClass=\"mr-2\">\r\n      </p-dropdown>\r\n      <p-dropdown\r\n        [options]=\"subCategoryList\"\r\n        placeholder=\"Select Subcategory\"\r\n        [(ngModel)]=\"subCategory\"\r\n        optionLabel=\"lookupkey\"\r\n        (onChange)=\"getSubCategory()\"\r\n        optionValue=\"lookupvalue\"\r\n        styleClass=\"mr-2\">\r\n      </p-dropdown>\r\n    </span>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"content\">\r\n    <p-card styleClass=\"rbac-card gridview w-100\" *ngIf=\"uploadedFiles.length\">\r\n      <app-grid-list\r\n        [dataList]=\"uploadedFiles\"\r\n        [updateGrid]=\"updateGrid\"\r\n        [columns]=\"tableColumns\"\r\n        (downloadFormResponseFiles)=\"downloadAttachment($event)\"\r\n        (deleteFormResponseFiles)=\"confirm($event)\">\r\n      </app-grid-list>\r\n    </p-card>\r\n  </ng-template>\r\n</p-fileUpload>\r\n", styles: [":root{--background-color: #f8f8f8;--navigation: #fff;--primary: #0D3178;--checkbox-border: #D6D5D5;--text-dark: #000;--label-text: #0D3178;--hover-text: #fff;--bg-light: #fff;--forms: #fff;--nav-text: #696969;--light-gray: #696969;--material-icons: #0D3178;--highlight-list: #e3f2fd;--table-header: #f9f9f9;--table-odd: #f7f7f7;--table-border: #ddd;--table-hover: #dbf6ff;--table-odd-color: #f2fcff;--btn: #0D3178;--menu-panel: #032361;--menu-level2: #28447E;--border-trans: transparent;--btn-hover: #1258A7;--btn-dark: #0D3178;--dropdown-list: #fff;--btncancel: #0D3178;--primary-light: #1258A7;--primary-dark: #0D3178;--light-d-light: #fff;--ldl-text: #fff;--light-d-accent: #fff;--header-bg: #f7f7f7;--secondary-color: #0D3178;--menu-link: #1258A7;--menu-highlight: #0084d1;--sumbmenu-selected: #0084D1;--profile-bg: #f3f9f9;--disabled: #7A8EB5;--accordion-header: #F5F5F5;--input-label: #1F1F1F;--input-field: #4C4C4C;--ghost: #A2A2A2;--table-label: #f1f1f1;--error-msg: #DC0404;--menu-hover: #1258A7;--var-icon-font: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;--rocket-icon: \"/assets/images/rocket-ship.svg\";--base-font-size: 16px;--font-11: 11px;--font-12: 12px;--font-13: 13px;--font-14: 14px;--font-15: 15px;--font-16: 16px;--font-17: 17px;--font-18: 18px;--font-19: 19px;--font-20: 20px;--font-21: 21px;--font-24: 24px;--font-26: 26px}:host ::ng-deep .p-fileupload{font-size:12px!important}:host ::ng-deep .p-fileupload .p-fileupload-choose{padding:5px 10px;font-size:12px!important}:host ::ng-deep .p-fileupload .p-fileupload-choose .pi-plus{font-size:12px!important}:host ::ng-deep .p-fileupload .p-fileupload-choose .pTemplate{padding:5px 10px}:host ::ng-deep .p-fileupload .p-fileupload-buttonbar{display:flex;flex-direction:row-reverse;justify-content:flex-start}:host ::ng-deep .fileUpload-category .p-dropdown{max-width:180px}:host ::ng-deep .fileUpload-category .p-dropdown .p-dropdown-empty-message{font-size:var(--base-font-size)}:host ::ng-deep .fileUpload-category .p-fileupload-buttonbar{display:flex;flex-direction:row-reverse;justify-content:flex-start}\n"] }]
        }], ctorParameters: function () { return [{ type: DataStoreService }, { type: AlertService }, { type: AuthService }, { type: PageBuilderAddService }, { type: i5$2.ConfirmationService }, { type: AttachmentsService }]; }, propDecorators: { value: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], disabled: [{
                type: Input
            }], formioEvent: [{
                type: Output
            }] } });

const COMPONENT_OPTIONS$3 = {
    type: 'fileupload',
    selector: 'app-fileupload',
    group: 'basic',
    title: 'File Upload',
    icon: 'file'
};
function registerFileUploadComponent(injector) {
    console.log('registerFileUploadComponent called...');
    try {
        registerCustomFormioComponent(COMPONENT_OPTIONS$3, FileUploadWrapperComponent, injector);
        console.log('File Upload Component Registration Done');
    }
    catch (error) {
        console.log('Error is register File upload component');
    }
}

class GlobalSearchWrapperComponent {
    _storeservice;
    value;
    valueChange = new EventEmitter();
    disabled = false;
    schema;
    table;
    columns;
    responseColumns;
    formioEvent = new EventEmitter();
    searchInput;
    searchResults = [];
    columnHeaders = [];
    cols = [];
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    ngOnInit() {
        console.log('should not be empty');
    }
    searchElement() {
        this.cols = [];
        const search = {
            schema: this.schema,
            table: this.table,
            columns: this.columns,
            value: this.searchInput,
            responseColumns: this.responseColumns
        };
        this.httpService.post('/commonsearch', search).subscribe((res) => {
            this.searchResults = res.data;
            this.columnHeaders = Object.keys(res.data[0]);
            this.columnHeaders.map(h => {
                this.cols.push({ field: h, header: h });
            });
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GlobalSearchWrapperComponent, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: GlobalSearchWrapperComponent, selector: "app-global-search-wrapper", inputs: { value: "value", disabled: "disabled", schema: "schema", table: "table", columns: "columns", responseColumns: "responseColumns" }, outputs: { valueChange: "valueChange", formioEvent: "formioEvent" }, ngImport: i0, template: "<div>\r\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchInput\" (change)=\"searchElement()\" />\r\n  <div class=\"card w-100\" *ngIf=\"searchResults.length\">\r\n    <p-table\r\n      responsiveLayout=\"scroll\"\r\n      [value]=\"searchResults\"\r\n      [columns]=\"cols\"\r\n      [reorderableColumns]=\"true\"\r\n      [paginator]=\"true\"\r\n      [rows]=\"5\"\r\n      [showCurrentPageReport]=\"true\"\r\n      currentPageReportTemplate=\"Showing {first} to {last} of {totalRecords} entries\">\r\n      <ng-template pTemplate=\"header\" let-columns>\r\n        <tr>\r\n          <th scope=\"col\" *ngFor=\"let col of columns\" class=\"search-header\">\r\n            {{ col.header }}\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n        <tr>\r\n          <td *ngFor=\"let col of columns\">\r\n            {{ rowData[col.field] }}\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n</div>\r\n", styles: [".search-header{text-transform:uppercase}\n"], dependencies: [{ kind: "directive", type: i4$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i5$2.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "component", type: i5$3.Table, selector: "p-table", inputs: ["frozenColumns", "frozenValue", "style", "styleClass", "tableStyle", "tableStyleClass", "paginator", "pageLinks", "rowsPerPageOptions", "alwaysShowPaginator", "paginatorPosition", "paginatorStyleClass", "paginatorDropdownAppendTo", "paginatorDropdownScrollHeight", "currentPageReportTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showJumpToPageInput", "showFirstLastIcon", "showPageLinks", "defaultSortOrder", "sortMode", "resetPageOnSort", "selectionMode", "selectionPageOnly", "contextMenuSelection", "contextMenuSelectionMode", "dataKey", "metaKeySelection", "rowSelectable", "rowTrackBy", "lazy", "lazyLoadOnInit", "compareSelectionBy", "csvSeparator", "exportFilename", "filters", "globalFilterFields", "filterDelay", "filterLocale", "expandedRowKeys", "editingRowKeys", "rowExpandMode", "scrollable", "scrollDirection", "rowGroupMode", "scrollHeight", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "virtualScrollDelay", "frozenWidth", "responsive", "contextMenu", "resizableColumns", "columnResizeMode", "reorderableColumns", "loading", "loadingIcon", "showLoader", "rowHover", "customSort", "showInitialSortBadge", "autoLayout", "exportFunction", "exportHeader", "stateKey", "stateStorage", "editMode", "groupRowsBy", "groupRowsByOrder", "responsiveLayout", "breakpoint", "paginatorLocale", "value", "columns", "first", "rows", "totalRecords", "sortField", "sortOrder", "multiSortMeta", "selection", "selectAll", "virtualRowHeight"], outputs: ["contextMenuSelectionChange", "selectAllChange", "selectionChange", "onRowSelect", "onRowUnselect", "onPage", "onSort", "onFilter", "onLazyLoad", "onRowExpand", "onRowCollapse", "onContextMenuSelect", "onColResize", "onColReorder", "onRowReorder", "onEditInit", "onEditComplete", "onEditCancel", "onHeaderCheckboxToggle", "sortFunction", "firstChange", "rowsChange", "onStateSave", "onStateRestore"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GlobalSearchWrapperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-global-search-wrapper', template: "<div>\r\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchInput\" (change)=\"searchElement()\" />\r\n  <div class=\"card w-100\" *ngIf=\"searchResults.length\">\r\n    <p-table\r\n      responsiveLayout=\"scroll\"\r\n      [value]=\"searchResults\"\r\n      [columns]=\"cols\"\r\n      [reorderableColumns]=\"true\"\r\n      [paginator]=\"true\"\r\n      [rows]=\"5\"\r\n      [showCurrentPageReport]=\"true\"\r\n      currentPageReportTemplate=\"Showing {first} to {last} of {totalRecords} entries\">\r\n      <ng-template pTemplate=\"header\" let-columns>\r\n        <tr>\r\n          <th scope=\"col\" *ngFor=\"let col of columns\" class=\"search-header\">\r\n            {{ col.header }}\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n        <tr>\r\n          <td *ngFor=\"let col of columns\">\r\n            {{ rowData[col.field] }}\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n</div>\r\n", styles: [".search-header{text-transform:uppercase}\n"] }]
        }], ctorParameters: function () { return [{ type: DataStoreService }]; }, propDecorators: { value: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], disabled: [{
                type: Input
            }], schema: [{
                type: Input
            }], table: [{
                type: Input
            }], columns: [{
                type: Input
            }], responseColumns: [{
                type: Input
            }], formioEvent: [{
                type: Output
            }] } });

// import { environment } from '@env/environment';
const COMPONENT_OPTIONS$2 = {
    type: 'globalsearch',
    selector: 'app-globalserach',
    title: 'Global Search',
    group: 'basic',
    icon: 'fa fa-search',
    editForm: globalSearchForm,
    fieldOptions: ['schema', 'table', 'columns', 'responseColumns', 'label']
};
function globalSearchForm() {
    const oid = sessionStorage.getItem('orgid');
    const environment = {};
    console.log(oid);
    return {
        components: [
            {
                key: 'type',
                type: 'hidden'
            },
            {
                weight: 0,
                type: 'textfield',
                input: true,
                key: 'label',
                label: 'Label',
                placeholder: 'Label',
                validate: {
                    required: true
                }
            },
            {
                weight: 10,
                label: 'Schema',
                widget: 'choicesjs',
                tableView: true,
                dataSrc: 'url',
                data: {
                    url: `${environment.apiHost}/commonsearch/schemas/${oid}`,
                    headers: [
                        {
                            key: 'authorization',
                            value: 'Bearer {{sessionStorage.getItem(\'jwt-token\').toString()}}'
                        }
                    ]
                },
                valueProperty: 'name',
                template: '<span>{{ item.name }}</span>',
                key: 'schema',
                type: 'select',
                input: true,
                selectValues: 'data',
                disableLimit: false,
                placeholder: 'Select Schema',
                validate: {
                    required: false
                }
            },
            {
                weight: 10,
                label: 'Tables',
                widget: 'choicesjs',
                tableView: true,
                dataSrc: 'url',
                data: {
                    url: `${environment.apiHost}/commonsearch/tables/{{data[\'schema\']}}`,
                    headers: [
                        {
                            key: 'authorization',
                            value: 'Bearer {{sessionStorage.getItem(\'jwt-token\').toString()}}'
                        }
                    ]
                },
                valueProperty: 'name',
                template: '<span>{{ item.name }}</span>',
                refreshOn: 'schema',
                key: 'table',
                type: 'select',
                input: true,
                selectValues: 'data',
                disableLimit: false,
                placeholder: 'Select Table',
                validate: {
                    required: false
                }
            },
            {
                weight: 10,
                label: 'Columns',
                widget: 'choicesjs',
                tableView: true,
                multiple: true,
                dataSrc: 'url',
                data: {
                    url: `${environment.apiHost}/commonsearch/columns/{{data[\'table\']}}/{{data[\'schema\']}}`,
                    headers: [
                        {
                            key: 'authorization',
                            value: 'Bearer {{sessionStorage.getItem(\'jwt-token\').toString()}}'
                        }
                    ]
                },
                valueProperty: 'name',
                template: '<span>{{ item.name }}</span>',
                refreshOn: 'table',
                key: 'columns',
                type: 'select',
                selectValues: 'data',
                disableLimit: false,
                input: true,
                placeholder: 'Select columns',
                validate: {
                    required: false
                }
            },
            {
                weight: 10,
                label: 'Response Columns',
                widget: 'choicesjs',
                tableView: true,
                multiple: true,
                dataSrc: 'url',
                data: {
                    url: `${environment.apiHost}/commonsearch/columns/{{data[\'table\']}}/{{data[\'schema\']}}`,
                    headers: [
                        {
                            key: 'authorization',
                            value: 'Bearer {{sessionStorage.getItem(\'jwt-token\').toString()}}'
                        }
                    ]
                },
                valueProperty: 'name',
                template: '<span>{{ item.name }}</span>',
                refreshOn: 'table',
                key: 'responseColumns',
                type: 'select',
                selectValues: 'data',
                disableLimit: false,
                input: true,
                placeholder: 'Select Response Columns',
                validate: {
                    required: false
                }
            },
            {
                weight: 10,
                type: 'textfield',
                input: true,
                key: 'key',
                label: 'API Key',
                placeholder: 'Field Code',
                tooltip: 'The code/key/ID/name of the field.',
                validate: {
                    required: true,
                    maxLength: 128,
                    pattern: '[A-Za-z]\\w*',
                    patternMessage: 'The property name must only contain alphanumeric characters, underscores and should only be started by any letter character.'
                }
            }
        ]
    };
}
function registerGlobalSearchComponent(injector) {
    console.log('Register global search component called...');
    try {
        registerCustomFormioComponent(COMPONENT_OPTIONS$2, GlobalSearchWrapperComponent, injector);
        console.log('Global search component registered');
    }
    catch (error) {
        console.log(error, 'Error in registering Global Search');
    }
}

class PopupWrapperComponent {
    value;
    valueChange = new EventEmitter();
    disabled;
    display = false;
    toggleDisplay() {
        console.log('changing display value ', this.display, 'to', !this.display);
        this.display = !this.display;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PopupWrapperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: PopupWrapperComponent, selector: "app-popup-wrapper", inputs: { value: "value", disabled: "disabled" }, outputs: { valueChange: "valueChange" }, ngImport: i0, template: "<div>\r\n  <div *ngIf=\"display\" class=\"overlay\">\r\n    <div id=\"myModal\" class=\"modal\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"text-right modal-close\">\r\n          <span class=\"close\" (click)=\"toggleDisplay()\">&times;</span>\r\n        </div>\r\n        <p>Confirm changes?</p>\r\n        <div class=\"modal-action-button-container text-right\">\r\n          <button class=\"btn btn-cancel mr-2\" type=\"button\" (click)=\"toggleDisplay()\">No</button>\r\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"toggleDisplay()\">Yes</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <button class=\"btn btn-pri\" type=\"button\" (click)=\"toggleDisplay()\">Popup</button>\r\n</div>\r\n", styles: [".modal-action-button{width:100px;margin:15px}#myModal{display:block}.modal-content{background-color:#fefefe;margin:auto;padding:10px;border:1px solid #888}.modal-action-button-container{display:inline}.close{font-size:19px!important;position:absolute;top:20px;right:30px;transition:all .2s;font-weight:700;text-decoration:none;color:#333;opacity:.7}.close:hover,.close:focus{text-decoration:none;cursor:pointer}.modal-close{margin-bottom:30px}.overlay{position:fixed;inset:0;background:#0000008f;transition:opacity .5s;z-index:1000}.overlay:target{visibility:visible;opacity:1}.modal{display:block;top:30%;margin:70px auto;width:30%;position:relative;transition:all 5s ease-in-out}p{text-align:center;font-weight:600;margin:20px 0}\n"], dependencies: [{ kind: "directive", type: i4$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PopupWrapperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-popup-wrapper', template: "<div>\r\n  <div *ngIf=\"display\" class=\"overlay\">\r\n    <div id=\"myModal\" class=\"modal\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"text-right modal-close\">\r\n          <span class=\"close\" (click)=\"toggleDisplay()\">&times;</span>\r\n        </div>\r\n        <p>Confirm changes?</p>\r\n        <div class=\"modal-action-button-container text-right\">\r\n          <button class=\"btn btn-cancel mr-2\" type=\"button\" (click)=\"toggleDisplay()\">No</button>\r\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"toggleDisplay()\">Yes</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <button class=\"btn btn-pri\" type=\"button\" (click)=\"toggleDisplay()\">Popup</button>\r\n</div>\r\n", styles: [".modal-action-button{width:100px;margin:15px}#myModal{display:block}.modal-content{background-color:#fefefe;margin:auto;padding:10px;border:1px solid #888}.modal-action-button-container{display:inline}.close{font-size:19px!important;position:absolute;top:20px;right:30px;transition:all .2s;font-weight:700;text-decoration:none;color:#333;opacity:.7}.close:hover,.close:focus{text-decoration:none;cursor:pointer}.modal-close{margin-bottom:30px}.overlay{position:fixed;inset:0;background:#0000008f;transition:opacity .5s;z-index:1000}.overlay:target{visibility:visible;opacity:1}.modal{display:block;top:30%;margin:70px auto;width:30%;position:relative;transition:all 5s ease-in-out}p{text-align:center;font-weight:600;margin:20px 0}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], disabled: [{
                type: Input
            }] } });

const COMPONENT_OPTIONS$1 = {
    type: 'mypopup',
    selector: 'my-popup',
    title: 'Popup',
    group: 'basic',
    icon: 'calendar'
};
function registerPopupComponent(injector) {
    console.log('registerPopupComponent called...');
    try {
        registerCustomFormioComponent(COMPONENT_OPTIONS$1, PopupWrapperComponent, injector);
    }
    catch (err) {
        console.error('error occ in registercomp', err);
    }
}

class RatingWrapperComponent {
    value;
    valueChange = new EventEmitter();
    disabled;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RatingWrapperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: RatingWrapperComponent, selector: "app-rating-wrapper", inputs: { value: "value", disabled: "disabled" }, outputs: { valueChange: "valueChange" }, ngImport: i0, template: "<ngb-rating [(rate)]=\"value\" (rateChange)=\"valueChange.emit($event)\" [readonly]=\"disabled\"></ngb-rating>\r\n", styles: ["li{list-style:none}\n"], dependencies: [{ kind: "component", type: i1$3.NgbRating, selector: "ngb-rating", inputs: ["max", "rate", "readonly", "resettable", "starTemplate"], outputs: ["hover", "leave", "rateChange"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RatingWrapperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-rating-wrapper', template: "<ngb-rating [(rate)]=\"value\" (rateChange)=\"valueChange.emit($event)\" [readonly]=\"disabled\"></ngb-rating>\r\n", styles: ["li{list-style:none}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], disabled: [{
                type: Input
            }] } });

const COMPONENT_OPTIONS = {
    type: 'myrating',
    selector: 'my-rating',
    title: 'Rating',
    group: 'basic',
    icon: 'fa fa-star'
    // editForm: minimalEditForm,
    // template: 'dateTime'
};
function _minimalEditForm() {
    return {
        components: [
            { key: 'type', type: 'hidden' },
            {
                weight: 0,
                type: 'textfield',
                input: true,
                key: 'label',
                label: 'Label',
                placeholder: 'Label',
                validate: {
                    required: true
                }
            },
            {
                weight: 10,
                type: 'textfield',
                input: true,
                key: 'key',
                label: 'Field Code',
                placeholder: 'Field Code',
                tooltip: 'The code/key/ID/name of the field.',
                validate: {
                    required: true,
                    maxLength: 128,
                    pattern: '[A-Za-z]\\w*',
                    patternMessage: 'The property name must only contain alphanumeric characters, underscores and should only be started by any letter character.'
                }
            },
            {
                weight: 20,
                type: 'textfield',
                input: true,
                key: 'customOptions.myOption',
                label: 'My Custom Option',
                placeholder: 'My Custom Option',
                validate: {
                    required: true
                }
            }
        ]
    };
}
function registerRatingComponent(injector) {
    console.log('registerPopupComponent called...');
    try {
        registerCustomFormioComponent(COMPONENT_OPTIONS, RatingWrapperComponent, injector);
        console.log('registerPopupComponent complete...');
    }
    catch (err) {
        console.error('error occ in registercomp', err);
    }
}

class PicsPagebuilderModule {
    constructor(injector) {
        registerPopupComponent(injector);
        registerDateRangeComponent(injector);
        registerRatingComponent(injector);
        registerFileUploadComponent(injector);
        registerGlobalSearchComponent(injector);
        registerBasicFileUploadComponent(injector);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsPagebuilderModule, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: PicsPagebuilderModule, declarations: [PageBuilderComponent,
            PageBuilderViewComponent,
            PageBuilderVersionComponent], imports: [CommonModule,
            PrimengModule,
            NgbModule,
            FormioModule,
            FormsModule,
            ReactiveFormsModule,
            MaterialUIModule,
            DxListModule,
            SharedPipesModule,
            GridListModule,
            DirectivesModule,
            PanelModule,
            TreeSelectModule,
            DragDropModule,
            AutoCompleteModule,
            AlertModule], exports: [PageBuilderComponent, PageBuilderViewComponent,
            PageBuilderVersionComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsPagebuilderModule, providers: [
            {
                provide: STEPPER_GLOBAL_OPTIONS,
                useValue: { displayDefaultIndicatorType: false }
            },
            AlertService,
            AuthService,
            HttpClient,
            AuthStore,
        ], imports: [CommonModule,
            PrimengModule,
            NgbModule,
            FormioModule,
            FormsModule,
            ReactiveFormsModule,
            MaterialUIModule,
            DxListModule,
            SharedPipesModule,
            GridListModule,
            DirectivesModule,
            PanelModule,
            TreeSelectModule,
            DragDropModule,
            AutoCompleteModule,
            AlertModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsPagebuilderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PageBuilderComponent,
                        PageBuilderViewComponent,
                        PageBuilderVersionComponent
                    ],
                    imports: [
                        CommonModule,
                        PrimengModule,
                        NgbModule,
                        FormioModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MaterialUIModule,
                        DxListModule,
                        SharedPipesModule,
                        GridListModule,
                        DirectivesModule,
                        PanelModule,
                        TreeSelectModule,
                        DragDropModule,
                        AutoCompleteModule,
                        AlertModule
                    ],
                    exports: [PageBuilderComponent, PageBuilderViewComponent,
                        PageBuilderVersionComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
                    providers: [
                        {
                            provide: STEPPER_GLOBAL_OPTIONS,
                            useValue: { displayDefaultIndicatorType: false }
                        },
                        AlertService,
                        AuthService,
                        HttpClient,
                        AuthStore,
                    ],
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });

class CardiPageBuilderModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardiPageBuilderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: CardiPageBuilderModule, declarations: [PageBuilderAddComponent], imports: [PicsPagebuilderModule,
            PagebuilderRoutingModule,
            GridListModule,
            FormioModule], exports: [PageBuilderAddComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardiPageBuilderModule, providers: [
            {
                provide: STEPPER_GLOBAL_OPTIONS,
                useValue: { displayDefaultIndicatorType: false }
            },
            AlertService,
            AuthService,
            HttpClient,
            AuthStore
        ], imports: [PicsPagebuilderModule,
            PagebuilderRoutingModule,
            GridListModule,
            FormioModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardiPageBuilderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PageBuilderAddComponent,
                    ],
                    imports: [
                        PicsPagebuilderModule,
                        PagebuilderRoutingModule,
                        GridListModule,
                        FormioModule
                    ],
                    exports: [
                        PageBuilderAddComponent,
                    ],
                    providers: [
                        {
                            provide: STEPPER_GLOBAL_OPTIONS,
                            useValue: { displayDefaultIndicatorType: false }
                        },
                        AlertService,
                        AuthService,
                        HttpClient,
                        AuthStore
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
                }]
        }] });

/*
 * Public API Surface of page-builder
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AuthService as A, CommonUrlConfig as C, DataStoreService as D, FileUploadWrapperComponent as F, GlobalSearchWrapperComponent as G, LocalService as L, MaterialUIModule as M, PageBuilderAddService as P, RibbonDesignPageComponent as R, ShowFieldDirective as S, AppConstants as a, AlertService as b, PermissionDirective as c, PageBuilderService as d, PageBuilderService$1 as e, PageAccessService as f, PageBuilderAddURL as g, PermissionStore as h, registerDateRangeComponent as i, registerRatingComponent as j, registerFileUploadComponent as k, registerGlobalSearchComponent as l, registerBasicFileUploadComponent as m, PopupWrapperComponent as n, DateRangeWrapperComponent as o, RatingWrapperComponent as p, FileUploadBasicComponent as q, registerPopupComponent as r, SharedPipesModule as s, PrimengModule as t, GridListModule as u, DirectivesModule as v, PageBuilderAddComponent as w, CardiPageBuilderModule as x };
//# sourceMappingURL=pics-module-page-builder-pics-module-page-builder-05bdd017.mjs.map
