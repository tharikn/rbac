import { Injectable } from '@angular/core';
import { RoutesRecognized } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter, pairwise } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AppService {
    router;
    currentState = new Subject();
    currentValue = new BehaviorSubject({});
    getValue = this.currentValue.asObservable();
    excludedUrl = ['/login', '/registration/', '/forgot-password', 'change-password'];
    previousUrl;
    constructor(router) {
        this.router = router;
        this.router.events
            .pipe(filter((evt) => evt instanceof RoutesRecognized), pairwise())
            .subscribe((events) => {
            this.previousUrl = events[0].urlAfterRedirects;
        });
    }
    addValue(key, value) {
        this.currentState.next({ key, value });
    }
    setValue(key, value) {
        this.currentValue.next({ key, value });
    }
    canNavigateBack() {
        return this.previousUrl && !this.excludedUrl.some((url) => this.previousUrl.startsWith(url));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AppService, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AppService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AppService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL0Bjb3JlL3NlcnZpY2UvYXBwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQVUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLbEQsTUFBTSxPQUFPLFVBQVU7SUFTRDtJQVBwQixZQUFZLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7SUFDM0MsWUFBWSxHQUFHLElBQUksZUFBZSxDQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRXBDLFdBQVcsR0FBRyxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2xGLFdBQVcsQ0FBUztJQUU1QixZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFLENBQUMsR0FBRyxZQUFZLGdCQUFnQixDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUM7YUFDdkUsU0FBUyxDQUFDLENBQUMsTUFBMEIsRUFBRSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFXLEVBQUUsS0FBYTtRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBVyxFQUFFLEtBQWE7UUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9GLENBQUM7d0dBM0JVLFVBQVU7NEdBQVYsVUFBVSxjQUZULE1BQU07OzRGQUVQLFVBQVU7a0JBSHRCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlc1JlY29nbml6ZWQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCBwYWlyd2lzZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFNlcnZpY2Uge1xyXG5cclxuICBjdXJyZW50U3RhdGU6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgY3VycmVudFZhbHVlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KHt9KTtcclxuICBnZXRWYWx1ZSA9IHRoaXMuY3VycmVudFZhbHVlLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBwcml2YXRlIGV4Y2x1ZGVkVXJsID0gWycvbG9naW4nLCAnL3JlZ2lzdHJhdGlvbi8nLCAnL2ZvcmdvdC1wYXNzd29yZCcsICdjaGFuZ2UtcGFzc3dvcmQnXTtcclxuICBwcml2YXRlIHByZXZpb3VzVXJsOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIHRoaXMucm91dGVyLmV2ZW50c1xyXG4gICAgLnBpcGUoZmlsdGVyKChldnQ6IGFueSkgPT4gZXZ0IGluc3RhbmNlb2YgUm91dGVzUmVjb2duaXplZCksIHBhaXJ3aXNlKCkpXHJcbiAgICAuc3Vic2NyaWJlKChldmVudHM6IFJvdXRlc1JlY29nbml6ZWRbXSkgPT4ge1xyXG4gICAgICB0aGlzLnByZXZpb3VzVXJsID0gZXZlbnRzWzBdLnVybEFmdGVyUmVkaXJlY3RzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5jdXJyZW50U3RhdGUubmV4dCh7IGtleSwgdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5jdXJyZW50VmFsdWUubmV4dCh7IGtleSwgdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBjYW5OYXZpZ2F0ZUJhY2soKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcmV2aW91c1VybCAmJiAhdGhpcy5leGNsdWRlZFVybC5zb21lKCh1cmwpID0+IHRoaXMucHJldmlvdXNVcmwuc3RhcnRzV2l0aCh1cmwpKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==