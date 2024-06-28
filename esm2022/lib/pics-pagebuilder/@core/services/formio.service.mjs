import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class FormioService {
    constructor() {
        //not to be empty
    }
    customEvent(event, formIO) {
        if (event.type === 'dateRange') {
            this.dateRangeEvent(event, formIO);
        }
    }
    dateRangeEvent(event, formIO) {
        const dateRange = event?.value?.dateRange;
        if (dateRange) {
            let startDateElement = formIO.formio.getComponent(dateRange.startDateKey);
            if (!startDateElement) {
                console.log('Creating start component...');
                startDateElement = formIO.formio.createComponent({
                    type: 'hidden',
                    value: dateRange.startDate,
                    key: dateRange.startDateKey
                });
            }
            startDateElement.setValue(dateRange.startDate);
            let endDateElement = formIO.formio.getComponent(dateRange.endDateKey);
            if (!endDateElement) {
                console.log('Creating end component...');
                endDateElement = formIO.formio.createComponent({
                    type: 'hidden',
                    value: dateRange.endDate,
                    key: dateRange.endDateKey
                });
            }
            endDateElement.setValue(dateRange.endDate);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormioService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormioService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormioService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWlvLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9wYWdlLWJ1aWxkZXIvc3JjL2xpYi9waWNzLXBhZ2VidWlsZGVyL0Bjb3JlL3NlcnZpY2VzL2Zvcm1pby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUTNDLE1BQU0sT0FBTyxhQUFhO0lBQ3hCO1FBQ0UsaUJBQWlCO0lBQ25CLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBSyxFQUFFLE1BQXVCO1FBQ3hDLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBRU8sY0FBYyxDQUFDLEtBQVUsRUFBRSxNQUF1QjtRQUN4RCxNQUFNLFNBQVMsR0FBYyxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQztRQUNyRCxJQUFJLFNBQVMsRUFBRTtZQUNiLElBQUksZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO2dCQUMzQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQztvQkFDL0MsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsS0FBSyxFQUFFLFNBQVMsQ0FBQyxTQUFTO29CQUMxQixHQUFHLEVBQUUsU0FBUyxDQUFDLFlBQVk7aUJBQzVCLENBQUMsQ0FBQzthQUNKO1lBQ0QsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUUvQyxJQUFJLGNBQWMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdEUsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2dCQUN6QyxjQUFjLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUM7b0JBQzdDLElBQUksRUFBRSxRQUFRO29CQUNkLEtBQUssRUFBRSxTQUFTLENBQUMsT0FBTztvQkFDeEIsR0FBRyxFQUFFLFNBQVMsQ0FBQyxVQUFVO2lCQUMxQixDQUFDLENBQUM7YUFDSjtZQUNELGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQzt3R0FwQ1UsYUFBYTs0R0FBYixhQUFhLGNBRlosTUFBTTs7NEZBRVAsYUFBYTtrQkFIekIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBGb3JtaW9Db21wb25lbnQgfSBmcm9tICdAZm9ybWlvL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBEYXRlUmFuZ2UgfSBmcm9tICcuLi8uLi9wYWdlLWJ1aWxkZXIvcGFnZS1idWlsZGVyLWFkZC9kYXRlLVJhbmdlL2RhdGVSYW5nZS13cmFwcGVyLmNvbXBvbmVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtaW9TZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vbm90IHRvIGJlIGVtcHR5XHJcbiAgfVxyXG5cclxuICBjdXN0b21FdmVudChldmVudCwgZm9ybUlPOiBGb3JtaW9Db21wb25lbnQpIHtcclxuICAgIGlmIChldmVudC50eXBlID09PSAnZGF0ZVJhbmdlJykge1xyXG4gICAgICB0aGlzLmRhdGVSYW5nZUV2ZW50KGV2ZW50LCBmb3JtSU8pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkYXRlUmFuZ2VFdmVudChldmVudDogYW55LCBmb3JtSU86IEZvcm1pb0NvbXBvbmVudCkge1xyXG4gICAgY29uc3QgZGF0ZVJhbmdlOiBEYXRlUmFuZ2UgPSBldmVudD8udmFsdWU/LmRhdGVSYW5nZTtcclxuICAgIGlmIChkYXRlUmFuZ2UpIHtcclxuICAgICAgbGV0IHN0YXJ0RGF0ZUVsZW1lbnQgPSBmb3JtSU8uZm9ybWlvLmdldENvbXBvbmVudChkYXRlUmFuZ2Uuc3RhcnREYXRlS2V5KTtcclxuICAgICAgaWYgKCFzdGFydERhdGVFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIHN0YXJ0IGNvbXBvbmVudC4uLicpO1xyXG4gICAgICAgIHN0YXJ0RGF0ZUVsZW1lbnQgPSBmb3JtSU8uZm9ybWlvLmNyZWF0ZUNvbXBvbmVudCh7XHJcbiAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcclxuICAgICAgICAgIHZhbHVlOiBkYXRlUmFuZ2Uuc3RhcnREYXRlLFxyXG4gICAgICAgICAga2V5OiBkYXRlUmFuZ2Uuc3RhcnREYXRlS2V5XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgc3RhcnREYXRlRWxlbWVudC5zZXRWYWx1ZShkYXRlUmFuZ2Uuc3RhcnREYXRlKTtcclxuXHJcbiAgICAgIGxldCBlbmREYXRlRWxlbWVudCA9IGZvcm1JTy5mb3JtaW8uZ2V0Q29tcG9uZW50KGRhdGVSYW5nZS5lbmREYXRlS2V5KTtcclxuICAgICAgaWYgKCFlbmREYXRlRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBlbmQgY29tcG9uZW50Li4uJyk7XHJcbiAgICAgICAgZW5kRGF0ZUVsZW1lbnQgPSBmb3JtSU8uZm9ybWlvLmNyZWF0ZUNvbXBvbmVudCh7XHJcbiAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcclxuICAgICAgICAgIHZhbHVlOiBkYXRlUmFuZ2UuZW5kRGF0ZSxcclxuICAgICAgICAgIGtleTogZGF0ZVJhbmdlLmVuZERhdGVLZXlcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBlbmREYXRlRWxlbWVudC5zZXRWYWx1ZShkYXRlUmFuZ2UuZW5kRGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==