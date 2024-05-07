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
            this.setState(Object.assign(Object.assign({}, this.state), data));
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
}
PermissionStore.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionStore, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PermissionStore.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionStore });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionStore, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9sb2dpbi9zcmMvbGliL3BpY3MtbG9naW4vQGNvcmUvcGVybWlzc2lvbnMvcGVybWlzc2lvbi5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUVqRCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxLQUFVO0lBQzdDO1FBQ0UsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFTO1FBQ2hCLElBQUcsSUFBSSxFQUFDO1lBQ04sSUFBSSxDQUFDLFFBQVEsaUNBQU0sSUFBSSxDQUFDLEtBQUssR0FBSyxJQUFJLEVBQUcsQ0FBQztTQUMzQztJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsT0FBZSxHQUFHO1FBQ3pCLElBQUksSUFBSSxLQUFLLEdBQUc7WUFBRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7O1lBQ25DLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU8sSUFBSSxDQUFDLEtBQVk7UUFDdkIsSUFBSSxNQUFNLEdBQVUsRUFBRSxDQUFDO1FBQ3ZCLElBQUcsS0FBSyxFQUFDO1lBQ1AsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDL0IsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUN6QztZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs2R0EzQlUsZUFBZTtpSEFBZixlQUFlOzRGQUFmLGVBQWU7a0JBRDNCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi4vc2VydmljZS9zdG9yZS5zZXJ2aWNlJztcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvblN0b3JlIGV4dGVuZHMgU3RvcmU8YW55PiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcih7fSk7XHJcbiAgfVxyXG5cclxuICBzZXRTdG9yZShkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmKGRhdGEpe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgLi4uZGF0YSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFN0b3JlKHR5cGU6IHN0cmluZyA9ICdQJyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBpZiAodHlwZSA9PT0gJ1AnKSByZXR1cm4gb2YodGhpcy5zdGF0ZSk7XHJcbiAgICBlbHNlIHJldHVybiBvZih0aGlzLnN0YXRlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmxhdChhcnJheTogYW55W10pIHtcclxuICAgIGxldCByZXN1bHQ6IGFueVtdID0gW107XHJcbiAgICBpZihhcnJheSl7XHJcbiAgICAgIGFycmF5LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgaWYgKGl0ZW0gJiYgQXJyYXkuaXNBcnJheShpdGVtKSkge1xyXG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdCh0aGlzLmZsYXQoaXRlbSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG4iXX0=