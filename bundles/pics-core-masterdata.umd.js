(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/forms'), require('primeng/api'), require('rxjs/operators'), require('@angular/router'), require('rxjs/add/operator/map'), require('@angular/common'), require('primeng/tree'), require('primeng/contextmenu'), require('primeng/confirmpopup'), require('primeng/card'), require('primeng/checkbox'), require('primeng/multiselect'), require('primeng/inputtext'), require('@angular/common/http'), require('@ng-bootstrap/ng-bootstrap'), require('primeng/accordion'), require('primeng/avatar'), require('primeng/badge'), require('primeng/button'), require('primeng/calendar'), require('primeng/confirmdialog'), require('primeng/dialog'), require('primeng/dropdown'), require('primeng/editor'), require('primeng/fieldset'), require('primeng/fileupload'), require('primeng/inputmask'), require('primeng/inputswitch'), require('primeng/inputtextarea'), require('primeng/knob'), require('primeng/message'), require('primeng/orderlist'), require('primeng/password'), require('primeng/progressspinner'), require('primeng/radiobutton'), require('primeng/ripple'), require('primeng/sidebar'), require('primeng/speeddial'), require('primeng/steps'), require('primeng/table'), require('primeng/tabmenu'), require('primeng/tabview'), require('primeng/toast'), require('primeng/treeselect')) :
    typeof define === 'function' && define.amd ? define('@pics-core/masterdata', ['exports', '@angular/core', 'rxjs', '@angular/forms', 'primeng/api', 'rxjs/operators', '@angular/router', 'rxjs/add/operator/map', '@angular/common', 'primeng/tree', 'primeng/contextmenu', 'primeng/confirmpopup', 'primeng/card', 'primeng/checkbox', 'primeng/multiselect', 'primeng/inputtext', '@angular/common/http', '@ng-bootstrap/ng-bootstrap', 'primeng/accordion', 'primeng/avatar', 'primeng/badge', 'primeng/button', 'primeng/calendar', 'primeng/confirmdialog', 'primeng/dialog', 'primeng/dropdown', 'primeng/editor', 'primeng/fieldset', 'primeng/fileupload', 'primeng/inputmask', 'primeng/inputswitch', 'primeng/inputtextarea', 'primeng/knob', 'primeng/message', 'primeng/orderlist', 'primeng/password', 'primeng/progressspinner', 'primeng/radiobutton', 'primeng/ripple', 'primeng/sidebar', 'primeng/speeddial', 'primeng/steps', 'primeng/table', 'primeng/tabmenu', 'primeng/tabview', 'primeng/toast', 'primeng/treeselect'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global["pics-core"] = global["pics-core"] || {}, global["pics-core"].masterdata = {}), global.ng.core, global.rxjs, global.ng.forms, global.i4, global.rxjs.operators, global.ng.router, global.rxjs["add/operator/map"], global.ng.common, global.i8, global.i9, global.i10, global.i11, global.i12, global.i13, global.i15, global.ng.common.http, global.ngBootstrap, global.accordion, global.avatar, global.badge, global.button, global.calendar, global.confirmdialog, global.dialog, global.dropdown, global.editor, global.fieldset, global.fileupload, global.inputmask, global.inputswitch, global.inputtextarea, global.knob, global.message, global.orderlist, global.password, global.progressspinner, global.radiobutton, global.ripple, global.sidebar, global.speeddial, global.steps, global.table, global.tabmenu, global.tabview, global.toast, global.treeselect));
})(this, (function (exports, i0, rxjs, i2, i4, operators, i1, map, i16, i8, i9, i10, i11, i12, i13, i15, http, ngBootstrap, accordion, avatar, badge, button, calendar, confirmdialog, dialog, dropdown, editor, fieldset, fileupload, inputmask, inputswitch, inputtextarea, knob, message, orderlist, password, progressspinner, radiobutton, ripple, sidebar, speeddial, steps, table, tabmenu, tabview, toast, treeselect) { 'use strict';

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
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i16__namespace = /*#__PURE__*/_interopNamespace(i16);
    var i8__namespace = /*#__PURE__*/_interopNamespace(i8);
    var i9__namespace = /*#__PURE__*/_interopNamespace(i9);
    var i10__namespace = /*#__PURE__*/_interopNamespace(i10);
    var i11__namespace = /*#__PURE__*/_interopNamespace(i11);
    var i12__namespace = /*#__PURE__*/_interopNamespace(i12);
    var i13__namespace = /*#__PURE__*/_interopNamespace(i13);
    var i15__namespace = /*#__PURE__*/_interopNamespace(i15);

    var MasterdataService = /** @class */ (function () {
        function MasterdataService() {
        }
        return MasterdataService;
    }());
    MasterdataService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MasterdataService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    MasterdataService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MasterdataService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MasterdataService, decorators: [{
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
    var AttachmentConfig = /** @class */ (function () {
        function AttachmentConfig() {
        }
        return AttachmentConfig;
    }());
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
            lookup: '/platform/master/lookup/update',
            createLookup: '/platform/master/lookup/add',
            getPermissionRoleById: '/access-control/permission/role/{id}',
            getAllCategoryTree: '/platform/master/lookup/category/tree/{applicationid}',
            getLookupTree: '/platform/master/lookup/tree/{categoryid}',
            getLookupByCategoryId: '/platform/master/lookup/list/{id}',
            getPermissionsTree: '/access-control/permission/application/{applicationid}'
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

    var RbacService = /** @class */ (function () {
        function RbacService(storeService) {
            var _this = this;
            this.storeService = storeService;
            this.storeService.currentStore.subscribe(function (val) {
                if (val) {
                    _this.httpService = val.HTTPSERVICE;
                }
            });
        }
        RbacService.prototype.getAllUserList = function (key) {
            return this.httpService.get(UserConfig.EndPoint.User.getAllUserList + "/" + key);
        };
        RbacService.prototype.getAllUserOrgList = function (orgid) {
            return this.httpService.get(UserConfig.EndPoint.User.getAllUserOrgList + orgid);
        };
        RbacService.prototype.saveUser = function (data) {
            return this.httpService.post(UserConfig.EndPoint.User.createUser, data);
        };
        RbacService.prototype.updateUser = function (data, userid) {
            return this.httpService.put(UserConfig.EndPoint.User.getAllUserList + "/" + userid, data);
        };
        RbacService.prototype.deleteUser = function (id) {
            return this.httpService.delete(UserConfig.EndPoint.User.getAllUserList + "/" + id);
        };
        RbacService.prototype.activateUser = function (data) {
            return this.httpService.post(UserConfig.EndPoint.User.activateUser, data);
        };
        RbacService.prototype.addProviderUser = function (data) {
            return this.httpService.post(UserConfig.EndPoint.Provider.addProviderUser, data);
        };
        RbacService.prototype.addUserRole = function (data) {
            return this.httpService.post(UserConfig.EndPoint.User.userRole, data);
        };
        RbacService.prototype.uploadKey = function (objparams) {
            return this.httpService.post(AttachmentConfig.EndPoint.Attachments.UploadKey, objparams);
        };
        RbacService.prototype.getOrgPolicyGroupList = function (orgid) {
            return this.httpService.get(PolicyGroupConfig.EndPoint.policyGroup.getOrgPolicyGroups.replace('{organizationid}', String(orgid)));
        };
        RbacService.prototype.getAllPolicyGroupList = function (policyGroupId) {
            var endPoint = policyGroupId
                ? PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList + "/" + policyGroupId
                : PolicyGroupConfig.EndPoint.policyGroup.getAllPolicyGroupList;
            return this.httpService.get(endPoint);
        };
        RbacService.prototype.getPolicyGroupById = function (id) {
            return this.httpService.get(PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList + '/' + id);
        };
        RbacService.prototype.getPolicyGroupsByManagementGroup = function (policyGroupId) {
            return this.httpService.get("/org/policyGroup/managementgroup/" + policyGroupId);
        };
        RbacService.prototype.createPolicyGroup = function (data) {
            return this.httpService.post(PolicyGroupConfig.EndPoint.policyGroup.createPolicyGroup, data);
        };
        RbacService.prototype.updatePolicyGroup = function (id, item) {
            return this.httpService.put(PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList + "/" + id, item);
        };
        RbacService.prototype.deletePolicyGroup = function (id) {
            return this.httpService.delete(PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList + "/" + id);
        };
        RbacService.prototype.getAllUserRole = function (id) {
            return this.httpService.get(RoleConfig.EndPoint.role.getAllOrgRole.replace('{orgid}', String(id)));
        };
        RbacService.prototype.deleteRole = function (id) {
            return this.httpService.delete(RoleConfig.EndPoint.role.getAllUserRole + "/" + id);
        };
        RbacService.prototype.getRoleById = function (roleid) {
            return this.httpService.get(RoleConfig.EndPoint.role.getAllUserRole + "/" + roleid);
        };
        RbacService.prototype.createRole = function (data) {
            return this.httpService.post(RoleConfig.EndPoint.role.createRole, data);
        };
        RbacService.prototype.updateRole = function (roleId, data) {
            return this.httpService.put(RoleConfig.EndPoint.role.getAllUserRole + "/" + roleId, data);
        };
        RbacService.prototype.getLandingPage = function (id) {
            return this.httpService.get(RoleConfig.EndPoint.role.getLandingPage + "/" + id);
        };
        RbacService.prototype.createPolicyGroupForRole = function (roleId, data) {
            return this.httpService.post(RoleConfig.EndPoint.role.addPolicyGroup + "/" + roleId + "/policygroups", data);
        };
        RbacService.prototype.updatePolicyGroupForRole = function (roleId, data) {
            return this.httpService.put(RoleConfig.EndPoint.role.addPolicyGroup + "/" + roleId + "/policygroups", data);
        };
        RbacService.prototype.getReportDashbaord = function () {
            return this.httpService.get("" + RoleConfig.EndPoint.role.dossier);
        };
        RbacService.prototype.getPermissionRoleById = function (id) {
            return this.httpService.get(PermissionsURL.EndPoints.permission.permissionRoleById.replace('{id}', id));
        };
        RbacService.prototype.getManagementGroupTree = function (_organizationid) {
            return this.httpService.get('/org/management-group/organization/tree');
        };
        RbacService.prototype.getPermissionsTree = function (applicationid) {
            return this.httpService.get(PermissionsURL.EndPoints.permission.applicationPermissionsTree.replace('{applicationid}', applicationid));
        };
        RbacService.prototype.getPagePermission = function (data) {
            return this.httpService.post(PermissionsURL.EndPoints.permission.pagePermission, data);
        };
        RbacService.prototype.createPage = function (page) {
            return this.httpService.post(PermissionsURL.EndPoints.page.createPage, page);
        };
        RbacService.prototype.updatePage = function (page) {
            return this.httpService.put(PermissionsURL.EndPoints.page.updateDeletePage.replace('{pageid}', page.id), page);
        };
        RbacService.prototype.deletePage = function (pageId) {
            return this.httpService.delete(PermissionsURL.EndPoints.page.updateDeletePage.replace('{pageid}', pageId));
        };
        RbacService.prototype.getPermission = function (id) {
            return this.httpService.get(PermissionsURL.EndPoints.permission.getPermission.replace('{id}', id));
        };
        RbacService.prototype.createPermission = function (permission) {
            return this.httpService.post(PermissionsURL.EndPoints.permission.createPermission, permission);
        };
        RbacService.prototype.updatePermission = function (permission) {
            return this.httpService.put(PermissionsURL.EndPoints.permission.updateDeletePermission.replace('{permissionid}', permission.id), permission);
        };
        RbacService.prototype.deletePermission = function (permissionId) {
            return this.httpService.delete(PermissionsURL.EndPoints.permission.updateDeletePermission.replace('{permissionid}', permissionId));
        };
        RbacService.prototype.getAllPageTree = function (applicationid) {
            return this.httpService
                .get(PermissionsURL.EndPoints.page.AllPageTree.replace('{applicationid}', applicationid))
                .pipe(operators.map(function (item) {
                return item.data;
            }));
        };
        RbacService.prototype.getPermissionTree = function (pageid, parentid) {
            return this.httpService.get(PermissionsURL.EndPoints.permission.getPermissionTree.replace('{pageid}', pageid).replace('{parentid}', parentid));
        };
        RbacService.prototype.getPermissionTypes = function (applicationid) {
            return this.httpService.get(PermissionsURL.EndPoints.permission.getPermissionTypes.replace('{applicationid}', applicationid));
        };
        RbacService.prototype.getOrganizationPage = function (orgId) {
            return this.httpService.get(AccessManagementConfig$1.EndPoint.Organization.getOrganization.replace('{orgId}', orgId));
        };
        RbacService.prototype.createCategory = function (category) {
            return this.httpService.post(MasterURL.EndPoints.lookup.createCategory, category);
        };
        RbacService.prototype.updateCategory = function (category) {
            return this.httpService.put(MasterURL.EndPoints.lookup.updateDeleteCategory.replace('{id}', category.id), category);
        };
        RbacService.prototype.deleteCategory = function (categoryId) {
            return this.httpService.delete(MasterURL.EndPoints.lookup.updateDeleteCategory.replace('{id}', categoryId));
        };
        RbacService.prototype.getLookup = function (id) {
            return this.httpService.get(MasterURL.EndPoints.lookup.lookup.replace('{id}', id));
        };
        RbacService.prototype.createLookup = function (lookup) {
            return this.httpService.post(MasterURL.EndPoints.lookup.createLookup, lookup);
        };
        RbacService.prototype.updateLookup = function (lookup) {
            return this.httpService.put(MasterURL.EndPoints.lookup.lookup, lookup);
        };
        RbacService.prototype.deleteLookup = function (lookupId) {
            return this.httpService.delete(MasterURL.EndPoints.lookup.lookup.replace('{id}', lookupId));
        };
        RbacService.prototype.getAllCategoryTree = function (applicationid) {
            return this.httpService
                .get(MasterURL.EndPoints.lookup.getAllCategoryTree.replace('{applicationid}', applicationid))
                .pipe(operators.map(function (item) {
                return item.data;
            }));
        };
        RbacService.prototype.getLookupTree = function (categoryid) {
            return this.httpService.get(MasterURL.EndPoints.lookup.getLookupTree.replace('{categoryid}', categoryid));
        };
        RbacService.prototype.getLookupBycategoryID = function (categoryid) {
            return this.httpService.get(MasterURL.EndPoints.lookup.getLookupByCategoryId.replace('{id}', categoryid));
        };
        return RbacService;
    }());
    RbacService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacService, deps: [{ token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    RbacService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

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
    AlertComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AlertComponent, selector: "app-alert", ngImport: i0__namespace, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], directives: [{ type: i16__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertComponent, decorators: [{
                type: i0.Component,
                args: [{
                        // moduleId: module.id,
                        selector: 'app-alert',
                        templateUrl: 'alert.component.html',
                        styleUrls: ['./alert.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: AlertService }]; } });

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

    var MasterdataComponent$1 = /** @class */ (function () {
        function MasterdataComponent(mastersService, formBuilder, alertService, confirmationService, permissionStore, _storeservice) {
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
        MasterdataComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.orgSubs = this._storeservice.currentStore.subscribe(function (res) {
                if (res['RBACORG'] && res['RBACORG'] !== '') {
                    _this.RBACORG = res['RBACORG'];
                    console.log(_this.RBACORG, 'RBACORG Permisson');
                    _this.environment = _this.RBACORG['environment'];
                    _this.orgId = parseInt(_this.RBACORG['orgID']);
                    if (_this.environment) {
                        _this.loadTree();
                        _this.loadContextMenu();
                        _this.mastersService.getAllUserRole().subscribe(function (items) {
                            _this.roles = items.data;
                        });
                        _this.mastersService.getPermissionsTree(_this.environment.applicationid).subscribe(function (items) {
                            _this.permissions = items.data;
                        });
                    }
                }
            });
        };
        MasterdataComponent.prototype.ngOnDestroy = function () {
            this.orgSubs.unsubscribe();
        };
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
        MasterdataComponent.prototype.initializeLookupForm = function () {
            this.pageErrorShow = false;
            this.lookupForm = this.formBuilder.group({
                id: [0],
                applicationid: [this.environment ? this.environment['applicationid'] : ''],
                name: ['', i2.Validators.required],
                description: [''],
                readonly: [false],
                isenabled: [true],
                lookup: this.formBuilder.group({
                    id: [0],
                    //lookupcategoryid: [0],
                    parentid: [null],
                    // optionaldata: this.formBuilder.group({
                    //   rules: this.formBuilder.array([])
                    // }),
                    // access: this.formBuilder.group({
                    //   assign: ['', [this.requiredIfValidator(() => !this.isGlobalLookup)]],
                    //   view: ['', [this.requiredIfValidator(() => !this.isGlobalLookup)]]
                    // }),
                    lookupdata: this.formBuilder.array([this.addlookupdata()]),
                    readonly: [false],
                    global: [true],
                    isenabled: [true]
                })
            });
        };
        Object.defineProperty(MasterdataComponent.prototype, "lookupdata", {
            // get datarules() {
            //   return this.lookupForm.get('optionaldata.rules') as FormArray;
            // }
            get: function () {
                var lookupFormGroup = this.lookupForm.get('lookup');
                if (lookupFormGroup && lookupFormGroup.get('lookupdata') instanceof i2.FormArray) {
                    return lookupFormGroup.get('lookupdata');
                }
            },
            enumerable: false,
            configurable: true
        });
        MasterdataComponent.prototype.addRule = function () {
            return this.formBuilder.group({
                roles: ['', i2.Validators.required],
                permission: ['', i2.Validators.required],
                action: ['', i2.Validators.required]
            });
        };
        // onAddRule(): void {
        //   this.datarules.push(this.addRule());
        // }
        MasterdataComponent.prototype.addlookupdata = function () {
            return this.formBuilder.group({
                key: ['', i2.Validators.required],
                value: ['', i2.Validators.required],
                order: [0]
            });
        };
        MasterdataComponent.prototype.onAddLookUpData = function () {
            this.pageErrorShow = false;
            this.lookupdata.push(this.addlookupdata());
        };
        MasterdataComponent.prototype.onDeleteLookupData = function (i) {
            this.lookupdata.removeAt(i);
        };
        // onDeleteRule(rowIndex: number): void {
        //   this.datarules.removeAt(rowIndex);
        // }
        MasterdataComponent.prototype.searchMaster = function (event) {
            var value = event.target.value.toUpperCase();
            this.filterMasterList = this.categories.filter(function (a) { var _a; return (_a = a['name']) === null || _a === void 0 ? void 0 : _a.toUpperCase().startsWith(value); });
        };
        MasterdataComponent.prototype.onNodeContextMenuSelect = function (event) {
            var _this = this;
            if (event.node.type === 'category') {
                var permission = this.permissionStore.state;
                this.menuItems = [
                    {
                        label: 'Create Category',
                        icon: i4.PrimeIcons.ARROW_UP_LEFT,
                        visible: permission.SETTINGS_MAS_CREATE_CATOGORY,
                        badge: 'SETTINGS_MAS_CREATE_CATOGORY',
                        command: function (createEvent) {
                            _this.saveMode = 'INSERT';
                            _this.nodeType = 'category';
                            _this.clearForm();
                            console.log(createEvent);
                        }
                    },
                    {
                        label: 'Create Lookup',
                        icon: i4.PrimeIcons.ARROW_DOWN_RIGHT,
                        visible: permission.SETTINGS_MAS_CREATE_LOOKUP,
                        badge: 'SETTINGS_MAS_CREATE_LOOKUP',
                        command: function (_event) {
                            _this.setInsertEvent();
                        }
                    },
                    {
                        label: 'Delete',
                        icon: i4.PrimeIcons.TRASH,
                        visible: permission.SETTINGS_MAS_DELETE,
                        badge: 'SETTINGS_MAS_DELETE',
                        command: function (deleteEvent) {
                            _this.saveMode = 'DELETE';
                            _this.nodeType = _this.selectedItem.type;
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
                        icon: i4.PrimeIcons.ARROW_DOWN_RIGHT,
                        command: function (_eventErase) {
                            _this.setInsertEvent();
                        }
                    },
                    {
                        label: 'Delete',
                        icon: i4.PrimeIcons.TRASH,
                        command: function (RemoveEvent) {
                            _this.saveMode = 'DELETE';
                            _this.nodeType = _this.selectedItem.type;
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
        };
        MasterdataComponent.prototype.setInsertEvent = function () {
            this.saveMode = 'INSERT';
            this.nodeType = this.selectedItem.type;
            this.createLookupForm();
            // this.clearRules();
        };
        MasterdataComponent.prototype.nodeSelect = function (event) {
            var _this = this;
            this.nodeselecttype = 'UPDATE';
            this.saveMode = 'UPDATE';
            this.nodeType = event.node.type;
            // if (event.node.type === 'lookup') {
            // this.mastersService.getLookup(event.node.id).subscribe((item: any) => {
            //   const lookup = item['data'];
            this.mastersService.getLookupBycategoryID(event.node.data).subscribe(function (nodes) {
                var lookup = nodes.data;
                // });
                // Assume this.lookupForm is your existing form instance created using the FormBuilder
                console.log('lookup', lookup);
                // Patch values for the main form
                _this.lookupForm.patchValue({
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
                _this.lookupForm.patchValue(lookup);
                console.log('lookupFormValue', _this.lookupForm.value);
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
        };
        // private clearRules() {
        //   for (let index = 0; index < this.datarules.length; index++) {
        //     this.datarules.removeAt(index);
        //   }
        // }
        MasterdataComponent.prototype.nodeExpand = function (event) {
            if (event.node && event.node.data && event.node.type !== 'lookup') {
                this.mastersService.getLookupTree(event.node.data).subscribe(function (nodes) {
                    event.node.children = nodes.data;
                });
            }
        };
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
        MasterdataComponent.prototype.saveLookup = function () {
            var _this = this;
            this.pageErrorShow = true;
            var lookupdts = this.lookupForm.value;
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
                    this.mastersService.createLookup(lookupdts).subscribe(function () {
                        _this.alertService.success('Lookup created successfully.');
                        _this.loadTree();
                        _this.clearForm();
                    });
                }
                else {
                    this.mastersService.updateLookup(lookupdts).subscribe(function () {
                        _this.alertService.success('Lookup updated successfully.');
                        _this.loadTree();
                        _this.clearForm();
                    });
                }
            }
            else {
                // this.alertService.error('Invalid lookup data.');
            }
        };
        MasterdataComponent.prototype.clearForm = function () {
            this.initializeLookupForm();
        };
        MasterdataComponent.prototype.createLookupForm = function () {
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
        };
        MasterdataComponent.prototype.setGlobal = function (checked) {
            var _a;
            this.isGlobalLookup = checked;
            (_a = this.lookupForm.get('access')) === null || _a === void 0 ? void 0 : _a.patchValue({
                view: [],
                assign: []
            });
        };
        MasterdataComponent.prototype.loadContextMenu = function () {
            var _this = this;
            this.menuItems = [
                {
                    label: 'Create Category',
                    icon: i4.PrimeIcons.ARROW_UP_LEFT,
                    command: function (event) {
                        _this.saveMode = 'INSERT';
                        _this.nodeType = 'category';
                        _this.clearForm();
                        console.log(event);
                    }
                },
                {
                    label: 'Create Lookup',
                    icon: i4.PrimeIcons.ARROW_DOWN_RIGHT,
                    command: function (_eventNode) {
                        _this.setInsertEvent();
                    }
                },
                {
                    label: 'Delete',
                    icon: i4.PrimeIcons.TRASH,
                    command: function (event) {
                        _this.saveMode = 'DELETE';
                        _this.nodeType = _this.selectedItem.type;
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
        };
        MasterdataComponent.prototype.loadTree = function () {
            var _this = this;
            this.pageErrorShow = false;
            this.mastersService.getAllCategoryTree(this.environment.applicationid).subscribe(function (items) {
                _this.categories = items;
                if (_this.categories.length) {
                    _this.selectedItem = _this.categories[0];
                    _this.filterMasterList = _this.categories;
                }
            });
        };
        MasterdataComponent.prototype.cancel = function () {
            this.lookupForm.reset();
            //this.lookupForm.reset();
        };
        MasterdataComponent.prototype.deleteItem = function () {
            var _this = this;
            this.saveMode = 'UPDATE';
            if (this.selectedItem.type === 'lookup') {
                this.mastersService.deleteLookup(this.selectedItem.id).subscribe(function (_item) {
                    _this.cancel();
                    $('#Deleteuser').modal('hide');
                    _this.alertService.warn('Lookup deleted successfully.');
                    _this.loadTree();
                });
            }
            else {
                this.mastersService.deleteCategory(this.selectedItem.id).subscribe(function (_item) {
                    _this.cancel();
                    $('#Deleteuser').modal('hide');
                    _this.alertService.warn('Category deleted successfully.');
                    _this.loadTree();
                });
            }
        };
        MasterdataComponent.prototype.requiredIfValidator = function (predicate) {
            return function (formControl) {
                if (!formControl.parent) {
                    return null;
                }
                if (predicate()) {
                    return i2.Validators.required(formControl);
                }
                return null;
            };
        };
        return MasterdataComponent;
    }());
    MasterdataComponent$1.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MasterdataComponent$1, deps: [{ token: RbacService }, { token: i2__namespace.FormBuilder }, { token: AlertService }, { token: i4__namespace.ConfirmationService }, { token: PermissionStore }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    MasterdataComponent$1.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: MasterdataComponent$1, selector: "lib-masterdata", ngImport: i0__namespace, template: "<app-alert></app-alert>\r\n<div class=\"permission\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4 col-md-6 col-12\">\r\n      <div class=\"clearfix\"></div>\r\n      <div class=\"tab-content py-2\">\r\n        <div class=\"tab-pane fade show active\">\r\n          <div class=\"form-group bgiconsearch\">\r\n            <input class=\"form-control\" placeholder=\"Search by Category name\" type=\"text\" (keyup)=\"searchMaster($event)\"\r\n              fieldKey=\"SETTINGS_MAS_SEARCH_BY_NAME\" pInputText />\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n\r\n          <div class=\"masteracess\">\r\n            <p-tree [value]=\"filterMasterList\" selectionMode=\"single\" [(selection)]=\"selectedItem\"\r\n              (onNodeSelect)=\"nodeSelect($event)\" (onNodeContextMenuSelect)=\"onNodeContextMenuSelect($event)\"\r\n              [contextMenu]=\"treeContextMenu\"></p-tree>\r\n            <p-contextMenu #treeContextMenu [model]=\"menuItems\" appendTo=\"body\"></p-contextMenu>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-8 col-md-6 col-12 master-right mt-2\">\r\n      <p-confirmPopup></p-confirmPopup>\r\n      <p-card id=\"lookupForm\" class=\"rbac-card\" [formGroup]=\"lookupForm\"\r\n        [style]=\"{ width: '100%', 'margin-bottom': '2em' }\">\r\n        <div class=\"strip_head toggleleft\">\r\n          <span class=\"report_head font-weight-bold\">Masters/Category</span>\r\n        </div>\r\n        <input id=\"cid\" type=\"hidden\" formControlName=\"id\" />\r\n        <input id=\"capplicationid\" type=\"hidden\" formControlName=\"applicationid\" />\r\n        <div class=\"p-fluid p-formgrid p-grid\">\r\n          <div class=\"col-lg-3 col-md-12 col-12 mb-3\">\r\n            <label for=\"mName\" class=\"referral-form-labels\">Name\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input id=\"mName\" type=\"text\" formControlName=\"name\" fieldKey=\"SETTINGS_MAS_NAME\" placeholder=\"Enter Name\"\r\n              aria-describedby=\"mName\" pInputText />\r\n            <div *ngIf=\"\r\n                lookupForm.controls['name'].invalid &&\r\n                (lookupForm.controls['name'].dirty || lookupForm.controls['name'].touched)\r\n              \">\r\n              <small *ngIf=\"lookupForm.controls['name'].invalid\" class=\"p-error block\">Name is required </small>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-12 col-12 mb-3\">\r\n            <label for=\"cdescription\" class=\"referral-form-labels\">Description </label>\r\n            <input id=\"cdescription\" type=\"text\" formControlName=\"description\" fieldKey=\"SETTINGS_MAS_DESCRYPTION\"\r\n              placeholder=\"Enter Description\" aria-describedby=\"cdescription\" pInputText />\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-12 col-12 mb-3\">\r\n            <label for=\"corder\" class=\"referral-form-labels d-none d-lg-inline-block\">&#160;</label>\r\n            <div>\r\n              <p-checkbox st inputId=\"readOnly\" [binary]=\"true\" formControlName=\"readonly\"\r\n                fieldKey=\"SETTINGS_MAS_READ_ONLY\" label=\"Readonly\">\r\n              </p-checkbox>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-12 col-12 mb-3\">\r\n            <label for=\"corder\" class=\"referral-form-labels d-none d-lg-inline-block\">&#160;</label>\r\n            <div>\r\n              <p-checkbox st inputId=\"active\" [binary]=\"true\" formControlName=\"isenabled\" fieldKey=\"SETTINGS_MAS_ACTIVE\"\r\n                label=\"Active\"></p-checkbox>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary btncommon\" fieldKey=\"SETTINGS_MAS_ADD_CATOGORY\"\r\n            (click)=\"saveCategory()\">\r\n            {{ saveMode === 'UPDATE' ? 'Update Category' : 'Add Category' }}\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary border border-primary btncancel\"\r\n            fieldKey=\"SETTINGS_MAS_CANCEL\" (click)=\"clearForm()\">\r\n            Cancel\r\n          </button>\r\n          <br />\r\n          <br />\r\n        </div> -->\r\n      </p-card>\r\n\r\n      <p-card id=\"lookupForm\" class=\"rbac-card\" [formGroup]=\"lookupForm\"\r\n        [style]=\"{ width: '100%', 'margin-bottom': '2em' }\">\r\n        <div class=\"strip_head toggleleft\">\r\n          <span class=\"report_head font-weight-bold\">Masters/Lookup</span>\r\n        </div>\r\n        <!-- <input id=\"lid\" type=\"hidden\" formControlName=\"lookup.id\" /> -->\r\n        <!-- <input id=\"llookupcategoryid\" type=\"hidden\" formControlName=\"lookupcategoryid\" /> -->\r\n        <!-- <input id=\"lparentid\" type=\"hidden\" formControlName=\"lookup.parentid\" /> -->\r\n        <div>\r\n          <div>\r\n            <button class=\"pull-right mb-2 btn btn-primary btncommon\"\r\n              (click)=\"onAddLookUpData()\">+</button>\r\n          </div>\r\n          <div class=\"p-datatable-wrapper\">\r\n            <table class=\"p-datatable-table table\">\r\n              <thead class=\"p-datatable-thead\">\r\n                <tr>\r\n                  <th style=\"width: 35%;\"\r\n                  >Key \r\n                  <span class=\"requiredfield text-danger\">*</span>\r\n                  </th>\r\n                  <th style=\"width: 35%;\">Value \r\n                    <span class=\"requiredfield text-danger\">*</span>\r\n                  </th>\r\n                  <th style=\"width: 25%;\">Order</th>\r\n                  <th style=\"width: 5%;\" *ngIf=\"saveMode == 'INSERT'\"></th>\r\n                </tr>\r\n              </thead>\r\n              <tbody formArrayName=\"lookupdata\">\r\n                <ng-container *ngFor=\"let field of lookupdata.controls; let i = index\">\r\n                  <tr [formGroupName]=\"i\">\r\n                    <td>\r\n                      <input id=\"lkey\" type=\"text\" placeholder=\"Enter Key {{i + 1}}\" formControlName=\"key\"\r\n                        aria-describedby=\"lkey\" pInputText />\r\n                        <div *ngIf=\"pageErrorShow ? field.get('key').invalid : field.get('key').errors && field.get('key').touched\">\r\n                          <!-- field.get('key')?.touched && field.get('key')?.errors && field.get('key')?.hasError('required')\"> -->\r\n                            <small class=\"p-error block\">Key is required</small>\r\n                          </div>\r\n                    </td>\r\n                    <td>\r\n                      <input id=\"lvalue\" type=\"text\" placeholder=\"Enter Value {{i + 1}}\" formControlName=\"value\"\r\n                        aria-describedby=\"lvalue\" pInputText />\r\n                        <div *ngIf=\"pageErrorShow ? field.get('value').invalid : field.get('value').errors && field.get('value').touched\">\r\n                          <small class=\"p-error block\">Value is required</small>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                      <input id=\"lorder\" type=\"text\" formControlName=\"order\" placeholder=\"Enter Order {{i + 1}}\"\r\n                        pInputText />\r\n                    </td>\r\n                    <td *ngIf=\"saveMode == 'INSERT' &&  lookupdata.length > 1\">\r\n                      <button type=\"button\" class=\"btn btn-default\" title=\"delete\"\r\n                        (click)=\"onDeleteLookupData(i)\">\r\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </ng-container>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n        </div>\r\n        <!-- <ng-container formGroupName=\"optionaldata\">\r\n          <p-table [value]=\"datarules.controls\" width=\"100%\" [responsive]=\"true\" formArrayName=\"rules\">\r\n            <ng-template pTemplate=\"caption\">\r\n              <div class=\"flex align-items-center justify-content-between\">\r\n                Control Flow\r\n                <button class=\"pull-right mb-2 btn btn-primary btncommon\" (click)=\"onAddRule()\">+</button>\r\n              </div>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"header\">\r\n              <tr>\r\n                <th id=\"datarules-roles\" style=\"width: 35%\">Roles</th>\r\n                <th id=\"datarules-permissions\" style=\"width: 35%\">Permissions</th>\r\n                <th id=\"datarules-action\" style=\"width: 20%\">Action</th>\r\n                <th id=\"datarules-empty\" style=\"width: 10%\"></th>\r\n              </tr>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\">\r\n              <ng-container>\r\n                <tr [formGroupName]=\"rowIndex\">\r\n                  <td>\r\n                    <p-multiSelect [options]=\"roles\" formControlName=\"roles\" defaultLabel=\"Select Roles\"\r\n                      optionLabel=\"name\" optionValue=\"id\" ariaFilterLabel=\"null\"\r\n                      ariaLabelledBy=\"selectRoles{{ rowIndex }}\" id=\"selectRoles{{ rowIndex }}\" display=\"chip\">\r\n                    </p-multiSelect>\r\n                    <div class=\"text-danger\" *ngIf=\"\r\n                        rowData.get('roles').errors && (rowData.get('roles').dirty || rowData.get('roles').touched)\r\n                      \">\r\n                      <div *ngIf=\"rowData.get('roles').errors?.required\">Role is Required</div>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <p-treeSelect formControlName=\"permission\" [options]=\"permissions\" optionLabel=\"label\"\r\n                      optionValue=\"data\" placeholder=\"Select Permissions\" id=\"selectPermit{{ rowIndex }}\"\r\n                      ariaLabelledBy=\"selectPermit{{ rowIndex }}\" class=\"permission-tree\"></p-treeSelect>\r\n                    <div class=\"text-danger\" *ngIf=\"\r\n                        rowData.get('permission').errors &&\r\n                        (rowData.get('permission').dirty || rowData.get('permission').touched)\r\n                      \">\r\n                      <div *ngIf=\"rowData.get('permission').errors?.required\">Permission is Required</div>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <p-dropdown optionLabel=\"name\" optionValue=\"value\" [options]=\"dataControlActions\"\r\n                      id=\"selectValue{{ rowIndex }}\" ariaLabelledBy=\"selectValue{{ rowIndex }}\"\r\n                      formControlName=\"action\">\r\n                    </p-dropdown>\r\n                    <div class=\"text-danger\" *ngIf=\"\r\n                        rowData.get('action').errors && (rowData.get('action').dirty || rowData.get('action').touched)\r\n                      \">\r\n                      <div *ngIf=\"rowData.get('action').errors?.required\">Action is Required</div>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <button type=\"button\" class=\"btn btn-default\" title=\"delete\" (click)=\"onDeleteRule(rowIndex)\">\r\n                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n              </ng-container>\r\n            </ng-template>\r\n          </p-table>\r\n        </ng-container> -->\r\n        <div class=\"p-fluid p-formgrid p-grid\">\r\n          <div class=\"p-field p-col\" style=\"padding: 25px 0px 0px 10px\">\r\n            <p-checkbox inputId=\"binaryGlobal\" [binary]=\"true\" formControlName=\"global\"\r\n              (onChange)=\"setGlobal($event.checked)\" label=\"Global\"></p-checkbox>\r\n          </div>\r\n          <div class=\"p-field p-col\" style=\"padding: 25px 0px 0px 10px\">\r\n            <p-checkbox inputId=\"binaryActive\" [binary]=\"true\" formControlName=\"isenabled\" label=\"Active\"></p-checkbox>\r\n          </div>\r\n          <div class=\"p-field p-col\"></div>\r\n          <div class=\"p-field p-col\"></div>\r\n        </div>\r\n        <ng-container *ngIf=\"!isGlobalLookup\">\r\n          <div class=\"p-fluid p-formgrid p-grid\" formGroupName=\"access\">\r\n            <div class=\"p-field p-col\">\r\n              <label for=\"pname\" class=\"referral-form-labels\">View Access </label>\r\n              <p-multiSelect [options]=\"roles\" formControlName=\"view\" defaultLabel=\"Select Roles\" optionLabel=\"name\"\r\n                optionValue=\"id\" display=\"chip\">\r\n              </p-multiSelect>\r\n              <div *ngIf=\"lookupForm.get('access.view')?.errors\">\r\n                <small *ngIf=\"lookupForm.get('access.view')?.invalid\" class=\"p-error block\">Role is required </small>\r\n              </div>\r\n            </div>\r\n            <div class=\"p-field p-col\">\r\n              <label for=\"pname\" class=\"referral-form-labels\">Assign Access </label>\r\n              <p-multiSelect [options]=\"roles\" formControlName=\"assign\" defaultLabel=\"Select Roles\" optionLabel=\"name\"\r\n                optionValue=\"id\" display=\"chip\">\r\n              </p-multiSelect>\r\n              <div *ngIf=\"lookupForm.get('access.assign')?.errors\">\r\n                <small *ngIf=\"lookupForm.get('access.assign')?.invalid\" class=\"p-error block\">Role is required </small>\r\n              </div>\r\n            </div>\r\n            <div class=\"p-field p-col\"></div>\r\n          </div>\r\n        </ng-container>\r\n\r\n        <div class=\"mt-2\">\r\n          <button type=\"submit\" class=\"pull-right mb-2 btn btn-primary btncommon\" (click)=\"saveLookup()\">\r\n           Save <!-- {{ saveMode === 'UPDATE' ? 'Update Lookup' : 'Add Lookup' }} -->\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" (click)=\"clearForm()\">Cancel</button>\r\n          <br />\r\n          <br />\r\n        </div>\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal\" id=\"Deleteuser\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Delete {{this.selectedItem.type === 'lookup' ? 'Lookup' : 'Category'}}</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Are you sure you want to delete the {{this.selectedItem.type === 'lookup' ? 'Lookup' : 'Category'}}?\r\n        <!-- Are you sure want to Delete User ? -->\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary btncommon delete\" data-dismiss=\"modal\" (click)=\"deleteItem()\">\r\n            Delete\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".head-div{padding-top:9px;padding-left:7px}.bgiconsearch{margin-bottom:5px;padding-bottom:0;font-size:var(--base-font-size)}.masteracess{border:solid 1px var(--table-border);border-radius:2px;padding:5px 0;overflow-y:auto;background:var(--bg-light);max-height:calc(100vh - 243px);min-height:calc(100vh - 237px)}.masterempty{max-width:none;border-radius:50%;height:40px;width:40px}.row.masterdata{margin:0;border-bottom:solid 1px var(--table-border);padding:5px 0;cursor:pointer}.overflow_txt{overflow:hidden;text-overflow:ellipsis}span.namemaster{font-size:var(--base-font-size);color:#000}.masterid,span.emailmaster{font-size:var(--base-font-size);color:#9b9b9b}span.deletemaster{position:absolute;top:0px;right:15px;z-index:9;width:20px;float:right;cursor:pointer}span.deletemaster img{width:12px}.activate{position:absolute;margin-top:-46px;margin-left:44rem}.toggleleft{font-size:13px;font-weight:600;display:block;margin-top:-12px;padding-bottom:13px}.report_button{margin-left:12px}:host ::ng-deep .ui-tree.permission-tree{width:100%}:host ::ng-deep .p-datatable .p-datatable-header{background:var(--background-color);color:var(--text-dark);border-color:var(--table-border)}:host ::ng-deep .p-datatable .p-datatable-thead tr th{background:var(--background-color);color:var(--text-dark);border-color:var(--table-border)}.p-datatable-wrapper tr td{text-align:left;border:none;padding:15px 8px;vertical-align:top}.p-datatable-wrapper tr td input{width:100%}.p-datatable-wrapper tr td button i{color:#f92929}\n"], components: [{ type: AlertComponent, selector: "app-alert" }, { type: i8__namespace.Tree, selector: "p-tree", inputs: ["value", "selectionMode", "selection", "style", "styleClass", "contextMenu", "layout", "draggableScope", "droppableScope", "draggableNodes", "droppableNodes", "metaKeySelection", "propagateSelectionUp", "propagateSelectionDown", "loading", "loadingIcon", "emptyMessage", "ariaLabel", "togglerAriaLabel", "ariaLabelledBy", "validateDrop", "filter", "filterBy", "filterMode", "filterPlaceholder", "filteredNodes", "filterLocale", "scrollHeight", "virtualScroll", "virtualNodeHeight", "minBufferPx", "maxBufferPx", "indentation", "trackBy"], outputs: ["selectionChange", "onNodeSelect", "onNodeUnselect", "onNodeExpand", "onNodeCollapse", "onNodeContextMenuSelect", "onNodeDrop", "onFilter"] }, { type: i9__namespace.ContextMenu, selector: "p-contextMenu", inputs: ["model", "global", "target", "style", "styleClass", "appendTo", "autoZIndex", "baseZIndex", "triggerEvent"], outputs: ["onShow", "onHide"] }, { type: i10__namespace.ConfirmPopup, selector: "p-confirmPopup", inputs: ["key", "defaultFocus", "showTransitionOptions", "hideTransitionOptions", "autoZIndex", "baseZIndex", "style", "styleClass", "visible"] }, { type: i11__namespace.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { type: i12__namespace.Checkbox, selector: "p-checkbox", inputs: ["value", "name", "disabled", "binary", "label", "ariaLabelledBy", "ariaLabel", "tabindex", "inputId", "style", "styleClass", "labelStyleClass", "formControl", "checkboxIcon", "readonly", "required", "trueValue", "falseValue"], outputs: ["onChange"] }, { type: i13__namespace.MultiSelect, selector: "p-multiSelect", inputs: ["style", "styleClass", "panelStyle", "panelStyleClass", "inputId", "disabled", "readonly", "group", "filter", "filterPlaceHolder", "filterLocale", "overlayVisible", "tabindex", "appendTo", "dataKey", "name", "label", "ariaLabelledBy", "displaySelectedLabel", "maxSelectedLabels", "selectionLimit", "selectedItemsLabel", "showToggleAll", "emptyFilterMessage", "emptyMessage", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "showHeader", "autoZIndex", "baseZIndex", "filterBy", "virtualScroll", "itemSize", "showTransitionOptions", "hideTransitionOptions", "ariaFilterLabel", "filterMatchMode", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "display", "autocomplete", "showClear", "scrollHeight", "defaultLabel", "placeholder", "options", "filterValue"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onClear", "onPanelShow", "onPanelHide"] }], directives: [{ type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }, { type: i15__namespace.InputText, selector: "[pInputText]" }, { type: i2__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2__namespace.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i16__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2__namespace.FormArrayName, selector: "[formArrayName]", inputs: ["formArrayName"] }, { type: i16__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2__namespace.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MasterdataComponent$1, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-masterdata',
                        templateUrl: './masterdata.component.html',
                        styleUrls: ['./masterdata.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: RbacService }, { type: i2__namespace.FormBuilder }, { type: AlertService }, { type: i4__namespace.ConfirmationService }, { type: PermissionStore }, { type: DataStoreService }]; } });

    var MasterdataComponent = /** @class */ (function () {
        function MasterdataComponent(permissionStore, _storeservice) {
            this.permissionStore = permissionStore;
            this._storeservice = _storeservice;
            this.RBACORG = new RBACINFO();
        }
        MasterdataComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.mastersEvent.subscribe(function (val) {
                _this.RBACORG = val.RBACORG;
                _this.PERMISSION = val.PERMISSION;
                _this._storeservice.setData('RBACORG', _this.RBACORG);
                _this.permissionStore.setStore(_this.PERMISSION);
                _this._storeservice.setData('HTTPSERVICE', val.HTTPSERVICE);
            });
        };
        return MasterdataComponent;
    }());
    MasterdataComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MasterdataComponent, deps: [{ token: PermissionStore }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    MasterdataComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: MasterdataComponent, selector: "masterdata", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", mastersEvent: "mastersEvent" }, ngImport: i0__namespace, template: "\n      <lib-masterdata></lib-masterdata>\n  ", isInline: true, components: [{ type: MasterdataComponent$1, selector: "lib-masterdata" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MasterdataComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'masterdata',
                        template: "\n      <lib-masterdata></lib-masterdata>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: PermissionStore }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                    type: i0.Input
                }], PERMISSION: [{
                    type: i0.Input
                }], mastersEvent: [{
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
    DirectivesModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, declarations: [PermissionDirective, ShowFieldDirective], imports: [i16.CommonModule], exports: [PermissionDirective, ShowFieldDirective] });
    DirectivesModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, imports: [[i16.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [PermissionDirective, ShowFieldDirective],
                        imports: [i16.CommonModule],
                        exports: [PermissionDirective, ShowFieldDirective]
                    }]
            }] });

    var AlertModule = /** @class */ (function () {
        function AlertModule() {
        }
        return AlertModule;
    }());
    AlertModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    AlertModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, declarations: [AlertComponent], imports: [i16.CommonModule], exports: [AlertComponent] });
    AlertModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, imports: [[i16.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i16.CommonModule],
                        declarations: [AlertComponent],
                        exports: [AlertComponent]
                    }]
            }] });

    var PicsMasterdataModule = /** @class */ (function () {
        function PicsMasterdataModule() {
        }
        return PicsMasterdataModule;
    }());
    PicsMasterdataModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsMasterdataModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    PicsMasterdataModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsMasterdataModule, declarations: [MasterdataComponent$1], imports: [i16.CommonModule,
            i2.FormsModule,
            i2.ReactiveFormsModule,
            ngBootstrap.NgbModule,
            tabmenu.TabMenuModule,
            tabview.TabViewModule,
            treeselect.TreeSelectModule,
            http.HttpClientModule,
            i12.CheckboxModule,
            dropdown.DropdownModule,
            i11.CardModule,
            confirmdialog.ConfirmDialogModule,
            accordion.AccordionModule,
            message.MessageModule,
            table.TableModule,
            i15.InputTextModule,
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
            i13.MultiSelectModule,
            inputswitch.InputSwitchModule,
            progressspinner.ProgressSpinnerModule,
            speeddial.SpeedDialModule,
            orderlist.OrderListModule,
            fileupload.FileUploadModule,
            dialog.DialogModule,
            password.PasswordModule,
            knob.KnobModule,
            sidebar.SidebarModule,
            i9.ContextMenuModule,
            i10.ConfirmPopupModule,
            DirectivesModule,
            AlertModule], exports: [MasterdataComponent$1] });
    PicsMasterdataModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsMasterdataModule, imports: [[
                i16.CommonModule,
                i2.FormsModule,
                i2.ReactiveFormsModule,
                ngBootstrap.NgbModule,
                tabmenu.TabMenuModule,
                tabview.TabViewModule,
                treeselect.TreeSelectModule,
                http.HttpClientModule,
                i12.CheckboxModule,
                dropdown.DropdownModule,
                i11.CardModule,
                confirmdialog.ConfirmDialogModule,
                accordion.AccordionModule,
                message.MessageModule,
                table.TableModule,
                i15.InputTextModule,
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
                i13.MultiSelectModule,
                inputswitch.InputSwitchModule,
                progressspinner.ProgressSpinnerModule,
                speeddial.SpeedDialModule,
                orderlist.OrderListModule,
                fileupload.FileUploadModule,
                dialog.DialogModule,
                password.PasswordModule,
                knob.KnobModule,
                sidebar.SidebarModule,
                i9.ContextMenuModule,
                i10.ConfirmPopupModule,
                DirectivesModule,
                AlertModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsMasterdataModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            MasterdataComponent$1
                        ],
                        imports: [
                            i16.CommonModule,
                            i2.FormsModule,
                            i2.ReactiveFormsModule,
                            ngBootstrap.NgbModule,
                            tabmenu.TabMenuModule,
                            tabview.TabViewModule,
                            treeselect.TreeSelectModule,
                            http.HttpClientModule,
                            i12.CheckboxModule,
                            dropdown.DropdownModule,
                            i11.CardModule,
                            confirmdialog.ConfirmDialogModule,
                            accordion.AccordionModule,
                            message.MessageModule,
                            table.TableModule,
                            i15.InputTextModule,
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
                            i13.MultiSelectModule,
                            inputswitch.InputSwitchModule,
                            progressspinner.ProgressSpinnerModule,
                            speeddial.SpeedDialModule,
                            orderlist.OrderListModule,
                            fileupload.FileUploadModule,
                            dialog.DialogModule,
                            password.PasswordModule,
                            knob.KnobModule,
                            sidebar.SidebarModule,
                            i9.ContextMenuModule,
                            i10.ConfirmPopupModule,
                            DirectivesModule,
                            AlertModule
                        ],
                        exports: [
                            MasterdataComponent$1
                        ],
                        schemas: [i0.NO_ERRORS_SCHEMA, i0.CUSTOM_ELEMENTS_SCHEMA],
                    }]
            }] });

    var MasterdataModule = /** @class */ (function () {
        function MasterdataModule() {
        }
        return MasterdataModule;
    }());
    MasterdataModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MasterdataModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    MasterdataModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MasterdataModule, declarations: [MasterdataComponent], imports: [PicsMasterdataModule], exports: [MasterdataComponent] });
    MasterdataModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MasterdataModule, providers: [RbacService, AlertService, i4.ConfirmationService, PermissionStore, DataStoreService], imports: [[
                PicsMasterdataModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MasterdataModule, decorators: [{
                type: i0.NgModule,
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
                        providers: [RbacService, AlertService, i4.ConfirmationService, PermissionStore, DataStoreService]
                    }]
            }] });

    /*
     * Public API Surface of masterdata
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MasterdataComponent = MasterdataComponent;
    exports.MasterdataModule = MasterdataModule;
    exports.MasterdataService = MasterdataService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=pics-core-masterdata.umd.js.map
