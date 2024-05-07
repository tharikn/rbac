(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/forms'), require('@angular/common/http'), require('rxjs/add/operator/map'), require('rxjs/internal/observable/throwError'), require('rxjs/operators'), require('@ngrx/store'), require('primeng/api'), require('@ng-bootstrap/ng-bootstrap'), require('@ngrx/router-store'), require('@angular/router'), require('ngxf-uploader'), require('@angular/common'), require('primeng/checkbox'), require('primeng/button'), require('primeng/accordion'), require('primeng/avatar'), require('primeng/badge'), require('primeng/calendar'), require('primeng/card'), require('primeng/confirmdialog'), require('primeng/confirmpopup'), require('primeng/contextmenu'), require('primeng/dialog'), require('primeng/dropdown'), require('primeng/editor'), require('primeng/fieldset'), require('primeng/fileupload'), require('primeng/inputmask'), require('primeng/inputswitch'), require('primeng/inputtext'), require('primeng/inputtextarea'), require('primeng/knob'), require('primeng/message'), require('primeng/multiselect'), require('primeng/orderlist'), require('primeng/password'), require('primeng/progressspinner'), require('primeng/radiobutton'), require('primeng/ripple'), require('primeng/sidebar'), require('primeng/speeddial'), require('primeng/steps'), require('primeng/table'), require('primeng/tabmenu'), require('primeng/tabview'), require('primeng/toast'), require('primeng/treeselect')) :
    typeof define === 'function' && define.amd ? define('@pics-core/login', ['exports', '@angular/core', 'rxjs', '@angular/forms', '@angular/common/http', 'rxjs/add/operator/map', 'rxjs/internal/observable/throwError', 'rxjs/operators', '@ngrx/store', 'primeng/api', '@ng-bootstrap/ng-bootstrap', '@ngrx/router-store', '@angular/router', 'ngxf-uploader', '@angular/common', 'primeng/checkbox', 'primeng/button', 'primeng/accordion', 'primeng/avatar', 'primeng/badge', 'primeng/calendar', 'primeng/card', 'primeng/confirmdialog', 'primeng/confirmpopup', 'primeng/contextmenu', 'primeng/dialog', 'primeng/dropdown', 'primeng/editor', 'primeng/fieldset', 'primeng/fileupload', 'primeng/inputmask', 'primeng/inputswitch', 'primeng/inputtext', 'primeng/inputtextarea', 'primeng/knob', 'primeng/message', 'primeng/multiselect', 'primeng/orderlist', 'primeng/password', 'primeng/progressspinner', 'primeng/radiobutton', 'primeng/ripple', 'primeng/sidebar', 'primeng/speeddial', 'primeng/steps', 'primeng/table', 'primeng/tabmenu', 'primeng/tabview', 'primeng/toast', 'primeng/treeselect'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global["pics-core"] = global["pics-core"] || {}, global["pics-core"].login = {}), global.ng.core, global.rxjs, global.ng.forms, global.ng.common.http, global.rxjs["add/operator/map"], global.rxjs["internal/observable/throwError"], global.rxjs.operators, global.i1$1, global.api, global.i4, global.routerStore, global.ng.router, global.i1$2, global.ng.common, global.i8, global.i9, global.accordion, global.avatar, global.badge, global.calendar, global.card, global.confirmdialog, global.confirmpopup, global.contextmenu, global.dialog, global.dropdown, global.editor, global.fieldset, global.fileupload, global.inputmask, global.inputswitch, global.inputtext, global.inputtextarea, global.knob, global.message, global.multiselect, global.orderlist, global.password, global.progressspinner, global.radiobutton, global.ripple, global.sidebar, global.speeddial, global.steps, global.table, global.tabmenu, global.tabview, global.toast, global.treeselect));
})(this, (function (exports, i0, rxjs, i3, i1, map, throwError, operators, i1$1, api, i4, routerStore, i2, i1$2, i10, i8, i9, accordion, avatar, badge, calendar, card, confirmdialog, confirmpopup, contextmenu, dialog, dropdown, editor, fieldset, fileupload, inputmask, inputswitch, inputtext, inputtextarea, knob, message, multiselect, orderlist, password, progressspinner, radiobutton, ripple, sidebar, speeddial, steps, table, tabmenu, tabview, toast, treeselect) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$1);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$2);
    var i10__namespace = /*#__PURE__*/_interopNamespace(i10);
    var i8__namespace = /*#__PURE__*/_interopNamespace(i8);
    var i9__namespace = /*#__PURE__*/_interopNamespace(i9);

    var LoginService = /** @class */ (function () {
        function LoginService() {
        }
        return LoginService;
    }());
    LoginService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LoginService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    LoginService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LoginService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LoginService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var RoleConfig = /** @class */ (function () {
        function RoleConfig() {
        }
        return RoleConfig;
    }());
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
    var UserConfig = /** @class */ (function () {
        function UserConfig() {
        }
        return UserConfig;
    }());
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
    var AttachmentConfig = /** @class */ (function () {
        function AttachmentConfig() {
        }
        return AttachmentConfig;
    }());
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
    var PolicyGroupConfig = /** @class */ (function () {
        function PolicyGroupConfig() {
        }
        return PolicyGroupConfig;
    }());
    PolicyGroupConfig.EndPoint = {
        policyGroup: {
            getPolicyGroupList: '/platform/page-designer/policyGroup',
            getAllPolicyGroupList: '/platform/page-designer/policyGroup/all',
            createPolicyGroup: '/platform/page-designer/policyGroup',
            getOrgPolicyGroups: '/platform/page-designer/policyGroup/organization/{organizationid}'
        }
    };
    var PermissionsURL = /** @class */ (function () {
        function PermissionsURL() {
        }
        return PermissionsURL;
    }());
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
    var AccessManagementConfig$1 = /** @class */ (function () {
        function AccessManagementConfig() {
        }
        return AccessManagementConfig;
    }());
    AccessManagementConfig$1.EndPoint = {
        Organization: {
            getOrganizationList: '/org/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        }
    };
    var MasterURL = /** @class */ (function () {
        function MasterURL() {
        }
        return MasterURL;
    }());
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
    var AuthURL = /** @class */ (function () {
        function AuthURL() {
        }
        return AuthURL;
    }());
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
    var RBACINFO = /** @class */ (function () {
        function RBACINFO() {
            this.apiHost = '';
            this.tokenKey = '';
        }
        return RBACINFO;
    }());
    var Environment = /** @class */ (function () {
        function Environment() {
        }
        return Environment;
    }());

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
        function accept(f) { if (f !== void 0 && typeof f !== "function")
            throw new TypeError("Function expected"); return f; }
        var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
        var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
        var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
        var _, done = false;
        for (var i = decorators.length - 1; i >= 0; i--) {
            var context = {};
            for (var p in contextIn)
                context[p] = p === "access" ? {} : contextIn[p];
            for (var p in contextIn.access)
                context.access[p] = contextIn.access[p];
            context.addInitializer = function (f) { if (done)
                throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
            var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
            if (kind === "accessor") {
                if (result === void 0)
                    continue;
                if (result === null || typeof result !== "object")
                    throw new TypeError("Object expected");
                if (_ = accept(result.get))
                    descriptor.get = _;
                if (_ = accept(result.set))
                    descriptor.set = _;
                if (_ = accept(result.init))
                    initializers.unshift(_);
            }
            else if (_ = accept(result)) {
                if (kind === "field")
                    initializers.unshift(_);
                else
                    descriptor[key] = _;
            }
        }
        if (target)
            Object.defineProperty(target, contextIn.name, descriptor);
        done = true;
    }
    ;
    function __runInitializers(thisArg, initializers, value) {
        var useValue = arguments.length > 2;
        for (var i = 0; i < initializers.length; i++) {
            value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
        }
        return useValue ? value : void 0;
    }
    ;
    function __propKey(x) {
        return typeof x === "symbol" ? x : "".concat(x);
    }
    ;
    function __setFunctionName(f, name, prefix) {
        if (typeof name === "symbol")
            name = name.description ? "[".concat(name.description, "]") : "";
        return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
    }
    ;
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function () { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }
    function __classPrivateFieldIn(state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function"))
            throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    }
    function __addDisposableResource(env, value, async) {
        if (value !== null && value !== void 0) {
            if (typeof value !== "object" && typeof value !== "function")
                throw new TypeError("Object expected.");
            var dispose;
            if (async) {
                if (!Symbol.asyncDispose)
                    throw new TypeError("Symbol.asyncDispose is not defined.");
                dispose = value[Symbol.asyncDispose];
            }
            if (dispose === void 0) {
                if (!Symbol.dispose)
                    throw new TypeError("Symbol.dispose is not defined.");
                dispose = value[Symbol.dispose];
            }
            if (typeof dispose !== "function")
                throw new TypeError("Object not disposable.");
            env.stack.push({ value: value, dispose: dispose, async: async });
        }
        else if (async) {
            env.stack.push({ async: true });
        }
        return value;
    }
    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    function __disposeResources(env) {
        function fail(e) {
            env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        function next() {
            while (env.stack.length) {
                var rec = env.stack.pop();
                try {
                    var result = rec.dispose && rec.dispose.call(rec.value);
                    if (rec.async)
                        return Promise.resolve(result).then(next, function (e) { fail(e); return next(); });
                }
                catch (e) {
                    fail(e);
                }
            }
            if (env.hasError)
                throw env.error;
        }
        return next();
    }
    var tslib_es6 = {
        __extends: __extends,
        __assign: __assign,
        __rest: __rest,
        __decorate: __decorate,
        __param: __param,
        __metadata: __metadata,
        __awaiter: __awaiter,
        __generator: __generator,
        __createBinding: __createBinding,
        __exportStar: __exportStar,
        __values: __values,
        __read: __read,
        __spread: __spread,
        __spreadArrays: __spreadArrays,
        __spreadArray: __spreadArray,
        __await: __await,
        __asyncGenerator: __asyncGenerator,
        __asyncDelegator: __asyncDelegator,
        __asyncValues: __asyncValues,
        __makeTemplateObject: __makeTemplateObject,
        __importStar: __importStar,
        __importDefault: __importDefault,
        __classPrivateFieldGet: __classPrivateFieldGet,
        __classPrivateFieldSet: __classPrivateFieldSet,
        __classPrivateFieldIn: __classPrivateFieldIn,
        __addDisposableResource: __addDisposableResource,
        __disposeResources: __disposeResources,
    };

    var Store = /** @class */ (function () {
        function Store(initialState) {
            this._state$ = new rxjs.BehaviorSubject(initialState);
            this.state$ = this._state$.asObservable();
        }
        Object.defineProperty(Store.prototype, "state", {
            get: function () {
                return this._state$.getValue();
            },
            enumerable: false,
            configurable: true
        });
        Store.prototype.setState = function (nextState) {
            this._state$.next(nextState);
        };
        return Store;
    }());

    var PermissionStore = /** @class */ (function (_super) {
        __extends(PermissionStore, _super);
        function PermissionStore() {
            return _super.call(this, {}) || this;
        }
        PermissionStore.prototype.setStore = function (data) {
            if (data) {
                this.setState(Object.assign(Object.assign({}, this.state), data));
            }
        };
        PermissionStore.prototype.getStore = function (type) {
            if (type === void 0) { type = 'P'; }
            if (type === 'P')
                return rxjs.of(this.state);
            else
                return rxjs.of(this.state);
        };
        PermissionStore.prototype.flat = function (array) {
            var _this = this;
            var result = [];
            if (array) {
                array.forEach(function (item) {
                    result.push(item);
                    if (item && Array.isArray(item)) {
                        result = result.concat(_this.flat(item));
                    }
                });
            }
            return result;
        };
        return PermissionStore;
    }(Store));
    PermissionStore.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionStore, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    PermissionStore.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionStore });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionStore, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return []; } });

    var DataStoreService = /** @class */ (function () {
        function DataStoreService() {
            this.currentStoreSubject = new rxjs.BehaviorSubject({});
            this.currentStore = this.currentStoreSubject.asObservable();
            // test code
        }
        DataStoreService.prototype.setData = function (key, value) {
            var currentStore = this.getCurrentStore();
            currentStore[key] = value;
            this.currentStoreSubject.next(currentStore);
        };
        DataStoreService.prototype.setObject = function (value) {
            this.currentStoreSubject.next(value);
        };
        DataStoreService.prototype.getData = function (key) {
            var currentStore = this.getCurrentStore();
            return currentStore[key];
        };
        DataStoreService.prototype.clearStore = function () {
            var currentStore = this.getCurrentStore();
            Object.keys(currentStore).forEach(function (key) {
                delete currentStore[key];
            });
            this.currentStoreSubject.next(currentStore);
        };
        DataStoreService.prototype.getCurrentStore = function () {
            return this.currentStoreSubject.value;
        };
        return DataStoreService;
    }());
    DataStoreService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataStoreService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    DataStoreService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataStoreService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataStoreService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return []; } });

    var StorageService = /** @class */ (function () {
        function StorageService(Storage) {
            this.Storage = Storage;
        }
        StorageService.prototype.getItem = function (key) {
            return this.Storage.getItem(key);
        };
        StorageService.prototype.setItem = function (key, item) {
            return this.Storage.setItem(key, item);
        };
        StorageService.prototype.getObj = function (key, safe) {
            if (safe === void 0) { safe = true; }
            try {
                var item = this.getItem(key);
                return JSON.parse(item);
            }
            catch (e) {
                if (!safe) {
                    throw e;
                }
            }
        };
        StorageService.prototype.setObj = function (key, item) {
            return this.setItem(key, JSON.stringify(item));
        };
        StorageService.prototype.removeItem = function (key) {
            this.Storage.removeItem(key);
        };
        StorageService.prototype.clear = function () {
            this.Storage.clear();
        };
        return StorageService;
    }());

    var LocalService = /** @class */ (function (_super) {
        __extends(LocalService, _super);
        function LocalService() {
            return _super.call(this, window.sessionStorage) || this;
        }
        return LocalService;
    }(StorageService));
    LocalService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LocalService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    LocalService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LocalService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LocalService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var themeList = [
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
    var FontSetList = [
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
    var fontRangeSetList = [
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

    var HttpService = /** @class */ (function () {
        function HttpService(http, _storeservice) {
            var _this = this;
            this.http = http;
            this._storeservice = _storeservice;
            this.overrideUrl = true;
            this.baseUrl = '';
            this.headers = new i1.HttpHeaders()
                .set('Accept', 'application/json')
                .set('Content-Type', 'application/json')
                .set('role', 'role=CP_PUBLIC');
            this.showSpinner = new rxjs.BehaviorSubject(false);
            this.outsideShowSpinner = new rxjs.BehaviorSubject(false);
            this._storeservice.currentStore.subscribe(function (res) {
                if (res['RBACORG'] && res['RBACORG'] !== '') {
                    _this.RBACORG = res['RBACORG'];
                    _this.url = _this.RBACORG['apiHost'] ? _this.RBACORG['apiHost'] : 'http://localhost:3000/api';
                    _this.tokenKey = _this.RBACORG['tokenKey'];
                }
            });
            this.url1 = '';
        }
        HttpService.prototype.get = function (apiRoute) {
            return this.http.get("" + (this.url + apiRoute), {
                headers: this.getHttpNewHeaders()
            });
        };
        HttpService.prototype.post = function (apiRoute, body) {
            return this.http.post("" + (this.url + apiRoute), body, {
                headers: this.getHttpNewHeaders()
            });
        };
        HttpService.prototype.put = function (apiRoute, body) {
            return this.http.put("" + (this.url + apiRoute), body, {
                headers: this.getHttpNewHeaders()
            });
        };
        HttpService.prototype.patch = function (apiRoute, body) {
            return this.http.patch("" + (this.url + apiRoute), body, {
                headers: this.getHttpNewHeaders()
            });
        };
        HttpService.prototype.delete = function (apiRoute) {
            return this.http.delete("" + (this.url + apiRoute), {
                headers: this.getHttpNewHeaders()
            });
        };
        HttpService.prototype.getHttpHeaders = function () {
            return new i1.HttpHeaders().set('key', 'value');
        };
        HttpService.prototype.getHttpNewHeaders = function () {
            return this.headers.set('Authorization', "Bearer " + this.getToken());
        };
        HttpService.prototype.getAttachmentHttpHeaders = function (contentType) {
            return new i1.HttpHeaders().set('Content-Type', contentType).set('x-ms-blob-type', 'BlockBlob');
        };
        HttpService.prototype.putUpload = function (apiRoute, body, contentType) {
            return this.http.put("" + (this.url1 + apiRoute), body, { headers: this.getAttachmentHttpHeaders(contentType) });
        };
        HttpService.prototype.getAuthValidation = function (apiRoute, token) {
            return this.http.get("" + (this.url + apiRoute), {
                headers: this.getHttpNewHeaders()
            });
        };
        HttpService.prototype.getAuthAccessKey = function (apiRoute, body) {
            return this.http.post("" + (this.url + apiRoute), body, {
                headers: this.getHttpNewHeaders()
            });
        };
        HttpService.prototype.putupload2 = function (apiRoute, body, contenttype) {
            return this.http
                .put("" + (this.url1 + apiRoute), body, {
                headers: this.getAttachmentHttpHeaders(contenttype),
                observe: 'response'
            })
                .pipe(operators.map(function (data) {
                return data;
            }));
        };
        /**
         *
         * @param apiRoute
         * This function will download the stream file from the API service.
         * No HTTP required for this stream. So used Window.location.href to download the file
         */
        HttpService.prototype.getFormDownloaded = function (apiRoute) {
            window.location.href = "" + (this.url + apiRoute);
        };
        //common http service(optional)
        HttpService.prototype.handleError = function (error) {
            var _a, _b;
            var errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                // Client-side errors
                errorMessage = "Error: " + error.error.message;
            }
            else {
                // Server-side errors
                errorMessage = "Error Code: " + error.status + "\nMessage: " + (((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message) ? (_b = error === null || error === void 0 ? void 0 : error.error) === null || _b === void 0 ? void 0 : _b.message : error.message);
            }
            return throwError.throwError(errorMessage);
        };
        HttpService.prototype.getToken = function () {
            var token = this.tokenKey ? this.tokenKey : 'jwt-token';
            return sessionStorage.getItem(token);
        };
        return HttpService;
    }());
    HttpService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HttpService, deps: [{ token: i1__namespace.HttpClient }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HttpService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HttpService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HttpService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: i1__namespace.HttpClient }, { type: DataStoreService }]; } });

    var ThemeService = /** @class */ (function () {
        function ThemeService() {
            // This is intentional
        }
        ThemeService.prototype.setActiveTheme = function (theme) {
            var _this = this;
            this.active = theme;
            Object.keys(this.active.properties).forEach(function (property) {
                document.documentElement.style.setProperty(property, _this.active.properties[property]);
            });
        };
        ThemeService.prototype.setActiveFont = function (Fontset) {
            var _this = this;
            this.activeFont = Fontset;
            if (this.activeFont) {
                Object.keys(this.activeFont.properties).forEach(function (property) {
                    document.documentElement.style.setProperty(property, _this.activeFont.properties[property]);
                });
            }
        };
        return ThemeService;
    }());
    ThemeService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ThemeService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ThemeService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ThemeService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ThemeService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var ProfileService = /** @class */ (function () {
        function ProfileService(httpService, themeService, localstorage) {
            this.httpService = httpService;
            this.themeService = themeService;
            this.localstorage = localstorage;
            this.profileImage = new rxjs.Subject();
        }
        ProfileService.prototype.setUserPreference = function () {
            var _this = this;
            var user_id = this.localstorage.getItem('id');
            if (user_id) {
                this.getUserPreference(user_id).subscribe(function (res) {
                    var _a;
                    if (res.data && ((_a = res.data) === null || _a === void 0 ? void 0 : _a.config)) {
                        var configArray = JSON.parse(res.data.config);
                        _this.setTheme(configArray.theme);
                        _this.setFont(configArray.font);
                    }
                });
            }
        };
        ProfileService.prototype.setTheme = function (event) {
            this.localstorage.setItem('SELECTED_THEME', event);
            var selectedTheme = themeList.filter(function (theme) { return theme.key === event; })[0];
            this.themeService.setActiveTheme(selectedTheme);
            console.log('Selected Theme:', selectedTheme.key);
        };
        ProfileService.prototype.setFont = function (event) {
            this.localstorage.setItem('SELECTED_FONT', event);
            var selectedFont = FontSetList.filter(function (fontSet) { return fontSet.key === event; })[0];
            this.themeService.setActiveFont(selectedFont);
        };
        ProfileService.prototype.getProfile = function (img) {
            this.profileImage.next(img);
        };
        ProfileService.prototype.getAllUserList = function (key) {
            return this.httpService.get(UserConfig.EndPoint.User.getAllUserList + "/" + key);
        };
        ProfileService.prototype.getAllUserOrgList = function (orgid) {
            return this.httpService.get(UserConfig.EndPoint.User.getAllUserOrgList + orgid);
        };
        ProfileService.prototype.getUserPreference = function (id) {
            return this.httpService.get(UserConfig.EndPoint.User.getUserConfig.replace('{id}', id));
        };
        ProfileService.prototype.updateUser = function (data, userid) {
            return this.httpService.patch(UserConfig.EndPoint.User.getAllUserList + "/" + userid + "/updateUserDetails", data);
        };
        ProfileService.prototype.saveUserPreference = function (data) {
            return this.httpService.post(UserConfig.EndPoint.User.saveUserConfig, data);
        };
        return ProfileService;
    }());
    ProfileService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ProfileService, deps: [{ token: HttpService }, { token: ThemeService }, { token: LocalService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ProfileService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ProfileService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ProfileService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: HttpService }, { type: ThemeService }, { type: LocalService }]; } });

    var AppService = /** @class */ (function () {
        function AppService() {
            this.currentState = new rxjs.Subject();
            this.currentValue = new rxjs.BehaviorSubject({});
            this.getValue = this.currentValue.asObservable();
        }
        AppService.prototype.addValue = function (key, value) {
            this.currentState.next({ key: key, value: value });
        };
        AppService.prototype.setValue = function (key, value) {
            this.currentValue.next({ key: key, value: value });
        };
        return AppService;
    }());
    AppService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AppService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AppService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }] });

    var authLogout = i1$1.createAction('[Auth] Logout');
    var authLogin = i1$1.createAction('[Auth] Login', i1$1.props());
    var authLoginSuccess = i1$1.createAction('[Auth] Login Success', i1$1.props());
    var authLoginFailure = i1$1.createAction('[Auth] Login Failure', i1$1.props());

    var initialState = {
        isAuthenticated: false,
        pages: []
    };
    var reducer = i1$1.createReducer(initialState, i1$1.on(authLogin, function (state) { return (Object.assign(Object.assign({}, state), { loading: true, error: null, isAuthenticated: false })); }), i1$1.on(authLoginSuccess, function (state, _a) {
        var isAuthenticated = _a.isAuthenticated;
        console.log(isAuthenticated);
        return Object.assign(Object.assign({}, state), { loading: false, isAuthenticated: isAuthenticated, error: null });
    }), i1$1.on(authLoginFailure, function (state, _a) {
        var isAuthenticated = _a.isAuthenticated, error = _a.error;
        return (Object.assign(Object.assign({}, state), { loading: false, isAuthenticated: isAuthenticated, error: error }));
    }), i1$1.on(authLogout, function (state) { return (Object.assign(Object.assign({}, state), { loading: false, error: null, isAuthenticated: false })); }));
    function authReducer(state, action) {
        return reducer(state, action);
    }

    var APP_PREFIX = 'GAMED-';
    var LocalStorageService = /** @class */ (function () {
        function LocalStorageService() {
            // This is intentional
        }
        LocalStorageService.loadInitialState = function () {
            return Object.keys(localStorage).reduce(function (state, storageKey) {
                if (storageKey.includes(APP_PREFIX)) {
                    var stateKeys_1 = storageKey
                        .replace(APP_PREFIX, '')
                        .toLowerCase()
                        .split('.')
                        .map(function (key) { return key
                        .split('-')
                        .map(function (token, index) { return (index === 0 ? token : token.charAt(0).toUpperCase() + token.slice(1)); })
                        .join(''); });
                    var currentStateRef_1 = state;
                    stateKeys_1.forEach(function (key, index) {
                        if (index === stateKeys_1.length - 1) {
                            currentStateRef_1[key] = JSON.parse(localStorage.getItem(storageKey) || '');
                            return;
                        }
                        currentStateRef_1[key] = currentStateRef_1[key] || {};
                        currentStateRef_1 = currentStateRef_1[key];
                    });
                }
                return state;
            }, {});
        };
        LocalStorageService.prototype.setItem = function (key, value) {
            localStorage.setItem("" + APP_PREFIX + key, JSON.stringify(value));
        };
        LocalStorageService.prototype.getItem = function (key) {
            return localStorage.getItem("" + APP_PREFIX + key) || '';
        };
        LocalStorageService.prototype.removeItem = function (key) {
            localStorage.removeItem("" + APP_PREFIX + key);
        };
        /** Tests that localStorage exists, can be written to, and read from. */
        LocalStorageService.prototype.testLocalStorage = function () {
            var testValue = 'testValue';
            var testKey = 'testKey';
            var errorMessage = 'localStorage did not return expected value';
            this.setItem(testKey, testValue);
            var retrievedValue = this.getItem(testKey);
            this.removeItem(testKey);
            if (retrievedValue !== testValue) {
                throw new Error(errorMessage);
            }
        };
        return LocalStorageService;
    }());
    LocalStorageService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LocalStorageService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    LocalStorageService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LocalStorageService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LocalStorageService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    function initStateFromLocalStorage(reducer) {
        return function (state, action) {
            var newState = reducer(state, action);
            if ([i1$1.INIT.toString(), i1$1.UPDATE.toString()].includes(action.type)) {
                return Object.assign(Object.assign({}, newState), LocalStorageService.loadInitialState());
            }
            return newState;
        };
    }

    function debug(reducer) {
        return function (state, action) {
            var newState = reducer(state, action);
            console.log("[DEBUG] action: " + action.type, {
                payload: action.payload,
                oldState: state,
                newState: newState
            });
            return newState;
        };
    }

    var reducers = {
        auth: authReducer,
        router: routerStore.routerReducer
    };
    var metaReducers = [initStateFromLocalStorage];
    // if (environment['production']) {
    metaReducers.unshift(debug);
    // }
    var selectAuthState = i1$1.createFeatureSelector('auth');
    var selectRouterState = i1$1.createFeatureSelector('router');

    var selectAuth = i1$1.createSelector(selectAuthState, function (state) { return state; });

    var AppConstants = /** @class */ (function () {
        function AppConstants() {
        }
        return AppConstants;
    }());
    AppConstants.errorMessage = 'Something went wrong!';
    AppConstants.regexEmail = '^[0-9a-zA-Z.-_+-]+[@][0-9a-zA-Z.-_+]+[.][0-9a-zA-Z]{2,}$';
    AppConstants.tempPasswordReset = 'TEMP_PASSWORD_RESET';
    AppConstants.passwordExpired = 'PASSWORD_EXPIRED';
    AppConstants.errorList = [
        'Have at least one (1) number',
        'Have at least one (1) special character',
        'Have at least one (1) upper case letter',
        'Have at least one (1) lower case letter',
        'Contain a minimum of fourteen (14) characters'
    ];

    var AlertService = /** @class */ (function () {
        function AlertService(router) {
            var _this = this;
            this.router = router;
            this.subject = new rxjs.Subject();
            this.keepAfterRouteChange = false;
            // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
            router.events.subscribe(function (event) {
                if (event instanceof i2.NavigationStart) {
                    if (_this.keepAfterRouteChange) {
                        // only keep for a single route change
                        _this.keepAfterRouteChange = false;
                    }
                    else {
                        // clear alert messages
                        _this.clear();
                    }
                }
            });
        }
        AlertService.prototype.getAlert = function () {
            return this.subject.asObservable();
        };
        AlertService.prototype.success = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Success, message, keepAfterRouteChange);
        };
        AlertService.prototype.error = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Error, message, keepAfterRouteChange);
        };
        AlertService.prototype.info = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Info, message, keepAfterRouteChange);
        };
        AlertService.prototype.warn = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Warning, message, keepAfterRouteChange);
        };
        AlertService.prototype.alert = function (type, message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.keepAfterRouteChange = keepAfterRouteChange;
            this.subject.next({ type: type, message: message });
        };
        AlertService.prototype.clear = function () {
            // clear alerts
            this.subject.next({});
        };
        return AlertService;
    }());
    AlertService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService, deps: [{ token: i2__namespace.Router }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AlertService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: i2__namespace.Router }]; } });
    var AlertType;
    (function (AlertType) {
        AlertType[AlertType["Success"] = 0] = "Success";
        AlertType[AlertType["Error"] = 1] = "Error";
        AlertType[AlertType["Info"] = 2] = "Info";
        AlertType[AlertType["Warning"] = 3] = "Warning";
    })(AlertType || (AlertType = {}));
    var Alert = /** @class */ (function () {
        function Alert() {
        }
        return Alert;
    }());
    var UserGroupDto = /** @class */ (function () {
        function UserGroupDto(data) {
            Object.assign(this, data);
        }
        return UserGroupDto;
    }());
    var UserRolePageDto = /** @class */ (function () {
        function UserRolePageDto(data) {
            Object.assign(this, data);
        }
        return UserRolePageDto;
    }());
    var UserRoleDto = /** @class */ (function () {
        function UserRoleDto(data) {
            Object.assign(this, data);
        }
        return UserRoleDto;
    }());
    var UserDto = /** @class */ (function () {
        function UserDto(data) {
            Object.assign(this, data);
        }
        return UserDto;
    }());
    var AccessManagementConfig = /** @class */ (function () {
        function AccessManagementConfig() {
        }
        return AccessManagementConfig;
    }());
    AccessManagementConfig.EndPoint = {
        Organization: {
            getOrganizationList: '/org/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        }
    };

    var DynamicTabPageConfig = /** @class */ (function () {
        function DynamicTabPageConfig() {
        }
        return DynamicTabPageConfig;
    }());
    DynamicTabPageConfig.EndPoint = {
        Page: {
            getActivePage: '/pageversion/{id}',
            getPage: '/page',
            getPageById: '/platform/page-designer/page/{id}',
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

    var DynamicTabPageService = /** @class */ (function () {
        function DynamicTabPageService(uploadService, httpService) {
            this.uploadService = uploadService;
            this.httpService = httpService;
            this.isPageDesign = new rxjs.BehaviorSubject(false);
            this.observePage = this.isPageDesign.asObservable();
        }
        DynamicTabPageService.prototype.getActivePage = function (tabPageId, permission) {
            return this.httpService.get("" + DynamicTabPageConfig.EndPoint.Page.getActivePage.replace('{id}', tabPageId) + (permission ? '?applyPermissions=true' : ''));
        };
        DynamicTabPageService.prototype.getDynamicPage = function (pageId) {
            return this.httpService.get(DynamicTabPageConfig.EndPoint.Page.getPage + "/" + pageId);
        };
        DynamicTabPageService.prototype.getPageById = function (pageId) {
            return this.httpService.get(DynamicTabPageConfig.EndPoint.Page.getPageById.replace('{id}', pageId));
        };
        DynamicTabPageService.prototype.getListBySourceId = function (sourceId) {
            return this.httpService.get(DynamicTabPageConfig.EndPoint.Narrative.getIncidentListById.replace('{id}', sourceId));
        };
        DynamicTabPageService.prototype.getResponseByPageId = function (responseId, pageId) {
            return this.httpService.get(DynamicTabPageConfig.EndPoint.Page.getResponseByPageId
                .replace('{responseId}', responseId)
                .replace('{pageId}', pageId));
        };
        DynamicTabPageService.prototype.createFormResponse = function (id, requestData) {
            return this.httpService.post(id
                ? DynamicTabPageConfig.EndPoint.Page.updateFormResponse
                : DynamicTabPageConfig.EndPoint.Page.createFormResponse, requestData);
        };
        DynamicTabPageService.prototype.createUserSurvey = function (history, Id) {
            var _a;
            return this.httpService.post(DynamicTabPageConfig.EndPoint.Notification.createSurveyConfig
                .replace('{id}', (_a = history === null || history === void 0 ? void 0 : history.state) === null || _a === void 0 ? void 0 : _a.usersurveyid)
                .replace('{status}', 'Completed')
                .replace('{pagedataid}', Id), {});
        };
        DynamicTabPageService.prototype.updateFormResponse = function (id, requestData) {
            return this.httpService.patch(DynamicTabPageConfig.EndPoint.Page.patchFormResponse + "/" + id, requestData);
        };
        DynamicTabPageService.prototype.exportReport = function (data) {
            return this.httpService.post(DynamicTabPageConfig.EndPoint.Finance.exportDocument, data);
        };
        DynamicTabPageService.prototype.uploadFile = function (file) {
            return this.uploadService.upload({
                url: this.httpService.baseUrl + '/' + DynamicTabPageConfig.EndPoint.Finance.uploadDocument,
                headers: new i1.HttpHeaders()
                    .set('ctype', 'file')
                    .set('uniqueid', '6b61ac1e-221a-495c-957b-ad85f65be25a')
                    .set('role', 'role=CP_PUBLIC'),
                files: file,
                process: true
            });
        };
        DynamicTabPageService.prototype.getUniqueId = function (api) {
            return this.httpService.get(DynamicTabPageConfig.EndPoint.Finance.getUniqueId + api);
        };
        DynamicTabPageService.prototype.changePage = function (page) {
            this.isPageDesign.next(page);
        };
        DynamicTabPageService.prototype.createFormResponseAttachment = function (data) {
            return this.httpService.post(DynamicTabPageConfig.EndPoint.Attachments.createAttachment, data);
        };
        return DynamicTabPageService;
    }());
    DynamicTabPageService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DynamicTabPageService, deps: [{ token: i1__namespace$1.NgxfUploaderService }, { token: HttpService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    DynamicTabPageService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DynamicTabPageService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DynamicTabPageService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.NgxfUploaderService }, { type: HttpService }]; } });

    var PageHeaderURL = /** @class */ (function () {
        function PageHeaderURL() {
        }
        return PageHeaderURL;
    }());
    PageHeaderURL.EndPoints = {
        page: {
            getAuthorizedPages: '/platform/page-designer/page/organization/{orgid}?returnUserPage=true&excludeNoActiveVersionPages=true'
        }
    };

    var PageHeaderService = /** @class */ (function () {
        function PageHeaderService(httpService) {
            this.httpService = httpService;
        }
        PageHeaderService.prototype.getAuthorizedPages = function (orgid) {
            return this.httpService.get(PageHeaderURL.EndPoints.page.getAuthorizedPages.replace('{orgid}', orgid));
        };
        return PageHeaderService;
    }());
    PageHeaderService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageHeaderService, deps: [{ token: HttpService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    PageHeaderService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageHeaderService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageHeaderService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: HttpService }]; } });

    var AuthState = /** @class */ (function () {
        function AuthState() {
        }
        return AuthState;
    }());

    var AuthStore = /** @class */ (function (_super) {
        __extends(AuthStore, _super);
        function AuthStore(httpService) {
            var _this = _super.call(this, new AuthState()) || this;
            _this.httpService = httpService;
            return _this;
        }
        AuthStore.prototype.addAuthInfo = function (user) {
            this.setState(Object.assign(Object.assign({}, this.state), { user: user }));
        };
        AuthStore.prototype.getAuthInfo = function () {
            console.log(this.state);
            if (this.state.user) {
                return rxjs.of(this.state.user);
            }
            else {
                return rxjs.forkJoin([this.httpService.get(AuthURL.EndPoints.auth.user.userInfo)]).pipe(operators.tap(function (_a) {
                    var _b = __read(_a, 1), user = _b[0];
                    return user;
                }));
            }
        };
        return AuthStore;
    }(Store));
    AuthStore.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthStore, deps: [{ token: HttpService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AuthStore.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthStore });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthStore, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: HttpService }]; } });

    var credentialsKey = 'jwt-token';
    /**
     * Provides storage for authentication credentials.
     * The Credentials interface should be replaced with proper implementation.
     */
    var CredentialsService = /** @class */ (function () {
        function CredentialsService() {
            this.token = null;
            var savedCredentials = sessionStorage.getItem(credentialsKey);
            if (savedCredentials) {
                this.token = savedCredentials;
            }
        }
        /**
         * Checks is the user is authenticated.
         * @return True if the user is authenticated.
         */
        CredentialsService.prototype.isAuthenticated = function () {
            return !!this.credentials;
        };
        Object.defineProperty(CredentialsService.prototype, "credentials", {
            /**
             * Gets the user credentials.
             * @return The user credentials or null if the user is not authenticated.
             */
            get: function () {
                return this.token;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Sets the user credentials.
         * The credentials may be persisted across sessions by setting the `remember` parameter to true.
         * Otherwise, the credentials are only persisted for the current session.
         * @param credentials The user credentials.
         * @param remember True to remember credentials across sessions.
         */
        CredentialsService.prototype.setCredentials = function (credentials) {
            this.token = credentials || null;
            if (credentials) {
                sessionStorage.setItem(credentialsKey, credentials);
            }
            else {
                sessionStorage.clear();
            }
        };
        return CredentialsService;
    }());
    CredentialsService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CredentialsService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    CredentialsService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CredentialsService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CredentialsService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var AuthService = /** @class */ (function () {
        function AuthService(injector, httpService, store, _router, credentialsService, localstore) {
            this.httpService = httpService;
            this.store = store;
            this._router = _router;
            this.credentialsService = credentialsService;
            this.localstore = localstore;
            this.orgInfo = new rxjs.BehaviorSubject('');
            this.currentOrgInfo = this.orgInfo.asObservable();
            this.currentMenu = new rxjs.BehaviorSubject('');
            this.currentMenuInfo = this.currentMenu.asObservable();
            this.alertService = injector.get(AlertService);
            this.dynamicTabPageService = injector.get(DynamicTabPageService);
            this.pageHeaderService = injector.get(PageHeaderService);
        }
        AuthService.prototype.feedOrgInfo = function (data) {
            this.orgInfo.next(data);
        };
        AuthService.prototype.getCurrentMenu = function (data) {
            this.currentMenu.next(data);
        };
        AuthService.prototype.getUserOrgList = function () {
            return this.httpService.get(AuthURL.EndPoints.auth.user.orgList);
        };
        AuthService.prototype.getUnNotified = function () {
            return this.httpService.get(AuthURL.EndPoints.auth.user.notification);
        };
        AuthService.prototype.updateUnNotified = function (data) {
            return this.httpService.post(AuthURL.EndPoints.auth.user.notification, data);
        };
        AuthService.prototype.updateWorkerAvailability = function (data) {
            return this.httpService.patch(AuthURL.EndPoints.auth.user.workerAvailability, data);
        };
        AuthService.prototype.getWorkerAvailability = function () {
            return this.httpService.get(AuthURL.EndPoints.auth.user.getWorkerAvailability);
        };
        AuthService.prototype.getMstrToken = function () {
            return this.httpService.get(AuthURL.EndPoints.auth.microstrategy.login).pipe(function (res) {
                return res;
            });
        };
        AuthService.prototype.login = function (email, password, otp) {
            var _this = this;
            var body = {
                email: email,
                password: password,
                secret: otp ? otp : ''
            };
            return this.httpService.post(AuthURL.EndPoints.auth.user.login, body).pipe(operators.mergeMap(function (res) {
                var _a, _b, _c;
                if (res['data'] === 'MFA_CODE_SEND') {
                    return rxjs.of(res['data']);
                }
                if ([AppConstants.tempPasswordReset, AppConstants.passwordExpired].includes((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.action)) {
                    sessionStorage.setItem('email', (_b = res.data.user) === null || _b === void 0 ? void 0 : _b.email);
                    sessionStorage.setItem('id', (_c = res.data.user) === null || _c === void 0 ? void 0 : _c.id);
                    return rxjs.of(res);
                }
                _this.credentialsService.setCredentials(res['data'].idToken.jwtToken);
                sessionStorage.setItem('refreshToken', res['data'].refreshToken.token);
                sessionStorage.setItem('email', res['data'].idToken.payload['email']);
                sessionStorage.setItem('id', res['data'].idToken.payload['custom:id']);
                sessionStorage.setItem('username', res['data'].idToken.payload['name']);
                return _this.getUserInfo();
            }));
        };
        AuthService.prototype.refreshToken = function (platform) {
            var _this = this;
            if (platform === void 0) { platform = 'aws'; }
            var email = sessionStorage.getItem('email');
            var refreshToken = sessionStorage.getItem('refreshToken');
            var body = {
                email: email,
                refreshToken: refreshToken
            };
            if (platform === 'aws') {
                return this.httpService.post(AuthURL.EndPoints.auth.user.refreshToken, body).pipe(operators.mergeMap(function (res) {
                    _this.credentialsService.setCredentials(res['data'].idToken.jwtToken);
                    sessionStorage.setItem('refreshToken', res['data'].refreshToken.token);
                    sessionStorage.setItem('email', res['data'].idToken.payload['email']);
                    sessionStorage.setItem('id', res['data'].idToken.payload['custom:id']);
                    sessionStorage.setItem('username', res['data'].idToken.payload['name']);
                    console.log('new token generated...', res['data'].idToken.jwtToken);
                    return [res['data'].idToken.jwtToken];
                }));
            }
            else {
                return this.httpService.post(AuthURL.EndPoints.auth.user.refreshToken, body).pipe(operators.mergeMap(function (res) {
                    _this.credentialsService.setCredentials(res['data'].token);
                    sessionStorage.setItem('refreshToken', res['data'].refreshToken);
                    return [res['data'].token];
                }));
            }
        };
        AuthService.prototype.resetLoggedIn = function () {
            this.httpService
                .post(AuthURL.EndPoints.auth.user.logout, {
                email: sessionStorage.getItem('email')
            })
                .subscribe(function () {
                console.log('Logged in flag reset successful.');
            });
        };
        AuthService.prototype.logout = function () {
            this._router.navigate(['/login']);
            sessionStorage.clear();
            localStorage.clear();
        };
        AuthService.prototype.getUserInfo = function () {
            var _this = this;
            return rxjs.forkJoin([this.httpService.get(AuthURL.EndPoints.auth.user.userInfo)]).pipe(operators.tap(function (_d) {
                var _e = __read(_d, 1), user = _e[0];
                _this.store.addAuthInfo(user['data']);
                return user;
            }));
        };
        AuthService.prototype.getUserRole = function (id) {
            return this.httpService.get(AuthURL.EndPoints.auth.user.userRole.replace('{id}', id)).pipe(function (res) {
                return res;
            });
        };
        AuthService.prototype.routeToDynamicPage = function (orgid) {
            return this.httpService
                .get(AuthURL.EndPoints.auth.user.routeToDynamicPage.replace('{orgid}', orgid))
                .pipe(function (res) {
                return res;
            });
        };
        AuthService.prototype.getAuthMe = function () {
            return this.httpService.get(AuthURL.EndPoints.auth.user.authMe);
        };
        AuthService.prototype.ResetPassword = function (data) {
            return this.httpService.post(AuthURL.EndPoints.auth.user.resetPassword, data);
        };
        AuthService.prototype.getRoleKey = function () {
            var user = this.localstore.getObj('user');
            if (user && user.role) {
                return user.role.rolekey;
            }
        };
        AuthService.prototype.isAdmin = function () {
            return 'ADM' === this.getRoleKey();
        };
        AuthService.prototype.getOrgID = function () {
            var user = this.localstore.getObj('user');
            if (user && user.userWorkInfo && user.userWorkInfo.organization && user.userWorkInfo.organization.id) {
                return user.userWorkInfo.organization.id;
            }
            else {
                return '';
            }
        };
        AuthService.prototype.conformMail = function (data) {
            return this.httpService.post(AuthURL.EndPoints.auth.user.conformMail, data);
        };
        AuthService.prototype.changePassword = function (data) {
            return this.httpService.post(AuthURL.EndPoints.auth.user.changePassword, data);
        };
        AuthService.prototype.setSharedMessage = function (data) {
            this.sharedInfo = data;
        };
        AuthService.prototype.getSharedMessage = function () {
            return this.sharedInfo;
        };
        AuthService.prototype.checkDynamicPagePermission = function (pageId) {
            return __awaiter(this, void 0, void 0, function () {
                var dynamicPages;
                var _this = this;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, this.getAuthorizedPages()];
                        case 1:
                            dynamicPages = _d.sent();
                            if (pageId) {
                                this.dynamicTabPageService.getPageById(pageId).subscribe(function (res) {
                                    if (dynamicPages.some(function (page) { return page.id === res['data'][0].activeVersion.id; })) {
                                        _this._router.navigate(["pages/dynamic-search/search/" + res['data'][0].activeVersion.id]);
                                    }
                                    else {
                                        _this.alertService.error("You don't have permissions for " + res['data'][0].activeVersion.pagename + " . Please Contact Administrator");
                                    }
                                });
                            }
                            else {
                                this.alertService.error('You don\'t have permissions to perform the following operations .Please Contact Administrator');
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        AuthService.prototype.getCurrentOrg = function () {
            return this.getUserOrgList()
                .toPromise()
                .then(function (response) {
                return response['data'][0].id;
            });
        };
        AuthService.prototype.getAuthorizedPages = function () {
            return __awaiter(this, void 0, void 0, function () {
                var orgId;
                var _this = this;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, this.getCurrentOrg()];
                        case 1:
                            orgId = _d.sent();
                            return [2 /*return*/, this.pageHeaderService
                                    .getAuthorizedPages(orgId)
                                    .toPromise()
                                    .then(function (response) {
                                    var dynamicPage = response['data'].filter(function (page) {
                                        return (page.activeVersion &&
                                            (page.activeVersion.gridconfig || page.activeVersion.templatejson || _this.getCustomPage(page)));
                                    });
                                    return dynamicPage.map(function (page) { return ({
                                        id: page.activeVersion.id,
                                        name: page.activeVersion.pagename,
                                        activeVersion: page.activeVersion
                                    }); });
                                }, function (_error) { return _this.alertService.error(AppConstants.errorMessage); })];
                    }
                });
            });
        };
        AuthService.prototype.getCustomPage = function (page) {
            if (page.activeVersion.tabconfig) {
                var routingTab = JSON.parse(page.activeVersion.tabconfig).filter(function (x) { return x.type === 'ROUTING'; });
                return routingTab.length && page;
            }
        };
        AuthService.prototype.validateToken = function (token, requestObject) {
            var _this = this;
            this.credentialsService.setCredentials(token);
            return this.httpService.getAuthAccessKey(AuthURL.EndPoints.auth.user.getTokenValidationUrl, requestObject).pipe(operators.mergeMap(function (res) {
                if (res['data'] === 'MFA_CODE_SEND') {
                    return rxjs.of(res['data']);
                }
                _this.credentialsService.setCredentials(res['data'].token);
                sessionStorage.setItem('refreshToken', res['data'].refreshToken);
                sessionStorage.setItem('email', res['data'].email);
                sessionStorage.setItem('id', res['data'].id);
                sessionStorage.setItem('username', res['data'].name);
                return _this.getUserInfo();
            }));
        };
        AuthService.prototype.generateLoginUrl = function () {
            return this.httpService.get(AuthURL.EndPoints.auth.user.generateLoginUrl);
        };
        return AuthService;
    }());
    AuthService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthService, deps: [{ token: i0__namespace.Injector }, { token: HttpService }, { token: AuthStore }, { token: i2__namespace.Router }, { token: CredentialsService }, { token: LocalService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AuthService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: HttpService }, { type: AuthStore }, { type: i2__namespace.Router }, { type: CredentialsService }, { type: LocalService }]; } });

    var DISPLAY_IN_SECONDS = 8;
    var AlertComponent = /** @class */ (function () {
        function AlertComponent(alertService) {
            this.alertService = alertService;
            this.alerts = [];
        }
        AlertComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.alertService.getAlert().subscribe(function (alert) {
                if (!alert) {
                    // clear alerts when an empty alert is received
                    _this.alerts = [];
                    return;
                }
                // add alert to array
                _this.alerts.push(alert);
                // remove alert after 5 seconds
                setTimeout(function () { return _this.removeAlert(alert); }, DISPLAY_IN_SECONDS * 1000);
            });
        };
        AlertComponent.prototype.removeAlert = function (alert) {
            this.alerts = this.alerts.filter(function (x) { return x !== alert; });
        };
        AlertComponent.prototype.cssClass = function (alert) {
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
        };
        return AlertComponent;
    }());
    AlertComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertComponent, deps: [{ token: AlertService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    AlertComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AlertComponent, selector: "app-alert", ngImport: i0__namespace, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], directives: [{ type: i10__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertComponent, decorators: [{
                type: i0.Component,
                args: [{
                        // moduleId: module.id,
                        selector: 'app-alert',
                        templateUrl: 'alert.component.html',
                        styleUrls: ['./alert.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: AlertService }]; } });

    var LoginComponent$1 = /** @class */ (function () {
        function LoginComponent(injector, store$, _router, fb, modalService, alertService, authService, route) {
            this.store$ = store$;
            this._router = _router;
            this.fb = fb;
            this.modalService = modalService;
            this.alertService = alertService;
            this.authService = authService;
            this.route = route;
            this.passwordExpired = new i0.EventEmitter();
            this.loginSuccessful = new i0.EventEmitter();
            this.cities = [];
            this.destory$ = new rxjs.Subject();
            this.closeResult = '';
            this.DEFAULT_PASSWORD_RESET = 'TEMP_PASSWORD_RESET';
            this.profileService = injector.get(ProfileService);
            this.localstorage = injector.get(LocalService);
            this.primengConfig = injector.get(api.PrimeNGConfig);
            this.appService = injector.get(AppService);
            this.submitStatus = 'LOGIN';
            this.disabledLoginPage = false;
        }
        LoginComponent.prototype.ngOnInit = function () {
            var _this = this;
            sessionStorage.clear();
            localStorage.clear();
            this.initializeForm();
            this.getSessionDetails();
            this.primengConfig.ripple = true;
            this.isAuthenticated$ = this.store$.pipe(i1$1.select(selectAuth));
            this.isAuthenticated$.subscribe(function (res) {
                if (res.isAuthenticated) {
                    var routeToAdmin = res.pages.some(function (a) { return a.name === 'Application Management'; });
                    if ((res === null || res === void 0 ? void 0 : res.action) === _this.DEFAULT_PASSWORD_RESET) {
                        var query = {
                            queryParams: {
                                isTempPassword: res.action === _this.DEFAULT_PASSWORD_RESET,
                                email: _this.loginForm.value.email.trim()
                            }
                        };
                        _this._router.navigate(['/auth/change-password', query]);
                    }
                    else if (routeToAdmin) {
                        _this._router.navigate(['/pages/rbac']);
                    }
                    else {
                        _this._router.navigate(['/pages/page-design/list']);
                    }
                }
            }, function (err) {
                var _a, _b, _c, _d;
                console.log(err);
                if (err.error) {
                    if (((_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.code) === 'NotAuthorizedException' || ((_d = (_c = err === null || err === void 0 ? void 0 : err.error) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.email) === 'notFound') {
                        _this.alertService.error('Invalid Credentials');
                    }
                    else {
                        _this.alertService.error('System Error, Please try after sometime');
                    }
                }
                _this.submitStatus = 'LOGIN';
                _this.submitSecretStatus = 'Submit Secret Code';
            });
            this.route.queryParams.pipe(operators.takeUntil(this.destory$), operators.filter(function (params) { return !!params.email; })).subscribe(function (params) {
                _this.loginForm.patchValue({
                    email: params.email,
                });
            });
        };
        LoginComponent.prototype.ngOnDestroy = function () {
            this.destory$.next();
            this.destory$.complete();
        };
        LoginComponent.prototype.initializeForm = function () {
            this.loginForm = this.fb.group({
                email: ['', [i3.Validators.required, i3.Validators.pattern(AppConstants.regexEmail)]],
                password: ['', i3.Validators.required],
                conditions: ['', i3.Validators.required]
            });
        };
        LoginComponent.prototype.initializeOtpForm = function () {
            this.otpForm = this.fb.group({
                otp: ['', i3.Validators.required]
            });
        };
        LoginComponent.prototype.open = function (content) {
            var _this = this;
            this.modalService.open(content, { size: 'lg', backdrop: 'static' }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        };
        LoginComponent.prototype.getDismissReason = function (reason) {
            if (reason === i4.ModalDismissReasons.ESC) {
                return 'by pressing ESC';
            }
            else if (reason === i4.ModalDismissReasons.BACKDROP_CLICK) {
                return 'by clicking on a backdrop';
            }
            else {
                return "with: " + reason;
            }
        };
        LoginComponent.prototype.login = function (otp) {
            var _this = this;
            this.submitStatus = 'Please wait ...';
            this.submitSecretStatus = 'Please wait ...';
            this.errorStatus = '';
            var loginform = this.loginForm.getRawValue();
            this.authService.login(loginform.email, loginform.password, otp).subscribe(function (res) {
                var _a, _b;
                if (res) {
                    console.log(res);
                    if (res === 'MFA_CODE_SEND') {
                        console.log('Request MFA Code...');
                        _this.isOtpSent = true;
                        _this.initializeOtpForm();
                        _this.submitSecretStatus = 'Submit Secret Code';
                        return;
                    }
                    else if (((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.action) === AppConstants.tempPasswordReset) {
                        var queryParams = {
                            isTempPassword: true,
                        };
                        _this._router.navigate(['/change-password'], { queryParams: queryParams });
                    }
                    else if (((_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.action) === AppConstants.passwordExpired) {
                        _this.passwordExpired.emit('change-password');
                        _this._router.navigate(['/change-password']);
                    }
                    else {
                        if (_this.LOGININFO.DONT_GET_USERINFO) {
                            _this.loginSuccessful.emit(res[0]);
                        }
                        else {
                            _this.getUserInfo();
                        }
                    }
                }
            }, function (error) {
                var _a, _b, _c, _d, _e, _f, _g;
                console.log(error);
                if (error.error) {
                    if (((_b = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.code) === 'NotAuthorizedException' || ((_d = (_c = error === null || error === void 0 ? void 0 : error.error) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.email) === 'Not Found') {
                        _this.alertService.error(((_e = error === null || error === void 0 ? void 0 : error.error) === null || _e === void 0 ? void 0 : _e.message) || 'Invalid Email or Password');
                    }
                    else
                        _this.alertService.error(((_f = error === null || error === void 0 ? void 0 : error.error) === null || _f === void 0 ? void 0 : _f.error) || 'Invalid Email or Password');
                }
                else {
                    _this.alertService.error(((_g = error === null || error === void 0 ? void 0 : error.error) === null || _g === void 0 ? void 0 : _g.error) || 'Invalid Email or Password');
                }
                _this.submitStatus = 'LOGIN';
            });
        };
        LoginComponent.prototype.sendOtp = function () {
            var otpFormDetails = this.otpForm.getRawValue();
            this.login(otpFormDetails.otp);
        };
        LoginComponent.prototype.toggleShow = function () {
            this.show = !this.show;
            if (this.show) {
                this.input.nativeElement.type = 'text';
            }
            else {
                this.input.nativeElement.type = 'password';
            }
        };
        LoginComponent.prototype.routeToChangePassword = function () {
            this._router.navigate(['/forgot-password']);
        };
        LoginComponent.prototype.getUserInfo = function () {
            var _this = this;
            this.authService.getAuthMe().subscribe(function (res) {
                if (res.data) {
                    sessionStorage.setItem('orgid', res.data.organizationid);
                    _this.authService.getUserRole(res.data.id).subscribe(function (userInfo) {
                        if (userInfo) {
                            _this.profileService.setUserPreference();
                            sessionStorage.setItem('user', JSON.stringify(userInfo.data));
                            var landingPage = userInfo.data.userroles[0].defaultpage;
                            sessionStorage.setItem('currentPage', JSON.stringify(landingPage));
                            _this.appService.addValue('currentPage', landingPage);
                            _this.routeToDynamicPage(landingPage);
                        }
                    });
                }
            }, function (error) {
                console.log(error);
            });
        };
        LoginComponent.prototype.routeToDynamicPage = function (landingPage) {
            var _this = this;
            var orgid = sessionStorage.getItem('orgid');
            if (landingPage.route.includes('dynamic-search/search')) {
                var pageId = landingPage.route.split('/')[4];
                if (pageId) {
                    this.authService.checkDynamicPagePermission(pageId);
                }
                else {
                    this.authService.routeToDynamicPage(orgid).subscribe(function (res) {
                        var _a, _b, _c;
                        if (res && res.data.length) {
                            var authorisedPages = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.filter(function (a) { var _a; return (_a = a === null || a === void 0 ? void 0 : a.activeVersion) === null || _a === void 0 ? void 0 : _a.gridconfig; });
                            _this.localstorage.setItem('selectedDynamicPage', (_c = (_b = authorisedPages[0]) === null || _b === void 0 ? void 0 : _b.activeVersion) === null || _c === void 0 ? void 0 : _c.id);
                            _this.conditionAuthorisedPages(authorisedPages);
                        }
                        else {
                            _this.alertService.error('You don\'t have permissions to perform the following operations .Please Contact Administrator');
                        }
                    });
                }
            }
            else {
                var landingPageRoute = "pages" + (landingPage === null || landingPage === void 0 ? void 0 : landingPage.route);
                this._router.navigate([landingPageRoute]);
                this.localstorage.setItem('dashboardRoute', landingPageRoute);
            }
        };
        LoginComponent.prototype.conditionAuthorisedPages = function (authorisedPages) {
            var _a, _b, _c, _d;
            if (authorisedPages && authorisedPages.length && ((_b = (_a = authorisedPages[0]) === null || _a === void 0 ? void 0 : _a.activeVersion) === null || _b === void 0 ? void 0 : _b.gridconfig)) {
                var gridPageRoute = "pages/dynamic-search/search/" + ((_d = (_c = authorisedPages[0]) === null || _c === void 0 ? void 0 : _c.activeVersion) === null || _d === void 0 ? void 0 : _d.id);
                this._router.navigate([gridPageRoute]);
                this.localstorage.setItem('dashboardRoute', gridPageRoute);
            }
        };
        LoginComponent.prototype.gotoRegistrationPage = function (userType) {
            this._router.navigate(['./registration/', userType]);
        };
        LoginComponent.prototype.getSessionDetails = function () {
            var _this = this;
            var getToken = window.location.hash;
            if (getToken.includes('#state=')) {
                var currentUrl = new URL(window.location.href.replace(/#/g, "?"));
                var stateKey = currentUrl.searchParams.get("state");
                var authCode = currentUrl.searchParams.get("code");
                var token = currentUrl.searchParams.get("id_token");
                var requestObject = {
                    key: stateKey,
                    code: authCode
                };
                this.authService.validateToken(token, requestObject).subscribe(function (res) {
                    if (res) {
                        _this.getUserInfo();
                    }
                }, function (error) {
                    var _a, _b, _c, _d, _e;
                    if (error.error) {
                        if (((_b = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.code) === 'NotAuthorizedException' || ((_d = (_c = error === null || error === void 0 ? void 0 : error.error) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.email) === 'notFound') {
                            _this.alertService.error(AppConstants.regexEmail);
                        }
                        else
                            _this.alertService.error(((_e = error === null || error === void 0 ? void 0 : error.error) === null || _e === void 0 ? void 0 : _e.error) || AppConstants.errorMessage);
                    }
                    _this.submitStatus = 'LOGIN';
                });
            }
        };
        LoginComponent.prototype.generateLoginUrl = function () {
            this.authService.generateLoginUrl().subscribe(function (res) {
                window.open(res === null || res === void 0 ? void 0 : res.data, '_self');
            });
        };
        return LoginComponent;
    }());
    LoginComponent$1.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LoginComponent$1, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace$2.Store }, { token: i2__namespace.Router }, { token: i3__namespace.FormBuilder }, { token: i4__namespace.NgbModal }, { token: AlertService }, { token: AuthService }, { token: i2__namespace.ActivatedRoute }], target: i0__namespace.ɵɵFactoryTarget.Component });
    LoginComponent$1.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: LoginComponent$1, selector: "lib-login", inputs: { LOGININFO: "LOGININFO", RBACORG: "RBACORG" }, outputs: { passwordExpired: "passwordExpired", loginSuccessful: "loginSuccessful" }, providers: [api.MessageService], viewQueries: [{ propertyName: "input", first: true, predicate: ["showhideinput"], descendants: true }], ngImport: i0__namespace, template: "<app-alert></app-alert>\r\n<div class=\"row login\" id=\"back\">\r\n  <div\r\n    class=\"d-none d-lg-flex flex-column col-lg-8 align-i p-0 banner-sec justify-content-center container-image\"\r\n    [style.background-image]=\"'url(' + (LOGININFO['BACKGROUND_IMAGE'] ? LOGININFO['BACKGROUND_IMAGE'] :'assets/images/login_bg.jpg') + ')'\">\r\n  </div>\r\n  <div class=\"d-flex col-lg-4 shadow align-items-center p-4 mx-auto rightLoginSet\">\r\n    <div class=\"col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto\">\r\n      <div class=\"col-md-12 text-left logo-group lg-mb-50\">\r\n        <div class=\"form-group mb-4\">\r\n          <div class=\"d-flex logo-group justify-content-center text-center\">\r\n            <span class=\"logo-img\">\r\n              <img [attr.src]=\"LOGININFO['BANNER'] ? LOGININFO['BANNER'] :'assets/images/cardinality-logo_text.svg'\" class=\"cfaLogoTop logo-img\" width=\"300\" alt=\"Oregon Provider Logo\" />\r\n              <h5 class=\"mt-3 font-weight-bold\">{{ LOGININFO['TITLE'] ? LOGININFO['TITLE'] : 'Integrated Eligibility System'}}</h5>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12 loginBottomSet clearfix\">\r\n        <div class=\"login-content\">\r\n          <form (ngSubmit)=\"login()\" novalidate [formGroup]=\"loginForm\">\r\n            <div class=\"clearfix\">\r\n              <div class=\"form-group\">\r\n                <label aria-labelledby=\"username\" for=\"username\" class=\"intake-form-labels\">User Name </label>\r\n                <input\r\n                  class=\"Inputs\"\r\n                  autofocus\r\n                  type=\"mail\"\r\n                  formControlName=\"email\"\r\n                  placeholder=\"Email\"\r\n                  name=\"email\"\r\n                  id=\"username\"\r\n                  tabindex=\"0\"\r\n                  required />\r\n              </div>\r\n              <div class=\"form-group no-mar\">\r\n                <label aria-labelledby=\"password\" for=\"password\" class=\"intake-form-labels w-100\">Password</label>\r\n                <input\r\n                  class=\"Inputs password\"\r\n                  #showhideinput\r\n                  formControlName=\"password\"\r\n                  type=\"password\"\r\n                  placeholder=\"Password\"\r\n                  name=\"password\"\r\n                  id=\"password\"\r\n                  tabindex=\"0\"\r\n                  required />\r\n                  <em\r\n                  class=\"pi\"\r\n                  [ngClass]=\"{ 'pi-eye': show, 'pi-eye-slash': !show }\"\r\n                  aria-hidden=\"true\"\r\n                  (click)=\"toggleShow()\"></em>\r\n                <!-- <i class=\"fa fa-eye\" aria-hidden=\"true\" (click)=\"toggleShow()\"></i> -->\r\n                <div class=\"text-right\">\r\n                  <a href=\"javascript:void(0)\" (click)=\"routeToChangePassword()\" class=\"btn-link forget\">\r\n                    Forgot Password?</a\r\n                  >\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group clearfix mb-30 clsMin-23 pt-10\">\r\n                <div class=\"checkbox\">\r\n                  <p-checkbox\r\n                    class=\"checklabelbox\"\r\n                    name=\"conditions\"\r\n                    formControlName=\"conditions\"\r\n                    value=\"yes\"\r\n                    inputId=\"ch\"\r\n                    aria-checked=\"false\">\r\n                  </p-checkbox>\r\n                  <label class=\"checklabel\" for=\"ch\"\r\n                    >I accept the <a href=\"javascript:void(0)\" (click)=\"open(content)\">terms &amp; conditions</a></label\r\n                  >\r\n                </div>\r\n              </div>\r\n              <div class=\"clearfix text-center col-md-12 col-12 mt-4\">\r\n                <p-button\r\n                  role=\"button\"\r\n                  type=\"submit\"\r\n                  title=\"Login\"\r\n                  [disabled]=\"!loginForm.valid\"\r\n                  styleClass=\"w-100 align-items-center justify-content-center d-block mb-2\"\r\n                  class=\"loginbutton w-100\"\r\n                  tabindex=\"0\"\r\n                  >{{ submitStatus }}</p-button\r\n                >\r\n                <a href=\"javascript:void(0);\" class=\"text-primary\" *ngIf=\"LOGININFO['REGISTRATION_ENABLE'] ? LOGININFO['REGISTRATION_ENABLE'] : false\" style=\"text-decoration: none;\" (click)=\"gotoRegistrationPage('provider')\">Provider Register</a><br>\r\n                <a href=\"javascript:void(0);\" class=\"text-primary\" *ngIf=\"LOGININFO['REGISTRATION_ENABLE'] ? LOGININFO['REGISTRATION_ENABLE'] : false\" style=\"text-decoration: none;\" (click)=\"gotoRegistrationPage('familyUser')\">Family User Register</a>\r\n              </div>\r\n              <div class=\"mar-btm-20 picslogin\" *ngIf=\"LOGININFO['LOGINWITH_AZURE'] ? LOGININFO['LOGINWITH_AZURE'] : false\"><span>Or</span></div>\r\n              <div class=\"clearfix text-center col-md-12 col-12 mt-2\" *ngIf=\"LOGININFO['LOGINWITH_AZURE'] ? LOGININFO['LOGINWITH_AZURE'] : false\">\r\n              <p-button\r\n              role=\"button\"\r\n              type=\"button\"\r\n              title=\"Login with Azure\"\r\n              class=\"loginbutton\"\r\n              tabindex=\"0\"\r\n              (click)=\"generateLoginUrl()\"\r\n              >Login with Azure</p-button>\r\n            </div>\r\n            </div>\r\n            <br />\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"powered\">\r\n      <p class=\"clsInfo-text mt-0 text-center\">\r\n        <span style=\"font-size: 13px\"> Powered by </span>\r\n        <a href=\"https://www.cardinality.ai/\" rel=\"noopener\" role=\"link\" target=\"_blank\" tabindex=\"0\">\r\n          <img alt=\"cardinality\" class=\"Cardinality_logo\" src=\"assets/images/cardinality-logo_text.svg\" width=\"120\" />\r\n        </a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">\r\n      Personalized Integrated Citizen Services (PICS) Terms &amp; conditions\r\n    </h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body termscondition\">\r\n    <p class=\"mb-2\">\r\n      These Terms and Conditions constitute a legally binding agreement (\u201CAgreement\u201D) made between you, whether\r\n      personally as a professional, or on behalf of an entity you represent (\u201CYou\u201D or \u201CCustomer\u201D) and Cardinality.AI\r\n      whose principal place of business is MD, U.S.A, (\u201CCardinality\u201D, \u201Cwe,\u201D \u201Cus\u201D or \u201Cour\u201D), concerning your access to\r\n      and contracting a PICS offering (\u201CProduct\u201D).\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      You agree that by contracting our Product, you have read, understood, and agree to be bound by these Terms and\r\n      Conditions, which may be executed via electronic signature, electronic online communications, or via emailed\r\n      PDF-format document.\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      You confirm that you are fully able and entitled to accept these Terms and Conditions governing the purchase of\r\n      the Product and are authorized to do so on behalf of the Customer. This service is only available for\r\n      professionals and companies, and you represent that you are not a consumer or a minor.\r\n    </p>\r\n    <p class=\"mt-4 mb-2\">\r\n      <strong>CONFIDENTIALITY AGREEMENT</strong>\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      You agree that you shall maintain strictly confidential, and shall not reveal nor by any means transfer to a third\r\n      party, or use any and all information related to the Services, products, materials, and prototypes, and any\r\n      technical documentation that forms part of the Know-how of Product, or that it has received from third parties, or\r\n      any other information to which you have access by virtue of accepting these terms.\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service,\r\n      violate any laws in your jurisdiction (including but not limited to copyright laws).\r\n    </p>\r\n    <p class=\"mt-4 mb-2\">\r\n      <strong>DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY</strong>\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or\r\n      error-free.\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at\r\n      any time, without notice to you.\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all\r\n      products and services delivered to you through the service are (except as expressly stated by us) provided \u2018as is\u2019\r\n      and \u2018as available\u2019 for your use, without any representation, warranties or conditions of any kind, either express\r\n      or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a\r\n      particular purpose, durability, title, and non-infringement.\r\n    </p>\r\n    <p class=\"mt-4 mb-2\">\r\n      <strong>INDEMNIFICATION</strong>\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      You agree to indemnify, defend and hold harmless Cardinality.AI and our parent, subsidiaries, affiliates,\r\n      partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers,\r\n      interns and employees, harmless from any claim or demand, including reasonable attorneys\u2019 fees, made by any\r\n      third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by\r\n      reference or your violation of any law or the rights of a third-party.\r\n    </p>\r\n    <p class=\"mt-4 mb-2\">\r\n      <strong>SEVERABILITY</strong>\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      If any provision of these Terms of Service is determined to be unlawful, void, or unenforceable, such provision\r\n      shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion\r\n      shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and\r\n      enforceability of any other remaining provisions.\r\n    </p>\r\n    <p class=\"mt-4 mb-2\"><strong>GOVERNING LAW</strong></p>\r\n    <p class=\"mb-2\">\r\n      These Terms shall be governed and construed in accordance with the laws of Maryland, United States, without regard\r\n      to its conflict of law provisions.\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If\r\n      any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these\r\n      Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and\r\n      supersede and replace any prior agreements we might have had between us regarding the Service.\r\n    </p>\r\n    <p class=\"mt-4 mb-2\"><strong>CHANGES</strong></p>\r\n    <p class=\"mb-2\">\r\n      We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is\r\n      material we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material\r\n      change will be determined at our sole discretion.\r\n    </p>\r\n    <p class=\"mb-2\">\r\n      By continuing to access or use our Service after any revisions become effective, you agree to be bound by the\r\n      revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.\r\n    </p>\r\n\r\n    <p class=\"mt-4 mb-2\"><strong>CONTACT US</strong></p>\r\n    <p class=\"mb-2\">If you have any questions about these Terms, please contact us.</p>\r\n  </div>\r\n</ng-template>\r\n", styles: ["@charset \"UTF-8\";body{height:100%;overflow:hidden;width:100%!important;box-sizing:border-box;position:relative}.login#back{margin:auto;width:100%;position:relative;overflow:hidden;height:calc(1vh * 100)}.login .h2,.login h2{font-size:20px;color:var(--text-dark);font-family:\"Roboto\",sans-serif!important;font-weight:700;padding-top:8px}.login .login-content h2,.login .login-content h4{font-weight:700;color:#333!important;font-size:26px;margin:10px 0 30px}.login .login-content .btn-login{background-color:var(--btn);padding:10px;border:0}.login .mar-btm-40{margin-bottom:40px}.login .mar-btm-20{margin-bottom:20px}.login .form-group{position:relative;padding:0 18px}.login .form-group .fa-eye{position:absolute;right:25px;top:13px;color:var(--primary);font-size:15px;cursor:pointer}.login .form-group input[type=text]+.fa-eye:before{content:\"\\f070\"}.login .form-group .leftIcon{position:absolute;top:12px;left:12px;font-size:15px;color:#666}.login .form-group input{padding:0 10px;color:var(--text-dark)!important;background:var(--bg-light)!important;border:1px solid var(--table-border)!important;border-radius:5px}.login .form-group input:focus{border:1px solid var(--table-border)!important}.login .form-group .password{padding-right:40px}.login .form-control,.login input:focus,.login input:hover{border:1px solid var(--table-border)!important;box-shadow:none}.login .login-content input.form-control{padding:8px 12px 8px 0;background:transparent}.login .topWarmingContent{width:100%;padding-top:10px}.login .warmingIMg{width:75px;display:block}.login .warningContentP{width:100%;padding-top:10px;padding-right:20px}.login .warningContentP p{font-size:14px;padding:10px 0 0;color:var(--text-dark);line-height:1.6;margin:0}.login .loginBottomSet{padding-top:0}.login .login-content{width:100%;margin:0 auto}.login .btn-link{font-size:var(--font-13);font-weight:500;color:var(--text-dark);text-decoration:none;margin-top:3px;padding:0}.login .LogIn{margin-top:5px}.login .login-content h4{margin-bottom:10px}.login .Inputs{outline:none;padding:5px 10px;background-color:var(--bg-light);width:100%;height:36px;margin-bottom:8px;box-shadow:none;border:none}.login .btn-secondary{background-color:var(--btncancel);border:1px solid var(--primary);color:var(--primary);padding:8px 25px}.login .logo-group .logo-title{color:var(--text-dark);font-size:15px}.login .logo-group .logo-subtitle{color:var(--text-dark);font-size:13px;font-weight:400;letter-spacing:1.7px}.login .cfaLogoTop{display:block}.login .cfaLogoLeft{width:100%}.login .checkbox{float:left}.login .checkbox label{color:var(--text-dark);cursor:pointer}.login .clsPowered{position:absolute;bottom:40px;left:0px;right:0px;margin:0 auto;text-align:center}.login label{font-size:var(--font-13);font-weight:500!important}.login .clsMin-23{min-height:23px}.login .clsTopLogo{position:absolute;top:30px;left:0px;right:0px;margin:0 auto;text-align:center}.login .clsTopLogo h2{font-weight:700;color:#333!important;font-size:26px;margin:20px 0}.login .hero-gallery-inner{display:flex;flex-wrap:wrap}.login .fa-eye:before{content:\"\\f06e\";color:var(--primary);position:absolute;margin-top:27px;margin-left:-24px}.login .forget{font-size:var(--font-13);color:var(--text-dark);text-decoration:none}.login .checklabel{padding-left:10px;font-size:var(--font-13);margin-bottom:0}.login .Cardinality_logo{margin-top:-5px}.login h4#modal-basic-title{font-size:15px}.login .rightLoginSet{background:var(--bg-light)}.login .rightLoginSet .intake-form-labels{color:var(--text-dark)}.powered{position:absolute;bottom:0;left:0;right:0}.powered p,.powered span{color:var(--text-dark)}@media screen and (min-width: 991px) and (max-width: 1024px){.login .rightLoginSet{padding:0!important}}@media screen and (max-width: 1281px){.carousel-item{max-width:65%!important}}.banner-sec{background:#3E397E;background-position:center;background-repeat:no-repeat;background-size:cover;border-radius:0;height:100%}.logo-img h5{font-size:var(--font-16)}.login-content .registration-group::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#f5f5f5}.login-content .registration-group::-webkit-scrollbar{width:10px;background-color:#f5f5f5}.login-content .registration-group::-webkit-scrollbar-thumb{background-color:#146a5d;background-image:-webkit-gradient(linear,0 0,0 100%,color-stop(.5,rgba(255,255,255,.2)),color-stop(.5,transparent),to(transparent))}.goto-register{border-bottom:1px solid #146A5D}.picslogin{border-bottom:solid 1px #ccc;margin-top:25px}.picslogin span{position:absolute;text-align:center;margin-top:-13px;left:43%;background:#fff;padding:0 10px;font-size:14px}.pi{position:absolute;right:30px;top:50%;transform:translateY(-50%);cursor:pointer;font-size:15px}input[type=password]::-ms-reveal,input[type=password]::-ms-clear{display:none}\n"], components: [{ type: AlertComponent, selector: "app-alert" }, { type: i8__namespace.Checkbox, selector: "p-checkbox", inputs: ["value", "name", "disabled", "binary", "label", "ariaLabelledBy", "ariaLabel", "tabindex", "inputId", "style", "styleClass", "labelStyleClass", "formControl", "checkboxIcon", "readonly", "required", "trueValue", "falseValue"], outputs: ["onChange"] }, { type: i9__namespace.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "style", "styleClass", "badgeClass", "ariaLabel"], outputs: ["onClick", "onFocus", "onBlur"] }], directives: [{ type: i3__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i3__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i3__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i3__namespace.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i3__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i10__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i10__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LoginComponent$1, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-login',
                        templateUrl: './login.component.html',
                        styleUrls: ['./login.component.scss'],
                        providers: [api.MessageService]
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace$2.Store }, { type: i2__namespace.Router }, { type: i3__namespace.FormBuilder }, { type: i4__namespace.NgbModal }, { type: AlertService }, { type: AuthService }, { type: i2__namespace.ActivatedRoute }]; }, propDecorators: { input: [{
                    type: i0.ViewChild,
                    args: ['showhideinput']
                }], LOGININFO: [{
                    type: i0.Input
                }], RBACORG: [{
                    type: i0.Input
                }], passwordExpired: [{
                    type: i0.Output
                }], loginSuccessful: [{
                    type: i0.Output
                }] } });

    var LoginComponent = /** @class */ (function () {
        function LoginComponent(permissionStore, _storeservice) {
            this.permissionStore = permissionStore;
            this._storeservice = _storeservice;
            this.RBACORG = new RBACINFO();
            this.libOnPasswordExpired = new i0.EventEmitter();
            this.libOnLoginSuccessful = new i0.EventEmitter();
        }
        LoginComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.loginEvent.subscribe(function (val) {
                _this.RBACORG = val.RBACORG;
                _this.PERMISSION = val.PERMISSION;
                _this.LOGININFO = val.LOGININFO;
                _this._storeservice.setData('RBACORG', _this.RBACORG);
                _this.permissionStore.setStore(_this.PERMISSION);
            });
        };
        LoginComponent.prototype.onPasswordExpired = function ($event) {
            this.libOnPasswordExpired.emit($event);
        };
        LoginComponent.prototype.onLoginSuccessful = function ($event) {
            this.libOnLoginSuccessful.emit($event);
        };
        return LoginComponent;
    }());
    LoginComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LoginComponent, deps: [{ token: PermissionStore }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    LoginComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: LoginComponent, selector: "login", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", LOGININFO: "LOGININFO", loginEvent: "loginEvent" }, outputs: { libOnPasswordExpired: "libOnPasswordExpired", libOnLoginSuccessful: "libOnLoginSuccessful" }, ngImport: i0__namespace, template: "\n   <lib-login [RBACORG]=\"RBACORG\" [LOGININFO]=\"LOGININFO\" (passwordExpired)=\"onPasswordExpired($event)\" (loginSuccessful)=\"onLoginSuccessful($event)\"></lib-login>\n  ", isInline: true, components: [{ type: LoginComponent$1, selector: "lib-login", inputs: ["LOGININFO", "RBACORG"], outputs: ["passwordExpired", "loginSuccessful"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LoginComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'login',
                        template: "\n   <lib-login [RBACORG]=\"RBACORG\" [LOGININFO]=\"LOGININFO\" (passwordExpired)=\"onPasswordExpired($event)\" (loginSuccessful)=\"onLoginSuccessful($event)\"></lib-login>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: PermissionStore }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                    type: i0.Input
                }], PERMISSION: [{
                    type: i0.Input
                }], LOGININFO: [{
                    type: i0.Input
                }], loginEvent: [{
                    type: i0.Input
                }], libOnPasswordExpired: [{
                    type: i0.Output
                }], libOnLoginSuccessful: [{
                    type: i0.Output
                }] } });

    var MicrostrategyService = /** @class */ (function () {
        function MicrostrategyService(http, alertService, permissionStore, _storeservice) {
            var _this = this;
            this.http = http;
            this.alertService = alertService;
            this.permissionStore = permissionStore;
            this._storeservice = _storeservice;
            this._storeservice.currentStore.subscribe(function (res) {
                if (res['RBACORG'] && res['RBACORG'] !== '') {
                    _this.RBACORG = res['RBACORG'];
                    _this.environment = _this.RBACORG['environment'] ? _this.RBACORG['environment'] : '';
                }
            });
        }
        MicrostrategyService.prototype.getAuthToken = function () {
            var body = {
                username: this.environment.mstrUsername,
                password: this.environment.mstrPassword,
                loginMode: 1
            };
            return this.http.post(this.environment.mstrURL + "/api/auth/login", body, {
                withCredentials: true,
                headers: { 'Content-type': 'application/json' },
                observe: 'response'
            });
        };
        MicrostrategyService.prototype.getDossier = function (projectId, dossierId, pageNo) {
            var _this = this;
            var permissions = this.permissionStore.state;
            var projectUrl = this.environment.mstrURL + "/app/" + projectId;
            var dossierUrl = projectUrl + "/" + dossierId + "/" + pageNo;
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
                getLoginToken: function () { return __awaiter(_this, void 0, void 0, function () {
                    var response;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.getAuthToken().toPromise()];
                            case 1:
                                response = _a.sent();
                                return [2 /*return*/, response.headers.get('x-mstr-authtoken')];
                        }
                    });
                }); }
            })
                .catch(function (_err) { return _this.alertService.error("Failed to connect " + _this.environment.mstrURL); });
        };
        MicrostrategyService.prototype.getLibraryDetails = function () {
            return __awaiter(this, void 0, void 0, function () {
                var token, authtoken, headerInfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAuthToken().toPromise()];
                        case 1:
                            token = _a.sent();
                            authtoken = token.headers.get('x-mstr-authtoken');
                            headerInfo = {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json',
                                'X-MSTR-AuthToken': authtoken ? authtoken : '',
                                'X-MSTR-ProjectID': this.environment.mstrProjectID
                            };
                            return [2 /*return*/, this.http
                                    .get(this.environment.mstrURL + "/api/library", {
                                    withCredentials: true,
                                    headers: headerInfo
                                })
                                    .toPromise()
                                    .then(function (response) {
                                    return response.map(function (mstr) { return ({
                                        id: mstr.target.id,
                                        projectId: mstr.projectId,
                                        name: mstr.target.name
                                    }); });
                                })];
                    }
                });
            });
        };
        return MicrostrategyService;
    }());
    MicrostrategyService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MicrostrategyService, deps: [{ token: i1__namespace.HttpClient }, { token: AlertService }, { token: PermissionStore }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    MicrostrategyService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MicrostrategyService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MicrostrategyService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.HttpClient }, { type: AlertService }, { type: PermissionStore }, { type: DataStoreService }]; } });

    var PermissionDirective = /** @class */ (function () {
        function PermissionDirective(renderer, elementRef, dataStore) {
            this.renderer = renderer;
            this.elementRef = elementRef;
            this.dataStore = dataStore;
        }
        PermissionDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            var permissions = this.dataStore.state;
            if (permissions) {
                if (!permissions[this.fieldKey]) {
                    var template = this.elementRef.nativeElement;
                    if (template.tagName === 'A') {
                        if (template) {
                            var r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
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
                            var r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                            r.innerHTML = template.innerHTML;
                            r.className = template.className;
                            r.className += ' p-disabled';
                            this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                        }
                    }
                    else {
                        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', 'true');
                        var childInputNodes = this.elementRef.nativeElement.querySelectorAll('input, select, textarea, button, a, ng-select, div, lable');
                        childInputNodes.forEach(function (elem) {
                            _this.renderer.setAttribute(elem, 'disabled', 'true');
                        });
                    }
                }
            }
        };
        return PermissionDirective;
    }());
    PermissionDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionDirective, deps: [{ token: i0__namespace.Renderer2 }, { token: i0__namespace.ElementRef }, { token: PermissionStore }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    PermissionDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: PermissionDirective, selector: "[fieldKey]", inputs: { fieldKey: "fieldKey" }, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[fieldKey]'
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Renderer2 }, { type: i0__namespace.ElementRef }, { type: PermissionStore }]; }, propDecorators: { fieldKey: [{
                    type: i0.Input
                }] } });

    var ShowFieldDirective = /** @class */ (function () {
        function ShowFieldDirective(templateRef, viewContainer, dataStore) {
            this.templateRef = templateRef;
            this.viewContainer = viewContainer;
            this.dataStore = dataStore;
        }
        ShowFieldDirective.prototype.ngOnInit = function () {
            var _this = this;
            var permissions = this.dataStore.state;
            if (!permissions || !permissions[this.showField]) {
                this.viewContainer.clear();
            }
            else {
                this.viewContainer.createEmbeddedView(this.templateRef);
                var lookupIds = sessionStorage.getItem('LOOKUP_IDS');
                if (lookupIds) {
                    var lookupIdArray_1 = lookupIds.split(',');
                    Object.entries(permissions)
                        .filter(function (item) { return item[0].startsWith('GALKP_'); })
                        .forEach(function (_a) {
                        var e_1, _b;
                        var _c = __read(_a, 2), key = _c[0], value = _c[1];
                        try {
                            for (var value_1 = __values(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
                                var _value = value_1_1.value;
                                var _key = key.replace('GALKP_', '');
                                if (_key === _this.showField &&
                                    lookupIdArray_1.includes(String(_value['lookupid'])) &&
                                    _value['action'] === 'H') {
                                    _this.viewContainer.clear();
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (value_1_1 && !value_1_1.done && (_b = value_1.return)) _b.call(value_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                    });
                }
            }
        };
        return ShowFieldDirective;
    }());
    ShowFieldDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShowFieldDirective, deps: [{ token: i0__namespace.TemplateRef }, { token: i0__namespace.ViewContainerRef }, { token: PermissionStore }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    ShowFieldDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: ShowFieldDirective, selector: "[showField]", inputs: { showField: "showField" }, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShowFieldDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[showField]'
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.TemplateRef }, { type: i0__namespace.ViewContainerRef }, { type: PermissionStore }]; }, propDecorators: { showField: [{
                    type: i0.Input
                }] } });

    var DirectivesModule = /** @class */ (function () {
        function DirectivesModule() {
        }
        return DirectivesModule;
    }());
    DirectivesModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DirectivesModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, declarations: [PermissionDirective, ShowFieldDirective], imports: [i10.CommonModule], exports: [PermissionDirective, ShowFieldDirective] });
    DirectivesModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, imports: [[i10.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [PermissionDirective, ShowFieldDirective],
                        imports: [i10.CommonModule],
                        exports: [PermissionDirective, ShowFieldDirective]
                    }]
            }] });

    var AlertModule = /** @class */ (function () {
        function AlertModule() {
        }
        return AlertModule;
    }());
    AlertModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    AlertModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, declarations: [AlertComponent], imports: [i10.CommonModule], exports: [AlertComponent] });
    AlertModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, imports: [[i10.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i10.CommonModule],
                        declarations: [AlertComponent],
                        exports: [AlertComponent]
                    }]
            }] });

    var PicsLoginModule = /** @class */ (function () {
        function PicsLoginModule() {
        }
        return PicsLoginModule;
    }());
    PicsLoginModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsLoginModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    PicsLoginModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsLoginModule, declarations: [LoginComponent$1], imports: [i10.CommonModule,
            i3.FormsModule,
            i3.ReactiveFormsModule,
            i4.NgbModule,
            tabmenu.TabMenuModule,
            tabview.TabViewModule,
            treeselect.TreeSelectModule,
            i1.HttpClientModule,
            i8.CheckboxModule,
            dropdown.DropdownModule,
            card.CardModule,
            confirmdialog.ConfirmDialogModule,
            accordion.AccordionModule,
            message.MessageModule,
            table.TableModule,
            inputtext.InputTextModule,
            calendar.CalendarModule,
            editor.EditorModule,
            fieldset.FieldsetModule,
            i9.ButtonModule,
            radiobutton.RadioButtonModule,
            inputtextarea.InputTextareaModule,
            inputmask.InputMaskModule,
            steps.StepsModule,
            toast.ToastModule,
            ripple.RippleModule,
            avatar.AvatarModule,
            badge.BadgeModule,
            multiselect.MultiSelectModule,
            inputswitch.InputSwitchModule,
            progressspinner.ProgressSpinnerModule,
            speeddial.SpeedDialModule,
            orderlist.OrderListModule,
            fileupload.FileUploadModule,
            dialog.DialogModule,
            password.PasswordModule,
            knob.KnobModule,
            sidebar.SidebarModule,
            contextmenu.ContextMenuModule,
            confirmpopup.ConfirmPopupModule,
            DirectivesModule,
            AlertModule], exports: [LoginComponent$1] });
    PicsLoginModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsLoginModule, imports: [[
                i10.CommonModule,
                i3.FormsModule,
                i3.ReactiveFormsModule,
                i4.NgbModule,
                tabmenu.TabMenuModule,
                tabview.TabViewModule,
                treeselect.TreeSelectModule,
                i1.HttpClientModule,
                i8.CheckboxModule,
                dropdown.DropdownModule,
                card.CardModule,
                confirmdialog.ConfirmDialogModule,
                accordion.AccordionModule,
                message.MessageModule,
                table.TableModule,
                inputtext.InputTextModule,
                calendar.CalendarModule,
                editor.EditorModule,
                fieldset.FieldsetModule,
                i9.ButtonModule,
                radiobutton.RadioButtonModule,
                inputtextarea.InputTextareaModule,
                inputmask.InputMaskModule,
                steps.StepsModule,
                toast.ToastModule,
                ripple.RippleModule,
                avatar.AvatarModule,
                badge.BadgeModule,
                multiselect.MultiSelectModule,
                inputswitch.InputSwitchModule,
                progressspinner.ProgressSpinnerModule,
                speeddial.SpeedDialModule,
                orderlist.OrderListModule,
                fileupload.FileUploadModule,
                dialog.DialogModule,
                password.PasswordModule,
                knob.KnobModule,
                sidebar.SidebarModule,
                contextmenu.ContextMenuModule,
                confirmpopup.ConfirmPopupModule,
                DirectivesModule,
                AlertModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsLoginModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            LoginComponent$1
                        ],
                        imports: [
                            i10.CommonModule,
                            i3.FormsModule,
                            i3.ReactiveFormsModule,
                            i4.NgbModule,
                            tabmenu.TabMenuModule,
                            tabview.TabViewModule,
                            treeselect.TreeSelectModule,
                            i1.HttpClientModule,
                            i8.CheckboxModule,
                            dropdown.DropdownModule,
                            card.CardModule,
                            confirmdialog.ConfirmDialogModule,
                            accordion.AccordionModule,
                            message.MessageModule,
                            table.TableModule,
                            inputtext.InputTextModule,
                            calendar.CalendarModule,
                            editor.EditorModule,
                            fieldset.FieldsetModule,
                            i9.ButtonModule,
                            radiobutton.RadioButtonModule,
                            inputtextarea.InputTextareaModule,
                            inputmask.InputMaskModule,
                            steps.StepsModule,
                            toast.ToastModule,
                            ripple.RippleModule,
                            avatar.AvatarModule,
                            badge.BadgeModule,
                            multiselect.MultiSelectModule,
                            inputswitch.InputSwitchModule,
                            progressspinner.ProgressSpinnerModule,
                            speeddial.SpeedDialModule,
                            orderlist.OrderListModule,
                            fileupload.FileUploadModule,
                            dialog.DialogModule,
                            password.PasswordModule,
                            knob.KnobModule,
                            sidebar.SidebarModule,
                            contextmenu.ContextMenuModule,
                            confirmpopup.ConfirmPopupModule,
                            DirectivesModule,
                            AlertModule
                        ],
                        exports: [
                            LoginComponent$1
                        ],
                        schemas: [i0.NO_ERRORS_SCHEMA, i0.CUSTOM_ELEMENTS_SCHEMA],
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
    var Logger = /** @class */ (function () {
        function Logger(source) {
            this.source = source;
        }
        /**
         * Enables production mode.
         * Sets logging level to LogLevel.Warning.
         */
        Logger.enableProductionMode = function () {
            Logger.level = LogLevel.Warning;
        };
        /**
         * Logs messages or objects  with the debug level.
         * Works the same as console.log().
         */
        Logger.prototype.debug = function () {
            var objects = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                objects[_i] = arguments[_i];
            }
            this.log(console.log, LogLevel.Debug, objects);
        };
        /**
         * Logs messages or objects  with the info level.
         * Works the same as console.log().
         */
        Logger.prototype.info = function () {
            var objects = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                objects[_i] = arguments[_i];
            }
            this.log(console.info, LogLevel.Info, objects);
        };
        /**
         * Logs messages or objects  with the warning level.
         * Works the same as console.log().
         */
        Logger.prototype.warn = function () {
            var objects = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                objects[_i] = arguments[_i];
            }
            this.log(console.warn, LogLevel.Warning, objects);
        };
        /**
         * Logs messages or objects  with the error level.
         * Works the same as console.log().
         */
        Logger.prototype.error = function () {
            var objects = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                objects[_i] = arguments[_i];
            }
            this.log(console.error, LogLevel.Error, objects);
        };
        Logger.prototype.log = function (func, level, objects) {
            var _this = this;
            if (level <= Logger.level) {
                var log = this.source ? ['[' + this.source + ']'].concat(objects) : objects;
                func.apply(console, log);
                Logger.outputs.forEach(function (output) { return output.apply(output, __spreadArray([_this.source, level], __read(objects))); });
            }
        };
        return Logger;
    }());
    /**
     * Current logging level.
     * Set it to LogLevel.Off to disable logs completely.
     */
    Logger.level = LogLevel.Debug;
    /**
     * Additional log outputs.
     */
    Logger.outputs = [];

    var log = new Logger('AuthenticationGuard');
    var AuthGuard = /** @class */ (function () {
        function AuthGuard(router, credentialsService) {
            this.router = router;
            this.credentialsService = credentialsService;
        }
        AuthGuard.prototype.canActivate = function (_route, _state) {
            if (this.credentialsService.isAuthenticated()) {
                return true;
            }
            log.debug('Not authenticated, redirecting and adding redirect url...');
            this.router.navigate(['/login']);
            return false;
        };
        return AuthGuard;
    }());
    AuthGuard.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthGuard, deps: [{ token: i2__namespace.Router }, { token: CredentialsService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AuthGuard.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthGuard, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthGuard, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i2__namespace.Router }, { type: CredentialsService }]; } });

    var CardiLoginModule = /** @class */ (function () {
        function CardiLoginModule() {
        }
        return CardiLoginModule;
    }());
    CardiLoginModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CardiLoginModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    CardiLoginModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CardiLoginModule, declarations: [LoginComponent], imports: [PicsLoginModule], exports: [LoginComponent] });
    CardiLoginModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CardiLoginModule, providers: [
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
            i1.HttpClient,
            HttpService,
            AlertService,
            api.ConfirmationService,
            PermissionStore,
            DataStoreService
        ], imports: [[
                PicsLoginModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CardiLoginModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            LoginComponent
                        ],
                        imports: [
                            PicsLoginModule
                        ],
                        exports: [
                            LoginComponent
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
                            i1.HttpClient,
                            HttpService,
                            AlertService,
                            api.ConfirmationService,
                            PermissionStore,
                            DataStoreService
                        ]
                    }]
            }] });

    /*
     * Public API Surface of login
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CardiLoginModule = CardiLoginModule;
    exports.LoginComponent = LoginComponent;
    exports.LoginService = LoginService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=pics-core-login.umd.js.map
