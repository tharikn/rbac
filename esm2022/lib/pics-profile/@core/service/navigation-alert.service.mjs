import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class NavigationAlertService {
    router;
    showAlertSubject = new Subject();
    flag = false;
    constructor(router) {
        this.router = router;
    }
    setFlag(flag) {
        this.flag = flag;
    }
    getFlag() {
        return this.flag;
    }
    showAlert() {
        this.showAlertSubject.next();
    }
    getShowAlertSubject() {
        return this.showAlertSubject.asObservable();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NavigationAlertService, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NavigationAlertService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NavigationAlertService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1hbGVydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3Byb2ZpbGUvc3JjL2xpYi9waWNzLXByb2ZpbGUvQGNvcmUvc2VydmljZS9uYXZpZ2F0aW9uLWFsZXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFLL0IsTUFBTSxPQUFPLHNCQUFzQjtJQUliO0lBSFosZ0JBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQUN2QyxJQUFJLEdBQVksS0FBSyxDQUFDO0lBRTlCLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUV0QyxPQUFPLENBQUMsSUFBYTtRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzlDLENBQUM7d0dBcEJVLHNCQUFzQjs0R0FBdEIsc0JBQXNCLGNBRnJCLE1BQU07OzRGQUVQLHNCQUFzQjtrQkFIbEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvblN0YXJ0IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkFsZXJ0U2VydmljZSB7XHJcbiAgcHJpdmF0ZSBzaG93QWxlcnRTdWJqZWN0ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIGZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cclxuXHJcbiAgc2V0RmxhZyhmbGFnOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmZsYWcgPSBmbGFnO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmxhZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmZsYWc7XHJcbiAgfVxyXG5cclxuICBzaG93QWxlcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNob3dBbGVydFN1YmplY3QubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2hvd0FsZXJ0U3ViamVjdCgpIHtcclxuICAgIHJldHVybiB0aGlzLnNob3dBbGVydFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==