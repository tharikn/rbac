import { Component, Input } from '@angular/core';
import { RBACINFO } from './@core/urls/analytics-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./@core/permissions/permission.store";
import * as i2 from "./@core/service/data-store.service";
import * as i3 from "./pics-analytics/analytics/analytics.component";
export class MicrostrategyComponent {
    constructor(permissionStore, _storeservice) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
        this.RBACORG = new RBACINFO();
    }
    ngOnInit() {
        this.analyticsEvent.subscribe((val) => {
            this.RBACORG = val.RBACORG;
            this.PERMISSION = val.PERMISSION;
            this._storeservice.setData('RBACORG', this.RBACORG);
            this.permissionStore.setStore(this.PERMISSION);
        });
    }
}
MicrostrategyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MicrostrategyComponent, deps: [{ token: i1.PermissionStore }, { token: i2.DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
MicrostrategyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: MicrostrategyComponent, selector: "microstrategy", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", analyticsEvent: "analyticsEvent" }, ngImport: i0, template: `
  <lib-analytics></lib-analytics>

  `, isInline: true, components: [{ type: i3.AnalyticsComponent, selector: "lib-analytics" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MicrostrategyComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'microstrategy',
                    template: `
  <lib-analytics></lib-analytics>

  `,
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.PermissionStore }, { type: i2.DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], analyticsEvent: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljcm9zdHJhdGVneS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9taWNyb3N0cmF0ZWd5L3NyYy9saWIvbWljcm9zdHJhdGVneS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7OztBQWM3RCxNQUFNLE9BQU8sc0JBQXNCO0lBS2pDLFlBQW9CLGVBQWdDLEVBQzFDLGFBQStCO1FBRHJCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMxQyxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFMekIsWUFBTyxHQUFjLElBQUksUUFBUSxFQUFFLENBQUM7SUFLUCxDQUFDO0lBRTlDLFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDOztvSEFmVyxzQkFBc0I7d0dBQXRCLHNCQUFzQixpSkFQdkI7OztHQUdUOzRGQUlVLHNCQUFzQjtrQkFUbEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFOzs7R0FHVDtvQkFDRCxNQUFNLEVBQUUsRUFDUDtpQkFDRjtxSUFFaUIsT0FBTztzQkFBdEIsS0FBSztnQkFDVSxVQUFVO3NCQUF6QixLQUFLO2dCQUNVLGNBQWM7c0JBQTdCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUkJBQ0lORk8gfSBmcm9tICcuL0Bjb3JlL3VybHMvYW5hbHl0aWNzLXVybC5jb25maWcnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFBlcm1pc3Npb25TdG9yZSB9IGZyb20gJy4vQGNvcmUvcGVybWlzc2lvbnMvcGVybWlzc2lvbi5zdG9yZSc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuL0Bjb3JlL3NlcnZpY2UvZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWljcm9zdHJhdGVneScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8bGliLWFuYWx5dGljcz48L2xpYi1hbmFseXRpY3M+XHJcblxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWljcm9zdHJhdGVneUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgcHVibGljIFJCQUNPUkc/OiBSQkFDSU5GTyA9IG5ldyBSQkFDSU5GTygpO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBQRVJNSVNTSU9OPzogYW55O1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBhbmFseXRpY3NFdmVudCE6IE9ic2VydmFibGU8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwZXJtaXNzaW9uU3RvcmU6IFBlcm1pc3Npb25TdG9yZSxcclxuICAgIHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hbmFseXRpY3NFdmVudC5zdWJzY3JpYmUoKHZhbDogYW55KSA9PiB7XHJcbiAgICAgdGhpcy5SQkFDT1JHID0gdmFsLlJCQUNPUkc7XHJcbiAgICAgdGhpcy5QRVJNSVNTSU9OID0gdmFsLlBFUk1JU1NJT047XHJcbiAgICAgdGhpcy5fc3RvcmVzZXJ2aWNlLnNldERhdGEoJ1JCQUNPUkcnLCB0aGlzLlJCQUNPUkcpO1xyXG4gICAgIHRoaXMucGVybWlzc2lvblN0b3JlLnNldFN0b3JlKHRoaXMuUEVSTUlTU0lPTik7XHJcbiAgIH0pXHJcbiB9XHJcblxyXG59XHJcbiJdfQ==