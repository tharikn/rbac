import { NgModule } from '@angular/core';
import { MicrostrategyComponent } from './microstrategy.component';
import { PicsAnalyticsModule } from './pics-analytics/pics-analytics.module';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './@core/service/http.service';
import { AlertService } from './@core/service/alert.service';
import { PermissionStore } from './@core/permissions/permission.store';
import { DataStoreService } from './@core/service/data-store.service';
import { MicrostrategyService } from './@core/service/microstrategy.service';
import * as i0 from "@angular/core";
export class CardiMicrostrategyModule {
}
CardiMicrostrategyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardiMicrostrategyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CardiMicrostrategyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardiMicrostrategyModule, declarations: [MicrostrategyComponent], imports: [PicsAnalyticsModule], exports: [MicrostrategyComponent] });
CardiMicrostrategyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardiMicrostrategyModule, providers: [MicrostrategyService, HttpClient, HttpService, AlertService, PermissionStore, DataStoreService], imports: [[
            PicsAnalyticsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardiMicrostrategyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MicrostrategyComponent
                    ],
                    imports: [
                        PicsAnalyticsModule
                    ],
                    exports: [
                        MicrostrategyComponent
                    ],
                    providers: [MicrostrategyService, HttpClient, HttpService, AlertService, PermissionStore, DataStoreService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljcm9zdHJhdGVneS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9taWNyb3N0cmF0ZWd5L3NyYy9saWIvbWljcm9zdHJhdGVneS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7O0FBaUI3RSxNQUFNLE9BQU8sd0JBQXdCOztzSEFBeEIsd0JBQXdCO3VIQUF4Qix3QkFBd0IsaUJBVmpDLHNCQUFzQixhQUd0QixtQkFBbUIsYUFHbkIsc0JBQXNCO3VIQUliLHdCQUF3QixhQUZ4QixDQUFDLG9CQUFvQixFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFHLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQyxZQU5uRztZQUNQLG1CQUFtQjtTQUNwQjs0RkFNVSx3QkFBd0I7a0JBWnBDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHNCQUFzQjtxQkFDdkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG1CQUFtQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHNCQUFzQjtxQkFDdkI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUcsZUFBZSxFQUFFLGdCQUFnQixDQUFDO2lCQUM3RyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1pY3Jvc3RyYXRlZ3lDb21wb25lbnQgfSBmcm9tICcuL21pY3Jvc3RyYXRlZ3kuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGljc0FuYWx5dGljc01vZHVsZSB9IGZyb20gJy4vcGljcy1hbmFseXRpY3MvcGljcy1hbmFseXRpY3MubW9kdWxlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICcuL0Bjb3JlL3NlcnZpY2UvaHR0cC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi9AY29yZS9zZXJ2aWNlL2FsZXJ0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uU3RvcmUgfSBmcm9tICcuL0Bjb3JlL3Blcm1pc3Npb25zL3Blcm1pc3Npb24uc3RvcmUnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9AY29yZS9zZXJ2aWNlL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IE1pY3Jvc3RyYXRlZ3lTZXJ2aWNlIH0gZnJvbSAnLi9AY29yZS9zZXJ2aWNlL21pY3Jvc3RyYXRlZ3kuc2VydmljZSc7XHJcblxyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTWljcm9zdHJhdGVneUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgUGljc0FuYWx5dGljc01vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTWljcm9zdHJhdGVneUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbTWljcm9zdHJhdGVneVNlcnZpY2UsIEh0dHBDbGllbnQsIEh0dHBTZXJ2aWNlLCBBbGVydFNlcnZpY2UsICBQZXJtaXNzaW9uU3RvcmUsIERhdGFTdG9yZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJkaU1pY3Jvc3RyYXRlZ3lNb2R1bGUgeyB9XHJcbiJdfQ==