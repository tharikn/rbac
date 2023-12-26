import * as i0 from '@angular/core';
import { Injectable, Component, Input, Directive, NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import * as i2$1 from '@angular/forms';
import { Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@angular/router';
import { NavigationStart } from '@angular/router';
import 'rxjs/add/operator/map';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i6 from 'primeng/card';
import { CardModule } from 'primeng/card';
import * as i7 from 'primeng/dialog';
import { DialogModule } from 'primeng/dialog';
import * as i8 from 'primeng/checkbox';
import { CheckboxModule } from 'primeng/checkbox';
import * as i9 from 'primeng/dropdown';
import { DropdownModule } from 'primeng/dropdown';
import * as i10 from 'primeng/inputtext';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmationService } from 'primeng/api';
import { __awaiter } from 'tslib';
import * as i1$1 from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ContextMenuModule } from 'primeng/contextmenu';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KnobModule } from 'primeng/knob';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { SpeedDialModule } from 'primeng/speeddial';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { TreeSelectModule } from 'primeng/treeselect';

class ConfigLoginSettingsService {
    constructor() { }
}
ConfigLoginSettingsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConfigLoginSettingsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ConfigLoginSettingsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConfigLoginSettingsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConfigLoginSettingsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class RoleConfig {
}
RoleConfig.EndPoint = {
    role: {
        getAllUserRole: '/access-control/role',
        createRole: '/access-control/role/create',
        getLandingPage: '/platform/menu/application',
        addPolicyGroup: '/access-control/role',
        getAllOrgRole: '/access-control/role/organization/{orgid}',
        dossier: '/dossier'
    }
};
class UserConfig {
}
UserConfig.EndPoint = {
    User: {
        getAllUserList: '/org/user',
        getAllUserActiveInactive: '/org/user?includeInactiveUsers=true',
        getUserConfig: '/org/user/getUserPreference/USER_THEME_PREFERENCES/{id}',
        activateUser: '/org/user/activate',
        createUser: '/org/user/create',
        userRole: '/org/user/role',
        managementgroup: '/org/team/managementgroup',
        getAllUserOrgList: '/org/user/organization/',
        saveUserConfig: '/user/saveUserPreference'
    },
    Provider: {
        getProviderList: '/ref/provider',
        searchProviderList: '/ref/provider/search',
        addProviderUser: '/ref/provider/create/account'
    }
};
class AttachmentConfig$1 {
}
AttachmentConfig$1.EndPoint = {
    Attachments: {
        GetAttachmentReferral: '/ref/attachment/referral',
        GetCategoryLookup: '/platform/master/lookup/lookupbycategoryname',
        UploadKey: '/common/files/upload-key',
        DownloadKey: '/common/files/download-key',
        PostAttachment: '/ref/attachment/create',
        PutAttachment: '/ref/attachment'
    }
};
class PolicyGroupConfig {
}
PolicyGroupConfig.EndPoint = {
    policyGroup: {
        getPolicyGroupList: '/platform/page-designer/policyGroup',
        getAllPolicyGroupList: '/platform/page-designer/policyGroup/all',
        createPolicyGroup: '/platform/page-designer/policyGroup',
        getOrgPolicyGroups: '/platform/page-designer/policyGroup/organization/{organizationid}'
    }
};
class PermissionsURL {
}
PermissionsURL.EndPoints = {
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
class AccessManagementConfig$1 {
}
AccessManagementConfig$1.EndPoint = {
    Organization: {
        getOrganizationList: '/org/organization/all',
        getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
    }
};
class MasterURL {
}
MasterURL.EndPoints = {
    lookup: {
        createCategory: '/platform/master/lookup/category',
        updateDeleteCategory: '/platform/master/lookup/category/{id}',
        lookup: '/platform/master/lookup/{id}',
        createLookup: '/platform/master/lookup',
        getPermissionRoleById: '/access-control/permission/role/{id}',
        getAllCategoryTree: '/platform/master/lookup/category/tree/{applicationid}',
        getLookupTree: '/platform/master/lookup/tree/{categoryid}',
        getPermissionsTree: '/access-control/permission/application/{applicationid}'
    }
};
class AuthURL {
}
AuthURL.EndPoints = {
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
            getWorkerAvailability: '/worker/getByCurrentUser',
            userValidate: '/org/auth/user-validate',
            generateLoginUrl: '/org/auth/get-login-url',
            getTokenValidationUrl: '/org/auth/token-validation',
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
class RBACINFO {
    constructor() {
        this.apiHost = '';
        this.tokenKey = '';
    }
}
class Environment {
}

class Store {
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
            this.setState(Object.assign(Object.assign({}, this.state), data));
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
}
PermissionStore.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionStore, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PermissionStore.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionStore });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionStore, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class DataStoreService {
    constructor() {
        this.currentStoreSubject = new BehaviorSubject({});
        this.currentStore = this.currentStoreSubject.asObservable();
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
}
DataStoreService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataStoreService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
DataStoreService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataStoreService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataStoreService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class AppConstants {
}
AppConstants.errorMessage = 'Something went wrong!';
AppConstants.regexEmail = '^[0-9a-zA-Z.-]+[@][0-9a-zA-Z.-]+[.][0-9a-zA-Z]{2,}$';
AppConstants.errorList = [
    'Have at least one (1) number',
    'Have at least one (1) special character',
    'Have at least one (1) upper case letter',
    'Have at least one (1) lower case letter',
    'Contain a minimum of fourteen (14) characters'
];

class AlertService {
    constructor(router) {
        this.router = router;
        this.subject = new Subject();
        this.keepAfterRouteChange = false;
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
}
AlertService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
AlertService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService, decorators: [{
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
}
class UserGroupDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserRolePageDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserRoleDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
class AccessManagementConfig {
}
AccessManagementConfig.EndPoint = {
    Organization: {
        getOrganizationList: '/org/organization/all',
        getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
    }
};

class ConfigurationSettingsConfig {
}
ConfigurationSettingsConfig.EndPoint = {
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
    ConfigSettings: {
        saveConfig: '/org/config-settings/create',
        getConfigList: '/org/config-settings/list',
        getConfigById: '/org/config-settings/list?id=',
        deleteConfig: '/org/config-settings/',
        updateConfig: '/org/config-settings/',
        registrationInfo: '/org/auth/configsettings'
    },
    role: {
        getAllUserRole: '/access-control/role',
        createRole: '/access-control/role/create',
        getLandingPage: '/platform/menu/application',
        addPolicyGroup: '/access-control/role',
        getAllOrgRole: '/access-control/role/organization/{orgid}',
        dossier: '/dossier'
    },
    Email: {
        emailtemplateList: '/solution/emailtemplate/channel/EMAIL'
    },
    org: {
        getOrganizations: '/org/management-group/organization/tree'
    },
    Attachments: {
        GetAttachmentReferral: '/ref/attachment/referral',
        GetCategoryLookup: '/platform/master/lookup/lookupbycategoryname',
        UploadKey: '/common/files/upload-key',
        DownloadKey: '/common/files/download-key',
        PostAttachment: '/ref/attachment/create',
        PutAttachment: '/ref/attachment'
    }
};
class AttachmentConfig {
}
AttachmentConfig.EndPoint = {
    Attachments: {
        GetAttachmentReferral: '/ref/attachment/referral',
        GetCategoryLookup: '/platform/master/lookup/lookupbycategoryname',
        UploadKey: '/common/files/upload-key',
        DownloadKey: '/common/files/download-key',
        PostAttachment: '/ref/attachment/create',
        PutAttachment: '/ref/attachment'
    }
};

class ConfigurationSettingsService {
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    getUserList(orgid) {
        return this.httpService.get(ConfigurationSettingsConfig.EndPoint.User.getUserorgList + orgid);
    }
    saveConfigSettings(modal) {
        return this.httpService.post(ConfigurationSettingsConfig.EndPoint.ConfigSettings.saveConfig, modal);
    }
    getConfigList() {
        return this.httpService.get(ConfigurationSettingsConfig.EndPoint.ConfigSettings.getConfigList);
    }
    getConfigById(id) {
        return this.httpService.get(ConfigurationSettingsConfig.EndPoint.ConfigSettings.getConfigById + id);
    }
    deleteConfig(id) {
        return this.httpService.delete(ConfigurationSettingsConfig.EndPoint.ConfigSettings.deleteConfig + id);
    }
    updateConfig(id, modal) {
        return this.httpService.patch(ConfigurationSettingsConfig.EndPoint.ConfigSettings.updateConfig + id, modal);
    }
    getAllUserRole(id) {
        return this.httpService.get(ConfigurationSettingsConfig.EndPoint.role.getAllOrgRole.replace('{orgid}', String(id)));
    }
    getEmailTemplateNewList() {
        return this.httpService.get(ConfigurationSettingsConfig.EndPoint.Email.emailtemplateList);
    }
    getAllOrganizations() {
        return this.httpService.get(ConfigurationSettingsConfig.EndPoint.org.getOrganizations);
    }
    uploadKey(objparams) {
        return this.httpService.post(ConfigurationSettingsConfig.EndPoint.Attachments.UploadKey, objparams);
    }
}
ConfigurationSettingsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConfigurationSettingsService, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
ConfigurationSettingsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConfigurationSettingsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConfigurationSettingsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

const DISPLAY_IN_SECONDS = 8;
class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.alerts = [];
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
}
AlertComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertComponent, deps: [{ token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
AlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AlertComponent, selector: "app-alert", ngImport: i0, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{
                    // moduleId: module.id,
                    selector: 'app-alert',
                    templateUrl: 'alert.component.html',
                    styleUrls: ['./alert.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: AlertService }]; } });

class ConfigLoginSettingsComponent$1 {
    constructor(alertService, _formBuilder, _configurationSettingsService, _storeservice) {
        this.alertService = alertService;
        this._formBuilder = _formBuilder;
        this._configurationSettingsService = _configurationSettingsService;
        this._storeservice = _storeservice;
        this.closeResult = '';
        this.thumbnailLogo = '';
        this.thumbnailBanner = '';
        this.userRoles = [];
        this.emailTemplate = [];
        this.organizations = [];
        this.userid = '';
        this.updateButton = false;
        this.visible = false;
        this.bannerVisible = false;
        this.loginEvent$ = new BehaviorSubject(null);
        this.userid = sessionStorage.getItem('id');
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
                this.authService = res['AUTHSERVICE'];
            }
        });
    }
    ngOnInit() {
        this.orgSubs = this._storeservice.currentStore.subscribe((res) => {
            if (res['RBACORG'] && res['RBACORG'] !== '') {
                this.RBACORG = res['RBACORG'];
                console.log(this.RBACORG, 'RBACORG Profile');
                this.environment = this.RBACORG['environment'];
                this.orgId = parseInt(this.RBACORG['orgID']);
                if (this.environment) {
                    this.organizationsList();
                    this.getEmailTemplateNewList();
                    this.initilizeForm();
                    this.getRolesList();
                    this.getConfigById();
                }
            }
        });
    }
    initilizeForm() {
        this.configRegistrationForm = this._formBuilder.group({
            id: [''],
            registration: false,
            layout: [1],
            role_for_registration: ['', Validators.required],
            template_for_registration: ['', Validators.required],
            banner: ['', Validators.required],
            organization_title: ['', Validators.required],
            logo: ['', Validators.required],
            organizationid: ['', Validators.required]
        });
    }
    getRolesList() {
        this._configurationSettingsService.getAllUserRole(this.orgId).subscribe(res => {
            this.userRoles = res['data'];
        }, _error => this.alertService.error(AppConstants.errorMessage));
    }
    getEmailTemplateNewList() {
        this._configurationSettingsService.getEmailTemplateNewList().subscribe((_res) => {
            if (_res) {
                this.emailTemplate = _res.data;
            }
        });
    }
    organizationsList() {
        this._configurationSettingsService.getAllOrganizations().subscribe((res) => {
            this.organizations = res.data;
        });
    }
    handleFileInput(fileValue) {
        const target = fileValue.target;
        const file = target.files[0];
        this.uploadedFileLogo = fileValue.target.files[0].name;
        this.imageDataLogo = {
            contentType: fileValue.target.files[0].type,
            fileName: `login-orgimage/${this.userid}/${this.uploadedFileLogo}`
        };
        if (this.validateImage(fileValue.target.files, 'LOGO')) {
            this._configurationSettingsService.uploadKey(this.imageDataLogo).subscribe((res) => {
                this.urlPathLogo = res.data;
                const uploadAttachment = document.getElementById('file');
                const uploadAttachmentDetails = uploadAttachment.files[0];
                this.httpService.putUpload(this.urlPathLogo, uploadAttachmentDetails, uploadAttachmentDetails.type).subscribe((_resp) => {
                    this.alertService.success('Uploaded Successfully!');
                    const reader = new FileReader();
                    reader.onload = () => {
                        // this.thumbnailLogo = reader.result as string;
                        this.thumbnailLogo = this.urlPathLogo;
                        this.configRegistrationForm.patchValue({
                            logo: this.urlPathLogo
                        });
                    };
                    reader.readAsDataURL(file);
                    this.attachTypeLogo = fileValue.target.files[0].type;
                }, error => {
                    if (error.status == 0) {
                        this.alertService.error(AppConstants.errorMessage);
                        this.uploadedFileLogo = '';
                        this.urlPathLogo = '';
                    }
                });
            }, _error => {
                this.alertService.error(AppConstants.errorMessage);
            });
        }
    }
    validateImage(file, type) {
        const fileSize = Number(file[0].size) / 1024;
        const filetype = file[0].type.replace('image/', '');
        if (filetype === 'jpg' ||
            filetype === 'jpeg' ||
            filetype === 'png' ||
            filetype === 'gif' ||
            filetype === 'svg+xml') {
            if (fileSize < 1024 && type === 'BANNER') {
                return true;
            }
            else if (fileSize < 120 && type === 'LOGO') {
                return true;
            }
            else {
                this.alertService.warn('File is bigger than 1024 KB');
                return false;
            }
        }
        else {
            this.alertService.warn(`${filetype} format is not supported`);
            return false;
        }
    }
    removeThumbnail() {
        this.thumbnailLogo = '';
    }
    handleFileInputBanner(fileValue) {
        const target = fileValue.target;
        const file = target.files[0];
        this.uploadedFileBanner = fileValue.target.files[0].name;
        this.imageDataBanner = {
            contentType: fileValue.target.files[0].type,
            fileName: `login-orgimage/${this.userid}/${this.uploadedFileBanner}`
        };
        if (this.validateImage(fileValue.target.files, 'BANNER')) {
            this.httpService.uploadKey(this.imageDataBanner).subscribe((res) => {
                this.urlPathBanner = res.data;
                const uploadAttachment = document.getElementById('file1');
                const uploadAttachmentDetails = uploadAttachment.files[0];
                this.httpService
                    .putUpload(this.urlPathBanner, uploadAttachmentDetails, uploadAttachmentDetails.type)
                    .subscribe((_resp) => {
                    this.alertService.success('Uploaded Successfully!');
                    const reader = new FileReader();
                    this.thumbnailBanner = this.urlPathBanner;
                    reader.onload = () => {
                        this.configRegistrationForm.patchValue({
                            banner: this.urlPathBanner
                        });
                    };
                    reader.readAsDataURL(file);
                    this.attachTypeBanner = fileValue.target.files[0].type;
                }, error => {
                    if (error.status == 0) {
                        this.alertService.error(AppConstants.errorMessage);
                        this.uploadedFileBanner = '';
                        this.urlPathBanner = '';
                    }
                });
            }, _error => {
                this.alertService.error(AppConstants.errorMessage);
            });
        }
    }
    removeThumbnailBanner() {
        this.thumbnailBanner = '';
    }
    saveConfig() {
        const validate = this.conditionValidation();
        if (validate) {
            if (this.editConfigSettings) {
                const inputRequest = {
                    id: this.editConfigSettings.id,
                    registration: this.configRegistrationForm.value.registration,
                    // eslint-disable-next-line radix
                    layout: parseInt(this.configRegistrationForm.value.layout),
                    role_for_registration: this.configRegistrationForm.value.role_for_registration,
                    template_for_registration: this.configRegistrationForm.value.template_for_registration,
                    banner: this.configRegistrationForm.value.banner,
                    organization_title: this.configRegistrationForm.value.organization_title,
                    logo: this.configRegistrationForm.value.logo,
                    organizationid: this.configRegistrationForm.value.organizationid
                };
                this.updateButton = true;
                this._configurationSettingsService.updateConfig(this.editConfigSettings.id, inputRequest).subscribe(_res => {
                    this.alertService.success('Updated successfully!');
                });
            }
            else {
                const urlPathLogo = this.urlPathLogo ? this.urlPathLogo.split('?')[0] : '';
                const urlPathBanner = this.urlPathBanner ? this.urlPathBanner.split('?')[0] : '';
                this.configRegistrationForm.patchValue({
                    logo: urlPathLogo,
                    banner: urlPathBanner
                });
                const inputRequest = {
                    registration: this.configRegistrationForm.value.registration,
                    layout: this.configRegistrationForm.value.layout,
                    role_for_registration: this.configRegistrationForm.value.role_for_registration,
                    template_for_registration: this.configRegistrationForm.value.template_for_registration,
                    banner: this.configRegistrationForm.value.banner,
                    organization_title: this.configRegistrationForm.value.organization_title,
                    logo: this.configRegistrationForm.value.logo,
                    organizationid: this.configRegistrationForm.value.organizationid
                };
                this.updateButton = true;
                this._configurationSettingsService.saveConfigSettings(inputRequest).subscribe(_res => {
                    this.alertService.success('Saved successfully!');
                });
            }
        }
    }
    backToPreview() {
        this.updateButton = false;
    }
    showUploadedLogo() {
        this.visible = true;
    }
    showUploadedBanner() {
        this.bannerVisible = true;
    }
    getConfigById() {
        this._configurationSettingsService.getConfigList().subscribe((res) => {
            if (res.data) {
                this.updateButton = true;
                const configSettingsList = res.data;
                const valuesMax1 = configSettingsList.map(item => item.id);
                const max1 = Math.max(...valuesMax1);
                this.editConfigSettings = configSettingsList.filter(x => x.id === max1)[0];
                this.configRegistrationForm.patchValue(this.editConfigSettings);
                // eslint-disable-next-line radix
                this.configRegistrationForm.patchValue({ organizationid: parseInt(this.editConfigSettings.organizationid) });
                this.thumbnailLogo = this.editConfigSettings.logo;
                this.thumbnailBanner = this.editConfigSettings.banner;
            }
            else {
                this.updateButton = false;
            }
        });
    }
    conditionValidation() {
        if (!this.configRegistrationForm.value.organization_title) {
            this.alertService.warn('Please fill the organization title');
            return false;
        }
        else if (!this.configRegistrationForm.value.banner) {
            this.alertService.warn('Please upload the banner');
            return false;
        }
        else if (!this.configRegistrationForm.value.logo) {
            this.alertService.warn('Please upload the logo');
            return false;
        }
        else if (!this.configRegistrationForm.value.organizationid) {
            this.alertService.warn('Please select the organization');
            return false;
        }
        else if (!this.configRegistrationForm.value.role_for_registration) {
            this.alertService.warn('Please select the role');
            return false;
        }
        else if (!this.configRegistrationForm.value.template_for_registration) {
            this.alertService.warn('Please select the template');
            return false;
        }
        return true;
    }
}
ConfigLoginSettingsComponent$1.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConfigLoginSettingsComponent$1, deps: [{ token: AlertService }, { token: i2$1.FormBuilder }, { token: ConfigurationSettingsService }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
ConfigLoginSettingsComponent$1.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConfigLoginSettingsComponent$1, selector: "lib-config-login-settings", ngImport: i0, template: "<app-alert></app-alert>\r\n<p-card styleClass=\"w-100\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 col-12\">\r\n      <div class=\"customizer customizer-styling customizer-styling-skin skin\">\r\n        <h6 class=\"font-weight-bold mb-3\">Choose Login Layout</h6>\r\n        <div class=\"d-flex justify-content-start align-items-center\">\r\n          <!-- Layout 1 -->\r\n          <div class=\"custom-control custom-radio mr-4 mb-md-0 mb-3\">\r\n            <figure class=\"active mb-0\">\r\n              <label role=\"link\" class=\"mb-0 layout-select\" for=\"layout1\">\r\n                <img src=\"../../../../assets/images/Layout.jpg\" class=\"img-fluid\" alt=\"layout1\" />\r\n              </label>\r\n              <figcaption>\r\n                <input\r\n                  type=\"radio\"\r\n                  id=\"layout1\"\r\n                  name=\"layout\"\r\n                  class=\"custom-control-input layout-name\"\r\n                  [attr.checked]=\"true\"\r\n                  value=\"Layout 1\" />\r\n                <label class=\"custom-control-label mt-2 mb-0\" for=\"layout1\">Layout 1</label>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</p-card>\r\n\r\n<p-card styleClass=\"w-100 mt-3\">\r\n  <div class=\"customizer\" [formGroup]=\"configRegistrationForm\">\r\n    <h6 class=\"font-weight-bold mb-3\">Configure Login</h6>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 col-sm-6 col-12 form-group\">\r\n        <label class=\"intake-form-labels\" for=\"organizationName\">Organization Title</label>\r\n        <input\r\n          class=\"form-control\"\r\n          type=\"text\"\r\n          placeholder=\"Title Name\"\r\n          id=\"organizationName\"\r\n          autocomplete=\"off\"\r\n          formControlName=\"organization_title\"\r\n          pInputText />\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-6 col-12 form-group\">\r\n        <label class=\"intake-form-labels mb-0\" for=\"thumbnailBanner\">Upload Banner</label>\r\n        <div *ngIf=\"!thumbnailBanner\" id=\"thumbnailBanner\">\r\n          <figure class=\"mt-2 mb-0 pic-upload justify-content-md-center\">\r\n            <label for=\"file1\" class=\"btn btn-primary file-upload-btn mb-0\">\r\n              <span class=\"d-flex align-items-center justify-content-center\">\r\n                <span class=\"aterial-icon material-symbols-outlined text-white mr-2\">cloud_upload</span>\r\n                <span>Upload</span>\r\n              </span>\r\n            </label>\r\n            <input\r\n              type=\"file\"\r\n              id=\"file1\"\r\n              aria-hidden=\"true\"\r\n              style=\"display: none\"\r\n              (change)=\"handleFileInputBanner($event)\" />\r\n          </figure>\r\n          <p><small>Image size max 1MB (min-width 1100px and min-height 800px)</small></p>\r\n        </div>\r\n        <div *ngIf=\"thumbnailBanner\">\r\n          <div class=\"d-flex align-items-center justify-content-between p-1 bg-light\">\r\n            <span role=\"button\" (click)=\"showUploadedBanner()\" title=\"Zoom\">\r\n              <img width=\"45\" height=\"45\" [src]=\"thumbnailBanner || 'assets/images/user-empty.png'\" alt=\"upload\" />\r\n            </span>\r\n            <span>\r\n              <em\r\n                role=\"button\"\r\n                class=\"fa fa-search-plus fa-lg text-primary mr-2\"\r\n                (click)=\"showUploadedBanner()\"\r\n                title=\"Zoom\"></em>\r\n              <em\r\n                role=\"button\"\r\n                class=\"fa fa-trash fa-lg text-danger mr-2\"\r\n                (click)=\"removeThumbnailBanner()\"\r\n                title=\"Delete\"></em>\r\n            </span>\r\n          </div>\r\n          <p-dialog header=\"Banner Preview\" [(visible)]=\"bannerVisible\" [style]=\"{ width: '50vw' }\">\r\n            <img class=\"img-fluid\" [attr.src]=\"thumbnailBanner || 'assets/images/user-empty.png'\" alt=\"upload\" />\r\n          </p-dialog>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-6 col-122 form-group\">\r\n        <label class=\"intake-form-labels mb-0\" for=\"thumbnailLogo\">Upload Logo</label>\r\n        <div *ngIf=\"!thumbnailLogo\" id=\"thumbnailLogo\">\r\n          <figure class=\"mt-2 mb-0 pic-upload justify-content-md-center\">\r\n            <label for=\"file\" class=\"btn btn-primary file-upload-btn mb-0\">\r\n              <span class=\"d-flex align-items-center justify-content-center\">\r\n                <span class=\"aterial-icon material-symbols-outlined text-white mr-2\">cloud_upload</span>\r\n                <span>Upload</span>\r\n              </span>\r\n            </label>\r\n            <input type=\"file\" id=\"file\" aria-hidden=\"true\" style=\"display: none\" (change)=\"handleFileInput($event)\" />\r\n          </figure>\r\n          <p><small>Image size max 120kb (min-width 400px and min-height 60px)</small></p>\r\n        </div>\r\n        <div *ngIf=\"thumbnailLogo\">\r\n          <div class=\"d-flex align-items-center justify-content-between p-1 bg-light\">\r\n            <span role=\"button\" (click)=\"showUploadedLogo()\" title=\"Zoom\">\r\n              <img width=\"45\" height=\"45\" [attr.src]=\"thumbnailLogo || 'assets/images/user-empty.png'\" alt=\"upload\" />\r\n            </span>\r\n            <span>\r\n              <em\r\n                role=\"button\"\r\n                class=\"fa fa-search-plus fa-lg text-primary mr-2\"\r\n                (click)=\"showUploadedLogo()\"\r\n                title=\"Zoom\"></em>\r\n              <em\r\n                role=\"button\"\r\n                class=\"fa fa-trash fa-lg text-danger mr-2\"\r\n                (click)=\"removeThumbnail()\"\r\n                title=\"Delete\"></em>\r\n            </span>\r\n          </div>\r\n          <p-dialog header=\"Logo Preview\" [(visible)]=\"visible\" [style]=\"{ width: '50vw' }\">\r\n            <img class=\"img-fluid\" [src]=\"thumbnailLogo || 'assets/images/user-empty.png'\" alt=\"upload\" />\r\n          </p-dialog>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</p-card>\r\n\r\n<p-card styleClass=\"w-100 mt-3\">\r\n  <div class=\"customizer\" [formGroup]=\"configRegistrationForm\">\r\n    <h6 class=\"font-weight-bold mb-3\">Configure Registration</h6>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 col-sm-6 col-12 mb-md-4 mb-3\">\r\n        <p-checkbox inputId=\"registrationid\" [binary]=\"true\" formControlName=\"registration\"></p-checkbox>\r\n        <label class=\"intake-form-labels mb-0 ml-2\" for=\"registrationid\">Enable Registration?</label>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-6 col-12 form-group\">\r\n        <label class=\"intake-form-labels\" for=\"selectOrganization\">Select Organization</label>\r\n        <p-dropdown\r\n          styleClass=\"w-100\"\r\n          optionLabel=\"name\"\r\n          optionValue=\"id\"\r\n          [options]=\"organizations\"\r\n          placeholder=\"Select Role\"\r\n          id=\"selectOrganization\"\r\n          formControlName=\"organizationid\"\r\n          ariaLabelledBy=\"roleforregistration\">\r\n        </p-dropdown>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-6 col-12 form-group\">\r\n        <label class=\"intake-form-labels\" for=\"roleforregistration\">Select Role</label>\r\n        <p-dropdown\r\n          styleClass=\"w-100\"\r\n          optionLabel=\"name\"\r\n          optionValue=\"id\"\r\n          [options]=\"userRoles\"\r\n          placeholder=\"Select Role\"\r\n          id=\"roleforregistration\"\r\n          formControlName=\"role_for_registration\"\r\n          ariaLabelledBy=\"roleforregistration\">\r\n        </p-dropdown>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-6 col-12 form-group\">\r\n        <label class=\"intake-form-labels\" for=\"templateforregistration\">Select Template</label>\r\n        <p-dropdown\r\n          styleClass=\"w-100\"\r\n          optionLabel=\"name\"\r\n          optionValue=\"id\"\r\n          [options]=\"emailTemplate\"\r\n          placeholder=\"Select Template\"\r\n          id=\"templateforregistration\"\r\n          formControlName=\"template_for_registration\"\r\n          ariaLabelledBy=\"templateforregistration\">\r\n        </p-dropdown>\r\n      </div>\r\n    </div>\r\n    <div class=\"text-md-right mt-2\">\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveConfig()\">\r\n        {{ updateButton ? 'Update' : 'Submit' }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</p-card>\r\n", styles: ["@charset \"UTF-8\";:host ::ng-deep .p-card .p-card-body .p-card-content{padding:0}.customizer .custom-checkbox.custom-control,.customizer .custom-radio.custom-control{padding-left:0}.customizer .custom-checkbox.custom-control .theme-select,.customizer .custom-radio.custom-control .theme-select{border:2px solid #ddd;border-radius:7px}.customizer .custom-checkbox.custom-control .active .theme-select,.customizer .custom-radio.custom-control .active .theme-select{border-color:var(--primary)}.customizer .custom-checkbox .custom-control-input:checked~.custom-control-label:before,.customizer .custom-radio .custom-control-input:checked~.custom-control-label:before{content:\"\\f00c\";font-family:\"FontAwesome\",sans-serif;color:var(--hover-text);background-color:var(--btn);border-color:var(--btn);font-size:10px;display:flex;align-items:center;padding:2px}.customizer .custom-checkbox label,.customizer .custom-radio label{cursor:pointer}.customizer .custom-checkbox .font-box,.customizer .custom-radio .font-box{display:flex;justify-content:center;align-items:center;width:150px;height:120px;color:var(--text-dark)}.customizer .custom-checkbox .custom-control-label,.customizer .custom-radio .custom-control-label{position:relative;vertical-align:middle;font-size:var(--base-font-size);line-height:normal;color:var(--text-dark);cursor:pointer;padding-left:25px}.customizer .custom-checkbox .custom-control-label:after,.customizer .custom-radio .custom-control-label:after{border-color:var(--btn)}.customizer .custom-checkbox .custom-control-label:before,.customizer .custom-checkbox .custom-control-label:after,.customizer .custom-radio .custom-control-label:before,.customizer .custom-radio .custom-control-label:after{background-image:none;width:16px;height:16px;left:0;box-shadow:none;top:0}.customizer hr{border-color:var(--table-border)}.customizer .customizer-header{background:var(--background-color);color:var(--text-dark)}.customizer .customizer-header .customizer-close{position:absolute;right:.6rem;top:.6rem;padding:7px;width:auto;z-index:10;color:var(--text-dark);cursor:pointer}.customizer .customizer-header .customizer-close .material-icon{font-size:1.5rem}.customizer .customizer-header .customizer-close:hover{color:var(--btn)}.customizer h4{font-size:var(--font-15);font-weight:600;color:var(--text-dark)}.customizer h6{font-size:var(--font-14);color:var(--text-dark)}.customizer p{font-size:var(--base-font-size);font-weight:400;color:var(--text-dark)}.customizer .customizer-toggle{background:var(--btn);color:var(--hover-text);box-shadow:-3px 0 8px #22292f1a;border-top-left-radius:6px;border-bottom-left-radius:6px;position:absolute;top:50%;width:38px;height:38px;left:-39px;text-align:center;line-height:40px;border-left:1px solid var(--checkbox-border);cursor:pointer}.customizer .customizer-toggle .fa-cog{font-size:var(--font-15)}.customizer .customizer-toggle:hover{text-decoration:none}.customizer .customizer-styling-skin.skin .custom-control .custom-control-label{position:relative;padding-left:25px}.customizer .custom-control:first-child .font-box{font-size:var(--font-21);font-weight:400}.customizer .custom-control:last-child .font-box{font-size:var(--font-26);font-weight:600}\n"], components: [{ type: AlertComponent, selector: "app-alert" }, { type: i6.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { type: i7.Dialog, selector: "p-dialog", inputs: ["header", "draggable", "resizable", "positionLeft", "positionTop", "contentStyle", "contentStyleClass", "modal", "closeOnEscape", "dismissableMask", "rtl", "closable", "responsive", "appendTo", "breakpoints", "styleClass", "maskStyleClass", "showHeader", "breakpoint", "blockScroll", "autoZIndex", "baseZIndex", "minX", "minY", "focusOnShow", "maximizable", "keepInViewport", "focusTrap", "transitionOptions", "closeIcon", "closeAriaLabel", "closeTabindex", "minimizeIcon", "maximizeIcon", "visible", "style", "position"], outputs: ["onShow", "onHide", "visibleChange", "onResizeInit", "onResizeEnd", "onDragEnd", "onMaximize"] }, { type: i8.Checkbox, selector: "p-checkbox", inputs: ["value", "name", "disabled", "binary", "label", "ariaLabelledBy", "ariaLabel", "tabindex", "inputId", "style", "styleClass", "labelStyleClass", "formControl", "checkboxIcon", "readonly", "required", "trueValue", "falseValue"], outputs: ["onChange"] }, { type: i9.Dropdown, selector: "p-dropdown", inputs: ["scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "selectId", "dataKey", "filterBy", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "virtualScroll", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "disabled", "options", "filterValue"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear"] }], directives: [{ type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i10.InputText, selector: "[pInputText]" }, { type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConfigLoginSettingsComponent$1, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-config-login-settings',
                    templateUrl: './config-login-settings.component.html',
                    styleUrls: ['./config-login-settings.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: AlertService }, { type: i2$1.FormBuilder }, { type: ConfigurationSettingsService }, { type: DataStoreService }]; } });

class ConfigLoginSettingsComponent {
    constructor(permissionStore, _storeservice) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
        this.RBACORG = new RBACINFO();
    }
    ngOnInit() {
        this.configureEvent.subscribe((val) => {
            this.RBACORG = val.RBACORG;
            this.PERMISSION = val.PERMISSION;
            this._storeservice.setData('RBACORG', this.RBACORG);
            this.permissionStore.setStore(this.PERMISSION);
            this._storeservice.setData('HTTPSERVICE', val.HTTPSERVICE);
            this._storeservice.setData('AUTHSERVICE', val.AUTHSERVICE);
        });
    }
}
ConfigLoginSettingsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConfigLoginSettingsComponent, deps: [{ token: PermissionStore }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
ConfigLoginSettingsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConfigLoginSettingsComponent, selector: "config-login-settings", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", configureEvent: "configureEvent" }, ngImport: i0, template: `
    <lib-config-login-settings></lib-config-login-settings>
  `, isInline: true, components: [{ type: ConfigLoginSettingsComponent$1, selector: "lib-config-login-settings" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConfigLoginSettingsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'config-login-settings',
                    template: `
    <lib-config-login-settings></lib-config-login-settings>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: PermissionStore }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], configureEvent: [{
                type: Input
            }] } });

class AppService {
    constructor() {
        this.currentState = new Subject();
        this.currentValue = new BehaviorSubject({});
        this.getValue = this.currentValue.asObservable();
    }
    addValue(key, value) {
        this.currentState.next({ key, value });
    }
    setValue(key, value) {
        this.currentValue.next({ key, value });
    }
}
AppService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AppService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AppService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AppService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AppService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

/**
 * Simple logger system with the possibility of registering custom outputs.
 *
 * 4 different log levels are provided, with corresponding methods:
 * - debug   : for debug information
 * - info    : for informative status of the application (success, ...)
 * - warning : for non-critical errors that do not prevent normal application behavior
 * - error   : for critical errors that prevent normal application behavior
 *
 * Example usage:
 * ```
 * import { Logger } from 'app/core/logger.service';
 *
 * const log = new Logger('myFile');
 * ...
 * log.debug('something happened');
 * ```
 *
 * To disable debug and info logs in production, add this snippet to your root component:
 * ```
 * export class AppComponent implements OnInit {
 *   ngOnInit() {
 *     if (environment.production) {
 *       Logger.enableProductionMode();
 *     }
 *     ...
 *   }
 * }
 *
 * If you want to process logs through other outputs than console, you can add LogOutput functions to Logger.outputs.
 */
/**
 * The possible log levels.
 * LogLevel.Off is never emitted and only used with Logger.level property to disable logs.
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Off"] = 0] = "Off";
    LogLevel[LogLevel["Error"] = 1] = "Error";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Info"] = 3] = "Info";
    LogLevel[LogLevel["Debug"] = 4] = "Debug";
})(LogLevel || (LogLevel = {}));
class Logger {
    constructor(source) {
        this.source = source;
    }
    /**
     * Enables production mode.
     * Sets logging level to LogLevel.Warning.
     */
    static enableProductionMode() {
        Logger.level = LogLevel.Warning;
    }
    /**
     * Logs messages or objects  with the debug level.
     * Works the same as console.log().
     */
    debug(...objects) {
        this.log(console.log, LogLevel.Debug, objects);
    }
    /**
     * Logs messages or objects  with the info level.
     * Works the same as console.log().
     */
    info(...objects) {
        this.log(console.info, LogLevel.Info, objects);
    }
    /**
     * Logs messages or objects  with the warning level.
     * Works the same as console.log().
     */
    warn(...objects) {
        this.log(console.warn, LogLevel.Warning, objects);
    }
    /**
     * Logs messages or objects  with the error level.
     * Works the same as console.log().
     */
    error(...objects) {
        this.log(console.error, LogLevel.Error, objects);
    }
    log(func, level, objects) {
        if (level <= Logger.level) {
            const log = this.source ? ['[' + this.source + ']'].concat(objects) : objects;
            func.apply(console, log);
            Logger.outputs.forEach(output => output.apply(output, [this.source, level, ...objects]));
        }
    }
}
/**
 * Current logging level.
 * Set it to LogLevel.Off to disable logs completely.
 */
Logger.level = LogLevel.Debug;
/**
 * Additional log outputs.
 */
Logger.outputs = [];

const credentialsKey = 'jwt-token';
/**
 * Provides storage for authentication credentials.
 * The Credentials interface should be replaced with proper implementation.
 */
class CredentialsService {
    constructor() {
        this.token = null;
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
}
CredentialsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CredentialsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CredentialsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CredentialsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CredentialsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

const log = new Logger('AuthenticationGuard');
class AuthGuard {
    constructor(router, credentialsService) {
        this.router = router;
        this.credentialsService = credentialsService;
    }
    canActivate(_route, _state) {
        if (this.credentialsService.isAuthenticated()) {
            return true;
        }
        log.debug('Not authenticated, redirecting and adding redirect url...');
        this.router.navigate(['/login']);
        return false;
    }
}
AuthGuard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthGuard, deps: [{ token: i1.Router }, { token: CredentialsService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthGuard.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthGuard, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: CredentialsService }]; } });

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
}
LocalStorageService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LocalStorageService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LocalStorageService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LocalStorageService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LocalStorageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class StorageService {
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
}
LocalService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LocalService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LocalService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LocalService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LocalService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class MicrostrategyService {
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
                gotoLibrary: permissions === null || permissions === void 0 ? void 0 : permissions.ANA_LIBRARY,
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
            getLoginToken: () => __awaiter(this, void 0, void 0, function* () {
                const response = yield this.getAuthToken().toPromise();
                return response.headers.get('x-mstr-authtoken');
            })
        })
            .catch((_err) => this.alertService.error(`Failed to connect ${this.environment.mstrURL}`));
    }
    getLibraryDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield this.getAuthToken().toPromise();
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
        });
    }
}
MicrostrategyService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MicrostrategyService, deps: [{ token: i1$1.HttpClient }, { token: AlertService }, { token: PermissionStore }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
MicrostrategyService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MicrostrategyService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MicrostrategyService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$1.HttpClient }, { type: AlertService }, { type: PermissionStore }, { type: DataStoreService }]; } });

