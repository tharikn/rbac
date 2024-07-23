import { NgModule } from '@angular/core';
import { RbacOrgComponent } from './rbac-org.component';
import { HttpClient } from '@angular/common/http';
import { ConfirmationService } from 'primeng/api';
import { PermissionStore } from './pics-rbac-org/@core/permissions/permission.store';
import { AlertService } from './pics-rbac-org/@core/service/alert.service';
import { DataStoreService } from './pics-rbac-org/@core/service/data-store.service';
import { HttpService } from './pics-rbac-org/@core/service/http.service';
import { ManagementGroupsService } from './pics-rbac-org/@core/service/management-groups.service';
import { PicsRbacOrgModule } from './pics-rbac-org/pics-rbac-org.module';
import * as i0 from "@angular/core";
export class RbacOrgModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacOrgModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: RbacOrgModule, declarations: [RbacOrgComponent], imports: [PicsRbacOrgModule], exports: [RbacOrgComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacOrgModule, providers: [ManagementGroupsService, HttpClient, HttpService, AlertService, ConfirmationService, PermissionStore, DataStoreService], imports: [PicsRbacOrgModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacOrgModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        RbacOrgComponent
                    ],
                    imports: [
                        PicsRbacOrgModule
                    ],
                    exports: [
                        RbacOrgComponent
                    ],
                    providers: [ManagementGroupsService, HttpClient, HttpService, AlertService, ConfirmationService, PermissionStore, DataStoreService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy1vcmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3JiYWMtb3JnL3NyYy9saWIvcmJhYy1vcmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDckYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7QUFpQnpFLE1BQU0sT0FBTyxhQUFhO3dHQUFiLGFBQWE7eUdBQWIsYUFBYSxpQkFWdEIsZ0JBQWdCLGFBR2hCLGlCQUFpQixhQUdqQixnQkFBZ0I7eUdBSVAsYUFBYSxhQUZiLENBQUMsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixDQUFDLFlBTGpJLGlCQUFpQjs7NEZBT1IsYUFBYTtrQkFaekIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsaUJBQWlCO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCO3FCQUNqQjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7aUJBQ3BJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmJhY09yZ0NvbXBvbmVudCB9IGZyb20gJy4vcmJhYy1vcmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcclxuaW1wb3J0IHsgUGVybWlzc2lvblN0b3JlIH0gZnJvbSAnLi9waWNzLXJiYWMtb3JnL0Bjb3JlL3Blcm1pc3Npb25zL3Blcm1pc3Npb24uc3RvcmUnO1xyXG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICcuL3BpY3MtcmJhYy1vcmcvQGNvcmUvc2VydmljZS9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4vcGljcy1yYmFjLW9yZy9AY29yZS9zZXJ2aWNlL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLXJiYWMtb3JnL0Bjb3JlL3NlcnZpY2UvaHR0cC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFuYWdlbWVudEdyb3Vwc1NlcnZpY2UgfSBmcm9tICcuL3BpY3MtcmJhYy1vcmcvQGNvcmUvc2VydmljZS9tYW5hZ2VtZW50LWdyb3Vwcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGljc1JiYWNPcmdNb2R1bGUgfSBmcm9tICcuL3BpY3MtcmJhYy1vcmcvcGljcy1yYmFjLW9yZy5tb2R1bGUnO1xyXG5cclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFJiYWNPcmdDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIFBpY3NSYmFjT3JnTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBSYmFjT3JnQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtNYW5hZ2VtZW50R3JvdXBzU2VydmljZSwgSHR0cENsaWVudCwgSHR0cFNlcnZpY2UsIEFsZXJ0U2VydmljZSwgQ29uZmlybWF0aW9uU2VydmljZSwgUGVybWlzc2lvblN0b3JlLCBEYXRhU3RvcmVTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmJhY09yZ01vZHVsZSB7IH1cclxuIl19