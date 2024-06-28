import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../../@core/services/auth.service';
import { DynamicTabPageService } from '../../@core/services/dynamic-tab-page-service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../@core/services/formio.service";
import * as i3 from "./@core/page-builder-view.service";
import * as i4 from "@angular/common";
import * as i5 from "../../@core/services/local.service";
import * as i6 from "@formio/angular";
export class PageBuilderViewComponent {
    route;
    _formIO;
    pageBuilderViewService;
    location;
    localstore;
    formId;
    jsonForm;
    fromTitle;
    id;
    submittedData;
    isformIO = false;
    routingConfig = false;
    appointmentList;
    formIO;
    dynamicTabPageService;
    pageid;
    editValue;
    authService;
    loggedUser;
    facility = [];
    providerData;
    constructor(injector, route, _formIO, pageBuilderViewService, location, localstore) {
        this.route = route;
        this._formIO = _formIO;
        this.pageBuilderViewService = pageBuilderViewService;
        this.location = location;
        this.localstore = localstore;
        this.dynamicTabPageService = injector.get(DynamicTabPageService);
        this.authService = injector.get(AuthService);
        this.loggedUser = this.localstore.getObj('user');
    }
    ngOnInit() {
        this.loggedUser = this.localstore.getObj('user');
        this.formId = this.route.snapshot.paramMap.get('id');
        this.editValue = this.localstore.getObj('editValue');
        this.pageBuilderViewService.getPageVersionByid(this.formId).subscribe((result) => {
            if (result) {
                this.conditionCheckPageBuilder(result);
                if (this.editValue) {
                    this.submittedData = {
                        data: this.editValue
                    };
                    this.submittedData.data['edit'] = true;
                }
                else {
                    this.submittedData = { data: {} };
                }
                this.pageBuilderViewService.getPageVersionByid(this.formId).subscribe((res) => {
                    if (res) {
                        this.id = res?.data.id;
                        this.pageid = res?.data.pageid;
                        this.submittedData = res?.data.submissiondata ? JSON.parse(res?.data.submissiondata) : this.submittedData;
                        setTimeout(() => {
                            this.modifyVideoContent();
                        }, 300);
                    }
                });
            }
            if (result.data.tabconfig) {
                const routingTab = JSON.parse(result.data.tabconfig);
                const routingPage = routingTab.filter(x => x.type === 'ROUTING');
                if (routingPage.length > 0) {
                    if (routingPage[0].pathname === 'CreateSitevisitComponent') {
                        this.routingConfig = true;
                        this.appointmentList = Promise.resolve(true);
                    }
                }
            }
        });
    }
    conditionCheckPageBuilder(result) {
        if (result.data.templatejson) {
            this.isformIO = true;
            this.jsonForm = JSON.parse(result.data.templatejson);
            this.fromTitle = this.jsonForm && this.jsonForm['page'] ? this.jsonForm['page'] : result.data.pagename;
        }
    }
    modifyVideoContent() {
        const videoElements = document.querySelectorAll('.changetoIframe');
        if (videoElements && videoElements.length) {
            videoElements.forEach((element) => {
                const src = element.src;
                const ifrm = document.createElement('iframe');
                ifrm.setAttribute('src', src);
                ifrm.style.width = element.width ? element.width + 'px' : '';
                ifrm.style.height = element.height ? element.height + 'px' : '';
                element.replaceWith(ifrm);
            });
        }
    }
    onSubmit(submission) {
        const submissionData = JSON.parse(JSON.stringify(submission));
        console.log(submissionData, 'fdfasd');
        if (!submissionData?.data?.provider_id) {
            submissionData.data.provider_id = this.localstore.getObj('providerId');
        }
        this.facilityDetails(submissionData?.data?.provider_id, submissionData);
    }
    addAttachment(info) {
        this.dynamicTabPageService.createFormResponseAttachment(info).subscribe(res => console.log(res));
    }
    goBack() {
        this.localstore.removeItem('titletab');
        this.localstore.removeItem('editValue');
        this.localstore.removeItem('target-tab-filter');
        this.location.back();
    }
    customEvent(event) {
        this._formIO.customEvent(event, this.formIO);
    }
    facilityDetails(id, submissionData) {
        const fileUploadData = this.authService.getSharedMessage();
        this.pageBuilderViewService.getFacilityDetails(id).subscribe((result) => {
            if (submissionData?.data?.provider_id != undefined && result.data.length == 0) {
                this.facility = result.data[result.data.length - 1];
                const data = submissionData.data && submissionData.data.data && submissionData.data.data.editGrid
                    ? submissionData.data.data
                    : submissionData.data;
                delete data.ribbonData;
                data.provider_id = id;
                if ((this, this.facility?.id)) {
                    data.facility_id = this.facility?.id;
                    data.facilty_id = this.facility?.id;
                }
                const requestData = {
                    pageid: this.pageid,
                    response: data
                };
                if (this.id && this.submittedData.data.edit) {
                    const id1 = this.submittedData.data.id;
                    this.dynamicTabPageService.updateFormResponse(id1, requestData).subscribe(() => {
                        const fileUploadInfo = Object.assign({ responseid: Number(result['data']['id']) }, fileUploadData);
                        if (fileUploadData?.attachmentdetails) {
                            this.addAttachment(fileUploadInfo);
                        }
                        this.goBack();
                    });
                }
                else {
                    const id2 = null;
                    this.dynamicTabPageService.createFormResponse(id2, requestData).subscribe(res => {
                        const fileUploadInfo = Object.assign({ responseid: Number(res['data']['id']) }, fileUploadData);
                        if (fileUploadData?.attachmentdetails) {
                            this.addAttachment(fileUploadInfo);
                        }
                        this.goBack();
                    });
                }
            }
            else if (submissionData?.data?.provider_id != undefined && result.data.length > 0) {
                this.facility = result.data[result.data.length - 1];
                const data = submissionData.data && submissionData.data.data && submissionData.data.data.editGrid
                    ? submissionData.data.data
                    : submissionData.data;
                delete data.ribbonData;
                data.provider_id = id;
                data.facilty_id = this.facility?.id;
                data.facility_id = this.facility?.id;
                const requestData = {
                    pageid: this.pageid,
                    response: data
                };
                if (this.id && this.submittedData.data.edit) {
                    const id3 = this.submittedData.data.id;
                    this.dynamicTabPageService.updateFormResponse(id3, requestData).subscribe(() => {
                        this.goBack();
                    });
                }
                else {
                    const id4 = null;
                    this.dynamicTabPageService.createFormResponse(id4, requestData).subscribe(_res => {
                        const fileUploadInfo = Object.assign({ responseid: Number(_res['data']['id']) }, fileUploadData);
                        if (fileUploadData?.attachmentdetails) {
                            this.addAttachment(fileUploadInfo);
                        }
                        this.goBack();
                    });
                }
            }
            else {
                const data = submissionData.data && submissionData.data.data && submissionData.data.data.editGrid
                    ? submissionData.data.data
                    : submissionData.data;
                delete data.ribbonData;
                const requestData = {
                    pageid: this.pageid,
                    response: data
                };
                if (this.id && this.submittedData.data.edit) {
                    const id5 = this.submittedData.data.id;
                    this.dynamicTabPageService.updateFormResponse(id5, requestData).subscribe(value => {
                        const fileUploadInfo = Object.assign({ responseid: Number(value['data']['id']) }, fileUploadData);
                        if (fileUploadData?.attachmentdetails) {
                            this.addAttachment(fileUploadInfo);
                        }
                        this.goBack();
                    });
                }
                else {
                    const id6 = null;
                    this.dynamicTabPageService.createFormResponse(id6, requestData).subscribe(_value => {
                        const fileUploadInfo = Object.assign({ responseid: Number(_value['data']['id']) }, fileUploadData);
                        if (fileUploadData?.attachmentdetails) {
                            this.addAttachment(fileUploadInfo);
                        }
                        this.goBack();
                    });
                }
            }
        }, _error => {
            // this is intentional
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderViewComponent, deps: [{ token: i0.Injector }, { token: i1.ActivatedRoute }, { token: i2.FormioService }, { token: i3.PageBuilderViewService }, { token: i4.Location }, { token: i5.LocalService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: PageBuilderViewComponent, selector: "app-page-builder-view", viewQueries: [{ propertyName: "formIO", first: true, predicate: ["formIO"], descendants: true }], ngImport: i0, template: "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"d-flex justify-content-between align-items-center col-12 my-3\">\r\n      <h6 class=\"font-weight-bold mb-0 fromTitle\">{{ fromTitle }}</h6>\r\n      <button type=\"button\" class=\"btn btn-cancel\" (click)=\"goBack()\">Back</button>\r\n    </div>\r\n    <div class=\"col-12\" *ngIf=\"isformIO\">\r\n      <formio\r\n        #formIO\r\n        [form]=\"jsonForm\"\r\n        [submission]=\"submittedData\"\r\n        (submit)=\"onSubmit($event)\"\r\n        (customEvent)=\"customEvent($event)\"></formio>\r\n    </div>\r\n    <!-- <div class=\"col-12\" *ngIf=\"appointmentList | async\">\r\n      <app-create-sitevisit></app-create-sitevisit>\r\n    </div> -->\r\n  </div>\r\n</div>\r\n", styles: [".container-fluid{background:#fff}\n"], dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i6.FormioComponent, selector: "formio" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-page-builder-view', template: "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"d-flex justify-content-between align-items-center col-12 my-3\">\r\n      <h6 class=\"font-weight-bold mb-0 fromTitle\">{{ fromTitle }}</h6>\r\n      <button type=\"button\" class=\"btn btn-cancel\" (click)=\"goBack()\">Back</button>\r\n    </div>\r\n    <div class=\"col-12\" *ngIf=\"isformIO\">\r\n      <formio\r\n        #formIO\r\n        [form]=\"jsonForm\"\r\n        [submission]=\"submittedData\"\r\n        (submit)=\"onSubmit($event)\"\r\n        (customEvent)=\"customEvent($event)\"></formio>\r\n    </div>\r\n    <!-- <div class=\"col-12\" *ngIf=\"appointmentList | async\">\r\n      <app-create-sitevisit></app-create-sitevisit>\r\n    </div> -->\r\n  </div>\r\n</div>\r\n", styles: [".container-fluid{background:#fff}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.ActivatedRoute }, { type: i2.FormioService }, { type: i3.PageBuilderViewService }, { type: i4.Location }, { type: i5.LocalService }]; }, propDecorators: { formIO: [{
                type: ViewChild,
                args: ['formIO']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1idWlsZGVyLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvcGFnZS1idWlsZGVyL3NyYy9saWIvcGljcy1wYWdlYnVpbGRlci9wYWdlLWJ1aWxkZXIvcGFnZS1idWlsZGVyLXZpZXcvcGFnZS1idWlsZGVyLXZpZXcuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvcGFnZS1idWlsZGVyL3NyYy9saWIvcGljcy1wYWdlYnVpbGRlci9wYWdlLWJ1aWxkZXIvcGFnZS1idWlsZGVyLXZpZXcvcGFnZS1idWlsZGVyLXZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBb0IsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3ZFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7Ozs7Ozs7QUFTdEYsTUFBTSxPQUFPLHdCQUF3QjtJQXFCekI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQXhCVixNQUFNLENBQU07SUFDWixRQUFRLENBQU07SUFDZCxTQUFTLENBQU07SUFDZixFQUFFLENBQU07SUFDUixhQUFhLENBQU07SUFDbkIsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUNqQixhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLGVBQWUsQ0FBK0I7SUFFOUMsTUFBTSxDQUFrQjtJQUN4QixxQkFBcUIsQ0FBd0I7SUFDN0MsTUFBTSxDQUFNO0lBQ1osU0FBUyxDQUFNO0lBQ2YsV0FBVyxDQUFjO0lBQ3pCLFVBQVUsQ0FBTTtJQUNoQixRQUFRLEdBQVEsRUFBRSxDQUFDO0lBQ25CLFlBQVksQ0FBTTtJQUVsQixZQUNFLFFBQWtCLEVB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QUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDaEIsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7YUFDRjtRQUNILENBQUMsRUFDRCxNQUFNLENBQUMsRUFBRTtZQUNQLHNCQUFzQjtRQUN4QixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7d0dBNU5VLHdCQUF3Qjs0RkFBeEIsd0JBQXdCLCtKQ2RyQyw4dkJBbUJBOzs0RkRMYSx3QkFBd0I7a0JBTHBDLFNBQVM7K0JBQ0UsdUJBQXVCOytPQWNqQyxNQUFNO3NCQURMLFNBQVM7dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBGb3JtaW9Db21wb25lbnQgfSBmcm9tICdAZm9ybWlvL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IER5bmFtaWNUYWJQYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2VzL2R5bmFtaWMtdGFiLXBhZ2Utc2VydmljZSc7XHJcbmltcG9ydCB7IEZvcm1pb1NlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlcy9mb3JtaW8uc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2FsU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2VzL2xvY2FsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYWdlQnVpbGRlclZpZXdTZXJ2aWNlIH0gZnJvbSAnLi9AY29yZS9wYWdlLWJ1aWxkZXItdmlldy5zZXJ2aWNlJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcGFnZS1idWlsZGVyLXZpZXcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlLWJ1aWxkZXItdmlldy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGFnZS1idWlsZGVyLXZpZXcuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZUJ1aWxkZXJWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBmb3JtSWQ6IGFueTtcclxuICBqc29uRm9ybTogYW55O1xyXG4gIGZyb21UaXRsZTogYW55O1xyXG4gIGlkOiBhbnk7XHJcbiAgc3VibWl0dGVkRGF0YTogYW55O1xyXG4gIGlzZm9ybUlPID0gZmFsc2U7XHJcbiAgcm91dGluZ0NvbmZpZyA9IGZhbHNlO1xyXG4gIGFwcG9pbnRtZW50TGlzdDogUHJvbWlzZTxib29sZWFuPiB8IHVuZGVmaW5lZDtcclxuICBAVmlld0NoaWxkKCdmb3JtSU8nKVxyXG4gIGZvcm1JTzogRm9ybWlvQ29tcG9uZW50O1xyXG4gIGR5bmFtaWNUYWJQYWdlU2VydmljZTogRHluYW1pY1RhYlBhZ2VTZXJ2aWNlO1xyXG4gIHBhZ2VpZDogYW55O1xyXG4gIGVkaXRWYWx1ZTogYW55O1xyXG4gIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZTtcclxuICBsb2dnZWRVc2VyOiBhbnk7XHJcbiAgZmFjaWxpdHk6IGFueSA9IFtdO1xyXG4gIHByb3ZpZGVyRGF0YTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBfZm9ybUlPOiBGb3JtaW9TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwYWdlQnVpbGRlclZpZXdTZXJ2aWNlOiBQYWdlQnVpbGRlclZpZXdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXHJcbiAgICBwcml2YXRlIGxvY2Fsc3RvcmU6IExvY2FsU2VydmljZSxcclxuICApIHtcclxuICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlID0gaW5qZWN0b3IuZ2V0PER5bmFtaWNUYWJQYWdlU2VydmljZT4oRHluYW1pY1RhYlBhZ2VTZXJ2aWNlKTtcclxuICAgIHRoaXMuYXV0aFNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8QXV0aFNlcnZpY2U+KEF1dGhTZXJ2aWNlKTtcclxuICAgIHRoaXMubG9nZ2VkVXNlciA9IHRoaXMubG9jYWxzdG9yZS5nZXRPYmooJ3VzZXInKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2dnZWRVc2VyID0gdGhpcy5sb2NhbHN0b3JlLmdldE9iaigndXNlcicpO1xyXG4gICAgdGhpcy5mb3JtSWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKTtcclxuICAgIHRoaXMuZWRpdFZhbHVlID0gdGhpcy5sb2NhbHN0b3JlLmdldE9iaignZWRpdFZhbHVlJyk7XHJcblxyXG4gICAgdGhpcy5wYWdlQnVpbGRlclZpZXdTZXJ2aWNlLmdldFBhZ2VWZXJzaW9uQnlpZCh0aGlzLmZvcm1JZCkuc3Vic2NyaWJlKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb25DaGVja1BhZ2VCdWlsZGVyKHJlc3VsdCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZWRpdFZhbHVlKSB7XHJcbiAgICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEgPSB7XHJcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuZWRpdFZhbHVlXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGFbJ2VkaXQnXSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHsgZGF0YToge30gfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYWdlQnVpbGRlclZpZXdTZXJ2aWNlLmdldFBhZ2VWZXJzaW9uQnlpZCh0aGlzLmZvcm1JZCkuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gcmVzPy5kYXRhLmlkO1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VpZCA9IHJlcz8uZGF0YS5wYWdlaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHJlcz8uZGF0YS5zdWJtaXNzaW9uZGF0YSA/IEpTT04ucGFyc2UocmVzPy5kYXRhLnN1Ym1pc3Npb25kYXRhKSA6IHRoaXMuc3VibWl0dGVkRGF0YTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5tb2RpZnlWaWRlb0NvbnRlbnQoKTtcclxuICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocmVzdWx0LmRhdGEudGFiY29uZmlnKSB7XHJcbiAgICAgICAgY29uc3Qgcm91dGluZ1RhYiA9IEpTT04ucGFyc2UocmVzdWx0LmRhdGEudGFiY29uZmlnKTtcclxuICAgICAgICBjb25zdCByb3V0aW5nUGFnZSA9IHJvdXRpbmdUYWIuZmlsdGVyKHggPT4geC50eXBlID09PSAnUk9VVElORycpO1xyXG4gICAgICAgIGlmIChyb3V0aW5nUGFnZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBpZiAocm91dGluZ1BhZ2VbMF0ucGF0aG5hbWUgPT09ICdDcmVhdGVTaXRldmlzaXRDb21wb25lbnQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGluZ0NvbmZpZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwb2ludG1lbnRMaXN0ID0gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25kaXRpb25DaGVja1BhZ2VCdWlsZGVyKHJlc3VsdCkge1xyXG4gICAgaWYgKHJlc3VsdC5kYXRhLnRlbXBsYXRlanNvbikge1xyXG4gICAgICB0aGlzLmlzZm9ybUlPID0gdHJ1ZTtcclxuICAgICAgdGhpcy5qc29uRm9ybSA9IEpTT04ucGFyc2UocmVzdWx0LmRhdGEudGVtcGxhdGVqc29uKTtcclxuICAgICAgdGhpcy5mcm9tVGl0bGUgPSB0aGlzLmpzb25Gb3JtICYmIHRoaXMuanNvbkZvcm1bJ3BhZ2UnXSA/IHRoaXMuanNvbkZvcm1bJ3BhZ2UnXSA6IHJlc3VsdC5kYXRhLnBhZ2VuYW1lO1xyXG4gICAgfVxyXG4gIH1cclxuICBtb2RpZnlWaWRlb0NvbnRlbnQoKSB7XHJcbiAgICBjb25zdCB2aWRlb0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYW5nZXRvSWZyYW1lJyk7XHJcbiAgICBpZiAodmlkZW9FbGVtZW50cyAmJiB2aWRlb0VsZW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICB2aWRlb0VsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNyYyA9IGVsZW1lbnQuc3JjO1xyXG4gICAgICAgIGNvbnN0IGlmcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuICAgICAgICBpZnJtLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcclxuICAgICAgICBpZnJtLnN0eWxlLndpZHRoID0gZWxlbWVudC53aWR0aCA/IGVsZW1lbnQud2lkdGggKyAncHgnIDogJyc7XHJcbiAgICAgICAgaWZybS5zdHlsZS5oZWlnaHQgPSBlbGVtZW50LmhlaWdodCA/IGVsZW1lbnQuaGVpZ2h0ICsgJ3B4JyA6ICcnO1xyXG4gICAgICAgIGVsZW1lbnQucmVwbGFjZVdpdGgoaWZybSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQoc3VibWlzc2lvbik6IHZvaWQge1xyXG4gICAgY29uc3Qgc3VibWlzc2lvbkRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN1Ym1pc3Npb24pKTtcclxuICAgIGNvbnNvbGUubG9nKHN1Ym1pc3Npb25EYXRhLCAnZmRmYXNkJyk7XHJcbiAgICBpZiAoIXN1Ym1pc3Npb25EYXRhPy5kYXRhPy5wcm92aWRlcl9pZCkge1xyXG4gICAgICBzdWJtaXNzaW9uRGF0YS5kYXRhLnByb3ZpZGVyX2lkID0gdGhpcy5sb2NhbHN0b3JlLmdldE9iaigncHJvdmlkZXJJZCcpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5mYWNpbGl0eURldGFpbHMoc3VibWlzc2lvbkRhdGE/LmRhdGE/LnByb3ZpZGVyX2lkLCBzdWJtaXNzaW9uRGF0YSk7XHJcbiAgfVxyXG5cclxuICBhZGRBdHRhY2htZW50KGluZm8pIHtcclxuICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmNyZWF0ZUZvcm1SZXNwb25zZUF0dGFjaG1lbnQoaW5mbykuc3Vic2NyaWJlKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKTtcclxuICB9XHJcblxyXG4gIGdvQmFjaygpOiB2b2lkIHtcclxuICAgIHRoaXMubG9jYWxzdG9yZS5yZW1vdmVJdGVtKCd0aXRsZXRhYicpO1xyXG4gICAgdGhpcy5sb2NhbHN0b3JlLnJlbW92ZUl0ZW0oJ2VkaXRWYWx1ZScpO1xyXG4gICAgdGhpcy5sb2NhbHN0b3JlLnJlbW92ZUl0ZW0oJ3RhcmdldC10YWItZmlsdGVyJyk7XHJcbiAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcclxuICB9XHJcblxyXG4gIGN1c3RvbUV2ZW50KGV2ZW50KSB7XHJcbiAgICB0aGlzLl9mb3JtSU8uY3VzdG9tRXZlbnQoZXZlbnQsIHRoaXMuZm9ybUlPKTtcclxuICB9XHJcblxyXG4gIGZhY2lsaXR5RGV0YWlscyhpZCwgc3VibWlzc2lvbkRhdGEpIHtcclxuICAgIGNvbnN0IGZpbGVVcGxvYWREYXRhID0gdGhpcy5hdXRoU2VydmljZS5nZXRTaGFyZWRNZXNzYWdlKCk7XHJcbiAgICB0aGlzLnBhZ2VCdWlsZGVyVmlld1NlcnZpY2UuZ2V0RmFjaWxpdHlEZXRhaWxzKGlkKS5zdWJzY3JpYmUoXHJcbiAgICAgIChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChzdWJtaXNzaW9uRGF0YT8uZGF0YT8ucHJvdmlkZXJfaWQgIT0gdW5kZWZpbmVkICYmIHJlc3VsdC5kYXRhLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLmZhY2lsaXR5ID0gcmVzdWx0LmRhdGFbcmVzdWx0LmRhdGEubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICBjb25zdCBkYXRhID1cclxuICAgICAgICAgICAgc3VibWlzc2lvbkRhdGEuZGF0YSAmJiBzdWJtaXNzaW9uRGF0YS5kYXRhLmRhdGEgJiYgc3VibWlzc2lvbkRhdGEuZGF0YS5kYXRhLmVkaXRHcmlkXHJcbiAgICAgICAgICAgICAgPyBzdWJtaXNzaW9uRGF0YS5kYXRhLmRhdGFcclxuICAgICAgICAgICAgICA6IHN1Ym1pc3Npb25EYXRhLmRhdGE7XHJcbiAgICAgICAgICBkZWxldGUgZGF0YS5yaWJib25EYXRhO1xyXG4gICAgICAgICAgZGF0YS5wcm92aWRlcl9pZCA9IGlkO1xyXG4gICAgICAgICAgaWYgKCh0aGlzLCB0aGlzLmZhY2lsaXR5Py5pZCkpIHtcclxuICAgICAgICAgICAgZGF0YS5mYWNpbGl0eV9pZCA9IHRoaXMuZmFjaWxpdHk/LmlkO1xyXG4gICAgICAgICAgICBkYXRhLmZhY2lsdHlfaWQgPSB0aGlzLmZhY2lsaXR5Py5pZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IHJlcXVlc3REYXRhID0ge1xyXG4gICAgICAgICAgICBwYWdlaWQ6IHRoaXMucGFnZWlkLFxyXG4gICAgICAgICAgICByZXNwb25zZTogZGF0YVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGlmICh0aGlzLmlkICYmIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLmVkaXQpIHtcclxuICAgICAgICAgICAgY29uc3QgaWQxID0gdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEuaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLnVwZGF0ZUZvcm1SZXNwb25zZShpZDEsIHJlcXVlc3REYXRhKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGZpbGVVcGxvYWRJbmZvID0gT2JqZWN0LmFzc2lnbih7IHJlc3BvbnNlaWQ6IE51bWJlcihyZXN1bHRbJ2RhdGEnXVsnaWQnXSkgfSwgZmlsZVVwbG9hZERhdGEpO1xyXG4gICAgICAgICAgICAgIGlmIChmaWxlVXBsb2FkRGF0YT8uYXR0YWNobWVudGRldGFpbHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQXR0YWNobWVudChmaWxlVXBsb2FkSW5mbyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRoaXMuZ29CYWNrKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgaWQyID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UuY3JlYXRlRm9ybVJlc3BvbnNlKGlkMiwgcmVxdWVzdERhdGEpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGZpbGVVcGxvYWRJbmZvID0gT2JqZWN0LmFzc2lnbih7IHJlc3BvbnNlaWQ6IE51bWJlcihyZXNbJ2RhdGEnXVsnaWQnXSkgfSwgZmlsZVVwbG9hZERhdGEpO1xyXG4gICAgICAgICAgICAgIGlmIChmaWxlVXBsb2FkRGF0YT8uYXR0YWNobWVudGRldGFpbHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQXR0YWNobWVudChmaWxlVXBsb2FkSW5mbyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRoaXMuZ29CYWNrKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoc3VibWlzc2lvbkRhdGE/LmRhdGE/LnByb3ZpZGVyX2lkICE9IHVuZGVmaW5lZCAmJiByZXN1bHQuZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLmZhY2lsaXR5ID0gcmVzdWx0LmRhdGFbcmVzdWx0LmRhdGEubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICBjb25zdCBkYXRhID1cclxuICAgICAgICAgICAgc3VibWlzc2lvbkRhdGEuZGF0YSAmJiBzdWJtaXNzaW9uRGF0YS5kYXRhLmRhdGEgJiYgc3VibWlzc2lvbkRhdGEuZGF0YS5kYXRhLmVkaXRHcmlkXHJcbiAgICAgICAgICAgICAgPyBzdWJtaXNzaW9uRGF0YS5kYXRhLmRhdGFcclxuICAgICAgICAgICAgICA6IHN1Ym1pc3Npb25EYXRhLmRhdGE7XHJcbiAgICAgICAgICBkZWxldGUgZGF0YS5yaWJib25EYXRhO1xyXG4gICAgICAgICAgZGF0YS5wcm92aWRlcl9pZCA9IGlkO1xyXG4gICAgICAgICAgZGF0YS5mYWNpbHR5X2lkID0gdGhpcy5mYWNpbGl0eT8uaWQ7XHJcbiAgICAgICAgICBkYXRhLmZhY2lsaXR5X2lkID0gdGhpcy5mYWNpbGl0eT8uaWQ7XHJcbiAgICAgICAgICBjb25zdCByZXF1ZXN0RGF0YSA9IHtcclxuICAgICAgICAgICAgcGFnZWlkOiB0aGlzLnBhZ2VpZCxcclxuICAgICAgICAgICAgcmVzcG9uc2U6IGRhdGFcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBpZiAodGhpcy5pZCAmJiB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS5lZGl0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkMyA9IHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLmlkO1xyXG4gICAgICAgICAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS51cGRhdGVGb3JtUmVzcG9uc2UoaWQzLCByZXF1ZXN0RGF0YSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmdvQmFjaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkNCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmNyZWF0ZUZvcm1SZXNwb25zZShpZDQsIHJlcXVlc3REYXRhKS5zdWJzY3JpYmUoX3JlcyA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZmlsZVVwbG9hZEluZm8gPSBPYmplY3QuYXNzaWduKHsgcmVzcG9uc2VpZDogTnVtYmVyKF9yZXNbJ2RhdGEnXVsnaWQnXSkgfSwgZmlsZVVwbG9hZERhdGEpO1xyXG4gICAgICAgICAgICAgIGlmIChmaWxlVXBsb2FkRGF0YT8uYXR0YWNobWVudGRldGFpbHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQXR0YWNobWVudChmaWxlVXBsb2FkSW5mbyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRoaXMuZ29CYWNrKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBkYXRhID1cclxuICAgICAgICAgICAgc3VibWlzc2lvbkRhdGEuZGF0YSAmJiBzdWJtaXNzaW9uRGF0YS5kYXRhLmRhdGEgJiYgc3VibWlzc2lvbkRhdGEuZGF0YS5kYXRhLmVkaXRHcmlkXHJcbiAgICAgICAgICAgICAgPyBzdWJtaXNzaW9uRGF0YS5kYXRhLmRhdGFcclxuICAgICAgICAgICAgICA6IHN1Ym1pc3Npb25EYXRhLmRhdGE7XHJcbiAgICAgICAgICBkZWxldGUgZGF0YS5yaWJib25EYXRhO1xyXG4gICAgICAgICAgY29uc3QgcmVxdWVzdERhdGEgPSB7XHJcbiAgICAgICAgICAgIHBhZ2VpZDogdGhpcy5wYWdlaWQsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlOiBkYXRhXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgaWYgKHRoaXMuaWQgJiYgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEuZWRpdCkge1xyXG4gICAgICAgICAgICBjb25zdCBpZDUgPSB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS5pZDtcclxuICAgICAgICAgICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UudXBkYXRlRm9ybVJlc3BvbnNlKGlkNSwgcmVxdWVzdERhdGEpLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZmlsZVVwbG9hZEluZm8gPSBPYmplY3QuYXNzaWduKHsgcmVzcG9uc2VpZDogTnVtYmVyKHZhbHVlWydkYXRhJ11bJ2lkJ10pIH0sIGZpbGVVcGxvYWREYXRhKTtcclxuICAgICAgICAgICAgICBpZiAoZmlsZVVwbG9hZERhdGE/LmF0dGFjaG1lbnRkZXRhaWxzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEF0dGFjaG1lbnQoZmlsZVVwbG9hZEluZm8pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0aGlzLmdvQmFjaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkNiA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmNyZWF0ZUZvcm1SZXNwb25zZShpZDYsIHJlcXVlc3REYXRhKS5zdWJzY3JpYmUoX3ZhbHVlID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBmaWxlVXBsb2FkSW5mbyA9IE9iamVjdC5hc3NpZ24oeyByZXNwb25zZWlkOiBOdW1iZXIoX3ZhbHVlWydkYXRhJ11bJ2lkJ10pIH0sIGZpbGVVcGxvYWREYXRhKTtcclxuICAgICAgICAgICAgICBpZiAoZmlsZVVwbG9hZERhdGE/LmF0dGFjaG1lbnRkZXRhaWxzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEF0dGFjaG1lbnQoZmlsZVVwbG9hZEluZm8pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0aGlzLmdvQmFjaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIF9lcnJvciA9PiB7XHJcbiAgICAgICAgLy8gdGhpcyBpcyBpbnRlbnRpb25hbFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgY29sLTEyIG15LTNcIj5cclxuICAgICAgPGg2IGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZCBtYi0wIGZyb21UaXRsZVwiPnt7IGZyb21UaXRsZSB9fTwvaDY+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1jYW5jZWxcIiAoY2xpY2spPVwiZ29CYWNrKClcIj5CYWNrPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIiAqbmdJZj1cImlzZm9ybUlPXCI+XHJcbiAgICAgIDxmb3JtaW9cclxuICAgICAgICAjZm9ybUlPXHJcbiAgICAgICAgW2Zvcm1dPVwianNvbkZvcm1cIlxyXG4gICAgICAgIFtzdWJtaXNzaW9uXT1cInN1Ym1pdHRlZERhdGFcIlxyXG4gICAgICAgIChzdWJtaXQpPVwib25TdWJtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgKGN1c3RvbUV2ZW50KT1cImN1c3RvbUV2ZW50KCRldmVudClcIj48L2Zvcm1pbz5cclxuICAgIDwvZGl2PlxyXG4gICAgPCEtLSA8ZGl2IGNsYXNzPVwiY29sLTEyXCIgKm5nSWY9XCJhcHBvaW50bWVudExpc3QgfCBhc3luY1wiPlxyXG4gICAgICA8YXBwLWNyZWF0ZS1zaXRldmlzaXQ+PC9hcHAtY3JlYXRlLXNpdGV2aXNpdD5cclxuICAgIDwvZGl2PiAtLT5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==