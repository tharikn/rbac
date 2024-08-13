import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicSearchComponent } from './dynamic-search.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: 'search/:pageId',
        component: DynamicSearchComponent,
        loadChildren: () => import('../dynamic-search/dynamic-search.module').then(m => m.DynamicSearchModule)
    },
    {
        path: 'view/:pageId',
        component: DynamicSearchComponent,
        loadChildren: () => import('../dynamic-search/dynamic-search.module').then(m => m.DynamicSearchModule)
    },
    {
        path: 'search/:pageId/:pageSaveID',
        component: DynamicSearchComponent,
        loadChildren: () => import('../dynamic-search/dynamic-search.module').then(m => m.DynamicSearchModule)
    }
];
export class DynamicSearchRoutingModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchRoutingModule, imports: [RouterModule.forChild(routes), RouterModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1zZWFyY2gucm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL2R5bmFtaWMtc2VhcmNoL2R5bmFtaWMtc2VhcmNoLnJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFFcEUsTUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLFNBQVMsRUFBRSxzQkFBc0I7UUFDakMsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztLQUN2RztJQUNEO1FBQ0UsSUFBSSxFQUFFLGNBQWM7UUFDcEIsU0FBUyxFQUFFLHNCQUFzQjtRQUNqQyxZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLHlDQUF5QyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO0tBQ3ZHO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsNEJBQTRCO1FBQ2xDLFNBQVMsRUFBRSxzQkFBc0I7UUFDakMsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztLQUN2RztDQUNGLENBQUM7QUFNRixNQUFNLE9BQU8sMEJBQTBCO3dHQUExQiwwQkFBMEI7eUdBQTFCLDBCQUEwQix3Q0FGM0IsWUFBWTt5R0FFWCwwQkFBMEIsWUFIM0IsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFDN0IsWUFBWTs7NEZBRVgsMEJBQTBCO2tCQUp0QyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IER5bmFtaWNTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL2R5bmFtaWMtc2VhcmNoLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnc2VhcmNoLzpwYWdlSWQnLFxyXG4gICAgY29tcG9uZW50OiBEeW5hbWljU2VhcmNoQ29tcG9uZW50LFxyXG4gICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4uL2R5bmFtaWMtc2VhcmNoL2R5bmFtaWMtc2VhcmNoLm1vZHVsZScpLnRoZW4obSA9PiBtLkR5bmFtaWNTZWFyY2hNb2R1bGUpXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAndmlldy86cGFnZUlkJyxcclxuICAgIGNvbXBvbmVudDogRHluYW1pY1NlYXJjaENvbXBvbmVudCxcclxuICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuLi9keW5hbWljLXNlYXJjaC9keW5hbWljLXNlYXJjaC5tb2R1bGUnKS50aGVuKG0gPT4gbS5EeW5hbWljU2VhcmNoTW9kdWxlKVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3NlYXJjaC86cGFnZUlkLzpwYWdlU2F2ZUlEJyxcclxuICAgIGNvbXBvbmVudDogRHluYW1pY1NlYXJjaENvbXBvbmVudCxcclxuICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuLi9keW5hbWljLXNlYXJjaC9keW5hbWljLXNlYXJjaC5tb2R1bGUnKS50aGVuKG0gPT4gbS5EeW5hbWljU2VhcmNoTW9kdWxlKVxyXG4gIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY1NlYXJjaFJvdXRpbmdNb2R1bGUge31cclxuIl19