import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DynamicTabPageConfig } from '../urls/dynamic-tab-page-url.config';
import * as i0 from "@angular/core";
import * as i1 from "ngxf-uploader";
import * as i2 from "./http.service";
export class DynamicTabPageService {
    constructor(uploadService, httpService) {
        this.uploadService = uploadService;
        this.httpService = httpService;
        this.isPageDesign = new BehaviorSubject(false);
        this.observePage = this.isPageDesign.asObservable();
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
        var _a;
        return this.httpService.post(DynamicTabPageConfig.EndPoint.Notification.createSurveyConfig
            .replace('{id}', (_a = history === null || history === void 0 ? void 0 : history.state) === null || _a === void 0 ? void 0 : _a.usersurveyid)
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
}
DynamicTabPageService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DynamicTabPageService, deps: [{ token: i1.NgxfUploaderService }, { token: i2.HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
DynamicTabPageService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DynamicTabPageService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DynamicTabPageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.NgxfUploaderService }, { type: i2.HttpService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10YWItcGFnZS1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2xvZ2luL3NyYy9saWIvcGljcy1sb2dpbi9AY29yZS9zZXJ2aWNlL2R5bmFtaWMtdGFiLXBhZ2Utc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7O0FBSzNFLE1BQU0sT0FBTyxxQkFBcUI7SUFHaEMsWUFBb0IsYUFBa0MsRUFBVSxXQUF3QjtRQUFwRSxrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUZoRixpQkFBWSxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBQzNELGdCQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM0QyxDQUFDO0lBRTVGLGFBQWEsQ0FBQyxTQUFjLEVBQUUsVUFBb0I7UUFDaEQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FDekIsR0FBRyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxHQUM1RSxVQUFVLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxFQUMxQyxFQUFFLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxjQUFjLENBQUMsTUFBVztRQUN4QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsb0JB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SSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFJO1FBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELDRCQUE0QixDQUFDLElBQUk7UUFDL0IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pHLENBQUM7O21IQWxGVSxxQkFBcUI7dUhBQXJCLHFCQUFxQixjQUZwQixNQUFNOzRGQUVQLHFCQUFxQjtrQkFIakMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hmVXBsb2FkZXJTZXJ2aWNlIH0gZnJvbSAnbmd4Zi11cGxvYWRlcic7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRHluYW1pY1RhYlBhZ2VDb25maWcgfSBmcm9tICcuLi91cmxzL2R5bmFtaWMtdGFiLXBhZ2UtdXJsLmNvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljVGFiUGFnZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgaXNQYWdlRGVzaWduID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgb2JzZXJ2ZVBhZ2UgPSB0aGlzLmlzUGFnZURlc2lnbi5hc09ic2VydmFibGUoKTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVwbG9hZFNlcnZpY2U6IE5neGZVcGxvYWRlclNlcnZpY2UsIHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlKSB7fVxyXG5cclxuICBnZXRBY3RpdmVQYWdlKHRhYlBhZ2VJZDogYW55LCBwZXJtaXNzaW9uPzogYm9vbGVhbikge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KFxyXG4gICAgICBgJHtEeW5hbWljVGFiUGFnZUNvbmZpZy5FbmRQb2ludC5QYWdlLmdldEFjdGl2ZVBhZ2UucmVwbGFjZSgne2lkfScsIHRhYlBhZ2VJZCl9JHtcclxuICAgICAgICBwZXJtaXNzaW9uID8gJz9hcHBseVBlcm1pc3Npb25zPXRydWUnIDogJydcclxuICAgICAgfWBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXREeW5hbWljUGFnZShwYWdlSWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KGAke0R5bmFtaWNUYWJQYWdlQ29uZmlnLkVuZFBvaW50LlBhZ2UuZ2V0UGFnZX0vJHtwYWdlSWR9YCk7XHJcbiAgfVxyXG5cclxuICBnZXRQYWdlQnlJZChwYWdlSWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KER5bmFtaWNUYWJQYWdlQ29uZmlnLkVuZFBvaW50LlBhZ2UuZ2V0UGFnZUJ5SWQucmVwbGFjZSgne2lkfScsIHBhZ2VJZCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGlzdEJ5U291cmNlSWQoc291cmNlSWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KER5bmFtaWNUYWJQYWdlQ29uZmlnLkVuZFBvaW50Lk5hcnJhdGl2ZS5nZXRJbmNpZGVudExpc3RCeUlkLnJlcGxhY2UoJ3tpZH0nLCBzb3VyY2VJZCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmVzcG9uc2VCeVBhZ2VJZChyZXNwb25zZUlkOiBhbnksIHBhZ2VJZDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoXHJcbiAgICAgIER5bmFtaWNUYWJQYWdlQ29uZmlnLkVuZFBvaW50LlBhZ2UuZ2V0UmVzcG9uc2VCeVBhZ2VJZFxyXG4gICAgICAgIC5yZXBsYWNlKCd7cmVzcG9uc2VJZH0nLCByZXNwb25zZUlkKVxyXG4gICAgICAgIC5yZXBsYWNlKCd7cGFnZUlkfScsIHBhZ2VJZClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVGb3JtUmVzcG9uc2UoaWQ6IGFueSwgcmVxdWVzdERhdGEpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoXHJcbiAgICAgIGlkXHJcbiAgICAgICAgPyBEeW5hbWljVGFiUGFnZUNvbmZpZy5FbmRQb2ludC5QYWdlLnVwZGF0ZUZvcm1SZXNwb25zZVxyXG4gICAgICAgIDogRHluYW1pY1RhYlBhZ2VDb25maWcuRW5kUG9pbnQuUGFnZS5jcmVhdGVGb3JtUmVzcG9uc2UsXHJcbiAgICAgIHJlcXVlc3REYXRhXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVXNlclN1cnZleShoaXN0b3J5LCBJZDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KFxyXG4gICAgICBEeW5hbWljVGFiUGFnZUNvbmZpZy5FbmRQb2ludC5Ob3RpZmljYXRpb24uY3JlYXRlU3VydmV5Q29uZmlnXHJcbiAgICAgICAgLnJlcGxhY2UoJ3tpZH0nLCBoaXN0b3J5Py5zdGF0ZT8udXNlcnN1cnZleWlkKVxyXG4gICAgICAgIC5yZXBsYWNlKCd7c3RhdHVzfScsICdDb21wbGV0ZWQnKVxyXG4gICAgICAgIC5yZXBsYWNlKCd7cGFnZWRhdGFpZH0nLCBJZCksXHJcbiAgICAgIHt9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRm9ybVJlc3BvbnNlKGlkOiBhbnksIHJlcXVlc3REYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBhdGNoKGAke0R5bmFtaWNUYWJQYWdlQ29uZmlnLkVuZFBvaW50LlBhZ2UucGF0Y2hGb3JtUmVzcG9uc2V9LyR7aWR9YCwgcmVxdWVzdERhdGEpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0UmVwb3J0KGRhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChEeW5hbWljVGFiUGFnZUNvbmZpZy5FbmRQb2ludC5GaW5hbmNlLmV4cG9ydERvY3VtZW50LCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHVwbG9hZEZpbGUoZmlsZTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy51cGxvYWRTZXJ2aWNlLnVwbG9hZCh7XHJcbiAgICAgIHVybDogdGhpcy5odHRwU2VydmljZS5iYXNlVXJsICsgJy8nICsgRHluYW1pY1RhYlBhZ2VDb25maWcuRW5kUG9pbnQuRmluYW5jZS51cGxvYWREb2N1bWVudCxcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKClcclxuICAgICAgICAuc2V0KCdjdHlwZScsICdmaWxlJylcclxuICAgICAgICAuc2V0KCd1bmlxdWVpZCcsICc2YjYxYWMxZS0yMjFhLTQ5NWMtOTU3Yi1hZDg1ZjY1YmUyNWEnKVxyXG4gICAgICAgIC5zZXQoJ3JvbGUnLCAncm9sZT1DUF9QVUJMSUMnKSxcclxuICAgICAgZmlsZXM6IGZpbGUsXHJcbiAgICAgIHByb2Nlc3M6IHRydWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0VW5pcXVlSWQoYXBpOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChEeW5hbWljVGFiUGFnZUNvbmZpZy5FbmRQb2ludC5GaW5hbmNlLmdldFVuaXF1ZUlkICsgYXBpKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVBhZ2UocGFnZSkge1xyXG4gICAgdGhpcy5pc1BhZ2VEZXNpZ24ubmV4dChwYWdlKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUZvcm1SZXNwb25zZUF0dGFjaG1lbnQoZGF0YSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChEeW5hbWljVGFiUGFnZUNvbmZpZy5FbmRQb2ludC5BdHRhY2htZW50cy5jcmVhdGVBdHRhY2htZW50LCBkYXRhKTtcclxuICB9XHJcbn1cclxuIl19