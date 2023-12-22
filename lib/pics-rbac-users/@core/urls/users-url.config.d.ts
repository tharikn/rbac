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
            getOrgPolicyGroups: string;
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
