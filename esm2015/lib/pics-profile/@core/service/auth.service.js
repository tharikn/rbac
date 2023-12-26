import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthURL } from '../urls/rbac-url.config';
import { AlertService } from './alert.service';
import * as i0 from "@angular/core";
import * as i1 from "./http.service";
import * as i2 from "@angular/router";
export class AuthService {
    constructor(injector, httpService, _router) {
        this.httpService = httpService;
        this._router = _router;
        this.orgInfo = new BehaviorSubject('');
        this.currentOrgInfo = this.orgInfo.asObservable();
        this.alertService = injector.get(AlertService);
    }
    feedOrgInfo(data) {
        this.orgInfo.next(data);
    }
    logout() {
        this._router.navigate(['/login']);
        sessionStorage.clear();
        localStorage.clear();
    }
    ResetPassword(data) {
        return this.httpService.post(AuthURL.EndPoints.auth.user.resetPassword, data);
    }
}
AuthService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthService, deps: [{ token: i0.Injector }, { token: i1.HttpService }, { token: i2.Router }], target: i0.ɵɵFactoryTarget.Injectable });
AuthService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.HttpService }, { type: i2.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3Byb2ZpbGUvc3JjL2xpYi9waWNzLXByb2ZpbGUvQGNvcmUvc2VydmljZS9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFRL0MsTUFBTSxPQUFPLFdBQVc7SUFHdEIsWUFDRSxRQUFrQixFQUNWLFdBQXdCLEVBQ3hCLE9BQWU7UUFEZixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBS2xCLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBTSxFQUFFLENBQUMsQ0FBQztRQUM5QyxtQkFBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7UUFKM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFlLFlBQVksQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFLRCxXQUFXLENBQUMsSUFBUztRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ00sTUFBTTtRQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNsQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkIsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFHRCxhQUFhLENBQUMsSUFBUztRQUNyQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEYsQ0FBQzs7eUdBMUJVLFdBQVc7NkdBQVgsV0FBVyxjQUhWLE1BQU07NEZBR1AsV0FBVztrQkFMdkIsVUFBVTttQkFDWDtvQkFDRSxVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQXV0aFVSTCB9IGZyb20gJy4uL3VybHMvcmJhYy11cmwuY29uZmlnJztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICcuL2h0dHAuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZShcclxue1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59XHJcbilcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICBzaGFyZWRJbmZvOiBhbnk7XHJcbiAgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2U7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwcml2YXRlIGh0dHBTZXJ2aWNlOiBIdHRwU2VydmljZSxcclxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyXHJcbiAgKSB7XHJcbiAgICB0aGlzLmFsZXJ0U2VydmljZSA9IGluamVjdG9yLmdldDxBbGVydFNlcnZpY2U+KEFsZXJ0U2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3JnSW5mbyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PignJyk7XHJcbiAgY3VycmVudE9yZ0luZm8gPSB0aGlzLm9yZ0luZm8uYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGZlZWRPcmdJbmZvKGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5vcmdJbmZvLm5leHQoZGF0YSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBsb2dvdXQoKSB7XHJcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgUmVzZXRQYXNzd29yZChkYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoQXV0aFVSTC5FbmRQb2ludHMuYXV0aC51c2VyLnJlc2V0UGFzc3dvcmQsIGRhdGEpO1xyXG4gIH1cclxufVxyXG4iXX0=