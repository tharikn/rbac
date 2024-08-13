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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9AY29yZS9jb25maWcvYXV0aC11cmwuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxPQUFPO0lBQ1gsTUFBTSxDQUFDLFNBQVMsR0FBRztRQUN4QixJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUU7Z0JBQ0osV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsY0FBYyxFQUFFLHdDQUF3QztnQkFDeEQsS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsWUFBWSxFQUFFLHlCQUF5QjtnQkFDdkMsTUFBTSxFQUFFLGtCQUFrQjtnQkFDMUIsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsa0JBQWtCLEVBQ2hCLHdHQUF3RztnQkFDMUcsTUFBTSxFQUFFLGNBQWM7Z0JBQ3RCLGFBQWEsRUFBRSwwQkFBMEI7Z0JBQ3pDLE9BQU8sRUFBRSx5Q0FBeUM7Z0JBQ2xELFlBQVksRUFBRSxzQkFBc0I7Z0JBQ3BDLGtCQUFrQixFQUFFLDJCQUEyQjtnQkFDL0MscUJBQXFCLEVBQUUsMEJBQTBCO2FBQ2xEO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLGtCQUFrQixFQUFFLHNDQUFzQztnQkFDMUQsY0FBYyxFQUFFLGlDQUFpQztnQkFDakQsb0JBQW9CLEVBQUUsd0NBQXdDO2FBQy9EO1lBQ0QsYUFBYSxFQUFFO2dCQUNiLEtBQUssRUFBRSwrQkFBK0I7Z0JBQ3RDLFVBQVUsRUFBRSxpQ0FBaUM7YUFDOUM7U0FDRjtLQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXV0aFVSTCB7XHJcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludHMgPSB7XHJcbiAgICBhdXRoOiB7XHJcbiAgICAgIHVzZXI6IHtcclxuICAgICAgICBjb25mb3JtTWFpbDogJy9vcmcvYXV0aC9mb3Jnb3QtcGFzc3dvcmQnLFxyXG4gICAgICAgIGNoYW5nZVBhc3N3b3JkOiAnL29yZy9hdXRoL2ZvcmdvdC1wYXNzd29yZC12ZXJpZmljYXRpb24nLFxyXG4gICAgICAgIGxvZ2luOiAnL29yZy9hdXRoL2xvZ2luJyxcclxuICAgICAgICByZWZyZXNoVG9rZW46ICcvb3JnL2F1dGgvcmVmcmVzaC10b2tlbicsXHJcbiAgICAgICAgbG9nb3V0OiAnL29yZy9hdXRoL2xvZ291dCcsXHJcbiAgICAgICAgdXNlckluZm86ICcvb3JnL3VzZXIvcGFnZS9saXN0JyxcclxuICAgICAgICB1c2VyUm9sZTogJy9vcmcvdXNlci97aWR9JyxcclxuICAgICAgICByb3V0ZVRvRHluYW1pY1BhZ2U6XHJcbiAgICAgICAgICAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcGFnZS9vcmdhbml6YXRpb24ve29yZ2lkfT9yZXR1cm5Vc2VyUGFnZT10cnVlJmV4Y2x1ZGVOb0FjdGl2ZVZlcnNpb25QYWdlcz10cnVlJyxcclxuICAgICAgICBhdXRoTWU6ICcvb3JnL2F1dGgvbWUnLFxyXG4gICAgICAgIHJlc2V0UGFzc3dvcmQ6ICcvb3JnL3VzZXIvcmVzZXQtcGFzc3dvcmQnLFxyXG4gICAgICAgIG9yZ0xpc3Q6ICcvb3JnL21hbmFnZW1lbnQtZ3JvdXAvb3JnYW5pemF0aW9uL3RyZWUnLFxyXG4gICAgICAgIG5vdGlmaWNhdGlvbjogJy93b3JrZXIvbm90aWZpY2F0aW9uJyxcclxuICAgICAgICB3b3JrZXJBdmFpbGFiaWxpdHk6ICcvd29ya2VyL3VwZGF0ZUF2YWlsYWJsaXR5JyxcclxuICAgICAgICBnZXRXb3JrZXJBdmFpbGFiaWxpdHk6ICcvd29ya2VyL2dldEJ5Q3VycmVudFVzZXInXHJcbiAgICAgIH0sXHJcbiAgICAgIHBlcm1pc3Npb246IHtcclxuICAgICAgICBwZXJtaXNzaW9uUm9sZUJ5SWQ6ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9yb2xlL3tpZH0nLFxyXG4gICAgICAgIHBhZ2VQZXJtaXNzaW9uOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vcGFnZScsXHJcbiAgICAgICAgcGFnZUxvb2t1cFBlcm1pc3Npb246ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9wYWdlL2xvb2t1cCdcclxuICAgICAgfSxcclxuICAgICAgbWljcm9zdHJhdGVneToge1xyXG4gICAgICAgIGxvZ2luOiAnL3BsYXRmb3JtL21pY3Jvc3RyYXRlZ3kvbG9naW4nLFxyXG4gICAgICAgIGdldExpYnJhcnk6ICcvcGxhdGZvcm0vbWljcm9zdHJhdGVneS9saWJyYXJ5J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iXX0=