import { Injectable } from '@angular/core';
import { Store } from '../services/store.service';
import { AuthState } from './auth.state';
import * as i0 from "@angular/core";
import * as i1 from "./data-store.service";
export class AuthStore extends Store {
    _storeservice;
    constructor(_storeservice) {
        super(new AuthState());
        this._storeservice = _storeservice;
    }
    addAuthInfo(user) {
        this.setState({ ...this.state, user });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthStore, deps: [{ token: i1.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthStore });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthStore, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL3BhZ2UtYnVpbGRlci9zcmMvbGliL3BpY3MtcGFnZWJ1aWxkZXIvQGNvcmUvc2VydmljZXMvYXV0aC5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFHekMsTUFBTSxPQUFPLFNBQVUsU0FBUSxLQUFnQjtJQUN6QjtJQUFwQixZQUFvQixhQUErQjtRQUNqRCxLQUFLLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBREwsa0JBQWEsR0FBYixhQUFhLENBQWtCO0lBRW5ELENBQUM7SUFFRCxXQUFXLENBQUMsSUFBYTtRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQzt3R0FQVSxTQUFTOzRHQUFULFNBQVM7OzRGQUFULFNBQVM7a0JBRHJCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVzZXJEdG8gfSBmcm9tICcuLi9zZXJ2aWNlcy9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuLi9zZXJ2aWNlcy9zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aFN0YXRlIH0gZnJvbSAnLi9hdXRoLnN0YXRlJztcclxuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4vZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFN0b3JlIGV4dGVuZHMgU3RvcmU8QXV0aFN0YXRlPiB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RvcmVzZXJ2aWNlOiBEYXRhU3RvcmVTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcihuZXcgQXV0aFN0YXRlKCkpO1xyXG4gIH1cclxuXHJcbiAgYWRkQXV0aEluZm8odXNlcjogVXNlckR0byk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIHVzZXIgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBnZXRBdXRoSW5mbygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gIC8vICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgLy8gICBpZiAodGhpcy5zdGF0ZS51c2VyKSB7XHJcbiAgLy8gICAgIHJldHVybiBvZih0aGlzLnN0YXRlLnVzZXIpO1xyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgcmV0dXJuIGZvcmtKb2luKFt0aGlzLmh0dHBTZXJ2aWNlLmdldChBdXRoVVJMLkVuZFBvaW50cy5hdXRoLnVzZXIudXNlckluZm8pXSkucGlwZShcclxuICAvLyAgICAgICB0YXAoKFt1c2VyXSkgPT4ge1xyXG4gIC8vICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgLy8gICAgICAgfSlcclxuICAvLyAgICAgKTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcbn1cclxuIl19