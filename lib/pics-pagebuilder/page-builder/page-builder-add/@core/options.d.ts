export declare const options: {
    builder: {
        premium: boolean;
        basic: {
            title: string;
            weight: number;
            components: {
                textfield: boolean;
                textarea: boolean;
                fileupload: boolean;
                myrating: boolean;
                globalsearch: boolean;
                picsselect: boolean;
            };
        };
        advanced: {
            title: string;
            weight: number;
            components: {
                email: boolean;
                url: boolean;
                tags: boolean;
                address: boolean;
                survey: boolean;
                currency: boolean;
                signature: boolean;
                day: boolean;
                time: boolean;
                DateFieldComponent: boolean;
                phoneNumber: boolean;
                datetime: boolean;
            };
        };
        layout: {
            title: string;
            weight: number;
            components: {
                panel: boolean;
                table: boolean;
                tabs: boolean;
                well: boolean;
                columns: boolean;
                fieldset: boolean;
                content: boolean;
                htmlelement: boolean;
            };
        };
        data: {
            title: string;
            weight: string;
            components: {
                datagrid: boolean;
            };
        };
    };
    language: string;
};
