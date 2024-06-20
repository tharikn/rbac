import { Injectable } from '@angular/core';
import { ManagementGroupsURL } from '../urls/management-groups-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./http.service";
export class ManagementGroupsService {
    httpService;
    constructor(httpService) {
        this.httpService = httpService;
    }
    getOrganizations(organizationid) {
        return this.httpService.get(ManagementGroupsURL.EndPoints.org.getOrganizationByid.replace('{id}', organizationid));
    }
    createOrganization(organization) {
        return this.httpService.post(ManagementGroupsURL.EndPoints.org.createOrganization, organization);
    }
    updateOrganization(organization) {
        return this.httpService.put(ManagementGroupsURL.EndPoints.org.updateOrganization.replace('{id}', organization.id), organization);
    }
    deleteOrganization(organizationid) {
        return this.httpService.delete(`/org/management-group/organization/${organizationid}`);
    }
    getManagementGroups(organizationid, parentid) {
        return this.httpService.get(`/org/organization/group/${organizationid}/${parentid}`);
    }
    getManagementGroupTree(_organizationid) {
        return this.httpService.get('/org/management-group/organization/tree');
    }
    createManagementGroup(managementGroup) {
        return this.httpService.post('/org/organization/group/create', managementGroup);
    }
    updateManagementGroup(managementGroup) {
        return this.httpService.put(`/org/organization/group/${managementGroup.id}`, managementGroup);
    }
    deleteManagementGroup(managementGroupId) {
        return this.httpService.delete(`/org/organization/group/${managementGroupId}`);
    }
    getAllOrganizations() {
        return this.httpService.get(ManagementGroupsURL.EndPoints.org.getOrganizations);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ManagementGroupsService, deps: [{ token: i1.HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ManagementGroupsService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ManagementGroupsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC1ncm91cHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9yYmFjLW9yZy9zcmMvbGliL3BpY3MtcmJhYy1vcmcvQGNvcmUvc2VydmljZS9tYW5hZ2VtZW50LWdyb3Vwcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7OztBQUszRSxNQUFNLE9BQU8sdUJBQXVCO0lBQ2Q7SUFBcEIsWUFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDO0lBRWhELGdCQUFnQixDQUFDLGNBQW1CO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDckgsQ0FBQztJQUVELGtCQUFrQixDQUFDLFlBQWlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBRUQsa0JBQWtCLENBQUMsWUFBaUI7UUFDbEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FDekIsbUJBQW1CLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFDckYsWUFBWSxDQUNiLENBQUM7SUFDSixDQUFDO0lBRUQsa0JBQWtCLENBQUMsY0FBc0I7UUFDdkMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxzQ0FBc0MsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRUQsbUJBQW1CLENBQUMsY0FBc0IsRUFBRSxRQUFnQjtRQUMxRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLDJCQUEyQixjQUFjLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRUQsc0JBQXNCLENBQUMsZUFBb0I7UUFDekMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxlQUFvQjtRQUN4QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxlQUFvQjtRQUN4QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLDJCQUEyQixlQUFlLENBQUMsRUFBRSxFQUFFLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUVELHFCQUFxQixDQUFDLGlCQUF5QjtRQUM3QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLDJCQUEyQixpQkFBaUIsRUFBRSxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVELG1CQUFtQjtRQUNqQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsRixDQUFDO3dHQTVDVSx1QkFBdUI7NEdBQXZCLHVCQUF1QixjQUZ0QixNQUFNOzs0RkFFUCx1QkFBdUI7a0JBSG5DLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFuYWdlbWVudEdyb3Vwc1VSTCB9IGZyb20gJy4uL3VybHMvbWFuYWdlbWVudC1ncm91cHMtdXJsLmNvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYW5hZ2VtZW50R3JvdXBzU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwU2VydmljZTogSHR0cFNlcnZpY2UpIHt9XHJcblxyXG4gIGdldE9yZ2FuaXphdGlvbnMob3JnYW5pemF0aW9uaWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KE1hbmFnZW1lbnRHcm91cHNVUkwuRW5kUG9pbnRzLm9yZy5nZXRPcmdhbml6YXRpb25CeWlkLnJlcGxhY2UoJ3tpZH0nLCBvcmdhbml6YXRpb25pZCkpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlT3JnYW5pemF0aW9uKG9yZ2FuaXphdGlvbjogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KE1hbmFnZW1lbnRHcm91cHNVUkwuRW5kUG9pbnRzLm9yZy5jcmVhdGVPcmdhbml6YXRpb24sIG9yZ2FuaXphdGlvbik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVPcmdhbml6YXRpb24ob3JnYW5pemF0aW9uOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnB1dChcclxuICAgICAgTWFuYWdlbWVudEdyb3Vwc1VSTC5FbmRQb2ludHMub3JnLnVwZGF0ZU9yZ2FuaXphdGlvbi5yZXBsYWNlKCd7aWR9Jywgb3JnYW5pemF0aW9uLmlkKSxcclxuICAgICAgb3JnYW5pemF0aW9uXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlT3JnYW5pemF0aW9uKG9yZ2FuaXphdGlvbmlkOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmRlbGV0ZShgL29yZy9tYW5hZ2VtZW50LWdyb3VwL29yZ2FuaXphdGlvbi8ke29yZ2FuaXphdGlvbmlkfWApO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWFuYWdlbWVudEdyb3Vwcyhvcmdhbml6YXRpb25pZDogbnVtYmVyLCBwYXJlbnRpZDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoYC9vcmcvb3JnYW5pemF0aW9uL2dyb3VwLyR7b3JnYW5pemF0aW9uaWR9LyR7cGFyZW50aWR9YCk7XHJcbiAgfVxyXG5cclxuICBnZXRNYW5hZ2VtZW50R3JvdXBUcmVlKF9vcmdhbml6YXRpb25pZDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoJy9vcmcvbWFuYWdlbWVudC1ncm91cC9vcmdhbml6YXRpb24vdHJlZScpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlTWFuYWdlbWVudEdyb3VwKG1hbmFnZW1lbnRHcm91cDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KCcvb3JnL29yZ2FuaXphdGlvbi9ncm91cC9jcmVhdGUnLCBtYW5hZ2VtZW50R3JvdXApO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTWFuYWdlbWVudEdyb3VwKG1hbmFnZW1lbnRHcm91cDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wdXQoYC9vcmcvb3JnYW5pemF0aW9uL2dyb3VwLyR7bWFuYWdlbWVudEdyb3VwLmlkfWAsIG1hbmFnZW1lbnRHcm91cCk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVNYW5hZ2VtZW50R3JvdXAobWFuYWdlbWVudEdyb3VwSWQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZGVsZXRlKGAvb3JnL29yZ2FuaXphdGlvbi9ncm91cC8ke21hbmFnZW1lbnRHcm91cElkfWApO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsT3JnYW5pemF0aW9ucygpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChNYW5hZ2VtZW50R3JvdXBzVVJMLkVuZFBvaW50cy5vcmcuZ2V0T3JnYW5pemF0aW9ucyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==