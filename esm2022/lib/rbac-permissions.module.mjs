import { NgModule } from '@angular/core';
import { RbacPermissionsComponent } from './rbac-permissions.component';
import { PicsRbacPermissionsModule } from './pics-rbac-permissions/pics-rbac-permissions.module';
import { HttpClient } from '@angular/common/http';
import { ConfirmationService } from 'primeng/api';
import { PermissionStore } from './pics-rbac-permissions/@core/permissions/permission.store';
import { AlertService } from './pics-rbac-permissions/@core/service/alert.service';
import { DataStoreService } from './pics-rbac-permissions/@core/service/data-store.service';
import { MicrostrategyService } from './pics-rbac-permissions/@core/service/microstrategy.service';
import { RbacService } from './pics-rbac-permissions/@core/service/rbac.service';
import * as i0 from "@angular/core";
export class RbacPermissionsModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacPermissionsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: RbacPermissionsModule, declarations: [RbacPermissionsComponent], imports: [PicsRbacPermissionsModule], exports: [RbacPermissionsComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacPermissionsModule, providers: [RbacService, MicrostrategyService, HttpClient, AlertService, ConfirmationService, PermissionStore, DataStoreService], imports: [PicsRbacPermissionsModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacPermissionsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        RbacPermissionsComponent
                    ],
                    imports: [
                        PicsRbacPermissionsModule
                    ],
                    exports: [
                        RbacPermissionsComponent
                    ],
                    providers: [RbacService, MicrostrategyService, HttpClient, AlertService, ConfirmationService, PermissionStore, DataStoreService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy1wZXJtaXNzaW9ucy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvcmJhYy1wZXJtaXNzaW9ucy9zcmMvbGliL3JiYWMtcGVybWlzc2lvbnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDakcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDN0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ25HLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7QUFnQmpGLE1BQU0sT0FBTyxxQkFBcUI7d0dBQXJCLHFCQUFxQjt5R0FBckIscUJBQXFCLGlCQVY5Qix3QkFBd0IsYUFHeEIseUJBQXlCLGFBR3pCLHdCQUF3Qjt5R0FJZixxQkFBcUIsYUFGckIsQ0FBQyxXQUFXLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsWUFMOUgseUJBQXlCOzs0RkFPaEIscUJBQXFCO2tCQVpqQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWix3QkFBd0I7cUJBQ3pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCx5QkFBeUI7cUJBQzFCO29CQUNELE9BQU8sRUFBRTt3QkFDUCx3QkFBd0I7cUJBQ3pCO29CQUNELFNBQVMsRUFBRSxDQUFDLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQztpQkFDakkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSYmFjUGVybWlzc2lvbnNDb21wb25lbnQgfSBmcm9tICcuL3JiYWMtcGVybWlzc2lvbnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGljc1JiYWNQZXJtaXNzaW9uc01vZHVsZSB9IGZyb20gJy4vcGljcy1yYmFjLXBlcm1pc3Npb25zL3BpY3MtcmJhYy1wZXJtaXNzaW9ucy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25TZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uU3RvcmUgfSBmcm9tICcuL3BpY3MtcmJhYy1wZXJtaXNzaW9ucy9AY29yZS9wZXJtaXNzaW9ucy9wZXJtaXNzaW9uLnN0b3JlJztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLXJiYWMtcGVybWlzc2lvbnMvQGNvcmUvc2VydmljZS9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4vcGljcy1yYmFjLXBlcm1pc3Npb25zL0Bjb3JlL3NlcnZpY2UvZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWljcm9zdHJhdGVneVNlcnZpY2UgfSBmcm9tICcuL3BpY3MtcmJhYy1wZXJtaXNzaW9ucy9AY29yZS9zZXJ2aWNlL21pY3Jvc3RyYXRlZ3kuc2VydmljZSc7XHJcbmltcG9ydCB7IFJiYWNTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLXJiYWMtcGVybWlzc2lvbnMvQGNvcmUvc2VydmljZS9yYmFjLnNlcnZpY2UnO1xyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgUmJhY1Blcm1pc3Npb25zQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBQaWNzUmJhY1Blcm1pc3Npb25zTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBSYmFjUGVybWlzc2lvbnNDb21wb25lbnRcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1JiYWNTZXJ2aWNlLCBNaWNyb3N0cmF0ZWd5U2VydmljZSwgSHR0cENsaWVudCwgQWxlcnRTZXJ2aWNlLCBDb25maXJtYXRpb25TZXJ2aWNlLCBQZXJtaXNzaW9uU3RvcmUsIERhdGFTdG9yZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYmFjUGVybWlzc2lvbnNNb2R1bGUgeyB9XHJcbiJdfQ==