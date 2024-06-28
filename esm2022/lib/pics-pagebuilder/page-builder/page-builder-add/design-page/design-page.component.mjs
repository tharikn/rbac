import { Clipboard } from '@angular/cdk/clipboard';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { Components, Utils } from 'formiojs';
import { LocalService } from '../../../@core/services/local.service';
import { PageBuilderAddService } from '../../../@core/services/page-builder-add.service';
import { PageBuilderService } from '../../../@core/services/page-builder.service';
import { SocketAdapterService } from '../../../@core/services/socket-adapter.server';
import displayType from '../@core/displayType.json';
import gridConfig from '../@core/gridConfig.json';
import { options } from '../@core/options';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/router";
import * as i3 from "../../../@core/services/alert.service";
import * as i4 from "@angular/material/dialog";
import * as i5 from "../../../@core/services/data-store.service";
import * as i6 from "@angular/common";
import * as i7 from "@formio/angular";
import * as i8 from "@angular/material/input";
import * as i9 from "@angular/material/form-field";
import * as i10 from "primeng/dropdown";
import * as i11 from "primeng/card";
import * as i12 from "../../../@core/directives/show-field.directives";
export class DesignPageComponent {
    formBuilder;
    router;
    route;
    alert;
    dialog;
    _storeservice;
    manualForm;
    refreshForm;
    formData;
    form;
    isValidFormDetails;
    id = '';
    updatedfrom;
    jsonElement;
    codeElement;
    options;
    changedFormData;
    basicInfo;
    assetList;
    allFields = [];
    jsonForm;
    logedInUser;
    isEditPage = false;
    callPopup;
    updateNotification = new EventEmitter();
    onlineUserList = new EventEmitter();
    dialogRef;
    selectedPage;
    pageBuilderAddService;
    socketAdapter;
    localstorage;
    basicPageInformation;
    pageBuilderService;
    createDynamicPage;
    gridConfig;
    displayType;
    selectedDisplayType;
    clipboard;
    environment;
    constructor(injector, formBuilder, router, route, alert, dialog, _storeservice) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.alert = alert;
        this.dialog = dialog;
        this._storeservice = _storeservice;
        this.pageBuilderAddService = injector.get(PageBuilderAddService);
        this.socketAdapter = injector.get(SocketAdapterService);
        this.clipboard = injector.get(Clipboard);
        this.localstorage = injector.get(LocalService);
        this.pageBuilderAddService.currentPageType.subscribe(page => (this.selectedPage = page));
        this.pageBuilderService = injector.get(PageBuilderService);
        this.createDynamicPage = this.localstorage.getObj('CREATE PAGE') || false;
        this.gridConfig = gridConfig;
        this.displayType = displayType;
        this.options = options;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.environment = res['RBACORG'].environment;
            }
        });
    }
    ngOnInit() {
        console.log(this.selectedPage);
        this.checkBasicInfo();
        this.logedInUser = this.localstorage.getObj('user');
        // make a replica of Formio column component (column component is stock component in layout group of formio)
        const customDateComponent = Components.components.columns;
        // use the customDateComponent created earlier to inherit the formio component prototype properties
        function dateComponentRef(component, options, data) {
            customDateComponent.prototype.constructor.call(this, component, options, data);
        }
        dateComponentRef.prototype = Object.create(customDateComponent.prototype);
        // assign the schema (configuration) to the dateComponentRef with the JSON schema of custom component (date range component in this case)
        dateComponentRef.schema = function () {
            return customDateComponent.schema({
                key: 'dateRange',
                type: 'columns',
                input: false,
                tableView: false,
                columns: [
                    {
                        components: [
                            {
                                label: 'Columns',
                                columns: [
                                    {
                                        components: [
                                            {
                                                label: 'Start Date',
                                                format: 'MM/dd/yyyy',
                                                customClass: 'pr-0',
                                                tableView: false,
                                                datePicker: {
                                                    disableWeekends: false,
                                                    disableWeekdays: false,
                                                    minDate: 'moment(new Date()).format(\'MM/DD/YYYY\');'
                                                },
                                                enableTime: false,
                                                defaultDate: 'moment()',
                                                validate: {
                                                    required: true
                                                },
                                                enableMinDateInput: true,
                                                enableMaxDateInput: false,
                                                key: 'start_date',
                                                logic: [
                                                    {
                                                        name: 'check if radio is no',
                                                        trigger: {
                                                            type: 'simple',
                                                            simple: {
                                                                show: true,
                                                                when: 'radio',
                                                                eq: 'no'
                                                            }
                                                        },
                                                        actions: [
                                                            {
                                                                name: 'reset',
                                                                type: 'value',
                                                                value: '  if(moment(data.start_date).isAfter(moment(), \'day\')) {\r\n    value = moment();\r\n  } else {\r\n      value = data.start_date\r\n  }'
                                                            }
                                                        ]
                                                    }
                                                ],
                                                attributes: {
                                                    id: 'startDate'
                                                },
                                                type: 'datetime',
                                                input: true,
                                                widget: {
                                                    type: 'calendar',
                                                    displayInTimezone: 'viewer',
                                                    locale: 'en',
                                                    useLocaleSettings: false,
                                                    allowInput: true,
                                                    mode: 'single',
                                                    enableTime: false,
                                                    noCalendar: false,
                                                    format: 'MM/dd/yyyy',
                                                    hourIncrement: 1,
                                                    minuteIncrement: 1,
                                                    time_24hr: false,
                                                    minDate: 'moment(new Date()).format(\'MM/DD/YYYY\');',
                                                    disableWeekends: false,
                                                    disableWeekdays: false,
                                                    maxDate: null
                                                }
                                            }
                                        ],
                                        width: 9,
                                        offset: 0,
                                        push: 0,
                                        pull: 0,
                                        size: 'md',
                                        currentWidth: 9
                                    },
                                    {
                                        components: [
                                            {
                                                label: '&#160',
                                                action: 'custom',
                                                showValidations: false,
                                                leftIcon: 'fa fa-clipboard',
                                                customClass: 'mt-3 formio-icon-btn pr-add',
                                                tableView: false,
                                                key: 'copy',
                                                conditional: {
                                                    show: false,
                                                    when: 'action',
                                                    eq: 'view'
                                                },
                                                type: 'button',
                                                custom: 'navigator.clipboard.writeText(data.start_date? (moment(data.start_date).format(\'MM/DD/YYYY\')) : \'\');',
                                                input: true
                                            }
                                        ],
                                        width: 3,
                                        offset: 0,
                                        push: 0,
                                        pull: 0,
                                        size: 'md',
                                        currentWidth: 3
                                    }
                                ],
                                key: 'columns',
                                type: 'columns',
                                input: false,
                                tableView: false
                            }
                        ],
                        width: 4,
                        offset: 0,
                        push: 0,
                        pull: 0,
                        size: 'md',
                        currentWidth: 4
                    },
                    {
                        components: [
                            {
                                label: 'Select Range',
                                widget: 'choicesjs',
                                tableView: true,
                                data: {
                                    values: [
                                        {
                                            label: '0',
                                            value: '0'
                                        },
                                        {
                                            label: '30',
                                            value: '30'
                                        },
                                        {
                                            label: '45',
                                            value: '45'
                                        },
                                        {
                                            label: '60',
                                            value: '60'
                                        },
                                        {
                                            label: '90',
                                            value: '90'
                                        },
                                        {
                                            label: '120',
                                            value: '120'
                                        }
                                    ]
                                },
                                calculateValue: 'if (data.start_date && data.end_date) {\r\n    const dateDiff = parseInt(moment(data.end_date).diff(moment(data.start_date), \'days\'));\r\n    if (dateDiff >= 0) {\r\n        switch (dateDiff) {\r\n            case 0: \r\n                value = 0;\r\n                break;\r\n            case 30:\r\n                value = 30;\r\n                break;\r\n            case 45: \r\n                value = 45;\r\n                break;\r\n            case 60: \r\n                value = 60;\r\n                break;\r\n            case 90: \r\n                value = 90;\r\n                break;\r\n            case 120: value = 120;\r\n                break;\r\n        }\r\n    }\r\n}',
                                allowCalculateOverride: true,
                                key: 'selectRange',
                                conditional: {
                                    show: false,
                                    when: 'action',
                                    eq: 'view'
                                },
                                logic: [
                                    {
                                        name: 'check for disable condn',
                                        trigger: {
                                            type: 'javascript',
                                            javascript: 'result = ((moment(data.start_date).isAfter(moment(new Date()), \'day\')) && !(data.radio === \'yes\'));'
                                        },
                                        actions: [
                                            {
                                                name: 'disable field',
                                                type: 'property',
                                                property: {
                                                    label: 'Disabled',
                                                    value: 'disabled',
                                                    type: 'boolean'
                                                },
                                                state: true
                                            }
                                        ]
                                    }
                                ],
                                attributes: {
                                    id: 'range'
                                },
                                type: 'select',
                                input: true,
                                hideOnChildrenHidden: false
                            }
                        ],
                        width: 4,
                        offset: 0,
                        push: 0,
                        pull: 0,
                        size: 'md',
                        currentWidth: 4
                    },
                    {
                        components: [
                            {
                                label: 'Columns',
                                columns: [
                                    {
                                        components: [
                                            {
                                                label: 'End Date',
                                                format: 'MM/dd/yyyy',
                                                customClass: 'pr-0',
                                                tableView: false,
                                                datePicker: {
                                                    disableWeekends: false,
                                                    disableWeekdays: false,
                                                    minDate: 'moment(new Date()).format(\'MM/DD/YYYY\');'
                                                },
                                                enableTime: false,
                                                calculateValue: 'if (data.selectRange || data.selectRange === 0) {  \r\n    let result = new Date(data.start_date);\r\n    result.setDate(new Date(result).getDate() + data.selectRange); \r\n    if (result) {\r\n        value = result;\r\n    }\r\n} else {\r\n       value = value;\r\n}\r\n',
                                                validate: {
                                                    custom: 'if (moment(data.start_date).isValid() && moment(data.end_date).isValid()) {\r\n    valid =  moment(data.start_date).isSameOrBefore(moment(data.end_date), \'day\') ? true : "End date must be greater than start date"\r\n}\r\n'
                                                },
                                                enableMinDateInput: true,
                                                enableMaxDateInput: false,
                                                key: 'end_date',
                                                logic: [
                                                    {
                                                        name: 'disable end date',
                                                        trigger: {
                                                            type: 'javascript',
                                                            javascript: 'return data.selectRange > 0 || data.selectRange === 0'
                                                        },
                                                        actions: [
                                                            {
                                                                name: 'disable end date field',
                                                                type: 'property',
                                                                property: {
                                                                    label: 'Disabled',
                                                                    value: 'disabled',
                                                                    type: 'boolean'
                                                                },
                                                                state: true
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        name: 'disable',
                                                        trigger: {
                                                            type: 'javascript',
                                                            javascript: 'result = ((moment(data.start_date).isAfter(moment(new Date()), \'day\')) && !(data.radio === \'yes\'));'
                                                        },
                                                        actions: [
                                                            {
                                                                name: 'disable',
                                                                type: 'property',
                                                                property: {
                                                                    label: 'Disabled',
                                                                    value: 'disabled',
                                                                    type: 'boolean'
                                                                },
                                                                state: true
                                                            }
                                                        ]
                                                    }
                                                ],
                                                attributes: {
                                                    id: 'endDate'
                                                },
                                                type: 'datetime',
                                                input: true,
                                                widget: {
                                                    type: 'calendar',
                                                    displayInTimezone: 'viewer',
                                                    locale: 'en',
                                                    useLocaleSettings: false,
                                                    allowInput: true,
                                                    mode: 'single',
                                                    enableTime: false,
                                                    noCalendar: false,
                                                    format: 'MM/dd/yyyy',
                                                    hourIncrement: 1,
                                                    minuteIncrement: 1,
                                                    time_24hr: false,
                                                    minDate: 'moment(new Date()).format(\'MM/DD/YYYY\');',
                                                    disableWeekends: false,
                                                    disableWeekdays: false,
                                                    maxDate: null
                                                },
                                                hideOnChildrenHidden: false
                                            }
                                        ],
                                        width: 9,
                                        offset: 0,
                                        push: 0,
                                        pull: 0,
                                        size: 'md',
                                        currentWidth: 9
                                    },
                                    {
                                        components: [
                                            {
                                                label: '&#160',
                                                action: 'custom',
                                                showValidations: false,
                                                leftIcon: 'fa fa-clipboard',
                                                customClass: 'mt-3 formio-icon-btn pr-add',
                                                tableView: false,
                                                key: 'copy',
                                                conditional: {
                                                    show: false,
                                                    when: 'action',
                                                    eq: 'view'
                                                },
                                                type: 'button',
                                                custom: 'navigator.clipboard.writeText(data.end_date? (moment(data.end_date).format(\'MM/DD/YYYY\')) : \'\');',
                                                input: true
                                            }
                                        ],
                                        width: 1,
                                        offset: 0,
                                        push: 0,
                                        pull: 0,
                                        size: 'md',
                                        currentWidth: 1
                                    }
                                ],
                                key: 'columns1',
                                type: 'columns',
                                input: false,
                                tableView: false
                            }
                        ],
                        size: 'md',
                        width: 4,
                        offset: 0,
                        push: 0,
                        pull: 0,
                        currentWidth: 4
                    },
                    {
                        components: [
                            {
                                label: 'Do you wish to use a future start date',
                                optionsLabelPosition: 'right',
                                inline: true,
                                hidden: true,
                                tableView: false,
                                values: [
                                    {
                                        label: 'Yes',
                                        value: 'yes',
                                        shortcut: ''
                                    },
                                    {
                                        label: 'No',
                                        value: 'no',
                                        shortcut: ''
                                    }
                                ],
                                key: 'radio',
                                redrawOn: 'start_date',
                                clearOnHide: false,
                                calculateValue: 'if(data.action === \'edit\' && moment(data.initialApiDataSnap.start_date).isAfter(moment(), \'day\')) {\r\n    value = \'yes\'\r\n    // even hide it permanently\r\n}',
                                allowCalculateOverride: true,
                                validate: {
                                    required: true
                                },
                                logic: [
                                    {
                                        name: 'check future date',
                                        trigger: {
                                            type: 'javascript',
                                            javascript: 'return moment(data.start_date).isAfter(moment(new Date()), \'day\')'
                                        },
                                        actions: [
                                            {
                                                name: 'hide this',
                                                type: 'property',
                                                property: {
                                                    label: 'Hidden',
                                                    value: 'hidden',
                                                    type: 'boolean'
                                                },
                                                state: false
                                            }
                                        ]
                                    },
                                    {
                                        name: 'check if radio is yes',
                                        trigger: {
                                            type: 'javascript',
                                            javascript: 'result =  data.radio === \'yes\''
                                        },
                                        actions: [
                                            {
                                                name: 'hide radio',
                                                type: 'property',
                                                property: {
                                                    label: 'Hidden',
                                                    value: 'hidden',
                                                    type: 'boolean'
                                                },
                                                state: false
                                            }
                                        ]
                                    },
                                    {
                                        name: 'Hide for edit and view',
                                        trigger: {
                                            type: 'simple',
                                            simple: {
                                                show: true,
                                                when: 'action',
                                                eq: 'view'
                                            }
                                        },
                                        actions: [
                                            {
                                                name: 'Hide for edit and view',
                                                type: 'property',
                                                property: {
                                                    label: 'Hidden',
                                                    value: 'hidden',
                                                    type: 'boolean'
                                                },
                                                state: true
                                            }
                                        ]
                                    },
                                    {
                                        name: 'check action for edit mode',
                                        trigger: {
                                            type: 'simple',
                                            simple: {
                                                show: true,
                                                when: 'action',
                                                eq: 'edit'
                                            }
                                        },
                                        actions: [
                                            {
                                                name: 'set yes as default value',
                                                type: 'value',
                                                value: '// if (moment(data.start_date).isAfter(moment(), \'day\')) {\r\n//     value = \'yes\';\r\n// }'
                                            }
                                        ]
                                    },
                                    {
                                        name: 'check for past or current date',
                                        trigger: {
                                            type: 'javascript',
                                            javascript: 'return moment(data.start_date).isSameOrBefore(moment(new Date()), \'day\')'
                                        },
                                        actions: [
                                            {
                                                name: 'reset the radio button',
                                                type: 'value',
                                                value: 'value = \'\';'
                                            }
                                        ]
                                    },
                                    {
                                        name: 'check if snap date is future date',
                                        trigger: {
                                            type: 'javascript',
                                            javascript: 'if(data.action === \'edit\' && moment(data.initialApiDataSnap.start_date).isAfter(moment(), \'day\')) {\r\n    result = true\r\n} else {\r\n    result = false\r\n}\r\nreturn result'
                                        },
                                        actions: [
                                            {
                                                name: 'hide radio',
                                                type: 'property',
                                                property: {
                                                    label: 'Hidden',
                                                    value: 'hidden',
                                                    type: 'boolean'
                                                },
                                                state: true
                                            }
                                        ]
                                    }
                                ],
                                type: 'radio',
                                input: true
                            }
                        ],
                        size: 'md',
                        width: 4,
                        offset: 0,
                        push: 0,
                        pull: 0,
                        currentWidth: 4
                    },
                    {
                        label: 'initialApiDataSnap',
                        hidden: true,
                        tableView: false,
                        clearOnHide: false,
                        key: 'initialApiDataSnap',
                        type: 'datamap',
                        input: true,
                        valueComponent: {
                            type: 'textfield',
                            key: 'value',
                            label: 'Value',
                            input: true,
                            hideLabel: true,
                            tableView: true
                        },
                        size: 'md',
                        currentWidth: 6,
                        components: [],
                        width: 6,
                        offset: 0,
                        push: 0,
                        pull: 0
                    }
                ]
            });
        };
        // update the builderInfo of custom omponent with basic config (informing formio to place this component in builder view)
        dateComponentRef.builderInfo = {
            title: 'Date Range',
            group: 'advanced',
            icon: 'calendar',
            // weight: 0,
            documentation: '',
            schema: dateComponentRef.schema()
        };
        // use addComponent method provided by formio to inject the custom component in formio
        Components.addComponent('DateFieldComponent', dateComponentRef);
        const editForm = Components.components.panel.editForm;
        const form = editForm();
        this.id = this.route.parent.snapshot.paramMap.get('id');
        this.isEditPage = !!this.id;
        console.log(`Edit Page: ${this.isEditPage}`);
        Components.components.panel.editForm = function () {
            const tabs1 = Utils.getComponent(form.components, 'tabs', true);
            tabs1.components[0].components[4].data.values.push({
                label: 'Gray',
                value: 'gray'
            });
            tabs1.components[0].components[4].data.values.push({
                label: 'Light Gray',
                value: 'lightGray'
            });
            tabs1.components[0].components[4].data.values.push({
                label: 'Brown',
                value: 'brown'
            });
            tabs1.components[0].components[4].data.values.push({
                label: 'Greenish Brown',
                value: 'greenishBrown'
            });
            tabs1.components[0].components[4].data.values.push({
                label: 'Marron',
                value: 'marron'
            });
            tabs1.components[0].components[4].data.values.push({
                label: 'Light Blue',
                value: 'lightBlue'
            });
            return form;
        };
        this.getCurrentFormData();
        this.getCurrentBasicData();
        this.loadForm();
        // SOcket start
        console.log('Socket Connection');
        this.socketAdapter.onConnect().subscribe(str => {
            // alert(this.id)
            console.log(str);
            console.log(`Socket ID: ${this.id}`);
            this.socketAdapter.joinRoom({
                roomId: this.id,
                roomType: 'page',
                user: {
                    id: this.logedInUser.id,
                    firstname: this.logedInUser.firstname,
                    lastname: this.logedInUser.lastname
                }
            });
        });
        this.socketAdapter.receivePageData().subscribe(data => {
            this.form = data.form;
            this.updatedfrom = data.form;
            const name = `${data.user.firstname} ${data.user.lastname}`;
            // console.log(data.user)
            this.updateNotification.emit(`${name} has made changes`);
            console.log(`Socket: ${name} has made changes`);
        });
        this.socketAdapter.onReConnect().subscribe(() => {
            this.socketAdapter.joinRoom({
                roomId: this.id,
                // roomId: 'page-1',
                roomType: 'page',
                user: {
                    id: this.logedInUser.id,
                    firstname: this.logedInUser.firstname,
                    lastname: this.logedInUser.lastname
                }
            });
        });
        this.socketAdapter.onlineEditPageUsers().subscribe(data => {
            // console.log('online', data)
            this.onlineUserList.emit(data);
            console.log(`Socket: Edit Users: ${data.roomId}`);
            console.log(data);
        });
    }
    onChangeFormType(event) {
        if (this.formData.templatejson) {
            const templatejson = typeof this.formData.templatejson === 'string'
                ? JSON.parse(this.formData.templatejson)
                : this.formData.templatejson;
            templatejson.display = event.value;
            this.selectedDisplayType = event.value;
            this.form = templatejson;
            this.formData.templatejson = JSON.stringify(templatejson);
            this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(this.form, null, 4)));
        }
    }
    getCurrentFormData() {
        this.pageBuilderAddService.currentFormData.subscribe((data) => {
            this.formData = data;
            this.isValidFormDetails =
                this.formData.description !== '' && this.formData.pagename !== '' && this.formData.pagetype !== '';
            if (this.formData.templatejson) {
                this.form =
                    typeof this.formData.templatejson === 'string'
                        ? JSON.parse(this.formData.templatejson)
                        : this.formData.templatejson;
                if (!this.form.platformApi) {
                    this.form.platformApi = this.environment.apiHost;
                }
                this.selectedDisplayType =
                    (this.formData.templatejson && this.formData.templatejson.display) || 'form';
                this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(this.form, null, 4)));
            }
            else {
                this.form = { components: [] };
            }
            if (this.formData.templateins || this.formData.pageurl) {
                this.patchManualForm();
            }
        });
    }
    getCurrentBasicData() {
        this.pageBuilderAddService.currentBasicData.subscribe((data) => {
            if (data) {
                if (this.formData) {
                    this.formData.pagename = data.pagename;
                    this.formData.pagetype = data.pagetype;
                    this.formData.description = data.description;
                    this.formData.display = data.display;
                    this.form.display = data.display;
                }
            }
        });
    }
    ngOnDestroy() {
        console.log('Design Page Destroyed');
        // this.socketAdapter.leaveRoom({
        //   roomId: this.id,
        //   // roomId: 'page-1',
        //   roomType: 'page',
        //   user: {
        //     id: this.logedInUser?.id,
        //     firstname: this.logedInUser?.firstname,
        //     lastname: this.logedInUser?.lastname
        //   }
        // });
    }
    loadForm() {
        this.manualForm = this.formBuilder.group({
            routingURL: ['', Validators.required],
            initParam: ['', Validators.required]
        });
    }
    patchManualForm() {
        this.manualForm.patchValue({
            routingURL: this.formData.pageurl ? this.formData.pageurl : '',
            initParam: this.formData.templateins ? this.formData.templateins : ''
        });
    }
    resetForm = () => {
        this.router.navigate([this.isEditPage ? '../../../list' : '../../list'], { relativeTo: this.route });
    };
    goToDetailPage() {
        this.router.navigate(['../grid-field'], { relativeTo: this.route });
    }
    closePopup() {
        this.dialogRef.close();
    }
    previewForm() {
        this.dialogRef = this.dialog.open(this.callPopup, {
            width: '100%',
            height: '90%'
        });
        this.jsonForm = this.form;
    }
    formSubmit = publish => {
        const formDetails = this.setFormDetails();
        if (formDetails.id) {
            this.patchPage(formDetails, publish);
        }
        else {
            this.createPage(formDetails, publish);
        }
    };
    patchPage(formDetails, publish) {
        const createPage = this.localstorage.getObj('CREATE PAGE');
        formDetails.published = publish;
        if (createPage) {
            this.formData.id = formDetails.activeVersion.id;
        }
        this.pageBuilderService.updatePageVersion(formDetails.id, formDetails, createPage).subscribe(result => {
            if (result?.data && Object.keys(result?.data).length) {
                this.conditionCheckPatch(result, publish);
                this.saveAsset(formDetails?.pageid || formDetails.activeVersion.pageid, formDetails?.id);
                if (publish) {
                    this.router.navigate([
                        `pages/page-design/versions/${formDetails?.pageid || formDetails.activeVersion.pageid}`
                    ]);
                    this.alert.success(`The Version ${formDetails.version || formDetails.activeVersion.version} is published successfully`);
                }
                else {
                    this.alert.success('Page saved successfully');
                }
            }
        }, error => {
            this.alert.error('Error Occured', error);
        });
    }
    conditionCheckPatch(result, publish) {
        const id = result?.data.id ? result?.data.id : '';
        if (!this.id && publish) {
            if (id) {
                this.router.navigate(['../edit', id], { relativeTo: this.route });
            }
        }
    }
    createPage(formDetails, publish) {
        formDetails.published = publish;
        this.pageBuilderAddService.createPage(formDetails).subscribe(result => {
            const data = result['data'];
            if (data && Object.keys(data).length) {
                const pageId = data?.id || '';
                if (!this.id) {
                    if (pageId) {
                        this.router.navigate(['../edit', pageId], { relativeTo: this.route });
                    }
                }
                this.saveAsset(pageId, data.activeVersion.id);
                if (publish) {
                    this.router.navigate([`pages/page-design/versions/${pageId || formDetails.activeVersion.pageid}`]);
                    this.alert.success(`The Version ${formDetails.version || data.activeVersion.version} is published successfully`);
                }
                else {
                    this.alert.success('Page saved successfully');
                }
            }
        }, error => {
            this.alert.error('Error Occured', error);
        });
    }
    setFormDetails() {
        const formDetails = this.formData;
        if (this.formData.pagetype === 'MAF') {
            const manualData = this.manualForm.getRawValue();
            formDetails.pageurl = manualData.routingURL;
            formDetails.templateins = manualData.initParam;
        }
        else if (this.formData.pagetype === 'FFP') {
            const gridConfigForm = this.gridConfig.gridConfigFormArray[0];
            const formComponents = (this.updatedfrom || JSON.parse(formDetails.templatejson)).components.filter(a => a.key !== 'submit');
            this.gridConfig.gridConfigFormArray = formComponents.map(a => ({
                ...gridConfigForm,
                header: a.label,
                columnDef: a.key
            }));
            this.gridConfig.gridTitle = this.formData.pagename;
            formDetails.templatejson = JSON.stringify(this.updatedfrom);
            formDetails.gridconfig = JSON.stringify(this.gridConfig);
        }
        else {
            if (this.updatedfrom) {
                formDetails.templatejson = JSON.stringify(this.updatedfrom);
            }
            else {
                formDetails.templatejson = this.formData && this.formData.templatejson ? this.formData.templatejson : null;
            }
        }
        if (this.id) {
            formDetails.id = this.id;
        }
        return formDetails;
    }
    loadFields(componentsData) {
        for (const component of componentsData) {
            if (component?.label &&
                component?.label !== 'Columns' &&
                component?.label !== 'Table' &&
                component?.label !== 'Panel') {
                this.allFields.push({
                    label: component?.label,
                    field: component?.key
                });
            }
            // check inner data
            if (component?.columns) {
                this.loadFields(component?.columns);
            }
            else if (component?.components) {
                this.loadFields(component?.components);
            }
        }
    }
    onChange(event) {
        this.jsonElement.nativeElement.innerHTML = '';
        this.updatedfrom = event.form;
        this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
        if (event.type === 'saveComponent' || event.type === 'deleteComponent') {
            this.socketAdapter.sendPageData({
                roomId: this.id,
                // roomId: 'page-1',
                form: this.updatedfrom,
                user: this.logedInUser
            });
        }
    }
    saveAsset(pageId, versionId) {
        this.allFields = [];
        const formDetails = this.formData;
        const fields = JSON.parse(formDetails.templatejson);
        this.loadFields(fields.components);
        const fieldArr = this.allFields.map(item => item.field);
        const assetNameArr = this.assetList && this.assetList.length ? this.assetList.map(item => item.assetname) : [];
        const activeArr = [];
        const inactiveArr = [];
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
        const newAssetArr = fieldArr.filter(x => !assetNameArr.includes(x));
        if (newAssetArr.length) {
            this.setActiveAsset(newAssetArr, pageId, versionId).forEach(asset => {
                activeArr.push(asset);
            });
        }
        const assetData = [...activeArr, ...inactiveArr];
        this.getMenuList(assetData, pageId, versionId);
    }
    setActiveAsset(newAssetArr, pageId, versionId) {
        const createPage = this.localstorage.getObj('CREATE PAGE');
        const versionid = this.createDynamicPage ? versionId : this.formData.id;
        const activeArr = [];
        newAssetArr.forEach(item => {
            const getFieldData = this.allFields.find(res => res.field === item);
            const data = {
                assetname: item,
                assetpath: this.formData.pagename + '.' + item,
                assettype: '45F',
                dashboardtemplatejson: null,
                description: getFieldData && getFieldData.label ? getFieldData.label : null,
                displayname: getFieldData && getFieldData.label ? getFieldData.label : null,
                icon: null,
                id: null,
                pageid: pageId,
                parentassetid: null,
                url: null,
                isactive: createPage || this.formData.isactive,
                versionid: String(versionid)
            };
            activeArr.push(data);
        });
        return activeArr;
    }
    getMenuList(assetData, pageId, versionId) {
        const pageid = this.createDynamicPage ? pageId : Number(this.formData.pageid);
        const versionid = this.createDynamicPage ? versionId : Number(this.formData.id);
        this.pageBuilderAddService.createAssetByVersion(pageid, versionid, assetData).subscribe(() => {
            // This is intentional
        });
    }
    checkBasicInfo() {
        this.id = this.route.parent.snapshot.paramMap.get('id');
        this.basicPageInformation = this.localstorage.getObj('PAGEDESIGN_BASICINFO');
        if (!this.id) {
            const validation = this.validationPage();
            if (!validation && !this.selectedPage) {
                this.router.navigate(['/pages/page-design/add/basic-info'], { relativeTo: this.route });
                return this.alert.error('Please fill in all the required fields.');
            }
        }
    }
    validationPage() {
        if (!this.basicPageInformation.pagename ||
            !this.basicPageInformation.pagetype ||
            !this.basicPageInformation.description) {
            return false;
        }
        else {
            return true;
        }
    }
    copyText() {
        this.clipboard.copy(this.jsonElement.nativeElement.innerText);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DesignPageComponent, deps: [{ token: i0.Injector }, { token: i1.UntypedFormBuilder }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: i3.AlertService }, { token: i4.MatDialog }, { token: i5.DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DesignPageComponent, selector: "app-design-page", inputs: { basicInfo: "basicInfo" }, outputs: { updateNotification: "updateNotification", onlineUserList: "onlineUserList" }, viewQueries: [{ propertyName: "jsonElement", first: true, predicate: ["json"], descendants: true, static: true }, { propertyName: "codeElement", first: true, predicate: ["code"], descendants: true, static: true }, { propertyName: "callPopup", first: true, predicate: ["callPopup"], descendants: true }], ngImport: i0, template: "<div class=\"page-design-basic-info\">\r\n  <p-card styleClass=\"rbac-card w-100 mb-2\">\r\n    <div class=\"strip_head page-designer toggleleft\">\r\n      <span class=\"report_head font-weight-bold\">Design Page</span>\r\n    </div>\r\n    <div class=\"p-fluid p-formgrid p-grid\">\r\n      <div class=\"p-field p-col-12 p-md-4\">\r\n        <label for=\"pagetype\" class=\"referral-form-labels\"\r\n          >Display Type\r\n          <span class=\"requiredfield text-danger\">*</span>\r\n        </label>\r\n        <p-dropdown\r\n          [options]=\"displayType\"\r\n          placeholder=\"Select Form Type\"\r\n          id=\"pagetype\"\r\n          optionLabel=\"name\"\r\n          optionValue=\"value\"\r\n          [(ngModel)]=\"selectedDisplayType\"\r\n          (onChange)=\"onChangeFormType($event)\">\r\n        </p-dropdown>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-2\">\r\n      <div class=\"col-12\">\r\n        <form-builder [form]=\"form\" (change)=\"onChange($event)\" [options]=\"options\"></form-builder>\r\n      </div>\r\n      <div class=\"col-12 text-right\">\r\n        <button\r\n          class=\"pull-right mb-2 btn btn-primary btncommon\"\r\n          *showField='\"PAG_DES_DES_PAG_PREVIEW\"'\r\n          (click)=\"previewForm()\">\r\n          Preview\r\n        </button>\r\n        <button class=\"pull-right mb-2 mr-2 btn btn-cancel\" *showField='\"PAG_DES_DES_PAG_CANCEL\"' (click)=\"resetForm()\">\r\n          Cancel\r\n        </button>\r\n        <button\r\n          class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\"\r\n          *showField='\"PAG_DES_DES_PAG_PREVIOUS\"'\r\n          (click)=\"goToDetailPage()\">\r\n          Previous\r\n        </button>\r\n        <button\r\n          class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\"\r\n          [disabled]=\"!isValidFormDetails\"\r\n          *showField='\"PAG_DES_DES_PAG_PUBLISH\"'\r\n          (click)=\"formSubmit(true)\">\r\n          Publish\r\n        </button>\r\n        <button\r\n          class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\"\r\n          [disabled]=\"!isValidFormDetails\"\r\n          *showField='\"PAG_DES_DES_PAG_SAVE\"'\r\n          (click)=\"formSubmit(false)\">\r\n          Save\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-2\" *ngIf=\"formData.pagetype === 'MAF'\">\r\n      <form [formGroup]=\"manualForm\" autocomplete=\"off\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <mat-form-field class=\"\">\r\n              <mat-label>URL For Routing</mat-label>\r\n              <input\r\n                type=\"text\"\r\n                matInput\r\n                formControlName=\"routingURL\"\r\n                appTitleCase\r\n                placeholder=\"URL For Routing\"\r\n                required />\r\n              <mat-error class=\"firstname-error\" *ngIf=\"manualForm.controls['routingURL'].invalid\">\r\n                Please enter URL For Routing</mat-error\r\n              >\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-12\">\r\n            <mat-form-field class=\"\">\r\n              <mat-label>Init Parameter</mat-label>\r\n              <input\r\n                type=\"text\"\r\n                matInput\r\n                formControlName=\"initParam\"\r\n                appTitleCase\r\n                placeholder=\"Init Parameter\"\r\n                required />\r\n              <mat-error class=\"firstname-error\" *ngIf=\"manualForm.controls['initParam'].invalid\">\r\n                Please enter Init Parameter</mat-error\r\n              >\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <ng-template #callPopup>\r\n      <h2 matDialogTitle>Preview</h2>\r\n      <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <formio [form]=\"jsonForm\"></formio>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"pull-right\">\r\n        <button (click)=\"closePopup()\" class=\"btn btn-cancel mr-2 mb-2\">Close</button>\r\n        <!-- btn btn-sec -->\r\n      </div>\r\n    </ng-template>\r\n    <div class=\"mt-3\">\r\n      <h6 class=\"text-left\">As JSON Schema</h6>\r\n      <div class=\"menuIcons\">\r\n        <span class=\"material-symbols-outlined\" role=\"button\" (click)=\"copyText()\" title=\"Copy JSON Schema\"> content_copy </span>\r\n      </div>\r\n      <div class=\"well jsonviewer p-3\">\r\n        <pre id=\"json\" class=\"mb-0\"><code class=\"language-json\" #json></code></pre>\r\n      </div>\r\n    </div>\r\n  </p-card>\r\n</div>\r\n<router-outlet></router-outlet>\r\n", styles: ["table.table tbody tr td{padding:0!important}:host ::ng-deep form-builder .formio .card,:host ::ng-deep form-builder .formio .p-card{background-color:var(--bg-light);border-color:var(--table-border)}:host ::ng-deep form-builder .formio .card .card-header,:host ::ng-deep form-builder .formio .p-card .card-header{background-color:var(--background-color);border-color:var(--table-border)}:host ::ng-deep form-builder .formio .card .card-header .builder-group-button,:host ::ng-deep form-builder .formio .p-card .card-header .builder-group-button{background-color:var(--background-color);color:var(--text-dark)}:host ::ng-deep .component-btn-group .component-settings-button{color:var(--text-dark)}.jsonviewer{background:var(--background-color)}.jsonviewer pre{font-size:var(--font-16)}.jsonviewer .language-json{color:var(--text-dark)}\n"], dependencies: [{ kind: "directive", type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.RouterOutlet, selector: "router-outlet", inputs: ["name"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }, { kind: "component", type: i7.FormioComponent, selector: "formio" }, { kind: "component", type: i7.FormBuilderComponent, selector: "form-builder", inputs: ["form", "options", "formbuilder", "noeval", "refresh", "rebuild"], outputs: ["change"] }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i8.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i9.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i9.MatLabel, selector: "mat-label" }, { kind: "directive", type: i9.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i4.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "component", type: i10.Dropdown, selector: "p-dropdown", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }, { kind: "component", type: i11.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { kind: "directive", type: i12.ShowFieldDirective, selector: "[showField]", inputs: ["showField"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DesignPageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-design-page', template: "<div class=\"page-design-basic-info\">\r\n  <p-card styleClass=\"rbac-card w-100 mb-2\">\r\n    <div class=\"strip_head page-designer toggleleft\">\r\n      <span class=\"report_head font-weight-bold\">Design Page</span>\r\n    </div>\r\n    <div class=\"p-fluid p-formgrid p-grid\">\r\n      <div class=\"p-field p-col-12 p-md-4\">\r\n        <label for=\"pagetype\" class=\"referral-form-labels\"\r\n          >Display Type\r\n          <span class=\"requiredfield text-danger\">*</span>\r\n        </label>\r\n        <p-dropdown\r\n          [options]=\"displayType\"\r\n          placeholder=\"Select Form Type\"\r\n          id=\"pagetype\"\r\n          optionLabel=\"name\"\r\n          optionValue=\"value\"\r\n          [(ngModel)]=\"selectedDisplayType\"\r\n          (onChange)=\"onChangeFormType($event)\">\r\n        </p-dropdown>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-2\">\r\n      <div class=\"col-12\">\r\n        <form-builder [form]=\"form\" (change)=\"onChange($event)\" [options]=\"options\"></form-builder>\r\n      </div>\r\n      <div class=\"col-12 text-right\">\r\n        <button\r\n          class=\"pull-right mb-2 btn btn-primary btncommon\"\r\n          *showField='\"PAG_DES_DES_PAG_PREVIEW\"'\r\n          (click)=\"previewForm()\">\r\n          Preview\r\n        </button>\r\n        <button class=\"pull-right mb-2 mr-2 btn btn-cancel\" *showField='\"PAG_DES_DES_PAG_CANCEL\"' (click)=\"resetForm()\">\r\n          Cancel\r\n        </button>\r\n        <button\r\n          class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\"\r\n          *showField='\"PAG_DES_DES_PAG_PREVIOUS\"'\r\n          (click)=\"goToDetailPage()\">\r\n          Previous\r\n        </button>\r\n        <button\r\n          class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\"\r\n          [disabled]=\"!isValidFormDetails\"\r\n          *showField='\"PAG_DES_DES_PAG_PUBLISH\"'\r\n          (click)=\"formSubmit(true)\">\r\n          Publish\r\n        </button>\r\n        <button\r\n          class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\"\r\n          [disabled]=\"!isValidFormDetails\"\r\n          *showField='\"PAG_DES_DES_PAG_SAVE\"'\r\n          (click)=\"formSubmit(false)\">\r\n          Save\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-2\" *ngIf=\"formData.pagetype === 'MAF'\">\r\n      <form [formGroup]=\"manualForm\" autocomplete=\"off\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <mat-form-field class=\"\">\r\n              <mat-label>URL For Routing</mat-label>\r\n              <input\r\n                type=\"text\"\r\n                matInput\r\n                formControlName=\"routingURL\"\r\n                appTitleCase\r\n                placeholder=\"URL For Routing\"\r\n                required />\r\n              <mat-error class=\"firstname-error\" *ngIf=\"manualForm.controls['routingURL'].invalid\">\r\n                Please enter URL For Routing</mat-error\r\n              >\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-12\">\r\n            <mat-form-field class=\"\">\r\n              <mat-label>Init Parameter</mat-label>\r\n              <input\r\n                type=\"text\"\r\n                matInput\r\n                formControlName=\"initParam\"\r\n                appTitleCase\r\n                placeholder=\"Init Parameter\"\r\n                required />\r\n              <mat-error class=\"firstname-error\" *ngIf=\"manualForm.controls['initParam'].invalid\">\r\n                Please enter Init Parameter</mat-error\r\n              >\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <ng-template #callPopup>\r\n      <h2 matDialogTitle>Preview</h2>\r\n      <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <formio [form]=\"jsonForm\"></formio>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"pull-right\">\r\n        <button (click)=\"closePopup()\" class=\"btn btn-cancel mr-2 mb-2\">Close</button>\r\n        <!-- btn btn-sec -->\r\n      </div>\r\n    </ng-template>\r\n    <div class=\"mt-3\">\r\n      <h6 class=\"text-left\">As JSON Schema</h6>\r\n      <div class=\"menuIcons\">\r\n        <span class=\"material-symbols-outlined\" role=\"button\" (click)=\"copyText()\" title=\"Copy JSON Schema\"> content_copy </span>\r\n      </div>\r\n      <div class=\"well jsonviewer p-3\">\r\n        <pre id=\"json\" class=\"mb-0\"><code class=\"language-json\" #json></code></pre>\r\n      </div>\r\n    </div>\r\n  </p-card>\r\n</div>\r\n<router-outlet></router-outlet>\r\n", styles: ["table.table tbody tr td{padding:0!important}:host ::ng-deep form-builder .formio .card,:host ::ng-deep form-builder .formio .p-card{background-color:var(--bg-light);border-color:var(--table-border)}:host ::ng-deep form-builder .formio .card .card-header,:host ::ng-deep form-builder .formio .p-card .card-header{background-color:var(--background-color);border-color:var(--table-border)}:host ::ng-deep form-builder .formio .card .card-header .builder-group-button,:host ::ng-deep form-builder .formio .p-card .card-header .builder-group-button{background-color:var(--background-color);color:var(--text-dark)}:host ::ng-deep .component-btn-group .component-settings-button{color:var(--text-dark)}.jsonviewer{background:var(--background-color)}.jsonviewer pre{font-size:var(--font-16)}.jsonviewer .language-json{color:var(--text-dark)}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.UntypedFormBuilder }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.AlertService }, { type: i4.MatDialog }, { type: i5.DataStoreService }]; }, propDecorators: { jsonElement: [{
                type: ViewChild,
                args: ['json', { static: true }]
            }], codeElement: [{
                type: ViewChild,
                args: ['code', { static: true }]
            }], basicInfo: [{
                type: Input
            }], callPopup: [{
                type: ViewChild,
                args: ['callPopup']
            }], updateNotification: [{
                type: Output
            }], onlineUserList: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzaWduLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvcGFnZS1idWlsZGVyL3NyYy9saWIvcGljcy1wYWdlYnVpbGRlci9wYWdlLWJ1aWxkZXIvcGFnZS1idWlsZGVyLWFkZC9kZXNpZ24tcGFnZS9kZXNpZ24tcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9wYWdlLWJ1aWxkZXIvc3JjL2xpYi9waWNzLXBhZ2VidWlsZGVyL3BhZ2UtYnVpbGRlci9wYWdlLWJ1aWxkZXItYWRkL2Rlc2lnbi1wYWdlL2Rlc2lnbi1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsU0FBUyxFQUVULFlBQVksRUFFWixLQUFLLEVBR0wsTUFBTSxFQUVOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdDLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN6RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNyRixPQUFPLFdBQVcsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRCxPQUFPLFVBQVUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1B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QkFBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUNFLFdBQVc7c0JBQS9DLFNBQVM7dUJBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFHMUIsU0FBUztzQkFBakIsS0FBSztnQkFNa0IsU0FBUztzQkFBaEMsU0FBUzt1QkFBQyxXQUFXO2dCQUNaLGtCQUFrQjtzQkFBM0IsTUFBTTtnQkFDRyxjQUFjO3NCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpcGJvYXJkIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NsaXBib2FyZCc7XHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdG9yLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVbnR5cGVkRm9ybUJ1aWxkZXIsIFVudHlwZWRGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbXBvbmVudHMsIFV0aWxzIH0gZnJvbSAnZm9ybWlvanMnO1xyXG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9zZXJ2aWNlcy9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL3NlcnZpY2VzL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2FsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL3NlcnZpY2VzL2xvY2FsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYWdlQnVpbGRlckFkZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9zZXJ2aWNlcy9wYWdlLWJ1aWxkZXItYWRkLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYWdlQnVpbGRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9zZXJ2aWNlcy9wYWdlLWJ1aWxkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFNvY2tldEFkYXB0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvc2VydmljZXMvc29ja2V0LWFkYXB0ZXIuc2VydmVyJztcclxuaW1wb3J0IGRpc3BsYXlUeXBlIGZyb20gJy4uL0Bjb3JlL2Rpc3BsYXlUeXBlLmpzb24nO1xyXG5pbXBvcnQgZ3JpZENvbmZpZyBmcm9tICcuLi9AY29yZS9ncmlkQ29uZmlnLmpzb24nO1xyXG5pbXBvcnQgeyBvcHRpb25zIH0gZnJvbSAnLi4vQGNvcmUvb3B0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1kZXNpZ24tcGFnZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Rlc2lnbi1wYWdlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kZXNpZ24tcGFnZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZXNpZ25QYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIG1hbnVhbEZvcm06IFVudHlwZWRGb3JtR3JvdXA7XHJcbiAgcmVmcmVzaEZvcm06IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG4gIGZvcm1EYXRhOiBhbnk7XHJcbiAgcHVibGljIGZvcm06IGFueTtcclxuICBpc1ZhbGlkRm9ybURldGFpbHM6IGJvb2xlYW47XHJcbiAgaWQgPSAnJztcclxuICB1cGRhdGVkZnJvbTogYW55O1xyXG4gIEBWaWV3Q2hpbGQoJ2pzb24nLCB7IHN0YXRpYzogdHJ1ZSB9KSBqc29uRWxlbWVudD86IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnY29kZScsIHsgc3RhdGljOiB0cnVlIH0pIGNvZGVFbGVtZW50PzogRWxlbWVudFJlZjtcclxuICBwdWJsaWMgb3B0aW9uczogYW55O1xyXG4gIGNoYW5nZWRGb3JtRGF0YTogYW55O1xyXG4gIEBJbnB1dCgpIGJhc2ljSW5mbzogYW55O1xyXG4gIGFzc2V0TGlzdDogYW55O1xyXG4gIGFsbEZpZWxkczogYW55W10gPSBbXTtcclxuICBqc29uRm9ybTogYW55O1xyXG4gIGxvZ2VkSW5Vc2VyOiBhbnk7XHJcbiAgaXNFZGl0UGFnZSA9IGZhbHNlO1xyXG4gIEBWaWV3Q2hpbGQoJ2NhbGxQb3B1cCcpIGNhbGxQb3B1cDogVGVtcGxhdGVSZWY8YW55PjtcclxuICBAT3V0cHV0KCkgdXBkYXRlTm90aWZpY2F0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIG9ubGluZVVzZXJMaXN0ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgcHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUZW1wbGF0ZVJlZjxhbnk+PjtcclxuICBzZWxlY3RlZFBhZ2U6IGFueTtcclxuICBwYWdlQnVpbGRlckFkZFNlcnZpY2U6IFBhZ2VCdWlsZGVyQWRkU2VydmljZTtcclxuICBzb2NrZXRBZGFwdGVyOiBTb2NrZXRBZGFwdGVyU2VydmljZTtcclxuICBsb2NhbHN0b3JhZ2U6IExvY2FsU2VydmljZTtcclxuICBiYXNpY1BhZ2VJbmZvcm1hdGlvbjogYW55O1xyXG4gIHBhZ2VCdWlsZGVyU2VydmljZTogUGFnZUJ1aWxkZXJTZXJ2aWNlO1xyXG4gIGNyZWF0ZUR5bmFtaWNQYWdlOiBib29sZWFuO1xyXG4gIGdyaWRDb25maWc6IGFueTtcclxuICBkaXNwbGF5VHlwZTogYW55O1xyXG4gIHNlbGVjdGVkRGlzcGxheVR5cGU6IGFueTtcclxuICBjbGlwYm9hcmQ6IENsaXBib2FyZDtcclxuICBlbnZpcm9ubWVudDogYW55O1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogVW50eXBlZEZvcm1CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBhbGVydDogQWxlcnRTZXJ2aWNlLFxyXG4gICAgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgcHJpdmF0ZSBfc3RvcmVzZXJ2aWNlOiBEYXRhU3RvcmVTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLnBhZ2VCdWlsZGVyQWRkU2VydmljZSA9IGluamVjdG9yLmdldDxQYWdlQnVpbGRlckFkZFNlcnZpY2U+KFBhZ2VCdWlsZGVyQWRkU2VydmljZSk7XHJcbiAgICB0aGlzLnNvY2tldEFkYXB0ZXIgPSBpbmplY3Rvci5nZXQ8U29ja2V0QWRhcHRlclNlcnZpY2U+KFNvY2tldEFkYXB0ZXJTZXJ2aWNlKTtcclxuICAgIHRoaXMuY2xpcGJvYXJkID0gaW5qZWN0b3IuZ2V0PENsaXBib2FyZD4oQ2xpcGJvYXJkKTtcclxuICAgIHRoaXMubG9jYWxzdG9yYWdlID0gaW5qZWN0b3IuZ2V0PExvY2FsU2VydmljZT4oTG9jYWxTZXJ2aWNlKTtcclxuICAgIHRoaXMucGFnZUJ1aWxkZXJBZGRTZXJ2aWNlLmN1cnJlbnRQYWdlVHlwZS5zdWJzY3JpYmUocGFnZSA9PiAodGhpcy5zZWxlY3RlZFBhZ2UgPSBwYWdlKSk7XHJcbiAgICB0aGlzLnBhZ2VCdWlsZGVyU2VydmljZSA9IGluamVjdG9yLmdldDxQYWdlQnVpbGRlclNlcnZpY2U+KFBhZ2VCdWlsZGVyU2VydmljZSk7XHJcbiAgICB0aGlzLmNyZWF0ZUR5bmFtaWNQYWdlID0gdGhpcy5sb2NhbHN0b3JhZ2UuZ2V0T2JqKCdDUkVBVEUgUEFHRScpIHx8IGZhbHNlO1xyXG4gICAgdGhpcy5ncmlkQ29uZmlnID0gZ3JpZENvbmZpZztcclxuICAgIHRoaXMuZGlzcGxheVR5cGUgPSBkaXNwbGF5VHlwZTtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB0aGlzLl9zdG9yZXNlcnZpY2UuY3VycmVudFN0b3JlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnQgPSByZXNbJ1JCQUNPUkcnXS5lbnZpcm9ubWVudDtcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRQYWdlKTtcclxuICAgIHRoaXMuY2hlY2tCYXNpY0luZm8oKTtcclxuICAgIHRoaXMubG9nZWRJblVzZXIgPSB0aGlzLmxvY2Fsc3RvcmFnZS5nZXRPYmooJ3VzZXInKTtcclxuICAgIC8vIG1ha2UgYSByZXBsaWNhIG9mIEZvcm1pbyBjb2x1bW4gY29tcG9uZW50IChjb2x1bW4gY29tcG9uZW50IGlzIHN0b2NrIGNvbXBvbmVudCBpbiBsYXlvdXQgZ3JvdXAgb2YgZm9ybWlvKVxyXG4gICAgY29uc3QgY3VzdG9tRGF0ZUNvbXBvbmVudCA9IENvbXBvbmVudHMuY29tcG9uZW50cy5jb2x1bW5zO1xyXG4gICAgLy8gdXNlIHRoZSBjdXN0b21EYXRlQ29tcG9uZW50IGNyZWF0ZWQgZWFybGllciB0byBpbmhlcml0IHRoZSBmb3JtaW8gY29tcG9uZW50IHByb3RvdHlwZSBwcm9wZXJ0aWVzXHJcbiAgICBmdW5jdGlvbiBkYXRlQ29tcG9uZW50UmVmKGNvbXBvbmVudCwgb3B0aW9ucywgZGF0YSkge1xyXG4gICAgICBjdXN0b21EYXRlQ29tcG9uZW50LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGNvbXBvbmVudCwgb3B0aW9ucywgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGF0ZUNvbXBvbmVudFJlZi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGN1c3RvbURhdGVDb21wb25lbnQucHJvdG90eXBlKTtcclxuXHJcbiAgICAvLyBhc3NpZ24gdGhlIHNjaGVtYSAoY29uZmlndXJhdGlvbikgdG8gdGhlIGRhdGVDb21wb25lbnRSZWYgd2l0aCB0aGUgSlNPTiBzY2hlbWEgb2YgY3VzdG9tIGNvbXBvbmVudCAoZGF0ZSByYW5nZSBjb21wb25lbnQgaW4gdGhpcyBjYXNlKVxyXG4gICAgZGF0ZUNvbXBvbmVudFJlZi5zY2hlbWEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiBjdXN0b21EYXRlQ29tcG9uZW50LnNjaGVtYSh7XHJcbiAgICAgICAga2V5OiAnZGF0ZVJhbmdlJyxcclxuICAgICAgICB0eXBlOiAnY29sdW1ucycsXHJcbiAgICAgICAgaW5wdXQ6IGZhbHNlLFxyXG4gICAgICAgIHRhYmxlVmlldzogZmFsc2UsXHJcbiAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBjb21wb25lbnRzOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdDb2x1bW5zJyxcclxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTdGFydCBEYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiAnTU0vZGQveXl5eScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiAncHItMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlVmlldzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVQaWNrZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlV2Vla2VuZHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVXZWVrZGF5czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluRGF0ZTogJ21vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoXFwnTU0vREQvWVlZWVxcJyk7J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVUaW1lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdERhdGU6ICdtb21lbnQoKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlTWluRGF0ZUlucHV0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVNYXhEYXRlSW5wdXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdzdGFydF9kYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9naWM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2hlY2sgaWYgcmFkaW8gaXMgbm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2ltcGxlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltcGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVuOiAncmFkaW8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVxOiAnbm8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVzZXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd2YWx1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICBpZihtb21lbnQoZGF0YS5zdGFydF9kYXRlKS5pc0FmdGVyKG1vbWVudCgpLCBcXCdkYXlcXCcpKSB7XFxyXFxuICAgIHZhbHVlID0gbW9tZW50KCk7XFxyXFxuICB9IGVsc2Uge1xcclxcbiAgICAgIHZhbHVlID0gZGF0YS5zdGFydF9kYXRlXFxyXFxuICB9J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdzdGFydERhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYXRldGltZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY2FsZW5kYXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlJblRpbWV6b25lOiAndmlld2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU6ICdlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlTG9jYWxlU2V0dGluZ3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93SW5wdXQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogJ3NpbmdsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlVGltZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbm9DYWxlbmRhcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiAnTU0vZGQveXl5eScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG91ckluY3JlbWVudDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVJbmNyZW1lbnQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZV8yNGhyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5EYXRlOiAnbW9tZW50KG5ldyBEYXRlKCkpLmZvcm1hdChcXCdNTS9ERC9ZWVlZXFwnKTsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVXZWVrZW5kczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVdlZWtkYXlzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhEYXRlOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5LFxyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldDogMCxcclxuICAgICAgICAgICAgICAgICAgICBwdXNoOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHB1bGw6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogJ21kJyxcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50V2lkdGg6IDlcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICcmIzE2MCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ2N1c3RvbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dWYWxpZGF0aW9uczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRJY29uOiAnZmEgZmEtY2xpcGJvYXJkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6ICdtdC0zIGZvcm1pby1pY29uLWJ0biBwci1hZGQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZVZpZXc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdjb3B5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVuOiAnYWN0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlcTogJ3ZpZXcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b206XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGRhdGEuc3RhcnRfZGF0ZT8gKG1vbWVudChkYXRhLnN0YXJ0X2RhdGUpLmZvcm1hdChcXCdNTS9ERC9ZWVlZXFwnKSkgOiBcXCdcXCcpOycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMyxcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcHVzaDogMCxcclxuICAgICAgICAgICAgICAgICAgICBwdWxsOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6ICdtZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFdpZHRoOiAzXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBrZXk6ICdjb2x1bW5zJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdjb2x1bW5zJyxcclxuICAgICAgICAgICAgICAgIGlucHV0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRhYmxlVmlldzogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHdpZHRoOiA0LFxyXG4gICAgICAgICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgIHB1c2g6IDAsXHJcbiAgICAgICAgICAgIHB1bGw6IDAsXHJcbiAgICAgICAgICAgIHNpemU6ICdtZCcsXHJcbiAgICAgICAgICAgIGN1cnJlbnRXaWR0aDogNFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY29tcG9uZW50czogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnU2VsZWN0IFJhbmdlJyxcclxuICAgICAgICAgICAgICAgIHdpZGdldDogJ2Nob2ljZXNqcycsXHJcbiAgICAgICAgICAgICAgICB0YWJsZVZpZXc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJzAnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJzMwJyxcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnMzAnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJzQ1JyxcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnNDUnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJzYwJyxcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnNjAnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJzkwJyxcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnOTAnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJzEyMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJzEyMCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVWYWx1ZTpcclxuICAgICAgICAgICAgICAgICAgJ2lmIChkYXRhLnN0YXJ0X2RhdGUgJiYgZGF0YS5lbmRfZGF0ZSkge1xcclxcbiAgICBjb25zdCBkYXRlRGlmZiA9IHBhcnNlSW50KG1vbWVudChkYXRhLmVuZF9kYXRlKS5kaWZmKG1vbWVudChkYXRhLnN0YXJ0X2RhdGUpLCBcXCdkYXlzXFwnKSk7XFxyXFxuICAgIGlmIChkYXRlRGlmZiA+PSAwKSB7XFxyXFxuICAgICAgICBzd2l0Y2ggKGRhdGVEaWZmKSB7XFxyXFxuICAgICAgICAgICAgY2FzZSAwOiBcXHJcXG4gICAgICAgICAgICAgICAgdmFsdWUgPSAwO1xcclxcbiAgICAgICAgICAgICAgICBicmVhaztcXHJcXG4gICAgICAgICAgICBjYXNlIDMwOlxcclxcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IDMwO1xcclxcbiAgICAgICAgICAgICAgICBicmVhaztcXHJcXG4gICAgICAgICAgICBjYXNlIDQ1OiBcXHJcXG4gICAgICAgICAgICAgICAgdmFsdWUgPSA0NTtcXHJcXG4gICAgICAgICAgICAgICAgYnJlYWs7XFxyXFxuICAgICAgICAgICAgY2FzZSA2MDogXFxyXFxuICAgICAgICAgICAgICAgIHZhbHVlID0gNjA7XFxyXFxuICAgICAgICAgICAgICAgIGJyZWFrO1xcclxcbiAgICAgICAgICAgIGNhc2UgOTA6IFxcclxcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IDkwO1xcclxcbiAgICAgICAgICAgICAgICBicmVhaztcXHJcXG4gICAgICAgICAgICBjYXNlIDEyMDogdmFsdWUgPSAxMjA7XFxyXFxuICAgICAgICAgICAgICAgIGJyZWFrO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufScsXHJcbiAgICAgICAgICAgICAgICBhbGxvd0NhbGN1bGF0ZU92ZXJyaWRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAga2V5OiAnc2VsZWN0UmFuZ2UnLFxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uYWw6IHtcclxuICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIHdoZW46ICdhY3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgICBlcTogJ3ZpZXcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbG9naWM6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjaGVjayBmb3IgZGlzYWJsZSBjb25kbicsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2phdmFzY3JpcHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgamF2YXNjcmlwdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdCA9ICgobW9tZW50KGRhdGEuc3RhcnRfZGF0ZSkuaXNBZnRlcihtb21lbnQobmV3IERhdGUoKSksIFxcJ2RheVxcJykpICYmICEoZGF0YS5yYWRpbyA9PT0gXFwneWVzXFwnKSk7J1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGlzYWJsZSBmaWVsZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwcm9wZXJ0eScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEaXNhYmxlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdkaXNhYmxlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgICAgICAgICBpZDogJ3JhbmdlJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdzZWxlY3QnLFxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBoaWRlT25DaGlsZHJlbkhpZGRlbjogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHdpZHRoOiA0LFxyXG4gICAgICAgICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgIHB1c2g6IDAsXHJcbiAgICAgICAgICAgIHB1bGw6IDAsXHJcbiAgICAgICAgICAgIHNpemU6ICdtZCcsXHJcbiAgICAgICAgICAgIGN1cnJlbnRXaWR0aDogNFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY29tcG9uZW50czogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnQ29sdW1ucycsXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRW5kIERhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6ICdNTS9kZC95eXl5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6ICdwci0wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVWaWV3OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVBpY2tlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVXZWVrZW5kczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVdlZWtkYXlzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5EYXRlOiAnbW9tZW50KG5ldyBEYXRlKCkpLmZvcm1hdChcXCdNTS9ERC9ZWVlZXFwnKTsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZVRpbWU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGVWYWx1ZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnaWYgKGRhdGEuc2VsZWN0UmFuZ2UgfHwgZGF0YS5zZWxlY3RSYW5nZSA9PT0gMCkgeyAgXFxyXFxuICAgIGxldCByZXN1bHQgPSBuZXcgRGF0ZShkYXRhLnN0YXJ0X2RhdGUpO1xcclxcbiAgICByZXN1bHQuc2V0RGF0ZShuZXcgRGF0ZShyZXN1bHQpLmdldERhdGUoKSArIGRhdGEuc2VsZWN0UmFuZ2UpOyBcXHJcXG4gICAgaWYgKHJlc3VsdCkge1xcclxcbiAgICAgICAgdmFsdWUgPSByZXN1bHQ7XFxyXFxuICAgIH1cXHJcXG59IGVsc2Uge1xcclxcbiAgICAgICB2YWx1ZSA9IHZhbHVlO1xcclxcbn1cXHJcXG4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZiAobW9tZW50KGRhdGEuc3RhcnRfZGF0ZSkuaXNWYWxpZCgpICYmIG1vbWVudChkYXRhLmVuZF9kYXRlKS5pc1ZhbGlkKCkpIHtcXHJcXG4gICAgdmFsaWQgPSAgbW9tZW50KGRhdGEuc3RhcnRfZGF0ZSkuaXNTYW1lT3JCZWZvcmUobW9tZW50KGRhdGEuZW5kX2RhdGUpLCBcXCdkYXlcXCcpID8gdHJ1ZSA6IFwiRW5kIGRhdGUgbXVzdCBiZSBncmVhdGVyIHRoYW4gc3RhcnQgZGF0ZVwiXFxyXFxufVxcclxcbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlTWluRGF0ZUlucHV0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVNYXhEYXRlSW5wdXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdlbmRfZGF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2ljOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Rpc2FibGUgZW5kIGRhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnamF2YXNjcmlwdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGphdmFzY3JpcHQ6ICdyZXR1cm4gZGF0YS5zZWxlY3RSYW5nZSA+IDAgfHwgZGF0YS5zZWxlY3RSYW5nZSA9PT0gMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGlzYWJsZSBlbmQgZGF0ZSBmaWVsZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Byb3BlcnR5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEaXNhYmxlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2Rpc2FibGVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Rpc2FibGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnamF2YXNjcmlwdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGphdmFzY3JpcHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdCA9ICgobW9tZW50KGRhdGEuc3RhcnRfZGF0ZSkuaXNBZnRlcihtb21lbnQobmV3IERhdGUoKSksIFxcJ2RheVxcJykpICYmICEoZGF0YS5yYWRpbyA9PT0gXFwneWVzXFwnKSk7J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkaXNhYmxlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAncHJvcGVydHknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0Rpc2FibGVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnZGlzYWJsZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdlbmREYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGF0ZXRpbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NhbGVuZGFyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5SW5UaW1lem9uZTogJ3ZpZXdlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiAnZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVzZUxvY2FsZVNldHRpbmdzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0lucHV0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6ICdzaW5nbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZVRpbWU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5vQ2FsZW5kYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogJ01NL2RkL3l5eXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXJJbmNyZW1lbnQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlSW5jcmVtZW50OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVfMjRocjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluRGF0ZTogJ21vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoXFwnTU0vREQvWVlZWVxcJyk7JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlV2Vla2VuZHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVXZWVrZGF5czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4RGF0ZTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlT25DaGlsZHJlbkhpZGRlbjogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5LFxyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldDogMCxcclxuICAgICAgICAgICAgICAgICAgICBwdXNoOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHB1bGw6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogJ21kJyxcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50V2lkdGg6IDlcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICcmIzE2MCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ2N1c3RvbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dWYWxpZGF0aW9uczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRJY29uOiAnZmEgZmEtY2xpcGJvYXJkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6ICdtdC0zIGZvcm1pby1pY29uLWJ0biBwci1hZGQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZVZpZXc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdjb3B5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVuOiAnYWN0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlcTogJ3ZpZXcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b206XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGRhdGEuZW5kX2RhdGU/IChtb21lbnQoZGF0YS5lbmRfZGF0ZSkuZm9ybWF0KFxcJ01NL0REL1lZWVlcXCcpKSA6IFxcJ1xcJyk7JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldDogMCxcclxuICAgICAgICAgICAgICAgICAgICBwdXNoOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHB1bGw6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogJ21kJyxcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50V2lkdGg6IDFcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGtleTogJ2NvbHVtbnMxJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdjb2x1bW5zJyxcclxuICAgICAgICAgICAgICAgIGlucHV0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRhYmxlVmlldzogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHNpemU6ICdtZCcsXHJcbiAgICAgICAgICAgIHdpZHRoOiA0LFxyXG4gICAgICAgICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgIHB1c2g6IDAsXHJcbiAgICAgICAgICAgIHB1bGw6IDAsXHJcbiAgICAgICAgICAgIGN1cnJlbnRXaWR0aDogNFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY29tcG9uZW50czogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnRG8geW91IHdpc2ggdG8gdXNlIGEgZnV0dXJlIHN0YXJ0IGRhdGUnLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uc0xhYmVsUG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICBpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBoaWRkZW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0YWJsZVZpZXc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1llcycsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICd5ZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3J0Y3V0OiAnJ1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdObycsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdubycsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvcnRjdXQ6ICcnXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBrZXk6ICdyYWRpbycsXHJcbiAgICAgICAgICAgICAgICByZWRyYXdPbjogJ3N0YXJ0X2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgY2xlYXJPbkhpZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlVmFsdWU6XHJcbiAgICAgICAgICAgICAgICAgICdpZihkYXRhLmFjdGlvbiA9PT0gXFwnZWRpdFxcJyAmJiBtb21lbnQoZGF0YS5pbml0aWFsQXBpRGF0YVNuYXAuc3RhcnRfZGF0ZSkuaXNBZnRlcihtb21lbnQoKSwgXFwnZGF5XFwnKSkge1xcclxcbiAgICB2YWx1ZSA9IFxcJ3llc1xcJ1xcclxcbiAgICAvLyBldmVuIGhpZGUgaXQgcGVybWFuZW50bHlcXHJcXG59JyxcclxuICAgICAgICAgICAgICAgIGFsbG93Q2FsY3VsYXRlT3ZlcnJpZGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZToge1xyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxvZ2ljOiBbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2hlY2sgZnV0dXJlIGRhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdqYXZhc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGphdmFzY3JpcHQ6ICdyZXR1cm4gbW9tZW50KGRhdGEuc3RhcnRfZGF0ZSkuaXNBZnRlcihtb21lbnQobmV3IERhdGUoKSksIFxcJ2RheVxcJyknXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdoaWRlIHRoaXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAncHJvcGVydHknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnSGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjaGVjayBpZiByYWRpbyBpcyB5ZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdqYXZhc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGphdmFzY3JpcHQ6ICdyZXN1bHQgPSAgZGF0YS5yYWRpbyA9PT0gXFwneWVzXFwnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaGlkZSByYWRpbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwcm9wZXJ0eScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdIaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0hpZGUgZm9yIGVkaXQgYW5kIHZpZXcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzaW1wbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2ltcGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZW46ICdhY3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcTogJ3ZpZXcnXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdIaWRlIGZvciBlZGl0IGFuZCB2aWV3JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Byb3BlcnR5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjaGVjayBhY3Rpb24gZm9yIGVkaXQgbW9kZScsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3NpbXBsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzaW1wbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hlbjogJ2FjdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVxOiAnZWRpdCdcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3NldCB5ZXMgYXMgZGVmYXVsdCB2YWx1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd2YWx1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICcvLyBpZiAobW9tZW50KGRhdGEuc3RhcnRfZGF0ZSkuaXNBZnRlcihtb21lbnQoKSwgXFwnZGF5XFwnKSkge1xcclxcbi8vICAgICB2YWx1ZSA9IFxcJ3llc1xcJztcXHJcXG4vLyB9J1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjaGVjayBmb3IgcGFzdCBvciBjdXJyZW50IGRhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdqYXZhc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGphdmFzY3JpcHQ6ICdyZXR1cm4gbW9tZW50KGRhdGEuc3RhcnRfZGF0ZSkuaXNTYW1lT3JCZWZvcmUobW9tZW50KG5ldyBEYXRlKCkpLCBcXCdkYXlcXCcpJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVzZXQgdGhlIHJhZGlvIGJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd2YWx1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAndmFsdWUgPSBcXCdcXCc7J1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjaGVjayBpZiBzbmFwIGRhdGUgaXMgZnV0dXJlIGRhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdqYXZhc2NyaXB0JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGphdmFzY3JpcHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdpZihkYXRhLmFjdGlvbiA9PT0gXFwnZWRpdFxcJyAmJiBtb21lbnQoZGF0YS5pbml0aWFsQXBpRGF0YVNuYXAuc3RhcnRfZGF0ZSkuaXNBZnRlcihtb21lbnQoKSwgXFwnZGF5XFwnKSkge1xcclxcbiAgICByZXN1bHQgPSB0cnVlXFxyXFxufSBlbHNlIHtcXHJcXG4gICAgcmVzdWx0ID0gZmFsc2VcXHJcXG59XFxyXFxucmV0dXJuIHJlc3VsdCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2hpZGUgcmFkaW8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAncHJvcGVydHknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnSGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3JhZGlvJyxcclxuICAgICAgICAgICAgICAgIGlucHV0OiB0cnVlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBzaXplOiAnbWQnLFxyXG4gICAgICAgICAgICB3aWR0aDogNCxcclxuICAgICAgICAgICAgb2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICBwdXNoOiAwLFxyXG4gICAgICAgICAgICBwdWxsOiAwLFxyXG4gICAgICAgICAgICBjdXJyZW50V2lkdGg6IDRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnaW5pdGlhbEFwaURhdGFTbmFwJyxcclxuICAgICAgICAgICAgaGlkZGVuOiB0cnVlLFxyXG4gICAgICAgICAgICB0YWJsZVZpZXc6IGZhbHNlLFxyXG4gICAgICAgICAgICBjbGVhck9uSGlkZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGtleTogJ2luaXRpYWxBcGlEYXRhU25hcCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdkYXRhbWFwJyxcclxuICAgICAgICAgICAgaW5wdXQ6IHRydWUsXHJcbiAgICAgICAgICAgIHZhbHVlQ29tcG9uZW50OiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ3RleHRmaWVsZCcsXHJcbiAgICAgICAgICAgICAga2V5OiAndmFsdWUnLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiAnVmFsdWUnLFxyXG4gICAgICAgICAgICAgIGlucHV0OiB0cnVlLFxyXG4gICAgICAgICAgICAgIGhpZGVMYWJlbDogdHJ1ZSxcclxuICAgICAgICAgICAgICB0YWJsZVZpZXc6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2l6ZTogJ21kJyxcclxuICAgICAgICAgICAgY3VycmVudFdpZHRoOiA2LFxyXG4gICAgICAgICAgICBjb21wb25lbnRzOiBbXSxcclxuICAgICAgICAgICAgd2lkdGg6IDYsXHJcbiAgICAgICAgICAgIG9mZnNldDogMCxcclxuICAgICAgICAgICAgcHVzaDogMCxcclxuICAgICAgICAgICAgcHVsbDogMFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHVwZGF0ZSB0aGUgYnVpbGRlckluZm8gb2YgY3VzdG9tIG9tcG9uZW50IHdpdGggYmFzaWMgY29uZmlnIChpbmZvcm1pbmcgZm9ybWlvIHRvIHBsYWNlIHRoaXMgY29tcG9uZW50IGluIGJ1aWxkZXIgdmlldylcclxuICAgIGRhdGVDb21wb25lbnRSZWYuYnVpbGRlckluZm8gPSB7XHJcbiAgICAgIHRpdGxlOiAnRGF0ZSBSYW5nZScsXHJcbiAgICAgIGdyb3VwOiAnYWR2YW5jZWQnLFxyXG4gICAgICBpY29uOiAnY2FsZW5kYXInLFxyXG4gICAgICAvLyB3ZWlnaHQ6IDAsXHJcbiAgICAgIGRvY3VtZW50YXRpb246ICcnLFxyXG4gICAgICBzY2hlbWE6IGRhdGVDb21wb25lbnRSZWYuc2NoZW1hKClcclxuICAgIH07XHJcblxyXG4gICAgLy8gdXNlIGFkZENvbXBvbmVudCBtZXRob2QgcHJvdmlkZWQgYnkgZm9ybWlvIHRvIGluamVjdCB0aGUgY3VzdG9tIGNvbXBvbmVudCBpbiBmb3JtaW9cclxuICAgIENvbXBvbmVudHMuYWRkQ29tcG9uZW50KCdEYXRlRmllbGRDb21wb25lbnQnLCBkYXRlQ29tcG9uZW50UmVmKTtcclxuXHJcbiAgICBjb25zdCBlZGl0Rm9ybSA9IENvbXBvbmVudHMuY29tcG9uZW50cy5wYW5lbC5lZGl0Rm9ybTtcclxuXHJcbiAgICBjb25zdCBmb3JtID0gZWRpdEZvcm0oKTtcclxuXHJcbiAgICB0aGlzLmlkID0gdGhpcy5yb3V0ZS5wYXJlbnQuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xyXG5cclxuICAgIHRoaXMuaXNFZGl0UGFnZSA9ICEhdGhpcy5pZDtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgRWRpdCBQYWdlOiAke3RoaXMuaXNFZGl0UGFnZX1gKTtcclxuXHJcbiAgICBDb21wb25lbnRzLmNvbXBvbmVudHMucGFuZWwuZWRpdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IHRhYnMxID0gVXRpbHMuZ2V0Q29tcG9uZW50KGZvcm0uY29tcG9uZW50cywgJ3RhYnMnLCB0cnVlKTtcclxuICAgICAgdGFiczEuY29tcG9uZW50c1swXS5jb21wb25lbnRzWzRdLmRhdGEudmFsdWVzLnB1c2goe1xyXG4gICAgICAgIGxhYmVsOiAnR3JheScsXHJcbiAgICAgICAgdmFsdWU6ICdncmF5J1xyXG4gICAgICB9KTtcclxuICAgICAgdGFiczEuY29tcG9uZW50c1swXS5jb21wb25lbnRzWzRdLmRhdGEudmFsdWVzLnB1c2goe1xyXG4gICAgICAgIGxhYmVsOiAnTGlnaHQgR3JheScsXHJcbiAgICAgICAgdmFsdWU6ICdsaWdodEdyYXknXHJcbiAgICAgIH0pO1xyXG4gICAgICB0YWJzMS5jb21wb25lbnRzWzBdLmNvbXBvbmVudHNbNF0uZGF0YS52YWx1ZXMucHVzaCh7XHJcbiAgICAgICAgbGFiZWw6ICdCcm93bicsXHJcbiAgICAgICAgdmFsdWU6ICdicm93bidcclxuICAgICAgfSk7XHJcbiAgICAgIHRhYnMxLmNvbXBvbmVudHNbMF0uY29tcG9uZW50c1s0XS5kYXRhLnZhbHVlcy5wdXNoKHtcclxuICAgICAgICBsYWJlbDogJ0dyZWVuaXNoIEJyb3duJyxcclxuICAgICAgICB2YWx1ZTogJ2dyZWVuaXNoQnJvd24nXHJcbiAgICAgIH0pO1xyXG4gICAgICB0YWJzMS5jb21wb25lbnRzWzBdLmNvbXBvbmVudHNbNF0uZGF0YS52YWx1ZXMucHVzaCh7XHJcbiAgICAgICAgbGFiZWw6ICdNYXJyb24nLFxyXG4gICAgICAgIHZhbHVlOiAnbWFycm9uJ1xyXG4gICAgICB9KTtcclxuICAgICAgdGFiczEuY29tcG9uZW50c1swXS5jb21wb25lbnRzWzRdLmRhdGEudmFsdWVzLnB1c2goe1xyXG4gICAgICAgIGxhYmVsOiAnTGlnaHQgQmx1ZScsXHJcbiAgICAgICAgdmFsdWU6ICdsaWdodEJsdWUnXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZm9ybTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5nZXRDdXJyZW50Rm9ybURhdGEoKTtcclxuICAgIHRoaXMuZ2V0Q3VycmVudEJhc2ljRGF0YSgpO1xyXG4gICAgdGhpcy5sb2FkRm9ybSgpO1xyXG4gICAgLy8gU09ja2V0IHN0YXJ0XHJcblxyXG4gICAgY29uc29sZS5sb2coJ1NvY2tldCBDb25uZWN0aW9uJyk7XHJcblxyXG4gICAgdGhpcy5zb2NrZXRBZGFwdGVyLm9uQ29ubmVjdCgpLnN1YnNjcmliZShzdHIgPT4ge1xyXG4gICAgICAvLyBhbGVydCh0aGlzLmlkKVxyXG4gICAgICBjb25zb2xlLmxvZyhzdHIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhgU29ja2V0IElEOiAke3RoaXMuaWR9YCk7XHJcbiAgICAgIHRoaXMuc29ja2V0QWRhcHRlci5qb2luUm9vbSh7XHJcbiAgICAgICAgcm9vbUlkOiB0aGlzLmlkLFxyXG4gICAgICAgIHJvb21UeXBlOiAncGFnZScsXHJcbiAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgaWQ6IHRoaXMubG9nZWRJblVzZXIuaWQsXHJcbiAgICAgICAgICBmaXJzdG5hbWU6IHRoaXMubG9nZWRJblVzZXIuZmlyc3RuYW1lLFxyXG4gICAgICAgICAgbGFzdG5hbWU6IHRoaXMubG9nZWRJblVzZXIubGFzdG5hbWVcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zb2NrZXRBZGFwdGVyLnJlY2VpdmVQYWdlRGF0YSgpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgdGhpcy5mb3JtID0gZGF0YS5mb3JtO1xyXG4gICAgICB0aGlzLnVwZGF0ZWRmcm9tID0gZGF0YS5mb3JtO1xyXG5cclxuICAgICAgY29uc3QgbmFtZSA9IGAke2RhdGEudXNlci5maXJzdG5hbWV9ICR7ZGF0YS51c2VyLmxhc3RuYW1lfWA7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEudXNlcilcclxuICAgICAgdGhpcy51cGRhdGVOb3RpZmljYXRpb24uZW1pdChgJHtuYW1lfSBoYXMgbWFkZSBjaGFuZ2VzYCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBTb2NrZXQ6ICR7bmFtZX0gaGFzIG1hZGUgY2hhbmdlc2ApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zb2NrZXRBZGFwdGVyLm9uUmVDb25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5zb2NrZXRBZGFwdGVyLmpvaW5Sb29tKHtcclxuICAgICAgICByb29tSWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgLy8gcm9vbUlkOiAncGFnZS0xJyxcclxuICAgICAgICByb29tVHlwZTogJ3BhZ2UnLFxyXG4gICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgIGlkOiB0aGlzLmxvZ2VkSW5Vc2VyLmlkLFxyXG4gICAgICAgICAgZmlyc3RuYW1lOiB0aGlzLmxvZ2VkSW5Vc2VyLmZpcnN0bmFtZSxcclxuICAgICAgICAgIGxhc3RuYW1lOiB0aGlzLmxvZ2VkSW5Vc2VyLmxhc3RuYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc29ja2V0QWRhcHRlci5vbmxpbmVFZGl0UGFnZVVzZXJzKCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnb25saW5lJywgZGF0YSlcclxuICAgICAgdGhpcy5vbmxpbmVVc2VyTGlzdC5lbWl0KGRhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhgU29ja2V0OiBFZGl0IFVzZXJzOiAke2RhdGEucm9vbUlkfWApO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VGb3JtVHlwZShldmVudCkge1xyXG4gICAgaWYgKHRoaXMuZm9ybURhdGEudGVtcGxhdGVqc29uKSB7XHJcbiAgICAgIGNvbnN0IHRlbXBsYXRlanNvbiA9XHJcbiAgICAgICAgdHlwZW9mIHRoaXMuZm9ybURhdGEudGVtcGxhdGVqc29uID09PSAnc3RyaW5nJ1xyXG4gICAgICAgICAgPyBKU09OLnBhcnNlKHRoaXMuZm9ybURhdGEudGVtcGxhdGVqc29uKVxyXG4gICAgICAgICAgOiB0aGlzLmZvcm1EYXRhLnRlbXBsYXRlanNvbjtcclxuICAgICAgdGVtcGxhdGVqc29uLmRpc3BsYXkgPSBldmVudC52YWx1ZTtcclxuICAgICAgdGhpcy5zZWxlY3RlZERpc3BsYXlUeXBlID0gZXZlbnQudmFsdWU7XHJcbiAgICAgIHRoaXMuZm9ybSA9IHRlbXBsYXRlanNvbjtcclxuICAgICAgdGhpcy5mb3JtRGF0YS50ZW1wbGF0ZWpzb24gPSBKU09OLnN0cmluZ2lmeSh0ZW1wbGF0ZWpzb24pO1xyXG4gICAgICB0aGlzLmpzb25FbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoSlNPTi5zdHJpbmdpZnkodGhpcy5mb3JtLCBudWxsLCA0KSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q3VycmVudEZvcm1EYXRhKCkge1xyXG4gICAgdGhpcy5wYWdlQnVpbGRlckFkZFNlcnZpY2UuY3VycmVudEZvcm1EYXRhLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMuZm9ybURhdGEgPSBkYXRhO1xyXG4gICAgICB0aGlzLmlzVmFsaWRGb3JtRGV0YWlscyA9XHJcbiAgICAgICAgdGhpcy5mb3JtRGF0YS5kZXNjcmlwdGlvbiAhPT0gJycgJiYgdGhpcy5mb3JtRGF0YS5wYWdlbmFtZSAhPT0gJycgJiYgdGhpcy5mb3JtRGF0YS5wYWdldHlwZSAhPT0gJyc7XHJcbiAgICAgIGlmICh0aGlzLmZvcm1EYXRhLnRlbXBsYXRlanNvbikge1xyXG4gICAgICAgIHRoaXMuZm9ybSA9XHJcbiAgICAgICAgICB0eXBlb2YgdGhpcy5mb3JtRGF0YS50ZW1wbGF0ZWpzb24gPT09ICdzdHJpbmcnXHJcbiAgICAgICAgICAgID8gSlNPTi5wYXJzZSh0aGlzLmZvcm1EYXRhLnRlbXBsYXRlanNvbilcclxuICAgICAgICAgICAgOiB0aGlzLmZvcm1EYXRhLnRlbXBsYXRlanNvbjtcclxuICAgICAgICBpZiAoIXRoaXMuZm9ybS5wbGF0Zm9ybUFwaSkge1xyXG4gICAgICAgICAgdGhpcy5mb3JtLnBsYXRmb3JtQXBpID0gdGhpcy5lbnZpcm9ubWVudC5hcGlIb3N0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbGVjdGVkRGlzcGxheVR5cGUgPVxyXG4gICAgICAgICAgKHRoaXMuZm9ybURhdGEudGVtcGxhdGVqc29uICYmIHRoaXMuZm9ybURhdGEudGVtcGxhdGVqc29uLmRpc3BsYXkpIHx8ICdmb3JtJztcclxuICAgICAgICB0aGlzLmpzb25FbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoSlNPTi5zdHJpbmdpZnkodGhpcy5mb3JtLCBudWxsLCA0KSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZm9ybSA9IHsgY29tcG9uZW50czogW10gfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuZm9ybURhdGEudGVtcGxhdGVpbnMgfHwgdGhpcy5mb3JtRGF0YS5wYWdldXJsKSB7XHJcbiAgICAgICAgdGhpcy5wYXRjaE1hbnVhbEZvcm0oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRDdXJyZW50QmFzaWNEYXRhKCkge1xyXG4gICAgdGhpcy5wYWdlQnVpbGRlckFkZFNlcnZpY2UuY3VycmVudEJhc2ljRGF0YS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgIGlmICh0aGlzLmZvcm1EYXRhKSB7XHJcbiAgICAgICAgICB0aGlzLmZvcm1EYXRhLnBhZ2VuYW1lID0gZGF0YS5wYWdlbmFtZTtcclxuICAgICAgICAgIHRoaXMuZm9ybURhdGEucGFnZXR5cGUgPSBkYXRhLnBhZ2V0eXBlO1xyXG4gICAgICAgICAgdGhpcy5mb3JtRGF0YS5kZXNjcmlwdGlvbiA9IGRhdGEuZGVzY3JpcHRpb247XHJcbiAgICAgICAgICB0aGlzLmZvcm1EYXRhLmRpc3BsYXkgPSBkYXRhLmRpc3BsYXk7XHJcbiAgICAgICAgICB0aGlzLmZvcm0uZGlzcGxheSA9IGRhdGEuZGlzcGxheTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnRGVzaWduIFBhZ2UgRGVzdHJveWVkJylcclxuICAgIC8vIHRoaXMuc29ja2V0QWRhcHRlci5sZWF2ZVJvb20oe1xyXG4gICAgLy8gICByb29tSWQ6IHRoaXMuaWQsXHJcbiAgICAvLyAgIC8vIHJvb21JZDogJ3BhZ2UtMScsXHJcbiAgICAvLyAgIHJvb21UeXBlOiAncGFnZScsXHJcbiAgICAvLyAgIHVzZXI6IHtcclxuICAgIC8vICAgICBpZDogdGhpcy5sb2dlZEluVXNlcj8uaWQsXHJcbiAgICAvLyAgICAgZmlyc3RuYW1lOiB0aGlzLmxvZ2VkSW5Vc2VyPy5maXJzdG5hbWUsXHJcbiAgICAvLyAgICAgbGFzdG5hbWU6IHRoaXMubG9nZWRJblVzZXI/Lmxhc3RuYW1lXHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZEZvcm0oKTogdm9pZCB7XHJcbiAgICB0aGlzLm1hbnVhbEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgcm91dGluZ1VSTDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgaW5pdFBhcmFtOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHBhdGNoTWFudWFsRm9ybSgpIHtcclxuICAgIHRoaXMubWFudWFsRm9ybS5wYXRjaFZhbHVlKHtcclxuICAgICAgcm91dGluZ1VSTDogdGhpcy5mb3JtRGF0YS5wYWdldXJsID8gdGhpcy5mb3JtRGF0YS5wYWdldXJsIDogJycsXHJcbiAgICAgIGluaXRQYXJhbTogdGhpcy5mb3JtRGF0YS50ZW1wbGF0ZWlucyA/IHRoaXMuZm9ybURhdGEudGVtcGxhdGVpbnMgOiAnJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXNldEZvcm06IGFueSA9ICgpID0+IHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmlzRWRpdFBhZ2UgPyAnLi4vLi4vLi4vbGlzdCcgOiAnLi4vLi4vbGlzdCddLCB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUgfSk7XHJcbiAgfTtcclxuXHJcbiAgZ29Ub0RldGFpbFBhZ2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uL2dyaWQtZmllbGQnXSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VQb3B1cCgpIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBwcmV2aWV3Rm9ybSgpIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3Blbih0aGlzLmNhbGxQb3B1cCwge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBoZWlnaHQ6ICc5MCUnXHJcbiAgICB9KTtcclxuICAgIHRoaXMuanNvbkZvcm0gPSB0aGlzLmZvcm07XHJcbiAgfVxyXG5cclxuICBmb3JtU3VibWl0OiBhbnkgPSBwdWJsaXNoID0+IHtcclxuICAgIGNvbnN0IGZvcm1EZXRhaWxzID0gdGhpcy5zZXRGb3JtRGV0YWlscygpO1xyXG4gICAgaWYgKGZvcm1EZXRhaWxzLmlkKSB7XHJcbiAgICAgIHRoaXMucGF0Y2hQYWdlKGZvcm1EZXRhaWxzLCBwdWJsaXNoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlUGFnZShmb3JtRGV0YWlscywgcHVibGlzaCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcGF0Y2hQYWdlKGZvcm1EZXRhaWxzOiBhbnksIHB1Ymxpc2gpIHtcclxuICAgIGNvbnN0IGNyZWF0ZVBhZ2UgPSB0aGlzLmxvY2Fsc3RvcmFnZS5nZXRPYmooJ0NSRUFURSBQQUdFJyk7XHJcbiAgICBmb3JtRGV0YWlscy5wdWJsaXNoZWQgPSBwdWJsaXNoO1xyXG4gICAgaWYgKGNyZWF0ZVBhZ2UpIHtcclxuICAgICAgdGhpcy5mb3JtRGF0YS5pZCA9IGZvcm1EZXRhaWxzLmFjdGl2ZVZlcnNpb24uaWQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLnBhZ2VCdWlsZGVyU2VydmljZS51cGRhdGVQYWdlVmVyc2lvbihmb3JtRGV0YWlscy5pZCwgZm9ybURldGFpbHMsIGNyZWF0ZVBhZ2UpLnN1YnNjcmliZShcclxuICAgICAgcmVzdWx0ID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0Py5kYXRhICYmIE9iamVjdC5rZXlzKHJlc3VsdD8uZGF0YSkubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbmRpdGlvbkNoZWNrUGF0Y2gocmVzdWx0LCBwdWJsaXNoKTtcclxuICAgICAgICAgIHRoaXMuc2F2ZUFzc2V0KGZvcm1EZXRhaWxzPy5wYWdlaWQgfHwgZm9ybURldGFpbHMuYWN0aXZlVmVyc2lvbi5wYWdlaWQsIGZvcm1EZXRhaWxzPy5pZCk7XHJcbiAgICAgICAgICBpZiAocHVibGlzaCkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXHJcbiAgICAgICAgICAgICAgYHBhZ2VzL3BhZ2UtZGVzaWduL3ZlcnNpb25zLyR7Zm9ybURldGFpbHM/LnBhZ2VpZCB8fCBmb3JtRGV0YWlscy5hY3RpdmVWZXJzaW9uLnBhZ2VpZH1gXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0LnN1Y2Nlc3MoXHJcbiAgICAgICAgICAgICAgYFRoZSBWZXJzaW9uICR7Zm9ybURldGFpbHMudmVyc2lvbiB8fCBmb3JtRGV0YWlscy5hY3RpdmVWZXJzaW9uLnZlcnNpb259IGlzIHB1Ymxpc2hlZCBzdWNjZXNzZnVsbHlgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0LnN1Y2Nlc3MoJ1BhZ2Ugc2F2ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5hbGVydC5lcnJvcignRXJyb3IgT2NjdXJlZCcsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbiAgY29uZGl0aW9uQ2hlY2tQYXRjaChyZXN1bHQsIHB1Ymxpc2gpIHtcclxuICAgIGNvbnN0IGlkID0gcmVzdWx0Py5kYXRhLmlkID8gcmVzdWx0Py5kYXRhLmlkIDogJyc7XHJcbiAgICBpZiAoIXRoaXMuaWQgJiYgcHVibGlzaCkge1xyXG4gICAgICBpZiAoaWQpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uL2VkaXQnLCBpZF0sIHsgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlUGFnZShmb3JtRGV0YWlsczogYW55LCBwdWJsaXNoKSB7XHJcbiAgICBmb3JtRGV0YWlscy5wdWJsaXNoZWQgPSBwdWJsaXNoO1xyXG4gICAgdGhpcy5wYWdlQnVpbGRlckFkZFNlcnZpY2UuY3JlYXRlUGFnZShmb3JtRGV0YWlscykuc3Vic2NyaWJlKFxyXG4gICAgICByZXN1bHQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHRbJ2RhdGEnXTtcclxuICAgICAgICBpZiAoZGF0YSAmJiBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGgpIHtcclxuICAgICAgICAgIGNvbnN0IHBhZ2VJZCA9IGRhdGE/LmlkIHx8ICcnO1xyXG4gICAgICAgICAgaWYgKCF0aGlzLmlkKSB7XHJcbiAgICAgICAgICAgIGlmIChwYWdlSWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uL2VkaXQnLCBwYWdlSWRdLCB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuc2F2ZUFzc2V0KHBhZ2VJZCwgZGF0YS5hY3RpdmVWZXJzaW9uLmlkKTtcclxuICAgICAgICAgIGlmIChwdWJsaXNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgcGFnZXMvcGFnZS1kZXNpZ24vdmVyc2lvbnMvJHtwYWdlSWQgfHwgZm9ybURldGFpbHMuYWN0aXZlVmVyc2lvbi5wYWdlaWR9YF0pO1xyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0LnN1Y2Nlc3MoXHJcbiAgICAgICAgICAgICAgYFRoZSBWZXJzaW9uICR7Zm9ybURldGFpbHMudmVyc2lvbiB8fCBkYXRhLmFjdGl2ZVZlcnNpb24udmVyc2lvbn0gaXMgcHVibGlzaGVkIHN1Y2Nlc3NmdWxseWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxlcnQuc3VjY2VzcygnUGFnZSBzYXZlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICB0aGlzLmFsZXJ0LmVycm9yKCdFcnJvciBPY2N1cmVkJywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc2V0Rm9ybURldGFpbHMoKSB7XHJcbiAgICBjb25zdCBmb3JtRGV0YWlscyA9IHRoaXMuZm9ybURhdGE7XHJcbiAgICBpZiAodGhpcy5mb3JtRGF0YS5wYWdldHlwZSA9PT0gJ01BRicpIHtcclxuICAgICAgY29uc3QgbWFudWFsRGF0YSA9IHRoaXMubWFudWFsRm9ybS5nZXRSYXdWYWx1ZSgpO1xyXG4gICAgICBmb3JtRGV0YWlscy5wYWdldXJsID0gbWFudWFsRGF0YS5yb3V0aW5nVVJMO1xyXG4gICAgICBmb3JtRGV0YWlscy50ZW1wbGF0ZWlucyA9IG1hbnVhbERhdGEuaW5pdFBhcmFtO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm1EYXRhLnBhZ2V0eXBlID09PSAnRkZQJykge1xyXG4gICAgICBjb25zdCBncmlkQ29uZmlnRm9ybSA9IHRoaXMuZ3JpZENvbmZpZy5ncmlkQ29uZmlnRm9ybUFycmF5WzBdO1xyXG4gICAgICBjb25zdCBmb3JtQ29tcG9uZW50cyA9ICh0aGlzLnVwZGF0ZWRmcm9tIHx8IEpTT04ucGFyc2UoZm9ybURldGFpbHMudGVtcGxhdGVqc29uKSkuY29tcG9uZW50cy5maWx0ZXIoXHJcbiAgICAgICAgYSA9PiBhLmtleSAhPT0gJ3N1Ym1pdCdcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5ncmlkQ29uZmlnLmdyaWRDb25maWdGb3JtQXJyYXkgPSBmb3JtQ29tcG9uZW50cy5tYXAoYSA9PiAoe1xyXG4gICAgICAgIC4uLmdyaWRDb25maWdGb3JtLFxyXG4gICAgICAgIGhlYWRlcjogYS5sYWJlbCxcclxuICAgICAgICBjb2x1bW5EZWY6IGEua2V5XHJcbiAgICAgIH0pKTtcclxuICAgICAgdGhpcy5ncmlkQ29uZmlnLmdyaWRUaXRsZSA9IHRoaXMuZm9ybURhdGEucGFnZW5hbWU7XHJcbiAgICAgIGZvcm1EZXRhaWxzLnRlbXBsYXRlanNvbiA9IEpTT04uc3RyaW5naWZ5KHRoaXMudXBkYXRlZGZyb20pO1xyXG4gICAgICBmb3JtRGV0YWlscy5ncmlkY29uZmlnID0gSlNPTi5zdHJpbmdpZnkodGhpcy5ncmlkQ29uZmlnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLnVwZGF0ZWRmcm9tKSB7XHJcbiAgICAgICAgZm9ybURldGFpbHMudGVtcGxhdGVqc29uID0gSlNPTi5zdHJpbmdpZnkodGhpcy51cGRhdGVkZnJvbSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9ybURldGFpbHMudGVtcGxhdGVqc29uID0gdGhpcy5mb3JtRGF0YSAmJiB0aGlzLmZvcm1EYXRhLnRlbXBsYXRlanNvbiA/IHRoaXMuZm9ybURhdGEudGVtcGxhdGVqc29uIDogbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaWQpIHtcclxuICAgICAgZm9ybURldGFpbHMuaWQgPSB0aGlzLmlkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZvcm1EZXRhaWxzO1xyXG4gIH1cclxuXHJcbiAgbG9hZEZpZWxkcyhjb21wb25lbnRzRGF0YSkge1xyXG4gICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgY29tcG9uZW50c0RhdGEpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGNvbXBvbmVudD8ubGFiZWwgJiZcclxuICAgICAgICBjb21wb25lbnQ/LmxhYmVsICE9PSAnQ29sdW1ucycgJiZcclxuICAgICAgICBjb21wb25lbnQ/LmxhYmVsICE9PSAnVGFibGUnICYmXHJcbiAgICAgICAgY29tcG9uZW50Py5sYWJlbCAhPT0gJ1BhbmVsJ1xyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmFsbEZpZWxkcy5wdXNoKHtcclxuICAgICAgICAgIGxhYmVsOiBjb21wb25lbnQ/LmxhYmVsLFxyXG4gICAgICAgICAgZmllbGQ6IGNvbXBvbmVudD8ua2V5XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gY2hlY2sgaW5uZXIgZGF0YVxyXG4gICAgICBpZiAoY29tcG9uZW50Py5jb2x1bW5zKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkRmllbGRzKGNvbXBvbmVudD8uY29sdW1ucyk7XHJcbiAgICAgIH0gZWxzZSBpZiAoY29tcG9uZW50Py5jb21wb25lbnRzKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkRmllbGRzKGNvbXBvbmVudD8uY29tcG9uZW50cyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICB0aGlzLmpzb25FbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB0aGlzLnVwZGF0ZWRmcm9tID0gZXZlbnQuZm9ybTtcclxuICAgIHRoaXMuanNvbkVsZW1lbnQubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShKU09OLnN0cmluZ2lmeShldmVudC5mb3JtLCBudWxsLCA0KSkpO1xyXG5cclxuICAgIGlmIChldmVudC50eXBlID09PSAnc2F2ZUNvbXBvbmVudCcgfHwgZXZlbnQudHlwZSA9PT0gJ2RlbGV0ZUNvbXBvbmVudCcpIHtcclxuICAgICAgdGhpcy5zb2NrZXRBZGFwdGVyLnNlbmRQYWdlRGF0YSh7XHJcbiAgICAgICAgcm9vbUlkOiB0aGlzLmlkLFxyXG4gICAgICAgIC8vIHJvb21JZDogJ3BhZ2UtMScsXHJcbiAgICAgICAgZm9ybTogdGhpcy51cGRhdGVkZnJvbSxcclxuICAgICAgICB1c2VyOiB0aGlzLmxvZ2VkSW5Vc2VyXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2F2ZUFzc2V0KHBhZ2VJZDogbnVtYmVyLCB2ZXJzaW9uSWQ/OiBudW1iZXIpIHtcclxuICAgIHRoaXMuYWxsRmllbGRzID0gW107XHJcbiAgICBjb25zdCBmb3JtRGV0YWlscyA9IHRoaXMuZm9ybURhdGE7XHJcbiAgICBjb25zdCBmaWVsZHMgPSBKU09OLnBhcnNlKGZvcm1EZXRhaWxzLnRlbXBsYXRlanNvbik7XHJcbiAgICB0aGlzLmxvYWRGaWVsZHMoZmllbGRzLmNvbXBvbmVudHMpO1xyXG4gICAgY29uc3QgZmllbGRBcnIgPSB0aGlzLmFsbEZpZWxkcy5tYXAoaXRlbSA9PiBpdGVtLmZpZWxkKTtcclxuICAgIGNvbnN0IGFzc2V0TmFtZUFyciA9IHRoaXMuYXNzZXRMaXN0ICYmIHRoaXMuYXNzZXRMaXN0Lmxlbmd0aCA/IHRoaXMuYXNzZXRMaXN0Lm1hcChpdGVtID0+IGl0ZW0uYXNzZXRuYW1lKSA6IFtdO1xyXG4gICAgY29uc3QgYWN0aXZlQXJyID0gW107XHJcbiAgICBjb25zdCBpbmFjdGl2ZUFyciA9IFtdO1xyXG5cclxuICAgIGlmICh0aGlzLmFzc2V0TGlzdCAmJiB0aGlzLmFzc2V0TGlzdC5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5hc3NldExpc3QuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpZiAoZmllbGRBcnIuaW5jbHVkZXMoaXRlbS5hc3NldG5hbWUpKSB7XHJcbiAgICAgICAgICBhY3RpdmVBcnIucHVzaChpdGVtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbS5pc2FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgaW5hY3RpdmVBcnIucHVzaChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld0Fzc2V0QXJyID0gZmllbGRBcnIuZmlsdGVyKHggPT4gIWFzc2V0TmFtZUFyci5pbmNsdWRlcyh4KSk7XHJcbiAgICBpZiAobmV3QXNzZXRBcnIubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc2V0QWN0aXZlQXNzZXQobmV3QXNzZXRBcnIsIHBhZ2VJZCwgdmVyc2lvbklkKS5mb3JFYWNoKGFzc2V0ID0+IHtcclxuICAgICAgICBhY3RpdmVBcnIucHVzaChhc3NldCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFzc2V0RGF0YSA9IFsuLi5hY3RpdmVBcnIsIC4uLmluYWN0aXZlQXJyXTtcclxuICAgIHRoaXMuZ2V0TWVudUxpc3QoYXNzZXREYXRhLCBwYWdlSWQsIHZlcnNpb25JZCk7XHJcbiAgfVxyXG5cclxuICBzZXRBY3RpdmVBc3NldChuZXdBc3NldEFyciwgcGFnZUlkPzogbnVtYmVyLCB2ZXJzaW9uSWQ/OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGNyZWF0ZVBhZ2UgPSB0aGlzLmxvY2Fsc3RvcmFnZS5nZXRPYmooJ0NSRUFURSBQQUdFJyk7XHJcbiAgICBjb25zdCB2ZXJzaW9uaWQgPSB0aGlzLmNyZWF0ZUR5bmFtaWNQYWdlID8gdmVyc2lvbklkIDogdGhpcy5mb3JtRGF0YS5pZDtcclxuICAgIGNvbnN0IGFjdGl2ZUFyciA9IFtdO1xyXG4gICAgbmV3QXNzZXRBcnIuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgZ2V0RmllbGREYXRhID0gdGhpcy5hbGxGaWVsZHMuZmluZChyZXMgPT4gcmVzLmZpZWxkID09PSBpdGVtKTtcclxuICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICBhc3NldG5hbWU6IGl0ZW0sXHJcbiAgICAgICAgYXNzZXRwYXRoOiB0aGlzLmZvcm1EYXRhLnBhZ2VuYW1lICsgJy4nICsgaXRlbSxcclxuICAgICAgICBhc3NldHR5cGU6ICc0NUYnLFxyXG4gICAgICAgIGRhc2hib2FyZHRlbXBsYXRlanNvbjogbnVsbCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogZ2V0RmllbGREYXRhICYmIGdldEZpZWxkRGF0YS5sYWJlbCA/IGdldEZpZWxkRGF0YS5sYWJlbCA6IG51bGwsXHJcbiAgICAgICAgZGlzcGxheW5hbWU6IGdldEZpZWxkRGF0YSAmJiBnZXRGaWVsZERhdGEubGFiZWwgPyBnZXRGaWVsZERhdGEubGFiZWwgOiBudWxsLFxyXG4gICAgICAgIGljb246IG51bGwsXHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgcGFnZWlkOiBwYWdlSWQsXHJcbiAgICAgICAgcGFyZW50YXNzZXRpZDogbnVsbCxcclxuICAgICAgICB1cmw6IG51bGwsXHJcbiAgICAgICAgaXNhY3RpdmU6IGNyZWF0ZVBhZ2UgfHwgdGhpcy5mb3JtRGF0YS5pc2FjdGl2ZSxcclxuICAgICAgICB2ZXJzaW9uaWQ6IFN0cmluZyh2ZXJzaW9uaWQpXHJcbiAgICAgIH07XHJcbiAgICAgIGFjdGl2ZUFyci5wdXNoKGRhdGEpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYWN0aXZlQXJyO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWVudUxpc3QoYXNzZXREYXRhLCBwYWdlSWQ6IG51bWJlciwgdmVyc2lvbklkPzogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBwYWdlaWQgPSB0aGlzLmNyZWF0ZUR5bmFtaWNQYWdlID8gcGFnZUlkIDogTnVtYmVyKHRoaXMuZm9ybURhdGEucGFnZWlkKTtcclxuICAgIGNvbnN0IHZlcnNpb25pZCA9IHRoaXMuY3JlYXRlRHluYW1pY1BhZ2UgPyB2ZXJzaW9uSWQgOiBOdW1iZXIodGhpcy5mb3JtRGF0YS5pZCk7XHJcbiAgICB0aGlzLnBhZ2VCdWlsZGVyQWRkU2VydmljZS5jcmVhdGVBc3NldEJ5VmVyc2lvbihwYWdlaWQsIHZlcnNpb25pZCwgYXNzZXREYXRhKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgY2hlY2tCYXNpY0luZm8oKSB7XHJcbiAgICB0aGlzLmlkID0gdGhpcy5yb3V0ZS5wYXJlbnQuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xyXG4gICAgdGhpcy5iYXNpY1BhZ2VJbmZvcm1hdGlvbiA9IHRoaXMubG9jYWxzdG9yYWdlLmdldE9iaignUEFHRURFU0lHTl9CQVNJQ0lORk8nKTtcclxuICAgIGlmICghdGhpcy5pZCkge1xyXG4gICAgICBjb25zdCB2YWxpZGF0aW9uID0gdGhpcy52YWxpZGF0aW9uUGFnZSgpO1xyXG4gICAgICBpZiAoIXZhbGlkYXRpb24gJiYgIXRoaXMuc2VsZWN0ZWRQYWdlKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcGFnZXMvcGFnZS1kZXNpZ24vYWRkL2Jhc2ljLWluZm8nXSwgeyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFsZXJ0LmVycm9yKCdQbGVhc2UgZmlsbCBpbiBhbGwgdGhlIHJlcXVpcmVkIGZpZWxkcy4nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICB2YWxpZGF0aW9uUGFnZSgpOiBhbnkge1xyXG4gICAgaWYgKFxyXG4gICAgICAhdGhpcy5iYXNpY1BhZ2VJbmZvcm1hdGlvbi5wYWdlbmFtZSB8fFxyXG4gICAgICAhdGhpcy5iYXNpY1BhZ2VJbmZvcm1hdGlvbi5wYWdldHlwZSB8fFxyXG4gICAgICAhdGhpcy5iYXNpY1BhZ2VJbmZvcm1hdGlvbi5kZXNjcmlwdGlvblxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29weVRleHQoKSB7XHJcbiAgICB0aGlzLmNsaXBib2FyZC5jb3B5KHRoaXMuanNvbkVsZW1lbnQubmF0aXZlRWxlbWVudC5pbm5lclRleHQpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicGFnZS1kZXNpZ24tYmFzaWMtaW5mb1wiPlxyXG4gIDxwLWNhcmQgc3R5bGVDbGFzcz1cInJiYWMtY2FyZCB3LTEwMCBtYi0yXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic3RyaXBfaGVhZCBwYWdlLWRlc2lnbmVyIHRvZ2dsZWxlZnRcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJyZXBvcnRfaGVhZCBmb250LXdlaWdodC1ib2xkXCI+RGVzaWduIFBhZ2U8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwLWZsdWlkIHAtZm9ybWdyaWQgcC1ncmlkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwLWZpZWxkIHAtY29sLTEyIHAtbWQtNFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJwYWdldHlwZVwiIGNsYXNzPVwicmVmZXJyYWwtZm9ybS1sYWJlbHNcIlxyXG4gICAgICAgICAgPkRpc3BsYXkgVHlwZVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZGZpZWxkIHRleHQtZGFuZ2VyXCI+Kjwvc3Bhbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxwLWRyb3Bkb3duXHJcbiAgICAgICAgICBbb3B0aW9uc109XCJkaXNwbGF5VHlwZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBGb3JtIFR5cGVcIlxyXG4gICAgICAgICAgaWQ9XCJwYWdldHlwZVwiXHJcbiAgICAgICAgICBvcHRpb25MYWJlbD1cIm5hbWVcIlxyXG4gICAgICAgICAgb3B0aW9uVmFsdWU9XCJ2YWx1ZVwiXHJcbiAgICAgICAgICBbKG5nTW9kZWwpXT1cInNlbGVjdGVkRGlzcGxheVR5cGVcIlxyXG4gICAgICAgICAgKG9uQ2hhbmdlKT1cIm9uQ2hhbmdlRm9ybVR5cGUoJGV2ZW50KVwiPlxyXG4gICAgICAgIDwvcC1kcm9wZG93bj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3cgbXQtMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgPGZvcm0tYnVpbGRlciBbZm9ybV09XCJmb3JtXCIgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCIgW29wdGlvbnNdPVwib3B0aW9uc1wiPjwvZm9ybS1idWlsZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3M9XCJwdWxsLXJpZ2h0IG1iLTIgYnRuIGJ0bi1wcmltYXJ5IGJ0bmNvbW1vblwiXHJcbiAgICAgICAgICAqc2hvd0ZpZWxkPSdcIlBBR19ERVNfREVTX1BBR19QUkVWSUVXXCInXHJcbiAgICAgICAgICAoY2xpY2spPVwicHJldmlld0Zvcm0oKVwiPlxyXG4gICAgICAgICAgUHJldmlld1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJwdWxsLXJpZ2h0IG1iLTIgbXItMiBidG4gYnRuLWNhbmNlbFwiICpzaG93RmllbGQ9J1wiUEFHX0RFU19ERVNfUEFHX0NBTkNFTFwiJyAoY2xpY2spPVwicmVzZXRGb3JtKClcIj5cclxuICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzPVwicHVsbC1yaWdodCBtYi0yIG1yLTIgYnRuIGJ0bi1wcmltYXJ5IGJ0bmNvbW1vblwiXHJcbiAgICAgICAgICAqc2hvd0ZpZWxkPSdcIlBBR19ERVNfREVTX1BBR19QUkVWSU9VU1wiJ1xyXG4gICAgICAgICAgKGNsaWNrKT1cImdvVG9EZXRhaWxQYWdlKClcIj5cclxuICAgICAgICAgIFByZXZpb3VzXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3M9XCJwdWxsLXJpZ2h0IG1iLTIgbXItMiBidG4gYnRuLXByaW1hcnkgYnRuY29tbW9uXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCIhaXNWYWxpZEZvcm1EZXRhaWxzXCJcclxuICAgICAgICAgICpzaG93RmllbGQ9J1wiUEFHX0RFU19ERVNfUEFHX1BVQkxJU0hcIidcclxuICAgICAgICAgIChjbGljayk9XCJmb3JtU3VibWl0KHRydWUpXCI+XHJcbiAgICAgICAgICBQdWJsaXNoXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3M9XCJwdWxsLXJpZ2h0IG1iLTIgbXItMiBidG4gYnRuLXByaW1hcnkgYnRuY29tbW9uXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCIhaXNWYWxpZEZvcm1EZXRhaWxzXCJcclxuICAgICAgICAgICpzaG93RmllbGQ9J1wiUEFHX0RFU19ERVNfUEFHX1NBVkVcIidcclxuICAgICAgICAgIChjbGljayk9XCJmb3JtU3VibWl0KGZhbHNlKVwiPlxyXG4gICAgICAgICAgU2F2ZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJvdyBtdC0yXCIgKm5nSWY9XCJmb3JtRGF0YS5wYWdldHlwZSA9PT0gJ01BRidcIj5cclxuICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJtYW51YWxGb3JtXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgICA8bWF0LWxhYmVsPlVSTCBGb3IgUm91dGluZzwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbWF0SW5wdXRcclxuICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInJvdXRpbmdVUkxcIlxyXG4gICAgICAgICAgICAgICAgYXBwVGl0bGVDYXNlXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVSTCBGb3IgUm91dGluZ1wiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgIDxtYXQtZXJyb3IgY2xhc3M9XCJmaXJzdG5hbWUtZXJyb3JcIiAqbmdJZj1cIm1hbnVhbEZvcm0uY29udHJvbHNbJ3JvdXRpbmdVUkwnXS5pbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICBQbGVhc2UgZW50ZXIgVVJMIEZvciBSb3V0aW5nPC9tYXQtZXJyb3JcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1sYWJlbD5Jbml0IFBhcmFtZXRlcjwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbWF0SW5wdXRcclxuICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImluaXRQYXJhbVwiXHJcbiAgICAgICAgICAgICAgICBhcHBUaXRsZUNhc2VcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5pdCBQYXJhbWV0ZXJcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICA8bWF0LWVycm9yIGNsYXNzPVwiZmlyc3RuYW1lLWVycm9yXCIgKm5nSWY9XCJtYW51YWxGb3JtLmNvbnRyb2xzWydpbml0UGFyYW0nXS5pbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICBQbGVhc2UgZW50ZXIgSW5pdCBQYXJhbWV0ZXI8L21hdC1lcnJvclxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxuZy10ZW1wbGF0ZSAjY2FsbFBvcHVwPlxyXG4gICAgICA8aDIgbWF0RGlhbG9nVGl0bGU+UHJldmlldzwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgIDxmb3JtaW8gW2Zvcm1dPVwianNvbkZvcm1cIj48L2Zvcm1pbz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInB1bGwtcmlnaHRcIj5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJjbG9zZVBvcHVwKClcIiBjbGFzcz1cImJ0biBidG4tY2FuY2VsIG1yLTIgbWItMlwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgPCEtLSBidG4gYnRuLXNlYyAtLT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cIm10LTNcIj5cclxuICAgICAgPGg2IGNsYXNzPVwidGV4dC1sZWZ0XCI+QXMgSlNPTiBTY2hlbWE8L2g2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWVudUljb25zXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIgcm9sZT1cImJ1dHRvblwiIChjbGljayk9XCJjb3B5VGV4dCgpXCIgdGl0bGU9XCJDb3B5IEpTT04gU2NoZW1hXCI+IGNvbnRlbnRfY29weSA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwid2VsbCBqc29udmlld2VyIHAtM1wiPlxyXG4gICAgICAgIDxwcmUgaWQ9XCJqc29uXCIgY2xhc3M9XCJtYi0wXCI+PGNvZGUgY2xhc3M9XCJsYW5ndWFnZS1qc29uXCIgI2pzb24+PC9jb2RlPjwvcHJlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvcC1jYXJkPlxyXG48L2Rpdj5cclxuPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4iXX0=