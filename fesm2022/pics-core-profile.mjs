import * as i0 from '@angular/core';
import { Injectable, Component, EventEmitter, Output, Input, Directive, NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BehaviorSubject, Subject, of } from 'rxjs';
import * as i2 from '@angular/forms';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@angular/router';
import { NavigationStart } from '@angular/router';
import 'rxjs/add/operator/map';
import * as i6 from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import * as i10 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i11 from 'primeng/tooltip';
import * as i12 from 'primeng/checkbox';
import { CheckboxModule } from 'primeng/checkbox';
import * as i13 from 'primeng/dropdown';
import { DropdownModule } from 'primeng/dropdown';
import * as i14 from 'primeng/button';
import { ButtonModule } from 'primeng/button';
import * as i15 from 'primeng/table';
import { TableModule } from 'primeng/table';
import * as i16 from 'primeng/inputtext';
import { InputTextModule } from 'primeng/inputtext';
import * as i17 from 'primeng/calendar';
import { CalendarModule } from 'primeng/calendar';
import * as i18 from 'primeng/inputmask';
import { InputMaskModule } from 'primeng/inputmask';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
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
import { HttpClient } from '@angular/common/http';

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
    _storeservice;
    themeService;
    localstorage;
    profileImage = new Subject();
    httpService;
    constructor(_storeservice, themeService, localstorage) {
        this._storeservice = _storeservice;
        this.themeService = themeService;
        this.localstorage = localstorage;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileService, deps: [{ token: DataStoreService }, { token: ThemeService }, { token: LocalService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: DataStoreService }, { type: ThemeService }, { type: LocalService }]; } });

// Inside your npm package (ProfileService)
class ProfileUpdateService {
    profilePictureSubject = new BehaviorSubject('/path/to/default-profile.jpg');
    profilePicture$ = this.profilePictureSubject.asObservable();
    updateProfilePicture(newPicturePath) {
        this.profilePictureSubject.next(newPicturePath);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileUpdateService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileUpdateService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileUpdateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

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
        'Have at least one (1) number',
        'Have at least one (1) special character',
        'Have at least one (1) upper case letter',
        'Have at least one (1) lower case letter',
        'Contain a minimum of fourteen (14) characters'
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
    _router;
    _storeservice;
    sharedInfo;
    alertService;
    httpService;
    constructor(injector, _router, _storeservice) {
        this._router = _router;
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: DataStoreService }]; } });

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
    uploadKey(objparams) {
        return this.http.post(AttachmentConfig.EndPoint.Attachments.UploadKey, objparams);
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

class NavigationAlertService {
    router;
    showAlertSubject = new Subject();
    flag = false;
    constructor(router) {
        this.router = router;
    }
    setFlag(flag) {
        this.flag = flag;
    }
    getFlag() {
        return this.flag;
    }
    showAlert() {
        this.showAlertSubject.next();
    }
    getShowAlertSubject() {
        return this.showAlertSubject.asObservable();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NavigationAlertService, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NavigationAlertService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NavigationAlertService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });

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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AlertComponent, selector: "app-alert", ngImport: i0, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], dependencies: [{ kind: "directive", type: i10.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-alert', template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"] }]
        }], ctorParameters: function () { return [{ type: AlertService }]; } });

