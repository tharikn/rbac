export class StorageService {
    constructor(Storage) {
        this.Storage = Storage;
    }
    getItem(key) {
        return this.Storage.getItem(key);
    }
    setItem(key, item) {
        return this.Storage.setItem(key, item);
    }
    getObj(key, safe = true) {
        try {
            const item = this.getItem(key);
            return JSON.parse(item);
        }
        catch (e) {
            if (!safe) {
                throw e;
            }
        }
    }
    setObj(key, item) {
        return this.setItem(key, JSON.stringify(item));
    }
    removeItem(key) {
        this.Storage.removeItem(key);
    }
    clear() {
        this.Storage.clear();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvbWljcm9zdHJhdGVneS9zcmMvbGliL0Bjb3JlL3NlcnZpY2Uvc3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFlBQXNCLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO0lBQUcsQ0FBQztJQUUvQixPQUFPLENBQUMsR0FBVztRQUN4QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSxPQUFPLENBQUMsR0FBVyxFQUFFLElBQVM7UUFDbkMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxHQUFXLEVBQUUsSUFBSSxHQUFHLElBQUk7UUFDcEMsSUFBSTtZQUNGLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pCO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNULE1BQU0sQ0FBQyxDQUFDO2FBQ1Q7U0FDRjtJQUNILENBQUM7SUFFTSxNQUFNLENBQUMsR0FBVyxFQUFFLElBQVM7UUFDbEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVNLFVBQVUsQ0FBQyxHQUFXO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTSxLQUFLO1FBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU3RvcmFnZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBTdG9yYWdlOiBhbnkpIHt9XHJcblxyXG4gIHB1YmxpYyBnZXRJdGVtKGtleTogc3RyaW5nKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLlN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEl0ZW0oa2V5OiBzdHJpbmcsIGl0ZW06IGFueSk6IHZvaWQge1xyXG4gICAgcmV0dXJuIHRoaXMuU3RvcmFnZS5zZXRJdGVtKGtleSwgaXRlbSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0T2JqKGtleTogc3RyaW5nLCBzYWZlID0gdHJ1ZSk6IGFueSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRJdGVtKGtleSk7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGl0ZW0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBpZiAoIXNhZmUpIHtcclxuICAgICAgICB0aHJvdyBlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0T2JqKGtleTogc3RyaW5nLCBpdGVtOiBhbnkpOiB2b2lkIHtcclxuICAgIHJldHVybiB0aGlzLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShpdGVtKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlSXRlbShrZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5TdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcclxuICAgIHRoaXMuU3RvcmFnZS5jbGVhcigpO1xyXG4gIH1cclxufVxyXG4iXX0=