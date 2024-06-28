import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { FormioModule } from '@formio/angular';
import { PagebuilderRoutingModule } from './page-builder-routing.component';
import { PageBuilderAddComponent } from './page-builder.component';
import { AlertService } from './pics-pagebuilder/@core/services/alert.service';
import { AuthService } from './pics-pagebuilder/@core/services/auth.service';
import { AuthStore } from './pics-pagebuilder/@core/services/auth.store';
import { GridListModule } from './pics-pagebuilder/@shared/grid-list/grid-list.module';
import { PicsPagebuilderModule } from './pics-pagebuilder/pics-pagebuilder.module';
import * as i0 from "@angular/core";
export class CardiPageBuilderModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardiPageBuilderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: CardiPageBuilderModule, declarations: [PageBuilderAddComponent], imports: [PicsPagebuilderModule,
            PagebuilderRoutingModule,
            GridListModule,
            FormioModule], exports: [PageBuilderAddComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardiPageBuilderModule, providers: [
            {
                provide: STEPPER_GLOBAL_OPTIONS,
                useValue: { displayDefaultIndicatorType: false }
            },
            AlertService,
            AuthService,
            HttpClient,
            AuthStore
        ], imports: [PicsPagebuilderModule,
            PagebuilderRoutingModule,
            GridListModule,
            FormioModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardiPageBuilderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PageBuilderAddComponent,
                    ],
                    imports: [
                        PicsPagebuilderModule,
                        PagebuilderRoutingModule,
                        GridListModule,
                        FormioModule
                    ],
                    exports: [
                        PageBuilderAddComponent,
                    ],
                    providers: [
                        {
                            provide: STEPPER_GLOBAL_OPTIONS,
                            useValue: { displayDefaultIndicatorType: false }
                        },
                        AlertService,
                        AuthService,
                        HttpClient,
                        AuthStore
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1idWlsZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL3BhZ2UtYnVpbGRlci9zcmMvbGliL3BhZ2UtYnVpbGRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDN0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUN2RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7QUE0Qm5GLE1BQU0sT0FBTyxzQkFBc0I7d0dBQXRCLHNCQUFzQjt5R0FBdEIsc0JBQXNCLGlCQXhCL0IsdUJBQXVCLGFBR3ZCLHFCQUFxQjtZQUNyQix3QkFBd0I7WUFDeEIsY0FBYztZQUNkLFlBQVksYUFHWix1QkFBdUI7eUdBZWQsc0JBQXNCLGFBYnRCO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLHNCQUFzQjtnQkFDL0IsUUFBUSxFQUFFLEVBQUUsMkJBQTJCLEVBQUUsS0FBSyxFQUFFO2FBQ2pEO1lBQ0QsWUFBWTtZQUNaLFdBQVc7WUFDWCxVQUFVO1lBQ1YsU0FBUztTQUNWLFlBakJDLHFCQUFxQjtZQUNyQix3QkFBd0I7WUFDeEIsY0FBYztZQUNkLFlBQVk7OzRGQWtCSCxzQkFBc0I7a0JBMUJsQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWix1QkFBdUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxxQkFBcUI7d0JBQ3JCLHdCQUF3Qjt3QkFDeEIsY0FBYzt3QkFDZCxZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRTt3QkFDUCx1QkFBdUI7cUJBQ3hCO29CQUNELFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsc0JBQXNCOzRCQUMvQixRQUFRLEVBQUUsRUFBRSwyQkFBMkIsRUFBRSxLQUFLLEVBQUU7eUJBQ2pEO3dCQUNELFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxVQUFVO3dCQUNWLFNBQVM7cUJBQ1Y7b0JBRUQsT0FBTyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsZ0JBQWdCLENBQUM7aUJBQ3BEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU1RFUFBFUl9HTE9CQUxfT1BUSU9OUyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zdGVwcGVyJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTk9fRVJST1JTX1NDSEVNQSwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWlvTW9kdWxlIH0gZnJvbSAnQGZvcm1pby9hbmd1bGFyJztcclxuaW1wb3J0IHsgUGFnZWJ1aWxkZXJSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9wYWdlLWJ1aWxkZXItcm91dGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYWdlQnVpbGRlckFkZENvbXBvbmVudCB9IGZyb20gJy4vcGFnZS1idWlsZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gJy4vcGljcy1wYWdlYnVpbGRlci9AY29yZS9zZXJ2aWNlcy9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL3BpY3MtcGFnZWJ1aWxkZXIvQGNvcmUvc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aFN0b3JlIH0gZnJvbSAnLi9waWNzLXBhZ2VidWlsZGVyL0Bjb3JlL3NlcnZpY2VzL2F1dGguc3RvcmUnO1xyXG5pbXBvcnQgeyBHcmlkTGlzdE1vZHVsZSB9IGZyb20gJy4vcGljcy1wYWdlYnVpbGRlci9Ac2hhcmVkL2dyaWQtbGlzdC9ncmlkLWxpc3QubW9kdWxlJztcclxuaW1wb3J0IHsgUGljc1BhZ2VidWlsZGVyTW9kdWxlIH0gZnJvbSAnLi9waWNzLXBhZ2VidWlsZGVyL3BpY3MtcGFnZWJ1aWxkZXIubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBQYWdlQnVpbGRlckFkZENvbXBvbmVudCxcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIFBpY3NQYWdlYnVpbGRlck1vZHVsZSxcclxuICAgIFBhZ2VidWlsZGVyUm91dGluZ01vZHVsZSxcclxuICAgIEdyaWRMaXN0TW9kdWxlLFxyXG4gICAgRm9ybWlvTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBQYWdlQnVpbGRlckFkZENvbXBvbmVudCxcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBTVEVQUEVSX0dMT0JBTF9PUFRJT05TLFxyXG4gICAgICB1c2VWYWx1ZTogeyBkaXNwbGF5RGVmYXVsdEluZGljYXRvclR5cGU6IGZhbHNlIH1cclxuICAgIH0sXHJcbiAgICBBbGVydFNlcnZpY2UsXHJcbiAgICBBdXRoU2VydmljZSxcclxuICAgIEh0dHBDbGllbnQsXHJcbiAgICBBdXRoU3RvcmVcclxuICBdLFxyXG5cclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTk9fRVJST1JTX1NDSEVNQV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENhcmRpUGFnZUJ1aWxkZXJNb2R1bGUgeyB9XHJcbiJdfQ==