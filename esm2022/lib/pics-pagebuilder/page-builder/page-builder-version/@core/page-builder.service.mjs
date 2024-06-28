import { Injectable } from '@angular/core';
import { PageBuilderVersionURL } from './page-builder-version-url.config';
import * as i0 from "@angular/core";
import * as i1 from "../../../@core/services/data-store.service";
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
        // This is intentional
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1idWlsZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9wYWdlLWJ1aWxkZXIvc3JjL2xpYi9waWNzLXBhZ2VidWlsZGVyL3BhZ2UtYnVpbGRlci9wYWdlLWJ1aWxkZXItdmVyc2lvbi9AY29yZS9wYWdlLWJ1aWxkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7QUFLMUUsTUFBTSxPQUFPLGtCQUFrQjtJQUVUO0lBRHBCLFdBQVcsQ0FBTTtJQUNqQixZQUFvQixhQUErQjtRQUEvQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDckQsSUFBRyxHQUFHLEVBQUM7Z0JBQ0wsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7YUFDdEM7UUFDSCxDQUFDLENBQUMsQ0FBQTtRQUNELHNCQUFzQjtJQUN6QixDQUFDO0lBRUQsY0FBYyxDQUFDLE1BQXdCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQ3pCLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQ3hGLENBQUM7SUFDSixDQUFDO0lBRUQsZUFBZSxDQUFDLFNBQTJCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQzNCLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQy9GLENBQUM7SUFDSixDQUFDO0lBRUQsaUJBQWlCLENBQUMsU0FBMkIsRUFBRSxRQUFjLEVBQUUsVUFBb0I7UUFDakYsTUFBTSxHQUFHLEdBQUcscUJBQXFCLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN6RyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFFRCxlQUFlLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDdEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDMUIscUJBQXFCLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDbkYsSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDO3dHQWpDVSxrQkFBa0I7NEdBQWxCLGtCQUFrQixjQUZqQixNQUFNOzs0RkFFUCxrQkFBa0I7a0JBSDlCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9zZXJ2aWNlcy9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYWdlQnVpbGRlclZlcnNpb25VUkwgfSBmcm9tICcuL3BhZ2UtYnVpbGRlci12ZXJzaW9uLXVybC5jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZUJ1aWxkZXJTZXJ2aWNlIHtcclxuICBodHRwU2VydmljZTogYW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZSkge1xyXG4gICAgdGhpcy5fc3RvcmVzZXJ2aWNlLmN1cnJlbnRTdG9yZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgdGhpcy5odHRwU2VydmljZSA9IHJlc1snSFRUUFNFUlZJQ0UnXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxcclxuICB9XHJcblxyXG4gIGdldFZlcnNpb25MaXN0KHBhZ2VJZD86IG51bWJlciB8IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoXHJcbiAgICAgIFBhZ2VCdWlsZGVyVmVyc2lvblVSTC5FbmRQb2ludHMucGFnZV9jb25maWcudmVyc2lvbkxpc3QucmVwbGFjZSgne2lkfScsIFN0cmluZyhwYWdlSWQpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFjdGl2YXRlVmVyc2lvbih2ZXJzaW9uSWQ/OiBudW1iZXIgfCBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucGF0Y2goXHJcbiAgICAgIFBhZ2VCdWlsZGVyVmVyc2lvblVSTC5FbmRQb2ludHMucGFnZV9jb25maWcuYWN0aXZhdGVWZXJzaW9uLnJlcGxhY2UoJ3tpZH0nLCBTdHJpbmcodmVyc2lvbklkKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQYWdlVmVyc2lvbih2ZXJzaW9uSWQ/OiBudW1iZXIgfCBzdHJpbmcsIGZvcm1EYXRhPzogYW55LCBjcmVhdGVQYWdlPzogYm9vbGVhbik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCB1cmwgPSBQYWdlQnVpbGRlclZlcnNpb25VUkwuRW5kUG9pbnRzLnBhZ2VfY29uZmlnLnVwZGF0ZVZlcnNpb24ucmVwbGFjZSgne2lkfScsIFN0cmluZyh2ZXJzaW9uSWQpKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBhdGNoKGNyZWF0ZVBhZ2UgPyBgJHt1cmx9P3VwZGF0ZUFjdGl2ZVZlcnNpb249dHJ1ZWAgOiBgJHt1cmx9YCwgZm9ybURhdGEpO1xyXG4gIH1cclxuXHJcbiAgY29weVBhZ2VWZXJzaW9uKGRhdGEsIGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KFxyXG4gICAgICBQYWdlQnVpbGRlclZlcnNpb25VUkwuRW5kUG9pbnRzLnBhZ2VfY29uZmlnLmNvcHlWZXJzaW9uLnJlcGxhY2UoJ3tpZH0nLCBTdHJpbmcoaWQpKSxcclxuICAgICAgZGF0YVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19