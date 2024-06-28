export declare class DynamicSearchURL {
    static EndPoints: {
        userConfig: {
            getUserConfig: string;
            saveUserConfig: string;
            getStaticGridConfig: string;
        };
        documents: {
            generateExcel: string;
            generatePDF: string;
        };
        notification: {
            sendMail: string;
        };
        report: {
            schedulertrigger: string;
        };
        pageConfig: {
            pageVersion: string;
            page: string;
            postApiurl: string;
        };
        formResponse: {
            get: string;
            delete: string;
        };
        provider: {
            providerData: string;
        };
        criteria: {
            save: string;
            getByPageId: string;
        };
    };
}
