import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { fontRangeSetList, fontSetList, themeList } from './pics-profile/@core/constants/theme-constants';
import { UserConfig, MasterURL } from './pics-profile/@core/urls/rbac-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./pics-profile/@core/service/data-store.service";
import * as i2 from "./pics-profile/@core/service/theme.service";
import * as i3 from "./pics-profile/@core/service/local.service";
export class ProfileService {
    _storeservice;
    themeService;
    localstorage;
    profileImage = new Subject();
    httpService;
    constructor(_storeservice, themeService, localstorage) {
        this._storeservice = _storeservice;
        this.themeService = themeService;
        this.localstorage = localstorage;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileService, deps: [{ token: i1.DataStoreService }, { token: i2.ThemeService }, { token: i3.LocalService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.DataStoreService }, { type: i2.ThemeService }, { type: i3.LocalService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3Byb2ZpbGUvc3JjL2xpYi9wcm9maWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDMUcsT0FBTyxFQUFFLFVBQVUsRUFBQyxTQUFTLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7QUFNakYsTUFBTSxPQUFPLGNBQWM7SUFHTDtJQUNWO0lBQ0E7SUFKVixZQUFZLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7SUFDM0MsV0FBVyxDQUFLO0lBQ2hCLFlBQW9CLGFBQStCLEVBQ3pDLFlBQTBCLEVBQzFCLFlBQTBCO1FBRmhCLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUN6QyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNyRCxJQUFHLEdBQUcsRUFBQztnQkFDTCxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTthQUN0QztRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdELGlCQUFpQjtRQUNmLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FB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QUssQ0FBQyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxNQUFNLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hILENBQUM7SUFDRCxrQkFBa0IsQ0FBQyxJQUFTO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxJQUFJO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3pGLENBQUM7d0dBakVVLGNBQWM7NEdBQWQsY0FBYyxjQUZiLE1BQU07OzRGQUVQLGNBQWM7a0JBSDFCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFRoZW1lU2VydmljZSB9IGZyb20gJy4vcGljcy1wcm9maWxlL0Bjb3JlL3NlcnZpY2UvdGhlbWUuc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2FsU2VydmljZSB9IGZyb20gJy4vcGljcy1wcm9maWxlL0Bjb3JlL3NlcnZpY2UvbG9jYWwuc2VydmljZSc7XHJcbmltcG9ydCB7IGZvbnRSYW5nZVNldExpc3QsIGZvbnRTZXRMaXN0LCB0aGVtZUxpc3QgfSBmcm9tICcuL3BpY3MtcHJvZmlsZS9AY29yZS9jb25zdGFudHMvdGhlbWUtY29uc3RhbnRzJztcclxuaW1wb3J0IHsgVXNlckNvbmZpZyxNYXN0ZXJVUkwgfSBmcm9tICcuL3BpY3MtcHJvZmlsZS9AY29yZS91cmxzL3JiYWMtdXJsLmNvbmZpZyc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuL3BpY3MtcHJvZmlsZS9AY29yZS9zZXJ2aWNlL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlU2VydmljZSB7XHJcbiAgcHJvZmlsZUltYWdlOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIGh0dHBTZXJ2aWNlOmFueTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdG9yZXNlcnZpY2U6IERhdGFTdG9yZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHRoZW1lU2VydmljZTogVGhlbWVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2NhbHN0b3JhZ2U6IExvY2FsU2VydmljZSkge1xyXG4gICAgdGhpcy5fc3RvcmVzZXJ2aWNlLmN1cnJlbnRTdG9yZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgdGhpcy5odHRwU2VydmljZSA9IHJlc1snSFRUUFNFUlZJQ0UnXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIHNldFVzZXJQcmVmZXJlbmNlKCkge1xyXG4gICAgY29uc3QgdXNlcl9pZCA9IHRoaXMubG9jYWxzdG9yYWdlLmdldEl0ZW0oJ2lkJyk7XHJcbiAgICBpZiAodXNlcl9pZCkge1xyXG4gICAgICB0aGlzLmdldFVzZXJQcmVmZXJlbmNlKHVzZXJfaWQpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAocmVzLmRhdGEgJiYgcmVzLmRhdGE/LmNvbmZpZykge1xyXG4gICAgICAgICAgY29uc3QgY29uZmlnQXJyYXkgPSBKU09OLnBhcnNlKHJlcy5kYXRhLmNvbmZpZyk7XHJcbiAgICAgICAgICB0aGlzLnNldFRoZW1lKGNvbmZpZ0FycmF5LnRoZW1lKTtcclxuICAgICAgICAgIGNvbnN0IGZvbnQgPSBjb25maWdBcnJheS5mb250ID8gY29uZmlnQXJyYXkuZm9udC50b1N0cmluZygpOiAnMTMnO1xyXG4gICAgICAgICAgdGhpcy5zZXRSYW5nZUZvbnQoZm9udCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgc2V0VGhlbWUoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5sb2NhbHN0b3JhZ2Uuc2V0SXRlbSgnU0VMRUNURURfVEhFTUUnLCBldmVudCk7XHJcbiAgICBjb25zdCBzZWxlY3RlZFRoZW1lID0gdGhlbWVMaXN0LmZpbHRlcih0aGVtZSA9PiB0aGVtZS5rZXkgPT09IGV2ZW50KVswXTtcclxuICAgIHRoaXMudGhlbWVTZXJ2aWNlLnNldEFjdGl2ZVRoZW1lKHNlbGVjdGVkVGhlbWUpO1xyXG4gICAgY29uc29sZS5sb2coJ1NlbGVjdGVkIFRoZW1lOicsIHNlbGVjdGVkVGhlbWUua2V5KTtcclxuICB9XHJcbiAgc2V0Rm9udChldmVudDogYW55KSB7XHJcbiAgICB0aGlzLmxvY2Fsc3RvcmFnZS5zZXRJdGVtKCdTRUxFQ1RFRF9GT05UJywgZXZlbnQpO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRGb250ID0gZm9udFNldExpc3QuZmlsdGVyKGZvbnRTZXQgPT4gZm9udFNldC5rZXkgPT09IGV2ZW50KVswXTtcclxuICAgIHRoaXMudGhlbWVTZXJ2aWNlLnNldEFjdGl2ZUZvbnQoc2VsZWN0ZWRGb250KTtcclxuICB9XHJcbiAgc2V0UmFuZ2VGb250KGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMubG9jYWxzdG9yYWdlLnNldEl0ZW0oJ1NFTEVDVEVEX0ZPTlQnLCBldmVudCk7XHJcbiAgICBjb25zdCBzZWxlY3RlZEZvbnQgPSBmb250UmFuZ2VTZXRMaXN0LmZpbHRlcihmb250U2V0ID0+IGZvbnRTZXQua2V5ID09PSBldmVudClbMF07XHJcbiAgICB0aGlzLnRoZW1lU2VydmljZS5zZXRBY3RpdmVGb250KHNlbGVjdGVkRm9udCk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9maWxlKGltZzogYW55KSB7XHJcbiAgICB0aGlzLnByb2ZpbGVJbWFnZS5uZXh0KGltZyk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxVc2VyTGlzdChrZXk/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KGAke1VzZXJDb25maWcuRW5kUG9pbnQuVXNlci5nZXRBbGxVc2VyTGlzdH0vJHtrZXl9YCk7XHJcbiAgfVxyXG4gIGdldEFsbFVzZXJPcmdMaXN0KG9yZ2lkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChVc2VyQ29uZmlnLkVuZFBvaW50LlVzZXIuZ2V0QWxsVXNlck9yZ0xpc3QgKyBvcmdpZCk7XHJcbiAgfVxyXG4gIGdldFVzZXJQcmVmZXJlbmNlKGlkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChVc2VyQ29uZmlnLkVuZFBvaW50LlVzZXIuZ2V0VXNlckNvbmZpZy5yZXBsYWNlKCd7aWR9JywgaWQpKTtcclxuICB9XHJcbiAgdXBkYXRlVXNlcihkYXRhOiBhbnksIHVzZXJpZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wYXRjaChgJHtVc2VyQ29uZmlnLkVuZFBvaW50LlVzZXIuZ2V0QWxsVXNlckxpc3R9LyR7dXNlcmlkfS91cGRhdGVVc2VyRGV0YWlsc2AsIGRhdGEpO1xyXG4gIH1cclxuICBzYXZlVXNlclByZWZlcmVuY2UoZGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KFVzZXJDb25maWcuRW5kUG9pbnQuVXNlci5zYXZlVXNlckNvbmZpZywgZGF0YSk7XHJcbiAgfVxyXG4gIGdldENhdGVnb3J5TG9va3VwKG5hbWUpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChNYXN0ZXJVUkwuRW5kUG9pbnRzLmxvb2t1cC5HZXRDYXRlZ29yeUxvb2t1cCArICcvJyArIG5hbWUpO1xyXG4gIH1cclxufVxyXG4iXX0=