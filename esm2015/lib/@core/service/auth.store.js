import { Injectable } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthState } from './auth.state';
import { AuthURL } from '../urls/rbac-url.config';
import { Store } from './store.service';
import * as i0 from "@angular/core";
import * as i1 from "./http.service";
export class AuthStore extends Store {
    constructor(httpService) {
        super(new AuthState());
        this.httpService = httpService;
    }
    addAuthInfo(user) {
        this.setState(Object.assign(Object.assign({}, this.state), { user }));
    }
    getAuthInfo() {
        console.log(this.state);
        if (this.state.user) {
            return of(this.state.user);
        }
        else {
            return forkJoin([this.httpService.get(AuthURL.EndPoints.auth.user.userInfo)]).pipe(tap(([user]) => {
                return user;
            }));
        }
    }
}
AuthStore.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthStore, deps: [{ token: i1.HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthStore.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthStore });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthStore, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9jb25maWctbG9naW4tc2V0dGluZ3Mvc3JjL2xpYi9AY29yZS9zZXJ2aWNlL2F1dGguc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHckMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFHeEMsTUFBTSxPQUFPLFNBQVUsU0FBUSxLQUFnQjtJQUM3QyxZQUFvQixXQUF3QjtRQUMxQyxLQUFLLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBREwsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFFNUMsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFhO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLGlDQUFNLElBQUksQ0FBQyxLQUFLLEtBQUUsSUFBSSxJQUFHLENBQUM7SUFDekMsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ25CLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7YUFBTTtZQUNMLE9BQU8sUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ2hGLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDYixPQUFPLElBQUksQ0FBQztZQUNkLENBQUMsQ0FBQyxDQUNILENBQUM7U0FDSDtJQUNILENBQUM7O3VHQXBCVSxTQUFTOzJHQUFULFNBQVM7NEZBQVQsU0FBUztrQkFEckIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZm9ya0pvaW4sIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgVXNlckR0byB9IGZyb20gJy4uL2NvbnN0YW50cy9jb21tb24uZW50aXRpZXMnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aFN0YXRlIH0gZnJvbSAnLi9hdXRoLnN0YXRlJztcclxuaW1wb3J0IHsgQXV0aFVSTCB9IGZyb20gJy4uL3VybHMvcmJhYy11cmwuY29uZmlnJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuL3N0b3JlLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFN0b3JlIGV4dGVuZHMgU3RvcmU8QXV0aFN0YXRlPiB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwU2VydmljZTogSHR0cFNlcnZpY2UpIHtcclxuICAgIHN1cGVyKG5ldyBBdXRoU3RhdGUoKSk7XHJcbiAgfVxyXG5cclxuICBhZGRBdXRoSW5mbyh1c2VyOiBVc2VyRHRvKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgdXNlciB9KTtcclxuICB9XHJcblxyXG4gIGdldEF1dGhJbmZvKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgIGlmICh0aGlzLnN0YXRlLnVzZXIpIHtcclxuICAgICAgcmV0dXJuIG9mKHRoaXMuc3RhdGUudXNlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZm9ya0pvaW4oW3RoaXMuaHR0cFNlcnZpY2UuZ2V0KEF1dGhVUkwuRW5kUG9pbnRzLmF1dGgudXNlci51c2VySW5mbyldKS5waXBlKFxyXG4gICAgICAgIHRhcCgoW3VzZXJdKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=