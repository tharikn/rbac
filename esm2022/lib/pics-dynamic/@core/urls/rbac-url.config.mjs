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
// export class AccessManagementConfig {
//   public static EndPoint = {
//     Organization: {
//       getOrganizationList: '/org/organization/all',
//       getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
//     }
//   };
// }
export class AccessManagementConfig {
    static EndPoint = {
        Organization: {
            getOrganizationList: '/platform/page-designer/page/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        },
        Page: {
            getPage: '/page'
        },
        Asset: {
            getAsset: 'asset',
            getPageAsset: '/platform/page-designer/asset/getpagebyid',
            getUserAsset: '/platform/page-designer/asset/getUserAssets',
            getRoleAsset: '/platform/page-designer/asset/getRoleAssets/',
            getPolicyGroupAsset: '/platform/page-designer/asset/getPolicyGroupAssets'
        },
        User: {
            getUser: '/org/user/',
            getUserList: '/org/user/all',
            getUserorgList: '/org/user/organization/'
        },
        PolicyGroup: {
            getPolicyGroup: '/platform/page-designer/policyGroup/',
            getPolicyGroupList: '/platform/page-designer/policyGroup/organization/{organizationid}'
        },
        Role: {
            getRole: '/access-control/role/',
            getRoleList: '/access-control/role/organization/{orgid}'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9AY29yZS91cmxzL3JiYWMtdXJsLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sVUFBVTtJQUNkLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDdkIsSUFBSSxFQUFFO1lBQ0osY0FBYyxFQUFFLHNCQUFzQjtZQUN0QyxVQUFVLEVBQUUsNkJBQTZCO1lBQ3pDLGNBQWMsRUFBRSw0QkFBNEI7WUFDNUMsY0FBYyxFQUFFLHNCQUFzQjtZQUN0QyxhQUFhLEVBQUUsMkNBQTJDO1lBQzFELE9BQU8sRUFBRSxVQUFVO1NBQ3BCO0tBQ0YsQ0FBQzs7QUFHSixNQUFNLE9BQU8sVUFBVTtJQUNkLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDdkIsSUFBSSxFQUFFO1lBQ0osY0FBYyxFQUFFLFdBQVc7WUFDM0Isd0JBQXdCLEVBQUUscUNBQXFDO1lBQy9ELFlBQVksRUFBRSxvQkFBb0I7WUFDbEMsVUFBVSxFQUFFLGtCQUFrQjtZQUM5QixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLGVBQWUsRUFBRSwyQkFBMkI7WUFDNUMsaUJBQWlCLEVBQUUseUJBQXlCO1NBQzdDO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsZUFBZSxFQUFFLGVBQWU7WUFDaEMsa0JBQWtCLEVBQUUsc0JBQXNCO1lBQzFDLGVBQWUsRUFBRSw4QkFBOEI7U0FDaEQ7S0FDRixDQUFDOztBQUVKLE1BQU0sT0FBTyxnQkFBZ0I7SUFDcEIsTUFBTSxDQUFDLFFBQVEsR0FBRztRQUN2QixXQUFXLEVBQUU7WUFDWCxxQkFBcUIsRUFBRSwwQkFBMEI7WUFDakQsaUJBQWlCLEVBQUUsOENBQThDO1lBQ2pFLFNBQVMsRUFBRSwwQkFBMEI7WUFDckMsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxjQUFjLEVBQUUsd0JBQXdCO1lBQ3hDLGFBQWEsRUFBRSxpQkFBaUI7U0FDakM7S0FDRixDQUFDOztBQUVKLE1BQU0sT0FBTyxpQkFBaUI7SUFDckIsTUFBTSxDQUFDLFFBQVEsR0FBRztRQUN2QixXQUFXLEVBQUU7WUFDWCxrQkFBa0IsRUFBRSxxQ0FBcUM7WUFDekQscUJBQXFCLEVBQUUseUNBQXlDO1lBQ2hFLGlCQUFpQixFQUFFLHFDQUFxQztZQUN4RCxrQkFBa0IsRUFBRSxtRUFBbUU7U0FDeEY7S0FDRixDQUFDOztBQUVKLE1BQU0sT0FBTyxjQUFjO0lBQ2xCLE1BQU0sQ0FBQyxTQUFTLEdBQUc7UUFDeEIsVUFBVSxFQUFFO1lBQ1Ysa0JBQWtCLEVBQUUsc0NBQXNDO1lBQzFELGNBQWMsRUFBRSxpQ0FBaUM7WUFDakQsYUFBYSxFQUFFLGlDQUFpQztZQUNoRCxnQkFBZ0IsRUFBRSxtQ0FBbUM7WUFDckQsc0JBQXNCLEVBQUUsMkNBQTJDO1lBQ25FLGlCQUFpQixFQUFFLHFEQUFxRDtZQUN4RSxrQkFBa0IsRUFBRSxpREFBaUQ7WUFDckUsMEJBQTBCLEVBQUUsd0RBQXdEO1NBQ3JGO1FBQ0QsSUFBSSxFQUFFO1lBQ0osVUFBVSxFQUFFLHVCQUF1QjtZQUNuQyxnQkFBZ0IsRUFBRSx5QkFBeUI7WUFDM0MsV0FBVyxFQUFFLHFDQUFxQztTQUNuRDtLQUNGLENBQUM7O0FBRUosd0NBQXdDO0FBQ3hDLCtCQUErQjtBQUMvQixzQkFBc0I7QUFDdEIsc0RBQXNEO0FBQ3RELG1JQUFtSTtBQUNuSSxRQUFRO0FBQ1IsT0FBTztBQUNQLElBQUk7QUFFSixNQUFNLE9BQU8sc0JBQXNCO0lBQzFCLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDdkIsWUFBWSxFQUFFO1lBQ1osbUJBQW1CLEVBQUUsK0NBQStDO1lBQ3BFLGVBQWUsRUFDYix5R0FBeUc7U0FDNUc7UUFDRCxJQUFJLEVBQUU7WUFDSixPQUFPLEVBQUUsT0FBTztTQUNqQjtRQUNELEtBQUssRUFBRTtZQUNMLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFlBQVksRUFBRSwyQ0FBMkM7WUFDekQsWUFBWSxFQUFFLDZDQUE2QztZQUMzRCxZQUFZLEVBQUUsOENBQThDO1lBQzVELG1CQUFtQixFQUFFLG9EQUFvRDtTQUMxRTtRQUNELElBQUksRUFBRTtZQUNKLE9BQU8sRUFBRSxZQUFZO1lBQ3JCLFdBQVcsRUFBRSxlQUFlO1lBQzVCLGNBQWMsRUFBRSx5QkFBeUI7U0FDMUM7UUFDRCxXQUFXLEVBQUU7WUFDWCxjQUFjLEVBQUUsc0NBQXNDO1lBQ3RELGtCQUFrQixFQUFFLG1FQUFtRTtTQUN4RjtRQUNELElBQUksRUFBRTtZQUNKLE9BQU8sRUFBRSx1QkFBdUI7WUFDaEMsV0FBVyxFQUFFLDJDQUEyQztTQUN6RDtLQUNGLENBQUM7O0FBRUosTUFBTSxPQUFPLFFBQVE7SUFDbkIsT0FBTyxHQUFFLEVBQUUsQ0FBQztJQUNaLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDZCxNQUFNLENBQU87SUFDYixLQUFLLENBQU87SUFDWixXQUFXLENBQWU7Q0FDM0I7QUFDRCxNQUFNLE9BQU8sV0FBVztJQUN0QixZQUFZLENBQVU7SUFDdEIsWUFBWSxDQUFVO0lBQ3RCLE9BQU8sQ0FBVTtJQUNqQixhQUFhLENBQVU7SUFDdkIsYUFBYSxDQUFVO0lBQ3ZCLFFBQVEsQ0FBUztDQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSb2xlQ29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgcm9sZToge1xyXG4gICAgICBnZXRBbGxVc2VyUm9sZTogJy9hY2Nlc3MtY29udHJvbC9yb2xlJyxcclxuICAgICAgY3JlYXRlUm9sZTogJy9hY2Nlc3MtY29udHJvbC9yb2xlL2NyZWF0ZScsXHJcbiAgICAgIGdldExhbmRpbmdQYWdlOiAnL3BsYXRmb3JtL21lbnUvYXBwbGljYXRpb24nLFxyXG4gICAgICBhZGRQb2xpY3lHcm91cDogJy9hY2Nlc3MtY29udHJvbC9yb2xlJyxcclxuICAgICAgZ2V0QWxsT3JnUm9sZTogJy9hY2Nlc3MtY29udHJvbC9yb2xlL29yZ2FuaXphdGlvbi97b3JnaWR9JyxcclxuICAgICAgZG9zc2llcjogJy9kb3NzaWVyJ1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyQ29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgVXNlcjoge1xyXG4gICAgICBnZXRBbGxVc2VyTGlzdDogJy9vcmcvdXNlcicsXHJcbiAgICAgIGdldEFsbFVzZXJBY3RpdmVJbmFjdGl2ZTogJy9vcmcvdXNlcj9pbmNsdWRlSW5hY3RpdmVVc2Vycz10cnVlJyxcclxuICAgICAgYWN0aXZhdGVVc2VyOiAnL29yZy91c2VyL2FjdGl2YXRlJyxcclxuICAgICAgY3JlYXRlVXNlcjogJy9vcmcvdXNlci9jcmVhdGUnLFxyXG4gICAgICB1c2VyUm9sZTogJy9vcmcvdXNlci9yb2xlJyxcclxuICAgICAgbWFuYWdlbWVudGdyb3VwOiAnL29yZy90ZWFtL21hbmFnZW1lbnRncm91cCcsXHJcbiAgICAgIGdldEFsbFVzZXJPcmdMaXN0OiAnL29yZy91c2VyL29yZ2FuaXphdGlvbi8nXHJcbiAgICB9LFxyXG4gICAgUHJvdmlkZXI6IHtcclxuICAgICAgZ2V0UHJvdmlkZXJMaXN0OiAnL3JlZi9wcm92aWRlcicsXHJcbiAgICAgIHNlYXJjaFByb3ZpZGVyTGlzdDogJy9yZWYvcHJvdmlkZXIvc2VhcmNoJyxcclxuICAgICAgYWRkUHJvdmlkZXJVc2VyOiAnL3JlZi9wcm92aWRlci9jcmVhdGUvYWNjb3VudCdcclxuICAgIH1cclxuICB9O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBBdHRhY2htZW50Q29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgQXR0YWNobWVudHM6IHtcclxuICAgICAgR2V0QXR0YWNobWVudFJlZmVycmFsOiAnL3JlZi9hdHRhY2htZW50L3JlZmVycmFsJyxcclxuICAgICAgR2V0Q2F0ZWdvcnlMb29rdXA6ICcvcGxhdGZvcm0vbWFzdGVyL2xvb2t1cC9sb29rdXBieWNhdGVnb3J5bmFtZScsXHJcbiAgICAgIFVwbG9hZEtleTogJy9jb21tb24vZmlsZXMvdXBsb2FkLWtleScsXHJcbiAgICAgIERvd25sb2FkS2V5OiAnL2NvbW1vbi9maWxlcy9kb3dubG9hZC1rZXknLFxyXG4gICAgICBQb3N0QXR0YWNobWVudDogJy9yZWYvYXR0YWNobWVudC9jcmVhdGUnLFxyXG4gICAgICBQdXRBdHRhY2htZW50OiAnL3JlZi9hdHRhY2htZW50J1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGNsYXNzIFBvbGljeUdyb3VwQ29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgcG9saWN5R3JvdXA6IHtcclxuICAgICAgZ2V0UG9saWN5R3JvdXBMaXN0OiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5R3JvdXAnLFxyXG4gICAgICBnZXRBbGxQb2xpY3lHcm91cExpc3Q6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wb2xpY3lHcm91cC9hbGwnLFxyXG4gICAgICBjcmVhdGVQb2xpY3lHcm91cDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BvbGljeUdyb3VwJyxcclxuICAgICAgZ2V0T3JnUG9saWN5R3JvdXBzOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5R3JvdXAvb3JnYW5pemF0aW9uL3tvcmdhbml6YXRpb25pZH0nXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbnNVUkwge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnRzID0ge1xyXG4gICAgcGVybWlzc2lvbjoge1xyXG4gICAgICBwZXJtaXNzaW9uUm9sZUJ5SWQ6ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9yb2xlL3tpZH0nLFxyXG4gICAgICBwYWdlUGVybWlzc2lvbjogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3BhZ2UnLFxyXG4gICAgICBnZXRQZXJtaXNzaW9uOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24ve2lkfScsXHJcbiAgICAgIGNyZWF0ZVBlcm1pc3Npb246ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9jcmVhdGUnLFxyXG4gICAgICB1cGRhdGVEZWxldGVQZXJtaXNzaW9uOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24ve3Blcm1pc3Npb25pZH0nLFxyXG4gICAgICBnZXRQZXJtaXNzaW9uVHJlZTogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3BhZ2Uve3BhZ2VpZH0ve3BhcmVudGlkfScsXHJcbiAgICAgIGdldFBlcm1pc3Npb25UeXBlczogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3R5cGUve2FwcGxpY2F0aW9uaWR9JyxcclxuICAgICAgYXBwbGljYXRpb25QZXJtaXNzaW9uc1RyZWU6ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9hcHBsaWNhdGlvbi97YXBwbGljYXRpb25pZH0nXHJcbiAgICB9LFxyXG4gICAgcGFnZToge1xyXG4gICAgICBjcmVhdGVQYWdlOiAnL3BsYXRmb3JtL21lbnUvY3JlYXRlJyxcclxuICAgICAgdXBkYXRlRGVsZXRlUGFnZTogJy9wbGF0Zm9ybS9tZW51L3twYWdlaWR9JyxcclxuICAgICAgQWxsUGFnZVRyZWU6ICcvcGxhdGZvcm0vbWVudS90cmVlL3thcHBsaWNhdGlvbmlkfSdcclxuICAgIH1cclxuICB9O1xyXG59XHJcbi8vIGV4cG9ydCBjbGFzcyBBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnIHtcclxuLy8gICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4vLyAgICAgT3JnYW5pemF0aW9uOiB7XHJcbi8vICAgICAgIGdldE9yZ2FuaXphdGlvbkxpc3Q6ICcvb3JnL29yZ2FuaXphdGlvbi9hbGwnLFxyXG4vLyAgICAgICBnZXRPcmdhbml6YXRpb246ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdlL29yZ2FuaXphdGlvbi97b3JnSWR9P3JldHVyblVzZXJQYWdlPWZhbHNlJmV4Y2x1ZGVOb0FjdGl2ZVZlcnNpb25QYWdlcz10cnVlJ1xyXG4vLyAgICAgfVxyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBjbGFzcyBBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgT3JnYW5pemF0aW9uOiB7XHJcbiAgICAgIGdldE9yZ2FuaXphdGlvbkxpc3Q6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdlL29yZ2FuaXphdGlvbi9hbGwnLFxyXG4gICAgICBnZXRPcmdhbml6YXRpb246XHJcbiAgICAgICAgJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BhZ2Uvb3JnYW5pemF0aW9uL3tvcmdJZH0/cmV0dXJuVXNlclBhZ2U9ZmFsc2UmZXhjbHVkZU5vQWN0aXZlVmVyc2lvblBhZ2VzPXRydWUnXHJcbiAgICB9LFxyXG4gICAgUGFnZToge1xyXG4gICAgICBnZXRQYWdlOiAnL3BhZ2UnXHJcbiAgICB9LFxyXG4gICAgQXNzZXQ6IHtcclxuICAgICAgZ2V0QXNzZXQ6ICdhc3NldCcsXHJcbiAgICAgIGdldFBhZ2VBc3NldDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL2Fzc2V0L2dldHBhZ2VieWlkJyxcclxuICAgICAgZ2V0VXNlckFzc2V0OiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvYXNzZXQvZ2V0VXNlckFzc2V0cycsXHJcbiAgICAgIGdldFJvbGVBc3NldDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL2Fzc2V0L2dldFJvbGVBc3NldHMvJyxcclxuICAgICAgZ2V0UG9saWN5R3JvdXBBc3NldDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL2Fzc2V0L2dldFBvbGljeUdyb3VwQXNzZXRzJ1xyXG4gICAgfSxcclxuICAgIFVzZXI6IHtcclxuICAgICAgZ2V0VXNlcjogJy9vcmcvdXNlci8nLFxyXG4gICAgICBnZXRVc2VyTGlzdDogJy9vcmcvdXNlci9hbGwnLFxyXG4gICAgICBnZXRVc2Vyb3JnTGlzdDogJy9vcmcvdXNlci9vcmdhbml6YXRpb24vJ1xyXG4gICAgfSxcclxuICAgIFBvbGljeUdyb3VwOiB7XHJcbiAgICAgIGdldFBvbGljeUdyb3VwOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5R3JvdXAvJyxcclxuICAgICAgZ2V0UG9saWN5R3JvdXBMaXN0OiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5R3JvdXAvb3JnYW5pemF0aW9uL3tvcmdhbml6YXRpb25pZH0nXHJcbiAgICB9LFxyXG4gICAgUm9sZToge1xyXG4gICAgICBnZXRSb2xlOiAnL2FjY2Vzcy1jb250cm9sL3JvbGUvJyxcclxuICAgICAgZ2V0Um9sZUxpc3Q6ICcvYWNjZXNzLWNvbnRyb2wvcm9sZS9vcmdhbml6YXRpb24ve29yZ2lkfSdcclxuICAgIH1cclxuICB9O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBSQkFDSU5GTyB7XHJcbiAgYXBpSG9zdCA9Jyc7XHJcbiAgdG9rZW5LZXkgPSAnJztcclxuICBvdGhlcnM/OiBhbnk7XHJcbiAgb3JnSUQ/OiBhbnk7XHJcbiAgZW52aXJvbm1lbnQ/OiBFbnZpcm9ubWVudDtcclxufVxyXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xyXG4gIG1zdHJVc2VybmFtZT86IHN0cmluZztcclxuICBtc3RyUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgbXN0clVSTD86IHN0cmluZztcclxuICBtc3RyUHJvamVjdElEPzogc3RyaW5nO1xyXG4gIGFwcGxpY2F0aW9uaWQ/OiBzdHJpbmc7XHJcbiAgcHJpb3JpdHk/OiBzdHJpbmdcclxufVxyXG5cclxuIl19