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
        const permissions = this.permissionStore.state;
        const projectUrl = `${this.environment.mstrURL}/app/${projectId}`;
        const dossierUrl = `${projectUrl}/${dossierId}/${pageNo}`;
        microstrategy.dossier
            .create({
            placeholder: document.getElementById('dossierContainer'),
            url: dossierUrl,
            navigationBar: {
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
            customAuthenticationType: microstrategy.dossier.CustomAuthenticationType.AUTH_TOKEN,
            getLoginToken: () => __awaiter(this, void 0, void 0, function* () {
                const response = yield this.getAuthToken().toPromise();
                return response.headers.get('x-mstr-authtoken');
            })
        })
            .catch((_err) => this.alertService.error(`Failed to connect ${this.environment.mstrURL}`));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljcm9zdHJhdGVneS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2NvbmZpZy1sb2dpbi1zZXR0aW5ncy9zcmMvbGliL0Bjb3JlL3NlcnZpY2UvbWljcm9zdHJhdGVneS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFVM0MsTUFBTSxPQUFPLG9CQUFvQjtJQUkvQixZQUFvQixJQUFnQixFQUMxQixZQUEwQixFQUMxQixlQUFnQyxFQUNoQyxhQUErQjtRQUhyQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQzFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDbkQsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2FBQ25GO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUgsWUFBWTtRQUNWLE1BQU0sSUFBSSxHQUFHO1lBQ1gsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWTtZQUN2QyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZ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RSxVQUFVO2FBQ3BCLENBQUM7aUJBQ0QsU0FBUyxFQUFFO2lCQUNYLElBQUksQ0FBQyxDQUFDLFFBQWEsRUFBRSxFQUFFO2dCQUN0QixPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ2xDLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ2xCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztvQkFDekIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtpQkFDdkIsQ0FBQyxDQUFDLENBQUM7WUFDTixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7S0FBQTs7a0hBdkZVLG9CQUFvQjtzSEFBcEIsb0JBQW9CLGNBRm5CLE1BQU07NEZBRVAsb0JBQW9CO2tCQUhoQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4vZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGVybWlzc2lvblN0b3JlIH0gZnJvbSAnLi8uLi9wZXJtaXNzaW9ucy9wZXJtaXNzaW9uLnN0b3JlJztcclxuXHJcbmRlY2xhcmUgY29uc3QgbWljcm9zdHJhdGVneTogYW55O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTWljcm9zdHJhdGVneVNlcnZpY2Uge1xyXG4gIGRvc3NpZXJMaXN0OiBhbnk7XHJcbiAgUkJBQ09SRzogYW55O1xyXG4gIGVudmlyb25tZW50OiBhbnk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSxcclxuICAgIHByaXZhdGUgcGVybWlzc2lvblN0b3JlOiBQZXJtaXNzaW9uU3RvcmUsXHJcbiAgICBwcml2YXRlIF9zdG9yZXNlcnZpY2U6IERhdGFTdG9yZVNlcnZpY2UpIHtcclxuICAgICAgdGhpcy5fc3RvcmVzZXJ2aWNlLmN1cnJlbnRTdG9yZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzWydSQkFDT1JHJ10gJiYgcmVzWydSQkFDT1JHJ10gIT09ICcnKSB7XHJcbiAgICAgICAgICB0aGlzLlJCQUNPUkcgPSByZXNbJ1JCQUNPUkcnXTtcclxuICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnQgPSB0aGlzLlJCQUNPUkdbJ2Vudmlyb25tZW50J10gPyB0aGlzLlJCQUNPUkdbJ2Vudmlyb25tZW50J10gOiAnJztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICBnZXRBdXRoVG9rZW4oKSB7XHJcbiAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICB1c2VybmFtZTogdGhpcy5lbnZpcm9ubWVudC5tc3RyVXNlcm5hbWUsXHJcbiAgICAgIHBhc3N3b3JkOiB0aGlzLmVudmlyb25tZW50Lm1zdHJQYXNzd29yZCxcclxuICAgICAgbG9naW5Nb2RlOiAxXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuZW52aXJvbm1lbnQubXN0clVSTH0vYXBpL2F1dGgvbG9naW5gLCBib2R5LCB7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSdcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RG9zc2llcihwcm9qZWN0SWQ/OiBzdHJpbmcsIGRvc3NpZXJJZD86IHN0cmluZywgcGFnZU5vPzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBwZXJtaXNzaW9ucyA9IHRoaXMucGVybWlzc2lvblN0b3JlLnN0YXRlO1xyXG4gICAgY29uc3QgcHJvamVjdFVybCA9IGAke3RoaXMuZW52aXJvbm1lbnQubXN0clVSTH0vYXBwLyR7cHJvamVjdElkfWA7XHJcbiAgICBjb25zdCBkb3NzaWVyVXJsID0gYCR7cHJvamVjdFVybH0vJHtkb3NzaWVySWR9LyR7cGFnZU5vfWA7XHJcbiAgICAgbWljcm9zdHJhdGVneS5kb3NzaWVyXHJcbiAgICAgIC5jcmVhdGUoe1xyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9zc2llckNvbnRhaW5lcicpLFxyXG4gICAgICAgIHVybDogZG9zc2llclVybCxcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyOiB7XHJcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgZ290b0xpYnJhcnk6IHBlcm1pc3Npb25zPy5BTkFfTElCUkFSWSxcclxuICAgICAgICAgIHRpdGxlOiB0cnVlLFxyXG4gICAgICAgICAgdG9jOiB0cnVlLFxyXG4gICAgICAgICAgcmVzZXQ6IHRydWUsXHJcbiAgICAgICAgICByZXByb21wdDogdHJ1ZSxcclxuICAgICAgICAgIHNoYXJlOiB0cnVlLFxyXG4gICAgICAgICAgY29tbWVudDogdHJ1ZSxcclxuICAgICAgICAgIG5vdGlmaWNhdGlvbjogdHJ1ZSxcclxuICAgICAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgIG9wdGlvbnM6IHRydWUsXHJcbiAgICAgICAgICBzZWFyY2g6IHRydWUsXHJcbiAgICAgICAgICBib29rbWFyazogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW5hYmxlQ3VzdG9tQXV0aGVudGljYXRpb246IHRydWUsXHJcbiAgICAgICAgZW5hYmxlUmVzcG9uc2l2ZTogZmFsc2UsXHJcbiAgICAgICAgY29udGFpbmVyV2lkdGg6IDQwMCxcclxuICAgICAgICBjb250YWluZXJIZWlnaHQ6IDQwMCxcclxuICAgICAgICBjdXN0b21BdXRoZW50aWNhdGlvblR5cGU6IG1pY3Jvc3RyYXRlZ3kuZG9zc2llci5DdXN0b21BdXRoZW50aWNhdGlvblR5cGUuQVVUSF9UT0tFTixcclxuICAgICAgICBnZXRMb2dpblRva2VuOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZ2V0QXV0aFRva2VuKCkudG9Qcm9taXNlKCk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ3gtbXN0ci1hdXRodG9rZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoX2VycjogYW55KSA9PiB0aGlzLmFsZXJ0U2VydmljZS5lcnJvcihgRmFpbGVkIHRvIGNvbm5lY3QgJHt0aGlzLmVudmlyb25tZW50Lm1zdHJVUkx9YCkpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0TGlicmFyeURldGFpbHMoKSB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHRoaXMuZ2V0QXV0aFRva2VuKCkudG9Qcm9taXNlKCk7XHJcbiAgICBjb25zdCBhdXRodG9rZW4gPSB0b2tlbi5oZWFkZXJzLmdldCgneC1tc3RyLWF1dGh0b2tlbicpXHJcbiAgICBjb25zdCBoZWFkZXJJbmZvID0ge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAnWC1NU1RSLUF1dGhUb2tlbic6IGF1dGh0b2tlbiA/IGF1dGh0b2tlbjogJycsXHJcbiAgICAgICdYLU1TVFItUHJvamVjdElEJzogdGhpcy5lbnZpcm9ubWVudC5tc3RyUHJvamVjdElEXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0KGAke3RoaXMuZW52aXJvbm1lbnQubXN0clVSTH0vYXBpL2xpYnJhcnlgLCB7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlckluZm9cclxuICAgICAgfSlcclxuICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLm1hcCgobXN0cjogYW55KSA9PiAoe1xyXG4gICAgICAgICAgaWQ6IG1zdHIudGFyZ2V0LmlkLFxyXG4gICAgICAgICAgcHJvamVjdElkOiBtc3RyLnByb2plY3RJZCxcclxuICAgICAgICAgIG5hbWU6IG1zdHIudGFyZ2V0Lm5hbWVcclxuICAgICAgICB9KSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=