import { Injectable } from '@angular/core';
import { PageHeaderURL } from '../urls/page-header-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./data-store.service";
export class PageHeaderService {
    _storeservice;
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    getAuthorizedPages(orgid) {
        return this.httpService.get(PageHeaderURL.EndPoints.page.getAuthorizedPages.replace('{orgid}', orgid));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageHeaderService, deps: [{ token: i1.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageHeaderService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageHeaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvQGNvcmUvc2VydmljZS9wYWdlLWhlYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7QUFNL0QsTUFBTSxPQUFPLGlCQUFpQjtJQUVSO0lBRHBCLFdBQVcsQ0FBSztJQUNoQixZQUFvQixhQUErQjtRQUEvQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDckQsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7YUFDdEM7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxLQUFLO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3pHLENBQUM7d0dBWlUsaUJBQWlCOzRHQUFqQixpQkFBaUIsY0FGaEIsTUFBTTs7NEZBRVAsaUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2h0dHAuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhZ2VIZWFkZXJVUkwgfSBmcm9tICcuLi91cmxzL3BhZ2UtaGVhZGVyLXVybC5jb25maWcnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZUhlYWRlclNlcnZpY2Uge1xyXG4gIGh0dHBTZXJ2aWNlOmFueTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdG9yZXNlcnZpY2U6IERhdGFTdG9yZVNlcnZpY2UpIHtcclxuICAgIHRoaXMuX3N0b3Jlc2VydmljZS5jdXJyZW50U3RvcmUuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgdGhpcy5odHRwU2VydmljZSA9IHJlc1snSFRUUFNFUlZJQ0UnXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0QXV0aG9yaXplZFBhZ2VzKG9yZ2lkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoUGFnZUhlYWRlclVSTC5FbmRQb2ludHMucGFnZS5nZXRBdXRob3JpemVkUGFnZXMucmVwbGFjZSgne29yZ2lkfScsIG9yZ2lkKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==