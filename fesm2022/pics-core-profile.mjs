import * as i0 from '@angular/core';
import { Injectable, Directive, Input, HostListener, Component, EventEmitter, Output, NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BehaviorSubject, Subject, of } from 'rxjs';
import * as i1 from '@angular/common/http';
import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { throwError } from 'rxjs/internal/observable/throwError';
import { map } from 'rxjs/operators';
import * as i2 from '@angular/forms';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i1$1 from '@angular/router';
import { NavigationStart } from '@angular/router';
import * as i7 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i8 from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import * as i9 from 'primeng/checkbox';
import { CheckboxModule } from 'primeng/checkbox';
import * as i10 from 'primeng/dropdown';
import { DropdownModule } from 'primeng/dropdown';
import * as i11 from 'primeng/button';
import { ButtonModule } from 'primeng/button';
import * as i12 from 'primeng/table';
import { TableModule } from 'primeng/table';
import * as i13 from 'primeng/inputtext';
import { InputTextModule } from 'primeng/inputtext';
import * as i14 from 'primeng/inputmask';
import { InputMaskModule } from 'primeng/inputmask';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
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
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { TreeSelectModule } from 'primeng/treeselect';

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
}
class AttachmentConfig {
    static EndPoint = {
        Attachments: {
            GetAttachmentReferral: '/ref/attachment/referral',
            GetCategoryLookup: '/lookup/lookupbycategoryname',
            UploadKey: '/common/files/upload-key',
            DownloadKey: '/common/files/download-key',
            PostAttachment: '/ref/attachment/create',
            PutAttachment: '/ref/attachment'
        }
    };
}
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
let AccessManagementConfig$1 = class AccessManagementConfig {
    static EndPoint = {
        Organization: {
            getOrganizationList: '/org/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        }
    };
};
class MasterURL {
    static EndPoints = {
        lookup: {
            createCategory: '/platform/master/lookup/category',
            updateDeleteCategory: '/platform/master/lookup/category/{id}',
            lookup: '/platform/master/lookup/{id}',
            createLookup: '/platform/master/lookup',
            getPermissionRoleById: '/access-control/permission/role/{id}',
            getAllCategoryTree: '/platform/master/lookup/category/tree/{applicationid}',
            getLookupTree: '/platform/master/lookup/tree/{categoryid}',
            getPermissionsTree: '/access-control/permission/application/{applicationid}',
            GetCategoryLookup: '/platform/master/lookup/lookupbycategoryname'
        }
    };
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
            }
        }
    };
}
class RBACINFO {
    apiHost = '';
    tokenKey = '';
    others;
    orgID;
    environment;
    optinPapperless;
}
class Environment {
    mstrUsername;
    mstrPassword;
    mstrURL;
    mstrProjectID;
    applicationid;
    priority;
}

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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpService, deps: [{ token: i1.HttpClient }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: DataStoreService }]; } });

