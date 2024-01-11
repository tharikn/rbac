import * as i0 from '@angular/core';
import { Injectable, Component, Directive, Input, NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import * as i2 from '@angular/forms';
import { Validators, FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i4 from 'primeng/api';
import { PrimeIcons, ConfirmationService } from 'primeng/api';
import { map } from 'rxjs/operators';
import * as i1 from '@angular/router';
import { NavigationStart } from '@angular/router';
import 'rxjs/add/operator/map';
import * as i15 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i8 from 'primeng/tree';
import * as i9 from 'primeng/contextmenu';
import { ContextMenuModule } from 'primeng/contextmenu';
import * as i10 from 'primeng/confirmpopup';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import * as i11 from 'primeng/card';
import { CardModule } from 'primeng/card';
import * as i12 from 'primeng/checkbox';
import { CheckboxModule } from 'primeng/checkbox';
import * as i14 from 'primeng/inputtext';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
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

class MasterdataService {
    constructor() { }
}
MasterdataService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MasterdataService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MasterdataService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MasterdataService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MasterdataService, decorators: [{
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
class AttachmentConfig {
}
AttachmentConfig.EndPoint = {
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
        lookup: '/platform/master/lookup/update',
        createLookup: '/platform/master/lookup/add',
        getPermissionRoleById: '/access-control/permission/role/{id}',
        getAllCategoryTree: '/platform/master/lookup/category/tree/{applicationid}',
        getLookupTree: '/platform/master/lookup/tree/{categoryid}',
        getLookupByCategoryId: '/platform/master/lookup/list/{id}',
        getPermissionsTree: '/access-control/permission/application/{applicationid}'
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

class RbacService {
    constructor(storeService) {
        this.storeService = storeService;
        this.storeService.currentStore.subscribe(val => {
            if (val) {
                this.httpService = val.HTTPSERVICE;
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
    getPagePermission(data) {
        return this.httpService.post(PermissionsURL.EndPoints.permission.pagePermission, data);
    }
    createPage(page) {
        return this.httpService.post(PermissionsURL.EndPoints.page.createPage, page);
    }
    updatePage(page) {
        return this.httpService.put(PermissionsURL.EndPoints.page.updateDeletePage.replace('{pageid}', page.id), page);
    }
    deletePage(pageId) {
        return this.httpService.delete(PermissionsURL.EndPoints.page.updateDeletePage.replace('{pageid}', pageId));
    }
    getPermission(id) {
        return this.httpService.get(PermissionsURL.EndPoints.permission.getPermission.replace('{id}', id));
    }
    createPermission(permission) {
        return this.httpService.post(PermissionsURL.EndPoints.permission.createPermission, permission);
    }
    updatePermission(permission) {
        return this.httpService.put(PermissionsURL.EndPoints.permission.updateDeletePermission.replace('{permissionid}', permission.id), permission);
    }
    deletePermission(permissionId) {
        return this.httpService.delete(PermissionsURL.EndPoints.permission.updateDeletePermission.replace('{permissionid}', permissionId));
    }
    getAllPageTree(applicationid) {
        return this.httpService
            .get(PermissionsURL.EndPoints.page.AllPageTree.replace('{applicationid}', applicationid))
            .pipe(map((item) => {
            return item.data;
        }));
    }
    getPermissionTree(pageid, parentid) {
        return this.httpService.get(PermissionsURL.EndPoints.permission.getPermissionTree.replace('{pageid}', pageid).replace('{parentid}', parentid));
    }
    getPermissionTypes(applicationid) {
        return this.httpService.get(PermissionsURL.EndPoints.permission.getPermissionTypes.replace('{applicationid}', applicationid));
    }
    getOrganizationPage(orgId) {
        return this.httpService.get(AccessManagementConfig$1.EndPoint.Organization.getOrganization.replace('{orgId}', orgId));
    }
    createCategory(category) {
        return this.httpService.post(MasterURL.EndPoints.lookup.createCategory, category);
    }
    updateCategory(category) {
        return this.httpService.put(MasterURL.EndPoints.lookup.updateDeleteCategory.replace('{id}', category.id), category);
    }
    deleteCategory(categoryId) {
        return this.httpService.delete(MasterURL.EndPoints.lookup.updateDeleteCategory.replace('{id}', categoryId));
    }
    getLookup(id) {
        return this.httpService.get(MasterURL.EndPoints.lookup.lookup.replace('{id}', id));
    }
    createLookup(lookup) {
        return this.httpService.post(MasterURL.EndPoints.lookup.createLookup, lookup);
    }
    updateLookup(lookup) {
        return this.httpService.put(MasterURL.EndPoints.lookup.lookup, lookup);
    }
    deleteLookup(lookupId) {
        return this.httpService.delete(MasterURL.EndPoints.lookup.lookup.replace('{id}', lookupId));
    }
    getAllCategoryTree(applicationid) {
        return this.httpService
            .get(MasterURL.EndPoints.lookup.getAllCategoryTree.replace('{applicationid}', applicationid))
            .pipe(map((item) => {
            return item.data;
        }));
    }
    getLookupTree(categoryid) {
        return this.httpService.get(MasterURL.EndPoints.lookup.getLookupTree.replace('{categoryid}', categoryid));
    }
    getLookupBycategoryID(categoryid) {
        return this.httpService.get(MasterURL.EndPoints.lookup.getLookupByCategoryId.replace('{id}', categoryid));
    }
}
RbacService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacService, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
RbacService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacService, decorators: [{
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
AlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AlertComponent, selector: "app-alert", ngImport: i0, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], directives: [{ type: i15.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
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

class MasterdataComponent$1 {
    constructor(mastersService, formBuilder, alertService, confirmationService, permissionStore, _storeservice) {
        this.mastersService = mastersService;
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.confirmationService = confirmationService;
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
        this.menuItems = [];
        //categoryForm!: FormGroup;
        this.filterMasterList = [];
        this.selectedItem = {};
        this.pageErrorShow = false;
        this.templateList = [];
        this.dataControlActions = [
            { value: '', name: 'Select' },
            { value: 'HIDE', name: 'Hide' },
            { value: 'DISABLE', name: 'Disable' },
            { value: 'MASK', name: 'Mask' }
        ];
        this.RBACORG = new RBACINFO();
        this.nodeType = 'category';
        this.saveMode = 'INSERT';
        this.isGlobalLookup = true;
        // this.initializeCategoryForm();
        this.initializeLookupForm();
    }
    ngOnInit() {
        this.orgSubs = this._storeservice.currentStore.subscribe((res) => {
            if (res['RBACORG'] && res['RBACORG'] !== '') {
                this.RBACORG = res['RBACORG'];
                console.log(this.RBACORG, 'RBACORG Permisson');
                this.environment = this.RBACORG['environment'];
                this.orgId = parseInt(this.RBACORG['orgID']);
                if (this.environment) {
                    this.loadTree();
                    this.loadContextMenu();
                    this.mastersService.getAllUserRole().subscribe((items) => {
                        this.roles = items.data;
                    });
                    this.mastersService.getPermissionsTree(this.environment.applicationid).subscribe((items) => {
                        this.permissions = items.data;
                    });
                }
            }
        });
    }
    ngOnDestroy() {
        this.orgSubs.unsubscribe();
    }
    // initializeCategoryForm() {
    //   this.categoryForm = this.formBuilder.group({
    //     id: [0],
    //     applicationid: [this.environment ? this.environment['applicationid']: ''],
    //     name: ['', Validators.required],
    //     description: [''],
    //     readonly: [false],
    //     isenabled: [true]
    //   });
    // }
    initializeLookupForm() {
        this.pageErrorShow = false;
        this.lookupForm = this.formBuilder.group({
            id: [0],
            applicationid: [this.environment ? this.environment['applicationid'] : ''],
            name: ['', Validators.required],
            description: [''],
            readonly: [false],
            isenabled: [true],
            lookup: this.formBuilder.array([this.initializeLookupDataForm()])
        });
    }
    initializeLookupDataForm() {
        return this.formBuilder.group({
            id: [0],
            parentid: [null],
            lookupdata: this.formBuilder.array([this.addlookupdata()]),
            readonly: [false],
            global: [true],
            isenabled: [true]
        });
    }
    // get datarules() {
    //   return this.lookupForm.get('optionaldata.rules') as FormArray;
    // }
    get lookupdata() {
        const lookupFormGroup = this.lookupForm.get('lookup');
        if (lookupFormGroup && lookupFormGroup.get('lookupdata') instanceof FormArray) {
            return lookupFormGroup.get('lookupdata');
        }
    }
    addRule() {
        return this.formBuilder.group({
            roles: ['', Validators.required],
            permission: ['', Validators.required],
            action: ['', Validators.required]
        });
    }
    // onAddRule(): void {
    //   this.datarules.push(this.addRule());
    // }
    addlookupdata() {
        return this.formBuilder.group({
            key: ['', Validators.required],
            value: ['', Validators.required],
            order: [0],
            access: this.formBuilder.group({
                assign: ['', [this.requiredIfValidator(() => !this.isGlobalLookup)]],
                view: ['', [this.requiredIfValidator(() => !this.isGlobalLookup)]]
            }),
        });
    }
    onAddLookUpData() {
        this.pageErrorShow = false;
        this.lookupdata.push(this.addlookupdata());
    }
    onDeleteLookupData(i) {
        this.lookupdata.removeAt(i);
    }
    // onDeleteRule(rowIndex: number): void {
    //   this.datarules.removeAt(rowIndex);
    // }
    searchMaster(event) {
        const value = event.target.value.toUpperCase();
        this.filterMasterList = this.categories.filter((a) => { var _a; return (_a = a['name']) === null || _a === void 0 ? void 0 : _a.toUpperCase().startsWith(value); });
    }
    onNodeContextMenuSelect(event) {
        if (event.node.type === 'category') {
            const permission = this.permissionStore.state;
            this.menuItems = [
                {
                    label: 'Create Category',
                    icon: PrimeIcons.ARROW_UP_LEFT,
                    visible: permission.SETTINGS_MAS_CREATE_CATOGORY,
                    badge: 'SETTINGS_MAS_CREATE_CATOGORY',
                    command: (createEvent) => {
                        this.saveMode = 'INSERT';
                        this.nodeType = 'category';
                        this.clearForm();
                        console.log(createEvent);
                    }
                },
                {
                    label: 'Create Lookup',
                    icon: PrimeIcons.ARROW_DOWN_RIGHT,
                    visible: permission.SETTINGS_MAS_CREATE_LOOKUP,
                    badge: 'SETTINGS_MAS_CREATE_LOOKUP',
                    command: _event => {
                        this.setInsertEvent();
                    }
                },
                {
                    label: 'Delete',
                    icon: PrimeIcons.TRASH,
                    visible: permission.SETTINGS_MAS_DELETE,
                    badge: 'SETTINGS_MAS_DELETE',
                    command: deleteEvent => {
                        this.saveMode = 'DELETE';
                        this.nodeType = this.selectedItem.type;
                        console.log(deleteEvent);
                        $('#Deleteuser').modal('show');
                        // this.confirmationService.confirm({
                        //   target: deleteEvent.target,
                        //   message: 'Are you sure that you want to delete?',
                        //   icon: 'pi pi-exclamation-triangle',
                        //   accept: () => {
                        //     this.deleteItem();
                        //   },
                        //   reject: () => {
                        //     //not to be empty
                        //   }
                        // });
                    }
                }
            ];
        }
        else if (event.node.type === 'lookup') {
            this.menuItems = [
                {
                    label: 'Create Lookup',
                    icon: PrimeIcons.ARROW_DOWN_RIGHT,
                    command: _eventErase => {
                        this.setInsertEvent();
                    }
                },
                {
                    label: 'Delete',
                    icon: PrimeIcons.TRASH,
                    command: RemoveEvent => {
                        this.saveMode = 'DELETE';
                        this.nodeType = this.selectedItem.type;
                        console.log(RemoveEvent);
                        $('#Deleteuser').modal('show');
                        // this.confirmationService.confirm({
                        //   target: RemoveEvent.target,
                        //   message: 'Are you sure that you want to delete?',
                        //   icon: 'pi pi-exclamation-triangle',
                        //   accept: () => {
                        //     this.deleteItem();
                        //   },
                        //   reject: () => {
                        //     //not to be empty
                        //   }
                        // });
                    }
                }
            ];
        }
    }
    setInsertEvent() {
        this.saveMode = 'INSERT';
        this.nodeType = this.selectedItem.type;
        this.createLookupForm();
        // this.clearRules();
    }
    nodeSelect(event) {
        this.nodeselecttype = 'UPDATE';
        this.saveMode = 'UPDATE';
        this.nodeType = event.node.type;
        // if (event.node.type === 'lookup') {
        // this.mastersService.getLookup(event.node.id).subscribe((item: any) => {
        //   const lookup = item['data'];
        this.mastersService.getLookupBycategoryID(event.node.data).subscribe((nodes) => {
            const lookup = nodes.data.lookup;
            // });
            // Assume this.lookupForm is your existing form instance created using the FormBuilder
            console.log('lookup', lookup);
            // Patch values for the main form
            this.lookupForm.patchValue({
                id: lookup.id,
                // lookupcategoryid: lookup.lookupcategoryid,
                parentid: lookup.parentid,
                readonly: lookup.readonly,
                global: lookup.global,
                isenabled: lookup.isenabled
            });
            // this.lookupForm.get('lookup')?.patchValue({
            //   lookupdata: lookup.lookupdata,
            //   });
            this.lookupForm.patchValue(lookup);
            console.log('lookupFormValue', this.lookupForm.value);
            const lookupDataFormArray = this.lookupForm.get('lookup.lookupdata');
            // Clear existing form array values
            while (lookupDataFormArray.length !== 0) {
                lookupDataFormArray.removeAt(0);
            }
            // Patch the form array with new values
            lookup.lookupdata.forEach(data => {
                lookupDataFormArray.push(this.formBuilder.group({
                    id: data.id,
                    key: data.key,
                    value: data.value
                }));
            });
            console.log('lookupdataformarray', lookupDataFormArray);
            // Patch values for the nested form array (lookupdata)
            // const lookupdataArray = this.lookupForm.get('lookupdata') as FormArray;
            // lookupdataArray.clear(); // Clear existing form array
            // Assuming you have a method to create a form group for lookupdata
            // const lookupDataGroup = this.addlookupdata(); 
            // lookupDataGroup.patchValue({
            //   key: lookup.key,
            //   value: lookup.value,
            //   order: lookup.order
            // Add more properties as needed
            // });
            // lookupdataArray.push(lookupDataGroup);
            //this.setGlobal(lookup.global);
            // this.lookupForm.patchValue(lookup);
            // this.lookupForm.reset();
        });
        //  } else {
        //  this.lookupForm.reset();
        //   this.lookupForm.patchValue(event.node);
        //   }
        console.log(event.node);
    }
    // private clearRules() {
    //   for (let index = 0; index < this.datarules.length; index++) {
    //     this.datarules.removeAt(index);
    //   }
    // }
    nodeExpand(event) {
        if (event.node && event.node.data && event.node.type !== 'lookup') {
            this.mastersService.getLookupTree(event.node.data).subscribe((nodes) => {
                event.node.children = nodes.data;
            });
        }
    }
    // saveCategory() {
    //   const category = this.categoryForm.value;
    //   category.applicationid =this.environment.applicationid;
    //   console.log(category);
    //   category.order = category.order ? Number(category.order) : 1;
    //   if (this.categoryForm.valid) {
    //     if (this.saveMode === 'INSERT') {
    //       this.mastersService.createCategory(category).subscribe(() => {
    //         this.alertService.success('Category created successfully.');
    //         this.loadTree();
    //         this.clearForm();
    //              });
    //     } else {
    //       this.mastersService.updateCategory(category).subscribe(() => {
    //         this.alertService.success('Category updated successfully.');
    //         this.loadTree();
    //         this.clearForm();
    //       });
    //     }
    //   } else {
    //     this.alertService.error('Please Fill All Required Fields');
    //   }
    //}
    saveLookup() {
        this.pageErrorShow = true;
        const lookupdts = this.lookupForm.value;
        lookupdts.applicationid = this.environment.applicationid;
        lookupdts.order = lookupdts.order ? Number(lookupdts.order) : 1;
        console.log(lookupdts);
        if (this.lookupForm.valid) {
            delete lookupdts.readonly;
            lookupdts.lookup.order = lookupdts.lookup.order ? Number(lookupdts.lookup.order) : 1;
            // if (lookup.optionaldata && lookup.optionaldata.rules) {
            //   lookup.optionaldata.rules = lookup.optionaldata.rules.map((rule: any) => {
            //     rule.permission.parent = null;
            //     return rule;
            //   });
            // }
            if (this.saveMode === 'INSERT') {
                this.mastersService.createLookup(lookupdts).subscribe(() => {
                    this.alertService.success('Lookup created successfully.');
                    this.loadTree();
                    this.clearForm();
                });
            }
            else {
                this.mastersService.updateLookup(lookupdts).subscribe(() => {
                    this.alertService.success('Lookup updated successfully.');
                    this.loadTree();
                    this.clearForm();
                });
            }
        }
        else {
            // this.alertService.error('Invalid lookup data.');
        }
    }
    clearForm() {
        this.initializeLookupForm();
    }
    createLookupForm() {
        this.initializeLookupForm();
        this.setGlobal(true);
        if (this.nodeType === 'category') {
            this.nodeType = 'lookup';
            this.lookupForm.patchValue({
                lookupcategoryid: this.selectedItem.id
            });
        }
        else {
            this.lookupForm.patchValue({
                lookupcategoryid: this.selectedItem.lookupcategoryid,
                parentid: this.selectedItem.id
            });
        }
    }
    setGlobal(checked) {
        var _a;
        this.isGlobalLookup = checked;
        (_a = this.lookupForm.get('access')) === null || _a === void 0 ? void 0 : _a.patchValue({
            view: [],
            assign: []
        });
    }
    loadContextMenu() {
        this.menuItems = [
            {
                label: 'Create Category',
                icon: PrimeIcons.ARROW_UP_LEFT,
                command: (event) => {
                    this.saveMode = 'INSERT';
                    this.nodeType = 'category';
                    this.clearForm();
                    console.log(event);
                }
            },
            {
                label: 'Create Lookup',
                icon: PrimeIcons.ARROW_DOWN_RIGHT,
                command: _eventNode => {
                    this.setInsertEvent();
                }
            },
            {
                label: 'Delete',
                icon: PrimeIcons.TRASH,
                command: event => {
                    this.saveMode = 'DELETE';
                    this.nodeType = this.selectedItem.type;
                    console.log(event);
                    $('#Deleteuser').modal('show');
                    // this.confirmationService.confirm({
                    //   target: event.target,
                    //   message: 'Are you sure that you want to delete?',
                    //   icon: 'pi pi-exclamation-triangle',
                    //   accept: () => {
                    //     //confirm action
                    //     this.deleteItem();
                    //   },
                    //   reject: () => {
                    //     // This is intentional
                    //   }
                    // });
                }
            }
        ];
    }
    loadTree() {
        this.pageErrorShow = false;
        this.mastersService.getAllCategoryTree(this.environment.applicationid).subscribe((items) => {
            this.categories = items;
            if (this.categories.length) {
                this.selectedItem = this.categories[0];
                this.filterMasterList = this.categories;
            }
        });
    }
    cancel() {
        this.lookupForm.reset();
        //this.lookupForm.reset();
    }
    deleteItem() {
        this.saveMode = 'UPDATE';
        if (this.selectedItem.type === 'lookup') {
            this.mastersService.deleteLookup(this.selectedItem.id).subscribe((_item) => {
                this.cancel();
                $('#Deleteuser').modal('hide');
                this.alertService.warn('Lookup deleted successfully.');
                this.loadTree();
            });
        }
        else {
            this.mastersService.deleteCategory(this.selectedItem.id).subscribe((_item) => {
                this.cancel();
                $('#Deleteuser').modal('hide');
                this.alertService.warn('Category deleted successfully.');
                this.loadTree();
            });
        }
    }
    requiredIfValidator(predicate) {
        return (formControl) => {
            if (!formControl.parent) {
                return null;
            }
            if (predicate()) {
                return Validators.required(formControl);
            }
            return null;
        };
    }
}
MasterdataComponent$1.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MasterdataComponent$1, deps: [{ token: RbacService }, { token: i2.FormBuilder }, { token: AlertService }, { token: i4.ConfirmationService }, { token: PermissionStore }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
MasterdataComponent$1.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: MasterdataComponent$1, selector: "lib-masterdata", ngImport: i0, template: "<app-alert></app-alert>\r\n<div class=\"permission\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4 col-md-6 col-12\">\r\n      <div class=\"clearfix\"></div>\r\n      <div class=\"tab-content py-2\">\r\n        <div class=\"tab-pane fade show active\">\r\n          <div class=\"form-group bgiconsearch\">\r\n            <input class=\"form-control\" placeholder=\"Search by Category name\" type=\"text\" (keyup)=\"searchMaster($event)\"\r\n              fieldKey=\"SETTINGS_MAS_SEARCH_BY_NAME\" pInputText />\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n\r\n          <div class=\"masteracess\">\r\n            <p-tree [value]=\"filterMasterList\" selectionMode=\"single\" [(selection)]=\"selectedItem\"\r\n              (onNodeSelect)=\"nodeSelect($event)\" (onNodeContextMenuSelect)=\"onNodeContextMenuSelect($event)\"\r\n              [contextMenu]=\"treeContextMenu\"></p-tree>\r\n            <p-contextMenu #treeContextMenu [model]=\"menuItems\" appendTo=\"body\"></p-contextMenu>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-8 col-md-6 col-12 master-right mt-2\">\r\n      <p-confirmPopup></p-confirmPopup>\r\n      <p-card id=\"lookupForm\" class=\"rbac-card\" [formGroup]=\"lookupForm\"\r\n        [style]=\"{ width: '100%', 'margin-bottom': '2em' }\">\r\n        <div class=\"strip_head toggleleft\">\r\n          <span class=\"report_head font-weight-bold\">Masters/Category</span>\r\n        </div>\r\n        <input id=\"cid\" type=\"hidden\" formControlName=\"id\" />\r\n        <input id=\"capplicationid\" type=\"hidden\" formControlName=\"applicationid\" />\r\n        <div class=\"p-fluid p-formgrid p-grid\">\r\n          <div class=\"col-lg-3 col-md-12 col-12 mb-3\">\r\n            <label for=\"mName\" class=\"referral-form-labels\">Name\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input id=\"mName\" type=\"text\" formControlName=\"name\" fieldKey=\"SETTINGS_MAS_NAME\" placeholder=\"Enter Name\"\r\n              aria-describedby=\"mName\" pInputText />\r\n            <div *ngIf=\"\r\n                lookupForm.controls['name'].invalid &&\r\n                (lookupForm.controls['name'].dirty || lookupForm.controls['name'].touched)\r\n              \">\r\n              <small *ngIf=\"lookupForm.controls['name'].invalid\" class=\"p-error block\">Name is required </small>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-12 col-12 mb-3\">\r\n            <label for=\"cdescription\" class=\"referral-form-labels\">Description </label>\r\n            <input id=\"cdescription\" type=\"text\" formControlName=\"description\" fieldKey=\"SETTINGS_MAS_DESCRYPTION\"\r\n              placeholder=\"Enter Description\" aria-describedby=\"cdescription\" pInputText />\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-12 col-12 mb-3\">\r\n            <label for=\"corder\" class=\"referral-form-labels d-none d-lg-inline-block\">&#160;</label>\r\n            <div>\r\n              <p-checkbox st inputId=\"readOnly\" [binary]=\"true\" formControlName=\"readonly\"\r\n                fieldKey=\"SETTINGS_MAS_READ_ONLY\" label=\"Readonly\">\r\n              </p-checkbox>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-12 col-12 mb-3\">\r\n            <label for=\"corder\" class=\"referral-form-labels d-none d-lg-inline-block\">&#160;</label>\r\n            <div>\r\n              <p-checkbox st inputId=\"active\" [binary]=\"true\" formControlName=\"isenabled\" fieldKey=\"SETTINGS_MAS_ACTIVE\"\r\n                label=\"Active\"></p-checkbox>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary btncommon\" fieldKey=\"SETTINGS_MAS_ADD_CATOGORY\"\r\n            (click)=\"saveCategory()\">\r\n            {{ saveMode === 'UPDATE' ? 'Update Category' : 'Add Category' }}\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary border border-primary btncancel\"\r\n            fieldKey=\"SETTINGS_MAS_CANCEL\" (click)=\"clearForm()\">\r\n            Cancel\r\n          </button>\r\n          <br />\r\n          <br />\r\n        </div> -->\r\n      </p-card>\r\n\r\n      <p-card id=\"lookupForm\" class=\"rbac-card\" [formGroup]=\"lookupForm\"\r\n        [style]=\"{ width: '100%', 'margin-bottom': '2em' }\">\r\n        <div class=\"strip_head toggleleft\">\r\n          <span class=\"report_head font-weight-bold\">Masters/Lookup</span>\r\n        </div>\r\n        <!-- <input id=\"lid\" type=\"hidden\" formControlName=\"lookup.id\" /> -->\r\n        <!-- <input id=\"llookupcategoryid\" type=\"hidden\" formControlName=\"lookupcategoryid\" /> -->\r\n        <!-- <input id=\"lparentid\" type=\"hidden\" formControlName=\"lookup.parentid\" /> -->\r\n        <div>\r\n          <div>\r\n            <button class=\"pull-right mb-2 btn btn-primary btncommon\"\r\n              (click)=\"onAddLookUpData()\">+</button>\r\n          </div>\r\n          <div class=\"p-datatable-wrapper\">\r\n            <table class=\"p-datatable-table table\">\r\n              <thead class=\"p-datatable-thead\">\r\n                <tr>\r\n                  <th style=\"width: 35%;\"\r\n                  >Key \r\n                  <span class=\"requiredfield text-danger\">*</span>\r\n                  </th>\r\n                  <th style=\"width: 35%;\">Value \r\n                    <span class=\"requiredfield text-danger\">*</span>\r\n                  </th>\r\n                  <th style=\"width: 25%;\">Order</th>\r\n                  <th style=\"width: 5%;\" *ngIf=\"saveMode == 'INSERT'\"></th>\r\n                </tr>\r\n              </thead>\r\n              <tbody formArrayName=\"lookup\">\r\n                <ng-container *ngFor=\"let field of lookupForm.get('lookup')['controls']; let i = index\">\r\n                  <tr [formGroupName]=\"i\">\r\n                    <td>\r\n                      <input id=\"lkey\" type=\"text\" placeholder=\"Enter Key {{i + 1}}\" formControlName=\"key\"\r\n                        aria-describedby=\"lkey\" pInputText />\r\n                        <!-- <div *ngIf=\"pageErrorShow ? field.get('key').invalid : field.get('key').errors && field.get('key').touched\">\r\n                          field.get('key')?.touched && field.get('key')?.errors && field.get('key')?.hasError('required')\">\r\n                            <small class=\"p-error block\">Key is required</small>\r\n                          </div> -->\r\n                    </td>\r\n                    <td>\r\n                      <input id=\"lvalue\" type=\"text\" placeholder=\"Enter Value {{i + 1}}\" formControlName=\"value\"\r\n                        aria-describedby=\"lvalue\" pInputText />\r\n                        <!-- <div *ngIf=\"pageErrorShow ? field.get('value').invalid : field.get('value').errors && field.get('value').touched\">\r\n                          <small class=\"p-error block\">Value is required</small>\r\n                        </div> -->\r\n                    </td>\r\n                    <td>\r\n                      <input id=\"lorder\" type=\"text\" formControlName=\"order\" placeholder=\"Enter Order {{i + 1}}\"\r\n                        pInputText />\r\n                    </td>\r\n                    <td *ngIf=\"saveMode == 'INSERT' &&  lookupdata.length > 1\">\r\n                      <button type=\"button\" class=\"btn btn-default\" title=\"delete\"\r\n                        (click)=\"onDeleteLookupData(i)\">\r\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </ng-container>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n        </div>\r\n        <!-- <ng-container formGroupName=\"optionaldata\">\r\n          <p-table [value]=\"datarules.controls\" width=\"100%\" [responsive]=\"true\" formArrayName=\"rules\">\r\n            <ng-template pTemplate=\"caption\">\r\n              <div class=\"flex align-items-center justify-content-between\">\r\n                Control Flow\r\n                <button class=\"pull-right mb-2 btn btn-primary btncommon\" (click)=\"onAddRule()\">+</button>\r\n              </div>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"header\">\r\n              <tr>\r\n                <th id=\"datarules-roles\" style=\"width: 35%\">Roles</th>\r\n                <th id=\"datarules-permissions\" style=\"width: 35%\">Permissions</th>\r\n                <th id=\"datarules-action\" style=\"width: 20%\">Action</th>\r\n                <th id=\"datarules-empty\" style=\"width: 10%\"></th>\r\n              </tr>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\">\r\n              <ng-container>\r\n                <tr [formGroupName]=\"rowIndex\">\r\n                  <td>\r\n                    <p-multiSelect [options]=\"roles\" formControlName=\"roles\" defaultLabel=\"Select Roles\"\r\n                      optionLabel=\"name\" optionValue=\"id\" ariaFilterLabel=\"null\"\r\n                      ariaLabelledBy=\"selectRoles{{ rowIndex }}\" id=\"selectRoles{{ rowIndex }}\" display=\"chip\">\r\n                    </p-multiSelect>\r\n                    <div class=\"text-danger\" *ngIf=\"\r\n                        rowData.get('roles').errors && (rowData.get('roles').dirty || rowData.get('roles').touched)\r\n                      \">\r\n                      <div *ngIf=\"rowData.get('roles').errors?.required\">Role is Required</div>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <p-treeSelect formControlName=\"permission\" [options]=\"permissions\" optionLabel=\"label\"\r\n                      optionValue=\"data\" placeholder=\"Select Permissions\" id=\"selectPermit{{ rowIndex }}\"\r\n                      ariaLabelledBy=\"selectPermit{{ rowIndex }}\" class=\"permission-tree\"></p-treeSelect>\r\n                    <div class=\"text-danger\" *ngIf=\"\r\n                        rowData.get('permission').errors &&\r\n                        (rowData.get('permission').dirty || rowData.get('permission').touched)\r\n                      \">\r\n                      <div *ngIf=\"rowData.get('permission').errors?.required\">Permission is Required</div>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <p-dropdown optionLabel=\"name\" optionValue=\"value\" [options]=\"dataControlActions\"\r\n                      id=\"selectValue{{ rowIndex }}\" ariaLabelledBy=\"selectValue{{ rowIndex }}\"\r\n                      formControlName=\"action\">\r\n                    </p-dropdown>\r\n                    <div class=\"text-danger\" *ngIf=\"\r\n                        rowData.get('action').errors && (rowData.get('action').dirty || rowData.get('action').touched)\r\n                      \">\r\n                      <div *ngIf=\"rowData.get('action').errors?.required\">Action is Required</div>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <button type=\"button\" class=\"btn btn-default\" title=\"delete\" (click)=\"onDeleteRule(rowIndex)\">\r\n                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n              </ng-container>\r\n            </ng-template>\r\n          </p-table>\r\n        </ng-container> -->\r\n        <div class=\"p-fluid p-formgrid p-grid\">\r\n          <div class=\"p-field p-col\" style=\"padding: 25px 0px 0px 10px\">\r\n            <p-checkbox inputId=\"binaryGlobal\" [binary]=\"true\" formControlName=\"global\"\r\n              (onChange)=\"setGlobal($event.checked)\" label=\"Global\"></p-checkbox>\r\n          </div>\r\n          <div class=\"p-field p-col\" style=\"padding: 25px 0px 0px 10px\">\r\n            <p-checkbox inputId=\"binaryActive\" [binary]=\"true\" formControlName=\"isenabled\" label=\"Active\"></p-checkbox>\r\n          </div>\r\n          <div class=\"p-field p-col\"></div>\r\n          <div class=\"p-field p-col\"></div>\r\n        </div>\r\n        <!-- <ng-container *ngIf=\"!isGlobalLookup\">\r\n          <div class=\"p-fluid p-formgrid p-grid\" formGroupName=\"access\">\r\n            <div class=\"p-field p-col\">\r\n              <label for=\"pname\" class=\"referral-form-labels\">View Access </label>\r\n              <p-multiSelect [options]=\"roles\" formControlName=\"view\" defaultLabel=\"Select Roles\" optionLabel=\"name\"\r\n                optionValue=\"id\" display=\"chip\">\r\n              </p-multiSelect>\r\n              <div *ngIf=\"lookupForm.get('access.view')?.errors\">\r\n                <small *ngIf=\"lookupForm.get('access.view')?.invalid\" class=\"p-error block\">Role is required </small>\r\n              </div>\r\n            </div>\r\n            <div class=\"p-field p-col\">\r\n              <label for=\"pname\" class=\"referral-form-labels\">Assign Access </label>\r\n              <p-multiSelect [options]=\"roles\" formControlName=\"assign\" defaultLabel=\"Select Roles\" optionLabel=\"name\"\r\n                optionValue=\"id\" display=\"chip\">\r\n              </p-multiSelect>\r\n              <div *ngIf=\"lookupForm.get('access.assign')?.errors\">\r\n                <small *ngIf=\"lookupForm.get('access.assign')?.invalid\" class=\"p-error block\">Role is required </small>\r\n              </div>\r\n            </div>\r\n            <div class=\"p-field p-col\"></div>\r\n          </div>\r\n        </ng-container> -->\r\n\r\n        <div class=\"mt-2\">\r\n          <button type=\"submit\" class=\"pull-right mb-2 btn btn-primary btncommon\" (click)=\"saveLookup()\">\r\n           Save <!-- {{ saveMode === 'UPDATE' ? 'Update Lookup' : 'Add Lookup' }} -->\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" (click)=\"clearForm()\">Cancel</button>\r\n          <br />\r\n          <br />\r\n        </div>\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal\" id=\"Deleteuser\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Delete {{this.selectedItem.type === 'lookup' ? 'Lookup' : 'Category'}}</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Are you sure you want to delete the {{this.selectedItem.type === 'lookup' ? 'Lookup' : 'Category'}}?\r\n        <!-- Are you sure want to Delete User ? -->\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary btncommon delete\" data-dismiss=\"modal\" (click)=\"deleteItem()\">\r\n            Delete\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".head-div{padding-top:9px;padding-left:7px}.bgiconsearch{margin-bottom:5px;padding-bottom:0;font-size:var(--base-font-size)}.masteracess{border:solid 1px var(--table-border);border-radius:2px;padding:5px 0;overflow-y:auto;background:var(--bg-light);max-height:calc(100vh - 243px);min-height:calc(100vh - 237px)}.masterempty{max-width:none;border-radius:50%;height:40px;width:40px}.row.masterdata{margin:0;border-bottom:solid 1px var(--table-border);padding:5px 0;cursor:pointer}.overflow_txt{overflow:hidden;text-overflow:ellipsis}span.namemaster{font-size:var(--base-font-size);color:#000}.masterid,span.emailmaster{font-size:var(--base-font-size);color:#9b9b9b}span.deletemaster{position:absolute;top:0px;right:15px;z-index:9;width:20px;float:right;cursor:pointer}span.deletemaster img{width:12px}.activate{position:absolute;margin-top:-46px;margin-left:44rem}.toggleleft{font-size:13px;font-weight:600;display:block;margin-top:-12px;padding-bottom:13px}.report_button{margin-left:12px}:host ::ng-deep .ui-tree.permission-tree{width:100%}:host ::ng-deep .p-datatable .p-datatable-header{background:var(--background-color);color:var(--text-dark);border-color:var(--table-border)}:host ::ng-deep .p-datatable .p-datatable-thead tr th{background:var(--background-color);color:var(--text-dark);border-color:var(--table-border)}.p-datatable-wrapper tr td{text-align:left;border:none;padding:15px 8px;vertical-align:top}.p-datatable-wrapper tr td input{width:100%}.p-datatable-wrapper tr td button i{color:#f92929}\n"], components: [{ type: AlertComponent, selector: "app-alert" }, { type: i8.Tree, selector: "p-tree", inputs: ["value", "selectionMode", "selection", "style", "styleClass", "contextMenu", "layout", "draggableScope", "droppableScope", "draggableNodes", "droppableNodes", "metaKeySelection", "propagateSelectionUp", "propagateSelectionDown", "loading", "loadingIcon", "emptyMessage", "ariaLabel", "togglerAriaLabel", "ariaLabelledBy", "validateDrop", "filter", "filterBy", "filterMode", "filterPlaceholder", "filteredNodes", "filterLocale", "scrollHeight", "virtualScroll", "virtualNodeHeight", "minBufferPx", "maxBufferPx", "indentation", "trackBy"], outputs: ["selectionChange", "onNodeSelect", "onNodeUnselect", "onNodeExpand", "onNodeCollapse", "onNodeContextMenuSelect", "onNodeDrop", "onFilter"] }, { type: i9.ContextMenu, selector: "p-contextMenu", inputs: ["model", "global", "target", "style", "styleClass", "appendTo", "autoZIndex", "baseZIndex", "triggerEvent"], outputs: ["onShow", "onHide"] }, { type: i10.ConfirmPopup, selector: "p-confirmPopup", inputs: ["key", "defaultFocus", "showTransitionOptions", "hideTransitionOptions", "autoZIndex", "baseZIndex", "style", "styleClass", "visible"] }, { type: i11.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { type: i12.Checkbox, selector: "p-checkbox", inputs: ["value", "name", "disabled", "binary", "label", "ariaLabelledBy", "ariaLabel", "tabindex", "inputId", "style", "styleClass", "labelStyleClass", "formControl", "checkboxIcon", "readonly", "required", "trueValue", "falseValue"], outputs: ["onChange"] }], directives: [{ type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }, { type: i14.InputText, selector: "[pInputText]" }, { type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i15.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.FormArrayName, selector: "[formArrayName]", inputs: ["formArrayName"] }, { type: i15.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MasterdataComponent$1, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-masterdata',
                    templateUrl: './masterdata.component.html',
                    styleUrls: ['./masterdata.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: RbacService }, { type: i2.FormBuilder }, { type: AlertService }, { type: i4.ConfirmationService }, { type: PermissionStore }, { type: DataStoreService }]; } });

class MasterdataComponent {
    constructor(permissionStore, _storeservice) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
        this.RBACORG = new RBACINFO();
    }
    ngOnInit() {
        this.mastersEvent.subscribe((val) => {
            this.RBACORG = val.RBACORG;
            this.PERMISSION = val.PERMISSION;
            this._storeservice.setData('RBACORG', this.RBACORG);
            this.permissionStore.setStore(this.PERMISSION);
            this._storeservice.setData('HTTPSERVICE', val.HTTPSERVICE);
        });
    }
}
MasterdataComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MasterdataComponent, deps: [{ token: PermissionStore }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
MasterdataComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: MasterdataComponent, selector: "masterdata", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", mastersEvent: "mastersEvent" }, ngImport: i0, template: `
      <lib-masterdata></lib-masterdata>
  `, isInline: true, components: [{ type: MasterdataComponent$1, selector: "lib-masterdata" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MasterdataComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'masterdata',
                    template: `
      <lib-masterdata></lib-masterdata>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: PermissionStore }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], mastersEvent: [{
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

class PicsMasterdataModule {
}
PicsMasterdataModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsMasterdataModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PicsMasterdataModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsMasterdataModule, declarations: [MasterdataComponent$1], imports: [CommonModule,
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
        AlertModule], exports: [MasterdataComponent$1] });
PicsMasterdataModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsMasterdataModule, imports: [[
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsMasterdataModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MasterdataComponent$1
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
                        MasterdataComponent$1
                    ],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });

class MasterdataModule {
}
MasterdataModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MasterdataModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MasterdataModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MasterdataModule, declarations: [MasterdataComponent], imports: [PicsMasterdataModule], exports: [MasterdataComponent] });
MasterdataModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MasterdataModule, providers: [RbacService, AlertService, ConfirmationService, PermissionStore, DataStoreService], imports: [[
            PicsMasterdataModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MasterdataModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MasterdataComponent
                    ],
                    imports: [
                        PicsMasterdataModule
                    ],
                    exports: [
                        MasterdataComponent
                    ],
                    providers: [RbacService, AlertService, ConfirmationService, PermissionStore, DataStoreService]
                }]
        }] });

/*
 * Public API Surface of masterdata
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MasterdataComponent, MasterdataModule, MasterdataService };
//# sourceMappingURL=pics-core-masterdata.js.map
