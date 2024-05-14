import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FontSetList, themeList } from '../constants/theme-constants';
import { UserConfig } from '../urls/rbac-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./http.service";
import * as i2 from "./theme.service";
import * as i3 from "./local.service";
export class ProfileService {
    constructor(httpService, themeService, localstorage) {
        this.httpService = httpService;
        this.themeService = themeService;
        this.localstorage = localstorage;
        this.profileImage = new Subject();
    }
    setUserPreference() {
        const user_id = this.localstorage.getItem('id');
        if (user_id) {
            this.getUserPreference(user_id).subscribe((res) => {
                var _a;
                if (res.data && ((_a = res.data) === null || _a === void 0 ? void 0 : _a.config)) {
                    const configArray = JSON.parse(res.data.config);
                    this.setTheme(configArray.theme);
                    this.setFont(configArray.font);
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
        const selectedFont = FontSetList.filter(fontSet => fontSet.key === event)[0];
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
}
ProfileService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileService, deps: [{ token: i1.HttpService }, { token: i2.ThemeService }, { token: i3.LocalService }], target: i0.ɵɵFactoryTarget.Injectable });
ProfileService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpService }, { type: i2.ThemeService }, { type: i3.LocalService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2xvZ2luL3NyYy9saWIvcGljcy1sb2dpbi9AY29yZS9zZXJ2aWNlL3Byb2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBS3JELE1BQU0sT0FBTyxjQUFjO0lBRXpCLFlBQ1UsV0FBd0IsRUFDeEIsWUFBMEIsRUFDMUIsWUFBMEI7UUFGMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFKcEMsaUJBQVksR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUt4QyxDQUFDO0lBRUosaUJBQWlCO1FBQ2YsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7O2dCQUNyRCxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUksTUFBQSxHQUFHLENBQUMsSUFBSSwwQ0FBRSxNQUFNLENBQUEsRUFBRTtvQkFDaEMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2hDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFDRCxRQUFRLENBQUMsS0FBSztRQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25ELE1BQU0sYUFBYSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxPQUFPLENBQUMsS0FBSztRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsRCxNQUFNLFlBQVksR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsVUFBVSxDQUFDLEdBQVE7UUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGNBQWMsQ0FBQyxHQUFZO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBQ0QsaUJBQWlCLENBQUMsS0FBVTtRQUMxQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxFQUFFO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQVMsRUFBRSxNQUFjO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksTUFBTSxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoSCxDQUFDO0lBQ0Qsa0JBQWtCLENBQUMsSUFBSTtRQUNyQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs0R0FsRFUsY0FBYztnSEFBZCxjQUFjLGNBRmIsTUFBTTs0RkFFUCxjQUFjO2tCQUgxQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGhlbWVTZXJ2aWNlIH0gZnJvbSAnLi90aGVtZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9jYWxTZXJ2aWNlIH0gZnJvbSAnLi9sb2NhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9udFNldExpc3QsIHRoZW1lTGlzdCB9IGZyb20gJy4uL2NvbnN0YW50cy90aGVtZS1jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBVc2VyQ29uZmlnIH0gZnJvbSAnLi4vdXJscy9yYmFjLXVybC5jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZVNlcnZpY2Uge1xyXG4gIHByb2ZpbGVJbWFnZTogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0aGVtZVNlcnZpY2U6IFRoZW1lU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9jYWxzdG9yYWdlOiBMb2NhbFNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIHNldFVzZXJQcmVmZXJlbmNlKCkge1xyXG4gICAgY29uc3QgdXNlcl9pZCA9IHRoaXMubG9jYWxzdG9yYWdlLmdldEl0ZW0oJ2lkJyk7XHJcbiAgICBpZiAodXNlcl9pZCkge1xyXG4gICAgICB0aGlzLmdldFVzZXJQcmVmZXJlbmNlKHVzZXJfaWQpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAocmVzLmRhdGEgJiYgcmVzLmRhdGE/LmNvbmZpZykge1xyXG4gICAgICAgICAgY29uc3QgY29uZmlnQXJyYXkgPSBKU09OLnBhcnNlKHJlcy5kYXRhLmNvbmZpZyk7XHJcbiAgICAgICAgICB0aGlzLnNldFRoZW1lKGNvbmZpZ0FycmF5LnRoZW1lKTtcclxuICAgICAgICAgIHRoaXMuc2V0Rm9udChjb25maWdBcnJheS5mb250KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZXRUaGVtZShldmVudCkge1xyXG4gICAgdGhpcy5sb2NhbHN0b3JhZ2Uuc2V0SXRlbSgnU0VMRUNURURfVEhFTUUnLCBldmVudCk7XHJcbiAgICBjb25zdCBzZWxlY3RlZFRoZW1lID0gdGhlbWVMaXN0LmZpbHRlcih0aGVtZSA9PiB0aGVtZS5rZXkgPT09IGV2ZW50KVswXTtcclxuICAgIHRoaXMudGhlbWVTZXJ2aWNlLnNldEFjdGl2ZVRoZW1lKHNlbGVjdGVkVGhlbWUpO1xyXG4gICAgY29uc29sZS5sb2coJ1NlbGVjdGVkIFRoZW1lOicsIHNlbGVjdGVkVGhlbWUua2V5KTtcclxuICB9XHJcbiAgc2V0Rm9udChldmVudCkge1xyXG4gICAgdGhpcy5sb2NhbHN0b3JhZ2Uuc2V0SXRlbSgnU0VMRUNURURfRk9OVCcsIGV2ZW50KTtcclxuICAgIGNvbnN0IHNlbGVjdGVkRm9udCA9IEZvbnRTZXRMaXN0LmZpbHRlcihmb250U2V0ID0+IGZvbnRTZXQua2V5ID09PSBldmVudClbMF07XHJcbiAgICB0aGlzLnRoZW1lU2VydmljZS5zZXRBY3RpdmVGb250KHNlbGVjdGVkRm9udCk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9maWxlKGltZzogYW55KSB7XHJcbiAgICB0aGlzLnByb2ZpbGVJbWFnZS5uZXh0KGltZyk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxVc2VyTGlzdChrZXk/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KGAke1VzZXJDb25maWcuRW5kUG9pbnQuVXNlci5nZXRBbGxVc2VyTGlzdH0vJHtrZXl9YCk7XHJcbiAgfVxyXG4gIGdldEFsbFVzZXJPcmdMaXN0KG9yZ2lkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChVc2VyQ29uZmlnLkVuZFBvaW50LlVzZXIuZ2V0QWxsVXNlck9yZ0xpc3QgKyBvcmdpZCk7XHJcbiAgfVxyXG4gIGdldFVzZXJQcmVmZXJlbmNlKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoVXNlckNvbmZpZy5FbmRQb2ludC5Vc2VyLmdldFVzZXJDb25maWcucmVwbGFjZSgne2lkfScsIGlkKSk7XHJcbiAgfVxyXG4gIHVwZGF0ZVVzZXIoZGF0YTogYW55LCB1c2VyaWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucGF0Y2goYCR7VXNlckNvbmZpZy5FbmRQb2ludC5Vc2VyLmdldEFsbFVzZXJMaXN0fS8ke3VzZXJpZH0vdXBkYXRlVXNlckRldGFpbHNgLCBkYXRhKTtcclxuICB9XHJcbiAgc2F2ZVVzZXJQcmVmZXJlbmNlKGRhdGEpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoVXNlckNvbmZpZy5FbmRQb2ludC5Vc2VyLnNhdmVVc2VyQ29uZmlnLCBkYXRhKTtcclxuICB9XHJcbn1cclxuIl19