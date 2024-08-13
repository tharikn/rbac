import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormioModule } from '@formio/angular';
// import { AngularSplitModule } from 'angular-split';
import { DxCheckBoxModule, DxDataGridModule, DxSelectBoxModule } from 'devextreme-angular';
import { DynamicModule } from 'ng-dynamic-component';
import { DynamicSearchComponent } from './dynamic-search.component';
import { DynamicSearchRoutingModule } from './dynamic-search.routing.module';
import { MaterialUIModule } from '../modules/material-ui/material-ui.module';
import { GridListModule } from '../modules/grid-list/grid-list.module';
import { PrimengModule } from '../modules/primeng.module';
import * as i0 from "@angular/core";
export class DynamicSearchModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchModule, declarations: [DynamicSearchComponent], imports: [CommonModule,
            FormioModule,
            FormsModule,
            ReactiveFormsModule,
            MaterialUIModule,
            DxDataGridModule,
            DxSelectBoxModule,
            DxCheckBoxModule,
            DynamicSearchRoutingModule,
            GridListModule,
            // AngularSplitModule,
            DynamicModule,
            PrimengModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchModule, imports: [CommonModule,
            FormioModule,
            FormsModule,
            ReactiveFormsModule,
            MaterialUIModule,
            DxDataGridModule,
            DxSelectBoxModule,
            DxCheckBoxModule,
            DynamicSearchRoutingModule,
            GridListModule,
            // AngularSplitModule,
            DynamicModule,
            PrimengModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicSearchModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DynamicSearchComponent],
                    imports: [
                        CommonModule,
                        FormioModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MaterialUIModule,
                        DxDataGridModule,
                        DxSelectBoxModule,
                        DxCheckBoxModule,
                        DynamicSearchRoutingModule,
                        GridListModule,
                        // AngularSplitModule,
                        DynamicModule,
                        PrimengModule
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1zZWFyY2gubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9keW5hbWljLXNlYXJjaC9keW5hbWljLXNlYXJjaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxzREFBc0Q7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBcUIxRCxNQUFNLE9BQU8sbUJBQW1CO3dHQUFuQixtQkFBbUI7eUdBQW5CLG1CQUFtQixpQkFsQmYsc0JBQXNCLGFBRW5DLFlBQVk7WUFDWixZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtZQUNuQixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixnQkFBZ0I7WUFDaEIsMEJBQTBCO1lBQzFCLGNBQWM7WUFDZCxzQkFBc0I7WUFDdEIsYUFBYTtZQUNiLGFBQWE7eUdBSUosbUJBQW1CLFlBaEI1QixZQUFZO1lBQ1osWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsZ0JBQWdCO1lBQ2hCLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIsZ0JBQWdCO1lBQ2hCLDBCQUEwQjtZQUMxQixjQUFjO1lBQ2Qsc0JBQXNCO1lBQ3RCLGFBQWE7WUFDYixhQUFhOzs0RkFJSixtQkFBbUI7a0JBbkIvQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO29CQUN0QyxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixnQkFBZ0I7d0JBQ2hCLDBCQUEwQjt3QkFDMUIsY0FBYzt3QkFDZCxzQkFBc0I7d0JBQ3RCLGFBQWE7d0JBQ2IsYUFBYTtxQkFDZDtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxnQkFBZ0IsQ0FBQztpQkFDcEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRm9ybWlvTW9kdWxlIH0gZnJvbSAnQGZvcm1pby9hbmd1bGFyJztcclxuLy8gaW1wb3J0IHsgQW5ndWxhclNwbGl0TW9kdWxlIH0gZnJvbSAnYW5ndWxhci1zcGxpdCc7XHJcbmltcG9ydCB7IER4Q2hlY2tCb3hNb2R1bGUsIER4RGF0YUdyaWRNb2R1bGUsIER4U2VsZWN0Qm94TW9kdWxlIH0gZnJvbSAnZGV2ZXh0cmVtZS1hbmd1bGFyJztcclxuaW1wb3J0IHsgRHluYW1pY01vZHVsZSB9IGZyb20gJ25nLWR5bmFtaWMtY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHluYW1pY1NlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vZHluYW1pYy1zZWFyY2guY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHluYW1pY1NlYXJjaFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2R5bmFtaWMtc2VhcmNoLnJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgTWF0ZXJpYWxVSU1vZHVsZSB9IGZyb20gJy4uL21vZHVsZXMvbWF0ZXJpYWwtdWkvbWF0ZXJpYWwtdWkubW9kdWxlJztcclxuaW1wb3J0IHsgR3JpZExpc3RNb2R1bGUgfSBmcm9tICcuLi9tb2R1bGVzL2dyaWQtbGlzdC9ncmlkLWxpc3QubW9kdWxlJztcclxuaW1wb3J0IHsgUHJpbWVuZ01vZHVsZSB9IGZyb20gJy4uL21vZHVsZXMvcHJpbWVuZy5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtEeW5hbWljU2VhcmNoQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3JtaW9Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBNYXRlcmlhbFVJTW9kdWxlLFxyXG4gICAgRHhEYXRhR3JpZE1vZHVsZSxcclxuICAgIER4U2VsZWN0Qm94TW9kdWxlLFxyXG4gICAgRHhDaGVja0JveE1vZHVsZSxcclxuICAgIER5bmFtaWNTZWFyY2hSb3V0aW5nTW9kdWxlLFxyXG4gICAgR3JpZExpc3RNb2R1bGUsXHJcbiAgICAvLyBBbmd1bGFyU3BsaXRNb2R1bGUsXHJcbiAgICBEeW5hbWljTW9kdWxlLFxyXG4gICAgUHJpbWVuZ01vZHVsZVxyXG4gIF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIE5PX0VSUk9SU19TQ0hFTUFdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljU2VhcmNoTW9kdWxlIHt9XHJcbiJdfQ==