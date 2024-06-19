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
import { ProfileService } from './profile.service';
import { ProfileUpdateService } from './profile-update.service';
import { NavigationAlertService } from './pics-profile/@core/service/navigation-alert.service';
import * as i0 from "@angular/core";
export class ProfileSettingsModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileSettingsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: ProfileSettingsModule, declarations: [ProfileComponent], imports: [PicsProfileModule], exports: [ProfileComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileSettingsModule, providers: [ProfileService, ProfileUpdateService, AttachmentsService, HttpClient, AlertService, AuthService, ConfirmationService, PermissionStore, DataStoreService, NavigationAlertService], imports: [PicsProfileModule] });
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
                    providers: [ProfileService, ProfileUpdateService, AttachmentsService, HttpClient, AlertService, AuthService, ConfirmationService, PermissionStore, DataStoreService, NavigationAlertService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvcHJvZmlsZS9zcmMvbGliL3Byb2ZpbGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDcEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNuRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdURBQXVELENBQUM7O0FBZ0IvRixNQUFNLE9BQU8scUJBQXFCO3dHQUFyQixxQkFBcUI7eUdBQXJCLHFCQUFxQixpQkFWOUIsZ0JBQWdCLGFBR2hCLGlCQUFpQixhQUdqQixnQkFBZ0I7eUdBSVAscUJBQXFCLGFBRnJCLENBQUMsY0FBYyxFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxzQkFBc0IsQ0FBQyxZQUwxTCxpQkFBaUI7OzRGQU9SLHFCQUFxQjtrQkFaakMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsaUJBQWlCO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCO3FCQUNqQjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxjQUFjLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLHNCQUFzQixDQUFDO2lCQUM3TCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL3Byb2ZpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGljc1Byb2ZpbGVNb2R1bGUgfSBmcm9tICcuL3BpY3MtcHJvZmlsZS9waWNzLXByb2ZpbGUubW9kdWxlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcclxuaW1wb3J0IHsgUGVybWlzc2lvblN0b3JlIH0gZnJvbSAnLi9waWNzLXByb2ZpbGUvQGNvcmUvcGVybWlzc2lvbnMvcGVybWlzc2lvbi5zdG9yZSc7XHJcbmltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gJy4vcGljcy1wcm9maWxlL0Bjb3JlL3NlcnZpY2UvYWxlcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IEF0dGFjaG1lbnRzU2VydmljZSB9IGZyb20gJy4vcGljcy1wcm9maWxlL0Bjb3JlL3NlcnZpY2UvYXR0YWNobWVudHMuc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLXByb2ZpbGUvQGNvcmUvc2VydmljZS9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLXByb2ZpbGUvQGNvcmUvc2VydmljZS9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQcm9maWxlU2VydmljZSB9IGZyb20gJy4vcHJvZmlsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUHJvZmlsZVVwZGF0ZVNlcnZpY2UgfSBmcm9tICcuL3Byb2ZpbGUtdXBkYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLXByb2ZpbGUvQGNvcmUvc2VydmljZS9uYXZpZ2F0aW9uLWFsZXJ0LnNlcnZpY2UnO1xyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgUHJvZmlsZUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgUGljc1Byb2ZpbGVNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFByb2ZpbGVDb21wb25lbnRcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1Byb2ZpbGVTZXJ2aWNlLCBQcm9maWxlVXBkYXRlU2VydmljZSwgQXR0YWNobWVudHNTZXJ2aWNlLCBIdHRwQ2xpZW50LCBBbGVydFNlcnZpY2UsIEF1dGhTZXJ2aWNlLCBDb25maXJtYXRpb25TZXJ2aWNlLCBQZXJtaXNzaW9uU3RvcmUsIERhdGFTdG9yZVNlcnZpY2UsIE5hdmlnYXRpb25BbGVydFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlU2V0dGluZ3NNb2R1bGUgeyB9XHJcbiJdfQ==