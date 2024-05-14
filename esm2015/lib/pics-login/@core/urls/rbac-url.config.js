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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2xvZ2luL3NyYy9saWIvcGljcy1sb2dpbi9AY29yZS91cmxzL3JiYWMtdXJsLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sVUFBVTs7QUFDUCxtQkFBUSxHQUFHO0lBQ3ZCLElBQUksRUFBRTtRQUNKLGNBQWMsRUFBRSxzQkFBc0I7UUFDdEMsVUFBVSxFQUFFLDZCQUE2QjtRQUN6QyxjQUFjLEVBQUUsNEJBQTRCO1FBQzVDLGNBQWMsRUFBRSxzQkFBc0I7UUFDdEMsYUFBYSxFQUFFLDJDQUEyQztRQUMxRCxPQUFPLEVBQUUsVUFBVTtLQUNwQjtDQUNGLENBQUM7QUFHSixNQUFNLE9BQU8sVUFBVTs7QUFDUCxtQkFBUSxHQUFHO0lBQ3ZCLElBQUksRUFBRTtRQUNKLGNBQWMsRUFBRSxXQUFXO1FBQzNCLHdCQUF3QixFQUFFLHFDQUFxQztRQUMvRCxhQUFhLEVBQUUseURBQXlEO1FBQ3hFLFlBQVksRUFBRSxvQkFBb0I7UUFDbEMsVUFBVSxFQUFFLGtCQUFrQjtRQUM5QixRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLGVBQWUsRUFBRSwyQkFBMkI7UUFDNUMsaUJBQWlCLEVBQUUseUJBQXlCO1FBQzVDLGNBQWMsRUFBRSwwQkFBMEI7S0FDM0M7SUFDRCxRQUFRLEVBQUU7UUFDUixlQUFlLEVBQUUsZUFBZTtRQUNoQyxrQkFBa0IsRUFBRSxzQkFBc0I7UUFDMUMsZUFBZSxFQUFFLDhCQUE4QjtLQUNoRDtDQUNGLENBQUE7QUFFSCxNQUFNLE9BQU8sZ0JBQWdCOztBQUNiLHlCQUFRLEdBQUc7SUFDdkIsV0FBVyxFQUFFO1FBQ1gscUJBQXFCLEVBQUUsMEJBQTBCO1FBQ2pELGlCQUFpQixFQUFFLDhDQUE4QztRQUNqRSxTQUFTLEVBQUUsMEJBQTBCO1FBQ3JDLFdBQVcs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c3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgcm9sZToge1xyXG4gICAgICBnZXRBbGxVc2VyUm9sZTogJy9hY2Nlc3MtY29udHJvbC9yb2xlJyxcclxuICAgICAgY3JlYXRlUm9sZTogJy9hY2Nlc3MtY29udHJvbC9yb2xlL2NyZWF0ZScsXHJcbiAgICAgIGdldExhbmRpbmdQYWdlOiAnL3BsYXRmb3JtL21lbnUvYXBwbGljYXRpb24nLFxyXG4gICAgICBhZGRQb2xpY3lHcm91cDogJy9hY2Nlc3MtY29udHJvbC9yb2xlJyxcclxuICAgICAgZ2V0QWxsT3JnUm9sZTogJy9hY2Nlc3MtY29udHJvbC9yb2xlL29yZ2FuaXphdGlvbi97b3JnaWR9JyxcclxuICAgICAgZG9zc2llcjogJy9kb3NzaWVyJ1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyQ29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgVXNlcjoge1xyXG4gICAgICBnZXRBbGxVc2VyTGlzdDogJy9vcmcvdXNlcicsXHJcbiAgICAgIGdldEFsbFVzZXJBY3RpdmVJbmFjdGl2ZTogJy9vcmcvdXNlcj9pbmNsdWRlSW5hY3RpdmVVc2Vycz10cnVlJyxcclxuICAgICAgZ2V0VXNlckNvbmZpZzogJy9vcmcvdXNlci9nZXRVc2VyUHJlZmVyZW5jZS9VU0VSX1RIRU1FX1BSRUZFUkVOQ0VTL3tpZH0nLFxyXG4gICAgICBhY3RpdmF0ZVVzZXI6ICcvb3JnL3VzZXIvYWN0aXZhdGUnLFxyXG4gICAgICBjcmVhdGVVc2VyOiAnL29yZy91c2VyL2NyZWF0ZScsXHJcbiAgICAgIHVzZXJSb2xlOiAnL29yZy91c2VyL3JvbGUnLFxyXG4gICAgICBtYW5hZ2VtZW50Z3JvdXA6ICcvb3JnL3RlYW0vbWFuYWdlbWVudGdyb3VwJyxcclxuICAgICAgZ2V0QWxsVXNlck9yZ0xpc3Q6ICcvb3JnL3VzZXIvb3JnYW5pemF0aW9uLycsXHJcbiAgICAgIHNhdmVVc2VyQ29uZmlnOiAnL3VzZXIvc2F2ZVVzZXJQcmVmZXJlbmNlJ1xyXG4gICAgfSxcclxuICAgIFByb3ZpZGVyOiB7XHJcbiAgICAgIGdldFByb3ZpZGVyTGlzdDogJy9yZWYvcHJvdmlkZXInLFxyXG4gICAgICBzZWFyY2hQcm92aWRlckxpc3Q6ICcvcmVmL3Byb3ZpZGVyL3NlYXJjaCcsXHJcbiAgICAgIGFkZFByb3ZpZGVyVXNlcjogJy9yZWYvcHJvdmlkZXIvY3JlYXRlL2FjY291bnQnXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBdHRhY2htZW50Q29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgQXR0YWNobWVudHM6IHtcclxuICAgICAgR2V0QXR0YWNobWVudFJlZmVycmFsOiAnL3JlZi9hdHRhY2htZW50L3JlZmVycmFsJyxcclxuICAgICAgR2V0Q2F0ZWdvcnlMb29rdXA6ICcvcGxhdGZvcm0vbWFzdGVyL2xvb2t1cC9sb29rdXBieWNhdGVnb3J5bmFtZScsXHJcbiAgICAgIFVwbG9hZEtleTogJy9jb21tb24vZmlsZXMvdXBsb2FkLWtleScsXHJcbiAgICAgIERvd25sb2FkS2V5OiAnL2NvbW1vbi9maWxlcy9kb3dubG9hZC1rZXknLFxyXG4gICAgICBQb3N0QXR0YWNobWVudDogJy9yZWYvYXR0YWNobWVudC9jcmVhdGUnLFxyXG4gICAgICBQdXRBdHRhY2htZW50OiAnL3JlZi9hdHRhY2htZW50J1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGNsYXNzIFBvbGljeUdyb3VwQ29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgcG9saWN5R3JvdXA6IHtcclxuICAgICAgZ2V0UG9saWN5R3JvdXBMaXN0OiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5R3JvdXAnLFxyXG4gICAgICBnZXRBbGxQb2xpY3lHcm91cExpc3Q6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wb2xpY3lHcm91cC9hbGwnLFxyXG4gICAgICBjcmVhdGVQb2xpY3lHcm91cDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BvbGljeUdyb3VwJyxcclxuICAgICAgZ2V0T3JnUG9saWN5R3JvdXBzOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5R3JvdXAvb3JnYW5pemF0aW9uL3tvcmdhbml6YXRpb25pZH0nXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbnNVUkwge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnRzID0ge1xyXG4gICAgcGVybWlzc2lvbjoge1xyXG4gICAgICBwZXJtaXNzaW9uUm9sZUJ5SWQ6ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9yb2xlL3tpZH0nLFxyXG4gICAgICBwYWdlUGVybWlzc2lvbjogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3BhZ2UnLFxyXG4gICAgICBnZXRQZXJtaXNzaW9uOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24ve2lkfScsXHJcbiAgICAgIGNyZWF0ZVBlcm1pc3Npb246ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9jcmVhdGUnLFxyXG4gICAgICB1cGRhdGVEZWxldGVQZXJtaXNzaW9uOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24ve3Blcm1pc3Npb25pZH0nLFxyXG4gICAgICBnZXRQZXJtaXNzaW9uVHJlZTogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3BhZ2Uve3BhZ2VpZH0ve3BhcmVudGlkfScsXHJcbiAgICAgIGdldFBlcm1pc3Npb25UeXBlczogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3R5cGUve2FwcGxpY2F0aW9uaWR9JyxcclxuICAgICAgYXBwbGljYXRpb25QZXJtaXNzaW9uc1RyZWU6ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9hcHBsaWNhdGlvbi97YXBwbGljYXRpb25pZH0nXHJcbiAgICB9LFxyXG4gICAgcGFnZToge1xyXG4gICAgICBjcmVhdGVQYWdlOiAnL3BsYXRmb3JtL21lbnUvY3JlYXRlJyxcclxuICAgICAgdXBkYXRlRGVsZXRlUGFnZTogJy9wbGF0Zm9ybS9tZW51L3twYWdlaWR9JyxcclxuICAgICAgQWxsUGFnZVRyZWU6ICcvcGxhdGZvcm0vbWVudS90cmVlL3thcHBsaWNhdGlvbmlkfSdcclxuICAgIH1cclxuICB9O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgT3JnYW5pemF0aW9uOiB7XHJcbiAgICAgIGdldE9yZ2FuaXphdGlvbkxpc3Q6ICcvb3JnL29yZ2FuaXphdGlvbi9hbGwnLFxyXG4gICAgICBnZXRPcmdhbml6YXRpb246ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdlL29yZ2FuaXphdGlvbi97b3JnSWR9P3JldHVyblVzZXJQYWdlPWZhbHNlJmV4Y2x1ZGVOb0FjdGl2ZVZlcnNpb25QYWdlcz10cnVlJ1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGNsYXNzIE1hc3RlclVSTCB7XHJcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludHMgPSB7XHJcbiAgICBsb29rdXA6IHtcclxuICAgICAgY3JlYXRlQ2F0ZWdvcnk6ICcvcGxhdGZvcm0vbWFzdGVyL2xvb2t1cC9jYXRlZ29yeScsXHJcbiAgICAgIHVwZGF0ZURlbGV0ZUNhdGVnb3J5OiAnL3BsYXRmb3JtL21hc3Rlci9sb29rdXAvY2F0ZWdvcnkve2lkfScsXHJcbiAgICAgIGxvb2t1cDogJy9wbGF0Zm9ybS9tYXN0ZXIvbG9va3VwL3tpZH0nLFxyXG4gICAgICBjcmVhdGVMb29rdXA6ICcvcGxhdGZvcm0vbWFzdGVyL2xvb2t1cCcsXHJcbiAgICAgIGdldFBlcm1pc3Npb25Sb2xlQnlJZDogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3JvbGUve2lkfScsXHJcbiAgICAgIGdldEFsbENhdGVnb3J5VHJlZTogJy9wbGF0Zm9ybS9tYXN0ZXIvbG9va3VwL2NhdGVnb3J5L3RyZWUve2FwcGxpY2F0aW9uaWR9JyxcclxuICAgICAgZ2V0TG9va3VwVHJlZTogJy9wbGF0Zm9ybS9tYXN0ZXIvbG9va3VwL3RyZWUve2NhdGVnb3J5aWR9JyxcclxuICAgICAgZ2V0UGVybWlzc2lvbnNUcmVlOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vYXBwbGljYXRpb24ve2FwcGxpY2F0aW9uaWR9J1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGNsYXNzIEF1dGhVUkwge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnRzID0ge1xyXG4gICAgYXV0aDoge1xyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgY29uZm9ybU1haWw6ICcvb3JnL2F1dGgvZm9yZ290LXBhc3N3b3JkJyxcclxuICAgICAgICBjaGFuZ2VQYXNzd29yZDogJy9vcmcvYXV0aC9mb3Jnb3QtcGFzc3dvcmQtdmVyaWZpY2F0aW9uJyxcclxuICAgICAgICBsb2dpbjogJy9vcmcvYXV0aC9sb2dpbicsXHJcbiAgICAgICAgcmVmcmVzaFRva2VuOiAnL29yZy9hdXRoL3JlZnJlc2gtdG9rZW4nLFxyXG4gICAgICAgIGxvZ291dDogJy9vcmcvYXV0aC9sb2dvdXQnLFxyXG4gICAgICAgIHVzZXJJbmZvOiAnL29yZy91c2VyL3BhZ2UvbGlzdCcsXHJcbiAgICAgICAgdXNlclJvbGU6ICcvb3JnL3VzZXIve2lkfScsXHJcbiAgICAgICAgcm91dGVUb0R5bmFtaWNQYWdlOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcGFnZS9vcmdhbml6YXRpb24ve29yZ2lkfT9yZXR1cm5Vc2VyUGFnZT10cnVlJmV4Y2x1ZGVOb0FjdGl2ZVZlcnNpb25QYWdlcz10cnVlJyxcclxuICAgICAgICBhdXRoTWU6ICcvb3JnL2F1dGgvbWUnLFxyXG4gICAgICAgIHJlc2V0UGFzc3dvcmQ6ICcvb3JnL3VzZXIvcmVzZXQtcGFzc3dvcmQnLFxyXG4gICAgICAgIG9yZ0xpc3Q6ICcvb3JnL21hbmFnZW1lbnQtZ3JvdXAvb3JnYW5pemF0aW9uL3RyZWUnLFxyXG4gICAgICAgIG5vdGlmaWNhdGlvbjogJy93b3JrZXIvbm90aWZpY2F0aW9uJyxcclxuICAgICAgICB3b3JrZXJBdmFpbGFiaWxpdHk6ICcvd29ya2VyL3VwZGF0ZUF2YWlsYWJsaXR5JyxcclxuICAgICAgICBnZXRXb3JrZXJBdmFpbGFiaWxpdHk6ICcvd29ya2VyL2dldEJ5Q3VycmVudFVzZXInLFxyXG4gICAgICAgIHVzZXJWYWxpZGF0ZTogJy9vcmcvYXV0aC91c2VyLXZhbGlkYXRlJyxcclxuICAgICAgICBnZW5lcmF0ZUxvZ2luVXJsOiAnL29yZy9hdXRoL2dldC1sb2dpbi11cmwnLFxyXG4gICAgICAgIGdldFRva2VuVmFsaWRhdGlvblVybDogJy9vcmcvYXV0aC90b2tlbi12YWxpZGF0aW9uJyxcclxuICAgICAgfSxcclxuICAgICAgcGVybWlzc2lvbjoge1xyXG4gICAgICAgIHBlcm1pc3Npb25Sb2xlQnlJZDogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3JvbGUve2lkfScsXHJcbiAgICAgICAgcGFnZVBlcm1pc3Npb246ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9wYWdlJyxcclxuICAgICAgICBwYWdlTG9va3VwUGVybWlzc2lvbjogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3BhZ2UvbG9va3VwJ1xyXG4gICAgICB9LFxyXG4gICAgICBtaWNyb3N0cmF0ZWd5OiB7XHJcbiAgICAgICAgbG9naW46ICcvcGxhdGZvcm0vbWljcm9zdHJhdGVneS9sb2dpbicsXHJcbiAgICAgICAgZ2V0TGlicmFyeTogJy9wbGF0Zm9ybS9taWNyb3N0cmF0ZWd5L2xpYnJhcnknXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFJCQUNJTkZPIHtcclxuICBhcGlIb3N0ID0nJztcclxuICB0b2tlbktleSA9ICcnO1xyXG4gIG90aGVycz86IGFueTtcclxuICBvcmdJRD86IGFueTtcclxuICBlbnZpcm9ubWVudD86IEVudmlyb25tZW50O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XHJcbiAgbXN0clVzZXJuYW1lPzogc3RyaW5nO1xyXG4gIG1zdHJQYXNzd29yZD86IHN0cmluZztcclxuICBtc3RyVVJMPzogc3RyaW5nO1xyXG4gIG1zdHJQcm9qZWN0SUQ/OiBzdHJpbmc7XHJcbiAgYXBwbGljYXRpb25pZD86IHN0cmluZztcclxuICBwcmlvcml0eT86IHN0cmluZ1xyXG59XHJcblxyXG4iXX0=