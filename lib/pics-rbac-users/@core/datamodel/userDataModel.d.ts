export interface UserGroup {
    id?: string;
    email?: string;
    username?: string;
    firstname?: string;
    lastname?: string;
    length: number;
    additionalinfo: any;
    islocked?: any;
}
export interface ProviderGroup {
    id?: number;
    fullName?: string;
    address_1?: string;
    address_2?: string;
    city?: string;
    county?: string;
    zipcode?: string;
    state?: string;
    phone?: string;
    created?: string;
    createdBy?: string;
    updated?: string;
    updatedBy?: null;
    deleted?: boolean;
    contracted?: boolean;
    speciality?: number;
}
