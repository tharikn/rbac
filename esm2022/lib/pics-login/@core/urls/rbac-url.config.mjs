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
            saveUserConfig: '/user/saveUserPreference'
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
            getPermissionsTree: '/access-control/permission/application/{applicationid}'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2xvZ2luL3NyYy9saWIvcGljcy1sb2dpbi9AY29yZS91cmxzL3JiYWMtdXJsLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sVUFBVTtJQUNkLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDdkIsSUFBSSxFQUFFO1lBQ0osY0FBYyxFQUFFLHNCQUFzQjtZQUN0QyxVQUFVLEVBQUUsNkJBQTZCO1lBQ3pDLGNBQWMsRUFBRSw0QkFBNEI7WUFDNUMsY0FBYyxFQUFFLHNCQUFzQjtZQUN0QyxhQUFhLEVBQUUsMkNBQTJDO1lBQzFELE9BQU8sRUFBRSxVQUFVO1NBQ3BCO0tBQ0YsQ0FBQzs7QUFHSixNQUFNLE9BQU8sVUFBVTtJQUNkLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDdkIsSUFBSSxFQUFFO1lBQ0osY0FBYyxFQUFFLFdBQVc7WUFDM0Isd0JBQXdCLEVBQUUscUNBQXFDO1lBQy9ELGFBQWEsRUFBRSx5REFBeUQ7WUFDeEUsWUFBWSxFQUFFLG9CQUFvQjtZQUNsQyxVQUFVLEVBQUUsa0JBQWtCO1lBQzlCLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsZUFBZSxFQUFFLDJCQUEyQjtZQUM1QyxpQkFBaUIsRUFBRSx5QkFBeUI7WUFDNUMsY0FBYyxFQUFFLDBCQUEwQjtTQUMzQztRQUNELFFBQVEsRUFBRTtZQUNSLGVBQWUsRUFBRSxlQUFlO1lBQ2hDLGtCQUFrQixFQUFFLHNCQUFzQjtZQUMxQyxlQUFlLEVBQUUsOEJBQThCO1NBQ2hEO0tBQ0YsQ0FBQTs7QUFFSCxNQUFNLE9BQU8sZ0JBQWdCO0lBQ3BCLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDdkIsV0FBVyxFQUFFO1lBQ1gscUJBQXFCLEVBQUUsMEJBQTBCO1lBQ2pELGlCQUFpQixFQUFFLDhDQUE4QztZQUNqRSxT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TSxDQUFPO0lBQ2IsS0FBSyxDQUFPO0lBQ1osV0FBVyxDQUFlO0NBQzNCO0FBQ0QsTUFBTSxPQUFPLFdBQVc7SUFDdEIsWUFBWSxDQUFVO0lBQ3RCLFlBQVksQ0FBVTtJQUN0QixPQUFPLENBQVU7SUFDakIsYUFBYSxDQUFVO0lBQ3ZCLGFBQWEsQ0FBVTtJQUN2QixRQUFRLENBQVM7Q0FDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUm9sZUNvbmZpZyB7XHJcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludCA9IHtcclxuICAgIHJvbGU6IHtcclxuICAgICAgZ2V0QWxsVXNlclJvbGU6ICcvYWNjZXNzLWNvbnRyb2wvcm9sZScsXHJcbiAgICAgIGNyZWF0ZVJvbGU6ICcvYWNjZXNzLWNvbnRyb2wvcm9sZS9jcmVhdGUnLFxyXG4gICAgICBnZXRMYW5kaW5nUGFnZTogJy9wbGF0Zm9ybS9tZW51L2FwcGxpY2F0aW9uJyxcclxuICAgICAgYWRkUG9saWN5R3JvdXA6ICcvYWNjZXNzLWNvbnRyb2wvcm9sZScsXHJcbiAgICAgIGdldEFsbE9yZ1JvbGU6ICcvYWNjZXNzLWNvbnRyb2wvcm9sZS9vcmdhbml6YXRpb24ve29yZ2lkfScsXHJcbiAgICAgIGRvc3NpZXI6ICcvZG9zc2llcidcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlckNvbmZpZyB7XHJcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludCA9IHtcclxuICAgIFVzZXI6IHtcclxuICAgICAgZ2V0QWxsVXNlckxpc3Q6ICcvb3JnL3VzZXInLFxyXG4gICAgICBnZXRBbGxVc2VyQWN0aXZlSW5hY3RpdmU6ICcvb3JnL3VzZXI/aW5jbHVkZUluYWN0aXZlVXNlcnM9dHJ1ZScsXHJcbiAgICAgIGdldFVzZXJDb25maWc6ICcvb3JnL3VzZXIvZ2V0VXNlclByZWZlcmVuY2UvVVNFUl9USEVNRV9QUkVGRVJFTkNFUy97aWR9JyxcclxuICAgICAgYWN0aXZhdGVVc2VyOiAnL29yZy91c2VyL2FjdGl2YXRlJyxcclxuICAgICAgY3JlYXRlVXNlcjogJy9vcmcvdXNlci9jcmVhdGUnLFxyXG4gICAgICB1c2VyUm9sZTogJy9vcmcvdXNlci9yb2xlJyxcclxuICAgICAgbWFuYWdlbWVudGdyb3VwOiAnL29yZy90ZWFtL21hbmFnZW1lbnRncm91cCcsXHJcbiAgICAgIGdldEFsbFVzZXJPcmdMaXN0OiAnL29yZy91c2VyL29yZ2FuaXphdGlvbi8nLFxyXG4gICAgICBzYXZlVXNlckNvbmZpZzogJy91c2VyL3NhdmVVc2VyUHJlZmVyZW5jZSdcclxuICAgIH0sXHJcbiAgICBQcm92aWRlcjoge1xyXG4gICAgICBnZXRQcm92aWRlckxpc3Q6ICcvcmVmL3Byb3ZpZGVyJyxcclxuICAgICAgc2VhcmNoUHJvdmlkZXJMaXN0OiAnL3JlZi9wcm92aWRlci9zZWFyY2gnLFxyXG4gICAgICBhZGRQcm92aWRlclVzZXI6ICcvcmVmL3Byb3ZpZGVyL2NyZWF0ZS9hY2NvdW50J1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgY2xhc3MgQXR0YWNobWVudENvbmZpZyB7XHJcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludCA9IHtcclxuICAgIEF0dGFjaG1lbnRzOiB7XHJcbiAgICAgIEdldEF0dGFjaG1lbnRSZWZlcnJhbDogJy9yZWYvYXR0YWNobWVudC9yZWZlcnJhbCcsXHJcbiAgICAgIEdldENhdGVnb3J5TG9va3VwOiAnL3BsYXRmb3JtL21hc3Rlci9sb29rdXAvbG9va3VwYnljYXRlZ29yeW5hbWUnLFxyXG4gICAgICBVcGxvYWRLZXk6ICcvY29tbW9uL2ZpbGVzL3VwbG9hZC1rZXknLFxyXG4gICAgICBEb3dubG9hZEtleTogJy9jb21tb24vZmlsZXMvZG93bmxvYWQta2V5JyxcclxuICAgICAgUG9zdEF0dGFjaG1lbnQ6ICcvcmVmL2F0dGFjaG1lbnQvY3JlYXRlJyxcclxuICAgICAgUHV0QXR0YWNobWVudDogJy9yZWYvYXR0YWNobWVudCdcclxuICAgIH1cclxuICB9O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBQb2xpY3lHcm91cENvbmZpZyB7XHJcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludCA9IHtcclxuICAgIHBvbGljeUdyb3VwOiB7XHJcbiAgICAgIGdldFBvbGljeUdyb3VwTGlzdDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BvbGljeUdyb3VwJyxcclxuICAgICAgZ2V0QWxsUG9saWN5R3JvdXBMaXN0OiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5R3JvdXAvYWxsJyxcclxuICAgICAgY3JlYXRlUG9saWN5R3JvdXA6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wb2xpY3lHcm91cCcsXHJcbiAgICAgIGdldE9yZ1BvbGljeUdyb3VwczogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BvbGljeUdyb3VwL29yZ2FuaXphdGlvbi97b3JnYW5pemF0aW9uaWR9J1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25zVVJMIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50cyA9IHtcclxuICAgIHBlcm1pc3Npb246IHtcclxuICAgICAgcGVybWlzc2lvblJvbGVCeUlkOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vcm9sZS97aWR9JyxcclxuICAgICAgcGFnZVBlcm1pc3Npb246ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9wYWdlJyxcclxuICAgICAgZ2V0UGVybWlzc2lvbjogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3tpZH0nLFxyXG4gICAgICBjcmVhdGVQZXJtaXNzaW9uOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vY3JlYXRlJyxcclxuICAgICAgdXBkYXRlRGVsZXRlUGVybWlzc2lvbjogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3twZXJtaXNzaW9uaWR9JyxcclxuICAgICAgZ2V0UGVybWlzc2lvblRyZWU6ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9wYWdlL3twYWdlaWR9L3twYXJlbnRpZH0nLFxyXG4gICAgICBnZXRQZXJtaXNzaW9uVHlwZXM6ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi90eXBlL3thcHBsaWNhdGlvbmlkfScsXHJcbiAgICAgIGFwcGxpY2F0aW9uUGVybWlzc2lvbnNUcmVlOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vYXBwbGljYXRpb24ve2FwcGxpY2F0aW9uaWR9J1xyXG4gICAgfSxcclxuICAgIHBhZ2U6IHtcclxuICAgICAgY3JlYXRlUGFnZTogJy9wbGF0Zm9ybS9tZW51L2NyZWF0ZScsXHJcbiAgICAgIHVwZGF0ZURlbGV0ZVBhZ2U6ICcvcGxhdGZvcm0vbWVudS97cGFnZWlkfScsXHJcbiAgICAgIEFsbFBhZ2VUcmVlOiAnL3BsYXRmb3JtL21lbnUvdHJlZS97YXBwbGljYXRpb25pZH0nXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5leHBvcnQgY2xhc3MgQWNjZXNzTWFuYWdlbWVudENvbmZpZyB7XHJcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludCA9IHtcclxuICAgIE9yZ2FuaXphdGlvbjoge1xyXG4gICAgICBnZXRPcmdhbml6YXRpb25MaXN0OiAnL29yZy9vcmdhbml6YXRpb24vYWxsJyxcclxuICAgICAgZ2V0T3JnYW5pemF0aW9uOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcGFnZS9vcmdhbml6YXRpb24ve29yZ0lkfT9yZXR1cm5Vc2VyUGFnZT1mYWxzZSZleGNsdWRlTm9BY3RpdmVWZXJzaW9uUGFnZXM9dHJ1ZSdcclxuICAgIH1cclxuICB9O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBNYXN0ZXJVUkwge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnRzID0ge1xyXG4gICAgbG9va3VwOiB7XHJcbiAgICAgIGNyZWF0ZUNhdGVnb3J5OiAnL3BsYXRmb3JtL21hc3Rlci9sb29rdXAvY2F0ZWdvcnknLFxyXG4gICAgICB1cGRhdGVEZWxldGVDYXRlZ29yeTogJy9wbGF0Zm9ybS9tYXN0ZXIvbG9va3VwL2NhdGVnb3J5L3tpZH0nLFxyXG4gICAgICBsb29rdXA6ICcvcGxhdGZvcm0vbWFzdGVyL2xvb2t1cC97aWR9JyxcclxuICAgICAgY3JlYXRlTG9va3VwOiAnL3BsYXRmb3JtL21hc3Rlci9sb29rdXAnLFxyXG4gICAgICBnZXRQZXJtaXNzaW9uUm9sZUJ5SWQ6ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9yb2xlL3tpZH0nLFxyXG4gICAgICBnZXRBbGxDYXRlZ29yeVRyZWU6ICcvcGxhdGZvcm0vbWFzdGVyL2xvb2t1cC9jYXRlZ29yeS90cmVlL3thcHBsaWNhdGlvbmlkfScsXHJcbiAgICAgIGdldExvb2t1cFRyZWU6ICcvcGxhdGZvcm0vbWFzdGVyL2xvb2t1cC90cmVlL3tjYXRlZ29yeWlkfScsXHJcbiAgICAgIGdldFBlcm1pc3Npb25zVHJlZTogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL2FwcGxpY2F0aW9uL3thcHBsaWNhdGlvbmlkfSdcclxuICAgIH1cclxuICB9O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBBdXRoVVJMIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50cyA9IHtcclxuICAgIGF1dGg6IHtcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIGNvbmZvcm1NYWlsOiAnL29yZy9hdXRoL2ZvcmdvdC1wYXNzd29yZCcsXHJcbiAgICAgICAgY2hhbmdlUGFzc3dvcmQ6ICcvb3JnL2F1dGgvZm9yZ290LXBhc3N3b3JkLXZlcmlmaWNhdGlvbicsXHJcbiAgICAgICAgbG9naW46ICcvb3JnL2F1dGgvbG9naW4nLFxyXG4gICAgICAgIHJlZnJlc2hUb2tlbjogJy9vcmcvYXV0aC9yZWZyZXNoLXRva2VuJyxcclxuICAgICAgICBsb2dvdXQ6ICcvb3JnL2F1dGgvbG9nb3V0JyxcclxuICAgICAgICB1c2VySW5mbzogJy9vcmcvdXNlci9wYWdlL2xpc3QnLFxyXG4gICAgICAgIHVzZXJSb2xlOiAnL29yZy91c2VyL3tpZH0nLFxyXG4gICAgICAgIHJvdXRlVG9EeW5hbWljUGFnZTogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BhZ2Uvb3JnYW5pemF0aW9uL3tvcmdpZH0/cmV0dXJuVXNlclBhZ2U9dHJ1ZSZleGNsdWRlTm9BY3RpdmVWZXJzaW9uUGFnZXM9dHJ1ZScsXHJcbiAgICAgICAgYXV0aE1lOiAnL29yZy9hdXRoL21lJyxcclxuICAgICAgICByZXNldFBhc3N3b3JkOiAnL29yZy91c2VyL3Jlc2V0LXBhc3N3b3JkJyxcclxuICAgICAgICBvcmdMaXN0OiAnL29yZy9tYW5hZ2VtZW50LWdyb3VwL29yZ2FuaXphdGlvbi90cmVlJyxcclxuICAgICAgICBub3RpZmljYXRpb246ICcvd29ya2VyL25vdGlmaWNhdGlvbicsXHJcbiAgICAgICAgd29ya2VyQXZhaWxhYmlsaXR5OiAnL3dvcmtlci91cGRhdGVBdmFpbGFibGl0eScsXHJcbiAgICAgICAgZ2V0V29ya2VyQXZhaWxhYmlsaXR5OiAnL3dvcmtlci9nZXRCeUN1cnJlbnRVc2VyJyxcclxuICAgICAgICB1c2VyVmFsaWRhdGU6ICcvb3JnL2F1dGgvdXNlci12YWxpZGF0ZScsXHJcbiAgICAgICAgZ2VuZXJhdGVMb2dpblVybDogJy9vcmcvYXV0aC9nZXQtbG9naW4tdXJsJyxcclxuICAgICAgICBnZXRUb2tlblZhbGlkYXRpb25Vcmw6ICcvb3JnL2F1dGgvdG9rZW4tdmFsaWRhdGlvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHBlcm1pc3Npb246IHtcclxuICAgICAgICBwZXJtaXNzaW9uUm9sZUJ5SWQ6ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9yb2xlL3tpZH0nLFxyXG4gICAgICAgIHBhZ2VQZXJtaXNzaW9uOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vcGFnZScsXHJcbiAgICAgICAgcGFnZUxvb2t1cFBlcm1pc3Npb246ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9wYWdlL2xvb2t1cCdcclxuICAgICAgfSxcclxuICAgICAgbWljcm9zdHJhdGVneToge1xyXG4gICAgICAgIGxvZ2luOiAnL3BsYXRmb3JtL21pY3Jvc3RyYXRlZ3kvbG9naW4nLFxyXG4gICAgICAgIGdldExpYnJhcnk6ICcvcGxhdGZvcm0vbWljcm9zdHJhdGVneS9saWJyYXJ5J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBSQkFDSU5GTyB7XHJcbiAgYXBpSG9zdCA9Jyc7XHJcbiAgdG9rZW5LZXkgPSAnJztcclxuICBvdGhlcnM/OiBhbnk7XHJcbiAgb3JnSUQ/OiBhbnk7XHJcbiAgZW52aXJvbm1lbnQ/OiBFbnZpcm9ubWVudDtcclxufVxyXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xyXG4gIG1zdHJVc2VybmFtZT86IHN0cmluZztcclxuICBtc3RyUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgbXN0clVSTD86IHN0cmluZztcclxuICBtc3RyUHJvamVjdElEPzogc3RyaW5nO1xyXG4gIGFwcGxpY2F0aW9uaWQ/OiBzdHJpbmc7XHJcbiAgcHJpb3JpdHk/OiBzdHJpbmdcclxufVxyXG5cclxuIl19