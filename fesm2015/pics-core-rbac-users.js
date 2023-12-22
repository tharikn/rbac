import * as i0 from '@angular/core';
import { Injectable, Component, Directive, Input, NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import * as i13 from '@angular/common';
import { DatePipe, CommonModule } from '@angular/common';
import * as i2 from '@angular/forms';
import { Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@angular/router';
import { NavigationStart } from '@angular/router';
import 'rxjs/add/operator/map';
import * as i6 from 'primeng/card';
import { CardModule } from 'primeng/card';
import * as i7 from 'primeng/calendar';
import { CalendarModule } from 'primeng/calendar';
import * as i8 from 'primeng/dropdown';
import { DropdownModule } from 'primeng/dropdown';
import * as i9 from 'primeng/multiselect';
import { MultiSelectModule } from 'primeng/multiselect';
import * as i10 from 'primeng/checkbox';
import { CheckboxModule } from 'primeng/checkbox';
import * as i12 from 'primeng/inputtext';
import { InputTextModule } from 'primeng/inputtext';
import * as i14 from 'primeng/tooltip';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KnobModule } from 'primeng/knob';
import { MessageModule } from 'primeng/message';
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
import { HttpClient } from '@angular/common/http';
import { ConfirmationService } from 'primeng/api';

class RbacUsersService {
    constructor() { }
}
RbacUsersService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacUsersService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
RbacUsersService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacUsersService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacUsersService, decorators: [{
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
        saveUserConfig: '/org/user/saveUserPreference'
    },
    Provider: {
        getProviderList: '/ref/provider',
        searchProviderList: '/ref/provider/search',
        addProviderUser: '/ref/provider/create/account'
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
class PolicyGroupConfig {
}
PolicyGroupConfig.EndPoint = {
    policyGroup: {
        getOrgPolicyGroups: '/platform/page-designer/policyGroup/organization/{organizationid}'
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
AppConstants.regexEmail = '^[0-9a-zA-Z.-_+-]+[@][0-9a-zA-Z.-_+]+[.][0-9a-zA-Z]{2,}$';

class UserOrgService {
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
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
        return this.httpService.post(AttachmentConfig.EndPoint.Attachments.UploadKey, objparams);
    }
    getOrgPolicyGroupList(orgid) {
        return this.httpService.get(PolicyGroupConfig.EndPoint.policyGroup.getOrgPolicyGroups.replace('{organizationid}', String(orgid)));
    }
    getAllUserRole(id) {
        return this.httpService.get(RoleConfig.EndPoint.role.getAllOrgRole.replace('{orgid}', String(id)));
    }
    getRoleById(roleid) {
        return this.httpService.get(`${RoleConfig.EndPoint.role.getAllUserRole}/${roleid}`);
    }
}
UserOrgService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserOrgService, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
UserOrgService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserOrgService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserOrgService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

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
AlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AlertComponent, selector: "app-alert", ngImport: i0, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], directives: [{ type: i13.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{
                    // moduleId: module.id,
                    selector: 'app-alert',
                    templateUrl: 'alert.component.html',
                    styleUrls: ['./alert.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: AlertService }]; } });

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

class UsersComponent {
    constructor(userService, fb, alertService, _storeservice) {
        this.userService = userService;
        this.fb = fb;
        this.alertService = alertService;
        this._storeservice = _storeservice;
        this.RBACORG = new RBACINFO();
        this.userList = [];
        this.providerList = [];
        this.filteredUserList = [];
        this.selectedRoles = [];
        this.selectedTeams = [];
        this.userSearch$ = new Subject();
        this.currentDate = new Date();
        this.formSubmit = false;
        this.providerAccount = false;
        this.checked = true;
        this.sendCredentials = true;
        this.imageInformation = '';
        this.initializeForm();
    }
    ngOnInit() {
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
        if (this.RBACORG['orgID']) {
            this.orgId = parseInt(this.RBACORG['orgID']);
            if (this.orgId) {
                this.getUserList();
                this.getRolesList();
                this.getPolicyGroupList();
            }
        }
    }
    initializeForm() {
        this.userForm = this.fb.group({
            firstname: ['', Validators.required],
            middlename: [''],
            lastname: ['', Validators.required],
            username: [''],
            dob: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern(AppConstants.regexEmail)]],
            userroles: ['', Validators.required],
            userteams: [''],
            userpolicygroups: [''],
            organizationid: [''],
            emailtocurrentuser: false,
            isenabled: [true],
            providerId: [''],
            providerAccount: false,
            thumbnail: [''],
            islocked: [false]
        });
    }
    get formValidate() {
        return this.userForm.controls;
    }
    getUserList(_key) {
        this.userService.getAllUserOrgList(this.orgId).subscribe((res) => {
            this.filteredUserList = [];
            this.userList = res.data;
            this.filteredUserList = this.userList;
        }, (_error) => this.alertService.error(AppConstants.errorMessage));
    }
    getRolesList() {
        this.userService.getAllUserRole(this.orgId).subscribe((res) => {
            this.userRoles = res['data'];
        }, (_error) => this.alertService.error(AppConstants.errorMessage));
    }
    getPolicyGroupList(_managementGroupId) {
        this.userService.getOrgPolicyGroupList(this.orgId).subscribe((res) => {
            this.policyGroupList = res['data'];
        }, (err) => console.log(err));
    }
    addUser() {
        const userData = this.userForm.getRawValue();
        delete userData.thumbnail;
        this.formSubmit = true;
        if (this.userForm.valid) {
            userData.organizationid = this.orgId;
            userData.id = 1;
            userData.username = userData.email;
            userData.userteams = userData.userteams || [];
            userData.userroles = [userData.userroles] || [];
            userData.userpolicygroups = userData.userpolicygroups || [];
            userData.emailtocurrentuser = userData.emailtocurrentuser || false;
            userData.dob = new DatePipe('en-US').transform(userData.dob, 'YYYY-MM-dd');
            if (!this.userid) {
                this.userWithOutId(userData);
            }
            else {
                this.userWithID(userData);
            }
        }
    }
    userWithOutId(userData) {
        this.userService.saveUser(userData).subscribe((res) => {
            if (this.providerAccount && this.userForm.controls['providerId'].valid) {
                this.addProviderUser(userData.providerId, res['data']);
            }
            this.cancel();
            this.getUserList();
            this.alertService.success('User created successfully');
        }, (error) => {
            if (error.error.message) {
                this.alertService.error(error.error.message);
            }
            else {
                this.alertService.error('Failed to create user');
            }
        });
    }
    userWithID(userData) {
        if (this.uploadedFile) {
            userData.additionalinfo = {
                photo: this.imageData,
                thumbnail: this.imageData
            };
        }
        this.userService.updateUser(userData, this.userid).subscribe(() => {
            this.cancel();
            this.getUserList();
            this.alertService.success('User updated successfully');
        }, (err) => {
            if (err.error.message) {
                this.alertService.error(err.error.message);
            }
            else {
                this.alertService.error('Failed to create user');
            }
        });
    }
    mapUserToRole(userId, roleId) {
        const request = {
            userId: userId,
            roleId: roleId
        };
        this.userService.addUserRole(request).subscribe(() => console.log('User mapped to role Successfully'));
    }
    cancel() {
        if (!this.userid) {
            this.userForm.reset();
            this.userForm.patchValue({
                isenabled: true,
                islocked: false
            });
        }
        this.providerAccount = false;
        this.formSubmit = false;
        this.userForm.controls['email'].enable();
        this.userForm.controls['username'].enable();
    }
    searchUser(event) {
        const value = event.target.value.toLowerCase();
        this.filteredUserList = this.userList.filter(a => { var _a; return (_a = a === null || a === void 0 ? void 0 : a.firstname) === null || _a === void 0 ? void 0 : _a.toLowerCase().startsWith(value); });
    }
    getUserInfo(user) {
        this.sendCredentials = false;
        this.userid = user.id;
        this.userService.getAllUserList(this.userid).subscribe((res) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            this.imageInformation = ((_c = (_b = (_a = res.data.additionalinfo) === null || _a === void 0 ? void 0 : _a.thumbnail) === null || _b === void 0 ? void 0 : _b.fileName) === null || _c === void 0 ? void 0 : _c.split('/')[2]) || '';
            this.userForm.patchValue({
                firstname: res.data.firstname,
                middlename: res.data.middlename,
                lastname: res.data.lastname,
                username: res.data.username,
                dob: new Date(res.data.dob),
                email: res.data.email,
                organizationid: res.data.organizationid,
                thumbnail: ((_e = (_d = res.data.additionalinfo) === null || _d === void 0 ? void 0 : _d.thumbnail) === null || _e === void 0 ? void 0 : _e.url) || '',
                isenabled: (_f = res === null || res === void 0 ? void 0 : res.data) === null || _f === void 0 ? void 0 : _f.isenabled,
                islocked: (_g = res === null || res === void 0 ? void 0 : res.data) === null || _g === void 0 ? void 0 : _g.islocked,
                userroles: ((_j = (_h = res === null || res === void 0 ? void 0 : res.data) === null || _h === void 0 ? void 0 : _h.userroles[0]) === null || _j === void 0 ? void 0 : _j.id) || 0,
                userteams: res.data.userteams
                    ? res.data.userteams
                        .filter((item) => item)
                        .map((item) => {
                        return item['id'];
                    })
                    : [],
                userpolicygroups: res.data.policygroups
                    ? res.data.policygroups
                        .filter((item) => item)
                        .map((item) => {
                        return item['id'];
                    })
                    : []
            });
            this.userForm.controls['email'].disable();
            this.userForm.controls['username'].disable();
            // });
        });
    }
    getRolePolicyGroups(roleId) {
        this.userService.getRoleById(roleId).subscribe((res) => {
            if (res) {
                this.userForm.patchValue({
                    userpolicygroups: res['data'].policyGroups
                        .filter((item) => item)
                        .map((item) => {
                        return item['id'];
                    }) || []
                });
            }
        }, (_err) => this.alertService.error('Failed to Fetch Policy Groups'));
    }
    delete(event, id) {
        event.stopPropagation();
        this.deletedId = id;
        $('#Deleteuser').modal('show');
    }
    deleteUser() {
        this.userService.deleteUser(this.deletedId).subscribe(() => {
            this.cancel();
            this.alertService.success('User deleted successfully');
            $('#Deleteuser').modal('hide');
            this.getUserList();
        }, (_err) => this.alertService.error('Failed to delete User'));
    }
    cancelUser() {
        this.sendCredentials = true;
        this.userForm.reset();
        this.userForm.patchValue({
            isenabled: true,
            islocked: false
        });
        this.userForm.controls['email'].enable();
        this.userForm.controls['username'].enable();
        this.userid = '';
    }
    activateUser() {
        const userData = this.userForm.getRawValue();
        const body = {
            email: userData.email,
            code: userData.otp
        };
        this.userService.activateUser(body).subscribe((_res) => {
            this.alertService.success('User Activated Successfully');
        }, (_err) => {
            this.alertService.error('User Activation Failed');
        });
    }
    selectProvider(selected) {
        this.providerAccount = selected;
    }
    addProviderUser(providerId, userid) {
        const data = {
            providerId: providerId,
            accountId: userid.toString()
        };
        this.userService.addProviderUser(data).subscribe(() => {
            console.log('Provider User added Successfully');
        }, (_err) => console.log('failed to add Provider user'));
    }
    handleFileInput(fileValue) {
        const target = fileValue.target;
        const file = target.files[0];
        this.uploadedFile = fileValue.target.files[0].name;
        this.imageData = {
            contentType: fileValue.target.files[0].type,
            fileName: `user-profileimage/${this.userid}/${this.uploadedFile}`
        };
        this.imageInformation = this.uploadedFile;
        if (this.validateImage(fileValue.target.files)) {
            this.userService.uploadKey(this.imageData).subscribe((res) => {
                this.urlPath = res.data;
                const uploadAttachment = document.getElementById('file');
                const uploadAttachmentDetails = uploadAttachment.files[0];
                this.httpService.putUpload(this.urlPath, uploadAttachmentDetails, uploadAttachmentDetails.type).subscribe((_resp) => {
                    this.alertService.success('Uploaded Successfully!');
                    const reader = new FileReader();
                    reader.onload = () => {
                        this.userForm.patchValue({ thumbnail: reader.result });
                    };
                    reader.readAsDataURL(file);
                    this.attachType = fileValue.target.files[0].type;
                }, (error) => {
                    if (error.status == 0) {
                        this.alertService.error(AppConstants.errorMessage);
                        this.uploadedFile = '';
                        this.urlPath = '';
                    }
                });
            }, (_error) => {
                this.alertService.error(AppConstants.errorMessage);
            });
        }
    }
    removeThumbnail() {
        this.userForm.controls['thumbnail'].reset();
        this.imageInformation = '';
        this.imageData = '';
    }
    validateImage(file) {
        const fileSize = Number(file[0].size) / 1024;
        const filetype = file[0].type.replace('image/', '');
        if (filetype === 'jpg' || filetype === 'jpeg' || filetype === 'png' || filetype === 'gif') {
            if (fileSize < 100) {
                return true;
            }
            else {
                this.imageInformation = 'Image size exceeds 100 KB';
                this.alertService.warn('File is bigger than 100 KB');
                return false;
            }
        }
        else {
            this.imageInformation = '';
            this.alertService.warn(`${filetype} format is not supported`);
            return false;
        }
    }
    stopPropagation(event) {
        event.stopPropagation();
    }
}
UsersComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsersComponent, deps: [{ token: UserOrgService }, { token: i2.FormBuilder }, { token: AlertService }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
UsersComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: UsersComponent, selector: "users", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION" }, ngImport: i0, template: "<app-alert></app-alert>\r\n<div class=\"permission\">\r\n  <div class=\"row\" [formGroup]=\"userForm\">\r\n    <div class=\"col-lg-4 col-md-6 col-12\">\r\n      <div class=\"clearfix\"></div>\r\n      <div class=\"tab-content py-2 px-0 px-sm-0\">\r\n        <div class=\"tab-pane fade show active\">\r\n          <div class=\"form-group bgiconsearch\">\r\n            <input\r\n              class=\"form-control\"\r\n              fieldKey=\"SETTINGS_USR_SEARCH_BY_NAME\"\r\n              placeholder=\"Search by User name\"\r\n              type=\"text\"\r\n              (keyup)=\"searchUser($event)\"\r\n              pInputText />\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <div class=\"useracess\">\r\n            <div\r\n              class=\"d-flex align-items-center justify-content-center h-100 w-100 ng-star-inserted\"\r\n              *ngIf=\"!filteredUserList.length\">\r\n              <p>No Record Found</p>\r\n            </div>\r\n            <ng-container *ngFor=\"let item of filteredUserList\">\r\n              <div class=\"row userdata align-items-center\" (click)=\"getUserInfo(item)\">\r\n                <div class=\"col-lg-2 col-md-3 col-2\">\r\n                  <img\r\n                    *ngIf=\"!item?.additionalinfo?.thumbnail?.url\"\r\n                    src=\"assets/images/user-empty.png\"\r\n                    alt=\"user\"\r\n                    class=\"userempty\" />\r\n                  <img\r\n                    *ngIf=\"item?.additionalinfo?.thumbnail?.url\"\r\n                    [src]=\"item?.additionalinfo?.thumbnail?.url\"\r\n                    alt=\"user\"\r\n                    class=\"userempty\" />\r\n                </div>\r\n                <div class=\"col-lg-8 col-md-7 col-8 overflow_txt pl-md-0\">\r\n                  <span class=\"nameuser\">{{ item.firstname + ' ' + item.lastname }}</span>\r\n                  <br />\r\n                  <span class=\"emailuser\">{{ item.email }}</span> <br />\r\n                </div>\r\n                <div class=\"col-md-2 col-2 text-right\">\r\n                  <span class=\"right-icons\" *ngIf=\"item?.islocked\">\r\n                    <em class=\"fa fa-lock mr-2 text-muted\" aria-hidden=\"true\" (click)=\"stopPropagation($event)\"></em>\r\n                  </span>\r\n                  <span class=\"right-icons\">\r\n                    <em\r\n                      class=\"fa fa-trash text-primary\"\r\n                      (click)=\"delete($event, item.id)\"\r\n                      aria-hidden=\"true\"\r\n                      *showField=\"'SETTINGS_USR_DELETE_USER'\"></em>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-8 col-md-6 col-12 user-right setting-tab mt-2\">\r\n      <p-card class=\"rbac-card h-100\" [style]=\"{ width: '100%' }\">\r\n        <div class=\"strip_head toggleleft\">\r\n          <span class=\"report_head font-weight-bold\">Personal Details</span>\r\n        </div>\r\n        <div class=\"p-fluid p-formgrid row\">\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"fname\" class=\"referral-form-labels\"\r\n              >First Name\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input\r\n              id=\"fname\"\r\n              type=\"text\"\r\n              placeholder=\"Enter First Name\"\r\n              formControlName=\"firstname\"\r\n              fieldKey=\"SETTINGS_USR_FIRST_NAME\"\r\n              aria-describedby=\"fname\"\r\n              pInputText />\r\n            <div *ngIf=\"formValidate['firstname'].errors && formSubmit\">\r\n              <small *ngIf=\"formValidate['firstname'].invalid\" class=\"p-error block\">First Name is required </small>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"mname\" class=\"referral-form-labels\">Middle Name </label>\r\n            <input\r\n              id=\"mname\"\r\n              type=\"text\"\r\n              placeholder=\"Enter Middle Name\"\r\n              formControlName=\"middlename\"\r\n              fieldKey=\"SETTINGS_USR_MIDDLE_NAME\"\r\n              aria-describedby=\"mname\"\r\n              pInputText />\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"lName\" class=\"referral-form-labels\"\r\n              >Last Name\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input\r\n              id=\"lName\"\r\n              type=\"text\"\r\n              formControlName=\"lastname\"\r\n              placeholder=\"Enter Last Name\"\r\n              fieldKey=\"SETTINGS_USR_LAST_NAME\"\r\n              pInputText\r\n              aria-describedby=\"lName\" />\r\n            <div *ngIf=\"formValidate['lastname'].errors && formSubmit\">\r\n              <small *ngIf=\"formValidate['lastname'].invalid\" class=\"p-error block\">Last Name is required </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"p-fluid p-formgrid row\">\r\n          <!-- <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"userName\" class=\"referral-form-labels\"\r\n              >User Name\r\n            </label>\r\n            <input\r\n              id=\"userName\"\r\n              type=\"text\"\r\n              formControlName=\"username\"\r\n              placeholder=\"Enter User Name\"\r\n              aria-describedby=\"userName\"\r\n              fieldKey=\"SETTINGS_USR_USERNAME\"\r\n              pInputText />\r\n            <div *ngIf=\"formValidate['username'].errors && formSubmit\">\r\n              <small *ngIf=\"formValidate['username'].invalid\" class=\"p-error block\">User Name is required </small>\r\n            </div>\r\n          </div> -->\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"dateformat\" class=\"referral-form-labels\"\r\n              >DOB\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <p-calendar\r\n              formControlName=\"dob\"\r\n              placeholder=\"Select Date Of Birth\"\r\n              dateFormat=\"yy-mm-dd\"\r\n              [maxDate]=\"currentDate\"\r\n              fieldKey=\"SETTINGS_USR_DOB\"\r\n              inputId=\"dateformat\"></p-calendar>\r\n            <div *ngIf=\"formValidate['dob'].errors && formSubmit\">\r\n              <small *ngIf=\"formValidate['dob'].invalid\" class=\"p-error block\">DOB is required </small>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"usersEmailid\" class=\"referral-form-labels\"\r\n              >Email\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input\r\n              id=\"usersEmailid\"\r\n              fieldKey=\"SETTINGS_USR_EMAIL\"\r\n              formControlName=\"email\"\r\n              placeholder=\"Enter Email\"\r\n              type=\"text\"\r\n              pInputText />\r\n            <div *ngIf=\"formValidate['email'].errors && formSubmit\">\r\n              <small *ngIf=\"formValidate['email'].invalid\" class=\"p-error block\">Email is required </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"p-fluid p-formgrid row\">\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label aria-labelledby=\"role\" for=\"role\" class=\"referral-form-labels\"\r\n              >Role\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <p-dropdown\r\n              inputId=\"role\"\r\n              [options]=\"userRoles\"\r\n              placeholder=\"Select a Role\"\r\n              formControlName=\"userroles\"\r\n              styleClass=\"w-100\"\r\n              optionLabel=\"name\"\r\n              optionValue=\"id\"\r\n              ariaFilterLabel=\"null\"\r\n              fieldKey=\"SETTINGS_USR_ROLE\"\r\n              (onChange)=\"getRolePolicyGroups($event.value)\">\r\n            </p-dropdown>\r\n            <div *ngIf=\"formValidate['userroles'].errors && formSubmit\">\r\n              <small *ngIf=\"formValidate['userroles'].invalid\" class=\"p-error block\">Roles is required </small>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"pGroup\" class=\"referral-form-labels\">Policy Group </label>\r\n            <p-multiSelect\r\n              [options]=\"policyGroupList\"\r\n              formControlName=\"userpolicygroups\"\r\n              defaultLabel=\"Select a Policy Group\"\r\n              optionLabel=\"policygroupname\"\r\n              optionValue=\"id\"\r\n              inputId=\"pGroup\"\r\n              ariaFilterLabel=\"null\"\r\n              fieldKey=\"SETTINGS_USR_POLICY_GROUP\"\r\n              display=\"chip\">\r\n            </p-multiSelect>\r\n          </div>\r\n        </div>\r\n        <div class=\"p-fluid p-formgrid row\">\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12 mb-1\" *ngIf=\"!sendCredentials\">\r\n            <label for=\"file\" class=\"btn btn-primary mt-2 mb-2 profile\">\r\n              <img style=\"width: 25px\" src=\"assets/images/upload.png\" alt=\"upload\" />&nbsp;&nbsp;Add Image</label\r\n            >\r\n            <input\r\n              type=\"file\"\r\n              (change)=\"handleFileInput($event)\"\r\n              id=\"file\"\r\n              aria-hidden=\"true\"\r\n              style=\"visibility: hidden; display: none\" />&nbsp;&nbsp;\r\n            <img\r\n              *ngIf=\"userForm.controls['thumbnail'].value\"\r\n              [src]=\"userForm.controls['thumbnail'].value\"\r\n              alt=\"user\"\r\n              class=\"userempty\" />\r\n            <label\r\n              class=\"warning\"\r\n              [ngStyle]=\"{\r\n                color: imageInformation === 'Image size exceeds 100 KB' ? '#fc0303' : '#007cc3'\r\n              }\"\r\n              >{{ imageInformation }}</label\r\n            >&nbsp;&nbsp;<em\r\n              class=\"pi pi-trash\"\r\n              pTooltip=\"Remove Image\"\r\n              *ngIf=\"imageInformation && imageInformation !== 'Image size exceeds 100 KB'\"\r\n              (click)=\"removeThumbnail()\"></em>\r\n          </div>\r\n        </div>\r\n        <div class=\"p-fluid p-formgrid row\">\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <div class=\"p-field-checkbox send-credentials\" *ngIf=\"sendCredentials\">\r\n              <p-checkbox\r\n                class=\"p-m-1 p-m-lg-2\"\r\n                inputId=\"binary\"\r\n                [binary]=\"true\"\r\n                fieldKey=\"SETTINGS_USR_EMAIL_TO_CURRENT_USER\"\r\n                formControlName=\"emailtocurrentuser\">\r\n              </p-checkbox>\r\n              <label for=\"binary\">Send Credentials to Current Logged in User</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"p-fluid p-formgrid row\">\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <div class=\"p-field-checkbox send-credentials\" *ngIf=\"!sendCredentials\">\r\n              <p-checkbox class=\"p-m-1 p-m-lg-2\" inputId=\"isenabled\" [binary]=\"true\" formControlName=\"isenabled\">\r\n              </p-checkbox>\r\n              <label for=\"isenabled\">Active</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <div class=\"p-field-checkbox send-credentials\" *ngIf=\"!sendCredentials\">\r\n              <p-checkbox class=\"p-m-1 p-m-lg-2\" inputId=\"islocked\" [binary]=\"true\" formControlName=\"islocked\">\r\n              </p-checkbox>\r\n              <label for=\"islocked\">Locked</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"p-fluid p-formgrid row\">\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\"></div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\"></div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12 mb-0\">\r\n            <button\r\n              fieldKey=\"SETTINGS_USR_ADD_UPDATE\"\r\n              class=\"pull-right mr-2 mb-2 btn btn-primary btncommon\"\r\n              (click)=\"addUser()\">\r\n              {{ userid ? 'Update User' : 'Add User' }}\r\n            </button>\r\n            <button\r\n              fieldKey=\"SETTINGS_USR_CANCEL\"\r\n              class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\"\r\n              (click)=\"cancelUser()\">\r\n              Cancel\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal\" id=\"Deleteuser\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Delete User</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Are you sure want to Delete User?\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary btncommon delete\" data-dismiss=\"modal\" (click)=\"deleteUser()\">\r\n            Delete\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".head-div{padding-top:9px;padding-left:7px}.bgiconsearch{margin-bottom:5px;padding-bottom:0;font-size:13px}.useracess{border-radius:2px;padding:5px 0;overflow-y:auto}.pi-trash{color:red;font-size:12px}.userempty{max-width:none;border-radius:50%;height:35px;width:35px}.row.userdata{margin:0;border-bottom:solid 1px var(--table-border);padding:5px 0;cursor:pointer}.overflow_txt{overflow:hidden;text-overflow:ellipsis}span.nameuser{font-size:var(--font-13);color:var(--label-text);font-weight:600}.userid,span.emailuser{font-size:var(--font-13);color:#767676}.activate{position:absolute;margin-top:-46px;margin-left:44rem}.toggleleft{font-size:14px;font-weight:600;display:block;margin-top:-12px;padding-bottom:13px}.report_button{margin-left:12px}.rbac-card .profile{color:#fff}.rbac-card .warning{margin-left:10px}.right-icons .fa{margin-top:3px;display:inline-block;z-index:9}.right-icons .fa-lock{font-size:19px}.right-icons .fa-trash{font-size:18px}@media screen and (max-width: 767px){.useracess{max-height:400px}}@media screen and (min-width: 768px){.useracess{height:calc(100vh - 188px)}}@media screen and (min-width: 990px) and (max-width: 1024px){.useracess .userempty{height:100%;width:100%}}\n"], components: [{ type: AlertComponent, selector: "app-alert" }, { type: i6.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { type: i7.Calendar, selector: "p-calendar", inputs: ["style", "styleClass", "inputStyle", "inputId", "name", "inputStyleClass", "placeholder", "ariaLabelledBy", "iconAriaLabel", "disabled", "dateFormat", "multipleSeparator", "rangeSeparator", "inline", "showOtherMonths", "selectOtherMonths", "showIcon", "icon", "appendTo", "readonlyInput", "shortYearCutoff", "monthNavigator", "yearNavigator", "hourFormat", "timeOnly", "stepHour", "stepMinute", "stepSecond", "showSeconds", "required", "showOnFocus", "showWeek", "showClear", "dataType", "selectionMode", "maxDateCount", "showButtonBar", "todayButtonStyleClass", "clearButtonStyleClass", "autoZIndex", "baseZIndex", "panelStyleClass", "panelStyle", "keepInvalid", "hideOnDateTimeSelect", "touchUI", "timeSeparator", "focusTrap", "showTransitionOptions", "hideTransitionOptions", "tabindex", "view", "defaultDate", "minDate", "maxDate", "disabledDates", "disabledDays", "yearRange", "showTime", "responsiveOptions", "numberOfMonths", "firstDayOfWeek", "locale"], outputs: ["onFocus", "onBlur", "onClose", "onSelect", "onClear", "onInput", "onTodayClick", "onClearClick", "onMonthChange", "onYearChange", "onClickOutside", "onShow"] }, { type: i8.Dropdown, selector: "p-dropdown", inputs: ["scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "selectId", "dataKey", "filterBy", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "virtualScroll", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "disabled", "options", "filterValue"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear"] }, { type: i9.MultiSelect, selector: "p-multiSelect", inputs: ["style", "styleClass", "panelStyle", "panelStyleClass", "inputId", "disabled", "readonly", "group", "filter", "filterPlaceHolder", "filterLocale", "overlayVisible", "tabindex", "appendTo", "dataKey", "name", "label", "ariaLabelledBy", "displaySelectedLabel", "maxSelectedLabels", "selectionLimit", "selectedItemsLabel", "showToggleAll", "emptyFilterMessage", "emptyMessage", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "showHeader", "autoZIndex", "baseZIndex", "filterBy", "virtualScroll", "itemSize", "showTransitionOptions", "hideTransitionOptions", "ariaFilterLabel", "filterMatchMode", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "display", "autocomplete", "showClear", "scrollHeight", "defaultLabel", "placeholder", "options", "filterValue"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onClear", "onPanelShow", "onPanelHide"] }, { type: i10.Checkbox, selector: "p-checkbox", inputs: ["value", "name", "disabled", "binary", "label", "ariaLabelledBy", "ariaLabel", "tabindex", "inputId", "style", "styleClass", "labelStyleClass", "formControl", "checkboxIcon", "readonly", "required", "trueValue", "falseValue"], outputs: ["onChange"] }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }, { type: i12.InputText, selector: "[pInputText]" }, { type: i13.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i13.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i13.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i14.Tooltip, selector: "[pTooltip]", inputs: ["tooltipPosition", "tooltipEvent", "appendTo", "positionStyle", "tooltipStyleClass", "tooltipZIndex", "escape", "showDelay", "hideDelay", "life", "positionTop", "positionLeft", "pTooltip", "tooltipDisabled", "tooltipOptions"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsersComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'users',
                    templateUrl: './users.component.html',
                    styleUrls: ['./users.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: UserOrgService }, { type: i2.FormBuilder }, { type: AlertService }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }] } });

class RbacUsersComponent {
    constructor(permissionStore, _storeservice) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
        this.RBACORG = new RBACINFO();
    }
    ngOnInit() {
        this.COMMONSERVICE.subscribe((val) => {
            if (val) {
                this._storeservice.setData('HTTPSERVICE', val.httpService);
            }
        });
        this._storeservice.setData('RBACORG', this.RBACORG);
        this.permissionStore.setStore(this.PERMISSION);
    }
}
RbacUsersComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacUsersComponent, deps: [{ token: PermissionStore }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
RbacUsersComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: RbacUsersComponent, selector: "rbac-users", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", COMMONSERVICE: "COMMONSERVICE" }, ngImport: i0, template: `
    <users [RBACORG]="RBACORG" [PERMISSION]="PERMISSION"></users>
  `, isInline: true, components: [{ type: UsersComponent, selector: "users", inputs: ["RBACORG", "PERMISSION"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacUsersComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'rbac-users',
                    template: `
    <users [RBACORG]="RBACORG" [PERMISSION]="PERMISSION"></users>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: PermissionStore }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], COMMONSERVICE: [{
                type: Input
            }] } });

class DirectivesModule {
}
DirectivesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DirectivesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DirectivesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DirectivesModule, declarations: [PermissionDirective], imports: [CommonModule], exports: [PermissionDirective] });
DirectivesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DirectivesModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DirectivesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [PermissionDirective],
                    imports: [CommonModule],
                    exports: [PermissionDirective]
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

class PicsRbacUsersModule {
}
PicsRbacUsersModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsRbacUsersModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PicsRbacUsersModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsRbacUsersModule, declarations: [UsersComponent], imports: [CommonModule,
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
        AlertModule], exports: [UsersComponent] });
PicsRbacUsersModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsRbacUsersModule, imports: [[
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsRbacUsersModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        UsersComponent
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
                        UsersComponent
                    ],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
                }]
        }] });

class RbacUsersModule {
}
RbacUsersModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacUsersModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RbacUsersModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacUsersModule, declarations: [RbacUsersComponent], imports: [PicsRbacUsersModule], exports: [RbacUsersComponent] });
RbacUsersModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacUsersModule, providers: [UserOrgService, HttpClient, AlertService, ConfirmationService, PermissionStore, DataStoreService], imports: [[
            PicsRbacUsersModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacUsersModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        RbacUsersComponent
                    ],
                    imports: [
                        PicsRbacUsersModule
                    ],
                    exports: [
                        RbacUsersComponent
                    ],
                    providers: [UserOrgService, HttpClient, AlertService, ConfirmationService, PermissionStore, DataStoreService]
                }]
        }] });

/*
 * Public API Surface of rbac-users
 */

/**
 * Generated bundle index. Do not edit.
 */

export { RbacUsersComponent, RbacUsersModule, RbacUsersService };
//# sourceMappingURL=pics-core-rbac-users.js.map
