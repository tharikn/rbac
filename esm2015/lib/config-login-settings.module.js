import { NgModule } from '@angular/core';
import { ConfigLoginSettingsComponent } from './config-login-settings.component';
import { ConfirmationService } from 'primeng/api';
import { PermissionStore } from './@core/permissions/permission.store';
import { AlertService } from './@core/service/alert.service';
import { AppService } from './@core/service/app.service';
import { AuthGuard } from './@core/service/auth.guard';
import { CredentialsService } from './@core/service/credentials.service';
import { DataStoreService } from './@core/service/data-store.service';
import { LocalStorageService } from './@core/service/local-storage.service';
import { LocalService } from './@core/service/local.service';
import { MicrostrategyService } from './@core/service/microstrategy.service';
import { ThemeService } from './@core/service/theme.service';
import { PicsConfigLoginSettingsModule } from './pics-config-login-settings/pics-config-login-settings.module';
import { ConfigurationSettingsService } from './@core/service/configuration-settings.service';
import { ShareDataService } from './@core/service/share-data.service';
import * as i0 from "@angular/core";
export class CardiConfigLoginSettingsModule {
}
CardiConfigLoginSettingsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardiConfigLoginSettingsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CardiConfigLoginSettingsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardiConfigLoginSettingsModule, declarations: [ConfigLoginSettingsComponent], imports: [PicsConfigLoginSettingsModule], exports: [ConfigLoginSettingsComponent] });
CardiConfigLoginSettingsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardiConfigLoginSettingsModule, providers: [
        AuthGuard,
        AppService,
        CredentialsService,
        LocalStorageService,
        LocalService,
        MicrostrategyService,
        ThemeService,
        AlertService,
        ConfirmationService,
        ConfigurationSettingsService,
        PermissionStore,
        ShareDataService,
        DataStoreService
    ], imports: [[
            PicsConfigLoginSettingsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardiConfigLoginSettingsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ConfigLoginSettingsComponent
                    ],
                    imports: [
                        PicsConfigLoginSettingsModule
                    ],
                    exports: [
                        ConfigLoginSettingsComponent
                    ],
                    providers: [
                        AuthGuard,
                        AppService,
                        CredentialsService,
                        LocalStorageService,
                        LocalService,
                        MicrostrategyService,
                        ThemeService,
                        AlertService,
                        ConfirmationService,
                        ConfigurationSettingsService,
                        PermissionStore,
                        ShareDataService,
                        DataStoreService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWxvZ2luLXNldHRpbmdzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9jb25maWctbG9naW4tc2V0dGluZ3Mvc3JjL2xpYi9jb25maWctbG9naW4tc2V0dGluZ3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDakYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQy9HLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztBQTZCdEUsTUFBTSxPQUFPLDhCQUE4Qjs7NEhBQTlCLDhCQUE4Qjs2SEFBOUIsOEJBQThCLGlCQXZCdkMsNEJBQTRCLGFBRzVCLDZCQUE2QixhQUc3Qiw0QkFBNEI7NkhBaUJuQiw4QkFBOEIsYUFmOUI7UUFDVCxTQUFTO1FBQ1QsVUFBVTtRQUNWLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLG9CQUFvQjtRQUNwQixZQUFZO1FBQ1osWUFBWTtRQUNaLG1CQUFtQjtRQUNuQiw0QkFBNEI7UUFDNUIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixnQkFBZ0I7S0FBQyxZQW5CVjtZQUNQLDZCQUE2QjtTQUM5Qjs0RkFtQlUsOEJBQThCO2tCQXpCMUMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osNEJBQTRCO3FCQUM3QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsNkJBQTZCO3FCQUM5QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsNEJBQTRCO3FCQUM3QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsU0FBUzt3QkFDVCxVQUFVO3dCQUNWLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQixZQUFZO3dCQUNaLG9CQUFvQjt3QkFDcEIsWUFBWTt3QkFDWixZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsNEJBQTRCO3dCQUM1QixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3FCQUFDO2lCQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbmZpZ0xvZ2luU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpZy1sb2dpbi1zZXR0aW5ncy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25TZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uU3RvcmUgfSBmcm9tICcuL0Bjb3JlL3Blcm1pc3Npb25zL3Blcm1pc3Npb24uc3RvcmUnO1xyXG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICcuL0Bjb3JlL3NlcnZpY2UvYWxlcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICcuL0Bjb3JlL3NlcnZpY2UvYXBwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICcuL0Bjb3JlL3NlcnZpY2UvYXV0aC5ndWFyZCc7XHJcbmltcG9ydCB7IENyZWRlbnRpYWxzU2VydmljZSB9IGZyb20gJy4vQGNvcmUvc2VydmljZS9jcmVkZW50aWFscy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4vQGNvcmUvc2VydmljZS9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9AY29yZS9zZXJ2aWNlL2xvY2FsLXN0b3JhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2FsU2VydmljZSB9IGZyb20gJy4vQGNvcmUvc2VydmljZS9sb2NhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWljcm9zdHJhdGVneVNlcnZpY2UgfSBmcm9tICcuL0Bjb3JlL3NlcnZpY2UvbWljcm9zdHJhdGVneS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGhlbWVTZXJ2aWNlIH0gZnJvbSAnLi9AY29yZS9zZXJ2aWNlL3RoZW1lLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQaWNzQ29uZmlnTG9naW5TZXR0aW5nc01vZHVsZSB9IGZyb20gJy4vcGljcy1jb25maWctbG9naW4tc2V0dGluZ3MvcGljcy1jb25maWctbG9naW4tc2V0dGluZ3MubW9kdWxlJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNldHRpbmdzU2VydmljZSB9IGZyb20gJy4vQGNvcmUvc2VydmljZS9jb25maWd1cmF0aW9uLXNldHRpbmdzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTaGFyZURhdGFTZXJ2aWNlIH0gZnJvbSAnLi9AY29yZS9zZXJ2aWNlL3NoYXJlLWRhdGEuc2VydmljZSc7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBDb25maWdMb2dpblNldHRpbmdzQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBQaWNzQ29uZmlnTG9naW5TZXR0aW5nc01vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQ29uZmlnTG9naW5TZXR0aW5nc0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBBdXRoR3VhcmQsXHJcbiAgICBBcHBTZXJ2aWNlLFxyXG4gICAgQ3JlZGVudGlhbHNTZXJ2aWNlLFxyXG4gICAgTG9jYWxTdG9yYWdlU2VydmljZSxcclxuICAgIExvY2FsU2VydmljZSxcclxuICAgIE1pY3Jvc3RyYXRlZ3lTZXJ2aWNlLFxyXG4gICAgVGhlbWVTZXJ2aWNlLFxyXG4gICAgQWxlcnRTZXJ2aWNlLFxyXG4gICAgQ29uZmlybWF0aW9uU2VydmljZSxcclxuICAgIENvbmZpZ3VyYXRpb25TZXR0aW5nc1NlcnZpY2UsXHJcbiAgICBQZXJtaXNzaW9uU3RvcmUsXHJcbiAgICBTaGFyZURhdGFTZXJ2aWNlLFxyXG4gICAgRGF0YVN0b3JlU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENhcmRpQ29uZmlnTG9naW5TZXR0aW5nc01vZHVsZSB7IH1cclxuIl19