import { NgModule } from '@angular/core';
import { RbacUsersComponent } from './rbac-users.component';
import { PicsRbacUsersModule } from './pics-rbac-users/pics-rbac-users.module';
import { HttpClient } from '@angular/common/http';
import { ConfirmationService } from 'primeng/api';
import { PermissionStore } from './pics-rbac-users/@core/permissions/permission.store';
import { AlertService } from './pics-rbac-users/@core/service/alert.service';
import { DataStoreService } from './pics-rbac-users/@core/service/data-store.service';
import { HttpService } from './pics-rbac-users/@core/service/http.service';
import { UserOrgService } from './pics-rbac-users/@core/service/user-org.service';
import * as i0 from "@angular/core";
export class RbacUsersModule {
}
RbacUsersModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacUsersModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RbacUsersModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacUsersModule, declarations: [RbacUsersComponent], imports: [PicsRbacUsersModule], exports: [RbacUsersComponent] });
RbacUsersModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacUsersModule, providers: [UserOrgService, HttpClient, HttpService, AlertService, ConfirmationService, PermissionStore, DataStoreService], imports: [[
            PicsRbacUsersModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacUsersModule, decorators: [{
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
                    providers: [UserOrgService, HttpClient, HttpService, AlertService, ConfirmationService, PermissionStore, DataStoreService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy11c2Vycy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvcmJhYy11c2Vycy9zcmMvbGliL3JiYWMtdXNlcnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDdkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0RBQWtELENBQUM7O0FBZ0JsRixNQUFNLE9BQU8sZUFBZTs7NkdBQWYsZUFBZTs4R0FBZixlQUFlLGlCQVZ4QixrQkFBa0IsYUFHbEIsbUJBQW1CLGFBR25CLGtCQUFrQjs4R0FJVCxlQUFlLGFBRmYsQ0FBQyxjQUFjLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixDQUFDLFlBTmpIO1lBQ1AsbUJBQW1CO1NBQ3BCOzRGQU1VLGVBQWU7a0JBWjNCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGtCQUFrQjtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG1CQUFtQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjtxQkFDbkI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsY0FBYyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQztpQkFDM0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSYmFjVXNlcnNDb21wb25lbnQgfSBmcm9tICcuL3JiYWMtdXNlcnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGljc1JiYWNVc2Vyc01vZHVsZSB9IGZyb20gJy4vcGljcy1yYmFjLXVzZXJzL3BpY3MtcmJhYy11c2Vycy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25TZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uU3RvcmUgfSBmcm9tICcuL3BpY3MtcmJhYy11c2Vycy9AY29yZS9wZXJtaXNzaW9ucy9wZXJtaXNzaW9uLnN0b3JlJztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLXJiYWMtdXNlcnMvQGNvcmUvc2VydmljZS9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4vcGljcy1yYmFjLXVzZXJzL0Bjb3JlL3NlcnZpY2UvZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICcuL3BpY3MtcmJhYy11c2Vycy9AY29yZS9zZXJ2aWNlL2h0dHAuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJPcmdTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLXJiYWMtdXNlcnMvQGNvcmUvc2VydmljZS91c2VyLW9yZy5zZXJ2aWNlJztcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFJiYWNVc2Vyc0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgUGljc1JiYWNVc2Vyc01vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgUmJhY1VzZXJzQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtVc2VyT3JnU2VydmljZSwgSHR0cENsaWVudCwgSHR0cFNlcnZpY2UsIEFsZXJ0U2VydmljZSwgQ29uZmlybWF0aW9uU2VydmljZSwgUGVybWlzc2lvblN0b3JlLCBEYXRhU3RvcmVTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmJhY1VzZXJzTW9kdWxlIHsgfVxyXG4iXX0=