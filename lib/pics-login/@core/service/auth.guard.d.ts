import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { CredentialsService } from './credentials.service';
import * as i0 from "@angular/core";
export declare class AuthGuard implements CanActivate {
    private router;
    private credentialsService;
    constructor(router: Router, credentialsService: CredentialsService);
    canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthGuard>;
}
