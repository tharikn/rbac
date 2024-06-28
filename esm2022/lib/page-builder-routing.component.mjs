import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageBuilderAddComponent } from './page-builder.component';
import { RibbonDesignPageComponent } from './pics-pagebuilder/page-builder/page-builder-add/ribbon-design-page/ribbon-design-page.component';
import { PageBuilderVersionComponent } from './pics-pagebuilder/page-builder/page-builder-version/page-builder-version.component';
import { PageBuilderViewComponent } from './pics-pagebuilder/page-builder/page-builder-view/page-builder-view.component';
import { PageBuilderComponent } from './pics-pagebuilder/page-builder/page-builder.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export const pageBuilderRoutes = [
    {
        path: 'list',
        component: PageBuilderComponent,
    },
    {
        path: 'versions/:id',
        component: PageBuilderVersionComponent
    },
    {
        path: 'add',
        loadChildren: () => import('./pics-pagebuilder/page-builder/page-builder-add/page-builder-add.module').then(m => m.PageBuilderAddModule)
    },
    {
        path: 'edit/:id',
        loadChildren: () => import('./pics-pagebuilder/page-builder/page-builder-add/page-builder-add.module').then(n => n.PageBuilderAddModule)
    },
    {
        path: 'edit/:id/:rev',
        component: PageBuilderAddComponent
    },
    {
        path: 'view/:id',
        component: PageBuilderViewComponent
    },
    {
        path: 'view/:id/page-ribbon-design',
        component: RibbonDesignPageComponent
    },
    { path: '**', redirectTo: 'list', pathMatch: 'full' },
];
export class PagebuilderRoutingModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PagebuilderRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: PagebuilderRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PagebuilderRoutingModule, imports: [RouterModule.forChild(pageBuilderRoutes), RouterModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PagebuilderRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(pageBuilderRoutes)],
                    exports: [RouterModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1idWlsZGVyLXJvdXRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvcGFnZS1idWlsZGVyL3NyYy9saWIvcGFnZS1idWlsZGVyLXJvdXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ25FLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGtHQUFrRyxDQUFDO0FBQzdJLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHFGQUFxRixDQUFDO0FBQ2xJLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtFQUErRSxDQUFDO0FBQ3pILE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDOzs7QUFJOUYsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQVc7SUFDdkM7UUFDRSxJQUFJLEVBQUUsTUFBTTtRQUNaLFNBQVMsRUFBRSxvQkFBb0I7S0FDaEM7SUFFRDtRQUNFLElBQUksRUFBRSxjQUFjO1FBQ3BCLFNBQVMsRUFBRSwyQkFBMkI7S0FDdkM7SUFDRDtRQUNFLElBQUksRUFBRSxLQUFLO1FBQ1gsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUNqQixNQUFNLENBQUMsMEVBQTBFLENBQUMsQ0FBQyxJQUFJLENBQ3JGLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUM1QjtLQUNKO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsVUFBVTtRQUNoQixZQUFZLEVBQUUsR0FBRyxFQUFFLENBQ2pCLE1BQU0sQ0FBQywwRUFBMEUsQ0FBQyxDQUFDLElBQUksQ0FDckYsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQzVCO0tBQ0o7SUFDRDtRQUNFLElBQUksRUFBRSxlQUFlO1FBQ3JCLFNBQVMsRUFBRSx1QkFBdUI7S0FDbkM7SUFDRDtRQUNFLElBQUksRUFBRSxVQUFVO1FBQ2hCLFNBQVMsRUFBRSx3QkFBd0I7S0FDcEM7SUFDRDtRQUNFLElBQUksRUFBRSw2QkFBNkI7UUFDbkMsU0FBUyxFQUFFLHlCQUF5QjtLQUNyQztJQUNELEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7Q0FDdEQsQ0FBQztBQU1GLE1BQU0sT0FBTyx3QkFBd0I7d0dBQXhCLHdCQUF3Qjt5R0FBeEIsd0JBQXdCLHdDQUZ6QixZQUFZO3lHQUVYLHdCQUF3QixZQUh6QixZQUFZLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLEVBQ3hDLFlBQVk7OzRGQUVYLHdCQUF3QjtrQkFKcEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBQ25ELE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFBhZ2VCdWlsZGVyQWRkQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLWJ1aWxkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmliYm9uRGVzaWduUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGljcy1wYWdlYnVpbGRlci9wYWdlLWJ1aWxkZXIvcGFnZS1idWlsZGVyLWFkZC9yaWJib24tZGVzaWduLXBhZ2UvcmliYm9uLWRlc2lnbi1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VCdWlsZGVyVmVyc2lvbkNvbXBvbmVudCB9IGZyb20gJy4vcGljcy1wYWdlYnVpbGRlci9wYWdlLWJ1aWxkZXIvcGFnZS1idWlsZGVyLXZlcnNpb24vcGFnZS1idWlsZGVyLXZlcnNpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZUJ1aWxkZXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9waWNzLXBhZ2VidWlsZGVyL3BhZ2UtYnVpbGRlci9wYWdlLWJ1aWxkZXItdmlldy9wYWdlLWJ1aWxkZXItdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYWdlQnVpbGRlckNvbXBvbmVudCB9IGZyb20gJy4vcGljcy1wYWdlYnVpbGRlci9wYWdlLWJ1aWxkZXIvcGFnZS1idWlsZGVyLmNvbXBvbmVudCc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwYWdlQnVpbGRlclJvdXRlczogUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICdsaXN0JyxcclxuICAgIGNvbXBvbmVudDogUGFnZUJ1aWxkZXJDb21wb25lbnQsXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgcGF0aDogJ3ZlcnNpb25zLzppZCcsXHJcbiAgICBjb21wb25lbnQ6IFBhZ2VCdWlsZGVyVmVyc2lvbkNvbXBvbmVudFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ2FkZCcsXHJcbiAgICBsb2FkQ2hpbGRyZW46ICgpID0+XHJcbiAgICAgIGltcG9ydCgnLi9waWNzLXBhZ2VidWlsZGVyL3BhZ2UtYnVpbGRlci9wYWdlLWJ1aWxkZXItYWRkL3BhZ2UtYnVpbGRlci1hZGQubW9kdWxlJykudGhlbihcclxuICAgICAgICBtID0+IG0uUGFnZUJ1aWxkZXJBZGRNb2R1bGVcclxuICAgICAgKVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ2VkaXQvOmlkJyxcclxuICAgIGxvYWRDaGlsZHJlbjogKCkgPT5cclxuICAgICAgaW1wb3J0KCcuL3BpY3MtcGFnZWJ1aWxkZXIvcGFnZS1idWlsZGVyL3BhZ2UtYnVpbGRlci1hZGQvcGFnZS1idWlsZGVyLWFkZC5tb2R1bGUnKS50aGVuKFxyXG4gICAgICAgIG4gPT4gbi5QYWdlQnVpbGRlckFkZE1vZHVsZVxyXG4gICAgICApXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnZWRpdC86aWQvOnJldicsXHJcbiAgICBjb21wb25lbnQ6IFBhZ2VCdWlsZGVyQWRkQ29tcG9uZW50XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAndmlldy86aWQnLFxyXG4gICAgY29tcG9uZW50OiBQYWdlQnVpbGRlclZpZXdDb21wb25lbnRcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICd2aWV3LzppZC9wYWdlLXJpYmJvbi1kZXNpZ24nLFxyXG4gICAgY29tcG9uZW50OiBSaWJib25EZXNpZ25QYWdlQ29tcG9uZW50XHJcbiAgfSxcclxuICB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICdsaXN0JywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChwYWdlQnVpbGRlclJvdXRlcyldLFxyXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlYnVpbGRlclJvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==