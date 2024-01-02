import { Component, Input } from '@angular/core';
import { RBACINFO } from './pics-rbac-users/@core/urls/users-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./pics-rbac-users/@core/permissions/permission.store";
import * as i2 from "./pics-rbac-users/@core/service/data-store.service";
import * as i3 from "./pics-rbac-users/users/users.component";
export class RbacUsersComponent {
    constructor(permissionStore, _storeservice) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
        this.RBACORG = new RBACINFO();
    }
    ngOnInit() {
        this.COMMONSERVICE.subscribe((val) => {
            if (val) {
                this._storeservice.setData('HTTPSERVICE', val.httpService);
            }
        });
        this._storeservice.setData('RBACORG', this.RBACORG);
        this.permissionStore.setStore(this.PERMISSION);
    }
}
RbacUsersComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacUsersComponent, deps: [{ token: i1.PermissionStore }, { token: i2.DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
RbacUsersComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: RbacUsersComponent, selector: "rbac-users", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", COMMONSERVICE: "COMMONSERVICE" }, ngImport: i0, template: `
    <users [RBACORG]="RBACORG" [PERMISSION]="PERMISSION"></users>
  `, isInline: true, components: [{ type: i3.UsersComponent, selector: "users", inputs: ["RBACORG", "PERMISSION"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacUsersComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'rbac-users',
                    template: `
    <users [RBACORG]="RBACORG" [PERMISSION]="PERMISSION"></users>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.PermissionStore }, { type: i2.DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], COMMONSERVICE: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy11c2Vycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvcmJhYy11c2Vycy9zcmMvbGliL3JiYWMtdXNlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7Ozs7QUFZekUsTUFBTSxPQUFPLGtCQUFrQjtJQUs3QixZQUNVLGVBQWdDLEVBQ2hDLGFBQStCO1FBRC9CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFMekIsWUFBTyxHQUFhLElBQUksUUFBUSxFQUFFLENBQUM7SUFPbkQsQ0FBQztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ3hDLElBQUcsR0FBRyxFQUFDO2dCQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7YUFDMUQ7UUFDSCxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7O2dIQWxCVSxrQkFBa0I7b0dBQWxCLGtCQUFrQiw0SUFObkI7O0dBRVQ7NEZBSVUsa0JBQWtCO2tCQVI5QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUU7O0dBRVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQ1A7aUJBQ0Y7cUlBR2lCLE9BQU87c0JBQXRCLEtBQUs7Z0JBQ1UsVUFBVTtzQkFBekIsS0FBSztnQkFDVSxhQUFhO3NCQUE1QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBlcm1pc3Npb25TdG9yZSB9IGZyb20gJy4vcGljcy1yYmFjLXVzZXJzL0Bjb3JlL3Blcm1pc3Npb25zL3Blcm1pc3Npb24uc3RvcmUnO1xyXG5pbXBvcnQgeyBSQkFDSU5GTyB9IGZyb20gJy4vcGljcy1yYmFjLXVzZXJzL0Bjb3JlL3VybHMvdXNlcnMtdXJsLmNvbmZpZyc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuL3BpY3MtcmJhYy11c2Vycy9AY29yZS9zZXJ2aWNlL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncmJhYy11c2VycycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDx1c2VycyBbUkJBQ09SR109XCJSQkFDT1JHXCIgW1BFUk1JU1NJT05dPVwiUEVSTUlTU0lPTlwiPjwvdXNlcnM+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYmFjVXNlcnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgUkJBQ09SRzogUkJBQ0lORk8gPSBuZXcgUkJBQ0lORk8oKTtcclxuICBASW5wdXQoKSBwdWJsaWMgUEVSTUlTU0lPTjogYW55O1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBDT01NT05TRVJWSUNFOk9ic2VydmFibGU8YW55PjtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcGVybWlzc2lvblN0b3JlOiBQZXJtaXNzaW9uU3RvcmUsXHJcbiAgICBwcml2YXRlIF9zdG9yZXNlcnZpY2U6IERhdGFTdG9yZVNlcnZpY2VcclxuICApIHtcclxuICB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLkNPTU1PTlNFUlZJQ0Uuc3Vic2NyaWJlKCh2YWw6IGFueSkgPT4ge1xyXG4gICAgICBpZih2YWwpe1xyXG4gICAgICAgIHRoaXMuX3N0b3Jlc2VydmljZS5zZXREYXRhKCdIVFRQU0VSVklDRScsdmFsLmh0dHBTZXJ2aWNlKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgdGhpcy5fc3RvcmVzZXJ2aWNlLnNldERhdGEoJ1JCQUNPUkcnLCB0aGlzLlJCQUNPUkcpO1xyXG4gICAgdGhpcy5wZXJtaXNzaW9uU3RvcmUuc2V0U3RvcmUodGhpcy5QRVJNSVNTSU9OKTtcclxuICB9XHJcbn1cclxuIl19