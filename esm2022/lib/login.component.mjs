import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RBACINFO } from './pics-login/@core/urls/rbac-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./pics-login/@core/permissions/permission.store";
import * as i2 from "./pics-login/@core/service/data-store.service";
import * as i3 from "./pics-login/login/login.component";
export class LoginComponent {
    permissionStore;
    _storeservice;
    RBACORG = new RBACINFO();
    PERMISSION;
    LOGININFO;
    loginEvent;
    libOnPasswordExpired = new EventEmitter();
    libOnLoginSuccessful = new EventEmitter();
    constructor(permissionStore, _storeservice) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoginComponent, deps: [{ token: i1.PermissionStore }, { token: i2.DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: LoginComponent, selector: "login", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", LOGININFO: "LOGININFO", loginEvent: "loginEvent" }, outputs: { libOnPasswordExpired: "libOnPasswordExpired", libOnLoginSuccessful: "libOnLoginSuccessful" }, ngImport: i0, template: `
   <lib-login [RBACORG]="RBACORG" [LOGININFO]="LOGININFO" (passwordExpired)="onPasswordExpired($event)" (loginSuccessful)="onLoginSuccessful($event)"></lib-login>
  `, isInline: true, dependencies: [{ kind: "component", type: i3.LoginComponent, selector: "lib-login", inputs: ["LOGININFO", "RBACORG"], outputs: ["passwordExpired", "loginSuccessful"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoginComponent, decorators: [{
            type: Component,
            args: [{ selector: 'login', template: `
   <lib-login [RBACORG]="RBACORG" [LOGININFO]="LOGININFO" (passwordExpired)="onPasswordExpired($event)" (loginSuccessful)="onLoginSuccessful($event)"></lib-login>
  ` }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2xvZ2luL3NyYy9saWIvbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUMsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7OztBQWFuRSxNQUFNLE9BQU8sY0FBYztJQVNmO0lBQ0E7SUFUTSxPQUFPLEdBQWMsSUFBSSxRQUFRLEVBQUUsQ0FBQztJQUNwQyxVQUFVLENBQU87SUFDakIsU0FBUyxDQUFPO0lBQ2hCLFVBQVUsQ0FBbUI7SUFDbkMsb0JBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUMxQyxvQkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXBELFlBQ1UsZUFBZ0MsRUFDaEMsYUFBK0I7UUFEL0Isb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtJQUV6QyxDQUFDO0lBQ0QsUUFBUTtRQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsaUJBQWlCLENBQUMsTUFBTTtRQUN0QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxNQUFNO1FBQ3RCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQzt3R0E1QlUsY0FBYzs0RkFBZCxjQUFjLGtRQU5mOztHQUVUOzs0RkFJVSxjQUFjO2tCQVIxQixTQUFTOytCQUNFLE9BQU8sWUFDUDs7R0FFVDtxSUFLZSxPQUFPO3NCQUF0QixLQUFLO2dCQUNVLFVBQVU7c0JBQXpCLEtBQUs7Z0JBQ1UsU0FBUztzQkFBeEIsS0FBSztnQkFDVSxVQUFVO3NCQUF6QixLQUFLO2dCQUNJLG9CQUFvQjtzQkFBN0IsTUFBTTtnQkFDRyxvQkFBb0I7c0JBQTdCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUkJBQ0lORk8gfSBmcm9tICcuL3BpY3MtbG9naW4vQGNvcmUvdXJscy9yYmFjLXVybC5jb25maWcnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFBlcm1pc3Npb25TdG9yZSB9IGZyb20gJy4vcGljcy1sb2dpbi9AY29yZS9wZXJtaXNzaW9ucy9wZXJtaXNzaW9uLnN0b3JlJztcclxuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4vcGljcy1sb2dpbi9AY29yZS9zZXJ2aWNlL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xvZ2luJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICA8bGliLWxvZ2luIFtSQkFDT1JHXT1cIlJCQUNPUkdcIiBbTE9HSU5JTkZPXT1cIkxPR0lOSU5GT1wiIChwYXNzd29yZEV4cGlyZWQpPVwib25QYXNzd29yZEV4cGlyZWQoJGV2ZW50KVwiIChsb2dpblN1Y2Nlc3NmdWwpPVwib25Mb2dpblN1Y2Nlc3NmdWwoJGV2ZW50KVwiPjwvbGliLWxvZ2luPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBSQkFDT1JHPzogUkJBQ0lORk8gPSBuZXcgUkJBQ0lORk8oKTtcclxuICBASW5wdXQoKSBwdWJsaWMgUEVSTUlTU0lPTj86IGFueTtcclxuICBASW5wdXQoKSBwdWJsaWMgTE9HSU5JTkZPPzogYW55O1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBsb2dpbkV2ZW50ITogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIEBPdXRwdXQoKSBsaWJPblBhc3N3b3JkRXhwaXJlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbGliT25Mb2dpblN1Y2Nlc3NmdWwgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBwZXJtaXNzaW9uU3RvcmU6IFBlcm1pc3Npb25TdG9yZSxcclxuICAgIHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZVxyXG4gICkge1xyXG4gIH1cclxuICBuZ09uSW5pdCgpIHtcclxuICAgICB0aGlzLmxvZ2luRXZlbnQuc3Vic2NyaWJlKCh2YWw6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLlJCQUNPUkcgPSB2YWwuUkJBQ09SRztcclxuICAgICAgdGhpcy5QRVJNSVNTSU9OID0gdmFsLlBFUk1JU1NJT047XHJcbiAgICAgIHRoaXMuTE9HSU5JTkZPID0gdmFsLkxPR0lOSU5GTztcclxuICAgICAgdGhpcy5fc3RvcmVzZXJ2aWNlLnNldERhdGEoJ1JCQUNPUkcnLCB0aGlzLlJCQUNPUkcpO1xyXG4gICAgICB0aGlzLnBlcm1pc3Npb25TdG9yZS5zZXRTdG9yZSh0aGlzLlBFUk1JU1NJT04pO1xyXG4gICAgfSlcclxuICB9XHJcbiAgb25QYXNzd29yZEV4cGlyZWQoJGV2ZW50KSB7XHJcbiAgICB0aGlzLmxpYk9uUGFzc3dvcmRFeHBpcmVkLmVtaXQoJGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uTG9naW5TdWNjZXNzZnVsKCRldmVudCkge1xyXG4gICAgdGhpcy5saWJPbkxvZ2luU3VjY2Vzc2Z1bC5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==