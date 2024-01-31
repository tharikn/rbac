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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9yYmFjLXBhZ2VhY2Nlc3Mvc3JjL2xpYi9waWNzLXJiYWMtcGFnZWFjY2Vzcy9AY29yZS9zZXJ2aWNlL3N0b3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUVuRCxNQUFNLE9BQU8sS0FBSztJQUloQixZQUFzQixZQUFlO1FBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELFFBQVEsQ0FBQyxTQUFZO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0b3JlPFQ+IHtcclxuICBzdGF0ZSQ6IE9ic2VydmFibGU8VD47XHJcbiAgcHJpdmF0ZSBfc3RhdGUkOiBCZWhhdmlvclN1YmplY3Q8VD47XHJcblxyXG4gIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihpbml0aWFsU3RhdGU6IFQpIHtcclxuICAgIHRoaXMuX3N0YXRlJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoaW5pdGlhbFN0YXRlKTtcclxuICAgIHRoaXMuc3RhdGUkID0gdGhpcy5fc3RhdGUkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHN0YXRlKCk6IFQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlJC5nZXRWYWx1ZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0U3RhdGUobmV4dFN0YXRlOiBUKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zdGF0ZSQubmV4dChuZXh0U3RhdGUpO1xyXG4gIH1cclxufVxyXG4iXX0=