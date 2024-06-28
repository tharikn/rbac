import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { DesignPageComponent } from './design-page/design-page.component';
import { GridConfigComponent } from './grid-config/grid-config.component';
import { PageBuilderAddComponent } from './page-builder-add.component';
import { QueryParamsComponent } from './query-params/query-params.component';
import { RibbonDesignPageComponent } from './ribbon-design-page/ribbon-design-page.component';
import { RibbonTabConfigComponent } from './ribbon-tab-config/ribbon-tab-config.component';
import { RoutingConfigComponent } from './routing-config/routing-config.component';
import { SearchParamsComponent } from './search-params/search-params.component';
import { TabConfigComponent } from './tab-config/tab-config.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        component: PageBuilderAddComponent,
        children: [
            {
                path: 'basic-info',
                component: BasicInfoComponent
            },
            {
                path: 'page-design',
                component: DesignPageComponent
            },
            {
                path: 'grid-config',
                component: GridConfigComponent
            },
            {
                path: 'search-params',
                component: SearchParamsComponent
            },
            {
                path: 'grid-field',
                component: QueryParamsComponent
            },
            {
                path: 'tab-config',
                component: TabConfigComponent
            },
            {
                path: 'routing-config',
                component: RoutingConfigComponent
            },
            // {
            //   path: 'ocr-validation',
            //   loadChildren: () => import('../../../ocr-validation/ocr-validation.module').then(m => m.OcrValidationModule)
            // },
            {
                path: 'ribbon-tab-config',
                component: RibbonTabConfigComponent
            },
            {
                path: 'page-ribbon-design',
                component: RibbonDesignPageComponent
            }
        ]
    }
];
export class PageBuilderAddRoutingModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddRoutingModule, imports: [RouterModule.forChild(routes), RouterModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1idWlsZGVyLWFkZC1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL3BhZ2UtYnVpbGRlci9zcmMvbGliL3BpY3MtcGFnZWJ1aWxkZXIvcGFnZS1idWlsZGVyL3BhZ2UtYnVpbGRlci1hZGQvcGFnZS1idWlsZGVyLWFkZC1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7O0FBRXZFLE1BQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsdUJBQXVCO1FBQ2xDLFFBQVEsRUFBRTtZQUNSO2dCQUNFLElBQUksRUFBRSxZQUFZO2dCQUNsQixTQUFTLEVBQUUsa0JBQWtCO2FBQzlCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLFNBQVMsRUFBRSxtQkFBbUI7YUFDL0I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsU0FBUyxFQUFFLG1CQUFtQjthQUMvQjtZQUNEO2dCQUNFLElBQUksRUFBRSxlQUFlO2dCQUNyQixTQUFTLEVBQUUscUJBQXFCO2FBQ2pDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLFNBQVMsRUFBRSxvQkFBb0I7YUFDaEM7WUFDRDtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsU0FBUyxFQUFFLGtCQUFrQjthQUM5QjtZQUNEO2dCQUNFLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLFNBQVMsRUFBRSxzQkFBc0I7YUFDbEM7WUFDRCxJQUFJO1lBQ0osNEJBQTRCO1lBQzVCLGlIQUFpSDtZQUNqSCxLQUFLO1lBQ0w7Z0JBQ0UsSUFBSSxFQUFFLG1CQUFtQjtnQkFDekIsU0FBUyxFQUFFLHdCQUF3QjthQUNwQztZQUNEO2dCQUNFLElBQUksRUFBRSxvQkFBb0I7Z0JBQzFCLFNBQVMsRUFBRSx5QkFBeUI7YUFDckM7U0FDRjtLQUNGO0NBQ0YsQ0FBQztBQU1GLE1BQU0sT0FBTywyQkFBMkI7d0dBQTNCLDJCQUEyQjt5R0FBM0IsMkJBQTJCLHdDQUY1QixZQUFZO3lHQUVYLDJCQUEyQixZQUg1QixZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUM3QixZQUFZOzs0RkFFWCwyQkFBMkI7a0JBSnZDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQmFzaWNJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNpYy1pbmZvL2Jhc2ljLWluZm8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGVzaWduUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vZGVzaWduLXBhZ2UvZGVzaWduLXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR3JpZENvbmZpZ0NvbXBvbmVudCB9IGZyb20gJy4vZ3JpZC1jb25maWcvZ3JpZC1jb25maWcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZUJ1aWxkZXJBZGRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UtYnVpbGRlci1hZGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUXVlcnlQYXJhbXNDb21wb25lbnQgfSBmcm9tICcuL3F1ZXJ5LXBhcmFtcy9xdWVyeS1wYXJhbXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmliYm9uRGVzaWduUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcmliYm9uLWRlc2lnbi1wYWdlL3JpYmJvbi1kZXNpZ24tcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSaWJib25UYWJDb25maWdDb21wb25lbnQgfSBmcm9tICcuL3JpYmJvbi10YWItY29uZmlnL3JpYmJvbi10YWItY29uZmlnLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJvdXRpbmdDb25maWdDb21wb25lbnQgfSBmcm9tICcuL3JvdXRpbmctY29uZmlnL3JvdXRpbmctY29uZmlnLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNlYXJjaFBhcmFtc0NvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoLXBhcmFtcy9zZWFyY2gtcGFyYW1zLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRhYkNvbmZpZ0NvbXBvbmVudCB9IGZyb20gJy4vdGFiLWNvbmZpZy90YWItY29uZmlnLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnJyxcclxuICAgIGNvbXBvbmVudDogUGFnZUJ1aWxkZXJBZGRDb21wb25lbnQsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2Jhc2ljLWluZm8nLFxyXG4gICAgICAgIGNvbXBvbmVudDogQmFzaWNJbmZvQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAncGFnZS1kZXNpZ24nLFxyXG4gICAgICAgIGNvbXBvbmVudDogRGVzaWduUGFnZUNvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2dyaWQtY29uZmlnJyxcclxuICAgICAgICBjb21wb25lbnQ6IEdyaWRDb25maWdDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdzZWFyY2gtcGFyYW1zJyxcclxuICAgICAgICBjb21wb25lbnQ6IFNlYXJjaFBhcmFtc0NvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2dyaWQtZmllbGQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogUXVlcnlQYXJhbXNDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICd0YWItY29uZmlnJyxcclxuICAgICAgICBjb21wb25lbnQ6IFRhYkNvbmZpZ0NvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3JvdXRpbmctY29uZmlnJyxcclxuICAgICAgICBjb21wb25lbnQ6IFJvdXRpbmdDb25maWdDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAgLy8ge1xyXG4gICAgICAvLyAgIHBhdGg6ICdvY3ItdmFsaWRhdGlvbicsXHJcbiAgICAgIC8vICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4uLy4uLy4uL29jci12YWxpZGF0aW9uL29jci12YWxpZGF0aW9uLm1vZHVsZScpLnRoZW4obSA9PiBtLk9jclZhbGlkYXRpb25Nb2R1bGUpXHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAncmliYm9uLXRhYi1jb25maWcnLFxyXG4gICAgICAgIGNvbXBvbmVudDogUmliYm9uVGFiQ29uZmlnQ29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAncGFnZS1yaWJib24tZGVzaWduJyxcclxuICAgICAgICBjb21wb25lbnQ6IFJpYmJvbkRlc2lnblBhZ2VDb21wb25lbnRcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZUJ1aWxkZXJBZGRSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=