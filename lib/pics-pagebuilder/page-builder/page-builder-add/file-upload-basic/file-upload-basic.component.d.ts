import { EventEmitter, OnInit } from '@angular/core';
import { FormioCustomComponent, FormioEvent } from '@formio/angular';
import { AlertService } from '../../../@core/services/alert.service';
import { AuthService } from '../../../@core/services/auth.service';
import { DataStoreService } from '../../../@core/services/data-store.service';
import { PageBuilderAddService } from '../../../@core/services/page-builder-add.service';
import * as i0 from "@angular/core";
export interface FileUpload {
    fileName: string;
    contentType: string;
    type: string;
}
export interface FileUploadInfo {
    type: string;
    formid: number;
    attachmentdetails: any;
}
export declare class FileUploadBasicComponent implements FormioCustomComponent<any>, OnInit {
    private _storeservice;
    private alertService;
    private authService;
    private pageBuilderAddService;
    value: any;
    valueChange: EventEmitter<any>;
    disabled: boolean;
    formioEvent: EventEmitter<FormioEvent>;
    uploadedFiles: any;
    formStatus: string;
    sharedInfo: any;
    pageId: any;
    responseId: any;
    uploadedFilesTest: any;
    isShow: boolean;
    httpService: any;
    constructor(_storeservice: DataStoreService, alertService: AlertService, authService: AuthService, pageBuilderAddService: PageBuilderAddService);
    ngOnInit(): void;
    onUpload(event: any, upload: any): void;
    getAllAttachments(): void;
    deleteAttachment(e: any): void;
    viewAttachment(file: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileUploadBasicComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FileUploadBasicComponent, "app-file-upload-basic", never, { "value": { "alias": "value"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "valueChange": "valueChange"; "formioEvent": "formioEvent"; }, never, never, false, never>;
}
