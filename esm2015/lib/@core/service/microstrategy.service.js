import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./alert.service";
import * as i3 from "./../permissions/permission.store";
import * as i4 from "./data-store.service";
export class MicrostrategyService {
    constructor(http, alertService, permissionStore, _storeservice) {
        this.http = http;
        this.alertService = alertService;
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res['RBACORG'] && res['RBACORG'] !== '') {
                this.RBACORG = res['RBACORG'];
                this.environment = this.RBACORG['environment'] ? this.RBACORG['environment'] : '';
            }
        });
    }
    getAuthToken() {
        const body = {
            username: this.environment.mstrUsername,
            password: this.environment.mstrPassword,
            loginMode: 1
        };
        return this.http.post(`${this.environment.mstrURL}/api/auth/login`, body, {
            withCredentials: true,
            headers: { 'Content-type': 'application/json' },
            observe: 'response'
        });
    }
    getDossier(projectId, dossierId, pageNo) {
        return __awaiter(this, void 0, void 0, function* () {
            const permissions = this.permissionStore.state;
            const projectUrl = `${this.environment.mstrURL}/app/${projectId}`;
            const dossierUrl = `${projectUrl}/${dossierId}/${pageNo}`;
            microstrategy.dossier
                .create({
                placeholder: document.getElementById('dossierContainer'),
                url: dossierUrl,
                dossierFeature: {
                    readonly: false
                },
                navigationBar: {
                    edit: true,
                    enabled: true,
                    gotoLibrary: permissions === null || permissions === void 0 ? void 0 : permissions.ANA_LIBRARY,
                    title: true,
                    toc: true,
                    reset: true,
                    reprompt: true,
                    share: true,
                    comment: true,
                    notification: true,
                    filter: true,
                    options: true,
                    search: true,
                    bookmark: true
                },
                enableCustomAuthentication: true,
                enableResponsive: false,
                containerWidth: 400,
                containerHeight: 400,
                customAuthenticationType: microstrategy.dossier.CustomAuthenticationType.IDENTITY_TOKEN,
                getLoginToken: () => __awaiter(this, void 0, void 0, function* () {
                    const response = yield this.getAuthToken().toPromise();
                    return response.headers.get('x-mstr-authtoken');
                })
            })
                .catch(_err => this.alertService.error(`Failed to connect ${this.environment.mstrURL}`));
        });
    }
    getLibraryDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield this.getAuthToken().toPromise();
            const authtoken = token.headers.get('x-mstr-authtoken');
            const headerInfo = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-MSTR-AuthToken': authtoken ? authtoken : '',
                'X-MSTR-ProjectID': this.environment.mstrProjectID
            };
            return this.http
                .get(`${this.environment.mstrURL}/api/library`, {
                withCredentials: true,
                headers: headerInfo
            })
                .toPromise()
                .then((response) => {
                return response.map((mstr) => ({
                    id: mstr.target.id,
                    projectId: mstr.projectId,
                    name: mstr.target.name
                }));
            });
        });
    }
}
MicrostrategyService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MicrostrategyService, deps: [{ token: i1.HttpClient }, { token: i2.AlertService }, { token: i3.PermissionStore }, { token: i4.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
MicrostrategyService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MicrostrategyService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MicrostrategyService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.AlertService }, { type: i3.PermissionStore }, { type: i4.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljcm9zdHJhdGVneS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvbWljcm9zdHJhdGVneS9zcmMvbGliL0Bjb3JlL3NlcnZpY2UvbWljcm9zdHJhdGVneS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFXM0MsTUFBTSxPQUFPLG9CQUFvQjtJQUkvQixZQUFvQixJQUFnQixFQUMxQixZQUEwQixFQUMxQixlQUFnQyxFQUNoQyxhQUErQjtRQUhyQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQzFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDbkQsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2FBQ25GO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUgsWUFBWTtRQUNWLE1BQU0sSUFBSSxHQUFHO1lBQ1gsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWTtZQUN2QyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZO1lB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LElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxjQUFjLEVBQUU7Z0JBQzlDLGVBQWUsRUFBRSxJQUFJO2dCQUNyQixPQUFPLEVBQUUsVUFBVTthQUNwQixDQUFDO2lCQUNELFNBQVMsRUFBRTtpQkFDWCxJQUFJLENBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTtnQkFDdEIsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUNsQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUNsQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7b0JBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7aUJBQ3ZCLENBQUMsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7O2tIQTVGVSxvQkFBb0I7c0hBQXBCLG9CQUFvQixjQUZuQixNQUFNOzRGQUVQLG9CQUFvQjtrQkFIaEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uU3RvcmUgfSBmcm9tICcuLy4uL3Blcm1pc3Npb25zL3Blcm1pc3Npb24uc3RvcmUnO1xyXG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICcuL2FsZXJ0LnNlcnZpY2UnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBtaWNyb3N0cmF0ZWd5OiBhbnk7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNaWNyb3N0cmF0ZWd5U2VydmljZSB7XHJcbiAgZG9zc2llckxpc3Q6IGFueTtcclxuICBSQkFDT1JHOiBhbnk7XHJcbiAgZW52aXJvbm1lbnQ6IGFueTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwZXJtaXNzaW9uU3RvcmU6IFBlcm1pc3Npb25TdG9yZSxcclxuICAgIHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZSkge1xyXG4gICAgICB0aGlzLl9zdG9yZXNlcnZpY2UuY3VycmVudFN0b3JlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmIChyZXNbJ1JCQUNPUkcnXSAmJiByZXNbJ1JCQUNPUkcnXSAhPT0gJycpIHtcclxuICAgICAgICAgIHRoaXMuUkJBQ09SRyA9IHJlc1snUkJBQ09SRyddO1xyXG4gICAgICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IHRoaXMuUkJBQ09SR1snZW52aXJvbm1lbnQnXSA/IHRoaXMuUkJBQ09SR1snZW52aXJvbm1lbnQnXSA6ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gIGdldEF1dGhUb2tlbigpIHtcclxuICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgIHVzZXJuYW1lOiB0aGlzLmVudmlyb25tZW50Lm1zdHJVc2VybmFtZSxcclxuICAgICAgcGFzc3dvcmQ6IHRoaXMuZW52aXJvbm1lbnQubXN0clBhc3N3b3JkLFxyXG4gICAgICBsb2dpbk1vZGU6IDFcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy5lbnZpcm9ubWVudC5tc3RyVVJMfS9hcGkvYXV0aC9sb2dpbmAsIGJvZHksIHtcclxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXREb3NzaWVyKHByb2plY3RJZD86IHN0cmluZywgZG9zc2llcklkPzogc3RyaW5nLCBwYWdlTm8/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHBlcm1pc3Npb25zID0gdGhpcy5wZXJtaXNzaW9uU3RvcmUuc3RhdGU7XHJcbiAgICBjb25zdCBwcm9qZWN0VXJsID0gYCR7dGhpcy5lbnZpcm9ubWVudC5tc3RyVVJMfS9hcHAvJHtwcm9qZWN0SWR9YDtcclxuICAgIGNvbnN0IGRvc3NpZXJVcmwgPSBgJHtwcm9qZWN0VXJsfS8ke2Rvc3NpZXJJZH0vJHtwYWdlTm99YDtcclxuICAgIG1pY3Jvc3RyYXRlZ3kuZG9zc2llclxyXG4gICAgICAuY3JlYXRlKHtcclxuICAgICAgICBwbGFjZWhvbGRlcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rvc3NpZXJDb250YWluZXInKSxcclxuICAgICAgICB1cmw6IGRvc3NpZXJVcmwsXHJcbiAgICAgICAgZG9zc2llckZlYXR1cmU6IHtcclxuICAgICAgICAgIHJlYWRvbmx5OiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmF2aWdhdGlvbkJhcjoge1xyXG4gICAgICAgICAgZWRpdDogdHJ1ZSxcclxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICBnb3RvTGlicmFyeTogcGVybWlzc2lvbnM/LkFOQV9MSUJSQVJZLFxyXG4gICAgICAgICAgdGl0bGU6IHRydWUsXHJcbiAgICAgICAgICB0b2M6IHRydWUsXHJcbiAgICAgICAgICByZXNldDogdHJ1ZSxcclxuICAgICAgICAgIHJlcHJvbXB0OiB0cnVlLFxyXG4gICAgICAgICAgc2hhcmU6IHRydWUsXHJcbiAgICAgICAgICBjb21tZW50OiB0cnVlLFxyXG4gICAgICAgICAgbm90aWZpY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgZmlsdGVyOiB0cnVlLFxyXG4gICAgICAgICAgb3B0aW9uczogdHJ1ZSxcclxuICAgICAgICAgIHNlYXJjaDogdHJ1ZSxcclxuICAgICAgICAgIGJvb2ttYXJrOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbmFibGVDdXN0b21BdXRoZW50aWNhdGlvbjogdHJ1ZSxcclxuICAgICAgICBlbmFibGVSZXNwb25zaXZlOiBmYWxzZSxcclxuICAgICAgICBjb250YWluZXJXaWR0aDogNDAwLFxyXG4gICAgICAgIGNvbnRhaW5lckhlaWdodDogNDAwLFxyXG4gICAgICAgIGN1c3RvbUF1dGhlbnRpY2F0aW9uVHlwZTogbWljcm9zdHJhdGVneS5kb3NzaWVyLkN1c3RvbUF1dGhlbnRpY2F0aW9uVHlwZS5JREVOVElUWV9UT0tFTixcclxuICAgICAgICBnZXRMb2dpblRva2VuOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZ2V0QXV0aFRva2VuKCkudG9Qcm9taXNlKCk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ3gtbXN0ci1hdXRodG9rZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChfZXJyID0+IHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKGBGYWlsZWQgdG8gY29ubmVjdCAke3RoaXMuZW52aXJvbm1lbnQubXN0clVSTH1gKSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgYXN5bmMgZ2V0TGlicmFyeURldGFpbHMoKSB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHRoaXMuZ2V0QXV0aFRva2VuKCkudG9Qcm9taXNlKCk7XHJcbiAgICBjb25zdCBhdXRodG9rZW4gPSB0b2tlbi5oZWFkZXJzLmdldCgneC1tc3RyLWF1dGh0b2tlbicpXHJcbiAgICBjb25zdCBoZWFkZXJJbmZvID0ge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAnWC1NU1RSLUF1dGhUb2tlbic6IGF1dGh0b2tlbiA/IGF1dGh0b2tlbjogJycsXHJcbiAgICAgICdYLU1TVFItUHJvamVjdElEJzogdGhpcy5lbnZpcm9ubWVudC5tc3RyUHJvamVjdElEXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0KGAke3RoaXMuZW52aXJvbm1lbnQubXN0clVSTH0vYXBpL2xpYnJhcnlgLCB7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlckluZm9cclxuICAgICAgfSlcclxuICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLm1hcCgobXN0cjogYW55KSA9PiAoe1xyXG4gICAgICAgICAgaWQ6IG1zdHIudGFyZ2V0LmlkLFxyXG4gICAgICAgICAgcHJvamVjdElkOiBtc3RyLnByb2plY3RJZCxcclxuICAgICAgICAgIG5hbWU6IG1zdHIudGFyZ2V0Lm5hbWVcclxuICAgICAgICB9KSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=