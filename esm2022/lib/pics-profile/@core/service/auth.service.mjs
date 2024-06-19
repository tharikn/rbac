import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthURL } from '../urls/rbac-url.config';
import { AlertService } from './alert.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./data-store.service";
export class AuthService {
    _router;
    _storeservice;
    sharedInfo;
    alertService;
    httpService;
    constructor(injector, _router, _storeservice) {
        this._router = _router;
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
        this.alertService = injector.get(AlertService);
    }
    orgInfo = new BehaviorSubject('');
    currentOrgInfo = this.orgInfo.asObservable();
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i2.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i2.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3Byb2ZpbGUvc3JjL2xpYi9waWNzLXByb2ZpbGUvQGNvcmUvc2VydmljZS9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFRL0MsTUFBTSxPQUFPLFdBQVc7SUFNWjtJQUNBO0lBTlYsVUFBVSxDQUFNO0lBQ2hCLFlBQVksQ0FBZTtJQUMzQixXQUFXLENBQUs7SUFDaEIsWUFDRSxRQUFrQixFQUNWLE9BQWUsRUFDZixhQUErQjtRQUQvQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2Ysa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBRXZDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ3JELElBQUcsR0FBRyxFQUFDO2dCQUNMLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO2FBQ3RDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQWUsWUFBWSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVNLE9BQU8sR0FBRyxJQUFJLGVBQWUsQ0FBTSxFQUFFLENBQUMsQ0FBQztJQUM5QyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUU3QyxXQUFXLENBQUMsSUFBUztRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ00sTUFBTTtRQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNsQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkIsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFHRCxhQUFhLENBQUMsSUFBUztRQUNyQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEYsQ0FBQzt3R0FoQ1UsV0FBVzs0R0FBWCxXQUFXLGNBSFYsTUFBTTs7NEZBR1AsV0FBVztrQkFMdkIsVUFBVTttQkFDWDtvQkFDRSxVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQXV0aFVSTCB9IGZyb20gJy4uL3VybHMvcmJhYy11cmwuY29uZmlnJztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4vZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKFxyXG57XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn1cclxuKVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gIHNoYXJlZEluZm86IGFueTtcclxuICBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZTtcclxuICBodHRwU2VydmljZTphbnk7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5fc3RvcmVzZXJ2aWNlLmN1cnJlbnRTdG9yZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgdGhpcy5odHRwU2VydmljZSA9IHJlc1snSFRUUFNFUlZJQ0UnXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgdGhpcy5hbGVydFNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8QWxlcnRTZXJ2aWNlPihBbGVydFNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9yZ0luZm8gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oJycpO1xyXG4gIGN1cnJlbnRPcmdJbmZvID0gdGhpcy5vcmdJbmZvLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBmZWVkT3JnSW5mbyhkYXRhOiBhbnkpIHtcclxuICAgIHRoaXMub3JnSW5mby5uZXh0KGRhdGEpO1xyXG4gIH1cclxuICBwdWJsaWMgbG9nb3V0KCkge1xyXG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyXG4gICAgc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gIH1cclxuXHJcblxyXG4gIFJlc2V0UGFzc3dvcmQoZGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KEF1dGhVUkwuRW5kUG9pbnRzLmF1dGgudXNlci5yZXNldFBhc3N3b3JkLCBkYXRhKTtcclxuICB9XHJcbn1cclxuIl19