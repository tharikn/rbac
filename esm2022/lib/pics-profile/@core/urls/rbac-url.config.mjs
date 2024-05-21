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
    optinPapperless;
}
export class Environment {
    mstrUsername;
    mstrPassword;
    mstrURL;
    mstrProjectID;
    applicationid;
    priority;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3Byb2ZpbGUvc3JjL2xpYi9waWNzLXByb2ZpbGUvQGNvcmUvdXJscy9yYmFjLXVybC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLFVBQVU7SUFDZCxNQUFNLENBQUMsUUFBUSxHQUFHO1FBQ3ZCLElBQUksRUFBRTtZQUNKLGNBQWMsRUFBRSxzQkFBc0I7WUFDdEMsVUFBVSxFQUFFLDZCQUE2QjtZQUN6QyxjQUFjLEVBQUUsNEJBQTRCO1lBQzVDLGNBQWMsRUFBRSxzQkFBc0I7WUFDdEMsYUFBYSxFQUFFLDJDQUEyQztZQUMxRCxPQUFPLEVBQUUsVUFBVTtTQUNwQjtLQUNGLENBQUM7O0FBR0osTUFBTSxPQUFPLFVBQVU7SUFDZCxNQUFNLENBQUMsUUFBUSxHQUFHO1FBQ3ZCLElBQUksRUFBRTtZQUNKLGNBQWMsRUFBRSxXQUFXO1lBQzNCLHdCQUF3QixFQUFFLHFDQUFxQztZQUMvRCxhQUFhLEVBQUUseURBQXlEO1lBQ3hFLFlBQVksRUFBRSxvQkFBb0I7WUFDbEMsVUFBVSxFQUFFLGtCQUFrQjtZQUM5QixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLGVBQWUsRUFBRSwyQkFBMkI7WUFDNUMsaUJBQWlCLEVBQUUseUJBQXlCO1lBQzVDLGNBQWMsRUFBRSw4QkFBOEI7U0FDL0M7UUFDRCxRQUFRLEVBQUU7WUFDUixlQUFlLEVBQUUsZUFBZTtZQUNoQyxrQkFBa0IsRUFBRSxzQkFBc0I7WUFDMUMsZUFBZSxFQUFFLDhCQUE4QjtTQUNoRDtLQUNGLENBQUE7O0FBRUgsTUFBTSxPQUFPLGdCQUFnQjtJQUNwQixNQUFNLENBQUMsUUFBUSxHQUFHO1FBQ3ZCLFdBQVcsRUFBRTtZQUNYLHFCQUFxQixFQUFFLDBCQUEwQjtZQUNqRCxpQkFBaUIsRUFBRSw4QkFBOEI7WUFD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dEIsT0FBTyxDQUFVO0lBQ2pCLGFBQWEsQ0FBVTtJQUN2QixhQUFhLENBQVU7SUFDdkIsUUFBUSxDQUFTO0NBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFJvbGVDb25maWcge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnQgPSB7XHJcbiAgICByb2xlOiB7XHJcbiAgICAgIGdldEFsbFVzZXJSb2xlOiAnL2FjY2Vzcy1jb250cm9sL3JvbGUnLFxyXG4gICAgICBjcmVhdGVSb2xlOiAnL2FjY2Vzcy1jb250cm9sL3JvbGUvY3JlYXRlJyxcclxuICAgICAgZ2V0TGFuZGluZ1BhZ2U6ICcvcGxhdGZvcm0vbWVudS9hcHBsaWNhdGlvbicsXHJcbiAgICAgIGFkZFBvbGljeUdyb3VwOiAnL2FjY2Vzcy1jb250cm9sL3JvbGUnLFxyXG4gICAgICBnZXRBbGxPcmdSb2xlOiAnL2FjY2Vzcy1jb250cm9sL3JvbGUvb3JnYW5pemF0aW9uL3tvcmdpZH0nLFxyXG4gICAgICBkb3NzaWVyOiAnL2Rvc3NpZXInXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJDb25maWcge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnQgPSB7XHJcbiAgICBVc2VyOiB7XHJcbiAgICAgIGdldEFsbFVzZXJMaXN0OiAnL29yZy91c2VyJyxcclxuICAgICAgZ2V0QWxsVXNlckFjdGl2ZUluYWN0aXZlOiAnL29yZy91c2VyP2luY2x1ZGVJbmFjdGl2ZVVzZXJzPXRydWUnLFxyXG4gICAgICBnZXRVc2VyQ29uZmlnOiAnL29yZy91c2VyL2dldFVzZXJQcmVmZXJlbmNlL1VTRVJfVEhFTUVfUFJFRkVSRU5DRVMve2lkfScsXHJcbiAgICAgIGFjdGl2YXRlVXNlcjogJy9vcmcvdXNlci9hY3RpdmF0ZScsXHJcbiAgICAgIGNyZWF0ZVVzZXI6ICcvb3JnL3VzZXIvY3JlYXRlJyxcclxuICAgICAgdXNlclJvbGU6ICcvb3JnL3VzZXIvcm9sZScsXHJcbiAgICAgIG1hbmFnZW1lbnRncm91cDogJy9vcmcvdGVhbS9tYW5hZ2VtZW50Z3JvdXAnLFxyXG4gICAgICBnZXRBbGxVc2VyT3JnTGlzdDogJy9vcmcvdXNlci9vcmdhbml6YXRpb24vJyxcclxuICAgICAgc2F2ZVVzZXJDb25maWc6ICcvb3JnL3VzZXIvc2F2ZVVzZXJQcmVmZXJlbmNlJ1xyXG4gICAgfSxcclxuICAgIFByb3ZpZGVyOiB7XHJcbiAgICAgIGdldFByb3ZpZGVyTGlzdDogJy9yZWYvcHJvdmlkZXInLFxyXG4gICAgICBzZWFyY2hQcm92aWRlckxpc3Q6ICcvcmVmL3Byb3ZpZGVyL3NlYXJjaCcsXHJcbiAgICAgIGFkZFByb3ZpZGVyVXNlcjogJy9yZWYvcHJvdmlkZXIvY3JlYXRlL2FjY291bnQnXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBdHRhY2htZW50Q29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgQXR0YWNobWVudHM6IHtcclxuICAgICAgR2V0QXR0YWNobWVudFJlZmVycmFsOiAnL3JlZi9hdHRhY2htZW50L3JlZmVycmFsJyxcclxuICAgICAgR2V0Q2F0ZWdvcnlMb29rdXA6ICcvbG9va3VwL2xvb2t1cGJ5Y2F0ZWdvcnluYW1lJyxcclxuICAgICAgVXBsb2FkS2V5OiAnL2NvbW1vbi9maWxlcy91cGxvYWQta2V5JyxcclxuICAgICAgRG93bmxvYWRLZXk6ICcvY29tbW9uL2ZpbGVzL2Rvd25sb2FkLWtleScsXHJcbiAgICAgIFBvc3RBdHRhY2htZW50OiAnL3JlZi9hdHRhY2htZW50L2NyZWF0ZScsXHJcbiAgICAgIFB1dEF0dGFjaG1lbnQ6ICcvcmVmL2F0dGFjaG1lbnQnXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5leHBvcnQgY2xhc3MgUG9saWN5R3JvdXBDb25maWcge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnQgPSB7XHJcbiAgICBwb2xpY3lHcm91cDoge1xyXG4gICAgICBnZXRQb2xpY3lHcm91cExpc3Q6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wb2xpY3lHcm91cCcsXHJcbiAgICAgIGdldEFsbFBvbGljeUdyb3VwTGlzdDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BvbGljeUdyb3VwL2FsbCcsXHJcbiAgICAgIGNyZWF0ZVBvbGljeUdyb3VwOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5R3JvdXAnLFxyXG4gICAgICBnZXRPcmdQb2xpY3lHcm91cHM6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wb2xpY3lHcm91cC9vcmdhbml6YXRpb24ve29yZ2FuaXphdGlvbmlkfSdcclxuICAgIH1cclxuICB9O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uc1VSTCB7XHJcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludHMgPSB7XHJcbiAgICBwZXJtaXNzaW9uOiB7XHJcbiAgICAgIHBlcm1pc3Npb25Sb2xlQnlJZDogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3JvbGUve2lkfScsXHJcbiAgICAgIHBhZ2VQZXJtaXNzaW9uOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vcGFnZScsXHJcbiAgICAgIGdldFBlcm1pc3Npb246ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi97aWR9JyxcclxuICAgICAgY3JlYXRlUGVybWlzc2lvbjogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL2NyZWF0ZScsXHJcbiAgICAgIHVwZGF0ZURlbGV0ZVBlcm1pc3Npb246ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi97cGVybWlzc2lvbmlkfScsXHJcbiAgICAgIGdldFBlcm1pc3Npb25UcmVlOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vcGFnZS97cGFnZWlkfS97cGFyZW50aWR9JyxcclxuICAgICAgZ2V0UGVybWlzc2lvblR5cGVzOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vdHlwZS97YXBwbGljYXRpb25pZH0nLFxyXG4gICAgICBhcHBsaWNhdGlvblBlcm1pc3Npb25zVHJlZTogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL2FwcGxpY2F0aW9uL3thcHBsaWNhdGlvbmlkfSdcclxuICAgIH0sXHJcbiAgICBwYWdlOiB7XHJcbiAgICAgIGNyZWF0ZVBhZ2U6ICcvcGxhdGZvcm0vbWVudS9jcmVhdGUnLFxyXG4gICAgICB1cGRhdGVEZWxldGVQYWdlOiAnL3BsYXRmb3JtL21lbnUve3BhZ2VpZH0nLFxyXG4gICAgICBBbGxQYWdlVHJlZTogJy9wbGF0Zm9ybS9tZW51L3RyZWUve2FwcGxpY2F0aW9uaWR9J1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFjY2Vzc01hbmFnZW1lbnRDb25maWcge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnQgPSB7XHJcbiAgICBPcmdhbml6YXRpb246IHtcclxuICAgICAgZ2V0T3JnYW5pemF0aW9uTGlzdDogJy9vcmcvb3JnYW5pemF0aW9uL2FsbCcsXHJcbiAgICAgIGdldE9yZ2FuaXphdGlvbjogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BhZ2Uvb3JnYW5pemF0aW9uL3tvcmdJZH0/cmV0dXJuVXNlclBhZ2U9ZmFsc2UmZXhjbHVkZU5vQWN0aXZlVmVyc2lvblBhZ2VzPXRydWUnXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5leHBvcnQgY2xhc3MgTWFzdGVyVVJMIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50cyA9IHtcclxuICAgIGxvb2t1cDoge1xyXG4gICAgICBjcmVhdGVDYXRlZ29yeTogJy9wbGF0Zm9ybS9tYXN0ZXIvbG9va3VwL2NhdGVnb3J5JyxcclxuICAgICAgdXBkYXRlRGVsZXRlQ2F0ZWdvcnk6ICcvcGxhdGZvcm0vbWFzdGVyL2xvb2t1cC9jYXRlZ29yeS97aWR9JyxcclxuICAgICAgbG9va3VwOiAnL3BsYXRmb3JtL21hc3Rlci9sb29rdXAve2lkfScsXHJcbiAgICAgIGNyZWF0ZUxvb2t1cDogJy9wbGF0Zm9ybS9tYXN0ZXIvbG9va3VwJyxcclxuICAgICAgZ2V0UGVybWlzc2lvblJvbGVCeUlkOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vcm9sZS97aWR9JyxcclxuICAgICAgZ2V0QWxsQ2F0ZWdvcnlUcmVlOiAnL3BsYXRmb3JtL21hc3Rlci9sb29rdXAvY2F0ZWdvcnkvdHJlZS97YXBwbGljYXRpb25pZH0nLFxyXG4gICAgICBnZXRMb29rdXBUcmVlOiAnL3BsYXRmb3JtL21hc3Rlci9sb29rdXAvdHJlZS97Y2F0ZWdvcnlpZH0nLFxyXG4gICAgICBnZXRQZXJtaXNzaW9uc1RyZWU6ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9hcHBsaWNhdGlvbi97YXBwbGljYXRpb25pZH0nLFxyXG4gICAgICBHZXRDYXRlZ29yeUxvb2t1cDogJy9wbGF0Zm9ybS9tYXN0ZXIvbG9va3VwL2xvb2t1cGJ5Y2F0ZWdvcnluYW1lJ1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGNsYXNzIEF1dGhVUkwge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnRzID0ge1xyXG4gICAgYXV0aDoge1xyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgY29uZm9ybU1haWw6ICcvb3JnL2F1dGgvZm9yZ290LXBhc3N3b3JkJyxcclxuICAgICAgICBjaGFuZ2VQYXNzd29yZDogJy9vcmcvYXV0aC9mb3Jnb3QtcGFzc3dvcmQtdmVyaWZpY2F0aW9uJyxcclxuICAgICAgICBsb2dpbjogJy9vcmcvYXV0aC9sb2dpbicsXHJcbiAgICAgICAgcmVmcmVzaFRva2VuOiAnL29yZy9hdXRoL3JlZnJlc2gtdG9rZW4nLFxyXG4gICAgICAgIGxvZ291dDogJy9vcmcvYXV0aC9sb2dvdXQnLFxyXG4gICAgICAgIHVzZXJJbmZvOiAnL29yZy91c2VyL3BhZ2UvbGlzdCcsXHJcbiAgICAgICAgdXNlclJvbGU6ICcvb3JnL3VzZXIve2lkfScsXHJcbiAgICAgICAgcm91dGVUb0R5bmFtaWNQYWdlOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcGFnZS9vcmdhbml6YXRpb24ve29yZ2lkfT9yZXR1cm5Vc2VyUGFnZT10cnVlJmV4Y2x1ZGVOb0FjdGl2ZVZlcnNpb25QYWdlcz10cnVlJyxcclxuICAgICAgICBhdXRoTWU6ICcvb3JnL2F1dGgvbWUnLFxyXG4gICAgICAgIHJlc2V0UGFzc3dvcmQ6ICcvb3JnL3VzZXIvcmVzZXQtcGFzc3dvcmQnLFxyXG4gICAgICAgIG9yZ0xpc3Q6ICcvb3JnL21hbmFnZW1lbnQtZ3JvdXAvb3JnYW5pemF0aW9uL3RyZWUnLFxyXG4gICAgICAgIG5vdGlmaWNhdGlvbjogJy93b3JrZXIvbm90aWZpY2F0aW9uJyxcclxuICAgICAgICB3b3JrZXJBdmFpbGFiaWxpdHk6ICcvd29ya2VyL3VwZGF0ZUF2YWlsYWJsaXR5JyxcclxuICAgICAgICBnZXRXb3JrZXJBdmFpbGFiaWxpdHk6ICcvd29ya2VyL2dldEJ5Q3VycmVudFVzZXInXHJcbiAgICAgIH0sXHJcbiAgICAgIHBlcm1pc3Npb246IHtcclxuICAgICAgICBwZXJtaXNzaW9uUm9sZUJ5SWQ6ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9yb2xlL3tpZH0nLFxyXG4gICAgICAgIHBhZ2VQZXJtaXNzaW9uOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vcGFnZScsXHJcbiAgICAgICAgcGFnZUxvb2t1cFBlcm1pc3Npb246ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9wYWdlL2xvb2t1cCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUkJBQ0lORk8ge1xyXG4gIGFwaUhvc3QgPScnO1xyXG4gIHRva2VuS2V5ID0gJyc7XHJcbiAgb3RoZXJzPzogYW55O1xyXG4gIG9yZ0lEPzogYW55O1xyXG4gIGVudmlyb25tZW50PzogRW52aXJvbm1lbnQ7XHJcbiAgb3B0aW5QYXBwZXJsZXNzPzpib29sZWFuIHwgdW5kZWZpbmVkO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XHJcbiAgbXN0clVzZXJuYW1lPzogc3RyaW5nO1xyXG4gIG1zdHJQYXNzd29yZD86IHN0cmluZztcclxuICBtc3RyVVJMPzogc3RyaW5nO1xyXG4gIG1zdHJQcm9qZWN0SUQ/OiBzdHJpbmc7XHJcbiAgYXBwbGljYXRpb25pZD86IHN0cmluZztcclxuICBwcmlvcml0eT86IHN0cmluZ1xyXG59XHJcblxyXG4iXX0=