class ThemeService {
    active;
    activeFont;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ThemeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ThemeService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ThemeService, decorators: [{
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

class ProfileService {
    httpService;
    themeService;
    localstorage;
    profileImage = new Subject();
    constructor(httpService, themeService, localstorage) {
        this.httpService = httpService;
        this.themeService = themeService;
        this.localstorage = localstorage;
    }
    setUserPreference() {
        const user_id = this.localstorage.getItem('id');
        if (user_id) {
            this.getUserPreference(user_id).subscribe((res) => {
                if (res.data && res.data?.config) {
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
    getCategoryLookup(name) {
        return this.httpService.get(MasterURL.EndPoints.lookup.GetCategoryLookup + '/' + name);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileService, deps: [{ token: HttpService }, { token: ThemeService }, { token: LocalService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: HttpService }, { type: ThemeService }, { type: LocalService }]; } });

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

class AppConstants {
    static errorMessage = 'Something went wrong!';
    static regexEmail = '^[0-9a-zA-Z.-]+[@][0-9a-zA-Z.-]+[.][0-9a-zA-Z]{2,}$';
    static errorList = [
        'Include at least one number',
        'Include at least one special character',
        'Include at least one upper case letter',
        'Include at least one lower case letter',
        'Be at least 8 characters in length',
        'Should not exceed sixteen (16) characters',
        'Space characters are invalid'
    ];
}

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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService, deps: [{ token: i1$1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService, decorators: [{
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
        const password = control.get('newpassword')?.value;
        const confirmPassword = control.get('conformpassword')?.value;
        if (password !== confirmPassword) {
            control.get('conformpassword')?.setErrors({ NoPassswordMatch: true });
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
    httpService;
    _router;
    sharedInfo;
    alertService;
    constructor(injector, httpService, _router) {
        this.httpService = httpService;
        this._router = _router;
        this.alertService = injector.get(AlertService);
    }
    orgInfo = new BehaviorSubject('');
    currentOrgInfo = this.orgInfo.asObservable();
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, deps: [{ token: i0.Injector }, { token: HttpService }, { token: i1$1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: HttpService }, { type: i1$1.Router }]; } });

class AttachmentsService {
    http;
    constructor(http) {
        this.http = http;
    }
    uploadKey(objparams) {
        return this.http.post(AttachmentConfig.EndPoint.Attachments.UploadKey, objparams);
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

class PasswordToggleDirective {
    el;
    passwordField;
    iconForPasswordType = 'pi-eye-slash';
    iconForTextType = 'pi-eye';
    currentType = 'password';
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        this.passwordField.type = this.currentType;
        this.changeIcon();
    }
    onIconClicked() {
        this.currentType = this.currentType === 'password' ? 'text' : 'password';
        this.passwordField.type = this.currentType;
        this.changeIcon();
    }
    changeIcon() {
        this.el.nativeElement.classList.remove(this.iconForPasswordType, this.iconForTextType);
        this.el.nativeElement.classList.add(this.currentType === 'password' ? this.iconForPasswordType : this.iconForTextType);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PasswordToggleDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: PasswordToggleDirective, selector: "[appPasswordToggle]", inputs: { passwordField: "passwordField", iconForPasswordType: "iconForPasswordType", iconForTextType: "iconForTextType" }, host: { listeners: { "click": "onIconClicked()" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PasswordToggleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appPasswordToggle]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { passwordField: [{
                type: Input
            }], iconForPasswordType: [{
                type: Input
            }], iconForTextType: [{
                type: Input
            }], onIconClicked: [{
                type: HostListener,
                args: ['click']
            }] } });

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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AlertComponent, selector: "app-alert", ngImport: i0, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], dependencies: [{ kind: "directive", type: i7.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-alert', template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"] }]
        }], ctorParameters: function () { return [{ type: AlertService }]; } });

let ProfileComponent$1 = class ProfileComponent {
    authService;
    formBuilder;
    httpService;
    profileService;
    attachmentService;
    _storeservice;
    passwordSuccess = new EventEmitter();
    userForm;
    userid;
    thumbnail;
    imageData;
    uploadedFile;
    urlPath;
    attachType;
    resetPasswordForm;
    alertService;
    formSubmitted;
    localstorage;
    isValid = false;
    socketSubscription;
    themes = [];
    fontSetList = [];
    selectedTheme;
    selectedFont;
    checked = false;
    themeService;
    rocketIcon;
    environment;
    RBACORG = new RBACINFO();
    orgSubs;
    orgId;
    optinPapper = false;
    errors = AppConstants.errorList;
    userId;
    externalOnly = false;
    contactTypeList = [];
    languagesList = [];
    constructor(injector, authService, formBuilder, httpService, profileService, attachmentService, _storeservice) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.httpService = httpService;
        this.profileService = profileService;
        this.attachmentService = attachmentService;
        this._storeservice = _storeservice;
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
        this.userId = sessionStorage.getItem('id');
        const roleid = sessionStorage.getItem('role_id');
        if (roleid === '28') {
            this.externalOnly = true;
        }
        ;
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
                if (this.RBACORG.optinPapperless) {
                    this.userForm.addControl('opt_in_for_paperless_documentation', new FormControl(''));
                    this.getUserPreferenceList();
                }
            }
        });
        this.profileService.getCategoryLookup('PHONE_NUMBER_TYPES').subscribe((res) => {
            res?.data?.map(z => {
                if (!z.parentid) {
                    this.contactTypeList.push(z);
                }
            });
        });
        this.profileService.getCategoryLookup('LANGUAGES').subscribe((res) => {
            res?.data?.map(z => {
                if (!z.parentid) {
                    this.languagesList.push(z);
                }
            });
        });
    }
    get contactData() {
        return this.userForm.get('contactData');
    }
    createRow(x) {
        return new FormGroup({
            id: new FormControl(x?.id ? x?.id : null),
            phonenumbertype: new FormControl(x?.phonenumbertype ? x?.phonenumbertype : ' ', [Validators.required]),
            phonenumber: new FormControl(x?.phonenumber ? x?.phonenumber : ' ', [Validators.required, Validators.pattern(/\(\d{3}\) \d{3}-\d{4}/)])
        });
    }
    addSerice() {
        this.contactData.push(this.createRow());
        const items = this.userForm.get('contactData');
        console.log(items, 'items addSerice');
    }
    removeSerice(i) {
        this.contactData.removeAt(i);
        const items = this.userForm.get('contactData');
        console.log(items, 'items removeSerice');
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
                    CustomValidator.patternValidator(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~])[A-Za-z\d`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{8,16}$/, { hasSpace: true }),
                    CustomValidator.patternValidator(/\d/, { hasNumber: true }),
                    CustomValidator.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
                    CustomValidator.patternValidator(/[a-z]/, { hasSmallCase: true }),
                    CustomValidator.patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, { hasSpecialCharacters: true }),
                    Validators.minLength(8)
                ])
            ],
            conformpassword: ['', Validators.required]
        }, {
            validators: [this.passwordMatchValidator, this.passwordValidator]
        });
    }
    initializeForm() {
        this.userForm = this.formBuilder.group({
            firstname: ['', Validators.required],
            middlename: [''],
            lastname: ['', Validators.required],
            // username: ['', Validators.required],
            // dob:[''],
            // phone: ['',[Validators.required, Validators.pattern(/\(\d{3}\) \d{3}-\d{4}/)]], 
            // HomePhone: ['',[Validators.required, Validators.pattern(/\(\d{3}\) \d{3}-\d{4}/)]],
            //dob: ['', Validators.required],
            opt_in_for_paperless_documentation: [''],
            email: ['', [Validators.required, Validators.pattern(AppConstants.regexEmail)]],
            alternate_email: ['', [Validators.required, Validators.pattern(AppConstants.regexEmail)]],
            userLanguage: [''],
            contactData: this.formBuilder.array([this.createRow()]),
        });
    }
    get resetFormcontrols() {
        const isInvalid = this.resetPasswordForm.controls['newpassword'].status;
        const newpassword = this.resetPasswordForm.value['newpassword'];
        if (isInvalid === 'INVALID' && newpassword !== '') {
            this.isValid = true;
        }
        else {
            this.isValid = false;
        }
        return this.resetPasswordForm.controls;
    }
    passwordValidator(group) {
        const { newpassword, conformpassword } = group.value;
        if (!newpassword)
            return null;
        return newpassword !== conformpassword ? { NoPassswordMatch: 'Password does not match' } : null;
    }
    passwordMatchValidator(group) {
        const { currentpassword, newpassword } = group.value;
        if (!currentpassword)
            return null;
        return currentpassword === newpassword ? { newPasswordSame: 'New Password same as Current Password' } : null;
    }
    getUserInfo() {
        this.profileService.getAllUserList(this.userid).subscribe((res) => {
            const patchValuedata = res.data;
            const personData = res.data?.person;
            this.thumbnail = patchValuedata.additionalinfo?.thumbnail?.url || '';
            this.userForm.patchValue({
                firstname: patchValuedata.firstname,
                middlename: patchValuedata.middlename,
                lastname: patchValuedata.lastname,
                // username: patchValuedata.username,
                // dob: patchValuedata.dob ? new Date(patchValuedata.dob) : null,
                email: patchValuedata.email,
                alternate_email: personData?.email?.find(e => e?.emailtype == 'alternate_email')?.email
                // HomePhone:personData?.phone_numbers?.find(p => p?.phonenumbertype === 'HOME_PHONE')?.phonenumber,
            });
            const control = this.userForm.controls['contactData'];
            control.controls = [];
            if (personData?.phone_numbers?.length) {
                personData?.phone_numbers?.forEach(x => {
                    control.push(this.createRow(x));
                });
            }
        });
    }
    get formValidate() {
        return this.userForm.controls;
    }
    getUserPreferenceList() {
        this.profileService.getUserPreference(this.userid).subscribe((res) => {
            const patchValuedata = res.data;
            this.userForm.patchValue({
                opt_in_for_paperless_documentation: patchValuedata?.opt_in_for_paperless_documentation,
                userLanguage: patchValuedata?.primary_language_cd
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
                this.urlPath = res.data?.path;
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
        // const validate = this.userForm.valid
        // if(validate){}
        this.profileService.updateUser(userData, this.userid).subscribe(() => {
            this.profileService.getProfile({
                url: this.thumbnail,
                name: this.userForm.value.firstname
            });
            if (this.RBACORG.optinPapperless) {
                this.userForm.addControl('opt_in_for_paperless_documentation', new FormControl(''));
            }
            this.updateStyling();
            this.alertService.success('Profile updated successfully');
        });
    }
    updateStyling() {
        const body = {
            type: 'USER_THEME_PREFERENCES',
            mappedid: this.userid,
            config: JSON.stringify({ theme: this.selectedTheme, font: this.selectedFont }),
            opt_in_for_paperless_documentation: this.userForm.value.opt_in_for_paperless_documentation,
            primary_language_cd: this.userForm.get('userLanguage').value
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
        this.formSubmitted = true;
        if (!this.resetPasswordForm.valid) {
            return;
        }
        const obj = {
            id: Number(this.resetPasswordForm.value['id']),
            currentpassword: this.resetPasswordForm.value['currentpassword'],
            newpassword: this.resetPasswordForm.value['newpassword']
        };
        this.authService.ResetPassword(obj).subscribe(_res => {
            this.passwordSuccess.emit('change-password');
            this.authService.logout();
        }, err => {
            if (typeof err?.error?.message === 'string') {
                this.alertService.error('Current Password is Invalid.');
            }
            else {
                this.alertService.error(AppConstants.errorMessage);
            }
        });
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
        this.userForm.controls['alternate_email'].reset();
        this.userForm.controls['phone'].reset();
        this.userForm.controls['HomePhone'].reset();
        this.userForm.controls['phone'].reset();
        this.userForm.controls['HomePhone'].reset();
        this.thumbnail = '';
    }
    reset() {
        this.resetPasswordForm.controls['conformpassword'].reset();
        this.resetPasswordForm.controls['newpassword'].reset();
        this.resetPasswordForm.controls['currentpassword'].reset();
        this.formSubmitted = false;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileComponent, deps: [{ token: i0.Injector }, { token: AuthService }, { token: i2.FormBuilder }, { token: HttpService }, { token: ProfileService }, { token: AttachmentsService }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ProfileComponent, selector: "core-profile", outputs: { passwordSuccess: "passwordSuccess" }, ngImport: i0, template: "<app-alert></app-alert>\r\n<div class=\"card w-100 profile\">\r\n  <div class=\"container-group h-100\" [formGroup]=\"userForm\">\r\n    <div class=\"left-container\">\r\n      <div class=\"nav flex-column nav-pills py-4 px-3\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\r\n        <a class=\"nav-link d-flex align-items-center mb-3 active\" id=\"v-pills-home-tab\" data-toggle=\"pill\"\r\n          href=\"#v-pills-home\" role=\"tab\" aria-controls=\"v-pills-home\" aria-selected=\"true\">\r\n          <span class=\"material-icon material-symbols-outlined mr-2\">person</span>\r\n          Edit Profile\r\n        </a>\r\n        <a class=\"nav-link d-flex align-items-center mb-3\" id=\"v-pills-profile-tab\" data-toggle=\"pill\"\r\n          href=\"#v-pills-profile\" role=\"tab\" aria-controls=\"v-pills-profile\" aria-selected=\"false\">\r\n          <span class=\"material-icon material-symbols-outlined mr-2\">lock_open</span>\r\n          Change Password\r\n        </a>\r\n        <a class=\"nav-link d-flex align-items-center\" id=\"v-theme-a\" data-toggle=\"pill\" href=\"#theme_tab\" role=\"tab\"\r\n          aria-controls=\"theme_tab\" aria-selected=\"false\">\r\n          <span class=\"material-icon material-symbols-outlined mr-2\">palette</span>\r\n          Theme\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"right-container\">\r\n      <div class=\"tab-content py-4 px-4\" id=\"v-pills-tabContent\">\r\n        <!-- Edit Profile Tab -->\r\n        <div class=\"tab-pane fade show active\" id=\"v-pills-home\" role=\"tabpanel\" aria-labelledby=\"v-pills-home-tab\">\r\n          <div class=\"strip_head toggleleft mb-3\">\r\n            <span class=\"report_head font-weight-bold\">Edit Profile</span>\r\n          </div>\r\n          <div class=\"p-fluid p-formgrid pic-upload-group row justify-content-md-center\">\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12 text-center\">\r\n              <figure class=\"mt-2 mb-2 pic-upload justify-content-md-center\">\r\n                <img width=\"64\" class=\"rounded-circle border\" [src]=\"thumbnail || 'assets/images/user-empty.png'\"\r\n                  alt=\"upload\" />\r\n                <label for=\"file\" role=\"button\"\r\n                  class=\"material-icon material-symbols-outlined p-1 rounded-circle bg-primary text-white file-upload-btn\">edit</label>\r\n                <input type=\"file\" id=\"file\" aria-hidden=\"true\" style=\"visibility: hidden; display: none\"\r\n                  (change)=\"handleFileInput($event)\" />\r\n              </figure>\r\n              <button class=\"btn btn-primary\" *ngIf=\"thumbnail\" (click)=\"removeThumbnail()\">Remove</button>\r\n              <p><small>Image size max 50KB</small></p>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-fluid p-formgrid row\">\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"fname\" class=\"referral-form-labels\">\r\n                First Name\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <input id=\"fname\" type=\"text\" formControlName=\"firstname\" placeholder=\"Enter First Name\"\r\n                aria-describedby=\"fname\" pInputText />\r\n              <div *ngIf=\"userForm.get('firstname').hasError('required')\" class=\"text-danger\">\r\n                First name is required.\r\n              </div>\r\n            </div>\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"mname\" class=\"referral-form-labels\">Middle Name </label>\r\n              <input id=\"mname\" type=\"text\" placeholder=\"Enter Middle Name\" formControlName=\"middlename\"\r\n                aria-describedby=\"mname\" pInputText />\r\n            </div>\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"lName\" class=\"referral-form-labels\">\r\n                last name\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <input id=\"lName\" type=\"text\" placeholder=\"Enter Last Name\" formControlName=\"lastname\" pInputText\r\n                aria-describedby=\"lName\" />\r\n              <div *ngIf=\"userForm.get('lastname').hasError('required')\" class=\"text-danger\">\r\n                Last name is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-fluid p-formgrid row\">\r\n            <!-- <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"userName\" class=\"referral-form-labels\">\r\n                User Name\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <input id=\"userName\" type=\"text\" readonly=\"true\" placeholder=\"Enter User Name\" formControlName=\"username\"\r\n                aria-describedby=\"userName\" pInputText />\r\n            </div> -->\r\n            <!-- <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"dateformat\" class=\"referral-form-labels\">\r\n                DOB -->\r\n            <!-- <span class=\"requiredfield text-danger\">*</span> -->\r\n            <!-- </label>      \r\n              <p-calendar placeholder=\"Select Date Of Birth\" formControlName=\"dob\" dateFormat=\"yy-mm-dd\"\r\n                [showOnFocus]=\"true\" inputId=\"dateformat\">\r\n              </p-calendar>\r\n            </div>\r\n          </div> -->\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\" *ngIf=\"externalOnly\">\r\n              <label for=\"usersAlterEmailid\" class=\"referral-form-labels\">\r\n                Alternative Email ID\r\n                <!-- <span class=\"requiredfield text-danger\">*</span> -->\r\n              </label>\r\n              <input id=\"usersAlterEmailid\" placeholder=\"Enter Alternative Email ID\" formControlName=\"alternate_email\"\r\n                type=\"text\" pInputText />\r\n              <div *ngIf=\"userForm.get('alternate_email').hasError('pattern')\" class=\"text-danger\">\r\n                Please enter valid email.\r\n              </div>\r\n            </div>\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"usersEmailid\" class=\"referral-form-labels\">\r\n                Email ID\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <input id=\"usersEmailid\" placeholder=\"Enter Email ID\" formControlName=\"email\" type=\"text\" pInputText\r\n                readonly />\r\n            </div>\r\n          </div>\r\n          <div class=\"p-fluid p-formgrid row\">\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"usersEmailid\" class=\"referral-form-labels\">\r\n                Language </label>\r\n              <p-dropdown\r\n              [options]=\"languagesList\"\r\n              placeholder=\"Select Language\"\r\n              formControlName=\"userLanguage\"\r\n              appendTo=\"body\"\r\n              optionLabel=\"lookupvalue\"\r\n              optionValue=\"lookupkey\"\r\n              [style]=\"{'minWidth':'80%'}\">\r\n            </p-dropdown>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"p-fluid p-formgrid row\">\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"phone\" class=\"referral-form-labels\">\r\n                Cell Phone\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <p-inputMask id=\"phone\" mask=\"(999) 999-9999\" styleClass=\"w-100\"\r\n                formControlName=\"phone\" placeholder=\"Enter Cell Phone\" aria-describedby=\"phone\"></p-inputMask>\r\n              <div *ngIf=\"userForm.get('phone').hasError('required')\" class=\"text-danger\">\r\n                Cell phone number is required.\r\n              </div>\r\n\r\n              <div *ngIf=\"userForm.get('phone').hasError('pattern')\" class=\"text-danger\">\r\n                Please enter valid cell phone number.\r\n              </div>\r\n            </div>\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"HomePhone\" class=\"referral-form-labels\">Home Phone </label>\r\n              <p-inputMask id=\"HomePhone\" mask=\"(999) 999-9999\" [autoClear]=\"false\" styleClass=\"w-100\"\r\n                formControlName=\"HomePhone\" placeholder=\" Enter Home Phone\" aria-describedby=\"HomePhone\"></p-inputMask>\r\n              <div *ngIf=\"userForm.get('HomePhone').hasError('pattern')\" class=\"text-danger\">\r\n                Please enter valid home phone number.\r\n              </div>\r\n            </div>\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\" *ngIf=\"externalOnly\">\r\n              <label class=\"d-md-block\">\r\n                &#160;\r\n              </label>\r\n              <button type=\"button\" class=\"btn btn-primary btn-icon p-1 my-2\" (click)=\"addSerice()\" title=\"Add New\"\r\n              pRipple>\r\n              <em class=\"pi pi-plus font-weight-bold\"></em>\r\n            </button>\r\n            </div>\r\n          </div> -->\r\n\r\n          <div>\r\n            <ng-container>\r\n              <p-table dataKey=\"value.id\" [value]=\"contactData.controls\" [responsive]=\"true\" formArrayName=\"contactData\">\r\n                <ng-template pTemplate=\"caption\">\r\n                  <div class=\"flex align-items-center justify-content-between\">\r\n                    Contact Details\r\n                    <button class=\"pull-right mb-2 btn btn-primary btncommon\" (click)=\"addSerice()\">+</button>\r\n                  </div>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"header\">\r\n                  <tr>\r\n                    <th id=\"datarules-roles\" style=\"width: 35%\">Conatct Type</th>\r\n                    <th id=\"datarules-permissions\" style=\"width: 35%\">Contact Number</th>\r\n                    <th id=\"datarules-action\" style=\"width: 20%\">Action</th>\r\n                    <th id=\"datarules-empty\" style=\"width: 10%\"></th>\r\n                  </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\">\r\n                  <ng-container>\r\n                    <tr [formGroupName]=\"rowIndex\">\r\n                      <td>\r\n                        <p-dropdown\r\n                        [options]=\"contactTypeList\"\r\n                        placeholder=\"Select Contact Type\"\r\n                        formControlName=\"phonenumbertype\"\r\n                        appendTo=\"body\"\r\n                        optionLabel=\"lookupvalue\"\r\n                        optionValue=\"lookupkey\"\r\n                        [style]=\"{'minWidth':'80%'}\">\r\n                      </p-dropdown>\r\n                        <!-- <div\r\n                          class=\"text-danger\"\r\n                          *ngIf=\"\r\n                            rowData.get('roles').errors && (rowData.get('roles').dirty || rowData.get('roles').touched)\r\n                          \">\r\n                          <div *ngIf=\"rowData.get('roles').errors?.required\">Role is Required</div>\r\n                        </div> -->\r\n                      </td>\r\n                      <td>\r\n                        <!-- <label for=\"contactNumber\" class=\"referral-form-labels\">Contact Number</label> -->\r\n                        <p-inputMask id=\"contactNumber\" mask=\"(999) 999-9999\"  [autoClear]=\"false\" styleClass=\"w-100\"\r\n                          formControlName=\"phonenumber\" placeholder=\"Enter Contact Number\" aria-describedby=\"contactNumber\" [unmask]=\"true\"></p-inputMask>\r\n                        <div\r\n                          class=\"text-danger\"\r\n                          *ngIf=\"\r\n                            rowData.get('phonenumber').errors &&\r\n                            (rowData.get('phonenumber').dirty || rowData.get('phonenumber').touched)\r\n                          \">\r\n                          <div *ngIf=\"rowData.get('phonenumber').errors?.required\">Phone Number is Required</div>\r\n                        </div>\r\n                      </td>\r\n                      <td>\r\n                        <button type=\"button\" class=\"btn btn-default\" title=\"delete\" (click)=\"removeSerice(rowIndex)\">\r\n                          <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-container>\r\n                </ng-template>\r\n              </p-table>\r\n            </ng-container>\r\n            <div class=\"p-fluid p-formgrid row mt-3\" *ngIf=\"RBACORG.optinPapperless\">\r\n              <div class=\"p-field col-md-12 col-12\">\r\n                <div class=\"checkbox\">\r\n                  <p-checkbox [(ngModel)]=\"checked\" [binary]=\"true\" inputId=\"binary\"\r\n                    formControlName=\"opt_in_for_paperless_documentation\">\r\n                  </p-checkbox>\r\n                  <label class=\"checklabel\" for=\"ch\">Opt-in for Paperless Documentation</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"p-fluid p-formgrid row\">\r\n              <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\"></div>\r\n              <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\"></div>\r\n              <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12 mb-0\">\r\n                <button class=\"pull-right mr-2 mb-2 btn btn-primary btncommon\" (click)=\"updateprofile()\">\r\n                  Save Changes\r\n                </button>\r\n                <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" (click)=\"clearForm()\">\r\n                  Clear\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Tab End -->\r\n\r\n        <!-- Change Password Tab -->\r\n        <div class=\"tab-pane fade\" id=\"v-pills-profile\" role=\"tabpanel\" aria-labelledby=\"v-pills-profile-tab\">\r\n          <div class=\"strip_head toggleleft mb-4\">\r\n            <span class=\"report_head font-weight-bold\">Change Password</span>\r\n          </div>\r\n          <div [formGroup]=\"resetPasswordForm\" class=\"reset-password-div\">\r\n            <div class=\"p-fluid p-formgrid row\">\r\n              <div class=\"p-field col-xl-4 col-lg-12 col-sm-4 col-md-12 col-12 mb-3\">\r\n                <label for=\"mailid\" aria-describedby=\"mailid\">Email <span class=\"requiredfield\">*</span></label>\r\n                <input type=\"text\" readonly=\"true\" id=\"mailid\" class=\"form-control\" formControlName=\"mailid\"\r\n                  pInputText />\r\n              </div>\r\n            </div>\r\n            <div class=\"p-fluid p-formgrid row\">\r\n              <div class=\"col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12 mb-2 position-relative\">\r\n                <label for=\"cpassword\" aria-describedby=\"cpassword\">Current Password <span\r\n                    class=\"requiredfield\">*</span></label>\r\n                <div class=\"position-relative\">\r\n                  <input [maxlength]=\"16\" formControlName=\"currentpassword\" #currentpassword type=\"password\"\r\n                    placeholder=\"Enter Current Password\" name=\"password\" id=\"password\" tabindex=\"0\" required pInputText\r\n                    style=\"padding-right: 40px;\" />\r\n                  <em class=\"pi eye-icon\"  aria-hidden=\"true\" appPasswordToggle [passwordField]=\"currentpassword\"></em>\r\n                </div>\r\n                <div class=\"p-error block\" *ngIf=\"\r\n                resetPasswordForm.get('currentpassword').errors && formSubmitted\">\r\n                  <small>Current password is required.</small>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12 mb-2 position-relative\">\r\n                <label for=\"npassword\" aria-describedby=\"npassword\">New Password <span\r\n                    class=\"requiredfield\">*</span></label>\r\n                <div class=\"position-relative\">\r\n                  <input [maxlength]=\"16\" formControlName=\"newpassword\" #newpassword type=\"password\"\r\n                    placeholder=\"Enter New Password\" name=\"password\" id=\"newpassword\" tabindex=\"0\" required pInputText\r\n                    style=\"padding-right: 40px;\" />\r\n                  <em class=\"pi eye-icon\" appPasswordToggle [passwordField]=\"newpassword\" aria-hidden=\"true\"></em>\r\n                </div>\r\n                <div class=\"autosuggest\" *ngIf=\"isValid\">\r\n                  <div class=\"p-error block\" *ngIf=\"resetFormcontrols['newpassword'].hasError('hasNumber')\">\r\n                    <em class=\"pi pi-times-circle\"></em>\r\n                    <small> {{ errors[0] }}</small>\r\n                  </div>\r\n                  <div class=\"p-error block\" *ngIf=\"resetFormcontrols['newpassword'].hasError('hasCapitalCase')\">\r\n                    <em class=\"pi pi-times-circle\"></em>\r\n                    <small> {{ errors[2] }}</small>\r\n                  </div>\r\n                  <div class=\"p-error block\" *ngIf=\"resetFormcontrols['newpassword'].hasError('hasSmallCase')\">\r\n                    <em class=\"pi pi-times-circle\"></em>\r\n                    <small> {{ errors[3] }}</small>\r\n                  </div>\r\n                  <small class=\"p-error block\"\r\n                    *ngIf=\"resetFormcontrols['newpassword'].hasError('hasSpecialCharacters')\">\r\n                    <em class=\"pi pi-times-circle\"></em>\r\n                    {{ errors[1] }}\r\n                  </small>\r\n                  <div class=\"p-error block\" *ngIf=\"resetFormcontrols['newpassword'].hasError('minlength')\">\r\n                    <em class=\"pi pi-times-circle\"></em>\r\n                    <small> {{ errors[4] }}</small>\r\n                  </div>\r\n                  <div class=\"p-error block\" *ngIf=\"resetFormcontrols['newpassword'].hasError('hasSpace')\">\r\n                    <em class=\"pi pi-times-circle\"></em>\r\n                    <small> {{ errors[6] }}</small>\r\n                  </div>\r\n                </div>\r\n                <div class=\"p-error block\" *ngIf=\"\r\n                    resetPasswordForm.get('newpassword').errors && formSubmitted\">\r\n                  <small>New Password is required</small>\r\n                </div>\r\n                <div class=\"p-error block\"\r\n                  *ngIf=\"\r\n                    resetPasswordForm.hasError('newPasswordSame') && formSubmitted && ! resetPasswordForm.get('newpassword').errors\">\r\n                  <small>New Password same as Current Password</small>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12 mb-2 position-relative\">\r\n                <label for=\"cnfpassword\" aria-describedby=\"cnfpassword\">Confirm Password <span\r\n                    class=\"requiredfield\">*</span></label>\r\n                <div class=\"position-relative\">\r\n                  <input [maxlength]=\"16\" formControlName=\"conformpassword\" #confirmpassword type=\"password\"\r\n                    placeholder=\"Confirm New Password\" name=\"password\" id=\"confirmpassword\" tabindex=\"0\" required\r\n                    pInputText style=\"padding-right: 40px;\" />\r\n                  <em class=\"pi eye-icon\" appPasswordToggle [passwordField]=\"confirmpassword\" aria-hidden=\"true\"></em>\r\n                </div>\r\n                <div *ngIf=\"\r\n                    resetFormcontrols['conformpassword'].hasError('required') &&\r\n                    resetFormcontrols['conformpassword'].touched\r\n                  \" class=\"p-error block\">\r\n                </div>\r\n                <div class=\"p-error block\" *ngIf=\"\r\n                resetPasswordForm.get('conformpassword').errors && formSubmitted\">\r\n                  <small>Confirm Password is required</small>\r\n                </div>\r\n                <div class=\"p-error block\" *ngIf=\"\r\n                  resetPasswordForm.hasError('NoPassswordMatch') && formSubmitted && ! resetPasswordForm.get('conformpassword').errors\r\n                 \">\r\n                  <small>Password does not match</small>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12 mt-2 text-right\">\r\n              <p-button label=\"Cancel\" styleClass=\"px-3 py-1 btn bg-white text-primary btncancel\"\r\n                (click)=\"reset()\"></p-button>\r\n              <p-button label=\"Save\" styleClass=\"px-3 py-1 ml-2\" (click)=\"changePassword()\"></p-button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Tab End -->\r\n\r\n        <!-- Theme Customizer Tab -->\r\n        <div class=\"tab-pane fade\" id=\"theme_tab\" role=\"tabpanel\" aria-labelledby=\"v-theme-a\">\r\n          <div class=\"strip_head toggleleft mb-4\">\r\n            <span class=\"report_head font-weight-bold\">Theme Customizer</span>\r\n          </div>\r\n          <div class=\"customizer customizer-styling pt-3\">\r\n            <!-- Skin -->\r\n            <div class=\"customizer-styling-skin skin mb-4\">\r\n              <h6 class=\"font-weight-bold mb-2\">Skin</h6>\r\n              <div class=\"d-flex justify-content-start align-items-center\">\r\n                <div *ngFor=\"let theme of themes\" class=\"custom-control custom-radio mr-4\">\r\n                  <figure [ngClass]=\"selectedTheme === theme.key ? 'active' : ''\">\r\n                    <label role=\"link\" class=\"mb-0 theme-select\" for=\"theme_{{ theme.key }}\">\r\n                      <img src=\"{{ theme.image }}\" class=\"img-fluid\" alt=\"{{ theme.name }}\" />\r\n                    </label>\r\n                    <figcaption>\r\n                      <input type=\"radio\" id=\"theme_{{ theme.key }}\" name=\"{{ theme.name }}\"\r\n                        class=\"custom-control-input layout-name\" [value]=\"theme.key\" [(ngModel)]=\"selectedTheme\"\r\n                        [ngModelOptions]=\"{ standalone: true }\" (click)=\"setTheme(theme.key)\" />\r\n                      <label class=\"custom-control-label mt-2\" for=\"theme_{{ theme.key }}\">{{ theme.name }}</label>\r\n                    </figcaption>\r\n                  </figure>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"customizer-styling-skin d-none mb-3\">\r\n              <h6 class=\"font-weight-bold mb-2\">Font</h6>\r\n              <div class=\"d-flex justify-content-start align-items-center\">\r\n                <div *ngFor=\"let fontSet of fontSetList\" class=\"custom-control custom-radio mr-4\">\r\n                  <figure [ngClass]=\"selectedFont === fontSet.key ? 'active' : ''\">\r\n                    <label for=\"font_{{ fontSet.key }}\" class=\"font-box mb-0 theme-select\"> Aa </label>\r\n                    <figcaption>\r\n                      <input type=\"radio\" id=\"font_{{ fontSet.key }}\" name=\"{{ fontSet.name }}\"\r\n                        class=\"custom-control-input layout-name\" [value]=\"fontSet.key\" [(ngModel)]=\"selectedFont\"\r\n                        [ngModelOptions]=\"{ standalone: true }\" (click)=\"setFont(fontSet.key)\" />\r\n                      <label class=\"custom-control-label mt-2\" for=\"font_{{ fontSet.key }}\">{{ fontSet.name }}</label>\r\n                    </figcaption>\r\n                  </figure>\r\n                </div>\r\n              </div>\r\n            </div> -->\r\n\r\n            <div class=\"customizer-styling-skin mb-3\">\r\n              <h6 class=\"font-weight-bold mb-2\">Font Size (<span id=\"rs-bullet\"\r\n                  class=\"rs-label\">{{selectedFont}}</span>)</h6>\r\n              <div class=\"d-flex justify-content-start align-items-center col-lg-4 col-md-4 col-12 p-0\">\r\n                <div class=\"custom-control custom-radio w-100 mr-4\">\r\n                  <div class=\"range-slider\">\r\n                    <input id=\"rs-range-line\" class=\"rs-range\" type=\"range\" #ref value=\"{{selectedFont}}\" min=\"13\"\r\n                      max=\"20\" [ngModelOptions]=\"{ standalone: true }\" [(ngModel)]=\"selectedFont\"\r\n                      (change)=\"setRangeFont(ref.value)\">\r\n                  </div>\r\n                  <div class=\"box-minmax\">\r\n                    <span>13</span><span>20</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <button class=\"pull-right mr-2 mb-2 btn btn-primary btncommon\" (click)=\"updateStyling()\">Save\r\n            Changes</button>\r\n        </div>\r\n        <!-- Tab End -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".profile .pic-upload{position:relative;display:inline-flex}.profile .pic-upload .file-upload-btn{margin-bottom:0;position:absolute;bottom:5px;right:0;font-size:var(--font-15)}.profile .right-container p{color:var(--text-dark)}.profile .autosuggest{position:absolute;inset:24px 15px auto;transform:translate3d(0,38px,0);will-change:transform;min-width:10rem;padding:.5rem;margin:.125rem 0 0;font-size:1rem;color:var(--text-dark);text-align:left;list-style:none;background-color:var(--bg-light);background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem;z-index:9;max-height:200px;overflow:auto}.profile .autosuggest:empty{display:none}.profile .autosuggest li{cursor:pointer;font-size:13px;line-height:35px;border-bottom:solid 1px var(--table-border)}.profile .autosuggest li:hover{color:var(--text-dark)}.profile .autosuggest li:last-child{border-bottom:none}.profile .nav-pills .nav-link{position:relative;color:#767676;background-color:transparent}.profile .nav-pills .nav-link.active{background-color:transparent;color:var(--primary);font-weight:600}.profile .nav-pills .nav-link.active :before{content:\"chevron_right\";font-family:Material Icons;position:absolute;right:0;left:auto}@media screen and (min-width: 1180px){.profile{height:100%}}@media screen and (min-width: 768px){.profile .container-group{display:flex}.profile .container-group .left-container{border-right:1px solid var(--table-border);height:100%;width:280px}.profile .container-group .right-container{height:100%;width:calc(100% - 280px)}.profile .nav-pills .nav-link.active :before{display:block}}@media screen and (max-width: 767px){.container-group .left-container{width:100%}.container-group .left-container .nav-pills{border-bottom:1px solid var(--table-border)}.container-group .right-container{width:100%}.container-group .right-container .tab-pane .strip_head{text-align:center}.container-group .nav-pills .nav-link.active :before{display:none}}.customizer .custom-checkbox.custom-control,.customizer .custom-radio.custom-control{padding-left:0rem}.customizer .custom-checkbox.custom-control .theme-select,.customizer .custom-radio.custom-control .theme-select{border:2px solid #ddd;border-radius:7px}.customizer .custom-checkbox.custom-control .active .theme-select,.customizer .custom-radio.custom-control .active .theme-select{border-color:var(--primary)}.customizer .custom-checkbox .custom-control-input:checked~.custom-control-label:before,.customizer .custom-radio .custom-control-input:checked~.custom-control-label:before{content:\"\\f00c\";font-family:FontAwesome,sans-serif;color:var(--hover-text);background-color:var(--btn);border-color:var(--btn);font-size:10px;display:flex;align-items:center;padding:2px}.customizer .custom-checkbox label,.customizer .custom-radio label{cursor:pointer}.customizer .custom-checkbox .font-box,.customizer .custom-radio .font-box{display:flex;justify-content:center;align-items:center;width:150px;height:120px;color:var(--text-dark)}.customizer .custom-checkbox .custom-control-label,.customizer .custom-radio .custom-control-label{position:relative;vertical-align:middle;font-size:var(--base-font-size);line-height:normal;color:var(--text-dark);cursor:pointer;padding-left:25px}.customizer .custom-checkbox .custom-control-label:after,.customizer .custom-radio .custom-control-label:after{border-color:var(--btn)}.customizer .custom-checkbox .custom-control-label:before,.customizer .custom-checkbox .custom-control-label:after,.customizer .custom-radio .custom-control-label:before,.customizer .custom-radio .custom-control-label:after{background-image:none;width:16px;height:16px;left:0;box-shadow:none;top:0}.customizer hr{border-color:var(--table-border)}.customizer .customizer-header{background:var(--background-color);color:var(--text-dark)}.customizer .customizer-header .customizer-close{position:absolute;right:.6rem;top:.6rem;padding:7px;width:auto;z-index:10;color:var(--text-dark);cursor:pointer}.customizer .customizer-header .customizer-close .material-icon{font-size:1.5rem}.customizer .customizer-header .customizer-close:hover{color:var(--btn)}.customizer h4{font-size:var(--font-15);font-weight:600;color:var(--text-dark)}.customizer h6{font-size:var(--font-14);color:var(--text-dark)}.customizer p{font-size:var(--base-font-size);font-weight:400;color:var(--text-dark)}.customizer .customizer-toggle{background:var(--btn);color:var(--hover-text);box-shadow:-3px 0 8px #22292f1a;border-top-left-radius:6px;border-bottom-left-radius:6px;position:absolute;top:50%;width:38px;height:38px;left:-39px;text-align:center;line-height:40px;border-left:1px solid var(--checkbox-border);cursor:pointer}.customizer .customizer-toggle .fa-cog{font-size:var(--font-15)}.customizer .customizer-toggle:hover{text-decoration:none}.customizer .customizer-styling-skin.skin .custom-control .custom-control-label{position:relative;padding-left:25px}.customizer .custom-control:first-child .font-box{font-size:var(--font-21);font-weight:400}.customizer .custom-control:last-child .font-box{font-size:var(--font-26);font-weight:600}.box-minmax{margin-top:15px;width:100%;display:flex;justify-content:space-between;font-size:14px;color:var(--label-text)}.box-minmax span:first-child{margin-left:4px}.rs-range{margin-top:29px;width:100%;appearance:none;-webkit-appearance:none}.rs-range:focus{outline:none;border:none!important}.rs-range::-webkit-slider-runnable-track{width:100%;height:1px;cursor:pointer;box-shadow:none;background:var(--text-dark);border-radius:0;border:0px solid #010101}.rs-range::-moz-range-track{width:100%;height:1px;cursor:pointer;box-shadow:none;background:var(--btn);border-radius:0;border:0px solid #010101}.rs-range::-webkit-slider-thumb{box-shadow:none;border:0px solid var(--table-border);box-shadow:0 10px 10px #00000040;height:30px;width:20px;border-radius:22px;background:var(--btn);cursor:pointer;appearance:none;-webkit-appearance:none;margin-top:-15px}.rs-range::-moz-range-thumb{box-shadow:none;border:0px solid var(--table-border);box-shadow:0 10px 10px #00000040;height:42px;width:22px;border-radius:22px;background:var(--btn);cursor:pointer;appearance:none;-webkit-appearance:none;margin-top:-20px}.rs-range::-moz-focus-outer{border:0}.rs-label{text-align:center;font-weight:700;color:var(--label-text);line-height:normal;font-size:14px}.rs-label:after{content:\"px\";font-size:14px;letter-spacing:.07em}.pi.eye-icon{position:absolute;right:20px;top:50%;margin-top:-7.5px;cursor:pointer;font-size:15px}input[type=password]::-ms-reveal,input[type=password]::-ms-clear{display:none}\n"], dependencies: [{ kind: "directive", type: i7.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i7.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.RangeValueAccessor, selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]" }, { kind: "directive", type: i2.RadioControlValueAccessor, selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]", inputs: ["name", "formControlName", "value"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i2.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { kind: "directive", type: i2.FormArrayName, selector: "[formArrayName]", inputs: ["formArrayName"] }, { kind: "directive", type: i8.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "component", type: i9.Checkbox, selector: "p-checkbox", inputs: ["value", "name", "disabled", "binary", "label", "ariaLabelledBy", "ariaLabel", "tabindex", "inputId", "style", "styleClass", "labelStyleClass", "formControl", "checkboxIcon", "readonly", "required", "trueValue", "falseValue"], outputs: ["onChange"] }, { kind: "component", type: i10.Dropdown, selector: "p-dropdown", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }, { kind: "component", type: i11.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "size", "style", "styleClass", "badgeClass", "ariaLabel"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "component", type: i12.Table, selector: "p-table", inputs: ["frozenColumns", "frozenValue", "style", "styleClass", "tableStyle", "tableStyleClass", "paginator", "pageLinks", "rowsPerPageOptions", "alwaysShowPaginator", "paginatorPosition", "paginatorStyleClass", "paginatorDropdownAppendTo", "paginatorDropdownScrollHeight", "currentPageReportTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showJumpToPageInput", "showFirstLastIcon", "showPageLinks", "defaultSortOrder", "sortMode", "resetPageOnSort", "selectionMode", "selectionPageOnly", "contextMenuSelection", "contextMenuSelectionMode", "dataKey", "metaKeySelection", "rowSelectable", "rowTrackBy", "lazy", "lazyLoadOnInit", "compareSelectionBy", "csvSeparator", "exportFilename", "filters", "globalFilterFields", "filterDelay", "filterLocale", "expandedRowKeys", "editingRowKeys", "rowExpandMode", "scrollable", "scrollDirection", "rowGroupMode", "scrollHeight", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "virtualScrollDelay", "frozenWidth", "responsive", "contextMenu", "resizableColumns", "columnResizeMode", "reorderableColumns", "loading", "loadingIcon", "showLoader", "rowHover", "customSort", "showInitialSortBadge", "autoLayout", "exportFunction", "exportHeader", "stateKey", "stateStorage", "editMode", "groupRowsBy", "groupRowsByOrder", "responsiveLayout", "breakpoint", "paginatorLocale", "value", "columns", "first", "rows", "totalRecords", "sortField", "sortOrder", "multiSortMeta", "selection", "selectAll", "virtualRowHeight"], outputs: ["contextMenuSelectionChange", "selectAllChange", "selectionChange", "onRowSelect", "onRowUnselect", "onPage", "onSort", "onFilter", "onLazyLoad", "onRowExpand", "onRowCollapse", "onContextMenuSelect", "onColResize", "onColReorder", "onRowReorder", "onEditInit", "onEditComplete", "onEditCancel", "onHeaderCheckboxToggle", "sortFunction", "firstChange", "rowsChange", "onStateSave", "onStateRestore"] }, { kind: "directive", type: i13.InputText, selector: "[pInputText]" }, { kind: "component", type: i14.InputMask, selector: "p-inputMask", inputs: ["type", "slotChar", "autoClear", "showClear", "style", "inputId", "styleClass", "placeholder", "size", "maxlength", "tabindex", "title", "ariaLabel", "ariaLabelledBy", "ariaRequired", "disabled", "readonly", "unmask", "name", "required", "characterPattern", "autoFocus", "autocomplete", "keepBuffer", "mask"], outputs: ["onComplete", "onFocus", "onBlur", "onInput", "onKeydown", "onClear"] }, { kind: "directive", type: PasswordToggleDirective, selector: "[appPasswordToggle]", inputs: ["passwordField", "iconForPasswordType", "iconForTextType"] }, { kind: "component", type: AlertComponent, selector: "app-alert" }] });
};
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileComponent$1, decorators: [{
            type: Component,
            args: [{ selector: 'core-profile', template: "<app-alert></app-alert>\r\n<div class=\"card w-100 profile\">\r\n  <div class=\"container-group h-100\" [formGroup]=\"userForm\">\r\n    <div class=\"left-container\">\r\n      <div class=\"nav flex-column nav-pills py-4 px-3\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\r\n        <a class=\"nav-link d-flex align-items-center mb-3 active\" id=\"v-pills-home-tab\" data-toggle=\"pill\"\r\n          href=\"#v-pills-home\" role=\"tab\" aria-controls=\"v-pills-home\" aria-selected=\"true\">\r\n          <span class=\"material-icon material-symbols-outlined mr-2\">person</span>\r\n          Edit Profile\r\n        </a>\r\n        <a class=\"nav-link d-flex align-items-center mb-3\" id=\"v-pills-profile-tab\" data-toggle=\"pill\"\r\n          href=\"#v-pills-profile\" role=\"tab\" aria-controls=\"v-pills-profile\" aria-selected=\"false\">\r\n          <span class=\"material-icon material-symbols-outlined mr-2\">lock_open</span>\r\n          Change Password\r\n        </a>\r\n        <a class=\"nav-link d-flex align-items-center\" id=\"v-theme-a\" data-toggle=\"pill\" href=\"#theme_tab\" role=\"tab\"\r\n          aria-controls=\"theme_tab\" aria-selected=\"false\">\r\n          <span class=\"material-icon material-symbols-outlined mr-2\">palette</span>\r\n          Theme\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"right-container\">\r\n      <div class=\"tab-content py-4 px-4\" id=\"v-pills-tabContent\">\r\n        <!-- Edit Profile Tab -->\r\n        <div class=\"tab-pane fade show active\" id=\"v-pills-home\" role=\"tabpanel\" aria-labelledby=\"v-pills-home-tab\">\r\n          <div class=\"strip_head toggleleft mb-3\">\r\n            <span class=\"report_head font-weight-bold\">Edit Profile</span>\r\n          </div>\r\n          <div class=\"p-fluid p-formgrid pic-upload-group row justify-content-md-center\">\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12 text-center\">\r\n              <figure class=\"mt-2 mb-2 pic-upload justify-content-md-center\">\r\n                <img width=\"64\" class=\"rounded-circle border\" [src]=\"thumbnail || 'assets/images/user-empty.png'\"\r\n                  alt=\"upload\" />\r\n                <label for=\"file\" role=\"button\"\r\n                  class=\"material-icon material-symbols-outlined p-1 rounded-circle bg-primary text-white file-upload-btn\">edit</label>\r\n                <input type=\"file\" id=\"file\" aria-hidden=\"true\" style=\"visibility: hidden; display: none\"\r\n                  (change)=\"handleFileInput($event)\" />\r\n              </figure>\r\n              <button class=\"btn btn-primary\" *ngIf=\"thumbnail\" (click)=\"removeThumbnail()\">Remove</button>\r\n              <p><small>Image size max 50KB</small></p>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-fluid p-formgrid row\">\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"fname\" class=\"referral-form-labels\">\r\n                First Name\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <input id=\"fname\" type=\"text\" formControlName=\"firstname\" placeholder=\"Enter First Name\"\r\n                aria-describedby=\"fname\" pInputText />\r\n              <div *ngIf=\"userForm.get('firstname').hasError('required')\" class=\"text-danger\">\r\n                First name is required.\r\n              </div>\r\n            </div>\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"mname\" class=\"referral-form-labels\">Middle Name </label>\r\n              <input id=\"mname\" type=\"text\" placeholder=\"Enter Middle Name\" formControlName=\"middlename\"\r\n                aria-describedby=\"mname\" pInputText />\r\n            </div>\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"lName\" class=\"referral-form-labels\">\r\n                last name\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <input id=\"lName\" type=\"text\" placeholder=\"Enter Last Name\" formControlName=\"lastname\" pInputText\r\n                aria-describedby=\"lName\" />\r\n              <div *ngIf=\"userForm.get('lastname').hasError('required')\" class=\"text-danger\">\r\n                Last name is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-fluid p-formgrid row\">\r\n            <!-- <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"userName\" class=\"referral-form-labels\">\r\n                User Name\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <input id=\"userName\" type=\"text\" readonly=\"true\" placeholder=\"Enter User Name\" formControlName=\"username\"\r\n                aria-describedby=\"userName\" pInputText />\r\n            </div> -->\r\n            <!-- <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"dateformat\" class=\"referral-form-labels\">\r\n                DOB -->\r\n            <!-- <span class=\"requiredfield text-danger\">*</span> -->\r\n            <!-- </label>      \r\n              <p-calendar placeholder=\"Select Date Of Birth\" formControlName=\"dob\" dateFormat=\"yy-mm-dd\"\r\n                [showOnFocus]=\"true\" inputId=\"dateformat\">\r\n              </p-calendar>\r\n            </div>\r\n          </div> -->\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\" *ngIf=\"externalOnly\">\r\n              <label for=\"usersAlterEmailid\" class=\"referral-form-labels\">\r\n                Alternative Email ID\r\n                <!-- <span class=\"requiredfield text-danger\">*</span> -->\r\n              </label>\r\n              <input id=\"usersAlterEmailid\" placeholder=\"Enter Alternative Email ID\" formControlName=\"alternate_email\"\r\n                type=\"text\" pInputText />\r\n              <div *ngIf=\"userForm.get('alternate_email').hasError('pattern')\" class=\"text-danger\">\r\n                Please enter valid email.\r\n              </div>\r\n            </div>\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"usersEmailid\" class=\"referral-form-labels\">\r\n                Email ID\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <input id=\"usersEmailid\" placeholder=\"Enter Email ID\" formControlName=\"email\" type=\"text\" pInputText\r\n                readonly />\r\n            </div>\r\n          </div>\r\n          <div class=\"p-fluid p-formgrid row\">\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"usersEmailid\" class=\"referral-form-labels\">\r\n                Language </label>\r\n              <p-dropdown\r\n              [options]=\"languagesList\"\r\n              placeholder=\"Select Language\"\r\n              formControlName=\"userLanguage\"\r\n              appendTo=\"body\"\r\n              optionLabel=\"lookupvalue\"\r\n              optionValue=\"lookupkey\"\r\n              [style]=\"{'minWidth':'80%'}\">\r\n            </p-dropdown>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"p-fluid p-formgrid row\">\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"phone\" class=\"referral-form-labels\">\r\n                Cell Phone\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <p-inputMask id=\"phone\" mask=\"(999) 999-9999\" styleClass=\"w-100\"\r\n                formControlName=\"phone\" placeholder=\"Enter Cell Phone\" aria-describedby=\"phone\"></p-inputMask>\r\n              <div *ngIf=\"userForm.get('phone').hasError('required')\" class=\"text-danger\">\r\n                Cell phone number is required.\r\n              </div>\r\n\r\n              <div *ngIf=\"userForm.get('phone').hasError('pattern')\" class=\"text-danger\">\r\n                Please enter valid cell phone number.\r\n              </div>\r\n            </div>\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"HomePhone\" class=\"referral-form-labels\">Home Phone </label>\r\n              <p-inputMask id=\"HomePhone\" mask=\"(999) 999-9999\" [autoClear]=\"false\" styleClass=\"w-100\"\r\n                formControlName=\"HomePhone\" placeholder=\" Enter Home Phone\" aria-describedby=\"HomePhone\"></p-inputMask>\r\n              <div *ngIf=\"userForm.get('HomePhone').hasError('pattern')\" class=\"text-danger\">\r\n                Please enter valid home phone number.\r\n              </div>\r\n            </div>\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\" *ngIf=\"externalOnly\">\r\n              <label class=\"d-md-block\">\r\n                &#160;\r\n              </label>\r\n              <button type=\"button\" class=\"btn btn-primary btn-icon p-1 my-2\" (click)=\"addSerice()\" title=\"Add New\"\r\n              pRipple>\r\n              <em class=\"pi pi-plus font-weight-bold\"></em>\r\n            </button>\r\n            </div>\r\n          </div> -->\r\n\r\n          <div>\r\n            <ng-container>\r\n              <p-table dataKey=\"value.id\" [value]=\"contactData.controls\" [responsive]=\"true\" formArrayName=\"contactData\">\r\n                <ng-template pTemplate=\"caption\">\r\n                  <div class=\"flex align-items-center justify-content-between\">\r\n                    Contact Details\r\n                    <button class=\"pull-right mb-2 btn btn-primary btncommon\" (click)=\"addSerice()\">+</button>\r\n                  </div>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"header\">\r\n                  <tr>\r\n                    <th id=\"datarules-roles\" style=\"width: 35%\">Conatct Type</th>\r\n                    <th id=\"datarules-permissions\" style=\"width: 35%\">Contact Number</th>\r\n                    <th id=\"datarules-action\" style=\"width: 20%\">Action</th>\r\n                    <th id=\"datarules-empty\" style=\"width: 10%\"></th>\r\n                  </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\">\r\n                  <ng-container>\r\n                    <tr [formGroupName]=\"rowIndex\">\r\n                      <td>\r\n                        <p-dropdown\r\n                        [options]=\"contactTypeList\"\r\n                        placeholder=\"Select Contact Type\"\r\n                        formControlName=\"phonenumbertype\"\r\n                        appendTo=\"body\"\r\n                        optionLabel=\"lookupvalue\"\r\n                        optionValue=\"lookupkey\"\r\n                        [style]=\"{'minWidth':'80%'}\">\r\n                      </p-dropdown>\r\n                        <!-- <div\r\n                          class=\"text-danger\"\r\n                          *ngIf=\"\r\n                            rowData.get('roles').errors && (rowData.get('roles').dirty || rowData.get('roles').touched)\r\n                          \">\r\n                          <div *ngIf=\"rowData.get('roles').errors?.required\">Role is Required</div>\r\n                        </div> -->\r\n                      </td>\r\n                      <td>\r\n                        <!-- <label for=\"contactNumber\" class=\"referral-form-labels\">Contact Number</label> -->\r\n                        <p-inputMask id=\"contactNumber\" mask=\"(999) 999-9999\"  [autoClear]=\"false\" styleClass=\"w-100\"\r\n                          formControlName=\"phonenumber\" placeholder=\"Enter Contact Number\" aria-describedby=\"contactNumber\" [unmask]=\"true\"></p-inputMask>\r\n                        <div\r\n                          class=\"text-danger\"\r\n                          *ngIf=\"\r\n                            rowData.get('phonenumber').errors &&\r\n                            (rowData.get('phonenumber').dirty || rowData.get('phonenumber').touched)\r\n                          \">\r\n                          <div *ngIf=\"rowData.get('phonenumber').errors?.required\">Phone Number is Required</div>\r\n                        </div>\r\n                      </td>\r\n                      <td>\r\n                        <button type=\"button\" class=\"btn btn-default\" title=\"delete\" (click)=\"removeSerice(rowIndex)\">\r\n                          <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-container>\r\n                </ng-template>\r\n              </p-table>\r\n            </ng-container>\r\n            <div class=\"p-fluid p-formgrid row mt-3\" *ngIf=\"RBACORG.optinPapperless\">\r\n              <div class=\"p-field col-md-12 col-12\">\r\n                <div class=\"checkbox\">\r\n                  <p-checkbox [(ngModel)]=\"checked\" [binary]=\"true\" inputId=\"binary\"\r\n                    formControlName=\"opt_in_for_paperless_documentation\">\r\n                  </p-checkbox>\r\n                  <label class=\"checklabel\" for=\"ch\">Opt-in for Paperless Documentation</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"p-fluid p-formgrid row\">\r\n              <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\"></div>\r\n              <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\"></div>\r\n              <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12 mb-0\">\r\n                <button class=\"pull-right mr-2 mb-2 btn btn-primary btncommon\" (click)=\"updateprofile()\">\r\n                  Save Changes\r\n                </button>\r\n                <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" (click)=\"clearForm()\">\r\n                  Clear\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Tab End -->\r\n\r\n        <!-- Change Password Tab -->\r\n        <div class=\"tab-pane fade\" id=\"v-pills-profile\" role=\"tabpanel\" aria-labelledby=\"v-pills-profile-tab\">\r\n          <div class=\"strip_head toggleleft mb-4\">\r\n            <span class=\"report_head font-weight-bold\">Change Password</span>\r\n          </div>\r\n          <div [formGroup]=\"resetPasswordForm\" class=\"reset-password-div\">\r\n            <div class=\"p-fluid p-formgrid row\">\r\n              <div class=\"p-field col-xl-4 col-lg-12 col-sm-4 col-md-12 col-12 mb-3\">\r\n                <label for=\"mailid\" aria-describedby=\"mailid\">Email <span class=\"requiredfield\">*</span></label>\r\n                <input type=\"text\" readonly=\"true\" id=\"mailid\" class=\"form-control\" formControlName=\"mailid\"\r\n                  pInputText />\r\n              </div>\r\n            </div>\r\n            <div class=\"p-fluid p-formgrid row\">\r\n              <div class=\"col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12 mb-2 position-relative\">\r\n                <label for=\"cpassword\" aria-describedby=\"cpassword\">Current Password <span\r\n                    class=\"requiredfield\">*</span></label>\r\n                <div class=\"position-relative\">\r\n                  <input [maxlength]=\"16\" formControlName=\"currentpassword\" #currentpassword type=\"password\"\r\n                    placeholder=\"Enter Current Password\" name=\"password\" id=\"password\" tabindex=\"0\" required pInputText\r\n                    style=\"padding-right: 40px;\" />\r\n                  <em class=\"pi eye-icon\"  aria-hidden=\"true\" appPasswordToggle [passwordField]=\"currentpassword\"></em>\r\n                </div>\r\n                <div class=\"p-error block\" *ngIf=\"\r\n                resetPasswordForm.get('currentpassword').errors && formSubmitted\">\r\n                  <small>Current password is required.</small>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12 mb-2 position-relative\">\r\n                <label for=\"npassword\" aria-describedby=\"npassword\">New Password <span\r\n                    class=\"requiredfield\">*</span></label>\r\n                <div class=\"position-relative\">\r\n                  <input [maxlength]=\"16\" formControlName=\"newpassword\" #newpassword type=\"password\"\r\n                    placeholder=\"Enter New Password\" name=\"password\" id=\"newpassword\" tabindex=\"0\" required pInputText\r\n                    style=\"padding-right: 40px;\" />\r\n                  <em class=\"pi eye-icon\" appPasswordToggle [passwordField]=\"newpassword\" aria-hidden=\"true\"></em>\r\n                </div>\r\n                <div class=\"autosuggest\" *ngIf=\"isValid\">\r\n                  <div class=\"p-error block\" *ngIf=\"resetFormcontrols['newpassword'].hasError('hasNumber')\">\r\n                    <em class=\"pi pi-times-circle\"></em>\r\n                    <small> {{ errors[0] }}</small>\r\n                  </div>\r\n                  <div class=\"p-error block\" *ngIf=\"resetFormcontrols['newpassword'].hasError('hasCapitalCase')\">\r\n                    <em class=\"pi pi-times-circle\"></em>\r\n                    <small> {{ errors[2] }}</small>\r\n                  </div>\r\n                  <div class=\"p-error block\" *ngIf=\"resetFormcontrols['newpassword'].hasError('hasSmallCase')\">\r\n                    <em class=\"pi pi-times-circle\"></em>\r\n                    <small> {{ errors[3] }}</small>\r\n                  </div>\r\n                  <small class=\"p-error block\"\r\n                    *ngIf=\"resetFormcontrols['newpassword'].hasError('hasSpecialCharacters')\">\r\n                    <em class=\"pi pi-times-circle\"></em>\r\n                    {{ errors[1] }}\r\n                  </small>\r\n                  <div class=\"p-error block\" *ngIf=\"resetFormcontrols['newpassword'].hasError('minlength')\">\r\n                    <em class=\"pi pi-times-circle\"></em>\r\n                    <small> {{ errors[4] }}</small>\r\n                  </div>\r\n                  <div class=\"p-error block\" *ngIf=\"resetFormcontrols['newpassword'].hasError('hasSpace')\">\r\n                    <em class=\"pi pi-times-circle\"></em>\r\n                    <small> {{ errors[6] }}</small>\r\n                  </div>\r\n                </div>\r\n                <div class=\"p-error block\" *ngIf=\"\r\n                    resetPasswordForm.get('newpassword').errors && formSubmitted\">\r\n                  <small>New Password is required</small>\r\n                </div>\r\n                <div class=\"p-error block\"\r\n                  *ngIf=\"\r\n                    resetPasswordForm.hasError('newPasswordSame') && formSubmitted && ! resetPasswordForm.get('newpassword').errors\">\r\n                  <small>New Password same as Current Password</small>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12 mb-2 position-relative\">\r\n                <label for=\"cnfpassword\" aria-describedby=\"cnfpassword\">Confirm Password <span\r\n                    class=\"requiredfield\">*</span></label>\r\n                <div class=\"position-relative\">\r\n                  <input [maxlength]=\"16\" formControlName=\"conformpassword\" #confirmpassword type=\"password\"\r\n                    placeholder=\"Confirm New Password\" name=\"password\" id=\"confirmpassword\" tabindex=\"0\" required\r\n                    pInputText style=\"padding-right: 40px;\" />\r\n                  <em class=\"pi eye-icon\" appPasswordToggle [passwordField]=\"confirmpassword\" aria-hidden=\"true\"></em>\r\n                </div>\r\n                <div *ngIf=\"\r\n                    resetFormcontrols['conformpassword'].hasError('required') &&\r\n                    resetFormcontrols['conformpassword'].touched\r\n                  \" class=\"p-error block\">\r\n                </div>\r\n                <div class=\"p-error block\" *ngIf=\"\r\n                resetPasswordForm.get('conformpassword').errors && formSubmitted\">\r\n                  <small>Confirm Password is required</small>\r\n                </div>\r\n                <div class=\"p-error block\" *ngIf=\"\r\n                  resetPasswordForm.hasError('NoPassswordMatch') && formSubmitted && ! resetPasswordForm.get('conformpassword').errors\r\n                 \">\r\n                  <small>Password does not match</small>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12 mt-2 text-right\">\r\n              <p-button label=\"Cancel\" styleClass=\"px-3 py-1 btn bg-white text-primary btncancel\"\r\n                (click)=\"reset()\"></p-button>\r\n              <p-button label=\"Save\" styleClass=\"px-3 py-1 ml-2\" (click)=\"changePassword()\"></p-button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Tab End -->\r\n\r\n        <!-- Theme Customizer Tab -->\r\n        <div class=\"tab-pane fade\" id=\"theme_tab\" role=\"tabpanel\" aria-labelledby=\"v-theme-a\">\r\n          <div class=\"strip_head toggleleft mb-4\">\r\n            <span class=\"report_head font-weight-bold\">Theme Customizer</span>\r\n          </div>\r\n          <div class=\"customizer customizer-styling pt-3\">\r\n            <!-- Skin -->\r\n            <div class=\"customizer-styling-skin skin mb-4\">\r\n              <h6 class=\"font-weight-bold mb-2\">Skin</h6>\r\n              <div class=\"d-flex justify-content-start align-items-center\">\r\n                <div *ngFor=\"let theme of themes\" class=\"custom-control custom-radio mr-4\">\r\n                  <figure [ngClass]=\"selectedTheme === theme.key ? 'active' : ''\">\r\n                    <label role=\"link\" class=\"mb-0 theme-select\" for=\"theme_{{ theme.key }}\">\r\n                      <img src=\"{{ theme.image }}\" class=\"img-fluid\" alt=\"{{ theme.name }}\" />\r\n                    </label>\r\n                    <figcaption>\r\n                      <input type=\"radio\" id=\"theme_{{ theme.key }}\" name=\"{{ theme.name }}\"\r\n                        class=\"custom-control-input layout-name\" [value]=\"theme.key\" [(ngModel)]=\"selectedTheme\"\r\n                        [ngModelOptions]=\"{ standalone: true }\" (click)=\"setTheme(theme.key)\" />\r\n                      <label class=\"custom-control-label mt-2\" for=\"theme_{{ theme.key }}\">{{ theme.name }}</label>\r\n                    </figcaption>\r\n                  </figure>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"customizer-styling-skin d-none mb-3\">\r\n              <h6 class=\"font-weight-bold mb-2\">Font</h6>\r\n              <div class=\"d-flex justify-content-start align-items-center\">\r\n                <div *ngFor=\"let fontSet of fontSetList\" class=\"custom-control custom-radio mr-4\">\r\n                  <figure [ngClass]=\"selectedFont === fontSet.key ? 'active' : ''\">\r\n                    <label for=\"font_{{ fontSet.key }}\" class=\"font-box mb-0 theme-select\"> Aa </label>\r\n                    <figcaption>\r\n                      <input type=\"radio\" id=\"font_{{ fontSet.key }}\" name=\"{{ fontSet.name }}\"\r\n                        class=\"custom-control-input layout-name\" [value]=\"fontSet.key\" [(ngModel)]=\"selectedFont\"\r\n                        [ngModelOptions]=\"{ standalone: true }\" (click)=\"setFont(fontSet.key)\" />\r\n                      <label class=\"custom-control-label mt-2\" for=\"font_{{ fontSet.key }}\">{{ fontSet.name }}</label>\r\n                    </figcaption>\r\n                  </figure>\r\n                </div>\r\n              </div>\r\n            </div> -->\r\n\r\n            <div class=\"customizer-styling-skin mb-3\">\r\n              <h6 class=\"font-weight-bold mb-2\">Font Size (<span id=\"rs-bullet\"\r\n                  class=\"rs-label\">{{selectedFont}}</span>)</h6>\r\n              <div class=\"d-flex justify-content-start align-items-center col-lg-4 col-md-4 col-12 p-0\">\r\n                <div class=\"custom-control custom-radio w-100 mr-4\">\r\n                  <div class=\"range-slider\">\r\n                    <input id=\"rs-range-line\" class=\"rs-range\" type=\"range\" #ref value=\"{{selectedFont}}\" min=\"13\"\r\n                      max=\"20\" [ngModelOptions]=\"{ standalone: true }\" [(ngModel)]=\"selectedFont\"\r\n                      (change)=\"setRangeFont(ref.value)\">\r\n                  </div>\r\n                  <div class=\"box-minmax\">\r\n                    <span>13</span><span>20</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <button class=\"pull-right mr-2 mb-2 btn btn-primary btncommon\" (click)=\"updateStyling()\">Save\r\n            Changes</button>\r\n        </div>\r\n        <!-- Tab End -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".profile .pic-upload{position:relative;display:inline-flex}.profile .pic-upload .file-upload-btn{margin-bottom:0;position:absolute;bottom:5px;right:0;font-size:var(--font-15)}.profile .right-container p{color:var(--text-dark)}.profile .autosuggest{position:absolute;inset:24px 15px auto;transform:translate3d(0,38px,0);will-change:transform;min-width:10rem;padding:.5rem;margin:.125rem 0 0;font-size:1rem;color:var(--text-dark);text-align:left;list-style:none;background-color:var(--bg-light);background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem;z-index:9;max-height:200px;overflow:auto}.profile .autosuggest:empty{display:none}.profile .autosuggest li{cursor:pointer;font-size:13px;line-height:35px;border-bottom:solid 1px var(--table-border)}.profile .autosuggest li:hover{color:var(--text-dark)}.profile .autosuggest li:last-child{border-bottom:none}.profile .nav-pills .nav-link{position:relative;color:#767676;background-color:transparent}.profile .nav-pills .nav-link.active{background-color:transparent;color:var(--primary);font-weight:600}.profile .nav-pills .nav-link.active :before{content:\"chevron_right\";font-family:Material Icons;position:absolute;right:0;left:auto}@media screen and (min-width: 1180px){.profile{height:100%}}@media screen and (min-width: 768px){.profile .container-group{display:flex}.profile .container-group .left-container{border-right:1px solid var(--table-border);height:100%;width:280px}.profile .container-group .right-container{height:100%;width:calc(100% - 280px)}.profile .nav-pills .nav-link.active :before{display:block}}@media screen and (max-width: 767px){.container-group .left-container{width:100%}.container-group .left-container .nav-pills{border-bottom:1px solid var(--table-border)}.container-group .right-container{width:100%}.container-group .right-container .tab-pane .strip_head{text-align:center}.container-group .nav-pills .nav-link.active :before{display:none}}.customizer .custom-checkbox.custom-control,.customizer .custom-radio.custom-control{padding-left:0rem}.customizer .custom-checkbox.custom-control .theme-select,.customizer .custom-radio.custom-control .theme-select{border:2px solid #ddd;border-radius:7px}.customizer .custom-checkbox.custom-control .active .theme-select,.customizer .custom-radio.custom-control .active .theme-select{border-color:var(--primary)}.customizer .custom-checkbox .custom-control-input:checked~.custom-control-label:before,.customizer .custom-radio .custom-control-input:checked~.custom-control-label:before{content:\"\\f00c\";font-family:FontAwesome,sans-serif;color:var(--hover-text);background-color:var(--btn);border-color:var(--btn);font-size:10px;display:flex;align-items:center;padding:2px}.customizer .custom-checkbox label,.customizer .custom-radio label{cursor:pointer}.customizer .custom-checkbox .font-box,.customizer .custom-radio .font-box{display:flex;justify-content:center;align-items:center;width:150px;height:120px;color:var(--text-dark)}.customizer .custom-checkbox .custom-control-label,.customizer .custom-radio .custom-control-label{position:relative;vertical-align:middle;font-size:var(--base-font-size);line-height:normal;color:var(--text-dark);cursor:pointer;padding-left:25px}.customizer .custom-checkbox .custom-control-label:after,.customizer .custom-radio .custom-control-label:after{border-color:var(--btn)}.customizer .custom-checkbox .custom-control-label:before,.customizer .custom-checkbox .custom-control-label:after,.customizer .custom-radio .custom-control-label:before,.customizer .custom-radio .custom-control-label:after{background-image:none;width:16px;height:16px;left:0;box-shadow:none;top:0}.customizer hr{border-color:var(--table-border)}.customizer .customizer-header{background:var(--background-color);color:var(--text-dark)}.customizer .customizer-header .customizer-close{position:absolute;right:.6rem;top:.6rem;padding:7px;width:auto;z-index:10;color:var(--text-dark);cursor:pointer}.customizer .customizer-header .customizer-close .material-icon{font-size:1.5rem}.customizer .customizer-header .customizer-close:hover{color:var(--btn)}.customizer h4{font-size:var(--font-15);font-weight:600;color:var(--text-dark)}.customizer h6{font-size:var(--font-14);color:var(--text-dark)}.customizer p{font-size:var(--base-font-size);font-weight:400;color:var(--text-dark)}.customizer .customizer-toggle{background:var(--btn);color:var(--hover-text);box-shadow:-3px 0 8px #22292f1a;border-top-left-radius:6px;border-bottom-left-radius:6px;position:absolute;top:50%;width:38px;height:38px;left:-39px;text-align:center;line-height:40px;border-left:1px solid var(--checkbox-border);cursor:pointer}.customizer .customizer-toggle .fa-cog{font-size:var(--font-15)}.customizer .customizer-toggle:hover{text-decoration:none}.customizer .customizer-styling-skin.skin .custom-control .custom-control-label{position:relative;padding-left:25px}.customizer .custom-control:first-child .font-box{font-size:var(--font-21);font-weight:400}.customizer .custom-control:last-child .font-box{font-size:var(--font-26);font-weight:600}.box-minmax{margin-top:15px;width:100%;display:flex;justify-content:space-between;font-size:14px;color:var(--label-text)}.box-minmax span:first-child{margin-left:4px}.rs-range{margin-top:29px;width:100%;appearance:none;-webkit-appearance:none}.rs-range:focus{outline:none;border:none!important}.rs-range::-webkit-slider-runnable-track{width:100%;height:1px;cursor:pointer;box-shadow:none;background:var(--text-dark);border-radius:0;border:0px solid #010101}.rs-range::-moz-range-track{width:100%;height:1px;cursor:pointer;box-shadow:none;background:var(--btn);border-radius:0;border:0px solid #010101}.rs-range::-webkit-slider-thumb{box-shadow:none;border:0px solid var(--table-border);box-shadow:0 10px 10px #00000040;height:30px;width:20px;border-radius:22px;background:var(--btn);cursor:pointer;appearance:none;-webkit-appearance:none;margin-top:-15px}.rs-range::-moz-range-thumb{box-shadow:none;border:0px solid var(--table-border);box-shadow:0 10px 10px #00000040;height:42px;width:22px;border-radius:22px;background:var(--btn);cursor:pointer;appearance:none;-webkit-appearance:none;margin-top:-20px}.rs-range::-moz-focus-outer{border:0}.rs-label{text-align:center;font-weight:700;color:var(--label-text);line-height:normal;font-size:14px}.rs-label:after{content:\"px\";font-size:14px;letter-spacing:.07em}.pi.eye-icon{position:absolute;right:20px;top:50%;margin-top:-7.5px;cursor:pointer;font-size:15px}input[type=password]::-ms-reveal,input[type=password]::-ms-clear{display:none}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: AuthService }, { type: i2.FormBuilder }, { type: HttpService }, { type: ProfileService }, { type: AttachmentsService }, { type: DataStoreService }]; }, propDecorators: { passwordSuccess: [{
                type: Output
            }] } });

class ProfileComponent {
    permissionStore;
    _storeservice;
    RBACORG = new RBACINFO();
    PERMISSION;
    profileEvent;
    libOnPasswordSuccess = new EventEmitter();
    constructor(permissionStore, _storeservice) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
    }
    ngOnInit() {
        this.profileEvent.subscribe((val) => {
            this.RBACORG = val.RBACORG;
            this.PERMISSION = val.PERMISSION;
            this._storeservice.setData('RBACORG', this.RBACORG);
            this.permissionStore.setStore(this.PERMISSION);
        });
    }
    onPasswordSuccess($event) {
        this.libOnPasswordSuccess.emit($event);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileComponent, deps: [{ token: PermissionStore }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ProfileComponent, selector: "profile", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", profileEvent: "profileEvent" }, outputs: { libOnPasswordSuccess: "libOnPasswordSuccess" }, ngImport: i0, template: `
    <core-profile (passwordSuccess)="onPasswordSuccess($event)"></core-profile>
  `, isInline: true, dependencies: [{ kind: "component", type: ProfileComponent$1, selector: "core-profile", outputs: ["passwordSuccess"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileComponent, decorators: [{
            type: Component,
            args: [{ selector: 'profile', template: `
    <core-profile (passwordSuccess)="onPasswordSuccess($event)"></core-profile>
  ` }]
        }], ctorParameters: function () { return [{ type: PermissionStore }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], profileEvent: [{
                type: Input
            }], libOnPasswordSuccess: [{
                type: Output
            }] } });

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

class DirectivesModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DirectivesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DirectivesModule, declarations: [PermissionDirective, ShowFieldDirective, PasswordToggleDirective], imports: [CommonModule], exports: [PermissionDirective, ShowFieldDirective, PasswordToggleDirective] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DirectivesModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DirectivesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [PermissionDirective, ShowFieldDirective, PasswordToggleDirective],
                    imports: [CommonModule],
                    exports: [PermissionDirective, ShowFieldDirective, PasswordToggleDirective]
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

class PicsProfileModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsProfileModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: PicsProfileModule, declarations: [ProfileComponent$1], imports: [CommonModule,
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
            AlertModule], exports: [ProfileComponent$1] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsProfileModule, imports: [CommonModule,
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
            AlertModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsProfileModule, decorators: [{
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
                        AlertModule
                    ],
                    exports: [
                        ProfileComponent$1
                    ],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });

class ProfileSettingsModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileSettingsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: ProfileSettingsModule, declarations: [ProfileComponent], imports: [PicsProfileModule], exports: [ProfileComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileSettingsModule, providers: [ProfileService, AttachmentsService, HttpClient, HttpService, AlertService, AuthService, ConfirmationService, PermissionStore, DataStoreService], imports: [PicsProfileModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileSettingsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ProfileComponent
                    ],
                    imports: [
                        PicsProfileModule
                    ],
                    exports: [
                        ProfileComponent
                    ],
                    providers: [ProfileService, AttachmentsService, HttpClient, HttpService, AlertService, AuthService, ConfirmationService, PermissionStore, DataStoreService]
                }]
        }] });

/*
 * Public API Surface of profile
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ProfileComponent, ProfileService, ProfileSettingsModule };
//# sourceMappingURL=pics-core-profile.mjs.map
