import { Observable } from 'rxjs';
import { DataStoreService } from './data-store.service';
import * as i0 from "@angular/core";
export declare class UserOrgService {
    private _storeservice;
    httpService: any;
    constructor(_storeservice: DataStoreService);
    getAllUserList(key?: string): Observable<any>;
    getAllUserOrgList(orgid: any): any;
    saveUser(data: any): any;
    updateUser(data: any, userid: string): any;
    deleteUser(id?: string): any;
    activateUser(data: any): any;
    addProviderUser(data: any): any;
    addUserRole(data: any): any;
    uploadKey(objparams: any): any;
    getOrgPolicyGroupList(orgid: any): any;
    getAllUserRole(id?: any): any;
    getRoleById(roleid: string): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserOrgService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserOrgService>;
}
