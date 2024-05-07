import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../permissions/permission.store";
export class PermissionDirective {
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
}
PermissionDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i1.PermissionStore }], target: i0.ɵɵFactoryTarget.Directive });
PermissionDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: PermissionDirective, selector: "[fieldKey]", inputs: { fieldKey: "fieldKey" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fieldKey]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.PermissionStore }]; }, propDecorators: { fieldKey: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvbG9naW4vc3JjL2xpYi9waWNzLWxvZ2luL0Bjb3JlL2RpcmVjdGl2ZXMvcGVybWlzc2lvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDOzs7QUFRdkYsTUFBTSxPQUFPLG1CQUFtQjtJQUc5QixZQUNtQixRQUFtQixFQUM1QixVQUFzQixFQUN0QixTQUEwQjtRQUZqQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQzVCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsY0FBUyxHQUFULFNBQVMsQ0FBaUI7SUFFcEMsQ0FBQztJQUNELGVBQWU7UUFDYixNQUFNLFdBQVcsR0FBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUN6QyxJQUFJLFdBQVcsRUFBRTtZQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDL0IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7Z0JBQy9DLElBQUksUUFBUSxDQUFDLE9BQU8sS0FBSyxHQUFHLEVBQUU7b0JBQzVCLElBQUksUUFBUSxFQUFFO3dCQUNaLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7d0JBQ3RGLENBQUMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQzt3QkFDakMsQ0FBQyxDQUFDLElBQUksR0FBRyxxQkFBcUIsQ0FBQzt3QkFDL0IsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQzt3QkFDckIsQ0FBQyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO3dCQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztxQkFDcEU7aUJBQ0Y7cUJBQU0sSUFDTCxRQUFRLENBQUMsT0FBTyxLQUFLLGVBQWU7b0JBQ3BDLFFBQVEsQ0FBQyxPQUFPLEtBQUssWUFBWTtvQkFDakMsUUFBUSxDQUFDLE9BQU8sS0FBSyxZQUFZO29CQUNqQyxRQUFRLENBQUMsT0FBTyxLQUFLLGNBQWM7b0JBQ25DLFFBQVEsQ0FBQyxPQUFPLEtBQUssZUFBZTtvQkFDcEMsUUFBUSxDQUFDLE9BQU8sS0FBSyxZQUFZLEVBQ2pDO29CQUNBLElBQUksUUFBUSxFQUFFO3dCQUNaLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7d0JBQ3RGLENBQUMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQzt3QkFDakMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO3dCQUNqQyxDQUFDLENBQUMsU0FBUyxJQUFJLGFBQWEsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7cUJBQ3BFO2lCQUNGO3FCQUFNO29CQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDN0UsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQ3BFLDJEQUEyRCxDQUM1RCxDQUFDO29CQUNGLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTt3QkFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDdkQsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7aUhBakRVLG1CQUFtQjtxR0FBbkIsbUJBQW1COzRGQUFuQixtQkFBbUI7a0JBSC9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCO3VKQUVVLFFBQVE7c0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGVybWlzc2lvblN0b3JlIH0gZnJvbSAnLi4vcGVybWlzc2lvbnMvcGVybWlzc2lvbi5zdG9yZSc7XHJcblxyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2ZpZWxkS2V5XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25EaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBmaWVsZEtleSE6IHN0cmluZztcclxuICBwZXJtaXNzaW9uczogYW55O1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBkYXRhU3RvcmU6IFBlcm1pc3Npb25TdG9yZVxyXG4gICkge1xyXG4gIH1cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBjb25zdCBwZXJtaXNzaW9ucyA9ICB0aGlzLmRhdGFTdG9yZS5zdGF0ZTtcclxuICAgICBpZiAocGVybWlzc2lvbnMpIHtcclxuICAgICAgaWYgKCFwZXJtaXNzaW9uc1t0aGlzLmZpZWxkS2V5XSkge1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKHRlbXBsYXRlLnRhZ05hbWUgPT09ICdBJykge1xyXG4gICAgICAgICAgaWYgKHRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIHIuaW5uZXJIVE1MID0gdGVtcGxhdGUuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICByLmhyZWYgPSAnamF2YXNjcmlwdDp2b2lkKDApOyc7XHJcbiAgICAgICAgICAgIHJbJ2Rpc2FibGVkJ10gPSB0cnVlO1xyXG4gICAgICAgICAgICByLmNsYXNzTmFtZSA9IHRlbXBsYXRlLmNsYXNzTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQociwgdGVtcGxhdGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICB0ZW1wbGF0ZS50YWdOYW1lID09PSAnUC1NVUxUSVNFTEVDVCcgfHxcclxuICAgICAgICAgIHRlbXBsYXRlLnRhZ05hbWUgPT09ICdQLURST1BET1dOJyB8fFxyXG4gICAgICAgICAgdGVtcGxhdGUudGFnTmFtZSA9PT0gJ1AtQ0hFQ0tCT1gnIHx8XHJcbiAgICAgICAgICB0ZW1wbGF0ZS50YWdOYW1lID09PSAnUC1UUkVFU0VMRUNUJyB8fFxyXG4gICAgICAgICAgdGVtcGxhdGUudGFnTmFtZSA9PT0gJ1AtUkFESU9CVVRUT04nIHx8XHJcbiAgICAgICAgICB0ZW1wbGF0ZS50YWdOYW1lID09PSAnUC1DQUxFTkRBUidcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGlmICh0ZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICBjb25zdCByID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICByLmlubmVySFRNTCA9IHRlbXBsYXRlLmlubmVySFRNTDtcclxuICAgICAgICAgICAgci5jbGFzc05hbWUgPSB0ZW1wbGF0ZS5jbGFzc05hbWU7XHJcbiAgICAgICAgICAgIHIuY2xhc3NOYW1lICs9ICcgcC1kaXNhYmxlZCc7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHIsIHRlbXBsYXRlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgJ3RydWUnKTtcclxuICAgICAgICAgIGNvbnN0IGNoaWxkSW5wdXROb2RlcyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgICdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgYnV0dG9uLCBhLCBuZy1zZWxlY3QsIGRpdiwgbGFibGUnXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY2hpbGRJbnB1dE5vZGVzLmZvckVhY2goKGVsZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtLCAnZGlzYWJsZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==