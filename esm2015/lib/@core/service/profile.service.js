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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2NvbmZpZy1sb2dpbi1zZXR0aW5ncy9zcmMvbGliL0Bjb3JlL3NlcnZpY2UvcHJvZmlsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUkzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7QUFLckQsTUFBTSxPQUFPLGNBQWM7SUFFekIsWUFDVSxXQUF3QixFQUN4QixZQUEwQixFQUMxQixZQUEwQjtRQUYxQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUpwQyxpQkFBWSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBS3hDLENBQUM7SUFFSixpQkFBaUI7UUFDZixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTs7Z0JBQ3JELElBQUksR0FBRyxDQUFDLElBQUksS0FBSSxNQUFBLEdBQUcsQ0FBQyxJQUFJLDBDQUFFLE1BQU0sQ0FBQSxFQUFFO29CQUNoQyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDaEM7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUNELFFBQVEsQ0FBQyxLQUFLO1FBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkQsTUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNELE9BQU8sQ0FBQyxLQUFLO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xELE1BQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxVQUFVLENBQUMsR0FBUTtRQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsY0FBYyxDQUFDLEdBQVk7UUFDekIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxLQUFVO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUNELGlCQUFpQixDQUFDLEVBQUU7UUFDbEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFDRCxVQUFVLENBQUMsSUFBUyxFQUFFLE1BQWM7UUFDbEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxNQUFNLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hILENBQUM7SUFDRCxrQkFBa0IsQ0FBQyxJQUFJO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlFLENBQUM7OzRHQWxEVSxjQUFjO2dIQUFkLGNBQWMsY0FGYixNQUFNOzRGQUVQLGNBQWM7a0JBSDFCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi9odHRwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUaGVtZVNlcnZpY2UgfSBmcm9tICcuL3RoZW1lLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2NhbFNlcnZpY2UgfSBmcm9tICcuL2xvY2FsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGb250U2V0TGlzdCwgdGhlbWVMaXN0IH0gZnJvbSAnLi4vY29uc3RhbnRzL3RoZW1lLWNvbnN0YW50cyc7XHJcbmltcG9ydCB7IFVzZXJDb25maWcgfSBmcm9tICcuLi91cmxzL3JiYWMtdXJsLmNvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlU2VydmljZSB7XHJcbiAgcHJvZmlsZUltYWdlOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwU2VydmljZTogSHR0cFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHRoZW1lU2VydmljZTogVGhlbWVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2NhbHN0b3JhZ2U6IExvY2FsU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgc2V0VXNlclByZWZlcmVuY2UoKSB7XHJcbiAgICBjb25zdCB1c2VyX2lkID0gdGhpcy5sb2NhbHN0b3JhZ2UuZ2V0SXRlbSgnaWQnKTtcclxuICAgIGlmICh1c2VyX2lkKSB7XHJcbiAgICAgIHRoaXMuZ2V0VXNlclByZWZlcmVuY2UodXNlcl9pZCkuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuZGF0YSAmJiByZXMuZGF0YT8uY29uZmlnKSB7XHJcbiAgICAgICAgICBjb25zdCBjb25maWdBcnJheSA9IEpTT04ucGFyc2UocmVzLmRhdGEuY29uZmlnKTtcclxuICAgICAgICAgIHRoaXMuc2V0VGhlbWUoY29uZmlnQXJyYXkudGhlbWUpO1xyXG4gICAgICAgICAgdGhpcy5zZXRGb250KGNvbmZpZ0FycmF5LmZvbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldFRoZW1lKGV2ZW50KSB7XHJcbiAgICB0aGlzLmxvY2Fsc3RvcmFnZS5zZXRJdGVtKCdTRUxFQ1RFRF9USEVNRScsIGV2ZW50KTtcclxuICAgIGNvbnN0IHNlbGVjdGVkVGhlbWUgPSB0aGVtZUxpc3QuZmlsdGVyKHRoZW1lID0+IHRoZW1lLmtleSA9PT0gZXZlbnQpWzBdO1xyXG4gICAgdGhpcy50aGVtZVNlcnZpY2Uuc2V0QWN0aXZlVGhlbWUoc2VsZWN0ZWRUaGVtZSk7XHJcbiAgICBjb25zb2xlLmxvZygnU2VsZWN0ZWQgVGhlbWU6Jywgc2VsZWN0ZWRUaGVtZS5rZXkpO1xyXG4gIH1cclxuICBzZXRGb250KGV2ZW50KSB7XHJcbiAgICB0aGlzLmxvY2Fsc3RvcmFnZS5zZXRJdGVtKCdTRUxFQ1RFRF9GT05UJywgZXZlbnQpO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRGb250ID0gRm9udFNldExpc3QuZmlsdGVyKGZvbnRTZXQgPT4gZm9udFNldC5rZXkgPT09IGV2ZW50KVswXTtcclxuICAgIHRoaXMudGhlbWVTZXJ2aWNlLnNldEFjdGl2ZUZvbnQoc2VsZWN0ZWRGb250KTtcclxuICB9XHJcblxyXG4gIGdldFByb2ZpbGUoaW1nOiBhbnkpIHtcclxuICAgIHRoaXMucHJvZmlsZUltYWdlLm5leHQoaW1nKTtcclxuICB9XHJcblxyXG4gIGdldEFsbFVzZXJMaXN0KGtleT86IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoYCR7VXNlckNvbmZpZy5FbmRQb2ludC5Vc2VyLmdldEFsbFVzZXJMaXN0fS8ke2tleX1gKTtcclxuICB9XHJcbiAgZ2V0QWxsVXNlck9yZ0xpc3Qob3JnaWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KFVzZXJDb25maWcuRW5kUG9pbnQuVXNlci5nZXRBbGxVc2VyT3JnTGlzdCArIG9yZ2lkKTtcclxuICB9XHJcbiAgZ2V0VXNlclByZWZlcmVuY2UoaWQpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChVc2VyQ29uZmlnLkVuZFBvaW50LlVzZXIuZ2V0VXNlckNvbmZpZy5yZXBsYWNlKCd7aWR9JywgaWQpKTtcclxuICB9XHJcbiAgdXBkYXRlVXNlcihkYXRhOiBhbnksIHVzZXJpZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wYXRjaChgJHtVc2VyQ29uZmlnLkVuZFBvaW50LlVzZXIuZ2V0QWxsVXNlckxpc3R9LyR7dXNlcmlkfS91cGRhdGVVc2VyRGV0YWlsc2AsIGRhdGEpO1xyXG4gIH1cclxuICBzYXZlVXNlclByZWZlcmVuY2UoZGF0YSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChVc2VyQ29uZmlnLkVuZFBvaW50LlVzZXIuc2F2ZVVzZXJDb25maWcsIGRhdGEpO1xyXG4gIH1cclxufVxyXG4iXX0=