class ThemeService {
    constructor() {
        // This is intentional
    }
    setActiveTheme(theme) {
        this.active = theme;
        Object.keys(this.active.properties).forEach(property => {
            document.documentElement.style.setProperty(property, this.active.properties[property]);
        });
    }
    setActiveFont(Fontset) {
        this.activeFont = Fontset;
        if (this.activeFont) {
            Object.keys(this.activeFont.properties).forEach(property => {
                document.documentElement.style.setProperty(property, this.activeFont.properties[property]);
            });
        }
    }
}
ThemeService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ThemeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ThemeService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ThemeService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ThemeService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class PermissionDirective {
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
}
PermissionDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: PermissionStore }], target: i0.ɵɵFactoryTarget.Directive });
PermissionDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: PermissionDirective, selector: "[fieldKey]", inputs: { fieldKey: "fieldKey" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fieldKey]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: PermissionStore }]; }, propDecorators: { fieldKey: [{
                type: Input
            }] } });

class ShowFieldDirective {
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
}
ShowFieldDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShowFieldDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: PermissionStore }], target: i0.ɵɵFactoryTarget.Directive });
ShowFieldDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: ShowFieldDirective, selector: "[showField]", inputs: { showField: "showField" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShowFieldDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[showField]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: PermissionStore }]; }, propDecorators: { showField: [{
                type: Input
            }] } });

