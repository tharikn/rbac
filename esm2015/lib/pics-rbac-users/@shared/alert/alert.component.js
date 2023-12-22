import { Component } from '@angular/core';
import { AlertType } from '../../@core/service/alert.service';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/service/alert.service";
import * as i2 from "@angular/common";
const DISPLAY_IN_SECONDS = 8;
export class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.alerts = [];
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
}
AlertComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertComponent, deps: [{ token: i1.AlertService }], target: i0.ɵɵFactoryTarget.Component });
AlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AlertComponent, selector: "app-alert", ngImport: i0, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{
                    // moduleId: module.id,
                    selector: 'app-alert',
                    templateUrl: 'alert.component.html',
                    styleUrls: ['./alert.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.AlertService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3JiYWMtdXNlcnMvc3JjL2xpYi9waWNzLXJiYWMtdXNlcnMvQHNoYXJlZC9hbGVydC9hbGVydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvcmJhYy11c2Vycy9zcmMvbGliL3BpY3MtcmJhYy11c2Vycy9Ac2hhcmVkL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUF1QixTQUFTLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQUNuRixNQUFNLGtCQUFrQixHQUFHLENBQUMsQ0FBQztBQU83QixNQUFNLE9BQU8sY0FBYztJQUd6QixZQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUY5QyxXQUFNLEdBQVksRUFBRSxDQUFDO0lBRTRCLENBQUM7SUFFbEQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUU7WUFDdEQsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDViwrQ0FBK0M7Z0JBQy9DLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNqQixPQUFPO2FBQ1I7WUFFRCxxQkFBcUI7WUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEIsK0JBQStCO1lBQy9CLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLGtCQUFrQixHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3ZFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFZO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFZO1FBQ25CLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPO1NBQ1I7UUFFRCx1Q0FBdUM7UUFDdkMsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ2xCLEtBQUssU0FBUyxDQUFDLE9BQU87Z0JBQ3BCLE9BQU8scUJBQXFCLENBQUM7WUFDL0IsS0FBSyxTQUFTLENBQUMsS0FBSztnQkFDbEIsT0FBTyxvQkFBb0IsQ0FBQztZQUM5QixLQUFLLFNBQVMsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLGtCQUFrQixDQUFDO1lBQzVCLEtBQUssU0FBUyxDQUFDLE9BQU87Z0JBQ3BCLE9BQU8scUJBQXFCLENBQUM7U0FDaEM7SUFDSCxDQUFDOzs0R0F4Q1UsY0FBYztnR0FBZCxjQUFjLGlEQ1QzQixnTkFJQTs0RkRLYSxjQUFjO2tCQU4xQixTQUFTO21CQUFDO29CQUNULHVCQUF1QjtvQkFDdkIsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFdBQVcsRUFBRSxzQkFBc0I7b0JBQ25DLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2lCQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFsZXJ0LCBBbGVydFNlcnZpY2UsIEFsZXJ0VHlwZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvYWxlcnQuc2VydmljZSc7XHJcbmNvbnN0IERJU1BMQVlfSU5fU0VDT05EUyA9IDg7XHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdhcHAtYWxlcnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBhbGVydHM6IEFsZXJ0W10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFsZXJ0U2VydmljZS5nZXRBbGVydCgpLnN1YnNjcmliZSgoYWxlcnQ6IEFsZXJ0KSA9PiB7XHJcbiAgICAgIGlmICghYWxlcnQpIHtcclxuICAgICAgICAvLyBjbGVhciBhbGVydHMgd2hlbiBhbiBlbXB0eSBhbGVydCBpcyByZWNlaXZlZFxyXG4gICAgICAgIHRoaXMuYWxlcnRzID0gW107XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBhZGQgYWxlcnQgdG8gYXJyYXlcclxuICAgICAgdGhpcy5hbGVydHMucHVzaChhbGVydCk7XHJcbiAgICAgIC8vIHJlbW92ZSBhbGVydCBhZnRlciA1IHNlY29uZHNcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlbW92ZUFsZXJ0KGFsZXJ0KSwgRElTUExBWV9JTl9TRUNPTkRTICogMTAwMCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUFsZXJ0KGFsZXJ0OiBBbGVydCkge1xyXG4gICAgdGhpcy5hbGVydHMgPSB0aGlzLmFsZXJ0cy5maWx0ZXIoeCA9PiB4ICE9PSBhbGVydCk7XHJcbiAgfVxyXG5cclxuICBjc3NDbGFzcyhhbGVydDogQWxlcnQpIHtcclxuICAgIGlmICghYWxlcnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybiBjc3MgY2xhc3MgYmFzZWQgb24gYWxlcnQgdHlwZVxyXG4gICAgc3dpdGNoIChhbGVydC50eXBlKSB7XHJcbiAgICAgIGNhc2UgQWxlcnRUeXBlLlN1Y2Nlc3M6XHJcbiAgICAgICAgcmV0dXJuICdhbGVydCBhbGVydC1zdWNjZXNzJztcclxuICAgICAgY2FzZSBBbGVydFR5cGUuRXJyb3I6XHJcbiAgICAgICAgcmV0dXJuICdhbGVydCBhbGVydC1kYW5nZXInO1xyXG4gICAgICBjYXNlIEFsZXJ0VHlwZS5JbmZvOlxyXG4gICAgICAgIHJldHVybiAnYWxlcnQgYWxlcnQtaW5mbyc7XHJcbiAgICAgIGNhc2UgQWxlcnRUeXBlLldhcm5pbmc6XHJcbiAgICAgICAgcmV0dXJuICdhbGVydCBhbGVydC13YXJuaW5nJztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiAqbmdGb3I9XCJsZXQgYWxlcnQgb2YgYWxlcnRzXCIgY2xhc3M9XCJhbGVydC1hbmltYXRlIHt7IGNzc0NsYXNzKGFsZXJ0KSB9fSBhbGVydC1kaXNtaXNzYWJsZVwiPlxyXG4gIHt7IGFsZXJ0Lm1lc3NhZ2UgfX1cclxuICA8YSBjbGFzcz1cImNsb3NlXCIgKGNsaWNrKT1cInJlbW92ZUFsZXJ0KGFsZXJ0KVwiPiZ0aW1lczs8L2E+XHJcbjwvZGl2PlxyXG4iXX0=