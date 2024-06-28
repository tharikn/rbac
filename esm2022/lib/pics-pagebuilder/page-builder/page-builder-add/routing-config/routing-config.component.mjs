import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { AppConstants } from '../../../@core/constants/app-constants';
import customPageList from '../../../@core/constants/config.json';
import { AuthService } from '../../../@core/services/auth.service';
import { CommonDropdownsService } from '../../../@core/services/common-dropdowns.service';
import { PageBuilderAddService } from '../../../@core/services/page-builder-add.service';
import { PageBuilderService } from '../../page-builder-version/@core/page-builder.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../../@core/services/alert.service";
import * as i3 from "@angular/router";
import * as i4 from "../../../@core/services/data-store.service";
import * as i5 from "@angular/common";
import * as i6 from "primeng/dropdown";
import * as i7 from "primeng/card";
import * as i8 from "../../../@core/directives/permission.directive";
export class RoutingConfigComponent {
    _formBuilder;
    _alert;
    _route;
    _router;
    _storeservice;
    tabsForm;
    formData;
    id = '';
    pageTypeList;
    dropdownService;
    pageList;
    filteredPageList;
    pageBuilderAddService;
    pageBuilderService;
    authService;
    orgSubs;
    orgId;
    customPage = customPageList;
    RBACORG;
    constructor(injector, _formBuilder, _alert, _route, _router, _storeservice) {
        this._formBuilder = _formBuilder;
        this._alert = _alert;
        this._route = _route;
        this._router = _router;
        this._storeservice = _storeservice;
        this.pageBuilderAddService = injector.get(PageBuilderAddService);
        this.dropdownService = injector.get(CommonDropdownsService);
        this.pageBuilderService = injector.get(PageBuilderService);
        this.authService = injector.get(AuthService);
        this.id = this._route.snapshot.parent.paramMap.get('id');
        this.orgSubs = this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.RBACORG = res['RBACORG'];
                this.orgId = parseInt(this.RBACORG['orgID']);
                if (this.orgId) {
                    this.getAllPages();
                }
            }
        });
    }
    ngOnInit() {
        this.getPageTypes();
        this.initTabConfigForm();
        this.setCurrentFormData();
    }
    ngOnDestroy() {
        this.orgSubs.unsubscribe();
    }
    setCurrentFormData() {
        this.pageBuilderAddService.currentFormData.subscribe((data) => {
            this.formData = data;
            const tabConfig = JSON.parse(this.formData?.tabconfig);
            if (tabConfig) {
                const tabsControl = this.tabsForm.controls['tabs'];
                tabsControl.controls = [];
                if (tabConfig?.length) {
                    tabConfig.forEach(val => {
                        tabsControl.push(this._formBuilder.group({
                            id: val.id,
                            pathname: val.pathname,
                            type: val.type ? val.type : 'ROUTING'
                        }));
                    });
                }
            }
        });
    }
    initTabConfigForm() {
        this.tabsForm = this._formBuilder.group({
            tabs: this._formBuilder.array([this.addTabGroup()])
        });
    }
    getPageTypes() {
        this.dropdownService.getDropDownValues('page').subscribe(result => {
            this.pageTypeList = result['data'];
        });
    }
    getAllPages() {
        this.pageBuilderAddService.getOrgList(this.orgId).subscribe((res) => {
            if (res) {
                this.pageList = res?.data?.filter(page => page?.pageTypeDetails?.key !== 'BTP');
            }
        }, _err => this._alert.error(AppConstants.errorMessage));
    }
    selectedPageType(event) {
        console.log(event);
        this.filteredPageList = this.pageList.filter(page => page.pageTypeDetails.id === event);
    }
    addTabGroup() {
        return this._formBuilder.group({
            pathname: ['', [Validators.required]],
            type: ['ROUTING'],
            id: ['']
        });
    }
    get tabs() {
        return this.tabsForm.get('tabs').controls;
    }
    // addTab() {
    //   const tabs = (this.tabsForm.get('tabs') as FormArray).controls;
    //   tabs.push(this.addTabGroup());
    // }
    // patchTab(tabValue) {
    //   const tabs = (this.tabsForm.get('tabs') as FormArray).controls;
    //   tabs.push(tabValue);
    // }
    /**
     * Method to Remove tab
     * @param _index index of the tab to be removed
     */
    // removeTab(_index: number) {
    //   const tabs = this.tabsForm.get('tabs') as FormArray;
    //   tabs.removeAt(_index);
    // }
    // getPage(id?: any) {
    //   console.log(id);
    //   if (id && id !== '') {
    //     return this.pageList.filter(_ => _.pageTypeDetails.id == id);
    //   }
    // }
    cancel() {
        this.pageBuilderAddService.returnToList();
    }
    saveTabs(publish) {
        if (!this.tabsForm.valid) {
            return this._alert.error('Please fill all mandatory fields.');
        }
        const tabs = this.tabsForm.getRawValue().tabs;
        this.formData.tabconfig = JSON.stringify(tabs);
        if (!this.id) {
            this.formData.published = publish;
            this.pageBuilderAddService.createPage(this.formData).subscribe(result => {
                const data = result['data'];
                this._router.navigate([`pages/page-design/versions/${data.id}`]);
                if (publish) {
                    this._alert.success(`Tab Page Version ${data.version || data.activeVersion.version}  is published successfully`);
                }
                else {
                    this._alert.success('Tab Page added successfully');
                }
            });
        }
        else {
            const formDetails = this.formData;
            formDetails.id = this.id;
            formDetails.published = publish;
            this.pageBuilderService.updatePageVersion(this.id, formDetails).subscribe(() => {
                this._router.navigate([`pages/page-design/versions/${formDetails.pageid}`]);
                this._alert.success('Tab Page updated successfully');
            });
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RoutingConfigComponent, deps: [{ token: i0.Injector }, { token: i1.UntypedFormBuilder }, { token: i2.AlertService }, { token: i3.ActivatedRoute }, { token: i3.Router }, { token: i4.DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: RoutingConfigComponent, selector: "app-routing-config", ngImport: i0, template: "<div class=\"page-design-basic-info\">\r\n  <p-card styleClass=\"rbac-card w-100 mb-2\">\r\n    <div class=\"strip_head page-designer toggleleft\">\r\n      <span class=\"report_head font-weight-bold\">Routing Configuration</span>\r\n    </div>\r\n    <div class=\"p-fluid\">\r\n      <div class=\"\">\r\n        <form [formGroup]=\"tabsForm\">\r\n          <div formArrayName=\"tabs\">\r\n            <div *ngFor=\"let item of tabs; let i = index\">\r\n              <div class=\"row\" [formGroupName]=\"i\">\r\n                <div class=\"p-field p-col-3\">\r\n                  <label for=\"pname\" class=\"referral-form-labels\"\r\n                    >Routing Path\r\n                    <span class=\"requiredfield text-danger\">*</span>\r\n                  </label>\r\n                  <p-dropdown\r\n                    [options]=\"customPage\"\r\n                    placeholder=\"Select Routing Page\"\r\n                    id=\"pathname\"\r\n                    optionLabel=\"name\"\r\n                    optionValue=\"component\"\r\n                    formControlName=\"pathname\"\r\n                    fieldKey=\"PAG_DES_ROUTE_CONFIG_ROUTING_PATH\"\r\n                    (onChange)=\"selectedPage($event.value)\">\r\n                  </p-dropdown>\r\n                  <div *ngIf=\"item['controls'].pathname.errors && item['controls'].pathname.touched\">\r\n                    <small class=\"p-error block\">Routing Path is required </small>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"text-right\">\r\n            <button\r\n              class=\"pull-right mb-2 btn btn-primary btncommon\"\r\n              [disabled]=\"!tabsForm.valid\"\r\n              (click)=\"saveTabs(true)\"\r\n              fieldKey=\"PAG_DES_ROUTE_CONFIG_PUBLISH\">\r\n              <em class=\"fa fa-save\" aria-hidden=\"true\"></em> Publish\r\n            </button>\r\n            <button\r\n              class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\"\r\n              fieldKey=\"PAG_DES_ROUTE_CONFIG_SAVE_TABS\"\r\n              [disabled]=\"!tabsForm.valid\"\r\n              (click)=\"saveTabs(false)\">\r\n              <em class=\"fa fa-save\" aria-hidden=\"true\"></em> Save Tabs\r\n            </button>\r\n            <button class=\"pull-right mb-2 mr-2 btn btn-cancel\" (click)=\"cancel()\">Cancel</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </p-card>\r\n</div>\r\n", styles: ["li{list-style:none}\n"], dependencies: [{ kind: "directive", type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i1.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { kind: "directive", type: i1.FormArrayName, selector: "[formArrayName]", inputs: ["formArrayName"] }, { kind: "component", type: i6.Dropdown, selector: "p-dropdown", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }, { kind: "component", type: i7.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { kind: "directive", type: i8.PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RoutingConfigComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-routing-config', template: "<div class=\"page-design-basic-info\">\r\n  <p-card styleClass=\"rbac-card w-100 mb-2\">\r\n    <div class=\"strip_head page-designer toggleleft\">\r\n      <span class=\"report_head font-weight-bold\">Routing Configuration</span>\r\n    </div>\r\n    <div class=\"p-fluid\">\r\n      <div class=\"\">\r\n        <form [formGroup]=\"tabsForm\">\r\n          <div formArrayName=\"tabs\">\r\n            <div *ngFor=\"let item of tabs; let i = index\">\r\n              <div class=\"row\" [formGroupName]=\"i\">\r\n                <div class=\"p-field p-col-3\">\r\n                  <label for=\"pname\" class=\"referral-form-labels\"\r\n                    >Routing Path\r\n                    <span class=\"requiredfield text-danger\">*</span>\r\n                  </label>\r\n                  <p-dropdown\r\n                    [options]=\"customPage\"\r\n                    placeholder=\"Select Routing Page\"\r\n                    id=\"pathname\"\r\n                    optionLabel=\"name\"\r\n                    optionValue=\"component\"\r\n                    formControlName=\"pathname\"\r\n                    fieldKey=\"PAG_DES_ROUTE_CONFIG_ROUTING_PATH\"\r\n                    (onChange)=\"selectedPage($event.value)\">\r\n                  </p-dropdown>\r\n                  <div *ngIf=\"item['controls'].pathname.errors && item['controls'].pathname.touched\">\r\n                    <small class=\"p-error block\">Routing Path is required </small>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"text-right\">\r\n            <button\r\n              class=\"pull-right mb-2 btn btn-primary btncommon\"\r\n              [disabled]=\"!tabsForm.valid\"\r\n              (click)=\"saveTabs(true)\"\r\n              fieldKey=\"PAG_DES_ROUTE_CONFIG_PUBLISH\">\r\n              <em class=\"fa fa-save\" aria-hidden=\"true\"></em> Publish\r\n            </button>\r\n            <button\r\n              class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\"\r\n              fieldKey=\"PAG_DES_ROUTE_CONFIG_SAVE_TABS\"\r\n              [disabled]=\"!tabsForm.valid\"\r\n              (click)=\"saveTabs(false)\">\r\n              <em class=\"fa fa-save\" aria-hidden=\"true\"></em> Save Tabs\r\n            </button>\r\n            <button class=\"pull-right mb-2 mr-2 btn btn-cancel\" (click)=\"cancel()\">Cancel</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </p-card>\r\n</div>\r\n", styles: ["li{list-style:none}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.UntypedFormBuilder }, { type: i2.AlertService }, { type: i3.ActivatedRoute }, { type: i3.Router }, { type: i4.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvcGFnZS1idWlsZGVyL3NyYy9saWIvcGljcy1wYWdlYnVpbGRlci9wYWdlLWJ1aWxkZXIvcGFnZS1idWlsZGVyLWFkZC9yb3V0aW5nLWNvbmZpZy9yb3V0aW5nLWNvbmZpZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9wYWdlLWJ1aWxkZXIvc3JjL2xpYi9waWNzLXBhZ2VidWlsZGVyL3BhZ2UtYnVpbGRlci9wYWdlLWJ1aWxkZXItYWRkL3JvdXRpbmctY29uZmlnL3JvdXRpbmctY29uZmlnLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQStCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBOEUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3RFLE9BQU8sY0FBYyxNQUFNLHNDQUFzQyxDQUFDO0FBRWxFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMxRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN6RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQzs7Ozs7Ozs7OztBQWEzRixNQUFNLE9BQU8sc0JBQXNCO0lBaUJ2QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBcEJWLFFBQVEsQ0FBb0I7SUFDNUIsUUFBUSxDQUFNO0lBQ2QsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNSLFlBQVksQ0FBTTtJQUNs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QyxDQUFDLENBQUM7Z0JBQzVFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUM7WUFDdkQsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7d0dBeEtVLHNCQUFzQjs0RkFBdEIsc0JBQXNCLDBEQ3ZCbkMsbytFQXVEQTs7NEZEaENhLHNCQUFzQjtrQkFMbEMsU0FBUzsrQkFDRSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdG9yLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVbnR5cGVkRm9ybUFycmF5LCBVbnR5cGVkRm9ybUJ1aWxkZXIsIFVudHlwZWRGb3JtQ29udHJvbCwgVW50eXBlZEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBcHBDb25zdGFudHMgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9jb25zdGFudHMvYXBwLWNvbnN0YW50cyc7XHJcbmltcG9ydCBjdXN0b21QYWdlTGlzdCBmcm9tICcuLi8uLi8uLi9AY29yZS9jb25zdGFudHMvY29uZmlnLmpzb24nO1xyXG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9zZXJ2aWNlcy9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tb25Ecm9wZG93bnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvc2VydmljZXMvY29tbW9uLWRyb3Bkb3ducy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGFnZUJ1aWxkZXJBZGRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvc2VydmljZXMvcGFnZS1idWlsZGVyLWFkZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGFnZUJ1aWxkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcGFnZS1idWlsZGVyLXZlcnNpb24vQGNvcmUvcGFnZS1idWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvc2VydmljZXMvZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuaW50ZXJmYWNlIEN1c3RvbVBhZ2Uge1xyXG4gIG5hbWU6IGFueTtcclxuICBjb21wb25lbnQ6IGFueTtcclxuICBjb21wb25lbnROYW1lOiBhbnk7XHJcbiAgc2VsZWN0ZWRUYWc6IGFueTtcclxufVxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1yb3V0aW5nLWNvbmZpZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3JvdXRpbmctY29uZmlnLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9yb3V0aW5nLWNvbmZpZy5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb3V0aW5nQ29uZmlnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHRhYnNGb3JtITogVW50eXBlZEZvcm1Hcm91cDtcclxuICBmb3JtRGF0YTogYW55O1xyXG4gIGlkID0gJyc7XHJcbiAgcGFnZVR5cGVMaXN0OiBhbnk7XHJcbiAgZHJvcGRvd25TZXJ2aWNlOiBDb21tb25Ecm9wZG93bnNTZXJ2aWNlO1xyXG4gIHBhZ2VMaXN0OiBhbnk7XHJcbiAgZmlsdGVyZWRQYWdlTGlzdDogYW55O1xyXG4gIHBhZ2VCdWlsZGVyQWRkU2VydmljZTogUGFnZUJ1aWxkZXJBZGRTZXJ2aWNlO1xyXG4gIHBhZ2VCdWlsZGVyU2VydmljZTogUGFnZUJ1aWxkZXJTZXJ2aWNlO1xyXG4gIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZTtcclxuICBvcmdTdWJzOiBTdWJzY3JpcHRpb247XHJcbiAgb3JnSWQ6IGFueTtcclxuICBjdXN0b21QYWdlOiBDdXN0b21QYWdlW10gPSBjdXN0b21QYWdlTGlzdDtcclxuICBSQkFDT1JHOiBhbnk7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwcml2YXRlIF9mb3JtQnVpbGRlcjogVW50eXBlZEZvcm1CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSBfYWxlcnQ6IEFsZXJ0U2VydmljZSxcclxuICAgIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBfc3RvcmVzZXJ2aWNlOiBEYXRhU3RvcmVTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLnBhZ2VCdWlsZGVyQWRkU2VydmljZSA9IGluamVjdG9yLmdldDxQYWdlQnVpbGRlckFkZFNlcnZpY2U+KFBhZ2VCdWlsZGVyQWRkU2VydmljZSk7XHJcbiAgICB0aGlzLmRyb3Bkb3duU2VydmljZSA9IGluamVjdG9yLmdldDxDb21tb25Ecm9wZG93bnNTZXJ2aWNlPihDb21tb25Ecm9wZG93bnNTZXJ2aWNlKTtcclxuICAgIHRoaXMucGFnZUJ1aWxkZXJTZXJ2aWNlID0gaW5qZWN0b3IuZ2V0PFBhZ2VCdWlsZGVyU2VydmljZT4oUGFnZUJ1aWxkZXJTZXJ2aWNlKTtcclxuICAgIHRoaXMuYXV0aFNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8QXV0aFNlcnZpY2U+KEF1dGhTZXJ2aWNlKTtcclxuICAgIHRoaXMuaWQgPSB0aGlzLl9yb3V0ZS5zbmFwc2hvdC5wYXJlbnQucGFyYW1NYXAuZ2V0KCdpZCcpO1xyXG4gICAgdGhpcy5vcmdTdWJzID0gdGhpcy5fc3RvcmVzZXJ2aWNlLmN1cnJlbnRTdG9yZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICB0aGlzLlJCQUNPUkcgPSByZXNbJ1JCQUNPUkcnXTtcclxuICAgICAgICB0aGlzLm9yZ0lkID0gcGFyc2VJbnQodGhpcy5SQkFDT1JHWydvcmdJRCddKTtcclxuICAgICAgICBpZiAodGhpcy5vcmdJZCkge1xyXG4gICAgICAgICAgdGhpcy5nZXRBbGxQYWdlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ2V0UGFnZVR5cGVzKCk7XHJcbiAgICB0aGlzLmluaXRUYWJDb25maWdGb3JtKCk7XHJcbiAgICB0aGlzLnNldEN1cnJlbnRGb3JtRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLm9yZ1N1YnMudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIHNldEN1cnJlbnRGb3JtRGF0YSgpIHtcclxuICAgIHRoaXMucGFnZUJ1aWxkZXJBZGRTZXJ2aWNlLmN1cnJlbnRGb3JtRGF0YS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLmZvcm1EYXRhID0gZGF0YTtcclxuICAgICAgY29uc3QgdGFiQ29uZmlnID0gSlNPTi5wYXJzZSh0aGlzLmZvcm1EYXRhPy50YWJjb25maWcpO1xyXG4gICAgICBpZiAodGFiQ29uZmlnKSB7XHJcbiAgICAgICAgY29uc3QgdGFic0NvbnRyb2wgPSA8VW50eXBlZEZvcm1BcnJheT50aGlzLnRhYnNGb3JtLmNvbnRyb2xzWyd0YWJzJ107XHJcbiAgICAgICAgdGFic0NvbnRyb2wuY29udHJvbHMgPSBbXTtcclxuICAgICAgICBpZiAodGFiQ29uZmlnPy5sZW5ndGgpIHtcclxuICAgICAgICAgIHRhYkNvbmZpZy5mb3JFYWNoKHZhbCA9PiB7XHJcbiAgICAgICAgICAgIHRhYnNDb250cm9sLnB1c2goXHJcbiAgICAgICAgICAgICAgdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IHZhbC5pZCxcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiB2YWwucGF0aG5hbWUsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiB2YWwudHlwZSA/IHZhbC50eXBlIDogJ1JPVVRJTkcnXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbml0VGFiQ29uZmlnRm9ybSgpOiB2b2lkIHtcclxuICAgIHRoaXMudGFic0Zvcm0gPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgIHRhYnM6IHRoaXMuX2Zvcm1CdWlsZGVyLmFycmF5KFt0aGlzLmFkZFRhYkdyb3VwKCldKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRQYWdlVHlwZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5nZXREcm9wRG93blZhbHVlcygncGFnZScpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICB0aGlzLnBhZ2VUeXBlTGlzdCA9IHJlc3VsdFsnZGF0YSddO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxQYWdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMucGFnZUJ1aWxkZXJBZGRTZXJ2aWNlLmdldE9yZ0xpc3QodGhpcy5vcmdJZCkuc3Vic2NyaWJlKFxyXG4gICAgICAocmVzOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICB0aGlzLnBhZ2VMaXN0ID0gcmVzPy5kYXRhPy5maWx0ZXIocGFnZSA9PiBwYWdlPy5wYWdlVHlwZURldGFpbHM/LmtleSAhPT0gJ0JUUCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgX2VyciA9PiB0aGlzLl9hbGVydC5lcnJvcihBcHBDb25zdGFudHMuZXJyb3JNZXNzYWdlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdGVkUGFnZVR5cGUoZXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgIHRoaXMuZmlsdGVyZWRQYWdlTGlzdCA9IHRoaXMucGFnZUxpc3QuZmlsdGVyKHBhZ2UgPT4gcGFnZS5wYWdlVHlwZURldGFpbHMuaWQgPT09IGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkVGFiR3JvdXAoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgIHBhdGhuYW1lOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXHJcbiAgICAgIHR5cGU6IFsnUk9VVElORyddLFxyXG4gICAgICBpZDogWycnXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXQgdGFicygpIHtcclxuICAgIHJldHVybiAodGhpcy50YWJzRm9ybS5nZXQoJ3RhYnMnKSBhcyBVbnR5cGVkRm9ybUFycmF5KS5jb250cm9scyBhcyBVbnR5cGVkRm9ybUNvbnRyb2xbXTtcclxuICB9XHJcblxyXG4gIC8vIGFkZFRhYigpIHtcclxuICAvLyAgIGNvbnN0IHRhYnMgPSAodGhpcy50YWJzRm9ybS5nZXQoJ3RhYnMnKSBhcyBGb3JtQXJyYXkpLmNvbnRyb2xzO1xyXG4gIC8vICAgdGFicy5wdXNoKHRoaXMuYWRkVGFiR3JvdXAoKSk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBwYXRjaFRhYih0YWJWYWx1ZSkge1xyXG4gIC8vICAgY29uc3QgdGFicyA9ICh0aGlzLnRhYnNGb3JtLmdldCgndGFicycpIGFzIEZvcm1BcnJheSkuY29udHJvbHM7XHJcbiAgLy8gICB0YWJzLnB1c2godGFiVmFsdWUpO1xyXG4gIC8vIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWV0aG9kIHRvIFJlbW92ZSB0YWJcclxuICAgKiBAcGFyYW0gX2luZGV4IGluZGV4IG9mIHRoZSB0YWIgdG8gYmUgcmVtb3ZlZFxyXG4gICAqL1xyXG4gIC8vIHJlbW92ZVRhYihfaW5kZXg6IG51bWJlcikge1xyXG4gIC8vICAgY29uc3QgdGFicyA9IHRoaXMudGFic0Zvcm0uZ2V0KCd0YWJzJykgYXMgRm9ybUFycmF5O1xyXG4gIC8vICAgdGFicy5yZW1vdmVBdChfaW5kZXgpO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gZ2V0UGFnZShpZD86IGFueSkge1xyXG4gIC8vICAgY29uc29sZS5sb2coaWQpO1xyXG4gIC8vICAgaWYgKGlkICYmIGlkICE9PSAnJykge1xyXG4gIC8vICAgICByZXR1cm4gdGhpcy5wYWdlTGlzdC5maWx0ZXIoXyA9PiBfLnBhZ2VUeXBlRGV0YWlscy5pZCA9PSBpZCk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG4gIGNhbmNlbCgpIHtcclxuICAgIHRoaXMucGFnZUJ1aWxkZXJBZGRTZXJ2aWNlLnJldHVyblRvTGlzdCgpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVRhYnMocHVibGlzaDogYm9vbGVhbikge1xyXG4gICAgaWYgKCF0aGlzLnRhYnNGb3JtLnZhbGlkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9hbGVydC5lcnJvcignUGxlYXNlIGZpbGwgYWxsIG1hbmRhdG9yeSBmaWVsZHMuJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzRm9ybS5nZXRSYXdWYWx1ZSgpLnRhYnM7XHJcbiAgICB0aGlzLmZvcm1EYXRhLnRhYmNvbmZpZyA9IEpTT04uc3RyaW5naWZ5KHRhYnMpO1xyXG4gICAgaWYgKCF0aGlzLmlkKSB7XHJcbiAgICAgIHRoaXMuZm9ybURhdGEucHVibGlzaGVkID0gcHVibGlzaDtcclxuICAgICAgdGhpcy5wYWdlQnVpbGRlckFkZFNlcnZpY2UuY3JlYXRlUGFnZSh0aGlzLmZvcm1EYXRhKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVzdWx0WydkYXRhJ107XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtgcGFnZXMvcGFnZS1kZXNpZ24vdmVyc2lvbnMvJHtkYXRhLmlkfWBdKTtcclxuICAgICAgICBpZiAocHVibGlzaCkge1xyXG4gICAgICAgICAgdGhpcy5fYWxlcnQuc3VjY2VzcyhcclxuICAgICAgICAgICAgYFRhYiBQYWdlIFZlcnNpb24gJHtkYXRhLnZlcnNpb24gfHwgZGF0YS5hY3RpdmVWZXJzaW9uLnZlcnNpb259ICBpcyBwdWJsaXNoZWQgc3VjY2Vzc2Z1bGx5YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5fYWxlcnQuc3VjY2VzcygnVGFiIFBhZ2UgYWRkZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGZvcm1EZXRhaWxzID0gdGhpcy5mb3JtRGF0YTtcclxuICAgICAgZm9ybURldGFpbHMuaWQgPSB0aGlzLmlkO1xyXG4gICAgICBmb3JtRGV0YWlscy5wdWJsaXNoZWQgPSBwdWJsaXNoO1xyXG4gICAgICB0aGlzLnBhZ2VCdWlsZGVyU2VydmljZS51cGRhdGVQYWdlVmVyc2lvbih0aGlzLmlkLCBmb3JtRGV0YWlscykuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2BwYWdlcy9wYWdlLWRlc2lnbi92ZXJzaW9ucy8ke2Zvcm1EZXRhaWxzLnBhZ2VpZH1gXSk7XHJcbiAgICAgICAgdGhpcy5fYWxlcnQuc3VjY2VzcygnVGFiIFBhZ2UgdXBkYXRlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJwYWdlLWRlc2lnbi1iYXNpYy1pbmZvXCI+XHJcbiAgPHAtY2FyZCBzdHlsZUNsYXNzPVwicmJhYy1jYXJkIHctMTAwIG1iLTJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJzdHJpcF9oZWFkIHBhZ2UtZGVzaWduZXIgdG9nZ2xlbGVmdFwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInJlcG9ydF9oZWFkIGZvbnQtd2VpZ2h0LWJvbGRcIj5Sb3V0aW5nIENvbmZpZ3VyYXRpb248L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwLWZsdWlkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJcIj5cclxuICAgICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cInRhYnNGb3JtXCI+XHJcbiAgICAgICAgICA8ZGl2IGZvcm1BcnJheU5hbWU9XCJ0YWJzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdGFiczsgbGV0IGkgPSBpbmRleFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBbZm9ybUdyb3VwTmFtZV09XCJpXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1maWVsZCBwLWNvbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwbmFtZVwiIGNsYXNzPVwicmVmZXJyYWwtZm9ybS1sYWJlbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgID5Sb3V0aW5nIFBhdGhcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlcXVpcmVkZmllbGQgdGV4dC1kYW5nZXJcIj4qPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8cC1kcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgIFtvcHRpb25zXT1cImN1c3RvbVBhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFJvdXRpbmcgUGFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXRobmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uTGFiZWw9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25WYWx1ZT1cImNvbXBvbmVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicGF0aG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkS2V5PVwiUEFHX0RFU19ST1VURV9DT05GSUdfUk9VVElOR19QQVRIXCJcclxuICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2UpPVwic2VsZWN0ZWRQYWdlKCRldmVudC52YWx1ZSlcIj5cclxuICAgICAgICAgICAgICAgICAgPC9wLWRyb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbVsnY29udHJvbHMnXS5wYXRobmFtZS5lcnJvcnMgJiYgaXRlbVsnY29udHJvbHMnXS5wYXRobmFtZS50b3VjaGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwicC1lcnJvciBibG9ja1wiPlJvdXRpbmcgUGF0aCBpcyByZXF1aXJlZCA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzPVwicHVsbC1yaWdodCBtYi0yIGJ0biBidG4tcHJpbWFyeSBidG5jb21tb25cIlxyXG4gICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhdGFic0Zvcm0udmFsaWRcIlxyXG4gICAgICAgICAgICAgIChjbGljayk9XCJzYXZlVGFicyh0cnVlKVwiXHJcbiAgICAgICAgICAgICAgZmllbGRLZXk9XCJQQUdfREVTX1JPVVRFX0NPTkZJR19QVUJMSVNIXCI+XHJcbiAgICAgICAgICAgICAgPGVtIGNsYXNzPVwiZmEgZmEtc2F2ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvZW0+IFB1Ymxpc2hcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzcz1cInB1bGwtcmlnaHQgbWItMiBtci0yIGJ0biBidG4tcHJpbWFyeSBidG5jb21tb25cIlxyXG4gICAgICAgICAgICAgIGZpZWxkS2V5PVwiUEFHX0RFU19ST1VURV9DT05GSUdfU0FWRV9UQUJTXCJcclxuICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIXRhYnNGb3JtLnZhbGlkXCJcclxuICAgICAgICAgICAgICAoY2xpY2spPVwic2F2ZVRhYnMoZmFsc2UpXCI+XHJcbiAgICAgICAgICAgICAgPGVtIGNsYXNzPVwiZmEgZmEtc2F2ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvZW0+IFNhdmUgVGFic1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInB1bGwtcmlnaHQgbWItMiBtci0yIGJ0biBidG4tY2FuY2VsXCIgKGNsaWNrKT1cImNhbmNlbCgpXCI+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9wLWNhcmQ+XHJcbjwvZGl2PlxyXG4iXX0=