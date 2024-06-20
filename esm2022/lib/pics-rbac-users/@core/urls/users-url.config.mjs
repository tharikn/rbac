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
            getOrgPolicyGroups: '/platform/page-designer/policyGroup/organization/{organizationid}'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMtdXJsLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9yYmFjLXVzZXJzL3NyYy9saWIvcGljcy1yYmFjLXVzZXJzL0Bjb3JlL3VybHMvdXNlcnMtdXJsLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sVUFBVTtJQUNkLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDdkIsSUFBSSxFQUFFO1lBQ0osY0FBYyxFQUFFLHNCQUFzQjtZQUN0QyxVQUFVLEVBQUUsNkJBQTZCO1lBQ3pDLGNBQWMsRUFBRSw0QkFBNEI7WUFDNUMsY0FBYyxFQUFFLHNCQUFzQjtZQUN0QyxhQUFhLEVBQUUsMkNBQTJDO1lBQzFELE9BQU8sRUFBRSxVQUFVO1NBQ3BCO0tBQ0YsQ0FBQzs7QUFHSixNQUFNLE9BQU8sVUFBVTtJQUNkLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDdkIsSUFBSSxFQUFFO1lBQ0osY0FBYyxFQUFFLFdBQVc7WUFDM0Isd0JBQXdCLEVBQUUscUNBQXFDO1lBQy9ELGFBQWEsRUFBRSx5REFBeUQ7WUFDeEUsWUFBWSxFQUFFLG9CQUFvQjtZQUNsQyxVQUFVLEVBQUUsa0JBQWtCO1lBQzlCLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsZUFBZSxFQUFFLDJCQUEyQjtZQUM1QyxpQkFBaUIsRUFBRSx5QkFBeUI7WUFDNUMsY0FBYyxFQUFFLDhCQUE4QjtTQUMvQztRQUNELFFBQVEsRUFBRTtZQUNSLGVBQWUsRUFBRSxlQUFlO1lBQ2hDLGtCQUFrQixFQUFFLHNCQUFzQjtZQUMxQyxlQUFlLEVBQUUsOEJBQThCO1NBQ2hEO0tBQ0YsQ0FBQzs7QUFFSixNQUFNLE9BQU8sZ0JBQWdCO0lBQ3BCLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDdkIsV0FBVyxFQUFFO1lBQ1gscUJBQXFCLEVBQUUsMEJBQTBCO1lBQ2pELGlCQUFpQixFQUFFLDhDQUE4QztZQUNqRSxTQUFTLEVBQUUsMEJBQTBCO1lBQ3JDLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsY0FBYyxFQUFFLHdCQUF3QjtZQUN4QyxhQUFhLEVBQUUsaUJBQWlCO1NBQ2pDO0tBQ0YsQ0FBQzs7QUFFSixNQUFNLE9BQU8saUJBQWlCO0lBQ3JCLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDdkIsV0FBVyxFQUFFO1lBQ1gsa0JBQWtCLEVBQUUsbUVBQW1FO1NBQ3hGO0tBQ0YsQ0FBQzs7QUFFSixNQUFNLE9BQU8sUUFBUTtJQUNuQixPQUFPLEdBQUUsRUFBRSxDQUFDO0lBQ1osUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNkLE1BQU0sQ0FBTztJQUNiLEtBQUssQ0FBTztJQUNaLFdBQVcsQ0FBZTtDQUMzQjtBQUNELE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFlBQVksQ0FBVTtJQUN0QixZQUFZLENBQVU7SUFDdEIsT0FBTyxDQUFVO0lBQ2pCLGFBQWEsQ0FBVTtJQUN2QixhQUFhLENBQVU7SUFDdkIsUUFBUSxDQUFTO0NBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFJvbGVDb25maWcge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnQgPSB7XHJcbiAgICByb2xlOiB7XHJcbiAgICAgIGdldEFsbFVzZXJSb2xlOiAnL2FjY2Vzcy1jb250cm9sL3JvbGUnLFxyXG4gICAgICBjcmVhdGVSb2xlOiAnL2FjY2Vzcy1jb250cm9sL3JvbGUvY3JlYXRlJyxcclxuICAgICAgZ2V0TGFuZGluZ1BhZ2U6ICcvcGxhdGZvcm0vbWVudS9hcHBsaWNhdGlvbicsXHJcbiAgICAgIGFkZFBvbGljeUdyb3VwOiAnL2FjY2Vzcy1jb250cm9sL3JvbGUnLFxyXG4gICAgICBnZXRBbGxPcmdSb2xlOiAnL2FjY2Vzcy1jb250cm9sL3JvbGUvb3JnYW5pemF0aW9uL3tvcmdpZH0nLFxyXG4gICAgICBkb3NzaWVyOiAnL2Rvc3NpZXInXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJDb25maWcge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnQgPSB7XHJcbiAgICBVc2VyOiB7XHJcbiAgICAgIGdldEFsbFVzZXJMaXN0OiAnL29yZy91c2VyJyxcclxuICAgICAgZ2V0QWxsVXNlckFjdGl2ZUluYWN0aXZlOiAnL29yZy91c2VyP2luY2x1ZGVJbmFjdGl2ZVVzZXJzPXRydWUnLFxyXG4gICAgICBnZXRVc2VyQ29uZmlnOiAnL29yZy91c2VyL2dldFVzZXJQcmVmZXJlbmNlL1VTRVJfVEhFTUVfUFJFRkVSRU5DRVMve2lkfScsXHJcbiAgICAgIGFjdGl2YXRlVXNlcjogJy9vcmcvdXNlci9hY3RpdmF0ZScsXHJcbiAgICAgIGNyZWF0ZVVzZXI6ICcvb3JnL3VzZXIvY3JlYXRlJyxcclxuICAgICAgdXNlclJvbGU6ICcvb3JnL3VzZXIvcm9sZScsXHJcbiAgICAgIG1hbmFnZW1lbnRncm91cDogJy9vcmcvdGVhbS9tYW5hZ2VtZW50Z3JvdXAnLFxyXG4gICAgICBnZXRBbGxVc2VyT3JnTGlzdDogJy9vcmcvdXNlci9vcmdhbml6YXRpb24vJyxcclxuICAgICAgc2F2ZVVzZXJDb25maWc6ICcvb3JnL3VzZXIvc2F2ZVVzZXJQcmVmZXJlbmNlJ1xyXG4gICAgfSxcclxuICAgIFByb3ZpZGVyOiB7XHJcbiAgICAgIGdldFByb3ZpZGVyTGlzdDogJy9yZWYvcHJvdmlkZXInLFxyXG4gICAgICBzZWFyY2hQcm92aWRlckxpc3Q6ICcvcmVmL3Byb3ZpZGVyL3NlYXJjaCcsXHJcbiAgICAgIGFkZFByb3ZpZGVyVXNlcjogJy9yZWYvcHJvdmlkZXIvY3JlYXRlL2FjY291bnQnXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5leHBvcnQgY2xhc3MgQXR0YWNobWVudENvbmZpZyB7XHJcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludCA9IHtcclxuICAgIEF0dGFjaG1lbnRzOiB7XHJcbiAgICAgIEdldEF0dGFjaG1lbnRSZWZlcnJhbDogJy9yZWYvYXR0YWNobWVudC9yZWZlcnJhbCcsXHJcbiAgICAgIEdldENhdGVnb3J5TG9va3VwOiAnL3BsYXRmb3JtL21hc3Rlci9sb29rdXAvbG9va3VwYnljYXRlZ29yeW5hbWUnLFxyXG4gICAgICBVcGxvYWRLZXk6ICcvY29tbW9uL2ZpbGVzL3VwbG9hZC1rZXknLFxyXG4gICAgICBEb3dubG9hZEtleTogJy9jb21tb24vZmlsZXMvZG93bmxvYWQta2V5JyxcclxuICAgICAgUG9zdEF0dGFjaG1lbnQ6ICcvcmVmL2F0dGFjaG1lbnQvY3JlYXRlJyxcclxuICAgICAgUHV0QXR0YWNobWVudDogJy9yZWYvYXR0YWNobWVudCdcclxuICAgIH1cclxuICB9O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBQb2xpY3lHcm91cENvbmZpZyB7XHJcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludCA9IHtcclxuICAgIHBvbGljeUdyb3VwOiB7XHJcbiAgICAgIGdldE9yZ1BvbGljeUdyb3VwczogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BvbGljeUdyb3VwL29yZ2FuaXphdGlvbi97b3JnYW5pemF0aW9uaWR9J1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJCQUNJTkZPIHtcclxuICBhcGlIb3N0ID0nJztcclxuICB0b2tlbktleSA9ICcnO1xyXG4gIG90aGVycz86IGFueTtcclxuICBvcmdJRD86IGFueTtcclxuICBlbnZpcm9ubWVudD86IEVudmlyb25tZW50O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XHJcbiAgbXN0clVzZXJuYW1lPzogc3RyaW5nO1xyXG4gIG1zdHJQYXNzd29yZD86IHN0cmluZztcclxuICBtc3RyVVJMPzogc3RyaW5nO1xyXG4gIG1zdHJQcm9qZWN0SUQ/OiBzdHJpbmc7XHJcbiAgYXBwbGljYXRpb25pZD86IHN0cmluZztcclxuICBwcmlvcml0eT86IHN0cmluZ1xyXG59XHJcblxyXG5cclxuIl19