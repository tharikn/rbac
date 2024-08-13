import { Component, Input } from '@angular/core';
import { RBACINFO } from './pics-dynamic/@core/urls/rbac-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./pics-dynamic/@core/permissions/permission.store";
import * as i2 from "./pics-dynamic/@core/service/data-store.service";
export class DynamicComponent {
    permissionStore;
    _storeservice;
    RBACORG = new RBACINFO();
    PERMISSION;
    tabEvent;
    constructor(permissionStore, _storeservice) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
    }
    ngOnInit() {
        this.tabEvent.subscribe(val => {
            this.RBACORG = val.RBACORG;
            this.PERMISSION = val.PERMISSION;
            this._storeservice.setData('RBACORG', this.RBACORG);
            this.permissionStore.setStore(this.PERMISSION);
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicComponent, deps: [{ token: i1.PermissionStore }, { token: i2.DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DynamicComponent, selector: "lib-dynamic", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", tabEvent: "tabEvent" }, ngImport: i0, template: `
     
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-dynamic', template: `
     
  ` }]
        }], ctorParameters: function () { return [{ type: i1.PermissionStore }, { type: i2.DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], tabEvent: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9keW5hbWljL3NyYy9saWIvZHluYW1pYy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOzs7O0FBYXJFLE1BQU0sT0FBTyxnQkFBZ0I7SUFNakI7SUFDQTtJQU5NLE9BQU8sR0FBYyxJQUFJLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLFVBQVUsQ0FBTztJQUNqQixRQUFRLENBQW1CO0lBRTNDLFlBQ1UsZUFBZ0MsRUFDaEMsYUFBK0I7UUFEL0Isb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtJQUV6QyxDQUFDO0lBQ0QsUUFBUTtRQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO3dHQWpCVSxnQkFBZ0I7NEZBQWhCLGdCQUFnQixtSUFOakI7O0dBRVQ7OzRGQUlVLGdCQUFnQjtrQkFSNUIsU0FBUzsrQkFDRSxhQUFhLFlBQ2I7O0dBRVQ7cUlBS2UsT0FBTztzQkFBdEIsS0FBSztnQkFDVSxVQUFVO3NCQUF6QixLQUFLO2dCQUNVLFFBQVE7c0JBQXZCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSQkFDSU5GTyB9IGZyb20gJy4vcGljcy1keW5hbWljL0Bjb3JlL3VybHMvcmJhYy11cmwuY29uZmlnJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBlcm1pc3Npb25TdG9yZSB9IGZyb20gJy4vcGljcy1keW5hbWljL0Bjb3JlL3Blcm1pc3Npb25zL3Blcm1pc3Npb24uc3RvcmUnO1xuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4vcGljcy1keW5hbWljL0Bjb3JlL3NlcnZpY2UvZGF0YS1zdG9yZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWR5bmFtaWMnLFxuICB0ZW1wbGF0ZTogYFxuICAgICBcbiAgYCxcbiAgc3R5bGVzOiBbXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBSQkFDT1JHPzogUkJBQ0lORk8gPSBuZXcgUkJBQ0lORk8oKTtcbiAgQElucHV0KCkgcHVibGljIFBFUk1JU1NJT04/OiBhbnk7XG4gIEBJbnB1dCgpIHB1YmxpYyB0YWJFdmVudCE6IE9ic2VydmFibGU8YW55PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBlcm1pc3Npb25TdG9yZTogUGVybWlzc2lvblN0b3JlLFxuICAgIHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZVxuICApIHtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICAgdGhpcy50YWJFdmVudC5zdWJzY3JpYmUodmFsID0+IHtcbiAgICAgIHRoaXMuUkJBQ09SRyA9IHZhbC5SQkFDT1JHO1xuICAgICAgdGhpcy5QRVJNSVNTSU9OID0gdmFsLlBFUk1JU1NJT047XG4gICAgICB0aGlzLl9zdG9yZXNlcnZpY2Uuc2V0RGF0YSgnUkJBQ09SRycsIHRoaXMuUkJBQ09SRyk7XG4gICAgICB0aGlzLnBlcm1pc3Npb25TdG9yZS5zZXRTdG9yZSh0aGlzLlBFUk1JU1NJT04pO1xuICAgIH0pXG4gIH1cbn1cbiJdfQ==