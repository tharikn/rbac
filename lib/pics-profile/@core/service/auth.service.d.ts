import { Injector } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AlertService } from './alert.service';
import { DataStoreService } from './data-store.service';
import * as i0 from "@angular/core";
export declare class AuthService {
    private _router;
    private _storeservice;
    sharedInfo: any;
    alertService: AlertService;
    httpService: any;
    constructor(injector: Injector, _router: Router, _storeservice: DataStoreService);
    orgInfo: BehaviorSubject<any>;
    currentOrgInfo: import("rxjs").Observable<any>;
    feedOrgInfo(data: any): void;
    logout(): void;
    ResetPassword(data: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthService>;
}
