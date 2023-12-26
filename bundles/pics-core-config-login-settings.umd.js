(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/forms'), require('@angular/router'), require('rxjs/add/operator/map'), require('@angular/common/http'), require('ngxf-uploader'), require('rxjs/internal/observable/throwError'), require('rxjs/operators'), require('@angular/common'), require('primeng/card'), require('primeng/dialog'), require('primeng/checkbox'), require('primeng/dropdown'), require('primeng/inputtext'), require('primeng/api'), require('@ng-bootstrap/ng-bootstrap'), require('primeng/accordion'), require('primeng/avatar'), require('primeng/badge'), require('primeng/button'), require('primeng/calendar'), require('primeng/confirmdialog'), require('primeng/confirmpopup'), require('primeng/contextmenu'), require('primeng/editor'), require('primeng/fieldset'), require('primeng/fileupload'), require('primeng/inputmask'), require('primeng/inputswitch'), require('primeng/inputtextarea'), require('primeng/knob'), require('primeng/message'), require('primeng/multiselect'), require('primeng/orderlist'), require('primeng/password'), require('primeng/progressspinner'), require('primeng/radiobutton'), require('primeng/ripple'), require('primeng/sidebar'), require('primeng/speeddial'), require('primeng/steps'), require('primeng/table'), require('primeng/tabmenu'), require('primeng/tabview'), require('primeng/toast'), require('primeng/treeselect')) :
    typeof define === 'function' && define.amd ? define('@pics-core/config-login-settings', ['exports', '@angular/core', 'rxjs', '@angular/forms', '@angular/router', 'rxjs/add/operator/map', '@angular/common/http', 'ngxf-uploader', 'rxjs/internal/observable/throwError', 'rxjs/operators', '@angular/common', 'primeng/card', 'primeng/dialog', 'primeng/checkbox', 'primeng/dropdown', 'primeng/inputtext', 'primeng/api', '@ng-bootstrap/ng-bootstrap', 'primeng/accordion', 'primeng/avatar', 'primeng/badge', 'primeng/button', 'primeng/calendar', 'primeng/confirmdialog', 'primeng/confirmpopup', 'primeng/contextmenu', 'primeng/editor', 'primeng/fieldset', 'primeng/fileupload', 'primeng/inputmask', 'primeng/inputswitch', 'primeng/inputtextarea', 'primeng/knob', 'primeng/message', 'primeng/multiselect', 'primeng/orderlist', 'primeng/password', 'primeng/progressspinner', 'primeng/radiobutton', 'primeng/ripple', 'primeng/sidebar', 'primeng/speeddial', 'primeng/steps', 'primeng/table', 'primeng/tabmenu', 'primeng/tabview', 'primeng/toast', 'primeng/treeselect'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global["pics-core"] = global["pics-core"] || {}, global["pics-core"]["config-login-settings"] = {}), global.ng.core, global.rxjs, global.ng.forms, global.ng.router, global.rxjs["add/operator/map"], global.ng.common.http, global.i1$2, global.rxjs["internal/observable/throwError"], global.rxjs.operators, global.ng.common, global.i9, global.i10, global.i11, global.i12, global.i13, global.api, global.ngBootstrap, global.accordion, global.avatar, global.badge, global.button, global.calendar, global.confirmdialog, global.confirmpopup, global.contextmenu, global.editor, global.fieldset, global.fileupload, global.inputmask, global.inputswitch, global.inputtextarea, global.knob, global.message, global.multiselect, global.orderlist, global.password, global.progressspinner, global.radiobutton, global.ripple, global.sidebar, global.speeddial, global.steps, global.table, global.tabmenu, global.tabview, global.toast, global.treeselect));
})(this, (function (exports, i0, rxjs, i5, i1, map, i1$1, i1$2, throwError, operators, i2, i9, i10, i11, i12, i13, api, ngBootstrap, accordion, avatar, badge, button, calendar, confirmdialog, confirmpopup, contextmenu, editor, fieldset, fileupload, inputmask, inputswitch, inputtextarea, knob, message, multiselect, orderlist, password, progressspinner, radiobutton, ripple, sidebar, speeddial, steps, table, tabmenu, tabview, toast, treeselect) { 'use strict';

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
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i9__namespace = /*#__PURE__*/_interopNamespace(i9);
    var i10__namespace = /*#__PURE__*/_interopNamespace(i10);
    var i11__namespace = /*#__PURE__*/_interopNamespace(i11);
    var i12__namespace = /*#__PURE__*/_interopNamespace(i12);
    var i13__namespace = /*#__PURE__*/_interopNamespace(i13);

    var ConfigLoginSettingsService = /** @class */ (function () {
        function ConfigLoginSettingsService() {
        }
        return ConfigLoginSettingsService;
    }());
    ConfigLoginSettingsService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConfigLoginSettingsService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ConfigLoginSettingsService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConfigLoginSettingsService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConfigLoginSettingsService, decorators: [{
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
    var AttachmentConfig$1 = /** @class */ (function () {
        function AttachmentConfig() {
        }
        return AttachmentConfig;
    }());
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
            if (typeof value !== "object")
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

    var AppConstants = /** @class */ (function () {
        function AppConstants() {
        }
        return AppConstants;
    }());
    AppConstants.errorMessage = 'Something went wrong!';
    AppConstants.regexEmail = '^[0-9a-zA-Z.-]+[@][0-9a-zA-Z.-]+[.][0-9a-zA-Z]{2,}$';
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
                if (event instanceof i1.NavigationStart) {
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
    AlertService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService, deps: [{ token: i1__namespace.Router }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AlertService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: i1__namespace.Router }]; } });
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

    var HttpService = /** @class */ (function () {
        function HttpService(http, _storeservice) {
            var _this = this;
            this.http = http;
            this._storeservice = _storeservice;
            this.overrideUrl = true;
            this.baseUrl = '';
            this.headers = new i1$1.HttpHeaders()
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
            return new i1$1.HttpHeaders().set('key', 'value');
        };
        HttpService.prototype.getHttpNewHeaders = function () {
            return this.headers.set('Authorization', "Bearer " + this.getToken());
        };
        HttpService.prototype.getAttachmentHttpHeaders = function (contentType) {
            return new i1$1.HttpHeaders().set('Content-Type', contentType).set('x-ms-blob-type', 'BlockBlob');
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
    HttpService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HttpService, deps: [{ token: i1__namespace$1.HttpClient }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HttpService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HttpService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HttpService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: i1__namespace$1.HttpClient }, { type: DataStoreService }]; } });

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
                headers: new i1$1.HttpHeaders()
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
    DynamicTabPageService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DynamicTabPageService, deps: [{ token: i1__namespace$2.NgxfUploaderService }, { token: HttpService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    DynamicTabPageService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DynamicTabPageService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DynamicTabPageService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$2.NgxfUploaderService }, { type: HttpService }]; } });

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
                if (res['data'] === 'MFA_CODE_SEND') {
                    return rxjs.of(res['data']);
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
            return rxjs.forkJoin([this.httpService.get(AuthURL.EndPoints.auth.user.userInfo)]).pipe(operators.tap(function (_a) {
                var _b = __read(_a, 1), user = _b[0];
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
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAuthorizedPages()];
                        case 1:
                            dynamicPages = _a.sent();
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
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getCurrentOrg()];
                        case 1:
                            orgId = _a.sent();
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
    AuthService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthService, deps: [{ token: i0__namespace.Injector }, { token: HttpService }, { token: AuthStore }, { token: i1__namespace.Router }, { token: CredentialsService }, { token: LocalService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AuthService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: HttpService }, { type: AuthStore }, { type: i1__namespace.Router }, { type: CredentialsService }, { type: LocalService }]; } });

    var AttachmentsService = /** @class */ (function () {
        function AttachmentsService(http) {
            this.http = http;
            // This is intentional
        }
        AttachmentsService.prototype.getAttachmentReferral = function (referralid) {
            return this.http.get(AttachmentConfig$1.EndPoint.Attachments.GetAttachmentReferral + '/' + referralid);
        };
        AttachmentsService.prototype.getCategoryLookup = function (name) {
            return this.http.get(AttachmentConfig$1.EndPoint.Attachments.GetCategoryLookup + '/' + name);
        };
        AttachmentsService.prototype.uploadKey = function (objparams) {
            return this.http.post(AttachmentConfig$1.EndPoint.Attachments.UploadKey, objparams);
        };
        AttachmentsService.prototype.downloadKey = function (objparams) {
            return this.http.post(AttachmentConfig$1.EndPoint.Attachments.DownloadKey, objparams);
        };
        AttachmentsService.prototype.postAttachment = function (objparams) {
            return this.http.post(AttachmentConfig$1.EndPoint.Attachments.PostAttachment, objparams);
        };
        AttachmentsService.prototype.putAttachment = function (objparams, attachmentId) {
            console.log(AttachmentConfig$1.EndPoint.Attachments.PutAttachment + '/' + attachmentId, objparams);
            return this.http.patch(AttachmentConfig$1.EndPoint.Attachments.PutAttachment + '/' + attachmentId, objparams);
        };
        return AttachmentsService;
    }());
    AttachmentsService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AttachmentsService, deps: [{ token: HttpService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AttachmentsService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AttachmentsService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AttachmentsService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: HttpService }]; } });

    var ConfigurationSettingsConfig = /** @class */ (function () {
        function ConfigurationSettingsConfig() {
        }
        return ConfigurationSettingsConfig;
    }());
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

    var ConfigurationSettingsService = /** @class */ (function () {
        function ConfigurationSettingsService(httpService) {
            this.httpService = httpService;
            // This is intentional
        }
        ConfigurationSettingsService.prototype.getUserList = function (orgid) {
            return this.httpService.get(ConfigurationSettingsConfig.EndPoint.User.getUserorgList + orgid);
        };
        ConfigurationSettingsService.prototype.saveConfigSettings = function (modal) {
            return this.httpService.post(ConfigurationSettingsConfig.EndPoint.ConfigSettings.saveConfig, modal);
        };
        ConfigurationSettingsService.prototype.getConfigList = function () {
            return this.httpService.get(ConfigurationSettingsConfig.EndPoint.ConfigSettings.getConfigList);
        };
        ConfigurationSettingsService.prototype.getConfigById = function (id) {
            return this.httpService.get(ConfigurationSettingsConfig.EndPoint.ConfigSettings.getConfigById + id);
        };
        ConfigurationSettingsService.prototype.deleteConfig = function (id) {
            return this.httpService.delete(ConfigurationSettingsConfig.EndPoint.ConfigSettings.deleteConfig + id);
        };
        ConfigurationSettingsService.prototype.updateConfig = function (id, modal) {
            return this.httpService.patch(ConfigurationSettingsConfig.EndPoint.ConfigSettings.updateConfig + id, modal);
        };
        ConfigurationSettingsService.prototype.getAllUserRole = function (id) {
            return this.httpService.get(ConfigurationSettingsConfig.EndPoint.role.getAllOrgRole.replace('{orgid}', String(id)));
        };
        ConfigurationSettingsService.prototype.getEmailTemplateNewList = function () {
            return this.httpService.get(ConfigurationSettingsConfig.EndPoint.Email.emailtemplateList);
        };
        ConfigurationSettingsService.prototype.getAllOrganizations = function () {
            return this.httpService.get(ConfigurationSettingsConfig.EndPoint.org.getOrganizations);
        };
        ConfigurationSettingsService.prototype.uploadKey = function (objparams) {
            return this.httpService.post(ConfigurationSettingsConfig.EndPoint.Attachments.UploadKey, objparams);
        };
        return ConfigurationSettingsService;
    }());
    ConfigurationSettingsService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConfigurationSettingsService, deps: [{ token: HttpService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ConfigurationSettingsService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConfigurationSettingsService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConfigurationSettingsService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: HttpService }]; } });

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
    AlertComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AlertComponent, selector: "app-alert", ngImport: i0__namespace, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], directives: [{ type: i2__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertComponent, decorators: [{
                type: i0.Component,
                args: [{
                        // moduleId: module.id,
                        selector: 'app-alert',
                        templateUrl: 'alert.component.html',
                        styleUrls: ['./alert.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: AlertService }]; } });

    var ConfigLoginSettingsComponent$1 = /** @class */ (function () {
        function ConfigLoginSettingsComponent(authService, alertService, attachmentService, httpService, _formBuilder, _configurationSettingsService, _storeservice) {
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
            this.loginEvent$ = new rxjs.BehaviorSubject(null);
            this.userid = sessionStorage.getItem('id');
            // this.orgSubs = this.authService.orgInfo.subscribe(o => {
            //   this.orgId = o;
            //   if (this.orgId) {
            //     this.getRolesList();
            //   }
            // });
        }
        ConfigLoginSettingsComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.orgSubs = this._storeservice.currentStore.subscribe(function (res) {
                if (res['RBACORG'] && res['RBACORG'] !== '') {
                    _this.RBACORG = res['RBACORG'];
                    console.log(_this.RBACORG, 'RBACORG Profile');
                    _this.environment = _this.RBACORG['environment'];
                    _this.orgId = parseInt(_this.RBACORG['orgID']);
                    if (_this.environment) {
                        _this.organizationsList();
                        _this.getEmailTemplateNewList();
                        _this.initilizeForm();
                        _this.getRolesList();
                        _this.getConfigById();
                    }
                }
            });
        };
        ConfigLoginSettingsComponent.prototype.initilizeForm = function () {
            this.configRegistrationForm = this._formBuilder.group({
                id: [''],
                registration: false,
                layout: [1],
                role_for_registration: ['', i5.Validators.required],
                template_for_registration: ['', i5.Validators.required],
                banner: ['', i5.Validators.required],
                organization_title: ['', i5.Validators.required],
                logo: ['', i5.Validators.required],
                organizationid: ['', i5.Validators.required]
            });
        };
        ConfigLoginSettingsComponent.prototype.getRolesList = function () {
            var _this = this;
            this._configurationSettingsService.getAllUserRole(this.orgId).subscribe(function (res) {
                _this.userRoles = res['data'];
            }, function (_error) { return _this.alertService.error(AppConstants.errorMessage); });
        };
        ConfigLoginSettingsComponent.prototype.getEmailTemplateNewList = function () {
            var _this = this;
            this._configurationSettingsService.getEmailTemplateNewList().subscribe(function (_res) {
                if (_res) {
                    _this.emailTemplate = _res.data;
                }
            });
        };
        ConfigLoginSettingsComponent.prototype.organizationsList = function () {
            var _this = this;
            this._configurationSettingsService.getAllOrganizations().subscribe(function (res) {
                _this.organizations = res.data;
            });
        };
        ConfigLoginSettingsComponent.prototype.handleFileInput = function (fileValue) {
            var _this = this;
            var target = fileValue.target;
            var file = target.files[0];
            this.uploadedFileLogo = fileValue.target.files[0].name;
            this.imageDataLogo = {
                contentType: fileValue.target.files[0].type,
                fileName: "login-orgimage/" + this.userid + "/" + this.uploadedFileLogo
            };
            if (this.validateImage(fileValue.target.files, 'LOGO')) {
                this._configurationSettingsService.uploadKey(this.imageDataLogo).subscribe(function (res) {
                    _this.urlPathLogo = res.data;
                    var uploadAttachment = document.getElementById('file');
                    var uploadAttachmentDetails = uploadAttachment.files[0];
                    _this.httpService.putUpload(_this.urlPathLogo, uploadAttachmentDetails, uploadAttachmentDetails.type).subscribe(function (_resp) {
                        _this.alertService.success('Uploaded Successfully!');
                        var reader = new FileReader();
                        reader.onload = function () {
                            // this.thumbnailLogo = reader.result as string;
                            var urlPathLogo = _this.urlPathLogo ? _this.urlPathLogo.split('?')[0] : '';
                            _this.thumbnailLogo = urlPathLogo;
                            _this.configRegistrationForm.patchValue({
                                logo: urlPathLogo
                            });
                        };
                        reader.readAsDataURL(file);
                        _this.attachTypeLogo = fileValue.target.files[0].type;
                    }, function (error) {
                        if (error.status == 0) {
                            _this.alertService.error(AppConstants.errorMessage);
                            _this.uploadedFileLogo = '';
                            _this.urlPathLogo = '';
                        }
                    });
                }, function (_error) {
                    _this.alertService.error(AppConstants.errorMessage);
                });
            }
        };
        ConfigLoginSettingsComponent.prototype.validateImage = function (file, type) {
            var fileSize = Number(file[0].size) / 1024;
            var filetype = file[0].type.replace('image/', '');
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
                this.alertService.warn(filetype + " format is not supported");
                return false;
            }
        };
        ConfigLoginSettingsComponent.prototype.removeThumbnail = function () {
            this.thumbnailLogo = '';
        };
        ConfigLoginSettingsComponent.prototype.handleFileInputBanner = function (fileValue) {
            var _this = this;
            var target = fileValue.target;
            var file = target.files[0];
            this.uploadedFileBanner = fileValue.target.files[0].name;
            this.imageDataBanner = {
                contentType: fileValue.target.files[0].type,
                fileName: "login-orgimage/" + this.userid + "/" + this.uploadedFileBanner
            };
            if (this.validateImage(fileValue.target.files, 'BANNER')) {
                this.attachmentService.uploadKey(this.imageDataBanner).subscribe(function (res) {
                    _this.urlPathBanner = res.data;
                    var uploadAttachment = document.getElementById('file1');
                    var uploadAttachmentDetails = uploadAttachment.files[0];
                    _this.httpService
                        .putUpload(_this.urlPathBanner, uploadAttachmentDetails, uploadAttachmentDetails.type)
                        .subscribe(function (_resp) {
                        _this.alertService.success('Uploaded Successfully!');
                        var reader = new FileReader();
                        reader.onload = function () {
                            _this.configRegistrationForm.patchValue({
                                banner: _this.urlPathBanner
                            });
                        };
                        reader.readAsDataURL(file);
                        _this.attachTypeBanner = fileValue.target.files[0].type;
                    }, function (error) {
                        if (error.status == 0) {
                            _this.alertService.error(AppConstants.errorMessage);
                            _this.uploadedFileBanner = '';
                            _this.urlPathBanner = '';
                        }
                    });
                }, function (_error) {
                    _this.alertService.error(AppConstants.errorMessage);
                });
            }
        };
        ConfigLoginSettingsComponent.prototype.removeThumbnailBanner = function () {
            this.thumbnailBanner = '';
        };
        ConfigLoginSettingsComponent.prototype.saveConfig = function () {
            var _this = this;
            var validate = this.conditionValidation();
            if (validate) {
                if (this.editConfigSettings) {
                    var inputRequest = {
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
                    this._configurationSettingsService.updateConfig(this.editConfigSettings.id, inputRequest).subscribe(function (_res) {
                        _this.alertService.success('Updated successfully!');
                    });
                }
                else {
                    var urlPathLogo = this.urlPathLogo ? this.urlPathLogo.split('?')[0] : '';
                    var urlPathBanner = this.urlPathBanner ? this.urlPathBanner.split('?')[0] : '';
                    this.configRegistrationForm.patchValue({
                        logo: urlPathLogo,
                        banner: urlPathBanner
                    });
                    var inputRequest = {
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
                    this._configurationSettingsService.saveConfigSettings(inputRequest).subscribe(function (_res) {
                        _this.alertService.success('Saved successfully!');
                    });
                }
            }
        };
        ConfigLoginSettingsComponent.prototype.backToPreview = function () {
            this.updateButton = false;
        };
        ConfigLoginSettingsComponent.prototype.showUploadedLogo = function () {
            this.visible = true;
        };
        ConfigLoginSettingsComponent.prototype.showUploadedBanner = function () {
            this.bannerVisible = true;
        };
        ConfigLoginSettingsComponent.prototype.getConfigById = function () {
            var _this = this;
            this._configurationSettingsService.getConfigList().subscribe(function (res) {
                if (res.data) {
                    _this.updateButton = true;
                    var configSettingsList = res.data;
                    var valuesMax1 = configSettingsList.map(function (item) { return item.id; });
                    var max1_1 = Math.max.apply(Math, __spreadArray([], __read(valuesMax1)));
                    _this.editConfigSettings = configSettingsList.filter(function (x) { return x.id === max1_1; })[0];
                    _this.configRegistrationForm.patchValue(_this.editConfigSettings);
                    // eslint-disable-next-line radix
                    _this.configRegistrationForm.patchValue({ organizationid: parseInt(_this.editConfigSettings.organizationid) });
                    _this.thumbnailLogo = _this.editConfigSettings.logo;
                    _this.thumbnailBanner = _this.editConfigSettings.banner;
                }
                else {
                    _this.updateButton = false;
                }
            });
        };
        ConfigLoginSettingsComponent.prototype.conditionValidation = function () {
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
        };
        return ConfigLoginSettingsComponent;
    }());
    ConfigLoginSettingsComponent$1.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConfigLoginSettingsComponent$1, deps: [{ token: AuthService }, { token: AlertService }, { token: AttachmentsService }, { token: HttpService }, { token: i5__namespace.FormBuilder }, { token: ConfigurationSettingsService }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ConfigLoginSettingsComponent$1.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConfigLoginSettingsComponent$1, selector: "lib-config-login-settings", ngImport: i0__namespace, template: "<app-alert></app-alert>\r\n<p-card styleClass=\"w-100\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 col-12\">\r\n      <div class=\"customizer customizer-styling customizer-styling-skin skin\">\r\n        <h6 class=\"font-weight-bold mb-3\">Choose Login Layout</h6>\r\n        <div class=\"d-flex justify-content-start align-items-center\">\r\n          <!-- Layout 1 -->\r\n          <div class=\"custom-control custom-radio mr-4 mb-md-0 mb-3\">\r\n            <figure class=\"active mb-0\">\r\n              <label role=\"link\" class=\"mb-0 layout-select\" for=\"layout1\">\r\n                <img src=\"../../../../assets/images/Layout.jpg\" class=\"img-fluid\" alt=\"layout1\" />\r\n              </label>\r\n              <figcaption>\r\n                <input\r\n                  type=\"radio\"\r\n                  id=\"layout1\"\r\n                  name=\"layout\"\r\n                  class=\"custom-control-input layout-name\"\r\n                  [attr.checked]=\"true\"\r\n                  value=\"Layout 1\" />\r\n                <label class=\"custom-control-label mt-2 mb-0\" for=\"layout1\">Layout 1</label>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</p-card>\r\n\r\n<p-card styleClass=\"w-100 mt-3\">\r\n  <div class=\"customizer\" [formGroup]=\"configRegistrationForm\">\r\n    <h6 class=\"font-weight-bold mb-3\">Configure Login</h6>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 col-sm-6 col-12 form-group\">\r\n        <label class=\"intake-form-labels\" for=\"organizationName\">Organization Title</label>\r\n        <input\r\n          class=\"form-control\"\r\n          type=\"text\"\r\n          placeholder=\"Title Name\"\r\n          id=\"organizationName\"\r\n          autocomplete=\"off\"\r\n          formControlName=\"organization_title\"\r\n          pInputText />\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-6 col-12 form-group\">\r\n        <label class=\"intake-form-labels mb-0\" for=\"thumbnailBanner\">Upload Banner</label>\r\n        <div *ngIf=\"!thumbnailBanner\" id=\"thumbnailBanner\">\r\n          <figure class=\"mt-2 mb-0 pic-upload justify-content-md-center\">\r\n            <label for=\"file1\" class=\"btn btn-primary file-upload-btn mb-0\">\r\n              <span class=\"d-flex align-items-center justify-content-center\">\r\n                <span class=\"aterial-icon material-symbols-outlined text-white mr-2\">cloud_upload</span>\r\n                <span>Upload</span>\r\n              </span>\r\n            </label>\r\n            <input\r\n              type=\"file\"\r\n              id=\"file1\"\r\n              aria-hidden=\"true\"\r\n              style=\"display: none\"\r\n              (change)=\"handleFileInputBanner($event)\" />\r\n          </figure>\r\n          <p><small>Image size max 1MB (min-width 1100px and min-height 800px)</small></p>\r\n        </div>\r\n        <div *ngIf=\"thumbnailBanner\">\r\n          <div class=\"d-flex align-items-center justify-content-between p-1 bg-light\">\r\n            <span role=\"button\" (click)=\"showUploadedBanner()\" title=\"Zoom\">\r\n              <img width=\"45\" height=\"45\" [src]=\"thumbnailBanner || 'assets/images/user-empty.png'\" alt=\"upload\" />\r\n            </span>\r\n            <span>\r\n              <em\r\n                role=\"button\"\r\n                class=\"fa fa-search-plus fa-lg text-primary mr-2\"\r\n                (click)=\"showUploadedBanner()\"\r\n                title=\"Zoom\"></em>\r\n              <em\r\n                role=\"button\"\r\n                class=\"fa fa-trash fa-lg text-danger mr-2\"\r\n                (click)=\"removeThumbnailBanner()\"\r\n                title=\"Delete\"></em>\r\n            </span>\r\n          </div>\r\n          <p-dialog header=\"Banner Preview\" [(visible)]=\"bannerVisible\" [style]=\"{ width: '50vw' }\">\r\n            <img class=\"img-fluid\" [attr.src]=\"thumbnailBanner || 'assets/images/user-empty.png'\" alt=\"upload\" />\r\n          </p-dialog>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-6 col-122 form-group\">\r\n        <label class=\"intake-form-labels mb-0\" for=\"thumbnailLogo\">Upload Logo</label>\r\n        <div *ngIf=\"!thumbnailLogo\" id=\"thumbnailLogo\">\r\n          <figure class=\"mt-2 mb-0 pic-upload justify-content-md-center\">\r\n            <label for=\"file\" class=\"btn btn-primary file-upload-btn mb-0\">\r\n              <span class=\"d-flex align-items-center justify-content-center\">\r\n                <span class=\"aterial-icon material-symbols-outlined text-white mr-2\">cloud_upload</span>\r\n                <span>Upload</span>\r\n              </span>\r\n            </label>\r\n            <input type=\"file\" id=\"file\" aria-hidden=\"true\" style=\"display: none\" (change)=\"handleFileInput($event)\" />\r\n          </figure>\r\n          <p><small>Image size max 120kb (min-width 400px and min-height 60px)</small></p>\r\n        </div>\r\n        <div *ngIf=\"thumbnailLogo\">\r\n          <div class=\"d-flex align-items-center justify-content-between p-1 bg-light\">\r\n            <span role=\"button\" (click)=\"showUploadedLogo()\" title=\"Zoom\">\r\n              <img width=\"45\" height=\"45\" [attr.src]=\"thumbnailLogo || 'assets/images/user-empty.png'\" alt=\"upload\" />\r\n            </span>\r\n            <span>\r\n              <em\r\n                role=\"button\"\r\n                class=\"fa fa-search-plus fa-lg text-primary mr-2\"\r\n                (click)=\"showUploadedLogo()\"\r\n                title=\"Zoom\"></em>\r\n              <em\r\n                role=\"button\"\r\n                class=\"fa fa-trash fa-lg text-danger mr-2\"\r\n                (click)=\"removeThumbnail()\"\r\n                title=\"Delete\"></em>\r\n            </span>\r\n          </div>\r\n          <p-dialog header=\"Logo Preview\" [(visible)]=\"visible\" [style]=\"{ width: '50vw' }\">\r\n            <img class=\"img-fluid\" [src]=\"thumbnailLogo || 'assets/images/user-empty.png'\" alt=\"upload\" />\r\n          </p-dialog>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</p-card>\r\n\r\n<p-card styleClass=\"w-100 mt-3\">\r\n  <div class=\"customizer\" [formGroup]=\"configRegistrationForm\">\r\n    <h6 class=\"font-weight-bold mb-3\">Configure Registration</h6>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 col-sm-6 col-12 mb-md-4 mb-3\">\r\n        <p-checkbox inputId=\"registrationid\" [binary]=\"true\" formControlName=\"registration\"></p-checkbox>\r\n        <label class=\"intake-form-labels mb-0 ml-2\" for=\"registrationid\">Enable Registration?</label>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-6 col-12 form-group\">\r\n        <label class=\"intake-form-labels\" for=\"selectOrganization\">Select Organization</label>\r\n        <p-dropdown\r\n          styleClass=\"w-100\"\r\n          optionLabel=\"name\"\r\n          optionValue=\"id\"\r\n          [options]=\"organizations\"\r\n          placeholder=\"Select Role\"\r\n          id=\"selectOrganization\"\r\n          formControlName=\"organizationid\"\r\n          ariaLabelledBy=\"roleforregistration\">\r\n        </p-dropdown>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-6 col-12 form-group\">\r\n        <label class=\"intake-form-labels\" for=\"roleforregistration\">Select Role</label>\r\n        <p-dropdown\r\n          styleClass=\"w-100\"\r\n          optionLabel=\"name\"\r\n          optionValue=\"id\"\r\n          [options]=\"userRoles\"\r\n          placeholder=\"Select Role\"\r\n          id=\"roleforregistration\"\r\n          formControlName=\"role_for_registration\"\r\n          ariaLabelledBy=\"roleforregistration\">\r\n        </p-dropdown>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-6 col-12 form-group\">\r\n        <label class=\"intake-form-labels\" for=\"templateforregistration\">Select Template</label>\r\n        <p-dropdown\r\n          styleClass=\"w-100\"\r\n          optionLabel=\"name\"\r\n          optionValue=\"id\"\r\n          [options]=\"emailTemplate\"\r\n          placeholder=\"Select Template\"\r\n          id=\"templateforregistration\"\r\n          formControlName=\"template_for_registration\"\r\n          ariaLabelledBy=\"templateforregistration\">\r\n        </p-dropdown>\r\n      </div>\r\n    </div>\r\n    <div class=\"text-md-right mt-2\">\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveConfig()\">\r\n        {{ updateButton ? 'Update' : 'Submit' }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</p-card>\r\n", styles: ["@charset \"UTF-8\";:host ::ng-deep .p-card .p-card-body .p-card-content{padding:0}.customizer .custom-checkbox.custom-control,.customizer .custom-radio.custom-control{padding-left:0}.customizer .custom-checkbox.custom-control .theme-select,.customizer .custom-radio.custom-control .theme-select{border:2px solid #ddd;border-radius:7px}.customizer .custom-checkbox.custom-control .active .theme-select,.customizer .custom-radio.custom-control .active .theme-select{border-color:var(--primary)}.customizer .custom-checkbox .custom-control-input:checked~.custom-control-label:before,.customizer .custom-radio .custom-control-input:checked~.custom-control-label:before{content:\"\\f00c\";font-family:\"FontAwesome\",sans-serif;color:var(--hover-text);background-color:var(--btn);border-color:var(--btn);font-size:10px;display:flex;align-items:center;padding:2px}.customizer .custom-checkbox label,.customizer .custom-radio label{cursor:pointer}.customizer .custom-checkbox .font-box,.customizer .custom-radio .font-box{display:flex;justify-content:center;align-items:center;width:150px;height:120px;color:var(--text-dark)}.customizer .custom-checkbox .custom-control-label,.customizer .custom-radio .custom-control-label{position:relative;vertical-align:middle;font-size:var(--base-font-size);line-height:normal;color:var(--text-dark);cursor:pointer;padding-left:25px}.customizer .custom-checkbox .custom-control-label:after,.customizer .custom-radio .custom-control-label:after{border-color:var(--btn)}.customizer .custom-checkbox .custom-control-label:before,.customizer .custom-checkbox .custom-control-label:after,.customizer .custom-radio .custom-control-label:before,.customizer .custom-radio .custom-control-label:after{background-image:none;width:16px;height:16px;left:0;box-shadow:none;top:0}.customizer hr{border-color:var(--table-border)}.customizer .customizer-header{background:var(--background-color);color:var(--text-dark)}.customizer .customizer-header .customizer-close{position:absolute;right:.6rem;top:.6rem;padding:7px;width:auto;z-index:10;color:var(--text-dark);cursor:pointer}.customizer .customizer-header .customizer-close .material-icon{font-size:1.5rem}.customizer .customizer-header .customizer-close:hover{color:var(--btn)}.customizer h4{font-size:var(--font-15);font-weight:600;color:var(--text-dark)}.customizer h6{font-size:var(--font-14);color:var(--text-dark)}.customizer p{font-size:var(--base-font-size);font-weight:400;color:var(--text-dark)}.customizer .customizer-toggle{background:var(--btn);color:var(--hover-text);box-shadow:-3px 0 8px #22292f1a;border-top-left-radius:6px;border-bottom-left-radius:6px;position:absolute;top:50%;width:38px;height:38px;left:-39px;text-align:center;line-height:40px;border-left:1px solid var(--checkbox-border);cursor:pointer}.customizer .customizer-toggle .fa-cog{font-size:var(--font-15)}.customizer .customizer-toggle:hover{text-decoration:none}.customizer .customizer-styling-skin.skin .custom-control .custom-control-label{position:relative;padding-left:25px}.customizer .custom-control:first-child .font-box{font-size:var(--font-21);font-weight:400}.customizer .custom-control:last-child .font-box{font-size:var(--font-26);font-weight:600}\n"], components: [{ type: AlertComponent, selector: "app-alert" }, { type: i9__namespace.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { type: i10__namespace.Dialog, selector: "p-dialog", inputs: ["header", "draggable", "resizable", "positionLeft", "positionTop", "contentStyle", "contentStyleClass", "modal", "closeOnEscape", "dismissableMask", "rtl", "closable", "responsive", "appendTo", "breakpoints", "styleClass", "maskStyleClass", "showHeader", "breakpoint", "blockScroll", "autoZIndex", "baseZIndex", "minX", "minY", "focusOnShow", "maximizable", "keepInViewport", "focusTrap", "transitionOptions", "closeIcon", "closeAriaLabel", "closeTabindex", "minimizeIcon", "maximizeIcon", "visible", "style", "position"], outputs: ["onShow", "onHide", "visibleChange", "onResizeInit", "onResizeEnd", "onDragEnd", "onMaximize"] }, { type: i11__namespace.Checkbox, selector: "p-checkbox", inputs: ["value", "name", "disabled", "binary", "label", "ariaLabelledBy", "ariaLabel", "tabindex", "inputId", "style", "styleClass", "labelStyleClass", "formControl", "checkboxIcon", "readonly", "required", "trueValue", "falseValue"], outputs: ["onChange"] }, { type: i12__namespace.Dropdown, selector: "p-dropdown", inputs: ["scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "selectId", "dataKey", "filterBy", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "virtualScroll", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "disabled", "options", "filterValue"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear"] }], directives: [{ type: i5__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i5__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i5__namespace.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i5__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i5__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i13__namespace.InputText, selector: "[pInputText]" }, { type: i2__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConfigLoginSettingsComponent$1, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-config-login-settings',
                        templateUrl: './config-login-settings.component.html',
                        styleUrls: ['./config-login-settings.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: AuthService }, { type: AlertService }, { type: AttachmentsService }, { type: HttpService }, { type: i5__namespace.FormBuilder }, { type: ConfigurationSettingsService }, { type: DataStoreService }]; } });

    var ConfigLoginSettingsComponent = /** @class */ (function () {
        function ConfigLoginSettingsComponent(permissionStore, _storeservice) {
            this.permissionStore = permissionStore;
            this._storeservice = _storeservice;
            this.RBACORG = new RBACINFO();
        }
        ConfigLoginSettingsComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.configureEvent.subscribe(function (val) {
                _this.RBACORG = val.RBACORG;
                _this.PERMISSION = val.PERMISSION;
                _this._storeservice.setData('RBACORG', _this.RBACORG);
                _this.permissionStore.setStore(_this.PERMISSION);
            });
        };
        return ConfigLoginSettingsComponent;
    }());
    ConfigLoginSettingsComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConfigLoginSettingsComponent, deps: [{ token: PermissionStore }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ConfigLoginSettingsComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConfigLoginSettingsComponent, selector: "config-login-settings", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", configureEvent: "configureEvent" }, ngImport: i0__namespace, template: "\n    <lib-config-login-settings></lib-config-login-settings>\n  ", isInline: true, components: [{ type: ConfigLoginSettingsComponent$1, selector: "lib-config-login-settings" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConfigLoginSettingsComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'config-login-settings',
                        template: "\n    <lib-config-login-settings></lib-config-login-settings>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: PermissionStore }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                    type: i0.Input
                }], PERMISSION: [{
                    type: i0.Input
                }], configureEvent: [{
                    type: i0.Input
                }] } });

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
    AuthGuard.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthGuard, deps: [{ token: i1__namespace.Router }, { token: CredentialsService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AuthGuard.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthGuard, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthGuard, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.Router }, { type: CredentialsService }]; } });

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
    MicrostrategyService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MicrostrategyService, deps: [{ token: i1__namespace$1.HttpClient }, { token: AlertService }, { token: PermissionStore }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    MicrostrategyService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MicrostrategyService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MicrostrategyService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.HttpClient }, { type: AlertService }, { type: PermissionStore }, { type: DataStoreService }]; } });

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
    DirectivesModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, declarations: [PermissionDirective, ShowFieldDirective], imports: [i2.CommonModule], exports: [PermissionDirective, ShowFieldDirective] });
    DirectivesModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, imports: [[i2.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [PermissionDirective, ShowFieldDirective],
                        imports: [i2.CommonModule],
                        exports: [PermissionDirective, ShowFieldDirective]
                    }]
            }] });

    var AlertModule = /** @class */ (function () {
        function AlertModule() {
        }
        return AlertModule;
    }());
    AlertModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    AlertModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, declarations: [AlertComponent], imports: [i2.CommonModule], exports: [AlertComponent] });
    AlertModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, imports: [[i2.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i2.CommonModule],
                        declarations: [AlertComponent],
                        exports: [AlertComponent]
                    }]
            }] });

    var PicsConfigLoginSettingsModule = /** @class */ (function () {
        function PicsConfigLoginSettingsModule() {
        }
        return PicsConfigLoginSettingsModule;
    }());
    PicsConfigLoginSettingsModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsConfigLoginSettingsModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    PicsConfigLoginSettingsModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsConfigLoginSettingsModule, declarations: [ConfigLoginSettingsComponent$1], imports: [i2.CommonModule,
            i5.FormsModule,
            i5.ReactiveFormsModule,
            ngBootstrap.NgbModule,
            tabmenu.TabMenuModule,
            tabview.TabViewModule,
            treeselect.TreeSelectModule,
            i1$1.HttpClientModule,
            i11.CheckboxModule,
            i12.DropdownModule,
            i9.CardModule,
            confirmdialog.ConfirmDialogModule,
            accordion.AccordionModule,
            message.MessageModule,
            table.TableModule,
            i13.InputTextModule,
            calendar.CalendarModule,
            editor.EditorModule,
            fieldset.FieldsetModule,
            button.ButtonModule,
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
            i10.DialogModule,
            password.PasswordModule,
            knob.KnobModule,
            sidebar.SidebarModule,
            contextmenu.ContextMenuModule,
            confirmpopup.ConfirmPopupModule,
            DirectivesModule,
            AlertModule], exports: [ConfigLoginSettingsComponent$1] });
    PicsConfigLoginSettingsModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsConfigLoginSettingsModule, imports: [[
                i2.CommonModule,
                i5.FormsModule,
                i5.ReactiveFormsModule,
                ngBootstrap.NgbModule,
                tabmenu.TabMenuModule,
                tabview.TabViewModule,
                treeselect.TreeSelectModule,
                i1$1.HttpClientModule,
                i11.CheckboxModule,
                i12.DropdownModule,
                i9.CardModule,
                confirmdialog.ConfirmDialogModule,
                accordion.AccordionModule,
                message.MessageModule,
                table.TableModule,
                i13.InputTextModule,
                calendar.CalendarModule,
                editor.EditorModule,
                fieldset.FieldsetModule,
                button.ButtonModule,
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
                i10.DialogModule,
                password.PasswordModule,
                knob.KnobModule,
                sidebar.SidebarModule,
                contextmenu.ContextMenuModule,
                confirmpopup.ConfirmPopupModule,
                DirectivesModule,
                AlertModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsConfigLoginSettingsModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ConfigLoginSettingsComponent$1
                        ],
                        imports: [
                            i2.CommonModule,
                            i5.FormsModule,
                            i5.ReactiveFormsModule,
                            ngBootstrap.NgbModule,
                            tabmenu.TabMenuModule,
                            tabview.TabViewModule,
                            treeselect.TreeSelectModule,
                            i1$1.HttpClientModule,
                            i11.CheckboxModule,
                            i12.DropdownModule,
                            i9.CardModule,
                            confirmdialog.ConfirmDialogModule,
                            accordion.AccordionModule,
                            message.MessageModule,
                            table.TableModule,
                            i13.InputTextModule,
                            calendar.CalendarModule,
                            editor.EditorModule,
                            fieldset.FieldsetModule,
                            button.ButtonModule,
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
                            i10.DialogModule,
                            password.PasswordModule,
                            knob.KnobModule,
                            sidebar.SidebarModule,
                            contextmenu.ContextMenuModule,
                            confirmpopup.ConfirmPopupModule,
                            DirectivesModule,
                            AlertModule
                        ],
                        exports: [ConfigLoginSettingsComponent$1],
                        schemas: [i0.NO_ERRORS_SCHEMA, i0.CUSTOM_ELEMENTS_SCHEMA],
                    }]
            }] });

    var ShareDataService = /** @class */ (function () {
        function ShareDataService() {
            this.data = new rxjs.BehaviorSubject('');
        }
        return ShareDataService;
    }());
    ShareDataService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShareDataService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ShareDataService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShareDataService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShareDataService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], ctorParameters: function () { return []; } });

    var CardiConfigLoginSettingsModule = /** @class */ (function () {
        function CardiConfigLoginSettingsModule() {
        }
        return CardiConfigLoginSettingsModule;
    }());
    CardiConfigLoginSettingsModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CardiConfigLoginSettingsModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    CardiConfigLoginSettingsModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CardiConfigLoginSettingsModule, declarations: [ConfigLoginSettingsComponent], imports: [PicsConfigLoginSettingsModule], exports: [ConfigLoginSettingsComponent] });
    CardiConfigLoginSettingsModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CardiConfigLoginSettingsModule, providers: [
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
            i1$1.HttpClient,
            HttpService,
            AlertService,
            api.ConfirmationService,
            ConfigurationSettingsService,
            AttachmentsService,
            PageHeaderService,
            PermissionStore,
            ShareDataService,
            DataStoreService
        ], imports: [[
                PicsConfigLoginSettingsModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CardiConfigLoginSettingsModule, decorators: [{
                type: i0.NgModule,
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
                            i1$1.HttpClient,
                            HttpService,
                            AlertService,
                            api.ConfirmationService,
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

    exports.CardiConfigLoginSettingsModule = CardiConfigLoginSettingsModule;
    exports.ConfigLoginSettingsComponent = ConfigLoginSettingsComponent;
    exports.ConfigLoginSettingsService = ConfigLoginSettingsService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=pics-core-config-login-settings.umd.js.map
