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
        saveUserConfig: '/org/user/saveUserPreference'
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
        GetCategoryLookup: '/lookup/lookupbycategoryname',
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
            getWorkerAvailability: '/worker/getByCurrentUser'
        },
        permission: {
            permissionRoleById: '/access-control/permission/role/{id}',
            pagePermission: '/access-control/permission/page',
            pageLookupPermission: '/access-control/permission/page/lookup'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3Byb2ZpbGUvc3JjL2xpYi9waWNzLXByb2ZpbGUvQGNvcmUvdXJscy9yYmFjLXVybC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLFVBQVU7O0FBQ1AsbUJBQVEsR0FBRztJQUN2QixJQUFJLEVBQUU7UUFDSixjQUFjLEVBQUUsc0JBQXNCO1FBQ3RDLFVBQVUsRUFBRSw2QkFBNkI7UUFDekMsY0FBYyxFQUFFLDRCQUE0QjtRQUM1QyxjQUFjLEVBQUUsc0JBQXNCO1FBQ3RDLGFBQWEsRUFBRSwyQ0FBMkM7UUFDMUQsT0FBTyxFQUFFLFVBQVU7S0FDcEI7Q0FDRixDQUFDO0FBR0osTUFBTSxPQUFPLFVBQVU7O0FBQ1AsbUJBQVEsR0FBRztJQUN2QixJQUFJLEVBQUU7UUFDSixjQUFjLEVBQUUsV0FBVztRQUMzQix3QkFBd0IsRUFBRSxxQ0FBcUM7UUFDL0QsYUFBYSxFQUFFLHlEQUF5RDtRQUN4RSxZQUFZLEVBQUUsb0JBQW9CO1FBQ2xDLFVBQVUsRUFBRSxrQkFBa0I7UUFDOUIsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixlQUFlLEVBQUUsMkJBQTJCO1FBQzVDLGlCQUFpQixFQUFFLHlCQUF5QjtRQUM1QyxjQUFjLEVBQUUsOEJBQThCO0tBQy9DO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsZUFBZSxFQUFFLGVBQWU7UUFDaEMsa0JBQWtCLEVBQUUsc0JBQXNCO1FBQzFDLGVBQWUsRUFBRSw4QkFBOEI7S0FDaEQ7Q0FDRixDQUFBO0FBRUgsTUFBTSxPQUFPLGdCQUFnQjs7QUFDYix5QkFBUSxHQUFHO0lBQ3ZCLFdBQVcsRUFBRTtRQUNYLHFCQUFxQixFQUFFLDBCQUEwQjtRQUNqRCxpQkFBaUIsRUFBRSw4QkFBOEI7UUFDakQsU0FBUyxFQUFFLDBCQUEwQjtRQUNyQyxXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLGNBQWMsRUFBRSx3QkFBd0I7UUFDeEMsYUFBYSxFQUFFLGlCQUFpQjtLQUNqQztDQUNGLENBQUM7QUFFSixNQUFNLE9BQU8saUJBQWlCOztBQUNkLDBCQUFRLEdBQUc7SUFDdkIsV0FBVyxFQUFFO1FBQ1gsa0JBQWtCLEVBQUUscUNBQXFDO1FBQ3pELHFCQUFxQixFQUFFLHlDQUF5QztRQUNoRSxpQkFBaUIsRUFBRSxxQ0FBcUM7UUFDeEQsa0JBQWtCLEVBQUUsbUVBQW1FO0tBQ3hGO0NBQ0YsQ0FBQztBQUVKLE1BQU0sT0FBTyxjQUFjOztBQUNYLHdCQUFTLEdBQUc7SUFDeEIsVUFBVSxFQUFFO1FBQ1Ysa0JBQWtCLEVBQUUsc0NBQXNDO1FBQzFELGNBQWMsRUFBRSxpQ0FBaUM7UUFDakQsYUFBYSxFQUFFLGlDQUFpQztRQUNoRCxnQkFBZ0IsRUFBRSxtQ0FBbUM7UUFDckQsc0JBQXNCLEVBQUUsMkNBQTJDO1FBQ25FLGlCQUFpQixFQUFFLHFEQUFxRDtRQUN4RSxrQkFBa0IsRUFBRSxpREFBaUQ7UUFDckUsMEJBQTBCLEVBQUUsd0RBQXdEO0tBQ3JGO0lBQ0QsSUFBSSxFQUFFO1FBQ0osVUFBVSxFQUFFLHVCQUF1QjtRQUNuQyxnQkFBZ0IsRUFBRSx5QkFBeUI7UUFDM0MsV0FBVyxFQUFFLHFDQUFxQztLQUNuRDtDQUNGLENBQUM7QUFFSixNQUFNLE9BQU8sc0JBQXNCOztBQUNuQiwrQkFBUSxHQUFHO0lBQ3ZCLFlBQVksRUFBRTtRQUNaLG1CQUFtQixFQUFFLHVCQUF1QjtRQUM1QyxlQUFlLEVBQUUseUdBQXlHO0tBQzNIO0NBQ0YsQ0FBQztBQUVKLE1BQU0sT0FBTyxTQUFTOztBQUNOLG1CQUFTLEdBQUc7SUFDeEIsTUFBTSxFQUFFO1FBQ04sY0FBYyxFQUFFLGtDQUFrQztRQUNsRCxvQkFBb0IsRUFBRSx1Q0FBdUM7UUFDN0QsTUFBTSxFQUFFLDhCQUE4QjtRQUN0QyxZQUFZLEVBQUUseUJBQXlCO1FBQ3ZDLHFCQUFxQixFQUFFLHNDQUFzQztRQUM3RCxrQkFBa0IsRUFBRSx1REFBdUQ7UUFDM0UsYUFBYSxFQUFFLDJDQUEyQztRQUMxRCxrQkFBa0IsRUFBRSx3REFBd0Q7S0FDN0U7Q0FDRixDQUFDO0FBRUosTUFBTSxPQUFPLE9BQU87O0FBQ0osaUJBQVMsR0FBRztJQUN4QixJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUU7WUFDSixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLGNBQWMsRUFBRSx3Q0FBd0M7WUFDeEQsS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixZQUFZLEVBQUUseUJBQXlCO1lBQ3ZDLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLGtCQUFrQixFQUFFLHdHQUF3RztZQUM1SCxNQUFNLEVBQUUsY0FBYztZQUN0QixhQUFhLEVBQUUsMEJBQTBCO1lBQ3pDLE9BQU8sRUFBRSx5Q0FBeUM7WUFDbEQsWUFBWSxFQUFFLHNCQUFzQjtZQUNwQyxrQkFBa0IsRUFBRSwyQkFBMkI7WUFDL0MscUJBQXFCLEVBQUUsMEJBQTBCO1NBQ2xEO1FBQ0QsVUFBVSxFQUFFO1lBQ1Ysa0JBQWtCLEVBQUUsc0NBQXNDO1lBQzFELGNBQWMsRUFBRSxpQ0FBaUM7WUFDakQsb0JBQW9CLEVBQUUsd0NBQXdDO1NBQy9EO0tBQ0Y7Q0FDRixDQUFDO0FBSUosTUFBTSxPQUFPLFFBQVE7SUFBckI7UUFDRSxZQUFPLEdBQUUsRUFBRSxDQUFDO1FBQ1osYUFBUSxHQUFHLEVBQUUsQ0FBQztJQUloQixDQUFDO0NBQUE7QUFDRCxNQUFNLE9BQU8sV0FBVztDQU92QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSb2xlQ29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgcm9sZToge1xyXG4gICAgICBnZXRBbGxVc2VyUm9sZTogJy9hY2Nlc3MtY29udHJvbC9yb2xlJyxcclxuICAgICAgY3JlYXRlUm9sZTogJy9hY2Nlc3MtY29udHJvbC9yb2xlL2NyZWF0ZScsXHJcbiAgICAgIGdldExhbmRpbmdQYWdlOiAnL3BsYXRmb3JtL21lbnUvYXBwbGljYXRpb24nLFxyXG4gICAgICBhZGRQb2xpY3lHcm91cDogJy9hY2Nlc3MtY29udHJvbC9yb2xlJyxcclxuICAgICAgZ2V0QWxsT3JnUm9sZTogJy9hY2Nlc3MtY29udHJvbC9yb2xlL29yZ2FuaXphdGlvbi97b3JnaWR9JyxcclxuICAgICAgZG9zc2llcjogJy9kb3NzaWVyJ1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyQ29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgVXNlcjoge1xyXG4gICAgICBnZXRBbGxVc2VyTGlzdDogJy9vcmcvdXNlcicsXHJcbiAgICAgIGdldEFsbFVzZXJBY3RpdmVJbmFjdGl2ZTogJy9vcmcvdXNlcj9pbmNsdWRlSW5hY3RpdmVVc2Vycz10cnVlJyxcclxuICAgICAgZ2V0VXNlckNvbmZpZzogJy9vcmcvdXNlci9nZXRVc2VyUHJlZmVyZW5jZS9VU0VSX1RIRU1FX1BSRUZFUkVOQ0VTL3tpZH0nLFxyXG4gICAgICBhY3RpdmF0ZVVzZXI6ICcvb3JnL3VzZXIvYWN0aXZhdGUnLFxyXG4gICAgICBjcmVhdGVVc2VyOiAnL29yZy91c2VyL2NyZWF0ZScsXHJcbiAgICAgIHVzZXJSb2xlOiAnL29yZy91c2VyL3JvbGUnLFxyXG4gICAgICBtYW5hZ2VtZW50Z3JvdXA6ICcvb3JnL3RlYW0vbWFuYWdlbWVudGdyb3VwJyxcclxuICAgICAgZ2V0QWxsVXNlck9yZ0xpc3Q6ICcvb3JnL3VzZXIvb3JnYW5pemF0aW9uLycsXHJcbiAgICAgIHNhdmVVc2VyQ29uZmlnOiAnL29yZy91c2VyL3NhdmVVc2VyUHJlZmVyZW5jZSdcclxuICAgIH0sXHJcbiAgICBQcm92aWRlcjoge1xyXG4gICAgICBnZXRQcm92aWRlckxpc3Q6ICcvcmVmL3Byb3ZpZGVyJyxcclxuICAgICAgc2VhcmNoUHJvdmlkZXJMaXN0OiAnL3JlZi9wcm92aWRlci9zZWFyY2gnLFxyXG4gICAgICBhZGRQcm92aWRlclVzZXI6ICcvcmVmL3Byb3ZpZGVyL2NyZWF0ZS9hY2NvdW50J1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgY2xhc3MgQXR0YWNobWVudENvbmZpZyB7XHJcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludCA9IHtcclxuICAgIEF0dGFjaG1lbnRzOiB7XHJcbiAgICAgIEdldEF0dGFjaG1lbnRSZWZlcnJhbDogJy9yZWYvYXR0YWNobWVudC9yZWZlcnJhbCcsXHJcbiAgICAgIEdldENhdGVnb3J5TG9va3VwOiAnL2xvb2t1cC9sb29rdXBieWNhdGVnb3J5bmFtZScsXHJcbiAgICAgIFVwbG9hZEtleTogJy9jb21tb24vZmlsZXMvdXBsb2FkLWtleScsXHJcbiAgICAgIERvd25sb2FkS2V5OiAnL2NvbW1vbi9maWxlcy9kb3dubG9hZC1rZXknLFxyXG4gICAgICBQb3N0QXR0YWNobWVudDogJy9yZWYvYXR0YWNobWVudC9jcmVhdGUnLFxyXG4gICAgICBQdXRBdHRhY2htZW50OiAnL3JlZi9hdHRhY2htZW50J1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGNsYXNzIFBvbGljeUdyb3VwQ29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgcG9saWN5R3JvdXA6IHtcclxuICAgICAgZ2V0UG9saWN5R3JvdXBMaXN0OiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5R3JvdXAnLFxyXG4gICAgICBnZXRBbGxQb2xpY3lHcm91cExpc3Q6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wb2xpY3lHcm91cC9hbGwnLFxyXG4gICAgICBjcmVhdGVQb2xpY3lHcm91cDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BvbGljeUdyb3VwJyxcclxuICAgICAgZ2V0T3JnUG9saWN5R3JvdXBzOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5R3JvdXAvb3JnYW5pemF0aW9uL3tvcmdhbml6YXRpb25pZH0nXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbnNVUkwge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnRzID0ge1xyXG4gICAgcGVybWlzc2lvbjoge1xyXG4gICAgICBwZXJtaXNzaW9uUm9sZUJ5SWQ6ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9yb2xlL3tpZH0nLFxyXG4gICAgICBwYWdlUGVybWlzc2lvbjogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3BhZ2UnLFxyXG4gICAgICBnZXRQZXJtaXNzaW9uOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24ve2lkfScsXHJcbiAgICAgIGNyZWF0ZVBlcm1pc3Npb246ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9jcmVhdGUnLFxyXG4gICAgICB1cGRhdGVEZWxldGVQZXJtaXNzaW9uOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24ve3Blcm1pc3Npb25pZH0nLFxyXG4gICAgICBnZXRQZXJtaXNzaW9uVHJlZTogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3BhZ2Uve3BhZ2VpZH0ve3BhcmVudGlkfScsXHJcbiAgICAgIGdldFBlcm1pc3Npb25UeXBlczogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3R5cGUve2FwcGxpY2F0aW9uaWR9JyxcclxuICAgICAgYXBwbGljYXRpb25QZXJtaXNzaW9uc1RyZWU6ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9hcHBsaWNhdGlvbi97YXBwbGljYXRpb25pZH0nXHJcbiAgICB9LFxyXG4gICAgcGFnZToge1xyXG4gICAgICBjcmVhdGVQYWdlOiAnL3BsYXRmb3JtL21lbnUvY3JlYXRlJyxcclxuICAgICAgdXBkYXRlRGVsZXRlUGFnZTogJy9wbGF0Zm9ybS9tZW51L3twYWdlaWR9JyxcclxuICAgICAgQWxsUGFnZVRyZWU6ICcvcGxhdGZvcm0vbWVudS90cmVlL3thcHBsaWNhdGlvbmlkfSdcclxuICAgIH1cclxuICB9O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgT3JnYW5pemF0aW9uOiB7XHJcbiAgICAgIGdldE9yZ2FuaXphdGlvbkxpc3Q6ICcvb3JnL29yZ2FuaXphdGlvbi9hbGwnLFxyXG4gICAgICBnZXRPcmdhbml6YXRpb246ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdlL29yZ2FuaXphdGlvbi97b3JnSWR9P3JldHVyblVzZXJQYWdlPWZhbHNlJmV4Y2x1ZGVOb0FjdGl2ZVZlcnNpb25QYWdlcz10cnVlJ1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGNsYXNzIE1hc3RlclVSTCB7XHJcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludHMgPSB7XHJcbiAgICBsb29rdXA6IHtcclxuICAgICAgY3JlYXRlQ2F0ZWdvcnk6ICcvcGxhdGZvcm0vbWFzdGVyL2xvb2t1cC9jYXRlZ29yeScsXHJcbiAgICAgIHVwZGF0ZURlbGV0ZUNhdGVnb3J5OiAnL3BsYXRmb3JtL21hc3Rlci9sb29rdXAvY2F0ZWdvcnkve2lkfScsXHJcbiAgICAgIGxvb2t1cDogJy9wbGF0Zm9ybS9tYXN0ZXIvbG9va3VwL3tpZH0nLFxyXG4gICAgICBjcmVhdGVMb29rdXA6ICcvcGxhdGZvcm0vbWFzdGVyL2xvb2t1cCcsXHJcbiAgICAgIGdldFBlcm1pc3Npb25Sb2xlQnlJZDogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3JvbGUve2lkfScsXHJcbiAgICAgIGdldEFsbENhdGVnb3J5VHJlZTogJy9wbGF0Zm9ybS9tYXN0ZXIvbG9va3VwL2NhdGVnb3J5L3RyZWUve2FwcGxpY2F0aW9uaWR9JyxcclxuICAgICAgZ2V0TG9va3VwVHJlZTogJy9wbGF0Zm9ybS9tYXN0ZXIvbG9va3VwL3RyZWUve2NhdGVnb3J5aWR9JyxcclxuICAgICAgZ2V0UGVybWlzc2lvbnNUcmVlOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vYXBwbGljYXRpb24ve2FwcGxpY2F0aW9uaWR9J1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGNsYXNzIEF1dGhVUkwge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnRzID0ge1xyXG4gICAgYXV0aDoge1xyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgY29uZm9ybU1haWw6ICcvb3JnL2F1dGgvZm9yZ290LXBhc3N3b3JkJyxcclxuICAgICAgICBjaGFuZ2VQYXNzd29yZDogJy9vcmcvYXV0aC9mb3Jnb3QtcGFzc3dvcmQtdmVyaWZpY2F0aW9uJyxcclxuICAgICAgICBsb2dpbjogJy9vcmcvYXV0aC9sb2dpbicsXHJcbiAgICAgICAgcmVmcmVzaFRva2VuOiAnL29yZy9hdXRoL3JlZnJlc2gtdG9rZW4nLFxyXG4gICAgICAgIGxvZ291dDogJy9vcmcvYXV0aC9sb2dvdXQnLFxyXG4gICAgICAgIHVzZXJJbmZvOiAnL29yZy91c2VyL3BhZ2UvbGlzdCcsXHJcbiAgICAgICAgdXNlclJvbGU6ICcvb3JnL3VzZXIve2lkfScsXHJcbiAgICAgICAgcm91dGVUb0R5bmFtaWNQYWdlOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcGFnZS9vcmdhbml6YXRpb24ve29yZ2lkfT9yZXR1cm5Vc2VyUGFnZT10cnVlJmV4Y2x1ZGVOb0FjdGl2ZVZlcnNpb25QYWdlcz10cnVlJyxcclxuICAgICAgICBhdXRoTWU6ICcvb3JnL2F1dGgvbWUnLFxyXG4gICAgICAgIHJlc2V0UGFzc3dvcmQ6ICcvb3JnL3VzZXIvcmVzZXQtcGFzc3dvcmQnLFxyXG4gICAgICAgIG9yZ0xpc3Q6ICcvb3JnL21hbmFnZW1lbnQtZ3JvdXAvb3JnYW5pemF0aW9uL3RyZWUnLFxyXG4gICAgICAgIG5vdGlmaWNhdGlvbjogJy93b3JrZXIvbm90aWZpY2F0aW9uJyxcclxuICAgICAgICB3b3JrZXJBdmFpbGFiaWxpdHk6ICcvd29ya2VyL3VwZGF0ZUF2YWlsYWJsaXR5JyxcclxuICAgICAgICBnZXRXb3JrZXJBdmFpbGFiaWxpdHk6ICcvd29ya2VyL2dldEJ5Q3VycmVudFVzZXInXHJcbiAgICAgIH0sXHJcbiAgICAgIHBlcm1pc3Npb246IHtcclxuICAgICAgICBwZXJtaXNzaW9uUm9sZUJ5SWQ6ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9yb2xlL3tpZH0nLFxyXG4gICAgICAgIHBhZ2VQZXJtaXNzaW9uOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vcGFnZScsXHJcbiAgICAgICAgcGFnZUxvb2t1cFBlcm1pc3Npb246ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9wYWdlL2xvb2t1cCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUkJBQ0lORk8ge1xyXG4gIGFwaUhvc3QgPScnO1xyXG4gIHRva2VuS2V5ID0gJyc7XHJcbiAgb3RoZXJzPzogYW55O1xyXG4gIG9yZ0lEPzogYW55O1xyXG4gIGVudmlyb25tZW50PzogRW52aXJvbm1lbnQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcclxuICBtc3RyVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgbXN0clBhc3N3b3JkPzogc3RyaW5nO1xyXG4gIG1zdHJVUkw/OiBzdHJpbmc7XHJcbiAgbXN0clByb2plY3RJRD86IHN0cmluZztcclxuICBhcHBsaWNhdGlvbmlkPzogc3RyaW5nO1xyXG4gIHByaW9yaXR5Pzogc3RyaW5nXHJcbn1cclxuXHJcbiJdfQ==