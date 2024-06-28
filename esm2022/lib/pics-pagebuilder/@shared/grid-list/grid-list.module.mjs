import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialUIModule } from '../../@core/material-ui/material-ui.module';
import { SharedPipesModule } from '../../@core/pipes/shared-pipes.module';
import { DxDataGridModule } from 'devextreme-angular';
import { NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxfUploaderModule } from 'ngxf-uploader';
import { GridListComponent } from './grid-list.component';
import { DirectivesModule } from '../../@core/directives/directives.module';
import * as i0 from "@angular/core";
import * as i1 from "ngx-mask";
export class GridListModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: GridListModule, declarations: [GridListComponent], imports: [CommonModule,
            NgxPaginationModule,
            DxDataGridModule,
            MaterialUIModule,
            SharedPipesModule,
            DirectivesModule,
            FormsModule,
            ReactiveFormsModule,
            NgxfUploaderModule, i1.NgxMaskModule], exports: [GridListComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListModule, imports: [CommonModule,
            NgxPaginationModule,
            DxDataGridModule,
            MaterialUIModule,
            SharedPipesModule,
            DirectivesModule,
            FormsModule,
            ReactiveFormsModule,
            NgxfUploaderModule,
            NgxMaskModule.forRoot()] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [GridListComponent],
                    imports: [
                        CommonModule,
                        NgxPaginationModule,
                        DxDataGridModule,
                        MaterialUIModule,
                        SharedPipesModule,
                        DirectivesModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgxfUploaderModule,
                        NgxMaskModule.forRoot()
                    ],
                    exports: [GridListComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL3BhZ2UtYnVpbGRlci9zcmMvbGliL3BpY3MtcGFnZWJ1aWxkZXIvQHNoYXJlZC9ncmlkLWxpc3QvZ3JpZC1saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMENBQTBDLENBQUM7OztBQWtCNUUsTUFBTSxPQUFPLGNBQWM7d0dBQWQsY0FBYzt5R0FBZCxjQUFjLGlCQWZWLGlCQUFpQixhQUU5QixZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLGdCQUFnQjtZQUNoQixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGtCQUFrQiwrQkFHVixpQkFBaUI7eUdBRWhCLGNBQWMsWUFidkIsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixnQkFBZ0I7WUFDaEIsV0FBVztZQUNYLG1CQUFtQjtZQUNuQixrQkFBa0I7WUFDbEIsYUFBYSxDQUFDLE9BQU8sRUFBRTs7NEZBSWQsY0FBYztrQkFoQjFCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQ2pDLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3dCQUNoQixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsZ0JBQWdCO3dCQUNoQixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsa0JBQWtCO3dCQUNsQixhQUFhLENBQUMsT0FBTyxFQUFFO3FCQUN4QjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztpQkFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWF0ZXJpYWxVSU1vZHVsZSB9IGZyb20gJy4uLy4uL0Bjb3JlL21hdGVyaWFsLXVpL21hdGVyaWFsLXVpLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNoYXJlZFBpcGVzTW9kdWxlIH0gZnJvbSAnLi4vLi4vQGNvcmUvcGlwZXMvc2hhcmVkLXBpcGVzLm1vZHVsZSc7XHJcbmltcG9ydCB7IER4RGF0YUdyaWRNb2R1bGUgfSBmcm9tICdkZXZleHRyZW1lLWFuZ3VsYXInO1xyXG5pbXBvcnQgeyBOZ3hNYXNrTW9kdWxlIH0gZnJvbSAnbmd4LW1hc2snO1xyXG5pbXBvcnQgeyBOZ3hQYWdpbmF0aW9uTW9kdWxlIH0gZnJvbSAnbmd4LXBhZ2luYXRpb24nO1xyXG5pbXBvcnQgeyBOZ3hmVXBsb2FkZXJNb2R1bGUgfSBmcm9tICduZ3hmLXVwbG9hZGVyJztcclxuaW1wb3J0IHsgR3JpZExpc3RDb21wb25lbnQgfSBmcm9tICcuL2dyaWQtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmVzTW9kdWxlIH0gZnJvbSAnLi4vLi4vQGNvcmUvZGlyZWN0aXZlcy9kaXJlY3RpdmVzLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0dyaWRMaXN0Q29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBOZ3hQYWdpbmF0aW9uTW9kdWxlLFxyXG4gICAgRHhEYXRhR3JpZE1vZHVsZSxcclxuICAgIE1hdGVyaWFsVUlNb2R1bGUsXHJcbiAgICBTaGFyZWRQaXBlc01vZHVsZSxcclxuICAgIERpcmVjdGl2ZXNNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBOZ3hmVXBsb2FkZXJNb2R1bGUsXHJcbiAgICBOZ3hNYXNrTW9kdWxlLmZvclJvb3QoKVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW0dyaWRMaXN0Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JpZExpc3RNb2R1bGUge31cclxuIl19