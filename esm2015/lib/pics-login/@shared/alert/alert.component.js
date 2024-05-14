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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2xvZ2luL3NyYy9saWIvcGljcy1sb2dpbi9Ac2hhcmVkL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9sb2dpbi9zcmMvbGliL3BpY3MtbG9naW4vQHNoYXJlZC9hbGVydC9hbGVydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBdUIsU0FBUyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7QUFDbkYsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLENBQUM7QUFPN0IsTUFBTSxPQUFPLGNBQWM7SUFHekIsWUFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFGOUMsV0FBTSxHQUFZLEVBQUUsQ0FBQztJQUU0QixDQUFDO0lBRWxELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFO1lBQ3RELElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsK0NBQStDO2dCQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDakIsT0FBTzthQUNSO1lBRUQscUJBQXFCO1lBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLCtCQUErQjtZQUMvQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN2RSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBWTtRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxRQUFRLENBQUMsS0FBWTtRQUNuQixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTztTQUNSO1FBRUQsdUNBQXVDO1FBQ3ZDLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNsQixLQUFLLFNBQVMsQ0FBQyxPQUFPO2dCQUNwQixPQUFPLHFCQUFxQixDQUFDO1lBQy9CLEtBQUssU0FBUyxDQUFDLEtBQUs7Z0JBQ2xCLE9BQU8sb0JBQW9CLENBQUM7WUFDOUIsS0FBSyxTQUFTLENBQUMsSUFBSTtnQkFDakIsT0FBTyxrQkFBa0IsQ0FBQztZQUM1QixLQUFLLFNBQVMsQ0FBQyxPQUFPO2dCQUNwQixPQUFPLHFCQUFxQixDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7NEdBeENVLGNBQWM7Z0dBQWQsY0FBYyxpRENUM0IsZ05BSUE7NEZES2EsY0FBYztrQkFOMUIsU0FBUzttQkFBQztvQkFDVCx1QkFBdUI7b0JBQ3ZCLFFBQVEsRUFBRSxXQUFXO29CQUNyQixXQUFXLEVBQUUsc0JBQXNCO29CQUNuQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztpQkFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbGVydCwgQWxlcnRTZXJ2aWNlLCBBbGVydFR5cGUgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2FsZXJ0LnNlcnZpY2UnO1xyXG5jb25zdCBESVNQTEFZX0lOX1NFQ09ORFMgPSA4O1xyXG5AQ29tcG9uZW50KHtcclxuICAvLyBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnYXBwLWFsZXJ0JyxcclxuICB0ZW1wbGF0ZVVybDogJ2FsZXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hbGVydC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgYWxlcnRzOiBBbGVydFtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hbGVydFNlcnZpY2UuZ2V0QWxlcnQoKS5zdWJzY3JpYmUoKGFsZXJ0OiBBbGVydCkgPT4ge1xyXG4gICAgICBpZiAoIWFsZXJ0KSB7XHJcbiAgICAgICAgLy8gY2xlYXIgYWxlcnRzIHdoZW4gYW4gZW1wdHkgYWxlcnQgaXMgcmVjZWl2ZWRcclxuICAgICAgICB0aGlzLmFsZXJ0cyA9IFtdO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gYWRkIGFsZXJ0IHRvIGFycmF5XHJcbiAgICAgIHRoaXMuYWxlcnRzLnB1c2goYWxlcnQpO1xyXG4gICAgICAvLyByZW1vdmUgYWxlcnQgYWZ0ZXIgNSBzZWNvbmRzXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZW1vdmVBbGVydChhbGVydCksIERJU1BMQVlfSU5fU0VDT05EUyAqIDEwMDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVBbGVydChhbGVydDogQWxlcnQpIHtcclxuICAgIHRoaXMuYWxlcnRzID0gdGhpcy5hbGVydHMuZmlsdGVyKHggPT4geCAhPT0gYWxlcnQpO1xyXG4gIH1cclxuXHJcbiAgY3NzQ2xhc3MoYWxlcnQ6IEFsZXJ0KSB7XHJcbiAgICBpZiAoIWFsZXJ0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm4gY3NzIGNsYXNzIGJhc2VkIG9uIGFsZXJ0IHR5cGVcclxuICAgIHN3aXRjaCAoYWxlcnQudHlwZSkge1xyXG4gICAgICBjYXNlIEFsZXJ0VHlwZS5TdWNjZXNzOlxyXG4gICAgICAgIHJldHVybiAnYWxlcnQgYWxlcnQtc3VjY2Vzcyc7XHJcbiAgICAgIGNhc2UgQWxlcnRUeXBlLkVycm9yOlxyXG4gICAgICAgIHJldHVybiAnYWxlcnQgYWxlcnQtZGFuZ2VyJztcclxuICAgICAgY2FzZSBBbGVydFR5cGUuSW5mbzpcclxuICAgICAgICByZXR1cm4gJ2FsZXJ0IGFsZXJ0LWluZm8nO1xyXG4gICAgICBjYXNlIEFsZXJ0VHlwZS5XYXJuaW5nOlxyXG4gICAgICAgIHJldHVybiAnYWxlcnQgYWxlcnQtd2FybmluZyc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgKm5nRm9yPVwibGV0IGFsZXJ0IG9mIGFsZXJ0c1wiIGNsYXNzPVwiYWxlcnQtYW5pbWF0ZSB7eyBjc3NDbGFzcyhhbGVydCkgfX0gYWxlcnQtZGlzbWlzc2FibGVcIj5cclxuICB7eyBhbGVydC5tZXNzYWdlIH19XHJcbiAgPGEgY2xhc3M9XCJjbG9zZVwiIChjbGljayk9XCJyZW1vdmVBbGVydChhbGVydClcIj4mdGltZXM7PC9hPlxyXG48L2Rpdj5cclxuIl19