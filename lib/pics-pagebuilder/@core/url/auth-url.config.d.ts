export declare class AuthURL {
    static EndPoints: {
        auth: {
            user: {
                conformMail: string;
                changePassword: string;
                login: string;
                refreshToken: string;
                logout: string;
                userInfo: string;
                userRole: string;
                routeToDynamicPage: string;
                authMe: string;
                resetPassword: string;
                orgList: string;
                notification: string;
                workerAvailability: string;
                getWorkerAvailability: string;
            };
            permission: {
                permissionRoleById: string;
                pagePermission: string;
                pageLookupPermission: string;
            };
            microstrategy: {
                login: string;
                getLibrary: string;
            };
        };
    };
}
export declare class CommonUrlConfig {
    static EndPoint: {
        dropDown: {
            page: string;
            Database: string;
            DGPJsonMode: string;
        };
        notification: {
            post: string;
        };
    };
}
export declare class AttachmentConfig {
    static EndPoint: {
        Attachments: {
            GetAttachmentReferral: string;
            GetCategoryLookup: string;
            UploadKey: string;
            DownloadKey: string;
            PostAttachment: string;
            PutAttachment: string;
        };
    };
}
