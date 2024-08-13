import { Component, ViewChild } from '@angular/core';
import { DynamicTabPageService } from '../../@core/service/dynamic-tab-page-service';
import { AuthService } from '../../@core/service/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../@core/service/formio.service";
import * as i3 from "../../@core/service/page-builder-view.service";
import * as i4 from "@angular/common";
import * as i5 from "../../@core/service/local.service";
import * as i6 from "../../@core/service/dynamicsearch.service";
import * as i7 from "@formio/angular";
export class PageBuilderViewComponent {
    route;
    _formIO;
    pageBuilderViewService;
    location;
    localstore;
    dynamicSearchService;
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
    constructor(injector, route, _formIO, pageBuilderViewService, location, localstore, dynamicSearchService) {
        this.route = route;
        this._formIO = _formIO;
        this.pageBuilderViewService = pageBuilderViewService;
        this.location = location;
        this.localstore = localstore;
        this.dynamicSearchService = dynamicSearchService;
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
                if (routingPage.length > 0 && routingPage[0].pathname === 'CreateSitevisitComponent') {
                    this.routingConfig = true;
                    this.appointmentList = Promise.resolve(true);
                }
            }
        });
    }
    conditionCheckPageBuilder(result) {
        if (result.data.templatejson) {
            this.isformIO = true;
            this.jsonForm = result.data.templatejson;
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
        // this._formIO.customEvent(event, this.formIO);
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderViewComponent, deps: [{ token: i0.Injector }, { token: i1.ActivatedRoute }, { token: i2.FormioService }, { token: i3.PageBuilderViewService }, { token: i4.Location }, { token: i5.LocalService }, { token: i6.DynamicsearchService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: PageBuilderViewComponent, selector: "app-page-builder-view", viewQueries: [{ propertyName: "formIO", first: true, predicate: ["formIO"], descendants: true }], ngImport: i0, template: "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 my-3\">\r\n      <button type=\"button\" class=\"btn btn-cancel\" (click)=\"goBack()\">Back</button>\r\n      <h6 class=\"font-weight-bold mb-0 mt-3 fromTitle\">{{ fromTitle }}</h6>\r\n    </div>\r\n    <div class=\"col-12\" *ngIf=\"isformIO\">\r\n      <formio #formIO [form]=\"jsonForm\" [submission]=\"submittedData\" (submit)=\"onSubmit($event)\"\r\n        (customEvent)=\"customEvent($event)\"></formio>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".container-fluid{background:#fff}\n"], dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i7.FormioComponent, selector: "formio" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-page-builder-view', template: "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 my-3\">\r\n      <button type=\"button\" class=\"btn btn-cancel\" (click)=\"goBack()\">Back</button>\r\n      <h6 class=\"font-weight-bold mb-0 mt-3 fromTitle\">{{ fromTitle }}</h6>\r\n    </div>\r\n    <div class=\"col-12\" *ngIf=\"isformIO\">\r\n      <formio #formIO [form]=\"jsonForm\" [submission]=\"submittedData\" (submit)=\"onSubmit($event)\"\r\n        (customEvent)=\"customEvent($event)\"></formio>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".container-fluid{background:#fff}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.ActivatedRoute }, { type: i2.FormioService }, { type: i3.PageBuilderViewService }, { type: i4.Location }, { type: i5.LocalService }, { type: i6.DynamicsearchService }]; }, propDecorators: { formIO: [{
                type: ViewChild,
                args: ['formIO']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1idWlsZGVyLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9tb2R1bGVzL3BhZ2UtYnVpbGRlci12aWV3L3BhZ2UtYnVpbGRlci12aWV3LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvbW9kdWxlcy9wYWdlLWJ1aWxkZXItdmlldy9wYWdlLWJ1aWxkZXItdmlldy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDckYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7Ozs7Ozs7QUFXL0QsTUFBTSxPQUFPLHdCQUF3QjtJQXVCekI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUVBO0lBNUJWLE1BQU0sQ0FBTTtJQUNaLFFBQVEsQ0FBTTtJQUNkLFNBQVMsQ0FBTTtJQUNmLEVBQUUsQ0FBTTtJQUNSLGFBQWEsQ0FBTTtJQUNuQixRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ2pCLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDdEIsZUFBZSxDQUErQjtJQUc5QyxNQUFNLENBQWtCO0lBRXhCLHFCQUFxQixDQUF3QjtJQUM3QyxNQUFNLENBQU07SUFDWixTQUFTLENBQU07SUFDZixXQUFXLENBQWM7SUFDekIsVUFBVSxDQUFNO0lBQ2hCLFFBQVEsR0FBUSxFQUFFLENBQUM7SUFDbkIsWUFBWSxDQUFNO0lBRWxCLFlBQ0UsUUFBa0IsRUFDVixLQUFxQixFQUNyQixPQUFzQixFQUN0QixzQkFBOEMsRUFDOUMsUUFBa0IsRUFDbEIsVUFBd0IsRUFFeEIsb0JBQTBDO1FBTjFDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFDdEIsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGVBQVUsR0FBVixVQUFVLENBQWM7UUFFeEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUVsRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBd0IscUJBQXFCLENBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQWMsV0FBVyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFckQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUNwRixJQUFJLE1BQU0sRUFBRTtnQkFDVixJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDbEIsSUFBSSxDQUFDLGFBQWEsR0FBRzt3QkFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTO3FCQUNyQixDQUFDO29CQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztpQkFDeEM7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQztpQkFDbkM7Z0JBQ0QsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtvQkFDakYsSUFBSSxHQUFHLEVBQUU7d0JBQ1AsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQzt3QkFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO3dCQUMxRyxVQUFVLENBQUMsR0FBRyxFQUFFOzRCQUNkLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO3dCQUM1QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7cUJBQ1Q7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUNELElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ3pCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDckQsTUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUM7Z0JBQ2pFLElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsS0FBSywwQkFBMEIsRUFBRTtvQkFDcEYsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7b0JBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDOUM7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlCQUF5QixDQUFDLE1BQU07UUFDOUIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN4RztJQUNILENBQUM7SUFDRCxrQkFBa0I7UUFDaEIsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbkUsSUFBSSxhQUFhLElBQUksYUFBYSxDQUFDLE1BQU0sRUFBRTtZQUN6QyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBWSxFQUFFLEVBQUU7Z0JBQ3JDLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7Z0JBQ3hCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUM3RCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUNoRSxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUFDLFVBQVU7UUFDakIsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQ3RDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3hFO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsYUFBYSxDQUFDLElBQUk7UUFDaEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQUs7UUFDZixnREFBZ0Q7SUFDbEQsQ0FBQztJQUVELGVBQWUsQ0FBQyxFQUFFLEVBQUUsY0FBYztRQUNoQyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDM0QsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDMUQsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUNkLElBQUksY0FBYyxFQUFFLElBQUksRUFBRSxXQUFXLElBQUksU0FBUyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDN0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNwRCxNQUFNLElBQUksR0FDUixjQUFjLENBQUMsSUFBSSxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7b0JBQ2xGLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUk7b0JBQzFCLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO2dCQUMxQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUN0QixJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUU7b0JBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7aUJBQ3JDO2dCQUNELE1BQU0sV0FBVyxHQUFHO29CQUNsQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07b0JBQ25CLFFBQVEsRUFBRSxJQUFJO2lCQUNmLENBQUM7Z0JBQ0YsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDM0MsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO29CQUN2QyxJQUFJLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7d0JBQzdFLE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUM7d0JBQ25HLElBQUksY0FBYyxFQUFFLGlCQUFpQixFQUFFOzRCQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO3lCQUNwQzt3QkFDRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ2hCLENBQUMsQ0FBQyxDQUFDO2lCQUNKO3FCQUFNO29CQUNMLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQzlFLE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUM7d0JBQ2hHLElBQUksY0FBYyxFQUFFLGlCQUFpQixFQUFFOzRCQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO3lCQUNwQzt3QkFDRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ2hCLENBQUMsQ0FBQyxDQUFDO2lCQUNKO2FBQ0Y7aUJBQU0sSUFBSSxjQUFjLEVBQUUsSUFBSSxFQUFFLFdBQVcsSUFBSSxTQUFTLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNuRixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BELE1BQU0sSUFBSSxHQUNSLGNBQWMsQ0FBQyxJQUFJLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtvQkFDbEYsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSTtvQkFDMUIsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7Z0JBQ3JDLE1BQU0sV0FBVyxHQUFHO29CQUNsQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07b0JBQ25CLFFBQVEsRUFBRSxJQUFJO2lCQUNmLENBQUM7Z0JBQ0YsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDM0MsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO29CQUN2QyxJQUFJLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7d0JBQzdFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDaEIsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7cUJBQU07b0JBQ0wsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDO29CQUNqQixJQUFJLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTt3QkFDL0UsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQzt3QkFDakcsSUFBSSxjQUFjLEVBQUUsaUJBQWlCLEVBQUU7NEJBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7eUJBQ3BDO3dCQUNELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDaEIsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7YUFDRjtpQkFBTTtnQkFDTCxNQUFNLElBQUksR0FDUixjQUFjLENBQUMsSUFBSSxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7b0JBQ2xGLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUk7b0JBQzFCLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO2dCQUMxQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ3ZCLE1BQU0sV0FBVyxHQUFHO29CQUNsQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07b0JBQ25CLFFBQVEsRUFBRSxJQUFJO2lCQUNmLENBQUM7Z0JBQ0YsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDM0MsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO29CQUN2QyxJQUFJLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDaEYsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQzt3QkFDbEcsSUFBSSxjQUFjLEVBQUUsaUJBQWlCLEVBQUU7NEJBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7eUJBQ3BDO3dCQUNELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDaEIsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7cUJBQU07b0JBQ0wsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDO29CQUNqQixJQUFJLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTt3QkFDakYsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQzt3QkFDbkcsSUFBSSxjQUFjLEVBQUUsaUJBQWlCLEVBQUU7NEJBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7eUJBQ3BDO3dCQUNELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDaEIsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7YUFDRjtRQUNILENBQUMsRUFDRCxNQUFNLENBQUMsRUFBRTtZQUNQLHNCQUFzQjtRQUN4QixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7d0dBOU5VLHdCQUF3Qjs0RkFBeEIsd0JBQXdCLCtKQ2hCckMsbWhCQVdNOzs0RkRLTyx3QkFBd0I7a0JBTHBDLFNBQVM7K0JBQ0UsdUJBQXVCO2tSQWVqQyxNQUFNO3NCQURMLFNBQVM7dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBGb3JtaW9Db21wb25lbnQgfSBmcm9tICdAZm9ybWlvL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBEeW5hbWljVGFiUGFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2R5bmFtaWMtdGFiLXBhZ2Utc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYWdlQnVpbGRlclZpZXdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9wYWdlLWJ1aWxkZXItdmlldy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9jYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9sb2NhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRHluYW1pY3NlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2R5bmFtaWNzZWFyY2guc2VydmljZSc7XHJcbmltcG9ydCB7IEZvcm1pb1NlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2Zvcm1pby5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXBhZ2UtYnVpbGRlci12aWV3JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZS1idWlsZGVyLXZpZXcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BhZ2UtYnVpbGRlci12aWV3LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VCdWlsZGVyVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZm9ybUlkOiBhbnk7XHJcbiAganNvbkZvcm06IGFueTtcclxuICBmcm9tVGl0bGU6IGFueTtcclxuICBpZDogYW55O1xyXG4gIHN1Ym1pdHRlZERhdGE6IGFueTtcclxuICBpc2Zvcm1JTyA9IGZhbHNlO1xyXG4gIHJvdXRpbmdDb25maWcgPSBmYWxzZTtcclxuICBhcHBvaW50bWVudExpc3Q6IFByb21pc2U8Ym9vbGVhbj4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2Zvcm1JTycpXHJcbiAgZm9ybUlPOiBGb3JtaW9Db21wb25lbnQ7XHJcblxyXG4gIGR5bmFtaWNUYWJQYWdlU2VydmljZTogRHluYW1pY1RhYlBhZ2VTZXJ2aWNlO1xyXG4gIHBhZ2VpZDogYW55O1xyXG4gIGVkaXRWYWx1ZTogYW55O1xyXG4gIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZTtcclxuICBsb2dnZWRVc2VyOiBhbnk7XHJcbiAgZmFjaWxpdHk6IGFueSA9IFtdO1xyXG4gIHByb3ZpZGVyRGF0YTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBfZm9ybUlPOiBGb3JtaW9TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwYWdlQnVpbGRlclZpZXdTZXJ2aWNlOiBQYWdlQnVpbGRlclZpZXdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXHJcbiAgICBwcml2YXRlIGxvY2Fsc3RvcmU6IExvY2FsU2VydmljZSxcclxuXHJcbiAgICBwcml2YXRlIGR5bmFtaWNTZWFyY2hTZXJ2aWNlOiBEeW5hbWljc2VhcmNoU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8RHluYW1pY1RhYlBhZ2VTZXJ2aWNlPihEeW5hbWljVGFiUGFnZVNlcnZpY2UpO1xyXG4gICAgdGhpcy5hdXRoU2VydmljZSA9IGluamVjdG9yLmdldDxBdXRoU2VydmljZT4oQXV0aFNlcnZpY2UpO1xyXG4gICAgdGhpcy5sb2dnZWRVc2VyID0gdGhpcy5sb2NhbHN0b3JlLmdldE9iaigndXNlcicpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZ2dlZFVzZXIgPSB0aGlzLmxvY2Fsc3RvcmUuZ2V0T2JqKCd1c2VyJyk7XHJcbiAgICB0aGlzLmZvcm1JZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xyXG4gICAgdGhpcy5lZGl0VmFsdWUgPSB0aGlzLmxvY2Fsc3RvcmUuZ2V0T2JqKCdlZGl0VmFsdWUnKTtcclxuXHJcbiAgICB0aGlzLnBhZ2VCdWlsZGVyVmlld1NlcnZpY2UuZ2V0UGFnZVZlcnNpb25CeWlkKHRoaXMuZm9ybUlkKS5zdWJzY3JpYmUoKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvbkNoZWNrUGFnZUJ1aWxkZXIocmVzdWx0KTtcclxuICAgICAgICBpZiAodGhpcy5lZGl0VmFsdWUpIHtcclxuICAgICAgICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHtcclxuICAgICAgICAgICAgZGF0YTogdGhpcy5lZGl0VmFsdWVcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YVsnZWRpdCddID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhID0geyBkYXRhOiB7fSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhZ2VCdWlsZGVyVmlld1NlcnZpY2UuZ2V0UGFnZVZlcnNpb25CeWlkKHRoaXMuZm9ybUlkKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSByZXM/LmRhdGEuaWQ7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZWlkID0gcmVzPy5kYXRhLnBhZ2VpZDtcclxuICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhID0gcmVzPy5kYXRhLnN1Ym1pc3Npb25kYXRhID8gSlNPTi5wYXJzZShyZXM/LmRhdGEuc3VibWlzc2lvbmRhdGEpIDogdGhpcy5zdWJtaXR0ZWREYXRhO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLm1vZGlmeVZpZGVvQ29udGVudCgpO1xyXG4gICAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChyZXN1bHQuZGF0YS50YWJjb25maWcpIHtcclxuICAgICAgICBjb25zdCByb3V0aW5nVGFiID0gSlNPTi5wYXJzZShyZXN1bHQuZGF0YS50YWJjb25maWcpO1xyXG4gICAgICAgIGNvbnN0IHJvdXRpbmdQYWdlID0gcm91dGluZ1RhYi5maWx0ZXIoeCA9PiB4LnR5cGUgPT09ICdST1VUSU5HJyk7XHJcbiAgICAgICAgaWYgKHJvdXRpbmdQYWdlLmxlbmd0aCA+IDAgJiYgcm91dGluZ1BhZ2VbMF0ucGF0aG5hbWUgPT09ICdDcmVhdGVTaXRldmlzaXRDb21wb25lbnQnKSB7XHJcbiAgICAgICAgICB0aGlzLnJvdXRpbmdDb25maWcgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5hcHBvaW50bWVudExpc3QgPSBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbmRpdGlvbkNoZWNrUGFnZUJ1aWxkZXIocmVzdWx0KSB7XHJcbiAgICBpZiAocmVzdWx0LmRhdGEudGVtcGxhdGVqc29uKSB7XHJcbiAgICAgIHRoaXMuaXNmb3JtSU8gPSB0cnVlO1xyXG4gICAgICB0aGlzLmpzb25Gb3JtID0gcmVzdWx0LmRhdGEudGVtcGxhdGVqc29uO1xyXG4gICAgICB0aGlzLmZyb21UaXRsZSA9IHRoaXMuanNvbkZvcm0gJiYgdGhpcy5qc29uRm9ybVsncGFnZSddID8gdGhpcy5qc29uRm9ybVsncGFnZSddIDogcmVzdWx0LmRhdGEucGFnZW5hbWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG1vZGlmeVZpZGVvQ29udGVudCgpIHtcclxuICAgIGNvbnN0IHZpZGVvRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbmdldG9JZnJhbWUnKTtcclxuICAgIGlmICh2aWRlb0VsZW1lbnRzICYmIHZpZGVvRWxlbWVudHMubGVuZ3RoKSB7XHJcbiAgICAgIHZpZGVvRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3JjID0gZWxlbWVudC5zcmM7XHJcbiAgICAgICAgY29uc3QgaWZybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG4gICAgICAgIGlmcm0uc2V0QXR0cmlidXRlKCdzcmMnLCBzcmMpO1xyXG4gICAgICAgIGlmcm0uc3R5bGUud2lkdGggPSBlbGVtZW50LndpZHRoID8gZWxlbWVudC53aWR0aCArICdweCcgOiAnJztcclxuICAgICAgICBpZnJtLnN0eWxlLmhlaWdodCA9IGVsZW1lbnQuaGVpZ2h0ID8gZWxlbWVudC5oZWlnaHQgKyAncHgnIDogJyc7XHJcbiAgICAgICAgZWxlbWVudC5yZXBsYWNlV2l0aChpZnJtKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdChzdWJtaXNzaW9uKTogdm9pZCB7XHJcbiAgICBjb25zdCBzdWJtaXNzaW9uRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3VibWlzc2lvbikpO1xyXG4gICAgY29uc29sZS5sb2coc3VibWlzc2lvbkRhdGEsICdmZGZhc2QnKTtcclxuICAgIGlmICghc3VibWlzc2lvbkRhdGE/LmRhdGE/LnByb3ZpZGVyX2lkKSB7XHJcbiAgICAgIHN1Ym1pc3Npb25EYXRhLmRhdGEucHJvdmlkZXJfaWQgPSB0aGlzLmxvY2Fsc3RvcmUuZ2V0T2JqKCdwcm92aWRlcklkJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZhY2lsaXR5RGV0YWlscyhzdWJtaXNzaW9uRGF0YT8uZGF0YT8ucHJvdmlkZXJfaWQsIHN1Ym1pc3Npb25EYXRhKTtcclxuICB9XHJcblxyXG4gIGFkZEF0dGFjaG1lbnQoaW5mbykge1xyXG4gICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UuY3JlYXRlRm9ybVJlc3BvbnNlQXR0YWNobWVudChpbmZvKS5zdWJzY3JpYmUocmVzID0+IGNvbnNvbGUubG9nKHJlcykpO1xyXG4gIH1cclxuXHJcbiAgZ29CYWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2NhbHN0b3JlLnJlbW92ZUl0ZW0oJ3RpdGxldGFiJyk7XHJcbiAgICB0aGlzLmxvY2Fsc3RvcmUucmVtb3ZlSXRlbSgnZWRpdFZhbHVlJyk7XHJcbiAgICB0aGlzLmxvY2Fsc3RvcmUucmVtb3ZlSXRlbSgndGFyZ2V0LXRhYi1maWx0ZXInKTtcclxuICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gIH1cclxuXHJcbiAgY3VzdG9tRXZlbnQoZXZlbnQpIHtcclxuICAgIC8vIHRoaXMuX2Zvcm1JTy5jdXN0b21FdmVudChldmVudCwgdGhpcy5mb3JtSU8pO1xyXG4gIH1cclxuXHJcbiAgZmFjaWxpdHlEZXRhaWxzKGlkLCBzdWJtaXNzaW9uRGF0YSkge1xyXG4gICAgY29uc3QgZmlsZVVwbG9hZERhdGEgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFNoYXJlZE1lc3NhZ2UoKTtcclxuICAgIHRoaXMucGFnZUJ1aWxkZXJWaWV3U2VydmljZS5nZXRGYWNpbGl0eURldGFpbHMoaWQpLnN1YnNjcmliZShcclxuICAgICAgKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKHN1Ym1pc3Npb25EYXRhPy5kYXRhPy5wcm92aWRlcl9pZCAhPSB1bmRlZmluZWQgJiYgcmVzdWx0LmRhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgIHRoaXMuZmFjaWxpdHkgPSByZXN1bHQuZGF0YVtyZXN1bHQuZGF0YS5sZW5ndGggLSAxXTtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPVxyXG4gICAgICAgICAgICBzdWJtaXNzaW9uRGF0YS5kYXRhICYmIHN1Ym1pc3Npb25EYXRhLmRhdGEuZGF0YSAmJiBzdWJtaXNzaW9uRGF0YS5kYXRhLmRhdGEuZWRpdEdyaWRcclxuICAgICAgICAgICAgICA/IHN1Ym1pc3Npb25EYXRhLmRhdGEuZGF0YVxyXG4gICAgICAgICAgICAgIDogc3VibWlzc2lvbkRhdGEuZGF0YTtcclxuICAgICAgICAgIGRlbGV0ZSBkYXRhLnJpYmJvbkRhdGE7XHJcbiAgICAgICAgICBkYXRhLnByb3ZpZGVyX2lkID0gaWQ7XHJcbiAgICAgICAgICBpZiAoKHRoaXMsIHRoaXMuZmFjaWxpdHk/LmlkKSkge1xyXG4gICAgICAgICAgICBkYXRhLmZhY2lsaXR5X2lkID0gdGhpcy5mYWNpbGl0eT8uaWQ7XHJcbiAgICAgICAgICAgIGRhdGEuZmFjaWx0eV9pZCA9IHRoaXMuZmFjaWxpdHk/LmlkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgcmVxdWVzdERhdGEgPSB7XHJcbiAgICAgICAgICAgIHBhZ2VpZDogdGhpcy5wYWdlaWQsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlOiBkYXRhXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgaWYgKHRoaXMuaWQgJiYgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEuZWRpdCkge1xyXG4gICAgICAgICAgICBjb25zdCBpZDEgPSB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS5pZDtcclxuICAgICAgICAgICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UudXBkYXRlRm9ybVJlc3BvbnNlKGlkMSwgcmVxdWVzdERhdGEpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZmlsZVVwbG9hZEluZm8gPSBPYmplY3QuYXNzaWduKHsgcmVzcG9uc2VpZDogTnVtYmVyKHJlc3VsdFsnZGF0YSddWydpZCddKSB9LCBmaWxlVXBsb2FkRGF0YSk7XHJcbiAgICAgICAgICAgICAgaWYgKGZpbGVVcGxvYWREYXRhPy5hdHRhY2htZW50ZGV0YWlscykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRBdHRhY2htZW50KGZpbGVVcGxvYWRJbmZvKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGhpcy5nb0JhY2soKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBpZDIgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS5jcmVhdGVGb3JtUmVzcG9uc2UoaWQyLCByZXF1ZXN0RGF0YSkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZmlsZVVwbG9hZEluZm8gPSBPYmplY3QuYXNzaWduKHsgcmVzcG9uc2VpZDogTnVtYmVyKHJlc1snZGF0YSddWydpZCddKSB9LCBmaWxlVXBsb2FkRGF0YSk7XHJcbiAgICAgICAgICAgICAgaWYgKGZpbGVVcGxvYWREYXRhPy5hdHRhY2htZW50ZGV0YWlscykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRBdHRhY2htZW50KGZpbGVVcGxvYWRJbmZvKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGhpcy5nb0JhY2soKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdWJtaXNzaW9uRGF0YT8uZGF0YT8ucHJvdmlkZXJfaWQgIT0gdW5kZWZpbmVkICYmIHJlc3VsdC5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHRoaXMuZmFjaWxpdHkgPSByZXN1bHQuZGF0YVtyZXN1bHQuZGF0YS5sZW5ndGggLSAxXTtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPVxyXG4gICAgICAgICAgICBzdWJtaXNzaW9uRGF0YS5kYXRhICYmIHN1Ym1pc3Npb25EYXRhLmRhdGEuZGF0YSAmJiBzdWJtaXNzaW9uRGF0YS5kYXRhLmRhdGEuZWRpdEdyaWRcclxuICAgICAgICAgICAgICA/IHN1Ym1pc3Npb25EYXRhLmRhdGEuZGF0YVxyXG4gICAgICAgICAgICAgIDogc3VibWlzc2lvbkRhdGEuZGF0YTtcclxuICAgICAgICAgIGRlbGV0ZSBkYXRhLnJpYmJvbkRhdGE7XHJcbiAgICAgICAgICBkYXRhLnByb3ZpZGVyX2lkID0gaWQ7XHJcbiAgICAgICAgICBkYXRhLmZhY2lsdHlfaWQgPSB0aGlzLmZhY2lsaXR5Py5pZDtcclxuICAgICAgICAgIGRhdGEuZmFjaWxpdHlfaWQgPSB0aGlzLmZhY2lsaXR5Py5pZDtcclxuICAgICAgICAgIGNvbnN0IHJlcXVlc3REYXRhID0ge1xyXG4gICAgICAgICAgICBwYWdlaWQ6IHRoaXMucGFnZWlkLFxyXG4gICAgICAgICAgICByZXNwb25zZTogZGF0YVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGlmICh0aGlzLmlkICYmIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLmVkaXQpIHtcclxuICAgICAgICAgICAgY29uc3QgaWQzID0gdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEuaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLnVwZGF0ZUZvcm1SZXNwb25zZShpZDMsIHJlcXVlc3REYXRhKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuZ29CYWNrKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgaWQ0ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UuY3JlYXRlRm9ybVJlc3BvbnNlKGlkNCwgcmVxdWVzdERhdGEpLnN1YnNjcmliZShfcmVzID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBmaWxlVXBsb2FkSW5mbyA9IE9iamVjdC5hc3NpZ24oeyByZXNwb25zZWlkOiBOdW1iZXIoX3Jlc1snZGF0YSddWydpZCddKSB9LCBmaWxlVXBsb2FkRGF0YSk7XHJcbiAgICAgICAgICAgICAgaWYgKGZpbGVVcGxvYWREYXRhPy5hdHRhY2htZW50ZGV0YWlscykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRBdHRhY2htZW50KGZpbGVVcGxvYWRJbmZvKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGhpcy5nb0JhY2soKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPVxyXG4gICAgICAgICAgICBzdWJtaXNzaW9uRGF0YS5kYXRhICYmIHN1Ym1pc3Npb25EYXRhLmRhdGEuZGF0YSAmJiBzdWJtaXNzaW9uRGF0YS5kYXRhLmRhdGEuZWRpdEdyaWRcclxuICAgICAgICAgICAgICA/IHN1Ym1pc3Npb25EYXRhLmRhdGEuZGF0YVxyXG4gICAgICAgICAgICAgIDogc3VibWlzc2lvbkRhdGEuZGF0YTtcclxuICAgICAgICAgIGRlbGV0ZSBkYXRhLnJpYmJvbkRhdGE7XHJcbiAgICAgICAgICBjb25zdCByZXF1ZXN0RGF0YSA9IHtcclxuICAgICAgICAgICAgcGFnZWlkOiB0aGlzLnBhZ2VpZCxcclxuICAgICAgICAgICAgcmVzcG9uc2U6IGRhdGFcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBpZiAodGhpcy5pZCAmJiB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS5lZGl0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkNSA9IHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLmlkO1xyXG4gICAgICAgICAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS51cGRhdGVGb3JtUmVzcG9uc2UoaWQ1LCByZXF1ZXN0RGF0YSkuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBmaWxlVXBsb2FkSW5mbyA9IE9iamVjdC5hc3NpZ24oeyByZXNwb25zZWlkOiBOdW1iZXIodmFsdWVbJ2RhdGEnXVsnaWQnXSkgfSwgZmlsZVVwbG9hZERhdGEpO1xyXG4gICAgICAgICAgICAgIGlmIChmaWxlVXBsb2FkRGF0YT8uYXR0YWNobWVudGRldGFpbHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQXR0YWNobWVudChmaWxlVXBsb2FkSW5mbyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRoaXMuZ29CYWNrKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgaWQ2ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UuY3JlYXRlRm9ybVJlc3BvbnNlKGlkNiwgcmVxdWVzdERhdGEpLnN1YnNjcmliZShfdmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGZpbGVVcGxvYWRJbmZvID0gT2JqZWN0LmFzc2lnbih7IHJlc3BvbnNlaWQ6IE51bWJlcihfdmFsdWVbJ2RhdGEnXVsnaWQnXSkgfSwgZmlsZVVwbG9hZERhdGEpO1xyXG4gICAgICAgICAgICAgIGlmIChmaWxlVXBsb2FkRGF0YT8uYXR0YWNobWVudGRldGFpbHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQXR0YWNobWVudChmaWxlVXBsb2FkSW5mbyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRoaXMuZ29CYWNrKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgX2Vycm9yID0+IHtcclxuICAgICAgICAvLyB0aGlzIGlzIGludGVudGlvbmFsXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIG15LTNcIj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWNhbmNlbFwiIChjbGljayk9XCJnb0JhY2soKVwiPkJhY2s8L2J1dHRvbj5cclxuICAgICAgPGg2IGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZCBtYi0wIG10LTMgZnJvbVRpdGxlXCI+e3sgZnJvbVRpdGxlIH19PC9oNj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiICpuZ0lmPVwiaXNmb3JtSU9cIj5cclxuICAgICAgPGZvcm1pbyAjZm9ybUlPIFtmb3JtXT1cImpzb25Gb3JtXCIgW3N1Ym1pc3Npb25dPVwic3VibWl0dGVkRGF0YVwiIChzdWJtaXQpPVwib25TdWJtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgKGN1c3RvbUV2ZW50KT1cImN1c3RvbUV2ZW50KCRldmVudClcIj48L2Zvcm1pbz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj4iXX0=