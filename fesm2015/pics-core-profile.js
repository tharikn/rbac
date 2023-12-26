import * as i0 from '@angular/core';
import { Injectable, Component, Input, Directive, NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BehaviorSubject, Subject, of } from 'rxjs';
import * as i1 from '@angular/common/http';
import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { throwError } from 'rxjs/internal/observable/throwError';
import { map } from 'rxjs/operators';
import * as i2 from '@angular/forms';
import { Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i1$1 from '@angular/router';
import { NavigationStart } from '@angular/router';
import * as i10 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i8$1 from 'primeng/calendar';
import { CalendarModule } from 'primeng/calendar';
import * as i6 from 'primeng/card';
import { CardModule } from 'primeng/card';
import * as i7 from 'primeng/dialog';
import { DialogModule } from 'primeng/dialog';
import * as i8 from 'primeng/checkbox';
import { CheckboxModule } from 'primeng/checkbox';
import * as i9 from 'primeng/dropdown';
import { DropdownModule } from 'primeng/dropdown';
import * as i10$1 from 'primeng/inputtext';
import { InputTextModule } from 'primeng/inputtext';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
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
import { ConfirmationService } from 'primeng/api';

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
            '--profile-bg': '#F3F9F9',
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
            '--profile-bg': '#F3F9F9',
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
            '--profile-bg': '#40475E',
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
const fontSetList = [
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
        saveUserConfig: '/org/user/saveUserPreference'
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
        GetCategoryLookup: '/lookup/lookupbycategoryname',
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
            getWorkerAvailability: '/worker/getByCurrentUser'
        },
        permission: {
            permissionRoleById: '/access-control/permission/role/{id}',
            pagePermission: '/access-control/permission/page',
            pageLookupPermission: '/access-control/permission/page/lookup'
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
HttpService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HttpService, deps: [{ token: i1.HttpClient }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
HttpService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HttpService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HttpService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: DataStoreService }]; } });

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
                    const font = configArray.font ? configArray.font.toString() : '13';
                    this.setRangeFont(font);
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
        const selectedFont = fontSetList.filter(fontSet => fontSet.key === event)[0];
        this.themeService.setActiveFont(selectedFont);
    }
    setRangeFont(event) {
        this.localstorage.setItem('SELECTED_FONT', event);
        const selectedFont = fontRangeSetList.filter(fontSet => fontSet.key === event)[0];
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
AlertService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService, deps: [{ token: i1$1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
AlertService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1$1.Router }]; } });
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

class CustomValidator {
    static patternValidator(regex, error) {
        return (control) => {
            if (!control.value) {
                return null;
            }
            const valid = regex.test(control.value);
            return valid ? null : error;
        };
    }
    static passwordMatchValidator(control) {
        var _a, _b, _c;
        const password = (_a = control.get('newpassword')) === null || _a === void 0 ? void 0 : _a.value;
        const confirmPassword = (_b = control.get('conformpassword')) === null || _b === void 0 ? void 0 : _b.value;
        if (password !== confirmPassword) {
            (_c = control.get('conformpassword')) === null || _c === void 0 ? void 0 : _c.setErrors({ NoPassswordMatch: true });
        }
    }
    static validateSsn() {
        return (control) => {
            const error = {};
            const data = control.value.split('');
            const val = data[0] + data[1] + data[2];
            function between(x, min, max) {
                return x >= min && x <= max;
            }
            if (val === '666' || val === '900' || val === '999') {
                error['firstgroup'] = true;
            }
            if (data.includes('0')) {
                error['hasZero'] = true;
            }
            const test = data[0] + data[1] + data[2] + data[4] + data[5] + data[7] + data[8] + data[9] + data[10];
            if (between(test, 987654320, 987654329)) {
                error['mediaSsn'] = true;
            }
            return error;
        };
    }
    static validateTelephone() {
        return (control) => {
            const error = {};
            const data = control.value.split('');
            if (data[0] === '0' || data[1] === '1' || data[0] === '1' || data[1] === '0') {
                error['hasZero'] = true;
            }
            return error;
        };
    }
}

class AuthService {
    constructor(injector, httpService, _router) {
        this.httpService = httpService;
        this._router = _router;
        this.orgInfo = new BehaviorSubject('');
        this.currentOrgInfo = this.orgInfo.asObservable();
        this.alertService = injector.get(AlertService);
    }
    feedOrgInfo(data) {
        this.orgInfo.next(data);
    }
    logout() {
        this._router.navigate(['/login']);
        sessionStorage.clear();
        localStorage.clear();
    }
    ResetPassword(data) {
        return this.httpService.post(AuthURL.EndPoints.auth.user.resetPassword, data);
    }
}
AuthService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthService, deps: [{ token: i0.Injector }, { token: HttpService }, { token: i1$1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
AuthService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: HttpService }, { type: i1$1.Router }]; } });

