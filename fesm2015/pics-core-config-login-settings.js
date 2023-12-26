import * as i0 from '@angular/core';
import { Injectable, Component, Input, Directive, NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BehaviorSubject, of, Subject, forkJoin } from 'rxjs';
import * as i5 from '@angular/forms';
import { Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { __awaiter } from 'tslib';
import * as i1 from '@angular/router';
import { NavigationStart } from '@angular/router';
import 'rxjs/add/operator/map';
import * as i1$1 from '@angular/common/http';
import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
import * as i1$2 from 'ngxf-uploader';
import { throwError } from 'rxjs/internal/observable/throwError';
import { map, tap, mergeMap } from 'rxjs/operators';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i9 from 'primeng/card';
import { CardModule } from 'primeng/card';
import * as i10 from 'primeng/dialog';
import { DialogModule } from 'primeng/dialog';
import * as i11 from 'primeng/checkbox';
import { CheckboxModule } from 'primeng/checkbox';
import * as i12 from 'primeng/dropdown';
import { DropdownModule } from 'primeng/dropdown';
import * as i13 from 'primeng/inputtext';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmationService } from 'primeng/api';
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

class DynamicTabPageConfig {
}
DynamicTabPageConfig.EndPoint = {
    Page: {
        getActivePage: '/pageversion/{id}',
        getPage: '/page',
        getPageById: '/page/{id}',
        getResponseByPageId: '/app/formresponse/{responseId}/getByPageId/{pageId}',
        createFormResponse: '/app/formresponse/create',
        patchFormResponse: '/app/formresponse',
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
        createAttachment: '/app/formresponseattachment/create'
    }
};

