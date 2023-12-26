import { NgModule } from '@angular/core';
import { ConfigLoginSettingsComponent } from './config-login-settings.component';
import { HttpClient } from '@angular/common/http';
import { ConfirmationService } from 'primeng/api';
import { PermissionStore } from './@core/permissions/permission.store';
import { AlertService } from './@core/service/alert.service';
import { AppService } from './@core/service/app.service';
import { AuthGuard } from './@core/service/auth.guard';
import { AuthService } from './@core/service/auth.service';
import { AuthStore } from './@core/service/auth.store';
import { CredentialsService } from './@core/service/credentials.service';
import { DataStoreService } from './@core/service/data-store.service';
import { DynamicTabPageService } from './@core/service/dynamic-tab-page-service';
import { HttpService } from './@core/service/http.service';
import { LocalStorageService } from './@core/service/local-storage.service';
import { LocalService } from './@core/service/local.service';
import { MicrostrategyService } from './@core/service/microstrategy.service';
import { PageHeaderService } from './@core/service/page-header.service';
import { ProfileService } from './@core/service/profile.service';
import { ThemeService } from './@core/service/theme.service';
import { PicsConfigLoginSettingsModule } from './pics-config-login-settings/pics-config-login-settings.module';
import { ConfigurationSettingsService } from './@core/service/configuration-settings.service';
import { AttachmentsService } from './@core/service/attachments.service';
import { ShareDataService } from './@core/service/share-data.service';
import * as i0 from "@angular/core";
export class CardiConfigLoginSettingsModule {
}
CardiConfigLoginSettingsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardiConfigLoginSettingsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CardiConfigLoginSettingsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardiConfigLoginSettingsModule, declarations: [ConfigLoginSettingsComponent], imports: [PicsConfigLoginSettingsModule], exports: [ConfigLoginSettingsComponent] });
CardiConfigLoginSettingsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardiConfigLoginSettingsModule, providers: [
        AuthService,
        AuthStore,
        AuthGuard,
        ProfileService,
        AppService,
        CredentialsService,
        DynamicTabPageService,
        LocalStorageService,
        LocalService,
        MicrostrategyService,
        PageHeaderService,
        ThemeService,
        HttpClient,
        HttpService,
        AlertService,
        ConfirmationService,
        ConfigurationSettingsService,
        AttachmentsService,
        PageHeaderService,
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
                        AuthService,
                        AuthStore,
                        AuthGuard,
                        ProfileService,
                        AppService,
                        CredentialsService,
                        DynamicTabPageService,
                        LocalStorageService,
                        LocalService,
                        MicrostrategyService,
                        PageHeaderService,
                        ThemeService,
                        HttpClient,
                        HttpService,
                        AlertService,
                        ConfirmationService,
                        ConfigurationSettingsService,
                        AttachmentsService,
                        PageHeaderService,
                        PermissionStore,
                        ShareDataService,
                        DataStoreService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWxvZ2luLXNldHRpbmdzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9jb25maWctbG9naW4tc2V0dGluZ3Mvc3JjL2xpYi9jb25maWctbG9naW4tc2V0dGluZ3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDakYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDL0csT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDOUYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7O0FBc0N0RSxNQUFNLE9BQU8sOEJBQThCOzs0SEFBOUIsOEJBQThCOzZIQUE5Qiw4QkFBOEIsaUJBaEN2Qyw0QkFBNEIsYUFHNUIsNkJBQTZCLGFBRzdCLDRCQUE0Qjs2SEEwQm5CLDhCQUE4QixhQXhCOUI7UUFDVCxXQUFXO1FBQ1gsU0FBUztRQUNULFNBQVM7UUFDVCxjQUFjO1FBQ2QsVUFBVTtRQUNWLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixVQUFVO1FBQ1YsV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsNEJBQTRCO1FBQzNCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDbEIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixnQkFBZ0I7S0FBQyxZQTVCVjtZQUNQLDZCQUE2QjtTQUM5Qjs0RkE0QlUsOEJBQThCO2tCQWxDMUMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osNEJBQTRCO3FCQUM3QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsNkJBQTZCO3FCQUM5QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsNEJBQTRCO3FCQUM3QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsV0FBVzt3QkFDWCxTQUFTO3dCQUNULFNBQVM7d0JBQ1QsY0FBYzt3QkFDZCxVQUFVO3dCQUNWLGtCQUFrQjt3QkFDbEIscUJBQXFCO3dCQUNyQixtQkFBbUI7d0JBQ25CLFlBQVk7d0JBQ1osb0JBQW9CO3dCQUNwQixpQkFBaUI7d0JBQ2pCLFlBQVk7d0JBQ1osVUFBVTt3QkFDVixXQUFXO3dCQUNYLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQiw0QkFBNEI7d0JBQzNCLGtCQUFrQjt3QkFDbEIsaUJBQWlCO3dCQUNsQixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3FCQUFDO2lCQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbmZpZ0xvZ2luU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpZy1sb2dpbi1zZXR0aW5ncy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25TZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uU3RvcmUgfSBmcm9tICcuL0Bjb3JlL3Blcm1pc3Npb25zL3Blcm1pc3Npb24uc3RvcmUnO1xyXG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICcuL0Bjb3JlL3NlcnZpY2UvYWxlcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICcuL0Bjb3JlL3NlcnZpY2UvYXBwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICcuL0Bjb3JlL3NlcnZpY2UvYXV0aC5ndWFyZCc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9AY29yZS9zZXJ2aWNlL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhTdG9yZSB9IGZyb20gJy4vQGNvcmUvc2VydmljZS9hdXRoLnN0b3JlJztcclxuaW1wb3J0IHsgQ3JlZGVudGlhbHNTZXJ2aWNlIH0gZnJvbSAnLi9AY29yZS9zZXJ2aWNlL2NyZWRlbnRpYWxzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9AY29yZS9zZXJ2aWNlL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IER5bmFtaWNUYWJQYWdlU2VydmljZSB9IGZyb20gJy4vQGNvcmUvc2VydmljZS9keW5hbWljLXRhYi1wYWdlLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vQGNvcmUvc2VydmljZS9odHRwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9AY29yZS9zZXJ2aWNlL2xvY2FsLXN0b3JhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2FsU2VydmljZSB9IGZyb20gJy4vQGNvcmUvc2VydmljZS9sb2NhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWljcm9zdHJhdGVneVNlcnZpY2UgfSBmcm9tICcuL0Bjb3JlL3NlcnZpY2UvbWljcm9zdHJhdGVneS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGFnZUhlYWRlclNlcnZpY2UgfSBmcm9tICcuL0Bjb3JlL3NlcnZpY2UvcGFnZS1oZWFkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFByb2ZpbGVTZXJ2aWNlIH0gZnJvbSAnLi9AY29yZS9zZXJ2aWNlL3Byb2ZpbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFRoZW1lU2VydmljZSB9IGZyb20gJy4vQGNvcmUvc2VydmljZS90aGVtZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGljc0NvbmZpZ0xvZ2luU2V0dGluZ3NNb2R1bGUgfSBmcm9tICcuL3BpY3MtY29uZmlnLWxvZ2luLXNldHRpbmdzL3BpY3MtY29uZmlnLWxvZ2luLXNldHRpbmdzLm1vZHVsZSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXR0aW5nc1NlcnZpY2UgfSBmcm9tICcuL0Bjb3JlL3NlcnZpY2UvY29uZmlndXJhdGlvbi1zZXR0aW5ncy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXR0YWNobWVudHNTZXJ2aWNlIH0gZnJvbSAnLi9AY29yZS9zZXJ2aWNlL2F0dGFjaG1lbnRzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTaGFyZURhdGFTZXJ2aWNlIH0gZnJvbSAnLi9AY29yZS9zZXJ2aWNlL3NoYXJlLWRhdGEuc2VydmljZSc7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBDb25maWdMb2dpblNldHRpbmdzQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBQaWNzQ29uZmlnTG9naW5TZXR0aW5nc01vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQ29uZmlnTG9naW5TZXR0aW5nc0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBBdXRoU2VydmljZSxcclxuICAgIEF1dGhTdG9yZSAsXHJcbiAgICBBdXRoR3VhcmQsXHJcbiAgICBQcm9maWxlU2VydmljZSxcclxuICAgIEFwcFNlcnZpY2UsXHJcbiAgICBDcmVkZW50aWFsc1NlcnZpY2UsXHJcbiAgICBEeW5hbWljVGFiUGFnZVNlcnZpY2UsXHJcbiAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgTG9jYWxTZXJ2aWNlLFxyXG4gICAgTWljcm9zdHJhdGVneVNlcnZpY2UsXHJcbiAgICBQYWdlSGVhZGVyU2VydmljZSxcclxuICAgIFRoZW1lU2VydmljZSxcclxuICAgIEh0dHBDbGllbnQsXHJcbiAgICBIdHRwU2VydmljZSxcclxuICAgIEFsZXJ0U2VydmljZSxcclxuICAgIENvbmZpcm1hdGlvblNlcnZpY2UsXHJcbiAgICBDb25maWd1cmF0aW9uU2V0dGluZ3NTZXJ2aWNlLFxyXG4gICAgIEF0dGFjaG1lbnRzU2VydmljZSxcclxuICAgICBQYWdlSGVhZGVyU2VydmljZSxcclxuICAgIFBlcm1pc3Npb25TdG9yZSxcclxuICAgIFNoYXJlRGF0YVNlcnZpY2UsXHJcbiAgICBEYXRhU3RvcmVTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FyZGlDb25maWdMb2dpblNldHRpbmdzTW9kdWxlIHsgfVxyXG4iXX0=