class DirectivesModule {
}
DirectivesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DirectivesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DirectivesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DirectivesModule, declarations: [PermissionDirective, ShowFieldDirective], imports: [CommonModule], exports: [PermissionDirective, ShowFieldDirective] });
DirectivesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DirectivesModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DirectivesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [PermissionDirective, ShowFieldDirective],
                    imports: [CommonModule],
                    exports: [PermissionDirective, ShowFieldDirective]
                }]
        }] });

class AlertModule {
}
AlertModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AlertModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertModule, declarations: [AlertComponent], imports: [CommonModule], exports: [AlertComponent] });
AlertModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [AlertComponent],
                    exports: [AlertComponent]
                }]
        }] });

class PicsConfigLoginSettingsModule {
}
PicsConfigLoginSettingsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsConfigLoginSettingsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PicsConfigLoginSettingsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsConfigLoginSettingsModule, declarations: [ConfigLoginSettingsComponent$1], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        TabMenuModule,
        TabViewModule,
        TreeSelectModule,
        CheckboxModule,
        DropdownModule,
        CardModule,
        ConfirmDialogModule,
        AccordionModule,
        MessageModule,
        TableModule,
        InputTextModule,
        CalendarModule,
        EditorModule,
        FieldsetModule,
        ButtonModule,
        RadioButtonModule,
        InputTextareaModule,
        InputMaskModule,
        StepsModule,
        ToastModule,
        RippleModule,
        AvatarModule,
        BadgeModule,
        MultiSelectModule,
        InputSwitchModule,
        ProgressSpinnerModule,
        SpeedDialModule,
        OrderListModule,
        FileUploadModule,
        DialogModule,
        PasswordModule,
        KnobModule,
        SidebarModule,
        ContextMenuModule,
        ConfirmPopupModule,
        DirectivesModule,
        AlertModule], exports: [ConfigLoginSettingsComponent$1] });
PicsConfigLoginSettingsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsConfigLoginSettingsModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NgbModule,
            TabMenuModule,
            TabViewModule,
            TreeSelectModule,
            CheckboxModule,
            DropdownModule,
            CardModule,
            ConfirmDialogModule,
            AccordionModule,
            MessageModule,
            TableModule,
            InputTextModule,
            CalendarModule,
            EditorModule,
            FieldsetModule,
            ButtonModule,
            RadioButtonModule,
            InputTextareaModule,
            InputMaskModule,
            StepsModule,
            ToastModule,
            RippleModule,
            AvatarModule,
            BadgeModule,
            MultiSelectModule,
            InputSwitchModule,
            ProgressSpinnerModule,
            SpeedDialModule,
            OrderListModule,
            FileUploadModule,
            DialogModule,
            PasswordModule,
            KnobModule,
            SidebarModule,
            ContextMenuModule,
            ConfirmPopupModule,
            DirectivesModule,
            AlertModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsConfigLoginSettingsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ConfigLoginSettingsComponent$1
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgbModule,
                        TabMenuModule,
                        TabViewModule,
                        TreeSelectModule,
                        CheckboxModule,
                        DropdownModule,
                        CardModule,
                        ConfirmDialogModule,
                        AccordionModule,
                        MessageModule,
                        TableModule,
                        InputTextModule,
                        CalendarModule,
                        EditorModule,
                        FieldsetModule,
                        ButtonModule,
                        RadioButtonModule,
                        InputTextareaModule,
                        InputMaskModule,
                        StepsModule,
                        ToastModule,
                        RippleModule,
                        AvatarModule,
                        BadgeModule,
                        MultiSelectModule,
                        InputSwitchModule,
                        ProgressSpinnerModule,
                        SpeedDialModule,
                        OrderListModule,
                        FileUploadModule,
                        DialogModule,
                        PasswordModule,
                        KnobModule,
                        SidebarModule,
                        ContextMenuModule,
                        ConfirmPopupModule,
                        DirectivesModule,
                        AlertModule
                    ],
                    exports: [ConfigLoginSettingsComponent$1],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });

class ShareDataService {
    constructor() {
        this.data = new BehaviorSubject('');
    }
}
ShareDataService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShareDataService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ShareDataService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShareDataService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShareDataService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });

class CardiConfigLoginSettingsModule {
}
CardiConfigLoginSettingsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardiConfigLoginSettingsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CardiConfigLoginSettingsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardiConfigLoginSettingsModule, declarations: [ConfigLoginSettingsComponent], imports: [PicsConfigLoginSettingsModule], exports: [ConfigLoginSettingsComponent] });
CardiConfigLoginSettingsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardiConfigLoginSettingsModule, providers: [
        AuthGuard,
        AppService,
        CredentialsService,
        LocalStorageService,
        LocalService,
        MicrostrategyService,
        ThemeService,
        AlertService,
        ConfirmationService,
        ConfigurationSettingsService,
        PermissionStore,
        ShareDataService,
        DataStoreService
    ], imports: [[
            PicsConfigLoginSettingsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardiConfigLoginSettingsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ConfigLoginSettingsComponent
                    ],
                    imports: [
                        PicsConfigLoginSettingsModule
                    ],
                    exports: [
                        ConfigLoginSettingsComponent
                    ],
                    providers: [
                        AuthGuard,
                        AppService,
                        CredentialsService,
                        LocalStorageService,
                        LocalService,
                        MicrostrategyService,
                        ThemeService,
                        AlertService,
                        ConfirmationService,
                        ConfigurationSettingsService,
                        PermissionStore,
                        ShareDataService,
                        DataStoreService
                    ]
                }]
        }] });

/*
 * Public API Surface of config-login-settings
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CardiConfigLoginSettingsModule, ConfigLoginSettingsComponent, ConfigLoginSettingsService };
//# sourceMappingURL=pics-core-config-login-settings.js.map
