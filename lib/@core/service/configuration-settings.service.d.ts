import { HttpService } from './http.service';
import * as i0 from "@angular/core";
export declare class ConfigurationSettingsService {
    private httpService;
    constructor(httpService: HttpService);
    getUserList(orgid: any): import("rxjs").Observable<Object>;
    saveConfigSettings(modal: any): import("rxjs").Observable<Object>;
    getConfigList(): import("rxjs").Observable<Object>;
    getConfigById(id: any): import("rxjs").Observable<Object>;
    deleteConfig(id: any): import("rxjs").Observable<Object>;
    updateConfig(id: any, modal: any): import("rxjs").Observable<Object>;
    getAllUserRole(id?: any): import("rxjs").Observable<Object>;
    getEmailTemplateNewList(): import("rxjs").Observable<Object>;
    getAllOrganizations(): import("rxjs").Observable<Object>;
    uploadKey(objparams: any): import("rxjs").Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfigurationSettingsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConfigurationSettingsService>;
}