class HttpService {
    constructor(http, _storeservice) {
        this.http = http;
        this._storeservice = _storeservice;
        this.overrideUrl = true;
        this.baseUrl = '';
        this.headers = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('role', 'role=CP_PUBLIC');
        this.showSpinner = new BehaviorSubject(false);
        this.outsideShowSpinner = new BehaviorSubject(false);
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
    getAuthValidation(apiRoute, token) {
        return this.http.get(`${this.url + apiRoute}`, {
            headers: this.getHttpNewHeaders()
        });
    }
    getAuthAccessKey(apiRoute, body) {
        return this.http.post(`${this.url + apiRoute}`, body, {
            headers: this.getHttpNewHeaders()
        });
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
        var _a, _b;
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message) ? (_b = error === null || error === void 0 ? void 0 : error.error) === null || _b === void 0 ? void 0 : _b.message : error.message}`;
        }
        return throwError(errorMessage);
    }
    getToken() {
        const token = this.tokenKey ? this.tokenKey : 'jwt-token';
        return sessionStorage.getItem(token);
    }
}
HttpService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HttpService, deps: [{ token: i1$1.HttpClient }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
HttpService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HttpService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HttpService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1$1.HttpClient }, { type: DataStoreService }]; } });

class DynamicTabPageService {
    constructor(uploadService, httpService) {
        this.uploadService = uploadService;
        this.httpService = httpService;
        this.isPageDesign = new BehaviorSubject(false);
        this.observePage = this.isPageDesign.asObservable();
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
        var _a;
        return this.httpService.post(DynamicTabPageConfig.EndPoint.Notification.createSurveyConfig
            .replace('{id}', (_a = history === null || history === void 0 ? void 0 : history.state) === null || _a === void 0 ? void 0 : _a.usersurveyid)
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
}
DynamicTabPageService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DynamicTabPageService, deps: [{ token: i1$2.NgxfUploaderService }, { token: HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
DynamicTabPageService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DynamicTabPageService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DynamicTabPageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$2.NgxfUploaderService }, { type: HttpService }]; } });

class PageHeaderURL {
}
PageHeaderURL.EndPoints = {
    page: {
        getAuthorizedPages: '/platform/page-designer/page/organization/{orgid}?returnUserPage=true&excludeNoActiveVersionPages=true'
    }
};

class PageHeaderService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getAuthorizedPages(orgid) {
        return this.httpService.get(PageHeaderURL.EndPoints.page.getAuthorizedPages.replace('{orgid}', orgid));
    }
}
PageHeaderService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageHeaderService, deps: [{ token: HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
PageHeaderService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageHeaderService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageHeaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: HttpService }]; } });

class AuthState {
}

class AuthStore extends Store {
    constructor(httpService) {
        super(new AuthState());
        this.httpService = httpService;
    }
    addAuthInfo(user) {
        this.setState(Object.assign(Object.assign({}, this.state), { user }));
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
}
AuthStore.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthStore, deps: [{ token: HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthStore.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthStore });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthStore, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: HttpService }]; } });

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

class AuthService {
    constructor(injector, httpService, store, _router, credentialsService, localstore) {
        this.httpService = httpService;
        this.store = store;
        this._router = _router;
        this.credentialsService = credentialsService;
        this.localstore = localstore;
        this.orgInfo = new BehaviorSubject('');
        this.currentOrgInfo = this.orgInfo.asObservable();
        this.currentMenu = new BehaviorSubject('');
        this.currentMenuInfo = this.currentMenu.asObservable();
        this.alertService = injector.get(AlertService);
        this.dynamicTabPageService = injector.get(DynamicTabPageService);
        this.pageHeaderService = injector.get(PageHeaderService);
    }
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
    checkDynamicPagePermission(pageId) {
        return __awaiter(this, void 0, void 0, function* () {
            const dynamicPages = yield this.getAuthorizedPages();
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
        });
    }
    getCurrentOrg() {
        return this.getUserOrgList()
            .toPromise()
            .then(response => {
            return response['data'][0].id;
        });
    }
    getAuthorizedPages() {
        return __awaiter(this, void 0, void 0, function* () {
            const orgId = yield this.getCurrentOrg();
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
        });
    }
    getCustomPage(page) {
        if (page.activeVersion.tabconfig) {
            const routingTab = JSON.parse(page.activeVersion.tabconfig).filter(x => x.type === 'ROUTING');
            return routingTab.length && page;
        }
    }
    validateToken(token, requestObject) {
        this.credentialsService.setCredentials(token);
        return this.httpService.getAuthAccessKey(AuthURL.EndPoints.auth.user.getTokenValidationUrl, requestObject).pipe(mergeMap((res) => {
            if (res['data'] === 'MFA_CODE_SEND') {
                return of(res['data']);
            }
            this.credentialsService.setCredentials(res['data'].token);
            sessionStorage.setItem('refreshToken', res['data'].refreshToken);
            sessionStorage.setItem('email', res['data'].email);
            sessionStorage.setItem('id', res['data'].id);
            sessionStorage.setItem('username', res['data'].name);
            return this.getUserInfo();
        }));
    }
    generateLoginUrl() {
        return this.httpService.get(AuthURL.EndPoints.auth.user.generateLoginUrl);
    }
}
AuthService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthService, deps: [{ token: i0.Injector }, { token: HttpService }, { token: AuthStore }, { token: i1.Router }, { token: CredentialsService }, { token: LocalService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: HttpService }, { type: AuthStore }, { type: i1.Router }, { type: CredentialsService }, { type: LocalService }]; } });

class AttachmentsService {
    constructor(http) {
        this.http = http;
        // This is intentional
    }
    getAttachmentReferral(referralid) {
        return this.http.get(AttachmentConfig$1.EndPoint.Attachments.GetAttachmentReferral + '/' + referralid);
    }
    getCategoryLookup(name) {
        return this.http.get(AttachmentConfig$1.EndPoint.Attachments.GetCategoryLookup + '/' + name);
    }
    uploadKey(objparams) {
        return this.http.post(AttachmentConfig$1.EndPoint.Attachments.UploadKey, objparams);
    }
    downloadKey(objparams) {
        return this.http.post(AttachmentConfig$1.EndPoint.Attachments.DownloadKey, objparams);
    }
    postAttachment(objparams) {
        return this.http.post(AttachmentConfig$1.EndPoint.Attachments.PostAttachment, objparams);
    }
    putAttachment(objparams, attachmentId) {
        console.log(AttachmentConfig$1.EndPoint.Attachments.PutAttachment + '/' + attachmentId, objparams);
        return this.http.patch(AttachmentConfig$1.EndPoint.Attachments.PutAttachment + '/' + attachmentId, objparams);
    }
}
AttachmentsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AttachmentsService, deps: [{ token: HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
AttachmentsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AttachmentsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AttachmentsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: HttpService }]; } });

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
    constructor(httpService) {
        this.httpService = httpService;
        // This is intentional
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
ConfigurationSettingsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConfigurationSettingsService, deps: [{ token: HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
ConfigurationSettingsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConfigurationSettingsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConfigurationSettingsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: HttpService }]; } });

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
    constructor(authService, alertService, attachmentService, httpService, _formBuilder, _configurationSettingsService, _storeservice) {
        this.authService = authService;
        this.alertService = alertService;
        this.attachmentService = attachmentService;
        this.httpService = httpService;
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
        // this.orgSubs = this.authService.orgInfo.subscribe(o => {
        //   this.orgId = o;
        //   if (this.orgId) {
        //     this.getRolesList();
        //   }
        // });
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
                        const urlPathLogo = this.urlPathLogo ? this.urlPathLogo.split('?')[0] : '';
                        this.thumbnailLogo = urlPathLogo;
                        this.configRegistrationForm.patchValue({
                            logo: urlPathLogo
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
            this.attachmentService.uploadKey(this.imageDataBanner).subscribe((res) => {
                this.urlPathBanner = res.data;
                const uploadAttachment = document.getElementById('file1');
                const uploadAttachmentDetails = uploadAttachment.files[0];
                this.httpService
                    .putUpload(this.urlPathBanner, uploadAttachmentDetails, uploadAttachmentDetails.type)
                    .subscribe((_resp) => {
                    this.alertService.success('Uploaded Successfully!');
                    const reader = new FileReader();
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
ConfigLoginSettingsComponent$1.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConfigLoginSettingsComponent$1, deps: [{ token: AuthService }, { token: AlertService }, { token: AttachmentsService }, { token: HttpService }, { token: i5.FormBuilder }, { token: ConfigurationSettingsService }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
ConfigLoginSettingsComponent$1.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConfigLoginSettingsComponent$1, selector: "lib-config-login-settings", ngImport: i0, template: "<app-alert></app-alert>\r\n<p-card styleClass=\"w-100\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 col-12\">\r\n      <div class=\"customizer customizer-styling customizer-styling-skin skin\">\r\n        <h6 class=\"font-weight-bold mb-3\">Choose Login Layout</h6>\r\n        <div class=\"d-flex justify-content-start align-items-center\">\r\n          <!-- Layout 1 -->\r\n          <div class=\"custom-control custom-radio mr-4 mb-md-0 mb-3\">\r\n            <figure class=\"active mb-0\">\r\n              <label role=\"link\" class=\"mb-0 layout-select\" for=\"layout1\">\r\n                <img src=\"../../../../assets/images/Layout.jpg\" class=\"img-fluid\" alt=\"layout1\" />\r\n              </label>\r\n              <figcaption>\r\n                <input\r\n                  type=\"radio\"\r\n                  id=\"layout1\"\r\n                  name=\"layout\"\r\n                  class=\"custom-control-input layout-name\"\r\n                  [attr.checked]=\"true\"\r\n                  value=\"Layout 1\" />\r\n                <label class=\"custom-control-label mt-2 mb-0\" for=\"layout1\">Layout 1</label>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</p-card>\r\n\r\n<p-card styleClass=\"w-100 mt-3\">\r\n  <div class=\"customizer\" [formGroup]=\"configRegistrationForm\">\r\n    <h6 class=\"font-weight-bold mb-3\">Configure Login</h6>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 col-sm-6 col-12 form-group\">\r\n        <label class=\"intake-form-labels\" for=\"organizationName\">Organization Title</label>\r\n        <input\r\n          class=\"form-control\"\r\n          type=\"text\"\r\n          placeholder=\"Title Name\"\r\n          id=\"organizationName\"\r\n          autocomplete=\"off\"\r\n          formControlName=\"organization_title\"\r\n          pInputText />\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-6 col-12 form-group\">\r\n        <label class=\"intake-form-labels mb-0\" for=\"thumbnailBanner\">Upload Banner</label>\r\n        <div *ngIf=\"!thumbnailBanner\" id=\"thumbnailBanner\">\r\n          <figure class=\"mt-2 mb-0 pic-upload justify-content-md-center\">\r\n            <label for=\"file1\" class=\"btn btn-primary file-upload-btn mb-0\">\r\n              <span class=\"d-flex align-items-center justify-content-center\">\r\n                <span class=\"aterial-icon material-symbols-outlined text-white mr-2\">cloud_upload</span>\r\n                <span>Upload</span>\r\n              </span>\r\n            </label>\r\n            <input\r\n              type=\"file\"\r\n              id=\"file1\"\r\n              aria-hidden=\"true\"\r\n              style=\"display: none\"\r\n              (change)=\"handleFileInputBanner($event)\" />\r\n          </figure>\r\n          <p><small>Image size max 1MB (min-width 1100px and min-height 800px)</small></p>\r\n        </div>\r\n        <div *ngIf=\"thumbnailBanner\">\r\n          <div class=\"d-flex align-items-center justify-content-between p-1 bg-light\">\r\n            <span role=\"button\" (click)=\"showUploadedBanner()\" title=\"Zoom\">\r\n              <img width=\"45\" height=\"45\" [src]=\"thumbnailBanner || 'assets/images/user-empty.png'\" alt=\"upload\" />\r\n            </span>\r\n            <span>\r\n              <em\r\n                role=\"button\"\r\n                class=\"fa fa-search-plus fa-lg text-primary mr-2\"\r\n                (click)=\"showUploadedBanner()\"\r\n                title=\"Zoom\"></em>\r\n              <em\r\n                role=\"button\"\r\n                class=\"fa fa-trash fa-lg text-danger mr-2\"\r\n                (click)=\"removeThumbnailBanner()\"\r\n                title=\"Delete\"></em>\r\n            </span>\r\n          </div>\r\n          <p-dialog header=\"Banner Preview\" [(visible)]=\"bannerVisible\" [style]=\"{ width: '50vw' }\">\r\n            <img class=\"img-fluid\" [attr.src]=\"thumbnailBanner || 'assets/images/user-empty.png'\" alt=\"upload\" />\r\n          </p-dialog>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-6 col-122 form-group\">\r\n        <label class=\"intake-form-labels mb-0\" for=\"thumbnailLogo\">Upload Logo</label>\r\n        <div *ngIf=\"!thumbnailLogo\" id=\"thumbnailLogo\">\r\n          <figure class=\"mt-2 mb-0 pic-upload justify-content-md-center\">\r\n            <label for=\"file\" class=\"btn btn-primary file-upload-btn mb-0\">\r\n              <span class=\"d-flex align-items-center justify-content-center\">\r\n                <span class=\"aterial-icon material-symbols-outlined text-white mr-2\">cloud_upload</span>\r\n                <span>Upload</span>\r\n              </span>\r\n            </label>\r\n            <input type=\"file\" id=\"file\" aria-hidden=\"true\" style=\"display: none\" (change)=\"handleFileInput($event)\" />\r\n          </figure>\r\n          <p><small>Image size max 120kb (min-width 400px and min-height 60px)</small></p>\r\n        </div>\r\n        <div *ngIf=\"thumbnailLogo\">\r\n          <div class=\"d-flex align-items-center justify-content-between p-1 bg-light\">\r\n            <span role=\"button\" (click)=\"showUploadedLogo()\" title=\"Zoom\">\r\n              <img width=\"45\" height=\"45\" [attr.src]=\"thumbnailLogo || 'assets/images/user-empty.png'\" alt=\"upload\" />\r\n            </span>\r\n            <span>\r\n              <em\r\n                role=\"button\"\r\n                class=\"fa fa-search-plus fa-lg text-primary mr-2\"\r\n                (click)=\"showUploadedLogo()\"\r\n                title=\"Zoom\"></em>\r\n              <em\r\n                role=\"button\"\r\n                class=\"fa fa-trash fa-lg text-danger mr-2\"\r\n                (click)=\"removeThumbnail()\"\r\n                title=\"Delete\"></em>\r\n            </span>\r\n          </div>\r\n          <p-dialog header=\"Logo Preview\" [(visible)]=\"visible\" [style]=\"{ width: '50vw' }\">\r\n            <img class=\"img-fluid\" [src]=\"thumbnailLogo || 'assets/images/user-empty.png'\" alt=\"upload\" />\r\n          </p-dialog>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</p-card>\r\n\r\n<p-card styleClass=\"w-100 mt-3\">\r\n  <div class=\"customizer\" [formGroup]=\"configRegistrationForm\">\r\n    <h6 class=\"font-weight-bold mb-3\">Configure Registration</h6>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 col-sm-6 col-12 mb-md-4 mb-3\">\r\n        <p-checkbox inputId=\"registrationid\" [binary]=\"true\" formControlName=\"registration\"></p-checkbox>\r\n        <label class=\"intake-form-labels mb-0 ml-2\" for=\"registrationid\">Enable Registration?</label>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-6 col-12 form-group\">\r\n        <label class=\"intake-form-labels\" for=\"selectOrganization\">Select Organization</label>\r\n        <p-dropdown\r\n          styleClass=\"w-100\"\r\n          optionLabel=\"name\"\r\n          optionValue=\"id\"\r\n          [options]=\"organizations\"\r\n          placeholder=\"Select Role\"\r\n          id=\"selectOrganization\"\r\n          formControlName=\"organizationid\"\r\n          ariaLabelledBy=\"roleforregistration\">\r\n        </p-dropdown>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-6 col-12 form-group\">\r\n        <label class=\"intake-form-labels\" for=\"roleforregistration\">Select Role</label>\r\n        <p-dropdown\r\n          styleClass=\"w-100\"\r\n          optionLabel=\"name\"\r\n          optionValue=\"id\"\r\n          [options]=\"userRoles\"\r\n          placeholder=\"Select Role\"\r\n          id=\"roleforregistration\"\r\n          formControlName=\"role_for_registration\"\r\n          ariaLabelledBy=\"roleforregistration\">\r\n        </p-dropdown>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-6 col-12 form-group\">\r\n        <label class=\"intake-form-labels\" for=\"templateforregistration\">Select Template</label>\r\n        <p-dropdown\r\n          styleClass=\"w-100\"\r\n          optionLabel=\"name\"\r\n          optionValue=\"id\"\r\n          [options]=\"emailTemplate\"\r\n          placeholder=\"Select Template\"\r\n          id=\"templateforregistration\"\r\n          formControlName=\"template_for_registration\"\r\n          ariaLabelledBy=\"templateforregistration\">\r\n        </p-dropdown>\r\n      </div>\r\n    </div>\r\n    <div class=\"text-md-right mt-2\">\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveConfig()\">\r\n        {{ updateButton ? 'Update' : 'Submit' }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</p-card>\r\n", styles: ["@charset \"UTF-8\";:host ::ng-deep .p-card .p-card-body .p-card-content{padding:0}.customizer .custom-checkbox.custom-control,.customizer .custom-radio.custom-control{padding-left:0}.customizer .custom-checkbox.custom-control .theme-select,.customizer .custom-radio.custom-control .theme-select{border:2px solid #ddd;border-radius:7px}.customizer .custom-checkbox.custom-control .active .theme-select,.customizer .custom-radio.custom-control .active .theme-select{border-color:var(--primary)}.customizer .custom-checkbox .custom-control-input:checked~.custom-control-label:before,.customizer .custom-radio .custom-control-input:checked~.custom-control-label:before{content:\"\\f00c\";font-family:\"FontAwesome\",sans-serif;color:var(--hover-text);background-color:var(--btn);border-color:var(--btn);font-size:10px;display:flex;align-items:center;padding:2px}.customizer .custom-checkbox label,.customizer .custom-radio label{cursor:pointer}.customizer .custom-checkbox .font-box,.customizer .custom-radio .font-box{display:flex;justify-content:center;align-items:center;width:150px;height:120px;color:var(--text-dark)}.customizer .custom-checkbox .custom-control-label,.customizer .custom-radio .custom-control-label{position:relative;vertical-align:middle;font-size:var(--base-font-size);line-height:normal;color:var(--text-dark);cursor:pointer;padding-left:25px}.customizer .custom-checkbox .custom-control-label:after,.customizer .custom-radio .custom-control-label:after{border-color:var(--btn)}.customizer .custom-checkbox .custom-control-label:before,.customizer .custom-checkbox .custom-control-label:after,.customizer .custom-radio .custom-control-label:before,.customizer .custom-radio .custom-control-label:after{background-image:none;width:16px;height:16px;left:0;box-shadow:none;top:0}.customizer hr{border-color:var(--table-border)}.customizer .customizer-header{background:var(--background-color);color:var(--text-dark)}.customizer .customizer-header .customizer-close{position:absolute;right:.6rem;top:.6rem;padding:7px;width:auto;z-index:10;color:var(--text-dark);cursor:pointer}.customizer .customizer-header .customizer-close .material-icon{font-size:1.5rem}.customizer .customizer-header .customizer-close:hover{color:var(--btn)}.customizer h4{font-size:var(--font-15);font-weight:600;color:var(--text-dark)}.customizer h6{font-size:var(--font-14);color:var(--text-dark)}.customizer p{font-size:var(--base-font-size);font-weight:400;color:var(--text-dark)}.customizer .customizer-toggle{background:var(--btn);color:var(--hover-text);box-shadow:-3px 0 8px #22292f1a;border-top-left-radius:6px;border-bottom-left-radius:6px;position:absolute;top:50%;width:38px;height:38px;left:-39px;text-align:center;line-height:40px;border-left:1px solid var(--checkbox-border);cursor:pointer}.customizer .customizer-toggle .fa-cog{font-size:var(--font-15)}.customizer .customizer-toggle:hover{text-decoration:none}.customizer .customizer-styling-skin.skin .custom-control .custom-control-label{position:relative;padding-left:25px}.customizer .custom-control:first-child .font-box{font-size:var(--font-21);font-weight:400}.customizer .custom-control:last-child .font-box{font-size:var(--font-26);font-weight:600}\n"], components: [{ type: AlertComponent, selector: "app-alert" }, { type: i9.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { type: i10.Dialog, selector: "p-dialog", inputs: ["header", "draggable", "resizable", "positionLeft", "positionTop", "contentStyle", "contentStyleClass", "modal", "closeOnEscape", "dismissableMask", "rtl", "closable", "responsive", "appendTo", "breakpoints", "styleClass", "maskStyleClass", "showHeader", "breakpoint", "blockScroll", "autoZIndex", "baseZIndex", "minX", "minY", "focusOnShow", "maximizable", "keepInViewport", "focusTrap", "transitionOptions", "closeIcon", "closeAriaLabel", "closeTabindex", "minimizeIcon", "maximizeIcon", "visible", "style", "position"], outputs: ["onShow", "onHide", "visibleChange", "onResizeInit", "onResizeEnd", "onDragEnd", "onMaximize"] }, { type: i11.Checkbox, selector: "p-checkbox", inputs: ["value", "name", "disabled", "binary", "label", "ariaLabelledBy", "ariaLabel", "tabindex", "inputId", "style", "styleClass", "labelStyleClass", "formControl", "checkboxIcon", "readonly", "required", "trueValue", "falseValue"], outputs: ["onChange"] }, { type: i12.Dropdown, selector: "p-dropdown", inputs: ["scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "selectId", "dataKey", "filterBy", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "virtualScroll", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "disabled", "options", "filterValue"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear"] }], directives: [{ type: i5.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i5.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i5.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i13.InputText, selector: "[pInputText]" }, { type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConfigLoginSettingsComponent$1, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-config-login-settings',
                    templateUrl: './config-login-settings.component.html',
                    styleUrls: ['./config-login-settings.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: AuthService }, { type: AlertService }, { type: AttachmentsService }, { type: HttpService }, { type: i5.FormBuilder }, { type: ConfigurationSettingsService }, { type: DataStoreService }]; } });

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

const themeList = [
    {
        name: 'Default',
        image: '/assets/images/skin_default.svg',
        key: 'default',
        properties: {
            '--background-color': '#f3f3f3',
            '--header-bg': '#464185',
            '--navigation': '#fff',
            '--primary': '#3e397e',
            '--checkbox-border': '#3e397e',
            '--text-dark': '#000',
            '--label-text': '#2c2863',
            '--hover-text': '#fff',
            '--bg-light': '#fff',
            '--forms': '#fff',
            '--nav-text': '#000',
            '--light-gray': '#696969',
            '--material-icons': '#2c2863',
            '--highlight-list': '#E3F2FD',
            '--table-header': '#f9f9f9',
            '--table-odd': '#f7f7f7',
            '--table-border': '#ddd',
            '--table-hover': '#f6f5ff',
            '--btn': '#3e397e',
            '--menu-panel': '#2c2863',
            '--border-trans': 'transparent',
            '--btn-hover': '#2c2863',
            '--btn-dark': '#2c2863',
            '--dropdown-list': '#fff',
            '--btncancel': '#3e397e',
            '--primary-light': '#6e6b93',
            '--primary-dark': '#282462 ',
            '--light-d-light': '#fff',
            '--ldl-text': '#fff',
            '--light-d-accent': '#fff',
            '--readonly-bg': 'rgb(229 229 229 / 45%)',
            '--var-icon-font': '"FILL" 0, "wght" 200, "GRAD" 0, "opsz" 48',
            '--rocket-icon': '/assets/images/rocket-ship.svg'
        }
    },
    {
        name: 'Light',
        image: '/assets/images/skin_light.svg',
        key: 'light',
        properties: {
            '--background-color': '#f3f3f3',
            '--header-bg': '#f3f3f3',
            '--navigation': '#fff',
            '--primary': '#343344',
            '--checkbox-border': '#343344',
            '--text-dark': '#000',
            '--label-text': '#000',
            '--hover-text': '#fff',
            '--bg-light': '#fff',
            '--forms': '#fff',
            '--nav-text': '#000',
            '--light-gray': '#696969',
            '--material-icons': '#2c2863',
            '--highlight-list': '#E3F2FD',
            '--table-header': '#f9f9f9',
            '--table-odd': '#fff',
            '--table-border': '#ddd',
            '--table-hover': '#f5f5f5',
            '--btn': '#343344',
            '--menu-panel': '#fff',
            '--border-trans': 'transparent',
            '--btn-hover': '#2c2863',
            '--btn-dark': '#343344',
            '--dropdown-list': '#fff',
            '--btncancel': '#343344',
            '--primary-light': '#6e6b93',
            '--primary-dark': '#f5f5f5',
            '--light-d-light': '#343344',
            '--ldl-text': '#000',
            '--light-d-accent': '#343344',
            '--readonly-bg': 'rgb(229 229 229 / 45%)',
            '--var-icon-font': '"FILL" 0, "wght" 500, "GRAD" 0, "opsz" 48',
            '--rocket-icon': '/assets/images/rocket-ship.svg'
        }
    },
    {
        name: 'Dark',
        image: '/assets/images/skin_dark.svg',
        key: 'dark',
        properties: {
            '--background-color': '#1a2035',
            '--header-bg': '#1a2035',
            '--navigation': '#272e46',
            '--nav-text': '#fff',
            '--light-gray': '#a3a3a3',
            '--primary': '#f3266b',
            '--checkbox-border': '#8b8989',
            '--text-dark': '#ddd',
            '--label-text': '#fff',
            '--hover-text': '#fff',
            '--bg-light': '#272e46',
            '--material-icons': '#fff',
            '--forms': '#272e46',
            '--highlight-list': '#364060',
            '--table-header': '#364060',
            '--table-odd': '#2f364c',
            '--table-border': '#3e414c',
            '--table-hover': '#3f465e',
            '--btn': '#f3266b',
            '--menu-panel': '#272e46',
            '--border-trans': 'transparent',
            '--btn-hover': '#f3266b',
            '--btn-dark': '#2c2863',
            '--dropdown-list': '#29314a',
            '--btncancel': 'transparent',
            '--primary-light': '#a75872',
            '--primary-dark': '#202534',
            '--light-d-light': '#fff',
            '--ldl-text': '#fff',
            '--light-d-accent': '#a75872',
            '--readonly-bg': 'rgb(96 96 96 / 45%)',
            '--var-icon-font': '"FILL" 0, "wght" 200, "GRAD" 0, "opsz" 48',
            '--rocket-icon': '/assets/images/rocket-ship_light.svg'
        }
    }
];
const FontSetList = [
    {
        name: 'Medium',
        key: 'medium',
        properties: {
            '--base-font-size': '13px',
            '--font-11': '11px',
            '--font-12': '12px',
            '--font-13': '13px',
            '--font-14': '14px',
            '--font-15': '15px',
            '--font-16': '16px',
            '--font-17': '17px',
            '--font-18': '18px',
            '--font-19': '19px',
            '--font-20': '20px',
            '--font-21': '21px',
            '--font-24': '24px',
            '--font-26': '26px'
        }
    },
    {
        name: 'Large',
        key: 'large',
        properties: {
            '--base-font-size': '15px',
            '--font-11': '13px',
            '--font-12': '14px',
            '--font-13': '15px',
            '--font-14': '16px',
            '--font-15': '17px',
            '--font-16': '18px',
            '--font-17': '19px',
            '--font-18': '20px',
            '--font-19': '21px',
            '--font-20': '22px',
            '--font-21': '23px',
            '--font-24': '28px',
            '--font-26': '30px'
        }
    }
];
const fontRangeSetList = [
    {
        name: '13',
        key: '13',
        properties: {
            '--base-font-size': '13px',
        }
    },
    {
        name: '14',
        key: '14',
        properties: {
            '--base-font-size': '14px',
            '--font-14': '15px',
            '--font-12': '13px',
            '--font-18': '19px',
        }
    },
    {
        name: '15',
        key: '15',
        properties: {
            '--base-font-size': '15px',
            '--font-14': '16px',
            '--font-12': '14px',
            '--font-18': '20px',
        }
    },
    {
        name: '16',
        key: '16',
        properties: {
            '--base-font-size': '16px',
            '--font-14': '17px',
            '--font-12': '15px',
            '--font-18': '21px',
        }
    },
    {
        name: '17',
        key: '17',
        properties: {
            '--base-font-size': '17px',
            '--font-14': '18px',
            '--font-12': '16px',
            '--font-18': '22px',
        }
    },
    {
        name: '18',
        key: '18',
        properties: {
            '--base-font-size': '18px',
            '--font-14': '19px',
            '--font-12': '17px',
            '--font-18': '23px',
        }
    },
    {
        name: '19',
        key: '19',
        properties: {
            '--base-font-size': '19px',
            '--font-14': '20px',
            '--font-12': '18px',
            '--font-18': '24px',
        }
    },
    {
        name: '20',
        key: '20',
        properties: {
            '--base-font-size': '20px',
            '--font-14': '21px',
            '--font-18': '24px',
        }
    }
];

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

class ProfileService {
    constructor(httpService, themeService, localstorage) {
        this.httpService = httpService;
        this.themeService = themeService;
        this.localstorage = localstorage;
        this.profileImage = new Subject();
    }
    setUserPreference() {
        const user_id = this.localstorage.getItem('id');
        if (user_id) {
            this.getUserPreference(user_id).subscribe((res) => {
                var _a;
                if (res.data && ((_a = res.data) === null || _a === void 0 ? void 0 : _a.config)) {
                    const configArray = JSON.parse(res.data.config);
                    this.setTheme(configArray.theme);
                    this.setFont(configArray.font);
                }
            });
        }
    }
    setTheme(event) {
        this.localstorage.setItem('SELECTED_THEME', event);
        const selectedTheme = themeList.filter(theme => theme.key === event)[0];
        this.themeService.setActiveTheme(selectedTheme);
        console.log('Selected Theme:', selectedTheme.key);
    }
    setFont(event) {
        this.localstorage.setItem('SELECTED_FONT', event);
        const selectedFont = FontSetList.filter(fontSet => fontSet.key === event)[0];
        this.themeService.setActiveFont(selectedFont);
    }
    getProfile(img) {
        this.profileImage.next(img);
    }
    getAllUserList(key) {
        return this.httpService.get(`${UserConfig.EndPoint.User.getAllUserList}/${key}`);
    }
    getAllUserOrgList(orgid) {
        return this.httpService.get(UserConfig.EndPoint.User.getAllUserOrgList + orgid);
    }
    getUserPreference(id) {
        return this.httpService.get(UserConfig.EndPoint.User.getUserConfig.replace('{id}', id));
    }
    updateUser(data, userid) {
        return this.httpService.patch(`${UserConfig.EndPoint.User.getAllUserList}/${userid}/updateUserDetails`, data);
    }
    saveUserPreference(data) {
        return this.httpService.post(UserConfig.EndPoint.User.saveUserConfig, data);
    }
}
ProfileService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileService, deps: [{ token: HttpService }, { token: ThemeService }, { token: LocalService }], target: i0.ɵɵFactoryTarget.Injectable });
ProfileService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: HttpService }, { type: ThemeService }, { type: LocalService }]; } });

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
        HttpClientModule,
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
            HttpClientModule,
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
                        HttpClientModule,
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
        AuthService,
        AuthStore,
        AuthGuard,
        ProfileService,
        AppService,
        CredentialsService,
        DynamicTabPageService,
        LocalStorageService,
        LocalService,
        MicrostrategyService,
        PageHeaderService,
        ThemeService,
        HttpClient,
        HttpService,
        AlertService,
        ConfirmationService,
        ConfigurationSettingsService,
        AttachmentsService,
        PageHeaderService,
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
                        AuthService,
                        AuthStore,
                        AuthGuard,
                        ProfileService,
                        AppService,
                        CredentialsService,
                        DynamicTabPageService,
                        LocalStorageService,
                        LocalService,
                        MicrostrategyService,
                        PageHeaderService,
                        ThemeService,
                        HttpClient,
                        HttpService,
                        AlertService,
                        ConfirmationService,
                        ConfigurationSettingsService,
                        AttachmentsService,
                        PageHeaderService,
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
