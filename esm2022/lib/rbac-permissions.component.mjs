import { Component, Input } from '@angular/core';
import { RBACINFO } from './pics-rbac-permissions/@core/urls/rbac-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./pics-rbac-permissions/@core/permissions/permission.store";
import * as i2 from "./pics-rbac-permissions/@core/service/data-store.service";
import * as i3 from "./pics-rbac-permissions/permissions/permissions.component";
export class RbacPermissionsComponent {
    permissionStore;
    _storeservice;
    RBACORG = new RBACINFO();
    PERMISSION;
    permissionEvent;
    COMMONSERVICE;
    INPUTVALIDATIONMETHOD;
    constructor(permissionStore, _storeservice) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
    }
    ngOnInit() {
        this.permissionEvent.subscribe((val) => {
            this.RBACORG = val.RBACORG;
            this.PERMISSION = val.PERMISSION;
            this._storeservice.setData('RBACORG', this.RBACORG);
            this.permissionStore.setStore(this.PERMISSION);
            this._storeservice.setData('HTTPSERVICE', val.httpService);
            this._storeservice.setData('INPUTVALIDATIONMETHOD', this.INPUTVALIDATIONMETHOD);
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacPermissionsComponent, deps: [{ token: i1.PermissionStore }, { token: i2.DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: RbacPermissionsComponent, selector: "rbac-permissions", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", permissionEvent: "permissionEvent", COMMONSERVICE: "COMMONSERVICE", INPUTVALIDATIONMETHOD: "INPUTVALIDATIONMETHOD" }, ngImport: i0, template: `
      <permissions></permissions>
  `, isInline: true, dependencies: [{ kind: "component", type: i3.PermissionsComponent, selector: "permissions" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacPermissionsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'rbac-permissions', template: `
      <permissions></permissions>
  ` }]
        }], ctorParameters: function () { return [{ type: i1.PermissionStore }, { type: i2.DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], permissionEvent: [{
                type: Input
            }], COMMONSERVICE: [{
                type: Input
            }], INPUTVALIDATIONMETHOD: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy1wZXJtaXNzaW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvcmJhYy1wZXJtaXNzaW9ucy9zcmMvbGliL3JiYWMtcGVybWlzc2lvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBSXpELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7Ozs7QUFVOUUsTUFBTSxPQUFPLHdCQUF3QjtJQVN6QjtJQUNBO0lBUk0sT0FBTyxHQUFjLElBQUksUUFBUSxFQUFFLENBQUM7SUFDcEMsVUFBVSxDQUFPO0lBQ2pCLGVBQWUsQ0FBbUI7SUFDbEMsYUFBYSxDQUFpQjtJQUM5QixxQkFBcUIsQ0FBUTtJQUU3QyxZQUNVLGVBQWdDLEVBQ2hDLGFBQStCO1FBRC9CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7SUFFekMsQ0FBQztJQUNELFFBQVE7UUFDTCxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNsRixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7d0dBdEJVLHdCQUF3Qjs0RkFBeEIsd0JBQXdCLHNPQU56Qjs7R0FFVDs7NEZBSVUsd0JBQXdCO2tCQVJwQyxTQUFTOytCQUNFLGtCQUFrQixZQUNsQjs7R0FFVDtxSUFNZSxPQUFPO3NCQUF0QixLQUFLO2dCQUNVLFVBQVU7c0JBQXpCLEtBQUs7Z0JBQ1UsZUFBZTtzQkFBOUIsS0FBSztnQkFDVSxhQUFhO3NCQUE1QixLQUFLO2dCQUNVLHFCQUFxQjtzQkFBcEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFBlcm1pc3Npb25TdG9yZSB9IGZyb20gJy4vcGljcy1yYmFjLXBlcm1pc3Npb25zL0Bjb3JlL3Blcm1pc3Npb25zL3Blcm1pc3Npb24uc3RvcmUnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLXJiYWMtcGVybWlzc2lvbnMvQGNvcmUvc2VydmljZS9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSQkFDSU5GTyB9IGZyb20gJy4vcGljcy1yYmFjLXBlcm1pc3Npb25zL0Bjb3JlL3VybHMvcmJhYy11cmwuY29uZmlnJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncmJhYy1wZXJtaXNzaW9ucycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgPHBlcm1pc3Npb25zPjwvcGVybWlzc2lvbnM+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYmFjUGVybWlzc2lvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgUkJBQ09SRz86IFJCQUNJTkZPID0gbmV3IFJCQUNJTkZPKCk7XHJcbiAgQElucHV0KCkgcHVibGljIFBFUk1JU1NJT04/OiBhbnk7XHJcbiAgQElucHV0KCkgcHVibGljIHBlcm1pc3Npb25FdmVudCE6IE9ic2VydmFibGU8YW55PjtcclxuICBASW5wdXQoKSBwdWJsaWMgQ09NTU9OU0VSVklDRTpPYnNlcnZhYmxlPGFueT47XHJcbiAgQElucHV0KCkgcHVibGljIElOUFVUVkFMSURBVElPTk1FVEhPRD8gOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBwZXJtaXNzaW9uU3RvcmU6IFBlcm1pc3Npb25TdG9yZSxcclxuICAgIHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZVxyXG4gICkge1xyXG4gIH1cclxuICBuZ09uSW5pdCgpIHtcclxuICAgICB0aGlzLnBlcm1pc3Npb25FdmVudC5zdWJzY3JpYmUoKHZhbDogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMuUkJBQ09SRyA9IHZhbC5SQkFDT1JHO1xyXG4gICAgICB0aGlzLlBFUk1JU1NJT04gPSB2YWwuUEVSTUlTU0lPTjtcclxuICAgICAgdGhpcy5fc3RvcmVzZXJ2aWNlLnNldERhdGEoJ1JCQUNPUkcnLCB0aGlzLlJCQUNPUkcpO1xyXG4gICAgICB0aGlzLnBlcm1pc3Npb25TdG9yZS5zZXRTdG9yZSh0aGlzLlBFUk1JU1NJT04pO1xyXG4gICAgICB0aGlzLl9zdG9yZXNlcnZpY2Uuc2V0RGF0YSgnSFRUUFNFUlZJQ0UnLHZhbC5odHRwU2VydmljZSk7XHJcbiAgICAgIHRoaXMuX3N0b3Jlc2VydmljZS5zZXREYXRhKCdJTlBVVFZBTElEQVRJT05NRVRIT0QnLCB0aGlzLklOUFVUVkFMSURBVElPTk1FVEhPRCk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==