class AttachmentsService {
    constructor(http) {
        this.http = http;
    }
    uploadKey(objparams) {
        return this.http.post(AttachmentConfig$1.EndPoint.Attachments.UploadKey, objparams);
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
AlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AlertComponent, selector: "app-alert", ngImport: i0, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], directives: [{ type: i10.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{
                    // moduleId: module.id,
                    selector: 'app-alert',
                    templateUrl: 'alert.component.html',
                    styleUrls: ['./alert.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: AlertService }]; } });

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

class ConfigLoginSettingsComponent {
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
            this._configurationSettingsService.uploadKey(this.imageDataBanner).subscribe((res) => {
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
ConfigLoginSettingsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConfigLoginSettingsComponent, deps: [{ token: AlertService }, { token: i2.FormBuilder }, { token: ConfigurationSettingsService }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
ConfigLoginSettingsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConfigLoginSettingsComponent, selector: "lib-config-login-settings", ngImport: i0, template: "<app-alert></app-alert>\r\n<p-card styleClass=\"w-100\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 col-12\">\r\n      <div class=\"customizer customizer-styling customizer-styling-skin skin\">\r\n        <h6 class=\"font-weight-bold mb-3\">Choose Login Layout</h6>\r\n        <div class=\"d-flex justify-content-start align-items-center\">\r\n          <!-- Layout 1 -->\r\n          <div class=\"custom-control custom-radio mr-4 mb-md-0 mb-3\">\r\n            <figure class=\"active mb-0\">\r\n              <label role=\"link\" class=\"mb-0 layout-select\" for=\"layout1\">\r\n                <img src=\"../../../../assets/images/Layout.jpg\" class=\"img-fluid\" alt=\"layout1\" />\r\n              </label>\r\n              <figcaption>\r\n                <input\r\n                  type=\"radio\"\r\n                  id=\"layout1\"\r\n                  name=\"layout\"\r\n                  class=\"custom-control-input layout-name\"\r\n                  [attr.checked]=\"true\"\r\n                  value=\"Layout 1\" />\r\n                <label class=\"custom-control-label mt-2 mb-0\" for=\"layout1\">Layout 1</label>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</p-card>\r\n\r\n<p-card styleClass=\"w-100 mt-3\">\r\n  <div class=\"customizer\" [formGroup]=\"configRegistrationForm\">\r\n    <h6 class=\"font-weight-bold mb-3\">Configure Login</h6>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 col-sm-6 col-12 form-group\">\r\n        <label class=\"intake-form-labels\" for=\"organizationName\">Organization Title</label>\r\n        <input\r\n          class=\"form-control\"\r\n          type=\"text\"\r\n          placeholder=\"Title Name\"\r\n          id=\"organizationName\"\r\n          autocomplete=\"off\"\r\n          formControlName=\"organization_title\"\r\n          pInputText />\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-6 col-12 form-group\">\r\n        <label class=\"intake-form-labels mb-0\" for=\"thumbnailBanner\">Upload Banner</label>\r\n        <div *ngIf=\"!thumbnailBanner\" id=\"thumbnailBanner\">\r\n          <figure class=\"mt-2 mb-0 pic-upload justify-content-md-center\">\r\n            <label for=\"file1\" class=\"btn btn-primary file-upload-btn mb-0\">\r\n              <span class=\"d-flex align-items-center justify-content-center\">\r\n                <span class=\"aterial-icon material-symbols-outlined text-white mr-2\">cloud_upload</span>\r\n                <span>Upload</span>\r\n              </span>\r\n            </label>\r\n            <input\r\n              type=\"file\"\r\n              id=\"file1\"\r\n              aria-hidden=\"true\"\r\n              style=\"display: none\"\r\n              (change)=\"handleFileInputBanner($event)\" />\r\n          </figure>\r\n          <p><small>Image size max 1MB (min-width 1100px and min-height 800px)</small></p>\r\n        </div>\r\n        <div *ngIf=\"thumbnailBanner\">\r\n          <div class=\"d-flex align-items-center justify-content-between p-1 bg-light\">\r\n            <span role=\"button\" (click)=\"showUploadedBanner()\" title=\"Zoom\">\r\n              <img width=\"45\" height=\"45\" [src]=\"thumbnailBanner || 'assets/images/user-empty.png'\" alt=\"upload\" />\r\n            </span>\r\n            <span>\r\n              <em\r\n                role=\"button\"\r\n                class=\"fa fa-search-plus fa-lg text-primary mr-2\"\r\n                (click)=\"showUploadedBanner()\"\r\n                title=\"Zoom\"></em>\r\n              <em\r\n                role=\"button\"\r\n                class=\"fa fa-trash fa-lg text-danger mr-2\"\r\n                (click)=\"removeThumbnailBanner()\"\r\n                title=\"Delete\"></em>\r\n            </span>\r\n          </div>\r\n          <p-dialog header=\"Banner Preview\" [(visible)]=\"bannerVisible\" [style]=\"{ width: '50vw' }\">\r\n            <img class=\"img-fluid\" [attr.src]=\"thumbnailBanner || 'assets/images/user-empty.png'\" alt=\"upload\" />\r\n          </p-dialog>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-6 col-122 form-group\">\r\n        <label class=\"intake-form-labels mb-0\" for=\"thumbnailLogo\">Upload Logo</label>\r\n        <div *ngIf=\"!thumbnailLogo\" id=\"thumbnailLogo\">\r\n          <figure class=\"mt-2 mb-0 pic-upload justify-content-md-center\">\r\n            <label for=\"file\" class=\"btn btn-primary file-upload-btn mb-0\">\r\n              <span class=\"d-flex align-items-center justify-content-center\">\r\n                <span class=\"aterial-icon material-symbols-outlined text-white mr-2\">cloud_upload</span>\r\n                <span>Upload</span>\r\n              </span>\r\n            </label>\r\n            <input type=\"file\" id=\"file\" aria-hidden=\"true\" style=\"display: none\" (change)=\"handleFileInput($event)\" />\r\n          </figure>\r\n          <p><small>Image size max 120kb (min-width 400px and min-height 60px)</small></p>\r\n        </div>\r\n        <div *ngIf=\"thumbnailLogo\">\r\n          <div class=\"d-flex align-items-center justify-content-between p-1 bg-light\">\r\n            <span role=\"button\" (click)=\"showUploadedLogo()\" title=\"Zoom\">\r\n              <img width=\"45\" height=\"45\" [attr.src]=\"thumbnailLogo || 'assets/images/user-empty.png'\" alt=\"upload\" />\r\n            </span>\r\n            <span>\r\n              <em\r\n                role=\"button\"\r\n                class=\"fa fa-search-plus fa-lg text-primary mr-2\"\r\n                (click)=\"showUploadedLogo()\"\r\n                title=\"Zoom\"></em>\r\n              <em\r\n                role=\"button\"\r\n                class=\"fa fa-trash fa-lg text-danger mr-2\"\r\n                (click)=\"removeThumbnail()\"\r\n                title=\"Delete\"></em>\r\n            </span>\r\n          </div>\r\n          <p-dialog header=\"Logo Preview\" [(visible)]=\"visible\" [style]=\"{ width: '50vw' }\">\r\n            <img class=\"img-fluid\" [src]=\"thumbnailLogo || 'assets/images/user-empty.png'\" alt=\"upload\" />\r\n          </p-dialog>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</p-card>\r\n\r\n<p-card styleClass=\"w-100 mt-3\">\r\n  <div class=\"customizer\" [formGroup]=\"configRegistrationForm\">\r\n    <h6 class=\"font-weight-bold mb-3\">Configure Registration</h6>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 col-sm-6 col-12 mb-md-4 mb-3\">\r\n        <p-checkbox inputId=\"registrationid\" [binary]=\"true\" formControlName=\"registration\"></p-checkbox>\r\n        <label class=\"intake-form-labels mb-0 ml-2\" for=\"registrationid\">Enable Registration?</label>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-6 col-12 form-group\">\r\n        <label class=\"intake-form-labels\" for=\"selectOrganization\">Select Organization</label>\r\n        <p-dropdown\r\n          styleClass=\"w-100\"\r\n          optionLabel=\"name\"\r\n          optionValue=\"id\"\r\n          [options]=\"organizations\"\r\n          placeholder=\"Select Role\"\r\n          id=\"selectOrganization\"\r\n          formControlName=\"organizationid\"\r\n          ariaLabelledBy=\"roleforregistration\">\r\n        </p-dropdown>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-6 col-12 form-group\">\r\n        <label class=\"intake-form-labels\" for=\"roleforregistration\">Select Role</label>\r\n        <p-dropdown\r\n          styleClass=\"w-100\"\r\n          optionLabel=\"name\"\r\n          optionValue=\"id\"\r\n          [options]=\"userRoles\"\r\n          placeholder=\"Select Role\"\r\n          id=\"roleforregistration\"\r\n          formControlName=\"role_for_registration\"\r\n          ariaLabelledBy=\"roleforregistration\">\r\n        </p-dropdown>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-6 col-12 form-group\">\r\n        <label class=\"intake-form-labels\" for=\"templateforregistration\">Select Template</label>\r\n        <p-dropdown\r\n          styleClass=\"w-100\"\r\n          optionLabel=\"name\"\r\n          optionValue=\"id\"\r\n          [options]=\"emailTemplate\"\r\n          placeholder=\"Select Template\"\r\n          id=\"templateforregistration\"\r\n          formControlName=\"template_for_registration\"\r\n          ariaLabelledBy=\"templateforregistration\">\r\n        </p-dropdown>\r\n      </div>\r\n    </div>\r\n    <div class=\"text-md-right mt-2\">\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveConfig()\">\r\n        {{ updateButton ? 'Update' : 'Submit' }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</p-card>\r\n", styles: ["@charset \"UTF-8\";:host ::ng-deep .p-card .p-card-body .p-card-content{padding:0}.customizer .custom-checkbox.custom-control,.customizer .custom-radio.custom-control{padding-left:0}.customizer .custom-checkbox.custom-control .theme-select,.customizer .custom-radio.custom-control .theme-select{border:2px solid #ddd;border-radius:7px}.customizer .custom-checkbox.custom-control .active .theme-select,.customizer .custom-radio.custom-control .active .theme-select{border-color:var(--primary)}.customizer .custom-checkbox .custom-control-input:checked~.custom-control-label:before,.customizer .custom-radio .custom-control-input:checked~.custom-control-label:before{content:\"\\f00c\";font-family:\"FontAwesome\",sans-serif;color:var(--hover-text);background-color:var(--btn);border-color:var(--btn);font-size:10px;display:flex;align-items:center;padding:2px}.customizer .custom-checkbox label,.customizer .custom-radio label{cursor:pointer}.customizer .custom-checkbox .font-box,.customizer .custom-radio .font-box{display:flex;justify-content:center;align-items:center;width:150px;height:120px;color:var(--text-dark)}.customizer .custom-checkbox .custom-control-label,.customizer .custom-radio .custom-control-label{position:relative;vertical-align:middle;font-size:var(--base-font-size);line-height:normal;color:var(--text-dark);cursor:pointer;padding-left:25px}.customizer .custom-checkbox .custom-control-label:after,.customizer .custom-radio .custom-control-label:after{border-color:var(--btn)}.customizer .custom-checkbox .custom-control-label:before,.customizer .custom-checkbox .custom-control-label:after,.customizer .custom-radio .custom-control-label:before,.customizer .custom-radio .custom-control-label:after{background-image:none;width:16px;height:16px;left:0;box-shadow:none;top:0}.customizer hr{border-color:var(--table-border)}.customizer .customizer-header{background:var(--background-color);color:var(--text-dark)}.customizer .customizer-header .customizer-close{position:absolute;right:.6rem;top:.6rem;padding:7px;width:auto;z-index:10;color:var(--text-dark);cursor:pointer}.customizer .customizer-header .customizer-close .material-icon{font-size:1.5rem}.customizer .customizer-header .customizer-close:hover{color:var(--btn)}.customizer h4{font-size:var(--font-15);font-weight:600;color:var(--text-dark)}.customizer h6{font-size:var(--font-14);color:var(--text-dark)}.customizer p{font-size:var(--base-font-size);font-weight:400;color:var(--text-dark)}.customizer .customizer-toggle{background:var(--btn);color:var(--hover-text);box-shadow:-3px 0 8px #22292f1a;border-top-left-radius:6px;border-bottom-left-radius:6px;position:absolute;top:50%;width:38px;height:38px;left:-39px;text-align:center;line-height:40px;border-left:1px solid var(--checkbox-border);cursor:pointer}.customizer .customizer-toggle .fa-cog{font-size:var(--font-15)}.customizer .customizer-toggle:hover{text-decoration:none}.customizer .customizer-styling-skin.skin .custom-control .custom-control-label{position:relative;padding-left:25px}.customizer .custom-control:first-child .font-box{font-size:var(--font-21);font-weight:400}.customizer .custom-control:last-child .font-box{font-size:var(--font-26);font-weight:600}\n"], components: [{ type: AlertComponent, selector: "app-alert" }, { type: i6.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { type: i7.Dialog, selector: "p-dialog", inputs: ["header", "draggable", "resizable", "positionLeft", "positionTop", "contentStyle", "contentStyleClass", "modal", "closeOnEscape", "dismissableMask", "rtl", "closable", "responsive", "appendTo", "breakpoints", "styleClass", "maskStyleClass", "showHeader", "breakpoint", "blockScroll", "autoZIndex", "baseZIndex", "minX", "minY", "focusOnShow", "maximizable", "keepInViewport", "focusTrap", "transitionOptions", "closeIcon", "closeAriaLabel", "closeTabindex", "minimizeIcon", "maximizeIcon", "visible", "style", "position"], outputs: ["onShow", "onHide", "visibleChange", "onResizeInit", "onResizeEnd", "onDragEnd", "onMaximize"] }, { type: i8.Checkbox, selector: "p-checkbox", inputs: ["value", "name", "disabled", "binary", "label", "ariaLabelledBy", "ariaLabel", "tabindex", "inputId", "style", "styleClass", "labelStyleClass", "formControl", "checkboxIcon", "readonly", "required", "trueValue", "falseValue"], outputs: ["onChange"] }, { type: i9.Dropdown, selector: "p-dropdown", inputs: ["scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "selectId", "dataKey", "filterBy", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "virtualScroll", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "disabled", "options", "filterValue"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear"] }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i10$1.InputText, selector: "[pInputText]" }, { type: i10.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConfigLoginSettingsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-config-login-settings',
                    templateUrl: './config-login-settings.component.html',
                    styleUrls: ['./config-login-settings.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: AlertService }, { type: i2.FormBuilder }, { type: ConfigurationSettingsService }, { type: DataStoreService }]; } });

class ProfileComponent$1 {
    constructor(injector, authService, formBuilder, httpService, profileService, attachmentService, _storeservice) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.httpService = httpService;
        this.profileService = profileService;
        this.attachmentService = attachmentService;
        this._storeservice = _storeservice;
        this.isValid = false;
        this.themes = [];
        this.fontSetList = [];
        this.RBACORG = new RBACINFO();
        this.errors = AppConstants.errorList;
        this.localstorage = injector.get(LocalService);
        this.alertService = injector.get(AlertService);
        this.themeService = injector.get(ThemeService);
        this.themes = themeList;
        this.fontSetList = fontSetList;
        this.userid = sessionStorage.getItem('id');
        this.selectedTheme = this.localstorage.getItem('SELECTED_THEME') || 'default';
        this.selectedFont = this.localstorage.getItem('SELECTED_FONT') || '13';
        this.initializeResetPasswordForm();
        this.initializeForm();
    }
    ngOnInit() {
        this.orgSubs = this._storeservice.currentStore.subscribe((res) => {
            if (res['RBACORG'] && res['RBACORG'] !== '') {
                this.RBACORG = res['RBACORG'];
                console.log(this.RBACORG, 'RBACORG Profile');
                this.environment = this.RBACORG['environment'];
                this.orgId = parseInt(this.RBACORG['orgID']);
                if (this.environment) {
                    this.getUserInfo();
                    this.fontSlider();
                }
            }
        });
    }
    initializeResetPasswordForm() {
        this.resetPasswordForm = this.formBuilder.group({
            id: sessionStorage.getItem('id'),
            mailid: sessionStorage.getItem('email'),
            currentpassword: ['', Validators.required],
            newpassword: [
                '',
                Validators.compose([
                    Validators.required,
                    CustomValidator.patternValidator(/\d/, { hasNumber: true }),
                    CustomValidator.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
                    CustomValidator.patternValidator(/[a-z]/, { hasSmallCase: true }),
                    CustomValidator.patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, { hasSpecialCharacters: true }),
                    Validators.minLength(8)
                ])
            ],
            conformpassword: ['', Validators.required]
        });
    }
    initializeForm() {
        this.userForm = this.formBuilder.group({
            firstname: ['', Validators.required],
            middlename: [''],
            lastname: ['', Validators.required],
            username: ['', Validators.required],
            dob: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern(AppConstants.regexEmail)]]
        });
    }
    get resetFormcontrols() {
        const isInvalid = this.resetPasswordForm.controls['newpassword'].status;
        const newpassword = this.resetPasswordForm.value['newpassword'];
        const conformpassword = this.resetPasswordForm.value['conformpassword'];
        if (isInvalid === 'INVALID' && newpassword !== '') {
            this.isValid = true;
        }
        else {
            this.isValid = false;
        }
        if (newpassword !== conformpassword) {
            this.resetPasswordForm.get('conformpassword').setErrors({ NoPassswordMatch: true });
        }
        return this.resetPasswordForm.controls;
    }
    getUserInfo() {
        this.profileService.getAllUserList(this.userid).subscribe((res) => {
            var _a, _b;
            const patchValuedata = res.data;
            this.thumbnail = ((_b = (_a = patchValuedata.additionalinfo) === null || _a === void 0 ? void 0 : _a.thumbnail) === null || _b === void 0 ? void 0 : _b.url) || '';
            this.userForm.patchValue({
                firstname: patchValuedata.firstname,
                middlename: patchValuedata.middlename,
                lastname: patchValuedata.lastname,
                username: patchValuedata.username,
                dob: new Date(patchValuedata.dob),
                email: patchValuedata.email
            });
        });
    }
    handleFileInput(fileValue) {
        const target = fileValue.target;
        const file = target.files[0];
        this.uploadedFile = fileValue.target.files[0].name;
        this.imageData = {
            contentType: fileValue.target.files[0].type,
            fileName: `user-profileimage/${this.userid}/${this.uploadedFile}`
        };
        if (this.validateImage(fileValue.target.files)) {
            this.attachmentService.uploadKey(this.imageData).subscribe((res) => {
                this.urlPath = res.data;
                const uploadAttachment = document.getElementById('file');
                const uploadAttachmentDetails = uploadAttachment.files[0];
                this.httpService.putUpload(this.urlPath, uploadAttachmentDetails, uploadAttachmentDetails.type).subscribe((_resp) => {
                    this.alertService.success('Uploaded Successfully!');
                    const reader = new FileReader();
                    reader.onload = () => {
                        this.thumbnail = reader.result;
                    };
                    reader.readAsDataURL(file);
                    this.attachType = fileValue.target.files[0].type;
                }, error => {
                    if (error.status == 0) {
                        this.alertService.error(AppConstants.errorMessage);
                        this.uploadedFile = '';
                        this.urlPath = '';
                    }
                });
            }, _error => {
                this.alertService.error(AppConstants.errorMessage);
            });
        }
    }
    updateprofile() {
        const userData = this.userForm.getRawValue();
        if (this.uploadedFile) {
            userData.additionalinfo = {
                photo: this.imageData,
                thumbnail: this.imageData
            };
        }
        this.profileService.updateUser(userData, this.userid).subscribe(() => {
            this.profileService.getProfile({
                url: this.thumbnail,
                name: this.userForm.value.firstname
            });
            this.alertService.success('Profile updated successfully');
        });
    }
    updateStyling() {
        const body = {
            type: 'USER_THEME_PREFERENCES',
            mappedid: this.userid,
            config: JSON.stringify({ theme: this.selectedTheme, font: this.selectedFont })
        };
        this.profileService.saveUserPreference(body).subscribe(() => {
            // This is intentional
        });
    }
    setTheme(event) {
        this.profileService.setTheme(event);
    }
    setFont(event) {
        this.profileService.setFont(event);
    }
    setRangeFont(modal) {
        this.profileService.setRangeFont(modal);
    }
    changePassword() {
        const obj = {
            id: Number(this.resetPasswordForm.value['id']),
            currentpassword: this.resetPasswordForm.value['currentpassword'],
            newpassword: this.resetPasswordForm.value['newpassword']
        };
        this.authService.ResetPassword(obj).subscribe(_res => {
            this.authService.logout();
            this.alertService.success('Password Changed Successfully');
        }, _error => this.alertService.error('Something went wrong'));
    }
    validateImage(file) {
        const fileSize = Number(file[0].size) / 1024;
        const filetype = file[0].type.replace('image/', '');
        if (filetype === 'jpg' || filetype === 'jpeg' || filetype === 'png' || filetype === 'gif') {
            if (fileSize < 50) {
                return true;
            }
            else {
                this.alertService.warn('File is bigger than 50 KB');
                return false;
            }
        }
        else {
            this.alertService.warn(`${filetype} format is not supported`);
            return false;
        }
    }
    clearForm() {
        this.userForm.controls['firstname'].reset();
        this.userForm.controls['middlename'].reset();
        this.userForm.controls['lastname'].reset();
        this.thumbnail = '';
    }
    removeThumbnail() {
        this.thumbnail = '';
    }
    ngOnDestroy() {
        if (this.socketSubscription) {
            this.socketSubscription.unsubscribe();
        }
        this.orgSubs.unsubscribe();
    }
    fontSlider() {
        const rangeSlider = document.getElementById('rs-range-line');
        const rangeBullet = document.getElementById('rs-bullet');
        rangeSlider.addEventListener('input', showSliderValue, false);
        function showSliderValue() {
            rangeBullet.innerHTML = rangeSlider.value;
            const bulletPosition = (Number(rangeSlider.value) / Number(rangeSlider.max));
            rangeBullet.style.left = (bulletPosition * 578) + 'px';
        }
    }
}
ProfileComponent$1.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileComponent$1, deps: [{ token: i0.Injector }, { token: AuthService }, { token: i2.FormBuilder }, { token: HttpService }, { token: ProfileService }, { token: AttachmentsService }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
ProfileComponent$1.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ProfileComponent$1, selector: "core-profile", ngImport: i0, template: "<app-alert></app-alert>\r\n<div class=\"card w-100 profile\">\r\n  <div class=\"container-group h-100\" [formGroup]=\"userForm\">\r\n    <div class=\"left-container\">\r\n      <div class=\"nav flex-column nav-pills py-4 px-3\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\r\n        <a class=\"nav-link d-flex align-items-center mb-3 active\" id=\"v-pills-home-tab\" data-toggle=\"pill\"\r\n          href=\"#v-pills-home\" role=\"tab\" aria-controls=\"v-pills-home\" aria-selected=\"true\">\r\n          <span class=\"material-icon material-symbols-outlined mr-2\">person</span>\r\n          Edit Profile\r\n        </a>\r\n        <!-- <a class=\"nav-link d-flex align-items-center mb-3\" id=\"v-pills-profile-tab\" data-toggle=\"pill\"\r\n          href=\"#v-pills-profile\" role=\"tab\" aria-controls=\"v-pills-profile\" aria-selected=\"false\">\r\n          <span class=\"material-icon material-symbols-outlined mr-2\">lock_open</span>\r\n          Change Password\r\n        </a> -->\r\n        <a class=\"nav-link d-flex align-items-center\" id=\"v-theme-a\" data-toggle=\"pill\" href=\"#theme_tab\" role=\"tab\"\r\n          aria-controls=\"theme_tab\" aria-selected=\"false\">\r\n          <span class=\"material-icon material-symbols-outlined mr-2\">palette</span>\r\n          Theme\r\n        </a>\r\n        <a class=\"nav-link d-flex align-items-center\" id=\"v-theme-a\" data-toggle=\"pill\" href=\"#config_settings\" role=\"tab\"\r\n          aria-controls=\"theme_tab\" aria-selected=\"false\">\r\n          <span class=\"material-icon material-symbols-outlined mr-2\">palette</span>\r\n          Configure Settings\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"right-container\">\r\n      <div class=\"tab-content py-4 px-4\" id=\"v-pills-tabContent\">\r\n        <!-- Edit Profile Tab -->\r\n        <div class=\"tab-pane fade show active\" id=\"v-pills-home\" role=\"tabpanel\" aria-labelledby=\"v-pills-home-tab\">\r\n          <div class=\"strip_head toggleleft mb-3\">\r\n            <span class=\"report_head font-weight-bold\">Edit Profile</span>\r\n          </div>\r\n          <div class=\"p-fluid p-formgrid pic-upload-group row justify-content-md-center\">\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12 text-center\">\r\n              <figure class=\"mt-2 mb-2 pic-upload justify-content-md-center\">\r\n                <img width=\"64\" class=\"rounded-circle border\" [src]=\"thumbnail || 'assets/images/user-empty.png'\"\r\n                  alt=\"upload\" />\r\n                <label for=\"file\" role=\"button\"\r\n                  class=\"material-icon material-symbols-outlined p-1 rounded-circle bg-primary text-white file-upload-btn\">edit</label>\r\n                <input type=\"file\" id=\"file\" aria-hidden=\"true\" style=\"visibility: hidden; display: none\"\r\n                  (change)=\"handleFileInput($event)\" />\r\n              </figure>\r\n              <button class=\"btn btn-primary\" *ngIf=\"thumbnail\" (click)=\"removeThumbnail()\">Remove</button>\r\n              <p><small>Image size max 50KB</small></p>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-fluid p-formgrid row\">\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"fname\" class=\"referral-form-labels\">\r\n                First Name\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <input id=\"fname\" type=\"text\" formControlName=\"firstname\" placeholder=\"Enter First Name\"\r\n                aria-describedby=\"fname\" pInputText />\r\n            </div>\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"mname\" class=\"referral-form-labels\">Middle Name </label>\r\n              <input id=\"mname\" type=\"text\" placeholder=\"Enter Middle Name\" formControlName=\"middlename\"\r\n                aria-describedby=\"mname\" pInputText />\r\n            </div>\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"lName\" class=\"referral-form-labels\">\r\n                Last Name\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <input id=\"lName\" type=\"text\" placeholder=\"Enter Last Name\" formControlName=\"lastname\" pInputText\r\n                aria-describedby=\"lName\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"p-fluid p-formgrid row\">\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"userName\" class=\"referral-form-labels\">\r\n                User Name\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <input id=\"userName\" type=\"text\" readonly=\"true\" placeholder=\"Enter User Name\" formControlName=\"username\"\r\n                aria-describedby=\"userName\" pInputText />\r\n            </div>\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"dateformat\" class=\"referral-form-labels\">\r\n                DOB\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <p-calendar placeholder=\"Select Date Of Birth\" formControlName=\"dob\" dateFormat=\"yy-mm-dd\"\r\n                [readonlyInput]=\"true\" [showOnFocus]=\"false\" inputId=\"dateformat\">\r\n              </p-calendar>\r\n            </div>\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"usersEmailid\" class=\"referral-form-labels\">\r\n                Email ID\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <input id=\"usersEmailid\" placeholder=\"Enter Email ID\" formControlName=\"email\" type=\"text\" pInputText\r\n                readonly />\r\n            </div>\r\n          </div>\r\n          <div class=\"p-fluid p-formgrid row\">\r\n            <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\"></div>\r\n            <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\"></div>\r\n            <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12 mb-0\">\r\n              <button class=\"pull-right mr-2 mb-2 btn btn-primary btncommon\" (click)=\"updateprofile()\">\r\n                Save Changes\r\n              </button>\r\n              <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" (click)=\"clearForm()\">\r\n                Clear\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Tab End -->\r\n\r\n        <!-- Change Password Tab -->\r\n        <!-- <div class=\"tab-pane fade\" id=\"v-pills-profile\" role=\"tabpanel\" aria-labelledby=\"v-pills-profile-tab\">\r\n          <div class=\"strip_head toggleleft mb-4\">\r\n            <span class=\"report_head font-weight-bold\">Change Password</span>\r\n          </div>\r\n          <div [formGroup]=\"resetPasswordForm\" class=\"reset-password-div\">\r\n            <div class=\"p-fluid p-formgrid row\">\r\n              <div class=\"p-field col-xl-4 col-lg-12 col-sm-4 col-md-12 col-12 mb-3\">\r\n                <label for=\"mailid\" aria-describedby=\"mailid\">Email <span class=\"requiredfield\">*</span></label>\r\n                <input type=\"text\" readonly=\"true\" id=\"mailid\" class=\"form-control\" formControlName=\"mailid\"\r\n                  pInputText />\r\n              </div>\r\n            </div>\r\n            <div class=\"p-fluid p-formgrid row\">\r\n              <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12 mb-3\">\r\n                <label for=\"cpassword\" aria-describedby=\"cpassword\">Current Password <span\r\n                    class=\"requiredfield\">*</span></label>\r\n                <p-password appBlockcutcopypaste class=\"position-relative\" inputId=\"cpassword\"\r\n                  formControlName=\"currentpassword\" [toggleMask]=\"true\" [feedback]=\"false\">\r\n                </p-password>\r\n                <small *ngIf=\"\r\n                    resetFormcontrols['currentpassword'].hasError('required') &&\r\n                    resetFormcontrols['currentpassword'].touched\r\n                  \" class=\"p-error block\">\r\n                  Required\r\n                </small>\r\n              </div>\r\n\r\n              <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12 mb-3 position-relative\">\r\n                <label for=\"npassword\" aria-describedby=\"npassword\">New Password <span\r\n                    class=\"requiredfield\">*</span></label>\r\n                <p-password class=\"position-relative\" appBlockcutcopypaste inputId=\"npassword\"\r\n                  formControlName=\"newpassword\" [toggleMask]=\"true\" [feedback]=\"false\">\r\n                </p-password>\r\n                <div class=\"autosuggest\" *ngIf=\"isValid\">\r\n                  <div *ngIf=\"\r\n                      resetFormcontrols['newpassword'].hasError('required') && resetFormcontrols['newpassword'].touched\r\n                    \" class=\"p-error d-flex align-items-center mb-2\">\r\n                    <em class=\"pi pi-times-circle mr-1\"></em>\r\n                    <small>Required</small>\r\n                  </div>\r\n                  <div class=\"p-error d-flex align-items-center mb-2\"\r\n                    *ngIf=\"resetFormcontrols['newpassword'].hasError('hasNumber')\">\r\n                    <em class=\"pi pi-times-circle mr-1\"></em>\r\n                    <small>{{ errors[0] }}</small>\r\n                  </div>\r\n                  <div class=\"p-error d-flex align-items-center mb-2\"\r\n                    *ngIf=\"resetFormcontrols['newpassword'].hasError('hasCapitalCase')\">\r\n                    <em class=\"pi pi-times-circle mr-1\"></em>\r\n                    <small>{{ errors[2] }}</small>\r\n                  </div>\r\n                  <div class=\"p-error d-flex align-items-center mb-2\"\r\n                    *ngIf=\"resetFormcontrols['newpassword'].hasError('hasSmallCase')\">\r\n                    <em class=\"pi pi-times-circle mr-1\"></em>\r\n                    <small>{{ errors[3] }}</small>\r\n                  </div>\r\n                  <small class=\"p-error d-flex align-items-center mb-2\"\r\n                    *ngIf=\"resetFormcontrols['newpassword'].hasError('hasSpecialCharacters')\">\r\n                    <em class=\"pi pi-times-circle mr-1\"></em>\r\n                    {{ errors[1] }}\r\n                  </small>\r\n                  <div class=\"p-error d-flex align-items-center mb-2\"\r\n                    *ngIf=\"resetFormcontrols['newpassword'].hasError('minlength')\">\r\n                    <em class=\"pi pi-times-circle mr-1\"></em>\r\n                    <small>{{ errors[4] }}</small>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12 mb-2\">\r\n                <label for=\"cnfpassword\" aria-describedby=\"cnfpassword\">Confirm Password <span\r\n                    class=\"requiredfield\">*</span></label>\r\n                <p-password appBlockcutcopypaste class=\"position-relative\" inputId=\"cnfpassword\"\r\n                  formControlName=\"conformpassword\" [toggleMask]=\"true\" [feedback]=\"false\">\r\n                </p-password>\r\n                <div *ngIf=\"\r\n                    resetFormcontrols['conformpassword'].hasError('required') &&\r\n                    resetFormcontrols['conformpassword'].touched\r\n                  \" class=\"p-error block\">\r\n                  <small>Required</small>\r\n                </div>\r\n                <div class=\"p-error block\" *ngIf=\"\r\n                    resetFormcontrols['conformpassword'].hasError('NoPassswordMatch') &&\r\n                    resetFormcontrols['conformpassword'].touched\r\n                  \">\r\n                  <small>Password Does not match</small>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12 mt-2 text-right\">\r\n              <p-button label=\"Save Changes\" styleClass=\"px-3 py-1\" (click)=\"changePassword()\"\r\n                [disabled]=\"resetPasswordForm.invalid\"></p-button>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n        <!-- Tab End -->\r\n\r\n        <!-- Theme Customizer Tab -->\r\n        <div class=\"tab-pane fade\" id=\"theme_tab\" role=\"tabpanel\" aria-labelledby=\"v-theme-a\">\r\n          <div class=\"strip_head toggleleft mb-4\">\r\n            <span class=\"report_head font-weight-bold\">Theme Customizer</span>\r\n          </div>\r\n          <div class=\"customizer customizer-styling pt-3\">\r\n            <!-- Skin -->\r\n            <div class=\"customizer-styling-skin skin mb-4\">\r\n              <h6 class=\"font-weight-bold mb-2\">Skin</h6>\r\n              <div class=\"d-flex justify-content-start align-items-center\">\r\n                <div *ngFor=\"let theme of themes\" class=\"custom-control custom-radio mr-4\">\r\n                  <figure [ngClass]=\"selectedTheme === theme.key ? 'active' : ''\">\r\n                    <label role=\"link\" class=\"mb-0 theme-select\" for=\"theme_{{ theme.key }}\">\r\n                      <img src=\"{{ theme.image }}\" class=\"img-fluid\" alt=\"{{ theme.name }}\" />\r\n                    </label>\r\n                    <figcaption>\r\n                      <input type=\"radio\" id=\"theme_{{ theme.key }}\" name=\"{{ theme.name }}\"\r\n                        class=\"custom-control-input layout-name\" [value]=\"theme.key\" [(ngModel)]=\"selectedTheme\"\r\n                        [ngModelOptions]=\"{ standalone: true }\" (click)=\"setTheme(theme.key)\" />\r\n                      <label class=\"custom-control-label mt-2\" for=\"theme_{{ theme.key }}\">{{ theme.name }}</label>\r\n                    </figcaption>\r\n                  </figure>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"customizer-styling-skin d-none mb-3\">\r\n              <h6 class=\"font-weight-bold mb-2\">Font</h6>\r\n              <div class=\"d-flex justify-content-start align-items-center\">\r\n                <div *ngFor=\"let fontSet of fontSetList\" class=\"custom-control custom-radio mr-4\">\r\n                  <figure [ngClass]=\"selectedFont === fontSet.key ? 'active' : ''\">\r\n                    <label for=\"font_{{ fontSet.key }}\" class=\"font-box mb-0 theme-select\"> Aa </label>\r\n                    <figcaption>\r\n                      <input type=\"radio\" id=\"font_{{ fontSet.key }}\" name=\"{{ fontSet.name }}\"\r\n                        class=\"custom-control-input layout-name\" [value]=\"fontSet.key\" [(ngModel)]=\"selectedFont\"\r\n                        [ngModelOptions]=\"{ standalone: true }\" (click)=\"setFont(fontSet.key)\" />\r\n                      <label class=\"custom-control-label mt-2\" for=\"font_{{ fontSet.key }}\">{{ fontSet.name }}</label>\r\n                    </figcaption>\r\n                  </figure>\r\n                </div>\r\n              </div>\r\n            </div> -->\r\n\r\n            <div class=\"customizer-styling-skin mb-3\">\r\n              <h6 class=\"font-weight-bold mb-2\">Font Size (<span id=\"rs-bullet\" class=\"rs-label\">{{selectedFont}}</span>)</h6>\r\n              <div class=\"d-flex justify-content-start align-items-center col-lg-4 col-md-4 col-12 p-0\">\r\n                <div class=\"custom-control custom-radio w-100 mr-4\">\r\n                  <div class=\"range-slider\">\r\n                    <input id=\"rs-range-line\" class=\"rs-range\" type=\"range\" #ref value=\"{{selectedFont}}\" min=\"13\" max=\"20\"   [ngModelOptions]=\"{ standalone: true }\" [(ngModel)]=\"selectedFont\" (change)=\"setRangeFont(ref.value)\">\r\n                  </div>\r\n                  <div class=\"box-minmax\">\r\n                    <span>13</span><span>20</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <button class=\"pull-right mr-2 mb-2 btn btn-primary btncommon\" (click)=\"updateStyling()\">Save Changes</button>\r\n        </div>\r\n        <!-- Tab End -->\r\n\r\n        <div class=\"tab-pane fade\" id=\"config_settings\" role=\"tabpanel\">\r\n          <lib-config-login-settings></lib-config-login-settings>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";.profile .pic-upload{position:relative;display:inline-flex}.profile .pic-upload .file-upload-btn{margin-bottom:0;position:absolute;bottom:5px;right:0px;font-size:var(--font-15)}.profile .right-container p{color:var(--text-dark)}.profile .autosuggest{position:absolute;top:24px;left:15px;right:15px;bottom:auto;transform:translateY(38px);will-change:transform;min-width:10rem;padding:.5rem;margin:.125rem 0 0;font-size:1rem;color:var(--text-dark);text-align:left;list-style:none;background-color:var(--bg-light);background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem;z-index:9;max-height:200px;overflow:auto}.profile .autosuggest li{cursor:pointer;font-size:13px;line-height:35px;border-bottom:solid 1px var(--table-border)}.profile .autosuggest li:hover{color:var(--text-dark)}.profile .autosuggest li:last-child{border-bottom:none}.profile .nav-pills .nav-link{position:relative;color:#767676;background-color:transparent}.profile .nav-pills .nav-link.active{background-color:transparent;color:var(--primary);font-weight:600}.profile .nav-pills .nav-link.active :before{content:\"chevron_right\";font-family:\"Material Icons\";position:absolute;right:0;left:auto}@media screen and (min-width: 1180px){.profile{height:calc(100vh - 100px)}}@media screen and (min-width: 768px){.profile .container-group{display:flex}.profile .container-group .left-container{border-right:1px solid var(--table-border);height:100%;width:280px}.profile .container-group .right-container{height:100%;width:calc(100% - 280px)}.profile .nav-pills .nav-link.active :before{display:block}}@media screen and (max-width: 767px){.container-group .left-container{width:100%}.container-group .left-container .nav-pills{border-bottom:1px solid var(--table-border)}.container-group .right-container{width:100%}.container-group .right-container .tab-pane .strip_head{text-align:center}.container-group .nav-pills .nav-link.active :before{display:none}}.customizer .custom-checkbox.custom-control,.customizer .custom-radio.custom-control{padding-left:0}.customizer .custom-checkbox.custom-control .theme-select,.customizer .custom-radio.custom-control .theme-select{border:2px solid #ddd;border-radius:7px}.customizer .custom-checkbox.custom-control .active .theme-select,.customizer .custom-radio.custom-control .active .theme-select{border-color:var(--primary)}.customizer .custom-checkbox .custom-control-input:checked~.custom-control-label:before,.customizer .custom-radio .custom-control-input:checked~.custom-control-label:before{content:\"\\f00c\";font-family:\"FontAwesome\",sans-serif;color:var(--hover-text);background-color:var(--btn);border-color:var(--btn);font-size:10px;display:flex;align-items:center;padding:2px}.customizer .custom-checkbox label,.customizer .custom-radio label{cursor:pointer}.customizer .custom-checkbox .font-box,.customizer .custom-radio .font-box{display:flex;justify-content:center;align-items:center;width:150px;height:120px;color:var(--text-dark)}.customizer .custom-checkbox .custom-control-label,.customizer .custom-radio .custom-control-label{position:relative;vertical-align:middle;font-size:var(--base-font-size);line-height:normal;color:var(--text-dark);cursor:pointer;padding-left:25px}.customizer .custom-checkbox .custom-control-label:after,.customizer .custom-radio .custom-control-label:after{border-color:var(--btn)}.customizer .custom-checkbox .custom-control-label:before,.customizer .custom-checkbox .custom-control-label:after,.customizer .custom-radio .custom-control-label:before,.customizer .custom-radio .custom-control-label:after{background-image:none;width:16px;height:16px;left:0;box-shadow:none;top:0}.customizer hr{border-color:var(--table-border)}.customizer .customizer-header{background:var(--background-color);color:var(--text-dark)}.customizer .customizer-header .customizer-close{position:absolute;right:.6rem;top:.6rem;padding:7px;width:auto;z-index:10;color:var(--text-dark);cursor:pointer}.customizer .customizer-header .customizer-close .material-icon{font-size:1.5rem}.customizer .customizer-header .customizer-close:hover{color:var(--btn)}.customizer h4{font-size:var(--font-15);font-weight:600;color:var(--text-dark)}.customizer h6{font-size:var(--font-14);color:var(--text-dark)}.customizer p{font-size:var(--base-font-size);font-weight:400;color:var(--text-dark)}.customizer .customizer-toggle{background:var(--btn);color:var(--hover-text);box-shadow:-3px 0 8px #22292f1a;border-top-left-radius:6px;border-bottom-left-radius:6px;position:absolute;top:50%;width:38px;height:38px;left:-39px;text-align:center;line-height:40px;border-left:1px solid var(--checkbox-border);cursor:pointer}.customizer .customizer-toggle .fa-cog{font-size:var(--font-15)}.customizer .customizer-toggle:hover{text-decoration:none}.customizer .customizer-styling-skin.skin .custom-control .custom-control-label{position:relative;padding-left:25px}.customizer .custom-control:first-child .font-box{font-size:var(--font-21);font-weight:400}.customizer .custom-control:last-child .font-box{font-size:var(--font-26);font-weight:600}.box-minmax{margin-top:15px;width:100%;display:flex;justify-content:space-between;font-size:14px;color:var(--label-text)}.box-minmax span:first-child{margin-left:4px}.rs-range{margin-top:29px;width:100%;appearance:none;-webkit-appearance:none}.rs-range:focus{outline:none;border:none!important}.rs-range::-webkit-slider-runnable-track{width:100%;height:1px;cursor:pointer;box-shadow:none;background:var(--text-dark);border-radius:0;border:0px solid #010101}.rs-range::-moz-range-track{width:100%;height:1px;cursor:pointer;box-shadow:none;background:var(--btn);border-radius:0;border:0px solid #010101}.rs-range::-webkit-slider-thumb{box-shadow:none;border:0px solid var(--table-border);box-shadow:0 10px 10px #00000040;height:30px;width:20px;border-radius:22px;background:var(--btn);cursor:pointer;appearance:none;-webkit-appearance:none;margin-top:-15px}.rs-range::-moz-range-thumb{box-shadow:none;border:0px solid var(--table-border);box-shadow:0 10px 10px #00000040;height:42px;width:22px;border-radius:22px;background:var(--btn);cursor:pointer;appearance:none;-webkit-appearance:none;margin-top:-20px}.rs-range::-moz-focus-outer{border:0}.rs-label{text-align:center;font-weight:bold;color:var(--label-text);line-height:normal;font-size:14px}.rs-label:after{content:\"px\";font-size:14px;letter-spacing:.07em}\n"], components: [{ type: AlertComponent, selector: "app-alert" }, { type: i8$1.Calendar, selector: "p-calendar", inputs: ["style", "styleClass", "inputStyle", "inputId", "name", "inputStyleClass", "placeholder", "ariaLabelledBy", "iconAriaLabel", "disabled", "dateFormat", "multipleSeparator", "rangeSeparator", "inline", "showOtherMonths", "selectOtherMonths", "showIcon", "icon", "appendTo", "readonlyInput", "shortYearCutoff", "monthNavigator", "yearNavigator", "hourFormat", "timeOnly", "stepHour", "stepMinute", "stepSecond", "showSeconds", "required", "showOnFocus", "showWeek", "showClear", "dataType", "selectionMode", "maxDateCount", "showButtonBar", "todayButtonStyleClass", "clearButtonStyleClass", "autoZIndex", "baseZIndex", "panelStyleClass", "panelStyle", "keepInvalid", "hideOnDateTimeSelect", "touchUI", "timeSeparator", "focusTrap", "showTransitionOptions", "hideTransitionOptions", "tabindex", "view", "defaultDate", "minDate", "maxDate", "disabledDates", "disabledDays", "yearRange", "showTime", "responsiveOptions", "numberOfMonths", "firstDayOfWeek", "locale"], outputs: ["onFocus", "onBlur", "onClose", "onSelect", "onClear", "onInput", "onTodayClick", "onClearClick", "onMonthChange", "onYearChange", "onClickOutside", "onShow"] }, { type: ConfigLoginSettingsComponent, selector: "lib-config-login-settings" }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i10.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i10$1.InputText, selector: "[pInputText]" }, { type: i10.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i10.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i2.RadioControlValueAccessor, selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]", inputs: ["name", "formControlName", "value"] }, { type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i2.RangeValueAccessor, selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileComponent$1, decorators: [{
            type: Component,
            args: [{
                    selector: 'core-profile',
                    templateUrl: './profile.component.html',
                    styleUrls: ['./profile.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: AuthService }, { type: i2.FormBuilder }, { type: HttpService }, { type: ProfileService }, { type: AttachmentsService }, { type: DataStoreService }]; } });

class ProfileComponent {
    constructor(permissionStore, _storeservice) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
        this.RBACORG = new RBACINFO();
    }
    ngOnInit() {
        this.profileEvent.subscribe((val) => {
            this.RBACORG = val.RBACORG;
            this.PERMISSION = val.PERMISSION;
            this._storeservice.setData('RBACORG', this.RBACORG);
            this.permissionStore.setStore(this.PERMISSION);
        });
    }
}
ProfileComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileComponent, deps: [{ token: PermissionStore }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
ProfileComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ProfileComponent, selector: "profile", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", profileEvent: "profileEvent" }, ngImport: i0, template: `
    <core-profile></core-profile>
  `, isInline: true, components: [{ type: ProfileComponent$1, selector: "core-profile" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'profile',
                    template: `
    <core-profile></core-profile>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: PermissionStore }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], profileEvent: [{
                type: Input
            }] } });

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
PicsConfigLoginSettingsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsConfigLoginSettingsModule, declarations: [ConfigLoginSettingsComponent], imports: [CommonModule,
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
        AlertModule], exports: [ConfigLoginSettingsComponent] });
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
                        ConfigLoginSettingsComponent
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
                    exports: [ConfigLoginSettingsComponent],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });

class PicsProfileModule {
}
PicsProfileModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsProfileModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PicsProfileModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsProfileModule, declarations: [ProfileComponent$1], imports: [CommonModule,
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
        AlertModule,
        PicsConfigLoginSettingsModule], exports: [ProfileComponent$1] });
PicsProfileModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsProfileModule, imports: [[
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
            AlertModule,
            PicsConfigLoginSettingsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsProfileModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ProfileComponent$1
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
                        AlertModule,
                        PicsConfigLoginSettingsModule
                    ],
                    exports: [
                        ProfileComponent$1
                    ],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });

class ProfileSettingsModule {
}
ProfileSettingsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileSettingsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ProfileSettingsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileSettingsModule, declarations: [ProfileComponent], imports: [PicsProfileModule,
        PicsConfigLoginSettingsModule], exports: [ProfileComponent] });
ProfileSettingsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileSettingsModule, providers: [ProfileService, AttachmentsService, ConfigurationSettingsService, HttpClient, HttpService, AlertService, AuthService, ConfirmationService, PermissionStore, DataStoreService], imports: [[
            PicsProfileModule,
            PicsConfigLoginSettingsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileSettingsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ProfileComponent
                    ],
                    imports: [
                        PicsProfileModule,
                        PicsConfigLoginSettingsModule
                    ],
                    exports: [
                        ProfileComponent
                    ],
                    providers: [ProfileService, AttachmentsService, ConfigurationSettingsService, HttpClient, HttpService, AlertService, AuthService, ConfirmationService, PermissionStore, DataStoreService]
                }]
        }] });

/*
 * Public API Surface of profile
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ProfileComponent, ProfileService, ProfileSettingsModule };
//# sourceMappingURL=pics-core-profile.js.map
