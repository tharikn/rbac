import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DynamicTabPageConfig } from '../urls/dynamic-tab-page-url.config';
import * as i0 from "@angular/core";
import * as i1 from "ngxf-uploader";
import * as i2 from "./http.service";
export class DynamicTabPageService {
    uploadService;
    httpService;
    isPageDesign = new BehaviorSubject(false);
    observePage = this.isPageDesign.asObservable();
    constructor(uploadService, httpService) {
        this.uploadService = uploadService;
        this.httpService = httpService;
    }
    getActivePage(tabPageId, permission) {
        return this.httpService.get(`${DynamicTabPageConfig.EndPoint.Page.getActivePage.replace('{id}', tabPageId)}${permission ? '?applyPermissions=true' : ''}`);
    }
    getDynamicPage(pageId) {
        return this.httpService.get(`${DynamicTabPageConfig.EndPoint.Page.getPage}/${pageId}`);
    }
    getPageById(pageId) {
        return this.httpService.get(DynamicTabPageConfig.EndPoint.Page.getPageById.replace('{id}', pageId));
    }
    getListBySourceId(sourceId) {
        return this.httpService.get(DynamicTabPageConfig.EndPoint.Narrative.getIncidentListById.replace('{id}', sourceId));
    }
    getResponseByPageId(responseId, pageId) {
        return this.httpService.get(DynamicTabPageConfig.EndPoint.Page.getResponseByPageId
            .replace('{responseId}', responseId)
            .replace('{pageId}', pageId));
    }
    createFormResponse(id, requestData) {
        return this.httpService.post(id
            ? DynamicTabPageConfig.EndPoint.Page.updateFormResponse
            : DynamicTabPageConfig.EndPoint.Page.createFormResponse, requestData);
    }
    createUserSurvey(history, Id) {
        return this.httpService.post(DynamicTabPageConfig.EndPoint.Notification.createSurveyConfig
            .replace('{id}', history?.state?.usersurveyid)
            .replace('{status}', 'Completed')
            .replace('{pagedataid}', Id), {});
    }
    updateFormResponse(id, requestData) {
        return this.httpService.patch(`${DynamicTabPageConfig.EndPoint.Page.patchFormResponse}/${id}`, requestData);
    }
    exportReport(data) {
        return this.httpService.post(DynamicTabPageConfig.EndPoint.Finance.exportDocument, data);
    }
    uploadFile(file) {
        return this.uploadService.upload({
            url: this.httpService.baseUrl + '/' + DynamicTabPageConfig.EndPoint.Finance.uploadDocument,
            headers: new HttpHeaders()
                .set('ctype', 'file')
                .set('uniqueid', '6b61ac1e-221a-495c-957b-ad85f65be25a')
                .set('role', 'role=CP_PUBLIC'),
            files: file,
            process: true
        });
    }
    getUniqueId(api) {
        return this.httpService.get(DynamicTabPageConfig.EndPoint.Finance.getUniqueId + api);
    }
    changePage(page) {
        this.isPageDesign.next(page);
    }
    createFormResponseAttachment(data) {
        return this.httpService.post(DynamicTabPageConfig.EndPoint.Attachments.createAttachment, data);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageService, deps: [{ token: i1.NgxfUploaderService }, { token: i2.HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.NgxfUploaderService }, { type: i2.HttpService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10YWItcGFnZS1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2xvZ2luL3NyYy9saWIvcGljcy1sb2dpbi9AY29yZS9zZXJ2aWNlL2R5bmFtaWMtdGFiLXBhZ2Utc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7O0FBSzNFLE1BQU0sT0FBTyxxQkFBcUI7SUFHWjtJQUE0QztJQUZ4RCxZQUFZLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7SUFDM0QsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDL0MsWUFBb0IsYUFBa0MsRUFBVSxXQUF3QjtRQUFwRSxrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFHLENBQUM7SUFFNUYsYUFBYSxDQUFDLFNBQWMsRUFBRSxVQUFvQjtRQUNoRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUN6QixHQUFHLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEdBQzVFLFVBQVUsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLEVBQzFDLEVBQUUsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUFXO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMs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RyxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBSTtRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCw0QkFBNEIsQ0FBQyxJQUFJO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRyxDQUFDO3dHQWxGVSxxQkFBcUI7NEdBQXJCLHFCQUFxQixjQUZwQixNQUFNOzs0RkFFUCxxQkFBcUI7a0JBSGpDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmd4ZlVwbG9hZGVyU2VydmljZSB9IGZyb20gJ25neGYtdXBsb2FkZXInO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICcuL2h0dHAuc2VydmljZSc7XHJcbmltcG9ydCB7IER5bmFtaWNUYWJQYWdlQ29uZmlnIH0gZnJvbSAnLi4vdXJscy9keW5hbWljLXRhYi1wYWdlLXVybC5jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY1RhYlBhZ2VTZXJ2aWNlIHtcclxuICBwcml2YXRlIGlzUGFnZURlc2lnbiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIG9ic2VydmVQYWdlID0gdGhpcy5pc1BhZ2VEZXNpZ24uYXNPYnNlcnZhYmxlKCk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1cGxvYWRTZXJ2aWNlOiBOZ3hmVXBsb2FkZXJTZXJ2aWNlLCBwcml2YXRlIGh0dHBTZXJ2aWNlOiBIdHRwU2VydmljZSkge31cclxuXHJcbiAgZ2V0QWN0aXZlUGFnZSh0YWJQYWdlSWQ6IGFueSwgcGVybWlzc2lvbj86IGJvb2xlYW4pIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChcclxuICAgICAgYCR7RHluYW1pY1RhYlBhZ2VDb25maWcuRW5kUG9pbnQuUGFnZS5nZXRBY3RpdmVQYWdlLnJlcGxhY2UoJ3tpZH0nLCB0YWJQYWdlSWQpfSR7XHJcbiAgICAgICAgcGVybWlzc2lvbiA/ICc/YXBwbHlQZXJtaXNzaW9ucz10cnVlJyA6ICcnXHJcbiAgICAgIH1gXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0RHluYW1pY1BhZ2UocGFnZUlkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChgJHtEeW5hbWljVGFiUGFnZUNvbmZpZy5FbmRQb2ludC5QYWdlLmdldFBhZ2V9LyR7cGFnZUlkfWApO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGFnZUJ5SWQocGFnZUlkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChEeW5hbWljVGFiUGFnZUNvbmZpZy5FbmRQb2ludC5QYWdlLmdldFBhZ2VCeUlkLnJlcGxhY2UoJ3tpZH0nLCBwYWdlSWQpKTtcclxuICB9XHJcblxyXG4gIGdldExpc3RCeVNvdXJjZUlkKHNvdXJjZUlkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChEeW5hbWljVGFiUGFnZUNvbmZpZy5FbmRQb2ludC5OYXJyYXRpdmUuZ2V0SW5jaWRlbnRMaXN0QnlJZC5yZXBsYWNlKCd7aWR9Jywgc291cmNlSWQpKTtcclxuICB9XHJcblxyXG4gIGdldFJlc3BvbnNlQnlQYWdlSWQocmVzcG9uc2VJZDogYW55LCBwYWdlSWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KFxyXG4gICAgICBEeW5hbWljVGFiUGFnZUNvbmZpZy5FbmRQb2ludC5QYWdlLmdldFJlc3BvbnNlQnlQYWdlSWRcclxuICAgICAgICAucmVwbGFjZSgne3Jlc3BvbnNlSWR9JywgcmVzcG9uc2VJZClcclxuICAgICAgICAucmVwbGFjZSgne3BhZ2VJZH0nLCBwYWdlSWQpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRm9ybVJlc3BvbnNlKGlkOiBhbnksIHJlcXVlc3REYXRhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KFxyXG4gICAgICBpZFxyXG4gICAgICAgID8gRHluYW1pY1RhYlBhZ2VDb25maWcuRW5kUG9pbnQuUGFnZS51cGRhdGVGb3JtUmVzcG9uc2VcclxuICAgICAgICA6IER5bmFtaWNUYWJQYWdlQ29uZmlnLkVuZFBvaW50LlBhZ2UuY3JlYXRlRm9ybVJlc3BvbnNlLFxyXG4gICAgICByZXF1ZXN0RGF0YVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVVzZXJTdXJ2ZXkoaGlzdG9yeSwgSWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChcclxuICAgICAgRHluYW1pY1RhYlBhZ2VDb25maWcuRW5kUG9pbnQuTm90aWZpY2F0aW9uLmNyZWF0ZVN1cnZleUNvbmZpZ1xyXG4gICAgICAgIC5yZXBsYWNlKCd7aWR9JywgaGlzdG9yeT8uc3RhdGU/LnVzZXJzdXJ2ZXlpZClcclxuICAgICAgICAucmVwbGFjZSgne3N0YXR1c30nLCAnQ29tcGxldGVkJylcclxuICAgICAgICAucmVwbGFjZSgne3BhZ2VkYXRhaWR9JywgSWQpLFxyXG4gICAgICB7fVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUZvcm1SZXNwb25zZShpZDogYW55LCByZXF1ZXN0RGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wYXRjaChgJHtEeW5hbWljVGFiUGFnZUNvbmZpZy5FbmRQb2ludC5QYWdlLnBhdGNoRm9ybVJlc3BvbnNlfS8ke2lkfWAsIHJlcXVlc3REYXRhKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydFJlcG9ydChkYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoRHluYW1pY1RhYlBhZ2VDb25maWcuRW5kUG9pbnQuRmluYW5jZS5leHBvcnREb2N1bWVudCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICB1cGxvYWRGaWxlKGZpbGU6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMudXBsb2FkU2VydmljZS51cGxvYWQoe1xyXG4gICAgICB1cmw6IHRoaXMuaHR0cFNlcnZpY2UuYmFzZVVybCArICcvJyArIER5bmFtaWNUYWJQYWdlQ29uZmlnLkVuZFBvaW50LkZpbmFuY2UudXBsb2FkRG9jdW1lbnQsXHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycygpXHJcbiAgICAgICAgLnNldCgnY3R5cGUnLCAnZmlsZScpXHJcbiAgICAgICAgLnNldCgndW5pcXVlaWQnLCAnNmI2MWFjMWUtMjIxYS00OTVjLTk1N2ItYWQ4NWY2NWJlMjVhJylcclxuICAgICAgICAuc2V0KCdyb2xlJywgJ3JvbGU9Q1BfUFVCTElDJyksXHJcbiAgICAgIGZpbGVzOiBmaWxlLFxyXG4gICAgICBwcm9jZXNzOiB0cnVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFVuaXF1ZUlkKGFwaTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoRHluYW1pY1RhYlBhZ2VDb25maWcuRW5kUG9pbnQuRmluYW5jZS5nZXRVbmlxdWVJZCArIGFwaSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQYWdlKHBhZ2UpIHtcclxuICAgIHRoaXMuaXNQYWdlRGVzaWduLm5leHQocGFnZSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVGb3JtUmVzcG9uc2VBdHRhY2htZW50KGRhdGEpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoRHluYW1pY1RhYlBhZ2VDb25maWcuRW5kUG9pbnQuQXR0YWNobWVudHMuY3JlYXRlQXR0YWNobWVudCwgZGF0YSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==