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
        projectId = 'DFC8E31E4EF39DE1113D1EACD5B30C9C';
        dossierId = '4802DE4C4C18F434C75BFA84EC8A5E4B';
        pageNo = 'K53--K46/edit';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljcm9zdHJhdGVneS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvbWljcm9zdHJhdGVneS9zcmMvbGliL0Bjb3JlL3NlcnZpY2UvbWljcm9zdHJhdGVneS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFXM0MsTUFBTSxPQUFPLG9CQUFvQjtJQUkvQixZQUFvQixJQUFnQixFQUMxQixZQUEwQixFQUMxQixlQUFnQyxFQUNoQyxhQUErQjtRQUhyQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQzFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDbkQsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2FBQ25GO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUgsWUFBWTtRQUNWLE1BQU0sSUFBSSxHQUFHO1lBQ1gsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWTtZQUN2QyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZO1lB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QUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxjQUFjLEVBQUU7Z0JBQzlDLGVBQWUsRUFBRSxJQUFJO2dCQUNyQixPQUFPLEVBQUUsVUFBVTthQUNwQixDQUFDO2lCQUNELFNBQVMsRUFBRTtpQkFDWCxJQUFJLENBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTtnQkFDdEIsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUNsQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUNsQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7b0JBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7aUJBQ3ZCLENBQUMsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7O2tIQTFGVSxvQkFBb0I7c0hBQXBCLG9CQUFvQixjQUZuQixNQUFNOzRGQUVQLG9CQUFvQjtrQkFIaEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uU3RvcmUgfSBmcm9tICcuLy4uL3Blcm1pc3Npb25zL3Blcm1pc3Npb24uc3RvcmUnO1xyXG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICcuL2FsZXJ0LnNlcnZpY2UnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBtaWNyb3N0cmF0ZWd5OiBhbnk7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNaWNyb3N0cmF0ZWd5U2VydmljZSB7XHJcbiAgZG9zc2llckxpc3Q6IGFueTtcclxuICBSQkFDT1JHOiBhbnk7XHJcbiAgZW52aXJvbm1lbnQ6IGFueTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwZXJtaXNzaW9uU3RvcmU6IFBlcm1pc3Npb25TdG9yZSxcclxuICAgIHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZSkge1xyXG4gICAgICB0aGlzLl9zdG9yZXNlcnZpY2UuY3VycmVudFN0b3JlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmIChyZXNbJ1JCQUNPUkcnXSAmJiByZXNbJ1JCQUNPUkcnXSAhPT0gJycpIHtcclxuICAgICAgICAgIHRoaXMuUkJBQ09SRyA9IHJlc1snUkJBQ09SRyddO1xyXG4gICAgICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IHRoaXMuUkJBQ09SR1snZW52aXJvbm1lbnQnXSA/IHRoaXMuUkJBQ09SR1snZW52aXJvbm1lbnQnXSA6ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gIGdldEF1dGhUb2tlbigpIHtcclxuICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgIHVzZXJuYW1lOiB0aGlzLmVudmlyb25tZW50Lm1zdHJVc2VybmFtZSxcclxuICAgICAgcGFzc3dvcmQ6IHRoaXMuZW52aXJvbm1lbnQubXN0clBhc3N3b3JkLFxyXG4gICAgICBsb2dpbk1vZGU6IDFcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy5lbnZpcm9ubWVudC5tc3RyVVJMfS9hcGkvYXV0aC9sb2dpbmAsIGJvZHksIHtcclxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXREb3NzaWVyKHByb2plY3RJZD86IHN0cmluZywgZG9zc2llcklkPzogc3RyaW5nLCBwYWdlTm8/OiBzdHJpbmcpIHtcclxuICAgIHByb2plY3RJZCA9ICdERkM4RTMxRTRFRjM5REUxMTEzRDFFQUNENUIzMEM5Qyc7XHJcbiAgICBkb3NzaWVySWQgPSAnNDgwMkRFNEM0QzE4RjQzNEM3NUJGQTg0RUM4QTVFNEInO1xyXG4gICAgcGFnZU5vID0gJ0s1My0tSzQ2L2VkaXQnO1xyXG4gICAgY29uc3QgcGVybWlzc2lvbnMgPSB0aGlzLnBlcm1pc3Npb25TdG9yZS5zdGF0ZTtcclxuICAgIGNvbnN0IHByb2plY3RVcmwgPSBgJHt0aGlzLmVudmlyb25tZW50Lm1zdHJVUkx9L2FwcC8ke3Byb2plY3RJZH1gO1xyXG4gICAgY29uc3QgZG9zc2llclVybCA9IGAke3Byb2plY3RVcmx9LyR7ZG9zc2llcklkfS8ke3BhZ2VOb31gO1xyXG4gICAgIG1pY3Jvc3RyYXRlZ3kuZG9zc2llclxyXG4gICAgICAuY3JlYXRlKHtcclxuICAgICAgICBwbGFjZWhvbGRlcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rvc3NpZXJDb250YWluZXInKSxcclxuICAgICAgICB1cmw6IGRvc3NpZXJVcmwsXHJcbiAgICAgICAgbmF2aWdhdGlvbkJhcjoge1xyXG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgIGdvdG9MaWJyYXJ5OiBwZXJtaXNzaW9ucz8uQU5BX0xJQlJBUlksXHJcbiAgICAgICAgICB0aXRsZTogdHJ1ZSxcclxuICAgICAgICAgIHRvYzogdHJ1ZSxcclxuICAgICAgICAgIHJlc2V0OiB0cnVlLFxyXG4gICAgICAgICAgcmVwcm9tcHQ6IHRydWUsXHJcbiAgICAgICAgICBzaGFyZTogdHJ1ZSxcclxuICAgICAgICAgIGNvbW1lbnQ6IHRydWUsXHJcbiAgICAgICAgICBub3RpZmljYXRpb246IHRydWUsXHJcbiAgICAgICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgICBvcHRpb25zOiB0cnVlLFxyXG4gICAgICAgICAgc2VhcmNoOiB0cnVlLFxyXG4gICAgICAgICAgYm9va21hcms6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVuYWJsZUN1c3RvbUF1dGhlbnRpY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgIGVuYWJsZVJlc3BvbnNpdmU6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRhaW5lcldpZHRoOiA0MDAsXHJcbiAgICAgICAgY29udGFpbmVySGVpZ2h0OiA0MDAsXHJcbiAgICAgICAgY3VzdG9tQXV0aGVudGljYXRpb25UeXBlOiBtaWNyb3N0cmF0ZWd5LmRvc3NpZXIuQ3VzdG9tQXV0aGVudGljYXRpb25UeXBlLkFVVEhfVE9LRU4sXHJcbiAgICAgICAgZ2V0TG9naW5Ub2tlbjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmdldEF1dGhUb2tlbigpLnRvUHJvbWlzZSgpO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCd4LW1zdHItYXV0aHRva2VuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKF9lcnI6IGFueSkgPT4gdGhpcy5hbGVydFNlcnZpY2UuZXJyb3IoYEZhaWxlZCB0byBjb25uZWN0ICR7dGhpcy5lbnZpcm9ubWVudC5tc3RyVVJMfWApKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldExpYnJhcnlEZXRhaWxzKCkge1xyXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0aGlzLmdldEF1dGhUb2tlbigpLnRvUHJvbWlzZSgpO1xyXG4gICAgY29uc3QgYXV0aHRva2VuID0gdG9rZW4uaGVhZGVycy5nZXQoJ3gtbXN0ci1hdXRodG9rZW4nKVxyXG4gICAgY29uc3QgaGVhZGVySW5mbyA9IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgJ1gtTVNUUi1BdXRoVG9rZW4nOiBhdXRodG9rZW4gPyBhdXRodG9rZW46ICcnLFxyXG4gICAgICAnWC1NU1RSLVByb2plY3RJRCc6IHRoaXMuZW52aXJvbm1lbnQubXN0clByb2plY3RJRFxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLmdldChgJHt0aGlzLmVudmlyb25tZW50Lm1zdHJVUkx9L2FwaS9saWJyYXJ5YCwge1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJJbmZvXHJcbiAgICAgIH0pXHJcbiAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5tYXAoKG1zdHI6IGFueSkgPT4gKHtcclxuICAgICAgICAgIGlkOiBtc3RyLnRhcmdldC5pZCxcclxuICAgICAgICAgIHByb2plY3RJZDogbXN0ci5wcm9qZWN0SWQsXHJcbiAgICAgICAgICBuYW1lOiBtc3RyLnRhcmdldC5uYW1lXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIl19