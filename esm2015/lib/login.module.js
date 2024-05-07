import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { LoginComponent } from './login.component';
import { PermissionStore } from './pics-login/@core/permissions/permission.store';
import { AlertService } from './pics-login/@core/service/alert.service';
import { AppService } from './pics-login/@core/service/app.service';
import { AuthService } from './pics-login/@core/service/auth.service';
import { DataStoreService } from './pics-login/@core/service/data-store.service';
import { DynamicTabPageService } from './pics-login/@core/service/dynamic-tab-page-service';
import { HttpService } from './pics-login/@core/service/http.service';
import { LocalStorageService } from './pics-login/@core/service/local-storage.service';
import { LocalService } from './pics-login/@core/service/local.service';
import { MicrostrategyService } from './pics-login/@core/service/microstrategy.service';
import { PageHeaderService } from './pics-login/@core/service/page-header.service';
import { ProfileService } from './pics-login/@core/service/profile.service';
import { ThemeService } from './pics-login/@core/service/theme.service';
import { PicsLoginModule } from './pics-login/pics-login.module';
import { AuthStore } from './pics-login/@core/service/auth.store';
import { CredentialsService } from './pics-login/@core/service/credentials.service';
import { AuthGuard } from './pics-login/@core/service/auth.guard';
import * as i0 from "@angular/core";
export class CardiLoginModule {
}
CardiLoginModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardiLoginModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CardiLoginModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardiLoginModule, declarations: [LoginComponent], imports: [PicsLoginModule], exports: [LoginComponent] });
CardiLoginModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardiLoginModule, providers: [
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
        PermissionStore,
        DataStoreService
    ], imports: [[
            PicsLoginModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardiLoginModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LoginComponent
                    ],
                    imports: [
                        PicsLoginModule
                    ],
                    exports: [
                        LoginComponent
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
                        PermissionStore,
                        DataStoreService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2xvZ2luL3NyYy9saWIvbG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN2RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDbkYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7QUFrQ2xFLE1BQU0sT0FBTyxnQkFBZ0I7OzhHQUFoQixnQkFBZ0I7K0dBQWhCLGdCQUFnQixpQkE1QnpCLGNBQWMsYUFHZCxlQUFlLGFBR2YsY0FBYzsrR0FzQkwsZ0JBQWdCLGFBcEJoQjtRQUNULFdBQVc7UUFDWCxTQUFTO1FBQ1QsU0FBUztRQUNULGNBQWM7UUFDZCxVQUFVO1FBQ1Ysa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLG9CQUFvQjtRQUNwQixpQkFBaUI7UUFDakIsWUFBWTtRQUNaLFVBQVU7UUFDVixXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsZ0JBQWdCO0tBQUMsWUF4QlY7WUFDUCxlQUFlO1NBQ2hCOzRGQXdCVSxnQkFBZ0I7a0JBOUI1QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixjQUFjO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDUCxlQUFlO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsY0FBYztxQkFDZjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsV0FBVzt3QkFDWCxTQUFTO3dCQUNULFNBQVM7d0JBQ1QsY0FBYzt3QkFDZCxVQUFVO3dCQUNWLGtCQUFrQjt3QkFDbEIscUJBQXFCO3dCQUNyQixtQkFBbUI7d0JBQ25CLFlBQVk7d0JBQ1osb0JBQW9CO3dCQUNwQixpQkFBaUI7d0JBQ2pCLFlBQVk7d0JBQ1osVUFBVTt3QkFDVixXQUFXO3dCQUNYLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixlQUFlO3dCQUNmLGdCQUFnQjtxQkFBQztpQkFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25TZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGVybWlzc2lvblN0b3JlIH0gZnJvbSAnLi9waWNzLWxvZ2luL0Bjb3JlL3Blcm1pc3Npb25zL3Blcm1pc3Npb24uc3RvcmUnO1xyXG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICcuL3BpY3MtbG9naW4vQGNvcmUvc2VydmljZS9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gJy4vcGljcy1sb2dpbi9AY29yZS9zZXJ2aWNlL2FwcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL3BpY3MtbG9naW4vQGNvcmUvc2VydmljZS9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLWxvZ2luL0Bjb3JlL3NlcnZpY2UvZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRHluYW1pY1RhYlBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLWxvZ2luL0Bjb3JlL3NlcnZpY2UvZHluYW1pYy10YWItcGFnZS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICcuL3BpY3MtbG9naW4vQGNvcmUvc2VydmljZS9odHRwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLWxvZ2luL0Bjb3JlL3NlcnZpY2UvbG9jYWwtc3RvcmFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9jYWxTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLWxvZ2luL0Bjb3JlL3NlcnZpY2UvbG9jYWwuc2VydmljZSc7XHJcbmltcG9ydCB7IE1pY3Jvc3RyYXRlZ3lTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLWxvZ2luL0Bjb3JlL3NlcnZpY2UvbWljcm9zdHJhdGVneS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGFnZUhlYWRlclNlcnZpY2UgfSBmcm9tICcuL3BpY3MtbG9naW4vQGNvcmUvc2VydmljZS9wYWdlLWhlYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuL3BpY3MtbG9naW4vQGNvcmUvc2VydmljZS9wcm9maWxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUaGVtZVNlcnZpY2UgfSBmcm9tICcuL3BpY3MtbG9naW4vQGNvcmUvc2VydmljZS90aGVtZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGljc0xvZ2luTW9kdWxlIH0gZnJvbSAnLi9waWNzLWxvZ2luL3BpY3MtbG9naW4ubW9kdWxlJztcclxuaW1wb3J0IHsgQXV0aFN0b3JlIH0gZnJvbSAnLi9waWNzLWxvZ2luL0Bjb3JlL3NlcnZpY2UvYXV0aC5zdG9yZSc7XHJcbmltcG9ydCB7IENyZWRlbnRpYWxzU2VydmljZSB9IGZyb20gJy4vcGljcy1sb2dpbi9AY29yZS9zZXJ2aWNlL2NyZWRlbnRpYWxzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICcuL3BpY3MtbG9naW4vQGNvcmUvc2VydmljZS9hdXRoLmd1YXJkJztcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIExvZ2luQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBQaWNzTG9naW5Nb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIExvZ2luQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEF1dGhTZXJ2aWNlLFxyXG4gICAgQXV0aFN0b3JlICxcclxuICAgIEF1dGhHdWFyZCxcclxuICAgIFByb2ZpbGVTZXJ2aWNlLFxyXG4gICAgQXBwU2VydmljZSxcclxuICAgIENyZWRlbnRpYWxzU2VydmljZSxcclxuICAgIER5bmFtaWNUYWJQYWdlU2VydmljZSxcclxuICAgIExvY2FsU3RvcmFnZVNlcnZpY2UsXHJcbiAgICBMb2NhbFNlcnZpY2UsXHJcbiAgICBNaWNyb3N0cmF0ZWd5U2VydmljZSxcclxuICAgIFBhZ2VIZWFkZXJTZXJ2aWNlLFxyXG4gICAgVGhlbWVTZXJ2aWNlLFxyXG4gICAgSHR0cENsaWVudCxcclxuICAgIEh0dHBTZXJ2aWNlLFxyXG4gICAgQWxlcnRTZXJ2aWNlLFxyXG4gICAgQ29uZmlybWF0aW9uU2VydmljZSxcclxuICAgIFBlcm1pc3Npb25TdG9yZSxcclxuICAgIERhdGFTdG9yZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJkaUxvZ2luTW9kdWxlIHsgfVxyXG4iXX0=