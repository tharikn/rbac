export class ConfigurationSettingsConfig {
}
ConfigurationSettingsConfig.EndPoint = {
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
        getRoleAsset: '/platform/page-designer/asset/getRoleAssets',
        getPolicyGroupAsset: '/platform/page-designer/asset/getPolicyGroupAssets'
    },
    User: {
        getUser: '/org/user/',
        getUserList: '/org/user/all',
        getUserorgList: '/org/user/organization/'
    },
    ConfigSettings: {
        saveConfig: '/org/config-settings/create',
        getConfigList: '/org/config-settings/list',
        getConfigById: '/org/config-settings/list?id=',
        deleteConfig: '/org/config-settings/',
        updateConfig: '/org/config-settings/',
        registrationInfo: '/org/auth/configsettings'
    },
    role: {
        getAllUserRole: '/access-control/role',
        createRole: '/access-control/role/create',
        getLandingPage: '/platform/menu/application',
        addPolicyGroup: '/access-control/role',
        getAllOrgRole: '/access-control/role/organization/{orgid}',
        dossier: '/dossier'
    },
    Email: {
        emailtemplateList: '/solution/emailtemplate/channel/EMAIL'
    },
    org: {
        getOrganizations: '/org/management-group/organization/tree'
    },
    Attachments: {
        GetAttachmentReferral: '/ref/attachment/referral',
        GetCategoryLookup: '/platform/master/lookup/lookupbycategoryname',
        UploadKey: '/common/files/upload-key',
        DownloadKey: '/common/files/download-key',
        PostAttachment: '/ref/attachment/create',
        PutAttachment: '/ref/attachment'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi1zZXR0aW5ncy11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2NvbmZpZy1sb2dpbi1zZXR0aW5ncy9zcmMvbGliL0Bjb3JlL3VybHMvY29uZmlndXJhdGlvbi1zZXR0aW5ncy11cmwuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTywyQkFBMkI7O0FBQ3hCLG9DQUFRLEdBQUc7SUFDdkIsWUFBWSxFQUFFO1FBQ1osbUJBQW1CLEVBQUUsK0NBQStDO1FBQ3BFLGVBQWUsRUFDYix5R0FBeUc7S0FDNUc7SUFDRCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsT0FBTztLQUNqQjtJQUNELEtBQUssRUFBRTtRQUNMLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFlBQVksRUFBRSwyQ0FBMkM7UUFDekQsWUFBWSxFQUFFLDZDQUE2QztRQUMzRCxZQUFZLEVBQUUsNkNBQTZDO1FBQzNELG1CQUFtQixFQUFFLG9EQUFvRDtLQUMxRTtJQUNELElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxZQUFZO1FBQ3JCLFdBQVcsRUFBRSxlQUFlO1FBQzVCLGNBQWMsRUFBRSx5QkFBeUI7S0FDMUM7SUFDRCxjQUFjLEVBQUU7UUFDZCxVQUFVLEVBQUUsNkJBQTZCO1FBQ3pDLGFBQWEsRUFBRSwyQkFBMkI7UUFDMUMsYUFBYSxFQUFFLCtCQUErQjtRQUM5QyxZQUFZLEVBQUUsdUJBQXVCO1FBQ3JDLFlBQVksRUFBRSx1QkFBdUI7UUFDckMsZ0JBQWdCLEVBQUUsMEJBQTBCO0tBQzdDO0lBQ0QsSUFBSSxFQUFFO1FBQ0osY0FBYyxFQUFFLHNCQUFzQjtRQUN0QyxVQUFVLEVBQUUsNkJBQTZCO1FBQ3pDLGNBQWMsRUFBRSw0QkFBNEI7UUFDNUMsY0FBYyxFQUFFLHNCQUFzQjtRQUN0QyxhQUFhLEVBQUUsMkNBQTJDO1FBQzFELE9BQU8sRUFBRSxVQUFVO0tBQ3BCO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsaUJBQWlCLEVBQUUsdUNBQXVDO0tBQzNEO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsZ0JBQWdCLEVBQUUseUNBQXlDO0tBQzVEO0lBQ0QsV0FBVyxFQUFFO1FBQ1gscUJBQXFCLEVBQUUsMEJBQTBCO1FBQ2pELGlCQUFpQixFQUFFLDhDQUE4QztRQUNqRSxTQUFTLEVBQUUsMEJBQTBCO1FBQ3JDLFdBQVcsRUFBRSw0QkFBNEI7UUFDekMsY0FBYyxFQUFFLHdCQUF3QjtRQUN4QyxhQUFhLEVBQUUsaUJBQWlCO0tBQ2pDO0NBQ0YsQ0FBQztBQUVKLE1BQU0sT0FBTyxnQkFBZ0I7O0FBQ2IseUJBQVEsR0FBRztJQUN2QixXQUFXLEVBQUU7UUFDWCxxQkFBcUIsRUFBRSwwQkFBMEI7UUFDakQsaUJBQWlCLEVBQUUsOENBQThDO1FBQ2pFLFNBQVMsRUFBRSwwQkFBMEI7UUFDckMsV0FBVyxFQUFFLDRCQUE0QjtRQUN6QyxjQUFjLEVBQUUsd0JBQXdCO1FBQ3hDLGFBQWEsRUFBRSxpQkFBaUI7S0FDakM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb25TZXR0aW5nc0NvbmZpZyB7XHJcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludCA9IHtcclxuICAgIE9yZ2FuaXphdGlvbjoge1xyXG4gICAgICBnZXRPcmdhbml6YXRpb25MaXN0OiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcGFnZS9vcmdhbml6YXRpb24vYWxsJyxcclxuICAgICAgZ2V0T3JnYW5pemF0aW9uOlxyXG4gICAgICAgICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdlL29yZ2FuaXphdGlvbi97b3JnSWR9P3JldHVyblVzZXJQYWdlPWZhbHNlJmV4Y2x1ZGVOb0FjdGl2ZVZlcnNpb25QYWdlcz10cnVlJ1xyXG4gICAgfSxcclxuICAgIFBhZ2U6IHtcclxuICAgICAgZ2V0UGFnZTogJy9wYWdlJ1xyXG4gICAgfSxcclxuICAgIEFzc2V0OiB7XHJcbiAgICAgIGdldEFzc2V0OiAnYXNzZXQnLFxyXG4gICAgICBnZXRQYWdlQXNzZXQ6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9hc3NldC9nZXRwYWdlYnlpZCcsXHJcbiAgICAgIGdldFVzZXJBc3NldDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL2Fzc2V0L2dldFVzZXJBc3NldHMnLFxyXG4gICAgICBnZXRSb2xlQXNzZXQ6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9hc3NldC9nZXRSb2xlQXNzZXRzJyxcclxuICAgICAgZ2V0UG9saWN5R3JvdXBBc3NldDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL2Fzc2V0L2dldFBvbGljeUdyb3VwQXNzZXRzJ1xyXG4gICAgfSxcclxuICAgIFVzZXI6IHtcclxuICAgICAgZ2V0VXNlcjogJy9vcmcvdXNlci8nLFxyXG4gICAgICBnZXRVc2VyTGlzdDogJy9vcmcvdXNlci9hbGwnLFxyXG4gICAgICBnZXRVc2Vyb3JnTGlzdDogJy9vcmcvdXNlci9vcmdhbml6YXRpb24vJ1xyXG4gICAgfSxcclxuICAgIENvbmZpZ1NldHRpbmdzOiB7XHJcbiAgICAgIHNhdmVDb25maWc6ICcvb3JnL2NvbmZpZy1zZXR0aW5ncy9jcmVhdGUnLFxyXG4gICAgICBnZXRDb25maWdMaXN0OiAnL29yZy9jb25maWctc2V0dGluZ3MvbGlzdCcsXHJcbiAgICAgIGdldENvbmZpZ0J5SWQ6ICcvb3JnL2NvbmZpZy1zZXR0aW5ncy9saXN0P2lkPScsXHJcbiAgICAgIGRlbGV0ZUNvbmZpZzogJy9vcmcvY29uZmlnLXNldHRpbmdzLycsXHJcbiAgICAgIHVwZGF0ZUNvbmZpZzogJy9vcmcvY29uZmlnLXNldHRpbmdzLycsXHJcbiAgICAgIHJlZ2lzdHJhdGlvbkluZm86ICcvb3JnL2F1dGgvY29uZmlnc2V0dGluZ3MnXHJcbiAgICB9LFxyXG4gICAgcm9sZToge1xyXG4gICAgICBnZXRBbGxVc2VyUm9sZTogJy9hY2Nlc3MtY29udHJvbC9yb2xlJyxcclxuICAgICAgY3JlYXRlUm9sZTogJy9hY2Nlc3MtY29udHJvbC9yb2xlL2NyZWF0ZScsXHJcbiAgICAgIGdldExhbmRpbmdQYWdlOiAnL3BsYXRmb3JtL21lbnUvYXBwbGljYXRpb24nLFxyXG4gICAgICBhZGRQb2xpY3lHcm91cDogJy9hY2Nlc3MtY29udHJvbC9yb2xlJyxcclxuICAgICAgZ2V0QWxsT3JnUm9sZTogJy9hY2Nlc3MtY29udHJvbC9yb2xlL29yZ2FuaXphdGlvbi97b3JnaWR9JyxcclxuICAgICAgZG9zc2llcjogJy9kb3NzaWVyJ1xyXG4gICAgfSxcclxuICAgIEVtYWlsOiB7XHJcbiAgICAgIGVtYWlsdGVtcGxhdGVMaXN0OiAnL3NvbHV0aW9uL2VtYWlsdGVtcGxhdGUvY2hhbm5lbC9FTUFJTCdcclxuICAgIH0sXHJcbiAgICBvcmc6IHtcclxuICAgICAgZ2V0T3JnYW5pemF0aW9uczogJy9vcmcvbWFuYWdlbWVudC1ncm91cC9vcmdhbml6YXRpb24vdHJlZSdcclxuICAgIH0sXHJcbiAgICBBdHRhY2htZW50czoge1xyXG4gICAgICBHZXRBdHRhY2htZW50UmVmZXJyYWw6ICcvcmVmL2F0dGFjaG1lbnQvcmVmZXJyYWwnLFxyXG4gICAgICBHZXRDYXRlZ29yeUxvb2t1cDogJy9wbGF0Zm9ybS9tYXN0ZXIvbG9va3VwL2xvb2t1cGJ5Y2F0ZWdvcnluYW1lJyxcclxuICAgICAgVXBsb2FkS2V5OiAnL2NvbW1vbi9maWxlcy91cGxvYWQta2V5JyxcclxuICAgICAgRG93bmxvYWRLZXk6ICcvY29tbW9uL2ZpbGVzL2Rvd25sb2FkLWtleScsXHJcbiAgICAgIFBvc3RBdHRhY2htZW50OiAnL3JlZi9hdHRhY2htZW50L2NyZWF0ZScsXHJcbiAgICAgIFB1dEF0dGFjaG1lbnQ6ICcvcmVmL2F0dGFjaG1lbnQnXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5leHBvcnQgY2xhc3MgQXR0YWNobWVudENvbmZpZyB7XHJcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludCA9IHtcclxuICAgIEF0dGFjaG1lbnRzOiB7XHJcbiAgICAgIEdldEF0dGFjaG1lbnRSZWZlcnJhbDogJy9yZWYvYXR0YWNobWVudC9yZWZlcnJhbCcsXHJcbiAgICAgIEdldENhdGVnb3J5TG9va3VwOiAnL3BsYXRmb3JtL21hc3Rlci9sb29rdXAvbG9va3VwYnljYXRlZ29yeW5hbWUnLFxyXG4gICAgICBVcGxvYWRLZXk6ICcvY29tbW9uL2ZpbGVzL3VwbG9hZC1rZXknLFxyXG4gICAgICBEb3dubG9hZEtleTogJy9jb21tb24vZmlsZXMvZG93bmxvYWQta2V5JyxcclxuICAgICAgUG9zdEF0dGFjaG1lbnQ6ICcvcmVmL2F0dGFjaG1lbnQvY3JlYXRlJyxcclxuICAgICAgUHV0QXR0YWNobWVudDogJy9yZWYvYXR0YWNobWVudCdcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiJdfQ==