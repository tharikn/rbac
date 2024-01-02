import { __awaiter } from "tslib";
import { Component } from '@angular/core';
import { RBACINFO } from '../../@core/urls/analytics-url.config';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/service/microstrategy.service";
import * as i2 from "../../@core/service/local.service";
import * as i3 from "../../@core/service/data-store.service";
export class AnalyticsComponent {
    constructor(mstrService, localstore, _storeservice) {
        this.mstrService = mstrService;
        this.localstore = localstore;
        this._storeservice = _storeservice;
        this.RBACORG = new RBACINFO();
        this.orgSubs = this._storeservice.currentStore.subscribe((res) => {
            if (res['RBACORG'] && res['RBACORG'] !== '') {
                this.RBACORG = res['RBACORG'];
                console.log(this.RBACORG, 'RBACORG Profile');
                this.environment = this.RBACORG['environment'];
                this.orgId = parseInt(this.RBACORG['orgID']);
                if (this.environment) {
                    this.getDossier();
                }
            }
        });
    }
    ngOnInit() {
    }
    getDossier() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const user = this.localstore.getObj('user');
            if ('user') {
                const dossierConfig = user && JSON.parse((_a = user.userroles[0]) === null || _a === void 0 ? void 0 : _a.dossierid);
                const projectId = dossierConfig === null || dossierConfig === void 0 ? void 0 : dossierConfig.projectId;
                const dossierId = dossierConfig === null || dossierConfig === void 0 ? void 0 : dossierConfig.id;
                const pageNo = 'K53--K46/edit';
                this.mstrService.getDossier(projectId, dossierId, pageNo);
            }
        });
    }
    ngAfterContentInit() {
        setTimeout(() => {
            this.getDossier();
        }, 100);
    }
    ngOnDestroy() {
        this.orgSubs.unsubscribe();
    }
}
AnalyticsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AnalyticsComponent, deps: [{ token: i1.MicrostrategyService }, { token: i2.LocalService }, { token: i3.DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
AnalyticsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AnalyticsComponent, selector: "lib-analytics", ngImport: i0, template: "<div class=\"ground\">\r\n    <div id=\"dossierContainer\" style=\"width: 100%; height: 100%\"></div>\r\n  </div>\r\n", styles: [".ground{width:100%;height:calc(100vh - 0px)}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AnalyticsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-analytics',
                    templateUrl: './analytics.component.html',
                    styleUrls: ['./analytics.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.MicrostrategyService }, { type: i2.LocalService }, { type: i3.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL21pY3Jvc3RyYXRlZ3kvc3JjL2xpYi9waWNzLWFuYWx5dGljcy9hbmFseXRpY3MvYW5hbHl0aWNzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL21pY3Jvc3RyYXRlZ3kvc3JjL2xpYi9waWNzLWFuYWx5dGljcy9hbmFseXRpY3MvYW5hbHl0aWNzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBSWxELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7QUFRakUsTUFBTSxPQUFPLGtCQUFrQjtJQUs3QixZQUFvQixXQUFpQyxFQUFVLFVBQXdCLEVBQVMsYUFBK0I7UUFBM0csZ0JBQVcsR0FBWCxXQUFXLENBQXNCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBYztRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUgvSCxZQUFPLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUlqQyxJQUFJLENBQUMsT0FBTyxHQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ3JFLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLElBQUcsSUFBSSxDQUFDLFdBQVcsRUFBQztvQkFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2lCQUNuQjthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtJQUdSLENBQUM7SUFFSyxVQUFVOzs7WUFDZCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QyxJQUFJLE1BQU0sRUFBRTtnQkFDVixNQUFNLGFBQWEsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLDBDQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUN2RSxNQUFNLFNBQVMsR0FBRyxhQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsU0FBUyxDQUFDO2dCQUMzQyxNQUFNLFNBQVMsR0FBRyxhQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsRUFBRSxDQUFDO2dCQUNwQyxNQUFNLE1BQU0sR0FBRyxlQUFlLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDM0Q7O0tBQ0Y7SUFDRCxrQkFBa0I7UUFDaEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDO0lBQ0QsV0FBVztRQUNULElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Z0hBekNVLGtCQUFrQjtvR0FBbEIsa0JBQWtCLHFEQ1ovQix1SEFHQTs0RkRTYSxrQkFBa0I7a0JBTDlCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFdBQVcsRUFBRSw0QkFBNEI7b0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2lCQUMxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1pY3Jvc3RyYXRlZ3lTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9taWNyb3N0cmF0ZWd5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2NhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2xvY2FsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSQkFDSU5GTyB9IGZyb20gJy4uLy4uL0Bjb3JlL3VybHMvYW5hbHl0aWNzLXVybC5jb25maWcnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWFuYWx5dGljcycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FuYWx5dGljcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYW5hbHl0aWNzLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFuYWx5dGljc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZW52aXJvbm1lbnQ6IGFueTtcclxuICBSQkFDT1JHOiBSQkFDSU5GTyA9IG5ldyBSQkFDSU5GTygpO1xyXG4gIG9yZ1N1YnMhOiBTdWJzY3JpcHRpb247XHJcbiAgb3JnSWQ6IGFueTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1zdHJTZXJ2aWNlOiBNaWNyb3N0cmF0ZWd5U2VydmljZSwgcHJpdmF0ZSBsb2NhbHN0b3JlOiBMb2NhbFNlcnZpY2UscHJpdmF0ZSBfc3RvcmVzZXJ2aWNlOiBEYXRhU3RvcmVTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLm9yZ1N1YnMgPSAgdGhpcy5fc3RvcmVzZXJ2aWNlLmN1cnJlbnRTdG9yZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIGlmIChyZXNbJ1JCQUNPUkcnXSAmJiByZXNbJ1JCQUNPUkcnXSAhPT0gJycpIHtcclxuICAgICAgICB0aGlzLlJCQUNPUkcgPSByZXNbJ1JCQUNPUkcnXTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLlJCQUNPUkcsICdSQkFDT1JHIFByb2ZpbGUnKTtcclxuICAgICAgICB0aGlzLmVudmlyb25tZW50ID0gdGhpcy5SQkFDT1JHWydlbnZpcm9ubWVudCddO1xyXG4gICAgICAgIHRoaXMub3JnSWQgPSBwYXJzZUludCh0aGlzLlJCQUNPUkdbJ29yZ0lEJ10pO1xyXG4gICAgICAgIGlmKHRoaXMuZW52aXJvbm1lbnQpe1xyXG4gICAgICAgICAgdGhpcy5nZXREb3NzaWVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXREb3NzaWVyKCkge1xyXG4gICAgY29uc3QgdXNlciA9IHRoaXMubG9jYWxzdG9yZS5nZXRPYmooJ3VzZXInKTtcclxuICAgIGlmICgndXNlcicpIHtcclxuICAgICAgY29uc3QgZG9zc2llckNvbmZpZyA9IHVzZXIgJiYgSlNPTi5wYXJzZSh1c2VyLnVzZXJyb2xlc1swXT8uZG9zc2llcmlkKTtcclxuICAgICAgY29uc3QgcHJvamVjdElkID0gZG9zc2llckNvbmZpZz8ucHJvamVjdElkO1xyXG4gICAgICBjb25zdCBkb3NzaWVySWQgPSBkb3NzaWVyQ29uZmlnPy5pZDtcclxuICAgICAgY29uc3QgcGFnZU5vID0gJ0s1My0tSzQ2L2VkaXQnO1xyXG4gICAgICB0aGlzLm1zdHJTZXJ2aWNlLmdldERvc3NpZXIocHJvamVjdElkLCBkb3NzaWVySWQsIHBhZ2VObyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmdldERvc3NpZXIoKTtcclxuICAgIH0sIDEwMCk7XHJcbiAgfVxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5vcmdTdWJzLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJncm91bmRcIj5cclxuICAgIDxkaXYgaWQ9XCJkb3NzaWVyQ29udGFpbmVyXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlXCI+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiJdfQ==