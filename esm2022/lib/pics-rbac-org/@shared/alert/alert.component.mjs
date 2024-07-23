import { Component } from '@angular/core';
import { AlertType } from '../../@core/service/alert.service';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/service/alert.service";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3JiYWMtb3JnL3NyYy9saWIvcGljcy1yYmFjLW9yZy9Ac2hhcmVkL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9yYmFjLW9yZy9zcmMvbGliL3BpY3MtcmJhYy1vcmcvQHNoYXJlZC9hbGVydC9hbGVydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBdUIsU0FBUyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7QUFDbkYsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLENBQUM7QUFPN0IsTUFBTSxPQUFPLGNBQWM7SUFHTDtJQUZwQixNQUFNLEdBQVksRUFBRSxDQUFDO0lBRXJCLFlBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQUcsQ0FBQztJQUVsRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRTtZQUN0RCxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNWLCtDQUErQztnQkFDL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ2pCLE9BQU87YUFDUjtZQUVELHFCQUFxQjtZQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QiwrQkFBK0I7WUFDL0IsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDdkUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQVk7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQVk7UUFDbkIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU87U0FDUjtRQUVELHVDQUF1QztRQUN2QyxRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDbEIsS0FBSyxTQUFTLENBQUMsT0FBTztnQkFDcEIsT0FBTyxxQkFBcUIsQ0FBQztZQUMvQixLQUFLLFNBQVMsQ0FBQyxLQUFLO2dCQUNsQixPQUFPLG9CQUFvQixDQUFDO1lBQzlCLEtBQUssU0FBUyxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sa0JBQWtCLENBQUM7WUFDNUIsS0FBSyxTQUFTLENBQUMsT0FBTztnQkFDcEIsT0FBTyxxQkFBcUIsQ0FBQztTQUNoQztJQUNILENBQUM7d0dBeENVLGNBQWM7NEZBQWQsY0FBYyxpRENUM0IsZ05BSUE7OzRGREthLGNBQWM7a0JBTjFCLFNBQVM7K0JBRUUsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFsZXJ0LCBBbGVydFNlcnZpY2UsIEFsZXJ0VHlwZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvYWxlcnQuc2VydmljZSc7XHJcbmNvbnN0IERJU1BMQVlfSU5fU0VDT05EUyA9IDg7XHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdhcHAtYWxlcnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBhbGVydHM6IEFsZXJ0W10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFsZXJ0U2VydmljZS5nZXRBbGVydCgpLnN1YnNjcmliZSgoYWxlcnQ6IEFsZXJ0KSA9PiB7XHJcbiAgICAgIGlmICghYWxlcnQpIHtcclxuICAgICAgICAvLyBjbGVhciBhbGVydHMgd2hlbiBhbiBlbXB0eSBhbGVydCBpcyByZWNlaXZlZFxyXG4gICAgICAgIHRoaXMuYWxlcnRzID0gW107XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBhZGQgYWxlcnQgdG8gYXJyYXlcclxuICAgICAgdGhpcy5hbGVydHMucHVzaChhbGVydCk7XHJcbiAgICAgIC8vIHJlbW92ZSBhbGVydCBhZnRlciA1IHNlY29uZHNcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlbW92ZUFsZXJ0KGFsZXJ0KSwgRElTUExBWV9JTl9TRUNPTkRTICogMTAwMCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUFsZXJ0KGFsZXJ0OiBBbGVydCkge1xyXG4gICAgdGhpcy5hbGVydHMgPSB0aGlzLmFsZXJ0cy5maWx0ZXIoeCA9PiB4ICE9PSBhbGVydCk7XHJcbiAgfVxyXG5cclxuICBjc3NDbGFzcyhhbGVydDogQWxlcnQpIHtcclxuICAgIGlmICghYWxlcnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybiBjc3MgY2xhc3MgYmFzZWQgb24gYWxlcnQgdHlwZVxyXG4gICAgc3dpdGNoIChhbGVydC50eXBlKSB7XHJcbiAgICAgIGNhc2UgQWxlcnRUeXBlLlN1Y2Nlc3M6XHJcbiAgICAgICAgcmV0dXJuICdhbGVydCBhbGVydC1zdWNjZXNzJztcclxuICAgICAgY2FzZSBBbGVydFR5cGUuRXJyb3I6XHJcbiAgICAgICAgcmV0dXJuICdhbGVydCBhbGVydC1kYW5nZXInO1xyXG4gICAgICBjYXNlIEFsZXJ0VHlwZS5JbmZvOlxyXG4gICAgICAgIHJldHVybiAnYWxlcnQgYWxlcnQtaW5mbyc7XHJcbiAgICAgIGNhc2UgQWxlcnRUeXBlLldhcm5pbmc6XHJcbiAgICAgICAgcmV0dXJuICdhbGVydCBhbGVydC13YXJuaW5nJztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiAqbmdGb3I9XCJsZXQgYWxlcnQgb2YgYWxlcnRzXCIgY2xhc3M9XCJhbGVydC1hbmltYXRlIHt7IGNzc0NsYXNzKGFsZXJ0KSB9fSBhbGVydC1kaXNtaXNzYWJsZVwiPlxyXG4gIHt7IGFsZXJ0Lm1lc3NhZ2UgfX1cclxuICA8YSBjbGFzcz1cImNsb3NlXCIgKGNsaWNrKT1cInJlbW92ZUFsZXJ0KGFsZXJ0KVwiPiZ0aW1lczs8L2E+XHJcbjwvZGl2PlxyXG4iXX0=