import { Injectable } from '@angular/core';
import { PageBuilderURL } from '../url/page-builder-url.config';
import { PageBuilderVersionURL } from '../url/page-builder-version-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./data-store.service";
export class PageBuilderService {
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
    getVersionList(pageId) {
        return this.httpService.get(PageBuilderVersionURL.EndPoints.page_config.versionList.replace('{id}', String(pageId)));
    }
    activateVersion(versionId) {
        return this.httpService.patch(PageBuilderVersionURL.EndPoints.page_config.activateVersion.replace('{id}', String(versionId)));
    }
    updatePageVersion(versionId, formData, createPage) {
        const url = PageBuilderVersionURL.EndPoints.page_config.updateVersion.replace('{id}', String(versionId));
        return this.httpService.patch(createPage ? `${url}?updateActiveVersion=true` : `${url}`, formData);
    }
    copyPageVersion(data, id) {
        return this.httpService.post(PageBuilderVersionURL.EndPoints.page_config.copyVersion.replace('{id}', String(id)), data);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1idWlsZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9wYWdlLWJ1aWxkZXIvc3JjL2xpYi9waWNzLXBhZ2VidWlsZGVyL0Bjb3JlL3NlcnZpY2VzL3BhZ2UtYnVpbGRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOzs7QUFNL0UsTUFBTSxPQUFPLGtCQUFrQjtJQUVUO0lBRHBCLFdBQVcsQ0FBTTtJQUNqQixZQUFvQixhQUErQjtRQUEvQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDckQsSUFBRyxHQUFHLEVBQUM7Z0JBQ0wsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7YUFDdEM7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFFO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hHLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUMxQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckgsQ0FBQztJQUVILFlBQVksQ0FBQyxNQUFjO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWTthQUN6RSxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxjQUFjLENBQUMsTUFBYztRQUMzQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWM7YUFDM0UsT0FBTyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsY0FBYyxDQUFDLE1BQXdCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQ3pCLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQ3hGLENBQUM7SUFDSixDQUFDO0lBRUQsZUFBZSxDQUFDLFNBQTJCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQzNCLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQy9GLENBQUM7SUFDSixDQUFDO0lBRUQsaUJBQWlCLENBQUMsU0FBMkIsRUFBRSxRQUFjLEVBQUUsVUFBb0I7UUFDakYsTUFBTSxHQUFHLEdBQUcscUJBQXFCLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN6RyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFFRCxlQUFlLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDdEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDMUIscUJBQXFCLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDbkYsSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDO3dHQWxEWSxrQkFBa0I7NEdBQWxCLGtCQUFrQixjQUZqQixNQUFNOzs0RkFFUCxrQkFBa0I7a0JBSDlCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFBhZ2VCdWlsZGVyVVJMIH0gZnJvbSAnLi4vdXJsL3BhZ2UtYnVpbGRlci11cmwuY29uZmlnJztcclxuaW1wb3J0IHsgUGFnZUJ1aWxkZXJWZXJzaW9uVVJMIH0gZnJvbSAnLi4vdXJsL3BhZ2UtYnVpbGRlci12ZXJzaW9uLXVybC5jb25maWcnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZUJ1aWxkZXJTZXJ2aWNlIHtcclxuICBodHRwU2VydmljZTogYW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZSkge1xyXG4gICAgdGhpcy5fc3RvcmVzZXJ2aWNlLmN1cnJlbnRTdG9yZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgdGhpcy5odHRwU2VydmljZSA9IHJlc1snSFRUUFNFUlZJQ0UnXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0QWxsUGFnZURlc2lnbnMoaWQpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChQYWdlQnVpbGRlclVSTC5FbmRQb2ludHMud29ya2Zsb3cucGFnZUJ5T3JnYW5pemF0aW9uLnJlcGxhY2UoJ3tpZH0nLCBpZCkpO1xyXG4gIH1cclxuXHJcbiAgZHVwbGljYXRlRGVzaWduUGFnZShkYXRhLCBpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChQYWdlQnVpbGRlclVSTC5FbmRQb2ludHMud29ya2Zsb3cuTG9ja1BhZ2VEZXNpZ25lci5yZXBsYWNlKCd7aWR9JywgU3RyaW5nKGlkKSksIGRhdGEpO1xyXG4gIH1cclxuXHJcbmFjdGl2YXRlUGFnZShwYWdlSWQ6IHN0cmluZykge1xyXG4gIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBhdGNoKFBhZ2VCdWlsZGVyVVJMLkVuZFBvaW50cy53b3JrZmxvdy5hY3RpdmF0ZVBhZ2VcclxuICAgIC5yZXBsYWNlKCd7cGFnZUlkfScsIHBhZ2VJZCksIHt9KTtcclxufVxyXG5cclxuZGVhY3RpdmF0ZVBhZ2UocGFnZUlkOiBzdHJpbmcpIHtcclxuICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wYXRjaChQYWdlQnVpbGRlclVSTC5FbmRQb2ludHMud29ya2Zsb3cuZGVhY3RpdmF0ZVBhZ2VcclxuICAgIC5yZXBsYWNlKCd7cGFnZUlkfScsIHBhZ2VJZCksIHt9KTtcclxufVxyXG5cclxuZ2V0VmVyc2lvbkxpc3QocGFnZUlkPzogbnVtYmVyIHwgc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoXHJcbiAgICBQYWdlQnVpbGRlclZlcnNpb25VUkwuRW5kUG9pbnRzLnBhZ2VfY29uZmlnLnZlcnNpb25MaXN0LnJlcGxhY2UoJ3tpZH0nLCBTdHJpbmcocGFnZUlkKSlcclxuICApO1xyXG59XHJcblxyXG5hY3RpdmF0ZVZlcnNpb24odmVyc2lvbklkPzogbnVtYmVyIHwgc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wYXRjaChcclxuICAgIFBhZ2VCdWlsZGVyVmVyc2lvblVSTC5FbmRQb2ludHMucGFnZV9jb25maWcuYWN0aXZhdGVWZXJzaW9uLnJlcGxhY2UoJ3tpZH0nLCBTdHJpbmcodmVyc2lvbklkKSlcclxuICApO1xyXG59XHJcblxyXG51cGRhdGVQYWdlVmVyc2lvbih2ZXJzaW9uSWQ/OiBudW1iZXIgfCBzdHJpbmcsIGZvcm1EYXRhPzogYW55LCBjcmVhdGVQYWdlPzogYm9vbGVhbik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgY29uc3QgdXJsID0gUGFnZUJ1aWxkZXJWZXJzaW9uVVJMLkVuZFBvaW50cy5wYWdlX2NvbmZpZy51cGRhdGVWZXJzaW9uLnJlcGxhY2UoJ3tpZH0nLCBTdHJpbmcodmVyc2lvbklkKSk7XHJcbiAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucGF0Y2goY3JlYXRlUGFnZSA/IGAke3VybH0/dXBkYXRlQWN0aXZlVmVyc2lvbj10cnVlYCA6IGAke3VybH1gLCBmb3JtRGF0YSk7XHJcbn1cclxuXHJcbmNvcHlQYWdlVmVyc2lvbihkYXRhLCBpZCkge1xyXG4gIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoXHJcbiAgICBQYWdlQnVpbGRlclZlcnNpb25VUkwuRW5kUG9pbnRzLnBhZ2VfY29uZmlnLmNvcHlWZXJzaW9uLnJlcGxhY2UoJ3tpZH0nLCBTdHJpbmcoaWQpKSxcclxuICAgIGRhdGFcclxuICApO1xyXG59XHJcbiAgXHJcbn1cclxuIl19