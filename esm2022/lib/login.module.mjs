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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardiLoginModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: CardiLoginModule, declarations: [LoginComponent], imports: [PicsLoginModule], exports: [LoginComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardiLoginModule, providers: [
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
        ], imports: [PicsLoginModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardiLoginModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2xvZ2luL3NyYy9saWIvbG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN2RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDbkYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7QUFrQ2xFLE1BQU0sT0FBTyxnQkFBZ0I7d0dBQWhCLGdCQUFnQjt5R0FBaEIsZ0JBQWdCLGlCQTVCekIsY0FBYyxhQUdkLGVBQWUsYUFHZixjQUFjO3lHQXNCTCxnQkFBZ0IsYUFwQmhCO1lBQ1QsV0FBVztZQUNYLFNBQVM7WUFDVCxTQUFTO1lBQ1QsY0FBYztZQUNkLFVBQVU7WUFDVixrQkFBa0I7WUFDbEIscUJBQXFCO1lBQ3JCLG1CQUFtQjtZQUNuQixZQUFZO1lBQ1osb0JBQW9CO1lBQ3BCLGlCQUFpQjtZQUNqQixZQUFZO1lBQ1osVUFBVTtZQUNWLFdBQVc7WUFDWCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixnQkFBZ0I7U0FBQyxZQXZCakIsZUFBZTs7NEZBeUJOLGdCQUFnQjtrQkE5QjVCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGNBQWM7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGVBQWU7cUJBQ2hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxjQUFjO3FCQUNmO29CQUNELFNBQVMsRUFBRTt3QkFDVCxXQUFXO3dCQUNYLFNBQVM7d0JBQ1QsU0FBUzt3QkFDVCxjQUFjO3dCQUNkLFVBQVU7d0JBQ1Ysa0JBQWtCO3dCQUNsQixxQkFBcUI7d0JBQ3JCLG1CQUFtQjt3QkFDbkIsWUFBWTt3QkFDWixvQkFBb0I7d0JBQ3BCLGlCQUFpQjt3QkFDakIsWUFBWTt3QkFDWixVQUFVO3dCQUNWLFdBQVc7d0JBQ1gsWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2YsZ0JBQWdCO3FCQUFDO2lCQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvblNlcnZpY2UgfSBmcm9tICdwcmltZW5nL2FwaSc7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uU3RvcmUgfSBmcm9tICcuL3BpY3MtbG9naW4vQGNvcmUvcGVybWlzc2lvbnMvcGVybWlzc2lvbi5zdG9yZSc7XHJcbmltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gJy4vcGljcy1sb2dpbi9AY29yZS9zZXJ2aWNlL2FsZXJ0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLWxvZ2luL0Bjb3JlL3NlcnZpY2UvYXBwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vcGljcy1sb2dpbi9AY29yZS9zZXJ2aWNlL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuL3BpY3MtbG9naW4vQGNvcmUvc2VydmljZS9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEeW5hbWljVGFiUGFnZVNlcnZpY2UgfSBmcm9tICcuL3BpY3MtbG9naW4vQGNvcmUvc2VydmljZS9keW5hbWljLXRhYi1wYWdlLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vcGljcy1sb2dpbi9AY29yZS9zZXJ2aWNlL2h0dHAuc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL3BpY3MtbG9naW4vQGNvcmUvc2VydmljZS9sb2NhbC1zdG9yYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2NhbFNlcnZpY2UgfSBmcm9tICcuL3BpY3MtbG9naW4vQGNvcmUvc2VydmljZS9sb2NhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWljcm9zdHJhdGVneVNlcnZpY2UgfSBmcm9tICcuL3BpY3MtbG9naW4vQGNvcmUvc2VydmljZS9taWNyb3N0cmF0ZWd5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYWdlSGVhZGVyU2VydmljZSB9IGZyb20gJy4vcGljcy1sb2dpbi9AY29yZS9zZXJ2aWNlL3BhZ2UtaGVhZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQcm9maWxlU2VydmljZSB9IGZyb20gJy4vcGljcy1sb2dpbi9AY29yZS9zZXJ2aWNlL3Byb2ZpbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFRoZW1lU2VydmljZSB9IGZyb20gJy4vcGljcy1sb2dpbi9AY29yZS9zZXJ2aWNlL3RoZW1lLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQaWNzTG9naW5Nb2R1bGUgfSBmcm9tICcuL3BpY3MtbG9naW4vcGljcy1sb2dpbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBBdXRoU3RvcmUgfSBmcm9tICcuL3BpY3MtbG9naW4vQGNvcmUvc2VydmljZS9hdXRoLnN0b3JlJztcclxuaW1wb3J0IHsgQ3JlZGVudGlhbHNTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLWxvZ2luL0Bjb3JlL3NlcnZpY2UvY3JlZGVudGlhbHMuc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJy4vcGljcy1sb2dpbi9AY29yZS9zZXJ2aWNlL2F1dGguZ3VhcmQnO1xyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTG9naW5Db21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIFBpY3NMb2dpbk1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTG9naW5Db21wb25lbnRcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQXV0aFNlcnZpY2UsXHJcbiAgICBBdXRoU3RvcmUgLFxyXG4gICAgQXV0aEd1YXJkLFxyXG4gICAgUHJvZmlsZVNlcnZpY2UsXHJcbiAgICBBcHBTZXJ2aWNlLFxyXG4gICAgQ3JlZGVudGlhbHNTZXJ2aWNlLFxyXG4gICAgRHluYW1pY1RhYlBhZ2VTZXJ2aWNlLFxyXG4gICAgTG9jYWxTdG9yYWdlU2VydmljZSxcclxuICAgIExvY2FsU2VydmljZSxcclxuICAgIE1pY3Jvc3RyYXRlZ3lTZXJ2aWNlLFxyXG4gICAgUGFnZUhlYWRlclNlcnZpY2UsXHJcbiAgICBUaGVtZVNlcnZpY2UsXHJcbiAgICBIdHRwQ2xpZW50LFxyXG4gICAgSHR0cFNlcnZpY2UsXHJcbiAgICBBbGVydFNlcnZpY2UsXHJcbiAgICBDb25maXJtYXRpb25TZXJ2aWNlLFxyXG4gICAgUGVybWlzc2lvblN0b3JlLFxyXG4gICAgRGF0YVN0b3JlU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENhcmRpTG9naW5Nb2R1bGUgeyB9XHJcbiJdfQ==