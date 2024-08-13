import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule } from './modules/alert/alert.module';
import { NgxfUploaderModule } from 'ngxf-uploader';
import { PrimengModule } from './modules/primeng.module';
import { FormioModule } from '@formio/angular';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { SpeechRecognitionService } from './@core/service/speech-recognition.service';
import { OCRService } from './@core/service/ocr.service';
import { RbacService } from './@core/service/rbac.service';
import { MicrostrategyService } from './@core/service/microstrategy.service';
import { HttpService } from './@core/service/http.service';
import { AuthService } from './@core/service/auth.service';
import { AuthStore } from './@core/auth/auth.store';
import { AlertService } from './@core/service/alert.service';
import { DynamicsearchService } from './@core/service/dynamicsearch.service';
import { AttachmentsService } from './@core/service/attachments.service';
import { CredentialsService } from './@core/service/credentials.service';
import { LocalService } from './@core/service/local.service';
import { ConfirmationService } from 'primeng/api';
import { PermissionStore } from './@core/permissions/permission.store';
import { DataStoreService } from './@core/service/data-store.service';
import { PageHeaderService } from './@core/service/page-header.service';
import { DynamicTabPageService } from './@core/service/dynamic-tab-page-service';
import { FormioService } from './@core/service/formio.service';
import { OcrValidationService } from './@core/service/ocr-validation.service';
import { ShareDataService } from './@core/service/share-data.service';
import { HttpClient } from '@angular/common/http';
import { DynamicSearchModule } from './dynamic-search/dynamic-search.module';
import { DynmicTabPageModule } from './dynamic-tab-page/dynmic-tab-page.module';
import { SharedPipesModule } from './@core/pipe/shared-pipes.module';
import * as i0 from "@angular/core";
export class PicsDynamicModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsDynamicModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: PicsDynamicModule, imports: [CommonModule, DynamicSearchModule, DynmicTabPageModule, FormioModule, SharedPipesModule, PrimengModule, NgxfUploaderModule, AlertModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsDynamicModule, providers: [
            {
                provide: STEPPER_GLOBAL_OPTIONS,
                useValue: { displayDefaultIndicatorType: false }
            },
            SpeechRecognitionService,
            OCRService,
            RbacService, MicrostrategyService, HttpClient, HttpService,
            AuthService, AuthStore, AlertService, DynamicsearchService,
            AttachmentsService, CredentialsService, LocalService, MicrostrategyService, SpeechRecognitionService,
            ConfirmationService, PermissionStore, DataStoreService, PageHeaderService,
            DynamicTabPageService, FormioService, OcrValidationService, ShareDataService
        ], imports: [CommonModule, DynamicSearchModule, DynmicTabPageModule, FormioModule, SharedPipesModule, PrimengModule, NgxfUploaderModule, AlertModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsDynamicModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CommonModule, DynamicSearchModule, DynmicTabPageModule, FormioModule, SharedPipesModule, PrimengModule, NgxfUploaderModule, AlertModule],
                    providers: [
                        {
                            provide: STEPPER_GLOBAL_OPTIONS,
                            useValue: { displayDefaultIndicatorType: false }
                        },
                        SpeechRecognitionService,
                        OCRService,
                        RbacService, MicrostrategyService, HttpClient, HttpService,
                        AuthService, AuthStore, AlertService, DynamicsearchService,
                        AttachmentsService, CredentialsService, LocalService, MicrostrategyService, SpeechRecognitionService,
                        ConfirmationService, PermissionStore, DataStoreService, PageHeaderService,
                        DynamicTabPageService, FormioService, OcrValidationService, ShareDataService
                    ],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljcy1keW5hbWljLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvcGljcy1keW5hbWljLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVD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QkFDMUU7b0JBQ0QsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsc0JBQXNCLENBQUM7aUJBQ3BEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBbGVydE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9hbGVydC9hbGVydC5tb2R1bGUnO1xuaW1wb3J0IHsgTmd4ZlVwbG9hZGVyTW9kdWxlIH0gZnJvbSAnbmd4Zi11cGxvYWRlcic7XG5pbXBvcnQgeyBQcmltZW5nTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL3ByaW1lbmcubW9kdWxlJztcbmltcG9ydCB7IEZvcm1pb01vZHVsZSB9IGZyb20gJ0Bmb3JtaW8vYW5ndWxhcic7XG5pbXBvcnQgeyBTVEVQUEVSX0dMT0JBTF9PUFRJT05TIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3N0ZXBwZXInO1xuaW1wb3J0IHsgU3BlZWNoUmVjb2duaXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9AY29yZS9zZXJ2aWNlL3NwZWVjaC1yZWNvZ25pdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE9DUlNlcnZpY2UgfSBmcm9tICcuL0Bjb3JlL3NlcnZpY2Uvb2NyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmJhY1NlcnZpY2UgfSBmcm9tICcuL0Bjb3JlL3NlcnZpY2UvcmJhYy5zZXJ2aWNlJztcbmltcG9ydCB7IE1pY3Jvc3RyYXRlZ3lTZXJ2aWNlIH0gZnJvbSAnLi9AY29yZS9zZXJ2aWNlL21pY3Jvc3RyYXRlZ3kuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vQGNvcmUvc2VydmljZS9odHRwLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL0Bjb3JlL3NlcnZpY2UvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTdG9yZSB9IGZyb20gJy4vQGNvcmUvYXV0aC9hdXRoLnN0b3JlJztcbmltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gJy4vQGNvcmUvc2VydmljZS9hbGVydC5zZXJ2aWNlJztcbmltcG9ydCB7IER5bmFtaWNzZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi9AY29yZS9zZXJ2aWNlL2R5bmFtaWNzZWFyY2guc2VydmljZSc7XG5pbXBvcnQgeyBBdHRhY2htZW50c1NlcnZpY2UgfSBmcm9tICcuL0Bjb3JlL3NlcnZpY2UvYXR0YWNobWVudHMuc2VydmljZSc7XG5pbXBvcnQgeyBDcmVkZW50aWFsc1NlcnZpY2UgfSBmcm9tICcuL0Bjb3JlL3NlcnZpY2UvY3JlZGVudGlhbHMuc2VydmljZSc7XG5pbXBvcnQgeyBMb2NhbFNlcnZpY2UgfSBmcm9tICcuL0Bjb3JlL3NlcnZpY2UvbG9jYWwuc2VydmljZSc7XG5pbXBvcnQgeyBDb25maXJtYXRpb25TZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgUGVybWlzc2lvblN0b3JlIH0gZnJvbSAnLi9AY29yZS9wZXJtaXNzaW9ucy9wZXJtaXNzaW9uLnN0b3JlJztcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuL0Bjb3JlL3NlcnZpY2UvZGF0YS1zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VIZWFkZXJTZXJ2aWNlIH0gZnJvbSAnLi9AY29yZS9zZXJ2aWNlL3BhZ2UtaGVhZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRHluYW1pY1RhYlBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9AY29yZS9zZXJ2aWNlL2R5bmFtaWMtdGFiLXBhZ2Utc2VydmljZSc7XG5pbXBvcnQgeyBGb3JtaW9TZXJ2aWNlIH0gZnJvbSAnLi9AY29yZS9zZXJ2aWNlL2Zvcm1pby5zZXJ2aWNlJztcbmltcG9ydCB7IE9jclZhbGlkYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9AY29yZS9zZXJ2aWNlL29jci12YWxpZGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2hhcmVEYXRhU2VydmljZSB9IGZyb20gJy4vQGNvcmUvc2VydmljZS9zaGFyZS1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IER5bmFtaWNTZWFyY2hNb2R1bGUgfSBmcm9tICcuL2R5bmFtaWMtc2VhcmNoL2R5bmFtaWMtc2VhcmNoLm1vZHVsZSc7XG5pbXBvcnQgeyBEeW5taWNUYWJQYWdlTW9kdWxlIH0gZnJvbSAnLi9keW5hbWljLXRhYi1wYWdlL2R5bm1pYy10YWItcGFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgU2hhcmVkUGlwZXNNb2R1bGUgfSBmcm9tICcuL0Bjb3JlL3BpcGUvc2hhcmVkLXBpcGVzLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIER5bmFtaWNTZWFyY2hNb2R1bGUsRHlubWljVGFiUGFnZU1vZHVsZSxGb3JtaW9Nb2R1bGUsU2hhcmVkUGlwZXNNb2R1bGUsUHJpbWVuZ01vZHVsZSwgTmd4ZlVwbG9hZGVyTW9kdWxlLEFsZXJ0TW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogU1RFUFBFUl9HTE9CQUxfT1BUSU9OUyxcbiAgICAgIHVzZVZhbHVlOiB7IGRpc3BsYXlEZWZhdWx0SW5kaWNhdG9yVHlwZTogZmFsc2UgfVxuICAgIH0sXG4gICAgU3BlZWNoUmVjb2duaXRpb25TZXJ2aWNlLFxuICAgIE9DUlNlcnZpY2UsXG4gICAgUmJhY1NlcnZpY2UsIE1pY3Jvc3RyYXRlZ3lTZXJ2aWNlLCBIdHRwQ2xpZW50LCBIdHRwU2VydmljZSxcbiAgICBBdXRoU2VydmljZSxBdXRoU3RvcmUsIEFsZXJ0U2VydmljZSwgRHluYW1pY3NlYXJjaFNlcnZpY2UsXG4gICAgQXR0YWNobWVudHNTZXJ2aWNlLENyZWRlbnRpYWxzU2VydmljZSxMb2NhbFNlcnZpY2UsTWljcm9zdHJhdGVneVNlcnZpY2UsU3BlZWNoUmVjb2duaXRpb25TZXJ2aWNlLFxuICAgIENvbmZpcm1hdGlvblNlcnZpY2UsIFBlcm1pc3Npb25TdG9yZSwgRGF0YVN0b3JlU2VydmljZSxQYWdlSGVhZGVyU2VydmljZSxcbiAgICBEeW5hbWljVGFiUGFnZVNlcnZpY2UsRm9ybWlvU2VydmljZSxPY3JWYWxpZGF0aW9uU2VydmljZSxTaGFyZURhdGFTZXJ2aWNlXG4gIF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BXSxcbn0pXG5leHBvcnQgY2xhc3MgUGljc0R5bmFtaWNNb2R1bGUgeyB9XG4iXX0=