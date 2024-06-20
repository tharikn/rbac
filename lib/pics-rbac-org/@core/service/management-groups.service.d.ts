import { DataStoreService } from './data-store.service';
import * as i0 from "@angular/core";
export declare class ManagementGroupsService {
    private _storeservice;
    httpService: any;
    constructor(_storeservice: DataStoreService);
    getOrganizations(organizationid: any): any;
    createOrganization(organization: any): any;
    updateOrganization(organization: any): any;
    deleteOrganization(organizationid: number): any;
    getManagementGroups(organizationid: number, parentid: number): any;
    getManagementGroupTree(_organizationid: any): any;
    createManagementGroup(managementGroup: any): any;
    updateManagementGroup(managementGroup: any): any;
    deleteManagementGroup(managementGroupId: number): any;
    getAllOrganizations(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ManagementGroupsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ManagementGroupsService>;
}
