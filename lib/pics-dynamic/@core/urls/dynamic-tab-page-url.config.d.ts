export declare class DynamicTabPageConfig {
    static EndPoint: {
        Page: {
            getActivePage: string;
            getPage: string;
            getPageById: string;
            getResponseByPageId: string;
            createFormResponse: string;
            patchFormResponse: string;
            updateFormResponse: string;
        };
        Narrative: {
            getIncidentListById: string;
        };
        Notification: {
            createSurveyConfig: string;
        };
        Finance: {
            exportDocument: string;
            uploadDocument: string;
            getUniqueId: string;
        };
        Attachments: {
            createAttachment: string;
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
