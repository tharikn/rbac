import { DataStoreService } from './data-store.service';
import * as i0 from "@angular/core";
export declare class ConfigurationSettingsService {
    private _storeservice;
    httpService: any;
    constructor(_storeservice: DataStoreService);
    getUserList(orgid: any): any;
    saveConfigSettings(modal: any): any;
    getConfigList(): any;
    getConfigById(id: any): any;
    deleteConfig(id: any): any;
    updateConfig(id: any, modal: any): any;
    getAllUserRole(id?: any): any;
    getEmailTemplateNewList(): any;
    getAllOrganizations(): any;
    uploadKey(objparams: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfigurationSettingsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConfigurationSettingsService>;
}
