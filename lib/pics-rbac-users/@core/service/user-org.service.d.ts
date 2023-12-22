import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import * as i0 from "@angular/core";
export declare class UserOrgService {
    private httpService;
    constructor(httpService: HttpService);
    getAllUserList(key?: string): Observable<any>;
    getAllUserOrgList(orgid: any): Observable<Object>;
    saveUser(data: any): Observable<Object>;
    updateUser(data: any, userid: string): Observable<Object>;
    deleteUser(id?: string): Observable<Object>;
    activateUser(data: any): Observable<Object>;
    addProviderUser(data: any): Observable<Object>;
    addUserRole(data: any): Observable<Object>;
    uploadKey(objparams: any): Observable<Object>;
    getOrgPolicyGroupList(orgid: any): Observable<Object>;
    getAllUserRole(id?: any): Observable<Object>;
    getRoleById(roleid: string): Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserOrgService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserOrgService>;
}
