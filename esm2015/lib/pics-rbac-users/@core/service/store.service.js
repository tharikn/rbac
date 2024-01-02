import { BehaviorSubject } from 'rxjs';
export class Store {
    constructor(initialState) {
        this._state$ = new BehaviorSubject(initialState);
        this.state$ = this._state$.asObservable();
    }
    get state() {
        return this._state$.getValue();
    }
    setState(nextState) {
        this._state$.next(nextState);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9yYmFjLXVzZXJzL3NyYy9saWIvcGljcy1yYmFjLXVzZXJzL0Bjb3JlL3NlcnZpY2Uvc3RvcmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRW5ELE1BQU0sT0FBTyxLQUFLO0lBSWhCLFlBQXNCLFlBQWU7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsUUFBUSxDQUFDLFNBQVk7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RvcmU8VD4ge1xyXG4gIHN0YXRlJDogT2JzZXJ2YWJsZTxUPjtcclxuICBwcml2YXRlIF9zdGF0ZSQ6IEJlaGF2aW9yU3ViamVjdDxUPjtcclxuXHJcbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGluaXRpYWxTdGF0ZTogVCkge1xyXG4gICAgdGhpcy5fc3RhdGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdChpbml0aWFsU3RhdGUpO1xyXG4gICAgdGhpcy5zdGF0ZSQgPSB0aGlzLl9zdGF0ZSQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc3RhdGUoKTogVCB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUkLmdldFZhbHVlKCk7XHJcbiAgfVxyXG5cclxuICBzZXRTdGF0ZShuZXh0U3RhdGU6IFQpOiB2b2lkIHtcclxuICAgIHRoaXMuX3N0YXRlJC5uZXh0KG5leHRTdGF0ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==