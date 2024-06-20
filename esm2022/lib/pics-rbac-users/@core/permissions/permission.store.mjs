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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9yYmFjLXVzZXJzL3NyYy9saWIvcGljcy1yYmFjLXVzZXJzL0Bjb3JlL3Blcm1pc3Npb25zL3Blcm1pc3Npb24uc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFHakQsTUFBTSxPQUFPLGVBQWdCLFNBQVEsS0FBVTtJQUM3QztRQUNFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBUztRQUNoQixJQUFHLElBQUksRUFBQztZQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxPQUFlLEdBQUc7UUFDekIsSUFBSSxJQUFJLEtBQUssR0FBRztZQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7WUFDbkMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTyxJQUFJLENBQUMsS0FBWTtRQUN2QixJQUFJLE1BQU0sR0FBVSxFQUFFLENBQUM7UUFDdkIsSUFBRyxLQUFLLEVBQUM7WUFDUCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUMvQixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQ3pDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7d0dBM0JVLGVBQWU7NEdBQWYsZUFBZTs7NEZBQWYsZUFBZTtrQkFEM0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuLi9zZXJ2aWNlL3N0b3JlLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvblN0b3JlIGV4dGVuZHMgU3RvcmU8YW55PiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcih7fSk7XHJcbiAgfVxyXG5cclxuICBzZXRTdG9yZShkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmKGRhdGEpe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgLi4uZGF0YSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFN0b3JlKHR5cGU6IHN0cmluZyA9ICdQJyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBpZiAodHlwZSA9PT0gJ1AnKSByZXR1cm4gb2YodGhpcy5zdGF0ZSk7XHJcbiAgICBlbHNlIHJldHVybiBvZih0aGlzLnN0YXRlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmxhdChhcnJheTogYW55W10pIHtcclxuICAgIGxldCByZXN1bHQ6IGFueVtdID0gW107XHJcbiAgICBpZihhcnJheSl7XHJcbiAgICAgIGFycmF5LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgaWYgKGl0ZW0gJiYgQXJyYXkuaXNBcnJheShpdGVtKSkge1xyXG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdCh0aGlzLmZsYXQoaXRlbSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG4iXX0=