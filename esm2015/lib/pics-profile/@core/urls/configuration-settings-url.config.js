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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi1zZXR0aW5ncy11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3Byb2ZpbGUvc3JjL2xpYi9waWNzLXByb2ZpbGUvQGNvcmUvdXJscy9jb25maWd1cmF0aW9uLXNldHRpbmdzLXVybC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLDJCQUEyQjs7QUFDeEIsb0NBQVEsR0FBRztJQUN2QixZQUFZLEVBQUU7UUFDWixtQkFBbUIsRUFBRSwrQ0FBK0M7UUFDcEUsZUFBZSxFQUNiLHlHQUF5RztLQUM1RztJQUNELElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxPQUFPO0tBQ2pCO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsUUFBUSxFQUFFLE9BQU87UUFDakIsWUFBWSxFQUFFLDJDQUEyQztRQUN6RCxZQUFZLEVBQUUsNkNBQTZDO1FBQzNELFlBQVksRUFBRSw2Q0FBNkM7UUFDM0QsbUJBQW1CLEVBQUUsb0RBQW9EO0tBQzFFO0lBQ0QsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLFlBQVk7UUFDckIsV0FBVyxFQUFFLGVBQWU7UUFDNUIsY0FBYyxFQUFFLHlCQUF5QjtLQUMxQztJQUNELGNBQWMsRUFBRTtRQUNkLFVBQVUsRUFBRSw2QkFBNkI7UUFDekMsYUFBYSxFQUFFLDJCQUEyQjtRQUMxQyxhQUFhLEVBQUUsK0JBQStCO1FBQzlDLFlBQVksRUFBRSx1QkFBdUI7UUFDckMsWUFBWSxFQUFFLHVCQUF1QjtRQUNyQyxnQkFBZ0IsRUFBRSwwQkFBMEI7S0FDN0M7SUFDRCxJQUFJLEVBQUU7UUFDSixjQUFjLEVBQUUsc0JBQXNCO1FBQ3RDLFVBQVUsRUFBRSw2QkFBNkI7UUFDekMsY0FBYyxFQUFFLDRCQUE0QjtRQUM1QyxjQUFjLEVBQUUsc0JBQXNCO1FBQ3RDLGFBQWEsRUFBRSwyQ0FBMkM7UUFDMUQsT0FBTyxFQUFFLFVBQVU7S0FDcEI7SUFDRCxLQUFLLEVBQUU7UUFDTCxpQkFBaUIsRUFBRSx1Q0FBdUM7S0FDM0Q7SUFDRCxHQUFHLEVBQUU7UUFDSCxnQkFBZ0IsRUFBRSx5Q0FBeUM7S0FDNUQ7SUFDRCxXQUFXLEVBQUU7UUFDWCxxQkFBcUIsRUFBRSwwQkFBMEI7UUFDakQsaUJBQWlCLEVBQUUsOENBQThDO1FBQ2pFLFNBQVMsRUFBRSwwQkFBMEI7UUFDckMsV0FBVyxFQUFFLDRCQUE0QjtRQUN6QyxjQUFjLEVBQUUsd0JBQXdCO1FBQ3hDLGFBQWEsRUFBRSxpQkFBaUI7S0FDakM7Q0FDRixDQUFDO0FBRUosTUFBTSxPQUFPLGdCQUFnQjs7QUFDYix5QkFBUSxHQUFHO0lBQ3ZCLFdBQVcsRUFBRTtRQUNYLHFCQUFxQixFQUFFLDBCQUEwQjtRQUNqRCxpQkFBaUIsRUFBRSw4Q0FBOEM7UUFDakUsU0FBUyxFQUFFLDBCQUEwQjtRQUNyQyxXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLGNBQWMsRUFBRSx3QkFBd0I7UUFDeEMsYUFBYSxFQUFFLGlCQUFpQjtLQUNqQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvblNldHRpbmdzQ29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgT3JnYW5pemF0aW9uOiB7XHJcbiAgICAgIGdldE9yZ2FuaXphdGlvbkxpc3Q6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdlL29yZ2FuaXphdGlvbi9hbGwnLFxyXG4gICAgICBnZXRPcmdhbml6YXRpb246XHJcbiAgICAgICAgJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BhZ2Uvb3JnYW5pemF0aW9uL3tvcmdJZH0/cmV0dXJuVXNlclBhZ2U9ZmFsc2UmZXhjbHVkZU5vQWN0aXZlVmVyc2lvblBhZ2VzPXRydWUnXHJcbiAgICB9LFxyXG4gICAgUGFnZToge1xyXG4gICAgICBnZXRQYWdlOiAnL3BhZ2UnXHJcbiAgICB9LFxyXG4gICAgQXNzZXQ6IHtcclxuICAgICAgZ2V0QXNzZXQ6ICdhc3NldCcsXHJcbiAgICAgIGdldFBhZ2VBc3NldDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL2Fzc2V0L2dldHBhZ2VieWlkJyxcclxuICAgICAgZ2V0VXNlckFzc2V0OiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvYXNzZXQvZ2V0VXNlckFzc2V0cycsXHJcbiAgICAgIGdldFJvbGVBc3NldDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL2Fzc2V0L2dldFJvbGVBc3NldHMnLFxyXG4gICAgICBnZXRQb2xpY3lHcm91cEFzc2V0OiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvYXNzZXQvZ2V0UG9saWN5R3JvdXBBc3NldHMnXHJcbiAgICB9LFxyXG4gICAgVXNlcjoge1xyXG4gICAgICBnZXRVc2VyOiAnL29yZy91c2VyLycsXHJcbiAgICAgIGdldFVzZXJMaXN0OiAnL29yZy91c2VyL2FsbCcsXHJcbiAgICAgIGdldFVzZXJvcmdMaXN0OiAnL29yZy91c2VyL29yZ2FuaXphdGlvbi8nXHJcbiAgICB9LFxyXG4gICAgQ29uZmlnU2V0dGluZ3M6IHtcclxuICAgICAgc2F2ZUNvbmZpZzogJy9vcmcvY29uZmlnLXNldHRpbmdzL2NyZWF0ZScsXHJcbiAgICAgIGdldENvbmZpZ0xpc3Q6ICcvb3JnL2NvbmZpZy1zZXR0aW5ncy9saXN0JyxcclxuICAgICAgZ2V0Q29uZmlnQnlJZDogJy9vcmcvY29uZmlnLXNldHRpbmdzL2xpc3Q/aWQ9JyxcclxuICAgICAgZGVsZXRlQ29uZmlnOiAnL29yZy9jb25maWctc2V0dGluZ3MvJyxcclxuICAgICAgdXBkYXRlQ29uZmlnOiAnL29yZy9jb25maWctc2V0dGluZ3MvJyxcclxuICAgICAgcmVnaXN0cmF0aW9uSW5mbzogJy9vcmcvYXV0aC9jb25maWdzZXR0aW5ncydcclxuICAgIH0sXHJcbiAgICByb2xlOiB7XHJcbiAgICAgIGdldEFsbFVzZXJSb2xlOiAnL2FjY2Vzcy1jb250cm9sL3JvbGUnLFxyXG4gICAgICBjcmVhdGVSb2xlOiAnL2FjY2Vzcy1jb250cm9sL3JvbGUvY3JlYXRlJyxcclxuICAgICAgZ2V0TGFuZGluZ1BhZ2U6ICcvcGxhdGZvcm0vbWVudS9hcHBsaWNhdGlvbicsXHJcbiAgICAgIGFkZFBvbGljeUdyb3VwOiAnL2FjY2Vzcy1jb250cm9sL3JvbGUnLFxyXG4gICAgICBnZXRBbGxPcmdSb2xlOiAnL2FjY2Vzcy1jb250cm9sL3JvbGUvb3JnYW5pemF0aW9uL3tvcmdpZH0nLFxyXG4gICAgICBkb3NzaWVyOiAnL2Rvc3NpZXInXHJcbiAgICB9LFxyXG4gICAgRW1haWw6IHtcclxuICAgICAgZW1haWx0ZW1wbGF0ZUxpc3Q6ICcvc29sdXRpb24vZW1haWx0ZW1wbGF0ZS9jaGFubmVsL0VNQUlMJ1xyXG4gICAgfSxcclxuICAgIG9yZzoge1xyXG4gICAgICBnZXRPcmdhbml6YXRpb25zOiAnL29yZy9tYW5hZ2VtZW50LWdyb3VwL29yZ2FuaXphdGlvbi90cmVlJ1xyXG4gICAgfSxcclxuICAgIEF0dGFjaG1lbnRzOiB7XHJcbiAgICAgIEdldEF0dGFjaG1lbnRSZWZlcnJhbDogJy9yZWYvYXR0YWNobWVudC9yZWZlcnJhbCcsXHJcbiAgICAgIEdldENhdGVnb3J5TG9va3VwOiAnL3BsYXRmb3JtL21hc3Rlci9sb29rdXAvbG9va3VwYnljYXRlZ29yeW5hbWUnLFxyXG4gICAgICBVcGxvYWRLZXk6ICcvY29tbW9uL2ZpbGVzL3VwbG9hZC1rZXknLFxyXG4gICAgICBEb3dubG9hZEtleTogJy9jb21tb24vZmlsZXMvZG93bmxvYWQta2V5JyxcclxuICAgICAgUG9zdEF0dGFjaG1lbnQ6ICcvcmVmL2F0dGFjaG1lbnQvY3JlYXRlJyxcclxuICAgICAgUHV0QXR0YWNobWVudDogJy9yZWYvYXR0YWNobWVudCdcclxuICAgIH1cclxuICB9O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBBdHRhY2htZW50Q29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgQXR0YWNobWVudHM6IHtcclxuICAgICAgR2V0QXR0YWNobWVudFJlZmVycmFsOiAnL3JlZi9hdHRhY2htZW50L3JlZmVycmFsJyxcclxuICAgICAgR2V0Q2F0ZWdvcnlMb29rdXA6ICcvcGxhdGZvcm0vbWFzdGVyL2xvb2t1cC9sb29rdXBieWNhdGVnb3J5bmFtZScsXHJcbiAgICAgIFVwbG9hZEtleTogJy9jb21tb24vZmlsZXMvdXBsb2FkLWtleScsXHJcbiAgICAgIERvd25sb2FkS2V5OiAnL2NvbW1vbi9maWxlcy9kb3dubG9hZC1rZXknLFxyXG4gICAgICBQb3N0QXR0YWNobWVudDogJy9yZWYvYXR0YWNobWVudC9jcmVhdGUnLFxyXG4gICAgICBQdXRBdHRhY2htZW50OiAnL3JlZi9hdHRhY2htZW50J1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIl19