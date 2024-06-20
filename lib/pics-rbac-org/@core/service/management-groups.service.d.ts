import { HttpService } from './http.service';
import * as i0 from "@angular/core";
export declare class ManagementGroupsService {
    private httpService;
    constructor(httpService: HttpService);
    getOrganizations(organizationid: any): import("rxjs").Observable<Object>;
    createOrganization(organization: any): import("rxjs").Observable<Object>;
    updateOrganization(organization: any): import("rxjs").Observable<Object>;
    deleteOrganization(organizationid: number): import("rxjs").Observable<Object>;
    getManagementGroups(organizationid: number, parentid: number): import("rxjs").Observable<Object>;
    getManagementGroupTree(_organizationid: any): import("rxjs").Observable<Object>;
    createManagementGroup(managementGroup: any): import("rxjs").Observable<Object>;
    updateManagementGroup(managementGroup: any): import("rxjs").Observable<Object>;
    deleteManagementGroup(managementGroupId: number): import("rxjs").Observable<Object>;
    getAllOrganizations(): import("rxjs").Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ManagementGroupsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ManagementGroupsService>;
}
