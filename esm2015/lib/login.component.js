import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RBACINFO } from './pics-login/@core/urls/rbac-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./pics-login/@core/permissions/permission.store";
import * as i2 from "./pics-login/@core/service/data-store.service";
import * as i3 from "./pics-login/login/login.component";
export class LoginComponent {
    constructor(permissionStore, _storeservice) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
        this.RBACORG = new RBACINFO();
        this.libOnPasswordExpired = new EventEmitter();
        this.libOnLoginSuccessful = new EventEmitter();
    }
    ngOnInit() {
        this.loginEvent.subscribe((val) => {
            this.RBACORG = val.RBACORG;
            this.PERMISSION = val.PERMISSION;
            this.LOGININFO = val.LOGININFO;
            this._storeservice.setData('RBACORG', this.RBACORG);
            this.permissionStore.setStore(this.PERMISSION);
        });
    }
    onPasswordExpired($event) {
        this.libOnPasswordExpired.emit($event);
    }
    onLoginSuccessful($event) {
        this.libOnLoginSuccessful.emit($event);
    }
}
LoginComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LoginComponent, deps: [{ token: i1.PermissionStore }, { token: i2.DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
LoginComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: LoginComponent, selector: "login", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", LOGININFO: "LOGININFO", loginEvent: "loginEvent" }, outputs: { libOnPasswordExpired: "libOnPasswordExpired", libOnLoginSuccessful: "libOnLoginSuccessful" }, ngImport: i0, template: `
   <lib-login [RBACORG]="RBACORG" [LOGININFO]="LOGININFO" (passwordExpired)="onPasswordExpired($event)" (loginSuccessful)="onLoginSuccessful($event)"></lib-login>
  `, isInline: true, components: [{ type: i3.LoginComponent, selector: "lib-login", inputs: ["LOGININFO", "RBACORG"], outputs: ["passwordExpired", "loginSuccessful"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LoginComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'login',
                    template: `
   <lib-login [RBACORG]="RBACORG" [LOGININFO]="LOGININFO" (passwordExpired)="onPasswordExpired($event)" (loginSuccessful)="onLoginSuccessful($event)"></lib-login>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.PermissionStore }, { type: i2.DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], LOGININFO: [{
                type: Input
            }], loginEvent: [{
                type: Input
            }], libOnPasswordExpired: [{
                type: Output
            }], libOnLoginSuccessful: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2xvZ2luL3NyYy9saWIvbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUMsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7OztBQWFuRSxNQUFNLE9BQU8sY0FBYztJQVF6QixZQUNVLGVBQWdDLEVBQ2hDLGFBQStCO1FBRC9CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFUekIsWUFBTyxHQUFjLElBQUksUUFBUSxFQUFFLENBQUM7UUFJMUMseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxQyx5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBTXBELENBQUM7SUFDRCxRQUFRO1FBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxNQUFNO1FBQ3RCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGlCQUFpQixDQUFDLE1BQU07UUFDdEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs0R0E1QlUsY0FBYztnR0FBZCxjQUFjLGtRQU5mOztHQUVUOzRGQUlVLGNBQWM7a0JBUjFCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLFFBQVEsRUFBRTs7R0FFVDtvQkFDRCxNQUFNLEVBQUUsRUFDUDtpQkFDRjtxSUFFaUIsT0FBTztzQkFBdEIsS0FBSztnQkFDVSxVQUFVO3NCQUF6QixLQUFLO2dCQUNVLFNBQVM7c0JBQXhCLEtBQUs7Z0JBQ1UsVUFBVTtzQkFBekIsS0FBSztnQkFDSSxvQkFBb0I7c0JBQTdCLE1BQU07Z0JBQ0csb0JBQW9CO3NCQUE3QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJCQUNJTkZPIH0gZnJvbSAnLi9waWNzLWxvZ2luL0Bjb3JlL3VybHMvcmJhYy11cmwuY29uZmlnJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uU3RvcmUgfSBmcm9tICcuL3BpY3MtbG9naW4vQGNvcmUvcGVybWlzc2lvbnMvcGVybWlzc2lvbi5zdG9yZSc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuL3BpY3MtbG9naW4vQGNvcmUvc2VydmljZS9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsb2dpbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgPGxpYi1sb2dpbiBbUkJBQ09SR109XCJSQkFDT1JHXCIgW0xPR0lOSU5GT109XCJMT0dJTklORk9cIiAocGFzc3dvcmRFeHBpcmVkKT1cIm9uUGFzc3dvcmRFeHBpcmVkKCRldmVudClcIiAobG9naW5TdWNjZXNzZnVsKT1cIm9uTG9naW5TdWNjZXNzZnVsKCRldmVudClcIj48L2xpYi1sb2dpbj5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBwdWJsaWMgUkJBQ09SRz86IFJCQUNJTkZPID0gbmV3IFJCQUNJTkZPKCk7XHJcbiAgQElucHV0KCkgcHVibGljIFBFUk1JU1NJT04/OiBhbnk7XHJcbiAgQElucHV0KCkgcHVibGljIExPR0lOSU5GTz86IGFueTtcclxuICBASW5wdXQoKSBwdWJsaWMgbG9naW5FdmVudCE6IE9ic2VydmFibGU8YW55PjtcclxuICBAT3V0cHV0KCkgbGliT25QYXNzd29yZEV4cGlyZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGxpYk9uTG9naW5TdWNjZXNzZnVsID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcGVybWlzc2lvblN0b3JlOiBQZXJtaXNzaW9uU3RvcmUsXHJcbiAgICBwcml2YXRlIF9zdG9yZXNlcnZpY2U6IERhdGFTdG9yZVNlcnZpY2VcclxuICApIHtcclxuICB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAgdGhpcy5sb2dpbkV2ZW50LnN1YnNjcmliZSgodmFsOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5SQkFDT1JHID0gdmFsLlJCQUNPUkc7XHJcbiAgICAgIHRoaXMuUEVSTUlTU0lPTiA9IHZhbC5QRVJNSVNTSU9OO1xyXG4gICAgICB0aGlzLkxPR0lOSU5GTyA9IHZhbC5MT0dJTklORk87XHJcbiAgICAgIHRoaXMuX3N0b3Jlc2VydmljZS5zZXREYXRhKCdSQkFDT1JHJywgdGhpcy5SQkFDT1JHKTtcclxuICAgICAgdGhpcy5wZXJtaXNzaW9uU3RvcmUuc2V0U3RvcmUodGhpcy5QRVJNSVNTSU9OKTtcclxuICAgIH0pXHJcbiAgfVxyXG4gIG9uUGFzc3dvcmRFeHBpcmVkKCRldmVudCkge1xyXG4gICAgdGhpcy5saWJPblBhc3N3b3JkRXhwaXJlZC5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG5cclxuICBvbkxvZ2luU3VjY2Vzc2Z1bCgkZXZlbnQpIHtcclxuICAgIHRoaXMubGliT25Mb2dpblN1Y2Nlc3NmdWwuZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=