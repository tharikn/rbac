import { Injectable } from '@angular/core';
import { PageBuilderURL } from '../urls/page-builder-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./data-store.service";
export class PageBuilderService {
    _storeservice;
    port_workflow;
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    getVersionList(pageId) {
        return this.httpService.get(PageBuilderURL.EndPoints.page_config.versionList.replace('{id}', String(pageId)));
    }
    getAllPageDesigns(id) {
        return this.httpService.get(PageBuilderURL.EndPoints.workflow.pageByOrganization.replace('{id}', id));
    }
    duplicateDesignPage(data, id) {
        return this.httpService.post(PageBuilderURL.EndPoints.workflow.LockPageDesigner.replace('{id}', String(id)), data);
    }
    activatePage(pageId) {
        return this.httpService.patch(PageBuilderURL.EndPoints.workflow.activatePage
            .replace('{pageId}', pageId), {});
    }
    deactivatePage(pageId) {
        return this.httpService.patch(PageBuilderURL.EndPoints.workflow.deactivatePage
            .replace('{pageId}', pageId), {});
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderService, deps: [{ token: i1.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1idWlsZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL0Bjb3JlL3NlcnZpY2UvcGFnZS1idWlsZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUNBQWlDLENBQUM7OztBQU9qRSxNQUFNLE9BQU8sa0JBQWtCO0lBR1Q7SUFGcEIsYUFBYSxDQUFTO0lBQ3RCLFdBQVcsQ0FBSztJQUNoQixZQUFvQixhQUErQjtRQUEvQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDckQsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7YUFDdEM7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUFFLENBQUM7SUFFUCxjQUFjLENBQUMsTUFBd0I7UUFDckMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FDekIsY0FBYyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQ2pGLENBQUM7SUFDSixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBRTtRQUNsQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBRUQsbUJBQW1CLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDMUIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JILENBQUM7SUFFSCxZQUFZLENBQUMsTUFBYztRQUN6QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFlBQVk7YUFDekUsT0FBTyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsY0FBYyxDQUFDLE1BQWM7UUFDM0IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjO2FBQzNFLE9BQU8sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQzt3R0FoQ1ksa0JBQWtCOzRHQUFsQixrQkFBa0IsY0FGakIsTUFBTTs7NEZBRVAsa0JBQWtCO2tCQUg5QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICcuL2h0dHAuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhZ2VCdWlsZGVyVVJMIH0gZnJvbSAnLi4vdXJscy9wYWdlLWJ1aWxkZXItdXJsLmNvbmZpZyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4vZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VCdWlsZGVyU2VydmljZSB7XHJcbiAgcG9ydF93b3JrZmxvdzogc3RyaW5nO1xyXG4gIGh0dHBTZXJ2aWNlOmFueTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdG9yZXNlcnZpY2U6IERhdGFTdG9yZVNlcnZpY2UpIHtcclxuICAgIHRoaXMuX3N0b3Jlc2VydmljZS5jdXJyZW50U3RvcmUuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgdGhpcy5odHRwU2VydmljZSA9IHJlc1snSFRUUFNFUlZJQ0UnXVxyXG4gICAgICB9XHJcbiAgICB9KSAgfVxyXG5cclxuICBnZXRWZXJzaW9uTGlzdChwYWdlSWQ/OiBudW1iZXIgfCBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KFxyXG4gICAgICBQYWdlQnVpbGRlclVSTC5FbmRQb2ludHMucGFnZV9jb25maWcudmVyc2lvbkxpc3QucmVwbGFjZSgne2lkfScsIFN0cmluZyhwYWdlSWQpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldEFsbFBhZ2VEZXNpZ25zKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoUGFnZUJ1aWxkZXJVUkwuRW5kUG9pbnRzLndvcmtmbG93LnBhZ2VCeU9yZ2FuaXphdGlvbi5yZXBsYWNlKCd7aWR9JywgaWQpKTtcclxuICB9XHJcblxyXG4gIGR1cGxpY2F0ZURlc2lnblBhZ2UoZGF0YSwgaWQpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoUGFnZUJ1aWxkZXJVUkwuRW5kUG9pbnRzLndvcmtmbG93LkxvY2tQYWdlRGVzaWduZXIucmVwbGFjZSgne2lkfScsIFN0cmluZyhpZCkpLCBkYXRhKTtcclxuICB9XHJcblxyXG5hY3RpdmF0ZVBhZ2UocGFnZUlkOiBzdHJpbmcpIHtcclxuICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wYXRjaChQYWdlQnVpbGRlclVSTC5FbmRQb2ludHMud29ya2Zsb3cuYWN0aXZhdGVQYWdlXHJcbiAgICAucmVwbGFjZSgne3BhZ2VJZH0nLCBwYWdlSWQpLCB7fSk7XHJcbn1cclxuXHJcbmRlYWN0aXZhdGVQYWdlKHBhZ2VJZDogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucGF0Y2goUGFnZUJ1aWxkZXJVUkwuRW5kUG9pbnRzLndvcmtmbG93LmRlYWN0aXZhdGVQYWdlXHJcbiAgICAucmVwbGFjZSgne3BhZ2VJZH0nLCBwYWdlSWQpLCB7fSk7XHJcbn1cclxufVxyXG4iXX0=