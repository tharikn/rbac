import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule, EventEmitter, Optional, Inject, ViewChild, Output, HostListener, Directive, Pipe, ViewChildren, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BehaviorSubject, of, Subject, Observable, forkJoin, combineLatest } from 'rxjs';
import * as i6 from '@angular/common';
import { CommonModule, Location } from '@angular/common';
import * as i1 from '@angular/router';
import { NavigationStart, RoutesRecognized, RouterModule, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/map';
import * as i1$2 from 'ngxf-uploader';
import { NgxfUploaderService, NgxfUploaderModule } from 'ngxf-uploader';
import * as i19 from 'primeng/accordion';
import { AccordionModule } from 'primeng/accordion';
import * as i4 from 'primeng/tabmenu';
import { TabMenuModule } from 'primeng/tabmenu';
import { MessageModule } from 'primeng/message';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import * as i22 from 'primeng/dropdown';
import { DropdownModule } from 'primeng/dropdown';
import * as i23 from 'primeng/inputtextarea';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from 'primeng/inputmask';
import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MultiSelectModule, MultiSelect } from 'primeng/multiselect';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TreeSelectModule } from 'primeng/treeselect';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SpeedDialModule } from 'primeng/speeddial';
import { OrderListModule } from 'primeng/orderlist';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { PasswordModule } from 'primeng/password';
import { KnobModule } from 'primeng/knob';
import { TabViewModule } from 'primeng/tabview';
import { SidebarModule } from 'primeng/sidebar';
import * as i7 from '@formio/angular';
import { FormioModule, CustomTagsService } from '@formio/angular';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import * as _ from 'lodash';
import * as moment from 'moment';
import * as i1$1 from '@angular/common/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { map, tap, mergeMap, filter, pairwise, takeUntil, switchMap } from 'rxjs/operators';
import * as i20 from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import * as i2 from '@angular/forms';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i15 from 'devextreme-angular';
import { DxDataGridComponent, DxDataGridModule, DxSelectBoxModule, DxCheckBoxModule } from 'devextreme-angular';
import * as i18 from 'ng-dynamic-component';
import { DynamicModule as DynamicModule$1 } from 'ng-dynamic-component';
import * as i3 from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import CustomStore from 'devextreme/data/custom_store';
import { exportDataGrid } from 'devextreme/pdf_exporter';
import * as jsPDF from 'jspdf';
import * as es6printJS from 'print-js';
import * as i7$1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i9 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i10 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i11 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i12 from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import * as i13 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i16 from 'devextreme-angular/ui/nested';
import * as i17 from 'devextreme-angular/core';
import * as i21 from 'primeng/tooltip';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i12$1 from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import * as i11$1 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import * as i1$4 from 'ngx-mask';
import { NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import * as i1$3 from '@angular/platform-browser';

class DynamicService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class RoleConfig {
    static EndPoint = {
        role: {
            getAllUserRole: '/access-control/role',
            createRole: '/access-control/role/create',
            getLandingPage: '/platform/menu/application',
            addPolicyGroup: '/access-control/role',
            getAllOrgRole: '/access-control/role/organization/{orgid}',
            dossier: '/dossier'
        }
    };
}
class UserConfig {
    static EndPoint = {
        User: {
            getAllUserList: '/org/user',
            getAllUserActiveInactive: '/org/user?includeInactiveUsers=true',
            activateUser: '/org/user/activate',
            createUser: '/org/user/create',
            userRole: '/org/user/role',
            managementgroup: '/org/team/managementgroup',
            getAllUserOrgList: '/org/user/organization/'
        },
        Provider: {
            getProviderList: '/ref/provider',
            searchProviderList: '/ref/provider/search',
            addProviderUser: '/ref/provider/create/account'
        }
    };
}
let AttachmentConfig$1 = class AttachmentConfig {
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
};
class PolicyGroupConfig {
    static EndPoint = {
        policyGroup: {
            getPolicyGroupList: '/platform/page-designer/policyGroup',
            getAllPolicyGroupList: '/platform/page-designer/policyGroup/all',
            createPolicyGroup: '/platform/page-designer/policyGroup',
            getOrgPolicyGroups: '/platform/page-designer/policyGroup/organization/{organizationid}'
        }
    };
}
class PermissionsURL {
    static EndPoints = {
        permission: {
            permissionRoleById: '/access-control/permission/role/{id}',
            pagePermission: '/access-control/permission/page',
            getPermission: '/access-control/permission/{id}',
            createPermission: '/access-control/permission/create',
            updateDeletePermission: '/access-control/permission/{permissionid}',
            getPermissionTree: '/access-control/permission/page/{pageid}/{parentid}',
            getPermissionTypes: '/access-control/permission/type/{applicationid}',
            applicationPermissionsTree: '/access-control/permission/application/{applicationid}'
        },
        page: {
            createPage: '/platform/menu/create',
            updateDeletePage: '/platform/menu/{pageid}',
            AllPageTree: '/platform/menu/tree/{applicationid}'
        }
    };
}
// export class AccessManagementConfig {
//   public static EndPoint = {
//     Organization: {
//       getOrganizationList: '/org/organization/all',
//       getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
//     }
//   };
// }
let AccessManagementConfig$1 = class AccessManagementConfig {
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
            getRoleAsset: '/platform/page-designer/asset/getRoleAssets/',
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
};
let RBACINFO$1 = class RBACINFO {
    apiHost = '';
    tokenKey = '';
    others;
    orgID;
    environment;
};
let Environment$1 = class Environment {
    mstrUsername;
    mstrPassword;
    mstrURL;
    mstrProjectID;
    applicationid;
    priority;
};

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
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionStore });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionStore, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class DataStoreService {
    currentStoreSubject = new BehaviorSubject({});
    currentStore = this.currentStoreSubject.asObservable();
    constructor() {
        // test code
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
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataStoreService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataStoreService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class DynamicComponent {
    permissionStore;
    _storeservice;
    RBACORG = new RBACINFO$1();
    PERMISSION;
    tabEvent;
    constructor(permissionStore, _storeservice) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
    }
    ngOnInit() {
        this.tabEvent.subscribe(val => {
            this.RBACORG = val.RBACORG;
            this.PERMISSION = val.PERMISSION;
            this._storeservice.setData('RBACORG', this.RBACORG);
            this.permissionStore.setStore(this.PERMISSION);
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicComponent, deps: [{ token: PermissionStore }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DynamicComponent, selector: "lib-dynamic", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", tabEvent: "tabEvent" }, ngImport: i0, template: `
     
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-dynamic', template: `
     
  ` }]
        }], ctorParameters: function () { return [{ type: PermissionStore }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], tabEvent: [{
                type: Input
            }] } });

var AlertType$1;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType$1 || (AlertType$1 = {}));
let Alert$1 = class Alert {
    type;
    message;
};
let UserGroupDto$1 = class UserGroupDto {
    id;
    name;
    description;
    constructor(data) {
        Object.assign(this, data);
    }
};
let UserRolePageDto$1 = class UserRolePageDto {
    id;
    name;
    route;
    icon;
    order;
    ismenu;
    constructor(data) {
        Object.assign(this, data);
    }
};
let UserRoleDto$1 = class UserRoleDto {
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
};
let UserDto$1 = class UserDto {
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
};

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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });
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
class AccessManagementConfig {
    static EndPoint = {
        Organization: {
            getOrganizationList: '/org/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        }
    };
}

const DISPLAY_IN_SECONDS = 8;
class AlertComponent {
    alertService;
    alerts = [];
    constructor(alertService) {
        this.alertService = alertService;
        // This is intentional
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
            case AlertType$1.Success:
                return 'alert alert-success';
            case AlertType$1.Error:
                return 'alert alert-danger';
            case AlertType$1.Info:
                return 'alert alert-info';
            case AlertType$1.Warning:
                return 'alert alert-warning';
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertComponent, deps: [{ token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AlertComponent, selector: "app-alert", ngImport: i0, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], dependencies: [{ kind: "directive", type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-alert', template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"] }]
        }], ctorParameters: function () { return [{ type: AlertService }]; } });

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

class SpeechRecognitionService {
    zone;
    speechRecognition;
    constructor(zone) {
        this.zone = zone;
        // This is intentional
    }
    record() {
        return new Observable(observer => {
            const { webkitSpeechRecognition } = window;
            this.speechRecognition = new webkitSpeechRecognition();
            this.speechRecognition.continuous = true;
            this.speechRecognition.lang = 'en-us';
            this.speechRecognition.maxAlternatives = 1;
            this.speechRecognition.onresult = speech => {
                let term = '';
                if (speech.results) {
                    const result = speech.results[speech.resultIndex];
                    const transcript = result[0].transcript;
                    if (result.isFinal) {
                        term = _.trim(transcript);
                        console.log('Did you said? -> ' + term + ' , If not then say something else...');
                    }
                }
                this.zone.run(() => {
                    observer.next(term);
                });
            };
            this.speechRecognition.onerror = error => {
                observer.error(error);
            };
            this.speechRecognition.onend = () => {
                observer.complete();
            };
            this.speechRecognition.start();
            console.log('Say something - We are listening !!!');
        });
    }
    destroySpeechObject() {
        if (this.speechRecognition) {
            this.speechRecognition.stop();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SpeechRecognitionService, deps: [{ token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SpeechRecognitionService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SpeechRecognitionService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.NgZone }]; } });

class OCRService {
    listener = new Subject();
    FormIncrementer = 0;
    ocrIncrementer = 0;
    textractInput;
    // cloud_service_base_url = environment.cloud_service_base_url;
    constructor() {
        // This is intentional
    }
    sendResponse(message) {
        this.listener.next(message);
    }
    clearResponse() {
        this.listener.next();
    }
    getResponse() {
        return this.listener.asObservable();
    }
    sendForDoucumentAnalysis(_s3_bucket_path) {
        // This is intentional
    }
    prepare_form_data(ocrResponse, formioInputs) {
        const formData = {};
        if (ocrResponse && ocrResponse.forms) {
            const ocrforms = ocrResponse.forms;
            const formLength = formioInputs.length;
            let loopContinue = true;
            while (loopContinue) {
                const selectedInput = formioInputs[this.FormIncrementer];
                this.textractInput = ocrforms[this.ocrIncrementer];
                this.conditionSelectedInput(selectedInput, formData, ocrforms);
                if (formLength <= this.FormIncrementer) {
                    loopContinue = false;
                }
            }
        }
        return formData;
    }
    conditionSelectedInput(selectedInput, formData, ocrforms) {
        if (selectedInput.label.trim() == this.textractInput.label.trim()) {
            formData[selectedInput.key] = this.textractInput.value;
            this.FormIncrementer++;
            this.ocrIncrementer++;
        }
        else if ((selectedInput.type == 'radio' || selectedInput.type == 'selectboxes') &&
            (this.textractInput.value == 'SELECTED' || this.textractInput.value == 'NOT_SELECTED')) {
            const formValues = selectedInput.values;
            const selectionValue = {};
            console.log('****');
            this.conditionFormValues(formValues, ocrforms, selectedInput, selectionValue, formData);
            this.FormIncrementer++;
        }
        else {
            console.log('skipping input', selectedInput.label);
            console.log('ta', this.textractInput);
            if (selectedInput.type != 'radio' && selectedInput.type != 'selectboxes') {
                this.FormIncrementer++;
            }
            this.ocrIncrementer++;
        }
    }
    conditionFormValues(formValues, ocrforms, selectedInput, selectionValue, formData) {
        formValues.every(selecetionElement => {
            this.textractInput = ocrforms[this.ocrIncrementer];
            console.log(this.textractInput.label);
            if (selecetionElement.label == this.textractInput.label) {
                if (this.textractInput.value == 'SELECTED') {
                    if (selectedInput.type == 'radio') {
                        selectionValue = selecetionElement.value;
                    }
                    else {
                        selectionValue[selecetionElement.value] = true;
                    }
                }
                else {
                    if (selectedInput.type == 'selectboxes') {
                        selectionValue[selecetionElement.value] = false;
                    }
                }
                console.log('sv', selectionValue);
                formData[selectedInput.key] = selectionValue;
                this.ocrIncrementer++;
            }
            return true;
        });
    }
    prepare_from_data_v1(ocr_response, formioInputs) {
        let formData;
        if (ocr_response && ocr_response.forms) {
            ocr_response.forms.forEach(item => {
                if (item.value !== 'SELECTED' && item.value !== 'NOT_SELECTED') {
                    const selectedInput = formioInputs.find(input => input.label == item.label);
                    formData = this.getSelectedDate(item, selectedInput);
                }
            });
        }
        return formData;
    }
    getSelectedDate(item, selectedInput) {
        const formData = {};
        if (selectedInput && selectedInput.type === 'datetime') {
            const mdate = moment(item.value);
            if (mdate.isValid()) {
                item.value = mdate.format('YYYY-MM-DD');
            }
            else {
                item.value = null;
            }
            formData[selectedInput.key] = item.value;
        }
        return formData;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OCRService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OCRService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OCRService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class HttpService {
    http;
    _storeservice;
    RBACORG;
    overrideUrl = true;
    errorData;
    baseUrl = '';
    tokenKey;
    headers = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('role', 'role=CP_PUBLIC');
    showSpinner = new BehaviorSubject(false);
    outsideShowSpinner = new BehaviorSubject(false);
    url1;
    url;
    constructor(http, _storeservice) {
        this.http = http;
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res['RBACORG'] && res['RBACORG'] !== '') {
                this.RBACORG = res['RBACORG'];
                this.url = this.RBACORG['apiHost'] ? this.RBACORG['apiHost'] : 'http://localhost:3000/api';
                this.tokenKey = this.RBACORG['tokenKey'];
            }
        });
        this.url1 = '';
    }
    get(apiRoute) {
        return this.http.get(`${this.url + apiRoute}`, {
            headers: this.getHttpNewHeaders()
        });
    }
    post(apiRoute, body) {
        return this.http.post(`${this.url + apiRoute}`, body, {
            headers: this.getHttpNewHeaders()
        });
    }
    put(apiRoute, body) {
        return this.http.put(`${this.url + apiRoute}`, body, {
            headers: this.getHttpNewHeaders()
        });
    }
    patch(apiRoute, body) {
        return this.http.patch(`${this.url + apiRoute}`, body, {
            headers: this.getHttpNewHeaders()
        });
    }
    delete(apiRoute) {
        return this.http.delete(`${this.url + apiRoute}`, {
            headers: this.getHttpNewHeaders()
        });
    }
    getHttpHeaders() {
        return new HttpHeaders().set('key', 'value');
    }
    getHttpNewHeaders() {
        return this.headers.set('Authorization', `Bearer ${this.getToken()}`);
    }
    getAttachmentHttpHeaders(contentType) {
        return new HttpHeaders().set('Content-Type', contentType).set('x-ms-blob-type', 'BlockBlob');
    }
    putUpload(apiRoute, body, contentType) {
        return this.http.put(`${this.url1 + apiRoute}`, body, { headers: this.getAttachmentHttpHeaders(contentType) });
    }
    putupload2(apiRoute, body, contenttype) {
        return this.http
            .put(`${this.url1 + apiRoute}`, body, {
            headers: this.getAttachmentHttpHeaders(contenttype),
            observe: 'response'
        })
            .pipe(map(data => {
            return data;
        }));
    }
    /**
     *
     * @param apiRoute
     * This function will download the stream file from the API service.
     * No HTTP required for this stream. So used Window.location.href to download the file
     */
    getFormDownloaded(apiRoute) {
        window.location.href = `${this.url + apiRoute}`;
    }
    //common http service(optional)
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${error?.error?.message ? error?.error?.message : error.message}`;
        }
        return throwError(errorMessage);
    }
    getToken() {
        const token = this.tokenKey ? this.tokenKey : 'jwt-token';
        return sessionStorage.getItem(token);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpService, deps: [{ token: i1$1.HttpClient }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1$1.HttpClient }, { type: DataStoreService }]; } });

class RbacService {
    httpService;
    constructor(httpService) {
        this.httpService = httpService;
    }
    getAllUserList(key) {
        return this.httpService.get(`${UserConfig.EndPoint.User.getAllUserList}/${key}`);
    }
    getAllUserOrgList(orgid) {
        return this.httpService.get(UserConfig.EndPoint.User.getAllUserOrgList + orgid);
    }
    saveUser(data) {
        return this.httpService.post(UserConfig.EndPoint.User.createUser, data);
    }
    updateUser(data, userid) {
        return this.httpService.put(`${UserConfig.EndPoint.User.getAllUserList}/${userid}`, data);
    }
    deleteUser(id) {
        return this.httpService.delete(`${UserConfig.EndPoint.User.getAllUserList}/${id}`);
    }
    activateUser(data) {
        return this.httpService.post(UserConfig.EndPoint.User.activateUser, data);
    }
    addProviderUser(data) {
        return this.httpService.post(UserConfig.EndPoint.Provider.addProviderUser, data);
    }
    addUserRole(data) {
        return this.httpService.post(UserConfig.EndPoint.User.userRole, data);
    }
    uploadKey(objparams) {
        return this.httpService.post(AttachmentConfig$1.EndPoint.Attachments.UploadKey, objparams);
    }
    getOrgPolicyGroupList(orgid) {
        return this.httpService.get(PolicyGroupConfig.EndPoint.policyGroup.getOrgPolicyGroups.replace('{organizationid}', String(orgid)));
    }
    getAllPolicyGroupList(policyGroupId) {
        const endPoint = policyGroupId
            ? `${PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList}/${policyGroupId}`
            : PolicyGroupConfig.EndPoint.policyGroup.getAllPolicyGroupList;
        return this.httpService.get(endPoint);
    }
    getPolicyGroupById(id) {
        return this.httpService.get(PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList + '/' + id);
    }
    getPolicyGroupsByManagementGroup(policyGroupId) {
        return this.httpService.get(`/org/policyGroup/managementgroup/${policyGroupId}`);
    }
    createPolicyGroup(data) {
        return this.httpService.post(PolicyGroupConfig.EndPoint.policyGroup.createPolicyGroup, data);
    }
    updatePolicyGroup(id, item) {
        return this.httpService.put(`${PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList}/${id}`, item);
    }
    deletePolicyGroup(id) {
        return this.httpService.delete(`${PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList}/${id}`);
    }
    getAllUserRole(id) {
        return this.httpService.get(RoleConfig.EndPoint.role.getAllOrgRole.replace('{orgid}', String(id)));
    }
    deleteRole(id) {
        return this.httpService.delete(`${RoleConfig.EndPoint.role.getAllUserRole}/${id}`);
    }
    getRoleById(roleid) {
        return this.httpService.get(`${RoleConfig.EndPoint.role.getAllUserRole}/${roleid}`);
    }
    createRole(data) {
        return this.httpService.post(RoleConfig.EndPoint.role.createRole, data);
    }
    updateRole(roleId, data) {
        return this.httpService.put(`${RoleConfig.EndPoint.role.getAllUserRole}/${roleId}`, data);
    }
    getLandingPage(id) {
        return this.httpService.get(`${RoleConfig.EndPoint.role.getLandingPage}/${id}`);
    }
    createPolicyGroupForRole(roleId, data) {
        return this.httpService.post(`${RoleConfig.EndPoint.role.addPolicyGroup}/${roleId}/policygroups`, data);
    }
    updatePolicyGroupForRole(roleId, data) {
        return this.httpService.put(`${RoleConfig.EndPoint.role.addPolicyGroup}/${roleId}/policygroups`, data);
    }
    getReportDashbaord() {
        return this.httpService.get(`${RoleConfig.EndPoint.role.dossier}`);
    }
    getPermissionRoleById(id) {
        return this.httpService.get(PermissionsURL.EndPoints.permission.permissionRoleById.replace('{id}', id));
    }
    getManagementGroupTree(_organizationid) {
        return this.httpService.get('/org/management-group/organization/tree');
    }
    getPermissionsTree(applicationid) {
        return this.httpService.get(PermissionsURL.EndPoints.permission.applicationPermissionsTree.replace('{applicationid}', applicationid));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacService, deps: [{ token: HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: HttpService }]; } });

class MicrostrategyService {
    http;
    alertService;
    permissionStore;
    _storeservice;
    dossierList;
    RBACORG;
    environment;
    constructor(http, alertService, permissionStore, _storeservice) {
        this.http = http;
        this.alertService = alertService;
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res['RBACORG'] && res['RBACORG'] !== '') {
                this.RBACORG = res['RBACORG'];
                this.environment = this.RBACORG['environment'] ? this.RBACORG['environment'] : '';
            }
        });
    }
    getAuthToken() {
        const body = {
            username: this.environment.mstrUsername,
            password: this.environment.mstrPassword,
            loginMode: 1
        };
        return this.http.post(`${this.environment.mstrURL}/api/auth/login`, body, {
            withCredentials: true,
            headers: { 'Content-type': 'application/json' },
            observe: 'response'
        });
    }
    getDossier(projectId, dossierId, pageNo) {
        const permissions = this.permissionStore.state;
        const projectUrl = `${this.environment.mstrURL}/app/${projectId}`;
        const dossierUrl = `${projectUrl}/${dossierId}/${pageNo}`;
        microstrategy.dossier
            .create({
            placeholder: document.getElementById('dossierContainer'),
            url: dossierUrl,
            navigationBar: {
                enabled: true,
                gotoLibrary: permissions?.ANA_LIBRARY,
                title: true,
                toc: true,
                reset: true,
                reprompt: true,
                share: true,
                comment: true,
                notification: true,
                filter: true,
                options: true,
                search: true,
                bookmark: true
            },
            enableCustomAuthentication: true,
            enableResponsive: false,
            containerWidth: 400,
            containerHeight: 400,
            customAuthenticationType: microstrategy.dossier.CustomAuthenticationType.AUTH_TOKEN,
            getLoginToken: async () => {
                const response = await this.getAuthToken().toPromise();
                return response.headers.get('x-mstr-authtoken');
            }
        })
            .catch((_err) => this.alertService.error(`Failed to connect ${this.environment.mstrURL}`));
    }
    async getLibraryDetails() {
        const token = await this.getAuthToken().toPromise();
        const authtoken = token.headers.get('x-mstr-authtoken');
        const headerInfo = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-MSTR-AuthToken': authtoken ? authtoken : '',
            'X-MSTR-ProjectID': this.environment.mstrProjectID
        };
        return this.http
            .get(`${this.environment.mstrURL}/api/library`, {
            withCredentials: true,
            headers: headerInfo
        })
            .toPromise()
            .then((response) => {
            return response.map((mstr) => ({
                id: mstr.target.id,
                projectId: mstr.projectId,
                name: mstr.target.name
            }));
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MicrostrategyService, deps: [{ token: i1$1.HttpClient }, { token: AlertService }, { token: PermissionStore }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MicrostrategyService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MicrostrategyService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$1.HttpClient }, { type: AlertService }, { type: PermissionStore }, { type: DataStoreService }]; } });

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
class RBACINFO {
    apiHost = '';
    tokenKey = '';
    others;
    orgID;
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

class DynamicTabPageService {
    uploadService;
    httpService;
    isPageDesign = new BehaviorSubject(false);
    observePage = this.isPageDesign.asObservable();
    constructor(uploadService, httpService) {
        this.uploadService = uploadService;
        this.httpService = httpService;
        // This is intentional
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageService, deps: [{ token: i1$2.NgxfUploaderService }, { token: HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$2.NgxfUploaderService }, { type: HttpService }]; } });

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

let AppConstants$1 = class AppConstants {
    static errorMessage = 'Something went wrong!';
    static regexEmail = '^[0-9a-zA-Z.-]+[@][0-9a-zA-Z.-]+[.][0-9a-zA-Z]{2,}$';
};

class AuthState {
    user;
}

class AuthStore extends Store {
    httpService;
    constructor(httpService) {
        super(new AuthState());
        this.httpService = httpService;
    }
    addAuthInfo(user) {
        this.setState({ ...this.state, user });
    }
    getAuthInfo() {
        console.log(this.state);
        if (this.state.user) {
            return of(this.state.user);
        }
        else {
            return forkJoin([this.httpService.get(AuthURL.EndPoints.auth.user.userInfo)]).pipe(tap(([user]) => {
                return user;
            }));
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthStore, deps: [{ token: HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthStore });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthStore, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: HttpService }]; } });

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

class AuthService {
    httpService;
    store;
    _router;
    credentialsService;
    localstore;
    sharedInfo;
    alertService;
    dynamicTabPageService;
    pageHeaderService;
    constructor(injector, httpService, store, _router, credentialsService, localstore) {
        this.httpService = httpService;
        this.store = store;
        this._router = _router;
        this.credentialsService = credentialsService;
        this.localstore = localstore;
        this.alertService = injector.get(AlertService);
        this.dynamicTabPageService = injector.get(DynamicTabPageService);
        this.pageHeaderService = injector.get(PageHeaderService);
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
            return this.getUserInfo();
        }));
    }
    refreshToken(platform = 'aws') {
        const email = sessionStorage.getItem('email');
        const refreshToken = sessionStorage.getItem('refreshToken');
        const body = {
            email,
            refreshToken
        };
        if (platform === 'aws') {
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
        else {
            return this.httpService.post(AuthURL.EndPoints.auth.user.refreshToken, body).pipe(mergeMap((res) => {
                this.credentialsService.setCredentials(res['data'].token);
                sessionStorage.setItem('refreshToken', res['data'].refreshToken);
                return [res['data'].token];
            }));
        }
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
    getUserInfo() {
        return forkJoin([this.httpService.get(AuthURL.EndPoints.auth.user.userInfo)]).pipe(tap(([user]) => {
            this.store.addAuthInfo(user['data']);
            return user;
        }));
    }
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
        }, _error => this.alertService.error(AppConstants$1.errorMessage));
    }
    getCustomPage(page) {
        if (page.activeVersion.tabconfig) {
            const routingTab = JSON.parse(page.activeVersion.tabconfig).filter(x => x.type === 'ROUTING');
            return routingTab.length && page;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, deps: [{ token: i0.Injector }, { token: HttpService }, { token: AuthStore }, { token: i1.Router }, { token: CredentialsService }, { token: LocalService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: HttpService }, { type: AuthStore }, { type: i1.Router }, { type: CredentialsService }, { type: LocalService }]; } });

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
            delete: '/solution/formresponse/{id}/pageid',
            update: '/solution/formresponse/{id}/pageid',
            deleteRevoke: '/solution/formresponse/{id}/revokeDeleteByAdmin',
            updateByIdAndPageIdWithReason: '/solution/formresponse/{id}/updateByIdAndPageIdWithReason',
            checkDeleteStatus: '/solution/formresponse/checkDeleteStatus/{pageid}/{id}?name={primaryobject}',
            checkEditStatus: '/solution/formresponse/checkEditStatus/{pageid}/{id}'
        },
        provider: {
            providerData: '/provider'
        },
        criteria: {
            save: '/solution/dynamicsearchcriteria/save',
            getByPageId: '/solution/dynamicsearchcriteria/list/{pageId}'
        },
        rowversion: {
            copy: '/solution/dynamicsearch/rowversion'
        }
    };
}

class DynamicsearchService {
    _httpService;
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
    constructor(_httpService) {
        this._httpService = _httpService;
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
        return this._httpService.get(DynamicSearchURL.EndPoints.userConfig.getUserConfig + id);
    }
    getStaticGridConfig(id) {
        return this._httpService.get(DynamicSearchURL.EndPoints.userConfig.getStaticGridConfig.replace('{id}', id));
    }
    saveGridUserPreference(data) {
        return this._httpService.post(DynamicSearchURL.EndPoints.userConfig.saveUserConfig, data);
    }
    sendMail(data) {
        return this._httpService.post(DynamicSearchURL.EndPoints.notification.sendMail, data);
    }
    generateDocument(data, typeCheck) {
        const url = typeCheck
            ? DynamicSearchURL.EndPoints.documents.generateExcel
            : DynamicSearchURL.EndPoints.documents.generatePDF;
        return this._httpService.post(url, data);
    }
    exportData(data, link) {
        return this._httpService.post(link, data);
    }
    saveSearchCriteria(data) {
        return this._httpService.post(DynamicSearchURL.EndPoints.pageConfig.postApiurl, data);
    }
    startScheduling(data, url) {
        return this._httpService.post(url, data);
    }
    startSchedulingNoUrl(data, id) {
        return this._httpService.post(DynamicSearchURL.EndPoints.report.schedulertrigger + id, data);
    }
    getTemplate(formId) {
        return this._httpService.get(DynamicSearchURL.EndPoints.pageConfig.pageVersion + '/' + formId + '?applyPermissions=true');
    }
    // Remove Permission For Page-Designer View
    getTemplateView(formId) {
        return this._httpService.get(DynamicSearchURL.EndPoints.pageConfig.pageVersion + '/' + formId + '?applyPermissions=false');
    }
    getPageTabs(pageId) {
        return this._httpService.get(DynamicSearchURL.EndPoints.pageConfig.page + '/' + pageId);
    }
    changePage(page) {
        this.isPageDesign.next(page);
    }
    getFormResponse(pageId) {
        return this._httpService.get(DynamicSearchURL.EndPoints.formResponse.get.replace('{pageid}', pageId)).toPromise();
    }
    getProviderData(providerid) {
        return this._httpService.get(DynamicSearchURL.EndPoints.provider.providerData + '?userid=' + providerid);
    }
    saveCriteriaByPageId(data) {
        return this._httpService.post(DynamicSearchURL.EndPoints.criteria.save, data);
    }
    getCriteriaByPageId(pageId) {
        return this._httpService.get(DynamicSearchURL.EndPoints.criteria.getByPageId.replace('{pageId}', pageId));
    }
    rowVersion(data) {
        return this._httpService.post(DynamicSearchURL.EndPoints.rowversion.copy, data);
    }
    checkDeleteStatus(pageid, id, primarytable) {
        return this._httpService.get(DynamicSearchURL.EndPoints.formResponse.checkDeleteStatus.replace('{id}', id).replace('{pageid}', pageid).replace('{primaryobject}', primarytable));
    }
    checkEditStatus(pageid, id) {
        return this._httpService.get(DynamicSearchURL.EndPoints.formResponse.checkEditStatus.replace('{id}', id).replace('{pageid}', pageid));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicsearchService, deps: [{ token: HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicsearchService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicsearchService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: HttpService }]; } });

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

class AttachmentsService {
    http;
    constructor(http) {
        this.http = http;
        // This is intentional
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AttachmentsService, deps: [{ token: HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AttachmentsService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AttachmentsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: HttpService }]; } });

class FormioService {
    constructor() {
        //not to be empty
    }
    customEvent(event, formIO) {
        if (event.type === 'dateRange') {
            // this.dateRangeEvent(event, formIO);
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

class OcrValidationServiceConfig {
    static EndPoint = {
        OCRValidate: {
            GetNewOcrData: '/ocr/analyzeDocument',
            CreateReferral: '/ref/referral/create',
            SaveClientDetail: '/ref/client/create',
            SaveContactDetail: '/ref/contact/create',
            SaveProviderDetail: '/ref/provider/search',
            SaveReferralProvider: '/ref/referral-provider/create',
            CreateAttachment: '/ref/attachment/create',
            UpdateImgaCatogory: '/ocr/imageCategory/',
            CancelRefferral: '/file/delete-file'
        }
    };
}

class OcrValidationService {
    httpService;
    constructor(httpService) {
        this.httpService = httpService;
        console.log('log');
    }
    getUpload(obj) {
        return this.httpService.post(OcrValidationServiceConfig.EndPoint.OCRValidate.GetNewOcrData, JSON.parse(obj));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OcrValidationService, deps: [{ token: HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OcrValidationService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OcrValidationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: HttpService }]; } });

class ShareDataService {
    data = new BehaviorSubject('');
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ShareDataService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ShareDataService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ShareDataService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });

// const LOADER_SELECTOR = '#loaderAnimation';
class LoaderService {
    loaderContainer = document.getElementById('loaderAnimation2');
    constructor() {
        $('#loaderAnimation').hide();
    }
    show() {
        $('#loaderAnimation').show();
    }
    hide() {
        $('#loaderAnimation').hide();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoaderService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoaderService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class PageBuilderURL {
    static EndPoints = {
        workflow: {
            pageByOrganization: '/platform/page-designer/page/organization/{id}',
            LockPageDesigner: '/platform/page-designer/page/{id}/duplicate',
            activatePage: '/platform/page-designer/page/{pageId}/activate',
            deactivatePage: '/platform/page-designer/page/{pageId}/deactivate'
        },
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
    port_workflow;
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    getVersionList(pageId) {
        return this.httpService.get(PageBuilderURL.EndPoints.page_config.versionList.replace('{id}', String(pageId)));
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderService, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

const columnsJson = {
    label: 'Columns',
    columns: [
        {
            components: [
                {
                    title: 'OCR Results ',
                    collapsible: false,
                    key: 'ocrResults',
                    type: 'panel',
                    label: 'Panel',
                    input: false,
                    tableView: false,
                    components: [
                        {
                            label: 'HTML',
                            attrs: [
                                {
                                    attr: '',
                                    value: ''
                                }
                            ],
                            content: '<p></p>',
                            refreshOnChange: false,
                            key: 'html',
                            type: 'htmlelement',
                            input: false,
                            tableView: false
                        }
                    ]
                }
            ],
            width: 6,
            offset: 0,
            push: 0,
            pull: 0,
            size: 'md',
            currentWidth: 6
        },
        {
            components: [],
            width: 6,
            offset: 0,
            push: 0,
            pull: 0,
            size: 'md',
            currentWidth: 6
        }
    ],
    key: 'columns',
    type: 'columns',
    input: false,
    tableView: false
};

class AppService {
    router;
    currentState = new Subject();
    currentValue = new BehaviorSubject({});
    getValue = this.currentValue.asObservable();
    excludedUrl = ['/login', '/registration/', '/forgot-password', 'change-password'];
    previousUrl;
    constructor(router) {
        this.router = router;
        this.router.events
            .pipe(filter((evt) => evt instanceof RoutesRecognized), pairwise())
            .subscribe((events) => {
            this.previousUrl = events[0].urlAfterRedirects;
        });
    }
    addValue(key, value) {
        this.currentState.next({ key, value });
    }
    setValue(key, value) {
        this.currentValue.next({ key, value });
    }
    canNavigateBack() {
        return this.previousUrl && !this.excludedUrl.some((url) => this.previousUrl.startsWith(url));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AppService, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AppService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AppService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });

const STRUCTURED_DECISION_MAKING = 'Structured Decision Making';
const SOMETHING_WENT_WRONG = 'Something Went Wrong!';
class DynamicPageComponent {
    router;
    route;
    _formIO;
    appService;
    _storeservice;
    submitSuccess = new EventEmitter();
    submitFailed = new EventEmitter();
    formId;
    tabId;
    jsonForm;
    fromTitle;
    editId;
    id;
    submittedData;
    afterEntityName = '';
    afterRuleAppName = '';
    beforeEntityName = '';
    beforeRuleAppName = '';
    beforerulemethod = '';
    afterrulemethod = '';
    user;
    multiSelectDropDowns = [];
    pageId;
    sourceid;
    externalParameters;
    pageDataSubscription;
    isDialogPopup = false;
    dialogRef;
    external_scanner;
    isReadOnly;
    showBack;
    isTitle;
    afterSubmit = new EventEmitter();
    personId;
    triggerRefresh;
    fromWorkFlow;
    clickedServiceCase;
    serviceId;
    speechRecogninitionOn;
    speechData;
    notification;
    organizationId;
    FormInputs = [];
    scannerConfig = {};
    tabData;
    narrative;
    purpose;
    pagetype;
    localstorage;
    sessionStorage;
    location;
    dataStore;
    speechRecognitionService;
    uploadService;
    ocr;
    appointmentList;
    isformIO = false;
    formIO;
    currentYouthId;
    dynamicTabPageService;
    dynamicSearchService;
    authService;
    attachmentInfo = {};
    uploadedFiles = [];
    parentGridPage;
    parentGridPageId;
    alertService;
    uploadedFile;
    isOcrForm;
    documentType;
    imgUrl;
    showOcrForm;
    attachmentService;
    imageData;
    tableschemaconfig;
    formResponse;
    action;
    contentArray = [];
    templateResult;
    ocrValidationService;
    dataSub;
    btnVerify = false;
    editValue;
    loggedUser;
    providerData;
    check;
    showTabBack = true;
    httpService;
    constructor(injector, router, route, _formIO, data, appService, _storeservice) {
        this.router = router;
        this.route = route;
        this._formIO = _formIO;
        this.appService = appService;
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                // this.environment = res['RBACORG'].environment;
                this.httpService = res['HTTPSERVICE'];
            }
        });
        this.authService = injector.get(AuthService);
        this.localstorage = injector.get(LocalService);
        this.location = injector.get(Location);
        this.dataStore = injector.get(DataStoreService);
        this.speechRecognitionService = injector.get(SpeechRecognitionService);
        this.uploadService = injector.get(NgxfUploaderService);
        this.ocr = injector.get(OCRService);
        this.dynamicTabPageService = injector.get(DynamicTabPageService);
        this.dynamicSearchService = injector.get(DynamicsearchService);
        this.alertService = injector.get(AlertService);
        this.attachmentService = injector.get(AttachmentsService);
        this.ocrValidationService = injector.get(OcrValidationService);
        this.user = this.localstorage.getObj('user');
        if (this.localstorage.getItem('parentGridPage')) {
            const parentGridPageObj = JSON.parse(this.localstorage.getItem('parentGridPage'));
            const currentpage = this.localstorage.getItem('pagename');
            this.parentGridPage = currentpage ? currentpage : '';
            this.parentGridPageId = parentGridPageObj ? parentGridPageObj.id : '';
        }
        this.organizationId = this.user?.userWorkInfo?.organization?.id;
        this.dynamicSearchService.onChangePageUserData = this.localstorage.getObj('user');
        this.conditionCheckData(data);
        this.sourceid = this.dynamicSearchService.clickableData;
        const navigateData = this.router?.getCurrentNavigation()?.extras?.state;
        this.showBack = navigateData?.externalLink ? true : false;
        if (navigateData?.isReadOnly) {
            this.isReadOnly = true;
        }
        // if (navigateData?.title) {
        //   this.isTitle = navigateData.title;
        // }
        if (navigateData?.personId) {
            this.personId = navigateData.personId;
            this.dynamicSearchService.onChangePersonId = navigateData.personId;
        }
        this.speechRecogninitionOn = false;
        this.speechData = '';
        if (history.state.title) {
            sessionStorage.setItem('title', history?.state?.title);
        }
        this.currentYouthId = this.route.parent.snapshot.paramMap.get('id');
        this.attachmentInfo = this.authService.getSharedMessage();
        this.FormInputs = [];
        this.triggerRefresh = new EventEmitter();
        this.isReadOnly = history?.state?.isReadOnly ? true : this.isReadOnly;
        this.personId = history?.state?.personId;
        this.dynamicSearchService.onChangePersonId = history?.state?.personId;
        this.showBack = (history?.state?.externalLink && !history?.state?.isHideBack) || this.showBack;
        this.pageId = history?.state?.pageId ? history?.state?.pageId : this.pageId;
        this.action = this.dataStore.getData('gridAction');
        this.btnVerify = this.action === 'edit' ? true : false;
        if (window.location.pathname.includes('tab')) {
            this.showTabBack = false;
        }
    }
    conditionCheckData(data) {
        if (data) {
            this.editId = data.editId ? data.editId : null;
            this.isDialogPopup = data.isPopup ? true : false;
            this.pageId = data.pageId ? data.pageId : this.pageId;
            this.isReadOnly = data.isReadOnly ? true : false;
        }
    }
    ngOnInit() {
        this.loggedUser = this.localstorage.getObj('user');
        this.route.params.subscribe((data) => {
            console.log(data);
            this.authService.setSharedMessage(data);
            this.routerPageData(data);
        });
        this.dynamicSearchService.sourceIdService.subscribe(data => {
            if (data != '') {
                this.serviceId = data;
                this.dynamicSearchService.sourceIdService.next('');
                this.clickedServiceCase = true;
                this.callGetAPI();
            }
        });
        this.dynamicSearchService.result.subscribe(result => {
            if (result != null && result != '') {
                this.afterSubmit.emit(result);
                this.dynamicSearchService.result.next(null);
            }
        });
    }
    routerPageData(data) {
        this.formId = data.pageId;
        if (!this.formId) {
            this.formId = this.pageId;
        }
        this.getSource();
        this.getPageTabs();
    }
    getPageTabs() {
        this.dynamicTabPageService.getPageById(this.formId).subscribe((result) => {
            if (result) {
                this.tabId = result.data[0].activeVersion.id;
                this.getRouterConfig();
            }
        });
    }
    getRouterConfig() {
        if (this.formId) {
            // get configure URL get,post,put URL
            this.getConfiguration().then(config => {
                console.log(config);
                // get Page configuration Template Data
                this.getTemplate(config);
            });
        }
        if (!this.pageId && !this.formId) {
            this.pageDataSubscription = this.dynamicSearchService.data.subscribe(page => {
                if (page) {
                    this.formId = page;
                    // }
                    // get configure URL get,post,put URL
                    this.getConfiguration().then(res => {
                        // get Page configuration Template Data
                        this.jsonForm = null;
                        this.getTemplate(res);
                    });
                }
            });
        }
    }
    getSource() {
        const id = this.sourceid;
        if (this.route.parent && this.route.parent.parent && this.route.parent.parent.snapshot.paramMap.get('sourceid')) {
            this.sourceid = this.route.parent.parent.snapshot.paramMap.get('sourceid');
        }
        else if (this.route.parent &&
            this.route.parent.parent &&
            this.route.parent.parent.parent &&
            this.route.parent.parent.parent.snapshot.paramMap.get('sourceid')) {
            this.sourceid = this.route.parent.parent.parent.snapshot.paramMap.get('sourceid');
        }
        else {
            this.sourceid = id;
        }
        if (!this.sourceid) {
            this.sourceid = this.route?.parent?.parent?.parent?.parent?.snapshot?.paramMap.get('sourceid')
                ? this.route?.parent?.parent?.parent?.parent?.snapshot?.paramMap.get('sourceid')
                : this.route?.parent?.parent?.parent?.parent?.parent?.parent?.snapshot?.paramMap.get('sourceid');
        }
        this.purpose =
            this.route.parent && this.route.parent.snapshot.params['purpose']
                ? this.route.parent.snapshot.params['purpose']
                : this.route?.parent?.parent.snapshot.params['purpose'];
    }
    // get Page configuration Template Data
    getTemplate(result) {
        this.templateResult = result;
        if (result) {
            if (this.action && this.action.toLowerCase() == 'edit') {
                this.isTitle = 'Edit ' + result?.data?.pagename;
            }
            else if (this.action && this.action.toLowerCase() == 'view') {
                this.isTitle = 'View ' + result?.data?.pagename;
            }
            else if (this.action && this.action.toLowerCase() == 'add') {
                this.isTitle = 'Add ' + result?.data?.pagename;
            }
            else if (this.action && this.action.toLowerCase() == 'link') {
                this.isTitle = 'View ' + result?.data?.pagename;
            }
            else {
                this.isTitle = this.localstorage.getItem('FORM_TITLE') || '';
            }
            this.localstorage.setItem('FORM_TITLE', this.isTitle);
            this.submittedData = { data: {} };
            this.check = result?.data?.tableschemaconfig?.tablelist.includes('provider_account');
            this.editValue = JSON.parse(this.localstorage.getItem('editValue'));
            if (this.check && this.providerData?.account) {
                this.submittedData = {
                    data: this.providerData?.account
                };
            }
            else {
                this.editValue = JSON.parse(this.localstorage.getItem('editValue'));
                if (this.editValue) {
                    this.submittedData = {
                        data: this.editValue
                    };
                    this.submittedData.data['edit'] = true;
                }
                else {
                    this.submittedData = { data: {} };
                }
            }
            this.fromTitle = result.data?.pagename ? result.data?.pagename : '';
            this.dataStore.setData('title', this.fromTitle);
            this.conditionCheckTemplate(result);
            this.user = this.localstorage.getObj('user');
            this.submittedData.data.userrolekey = this.user?.role?.rolekey;
            this.submittedData.data.username = this.user?.firstName + '' + this.user?.lastName;
            this.submittedData.data.ribbonData = null;
            this.submittedData.data.sourceid = this.sourceid ? this.sourceid : null;
            if (this.route.parent.snapshot.paramMap.get('sourceKey')) {
                this.submittedData.data[this.route.parent.snapshot.paramMap.get('sourceKey')] = this.route.parent.snapshot.paramMap.get('sourceValue');
            }
            this.callGetAPI();
        }
        this.dataSub = this.dataStore.currentStore.subscribe(res => {
            if (res['uploadFromGrid']) {
                this.showOcrForm = true;
                this.btnVerify = true;
            }
        });
    }
    conditionCheckTemplate(result) {
        let routingPage = [];
        if (result.data.tabconfig) {
            const routingTab = JSON.parse(result.data.tabconfig);
            routingPage = routingTab.filter(x => x.type === 'ROUTING');
        }
        if (result.data.templatejson) {
            this.isformIO = true;
            // result.data.templatejson = result.data.templatejson.replaceAll('{sourceid}', this.sourceid);
            this.jsonForm = result.data.templatejson;
            const formTemplateJson = JSON.parse(JSON.stringify(this.jsonForm));
            this.pagetype = result.data?.pageDetails?.pagetype;
            if (result.data?.pagetype === 'SURVEY') {
                this.sourceid = this.user?.id;
            }
            this.prepareFormKeyLabel(formTemplateJson);
            this.fromTitle = this.jsonForm && this.jsonForm['page'] ? this.jsonForm['page'] : result.data.pagename;
            setTimeout(() => {
                this.modifyVideoContent();
                this.speechToTextContent();
            }, 200);
        }
        else if (routingPage.length > 0 && routingPage[0].pathname === 'CreateSitevisitComponent') {
            this.isformIO = false;
            this.appointmentList = Promise.resolve(true);
        }
    }
    // get configure URL get,post,put URL
    async getConfiguration() {
        const data = await this.dynamicTabPageService.getActivePage(this.tabId, true).toPromise();
        return data;
        // });
    }
    loadIncidentData() {
        this.dynamicTabPageService.getListBySourceId(this.sourceid).subscribe(result => {
            const data = result['data'];
            if (data && data.length) {
                this.narrative = data.reduce((acc, curr) => acc + curr.narrative, '');
            }
        });
    }
    callGetAPI() {
        if (this.fromTitle.includes(STRUCTURED_DECISION_MAKING)) {
            this.loadIncidentData();
        }
        this.tabData = this.dataStore.getData('selectedTabData');
        if (this.route.snapshot.paramMap.get('id') == 'form') {
            this.id = null;
        }
        else if (this.editId) {
            this.id = this.editId;
        }
        else {
            this.id = this.route.snapshot.paramMap.get('id');
            console.log(this.id);
            if (!this.id) {
                this.id = this.route.parent.snapshot.paramMap.get('id');
                sessionStorage.setItem('youthID', this.id);
            }
        }
        this.conditionCheckCallGetAPI();
        const action = this.dataStore.getData('gridAction');
        console.log(this.id);
        if (this.id) {
            this.formresponse(action);
        }
    }
    conditionCheckCallGetAPI() {
        if (!this.id) {
            this.id = this.editId;
        }
        // #check
        if (window.location.hash.indexOf('dynamic-routing') > 0 || window.location.hash.indexOf('pages/intake') > 0) {
            if (this.fromWorkFlow) {
                this.id = this.sourceid;
                this.fromWorkFlow = false;
            }
            else {
                this.id = this.id ? this.id : this.sourceid;
            }
        }
        if (this.clickedServiceCase) {
            this.id = this.serviceId;
        }
        console.log(this.id);
        if (this.id) {
            this.formresponse(this.action);
        }
    }
    formresponse(action) {
        this.dynamicTabPageService.getResponseByPageId(this.id, this.formId).subscribe((result) => {
            if (result?.data && result?.data.length) {
                this.getMultipleFrom(this.pagetype === 'FFP' ? result?.data.response : result?.data);
            }
            else if (result?.data) {
                this.formResponse = result?.data;
                this.getActionSelect(this.pagetype === 'FFP' ? result?.data.response : result?.data, action);
            }
            else {
                this.id = null;
                this.dynamicSearchService.id.next(null);
            }
        });
    }
    resultNullCheck(data) {
        if (!data) {
            return {};
        }
        else if (data.data) {
            return data.data;
        }
        else {
            return data;
        }
    }
    getActionSelect(result, action) {
        const data = this.resultNullCheck(result);
        this.processMultiSelectDropdowns(data);
        this.submittedData = { data: data };
        this.submittedData.data.userrolekey = this.user?.role?.rolekey;
        if (this.fromTitle.includes(STRUCTURED_DECISION_MAKING)) {
            this.submittedData.data.narrative = this.narrative;
        }
        this.submittedData.data.action = action;
        if (this.externalParameters) {
            this.submittedData.data.type = this.externalParameters;
        }
        this.id = result.id;
        this.openBottomSheet();
    }
    getMultipleFrom(result) {
        const data = result[0].data ? result[0].data : result[0];
        this.processMultiSelectDropdowns(data);
        this.submittedData = { data: data };
        this.submittedData.data.userrolekey = this.user?.role?.rolekey;
        if (this.fromTitle.includes(STRUCTURED_DECISION_MAKING)) {
            this.submittedData.data.narrative = this.narrative;
        }
        if (this.externalParameters) {
            this.submittedData.data.type = this.externalParameters;
        }
        this.id = result[0].id;
        this.openBottomSheet();
    }
    processMultiSelectDropdowns(data) {
        this.multiSelectDropDowns.forEach(dropdownKey => {
            const dropdownValue = data[dropdownKey];
            if (typeof dropdownValue === 'string' && dropdownValue.includes(',')) {
                data[dropdownKey] = dropdownValue.split(',');
            }
        });
    }
    nextSubmit(event) {
        console.log(event);
        this.submitFailed.next('Failed to add response');
    }
    onSubmit(submission) {
        const createPage = this.localstorage.getObj('AddAction');
        if (this.route.snapshot.paramMap.get('id') == 'form') {
            this.id = null;
        }
        else if (this.editId) {
            this.id = this.editId;
        }
        else {
            this.id = this.route.snapshot.paramMap.get('id');
            if (!this.id && !createPage) {
                this.id = this.route.parent.snapshot.paramMap.get('id');
            }
        }
        const submissionData = JSON.parse(JSON.stringify(submission));
        const data = submissionData.data && submissionData.data.data && submissionData.data.data.editGrid
            ? submissionData.data.data
            : submissionData.data;
        delete data.ribbonData;
        if (this.providerData?.id)
            data.provider_id = this.providerData?.id;
        if (this.check) {
            if (this.submittedData?.data?.textField?.account?.id) {
                data.id = this.submittedData?.data?.textField?.account?.id;
                const requestData = {
                    pageid: this.formId,
                    response: data
                };
                this.updateForm(requestData);
            }
            else if (this.id) {
                const requestData = {
                    pageid: this.formId,
                    response: data
                };
                this.updateForm(requestData);
            }
            else {
                const requestData = {
                    pageid: this.formId,
                    response: data
                };
                this.submiteWithoutId(requestData);
            }
        }
        else {
            const requestData = {
                pageid: this.formId,
                response: data
            };
            if (this.id || this.submittedData?.data?.textField?.id || this.submittedData.data?.edit) {
                this.updateForm(requestData);
            }
            else {
                this.submiteWithoutId(requestData);
            }
        }
    }
    submiteWithoutId(requestData) {
        const fileUploadData = this.authService.getSharedMessage();
        this.dynamicTabPageService.createFormResponse(this.id, requestData).subscribe(result => {
            this.localstorage.setItem('AddAction', false);
            this.submittedDate(result['data']);
            if (this.isDialogPopup) {
                this.closePopup();
            }
            this.afterSubmit.emit(result['data']);
            this.submitToSurvey();
            const fileUploadInfo = Object.assign({ responseid: Number(result['data']['id']) }, fileUploadData);
            if (fileUploadData?.attachmentdetails) {
                this.addAttachment(fileUploadInfo);
            }
            this.alertService.success('Record Saved Successfully', true);
            this.localstorage.removeItem('titletab');
            // TODO : JJIS Routing - Need to clear up once all round of testing has completed
            // This route has challenges navigate back to grid page post form submission.
            // if (this.parentGridPageId) {
            //   if (window.location.href.indexOf('tab') > 0) {
            //     if (window.location.href.indexOf('modify') > 0) {
            //       this.router.navigate(['../../../../dynamic-search/search/', this.parentGridPageId], {
            //         relativeTo: this.route
            //       });
            //     } else if (window.location.href.indexOf('page') > 0) {
            //       this.router.navigate(['../../../../../../../../dynamic-search/search/', this.parentGridPageId], {
            //         relativeTo: this.route
            //       });
            //     }
            //   } else {
            //     this.router.navigate(['/pages/dynamic-search/search/', this.parentGridPageId], { relativeTo: this.route });
            //   }
            // }
            // DONE - PMP-Routing back
            if (this.appService.canNavigateBack()) {
                this.location.back();
            }
        }, _error => {
            this.submitFailed.next('Failed to add response');
        });
    }
    addAttachment(info) {
        this.dynamicTabPageService.createFormResponseAttachment(info).subscribe(res => console.log(res));
    }
    submittedDate(result) {
        if (result && result.length) {
            this.submittedData = { data: result[0].data ? result[0].data : result[0] };
            this.submittedData.data.userrolekey = this.user?.role?.rolekey;
            this.id = result[0].id;
            this.openBottomSheet();
        }
        else if (result) {
            this.submittedData = { data: result?.data ? result?.data : result };
            this.submittedData.data.userrolekey = this.user?.role?.rolekey;
            this.id = result.id;
            this.openBottomSheet();
        }
        else {
            this.id = null;
            this.dynamicSearchService.id.next(null);
        }
    }
    submitToSurvey() {
        if (this.pagetype === 'SURVEY') {
            this.dynamicTabPageService.createUserSurvey(history, this.id).subscribe(() => {
                //This is intentional
            });
        }
    }
    updateForm(requestData) {
        const fileUploadData = this.authService.getSharedMessage();
        if (requestData?.response?.id) {
            this.id = requestData?.response?.id;
        }
        this.dynamicTabPageService.updateFormResponse(this.id, requestData).subscribe(result => {
            const data = result['data'];
            if (data && data.length) {
                this.submittedData = { data: result[0].data ? result[0].data : result[0] };
                this.submittedData.data.userrolekey = this.user?.role?.rolekey;
                this.id = result[0].id;
                this.openBottomSheet();
            }
            else if (result) {
                this.submittedData = { data: data ? data : result };
                this.submittedData.data.userrolekey = this.user?.role?.rolekey;
                this.id = result['id'];
                this.redirect();
            }
            else {
                this.id = null;
                this.dynamicSearchService.id.next(null);
            }
            this.localstorage.setItem('editValue', JSON.stringify(requestData?.response));
            this.alertService.success('Record Saved Successfully', true);
            this.submittedData = {
                data: requestData?.response
            };
            const fileUploadInfo = Object.assign({ responseid: Number(result['data']['id']) }, fileUploadData);
            if (fileUploadData?.attachmentdetails) {
                this.addAttachment(fileUploadInfo);
            }
            this.localstorage.removeItem('titletab');
            this.localstorage.removeItem('editValue');
            this.localstorage.removeItem('target-tab-filter');
            this.location.back();
        }, _error => {
            this.submitFailed.next('Failed to update response');
        });
    }
    closePopup() {
        this.dialogRef.close();
    }
    goBack() {
        this.router.navigate(['../../list'], { relativeTo: this.route });
    }
    openBottomSheet() {
        this.dynamicSearchService.sourceId.next(this.sourceid);
        this.dynamicSearchService.id.next(this.id);
        this.dynamicSearchService.pageId.next(this.formId);
    }
    modifyVideoContent() {
        const videoElements = document.querySelectorAll('.changetoIframe');
        if (videoElements && videoElements.length) {
            videoElements.forEach((element) => {
                const src = element.src;
                const ifrm = document.createElement('iframe');
                ifrm.setAttribute('src', src);
                ifrm.style.width = element.width ? element.width : null;
                ifrm.style.height = element.height ? element.height : null;
                ifrm.width = element.width ? element.width : null;
                ifrm.height = element.height ? element.height : null;
                element.replaceWith(ifrm);
            });
        }
    }
    customClickEvents(_data, event) {
        if (event.srcElement.id == 'scan_button') {
            this.external_scanner.nativeElement.click();
            if (event.srcElement.dataset) {
                this.scannerConfig = event.srcElement.dataset;
            }
        }
    }
    redirect() {
        this.dynamicTabPageService.changePage(true);
        if (window.location.href.indexOf('tab') > 0) {
            this.dynamicTabPageService.changePage(true);
        }
    }
    customEventsButton(event) {
        if (event.type === 'reportdownload') {
            const queryData = this.dataStore.getData('gridData');
            const pageData = this.dataStore.getData('pageData');
            event.data['currentYear'] = event.data.report1 === 'currentYear' ? 'yes' : '';
            if (event.data['currentYear'] === 'yes') {
                event.data['fromRange'] = '2021-06-18T14:33:06.366+0000';
                event.data['toRange'] = '2021-06-18T14:33:06.366+0000';
            }
            const data = {
                formData: event.data,
                queryData: queryData,
                pageData: pageData
            };
            this.downloadReport(data);
        }
    }
    downloadReport(data) {
        if (data) {
            this.dynamicTabPageService.exportReport(data).subscribe(result => {
                const resp = result['data'];
                if (resp.pdfAwsUrl && resp.excelAwsUrl) {
                    const urls = [];
                    urls.push(resp.pdfAwsUrl);
                    urls.push(resp.excelAwsUrl);
                    this.downloadFile(urls);
                }
                else if (resp.excelAwsUrl) {
                    this.downloadFile(resp.excelAwsUrl);
                }
                else if (resp.pdfAwsUrl) {
                    this.downloadFile(resp.pdfAwsUrl);
                }
            }, error => {
                console.log(error);
            });
        }
    }
    downloadFile(s3BucketUrlName) {
        if (s3BucketUrlName && Array.isArray(s3BucketUrlName)) {
            for (const item of s3BucketUrlName) {
                let link = document.createElement('a');
                link.href = item;
                link.download = 'download';
                link.target = '_blank';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                link = null;
            }
        }
        else {
            const link = document.createElement('a');
            link.href = s3BucketUrlName.trim();
            link.download = 'download';
            link.click();
            link.remove();
        }
    }
    customEvents(evt) {
        if (evt.data) {
            this.dynamicSearchService.onChangePageEventData = evt;
            this.dynamicSearchService.onChangePageEventId = this.id;
        }
        this.financeCustomEventsFunctionality(evt);
    }
    speechToTextContent() {
        const speechElements = document.querySelectorAll('.speechToText');
        if (speechElements && speechElements.length) {
            speechElements.forEach((element) => {
                const speechbtn = document.createElement('button');
                speechbtn.className = 'narrative-speech-btn';
                speechbtn.innerHTML = '<i class="fa fa-microphone-slash" aria-hidden="true"></i>';
                element.appendChild(speechbtn);
                speechbtn.addEventListener('click', evt => {
                    this.activateSpeechToText(this, evt, element);
                }, false);
            });
        }
    }
    activateSpeechToText(ctrl, evt, item) {
        const narrativeElement = evt?.currentTarget?.children?.length
            ? evt?.currentTarget?.children[0]
            : evt.target.parentElement;
        this.speechRecogninitionOn = !this.speechRecogninitionOn;
        if (this.speechRecogninitionOn) {
            const speechText = item.querySelector('textarea');
            if (narrativeElement) {
                narrativeElement.className = 'fa fa-microphone';
            }
            ctrl.speechRecognitionService.record().subscribe(
            // listener
            value => {
                let tempNarrative = speechText.value;
                tempNarrative = tempNarrative.trim().concat(' ' + value);
                if (speechText) {
                    speechText.value = tempNarrative;
                }
            }, 
            // errror
            err => {
                this.conditionCheckError(narrativeElement, ctrl, evt, item, err);
            });
        }
        else {
            if (narrativeElement) {
                narrativeElement.className = 'fa fa-microphone-slash';
            }
            ctrl.deActivateSpeechRecognition(ctrl);
        }
    }
    conditionCheckError(narrativeElement, ctrl, evt, item, err) {
        console.error(err);
        this.errorExecution(narrativeElement, ctrl, evt, item, err);
    }
    errorExecution(narrativeElement, ctrl, evt, item, err) {
        if (narrativeElement) {
            narrativeElement.className = 'fa fa-microphone-slash';
        }
        if (err.error === 'no-speech') {
            ctrl.notification = this.noSpeechAlert();
            ctrl.activateSpeechToText(ctrl, evt, item);
        }
        else if (err.error === 'not-allowed') {
            ctrl.notification = this.micUnauthorisedAlert();
        }
        else if (err.error === 'not-microphone') {
            ctrl.notification = this.micNotAvailableAlert();
        }
    }
    micNotAvailableAlert() {
        return 'Microphone is not available. Please verify the connection of your microphone and try again.';
    }
    micUnauthorisedAlert() {
        return 'Your browser is not authorized to access your microphone. Verify that your browser has access to your microphone and try again.';
    }
    noSpeechAlert() {
        return 'No speech has been detected. Please try again.';
    }
    deActivateSpeechRecognition(ctrl) {
        this.speechRecogninitionOn = false;
        ctrl.speechRecognitionService.destroySpeechObject();
    }
    ngOnDestroy() {
        if (this.dataSub)
            this.dataSub.unsubscribe();
        this.speechRecognitionService.destroySpeechObject();
        this.ocr.clearResponse();
        if (this.pageDataSubscription)
            this.pageDataSubscription.unsubscribe();
    }
    uploadFile(file) {
        this.ocr.getResponse().subscribe(result => {
            if (result && result.status == 'SUCCEEDED') {
                this.processOCRResponse(result);
            }
        });
        this.processResponseData(file);
    }
    processResponseData(file) {
        this.dynamicTabPageService.uploadFile(file).subscribe(response => {
            if (response.status) {
                console.log(response.percent);
            }
        }, _err => {
            console.log('Unable to process your request.');
        });
    }
    processOCRResponse(result) {
        const response = result.response;
        if (this.scannerConfig && this.scannerConfig.scanType) {
            if (this.scannerConfig.scanType === 'text' && this.scannerConfig.scanPatch) {
                const sdata = this.submittedData;
                if (sdata && sdata.data) {
                    sdata.data[this.scannerConfig.scanPatch] = response.raw_text;
                    this.submittedData = JSON.parse(JSON.stringify(sdata));
                }
            }
            else {
                const formDatav1 = this.ocr.prepare_form_data(response, JSON.parse(JSON.stringify(this.FormInputs)));
                const formDatav2 = this.ocr.prepare_from_data_v1(response, JSON.parse(JSON.stringify(this.FormInputs)));
                const finalData = { ...formDatav1, ...formDatav2 };
                this.submittedData = { data: finalData };
            }
        }
    }
    prepareFormKeyLabel(json) {
        if (Array.isArray(json)) {
            json.forEach(item => {
                this.prepareFormKeyLabel(item);
            });
        }
        else if (json.hasOwnProperty('input') &&
            json.input &&
            json.type !== 'button' &&
            json.type !== 'signature' &&
            !json.hasOwnProperty('customConditional') &&
            !json.hasOwnProperty('conditional')) {
            let values = [];
            if (json.type === 'radio' || json.type === 'selectboxes') {
                values = json.values || [];
            }
            const formObject = {
                key: json['key'],
                label: json['label'],
                type: json['type'],
                values: [...values]
            };
            this.FormInputs.push(formObject);
            if (json.type === 'select' && json.multiple) {
                this.multiSelectDropDowns.push(json.key);
            }
        }
        else {
            Object.keys(json).forEach(key => {
                if (Array.isArray(json[key])) {
                    this.prepareFormKeyLabel(json[key]);
                }
            });
        }
    }
    financeCustomEventsFunctionality(event) {
        if (event?.changed?.component?.key === 'isBankAccountExist' &&
            !event?.data?.isBankAccountExist &&
            event?.data?.accountTypeKey) {
            let api = '';
            if (event?.data?.accountTypeKey === 'CA') {
                api = 'financecareaccountno';
            }
            else if (event?.data?.accountTypeKey === 'RA') {
                api = 'financerestitutionaccountno';
            }
            else {
                api = 'financesavingaccountno';
            }
            this.dynamicTabPageService.getUniqueId(api).subscribe(result => {
                this.submittedData.data.bankAccountNumber = result['data'];
                this.triggerRefresh.emit({
                    property: 'submission',
                    value: this.submittedData
                });
            }, error => {
                console.log(error);
            });
        }
    }
    routeToGrid(val) {
        if (val === 'Make Payment') {
            this.router.navigate(['./pages/mergepage/1f4e272a-4c03-4739-b4a5-53748e06e247']);
        }
        else if (val === 'Payment Details Information') {
            this.location.back();
        }
    }
    customEvent(event) {
        this._formIO.customEvent(event, this.formIO);
    }
    ocrUpload(files) {
        this.uploadedFile = files.target.files[0];
        const pageID = this.formId ? this.formId : this.pageId;
        this.imageData = {
            contentType: this.uploadedFile.type,
            fileName: `ocr/${pageID}/${this.uploadedFile.name}`
        };
        this.attachmentService.uploadKey(this.imageData).subscribe((res) => {
            if (res.data) {
                const uploadAttachment = document.getElementById('file');
                const uploadAttachmentDetails = uploadAttachment.files[0];
                this.httpService.putupload2(res.data, uploadAttachmentDetails, uploadAttachmentDetails.type).subscribe((resp) => {
                    if (resp && resp.status == 200) {
                        const object = {
                            path: `ocr/${pageID}/${this.uploadedFile.name}`,
                            attachmenttype: this.uploadedFile.type
                        };
                        this.alertService.success('Uploaded Successfully!');
                        if (this.action === 'edit') {
                            this.getUpload(JSON.stringify(object));
                            this.btnVerify = true;
                        }
                        else {
                            this.localstorage.setObj('OCRObj', JSON.stringify(object));
                            this.showOcrForm = true;
                            this.btnVerify = false;
                        }
                    }
                    else {
                        this.alertService.error(SOMETHING_WENT_WRONG);
                    }
                }, error => {
                    this.condionCheckErrorAlert(error);
                });
            }
        });
    }
    condionCheckErrorAlert(error) {
        if (error.status == 0)
            this.alertService.error(SOMETHING_WENT_WRONG);
    }
    getUpload(obj) {
        this.ocrValidationService.getUpload(obj).subscribe((res) => {
            if (res && res.data) {
                const resData = res.data;
                const imageCategory = resData?.imageCategory;
                const ocrDocumentDetails = imageCategory?.id_json[0];
                this.verifiData(ocrDocumentDetails);
            }
            else {
                this.alertService.error(SOMETHING_WENT_WRONG);
            }
        }, err => console.log(err));
    }
    verifiData(ocrDocumentDetails) {
        const jsonForm = this.jsonForm?.components[0];
        if (this.formResponse) {
            const fromArray = Object.keys(this.formResponse);
            fromArray?.forEach(respose => {
                if (ocrDocumentDetails) {
                    const documentValue = Object.keys(ocrDocumentDetails);
                    documentValue?.forEach(element => {
                        this.conditionCheckVerify(element, ocrDocumentDetails, respose, jsonForm);
                    });
                }
            });
        }
        columnsJson.columns[0].components[0].components[0].content = this.contentArray?.join('');
        this.jsonForm.components[0].components.splice(0, 0, columnsJson);
        this.triggerRefresh.emit({
            property: 'form',
            value: this.jsonForm
        });
    }
    conditionCheckVerify(element, ocrDocumentDetails, respose, jsonForm) {
        if (element &&
            respose &&
            element?.toLowerCase() === respose?.toLowerCase() &&
            ocrDocumentDetails[element]?.toLowerCase() !== this.formResponse[respose]?.toLowerCase()) {
            this.jsonForm.components[0].components = jsonForm?.components.map(res => {
                if (res && res?.key === element?.toLowerCase()) {
                    this.contentArray.push(`<p style="color:red;">${res.label} Not Match</p>\n`);
                }
                return res;
            });
        }
    }
    getEmittedData(data) {
        this.showOcrForm = false;
        this.btnVerify = true;
        this.submittedData = { ...data, ...this.submittedData };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i1.ActivatedRoute }, { token: FormioService }, { token: MAT_DIALOG_DATA, optional: true }, { token: AppService }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DynamicPageComponent, selector: "app-dynamic-page", inputs: { editId: "editId", pageId: "pageId", sourceid: "sourceid", externalParameters: "externalParameters", isReadOnly: "isReadOnly" }, outputs: { afterSubmit: "afterSubmit" }, providers: [SpeechRecognitionService, OCRService], viewQueries: [{ propertyName: "external_scanner", first: true, predicate: ["external_scanner"], descendants: true }, { propertyName: "formIO", first: true, predicate: ["formIO"], descendants: true }], ngImport: i0, template: "<div class=\"card\">\r\n  <div class=\"col my-3\" *ngIf=\"isTitle\">\r\n    <button type=\"button\" class=\"btn btn-cancel\" (click)=\"location.back()\" *ngIf=\"showTabBack\">\r\n      Back {{ parentGridPage && 'to ' + parentGridPage }}\r\n    </button>\r\n    <h6 class=\"font-weight-bold mt-3 mb-0 fromTitle\">{{ isTitle }}</h6>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"!showOcrForm\">\r\n    <div class=\"col-12 dynamic-page mt-0\" *ngIf=\"isformIO\">\r\n      <formio #formIO [form]=\"jsonForm\" [readOnly]=\"isReadOnly\" [submission]=\"submittedData\" (submit)=\"onSubmit($event)\"\r\n        (change)=\"customEvents($event)\" (click)=\"customClickEvents(submittedData, $event)\"\r\n        (customEvent)=\"customEventsButton($event)\" [refresh]=\"triggerRefresh\" [success]=\"submitSuccess\"\r\n        [error]=\"submitFailed\" (customEvent)=\"customEvent($event)\"></formio>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"showOcrForm\">\r\n    <div class=\"col-12 dynamic-page mt-0\">\r\n      <app-ocr-validation (ocrResponse)=\"getEmittedData($event)\" [currenttemplateResult]=\"templateResult\"\r\n        [formResponseData]=\"formResponse\" [submitionData]=\"submittedData\"></app-ocr-validation>\r\n    </div>\r\n  </div>\r\n</div>\r\n<button style=\"display: none\" id=\"external_scanner\" #external_scanner mat-raised-button class=\"btn-icon-bg\"\r\n  (ngxf-select)=\"uploadFile($event)\">\r\n  Scan\r\n</button>", styles: ["iframe{width:100%;border:0}iframe html{overflow:hidden}.card{background-color:var(--bg-light);box-shadow:none!important}:host ::ng-deep .formio .card{background-color:var(--bg-light)}:host ::ng-deep .formio .card .card-title{color:var(--label-text);font-weight:600}:host ::ng-deep .formio .card .col-form-label{color:var(--label-text);font-weight:600}.card-header .nav .nav-link{padding:0 5px!important}.formio-loader-wrapper{display:none!important}.back-btn{z-index:1}:host ::ng-deep .card .card-header{padding:.6rem 1rem}:host ::ng-deep .form-control.flatpickr-input:disabled{background-color:#e9ecef}\n"], dependencies: [{ kind: "directive", type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i7.FormioComponent, selector: "formio" }, { kind: "component", type: i7$1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i1$2.NgxfSelectDirective, selector: "[ngxf-select]", inputs: ["ngxf-validate", "multiple", "accept", "folder", "structure"], outputs: ["ngxf-select"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicPageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-dynamic-page', providers: [SpeechRecognitionService, OCRService], template: "<div class=\"card\">\r\n  <div class=\"col my-3\" *ngIf=\"isTitle\">\r\n    <button type=\"button\" class=\"btn btn-cancel\" (click)=\"location.back()\" *ngIf=\"showTabBack\">\r\n      Back {{ parentGridPage && 'to ' + parentGridPage }}\r\n    </button>\r\n    <h6 class=\"font-weight-bold mt-3 mb-0 fromTitle\">{{ isTitle }}</h6>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"!showOcrForm\">\r\n    <div class=\"col-12 dynamic-page mt-0\" *ngIf=\"isformIO\">\r\n      <formio #formIO [form]=\"jsonForm\" [readOnly]=\"isReadOnly\" [submission]=\"submittedData\" (submit)=\"onSubmit($event)\"\r\n        (change)=\"customEvents($event)\" (click)=\"customClickEvents(submittedData, $event)\"\r\n        (customEvent)=\"customEventsButton($event)\" [refresh]=\"triggerRefresh\" [success]=\"submitSuccess\"\r\n        [error]=\"submitFailed\" (customEvent)=\"customEvent($event)\"></formio>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"showOcrForm\">\r\n    <div class=\"col-12 dynamic-page mt-0\">\r\n      <app-ocr-validation (ocrResponse)=\"getEmittedData($event)\" [currenttemplateResult]=\"templateResult\"\r\n        [formResponseData]=\"formResponse\" [submitionData]=\"submittedData\"></app-ocr-validation>\r\n    </div>\r\n  </div>\r\n</div>\r\n<button style=\"display: none\" id=\"external_scanner\" #external_scanner mat-raised-button class=\"btn-icon-bg\"\r\n  (ngxf-select)=\"uploadFile($event)\">\r\n  Scan\r\n</button>", styles: ["iframe{width:100%;border:0}iframe html{overflow:hidden}.card{background-color:var(--bg-light);box-shadow:none!important}:host ::ng-deep .formio .card{background-color:var(--bg-light)}:host ::ng-deep .formio .card .card-title{color:var(--label-text);font-weight:600}:host ::ng-deep .formio .card .col-form-label{color:var(--label-text);font-weight:600}.card-header .nav .nav-link{padding:0 5px!important}.formio-loader-wrapper{display:none!important}.back-btn{z-index:1}:host ::ng-deep .card .card-header{padding:.6rem 1rem}:host ::ng-deep .form-control.flatpickr-input:disabled{background-color:#e9ecef}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i1.ActivatedRoute }, { type: FormioService }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: AppService }, { type: DataStoreService }]; }, propDecorators: { editId: [{
                type: Input
            }], pageId: [{
                type: Input
            }], sourceid: [{
                type: Input
            }], externalParameters: [{
                type: Input
            }], external_scanner: [{
                type: ViewChild,
                args: ['external_scanner']
            }], isReadOnly: [{
                type: Input
            }], afterSubmit: [{
                type: Output
            }], formIO: [{
                type: ViewChild,
                args: ['formIO']
            }] } });

const CONFIGURATOR_TITLE = 'Low Code Configurator';
class AppConstants {
    static categoryname = 'REFERRAL_ATTACHMENTS';
    static changePasswordText = 'text';
    static changePasswordPassword = 'password';
    static regexEmail = '^[0-9a-zA-Z.-]+[@][0-9a-zA-Z.-]+[.][0-9a-zA-Z]{2,}$';
    static regexPhone = '^[2-9][0-9]{2}-[2-9][0-9]{2}-[0-9]{4}$';
    static regexName = '^[a-zA-Z]{2,}$';
    static regexZipcode = '^[3][0-9]{4}$';
    static multiView = 'MV';
    static multiViewRoute = 'master-view';
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
    static providerError = 'Unable to Process the Request Contact support';
    static verificationSuccess = 'Verification code sent successfully';
    static emailVerificationSuccess = 'Link sent successfully. Please check your inbox for further instructions';
    static passwordNotMatch = 'Password does not match';
    static vaildEmail = 'Please enter a valid email';
    static requiredFields = 'Please fill all required fields!';
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
        { page: 'forms', title: 'Forms ' },
        { page: 'page-design', title: 'Page Design' },
        { page: 'dashboard-design', title: 'Dashboard Design' },
        { page: 'main-notification', title: 'Notification' },
        { page: 'dynamicPages', title: '' },
        { page: 'profile', title: 'Profile' }
    ];
    static errorList = [
        'Include at least one number',
        'Include at least one special character',
        'Include at least one upper case letter',
        'Include at least one lower case letter',
        'Be at least 8 characters in length',
        'Should not exceed sixteen (16) characters',
        'Space characters are invalid'
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
                const maxLength = parseInt(config.length.maxlength, 10);
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
        /* No error */
        return null;
    }
    static userTimeOut = 31;
    static userPing = 120;
}

class DeleteComponent {
    httpService;
    alert;
    dialogRef;
    deleteId;
    message;
    url;
    portConfig;
    successMsg;
    action;
    data;
    value;
    reasonStatus;
    enteredReason;
    isDisabled = false;
    reasonFormControl;
    rowData = {};
    constructor(httpService, alert, dialogRef, data) {
        this.httpService = httpService;
        this.alert = alert;
        this.dialogRef = dialogRef;
        if (data?.deleteId && data?.deleteId !== '' && data?.url && data?.url !== '') {
            this.deleteId = data.deleteId;
            this.action = data.action;
            this.reasonStatus = data.reasonStatus ?? false;
            this.message = data?.message ? data.message : 'Are you sure want to delete this record ?';
            this.url = data.url;
            this.portConfig = data.portConfig;
            this.successMsg = data?.successMsg ? data.successMsg : 'Deleted Successfully';
            this.data = data;
            this.enteredReason = '';
            this.rowData = { 'data': data.rowData };
            if (this.reasonStatus) {
                this.isDisabled = true;
            }
        }
    }
    ngOnInit() {
        this.reasonFormControl = new FormControl('', Validators.required);
    }
    deleteRecord() {
        if (this.action === 'update_activation') {
            this.updateActivation();
        }
        else if (this.action === 'update') {
            this.updateRecord();
        }
        else if (this.action === 'complete') {
            this.completeRecord();
        }
        else if (this.action === 'page_activation') {
            this.deactivatePage();
        }
        else {
            if (this.reasonStatus) {
                this.rowData = { ...this.rowData, 'reason': this.enteredReason };
                this.httpService.post(`${this.url}/${this.deleteId}`, this.rowData).subscribe(_result1 => {
                    this.closePopup('yes');
                    this.alert.success(this.successMsg);
                }, _error => {
                    this.closePopup();
                    this.alert.error(AppConstants.errorMessage);
                });
            }
            else {
                this.httpService.delete(`${this.url}/${this.deleteId}`).subscribe(_result => {
                    this.closePopup('yes');
                }, _error => {
                    this.closePopup();
                    this.alert.error(AppConstants.errorMessage);
                });
            }
        }
    }
    deactivatePage() {
        this.httpService.patch(this.url).subscribe(_result => {
            this.closePopup('yes');
            this.alert.success(this.successMsg);
        }, error => {
            this.closePopup();
            this.alert.error('Failed to deactivate page. Please try again.');
        });
    }
    updateRecord() {
        this.httpService.put(this.url, this.deleteId).subscribe(_result => {
            this.closePopup();
            this.alert.success(this.successMsg);
        }, _error => {
            this.closePopup();
            this.alert.error(AppConstants.errorMessage);
        });
    }
    closePopup(deleteData = null) {
        this.dialogRef.close({ data: deleteData });
    }
    completeRecord() {
        this.data.data.status = 'Closed';
        this.data.data.statuskey = '81C';
        this.data.data.completeddate = new Date().toISOString();
        this.httpService
            .post(this.url, {
            data: this.data.data
        })
            .subscribe(_result => {
            this.closePopup();
            this.alert.success(this.successMsg);
        }, _error => {
            this.closePopup();
            this.alert.error(AppConstants.errorMessage);
        });
    }
    updateActivation() {
        const userData = this.data.data;
        userData.isactive = userData.isactive === true ? false : true;
        this.httpService.post(this.url, [userData]).subscribe(_result => {
            this.closePopup();
            this.alert.success(this.successMsg);
        }, error => {
            this.closePopup();
            console.log(error);
        });
    }
    checkIsDisabled(text) {
        if (text && text.trim() != '') {
            this.isDisabled = false;
            this.enteredReason = text;
        }
        else {
            this.isDisabled = true;
            this.enteredReason = text;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DeleteComponent, deps: [{ token: HttpService }, { token: AlertService }, { token: i3.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DeleteComponent, selector: "app-delete", ngImport: i0, template: "<div class=\"modal-body\">\r\n  <p>{{ message }}</p>\r\n\r\n  <div class=\"text-right\">\r\n    <button class=\"btn btn-cancel mr-2\" mat-button (click)=\"closePopup()\">No</button>\r\n    <button class=\"btn btn-primary\" mat-button (click)=\"deleteRecord()\">Yes</button>\r\n  </div>\r\n</div>\r\n", styles: [".modal-body{padding:45px 30px 30px;text-align:center;width:500px}.modal-body p{color:var(--text-dark);font-size:var(--font-15);font-weight:500;margin-bottom:34px}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DeleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-delete', template: "<div class=\"modal-body\">\r\n  <p>{{ message }}</p>\r\n\r\n  <div class=\"text-right\">\r\n    <button class=\"btn btn-cancel mr-2\" mat-button (click)=\"closePopup()\">No</button>\r\n    <button class=\"btn btn-primary\" mat-button (click)=\"deleteRecord()\">Yes</button>\r\n  </div>\r\n</div>\r\n", styles: [".modal-body{padding:45px 30px 30px;text-align:center;width:500px}.modal-body p{color:var(--text-dark);font-size:var(--font-15);font-weight:500;margin-bottom:34px}\n"] }]
        }], ctorParameters: function () { return [{ type: HttpService }, { type: AlertService }, { type: i3.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }]; } });

const APP_PREFIX = 'GAMED-';
class LocalStorageService {
    constructor() {
        // This is intentional
    }
    static loadInitialState() {
        return Object.keys(localStorage).reduce((state, storageKey) => {
            if (storageKey.includes(APP_PREFIX)) {
                const stateKeys = storageKey
                    .replace(APP_PREFIX, '')
                    .toLowerCase()
                    .split('.')
                    .map(key => key
                    .split('-')
                    .map((token, index) => (index === 0 ? token : token.charAt(0).toUpperCase() + token.slice(1)))
                    .join(''));
                let currentStateRef = state;
                stateKeys.forEach((key, index) => {
                    if (index === stateKeys.length - 1) {
                        currentStateRef[key] = JSON.parse(localStorage.getItem(storageKey) || '');
                        return;
                    }
                    currentStateRef[key] = currentStateRef[key] || {};
                    currentStateRef = currentStateRef[key];
                });
            }
            return state;
        }, {});
    }
    setItem(key, value) {
        localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
    }
    getItem(key) {
        return localStorage.getItem(`${APP_PREFIX}${key}`) || '';
    }
    removeItem(key) {
        localStorage.removeItem(`${APP_PREFIX}${key}`);
    }
    /** Tests that localStorage exists, can be written to, and read from. */
    testLocalStorage() {
        const testValue = 'testValue';
        const testKey = 'testKey';
        const errorMessage = 'localStorage did not return expected value';
        this.setItem(testKey, testValue);
        const retrievedValue = this.getItem(testKey);
        this.removeItem(testKey);
        if (retrievedValue !== testValue) {
            throw new Error(errorMessage);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LocalStorageService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LocalStorageService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LocalStorageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

const LOCAL_STORAGE_KEY = 'target-tab-filter';
const PAGE_MODIFY_ROUTE = '/pages/dynamicpage/page/modify/';
const FILE_EXPORT_NAME_KEY = 'FILE EXPORT NAME';
const GRID_URL = '/solution/dynamicsearch/searchinput/';
const ROLE_CP_PUBLIC = 'role=CP_PUBLIC';
const STORAGE_KEY_DYNAMIC_TAB_PAGES = 'dynamic-tab-pages';
const POPUP_TYPE_OPEN = 'Open PopUp';
const FILTER_ID_KEY = 'horizantal-tab-filter';
class DynamicSearchComponent {
    router;
    route;
    cdref;
    fb;
    _formIO;
    storageService;
    formBuilder;
    _storeservice;
    searchcriteriamenutrigger;
    dataGrid;
    editPopUpDialogRef;
    formId;
    jsonForm;
    sourceid;
    fromTitle;
    submittedData;
    tableColumns;
    totalcount;
    pageId;
    inputFieldId;
    inputId;
    url;
    dataSource;
    popupPosition;
    pageType;
    searchCriteria;
    searchCriteriaArr;
    layouttype = 'vertical';
    id;
    searchparams;
    dublicateGridConfig;
    targetId;
    columns;
    updateGrid;
    totalCount;
    columnHeader;
    spliterSize = 0;
    gridspliterSize = 100;
    isOpen = true;
    icon = '';
    openclose = '';
    user;
    isAddButton = false;
    pageSaveID = '';
    showFilterRowPanel;
    popupData;
    callDialogPopup;
    popupDialogRef;
    showActionColumn;
    editId;
    isDialogPopup;
    item;
    showGridPage = true;
    manualPostApiUrl;
    // #check moduleid
    moduleid;
    purpose;
    isShowFormPage = false;
    outerRouting = new EventEmitter();
    userAction;
    rowData;
    checkBoxesMode;
    gridType;
    showExport = false;
    dropdownValues;
    gridOptions;
    filterOptions;
    selectedFilter;
    filterForm;
    gridConfig;
    tempaConfig;
    reorderColumns;
    storage;
    dataStoreService;
    alertService;
    dialog;
    http;
    screenWidth;
    currentPageId;
    displayMode;
    isResize;
    isUserPreferenceChange;
    formIO;
    dynamicSearchService;
    dynamicTabPageService;
    sequenceId;
    columnWidth;
    uploadedFile;
    imageData;
    attachmentService;
    showAdd;
    paramvalue;
    paramfield;
    tablefield;
    toTabId;
    uniquedata;
    pageList;
    isViewEnable;
    iconClass;
    titletab;
    header;
    openTab = false;
    selectedRowIndex;
    selectedColumnIndex;
    selectedCaption;
    selectedRowData;
    httpService;
    authService;
    localstore;
    pageBuilderService;
    location;
    loaderService;
    filterOptionsDropdown;
    registrationInfo;
    gridDynamicSearchForm;
    dynamicSearchArray;
    dynamicSearch;
    tableDropDown;
    columnDropDown;
    dynamicSearchResult;
    criteriaId = 0;
    saveButtonDisable = true;
    roleId;
    youthSearchJson;
    youthSearchBoolean = false;
    isInitialLoad = true;
    isDeleteRequire = false;
    isDeleteTime = 15;
    enteredReason = '';
    isDisabled = true;
    DeleteConfigURL;
    updateByIdAndPageIdWithReasonURL;
    deleteConfigData;
    DeleteRevertConfigURL;
    deletedReason = '';
    primary_column = '';
    adminAccessForDelete;
    isExternalDB;
    pagename;
    sourceKey;
    sourceValue;
    sourceType;
    currentPageSize = 10;
    deletePopupText = '';
    isEditThresholdRequire = false;
    environment;
    constructor(injector, router, route, cdref, fb, _formIO, storageService, formBuilder, _storeservice, data) {
        this.router = router;
        this.route = route;
        this.cdref = cdref;
        this.fb = fb;
        this._formIO = _formIO;
        this.storageService = storageService;
        this.formBuilder = formBuilder;
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.environment = res['RBACORG'].environment;
                this.httpService = res['HTTPSERVICE'];
            }
        });
        this.localstore = injector.get(LocalService);
        this.location = injector.get(Location);
        this.pageBuilderService = injector.get(PageBuilderService);
        this.storage = injector.get(LocalService);
        this.dataStoreService = injector.get(DataStoreService);
        this.attachmentService = injector.get(AttachmentsService);
        this.alertService = injector.get(AlertService);
        this.dialog = injector.get(MatDialog);
        this.http = injector.get(HttpClient);
        this.dynamicSearchService = injector.get(DynamicsearchService);
        this.authService = injector.get(AuthService);
        this.user = this.storage.getObj('user');
        this.userAction = this.dataStoreService.getData('userAction');
        this.manualPostApiUrl = '';
        this.dynamicTabPageService = injector.get(DynamicTabPageService);
        this.isViewEnable = this.localstore.getObj('isViewEnable');
        this.loaderService = injector.get(LoaderService);
        this.roleId = sessionStorage.getItem('role_id');
        if (data) {
            this.pageId = data.pageId ? data.pageId : this.pageId;
            this.inputFieldId = data.inputFieldId ? data.inputFieldId : this.inputFieldId;
            this.inputId = data.inputId ? data.inputId : this.inputId;
        }
        this.checkBoxesMode = 'always';
        this.gridOptions = [
            { label: 'Sorting', value: 'sort', code: '' },
            { label: 'Filtering', value: 'filter', code: '' },
            { label: 'Hide', value: 'hide', code: '' },
            { label: 'Fixed', value: 'fixed', code: '' },
            // { label: 'Default Columns', value: 'Choosable', code: '' },
            // { label: 'Visible', value: 'visible', code: '' },
            { label: 'Date', value: 'dateFormat', code: '' },
            { label: 'Mobile', value: 'mobileView', code: '' },
            { label: 'Tablet', value: 'tabView', code: '' }
        ];
        this.displayMode = 'compact';
        this.dataStoreService.setData('uploadFromGrid', false);
        this.titletab = JSON.parse(this.localstore.getItem('titletab'));
        this.header = JSON.parse(this.localstore.getItem(LOCAL_STORAGE_KEY));
        this.gridDynamicSearchForm = this.formBuilder.group({
            dynamicSearchArray: this.formBuilder.array([])
        });
    }
    ngAfterViewInit() {
        const observerConfig = { attributes: false, childList: true, subtree: true };
        function processNode(node, className, callback) {
            const elements = node.querySelectorAll(className);
            if (elements.length > 0) {
                elements.forEach(callback);
                return true;
            }
            return false;
        }
        const callback = (mutationsList, observer) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList' && mutation.addedNodes.length) {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === 1 && processNode(node, '.dx-checkbox-container', checkbox => {
                            checkbox.setAttribute('tabindex', '0');
                        })) {
                            observer.disconnect();
                        }
                    });
                }
            }
        };
        const observer = new MutationObserver(callback);
        observer.observe(document.body, observerConfig);
        const callback2 = (mutationsList, observer) => {
            mutationsList.forEach(mutation => {
                if (mutation.type === 'childList' && mutation.addedNodes.length) {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === 1) {
                            processNode(node, '.dx-checkbox-container', checkbox => {
                                checkbox.setAttribute('tabindex', '0');
                            });
                        }
                    });
                }
            });
        };
        const observer2 = new MutationObserver(callback2);
        observer2.observe(document.body, observerConfig);
        // this.route.paramMap.subscribe(params => {
        combineLatest([
            this.route.paramMap,
            this.route.queryParams
        ]).subscribe(([pathParams, queryParams]) => {
            const pageId = pathParams.get('pageId');
            const responseId = queryParams['responseId'];
            // this.route.paramMap.subscribe(() => {
            if (this.route.snapshot.routeConfig.path.indexOf('view') > -1) {
                this.gridType = 'view';
            }
            else {
                this.gridType = 'search';
            }
            this.tableColumns =
                this.tableColumns && typeof this.tableColumns === 'string' ? JSON.parse(this.tableColumns) : '';
            this.updateGrid = this.updateGrid && typeof this.updateGrid === 'string' ? JSON.parse(this.updateGrid) : '';
            this.formId = this.route.snapshot.paramMap.get('pageId')
                ? this.route.snapshot.paramMap.get('pageId')
                : this.pageId;
            this.inputFieldId = this.inputFieldId ? this.inputFieldId : null;
            this.dynamicSearchService.clickableData = this.inputFieldId;
            this.rowData = this.dynamicSearchService.rowData;
            if (this.route.snapshot.paramMap.get('pageSaveID')) {
                this.isAddButton = true;
            }
            else {
                this.isAddButton = false;
            }
            this.pageSaveID = this.route.snapshot.paramMap.get('pageSaveID');
            this.sourceKey = this.route.parent.snapshot.paramMap.get('sourceKey');
            this.sourceValue = this.route.parent.snapshot.paramMap.get('sourceValue');
            this.sourceType = this.route.parent.snapshot.paramMap.get('sourceType');
            this.moduleid = this.route.parent.parent.snapshot.paramMap.get('module');
            this.purpose = this.route.parent.parent.snapshot.paramMap.get('purpose');
            this.getTemplate(responseId);
            // this.getTemplate();
        });
        /* Clear data while page navigation */
        this.dynamicSearchService.clickedRowData = null;
        this.screenWidth = window.innerWidth;
        const REGISTRATION = this.storageService.getItem('REGISTRATION');
        if (REGISTRATION) {
            this.registrationInfo = JSON.parse(REGISTRATION);
        }
    }
    ngOnInit() {
        this.gridConfig = '';
        this.popupPosition = { of: window, at: 'top', my: 'top', offset: { y: 10 } };
        this.columns.forEach(column => {
            if (column.visible === undefined || column.visible === "") {
                column.visible = true;
            }
        });
        if (this.dynamicSearchService?.clickedIdData === true) {
            this.dynamicSearchService.clickedIdData = false;
        }
        this.loadFilterForm();
        this.removeAllDynamicSearchCondtion();
        // this.localstore.removeItem(LOCAL_STORAGE_KEY)
        this.localstore.setItem('gridAction', '');
    }
    loadFilterForm() {
        this.filterForm = this.fb.group({
            selectedFilter: ['']
        });
    }
    redirect() {
        this.router.navigate([PAGE_MODIFY_ROUTE + this.pageSaveID]);
    }
    getTemplate(responseId) {
        // private getTemplate() {
        this.removeAllDynamicSearchCondtion();
        this.dynamicSearchService.getTemplate(this.formId).subscribe(result => {
            if (result) {
                const gridPageInfo = {
                    id: this.formId,
                    name: result['data']['pagename']
                };
                this.setTemplate(result['data']);
                this.isExternalDB = result['data']['isExternalDB'];
                this.currentPageId = result['data']['pageid'];
                this.sequenceId = result['data']['id'];
                this.storage.setItem('parentGridPage', JSON.stringify(gridPageInfo));
                this.getUserGridConfig();
                this.getGrid(responseId);
                // this.getGrid();
            }
        });
    }
    getPageTabs(_pageId, sourceType, sourceKey, sourceValue, _youthId, navigationState) {
        this.dynamicSearchService.getPageTabs(_pageId).subscribe((result) => {
            if (result) {
                const tabId = result.data[0].activeVersion.id;
                if (result.data[0].activeVersion.tabconfig) {
                    const parentGridPage = {
                        id: this.formId,
                        name: this.fromTitle
                    };
                    this.storage.setItem('backToGridPage', JSON.stringify(parentGridPage));
                    navigationState.isHideBack = true;
                    let url = '';
                    if (result.data[0].pagetype === 'RBTP') {
                        url = '/pages/dynamic-routing/tab/';
                    }
                    else {
                        url = '/pages/dynamicpage/tab/';
                    }
                    const dynamicTab = url + tabId + '/' + _youthId + '/' + sourceKey + '/' + sourceValue + '/' + sourceType;
                    this.router.navigate([dynamicTab], { relativeTo: this.route, state: navigationState });
                }
                else {
                    this.routeToDynamicForms(result.data[0].pagetype, _pageId, _youthId, navigationState);
                }
            }
        });
    }
    routeToDynamicForms(type, _pageId, _youthId, navigationState) {
        if (type === 'ATPBDM') {
            if (window.location.href.indexOf('tab') > 0) {
                const dynamicTab = '../../page/' + _pageId + '/' + _youthId;
                this.router.navigate([dynamicTab], { relativeTo: this.route, state: navigationState });
            }
            else {
                const dynamicTab = PAGE_MODIFY_ROUTE + _pageId + '/' + _youthId;
                this.router.navigate([dynamicTab], { relativeTo: this.route, state: navigationState });
            }
        }
    }
    setTemplate(result) {
        this.setLayout(result);
        this.fromTitle = result.pagename;
        this.dataStoreService.setData('Tittle', this.fromTitle);
        this.pageType = result.pageDetails.pagetype ? result.pageDetails.pagetype.trim() : '';
        this.pageId = result && result.pageDetails ? result.pageDetails.id : null;
        if (this.pageType == 'DSP' || this.pageType == 'BUSP') {
            this.spliterSize = 30;
            this.gridspliterSize = 70;
        }
        this.setGrid(result);
        this.searchparams = result;
        this.targetId = this.searchparams?.gridconfig?.gridActionFormArray[0]?.link;
        this.tempaConfig = result.gridconfig;
        this.buildCriteria(result);
    }
    setGrid(result) {
        this.updateGrid = result.gridconfig;
        const filter = this.updateGrid?.gridConfigFormArray.filter(x => x.sort || x.filter);
        if (filter?.length > 0) {
            this.showFilterRowPanel = true;
        }
        if (this.updateGrid?.gridActionFormArray?.some(a => a.action != 'add')) {
            this.showActionColumn = true;
        }
        if (this.updateGrid?.isShowOnTop) {
            this.getOutsideGridAction(this.updateGrid?.gridActionFormArray?.find(a => a?.action?.toLowerCase() === 'add'));
        }
    }
    async getGrid(responseId) {
        // async getGrid() {
        this.storage.setObj(FILE_EXPORT_NAME_KEY, this.searchparams?.pagename);
        if (this.searchparams?.templatejson && !this.searchparams?.tableschemaconfig) {
            this.freeFormPageGrid(this.http, this.storage);
        }
        else {
            if (this.dynamicSearch && this.dynamicSearch.length > 0) {
                await this.getCriteriaByPageId();
                this.showGridPage = false;
            }
            else {
                this.showGridPage = true;
                this.removeAllDynamicSearchCondtion();
            }
            this.searchGrid(this.http, this.storage, responseId);
            // this.searchGrid(this.http, this.storage);
        }
    }
    setLayout(result) {
        if (result.templatejson) {
            this.jsonForm = result.templatejson;
            this.jsonForm.sor;
            this.fromTitle = this.jsonForm && this.jsonForm['page'] ? this.jsonForm['page'] : result.pagename;
            this.layouttype = 'left';
            this.layouttype = this.layouttype === 'left' ? 'horizontal' : 'vertical';
            if (this.layouttype === 'vertical') {
                this.icon = 'expand_more';
                this.openclose = 'Close';
            }
            else {
                this.icon = 'arrow_left';
                this.openclose = 'Close';
            }
        }
    }
    onSubmit(submission) {
        this.searchparams['filterId'] = sessionStorage.getItem(LOCAL_STORAGE_KEY);
        this.submittedData = submission;
        const data = {
            data: this.submittedData,
            pagedata: [this.searchparams]
        };
        const storagedata = this.storage;
        const http = this.http;
        const baseUrl = this.environment.apiHost;
        if (this.dynamicSearchResult && this.dynamicSearchResult.length > 0) {
            data['dynamicSearchArray'] = this.dynamicSearchResult;
        }
        let gridUrl;
        if (this.manualPostApiUrl != '') {
            gridUrl = this.manualPostApiUrl;
        }
        else {
            gridUrl = GRID_URL;
        }
        this.dataSource = new CustomStore({
            load: function (loadOptions) {
                const authToken = storagedata.getObj('token');
                const user = storagedata.getObj('user');
                ['skip', 'take', 'requireTotalCount', 'requireGroupCount', 'sort', 'filter', 'group'].forEach(function (i) {
                    if (i in loadOptions && isNotEmpty(loadOptions[i])) {
                        data[i] = loadOptions[i];
                    }
                    else {
                        delete data[i];
                    }
                });
                return http
                    .post(baseUrl + gridUrl, data, {
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${authToken}`,
                        uniqueid: `${user.id}`,
                        organizationid: `${user.userWorkInfo.organization.id}`,
                        rolekey: `${user.role.rolekey}`,
                        role: ROLE_CP_PUBLIC
                    })
                })
                    .toPromise()
                    .then((res) => ({ data: res.data, totalCount: Number(res.totalCount.count) }))
                    .catch(_error => this.alertService.error('Data Loading Error'));
            }
        });
        function isNotEmpty(value) {
            return value !== undefined && value !== null && value !== '';
        }
    }
    afterSubmitted(_event) {
        this.showGridPage = true;
        this.getGrid();
        this.item = null;
        if (this.isShowFormPage) {
            this.getOutsideGridAction(this.updateGrid?.gridActionFormArray?.find(a => a?.action?.toLowerCase() === 'add'));
        }
    }
    saveSearchCriteria() {
        if (this.submittedData && this.submittedData.data) {
            this.submittedData.data['searchCriteria'] = this.searchCriteria;
            const body = {
                id: null,
                pageID: this.formId,
                sourceid: '',
                sourcetype: 'I',
                data: this.submittedData.data,
                metadata: this.submittedData.metadata,
                afterEntityName: '',
                afterRuleAppName: '',
                beforeEntityName: '',
                beforeRuleAppName: '',
                parentsourceid: null
            };
            this.dynamicSearchService.saveSearchCriteria(body).subscribe(result => {
                const response = result['data'];
                this.submittedData = response;
                this.id = response.id;
                this.alertService.success('Seach criteria Saved successfully');
            });
        }
        else {
            this.alertService.success('Please perform search in order to save your search criteria');
        }
    }
    setSearch(newd) {
        this.submittedData = { data: newd };
        this.onSubmit(this.submittedData);
    }
    reset(type) {
        this.submittedData = { data: {} };
        this.getExportData(this.submittedData, type);
    }
    getExportData(submission, type) {
        this.submittedData = submission;
        this.searchparams['filterId'] = sessionStorage.getItem(LOCAL_STORAGE_KEY);
        const data = {
            inputFieldId: this.inputFieldId,
            pagedata: [this.searchparams],
            requireTotalCount: true,
            skip: 0,
            take: 5000
        };
        if (!data.inputFieldId) {
            data.inputFieldId = this.user?.userWorkInfo?.organization?.id;
        }
        if (this.dynamicSearchResult && this.dynamicSearchResult.length > 0) {
            data['dynamicSearchArray'] = this.dynamicSearchResult;
        }
        let gridUrl;
        if (this.manualPostApiUrl != '') {
            gridUrl = this.manualPostApiUrl;
        }
        else {
            gridUrl = GRID_URL;
        }
        this.dynamicSearchService.exportData(data, gridUrl).subscribe(value => {
            if (value['data'].length) {
                this.downloadFile(type, value['data']);
            }
            else {
                this.alertService.error('No data available');
            }
        });
    }
    downloadFile(type, data) {
        const fileData = {
            data: data,
            totalcount: data.length,
            pagename: this.fromTitle,
            gridConfigFormArray: this.updateGrid?.gridConfigFormArray
        };
        const fileType = type === 'excel' ? true : false;
        this.dynamicSearchService.generateDocument(fileData, fileType).subscribe(result => {
            if (result) {
                const awsUrl = result['data'].awsUrl;
                this.alertService.success('Document Generated successfully.');
                if (type === 'print') {
                    // If type is print it will open browser print preview
                    es6printJS({ printable: awsUrl, type: 'pdf', showModal: true });
                    return;
                }
                window.open(awsUrl, '_blank');
            }
        }, error => {
            this.alertService.error(error.message);
        });
    }
    searchGrid(http, storage, responseId) {
        // let customFilter = responseId;
        // searchGrid(http, storage) {
        const outsideFormID = this.updateGrid?.gridActionFormArray
            ?.find(a => a?.action?.toLowerCase() === 'add')
            ?.link?.split('_sourceform')[0];
        const primary_table = this.searchparams.tableschemaconfig.tablefields.primary;
        console.log(primary_table.replace('_audit', '_id'), 'primary');
        let queryData;
        if (this.sourceKey && this.sourceValue && this.sourceType) {
            queryData = { data: {} };
            queryData.data[this.sourceKey] = (this.sourceType === 'number') ? Number(this.sourceValue) : this.sourceValue;
        }
        this.searchparams['filterId'] = sessionStorage.getItem(LOCAL_STORAGE_KEY);
        const data = {
            data: this.submittedData,
            queryData: queryData,
            pagedata: [this.searchparams],
            inputFieldId: this.inputFieldId,
            inputId: this.inputId,
            requireTotalCount: true,
            restrict: true,
            associatedFormId: outsideFormID,
            roleId: sessionStorage.getItem('role_id'),
            // roleId: this.roleId,
            selectedValue: this.paramvalue,
            selectedField: this.paramfield,
            redirectFilterId: responseId
        };
        if (this.dynamicSearchResult && this.dynamicSearchResult.length > 0) {
            data['dynamicSearchArray'] = this.dynamicSearchResult;
        }
        const baseUrl = this.environment.apiHost;
        const ctrl = this;
        let gridUrl;
        if (this.manualPostApiUrl != '') {
            gridUrl = this.manualPostApiUrl;
        }
        else {
            gridUrl = GRID_URL;
        }
        const _this = this;
        this.dataSource = new CustomStore({
            load: function (loadOptions) {
                const authToken = storage.getItem('jwt-token');
                const user = storage.getObj('user');
                if (!user) {
                    // fix for user null immediately after login
                    return setTimeout(() => {
                        _this.searchGrid(http, storage);
                    }, 1000);
                }
                ['skip', 'take', 'requireTotalCount', 'requireGroupCount', 'sort', 'filter', 'pageconfig', 'group'].forEach(function (item) {
                    if (item in loadOptions && isNotEmpty(loadOptions[item])) {
                        data[item] = loadOptions[item];
                    }
                    else {
                        delete data[item];
                    }
                });
                // if (customFilter) {
                //   // Initialize the filter if it doesn't exist
                //     loadOptions.filter = ["physicaldescription.physical_description_id", "=", customFilter];
                //     data['filter'] = loadOptions['filter'];
                // }
                data.requireTotalCount = true;
                _this.loaderService.show();
                return http
                    .post(baseUrl + gridUrl, data, {
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${authToken}`,
                        uniqueid: `${user.id}`,
                        organizationid: `${user?.userWorkInfo?.organization?.id ? user.userWorkInfo.organization.id : ''}`,
                        rolekey: `${user?.role?.rolekey ? user.role.rolekey : ''}`,
                        role: ROLE_CP_PUBLIC
                    })
                })
                    .toPromise()
                    .then((res) => {
                    if (Number(res.data.totalCount.count) === 0 && data.redirectFilterId && data.redirectFilterId.trim().length > 0) {
                        _this.getGrid();
                    }
                    _this.showAdd = res.data?.result[0]?.rbacConditions[0]?.hide;
                    this.primary_column = res.data?.result[0]?.primaryColumn;
                    for (let i = 0; i < res?.data?.data?.length; i++) {
                        for (const key in res?.data?.data[i]) {
                            if (res?.data?.data[i]?.[key]) {
                                const val = res?.data?.data[i]?.[key];
                                if ((typeof val === 'string' || val instanceof String) && val?.includes('[')) {
                                    res.data.data[i][key] = res.data.data[i][key].replace('[', '').replace(']', '').replaceAll('"', '');
                                }
                            }
                        }
                    }
                    ctrl.showGridPage = !((res?.data?.totalCount?.count === 0 || res?.data?.totalCount?.count === 1) &&
                        ctrl.updateGrid?.isInitialFormLoad);
                    this.isShowFormPage = ctrl.showGridPage;
                    if (!ctrl.showGridPage && ctrl.updateGrid?.gridActionFormArray && ctrl.updateGrid?.gridActionFormArray.length) {
                        const formInfo = ctrl.updateGrid?.gridActionFormArray.find(ele => ele.isOutsideGrid);
                        ctrl.item = {
                            component: DynamicPageComponent,
                            pageId: formInfo?.link,
                            editId: res?.data?.data[0]?.id,
                            outputs: {
                                afterSubmit: event => ctrl.afterSubmitted(event)
                            },
                            isInitialFormLoad: ctrl.updateGrid?.isInitialFormLoad,
                            isShowOnTop: ctrl.updateGrid?.isShowOnTop
                        };
                    }
                    if (ctrl.showGridPage && ctrl.updateGrid?.isShowOnTop && ctrl.updateGrid?.gridActionFormArray && ctrl.updateGrid?.gridActionFormArray.length) {
                        const formInfo = ctrl.updateGrid?.gridActionFormArray.find(ele => ele.isOutsideGrid);
                        ctrl.item = {
                            component: DynamicPageComponent,
                            pageId: formInfo?.link,
                            outputs: {
                                afterSubmit: event => ctrl.afterSubmitted(event)
                            },
                            isInitialFormLoad: ctrl.updateGrid?.isInitialFormLoad,
                            isShowOnTop: ctrl.updateGrid?.isShowOnTop
                        };
                    }
                    const dynamicSearchData = [];
                    const storedTabData = JSON.parse(JSON.parse(storage.getItem(STORAGE_KEY_DYNAMIC_TAB_PAGES)));
                    const arrresult = [];
                    const resultdata = res.data.result;
                    resultdata.map(n => {
                        n.row.map((c) => {
                            if (storedTabData != null) {
                                storedTabData.map((c1, index) => {
                                    if (index > 0 && c1.pfield == c.name) {
                                        const obj = Object.assign({}, c1);
                                        arrresult.push(obj);
                                    }
                                });
                            }
                        });
                    });
                    this.uniquedata = arrresult.filter((value, index, _array) => index == arrresult.findIndex(item => item.id == value.id));
                    res.data.result.map(n => {
                        const parentObj = {};
                        n.row.forEach((c) => {
                            let columnData = c.value;
                            const [tableName, columnName] = c.name.split('.');
                            columnData = typeof columnData === 'number' ? c.value.toString() : c.value;
                            if (parentObj[tableName]) {
                                parentObj[tableName][columnName] = columnData;
                            }
                            else {
                                parentObj[tableName] = {};
                                parentObj[tableName][columnName] = columnData;
                            }
                            parentObj['rbacConditions'] = n.rbacConditions;
                            parentObj['businessRules'] = n.businessRules ? n.businessRules : [];
                            parentObj['routedata'] = this.uniquedata;
                            parentObj['primaryColumn'] = n.primaryColumn;
                        });
                        dynamicSearchData.push(parentObj);
                    });
                    _this.loaderService.hide();
                    return {
                        data: dynamicSearchData,
                        totalCount: Number(res?.data.totalCount.count)
                    };
                })
                    .catch(_error => this.alertService.error('Failed to load data'));
            }
        });
        function isNotEmpty(value) {
            return value !== undefined && value !== null && value !== '';
        }
    }
    freeFormPageGrid(http, storage) {
        const data = {
            data: this.submittedData,
            pagedata: [this.searchparams],
            inputFieldId: this.inputFieldId,
            inputId: this.inputId,
            requireTotalCount: true,
            restrict: true,
            roleId: sessionStorage.getItem('role_id')
            // roleId: this.roleId
        };
        const gridActionFormArray = this.updateGrid.gridActionFormArray.map(a => ({
            ...a,
            link: String(this.searchparams.pageid)
        }));
        this.updateGrid = { ...this.updateGrid, gridActionFormArray };
        const baseUrl = this.environment.apiHost;
        const _this = this;
        this.dataSource = new CustomStore({
            load: function (loadOptions) {
                const authToken = storage.getItem('jwt-token');
                const user = storage.getObj('user');
                if (!user) {
                    return setTimeout(() => {
                        _this.freeFormPageGrid(http, storage);
                    }, 1000);
                }
                ['skip', 'take', 'requireTotalCount', 'requireGroupCount', 'sort', 'filter', 'pageconfig', 'group'].forEach(item => {
                    if (item in loadOptions && loadOptions[item].isNotEmpty()) {
                        data[item] = loadOptions[item];
                    }
                    else {
                        delete data[item];
                    }
                });
                const gridUrl = `/solution/formresponse/getByPageId/${_this.searchparams.pageid}`;
                return http
                    .get(baseUrl + gridUrl, {
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${authToken}`,
                        uniqueid: `${user.id}`,
                        organizationid: `${user?.userWorkInfo?.organization?.id ? user.userWorkInfo.organization.id : ''}`,
                        rolekey: `${user?.role?.rolekey ? user.role.rolekey : ''}`,
                        role: ROLE_CP_PUBLIC
                    })
                })
                    .toPromise()
                    .then((res) => {
                    const formResponses = res.data.pageResponses.map(a => ({
                        ...a.response,
                        id: a.id,
                        rbacConditions: a.rbacConditions
                    }));
                    const allowedResponseKeys = _this.searchparams.templatejson
                        .components.filter(a => a.key !== 'submit')
                        .map(b => b.key);
                    allowedResponseKeys.push('id', 'rbacConditions');
                    const filteredResponseKeys = formResponses.map(a => Object.keys(a)
                        .filter(key => allowedResponseKeys.includes(key))
                        .reduce((obj, key) => {
                        obj[key] = a[key];
                        return obj;
                    }, {}));
                    return {
                        data: filteredResponseKeys,
                        totalCount: Number(filteredResponseKeys.length)
                    };
                })
                    .catch(_error => this.alertService.error('Failed to load data'));
            }
        });
    }
    onClose() {
        if (this.isOpen) {
            this.spliterSize = 30;
            this.gridspliterSize = 70;
            this.isOpen = false;
            if (this.layouttype === 'vertical') {
                this.icon = 'expand_more';
            }
            else {
                this.icon = 'arrow_left';
            }
            this.openclose = 'Close';
        }
        else {
            this.spliterSize = 0;
            this.gridspliterSize = 100;
            this.isOpen = true;
            if (this.layouttype === 'vertical') {
                this.icon = 'expand_less';
            }
            else {
                this.icon = 'arrow_right';
            }
            this.openclose = 'Open';
        }
    }
    getRouter(data, _item) {
        this.selectedRowData = data;
        this.openTab = false;
        this.selectedRowIndex = data?.rowIndex;
        this.selectedColumnIndex = data?.columnIndex;
        this.selectedCaption = data?.column?.caption;
        const navigateState = {
            externalLink: true,
            isReadOnly: false,
            title: this.fromTitle
        };
        this.dataStoreService.setData('gridAction', 'link');
        this.dynamicSearchService.clickedIdData = null;
        this.dynamicSearchService.clickedRowData = null;
        let url, datatype;
        this.updateGrid = typeof this.updateGrid === 'string' ? JSON.parse(this.updateGrid) : this.updateGrid;
        const gridArr = this.updateGrid?.gridConfigFormArray;
        const column = data.column.dataField;
        const tableschemaconfig = this.searchparams.tableschemaconfig;
        for (const key of gridArr) {
            if (key.columnDef === column) {
                url = key.link;
                const result = tableschemaconfig.fieldmapping.filter(x => (x.tablename + '.' + x.field) === key.columnDef);
                datatype = result[0].datatype;
                break;
            }
        }
        this.loadRouter(url, datatype, column, data, navigateState);
    }
    loadRouter(url, datatype, column, data, navigateState) {
        if (url) {
            this.dynamicSearchService.clickedRowData = data?.data;
            const URLSs = this.urlget(data, 'editUrl', '');
            this.dynamicSearchService.changePage(true);
            const dataKeys = Object.keys(data?.data);
            if (dataKeys.includes(URLSs)) {
                if (!data?.data[URLSs]) {
                    this.alertService.warn(data.displayValue + ' not generated properly!');
                }
                else {
                    const s3Url = data?.data[URLSs].includes('.com/') ? data?.data[URLSs].split('.com/')[1] : data?.data[URLSs];
                    this.downloadFileInternally(this.environment.s3BucketUrl + '/' + s3Url, data?.data['filename']);
                }
            }
            else {
                data.data.fromGrid = true;
                data.data.externalLink = true;
                this.dynamicSearchService.id.next(data.data[Object.keys(data.data)[0]].id);
                this.getPageTabs(url, datatype, column, data.data[column.split('.')[0]][column.split('.')[1]], data.data[Object.keys(data.data)[0]].id, navigateState);
            }
        }
    }
    editData(data) {
        const URLSs = this.urlget(data, 'editUrl', '');
        this.dynamicSearchService.id.next(data.data[Object.keys(data.data)[0]].id);
        this.router.navigateByUrl(URLSs);
    }
    viewData(data) {
        const URLSs = this.urlget(data, 'editUrl', '');
        this.router.navigateByUrl(URLSs);
    }
    deleteData(data) {
        const URLSs = this.urlget(data, 'deleteUrl', '');
        this.router.navigateByUrl(URLSs);
    }
    openLink(data) {
        const URLSs = this.urlget(data, 'externalLink', '');
        this.router.navigateByUrl(URLSs);
    }
    urlget(data, obj, pUrl) {
        let url = obj ? this.updateGrid[obj] : pUrl;
        if (url) {
            const urlparamArr = url.split('/');
            for (const key of urlparamArr) {
                if (key.indexOf('{') !== -1 && data.data) {
                    url = this.setURL(key, url, data);
                    url = this.setCurrentUrl(key, url);
                }
            }
            url = url.replace('/undefined', '');
            const urlparamArr1 = url.split('/');
            url = this.setUrlParam(urlparamArr1, url, data);
        }
        /* remove duplicate forward slashes from the URL */
        url = url.replace(/([^:]\/)\/+/g, '$1');
        return url;
    }
    setURL(key, url, data) {
        if (key === '{sourceId}') {
            const val = {
                sourceId: this.inputFieldId
            };
            return url.replace(key, val[key.substring(1, key.indexOf('}'))]);
        }
        else if (key === '{purpose}') {
            const val = {
                purpose: this.purpose
            };
            return url.replace(key, val[key.substring(1, key.indexOf('}'))]);
        }
        else {
            return url.replace(key, data.data[key.substring(1, key.indexOf('}'))]);
        }
    }
    setCurrentUrl(key, url) {
        if (this.router.url && key === '{pagepath}') {
            const currentURL = this.router.url.split('mergepage');
            if (currentURL?.length) {
                return url.replace('/pages/dynamicpage/', currentURL[0]);
            }
        }
    }
    setUrlParam(urlparamArr1, url, data) {
        for (const key of urlparamArr1) {
            if (key.indexOf('{') !== -1 && data.data) {
                return url.replace(key, data.data[key.substring(1, key.indexOf('}'))]);
            }
        }
    }
    // dynamic action link
    getInsideGridAction(data, item) {
        /* Complexity-14*/
        this.localstore.setItem('gridAction', item.action);
        if (item.action === 'search' || item.action === 'edit' || item.action === 'view' || item.action === 'select') {
            /* Complexity splitted function*/
            this.actionCheck(item, data);
        }
        else if (item.action === 'delete') {
            this.deleteConfirmation(data, item);
        }
        else if (item.action === 'complete') {
            this.completeConfirmation(data, item);
        }
        else if (item.action === 'narrative') {
            this.popup(data.data.narrative, item);
        }
        else if (item.action === 'history') {
            if (item.type === POPUP_TYPE_OPEN) {
                /* Complexity splitted function*/
                this.popupTypeCheck(item, data);
            }
        }
        else if (item.action === 'print') {
            /* Complexity splitted function*/
            this.actionPrintCheck(data);
        }
        else if (item.action === 'email') {
            /* Complexity splitted function*/
            this.actionEmailCheck(data);
        }
        else if (item.action === 'download') {
            /* Complexity splitted function*/
            this.actionDownloadCheck(item, data);
        }
        else if (item.action === 'TriggerScheduling') {
            this.startScheduling(data.data[Object.keys(data.data)[0]].id);
        }
        else if (item.action === 'Trigger') {
            this.startScheduling(data.data[Object.keys(data.data)[0]].id, item?.link);
        }
        else if (item.action === 'Survey') {
            this.actionSurveyCheck(data); /* Complexity splitted function*/
        }
        else if (item.action === 'info') {
            this.actionInfoCheck(data, item); /* Complexity splitted function*/
        }
        else if (item.action === 'copy') {
            this.actionCheck(item, data); /* Complexity splitted function*/
        }
    }
    actionCheck(item, data) {
        /* From getInsideGridAction() */
        const action = item.action;
        let editDataStatus = '';
        const gridConigForDeleteRequire = this.searchparams?.gridconfig;
        const tableschemaconfig = this.searchparams?.tableschemaconfig;
        let viewPrimaryTable = '';
        if (tableschemaconfig.objectType == 'view') {
            const firstKey = Object.keys(data.data)[0];
            viewPrimaryTable = data.data[firstKey]['primary_object'];
        }
        if (this.isEditThresholdRequire || gridConigForDeleteRequire?.isEditThresholdRequire) {
            this.isEditThresholdRequire = true;
        }
        if (item.action === 'edit' && this.isEditThresholdRequire) {
            const primary_id = this.getPrimaryColumnId(data.data.primaryColumn, data);
            this.dynamicSearchService.checkEditStatus(this.pageId, primary_id).subscribe(result => {
                if (result['data'] && result['data'].length > 0 && result['data'][0]['status']) {
                    editDataStatus = result['data'][0]['status'];
                    this.editActionCheck(item, data, editDataStatus);
                }
                else {
                    this.getGrid();
                    this.alertService.error('Something went wrong');
                }
            }, _error => {
                this.alertService.error(AppConstants$1.errorMessage);
            });
        }
        else {
            this.dataStoreService.setData('gridAction', action);
            const navigateState = {
                externalLink: true,
                isReadOnly: false,
                title: item.action[0].toUpperCase() + item.action.slice(1) + ' ' + this.fromTitle,
                personId: null,
                pageId: null
            };
            if (item.action === 'view') {
                navigateState.isReadOnly = true;
            }
            if (item.type === POPUP_TYPE_OPEN) {
                const dialogConfig = new MatDialogConfig();
                dialogConfig.disableClose = false;
                dialogConfig.height = '90%';
                dialogConfig.width = '100%';
                this.actionViewCheck(item, dialogConfig, data);
                const ref = this.dialog.open(DynamicPageComponent, dialogConfig);
                ref.afterClosed().subscribe(() => {
                    this.getGrid();
                });
            }
            else {
                if (item.action === 'copy') {
                    const user = this.localstore.getObj('user');
                    console.log(data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn]);
                    console.log(Object.keys(data.data)[0]);
                    const respid = typeof data.data[Object.keys(data.data)[0]] == 'string'
                        ? data.data?.[data.data.primaryColumn] || data.data?.ID
                        : data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn] || data.data[Object.keys(data.data)[0]]?.id;
                    const requestData = {
                        "id": respid,
                        "schema": tableschemaconfig.schema,
                        "tablename": tableschemaconfig.objectType !== 'view' ? Object.keys(data.data)[0] : viewPrimaryTable,
                        "currentUser": user?.id
                    };
                    this.dynamicSearchService.rowVersion(requestData).subscribe((res) => {
                        console.log(res);
                        const url = this.location.path();
                        this.router.navigate([url], {
                            relativeTo: this.route,
                            state: navigateState
                        });
                        this.searchGrid(this.http, this.storage);
                        this.alertService.success('Row added successfully');
                    }, _error => {
                        this.alertService.error(_error.error.message);
                    });
                }
                else if (this.router?.url.includes('dynamic-routing')) {
                    const url = '../../../dynamicpage/page/modify/' + item.link + '/' + data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn];
                    this.router.navigate([url], {
                        relativeTo: this.route,
                        state: navigateState
                    });
                    // this.actionRouterConfig(data, item, navigateState);
                }
                else if (item.link.includes('pages/')) {
                    const link = item.link.replace('{id}', data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn]);
                    this.router.navigateByUrl('/' + link, { state: item });
                }
                else if (item.link.includes('mergepage')) {
                    let url = item.link + '/' + data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn];
                    if (item.link.includes('{sourceId}')) {
                        url = this.urlget(data, '', item.link);
                        url = url + '/' + data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn];
                    }
                    this.router.navigate([url], { relativeTo: this.route, state: navigateState });
                }
                else if (item.link.includes('sourceid')) {
                    const formId = item.link.split('_sourceid')[0];
                    const url = '/pages/dynamic-routing/' + data.data.sourceid + '/dynamicpage/page/modify/' + formId;
                    this.router.navigate([url + '/' + data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn]], {
                        relativeTo: this.route,
                        state: navigateState
                    });
                }
                else if (item.link.includes('_page')) {
                    // Transactions Page - edit routing changes
                    const formId = item.link.split('_page')[0];
                    const url = '/pages/dynamic-routing/' + data.data.clientaccountid + '/dynamicpage/page/modify/' + formId;
                    this.router.navigate([url + '/' + data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn]], {
                        relativeTo: this.route,
                        state: navigateState
                    });
                }
                else {
                    const pageid = item.link ? item.link : this.pageId;
                    const respid = typeof data.data[Object.keys(data.data)[0]] == 'string'
                        ? data.data?.[data.data.primaryColumn] || data.data?.ID
                        : data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn] || data.data[Object.keys(data.data)[0]]?.id;
                    const url = '/pages/dynamicpage/page/modify/' + pageid + '/' + respid;
                    this.router.navigate([url], { relativeTo: this.route, state: navigateState });
                }
            }
        }
    }
    editActionCheck(item, data, editDataStatus) {
        if (item.action === 'edit' && editDataStatus === 'OWNER_ONLY_EDIT') {
            this.alertService.error('You do not have permission to edit this record. Only the owner who created the record can make changes.');
            this.getGrid();
        }
        else if (item.action === 'edit' && editDataStatus === 'NO_EDIT') {
            this.alertService.error('The edit window for this record has expired and changes cannot be made at this time.');
            this.getGrid();
        }
        else {
            const action = item.action;
            this.dataStoreService.setData('gridAction', action);
            const navigateState = {
                externalLink: true,
                isReadOnly: false,
                title: item.action[0].toUpperCase() + item.action.slice(1) + ' ' + this.fromTitle,
                personId: null,
                pageId: null
            };
            if (this.router?.url.includes('dynamic-routing')) {
                const url = '../../../dynamicpage/page/modify/' + item.link + '/' + data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn];
                this.router.navigate([url], {
                    relativeTo: this.route,
                    state: navigateState
                });
                // this.actionRouterConfig(data, item, navigateState);
            }
            else if (item.link.includes('pages/')) {
                const link = item.link.replace('{id}', data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn]);
                this.router.navigateByUrl('/' + link, { state: item });
            }
            else if (item.link.includes('mergepage')) {
                let url = item.link + '/' + data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn];
                if (item.link.includes('{sourceId}')) {
                    url = this.urlget(data, '', item.link);
                    url = url + '/' + data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn];
                }
                this.router.navigate([url], { relativeTo: this.route, state: navigateState });
            }
            else if (item.link.includes('sourceid')) {
                const formId = item.link.split('_sourceid')[0];
                const url = '/pages/dynamic-routing/' + data.data.sourceid + '/dynamicpage/page/modify/' + formId;
                this.router.navigate([url + '/' + data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn]], {
                    relativeTo: this.route,
                    state: navigateState
                });
            }
            else if (item.link.includes('_page')) {
                // Transactions Page - edit routing changes
                const formId = item.link.split('_page')[0];
                const url = '/pages/dynamic-routing/' + data.data.clientaccountid + '/dynamicpage/page/modify/' + formId;
                this.router.navigate([url + '/' + data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn]], {
                    relativeTo: this.route,
                    state: navigateState
                });
            }
            else {
                const pageid = item.link ? item.link : this.pageId;
                const respid = typeof data.data[Object.keys(data.data)[0]] == 'string'
                    ? data.data?.[data.data.primaryColumn] || data.data?.ID
                    : data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn] || data.data[Object.keys(data.data)[0]]?.id;
                const url = '/pages/dynamicpage/page/modify/' + pageid + '/' + respid;
                this.router.navigate([url], { relativeTo: this.route, state: navigateState });
            }
        }
    }
    actionViewCheck(item, dialogConfig, data) {
        /* From actionCheck()--> getInsideGridAction() */
        if (item.action === 'view') {
            dialogConfig.data = {
                editId: data.data[Object.keys(data.data)[0]].id,
                pageId: item.link,
                isPopup: true,
                isReadOnly: true
            };
        }
        else {
            dialogConfig.data = { editId: data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn], pageId: item.link, isPopup: true };
        }
    }
    actionRouterConfig(data, item, navigateState) {
        let url = this.router.url;
        if (this.outerRouting?.observers?.length) {
            data.item = item;
            this.dataStoreService.setData('outerRoutingData', data);
            this.outerRouting.emit(data);
        }
        else {
            if (item.link.includes('multipleform')) {
                url = url.split('mergepage')[0];
                const formId = item.link.split('_multipleform')[0];
                url = url + 'dynamicpage/page/modify/' + formId;
            }
            else if (item.link.includes('sourceform')) {
                // for child removal - edit/view routing change
                url = url.split('mergepage')[0];
                const formId = item.link.split('_sourceform')[0];
                url = url + 'page/modify/' + formId;
                if (item.link.split('_sourceform')[1] && item.link.split('_sourceform')[1].includes('_subtab_')) {
                    // External Portal - Staff with subtabs
                    const link = item.link.split('_sourceform')[1];
                    /* Get subtab name for url */
                    const subtab = link.split('_subtab_')[1];
                    url = subtab + '/' + url;
                    /* Disable back button */
                    navigateState.externalLink = false;
                    /* set default page title */
                    navigateState.title = '';
                    this.dynamicSearchService.changePage(true);
                }
            }
            this.router.navigate([url + '/' + data.data[Object.keys(data.data)[0]]?.[data.data.primaryColumn]], {
                relativeTo: this.route,
                state: navigateState
            });
        }
    }
    onRowPrepared(e) {
        if (e.rowType == 'data' &&
            this.updateGrid?.highlightRow?.columnName &&
            e.data[this.updateGrid?.highlightRow?.columnName.split('.')[0]][this.updateGrid?.highlightRow?.columnName.split('.')[1]] == this.updateGrid?.highlightRow?.columnValue) {
            e.rowElement.style.backgroundColor = this.updateGrid?.highlightRow?.color;
            e.rowElement.className = e.rowElement.className.replace('dx-row-alt', '');
        }
    }
    popupTypeCheck(item, data) {
        /* From getInsideGridAction()*/
        const srcid = this.route?.parent?.parent?.parent?.parent?.snapshot?.paramMap.get('sourceid')
            ? this.route?.parent?.parent?.parent?.parent?.snapshot?.paramMap.get('sourceid')
            : this.route?.parent?.parent?.parent?.parent?.parent?.parent?.snapshot?.paramMap.get('sourceid');
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.height = '90%';
        dialogConfig.width = '100%';
        dialogConfig.data = { pageId: item.link, inputFieldId: data.key.id, inputId: srcid };
        const ref = this.dialog.open(DynamicSearchComponent, dialogConfig);
        ref.afterClosed().subscribe(() => {
            this.getGrid();
        });
    }
    actionPrintCheck(data) {
        /* From getInsideGridAction()*/
        if (!data.data.s3bucketurl) {
            this.alertService.warn('No pdf found');
            return;
        }
        const pdfurl = this.environment.s3BucketUrl + '/' + data.data.s3bucketurl;
        es6printJS({ printable: pdfurl, type: 'pdf', showModal: true });
    }
    actionEmailCheck(data) {
        /* From getInsideGridAction()*/
        if (!data.data.email) {
            this.alertService.warn('Email is not available');
            return;
        }
        if (!data.data.s3bucketurl) {
            this.alertService.warn('No Attachment found');
            return;
        }
        // #check fromaddress is hardcoded
        this.dynamicSearchService
            .sendMail({
            subject: data.data.subject,
            content: `${data.data.content_body}<p>Thanks <br> ${this.user.firstName} ${this.user.lastName} <br>  ${this.user.role.description} </p>`,
            s3bucketkey: data.data.s3bucketurl,
            toadresses: [data.data.email],
            fromaddress: 'vmathew@dminc.com'
        })
            .subscribe(() => {
            this.alertService.success('Email Sent successfully');
        });
    }
    actionDownloadCheck(item, data) {
        /* From getInsideGridAction()*/
        if (item.type === 'Document Report Generation') {
            this.dataStoreService.setData('pageData', this.searchparams);
            this.dataStoreService.setData('gridData', data?.data);
            const dialogConfig = new MatDialogConfig();
            dialogConfig.disableClose = false;
            dialogConfig.height = '90%';
            dialogConfig.width = '100%';
            dialogConfig.data = { editId: data.data[Object.keys(data.data)[0]].id, pageId: item.link, isPopup: true };
            const ref = this.dialog.open(DynamicPageComponent, dialogConfig);
            ref.afterClosed().subscribe(() => {
                this.getGrid();
            });
        }
    }
    actionSurveyCheck(data) {
        /* From getInsideGridAction()*/
        if (data.data.pagedataid) {
            data.data.isReadOnly = true;
        }
        this.router.navigateByUrl(PAGE_MODIFY_ROUTE +
            data.data[Object.keys(data.data)[0]].id +
            (data.data.pagedataid ? '/' + data.data.pagedataid : ''), { state: data.data });
    }
    getOutsideGridAction(item) {
        this.storage.setItem('AddAction', true);
        this.localstore.setItem('gridAction', item.action);
        const data = item;
        const action = item.action;
        this.dataStoreService.setData('gridAction', action);
        const navigateState = {
            externalLink: true,
            title: item.action[0].toUpperCase() + item.action.slice(1) + ' ' + this.fromTitle,
            personId: null
        };
        // if (navigateState?.title) {
        //   sessionStorage.setItem('add-title', navigateState?.title);
        // }
        if (data.type == 'External Link') {
            this.getVersionList(item?.link, null, item);
        }
        else if (data.type == POPUP_TYPE_OPEN) {
            this.setDialogConfig(item);
        }
        else {
            if (this.router?.url.includes('dynamic-routing')) {
                this.dynamicRouteCheck(data, item, navigateState);
            }
            else if (data.link.includes('mergepage')) {
                const url = data.link;
                this.router.navigate([url], { relativeTo: this.route, state: navigateState });
            }
            else {
                this.navigateToGridPage(data, navigateState);
            }
        }
    }
    dynamicRouteCheck(data, item, navigateState) {
        /* From getOutsideGridAction()*/
        let url = this.router.url;
        if (this.outerRouting?.observers?.length) {
            data.item = item;
            this.outerRouting.emit(data);
        }
        else {
            let link = data.link;
            if (data.link.includes('multipleform')) {
                url = url.split('mergepage')[0];
                const formId = data.link.split('_multipleform')[0];
                link = 'dynamicpage/page/modify/' + formId;
            }
            else if (data.link.includes('sourceform')) {
                // for interest transaction add
                url = url.split('mergepage')[0];
                const formId = data.link.split('_sourceform')[0];
                link = 'page/modify/' + formId;
                navigateState = this.setRouteData(data, link, navigateState);
                if (data.link.split('_sourceform')[1] && data.link.split('_sourceform')[1].includes('_subtab_')) {
                    // External Portal - Staff with subtabs
                    const subtabData = data.link.split('_sourceform')[1];
                    /* Get subtab name for url */
                    const subtab = subtabData.split('_subtab_')[1];
                    link = subtab + '/' + link;
                    /* Disable back button */
                    navigateState.externalLink = false;
                    /* set default page title */
                    navigateState.title = '';
                    this.dynamicSearchService.changePage(true);
                }
            }
            this.router.navigate([url + '/' + link], { relativeTo: this.route, state: navigateState });
        }
    }
    setRouteData(data, _link, navigateState) {
        if (data.link.split('_sourceform')[1] && data.link.split('_sourceform')[1].includes('_subtab_')) {
            // External Portal - Staff with subtabs
            // Get subtab name for url
            /* Disable back button */
            navigateState.externalLink = false;
            /* set default page title */
            navigateState.title = '';
            this.dynamicSearchService.changePage(true);
        }
        return navigateState;
    }
    navigateToGridPage(data, navigateState) {
        if (data.link.includes('pages/')) {
            if (data.link.includes('{organizationid}')) {
                const sourceid = this.user?.userWorkInfo?.organization?.id;
                const link = data.link.replace('{organizationid}', sourceid);
                const url = '/' + link;
                this.router.navigate([url], { relativeTo: this.route, state: navigateState });
            }
            else {
                this.router.navigateByUrl('/' + data.link);
            }
        }
        else {
            if (window.location.href.indexOf('tab') > 0) {
                const url = '../../page/' + data.link;
                this.router.navigate([url], { relativeTo: this.route, state: navigateState });
            }
            else {
                const url = PAGE_MODIFY_ROUTE + data.link;
                this.router.navigate([url], { relativeTo: this.route, state: navigateState });
            }
        }
    }
    setDialogConfig(item) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.height = '90%';
        dialogConfig.width = '100%';
        dialogConfig.data = { pageId: item.link, isPopup: true };
        const ref = this.dialog.open(DynamicPageComponent, dialogConfig);
        ref.afterClosed().subscribe(() => {
            // refresh grid
            this.getGrid();
        });
    }
    convertToISOFormat(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const milliseconds = String(date.getMilliseconds()).padStart(3, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
    }
    addMinutes(dateString, minutes) {
        const date = new Date(dateString);
        date.setMinutes(date.getMinutes() + minutes);
        return date.toISOString();
    }
    getPrimaryColumnId(primaryColumn, data) {
        const firstKey = Object.keys(data.data)[0];
        return data.data[firstKey][primaryColumn];
    }
    deleteConfirmation(data, item) {
        this.isDisabled = true;
        this.pagename = this.searchparams?.pagename;
        const gridConigForDeleteRequire = this.searchparams?.gridconfig;
        this.deletePopupText = gridConigForDeleteRequire?.isDeletePopupText;
        const tableschemaconfig = this.searchparams?.tableschemaconfig;
        let viewPrimaryTable = '';
        if (tableschemaconfig.objectType == 'view') {
            const firstKey = Object.keys(data.data)[0];
            viewPrimaryTable = data.data[firstKey]['primary_object'];
        }
        if (this.isDeleteRequire || gridConigForDeleteRequire?.isDeleteRequire) {
            this.isDeleteRequire = true;
        }
        if (!this.isDeleteRequire) {
            const primary_id = this.getPrimaryColumnId(data.data.primaryColumn, data);
            this.DeleteConfigURL = `${DynamicSearchURL.EndPoints.formResponse.delete.replace('{id}', primary_id)}/${this.pageId}?name=${viewPrimaryTable}`;
            $('#DeleteGridListWithoutReason').modal('show');
        }
        else {
            this.adminAccessForDelete = false;
            const primary_id = this.getPrimaryColumnId(data.data.primaryColumn, data);
            this.DeleteConfigURL = `${DynamicSearchURL.EndPoints.formResponse.delete.replace('{id}', primary_id)}/${this.pageId}?name=${viewPrimaryTable}`;
            this.updateByIdAndPageIdWithReasonURL = `${DynamicSearchURL.EndPoints.formResponse.updateByIdAndPageIdWithReason.replace('{id}', primary_id)}/${this.pageId}?primarytable=${viewPrimaryTable}`;
            const tbName = this.gridConfig.highlightRow.tableName;
            this.deleteConfigData = {};
            this.deleteConfigData = { 'data': data.data[tbName] };
            this.dynamicSearchService.checkDeleteStatus(this.pageId, primary_id, viewPrimaryTable).subscribe(result => {
                if (result['data'] && result['data'].length > 0) {
                    if (result['data'][0]['status'] === 'DEL_PEND') {
                        const infoDetails = data['data'].rbacConditions.filter(item => item.action == 'info');
                        this.deletedReason = infoDetails[0]?.message;
                        $('#ApproveDeleteGridList').modal('show');
                    }
                    else if (result['data'][0]['status'] === 'DEL_ALLOW') {
                        $('#DeleteGridListWithoutReason').modal('show');
                    }
                    else if (result['data'][0]['status'] === 'DEL_REQ') {
                        $('#DeleteGridList').modal('show');
                    }
                    else {
                        this.alertService.error('Something went wrong');
                    }
                }
                else {
                    this.alertService.error('Something went wrong');
                }
            }, _error => {
                this.alertService.error(AppConstants$1.errorMessage);
            });
        }
        // const user = this.localstore.getObj('user');
        // if(user.userroles[0].id == 1 || user.userroles[0].id == 2){
        //   $('#DeleteGridListWithoutReason').modal('show');
        // } else {
        //   if(this.isDeleteRequire){
        //     $('#DeleteGridList').modal('show');
        //   } else {
        //     $('#DeleteGridListWithoutReason').modal('show');
        //   }
        // }
        // const dialogConfig = new MatDialogConfig();
        // dialogConfig.disableClose = true;
        // dialogConfig.width = '320px';
        // dialogConfig.panelClass = 'record-delete-modal';
        // dialogConfig.data = {
        //   action: 'delete',
        //   deleteId: this.pageId,
        //   message: 'Are you sure you want to delete?',
        //   url: DynamicSearchURL.EndPoints.formResponse.delete.replace('{id}', data.data[Object.keys(data.data)[0]].id),
        //   portConfig: item.portConfig,
        //   successMsg: 'Record deleted Successfully',
        //   reasonStatus: this.isDeleteRequire
        // };
        // const tbName = this.gridConfig.highlightRow.tableName;
        // dialogConfig.data['rowData'] = data.data[tbName];
        // const ref = this.dialog.open(DeleteComponent, dialogConfig);
        // ref.afterClosed().subscribe(() => {
        //   // refresh grid
        //   this.getGrid();
        // });
    }
    actionInfoCheck(data, item) {
        // const primary_id = this.getPrimaryColumnId(data.data.primaryColumn, data);
        // this.DeleteConfigURL = DynamicSearchURL.EndPoints.formResponse.delete.replace('{id}', primary_id);
        // this.deletedReason = item.message;
        // $('#ApproveDeleteGridList').modal('show');
    }
    deleteRecord() {
        this.httpService.delete(`${this.DeleteConfigURL}`).subscribe(_result => {
            this.alertService.success('Deleted Successfully');
            this.reloadPopup();
        }, _error => {
            this.cancelPopup();
            this.alertService.error(AppConstants$1.errorMessage);
        });
    }
    deleteRecordWithReason() {
        this.rowData = { ...this.deleteConfigData, 'reason': this.enteredReason };
        this.httpService.post(`${this.updateByIdAndPageIdWithReasonURL}`, this.rowData).subscribe(_result1 => {
            this.reloadPopup();
            this.alertService.success('Delete Requested Successfully');
            this.enteredReason = '';
        }, _error => {
            this.cancelPopup();
            this.alertService.error(AppConstants$1.errorMessage);
            this.enteredReason = '';
        });
    }
    deleteRecordWithoutReason() {
        this.httpService.delete(`${this.DeleteConfigURL}`).subscribe(_result => {
            if (_result && _result['data'] === 'DEL_REQ') {
                this.alertService.error('Deletion Failed: The threshold time for deleting this record has expired.');
            }
            else if (_result && _result['data']) {
                this.alertService.success('Deleted Successfully');
            }
            else {
                this.alertService.error('Something Went Wrong');
            }
            this.reloadPopup();
        }, _error => {
            this.cancelPopup();
            this.alertService.error(AppConstants$1.errorMessage);
        });
    }
    cancelPopup() {
        $('#DeleteGridList').modal('hide');
        $('#ApproveDeleteGridList').modal('hide');
        $('#DeleteGridListWithoutReason').modal('hide');
        this.enteredReason = '';
    }
    reloadPopup() {
        $('#DeleteGridList').modal('hide');
        $('#ApproveDeleteGridList').modal('hide');
        $('#DeleteGridListWithoutReason').modal('hide');
        this.getGrid();
        this.enteredReason = '';
    }
    checkIsDisabled(text) {
        if (text && text.trim() != '') {
            this.isDisabled = false;
            this.enteredReason = text;
        }
        else {
            this.isDisabled = true;
            this.enteredReason = text;
        }
    }
    completeConfirmation(data, _item) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.data = {
            action: 'complete',
            deleteId: data.data[Object.keys(data.data)[0]].id,
            message: 'Are you sure you want to complete?',
            url: DynamicSearchURL.EndPoints.formResponse.delete.replace('{id}', data.data[Object.keys(data.data)[0]].id),
            portConfig: null,
            successMsg: 'Data completed Successfully',
            data: data.data
        };
        const ref = this.dialog.open(DeleteComponent, dialogConfig);
        ref.afterClosed().subscribe(() => {
            this.getGrid();
        });
    }
    closePopup() {
        this.editPopUpDialogRef.close();
    }
    popup(data, action) {
        const table_name = this.searchparams.tableschemaconfig.tablelist[0];
        const tabdata = data;
        const value = tabdata ? tabdata[table_name] : '';
        this.targetPage(value, action);
        // } else {
        //   this.popupDialogRef = this.dialog.open(this.callDialogPopup);
        //   // tslint:disable-next-line: prefer-for-of
        //   this.popupData = data;
        // }
    }
    closeDialogPopup() {
        this.popupDialogRef.close();
    }
    showIcon(data) {
        if (data.data.timeleft) {
            if (data.data.timeleft.includes(' ')) {
                let timeleft = data.data.timeleft.split(' ');
                timeleft = timeleft[0];
                if (timeleft < 0) {
                    return true;
                }
            }
            else if (data.data.timeleft.includes(':')) {
                let timeleft = data.data.timeleft.split(':');
                timeleft = timeleft[0];
                if (timeleft < 0 || (timeleft == '-00' && timeleft.indexOf('-') != -1)) {
                    return true;
                }
            }
            else {
                return false;
            }
        }
        return false;
    }
    splitingData(data, splitter = ',') {
        if (data.data.narrative) {
            const detail = data.data.narrative;
            const div = document.createElement('div');
            div.innerHTML = detail;
            ///.join("<br/>")
            const finalString = div.innerText.split(splitter);
            for (let i = 0; i < finalString.length; i++) {
                finalString[i] = finalString[i].toLowerCase();
                finalString[i] = finalString[i][0].toUpperCase() + finalString[i].substring(1, 2);
            }
            return finalString.join('<br/>');
        }
        return '';
    }
    getTitleClass(title) {
        if (title) {
            return title.split(' ').join('').toLowerCase();
        }
        return '';
    }
    changeStatusColor(value) {
        if (value === 'Completed') {
            return 'completed';
        }
        else if (value === 'Draft') {
            return 'draft';
        }
        else if (value === 'Open') {
            return 'open';
        }
        else if (value === 'Closed') {
            return 'closed';
        }
        else if (value === 'Pending') {
            return 'pending';
        }
        else if (value === 'Pending Approval' || value === 'In-Progress') {
            return 'pending-approval';
        }
        else if (value === 'Approved' || value === 'Accepted - Screen In') {
            return 'approved';
        }
        else if (value === 'Return to Worker' || value === 'Returned') {
            return 'returned';
        }
        return '';
    }
    titleCaseToolTip(value) {
        return value[0].toUpperCase() + value.slice(1);
    }
    closeForm() {
        this.item = null;
    }
    downloadFileInternally(s3BucketUrlName, filename) {
        const a = document.createElement('a');
        a.href = s3BucketUrlName.trim();
        a.download = filename || 'download';
        a.click();
        a.remove();
    }
    /* for Grid Selection enable/disable */
    getGridSelection(item) {
        if (item === true) {
            return 'multiple';
        }
        return 'none';
    }
    startScheduling(id, url = null) {
        if (url) {
            this.dynamicSearchService.startScheduling({}, url.replace('{id}', id)).subscribe(() => {
                this.alertService.success('Report Triggered Successfully');
            }, _error => {
                this.alertService.success('Report Trigger failed. Try Again!');
            });
        }
        else {
            this.dynamicSearchService.startSchedulingNoUrl({}, id).subscribe(() => {
                this.alertService.success('Report Triggered Successfully');
            }, _error => {
                this.alertService.success('Report Trigger failed. Try Again!');
            });
        }
    }
    customSave = (state) => {
        for (const item in state) {
            if (item !== 'columns')
                delete state[item];
        }
        this.gridConfig.pageSize = this.dataGrid.instance.pageSize();
        const prevWidth = this.columnWidth;
        this.columnWidth = state;
        const validatePageId = this.sequenceId === Number(this.route.snapshot.paramMap.get('pageId'));
        const validate = JSON.stringify(prevWidth) === JSON.stringify(this.columnWidth);
        if (validatePageId && state?.columns != undefined) {
            state.columns.forEach((stateColumn) => {
                const configItem = this.gridConfig.gridConfigFormArray.find(c => c.columnDef === stateColumn.dataField && !c.hide);
                if (configItem) {
                    configItem.width = stateColumn.width;
                    configItem.filterValues = stateColumn.filterValues;
                    configItem.sortOrder = stateColumn.sortOrder;
                    configItem.sortIndex = stateColumn.sortIndex;
                    configItem.visible = stateColumn.visible ?? true;
                    configItem.visibleIndex = stateColumn.visibleIndex;
                }
            });
            if (this.screenWidth > 1025) {
                this.columns = this.gridConfig.gridConfigFormArray;
            }
            const body = {
                type: 'PAGE',
                mappedid: this.currentPageId,
                config: JSON.stringify(this.gridConfig)
            };
            this.dynamicSearchService.saveGridUserPreference(body).subscribe(() => {
                // This is intentional
            });
        }
        // const body = {
        //   type: 'PAGE',
        //   mappedid: this.currentPageId,
        //   config: JSON.stringify(this.gridConfig)
        // };
        // this.dynamicSearchService.saveGridUserPreference(body).subscribe(() => {
        //    // This is intentional
        // });
    };
    columnChooserClick() {
        this.dataGrid.instance.showColumnChooser();
    }
    contentReady = e => {
        const componentInstance = e.component.instance();
        const currentColumns = componentInstance.option('columns');
        if (this.gridConfig && this.gridConfig.userPreferenceGridConfig) {
            if (this.gridConfig.pageSize) {
                this.currentPageSize = this.gridConfig.pageSize;
            }
            let changesMade = false;
            currentColumns.forEach((column, index) => {
                const configItem = this.gridConfig.userPreferenceGridConfig.find(c => c.columnDef === column.dataField);
                if (configItem) {
                    const targetVisibility = configItem.hide ? false : (configItem.visible === "" ? true : configItem.visible);
                    if (column.visible !== targetVisibility) {
                        changesMade = true;
                        currentColumns[index].visible = targetVisibility;
                    }
                    // Check and update the visibleIndex if different
                    if (column.visibleIndex !== configItem.visibleIndex) {
                        changesMade = true;
                        currentColumns[index].visibleIndex = configItem.visibleIndex;
                    }
                }
            });
            if (changesMade) {
                componentInstance.option('columns', currentColumns);
            }
            this.isInitialLoad = false;
            this.isResize = false;
            this.isUserPreferenceChange = false;
        }
    };
    getVisabilityByChoosableProp(chooser, visible) {
        if (chooser) {
            return visible;
        }
        else {
            return true;
        }
    }
    getSortOrder(defaultSortColumn, defaultSortType, columnDef) {
        if (defaultSortColumn && defaultSortType) {
            return defaultSortColumn === columnDef ? defaultSortType : '';
        }
        return '';
    }
    goBack() {
        this.location.back();
    }
    showGridActions(updateGrid, showActionColumn, gridType) {
        const gridActions = updateGrid?.gridActionFormArray
            ? updateGrid?.gridActionFormArray.filter(x => x.action?.toLowerCase() !== 'add')
            : [];
        const hiddenColumns = gridActions?.filter(a => a?.hide);
        return (gridActions.length > 0 &&
            showActionColumn &&
            gridType != 'view' &&
            hiddenColumns.length !== gridActions.length);
    }
    changeFilterOptions(e) {
        this.filterOptionsDropdown.close(e.originalEvent);
        this.isUserPreferenceChange = true;
        this.setPermissions(e.itemValue);
    }
    setPermissions(modal) {
        const [code, value] = modal.split('-');
        // const isExist = this.gridConfig.gridConfigFormArray.filter(c => {
        //   return c.columnDef === code && c.hasOwnProperty(value);
        // });
        // if (isExist.length === 0) {
        this.gridConfig.gridConfigFormArray
            .filter(c => c.columnDef === code)
            .forEach((c) => {
            c[value] = !c[value];
            if (c[value]) {
                c.selected = [...new Set([...c.selected, value])];
            }
            else {
                c.selected = c.selected.filter(v => v !== value);
            }
            return c;
        });
        // } else {
        //   this.setSelectedGridForm(code, value);
        // }
        this.columns = this.gridConfig.gridConfigFormArray;
        this.updateUserGridConfig();
    }
    setSelectedGridForm(code, value) {
        this.gridConfig.gridConfigFormArray.map(c => {
            c[value] = c.columnDef === code ? '' : c[value];
            if (c.columnDef === code && c.selected) {
                c.selected = c.selected.filter(s => s !== value);
                // c?.selected?.map((m, i) => {
                //   m === value && c.selected.splice(i, 1);
                // });
            }
            return c;
        });
    }
    updateUserGridConfig() {
        const body = {
            type: 'PAGE',
            mappedid: this.currentPageId,
            config: JSON.stringify(this.gridConfig)
        };
        if (this.screenWidth > 990) {
            this.dynamicSearchService.saveGridUserPreference(body).subscribe(_res => {
                this.getUserGridConfig();
            });
        }
    }
    getUserGridConfig() {
        this.dynamicSearchService.getGridUserPreference(this.currentPageId).subscribe((res) => {
            if (res.data && res.data?.config) {
                const configArray = res.data.config;
                if (configArray && configArray.gridConfigFormArray) {
                    configArray.userPreferenceGridConfig = this.tempaConfig.gridConfigFormArray;
                    configArray.gridConfigFormArray = this.tempaConfig.gridConfigFormArray;
                    this.gridConfig = configArray;
                    this.dublicateGridConfig = configArray?.gridConfigFormArray;
                    this.columnHeader = configArray.gridConfigFormArray.filter(Boolean).map(column => column.header);
                    this.columns = configArray.gridConfigFormArray;
                    this.isDeleteRequire = configArray?.isDeleteRequire;
                    this.isEditThresholdRequire = configArray?.isEditThresholdRequire;
                    this.isDeleteTime = configArray?.isDeleteTime;
                    // const storedTabData = JSON.parse(JSON.parse(this.storage.getItem('dynamic-tab-pages')));
                    const storedTabData = JSON.parse(JSON.parse(this.storage.getItem(STORAGE_KEY_DYNAMIC_TAB_PAGES)));
                    storedTabData?.map(item => {
                        this.columns.map(item1 => {
                            if (item.pfield == item1.columnDef) {
                                item1.link = item.pfield;
                            }
                        });
                    });
                    this.columns.map(c => {
                        c?.selected?.map(s => Object.assign({ col_ref: `${c.columnDef}-${s}` }, c));
                    });
                    const options = [];
                    const arr = [];
                    configArray.gridConfigFormArray.map(a => {
                        options.push({
                            columnName: a.header,
                            items: this.gridOptions.map(p => ({
                                id: `${a.columnDef}-${p.value}`,
                                label: p.label,
                                value: p.value,
                                code: a.columnDef,
                                active: a[p.value] !== '' ? true : ''
                            }))
                        });
                        a?.selected?.map(r => arr.push(`${a.columnDef}-${r}`));
                    });
                    this.columnsFilteration();
                    this.onResize();
                    this.filterOptions = options;
                    this.filterForm.patchValue({ selectedFilter: arr });
                }
                else {
                    this.patchMultipleOptions();
                }
            }
            else {
                this.patchMultipleOptions();
            }
        });
    }
    onResize() {
        const prevWidth = this.screenWidth;
        this.screenWidth = window.innerWidth;
        this.columns = this.gridConfig.gridConfigFormArray;
        if (this.screenWidth < 767) {
            const mobileColumns = this.gridConfig.gridConfigFormArray.filter(c => c.mobileView);
            this.checkOnresize(mobileColumns);
            // this.columns = this.gridConfig.gridConfigFormArray;
        }
        else if (this.screenWidth >= 768 && this.screenWidth < 990) {
            const tabColumns = this.gridConfig.gridConfigFormArray.filter(c => c.tabView);
            if (tabColumns.length) {
                this.columns = this.gridConfig.gridConfigFormArray.filter(x => x.tabView);
            }
            else {
                // const maxVisibleCount = 5;
                // const visibleCount = 0;
                this.columns = this.gridConfig.gridConfigFormArray.filter((t, i) => i < 3);
            }
            // this.columns = this.gridConfig.gridConfigFormArray;
        }
        else if (prevWidth && prevWidth !== this.screenWidth) {
            //to fix loading issue when changing from mobile to web/tab view
            this.columns = this.gridConfig.gridConfigFormArray;
            this.getUserGridConfig();
            // window.location.reload();
        }
    }
    checkOnresize(mobileColumns) {
        if (mobileColumns.length) {
            this.columns = this.gridConfig.gridConfigFormArray.filter(x => x.mobileView);
        }
        else {
            // const maxVisibleCount = 3;
            // const visibleCount = 0;
            this.columns = this.gridConfig.gridConfigFormArray.filter((m, i) => i < 3);
        }
    }
    patchMultipleOptions() {
        if (this.tempaConfig && this.tempaConfig.gridConfigFormArray) {
            this.columnHeader = this.tempaConfig.gridConfigFormArray.map(column => column.header);
            this.gridConfig = this.tempaConfig;
            this.columns = this.tempaConfig.gridConfigFormArray;
            this.columns.map(c => {
                c?.selected?.map(s => Object.assign({ col_ref: `${c.columnDef}-${s}` }, c));
            });
            const options = [];
            const arr = [];
            this.tempaConfig.gridConfigFormArray.map(grid => {
                options.push({
                    columnName: grid.header,
                    items: this.gridOptions.map(p => ({
                        id: `${grid.columnDef}-${p.value}`,
                        label: p.label,
                        value: p.value,
                        code: grid.columnDef,
                        active: grid[p.value] !== '' ? true : ''
                    }))
                });
                grid?.selected?.map(r => arr.push(`${grid.columnDef}-${r}`));
            });
            this.columnsFilteration();
            this.onResize();
            this.filterOptions = options;
            this.filterForm.patchValue({ selectedFilter: arr });
        }
    }
    columnsFilteration() {
        this.columns = this.columns.map(x => {
            if (x['concatenate']) {
                const columnName = x.header.toLowerCase();
                const cName = columnName.replace(/ /g, '_');
                x.columnDef = `alias.${cName}`;
                return x;
            }
            else {
                return x;
            }
        });
    }
    customEvent(event) {
        // this._formIO.customEvent(event, this.formIO);
        // TYPE CASTING Issue could not preventive TODO - Uncomment
    }
    onExporting(e) {
        const pageName = this.storage.getObj(FILE_EXPORT_NAME_KEY);
        const currentDate = moment().format('YYYY-MM-DD');
        let fileName;
        if (pageName) {
            fileName = `${pageName} ${currentDate}`;
        }
        else {
            fileName = `Data-Grid ${currentDate}`;
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
    ngOnDestroy() {
        this.storage.removeItem(FILE_EXPORT_NAME_KEY);
    }
    getTitle(c) {
        return c ? c : false;
    }
    onCellPrepared(e) {
        if (e.rowType == 'data' &&
            e.data.businessRules.length > 0 &&
            e.column.dataField === e.data.businessRules[0].name) {
            const element = e.cellElement;
            const rules = '<em class="RULES" aria-hidden="true"></em>'.replace('RULES', e.data.businessRules[0].style ? e.data.businessRules[0].style : '');
            const livetext = document.createElement('div');
            element.classList.add('business-group');
            livetext.classList.add('business-alert');
            livetext.classList.add('ml-2');
            livetext.innerHTML = rules;
            element.appendChild(livetext);
        }
    }
    onCellClick(e) {
        e?.data?.routedata.map(n => {
            if (n?.pfield == e?.column?.dataField) {
                this.paramvalue = e?.value;
                const [tableName] = n?.pfield.split('.');
                this.paramfield = n?.field;
                this.tablefield = tableName;
                this.toTabId = n?.id;
            }
        });
        if (this.toTabId) {
            this.dynamicTabPageService.getDynamicPage(this.toTabId).subscribe((res) => {
                if (res?.data.length > 0) {
                    const pageid = res?.data[0]?.activeVersion.id;
                    const currentURL = this.router.url;
                    const newurl = currentURL.replace(/[^/]*$/, '/' + pageid);
                    if (this.selectedCaption == 'action' || this.selectedCaption == 'Action') {
                        this.router.navigate([newurl]);
                    }
                    else {
                        const horizantalTabFilter = this.localstore.getItem(FILTER_ID_KEY);
                        if (horizantalTabFilter) {
                            this.localstore.removeItem(FILTER_ID_KEY);
                        }
                        this.localstore.setObj('HorizantalPageId', pageid);
                        this.localstore.setObj(FILTER_ID_KEY, {
                            id: this.paramvalue,
                            table: this.tablefield,
                            field: this.paramfield
                        });
                        this.openTab = true;
                    }
                    setTimeout(() => {
                        this.paramvalue = undefined;
                    }, 5000);
                }
            });
        }
    }
    // }
    async targetPage(value, targetValue) {
        const targetURLValue = targetValue?.link;
        if (this.localstore.getObj(LOCAL_STORAGE_KEY)) {
            this.localstore.removeItem(LOCAL_STORAGE_KEY);
        }
        await this.getVersionList(targetURLValue, value, targetValue);
    }
    async getVersionList(value, numericValue, action) {
        this.pageBuilderService.getVersionList(value).subscribe(res => {
            if (res.data && res.data.length) {
                this.localstore.setObj(FILE_EXPORT_NAME_KEY, res.data[0]?.pagename);
                this.pageList = res.data;
                this.totalcount = this.pageList.length ? this.pageList.length : 0;
                const filterTags = action;
                const filterValue = filterTags?.filterBy?.split('.');
                if (filterValue != '' && filterValue) {
                    const rowValue = numericValue[filterValue[1]];
                    this.localstore.setObj(LOCAL_STORAGE_KEY, { id: rowValue, table: filterValue[0], field: filterValue[1] });
                }
                if (this.pageList[0].tabconfig)
                    this.localstore.setObj(STORAGE_KEY_DYNAMIC_TAB_PAGES, this.pageList[0].tabconfig);
                this.localstore.setObj('titletab', numericValue);
                if (filterTags?.action == 'edit') {
                    this.localstore.setObj('editValue', numericValue);
                }
                else {
                    this.localstore.removeItem('editValue');
                }
                if (value) {
                    if (this.pageList[0]?.pageDetails?.pagetype == 'ATPBDM') {
                        this.authService.setSharedMessage({ pageId: this.pageList[0].pageid });
                        this.router.navigate(['../../../dynamicpage/page/modify/', this.pageList[0].pageid], {
                            relativeTo: this.route
                        });
                    }
                    else {
                        this.router.navigate(['../../../dynamicpage/tab/', this.pageList[0].id], { relativeTo: this.route });
                    }
                }
            }
        });
    }
    toggleIconClass() {
        this.iconClass = 'fa fa-eye-slash';
    }
    uploadDocument(item, files) {
        this.uploadedFile = files.target.files[0];
        const pageID = this.formId ? this.formId : this.pageId;
        this.imageData = {
            contentType: this.uploadedFile.type,
            fileName: `ocr/${pageID}/${this.uploadedFile.name}`
        };
        this.attachmentService.uploadKey(this.imageData).subscribe((res) => {
            if (res.data) {
                const uploadAttachment = document.getElementById('file');
                const uploadAttachmentDetails = uploadAttachment.files[0];
                this.httpService.putupload2(res.data, uploadAttachmentDetails, uploadAttachmentDetails.type).subscribe((resp) => {
                    if (resp && resp.status == 200) {
                        const object = {
                            path: `ocr/${pageID}/${this.uploadedFile.name}`,
                            attachmenttype: this.uploadedFile.type
                        };
                        this.storage.setObj('OCRObj', JSON.stringify(object));
                        this.dataStoreService.setData('uploadFromGrid', true);
                        const navigateState = {
                            externalLink: true,
                            title: item.action[0].toUpperCase() + item.action.slice(1) + ' ' + this.fromTitle,
                            personId: null
                        };
                        const url = PAGE_MODIFY_ROUTE + item.link;
                        this.router.navigate([url], { relativeTo: this.route, state: navigateState });
                    }
                    else {
                        this.alertService.error('Something Went Wrong!');
                    }
                }, error => {
                    if (error.status == 0)
                        this.alertService.error('Something Went Wrong!');
                });
            }
        });
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
    buildCriteria(result) {
        if (!result)
            return;
        const tableschemaconfig = result.tableschemaconfig;
        if (!tableschemaconfig)
            return;
        const fieldMapping = tableschemaconfig.fieldmapping;
        if (!fieldMapping)
            return;
        this.dynamicSearch = fieldMapping.filter(e => e.criteria);
        if (!this.dynamicSearch && !this.dynamicSearch.length)
            return;
        this.tableDropDown = [
            ...new Set(this.dynamicSearch.map(e => ({ name: e.tablename, value: e.tablename })))
        ];
        this.tableDropDown = this.removeDupliacteArrayJson(this.tableDropDown);
        this.columnDropDown = this.dynamicSearch.map(e => {
            const value = `${e.tablename}.${e.field}`;
            return {
                name: e.label,
                value,
                dataType: e.datatype,
                tableName: e.tablename
            };
        });
    }
    removeDupliacteArrayJson(values) {
        const concatArray = values.map(eachValue => Object.values(eachValue).join(''));
        return values.filter((value, index) => concatArray.indexOf(concatArray[index]) === index);
    }
    initDynamicSearch() {
        return this.gridDynamicSearchForm.get('dynamicSearchArray');
    }
    addGridDynamicSearch() {
        this.initDynamicSearch().push(this.createDynamicSearch());
        const dynamicSearch = this.gridDynamicSearchForm.controls['dynamicSearchArray'].value;
        if (dynamicSearch.length > 0) {
            this.saveButtonDisable = false;
        }
        else {
            this.saveButtonDisable = true;
        }
    }
    createDynamicSearch() {
        return this.formBuilder.group({
            tableName: ['', Validators.required],
            columnName: ['', Validators.required],
            condition: ['', Validators.required],
            datatype: [''],
            value: ['', Validators.required],
            tableDropDown: [this.tableDropDown],
            columnDropDown: [this.columnDropDown],
            conditionDropdown: []
        });
    }
    buildDynamicSearch(res) {
        return this.formBuilder.group({
            tableName: res.tableName,
            columnName: res.columnName,
            condition: res.condition,
            datatype: res.datatype,
            value: res.value,
            tableDropDown: [res.tableDropDown],
            columnDropDown: [res.columnDropDown],
            conditionDropdown: [res.conditionDropdown]
        });
    }
    removeDynamicSearch(index) {
        this.initDynamicSearch().removeAt(index);
        const dynamicSearch = this.gridDynamicSearchForm.controls['dynamicSearchArray'].value;
        if (dynamicSearch.length > 0) {
            this.saveButtonDisable = false;
        }
        else {
            this.saveButtonDisable = true;
        }
        // dynamicSearch = dynamicSearch.filter(e => e.value && e.value.trim());
        // const saveDynamicSearch = {
        //   pageId: +this.formId,
        //   criteriaId: +this.criteriaId,
        //   dynamicSearchArray: dynamicSearch
        // };
        // this.dynamicSearchService.saveCriteriaByPageId(saveDynamicSearch).subscribe(result => {
        //   const response = result['data'];
        //   this.criteriaId = response.criteriaId;
        //   this.alertService.success('Criteria deleted successfully');
        // });
    }
    resetDynamicSearch() {
        this.initDynamicSearch().clear();
        this.dynamicSearchResult = [];
        this.saveButtonDisable = true;
        this.dataSource = {
            data: [],
            totalCount: 0
        };
        this.showGridPage = false;
        this.youthSearchJson = [];
        // this.searchGrid(this.http, this.storage);
    }
    getColumnList(index, tableValue) {
        const getCurrentRow = this.initDynamicSearch().at(index);
        getCurrentRow.get('columnDropDown').patchValue([]);
        const columnArray = this.dynamicSearch
            .filter(e => e.tablename === tableValue)
            .map(e => {
            const value = `${e.tablename}.${e.field}`;
            return {
                name: e.label,
                value,
                dataType: e.datatype
            };
        });
        getCurrentRow.get('columnDropDown').patchValue(columnArray);
    }
    getConditionList(index, columnValue) {
        const getCurrentRow = this.initDynamicSearch().at(index);
        const columnDropDown = getCurrentRow.get('columnDropDown').value;
        const columnDropDownJson = columnDropDown.find(e => e.value === columnValue);
        const columnDataType = columnDropDownJson.dataType;
        const columnTableName = columnDropDownJson.tableName;
        getCurrentRow.get('conditionDropdown').patchValue([]);
        getCurrentRow.get('datatype').patchValue(columnDataType);
        getCurrentRow.get('tableName').patchValue(columnTableName);
        // getCurrentRow.get('conditionDropdown').patchValue([
        //   {
        //     name: 'Equal To',
        //     value: 'Equal_To'
        //   },
        //   {
        //     name: 'Like',
        //     value: 'Like'
        //   }
        // ]);
        if (columnDataType === 'textfield' || columnDataType === 'textarea') {
            getCurrentRow.get('conditionDropdown').patchValue([
                {
                    name: 'Equal To',
                    value: 'Equal_To'
                },
                {
                    name: 'Like',
                    value: 'Like'
                }
            ]);
        }
        else {
            getCurrentRow.get('conditionDropdown').patchValue([
                {
                    name: 'Equal To',
                    value: 'Equal_To'
                }
            ]);
        }
    }
    resetDynamicSearchValue(index) {
        const getCurrentRow = this.initDynamicSearch().at(index);
        getCurrentRow.get('value').patchValue('');
    }
    trimSpaces(element) {
        const getElement = element.controls['value'];
        const getValue = getElement.value.trim();
        getElement.setValue(getValue);
        if (!getValue.length) {
            getElement.touched = true;
            getElement.errors = true;
            /* Remove this redundant jump */
            // return;
        }
    }
    submitDynamicSearch() {
        if (!this.gridDynamicSearchForm.valid) {
            this.gridDynamicSearchForm.markAllAsTouched();
            return;
        }
        const dynamicSearch = this.gridDynamicSearchForm.controls['dynamicSearchArray'].value;
        for (let index = 0; index < dynamicSearch.length; index++) {
            const dynamicSearchElement = dynamicSearch[index];
            if (!dynamicSearchElement || !dynamicSearchElement.value.trim()) {
                this.gridDynamicSearchForm.markAllAsTouched();
                return;
            }
        }
        this.showGridPage = true;
        this.dynamicSearchResult = dynamicSearch;
        this.searchGrid(this.http, this.storage);
    }
    saveDynamicSearch() {
        if (!this.gridDynamicSearchForm.valid) {
            this.gridDynamicSearchForm.markAllAsTouched();
            return;
        }
        const dynamicSearch = this.gridDynamicSearchForm.controls['dynamicSearchArray'].value;
        if (!dynamicSearch.length) {
            this.alertService.error('Cannot save empty criteria');
            return;
        }
        for (let index = 0; index < dynamicSearch.length; index++) {
            const dynamicSearchElement = dynamicSearch[index];
            if (!dynamicSearchElement || !dynamicSearchElement.value.trim()) {
                this.gridDynamicSearchForm.markAllAsTouched();
                return;
            }
        }
        const saveDynamicSearch = {
            pageId: +this.formId,
            criteriaId: +this.criteriaId,
            dynamicSearchArray: dynamicSearch
        };
        this.dynamicSearchService.saveCriteriaByPageId(saveDynamicSearch).subscribe(result => {
            const response = result['data'];
            this.criteriaId = response.criteriaId;
            this.alertService.success('Criteria save successfully');
        });
    }
    getCriteriaByPageId() {
        return new Promise((resolve, _rejects) => {
            const pageId = this.formId;
            this.dynamicSearchService.getCriteriaByPageId(pageId).subscribe(result => {
                const response = result['data'];
                if (response && response.length > 0) {
                    const lastIndex = response.length - 1;
                    const lastResponse = response[lastIndex];
                    this.criteriaId = lastResponse.id;
                    let lastDynamicSearchArray = [];
                    if (lastResponse.dynamicSearchArray?.length) {
                        this.saveButtonDisable = false;
                        lastDynamicSearchArray = lastResponse.dynamicSearchArray;
                        lastDynamicSearchArray.forEach(element => {
                            this.initDynamicSearch().push(this.buildDynamicSearch(element));
                        });
                    }
                    this.dynamicSearchResult = lastDynamicSearchArray;
                }
                return resolve({});
            });
        });
    }
    removeAllDynamicSearchCondtion() {
        this.criteriaId = 0;
        this.initDynamicSearch().clear();
        this.saveButtonDisable = true;
        this.dynamicSearchResult = [];
        this.dynamicSearch = [];
        this.youthSearchJson = [];
        this.youthSearchBoolean = false;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i1.ActivatedRoute }, { token: i0.ChangeDetectorRef }, { token: i2.UntypedFormBuilder }, { token: FormioService }, { token: LocalStorageService }, { token: i2.UntypedFormBuilder }, { token: DataStoreService }, { token: MAT_DIALOG_DATA, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DynamicSearchComponent, selector: "app-dynamic-search", inputs: { formId: "formId" }, outputs: { outerRouting: "outerRouting" }, host: { listeners: { "window:resize": "onResize($event)" } }, viewQueries: [{ propertyName: "searchcriteriamenutrigger", first: true, predicate: ["searchcriteriamenutrigger"], descendants: true }, { propertyName: "dataGrid", first: true, predicate: DxDataGridComponent, descendants: true }, { propertyName: "callDialogPopup", first: true, predicate: ["callDialogPopup"], descendants: true }, { propertyName: "formIO", first: true, predicate: ["formIO"], descendants: true }, { propertyName: "filterOptionsDropdown", first: true, predicate: MultiSelect, descendants: true }], ngImport: i0, template: "<div [class]=\"userAction === 'view' ? 'readOnlyCard' : ''\">\r\n  <div *ngIf=\"header\">\r\n    <table class=\"table table-bordered\" aria-describedby=\"tab\">\r\n      <thead>\r\n        <tr>\r\n          <th *ngFor=\"let item of titletab | keyvalue\">{{ item.key }}</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td *ngFor=\"let item of titletab | keyvalue\">{{ item.value }}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n  <p-accordion class=\"w-full dynamic-search\" [activeIndex]=\"1\" iconPos=\"endVal\"\r\n  *ngIf=\"dynamicSearch && dynamicSearch.length > 0\">\r\n    <p-accordionTab>\r\n      <ng-template pTemplate=\"header\">\r\n        <span class=\"flex align-items-center head-text gap-2 w-full\">\r\n          <span class=\"font-bold\">Quick Search</span>\r\n        </span>\r\n      </ng-template>\r\n      <div class=\"d-flex my-2 row\">\r\n        <div class=\"col-12 text-md-right\">\r\n          <button type=\"button\" title=\"Add New\" pripple class=\"p-ripple p-element btn btn-primary btn-icon\"\r\n            (click)=\"addGridDynamicSearch()\">\r\n            <em class=\"pi pi-plus font-weight-bold\"></em>\r\n          </button>\r\n          <!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"addGridDynamicSearch()\">Add</button> -->\r\n        </div>\r\n      </div>\r\n      <form [formGroup]=\"gridDynamicSearchForm\">\r\n        <ng-container formArrayName=\"dynamicSearchArray\">\r\n          <div *ngFor=\"let dynamicSearchItem of initDynamicSearch().controls; let dynamicSearchIndex = index\"\r\n            [formGroupName]=\"dynamicSearchIndex\">\r\n            <div class=\"row rbac-card\">\r\n              <div class=\"col-md-11 col-12 pr-0\">\r\n                <div class=\"row\">\r\n                  <!-- <div class=\"col-lg-3 col-md-6 col-12 mb-3\"> -->\r\n                  <!--   <label class=\"referral-form-labels\" for=\"tableList\">Table</label> -->\r\n                  <!--   <p-dropdown -->\r\n                  <!--     [options]=\"dynamicSearchItem.get('tableDropDown')?.value\" -->\r\n                  <!--     optionLabel=\"name\" -->\r\n                  <!--     optionValue=\"value\" -->\r\n                  <!--     id=\"tableList_{{ dynamicSearchIndex }}\" -->\r\n                  <!--     placeholder=\"Select Table\" -->\r\n                  <!--     formControlName=\"tableName\" -->\r\n                  <!--     tabindex=\"0\" -->\r\n                  <!--     styleClass=\"w-100\" -->\r\n                  <!--     (onChange)=\"getColumnList(dynamicSearchIndex, dynamicSearchItem.get('tableName')?.value)\"> -->\r\n                  <!--   </p-dropdown> -->\r\n                  <!--   <span -->\r\n                  <!--     class=\"text-danger error-text\" -->\r\n                  <!--     *ngIf=\" -->\r\n                  <!--       dynamicSearchItem.get('tableName')?.hasError('required') && -->\r\n                  <!--       dynamicSearchItem.get('tableName')?.touched -->\r\n                  <!--     \" -->\r\n                  <!--     >Please Select Table Name</span -->\r\n                  <!--   > -->\r\n                  <!-- </div> -->\r\n                  <div class=\"col-lg-3 col-md-6 col-12 mb-1\">\r\n                    <label class=\"referral-form-labels\" for=\"columnList\">Column <span\r\n                        class=\"requiredfield text-danger\">*</span></label>\r\n                    <p-dropdown [options]=\"dynamicSearchItem.get('columnDropDown')?.value\"\r\n                      id=\"columnList_{{ dynamicSearchIndex }}\" optionLabel=\"name\" optionValue=\"value\"\r\n                      placeholder=\"Select Column\" formControlName=\"columnName\" tabindex=\"0\" styleClass=\"w-100\"\r\n                      (onChange)=\"getConditionList(dynamicSearchIndex, dynamicSearchItem.get('columnName')?.value)\">\r\n                    </p-dropdown>\r\n                    <span class=\"text-danger error-text\" *ngIf=\"\r\n                        dynamicSearchItem.get('columnName')?.hasError('required') &&\r\n                        dynamicSearchItem.get('columnName')?.touched\r\n                      \">Please Select Column Name</span>\r\n                  </div>\r\n                  <div class=\"col-lg-3 col-md-6 col-12 mb-1\">\r\n                    <label class=\"referral-form-labels\" for=\"conditionList\">Condition <span\r\n                        class=\"requiredfield text-danger\">*</span></label>\r\n                    <p-dropdown [options]=\"dynamicSearchItem.get('conditionDropdown')?.value\"\r\n                      id=\"conditionList_{{ dynamicSearchIndex }}\" optionLabel=\"name\" optionValue=\"value\"\r\n                      placeholder=\"Select Condition\" formControlName=\"condition\" tabindex=\"0\" styleClass=\"w-100\"\r\n                      (onChange)=\"resetDynamicSearchValue(dynamicSearchIndex)\">\r\n                    </p-dropdown>\r\n                    <span class=\"text-danger error-text\" *ngIf=\"\r\n                        dynamicSearchItem.get('condition')?.hasError('required') &&\r\n                        dynamicSearchItem.get('condition')?.touched\r\n                      \">Please Select Condition</span>\r\n                  </div>\r\n                  <div class=\"col-lg-3 col-md-6 col-12 mb-1\">\r\n                    <label class=\"referral-form-labels\" for=\"valueList\">Value <span\r\n                        class=\"requiredfield text-danger\">*</span></label>\r\n                    <input type=\"text\" class=\"p-inputtext w-100\" id=\"valueList\" formControlName=\"value\"\r\n                      (change)=\"trimSpaces(dynamicSearchItem)\" placeholder=\"\" />\r\n                    <span class=\"text-danger error-text\" *ngIf=\"\r\n                        (dynamicSearchItem.get('value').errors && dynamicSearchItem.get('value')?.touched) ||\r\n                        (dynamicSearchItem.get('value')?.hasError('required') &&\r\n                          dynamicSearchItem.get('value')?.touched)\r\n                      \">Please Fill Value</span>\r\n                  </div>\r\n                  <div class=\"col-lg-3 col-md-6 col-12 mb-1\">\r\n                    <label class=\"referral-form-labels d-md-block d-none\" for=\"deleteDynamicSearch\">&#160;</label>\r\n                    <span class=\"material-symbols-outlined text-danger delete-icon\" role=\"button\"\r\n                      id=\"deleteDynamicSearch\" (click)=\"removeDynamicSearch(dynamicSearchIndex)\"\r\n                      title=\"Delete\">delete</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- <div\r\n                class=\"col-md-1 col-12 mb-3 text-md-center d-md-flex align-items-md-center justify-content-md-center flex-column\">\r\n                <label class=\"referral-form-labels d-md-block d-none\" for=\"deleteDynamicSearch\">&#160;</label>\r\n                <span class=\"material-symbols-outlined text-danger\" role=\"button\" id=\"deleteDynamicSearch\"\r\n                  (click)=\"removeDynamicSearch(dynamicSearchIndex)\" title=\"Delete\">delete</span>\r\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"removeDynamicSearch()\">Delete</button>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"row d-flex flex-column align-self-end\">\r\n            <div class=\"col-md-12 text-md-right mt-2\">\r\n              <!-- <button\r\n                type=\"button\"\r\n                class=\"btn btn-primary\"\r\n                (click)=\"saveDynamicSearch()\"\r\n                [disabled]=\"saveButtonDisable\">\r\n                Save\r\n              </button> -->\r\n              <button type=\"button\" class=\"btn btn-cancel\" (click)=\"resetDynamicSearch()\">Clear</button>\r\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"submitDynamicSearch()\"\r\n                [disabled]=\"saveButtonDisable\">Search</button>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </form>\r\n    </p-accordionTab>\r\n  </p-accordion>\r\n\r\n  <div class=\"page-wrp\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <!-- <div *ngIf=\"true\">\r\n          <div class=\"d-flex\" [formGroup]=\"filterForm\" *ngIf=\"gridType !== 'view'\">\r\n            <div class=\"col-md-12\">\r\n              <p-multiSelect [options]=\"filterOptions\" styleClass=\"filterOptions\" [group]=\"true\"\r\n                selectedItemsLabel=\"{0} items selected\" defaultLabel=\"Select\" optionLabel=\"label\" optionValue=\"id\"\r\n                id=\"filteroptions\" ariaFilterLabel=\"searchbox\" formControlName=\"selectedFilter\"\r\n                (onChange)=\"changeFilterOptions($event)\">\r\n                <ng-template let-group pTemplate=\"group\">\r\n                  <div class=\"flex align-items-center\">\r\n                    <span>{{ group.columnName }}</span>\r\n                  </div>\r\n                </ng-template>\r\n              </p-multiSelect>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n        <button *ngIf=\"gridType === 'view'\" type=\"button\" class=\"btn btn-cancel mb-3\" (click)=\"goBack()\">Back</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 text-right\">\r\n        <div class=\"d-flex justify-content-between align-items-center col-12 my-2\"\r\n          *ngIf=\"getTitle(updateGrid?.gridTitle)\">\r\n          <h6 class=\"font-weight-bold mb-0\"></h6>\r\n\r\n          <div class=\"d-flex inmate-btn-align\">\r\n            <button class=\"btn-print\" [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\"\r\n              *ngIf=\"showExport\">\r\n              <img class=\"export\" src=\"../../../assets/images/svg/Export_Icon.svg\" alt=\"export\" />\r\n            </button>\r\n            <mat-menu class=\"d-inline-block\" #menu=\"matMenu\" *ngIf=\"showExport\">\r\n              <button mat-menu-item (click)=\"onClose()\" *ngIf=\"pageType === 'DSP' || pageType === 'BUSP'\">\r\n                <mat-icon>{{ icon }}</mat-icon>{{ openclose }} Slidebar\r\n              </button>\r\n              <button mat-menu-item (click)=\"reset('excel')\"><mat-icon>grid_on</mat-icon> Export to Excel</button>\r\n              <button mat-menu-item (click)=\"reset('pdf')\"><mat-icon>picture_as_pdf</mat-icon> Export to PDF</button>\r\n              <button mat-menu-item (click)=\"reset('print')\"><mat-icon>print</mat-icon> Print</button>\r\n              <button mat-menu-item (click)=\"reset(pageType)\" *ngIf=\"pageType === 'DSP' || pageType === 'BUSP'\">\r\n                <mat-icon>reset_tv</mat-icon> Reset Search Criteria\r\n              </button>\r\n              <button *ngIf=\"pageType === 'DSP' || pageType === 'BUSP'\" mat-menu-item\r\n                [matMenuTriggerFor]=\"searchCriteriaList\" #searchcriteriamenutrigger=\"matMenuTrigger\">\r\n                <mat-icon>add_circle_outline</mat-icon> Save Search Criteria\r\n              </button>\r\n            </mat-menu>\r\n            <div [ngClass]=\"updateGrid && updateGrid?.chooser ? 'd-inline-block add-btn-right' : 'd-inline-block py-2'\">\r\n              <!--Add Button, Column chooser button are replacing eachother when its selected-->\r\n              <button class=\"btn-icon-bg d-inline-block pull-right text-right ml-1\"\r\n                *ngIf=\"showGridPage && item && updateGrid?.isInitialFormLoad\" (click)=\"closeForm()\">\r\n                <em class=\"fa fa-times\"></em>\r\n              </button>\r\n              <div *ngIf=\"\r\n                  updateGrid?.gridActionFormArray !== null &&\r\n                  updateGrid?.gridActionFormArray !== undefined &&\r\n                  updateGrid?.gridActionFormArray &&\r\n                  updateGrid?.gridActionFormArray?.length\r\n                \" class=\"update-grid-action-button-container\">\r\n                <ng-container *ngFor=\"let item of updateGrid?.gridActionFormArray; let i = index\">\r\n                  <ng-container *ngIf=\"!(updateGrid?.isShowOnTop && item?.action?.toLowerCase() === 'add')\">\r\n                    <button *ngIf=\"item?.icon && item.isOutsideGrid && !showAdd\" class=\"btn btn-primary\"\r\n                      (click)=\"getOutsideGridAction(item)\">\r\n                      <em [class]=\"item.icon\"></em><span class=\"ml-3\" *ngIf=\"!!item.name\">{{ item.name }}</span>\r\n                    </button>\r\n                    <ng-container *ngIf=\"item?.icon && item.isOutsideGrid && item.type === 'Ocr Scan'\">\r\n                      <label for=\"file\" class=\"btn btn-primary\">\r\n                        <em [class]=\"item.icon\"></em><span class=\"ml-3\" *ngIf=\"!!item.name\">{{ item.name }}</span>\r\n                      </label>\r\n                      <input type=\"file\" (change)=\"uploadDocument(item, $event)\" id=\"file\" aria-hidden=\"true\"\r\n                        style=\"visibility: hidden; display: none\" />\r\n                    </ng-container>\r\n                  </ng-container>\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"updateGrid && updateGrid?.chooser\" class=\"col-custom\">\r\n              <button class=\"btn btn-primary btn-icon ml-1\" (click)=\"columnChooserClick()\">\r\n                <em class=\"fa fa-columns\" aria-hidden=\"true\"></em>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <button *ngIf=\"isAddButton\" type=\"button\" class=\"btn btn-primary\" (click)=\"redirect()\">Add</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <mat-menu #searchCriteriaList=\"matMenu\" class=\"searchlist\">\r\n      <div class=\"row col-sm-12 mt-4\" (click)=\"$event.stopPropagation()\">\r\n        <div class=\"col-sm-6\">\r\n          <mat-form-field>\r\n            <input matInput [(ngModel)]=\"searchCriteria\" placeholder=\"Search Criteria\" />\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-2 mt-2\">\r\n          <button class=\"btn btn-pri\" [disabled]=\"!searchCriteria\" (click)=\"saveSearchCriteria()\">Save</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-sm-12\">\r\n        <table aria-describedby=\"Search_Criteria\">\r\n          <thead>\r\n            <tr>\r\n              <th scope=\"col\">Search Criteria</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngIf=\"totalcount\">\r\n            <tr *ngFor=\"let sc of searchCriteriaArr\">\r\n              <td>\r\n                <mat-icon>search</mat-icon>\r\n                <a href=\"javascript:void(0)\" (click)=\"setSearch(sc.data)\">{{ sc.data.searchCriteria }}</a>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </mat-menu>\r\n    <div class=\"split-page\">\r\n      <as-split unit=\"percent\" useTransition=\"true\" direction=\"{{ layouttype }}\">\r\n        <as-split-area size=\"{{ spliterSize }}\">\r\n          <div *ngIf=\"pageType === 'DSP' || pageType === 'BUSP'\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <formio #formIO [form]=\"jsonForm\" [submission]=\"submittedData\" (submit)=\"onSubmit($event)\"\r\n                  (customEvent)=\"customEvent($event)\"></formio>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </as-split-area>\r\n        <as-split-area size=\"{{ gridspliterSize }}\">\r\n          <div class=\"row\" *ngIf=\"\r\n              ((updateGrid?.isInitialFormLoad !== undefined &&\r\n                updateGrid?.isInitialFormLoad !== null &&\r\n                updateGrid?.isInitialFormLoad) ||\r\n                (updateGrid?.isShowOnTop !== undefined &&\r\n                  updateGrid?.isShowOnTop !== null &&\r\n                  updateGrid?.isShowOnTop)) &&\r\n              item\r\n            \">\r\n            <div class=\"col-12\">\r\n              <ndc-dynamic class=\"no-drag\" [ndcDynamicComponent]=\"item.component\" [ndcDynamicInputs]=\"item\"\r\n                [ndcDynamicOutputs]=\"item?.outputs\"></ndc-dynamic>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <div class=\"row\" *ngIf=\"showGridPage\">\r\n              <div class=\"col-lg-12 gridview\">\r\n                <div class=\"card mb-2\">\r\n                    <!-- [remoteOperations]=\"{ filtering: true, sorting: true, paging: true }\"  Removed server filter-->\r\n                  <div class=\"card-body {{ getTitleClass(fromTitle) }}\">\r\n                    <dx-data-grid [dataSource]=\"dataSource\"\r\n                       [columnMinWidth]=\"100\"\r\n                      [width]=\"'100%'\" [columnResizingMode]=\"'widget'\" [allowColumnReordering]=\"true\"\r\n                      [allowColumnResizing]=\"true\" [columnAutoWidth]=\"true\" (onContentReady)=\"contentReady($event)\"\r\n                      (onRowPrepared)=\"onRowPrepared($event)\" (onCellPrepared)=\"onCellPrepared($event)\"\r\n                      (onCellClick)=\"onCellClick($event)\" (onExporting)=\"onExporting($event)\" [showBorders]=\"true\"\r\n                      [rowAlternationEnabled]=\"true\" [showColumnLines]=\"true\" [showRowLines]=\"true\">\r\n                      <dxo-selection [selectAllMode]=\"allMode\" [showCheckBoxesMode]=\"checkBoxesMode\"\r\n                        [mode]=\"getGridSelection(updateGrid?.gridSelection)\"></dxo-selection>\r\n                      <dxo-load-panel [enabled]=\"false\"></dxo-load-panel>\r\n                      <dxo-export [enabled]=\"true\" [formats]=\"['pdf', 'xlsx']\"></dxo-export>\r\n                      <dxo-filter-row [visible]=\"showFilterRowPanel\"></dxo-filter-row>\r\n                      <dxo-state-storing [enabled]=\"true\" type=\"custom\" [customSave]=\"customSave\"\r\n                        [customLoad]=\"customLoad\"></dxo-state-storing>\r\n\r\n                      <dxo-column-chooser [enabled]=\"true\" mode=\"select\">\r\n                        <dxo-position my=\"right top\" at=\"right top\" of=\".dx-datagrid-column-chooser-button\">\r\n                        </dxo-position>\r\n                      </dxo-column-chooser>\r\n\r\n                      <!--Grid - Footer filter removed -->\r\n                      <dxo-paging [pageSize]=currentPageSize></dxo-paging>\r\n                      <dxo-pager [visible]=\"true\" [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[5, 10, 15, 20]\"\r\n                        [displayMode]=\"displayMode\" [showInfo]=\"true\" [showNavigationButtons]=\"true\"></dxo-pager>\r\n                      <dxo-filter-builder-popup [position]=\"popupPosition\"> </dxo-filter-builder-popup>\r\n                      <dxo-header-filter [visible]=\"true\"></dxo-header-filter>\r\n                      <ng-container *ngFor=\"let column of columns; let i = index\">\r\n                        <ng-container *ngIf=\"column?.hide !== true\">\r\n                          <ng-container *ngIf=\"column?.link; else noLink\">\r\n                            <dxi-column [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n                              [allowHiding]=\"!column?.Choosable\" [fixed]=\"column?.fixed\" [dataField]=\"column?.columnDef\"\r\n                              [caption]=\"column?.header\" [allowFiltering]=\"column?.filter\" cellTemplate=\"cellTemplate\"\r\n                              [allowSorting]=\"column?.sort\" [width]=\"column?.width\" [sortOrder]=\"\r\n                                getSortOrder(\r\n                                  updateGrid?.defaultSortColumn,\r\n                                  updateGrid?.defaultSortType,\r\n                                  column?.columnDef\r\n                                )\r\n                              \">\r\n                            </dxi-column>\r\n                          </ng-container>\r\n                          <ng-template #noLink>\r\n                            <ng-container *ngIf=\"column?.icon; else noIcon\">\r\n                              <dxi-column [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n                                [allowHiding]=\"!column?.Choosable\" [width]=\"column?.width\" [fixed]=\"column?.fixed\"\r\n                                [dataField]=\"column?.columnDef\" [caption]=\"column?.header\"\r\n                                [allowFiltering]=\"column?.filter\" cellTemplate=\"iconTemplate\"\r\n                                [allowSorting]=\"column?.sort\" [sortOrder]=\"\r\n                                  getSortOrder(\r\n                                    updateGrid?.defaultSortColumn,\r\n                                    updateGrid?.defaultSortType,\r\n                                    column?.columnDef\r\n                                  )\r\n                                \">\r\n                              </dxi-column>\r\n                            </ng-container>\r\n                          </ng-template>\r\n                          <ng-template #noIcon>\r\n                            <ng-container *ngIf=\"column?.dateFormat; else noDate\">\r\n                              <dxi-column [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n                                [allowHiding]=\"!column?.Choosable\" [width]=\"column?.width\" [fixed]=\"column?.fixed\"\r\n                                *ngIf=\"column?.dateFormat === 'date' || column?.dateFormat === 'datetime'\"\r\n                                [dataField]=\"column?.columnDef\" [caption]=\"column?.header\"\r\n                                [allowFiltering]=\"column?.filter\" dataType=\"date\"\r\n                                [format]=\"getDateFormat(column?.dateFormat)\" [allowSorting]=\"column?.sort\" [sortOrder]=\"\r\n                                  getSortOrder(\r\n                                    updateGrid?.defaultSortColumn,\r\n                                    updateGrid?.defaultSortType,\r\n                                    column?.columnDef\r\n                                  )\r\n                                \">\r\n                              </dxi-column>\r\n                            </ng-container>\r\n                          </ng-template>\r\n                          <ng-template #noDate>\r\n                            <ng-container *ngIf=\"column?.header.toLowerCase().trim() === 'status'; else noStatus\">\r\n                              <dxi-column [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n                                [allowHiding]=\"!column?.Choosable\" [width]=\"column?.width\" [fixed]=\"column?.fixed\"\r\n                                [dataField]=\"column?.columnDef\" [caption]=\"column?.header\"\r\n                                [allowFiltering]=\"column?.filter\" cellTemplate=\"statusTemplate\"\r\n                                [allowSorting]=\"column?.sort\" [sortOrder]=\"\r\n                                  getSortOrder(\r\n                                    updateGrid?.defaultSortColumn,\r\n                                    updateGrid?.defaultSortType,\r\n                                    column?.columnDef\r\n                                  )\r\n                                \">\r\n                              </dxi-column>\r\n                            </ng-container>\r\n                          </ng-template>\r\n                          <ng-template #noStatus>\r\n                            <dxi-column [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n                              [allowHiding]=\"!column?.Choosable\" [width]=\"column?.width\" [fixed]=\"column?.fixed\"\r\n                              [dataField]=\"column?.columnDef\" [caption]=\"column?.header\"\r\n                              [allowFiltering]=\"column?.filter\" cellTemplate=\"dataTemplate\"\r\n                              [allowSorting]=\"column?.sort\" [sortOrder]=\"\r\n                                getSortOrder(\r\n                                  updateGrid?.defaultSortColumn,\r\n                                  updateGrid?.defaultSortType,\r\n                                  column?.columnDef\r\n                                )\r\n                              \">\r\n                            </dxi-column>\r\n                          </ng-template>\r\n                        </ng-container>\r\n                      </ng-container>\r\n                      <ng-container *ngIf=\"showGridActions(updateGrid, showActionColumn, gridType)\">\r\n                        <dxi-column [width]=\"120\" [allowFiltering]=\"false\" [showInColumnChooser]=\"false\"\r\n                          [allowSorting]=\"false\" caption=\"Action\" cellTemplate=\"editCellTemplate\">\r\n                        </dxi-column>\r\n                      </ng-container>\r\n                      <div *dxTemplate=\"let d of 'cellTemplate'\" class=\"dashboard-hover\">\r\n                        <a *ngIf=\"d.value && d.value !== 'null'\" (click)=\"getRouter(d, item)\">{{ d.value !== 'null' ?\r\n                          d.value : '' }}\r\n                          <span *ngIf=\"showIcon(d)\"></span>\r\n                        </a>\r\n                      </div>\r\n                      <div *dxTemplate=\"let d of 'iconTemplate'\">\r\n                        <span *ngFor=\"let item of d.data.rbacConditions; let i = index\">\r\n                          <em *ngIf=\"item.action !== 'add'\" [class]=\"item.icon\" (click)=\"popup(d?.key, item)\"></em>\r\n                        </span>\r\n                      </div>\r\n                      <div *dxTemplate=\"let d of 'editCellTemplate'\">\r\n                        <span *ngFor=\"let item of d.data.rbacConditions; let i = index\">\r\n                          <!-- Tooltip for deleted row -->\r\n                          <a *ngIf=\"\r\n                              item?.action === 'info'\r\n                            \" class=\"no-bg\" [pTooltip]=\"tooltipContent\" tooltipPosition=\"left\"\r\n                            (click)=\"getInsideGridAction(d, item)\">\r\n                            <em [class]=\"item.icon\" style=\"padding-right: 10px\"></em>\r\n                          </a>\r\n                          <ng-template #tooltipContent>\r\n                            <div class=\"custom-mat-tooltip\">\r\n                              <div class=\"mb-1\">Delete Status: Pending</div>\r\n                              <div>{{item?.message}}</div>\r\n                            </div>\r\n                          </ng-template>\r\n                          <a *ngIf=\"\r\n                                item?.icon &&\r\n                                item?.action !== 'info' &&\r\n                                !item.isOutsideGrid &&\r\n                                d?.data?.status !== 'Closed' &&\r\n                                item.action !== 'changepathway' &&\r\n                                !item?.hide;\r\n                              else changepathway\r\n                            \" class=\"no-bg\" matTooltip=\"{{ titleCaseToolTip(item?.action) }}\"\r\n                            (click)=\"getInsideGridAction(d, item)\">\r\n                            <em [class]=\"item.icon\" style=\"padding-right: 10px\"></em>\r\n                          </a>\r\n\r\n                          <ng-template #changepathway>\r\n                            <a *ngIf=\"item.action === 'changepathway' && d?.rowIndex === 0\" class=\"no-bg\"\r\n                              matTooltip=\"{{ item?.action }}\" (click)=\"getInsideGridAction(d, item)\">\r\n                              <em [class]=\"item.icon\" style=\"padding-right: 10px\"></em>\r\n                            </a>\r\n                          </ng-template>\r\n                        </span>\r\n                        <a *ngIf=\"updateGrid?.gridActionFormArray?.icon\" class=\"no-bg\" matTooltip=\"Open\"\r\n                          (click)=\"openLink(d)\">\r\n                          <em class=\"fa fa-external-link\"></em>\r\n                        </a>\r\n                        <a *ngIf=\"updateGrid?.edit\" class=\"no-bg\" matTooltip=\"Edit\" (click)=\"editData(d)\">\r\n                          <em class=\"fa fa-pencil\" title=\"Edit\"></em>\r\n                        </a>\r\n                        <a *ngIf=\"updateGrid?.view\" class=\"no-bg\" matTooltip=\"View\" (click)=\"viewData(d)\">\r\n                          <em class=\"fa fa-eye\" title=\"View\"></em>\r\n                        </a>\r\n                        <a *ngIf=\"updateGrid?.delete\" class=\"no-bg text-danger\" matTooltip=\"Delete\"\r\n                          (click)=\"deleteData(d)\">\r\n                          <em class=\"fa fa-trash\"></em>\r\n                        </a>\r\n                        <button *ngIf=\"updateGrid?.activeordeactive\" class=\"no-bg\" (click)=\"deleteData(d)\">\r\n                          <em *ngIf=\"updateGrid?.activeordeactive && d.data.activeflag === 1\"\r\n                            class=\"fa fa-toggle-on\"></em>\r\n                          <em *ngIf=\"updateGrid?.activeordeactive && d.data.activeflag === 0\"\r\n                            class=\"fa fa-toggle-off\"></em>\r\n                        </button>\r\n                      </div>\r\n                      <div *dxTemplate=\"let d of 'statusTemplate'\" [class]=\"changeStatusColor(d.value)\">\r\n                        <span>{{ d.value }}</span>\r\n                      </div>\r\n                      <div *dxTemplate=\"let d of 'dataTemplate'\"\r\n                        [ngClass]=\"{ 'dashboard-hover-contact': d.column?.dataField === 'servicename' }\">\r\n                        <div class=\"d-inline-block\" *ngIf=\"\r\n                            d.column?.dataField === 'clientaccountno' &&\r\n                            d.data.accountstatus &&\r\n                            d.data.accountstatus === 'INA'\r\n                          \">\r\n                          <em class=\"fa fa-warning red-color\"></em>\r\n                        </div>\r\n                        <div *ngIf=\"d.column?.dataField === 'servicename'\">\r\n                          <div class=\"arrow-right\" *ngIf=\"d.data.narrative\">\r\n                            <div class=\"person-details\">\r\n                              <p><span>Narrative</span><span [innerHtml]=\"splitingData(d, '.')\"></span></p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div *ngIf=\"d.column?.dataField === 'narrative'; else dataValue\">\r\n                          {{ d.value }}\r\n                        </div>\r\n                        <ng-template #dataValue>{{ d.value }}</ng-template>\r\n                      </div>\r\n                    </dx-data-grid>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </as-split-area>\r\n      </as-split>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #callDialogPopup>\r\n  <h2 matDialogTitle>Narrative</h2>\r\n  <div [innerHTML]=\"popupData\"></div>\r\n  <div class=\"text-right\">\r\n    <button mat-button (click)=\"closeDialogPopup()\" class=\"btn btn-cancel mr-2\">Close</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<app-dynamic-details *ngIf=\"openTab\" [key]=\"selectedRowData\"></app-dynamic-details>\r\n\r\n<div class=\"modal\" id=\"DeleteGridList\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Delete Grid List</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"clearfix mb-2\">{{ deletePopupText }}</div>\r\n        <div class=\"clearfix mb-2\">Please provide a reason for deleting this record:</div>\r\n        <div class=\"mb-3\">\r\n          <textarea rows=\"3\" cols=\"30\" pInputTextarea placeholder=\"Provide reason here...\" maxlength=\"4000\"\r\n            class=\"form-control no-resize\" [(ngModel)]=\"enteredReason\"\r\n            (input)=\"checkIsDisabled($event.target.value)\"></textarea>\r\n        </div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right btn btn-primary delete\" data-dismiss=\"modal\"\r\n            (click)=\"deleteRecordWithReason()\" [disabled]=\"isDisabled\">\r\n            Yes\r\n          </button>\r\n          <button class=\"pull-right mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\"\r\n            (click)=\"cancelPopup()\">Cancel</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"DeleteGridListWithoutReason\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Delete Grid List</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"clearfix mb-4\">{{ deletePopupText }}</div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right btn btn-primary delete\" data-dismiss=\"modal\"\r\n            (click)=\"deleteRecordWithoutReason()\">\r\n            Yes\r\n          </button>\r\n          <button class=\"pull-right mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\"\r\n            (click)=\"cancelPopup()\">Cancel</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"ApproveDeleteGridList\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Delete Grid List</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"clearfix mb-2\">{{this.deletedReason}}</div>\r\n        <div class=\"clearfix mb-4\">Do you approve this deletion?</div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary delete\" data-dismiss=\"modal\"\r\n            (click)=\"deleteRecordWithoutReason()\">\r\n            Yes\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\"\r\n            (click)=\"cancelPopup()\">Cancel</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".split-page{outline:3px}.searchlist{min-width:620px!important;height:280px!important}.searchlist table,.searchlist table tr th,.searchlist table tr td{padding:0}.card-title{position:absolute;left:15px;font-size:bold}.red-color{color:#ff6252}.dx-datagrid .dx-row>tr>td{padding:0!important}.dx-datagrid .dx-row>td{padding-bottom:2px!important;text-align:center!important;font-family:Roboto,sans-serif!important}.dx-datagrid-rowsview .dx-row{height:40px!important;font-size:var(--base-font-size)}.dx-datagrid-rowsview .dx-row.dx-row-lines>td{vertical-align:middle!important;overflow:unset;padding-left:6px!important;padding-right:6px!important}.card{box-shadow:none!important;border:none!important}.card-header{padding-left:0;background:#eff8ff;height:auto}.dx-datagrid-rowsview .dx-row.dx-row-lines:first-child,.dx-datagrid-rowsview .dx-row.dx-row-lines:first-child>td,.dx-datagrid-rowsview .dx-row.dx-row-lines:first-child>tr>td{overflow:unset!important}.dashboard-hover{position:relative}.dashboard-hover:hover .arrow-right{display:block;z-index:1}.dashboard-hover .person-details{display:inline-block;width:100%}.dashboard-hover .person-details p{margin:0}.dashboard-hover .person-details p span:first-child{width:95px;display:inline-block;vertical-align:top}.dashboard-hover .person-details p span:last-child{width:160px;word-break:break-word;display:inline-flex;overflow:hidden;white-space:normal}.dashboard-hover .person-details p span:last-child:before{content:\":\";padding-right:5px}.dashboard-hover .arrow-right{width:280px;min-height:95px;background-color:var(--bg-light);color:var(--text-dark);padding:10px;position:absolute;float:left;display:none;top:-13px;left:88px;border:1px solid var(--table-border);border-radius:6px}.dashboard-hover .arrow-right:after{content:\" \";position:absolute;margin:auto;top:13px;left:-101%;right:0;background:#fff;width:20px;height:20px;transform:rotate(45deg);-webkit-transform:rotate(135deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);-ms-transform:rotate(45deg);border-right:1px solid var(--table-border);border-bottom:1px solid var(--table-border)}.dashboard-hover-contact{position:relative}.dashboard-hover-contact:hover .arrow-right{display:block;z-index:1}.dashboard-hover-contact .person-details{display:inline-block;width:100%}.dashboard-hover-contact .person-details p{margin:0}.dashboard-hover-contact .person-details p span:first-child{width:95px;display:inline-block;vertical-align:top;word-break:break-word;white-space:normal}.dashboard-hover-contact .person-details p span:last-child{width:135px;word-break:break-word;display:inline-flex;overflow:hidden;white-space:normal;text-align:left}.dashboard-hover-contact .person-details p span:last-child:before{content:\":\";padding-right:5px}.dashboard-hover-contact .arrow-right{width:280px;min-height:50px;background-color:var(--bg-light);color:var(--text-dark);padding:10px;position:absolute;float:left;display:none;top:-13px;left:88px;border:1px solid var(--table-border);border-radius:6px}.dashboard-hover-contact .arrow-right:after{content:\" \";position:absolute;margin:auto;top:13px;left:-101%;right:0;background:#fff;width:20px;height:20px;transform:rotate(45deg);-webkit-transform:rotate(135deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);-ms-transform:rotate(45deg);border-right:1px solid var(--table-border);border-bottom:1px solid var(--table-border)}.open{color:#ff6252;border-radius:6px;font-weight:500;padding:5px!important;vertical-align:middle;min-width:85px;max-width:100%}.draft,.returned{color:red;border-radius:6px;font-weight:500;padding:5px!important;vertical-align:middle;min-width:85px;max-width:100%}.closed,.completed,.approved{color:#2ecd53;border-radius:6px;font-weight:500;padding:5px;vertical-align:middle;min-width:85px;max-width:100%}.orange{color:orange;border-radius:6px;font-weight:500;padding:5px;vertical-align:middle;min-width:85px;max-width:100%}.blue{color:#2c2863;border-radius:6px;font-weight:700;padding:5px;vertical-align:middle;min-width:85px;max-width:100%}.pending{color:#e29866;border-radius:6px;font-weight:500;padding:5px;vertical-align:middle;min-width:85px;max-width:100%}.pending-approval{color:orange;border-radius:6px;font-weight:500;padding:5px;vertical-align:middle;min-width:85px;max-width:100%}.readOnlyCard{pointer-events:none!important;opacity:.7!important}.page-wrp{background:var(--bg-light)}.page-wrp h6{color:var(--text-dark)}:host ::ng-deep .as-split-gutter{background:var(--table-header)!important;display:none!important}.title{font-weight:700;font-size:17px;text-transform:capitalize;color:#2c2863}.col-custom .btn-icon-bg{padding:5px 8px!important}:host ::ng-deep .split-page .card-body{padding:0 15px!important}:host ::ng-deep .filterOptions{width:250px}:host ::ng-deep .p-multiselect-items{font-size:12px}:host ::ng-deep .p-multiselect-panel .p-multiselect-header .p-multiselect-filter-container .p-inputtext{padding:.2rem .5rem}:host ::ng-deep .dashboard-hover a{color:var(--interactive-color)!important;cursor:pointer}:host ::ng-deep .dx-datagrid .dx-column-indicators{position:relative;right:1px}:host ::ng-deep .dx-datagrid .dx-toolbar-after{margin-right:5px;margin-top:5px}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content{padding:5px 6px;border-radius:3px;background-color:var(--btn)}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content .dx-icon-export{color:var(--hover-text)}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content .dx-icon-spindown{color:var(--hover-text)}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content .dx-icon-column-chooser{color:var(--hover-text)}:host ::ng-deep .dx-datagrid .dx-checkbox-icon{border:1px solid var(--bg-light)!important}:host ::ng-deep .dx-datagrid .business-group .dx-template-wrapper,:host ::ng-deep .dx-datagrid .business-group .business-alert{display:inline-flex}:host ::ng-deep .dynamic-search .p-component .p-accordion-toggle-icon{margin-top:-8px;position:absolute;right:.5em;top:50%;font-size:var(--font-13);color:var(--primary)}:host ::ng-deep .dynamic-search .p-component .head-text span{color:var(--primary)}:host ::ng-deep .dynamic-search .error-text{font-size:var(--font-12)}.no-resize{resize:none}:host ::ng-deep .custom-mat-tooltip{width:150px;font-size:var(--font-14)}\n"], dependencies: [{ kind: "directive", type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i7.FormioComponent, selector: "formio" }, { kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i2.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { kind: "directive", type: i2.FormArrayName, selector: "[formArrayName]", inputs: ["formArrayName"] }, { kind: "component", type: i7$1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i9.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i10.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i11.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "component", type: i12.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { kind: "component", type: i12.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }, { kind: "directive", type: i12.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }, { kind: "directive", type: i13.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: i3.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "component", type: i15.DxDataGridComponent, selector: "dx-data-grid", inputs: ["accessKey", "activeStateEnabled", "allowColumnReordering", "allowColumnResizing", "autoNavigateToFocusedRow", "cacheEnabled", "cellHintEnabled", "columnAutoWidth", "columnChooser", "columnFixing", "columnHidingEnabled", "columnMinWidth", "columnResizingMode", "columns", "columnWidth", "customizeColumns", "dataRowTemplate", "dataSource", "dateSerializationFormat", "disabled", "editing", "elementAttr", "errorRowEnabled", "export", "filterBuilder", "filterBuilderPopup", "filterPanel", "filterRow", "filterSyncEnabled", "filterValue", "focusedColumnIndex", "focusedRowEnabled", "focusedRowIndex", "focusedRowKey", "grouping", "groupPanel", "headerFilter", "height", "highlightChanges", "hint", "hoverStateEnabled", "keyboardNavigation", "keyExpr", "loadPanel", "masterDetail", "noDataText", "pager", "paging", "remoteOperations", "renderAsync", "repaintChangesOnly", "rowAlternationEnabled", "rowDragging", "rowTemplate", "rtlEnabled", "scrolling", "searchPanel", "selectedRowKeys", "selection", "selectionFilter", "showBorders", "showColumnHeaders", "showColumnLines", "showRowLines", "sortByGroupSummaryInfo", "sorting", "stateStoring", "summary", "syncLookupFilterValues", "tabIndex", "toolbar", "twoWayBindingEnabled", "visible", "width", "wordWrapEnabled"], outputs: ["onAdaptiveDetailRowPreparing", "onCellClick", "onCellDblClick", "onCellHoverChanged", "onCellPrepared", "onContentReady", "onContextMenuPreparing", "onDataErrorOccurred", "onDisposing", "onEditCanceled", "onEditCanceling", "onEditingStart", "onEditorPrepared", "onEditorPreparing", "onExporting", "onFocusedCellChanged", "onFocusedCellChanging", "onFocusedRowChanged", "onFocusedRowChanging", "onInitialized", "onInitNewRow", "onKeyDown", "onOptionChanged", "onRowClick", "onRowCollapsed", "onRowCollapsing", "onRowDblClick", "onRowExpanded", "onRowExpanding", "onRowInserted", "onRowInserting", "onRowPrepared", "onRowRemoved", "onRowRemoving", "onRowUpdated", "onRowUpdating", "onRowValidating", "onSaved", "onSaving", "onSelectionChanged", "onToolbarPreparing", "accessKeyChange", "activeStateEnabledChange", "allowColumnReorderingChange", "allowColumnResizingChange", "autoNavigateToFocusedRowChange", "cacheEnabledChange", "cellHintEnabledChange", "columnAutoWidthChange", "columnChooserChange", "columnFixingChange", "columnHidingEnabledChange", "columnMinWidthChange", "columnResizingModeChange", "columnsChange", "columnWidthChange", "customizeColumnsChange", "dataRowTemplateChange", "dataSourceChange", "dateSerializationFormatChange", "disabledChange", "editingChange", "elementAttrChange", "errorRowEnabledChange", "exportChange", "filterBuilderChange", "filterBuilderPopupChange", "filterPanelChange", "filterRowChange", "filterSyncEnabledChange", "filterValueChange", "focusedColumnIndexChange", "focusedRowEnabledChange", "focusedRowIndexChange", "focusedRowKeyChange", "groupingChange", "groupPanelChange", "headerFilterChange", "heightChange", "highlightChangesChange", "hintChange", "hoverStateEnabledChange", "keyboardNavigationChange", "keyExprChange", "loadPanelChange", "masterDetailChange", "noDataTextChange", "pagerChange", "pagingChange", "remoteOperationsChange", "renderAsyncChange", "repaintChangesOnlyChange", "rowAlternationEnabledChange", "rowDraggingChange", "rowTemplateChange", "rtlEnabledChange", "scrollingChange", "searchPanelChange", "selectedRowKeysChange", "selectionChange", "selectionFilterChange", "showBordersChange", "showColumnHeadersChange", "showColumnLinesChange", "showRowLinesChange", "sortByGroupSummaryInfoChange", "sortingChange", "stateStoringChange", "summaryChange", "syncLookupFilterValuesChange", "tabIndexChange", "toolbarChange", "twoWayBindingEnabledChange", "visibleChange", "widthChange", "wordWrapEnabledChange"] }, { kind: "component", type: i16.DxoColumnChooserComponent, selector: "dxo-column-chooser", inputs: ["allowSearch", "container", "emptyPanelText", "enabled", "height", "mode", "position", "search", "searchTimeout", "selection", "sortOrder", "title", "width"] }, { kind: "component", type: i16.DxoPositionComponent, selector: "dxo-position", inputs: ["at", "boundary", "boundaryOffset", "collision", "my", "of", "offset"] }, { kind: "component", type: i16.DxoSelectionComponent, selector: "dxo-selection", inputs: ["allowSelectAll", "recursive", "selectByClick", "deferred", "mode", "selectAllMode", "showCheckBoxesMode"] }, { kind: "component", type: i16.DxiColumnComponent, selector: "dxi-column", inputs: ["alignment", "allowEditing", "allowExporting", "allowFiltering", "allowFixing", "allowGrouping", "allowHeaderFiltering", "allowHiding", "allowReordering", "allowResizing", "allowSearch", "allowSorting", "autoExpandGroup", "buttons", "calculateCellValue", "calculateDisplayValue", "calculateFilterExpression", "calculateGroupValue", "calculateSortValue", "caption", "cellTemplate", "columns", "cssClass", "customizeText", "dataField", "dataType", "editCellTemplate", "editorOptions", "encodeHtml", "falseText", "filterOperations", "filterType", "filterValue", "filterValues", "fixed", "fixedPosition", "format", "formItem", "groupCellTemplate", "groupIndex", "headerCellTemplate", "headerFilter", "hidingPriority", "isBand", "lookup", "minWidth", "name", "ownerBand", "renderAsync", "selectedFilterOperation", "setCellValue", "showEditorAlways", "showInColumnChooser", "showWhenGrouped", "sortIndex", "sortingMethod", "sortOrder", "trueText", "type", "validationRules", "visible", "visibleIndex", "width"], outputs: ["filterValueChange", "filterValuesChange", "groupIndexChange", "selectedFilterOperationChange", "sortIndexChange", "sortOrderChange", "visibleChange", "visibleIndexChange"] }, { kind: "component", type: i16.DxoHeaderFilterComponent, selector: "dxo-header-filter", inputs: ["allowSearch", "allowSelectAll", "dataSource", "groupInterval", "height", "search", "searchMode", "width", "searchTimeout", "texts", "visible", "showRelevantValues"] }, { kind: "component", type: i16.DxoExportComponent, selector: "dxo-export", inputs: ["backgroundColor", "enabled", "fileName", "formats", "margin", "printingEnabled", "svgToCanvas", "allowExportSelectedData", "texts"] }, { kind: "component", type: i16.DxoFilterBuilderPopupComponent, selector: "dxo-filter-builder-popup", inputs: ["accessKey", "animation", "closeOnOutsideClick", "container", "contentTemplate", "copyRootClassesToWrapper", "deferRendering", "disabled", "dragAndResizeArea", "dragEnabled", "dragOutsideBoundary", "elementAttr", "enableBodyScroll", "focusStateEnabled", "fullScreen", "height", "hideOnOutsideClick", "hideOnParentScroll", "hint", "hoverStateEnabled", "maxHeight", "maxWidth", "minHeight", "minWidth", "onContentReady", "onDisposing", "onHidden", "onHiding", "onInitialized", "onOptionChanged", "onResize", "onResizeEnd", "onResizeStart", "onShowing", "onShown", "onTitleRendered", "position", "resizeEnabled", "restorePosition", "rtlEnabled", "shading", "shadingColor", "showCloseButton", "showTitle", "tabIndex", "title", "titleTemplate", "toolbarItems", "visible", "width", "wrapperAttr"], outputs: ["heightChange", "positionChange", "visibleChange", "widthChange"] }, { kind: "component", type: i16.DxoFilterRowComponent, selector: "dxo-filter-row", inputs: ["applyFilter", "applyFilterText", "betweenEndText", "betweenStartText", "operationDescriptions", "resetOperationText", "showAllText", "showOperationChooser", "visible"] }, { kind: "component", type: i16.DxoLoadPanelComponent, selector: "dxo-load-panel", inputs: ["enabled", "height", "indicatorSrc", "shading", "shadingColor", "showIndicator", "showPane", "text", "width"] }, { kind: "component", type: i16.DxoPagerComponent, selector: "dxo-pager", inputs: ["allowedPageSizes", "displayMode", "infoText", "label", "showInfo", "showNavigationButtons", "showPageSizeSelector", "visible"] }, { kind: "component", type: i16.DxoPagingComponent, selector: "dxo-paging", inputs: ["enabled", "pageIndex", "pageSize"], outputs: ["pageIndexChange", "pageSizeChange"] }, { kind: "component", type: i16.DxoStateStoringComponent, selector: "dxo-state-storing", inputs: ["customLoad", "customSave", "enabled", "savingTimeout", "storageKey", "type"] }, { kind: "directive", type: i17.DxTemplateDirective, selector: "[dxTemplate]", inputs: ["dxTemplateOf"] }, { kind: "directive", type: i18.DynamicIoDirective, selector: "[ndcDynamicInputs],[ndcDynamicOutputs]", inputs: ["ndcDynamicInputs", "ndcDynamicOutputs"], exportAs: ["ndcDynamicIo"] }, { kind: "component", type: i18.DynamicComponent, selector: "ndc-dynamic", inputs: ["ndcDynamicComponent", "ndcDynamicInjector", "ndcDynamicProviders", "ndcDynamicContent", "ndcDynamicNgModuleRef", "ndcDynamicEnvironmentInjector"], outputs: ["ndcDynamicCreated"] }, { kind: "component", type: i19.Accordion, selector: "p-accordion", inputs: ["multiple", "style", "styleClass", "expandIcon", "collapseIcon", "activeIndex", "selectOnFocus", "headerAriaLevel"], outputs: ["onClose", "onOpen", "activeIndexChange"] }, { kind: "component", type: i19.AccordionTab, selector: "p-accordionTab", inputs: ["id", "header", "headerStyle", "tabStyle", "contentStyle", "tabStyleClass", "headerStyleClass", "contentStyleClass", "disabled", "cache", "transitionOptions", "iconPos", "selected", "headerAriaLevel"], outputs: ["selectedChange"] }, { kind: "directive", type: i20.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "directive", type: i21.Tooltip, selector: "[pTooltip]", inputs: ["tooltipPosition", "tooltipEvent", "appendTo", "positionStyle", "tooltipStyleClass", "tooltipZIndex", "escape", "showDelay", "hideDelay", "life", "positionTop", "positionLeft", "autoHide", "fitContent", "hideOnEscape", "pTooltip", "tooltipDisabled", "tooltipOptions"] }, { kind: "component", type: i22.Dropdown, selector: "p-dropdown", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }, { kind: "directive", type: i23.InputTextarea, selector: "[pInputTextarea]", inputs: ["autoResize"], outputs: ["onResize"] }, { kind: "pipe", type: i6.KeyValuePipe, name: "keyvalue" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-dynamic-search', template: "<div [class]=\"userAction === 'view' ? 'readOnlyCard' : ''\">\r\n  <div *ngIf=\"header\">\r\n    <table class=\"table table-bordered\" aria-describedby=\"tab\">\r\n      <thead>\r\n        <tr>\r\n          <th *ngFor=\"let item of titletab | keyvalue\">{{ item.key }}</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td *ngFor=\"let item of titletab | keyvalue\">{{ item.value }}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n  <p-accordion class=\"w-full dynamic-search\" [activeIndex]=\"1\" iconPos=\"endVal\"\r\n  *ngIf=\"dynamicSearch && dynamicSearch.length > 0\">\r\n    <p-accordionTab>\r\n      <ng-template pTemplate=\"header\">\r\n        <span class=\"flex align-items-center head-text gap-2 w-full\">\r\n          <span class=\"font-bold\">Quick Search</span>\r\n        </span>\r\n      </ng-template>\r\n      <div class=\"d-flex my-2 row\">\r\n        <div class=\"col-12 text-md-right\">\r\n          <button type=\"button\" title=\"Add New\" pripple class=\"p-ripple p-element btn btn-primary btn-icon\"\r\n            (click)=\"addGridDynamicSearch()\">\r\n            <em class=\"pi pi-plus font-weight-bold\"></em>\r\n          </button>\r\n          <!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"addGridDynamicSearch()\">Add</button> -->\r\n        </div>\r\n      </div>\r\n      <form [formGroup]=\"gridDynamicSearchForm\">\r\n        <ng-container formArrayName=\"dynamicSearchArray\">\r\n          <div *ngFor=\"let dynamicSearchItem of initDynamicSearch().controls; let dynamicSearchIndex = index\"\r\n            [formGroupName]=\"dynamicSearchIndex\">\r\n            <div class=\"row rbac-card\">\r\n              <div class=\"col-md-11 col-12 pr-0\">\r\n                <div class=\"row\">\r\n                  <!-- <div class=\"col-lg-3 col-md-6 col-12 mb-3\"> -->\r\n                  <!--   <label class=\"referral-form-labels\" for=\"tableList\">Table</label> -->\r\n                  <!--   <p-dropdown -->\r\n                  <!--     [options]=\"dynamicSearchItem.get('tableDropDown')?.value\" -->\r\n                  <!--     optionLabel=\"name\" -->\r\n                  <!--     optionValue=\"value\" -->\r\n                  <!--     id=\"tableList_{{ dynamicSearchIndex }}\" -->\r\n                  <!--     placeholder=\"Select Table\" -->\r\n                  <!--     formControlName=\"tableName\" -->\r\n                  <!--     tabindex=\"0\" -->\r\n                  <!--     styleClass=\"w-100\" -->\r\n                  <!--     (onChange)=\"getColumnList(dynamicSearchIndex, dynamicSearchItem.get('tableName')?.value)\"> -->\r\n                  <!--   </p-dropdown> -->\r\n                  <!--   <span -->\r\n                  <!--     class=\"text-danger error-text\" -->\r\n                  <!--     *ngIf=\" -->\r\n                  <!--       dynamicSearchItem.get('tableName')?.hasError('required') && -->\r\n                  <!--       dynamicSearchItem.get('tableName')?.touched -->\r\n                  <!--     \" -->\r\n                  <!--     >Please Select Table Name</span -->\r\n                  <!--   > -->\r\n                  <!-- </div> -->\r\n                  <div class=\"col-lg-3 col-md-6 col-12 mb-1\">\r\n                    <label class=\"referral-form-labels\" for=\"columnList\">Column <span\r\n                        class=\"requiredfield text-danger\">*</span></label>\r\n                    <p-dropdown [options]=\"dynamicSearchItem.get('columnDropDown')?.value\"\r\n                      id=\"columnList_{{ dynamicSearchIndex }}\" optionLabel=\"name\" optionValue=\"value\"\r\n                      placeholder=\"Select Column\" formControlName=\"columnName\" tabindex=\"0\" styleClass=\"w-100\"\r\n                      (onChange)=\"getConditionList(dynamicSearchIndex, dynamicSearchItem.get('columnName')?.value)\">\r\n                    </p-dropdown>\r\n                    <span class=\"text-danger error-text\" *ngIf=\"\r\n                        dynamicSearchItem.get('columnName')?.hasError('required') &&\r\n                        dynamicSearchItem.get('columnName')?.touched\r\n                      \">Please Select Column Name</span>\r\n                  </div>\r\n                  <div class=\"col-lg-3 col-md-6 col-12 mb-1\">\r\n                    <label class=\"referral-form-labels\" for=\"conditionList\">Condition <span\r\n                        class=\"requiredfield text-danger\">*</span></label>\r\n                    <p-dropdown [options]=\"dynamicSearchItem.get('conditionDropdown')?.value\"\r\n                      id=\"conditionList_{{ dynamicSearchIndex }}\" optionLabel=\"name\" optionValue=\"value\"\r\n                      placeholder=\"Select Condition\" formControlName=\"condition\" tabindex=\"0\" styleClass=\"w-100\"\r\n                      (onChange)=\"resetDynamicSearchValue(dynamicSearchIndex)\">\r\n                    </p-dropdown>\r\n                    <span class=\"text-danger error-text\" *ngIf=\"\r\n                        dynamicSearchItem.get('condition')?.hasError('required') &&\r\n                        dynamicSearchItem.get('condition')?.touched\r\n                      \">Please Select Condition</span>\r\n                  </div>\r\n                  <div class=\"col-lg-3 col-md-6 col-12 mb-1\">\r\n                    <label class=\"referral-form-labels\" for=\"valueList\">Value <span\r\n                        class=\"requiredfield text-danger\">*</span></label>\r\n                    <input type=\"text\" class=\"p-inputtext w-100\" id=\"valueList\" formControlName=\"value\"\r\n                      (change)=\"trimSpaces(dynamicSearchItem)\" placeholder=\"\" />\r\n                    <span class=\"text-danger error-text\" *ngIf=\"\r\n                        (dynamicSearchItem.get('value').errors && dynamicSearchItem.get('value')?.touched) ||\r\n                        (dynamicSearchItem.get('value')?.hasError('required') &&\r\n                          dynamicSearchItem.get('value')?.touched)\r\n                      \">Please Fill Value</span>\r\n                  </div>\r\n                  <div class=\"col-lg-3 col-md-6 col-12 mb-1\">\r\n                    <label class=\"referral-form-labels d-md-block d-none\" for=\"deleteDynamicSearch\">&#160;</label>\r\n                    <span class=\"material-symbols-outlined text-danger delete-icon\" role=\"button\"\r\n                      id=\"deleteDynamicSearch\" (click)=\"removeDynamicSearch(dynamicSearchIndex)\"\r\n                      title=\"Delete\">delete</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- <div\r\n                class=\"col-md-1 col-12 mb-3 text-md-center d-md-flex align-items-md-center justify-content-md-center flex-column\">\r\n                <label class=\"referral-form-labels d-md-block d-none\" for=\"deleteDynamicSearch\">&#160;</label>\r\n                <span class=\"material-symbols-outlined text-danger\" role=\"button\" id=\"deleteDynamicSearch\"\r\n                  (click)=\"removeDynamicSearch(dynamicSearchIndex)\" title=\"Delete\">delete</span>\r\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"removeDynamicSearch()\">Delete</button>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"row d-flex flex-column align-self-end\">\r\n            <div class=\"col-md-12 text-md-right mt-2\">\r\n              <!-- <button\r\n                type=\"button\"\r\n                class=\"btn btn-primary\"\r\n                (click)=\"saveDynamicSearch()\"\r\n                [disabled]=\"saveButtonDisable\">\r\n                Save\r\n              </button> -->\r\n              <button type=\"button\" class=\"btn btn-cancel\" (click)=\"resetDynamicSearch()\">Clear</button>\r\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"submitDynamicSearch()\"\r\n                [disabled]=\"saveButtonDisable\">Search</button>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </form>\r\n    </p-accordionTab>\r\n  </p-accordion>\r\n\r\n  <div class=\"page-wrp\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <!-- <div *ngIf=\"true\">\r\n          <div class=\"d-flex\" [formGroup]=\"filterForm\" *ngIf=\"gridType !== 'view'\">\r\n            <div class=\"col-md-12\">\r\n              <p-multiSelect [options]=\"filterOptions\" styleClass=\"filterOptions\" [group]=\"true\"\r\n                selectedItemsLabel=\"{0} items selected\" defaultLabel=\"Select\" optionLabel=\"label\" optionValue=\"id\"\r\n                id=\"filteroptions\" ariaFilterLabel=\"searchbox\" formControlName=\"selectedFilter\"\r\n                (onChange)=\"changeFilterOptions($event)\">\r\n                <ng-template let-group pTemplate=\"group\">\r\n                  <div class=\"flex align-items-center\">\r\n                    <span>{{ group.columnName }}</span>\r\n                  </div>\r\n                </ng-template>\r\n              </p-multiSelect>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n        <button *ngIf=\"gridType === 'view'\" type=\"button\" class=\"btn btn-cancel mb-3\" (click)=\"goBack()\">Back</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 text-right\">\r\n        <div class=\"d-flex justify-content-between align-items-center col-12 my-2\"\r\n          *ngIf=\"getTitle(updateGrid?.gridTitle)\">\r\n          <h6 class=\"font-weight-bold mb-0\"></h6>\r\n\r\n          <div class=\"d-flex inmate-btn-align\">\r\n            <button class=\"btn-print\" [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\"\r\n              *ngIf=\"showExport\">\r\n              <img class=\"export\" src=\"../../../assets/images/svg/Export_Icon.svg\" alt=\"export\" />\r\n            </button>\r\n            <mat-menu class=\"d-inline-block\" #menu=\"matMenu\" *ngIf=\"showExport\">\r\n              <button mat-menu-item (click)=\"onClose()\" *ngIf=\"pageType === 'DSP' || pageType === 'BUSP'\">\r\n                <mat-icon>{{ icon }}</mat-icon>{{ openclose }} Slidebar\r\n              </button>\r\n              <button mat-menu-item (click)=\"reset('excel')\"><mat-icon>grid_on</mat-icon> Export to Excel</button>\r\n              <button mat-menu-item (click)=\"reset('pdf')\"><mat-icon>picture_as_pdf</mat-icon> Export to PDF</button>\r\n              <button mat-menu-item (click)=\"reset('print')\"><mat-icon>print</mat-icon> Print</button>\r\n              <button mat-menu-item (click)=\"reset(pageType)\" *ngIf=\"pageType === 'DSP' || pageType === 'BUSP'\">\r\n                <mat-icon>reset_tv</mat-icon> Reset Search Criteria\r\n              </button>\r\n              <button *ngIf=\"pageType === 'DSP' || pageType === 'BUSP'\" mat-menu-item\r\n                [matMenuTriggerFor]=\"searchCriteriaList\" #searchcriteriamenutrigger=\"matMenuTrigger\">\r\n                <mat-icon>add_circle_outline</mat-icon> Save Search Criteria\r\n              </button>\r\n            </mat-menu>\r\n            <div [ngClass]=\"updateGrid && updateGrid?.chooser ? 'd-inline-block add-btn-right' : 'd-inline-block py-2'\">\r\n              <!--Add Button, Column chooser button are replacing eachother when its selected-->\r\n              <button class=\"btn-icon-bg d-inline-block pull-right text-right ml-1\"\r\n                *ngIf=\"showGridPage && item && updateGrid?.isInitialFormLoad\" (click)=\"closeForm()\">\r\n                <em class=\"fa fa-times\"></em>\r\n              </button>\r\n              <div *ngIf=\"\r\n                  updateGrid?.gridActionFormArray !== null &&\r\n                  updateGrid?.gridActionFormArray !== undefined &&\r\n                  updateGrid?.gridActionFormArray &&\r\n                  updateGrid?.gridActionFormArray?.length\r\n                \" class=\"update-grid-action-button-container\">\r\n                <ng-container *ngFor=\"let item of updateGrid?.gridActionFormArray; let i = index\">\r\n                  <ng-container *ngIf=\"!(updateGrid?.isShowOnTop && item?.action?.toLowerCase() === 'add')\">\r\n                    <button *ngIf=\"item?.icon && item.isOutsideGrid && !showAdd\" class=\"btn btn-primary\"\r\n                      (click)=\"getOutsideGridAction(item)\">\r\n                      <em [class]=\"item.icon\"></em><span class=\"ml-3\" *ngIf=\"!!item.name\">{{ item.name }}</span>\r\n                    </button>\r\n                    <ng-container *ngIf=\"item?.icon && item.isOutsideGrid && item.type === 'Ocr Scan'\">\r\n                      <label for=\"file\" class=\"btn btn-primary\">\r\n                        <em [class]=\"item.icon\"></em><span class=\"ml-3\" *ngIf=\"!!item.name\">{{ item.name }}</span>\r\n                      </label>\r\n                      <input type=\"file\" (change)=\"uploadDocument(item, $event)\" id=\"file\" aria-hidden=\"true\"\r\n                        style=\"visibility: hidden; display: none\" />\r\n                    </ng-container>\r\n                  </ng-container>\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"updateGrid && updateGrid?.chooser\" class=\"col-custom\">\r\n              <button class=\"btn btn-primary btn-icon ml-1\" (click)=\"columnChooserClick()\">\r\n                <em class=\"fa fa-columns\" aria-hidden=\"true\"></em>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <button *ngIf=\"isAddButton\" type=\"button\" class=\"btn btn-primary\" (click)=\"redirect()\">Add</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <mat-menu #searchCriteriaList=\"matMenu\" class=\"searchlist\">\r\n      <div class=\"row col-sm-12 mt-4\" (click)=\"$event.stopPropagation()\">\r\n        <div class=\"col-sm-6\">\r\n          <mat-form-field>\r\n            <input matInput [(ngModel)]=\"searchCriteria\" placeholder=\"Search Criteria\" />\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-2 mt-2\">\r\n          <button class=\"btn btn-pri\" [disabled]=\"!searchCriteria\" (click)=\"saveSearchCriteria()\">Save</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-sm-12\">\r\n        <table aria-describedby=\"Search_Criteria\">\r\n          <thead>\r\n            <tr>\r\n              <th scope=\"col\">Search Criteria</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngIf=\"totalcount\">\r\n            <tr *ngFor=\"let sc of searchCriteriaArr\">\r\n              <td>\r\n                <mat-icon>search</mat-icon>\r\n                <a href=\"javascript:void(0)\" (click)=\"setSearch(sc.data)\">{{ sc.data.searchCriteria }}</a>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </mat-menu>\r\n    <div class=\"split-page\">\r\n      <as-split unit=\"percent\" useTransition=\"true\" direction=\"{{ layouttype }}\">\r\n        <as-split-area size=\"{{ spliterSize }}\">\r\n          <div *ngIf=\"pageType === 'DSP' || pageType === 'BUSP'\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <formio #formIO [form]=\"jsonForm\" [submission]=\"submittedData\" (submit)=\"onSubmit($event)\"\r\n                  (customEvent)=\"customEvent($event)\"></formio>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </as-split-area>\r\n        <as-split-area size=\"{{ gridspliterSize }}\">\r\n          <div class=\"row\" *ngIf=\"\r\n              ((updateGrid?.isInitialFormLoad !== undefined &&\r\n                updateGrid?.isInitialFormLoad !== null &&\r\n                updateGrid?.isInitialFormLoad) ||\r\n                (updateGrid?.isShowOnTop !== undefined &&\r\n                  updateGrid?.isShowOnTop !== null &&\r\n                  updateGrid?.isShowOnTop)) &&\r\n              item\r\n            \">\r\n            <div class=\"col-12\">\r\n              <ndc-dynamic class=\"no-drag\" [ndcDynamicComponent]=\"item.component\" [ndcDynamicInputs]=\"item\"\r\n                [ndcDynamicOutputs]=\"item?.outputs\"></ndc-dynamic>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <div class=\"row\" *ngIf=\"showGridPage\">\r\n              <div class=\"col-lg-12 gridview\">\r\n                <div class=\"card mb-2\">\r\n                    <!-- [remoteOperations]=\"{ filtering: true, sorting: true, paging: true }\"  Removed server filter-->\r\n                  <div class=\"card-body {{ getTitleClass(fromTitle) }}\">\r\n                    <dx-data-grid [dataSource]=\"dataSource\"\r\n                       [columnMinWidth]=\"100\"\r\n                      [width]=\"'100%'\" [columnResizingMode]=\"'widget'\" [allowColumnReordering]=\"true\"\r\n                      [allowColumnResizing]=\"true\" [columnAutoWidth]=\"true\" (onContentReady)=\"contentReady($event)\"\r\n                      (onRowPrepared)=\"onRowPrepared($event)\" (onCellPrepared)=\"onCellPrepared($event)\"\r\n                      (onCellClick)=\"onCellClick($event)\" (onExporting)=\"onExporting($event)\" [showBorders]=\"true\"\r\n                      [rowAlternationEnabled]=\"true\" [showColumnLines]=\"true\" [showRowLines]=\"true\">\r\n                      <dxo-selection [selectAllMode]=\"allMode\" [showCheckBoxesMode]=\"checkBoxesMode\"\r\n                        [mode]=\"getGridSelection(updateGrid?.gridSelection)\"></dxo-selection>\r\n                      <dxo-load-panel [enabled]=\"false\"></dxo-load-panel>\r\n                      <dxo-export [enabled]=\"true\" [formats]=\"['pdf', 'xlsx']\"></dxo-export>\r\n                      <dxo-filter-row [visible]=\"showFilterRowPanel\"></dxo-filter-row>\r\n                      <dxo-state-storing [enabled]=\"true\" type=\"custom\" [customSave]=\"customSave\"\r\n                        [customLoad]=\"customLoad\"></dxo-state-storing>\r\n\r\n                      <dxo-column-chooser [enabled]=\"true\" mode=\"select\">\r\n                        <dxo-position my=\"right top\" at=\"right top\" of=\".dx-datagrid-column-chooser-button\">\r\n                        </dxo-position>\r\n                      </dxo-column-chooser>\r\n\r\n                      <!--Grid - Footer filter removed -->\r\n                      <dxo-paging [pageSize]=currentPageSize></dxo-paging>\r\n                      <dxo-pager [visible]=\"true\" [showPageSizeSelector]=\"true\" [allowedPageSizes]=\"[5, 10, 15, 20]\"\r\n                        [displayMode]=\"displayMode\" [showInfo]=\"true\" [showNavigationButtons]=\"true\"></dxo-pager>\r\n                      <dxo-filter-builder-popup [position]=\"popupPosition\"> </dxo-filter-builder-popup>\r\n                      <dxo-header-filter [visible]=\"true\"></dxo-header-filter>\r\n                      <ng-container *ngFor=\"let column of columns; let i = index\">\r\n                        <ng-container *ngIf=\"column?.hide !== true\">\r\n                          <ng-container *ngIf=\"column?.link; else noLink\">\r\n                            <dxi-column [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n                              [allowHiding]=\"!column?.Choosable\" [fixed]=\"column?.fixed\" [dataField]=\"column?.columnDef\"\r\n                              [caption]=\"column?.header\" [allowFiltering]=\"column?.filter\" cellTemplate=\"cellTemplate\"\r\n                              [allowSorting]=\"column?.sort\" [width]=\"column?.width\" [sortOrder]=\"\r\n                                getSortOrder(\r\n                                  updateGrid?.defaultSortColumn,\r\n                                  updateGrid?.defaultSortType,\r\n                                  column?.columnDef\r\n                                )\r\n                              \">\r\n                            </dxi-column>\r\n                          </ng-container>\r\n                          <ng-template #noLink>\r\n                            <ng-container *ngIf=\"column?.icon; else noIcon\">\r\n                              <dxi-column [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n                                [allowHiding]=\"!column?.Choosable\" [width]=\"column?.width\" [fixed]=\"column?.fixed\"\r\n                                [dataField]=\"column?.columnDef\" [caption]=\"column?.header\"\r\n                                [allowFiltering]=\"column?.filter\" cellTemplate=\"iconTemplate\"\r\n                                [allowSorting]=\"column?.sort\" [sortOrder]=\"\r\n                                  getSortOrder(\r\n                                    updateGrid?.defaultSortColumn,\r\n                                    updateGrid?.defaultSortType,\r\n                                    column?.columnDef\r\n                                  )\r\n                                \">\r\n                              </dxi-column>\r\n                            </ng-container>\r\n                          </ng-template>\r\n                          <ng-template #noIcon>\r\n                            <ng-container *ngIf=\"column?.dateFormat; else noDate\">\r\n                              <dxi-column [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n                                [allowHiding]=\"!column?.Choosable\" [width]=\"column?.width\" [fixed]=\"column?.fixed\"\r\n                                *ngIf=\"column?.dateFormat === 'date' || column?.dateFormat === 'datetime'\"\r\n                                [dataField]=\"column?.columnDef\" [caption]=\"column?.header\"\r\n                                [allowFiltering]=\"column?.filter\" dataType=\"date\"\r\n                                [format]=\"getDateFormat(column?.dateFormat)\" [allowSorting]=\"column?.sort\" [sortOrder]=\"\r\n                                  getSortOrder(\r\n                                    updateGrid?.defaultSortColumn,\r\n                                    updateGrid?.defaultSortType,\r\n                                    column?.columnDef\r\n                                  )\r\n                                \">\r\n                              </dxi-column>\r\n                            </ng-container>\r\n                          </ng-template>\r\n                          <ng-template #noDate>\r\n                            <ng-container *ngIf=\"column?.header.toLowerCase().trim() === 'status'; else noStatus\">\r\n                              <dxi-column [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n                                [allowHiding]=\"!column?.Choosable\" [width]=\"column?.width\" [fixed]=\"column?.fixed\"\r\n                                [dataField]=\"column?.columnDef\" [caption]=\"column?.header\"\r\n                                [allowFiltering]=\"column?.filter\" cellTemplate=\"statusTemplate\"\r\n                                [allowSorting]=\"column?.sort\" [sortOrder]=\"\r\n                                  getSortOrder(\r\n                                    updateGrid?.defaultSortColumn,\r\n                                    updateGrid?.defaultSortType,\r\n                                    column?.columnDef\r\n                                  )\r\n                                \">\r\n                              </dxi-column>\r\n                            </ng-container>\r\n                          </ng-template>\r\n                          <ng-template #noStatus>\r\n                            <dxi-column [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n                              [allowHiding]=\"!column?.Choosable\" [width]=\"column?.width\" [fixed]=\"column?.fixed\"\r\n                              [dataField]=\"column?.columnDef\" [caption]=\"column?.header\"\r\n                              [allowFiltering]=\"column?.filter\" cellTemplate=\"dataTemplate\"\r\n                              [allowSorting]=\"column?.sort\" [sortOrder]=\"\r\n                                getSortOrder(\r\n                                  updateGrid?.defaultSortColumn,\r\n                                  updateGrid?.defaultSortType,\r\n                                  column?.columnDef\r\n                                )\r\n                              \">\r\n                            </dxi-column>\r\n                          </ng-template>\r\n                        </ng-container>\r\n                      </ng-container>\r\n                      <ng-container *ngIf=\"showGridActions(updateGrid, showActionColumn, gridType)\">\r\n                        <dxi-column [width]=\"120\" [allowFiltering]=\"false\" [showInColumnChooser]=\"false\"\r\n                          [allowSorting]=\"false\" caption=\"Action\" cellTemplate=\"editCellTemplate\">\r\n                        </dxi-column>\r\n                      </ng-container>\r\n                      <div *dxTemplate=\"let d of 'cellTemplate'\" class=\"dashboard-hover\">\r\n                        <a *ngIf=\"d.value && d.value !== 'null'\" (click)=\"getRouter(d, item)\">{{ d.value !== 'null' ?\r\n                          d.value : '' }}\r\n                          <span *ngIf=\"showIcon(d)\"></span>\r\n                        </a>\r\n                      </div>\r\n                      <div *dxTemplate=\"let d of 'iconTemplate'\">\r\n                        <span *ngFor=\"let item of d.data.rbacConditions; let i = index\">\r\n                          <em *ngIf=\"item.action !== 'add'\" [class]=\"item.icon\" (click)=\"popup(d?.key, item)\"></em>\r\n                        </span>\r\n                      </div>\r\n                      <div *dxTemplate=\"let d of 'editCellTemplate'\">\r\n                        <span *ngFor=\"let item of d.data.rbacConditions; let i = index\">\r\n                          <!-- Tooltip for deleted row -->\r\n                          <a *ngIf=\"\r\n                              item?.action === 'info'\r\n                            \" class=\"no-bg\" [pTooltip]=\"tooltipContent\" tooltipPosition=\"left\"\r\n                            (click)=\"getInsideGridAction(d, item)\">\r\n                            <em [class]=\"item.icon\" style=\"padding-right: 10px\"></em>\r\n                          </a>\r\n                          <ng-template #tooltipContent>\r\n                            <div class=\"custom-mat-tooltip\">\r\n                              <div class=\"mb-1\">Delete Status: Pending</div>\r\n                              <div>{{item?.message}}</div>\r\n                            </div>\r\n                          </ng-template>\r\n                          <a *ngIf=\"\r\n                                item?.icon &&\r\n                                item?.action !== 'info' &&\r\n                                !item.isOutsideGrid &&\r\n                                d?.data?.status !== 'Closed' &&\r\n                                item.action !== 'changepathway' &&\r\n                                !item?.hide;\r\n                              else changepathway\r\n                            \" class=\"no-bg\" matTooltip=\"{{ titleCaseToolTip(item?.action) }}\"\r\n                            (click)=\"getInsideGridAction(d, item)\">\r\n                            <em [class]=\"item.icon\" style=\"padding-right: 10px\"></em>\r\n                          </a>\r\n\r\n                          <ng-template #changepathway>\r\n                            <a *ngIf=\"item.action === 'changepathway' && d?.rowIndex === 0\" class=\"no-bg\"\r\n                              matTooltip=\"{{ item?.action }}\" (click)=\"getInsideGridAction(d, item)\">\r\n                              <em [class]=\"item.icon\" style=\"padding-right: 10px\"></em>\r\n                            </a>\r\n                          </ng-template>\r\n                        </span>\r\n                        <a *ngIf=\"updateGrid?.gridActionFormArray?.icon\" class=\"no-bg\" matTooltip=\"Open\"\r\n                          (click)=\"openLink(d)\">\r\n                          <em class=\"fa fa-external-link\"></em>\r\n                        </a>\r\n                        <a *ngIf=\"updateGrid?.edit\" class=\"no-bg\" matTooltip=\"Edit\" (click)=\"editData(d)\">\r\n                          <em class=\"fa fa-pencil\" title=\"Edit\"></em>\r\n                        </a>\r\n                        <a *ngIf=\"updateGrid?.view\" class=\"no-bg\" matTooltip=\"View\" (click)=\"viewData(d)\">\r\n                          <em class=\"fa fa-eye\" title=\"View\"></em>\r\n                        </a>\r\n                        <a *ngIf=\"updateGrid?.delete\" class=\"no-bg text-danger\" matTooltip=\"Delete\"\r\n                          (click)=\"deleteData(d)\">\r\n                          <em class=\"fa fa-trash\"></em>\r\n                        </a>\r\n                        <button *ngIf=\"updateGrid?.activeordeactive\" class=\"no-bg\" (click)=\"deleteData(d)\">\r\n                          <em *ngIf=\"updateGrid?.activeordeactive && d.data.activeflag === 1\"\r\n                            class=\"fa fa-toggle-on\"></em>\r\n                          <em *ngIf=\"updateGrid?.activeordeactive && d.data.activeflag === 0\"\r\n                            class=\"fa fa-toggle-off\"></em>\r\n                        </button>\r\n                      </div>\r\n                      <div *dxTemplate=\"let d of 'statusTemplate'\" [class]=\"changeStatusColor(d.value)\">\r\n                        <span>{{ d.value }}</span>\r\n                      </div>\r\n                      <div *dxTemplate=\"let d of 'dataTemplate'\"\r\n                        [ngClass]=\"{ 'dashboard-hover-contact': d.column?.dataField === 'servicename' }\">\r\n                        <div class=\"d-inline-block\" *ngIf=\"\r\n                            d.column?.dataField === 'clientaccountno' &&\r\n                            d.data.accountstatus &&\r\n                            d.data.accountstatus === 'INA'\r\n                          \">\r\n                          <em class=\"fa fa-warning red-color\"></em>\r\n                        </div>\r\n                        <div *ngIf=\"d.column?.dataField === 'servicename'\">\r\n                          <div class=\"arrow-right\" *ngIf=\"d.data.narrative\">\r\n                            <div class=\"person-details\">\r\n                              <p><span>Narrative</span><span [innerHtml]=\"splitingData(d, '.')\"></span></p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div *ngIf=\"d.column?.dataField === 'narrative'; else dataValue\">\r\n                          {{ d.value }}\r\n                        </div>\r\n                        <ng-template #dataValue>{{ d.value }}</ng-template>\r\n                      </div>\r\n                    </dx-data-grid>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </as-split-area>\r\n      </as-split>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #callDialogPopup>\r\n  <h2 matDialogTitle>Narrative</h2>\r\n  <div [innerHTML]=\"popupData\"></div>\r\n  <div class=\"text-right\">\r\n    <button mat-button (click)=\"closeDialogPopup()\" class=\"btn btn-cancel mr-2\">Close</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<app-dynamic-details *ngIf=\"openTab\" [key]=\"selectedRowData\"></app-dynamic-details>\r\n\r\n<div class=\"modal\" id=\"DeleteGridList\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Delete Grid List</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"clearfix mb-2\">{{ deletePopupText }}</div>\r\n        <div class=\"clearfix mb-2\">Please provide a reason for deleting this record:</div>\r\n        <div class=\"mb-3\">\r\n          <textarea rows=\"3\" cols=\"30\" pInputTextarea placeholder=\"Provide reason here...\" maxlength=\"4000\"\r\n            class=\"form-control no-resize\" [(ngModel)]=\"enteredReason\"\r\n            (input)=\"checkIsDisabled($event.target.value)\"></textarea>\r\n        </div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right btn btn-primary delete\" data-dismiss=\"modal\"\r\n            (click)=\"deleteRecordWithReason()\" [disabled]=\"isDisabled\">\r\n            Yes\r\n          </button>\r\n          <button class=\"pull-right mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\"\r\n            (click)=\"cancelPopup()\">Cancel</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"DeleteGridListWithoutReason\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Delete Grid List</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"clearfix mb-4\">{{ deletePopupText }}</div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right btn btn-primary delete\" data-dismiss=\"modal\"\r\n            (click)=\"deleteRecordWithoutReason()\">\r\n            Yes\r\n          </button>\r\n          <button class=\"pull-right mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\"\r\n            (click)=\"cancelPopup()\">Cancel</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"ApproveDeleteGridList\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Delete Grid List</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"clearfix mb-2\">{{this.deletedReason}}</div>\r\n        <div class=\"clearfix mb-4\">Do you approve this deletion?</div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary delete\" data-dismiss=\"modal\"\r\n            (click)=\"deleteRecordWithoutReason()\">\r\n            Yes\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\"\r\n            (click)=\"cancelPopup()\">Cancel</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".split-page{outline:3px}.searchlist{min-width:620px!important;height:280px!important}.searchlist table,.searchlist table tr th,.searchlist table tr td{padding:0}.card-title{position:absolute;left:15px;font-size:bold}.red-color{color:#ff6252}.dx-datagrid .dx-row>tr>td{padding:0!important}.dx-datagrid .dx-row>td{padding-bottom:2px!important;text-align:center!important;font-family:Roboto,sans-serif!important}.dx-datagrid-rowsview .dx-row{height:40px!important;font-size:var(--base-font-size)}.dx-datagrid-rowsview .dx-row.dx-row-lines>td{vertical-align:middle!important;overflow:unset;padding-left:6px!important;padding-right:6px!important}.card{box-shadow:none!important;border:none!important}.card-header{padding-left:0;background:#eff8ff;height:auto}.dx-datagrid-rowsview .dx-row.dx-row-lines:first-child,.dx-datagrid-rowsview .dx-row.dx-row-lines:first-child>td,.dx-datagrid-rowsview .dx-row.dx-row-lines:first-child>tr>td{overflow:unset!important}.dashboard-hover{position:relative}.dashboard-hover:hover .arrow-right{display:block;z-index:1}.dashboard-hover .person-details{display:inline-block;width:100%}.dashboard-hover .person-details p{margin:0}.dashboard-hover .person-details p span:first-child{width:95px;display:inline-block;vertical-align:top}.dashboard-hover .person-details p span:last-child{width:160px;word-break:break-word;display:inline-flex;overflow:hidden;white-space:normal}.dashboard-hover .person-details p span:last-child:before{content:\":\";padding-right:5px}.dashboard-hover .arrow-right{width:280px;min-height:95px;background-color:var(--bg-light);color:var(--text-dark);padding:10px;position:absolute;float:left;display:none;top:-13px;left:88px;border:1px solid var(--table-border);border-radius:6px}.dashboard-hover .arrow-right:after{content:\" \";position:absolute;margin:auto;top:13px;left:-101%;right:0;background:#fff;width:20px;height:20px;transform:rotate(45deg);-webkit-transform:rotate(135deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);-ms-transform:rotate(45deg);border-right:1px solid var(--table-border);border-bottom:1px solid var(--table-border)}.dashboard-hover-contact{position:relative}.dashboard-hover-contact:hover .arrow-right{display:block;z-index:1}.dashboard-hover-contact .person-details{display:inline-block;width:100%}.dashboard-hover-contact .person-details p{margin:0}.dashboard-hover-contact .person-details p span:first-child{width:95px;display:inline-block;vertical-align:top;word-break:break-word;white-space:normal}.dashboard-hover-contact .person-details p span:last-child{width:135px;word-break:break-word;display:inline-flex;overflow:hidden;white-space:normal;text-align:left}.dashboard-hover-contact .person-details p span:last-child:before{content:\":\";padding-right:5px}.dashboard-hover-contact .arrow-right{width:280px;min-height:50px;background-color:var(--bg-light);color:var(--text-dark);padding:10px;position:absolute;float:left;display:none;top:-13px;left:88px;border:1px solid var(--table-border);border-radius:6px}.dashboard-hover-contact .arrow-right:after{content:\" \";position:absolute;margin:auto;top:13px;left:-101%;right:0;background:#fff;width:20px;height:20px;transform:rotate(45deg);-webkit-transform:rotate(135deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);-ms-transform:rotate(45deg);border-right:1px solid var(--table-border);border-bottom:1px solid var(--table-border)}.open{color:#ff6252;border-radius:6px;font-weight:500;padding:5px!important;vertical-align:middle;min-width:85px;max-width:100%}.draft,.returned{color:red;border-radius:6px;font-weight:500;padding:5px!important;vertical-align:middle;min-width:85px;max-width:100%}.closed,.completed,.approved{color:#2ecd53;border-radius:6px;font-weight:500;padding:5px;vertical-align:middle;min-width:85px;max-width:100%}.orange{color:orange;border-radius:6px;font-weight:500;padding:5px;vertical-align:middle;min-width:85px;max-width:100%}.blue{color:#2c2863;border-radius:6px;font-weight:700;padding:5px;vertical-align:middle;min-width:85px;max-width:100%}.pending{color:#e29866;border-radius:6px;font-weight:500;padding:5px;vertical-align:middle;min-width:85px;max-width:100%}.pending-approval{color:orange;border-radius:6px;font-weight:500;padding:5px;vertical-align:middle;min-width:85px;max-width:100%}.readOnlyCard{pointer-events:none!important;opacity:.7!important}.page-wrp{background:var(--bg-light)}.page-wrp h6{color:var(--text-dark)}:host ::ng-deep .as-split-gutter{background:var(--table-header)!important;display:none!important}.title{font-weight:700;font-size:17px;text-transform:capitalize;color:#2c2863}.col-custom .btn-icon-bg{padding:5px 8px!important}:host ::ng-deep .split-page .card-body{padding:0 15px!important}:host ::ng-deep .filterOptions{width:250px}:host ::ng-deep .p-multiselect-items{font-size:12px}:host ::ng-deep .p-multiselect-panel .p-multiselect-header .p-multiselect-filter-container .p-inputtext{padding:.2rem .5rem}:host ::ng-deep .dashboard-hover a{color:var(--interactive-color)!important;cursor:pointer}:host ::ng-deep .dx-datagrid .dx-column-indicators{position:relative;right:1px}:host ::ng-deep .dx-datagrid .dx-toolbar-after{margin-right:5px;margin-top:5px}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content{padding:5px 6px;border-radius:3px;background-color:var(--btn)}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content .dx-icon-export{color:var(--hover-text)}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content .dx-icon-spindown{color:var(--hover-text)}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content .dx-icon-column-chooser{color:var(--hover-text)}:host ::ng-deep .dx-datagrid .dx-checkbox-icon{border:1px solid var(--bg-light)!important}:host ::ng-deep .dx-datagrid .business-group .dx-template-wrapper,:host ::ng-deep .dx-datagrid .business-group .business-alert{display:inline-flex}:host ::ng-deep .dynamic-search .p-component .p-accordion-toggle-icon{margin-top:-8px;position:absolute;right:.5em;top:50%;font-size:var(--font-13);color:var(--primary)}:host ::ng-deep .dynamic-search .p-component .head-text span{color:var(--primary)}:host ::ng-deep .dynamic-search .error-text{font-size:var(--font-12)}.no-resize{resize:none}:host ::ng-deep .custom-mat-tooltip{width:150px;font-size:var(--font-14)}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i1.ActivatedRoute }, { type: i0.ChangeDetectorRef }, { type: i2.UntypedFormBuilder }, { type: FormioService }, { type: LocalStorageService }, { type: i2.UntypedFormBuilder }, { type: DataStoreService }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }]; }, propDecorators: { searchcriteriamenutrigger: [{
                type: ViewChild,
                args: ['searchcriteriamenutrigger']
            }], dataGrid: [{
                type: ViewChild,
                args: [DxDataGridComponent, { static: false }]
            }], formId: [{
                type: Input
            }], callDialogPopup: [{
                type: ViewChild,
                args: ['callDialogPopup']
            }], outerRouting: [{
                type: Output
            }], formIO: [{
                type: ViewChild,
                args: ['formIO']
            }], filterOptionsDropdown: [{
                type: ViewChild,
                args: [MultiSelect]
            }], onResize: [{
                type: HostListener,
                args: ['window:resize', ['$event']]
            }] } });

const routes$1 = [
    {
        path: 'search/:pageId',
        component: DynamicSearchComponent,
        loadChildren: () => Promise.resolve().then(function () { return dynamicSearch_module; }).then(m => m.DynamicSearchModule)
    },
    {
        path: 'view/:pageId',
        component: DynamicSearchComponent,
        loadChildren: () => Promise.resolve().then(function () { return dynamicSearch_module; }).then(m => m.DynamicSearchModule)
    },
    {
        path: 'search/:pageId/:pageSaveID',
        component: DynamicSearchComponent,
        loadChildren: () => Promise.resolve().then(function () { return dynamicSearch_module; }).then(m => m.DynamicSearchModule)
    }
];
class DynamicSearchRoutingModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchRoutingModule, imports: [RouterModule.forChild(routes$1), RouterModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$1)],
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

class Order {
    ID;
    OrderNumber;
    OrderDate;
    SaleAmount;
    Terms;
    CustomerInfo;
    Employee;
}
const ORDER_DATE = '2014/04/10';
const STORE_CITY = 'Los Angeles';
const EMPLOYEE_JIM = 'Jim Packard';
const EMPLOYEE_TODD = 'Todd Hoffman';
const EMPLOYEE_CLARK = 'Clark Morgan';
const SALT_LAKE_CITY = 'Salt Lake City';
const orders = [
    {
        ID: 1,
        OrderNumber: 35703,
        OrderDate: ORDER_DATE,
        SaleAmount: 11800,
        Terms: '15 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'California',
            StoreCity: STORE_CITY
        }
    },
    {
        ID: 4,
        OrderNumber: 35711,
        OrderDate: '2014/01/12',
        SaleAmount: 16050,
        Terms: '15 Days',
        Employee: EMPLOYEE_JIM,
        CustomerInfo: {
            StoreState: 'California',
            StoreCity: 'San Jose'
        }
    },
    {
        ID: 5,
        OrderNumber: 35714,
        OrderDate: '2014/01/22',
        SaleAmount: 14750,
        Terms: '15 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'Nevada',
            StoreCity: 'Las Vegas'
        }
    },
    {
        ID: 7,
        OrderNumber: 35983,
        OrderDate: '2014/02/07',
        SaleAmount: 3725,
        Terms: '15 Days',
        Employee: EMPLOYEE_TODD,
        CustomerInfo: {
            StoreState: 'Colorado',
            StoreCity: 'Denver'
        }
    },
    {
        ID: 9,
        OrderNumber: 36987,
        OrderDate: '2014/03/11',
        SaleAmount: 14200,
        Terms: '15 Days',
        Employee: EMPLOYEE_CLARK,
        CustomerInfo: {
            StoreState: 'Utah',
            StoreCity: SALT_LAKE_CITY
        }
    },
    {
        ID: 11,
        OrderNumber: 38466,
        OrderDate: '2014/03/01',
        SaleAmount: 7800,
        Terms: '15 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'California',
            StoreCity: STORE_CITY
        }
    },
    {
        ID: 14,
        OrderNumber: 39420,
        OrderDate: '2014/02/15',
        SaleAmount: 20500,
        Terms: '15 Days',
        Employee: EMPLOYEE_JIM,
        CustomerInfo: {
            StoreState: 'California',
            StoreCity: 'San Jose'
        }
    },
    {
        ID: 15,
        OrderNumber: 39874,
        OrderDate: '2014/02/04',
        SaleAmount: 9050,
        Terms: '30 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'Nevada',
            StoreCity: 'Las Vegas'
        }
    },
    {
        ID: 18,
        OrderNumber: 42847,
        OrderDate: '2014/02/15',
        SaleAmount: 20400,
        Terms: '30 Days',
        Employee: EMPLOYEE_TODD,
        CustomerInfo: {
            StoreState: 'Wyoming',
            StoreCity: 'Casper'
        }
    },
    {
        ID: 19,
        OrderNumber: 43982,
        OrderDate: '2014/05/29',
        SaleAmount: 6050,
        Terms: '30 Days',
        Employee: EMPLOYEE_CLARK,
        CustomerInfo: {
            StoreState: 'Utah',
            StoreCity: SALT_LAKE_CITY
        }
    },
    {
        ID: 29,
        OrderNumber: 56272,
        OrderDate: '2014/02/06',
        SaleAmount: 15850,
        Terms: '30 Days',
        Employee: EMPLOYEE_CLARK,
        CustomerInfo: {
            StoreState: 'Utah',
            StoreCity: SALT_LAKE_CITY
        }
    },
    {
        ID: 30,
        OrderNumber: 57429,
        OrderDate: '2014/05/16',
        SaleAmount: 11050,
        Terms: '30 Days',
        Employee: EMPLOYEE_CLARK,
        CustomerInfo: {
            StoreState: 'Arizona',
            StoreCity: 'Phoenix'
        }
    },
    {
        ID: 32,
        OrderNumber: 58292,
        OrderDate: '2014/05/13',
        SaleAmount: 13500,
        Terms: '15 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'California',
            StoreCity: STORE_CITY
        }
    },
    {
        ID: 36,
        OrderNumber: 62427,
        OrderDate: '2014/01/27',
        SaleAmount: 23500,
        Terms: '15 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'Nevada',
            StoreCity: 'Las Vegas'
        }
    },
    {
        ID: 39,
        OrderNumber: 65977,
        OrderDate: '2014/02/05',
        SaleAmount: 2550,
        Terms: '15 Days',
        Employee: EMPLOYEE_TODD,
        CustomerInfo: {
            StoreState: 'Wyoming',
            StoreCity: 'Casper'
        }
    },
    {
        ID: 40,
        OrderNumber: 66947,
        OrderDate: '2014/03/23',
        SaleAmount: 3500,
        Terms: '15 Days',
        Employee: EMPLOYEE_CLARK,
        CustomerInfo: {
            StoreState: 'Utah',
            StoreCity: SALT_LAKE_CITY
        }
    },
    {
        ID: 42,
        OrderNumber: 68428,
        OrderDate: ORDER_DATE,
        SaleAmount: 10500,
        Terms: '15 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'California',
            StoreCity: STORE_CITY
        }
    },
    {
        ID: 43,
        OrderNumber: 69477,
        OrderDate: '2014/03/09',
        SaleAmount: 14200,
        Terms: '15 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'California',
            StoreCity: 'Anaheim'
        }
    },
    {
        ID: 46,
        OrderNumber: 72947,
        OrderDate: '2014/01/14',
        SaleAmount: 13350,
        Terms: '30 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'Nevada',
            StoreCity: 'Las Vegas'
        }
    },
    {
        ID: 47,
        OrderNumber: 73088,
        OrderDate: '2014/03/25',
        SaleAmount: 8600,
        Terms: '30 Days',
        Employee: EMPLOYEE_CLARK,
        CustomerInfo: {
            StoreState: 'Nevada',
            StoreCity: 'Reno'
        }
    },
    {
        ID: 50,
        OrderNumber: 76927,
        OrderDate: '2014/04/27',
        SaleAmount: 9800,
        Terms: '30 Days',
        Employee: EMPLOYEE_CLARK,
        CustomerInfo: {
            StoreState: 'Utah',
            StoreCity: SALT_LAKE_CITY
        }
    },
    {
        ID: 51,
        OrderNumber: 77297,
        OrderDate: '2014/04/30',
        SaleAmount: 10850,
        Terms: '30 Days',
        Employee: EMPLOYEE_CLARK,
        CustomerInfo: {
            StoreState: 'Arizona',
            StoreCity: 'Phoenix'
        }
    },
    {
        ID: 56,
        OrderNumber: 84744,
        OrderDate: '2014/02/10',
        SaleAmount: 4650,
        Terms: '30 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'Nevada',
            StoreCity: 'Las Vegas'
        }
    },
    {
        ID: 57,
        OrderNumber: 85028,
        OrderDate: '2014/05/17',
        SaleAmount: 2575,
        Terms: '30 Days',
        Employee: EMPLOYEE_CLARK,
        CustomerInfo: {
            StoreState: 'Nevada',
            StoreCity: 'Reno'
        }
    },
    {
        ID: 59,
        OrderNumber: 87297,
        OrderDate: '2014/04/21',
        SaleAmount: 14200,
        Terms: '30 Days',
        Employee: EMPLOYEE_TODD,
        CustomerInfo: {
            StoreState: 'Wyoming',
            StoreCity: 'Casper'
        }
    },
    {
        ID: 60,
        OrderNumber: 88027,
        OrderDate: '2014/02/14',
        SaleAmount: 13650,
        Terms: '30 Days',
        Employee: EMPLOYEE_CLARK,
        CustomerInfo: {
            StoreState: 'Utah',
            StoreCity: SALT_LAKE_CITY
        }
    },
    {
        ID: 65,
        OrderNumber: 94726,
        OrderDate: '2014/05/22',
        SaleAmount: 20500,
        Terms: '15 Days',
        Employee: EMPLOYEE_JIM,
        CustomerInfo: {
            StoreState: 'California',
            StoreCity: 'San Jose'
        }
    },
    {
        ID: 66,
        OrderNumber: 95266,
        OrderDate: '2014/03/10',
        SaleAmount: 9050,
        Terms: '15 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'Nevada',
            StoreCity: 'Las Vegas'
        }
    },
    {
        ID: 69,
        OrderNumber: 98477,
        OrderDate: '2014/01/01',
        SaleAmount: 23500,
        Terms: '15 Days',
        Employee: EMPLOYEE_TODD,
        CustomerInfo: {
            StoreState: 'Wyoming',
            StoreCity: 'Casper'
        }
    },
    {
        ID: 70,
        OrderNumber: 99247,
        OrderDate: '2014/02/08',
        SaleAmount: 2100,
        Terms: '15 Days',
        Employee: EMPLOYEE_CLARK,
        CustomerInfo: {
            StoreState: 'Utah',
            StoreCity: SALT_LAKE_CITY
        }
    },
    {
        ID: 78,
        OrderNumber: 174884,
        OrderDate: ORDER_DATE,
        SaleAmount: 7200,
        Terms: '30 Days',
        Employee: EMPLOYEE_TODD,
        CustomerInfo: {
            StoreState: 'Colorado',
            StoreCity: 'Denver'
        }
    },
    {
        ID: 81,
        OrderNumber: 188877,
        OrderDate: '2014/02/11',
        SaleAmount: 8750,
        Terms: '30 Days',
        Employee: EMPLOYEE_CLARK,
        CustomerInfo: {
            StoreState: 'Arizona',
            StoreCity: 'Phoenix'
        }
    },
    {
        ID: 82,
        OrderNumber: 191883,
        OrderDate: '2014/02/05',
        SaleAmount: 9900,
        Terms: '30 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'California',
            StoreCity: STORE_CITY
        }
    },
    {
        ID: 83,
        OrderNumber: 192474,
        OrderDate: '2014/01/21',
        SaleAmount: 12800,
        Terms: '30 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'California',
            StoreCity: 'Anaheim'
        }
    },
    {
        ID: 84,
        OrderNumber: 193847,
        OrderDate: '2014/03/21',
        SaleAmount: 14100,
        Terms: '30 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'California',
            StoreCity: 'San Diego'
        }
    },
    {
        ID: 85,
        OrderNumber: 194877,
        OrderDate: '2014/03/06',
        SaleAmount: 4750,
        Terms: '30 Days',
        Employee: EMPLOYEE_JIM,
        CustomerInfo: {
            StoreState: 'California',
            StoreCity: 'San Jose'
        }
    },
    {
        ID: 86,
        OrderNumber: 195746,
        OrderDate: '2014/05/26',
        SaleAmount: 9050,
        Terms: '30 Days',
        Employee: 'Harv Mudd',
        CustomerInfo: {
            StoreState: 'Nevada',
            StoreCity: 'Las Vegas'
        }
    },
    {
        ID: 87,
        OrderNumber: 197474,
        OrderDate: '2014/03/02',
        SaleAmount: 6400,
        Terms: '30 Days',
        Employee: EMPLOYEE_CLARK,
        CustomerInfo: {
            StoreState: 'Nevada',
            StoreCity: 'Reno'
        }
    },
    {
        ID: 88,
        OrderNumber: 198746,
        OrderDate: '2014/05/09',
        SaleAmount: 15700,
        Terms: '30 Days',
        Employee: EMPLOYEE_TODD,
        CustomerInfo: {
            StoreState: 'Colorado',
            StoreCity: 'Denver'
        }
    },
    {
        ID: 91,
        OrderNumber: 214222,
        OrderDate: '2014/02/08',
        SaleAmount: 11050,
        Terms: '30 Days',
        Employee: EMPLOYEE_CLARK,
        CustomerInfo: {
            StoreState: 'Arizona',
            StoreCity: 'Phoenix'
        }
    }
];
class GridListService {
    getOrders() {
        return orders;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class PermissionDirective {
    renderer;
    elementRef;
    dataStore;
    fieldKey;
    permissions;
    constructor(renderer, elementRef, dataStore) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.dataStore = dataStore;
    }
    ngAfterViewInit() {
        const permissions = this.dataStore.state;
        if (permissions) {
            if (!permissions[this.fieldKey]) {
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

class SafeHtmlPipe {
    sanitized;
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SafeHtmlPipe, deps: [{ token: i1$3.DomSanitizer }], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: SafeHtmlPipe, name: "safeHtml" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SafeHtmlPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'safeHtml'
                }]
        }], ctorParameters: function () { return [{ type: i1$3.DomSanitizer }]; } });

const SELECT_ALL = 'Select-ALL';
class GridListComponent {
    router;
    auth;
    localstorage;
    storageService;
    appService;
    dynamicTabPageService;
    _storeservice;
    renderer;
    dataGrid;
    contentWrappers;
    dataList;
    dataSource;
    columns;
    narrativeData;
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
    rowSelection = new EventEmitter();
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
    httpService;
    constructor(
    // private dialog: MatDialog,
    router, auth, localstorage, storageService, appService, dynamicTabPageService, _storeservice, renderer) {
        this.router = router;
        this.auth = auth;
        this.localstorage = localstorage;
        this.storageService = storageService;
        this.appService = appService;
        this.dynamicTabPageService = dynamicTabPageService;
        this._storeservice = _storeservice;
        this.renderer = renderer;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
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
            this.loadGrid({ value: this.Organization ? this.Organization : SELECT_ALL }, false);
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
        const REGISTRATION = this.storageService.getItem('REGISTRATION');
        if (REGISTRATION) {
            this.registrationInfo = JSON.parse(REGISTRATION);
        }
        this.contentWrappers.changes.subscribe((comps) => {
            comps.forEach(wrapper => {
                this.applyLinkStyles(wrapper);
            });
        });
    }
    applyLinkStyles(wrapper) {
        const anchors = wrapper.nativeElement.querySelectorAll('a');
        anchors.forEach(anchor => {
            this.renderer.setStyle(anchor, 'color', '#0049E5');
            this.renderer.listen(anchor, 'mouseenter', () => {
                this.renderer.setStyle(anchor, 'opacity', '0.5');
            });
            this.renderer.listen(anchor, 'mouseleave', () => {
                this.renderer.setStyle(anchor, 'opacity', '1');
            });
        });
    }
    loadGrid(orgID, load = true) {
        this.Organization = orgID.value;
        if (load) {
            this.currentPage.emit(orgID.value === SELECT_ALL ? 'all' : orgID.value);
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
            load: _opts => Promise.resolve(this.dataList),
            totalCount: _opts => Promise.resolve(this.totalCount)
        });
    }
    splitGridList(orgID) {
        this.dataList = this.tempList.filter(data => data.organizationid);
        this.dataList = this.tempList.filter(data => data.organizationid === orgID.value);
        if (this.tempList && this.tempList.length && this.tempList[0].displayname && this.tempList[0].userworkinfo) {
            this.dataList = this.tempList.filter(data => data.userworkinfo && data.userworkinfo[0] && data.userworkinfo[0].organizationid);
            this.dataList = this.tempList.filter(data => data.userworkinfo && data.userworkinfo[0] && data.userworkinfo[0].organizationid === orgID.value);
        }
        if (SELECT_ALL === orgID.value) {
            this.dataList = this.tempList;
        }
    }
    getRouter(data) {
        this.routeTo.emit(data);
    }
    navigateLink(event, rowData) {
        // const modal = {
        //   selectedRowsData: [rowData.data]
        // };
        // this.onSelectionChanged(modal);
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
            this.appService.addValue('CurrentPages', mainMenuWithUrl);
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
                this.appService.addValue('dynamicPages', mainMenu);
                this.auth.getCurrentMenu(menus);
            }
            else {
                this.appService.addValue('currentPages', mainMenu);
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
        if (isNumberCheck) {
            this.appService.addValue('dynamicPages', menus[menuIndex]);
            this.auth.getCurrentMenu(menus);
        }
        else {
            this.appService.addValue('currentPages', menus[menuIndex]);
            this.auth.getCurrentMenu(menus);
        }
    }
    extractID(url) {
        const parts = url.split("/");
        const lastIndex = parts.length - 1;
        return parts[lastIndex];
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
    onSelectionChanged(evt) {
        this.rowSelection.emit(evt);
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
    getOrgList() {
        this.httpService.get('/platform/page-designer/page/organization/all').subscribe((data) => {
            if (data.data && data.data.length) {
                this.orgList = data.data.sort((a, b) => a.organizationname?.localeCompare(b.organizationname));
            }
            else {
                this.orgList = [];
            }
        });
    }
    onRowPrepared(e) {
        if (e.rowType === 'data') {
            e.columns.forEach((column, index) => {
                if (column.caption === 'ID') {
                    e.rowElement.cells[index].classList.add('message-new');
                }
            });
            if (e.data.isnew) {
                const element = e.rowElement;
                element.classList.add('isnew');
                e.columns.forEach((column, index) => {
                    if (column.caption === 'ID') {
                        e.rowElement.cells[index].classList.add('new-icon');
                    }
                });
            }
        }
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
    isEnable(grid, record) {
        if (grid.version && record.isEnable) {
            return true;
        }
        else {
            return false;
        }
    }
    closeNarrativePopup() { }
    check(event, url) { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListComponent, deps: [{ token: i1.Router }, { token: AuthService }, { token: LocalService }, { token: LocalStorageService }, { token: AppService }, { token: DynamicTabPageService }, { token: DataStoreService }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: GridListComponent, selector: "app-grid-list", inputs: { dataList: "dataList", dataSource: "dataSource", columns: "columns", updateGrid: "updateGrid", totalCount: "totalCount", page: "page", isShow: "isShow", exportPageName: "exportPageName" }, outputs: { currentPage: "currentPage", editTableRow: "editTableRow", viewTableRow: "viewTableRow", deleteTableRow: "deleteTableRow", openExternalLink: "openExternalLink", openpopupLink: "openpopupLink", routeTo: "routeTo", openPopup: "openPopup", sortOrder: "sortOrder", filterSearchValue: "filterSearchValue", filterBuilderPopup: "filterBuilderPopup", filterPanel: "filterPanel", multipleFilterValues: "multipleFilterValues", downloadTableRow: "downloadTableRow", rowSelection: "rowSelection", toggleRow: "toggleRow", duplicateRow: "duplicateRow", viewVersions: "viewVersions", activateVersion: "activateVersion", activatePage: "activatePage", deactivatePage: "deactivatePage", duplicatePageVersion: "duplicatePageVersion", selectedRowsData: "selectedRowsData" }, providers: [GridListService], viewQueries: [{ propertyName: "dataGrid", first: true, predicate: DxDataGridComponent, descendants: true }, { propertyName: "contentWrappers", predicate: ["contentWrapper"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <p class=\"org-title\" *ngIf=\"user && user.role && auth.isAdmin() && this.isShow\">Organization Name</p>\r\n    <mat-form-field class=\"w-100\" *ngIf=\"auth.isAdmin() && this.isShow\" appearance=\"outline\">\r\n      <mat-select placeholder=\"Organization\" [(ngModel)]=\"Organization\" (selectionChange)=\"loadGrid($event)\">\r\n        <mat-option value=\"Select-ALL\"> Select-ALL</mat-option>\r\n        <mat-option *ngFor=\"let org of orgList\" value=\"{{ org.id }}\"> {{ org.organizationname }}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12 px-0\">\r\n    <h4 class=\"landing-title\">{{activepagename}}</h4>\r\n    <div class=\"main-card card\">\r\n      <div class=\"card-body\">\r\n        <dx-data-grid\r\n          id=\"gridContainer\"\r\n          [dataSource]=\"customStore\"\r\n          [allowColumnReordering]=\"true\"\r\n          [allowColumnResizing]=\"true\"\r\n          [columnAutoWidth]=\"true\"\r\n          [columnMinWidth]=\"100\" \r\n          [width]=\"'100%'\"\r\n          [columnResizingMode]=\"'widget'\"\r\n          [showBorders]=\"true\"\r\n          [rowAlternationEnabled]=\"true\"\r\n          [showColumnLines]=\"true\"\r\n          [showRowLines]=\"false\"\r\n          [filterValue]=\"filterValue\"\r\n          (onSelectionChanged)=\"onSelectionChanged($event)\"\r\n          (onRowPrepared)=\"onRowPrepared($event)\"\r\n          (onCellPrepared)=\"onCellPrepared($event)\"\r\n          (onExporting)=\"onExporting($event)\"\r\n          [remoteOperations]=\"{ filtering: true, sorting: true, paging: true }\"\r\n          #dataGrid>\r\n          <dxo-load-panel [enabled]=\"false\"></dxo-load-panel>\r\n          <dxo-export [enabled]=\"true\" [formats]=\"['pdf', 'xlsx']\"></dxo-export>\r\n          <dxo-filter-panel [visible]=\"false\"></dxo-filter-panel>\r\n          <dxo-paging [pageSize]=\"10\"></dxo-paging>\r\n          <dxo-pager\r\n            [visible]=\"true\"\r\n            [allowedPageSizes]=\"[5, 10, 15, 20]\"\r\n            [displayMode]=\"displayMode\"\r\n            [showPageSizeSelector]=\"true\"\r\n            [showInfo]=\"true\"\r\n            [showNavigationButtons]=\"true\"></dxo-pager>\r\n          <!--end pagination-->\r\n          <dxo-filter-builder [customOperations]=\"customOperations\"> </dxo-filter-builder>\r\n          <dxo-filter-builder-popup [position]=\"popupPosition\"> </dxo-filter-builder-popup>\r\n          <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n          <dxo-header-filter [visible]=\"true\"></dxo-header-filter>\r\n          <dxo-selection mode=\"single\" *ngIf=\"updateGrid?.rowSelection\"></dxo-selection>\r\n          <ng-container *ngFor=\"let column of columns; let i = index\">\r\n            <ng-container *ngIf=\"column.hide !== true\">\r\n              <ng-container *ngIf=\"column.link; else noLink\">\r\n                <dxi-column [dataField]=\"column.columnDef\" [caption]=\"column.header\" [allowFiltering]=\"column.filter\"\r\n                  cellTemplate=\"cellTemplate\"></dxi-column>\r\n              </ng-container>\r\n              <ng-template #noLink>\r\n                <ng-container *ngIf=\"column.icon; else noIcon\">\r\n                  <dxi-column [dataField]=\"column.columnDef\" [caption]=\"column.header\" [allowFiltering]=\"column.filter\"\r\n                    cellTemplate=\"iconTemplate\"></dxi-column>\r\n                </ng-container>\r\n              </ng-template>\r\n              <ng-template #noIcon>\r\n                <ng-container *ngIf=\"column.dateFormat; else noDate\">\r\n                  <dxi-column *ngIf=\"column.dateFormat === 'date' || column.dateFormat === 'datetime'\"\r\n                    [dataField]=\"column.columnDef\" [caption]=\"column.header\" [allowFiltering]=\"column.filter\"\r\n                    dataType=\"datetime\" [format]=\"getDateFormat(column.dateFormat)\">\r\n                  </dxi-column>\r\n                </ng-container>\r\n              </ng-template>\r\n              <ng-template #noDate>\r\n                <dxi-column [dataField]=\"column.columnDef\" [caption]=\"column.header\" [allowFiltering]=\"column.filter\">\r\n                </dxi-column>\r\n              </ng-template>\r\n            </ng-container>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"\r\n              updateGrid &&\r\n              (updateGrid?.externalLink ||\r\n                updateGrid?.openPopup ||\r\n                updateGrid?.edit ||\r\n                updateGrid?.delete ||\r\n                updateGrid?.delete ||\r\n                updateGrid?.download ||\r\n                updateGrid?.activatePage ||\r\n                updateGrid?.deactivatePage)\">\r\n            <dxi-column [width]=\"120\" [allowFiltering]=\"false\" [allowSorting]=\"false\" caption=\"Action\"\r\n              cellTemplate=\"editCellTemplate\"></dxi-column>\r\n            <div class=\"action-icons\" *dxTemplate=\"let d of 'editCellTemplate'\">\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.externalLink\" class=\"no-bg\" matTooltip=\"Open\"\r\n                (click)=\"openLink(d)\">\r\n                <em class=\"fa fa-external-link\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.openPopup\" class=\"no-bg\" matTooltip=\"Open\"\r\n                (click)=\"openPopupLink(d)\">\r\n                <em class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.download\" class=\"no-bg\" matTooltip=\"Download\"\r\n                (click)=\"downloadData(d)\">\r\n                <em class=\"fa fa-download\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.edit && showVersions && !d.data.published\"\r\n                class=\"no-bg mr-2\" matTooltip=\"Edit\" (click)=\"editData(d)\">\r\n                <em class=\"fa fa-pencil\" aria-hidden=\"true\"><span class=\"sr-only\">Edit</span></em>\r\n                <span class=\"sr-only\">View</span>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.editRecord\" class=\"no-bg mr-2\" matTooltip=\"Edit\"\r\n                (click)=\"editData(d)\">\r\n                <em class=\"fa fa-pencil\" aria-hidden=\"true\"><span class=\"sr-only\">Edit</span></em>\r\n                <span class=\"sr-only\">View</span>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.duplicate && !showVersions\" class=\"no-bg mr-2\"\r\n                matTooltip=\"Copy\" (click)=\"duplicateDate(d)\">\r\n                <em class=\"fa fa-copy\" aria-hidden=\"true\" fieldKey=\"PAG_DES_GRID_LIST_COPY\">\r\n                  <span class=\"sr-only\">Copy</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.duplicate && showVersions\" class=\"no-bg mr-2\"\r\n                matTooltip=\"Copy Version\" (click)=\"duplicateVersion(d)\">\r\n                <em class=\"fa fa-copy\" *showField=\"'PAG_DES_GRID_LIST_VERSION'\" aria-hidden=\"true\"><span\r\n                    class=\"sr-only\">Copy Version</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"!d.data.ribbonconfig && updateGrid?.view && showVersions\" class=\"no-bg mr-2\" matTooltip=\"View\"\r\n                fieldKey=\"PAG_DES_GRID_LIST_VERSION\" (click)=\"viewData(d)\">\r\n                <em class=\"fa fa-eye\" aria-hidden=\"true\"><span class=\"sr-only\">View</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.viewRecord\" class=\"no-bg mr-2\" matTooltip=\"View\"\r\n                (click)=\"viewData(d)\">\r\n                <em class=\"fa fa-eye\" aria-hidden=\"true\"><span class=\"sr-only\">View</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.emailview && showVersions\" class=\"no-bg mr-2\"\r\n                matTooltip=\"Preview\" (click)=\"viewData(d)\">\r\n                <em class=\"fa fa-eye\" aria-hidden=\"true\"><span class=\"sr-only\">View</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" title=\"view\"\r\n                *ngIf=\"updateGrid?.version && !showVersions && islocked(updateGrid, d.data) && isEnable(updateGrid, d.data)\" class=\"no-bg\"\r\n                matTooltip=\"Versions\" (click)=\"viewVersion(d)\">\r\n                <em class=\"fa fa-code-fork\" title=\"View\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"!d.data.isEnable && updateGrid?.activatePage\" class=\"no-bg ml-2\"\r\n                matTooltip=\"Activate\" (click)=\"activatePages(d)\">\r\n                <span class=\"material-symbols-outlined activate\">check</span>\r\n              </a>\r\n\r\n              <a href=\"javascript:void(0)\" *ngIf=\"d.data.isEnable && updateGrid?.deactivatePage\" class=\"no-bg ml-2\"\r\n                matTooltip=\"Deactivate\" (click)=\"deactivatePages(d)\">\r\n                <span class=\"material-symbols-outlined deactivate\">close</span>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"showVersions && !d.data.isactive && d.data.published\"\r\n                class=\"no-bg mr-2\" matTooltip=\"Activate\" (click)=\"activatePageVersion(d)\">\r\n                <em class=\"fa fa-check-circle-o\" *showField=\"'PAG_DES_GRID_LIST_ACTIVATE'\" aria-hidden=\"true\"><span\r\n                    class=\"sr-only\">Activate</span></em>\r\n                <span class=\"sr-only\">View</span>\r\n              </a>\r\n              <span *ngIf=\"showVersions && !d.data.isactive && !d.data.published\" class=\"no-bg mr-2\"\r\n                matTooltip=\"This version is not published\">\r\n                <em class=\"fa fa-exclamation-triangle text-warning\" aria-hidden=\"true\">\r\n                  <span class=\"sr-only\">This version is not published</span>\r\n                </em>\r\n                <span class=\"sr-only\">View</span>\r\n              </span>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.lock && d.data.locked\" (click)=\"check(updateGrid, d)\"\r\n                class=\"no-bg ml-2\" matTooltip=\"Locked By - {{ d?.data?.lockedbyUser?.firstname }}\">\r\n                <em *ngIf=\"updateGrid?.lock && d.data.locked\" class=\"fa fa-lock\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.delete\" class=\"no-bg\" matTooltip=\"Delete\"\r\n                (click)=\"deleteData(d)\">\r\n                <em class=\"fa fa-trash\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.toggle\" class=\"no-bg\"\r\n                [matTooltip]=\"d.data.isactive === true ? 'Deactivate' : 'Activate'\" (click)=\"activeUser(d)\">\r\n                <em *ngIf=\"updateGrid?.toggle && d.data.isactive === true\" class=\"fa fa-toggle-on\"></em>\r\n                <em *ngIf=\"updateGrid?.toggle && d.data.isactive === false\" class=\"fa fa-toggle-off\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.activeordeactive\" class=\"no-bg\" (click)=\"deleteData(d)\">\r\n                <em *ngIf=\"updateGrid?.activeordeactive && d.data.activeflag === 1\" class=\"fa fa-toggle-on\"></em>\r\n                <em *ngIf=\"updateGrid?.activeordeactive && d.data.activeflag === 0\" class=\"fa fa-toggle-off\"></em>\r\n              </a>\r\n            </div>\r\n          </ng-container>\r\n\r\n          <div *dxTemplate=\"let d of 'cellTemplate'\">\r\n            <span href=\"javascript:void(0)\" *ngIf=\"d.value && d.value !== 'null'\" (click)=\"getRouter(d)\">{{\r\n              d.value !== 'null' ? d.value : ''\r\n              }}</span>\r\n          </div>\r\n          <ng-container *ngIf=\"updateGrid.linkVisible\">\r\n            <div *dxTemplate=\"let d of 'cellTemplate'\"(click)=\"navigateLink($event, d)\">\r\n              <span *ngIf=\"d.value && d.value !== 'null'\" #contentWrapper [innerHTML]=\"d.value | safeHtml\">{{\r\n                d.value !== 'null' ? d.value : ''\r\n              }}</span>\r\n            </div>\r\n          </ng-container>\r\n          <div *dxTemplate=\"let d of 'iconTemplate'\">\r\n            <em class=\"fa fa-book\" (click)=\"popup(d.value)\"></em>\r\n          </div>\r\n        </dx-data-grid>\r\n\r\n        <ng-template #callNarrativePopup>\r\n          <h2 matDialogTitle>Narrative</h2>\r\n          <div [innerHTML]=\"narrativeData\"></div>\r\n          <div class=\"text-right\">\r\n            <button mat-button (click)=\"closeNarrativePopup()\" role=\"button\" class=\"btn btn-cancel mr-2\">Close</button>\r\n          </div>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".split-page{outline:3px;margin:5px}.searchlist{min-width:620px!important;height:280px!important}.searchlist table,.searchlist table tr th,.searchlist table tr td{padding:0}.dx-datagrid .dx-data-row>td.bullet{padding-top:0;padding-bottom:0}.dx-datagrid .dx-row>tr>td{padding:0!important}.dx-datagrid .dx-row>td{padding:1px 5px!important;vertical-align:middle!important;text-align:center!important}.org-title{margin:0;font-size:12px!important;color:var(--primary)}:host ::ng-deep .card .card-body{padding:0 15px}:host ::ng-deep .dx-datagrid .dx-toolbar-after{margin-right:5px;margin-top:5px}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content{padding:5px 6px;border-radius:3px;color:var(--hover-text);background-color:var(--btn)}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content .dx-icon-export{color:var(--hover-text)}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content .dx-icon-spindown{color:var(--hover-text)}.action-icons .activate,.action-icons .deactivate{font-size:20px;line-height:normal;position:relative;top:5px;border-radius:30px;width:12px;display:inline-flex;align-items:center;justify-content:center;height:12px;font-weight:400}.landing-title{color:var(--header-color);font-weight:700;font-size:var(--font-14);position:absolute;left:15px;z-index:99;top:12px;margin:0}:host ::ng-deep .dx-data-row.isnew td{font-size:15px!important;font-weight:600!important;position:relative}:host ::ng-deep .dx-data-row td.message-new{position:relative;padding-left:20px}:host ::ng-deep .dx-data-row td.new-icon:before{content:\"\\f111\";font-family:FontAwesome,sans-serif;font-size:8px;color:#dc0404;position:absolute;top:50%;left:5px;transform:translateY(-50%);margin-right:5px}\n"], dependencies: [{ kind: "directive", type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i7$1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i11.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "component", type: i11$1.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "panelWidth", "hideSingleSelectionIndicator"], exportAs: ["matSelect"] }, { kind: "component", type: i12$1.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i13.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: i3.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "component", type: i15.DxDataGridComponent, selector: "dx-data-grid", inputs: ["accessKey", "activeStateEnabled", "allowColumnReordering", "allowColumnResizing", "autoNavigateToFocusedRow", "cacheEnabled", "cellHintEnabled", "columnAutoWidth", "columnChooser", "columnFixing", "columnHidingEnabled", "columnMinWidth", "columnResizingMode", "columns", "columnWidth", "customizeColumns", "dataRowTemplate", "dataSource", "dateSerializationFormat", "disabled", "editing", "elementAttr", "errorRowEnabled", "export", "filterBuilder", "filterBuilderPopup", "filterPanel", "filterRow", "filterSyncEnabled", "filterValue", "focusedColumnIndex", "focusedRowEnabled", "focusedRowIndex", "focusedRowKey", "grouping", "groupPanel", "headerFilter", "height", "highlightChanges", "hint", "hoverStateEnabled", "keyboardNavigation", "keyExpr", "loadPanel", "masterDetail", "noDataText", "pager", "paging", "remoteOperations", "renderAsync", "repaintChangesOnly", "rowAlternationEnabled", "rowDragging", "rowTemplate", "rtlEnabled", "scrolling", "searchPanel", "selectedRowKeys", "selection", "selectionFilter", "showBorders", "showColumnHeaders", "showColumnLines", "showRowLines", "sortByGroupSummaryInfo", "sorting", "stateStoring", "summary", "syncLookupFilterValues", "tabIndex", "toolbar", "twoWayBindingEnabled", "visible", "width", "wordWrapEnabled"], outputs: ["onAdaptiveDetailRowPreparing", "onCellClick", "onCellDblClick", "onCellHoverChanged", "onCellPrepared", "onContentReady", "onContextMenuPreparing", "onDataErrorOccurred", "onDisposing", "onEditCanceled", "onEditCanceling", "onEditingStart", "onEditorPrepared", "onEditorPreparing", "onExporting", "onFocusedCellChanged", "onFocusedCellChanging", "onFocusedRowChanged", "onFocusedRowChanging", "onInitialized", "onInitNewRow", "onKeyDown", "onOptionChanged", "onRowClick", "onRowCollapsed", "onRowCollapsing", "onRowDblClick", "onRowExpanded", "onRowExpanding", "onRowInserted", "onRowInserting", "onRowPrepared", "onRowRemoved", "onRowRemoving", "onRowUpdated", "onRowUpdating", "onRowValidating", "onSaved", "onSaving", "onSelectionChanged", "onToolbarPreparing", "accessKeyChange", "activeStateEnabledChange", "allowColumnReorderingChange", "allowColumnResizingChange", "autoNavigateToFocusedRowChange", "cacheEnabledChange", "cellHintEnabledChange", "columnAutoWidthChange", "columnChooserChange", "columnFixingChange", "columnHidingEnabledChange", "columnMinWidthChange", "columnResizingModeChange", "columnsChange", "columnWidthChange", "customizeColumnsChange", "dataRowTemplateChange", "dataSourceChange", "dateSerializationFormatChange", "disabledChange", "editingChange", "elementAttrChange", "errorRowEnabledChange", "exportChange", "filterBuilderChange", "filterBuilderPopupChange", "filterPanelChange", "filterRowChange", "filterSyncEnabledChange", "filterValueChange", "focusedColumnIndexChange", "focusedRowEnabledChange", "focusedRowIndexChange", "focusedRowKeyChange", "groupingChange", "groupPanelChange", "headerFilterChange", "heightChange", "highlightChangesChange", "hintChange", "hoverStateEnabledChange", "keyboardNavigationChange", "keyExprChange", "loadPanelChange", "masterDetailChange", "noDataTextChange", "pagerChange", "pagingChange", "remoteOperationsChange", "renderAsyncChange", "repaintChangesOnlyChange", "rowAlternationEnabledChange", "rowDraggingChange", "rowTemplateChange", "rtlEnabledChange", "scrollingChange", "searchPanelChange", "selectedRowKeysChange", "selectionChange", "selectionFilterChange", "showBordersChange", "showColumnHeadersChange", "showColumnLinesChange", "showRowLinesChange", "sortByGroupSummaryInfoChange", "sortingChange", "stateStoringChange", "summaryChange", "syncLookupFilterValuesChange", "tabIndexChange", "toolbarChange", "twoWayBindingEnabledChange", "visibleChange", "widthChange", "wordWrapEnabledChange"] }, { kind: "component", type: i16.DxoSelectionComponent, selector: "dxo-selection", inputs: ["allowSelectAll", "recursive", "selectByClick", "deferred", "mode", "selectAllMode", "showCheckBoxesMode"] }, { kind: "component", type: i16.DxiColumnComponent, selector: "dxi-column", inputs: ["alignment", "allowEditing", "allowExporting", "allowFiltering", "allowFixing", "allowGrouping", "allowHeaderFiltering", "allowHiding", "allowReordering", "allowResizing", "allowSearch", "allowSorting", "autoExpandGroup", "buttons", "calculateCellValue", "calculateDisplayValue", "calculateFilterExpression", "calculateGroupValue", "calculateSortValue", "caption", "cellTemplate", "columns", "cssClass", "customizeText", "dataField", "dataType", "editCellTemplate", "editorOptions", "encodeHtml", "falseText", "filterOperations", "filterType", "filterValue", "filterValues", "fixed", "fixedPosition", "format", "formItem", "groupCellTemplate", "groupIndex", "headerCellTemplate", "headerFilter", "hidingPriority", "isBand", "lookup", "minWidth", "name", "ownerBand", "renderAsync", "selectedFilterOperation", "setCellValue", "showEditorAlways", "showInColumnChooser", "showWhenGrouped", "sortIndex", "sortingMethod", "sortOrder", "trueText", "type", "validationRules", "visible", "visibleIndex", "width"], outputs: ["filterValueChange", "filterValuesChange", "groupIndexChange", "selectedFilterOperationChange", "sortIndexChange", "sortOrderChange", "visibleChange", "visibleIndexChange"] }, { kind: "component", type: i16.DxoHeaderFilterComponent, selector: "dxo-header-filter", inputs: ["allowSearch", "allowSelectAll", "dataSource", "groupInterval", "height", "search", "searchMode", "width", "searchTimeout", "texts", "visible", "showRelevantValues"] }, { kind: "component", type: i16.DxoExportComponent, selector: "dxo-export", inputs: ["backgroundColor", "enabled", "fileName", "formats", "margin", "printingEnabled", "svgToCanvas", "allowExportSelectedData", "texts"] }, { kind: "component", type: i16.DxoFilterBuilderComponent, selector: "dxo-filter-builder", inputs: ["accessKey", "activeStateEnabled", "allowHierarchicalFields", "customOperations", "disabled", "elementAttr", "fields", "filterOperationDescriptions", "focusStateEnabled", "groupOperationDescriptions", "groupOperations", "height", "hint", "hoverStateEnabled", "maxGroupLevel", "onContentReady", "onDisposing", "onEditorPrepared", "onEditorPreparing", "onInitialized", "onOptionChanged", "onValueChanged", "rtlEnabled", "tabIndex", "value", "visible", "width"], outputs: ["valueChange"] }, { kind: "component", type: i16.DxoFilterBuilderPopupComponent, selector: "dxo-filter-builder-popup", inputs: ["accessKey", "animation", "closeOnOutsideClick", "container", "contentTemplate", "copyRootClassesToWrapper", "deferRendering", "disabled", "dragAndResizeArea", "dragEnabled", "dragOutsideBoundary", "elementAttr", "enableBodyScroll", "focusStateEnabled", "fullScreen", "height", "hideOnOutsideClick", "hideOnParentScroll", "hint", "hoverStateEnabled", "maxHeight", "maxWidth", "minHeight", "minWidth", "onContentReady", "onDisposing", "onHidden", "onHiding", "onInitialized", "onOptionChanged", "onResize", "onResizeEnd", "onResizeStart", "onShowing", "onShown", "onTitleRendered", "position", "resizeEnabled", "restorePosition", "rtlEnabled", "shading", "shadingColor", "showCloseButton", "showTitle", "tabIndex", "title", "titleTemplate", "toolbarItems", "visible", "width", "wrapperAttr"], outputs: ["heightChange", "positionChange", "visibleChange", "widthChange"] }, { kind: "component", type: i16.DxoFilterPanelComponent, selector: "dxo-filter-panel", inputs: ["customizeText", "filterEnabled", "texts", "visible"], outputs: ["filterEnabledChange"] }, { kind: "component", type: i16.DxoFilterRowComponent, selector: "dxo-filter-row", inputs: ["applyFilter", "applyFilterText", "betweenEndText", "betweenStartText", "operationDescriptions", "resetOperationText", "showAllText", "showOperationChooser", "visible"] }, { kind: "component", type: i16.DxoLoadPanelComponent, selector: "dxo-load-panel", inputs: ["enabled", "height", "indicatorSrc", "shading", "shadingColor", "showIndicator", "showPane", "text", "width"] }, { kind: "component", type: i16.DxoPagerComponent, selector: "dxo-pager", inputs: ["allowedPageSizes", "displayMode", "infoText", "label", "showInfo", "showNavigationButtons", "showPageSizeSelector", "visible"] }, { kind: "component", type: i16.DxoPagingComponent, selector: "dxo-paging", inputs: ["enabled", "pageIndex", "pageSize"], outputs: ["pageIndexChange", "pageSizeChange"] }, { kind: "directive", type: i17.DxTemplateDirective, selector: "[dxTemplate]", inputs: ["dxTemplateOf"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }, { kind: "directive", type: ShowFieldDirective, selector: "[showField]", inputs: ["showField"] }, { kind: "pipe", type: SafeHtmlPipe, name: "safeHtml" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-grid-list', providers: [GridListService], template: "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <p class=\"org-title\" *ngIf=\"user && user.role && auth.isAdmin() && this.isShow\">Organization Name</p>\r\n    <mat-form-field class=\"w-100\" *ngIf=\"auth.isAdmin() && this.isShow\" appearance=\"outline\">\r\n      <mat-select placeholder=\"Organization\" [(ngModel)]=\"Organization\" (selectionChange)=\"loadGrid($event)\">\r\n        <mat-option value=\"Select-ALL\"> Select-ALL</mat-option>\r\n        <mat-option *ngFor=\"let org of orgList\" value=\"{{ org.id }}\"> {{ org.organizationname }}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12 px-0\">\r\n    <h4 class=\"landing-title\">{{activepagename}}</h4>\r\n    <div class=\"main-card card\">\r\n      <div class=\"card-body\">\r\n        <dx-data-grid\r\n          id=\"gridContainer\"\r\n          [dataSource]=\"customStore\"\r\n          [allowColumnReordering]=\"true\"\r\n          [allowColumnResizing]=\"true\"\r\n          [columnAutoWidth]=\"true\"\r\n          [columnMinWidth]=\"100\" \r\n          [width]=\"'100%'\"\r\n          [columnResizingMode]=\"'widget'\"\r\n          [showBorders]=\"true\"\r\n          [rowAlternationEnabled]=\"true\"\r\n          [showColumnLines]=\"true\"\r\n          [showRowLines]=\"false\"\r\n          [filterValue]=\"filterValue\"\r\n          (onSelectionChanged)=\"onSelectionChanged($event)\"\r\n          (onRowPrepared)=\"onRowPrepared($event)\"\r\n          (onCellPrepared)=\"onCellPrepared($event)\"\r\n          (onExporting)=\"onExporting($event)\"\r\n          [remoteOperations]=\"{ filtering: true, sorting: true, paging: true }\"\r\n          #dataGrid>\r\n          <dxo-load-panel [enabled]=\"false\"></dxo-load-panel>\r\n          <dxo-export [enabled]=\"true\" [formats]=\"['pdf', 'xlsx']\"></dxo-export>\r\n          <dxo-filter-panel [visible]=\"false\"></dxo-filter-panel>\r\n          <dxo-paging [pageSize]=\"10\"></dxo-paging>\r\n          <dxo-pager\r\n            [visible]=\"true\"\r\n            [allowedPageSizes]=\"[5, 10, 15, 20]\"\r\n            [displayMode]=\"displayMode\"\r\n            [showPageSizeSelector]=\"true\"\r\n            [showInfo]=\"true\"\r\n            [showNavigationButtons]=\"true\"></dxo-pager>\r\n          <!--end pagination-->\r\n          <dxo-filter-builder [customOperations]=\"customOperations\"> </dxo-filter-builder>\r\n          <dxo-filter-builder-popup [position]=\"popupPosition\"> </dxo-filter-builder-popup>\r\n          <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n          <dxo-header-filter [visible]=\"true\"></dxo-header-filter>\r\n          <dxo-selection mode=\"single\" *ngIf=\"updateGrid?.rowSelection\"></dxo-selection>\r\n          <ng-container *ngFor=\"let column of columns; let i = index\">\r\n            <ng-container *ngIf=\"column.hide !== true\">\r\n              <ng-container *ngIf=\"column.link; else noLink\">\r\n                <dxi-column [dataField]=\"column.columnDef\" [caption]=\"column.header\" [allowFiltering]=\"column.filter\"\r\n                  cellTemplate=\"cellTemplate\"></dxi-column>\r\n              </ng-container>\r\n              <ng-template #noLink>\r\n                <ng-container *ngIf=\"column.icon; else noIcon\">\r\n                  <dxi-column [dataField]=\"column.columnDef\" [caption]=\"column.header\" [allowFiltering]=\"column.filter\"\r\n                    cellTemplate=\"iconTemplate\"></dxi-column>\r\n                </ng-container>\r\n              </ng-template>\r\n              <ng-template #noIcon>\r\n                <ng-container *ngIf=\"column.dateFormat; else noDate\">\r\n                  <dxi-column *ngIf=\"column.dateFormat === 'date' || column.dateFormat === 'datetime'\"\r\n                    [dataField]=\"column.columnDef\" [caption]=\"column.header\" [allowFiltering]=\"column.filter\"\r\n                    dataType=\"datetime\" [format]=\"getDateFormat(column.dateFormat)\">\r\n                  </dxi-column>\r\n                </ng-container>\r\n              </ng-template>\r\n              <ng-template #noDate>\r\n                <dxi-column [dataField]=\"column.columnDef\" [caption]=\"column.header\" [allowFiltering]=\"column.filter\">\r\n                </dxi-column>\r\n              </ng-template>\r\n            </ng-container>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"\r\n              updateGrid &&\r\n              (updateGrid?.externalLink ||\r\n                updateGrid?.openPopup ||\r\n                updateGrid?.edit ||\r\n                updateGrid?.delete ||\r\n                updateGrid?.delete ||\r\n                updateGrid?.download ||\r\n                updateGrid?.activatePage ||\r\n                updateGrid?.deactivatePage)\">\r\n            <dxi-column [width]=\"120\" [allowFiltering]=\"false\" [allowSorting]=\"false\" caption=\"Action\"\r\n              cellTemplate=\"editCellTemplate\"></dxi-column>\r\n            <div class=\"action-icons\" *dxTemplate=\"let d of 'editCellTemplate'\">\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.externalLink\" class=\"no-bg\" matTooltip=\"Open\"\r\n                (click)=\"openLink(d)\">\r\n                <em class=\"fa fa-external-link\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.openPopup\" class=\"no-bg\" matTooltip=\"Open\"\r\n                (click)=\"openPopupLink(d)\">\r\n                <em class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.download\" class=\"no-bg\" matTooltip=\"Download\"\r\n                (click)=\"downloadData(d)\">\r\n                <em class=\"fa fa-download\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.edit && showVersions && !d.data.published\"\r\n                class=\"no-bg mr-2\" matTooltip=\"Edit\" (click)=\"editData(d)\">\r\n                <em class=\"fa fa-pencil\" aria-hidden=\"true\"><span class=\"sr-only\">Edit</span></em>\r\n                <span class=\"sr-only\">View</span>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.editRecord\" class=\"no-bg mr-2\" matTooltip=\"Edit\"\r\n                (click)=\"editData(d)\">\r\n                <em class=\"fa fa-pencil\" aria-hidden=\"true\"><span class=\"sr-only\">Edit</span></em>\r\n                <span class=\"sr-only\">View</span>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.duplicate && !showVersions\" class=\"no-bg mr-2\"\r\n                matTooltip=\"Copy\" (click)=\"duplicateDate(d)\">\r\n                <em class=\"fa fa-copy\" aria-hidden=\"true\" fieldKey=\"PAG_DES_GRID_LIST_COPY\">\r\n                  <span class=\"sr-only\">Copy</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.duplicate && showVersions\" class=\"no-bg mr-2\"\r\n                matTooltip=\"Copy Version\" (click)=\"duplicateVersion(d)\">\r\n                <em class=\"fa fa-copy\" *showField=\"'PAG_DES_GRID_LIST_VERSION'\" aria-hidden=\"true\"><span\r\n                    class=\"sr-only\">Copy Version</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"!d.data.ribbonconfig && updateGrid?.view && showVersions\" class=\"no-bg mr-2\" matTooltip=\"View\"\r\n                fieldKey=\"PAG_DES_GRID_LIST_VERSION\" (click)=\"viewData(d)\">\r\n                <em class=\"fa fa-eye\" aria-hidden=\"true\"><span class=\"sr-only\">View</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.viewRecord\" class=\"no-bg mr-2\" matTooltip=\"View\"\r\n                (click)=\"viewData(d)\">\r\n                <em class=\"fa fa-eye\" aria-hidden=\"true\"><span class=\"sr-only\">View</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.emailview && showVersions\" class=\"no-bg mr-2\"\r\n                matTooltip=\"Preview\" (click)=\"viewData(d)\">\r\n                <em class=\"fa fa-eye\" aria-hidden=\"true\"><span class=\"sr-only\">View</span></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" title=\"view\"\r\n                *ngIf=\"updateGrid?.version && !showVersions && islocked(updateGrid, d.data) && isEnable(updateGrid, d.data)\" class=\"no-bg\"\r\n                matTooltip=\"Versions\" (click)=\"viewVersion(d)\">\r\n                <em class=\"fa fa-code-fork\" title=\"View\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"!d.data.isEnable && updateGrid?.activatePage\" class=\"no-bg ml-2\"\r\n                matTooltip=\"Activate\" (click)=\"activatePages(d)\">\r\n                <span class=\"material-symbols-outlined activate\">check</span>\r\n              </a>\r\n\r\n              <a href=\"javascript:void(0)\" *ngIf=\"d.data.isEnable && updateGrid?.deactivatePage\" class=\"no-bg ml-2\"\r\n                matTooltip=\"Deactivate\" (click)=\"deactivatePages(d)\">\r\n                <span class=\"material-symbols-outlined deactivate\">close</span>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"showVersions && !d.data.isactive && d.data.published\"\r\n                class=\"no-bg mr-2\" matTooltip=\"Activate\" (click)=\"activatePageVersion(d)\">\r\n                <em class=\"fa fa-check-circle-o\" *showField=\"'PAG_DES_GRID_LIST_ACTIVATE'\" aria-hidden=\"true\"><span\r\n                    class=\"sr-only\">Activate</span></em>\r\n                <span class=\"sr-only\">View</span>\r\n              </a>\r\n              <span *ngIf=\"showVersions && !d.data.isactive && !d.data.published\" class=\"no-bg mr-2\"\r\n                matTooltip=\"This version is not published\">\r\n                <em class=\"fa fa-exclamation-triangle text-warning\" aria-hidden=\"true\">\r\n                  <span class=\"sr-only\">This version is not published</span>\r\n                </em>\r\n                <span class=\"sr-only\">View</span>\r\n              </span>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.lock && d.data.locked\" (click)=\"check(updateGrid, d)\"\r\n                class=\"no-bg ml-2\" matTooltip=\"Locked By - {{ d?.data?.lockedbyUser?.firstname }}\">\r\n                <em *ngIf=\"updateGrid?.lock && d.data.locked\" class=\"fa fa-lock\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.delete\" class=\"no-bg\" matTooltip=\"Delete\"\r\n                (click)=\"deleteData(d)\">\r\n                <em class=\"fa fa-trash\" aria-hidden=\"true\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.toggle\" class=\"no-bg\"\r\n                [matTooltip]=\"d.data.isactive === true ? 'Deactivate' : 'Activate'\" (click)=\"activeUser(d)\">\r\n                <em *ngIf=\"updateGrid?.toggle && d.data.isactive === true\" class=\"fa fa-toggle-on\"></em>\r\n                <em *ngIf=\"updateGrid?.toggle && d.data.isactive === false\" class=\"fa fa-toggle-off\"></em>\r\n              </a>\r\n              <a href=\"javascript:void(0)\" *ngIf=\"updateGrid?.activeordeactive\" class=\"no-bg\" (click)=\"deleteData(d)\">\r\n                <em *ngIf=\"updateGrid?.activeordeactive && d.data.activeflag === 1\" class=\"fa fa-toggle-on\"></em>\r\n                <em *ngIf=\"updateGrid?.activeordeactive && d.data.activeflag === 0\" class=\"fa fa-toggle-off\"></em>\r\n              </a>\r\n            </div>\r\n          </ng-container>\r\n\r\n          <div *dxTemplate=\"let d of 'cellTemplate'\">\r\n            <span href=\"javascript:void(0)\" *ngIf=\"d.value && d.value !== 'null'\" (click)=\"getRouter(d)\">{{\r\n              d.value !== 'null' ? d.value : ''\r\n              }}</span>\r\n          </div>\r\n          <ng-container *ngIf=\"updateGrid.linkVisible\">\r\n            <div *dxTemplate=\"let d of 'cellTemplate'\"(click)=\"navigateLink($event, d)\">\r\n              <span *ngIf=\"d.value && d.value !== 'null'\" #contentWrapper [innerHTML]=\"d.value | safeHtml\">{{\r\n                d.value !== 'null' ? d.value : ''\r\n              }}</span>\r\n            </div>\r\n          </ng-container>\r\n          <div *dxTemplate=\"let d of 'iconTemplate'\">\r\n            <em class=\"fa fa-book\" (click)=\"popup(d.value)\"></em>\r\n          </div>\r\n        </dx-data-grid>\r\n\r\n        <ng-template #callNarrativePopup>\r\n          <h2 matDialogTitle>Narrative</h2>\r\n          <div [innerHTML]=\"narrativeData\"></div>\r\n          <div class=\"text-right\">\r\n            <button mat-button (click)=\"closeNarrativePopup()\" role=\"button\" class=\"btn btn-cancel mr-2\">Close</button>\r\n          </div>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".split-page{outline:3px;margin:5px}.searchlist{min-width:620px!important;height:280px!important}.searchlist table,.searchlist table tr th,.searchlist table tr td{padding:0}.dx-datagrid .dx-data-row>td.bullet{padding-top:0;padding-bottom:0}.dx-datagrid .dx-row>tr>td{padding:0!important}.dx-datagrid .dx-row>td{padding:1px 5px!important;vertical-align:middle!important;text-align:center!important}.org-title{margin:0;font-size:12px!important;color:var(--primary)}:host ::ng-deep .card .card-body{padding:0 15px}:host ::ng-deep .dx-datagrid .dx-toolbar-after{margin-right:5px;margin-top:5px}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content{padding:5px 6px;border-radius:3px;color:var(--hover-text);background-color:var(--btn)}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content .dx-icon-export{color:var(--hover-text)}:host ::ng-deep .dx-datagrid .dx-toolbar-after .dx-button-content .dx-icon-spindown{color:var(--hover-text)}.action-icons .activate,.action-icons .deactivate{font-size:20px;line-height:normal;position:relative;top:5px;border-radius:30px;width:12px;display:inline-flex;align-items:center;justify-content:center;height:12px;font-weight:400}.landing-title{color:var(--header-color);font-weight:700;font-size:var(--font-14);position:absolute;left:15px;z-index:99;top:12px;margin:0}:host ::ng-deep .dx-data-row.isnew td{font-size:15px!important;font-weight:600!important;position:relative}:host ::ng-deep .dx-data-row td.message-new{position:relative;padding-left:20px}:host ::ng-deep .dx-data-row td.new-icon:before{content:\"\\f111\";font-family:FontAwesome,sans-serif;font-size:8px;color:#dc0404;position:absolute;top:50%;left:5px;transform:translateY(-50%);margin-right:5px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: AuthService }, { type: LocalService }, { type: LocalStorageService }, { type: AppService }, { type: DynamicTabPageService }, { type: DataStoreService }, { type: i0.Renderer2 }]; }, propDecorators: { dataGrid: [{
                type: ViewChild,
                args: [DxDataGridComponent, { static: false }]
            }], contentWrappers: [{
                type: ViewChildren,
                args: ['contentWrapper']
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
            }], rowSelection: [{
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
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: SharedPipesModule, declarations: [MaskPipe, FilterPipe, SafeHtmlPipe], imports: [CommonModule], exports: [MaskPipe, FilterPipe, SafeHtmlPipe] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SharedPipesModule, providers: [MaskPipe, FilterPipe, SafeHtmlPipe], imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SharedPipesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [MaskPipe, FilterPipe, SafeHtmlPipe],
                    exports: [MaskPipe, FilterPipe, SafeHtmlPipe],
                    providers: [MaskPipe, FilterPipe, SafeHtmlPipe]
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
            MaterialUIModule,
            NgxPaginationModule,
            DxDataGridModule,
            SharedPipesModule,
            FormsModule,
            ReactiveFormsModule,
            DirectivesModule,
            NgxfUploaderModule, i1$4.NgxMaskModule], exports: [GridListComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListModule, imports: [CommonModule,
            MaterialUIModule,
            NgxPaginationModule,
            DxDataGridModule,
            SharedPipesModule,
            FormsModule,
            ReactiveFormsModule,
            DirectivesModule,
            NgxfUploaderModule,
            NgxMaskModule.forRoot()] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [GridListComponent],
                    imports: [
                        CommonModule,
                        MaterialUIModule,
                        NgxPaginationModule,
                        DxDataGridModule,
                        SharedPipesModule,
                        FormsModule,
                        ReactiveFormsModule,
                        DirectivesModule,
                        NgxfUploaderModule,
                        NgxMaskModule.forRoot()
                    ],
                    exports: [GridListComponent],
                }]
        }] });

class DynamicSearchModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchModule, declarations: [DynamicSearchComponent], imports: [CommonModule,
            FormioModule,
            FormsModule,
            ReactiveFormsModule,
            MaterialUIModule,
            DxDataGridModule,
            DxSelectBoxModule,
            DxCheckBoxModule,
            DynamicSearchRoutingModule,
            GridListModule,
            // AngularSplitModule,
            DynamicModule$1,
            PrimengModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchModule, imports: [CommonModule,
            FormioModule,
            FormsModule,
            ReactiveFormsModule,
            MaterialUIModule,
            DxDataGridModule,
            DxSelectBoxModule,
            DxCheckBoxModule,
            DynamicSearchRoutingModule,
            GridListModule,
            // AngularSplitModule,
            DynamicModule$1,
            PrimengModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DynamicSearchComponent],
                    imports: [
                        CommonModule,
                        FormioModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MaterialUIModule,
                        DxDataGridModule,
                        DxSelectBoxModule,
                        DxCheckBoxModule,
                        DynamicSearchRoutingModule,
                        GridListModule,
                        // AngularSplitModule,
                        DynamicModule$1,
                        PrimengModule
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
                }]
        }] });

var dynamicSearch_module = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DynamicSearchModule: DynamicSearchModule
});

class DynamicTabComponent {
    dynamicTabPageService;
    route;
    router;
    items = [];
    pages = [];
    activeItem;
    tabPageId;
    formId;
    currentRouterLink;
    localstorage;
    navigateData;
    parentGridPage;
    destroy$ = new Subject();
    tab;
    showTabs = false;
    constructor(injector, dynamicTabPageService, route, router) {
        this.dynamicTabPageService = dynamicTabPageService;
        this.route = route;
        this.router = router;
        this.tabPageId = this.route.snapshot.paramMap.get('tabId');
        this.localstorage = injector.get(LocalService);
        this.navigateData = this.router?.getCurrentNavigation()?.extras?.state;
        if (this.tabPageId) {
            this.localstorage.setItem('tabpageid', this.tabPageId);
        }
    }
    ngOnInit() {
        this.route.params
            .pipe(filter(params => !isNaN(params['tabId'])), tap(params => (this.tabPageId = params['tabId'])), takeUntil(this.destroy$))
            .subscribe(_ => this.getDynamicTab());
        this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((_) => {
            setTimeout(() => {
                const index = this.items.findIndex((t) => t.id === this.activeItem.id);
                [...this.tab.content.nativeElement.querySelectorAll('ul li')].forEach((e) => e.classList.remove('p-highlight'));
                [...this.tab.content.nativeElement.querySelectorAll('ul li a')].forEach((e) => e.classList.remove('p-menuitem-link-active'));
                if (index > -1) {
                    this.tab.content.nativeElement.querySelector(`ul li:nth-child(${index + 1})`).classList.add('p-highlight');
                    this.tab.content.nativeElement.querySelector(`ul li:nth-child(${index + 1}) a`).classList.add('p-menuitem-link-active');
                }
            }, 200);
        });
    }
    routeToLandingPage() {
        const tabIndex = this.localstorage.getItem('tabIndex') ? this.localstorage.getItem('tabIndex') : '0';
        //Prevent Navigation failing while access to diffrent tabpages with diffrent tabindex.
        const currentRoute = this.items[Number(tabIndex)] ? this.items[Number(tabIndex)] : this.items[0];
        this.currentRouterLink = currentRoute?.routerLink;
        const backToGridPage = this.localstorage.getItem('backToGridPage');
        if (backToGridPage) {
            this.parentGridPage = JSON.parse(backToGridPage)?.name;
        }
        this.localstorage.setItem('navigationState', JSON.stringify(this.navigateData));
        this.activeItem = currentRoute;
        this.router.navigate([`${currentRoute.routerLink}`], { relativeTo: this.route, state: this.navigateData });
    }
    getDynamicTab() {
        this.dynamicTabPageService
            .getActivePage(this.tabPageId)
            .pipe(filter((response) => !!response.data.tabconfig), map((response) => JSON.parse(response.data.tabconfig)), tap((tabConfig) => {
            this.pages = tabConfig.map(page => {
                return {
                    id: page.id,
                    label: page.name,
                    routerLink: '',
                    icon: page?.icon ? page?.icon : ''
                };
            });
        }), switchMap((tabConfig) => {
            const observables = tabConfig.map(page => {
                return this.getActiveVersion(page);
            });
            return forkJoin(observables);
        }), takeUntil(this.destroy$))
            .subscribe(_ => {
            this.showTabs = true;
            this.routeToLandingPage();
        });
    }
    getActiveVersion(page) {
        return this.dynamicTabPageService.getDynamicPage(page.id).pipe(tap(response => this.setRoutetoTabs(response['data'], page.id)), takeUntil(this.destroy$));
    }
    setRoutetoTabs(rows, pageId) {
        this.items = this.pages
            .map(a => {
            if (a.id === pageId && a.routerLink === '') {
                if (rows[0].pagetype === 'BGP') {
                    a.routerLink = a.id === rows[0].id ? `dynamic-search/${rows[0].activeVersion.id}` : '';
                }
                else {
                    a.routerLink = a.id === rows[0].id ? `page/${pageId}` : '';
                }
            }
            return a; // Return the modified item
        })
            .filter(x => x.routerLink !== ''); // Filter out items with an empty routerLink
    }
    redirect() {
        const id = this.localstorage.getItem('version-id');
        this.router.navigate([`pages/page-design/versions/${id}`]);
        const parentGridPageInfo = JSON.parse(this.localstorage.getItem('backToGridPage'));
        this.router.navigate([`/pages/dynamic-search/search/${parentGridPageInfo.id}`], { relativeTo: this.route });
    }
    ngOnDestroy() {
        this.localstorage.removeItem('YouthID');
        this.localstorage.removeItem('navigationState');
        this.destroy$.next();
        this.destroy$.complete();
    }
    onTabItemClick(tab) {
        this.activeItem = this.items.find((t) => t.id === tab?.activeItem?.id);
        this.router.navigate([`${tab.activeItem.routerLink}`], {
            relativeTo: this.route,
            state: this.navigateData
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabComponent, deps: [{ token: i0.Injector }, { token: DynamicTabPageService }, { token: i1.ActivatedRoute }, { token: i1.Router }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DynamicTabComponent, selector: "app-dynamic-tab", viewQueries: [{ propertyName: "tab", first: true, predicate: ["tab"], descendants: true }], ngImport: i0, template: "<div class=\"rbac-tab\" *ngIf=\"showTabs\">\r\n  <p-tabMenu\r\n    [model]=\"items\"\r\n    #tab\r\n    (click)=\"onTabItemClick(tab)\"\r\n    [scrollable]=\"true\"\r\n    [activeItem]=\"activeItem\"></p-tabMenu>\r\n</div>\r\n<router-outlet></router-outlet>\r\n", styles: [".rbac-tab .p-tabmenu-nav .p-menuitem-text{line-height:1;font-size:13px}.rbac-tab .p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link{background:#fff;border-color:#2c2863;color:#2c2863;font-weight:700}\n"], dependencies: [{ kind: "directive", type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.RouterOutlet, selector: "router-outlet", inputs: ["name"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }, { kind: "component", type: i4.TabMenu, selector: "p-tabMenu", inputs: ["model", "activeItem", "scrollable", "popup", "style", "styleClass", "ariaLabel", "ariaLabelledBy"], outputs: ["activeItemChange"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-dynamic-tab', template: "<div class=\"rbac-tab\" *ngIf=\"showTabs\">\r\n  <p-tabMenu\r\n    [model]=\"items\"\r\n    #tab\r\n    (click)=\"onTabItemClick(tab)\"\r\n    [scrollable]=\"true\"\r\n    [activeItem]=\"activeItem\"></p-tabMenu>\r\n</div>\r\n<router-outlet></router-outlet>\r\n", styles: [".rbac-tab .p-tabmenu-nav .p-menuitem-text{line-height:1;font-size:13px}.rbac-tab .p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link{background:#fff;border-color:#2c2863;color:#2c2863;font-weight:700}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: DynamicTabPageService }, { type: i1.ActivatedRoute }, { type: i1.Router }]; }, propDecorators: { tab: [{
                type: ViewChild,
                args: ['tab']
            }] } });

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
    dynamicSearchService;
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
    constructor(injector, route, _formIO, pageBuilderViewService, location, localstore, dynamicSearchService) {
        this.route = route;
        this._formIO = _formIO;
        this.pageBuilderViewService = pageBuilderViewService;
        this.location = location;
        this.localstore = localstore;
        this.dynamicSearchService = dynamicSearchService;
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
                if (routingPage.length > 0 && routingPage[0].pathname === 'CreateSitevisitComponent') {
                    this.routingConfig = true;
                    this.appointmentList = Promise.resolve(true);
                }
            }
        });
    }
    conditionCheckPageBuilder(result) {
        if (result.data.templatejson) {
            this.isformIO = true;
            this.jsonForm = result.data.templatejson;
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
        // this._formIO.customEvent(event, this.formIO);
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderViewComponent, deps: [{ token: i0.Injector }, { token: i1.ActivatedRoute }, { token: FormioService }, { token: PageBuilderViewService }, { token: i6.Location }, { token: LocalService }, { token: DynamicsearchService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: PageBuilderViewComponent, selector: "app-page-builder-view", viewQueries: [{ propertyName: "formIO", first: true, predicate: ["formIO"], descendants: true }], ngImport: i0, template: "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 my-3\">\r\n      <button type=\"button\" class=\"btn btn-cancel\" (click)=\"goBack()\">Back</button>\r\n      <h6 class=\"font-weight-bold mb-0 mt-3 fromTitle\">{{ fromTitle }}</h6>\r\n    </div>\r\n    <div class=\"col-12\" *ngIf=\"isformIO\">\r\n      <formio #formIO [form]=\"jsonForm\" [submission]=\"submittedData\" (submit)=\"onSubmit($event)\"\r\n        (customEvent)=\"customEvent($event)\"></formio>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".container-fluid{background:#fff}\n"], dependencies: [{ kind: "directive", type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i7.FormioComponent, selector: "formio" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-page-builder-view', template: "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 my-3\">\r\n      <button type=\"button\" class=\"btn btn-cancel\" (click)=\"goBack()\">Back</button>\r\n      <h6 class=\"font-weight-bold mb-0 mt-3 fromTitle\">{{ fromTitle }}</h6>\r\n    </div>\r\n    <div class=\"col-12\" *ngIf=\"isformIO\">\r\n      <formio #formIO [form]=\"jsonForm\" [submission]=\"submittedData\" (submit)=\"onSubmit($event)\"\r\n        (customEvent)=\"customEvent($event)\"></formio>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".container-fluid{background:#fff}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.ActivatedRoute }, { type: FormioService }, { type: PageBuilderViewService }, { type: i6.Location }, { type: LocalService }, { type: DynamicsearchService }]; }, propDecorators: { formIO: [{
                type: ViewChild,
                args: ['formIO']
            }] } });

const routes = [
    {
        path: 'page',
        component: DynamicPageComponent
    },
    {
        path: 'page/modify/:pageId/:id',
        component: DynamicPageComponent
    },
    {
        path: 'page/view/:pageId/:id',
        component: DynamicPageComponent
    },
    {
        path: 'page/modify/:pageId',
        component: DynamicPageComponent
    },
    {
        path: 'tab/:tabId',
        component: DynamicTabComponent,
        children: [
            {
                path: 'page/:pageId',
                component: DynamicPageComponent
            },
            {
                path: 'page/modify/:pageId',
                component: DynamicPageComponent
            },
            {
                path: 'page/modify/:pageId/:id',
                component: DynamicPageComponent
            },
            {
                path: 'page/:pageId/:id',
                component: DynamicPageComponent
            },
            {
                path: 'dynamic-search/:pageId',
                component: DynamicSearchComponent,
                loadChildren: () => Promise.resolve().then(function () { return dynamicSearch_module; }).then(m => m.DynamicSearchModule)
            },
            {
                path: 'view/:id',
                component: PageBuilderViewComponent
            }
        ]
    },
    {
        path: 'tab/:tabId/:id',
        component: DynamicTabComponent,
        children: [
            {
                path: 'page/:pageId',
                component: DynamicPageComponent
            },
            {
                path: 'page/modify/:pageId',
                component: DynamicPageComponent
            },
            {
                path: 'page/modify/:pageId/:id',
                component: DynamicPageComponent
            },
            {
                path: 'page/:pageId/:id',
                component: DynamicPageComponent
            },
            {
                path: 'dynamic-search/:pageId',
                component: DynamicSearchComponent,
                loadChildren: () => Promise.resolve().then(function () { return dynamicSearch_module; }).then(m => m.DynamicSearchModule)
            },
            {
                path: 'view/:id',
                component: PageBuilderViewComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: 'page',
        pathMatch: 'full'
    }
];
class DynamicTabPageRoutingModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageRoutingModule, imports: [RouterModule.forChild(routes), RouterModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });

class DynmicTabPageModule {
    constructor(injector) {
        // registerDateRangeComponent(injector);
        // registerFileUploadComponent(injector);
        // registerGlobalSearchComponent(injector);
        // registerPicsSelectComponent(injector);
        // registerBasicFileUploadComponent(injector);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynmicTabPageModule, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DynmicTabPageModule, declarations: [DynamicPageComponent, DynamicTabComponent, PageBuilderViewComponent], imports: [CommonModule,
            FormioModule,
            FormsModule,
            ReactiveFormsModule,
            DynamicTabPageRoutingModule,
            DxDataGridModule,
            DxSelectBoxModule,
            DxCheckBoxModule,
            CommonModule,
            PrimengModule,
            MaterialUIModule,
            SharedPipesModule,
            FormsModule,
            ReactiveFormsModule,
            NgxfUploaderModule, i1$4.NgxMaskModule, 
            // OcrValidationModule,
            DynamicModule$1] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynmicTabPageModule, providers: [
            {
                provide: STEPPER_GLOBAL_OPTIONS,
                useValue: { displayDefaultIndicatorType: false }
            },
            SpeechRecognitionService,
            OCRService,
            CustomTagsService
        ], imports: [CommonModule,
            FormioModule,
            FormsModule,
            ReactiveFormsModule,
            DynamicTabPageRoutingModule,
            DxDataGridModule,
            DxSelectBoxModule,
            DxCheckBoxModule,
            CommonModule,
            PrimengModule,
            MaterialUIModule,
            SharedPipesModule,
            FormsModule,
            ReactiveFormsModule,
            NgxfUploaderModule,
            NgxMaskModule.forRoot(),
            // OcrValidationModule,
            DynamicModule$1] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynmicTabPageModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DynamicPageComponent, DynamicTabComponent, PageBuilderViewComponent],
                    imports: [
                        CommonModule,
                        FormioModule,
                        FormsModule,
                        ReactiveFormsModule,
                        DynamicTabPageRoutingModule,
                        DxDataGridModule,
                        DxSelectBoxModule,
                        DxCheckBoxModule,
                        CommonModule,
                        PrimengModule,
                        MaterialUIModule,
                        SharedPipesModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgxfUploaderModule,
                        NgxMaskModule.forRoot(),
                        // OcrValidationModule,
                        DynamicModule$1,
                    ],
                    providers: [
                        {
                            provide: STEPPER_GLOBAL_OPTIONS,
                            useValue: { displayDefaultIndicatorType: false }
                        },
                        SpeechRecognitionService,
                        OCRService,
                        CustomTagsService
                    ],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });

class PicsDynamicModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsDynamicModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: PicsDynamicModule, imports: [CommonModule, DynamicSearchModule, DynmicTabPageModule, FormioModule, SharedPipesModule, PrimengModule, NgxfUploaderModule, AlertModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsDynamicModule, providers: [
            {
                provide: STEPPER_GLOBAL_OPTIONS,
                useValue: { displayDefaultIndicatorType: false }
            },
            SpeechRecognitionService,
            OCRService,
            RbacService, MicrostrategyService, HttpClient, HttpService,
            AuthService, AuthStore, AlertService, DynamicsearchService,
            AttachmentsService, CredentialsService, LocalService, MicrostrategyService, SpeechRecognitionService,
            ConfirmationService, PermissionStore, DataStoreService, PageHeaderService,
            DynamicTabPageService, FormioService, OcrValidationService, ShareDataService
        ], imports: [CommonModule, DynamicSearchModule, DynmicTabPageModule, FormioModule, SharedPipesModule, PrimengModule, NgxfUploaderModule, AlertModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsDynamicModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CommonModule, DynamicSearchModule, DynmicTabPageModule, FormioModule, SharedPipesModule, PrimengModule, NgxfUploaderModule, AlertModule],
                    providers: [
                        {
                            provide: STEPPER_GLOBAL_OPTIONS,
                            useValue: { displayDefaultIndicatorType: false }
                        },
                        SpeechRecognitionService,
                        OCRService,
                        RbacService, MicrostrategyService, HttpClient, HttpService,
                        AuthService, AuthStore, AlertService, DynamicsearchService,
                        AttachmentsService, CredentialsService, LocalService, MicrostrategyService, SpeechRecognitionService,
                        ConfirmationService, PermissionStore, DataStoreService, PageHeaderService,
                        DynamicTabPageService, FormioService, OcrValidationService, ShareDataService
                    ],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });

class DynamicModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DynamicModule, declarations: [DynamicComponent], imports: [PicsDynamicModule], exports: [DynamicComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicModule, imports: [PicsDynamicModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DynamicComponent
                    ],
                    imports: [
                        PicsDynamicModule
                    ],
                    exports: [
                        DynamicComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of dynamic
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DynamicComponent, DynamicModule, DynamicService };
//# sourceMappingURL=pics-module-dynamic.mjs.map
