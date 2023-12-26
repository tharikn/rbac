export class RoleConfig {
}
RoleConfig.EndPoint = {
    role: {
        getAllUserRole: '/access-control/role',
        createRole: '/access-control/role/create',
        getLandingPage: '/platform/menu/application',
        addPolicyGroup: '/access-control/role',
        getAllOrgRole: '/access-control/role/organization/{orgid}',
        dossier: '/dossier'
    }
};
export class UserConfig {
}
UserConfig.EndPoint = {
    User: {
        getAllUserList: '/org/user',
        getAllUserActiveInactive: '/org/user?includeInactiveUsers=true',
        getUserConfig: '/org/user/getUserPreference/USER_THEME_PREFERENCES/{id}',
        activateUser: '/org/user/activate',
        createUser: '/org/user/create',
        userRole: '/org/user/role',
        managementgroup: '/org/team/managementgroup',
        getAllUserOrgList: '/org/user/organization/',
        saveUserConfig: '/user/saveUserPreference'
    },
    Provider: {
        getProviderList: '/ref/provider',
        searchProviderList: '/ref/provider/search',
        addProviderUser: '/ref/provider/create/account'
    }
};
export class AttachmentConfig {
}
AttachmentConfig.EndPoint = {
    Attachments: {
        GetAttachmentReferral: '/ref/attachment/referral',
        GetCategoryLookup: '/platform/master/lookup/lookupbycategoryname',
        UploadKey: '/common/files/upload-key',
        DownloadKey: '/common/files/download-key',
        PostAttachment: '/ref/attachment/create',
        PutAttachment: '/ref/attachment'
    }
};
export class PolicyGroupConfig {
}
PolicyGroupConfig.EndPoint = {
    policyGroup: {
        getPolicyGroupList: '/platform/page-designer/policyGroup',
        getAllPolicyGroupList: '/platform/page-designer/policyGroup/all',
        createPolicyGroup: '/platform/page-designer/policyGroup',
        getOrgPolicyGroups: '/platform/page-designer/policyGroup/organization/{organizationid}'
    }
};
export class PermissionsURL {
}
PermissionsURL.EndPoints = {
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
export class AccessManagementConfig {
}
AccessManagementConfig.EndPoint = {
    Organization: {
        getOrganizationList: '/org/organization/all',
        getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
    }
};
export class MasterURL {
}
MasterURL.EndPoints = {
    lookup: {
        createCategory: '/platform/master/lookup/category',
        updateDeleteCategory: '/platform/master/lookup/category/{id}',
        lookup: '/platform/master/lookup/{id}',
        createLookup: '/platform/master/lookup',
        getPermissionRoleById: '/access-control/permission/role/{id}',
        getAllCategoryTree: '/platform/master/lookup/category/tree/{applicationid}',
        getLookupTree: '/platform/master/lookup/tree/{categoryid}',
        getPermissionsTree: '/access-control/permission/application/{applicationid}'
    }
};
export class AuthURL {
}
AuthURL.EndPoints = {
    auth: {
        user: {
            conformMail: '/org/auth/forgot-password',
            changePassword: '/org/auth/forgot-password-verification',
            login: '/org/auth/login',
            refreshToken: '/org/auth/refresh-token',
            logout: '/org/auth/logout',
            userInfo: '/org/user/page/list',
            userRole: '/org/user/{id}',
            routeToDynamicPage: '/platform/page-designer/page/organization/{orgid}?returnUserPage=true&excludeNoActiveVersionPages=true',
            authMe: '/org/auth/me',
            resetPassword: '/org/user/reset-password',
            orgList: '/org/management-group/organization/tree',
            notification: '/worker/notification',
            workerAvailability: '/worker/updateAvailablity',
            getWorkerAvailability: '/worker/getByCurrentUser',
            userValidate: '/org/auth/user-validate',
            generateLoginUrl: '/org/auth/get-login-url',
            getTokenValidationUrl: '/org/auth/token-validation',
        },
        permission: {
            permissionRoleById: '/access-control/permission/role/{id}',
            pagePermission: '/access-control/permission/page',
            pageLookupPermission: '/access-control/permission/page/lookup'
        },
        microstrategy: {
            login: '/platform/microstrategy/login',
            getLibrary: '/platform/microstrategy/library'
        }
    }
};
export class RBACINFO {
    constructor() {
        this.apiHost = '';
        this.tokenKey = '';
    }
}
export class Environment {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2NvbmZpZy1sb2dpbi1zZXR0aW5ncy9zcmMvbGliL0Bjb3JlL3VybHMvcmJhYy11cmwuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxVQUFVOztBQUNQLG1CQUFRLEdBQUc7SUFDdkIsSUFBSSxFQUFFO1FBQ0osY0FBYyxFQUFFLHNCQUFzQjtRQUN0QyxVQUFVLEVBQUUsNkJBQTZCO1FBQ3pDLGNBQWMsRUFBRSw0QkFBNEI7UUFDNUMsY0FBYyxFQUFFLHNCQUFzQjtRQUN0QyxhQUFhLEVBQUUsMkNBQTJDO1FBQzFELE9BQU8sRUFBRSxVQUFVO0tBQ3BCO0NBQ0YsQ0FBQztBQUdKLE1BQU0sT0FBTyxVQUFVOztBQUNQLG1CQUFRLEdBQUc7SUFDdkIsSUFBSSxFQUFFO1FBQ0osY0FBYyxFQUFFLFdBQVc7UUFDM0Isd0JBQXdCLEVBQUUscUNBQXFDO1FBQy9ELGFBQWEsRUFBRSx5REFBeUQ7UUFDeEUsWUFBWSxFQUFFLG9CQUFvQjtRQUNsQyxVQUFVLEVBQUUsa0JBQWtCO1FBQzlCLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsZUFBZSxFQUFFLDJCQUEyQjtRQUM1QyxpQkFBaUIsRUFBRSx5QkFBeUI7UUFDNUMsY0FBYyxFQUFFLDBCQUEwQjtLQUMzQztJQUNELFFBQVEsRUFBRTtRQUNSLGVBQWUsRUFBRSxlQUFlO1FBQ2hDLGtCQUFrQixFQUFFLHNCQUFzQjtRQUMxQyxlQUFlLEVBQUUsOEJBQThCO0tBQ2hEO0NBQ0YsQ0FBQTtBQUVILE1BQU0sT0FBTyxnQkFBZ0I7O0FBQ2IseUJBQVEsR0FBRztJQUN2QixXQUFXLEVBQUU7UUFDWCxxQkFBcUIsRUFBRSwwQkFBMEI7UUFDakQsaUJBQWlCLEVBQUUsOENBQThDO1FBQ2pFLFNBQVMsRUFBRSwwQkFBMEI7UUFDckMsV0FBVyxFQUFFLDRCQUE0QjtRQUN6QyxjQUFjLEVBQUUsd0JBQXdCO1FBQ3hDLGFBQWEsRUFBRSxpQkFBaUI7S0FDakM7Q0FDRixDQUFDO0FBRUosTUFBTSxPQUFPLGlCQUFpQjs7QUFDZCwwQkFBUSxHQUFHO0lBQ3ZCLFdBQVcsRUFBRTtRQUNYLGtCQUFrQixFQUFFLHFDQUFxQztRQUN6RCxxQkFBcUIsRUFBRSx5Q0FBeUM7UUFDaEUsaUJBQWlCLEVBQUUscUNBQXFDO1FBQ3hELGtCQUFrQixFQUFFLG1FQUFtRTtLQUN4RjtDQUNGLENBQUM7QUFFSixNQUFNLE9BQU8sY0FBYzs7QUFDWCx3QkFBUyxHQUFHO0lBQ3hCLFVBQVUsRUFBRTtRQUNWLGtCQUFrQixFQUFFLHNDQUFzQztRQUMxRCxjQUFjLEVBQUUsaUNBQWlDO1FBQ2pELGFBQWEsRUFBRSxpQ0FBaUM7UUFDaEQsZ0JBQWdCLEVBQUUsbUNBQW1DO1FBQ3JELHNCQUFzQixFQUFFLDJDQUEyQztRQUNuRSxpQkFBaUIsRUFBRSxxREFBcUQ7UUFDeEUsa0JBQWtCLEVBQUUsaURBQWlEO1FBQ3JFLDBCQUEwQixFQUFFLHdEQUF3RDtLQUNyRjtJQUNELElBQUksRUFBRTtRQUNKLFVBQVUsRUFBRSx1QkFBdUI7UUFDbkMsZ0JBQWdCLEVBQUUseUJBQXlCO1FBQzNDLFdBQVcsRUFBRSxxQ0FBcUM7S0FDbkQ7Q0FDRixDQUFDO0FBRUosTUFBTSxPQUFPLHNCQUFzQjs7QUFDbkIsK0JBQVEsR0FBRztJQUN2QixZQUFZLEVBQUU7UUFDWixtQkFBbUIsRUFBRSx1QkFBdUI7UUFDNUMsZUFBZSxFQUFFLHlHQUF5RztLQUMzSDtDQUNGLENBQUM7QUFFSixNQUFNLE9BQU8sU0FBUzs7QUFDTixtQkFBUyxHQUFHO0lBQ3hCLE1BQU0sRUFBRTtRQUNOLGNBQWMsRUFBRSxrQ0FBa0M7UUFDbEQsb0JBQW9CLEVBQUUsdUNBQXVDO1FBQzdELE1BQU0sRUFBRSw4QkFBOEI7UUFDdEMsWUFBWSxFQUFFLHlCQUF5QjtRQUN2QyxxQkFBcUIsRUFBRSxzQ0FBc0M7UUFDN0Qsa0JBQWtCLEVBQUUsdURBQXVEO1FBQzNFLGFBQWEsRUFBRSwyQ0FBMkM7UUFDMUQsa0JBQWtCLEVBQUUsd0RBQXdEO0tBQzdFO0NBQ0YsQ0FBQztBQUVKLE1BQU0sT0FBTyxPQUFPOztBQUNKLGlCQUFTLEdBQUc7SUFDeEIsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFO1lBQ0osV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxjQUFjLEVBQUUsd0NBQXdDO1lBQ3hELEtBQUssRUFBRSxpQkFBaUI7WUFDeEIsWUFBWSxFQUFFLHlCQUF5QjtZQUN2QyxNQUFNLEVBQUUsa0JBQWtCO1lBQzFCLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixrQkFBa0IsRUFBRSx3R0FBd0c7WUFDNUgsTUFBTSxFQUFFLGNBQWM7WUFDdEIsYUFBYSxFQUFFLDBCQUEwQjtZQUN6QyxPQUFPLEVBQUUseUNBQXlDO1lBQ2xELFlBQVksRUFBRSxzQkFBc0I7WUFDcEMsa0JBQWtCLEVBQUUsMkJBQTJCO1lBQy9DLHFCQUFxQixFQUFFLDBCQUEwQjtZQUNqRCxZQUFZLEVBQUUseUJBQXlCO1lBQ3ZDLGdCQUFnQixFQUFFLHlCQUF5QjtZQUMzQyxxQkFBcUIsRUFBRSw0QkFBNEI7U0FDcEQ7UUFDRCxVQUFVLEVBQUU7WUFDVixrQkFBa0IsRUFBRSxzQ0FBc0M7WUFDMUQsY0FBYyxFQUFFLGlDQUFpQztZQUNqRCxvQkFBb0IsRUFBRSx3Q0FBd0M7U0FDL0Q7UUFDRCxhQUFhLEVBQUU7WUFDYixLQUFLLEVBQUUsK0JBQStCO1lBQ3RDLFVBQVUsRUFBRSxpQ0FBaUM7U0FDOUM7S0FDRjtDQUNGLENBQUM7QUFJSixNQUFNLE9BQU8sUUFBUTtJQUFyQjtRQUNFLFlBQU8sR0FBRSxFQUFFLENBQUM7UUFDWixhQUFRLEdBQUcsRUFBRSxDQUFDO0lBSWhCLENBQUM7Q0FBQTtBQUNELE1BQU0sT0FBTyxXQUFXO0NBT3ZCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFJvbGVDb25maWcge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnQgPSB7XHJcbiAgICByb2xlOiB7XHJcbiAgICAgIGdldEFsbFVzZXJSb2xlOiAnL2FjY2Vzcy1jb250cm9sL3JvbGUnLFxyXG4gICAgICBjcmVhdGVSb2xlOiAnL2FjY2Vzcy1jb250cm9sL3JvbGUvY3JlYXRlJyxcclxuICAgICAgZ2V0TGFuZGluZ1BhZ2U6ICcvcGxhdGZvcm0vbWVudS9hcHBsaWNhdGlvbicsXHJcbiAgICAgIGFkZFBvbGljeUdyb3VwOiAnL2FjY2Vzcy1jb250cm9sL3JvbGUnLFxyXG4gICAgICBnZXRBbGxPcmdSb2xlOiAnL2FjY2Vzcy1jb250cm9sL3JvbGUvb3JnYW5pemF0aW9uL3tvcmdpZH0nLFxyXG4gICAgICBkb3NzaWVyOiAnL2Rvc3NpZXInXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJDb25maWcge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnQgPSB7XHJcbiAgICBVc2VyOiB7XHJcbiAgICAgIGdldEFsbFVzZXJMaXN0OiAnL29yZy91c2VyJyxcclxuICAgICAgZ2V0QWxsVXNlckFjdGl2ZUluYWN0aXZlOiAnL29yZy91c2VyP2luY2x1ZGVJbmFjdGl2ZVVzZXJzPXRydWUnLFxyXG4gICAgICBnZXRVc2VyQ29uZmlnOiAnL29yZy91c2VyL2dldFVzZXJQcmVmZXJlbmNlL1VTRVJfVEhFTUVfUFJFRkVSRU5DRVMve2lkfScsXHJcbiAgICAgIGFjdGl2YXRlVXNlcjogJy9vcmcvdXNlci9hY3RpdmF0ZScsXHJcbiAgICAgIGNyZWF0ZVVzZXI6ICcvb3JnL3VzZXIvY3JlYXRlJyxcclxuICAgICAgdXNlclJvbGU6ICcvb3JnL3VzZXIvcm9sZScsXHJcbiAgICAgIG1hbmFnZW1lbnRncm91cDogJy9vcmcvdGVhbS9tYW5hZ2VtZW50Z3JvdXAnLFxyXG4gICAgICBnZXRBbGxVc2VyT3JnTGlzdDogJy9vcmcvdXNlci9vcmdhbml6YXRpb24vJyxcclxuICAgICAgc2F2ZVVzZXJDb25maWc6ICcvdXNlci9zYXZlVXNlclByZWZlcmVuY2UnXHJcbiAgICB9LFxyXG4gICAgUHJvdmlkZXI6IHtcclxuICAgICAgZ2V0UHJvdmlkZXJMaXN0OiAnL3JlZi9wcm92aWRlcicsXHJcbiAgICAgIHNlYXJjaFByb3ZpZGVyTGlzdDogJy9yZWYvcHJvdmlkZXIvc2VhcmNoJyxcclxuICAgICAgYWRkUHJvdmlkZXJVc2VyOiAnL3JlZi9wcm92aWRlci9jcmVhdGUvYWNjb3VudCdcclxuICAgIH1cclxuICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEF0dGFjaG1lbnRDb25maWcge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnQgPSB7XHJcbiAgICBBdHRhY2htZW50czoge1xyXG4gICAgICBHZXRBdHRhY2htZW50UmVmZXJyYWw6ICcvcmVmL2F0dGFjaG1lbnQvcmVmZXJyYWwnLFxyXG4gICAgICBHZXRDYXRlZ29yeUxvb2t1cDogJy9wbGF0Zm9ybS9tYXN0ZXIvbG9va3VwL2xvb2t1cGJ5Y2F0ZWdvcnluYW1lJyxcclxuICAgICAgVXBsb2FkS2V5OiAnL2NvbW1vbi9maWxlcy91cGxvYWQta2V5JyxcclxuICAgICAgRG93bmxvYWRLZXk6ICcvY29tbW9uL2ZpbGVzL2Rvd25sb2FkLWtleScsXHJcbiAgICAgIFBvc3RBdHRhY2htZW50OiAnL3JlZi9hdHRhY2htZW50L2NyZWF0ZScsXHJcbiAgICAgIFB1dEF0dGFjaG1lbnQ6ICcvcmVmL2F0dGFjaG1lbnQnXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5leHBvcnQgY2xhc3MgUG9saWN5R3JvdXBDb25maWcge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnQgPSB7XHJcbiAgICBwb2xpY3lHcm91cDoge1xyXG4gICAgICBnZXRQb2xpY3lHcm91cExpc3Q6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wb2xpY3lHcm91cCcsXHJcbiAgICAgIGdldEFsbFBvbGljeUdyb3VwTGlzdDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BvbGljeUdyb3VwL2FsbCcsXHJcbiAgICAgIGNyZWF0ZVBvbGljeUdyb3VwOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5R3JvdXAnLFxyXG4gICAgICBnZXRPcmdQb2xpY3lHcm91cHM6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wb2xpY3lHcm91cC9vcmdhbml6YXRpb24ve29yZ2FuaXphdGlvbmlkfSdcclxuICAgIH1cclxuICB9O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uc1VSTCB7XHJcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludHMgPSB7XHJcbiAgICBwZXJtaXNzaW9uOiB7XHJcbiAgICAgIHBlcm1pc3Npb25Sb2xlQnlJZDogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3JvbGUve2lkfScsXHJcbiAgICAgIHBhZ2VQZXJtaXNzaW9uOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vcGFnZScsXHJcbiAgICAgIGdldFBlcm1pc3Npb246ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi97aWR9JyxcclxuICAgICAgY3JlYXRlUGVybWlzc2lvbjogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL2NyZWF0ZScsXHJcbiAgICAgIHVwZGF0ZURlbGV0ZVBlcm1pc3Npb246ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi97cGVybWlzc2lvbmlkfScsXHJcbiAgICAgIGdldFBlcm1pc3Npb25UcmVlOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vcGFnZS97cGFnZWlkfS97cGFyZW50aWR9JyxcclxuICAgICAgZ2V0UGVybWlzc2lvblR5cGVzOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vdHlwZS97YXBwbGljYXRpb25pZH0nLFxyXG4gICAgICBhcHBsaWNhdGlvblBlcm1pc3Npb25zVHJlZTogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL2FwcGxpY2F0aW9uL3thcHBsaWNhdGlvbmlkfSdcclxuICAgIH0sXHJcbiAgICBwYWdlOiB7XHJcbiAgICAgIGNyZWF0ZVBhZ2U6ICcvcGxhdGZvcm0vbWVudS9jcmVhdGUnLFxyXG4gICAgICB1cGRhdGVEZWxldGVQYWdlOiAnL3BsYXRmb3JtL21lbnUve3BhZ2VpZH0nLFxyXG4gICAgICBBbGxQYWdlVHJlZTogJy9wbGF0Zm9ybS9tZW51L3RyZWUve2FwcGxpY2F0aW9uaWR9J1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFjY2Vzc01hbmFnZW1lbnRDb25maWcge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnQgPSB7XHJcbiAgICBPcmdhbml6YXRpb246IHtcclxuICAgICAgZ2V0T3JnYW5pemF0aW9uTGlzdDogJy9vcmcvb3JnYW5pemF0aW9uL2FsbCcsXHJcbiAgICAgIGdldE9yZ2FuaXphdGlvbjogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BhZ2Uvb3JnYW5pemF0aW9uL3tvcmdJZH0/cmV0dXJuVXNlclBhZ2U9ZmFsc2UmZXhjbHVkZU5vQWN0aXZlVmVyc2lvblBhZ2VzPXRydWUnXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5leHBvcnQgY2xhc3MgTWFzdGVyVVJMIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50cyA9IHtcclxuICAgIGxvb2t1cDoge1xyXG4gICAgICBjcmVhdGVDYXRlZ29yeTogJy9wbGF0Zm9ybS9tYXN0ZXIvbG9va3VwL2NhdGVnb3J5JyxcclxuICAgICAgdXBkYXRlRGVsZXRlQ2F0ZWdvcnk6ICcvcGxhdGZvcm0vbWFzdGVyL2xvb2t1cC9jYXRlZ29yeS97aWR9JyxcclxuICAgICAgbG9va3VwOiAnL3BsYXRmb3JtL21hc3Rlci9sb29rdXAve2lkfScsXHJcbiAgICAgIGNyZWF0ZUxvb2t1cDogJy9wbGF0Zm9ybS9tYXN0ZXIvbG9va3VwJyxcclxuICAgICAgZ2V0UGVybWlzc2lvblJvbGVCeUlkOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vcm9sZS97aWR9JyxcclxuICAgICAgZ2V0QWxsQ2F0ZWdvcnlUcmVlOiAnL3BsYXRmb3JtL21hc3Rlci9sb29rdXAvY2F0ZWdvcnkvdHJlZS97YXBwbGljYXRpb25pZH0nLFxyXG4gICAgICBnZXRMb29rdXBUcmVlOiAnL3BsYXRmb3JtL21hc3Rlci9sb29rdXAvdHJlZS97Y2F0ZWdvcnlpZH0nLFxyXG4gICAgICBnZXRQZXJtaXNzaW9uc1RyZWU6ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9hcHBsaWNhdGlvbi97YXBwbGljYXRpb25pZH0nXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5leHBvcnQgY2xhc3MgQXV0aFVSTCB7XHJcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludHMgPSB7XHJcbiAgICBhdXRoOiB7XHJcbiAgICAgIHVzZXI6IHtcclxuICAgICAgICBjb25mb3JtTWFpbDogJy9vcmcvYXV0aC9mb3Jnb3QtcGFzc3dvcmQnLFxyXG4gICAgICAgIGNoYW5nZVBhc3N3b3JkOiAnL29yZy9hdXRoL2ZvcmdvdC1wYXNzd29yZC12ZXJpZmljYXRpb24nLFxyXG4gICAgICAgIGxvZ2luOiAnL29yZy9hdXRoL2xvZ2luJyxcclxuICAgICAgICByZWZyZXNoVG9rZW46ICcvb3JnL2F1dGgvcmVmcmVzaC10b2tlbicsXHJcbiAgICAgICAgbG9nb3V0OiAnL29yZy9hdXRoL2xvZ291dCcsXHJcbiAgICAgICAgdXNlckluZm86ICcvb3JnL3VzZXIvcGFnZS9saXN0JyxcclxuICAgICAgICB1c2VyUm9sZTogJy9vcmcvdXNlci97aWR9JyxcclxuICAgICAgICByb3V0ZVRvRHluYW1pY1BhZ2U6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdlL29yZ2FuaXphdGlvbi97b3JnaWR9P3JldHVyblVzZXJQYWdlPXRydWUmZXhjbHVkZU5vQWN0aXZlVmVyc2lvblBhZ2VzPXRydWUnLFxyXG4gICAgICAgIGF1dGhNZTogJy9vcmcvYXV0aC9tZScsXHJcbiAgICAgICAgcmVzZXRQYXNzd29yZDogJy9vcmcvdXNlci9yZXNldC1wYXNzd29yZCcsXHJcbiAgICAgICAgb3JnTGlzdDogJy9vcmcvbWFuYWdlbWVudC1ncm91cC9vcmdhbml6YXRpb24vdHJlZScsXHJcbiAgICAgICAgbm90aWZpY2F0aW9uOiAnL3dvcmtlci9ub3RpZmljYXRpb24nLFxyXG4gICAgICAgIHdvcmtlckF2YWlsYWJpbGl0eTogJy93b3JrZXIvdXBkYXRlQXZhaWxhYmxpdHknLFxyXG4gICAgICAgIGdldFdvcmtlckF2YWlsYWJpbGl0eTogJy93b3JrZXIvZ2V0QnlDdXJyZW50VXNlcicsXHJcbiAgICAgICAgdXNlclZhbGlkYXRlOiAnL29yZy9hdXRoL3VzZXItdmFsaWRhdGUnLFxyXG4gICAgICAgIGdlbmVyYXRlTG9naW5Vcmw6ICcvb3JnL2F1dGgvZ2V0LWxvZ2luLXVybCcsXHJcbiAgICAgICAgZ2V0VG9rZW5WYWxpZGF0aW9uVXJsOiAnL29yZy9hdXRoL3Rva2VuLXZhbGlkYXRpb24nLFxyXG4gICAgICB9LFxyXG4gICAgICBwZXJtaXNzaW9uOiB7XHJcbiAgICAgICAgcGVybWlzc2lvblJvbGVCeUlkOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vcm9sZS97aWR9JyxcclxuICAgICAgICBwYWdlUGVybWlzc2lvbjogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3BhZ2UnLFxyXG4gICAgICAgIHBhZ2VMb29rdXBQZXJtaXNzaW9uOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vcGFnZS9sb29rdXAnXHJcbiAgICAgIH0sXHJcbiAgICAgIG1pY3Jvc3RyYXRlZ3k6IHtcclxuICAgICAgICBsb2dpbjogJy9wbGF0Zm9ybS9taWNyb3N0cmF0ZWd5L2xvZ2luJyxcclxuICAgICAgICBnZXRMaWJyYXJ5OiAnL3BsYXRmb3JtL21pY3Jvc3RyYXRlZ3kvbGlicmFyeSdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUkJBQ0lORk8ge1xyXG4gIGFwaUhvc3QgPScnO1xyXG4gIHRva2VuS2V5ID0gJyc7XHJcbiAgb3RoZXJzPzogYW55O1xyXG4gIG9yZ0lEPzogYW55O1xyXG4gIGVudmlyb25tZW50PzogRW52aXJvbm1lbnQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcclxuICBtc3RyVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgbXN0clBhc3N3b3JkPzogc3RyaW5nO1xyXG4gIG1zdHJVUkw/OiBzdHJpbmc7XHJcbiAgbXN0clByb2plY3RJRD86IHN0cmluZztcclxuICBhcHBsaWNhdGlvbmlkPzogc3RyaW5nO1xyXG4gIHByaW9yaXR5Pzogc3RyaW5nXHJcbn1cclxuXHJcbiJdfQ==