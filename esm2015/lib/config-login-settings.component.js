import { Component, Input } from '@angular/core';
import { RBACINFO } from './@core/urls/rbac-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./@core/permissions/permission.store";
import * as i2 from "./@core/service/data-store.service";
import * as i3 from "./pics-config-login-settings/config-login-settings/config-login-settings.component";
export class ConfigLoginSettingsComponent {
    constructor(permissionStore, _storeservice) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
        this.RBACORG = new RBACINFO();
    }
    ngOnInit() {
        this.configureEvent.subscribe((val) => {
            this.RBACORG = val.RBACORG;
            this.PERMISSION = val.PERMISSION;
            this._storeservice.setData('RBACORG', this.RBACORG);
            this.permissionStore.setStore(this.PERMISSION);
        });
    }
}
ConfigLoginSettingsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConfigLoginSettingsComponent, deps: [{ token: i1.PermissionStore }, { token: i2.DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
ConfigLoginSettingsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConfigLoginSettingsComponent, selector: "config-login-settings", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", configureEvent: "configureEvent" }, ngImport: i0, template: `
    <lib-config-login-settings></lib-config-login-settings>
  `, isInline: true, components: [{ type: i3.ConfigLoginSettingsComponent, selector: "lib-config-login-settings" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConfigLoginSettingsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'config-login-settings',
                    template: `
    <lib-config-login-settings></lib-config-login-settings>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.PermissionStore }, { type: i2.DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], configureEvent: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWxvZ2luLXNldHRpbmdzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9jb25maWctbG9naW4tc2V0dGluZ3Mvc3JjL2xpYi9jb25maWctbG9naW4tc2V0dGluZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBSXpELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7QUFVeEQsTUFBTSxPQUFPLDRCQUE0QjtJQUt2QyxZQUNVLGVBQWdDLEVBQ2hDLGFBQStCO1FBRC9CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFOekIsWUFBTyxHQUFjLElBQUksUUFBUSxFQUFFLENBQUM7SUFRcEQsQ0FBQztJQUNELFFBQVE7UUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDOzswSEFqQlUsNEJBQTRCOzhHQUE1Qiw0QkFBNEIseUpBTjdCOztHQUVUOzRGQUlVLDRCQUE0QjtrQkFSeEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUU7O0dBRVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQ1A7aUJBQ0Y7cUlBRWlCLE9BQU87c0JBQXRCLEtBQUs7Z0JBQ1UsVUFBVTtzQkFBekIsS0FBSztnQkFDVSxjQUFjO3NCQUE3QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUGVybWlzc2lvblN0b3JlIH0gZnJvbSAnLi9AY29yZS9wZXJtaXNzaW9ucy9wZXJtaXNzaW9uLnN0b3JlJztcclxuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4vQGNvcmUvc2VydmljZS9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSQkFDSU5GTyB9IGZyb20gJy4vQGNvcmUvdXJscy9yYmFjLXVybC5jb25maWcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb25maWctbG9naW4tc2V0dGluZ3MnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bGliLWNvbmZpZy1sb2dpbi1zZXR0aW5ncz48L2xpYi1jb25maWctbG9naW4tc2V0dGluZ3M+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maWdMb2dpblNldHRpbmdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBwdWJsaWMgUkJBQ09SRz86IFJCQUNJTkZPID0gbmV3IFJCQUNJTkZPKCk7XHJcbiAgQElucHV0KCkgcHVibGljIFBFUk1JU1NJT04/OiBhbnk7XHJcbiAgQElucHV0KCkgcHVibGljIGNvbmZpZ3VyZUV2ZW50ITogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcGVybWlzc2lvblN0b3JlOiBQZXJtaXNzaW9uU3RvcmUsXHJcbiAgICBwcml2YXRlIF9zdG9yZXNlcnZpY2U6IERhdGFTdG9yZVNlcnZpY2VcclxuICApIHtcclxuICB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAgdGhpcy5jb25maWd1cmVFdmVudC5zdWJzY3JpYmUoKHZhbDogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMuUkJBQ09SRyA9IHZhbC5SQkFDT1JHO1xyXG4gICAgICB0aGlzLlBFUk1JU1NJT04gPSB2YWwuUEVSTUlTU0lPTjtcclxuICAgICAgdGhpcy5fc3RvcmVzZXJ2aWNlLnNldERhdGEoJ1JCQUNPUkcnLCB0aGlzLlJCQUNPUkcpO1xyXG4gICAgICB0aGlzLnBlcm1pc3Npb25TdG9yZS5zZXRTdG9yZSh0aGlzLlBFUk1JU1NJT04pO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG59XHJcbiJdfQ==