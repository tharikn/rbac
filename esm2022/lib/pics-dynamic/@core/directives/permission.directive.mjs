import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../permissions/permission.store";
export class PermissionDirective {
    renderer;
    elementRef;
    dataStore;
    fieldKey;
    permissions;
    constructor(renderer, elementRef, dataStore) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.dataStore = dataStore;
    }
    ngAfterViewInit() {
        const permissions = this.dataStore.state;
        if (permissions) {
            if (!permissions[this.fieldKey]) {
                const template = this.elementRef.nativeElement;
                if (template.tagName === 'A') {
                    if (template) {
                        const r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                        r.innerHTML = template.innerHTML;
                        r.href = 'javascript:void(0);';
                        r['disabled'] = true;
                        r.className = template.className;
                        this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                    }
                }
                else if (template.tagName === 'P-MULTISELECT' ||
                    template.tagName === 'P-DROPDOWN' ||
                    template.tagName === 'P-CHECKBOX' ||
                    template.tagName === 'P-TREESELECT' ||
                    template.tagName === 'P-RADIOBUTTON' ||
                    template.tagName === 'P-CALENDAR') {
                    if (template) {
                        const r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                        r.innerHTML = template.innerHTML;
                        r.className = template.className;
                        r.className += ' p-disabled';
                        this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                    }
                }
                else {
                    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', 'true');
                    const childInputNodes = this.elementRef.nativeElement.querySelectorAll('input, select, textarea, button, a, ng-select, div, lable');
                    childInputNodes.forEach((elem) => {
                        this.renderer.setAttribute(elem, 'disabled', 'true');
                    });
                }
            }
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i1.PermissionStore }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: PermissionDirective, selector: "[fieldKey]", inputs: { fieldKey: "fieldKey" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fieldKey]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.PermissionStore }]; }, propDecorators: { fieldKey: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL0Bjb3JlL2RpcmVjdGl2ZXMvcGVybWlzc2lvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDOzs7QUFPdkYsTUFBTSxPQUFPLG1CQUFtQjtJQUlYO0lBQ1Q7SUFDQTtJQUxELFFBQVEsQ0FBVTtJQUMzQixXQUFXLENBQU07SUFDakIsWUFDbUIsUUFBbUIsRUFDNUIsVUFBc0IsRUFDdEIsU0FBMEI7UUFGakIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUM1QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGNBQVMsR0FBVCxTQUFTLENBQWlCO0lBRXBDLENBQUM7SUFDRCxlQUFlO1FBQ2IsTUFBTSxXQUFXLEdBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDekMsSUFBSSxXQUFXLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQy9CLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO2dCQUMvQyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEtBQUssR0FBRyxFQUFFO29CQUM1QixJQUFJLFFBQVEsRUFBRTt3QkFDWixNQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO3dCQUN0RixDQUFDLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7d0JBQ2pDLENBQUMsQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUM7d0JBQy9CLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUM7d0JBQ3JCLENBQUMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQzt3QkFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7cUJBQ3BFO2lCQUNGO3FCQUFNLElBQ0wsUUFBUSxDQUFDLE9BQU8sS0FBSyxlQUFlO29CQUNwQyxRQUFRLENBQUMsT0FBTyxLQUFLLFlBQVk7b0JBQ2pDLFFBQVEsQ0FBQyxPQUFPLEtBQUssWUFBWTtvQkFDakMsUUFBUSxDQUFDLE9BQU8sS0FBSyxjQUFjO29CQUNuQyxRQUFRLENBQUMsT0FBTyxLQUFLLGVBQWU7b0JBQ3BDLFFBQVEsQ0FBQyxPQUFPLEtBQUssWUFBWSxFQUNqQztvQkFDQSxJQUFJLFFBQVEsRUFBRTt3QkFDWixNQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO3dCQUN0RixDQUFDLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7d0JBQ2pDLENBQUMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQzt3QkFDakMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxhQUFhLENBQUM7d0JBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO3FCQUNwRTtpQkFDRjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQzdFLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUNwRSwyREFBMkQsQ0FDNUQsQ0FBQztvQkFDRixlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7d0JBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ3ZELENBQUMsQ0FBQyxDQUFDO2lCQUNKO2FBQ0Y7U0FDRjtJQUNILENBQUM7d0dBakRVLG1CQUFtQjs0RkFBbkIsbUJBQW1COzs0RkFBbkIsbUJBQW1CO2tCQUgvQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO2lCQUN2Qjt1SkFFVSxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBlcm1pc3Npb25TdG9yZSB9IGZyb20gJy4uL3Blcm1pc3Npb25zL3Blcm1pc3Npb24uc3RvcmUnO1xyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2ZpZWxkS2V5XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25EaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBmaWVsZEtleSE6IHN0cmluZztcclxuICBwZXJtaXNzaW9uczogYW55O1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBkYXRhU3RvcmU6IFBlcm1pc3Npb25TdG9yZVxyXG4gICkge1xyXG4gIH1cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBjb25zdCBwZXJtaXNzaW9ucyA9ICB0aGlzLmRhdGFTdG9yZS5zdGF0ZTtcclxuICAgICBpZiAocGVybWlzc2lvbnMpIHtcclxuICAgICAgaWYgKCFwZXJtaXNzaW9uc1t0aGlzLmZpZWxkS2V5XSkge1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKHRlbXBsYXRlLnRhZ05hbWUgPT09ICdBJykge1xyXG4gICAgICAgICAgaWYgKHRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIHIuaW5uZXJIVE1MID0gdGVtcGxhdGUuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICByLmhyZWYgPSAnamF2YXNjcmlwdDp2b2lkKDApOyc7XHJcbiAgICAgICAgICAgIHJbJ2Rpc2FibGVkJ10gPSB0cnVlO1xyXG4gICAgICAgICAgICByLmNsYXNzTmFtZSA9IHRlbXBsYXRlLmNsYXNzTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQociwgdGVtcGxhdGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICB0ZW1wbGF0ZS50YWdOYW1lID09PSAnUC1NVUxUSVNFTEVDVCcgfHxcclxuICAgICAgICAgIHRlbXBsYXRlLnRhZ05hbWUgPT09ICdQLURST1BET1dOJyB8fFxyXG4gICAgICAgICAgdGVtcGxhdGUudGFnTmFtZSA9PT0gJ1AtQ0hFQ0tCT1gnIHx8XHJcbiAgICAgICAgICB0ZW1wbGF0ZS50YWdOYW1lID09PSAnUC1UUkVFU0VMRUNUJyB8fFxyXG4gICAgICAgICAgdGVtcGxhdGUudGFnTmFtZSA9PT0gJ1AtUkFESU9CVVRUT04nIHx8XHJcbiAgICAgICAgICB0ZW1wbGF0ZS50YWdOYW1lID09PSAnUC1DQUxFTkRBUidcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGlmICh0ZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICBjb25zdCByID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICByLmlubmVySFRNTCA9IHRlbXBsYXRlLmlubmVySFRNTDtcclxuICAgICAgICAgICAgci5jbGFzc05hbWUgPSB0ZW1wbGF0ZS5jbGFzc05hbWU7XHJcbiAgICAgICAgICAgIHIuY2xhc3NOYW1lICs9ICcgcC1kaXNhYmxlZCc7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHIsIHRlbXBsYXRlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgJ3RydWUnKTtcclxuICAgICAgICAgIGNvbnN0IGNoaWxkSW5wdXROb2RlcyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgICdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgYnV0dG9uLCBhLCBuZy1zZWxlY3QsIGRpdiwgbGFibGUnXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY2hpbGRJbnB1dE5vZGVzLmZvckVhY2goKGVsZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtLCAnZGlzYWJsZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==