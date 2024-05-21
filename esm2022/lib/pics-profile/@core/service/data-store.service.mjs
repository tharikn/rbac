import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class DataStoreService {
    currentStoreSubject = new BehaviorSubject({});
    currentStore = this.currentStoreSubject.asObservable();
    constructor() {
        // test code
    }
    setData(key, value) {
        const currentStore = this.getCurrentStore();
        currentStore[key] = value;
        this.currentStoreSubject.next(currentStore);
    }
    setObject(value) {
        this.currentStoreSubject.next(value);
    }
    getData(key) {
        const currentStore = this.getCurrentStore();
        return currentStore[key];
    }
    clearStore() {
        const currentStore = this.getCurrentStore();
        Object.keys(currentStore).forEach((key) => {
            delete currentStore[key];
        });
        this.currentStoreSubject.next(currentStore);
    }
    getCurrentStore() {
        return this.currentStoreSubject.value;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataStoreService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataStoreService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataStoreService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zdG9yZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3Byb2ZpbGUvc3JjL2xpYi9waWNzLXByb2ZpbGUvQGNvcmUvc2VydmljZS9kYXRhLXN0b3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUl2QyxNQUFNLE9BQU8sZ0JBQWdCO0lBQ25CLG1CQUFtQixHQUFHLElBQUksZUFBZSxDQUFNLEVBQVMsQ0FBQyxDQUFDO0lBQzNELFlBQVksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFOUQ7UUFDRSxZQUFZO0lBQ2QsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFXLEVBQUUsS0FBVTtRQUM3QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBVTtRQUNsQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxPQUFPLENBQUMsR0FBVztRQUNqQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUMsT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELFVBQVU7UUFDUixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUN4QyxPQUFPLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7SUFDeEMsQ0FBQzt3R0FqQ1UsZ0JBQWdCOzRHQUFoQixnQkFBZ0I7OzRGQUFoQixnQkFBZ0I7a0JBRDVCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERhdGFTdG9yZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgY3VycmVudFN0b3JlU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55Pih7fSBhcyBhbnkpO1xyXG4gIHB1YmxpYyBjdXJyZW50U3RvcmUgPSB0aGlzLmN1cnJlbnRTdG9yZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gdGVzdCBjb2RlXHJcbiAgfVxyXG5cclxuICBzZXREYXRhKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICBjb25zdCBjdXJyZW50U3RvcmUgPSB0aGlzLmdldEN1cnJlbnRTdG9yZSgpO1xyXG4gICAgY3VycmVudFN0b3JlW2tleV0gPSB2YWx1ZTtcclxuICAgIHRoaXMuY3VycmVudFN0b3JlU3ViamVjdC5uZXh0KGN1cnJlbnRTdG9yZSk7XHJcbiAgfVxyXG5cclxuICBzZXRPYmplY3QodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5jdXJyZW50U3RvcmVTdWJqZWN0Lm5leHQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YShrZXk6IHN0cmluZyk6IGFueSB7XHJcbiAgICBjb25zdCBjdXJyZW50U3RvcmUgPSB0aGlzLmdldEN1cnJlbnRTdG9yZSgpO1xyXG4gICAgcmV0dXJuIGN1cnJlbnRTdG9yZVtrZXldO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJTdG9yZSgpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRTdG9yZSA9IHRoaXMuZ2V0Q3VycmVudFN0b3JlKCk7XHJcbiAgICBPYmplY3Qua2V5cyhjdXJyZW50U3RvcmUpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICBkZWxldGUgY3VycmVudFN0b3JlW2tleV07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY3VycmVudFN0b3JlU3ViamVjdC5uZXh0KGN1cnJlbnRTdG9yZSk7XHJcbiAgfVxyXG5cclxuICBnZXRDdXJyZW50U3RvcmUoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRTdG9yZVN1YmplY3QudmFsdWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==