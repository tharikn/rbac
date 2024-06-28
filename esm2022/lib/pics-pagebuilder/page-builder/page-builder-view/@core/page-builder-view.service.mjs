import { Injectable } from '@angular/core';
import { PageBuilderViewURL } from './Page-builder-view-url.config';
import * as i0 from "@angular/core";
import * as i1 from "../../../@core/services/data-store.service";
export class PageBuilderViewService {
    _storeservice;
    port_workflow;
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this.port_workflow = 'workflow';
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    getPageVersionByid(id) {
        return this.httpService.get(`${PageBuilderViewURL.EndPoint.page_config.pageVersion}/${id}`);
    }
    createPage(data) {
        return this.httpService.post(PageBuilderViewURL.EndPoint.page_config.page, data);
    }
    getFacilityDetails(providerid) {
        return this.httpService.get(PageBuilderViewURL.EndPoint.provider.facilityDetails + '?providerid=' + providerid);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderViewService, deps: [{ token: i1.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderViewService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderViewService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1idWlsZGVyLXZpZXcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL3BhZ2UtYnVpbGRlci9zcmMvbGliL3BpY3MtcGFnZWJ1aWxkZXIvcGFnZS1idWlsZGVyL3BhZ2UtYnVpbGRlci12aWV3L0Bjb3JlL3BhZ2UtYnVpbGRlci12aWV3LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7O0FBS3BFLE1BQU0sT0FBTyxzQkFBc0I7SUFHYjtJQUZwQixhQUFhLENBQVM7SUFDdEIsV0FBVyxDQUFNO0lBQ2pCLFlBQW9CLGFBQStCO1FBQS9CLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUNqRCxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQztRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNyRCxJQUFJLEdBQUcsRUFBRTtnQkFDUCxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTthQUN0QztRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGtCQUFrQixDQUFDLEVBQUU7UUFDbkIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsV0FBVyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsa0JBQWtCLENBQUMsVUFBVTtRQUMzQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsZUFBZSxHQUFHLGNBQWMsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUNsSCxDQUFDO3dHQXRCVSxzQkFBc0I7NEdBQXRCLHNCQUFzQixjQUZyQixNQUFNOzs0RkFFUCxzQkFBc0I7a0JBSGxDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvc2VydmljZXMvZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGFnZUJ1aWxkZXJWaWV3VVJMIH0gZnJvbSAnLi9QYWdlLWJ1aWxkZXItdmlldy11cmwuY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VCdWlsZGVyVmlld1NlcnZpY2Uge1xyXG4gIHBvcnRfd29ya2Zsb3c6IHN0cmluZztcclxuICBodHRwU2VydmljZTogYW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZSkge1xyXG4gICAgdGhpcy5wb3J0X3dvcmtmbG93ID0gJ3dvcmtmbG93JztcclxuICAgIHRoaXMuX3N0b3Jlc2VydmljZS5jdXJyZW50U3RvcmUuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgdGhpcy5odHRwU2VydmljZSA9IHJlc1snSFRUUFNFUlZJQ0UnXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0UGFnZVZlcnNpb25CeWlkKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoYCR7UGFnZUJ1aWxkZXJWaWV3VVJMLkVuZFBvaW50LnBhZ2VfY29uZmlnLnBhZ2VWZXJzaW9ufS8ke2lkfWApO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlUGFnZShkYXRhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KFBhZ2VCdWlsZGVyVmlld1VSTC5FbmRQb2ludC5wYWdlX2NvbmZpZy5wYWdlLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGdldEZhY2lsaXR5RGV0YWlscyhwcm92aWRlcmlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoUGFnZUJ1aWxkZXJWaWV3VVJMLkVuZFBvaW50LnByb3ZpZGVyLmZhY2lsaXR5RGV0YWlscyArICc/cHJvdmlkZXJpZD0nICsgcHJvdmlkZXJpZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==