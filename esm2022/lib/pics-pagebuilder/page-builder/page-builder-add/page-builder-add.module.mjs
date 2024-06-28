import { DragDropModule } from '@angular/cdk/drag-drop';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormioModule } from '@formio/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DxListModule } from 'devextreme-angular';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { PanelModule } from 'primeng/panel';
import { TreeSelectModule } from 'primeng/treeselect';
import { DirectivesModule } from '../../@core/directives/directives.module';
import { MaterialUIModule } from '../../@core/material-ui/material-ui.module';
import { SharedPipesModule } from '../../@core/pipes/shared-pipes.module';
import { PrimengModule } from '../../@core/primeng.module';
import { GridListModule } from '../../@shared/grid-list/grid-list.module';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { DateRangeWrapperComponent } from './date-Range/dateRange-wrapper.component';
import { registerDateRangeComponent } from './date-Range/dateRange-wrapper.formio';
import { DesignPageComponent } from './design-page/design-page.component';
import { FileUploadBasicComponent } from './file-upload-basic/file-upload-basic.component';
import { registerBasicFileUploadComponent } from './file-upload-basic/file-upload-basic.formio';
import { FileUploadWrapperComponent } from './file-upload-wrapper/file-upload-wrapper.component';
import { registerFileUploadComponent } from './file-upload-wrapper/file-upload-wrapper.formio';
import { GlobalSearchWrapperComponent } from './global-search-wrapper/global-search-wrapper.component';
import { registerGlobalSearchComponent } from './global-search-wrapper/global-search-wrapper.formio';
import { GridConfigComponent } from './grid-config/grid-config.component';
import { PageBuilderAddRoutingModule } from './page-builder-add-routing.module';
import { PageBuilderAddComponent } from './page-builder-add.component';
import { PopupWrapperComponent } from './popup-wrapper/popup-wrapper.component';
import { registerPopupComponent } from './popup-wrapper/popup-wrapper.formio';
import { QueryParamsComponent } from './query-params/query-params.component';
import { RatingWrapperComponent } from './rating-wrapper/rating-wrapper.component';
import { registerRatingComponent } from './rating-wrapper/rating-wrapper.formio';
import { RibbonDesignPageComponent } from './ribbon-design-page/ribbon-design-page.component';
import { RibbonTabConfigComponent } from './ribbon-tab-config/ribbon-tab-config.component';
import { RoutingConfigComponent } from './routing-config/routing-config.component';
import { SearchParamsComponent } from './search-params/search-params.component';
import { TabConfigComponent } from './tab-config/tab-config.component';
import * as i0 from "@angular/core";
export class PageBuilderAddModule {
    constructor(injector) {
        registerPopupComponent(injector);
        registerDateRangeComponent(injector);
        registerRatingComponent(injector);
        registerFileUploadComponent(injector);
        registerGlobalSearchComponent(injector);
        registerBasicFileUploadComponent(injector);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddModule, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddModule, declarations: [PageBuilderAddComponent,
            SearchParamsComponent,
            GridConfigComponent,
            DesignPageComponent,
            QueryParamsComponent,
            PopupWrapperComponent,
            BasicInfoComponent,
            TabConfigComponent,
            DateRangeWrapperComponent,
            RoutingConfigComponent,
            RatingWrapperComponent,
            FileUploadWrapperComponent,
            GlobalSearchWrapperComponent,
            FileUploadBasicComponent,
            RibbonTabConfigComponent,
            RibbonDesignPageComponent], imports: [CommonModule,
            PageBuilderAddRoutingModule,
            NgbModule,
            FormioModule,
            FormsModule,
            ReactiveFormsModule,
            MaterialUIModule,
            DxListModule,
            SharedPipesModule,
            PrimengModule,
            GridListModule,
            DirectivesModule,
            PanelModule,
            TreeSelectModule,
            DragDropModule,
            AutoCompleteModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddModule, providers: [
            {
                provide: STEPPER_GLOBAL_OPTIONS,
                useValue: { displayDefaultIndicatorType: false }
            }
        ], imports: [CommonModule,
            PageBuilderAddRoutingModule,
            NgbModule,
            FormioModule,
            FormsModule,
            ReactiveFormsModule,
            MaterialUIModule,
            DxListModule,
            SharedPipesModule,
            PrimengModule,
            GridListModule,
            DirectivesModule,
            PanelModule,
            TreeSelectModule,
            DragDropModule,
            AutoCompleteModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PageBuilderAddComponent,
                        SearchParamsComponent,
                        GridConfigComponent,
                        DesignPageComponent,
                        QueryParamsComponent,
                        PopupWrapperComponent,
                        BasicInfoComponent,
                        TabConfigComponent,
                        DateRangeWrapperComponent,
                        RoutingConfigComponent,
                        RatingWrapperComponent,
                        FileUploadWrapperComponent,
                        GlobalSearchWrapperComponent,
                        FileUploadBasicComponent,
                        RibbonTabConfigComponent,
                        RibbonDesignPageComponent
                    ],
                    imports: [
                        CommonModule,
                        PageBuilderAddRoutingModule,
                        NgbModule,
                        FormioModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MaterialUIModule,
                        DxListModule,
                        SharedPipesModule,
                        PrimengModule,
                        GridListModule,
                        DirectivesModule,
                        PanelModule,
                        TreeSelectModule,
                        DragDropModule,
                        AutoCompleteModule
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                    providers: [
                        {
                            provide: STEPPER_GLOBAL_OPTIONS,
                            useValue: { displayDefaultIndicatorType: false }
                        }
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1idWlsZGVyLWFkZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9wYWdlLWJ1aWxkZXIvc3JjL2xpYi9waWNzLXBhZ2VidWlsZGVyL3BhZ2UtYnVpbGRlci9wYWdlLWJ1aWxkZXItYWRkL3BhZ2UtYnVpbGRlci1hZGQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFZLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFF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dGVudCI6WyJpbXBvcnQgeyBEcmFnRHJvcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5pbXBvcnQgeyBTVEVQUEVSX0dMT0JBTF9PUFRJT05TIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3N0ZXBwZXInO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBJbmplY3RvciwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZvcm1pb01vZHVsZSB9IGZyb20gJ0Bmb3JtaW8vYW5ndWxhcic7XHJcbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgRHhMaXN0TW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyJztcclxuaW1wb3J0IHsgQXV0b0NvbXBsZXRlTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9hdXRvY29tcGxldGUnO1xyXG5pbXBvcnQgeyBQYW5lbE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcGFuZWwnO1xyXG5pbXBvcnQgeyBUcmVlU2VsZWN0TW9kdWxlIH0gZnJvbSAncHJpbWVuZy90cmVlc2VsZWN0JztcclxuaW1wb3J0IHsgRGlyZWN0aXZlc01vZHVsZSB9IGZyb20gJy4uLy4uL0Bjb3JlL2RpcmVjdGl2ZXMvZGlyZWN0aXZlcy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNYXRlcmlhbFVJTW9kdWxlIH0gZnJvbSAnLi4vLi4vQGNvcmUvbWF0ZXJpYWwtdWkvbWF0ZXJpYWwtdWkubW9kdWxlJztcclxuaW1wb3J0IHsgU2hhcmVkUGlwZXNNb2R1bGUgfSBmcm9tICcuLi8uLi9AY29yZS9waXBlcy9zaGFyZWQtcGlwZXMubW9kdWxlJztcclxuaW1wb3J0IHsgUHJpbWVuZ01vZHVsZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3ByaW1lbmcubW9kdWxlJztcclxuaW1wb3J0IHsgR3JpZExpc3RNb2R1bGUgfSBmcm9tICcuLi8uLi9Ac2hhcmVkL2dyaWQtbGlzdC9ncmlkLWxpc3QubW9kdWxlJztcclxuaW1wb3J0IHsgQmFzaWNJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNpYy1pbmZvL2Jhc2ljLWluZm8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGF0ZVJhbmdlV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1SYW5nZS9kYXRlUmFuZ2Utd3JhcHBlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyByZWdpc3RlckRhdGVSYW5nZUNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1SYW5nZS9kYXRlUmFuZ2Utd3JhcHBlci5mb3JtaW8nO1xyXG5pbXBvcnQgeyBEZXNpZ25QYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9kZXNpZ24tcGFnZS9kZXNpZ24tcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkQmFzaWNDb21wb25lbnQgfSBmcm9tICcuL2ZpbGUtdXBsb2FkLWJhc2ljL2ZpbGUtdXBsb2FkLWJhc2ljLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHJlZ2lzdGVyQmFzaWNGaWxlVXBsb2FkQ29tcG9uZW50IH0gZnJvbSAnLi9maWxlLXVwbG9hZC1iYXNpYy9maWxlLXVwbG9hZC1iYXNpYy5mb3JtaW8nO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vZmlsZS11cGxvYWQtd3JhcHBlci9maWxlLXVwbG9hZC13cmFwcGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHJlZ2lzdGVyRmlsZVVwbG9hZENvbXBvbmVudCB9IGZyb20gJy4vZmlsZS11cGxvYWQtd3JhcHBlci9maWxlLXVwbG9hZC13cmFwcGVyLmZvcm1pbyc7XHJcbmltcG9ydCB7IEdsb2JhbFNlYXJjaFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuL2dsb2JhbC1zZWFyY2gtd3JhcHBlci9nbG9iYWwtc2VhcmNoLXdyYXBwZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgcmVnaXN0ZXJHbG9iYWxTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL2dsb2JhbC1zZWFyY2gtd3JhcHBlci9nbG9iYWwtc2VhcmNoLXdyYXBwZXIuZm9ybWlvJztcclxuaW1wb3J0IHsgR3JpZENvbmZpZ0NvbXBvbmVudCB9IGZyb20gJy4vZ3JpZC1jb25maWcvZ3JpZC1jb25maWcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZUJ1aWxkZXJBZGRSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9wYWdlLWJ1aWxkZXItYWRkLXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgUGFnZUJ1aWxkZXJBZGRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UtYnVpbGRlci1hZGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9wdXBXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9wb3B1cC13cmFwcGVyL3BvcHVwLXdyYXBwZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgcmVnaXN0ZXJQb3B1cENvbXBvbmVudCB9IGZyb20gJy4vcG9wdXAtd3JhcHBlci9wb3B1cC13cmFwcGVyLmZvcm1pbyc7XHJcbmltcG9ydCB7IFF1ZXJ5UGFyYW1zQ29tcG9uZW50IH0gZnJvbSAnLi9xdWVyeS1wYXJhbXMvcXVlcnktcGFyYW1zLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJhdGluZ1dyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuL3JhdGluZy13cmFwcGVyL3JhdGluZy13cmFwcGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHJlZ2lzdGVyUmF0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi9yYXRpbmctd3JhcHBlci9yYXRpbmctd3JhcHBlci5mb3JtaW8nO1xyXG5pbXBvcnQgeyBSaWJib25EZXNpZ25QYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9yaWJib24tZGVzaWduLXBhZ2UvcmliYm9uLWRlc2lnbi1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJpYmJvblRhYkNvbmZpZ0NvbXBvbmVudCB9IGZyb20gJy4vcmliYm9uLXRhYi1jb25maWcvcmliYm9uLXRhYi1jb25maWcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUm91dGluZ0NvbmZpZ0NvbXBvbmVudCB9IGZyb20gJy4vcm91dGluZy1jb25maWcvcm91dGluZy1jb25maWcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VhcmNoUGFyYW1zQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gtcGFyYW1zL3NlYXJjaC1wYXJhbXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFiQ29uZmlnQ29tcG9uZW50IH0gZnJvbSAnLi90YWItY29uZmlnL3RhYi1jb25maWcuY29tcG9uZW50JztcclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIFBhZ2VCdWlsZGVyQWRkQ29tcG9uZW50LFxyXG4gICAgICAgIFNlYXJjaFBhcmFtc0NvbXBvbmVudCxcclxuICAgICAgICBHcmlkQ29uZmlnQ29tcG9uZW50LFxyXG4gICAgICAgIERlc2lnblBhZ2VDb21wb25lbnQsXHJcbiAgICAgICAgUXVlcnlQYXJhbXNDb21wb25lbnQsXHJcbiAgICAgICAgUG9wdXBXcmFwcGVyQ29tcG9uZW50LFxyXG4gICAgICAgIEJhc2ljSW5mb0NvbXBvbmVudCxcclxuICAgICAgICBUYWJDb25maWdDb21wb25lbnQsXHJcbiAgICAgICAgRGF0ZVJhbmdlV3JhcHBlckNvbXBvbmVudCxcclxuICAgICAgICBSb3V0aW5nQ29uZmlnQ29tcG9uZW50LFxyXG4gICAgICAgIFJhdGluZ1dyYXBwZXJDb21wb25lbnQsXHJcbiAgICAgICAgRmlsZVVwbG9hZFdyYXBwZXJDb21wb25lbnQsXHJcbiAgICAgICAgR2xvYmFsU2VhcmNoV3JhcHBlckNvbXBvbmVudCxcclxuICAgICAgICBGaWxlVXBsb2FkQmFzaWNDb21wb25lbnQsXHJcbiAgICAgICAgUmliYm9uVGFiQ29uZmlnQ29tcG9uZW50LFxyXG4gICAgICAgIFJpYmJvbkRlc2lnblBhZ2VDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIFBhZ2VCdWlsZGVyQWRkUm91dGluZ01vZHVsZSxcclxuICAgICAgICBOZ2JNb2R1bGUsXHJcbiAgICAgICAgRm9ybWlvTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgTWF0ZXJpYWxVSU1vZHVsZSxcclxuICAgICAgICBEeExpc3RNb2R1bGUsXHJcbiAgICAgICAgU2hhcmVkUGlwZXNNb2R1bGUsXHJcbiAgICAgICAgUHJpbWVuZ01vZHVsZSxcclxuICAgICAgICBHcmlkTGlzdE1vZHVsZSxcclxuICAgICAgICBEaXJlY3RpdmVzTW9kdWxlLFxyXG4gICAgICAgIFBhbmVsTW9kdWxlLFxyXG4gICAgICAgIFRyZWVTZWxlY3RNb2R1bGUsXHJcbiAgICAgICAgRHJhZ0Ryb3BNb2R1bGUsXHJcbiAgICAgICAgQXV0b0NvbXBsZXRlTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBTVEVQUEVSX0dMT0JBTF9PUFRJT05TLFxyXG4gICAgICAgICAgICB1c2VWYWx1ZTogeyBkaXNwbGF5RGVmYXVsdEluZGljYXRvclR5cGU6IGZhbHNlIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlQnVpbGRlckFkZE1vZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgICAgICByZWdpc3RlclBvcHVwQ29tcG9uZW50KGluamVjdG9yKTtcclxuICAgICAgICByZWdpc3RlckRhdGVSYW5nZUNvbXBvbmVudChpbmplY3Rvcik7XHJcbiAgICAgICAgcmVnaXN0ZXJSYXRpbmdDb21wb25lbnQoaW5qZWN0b3IpO1xyXG4gICAgICAgIHJlZ2lzdGVyRmlsZVVwbG9hZENvbXBvbmVudChpbmplY3Rvcik7XHJcbiAgICAgICAgcmVnaXN0ZXJHbG9iYWxTZWFyY2hDb21wb25lbnQoaW5qZWN0b3IpO1xyXG4gICAgICAgIHJlZ2lzdGVyQmFzaWNGaWxlVXBsb2FkQ29tcG9uZW50KGluamVjdG9yKTtcclxuICAgIH1cclxufVxyXG4iXX0=