import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormioModule } from '@formio/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DxListModule } from 'devextreme-angular';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { PanelModule } from 'primeng/panel';
import { TreeSelectModule } from 'primeng/treeselect';
import { DirectivesModule } from './@core/directives/directives.module';
import { MaterialUIModule } from './@core/material-ui/material-ui.module';
import { SharedPipesModule } from './@core/pipes/shared-pipes.module';
import { PrimengModule } from './@core/primeng.module';
import { AlertService } from './@core/services/alert.service';
import { AuthService } from './@core/services/auth.service';
import { AuthStore } from './@core/services/auth.store';
import { AlertModule } from './@shared/alert/alert.module';
import { GridListModule } from './@shared/grid-list/grid-list.module';
import { registerDateRangeComponent } from './page-builder/page-builder-add/date-Range/dateRange-wrapper.formio';
import { registerBasicFileUploadComponent } from './page-builder/page-builder-add/file-upload-basic/file-upload-basic.formio';
import { registerFileUploadComponent } from './page-builder/page-builder-add/file-upload-wrapper/file-upload-wrapper.formio';
import { registerGlobalSearchComponent } from './page-builder/page-builder-add/global-search-wrapper/global-search-wrapper.formio';
import { registerPopupComponent } from './page-builder/page-builder-add/popup-wrapper/popup-wrapper.formio';
import { registerRatingComponent } from './page-builder/page-builder-add/rating-wrapper/rating-wrapper.formio';
import { PageBuilderComponent } from './page-builder/page-builder.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { PageBuilderViewComponent } from './page-builder/page-builder-view/page-builder-view.component';
import { PageBuilderVersionComponent } from './page-builder/page-builder-version/page-builder-version.component';
import * as i0 from "@angular/core";
export class PicsPagebuilderModule {
    constructor(injector) {
        registerPopupComponent(injector);
        registerDateRangeComponent(injector);
        registerRatingComponent(injector);
        registerFileUploadComponent(injector);
        registerGlobalSearchComponent(injector);
        registerBasicFileUploadComponent(injector);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsPagebuilderModule, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: PicsPagebuilderModule, declarations: [PageBuilderComponent,
            PageBuilderViewComponent,
            PageBuilderVersionComponent], imports: [CommonModule,
            PrimengModule,
            NgbModule,
            FormioModule,
            FormsModule,
            ReactiveFormsModule,
            MaterialUIModule,
            DxListModule,
            SharedPipesModule,
            GridListModule,
            DirectivesModule,
            PanelModule,
            TreeSelectModule,
            DragDropModule,
            AutoCompleteModule,
            AlertModule], exports: [PageBuilderComponent, PageBuilderViewComponent,
            PageBuilderVersionComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsPagebuilderModule, providers: [
            {
                provide: STEPPER_GLOBAL_OPTIONS,
                useValue: { displayDefaultIndicatorType: false }
            },
            AlertService,
            AuthService,
            HttpClient,
            AuthStore,
        ], imports: [CommonModule,
            PrimengModule,
            NgbModule,
            FormioModule,
            FormsModule,
            ReactiveFormsModule,
            MaterialUIModule,
            DxListModule,
            SharedPipesModule,
            GridListModule,
            DirectivesModule,
            PanelModule,
            TreeSelectModule,
            DragDropModule,
            AutoCompleteModule,
            AlertModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsPagebuilderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PageBuilderComponent,
                        PageBuilderViewComponent,
                        PageBuilderVersionComponent
                    ],
                    imports: [
                        CommonModule,
                        PrimengModule,
                        NgbModule,
                        FormioModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MaterialUIModule,
                        DxListModule,
                        SharedPipesModule,
                        GridListModule,
                        DirectivesModule,
                        PanelModule,
                        TreeSelectModule,
                        DragDropModule,
                        AutoCompleteModule,
                        AlertModule
                    ],
                    exports: [PageBuilderComponent, PageBuilderViewComponent,
                        PageBuilderVersionComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
                    providers: [
                        {
                            provide: STEPPER_GLOBAL_OPTIONS,
                            useValue: { displayDefaultIndicatorType: false }
                        },
                        AlertService,
                        AuthService,
                        HttpClient,
                        AuthStore,
                    ],
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljcy1wYWdlYnVpbGRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9wYWdlLWJ1aWxkZXIvc3JjL2xpYi9waWNzLXBhZ2VidWlsZGVyL3BpY3MtcGFnZWJ1aWxkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxzQkFBc0IsRUFBWSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDakgsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDOUgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFDN0gsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0ZBQW9GLENBQUM7QUFDbkksT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDNUcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDL0csT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDeEcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7O0FBMENqSCxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDLFlBQVksUUFBa0I7UUFDNUIsc0JBQXNCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsMkJBQTJCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEMsNkJBQTZCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsZ0NBQWdDLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQzt3R0FSVSxxQkFBcUI7eUdBQXJCLHFCQUFxQixpQkF2QzlCLG9CQUFvQjtZQUNwQix3QkFBd0I7WUFDeEIsMkJBQTJCLGFBRzNCLFlBQVk7WUFDWixhQUFhO1lBQ2IsU0FBUztZQUNULFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsV0FBVztZQUNYLGdCQUFnQjtZQUNoQixjQUFjO1lBQ2Qsa0JBQWtCO1lBQ2xCLFdBQVcsYUFJVixvQkFBb0IsRUFBQyx3QkFBd0I7WUFDNUMsMkJBQTJCO3lHQWNwQixxQkFBcUIsYUFackI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsc0JBQXNCO2dCQUMvQixRQUFRLEVBQUUsRUFBRSwyQkFBMkIsRUFBRSxLQUFLLEVBQUU7YUFDakQ7WUFDRCxZQUFZO1lBQ1osV0FBVztZQUNYLFVBQVU7WUFDVixTQUFTO1NBRVYsWUFoQ0MsWUFBWTtZQUNaLGFBQWE7WUFDYixTQUFTO1lBQ1QsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsZ0JBQWdCO1lBQ2hCLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsY0FBYztZQUNkLGdCQUFnQjtZQUNoQixXQUFXO1lBQ1gsZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsV0FBVzs7NEZBbUJGLHFCQUFxQjtrQkF6Q2pDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLG9CQUFvQjt3QkFDcEIsd0JBQXdCO3dCQUN4QiwyQkFBMkI7cUJBQzVCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsU0FBUzt3QkFDVCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLFlBQVk7d0JBQ1osaUJBQWlCO3dCQUNqQixjQUFjO3dCQUNkLGdCQUFnQjt3QkFDaEIsV0FBVzt3QkFDWCxnQkFBZ0I7d0JBQ2hCLGNBQWM7d0JBQ2Qsa0JBQWtCO3dCQUNsQixXQUFXO3FCQUVaO29CQUNELE9BQU8sRUFDTCxDQUFDLG9CQUFvQixFQUFDLHdCQUF3Qjt3QkFDNUMsMkJBQTJCLENBQUM7b0JBQ2hDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixFQUFFLGdCQUFnQixDQUFDO29CQUNuRCxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLHNCQUFzQjs0QkFDL0IsUUFBUSxFQUFFLEVBQUUsMkJBQTJCLEVBQUUsS0FBSyxFQUFFO3lCQUNqRDt3QkFDRCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsVUFBVTt3QkFDVixTQUFTO3FCQUVWO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHJhZ0Ryb3BNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgSW5qZWN0b3IsIE5PX0VSUk9SU19TQ0hFTUEsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBGb3JtaW9Nb2R1bGUgfSBmcm9tICdAZm9ybWlvL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IER4TGlzdE1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhcic7XHJcbmltcG9ydCB7IEF1dG9Db21wbGV0ZU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYXV0b2NvbXBsZXRlJztcclxuaW1wb3J0IHsgUGFuZWxNb2R1bGUgfSBmcm9tICdwcmltZW5nL3BhbmVsJztcclxuaW1wb3J0IHsgVHJlZVNlbGVjdE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvdHJlZXNlbGVjdCc7XHJcbmltcG9ydCB7IERpcmVjdGl2ZXNNb2R1bGUgfSBmcm9tICcuL0Bjb3JlL2RpcmVjdGl2ZXMvZGlyZWN0aXZlcy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNYXRlcmlhbFVJTW9kdWxlIH0gZnJvbSAnLi9AY29yZS9tYXRlcmlhbC11aS9tYXRlcmlhbC11aS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTaGFyZWRQaXBlc01vZHVsZSB9IGZyb20gJy4vQGNvcmUvcGlwZXMvc2hhcmVkLXBpcGVzLm1vZHVsZSc7XHJcbmltcG9ydCB7IFByaW1lbmdNb2R1bGUgfSBmcm9tICcuL0Bjb3JlL3ByaW1lbmcubW9kdWxlJztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi9AY29yZS9zZXJ2aWNlcy9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL0Bjb3JlL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhTdG9yZSB9IGZyb20gJy4vQGNvcmUvc2VydmljZXMvYXV0aC5zdG9yZSc7XHJcbmltcG9ydCB7IEFsZXJ0TW9kdWxlIH0gZnJvbSAnLi9Ac2hhcmVkL2FsZXJ0L2FsZXJ0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IEdyaWRMaXN0TW9kdWxlIH0gZnJvbSAnLi9Ac2hhcmVkL2dyaWQtbGlzdC9ncmlkLWxpc3QubW9kdWxlJztcclxuaW1wb3J0IHsgcmVnaXN0ZXJEYXRlUmFuZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UtYnVpbGRlci9wYWdlLWJ1aWxkZXItYWRkL2RhdGUtUmFuZ2UvZGF0ZVJhbmdlLXdyYXBwZXIuZm9ybWlvJztcclxuaW1wb3J0IHsgcmVnaXN0ZXJCYXNpY0ZpbGVVcGxvYWRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UtYnVpbGRlci9wYWdlLWJ1aWxkZXItYWRkL2ZpbGUtdXBsb2FkLWJhc2ljL2ZpbGUtdXBsb2FkLWJhc2ljLmZvcm1pbyc7XHJcbmltcG9ydCB7IHJlZ2lzdGVyRmlsZVVwbG9hZENvbXBvbmVudCB9IGZyb20gJy4vcGFnZS1idWlsZGVyL3BhZ2UtYnVpbGRlci1hZGQvZmlsZS11cGxvYWQtd3JhcHBlci9maWxlLXVwbG9hZC13cmFwcGVyLmZvcm1pbyc7XHJcbmltcG9ydCB7IHJlZ2lzdGVyR2xvYmFsU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLWJ1aWxkZXIvcGFnZS1idWlsZGVyLWFkZC9nbG9iYWwtc2VhcmNoLXdyYXBwZXIvZ2xvYmFsLXNlYXJjaC13cmFwcGVyLmZvcm1pbyc7XHJcbmltcG9ydCB7IHJlZ2lzdGVyUG9wdXBDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UtYnVpbGRlci9wYWdlLWJ1aWxkZXItYWRkL3BvcHVwLXdyYXBwZXIvcG9wdXAtd3JhcHBlci5mb3JtaW8nO1xyXG5pbXBvcnQgeyByZWdpc3RlclJhdGluZ0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZS1idWlsZGVyL3BhZ2UtYnVpbGRlci1hZGQvcmF0aW5nLXdyYXBwZXIvcmF0aW5nLXdyYXBwZXIuZm9ybWlvJztcclxuaW1wb3J0IHsgUGFnZUJ1aWxkZXJDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UtYnVpbGRlci9wYWdlLWJ1aWxkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU1RFUFBFUl9HTE9CQUxfT1BUSU9OUyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zdGVwcGVyJztcclxuaW1wb3J0IHsgUGFnZUJ1aWxkZXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLWJ1aWxkZXIvcGFnZS1idWlsZGVyLXZpZXcvcGFnZS1idWlsZGVyLXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZUJ1aWxkZXJWZXJzaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLWJ1aWxkZXIvcGFnZS1idWlsZGVyLXZlcnNpb24vcGFnZS1idWlsZGVyLXZlcnNpb24uY29tcG9uZW50JztcclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFBhZ2VCdWlsZGVyQ29tcG9uZW50LFxyXG4gICAgUGFnZUJ1aWxkZXJWaWV3Q29tcG9uZW50LFxyXG4gICAgUGFnZUJ1aWxkZXJWZXJzaW9uQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBQcmltZW5nTW9kdWxlLFxyXG4gICAgTmdiTW9kdWxlLFxyXG4gICAgRm9ybWlvTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgTWF0ZXJpYWxVSU1vZHVsZSxcclxuICAgIER4TGlzdE1vZHVsZSxcclxuICAgIFNoYXJlZFBpcGVzTW9kdWxlLFxyXG4gICAgR3JpZExpc3RNb2R1bGUsXHJcbiAgICBEaXJlY3RpdmVzTW9kdWxlLFxyXG4gICAgUGFuZWxNb2R1bGUsXHJcbiAgICBUcmVlU2VsZWN0TW9kdWxlLFxyXG4gICAgRHJhZ0Ryb3BNb2R1bGUsXHJcbiAgICBBdXRvQ29tcGxldGVNb2R1bGUsXHJcbiAgICBBbGVydE1vZHVsZVxyXG5cclxuICBdLFxyXG4gIGV4cG9ydHM6XHJcbiAgICBbUGFnZUJ1aWxkZXJDb21wb25lbnQsUGFnZUJ1aWxkZXJWaWV3Q29tcG9uZW50LFxyXG4gICAgICBQYWdlQnVpbGRlclZlcnNpb25Db21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOT19FUlJPUlNfU0NIRU1BXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogU1RFUFBFUl9HTE9CQUxfT1BUSU9OUyxcclxuICAgICAgdXNlVmFsdWU6IHsgZGlzcGxheURlZmF1bHRJbmRpY2F0b3JUeXBlOiBmYWxzZSB9XHJcbiAgICB9LFxyXG4gICAgQWxlcnRTZXJ2aWNlLFxyXG4gICAgQXV0aFNlcnZpY2UsXHJcbiAgICBIdHRwQ2xpZW50LFxyXG4gICAgQXV0aFN0b3JlLFxyXG5cclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGljc1BhZ2VidWlsZGVyTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgIHJlZ2lzdGVyUG9wdXBDb21wb25lbnQoaW5qZWN0b3IpO1xyXG4gICAgcmVnaXN0ZXJEYXRlUmFuZ2VDb21wb25lbnQoaW5qZWN0b3IpO1xyXG4gICAgcmVnaXN0ZXJSYXRpbmdDb21wb25lbnQoaW5qZWN0b3IpO1xyXG4gICAgcmVnaXN0ZXJGaWxlVXBsb2FkQ29tcG9uZW50KGluamVjdG9yKTtcclxuICAgIHJlZ2lzdGVyR2xvYmFsU2VhcmNoQ29tcG9uZW50KGluamVjdG9yKTtcclxuICAgIHJlZ2lzdGVyQmFzaWNGaWxlVXBsb2FkQ29tcG9uZW50KGluamVjdG9yKTtcclxuICB9XHJcbn1cclxuIl19