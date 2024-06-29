import { AfterViewInit, EventEmitter, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { MatDateRangePicker } from '@angular/material/datepicker';
import { MatRadioChange } from '@angular/material/radio';
import { ActivatedRoute } from '@angular/router';
import { FormioCustomComponent, FormioEvent } from '@formio/angular';
import { DataStoreService } from '../../../@core/services/data-store.service';
import { DynamicTabPageService } from '../../../@core/services/dynamic-tab-page-service';
import * as i0 from "@angular/core";
export interface DateRange {
    startDateKey: string;
    startDate: string;
    endDateKey: string;
    endDate: string;
}
export declare class DateRangeWrapperComponent implements FormioCustomComponent<DateRange>, OnInit, AfterViewInit {
    private dynamicTabPageService;
    private route;
    private dataStoreService;
    value: DateRange;
    startDateKey: string;
    endDateKey: string;
    valueChange: EventEmitter<DateRange>;
    disabled: boolean;
    minDate: Date;
    formioEvent: EventEmitter<FormioEvent>;
    rangePicker: MatDateRangePicker<Date>;
    selectRange: any;
    daysInput: any;
    dateRangeForm: UntypedFormGroup;
    showFutureDateConfirmation: boolean;
    allowFutureDate: boolean | '';
    isResponse: any;
    isEdited: boolean;
    disableInput: boolean;
    dayRange: any;
    enableBtn: boolean;
    dateDifference: number;
    predefinedRanges: number[];
    constructor(dynamicTabPageService: DynamicTabPageService, route: ActivatedRoute, dataStoreService: DataStoreService);
    ngOnInit(): void;
    getResponseById(formid: any, resid: any): void;
    private initForm;
    private resetForm;
    selectedDateRange(): void;
    ngAfterViewInit(): void;
    generateRange(eve: any, check: any): void;
    checkInput(): void;
    futureDateConfirmationChange($event: MatRadioChange): void;
    focusoutAssignRange(value: any): void;
    startDateChange($event: any): void;
    assignEndDate(value: any, check: any): void;
    emitDateRange(): void;
    addDays(date: any, days: any): any;
    copyStartDate(): void;
    copyEndDate(): void;
    copy(text: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateRangeWrapperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateRangeWrapperComponent, "app-date-range-wrapper", never, { "value": { "alias": "value"; "required": false; }; "startDateKey": { "alias": "startDateKey"; "required": false; }; "endDateKey": { "alias": "endDateKey"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "minDate": { "alias": "minDate"; "required": false; }; }, { "valueChange": "valueChange"; "formioEvent": "formioEvent"; }, never, never, false, never>;
}