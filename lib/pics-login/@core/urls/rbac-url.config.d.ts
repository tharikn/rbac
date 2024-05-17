export declare class RoleConfig {
    static EndPoint: {
        role: {
            getAllUserRole: string;
            createRole: string;
            getLandingPage: string;
            addPolicyGroup: string;
            getAllOrgRole: string;
            dossier: string;
        };
    };
}
export declare class UserConfig {
    static EndPoint: {
        User: {
            getAllUserList: string;
            getAllUserActiveInactive: string;
            getUserConfig: string;
            activateUser: string;
            createUser: string;
            userRole: string;
            managementgroup: string;
            getAllUserOrgList: string;
            saveUserConfig: string;
        };
        Provider: {
            getProviderList: string;
            searchProviderList: string;
            addProviderUser: string;
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
export declare class PolicyGroupConfig {
    static EndPoint: {
        policyGroup: {
            getPolicyGroupList: string;
            getAllPolicyGroupList: string;
            createPolicyGroup: string;
            getOrgPolicyGroups: string;
        };
    };
}
export declare class PermissionsURL {
    static EndPoints: {
        permission: {
            permissionRoleById: string;
            pagePermission: string;
            getPermission: string;
            createPermission: string;
            updateDeletePermission: string;
            getPermissionTree: string;
            getPermissionTypes: string;
            applicationPermissionsTree: string;
        };
        page: {
            createPage: string;
            updateDeletePage: string;
            AllPageTree: string;
        };
    };
}
export declare class AccessManagementConfig {
    static EndPoint: {
        Organization: {
            getOrganizationList: string;
            getOrganization: string;
        };
    };
}
export declare class MasterURL {
    static EndPoints: {
        lookup: {
            createCategory: string;
            updateDeleteCategory: string;
            lookup: string;
            createLookup: string;
            getPermissionRoleById: string;
            getAllCategoryTree: string;
            getLookupTree: string;
            getPermissionsTree: string;
        };
    };
}
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
                userValidate: string;
                generateLoginUrl: string;
                getTokenValidationUrl: string;
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
export declare class RBACINFO {
    apiHost: string;
    tokenKey: string;
    others?: any;
    orgID?: any;
    environment?: Environment;
}
export declare class Environment {
    mstrUsername?: string;
    mstrPassword?: string;
    mstrURL?: string;
    mstrProjectID?: string;
    applicationid?: string;
    priority?: string;
}
