import { Injector } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AlertService } from './alert.service';
import { HttpService } from './http.service';
import * as i0 from "@angular/core";
export declare class AuthService {
    private httpService;
    private _router;
    sharedInfo: any;
    alertService: AlertService;
    constructor(injector: Injector, httpService: HttpService, _router: Router);
    orgInfo: BehaviorSubject<any>;
    currentOrgInfo: import("rxjs").Observable<any>;
    feedOrgInfo(data: any): void;
    logout(): void;
    ResetPassword(data: any): import("rxjs").Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthService>;
}
