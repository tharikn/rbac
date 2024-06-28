import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DynamicTabPageConfig } from '../url/dynamic-tab-page-url.config';
import * as i0 from "@angular/core";
import * as i1 from "ngxf-uploader";
import * as i2 from "./data-store.service";
export class DynamicTabPageService {
    uploadService;
    _storeservice;
    isPageDesign = new BehaviorSubject(false);
    observePage = this.isPageDesign.asObservable();
    httpService;
    constructor(uploadService, _storeservice) {
        this.uploadService = uploadService;
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageService, deps: [{ token: i1.NgxfUploaderService }, { token: i2.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.NgxfUploaderService }, { type: i2.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10YWItcGFnZS1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvcGFnZS1idWlsZGVyL3NyYy9saWIvcGljcy1wYWdlYnVpbGRlci9AY29yZS9zZXJ2aWNlcy9keW5hbWljLXRhYi1wYWdlLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7OztBQU0xRSxNQUFNLE9BQU8scUJBQXFCO0lBSVo7SUFBNEM7SUFIeEQsWUFBWSxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO0lBQzNELFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQy9DLFdBQVcsQ0FBTTtJQUNqQixZQUFvQixhQUFrQyxFQUFVLGFBQStCO1FBQTNFLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUM3RixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNyRCxJQUFJLEdBQUcsRUFBRTtnQkFDUCxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTthQUN0QztRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGFBQWEsQ0FBQyxTQUFjLEVBQUUsVUFBb0I7UUFDaEQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FDekIsR0FBRyxvQkFBb0IsQ0FBQyxRQUFR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QUNwQixHQUFHLENBQUMsVUFBVSxFQUFFLHNDQUFzQyxDQUFDO2lCQUN2RCxHQUFHLENBQUMsTUFBTSxFQUFFLGdCQUFnQixDQUFDO1lBQ2hDLEtBQUssRUFBRSxJQUFJO1lBQ1gsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLEdBQVc7UUFDckIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRUQsVUFBVSxDQUFDLElBQUk7UUFDYixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsNEJBQTRCLENBQUMsSUFBSTtRQUMvQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakcsQ0FBQzt3R0F6RlUscUJBQXFCOzRHQUFyQixxQkFBcUIsY0FGcEIsTUFBTTs7NEZBRVAscUJBQXFCO2tCQUhqQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neGZVcGxvYWRlclNlcnZpY2UgfSBmcm9tICduZ3hmLXVwbG9hZGVyJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IER5bmFtaWNUYWJQYWdlQ29uZmlnIH0gZnJvbSAnLi4vdXJsL2R5bmFtaWMtdGFiLXBhZ2UtdXJsLmNvbmZpZyc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljVGFiUGFnZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgaXNQYWdlRGVzaWduID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgb2JzZXJ2ZVBhZ2UgPSB0aGlzLmlzUGFnZURlc2lnbi5hc09ic2VydmFibGUoKTtcclxuICBodHRwU2VydmljZTogYW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXBsb2FkU2VydmljZTogTmd4ZlVwbG9hZGVyU2VydmljZSwgcHJpdmF0ZSBfc3RvcmVzZXJ2aWNlOiBEYXRhU3RvcmVTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLl9zdG9yZXNlcnZpY2UuY3VycmVudFN0b3JlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UgPSByZXNbJ0hUVFBTRVJWSUNFJ11cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldEFjdGl2ZVBhZ2UodGFiUGFnZUlkOiBhbnksIHBlcm1pc3Npb24/OiBib29sZWFuKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoXHJcbiAgICAgIGAke0R5bmFtaWNUYWJQYWdlQ29uZmlnLkVuZFBvaW50LlBhZ2UuZ2V0QWN0aXZlUGFnZS5yZXBsYWNlKCd7aWR9JywgdGFiUGFnZUlkKX0ke1xyXG4gICAgICAgIHBlcm1pc3Npb24gPyAnP2FwcGx5UGVybWlzc2lvbnM9dHJ1ZScgOiAnJ1xyXG4gICAgICB9YFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldER5bmFtaWNQYWdlKHBhZ2VJZDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoYCR7RHluYW1pY1RhYlBhZ2VDb25maWcuRW5kUG9pbnQuUGFnZS5nZXRQYWdlfS8ke3BhZ2VJZH1gKTtcclxuICB9XHJcblxyXG4gIGdldFBhZ2VCeUlkKHBhZ2VJZDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoRHluYW1pY1RhYlBhZ2VDb25maWcuRW5kUG9pbnQuUGFnZS5nZXRQYWdlQnlJZC5yZXBsYWNlKCd7aWR9JywgcGFnZUlkKSk7XHJcbiAgfVxyXG5cclxuICBnZXRMaXN0QnlTb3VyY2VJZChzb3VyY2VJZDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoRHluYW1pY1RhYlBhZ2VDb25maWcuRW5kUG9pbnQuTmFycmF0aXZlLmdldEluY2lkZW50TGlzdEJ5SWQucmVwbGFjZSgne2lkfScsIHNvdXJjZUlkKSk7XHJcbiAgfVxyXG5cclxuICBnZXRSZXNwb25zZUJ5UGFnZUlkKHJlc3BvbnNlSWQ6IGFueSwgcGFnZUlkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChcclxuICAgICAgRHluYW1pY1RhYlBhZ2VDb25maWcuRW5kUG9pbnQuUGFnZS5nZXRSZXNwb25zZUJ5UGFnZUlkXHJcbiAgICAgICAgLnJlcGxhY2UoJ3tyZXNwb25zZUlkfScsIHJlc3BvbnNlSWQpXHJcbiAgICAgICAgLnJlcGxhY2UoJ3twYWdlSWR9JywgcGFnZUlkKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUZvcm1SZXNwb25zZShpZDogYW55LCByZXF1ZXN0RGF0YSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChcclxuICAgICAgaWRcclxuICAgICAgICA/IER5bmFtaWNUYWJQYWdlQ29uZmlnLkVuZFBvaW50LlBhZ2UudXBkYXRlRm9ybVJlc3BvbnNlXHJcbiAgICAgICAgOiBEeW5hbWljVGFiUGFnZUNvbmZpZy5FbmRQb2ludC5QYWdlLmNyZWF0ZUZvcm1SZXNwb25zZSxcclxuICAgICAgcmVxdWVzdERhdGFcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVVc2VyU3VydmV5KGhpc3RvcnksIElkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoXHJcbiAgICAgIER5bmFtaWNUYWJQYWdlQ29uZmlnLkVuZFBvaW50Lk5vdGlmaWNhdGlvbi5jcmVhdGVTdXJ2ZXlDb25maWdcclxuICAgICAgICAucmVwbGFjZSgne2lkfScsIGhpc3Rvcnk/LnN0YXRlPy51c2Vyc3VydmV5aWQpXHJcbiAgICAgICAgLnJlcGxhY2UoJ3tzdGF0dXN9JywgJ0NvbXBsZXRlZCcpXHJcbiAgICAgICAgLnJlcGxhY2UoJ3twYWdlZGF0YWlkfScsIElkKSxcclxuICAgICAge31cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVGb3JtUmVzcG9uc2UoaWQ6IGFueSwgcmVxdWVzdERhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucGF0Y2goYCR7RHluYW1pY1RhYlBhZ2VDb25maWcuRW5kUG9pbnQuUGFnZS5wYXRjaEZvcm1SZXNwb25zZX0vJHtpZH1gLCByZXF1ZXN0RGF0YSk7XHJcbiAgfVxyXG5cclxuICBleHBvcnRSZXBvcnQoZGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KER5bmFtaWNUYWJQYWdlQ29uZmlnLkVuZFBvaW50LkZpbmFuY2UuZXhwb3J0RG9jdW1lbnQsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgdXBsb2FkRmlsZShmaWxlOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLnVwbG9hZFNlcnZpY2UudXBsb2FkKHtcclxuICAgICAgdXJsOiB0aGlzLmh0dHBTZXJ2aWNlLmJhc2VVcmwgKyAnLycgKyBEeW5hbWljVGFiUGFnZUNvbmZpZy5FbmRQb2ludC5GaW5hbmNlLnVwbG9hZERvY3VtZW50LFxyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoKVxyXG4gICAgICAgIC5zZXQoJ2N0eXBlJywgJ2ZpbGUnKVxyXG4gICAgICAgIC5zZXQoJ3VuaXF1ZWlkJywgJzZiNjFhYzFlLTIyMWEtNDk1Yy05NTdiLWFkODVmNjViZTI1YScpXHJcbiAgICAgICAgLnNldCgncm9sZScsICdyb2xlPUNQX1BVQkxJQycpLFxyXG4gICAgICBmaWxlczogZmlsZSxcclxuICAgICAgcHJvY2VzczogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRVbmlxdWVJZChhcGk6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KER5bmFtaWNUYWJQYWdlQ29uZmlnLkVuZFBvaW50LkZpbmFuY2UuZ2V0VW5pcXVlSWQgKyBhcGkpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlUGFnZShwYWdlKSB7XHJcbiAgICB0aGlzLmlzUGFnZURlc2lnbi5uZXh0KHBhZ2UpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRm9ybVJlc3BvbnNlQXR0YWNobWVudChkYXRhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KER5bmFtaWNUYWJQYWdlQ29uZmlnLkVuZFBvaW50LkF0dGFjaG1lbnRzLmNyZWF0ZUF0dGFjaG1lbnQsIGRhdGEpO1xyXG4gIH1cclxufVxyXG4iXX0=