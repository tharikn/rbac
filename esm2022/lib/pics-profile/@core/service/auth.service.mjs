import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthURL } from '../urls/rbac-url.config';
import { AlertService } from './alert.service';
import * as i0 from "@angular/core";
import * as i1 from "./http.service";
import * as i2 from "@angular/router";
export class AuthService {
    httpService;
    _router;
    sharedInfo;
    alertService;
    constructor(injector, httpService, _router) {
        this.httpService = httpService;
        this._router = _router;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, deps: [{ token: i0.Injector }, { token: i1.HttpService }, { token: i2.Router }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.HttpService }, { type: i2.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3Byb2ZpbGUvc3JjL2xpYi9waWNzLXByb2ZpbGUvQGNvcmUvc2VydmljZS9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFRL0MsTUFBTSxPQUFPLFdBQVc7SUFLWjtJQUNBO0lBTFYsVUFBVSxDQUFNO0lBQ2hCLFlBQVksQ0FBZTtJQUMzQixZQUNFLFFBQWtCLEVBQ1YsV0FBd0IsRUFDeEIsT0FBZTtRQURmLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFFdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFlLFlBQVksQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFTSxPQUFPLEdBQUcsSUFBSSxlQUFlLENBQU0sRUFBRSxDQUFDLENBQUM7SUFDOUMsY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFN0MsV0FBVyxDQUFDLElBQVM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNNLE1BQU07UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbEMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZCLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBR0QsYUFBYSxDQUFDLElBQVM7UUFDckIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hGLENBQUM7d0dBMUJVLFdBQVc7NEdBQVgsV0FBVyxjQUhWLE1BQU07OzRGQUdQLFdBQVc7a0JBTHZCLFVBQVU7bUJBQ1g7b0JBQ0UsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEF1dGhVUkwgfSBmcm9tICcuLi91cmxzL3JiYWMtdXJsLmNvbmZpZyc7XHJcbmltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gJy4vYWxlcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi9odHRwLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoXHJcbntcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufVxyXG4pXHJcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XHJcbiAgc2hhcmVkSW5mbzogYW55O1xyXG4gIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgcHJpdmF0ZSBodHRwU2VydmljZTogSHR0cFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlclxyXG4gICkge1xyXG4gICAgdGhpcy5hbGVydFNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8QWxlcnRTZXJ2aWNlPihBbGVydFNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9yZ0luZm8gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oJycpO1xyXG4gIGN1cnJlbnRPcmdJbmZvID0gdGhpcy5vcmdJbmZvLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBmZWVkT3JnSW5mbyhkYXRhOiBhbnkpIHtcclxuICAgIHRoaXMub3JnSW5mby5uZXh0KGRhdGEpO1xyXG4gIH1cclxuICBwdWJsaWMgbG9nb3V0KCkge1xyXG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyXG4gICAgc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gIH1cclxuXHJcblxyXG4gIFJlc2V0UGFzc3dvcmQoZGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KEF1dGhVUkwuRW5kUG9pbnRzLmF1dGgudXNlci5yZXNldFBhc3N3b3JkLCBkYXRhKTtcclxuICB9XHJcbn1cclxuIl19