import { Injectable } from '@angular/core';
import { AttachmentConfig, PolicyGroupConfig, RoleConfig, UserConfig } from '../urls/users-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./data-store.service";
export class UserOrgService {
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    getAllUserList(key) {
        return this.httpService.get(`${UserConfig.EndPoint.User.getAllUserList}/${key}`);
    }
    getAllUserOrgList(orgid) {
        return this.httpService.get(UserConfig.EndPoint.User.getAllUserOrgList + orgid);
    }
    saveUser(data) {
        return this.httpService.post(UserConfig.EndPoint.User.createUser, data);
    }
    updateUser(data, userid) {
        return this.httpService.put(`${UserConfig.EndPoint.User.getAllUserList}/${userid}`, data);
    }
    deleteUser(id) {
        return this.httpService.delete(`${UserConfig.EndPoint.User.getAllUserList}/${id}`);
    }
    activateUser(data) {
        return this.httpService.post(UserConfig.EndPoint.User.activateUser, data);
    }
    addProviderUser(data) {
        return this.httpService.post(UserConfig.EndPoint.Provider.addProviderUser, data);
    }
    addUserRole(data) {
        return this.httpService.post(UserConfig.EndPoint.User.userRole, data);
    }
    uploadKey(objparams) {
        return this.httpService.post(AttachmentConfig.EndPoint.Attachments.UploadKey, objparams);
    }
    getOrgPolicyGroupList(orgid) {
        return this.httpService.get(PolicyGroupConfig.EndPoint.policyGroup.getOrgPolicyGroups.replace('{organizationid}', String(orgid)));
    }
    getAllUserRole(id) {
        return this.httpService.get(RoleConfig.EndPoint.role.getAllOrgRole.replace('{orgid}', String(id)));
    }
    getRoleById(roleid) {
        return this.httpService.get(`${RoleConfig.EndPoint.role.getAllUserRole}/${roleid}`);
    }
}
UserOrgService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserOrgService, deps: [{ token: i1.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
UserOrgService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserOrgService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserOrgService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9yYmFjLXVzZXJzL3NyYy9saWIvcGljcy1yYmFjLXVzZXJzL0Bjb3JlL3NlcnZpY2UvdXNlci1vcmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQU92RyxNQUFNLE9BQU8sY0FBYztJQUV6QixZQUFvQixhQUErQjtRQUEvQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDckQsSUFBRyxHQUFHLEVBQUM7Z0JBQ0wsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7YUFDdEM7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxjQUFjLENBQUMsR0FBWTtRQUN6QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUNELGlCQUFpQixDQUFDLEtBQVU7UUFDMUIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBQ0QsUUFBUSxDQUFDLElBQVM7UUFDaEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFTLEVBQUUsTUFBYztRQUNsQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLE1BQU0sRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFDRCxVQUFVLENBQUMsRUFBVztRQUNwQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUNELFlBQVksQ0FBQyxJQUFTO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFDRCxlQUFlLENBQUMsSUFBUztRQUN2QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBQ0QsV0FBVyxDQUFDLElBQVM7UUFDbkIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUNELFNBQVMsQ0FBQyxTQUFjO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUNELHFCQUFxQixDQUFDLEtBQVU7UUFDOUIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FDekIsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ3JHLENBQUM7SUFDSixDQUFDO0lBQ0QsY0FBYyxDQUFDLEVBQVE7UUFDckIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFDRCxXQUFXLENBQUMsTUFBYztRQUN4QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdEYsQ0FBQzs7NEdBL0NVLGNBQWM7Z0hBQWQsY0FBYyxjQUZiLE1BQU07NEZBRVAsY0FBYztrQkFIMUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQXR0YWNobWVudENvbmZpZywgUG9saWN5R3JvdXBDb25maWcsIFJvbGVDb25maWcsIFVzZXJDb25maWcgfSBmcm9tICcuLi91cmxzL3VzZXJzLXVybC5jb25maWcnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJPcmdTZXJ2aWNlIHtcclxuICBodHRwU2VydmljZTphbnk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RvcmVzZXJ2aWNlOiBEYXRhU3RvcmVTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLl9zdG9yZXNlcnZpY2UuY3VycmVudFN0b3JlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYocmVzKXtcclxuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlID0gcmVzWydIVFRQU0VSVklDRSddXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRBbGxVc2VyTGlzdChrZXk/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KGAke1VzZXJDb25maWcuRW5kUG9pbnQuVXNlci5nZXRBbGxVc2VyTGlzdH0vJHtrZXl9YCk7XHJcbiAgfVxyXG4gIGdldEFsbFVzZXJPcmdMaXN0KG9yZ2lkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChVc2VyQ29uZmlnLkVuZFBvaW50LlVzZXIuZ2V0QWxsVXNlck9yZ0xpc3QgKyBvcmdpZCk7XHJcbiAgfVxyXG4gIHNhdmVVc2VyKGRhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChVc2VyQ29uZmlnLkVuZFBvaW50LlVzZXIuY3JlYXRlVXNlciwgZGF0YSk7XHJcbiAgfVxyXG4gIHVwZGF0ZVVzZXIoZGF0YTogYW55LCB1c2VyaWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucHV0KGAke1VzZXJDb25maWcuRW5kUG9pbnQuVXNlci5nZXRBbGxVc2VyTGlzdH0vJHt1c2VyaWR9YCwgZGF0YSk7XHJcbiAgfVxyXG4gIGRlbGV0ZVVzZXIoaWQ/OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmRlbGV0ZShgJHtVc2VyQ29uZmlnLkVuZFBvaW50LlVzZXIuZ2V0QWxsVXNlckxpc3R9LyR7aWR9YCk7XHJcbiAgfVxyXG4gIGFjdGl2YXRlVXNlcihkYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoVXNlckNvbmZpZy5FbmRQb2ludC5Vc2VyLmFjdGl2YXRlVXNlciwgZGF0YSk7XHJcbiAgfVxyXG4gIGFkZFByb3ZpZGVyVXNlcihkYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoVXNlckNvbmZpZy5FbmRQb2ludC5Qcm92aWRlci5hZGRQcm92aWRlclVzZXIsIGRhdGEpO1xyXG4gIH1cclxuICBhZGRVc2VyUm9sZShkYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoVXNlckNvbmZpZy5FbmRQb2ludC5Vc2VyLnVzZXJSb2xlLCBkYXRhKTtcclxuICB9XHJcbiAgdXBsb2FkS2V5KG9ianBhcmFtczogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KEF0dGFjaG1lbnRDb25maWcuRW5kUG9pbnQuQXR0YWNobWVudHMuVXBsb2FkS2V5LCBvYmpwYXJhbXMpO1xyXG4gIH1cclxuICBnZXRPcmdQb2xpY3lHcm91cExpc3Qob3JnaWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KFxyXG4gICAgICBQb2xpY3lHcm91cENvbmZpZy5FbmRQb2ludC5wb2xpY3lHcm91cC5nZXRPcmdQb2xpY3lHcm91cHMucmVwbGFjZSgne29yZ2FuaXphdGlvbmlkfScsIFN0cmluZyhvcmdpZCkpXHJcbiAgICApO1xyXG4gIH1cclxuICBnZXRBbGxVc2VyUm9sZShpZD86IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KFJvbGVDb25maWcuRW5kUG9pbnQucm9sZS5nZXRBbGxPcmdSb2xlLnJlcGxhY2UoJ3tvcmdpZH0nLCBTdHJpbmcoaWQpKSk7XHJcbiAgfVxyXG4gIGdldFJvbGVCeUlkKHJvbGVpZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoYCR7Um9sZUNvbmZpZy5FbmRQb2ludC5yb2xlLmdldEFsbFVzZXJSb2xlfS8ke3JvbGVpZH1gKTtcclxuICB9XHJcbn1cclxuIl19