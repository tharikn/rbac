import * as i0 from '@angular/core';
import { Injectable, Directive, Input, Component, NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as i2$1 from '@angular/forms';
import { Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i4 from 'primeng/api';
import { PrimeIcons, ConfirmationService } from 'primeng/api';
import { BehaviorSubject, Subject, of } from 'rxjs';
import * as i1 from '@angular/router';
import { NavigationStart } from '@angular/router';
import 'rxjs/add/operator/map';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i8 from 'primeng/tree';
import * as i9 from 'primeng/checkbox';
import { CheckboxModule } from 'primeng/checkbox';
import * as i10 from 'primeng/card';
import { CardModule } from 'primeng/card';
import * as i11 from 'primeng/inputtext';
import { InputTextModule } from 'primeng/inputtext';
import * as i12 from 'primeng/contextmenu';
import { ContextMenuModule } from 'primeng/contextmenu';
import * as i13 from 'primeng/confirmpopup';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import * as i1$1 from '@angular/common/http';
import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { map } from 'rxjs/operators';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

class RbacOrgService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacOrgService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacOrgService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacOrgService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class ManagementGroupsURL {
    static EndPoints = {
        org: {
            getOrganizationByid: '/org/management-group/organization/{id}',
            createOrganization: '/org/management-group/organization/create',
            updateOrganization: '/org/management-group/organization/{id}',
            getOrganizations: '/org/management-group/organization/tree'
        }
    };
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

class ManagementGroupsService {
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
    getOrganizations(organizationid) {
        return this.httpService.get(ManagementGroupsURL.EndPoints.org.getOrganizationByid.replace('{id}', organizationid));
    }
    createOrganization(organization) {
        return this.httpService.post(ManagementGroupsURL.EndPoints.org.createOrganization, organization);
    }
    updateOrganization(organization) {
        return this.httpService.put(ManagementGroupsURL.EndPoints.org.updateOrganization.replace('{id}', organization.id), organization);
    }
    deleteOrganization(organizationid) {
        return this.httpService.delete(`/org/management-group/organization/${organizationid}`);
    }
    getManagementGroups(organizationid, parentid) {
        return this.httpService.get(`/org/organization/group/${organizationid}/${parentid}`);
    }
    getManagementGroupTree(_organizationid) {
        return this.httpService.get('/org/management-group/organization/tree');
    }
    createManagementGroup(managementGroup) {
        return this.httpService.post('/org/organization/group/create', managementGroup);
    }
    updateManagementGroup(managementGroup) {
        return this.httpService.put(`/org/organization/group/${managementGroup.id}`, managementGroup);
    }
    deleteManagementGroup(managementGroupId) {
        return this.httpService.delete(`/org/organization/group/${managementGroupId}`);
    }
    getAllOrganizations() {
        return this.httpService.get(ManagementGroupsURL.EndPoints.org.getOrganizations);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ManagementGroupsService, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ManagementGroupsService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ManagementGroupsService, decorators: [{
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AlertComponent, selector: "app-alert", ngImport: i0, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-alert', template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"] }]
        }], ctorParameters: function () { return [{ type: AlertService }]; } });

class OrganizationComponent {
    managementGroupService;
    formBuilder;
    alertService;
    confirmationService;
    permissionStore;
    _storeservice;
    RBACORG = new RBACINFO();
    PERMISSION;
    organizations;
    menuItems = [];
    organizationForm;
    managementGroupForm;
    managementGroups;
    nodeType;
    saveMode;
    selectedItem = {};
    orgId;
    orgName;
    constructor(managementGroupService, formBuilder, alertService, confirmationService, permissionStore, _storeservice) {
        this.managementGroupService = managementGroupService;
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.confirmationService = confirmationService;
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
        this.nodeType = 'organization';
        this.saveMode = 'INSERT';
    }
    ngOnInit() {
        this._storeservice.setData('RBACORG', this.RBACORG);
        this.permissionStore.setStore(this.PERMISSION);
        this.initializeOrganizationForm();
        this.initializeManagementGroupForm();
        this.loadTree();
        this.loadContextMenu();
    }
    initializeOrganizationForm() {
        this.organizationForm = this.formBuilder.group({
            id: [0],
            name: ['', Validators.required],
            attempts: [3],
            timeout: [30],
            passwordExpiryDays: [30, Validators.required],
            deactive_days_limit: [180, Validators.required],
            permanent_delete_days_limit: [7, Validators.required],
            PromptNotificationDays: [],
            PromptNotificationmsg: [''],
            additionalinfo: this.formBuilder.group({
                environment: [''],
                apptitle: [''],
                bannerlogo: [''],
                basecolor: [''],
                releaseversion: [''],
                releasenotes: ['']
            })
        });
        if (this.RBACORG.smsNotificationEnabled) {
            this.organizationForm.addControl('smsNotification', new FormControl(true));
        }
    }
    initializeManagementGroupForm() {
        this.managementGroupForm = this.formBuilder.group({
            id: [0],
            parentid: [null],
            organizationid: [0],
            name: ['', Validators.required],
            location: ['', Validators.required],
            zip: ['', Validators.required],
            additionalinfo: this.formBuilder.group({})
        });
    }
    onNodeContextMenuSelect(_event) {
        // Test
    }
    nodeSelect(event) {
        this.saveMode = 'UPDATE';
        this.nodeType = event.node.type;
        if (event.node.type === 'managementgroup') {
            this.managementGroupForm.reset();
            this.managementGroupForm.patchValue(event.node);
        }
        else {
            this.organizationForm.reset();
            this.organizationForm.patchValue(event.node);
        }
        this.orgId = event?.node?.parent?.id;
        this.orgName = event?.node?.parent?.name;
    }
    nodeExpand(event) {
        const organizationId = event.node.type === 'managementgroup' ? event.node.organizationid : event.node.data;
        const parentId = event.node.type === 'managementgroup' ? event.node.data : 0;
        if (event.node && event.node.data) {
            this.managementGroupService.getManagementGroups(organizationId, parentId).subscribe(nodes => {
                event.node.children = nodes.data;
            });
        }
    }
    saveOrganization() {
        const organization = this.organizationForm.value;
        const validation = this.validationOrg();
        if (validation) {
            organization.additionalinfo.releases = organization.additionalinfo.releases
                ? organization.additionalinfo.releases
                : [];
            if (organization.additionalinfo.releaseversion) {
                const release = {
                    version: organization.additionalinfo.releaseversion,
                    notes: organization.additionalinfo.releasenotes,
                    date: new Date().toISOString(),
                    lastupdated: new Date().toISOString()
                };
                const index = organization.additionalinfo.releases.findIndex((item) => item.version === release.version);
                if (index === -1) {
                    organization.additionalinfo.releases.push(release);
                }
                else {
                    organization.additionalinfo.releases[index].notes = release.notes;
                    organization.additionalinfo.releases[index].lastupdated = new Date().toISOString();
                }
            }
            organization.parentid = this.orgId;
            if (this.saveMode === 'INSERT') {
                this.managementGroupService.createOrganization(organization).subscribe(() => {
                    this.alertService.success('Organization created successfully.');
                    this.loadTree();
                }, _error => {
                    this.alertService.error('Failed to create organization.');
                });
            }
            else {
                this.managementGroupService.updateOrganization(organization).subscribe(() => {
                    this.alertService.success('Organization updated successfully.');
                    this.loadTree();
                }, _error => {
                    this.alertService.error('Failed to update organization.');
                });
            }
            this.clearForm();
        }
    }
    validationOrg() {
        if (!this.organizationForm.value.name) {
            this.alertService.error('Please enter organization name');
            return false;
        }
        else if (!this.organizationForm.value.attempts && this.organizationForm.value.attempts <= 1) {
            this.alertService.error('Please enter atleast one attempt(s)');
            return false;
        }
        else if (!this.organizationForm.value.timeout && this.organizationForm.value.timeout <= 1) {
            this.alertService.error('Please enter a valid timeout value');
            return false;
        }
        else if (!this.organizationForm.value.passwordExpiryDays) {
            this.alertService.error('Please enter a valid number of days for password expiry.');
            return false;
        }
        else if (this.RBACORG['familyUserInactive'] && !this.organizationForm.value.deactive_days_limit) {
            this.alertService.error('Please enter a valid number of days for family user inactive.');
            return false;
        }
        else if (this.RBACORG['familyUserInactive'] && !this.organizationForm.value.permanent_delete_days_limit) {
            this.alertService.error('Please enter a valid number of days for family user deleted.');
            return false;
        }
        return true;
    }
    saveManagementGroup() {
        const managementGroup = this.managementGroupForm.value;
        if (this.managementGroupForm.valid) {
            if (this.saveMode === 'INSERT') {
                this.managementGroupService.createManagementGroup(managementGroup).subscribe(() => {
                    this.alertService.success('Management Group created successfully.');
                    this.loadTree();
                });
            }
            else {
                this.managementGroupService.updateManagementGroup(managementGroup).subscribe(() => {
                    this.alertService.success('Management Group updated successfully.');
                    this.loadTree();
                });
            }
        }
        else {
            this.alertService.error('Invalid permission data.');
        }
    }
    clearForm() {
        this.nodeType = 'organization';
        this.saveMode = 'INSERT';
        this.initializeManagementGroupForm();
        this.initializeOrganizationForm();
    }
    createManagementGroupForm() {
        if (this.nodeType === 'organization') {
            this.nodeType = 'managementgroup';
            this.managementGroupForm.patchValue({
                organizationid: this.selectedItem.id
            });
        }
        else {
            this.managementGroupForm.patchValue({
                organizationid: this.selectedItem.organizationid,
                parentid: this.selectedItem.id
            });
        }
    }
    loadContextMenu() {
        const permission = this.permissionStore.state;
        this.menuItems = [
            {
                label: 'Create Organization',
                visible: permission.SETTINGS_ORG_CREATE_ORGANIZATION ? permission.SETTINGS_ORG_CREATE_ORGANIZATION : false,
                badge: 'SETTINGS_ORG_CREATE_ORGANIZATION',
                icon: PrimeIcons.ARROW_UP_LEFT,
                command: (event) => {
                    this.saveMode = 'INSERT';
                    this.nodeType = this.selectedItem.type;
                    if (!this.selectedItem?.parent || this.selectedItem?.parent) {
                        this.orgId = this.selectedItem[0].id;
                        this.orgName = this.selectedItem[0].name;
                    }
                    if (this.selectedItem.type === 'managementgroup') {
                        this.nodeType = 'organization';
                    }
                    this.clearForm();
                }
            },
            // {
            //   label: 'Create Management Group',
            //   icon: PrimeIcons.ARROW_DOWN_RIGHT,
            //   visible: permission.SETTINGS_ORG_CREATE_MANAGEMENT_GROUP,
            //   badge: 'SETTINGS_ORG_CREATE_MANAGEMENT_GROUP',
            //   command: _event => {
            //     this.saveMode = 'INSERT';
            //     this.nodeType = this.selectedItem.type;
            //     this.clearForm();
            //     this.createManagementGroupForm();
            //   }
            // },
            {
                label: 'Delete',
                icon: PrimeIcons.TRASH,
                visible: permission.SETTINGS_ORG_DELETE ? permission.SETTINGS_ORG_DELETE : false,
                // badge: 'SETTINGS_ORG_DELETE',
                command: event => {
                    this.saveMode = 'DELETE';
                    this.nodeType = this.selectedItem.type;
                    this.confirmationService.confirm({
                        target: event['target'],
                        message: 'Are you sure that you want to delete?',
                        icon: 'pi pi-exclamation-triangle',
                        accept: () => {
                            this.deleteOrganization();
                            //confirm action
                        },
                        reject: () => {
                            // This is intentional
                        }
                    });
                }
            }
        ];
    }
    deleteOrganization() {
        this.managementGroupService.deleteOrganization(this.selectedItem[0].id).subscribe((res) => {
            this.loadTree();
            this.alertService.success('Deleted successfully');
        });
    }
    loadTree() {
        this.managementGroupService.getAllOrganizations().subscribe((res) => {
            this.organizations = res.data;
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OrganizationComponent, deps: [{ token: ManagementGroupsService }, { token: i2$1.FormBuilder }, { token: AlertService }, { token: i4.ConfirmationService }, { token: PermissionStore }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: OrganizationComponent, selector: "cardi-organization", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION" }, ngImport: i0, template: "<app-alert></app-alert>\r\n<div class=\"permission\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4 col-md-6 col-12\">\r\n      <div class=\"clearfix\"></div>\r\n      <div class=\"tab-content py-2 px-2 px-sm-0\">\r\n        <div class=\"tab-pane fade show active\">\r\n          <div class=\"masteracess\">\r\n            <p-tree\r\n              [value]=\"organizations\"\r\n              selectionMode=\"multiple\"\r\n              [(selection)]=\"selectedItem\"\r\n              (onNodeSelect)=\"nodeSelect($event)\"\r\n              (onNodeContextMenuSelect)=\"onNodeContextMenuSelect($event)\"\r\n              [contextMenu]=\"treeContextMenu\"></p-tree>\r\n            <p-contextMenu #treeContextMenu [model]=\"menuItems\"></p-contextMenu>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-8 col-md-6 col-12 master-right mt-2\">\r\n      <p-confirmPopup></p-confirmPopup>\r\n      <p-card\r\n        *ngIf=\"nodeType === 'organization'\"\r\n        id=\"pageForm\"\r\n        class=\"rbac-card\"\r\n        [formGroup]=\"organizationForm\"\r\n        [style]=\"{ width: '100%'}\">\r\n        <div class=\"strip_head toggleleft\">\r\n          <span class=\"report_head font-weight-bold\">Organization</span>\r\n        </div>\r\n        <input id=\"cid\" type=\"hidden\" formControlName=\"id\" />\r\n        <div class=\"p-fluid p-formgrid row\" *ngIf=\"orgName\">\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"orgname\" class=\"referral-form-labels\"> Parent Organization </label><br />\r\n            <label class=\"referral-form-labels parent-org\"> {{ orgName }} </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"p-fluid p-formgrid row\">\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"cname\" class=\"referral-form-labels\"\r\n              >Name\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input\r\n              id=\"cname\"\r\n              type=\"text\"\r\n              fieldKey=\"SETTINGS_ORG_NAME\"\r\n              formControlName=\"name\"\r\n              placeholder=\"Enter Name\"\r\n              aria-describedby=\"cname\"\r\n              pInputText />\r\n            <div\r\n              *ngIf=\"\r\n                organizationForm.controls['name'].invalid &&\r\n                (organizationForm.controls['name'].dirty || organizationForm.controls['name'].touched)\r\n              \">\r\n              <small *ngIf=\"organizationForm.controls['name'].invalid\" class=\"p-error block\">Name is required </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"p-field col-lg-4 d-none\"></div>\r\n          <div class=\"p-field col-lg-4 d-none\"></div>\r\n          <div class=\"p-field col-lg-4 d-none\"></div>\r\n        </div>\r\n        <ng-container formGroupName=\"additionalinfo\">\r\n          <div class=\"p-fluid p-formgrid row\">\r\n            <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"cenvironment\" class=\"referral-form-labels\">Environment </label>\r\n              <input\r\n                id=\"cenvironment\"\r\n                type=\"text\"\r\n                formControlName=\"environment\"\r\n                fieldKey=\"SETTINGS_ORG_ENVIRONMENT\"\r\n                placeholder=\"Enter Environment\"\r\n                aria-describedby=\"cenvironment\"\r\n                pInputText />\r\n            </div>\r\n            <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"capptitle\" class=\"referral-form-labels\">Application Title </label>\r\n              <input\r\n                id=\"capptitle\"\r\n                type=\"text\"\r\n                formControlName=\"apptitle\"\r\n                fieldKey=\"SETTINGS_ORG_APPLICATION_TITLE\"\r\n                placeholder=\"Enter Application Title\"\r\n                aria-describedby=\"capptitle\"\r\n                pInputText />\r\n            </div>\r\n            <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"cbannerlogo\" class=\"referral-form-labels\">Banner Logo </label>\r\n              <input\r\n                id=\"cbannerlogo\"\r\n                type=\"text\"\r\n                formControlName=\"bannerlogo\"\r\n                fieldKey=\"SETTINGS_ORG_BANNER_LOGO\"\r\n                placeholder=\"Enter Banner Logo\"\r\n                aria-describedby=\"cbannerlogo\"\r\n                pInputText />\r\n            </div>\r\n            <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"cbasecolor\" class=\"referral-form-labels\">Base Color </label>\r\n              <input\r\n                id=\"cbasecolor\"\r\n                type=\"text\"\r\n                formControlName=\"basecolor\"\r\n                fieldKey=\"SETTINGS_ORG_BASE_COLOR\"\r\n                placeholder=\"Enter Base Color\"\r\n                aria-describedby=\"cbasecolor\"\r\n                pInputText />\r\n            </div>\r\n          </div>\r\n          <div class=\"p-fluid p-formgrid row\">\r\n            <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"creleaseversion\" class=\"referral-form-labels\">Release Version </label>\r\n              <input\r\n                id=\"creleaseversion\"\r\n                type=\"text\"\r\n                formControlName=\"releaseversion\"\r\n                fieldKey=\"SETTINGS_ORG_RELEASE_VERSION\"\r\n                placeholder=\"Enter Release Version\"\r\n                aria-describedby=\"creleaseversion\"\r\n                pInputText />\r\n            </div>\r\n            <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"creleasenotes\" class=\"referral-form-labels\">Release Notes </label>\r\n              <textarea\r\n                id=\"creleasenotes\"\r\n                formControlName=\"releasenotes\"\r\n                fieldKey=\"SETTINGS_ORG_RELEASE_NOTES\"\r\n                placeholder=\"Enter Application Title\"\r\n                aria-describedby=\"creleasenotes\"\r\n                pInputText></textarea>\r\n            </div>\r\n            <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12 mb-md-4 mb-3 mt-md-4 d-flex align-items-start\" *ngIf=\"RBACORG.smsNotificationEnabled\">\r\n              <p-checkbox inputId=\"smsNotification\" [binary]=\"true\" formControlName=\"smsNotification\"></p-checkbox>\r\n              <label class=\"intake-form-labels mb-0 ml-2\" for=\"smsNotification\">Enable SMS Notification?</label>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n        <div class=\"p-fluid p-formgrid row\">\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"noofattempts\" class=\"referral-form-labels\">Number of attempts</label>\r\n            <input\r\n              id=\"noofattempts\"\r\n              type=\"number\"\r\n              formControlName=\"attempts\"\r\n              fieldKey=\"SETTINGS_ORG_NO_OF_ATTEMPTS\"\r\n              placeholder=\"Enter Number of attempts\"\r\n              aria-describedby=\"noofattempts\"\r\n              min=\"1\"\r\n              pInputText />\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"noofattempts\" class=\"referral-form-labels\">Inactivity Timeout (In Minutes)</label>\r\n            <input\r\n            id=\"timeout\"\r\n            type=\"number\"\r\n            formControlName=\"timeout\"\r\n            fieldKey=\"SETTINGS_ORG_RELEASE_VERSION\"\r\n            placeholder=\"Enter Inactivity Timeout\"\r\n            aria-describedby=\"creleaseversion\"\r\n            pInputText />\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\" *ngIf=\"RBACORG['passExpiryDuration']\">\r\n            <label for=\"noofattempts\" class=\"referral-form-labels\">Password Expiration (in Days)</label>\r\n            <input\r\n              id=\"passwordExpiryDays\"\r\n              type=\"number\"\r\n              formControlName=\"passwordExpiryDays\"\r\n              fieldKey=\"SETTINGS_ORG_RELEASE_VERSION\"\r\n              placeholder=\"Enter Password Expiration Days\"\r\n              aria-describedby=\"creleaseversion\"\r\n              pInputText />\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\" *ngIf=\"RBACORG['familyUserInactive']\">\r\n            <label for=\"noofattempts\" class=\"referral-form-labels\">Family User InActive (in Days)</label>\r\n            <input\r\n              id=\"deactive_days_limit\"\r\n              type=\"number\"\r\n              formControlName=\"deactive_days_limit\"\r\n              fieldKey=\"SETTINGS_ORG_RELEASE_VERSION\"\r\n              placeholder=\"Enter Family User Inactive Months\"\r\n              aria-describedby=\"creleaseversion\"\r\n              pInputText />\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\" *ngIf=\"RBACORG['familyUserDelete']\">\r\n            <label for=\"noofattempts\" class=\"referral-form-labels\">Family User Deleted (in Year)</label>\r\n            <input\r\n              id=\"permanent_delete_days_limit\"\r\n              type=\"number\"\r\n              formControlName=\"permanent_delete_days_limit\"\r\n              fieldKey=\"SETTINGS_ORG_RELEASE_VERSION\"\r\n              placeholder=\"Enter Family User Deleted Years\"\r\n              aria-describedby=\"creleaseversion\"\r\n              pInputText />\r\n          </div>\r\n            <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\" *ngIf=\"RBACORG['promtNotification']\">\r\n              <label for=\"noofattempts\" class=\"referral-form-labels\">Prompt notification (in Days)</label>\r\n              <input\r\n                id=\"PromptNotificationDays\"\r\n                type=\"number\"\r\n                formControlName=\"PromptNotificationDays\"\r\n                fieldKey=\"SETTINGS_ORG_NO_OF_ATTEMPTS\"\r\n                placeholder=\"Enter Number of PromptNotificationDays\"\r\n                aria-describedby=\"PromptNotificationDays\"\r\n                min=\"1\"\r\n                pInputText />\r\n            </div>\r\n            <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\" *ngIf=\"RBACORG['promtNotification']\">\r\n              <label for=\"creleasenotes\" class=\"referral-form-labels\">Prompt notification message </label>\r\n              <textarea\r\n                id=\"PromptNotificationmsg\"\r\n                formControlName=\"PromptNotificationmsg\"\r\n                fieldKey=\"SETTINGS_ORG_RELEASE_NOTES\"\r\n                placeholder=\"Prompt notification message\"\r\n                aria-describedby=\"Promptnotificationmessage\"\r\n                pInputText></textarea>\r\n            </div>\r\n        </div>\r\n        <div class=\"d-flex align-items-center justify-content-end mt-2\">\r\n          <button fieldKey=\"SETTINGS_ORG_CANCEL\" class=\"mb-md-0 mb-2 mr-2 btn bg-white text-primary border border-primary btncancel\" (click)=\"clearForm()\">\r\n            Cancel\r\n          </button>\r\n          <button class=\"mb-md-0 mb-2 btn btn-primary btncommon\" (click)=\"saveOrganization()\" fieldKey=\"SETTINGS_ORG_ADD_ORGANISATION\">\r\n            {{ saveMode === 'UPDATE' ? 'Update Organization' : 'Add Organization' }}\r\n          </button>\r\n        </div>\r\n      </p-card>\r\n\r\n      <p-card\r\n        *ngIf=\"nodeType === 'managementgroup'\"\r\n        id=\"managementGroupForm\"\r\n        class=\"rbac-card\"\r\n        [formGroup]=\"managementGroupForm\"\r\n        [style]=\"{ width: '100%', 'margin-bottom': '2em' }\">\r\n        <div class=\"strip_head toggleleft\">\r\n          <span class=\"report_head font-weight-bold\">Management Group</span>\r\n        </div>\r\n\r\n        <input id=\"lid\" type=\"hidden\" formControlName=\"id\" />\r\n        <input id=\"lorganizationid\" type=\"hidden\" formControlName=\"organizationid\" />\r\n        <input id=\"lparentid\" type=\"hidden\" formControlName=\"parentid\" />\r\n\r\n        <div class=\"p-fluid p-formgrid row\">\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"lname\" class=\"referral-form-labels\"\r\n              >Name\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input\r\n              id=\"lname\"\r\n              type=\"text\"\r\n              placeholder=\"Enter Name\"\r\n              formControlName=\"name\"\r\n              aria-describedby=\"lname\"\r\n              pInputText />\r\n            <div *ngIf=\"managementGroupForm.controls['name'].errors\">\r\n              <small *ngIf=\"managementGroupForm.controls['name'].invalid\" class=\"p-error block\">Name is required </small>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"llocation\" class=\"referral-form-labels\"\r\n              >Location\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input\r\n              id=\"llocation\"\r\n              type=\"text\"\r\n              placeholder=\"Enter Location\"\r\n              formControlName=\"location\"\r\n              aria-describedby=\"llocation\"\r\n              pInputText />\r\n            <div *ngIf=\"managementGroupForm.controls['location'].errors\">\r\n              <small *ngIf=\"managementGroupForm.controls['location'].invalid\" class=\"p-error block\"\r\n                >Location is required\r\n              </small>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"lzip\" class=\"referral-form-labels\"\r\n              >Zip\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input\r\n              id=\"lzip\"\r\n              type=\"text\"\r\n              placeholder=\"Enter Zip Code\"\r\n              formControlName=\"zip\"\r\n              aria-describedby=\"lzip\"\r\n              pInputText />\r\n            <div *ngIf=\"managementGroupForm.controls['zip'].errors\">\r\n              <small *ngIf=\"managementGroupForm.controls['zip'].invalid\" class=\"p-error block\"\r\n                >Zip code is required\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"d-flex align-items-center justify-content-end mt-2\">\r\n          <button class=\"mb-md-0 mb-2 mr-2 btn bg-white text-primary btncancel\" (click)=\"clearForm()\">\r\n            Cancel\r\n          </button>\r\n          <button type=\"submit\" class=\"mb-md-0 mb-2 btn btn-primary btncommon\" (click)=\"saveManagementGroup()\">\r\n            {{ saveMode === 'UPDATE' ? 'Update Management Group' : 'Add Management Group' }}\r\n          </button>\r\n        </div>\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".head-div{padding-top:9px;padding-left:7px}.bgiconsearch{margin-bottom:5px;padding-bottom:0;font-size:13px}.masterempty{max-width:none;border-radius:50%;height:40px;width:40px}.row.masterdata{margin:0;border-bottom:solid 1px var(--table-border);padding:5px 0;cursor:pointer}.overflow_txt{overflow:hidden;text-overflow:ellipsis}span.namemaster{font-size:13px;color:var(--text-dark)}.masterid,span.emailmaster{font-size:13px;color:#9b9b9b}span.deletemaster{position:absolute;top:0;right:15px;z-index:9;width:20px;float:right;cursor:pointer}span.deletemaster img{width:12px}.activate{position:absolute;margin-top:-46px;margin-left:44rem}.toggleleft{font-size:14px;font-weight:600;display:block;margin-top:-12px;padding-bottom:13px}.report_button{margin-left:12px}:host ::ng-deep .ui-tree.permission-tree{width:100%}.parent-org{width:98%;padding:8px 0 8px 7px;background-color:var(--bg-light);border-radius:3px;border:1px solid var(--table-border)}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2$1.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2$1.MinValidator, selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]", inputs: ["min"] }, { kind: "directive", type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i2$1.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { kind: "component", type: i8.Tree, selector: "p-tree", inputs: ["value", "selectionMode", "selection", "style", "styleClass", "contextMenu", "layout", "draggableScope", "droppableScope", "draggableNodes", "droppableNodes", "metaKeySelection", "propagateSelectionUp", "propagateSelectionDown", "loading", "loadingIcon", "emptyMessage", "ariaLabel", "togglerAriaLabel", "ariaLabelledBy", "validateDrop", "filter", "filterBy", "filterMode", "filterPlaceholder", "filteredNodes", "filterLocale", "scrollHeight", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "indentation", "_templateMap", "trackBy", "virtualNodeHeight"], outputs: ["selectionChange", "onNodeSelect", "onNodeUnselect", "onNodeExpand", "onNodeCollapse", "onNodeContextMenuSelect", "onNodeDrop", "onLazyLoad", "onScroll", "onScrollIndexChange", "onFilter"] }, { kind: "component", type: i9.Checkbox, selector: "p-checkbox", inputs: ["value", "name", "disabled", "binary", "label", "ariaLabelledBy", "ariaLabel", "tabindex", "inputId", "style", "styleClass", "labelStyleClass", "formControl", "checkboxIcon", "readonly", "required", "trueValue", "falseValue"], outputs: ["onChange"] }, { kind: "component", type: i10.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { kind: "directive", type: i11.InputText, selector: "[pInputText]" }, { kind: "component", type: i12.ContextMenu, selector: "p-contextMenu", inputs: ["model", "triggerEvent", "target", "global", "style", "styleClass", "appendTo", "autoZIndex", "baseZIndex", "id", "ariaLabel", "ariaLabelledBy"], outputs: ["onShow", "onHide"] }, { kind: "component", type: i13.ConfirmPopup, selector: "p-confirmPopup", inputs: ["key", "defaultFocus", "showTransitionOptions", "hideTransitionOptions", "autoZIndex", "baseZIndex", "style", "styleClass", "visible"] }, { kind: "directive", type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }, { kind: "component", type: AlertComponent, selector: "app-alert" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OrganizationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cardi-organization', template: "<app-alert></app-alert>\r\n<div class=\"permission\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4 col-md-6 col-12\">\r\n      <div class=\"clearfix\"></div>\r\n      <div class=\"tab-content py-2 px-2 px-sm-0\">\r\n        <div class=\"tab-pane fade show active\">\r\n          <div class=\"masteracess\">\r\n            <p-tree\r\n              [value]=\"organizations\"\r\n              selectionMode=\"multiple\"\r\n              [(selection)]=\"selectedItem\"\r\n              (onNodeSelect)=\"nodeSelect($event)\"\r\n              (onNodeContextMenuSelect)=\"onNodeContextMenuSelect($event)\"\r\n              [contextMenu]=\"treeContextMenu\"></p-tree>\r\n            <p-contextMenu #treeContextMenu [model]=\"menuItems\"></p-contextMenu>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-8 col-md-6 col-12 master-right mt-2\">\r\n      <p-confirmPopup></p-confirmPopup>\r\n      <p-card\r\n        *ngIf=\"nodeType === 'organization'\"\r\n        id=\"pageForm\"\r\n        class=\"rbac-card\"\r\n        [formGroup]=\"organizationForm\"\r\n        [style]=\"{ width: '100%'}\">\r\n        <div class=\"strip_head toggleleft\">\r\n          <span class=\"report_head font-weight-bold\">Organization</span>\r\n        </div>\r\n        <input id=\"cid\" type=\"hidden\" formControlName=\"id\" />\r\n        <div class=\"p-fluid p-formgrid row\" *ngIf=\"orgName\">\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"orgname\" class=\"referral-form-labels\"> Parent Organization </label><br />\r\n            <label class=\"referral-form-labels parent-org\"> {{ orgName }} </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"p-fluid p-formgrid row\">\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"cname\" class=\"referral-form-labels\"\r\n              >Name\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input\r\n              id=\"cname\"\r\n              type=\"text\"\r\n              fieldKey=\"SETTINGS_ORG_NAME\"\r\n              formControlName=\"name\"\r\n              placeholder=\"Enter Name\"\r\n              aria-describedby=\"cname\"\r\n              pInputText />\r\n            <div\r\n              *ngIf=\"\r\n                organizationForm.controls['name'].invalid &&\r\n                (organizationForm.controls['name'].dirty || organizationForm.controls['name'].touched)\r\n              \">\r\n              <small *ngIf=\"organizationForm.controls['name'].invalid\" class=\"p-error block\">Name is required </small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"p-field col-lg-4 d-none\"></div>\r\n          <div class=\"p-field col-lg-4 d-none\"></div>\r\n          <div class=\"p-field col-lg-4 d-none\"></div>\r\n        </div>\r\n        <ng-container formGroupName=\"additionalinfo\">\r\n          <div class=\"p-fluid p-formgrid row\">\r\n            <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"cenvironment\" class=\"referral-form-labels\">Environment </label>\r\n              <input\r\n                id=\"cenvironment\"\r\n                type=\"text\"\r\n                formControlName=\"environment\"\r\n                fieldKey=\"SETTINGS_ORG_ENVIRONMENT\"\r\n                placeholder=\"Enter Environment\"\r\n                aria-describedby=\"cenvironment\"\r\n                pInputText />\r\n            </div>\r\n            <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"capptitle\" class=\"referral-form-labels\">Application Title </label>\r\n              <input\r\n                id=\"capptitle\"\r\n                type=\"text\"\r\n                formControlName=\"apptitle\"\r\n                fieldKey=\"SETTINGS_ORG_APPLICATION_TITLE\"\r\n                placeholder=\"Enter Application Title\"\r\n                aria-describedby=\"capptitle\"\r\n                pInputText />\r\n            </div>\r\n            <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"cbannerlogo\" class=\"referral-form-labels\">Banner Logo </label>\r\n              <input\r\n                id=\"cbannerlogo\"\r\n                type=\"text\"\r\n                formControlName=\"bannerlogo\"\r\n                fieldKey=\"SETTINGS_ORG_BANNER_LOGO\"\r\n                placeholder=\"Enter Banner Logo\"\r\n                aria-describedby=\"cbannerlogo\"\r\n                pInputText />\r\n            </div>\r\n            <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"cbasecolor\" class=\"referral-form-labels\">Base Color </label>\r\n              <input\r\n                id=\"cbasecolor\"\r\n                type=\"text\"\r\n                formControlName=\"basecolor\"\r\n                fieldKey=\"SETTINGS_ORG_BASE_COLOR\"\r\n                placeholder=\"Enter Base Color\"\r\n                aria-describedby=\"cbasecolor\"\r\n                pInputText />\r\n            </div>\r\n          </div>\r\n          <div class=\"p-fluid p-formgrid row\">\r\n            <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"creleaseversion\" class=\"referral-form-labels\">Release Version </label>\r\n              <input\r\n                id=\"creleaseversion\"\r\n                type=\"text\"\r\n                formControlName=\"releaseversion\"\r\n                fieldKey=\"SETTINGS_ORG_RELEASE_VERSION\"\r\n                placeholder=\"Enter Release Version\"\r\n                aria-describedby=\"creleaseversion\"\r\n                pInputText />\r\n            </div>\r\n            <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n              <label for=\"creleasenotes\" class=\"referral-form-labels\">Release Notes </label>\r\n              <textarea\r\n                id=\"creleasenotes\"\r\n                formControlName=\"releasenotes\"\r\n                fieldKey=\"SETTINGS_ORG_RELEASE_NOTES\"\r\n                placeholder=\"Enter Application Title\"\r\n                aria-describedby=\"creleasenotes\"\r\n                pInputText></textarea>\r\n            </div>\r\n            <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12 mb-md-4 mb-3 mt-md-4 d-flex align-items-start\" *ngIf=\"RBACORG.smsNotificationEnabled\">\r\n              <p-checkbox inputId=\"smsNotification\" [binary]=\"true\" formControlName=\"smsNotification\"></p-checkbox>\r\n              <label class=\"intake-form-labels mb-0 ml-2\" for=\"smsNotification\">Enable SMS Notification?</label>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n        <div class=\"p-fluid p-formgrid row\">\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"noofattempts\" class=\"referral-form-labels\">Number of attempts</label>\r\n            <input\r\n              id=\"noofattempts\"\r\n              type=\"number\"\r\n              formControlName=\"attempts\"\r\n              fieldKey=\"SETTINGS_ORG_NO_OF_ATTEMPTS\"\r\n              placeholder=\"Enter Number of attempts\"\r\n              aria-describedby=\"noofattempts\"\r\n              min=\"1\"\r\n              pInputText />\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"noofattempts\" class=\"referral-form-labels\">Inactivity Timeout (In Minutes)</label>\r\n            <input\r\n            id=\"timeout\"\r\n            type=\"number\"\r\n            formControlName=\"timeout\"\r\n            fieldKey=\"SETTINGS_ORG_RELEASE_VERSION\"\r\n            placeholder=\"Enter Inactivity Timeout\"\r\n            aria-describedby=\"creleaseversion\"\r\n            pInputText />\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\" *ngIf=\"RBACORG['passExpiryDuration']\">\r\n            <label for=\"noofattempts\" class=\"referral-form-labels\">Password Expiration (in Days)</label>\r\n            <input\r\n              id=\"passwordExpiryDays\"\r\n              type=\"number\"\r\n              formControlName=\"passwordExpiryDays\"\r\n              fieldKey=\"SETTINGS_ORG_RELEASE_VERSION\"\r\n              placeholder=\"Enter Password Expiration Days\"\r\n              aria-describedby=\"creleaseversion\"\r\n              pInputText />\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\" *ngIf=\"RBACORG['familyUserInactive']\">\r\n            <label for=\"noofattempts\" class=\"referral-form-labels\">Family User InActive (in Days)</label>\r\n            <input\r\n              id=\"deactive_days_limit\"\r\n              type=\"number\"\r\n              formControlName=\"deactive_days_limit\"\r\n              fieldKey=\"SETTINGS_ORG_RELEASE_VERSION\"\r\n              placeholder=\"Enter Family User Inactive Months\"\r\n              aria-describedby=\"creleaseversion\"\r\n              pInputText />\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\" *ngIf=\"RBACORG['familyUserDelete']\">\r\n            <label for=\"noofattempts\" class=\"referral-form-labels\">Family User Deleted (in Year)</label>\r\n            <input\r\n              id=\"permanent_delete_days_limit\"\r\n              type=\"number\"\r\n              formControlName=\"permanent_delete_days_limit\"\r\n              fieldKey=\"SETTINGS_ORG_RELEASE_VERSION\"\r\n              placeholder=\"Enter Family User Deleted Years\"\r\n              aria-describedby=\"creleaseversion\"\r\n              pInputText />\r\n          </div>\r\n            <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\" *ngIf=\"RBACORG['promtNotification']\">\r\n              <label for=\"noofattempts\" class=\"referral-form-labels\">Prompt notification (in Days)</label>\r\n              <input\r\n                id=\"PromptNotificationDays\"\r\n                type=\"number\"\r\n                formControlName=\"PromptNotificationDays\"\r\n                fieldKey=\"SETTINGS_ORG_NO_OF_ATTEMPTS\"\r\n                placeholder=\"Enter Number of PromptNotificationDays\"\r\n                aria-describedby=\"PromptNotificationDays\"\r\n                min=\"1\"\r\n                pInputText />\r\n            </div>\r\n            <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\" *ngIf=\"RBACORG['promtNotification']\">\r\n              <label for=\"creleasenotes\" class=\"referral-form-labels\">Prompt notification message </label>\r\n              <textarea\r\n                id=\"PromptNotificationmsg\"\r\n                formControlName=\"PromptNotificationmsg\"\r\n                fieldKey=\"SETTINGS_ORG_RELEASE_NOTES\"\r\n                placeholder=\"Prompt notification message\"\r\n                aria-describedby=\"Promptnotificationmessage\"\r\n                pInputText></textarea>\r\n            </div>\r\n        </div>\r\n        <div class=\"d-flex align-items-center justify-content-end mt-2\">\r\n          <button fieldKey=\"SETTINGS_ORG_CANCEL\" class=\"mb-md-0 mb-2 mr-2 btn bg-white text-primary border border-primary btncancel\" (click)=\"clearForm()\">\r\n            Cancel\r\n          </button>\r\n          <button class=\"mb-md-0 mb-2 btn btn-primary btncommon\" (click)=\"saveOrganization()\" fieldKey=\"SETTINGS_ORG_ADD_ORGANISATION\">\r\n            {{ saveMode === 'UPDATE' ? 'Update Organization' : 'Add Organization' }}\r\n          </button>\r\n        </div>\r\n      </p-card>\r\n\r\n      <p-card\r\n        *ngIf=\"nodeType === 'managementgroup'\"\r\n        id=\"managementGroupForm\"\r\n        class=\"rbac-card\"\r\n        [formGroup]=\"managementGroupForm\"\r\n        [style]=\"{ width: '100%', 'margin-bottom': '2em' }\">\r\n        <div class=\"strip_head toggleleft\">\r\n          <span class=\"report_head font-weight-bold\">Management Group</span>\r\n        </div>\r\n\r\n        <input id=\"lid\" type=\"hidden\" formControlName=\"id\" />\r\n        <input id=\"lorganizationid\" type=\"hidden\" formControlName=\"organizationid\" />\r\n        <input id=\"lparentid\" type=\"hidden\" formControlName=\"parentid\" />\r\n\r\n        <div class=\"p-fluid p-formgrid row\">\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"lname\" class=\"referral-form-labels\"\r\n              >Name\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input\r\n              id=\"lname\"\r\n              type=\"text\"\r\n              placeholder=\"Enter Name\"\r\n              formControlName=\"name\"\r\n              aria-describedby=\"lname\"\r\n              pInputText />\r\n            <div *ngIf=\"managementGroupForm.controls['name'].errors\">\r\n              <small *ngIf=\"managementGroupForm.controls['name'].invalid\" class=\"p-error block\">Name is required </small>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"llocation\" class=\"referral-form-labels\"\r\n              >Location\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input\r\n              id=\"llocation\"\r\n              type=\"text\"\r\n              placeholder=\"Enter Location\"\r\n              formControlName=\"location\"\r\n              aria-describedby=\"llocation\"\r\n              pInputText />\r\n            <div *ngIf=\"managementGroupForm.controls['location'].errors\">\r\n              <small *ngIf=\"managementGroupForm.controls['location'].invalid\" class=\"p-error block\"\r\n                >Location is required\r\n              </small>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"lzip\" class=\"referral-form-labels\"\r\n              >Zip\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input\r\n              id=\"lzip\"\r\n              type=\"text\"\r\n              placeholder=\"Enter Zip Code\"\r\n              formControlName=\"zip\"\r\n              aria-describedby=\"lzip\"\r\n              pInputText />\r\n            <div *ngIf=\"managementGroupForm.controls['zip'].errors\">\r\n              <small *ngIf=\"managementGroupForm.controls['zip'].invalid\" class=\"p-error block\"\r\n                >Zip code is required\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"d-flex align-items-center justify-content-end mt-2\">\r\n          <button class=\"mb-md-0 mb-2 mr-2 btn bg-white text-primary btncancel\" (click)=\"clearForm()\">\r\n            Cancel\r\n          </button>\r\n          <button type=\"submit\" class=\"mb-md-0 mb-2 btn btn-primary btncommon\" (click)=\"saveManagementGroup()\">\r\n            {{ saveMode === 'UPDATE' ? 'Update Management Group' : 'Add Management Group' }}\r\n          </button>\r\n        </div>\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".head-div{padding-top:9px;padding-left:7px}.bgiconsearch{margin-bottom:5px;padding-bottom:0;font-size:13px}.masterempty{max-width:none;border-radius:50%;height:40px;width:40px}.row.masterdata{margin:0;border-bottom:solid 1px var(--table-border);padding:5px 0;cursor:pointer}.overflow_txt{overflow:hidden;text-overflow:ellipsis}span.namemaster{font-size:13px;color:var(--text-dark)}.masterid,span.emailmaster{font-size:13px;color:#9b9b9b}span.deletemaster{position:absolute;top:0;right:15px;z-index:9;width:20px;float:right;cursor:pointer}span.deletemaster img{width:12px}.activate{position:absolute;margin-top:-46px;margin-left:44rem}.toggleleft{font-size:14px;font-weight:600;display:block;margin-top:-12px;padding-bottom:13px}.report_button{margin-left:12px}:host ::ng-deep .ui-tree.permission-tree{width:100%}.parent-org{width:98%;padding:8px 0 8px 7px;background-color:var(--bg-light);border-radius:3px;border:1px solid var(--table-border)}\n"] }]
        }], ctorParameters: function () { return [{ type: ManagementGroupsService }, { type: i2$1.FormBuilder }, { type: AlertService }, { type: i4.ConfirmationService }, { type: PermissionStore }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }] } });
class RBACINFO {
    apiHost = '';
    tokenKey = '';
    others;
    orgID;
    environment;
    smsNotificationEnabled;
}
class Environment {
    mstrUsername;
    mstrPassword;
    mstrURL;
    mstrProjectID;
    applicationid;
    priority;
}

class RbacOrgComponent {
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
                this._storeservice.setData('HTTPSERVICE', val.httpService);
            }
        });
        this._storeservice.setData('RBACORG', this.RBACORG);
        this.permissionStore.setStore(this.PERMISSION);
        this._storeservice.setData('INPUTVALIDATIONMETHOD', this.INPUTVALIDATIONMETHOD);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacOrgComponent, deps: [{ token: PermissionStore }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: RbacOrgComponent, selector: "rbac-org", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", COMMONSERVICE: "COMMONSERVICE", INPUTVALIDATIONMETHOD: "INPUTVALIDATIONMETHOD" }, ngImport: i0, template: `
    <cardi-organization [RBACORG]="RBACORG" [PERMISSION]="PERMISSION"></cardi-organization>
  `, isInline: true, dependencies: [{ kind: "component", type: OrganizationComponent, selector: "cardi-organization", inputs: ["RBACORG", "PERMISSION"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacOrgComponent, decorators: [{
            type: Component,
            args: [{ selector: 'rbac-org', template: `
    <cardi-organization [RBACORG]="RBACORG" [PERMISSION]="PERMISSION"></cardi-organization>
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

class DirectivesModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DirectivesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DirectivesModule, declarations: [PermissionDirective], imports: [CommonModule], exports: [PermissionDirective] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DirectivesModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DirectivesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [PermissionDirective],
                    imports: [CommonModule],
                    exports: [PermissionDirective]
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

class PicsRbacOrgModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsRbacOrgModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: PicsRbacOrgModule, declarations: [OrganizationComponent], imports: [CommonModule,
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
            AlertModule], exports: [OrganizationComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsRbacOrgModule, imports: [CommonModule,
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsRbacOrgModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        OrganizationComponent
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
                        OrganizationComponent
                    ],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
                }]
        }] });

class RbacOrgModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacOrgModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: RbacOrgModule, declarations: [RbacOrgComponent], imports: [PicsRbacOrgModule], exports: [RbacOrgComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacOrgModule, providers: [ManagementGroupsService, HttpClient, HttpService, AlertService, ConfirmationService, PermissionStore, DataStoreService], imports: [PicsRbacOrgModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacOrgModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        RbacOrgComponent
                    ],
                    imports: [
                        PicsRbacOrgModule
                    ],
                    exports: [
                        RbacOrgComponent
                    ],
                    providers: [ManagementGroupsService, HttpClient, HttpService, AlertService, ConfirmationService, PermissionStore, DataStoreService]
                }]
        }] });

/*
 * Public API Surface of rbac-org
 */

/**
 * Generated bundle index. Do not edit.
 */

export { RbacOrgComponent, RbacOrgModule, RbacOrgService };
//# sourceMappingURL=pics-core-rbac-org.mjs.map
