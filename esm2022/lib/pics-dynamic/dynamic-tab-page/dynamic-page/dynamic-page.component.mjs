import { Location } from '@angular/common';
import { Component, EventEmitter, Inject, Input, Optional, Output, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxfUploaderService } from 'ngxf-uploader';
import { columnsJson } from '../../@core/JSON.const';
import { SpeechRecognitionService } from '../../@core/service/speech-recognition.service';
import { OCRService } from '../../@core/service/ocr.service';
import { LocalService } from '../../@core/service/local.service';
import { DataStoreService } from '../../@core/service/data-store.service';
import { DynamicTabPageService } from '../../@core/service/dynamic-tab-page-service';
import { DynamicsearchService } from '../../@core/service/dynamicsearch.service';
import { AuthService } from '../../@core/service/auth.service';
import { AlertService } from '../../@core/service/alert.service';
import { AttachmentsService } from '../../@core/service/attachments.service';
import { OcrValidationService } from '../../@core/service/ocr-validation.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../@core/service/formio.service";
import * as i3 from "../../@core/service/app.service";
import * as i4 from "../../@core/service/data-store.service";
import * as i5 from "@angular/common";
import * as i6 from "@formio/angular";
import * as i7 from "@angular/material/button";
import * as i8 from "ngxf-uploader";
const STRUCTURED_DECISION_MAKING = 'Structured Decision Making';
const SOMETHING_WENT_WRONG = 'Something Went Wrong!';
export class DynamicPageComponent {
    router;
    route;
    _formIO;
    appService;
    _storeservice;
    submitSuccess = new EventEmitter();
    submitFailed = new EventEmitter();
    formId;
    tabId;
    jsonForm;
    fromTitle;
    editId;
    id;
    submittedData;
    afterEntityName = '';
    afterRuleAppName = '';
    beforeEntityName = '';
    beforeRuleAppName = '';
    beforerulemethod = '';
    afterrulemethod = '';
    user;
    multiSelectDropDowns = [];
    pageId;
    sourceid;
    externalParameters;
    pageDataSubscription;
    isDialogPopup = false;
    dialogRef;
    external_scanner;
    isReadOnly;
    showBack;
    isTitle;
    afterSubmit = new EventEmitter();
    personId;
    triggerRefresh;
    fromWorkFlow;
    clickedServiceCase;
    serviceId;
    speechRecogninitionOn;
    speechData;
    notification;
    organizationId;
    FormInputs = [];
    scannerConfig = {};
    tabData;
    narrative;
    purpose;
    pagetype;
    localstorage;
    sessionStorage;
    location;
    dataStore;
    speechRecognitionService;
    uploadService;
    ocr;
    appointmentList;
    isformIO = false;
    formIO;
    currentYouthId;
    dynamicTabPageService;
    dynamicSearchService;
    authService;
    attachmentInfo = {};
    uploadedFiles = [];
    parentGridPage;
    parentGridPageId;
    alertService;
    uploadedFile;
    isOcrForm;
    documentType;
    imgUrl;
    showOcrForm;
    attachmentService;
    imageData;
    tableschemaconfig;
    formResponse;
    action;
    contentArray = [];
    templateResult;
    ocrValidationService;
    dataSub;
    btnVerify = false;
    editValue;
    loggedUser;
    providerData;
    check;
    showTabBack = true;
    httpService;
    constructor(injector, router, route, _formIO, data, appService, _storeservice) {
        this.router = router;
        this.route = route;
        this._formIO = _formIO;
        this.appService = appService;
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                // this.environment = res['RBACORG'].environment;
                this.httpService = res['HTTPSERVICE'];
            }
        });
        this.authService = injector.get(AuthService);
        this.localstorage = injector.get(LocalService);
        this.location = injector.get(Location);
        this.dataStore = injector.get(DataStoreService);
        this.speechRecognitionService = injector.get(SpeechRecognitionService);
        this.uploadService = injector.get(NgxfUploaderService);
        this.ocr = injector.get(OCRService);
        this.dynamicTabPageService = injector.get(DynamicTabPageService);
        this.dynamicSearchService = injector.get(DynamicsearchService);
        this.alertService = injector.get(AlertService);
        this.attachmentService = injector.get(AttachmentsService);
        this.ocrValidationService = injector.get(OcrValidationService);
        this.user = this.localstorage.getObj('user');
        if (this.localstorage.getItem('parentGridPage')) {
            const parentGridPageObj = JSON.parse(this.localstorage.getItem('parentGridPage'));
            const currentpage = this.localstorage.getItem('pagename');
            this.parentGridPage = currentpage ? currentpage : '';
            this.parentGridPageId = parentGridPageObj ? parentGridPageObj.id : '';
        }
        this.organizationId = this.user?.userWorkInfo?.organization?.id;
        this.dynamicSearchService.onChangePageUserData = this.localstorage.getObj('user');
        this.conditionCheckData(data);
        this.sourceid = this.dynamicSearchService.clickableData;
        const navigateData = this.router?.getCurrentNavigation()?.extras?.state;
        this.showBack = navigateData?.externalLink ? true : false;
        if (navigateData?.isReadOnly) {
            this.isReadOnly = true;
        }
        // if (navigateData?.title) {
        //   this.isTitle = navigateData.title;
        // }
        if (navigateData?.personId) {
            this.personId = navigateData.personId;
            this.dynamicSearchService.onChangePersonId = navigateData.personId;
        }
        this.speechRecogninitionOn = false;
        this.speechData = '';
        if (history.state.title) {
            sessionStorage.setItem('title', history?.state?.title);
        }
        this.currentYouthId = this.route.parent.snapshot.paramMap.get('id');
        this.attachmentInfo = this.authService.getSharedMessage();
        this.FormInputs = [];
        this.triggerRefresh = new EventEmitter();
        this.isReadOnly = history?.state?.isReadOnly ? true : this.isReadOnly;
        this.personId = history?.state?.personId;
        this.dynamicSearchService.onChangePersonId = history?.state?.personId;
        this.showBack = (history?.state?.externalLink && !history?.state?.isHideBack) || this.showBack;
        this.pageId = history?.state?.pageId ? history?.state?.pageId : this.pageId;
        this.action = this.dataStore.getData('gridAction');
        this.btnVerify = this.action === 'edit' ? true : false;
        if (window.location.pathname.includes('tab')) {
            this.showTabBack = false;
        }
    }
    conditionCheckData(data) {
        if (data) {
            this.editId = data.editId ? data.editId : null;
            this.isDialogPopup = data.isPopup ? true : false;
            this.pageId = data.pageId ? data.pageId : this.pageId;
            this.isReadOnly = data.isReadOnly ? true : false;
        }
    }
    ngOnInit() {
        this.loggedUser = this.localstorage.getObj('user');
        this.route.params.subscribe((data) => {
            console.log(data);
            this.authService.setSharedMessage(data);
            this.routerPageData(data);
        });
        this.dynamicSearchService.sourceIdService.subscribe(data => {
            if (data != '') {
                this.serviceId = data;
                this.dynamicSearchService.sourceIdService.next('');
                this.clickedServiceCase = true;
                this.callGetAPI();
            }
        });
        this.dynamicSearchService.result.subscribe(result => {
            if (result != null && result != '') {
                this.afterSubmit.emit(result);
                this.dynamicSearchService.result.next(null);
            }
        });
    }
    routerPageData(data) {
        this.formId = data.pageId;
        if (!this.formId) {
            this.formId = this.pageId;
        }
        this.getSource();
        this.getPageTabs();
    }
    getPageTabs() {
        this.dynamicTabPageService.getPageById(this.formId).subscribe((result) => {
            if (result) {
                this.tabId = result.data[0].activeVersion.id;
                this.getRouterConfig();
            }
        });
    }
    getRouterConfig() {
        if (this.formId) {
            // get configure URL get,post,put URL
            this.getConfiguration().then(config => {
                console.log(config);
                // get Page configuration Template Data
                this.getTemplate(config);
            });
        }
        if (!this.pageId && !this.formId) {
            this.pageDataSubscription = this.dynamicSearchService.data.subscribe(page => {
                if (page) {
                    this.formId = page;
                    // }
                    // get configure URL get,post,put URL
                    this.getConfiguration().then(res => {
                        // get Page configuration Template Data
                        this.jsonForm = null;
                        this.getTemplate(res);
                    });
                }
            });
        }
    }
    getSource() {
        const id = this.sourceid;
        if (this.route.parent && this.route.parent.parent && this.route.parent.parent.snapshot.paramMap.get('sourceid')) {
            this.sourceid = this.route.parent.parent.snapshot.paramMap.get('sourceid');
        }
        else if (this.route.parent &&
            this.route.parent.parent &&
            this.route.parent.parent.parent &&
            this.route.parent.parent.parent.snapshot.paramMap.get('sourceid')) {
            this.sourceid = this.route.parent.parent.parent.snapshot.paramMap.get('sourceid');
        }
        else {
            this.sourceid = id;
        }
        if (!this.sourceid) {
            this.sourceid = this.route?.parent?.parent?.parent?.parent?.snapshot?.paramMap.get('sourceid')
                ? this.route?.parent?.parent?.parent?.parent?.snapshot?.paramMap.get('sourceid')
                : this.route?.parent?.parent?.parent?.parent?.parent?.parent?.snapshot?.paramMap.get('sourceid');
        }
        this.purpose =
            this.route.parent && this.route.parent.snapshot.params['purpose']
                ? this.route.parent.snapshot.params['purpose']
                : this.route?.parent?.parent.snapshot.params['purpose'];
    }
    // get Page configuration Template Data
    getTemplate(result) {
        this.templateResult = result;
        if (result) {
            if (this.action && this.action.toLowerCase() == 'edit') {
                this.isTitle = 'Edit ' + result?.data?.pagename;
            }
            else if (this.action && this.action.toLowerCase() == 'view') {
                this.isTitle = 'View ' + result?.data?.pagename;
            }
            else if (this.action && this.action.toLowerCase() == 'add') {
                this.isTitle = 'Add ' + result?.data?.pagename;
            }
            else if (this.action && this.action.toLowerCase() == 'link') {
                this.isTitle = 'View ' + result?.data?.pagename;
            }
            else {
                this.isTitle = this.localstorage.getItem('FORM_TITLE') || '';
            }
            this.localstorage.setItem('FORM_TITLE', this.isTitle);
            this.submittedData = { data: {} };
            this.check = result?.data?.tableschemaconfig?.tablelist.includes('provider_account');
            this.editValue = JSON.parse(this.localstorage.getItem('editValue'));
            if (this.check && this.providerData?.account) {
                this.submittedData = {
                    data: this.providerData?.account
                };
            }
            else {
                this.editValue = JSON.parse(this.localstorage.getItem('editValue'));
                if (this.editValue) {
                    this.submittedData = {
                        data: this.editValue
                    };
                    this.submittedData.data['edit'] = true;
                }
                else {
                    this.submittedData = { data: {} };
                }
            }
            this.fromTitle = result.data?.pagename ? result.data?.pagename : '';
            this.dataStore.setData('title', this.fromTitle);
            this.conditionCheckTemplate(result);
            this.user = this.localstorage.getObj('user');
            this.submittedData.data.userrolekey = this.user?.role?.rolekey;
            this.submittedData.data.username = this.user?.firstName + '' + this.user?.lastName;
            this.submittedData.data.ribbonData = null;
            this.submittedData.data.sourceid = this.sourceid ? this.sourceid : null;
            if (this.route.parent.snapshot.paramMap.get('sourceKey')) {
                this.submittedData.data[this.route.parent.snapshot.paramMap.get('sourceKey')] = this.route.parent.snapshot.paramMap.get('sourceValue');
            }
            this.callGetAPI();
        }
        this.dataSub = this.dataStore.currentStore.subscribe(res => {
            if (res['uploadFromGrid']) {
                this.showOcrForm = true;
                this.btnVerify = true;
            }
        });
    }
    conditionCheckTemplate(result) {
        let routingPage = [];
        if (result.data.tabconfig) {
            const routingTab = JSON.parse(result.data.tabconfig);
            routingPage = routingTab.filter(x => x.type === 'ROUTING');
        }
        if (result.data.templatejson) {
            this.isformIO = true;
            // result.data.templatejson = result.data.templatejson.replaceAll('{sourceid}', this.sourceid);
            this.jsonForm = result.data.templatejson;
            const formTemplateJson = JSON.parse(JSON.stringify(this.jsonForm));
            this.pagetype = result.data?.pageDetails?.pagetype;
            if (result.data?.pagetype === 'SURVEY') {
                this.sourceid = this.user?.id;
            }
            this.prepareFormKeyLabel(formTemplateJson);
            this.fromTitle = this.jsonForm && this.jsonForm['page'] ? this.jsonForm['page'] : result.data.pagename;
            setTimeout(() => {
                this.modifyVideoContent();
                this.speechToTextContent();
            }, 200);
        }
        else if (routingPage.length > 0 && routingPage[0].pathname === 'CreateSitevisitComponent') {
            this.isformIO = false;
            this.appointmentList = Promise.resolve(true);
        }
    }
    // get configure URL get,post,put URL
    async getConfiguration() {
        const data = await this.dynamicTabPageService.getActivePage(this.tabId, true).toPromise();
        return data;
        // });
    }
    loadIncidentData() {
        this.dynamicTabPageService.getListBySourceId(this.sourceid).subscribe(result => {
            const data = result['data'];
            if (data && data.length) {
                this.narrative = data.reduce((acc, curr) => acc + curr.narrative, '');
            }
        });
    }
    callGetAPI() {
        if (this.fromTitle.includes(STRUCTURED_DECISION_MAKING)) {
            this.loadIncidentData();
        }
        this.tabData = this.dataStore.getData('selectedTabData');
        if (this.route.snapshot.paramMap.get('id') == 'form') {
            this.id = null;
        }
        else if (this.editId) {
            this.id = this.editId;
        }
        else {
            this.id = this.route.snapshot.paramMap.get('id');
            console.log(this.id);
            if (!this.id) {
                this.id = this.route.parent.snapshot.paramMap.get('id');
                sessionStorage.setItem('youthID', this.id);
            }
        }
        this.conditionCheckCallGetAPI();
        const action = this.dataStore.getData('gridAction');
        console.log(this.id);
        if (this.id) {
            this.formresponse(action);
        }
    }
    conditionCheckCallGetAPI() {
        if (!this.id) {
            this.id = this.editId;
        }
        // #check
        if (window.location.hash.indexOf('dynamic-routing') > 0 || window.location.hash.indexOf('pages/intake') > 0) {
            if (this.fromWorkFlow) {
                this.id = this.sourceid;
                this.fromWorkFlow = false;
            }
            else {
                this.id = this.id ? this.id : this.sourceid;
            }
        }
        if (this.clickedServiceCase) {
            this.id = this.serviceId;
        }
        console.log(this.id);
        if (this.id) {
            this.formresponse(this.action);
        }
    }
    formresponse(action) {
        this.dynamicTabPageService.getResponseByPageId(this.id, this.formId).subscribe((result) => {
            if (result?.data && result?.data.length) {
                this.getMultipleFrom(this.pagetype === 'FFP' ? result?.data.response : result?.data);
            }
            else if (result?.data) {
                this.formResponse = result?.data;
                this.getActionSelect(this.pagetype === 'FFP' ? result?.data.response : result?.data, action);
            }
            else {
                this.id = null;
                this.dynamicSearchService.id.next(null);
            }
        });
    }
    resultNullCheck(data) {
        if (!data) {
            return {};
        }
        else if (data.data) {
            return data.data;
        }
        else {
            return data;
        }
    }
    getActionSelect(result, action) {
        const data = this.resultNullCheck(result);
        this.processMultiSelectDropdowns(data);
        this.submittedData = { data: data };
        this.submittedData.data.userrolekey = this.user?.role?.rolekey;
        if (this.fromTitle.includes(STRUCTURED_DECISION_MAKING)) {
            this.submittedData.data.narrative = this.narrative;
        }
        this.submittedData.data.action = action;
        if (this.externalParameters) {
            this.submittedData.data.type = this.externalParameters;
        }
        this.id = result.id;
        this.openBottomSheet();
    }
    getMultipleFrom(result) {
        const data = result[0].data ? result[0].data : result[0];
        this.processMultiSelectDropdowns(data);
        this.submittedData = { data: data };
        this.submittedData.data.userrolekey = this.user?.role?.rolekey;
        if (this.fromTitle.includes(STRUCTURED_DECISION_MAKING)) {
            this.submittedData.data.narrative = this.narrative;
        }
        if (this.externalParameters) {
            this.submittedData.data.type = this.externalParameters;
        }
        this.id = result[0].id;
        this.openBottomSheet();
    }
    processMultiSelectDropdowns(data) {
        this.multiSelectDropDowns.forEach(dropdownKey => {
            const dropdownValue = data[dropdownKey];
            if (typeof dropdownValue === 'string' && dropdownValue.includes(',')) {
                data[dropdownKey] = dropdownValue.split(',');
            }
        });
    }
    nextSubmit(event) {
        console.log(event);
        this.submitFailed.next('Failed to add response');
    }
    onSubmit(submission) {
        const createPage = this.localstorage.getObj('AddAction');
        if (this.route.snapshot.paramMap.get('id') == 'form') {
            this.id = null;
        }
        else if (this.editId) {
            this.id = this.editId;
        }
        else {
            this.id = this.route.snapshot.paramMap.get('id');
            if (!this.id && !createPage) {
                this.id = this.route.parent.snapshot.paramMap.get('id');
            }
        }
        const submissionData = JSON.parse(JSON.stringify(submission));
        const data = submissionData.data && submissionData.data.data && submissionData.data.data.editGrid
            ? submissionData.data.data
            : submissionData.data;
        delete data.ribbonData;
        if (this.providerData?.id)
            data.provider_id = this.providerData?.id;
        if (this.check) {
            if (this.submittedData?.data?.textField?.account?.id) {
                data.id = this.submittedData?.data?.textField?.account?.id;
                const requestData = {
                    pageid: this.formId,
                    response: data
                };
                this.updateForm(requestData);
            }
            else if (this.id) {
                const requestData = {
                    pageid: this.formId,
                    response: data
                };
                this.updateForm(requestData);
            }
            else {
                const requestData = {
                    pageid: this.formId,
                    response: data
                };
                this.submiteWithoutId(requestData);
            }
        }
        else {
            const requestData = {
                pageid: this.formId,
                response: data
            };
            if (this.id || this.submittedData?.data?.textField?.id || this.submittedData.data?.edit) {
                this.updateForm(requestData);
            }
            else {
                this.submiteWithoutId(requestData);
            }
        }
    }
    submiteWithoutId(requestData) {
        const fileUploadData = this.authService.getSharedMessage();
        this.dynamicTabPageService.createFormResponse(this.id, requestData).subscribe(result => {
            this.localstorage.setItem('AddAction', false);
            this.submittedDate(result['data']);
            if (this.isDialogPopup) {
                this.closePopup();
            }
            this.afterSubmit.emit(result['data']);
            this.submitToSurvey();
            const fileUploadInfo = Object.assign({ responseid: Number(result['data']['id']) }, fileUploadData);
            if (fileUploadData?.attachmentdetails) {
                this.addAttachment(fileUploadInfo);
            }
            this.alertService.success('Record Saved Successfully', true);
            this.localstorage.removeItem('titletab');
            // TODO : JJIS Routing - Need to clear up once all round of testing has completed
            // This route has challenges navigate back to grid page post form submission.
            // if (this.parentGridPageId) {
            //   if (window.location.href.indexOf('tab') > 0) {
            //     if (window.location.href.indexOf('modify') > 0) {
            //       this.router.navigate(['../../../../dynamic-search/search/', this.parentGridPageId], {
            //         relativeTo: this.route
            //       });
            //     } else if (window.location.href.indexOf('page') > 0) {
            //       this.router.navigate(['../../../../../../../../dynamic-search/search/', this.parentGridPageId], {
            //         relativeTo: this.route
            //       });
            //     }
            //   } else {
            //     this.router.navigate(['/pages/dynamic-search/search/', this.parentGridPageId], { relativeTo: this.route });
            //   }
            // }
            // DONE - PMP-Routing back
            if (this.appService.canNavigateBack()) {
                this.location.back();
            }
        }, _error => {
            this.submitFailed.next('Failed to add response');
        });
    }
    addAttachment(info) {
        this.dynamicTabPageService.createFormResponseAttachment(info).subscribe(res => console.log(res));
    }
    submittedDate(result) {
        if (result && result.length) {
            this.submittedData = { data: result[0].data ? result[0].data : result[0] };
            this.submittedData.data.userrolekey = this.user?.role?.rolekey;
            this.id = result[0].id;
            this.openBottomSheet();
        }
        else if (result) {
            this.submittedData = { data: result?.data ? result?.data : result };
            this.submittedData.data.userrolekey = this.user?.role?.rolekey;
            this.id = result.id;
            this.openBottomSheet();
        }
        else {
            this.id = null;
            this.dynamicSearchService.id.next(null);
        }
    }
    submitToSurvey() {
        if (this.pagetype === 'SURVEY') {
            this.dynamicTabPageService.createUserSurvey(history, this.id).subscribe(() => {
                //This is intentional
            });
        }
    }
    updateForm(requestData) {
        const fileUploadData = this.authService.getSharedMessage();
        if (requestData?.response?.id) {
            this.id = requestData?.response?.id;
        }
        this.dynamicTabPageService.updateFormResponse(this.id, requestData).subscribe(result => {
            const data = result['data'];
            if (data && data.length) {
                this.submittedData = { data: result[0].data ? result[0].data : result[0] };
                this.submittedData.data.userrolekey = this.user?.role?.rolekey;
                this.id = result[0].id;
                this.openBottomSheet();
            }
            else if (result) {
                this.submittedData = { data: data ? data : result };
                this.submittedData.data.userrolekey = this.user?.role?.rolekey;
                this.id = result['id'];
                this.redirect();
            }
            else {
                this.id = null;
                this.dynamicSearchService.id.next(null);
            }
            this.localstorage.setItem('editValue', JSON.stringify(requestData?.response));
            this.alertService.success('Record Saved Successfully', true);
            this.submittedData = {
                data: requestData?.response
            };
            const fileUploadInfo = Object.assign({ responseid: Number(result['data']['id']) }, fileUploadData);
            if (fileUploadData?.attachmentdetails) {
                this.addAttachment(fileUploadInfo);
            }
            this.localstorage.removeItem('titletab');
            this.localstorage.removeItem('editValue');
            this.localstorage.removeItem('target-tab-filter');
            this.location.back();
        }, _error => {
            this.submitFailed.next('Failed to update response');
        });
    }
    closePopup() {
        this.dialogRef.close();
    }
    goBack() {
        this.router.navigate(['../../list'], { relativeTo: this.route });
    }
    openBottomSheet() {
        this.dynamicSearchService.sourceId.next(this.sourceid);
        this.dynamicSearchService.id.next(this.id);
        this.dynamicSearchService.pageId.next(this.formId);
    }
    modifyVideoContent() {
        const videoElements = document.querySelectorAll('.changetoIframe');
        if (videoElements && videoElements.length) {
            videoElements.forEach((element) => {
                const src = element.src;
                const ifrm = document.createElement('iframe');
                ifrm.setAttribute('src', src);
                ifrm.style.width = element.width ? element.width : null;
                ifrm.style.height = element.height ? element.height : null;
                ifrm.width = element.width ? element.width : null;
                ifrm.height = element.height ? element.height : null;
                element.replaceWith(ifrm);
            });
        }
    }
    customClickEvents(_data, event) {
        if (event.srcElement.id == 'scan_button') {
            this.external_scanner.nativeElement.click();
            if (event.srcElement.dataset) {
                this.scannerConfig = event.srcElement.dataset;
            }
        }
    }
    redirect() {
        this.dynamicTabPageService.changePage(true);
        if (window.location.href.indexOf('tab') > 0) {
            this.dynamicTabPageService.changePage(true);
        }
    }
    customEventsButton(event) {
        if (event.type === 'reportdownload') {
            const queryData = this.dataStore.getData('gridData');
            const pageData = this.dataStore.getData('pageData');
            event.data['currentYear'] = event.data.report1 === 'currentYear' ? 'yes' : '';
            if (event.data['currentYear'] === 'yes') {
                event.data['fromRange'] = '2021-06-18T14:33:06.366+0000';
                event.data['toRange'] = '2021-06-18T14:33:06.366+0000';
            }
            const data = {
                formData: event.data,
                queryData: queryData,
                pageData: pageData
            };
            this.downloadReport(data);
        }
    }
    downloadReport(data) {
        if (data) {
            this.dynamicTabPageService.exportReport(data).subscribe(result => {
                const resp = result['data'];
                if (resp.pdfAwsUrl && resp.excelAwsUrl) {
                    const urls = [];
                    urls.push(resp.pdfAwsUrl);
                    urls.push(resp.excelAwsUrl);
                    this.downloadFile(urls);
                }
                else if (resp.excelAwsUrl) {
                    this.downloadFile(resp.excelAwsUrl);
                }
                else if (resp.pdfAwsUrl) {
                    this.downloadFile(resp.pdfAwsUrl);
                }
            }, error => {
                console.log(error);
            });
        }
    }
    downloadFile(s3BucketUrlName) {
        if (s3BucketUrlName && Array.isArray(s3BucketUrlName)) {
            for (const item of s3BucketUrlName) {
                let link = document.createElement('a');
                link.href = item;
                link.download = 'download';
                link.target = '_blank';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                link = null;
            }
        }
        else {
            const link = document.createElement('a');
            link.href = s3BucketUrlName.trim();
            link.download = 'download';
            link.click();
            link.remove();
        }
    }
    customEvents(evt) {
        if (evt.data) {
            this.dynamicSearchService.onChangePageEventData = evt;
            this.dynamicSearchService.onChangePageEventId = this.id;
        }
        this.financeCustomEventsFunctionality(evt);
    }
    speechToTextContent() {
        const speechElements = document.querySelectorAll('.speechToText');
        if (speechElements && speechElements.length) {
            speechElements.forEach((element) => {
                const speechbtn = document.createElement('button');
                speechbtn.className = 'narrative-speech-btn';
                speechbtn.innerHTML = '<i class="fa fa-microphone-slash" aria-hidden="true"></i>';
                element.appendChild(speechbtn);
                speechbtn.addEventListener('click', evt => {
                    this.activateSpeechToText(this, evt, element);
                }, false);
            });
        }
    }
    activateSpeechToText(ctrl, evt, item) {
        const narrativeElement = evt?.currentTarget?.children?.length
            ? evt?.currentTarget?.children[0]
            : evt.target.parentElement;
        this.speechRecogninitionOn = !this.speechRecogninitionOn;
        if (this.speechRecogninitionOn) {
            const speechText = item.querySelector('textarea');
            if (narrativeElement) {
                narrativeElement.className = 'fa fa-microphone';
            }
            ctrl.speechRecognitionService.record().subscribe(
            // listener
            value => {
                let tempNarrative = speechText.value;
                tempNarrative = tempNarrative.trim().concat(' ' + value);
                if (speechText) {
                    speechText.value = tempNarrative;
                }
            }, 
            // errror
            err => {
                this.conditionCheckError(narrativeElement, ctrl, evt, item, err);
            });
        }
        else {
            if (narrativeElement) {
                narrativeElement.className = 'fa fa-microphone-slash';
            }
            ctrl.deActivateSpeechRecognition(ctrl);
        }
    }
    conditionCheckError(narrativeElement, ctrl, evt, item, err) {
        console.error(err);
        this.errorExecution(narrativeElement, ctrl, evt, item, err);
    }
    errorExecution(narrativeElement, ctrl, evt, item, err) {
        if (narrativeElement) {
            narrativeElement.className = 'fa fa-microphone-slash';
        }
        if (err.error === 'no-speech') {
            ctrl.notification = this.noSpeechAlert();
            ctrl.activateSpeechToText(ctrl, evt, item);
        }
        else if (err.error === 'not-allowed') {
            ctrl.notification = this.micUnauthorisedAlert();
        }
        else if (err.error === 'not-microphone') {
            ctrl.notification = this.micNotAvailableAlert();
        }
    }
    micNotAvailableAlert() {
        return 'Microphone is not available. Please verify the connection of your microphone and try again.';
    }
    micUnauthorisedAlert() {
        return 'Your browser is not authorized to access your microphone. Verify that your browser has access to your microphone and try again.';
    }
    noSpeechAlert() {
        return 'No speech has been detected. Please try again.';
    }
    deActivateSpeechRecognition(ctrl) {
        this.speechRecogninitionOn = false;
        ctrl.speechRecognitionService.destroySpeechObject();
    }
    ngOnDestroy() {
        if (this.dataSub)
            this.dataSub.unsubscribe();
        this.speechRecognitionService.destroySpeechObject();
        this.ocr.clearResponse();
        if (this.pageDataSubscription)
            this.pageDataSubscription.unsubscribe();
    }
    uploadFile(file) {
        this.ocr.getResponse().subscribe(result => {
            if (result && result.status == 'SUCCEEDED') {
                this.processOCRResponse(result);
            }
        });
        this.processResponseData(file);
    }
    processResponseData(file) {
        this.dynamicTabPageService.uploadFile(file).subscribe(response => {
            if (response.status) {
                console.log(response.percent);
            }
        }, _err => {
            console.log('Unable to process your request.');
        });
    }
    processOCRResponse(result) {
        const response = result.response;
        if (this.scannerConfig && this.scannerConfig.scanType) {
            if (this.scannerConfig.scanType === 'text' && this.scannerConfig.scanPatch) {
                const sdata = this.submittedData;
                if (sdata && sdata.data) {
                    sdata.data[this.scannerConfig.scanPatch] = response.raw_text;
                    this.submittedData = JSON.parse(JSON.stringify(sdata));
                }
            }
            else {
                const formDatav1 = this.ocr.prepare_form_data(response, JSON.parse(JSON.stringify(this.FormInputs)));
                const formDatav2 = this.ocr.prepare_from_data_v1(response, JSON.parse(JSON.stringify(this.FormInputs)));
                const finalData = { ...formDatav1, ...formDatav2 };
                this.submittedData = { data: finalData };
            }
        }
    }
    prepareFormKeyLabel(json) {
        if (Array.isArray(json)) {
            json.forEach(item => {
                this.prepareFormKeyLabel(item);
            });
        }
        else if (json.hasOwnProperty('input') &&
            json.input &&
            json.type !== 'button' &&
            json.type !== 'signature' &&
            !json.hasOwnProperty('customConditional') &&
            !json.hasOwnProperty('conditional')) {
            let values = [];
            if (json.type === 'radio' || json.type === 'selectboxes') {
                values = json.values || [];
            }
            const formObject = {
                key: json['key'],
                label: json['label'],
                type: json['type'],
                values: [...values]
            };
            this.FormInputs.push(formObject);
            if (json.type === 'select' && json.multiple) {
                this.multiSelectDropDowns.push(json.key);
            }
        }
        else {
            Object.keys(json).forEach(key => {
                if (Array.isArray(json[key])) {
                    this.prepareFormKeyLabel(json[key]);
                }
            });
        }
    }
    financeCustomEventsFunctionality(event) {
        if (event?.changed?.component?.key === 'isBankAccountExist' &&
            !event?.data?.isBankAccountExist &&
            event?.data?.accountTypeKey) {
            let api = '';
            if (event?.data?.accountTypeKey === 'CA') {
                api = 'financecareaccountno';
            }
            else if (event?.data?.accountTypeKey === 'RA') {
                api = 'financerestitutionaccountno';
            }
            else {
                api = 'financesavingaccountno';
            }
            this.dynamicTabPageService.getUniqueId(api).subscribe(result => {
                this.submittedData.data.bankAccountNumber = result['data'];
                this.triggerRefresh.emit({
                    property: 'submission',
                    value: this.submittedData
                });
            }, error => {
                console.log(error);
            });
        }
    }
    routeToGrid(val) {
        if (val === 'Make Payment') {
            this.router.navigate(['./pages/mergepage/1f4e272a-4c03-4739-b4a5-53748e06e247']);
        }
        else if (val === 'Payment Details Information') {
            this.location.back();
        }
    }
    customEvent(event) {
        this._formIO.customEvent(event, this.formIO);
    }
    ocrUpload(files) {
        this.uploadedFile = files.target.files[0];
        const pageID = this.formId ? this.formId : this.pageId;
        this.imageData = {
            contentType: this.uploadedFile.type,
            fileName: `ocr/${pageID}/${this.uploadedFile.name}`
        };
        this.attachmentService.uploadKey(this.imageData).subscribe((res) => {
            if (res.data) {
                const uploadAttachment = document.getElementById('file');
                const uploadAttachmentDetails = uploadAttachment.files[0];
                this.httpService.putupload2(res.data, uploadAttachmentDetails, uploadAttachmentDetails.type).subscribe((resp) => {
                    if (resp && resp.status == 200) {
                        const object = {
                            path: `ocr/${pageID}/${this.uploadedFile.name}`,
                            attachmenttype: this.uploadedFile.type
                        };
                        this.alertService.success('Uploaded Successfully!');
                        if (this.action === 'edit') {
                            this.getUpload(JSON.stringify(object));
                            this.btnVerify = true;
                        }
                        else {
                            this.localstorage.setObj('OCRObj', JSON.stringify(object));
                            this.showOcrForm = true;
                            this.btnVerify = false;
                        }
                    }
                    else {
                        this.alertService.error(SOMETHING_WENT_WRONG);
                    }
                }, error => {
                    this.condionCheckErrorAlert(error);
                });
            }
        });
    }
    condionCheckErrorAlert(error) {
        if (error.status == 0)
            this.alertService.error(SOMETHING_WENT_WRONG);
    }
    getUpload(obj) {
        this.ocrValidationService.getUpload(obj).subscribe((res) => {
            if (res && res.data) {
                const resData = res.data;
                const imageCategory = resData?.imageCategory;
                const ocrDocumentDetails = imageCategory?.id_json[0];
                this.verifiData(ocrDocumentDetails);
            }
            else {
                this.alertService.error(SOMETHING_WENT_WRONG);
            }
        }, err => console.log(err));
    }
    verifiData(ocrDocumentDetails) {
        const jsonForm = this.jsonForm?.components[0];
        if (this.formResponse) {
            const fromArray = Object.keys(this.formResponse);
            fromArray?.forEach(respose => {
                if (ocrDocumentDetails) {
                    const documentValue = Object.keys(ocrDocumentDetails);
                    documentValue?.forEach(element => {
                        this.conditionCheckVerify(element, ocrDocumentDetails, respose, jsonForm);
                    });
                }
            });
        }
        columnsJson.columns[0].components[0].components[0].content = this.contentArray?.join('');
        this.jsonForm.components[0].components.splice(0, 0, columnsJson);
        this.triggerRefresh.emit({
            property: 'form',
            value: this.jsonForm
        });
    }
    conditionCheckVerify(element, ocrDocumentDetails, respose, jsonForm) {
        if (element &&
            respose &&
            element?.toLowerCase() === respose?.toLowerCase() &&
            ocrDocumentDetails[element]?.toLowerCase() !== this.formResponse[respose]?.toLowerCase()) {
            this.jsonForm.components[0].components = jsonForm?.components.map(res => {
                if (res && res?.key === element?.toLowerCase()) {
                    this.contentArray.push(`<p style="color:red;">${res.label} Not Match</p>\n`);
                }
                return res;
            });
        }
    }
    getEmittedData(data) {
        this.showOcrForm = false;
        this.btnVerify = true;
        this.submittedData = { ...data, ...this.submittedData };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicPageComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i1.ActivatedRoute }, { token: i2.FormioService }, { token: MAT_DIALOG_DATA, optional: true }, { token: i3.AppService }, { token: i4.DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DynamicPageComponent, selector: "app-dynamic-page", inputs: { editId: "editId", pageId: "pageId", sourceid: "sourceid", externalParameters: "externalParameters", isReadOnly: "isReadOnly" }, outputs: { afterSubmit: "afterSubmit" }, providers: [SpeechRecognitionService, OCRService], viewQueries: [{ propertyName: "external_scanner", first: true, predicate: ["external_scanner"], descendants: true }, { propertyName: "formIO", first: true, predicate: ["formIO"], descendants: true }], ngImport: i0, template: "<div class=\"card\">\r\n  <div class=\"col my-3\" *ngIf=\"isTitle\">\r\n    <button type=\"button\" class=\"btn btn-cancel\" (click)=\"location.back()\" *ngIf=\"showTabBack\">\r\n      Back {{ parentGridPage && 'to ' + parentGridPage }}\r\n    </button>\r\n    <h6 class=\"font-weight-bold mt-3 mb-0 fromTitle\">{{ isTitle }}</h6>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"!showOcrForm\">\r\n    <div class=\"col-12 dynamic-page mt-0\" *ngIf=\"isformIO\">\r\n      <formio #formIO [form]=\"jsonForm\" [readOnly]=\"isReadOnly\" [submission]=\"submittedData\" (submit)=\"onSubmit($event)\"\r\n        (change)=\"customEvents($event)\" (click)=\"customClickEvents(submittedData, $event)\"\r\n        (customEvent)=\"customEventsButton($event)\" [refresh]=\"triggerRefresh\" [success]=\"submitSuccess\"\r\n        [error]=\"submitFailed\" (customEvent)=\"customEvent($event)\"></formio>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"showOcrForm\">\r\n    <div class=\"col-12 dynamic-page mt-0\">\r\n      <app-ocr-validation (ocrResponse)=\"getEmittedData($event)\" [currenttemplateResult]=\"templateResult\"\r\n        [formResponseData]=\"formResponse\" [submitionData]=\"submittedData\"></app-ocr-validation>\r\n    </div>\r\n  </div>\r\n</div>\r\n<button style=\"display: none\" id=\"external_scanner\" #external_scanner mat-raised-button class=\"btn-icon-bg\"\r\n  (ngxf-select)=\"uploadFile($event)\">\r\n  Scan\r\n</button>", styles: ["iframe{width:100%;border:0}iframe html{overflow:hidden}.card{background-color:var(--bg-light);box-shadow:none!important}:host ::ng-deep .formio .card{background-color:var(--bg-light)}:host ::ng-deep .formio .card .card-title{color:var(--label-text);font-weight:600}:host ::ng-deep .formio .card .col-form-label{color:var(--label-text);font-weight:600}.card-header .nav .nav-link{padding:0 5px!important}.formio-loader-wrapper{display:none!important}.back-btn{z-index:1}:host ::ng-deep .card .card-header{padding:.6rem 1rem}:host ::ng-deep .form-control.flatpickr-input:disabled{background-color:#e9ecef}\n"], dependencies: [{ kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i6.FormioComponent, selector: "formio" }, { kind: "component", type: i7.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i8.NgxfSelectDirective, selector: "[ngxf-select]", inputs: ["ngxf-validate", "multiple", "accept", "folder", "structure"], outputs: ["ngxf-select"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicPageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-dynamic-page', providers: [SpeechRecognitionService, OCRService], template: "<div class=\"card\">\r\n  <div class=\"col my-3\" *ngIf=\"isTitle\">\r\n    <button type=\"button\" class=\"btn btn-cancel\" (click)=\"location.back()\" *ngIf=\"showTabBack\">\r\n      Back {{ parentGridPage && 'to ' + parentGridPage }}\r\n    </button>\r\n    <h6 class=\"font-weight-bold mt-3 mb-0 fromTitle\">{{ isTitle }}</h6>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"!showOcrForm\">\r\n    <div class=\"col-12 dynamic-page mt-0\" *ngIf=\"isformIO\">\r\n      <formio #formIO [form]=\"jsonForm\" [readOnly]=\"isReadOnly\" [submission]=\"submittedData\" (submit)=\"onSubmit($event)\"\r\n        (change)=\"customEvents($event)\" (click)=\"customClickEvents(submittedData, $event)\"\r\n        (customEvent)=\"customEventsButton($event)\" [refresh]=\"triggerRefresh\" [success]=\"submitSuccess\"\r\n        [error]=\"submitFailed\" (customEvent)=\"customEvent($event)\"></formio>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"showOcrForm\">\r\n    <div class=\"col-12 dynamic-page mt-0\">\r\n      <app-ocr-validation (ocrResponse)=\"getEmittedData($event)\" [currenttemplateResult]=\"templateResult\"\r\n        [formResponseData]=\"formResponse\" [submitionData]=\"submittedData\"></app-ocr-validation>\r\n    </div>\r\n  </div>\r\n</div>\r\n<button style=\"display: none\" id=\"external_scanner\" #external_scanner mat-raised-button class=\"btn-icon-bg\"\r\n  (ngxf-select)=\"uploadFile($event)\">\r\n  Scan\r\n</button>", styles: ["iframe{width:100%;border:0}iframe html{overflow:hidden}.card{background-color:var(--bg-light);box-shadow:none!important}:host ::ng-deep .formio .card{background-color:var(--bg-light)}:host ::ng-deep .formio .card .card-title{color:var(--label-text);font-weight:600}:host ::ng-deep .formio .card .col-form-label{color:var(--label-text);font-weight:600}.card-header .nav .nav-link{padding:0 5px!important}.formio-loader-wrapper{display:none!important}.back-btn{z-index:1}:host ::ng-deep .card .card-header{padding:.6rem 1rem}:host ::ng-deep .form-control.flatpickr-input:disabled{background-color:#e9ecef}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i1.ActivatedRoute }, { type: i2.FormioService }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: i3.AppService }, { type: i4.DataStoreService }]; }, propDecorators: { editId: [{
                type: Input
            }], pageId: [{
                type: Input
            }], sourceid: [{
                type: Input
            }], externalParameters: [{
                type: Input
            }], external_scanner: [{
                type: ViewChild,
                args: ['external_scanner']
            }], isReadOnly: [{
                type: Input
            }], afterSubmit: [{
                type: Output
            }], formIO: [{
                type: ViewChild,
                args: ['formIO']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvZHluYW1pYy10YWItcGFnZS9keW5hbWljLXBhZ2UvZHluYW1pYy1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvZHluYW1pYy10YWItcGFnZS9keW5hbWljLXBhZ2UvZHluYW1pYy1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsU0FBUyxFQUVULFlBQVksRUFDWixNQUFNLEVBRU4sS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBRU4sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sMEJBQTBCLENBQUM7QUFHekUsT0FBTyxFQUFhLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJDQUEyQyxD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fSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5qZWN0b3IsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEZvcm1pb0NvbXBvbmVudCB9IGZyb20gJ0Bmb3JtaW8vYW5ndWxhcic7XHJcbmltcG9ydCB7IEZpbGVFcnJvciwgTmd4ZlVwbG9hZGVyU2VydmljZSB9IGZyb20gJ25neGYtdXBsb2FkZXInO1xyXG5pbXBvcnQgeyBjb2x1bW5zSnNvbiB9IGZyb20gJy4uLy4uL0Bjb3JlL0pTT04uY29uc3QnO1xyXG5pbXBvcnQgeyBTcGVlY2hSZWNvZ25pdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL3NwZWVjaC1yZWNvZ25pdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT0NSU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2Uvb2NyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2NhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2xvY2FsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEeW5hbWljVGFiUGFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2R5bmFtaWMtdGFiLXBhZ2Utc2VydmljZSc7XHJcbmltcG9ydCB7IER5bmFtaWNzZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9keW5hbWljc2VhcmNoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXR0YWNobWVudHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9hdHRhY2htZW50cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT2NyVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL29jci12YWxpZGF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGb3JtaW9TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9mb3JtaW8uc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2FwcC5zZXJ2aWNlJztcclxuXHJcbmRlY2xhcmUgY29uc3QgXyQ6IGFueTtcclxuY29uc3QgU1RSVUNUVVJFRF9ERUNJU0lPTl9NQUtJTkcgPSAnU3RydWN0dXJlZCBEZWNpc2lvbiBNYWtpbmcnO1xyXG5jb25zdCBTT01FVEhJTkdfV0VOVF9XUk9ORyA9ICdTb21ldGhpbmcgV2VudCBXcm9uZyEnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1keW5hbWljLXBhZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9keW5hbWljLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2R5bmFtaWMtcGFnZS5jb21wb25lbnQuc2NzcyddLFxyXG4gIHByb3ZpZGVyczogW1NwZWVjaFJlY29nbml0aW9uU2VydmljZSwgT0NSU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHN1Ym1pdFN1Y2Nlc3M6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIHN1Ym1pdEZhaWxlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgZm9ybUlkOiBhbnk7XHJcbiAgdGFiSWQ6IGFueTtcclxuICBqc29uRm9ybTogYW55O1xyXG4gIGZyb21UaXRsZTogYW55O1xyXG4gIEBJbnB1dCgpIGVkaXRJZDogYW55O1xyXG4gIGlkOiBhbnk7XHJcbiAgc3VibWl0dGVkRGF0YTogYW55O1xyXG4gIGFmdGVyRW50aXR5TmFtZSA9ICcnO1xyXG4gIGFmdGVyUnVsZUFwcE5hbWUgPSAnJztcclxuICBiZWZvcmVFbnRpdHlOYW1lID0gJyc7XHJcbiAgYmVmb3JlUnVsZUFwcE5hbWUgPSAnJztcclxuICBiZWZvcmVydWxlbWV0aG9kID0gJyc7XHJcbiAgYWZ0ZXJydWxlbWV0aG9kID0gJyc7XHJcbiAgdXNlcjogYW55O1xyXG4gIG11bHRpU2VsZWN0RHJvcERvd25zOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgQElucHV0KCkgcGFnZUlkOiBhbnk7XHJcbiAgQElucHV0KCkgc291cmNlaWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBleHRlcm5hbFBhcmFtZXRlcnM6IHN0cmluZztcclxuICBwYWdlRGF0YVN1YnNjcmlwdGlvbjogYW55O1xyXG4gIGlzRGlhbG9nUG9wdXAgPSBmYWxzZTtcclxuICBwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFRlbXBsYXRlUmVmPGFueT4+O1xyXG4gIEBWaWV3Q2hpbGQoJ2V4dGVybmFsX3NjYW5uZXInKSBleHRlcm5hbF9zY2FubmVyOiBFbGVtZW50UmVmO1xyXG4gIEBJbnB1dCgpIGlzUmVhZE9ubHk6IGJvb2xlYW47XHJcbiAgc2hvd0JhY2s6IGJvb2xlYW47XHJcbiAgaXNUaXRsZTogYW55O1xyXG4gIEBPdXRwdXQoKSBhZnRlclN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIHBlcnNvbklkOiBhbnk7XHJcbiAgdHJpZ2dlclJlZnJlc2g6IGFueTtcclxuICBmcm9tV29ya0Zsb3c6IGJvb2xlYW47XHJcbiAgY2xpY2tlZFNlcnZpY2VDYXNlOiBib29sZWFuO1xyXG4gIHNlcnZpY2VJZDogYW55O1xyXG4gIHNwZWVjaFJlY29nbmluaXRpb25PbjogYm9vbGVhbjtcclxuICBzcGVlY2hEYXRhOiBzdHJpbmc7XHJcbiAgbm90aWZpY2F0aW9uOiBzdHJpbmc7XHJcbiAgb3JnYW5pemF0aW9uSWQ6IGFueTtcclxuICBGb3JtSW5wdXRzID0gW107XHJcbiAgc2Nhbm5lckNvbmZpZzogYW55ID0ge307XHJcbiAgdGFiRGF0YTogYW55O1xyXG4gIG5hcnJhdGl2ZTogYW55O1xyXG4gIHB1cnBvc2U6IGFueTtcclxuICBwYWdldHlwZTogc3RyaW5nO1xyXG4gIGxvY2Fsc3RvcmFnZTogTG9jYWxTZXJ2aWNlO1xyXG4gIHNlc3Npb25TdG9yYWdlOiBMb2NhbFNlcnZpY2U7XHJcbiAgbG9jYXRpb246IExvY2F0aW9uO1xyXG4gIGRhdGFTdG9yZTogRGF0YVN0b3JlU2VydmljZTtcclxuICBzcGVlY2hSZWNvZ25pdGlvblNlcnZpY2U6IFNwZWVjaFJlY29nbml0aW9uU2VydmljZTtcclxuICB1cGxvYWRTZXJ2aWNlOiBOZ3hmVXBsb2FkZXJTZXJ2aWNlO1xyXG4gIG9jcjogT0NSU2VydmljZTtcclxuICBhcHBvaW50bWVudExpc3Q6IFByb21pc2U8Ym9vbGVhbj4gfCB1bmRlZmluZWQ7XHJcbiAgaXNmb3JtSU8gPSBmYWxzZTtcclxuICBAVmlld0NoaWxkKCdmb3JtSU8nKVxyXG4gIGZvcm1JTzogRm9ybWlvQ29tcG9uZW50O1xyXG4gIGN1cnJlbnRZb3V0aElkOiBhbnk7XHJcbiAgZHluYW1pY1RhYlBhZ2VTZXJ2aWNlOiBEeW5hbWljVGFiUGFnZVNlcnZpY2U7XHJcbiAgZHluYW1pY1NlYXJjaFNlcnZpY2U6IER5bmFtaWNzZWFyY2hTZXJ2aWNlO1xyXG4gIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZTtcclxuICBhdHRhY2htZW50SW5mbzogYW55ID0ge307XHJcbiAgdXBsb2FkZWRGaWxlczogYW55ID0gW107XHJcbiAgcGFyZW50R3JpZFBhZ2U6IHN0cmluZztcclxuICBwYXJlbnRHcmlkUGFnZUlkOiBhbnk7XHJcbiAgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2U7XHJcbiAgdXBsb2FkZWRGaWxlOiBhbnk7XHJcbiAgaXNPY3JGb3JtOiBib29sZWFuO1xyXG4gIGRvY3VtZW50VHlwZTogc3RyaW5nO1xyXG4gIGltZ1VybDogc3RyaW5nO1xyXG4gIHNob3dPY3JGb3JtOiBib29sZWFuO1xyXG4gIGF0dGFjaG1lbnRTZXJ2aWNlITogQXR0YWNobWVudHNTZXJ2aWNlO1xyXG4gIGltYWdlRGF0YTogeyBjb250ZW50VHlwZTogYW55OyBmaWxlTmFtZTogc3RyaW5nIH07XHJcbiAgdGFibGVzY2hlbWFjb25maWc6IGFueTtcclxuICBmb3JtUmVzcG9uc2U6IGFueTtcclxuICBhY3Rpb246IHN0cmluZztcclxuICBjb250ZW50QXJyYXk6IGFueVtdID0gW107XHJcbiAgdGVtcGxhdGVSZXN1bHQ6IGFueTtcclxuICBvY3JWYWxpZGF0aW9uU2VydmljZTogT2NyVmFsaWRhdGlvblNlcnZpY2U7XHJcbiAgZGF0YVN1YjogYW55O1xyXG4gIGJ0blZlcmlmeSA9IGZhbHNlO1xyXG4gIGVkaXRWYWx1ZTogYW55O1xyXG4gIGxvZ2dlZFVzZXI6IGFueTtcclxuICBwcm92aWRlckRhdGE6IGFueTtcclxuICBjaGVjazogYW55O1xyXG4gIHNob3dUYWJCYWNrID0gdHJ1ZTtcclxuICBodHRwU2VydmljZTphbnk7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgX2Zvcm1JTzogRm9ybWlvU2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBkYXRhLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBhcHBTZXJ2aWNlOkFwcFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9zdG9yZXNlcnZpY2U6IERhdGFTdG9yZVNlcnZpY2UsXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9zdG9yZXNlcnZpY2UuY3VycmVudFN0b3JlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIC8vIHRoaXMuZW52aXJvbm1lbnQgPSByZXNbJ1JCQUNPUkcnXS5lbnZpcm9ubWVudDtcclxuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlID0gcmVzWydIVFRQU0VSVklDRSddXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICB0aGlzLmF1dGhTZXJ2aWNlID0gaW5qZWN0b3IuZ2V0PEF1dGhTZXJ2aWNlPihBdXRoU2VydmljZSk7XHJcbiAgICB0aGlzLmxvY2Fsc3RvcmFnZSA9IGluamVjdG9yLmdldDxMb2NhbFNlcnZpY2U+KExvY2FsU2VydmljZSk7XHJcbiAgICB0aGlzLmxvY2F0aW9uID0gaW5qZWN0b3IuZ2V0PExvY2F0aW9uPihMb2NhdGlvbik7XHJcbiAgICB0aGlzLmRhdGFTdG9yZSA9IGluamVjdG9yLmdldDxEYXRhU3RvcmVTZXJ2aWNlPihEYXRhU3RvcmVTZXJ2aWNlKTtcclxuICAgIHRoaXMuc3BlZWNoUmVjb2duaXRpb25TZXJ2aWNlID0gaW5qZWN0b3IuZ2V0PFNwZWVjaFJlY29nbml0aW9uU2VydmljZT4oU3BlZWNoUmVjb2duaXRpb25TZXJ2aWNlKTtcclxuICAgIHRoaXMudXBsb2FkU2VydmljZSA9IGluamVjdG9yLmdldDxOZ3hmVXBsb2FkZXJTZXJ2aWNlPihOZ3hmVXBsb2FkZXJTZXJ2aWNlKTtcclxuICAgIHRoaXMub2NyID0gaW5qZWN0b3IuZ2V0PE9DUlNlcnZpY2U+KE9DUlNlcnZpY2UpO1xyXG4gICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8RHluYW1pY1RhYlBhZ2VTZXJ2aWNlPihEeW5hbWljVGFiUGFnZVNlcnZpY2UpO1xyXG4gICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZSA9IGluamVjdG9yLmdldDxEeW5hbWljc2VhcmNoU2VydmljZT4oRHluYW1pY3NlYXJjaFNlcnZpY2UpO1xyXG4gICAgdGhpcy5hbGVydFNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8QWxlcnRTZXJ2aWNlPihBbGVydFNlcnZpY2UpO1xyXG4gICAgdGhpcy5hdHRhY2htZW50U2VydmljZSA9IGluamVjdG9yLmdldDxBdHRhY2htZW50c1NlcnZpY2U+KEF0dGFjaG1lbnRzU2VydmljZSk7XHJcbiAgICB0aGlzLm9jclZhbGlkYXRpb25TZXJ2aWNlID0gaW5qZWN0b3IuZ2V0PE9jclZhbGlkYXRpb25TZXJ2aWNlPihPY3JWYWxpZGF0aW9uU2VydmljZSk7XHJcbiAgICB0aGlzLnVzZXIgPSB0aGlzLmxvY2Fsc3RvcmFnZS5nZXRPYmooJ3VzZXInKTtcclxuICAgIGlmICh0aGlzLmxvY2Fsc3RvcmFnZS5nZXRJdGVtKCdwYXJlbnRHcmlkUGFnZScpKSB7XHJcbiAgICAgIGNvbnN0IHBhcmVudEdyaWRQYWdlT2JqID0gSlNPTi5wYXJzZSh0aGlzLmxvY2Fsc3RvcmFnZS5nZXRJdGVtKCdwYXJlbnRHcmlkUGFnZScpKTtcclxuICAgICAgY29uc3QgY3VycmVudHBhZ2UgPSB0aGlzLmxvY2Fsc3RvcmFnZS5nZXRJdGVtKCdwYWdlbmFtZScpO1xyXG4gICAgICB0aGlzLnBhcmVudEdyaWRQYWdlID0gY3VycmVudHBhZ2UgPyBjdXJyZW50cGFnZSA6ICcnO1xyXG4gICAgICB0aGlzLnBhcmVudEdyaWRQYWdlSWQgPSBwYXJlbnRHcmlkUGFnZU9iaiA/IHBhcmVudEdyaWRQYWdlT2JqLmlkIDogJyc7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9yZ2FuaXphdGlvbklkID0gdGhpcy51c2VyPy51c2VyV29ya0luZm8/Lm9yZ2FuaXphdGlvbj8uaWQ7XHJcbiAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLm9uQ2hhbmdlUGFnZVVzZXJEYXRhID0gdGhpcy5sb2NhbHN0b3JhZ2UuZ2V0T2JqKCd1c2VyJyk7XHJcbiAgICB0aGlzLmNvbmRpdGlvbkNoZWNrRGF0YShkYXRhKTtcclxuICAgIHRoaXMuc291cmNlaWQgPSB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLmNsaWNrYWJsZURhdGE7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZURhdGE6YW55ID0gdGhpcy5yb3V0ZXI/LmdldEN1cnJlbnROYXZpZ2F0aW9uKCk/LmV4dHJhcz8uc3RhdGU7XHJcbiAgICB0aGlzLnNob3dCYWNrID0gbmF2aWdhdGVEYXRhPy5leHRlcm5hbExpbmsgPyB0cnVlIDogZmFsc2U7XHJcbiAgICBpZiAobmF2aWdhdGVEYXRhPy5pc1JlYWRPbmx5KSB7XHJcbiAgICAgIHRoaXMuaXNSZWFkT25seSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICAvLyBpZiAobmF2aWdhdGVEYXRhPy50aXRsZSkge1xyXG4gICAgLy8gICB0aGlzLmlzVGl0bGUgPSBuYXZpZ2F0ZURhdGEudGl0bGU7XHJcbiAgICAvLyB9XHJcbiAgICBpZiAobmF2aWdhdGVEYXRhPy5wZXJzb25JZCkge1xyXG4gICAgICB0aGlzLnBlcnNvbklkID0gbmF2aWdhdGVEYXRhLnBlcnNvbklkO1xyXG4gICAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLm9uQ2hhbmdlUGVyc29uSWQgPSBuYXZpZ2F0ZURhdGEucGVyc29uSWQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNwZWVjaFJlY29nbmluaXRpb25PbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5zcGVlY2hEYXRhID0gJyc7XHJcbiAgICBpZiAoaGlzdG9yeS5zdGF0ZS50aXRsZSkge1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd0aXRsZScsIGhpc3Rvcnk/LnN0YXRlPy50aXRsZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmN1cnJlbnRZb3V0aElkID0gdGhpcy5yb3V0ZS5wYXJlbnQuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xyXG4gICAgdGhpcy5hdHRhY2htZW50SW5mbyA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0U2hhcmVkTWVzc2FnZSgpO1xyXG4gICAgdGhpcy5Gb3JtSW5wdXRzID0gW107XHJcbiAgICB0aGlzLnRyaWdnZXJSZWZyZXNoID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgdGhpcy5pc1JlYWRPbmx5ID0gaGlzdG9yeT8uc3RhdGU/LmlzUmVhZE9ubHkgPyB0cnVlIDogdGhpcy5pc1JlYWRPbmx5O1xyXG4gICAgdGhpcy5wZXJzb25JZCA9IGhpc3Rvcnk/LnN0YXRlPy5wZXJzb25JZDtcclxuICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2Uub25DaGFuZ2VQZXJzb25JZCA9IGhpc3Rvcnk/LnN0YXRlPy5wZXJzb25JZDtcclxuXHJcbiAgICB0aGlzLnNob3dCYWNrID0gKGhpc3Rvcnk/LnN0YXRlPy5leHRlcm5hbExpbmsgJiYgIWhpc3Rvcnk/LnN0YXRlPy5pc0hpZGVCYWNrKSB8fCB0aGlzLnNob3dCYWNrO1xyXG4gICAgdGhpcy5wYWdlSWQgPSBoaXN0b3J5Py5zdGF0ZT8ucGFnZUlkID8gaGlzdG9yeT8uc3RhdGU/LnBhZ2VJZCA6IHRoaXMucGFnZUlkO1xyXG4gICAgdGhpcy5hY3Rpb24gPSB0aGlzLmRhdGFTdG9yZS5nZXREYXRhKCdncmlkQWN0aW9uJyk7XHJcbiAgICB0aGlzLmJ0blZlcmlmeSA9IHRoaXMuYWN0aW9uID09PSAnZWRpdCcgPyB0cnVlIDogZmFsc2U7XHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCd0YWInKSkge1xyXG4gICAgICB0aGlzLnNob3dUYWJCYWNrID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbmRpdGlvbkNoZWNrRGF0YShkYXRhKSB7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICB0aGlzLmVkaXRJZCA9IGRhdGEuZWRpdElkID8gZGF0YS5lZGl0SWQgOiBudWxsO1xyXG4gICAgICB0aGlzLmlzRGlhbG9nUG9wdXAgPSBkYXRhLmlzUG9wdXAgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgIHRoaXMucGFnZUlkID0gZGF0YS5wYWdlSWQgPyBkYXRhLnBhZ2VJZCA6IHRoaXMucGFnZUlkO1xyXG4gICAgICB0aGlzLmlzUmVhZE9ubHkgPSBkYXRhLmlzUmVhZE9ubHkgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2dnZWRVc2VyID0gdGhpcy5sb2NhbHN0b3JhZ2UuZ2V0T2JqKCd1c2VyJyk7XHJcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKGRhdGE6YW55KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNldFNoYXJlZE1lc3NhZ2UoZGF0YSk7XHJcbiAgICAgIHRoaXMucm91dGVyUGFnZURhdGEoZGF0YSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLnNvdXJjZUlkU2VydmljZS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIGlmIChkYXRhICE9ICcnKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlSWQgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2Uuc291cmNlSWRTZXJ2aWNlLm5leHQoJycpO1xyXG4gICAgICAgIHRoaXMuY2xpY2tlZFNlcnZpY2VDYXNlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhbGxHZXRBUEkoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5yZXN1bHQuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCAmJiByZXN1bHQgIT0gJycpIHtcclxuICAgICAgICB0aGlzLmFmdGVyU3VibWl0LmVtaXQocmVzdWx0KTtcclxuICAgICAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLnJlc3VsdC5uZXh0KG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJvdXRlclBhZ2VEYXRhKGRhdGEpIHtcclxuICAgIHRoaXMuZm9ybUlkID0gZGF0YS5wYWdlSWQ7XHJcbiAgICBpZiAoIXRoaXMuZm9ybUlkKSB7XHJcbiAgICAgIHRoaXMuZm9ybUlkID0gdGhpcy5wYWdlSWQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdldFNvdXJjZSgpO1xyXG4gICAgdGhpcy5nZXRQYWdlVGFicygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGFnZVRhYnMoKSB7XHJcbiAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS5nZXRQYWdlQnlJZCh0aGlzLmZvcm1JZCkuc3Vic2NyaWJlKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgdGhpcy50YWJJZCA9IHJlc3VsdC5kYXRhWzBdLmFjdGl2ZVZlcnNpb24uaWQ7XHJcbiAgICAgICAgdGhpcy5nZXRSb3V0ZXJDb25maWcoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRSb3V0ZXJDb25maWcoKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtSWQpIHtcclxuICAgICAgLy8gZ2V0IGNvbmZpZ3VyZSBVUkwgZ2V0LHBvc3QscHV0IFVSTFxyXG4gICAgICB0aGlzLmdldENvbmZpZ3VyYXRpb24oKS50aGVuKGNvbmZpZyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coY29uZmlnKTtcclxuICAgICAgICAvLyBnZXQgUGFnZSBjb25maWd1cmF0aW9uIFRlbXBsYXRlIERhdGFcclxuICAgICAgICB0aGlzLmdldFRlbXBsYXRlKGNvbmZpZyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLnBhZ2VJZCAmJiAhdGhpcy5mb3JtSWQpIHtcclxuICAgICAgdGhpcy5wYWdlRGF0YVN1YnNjcmlwdGlvbiA9IHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2UuZGF0YS5zdWJzY3JpYmUocGFnZSA9PiB7XHJcbiAgICAgICAgaWYgKHBhZ2UpIHtcclxuICAgICAgICAgIHRoaXMuZm9ybUlkID0gcGFnZTtcclxuICAgICAgICAgIC8vIH1cclxuICAgICAgICAgIC8vIGdldCBjb25maWd1cmUgVVJMIGdldCxwb3N0LHB1dCBVUkxcclxuICAgICAgICAgIHRoaXMuZ2V0Q29uZmlndXJhdGlvbigpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgLy8gZ2V0IFBhZ2UgY29uZmlndXJhdGlvbiBUZW1wbGF0ZSBEYXRhXHJcbiAgICAgICAgICAgIHRoaXMuanNvbkZvcm0gPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmdldFRlbXBsYXRlKHJlcyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U291cmNlKCkge1xyXG4gICAgY29uc3QgaWQgPSB0aGlzLnNvdXJjZWlkO1xyXG4gICAgaWYgKHRoaXMucm91dGUucGFyZW50ICYmIHRoaXMucm91dGUucGFyZW50LnBhcmVudCAmJiB0aGlzLnJvdXRlLnBhcmVudC5wYXJlbnQuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdzb3VyY2VpZCcpKSB7XHJcbiAgICAgIHRoaXMuc291cmNlaWQgPSB0aGlzLnJvdXRlLnBhcmVudC5wYXJlbnQuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdzb3VyY2VpZCcpO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgdGhpcy5yb3V0ZS5wYXJlbnQgJiZcclxuICAgICAgdGhpcy5yb3V0ZS5wYXJlbnQucGFyZW50ICYmXHJcbiAgICAgIHRoaXMucm91dGUucGFyZW50LnBhcmVudC5wYXJlbnQgJiZcclxuICAgICAgdGhpcy5yb3V0ZS5wYXJlbnQucGFyZW50LnBhcmVudC5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3NvdXJjZWlkJylcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNvdXJjZWlkID0gdGhpcy5yb3V0ZS5wYXJlbnQucGFyZW50LnBhcmVudC5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3NvdXJjZWlkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNvdXJjZWlkID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnNvdXJjZWlkKSB7XHJcbiAgICAgIHRoaXMuc291cmNlaWQgPSB0aGlzLnJvdXRlPy5wYXJlbnQ/LnBhcmVudD8ucGFyZW50Py5wYXJlbnQ/LnNuYXBzaG90Py5wYXJhbU1hcC5nZXQoJ3NvdXJjZWlkJylcclxuICAgICAgICA/IHRoaXMucm91dGU/LnBhcmVudD8ucGFyZW50Py5wYXJlbnQ/LnBhcmVudD8uc25hcHNob3Q/LnBhcmFtTWFwLmdldCgnc291cmNlaWQnKVxyXG4gICAgICAgIDogdGhpcy5yb3V0ZT8ucGFyZW50Py5wYXJlbnQ/LnBhcmVudD8ucGFyZW50Py5wYXJlbnQ/LnBhcmVudD8uc25hcHNob3Q/LnBhcmFtTWFwLmdldCgnc291cmNlaWQnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnB1cnBvc2UgPVxyXG4gICAgICB0aGlzLnJvdXRlLnBhcmVudCAmJiB0aGlzLnJvdXRlLnBhcmVudC5zbmFwc2hvdC5wYXJhbXNbJ3B1cnBvc2UnXVxyXG4gICAgICAgID8gdGhpcy5yb3V0ZS5wYXJlbnQuc25hcHNob3QucGFyYW1zWydwdXJwb3NlJ11cclxuICAgICAgICA6IHRoaXMucm91dGU/LnBhcmVudD8ucGFyZW50LnNuYXBzaG90LnBhcmFtc1sncHVycG9zZSddO1xyXG4gIH1cclxuXHJcbiAgLy8gZ2V0IFBhZ2UgY29uZmlndXJhdGlvbiBUZW1wbGF0ZSBEYXRhXHJcbiAgcHJpdmF0ZSBnZXRUZW1wbGF0ZShyZXN1bHQ6IGFueSkge1xyXG4gICAgdGhpcy50ZW1wbGF0ZVJlc3VsdCA9IHJlc3VsdDtcclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgaWYgKHRoaXMuYWN0aW9uICYmIHRoaXMuYWN0aW9uLnRvTG93ZXJDYXNlKCkgPT0gJ2VkaXQnKSB7XHJcbiAgICAgICAgdGhpcy5pc1RpdGxlID0gJ0VkaXQgJyArIHJlc3VsdD8uZGF0YT8ucGFnZW5hbWU7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3Rpb24gJiYgdGhpcy5hY3Rpb24udG9Mb3dlckNhc2UoKSA9PSAndmlldycpIHtcclxuICAgICAgICB0aGlzLmlzVGl0bGUgPSAnVmlldyAnICsgcmVzdWx0Py5kYXRhPy5wYWdlbmFtZTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGlvbiAmJiB0aGlzLmFjdGlvbi50b0xvd2VyQ2FzZSgpID09ICdhZGQnKSB7XHJcbiAgICAgICAgdGhpcy5pc1RpdGxlID0gJ0FkZCAnICsgcmVzdWx0Py5kYXRhPy5wYWdlbmFtZTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGlvbiAmJiB0aGlzLmFjdGlvbi50b0xvd2VyQ2FzZSgpID09ICdsaW5rJykge1xyXG4gICAgICAgIHRoaXMuaXNUaXRsZSA9ICdWaWV3ICcgKyByZXN1bHQ/LmRhdGE/LnBhZ2VuYW1lO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaXNUaXRsZSA9IHRoaXMubG9jYWxzdG9yYWdlLmdldEl0ZW0oJ0ZPUk1fVElUTEUnKSB8fCAnJztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxvY2Fsc3RvcmFnZS5zZXRJdGVtKCdGT1JNX1RJVExFJywgdGhpcy5pc1RpdGxlKTtcclxuICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhID0geyBkYXRhOiB7fSB9O1xyXG4gICAgICB0aGlzLmNoZWNrID0gcmVzdWx0Py5kYXRhPy50YWJsZXNjaGVtYWNvbmZpZz8udGFibGVsaXN0LmluY2x1ZGVzKCdwcm92aWRlcl9hY2NvdW50Jyk7XHJcbiAgICAgIHRoaXMuZWRpdFZhbHVlID0gSlNPTi5wYXJzZSh0aGlzLmxvY2Fsc3RvcmFnZS5nZXRJdGVtKCdlZGl0VmFsdWUnKSk7XHJcbiAgICAgIGlmICh0aGlzLmNoZWNrICYmIHRoaXMucHJvdmlkZXJEYXRhPy5hY2NvdW50KSB7XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhID0ge1xyXG4gICAgICAgICAgZGF0YTogdGhpcy5wcm92aWRlckRhdGE/LmFjY291bnRcclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZWRpdFZhbHVlID0gSlNPTi5wYXJzZSh0aGlzLmxvY2Fsc3RvcmFnZS5nZXRJdGVtKCdlZGl0VmFsdWUnKSk7XHJcbiAgICAgICAgaWYgKHRoaXMuZWRpdFZhbHVlKSB7XHJcbiAgICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEgPSB7XHJcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuZWRpdFZhbHVlXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGFbJ2VkaXQnXSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHsgZGF0YToge30gfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5mcm9tVGl0bGUgPSByZXN1bHQuZGF0YT8ucGFnZW5hbWUgPyByZXN1bHQuZGF0YT8ucGFnZW5hbWUgOiAnJztcclxuICAgICAgdGhpcy5kYXRhU3RvcmUuc2V0RGF0YSgndGl0bGUnLCB0aGlzLmZyb21UaXRsZSk7XHJcbiAgICAgIHRoaXMuY29uZGl0aW9uQ2hlY2tUZW1wbGF0ZShyZXN1bHQpO1xyXG4gICAgICB0aGlzLnVzZXIgPSB0aGlzLmxvY2Fsc3RvcmFnZS5nZXRPYmooJ3VzZXInKTtcclxuICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEudXNlcnJvbGVrZXkgPSB0aGlzLnVzZXI/LnJvbGU/LnJvbGVrZXk7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLnVzZXJuYW1lID0gdGhpcy51c2VyPy5maXJzdE5hbWUgKyAnJyArIHRoaXMudXNlcj8ubGFzdE5hbWU7XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLnJpYmJvbkRhdGEgPSBudWxsO1xyXG4gICAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS5zb3VyY2VpZCA9IHRoaXMuc291cmNlaWQgPyB0aGlzLnNvdXJjZWlkIDogbnVsbDtcclxuICAgICAgaWYgKHRoaXMucm91dGUucGFyZW50LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnc291cmNlS2V5JykpIHtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YVt0aGlzLnJvdXRlLnBhcmVudC5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3NvdXJjZUtleScpXSA9IHRoaXMucm91dGUucGFyZW50LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnc291cmNlVmFsdWUnKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNhbGxHZXRBUEkoKTtcclxuICAgIH1cclxuICAgIHRoaXMuZGF0YVN1YiA9IHRoaXMuZGF0YVN0b3JlLmN1cnJlbnRTdG9yZS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgaWYgKHJlc1sndXBsb2FkRnJvbUdyaWQnXSkge1xyXG4gICAgICAgIHRoaXMuc2hvd09jckZvcm0gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYnRuVmVyaWZ5ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbmRpdGlvbkNoZWNrVGVtcGxhdGUocmVzdWx0KSB7XHJcbiAgICBsZXQgcm91dGluZ1BhZ2UgPSBbXTtcclxuICAgIGlmIChyZXN1bHQuZGF0YS50YWJjb25maWcpIHtcclxuICAgICAgY29uc3Qgcm91dGluZ1RhYiA9IEpTT04ucGFyc2UocmVzdWx0LmRhdGEudGFiY29uZmlnKTtcclxuICAgICAgcm91dGluZ1BhZ2UgPSByb3V0aW5nVGFiLmZpbHRlcih4ID0+IHgudHlwZSA9PT0gJ1JPVVRJTkcnKTtcclxuICAgIH1cclxuICAgIGlmIChyZXN1bHQuZGF0YS50ZW1wbGF0ZWpzb24pIHtcclxuICAgICAgdGhpcy5pc2Zvcm1JTyA9IHRydWU7XHJcbiAgICAgIC8vIHJlc3VsdC5kYXRhLnRlbXBsYXRlanNvbiA9IHJlc3VsdC5kYXRhLnRlbXBsYXRlanNvbi5yZXBsYWNlQWxsKCd7c291cmNlaWR9JywgdGhpcy5zb3VyY2VpZCk7XHJcbiAgICAgIHRoaXMuanNvbkZvcm0gPSByZXN1bHQuZGF0YS50ZW1wbGF0ZWpzb247XHJcbiAgICAgIGNvbnN0IGZvcm1UZW1wbGF0ZUpzb24gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuanNvbkZvcm0pKTtcclxuICAgICAgdGhpcy5wYWdldHlwZSA9IHJlc3VsdC5kYXRhPy5wYWdlRGV0YWlscz8ucGFnZXR5cGU7XHJcbiAgICAgIGlmIChyZXN1bHQuZGF0YT8ucGFnZXR5cGUgPT09ICdTVVJWRVknKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VpZCA9IHRoaXMudXNlcj8uaWQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5wcmVwYXJlRm9ybUtleUxhYmVsKGZvcm1UZW1wbGF0ZUpzb24pO1xyXG4gICAgICB0aGlzLmZyb21UaXRsZSA9IHRoaXMuanNvbkZvcm0gJiYgdGhpcy5qc29uRm9ybVsncGFnZSddID8gdGhpcy5qc29uRm9ybVsncGFnZSddIDogcmVzdWx0LmRhdGEucGFnZW5hbWU7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubW9kaWZ5VmlkZW9Db250ZW50KCk7XHJcbiAgICAgICAgdGhpcy5zcGVlY2hUb1RleHRDb250ZW50KCk7XHJcbiAgICAgIH0sIDIwMCk7XHJcbiAgICB9IGVsc2UgaWYgKHJvdXRpbmdQYWdlLmxlbmd0aCA+IDAgJiYgcm91dGluZ1BhZ2VbMF0ucGF0aG5hbWUgPT09ICdDcmVhdGVTaXRldmlzaXRDb21wb25lbnQnKSB7XHJcbiAgICAgIHRoaXMuaXNmb3JtSU8gPSBmYWxzZTtcclxuICAgICAgdGhpcy5hcHBvaW50bWVudExpc3QgPSBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XHJcbiAgfVxyXG4gIFxyXG4gIH1cclxuICAvLyBnZXQgY29uZmlndXJlIFVSTCBnZXQscG9zdCxwdXQgVVJMXHJcbiAgYXN5bmMgZ2V0Q29uZmlndXJhdGlvbigpIHtcclxuICAgIGNvbnN0IGRhdGE6IGFueSA9IGF3YWl0IHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmdldEFjdGl2ZVBhZ2UodGhpcy50YWJJZCwgdHJ1ZSkudG9Qcm9taXNlKCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICAgIC8vIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZEluY2lkZW50RGF0YSgpIHtcclxuICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmdldExpc3RCeVNvdXJjZUlkKHRoaXMuc291cmNlaWQpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gcmVzdWx0WydkYXRhJ107XHJcbiAgICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5uYXJyYXRpdmUgPSBkYXRhLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MgKyBjdXJyLm5hcnJhdGl2ZSwgJycpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsbEdldEFQSSgpIHtcclxuICAgIGlmICh0aGlzLmZyb21UaXRsZS5pbmNsdWRlcyhTVFJVQ1RVUkVEX0RFQ0lTSU9OX01BS0lORykpIHtcclxuICAgICAgdGhpcy5sb2FkSW5jaWRlbnREYXRhKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRhYkRhdGEgPSB0aGlzLmRhdGFTdG9yZS5nZXREYXRhKCdzZWxlY3RlZFRhYkRhdGEnKTtcclxuICAgIGlmICh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKSA9PSAnZm9ybScpIHtcclxuICAgICAgdGhpcy5pZCA9IG51bGw7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWRpdElkKSB7XHJcbiAgICAgIHRoaXMuaWQgPSB0aGlzLmVkaXRJZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5pZCk7XHJcbiAgICAgIGlmICghdGhpcy5pZCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLnJvdXRlLnBhcmVudC5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgneW91dGhJRCcsIHRoaXMuaWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbmRpdGlvbkNoZWNrQ2FsbEdldEFQSSgpO1xyXG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5kYXRhU3RvcmUuZ2V0RGF0YSgnZ3JpZEFjdGlvbicpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5pZCk7XHJcbiAgICBpZiAodGhpcy5pZCkge1xyXG4gICAgICB0aGlzLmZvcm1yZXNwb25zZShhY3Rpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25kaXRpb25DaGVja0NhbGxHZXRBUEkoKSB7XHJcbiAgICBpZiAoIXRoaXMuaWQpIHtcclxuICAgICAgdGhpcy5pZCA9IHRoaXMuZWRpdElkO1xyXG4gICAgfVxyXG4gICAgLy8gI2NoZWNrXHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZignZHluYW1pYy1yb3V0aW5nJykgPiAwIHx8IHdpbmRvdy5sb2NhdGlvbi5oYXNoLmluZGV4T2YoJ3BhZ2VzL2ludGFrZScpID4gMCkge1xyXG4gICAgICBpZiAodGhpcy5mcm9tV29ya0Zsb3cpIHtcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5zb3VyY2VpZDtcclxuICAgICAgICB0aGlzLmZyb21Xb3JrRmxvdyA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmlkID8gdGhpcy5pZCA6IHRoaXMuc291cmNlaWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNsaWNrZWRTZXJ2aWNlQ2FzZSkge1xyXG4gICAgICB0aGlzLmlkID0gdGhpcy5zZXJ2aWNlSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy5pZCk7XHJcbiAgICBpZiAodGhpcy5pZCkge1xyXG4gICAgICB0aGlzLmZvcm1yZXNwb25zZSh0aGlzLmFjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JtcmVzcG9uc2UoYWN0aW9uKSB7XHJcbiAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS5nZXRSZXNwb25zZUJ5UGFnZUlkKHRoaXMuaWQsIHRoaXMuZm9ybUlkKS5zdWJzY3JpYmUoKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQ/LmRhdGEgJiYgcmVzdWx0Py5kYXRhLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuZ2V0TXVsdGlwbGVGcm9tKHRoaXMucGFnZXR5cGUgPT09ICdGRlAnID8gcmVzdWx0Py5kYXRhLnJlc3BvbnNlIDogcmVzdWx0Py5kYXRhKTtcclxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQ/LmRhdGEpIHtcclxuICAgICAgICB0aGlzLmZvcm1SZXNwb25zZSA9IHJlc3VsdD8uZGF0YTtcclxuICAgICAgICB0aGlzLmdldEFjdGlvblNlbGVjdCh0aGlzLnBhZ2V0eXBlID09PSAnRkZQJyA/IHJlc3VsdD8uZGF0YS5yZXNwb25zZSA6IHJlc3VsdD8uZGF0YSwgYWN0aW9uKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmR5bmFtaWNTZWFyY2hTZXJ2aWNlLmlkLm5leHQobnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVzdWx0TnVsbENoZWNrKGRhdGE6IGFueSk6IGFueSB7XHJcbiAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfSBlbHNlIGlmIChkYXRhLmRhdGEpIHtcclxuICAgICAgcmV0dXJuIGRhdGEuZGF0YTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0QWN0aW9uU2VsZWN0KHJlc3VsdCwgYWN0aW9uKSB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5yZXN1bHROdWxsQ2hlY2socmVzdWx0KTtcclxuICAgIHRoaXMucHJvY2Vzc011bHRpU2VsZWN0RHJvcGRvd25zKGRhdGEpO1xyXG4gICAgdGhpcy5zdWJtaXR0ZWREYXRhID0geyBkYXRhOiBkYXRhIH07XHJcbiAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS51c2Vycm9sZWtleSA9IHRoaXMudXNlcj8ucm9sZT8ucm9sZWtleTtcclxuICAgIGlmICh0aGlzLmZyb21UaXRsZS5pbmNsdWRlcyhTVFJVQ1RVUkVEX0RFQ0lTSU9OX01BS0lORykpIHtcclxuICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEubmFycmF0aXZlID0gdGhpcy5uYXJyYXRpdmU7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS5hY3Rpb24gPSBhY3Rpb247XHJcbiAgICBpZiAodGhpcy5leHRlcm5hbFBhcmFtZXRlcnMpIHtcclxuICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEudHlwZSA9IHRoaXMuZXh0ZXJuYWxQYXJhbWV0ZXJzO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pZCA9IHJlc3VsdC5pZDtcclxuICAgIHRoaXMub3BlbkJvdHRvbVNoZWV0KCk7XHJcbiAgfVxyXG5cclxuICBnZXRNdWx0aXBsZUZyb20ocmVzdWx0KSB7XHJcbiAgICBjb25zdCBkYXRhID0gcmVzdWx0WzBdLmRhdGEgPyByZXN1bHRbMF0uZGF0YSA6IHJlc3VsdFswXTtcclxuICAgIHRoaXMucHJvY2Vzc011bHRpU2VsZWN0RHJvcGRvd25zKGRhdGEpO1xyXG4gICAgdGhpcy5zdWJtaXR0ZWREYXRhID0geyBkYXRhOiBkYXRhIH07XHJcbiAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS51c2Vycm9sZWtleSA9IHRoaXMudXNlcj8ucm9sZT8ucm9sZWtleTtcclxuICAgIGlmICh0aGlzLmZyb21UaXRsZS5pbmNsdWRlcyhTVFJVQ1RVUkVEX0RFQ0lTSU9OX01BS0lORykpIHtcclxuICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEubmFycmF0aXZlID0gdGhpcy5uYXJyYXRpdmU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5leHRlcm5hbFBhcmFtZXRlcnMpIHtcclxuICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEudHlwZSA9IHRoaXMuZXh0ZXJuYWxQYXJhbWV0ZXJzO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pZCA9IHJlc3VsdFswXS5pZDtcclxuICAgIHRoaXMub3BlbkJvdHRvbVNoZWV0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByb2Nlc3NNdWx0aVNlbGVjdERyb3Bkb3ducyhkYXRhOiBhbnkpIHtcclxuICAgIHRoaXMubXVsdGlTZWxlY3REcm9wRG93bnMuZm9yRWFjaChkcm9wZG93bktleSA9PiB7XHJcbiAgICAgIGNvbnN0IGRyb3Bkb3duVmFsdWUgPSBkYXRhW2Ryb3Bkb3duS2V5XTtcclxuICAgICAgaWYgKHR5cGVvZiBkcm9wZG93blZhbHVlID09PSAnc3RyaW5nJyAmJiBkcm9wZG93blZhbHVlLmluY2x1ZGVzKCcsJykpIHtcclxuICAgICAgICBkYXRhW2Ryb3Bkb3duS2V5XSA9IGRyb3Bkb3duVmFsdWUuc3BsaXQoJywnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZXh0U3VibWl0KGV2ZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcblxyXG4gICAgdGhpcy5zdWJtaXRGYWlsZWQubmV4dCgnRmFpbGVkIHRvIGFkZCByZXNwb25zZScpO1xyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQoc3VibWlzc2lvbik6IHZvaWQge1xyXG4gICAgY29uc3QgY3JlYXRlUGFnZSA9IHRoaXMubG9jYWxzdG9yYWdlLmdldE9iaignQWRkQWN0aW9uJyk7XHJcbiAgICBpZiAodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJykgPT0gJ2Zvcm0nKSB7XHJcbiAgICAgIHRoaXMuaWQgPSBudWxsO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmVkaXRJZCkge1xyXG4gICAgICB0aGlzLmlkID0gdGhpcy5lZGl0SWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XHJcbiAgICAgIGlmICghdGhpcy5pZCAmJiAhY3JlYXRlUGFnZSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLnJvdXRlLnBhcmVudC5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHN1Ym1pc3Npb25EYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdWJtaXNzaW9uKSk7XHJcbiAgICBjb25zdCBkYXRhID1cclxuICAgICAgc3VibWlzc2lvbkRhdGEuZGF0YSAmJiBzdWJtaXNzaW9uRGF0YS5kYXRhLmRhdGEgJiYgc3VibWlzc2lvbkRhdGEuZGF0YS5kYXRhLmVkaXRHcmlkXHJcbiAgICAgICAgPyBzdWJtaXNzaW9uRGF0YS5kYXRhLmRhdGFcclxuICAgICAgICA6IHN1Ym1pc3Npb25EYXRhLmRhdGE7XHJcbiAgICBkZWxldGUgZGF0YS5yaWJib25EYXRhO1xyXG4gICAgaWYgKHRoaXMucHJvdmlkZXJEYXRhPy5pZCkgZGF0YS5wcm92aWRlcl9pZCA9IHRoaXMucHJvdmlkZXJEYXRhPy5pZDtcclxuICAgIGlmICh0aGlzLmNoZWNrKSB7XHJcbiAgICAgIGlmICh0aGlzLnN1Ym1pdHRlZERhdGE/LmRhdGE/LnRleHRGaWVsZD8uYWNjb3VudD8uaWQpIHtcclxuICAgICAgICBkYXRhLmlkID0gdGhpcy5zdWJtaXR0ZWREYXRhPy5kYXRhPy50ZXh0RmllbGQ/LmFjY291bnQ/LmlkO1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3REYXRhID0ge1xyXG4gICAgICAgICAgcGFnZWlkOiB0aGlzLmZvcm1JZCxcclxuICAgICAgICAgIHJlc3BvbnNlOiBkYXRhXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZvcm0ocmVxdWVzdERhdGEpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaWQpIHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0RGF0YSA9IHtcclxuICAgICAgICAgIHBhZ2VpZDogdGhpcy5mb3JtSWQsXHJcbiAgICAgICAgICByZXNwb25zZTogZGF0YVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy51cGRhdGVGb3JtKHJlcXVlc3REYXRhKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0RGF0YSA9IHtcclxuICAgICAgICAgIHBhZ2VpZDogdGhpcy5mb3JtSWQsXHJcbiAgICAgICAgICByZXNwb25zZTogZGF0YVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zdWJtaXRlV2l0aG91dElkKHJlcXVlc3REYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcmVxdWVzdERhdGEgPSB7XHJcbiAgICAgICAgcGFnZWlkOiB0aGlzLmZvcm1JZCxcclxuICAgICAgICByZXNwb25zZTogZGF0YVxyXG4gICAgICB9O1xyXG4gICAgICBpZiAodGhpcy5pZCB8fCB0aGlzLnN1Ym1pdHRlZERhdGE/LmRhdGE/LnRleHRGaWVsZD8uaWQgfHwgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGE/LmVkaXQpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZvcm0ocmVxdWVzdERhdGEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc3VibWl0ZVdpdGhvdXRJZChyZXF1ZXN0RGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN1Ym1pdGVXaXRob3V0SWQocmVxdWVzdERhdGEpIHtcclxuICAgIGNvbnN0IGZpbGVVcGxvYWREYXRhID0gdGhpcy5hdXRoU2VydmljZS5nZXRTaGFyZWRNZXNzYWdlKCk7XHJcbiAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS5jcmVhdGVGb3JtUmVzcG9uc2UodGhpcy5pZCwgcmVxdWVzdERhdGEpLnN1YnNjcmliZShcclxuICAgICAgcmVzdWx0ID0+IHtcclxuICAgICAgICB0aGlzLmxvY2Fsc3RvcmFnZS5zZXRJdGVtKCdBZGRBY3Rpb24nLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRlKHJlc3VsdFsnZGF0YSddKTtcclxuICAgICAgICBpZiAodGhpcy5pc0RpYWxvZ1BvcHVwKSB7XHJcbiAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZnRlclN1Ym1pdC5lbWl0KHJlc3VsdFsnZGF0YSddKTtcclxuICAgICAgICB0aGlzLnN1Ym1pdFRvU3VydmV5KCk7XHJcbiAgICAgICAgY29uc3QgZmlsZVVwbG9hZEluZm8gPSBPYmplY3QuYXNzaWduKHsgcmVzcG9uc2VpZDogTnVtYmVyKHJlc3VsdFsnZGF0YSddWydpZCddKSB9LCBmaWxlVXBsb2FkRGF0YSk7XHJcbiAgICAgICAgaWYgKGZpbGVVcGxvYWREYXRhPy5hdHRhY2htZW50ZGV0YWlscykge1xyXG4gICAgICAgICAgdGhpcy5hZGRBdHRhY2htZW50KGZpbGVVcGxvYWRJbmZvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3VjY2VzcygnUmVjb3JkIFNhdmVkIFN1Y2Nlc3NmdWxseScsIHRydWUpO1xyXG4gICAgICAgIHRoaXMubG9jYWxzdG9yYWdlLnJlbW92ZUl0ZW0oJ3RpdGxldGFiJyk7XHJcbiAgICAgICAgLy8gVE9ETyA6IEpKSVMgUm91dGluZyAtIE5lZWQgdG8gY2xlYXIgdXAgb25jZSBhbGwgcm91bmQgb2YgdGVzdGluZyBoYXMgY29tcGxldGVkXHJcbiAgICAgICAgLy8gVGhpcyByb3V0ZSBoYXMgY2hhbGxlbmdlcyBuYXZpZ2F0ZSBiYWNrIHRvIGdyaWQgcGFnZSBwb3N0IGZvcm0gc3VibWlzc2lvbi5cclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMucGFyZW50R3JpZFBhZ2VJZCkge1xyXG4gICAgICAgIC8vICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ3RhYicpID4gMCkge1xyXG4gICAgICAgIC8vICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignbW9kaWZ5JykgPiAwKSB7XHJcbiAgICAgICAgLy8gICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuLi8uLi8uLi8uLi9keW5hbWljLXNlYXJjaC9zZWFyY2gvJywgdGhpcy5wYXJlbnRHcmlkUGFnZUlkXSwge1xyXG4gICAgICAgIC8vICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZVxyXG4gICAgICAgIC8vICAgICAgIH0pO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ3BhZ2UnKSA+IDApIHtcclxuICAgICAgICAvLyAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2R5bmFtaWMtc2VhcmNoL3NlYXJjaC8nLCB0aGlzLnBhcmVudEdyaWRQYWdlSWRdLCB7XHJcbiAgICAgICAgLy8gICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlXHJcbiAgICAgICAgLy8gICAgICAgfSk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3BhZ2VzL2R5bmFtaWMtc2VhcmNoL3NlYXJjaC8nLCB0aGlzLnBhcmVudEdyaWRQYWdlSWRdLCB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUgfSk7XHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBET05FIC0gUE1QLVJvdXRpbmcgYmFja1xyXG4gICAgICAgIGlmICh0aGlzLmFwcFNlcnZpY2UuY2FuTmF2aWdhdGVCYWNrKCkpIHtcclxuICAgICAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgX2Vycm9yID0+IHtcclxuICAgICAgICB0aGlzLnN1Ym1pdEZhaWxlZC5uZXh0KCdGYWlsZWQgdG8gYWRkIHJlc3BvbnNlJyk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBhZGRBdHRhY2htZW50KGluZm8pIHtcclxuICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmNyZWF0ZUZvcm1SZXNwb25zZUF0dGFjaG1lbnQoaW5mbykuc3Vic2NyaWJlKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKTtcclxuICB9XHJcblxyXG4gIHN1Ym1pdHRlZERhdGUocmVzdWx0KSB7XHJcbiAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhID0geyBkYXRhOiByZXN1bHRbMF0uZGF0YSA/IHJlc3VsdFswXS5kYXRhIDogcmVzdWx0WzBdIH07XHJcbiAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLnVzZXJyb2xla2V5ID0gdGhpcy51c2VyPy5yb2xlPy5yb2xla2V5O1xyXG4gICAgICB0aGlzLmlkID0gcmVzdWx0WzBdLmlkO1xyXG4gICAgICB0aGlzLm9wZW5Cb3R0b21TaGVldCgpO1xyXG4gICAgfSBlbHNlIGlmIChyZXN1bHQpIHtcclxuICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhID0geyBkYXRhOiByZXN1bHQ/LmRhdGEgPyByZXN1bHQ/LmRhdGEgOiByZXN1bHQgfTtcclxuICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhLmRhdGEudXNlcnJvbGVrZXkgPSB0aGlzLnVzZXI/LnJvbGU/LnJvbGVrZXk7XHJcbiAgICAgIHRoaXMuaWQgPSByZXN1bHQuaWQ7XHJcbiAgICAgIHRoaXMub3BlbkJvdHRvbVNoZWV0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlkID0gbnVsbDtcclxuICAgICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5pZC5uZXh0KG51bGwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3VibWl0VG9TdXJ2ZXkoKSB7XHJcbiAgICBpZiAodGhpcy5wYWdldHlwZSA9PT0gJ1NVUlZFWScpIHtcclxuICAgICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UuY3JlYXRlVXNlclN1cnZleShoaXN0b3J5LCB0aGlzLmlkKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIC8vVGhpcyBpcyBpbnRlbnRpb25hbFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUZvcm0ocmVxdWVzdERhdGEpIHtcclxuICAgIGNvbnN0IGZpbGVVcGxvYWREYXRhID0gdGhpcy5hdXRoU2VydmljZS5nZXRTaGFyZWRNZXNzYWdlKCk7XHJcbiAgICBpZiAocmVxdWVzdERhdGE/LnJlc3BvbnNlPy5pZCkge1xyXG4gICAgICB0aGlzLmlkID0gcmVxdWVzdERhdGE/LnJlc3BvbnNlPy5pZDtcclxuICAgIH1cclxuICAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLnVwZGF0ZUZvcm1SZXNwb25zZSh0aGlzLmlkLCByZXF1ZXN0RGF0YSkuc3Vic2NyaWJlKFxyXG4gICAgICByZXN1bHQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHRbJ2RhdGEnXTtcclxuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhID0geyBkYXRhOiByZXN1bHRbMF0uZGF0YSA/IHJlc3VsdFswXS5kYXRhIDogcmVzdWx0WzBdIH07XHJcbiAgICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS51c2Vycm9sZWtleSA9IHRoaXMudXNlcj8ucm9sZT8ucm9sZWtleTtcclxuICAgICAgICAgIHRoaXMuaWQgPSByZXN1bHRbMF0uaWQ7XHJcbiAgICAgICAgICB0aGlzLm9wZW5Cb3R0b21TaGVldCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEgPSB7IGRhdGE6IGRhdGEgPyBkYXRhIDogcmVzdWx0IH07XHJcbiAgICAgICAgICB0aGlzLnN1Ym1pdHRlZERhdGEuZGF0YS51c2Vycm9sZWtleSA9IHRoaXMudXNlcj8ucm9sZT8ucm9sZWtleTtcclxuICAgICAgICAgIHRoaXMuaWQgPSByZXN1bHRbJ2lkJ107XHJcbiAgICAgICAgICB0aGlzLnJlZGlyZWN0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuaWQgPSBudWxsO1xyXG4gICAgICAgICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5pZC5uZXh0KG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvY2Fsc3RvcmFnZS5zZXRJdGVtKCdlZGl0VmFsdWUnLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0RGF0YT8ucmVzcG9uc2UpKTtcclxuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdWNjZXNzKCdSZWNvcmQgU2F2ZWQgU3VjY2Vzc2Z1bGx5JywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhID0ge1xyXG4gICAgICAgICAgZGF0YTogcmVxdWVzdERhdGE/LnJlc3BvbnNlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBmaWxlVXBsb2FkSW5mbyA9IE9iamVjdC5hc3NpZ24oeyByZXNwb25zZWlkOiBOdW1iZXIocmVzdWx0WydkYXRhJ11bJ2lkJ10pIH0sIGZpbGVVcGxvYWREYXRhKTtcclxuICAgICAgICBpZiAoZmlsZVVwbG9hZERhdGE/LmF0dGFjaG1lbnRkZXRhaWxzKSB7XHJcbiAgICAgICAgICB0aGlzLmFkZEF0dGFjaG1lbnQoZmlsZVVwbG9hZEluZm8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvY2Fsc3RvcmFnZS5yZW1vdmVJdGVtKCd0aXRsZXRhYicpO1xyXG4gICAgICAgIHRoaXMubG9jYWxzdG9yYWdlLnJlbW92ZUl0ZW0oJ2VkaXRWYWx1ZScpO1xyXG4gICAgICAgIHRoaXMubG9jYWxzdG9yYWdlLnJlbW92ZUl0ZW0oJ3RhcmdldC10YWItZmlsdGVyJyk7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIF9lcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5zdWJtaXRGYWlsZWQubmV4dCgnRmFpbGVkIHRvIHVwZGF0ZSByZXNwb25zZScpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VQb3B1cCgpIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBnb0JhY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uLy4uL2xpc3QnXSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xyXG4gIH1cclxuXHJcbiAgb3BlbkJvdHRvbVNoZWV0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5zb3VyY2VJZC5uZXh0KHRoaXMuc291cmNlaWQpO1xyXG4gICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5pZC5uZXh0KHRoaXMuaWQpO1xyXG4gICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5wYWdlSWQubmV4dCh0aGlzLmZvcm1JZCk7XHJcbiAgfVxyXG5cclxuICBtb2RpZnlWaWRlb0NvbnRlbnQoKSB7XHJcbiAgICBjb25zdCB2aWRlb0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYW5nZXRvSWZyYW1lJyk7XHJcbiAgICBpZiAodmlkZW9FbGVtZW50cyAmJiB2aWRlb0VsZW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICB2aWRlb0VsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNyYyA9IGVsZW1lbnQuc3JjO1xyXG4gICAgICAgIGNvbnN0IGlmcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuICAgICAgICBpZnJtLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcclxuICAgICAgICBpZnJtLnN0eWxlLndpZHRoID0gZWxlbWVudC53aWR0aCA/IGVsZW1lbnQud2lkdGggOiBudWxsO1xyXG4gICAgICAgIGlmcm0uc3R5bGUuaGVpZ2h0ID0gZWxlbWVudC5oZWlnaHQgPyBlbGVtZW50LmhlaWdodCA6IG51bGw7XHJcbiAgICAgICAgaWZybS53aWR0aCA9IGVsZW1lbnQud2lkdGggPyBlbGVtZW50LndpZHRoIDogbnVsbDtcclxuICAgICAgICBpZnJtLmhlaWdodCA9IGVsZW1lbnQuaGVpZ2h0ID8gZWxlbWVudC5oZWlnaHQgOiBudWxsO1xyXG4gICAgICAgIGVsZW1lbnQucmVwbGFjZVdpdGgoaWZybSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3VzdG9tQ2xpY2tFdmVudHMoX2RhdGEsIGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQuc3JjRWxlbWVudC5pZCA9PSAnc2Nhbl9idXR0b24nKSB7XHJcbiAgICAgIHRoaXMuZXh0ZXJuYWxfc2Nhbm5lci5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XHJcbiAgICAgIGlmIChldmVudC5zcmNFbGVtZW50LmRhdGFzZXQpIHtcclxuICAgICAgICB0aGlzLnNjYW5uZXJDb25maWcgPSBldmVudC5zcmNFbGVtZW50LmRhdGFzZXQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZGlyZWN0KCkge1xyXG4gICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UuY2hhbmdlUGFnZSh0cnVlKTtcclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCd0YWInKSA+IDApIHtcclxuICAgICAgdGhpcy5keW5hbWljVGFiUGFnZVNlcnZpY2UuY2hhbmdlUGFnZSh0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGN1c3RvbUV2ZW50c0J1dHRvbihldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdyZXBvcnRkb3dubG9hZCcpIHtcclxuICAgICAgY29uc3QgcXVlcnlEYXRhID0gdGhpcy5kYXRhU3RvcmUuZ2V0RGF0YSgnZ3JpZERhdGEnKTtcclxuICAgICAgY29uc3QgcGFnZURhdGEgPSB0aGlzLmRhdGFTdG9yZS5nZXREYXRhKCdwYWdlRGF0YScpO1xyXG4gICAgICBldmVudC5kYXRhWydjdXJyZW50WWVhciddID0gZXZlbnQuZGF0YS5yZXBvcnQxID09PSAnY3VycmVudFllYXInID8gJ3llcycgOiAnJztcclxuICAgICAgaWYgKGV2ZW50LmRhdGFbJ2N1cnJlbnRZZWFyJ10gPT09ICd5ZXMnKSB7XHJcbiAgICAgICAgZXZlbnQuZGF0YVsnZnJvbVJhbmdlJ10gPSAnMjAyMS0wNi0xOFQxNDozMzowNi4zNjYrMDAwMCc7XHJcbiAgICAgICAgZXZlbnQuZGF0YVsndG9SYW5nZSddID0gJzIwMjEtMDYtMThUMTQ6MzM6MDYuMzY2KzAwMDAnO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgZm9ybURhdGE6IGV2ZW50LmRhdGEsXHJcbiAgICAgICAgcXVlcnlEYXRhOiBxdWVyeURhdGEsXHJcbiAgICAgICAgcGFnZURhdGE6IHBhZ2VEYXRhXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuZG93bmxvYWRSZXBvcnQoZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb3dubG9hZFJlcG9ydChkYXRhKSB7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS5leHBvcnRSZXBvcnQoZGF0YSkuc3Vic2NyaWJlKFxyXG4gICAgICAgIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZXNwID0gcmVzdWx0WydkYXRhJ107XHJcbiAgICAgICAgICBpZiAocmVzcC5wZGZBd3NVcmwgJiYgcmVzcC5leGNlbEF3c1VybCkge1xyXG4gICAgICAgICAgICBjb25zdCB1cmxzID0gW107XHJcbiAgICAgICAgICAgIHVybHMucHVzaChyZXNwLnBkZkF3c1VybCk7XHJcbiAgICAgICAgICAgIHVybHMucHVzaChyZXNwLmV4Y2VsQXdzVXJsKTtcclxuICAgICAgICAgICAgdGhpcy5kb3dubG9hZEZpbGUodXJscyk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3AuZXhjZWxBd3NVcmwpIHtcclxuICAgICAgICAgICAgdGhpcy5kb3dubG9hZEZpbGUocmVzcC5leGNlbEF3c1VybCk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3AucGRmQXdzVXJsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG93bmxvYWRGaWxlKHJlc3AucGRmQXdzVXJsKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb3dubG9hZEZpbGUoczNCdWNrZXRVcmxOYW1lKSB7XHJcbiAgICBpZiAoczNCdWNrZXRVcmxOYW1lICYmIEFycmF5LmlzQXJyYXkoczNCdWNrZXRVcmxOYW1lKSkge1xyXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgczNCdWNrZXRVcmxOYW1lKSB7XHJcbiAgICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgbGluay5ocmVmID0gaXRlbTtcclxuICAgICAgICBsaW5rLmRvd25sb2FkID0gJ2Rvd25sb2FkJztcclxuICAgICAgICBsaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XHJcbiAgICAgICAgbGluayA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgIGxpbmsuaHJlZiA9IHMzQnVja2V0VXJsTmFtZS50cmltKCk7XHJcbiAgICAgIGxpbmsuZG93bmxvYWQgPSAnZG93bmxvYWQnO1xyXG4gICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgIGxpbmsucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjdXN0b21FdmVudHMoZXZ0KSB7XHJcbiAgICBpZiAoZXZ0LmRhdGEpIHtcclxuICAgICAgdGhpcy5keW5hbWljU2VhcmNoU2VydmljZS5vbkNoYW5nZVBhZ2VFdmVudERhdGEgPSBldnQ7XHJcbiAgICAgIHRoaXMuZHluYW1pY1NlYXJjaFNlcnZpY2Uub25DaGFuZ2VQYWdlRXZlbnRJZCA9IHRoaXMuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5maW5hbmNlQ3VzdG9tRXZlbnRzRnVuY3Rpb25hbGl0eShldnQpO1xyXG4gIH1cclxuXHJcbiAgc3BlZWNoVG9UZXh0Q29udGVudCgpIHtcclxuICAgIGNvbnN0IHNwZWVjaEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNwZWVjaFRvVGV4dCcpO1xyXG4gICAgaWYgKHNwZWVjaEVsZW1lbnRzICYmIHNwZWVjaEVsZW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICBzcGVlY2hFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBzcGVlY2hidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBzcGVlY2hidG4uY2xhc3NOYW1lID0gJ25hcnJhdGl2ZS1zcGVlY2gtYnRuJztcclxuICAgICAgICBzcGVlY2hidG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEgZmEtbWljcm9waG9uZS1zbGFzaFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nO1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3BlZWNoYnRuKTtcclxuICAgICAgICBzcGVlY2hidG4uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICdjbGljaycsXHJcbiAgICAgICAgICBldnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlU3BlZWNoVG9UZXh0KHRoaXMsIGV2dCwgZWxlbWVudCk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFjdGl2YXRlU3BlZWNoVG9UZXh0KGN0cmwsIGV2dCwgaXRlbSkge1xyXG4gICAgY29uc3QgbmFycmF0aXZlRWxlbWVudCA9IGV2dD8uY3VycmVudFRhcmdldD8uY2hpbGRyZW4/Lmxlbmd0aFxyXG4gICAgICA/IGV2dD8uY3VycmVudFRhcmdldD8uY2hpbGRyZW5bMF1cclxuICAgICAgOiBldnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICB0aGlzLnNwZWVjaFJlY29nbmluaXRpb25PbiA9ICF0aGlzLnNwZWVjaFJlY29nbmluaXRpb25PbjtcclxuICAgIGlmICh0aGlzLnNwZWVjaFJlY29nbmluaXRpb25Pbikge1xyXG4gICAgICBjb25zdCBzcGVlY2hUZXh0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xyXG4gICAgICBpZiAobmFycmF0aXZlRWxlbWVudCkge1xyXG4gICAgICAgIG5hcnJhdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID0gJ2ZhIGZhLW1pY3JvcGhvbmUnO1xyXG4gICAgICB9XHJcbiAgICAgIGN0cmwuc3BlZWNoUmVjb2duaXRpb25TZXJ2aWNlLnJlY29yZCgpLnN1YnNjcmliZShcclxuICAgICAgICAvLyBsaXN0ZW5lclxyXG4gICAgICAgIHZhbHVlID0+IHtcclxuICAgICAgICAgIGxldCB0ZW1wTmFycmF0aXZlID0gc3BlZWNoVGV4dC52YWx1ZTtcclxuICAgICAgICAgIHRlbXBOYXJyYXRpdmUgPSB0ZW1wTmFycmF0aXZlLnRyaW0oKS5jb25jYXQoJyAnICsgdmFsdWUpO1xyXG4gICAgICAgICAgaWYgKHNwZWVjaFRleHQpIHtcclxuICAgICAgICAgICAgc3BlZWNoVGV4dC52YWx1ZSA9IHRlbXBOYXJyYXRpdmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBlcnJyb3JcclxuICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jb25kaXRpb25DaGVja0Vycm9yKG5hcnJhdGl2ZUVsZW1lbnQsIGN0cmwsIGV2dCwgaXRlbSwgZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAobmFycmF0aXZlRWxlbWVudCkge1xyXG4gICAgICAgIG5hcnJhdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID0gJ2ZhIGZhLW1pY3JvcGhvbmUtc2xhc2gnO1xyXG4gICAgICB9XHJcbiAgICAgIGN0cmwuZGVBY3RpdmF0ZVNwZWVjaFJlY29nbml0aW9uKGN0cmwpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25kaXRpb25DaGVja0Vycm9yKG5hcnJhdGl2ZUVsZW1lbnQsIGN0cmwsIGV2dCwgaXRlbSwgZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB0aGlzLmVycm9yRXhlY3V0aW9uKG5hcnJhdGl2ZUVsZW1lbnQsIGN0cmwsIGV2dCwgaXRlbSwgZXJyKTtcclxuICB9XHJcblxyXG4gIGVycm9yRXhlY3V0aW9uKG5hcnJhdGl2ZUVsZW1lbnQsIGN0cmwsIGV2dCwgaXRlbSwgZXJyKSB7XHJcbiAgICBpZiAobmFycmF0aXZlRWxlbWVudCkge1xyXG4gICAgICBuYXJyYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9ICdmYSBmYS1taWNyb3Bob25lLXNsYXNoJztcclxuICAgIH1cclxuICAgIGlmIChlcnIuZXJyb3IgPT09ICduby1zcGVlY2gnKSB7XHJcbiAgICAgIGN0cmwubm90aWZpY2F0aW9uID0gdGhpcy5ub1NwZWVjaEFsZXJ0KCk7XHJcbiAgICAgIGN0cmwuYWN0aXZhdGVTcGVlY2hUb1RleHQoY3RybCwgZXZ0LCBpdGVtKTtcclxuICAgIH0gZWxzZSBpZiAoZXJyLmVycm9yID09PSAnbm90LWFsbG93ZWQnKSB7XHJcbiAgICAgIGN0cmwubm90aWZpY2F0aW9uID0gdGhpcy5taWNVbmF1dGhvcmlzZWRBbGVydCgpO1xyXG4gICAgfSBlbHNlIGlmIChlcnIuZXJyb3IgPT09ICdub3QtbWljcm9waG9uZScpIHtcclxuICAgICAgY3RybC5ub3RpZmljYXRpb24gPSB0aGlzLm1pY05vdEF2YWlsYWJsZUFsZXJ0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtaWNOb3RBdmFpbGFibGVBbGVydCgpIHtcclxuICAgIHJldHVybiAnTWljcm9waG9uZSBpcyBub3QgYXZhaWxhYmxlLiBQbGVhc2UgdmVyaWZ5IHRoZSBjb25uZWN0aW9uIG9mIHlvdXIgbWljcm9waG9uZSBhbmQgdHJ5IGFnYWluLic7XHJcbiAgfVxyXG5cclxuICBtaWNVbmF1dGhvcmlzZWRBbGVydCgpIHtcclxuICAgIHJldHVybiAnWW91ciBicm93c2VyIGlzIG5vdCBhdXRob3JpemVkIHRvIGFjY2VzcyB5b3VyIG1pY3JvcGhvbmUuIFZlcmlmeSB0aGF0IHlvdXIgYnJvd3NlciBoYXMgYWNjZXNzIHRvIHlvdXIgbWljcm9waG9uZSBhbmQgdHJ5IGFnYWluLic7XHJcbiAgfVxyXG5cclxuICBub1NwZWVjaEFsZXJ0KCkge1xyXG4gICAgcmV0dXJuICdObyBzcGVlY2ggaGFzIGJlZW4gZGV0ZWN0ZWQuIFBsZWFzZSB0cnkgYWdhaW4uJztcclxuICB9XHJcblxyXG4gIGRlQWN0aXZhdGVTcGVlY2hSZWNvZ25pdGlvbihjdHJsKSB7XHJcbiAgICB0aGlzLnNwZWVjaFJlY29nbmluaXRpb25PbiA9IGZhbHNlO1xyXG4gICAgY3RybC5zcGVlY2hSZWNvZ25pdGlvblNlcnZpY2UuZGVzdHJveVNwZWVjaE9iamVjdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5kYXRhU3ViKSB0aGlzLmRhdGFTdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuc3BlZWNoUmVjb2duaXRpb25TZXJ2aWNlLmRlc3Ryb3lTcGVlY2hPYmplY3QoKTtcclxuICAgIHRoaXMub2NyLmNsZWFyUmVzcG9uc2UoKTtcclxuICAgIGlmICh0aGlzLnBhZ2VEYXRhU3Vic2NyaXB0aW9uKSB0aGlzLnBhZ2VEYXRhU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICB1cGxvYWRGaWxlKGZpbGU6IEZpbGUgfCBGaWxlRXJyb3IgfCBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub2NyLmdldFJlc3BvbnNlKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN0YXR1cyA9PSAnU1VDQ0VFREVEJykge1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc09DUlJlc3BvbnNlKHJlc3VsdCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9jZXNzUmVzcG9uc2VEYXRhKGZpbGUpO1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc1Jlc3BvbnNlRGF0YShmaWxlKTogdm9pZCB7XHJcbiAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS51cGxvYWRGaWxlKGZpbGUpLnN1YnNjcmliZShcclxuICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnBlcmNlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgX2VyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VuYWJsZSB0byBwcm9jZXNzIHlvdXIgcmVxdWVzdC4nKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByb2Nlc3NPQ1JSZXNwb25zZShyZXN1bHQpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gcmVzdWx0LnJlc3BvbnNlO1xyXG4gICAgaWYgKHRoaXMuc2Nhbm5lckNvbmZpZyAmJiB0aGlzLnNjYW5uZXJDb25maWcuc2NhblR5cGUpIHtcclxuICAgICAgaWYgKHRoaXMuc2Nhbm5lckNvbmZpZy5zY2FuVHlwZSA9PT0gJ3RleHQnICYmIHRoaXMuc2Nhbm5lckNvbmZpZy5zY2FuUGF0Y2gpIHtcclxuICAgICAgICBjb25zdCBzZGF0YSA9IHRoaXMuc3VibWl0dGVkRGF0YTtcclxuICAgICAgICBpZiAoc2RhdGEgJiYgc2RhdGEuZGF0YSkge1xyXG4gICAgICAgICAgc2RhdGEuZGF0YVt0aGlzLnNjYW5uZXJDb25maWcuc2NhblBhdGNoXSA9IHJlc3BvbnNlLnJhd190ZXh0O1xyXG4gICAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YXYxID0gdGhpcy5vY3IucHJlcGFyZV9mb3JtX2RhdGEocmVzcG9uc2UsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5Gb3JtSW5wdXRzKSkpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhdjIgPSB0aGlzLm9jci5wcmVwYXJlX2Zyb21fZGF0YV92MShyZXNwb25zZSwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLkZvcm1JbnB1dHMpKSk7XHJcbiAgICAgICAgY29uc3QgZmluYWxEYXRhID0geyAuLi5mb3JtRGF0YXYxLCAuLi5mb3JtRGF0YXYyIH07XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRhID0geyBkYXRhOiBmaW5hbERhdGEgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJlcGFyZUZvcm1LZXlMYWJlbChqc29uKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShqc29uKSkge1xyXG4gICAgICBqc29uLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcmVwYXJlRm9ybUtleUxhYmVsKGl0ZW0pO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIGpzb24uaGFzT3duUHJvcGVydHkoJ2lucHV0JykgJiZcclxuICAgICAganNvbi5pbnB1dCAmJlxyXG4gICAgICBqc29uLnR5cGUgIT09ICdidXR0b24nICYmXHJcbiAgICAgIGpzb24udHlwZSAhPT0gJ3NpZ25hdHVyZScgJiZcclxuICAgICAgIWpzb24uaGFzT3duUHJvcGVydHkoJ2N1c3RvbUNvbmRpdGlvbmFsJykgJiZcclxuICAgICAgIWpzb24uaGFzT3duUHJvcGVydHkoJ2NvbmRpdGlvbmFsJylcclxuICAgICkge1xyXG4gICAgICBsZXQgdmFsdWVzID0gW107XHJcbiAgICAgIGlmIChqc29uLnR5cGUgPT09ICdyYWRpbycgfHwganNvbi50eXBlID09PSAnc2VsZWN0Ym94ZXMnKSB7XHJcbiAgICAgICAgdmFsdWVzID0ganNvbi52YWx1ZXMgfHwgW107XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZm9ybU9iamVjdCA9IHtcclxuICAgICAgICBrZXk6IGpzb25bJ2tleSddLFxyXG4gICAgICAgIGxhYmVsOiBqc29uWydsYWJlbCddLFxyXG4gICAgICAgIHR5cGU6IGpzb25bJ3R5cGUnXSxcclxuICAgICAgICB2YWx1ZXM6IFsuLi52YWx1ZXNdXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuRm9ybUlucHV0cy5wdXNoKGZvcm1PYmplY3QpO1xyXG5cclxuICAgICAgaWYgKGpzb24udHlwZSA9PT0gJ3NlbGVjdCcgJiYganNvbi5tdWx0aXBsZSkge1xyXG4gICAgICAgIHRoaXMubXVsdGlTZWxlY3REcm9wRG93bnMucHVzaChqc29uLmtleSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKGpzb24pLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShqc29uW2tleV0pKSB7XHJcbiAgICAgICAgICB0aGlzLnByZXBhcmVGb3JtS2V5TGFiZWwoanNvbltrZXldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmluYW5jZUN1c3RvbUV2ZW50c0Z1bmN0aW9uYWxpdHkoZXZlbnQpIHtcclxuICAgIGlmIChcclxuICAgICAgICBldmVudD8uY2hhbmdlZD8uY29tcG9uZW50Py5rZXkgPT09ICdpc0JhbmtBY2NvdW50RXhpc3QnICYmXHJcbiAgICAgICAgIWV2ZW50Py5kYXRhPy5pc0JhbmtBY2NvdW50RXhpc3QgJiZcclxuICAgICAgICBldmVudD8uZGF0YT8uYWNjb3VudFR5cGVLZXlcclxuICAgICkge1xyXG4gICAgICAgIGxldCBhcGkgPSAnJztcclxuICAgICAgICBpZiAoZXZlbnQ/LmRhdGE/LmFjY291bnRUeXBlS2V5ID09PSAnQ0EnKSB7XHJcbiAgICAgICAgICAgIGFwaSA9ICdmaW5hbmNlY2FyZWFjY291bnRubyc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudD8uZGF0YT8uYWNjb3VudFR5cGVLZXkgPT09ICdSQScpIHtcclxuICAgICAgICAgICAgYXBpID0gJ2ZpbmFuY2VyZXN0aXR1dGlvbmFjY291bnRubyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXBpID0gJ2ZpbmFuY2VzYXZpbmdhY2NvdW50bm8nO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS5nZXRVbmlxdWVJZChhcGkpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkRGF0YS5kYXRhLmJhbmtBY2NvdW50TnVtYmVyID0gcmVzdWx0WydkYXRhJ107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJSZWZyZXNoLmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiAnc3VibWlzc2lvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3VibWl0dGVkRGF0YVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgcm91dGVUb0dyaWQodmFsKSB7XHJcbiAgICBpZiAodmFsID09PSAnTWFrZSBQYXltZW50Jykge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4vcGFnZXMvbWVyZ2VwYWdlLzFmNGUyNzJhLTRjMDMtNDczOS1iNGE1LTUzNzQ4ZTA2ZTI0NyddKTtcclxuICAgIH0gZWxzZSBpZiAodmFsID09PSAnUGF5bWVudCBEZXRhaWxzIEluZm9ybWF0aW9uJykge1xyXG4gICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcclxuICAgIH1cclxufVxyXG5cclxuICBjdXN0b21FdmVudChldmVudCkge1xyXG4gICAgdGhpcy5fZm9ybUlPLmN1c3RvbUV2ZW50KGV2ZW50LCB0aGlzLmZvcm1JTyk7XHJcbiAgfVxyXG5cclxuICBvY3JVcGxvYWQoZmlsZXMpIHtcclxuICAgIHRoaXMudXBsb2FkZWRGaWxlID0gZmlsZXMudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgY29uc3QgcGFnZUlEID0gdGhpcy5mb3JtSWQgPyB0aGlzLmZvcm1JZCA6IHRoaXMucGFnZUlkO1xyXG4gICAgdGhpcy5pbWFnZURhdGEgPSB7XHJcbiAgICAgIGNvbnRlbnRUeXBlOiB0aGlzLnVwbG9hZGVkRmlsZS50eXBlLFxyXG4gICAgICBmaWxlTmFtZTogYG9jci8ke3BhZ2VJRH0vJHt0aGlzLnVwbG9hZGVkRmlsZS5uYW1lfWBcclxuICAgIH07XHJcbiAgICB0aGlzLmF0dGFjaG1lbnRTZXJ2aWNlLnVwbG9hZEtleSh0aGlzLmltYWdlRGF0YSkuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzLmRhdGEpIHtcclxuICAgICAgICBjb25zdCB1cGxvYWRBdHRhY2htZW50OiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpO1xyXG4gICAgICAgIGNvbnN0IHVwbG9hZEF0dGFjaG1lbnREZXRhaWxzID0gdXBsb2FkQXR0YWNobWVudC5maWxlc1swXTtcclxuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlLnB1dHVwbG9hZDIocmVzLmRhdGEsIHVwbG9hZEF0dGFjaG1lbnREZXRhaWxzLCB1cGxvYWRBdHRhY2htZW50RGV0YWlscy50eXBlKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAocmVzcDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwICYmIHJlc3Auc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IG9iamVjdCA9IHtcclxuICAgICAgICAgICAgICAgIHBhdGg6IGBvY3IvJHtwYWdlSUR9LyR7dGhpcy51cGxvYWRlZEZpbGUubmFtZX1gLFxyXG4gICAgICAgICAgICAgICAgYXR0YWNobWVudHR5cGU6IHRoaXMudXBsb2FkZWRGaWxlLnR5cGVcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN1Y2Nlc3MoJ1VwbG9hZGVkIFN1Y2Nlc3NmdWxseSEnKTtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5hY3Rpb24gPT09ICdlZGl0Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRVcGxvYWQoSlNPTi5zdHJpbmdpZnkob2JqZWN0KSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0blZlcmlmeSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxzdG9yYWdlLnNldE9iaignT0NST2JqJywgSlNPTi5zdHJpbmdpZnkob2JqZWN0KSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dPY3JGb3JtID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuVmVyaWZ5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKFNPTUVUSElOR19XRU5UX1dST05HKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb25kaW9uQ2hlY2tFcnJvckFsZXJ0KGVycm9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgY29uZGlvbkNoZWNrRXJyb3JBbGVydChlcnJvcikge1xyXG4gICAgaWYgKGVycm9yLnN0YXR1cyA9PSAwKSB0aGlzLmFsZXJ0U2VydmljZS5lcnJvcihTT01FVEhJTkdfV0VOVF9XUk9ORyk7XHJcbiAgfVxyXG4gIGdldFVwbG9hZChvYmopIHtcclxuICAgIHRoaXMub2NyVmFsaWRhdGlvblNlcnZpY2UuZ2V0VXBsb2FkKG9iaikuc3Vic2NyaWJlKFxyXG4gICAgICAocmVzOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAocmVzICYmIHJlcy5kYXRhKSB7XHJcbiAgICAgICAgICBjb25zdCByZXNEYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICBjb25zdCBpbWFnZUNhdGVnb3J5ID0gcmVzRGF0YT8uaW1hZ2VDYXRlZ29yeTtcclxuICAgICAgICAgIGNvbnN0IG9jckRvY3VtZW50RGV0YWlscyA9IGltYWdlQ2F0ZWdvcnk/LmlkX2pzb25bMF07XHJcbiAgICAgICAgICB0aGlzLnZlcmlmaURhdGEob2NyRG9jdW1lbnREZXRhaWxzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2UuZXJyb3IoU09NRVRISU5HX1dFTlRfV1JPTkcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZXJyID0+IGNvbnNvbGUubG9nKGVycilcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB2ZXJpZmlEYXRhKG9jckRvY3VtZW50RGV0YWlscykge1xyXG4gICAgY29uc3QganNvbkZvcm0gPSB0aGlzLmpzb25Gb3JtPy5jb21wb25lbnRzWzBdO1xyXG4gICAgaWYgKHRoaXMuZm9ybVJlc3BvbnNlKSB7XHJcbiAgICAgIGNvbnN0IGZyb21BcnJheSA9IE9iamVjdC5rZXlzKHRoaXMuZm9ybVJlc3BvbnNlKTtcclxuICAgICAgZnJvbUFycmF5Py5mb3JFYWNoKHJlc3Bvc2UgPT4ge1xyXG4gICAgICAgIGlmIChvY3JEb2N1bWVudERldGFpbHMpIHtcclxuICAgICAgICAgIGNvbnN0IGRvY3VtZW50VmFsdWUgPSBPYmplY3Qua2V5cyhvY3JEb2N1bWVudERldGFpbHMpO1xyXG4gICAgICAgICAgZG9jdW1lbnRWYWx1ZT8uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb25kaXRpb25DaGVja1ZlcmlmeShlbGVtZW50LCBvY3JEb2N1bWVudERldGFpbHMsIHJlc3Bvc2UsIGpzb25Gb3JtKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb2x1bW5zSnNvbi5jb2x1bW5zWzBdLmNvbXBvbmVudHNbMF0uY29tcG9uZW50c1swXS5jb250ZW50ID0gdGhpcy5jb250ZW50QXJyYXk/LmpvaW4oJycpO1xyXG4gICAgdGhpcy5qc29uRm9ybS5jb21wb25lbnRzWzBdLmNvbXBvbmVudHMuc3BsaWNlKDAsIDAsIGNvbHVtbnNKc29uKTtcclxuICAgIHRoaXMudHJpZ2dlclJlZnJlc2guZW1pdCh7XHJcbiAgICAgIHByb3BlcnR5OiAnZm9ybScsXHJcbiAgICAgIHZhbHVlOiB0aGlzLmpzb25Gb3JtXHJcbiAgICB9KTtcclxuICB9XHJcbiAgY29uZGl0aW9uQ2hlY2tWZXJpZnkoZWxlbWVudCwgb2NyRG9jdW1lbnREZXRhaWxzLCByZXNwb3NlLCBqc29uRm9ybSkge1xyXG4gICAgaWYgKFxyXG4gICAgICAgIGVsZW1lbnQgJiZcclxuICAgICAgICByZXNwb3NlICYmXHJcbiAgICAgICAgZWxlbWVudD8udG9Mb3dlckNhc2UoKSA9PT0gcmVzcG9zZT8udG9Mb3dlckNhc2UoKSAmJlxyXG4gICAgICAgIG9jckRvY3VtZW50RGV0YWlsc1tlbGVtZW50XT8udG9Mb3dlckNhc2UoKSAhPT0gdGhpcy5mb3JtUmVzcG9uc2VbcmVzcG9zZV0/LnRvTG93ZXJDYXNlKClcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuanNvbkZvcm0uY29tcG9uZW50c1swXS5jb21wb25lbnRzID0ganNvbkZvcm0/LmNvbXBvbmVudHMubWFwKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzPy5rZXkgPT09IGVsZW1lbnQ/LnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudEFycmF5LnB1c2goYDxwIHN0eWxlPVwiY29sb3I6cmVkO1wiPiR7cmVzLmxhYmVsfSBOb3QgTWF0Y2g8L3A+XFxuYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4gIGdldEVtaXR0ZWREYXRhKGRhdGEpIHtcclxuICAgIHRoaXMuc2hvd09jckZvcm0gPSBmYWxzZTtcclxuICAgIHRoaXMuYnRuVmVyaWZ5ID0gdHJ1ZTtcclxuICAgIHRoaXMuc3VibWl0dGVkRGF0YSA9IHsgLi4uZGF0YSwgLi4udGhpcy5zdWJtaXR0ZWREYXRhIH07XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgPGRpdiBjbGFzcz1cImNvbCBteS0zXCIgKm5nSWY9XCJpc1RpdGxlXCI+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tY2FuY2VsXCIgKGNsaWNrKT1cImxvY2F0aW9uLmJhY2soKVwiICpuZ0lmPVwic2hvd1RhYkJhY2tcIj5cclxuICAgICAgQmFjayB7eyBwYXJlbnRHcmlkUGFnZSAmJiAndG8gJyArIHBhcmVudEdyaWRQYWdlIH19XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxoNiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGQgbXQtMyBtYi0wIGZyb21UaXRsZVwiPnt7IGlzVGl0bGUgfX08L2g2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJyb3dcIiAqbmdJZj1cIiFzaG93T2NyRm9ybVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMiBkeW5hbWljLXBhZ2UgbXQtMFwiICpuZ0lmPVwiaXNmb3JtSU9cIj5cclxuICAgICAgPGZvcm1pbyAjZm9ybUlPIFtmb3JtXT1cImpzb25Gb3JtXCIgW3JlYWRPbmx5XT1cImlzUmVhZE9ubHlcIiBbc3VibWlzc2lvbl09XCJzdWJtaXR0ZWREYXRhXCIgKHN1Ym1pdCk9XCJvblN1Ym1pdCgkZXZlbnQpXCJcclxuICAgICAgICAoY2hhbmdlKT1cImN1c3RvbUV2ZW50cygkZXZlbnQpXCIgKGNsaWNrKT1cImN1c3RvbUNsaWNrRXZlbnRzKHN1Ym1pdHRlZERhdGEsICRldmVudClcIlxyXG4gICAgICAgIChjdXN0b21FdmVudCk9XCJjdXN0b21FdmVudHNCdXR0b24oJGV2ZW50KVwiIFtyZWZyZXNoXT1cInRyaWdnZXJSZWZyZXNoXCIgW3N1Y2Nlc3NdPVwic3VibWl0U3VjY2Vzc1wiXHJcbiAgICAgICAgW2Vycm9yXT1cInN1Ym1pdEZhaWxlZFwiIChjdXN0b21FdmVudCk9XCJjdXN0b21FdmVudCgkZXZlbnQpXCI+PC9mb3JtaW8+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cInJvd1wiICpuZ0lmPVwic2hvd09jckZvcm1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgZHluYW1pYy1wYWdlIG10LTBcIj5cclxuICAgICAgPGFwcC1vY3ItdmFsaWRhdGlvbiAob2NyUmVzcG9uc2UpPVwiZ2V0RW1pdHRlZERhdGEoJGV2ZW50KVwiIFtjdXJyZW50dGVtcGxhdGVSZXN1bHRdPVwidGVtcGxhdGVSZXN1bHRcIlxyXG4gICAgICAgIFtmb3JtUmVzcG9uc2VEYXRhXT1cImZvcm1SZXNwb25zZVwiIFtzdWJtaXRpb25EYXRhXT1cInN1Ym1pdHRlZERhdGFcIj48L2FwcC1vY3ItdmFsaWRhdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPGJ1dHRvbiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIiBpZD1cImV4dGVybmFsX3NjYW5uZXJcIiAjZXh0ZXJuYWxfc2Nhbm5lciBtYXQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cImJ0bi1pY29uLWJnXCJcclxuICAobmd4Zi1zZWxlY3QpPVwidXBsb2FkRmlsZSgkZXZlbnQpXCI+XHJcbiAgU2NhblxyXG48L2J1dHRvbj4iXX0=