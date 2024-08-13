import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterPipe } from './filter.pipe';
import { MaskPipe } from './ssnMask.pipe';
import { SafeHtmlPipe } from './safe-html.pipe';
import * as i0 from "@angular/core";
export class SharedPipesModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SharedPipesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: SharedPipesModule, declarations: [MaskPipe, FilterPipe, SafeHtmlPipe], imports: [CommonModule], exports: [MaskPipe, FilterPipe, SafeHtmlPipe] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SharedPipesModule, providers: [MaskPipe, FilterPipe, SafeHtmlPipe], imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SharedPipesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [MaskPipe, FilterPipe, SafeHtmlPipe],
                    exports: [MaskPipe, FilterPipe, SafeHtmlPipe],
                    providers: [MaskPipe, FilterPipe, SafeHtmlPipe]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLXBpcGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvQGNvcmUvcGlwZS9zaGFyZWQtcGlwZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFRaEQsTUFBTSxPQUFPLGlCQUFpQjt3R0FBakIsaUJBQWlCO3lHQUFqQixpQkFBaUIsaUJBSmIsUUFBUSxFQUFFLFVBQVUsRUFBQyxZQUFZLGFBRHRDLFlBQVksYUFFWixRQUFRLEVBQUUsVUFBVSxFQUFDLFlBQVk7eUdBR2hDLGlCQUFpQixhQUZqQixDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUMsWUFBWSxDQUFDLFlBSHBDLFlBQVk7OzRGQUtYLGlCQUFpQjtrQkFON0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUMsWUFBWSxDQUFDO29CQUNqRCxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFDLFlBQVksQ0FBQztvQkFDNUMsU0FBUyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBQyxZQUFZLENBQUM7aUJBQy9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmlsdGVyUGlwZSB9IGZyb20gJy4vZmlsdGVyLnBpcGUnO1xyXG5pbXBvcnQgeyBNYXNrUGlwZSB9IGZyb20gJy4vc3NuTWFzay5waXBlJztcclxuaW1wb3J0IHsgU2FmZUh0bWxQaXBlIH0gZnJvbSAnLi9zYWZlLWh0bWwucGlwZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW01hc2tQaXBlLCBGaWx0ZXJQaXBlLFNhZmVIdG1sUGlwZV0sXHJcbiAgZXhwb3J0czogW01hc2tQaXBlLCBGaWx0ZXJQaXBlLFNhZmVIdG1sUGlwZV0sXHJcbiAgcHJvdmlkZXJzOiBbTWFza1BpcGUsIEZpbHRlclBpcGUsU2FmZUh0bWxQaXBlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVkUGlwZXNNb2R1bGUge31cclxuIl19