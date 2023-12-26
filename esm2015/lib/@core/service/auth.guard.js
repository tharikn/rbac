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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9jb25maWctbG9naW4tc2V0dGluZ3Mvc3JjL2xpYi9AY29yZS9zZXJ2aWNlL2F1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFFMUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUs5QyxNQUFNLE9BQU8sU0FBUztJQUNwQixZQUFvQixNQUFjLEVBQVUsa0JBQXNDO1FBQTlELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQUcsQ0FBQztJQUV0RixXQUFXLENBQUMsTUFBOEIsRUFBRSxNQUEyQjtRQUNyRSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLEVBQUUsRUFBRTtZQUM3QyxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsR0FBRyxDQUFDLEtBQUssQ0FBQywyREFBMkQsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNqQyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O3VHQVZVLFNBQVM7MkdBQVQsU0FBUyxjQUZSLE1BQU07NEZBRVAsU0FBUztrQkFIckIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlLCBSb3V0ZXIsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDcmVkZW50aWFsc1NlcnZpY2UgfSBmcm9tICcuL2NyZWRlbnRpYWxzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL2xvZ2dlci5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IGxvZyA9IG5ldyBMb2dnZXIoJ0F1dGhlbnRpY2F0aW9uR3VhcmQnKTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGNyZWRlbnRpYWxzU2VydmljZTogQ3JlZGVudGlhbHNTZXJ2aWNlKSB7fVxyXG5cclxuICBjYW5BY3RpdmF0ZShfcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIF9zdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuY3JlZGVudGlhbHNTZXJ2aWNlLmlzQXV0aGVudGljYXRlZCgpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgbG9nLmRlYnVnKCdOb3QgYXV0aGVudGljYXRlZCwgcmVkaXJlY3RpbmcgYW5kIGFkZGluZyByZWRpcmVjdCB1cmwuLi4nKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXX0=