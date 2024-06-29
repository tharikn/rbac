import { Injector } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AlertService } from './alert.service';
import { AuthStore } from './auth.store';
import { CredentialsService } from './credentials.service';
import { DataStoreService } from './data-store.service';
import { DynamicTabPageService } from './dynamic-tab-page-service';
import { LocalService } from './local.service';
import { PageHeaderService } from './page-header.service';
import * as i0 from "@angular/core";
export declare class AuthService {
    private _storeservice;
    private store;
    private _router;
    private credentialsService;
    private localstore;
    sharedInfo: any;
    alertService: AlertService;
    dynamicTabPageService: DynamicTabPageService;
    pageHeaderService: PageHeaderService;
    httpService: any;
    constructor(injector: Injector, _storeservice: DataStoreService, store: AuthStore, _router: Router, credentialsService: CredentialsService, localstore: LocalService);
    orgInfo: BehaviorSubject<any>;
    currentOrgInfo: Observable<any>;
    currentMenu: BehaviorSubject<any>;
    currentMenuInfo: Observable<any>;
    feedOrgInfo(data: any): void;
    getCurrentMenu(data: any): void;
    getUserOrgList(): any;
    getUnNotified(): any;
    updateUnNotified(data: any): any;
    updateWorkerAvailability(data: any): any;
    getWorkerAvailability(): any;
    getMstrToken(): any;
    login(email: string, password: string, otp: string): Observable<any>;
    refreshToken(): any;
    resetLoggedIn(): void;
    logout(): void;
    getUserRole(id: any): Observable<any>;
    routeToDynamicPage(orgid: any): Observable<any>;
    getAuthMe(): any;
    ResetPassword(data: any): any;
    getRoleKey(): any;
    isAdmin(): boolean;
    getOrgID(): any;
    conformMail(data: any): any;
    changePassword(data: any): any;
    setSharedMessage(data: any): void;
    getSharedMessage(): any;
    checkDynamicPagePermission(pageId: any): Promise<void>;
    getCurrentOrg(): any;
    getAuthorizedPages(): Promise<any>;
    getCustomPage(page: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthService>;
}