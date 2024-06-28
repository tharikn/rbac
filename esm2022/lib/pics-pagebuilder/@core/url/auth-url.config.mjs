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
            },
            microstrategy: {
                login: '/platform/microstrategy/login',
                getLibrary: '/platform/microstrategy/library'
            }
        }
    };
}
export class CommonUrlConfig {
    static EndPoint = {
        dropDown: {
            page: '/platform/master/lookup/lookupbycategoryname/PAGE',
            Database: '/referencetype/Database',
            DGPJsonMode: '/referencetype/DGPJsonMode'
        },
        notification: {
            post: '/platform/notification/{id}'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvcGFnZS1idWlsZGVyL3NyYy9saWIvcGljcy1wYWdlYnVpbGRlci9AY29yZS91cmwvYXV0aC11cmwuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxPQUFPO0lBQ1gsTUFBTSxDQUFDLFNBQVMsR0FBRztRQUN4QixJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUU7Z0JBQ0osV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsY0FBYyxFQUFFLHdDQUF3QztnQkFDeEQsS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsWUFBWSxFQUFFLHlCQUF5QjtnQkFDdkMsTUFBTSxFQUFFLGtCQUFrQjtnQkFDMUIsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsa0JBQWtCLEVBQ2hCLHdHQUF3RztnQkFDMUcsTUFBTSxFQUFFLGNBQWM7Z0JBQ3RCLGFBQWEsRUFBRSwwQkFBMEI7Z0JBQ3pDLE9BQU8sRUFBRSx5Q0FBeUM7Z0JBQ2xELFlBQVksRUFBRSxzQkFBc0I7Z0JBQ3BDLGtCQUFrQixFQUFFLDJCQUEyQjtnQkFDL0MscUJBQXFCLEVBQUUsMEJBQTBCO2FBQ2xEO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLGtCQUFrQixFQUFFLHNDQUFzQztnQkFDMUQsY0FBYyxFQUFFLGlDQUFpQztnQkFDakQsb0JBQW9CLEVBQUUsd0NBQXdDO2FBQy9EO1lBQ0QsYUFBYSxFQUFFO2dCQUNiLEtBQUssRUFBRSwrQkFBK0I7Z0JBQ3RDLFVBQVUsRUFBRSxpQ0FBaUM7YUFDOUM7U0FDRjtLQUNGLENBQUM7O0FBSUosTUFBTSxPQUFPLGVBQWU7SUFDbkIsTUFBTSxDQUFDLFFBQVEsR0FBRztRQUN2QixRQUFRLEVBQUU7WUFDUixJQUFJLEVBQUUsbURBQW1EO1lBQ3pELFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsV0FBVyxFQUFFLDRCQUE0QjtTQUMxQztRQUNELFlBQVksRUFBRTtZQUNaLElBQUksRUFBRSw2QkFBNkI7U0FDcEM7S0FDRixDQUFDOztBQUdKLE1BQU0sT0FBTyxnQkFBZ0I7SUFDcEIsTUFBTSxDQUFDLFFBQVEsR0FBRztRQUN2QixXQUFXLEVBQUU7WUFDWCxxQkFBcUIsRUFBRSwwQkFBMEI7WUFDakQsaUJBQWlCLEVBQUUsOENBQThDO1lBQ2pFLFNBQVMsRUFBRSwwQkFBMEI7WUFDckMsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxjQUFjLEVBQUUsd0JBQXdCO1lBQ3hDLGFBQWEsRUFBRSxpQkFBaUI7U0FDakM7S0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEF1dGhVUkwge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnRzID0ge1xyXG4gICAgYXV0aDoge1xyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgY29uZm9ybU1haWw6ICcvb3JnL2F1dGgvZm9yZ290LXBhc3N3b3JkJyxcclxuICAgICAgICBjaGFuZ2VQYXNzd29yZDogJy9vcmcvYXV0aC9mb3Jnb3QtcGFzc3dvcmQtdmVyaWZpY2F0aW9uJyxcclxuICAgICAgICBsb2dpbjogJy9vcmcvYXV0aC9sb2dpbicsXHJcbiAgICAgICAgcmVmcmVzaFRva2VuOiAnL29yZy9hdXRoL3JlZnJlc2gtdG9rZW4nLFxyXG4gICAgICAgIGxvZ291dDogJy9vcmcvYXV0aC9sb2dvdXQnLFxyXG4gICAgICAgIHVzZXJJbmZvOiAnL29yZy91c2VyL3BhZ2UvbGlzdCcsXHJcbiAgICAgICAgdXNlclJvbGU6ICcvb3JnL3VzZXIve2lkfScsXHJcbiAgICAgICAgcm91dGVUb0R5bmFtaWNQYWdlOlxyXG4gICAgICAgICAgJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BhZ2Uvb3JnYW5pemF0aW9uL3tvcmdpZH0/cmV0dXJuVXNlclBhZ2U9dHJ1ZSZleGNsdWRlTm9BY3RpdmVWZXJzaW9uUGFnZXM9dHJ1ZScsXHJcbiAgICAgICAgYXV0aE1lOiAnL29yZy9hdXRoL21lJyxcclxuICAgICAgICByZXNldFBhc3N3b3JkOiAnL29yZy91c2VyL3Jlc2V0LXBhc3N3b3JkJyxcclxuICAgICAgICBvcmdMaXN0OiAnL29yZy9tYW5hZ2VtZW50LWdyb3VwL29yZ2FuaXphdGlvbi90cmVlJyxcclxuICAgICAgICBub3RpZmljYXRpb246ICcvd29ya2VyL25vdGlmaWNhdGlvbicsXHJcbiAgICAgICAgd29ya2VyQXZhaWxhYmlsaXR5OiAnL3dvcmtlci91cGRhdGVBdmFpbGFibGl0eScsXHJcbiAgICAgICAgZ2V0V29ya2VyQXZhaWxhYmlsaXR5OiAnL3dvcmtlci9nZXRCeUN1cnJlbnRVc2VyJ1xyXG4gICAgICB9LFxyXG4gICAgICBwZXJtaXNzaW9uOiB7XHJcbiAgICAgICAgcGVybWlzc2lvblJvbGVCeUlkOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vcm9sZS97aWR9JyxcclxuICAgICAgICBwYWdlUGVybWlzc2lvbjogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3BhZ2UnLFxyXG4gICAgICAgIHBhZ2VMb29rdXBQZXJtaXNzaW9uOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vcGFnZS9sb29rdXAnXHJcbiAgICAgIH0sXHJcbiAgICAgIG1pY3Jvc3RyYXRlZ3k6IHtcclxuICAgICAgICBsb2dpbjogJy9wbGF0Zm9ybS9taWNyb3N0cmF0ZWd5L2xvZ2luJyxcclxuICAgICAgICBnZXRMaWJyYXJ5OiAnL3BsYXRmb3JtL21pY3Jvc3RyYXRlZ3kvbGlicmFyeSdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tbW9uVXJsQ29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgZHJvcERvd246IHtcclxuICAgICAgcGFnZTogJy9wbGF0Zm9ybS9tYXN0ZXIvbG9va3VwL2xvb2t1cGJ5Y2F0ZWdvcnluYW1lL1BBR0UnLFxyXG4gICAgICBEYXRhYmFzZTogJy9yZWZlcmVuY2V0eXBlL0RhdGFiYXNlJyxcclxuICAgICAgREdQSnNvbk1vZGU6ICcvcmVmZXJlbmNldHlwZS9ER1BKc29uTW9kZSdcclxuICAgIH0sXHJcbiAgICBub3RpZmljYXRpb246IHtcclxuICAgICAgcG9zdDogJy9wbGF0Zm9ybS9ub3RpZmljYXRpb24ve2lkfSdcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXR0YWNobWVudENvbmZpZyB7XHJcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludCA9IHtcclxuICAgIEF0dGFjaG1lbnRzOiB7XHJcbiAgICAgIEdldEF0dGFjaG1lbnRSZWZlcnJhbDogJy9yZWYvYXR0YWNobWVudC9yZWZlcnJhbCcsXHJcbiAgICAgIEdldENhdGVnb3J5TG9va3VwOiAnL3BsYXRmb3JtL21hc3Rlci9sb29rdXAvbG9va3VwYnljYXRlZ29yeW5hbWUnLFxyXG4gICAgICBVcGxvYWRLZXk6ICcvY29tbW9uL2ZpbGVzL3VwbG9hZC1rZXknLFxyXG4gICAgICBEb3dubG9hZEtleTogJy9jb21tb24vZmlsZXMvZG93bmxvYWQta2V5JyxcclxuICAgICAgUG9zdEF0dGFjaG1lbnQ6ICcvcmVmL2F0dGFjaG1lbnQvY3JlYXRlJyxcclxuICAgICAgUHV0QXR0YWNobWVudDogJy9yZWYvYXR0YWNobWVudCdcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG4iXX0=