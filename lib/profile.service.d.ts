import { Observable, Subject } from 'rxjs';
import { ThemeService } from './pics-profile/@core/service/theme.service';
import { LocalService } from './pics-profile/@core/service/local.service';
import { DataStoreService } from './pics-profile/@core/service/data-store.service';
import * as i0 from "@angular/core";
export declare class ProfileService {
    private _storeservice;
    private themeService;
    private localstorage;
    profileImage: Subject<any>;
    httpService: any;
    constructor(_storeservice: DataStoreService, themeService: ThemeService, localstorage: LocalService);
    setUserPreference(): void;
    setTheme(event: any): void;
    setFont(event: any): void;
    setRangeFont(event: any): void;
    getProfile(img: any): void;
    getAllUserList(key?: string): Observable<any>;
    getAllUserOrgList(orgid: any): any;
    getUserPreference(id: any): any;
    updateUser(data: any, userid: string): any;
    saveUserPreference(data: any): any;
    getCategoryLookup(name: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProfileService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProfileService>;
}
