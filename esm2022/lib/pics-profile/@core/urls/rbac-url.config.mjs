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
}
export class AttachmentConfig {
    static EndPoint = {
        Attachments: {
            GetAttachmentReferral: '/ref/attachment/referral',
            GetCategoryLookup: '/lookup/lookupbycategoryname',
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
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        }
    };
}
export class MasterURL {
    static EndPoints = {
        lookup: {
            createCategory: '/platform/master/lookup/category',
            updateDeleteCategory: '/platform/master/lookup/category/{id}',
            lookup: '/platform/master/lookup/{id}',
            createLookup: '/platform/master/lookup',
            getPermissionRoleById: '/access-control/permission/role/{id}',
            getAllCategoryTree: '/platform/master/lookup/category/tree/{applicationid}',
            getLookupTree: '/platform/master/lookup/tree/{categoryid}',
            getPermissionsTree: '/access-control/permission/application/{applicationid}',
            GetCategoryLookup: '/platform/master/lookup/lookupbycategoryname'
        }
    };
}
export class AuthURL {
    static EndPoints = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3Byb2ZpbGUvc3JjL2xpYi9waWNzLXByb2ZpbGUvQGNvcmUvdXJscy9yYmFjLXVybC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLFVBQVU7SUFDZCxNQUFNLENBQUMsUUFBUSxHQUFHO1FBQ3ZCLElBQUksRUFBRTtZQUNKLGNBQWMsRUFBRSxzQkFBc0I7WUFDdEMsVUFBVSxFQUFFLDZCQUE2QjtZQUN6QyxjQUFjLEVBQUUsNEJBQTRCO1lBQzVDLGNBQWMsRUFBRSxzQkFBc0I7WUFDdEMsYUFBYSxFQUFFLDJDQUEyQztZQUMxRCxPQUFPLEVBQUUsVUFBVTtTQUNwQjtLQUNGLENBQUM7O0FBR0osTUFBTSxPQUFPLFVBQVU7SUFDZCxNQUFNLENBQUMsUUFBUSxHQUFHO1FBQ3ZCLElBQUksRUFBRTtZQUNKLGNBQWMsRUFBRSxXQUFXO1lBQzNCLHdCQUF3QixFQUFFLHFDQUFxQztZQUMvRCxhQUFhLEVBQUUseURBQXlEO1lBQ3hFLFlBQVksRUFBRSxvQkFBb0I7WUFDbEMsVUFBVSxFQUFFLGtCQUFrQjtZQUM5QixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLGVBQWUsRUFBRSwyQkFBMkI7WUFDNUMsaUJBQWlCLEVBQUUseUJBQXlCO1lBQzVDLGNBQWMsRUFBRSw4QkFBOEI7U0FDL0M7UUFDRCxRQUFRLEVBQUU7WUFDUixlQUFlLEVBQUUsZUFBZTtZQUNoQyxrQkFBa0IsRUFBRSxzQkFBc0I7WUFDMUMsZUFBZSxFQUFFLDhCQUE4QjtTQUNoRDtLQUNGLENBQUE7O0FBRUgsTUFBTSxPQUFPLGdCQUFnQjtJQUNwQixNQUFNLENBQUMsUUFBUSxHQUFHO1FBQ3ZCLFdBQVcsRUFBRTtZQUNYLHFCQUFxQixFQUFFLDBCQUEwQjtZQUNqRCxpQkFBaUIsRUFBRSw4QkFBOEI7WUFD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QixhQUFhLENBQVU7SUFDdkIsYUFBYSxDQUFVO0lBQ3ZCLFFBQVEsQ0FBUztDQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSb2xlQ29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgcm9sZToge1xyXG4gICAgICBnZXRBbGxVc2VyUm9sZTogJy9hY2Nlc3MtY29udHJvbC9yb2xlJyxcclxuICAgICAgY3JlYXRlUm9sZTogJy9hY2Nlc3MtY29udHJvbC9yb2xlL2NyZWF0ZScsXHJcbiAgICAgIGdldExhbmRpbmdQYWdlOiAnL3BsYXRmb3JtL21lbnUvYXBwbGljYXRpb24nLFxyXG4gICAgICBhZGRQb2xpY3lHcm91cDogJy9hY2Nlc3MtY29udHJvbC9yb2xlJyxcclxuICAgICAgZ2V0QWxsT3JnUm9sZTogJy9hY2Nlc3MtY29udHJvbC9yb2xlL29yZ2FuaXphdGlvbi97b3JnaWR9JyxcclxuICAgICAgZG9zc2llcjogJy9kb3NzaWVyJ1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyQ29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgVXNlcjoge1xyXG4gICAgICBnZXRBbGxVc2VyTGlzdDogJy9vcmcvdXNlcicsXHJcbiAgICAgIGdldEFsbFVzZXJBY3RpdmVJbmFjdGl2ZTogJy9vcmcvdXNlcj9pbmNsdWRlSW5hY3RpdmVVc2Vycz10cnVlJyxcclxuICAgICAgZ2V0VXNlckNvbmZpZzogJy9vcmcvdXNlci9nZXRVc2VyUHJlZmVyZW5jZS9VU0VSX1RIRU1FX1BSRUZFUkVOQ0VTL3tpZH0nLFxyXG4gICAgICBhY3RpdmF0ZVVzZXI6ICcvb3JnL3VzZXIvYWN0aXZhdGUnLFxyXG4gICAgICBjcmVhdGVVc2VyOiAnL29yZy91c2VyL2NyZWF0ZScsXHJcbiAgICAgIHVzZXJSb2xlOiAnL29yZy91c2VyL3JvbGUnLFxyXG4gICAgICBtYW5hZ2VtZW50Z3JvdXA6ICcvb3JnL3RlYW0vbWFuYWdlbWVudGdyb3VwJyxcclxuICAgICAgZ2V0QWxsVXNlck9yZ0xpc3Q6ICcvb3JnL3VzZXIvb3JnYW5pemF0aW9uLycsXHJcbiAgICAgIHNhdmVVc2VyQ29uZmlnOiAnL29yZy91c2VyL3NhdmVVc2VyUHJlZmVyZW5jZSdcclxuICAgIH0sXHJcbiAgICBQcm92aWRlcjoge1xyXG4gICAgICBnZXRQcm92aWRlckxpc3Q6ICcvcmVmL3Byb3ZpZGVyJyxcclxuICAgICAgc2VhcmNoUHJvdmlkZXJMaXN0OiAnL3JlZi9wcm92aWRlci9zZWFyY2gnLFxyXG4gICAgICBhZGRQcm92aWRlclVzZXI6ICcvcmVmL3Byb3ZpZGVyL2NyZWF0ZS9hY2NvdW50J1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgY2xhc3MgQXR0YWNobWVudENvbmZpZyB7XHJcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludCA9IHtcclxuICAgIEF0dGFjaG1lbnRzOiB7XHJcbiAgICAgIEdldEF0dGFjaG1lbnRSZWZlcnJhbDogJy9yZWYvYXR0YWNobWVudC9yZWZlcnJhbCcsXHJcbiAgICAgIEdldENhdGVnb3J5TG9va3VwOiAnL2xvb2t1cC9sb29rdXBieWNhdGVnb3J5bmFtZScsXHJcbiAgICAgIFVwbG9hZEtleTogJy9jb21tb24vZmlsZXMvdXBsb2FkLWtleScsXHJcbiAgICAgIERvd25sb2FkS2V5OiAnL2NvbW1vbi9maWxlcy9kb3dubG9hZC1rZXknLFxyXG4gICAgICBQb3N0QXR0YWNobWVudDogJy9yZWYvYXR0YWNobWVudC9jcmVhdGUnLFxyXG4gICAgICBQdXRBdHRhY2htZW50OiAnL3JlZi9hdHRhY2htZW50J1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGNsYXNzIFBvbGljeUdyb3VwQ29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgcG9saWN5R3JvdXA6IHtcclxuICAgICAgZ2V0UG9saWN5R3JvdXBMaXN0OiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5R3JvdXAnLFxyXG4gICAgICBnZXRBbGxQb2xpY3lHcm91cExpc3Q6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wb2xpY3lHcm91cC9hbGwnLFxyXG4gICAgICBjcmVhdGVQb2xpY3lHcm91cDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BvbGljeUdyb3VwJyxcclxuICAgICAgZ2V0T3JnUG9saWN5R3JvdXBzOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5R3JvdXAvb3JnYW5pemF0aW9uL3tvcmdhbml6YXRpb25pZH0nXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbnNVUkwge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnRzID0ge1xyXG4gICAgcGVybWlzc2lvbjoge1xyXG4gICAgICBwZXJtaXNzaW9uUm9sZUJ5SWQ6ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9yb2xlL3tpZH0nLFxyXG4gICAgICBwYWdlUGVybWlzc2lvbjogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3BhZ2UnLFxyXG4gICAgICBnZXRQZXJtaXNzaW9uOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24ve2lkfScsXHJcbiAgICAgIGNyZWF0ZVBlcm1pc3Npb246ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9jcmVhdGUnLFxyXG4gICAgICB1cGRhdGVEZWxldGVQZXJtaXNzaW9uOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24ve3Blcm1pc3Npb25pZH0nLFxyXG4gICAgICBnZXRQZXJtaXNzaW9uVHJlZTogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3BhZ2Uve3BhZ2VpZH0ve3BhcmVudGlkfScsXHJcbiAgICAgIGdldFBlcm1pc3Npb25UeXBlczogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3R5cGUve2FwcGxpY2F0aW9uaWR9JyxcclxuICAgICAgYXBwbGljYXRpb25QZXJtaXNzaW9uc1RyZWU6ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9hcHBsaWNhdGlvbi97YXBwbGljYXRpb25pZH0nXHJcbiAgICB9LFxyXG4gICAgcGFnZToge1xyXG4gICAgICBjcmVhdGVQYWdlOiAnL3BsYXRmb3JtL21lbnUvY3JlYXRlJyxcclxuICAgICAgdXBkYXRlRGVsZXRlUGFnZTogJy9wbGF0Zm9ybS9tZW51L3twYWdlaWR9JyxcclxuICAgICAgQWxsUGFnZVRyZWU6ICcvcGxhdGZvcm0vbWVudS90cmVlL3thcHBsaWNhdGlvbmlkfSdcclxuICAgIH1cclxuICB9O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgT3JnYW5pemF0aW9uOiB7XHJcbiAgICAgIGdldE9yZ2FuaXphdGlvbkxpc3Q6ICcvb3JnL29yZ2FuaXphdGlvbi9hbGwnLFxyXG4gICAgICBnZXRPcmdhbml6YXRpb246ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdlL29yZ2FuaXphdGlvbi97b3JnSWR9P3JldHVyblVzZXJQYWdlPWZhbHNlJmV4Y2x1ZGVOb0FjdGl2ZVZlcnNpb25QYWdlcz10cnVlJ1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGNsYXNzIE1hc3RlclVSTCB7XHJcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludHMgPSB7XHJcbiAgICBsb29rdXA6IHtcclxuICAgICAgY3JlYXRlQ2F0ZWdvcnk6ICcvcGxhdGZvcm0vbWFzdGVyL2xvb2t1cC9jYXRlZ29yeScsXHJcbiAgICAgIHVwZGF0ZURlbGV0ZUNhdGVnb3J5OiAnL3BsYXRmb3JtL21hc3Rlci9sb29rdXAvY2F0ZWdvcnkve2lkfScsXHJcbiAgICAgIGxvb2t1cDogJy9wbGF0Zm9ybS9tYXN0ZXIvbG9va3VwL3tpZH0nLFxyXG4gICAgICBjcmVhdGVMb29rdXA6ICcvcGxhdGZvcm0vbWFzdGVyL2xvb2t1cCcsXHJcbiAgICAgIGdldFBlcm1pc3Npb25Sb2xlQnlJZDogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3JvbGUve2lkfScsXHJcbiAgICAgIGdldEFsbENhdGVnb3J5VHJlZTogJy9wbGF0Zm9ybS9tYXN0ZXIvbG9va3VwL2NhdGVnb3J5L3RyZWUve2FwcGxpY2F0aW9uaWR9JyxcclxuICAgICAgZ2V0TG9va3VwVHJlZTogJy9wbGF0Zm9ybS9tYXN0ZXIvbG9va3VwL3RyZWUve2NhdGVnb3J5aWR9JyxcclxuICAgICAgZ2V0UGVybWlzc2lvbnNUcmVlOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vYXBwbGljYXRpb24ve2FwcGxpY2F0aW9uaWR9JyxcclxuICAgICAgR2V0Q2F0ZWdvcnlMb29rdXA6ICcvcGxhdGZvcm0vbWFzdGVyL2xvb2t1cC9sb29rdXBieWNhdGVnb3J5bmFtZSdcclxuICAgIH1cclxuICB9O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBBdXRoVVJMIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50cyA9IHtcclxuICAgIGF1dGg6IHtcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIGNvbmZvcm1NYWlsOiAnL29yZy9hdXRoL2ZvcmdvdC1wYXNzd29yZCcsXHJcbiAgICAgICAgY2hhbmdlUGFzc3dvcmQ6ICcvb3JnL2F1dGgvZm9yZ290LXBhc3N3b3JkLXZlcmlmaWNhdGlvbicsXHJcbiAgICAgICAgbG9naW46ICcvb3JnL2F1dGgvbG9naW4nLFxyXG4gICAgICAgIHJlZnJlc2hUb2tlbjogJy9vcmcvYXV0aC9yZWZyZXNoLXRva2VuJyxcclxuICAgICAgICBsb2dvdXQ6ICcvb3JnL2F1dGgvbG9nb3V0JyxcclxuICAgICAgICB1c2VySW5mbzogJy9vcmcvdXNlci9wYWdlL2xpc3QnLFxyXG4gICAgICAgIHVzZXJSb2xlOiAnL29yZy91c2VyL3tpZH0nLFxyXG4gICAgICAgIHJvdXRlVG9EeW5hbWljUGFnZTogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BhZ2Uvb3JnYW5pemF0aW9uL3tvcmdpZH0/cmV0dXJuVXNlclBhZ2U9dHJ1ZSZleGNsdWRlTm9BY3RpdmVWZXJzaW9uUGFnZXM9dHJ1ZScsXHJcbiAgICAgICAgYXV0aE1lOiAnL29yZy9hdXRoL21lJyxcclxuICAgICAgICByZXNldFBhc3N3b3JkOiAnL29yZy91c2VyL3Jlc2V0LXBhc3N3b3JkJyxcclxuICAgICAgICBvcmdMaXN0OiAnL29yZy9tYW5hZ2VtZW50LWdyb3VwL29yZ2FuaXphdGlvbi90cmVlJyxcclxuICAgICAgICBub3RpZmljYXRpb246ICcvd29ya2VyL25vdGlmaWNhdGlvbicsXHJcbiAgICAgICAgd29ya2VyQXZhaWxhYmlsaXR5OiAnL3dvcmtlci91cGRhdGVBdmFpbGFibGl0eScsXHJcbiAgICAgICAgZ2V0V29ya2VyQXZhaWxhYmlsaXR5OiAnL3dvcmtlci9nZXRCeUN1cnJlbnRVc2VyJ1xyXG4gICAgICB9LFxyXG4gICAgICBwZXJtaXNzaW9uOiB7XHJcbiAgICAgICAgcGVybWlzc2lvblJvbGVCeUlkOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vcm9sZS97aWR9JyxcclxuICAgICAgICBwYWdlUGVybWlzc2lvbjogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3BhZ2UnLFxyXG4gICAgICAgIHBhZ2VMb29rdXBQZXJtaXNzaW9uOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vcGFnZS9sb29rdXAnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFJCQUNJTkZPIHtcclxuICBhcGlIb3N0ID0nJztcclxuICB0b2tlbktleSA9ICcnO1xyXG4gIG90aGVycz86IGFueTtcclxuICBvcmdJRD86IGFueTtcclxuICBlbnZpcm9ubWVudD86IEVudmlyb25tZW50O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XHJcbiAgbXN0clVzZXJuYW1lPzogc3RyaW5nO1xyXG4gIG1zdHJQYXNzd29yZD86IHN0cmluZztcclxuICBtc3RyVVJMPzogc3RyaW5nO1xyXG4gIG1zdHJQcm9qZWN0SUQ/OiBzdHJpbmc7XHJcbiAgYXBwbGljYXRpb25pZD86IHN0cmluZztcclxuICBwcmlvcml0eT86IHN0cmluZ1xyXG59XHJcblxyXG4iXX0=