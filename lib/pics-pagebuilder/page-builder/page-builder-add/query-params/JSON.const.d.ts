export declare const documentJson: ({
    doc_id: number;
    doc_name: string;
    supported_types: string[];
    multi_page: boolean;
    mappings: {
        label: string;
        attr: string;
    }[];
    accuracy_acceptance_level_pcnt: number;
    purpose: string[];
    acceptable_accuracy_pcnt?: undefined;
} | {
    doc_id: number;
    doc_name: string;
    supported_types: string[];
    multi_page: boolean;
    mappings: {
        label: string;
        attr: string;
    }[];
    acceptable_accuracy_pcnt: number;
    purpose: string[];
    accuracy_acceptance_level_pcnt?: undefined;
})[];
