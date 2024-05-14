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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljcm9zdHJhdGVneS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2xvZ2luL3NyYy9saWIvcGljcy1sb2dpbi9AY29yZS9zZXJ2aWNlL21pY3Jvc3RyYXRlZ3kuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBVTNDLE1BQU0sT0FBTyxvQkFBb0I7SUFJL0IsWUFBb0IsSUFBZ0IsRUFDMUIsWUFBMEIsRUFDMUIsZUFBZ0MsRUFDaEMsYUFBK0I7UUFIckIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ25ELElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzthQUNuRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVILFlBQVk7UUFDVixNQUFNLElBQUksR0FBRztZQUNYLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVk7WUFDdkMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsWUFB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VUFBVTthQUNwQixDQUFDO2lCQUNELFNBQVMsRUFBRTtpQkFDWCxJQUFJLENBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTtnQkFDdEIsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUNsQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUNsQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7b0JBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7aUJBQ3ZCLENBQUMsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7O2tIQXZGVSxvQkFBb0I7c0hBQXBCLG9CQUFvQixjQUZuQixNQUFNOzRGQUVQLG9CQUFvQjtrQkFIaEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gJy4vYWxlcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IFBlcm1pc3Npb25TdG9yZSB9IGZyb20gJy4vLi4vcGVybWlzc2lvbnMvcGVybWlzc2lvbi5zdG9yZSc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IG1pY3Jvc3RyYXRlZ3k6IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1pY3Jvc3RyYXRlZ3lTZXJ2aWNlIHtcclxuICBkb3NzaWVyTGlzdDogYW55O1xyXG4gIFJCQUNPUkc6IGFueTtcclxuICBlbnZpcm9ubWVudDogYW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgIHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBlcm1pc3Npb25TdG9yZTogUGVybWlzc2lvblN0b3JlLFxyXG4gICAgcHJpdmF0ZSBfc3RvcmVzZXJ2aWNlOiBEYXRhU3RvcmVTZXJ2aWNlKSB7XHJcbiAgICAgIHRoaXMuX3N0b3Jlc2VydmljZS5jdXJyZW50U3RvcmUuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc1snUkJBQ09SRyddICYmIHJlc1snUkJBQ09SRyddICE9PSAnJykge1xyXG4gICAgICAgICAgdGhpcy5SQkFDT1JHID0gcmVzWydSQkFDT1JHJ107XHJcbiAgICAgICAgICB0aGlzLmVudmlyb25tZW50ID0gdGhpcy5SQkFDT1JHWydlbnZpcm9ubWVudCddID8gdGhpcy5SQkFDT1JHWydlbnZpcm9ubWVudCddIDogJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgZ2V0QXV0aFRva2VuKCkge1xyXG4gICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgdXNlcm5hbWU6IHRoaXMuZW52aXJvbm1lbnQubXN0clVzZXJuYW1lLFxyXG4gICAgICBwYXNzd29yZDogdGhpcy5lbnZpcm9ubWVudC5tc3RyUGFzc3dvcmQsXHJcbiAgICAgIGxvZ2luTW9kZTogMVxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmVudmlyb25tZW50Lm1zdHJVUkx9L2FwaS9hdXRoL2xvZ2luYCwgYm9keSwge1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldERvc3NpZXIocHJvamVjdElkPzogc3RyaW5nLCBkb3NzaWVySWQ/OiBzdHJpbmcsIHBhZ2VObz86IHN0cmluZykge1xyXG4gICAgY29uc3QgcGVybWlzc2lvbnMgPSB0aGlzLnBlcm1pc3Npb25TdG9yZS5zdGF0ZTtcclxuICAgIGNvbnN0IHByb2plY3RVcmwgPSBgJHt0aGlzLmVudmlyb25tZW50Lm1zdHJVUkx9L2FwcC8ke3Byb2plY3RJZH1gO1xyXG4gICAgY29uc3QgZG9zc2llclVybCA9IGAke3Byb2plY3RVcmx9LyR7ZG9zc2llcklkfS8ke3BhZ2VOb31gO1xyXG4gICAgIG1pY3Jvc3RyYXRlZ3kuZG9zc2llclxyXG4gICAgICAuY3JlYXRlKHtcclxuICAgICAgICBwbGFjZWhvbGRlcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rvc3NpZXJDb250YWluZXInKSxcclxuICAgICAgICB1cmw6IGRvc3NpZXJVcmwsXHJcbiAgICAgICAgbmF2aWdhdGlvbkJhcjoge1xyXG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgIGdvdG9MaWJyYXJ5OiBwZXJtaXNzaW9ucz8uQU5BX0xJQlJBUlksXHJcbiAgICAgICAgICB0aXRsZTogdHJ1ZSxcclxuICAgICAgICAgIHRvYzogdHJ1ZSxcclxuICAgICAgICAgIHJlc2V0OiB0cnVlLFxyXG4gICAgICAgICAgcmVwcm9tcHQ6IHRydWUsXHJcbiAgICAgICAgICBzaGFyZTogdHJ1ZSxcclxuICAgICAgICAgIGNvbW1lbnQ6IHRydWUsXHJcbiAgICAgICAgICBub3RpZmljYXRpb246IHRydWUsXHJcbiAgICAgICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgICBvcHRpb25zOiB0cnVlLFxyXG4gICAgICAgICAgc2VhcmNoOiB0cnVlLFxyXG4gICAgICAgICAgYm9va21hcms6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVuYWJsZUN1c3RvbUF1dGhlbnRpY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgIGVuYWJsZVJlc3BvbnNpdmU6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRhaW5lcldpZHRoOiA0MDAsXHJcbiAgICAgICAgY29udGFpbmVySGVpZ2h0OiA0MDAsXHJcbiAgICAgICAgY3VzdG9tQXV0aGVudGljYXRpb25UeXBlOiBtaWNyb3N0cmF0ZWd5LmRvc3NpZXIuQ3VzdG9tQXV0aGVudGljYXRpb25UeXBlLkFVVEhfVE9LRU4sXHJcbiAgICAgICAgZ2V0TG9naW5Ub2tlbjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmdldEF1dGhUb2tlbigpLnRvUHJvbWlzZSgpO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCd4LW1zdHItYXV0aHRva2VuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKF9lcnI6IGFueSkgPT4gdGhpcy5hbGVydFNlcnZpY2UuZXJyb3IoYEZhaWxlZCB0byBjb25uZWN0ICR7dGhpcy5lbnZpcm9ubWVudC5tc3RyVVJMfWApKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldExpYnJhcnlEZXRhaWxzKCkge1xyXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0aGlzLmdldEF1dGhUb2tlbigpLnRvUHJvbWlzZSgpO1xyXG4gICAgY29uc3QgYXV0aHRva2VuID0gdG9rZW4uaGVhZGVycy5nZXQoJ3gtbXN0ci1hdXRodG9rZW4nKVxyXG4gICAgY29uc3QgaGVhZGVySW5mbyA9IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgJ1gtTVNUUi1BdXRoVG9rZW4nOiBhdXRodG9rZW4gPyBhdXRodG9rZW46ICcnLFxyXG4gICAgICAnWC1NU1RSLVByb2plY3RJRCc6IHRoaXMuZW52aXJvbm1lbnQubXN0clByb2plY3RJRFxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLmdldChgJHt0aGlzLmVudmlyb25tZW50Lm1zdHJVUkx9L2FwaS9saWJyYXJ5YCwge1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJJbmZvXHJcbiAgICAgIH0pXHJcbiAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5tYXAoKG1zdHI6IGFueSkgPT4gKHtcclxuICAgICAgICAgIGlkOiBtc3RyLnRhcmdldC5pZCxcclxuICAgICAgICAgIHByb2plY3RJZDogbXN0ci5wcm9qZWN0SWQsXHJcbiAgICAgICAgICBuYW1lOiBtc3RyLnRhcmdldC5uYW1lXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIl19