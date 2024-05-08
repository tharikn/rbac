import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ThemeService {
    constructor() {
        // This is intentional
    }
    setActiveTheme(theme) {
        this.active = theme;
        Object.keys(this.active.properties).forEach(property => {
            document.documentElement.style.setProperty(property, this.active.properties[property]);
        });
    }
    setActiveFont(Fontset) {
        this.activeFont = Fontset;
        if (this.activeFont) {
            Object.keys(this.activeFont.properties).forEach(property => {
                document.documentElement.style.setProperty(property, this.activeFont.properties[property]);
            });
        }
    }
}
ThemeService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ThemeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ThemeService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ThemeService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ThemeService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9wcm9maWxlL3NyYy9saWIvcGljcy1wcm9maWxlL0Bjb3JlL3NlcnZpY2UvdGhlbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU0zQyxNQUFNLE9BQU8sWUFBWTtJQUl2QjtRQUNFLHNCQUFzQjtJQUN4QixDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQVk7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNyRCxRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDekYsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWdCO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1FBQzFCLElBQUcsSUFBSSxDQUFDLFVBQVUsRUFBQztZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUN6RCxRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDN0YsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OzBHQXRCVSxZQUFZOzhHQUFaLFlBQVksY0FGWCxNQUFNOzRGQUVQLFlBQVk7a0JBSHhCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb250U2V0LCBUaGVtZSB9IGZyb20gJy4uL2NvbnN0YW50cy9jb21tb24uZW50aXRpZXMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGhlbWVTZXJ2aWNlIHtcclxuICBwcml2YXRlIGFjdGl2ZT86IGFueTtcclxuICBwcml2YXRlIGFjdGl2ZUZvbnQ/OiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbFxyXG4gIH1cclxuXHJcbiAgc2V0QWN0aXZlVGhlbWUodGhlbWU6IFRoZW1lKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGl2ZSA9IHRoZW1lO1xyXG4gICAgT2JqZWN0LmtleXModGhpcy5hY3RpdmUucHJvcGVydGllcykuZm9yRWFjaChwcm9wZXJ0eSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdGhpcy5hY3RpdmUucHJvcGVydGllc1twcm9wZXJ0eV0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRBY3RpdmVGb250KEZvbnRzZXQ6IEZvbnRTZXQpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZlRm9udCA9IEZvbnRzZXQ7XHJcbiAgICBpZih0aGlzLmFjdGl2ZUZvbnQpe1xyXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmFjdGl2ZUZvbnQucHJvcGVydGllcykuZm9yRWFjaChwcm9wZXJ0eSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCB0aGlzLmFjdGl2ZUZvbnQucHJvcGVydGllc1twcm9wZXJ0eV0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19