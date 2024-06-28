import { Component } from '@angular/core';
import { AlertType } from '../../@core/services/alert.service';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/services/alert.service";
import * as i2 from "@angular/common";
const DISPLAY_IN_SECONDS = 8;
export class AlertComponent {
    alertService;
    alerts = [];
    constructor(alertService) {
        this.alertService = alertService;
    }
    ngOnInit() {
        this.alertService.getAlert().subscribe((alert) => {
            if (!alert) {
                // clear alerts when an empty alert is received
                this.alerts = [];
                return;
            }
            // add alert to array
            this.alerts.push(alert);
            // remove alert after 5 seconds
            setTimeout(() => this.removeAlert(alert), DISPLAY_IN_SECONDS * 1000);
        });
    }
    removeAlert(alert) {
        this.alerts = this.alerts.filter(x => x !== alert);
    }
    cssClass(alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case AlertType.Success:
                return 'alert alert-success';
            case AlertType.Error:
                return 'alert alert-danger';
            case AlertType.Info:
                return 'alert alert-info';
            case AlertType.Warning:
                return 'alert alert-warning';
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertComponent, deps: [{ token: i1.AlertService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AlertComponent, selector: "app-alert", ngImport: i0, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-alert', template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.AlertService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvcGFnZS1idWlsZGVyL3NyYy9saWIvcGljcy1wYWdlYnVpbGRlci9Ac2hhcmVkL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL3BhZ2UtYnVpbGRlci9zcmMvbGliL3BpY3MtcGFnZWJ1aWxkZXIvQHNoYXJlZC9hbGVydC9hbGVydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBdUIsU0FBUyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7QUFDcEYsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLENBQUM7QUFPN0IsTUFBTSxPQUFPLGNBQWM7SUFHTDtJQUZwQixNQUFNLEdBQVksRUFBRSxDQUFDO0lBRXJCLFlBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQUcsQ0FBQztJQUVsRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRTtZQUN0RCxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNWLCtDQUErQztnQkFDL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ2pCLE9BQU87YUFDUjtZQUVELHFCQUFxQjtZQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QiwrQkFBK0I7WUFDL0IsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDdkUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQVk7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQVk7UUFDbkIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU87U0FDUjtRQUVELHVDQUF1QztRQUN2QyxRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDbEIsS0FBSyxTQUFTLENBQUMsT0FBTztnQkFDcEIsT0FBTyxxQkFBcUIsQ0FBQztZQUMvQixLQUFLLFNBQVMsQ0FBQyxLQUFLO2dCQUNsQixPQUFPLG9CQUFvQixDQUFDO1lBQzlCLEtBQUssU0FBUyxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sa0JBQWtCLENBQUM7WUFDNUIsS0FBSyxTQUFTLENBQUMsT0FBTztnQkFDcEIsT0FBTyxxQkFBcUIsQ0FBQztTQUNoQztJQUNILENBQUM7d0dBeENVLGNBQWM7NEZBQWQsY0FBYyxpRENUM0IsZ05BSUE7OzRGREthLGNBQWM7a0JBTjFCLFNBQVM7K0JBRUUsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFsZXJ0LCBBbGVydFNlcnZpY2UsIEFsZXJ0VHlwZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2VzL2FsZXJ0LnNlcnZpY2UnO1xyXG5jb25zdCBESVNQTEFZX0lOX1NFQ09ORFMgPSA4O1xyXG5AQ29tcG9uZW50KHtcclxuICAvLyBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnYXBwLWFsZXJ0JyxcclxuICB0ZW1wbGF0ZVVybDogJ2FsZXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hbGVydC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgYWxlcnRzOiBBbGVydFtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hbGVydFNlcnZpY2UuZ2V0QWxlcnQoKS5zdWJzY3JpYmUoKGFsZXJ0OiBBbGVydCkgPT4ge1xyXG4gICAgICBpZiAoIWFsZXJ0KSB7XHJcbiAgICAgICAgLy8gY2xlYXIgYWxlcnRzIHdoZW4gYW4gZW1wdHkgYWxlcnQgaXMgcmVjZWl2ZWRcclxuICAgICAgICB0aGlzLmFsZXJ0cyA9IFtdO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gYWRkIGFsZXJ0IHRvIGFycmF5XHJcbiAgICAgIHRoaXMuYWxlcnRzLnB1c2goYWxlcnQpO1xyXG4gICAgICAvLyByZW1vdmUgYWxlcnQgYWZ0ZXIgNSBzZWNvbmRzXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZW1vdmVBbGVydChhbGVydCksIERJU1BMQVlfSU5fU0VDT05EUyAqIDEwMDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVBbGVydChhbGVydDogQWxlcnQpIHtcclxuICAgIHRoaXMuYWxlcnRzID0gdGhpcy5hbGVydHMuZmlsdGVyKHggPT4geCAhPT0gYWxlcnQpO1xyXG4gIH1cclxuXHJcbiAgY3NzQ2xhc3MoYWxlcnQ6IEFsZXJ0KSB7XHJcbiAgICBpZiAoIWFsZXJ0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm4gY3NzIGNsYXNzIGJhc2VkIG9uIGFsZXJ0IHR5cGVcclxuICAgIHN3aXRjaCAoYWxlcnQudHlwZSkge1xyXG4gICAgICBjYXNlIEFsZXJ0VHlwZS5TdWNjZXNzOlxyXG4gICAgICAgIHJldHVybiAnYWxlcnQgYWxlcnQtc3VjY2Vzcyc7XHJcbiAgICAgIGNhc2UgQWxlcnRUeXBlLkVycm9yOlxyXG4gICAgICAgIHJldHVybiAnYWxlcnQgYWxlcnQtZGFuZ2VyJztcclxuICAgICAgY2FzZSBBbGVydFR5cGUuSW5mbzpcclxuICAgICAgICByZXR1cm4gJ2FsZXJ0IGFsZXJ0LWluZm8nO1xyXG4gICAgICBjYXNlIEFsZXJ0VHlwZS5XYXJuaW5nOlxyXG4gICAgICAgIHJldHVybiAnYWxlcnQgYWxlcnQtd2FybmluZyc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgKm5nRm9yPVwibGV0IGFsZXJ0IG9mIGFsZXJ0c1wiIGNsYXNzPVwiYWxlcnQtYW5pbWF0ZSB7eyBjc3NDbGFzcyhhbGVydCkgfX0gYWxlcnQtZGlzbWlzc2FibGVcIj5cclxuICB7eyBhbGVydC5tZXNzYWdlIH19XHJcbiAgPGEgY2xhc3M9XCJjbG9zZVwiIChjbGljayk9XCJyZW1vdmVBbGVydChhbGVydClcIj4mdGltZXM7PC9hPlxyXG48L2Rpdj5cclxuIl19