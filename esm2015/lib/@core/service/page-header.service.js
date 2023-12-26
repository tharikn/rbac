import { Injectable } from '@angular/core';
import { PageHeaderURL } from '../urls/page-header-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./http.service";
export class PageHeaderService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getAuthorizedPages(orgid) {
        return this.httpService.get(PageHeaderURL.EndPoints.page.getAuthorizedPages.replace('{orgid}', orgid));
    }
}
PageHeaderService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageHeaderService, deps: [{ token: i1.HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
PageHeaderService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageHeaderService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageHeaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9jb25maWctbG9naW4tc2V0dGluZ3Mvc3JjL2xpYi9AY29yZS9zZXJ2aWNlL3BhZ2UtaGVhZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7OztBQUsvRCxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLFlBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQztJQUVoRCxrQkFBa0IsQ0FBQyxLQUFLO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3pHLENBQUM7OytHQUxVLGlCQUFpQjttSEFBakIsaUJBQWlCLGNBRmhCLE1BQU07NEZBRVAsaUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICcuL2h0dHAuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhZ2VIZWFkZXJVUkwgfSBmcm9tICcuLi91cmxzL3BhZ2UtaGVhZGVyLXVybC5jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZUhlYWRlclNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlKSB7fVxyXG5cclxuICBnZXRBdXRob3JpemVkUGFnZXMob3JnaWQpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChQYWdlSGVhZGVyVVJMLkVuZFBvaW50cy5wYWdlLmdldEF1dGhvcml6ZWRQYWdlcy5yZXBsYWNlKCd7b3JnaWR9Jywgb3JnaWQpKTtcclxuICB9XHJcbn1cclxuIl19