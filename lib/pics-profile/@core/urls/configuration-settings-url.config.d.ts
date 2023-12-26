export declare class ConfigurationSettingsConfig {
    static EndPoint: {
        Organization: {
            getOrganizationList: string;
            getOrganization: string;
        };
        Page: {
            getPage: string;
        };
        Asset: {
            getAsset: string;
            getPageAsset: string;
            getUserAsset: string;
            getRoleAsset: string;
            getPolicyGroupAsset: string;
        };
        User: {
            getUser: string;
            getUserList: string;
            getUserorgList: string;
        };
        ConfigSettings: {
            saveConfig: string;
            getConfigList: string;
            getConfigById: string;
            deleteConfig: string;
            updateConfig: string;
            registrationInfo: string;
        };
        role: {
            getAllUserRole: string;
            createRole: string;
            getLandingPage: string;
            addPolicyGroup: string;
            getAllOrgRole: string;
            dossier: string;
        };
        Email: {
            emailtemplateList: string;
        };
        org: {
            getOrganizations: string;
        };
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
