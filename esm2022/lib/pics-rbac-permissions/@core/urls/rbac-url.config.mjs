export class RoleConfig {
    static EndPoint = {
        role: {
            getAllUserRole: '/access-control/role',
            createRole: '/access-control/role/create',
            getLandingPage: '/platform/menu/application',
            addPolicyGroup: '/access-control/role',
            getAllOrgRole: '/access-control/role/organization/{orgid}',
            dossier: '/dossier'
        }
    };
}
export class UserConfig {
    static EndPoint = {
        User: {
            getAllUserList: '/org/user',
            getAllUserActiveInactive: '/org/user?includeInactiveUsers=true',
            activateUser: '/org/user/activate',
            createUser: '/org/user/create',
            userRole: '/org/user/role',
            managementgroup: '/org/team/managementgroup',
            getAllUserOrgList: '/org/user/organization/'
        },
        Provider: {
            getProviderList: '/ref/provider',
            searchProviderList: '/ref/provider/search',
            addProviderUser: '/ref/provider/create/account'
        }
    };
}
export class AttachmentConfig {
    static EndPoint = {
        Attachments: {
            GetAttachmentReferral: '/ref/attachment/referral',
            GetCategoryLookup: '/platform/master/lookup/lookupbycategoryname',
            UploadKey: '/common/files/upload-key',
            DownloadKey: '/common/files/download-key',
            PostAttachment: '/ref/attachment/create',
            PutAttachment: '/ref/attachment'
        }
    };
}
export class PolicyGroupConfig {
    static EndPoint = {
        policyGroup: {
            getPolicyGroupList: '/platform/page-designer/policyGroup',
            getAllPolicyGroupList: '/platform/page-designer/policyGroup/all',
            createPolicyGroup: '/platform/page-designer/policyGroup',
            getOrgPolicyGroups: '/platform/page-designer/policyGroup/organization/{organizationid}'
        }
    };
}
export class PermissionsURL {
    static EndPoints = {
        permission: {
            permissionRoleById: '/access-control/permission/role/{id}',
            pagePermission: '/access-control/permission/page',
            getPermission: '/access-control/permission/{id}',
            createPermission: '/access-control/permission/create',
            updateDeletePermission: '/access-control/permission/{permissionid}',
            getPermissionTree: '/access-control/permission/page/{pageid}/{parentid}',
            getPermissionTypes: '/access-control/permission/type/{applicationid}',
            applicationPermissionsTree: '/access-control/permission/application/{applicationid}'
        },
        page: {
            createPage: '/platform/menu/create',
            updateDeletePage: '/platform/menu/{pageid}',
            AllPageTree: '/platform/menu/tree/{applicationid}'
        }
    };
}
export class AccessManagementConfig {
    static EndPoint = {
        Organization: {
            getOrganizationList: '/org/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true',
            getPlatformPage: '/platform/menu/getPlatformPage'
        }
    };
}
export class RBACINFO {
    apiHost = '';
    tokenKey = '';
    others;
    orgID;
    environment;
}
export class Environment {
    mstrUsername;
    mstrPassword;
    mstrURL;
    mstrProjectID;
    applicationid;
    priority;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3JiYWMtcGVybWlzc2lvbnMvc3JjL2xpYi9waWNzLXJiYWMtcGVybWlzc2lvbnMvQGNvcmUvdXJscy9yYmFjLXVybC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLFVBQVU7SUFDZCxNQUFNLENBQUMsUUFBUSxHQUFHO1FBQ3ZCLElBQUksRUFBRTtZQUNKLGNBQWMsRUFBRSxzQkFBc0I7WUFDdEMsVUFBVSxFQUFFLDZCQUE2QjtZQUN6QyxjQUFjLEVBQUUsNEJBQTRCO1lBQzVDLGNBQWMsRUFBRSxzQkFBc0I7WUFDdEMsYUFBYSxFQUFFLDJDQUEyQztZQUMxRCxPQUFPLEVBQUUsVUFBVTtTQUNwQjtLQUNGLENBQUM7O0FBR0osTUFBTSxPQUFPLFVBQVU7SUFDZCxNQUFNLENBQUMsUUFBUSxHQUFHO1FBQ3ZCLElBQUksRUFBRTtZQUNKLGNBQWMsRUFBRSxXQUFXO1lBQzNCLHdCQUF3QixFQUFFLHFDQUFxQztZQUMvRCxZQUFZLEVBQUUsb0JBQW9CO1lBQ2xDLFVBQVUsRUFBRSxrQkFBa0I7WUFDOUIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixlQUFlLEVBQUUsMkJBQTJCO1lBQzVDLGlCQUFpQixFQUFFLHlCQUF5QjtTQUM3QztRQUNELFFBQVEsRUFBRTtZQUNSLGVBQWUsRUFBRSxlQUFlO1lBQ2hDLGtCQUFrQixFQUFFLHNCQUFzQjtZQUMxQyxlQUFlLEVBQUUsOEJBQThCO1NBQ2hEO0tBQ0YsQ0FBQzs7QUFFSixNQUFNLE9BQU8sZ0JBQWdCO0lBQ3BCLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDdkIsV0FBVyxFQUFFO1lBQ1gscUJBQXFCLEVBQUUsMEJBQTBCO1lBQ2pELGlCQUFpQixFQUFFLDhDQUE4QztZQUNqRSxTQUFTLEVBQUUsMEJBQTBCO1lBQ3JDLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsY0FBYyxFQUFFLHdCQUF3QjtZQUN4QyxhQUFhLEVBQUUsaUJBQWlCO1NBQ2pDO0tBQ0YsQ0FBQzs7QUFFSixNQUFNLE9BQU8saUJBQWlCO0lBQ3JCLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDdkIsV0FBVyxFQUFFO1lBQ1gsa0JBQWtCLEVBQUUscUNBQXFDO1lBQ3pELHFCQUFxQixFQUFFLHlDQUF5QztZQUNoRSxpQkFBaUIsRUFBRSxxQ0FBcUM7WUFDeEQsa0JBQWtCLEVBQUUsbUVBQW1FO1NBQ3hGO0tBQ0YsQ0FBQzs7QUFFSixNQUFNLE9BQU8sY0FBYztJQUNsQixNQUFNLENBQUMsU0FBUyxHQUFHO1FBQ3hCLFVBQVUsRUFBRTtZQUNWLGtCQUFrQixFQUFFLHNDQUFzQztZQUMxRCxjQUFjLEVBQUUsaUNBQWlDO1lBQ2pELGFBQWEsRUFBRSxpQ0FBaUM7WUFDaEQsZ0JBQWdCLEVBQUUsbUNBQW1DO1lBQ3JELHNCQUFzQixFQUFFLDJDQUEyQztZQUNuRSxpQkFBaUIsRUFBRSxxREFBcUQ7WUFDeEUsa0JBQWtCLEVBQUUsaURBQWlEO1lBQ3JFLDBCQUEwQixFQUFFLHdEQUF3RDtTQUNyRjtRQUNELElBQUksRUFBRTtZQUNKLFVBQVUsRUFBRSx1QkFBdUI7WUFDbkMsZ0JBQWdCLEVBQUUseUJBQXlCO1lBQzNDLFdBQVcsRUFBRSxxQ0FBcUM7U0FDbkQ7S0FDRixDQUFDOztBQUVKLE1BQU0sT0FBTyxzQkFBc0I7SUFDMUIsTUFBTSxDQUFDLFFBQVEsR0FBRztRQUN2QixZQUFZLEVBQUU7WUFDWixtQkFBbUIsRUFBRSx1QkFBdUI7WUFDNUMsZUFBZSxFQUFFLHlHQUF5RztZQUMxSCxlQUFlLEVBQUUsZ0NBQWdDO1NBQ2xEO0tBQ0YsQ0FBQzs7QUFHSixNQUFNLE9BQU8sUUFBUTtJQUNuQixPQUFPLEdBQUUsRUFBRSxDQUFDO0lBQ1osUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNkLE1BQU0sQ0FBTztJQUNiLEtBQUssQ0FBTztJQUNaLFdBQVcsQ0FBZTtDQUMzQjtBQUNELE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFlBQVksQ0FBVTtJQUN0QixZQUFZLENBQVU7SUFDdEIsT0FBTyxDQUFVO0lBQ2pCLGFBQWEsQ0FBVTtJQUN2QixhQUFhLENBQVU7SUFDdkIsUUFBUSxDQUFTO0NBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFJvbGVDb25maWcge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnQgPSB7XHJcbiAgICByb2xlOiB7XHJcbiAgICAgIGdldEFsbFVzZXJSb2xlOiAnL2FjY2Vzcy1jb250cm9sL3JvbGUnLFxyXG4gICAgICBjcmVhdGVSb2xlOiAnL2FjY2Vzcy1jb250cm9sL3JvbGUvY3JlYXRlJyxcclxuICAgICAgZ2V0TGFuZGluZ1BhZ2U6ICcvcGxhdGZvcm0vbWVudS9hcHBsaWNhdGlvbicsXHJcbiAgICAgIGFkZFBvbGljeUdyb3VwOiAnL2FjY2Vzcy1jb250cm9sL3JvbGUnLFxyXG4gICAgICBnZXRBbGxPcmdSb2xlOiAnL2FjY2Vzcy1jb250cm9sL3JvbGUvb3JnYW5pemF0aW9uL3tvcmdpZH0nLFxyXG4gICAgICBkb3NzaWVyOiAnL2Rvc3NpZXInXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJDb25maWcge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnQgPSB7XHJcbiAgICBVc2VyOiB7XHJcbiAgICAgIGdldEFsbFVzZXJMaXN0OiAnL29yZy91c2VyJyxcclxuICAgICAgZ2V0QWxsVXNlckFjdGl2ZUluYWN0aXZlOiAnL29yZy91c2VyP2luY2x1ZGVJbmFjdGl2ZVVzZXJzPXRydWUnLFxyXG4gICAgICBhY3RpdmF0ZVVzZXI6ICcvb3JnL3VzZXIvYWN0aXZhdGUnLFxyXG4gICAgICBjcmVhdGVVc2VyOiAnL29yZy91c2VyL2NyZWF0ZScsXHJcbiAgICAgIHVzZXJSb2xlOiAnL29yZy91c2VyL3JvbGUnLFxyXG4gICAgICBtYW5hZ2VtZW50Z3JvdXA6ICcvb3JnL3RlYW0vbWFuYWdlbWVudGdyb3VwJyxcclxuICAgICAgZ2V0QWxsVXNlck9yZ0xpc3Q6ICcvb3JnL3VzZXIvb3JnYW5pemF0aW9uLydcclxuICAgIH0sXHJcbiAgICBQcm92aWRlcjoge1xyXG4gICAgICBnZXRQcm92aWRlckxpc3Q6ICcvcmVmL3Byb3ZpZGVyJyxcclxuICAgICAgc2VhcmNoUHJvdmlkZXJMaXN0OiAnL3JlZi9wcm92aWRlci9zZWFyY2gnLFxyXG4gICAgICBhZGRQcm92aWRlclVzZXI6ICcvcmVmL3Byb3ZpZGVyL2NyZWF0ZS9hY2NvdW50J1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGNsYXNzIEF0dGFjaG1lbnRDb25maWcge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnQgPSB7XHJcbiAgICBBdHRhY2htZW50czoge1xyXG4gICAgICBHZXRBdHRhY2htZW50UmVmZXJyYWw6ICcvcmVmL2F0dGFjaG1lbnQvcmVmZXJyYWwnLFxyXG4gICAgICBHZXRDYXRlZ29yeUxvb2t1cDogJy9wbGF0Zm9ybS9tYXN0ZXIvbG9va3VwL2xvb2t1cGJ5Y2F0ZWdvcnluYW1lJyxcclxuICAgICAgVXBsb2FkS2V5OiAnL2NvbW1vbi9maWxlcy91cGxvYWQta2V5JyxcclxuICAgICAgRG93bmxvYWRLZXk6ICcvY29tbW9uL2ZpbGVzL2Rvd25sb2FkLWtleScsXHJcbiAgICAgIFBvc3RBdHRhY2htZW50OiAnL3JlZi9hdHRhY2htZW50L2NyZWF0ZScsXHJcbiAgICAgIFB1dEF0dGFjaG1lbnQ6ICcvcmVmL2F0dGFjaG1lbnQnXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5leHBvcnQgY2xhc3MgUG9saWN5R3JvdXBDb25maWcge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnQgPSB7XHJcbiAgICBwb2xpY3lHcm91cDoge1xyXG4gICAgICBnZXRQb2xpY3lHcm91cExpc3Q6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wb2xpY3lHcm91cCcsXHJcbiAgICAgIGdldEFsbFBvbGljeUdyb3VwTGlzdDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BvbGljeUdyb3VwL2FsbCcsXHJcbiAgICAgIGNyZWF0ZVBvbGljeUdyb3VwOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5R3JvdXAnLFxyXG4gICAgICBnZXRPcmdQb2xpY3lHcm91cHM6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wb2xpY3lHcm91cC9vcmdhbml6YXRpb24ve29yZ2FuaXphdGlvbmlkfSdcclxuICAgIH1cclxuICB9O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uc1VSTCB7XHJcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludHMgPSB7XHJcbiAgICBwZXJtaXNzaW9uOiB7XHJcbiAgICAgIHBlcm1pc3Npb25Sb2xlQnlJZDogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3JvbGUve2lkfScsXHJcbiAgICAgIHBhZ2VQZXJtaXNzaW9uOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vcGFnZScsXHJcbiAgICAgIGdldFBlcm1pc3Npb246ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi97aWR9JyxcclxuICAgICAgY3JlYXRlUGVybWlzc2lvbjogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL2NyZWF0ZScsXHJcbiAgICAgIHVwZGF0ZURlbGV0ZVBlcm1pc3Npb246ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi97cGVybWlzc2lvbmlkfScsXHJcbiAgICAgIGdldFBlcm1pc3Npb25UcmVlOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vcGFnZS97cGFnZWlkfS97cGFyZW50aWR9JyxcclxuICAgICAgZ2V0UGVybWlzc2lvblR5cGVzOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vdHlwZS97YXBwbGljYXRpb25pZH0nLFxyXG4gICAgICBhcHBsaWNhdGlvblBlcm1pc3Npb25zVHJlZTogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL2FwcGxpY2F0aW9uL3thcHBsaWNhdGlvbmlkfSdcclxuICAgIH0sXHJcbiAgICBwYWdlOiB7XHJcbiAgICAgIGNyZWF0ZVBhZ2U6ICcvcGxhdGZvcm0vbWVudS9jcmVhdGUnLFxyXG4gICAgICB1cGRhdGVEZWxldGVQYWdlOiAnL3BsYXRmb3JtL21lbnUve3BhZ2VpZH0nLFxyXG4gICAgICBBbGxQYWdlVHJlZTogJy9wbGF0Zm9ybS9tZW51L3RyZWUve2FwcGxpY2F0aW9uaWR9J1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFjY2Vzc01hbmFnZW1lbnRDb25maWcge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnQgPSB7XHJcbiAgICBPcmdhbml6YXRpb246IHtcclxuICAgICAgZ2V0T3JnYW5pemF0aW9uTGlzdDogJy9vcmcvb3JnYW5pemF0aW9uL2FsbCcsXHJcbiAgICAgIGdldE9yZ2FuaXphdGlvbjogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BhZ2Uvb3JnYW5pemF0aW9uL3tvcmdJZH0/cmV0dXJuVXNlclBhZ2U9ZmFsc2UmZXhjbHVkZU5vQWN0aXZlVmVyc2lvblBhZ2VzPXRydWUnLFxyXG4gICAgICBnZXRQbGF0Zm9ybVBhZ2U6ICcvcGxhdGZvcm0vbWVudS9nZXRQbGF0Zm9ybVBhZ2UnXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJCQUNJTkZPIHtcclxuICBhcGlIb3N0ID0nJztcclxuICB0b2tlbktleSA9ICcnO1xyXG4gIG90aGVycz86IGFueTtcclxuICBvcmdJRD86IGFueTtcclxuICBlbnZpcm9ubWVudD86IEVudmlyb25tZW50O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XHJcbiAgbXN0clVzZXJuYW1lPzogc3RyaW5nO1xyXG4gIG1zdHJQYXNzd29yZD86IHN0cmluZztcclxuICBtc3RyVVJMPzogc3RyaW5nO1xyXG4gIG1zdHJQcm9qZWN0SUQ/OiBzdHJpbmc7XHJcbiAgYXBwbGljYXRpb25pZD86IHN0cmluZztcclxuICBwcmlvcml0eT86IHN0cmluZ1xyXG59XHJcblxyXG4iXX0=