import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Store } from '../service/store.service';
import * as i0 from "@angular/core";
export class PermissionStore extends Store {
    constructor() {
        super({});
    }
    setStore(data) {
        if (data) {
            this.setState({ ...this.state, ...data });
        }
    }
    getStore(type = 'P') {
        if (type === 'P')
            return of(this.state);
        else
            return of(this.state);
    }
    flat(array) {
        let result = [];
        if (array) {
            array.forEach(item => {
                result.push(item);
                if (item && Array.isArray(item)) {
                    result = result.concat(this.flat(item));
                }
            });
        }
        return result;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionStore, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionStore });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionStore, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9wcm9maWxlL3NyYy9saWIvcGljcy1wcm9maWxlL0Bjb3JlL3Blcm1pc3Npb25zL3Blcm1pc3Npb24uc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFFakQsTUFBTSxPQUFPLGVBQWdCLFNBQVEsS0FBVTtJQUM3QztRQUNFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBUztRQUNoQixJQUFHLElBQUksRUFBQztZQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxPQUFlLEdBQUc7UUFDekIsSUFBSSxJQUFJLEtBQUssR0FBRztZQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7WUFDbkMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTyxJQUFJLENBQUMsS0FBWTtRQUN2QixJQUFJLE1BQU0sR0FBVSxFQUFFLENBQUM7UUFDdkIsSUFBRyxLQUFLLEVBQUM7WUFDUCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUMvQixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQ3pDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7d0dBM0JVLGVBQWU7NEdBQWYsZUFBZTs7NEZBQWYsZUFBZTtrQkFEM0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuLi9zZXJ2aWNlL3N0b3JlLnNlcnZpY2UnO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uU3RvcmUgZXh0ZW5kcyBTdG9yZTxhbnk+IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHt9KTtcclxuICB9XHJcblxyXG4gIHNldFN0b3JlKGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgaWYoZGF0YSl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCAuLi5kYXRhIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U3RvcmUodHlwZTogc3RyaW5nID0gJ1AnKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGlmICh0eXBlID09PSAnUCcpIHJldHVybiBvZih0aGlzLnN0YXRlKTtcclxuICAgIGVsc2UgcmV0dXJuIG9mKHRoaXMuc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmbGF0KGFycmF5OiBhbnlbXSkge1xyXG4gICAgbGV0IHJlc3VsdDogYW55W10gPSBbXTtcclxuICAgIGlmKGFycmF5KXtcclxuICAgICAgYXJyYXkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICByZXN1bHQucHVzaChpdGVtKTtcclxuICAgICAgICBpZiAoaXRlbSAmJiBBcnJheS5pc0FycmF5KGl0ZW0pKSB7XHJcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KHRoaXMuZmxhdChpdGVtKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==