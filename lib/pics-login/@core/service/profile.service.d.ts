import { Observable, Subject } from 'rxjs';
import { HttpService } from './http.service';
import { ThemeService } from './theme.service';
import { LocalService } from './local.service';
import * as i0 from "@angular/core";
export declare class ProfileService {
    private httpService;
    private themeService;
    private localstorage;
    profileImage: Subject<any>;
    constructor(httpService: HttpService, themeService: ThemeService, localstorage: LocalService);
    setUserPreference(): void;
    setTheme(event: any): void;
    setFont(event: any): void;
    getProfile(img: any): void;
    getAllUserList(key?: string): Observable<any>;
    getAllUserOrgList(orgid: any): Observable<Object>;
    getUserPreference(id: any): Observable<Object>;
    updateUser(data: any, userid: string): Observable<Object>;
    saveUserPreference(data: any): Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProfileService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProfileService>;
}
