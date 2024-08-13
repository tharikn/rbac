import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxDataGridModule } from 'devextreme-angular';
import { NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxfUploaderModule } from 'ngxf-uploader';
import { GridListComponent } from './grid-list.component';
import { MaterialUIModule } from '../material-ui/material-ui.module';
import { SharedPipesModule } from '../../@core/pipe/shared-pipes.module';
import { DirectivesModule } from '../../@core/directives/directives.module';
import * as i0 from "@angular/core";
import * as i1 from "ngx-mask";
export class GridListModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: GridListModule, declarations: [GridListComponent], imports: [CommonModule,
            MaterialUIModule,
            NgxPaginationModule,
            DxDataGridModule,
            SharedPipesModule,
            FormsModule,
            ReactiveFormsModule,
            DirectivesModule,
            NgxfUploaderModule, i1.NgxMaskModule], exports: [GridListComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListModule, imports: [CommonModule,
            MaterialUIModule,
            NgxPaginationModule,
            DxDataGridModule,
            SharedPipesModule,
            FormsModule,
            ReactiveFormsModule,
            DirectivesModule,
            NgxfUploaderModule,
            NgxMaskModule.forRoot()] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [GridListComponent],
                    imports: [
                        CommonModule,
                        MaterialUIModule,
                        NgxPaginationModule,
                        DxDataGridModule,
                        SharedPipesModule,
                        FormsModule,
                        ReactiveFormsModule,
                        DirectivesModule,
                        NgxfUploaderModule,
                        NgxMaskModule.forRoot()
                    ],
                    exports: [GridListComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvbW9kdWxlcy9ncmlkLWxpc3QvZ3JpZC1saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMENBQTBDLENBQUM7OztBQWtCNUUsTUFBTSxPQUFPLGNBQWM7d0dBQWQsY0FBYzt5R0FBZCxjQUFjLGlCQWZWLGlCQUFpQixhQUU5QixZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLG1CQUFtQjtZQUNuQixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsZ0JBQWdCO1lBQ2hCLGtCQUFrQiwrQkFHVixpQkFBaUI7eUdBRWhCLGNBQWMsWUFidkIsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGdCQUFnQjtZQUNoQixrQkFBa0I7WUFDbEIsYUFBYSxDQUFDLE9BQU8sRUFBRTs7NEZBSWQsY0FBYztrQkFoQjFCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQ2pDLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3dCQUNsQixhQUFhLENBQUMsT0FBTyxFQUFFO3FCQUN4QjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztpQkFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRHhEYXRhR3JpZE1vZHVsZSB9IGZyb20gJ2RldmV4dHJlbWUtYW5ndWxhcic7XHJcbmltcG9ydCB7IE5neE1hc2tNb2R1bGUgfSBmcm9tICduZ3gtbWFzayc7XHJcbmltcG9ydCB7IE5neFBhZ2luYXRpb25Nb2R1bGUgfSBmcm9tICduZ3gtcGFnaW5hdGlvbic7XHJcbmltcG9ydCB7IE5neGZVcGxvYWRlck1vZHVsZSB9IGZyb20gJ25neGYtdXBsb2FkZXInO1xyXG5pbXBvcnQgeyBHcmlkTGlzdENvbXBvbmVudCB9IGZyb20gJy4vZ3JpZC1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdGVyaWFsVUlNb2R1bGUgfSBmcm9tICcuLi9tYXRlcmlhbC11aS9tYXRlcmlhbC11aS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTaGFyZWRQaXBlc01vZHVsZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3BpcGUvc2hhcmVkLXBpcGVzLm1vZHVsZSc7XHJcbmltcG9ydCB7IERpcmVjdGl2ZXNNb2R1bGUgfSBmcm9tICcuLi8uLi9AY29yZS9kaXJlY3RpdmVzL2RpcmVjdGl2ZXMubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbR3JpZExpc3RDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1hdGVyaWFsVUlNb2R1bGUsXHJcbiAgICBOZ3hQYWdpbmF0aW9uTW9kdWxlLFxyXG4gICAgRHhEYXRhR3JpZE1vZHVsZSxcclxuICAgIFNoYXJlZFBpcGVzTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgRGlyZWN0aXZlc01vZHVsZSxcclxuICAgIE5neGZVcGxvYWRlck1vZHVsZSxcclxuICAgIE5neE1hc2tNb2R1bGUuZm9yUm9vdCgpXHJcbiAgXSxcclxuICBleHBvcnRzOiBbR3JpZExpc3RDb21wb25lbnRdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JpZExpc3RNb2R1bGUge31cclxuIl19