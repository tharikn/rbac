import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxCheckBoxModule, DxDataGridModule, DxSelectBoxModule } from 'devextreme-angular';
import { DynamicModule } from 'ng-dynamic-component';
import { NgxMaskModule } from 'ngx-mask';
import { NgxfUploaderModule } from 'ngxf-uploader';
// import { OcrValidationModule } from '../ocr-validation/ocr-validation.module';
// import { registerBasicFileUploadComponent } from '../page-builder/page-builder/page-builder-add/file-upload-basic/file-upload-basic.formio';
// import { registerFileUploadComponent } from '../page-builder/page-builder/page-builder-add/file-upload-wrapper/file-upload-wrapper.formio';
// import { registerGlobalSearchComponent } from '../page-builder/page-builder/page-builder-add/global-search-wrapper/global-search-wrapper.formio';
// import { registerPicsSelectComponent } from '../page-builder/page-builder/page-builder-add/pics-select-wrapper/pics-select-wrapper.formio';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';
import { DynamicTabComponent } from './dynamic-tab/dynamic-tab.component';
import { DynamicTabPageRoutingModule } from './dynmic-tab-page.routing.module';
import { CustomTagsService, FormioModule } from '@formio/angular';
import { PrimengModule } from '../modules/primeng.module';
import { MaterialUIModule } from '../modules/material-ui/material-ui.module';
import { SharedPipesModule } from '../@core/pipe/shared-pipes.module';
import { SpeechRecognitionService } from '../@core/service/speech-recognition.service';
import { OCRService } from '../@core/service/ocr.service';
import { PageBuilderViewComponent } from '../modules/page-builder-view/page-builder-view.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-mask";
export class DynmicTabPageModule {
    constructor(injector) {
        // registerDateRangeComponent(injector);
        // registerFileUploadComponent(injector);
        // registerGlobalSearchComponent(injector);
        // registerPicsSelectComponent(injector);
        // registerBasicFileUploadComponent(injector);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynmicTabPageModule, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DynmicTabPageModule, declarations: [DynamicPageComponent, DynamicTabComponent, PageBuilderViewComponent], imports: [CommonModule,
            FormioModule,
            FormsModule,
            ReactiveFormsModule,
            DynamicTabPageRoutingModule,
            DxDataGridModule,
            DxSelectBoxModule,
            DxCheckBoxModule,
            CommonModule,
            PrimengModule,
            MaterialUIModule,
            SharedPipesModule,
            FormsModule,
            ReactiveFormsModule,
            NgxfUploaderModule, i1.NgxMaskModule, 
            // OcrValidationModule,
            DynamicModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynmicTabPageModule, providers: [
            {
                provide: STEPPER_GLOBAL_OPTIONS,
                useValue: { displayDefaultIndicatorType: false }
            },
            SpeechRecognitionService,
            OCRService,
            CustomTagsService
        ], imports: [CommonModule,
            FormioModule,
            FormsModule,
            ReactiveFormsModule,
            DynamicTabPageRoutingModule,
            DxDataGridModule,
            DxSelectBoxModule,
            DxCheckBoxModule,
            CommonModule,
            PrimengModule,
            MaterialUIModule,
            SharedPipesModule,
            FormsModule,
            ReactiveFormsModule,
            NgxfUploaderModule,
            NgxMaskModule.forRoot(),
            // OcrValidationModule,
            DynamicModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynmicTabPageModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DynamicPageComponent, DynamicTabComponent, PageBuilderViewComponent],
                    imports: [
                        CommonModule,
                        FormioModule,
                        FormsModule,
                        ReactiveFormsModule,
                        DynamicTabPageRoutingModule,
                        DxDataGridModule,
                        DxSelectBoxModule,
                        DxCheckBoxModule,
                        CommonModule,
                        PrimengModule,
                        MaterialUIModule,
                        SharedPipesModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgxfUploaderModule,
                        NgxMaskModule.forRoot(),
                        // OcrValidationModule,
                        DynamicModule,
                    ],
                    providers: [
                        {
                            provide: STEPPER_GLOBAL_OPTIONS,
                            useValue: { displayDefaultIndicatorType: false }
                        },
                        SpeechRecognitionService,
                        OCRService,
                        CustomTagsService
                    ],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHlubWljLXRhYi1wYWdlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvZHluYW1pYy10YWItcGFnZS9keW5taWMtdGFiLXBhZ2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQVksUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsaUZBQWlGO0FBQ2pGLCtJQUErSTtBQUMvSSw4SUFBOEk7QUFDOUksb0pBQW9KO0FBQ3BKLDhJQUE4STtBQUM5SSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUMsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQzs7O0FBbUNwRyxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLFlBQVksUUFBa0I7UUFDNUIsd0NBQXdDO1FBQ3hDLHlDQUF5QztRQUN6QywyQ0FBMkM7UUFDM0MseUNBQXlDO1FBQ3pDLDhDQUE4QztJQUNoRCxDQUFDO3dHQVBVLG1CQUFtQjt5R0FBbkIsbUJBQW1CLGlCQWhDYixvQkFBb0IsRUFBRSxtQkFBbUIsRUFBQyx3QkFBd0IsYUFFN0UsWUFBWTtZQUNaLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLDJCQUEyQjtZQUMzQixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIsV0FBVztZQUNYLG1CQUFtQjtZQUNuQixrQkFBa0I7WUFFbEIsdUJBQXVCO1lBQ3ZCLGFBQWE7eUdBYVIsbUJBQW1CLGFBWGpCO1lBQ1A7Z0JBQ0ksT0FBTyxFQUFFLHNCQUFzQjtnQkFDL0IsUUFBUSxFQUFFLEVBQUUsMkJBQTJCLEVBQUUsS0FBSyxFQUFFO2FBQ25EO1lBQ0Qsd0JBQXdCO1lBQ3hCLFVBQVU7WUFDVixpQkFBaUI7U0FDcEIsWUEzQkcsWUFBWTtZQUNaLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLDJCQUEyQjtZQUMzQixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIsV0FBVztZQUNYLG1CQUFtQjtZQUNuQixrQkFBa0I7WUFDbEIsYUFBYSxDQUFDLE9BQU8sRUFBRTtZQUN2Qix1QkFBdUI7WUFDdkIsYUFBYTs7NEZBYVIsbUJBQW1CO2tCQWpDL0IsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBQyx3QkFBd0IsQ0FBQztvQkFDbEYsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsMkJBQTJCO3dCQUMzQixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsZ0JBQWdCO3dCQUNoQixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLGFBQWEsQ0FBQyxPQUFPLEVBQUU7d0JBQ3ZCLHVCQUF1Qjt3QkFDdkIsYUFBYTtxQkFDaEI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNQOzRCQUNJLE9BQU8sRUFBRSxzQkFBc0I7NEJBQy9CLFFBQVEsRUFBRSxFQUFFLDJCQUEyQixFQUFFLEtBQUssRUFBRTt5QkFDbkQ7d0JBQ0Qsd0JBQXdCO3dCQUN4QixVQUFVO3dCQUNWLGlCQUFpQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsc0JBQXNCLENBQUM7aUJBQ3REIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU1RFUFBFUl9HTE9CQUxfT1BUSU9OUyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zdGVwcGVyJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgSW5qZWN0b3IsIE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBEeENoZWNrQm94TW9kdWxlLCBEeERhdGFHcmlkTW9kdWxlLCBEeFNlbGVjdEJveE1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhcic7XHJcbmltcG9ydCB7IER5bmFtaWNNb2R1bGUgfSBmcm9tICduZy1keW5hbWljLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5neE1hc2tNb2R1bGUgfSBmcm9tICduZ3gtbWFzayc7XHJcbmltcG9ydCB7IE5neGZVcGxvYWRlck1vZHVsZSB9IGZyb20gJ25neGYtdXBsb2FkZXInO1xyXG4vLyBpbXBvcnQgeyBPY3JWYWxpZGF0aW9uTW9kdWxlIH0gZnJvbSAnLi4vb2NyLXZhbGlkYXRpb24vb2NyLXZhbGlkYXRpb24ubW9kdWxlJztcclxuLy8gaW1wb3J0IHsgcmVnaXN0ZXJCYXNpY0ZpbGVVcGxvYWRDb21wb25lbnQgfSBmcm9tICcuLi9wYWdlLWJ1aWxkZXIvcGFnZS1idWlsZGVyL3BhZ2UtYnVpbGRlci1hZGQvZmlsZS11cGxvYWQtYmFzaWMvZmlsZS11cGxvYWQtYmFzaWMuZm9ybWlvJztcclxuLy8gaW1wb3J0IHsgcmVnaXN0ZXJGaWxlVXBsb2FkQ29tcG9uZW50IH0gZnJvbSAnLi4vcGFnZS1idWlsZGVyL3BhZ2UtYnVpbGRlci9wYWdlLWJ1aWxkZXItYWRkL2ZpbGUtdXBsb2FkLXdyYXBwZXIvZmlsZS11cGxvYWQtd3JhcHBlci5mb3JtaW8nO1xyXG4vLyBpbXBvcnQgeyByZWdpc3Rlckdsb2JhbFNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4uL3BhZ2UtYnVpbGRlci9wYWdlLWJ1aWxkZXIvcGFnZS1idWlsZGVyLWFkZC9nbG9iYWwtc2VhcmNoLXdyYXBwZXIvZ2xvYmFsLXNlYXJjaC13cmFwcGVyLmZvcm1pbyc7XHJcbi8vIGltcG9ydCB7IHJlZ2lzdGVyUGljc1NlbGVjdENvbXBvbmVudCB9IGZyb20gJy4uL3BhZ2UtYnVpbGRlci9wYWdlLWJ1aWxkZXIvcGFnZS1idWlsZGVyLWFkZC9waWNzLXNlbGVjdC13cmFwcGVyL3BpY3Mtc2VsZWN0LXdyYXBwZXIuZm9ybWlvJztcclxuaW1wb3J0IHsgRHluYW1pY1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL2R5bmFtaWMtcGFnZS9keW5hbWljLXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHluYW1pY1RhYkNvbXBvbmVudCB9IGZyb20gJy4vZHluYW1pYy10YWIvZHluYW1pYy10YWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHluYW1pY1RhYlBhZ2VSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9keW5taWMtdGFiLXBhZ2Uucm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBDdXN0b21UYWdzU2VydmljZSxGb3JtaW9Nb2R1bGUgfSBmcm9tICdAZm9ybWlvL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBQcmltZW5nTW9kdWxlIH0gZnJvbSAnLi4vbW9kdWxlcy9wcmltZW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IE1hdGVyaWFsVUlNb2R1bGUgfSBmcm9tICcuLi9tb2R1bGVzL21hdGVyaWFsLXVpL21hdGVyaWFsLXVpLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNoYXJlZFBpcGVzTW9kdWxlIH0gZnJvbSAnLi4vQGNvcmUvcGlwZS9zaGFyZWQtcGlwZXMubW9kdWxlJztcclxuaW1wb3J0IHsgU3BlZWNoUmVjb2duaXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vQGNvcmUvc2VydmljZS9zcGVlY2gtcmVjb2duaXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE9DUlNlcnZpY2UgfSBmcm9tICcuLi9AY29yZS9zZXJ2aWNlL29jci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGFnZUJ1aWxkZXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vbW9kdWxlcy9wYWdlLWJ1aWxkZXItdmlldy9wYWdlLWJ1aWxkZXItdmlldy5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW0R5bmFtaWNQYWdlQ29tcG9uZW50LCBEeW5hbWljVGFiQ29tcG9uZW50LFBhZ2VCdWlsZGVyVmlld0NvbXBvbmVudF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIEZvcm1pb01vZHVsZSxcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICAgIER5bmFtaWNUYWJQYWdlUm91dGluZ01vZHVsZSxcclxuICAgICAgICBEeERhdGFHcmlkTW9kdWxlLFxyXG4gICAgICAgIER4U2VsZWN0Qm94TW9kdWxlLFxyXG4gICAgICAgIER4Q2hlY2tCb3hNb2R1bGUsXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIFByaW1lbmdNb2R1bGUsXHJcbiAgICAgICAgTWF0ZXJpYWxVSU1vZHVsZSxcclxuICAgICAgICBTaGFyZWRQaXBlc01vZHVsZSxcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE5neGZVcGxvYWRlck1vZHVsZSxcclxuICAgICAgICBOZ3hNYXNrTW9kdWxlLmZvclJvb3QoKSxcclxuICAgICAgICAvLyBPY3JWYWxpZGF0aW9uTW9kdWxlLFxyXG4gICAgICAgIER5bmFtaWNNb2R1bGUsXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBTVEVQUEVSX0dMT0JBTF9PUFRJT05TLFxyXG4gICAgICAgICAgICB1c2VWYWx1ZTogeyBkaXNwbGF5RGVmYXVsdEluZGljYXRvclR5cGU6IGZhbHNlIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFNwZWVjaFJlY29nbml0aW9uU2VydmljZSxcclxuICAgICAgICBPQ1JTZXJ2aWNlLFxyXG4gICAgICAgIEN1c3RvbVRhZ3NTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUEsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5taWNUYWJQYWdlTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgIC8vIHJlZ2lzdGVyRGF0ZVJhbmdlQ29tcG9uZW50KGluamVjdG9yKTtcclxuICAgIC8vIHJlZ2lzdGVyRmlsZVVwbG9hZENvbXBvbmVudChpbmplY3Rvcik7XHJcbiAgICAvLyByZWdpc3Rlckdsb2JhbFNlYXJjaENvbXBvbmVudChpbmplY3Rvcik7XHJcbiAgICAvLyByZWdpc3RlclBpY3NTZWxlY3RDb21wb25lbnQoaW5qZWN0b3IpO1xyXG4gICAgLy8gcmVnaXN0ZXJCYXNpY0ZpbGVVcGxvYWRDb21wb25lbnQoaW5qZWN0b3IpO1xyXG4gIH1cclxufVxyXG4iXX0=