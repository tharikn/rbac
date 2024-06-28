import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../permissions/permission.store";
export class PermissionDirective {
    renderer;
    elementRef;
    dataStore;
    fieldKey;
    constructor(renderer, elementRef, dataStore) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.dataStore = dataStore;
    }
    ngAfterViewInit() {
        const permissions = this.dataStore.state;
        if (permissions && !permissions[this.fieldKey]) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9wYWdlLWJ1aWxkZXIvc3JjL2xpYi9waWNzLXBhZ2VidWlsZGVyL0Bjb3JlL2RpcmVjdGl2ZXMvcGVybWlzc2lvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDOzs7QUFNdkYsTUFBTSxPQUFPLG1CQUFtQjtJQUdYO0lBQ1Q7SUFDQTtJQUpELFFBQVEsQ0FBVTtJQUMzQixZQUNtQixRQUFtQixFQUM1QixVQUFzQixFQUN0QixTQUEwQjtRQUZqQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQzVCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsY0FBUyxHQUFULFNBQVMsQ0FBaUI7SUFDakMsQ0FBQztJQUNKLGVBQWU7UUFDYixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUN6QyxJQUFJLFdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDOUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7WUFDL0MsSUFBSSxRQUFRLENBQUMsT0FBTyxLQUFLLEdBQUcsRUFBRTtnQkFDNUIsSUFBSSxRQUFRLEVBQUU7b0JBQ1osTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztvQkFDdEYsQ0FBQyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO29CQUNqQyxDQUFDLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDO29CQUMvQixDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUNyQixDQUFDLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7b0JBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2lCQUNwRTthQUNGO2lCQUFNLElBQ0wsUUFBUSxDQUFDLE9BQU8sS0FBSyxlQUFlO2dCQUNwQyxRQUFRLENBQUMsT0FBTyxLQUFLLFlBQVk7Z0JBQ2pDLFFBQVEsQ0FBQyxPQUFPLEtBQUssWUFBWTtnQkFDakMsUUFBUSxDQUFDLE9BQU8sS0FBSyxjQUFjO2dCQUNuQyxRQUFRLENBQUMsT0FBTyxLQUFLLGVBQWU7Z0JBQ3BDLFFBQVEsQ0FBQyxPQUFPLEtBQUssWUFBWSxFQUNqQztnQkFDQSxJQUFJLFFBQVEsRUFBRTtvQkFDWixNQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO29CQUN0RixDQUFDLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7b0JBQ2pDLENBQUMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztvQkFDakMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxhQUFhLENBQUM7b0JBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2lCQUNwRTthQUNGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDN0UsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQ3BFLDJEQUEyRCxDQUM1RCxDQUFDO2dCQUNGLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtvQkFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDdkQsQ0FBQyxDQUFDLENBQUM7YUFDSjtTQUNGO0lBQ0gsQ0FBQzt3R0E3Q1UsbUJBQW1COzRGQUFuQixtQkFBbUI7OzRGQUFuQixtQkFBbUI7a0JBSC9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCO3VKQUVVLFFBQVE7c0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGVybWlzc2lvblN0b3JlIH0gZnJvbSAnLi4vcGVybWlzc2lvbnMvcGVybWlzc2lvbi5zdG9yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tmaWVsZEtleV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgZmllbGRLZXkhOiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGRhdGFTdG9yZTogUGVybWlzc2lvblN0b3JlXHJcbiAgKSB7fVxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGNvbnN0IHBlcm1pc3Npb25zID0gdGhpcy5kYXRhU3RvcmUuc3RhdGU7XHJcbiAgICBpZiAocGVybWlzc2lvbnMgJiYgIXBlcm1pc3Npb25zW3RoaXMuZmllbGRLZXldKSB7XHJcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIGlmICh0ZW1wbGF0ZS50YWdOYW1lID09PSAnQScpIHtcclxuICAgICAgICBpZiAodGVtcGxhdGUpIHtcclxuICAgICAgICAgIGNvbnN0IHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICByLmlubmVySFRNTCA9IHRlbXBsYXRlLmlubmVySFRNTDtcclxuICAgICAgICAgIHIuaHJlZiA9ICdqYXZhc2NyaXB0OnZvaWQoMCk7JztcclxuICAgICAgICAgIHJbJ2Rpc2FibGVkJ10gPSB0cnVlO1xyXG4gICAgICAgICAgci5jbGFzc05hbWUgPSB0ZW1wbGF0ZS5jbGFzc05hbWU7XHJcbiAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChyLCB0ZW1wbGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHRlbXBsYXRlLnRhZ05hbWUgPT09ICdQLU1VTFRJU0VMRUNUJyB8fFxyXG4gICAgICAgIHRlbXBsYXRlLnRhZ05hbWUgPT09ICdQLURST1BET1dOJyB8fFxyXG4gICAgICAgIHRlbXBsYXRlLnRhZ05hbWUgPT09ICdQLUNIRUNLQk9YJyB8fFxyXG4gICAgICAgIHRlbXBsYXRlLnRhZ05hbWUgPT09ICdQLVRSRUVTRUxFQ1QnIHx8XHJcbiAgICAgICAgdGVtcGxhdGUudGFnTmFtZSA9PT0gJ1AtUkFESU9CVVRUT04nIHx8XHJcbiAgICAgICAgdGVtcGxhdGUudGFnTmFtZSA9PT0gJ1AtQ0FMRU5EQVInXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmICh0ZW1wbGF0ZSkge1xyXG4gICAgICAgICAgY29uc3QgciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgIHIuaW5uZXJIVE1MID0gdGVtcGxhdGUuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgci5jbGFzc05hbWUgPSB0ZW1wbGF0ZS5jbGFzc05hbWU7XHJcbiAgICAgICAgICByLmNsYXNzTmFtZSArPSAnIHAtZGlzYWJsZWQnO1xyXG4gICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQociwgdGVtcGxhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgIGNvbnN0IGNoaWxkSW5wdXROb2RlcyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIGJ1dHRvbiwgYSwgbmctc2VsZWN0LCBkaXYsIGxhYmxlJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgY2hpbGRJbnB1dE5vZGVzLmZvckVhY2goKGVsZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbSwgJ2Rpc2FibGVkJywgJ3RydWUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=