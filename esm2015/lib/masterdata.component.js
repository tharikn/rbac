import { Component, Input } from '@angular/core';
import { RBACINFO } from './pics-masterdata/@core/urls/rbac-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./pics-masterdata/@core/permissions/permission.store";
import * as i2 from "./pics-masterdata/@core/service/data-store.service";
import * as i3 from "./pics-masterdata/masterdata/masterdata.component";
export class MasterdataComponent {
    constructor(permissionStore, _storeservice) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
        this.RBACORG = new RBACINFO();
    }
    ngOnInit() {
        this.mastersEvent.subscribe((val) => {
            this.RBACORG = val.RBACORG;
            this.PERMISSION = val.PERMISSION;
            this._storeservice.setData('RBACORG', this.RBACORG);
            this.permissionStore.setStore(this.PERMISSION);
            this._storeservice.setData('HTTPSERVICE', val.HTTPSERVICE);
        });
    }
}
MasterdataComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MasterdataComponent, deps: [{ token: i1.PermissionStore }, { token: i2.DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
MasterdataComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: MasterdataComponent, selector: "masterdata", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", mastersEvent: "mastersEvent" }, ngImport: i0, template: `
      <lib-masterdata></lib-masterdata>
  `, isInline: true, components: [{ type: i3.MasterdataComponent, selector: "lib-masterdata" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MasterdataComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'masterdata',
                    template: `
      <lib-masterdata></lib-masterdata>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.PermissionStore }, { type: i2.DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], mastersEvent: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyZGF0YS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvbWFzdGVyZGF0YS9zcmMvbGliL21hc3RlcmRhdGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBSXpELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7Ozs7QUFVeEUsTUFBTSxPQUFPLG1CQUFtQjtJQUs5QixZQUNVLGVBQWdDLEVBQ2hDLGFBQStCO1FBRC9CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFOekIsWUFBTyxHQUFjLElBQUksUUFBUSxFQUFFLENBQUM7SUFRcEQsQ0FBQztJQUNELFFBQVE7UUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUMzRCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7O2lIQWxCVSxtQkFBbUI7cUdBQW5CLG1CQUFtQiwwSUFOcEI7O0dBRVQ7NEZBSVUsbUJBQW1CO2tCQVIvQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUU7O0dBRVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQ1A7aUJBQ0Y7cUlBRWlCLE9BQU87c0JBQXRCLEtBQUs7Z0JBQ1UsVUFBVTtzQkFBekIsS0FBSztnQkFDVSxZQUFZO3NCQUEzQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUGVybWlzc2lvblN0b3JlIH0gZnJvbSAnLi9waWNzLW1hc3RlcmRhdGEvQGNvcmUvcGVybWlzc2lvbnMvcGVybWlzc2lvbi5zdG9yZSc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuL3BpY3MtbWFzdGVyZGF0YS9AY29yZS9zZXJ2aWNlL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IFJCQUNJTkZPIH0gZnJvbSAnLi9waWNzLW1hc3RlcmRhdGEvQGNvcmUvdXJscy9yYmFjLXVybC5jb25maWcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtYXN0ZXJkYXRhJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8bGliLW1hc3RlcmRhdGE+PC9saWItbWFzdGVyZGF0YT5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hc3RlcmRhdGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBSQkFDT1JHPzogUkJBQ0lORk8gPSBuZXcgUkJBQ0lORk8oKTtcclxuICBASW5wdXQoKSBwdWJsaWMgUEVSTUlTU0lPTj86IGFueTtcclxuICBASW5wdXQoKSBwdWJsaWMgbWFzdGVyc0V2ZW50ITogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcGVybWlzc2lvblN0b3JlOiBQZXJtaXNzaW9uU3RvcmUsXHJcbiAgICBwcml2YXRlIF9zdG9yZXNlcnZpY2U6IERhdGFTdG9yZVNlcnZpY2VcclxuICApIHtcclxuICB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAgdGhpcy5tYXN0ZXJzRXZlbnQuc3Vic2NyaWJlKCh2YWw6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLlJCQUNPUkcgPSB2YWwuUkJBQ09SRztcclxuICAgICAgdGhpcy5QRVJNSVNTSU9OID0gdmFsLlBFUk1JU1NJT047XHJcbiAgICAgIHRoaXMuX3N0b3Jlc2VydmljZS5zZXREYXRhKCdSQkFDT1JHJywgdGhpcy5SQkFDT1JHKTtcclxuICAgICAgdGhpcy5wZXJtaXNzaW9uU3RvcmUuc2V0U3RvcmUodGhpcy5QRVJNSVNTSU9OKTtcclxuICAgICAgdGhpcy5fc3RvcmVzZXJ2aWNlLnNldERhdGEoJ0hUVFBTRVJWSUNFJyx2YWwuSFRUUFNFUlZJQ0UpXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iXX0=