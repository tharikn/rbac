import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { fontRangeSetList, fontSetList, themeList } from './pics-profile/@core/constants/theme-constants';
import { MasterURL, UserConfig } from './pics-profile/@core/urls/rbac-url.config';
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
    getCategoryLookup(name) {
        return this.httpService.get(MasterURL.EndPoints.lookup.GetCategoryLookup + '/' + name);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3Byb2ZpbGUvc3JjL2xpYi9wcm9maWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDMUcsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7QUFLbEYsTUFBTSxPQUFPLGNBQWM7SUFHZjtJQUNBO0lBQ0E7SUFKVixZQUFZLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7SUFDM0MsWUFDVSxXQUF3QixFQUN4QixZQUEwQixFQUMxQixZQUEwQjtRQUYxQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUNqQyxDQUFDO0lBRUosaUJBQWlCO1FBQ2YsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7Z0JBQ3JELElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRTtvQkFDaEMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNoRCxJQUFJLENBQUMsUUFB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QUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELGlCQUFpQixDQUFDLElBQUk7UUFDcEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDekYsQ0FBQzt3R0E1RFUsY0FBYzs0R0FBZCxjQUFjLGNBRmIsTUFBTTs7NEZBRVAsY0FBYztrQkFIMUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICcuL3BpY3MtcHJvZmlsZS9AY29yZS9zZXJ2aWNlL2h0dHAuc2VydmljZSc7XHJcbmltcG9ydCB7IFRoZW1lU2VydmljZSB9IGZyb20gJy4vcGljcy1wcm9maWxlL0Bjb3JlL3NlcnZpY2UvdGhlbWUuc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2FsU2VydmljZSB9IGZyb20gJy4vcGljcy1wcm9maWxlL0Bjb3JlL3NlcnZpY2UvbG9jYWwuc2VydmljZSc7XHJcbmltcG9ydCB7IGZvbnRSYW5nZVNldExpc3QsIGZvbnRTZXRMaXN0LCB0aGVtZUxpc3QgfSBmcm9tICcuL3BpY3MtcHJvZmlsZS9AY29yZS9jb25zdGFudHMvdGhlbWUtY29uc3RhbnRzJztcclxuaW1wb3J0IHsgTWFzdGVyVVJMLCBVc2VyQ29uZmlnIH0gZnJvbSAnLi9waWNzLXByb2ZpbGUvQGNvcmUvdXJscy9yYmFjLXVybC5jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZVNlcnZpY2Uge1xyXG4gIHByb2ZpbGVJbWFnZTogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0aGVtZVNlcnZpY2U6IFRoZW1lU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9jYWxzdG9yYWdlOiBMb2NhbFNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIHNldFVzZXJQcmVmZXJlbmNlKCkge1xyXG4gICAgY29uc3QgdXNlcl9pZCA9IHRoaXMubG9jYWxzdG9yYWdlLmdldEl0ZW0oJ2lkJyk7XHJcbiAgICBpZiAodXNlcl9pZCkge1xyXG4gICAgICB0aGlzLmdldFVzZXJQcmVmZXJlbmNlKHVzZXJfaWQpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAocmVzLmRhdGEgJiYgcmVzLmRhdGE/LmNvbmZpZykge1xyXG4gICAgICAgICAgY29uc3QgY29uZmlnQXJyYXkgPSBKU09OLnBhcnNlKHJlcy5kYXRhLmNvbmZpZyk7XHJcbiAgICAgICAgICB0aGlzLnNldFRoZW1lKGNvbmZpZ0FycmF5LnRoZW1lKTtcclxuICAgICAgICAgIGNvbnN0IGZvbnQgPSBjb25maWdBcnJheS5mb250ID8gY29uZmlnQXJyYXkuZm9udC50b1N0cmluZygpOiAnMTMnO1xyXG4gICAgICAgICAgdGhpcy5zZXRSYW5nZUZvbnQoZm9udCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgc2V0VGhlbWUoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5sb2NhbHN0b3JhZ2Uuc2V0SXRlbSgnU0VMRUNURURfVEhFTUUnLCBldmVudCk7XHJcbiAgICBjb25zdCBzZWxlY3RlZFRoZW1lID0gdGhlbWVMaXN0LmZpbHRlcih0aGVtZSA9PiB0aGVtZS5rZXkgPT09IGV2ZW50KVswXTtcclxuICAgIHRoaXMudGhlbWVTZXJ2aWNlLnNldEFjdGl2ZVRoZW1lKHNlbGVjdGVkVGhlbWUpO1xyXG4gICAgY29uc29sZS5sb2coJ1NlbGVjdGVkIFRoZW1lOicsIHNlbGVjdGVkVGhlbWUua2V5KTtcclxuICB9XHJcbiAgc2V0Rm9udChldmVudDogYW55KSB7XHJcbiAgICB0aGlzLmxvY2Fsc3RvcmFnZS5zZXRJdGVtKCdTRUxFQ1RFRF9GT05UJywgZXZlbnQpO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRGb250ID0gZm9udFNldExpc3QuZmlsdGVyKGZvbnRTZXQgPT4gZm9udFNldC5rZXkgPT09IGV2ZW50KVswXTtcclxuICAgIHRoaXMudGhlbWVTZXJ2aWNlLnNldEFjdGl2ZUZvbnQoc2VsZWN0ZWRGb250KTtcclxuICB9XHJcbiAgc2V0UmFuZ2VGb250KGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMubG9jYWxzdG9yYWdlLnNldEl0ZW0oJ1NFTEVDVEVEX0ZPTlQnLCBldmVudCk7XHJcbiAgICBjb25zdCBzZWxlY3RlZEZvbnQgPSBmb250UmFuZ2VTZXRMaXN0LmZpbHRlcihmb250U2V0ID0+IGZvbnRTZXQua2V5ID09PSBldmVudClbMF07XHJcbiAgICB0aGlzLnRoZW1lU2VydmljZS5zZXRBY3RpdmVGb250KHNlbGVjdGVkRm9udCk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9maWxlKGltZzogYW55KSB7XHJcbiAgICB0aGlzLnByb2ZpbGVJbWFnZS5uZXh0KGltZyk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxVc2VyTGlzdChrZXk/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KGAke1VzZXJDb25maWcuRW5kUG9pbnQuVXNlci5nZXRBbGxVc2VyTGlzdH0vJHtrZXl9YCk7XHJcbiAgfVxyXG4gIGdldEFsbFVzZXJPcmdMaXN0KG9yZ2lkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChVc2VyQ29uZmlnLkVuZFBvaW50LlVzZXIuZ2V0QWxsVXNlck9yZ0xpc3QgKyBvcmdpZCk7XHJcbiAgfVxyXG4gIGdldFVzZXJQcmVmZXJlbmNlKGlkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChVc2VyQ29uZmlnLkVuZFBvaW50LlVzZXIuZ2V0VXNlckNvbmZpZy5yZXBsYWNlKCd7aWR9JywgaWQpKTtcclxuICB9XHJcbiAgdXBkYXRlVXNlcihkYXRhOiBhbnksIHVzZXJpZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wYXRjaChgJHtVc2VyQ29uZmlnLkVuZFBvaW50LlVzZXIuZ2V0QWxsVXNlckxpc3R9LyR7dXNlcmlkfS91cGRhdGVVc2VyRGV0YWlsc2AsIGRhdGEpO1xyXG4gIH1cclxuICBzYXZlVXNlclByZWZlcmVuY2UoZGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KFVzZXJDb25maWcuRW5kUG9pbnQuVXNlci5zYXZlVXNlckNvbmZpZywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRDYXRlZ29yeUxvb2t1cChuYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoTWFzdGVyVVJMLkVuZFBvaW50cy5sb29rdXAuR2V0Q2F0ZWdvcnlMb29rdXAgKyAnLycgKyBuYW1lKTtcclxuICB9XHJcbn1cclxuIl19