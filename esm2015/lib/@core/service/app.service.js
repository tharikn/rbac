import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class AppService {
    constructor() {
        this.currentState = new Subject();
        this.currentValue = new BehaviorSubject({});
        this.getValue = this.currentValue.asObservable();
    }
    addValue(key, value) {
        this.currentState.next({ key, value });
    }
    setValue(key, value) {
        this.currentValue.next({ key, value });
    }
}
AppService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AppService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AppService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AppService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AppService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvY29uZmlnLWxvZ2luLXNldHRpbmdzL3NyYy9saWIvQGNvcmUvc2VydmljZS9hcHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUtoRCxNQUFNLE9BQU8sVUFBVTtJQUh2QjtRQUlFLGlCQUFZLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDM0MsaUJBQVksR0FBRyxJQUFJLGVBQWUsQ0FBTSxFQUFFLENBQUMsQ0FBQztRQUM1QyxhQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQVE3QztJQVBDLFFBQVEsQ0FBQyxHQUFXLEVBQUUsS0FBYTtRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBVyxFQUFFLEtBQWE7UUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDOzt3R0FWVSxVQUFVOzRHQUFWLFVBQVUsY0FGVCxNQUFNOzRGQUVQLFVBQVU7a0JBSHRCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFNlcnZpY2Uge1xyXG4gIGN1cnJlbnRTdGF0ZTogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuICBjdXJyZW50VmFsdWUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oe30pO1xyXG4gIGdldFZhbHVlID0gdGhpcy5jdXJyZW50VmFsdWUuYXNPYnNlcnZhYmxlKCk7XHJcbiAgYWRkVmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY3VycmVudFN0YXRlLm5leHQoeyBrZXksIHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY3VycmVudFZhbHVlLm5leHQoeyBrZXksIHZhbHVlIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=