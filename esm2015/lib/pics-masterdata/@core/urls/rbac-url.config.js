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
        lookup: '/platform/master/lookup/update',
        createLookup: '/platform/master/lookup/add',
        getPermissionRoleById: '/access-control/permission/role/{id}',
        getAllCategoryTree: '/platform/master/lookup/category/tree/{applicationid}',
        getLookupTree: '/platform/master/lookup/tree/{categoryid}',
        getLookupByCategoryId: '/platform/master/lookup/list/{id}',
        getPermissionsTree: '/access-control/permission/application/{applicationid}'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL21hc3RlcmRhdGEvc3JjL2xpYi9waWNzLW1hc3RlcmRhdGEvQGNvcmUvdXJscy9yYmFjLXVybC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLFVBQVU7O0FBQ1AsbUJBQVEsR0FBRztJQUN2QixJQUFJLEVBQUU7UUFDSixjQUFjLEVBQUUsc0JBQXNCO1FBQ3RDLFVBQVUsRUFBRSw2QkFBNkI7UUFDekMsY0FBYyxFQUFFLDRCQUE0QjtRQUM1QyxjQUFjLEVBQUUsc0JBQXNCO1FBQ3RDLGFBQWEsRUFBRSwyQ0FBMkM7UUFDMUQsT0FBTyxFQUFFLFVBQVU7S0FDcEI7Q0FDRixDQUFDO0FBR0osTUFBTSxPQUFPLFVBQVU7O0FBQ1AsbUJBQVEsR0FBRztJQUN2QixJQUFJLEVBQUU7UUFDSixjQUFjLEVBQUUsV0FBVztRQUMzQix3QkFBd0IsRUFBRSxxQ0FBcUM7UUFDL0QsWUFBWSxFQUFFLG9CQUFvQjtRQUNsQyxVQUFVLEVBQUUsa0JBQWtCO1FBQzlCLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsZUFBZSxFQUFFLDJCQUEyQjtRQUM1QyxpQkFBaUIsRUFBRSx5QkFBeUI7S0FDN0M7SUFDRCxRQUFRLEVBQUU7UUFDUixlQUFlLEVBQUUsZUFBZTtRQUNoQyxrQkFBa0IsRUFBRSxzQkFBc0I7UUFDMUMsZUFBZSxFQUFFLDhCQUE4QjtLQUNoRDtDQUNGLENBQUM7QUFFSixNQUFNLE9BQU8sZ0JBQWdCOztBQUNiLHlCQUFRLEdBQUc7SUFDdkIsV0FBVyxFQUFFO1FBQ1gscUJBQXFCLEVBQUUsMEJBQTBCO1FBQ2pELGlCQUFpQixFQUFFLDhCQUE4QjtRQUNqRCxTQUFTLEVBQUUsMEJBQTBCO1FBQ3JDLFdBQVcsRUFBRSw0QkFBNEI7UUFDekMsY0FBYyxFQUFFLHdCQUF3QjtRQUN4QyxhQUFhLEVBQUUsaUJBQWlCO0tBQ2pDO0NBQ0YsQ0FBQztBQUVKLE1BQU0sT0FBTyxpQkFBaUI7O0FBQ2QsMEJBQVEsR0FBRztJQUN2QixXQUFXLEVBQUU7UUFDWCxrQkFBa0IsRUFBRSxxQ0FBcUM7UUFDekQscUJBQXFCLEVBQUUseUNBQXlDO1FBQ2hFLGlCQUFpQixFQUFFLHFDQUFxQztRQUN4RCxrQkFBa0IsRUFBRSxtRUFBbUU7S0FDeEY7Q0FDRixDQUFDO0FBRUosTUFBTSxPQUFPLGNBQWM7O0FBQ1gsd0JBQVMsR0FBRztJQUN4QixVQUFVLEVBQUU7UUFDVixrQkFBa0IsRUFBRSxzQ0FBc0M7UUFDMUQsY0FBYyxFQUFFLGlDQUFpQztRQUNqRCxhQUFhLEVBQUUsaUNBQWlDO1FBQ2hELGdCQUFnQixFQUFFLG1DQUFtQztRQUNyRCxzQkFBc0IsRUFBRSwyQ0FBMkM7UUFDbkUsaUJBQWlCLEVBQUUscURBQXFEO1FBQ3hFLGtCQUFrQixFQUFFLGlEQUFpRDtRQUNyRSwwQkFBMEIsRUFBRSx3REFBd0Q7S0FDckY7SUFDRCxJQUFJLEVBQUU7UUFDSixVQUFVLEVBQUUsdUJBQXVCO1FBQ25DLGdCQUFnQixFQUFFLHlCQUF5QjtRQUMzQyxXQUFXLEVBQUUscUNBQXFDO0tBQ25EO0NBQ0YsQ0FBQztBQUVKLE1BQU0sT0FBTyxzQkFBc0I7O0FBQ25CLCtCQUFRLEdBQUc7SUFDdkIsWUFBWSxFQUFFO1FBQ1osbUJBQW1CLEVBQUUsdUJBQXVCO1FBQzVDLGVBQWUsRUFBRSx5R0FBeUc7S0FDM0g7Q0FDRixDQUFDO0FBRUosTUFBTSxPQUFPLFNBQVM7O0FBQ04sbUJBQVMsR0FBRztJQUN4QixNQUFNLEVBQUU7UUFDTixjQUFjLEVBQUUsa0NBQWtDO1FBQ2xELG9CQUFvQixFQUFFLHVDQUF1QztRQUM3RCxNQUFNLEVBQUUsZ0NBQWdDO1FBQ3hDLFlBQVksRUFBRSw2QkFBNkI7UUFDM0MscUJBQXFCLEVBQUUsc0NBQXNDO1FBQzdELGtCQUFrQixFQUFFLHVEQUF1RDtRQUMzRSxhQUFhLEVBQUUsMkNBQTJDO1FBQzFELHFCQUFxQixFQUFFLG1DQUFtQztRQUMxRCxrQkFBa0IsRUFBRSx3REFBd0Q7S0FDN0U7Q0FDRixDQUFDO0FBRUosTUFBTSxPQUFPLFFBQVE7SUFBckI7UUFDRSxZQUFPLEdBQUUsRUFBRSxDQUFDO1FBQ1osYUFBUSxHQUFHLEVBQUUsQ0FBQztJQUloQixDQUFDO0NBQUE7QUFDRCxNQUFNLE9BQU8sV0FBVztDQU92QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSb2xlQ29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgcm9sZToge1xyXG4gICAgICBnZXRBbGxVc2VyUm9sZTogJy9hY2Nlc3MtY29udHJvbC9yb2xlJyxcclxuICAgICAgY3JlYXRlUm9sZTogJy9hY2Nlc3MtY29udHJvbC9yb2xlL2NyZWF0ZScsXHJcbiAgICAgIGdldExhbmRpbmdQYWdlOiAnL3BsYXRmb3JtL21lbnUvYXBwbGljYXRpb24nLFxyXG4gICAgICBhZGRQb2xpY3lHcm91cDogJy9hY2Nlc3MtY29udHJvbC9yb2xlJyxcclxuICAgICAgZ2V0QWxsT3JnUm9sZTogJy9hY2Nlc3MtY29udHJvbC9yb2xlL29yZ2FuaXphdGlvbi97b3JnaWR9JyxcclxuICAgICAgZG9zc2llcjogJy9kb3NzaWVyJ1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyQ29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgVXNlcjoge1xyXG4gICAgICBnZXRBbGxVc2VyTGlzdDogJy9vcmcvdXNlcicsXHJcbiAgICAgIGdldEFsbFVzZXJBY3RpdmVJbmFjdGl2ZTogJy9vcmcvdXNlcj9pbmNsdWRlSW5hY3RpdmVVc2Vycz10cnVlJyxcclxuICAgICAgYWN0aXZhdGVVc2VyOiAnL29yZy91c2VyL2FjdGl2YXRlJyxcclxuICAgICAgY3JlYXRlVXNlcjogJy9vcmcvdXNlci9jcmVhdGUnLFxyXG4gICAgICB1c2VyUm9sZTogJy9vcmcvdXNlci9yb2xlJyxcclxuICAgICAgbWFuYWdlbWVudGdyb3VwOiAnL29yZy90ZWFtL21hbmFnZW1lbnRncm91cCcsXHJcbiAgICAgIGdldEFsbFVzZXJPcmdMaXN0OiAnL29yZy91c2VyL29yZ2FuaXphdGlvbi8nXHJcbiAgICB9LFxyXG4gICAgUHJvdmlkZXI6IHtcclxuICAgICAgZ2V0UHJvdmlkZXJMaXN0OiAnL3JlZi9wcm92aWRlcicsXHJcbiAgICAgIHNlYXJjaFByb3ZpZGVyTGlzdDogJy9yZWYvcHJvdmlkZXIvc2VhcmNoJyxcclxuICAgICAgYWRkUHJvdmlkZXJVc2VyOiAnL3JlZi9wcm92aWRlci9jcmVhdGUvYWNjb3VudCdcclxuICAgIH1cclxuICB9O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBBdHRhY2htZW50Q29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgQXR0YWNobWVudHM6IHtcclxuICAgICAgR2V0QXR0YWNobWVudFJlZmVycmFsOiAnL3JlZi9hdHRhY2htZW50L3JlZmVycmFsJyxcclxuICAgICAgR2V0Q2F0ZWdvcnlMb29rdXA6ICcvbG9va3VwL2xvb2t1cGJ5Y2F0ZWdvcnluYW1lJyxcclxuICAgICAgVXBsb2FkS2V5OiAnL2NvbW1vbi9maWxlcy91cGxvYWQta2V5JyxcclxuICAgICAgRG93bmxvYWRLZXk6ICcvY29tbW9uL2ZpbGVzL2Rvd25sb2FkLWtleScsXHJcbiAgICAgIFBvc3RBdHRhY2htZW50OiAnL3JlZi9hdHRhY2htZW50L2NyZWF0ZScsXHJcbiAgICAgIFB1dEF0dGFjaG1lbnQ6ICcvcmVmL2F0dGFjaG1lbnQnXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5leHBvcnQgY2xhc3MgUG9saWN5R3JvdXBDb25maWcge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnQgPSB7XHJcbiAgICBwb2xpY3lHcm91cDoge1xyXG4gICAgICBnZXRQb2xpY3lHcm91cExpc3Q6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wb2xpY3lHcm91cCcsXHJcbiAgICAgIGdldEFsbFBvbGljeUdyb3VwTGlzdDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BvbGljeUdyb3VwL2FsbCcsXHJcbiAgICAgIGNyZWF0ZVBvbGljeUdyb3VwOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5R3JvdXAnLFxyXG4gICAgICBnZXRPcmdQb2xpY3lHcm91cHM6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wb2xpY3lHcm91cC9vcmdhbml6YXRpb24ve29yZ2FuaXphdGlvbmlkfSdcclxuICAgIH1cclxuICB9O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uc1VSTCB7XHJcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludHMgPSB7XHJcbiAgICBwZXJtaXNzaW9uOiB7XHJcbiAgICAgIHBlcm1pc3Npb25Sb2xlQnlJZDogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3JvbGUve2lkfScsXHJcbiAgICAgIHBhZ2VQZXJtaXNzaW9uOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vcGFnZScsXHJcbiAgICAgIGdldFBlcm1pc3Npb246ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi97aWR9JyxcclxuICAgICAgY3JlYXRlUGVybWlzc2lvbjogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL2NyZWF0ZScsXHJcbiAgICAgIHVwZGF0ZURlbGV0ZVBlcm1pc3Npb246ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi97cGVybWlzc2lvbmlkfScsXHJcbiAgICAgIGdldFBlcm1pc3Npb25UcmVlOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vcGFnZS97cGFnZWlkfS97cGFyZW50aWR9JyxcclxuICAgICAgZ2V0UGVybWlzc2lvblR5cGVzOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vdHlwZS97YXBwbGljYXRpb25pZH0nLFxyXG4gICAgICBhcHBsaWNhdGlvblBlcm1pc3Npb25zVHJlZTogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL2FwcGxpY2F0aW9uL3thcHBsaWNhdGlvbmlkfSdcclxuICAgIH0sXHJcbiAgICBwYWdlOiB7XHJcbiAgICAgIGNyZWF0ZVBhZ2U6ICcvcGxhdGZvcm0vbWVudS9jcmVhdGUnLFxyXG4gICAgICB1cGRhdGVEZWxldGVQYWdlOiAnL3BsYXRmb3JtL21lbnUve3BhZ2VpZH0nLFxyXG4gICAgICBBbGxQYWdlVHJlZTogJy9wbGF0Zm9ybS9tZW51L3RyZWUve2FwcGxpY2F0aW9uaWR9J1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFjY2Vzc01hbmFnZW1lbnRDb25maWcge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnQgPSB7XHJcbiAgICBPcmdhbml6YXRpb246IHtcclxuICAgICAgZ2V0T3JnYW5pemF0aW9uTGlzdDogJy9vcmcvb3JnYW5pemF0aW9uL2FsbCcsXHJcbiAgICAgIGdldE9yZ2FuaXphdGlvbjogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BhZ2Uvb3JnYW5pemF0aW9uL3tvcmdJZH0/cmV0dXJuVXNlclBhZ2U9ZmFsc2UmZXhjbHVkZU5vQWN0aXZlVmVyc2lvblBhZ2VzPXRydWUnXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5leHBvcnQgY2xhc3MgTWFzdGVyVVJMIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50cyA9IHtcclxuICAgIGxvb2t1cDoge1xyXG4gICAgICBjcmVhdGVDYXRlZ29yeTogJy9wbGF0Zm9ybS9tYXN0ZXIvbG9va3VwL2NhdGVnb3J5JyxcclxuICAgICAgdXBkYXRlRGVsZXRlQ2F0ZWdvcnk6ICcvcGxhdGZvcm0vbWFzdGVyL2xvb2t1cC9jYXRlZ29yeS97aWR9JyxcclxuICAgICAgbG9va3VwOiAnL3BsYXRmb3JtL21hc3Rlci9sb29rdXAvdXBkYXRlJyxcclxuICAgICAgY3JlYXRlTG9va3VwOiAnL3BsYXRmb3JtL21hc3Rlci9sb29rdXAvYWRkJyxcclxuICAgICAgZ2V0UGVybWlzc2lvblJvbGVCeUlkOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vcm9sZS97aWR9JyxcclxuICAgICAgZ2V0QWxsQ2F0ZWdvcnlUcmVlOiAnL3BsYXRmb3JtL21hc3Rlci9sb29rdXAvY2F0ZWdvcnkvdHJlZS97YXBwbGljYXRpb25pZH0nLFxyXG4gICAgICBnZXRMb29rdXBUcmVlOiAnL3BsYXRmb3JtL21hc3Rlci9sb29rdXAvdHJlZS97Y2F0ZWdvcnlpZH0nLFxyXG4gICAgICBnZXRMb29rdXBCeUNhdGVnb3J5SWQ6ICcvcGxhdGZvcm0vbWFzdGVyL2xvb2t1cC9saXN0L3tpZH0nLFxyXG4gICAgICBnZXRQZXJtaXNzaW9uc1RyZWU6ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9hcHBsaWNhdGlvbi97YXBwbGljYXRpb25pZH0nXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5leHBvcnQgY2xhc3MgUkJBQ0lORk8ge1xyXG4gIGFwaUhvc3QgPScnO1xyXG4gIHRva2VuS2V5ID0gJyc7XHJcbiAgb3RoZXJzPzogYW55O1xyXG4gIG9yZ0lEPzogYW55O1xyXG4gIGVudmlyb25tZW50PzogRW52aXJvbm1lbnQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcclxuICBtc3RyVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgbXN0clBhc3N3b3JkPzogc3RyaW5nO1xyXG4gIG1zdHJVUkw/OiBzdHJpbmc7XHJcbiAgbXN0clByb2plY3RJRD86IHN0cmluZztcclxuICBhcHBsaWNhdGlvbmlkPzogc3RyaW5nO1xyXG4gIHByaW9yaXR5Pzogc3RyaW5nXHJcbn1cclxuXHJcbiJdfQ==