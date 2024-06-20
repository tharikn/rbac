import { Component, Input } from '@angular/core';
import { RBACINFO } from './pics-rbac-org/organization/organization.component';
import * as i0 from "@angular/core";
import * as i1 from "./pics-rbac-org/@core/permissions/permission.store";
import * as i2 from "./pics-rbac-org/@core/service/data-store.service";
import * as i3 from "./pics-rbac-org/organization/organization.component";
export class RbacOrgComponent {
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
                this._storeservice.setData('HTTPSERVICE', val.httpService);
            }
        });
        this._storeservice.setData('RBACORG', this.RBACORG);
        this.permissionStore.setStore(this.PERMISSION);
        this._storeservice.setData('INPUTVALIDATIONMETHOD', this.INPUTVALIDATIONMETHOD);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacOrgComponent, deps: [{ token: i1.PermissionStore }, { token: i2.DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: RbacOrgComponent, selector: "rbac-org", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", COMMONSERVICE: "COMMONSERVICE", INPUTVALIDATIONMETHOD: "INPUTVALIDATIONMETHOD" }, ngImport: i0, template: `
    <cardi-organization [RBACORG]="RBACORG" [PERMISSION]="PERMISSION"></cardi-organization>
  `, isInline: true, dependencies: [{ kind: "component", type: i3.OrganizationComponent, selector: "cardi-organization", inputs: ["RBACORG", "PERMISSION"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacOrgComponent, decorators: [{
            type: Component,
            args: [{ selector: 'rbac-org', template: `
    <cardi-organization [RBACORG]="RBACORG" [PERMISSION]="PERMISSION"></cardi-organization>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy1vcmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3JiYWMtb3JnL3NyYy9saWIvcmJhYy1vcmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7Ozs7QUFhL0UsTUFBTSxPQUFPLGdCQUFnQjtJQU1qQjtJQUNBO0lBTk0sT0FBTyxHQUFhLElBQUksUUFBUSxFQUFFLENBQUM7SUFDbkMsVUFBVSxDQUFNO0lBQ2hCLGFBQWEsQ0FBaUI7SUFDOUIscUJBQXFCLENBQVE7SUFDN0MsWUFDVSxlQUFnQyxFQUNoQyxhQUErQjtRQUQvQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsa0JBQWEsR0FBYixhQUFhLENBQWtCO0lBRXpDLENBQUM7SUFDRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUN4QyxJQUFHLEdBQUcsRUFBQztnQkFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO2FBQzFEO1FBQ0gsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNsRixDQUFDO3dHQW5CVSxnQkFBZ0I7NEZBQWhCLGdCQUFnQiwwTEFOakI7O0dBRVQ7OzRGQUlVLGdCQUFnQjtrQkFSNUIsU0FBUzsrQkFDRSxVQUFVLFlBQ1Y7O0dBRVQ7cUlBS2UsT0FBTztzQkFBdEIsS0FBSztnQkFDVSxVQUFVO3NCQUF6QixLQUFLO2dCQUNVLGFBQWE7c0JBQTVCLEtBQUs7Z0JBQ1UscUJBQXFCO3NCQUFwQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJCQUNJTkZPIH0gZnJvbSAnLi9waWNzLXJiYWMtb3JnL29yZ2FuaXphdGlvbi9vcmdhbml6YXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uU3RvcmUgfSBmcm9tICcuL3BpY3MtcmJhYy1vcmcvQGNvcmUvcGVybWlzc2lvbnMvcGVybWlzc2lvbi5zdG9yZSc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuL3BpY3MtcmJhYy1vcmcvQGNvcmUvc2VydmljZS9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdyYmFjLW9yZycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxjYXJkaS1vcmdhbml6YXRpb24gW1JCQUNPUkddPVwiUkJBQ09SR1wiIFtQRVJNSVNTSU9OXT1cIlBFUk1JU1NJT05cIj48L2NhcmRpLW9yZ2FuaXphdGlvbj5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJiYWNPcmdDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBSQkFDT1JHOiBSQkFDSU5GTyA9IG5ldyBSQkFDSU5GTygpO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBQRVJNSVNTSU9OOiBhbnk7XHJcbiAgQElucHV0KCkgcHVibGljIENPTU1PTlNFUlZJQ0U6T2JzZXJ2YWJsZTxhbnk+O1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBJTlBVVFZBTElEQVRJT05NRVRIT0Q/IDogYW55O1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBwZXJtaXNzaW9uU3RvcmU6IFBlcm1pc3Npb25TdG9yZSxcclxuICAgIHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZVxyXG4gICkge1xyXG4gIH1cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuQ09NTU9OU0VSVklDRS5zdWJzY3JpYmUoKHZhbDogYW55KSA9PiB7XHJcbiAgICAgIGlmKHZhbCl7XHJcbiAgICAgICAgdGhpcy5fc3RvcmVzZXJ2aWNlLnNldERhdGEoJ0hUVFBTRVJWSUNFJyx2YWwuaHR0cFNlcnZpY2UpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICB0aGlzLl9zdG9yZXNlcnZpY2Uuc2V0RGF0YSgnUkJBQ09SRycsIHRoaXMuUkJBQ09SRyk7XHJcbiAgICB0aGlzLnBlcm1pc3Npb25TdG9yZS5zZXRTdG9yZSh0aGlzLlBFUk1JU1NJT04pO1xyXG4gICAgdGhpcy5fc3RvcmVzZXJ2aWNlLnNldERhdGEoJ0lOUFVUVkFMSURBVElPTk1FVEhPRCcsIHRoaXMuSU5QVVRWQUxJREFUSU9OTUVUSE9EKTtcclxuICB9XHJcbn1cclxuIl19