import { Injectable } from '@angular/core';
import { Logger } from './logger.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./credentials.service";
const log = new Logger('AuthenticationGuard');
export class AuthGuard {
    constructor(router, credentialsService) {
        this.router = router;
        this.credentialsService = credentialsService;
    }
    canActivate(_route, _state) {
        if (this.credentialsService.isAuthenticated()) {
            return true;
        }
        log.debug('Not authenticated, redirecting and adding redirect url...');
        this.router.navigate(['/login']);
        return false;
    }
}
AuthGuard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthGuard, deps: [{ token: i1.Router }, { token: i2.CredentialsService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthGuard.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthGuard, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i2.CredentialsService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9sb2dpbi9zcmMvbGliL3BpY3MtbG9naW4vQGNvcmUvc2VydmljZS9hdXRoLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBRTFDLE1BQU0sR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFLOUMsTUFBTSxPQUFPLFNBQVM7SUFDcEIsWUFBb0IsTUFBYyxFQUFVLGtCQUFzQztRQUE5RCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUFHLENBQUM7SUFFdEYsV0FBVyxDQUFDLE1BQThCLEVBQUUsTUFBMkI7UUFDckUsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxFQUFFLEVBQUU7WUFDN0MsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELEdBQUcsQ0FBQyxLQUFLLENBQUMsMkRBQTJELENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDakMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzt1R0FWVSxTQUFTOzJHQUFULFNBQVMsY0FGUixNQUFNOzRGQUVQLFNBQVM7a0JBSHJCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBDYW5BY3RpdmF0ZSwgUm91dGVyLCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ3JlZGVudGlhbHNTZXJ2aWNlIH0gZnJvbSAnLi9jcmVkZW50aWFscy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXIuc2VydmljZSc7XHJcblxyXG5jb25zdCBsb2cgPSBuZXcgTG9nZ2VyKCdBdXRoZW50aWNhdGlvbkd1YXJkJyk7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBjcmVkZW50aWFsc1NlcnZpY2U6IENyZWRlbnRpYWxzU2VydmljZSkge31cclxuXHJcbiAgY2FuQWN0aXZhdGUoX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBfc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmNyZWRlbnRpYWxzU2VydmljZS5pc0F1dGhlbnRpY2F0ZWQoKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGxvZy5kZWJ1ZygnTm90IGF1dGhlbnRpY2F0ZWQsIHJlZGlyZWN0aW5nIGFuZCBhZGRpbmcgcmVkaXJlY3QgdXJsLi4uJyk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIl19