import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
// const LOADER_SELECTOR = '#loaderAnimation';
export class LoaderService {
    loaderContainer = document.getElementById('loaderAnimation2');
    constructor() {
        $('#loaderAnimation').hide();
    }
    show() {
        $('#loaderAnimation').show();
    }
    hide() {
        $('#loaderAnimation').hide();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoaderService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoaderService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL0Bjb3JlL3NlcnZpY2UvbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0MsOENBQThDO0FBTTlDLE1BQU0sT0FBTyxhQUFhO0lBQ2hCLGVBQWUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDdEU7UUFDRSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSTtRQUNGLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxJQUFJO1FBQ0YsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQzt3R0FaVSxhQUFhOzRHQUFiLGFBQWEsY0FIWixNQUFNOzs0RkFHUCxhQUFhO2tCQUp6QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuZGVjbGFyZSBjb25zdCAkOiBhbnk7XHJcbi8vIGNvbnN0IExPQURFUl9TRUxFQ1RPUiA9ICcjbG9hZGVyQW5pbWF0aW9uJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkZXJTZXJ2aWNlIHtcclxuICBwcml2YXRlIGxvYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXJBbmltYXRpb24yJyk7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAkKCcjbG9hZGVyQW5pbWF0aW9uJykuaGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgc2hvdygpIHtcclxuICAgICQoJyNsb2FkZXJBbmltYXRpb24nKS5zaG93KCk7XHJcbiAgfVxyXG5cclxuICBoaWRlKCkge1xyXG4gICAgJCgnI2xvYWRlckFuaW1hdGlvbicpLmhpZGUoKTtcclxuICB9XHJcbn0iXX0=