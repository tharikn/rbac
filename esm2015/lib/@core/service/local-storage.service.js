import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
const APP_PREFIX = 'GAMED-';
export class LocalStorageService {
    constructor() {
        // This is intentional
    }
    static loadInitialState() {
        return Object.keys(localStorage).reduce((state, storageKey) => {
            if (storageKey.includes(APP_PREFIX)) {
                const stateKeys = storageKey
                    .replace(APP_PREFIX, '')
                    .toLowerCase()
                    .split('.')
                    .map(key => key
                    .split('-')
                    .map((token, index) => (index === 0 ? token : token.charAt(0).toUpperCase() + token.slice(1)))
                    .join(''));
                let currentStateRef = state;
                stateKeys.forEach((key, index) => {
                    if (index === stateKeys.length - 1) {
                        currentStateRef[key] = JSON.parse(localStorage.getItem(storageKey) || '');
                        return;
                    }
                    currentStateRef[key] = currentStateRef[key] || {};
                    currentStateRef = currentStateRef[key];
                });
            }
            return state;
        }, {});
    }
    setItem(key, value) {
        localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
    }
    getItem(key) {
        return localStorage.getItem(`${APP_PREFIX}${key}`) || '';
    }
    removeItem(key) {
        localStorage.removeItem(`${APP_PREFIX}${key}`);
    }
    /** Tests that localStorage exists, can be written to, and read from. */
    testLocalStorage() {
        const testValue = 'testValue';
        const testKey = 'testKey';
        const errorMessage = 'localStorage did not return expected value';
        this.setItem(testKey, testValue);
        const retrievedValue = this.getItem(testKey);
        this.removeItem(testKey);
        if (retrievedValue !== testValue) {
            throw new Error(errorMessage);
        }
    }
}
LocalStorageService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LocalStorageService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LocalStorageService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LocalStorageService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LocalStorageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2NvbmZpZy1sb2dpbi1zZXR0aW5ncy9zcmMvbGliL0Bjb3JlL3NlcnZpY2UvbG9jYWwtc3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQztBQUs1QixNQUFNLE9BQU8sbUJBQW1CO0lBQzlCO1FBQ0Usc0JBQXNCO0lBQ3hCLENBQUM7SUFFRCxNQUFNLENBQUMsZ0JBQWdCO1FBQ3JCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFVLEVBQUUsVUFBVSxFQUFFLEVBQUU7WUFDakUsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUNuQyxNQUFNLFNBQVMsR0FBRyxVQUFVO3FCQUN6QixPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQztxQkFDdkIsV0FBVyxFQUFFO3FCQUNiLEtBQUssQ0FBQyxHQUFHLENBQUM7cUJBQ1YsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQ1QsR0FBRztxQkFDQSxLQUFLLENBQUMsR0FBRyxDQUFDO3FCQUNWLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDN0YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUNaLENBQUM7Z0JBQ0osSUFBSSxlQUFlLEdBQUcsS0FBSyxDQUFDO2dCQUM1QixTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFO29CQUMvQixJQUFJLEtBQUssS0FBSyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDbEMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzt3QkFDMUUsT0FBTztxQkFDUjtvQkFDRCxlQUFlLENBQUMsR0FBRyxDQUFDLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDbEQsZUFBZSxHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDekMsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFXLEVBQUUsS0FBVTtRQUM3QixZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsVUFBVSxHQUFHLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsT0FBTyxDQUFDLEdBQVc7UUFDakIsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsVUFBVSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNELENBQUM7SUFFRCxVQUFVLENBQUMsR0FBVztRQUNwQixZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsVUFBVSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELHdFQUF3RTtJQUN4RSxnQkFBZ0I7UUFDZCxNQUFNLFNBQVMsR0FBRyxXQUFXLENBQUM7UUFDOUIsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQzFCLE1BQU0sWUFBWSxHQUFHLDRDQUE0QyxDQUFDO1FBRWxFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV6QixJQUFJLGNBQWMsS0FBSyxTQUFTLEVBQUU7WUFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7O2lIQXpEVSxtQkFBbUI7cUhBQW5CLG1CQUFtQixjQUZsQixNQUFNOzRGQUVQLG1CQUFtQjtrQkFIL0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5jb25zdCBBUFBfUFJFRklYID0gJ0dBTUVELSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxcclxuICB9XHJcblxyXG4gIHN0YXRpYyBsb2FkSW5pdGlhbFN0YXRlKCkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkucmVkdWNlKChzdGF0ZTogYW55LCBzdG9yYWdlS2V5KSA9PiB7XHJcbiAgICAgIGlmIChzdG9yYWdlS2V5LmluY2x1ZGVzKEFQUF9QUkVGSVgpKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhdGVLZXlzID0gc3RvcmFnZUtleVxyXG4gICAgICAgICAgLnJlcGxhY2UoQVBQX1BSRUZJWCwgJycpXHJcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgLnNwbGl0KCcuJylcclxuICAgICAgICAgIC5tYXAoa2V5ID0+XHJcbiAgICAgICAgICAgIGtleVxyXG4gICAgICAgICAgICAgIC5zcGxpdCgnLScpXHJcbiAgICAgICAgICAgICAgLm1hcCgodG9rZW4sIGluZGV4KSA9PiAoaW5kZXggPT09IDAgPyB0b2tlbiA6IHRva2VuLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdG9rZW4uc2xpY2UoMSkpKVxyXG4gICAgICAgICAgICAgIC5qb2luKCcnKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICBsZXQgY3VycmVudFN0YXRlUmVmID0gc3RhdGU7XHJcbiAgICAgICAgc3RhdGVLZXlzLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGlmIChpbmRleCA9PT0gc3RhdGVLZXlzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgY3VycmVudFN0YXRlUmVmW2tleV0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VLZXkpIHx8ICcnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY3VycmVudFN0YXRlUmVmW2tleV0gPSBjdXJyZW50U3RhdGVSZWZba2V5XSB8fCB7fTtcclxuICAgICAgICAgIGN1cnJlbnRTdGF0ZVJlZiA9IGN1cnJlbnRTdGF0ZVJlZltrZXldO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH0sIHt9KTtcclxuICB9XHJcblxyXG4gIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke0FQUF9QUkVGSVh9JHtrZXl9YCwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICB9XHJcblxyXG4gIGdldEl0ZW0oa2V5OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtBUFBfUFJFRklYfSR7a2V5fWApIHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSXRlbShrZXk6IHN0cmluZykge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYCR7QVBQX1BSRUZJWH0ke2tleX1gKTtcclxuICB9XHJcblxyXG4gIC8qKiBUZXN0cyB0aGF0IGxvY2FsU3RvcmFnZSBleGlzdHMsIGNhbiBiZSB3cml0dGVuIHRvLCBhbmQgcmVhZCBmcm9tLiAqL1xyXG4gIHRlc3RMb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBjb25zdCB0ZXN0VmFsdWUgPSAndGVzdFZhbHVlJztcclxuICAgIGNvbnN0IHRlc3RLZXkgPSAndGVzdEtleSc7XHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSAnbG9jYWxTdG9yYWdlIGRpZCBub3QgcmV0dXJuIGV4cGVjdGVkIHZhbHVlJztcclxuXHJcbiAgICB0aGlzLnNldEl0ZW0odGVzdEtleSwgdGVzdFZhbHVlKTtcclxuICAgIGNvbnN0IHJldHJpZXZlZFZhbHVlID0gdGhpcy5nZXRJdGVtKHRlc3RLZXkpO1xyXG4gICAgdGhpcy5yZW1vdmVJdGVtKHRlc3RLZXkpO1xyXG5cclxuICAgIGlmIChyZXRyaWV2ZWRWYWx1ZSAhPT0gdGVzdFZhbHVlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=