import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RBACINFO } from './pics-profile/@core/urls/rbac-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./pics-profile/@core/permissions/permission.store";
import * as i2 from "./pics-profile/@core/service/data-store.service";
import * as i3 from "./pics-profile/profile/profile.component";
export class ProfileComponent {
    permissionStore;
    _storeservice;
    RBACORG = new RBACINFO();
    PERMISSION;
    profileEvent;
    libOnPasswordSuccess = new EventEmitter();
    constructor(permissionStore, _storeservice) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
    }
    ngOnInit() {
        this.profileEvent.subscribe((val) => {
            this.RBACORG = val.RBACORG;
            this.PERMISSION = val.PERMISSION;
            this._storeservice.setData('RBACORG', this.RBACORG);
            this.permissionStore.setStore(this.PERMISSION);
        });
    }
    onPasswordSuccess($event) {
        this.libOnPasswordSuccess.emit($event);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileComponent, deps: [{ token: i1.PermissionStore }, { token: i2.DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ProfileComponent, selector: "profile", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", profileEvent: "profileEvent" }, outputs: { libOnPasswordSuccess: "libOnPasswordSuccess" }, ngImport: i0, template: `
    <core-profile (passwordSuccess)="onPasswordSuccess($event)"></core-profile>
  `, isInline: true, dependencies: [{ kind: "component", type: i3.ProfileComponent, selector: "core-profile", outputs: ["passwordSuccess"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileComponent, decorators: [{
            type: Component,
            args: [{ selector: 'profile', template: `
    <core-profile (passwordSuccess)="onPasswordSuccess($event)"></core-profile>
  ` }]
        }], ctorParameters: function () { return [{ type: i1.PermissionStore }, { type: i2.DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], profileEvent: [{
                type: Input
            }], libOnPasswordSuccess: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvcHJvZmlsZS9zcmMvbGliL3Byb2ZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUMsWUFBWSxFQUFFLEtBQUssRUFBUyxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOzs7OztBQWFyRSxNQUFNLE9BQU8sZ0JBQWdCO0lBT2pCO0lBQ0E7SUFQTSxPQUFPLEdBQWMsSUFBSSxRQUFRLEVBQUUsQ0FBQztJQUNwQyxVQUFVLENBQU87SUFDakIsWUFBWSxDQUFtQjtJQUNyQyxvQkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXBELFlBQ1UsZUFBZ0MsRUFDaEMsYUFBK0I7UUFEL0Isb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtJQUV6QyxDQUFDO0lBQ0QsUUFBUTtRQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxNQUFNO1FBQ3RCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQzt3R0FyQlUsZ0JBQWdCOzRGQUFoQixnQkFBZ0Isa01BTmpCOztHQUVUOzs0RkFJVSxnQkFBZ0I7a0JBUjVCLFNBQVM7K0JBQ0UsU0FBUyxZQUNUOztHQUVUO3FJQUtlLE9BQU87c0JBQXRCLEtBQUs7Z0JBQ1UsVUFBVTtzQkFBekIsS0FBSztnQkFDVSxZQUFZO3NCQUEzQixLQUFLO2dCQUNJLG9CQUFvQjtzQkFBN0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJCQUNJTkZPIH0gZnJvbSAnLi9waWNzLXByb2ZpbGUvQGNvcmUvdXJscy9yYmFjLXVybC5jb25maWcnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFBlcm1pc3Npb25TdG9yZSB9IGZyb20gJy4vcGljcy1wcm9maWxlL0Bjb3JlL3Blcm1pc3Npb25zL3Blcm1pc3Npb24uc3RvcmUnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLXByb2ZpbGUvQGNvcmUvc2VydmljZS9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwcm9maWxlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGNvcmUtcHJvZmlsZSAocGFzc3dvcmRTdWNjZXNzKT1cIm9uUGFzc3dvcmRTdWNjZXNzKCRldmVudClcIj48L2NvcmUtcHJvZmlsZT5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBSQkFDT1JHPzogUkJBQ0lORk8gPSBuZXcgUkJBQ0lORk8oKTtcclxuICBASW5wdXQoKSBwdWJsaWMgUEVSTUlTU0lPTj86IGFueTtcclxuICBASW5wdXQoKSBwdWJsaWMgcHJvZmlsZUV2ZW50ITogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIEBPdXRwdXQoKSBsaWJPblBhc3N3b3JkU3VjY2VzcyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHBlcm1pc3Npb25TdG9yZTogUGVybWlzc2lvblN0b3JlLFxyXG4gICAgcHJpdmF0ZSBfc3RvcmVzZXJ2aWNlOiBEYXRhU3RvcmVTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgfVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgIHRoaXMucHJvZmlsZUV2ZW50LnN1YnNjcmliZSgodmFsOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5SQkFDT1JHID0gdmFsLlJCQUNPUkc7XHJcbiAgICAgIHRoaXMuUEVSTUlTU0lPTiA9IHZhbC5QRVJNSVNTSU9OO1xyXG4gICAgICB0aGlzLl9zdG9yZXNlcnZpY2Uuc2V0RGF0YSgnUkJBQ09SRycsIHRoaXMuUkJBQ09SRyk7XHJcbiAgICAgIHRoaXMucGVybWlzc2lvblN0b3JlLnNldFN0b3JlKHRoaXMuUEVSTUlTU0lPTik7XHJcbiAgICB9KVxyXG4gIH1cclxuICBvblBhc3N3b3JkU3VjY2VzcygkZXZlbnQpIHtcclxuICAgIHRoaXMubGliT25QYXNzd29yZFN1Y2Nlc3MuZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=