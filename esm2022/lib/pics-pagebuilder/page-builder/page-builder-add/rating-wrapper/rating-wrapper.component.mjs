import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
export class RatingWrapperComponent {
    value;
    valueChange = new EventEmitter();
    disabled;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RatingWrapperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: RatingWrapperComponent, selector: "app-rating-wrapper", inputs: { value: "value", disabled: "disabled" }, outputs: { valueChange: "valueChange" }, ngImport: i0, template: "<ngb-rating [(rate)]=\"value\" (rateChange)=\"valueChange.emit($event)\" [readonly]=\"disabled\"></ngb-rating>\r\n", styles: ["li{list-style:none}\n"], dependencies: [{ kind: "component", type: i1.NgbRating, selector: "ngb-rating", inputs: ["max", "rate", "readonly", "resettable", "starTemplate"], outputs: ["hover", "leave", "rateChange"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RatingWrapperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-rating-wrapper', template: "<ngb-rating [(rate)]=\"value\" (rateChange)=\"valueChange.emit($event)\" [readonly]=\"disabled\"></ngb-rating>\r\n", styles: ["li{list-style:none}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], disabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLXdyYXBwZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvcGFnZS1idWlsZGVyL3NyYy9saWIvcGljcy1wYWdlYnVpbGRlci9wYWdlLWJ1aWxkZXIvcGFnZS1idWlsZGVyLWFkZC9yYXRpbmctd3JhcHBlci9yYXRpbmctd3JhcHBlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9wYWdlLWJ1aWxkZXIvc3JjL2xpYi9waWNzLXBhZ2VidWlsZGVyL3BhZ2UtYnVpbGRlci9wYWdlLWJ1aWxkZXItYWRkL3JhdGluZy13cmFwcGVyL3JhdGluZy13cmFwcGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVF2RSxNQUFNLE9BQU8sc0JBQXNCO0lBRWpDLEtBQUssQ0FBUztJQUdkLFdBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBR3pDLFFBQVEsQ0FBVTt3R0FSUCxzQkFBc0I7NEZBQXRCLHNCQUFzQixxSkNSbkMsb0hBQ0E7OzRGRE9hLHNCQUFzQjtrQkFMbEMsU0FBUzsrQkFDRSxvQkFBb0I7OEJBTTlCLEtBQUs7c0JBREosS0FBSztnQkFJTixXQUFXO3NCQURWLE1BQU07Z0JBSVAsUUFBUTtzQkFEUCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWlvQ3VzdG9tQ29tcG9uZW50IH0gZnJvbSAnQGZvcm1pby9hbmd1bGFyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXJhdGluZy13cmFwcGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcmF0aW5nLXdyYXBwZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3JhdGluZy13cmFwcGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFJhdGluZ1dyYXBwZXJDb21wb25lbnQgaW1wbGVtZW50cyBGb3JtaW9DdXN0b21Db21wb25lbnQ8bnVtYmVyPiB7XHJcbiAgQElucHV0KClcclxuICB2YWx1ZTogbnVtYmVyO1xyXG5cclxuICBAT3V0cHV0KClcclxuICB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGRpc2FibGVkOiBib29sZWFuO1xyXG59XHJcbiIsIjxuZ2ItcmF0aW5nIFsocmF0ZSldPVwidmFsdWVcIiAocmF0ZUNoYW5nZSk9XCJ2YWx1ZUNoYW5nZS5lbWl0KCRldmVudClcIiBbcmVhZG9ubHldPVwiZGlzYWJsZWRcIj48L25nYi1yYXRpbmc+XHJcbiJdfQ==