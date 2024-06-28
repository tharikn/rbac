import { Component, ViewEncapsulation } from '@angular/core';
import { Validators } from '@angular/forms';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { AppConstants } from '../../../@core/constants/app-constants';
import { CommonDropdownsService } from '../../../@core/services/common-dropdowns.service';
import { PageBuilderAddService } from '../../../@core/services/page-builder-add.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../../@core/services/alert.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@angular/material/radio";
import * as i8 from "@angular/material/select";
import * as i9 from "@angular/material/core";
import * as i10 from "../query-params/query-params.component";
export class SearchParamsComponent {
    formBuilder;
    cdRef;
    alert;
    route;
    router;
    searchParamsForm;
    searchParams;
    fieldMapping = [];
    formData;
    tableSchemaConfig;
    dynamicData;
    layout;
    id = '';
    baseQueryColumns;
    assetList;
    databaseType;
    columnText;
    jsonMode = [];
    dropdownService;
    service;
    gridFieldList;
    constructor(injector, formBuilder, cdRef, alert, route, router) {
        this.formBuilder = formBuilder;
        this.cdRef = cdRef;
        this.alert = alert;
        this.route = route;
        this.router = router;
        this.service = injector.get(PageBuilderAddService);
        this.dropdownService = injector.get(CommonDropdownsService);
    }
    ngOnInit() {
        this.dgpjsonMode();
        this.id = this.route.snapshot.paramMap.get('id');
        this.loadForm();
        this.loadDropDown();
        this.service.currentFormData.subscribe((data) => {
            this.formData = data;
            this.searchParams =
                this.formData.searchparams && typeof this.formData.searchparams === 'string'
                    ? JSON.parse(this.formData.searchparams)
                    : this.formData.searchparams;
            this.layout = this.formData && this.formData.layouttype ? this.formData.layouttype : null;
            if (this.formData.tableschemaconfig) {
                this.tableSchemaConfig =
                    typeof this.formData.tableschemaconfig === 'string'
                        ? JSON.parse(this.formData.tableschemaconfig)
                        : this.formData.tableschemaconfig;
                if (this.tableSchemaConfig && Object.keys(this.tableSchemaConfig).length) {
                    this.fieldMapping = this.tableSchemaConfig.fieldmapping;
                }
            }
            if (this.tableSchemaConfig) {
                this.patchQueryParams();
            }
        });
        this.service.currentBasicData.subscribe((data) => {
            if (data) {
                if (this.formData) {
                    this.formData.pagename = data.pagename;
                    this.formData.pagetype = data.pagetype;
                    this.formData.description = data.description;
                }
            }
        });
    }
    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }
    loadForm() {
        this.searchParamsForm = this.formBuilder.group({
            databasetypekey: [null],
            baseQuery: [''],
            baseQueryColumns: [null],
            jsontag: [null],
            mode: [null]
        });
    }
    loadDropDown() {
        this.dropdownService.getDropDownValues('Database').subscribe(result => {
            this.databaseType = result['data'];
        });
    }
    patchQueryParams() {
        this.searchParamsForm.patchValue({
            mode: this.tableSchemaConfig?.mode ? this.tableSchemaConfig?.mode : null,
            jsontag: this.tableSchemaConfig?.jsontag ? this.tableSchemaConfig?.jsontag : null,
            databasetypekey: this.tableSchemaConfig?.databasetypekey ? this.tableSchemaConfig?.databasetypekey : '',
            baseQuery: this.tableSchemaConfig.baseQuery ? this.tableSchemaConfig.baseQuery : ''
        });
    }
    formDataHandler(data) {
        this.dynamicData = data;
    }
    changeBaseQueryType() {
        this.searchParamsForm.get('baseQuery')?.setValue('');
        this.searchParamsForm.get('baseQuery')?.clearValidators();
        this.searchParamsForm.get('baseQuery')?.updateValueAndValidity();
    }
    parseSql(sql) {
        sql = sql.toLowerCase();
        const found = [];
        ['SELECT', ' WHERE ', ' FROM ', ' AND ', ' OR ', ';'].forEach(function (word) {
            word = word.toLowerCase();
            let idx = sql.indexOf(word.toLowerCase());
            while (idx !== -1) {
                found.push({ word: word, index: idx });
                idx = sql.indexOf(word, idx + 1);
            }
        });
        found.sort(function (x, y) {
            return x.index - y.index;
        });
        found.forEach(function (x, i, xs) {
            if (i < xs.length - 1) {
                x.text = sql
                    .substring(x.index, xs[i + 1].index)
                    .replace(xs[i].word, '')
                    .trim();
            }
        });
        return found;
    }
    saveSearchParams() {
        const formDetails = this.formData;
        const searchDetails = this.searchParamsForm.getRawValue();
        if (this.formData.pagetype === 'BUSP') {
            searchDetails.baseQuery = this.dynamicData ? JSON.stringify(this.dynamicData) : null;
            this.gridFieldList = this.dynamicData && this.dynamicData.fieldmapping ? this.dynamicData.fieldmapping : [];
            this.setPageJsonData(searchDetails, formDetails);
        }
        else {
            if (searchDetails.baseQuery) {
                let baseQuery = searchDetails.baseQuery;
                baseQuery = baseQuery.replace(/\n/g, ' '); // query - make single line if multiple lines
                baseQuery = baseQuery.replace('select', 'SELECT').replace('from', 'FROM').replace('join', 'JOIN');
                const sqlData = this.parseSql(baseQuery);
                this.checkSqlData(sqlData, baseQuery, searchDetails, formDetails);
            }
        }
    }
    checkSqlData(sqlData, baseQuery, searchDetails, formDetails) {
        if (sqlData && sqlData.length) {
            this.columnText = sqlData[0].text ? sqlData[0].text : '';
            if (this.columnText) {
                if (this.columnText === '*') {
                    this.checkColumnText(baseQuery, searchDetails, formDetails);
                }
                else {
                    this.columnListCheck(baseQuery, searchDetails, formDetails);
                }
            }
            else {
                this.alert.error('Please enter valid select query');
            }
        }
        else {
            this.alert.error('Please enter valid select query');
        }
    }
    checkColumnText(baseQuery, searchDetails, formDetails) {
        // Start - check schema exist in query
        const tableList = baseQuery.match(/(FROM|JOIN)\s+(\w+.\w+)/g).map(e => e.split(' ')[1]);
        if (tableList.length) {
            const checkSchema = tableList.filter(item => !item.includes('.'));
            if (checkSchema.length) {
                this.alert.error('Please enter query with schema');
                return;
            }
            // checkSchema
            this.getTableFields(tableList, searchDetails, formDetails);
            // End - check schema exist in query
        }
    }
    columnListCheck(baseQuery, searchDetails, formDetails) {
        // Start - check schema exist in query
        const tableList = baseQuery.match(/(FROM|JOIN)\s+(\w+.\w+)/g).map(e => e.split(' ')[1]);
        if (tableList.length) {
            const checkSchema = tableList.filter(item => !item.includes('.'));
            if (checkSchema.length) {
                this.alert.error('Please enter query with schema');
                return;
            }
        }
        // End - check schema exist in query
        const regex = AppConstants.checSchemaExistQuery; // column name with underscore issue fix
        this.columnText = baseQuery.match(regex);
        this.baseQueryColumns = this.columnText.map(data => {
            data = data.replaceAll('"', '');
            data = data.replaceAll('~', '');
            return {
                header: data.charAt(0).toUpperCase() + data.substring(1),
                columnDef: data.trim().toLowerCase()
            };
        });
        this.setPageJsonData(searchDetails, formDetails);
    }
    setPageJsonData(searchDetails, formDetails) {
        this.formDataPageType(searchDetails);
        // Start - Set grid config data
        const gridConfig = formDetails.gridconfig && typeof formDetails.gridconfig === 'string'
            ? JSON.parse(formDetails.gridconfig)
            : formDetails.gridconfig;
        let gridConfigFormArray = [];
        if (gridConfig) {
            gridConfigFormArray =
                Object.keys(gridConfig).length && gridConfig.gridConfigFormArray && gridConfig.gridConfigFormArray.length
                    ? gridConfig.gridConfigFormArray
                    : [];
        }
        const tempData = [];
        let gridConfigList;
        if (this.gridFieldList && this.gridFieldList.length) {
            for (const gridField of this.gridFieldList) {
                this.gridFieldListCondition(gridField, gridConfigFormArray, tempData);
            }
            this.templateDataCheck(tempData, gridConfig, gridConfigList);
        }
        else {
            gridConfigList = '';
        }
        // End - Set grid config data
        if (this.formData.pagetype === 'DSP' || this.formData.pagetype === 'DGP') {
            formDetails.tableschemaconfig = searchDetails;
        }
        formDetails.layouttype = this.layout;
        formDetails.gridconfig = gridConfigList;
        this.service.setFormData(formDetails);
        formDetails.tableschemaconfig = JSON.stringify(searchDetails);
        this.formDataIdcheck(formDetails, gridConfigList);
        this.checkCreatePage(formDetails, searchDetails);
    }
    formDataPageType(searchDetails) {
        if (this.formData.pagetype === 'DSP' || this.formData.pagetype === 'DGP') {
            this.gridFieldList = this.baseQueryColumns ? this.baseQueryColumns : [];
            searchDetails.baseQueryColumns = this.baseQueryColumns;
        }
    }
    gridFieldListCondition(gridField, gridConfigFormArray, tempData) {
        let item;
        gridField.columnDef = gridField.columnDef ? gridField.columnDef : gridField.field;
        gridField.header = gridField.header ? gridField.header : gridField.label;
        if (gridConfigFormArray.length) {
            item = gridConfigFormArray.find((b) => b.columnDef === (gridField.columnDef || gridField.field));
        }
        if (!item) {
            item = {
                columnDef: gridField.columnDef,
                dateFormat: '',
                datetext: '',
                filter: '',
                header: gridField.header,
                icon: '',
                icontext: '',
                link: '',
                sort: ''
            };
        }
        tempData.push(item);
    }
    templateDataCheck(tempData, gridConfig, gridConfigList) {
        if (tempData.length) {
            let defaultSortColumn;
            if (gridConfig) {
                defaultSortColumn = tempData.find(item => item.columnDef === gridConfig.defaultSortColumn);
            }
            gridConfigList = { ...gridConfig };
            gridConfigList.defaultSortColumn = defaultSortColumn ? gridConfig.defaultSortColumn : '';
            gridConfigList.defaultSortType = defaultSortColumn ? gridConfig.defaultSortType : '';
            gridConfigList.gridConfigFormArray = tempData;
        }
    }
    formDataIdcheck(formDetails, gridConfigList) {
        formDetails.gridconfig =
            gridConfigList && Object.keys(gridConfigList).length ? JSON.stringify(gridConfigList) : null;
        if (this.id) {
            formDetails.id = this.id;
        }
    }
    checkCreatePage(formDetails, searchDetails) {
        this.service.createPage(formDetails).subscribe(result => {
            if (!this.id) {
                const data = result['data'];
                this.resultCheckKey(result, data);
            }
            if (this.formData.pagetype === 'REPORT' && result) {
                this.saveReportTable(result['data']);
            }
            this.alert.success('Page saved successfully');
        });
        if (this.formData.pagetype === 'DGP' || this.formData.pagetype === 'DSP') {
            this.saveAsset(searchDetails.baseQueryColumns);
        }
    }
    resultCheckKey(result, data) {
        if (result && Object.keys(data).length) {
            const id = data?.id ? data?.id : '';
            if (id) {
                this.router.navigate(['../edit', id], { relativeTo: this.route });
            }
        }
    }
    saveAsset(columns) {
        const tableCoulmn = columns;
        const fieldArr = [];
        this.conditionCheckSaveAssests(fieldArr);
        const assetNameArr = this.assetList && this.assetList.length ? this.assetList.map(item => item.assetname) : [];
        const activeArr = [];
        const inactiveArr = [];
        this.conditionCheckSave(fieldArr, activeArr, inactiveArr);
        this.newAssetArrCheck(fieldArr, assetNameArr, tableCoulmn, activeArr);
        const assetData = [...activeArr, ...inactiveArr];
        this.service.getMenuList(assetData, this.formData.id).subscribe(() => {
            //This is intentional
        });
    }
    newAssetArrCheck(fieldArr, assetNameArr, tableCoulmn, activeArr) {
        let newAssetArr = fieldArr;
        if (assetNameArr && assetNameArr.length && fieldArr && fieldArr.length) {
            newAssetArr = fieldArr.filter(x => !assetNameArr.includes(x));
        }
        if (newAssetArr && newAssetArr.length) {
            newAssetArr.forEach(item => {
                const getFieldData = tableCoulmn.find(value => value.columnDef === item);
                const data = {
                    assetname: item,
                    assetpath: this.formData.pagename + '.' + item,
                    assettype: '45F',
                    dashboardtemplatejson: null,
                    description: getFieldData && getFieldData.header ? getFieldData.header : null,
                    displayname: getFieldData && getFieldData.header ? getFieldData.header : null,
                    icon: null,
                    id: null,
                    pageid: this.formData.id,
                    parentassetid: null,
                    url: null,
                    isactive: this.formData.activeVersion?.isactive,
                    versionid: this.formData.activeVersion?.id
                };
                activeArr.push(data);
            });
        }
    }
    conditionCheckSaveAssests(_fieldArr) {
        if (this.fieldMapping && this.fieldMapping.length) {
            if (this.formData.pagetype === 'DSP') {
                _fieldArr = this.fieldMapping.map((item) => 'grid_' + item.columnDef);
            }
            else {
                _fieldArr = this.fieldMapping.map((item) => item.columnDef);
            }
        }
    }
    conditionCheckSave(fieldArr, activeArr, inactiveArr) {
        if (this.assetList && this.assetList.length) {
            this.assetList.forEach(item => {
                if (fieldArr.includes(item.assetname)) {
                    activeArr.push(item);
                }
                else {
                    item.isactive = false;
                    inactiveArr.push(item);
                }
            });
        }
    }
    getTableFields(tableList, searchDetails, formDetails) {
        const tableSchemaList = tableList.map(item => item.split('.'));
        let fieldsArray = [];
        const requestArray = [];
        tableSchemaList.forEach((data, i) => {
            requestArray[i] = this.service.getTableFields(data[1], data[0]);
        });
        forkJoin(requestArray).subscribe(results => {
            if (results && results.length) {
                results.forEach(item => {
                    const fieldData = JSON.parse(JSON.stringify(item)).map(value => ({ columnDef: value[0], header: value[1] }));
                    fieldsArray = fieldsArray.concat(...fieldData);
                });
                this.baseQueryColumns = fieldsArray;
            }
            this.setPageJsonData(searchDetails, formDetails);
        });
    }
    saveReportTable(result) {
        this.service
            .createReportTable({
            sourcetypekey: 'page',
            sourceidorurl: result?.id,
            reportname: result?.pagename,
            organizationid: result?.organizationid
        })
            .subscribe(() => {
            // This is intentional
        });
    }
    dgpjsonMode() {
        this.dropdownService.getDropDownValues('DGPJsonMode').subscribe(result => {
            this.jsonMode = result['data'];
        });
    }
    modeChanges(jsonModeRefKey) {
        if (jsonModeRefKey === '143CN') {
            //143CN: Concatenate | 143MG: Merge
            this.searchParamsForm.get('jsontag')?.setValidators([Validators.pattern('^[.a-zA-Z0-9;!?]*$')]);
        }
        else {
            this.searchParamsForm.get('jsontag')?.clearValidators();
        }
        this.searchParamsForm.get('jsontag')?.updateValueAndValidity();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SearchParamsComponent, deps: [{ token: i0.Injector }, { token: i1.UntypedFormBuilder }, { token: i0.ChangeDetectorRef }, { token: i2.AlertService }, { token: i3.ActivatedRoute }, { token: i3.Router }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: SearchParamsComponent, selector: "app-search-params", ngImport: i0, template: "<div *ngIf=\"formData.pagetype !== 'BGP'\">\r\n  <form [formGroup]=\"searchParamsForm\">\r\n    <div class=\"row mt-2\">\r\n      <div *ngIf=\"formData.pagetype === 'DGP' || formData.pagetype === 'REPORT'\" class=\"col-12 mt-3 mb-4\">\r\n        <mat-radio-group\r\n          formControlName=\"databasetypekey\"\r\n          aria-label=\"Database Type\"\r\n          [required]=\"formData.pagetype === 'DGP'\">\r\n          <mat-radio-button *ngFor=\"let item of databaseType\" value=\"{{ item.refkey }}\">\r\n            {{ item.description }}&nbsp;&nbsp;&nbsp;&nbsp;</mat-radio-button\r\n          >\r\n        </mat-radio-group>\r\n      </div>\r\n      <div class=\"col-6 mt-3 mb-4\" *ngIf=\"formData.pagetype === 'DGP'\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"JSON Mode\" formControlName=\"mode\" (selectionChange)=\"modeChanges($event.value)\">\r\n            <mat-option value=\"\">Select</mat-option>\r\n            <mat-option *ngFor=\"let jmode of jsonMode\" [value]=\"jmode.refkey\">\r\n              {{ jmode.displayvalue }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-6 mt-3 mb-4\" *ngIf=\"formData.pagetype === 'DGP'\">\r\n        <mat-form-field>\r\n          <mat-label>Json Tag</mat-label>\r\n          <input\r\n            type=\"text\"\r\n            matInput\r\n            formControlName=\"jsontag\"\r\n            [required]=\"searchParamsForm.value.mode && searchParamsForm.value.mode !== ''\" />\r\n          <mat-error\r\n            *ngIf=\"\r\n              searchParamsForm.get('mode')?.value &&\r\n              searchParamsForm.value.mode !== '' &&\r\n              !searchParamsForm.get('jsontag')?.value\r\n            \">\r\n            Json Tag is required</mat-error\r\n          >\r\n          <mat-error *ngIf=\"searchParamsForm.get('jsontag')?.value\"> Json Tag is invalid</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-12\">\r\n        <mat-form-field\r\n          class=\"out\"\r\n          *ngIf=\"formData.pagetype === 'DSP' || formData.pagetype === 'DGP' || formData.pagetype === 'REPORT'\">\r\n          <textarea\r\n            class=\"query-textarea\"\r\n            matInput\r\n            placeholder=\"Query\"\r\n            formControlName=\"baseQuery\"\r\n            [required]=\"formData.pagetype === 'DSP' || formData.pagetype === 'DGP'\"></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n      <ng-container *ngIf=\"formData.pagetype === 'BUSP'\">\r\n        <app-query-params [isDynamicSearchBaseQuery]=\"false\" (formDataChanged)=\"formDataHandler($event)\" class=\"col-12\">\r\n        </app-query-params>\r\n      </ng-container>\r\n    </div>\r\n  </form>\r\n  <div\r\n    class=\"col-12 mt-2 text-right\"\r\n    *ngIf=\"formData.pagetype === 'DSP' || formData.pagetype === 'DGP' || formData.pagetype === 'REPORT'\">\r\n    <button class=\"btn btn-pri\" [disabled]=\"searchParamsForm.invalid\" (click)=\"saveSearchParams()\">Save</button>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"formData.pagetype === 'BGP'\">\r\n  <app-query-params [isGridPage]=\"true\" (formDataChanged)=\"formDataHandler($event)\" class=\"col-12\"></app-query-params>\r\n</div>\r\n", styles: [":root{--background-color: #f8f8f8;--navigation: #fff;--primary: #0D3178;--checkbox-border: #D6D5D5;--text-dark: #000;--label-text: #0D3178;--hover-text: #fff;--bg-light: #fff;--forms: #fff;--nav-text: #696969;--light-gray: #696969;--material-icons: #0D3178;--highlight-list: #e3f2fd;--table-header: #f9f9f9;--table-odd: #f7f7f7;--table-border: #ddd;--table-hover: #dbf6ff;--table-odd-color: #f2fcff;--btn: #0D3178;--menu-panel: #032361;--menu-level2: #28447E;--border-trans: transparent;--btn-hover: #1258A7;--btn-dark: #0D3178;--dropdown-list: #fff;--btncancel: #0D3178;--primary-light: #1258A7;--primary-dark: #0D3178;--light-d-light: #fff;--ldl-text: #fff;--light-d-accent: #fff;--header-bg: #f7f7f7;--secondary-color: #0D3178;--menu-link: #1258A7;--menu-highlight: #0084d1;--sumbmenu-selected: #0084D1;--profile-bg: #f3f9f9;--disabled: #7A8EB5;--accordion-header: #F5F5F5;--input-label: #1F1F1F;--input-field: #4C4C4C;--ghost: #A2A2A2;--table-label: #f1f1f1;--error-msg: #DC0404;--menu-hover: #1258A7;--var-icon-font: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;--rocket-icon: \"/assets/images/rocket-ship.svg\";--base-font-size: 16px;--font-11: 11px;--font-12: 12px;--font-13: 13px;--font-14: 14px;--font-15: 15px;--font-16: 16px;--font-17: 17px;--font-18: 18px;--font-19: 19px;--font-20: 20px;--font-21: 21px;--font-24: 24px;--font-26: 26px}.query-textarea{height:200px}.grid-filed .p-card .p-card-content{padding:0}.grid-filed .documentaccess{border:solid 1px #dbdbdb;border-radius:2px;padding:5px 0;background:#fff;height:100%}.grid-filed .documentaccess .header label{color:#0d3178}.grid-filed .documentaccess .doc-body{overflow-y:auto;max-height:calc(100vh - 450px);min-height:calc(100vh - 450px)}.grid-filed .documentaccess .row.userdata{margin:0;padding:5px 0;cursor:pointer}.grid-filed .documentaccess .row.userdata .group-data .row.userdata:last-child{border-bottom:none}.grid-filed .documentaccess .row.userdata input{font-size:var(--base-font-size)}.grid-filed .documentaccess .row.userdata label{cursor:pointer;display:initial;font-size:var(--base-font-size)}.grid-filed .documentaccess .row.userdata svg{opacity:.4;margin-top:-3px}\n"], dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i6.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i6.MatLabel, selector: "mat-label" }, { kind: "directive", type: i6.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i7.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { kind: "component", type: i7.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { kind: "component", type: i8.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "panelWidth", "hideSingleSelectionIndicator"], exportAs: ["matSelect"] }, { kind: "component", type: i9.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "component", type: i10.QueryParamsComponent, selector: "app-query-params", inputs: ["isDynamicSearchBaseQuery", "isGridPage", "tableData"], outputs: ["formDataChanged"] }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SearchParamsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-search-params', encapsulation: ViewEncapsulation.None, template: "<div *ngIf=\"formData.pagetype !== 'BGP'\">\r\n  <form [formGroup]=\"searchParamsForm\">\r\n    <div class=\"row mt-2\">\r\n      <div *ngIf=\"formData.pagetype === 'DGP' || formData.pagetype === 'REPORT'\" class=\"col-12 mt-3 mb-4\">\r\n        <mat-radio-group\r\n          formControlName=\"databasetypekey\"\r\n          aria-label=\"Database Type\"\r\n          [required]=\"formData.pagetype === 'DGP'\">\r\n          <mat-radio-button *ngFor=\"let item of databaseType\" value=\"{{ item.refkey }}\">\r\n            {{ item.description }}&nbsp;&nbsp;&nbsp;&nbsp;</mat-radio-button\r\n          >\r\n        </mat-radio-group>\r\n      </div>\r\n      <div class=\"col-6 mt-3 mb-4\" *ngIf=\"formData.pagetype === 'DGP'\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"JSON Mode\" formControlName=\"mode\" (selectionChange)=\"modeChanges($event.value)\">\r\n            <mat-option value=\"\">Select</mat-option>\r\n            <mat-option *ngFor=\"let jmode of jsonMode\" [value]=\"jmode.refkey\">\r\n              {{ jmode.displayvalue }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-6 mt-3 mb-4\" *ngIf=\"formData.pagetype === 'DGP'\">\r\n        <mat-form-field>\r\n          <mat-label>Json Tag</mat-label>\r\n          <input\r\n            type=\"text\"\r\n            matInput\r\n            formControlName=\"jsontag\"\r\n            [required]=\"searchParamsForm.value.mode && searchParamsForm.value.mode !== ''\" />\r\n          <mat-error\r\n            *ngIf=\"\r\n              searchParamsForm.get('mode')?.value &&\r\n              searchParamsForm.value.mode !== '' &&\r\n              !searchParamsForm.get('jsontag')?.value\r\n            \">\r\n            Json Tag is required</mat-error\r\n          >\r\n          <mat-error *ngIf=\"searchParamsForm.get('jsontag')?.value\"> Json Tag is invalid</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-12\">\r\n        <mat-form-field\r\n          class=\"out\"\r\n          *ngIf=\"formData.pagetype === 'DSP' || formData.pagetype === 'DGP' || formData.pagetype === 'REPORT'\">\r\n          <textarea\r\n            class=\"query-textarea\"\r\n            matInput\r\n            placeholder=\"Query\"\r\n            formControlName=\"baseQuery\"\r\n            [required]=\"formData.pagetype === 'DSP' || formData.pagetype === 'DGP'\"></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n      <ng-container *ngIf=\"formData.pagetype === 'BUSP'\">\r\n        <app-query-params [isDynamicSearchBaseQuery]=\"false\" (formDataChanged)=\"formDataHandler($event)\" class=\"col-12\">\r\n        </app-query-params>\r\n      </ng-container>\r\n    </div>\r\n  </form>\r\n  <div\r\n    class=\"col-12 mt-2 text-right\"\r\n    *ngIf=\"formData.pagetype === 'DSP' || formData.pagetype === 'DGP' || formData.pagetype === 'REPORT'\">\r\n    <button class=\"btn btn-pri\" [disabled]=\"searchParamsForm.invalid\" (click)=\"saveSearchParams()\">Save</button>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"formData.pagetype === 'BGP'\">\r\n  <app-query-params [isGridPage]=\"true\" (formDataChanged)=\"formDataHandler($event)\" class=\"col-12\"></app-query-params>\r\n</div>\r\n", styles: [":root{--background-color: #f8f8f8;--navigation: #fff;--primary: #0D3178;--checkbox-border: #D6D5D5;--text-dark: #000;--label-text: #0D3178;--hover-text: #fff;--bg-light: #fff;--forms: #fff;--nav-text: #696969;--light-gray: #696969;--material-icons: #0D3178;--highlight-list: #e3f2fd;--table-header: #f9f9f9;--table-odd: #f7f7f7;--table-border: #ddd;--table-hover: #dbf6ff;--table-odd-color: #f2fcff;--btn: #0D3178;--menu-panel: #032361;--menu-level2: #28447E;--border-trans: transparent;--btn-hover: #1258A7;--btn-dark: #0D3178;--dropdown-list: #fff;--btncancel: #0D3178;--primary-light: #1258A7;--primary-dark: #0D3178;--light-d-light: #fff;--ldl-text: #fff;--light-d-accent: #fff;--header-bg: #f7f7f7;--secondary-color: #0D3178;--menu-link: #1258A7;--menu-highlight: #0084d1;--sumbmenu-selected: #0084D1;--profile-bg: #f3f9f9;--disabled: #7A8EB5;--accordion-header: #F5F5F5;--input-label: #1F1F1F;--input-field: #4C4C4C;--ghost: #A2A2A2;--table-label: #f1f1f1;--error-msg: #DC0404;--menu-hover: #1258A7;--var-icon-font: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;--rocket-icon: \"/assets/images/rocket-ship.svg\";--base-font-size: 16px;--font-11: 11px;--font-12: 12px;--font-13: 13px;--font-14: 14px;--font-15: 15px;--font-16: 16px;--font-17: 17px;--font-18: 18px;--font-19: 19px;--font-20: 20px;--font-21: 21px;--font-24: 24px;--font-26: 26px}.query-textarea{height:200px}.grid-filed .p-card .p-card-content{padding:0}.grid-filed .documentaccess{border:solid 1px #dbdbdb;border-radius:2px;padding:5px 0;background:#fff;height:100%}.grid-filed .documentaccess .header label{color:#0d3178}.grid-filed .documentaccess .doc-body{overflow-y:auto;max-height:calc(100vh - 450px);min-height:calc(100vh - 450px)}.grid-filed .documentaccess .row.userdata{margin:0;padding:5px 0;cursor:pointer}.grid-filed .documentaccess .row.userdata .group-data .row.userdata:last-child{border-bottom:none}.grid-filed .documentaccess .row.userdata input{font-size:var(--base-font-size)}.grid-filed .documentaccess .row.userdata label{cursor:pointer;display:initial;font-size:var(--base-font-size)}.grid-filed .documentaccess .row.userdata svg{opacity:.4;margin-top:-3px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.UntypedFormBuilder }, { type: i0.ChangeDetectorRef }, { type: i2.AlertService }, { type: i3.ActivatedRoute }, { type: i3.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhcmFtcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9wYWdlLWJ1aWxkZXIvc3JjL2xpYi9waWNzLXBhZ2VidWlsZGVyL3BhZ2UtYnVpbGRlci9wYWdlLWJ1aWxkZXItYWRkL3NlYXJjaC1wYXJhbXMvc2VhcmNoLXBhcmFtcy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9wYWdlLWJ1aWxkZXIvc3JjL2xpYi9waWNzLXBhZ2VidWlsZGVyL3BhZ2UtYnVpbGRlci9wYWdlLWJ1aWxkZXItYWRkL3NlYXJjaC1wYXJhbXMvc2VhcmNoLXBhcmFtcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVDLFNBQVMsRUFBb0IsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUF3QyxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDOzs7Ozs7Ozs7Ozs7QUFPekYsTUFBTSxPQUFPLHFCQUFxQjtJQW1CdEI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQXRCVixnQkFBZ0IsQ0FBb0I7SUFDcEMsWUFBWSxDQUFNO0lBQ2xCLFlBQVksR0FBRyxFQUFFLENBQUM7SUFDbEIsUUFBUSxDQUFNO0lBQ2QsaUJBQWlCLENBQU07SUFDdkIsV0FBVyxDQUFNO0lBQ2pCLE1BQU0sQ0FBTTtJQUNaLEVBQUUsR0FBUSxFQUFF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Q0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqRzthQUFNO1lBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxlQUFlLEVBQUUsQ0FBQztTQUN6RDtRQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsc0JBQXNCLEVBQUUsQ0FBQztJQUNqRSxDQUFDO3dHQXpiVSxxQkFBcUI7NEZBQXJCLHFCQUFxQix5RENkbEMsK3NHQXVFQTs7NEZEekRhLHFCQUFxQjtrQkFOakMsU0FBUzsrQkFDRSxtQkFBbUIsaUJBR2QsaUJBQWlCLENBQUMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0NoZWNrZWQsIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEluamVjdG9yLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVudHlwZWRGb3JtQnVpbGRlciwgVW50eXBlZEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IGZvcmtKb2luIH0gZnJvbSAncnhqcy9vYnNlcnZhYmxlL2ZvcmtKb2luJztcclxuaW1wb3J0IHsgQXBwQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvY29uc3RhbnRzL2FwcC1jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9zZXJ2aWNlcy9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbW9uRHJvcGRvd25zU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL3NlcnZpY2VzL2NvbW1vbi1kcm9wZG93bnMuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhZ2VCdWlsZGVyQWRkU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL3NlcnZpY2VzL3BhZ2UtYnVpbGRlci1hZGQuc2VydmljZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXNlYXJjaC1wYXJhbXMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtcGFyYW1zLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2gtcGFyYW1zLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoUGFyYW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkIHtcclxuICBzZWFyY2hQYXJhbXNGb3JtITogVW50eXBlZEZvcm1Hcm91cDtcclxuICBzZWFyY2hQYXJhbXM6IGFueTtcclxuICBmaWVsZE1hcHBpbmcgPSBbXTtcclxuICBmb3JtRGF0YTogYW55O1xyXG4gIHRhYmxlU2NoZW1hQ29uZmlnOiBhbnk7XHJcbiAgZHluYW1pY0RhdGE6IGFueTtcclxuICBsYXlvdXQ6IGFueTtcclxuICBpZDogYW55ID0gJyc7XHJcbiAgYmFzZVF1ZXJ5Q29sdW1uczogYW55O1xyXG4gIGFzc2V0TGlzdDogYW55O1xyXG4gIGRhdGFiYXNlVHlwZTogYW55O1xyXG4gIGNvbHVtblRleHQ6IGFueTtcclxuICBqc29uTW9kZTogYW55W10gPSBbXTtcclxuICBkcm9wZG93blNlcnZpY2U6IENvbW1vbkRyb3Bkb3duc1NlcnZpY2U7XHJcbiAgc2VydmljZTogUGFnZUJ1aWxkZXJBZGRTZXJ2aWNlO1xyXG4gIGdyaWRGaWVsZExpc3Q6IGFueTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IFVudHlwZWRGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBhbGVydDogQWxlcnRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXHJcbiAgKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8UGFnZUJ1aWxkZXJBZGRTZXJ2aWNlPihQYWdlQnVpbGRlckFkZFNlcnZpY2UpO1xyXG4gICAgdGhpcy5kcm9wZG93blNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8Q29tbW9uRHJvcGRvd25zU2VydmljZT4oQ29tbW9uRHJvcGRvd25zU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGdwanNvbk1vZGUoKTtcclxuICAgIHRoaXMuaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKTtcclxuICAgIHRoaXMubG9hZEZvcm0oKTtcclxuICAgIHRoaXMubG9hZERyb3BEb3duKCk7XHJcbiAgICB0aGlzLnNlcnZpY2UuY3VycmVudEZvcm1EYXRhLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMuZm9ybURhdGEgPSBkYXRhO1xyXG4gICAgICB0aGlzLnNlYXJjaFBhcmFtcyA9XHJcbiAgICAgICAgdGhpcy5mb3JtRGF0YS5zZWFyY2hwYXJhbXMgJiYgdHlwZW9mIHRoaXMuZm9ybURhdGEuc2VhcmNocGFyYW1zID09PSAnc3RyaW5nJ1xyXG4gICAgICAgICAgPyBKU09OLnBhcnNlKHRoaXMuZm9ybURhdGEuc2VhcmNocGFyYW1zKVxyXG4gICAgICAgICAgOiB0aGlzLmZvcm1EYXRhLnNlYXJjaHBhcmFtcztcclxuICAgICAgdGhpcy5sYXlvdXQgPSB0aGlzLmZvcm1EYXRhICYmIHRoaXMuZm9ybURhdGEubGF5b3V0dHlwZSA/IHRoaXMuZm9ybURhdGEubGF5b3V0dHlwZSA6IG51bGw7XHJcbiAgICAgIGlmICh0aGlzLmZvcm1EYXRhLnRhYmxlc2NoZW1hY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy50YWJsZVNjaGVtYUNvbmZpZyA9XHJcbiAgICAgICAgICB0eXBlb2YgdGhpcy5mb3JtRGF0YS50YWJsZXNjaGVtYWNvbmZpZyA9PT0gJ3N0cmluZydcclxuICAgICAgICAgICAgPyBKU09OLnBhcnNlKHRoaXMuZm9ybURhdGEudGFibGVzY2hlbWFjb25maWcpXHJcbiAgICAgICAgICAgIDogdGhpcy5mb3JtRGF0YS50YWJsZXNjaGVtYWNvbmZpZztcclxuICAgICAgICBpZiAodGhpcy50YWJsZVNjaGVtYUNvbmZpZyAmJiBPYmplY3Qua2V5cyh0aGlzLnRhYmxlU2NoZW1hQ29uZmlnKS5sZW5ndGgpIHtcclxuICAgICAgICAgIHRoaXMuZmllbGRNYXBwaW5nID0gdGhpcy50YWJsZVNjaGVtYUNvbmZpZy5maWVsZG1hcHBpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnRhYmxlU2NoZW1hQ29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5wYXRjaFF1ZXJ5UGFyYW1zKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2VydmljZS5jdXJyZW50QmFzaWNEYXRhLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybURhdGEpIHtcclxuICAgICAgICAgIHRoaXMuZm9ybURhdGEucGFnZW5hbWUgPSBkYXRhLnBhZ2VuYW1lO1xyXG4gICAgICAgICAgdGhpcy5mb3JtRGF0YS5wYWdldHlwZSA9IGRhdGEucGFnZXR5cGU7XHJcbiAgICAgICAgICB0aGlzLmZvcm1EYXRhLmRlc2NyaXB0aW9uID0gZGF0YS5kZXNjcmlwdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xyXG4gICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBsb2FkRm9ybSgpIHtcclxuICAgIHRoaXMuc2VhcmNoUGFyYW1zRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICBkYXRhYmFzZXR5cGVrZXk6IFtudWxsXSxcclxuICAgICAgYmFzZVF1ZXJ5OiBbJyddLFxyXG4gICAgICBiYXNlUXVlcnlDb2x1bW5zOiBbbnVsbF0sXHJcbiAgICAgIGpzb250YWc6IFtudWxsXSxcclxuICAgICAgbW9kZTogW251bGxdXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWREcm9wRG93bigpIHtcclxuICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLmdldERyb3BEb3duVmFsdWVzKCdEYXRhYmFzZScpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICB0aGlzLmRhdGFiYXNlVHlwZSA9IHJlc3VsdFsnZGF0YSddO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwYXRjaFF1ZXJ5UGFyYW1zKCkge1xyXG4gICAgdGhpcy5zZWFyY2hQYXJhbXNGb3JtLnBhdGNoVmFsdWUoe1xyXG4gICAgICBtb2RlOiB0aGlzLnRhYmxlU2NoZW1hQ29uZmlnPy5tb2RlID8gdGhpcy50YWJsZVNjaGVtYUNvbmZpZz8ubW9kZSA6IG51bGwsXHJcbiAgICAgIGpzb250YWc6IHRoaXMudGFibGVTY2hlbWFDb25maWc/Lmpzb250YWcgPyB0aGlzLnRhYmxlU2NoZW1hQ29uZmlnPy5qc29udGFnIDogbnVsbCxcclxuICAgICAgZGF0YWJhc2V0eXBla2V5OiB0aGlzLnRhYmxlU2NoZW1hQ29uZmlnPy5kYXRhYmFzZXR5cGVrZXkgPyB0aGlzLnRhYmxlU2NoZW1hQ29uZmlnPy5kYXRhYmFzZXR5cGVrZXkgOiAnJyxcclxuICAgICAgYmFzZVF1ZXJ5OiB0aGlzLnRhYmxlU2NoZW1hQ29uZmlnLmJhc2VRdWVyeSA/IHRoaXMudGFibGVTY2hlbWFDb25maWcuYmFzZVF1ZXJ5IDogJydcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZm9ybURhdGFIYW5kbGVyKGRhdGEpIHtcclxuICAgIHRoaXMuZHluYW1pY0RhdGEgPSBkYXRhO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlQmFzZVF1ZXJ5VHlwZSgpIHtcclxuICAgIHRoaXMuc2VhcmNoUGFyYW1zRm9ybS5nZXQoJ2Jhc2VRdWVyeScpPy5zZXRWYWx1ZSgnJyk7XHJcbiAgICB0aGlzLnNlYXJjaFBhcmFtc0Zvcm0uZ2V0KCdiYXNlUXVlcnknKT8uY2xlYXJWYWxpZGF0b3JzKCk7XHJcbiAgICB0aGlzLnNlYXJjaFBhcmFtc0Zvcm0uZ2V0KCdiYXNlUXVlcnknKT8udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gIH1cclxuXHJcbiAgcGFyc2VTcWwoc3FsKSB7XHJcbiAgICBzcWwgPSBzcWwudG9Mb3dlckNhc2UoKTtcclxuICAgIGNvbnN0IGZvdW5kOiBBcnJheTxhbnk+ID0gW107XHJcbiAgICBbJ1NFTEVDVCcsICcgV0hFUkUgJywgJyBGUk9NICcsICcgQU5EICcsICcgT1IgJywgJzsnXS5mb3JFYWNoKGZ1bmN0aW9uICh3b3JkKSB7XHJcbiAgICAgIHdvcmQgPSB3b3JkLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGxldCBpZHggPSBzcWwuaW5kZXhPZih3b3JkLnRvTG93ZXJDYXNlKCkpO1xyXG5cclxuICAgICAgd2hpbGUgKGlkeCAhPT0gLTEpIHtcclxuICAgICAgICBmb3VuZC5wdXNoKHsgd29yZDogd29yZCwgaW5kZXg6IGlkeCB9KTtcclxuICAgICAgICBpZHggPSBzcWwuaW5kZXhPZih3b3JkLCBpZHggKyAxKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm91bmQuc29ydChmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICByZXR1cm4geC5pbmRleCAtIHkuaW5kZXg7XHJcbiAgICB9KTtcclxuICAgIGZvdW5kLmZvckVhY2goZnVuY3Rpb24gKHgsIGksIHhzKSB7XHJcbiAgICAgIGlmIChpIDwgeHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIHgudGV4dCA9IHNxbFxyXG4gICAgICAgICAgLnN1YnN0cmluZyh4LmluZGV4LCB4c1tpICsgMV0uaW5kZXgpXHJcbiAgICAgICAgICAucmVwbGFjZSh4c1tpXS53b3JkLCAnJylcclxuICAgICAgICAgIC50cmltKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBmb3VuZDtcclxuICB9XHJcblxyXG4gIHNhdmVTZWFyY2hQYXJhbXMoKSB7XHJcbiAgICBjb25zdCBmb3JtRGV0YWlscyA9IHRoaXMuZm9ybURhdGE7XHJcbiAgICBjb25zdCBzZWFyY2hEZXRhaWxzID0gdGhpcy5zZWFyY2hQYXJhbXNGb3JtLmdldFJhd1ZhbHVlKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuZm9ybURhdGEucGFnZXR5cGUgPT09ICdCVVNQJykge1xyXG4gICAgICBzZWFyY2hEZXRhaWxzLmJhc2VRdWVyeSA9IHRoaXMuZHluYW1pY0RhdGEgPyBKU09OLnN0cmluZ2lmeSh0aGlzLmR5bmFtaWNEYXRhKSA6IG51bGw7XHJcbiAgICAgIHRoaXMuZ3JpZEZpZWxkTGlzdCA9IHRoaXMuZHluYW1pY0RhdGEgJiYgdGhpcy5keW5hbWljRGF0YS5maWVsZG1hcHBpbmcgPyB0aGlzLmR5bmFtaWNEYXRhLmZpZWxkbWFwcGluZyA6IFtdO1xyXG4gICAgICB0aGlzLnNldFBhZ2VKc29uRGF0YShzZWFyY2hEZXRhaWxzLCBmb3JtRGV0YWlscyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoc2VhcmNoRGV0YWlscy5iYXNlUXVlcnkpIHtcclxuICAgICAgICBsZXQgYmFzZVF1ZXJ5ID0gc2VhcmNoRGV0YWlscy5iYXNlUXVlcnk7XHJcblxyXG4gICAgICAgIGJhc2VRdWVyeSA9IGJhc2VRdWVyeS5yZXBsYWNlKC9cXG4vZywgJyAnKTsgLy8gcXVlcnkgLSBtYWtlIHNpbmdsZSBsaW5lIGlmIG11bHRpcGxlIGxpbmVzXHJcblxyXG4gICAgICAgIGJhc2VRdWVyeSA9IGJhc2VRdWVyeS5yZXBsYWNlKCdzZWxlY3QnLCAnU0VMRUNUJykucmVwbGFjZSgnZnJvbScsICdGUk9NJykucmVwbGFjZSgnam9pbicsICdKT0lOJyk7XHJcbiAgICAgICAgY29uc3Qgc3FsRGF0YSA9IHRoaXMucGFyc2VTcWwoYmFzZVF1ZXJ5KTtcclxuICAgICAgICB0aGlzLmNoZWNrU3FsRGF0YShzcWxEYXRhLCBiYXNlUXVlcnksIHNlYXJjaERldGFpbHMsIGZvcm1EZXRhaWxzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjaGVja1NxbERhdGEoc3FsRGF0YSwgYmFzZVF1ZXJ5LCBzZWFyY2hEZXRhaWxzLCBmb3JtRGV0YWlscykge1xyXG4gICAgaWYgKHNxbERhdGEgJiYgc3FsRGF0YS5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5jb2x1bW5UZXh0ID0gc3FsRGF0YVswXS50ZXh0ID8gc3FsRGF0YVswXS50ZXh0IDogJyc7XHJcbiAgICAgIGlmICh0aGlzLmNvbHVtblRleHQpIHtcclxuICAgICAgICBpZiAodGhpcy5jb2x1bW5UZXh0ID09PSAnKicpIHtcclxuICAgICAgICAgIHRoaXMuY2hlY2tDb2x1bW5UZXh0KGJhc2VRdWVyeSwgc2VhcmNoRGV0YWlscywgZm9ybURldGFpbHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNvbHVtbkxpc3RDaGVjayhiYXNlUXVlcnksIHNlYXJjaERldGFpbHMsIGZvcm1EZXRhaWxzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hbGVydC5lcnJvcignUGxlYXNlIGVudGVyIHZhbGlkIHNlbGVjdCBxdWVyeScpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFsZXJ0LmVycm9yKCdQbGVhc2UgZW50ZXIgdmFsaWQgc2VsZWN0IHF1ZXJ5Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0NvbHVtblRleHQoYmFzZVF1ZXJ5LCBzZWFyY2hEZXRhaWxzLCBmb3JtRGV0YWlscykge1xyXG4gICAgLy8gU3RhcnQgLSBjaGVjayBzY2hlbWEgZXhpc3QgaW4gcXVlcnlcclxuICAgIGNvbnN0IHRhYmxlTGlzdCA9IGJhc2VRdWVyeS5tYXRjaCgvKEZST018Sk9JTilcXHMrKFxcdysuXFx3KykvZykubWFwKGUgPT4gZS5zcGxpdCgnICcpWzFdKTtcclxuICAgIGlmICh0YWJsZUxpc3QubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IGNoZWNrU2NoZW1hID0gdGFibGVMaXN0LmZpbHRlcihpdGVtID0+ICFpdGVtLmluY2x1ZGVzKCcuJykpO1xyXG4gICAgICBpZiAoY2hlY2tTY2hlbWEubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5hbGVydC5lcnJvcignUGxlYXNlIGVudGVyIHF1ZXJ5IHdpdGggc2NoZW1hJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGNoZWNrU2NoZW1hXHJcbiAgICAgIHRoaXMuZ2V0VGFibGVGaWVsZHModGFibGVMaXN0LCBzZWFyY2hEZXRhaWxzLCBmb3JtRGV0YWlscyk7XHJcbiAgICAgIC8vIEVuZCAtIGNoZWNrIHNjaGVtYSBleGlzdCBpbiBxdWVyeVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29sdW1uTGlzdENoZWNrKGJhc2VRdWVyeSwgc2VhcmNoRGV0YWlscywgZm9ybURldGFpbHMpIHtcclxuICAgIC8vIFN0YXJ0IC0gY2hlY2sgc2NoZW1hIGV4aXN0IGluIHF1ZXJ5XHJcbiAgICBjb25zdCB0YWJsZUxpc3QgPSBiYXNlUXVlcnkubWF0Y2goLyhGUk9NfEpPSU4pXFxzKyhcXHcrLlxcdyspL2cpLm1hcChlID0+IGUuc3BsaXQoJyAnKVsxXSk7XHJcbiAgICBpZiAodGFibGVMaXN0Lmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBjaGVja1NjaGVtYSA9IHRhYmxlTGlzdC5maWx0ZXIoaXRlbSA9PiAhaXRlbS5pbmNsdWRlcygnLicpKTtcclxuICAgICAgaWYgKGNoZWNrU2NoZW1hLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuYWxlcnQuZXJyb3IoJ1BsZWFzZSBlbnRlciBxdWVyeSB3aXRoIHNjaGVtYScpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gRW5kIC0gY2hlY2sgc2NoZW1hIGV4aXN0IGluIHF1ZXJ5XHJcbiAgICBjb25zdCByZWdleCA9IEFwcENvbnN0YW50cy5jaGVjU2NoZW1hRXhpc3RRdWVyeTsgLy8gY29sdW1uIG5hbWUgd2l0aCB1bmRlcnNjb3JlIGlzc3VlIGZpeFxyXG4gICAgdGhpcy5jb2x1bW5UZXh0ID0gYmFzZVF1ZXJ5Lm1hdGNoKHJlZ2V4KTtcclxuICAgIHRoaXMuYmFzZVF1ZXJ5Q29sdW1ucyA9IHRoaXMuY29sdW1uVGV4dC5tYXAoZGF0YSA9PiB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLnJlcGxhY2VBbGwoJ1wiJywgJycpO1xyXG4gICAgICBkYXRhID0gZGF0YS5yZXBsYWNlQWxsKCd+JywgJycpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGhlYWRlcjogZGF0YS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGRhdGEuc3Vic3RyaW5nKDEpLFxyXG4gICAgICAgIGNvbHVtbkRlZjogZGF0YS50cmltKCkudG9Mb3dlckNhc2UoKVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFBhZ2VKc29uRGF0YShzZWFyY2hEZXRhaWxzLCBmb3JtRGV0YWlscyk7XHJcbiAgfVxyXG5cclxuICBzZXRQYWdlSnNvbkRhdGEoc2VhcmNoRGV0YWlscywgZm9ybURldGFpbHMpIHtcclxuICAgIHRoaXMuZm9ybURhdGFQYWdlVHlwZShzZWFyY2hEZXRhaWxzKTtcclxuICAgIC8vIFN0YXJ0IC0gU2V0IGdyaWQgY29uZmlnIGRhdGFcclxuICAgIGNvbnN0IGdyaWRDb25maWcgPVxyXG4gICAgICBmb3JtRGV0YWlscy5ncmlkY29uZmlnICYmIHR5cGVvZiBmb3JtRGV0YWlscy5ncmlkY29uZmlnID09PSAnc3RyaW5nJ1xyXG4gICAgICAgID8gSlNPTi5wYXJzZShmb3JtRGV0YWlscy5ncmlkY29uZmlnKVxyXG4gICAgICAgIDogZm9ybURldGFpbHMuZ3JpZGNvbmZpZztcclxuICAgIGxldCBncmlkQ29uZmlnRm9ybUFycmF5ID0gW107XHJcbiAgICBpZiAoZ3JpZENvbmZpZykge1xyXG4gICAgICBncmlkQ29uZmlnRm9ybUFycmF5ID1cclxuICAgICAgICBPYmplY3Qua2V5cyhncmlkQ29uZmlnKS5sZW5ndGggJiYgZ3JpZENvbmZpZy5ncmlkQ29uZmlnRm9ybUFycmF5ICYmIGdyaWRDb25maWcuZ3JpZENvbmZpZ0Zvcm1BcnJheS5sZW5ndGhcclxuICAgICAgICAgID8gZ3JpZENvbmZpZy5ncmlkQ29uZmlnRm9ybUFycmF5XHJcbiAgICAgICAgICA6IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRlbXBEYXRhOiBBcnJheTxhbnk+ID0gW107XHJcbiAgICBsZXQgZ3JpZENvbmZpZ0xpc3Q7XHJcbiAgICBpZiAodGhpcy5ncmlkRmllbGRMaXN0ICYmIHRoaXMuZ3JpZEZpZWxkTGlzdC5sZW5ndGgpIHtcclxuICAgICAgZm9yIChjb25zdCBncmlkRmllbGQgb2YgdGhpcy5ncmlkRmllbGRMaXN0KSB7XHJcbiAgICAgICAgdGhpcy5ncmlkRmllbGRMaXN0Q29uZGl0aW9uKGdyaWRGaWVsZCwgZ3JpZENvbmZpZ0Zvcm1BcnJheSwgdGVtcERhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudGVtcGxhdGVEYXRhQ2hlY2sodGVtcERhdGEsIGdyaWRDb25maWcsIGdyaWRDb25maWdMaXN0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdyaWRDb25maWdMaXN0ID0gJyc7XHJcbiAgICB9XHJcbiAgICAvLyBFbmQgLSBTZXQgZ3JpZCBjb25maWcgZGF0YVxyXG5cclxuICAgIGlmICh0aGlzLmZvcm1EYXRhLnBhZ2V0eXBlID09PSAnRFNQJyB8fCB0aGlzLmZvcm1EYXRhLnBhZ2V0eXBlID09PSAnREdQJykge1xyXG4gICAgICBmb3JtRGV0YWlscy50YWJsZXNjaGVtYWNvbmZpZyA9IHNlYXJjaERldGFpbHM7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybURldGFpbHMubGF5b3V0dHlwZSA9IHRoaXMubGF5b3V0O1xyXG4gICAgZm9ybURldGFpbHMuZ3JpZGNvbmZpZyA9IGdyaWRDb25maWdMaXN0O1xyXG5cclxuICAgIHRoaXMuc2VydmljZS5zZXRGb3JtRGF0YShmb3JtRGV0YWlscyk7XHJcblxyXG4gICAgZm9ybURldGFpbHMudGFibGVzY2hlbWFjb25maWcgPSBKU09OLnN0cmluZ2lmeShzZWFyY2hEZXRhaWxzKTtcclxuICAgIHRoaXMuZm9ybURhdGFJZGNoZWNrKGZvcm1EZXRhaWxzLCBncmlkQ29uZmlnTGlzdCk7XHJcbiAgICB0aGlzLmNoZWNrQ3JlYXRlUGFnZShmb3JtRGV0YWlscywgc2VhcmNoRGV0YWlscyk7XHJcbiAgfVxyXG4gIGZvcm1EYXRhUGFnZVR5cGUoc2VhcmNoRGV0YWlscykge1xyXG4gICAgaWYgKHRoaXMuZm9ybURhdGEucGFnZXR5cGUgPT09ICdEU1AnIHx8IHRoaXMuZm9ybURhdGEucGFnZXR5cGUgPT09ICdER1AnKSB7XHJcbiAgICAgIHRoaXMuZ3JpZEZpZWxkTGlzdCA9IHRoaXMuYmFzZVF1ZXJ5Q29sdW1ucyA/IHRoaXMuYmFzZVF1ZXJ5Q29sdW1ucyA6IFtdO1xyXG4gICAgICBzZWFyY2hEZXRhaWxzLmJhc2VRdWVyeUNvbHVtbnMgPSB0aGlzLmJhc2VRdWVyeUNvbHVtbnM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBncmlkRmllbGRMaXN0Q29uZGl0aW9uKGdyaWRGaWVsZCwgZ3JpZENvbmZpZ0Zvcm1BcnJheSwgdGVtcERhdGEpIHtcclxuICAgIGxldCBpdGVtO1xyXG4gICAgZ3JpZEZpZWxkLmNvbHVtbkRlZiA9IGdyaWRGaWVsZC5jb2x1bW5EZWYgPyBncmlkRmllbGQuY29sdW1uRGVmIDogZ3JpZEZpZWxkLmZpZWxkO1xyXG4gICAgZ3JpZEZpZWxkLmhlYWRlciA9IGdyaWRGaWVsZC5oZWFkZXIgPyBncmlkRmllbGQuaGVhZGVyIDogZ3JpZEZpZWxkLmxhYmVsO1xyXG5cclxuICAgIGlmIChncmlkQ29uZmlnRm9ybUFycmF5Lmxlbmd0aCkge1xyXG4gICAgICBpdGVtID0gZ3JpZENvbmZpZ0Zvcm1BcnJheS5maW5kKChiOiBhbnkpID0+IGIuY29sdW1uRGVmID09PSAoZ3JpZEZpZWxkLmNvbHVtbkRlZiB8fCBncmlkRmllbGQuZmllbGQpKTtcclxuICAgIH1cclxuICAgIGlmICghaXRlbSkge1xyXG4gICAgICBpdGVtID0ge1xyXG4gICAgICAgIGNvbHVtbkRlZjogZ3JpZEZpZWxkLmNvbHVtbkRlZixcclxuICAgICAgICBkYXRlRm9ybWF0OiAnJyxcclxuICAgICAgICBkYXRldGV4dDogJycsXHJcbiAgICAgICAgZmlsdGVyOiAnJyxcclxuICAgICAgICBoZWFkZXI6IGdyaWRGaWVsZC5oZWFkZXIsXHJcbiAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgaWNvbnRleHQ6ICcnLFxyXG4gICAgICAgIGxpbms6ICcnLFxyXG4gICAgICAgIHNvcnQ6ICcnXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICB0ZW1wRGF0YS5wdXNoKGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgdGVtcGxhdGVEYXRhQ2hlY2sodGVtcERhdGEsIGdyaWRDb25maWcsIGdyaWRDb25maWdMaXN0KSB7XHJcbiAgICBpZiAodGVtcERhdGEubGVuZ3RoKSB7XHJcbiAgICAgIGxldCBkZWZhdWx0U29ydENvbHVtbjtcclxuICAgICAgaWYgKGdyaWRDb25maWcpIHtcclxuICAgICAgICBkZWZhdWx0U29ydENvbHVtbiA9IHRlbXBEYXRhLmZpbmQoaXRlbSA9PiBpdGVtLmNvbHVtbkRlZiA9PT0gZ3JpZENvbmZpZy5kZWZhdWx0U29ydENvbHVtbik7XHJcbiAgICAgIH1cclxuICAgICAgZ3JpZENvbmZpZ0xpc3QgPSB7IC4uLmdyaWRDb25maWcgfTtcclxuICAgICAgZ3JpZENvbmZpZ0xpc3QuZGVmYXVsdFNvcnRDb2x1bW4gPSBkZWZhdWx0U29ydENvbHVtbiA/IGdyaWRDb25maWcuZGVmYXVsdFNvcnRDb2x1bW4gOiAnJztcclxuICAgICAgZ3JpZENvbmZpZ0xpc3QuZGVmYXVsdFNvcnRUeXBlID0gZGVmYXVsdFNvcnRDb2x1bW4gPyBncmlkQ29uZmlnLmRlZmF1bHRTb3J0VHlwZSA6ICcnO1xyXG4gICAgICBncmlkQ29uZmlnTGlzdC5ncmlkQ29uZmlnRm9ybUFycmF5ID0gdGVtcERhdGE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JtRGF0YUlkY2hlY2soZm9ybURldGFpbHMsIGdyaWRDb25maWdMaXN0KSB7XHJcbiAgICBmb3JtRGV0YWlscy5ncmlkY29uZmlnID1cclxuICAgICAgZ3JpZENvbmZpZ0xpc3QgJiYgT2JqZWN0LmtleXMoZ3JpZENvbmZpZ0xpc3QpLmxlbmd0aCA/IEpTT04uc3RyaW5naWZ5KGdyaWRDb25maWdMaXN0KSA6IG51bGw7XHJcbiAgICBpZiAodGhpcy5pZCkge1xyXG4gICAgICBmb3JtRGV0YWlscy5pZCA9IHRoaXMuaWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0NyZWF0ZVBhZ2UoZm9ybURldGFpbHMsIHNlYXJjaERldGFpbHMpIHtcclxuICAgIHRoaXMuc2VydmljZS5jcmVhdGVQYWdlKGZvcm1EZXRhaWxzKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgaWYgKCF0aGlzLmlkKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3VsdFsnZGF0YSddO1xyXG4gICAgICAgIHRoaXMucmVzdWx0Q2hlY2tLZXkocmVzdWx0LCBkYXRhKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuZm9ybURhdGEucGFnZXR5cGUgPT09ICdSRVBPUlQnICYmIHJlc3VsdCkge1xyXG4gICAgICAgIHRoaXMuc2F2ZVJlcG9ydFRhYmxlKHJlc3VsdFsnZGF0YSddKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5hbGVydC5zdWNjZXNzKCdQYWdlIHNhdmVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuZm9ybURhdGEucGFnZXR5cGUgPT09ICdER1AnIHx8IHRoaXMuZm9ybURhdGEucGFnZXR5cGUgPT09ICdEU1AnKSB7XHJcbiAgICAgIHRoaXMuc2F2ZUFzc2V0KHNlYXJjaERldGFpbHMuYmFzZVF1ZXJ5Q29sdW1ucyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlc3VsdENoZWNrS2V5KHJlc3VsdCwgZGF0YSkge1xyXG4gICAgaWYgKHJlc3VsdCAmJiBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgaWQgPSBkYXRhPy5pZCA/IGRhdGE/LmlkIDogJyc7XHJcbiAgICAgIGlmIChpZCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vZWRpdCcsIGlkXSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzYXZlQXNzZXQoY29sdW1ucykge1xyXG4gICAgY29uc3QgdGFibGVDb3VsbW4gPSBjb2x1bW5zO1xyXG4gICAgY29uc3QgZmllbGRBcnI6IEFycmF5PGFueT4gPSBbXTtcclxuICAgIHRoaXMuY29uZGl0aW9uQ2hlY2tTYXZlQXNzZXN0cyhmaWVsZEFycik7XHJcblxyXG4gICAgY29uc3QgYXNzZXROYW1lQXJyID0gdGhpcy5hc3NldExpc3QgJiYgdGhpcy5hc3NldExpc3QubGVuZ3RoID8gdGhpcy5hc3NldExpc3QubWFwKGl0ZW0gPT4gaXRlbS5hc3NldG5hbWUpIDogW107XHJcbiAgICBjb25zdCBhY3RpdmVBcnI6IEFycmF5PGFueT4gPSBbXTtcclxuICAgIGNvbnN0IGluYWN0aXZlQXJyOiBBcnJheTxhbnk+ID0gW107XHJcblxyXG4gICAgdGhpcy5jb25kaXRpb25DaGVja1NhdmUoZmllbGRBcnIsIGFjdGl2ZUFyciwgaW5hY3RpdmVBcnIpO1xyXG5cclxuICAgIHRoaXMubmV3QXNzZXRBcnJDaGVjayhmaWVsZEFyciwgYXNzZXROYW1lQXJyLCB0YWJsZUNvdWxtbiwgYWN0aXZlQXJyKTtcclxuXHJcbiAgICBjb25zdCBhc3NldERhdGEgPSBbLi4uYWN0aXZlQXJyLCAuLi5pbmFjdGl2ZUFycl07XHJcbiAgICB0aGlzLnNlcnZpY2UuZ2V0TWVudUxpc3QoYXNzZXREYXRhLCB0aGlzLmZvcm1EYXRhLmlkKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAvL1RoaXMgaXMgaW50ZW50aW9uYWxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmV3QXNzZXRBcnJDaGVjayhmaWVsZEFyciwgYXNzZXROYW1lQXJyLCB0YWJsZUNvdWxtbiwgYWN0aXZlQXJyKSB7XHJcbiAgICBsZXQgbmV3QXNzZXRBcnIgPSBmaWVsZEFycjtcclxuICAgIGlmIChhc3NldE5hbWVBcnIgJiYgYXNzZXROYW1lQXJyLmxlbmd0aCAmJiBmaWVsZEFyciAmJiBmaWVsZEFyci5sZW5ndGgpIHtcclxuICAgICAgbmV3QXNzZXRBcnIgPSBmaWVsZEFyci5maWx0ZXIoeCA9PiAhYXNzZXROYW1lQXJyLmluY2x1ZGVzKHgpKTtcclxuICAgIH1cclxuICAgIGlmIChuZXdBc3NldEFyciAmJiBuZXdBc3NldEFyci5sZW5ndGgpIHtcclxuICAgICAgbmV3QXNzZXRBcnIuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBjb25zdCBnZXRGaWVsZERhdGEgPSB0YWJsZUNvdWxtbi5maW5kKHZhbHVlID0+IHZhbHVlLmNvbHVtbkRlZiA9PT0gaXRlbSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgIGFzc2V0bmFtZTogaXRlbSxcclxuICAgICAgICAgIGFzc2V0cGF0aDogdGhpcy5mb3JtRGF0YS5wYWdlbmFtZSArICcuJyArIGl0ZW0sXHJcbiAgICAgICAgICBhc3NldHR5cGU6ICc0NUYnLFxyXG4gICAgICAgICAgZGFzaGJvYXJkdGVtcGxhdGVqc29uOiBudWxsLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGdldEZpZWxkRGF0YSAmJiBnZXRGaWVsZERhdGEuaGVhZGVyID8gZ2V0RmllbGREYXRhLmhlYWRlciA6IG51bGwsXHJcbiAgICAgICAgICBkaXNwbGF5bmFtZTogZ2V0RmllbGREYXRhICYmIGdldEZpZWxkRGF0YS5oZWFkZXIgPyBnZXRGaWVsZERhdGEuaGVhZGVyIDogbnVsbCxcclxuICAgICAgICAgIGljb246IG51bGwsXHJcbiAgICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICAgIHBhZ2VpZDogdGhpcy5mb3JtRGF0YS5pZCxcclxuICAgICAgICAgIHBhcmVudGFzc2V0aWQ6IG51bGwsXHJcbiAgICAgICAgICB1cmw6IG51bGwsXHJcbiAgICAgICAgICBpc2FjdGl2ZTogdGhpcy5mb3JtRGF0YS5hY3RpdmVWZXJzaW9uPy5pc2FjdGl2ZSxcclxuICAgICAgICAgIHZlcnNpb25pZDogdGhpcy5mb3JtRGF0YS5hY3RpdmVWZXJzaW9uPy5pZFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYWN0aXZlQXJyLnB1c2goZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25kaXRpb25DaGVja1NhdmVBc3Nlc3RzKF9maWVsZEFycikge1xyXG4gICAgaWYgKHRoaXMuZmllbGRNYXBwaW5nICYmIHRoaXMuZmllbGRNYXBwaW5nLmxlbmd0aCkge1xyXG4gICAgICBpZiAodGhpcy5mb3JtRGF0YS5wYWdldHlwZSA9PT0gJ0RTUCcpIHtcclxuICAgICAgICBfZmllbGRBcnIgPSB0aGlzLmZpZWxkTWFwcGluZy5tYXAoKGl0ZW06IGFueSkgPT4gJ2dyaWRfJyArIGl0ZW0uY29sdW1uRGVmKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBfZmllbGRBcnIgPSB0aGlzLmZpZWxkTWFwcGluZy5tYXAoKGl0ZW06IGFueSkgPT4gaXRlbS5jb2x1bW5EZWYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbmRpdGlvbkNoZWNrU2F2ZShmaWVsZEFyciwgYWN0aXZlQXJyLCBpbmFjdGl2ZUFycikge1xyXG4gICAgaWYgKHRoaXMuYXNzZXRMaXN0ICYmIHRoaXMuYXNzZXRMaXN0Lmxlbmd0aCkge1xyXG4gICAgICB0aGlzLmFzc2V0TGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZEFyci5pbmNsdWRlcyhpdGVtLmFzc2V0bmFtZSkpIHtcclxuICAgICAgICAgIGFjdGl2ZUFyci5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtLmlzYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICBpbmFjdGl2ZUFyci5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldFRhYmxlRmllbGRzKHRhYmxlTGlzdCwgc2VhcmNoRGV0YWlscywgZm9ybURldGFpbHMpIHtcclxuICAgIGNvbnN0IHRhYmxlU2NoZW1hTGlzdCA9IHRhYmxlTGlzdC5tYXAoaXRlbSA9PiBpdGVtLnNwbGl0KCcuJykpO1xyXG4gICAgbGV0IGZpZWxkc0FycmF5ID0gW107XHJcbiAgICBjb25zdCByZXF1ZXN0QXJyYXk6IEFycmF5PGFueT4gPSBbXTtcclxuICAgIHRhYmxlU2NoZW1hTGlzdC5mb3JFYWNoKChkYXRhLCBpKSA9PiB7XHJcbiAgICAgIHJlcXVlc3RBcnJheVtpXSA9IHRoaXMuc2VydmljZS5nZXRUYWJsZUZpZWxkcyhkYXRhWzFdLCBkYXRhWzBdKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZvcmtKb2luKHJlcXVlc3RBcnJheSkuc3Vic2NyaWJlKHJlc3VsdHMgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCkge1xyXG4gICAgICAgIHJlc3VsdHMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgIGNvbnN0IGZpZWxkRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaXRlbSkpLm1hcCh2YWx1ZSA9PiAoeyBjb2x1bW5EZWY6IHZhbHVlWzBdLCBoZWFkZXI6IHZhbHVlWzFdIH0pKTtcclxuICAgICAgICAgIGZpZWxkc0FycmF5ID0gZmllbGRzQXJyYXkuY29uY2F0KC4uLmZpZWxkRGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5iYXNlUXVlcnlDb2x1bW5zID0gZmllbGRzQXJyYXk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRQYWdlSnNvbkRhdGEoc2VhcmNoRGV0YWlscywgZm9ybURldGFpbHMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzYXZlUmVwb3J0VGFibGUocmVzdWx0KSB7XHJcbiAgICB0aGlzLnNlcnZpY2VcclxuICAgICAgLmNyZWF0ZVJlcG9ydFRhYmxlKHtcclxuICAgICAgICBzb3VyY2V0eXBla2V5OiAncGFnZScsXHJcbiAgICAgICAgc291cmNlaWRvcnVybDogcmVzdWx0Py5pZCxcclxuICAgICAgICByZXBvcnRuYW1lOiByZXN1bHQ/LnBhZ2VuYW1lLFxyXG4gICAgICAgIG9yZ2FuaXphdGlvbmlkOiByZXN1bHQ/Lm9yZ2FuaXphdGlvbmlkXHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZ3Bqc29uTW9kZSgpIHtcclxuICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLmdldERyb3BEb3duVmFsdWVzKCdER1BKc29uTW9kZScpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICB0aGlzLmpzb25Nb2RlID0gcmVzdWx0WydkYXRhJ107XHJcbiAgICB9KTtcclxuICB9XHJcbiAgbW9kZUNoYW5nZXMoanNvbk1vZGVSZWZLZXkpIHtcclxuICAgIGlmIChqc29uTW9kZVJlZktleSA9PT0gJzE0M0NOJykge1xyXG4gICAgICAvLzE0M0NOOiBDb25jYXRlbmF0ZSB8IDE0M01HOiBNZXJnZVxyXG4gICAgICB0aGlzLnNlYXJjaFBhcmFtc0Zvcm0uZ2V0KCdqc29udGFnJyk/LnNldFZhbGlkYXRvcnMoW1ZhbGlkYXRvcnMucGF0dGVybignXlsuYS16QS1aMC05OyE/XSokJyldKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoUGFyYW1zRm9ybS5nZXQoJ2pzb250YWcnKT8uY2xlYXJWYWxpZGF0b3JzKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlYXJjaFBhcmFtc0Zvcm0uZ2V0KCdqc29udGFnJyk/LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiAqbmdJZj1cImZvcm1EYXRhLnBhZ2V0eXBlICE9PSAnQkdQJ1wiPlxyXG4gIDxmb3JtIFtmb3JtR3JvdXBdPVwic2VhcmNoUGFyYW1zRm9ybVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvdyBtdC0yXCI+XHJcbiAgICAgIDxkaXYgKm5nSWY9XCJmb3JtRGF0YS5wYWdldHlwZSA9PT0gJ0RHUCcgfHwgZm9ybURhdGEucGFnZXR5cGUgPT09ICdSRVBPUlQnXCIgY2xhc3M9XCJjb2wtMTIgbXQtMyBtYi00XCI+XHJcbiAgICAgICAgPG1hdC1yYWRpby1ncm91cFxyXG4gICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZGF0YWJhc2V0eXBla2V5XCJcclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJEYXRhYmFzZSBUeXBlXCJcclxuICAgICAgICAgIFtyZXF1aXJlZF09XCJmb3JtRGF0YS5wYWdldHlwZSA9PT0gJ0RHUCdcIj5cclxuICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGFiYXNlVHlwZVwiIHZhbHVlPVwie3sgaXRlbS5yZWZrZXkgfX1cIj5cclxuICAgICAgICAgICAge3sgaXRlbS5kZXNjcmlwdGlvbiB9fSZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOzwvbWF0LXJhZGlvLWJ1dHRvblxyXG4gICAgICAgICAgPlxyXG4gICAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC02IG10LTMgbWItNFwiICpuZ0lmPVwiZm9ybURhdGEucGFnZXR5cGUgPT09ICdER1AnXCI+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJKU09OIE1vZGVcIiBmb3JtQ29udHJvbE5hbWU9XCJtb2RlXCIgKHNlbGVjdGlvbkNoYW5nZSk9XCJtb2RlQ2hhbmdlcygkZXZlbnQudmFsdWUpXCI+XHJcbiAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgam1vZGUgb2YganNvbk1vZGVcIiBbdmFsdWVdPVwiam1vZGUucmVma2V5XCI+XHJcbiAgICAgICAgICAgICAge3sgam1vZGUuZGlzcGxheXZhbHVlIH19XHJcbiAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiBtdC0zIG1iLTRcIiAqbmdJZj1cImZvcm1EYXRhLnBhZ2V0eXBlID09PSAnREdQJ1wiPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxtYXQtbGFiZWw+SnNvbiBUYWc8L21hdC1sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG1hdElucHV0XHJcbiAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImpzb250YWdcIlxyXG4gICAgICAgICAgICBbcmVxdWlyZWRdPVwic2VhcmNoUGFyYW1zRm9ybS52YWx1ZS5tb2RlICYmIHNlYXJjaFBhcmFtc0Zvcm0udmFsdWUubW9kZSAhPT0gJydcIiAvPlxyXG4gICAgICAgICAgPG1hdC1lcnJvclxyXG4gICAgICAgICAgICAqbmdJZj1cIlxyXG4gICAgICAgICAgICAgIHNlYXJjaFBhcmFtc0Zvcm0uZ2V0KCdtb2RlJyk/LnZhbHVlICYmXHJcbiAgICAgICAgICAgICAgc2VhcmNoUGFyYW1zRm9ybS52YWx1ZS5tb2RlICE9PSAnJyAmJlxyXG4gICAgICAgICAgICAgICFzZWFyY2hQYXJhbXNGb3JtLmdldCgnanNvbnRhZycpPy52YWx1ZVxyXG4gICAgICAgICAgICBcIj5cclxuICAgICAgICAgICAgSnNvbiBUYWcgaXMgcmVxdWlyZWQ8L21hdC1lcnJvclxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cInNlYXJjaFBhcmFtc0Zvcm0uZ2V0KCdqc29udGFnJyk/LnZhbHVlXCI+IEpzb24gVGFnIGlzIGludmFsaWQ8L21hdC1lcnJvcj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGRcclxuICAgICAgICAgIGNsYXNzPVwib3V0XCJcclxuICAgICAgICAgICpuZ0lmPVwiZm9ybURhdGEucGFnZXR5cGUgPT09ICdEU1AnIHx8IGZvcm1EYXRhLnBhZ2V0eXBlID09PSAnREdQJyB8fCBmb3JtRGF0YS5wYWdldHlwZSA9PT0gJ1JFUE9SVCdcIj5cclxuICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICBjbGFzcz1cInF1ZXJ5LXRleHRhcmVhXCJcclxuICAgICAgICAgICAgbWF0SW5wdXRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJRdWVyeVwiXHJcbiAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImJhc2VRdWVyeVwiXHJcbiAgICAgICAgICAgIFtyZXF1aXJlZF09XCJmb3JtRGF0YS5wYWdldHlwZSA9PT0gJ0RTUCcgfHwgZm9ybURhdGEucGFnZXR5cGUgPT09ICdER1AnXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1EYXRhLnBhZ2V0eXBlID09PSAnQlVTUCdcIj5cclxuICAgICAgICA8YXBwLXF1ZXJ5LXBhcmFtcyBbaXNEeW5hbWljU2VhcmNoQmFzZVF1ZXJ5XT1cImZhbHNlXCIgKGZvcm1EYXRhQ2hhbmdlZCk9XCJmb3JtRGF0YUhhbmRsZXIoJGV2ZW50KVwiIGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgPC9hcHAtcXVlcnktcGFyYW1zPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZm9ybT5cclxuICA8ZGl2XHJcbiAgICBjbGFzcz1cImNvbC0xMiBtdC0yIHRleHQtcmlnaHRcIlxyXG4gICAgKm5nSWY9XCJmb3JtRGF0YS5wYWdldHlwZSA9PT0gJ0RTUCcgfHwgZm9ybURhdGEucGFnZXR5cGUgPT09ICdER1AnIHx8IGZvcm1EYXRhLnBhZ2V0eXBlID09PSAnUkVQT1JUJ1wiPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpXCIgW2Rpc2FibGVkXT1cInNlYXJjaFBhcmFtc0Zvcm0uaW52YWxpZFwiIChjbGljayk9XCJzYXZlU2VhcmNoUGFyYW1zKClcIj5TYXZlPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2ICpuZ0lmPVwiZm9ybURhdGEucGFnZXR5cGUgPT09ICdCR1AnXCI+XHJcbiAgPGFwcC1xdWVyeS1wYXJhbXMgW2lzR3JpZFBhZ2VdPVwidHJ1ZVwiIChmb3JtRGF0YUNoYW5nZWQpPVwiZm9ybURhdGFIYW5kbGVyKCRldmVudClcIiBjbGFzcz1cImNvbC0xMlwiPjwvYXBwLXF1ZXJ5LXBhcmFtcz5cclxuPC9kaXY+XHJcbiJdfQ==