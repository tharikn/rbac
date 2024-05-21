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
import * as i0 from "@angular/core";
export class ProfileSettingsModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileSettingsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: ProfileSettingsModule, declarations: [ProfileComponent], imports: [PicsProfileModule], exports: [ProfileComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileSettingsModule, providers: [ProfileService, AttachmentsService, HttpClient, HttpService, AlertService, AuthService, ConfirmationService, PermissionStore, DataStoreService], imports: [PicsProfileModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileSettingsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ProfileComponent
                    ],
                    imports: [
                        PicsProfileModule
                    ],
                    exports: [
                        ProfileComponent
                    ],
                    providers: [ProfileService, AttachmentsService, HttpClient, HttpService, AlertService, AuthService, ConfirmationService, PermissionStore, DataStoreService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvcHJvZmlsZS9zcmMvbGliL3Byb2ZpbGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDcEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNuRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQWdCbkQsTUFBTSxPQUFPLHFCQUFxQjt3R0FBckIscUJBQXFCO3lHQUFyQixxQkFBcUIsaUJBVjlCLGdCQUFnQixhQUdoQixpQkFBaUIsYUFHakIsZ0JBQWdCO3lHQUlQLHFCQUFxQixhQUZyQixDQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixDQUFDLFlBTHpKLGlCQUFpQjs7NEZBT1IscUJBQXFCO2tCQVpqQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixnQkFBZ0I7cUJBQ2pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7cUJBQ2xCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7cUJBQ2pCO29CQUNELFNBQVMsRUFBRSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixDQUFDO2lCQUM1SiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL3Byb2ZpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGljc1Byb2ZpbGVNb2R1bGUgfSBmcm9tICcuL3BpY3MtcHJvZmlsZS9waWNzLXByb2ZpbGUubW9kdWxlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcclxuaW1wb3J0IHsgUGVybWlzc2lvblN0b3JlIH0gZnJvbSAnLi9waWNzLXByb2ZpbGUvQGNvcmUvcGVybWlzc2lvbnMvcGVybWlzc2lvbi5zdG9yZSc7XHJcbmltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gJy4vcGljcy1wcm9maWxlL0Bjb3JlL3NlcnZpY2UvYWxlcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IEF0dGFjaG1lbnRzU2VydmljZSB9IGZyb20gJy4vcGljcy1wcm9maWxlL0Bjb3JlL3NlcnZpY2UvYXR0YWNobWVudHMuc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLXByb2ZpbGUvQGNvcmUvc2VydmljZS9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLXByb2ZpbGUvQGNvcmUvc2VydmljZS9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vcGljcy1wcm9maWxlL0Bjb3JlL3NlcnZpY2UvaHR0cC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuL3Byb2ZpbGUuc2VydmljZSc7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBQcm9maWxlQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBQaWNzUHJvZmlsZU1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgUHJvZmlsZUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbUHJvZmlsZVNlcnZpY2UsIEF0dGFjaG1lbnRzU2VydmljZSwgSHR0cENsaWVudCwgSHR0cFNlcnZpY2UsIEFsZXJ0U2VydmljZSwgQXV0aFNlcnZpY2UsIENvbmZpcm1hdGlvblNlcnZpY2UsIFBlcm1pc3Npb25TdG9yZSwgRGF0YVN0b3JlU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVTZXR0aW5nc01vZHVsZSB7IH1cclxuIl19