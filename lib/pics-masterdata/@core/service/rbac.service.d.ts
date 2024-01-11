import { TreeNode } from 'primeng/api';
import { Observable } from 'rxjs';
import { DataStoreService } from './data-store.service';
import * as i0 from "@angular/core";
export declare class RbacService {
    private storeService;
    httpService: any;
    constructor(storeService: DataStoreService);
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
    getAllPolicyGroupList(policyGroupId?: number): any;
    getPolicyGroupById(id: any): any;
    getPolicyGroupsByManagementGroup(policyGroupId: number): any;
    createPolicyGroup(data: any): any;
    updatePolicyGroup(id: number, item: any): any;
    deletePolicyGroup(id: string): any;
    getAllUserRole(id?: any): any;
    deleteRole(id: string): any;
    getRoleById(roleid: string): any;
    createRole(data: any): any;
    updateRole(roleId: any, data: any): any;
    getLandingPage(id: any): any;
    createPolicyGroupForRole(roleId: number, data: any): any;
    updatePolicyGroupForRole(roleId: number, data: any): any;
    getReportDashbaord(): any;
    getPermissionRoleById(id: string): any;
    getManagementGroupTree(_organizationid: any): any;
    getPermissionsTree(applicationid: any): any;
    getPagePermission(data: any): any;
    createPage(page: any): any;
    updatePage(page: any): any;
    deletePage(pageId: any): any;
    getPermission(id: any): any;
    createPermission(permission: any): any;
    updatePermission(permission: any): any;
    deletePermission(permissionId: any): any;
    getAllPageTree(applicationid: any): Observable<TreeNode[]>;
    getPermissionTree(pageid: any, parentid: any): any;
    getPermissionTypes(applicationid: any): any;
    getOrganizationPage(orgId: any): any;
    createCategory(category: any): any;
    updateCategory(category: any): any;
    deleteCategory(categoryId: any): any;
    getLookup(id: any): any;
    createLookup(lookup: any): any;
    updateLookup(lookup: any): any;
    deleteLookup(lookupId: any): any;
    getAllCategoryTree(applicationid: any): Observable<TreeNode[]>;
    getLookupTree(categoryid: any): any;
    getLookupBycategoryID(categoryid: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<RbacService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RbacService>;
}
