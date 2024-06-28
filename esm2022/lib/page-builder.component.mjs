import { Component, Input } from '@angular/core';
import { RBACINFO } from './pics-pagebuilder/@core/url/page-builder-add-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./pics-pagebuilder/@core/permissions/permission.store";
import * as i2 from "./pics-pagebuilder/@core/services/data-store.service";
import * as i3 from "@angular/router";
export class PageBuilderAddComponent {
    permissionStore;
    _storeservice;
    RBACORG = new RBACINFO();
    PERMISSION;
    COMMONSERVICE;
    INPUTVALIDATIONMETHOD;
    constructor(permissionStore, _storeservice) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
    }
    ngOnInit() {
        this.COMMONSERVICE.subscribe((val) => {
            if (val) {
                this.RBACORG = val.RBACORG;
                this.PERMISSION = val.PERMISSION;
                this._storeservice.setData('RBACORG', this.RBACORG);
                this.permissionStore.setStore(this.PERMISSION);
                this._storeservice.setData('HTTPSERVICE', val.httpService);
                this._storeservice.setData('INPUTVALIDATIONMETHOD', this.INPUTVALIDATIONMETHOD);
            }
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddComponent, deps: [{ token: i1.PermissionStore }, { token: i2.DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: PageBuilderAddComponent, selector: "pagebuilder", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", COMMONSERVICE: "COMMONSERVICE", INPUTVALIDATIONMETHOD: "INPUTVALIDATIONMETHOD" }, ngImport: i0, template: `
  <router-outlet></router-outlet>
  `, isInline: true, dependencies: [{ kind: "directive", type: i3.RouterOutlet, selector: "router-outlet", inputs: ["name"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageBuilderAddComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pagebuilder', template: `
  <router-outlet></router-outlet>
  ` }]
        }], ctorParameters: function () { return [{ type: i1.PermissionStore }, { type: i2.DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], COMMONSERVICE: [{
                type: Input
            }], INPUTVALIDATIONMETHOD: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1idWlsZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL3BhZ2UtYnVpbGRlci9zcmMvbGliL3BhZ2UtYnVpbGRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFJekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBEQUEwRCxDQUFDOzs7OztBQVVwRixNQUFNLE9BQU8sdUJBQXVCO0lBTXhCO0lBQ0E7SUFOTSxPQUFPLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztJQUNuQyxVQUFVLENBQU07SUFDaEIsYUFBYSxDQUFrQjtJQUMvQixxQkFBcUIsQ0FBTztJQUM1QyxZQUNVLGVBQWdDLEVBQ2hDLGFBQStCO1FBRC9CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7SUFFekMsQ0FBQztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ3hDLElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztnQkFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzFELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2FBQ2pGO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFFSixDQUFDO3dHQXRCVSx1QkFBdUI7NEZBQXZCLHVCQUF1Qiw2TEFOeEI7O0dBRVQ7OzRGQUlVLHVCQUF1QjtrQkFSbkMsU0FBUzsrQkFDRSxhQUFhLFlBQ2I7O0dBRVQ7cUlBS2UsT0FBTztzQkFBdEIsS0FBSztnQkFDVSxVQUFVO3NCQUF6QixLQUFLO2dCQUNVLGFBQWE7c0JBQTVCLEtBQUs7Z0JBQ1UscUJBQXFCO3NCQUFwQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUGVybWlzc2lvblN0b3JlIH0gZnJvbSAnLi9waWNzLXBhZ2VidWlsZGVyL0Bjb3JlL3Blcm1pc3Npb25zL3Blcm1pc3Npb24uc3RvcmUnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLXBhZ2VidWlsZGVyL0Bjb3JlL3NlcnZpY2VzL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IFJCQUNJTkZPIH0gZnJvbSAnLi9waWNzLXBhZ2VidWlsZGVyL0Bjb3JlL3VybC9wYWdlLWJ1aWxkZXItYWRkLXVybC5jb25maWcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwYWdlYnVpbGRlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlQnVpbGRlckFkZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgcHVibGljIFJCQUNPUkc6IFJCQUNJTkZPID0gbmV3IFJCQUNJTkZPKCk7XHJcbiAgQElucHV0KCkgcHVibGljIFBFUk1JU1NJT046IGFueTtcclxuICBASW5wdXQoKSBwdWJsaWMgQ09NTU9OU0VSVklDRTogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBJTlBVVFZBTElEQVRJT05NRVRIT0Q/OiBhbnk7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHBlcm1pc3Npb25TdG9yZTogUGVybWlzc2lvblN0b3JlLFxyXG4gICAgcHJpdmF0ZSBfc3RvcmVzZXJ2aWNlOiBEYXRhU3RvcmVTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgfVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5DT01NT05TRVJWSUNFLnN1YnNjcmliZSgodmFsOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHZhbCkge1xyXG4gICAgICAgIHRoaXMuUkJBQ09SRyA9IHZhbC5SQkFDT1JHO1xyXG4gICAgICAgIHRoaXMuUEVSTUlTU0lPTiA9IHZhbC5QRVJNSVNTSU9OO1xyXG4gICAgICAgIHRoaXMuX3N0b3Jlc2VydmljZS5zZXREYXRhKCdSQkFDT1JHJywgdGhpcy5SQkFDT1JHKTtcclxuICAgICAgICB0aGlzLnBlcm1pc3Npb25TdG9yZS5zZXRTdG9yZSh0aGlzLlBFUk1JU1NJT04pO1xyXG4gICAgICAgIHRoaXMuX3N0b3Jlc2VydmljZS5zZXREYXRhKCdIVFRQU0VSVklDRScsdmFsLmh0dHBTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLl9zdG9yZXNlcnZpY2Uuc2V0RGF0YSgnSU5QVVRWQUxJREFUSU9OTUVUSE9EJywgdGhpcy5JTlBVVFZBTElEQVRJT05NRVRIT0QpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgfVxyXG59XHJcbiJdfQ==