import { Injectable } from '@angular/core';
import { PageBuilderViewURL } from '../urls/Page-builder-view-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./data-store.service";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1idWlsZGVyLXZpZXcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvQGNvcmUvc2VydmljZS9wYWdlLWJ1aWxkZXItdmlldy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7OztBQU0xRSxNQUFNLE9BQU8sc0JBQXNCO0lBR2I7SUFGcEIsYUFBYSxDQUFTO0lBQ3RCLFdBQVcsQ0FBSztJQUNoQixZQUFvQixhQUErQjtRQUEvQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDakQsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDckQsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7YUFDdEM7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxFQUFFO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFdBQVcsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzlGLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVELGtCQUFrQixDQUFDLFVBQVU7UUFDM0IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGVBQWUsR0FBRyxjQUFjLEdBQUcsVUFBVSxDQUFDLENBQUM7SUFDbEgsQ0FBQzt3R0F0QlUsc0JBQXNCOzRHQUF0QixzQkFBc0IsY0FGckIsTUFBTTs7NEZBRVAsc0JBQXNCO2tCQUhsQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICcuL2h0dHAuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhZ2VCdWlsZGVyVmlld1VSTCB9IGZyb20gJy4uL3VybHMvUGFnZS1idWlsZGVyLXZpZXctdXJsLmNvbmZpZyc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlQnVpbGRlclZpZXdTZXJ2aWNlIHtcclxuICBwb3J0X3dvcmtmbG93OiBzdHJpbmc7XHJcbiAgaHR0cFNlcnZpY2U6YW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZSkge1xyXG4gICAgdGhpcy5wb3J0X3dvcmtmbG93ID0gJ3dvcmtmbG93JztcclxuICAgIHRoaXMuX3N0b3Jlc2VydmljZS5jdXJyZW50U3RvcmUuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgdGhpcy5odHRwU2VydmljZSA9IHJlc1snSFRUUFNFUlZJQ0UnXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0UGFnZVZlcnNpb25CeWlkKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoYCR7UGFnZUJ1aWxkZXJWaWV3VVJMLkVuZFBvaW50LnBhZ2VfY29uZmlnLnBhZ2VWZXJzaW9ufS8ke2lkfWApO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlUGFnZShkYXRhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KFBhZ2VCdWlsZGVyVmlld1VSTC5FbmRQb2ludC5wYWdlX2NvbmZpZy5wYWdlLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGdldEZhY2lsaXR5RGV0YWlscyhwcm92aWRlcmlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoUGFnZUJ1aWxkZXJWaWV3VVJMLkVuZFBvaW50LnByb3ZpZGVyLmZhY2lsaXR5RGV0YWlscyArICc/cHJvdmlkZXJpZD0nICsgcHJvdmlkZXJpZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==