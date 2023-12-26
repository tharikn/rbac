import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { PicsProfileModule } from './pics-profile/pics-profile.module';
import { HttpClient } from '@angular/common/http';
import { ConfirmationService } from 'primeng/api';
import { PermissionStore } from './pics-profile/@core/permissions/permission.store';
import { AlertService } from './pics-profile/@core/service/alert.service';
import { AttachmentsService } from './pics-profile/@core/service/attachments.service';
import { AuthService } from './pics-profile/@core/service/auth.service';
import { DataStoreService } from './pics-profile/@core/service/data-store.service';
import { HttpService } from './pics-profile/@core/service/http.service';
import { ProfileService } from './profile.service';
import { PicsConfigLoginSettingsModule } from './pics-profile/pics-config-login-settings/pics-config-login-settings.module';
import { ConfigurationSettingsService } from './pics-profile/@core/service/configuration-settings.service';
import * as i0 from "@angular/core";
export class ProfileSettingsModule {
}
ProfileSettingsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileSettingsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ProfileSettingsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileSettingsModule, declarations: [ProfileComponent], imports: [PicsProfileModule,
        PicsConfigLoginSettingsModule], exports: [ProfileComponent] });
ProfileSettingsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileSettingsModule, providers: [ProfileService, AttachmentsService, ConfigurationSettingsService, HttpClient, HttpService, AlertService, AuthService, ConfirmationService, PermissionStore, DataStoreService], imports: [[
            PicsProfileModule,
            PicsConfigLoginSettingsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileSettingsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ProfileComponent
                    ],
                    imports: [
                        PicsProfileModule,
                        PicsConfigLoginSettingsModule
                    ],
                    exports: [
                        ProfileComponent
                    ],
                    providers: [ProfileService, AttachmentsService, ConfigurationSettingsService, HttpClient, HttpService, AlertService, AuthService, ConfirmationService, PermissionStore, DataStoreService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvcHJvZmlsZS9zcmMvbGliL3Byb2ZpbGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDcEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNuRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDZFQUE2RSxDQUFDO0FBQzVILE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDOztBQWdCM0csTUFBTSxPQUFPLHFCQUFxQjs7bUhBQXJCLHFCQUFxQjtvSEFBckIscUJBQXFCLGlCQVg5QixnQkFBZ0IsYUFHaEIsaUJBQWlCO1FBQ2pCLDZCQUE2QixhQUc3QixnQkFBZ0I7b0hBSVAscUJBQXFCLGFBRnJCLENBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLDRCQUE0QixFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsWUFQL0s7WUFDUCxpQkFBaUI7WUFDakIsNkJBQTZCO1NBQzlCOzRGQU1VLHFCQUFxQjtrQkFiakMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsaUJBQWlCO3dCQUNqQiw2QkFBNkI7cUJBQzlCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7cUJBQ2pCO29CQUNELFNBQVMsRUFBRSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyw0QkFBNEIsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixDQUFDO2lCQUN6TCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL3Byb2ZpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGljc1Byb2ZpbGVNb2R1bGUgfSBmcm9tICcuL3BpY3MtcHJvZmlsZS9waWNzLXByb2ZpbGUubW9kdWxlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcclxuaW1wb3J0IHsgUGVybWlzc2lvblN0b3JlIH0gZnJvbSAnLi9waWNzLXByb2ZpbGUvQGNvcmUvcGVybWlzc2lvbnMvcGVybWlzc2lvbi5zdG9yZSc7XHJcbmltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gJy4vcGljcy1wcm9maWxlL0Bjb3JlL3NlcnZpY2UvYWxlcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IEF0dGFjaG1lbnRzU2VydmljZSB9IGZyb20gJy4vcGljcy1wcm9maWxlL0Bjb3JlL3NlcnZpY2UvYXR0YWNobWVudHMuc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLXByb2ZpbGUvQGNvcmUvc2VydmljZS9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLXByb2ZpbGUvQGNvcmUvc2VydmljZS9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vcGljcy1wcm9maWxlL0Bjb3JlL3NlcnZpY2UvaHR0cC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuL3Byb2ZpbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFBpY3NDb25maWdMb2dpblNldHRpbmdzTW9kdWxlIH0gZnJvbSAnLi9waWNzLXByb2ZpbGUvcGljcy1jb25maWctbG9naW4tc2V0dGluZ3MvcGljcy1jb25maWctbG9naW4tc2V0dGluZ3MubW9kdWxlJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNldHRpbmdzU2VydmljZSB9IGZyb20gJy4vcGljcy1wcm9maWxlL0Bjb3JlL3NlcnZpY2UvY29uZmlndXJhdGlvbi1zZXR0aW5ncy5zZXJ2aWNlJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgUHJvZmlsZUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgUGljc1Byb2ZpbGVNb2R1bGUsXHJcbiAgICBQaWNzQ29uZmlnTG9naW5TZXR0aW5nc01vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgUHJvZmlsZUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbUHJvZmlsZVNlcnZpY2UsIEF0dGFjaG1lbnRzU2VydmljZSxDb25maWd1cmF0aW9uU2V0dGluZ3NTZXJ2aWNlLCBIdHRwQ2xpZW50LCBIdHRwU2VydmljZSwgQWxlcnRTZXJ2aWNlLCBBdXRoU2VydmljZSwgQ29uZmlybWF0aW9uU2VydmljZSwgUGVybWlzc2lvblN0b3JlLCBEYXRhU3RvcmVTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZVNldHRpbmdzTW9kdWxlIHsgfVxyXG4iXX0=