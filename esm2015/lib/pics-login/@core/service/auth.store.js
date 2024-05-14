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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9sb2dpbi9zcmMvbGliL3BpY3MtbG9naW4vQGNvcmUvc2VydmljZS9hdXRoLnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3JDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDekMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBR3hDLE1BQU0sT0FBTyxTQUFVLFNBQVEsS0FBZ0I7SUFDN0MsWUFBb0IsV0FBd0I7UUFDMUMsS0FBSyxDQUFDLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQztRQURMLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBRTVDLENBQUM7SUFFRCxXQUFXLENBQUMsSUFBYTtRQUN2QixJQUFJLENBQUMsUUFBUSxpQ0FBTSxJQUFJLENBQUMsS0FBSyxLQUFFLElBQUksSUFBRyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNuQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVCO2FBQU07WUFDTCxPQUFPLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNoRixHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ2IsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FDSCxDQUFDO1NBQ0g7SUFDSCxDQUFDOzt1R0FwQlUsU0FBUzsyR0FBVCxTQUFTOzRGQUFULFNBQVM7a0JBRHJCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZvcmtKb2luLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFVzZXJEdG8gfSBmcm9tICcuLi9jb25zdGFudHMvY29tbW9uLmVudGl0aWVzJztcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICcuL2h0dHAuc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhTdGF0ZSB9IGZyb20gJy4vYXV0aC5zdGF0ZSc7XHJcbmltcG9ydCB7IEF1dGhVUkwgfSBmcm9tICcuLi91cmxzL3JiYWMtdXJsLmNvbmZpZyc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi9zdG9yZS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhTdG9yZSBleHRlbmRzIFN0b3JlPEF1dGhTdGF0ZT4ge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcihuZXcgQXV0aFN0YXRlKCkpO1xyXG4gIH1cclxuXHJcbiAgYWRkQXV0aEluZm8odXNlcjogVXNlckR0byk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIHVzZXIgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRBdXRoSW5mbygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS51c2VyKSB7XHJcbiAgICAgIHJldHVybiBvZih0aGlzLnN0YXRlLnVzZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZvcmtKb2luKFt0aGlzLmh0dHBTZXJ2aWNlLmdldChBdXRoVVJMLkVuZFBvaW50cy5hdXRoLnVzZXIudXNlckluZm8pXSkucGlwZShcclxuICAgICAgICB0YXAoKFt1c2VyXSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19