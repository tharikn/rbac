import { Injectable } from '@angular/core';
import { CommonUrlConfig } from '../url/auth-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./data-store.service";
export class CommonDropdownsService {
    _storeservice;
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    getDropDownValues(refUrl) {
        return this.httpService.get(CommonUrlConfig.EndPoint.dropDown[refUrl] + '/');
    }
    getDropDownWithoutValues(refUrl) {
        return this.httpService.get(CommonUrlConfig.EndPoint.dropDown[refUrl]);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CommonDropdownsService, deps: [{ token: i1.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CommonDropdownsService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CommonDropdownsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWRyb3Bkb3ducy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvcGFnZS1idWlsZGVyL3NyYy9saWIvcGljcy1wYWdlYnVpbGRlci9AY29yZS9zZXJ2aWNlcy9jb21tb24tZHJvcGRvd25zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQU16RCxNQUFNLE9BQU8sc0JBQXNCO0lBRWI7SUFEcEIsV0FBVyxDQUFNO0lBQ2pCLFlBQW9CLGFBQStCO1FBQS9CLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNyRCxJQUFJLEdBQUcsRUFBRTtnQkFDUCxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTthQUN0QztRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGlCQUFpQixDQUFDLE1BQU07UUFDdEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBQ0Qsd0JBQXdCLENBQUMsTUFBTTtRQUM3QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQzt3R0FmVSxzQkFBc0I7NEdBQXRCLHNCQUFzQixjQUZyQixNQUFNOzs0RkFFUCxzQkFBc0I7a0JBSGxDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25VcmxDb25maWcgfSBmcm9tICcuLi91cmwvYXV0aC11cmwuY29uZmlnJztcclxuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4vZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbW1vbkRyb3Bkb3duc1NlcnZpY2Uge1xyXG4gIGh0dHBTZXJ2aWNlOiBhbnk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RvcmVzZXJ2aWNlOiBEYXRhU3RvcmVTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLl9zdG9yZXNlcnZpY2UuY3VycmVudFN0b3JlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UgPSByZXNbJ0hUVFBTRVJWSUNFJ11cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldERyb3BEb3duVmFsdWVzKHJlZlVybCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KENvbW1vblVybENvbmZpZy5FbmRQb2ludC5kcm9wRG93bltyZWZVcmxdICsgJy8nKTtcclxuICB9XHJcbiAgZ2V0RHJvcERvd25XaXRob3V0VmFsdWVzKHJlZlVybCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KENvbW1vblVybENvbmZpZy5FbmRQb2ludC5kcm9wRG93bltyZWZVcmxdKTtcclxuICB9XHJcbn1cclxuIl19