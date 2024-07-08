import { Injectable } from '@angular/core';
import { ManagementGroupsURL } from '../urls/management-groups-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./data-store.service";
export class ManagementGroupsService {
    _storeservice;
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ManagementGroupsService, deps: [{ token: i1.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ManagementGroupsService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ManagementGroupsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC1ncm91cHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9yYmFjLW9yZy9zcmMvbGliL3BpY3MtcmJhYy1vcmcvQGNvcmUvc2VydmljZS9tYW5hZ2VtZW50LWdyb3Vwcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7OztBQU0zRSxNQUFNLE9BQU8sdUJBQXVCO0lBR2Q7SUFEcEIsV0FBVyxDQUFLO0lBQ2hCLFlBQW9CLGFBQStCO1FBQS9CLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNyRCxJQUFHLEdBQUcsRUFBQztnQkFDTCxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTthQUN0QztRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGdCQUFnQixDQUFDLGNBQW1CO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDckgsQ0FBQztJQUVELGtCQUFrQixDQUFDLFlBQWlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBRUQsa0JBQWtCLENBQUMsWUFBaUI7UUFDbEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FDekIsbUJBQW1CLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFDckYsWUFBWSxDQUNiLENBQUM7SUFDSixDQUFDO0lBRUQsa0JBQWtCLENBQUMsY0FBc0I7UUFDdkMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxzQ0FBc0MsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRUQsbUJBQW1CLENBQUMsY0FBc0IsRUFBRSxRQUFnQjtRQUMxRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLDJCQUEyQixjQUFjLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRUQsc0JBQXNCLENBQUMsZUFBb0I7UUFDekMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxlQUFvQjtRQUN4QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxlQUFvQjtRQUN4QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLDJCQUEyQixlQUFlLENBQUMsRUFBRSxFQUFFLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUVELHFCQUFxQixDQUFDLGlCQUF5QjtRQUM3QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLDJCQUEyQixpQkFBaUIsRUFBRSxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVELG1CQUFtQjtRQUNqQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsRixDQUFDO3dHQXBEVSx1QkFBdUI7NEdBQXZCLHVCQUF1QixjQUZ0QixNQUFNOzs0RkFFUCx1QkFBdUI7a0JBSG5DLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYW5hZ2VtZW50R3JvdXBzVVJMIH0gZnJvbSAnLi4vdXJscy9tYW5hZ2VtZW50LWdyb3Vwcy11cmwuY29uZmlnJztcclxuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4vZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hbmFnZW1lbnRHcm91cHNTZXJ2aWNlIHtcclxuXHJcbiAgaHR0cFNlcnZpY2U6YW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZSkge1xyXG4gICAgdGhpcy5fc3RvcmVzZXJ2aWNlLmN1cnJlbnRTdG9yZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgdGhpcy5odHRwU2VydmljZSA9IHJlc1snSFRUUFNFUlZJQ0UnXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0T3JnYW5pemF0aW9ucyhvcmdhbml6YXRpb25pZDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoTWFuYWdlbWVudEdyb3Vwc1VSTC5FbmRQb2ludHMub3JnLmdldE9yZ2FuaXphdGlvbkJ5aWQucmVwbGFjZSgne2lkfScsIG9yZ2FuaXphdGlvbmlkKSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVPcmdhbml6YXRpb24ob3JnYW5pemF0aW9uOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoTWFuYWdlbWVudEdyb3Vwc1VSTC5FbmRQb2ludHMub3JnLmNyZWF0ZU9yZ2FuaXphdGlvbiwgb3JnYW5pemF0aW9uKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZU9yZ2FuaXphdGlvbihvcmdhbml6YXRpb246IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucHV0KFxyXG4gICAgICBNYW5hZ2VtZW50R3JvdXBzVVJMLkVuZFBvaW50cy5vcmcudXBkYXRlT3JnYW5pemF0aW9uLnJlcGxhY2UoJ3tpZH0nLCBvcmdhbml6YXRpb24uaWQpLFxyXG4gICAgICBvcmdhbml6YXRpb25cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVPcmdhbml6YXRpb24ob3JnYW5pemF0aW9uaWQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZGVsZXRlKGAvb3JnL21hbmFnZW1lbnQtZ3JvdXAvb3JnYW5pemF0aW9uLyR7b3JnYW5pemF0aW9uaWR9YCk7XHJcbiAgfVxyXG5cclxuICBnZXRNYW5hZ2VtZW50R3JvdXBzKG9yZ2FuaXphdGlvbmlkOiBudW1iZXIsIHBhcmVudGlkOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChgL29yZy9vcmdhbml6YXRpb24vZ3JvdXAvJHtvcmdhbml6YXRpb25pZH0vJHtwYXJlbnRpZH1gKTtcclxuICB9XHJcblxyXG4gIGdldE1hbmFnZW1lbnRHcm91cFRyZWUoX29yZ2FuaXphdGlvbmlkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldCgnL29yZy9tYW5hZ2VtZW50LWdyb3VwL29yZ2FuaXphdGlvbi90cmVlJyk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVNYW5hZ2VtZW50R3JvdXAobWFuYWdlbWVudEdyb3VwOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoJy9vcmcvb3JnYW5pemF0aW9uL2dyb3VwL2NyZWF0ZScsIG1hbmFnZW1lbnRHcm91cCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVNYW5hZ2VtZW50R3JvdXAobWFuYWdlbWVudEdyb3VwOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnB1dChgL29yZy9vcmdhbml6YXRpb24vZ3JvdXAvJHttYW5hZ2VtZW50R3JvdXAuaWR9YCwgbWFuYWdlbWVudEdyb3VwKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZU1hbmFnZW1lbnRHcm91cChtYW5hZ2VtZW50R3JvdXBJZDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5kZWxldGUoYC9vcmcvb3JnYW5pemF0aW9uL2dyb3VwLyR7bWFuYWdlbWVudEdyb3VwSWR9YCk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxPcmdhbml6YXRpb25zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KE1hbmFnZW1lbnRHcm91cHNVUkwuRW5kUG9pbnRzLm9yZy5nZXRPcmdhbml6YXRpb25zKTtcclxuICB9XHJcbn1cclxuIl19