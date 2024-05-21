import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { fontRangeSetList, fontSetList, themeList } from './pics-profile/@core/constants/theme-constants';
import { UserConfig } from './pics-profile/@core/urls/rbac-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./pics-profile/@core/service/http.service";
import * as i2 from "./pics-profile/@core/service/theme.service";
import * as i3 from "./pics-profile/@core/service/local.service";
export class ProfileService {
    httpService;
    themeService;
    localstorage;
    profileImage = new Subject();
    constructor(httpService, themeService, localstorage) {
        this.httpService = httpService;
        this.themeService = themeService;
        this.localstorage = localstorage;
    }
    setUserPreference() {
        const user_id = this.localstorage.getItem('id');
        if (user_id) {
            this.getUserPreference(user_id).subscribe((res) => {
                if (res.data && res.data?.config) {
                    const configArray = JSON.parse(res.data.config);
                    this.setTheme(configArray.theme);
                    const font = configArray.font ? configArray.font.toString() : '13';
                    this.setRangeFont(font);
                }
            });
        }
    }
    setTheme(event) {
        this.localstorage.setItem('SELECTED_THEME', event);
        const selectedTheme = themeList.filter(theme => theme.key === event)[0];
        this.themeService.setActiveTheme(selectedTheme);
        console.log('Selected Theme:', selectedTheme.key);
    }
    setFont(event) {
        this.localstorage.setItem('SELECTED_FONT', event);
        const selectedFont = fontSetList.filter(fontSet => fontSet.key === event)[0];
        this.themeService.setActiveFont(selectedFont);
    }
    setRangeFont(event) {
        this.localstorage.setItem('SELECTED_FONT', event);
        const selectedFont = fontRangeSetList.filter(fontSet => fontSet.key === event)[0];
        this.themeService.setActiveFont(selectedFont);
    }
    getProfile(img) {
        this.profileImage.next(img);
    }
    getAllUserList(key) {
        return this.httpService.get(`${UserConfig.EndPoint.User.getAllUserList}/${key}`);
    }
    getAllUserOrgList(orgid) {
        return this.httpService.get(UserConfig.EndPoint.User.getAllUserOrgList + orgid);
    }
    getUserPreference(id) {
        return this.httpService.get(UserConfig.EndPoint.User.getUserConfig.replace('{id}', id));
    }
    updateUser(data, userid) {
        return this.httpService.patch(`${UserConfig.EndPoint.User.getAllUserList}/${userid}/updateUserDetails`, data);
    }
    saveUserPreference(data) {
        return this.httpService.post(UserConfig.EndPoint.User.saveUserConfig, data);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileService, deps: [{ token: i1.HttpService }, { token: i2.ThemeService }, { token: i3.LocalService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpService }, { type: i2.ThemeService }, { type: i3.LocalService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3Byb2ZpbGUvc3JjL2xpYi9wcm9maWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDMUcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOzs7OztBQUt2RSxNQUFNLE9BQU8sY0FBYztJQUdmO0lBQ0E7SUFDQTtJQUpWLFlBQVksR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUMzQyxZQUNVLFdBQXdCLEVBQ3hCLFlBQTBCLEVBQzFCLFlBQTBCO1FBRjFCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQ2pDLENBQUM7SUFFSixpQkFBaUI7UUFDZixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtnQkFDckQsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFO29CQUNoQyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsV0FB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QWMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5RSxDQUFDO3dHQXhEVSxjQUFjOzRHQUFkLGNBQWMsY0FGYixNQUFNOzs0RkFFUCxjQUFjO2tCQUgxQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vcGljcy1wcm9maWxlL0Bjb3JlL3NlcnZpY2UvaHR0cC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGhlbWVTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLXByb2ZpbGUvQGNvcmUvc2VydmljZS90aGVtZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9jYWxTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLXByb2ZpbGUvQGNvcmUvc2VydmljZS9sb2NhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgZm9udFJhbmdlU2V0TGlzdCwgZm9udFNldExpc3QsIHRoZW1lTGlzdCB9IGZyb20gJy4vcGljcy1wcm9maWxlL0Bjb3JlL2NvbnN0YW50cy90aGVtZS1jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBVc2VyQ29uZmlnIH0gZnJvbSAnLi9waWNzLXByb2ZpbGUvQGNvcmUvdXJscy9yYmFjLXVybC5jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZVNlcnZpY2Uge1xyXG4gIHByb2ZpbGVJbWFnZTogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0aGVtZVNlcnZpY2U6IFRoZW1lU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9jYWxzdG9yYWdlOiBMb2NhbFNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIHNldFVzZXJQcmVmZXJlbmNlKCkge1xyXG4gICAgY29uc3QgdXNlcl9pZCA9IHRoaXMubG9jYWxzdG9yYWdlLmdldEl0ZW0oJ2lkJyk7XHJcbiAgICBpZiAodXNlcl9pZCkge1xyXG4gICAgICB0aGlzLmdldFVzZXJQcmVmZXJlbmNlKHVzZXJfaWQpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAocmVzLmRhdGEgJiYgcmVzLmRhdGE/LmNvbmZpZykge1xyXG4gICAgICAgICAgY29uc3QgY29uZmlnQXJyYXkgPSBKU09OLnBhcnNlKHJlcy5kYXRhLmNvbmZpZyk7XHJcbiAgICAgICAgICB0aGlzLnNldFRoZW1lKGNvbmZpZ0FycmF5LnRoZW1lKTtcclxuICAgICAgICAgIGNvbnN0IGZvbnQgPSBjb25maWdBcnJheS5mb250ID8gY29uZmlnQXJyYXkuZm9udC50b1N0cmluZygpOiAnMTMnO1xyXG4gICAgICAgICAgdGhpcy5zZXRSYW5nZUZvbnQoZm9udCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgc2V0VGhlbWUoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5sb2NhbHN0b3JhZ2Uuc2V0SXRlbSgnU0VMRUNURURfVEhFTUUnLCBldmVudCk7XHJcbiAgICBjb25zdCBzZWxlY3RlZFRoZW1lID0gdGhlbWVMaXN0LmZpbHRlcih0aGVtZSA9PiB0aGVtZS5rZXkgPT09IGV2ZW50KVswXTtcclxuICAgIHRoaXMudGhlbWVTZXJ2aWNlLnNldEFjdGl2ZVRoZW1lKHNlbGVjdGVkVGhlbWUpO1xyXG4gICAgY29uc29sZS5sb2coJ1NlbGVjdGVkIFRoZW1lOicsIHNlbGVjdGVkVGhlbWUua2V5KTtcclxuICB9XHJcbiAgc2V0Rm9udChldmVudDogYW55KSB7XHJcbiAgICB0aGlzLmxvY2Fsc3RvcmFnZS5zZXRJdGVtKCdTRUxFQ1RFRF9GT05UJywgZXZlbnQpO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRGb250ID0gZm9udFNldExpc3QuZmlsdGVyKGZvbnRTZXQgPT4gZm9udFNldC5rZXkgPT09IGV2ZW50KVswXTtcclxuICAgIHRoaXMudGhlbWVTZXJ2aWNlLnNldEFjdGl2ZUZvbnQoc2VsZWN0ZWRGb250KTtcclxuICB9XHJcbiAgc2V0UmFuZ2VGb250KGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMubG9jYWxzdG9yYWdlLnNldEl0ZW0oJ1NFTEVDVEVEX0ZPTlQnLCBldmVudCk7XHJcbiAgICBjb25zdCBzZWxlY3RlZEZvbnQgPSBmb250UmFuZ2VTZXRMaXN0LmZpbHRlcihmb250U2V0ID0+IGZvbnRTZXQua2V5ID09PSBldmVudClbMF07XHJcbiAgICB0aGlzLnRoZW1lU2VydmljZS5zZXRBY3RpdmVGb250KHNlbGVjdGVkRm9udCk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9maWxlKGltZzogYW55KSB7XHJcbiAgICB0aGlzLnByb2ZpbGVJbWFnZS5uZXh0KGltZyk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxVc2VyTGlzdChrZXk/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KGAke1VzZXJDb25maWcuRW5kUG9pbnQuVXNlci5nZXRBbGxVc2VyTGlzdH0vJHtrZXl9YCk7XHJcbiAgfVxyXG4gIGdldEFsbFVzZXJPcmdMaXN0KG9yZ2lkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChVc2VyQ29uZmlnLkVuZFBvaW50LlVzZXIuZ2V0QWxsVXNlck9yZ0xpc3QgKyBvcmdpZCk7XHJcbiAgfVxyXG4gIGdldFVzZXJQcmVmZXJlbmNlKGlkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChVc2VyQ29uZmlnLkVuZFBvaW50LlVzZXIuZ2V0VXNlckNvbmZpZy5yZXBsYWNlKCd7aWR9JywgaWQpKTtcclxuICB9XHJcbiAgdXBkYXRlVXNlcihkYXRhOiBhbnksIHVzZXJpZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wYXRjaChgJHtVc2VyQ29uZmlnLkVuZFBvaW50LlVzZXIuZ2V0QWxsVXNlckxpc3R9LyR7dXNlcmlkfS91cGRhdGVVc2VyRGV0YWlsc2AsIGRhdGEpO1xyXG4gIH1cclxuICBzYXZlVXNlclByZWZlcmVuY2UoZGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KFVzZXJDb25maWcuRW5kUG9pbnQuVXNlci5zYXZlVXNlckNvbmZpZywgZGF0YSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==