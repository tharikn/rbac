import { NgModule } from '@angular/core';
import { RbacUsersComponent } from './rbac-users.component';
import { PicsRbacUsersModule } from './pics-rbac-users/pics-rbac-users.module';
import { HttpClient } from '@angular/common/http';
import { ConfirmationService } from 'primeng/api';
import { PermissionStore } from './pics-rbac-users/@core/permissions/permission.store';
import { AlertService } from './pics-rbac-users/@core/service/alert.service';
import { DataStoreService } from './pics-rbac-users/@core/service/data-store.service';
import { UserOrgService } from './pics-rbac-users/@core/service/user-org.service';
import * as i0 from "@angular/core";
export class RbacUsersModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacUsersModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: RbacUsersModule, declarations: [RbacUsersComponent], imports: [PicsRbacUsersModule], exports: [RbacUsersComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacUsersModule, providers: [UserOrgService, HttpClient, AlertService, ConfirmationService, PermissionStore, DataStoreService], imports: [PicsRbacUsersModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacUsersModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        RbacUsersComponent
                    ],
                    imports: [
                        PicsRbacUsersModule
                    ],
                    exports: [
                        RbacUsersComponent
                    ],
                    providers: [UserOrgService, HttpClient, AlertService, ConfirmationService, PermissionStore, DataStoreService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy11c2Vycy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvcmJhYy11c2Vycy9zcmMvbGliL3JiYWMtdXNlcnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDdkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQzs7QUFnQmxGLE1BQU0sT0FBTyxlQUFlO3dHQUFmLGVBQWU7eUdBQWYsZUFBZSxpQkFWeEIsa0JBQWtCLGFBR2xCLG1CQUFtQixhQUduQixrQkFBa0I7eUdBSVQsZUFBZSxhQUZmLENBQUMsY0FBYyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixDQUFDLFlBTDNHLG1CQUFtQjs7NEZBT1YsZUFBZTtrQkFaM0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osa0JBQWtCO3FCQUNuQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asa0JBQWtCO3FCQUNuQjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxjQUFjLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7aUJBQzlHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmJhY1VzZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9yYmFjLXVzZXJzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBpY3NSYmFjVXNlcnNNb2R1bGUgfSBmcm9tICcuL3BpY3MtcmJhYy11c2Vycy9waWNzLXJiYWMtdXNlcnMubW9kdWxlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcclxuaW1wb3J0IHsgUGVybWlzc2lvblN0b3JlIH0gZnJvbSAnLi9waWNzLXJiYWMtdXNlcnMvQGNvcmUvcGVybWlzc2lvbnMvcGVybWlzc2lvbi5zdG9yZSc7XHJcbmltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gJy4vcGljcy1yYmFjLXVzZXJzL0Bjb3JlL3NlcnZpY2UvYWxlcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuL3BpY3MtcmJhYy11c2Vycy9AY29yZS9zZXJ2aWNlL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJPcmdTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLXJiYWMtdXNlcnMvQGNvcmUvc2VydmljZS91c2VyLW9yZy5zZXJ2aWNlJztcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFJiYWNVc2Vyc0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgUGljc1JiYWNVc2Vyc01vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgUmJhY1VzZXJzQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtVc2VyT3JnU2VydmljZSwgSHR0cENsaWVudCwgQWxlcnRTZXJ2aWNlLCBDb25maXJtYXRpb25TZXJ2aWNlLCBQZXJtaXNzaW9uU3RvcmUsIERhdGFTdG9yZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYmFjVXNlcnNNb2R1bGUgeyB9XHJcbiJdfQ==