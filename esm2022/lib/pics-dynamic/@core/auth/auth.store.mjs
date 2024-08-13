import { Injectable } from '@angular/core';
import { Store } from '../service/store.service';
import { forkJoin, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthURL } from '../config/auth-url.config';
import { AuthState } from './auth.state';
import * as i0 from "@angular/core";
import * as i1 from "../service/http.service";
export class AuthStore extends Store {
    httpService;
    constructor(httpService) {
        super(new AuthState());
        this.httpService = httpService;
    }
    addAuthInfo(user) {
        this.setState({ ...this.state, user });
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthStore, deps: [{ token: i1.HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthStore });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthStore, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvQGNvcmUvYXV0aC9hdXRoLnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7O0FBRXpDLE1BQU0sT0FBTyxTQUFVLFNBQVEsS0FBZ0I7SUFDekI7SUFBcEIsWUFBb0IsV0FBd0I7UUFDMUMsS0FBSyxDQUFDLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQztRQURMLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBRTVDLENBQUM7SUFFRCxXQUFXLENBQUMsSUFBYTtRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ25CLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7YUFBTTtZQUNMLE9BQU8sUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ2hGLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDYixPQUFPLElBQUksQ0FBQztZQUNkLENBQUMsQ0FBQyxDQUNILENBQUM7U0FDSDtJQUNILENBQUM7d0dBcEJVLFNBQVM7NEdBQVQsU0FBUzs7NEZBQVQsU0FBUztrQkFEckIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXNlckR0byB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uZW50aXR5JztcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2h0dHAuc2VydmljZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi4vc2VydmljZS9zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgZm9ya0pvaW4sIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQXV0aFVSTCB9IGZyb20gJy4uL2NvbmZpZy9hdXRoLXVybC5jb25maWcnO1xyXG5pbXBvcnQgeyBBdXRoU3RhdGUgfSBmcm9tICcuL2F1dGguc3RhdGUnO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoU3RvcmUgZXh0ZW5kcyBTdG9yZTxBdXRoU3RhdGU+IHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBTZXJ2aWNlOiBIdHRwU2VydmljZSkge1xyXG4gICAgc3VwZXIobmV3IEF1dGhTdGF0ZSgpKTtcclxuICB9XHJcblxyXG4gIGFkZEF1dGhJbmZvKHVzZXI6IFVzZXJEdG8pOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCB1c2VyIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXV0aEluZm8oKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUudXNlcikge1xyXG4gICAgICByZXR1cm4gb2YodGhpcy5zdGF0ZS51c2VyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmb3JrSm9pbihbdGhpcy5odHRwU2VydmljZS5nZXQoQXV0aFVSTC5FbmRQb2ludHMuYXV0aC51c2VyLnVzZXJJbmZvKV0pLnBpcGUoXHJcbiAgICAgICAgdGFwKChbdXNlcl0pID0+IHtcclxuICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==