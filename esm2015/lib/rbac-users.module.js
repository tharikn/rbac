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
}
RbacUsersModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacUsersModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RbacUsersModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacUsersModule, declarations: [RbacUsersComponent], imports: [PicsRbacUsersModule], exports: [RbacUsersComponent] });
RbacUsersModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacUsersModule, providers: [UserOrgService, HttpClient, AlertService, ConfirmationService, PermissionStore, DataStoreService], imports: [[
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
                    providers: [UserOrgService, HttpClient, AlertService, ConfirmationService, PermissionStore, DataStoreService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy11c2Vycy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvcmJhYy11c2Vycy9zcmMvbGliL3JiYWMtdXNlcnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDdkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrREFBa0QsQ0FBQzs7QUFnQmxGLE1BQU0sT0FBTyxlQUFlOzs2R0FBZixlQUFlOzhHQUFmLGVBQWUsaUJBVnhCLGtCQUFrQixhQUdsQixtQkFBbUIsYUFHbkIsa0JBQWtCOzhHQUlULGVBQWUsYUFGZixDQUFDLGNBQWMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQyxZQU5wRztZQUNQLG1CQUFtQjtTQUNwQjs0RkFNVSxlQUFlO2tCQVozQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixrQkFBa0I7cUJBQ25CO29CQUNELE9BQU8sRUFBRTt3QkFDUCxtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxrQkFBa0I7cUJBQ25CO29CQUNELFNBQVMsRUFBRSxDQUFDLGNBQWMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQztpQkFDOUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSYmFjVXNlcnNDb21wb25lbnQgfSBmcm9tICcuL3JiYWMtdXNlcnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGljc1JiYWNVc2Vyc01vZHVsZSB9IGZyb20gJy4vcGljcy1yYmFjLXVzZXJzL3BpY3MtcmJhYy11c2Vycy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25TZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uU3RvcmUgfSBmcm9tICcuL3BpY3MtcmJhYy11c2Vycy9AY29yZS9wZXJtaXNzaW9ucy9wZXJtaXNzaW9uLnN0b3JlJztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLXJiYWMtdXNlcnMvQGNvcmUvc2VydmljZS9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4vcGljcy1yYmFjLXVzZXJzL0Bjb3JlL3NlcnZpY2UvZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlck9yZ1NlcnZpY2UgfSBmcm9tICcuL3BpY3MtcmJhYy11c2Vycy9AY29yZS9zZXJ2aWNlL3VzZXItb3JnLnNlcnZpY2UnO1xyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgUmJhY1VzZXJzQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBQaWNzUmJhY1VzZXJzTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBSYmFjVXNlcnNDb21wb25lbnRcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1VzZXJPcmdTZXJ2aWNlLCBIdHRwQ2xpZW50LCBBbGVydFNlcnZpY2UsIENvbmZpcm1hdGlvblNlcnZpY2UsIFBlcm1pc3Npb25TdG9yZSwgRGF0YVN0b3JlU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJiYWNVc2Vyc01vZHVsZSB7IH1cclxuIl19