let ProfileComponent$1 = class ProfileComponent {
    authService;
    formBuilder;
    profileService;
    attachmentService;
    _storeservice;
    confirmationService;
    profileUpdateService;
    router;
    navigationAlertService;
    userForm;
    userid;
    thumbnail;
    imageData;
    uploadedFile;
    urlPath;
    attachType;
    resetPasswordForm;
    alertService;
    localstorage;
    isValid = false;
    socketSubscription;
    currentDate = new Date();
    themes = [];
    fontSetList = [];
    selectedTheme;
    selectedFont;
    themeService;
    rocketIcon;
    environment;
    RBACORG = new RBACINFO();
    orgSubs;
    orgId;
    errors = AppConstants.errorList;
    httpService;
    nextNavigation;
    currentTab = "#v-pills-home";
    isThemeActive;
    isProfileActive;
    isProfileShown;
    isThemeShown;
    routeTo;
    userId;
    externalOnly = false;
    contactTypeList = [];
    languagesList = [];
    genderList = [];
    optinPapper = false;
    checked = false;
    formSubmitted;
    passwordSuccess = new EventEmitter();
    constructor(injector, authService, formBuilder, profileService, attachmentService, _storeservice, confirmationService, profileUpdateService, router, navigationAlertService) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.profileService = profileService;
        this.attachmentService = attachmentService;
        this._storeservice = _storeservice;
        this.confirmationService = confirmationService;
        this.profileUpdateService = profileUpdateService;
        this.router = router;
        this.navigationAlertService = navigationAlertService;
        this.localstorage = injector.get(LocalService);
        this.alertService = injector.get(AlertService);
        this.themeService = injector.get(ThemeService);
        this.userid = sessionStorage.getItem('id');
        const tab = this.localstorage.getItem('CURRENT_PROFILE_TAB');
        this.getTab(tab);
        this.selectedTheme = this.localstorage.getItem('SELECTED_THEME') || 'default';
        this.selectedFont = this.localstorage.getItem('SELECTED_FONT') || '13';
        this.themes = themeList;
        this.fontSetList = fontSetList;
        this.initializeResetPasswordForm();
        this.initializeForm();
    }
    ngOnInit() {
        this.setFlag(false);
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.routeTo = event?.url;
                const shouldPreventNavigation = true;
                if (this.navigationAlertService.getFlag() && shouldPreventNavigation) {
                    this.router.navigate([], { skipLocationChange: true });
                    $('#UpdateUserTheme').modal('show');
                }
            }
        });
        this.orgSubs = this._storeservice.currentStore.subscribe((res) => {
            if (res['RBACORG'] && res['RBACORG'] !== '') {
                this.RBACORG = res['RBACORG'];
                console.log(this.RBACORG, 'RBACORG Profile');
                this.environment = this.RBACORG['environment'];
                this.orgId = parseInt(this.RBACORG['orgID']);
                this.httpService = res['HTTPSERVICE'];
                if (this.environment) {
                    this.getUserInfo();
                    this.fontSlider();
                    this.getUserTheme();
                }
                if (this.RBACORG['optinPapperless']) {
                    this.userForm.addControl('opt_in_for_paperless_documentation', new FormControl(''));
                }
                this.getUserPreferenceList();
            }
        });
        if (this.RBACORG['contactDetails']) {
            this.profileService.getCategoryLookup('PHONE_NUMBER_TYPES').subscribe((res) => {
                res?.data?.map(z => {
                    if (!z.parentid) {
                        this.contactTypeList.push(z);
                    }
                });
            });
        }
        if (this.RBACORG['language']) {
            this.profileService.getCategoryLookup('LANGUAGES').subscribe((res) => {
                res?.data?.map(z => {
                    if (!z.parentid) {
                        this.languagesList.push(z);
                    }
                });
            });
        }
        if (this.RBACORG['gender'])
            this.profileService.getCategoryLookup('PROVIDER_GENDER').subscribe((res) => {
                this.genderList = res.data?.filter((l) => !l.parentid);
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
    updateThemePopup() {
        this.updateStyling();
        $('#UpdateUserTheme').modal('hide');
        this.router.navigateByUrl(this.routeTo);
    }
    cancleThemePopup() {
        this.profileService.setUserPreference();
        this.getUserTheme();
        $('#UpdateUserTheme').modal('hide');
        this.setFlag(false);
        this.router.navigateByUrl(this.routeTo);
    }
    getTab(tab) {
        if (tab && tab.trim() && tab != "#v-pills-home") {
            this.currentTab = tab;
            this.isProfileActive = false;
            this.isThemeActive = true;
            this.isProfileShown = false;
            this.isThemeShown = true;
        }
        else {
            this.currentTab = "#v-pills-home";
            this.isThemeActive = false;
            this.isProfileActive = true;
            this.isThemeShown = false;
            this.isProfileShown = true;
        }
    }
    setCurrentTab(tab) {
        this.currentTab = tab;
        this.localstorage.setItem('CURRENT_PROFILE_TAB', tab);
    }
    setFlag(flag) {
        this.navigationAlertService.setFlag(flag);
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
            gender: ['', Validators.required],
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
                username: patchValuedata.username,
                dob: patchValuedata.dob ? new Date(patchValuedata.dob) : null,
                gender: personData?.gender,
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
            fileName: `user-profileimage/${this.userid}/${this.uploadedFile.replaceAll(' ', '')}`
        };
        if (this.validateImage(fileValue.target.files)) {
            this.attachmentService.uploadKey(this.imageData).subscribe((res) => {
                this.urlPath = res.data?.path ? res.data.path : res.data;
                const uploadAttachment = document.getElementById('file');
                const uploadAttachmentDetails = uploadAttachment.files[0];
                this.httpService.putUpload(this.urlPath, uploadAttachmentDetails, uploadAttachmentDetails.type).subscribe((_resp) => {
                    this.alertService.success('Profile Image uploaded successfully.');
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
            if (this.RBACORG['optinPapperless']) {
                this.userForm.addControl('opt_in_for_paperless_documentation', new FormControl(''));
            }
            this.updateStyling();
            this.alertService.success('Profile updated successfully');
            this.profileUpdateService.updateProfilePicture(this.thumbnail);
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
        this.alertService.success('Theme changes saved successfully.');
        this.setFlag(false);
        this.profileService.saveUserPreference(body).subscribe(() => {
            // This is intentional
        });
    }
    getUserTheme() {
        this.profileService.getUserPreference(this.userid).subscribe((res) => {
            const data = res.data;
            const config = JSON.parse(data?.config);
            this.selectedTheme = config?.theme || 'default';
            this.selectedFont = config?.font || '13';
        });
    }
    setTheme(event) {
        this.profileService.setTheme(event);
        this.setFlag(true);
    }
    setFont(event) {
        this.profileService.setFont(event);
        this.setFlag(true);
    }
    setRangeFont(modal) {
        this.profileService.setRangeFont(modal);
        this.setFlag(true);
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
        this.thumbnail = '';
    }
    reset() {
        this.resetPasswordForm.controls['conformpassword'].reset();
        this.resetPasswordForm.controls['newpassword'].reset();
        this.resetPasswordForm.controls['currentpassword'].reset();
        this.formSubmitted = false;
    }
    onClickRemove() {
        $('#Deleteuser').modal('show');
    }
    cancel() {
        // this.userForm.reset();
        this.userForm.enable();
    }
    removeThumbnail() {
        // this.confirmationService.confirm({
        //   target: event.target as EventTarget,
        //   message: 'Are you sure you want to proceed?',
        //   icon: 'pi pi-exclamation-triangle',
        //   accept: () => {
        this.cancel();
        this.thumbnail = '';
        this.alertService.success('Profile image deleted successfully.');
        $('#Deleteuser').modal('hide');
        //   },
        //   reject: () => {
        //       // reject message
        //   }
        // });
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileComponent, deps: [{ token: i0.Injector }, { token: AuthService }, { token: i2.FormBuilder }, { token: ProfileService }, { token: AttachmentsService }, { token: DataStoreService }, { token: i6.ConfirmationService }, { token: ProfileUpdateService }, { token: i1.Router }, { token: NavigationAlertService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ProfileComponent, selector: "core-profile", outputs: { passwordSuccess: "passwordSuccess" }, ngImport: i0, template: "<app-alert></app-alert>\r\n<div class=\"card w-100 profile\">\r\n  <div class=\"container-group h-100\" [formGroup]=\"userForm\">\r\n    <div class=\"left-container\">\r\n      <div class=\"nav flex-column nav-pills py-4 px-3\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\r\n        <a class=\"nav-link d-flex align-items-center mb-3\" [class.active]=\"isProfileActive\" id=\"v-pills-home-tab\" data-toggle=\"pill\"\r\n          [href]=\"currentTab\" (click)=\"setCurrentTab('#v-pills-home')\" role=\"tab\" aria-controls=\"v-pills-home\" aria-selected=\"true\">\r\n          <span class=\"material-icon material-symbols-outlined mr-2\">person</span>\r\n          Edit Profile\r\n        </a>\r\n        <a class=\"nav-link d-flex align-items-center mb-3\" *ngIf=\"RBACORG['changePassword']\" id=\"v-pills-profile-tab\" data-toggle=\"pill\"\r\n          href=\"#v-pills-profile\" role=\"tab\" aria-controls=\"v-pills-profile\" aria-selected=\"false\">\r\n          <span class=\"material-icon material-symbols-outlined mr-2\">lock_open</span>\r\n          Change Password\r\n        </a>\r\n        <a class=\"nav-link d-flex align-items-center\" [class.active]=\"isThemeActive\" (click)=\"setCurrentTab('#theme_tab')\" id=\"v-theme-a\" data-toggle=\"pill\" [href]=\"currentTab\" role=\"tab\"\r\n          aria-controls=\"theme_tab\" aria-selected=\"false\">\r\n          <span class=\"material-icon material-symbols-outlined mr-2\">palette</span>\r\n          Theme\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"right-container\">\r\n      <div class=\"tab-content py-4 px-4\" id=\"v-pills-tabContent\">\r\n        <!-- Edit Profile Tab -->\r\n        <div class=\"tab-pane fade\" [class.active]=\"isProfileActive\" [class.show]=\"isProfileShown\" id=\"v-pills-home\" role=\"tabpanel\" aria-labelledby=\"v-pills-home-tab\">\r\n          <div class=\"strip_head toggleleft mb-3\">\r\n            <span class=\"report_head font-weight-bold\">Edit Profile</span>\r\n          </div>\r\n          <div class=\"p-fluid p-formgrid pic-upload-group row justify-content-md-center\">\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12 text-center\">\r\n              <figure class=\"mt-2 mb-2 pic-upload justify-content-md-center\">\r\n                <img width=\"64\" class=\"rounded-circle border\" [src]=\"thumbnail || 'assets/images/user-empty.png'\"\r\n                  alt=\"upload\" />\r\n                <input type=\"file\" id=\"file\" aria-hidden=\"true\" style=\"visibility: hidden; display: none\"\r\n                  (change)=\"handleFileInput($event)\" />\r\n                  <div class=\"mt-1\">\r\n                    <label\r\n                      for=\"file\"\r\n                      role=\"button\"\r\n                      class=\"material-icon material-symbols-outlined text-primary action-btn\"\r\n                      >edit</label\r\n                    >\r\n                    <span\r\n                      role=\"button\"\r\n                      class=\"material-icon material-symbols-outlined text-danger action-btn\"\r\n                      *ngIf=\"thumbnail\"\r\n                      (click)=\"onClickRemove()\">\r\n                      delete\r\n                    </span>\r\n                    <span\r\n                      class=\"material-icon material-symbols-outlined text-muted action-btn\"\r\n                      pTooltip=\"Image size max 50KB\">\r\n                      Info\r\n                    </span>\r\n                  </div>\r\n              </figure>\r\n              \r\n            </div>\r\n          </div>\r\n          <!-- <p-confirmPopup></p-confirmPopup> -->\r\n          <div class=\"p-fluid p-formgrid row\">\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"fname\" class=\"referral-form-labels\">\r\n                First Name\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <input id=\"fname\" type=\"text\" formControlName=\"firstname\" placeholder=\"Enter First Name\"\r\n                aria-describedby=\"fname\" pInputText />\r\n            </div>\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"mname\" class=\"referral-form-labels\">Middle Name </label>\r\n              <input id=\"mname\" type=\"text\" placeholder=\"Enter Middle Name\" formControlName=\"middlename\"\r\n                aria-describedby=\"mname\" pInputText />\r\n            </div>\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"lName\" class=\"referral-form-labels\">\r\n                Last Name\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <input id=\"lName\" type=\"text\" placeholder=\"Enter Last Name\" formControlName=\"lastname\" pInputText\r\n                aria-describedby=\"lName\"/>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-fluid p-formgrid row\">\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"userName\" class=\"referral-form-labels\">\r\n                User Name\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <input id=\"userName\" type=\"text\" readonly=\"true\" placeholder=\"Enter User Name\" formControlName=\"username\"\r\n                aria-describedby=\"userName\" pInputText />\r\n            </div>\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\" *ngIf=\"RBACORG['dob']\">\r\n              <label for=\"dateformat\" class=\"referral-form-labels\">\r\n                DOB\r\n            <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n              <p-calendar placeholder=\"Select Date Of Birth\" formControlName=\"dob\" dateFormat=\"yy-mm-dd\"\r\n                [showOnFocus]=\"true\" inputId=\"dateformat\">\r\n              </p-calendar>\r\n            </div>\r\n\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\" *ngIf=\"RBACORG['gender']\">\r\n              <label for=\"dateformat\" class=\"referral-form-labels\">\r\n                Gender\r\n            <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <p-dropdown\r\n              [options]=\"genderList\"\r\n              placeholder=\"Select Gender\"\r\n              formControlName=\"gender\"\r\n              appendTo=\"body\"\r\n              optionLabel=\"lookupvalue\"\r\n              optionValue=\"lookupvalue\"\r\n              [style]=\"{'minWidth':'80%'}\"></p-dropdown>\r\n          </div>\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"usersEmailid\" class=\"referral-form-labels\">\r\n                Email ID\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <input id=\"usersEmailid\" placeholder=\"Enter Email ID\" formControlName=\"email\" type=\"text\" pInputText\r\n                readonly />\r\n            </div>\r\n          </div>\r\n          <div class=\"p-fluid p-formgrid row\" *ngIf=\"RBACORG['language']\">\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"usersEmailid\" class=\"referral-form-labels\">\r\n                Language </label>\r\n              <p-dropdown\r\n              [options]=\"languagesList\"\r\n              placeholder=\"Select Language\"\r\n              formControlName=\"userLanguage\"\r\n              appendTo=\"body\"\r\n              [editable]=\"true\" \r\n              optionLabel=\"lookupvalue\"\r\n              optionValue=\"lookupkey\"\r\n              [style]=\"{'minWidth':'80%'}\">\r\n            </p-dropdown>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <ng-container *ngIf=\"RBACORG['contactDetails']\">\r\n              <p-table dataKey=\"value.id\" [value]=\"contactData.controls\" [responsive]=\"true\" formArrayName=\"contactData\">\r\n                <ng-template pTemplate=\"caption\">\r\n                  <div class=\"flex align-items-center justify-content-between\">\r\n                    Contact Details\r\n                    <button class=\"pull-right mb-2 btn btn-primary btncommon\" (click)=\"addSerice()\">+</button>\r\n                  </div>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"header\">\r\n                  <tr>\r\n                    <th id=\"datarules-roles\" style=\"width: 35%\">Conatct Type</th>\r\n                    <th id=\"datarules-permissions\" style=\"width: 35%\">Contact Number</th>\r\n                    <th id=\"datarules-action\" style=\"width: 20%\">Action</th>\r\n                    <th id=\"datarules-empty\" style=\"width: 10%\"></th>\r\n                  </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\">\r\n                  <ng-container>\r\n                    <tr [formGroupName]=\"rowIndex\">\r\n                      <td>\r\n                        <p-dropdown\r\n                        [options]=\"contactTypeList\"\r\n                        placeholder=\"Select Contact Type\"\r\n                        formControlName=\"phonenumbertype\"\r\n                        appendTo=\"body\"\r\n                        optionLabel=\"lookupvalue\"\r\n                        optionValue=\"lookupkey\"\r\n                        [style]=\"{'minWidth':'80%'}\">\r\n                      </p-dropdown>\r\n                        <!-- <div\r\n                          class=\"text-danger\"\r\n                          *ngIf=\"\r\n                            rowData.get('roles').errors && (rowData.get('roles').dirty || rowData.get('roles').touched)\r\n                          \">\r\n                          <div *ngIf=\"rowData.get('roles').errors?.required\">Role is Required</div>\r\n                        </div> -->\r\n                      </td>\r\n                      <td>\r\n                        <!-- <label for=\"contactNumber\" class=\"referral-form-labels\">Contact Number</label> -->\r\n                        <p-inputMask id=\"contactNumber\" mask=\"(999) 999-9999\"  [autoClear]=\"false\" styleClass=\"w-100\"\r\n                          formControlName=\"phonenumber\" placeholder=\"Enter Contact Number\" aria-describedby=\"contactNumber\" [unmask]=\"true\"></p-inputMask>\r\n                        <div\r\n                          class=\"text-danger\"\r\n                          *ngIf=\"\r\n                            rowData.get('phonenumber').errors &&\r\n                            (rowData.get('phonenumber').dirty || rowData.get('phonenumber').touched)\r\n                          \">\r\n                          <div *ngIf=\"rowData.get('phonenumber').errors?.required\">Phone Number is Required</div>\r\n                        </div>\r\n                      </td>\r\n                      <td>\r\n                        <button type=\"button\" class=\"btn btn-default\" title=\"delete\" (click)=\"removeSerice(rowIndex)\">\r\n                          <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-container>\r\n                </ng-template>\r\n              </p-table>\r\n            </ng-container>\r\n            <div class=\"p-fluid p-formgrid row mt-3\" *ngIf=\"RBACORG['optinPapperless']\">\r\n              <div class=\"p-field col-md-12 col-12\">\r\n                <div class=\"checkbox\">\r\n                  <p-checkbox [(ngModel)]=\"checked\" [binary]=\"true\" inputId=\"binary\"\r\n                    formControlName=\"opt_in_for_paperless_documentation\">\r\n                  </p-checkbox>\r\n                  <label class=\"checklabel\" for=\"ch\">Opt-in for Paperless Documentation</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"p-fluid p-formgrid row\">\r\n              <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\"></div>\r\n              <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\"></div>\r\n              <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12 mb-0\">\r\n                <button class=\"pull-right mr-2 mb-2 btn btn-primary btncommon\" (click)=\"updateprofile()\">\r\n                  Save Changes\r\n                </button>\r\n                <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" (click)=\"clearForm()\">\r\n                  Clear\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Tab End -->\r\n\r\n        <!-- Change Password Tab -->\r\n        <div class=\"tab-pane fade\" id=\"v-pills-profile\" role=\"tabpanel\" aria-labelledby=\"v-pills-profile-tab\">\r\n          <div class=\"strip_head toggleleft mb-4\">\r\n            <span class=\"report_head font-weight-bold\">Change Password</span>\r\n          </div>\r\n          <div [formGroup]=\"resetPasswordForm\" class=\"reset-password-div\">\r\n            <div class=\"p-fluid p-formgrid row\">\r\n              <div class=\"p-field col-xl-4 col-lg-12 col-sm-4 col-md-12 col-12 mb-3\">\r\n                <label for=\"mailid\" aria-describedby=\"mailid\">Email <span class=\"requiredfield\">*</span></label>\r\n                <input type=\"text\" readonly=\"true\" id=\"mailid\" class=\"form-control\" formControlName=\"mailid\"\r\n                  pInputText />\r\n              </div>\r\n            </div>\r\n            <div class=\"p-fluid p-formgrid row\">\r\n              <div class=\"col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12 mb-2 position-relative\">\r\n                <label for=\"cpassword\" aria-describedby=\"cpassword\">Current Password <span\r\n                    class=\"requiredfield\">*</span></label>\r\n                <div class=\"position-relative\">\r\n                  <input [maxlength]=\"16\" formControlName=\"currentpassword\" #currentpassword type=\"password\"\r\n                    placeholder=\"Enter Current Password\" name=\"password\" id=\"password\" tabindex=\"0\" required pInputText\r\n                    style=\"padding-right: 40px;\" />\r\n                  <em class=\"pi eye-icon\"  aria-hidden=\"true\" appPasswordToggle [passwordField]=\"currentpassword\"></em>\r\n                </div>\r\n                <div class=\"p-error block\" *ngIf=\"\r\n                resetPasswordForm.get('currentpassword').errors && formSubmitted\">\r\n                  <small>Current password is required.</small>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12 mb-2 position-relative\">\r\n                <label for=\"npassword\" aria-describedby=\"npassword\">New Password <span\r\n                    class=\"requiredfield\">*</span></label>\r\n                <div class=\"position-relative\">\r\n                  <input [maxlength]=\"16\" formControlName=\"newpassword\" #newpassword type=\"password\"\r\n                    placeholder=\"Enter New Password\" name=\"password\" id=\"newpassword\" tabindex=\"0\" required pInputText\r\n                    style=\"padding-right: 40px;\" />\r\n                  <em class=\"pi eye-icon\" appPasswordToggle [passwordField]=\"newpassword\" aria-hidden=\"true\"></em>\r\n                </div>\r\n                <div class=\"autosuggest\" *ngIf=\"isValid\">\r\n                  <div class=\"p-error block\" *ngIf=\"resetFormcontrols['newpassword'].hasError('hasNumber')\">\r\n                    <em class=\"pi pi-times-circle\"></em>\r\n                    <small> {{ errors[0] }}</small>\r\n                  </div>\r\n                  <div class=\"p-error block\" *ngIf=\"resetFormcontrols['newpassword'].hasError('hasCapitalCase')\">\r\n                    <em class=\"pi pi-times-circle\"></em>\r\n                    <small> {{ errors[2] }}</small>\r\n                  </div>\r\n                  <div class=\"p-error block\" *ngIf=\"resetFormcontrols['newpassword'].hasError('hasSmallCase')\">\r\n                    <em class=\"pi pi-times-circle\"></em>\r\n                    <small> {{ errors[3] }}</small>\r\n                  </div>\r\n                  <small class=\"p-error block\"\r\n                    *ngIf=\"resetFormcontrols['newpassword'].hasError('hasSpecialCharacters')\">\r\n                    <em class=\"pi pi-times-circle\"></em>\r\n                    {{ errors[1] }}\r\n                  </small>\r\n                  <div class=\"p-error block\" *ngIf=\"resetFormcontrols['newpassword'].hasError('minlength')\">\r\n                    <em class=\"pi pi-times-circle\"></em>\r\n                    <small> {{ errors[4] }}</small>\r\n                  </div>\r\n                  <div class=\"p-error block\" *ngIf=\"resetFormcontrols['newpassword'].hasError('hasSpace')\">\r\n                    <em class=\"pi pi-times-circle\"></em>\r\n                    <small> {{ errors[6] }}</small>\r\n                  </div>\r\n                </div>\r\n                <div class=\"p-error block\" *ngIf=\"\r\n                    resetPasswordForm.get('newpassword').errors && formSubmitted\">\r\n                  <small>New Password is required</small>\r\n                </div>\r\n                <div class=\"p-error block\"\r\n                  *ngIf=\"\r\n                    resetPasswordForm.hasError('newPasswordSame') && formSubmitted && ! resetPasswordForm.get('newpassword').errors\">\r\n                  <small>New Password same as Current Password</small>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12 mb-2 position-relative\">\r\n                <label for=\"cnfpassword\" aria-describedby=\"cnfpassword\">Confirm Password <span\r\n                    class=\"requiredfield\">*</span></label>\r\n                <div class=\"position-relative\">\r\n                  <input [maxlength]=\"16\" formControlName=\"conformpassword\" #confirmpassword type=\"password\"\r\n                    placeholder=\"Confirm New Password\" name=\"password\" id=\"confirmpassword\" tabindex=\"0\" required\r\n                    pInputText style=\"padding-right: 40px;\" />\r\n                  <em class=\"pi eye-icon\" appPasswordToggle [passwordField]=\"confirmpassword\" aria-hidden=\"true\"></em>\r\n                </div>\r\n                <div *ngIf=\"\r\n                    resetFormcontrols['conformpassword'].hasError('required') &&\r\n                    resetFormcontrols['conformpassword'].touched\r\n                  \" class=\"p-error block\">\r\n                </div>\r\n                <div class=\"p-error block\" *ngIf=\"\r\n                resetPasswordForm.get('conformpassword').errors && formSubmitted\">\r\n                  <small>Confirm Password is required</small>\r\n                </div>\r\n                <div class=\"p-error block\" *ngIf=\"\r\n                  resetPasswordForm.hasError('NoPassswordMatch') && formSubmitted && ! resetPasswordForm.get('conformpassword').errors\r\n                 \">\r\n                  <small>Password does not match</small>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12 mt-2 text-right\">\r\n              <p-button label=\"Cancel\" styleClass=\"px-3 py-1 btn bg-white text-primary btncancel\"\r\n                (click)=\"reset()\"></p-button>\r\n              <p-button label=\"Save\" styleClass=\"px-3 py-1 ml-2\" (click)=\"changePassword()\"></p-button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Tab End -->\r\n\r\n        <!-- Theme Customizer Tab -->\r\n        <div class=\"tab-pane fade\" id=\"theme_tab\" [class.active]=\"isThemeActive\" [class.show]=\"isThemeShown\" role=\"tabpanel\" aria-labelledby=\"v-theme-a\">\r\n          <div class=\"strip_head toggleleft mb-4\">\r\n            <span class=\"report_head font-weight-bold\">Theme Customizer</span>\r\n          </div>\r\n          <div class=\"customizer customizer-styling pt-3\">\r\n            <!-- Skin -->\r\n            <div class=\"customizer-styling-skin skin mb-4\">\r\n              <h6 class=\"font-weight-bold mb-2\">Skin</h6>\r\n              <div class=\"d-flex justify-content-start align-items-center\">\r\n                <div *ngFor=\"let theme of themes\" class=\"custom-control custom-radio mr-4\">\r\n                  <figure [ngClass]=\"selectedTheme === theme.key ? 'active' : ''\">\r\n                    <label role=\"link\" class=\"mb-0 theme-select\" for=\"theme_{{ theme.key }}\">\r\n                      <img src=\"{{ theme.image }}\" class=\"img-fluid\" alt=\"{{ theme.name }}\" />\r\n                    </label>\r\n                    <figcaption>\r\n                      <input type=\"radio\" id=\"theme_{{ theme.key }}\" name=\"{{ theme.name }}\"\r\n                        class=\"custom-control-input layout-name\" [value]=\"theme.key\" [(ngModel)]=\"selectedTheme\"\r\n                        [ngModelOptions]=\"{ standalone: true }\" (click)=\"setTheme(theme.key)\" />\r\n                      <label class=\"custom-control-label mt-2\" for=\"theme_{{ theme.key }}\">{{ theme.name }}</label>\r\n                    </figcaption>\r\n                  </figure>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"customizer-styling-skin d-none mb-3\">\r\n              <h6 class=\"font-weight-bold mb-2\">Font</h6>\r\n              <div class=\"d-flex justify-content-start align-items-center\">\r\n                <div *ngFor=\"let fontSet of fontSetList\" class=\"custom-control custom-radio mr-4\">\r\n                  <figure [ngClass]=\"selectedFont === fontSet.key ? 'active' : ''\">\r\n                    <label for=\"font_{{ fontSet.key }}\" class=\"font-box mb-0 theme-select\"> Aa </label>\r\n                    <figcaption>\r\n                      <input type=\"radio\" id=\"font_{{ fontSet.key }}\" name=\"{{ fontSet.name }}\"\r\n                        class=\"custom-control-input layout-name\" [value]=\"fontSet.key\" [(ngModel)]=\"selectedFont\"\r\n                        [ngModelOptions]=\"{ standalone: true }\" (click)=\"setFont(fontSet.key)\" />\r\n                      <label class=\"custom-control-label mt-2\" for=\"font_{{ fontSet.key }}\">{{ fontSet.name }}</label>\r\n                    </figcaption>\r\n                  </figure>\r\n                </div>\r\n              </div>\r\n            </div> -->\r\n\r\n            <div class=\"customizer-styling-skin mb-3\">\r\n              <h6 class=\"font-weight-bold mb-2\">Font Size (<span id=\"rs-bullet\" class=\"rs-label\">{{selectedFont}}</span>)</h6>\r\n              <div class=\"d-flex justify-content-start align-items-center col-lg-4 col-md-4 col-12 p-0\">\r\n                <div class=\"custom-control custom-radio w-100 mr-4\">\r\n                  <div class=\"range-slider\">\r\n                    <input id=\"rs-range-line\" class=\"rs-range\" type=\"range\" #ref value=\"{{selectedFont}}\" min=\"13\" max=\"20\"   [ngModelOptions]=\"{ standalone: true }\" [(ngModel)]=\"selectedFont\" (change)=\"setRangeFont(ref.value)\">\r\n                  </div>\r\n                  <div class=\"box-minmax\">\r\n                    <span>13</span><span>20</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <button class=\"pull-right mr-2 mb-2 btn btn-primary btncommon\" (click)=\"updateStyling()\">Save Changes</button>\r\n        </div>\r\n        \r\n        <!-- Tab End -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal\" id=\"Deleteuser\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Delete Profile Image</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Are you sure you want to delete the Profile Image?\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary btncommon delete\" data-dismiss=\"modal\" (click)=\"removeThumbnail()\">\r\n            Delete\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"UpdateUserTheme\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Update Theme</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Do you want to apply the changes?\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary btncommon delete\" data-dismiss=\"modal\" (click)=\"updateThemePopup()\">\r\n            Update\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\" (click)=\"cancleThemePopup()\">Cancel</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".profile .pic-upload{position:relative;display:inline-flex;flex-direction:column;align-items:center}.profile .pic-upload .action-btn{margin-bottom:0;width:25px;height:25px;margin-right:5px;line-height:normal;text-align:center;display:inline-block;vertical-align:middle;font-size:var(--font-24)}.profile .right-container p{color:var(--text-dark)}.profile .autosuggest{position:absolute;inset:24px 15px auto;transform:translate3d(0,38px,0);will-change:transform;min-width:10rem;padding:.5rem;margin:.125rem 0 0;font-size:1rem;color:var(--text-dark);text-align:left;list-style:none;background-color:var(--bg-light);background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem;z-index:9;max-height:200px;overflow:auto}.profile .autosuggest li{cursor:pointer;font-size:13px;line-height:35px;border-bottom:solid 1px var(--table-border)}.profile .autosuggest li:hover{color:var(--text-dark)}.profile .autosuggest li:last-child{border-bottom:none}.profile .nav-pills .nav-link{position:relative;color:#767676;background-color:transparent}.profile .nav-pills .nav-link.active{background-color:transparent;color:var(--primary);font-weight:600}.profile .nav-pills .nav-link.active :before{content:\"chevron_right\";font-family:Material Icons;position:absolute;right:0;left:auto}@media screen and (min-width: 1180px){.profile{height:calc(100vh - 100px)}}@media screen and (min-width: 768px){.profile .container-group{display:flex}.profile .container-group .left-container{border-right:1px solid var(--table-border);height:100%;width:280px}.profile .container-group .right-container{height:100%;width:calc(100% - 280px)}.profile .nav-pills .nav-link.active :before{display:block}}@media screen and (max-width: 767px){.container-group .left-container{width:100%}.container-group .left-container .nav-pills{border-bottom:1px solid var(--table-border)}.container-group .right-container{width:100%}.container-group .right-container .tab-pane .strip_head{text-align:center}.container-group .nav-pills .nav-link.active :before{display:none}}.customizer .custom-checkbox.custom-control,.customizer .custom-radio.custom-control{padding-left:0rem}.customizer .custom-checkbox.custom-control .theme-select,.customizer .custom-radio.custom-control .theme-select{border:2px solid #ddd;border-radius:7px}.customizer .custom-checkbox.custom-control .active .theme-select,.customizer .custom-radio.custom-control .active .theme-select{border-color:var(--primary)}.customizer .custom-checkbox .custom-control-input:checked~.custom-control-label:before,.customizer .custom-radio .custom-control-input:checked~.custom-control-label:before{content:\"\\f00c\";font-family:FontAwesome,sans-serif;color:var(--hover-text);background-color:var(--btn);border-color:var(--btn);font-size:10px;display:flex;align-items:center;padding:2px}.customizer .custom-checkbox label,.customizer .custom-radio label{cursor:pointer}.customizer .custom-checkbox .font-box,.customizer .custom-radio .font-box{display:flex;justify-content:center;align-items:center;width:150px;height:120px;color:var(--text-dark)}.customizer .custom-checkbox .custom-control-label,.customizer .custom-radio .custom-control-label{position:relative;vertical-align:middle;font-size:var(--base-font-size);line-height:normal;color:var(--text-dark);cursor:pointer;padding-left:25px}.customizer .custom-checkbox .custom-control-label:after,.customizer .custom-radio .custom-control-label:after{border-color:var(--btn)}.customizer .custom-checkbox .custom-control-label:before,.customizer .custom-checkbox .custom-control-label:after,.customizer .custom-radio .custom-control-label:before,.customizer .custom-radio .custom-control-label:after{background-image:none;width:16px;height:16px;left:0;box-shadow:none;top:0}.customizer hr{border-color:var(--table-border)}.customizer .customizer-header{background:var(--background-color);color:var(--text-dark)}.customizer .customizer-header .customizer-close{position:absolute;right:.6rem;top:.6rem;padding:7px;width:auto;z-index:10;color:var(--text-dark);cursor:pointer}.customizer .customizer-header .customizer-close .material-icon{font-size:1.5rem}.customizer .customizer-header .customizer-close:hover{color:var(--btn)}.customizer h4{font-size:var(--font-15);font-weight:600;color:var(--text-dark)}.customizer h6{font-size:var(--font-14);color:var(--text-dark)}.customizer p{font-size:var(--base-font-size);font-weight:400;color:var(--text-dark)}.customizer .customizer-toggle{background:var(--btn);color:var(--hover-text);box-shadow:-3px 0 8px #22292f1a;border-top-left-radius:6px;border-bottom-left-radius:6px;position:absolute;top:50%;width:38px;height:38px;left:-39px;text-align:center;line-height:40px;border-left:1px solid var(--checkbox-border);cursor:pointer}.customizer .customizer-toggle .fa-cog{font-size:var(--font-15)}.customizer .customizer-toggle:hover{text-decoration:none}.customizer .customizer-styling-skin.skin .custom-control .custom-control-label{position:relative;padding-left:25px}.customizer .custom-control:first-child .font-box{font-size:var(--font-21);font-weight:400}.customizer .custom-control:last-child .font-box{font-size:var(--font-26);font-weight:600}.box-minmax{margin-top:15px;width:100%;display:flex;justify-content:space-between;font-size:14px;color:var(--label-text)}.box-minmax span:first-child{margin-left:4px}.rs-range{margin-top:29px;width:100%;appearance:none;-webkit-appearance:none}.rs-range:focus{outline:none;border:none!important}.rs-range::-webkit-slider-runnable-track{width:100%;height:1px;cursor:pointer;box-shadow:none;background:var(--text-dark);border-radius:0;border:0px solid #010101}.rs-range::-moz-range-track{width:100%;height:1px;cursor:pointer;box-shadow:none;background:var(--btn);border-radius:0;border:0px solid #010101}.rs-range::-webkit-slider-thumb{box-shadow:none;border:0px solid var(--table-border);box-shadow:0 10px 10px #00000040;height:30px;width:20px;border-radius:22px;background:var(--btn);cursor:pointer;appearance:none;-webkit-appearance:none;margin-top:-15px}.rs-range::-moz-range-thumb{box-shadow:none;border:0px solid var(--table-border);box-shadow:0 10px 10px #00000040;height:42px;width:22px;border-radius:22px;background:var(--btn);cursor:pointer;appearance:none;-webkit-appearance:none;margin-top:-20px}.rs-range::-moz-focus-outer{border:0}.rs-label{text-align:center;font-weight:700;color:var(--label-text);line-height:normal;font-size:14px}.rs-label:after{content:\"px\";font-size:14px;letter-spacing:.07em}.pi.eye-icon{position:absolute;right:20px;top:50%;margin-top:-7.5px;cursor:pointer;font-size:15px}input[type=password]::-ms-reveal,input[type=password]::-ms-clear{display:none}\n"], dependencies: [{ kind: "directive", type: i10.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i10.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i10.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.RangeValueAccessor, selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]" }, { kind: "directive", type: i2.RadioControlValueAccessor, selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]", inputs: ["name", "formControlName", "value"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i2.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { kind: "directive", type: i2.FormArrayName, selector: "[formArrayName]", inputs: ["formArrayName"] }, { kind: "directive", type: i6.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "directive", type: i11.Tooltip, selector: "[pTooltip]", inputs: ["tooltipPosition", "tooltipEvent", "appendTo", "positionStyle", "tooltipStyleClass", "tooltipZIndex", "escape", "showDelay", "hideDelay", "life", "positionTop", "positionLeft", "autoHide", "fitContent", "hideOnEscape", "pTooltip", "tooltipDisabled", "tooltipOptions"] }, { kind: "component", type: i12.Checkbox, selector: "p-checkbox", inputs: ["value", "name", "disabled", "binary", "label", "ariaLabelledBy", "ariaLabel", "tabindex", "inputId", "style", "styleClass", "labelStyleClass", "formControl", "checkboxIcon", "readonly", "required", "trueValue", "falseValue"], outputs: ["onChange"] }, { kind: "component", type: i13.Dropdown, selector: "p-dropdown", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }, { kind: "component", type: i14.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "size", "style", "styleClass", "badgeClass", "ariaLabel"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "component", type: i15.Table, selector: "p-table", inputs: ["frozenColumns", "frozenValue", "style", "styleClass", "tableStyle", "tableStyleClass", "paginator", "pageLinks", "rowsPerPageOptions", "alwaysShowPaginator", "paginatorPosition", "paginatorStyleClass", "paginatorDropdownAppendTo", "paginatorDropdownScrollHeight", "currentPageReportTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showJumpToPageInput", "showFirstLastIcon", "showPageLinks", "defaultSortOrder", "sortMode", "resetPageOnSort", "selectionMode", "selectionPageOnly", "contextMenuSelection", "contextMenuSelectionMode", "dataKey", "metaKeySelection", "rowSelectable", "rowTrackBy", "lazy", "lazyLoadOnInit", "compareSelectionBy", "csvSeparator", "exportFilename", "filters", "globalFilterFields", "filterDelay", "filterLocale", "expandedRowKeys", "editingRowKeys", "rowExpandMode", "scrollable", "scrollDirection", "rowGroupMode", "scrollHeight", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "virtualScrollDelay", "frozenWidth", "responsive", "contextMenu", "resizableColumns", "columnResizeMode", "reorderableColumns", "loading", "loadingIcon", "showLoader", "rowHover", "customSort", "showInitialSortBadge", "autoLayout", "exportFunction", "exportHeader", "stateKey", "stateStorage", "editMode", "groupRowsBy", "groupRowsByOrder", "responsiveLayout", "breakpoint", "paginatorLocale", "value", "columns", "first", "rows", "totalRecords", "sortField", "sortOrder", "multiSortMeta", "selection", "selectAll", "virtualRowHeight"], outputs: ["contextMenuSelectionChange", "selectAllChange", "selectionChange", "onRowSelect", "onRowUnselect", "onPage", "onSort", "onFilter", "onLazyLoad", "onRowExpand", "onRowCollapse", "onContextMenuSelect", "onColResize", "onColReorder", "onRowReorder", "onEditInit", "onEditComplete", "onEditCancel", "onHeaderCheckboxToggle", "sortFunction", "firstChange", "rowsChange", "onStateSave", "onStateRestore"] }, { kind: "directive", type: i16.InputText, selector: "[pInputText]" }, { kind: "component", type: i17.Calendar, selector: "p-calendar", inputs: ["style", "styleClass", "inputStyle", "inputId", "name", "inputStyleClass", "placeholder", "ariaLabelledBy", "ariaLabel", "iconAriaLabel", "disabled", "dateFormat", "multipleSeparator", "rangeSeparator", "inline", "showOtherMonths", "selectOtherMonths", "showIcon", "icon", "appendTo", "readonlyInput", "shortYearCutoff", "monthNavigator", "yearNavigator", "hourFormat", "timeOnly", "stepHour", "stepMinute", "stepSecond", "showSeconds", "required", "showOnFocus", "showWeek", "showClear", "dataType", "selectionMode", "maxDateCount", "showButtonBar", "todayButtonStyleClass", "clearButtonStyleClass", "autoZIndex", "baseZIndex", "panelStyleClass", "panelStyle", "keepInvalid", "hideOnDateTimeSelect", "touchUI", "timeSeparator", "focusTrap", "showTransitionOptions", "hideTransitionOptions", "tabindex", "minDate", "maxDate", "disabledDates", "disabledDays", "yearRange", "showTime", "responsiveOptions", "numberOfMonths", "firstDayOfWeek", "locale", "view", "defaultDate"], outputs: ["onFocus", "onBlur", "onClose", "onSelect", "onClear", "onInput", "onTodayClick", "onClearClick", "onMonthChange", "onYearChange", "onClickOutside", "onShow"] }, { kind: "component", type: i18.InputMask, selector: "p-inputMask", inputs: ["type", "slotChar", "autoClear", "showClear", "style", "inputId", "styleClass", "placeholder", "size", "maxlength", "tabindex", "title", "ariaLabel", "ariaLabelledBy", "ariaRequired", "disabled", "readonly", "unmask", "name", "required", "characterPattern", "autoFocus", "autocomplete", "keepBuffer", "mask"], outputs: ["onComplete", "onFocus", "onBlur", "onInput", "onKeydown", "onClear"] }, { kind: "component", type: AlertComponent, selector: "app-alert" }] });
};
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileComponent$1, decorators: [{
            type: Component,
            args: [{ selector: 'core-profile', template: "<app-alert></app-alert>\r\n<div class=\"card w-100 profile\">\r\n  <div class=\"container-group h-100\" [formGroup]=\"userForm\">\r\n    <div class=\"left-container\">\r\n      <div class=\"nav flex-column nav-pills py-4 px-3\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\r\n        <a class=\"nav-link d-flex align-items-center mb-3\" [class.active]=\"isProfileActive\" id=\"v-pills-home-tab\" data-toggle=\"pill\"\r\n          [href]=\"currentTab\" (click)=\"setCurrentTab('#v-pills-home')\" role=\"tab\" aria-controls=\"v-pills-home\" aria-selected=\"true\">\r\n          <span class=\"material-icon material-symbols-outlined mr-2\">person</span>\r\n          Edit Profile\r\n        </a>\r\n        <a class=\"nav-link d-flex align-items-center mb-3\" *ngIf=\"RBACORG['changePassword']\" id=\"v-pills-profile-tab\" data-toggle=\"pill\"\r\n          href=\"#v-pills-profile\" role=\"tab\" aria-controls=\"v-pills-profile\" aria-selected=\"false\">\r\n          <span class=\"material-icon material-symbols-outlined mr-2\">lock_open</span>\r\n          Change Password\r\n        </a>\r\n        <a class=\"nav-link d-flex align-items-center\" [class.active]=\"isThemeActive\" (click)=\"setCurrentTab('#theme_tab')\" id=\"v-theme-a\" data-toggle=\"pill\" [href]=\"currentTab\" role=\"tab\"\r\n          aria-controls=\"theme_tab\" aria-selected=\"false\">\r\n          <span class=\"material-icon material-symbols-outlined mr-2\">palette</span>\r\n          Theme\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"right-container\">\r\n      <div class=\"tab-content py-4 px-4\" id=\"v-pills-tabContent\">\r\n        <!-- Edit Profile Tab -->\r\n        <div class=\"tab-pane fade\" [class.active]=\"isProfileActive\" [class.show]=\"isProfileShown\" id=\"v-pills-home\" role=\"tabpanel\" aria-labelledby=\"v-pills-home-tab\">\r\n          <div class=\"strip_head toggleleft mb-3\">\r\n            <span class=\"report_head font-weight-bold\">Edit Profile</span>\r\n          </div>\r\n          <div class=\"p-fluid p-formgrid pic-upload-group row justify-content-md-center\">\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12 text-center\">\r\n              <figure class=\"mt-2 mb-2 pic-upload justify-content-md-center\">\r\n                <img width=\"64\" class=\"rounded-circle border\" [src]=\"thumbnail || 'assets/images/user-empty.png'\"\r\n                  alt=\"upload\" />\r\n                <input type=\"file\" id=\"file\" aria-hidden=\"true\" style=\"visibility: hidden; display: none\"\r\n                  (change)=\"handleFileInput($event)\" />\r\n                  <div class=\"mt-1\">\r\n                    <label\r\n                      for=\"file\"\r\n                      role=\"button\"\r\n                      class=\"material-icon material-symbols-outlined text-primary action-btn\"\r\n                      >edit</label\r\n                    >\r\n                    <span\r\n                      role=\"button\"\r\n                      class=\"material-icon material-symbols-outlined text-danger action-btn\"\r\n                      *ngIf=\"thumbnail\"\r\n                      (click)=\"onClickRemove()\">\r\n                      delete\r\n                    </span>\r\n                    <span\r\n                      class=\"material-icon material-symbols-outlined text-muted action-btn\"\r\n                      pTooltip=\"Image size max 50KB\">\r\n                      Info\r\n                    </span>\r\n                  </div>\r\n              </figure>\r\n              \r\n            </div>\r\n          </div>\r\n          <!-- <p-confirmPopup></p-confirmPopup> -->\r\n          <div class=\"p-fluid p-formgrid row\">\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"fname\" class=\"referral-form-labels\">\r\n                First Name\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <input id=\"fname\" type=\"text\" formControlName=\"firstname\" placeholder=\"Enter First Name\"\r\n                aria-describedby=\"fname\" pInputText />\r\n            </div>\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"mname\" class=\"referral-form-labels\">Middle Name </label>\r\n              <input id=\"mname\" type=\"text\" placeholder=\"Enter Middle Name\" formControlName=\"middlename\"\r\n                aria-describedby=\"mname\" pInputText />\r\n            </div>\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"lName\" class=\"referral-form-labels\">\r\n                Last Name\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <input id=\"lName\" type=\"text\" placeholder=\"Enter Last Name\" formControlName=\"lastname\" pInputText\r\n                aria-describedby=\"lName\"/>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-fluid p-formgrid row\">\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"userName\" class=\"referral-form-labels\">\r\n                User Name\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <input id=\"userName\" type=\"text\" readonly=\"true\" placeholder=\"Enter User Name\" formControlName=\"username\"\r\n                aria-describedby=\"userName\" pInputText />\r\n            </div>\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\" *ngIf=\"RBACORG['dob']\">\r\n              <label for=\"dateformat\" class=\"referral-form-labels\">\r\n                DOB\r\n            <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n              <p-calendar placeholder=\"Select Date Of Birth\" formControlName=\"dob\" dateFormat=\"yy-mm-dd\"\r\n                [showOnFocus]=\"true\" inputId=\"dateformat\">\r\n              </p-calendar>\r\n            </div>\r\n\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\" *ngIf=\"RBACORG['gender']\">\r\n              <label for=\"dateformat\" class=\"referral-form-labels\">\r\n                Gender\r\n            <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <p-dropdown\r\n              [options]=\"genderList\"\r\n              placeholder=\"Select Gender\"\r\n              formControlName=\"gender\"\r\n              appendTo=\"body\"\r\n              optionLabel=\"lookupvalue\"\r\n              optionValue=\"lookupvalue\"\r\n              [style]=\"{'minWidth':'80%'}\"></p-dropdown>\r\n          </div>\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"usersEmailid\" class=\"referral-form-labels\">\r\n                Email ID\r\n                <span class=\"requiredfield text-danger\">*</span>\r\n              </label>\r\n              <input id=\"usersEmailid\" placeholder=\"Enter Email ID\" formControlName=\"email\" type=\"text\" pInputText\r\n                readonly />\r\n            </div>\r\n          </div>\r\n          <div class=\"p-fluid p-formgrid row\" *ngIf=\"RBACORG['language']\">\r\n            <div class=\"p-field col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"usersEmailid\" class=\"referral-form-labels\">\r\n                Language </label>\r\n              <p-dropdown\r\n              [options]=\"languagesList\"\r\n              placeholder=\"Select Language\"\r\n              formControlName=\"userLanguage\"\r\n              appendTo=\"body\"\r\n              [editable]=\"true\" \r\n              optionLabel=\"lookupvalue\"\r\n              optionValue=\"lookupkey\"\r\n              [style]=\"{'minWidth':'80%'}\">\r\n            </p-dropdown>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <ng-container *ngIf=\"RBACORG['contactDetails']\">\r\n              <p-table dataKey=\"value.id\" [value]=\"contactData.controls\" [responsive]=\"true\" formArrayName=\"contactData\">\r\n                <ng-template pTemplate=\"caption\">\r\n                  <div class=\"flex align-items-center justify-content-between\">\r\n                    Contact Details\r\n                    <button class=\"pull-right mb-2 btn btn-primary btncommon\" (click)=\"addSerice()\">+</button>\r\n                  </div>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"header\">\r\n                  <tr>\r\n                    <th id=\"datarules-roles\" style=\"width: 35%\">Conatct Type</th>\r\n                    <th id=\"datarules-permissions\" style=\"width: 35%\">Contact Number</th>\r\n                    <th id=\"datarules-action\" style=\"width: 20%\">Action</th>\r\n                    <th id=\"datarules-empty\" style=\"width: 10%\"></th>\r\n                  </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\">\r\n                  <ng-container>\r\n                    <tr [formGroupName]=\"rowIndex\">\r\n                      <td>\r\n                        <p-dropdown\r\n                        [options]=\"contactTypeList\"\r\n                        placeholder=\"Select Contact Type\"\r\n                        formControlName=\"phonenumbertype\"\r\n                        appendTo=\"body\"\r\n                        optionLabel=\"lookupvalue\"\r\n                        optionValue=\"lookupkey\"\r\n                        [style]=\"{'minWidth':'80%'}\">\r\n                      </p-dropdown>\r\n                        <!-- <div\r\n                          class=\"text-danger\"\r\n                          *ngIf=\"\r\n                            rowData.get('roles').errors && (rowData.get('roles').dirty || rowData.get('roles').touched)\r\n                          \">\r\n                          <div *ngIf=\"rowData.get('roles').errors?.required\">Role is Required</div>\r\n                        </div> -->\r\n                      </td>\r\n                      <td>\r\n                        <!-- <label for=\"contactNumber\" class=\"referral-form-labels\">Contact Number</label> -->\r\n                        <p-inputMask id=\"contactNumber\" mask=\"(999) 999-9999\"  [autoClear]=\"false\" styleClass=\"w-100\"\r\n                          formControlName=\"phonenumber\" placeholder=\"Enter Contact Number\" aria-describedby=\"contactNumber\" [unmask]=\"true\"></p-inputMask>\r\n                        <div\r\n                          class=\"text-danger\"\r\n                          *ngIf=\"\r\n                            rowData.get('phonenumber').errors &&\r\n                            (rowData.get('phonenumber').dirty || rowData.get('phonenumber').touched)\r\n                          \">\r\n                          <div *ngIf=\"rowData.get('phonenumber').errors?.required\">Phone Number is Required</div>\r\n                        </div>\r\n                      </td>\r\n                      <td>\r\n                        <button type=\"button\" class=\"btn btn-default\" title=\"delete\" (click)=\"removeSerice(rowIndex)\">\r\n                          <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-container>\r\n                </ng-template>\r\n              </p-table>\r\n            </ng-container>\r\n            <div class=\"p-fluid p-formgrid row mt-3\" *ngIf=\"RBACORG['optinPapperless']\">\r\n              <div class=\"p-field col-md-12 col-12\">\r\n                <div class=\"checkbox\">\r\n                  <p-checkbox [(ngModel)]=\"checked\" [binary]=\"true\" inputId=\"binary\"\r\n                    formControlName=\"opt_in_for_paperless_documentation\">\r\n                  </p-checkbox>\r\n                  <label class=\"checklabel\" for=\"ch\">Opt-in for Paperless Documentation</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"p-fluid p-formgrid row\">\r\n              <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\"></div>\r\n              <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\"></div>\r\n              <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12 mb-0\">\r\n                <button class=\"pull-right mr-2 mb-2 btn btn-primary btncommon\" (click)=\"updateprofile()\">\r\n                  Save Changes\r\n                </button>\r\n                <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" (click)=\"clearForm()\">\r\n                  Clear\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Tab End -->\r\n\r\n        <!-- Change Password Tab -->\r\n        <div class=\"tab-pane fade\" id=\"v-pills-profile\" role=\"tabpanel\" aria-labelledby=\"v-pills-profile-tab\">\r\n          <div class=\"strip_head toggleleft mb-4\">\r\n            <span class=\"report_head font-weight-bold\">Change Password</span>\r\n          </div>\r\n          <div [formGroup]=\"resetPasswordForm\" class=\"reset-password-div\">\r\n            <div class=\"p-fluid p-formgrid row\">\r\n              <div class=\"p-field col-xl-4 col-lg-12 col-sm-4 col-md-12 col-12 mb-3\">\r\n                <label for=\"mailid\" aria-describedby=\"mailid\">Email <span class=\"requiredfield\">*</span></label>\r\n                <input type=\"text\" readonly=\"true\" id=\"mailid\" class=\"form-control\" formControlName=\"mailid\"\r\n                  pInputText />\r\n              </div>\r\n            </div>\r\n            <div class=\"p-fluid p-formgrid row\">\r\n              <div class=\"col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12 mb-2 position-relative\">\r\n                <label for=\"cpassword\" aria-describedby=\"cpassword\">Current Password <span\r\n                    class=\"requiredfield\">*</span></label>\r\n                <div class=\"position-relative\">\r\n                  <input [maxlength]=\"16\" formControlName=\"currentpassword\" #currentpassword type=\"password\"\r\n                    placeholder=\"Enter Current Password\" name=\"password\" id=\"password\" tabindex=\"0\" required pInputText\r\n                    style=\"padding-right: 40px;\" />\r\n                  <em class=\"pi eye-icon\"  aria-hidden=\"true\" appPasswordToggle [passwordField]=\"currentpassword\"></em>\r\n                </div>\r\n                <div class=\"p-error block\" *ngIf=\"\r\n                resetPasswordForm.get('currentpassword').errors && formSubmitted\">\r\n                  <small>Current password is required.</small>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12 mb-2 position-relative\">\r\n                <label for=\"npassword\" aria-describedby=\"npassword\">New Password <span\r\n                    class=\"requiredfield\">*</span></label>\r\n                <div class=\"position-relative\">\r\n                  <input [maxlength]=\"16\" formControlName=\"newpassword\" #newpassword type=\"password\"\r\n                    placeholder=\"Enter New Password\" name=\"password\" id=\"newpassword\" tabindex=\"0\" required pInputText\r\n                    style=\"padding-right: 40px;\" />\r\n                  <em class=\"pi eye-icon\" appPasswordToggle [passwordField]=\"newpassword\" aria-hidden=\"true\"></em>\r\n                </div>\r\n                <div class=\"autosuggest\" *ngIf=\"isValid\">\r\n                  <div class=\"p-error block\" *ngIf=\"resetFormcontrols['newpassword'].hasError('hasNumber')\">\r\n                    <em class=\"pi pi-times-circle\"></em>\r\n                    <small> {{ errors[0] }}</small>\r\n                  </div>\r\n                  <div class=\"p-error block\" *ngIf=\"resetFormcontrols['newpassword'].hasError('hasCapitalCase')\">\r\n                    <em class=\"pi pi-times-circle\"></em>\r\n                    <small> {{ errors[2] }}</small>\r\n                  </div>\r\n                  <div class=\"p-error block\" *ngIf=\"resetFormcontrols['newpassword'].hasError('hasSmallCase')\">\r\n                    <em class=\"pi pi-times-circle\"></em>\r\n                    <small> {{ errors[3] }}</small>\r\n                  </div>\r\n                  <small class=\"p-error block\"\r\n                    *ngIf=\"resetFormcontrols['newpassword'].hasError('hasSpecialCharacters')\">\r\n                    <em class=\"pi pi-times-circle\"></em>\r\n                    {{ errors[1] }}\r\n                  </small>\r\n                  <div class=\"p-error block\" *ngIf=\"resetFormcontrols['newpassword'].hasError('minlength')\">\r\n                    <em class=\"pi pi-times-circle\"></em>\r\n                    <small> {{ errors[4] }}</small>\r\n                  </div>\r\n                  <div class=\"p-error block\" *ngIf=\"resetFormcontrols['newpassword'].hasError('hasSpace')\">\r\n                    <em class=\"pi pi-times-circle\"></em>\r\n                    <small> {{ errors[6] }}</small>\r\n                  </div>\r\n                </div>\r\n                <div class=\"p-error block\" *ngIf=\"\r\n                    resetPasswordForm.get('newpassword').errors && formSubmitted\">\r\n                  <small>New Password is required</small>\r\n                </div>\r\n                <div class=\"p-error block\"\r\n                  *ngIf=\"\r\n                    resetPasswordForm.hasError('newPasswordSame') && formSubmitted && ! resetPasswordForm.get('newpassword').errors\">\r\n                  <small>New Password same as Current Password</small>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-xl-4 col-lg-6 col-sm-4 col-md-12 col-12 mb-2 position-relative\">\r\n                <label for=\"cnfpassword\" aria-describedby=\"cnfpassword\">Confirm Password <span\r\n                    class=\"requiredfield\">*</span></label>\r\n                <div class=\"position-relative\">\r\n                  <input [maxlength]=\"16\" formControlName=\"conformpassword\" #confirmpassword type=\"password\"\r\n                    placeholder=\"Confirm New Password\" name=\"password\" id=\"confirmpassword\" tabindex=\"0\" required\r\n                    pInputText style=\"padding-right: 40px;\" />\r\n                  <em class=\"pi eye-icon\" appPasswordToggle [passwordField]=\"confirmpassword\" aria-hidden=\"true\"></em>\r\n                </div>\r\n                <div *ngIf=\"\r\n                    resetFormcontrols['conformpassword'].hasError('required') &&\r\n                    resetFormcontrols['conformpassword'].touched\r\n                  \" class=\"p-error block\">\r\n                </div>\r\n                <div class=\"p-error block\" *ngIf=\"\r\n                resetPasswordForm.get('conformpassword').errors && formSubmitted\">\r\n                  <small>Confirm Password is required</small>\r\n                </div>\r\n                <div class=\"p-error block\" *ngIf=\"\r\n                  resetPasswordForm.hasError('NoPassswordMatch') && formSubmitted && ! resetPasswordForm.get('conformpassword').errors\r\n                 \">\r\n                  <small>Password does not match</small>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12 mt-2 text-right\">\r\n              <p-button label=\"Cancel\" styleClass=\"px-3 py-1 btn bg-white text-primary btncancel\"\r\n                (click)=\"reset()\"></p-button>\r\n              <p-button label=\"Save\" styleClass=\"px-3 py-1 ml-2\" (click)=\"changePassword()\"></p-button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Tab End -->\r\n\r\n        <!-- Theme Customizer Tab -->\r\n        <div class=\"tab-pane fade\" id=\"theme_tab\" [class.active]=\"isThemeActive\" [class.show]=\"isThemeShown\" role=\"tabpanel\" aria-labelledby=\"v-theme-a\">\r\n          <div class=\"strip_head toggleleft mb-4\">\r\n            <span class=\"report_head font-weight-bold\">Theme Customizer</span>\r\n          </div>\r\n          <div class=\"customizer customizer-styling pt-3\">\r\n            <!-- Skin -->\r\n            <div class=\"customizer-styling-skin skin mb-4\">\r\n              <h6 class=\"font-weight-bold mb-2\">Skin</h6>\r\n              <div class=\"d-flex justify-content-start align-items-center\">\r\n                <div *ngFor=\"let theme of themes\" class=\"custom-control custom-radio mr-4\">\r\n                  <figure [ngClass]=\"selectedTheme === theme.key ? 'active' : ''\">\r\n                    <label role=\"link\" class=\"mb-0 theme-select\" for=\"theme_{{ theme.key }}\">\r\n                      <img src=\"{{ theme.image }}\" class=\"img-fluid\" alt=\"{{ theme.name }}\" />\r\n                    </label>\r\n                    <figcaption>\r\n                      <input type=\"radio\" id=\"theme_{{ theme.key }}\" name=\"{{ theme.name }}\"\r\n                        class=\"custom-control-input layout-name\" [value]=\"theme.key\" [(ngModel)]=\"selectedTheme\"\r\n                        [ngModelOptions]=\"{ standalone: true }\" (click)=\"setTheme(theme.key)\" />\r\n                      <label class=\"custom-control-label mt-2\" for=\"theme_{{ theme.key }}\">{{ theme.name }}</label>\r\n                    </figcaption>\r\n                  </figure>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"customizer-styling-skin d-none mb-3\">\r\n              <h6 class=\"font-weight-bold mb-2\">Font</h6>\r\n              <div class=\"d-flex justify-content-start align-items-center\">\r\n                <div *ngFor=\"let fontSet of fontSetList\" class=\"custom-control custom-radio mr-4\">\r\n                  <figure [ngClass]=\"selectedFont === fontSet.key ? 'active' : ''\">\r\n                    <label for=\"font_{{ fontSet.key }}\" class=\"font-box mb-0 theme-select\"> Aa </label>\r\n                    <figcaption>\r\n                      <input type=\"radio\" id=\"font_{{ fontSet.key }}\" name=\"{{ fontSet.name }}\"\r\n                        class=\"custom-control-input layout-name\" [value]=\"fontSet.key\" [(ngModel)]=\"selectedFont\"\r\n                        [ngModelOptions]=\"{ standalone: true }\" (click)=\"setFont(fontSet.key)\" />\r\n                      <label class=\"custom-control-label mt-2\" for=\"font_{{ fontSet.key }}\">{{ fontSet.name }}</label>\r\n                    </figcaption>\r\n                  </figure>\r\n                </div>\r\n              </div>\r\n            </div> -->\r\n\r\n            <div class=\"customizer-styling-skin mb-3\">\r\n              <h6 class=\"font-weight-bold mb-2\">Font Size (<span id=\"rs-bullet\" class=\"rs-label\">{{selectedFont}}</span>)</h6>\r\n              <div class=\"d-flex justify-content-start align-items-center col-lg-4 col-md-4 col-12 p-0\">\r\n                <div class=\"custom-control custom-radio w-100 mr-4\">\r\n                  <div class=\"range-slider\">\r\n                    <input id=\"rs-range-line\" class=\"rs-range\" type=\"range\" #ref value=\"{{selectedFont}}\" min=\"13\" max=\"20\"   [ngModelOptions]=\"{ standalone: true }\" [(ngModel)]=\"selectedFont\" (change)=\"setRangeFont(ref.value)\">\r\n                  </div>\r\n                  <div class=\"box-minmax\">\r\n                    <span>13</span><span>20</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <button class=\"pull-right mr-2 mb-2 btn btn-primary btncommon\" (click)=\"updateStyling()\">Save Changes</button>\r\n        </div>\r\n        \r\n        <!-- Tab End -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal\" id=\"Deleteuser\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Delete Profile Image</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Are you sure you want to delete the Profile Image?\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary btncommon delete\" data-dismiss=\"modal\" (click)=\"removeThumbnail()\">\r\n            Delete\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"UpdateUserTheme\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Update Theme</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Do you want to apply the changes?\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary btncommon delete\" data-dismiss=\"modal\" (click)=\"updateThemePopup()\">\r\n            Update\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\" (click)=\"cancleThemePopup()\">Cancel</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".profile .pic-upload{position:relative;display:inline-flex;flex-direction:column;align-items:center}.profile .pic-upload .action-btn{margin-bottom:0;width:25px;height:25px;margin-right:5px;line-height:normal;text-align:center;display:inline-block;vertical-align:middle;font-size:var(--font-24)}.profile .right-container p{color:var(--text-dark)}.profile .autosuggest{position:absolute;inset:24px 15px auto;transform:translate3d(0,38px,0);will-change:transform;min-width:10rem;padding:.5rem;margin:.125rem 0 0;font-size:1rem;color:var(--text-dark);text-align:left;list-style:none;background-color:var(--bg-light);background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem;z-index:9;max-height:200px;overflow:auto}.profile .autosuggest li{cursor:pointer;font-size:13px;line-height:35px;border-bottom:solid 1px var(--table-border)}.profile .autosuggest li:hover{color:var(--text-dark)}.profile .autosuggest li:last-child{border-bottom:none}.profile .nav-pills .nav-link{position:relative;color:#767676;background-color:transparent}.profile .nav-pills .nav-link.active{background-color:transparent;color:var(--primary);font-weight:600}.profile .nav-pills .nav-link.active :before{content:\"chevron_right\";font-family:Material Icons;position:absolute;right:0;left:auto}@media screen and (min-width: 1180px){.profile{height:calc(100vh - 100px)}}@media screen and (min-width: 768px){.profile .container-group{display:flex}.profile .container-group .left-container{border-right:1px solid var(--table-border);height:100%;width:280px}.profile .container-group .right-container{height:100%;width:calc(100% - 280px)}.profile .nav-pills .nav-link.active :before{display:block}}@media screen and (max-width: 767px){.container-group .left-container{width:100%}.container-group .left-container .nav-pills{border-bottom:1px solid var(--table-border)}.container-group .right-container{width:100%}.container-group .right-container .tab-pane .strip_head{text-align:center}.container-group .nav-pills .nav-link.active :before{display:none}}.customizer .custom-checkbox.custom-control,.customizer .custom-radio.custom-control{padding-left:0rem}.customizer .custom-checkbox.custom-control .theme-select,.customizer .custom-radio.custom-control .theme-select{border:2px solid #ddd;border-radius:7px}.customizer .custom-checkbox.custom-control .active .theme-select,.customizer .custom-radio.custom-control .active .theme-select{border-color:var(--primary)}.customizer .custom-checkbox .custom-control-input:checked~.custom-control-label:before,.customizer .custom-radio .custom-control-input:checked~.custom-control-label:before{content:\"\\f00c\";font-family:FontAwesome,sans-serif;color:var(--hover-text);background-color:var(--btn);border-color:var(--btn);font-size:10px;display:flex;align-items:center;padding:2px}.customizer .custom-checkbox label,.customizer .custom-radio label{cursor:pointer}.customizer .custom-checkbox .font-box,.customizer .custom-radio .font-box{display:flex;justify-content:center;align-items:center;width:150px;height:120px;color:var(--text-dark)}.customizer .custom-checkbox .custom-control-label,.customizer .custom-radio .custom-control-label{position:relative;vertical-align:middle;font-size:var(--base-font-size);line-height:normal;color:var(--text-dark);cursor:pointer;padding-left:25px}.customizer .custom-checkbox .custom-control-label:after,.customizer .custom-radio .custom-control-label:after{border-color:var(--btn)}.customizer .custom-checkbox .custom-control-label:before,.customizer .custom-checkbox .custom-control-label:after,.customizer .custom-radio .custom-control-label:before,.customizer .custom-radio .custom-control-label:after{background-image:none;width:16px;height:16px;left:0;box-shadow:none;top:0}.customizer hr{border-color:var(--table-border)}.customizer .customizer-header{background:var(--background-color);color:var(--text-dark)}.customizer .customizer-header .customizer-close{position:absolute;right:.6rem;top:.6rem;padding:7px;width:auto;z-index:10;color:var(--text-dark);cursor:pointer}.customizer .customizer-header .customizer-close .material-icon{font-size:1.5rem}.customizer .customizer-header .customizer-close:hover{color:var(--btn)}.customizer h4{font-size:var(--font-15);font-weight:600;color:var(--text-dark)}.customizer h6{font-size:var(--font-14);color:var(--text-dark)}.customizer p{font-size:var(--base-font-size);font-weight:400;color:var(--text-dark)}.customizer .customizer-toggle{background:var(--btn);color:var(--hover-text);box-shadow:-3px 0 8px #22292f1a;border-top-left-radius:6px;border-bottom-left-radius:6px;position:absolute;top:50%;width:38px;height:38px;left:-39px;text-align:center;line-height:40px;border-left:1px solid var(--checkbox-border);cursor:pointer}.customizer .customizer-toggle .fa-cog{font-size:var(--font-15)}.customizer .customizer-toggle:hover{text-decoration:none}.customizer .customizer-styling-skin.skin .custom-control .custom-control-label{position:relative;padding-left:25px}.customizer .custom-control:first-child .font-box{font-size:var(--font-21);font-weight:400}.customizer .custom-control:last-child .font-box{font-size:var(--font-26);font-weight:600}.box-minmax{margin-top:15px;width:100%;display:flex;justify-content:space-between;font-size:14px;color:var(--label-text)}.box-minmax span:first-child{margin-left:4px}.rs-range{margin-top:29px;width:100%;appearance:none;-webkit-appearance:none}.rs-range:focus{outline:none;border:none!important}.rs-range::-webkit-slider-runnable-track{width:100%;height:1px;cursor:pointer;box-shadow:none;background:var(--text-dark);border-radius:0;border:0px solid #010101}.rs-range::-moz-range-track{width:100%;height:1px;cursor:pointer;box-shadow:none;background:var(--btn);border-radius:0;border:0px solid #010101}.rs-range::-webkit-slider-thumb{box-shadow:none;border:0px solid var(--table-border);box-shadow:0 10px 10px #00000040;height:30px;width:20px;border-radius:22px;background:var(--btn);cursor:pointer;appearance:none;-webkit-appearance:none;margin-top:-15px}.rs-range::-moz-range-thumb{box-shadow:none;border:0px solid var(--table-border);box-shadow:0 10px 10px #00000040;height:42px;width:22px;border-radius:22px;background:var(--btn);cursor:pointer;appearance:none;-webkit-appearance:none;margin-top:-20px}.rs-range::-moz-focus-outer{border:0}.rs-label{text-align:center;font-weight:700;color:var(--label-text);line-height:normal;font-size:14px}.rs-label:after{content:\"px\";font-size:14px;letter-spacing:.07em}.pi.eye-icon{position:absolute;right:20px;top:50%;margin-top:-7.5px;cursor:pointer;font-size:15px}input[type=password]::-ms-reveal,input[type=password]::-ms-clear{display:none}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: AuthService }, { type: i2.FormBuilder }, { type: ProfileService }, { type: AttachmentsService }, { type: DataStoreService }, { type: i6.ConfirmationService }, { type: ProfileUpdateService }, { type: i1.Router }, { type: NavigationAlertService }]; }, propDecorators: { passwordSuccess: [{
                type: Output
            }] } });

class ProfileComponent {
    permissionStore;
    _storeservice;
    RBACORG = new RBACINFO();
    PERMISSION;
    profileEvent;
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
            this._storeservice.setData('HTTPSERVICE', val.httpService);
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileComponent, deps: [{ token: PermissionStore }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ProfileComponent, selector: "profile", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", profileEvent: "profileEvent" }, ngImport: i0, template: `
    <core-profile></core-profile>
  `, isInline: true, dependencies: [{ kind: "component", type: ProfileComponent$1, selector: "core-profile", outputs: ["passwordSuccess"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileComponent, decorators: [{
            type: Component,
            args: [{ selector: 'profile', template: `
    <core-profile></core-profile>
  ` }]
        }], ctorParameters: function () { return [{ type: PermissionStore }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], profileEvent: [{
                type: Input
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
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileSettingsModule, providers: [ProfileService, ProfileUpdateService, AttachmentsService, HttpClient, AlertService, AuthService, ConfirmationService, PermissionStore, DataStoreService, NavigationAlertService], imports: [PicsProfileModule] });
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
                    providers: [ProfileService, ProfileUpdateService, AttachmentsService, HttpClient, AlertService, AuthService, ConfirmationService, PermissionStore, DataStoreService, NavigationAlertService]
                }]
        }] });

/*
 * Public API Surface of profile
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ProfileComponent, ProfileService, ProfileSettingsModule, ProfileUpdateService };
//# sourceMappingURL=pics-core-profile.mjs.map
