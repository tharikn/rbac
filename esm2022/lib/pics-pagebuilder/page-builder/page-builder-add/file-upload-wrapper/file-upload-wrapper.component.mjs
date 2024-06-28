import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "../../../@core/services/data-store.service";
import * as i2 from "../../../@core/services/alert.service";
import * as i3 from "../../../@core/services/auth.service";
import * as i4 from "../../../@core/services/page-builder-add.service";
import * as i5 from "primeng/api";
import * as i6 from "../../../@core/services/attachments.service";
import * as i7 from "@angular/common";
import * as i8 from "@angular/forms";
import * as i9 from "primeng/dropdown";
import * as i10 from "primeng/card";
import * as i11 from "primeng/confirmdialog";
import * as i12 from "primeng/fileupload";
import * as i13 from "../../../@shared/grid-list/grid-list.component";
export class FileUploadWrapperComponent {
    _storeservice;
    alertService;
    authService;
    pageBuilderAddService;
    confirmationService;
    attachmentsService;
    value;
    valueChange = new EventEmitter();
    disabled = false;
    formioEvent = new EventEmitter();
    uploadedFiles = [];
    formStatus;
    sharedInfo = {};
    pageId;
    responseId;
    uploadedFilesTest = [];
    tableColumns;
    updateGrid;
    categoryList = [];
    subCategoryList = [];
    category;
    subCategory;
    lookupList = [];
    categoryid;
    subcategoryid;
    httpService;
    constructor(_storeservice, alertService, authService, pageBuilderAddService, confirmationService, attachmentsService) {
        this._storeservice = _storeservice;
        this.alertService = alertService;
        this.authService = authService;
        this.pageBuilderAddService = pageBuilderAddService;
        this.confirmationService = confirmationService;
        this.attachmentsService = attachmentsService;
        this.formStatus = 'FORM_RESPONSE_ATTACHMENTS_';
        this.sharedInfo = this.authService.getSharedMessage();
        this.pageId = this.sharedInfo?.pageId;
        this.responseId = this.sharedInfo?.id;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    ngOnInit() {
        this.setTableColumns();
        this.getCategory();
        if (this.responseId) {
            this.formStatus = `${this.formStatus}UPDATE`;
        }
        else {
            this.formStatus = `${this.formStatus}CREATE`;
        }
        this.uploadedFiles = [];
        if (this.responseId) {
            this.getAllAttachments();
        }
    }
    onUpload(event, upload) {
        let resID = '';
        if (this.responseId) {
            resID = `/${this.responseId}`;
        }
        let data;
        event.files.map(f => {
            data = {
                fileName: `${this.pageId}${resID}/${f.name}`,
                contentType: f.type,
                type: this.formStatus
            };
            this.pageBuilderAddService.getUploadKey(data).subscribe((res) => {
                const url = res.data;
                const uploadDetails = f;
                const type = f.type;
                const fileURL = res.data.split('?')[0];
                this.uploadedFiles.push({
                    name: f.name,
                    path: fileURL,
                    attachmenttype: f.type,
                    category: this.categoryid[0].id,
                    subcategory: this.subcategoryid[0].id,
                    categoryName: this.category,
                    subcategoryName: this.subCategory
                });
                const fileInfo = {
                    type: this.formStatus,
                    formid: Number(this.pageId),
                    attachmentdetails: this.uploadedFiles
                };
                this.httpService.putUpload(url, uploadDetails, type).subscribe(() => {
                    this.alertService.success('Uploaded Successfully!');
                    this.value = fileInfo;
                    this.valueChange.emit(fileInfo);
                    this.formioEvent.emit({ eventName: 'customEvent', data: { value: { fileInfo }, type: 'fileUpload' } });
                    this.setTableColumns();
                    upload.clear();
                    this.subCategory = '';
                    this.category = '';
                });
                this.authService.setSharedMessage(fileInfo);
            });
        });
    }
    getAllAttachments() {
        this.pageBuilderAddService.getFormResponseAttachment(this.pageId, this.responseId).subscribe(res => {
            const data = res['data'];
            const fileInfo = {
                type: this.formStatus,
                formid: Number(this.pageId),
                attachmentdetails: data
            };
            this.authService.setSharedMessage(fileInfo);
            this.uploadedFiles = data.map(f => {
                return {
                    id: f.id,
                    name: f.name,
                    path: f.path,
                    categoryName: f.categoryDetails.key,
                    subcategoryName: f.subcategoryDetails.key,
                    attachmenttype: f.attachmenttype,
                    category: f.category,
                    subcategory: f.subcategory
                };
            });
        });
    }
    deleteAttachment(e) {
        const file = e?.data;
        if (file?.id) {
            this.pageBuilderAddService.deleteFormResponseAttachment(file.id).subscribe(() => {
                this.alertService.success('Deleted successfully!');
                this.getAllAttachments();
            });
        }
        else {
            this.uploadedFiles.forEach((f, i) => {
                if (f.path === file.path) {
                    this.uploadedFiles.splice(i, 1);
                    this.setTableColumns();
                }
            });
        }
    }
    downloadAttachment(event) {
        const path = event.data.path.split('/');
        const path1 = path.pop();
        const path2 = path.pop();
        const path3 = path.pop();
        const path4 = path.pop();
        const data = {
            fileName: `${path4}/${path3}/${path2}/${path1}`
        };
        this.pageBuilderAddService.downloadFormResponseAttachment(data).subscribe((res) => {
            if (res && res.status == 'success') {
                window.open(res.data, '_blank');
            }
        });
    }
    confirm(event) {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: () => {
                this.deleteAttachment(event);
            }
        });
    }
    setTableColumns() {
        this.tableColumns = [
            // {
            //   columnDef: 'id',
            //   header: 'Id',
            //   cell: (element: any) => `${element.id}`,
            //   dateFormat: false,
            //   icon: false,
            //   filter: false,
            //   link: false
            // },
            {
                columnDef: 'name',
                header: 'File Name',
                cell: (element) => console.log(element, 'elementssss'),
                dateFormat: false,
                icon: false,
                filter: false,
                link: false
            },
            {
                columnDef: 'categoryName',
                header: 'Category',
                dateFormat: false,
                icon: false,
                filter: false,
                link: false
            },
            {
                columnDef: 'subcategoryName',
                header: 'Sub Category',
                dateFormat: false,
                icon: false,
                filter: false,
                link: false
            },
            {
                columnDef: 'attachmenttype',
                header: 'Type',
                cell: (element) => `${element.type}`,
                dateFormat: false,
                icon: false,
                filter: false,
                link: false
            }
        ];
        this.updateGrid = {
            edit: false,
            view: false,
            lock: false,
            duplicate: false,
            delete: false,
            externalLink: false,
            showDownload: true,
            showDelete: true,
            isNewlyUploaded: this.responseId ? false : true
        };
    }
    getCategory() {
        const categoryname = 'DOCUMENT_LIST';
        this.attachmentsService.getCategoryLookup(categoryname).subscribe((res) => {
            this.lookupList = res.data;
            this.lookupList.map(z => {
                if (!z.parentid) {
                    this.categoryList.push(z);
                }
            });
        });
    }
    getSubCategory() {
        this.subcategoryid = this.subCategoryList.filter(e => e.lookupvalue === this.subCategory);
    }
    getCatogoryItem() {
        const data = this.lookupList.filter(x => x.lookupvalue === this.category);
        this.categoryid = data;
        this.subCategoryList = this.lookupList.filter(y => y.parentid === data[0].id);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FileUploadWrapperComponent, deps: [{ token: i1.DataStoreService }, { token: i2.AlertService }, { token: i3.AuthService }, { token: i4.PageBuilderAddService }, { token: i5.ConfirmationService }, { token: i6.AttachmentsService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FileUploadWrapperComponent, selector: "app-file-upload-wrapper", inputs: { value: "value", disabled: "disabled" }, outputs: { valueChange: "valueChange", formioEvent: "formioEvent" }, providers: [ConfirmationService], ngImport: i0, template: "<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\r\n<p-fileUpload\r\n  #fileUpload\r\n  name=\"demo[]\"\r\n  [customUpload]=\"true\"\r\n  (uploadHandler)=\"onUpload($event, fileUpload)\"\r\n  [auto]=\"true\"\r\n  maxFileSize=\"1000000\"\r\n  multiple=\"multiple\"\r\n  [disabled]=\"!subCategory\">\r\n  <ng-template pTemplate=\"toolbar\">\r\n    <span class=\"d-flex fileUpload-category\">\r\n      <p-dropdown\r\n        [options]=\"categoryList\"\r\n        placeholder=\"Select Category\"\r\n        [(ngModel)]=\"category\"\r\n        optionLabel=\"lookupkey\"\r\n        optionValue=\"lookupvalue\"\r\n        (onChange)=\"getCatogoryItem()\"\r\n        styleClass=\"mr-2\">\r\n      </p-dropdown>\r\n      <p-dropdown\r\n        [options]=\"subCategoryList\"\r\n        placeholder=\"Select Subcategory\"\r\n        [(ngModel)]=\"subCategory\"\r\n        optionLabel=\"lookupkey\"\r\n        (onChange)=\"getSubCategory()\"\r\n        optionValue=\"lookupvalue\"\r\n        styleClass=\"mr-2\">\r\n      </p-dropdown>\r\n    </span>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"content\">\r\n    <p-card styleClass=\"rbac-card gridview w-100\" *ngIf=\"uploadedFiles.length\">\r\n      <app-grid-list\r\n        [dataList]=\"uploadedFiles\"\r\n        [updateGrid]=\"updateGrid\"\r\n        [columns]=\"tableColumns\"\r\n        (downloadFormResponseFiles)=\"downloadAttachment($event)\"\r\n        (deleteFormResponseFiles)=\"confirm($event)\">\r\n      </app-grid-list>\r\n    </p-card>\r\n  </ng-template>\r\n</p-fileUpload>\r\n", styles: [":root{--background-color: #f8f8f8;--navigation: #fff;--primary: #0D3178;--checkbox-border: #D6D5D5;--text-dark: #000;--label-text: #0D3178;--hover-text: #fff;--bg-light: #fff;--forms: #fff;--nav-text: #696969;--light-gray: #696969;--material-icons: #0D3178;--highlight-list: #e3f2fd;--table-header: #f9f9f9;--table-odd: #f7f7f7;--table-border: #ddd;--table-hover: #dbf6ff;--table-odd-color: #f2fcff;--btn: #0D3178;--menu-panel: #032361;--menu-level2: #28447E;--border-trans: transparent;--btn-hover: #1258A7;--btn-dark: #0D3178;--dropdown-list: #fff;--btncancel: #0D3178;--primary-light: #1258A7;--primary-dark: #0D3178;--light-d-light: #fff;--ldl-text: #fff;--light-d-accent: #fff;--header-bg: #f7f7f7;--secondary-color: #0D3178;--menu-link: #1258A7;--menu-highlight: #0084d1;--sumbmenu-selected: #0084D1;--profile-bg: #f3f9f9;--disabled: #7A8EB5;--accordion-header: #F5F5F5;--input-label: #1F1F1F;--input-field: #4C4C4C;--ghost: #A2A2A2;--table-label: #f1f1f1;--error-msg: #DC0404;--menu-hover: #1258A7;--var-icon-font: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;--rocket-icon: \"/assets/images/rocket-ship.svg\";--base-font-size: 16px;--font-11: 11px;--font-12: 12px;--font-13: 13px;--font-14: 14px;--font-15: 15px;--font-16: 16px;--font-17: 17px;--font-18: 18px;--font-19: 19px;--font-20: 20px;--font-21: 21px;--font-24: 24px;--font-26: 26px}:host ::ng-deep .p-fileupload{font-size:12px!important}:host ::ng-deep .p-fileupload .p-fileupload-choose{padding:5px 10px;font-size:12px!important}:host ::ng-deep .p-fileupload .p-fileupload-choose .pi-plus{font-size:12px!important}:host ::ng-deep .p-fileupload .p-fileupload-choose .pTemplate{padding:5px 10px}:host ::ng-deep .p-fileupload .p-fileupload-buttonbar{display:flex;flex-direction:row-reverse;justify-content:flex-start}:host ::ng-deep .fileUpload-category .p-dropdown{max-width:180px}:host ::ng-deep .fileUpload-category .p-dropdown .p-dropdown-empty-message{font-size:var(--base-font-size)}:host ::ng-deep .fileUpload-category .p-fileupload-buttonbar{display:flex;flex-direction:row-reverse;justify-content:flex-start}\n"], dependencies: [{ kind: "directive", type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i8.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i8.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i5.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "component", type: i9.Dropdown, selector: "p-dropdown", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }, { kind: "component", type: i10.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { kind: "component", type: i11.ConfirmDialog, selector: "p-confirmDialog", inputs: ["header", "icon", "message", "style", "styleClass", "maskStyleClass", "acceptIcon", "acceptLabel", "closeAriaLabel", "acceptAriaLabel", "acceptVisible", "rejectIcon", "rejectLabel", "rejectAriaLabel", "rejectVisible", "acceptButtonStyleClass", "rejectButtonStyleClass", "closeOnEscape", "dismissableMask", "blockScroll", "rtl", "closable", "appendTo", "key", "autoZIndex", "baseZIndex", "transitionOptions", "focusTrap", "defaultFocus", "breakpoints", "visible", "position"], outputs: ["onHide"] }, { kind: "component", type: i12.FileUpload, selector: "p-fileUpload", inputs: ["name", "url", "method", "multiple", "accept", "disabled", "auto", "withCredentials", "maxFileSize", "invalidFileSizeMessageSummary", "invalidFileSizeMessageDetail", "invalidFileTypeMessageSummary", "invalidFileTypeMessageDetail", "invalidFileLimitMessageDetail", "invalidFileLimitMessageSummary", "style", "styleClass", "previewWidth", "chooseLabel", "uploadLabel", "cancelLabel", "chooseIcon", "uploadIcon", "cancelIcon", "showUploadButton", "showCancelButton", "mode", "headers", "customUpload", "fileLimit", "uploadStyleClass", "cancelStyleClass", "removeStyleClass", "chooseStyleClass", "files"], outputs: ["onBeforeUpload", "onSend", "onUpload", "onError", "onClear", "onRemove", "onSelect", "onProgress", "uploadHandler", "onImageError"] }, { kind: "component", type: i13.GridListComponent, selector: "app-grid-list", inputs: ["dataList", "dataSource", "columns", "updateGrid", "totalCount", "page", "isShow", "exportPageName"], outputs: ["currentPage", "editTableRow", "viewTableRow", "deleteTableRow", "openExternalLink", "openpopupLink", "routeTo", "openPopup", "sortOrder", "filterSearchValue", "filterBuilderPopup", "filterPanel", "multipleFilterValues", "downloadTableRow", "toggleRow", "duplicateRow", "viewVersions", "activateVersion", "activatePage", "deactivatePage", "duplicatePageVersion", "selectedRowsData"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FileUploadWrapperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-file-upload-wrapper', providers: [ConfirmationService], template: "<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\r\n<p-fileUpload\r\n  #fileUpload\r\n  name=\"demo[]\"\r\n  [customUpload]=\"true\"\r\n  (uploadHandler)=\"onUpload($event, fileUpload)\"\r\n  [auto]=\"true\"\r\n  maxFileSize=\"1000000\"\r\n  multiple=\"multiple\"\r\n  [disabled]=\"!subCategory\">\r\n  <ng-template pTemplate=\"toolbar\">\r\n    <span class=\"d-flex fileUpload-category\">\r\n      <p-dropdown\r\n        [options]=\"categoryList\"\r\n        placeholder=\"Select Category\"\r\n        [(ngModel)]=\"category\"\r\n        optionLabel=\"lookupkey\"\r\n        optionValue=\"lookupvalue\"\r\n        (onChange)=\"getCatogoryItem()\"\r\n        styleClass=\"mr-2\">\r\n      </p-dropdown>\r\n      <p-dropdown\r\n        [options]=\"subCategoryList\"\r\n        placeholder=\"Select Subcategory\"\r\n        [(ngModel)]=\"subCategory\"\r\n        optionLabel=\"lookupkey\"\r\n        (onChange)=\"getSubCategory()\"\r\n        optionValue=\"lookupvalue\"\r\n        styleClass=\"mr-2\">\r\n      </p-dropdown>\r\n    </span>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"content\">\r\n    <p-card styleClass=\"rbac-card gridview w-100\" *ngIf=\"uploadedFiles.length\">\r\n      <app-grid-list\r\n        [dataList]=\"uploadedFiles\"\r\n        [updateGrid]=\"updateGrid\"\r\n        [columns]=\"tableColumns\"\r\n        (downloadFormResponseFiles)=\"downloadAttachment($event)\"\r\n        (deleteFormResponseFiles)=\"confirm($event)\">\r\n      </app-grid-list>\r\n    </p-card>\r\n  </ng-template>\r\n</p-fileUpload>\r\n", styles: [":root{--background-color: #f8f8f8;--navigation: #fff;--primary: #0D3178;--checkbox-border: #D6D5D5;--text-dark: #000;--label-text: #0D3178;--hover-text: #fff;--bg-light: #fff;--forms: #fff;--nav-text: #696969;--light-gray: #696969;--material-icons: #0D3178;--highlight-list: #e3f2fd;--table-header: #f9f9f9;--table-odd: #f7f7f7;--table-border: #ddd;--table-hover: #dbf6ff;--table-odd-color: #f2fcff;--btn: #0D3178;--menu-panel: #032361;--menu-level2: #28447E;--border-trans: transparent;--btn-hover: #1258A7;--btn-dark: #0D3178;--dropdown-list: #fff;--btncancel: #0D3178;--primary-light: #1258A7;--primary-dark: #0D3178;--light-d-light: #fff;--ldl-text: #fff;--light-d-accent: #fff;--header-bg: #f7f7f7;--secondary-color: #0D3178;--menu-link: #1258A7;--menu-highlight: #0084d1;--sumbmenu-selected: #0084D1;--profile-bg: #f3f9f9;--disabled: #7A8EB5;--accordion-header: #F5F5F5;--input-label: #1F1F1F;--input-field: #4C4C4C;--ghost: #A2A2A2;--table-label: #f1f1f1;--error-msg: #DC0404;--menu-hover: #1258A7;--var-icon-font: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;--rocket-icon: \"/assets/images/rocket-ship.svg\";--base-font-size: 16px;--font-11: 11px;--font-12: 12px;--font-13: 13px;--font-14: 14px;--font-15: 15px;--font-16: 16px;--font-17: 17px;--font-18: 18px;--font-19: 19px;--font-20: 20px;--font-21: 21px;--font-24: 24px;--font-26: 26px}:host ::ng-deep .p-fileupload{font-size:12px!important}:host ::ng-deep .p-fileupload .p-fileupload-choose{padding:5px 10px;font-size:12px!important}:host ::ng-deep .p-fileupload .p-fileupload-choose .pi-plus{font-size:12px!important}:host ::ng-deep .p-fileupload .p-fileupload-choose .pTemplate{padding:5px 10px}:host ::ng-deep .p-fileupload .p-fileupload-buttonbar{display:flex;flex-direction:row-reverse;justify-content:flex-start}:host ::ng-deep .fileUpload-category .p-dropdown{max-width:180px}:host ::ng-deep .fileUpload-category .p-dropdown .p-dropdown-empty-message{font-size:var(--base-font-size)}:host ::ng-deep .fileUpload-category .p-fileupload-buttonbar{display:flex;flex-direction:row-reverse;justify-content:flex-start}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.DataStoreService }, { type: i2.AlertService }, { type: i3.AuthService }, { type: i4.PageBuilderAddService }, { type: i5.ConfirmationService }, { type: i6.AttachmentsService }]; }, propDecorators: { value: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], disabled: [{
                type: Input
            }], formioEvent: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQtd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9wYWdlLWJ1aWxkZXIvc3JjL2xpYi9waWNzLXBhZ2VidWlsZGVyL3BhZ2UtYnVpbGRlci9wYWdlLWJ1aWxkZXItYWRkL2ZpbGUtdXBsb2FkLXdyYXBwZXIvZmlsZS11cGxvYWQtd3JhcHBlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9wYWdlLWJ1aWxkZXIvc3JjL2xpYi9waWNzLXBhZ2VidWlsZGVyL3BhZ2UtYnVpbGRlci9wYWdlLWJ1aWxkZXItYWRkL2ZpbGUtdXBsb2FkLXdyYXBwZXIvZmlsZS11cGxvYWQtd3JhcHBlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBdUJsRCxNQUFNLE9BQU8sMEJBQTBCO0lBMEIzQjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUE3QlYsS0FBSyxDQUFNO0lBRVgsV0FBVyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFFdEMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUVqQixXQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztJQUM5QyxhQUFhLEdBQVUsRUFBRSxDQUFDO0lBQzFCLFVBQVUsQ0FBUztJQUNuQixVQUFVLEdBQVEsRUFBRSxDQUFDO0lBQ3JCLE1BQU0sQ0FBTTtJQUNaLFVBQVUsQ0FBTTtJQUNoQixpQkFBaUIsR0FBUSxFQUFFLENBQUM7SUFDNUIsWUFBWSxDQUFRO0lBQ3BCLFVBQVUs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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1pb0N1c3RvbUNvbXBvbmVudCwgRm9ybWlvRXZlbnQgfSBmcm9tICdAZm9ybWlvL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25TZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xyXG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9zZXJ2aWNlcy9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXR0YWNobWVudHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvc2VydmljZXMvYXR0YWNobWVudHMuc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL3NlcnZpY2VzL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhZ2VCdWlsZGVyQWRkU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL3NlcnZpY2VzL3BhZ2UtYnVpbGRlci1hZGQuc2VydmljZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVVcGxvYWQge1xyXG4gIGZpbGVOYW1lOiBzdHJpbmc7XHJcbiAgY29udGVudFR5cGU6IHN0cmluZztcclxuICB0eXBlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBGaWxlVXBsb2FkSW5mbyB7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGZvcm1pZDogbnVtYmVyO1xyXG4gIGF0dGFjaG1lbnRkZXRhaWxzOiBhbnlbXTtcclxufVxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1maWxlLXVwbG9hZC13cmFwcGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZS11cGxvYWQtd3JhcHBlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZmlsZS11cGxvYWQtd3JhcHBlci5jb21wb25lbnQuc2NzcyddLFxyXG4gIHByb3ZpZGVyczogW0NvbmZpcm1hdGlvblNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWxlVXBsb2FkV3JhcHBlckNvbXBvbmVudCBpbXBsZW1lbnRzIEZvcm1pb0N1c3RvbUNvbXBvbmVudDxhbnk+LCBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgdmFsdWU6IGFueTtcclxuICBAT3V0cHV0KClcclxuICB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBJbnB1dCgpXHJcbiAgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBAT3V0cHV0KClcclxuICBmb3JtaW9FdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9ybWlvRXZlbnQ+KCk7XHJcbiAgdXBsb2FkZWRGaWxlczogYW55W10gPSBbXTtcclxuICBmb3JtU3RhdHVzOiBzdHJpbmc7XHJcbiAgc2hhcmVkSW5mbzogYW55ID0ge307XHJcbiAgcGFnZUlkOiBhbnk7XHJcbiAgcmVzcG9uc2VJZDogYW55O1xyXG4gIHVwbG9hZGVkRmlsZXNUZXN0OiBhbnkgPSBbXTtcclxuICB0YWJsZUNvbHVtbnM6IGFueVtdO1xyXG4gIHVwZGF0ZUdyaWQ6IGFueTtcclxuICBjYXRlZ29yeUxpc3Q6IGFueSA9IFtdO1xyXG4gIHN1YkNhdGVnb3J5TGlzdDogYW55ID0gW107XHJcbiAgY2F0ZWdvcnk6IHN0cmluZztcclxuICBzdWJDYXRlZ29yeTogc3RyaW5nO1xyXG4gIGxvb2t1cExpc3Q6IGFueSA9IFtdO1xyXG4gIGNhdGVnb3J5aWQ6IGFueTtcclxuICBzdWJjYXRlZ29yeWlkOiBhbnk7XHJcbiAgaHR0cFNlcnZpY2U6IGFueTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZSxcclxuICAgIHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcclxuICAgIHByaXZhdGUgcGFnZUJ1aWxkZXJBZGRTZXJ2aWNlOiBQYWdlQnVpbGRlckFkZFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNvbmZpcm1hdGlvblNlcnZpY2U6IENvbmZpcm1hdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGF0dGFjaG1lbnRzU2VydmljZTogQXR0YWNobWVudHNTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmZvcm1TdGF0dXMgPSAnRk9STV9SRVNQT05TRV9BVFRBQ0hNRU5UU18nO1xyXG4gICAgdGhpcy5zaGFyZWRJbmZvID0gdGhpcy5hdXRoU2VydmljZS5nZXRTaGFyZWRNZXNzYWdlKCk7XHJcbiAgICB0aGlzLnBhZ2VJZCA9IHRoaXMuc2hhcmVkSW5mbz8ucGFnZUlkO1xyXG4gICAgdGhpcy5yZXNwb25zZUlkID0gdGhpcy5zaGFyZWRJbmZvPy5pZDtcclxuICAgIHRoaXMuX3N0b3Jlc2VydmljZS5jdXJyZW50U3RvcmUuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgdGhpcy5odHRwU2VydmljZSA9IHJlc1snSFRUUFNFUlZJQ0UnXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2V0VGFibGVDb2x1bW5zKCk7XHJcbiAgICB0aGlzLmdldENhdGVnb3J5KCk7XHJcbiAgICBpZiAodGhpcy5yZXNwb25zZUlkKSB7XHJcbiAgICAgIHRoaXMuZm9ybVN0YXR1cyA9IGAke3RoaXMuZm9ybVN0YXR1c31VUERBVEVgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5mb3JtU3RhdHVzID0gYCR7dGhpcy5mb3JtU3RhdHVzfUNSRUFURWA7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwbG9hZGVkRmlsZXMgPSBbXTtcclxuICAgIGlmICh0aGlzLnJlc3BvbnNlSWQpIHtcclxuICAgICAgdGhpcy5nZXRBbGxBdHRhY2htZW50cygpO1xyXG4gICAgfVxyXG4gIH1cclxuICBvblVwbG9hZChldmVudCwgdXBsb2FkKSB7XHJcbiAgICBsZXQgcmVzSUQgPSAnJztcclxuICAgIGlmICh0aGlzLnJlc3BvbnNlSWQpIHtcclxuICAgICAgcmVzSUQgPSBgLyR7dGhpcy5yZXNwb25zZUlkfWA7XHJcbiAgICB9XHJcbiAgICBsZXQgZGF0YTogRmlsZVVwbG9hZDtcclxuICAgIGV2ZW50LmZpbGVzLm1hcChmID0+IHtcclxuICAgICAgZGF0YSA9IHtcclxuICAgICAgICBmaWxlTmFtZTogYCR7dGhpcy5wYWdlSWR9JHtyZXNJRH0vJHtmLm5hbWV9YCxcclxuICAgICAgICBjb250ZW50VHlwZTogZi50eXBlLFxyXG4gICAgICAgIHR5cGU6IHRoaXMuZm9ybVN0YXR1c1xyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnBhZ2VCdWlsZGVyQWRkU2VydmljZS5nZXRVcGxvYWRLZXkoZGF0YSkuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHJlcy5kYXRhO1xyXG4gICAgICAgIGNvbnN0IHVwbG9hZERldGFpbHMgPSBmO1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBmLnR5cGU7XHJcbiAgICAgICAgY29uc3QgZmlsZVVSTCA9IHJlcy5kYXRhLnNwbGl0KCc/JylbMF07XHJcbiAgICAgICAgdGhpcy51cGxvYWRlZEZpbGVzLnB1c2goe1xyXG4gICAgICAgICAgbmFtZTogZi5uYW1lLFxyXG4gICAgICAgICAgcGF0aDogZmlsZVVSTCxcclxuICAgICAgICAgIGF0dGFjaG1lbnR0eXBlOiBmLnR5cGUsXHJcbiAgICAgICAgICBjYXRlZ29yeTogdGhpcy5jYXRlZ29yeWlkWzBdLmlkLFxyXG4gICAgICAgICAgc3ViY2F0ZWdvcnk6IHRoaXMuc3ViY2F0ZWdvcnlpZFswXS5pZCxcclxuICAgICAgICAgIGNhdGVnb3J5TmFtZTogdGhpcy5jYXRlZ29yeSxcclxuICAgICAgICAgIHN1YmNhdGVnb3J5TmFtZTogdGhpcy5zdWJDYXRlZ29yeVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGZpbGVJbmZvOiBGaWxlVXBsb2FkSW5mbyA9IHtcclxuICAgICAgICAgIHR5cGU6IHRoaXMuZm9ybVN0YXR1cyxcclxuICAgICAgICAgIGZvcm1pZDogTnVtYmVyKHRoaXMucGFnZUlkKSxcclxuICAgICAgICAgIGF0dGFjaG1lbnRkZXRhaWxzOiB0aGlzLnVwbG9hZGVkRmlsZXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UucHV0VXBsb2FkKHVybCwgdXBsb2FkRGV0YWlscywgdHlwZSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN1Y2Nlc3MoJ1VwbG9hZGVkIFN1Y2Nlc3NmdWxseSEnKTtcclxuICAgICAgICAgIHRoaXMudmFsdWUgPSBmaWxlSW5mbztcclxuICAgICAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdChmaWxlSW5mbyk7XHJcbiAgICAgICAgICB0aGlzLmZvcm1pb0V2ZW50LmVtaXQoeyBldmVudE5hbWU6ICdjdXN0b21FdmVudCcsIGRhdGE6IHsgdmFsdWU6IHsgZmlsZUluZm8gfSwgdHlwZTogJ2ZpbGVVcGxvYWQnIH0gfSk7XHJcbiAgICAgICAgICB0aGlzLnNldFRhYmxlQ29sdW1ucygpO1xyXG4gICAgICAgICAgdXBsb2FkLmNsZWFyKCk7XHJcbiAgICAgICAgICB0aGlzLnN1YkNhdGVnb3J5ID0gJyc7XHJcbiAgICAgICAgICB0aGlzLmNhdGVnb3J5ID0gJyc7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zZXRTaGFyZWRNZXNzYWdlKGZpbGVJbmZvKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZ2V0QWxsQXR0YWNobWVudHMoKSB7XHJcbiAgICB0aGlzLnBhZ2VCdWlsZGVyQWRkU2VydmljZS5nZXRGb3JtUmVzcG9uc2VBdHRhY2htZW50KHRoaXMucGFnZUlkLCB0aGlzLnJlc3BvbnNlSWQpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gcmVzWydkYXRhJ107XHJcbiAgICAgIGNvbnN0IGZpbGVJbmZvOiBGaWxlVXBsb2FkSW5mbyA9IHtcclxuICAgICAgICB0eXBlOiB0aGlzLmZvcm1TdGF0dXMsXHJcbiAgICAgICAgZm9ybWlkOiBOdW1iZXIodGhpcy5wYWdlSWQpLFxyXG4gICAgICAgIGF0dGFjaG1lbnRkZXRhaWxzOiBkYXRhXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2V0U2hhcmVkTWVzc2FnZShmaWxlSW5mbyk7XHJcbiAgICAgIHRoaXMudXBsb2FkZWRGaWxlcyA9IGRhdGEubWFwKGYgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpZDogZi5pZCxcclxuICAgICAgICAgIG5hbWU6IGYubmFtZSxcclxuICAgICAgICAgIHBhdGg6IGYucGF0aCxcclxuICAgICAgICAgIGNhdGVnb3J5TmFtZTogZi5jYXRlZ29yeURldGFpbHMua2V5LFxyXG4gICAgICAgICAgc3ViY2F0ZWdvcnlOYW1lOiBmLnN1YmNhdGVnb3J5RGV0YWlscy5rZXksXHJcbiAgICAgICAgICBhdHRhY2htZW50dHlwZTogZi5hdHRhY2htZW50dHlwZSxcclxuICAgICAgICAgIGNhdGVnb3J5OiBmLmNhdGVnb3J5LFxyXG4gICAgICAgICAgc3ViY2F0ZWdvcnk6IGYuc3ViY2F0ZWdvcnlcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBkZWxldGVBdHRhY2htZW50KGUpIHtcclxuICAgIGNvbnN0IGZpbGUgPSBlPy5kYXRhO1xyXG4gICAgaWYgKGZpbGU/LmlkKSB7XHJcbiAgICAgIHRoaXMucGFnZUJ1aWxkZXJBZGRTZXJ2aWNlLmRlbGV0ZUZvcm1SZXNwb25zZUF0dGFjaG1lbnQoZmlsZS5pZCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdWNjZXNzKCdEZWxldGVkIHN1Y2Nlc3NmdWxseSEnKTtcclxuICAgICAgICB0aGlzLmdldEFsbEF0dGFjaG1lbnRzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy51cGxvYWRlZEZpbGVzLmZvckVhY2goKGYsIGkpID0+IHtcclxuICAgICAgICBpZiAoZi5wYXRoID09PSBmaWxlLnBhdGgpIHtcclxuICAgICAgICAgIHRoaXMudXBsb2FkZWRGaWxlcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICB0aGlzLnNldFRhYmxlQ29sdW1ucygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGRvd25sb2FkQXR0YWNobWVudChldmVudCkge1xyXG4gICAgY29uc3QgcGF0aCA9IGV2ZW50LmRhdGEucGF0aC5zcGxpdCgnLycpO1xyXG4gICAgY29uc3QgcGF0aDEgPSBwYXRoLnBvcCgpO1xyXG4gICAgY29uc3QgcGF0aDIgPSBwYXRoLnBvcCgpO1xyXG4gICAgY29uc3QgcGF0aDMgPSBwYXRoLnBvcCgpO1xyXG4gICAgY29uc3QgcGF0aDQgPSBwYXRoLnBvcCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZmlsZU5hbWU6IGAke3BhdGg0fS8ke3BhdGgzfS8ke3BhdGgyfS8ke3BhdGgxfWBcclxuICAgIH07XHJcbiAgICB0aGlzLnBhZ2VCdWlsZGVyQWRkU2VydmljZS5kb3dubG9hZEZvcm1SZXNwb25zZUF0dGFjaG1lbnQoZGF0YSkuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzICYmIHJlcy5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4ocmVzLmRhdGEsICdfYmxhbmsnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbmZpcm0oZXZlbnQpIHtcclxuICAgIHRoaXMuY29uZmlybWF0aW9uU2VydmljZS5jb25maXJtKHtcclxuICAgICAgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB0aGF0IHlvdSB3YW50IHRvIHBlcmZvcm0gdGhpcyBhY3Rpb24/JyxcclxuICAgICAgYWNjZXB0OiAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kZWxldGVBdHRhY2htZW50KGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHNldFRhYmxlQ29sdW1ucygpIHtcclxuICAgIHRoaXMudGFibGVDb2x1bW5zID0gW1xyXG4gICAgICAvLyB7XHJcbiAgICAgIC8vICAgY29sdW1uRGVmOiAnaWQnLFxyXG4gICAgICAvLyAgIGhlYWRlcjogJ0lkJyxcclxuICAgICAgLy8gICBjZWxsOiAoZWxlbWVudDogYW55KSA9PiBgJHtlbGVtZW50LmlkfWAsXHJcbiAgICAgIC8vICAgZGF0ZUZvcm1hdDogZmFsc2UsXHJcbiAgICAgIC8vICAgaWNvbjogZmFsc2UsXHJcbiAgICAgIC8vICAgZmlsdGVyOiBmYWxzZSxcclxuICAgICAgLy8gICBsaW5rOiBmYWxzZVxyXG4gICAgICAvLyB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29sdW1uRGVmOiAnbmFtZScsXHJcbiAgICAgICAgaGVhZGVyOiAnRmlsZSBOYW1lJyxcclxuICAgICAgICBjZWxsOiAoZWxlbWVudDogYW55KSA9PiBjb25zb2xlLmxvZyhlbGVtZW50LCAnZWxlbWVudHNzc3MnKSxcclxuICAgICAgICBkYXRlRm9ybWF0OiBmYWxzZSxcclxuICAgICAgICBpY29uOiBmYWxzZSxcclxuICAgICAgICBmaWx0ZXI6IGZhbHNlLFxyXG4gICAgICAgIGxpbms6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb2x1bW5EZWY6ICdjYXRlZ29yeU5hbWUnLFxyXG4gICAgICAgIGhlYWRlcjogJ0NhdGVnb3J5JyxcclxuICAgICAgICBkYXRlRm9ybWF0OiBmYWxzZSxcclxuICAgICAgICBpY29uOiBmYWxzZSxcclxuICAgICAgICBmaWx0ZXI6IGZhbHNlLFxyXG4gICAgICAgIGxpbms6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb2x1bW5EZWY6ICdzdWJjYXRlZ29yeU5hbWUnLFxyXG4gICAgICAgIGhlYWRlcjogJ1N1YiBDYXRlZ29yeScsXHJcbiAgICAgICAgZGF0ZUZvcm1hdDogZmFsc2UsXHJcbiAgICAgICAgaWNvbjogZmFsc2UsXHJcbiAgICAgICAgZmlsdGVyOiBmYWxzZSxcclxuICAgICAgICBsaW5rOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29sdW1uRGVmOiAnYXR0YWNobWVudHR5cGUnLFxyXG4gICAgICAgIGhlYWRlcjogJ1R5cGUnLFxyXG4gICAgICAgIGNlbGw6IChlbGVtZW50OiBhbnkpID0+IGAke2VsZW1lbnQudHlwZX1gLFxyXG4gICAgICAgIGRhdGVGb3JtYXQ6IGZhbHNlLFxyXG4gICAgICAgIGljb246IGZhbHNlLFxyXG4gICAgICAgIGZpbHRlcjogZmFsc2UsXHJcbiAgICAgICAgbGluazogZmFsc2VcclxuICAgICAgfVxyXG4gICAgXTtcclxuICAgIHRoaXMudXBkYXRlR3JpZCA9IHtcclxuICAgICAgZWRpdDogZmFsc2UsXHJcbiAgICAgIHZpZXc6IGZhbHNlLFxyXG4gICAgICBsb2NrOiBmYWxzZSxcclxuICAgICAgZHVwbGljYXRlOiBmYWxzZSxcclxuICAgICAgZGVsZXRlOiBmYWxzZSxcclxuICAgICAgZXh0ZXJuYWxMaW5rOiBmYWxzZSxcclxuICAgICAgc2hvd0Rvd25sb2FkOiB0cnVlLFxyXG4gICAgICBzaG93RGVsZXRlOiB0cnVlLFxyXG4gICAgICBpc05ld2x5VXBsb2FkZWQ6IHRoaXMucmVzcG9uc2VJZCA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgfTtcclxuICB9XHJcbiAgZ2V0Q2F0ZWdvcnkoKSB7XHJcbiAgICBjb25zdCBjYXRlZ29yeW5hbWUgPSAnRE9DVU1FTlRfTElTVCc7XHJcbiAgICB0aGlzLmF0dGFjaG1lbnRzU2VydmljZS5nZXRDYXRlZ29yeUxvb2t1cChjYXRlZ29yeW5hbWUpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5sb29rdXBMaXN0ID0gcmVzLmRhdGE7XHJcbiAgICAgIHRoaXMubG9va3VwTGlzdC5tYXAoeiA9PiB7XHJcbiAgICAgICAgaWYgKCF6LnBhcmVudGlkKSB7XHJcbiAgICAgICAgICB0aGlzLmNhdGVnb3J5TGlzdC5wdXNoKHopO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZ2V0U3ViQ2F0ZWdvcnkoKSB7XHJcbiAgICB0aGlzLnN1YmNhdGVnb3J5aWQgPSB0aGlzLnN1YkNhdGVnb3J5TGlzdC5maWx0ZXIoZSA9PiBlLmxvb2t1cHZhbHVlID09PSB0aGlzLnN1YkNhdGVnb3J5KTtcclxuICB9XHJcbiAgZ2V0Q2F0b2dvcnlJdGVtKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMubG9va3VwTGlzdC5maWx0ZXIoeCA9PiB4Lmxvb2t1cHZhbHVlID09PSB0aGlzLmNhdGVnb3J5KTtcclxuICAgIHRoaXMuY2F0ZWdvcnlpZCA9IGRhdGE7XHJcbiAgICB0aGlzLnN1YkNhdGVnb3J5TGlzdCA9IHRoaXMubG9va3VwTGlzdC5maWx0ZXIoeSA9PiB5LnBhcmVudGlkID09PSBkYXRhWzBdLmlkKTtcclxuICB9XHJcbn1cclxuIiwiPHAtY29uZmlybURpYWxvZyBoZWFkZXI9XCJDb25maXJtYXRpb25cIiBpY29uPVwicGkgcGktZXhjbGFtYXRpb24tdHJpYW5nbGVcIj48L3AtY29uZmlybURpYWxvZz5cclxuPHAtZmlsZVVwbG9hZFxyXG4gICNmaWxlVXBsb2FkXHJcbiAgbmFtZT1cImRlbW9bXVwiXHJcbiAgW2N1c3RvbVVwbG9hZF09XCJ0cnVlXCJcclxuICAodXBsb2FkSGFuZGxlcik9XCJvblVwbG9hZCgkZXZlbnQsIGZpbGVVcGxvYWQpXCJcclxuICBbYXV0b109XCJ0cnVlXCJcclxuICBtYXhGaWxlU2l6ZT1cIjEwMDAwMDBcIlxyXG4gIG11bHRpcGxlPVwibXVsdGlwbGVcIlxyXG4gIFtkaXNhYmxlZF09XCIhc3ViQ2F0ZWdvcnlcIj5cclxuICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwidG9vbGJhclwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJkLWZsZXggZmlsZVVwbG9hZC1jYXRlZ29yeVwiPlxyXG4gICAgICA8cC1kcm9wZG93blxyXG4gICAgICAgIFtvcHRpb25zXT1cImNhdGVnb3J5TGlzdFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgQ2F0ZWdvcnlcIlxyXG4gICAgICAgIFsobmdNb2RlbCldPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgIG9wdGlvbkxhYmVsPVwibG9va3Vwa2V5XCJcclxuICAgICAgICBvcHRpb25WYWx1ZT1cImxvb2t1cHZhbHVlXCJcclxuICAgICAgICAob25DaGFuZ2UpPVwiZ2V0Q2F0b2dvcnlJdGVtKClcIlxyXG4gICAgICAgIHN0eWxlQ2xhc3M9XCJtci0yXCI+XHJcbiAgICAgIDwvcC1kcm9wZG93bj5cclxuICAgICAgPHAtZHJvcGRvd25cclxuICAgICAgICBbb3B0aW9uc109XCJzdWJDYXRlZ29yeUxpc3RcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFN1YmNhdGVnb3J5XCJcclxuICAgICAgICBbKG5nTW9kZWwpXT1cInN1YkNhdGVnb3J5XCJcclxuICAgICAgICBvcHRpb25MYWJlbD1cImxvb2t1cGtleVwiXHJcbiAgICAgICAgKG9uQ2hhbmdlKT1cImdldFN1YkNhdGVnb3J5KClcIlxyXG4gICAgICAgIG9wdGlvblZhbHVlPVwibG9va3VwdmFsdWVcIlxyXG4gICAgICAgIHN0eWxlQ2xhc3M9XCJtci0yXCI+XHJcbiAgICAgIDwvcC1kcm9wZG93bj5cclxuICAgIDwvc3Bhbj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG4gIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJjb250ZW50XCI+XHJcbiAgICA8cC1jYXJkIHN0eWxlQ2xhc3M9XCJyYmFjLWNhcmQgZ3JpZHZpZXcgdy0xMDBcIiAqbmdJZj1cInVwbG9hZGVkRmlsZXMubGVuZ3RoXCI+XHJcbiAgICAgIDxhcHAtZ3JpZC1saXN0XHJcbiAgICAgICAgW2RhdGFMaXN0XT1cInVwbG9hZGVkRmlsZXNcIlxyXG4gICAgICAgIFt1cGRhdGVHcmlkXT1cInVwZGF0ZUdyaWRcIlxyXG4gICAgICAgIFtjb2x1bW5zXT1cInRhYmxlQ29sdW1uc1wiXHJcbiAgICAgICAgKGRvd25sb2FkRm9ybVJlc3BvbnNlRmlsZXMpPVwiZG93bmxvYWRBdHRhY2htZW50KCRldmVudClcIlxyXG4gICAgICAgIChkZWxldGVGb3JtUmVzcG9uc2VGaWxlcyk9XCJjb25maXJtKCRldmVudClcIj5cclxuICAgICAgPC9hcHAtZ3JpZC1saXN0PlxyXG4gICAgPC9wLWNhcmQ+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuPC9wLWZpbGVVcGxvYWQ+XHJcbiJdfQ==