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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvbG9naW4vc3JjL2xpYi9waWNzLWxvZ2luL0Bjb3JlL3NlcnZpY2UvYXBwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLaEQsTUFBTSxPQUFPLFVBQVU7SUFIdkI7UUFJRSxpQkFBWSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzNDLGlCQUFZLEdBQUcsSUFBSSxlQUFlLENBQU0sRUFBRSxDQUFDLENBQUM7UUFDNUMsYUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7S0FRN0M7SUFQQyxRQUFRLENBQUMsR0FBVyxFQUFFLEtBQWE7UUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQVcsRUFBRSxLQUFhO1FBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7d0dBVlUsVUFBVTs0R0FBVixVQUFVLGNBRlQsTUFBTTs0RkFFUCxVQUFVO2tCQUh0QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBTZXJ2aWNlIHtcclxuICBjdXJyZW50U3RhdGU6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgY3VycmVudFZhbHVlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KHt9KTtcclxuICBnZXRWYWx1ZSA9IHRoaXMuY3VycmVudFZhbHVlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIGFkZFZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRTdGF0ZS5uZXh0KHsga2V5LCB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIHNldFZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZS5uZXh0KHsga2V5LCB2YWx1ZSB9KTtcclxuICB9XHJcbn1cclxuIl19