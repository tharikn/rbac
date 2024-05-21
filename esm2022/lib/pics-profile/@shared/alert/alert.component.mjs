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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3Byb2ZpbGUvc3JjL2xpYi9waWNzLXByb2ZpbGUvQHNoYXJlZC9hbGVydC9hbGVydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvcHJvZmlsZS9zcmMvbGliL3BpY3MtcHJvZmlsZS9Ac2hhcmVkL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUF1QixTQUFTLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQUNuRixNQUFNLGtCQUFrQixHQUFHLENBQUMsQ0FBQztBQU83QixNQUFNLE9BQU8sY0FBYztJQUdMO0lBRnBCLE1BQU0sR0FBWSxFQUFFLENBQUM7SUFFckIsWUFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFBRyxDQUFDO0lBRWxELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFO1lBQ3RELElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsK0NBQStDO2dCQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDakIsT0FBTzthQUNSO1lBRUQscUJBQXFCO1lBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLCtCQUErQjtZQUMvQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN2RSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBWTtRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxRQUFRLENBQUMsS0FBWTtRQUNuQixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTztTQUNSO1FBRUQsdUNBQXVDO1FBQ3ZDLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNsQixLQUFLLFNBQVMsQ0FBQyxPQUFPO2dCQUNwQixPQUFPLHFCQUFxQixDQUFDO1lBQy9CLEtBQUssU0FBUyxDQUFDLEtBQUs7Z0JBQ2xCLE9BQU8sb0JBQW9CLENBQUM7WUFDOUIsS0FBSyxTQUFTLENBQUMsSUFBSTtnQkFDakIsT0FBTyxrQkFBa0IsQ0FBQztZQUM1QixLQUFLLFNBQVMsQ0FBQyxPQUFPO2dCQUNwQixPQUFPLHFCQUFxQixDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzt3R0F4Q1UsY0FBYzs0RkFBZCxjQUFjLGlEQ1QzQixnTkFJQTs7NEZES2EsY0FBYztrQkFOMUIsU0FBUzsrQkFFRSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWxlcnQsIEFsZXJ0U2VydmljZSwgQWxlcnRUeXBlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9hbGVydC5zZXJ2aWNlJztcclxuY29uc3QgRElTUExBWV9JTl9TRUNPTkRTID0gODtcclxuQENvbXBvbmVudCh7XHJcbiAgLy8gbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2FwcC1hbGVydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdhbGVydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWxlcnQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGFsZXJ0czogQWxlcnRbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmdldEFsZXJ0KCkuc3Vic2NyaWJlKChhbGVydDogQWxlcnQpID0+IHtcclxuICAgICAgaWYgKCFhbGVydCkge1xyXG4gICAgICAgIC8vIGNsZWFyIGFsZXJ0cyB3aGVuIGFuIGVtcHR5IGFsZXJ0IGlzIHJlY2VpdmVkXHJcbiAgICAgICAgdGhpcy5hbGVydHMgPSBbXTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGFkZCBhbGVydCB0byBhcnJheVxyXG4gICAgICB0aGlzLmFsZXJ0cy5wdXNoKGFsZXJ0KTtcclxuICAgICAgLy8gcmVtb3ZlIGFsZXJ0IGFmdGVyIDUgc2Vjb25kc1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVtb3ZlQWxlcnQoYWxlcnQpLCBESVNQTEFZX0lOX1NFQ09ORFMgKiAxMDAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQWxlcnQoYWxlcnQ6IEFsZXJ0KSB7XHJcbiAgICB0aGlzLmFsZXJ0cyA9IHRoaXMuYWxlcnRzLmZpbHRlcih4ID0+IHggIT09IGFsZXJ0KTtcclxuICB9XHJcblxyXG4gIGNzc0NsYXNzKGFsZXJ0OiBBbGVydCkge1xyXG4gICAgaWYgKCFhbGVydCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJuIGNzcyBjbGFzcyBiYXNlZCBvbiBhbGVydCB0eXBlXHJcbiAgICBzd2l0Y2ggKGFsZXJ0LnR5cGUpIHtcclxuICAgICAgY2FzZSBBbGVydFR5cGUuU3VjY2VzczpcclxuICAgICAgICByZXR1cm4gJ2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MnO1xyXG4gICAgICBjYXNlIEFsZXJ0VHlwZS5FcnJvcjpcclxuICAgICAgICByZXR1cm4gJ2FsZXJ0IGFsZXJ0LWRhbmdlcic7XHJcbiAgICAgIGNhc2UgQWxlcnRUeXBlLkluZm86XHJcbiAgICAgICAgcmV0dXJuICdhbGVydCBhbGVydC1pbmZvJztcclxuICAgICAgY2FzZSBBbGVydFR5cGUuV2FybmluZzpcclxuICAgICAgICByZXR1cm4gJ2FsZXJ0IGFsZXJ0LXdhcm5pbmcnO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2ICpuZ0Zvcj1cImxldCBhbGVydCBvZiBhbGVydHNcIiBjbGFzcz1cImFsZXJ0LWFuaW1hdGUge3sgY3NzQ2xhc3MoYWxlcnQpIH19IGFsZXJ0LWRpc21pc3NhYmxlXCI+XHJcbiAge3sgYWxlcnQubWVzc2FnZSB9fVxyXG4gIDxhIGNsYXNzPVwiY2xvc2VcIiAoY2xpY2spPVwicmVtb3ZlQWxlcnQoYWxlcnQpXCI+JnRpbWVzOzwvYT5cclxuPC9kaXY+XHJcbiJdfQ==