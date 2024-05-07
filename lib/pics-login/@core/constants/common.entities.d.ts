export declare class ListDataItem<T> {
    data?: T[];
    count?: number;
    pageId: any;
    statuskey?: string;
    intake: any;
    casenumber: any;
    dueDate: any;
    noOfDueDays: any;
}
export declare class DropdownModel {
    text?: string;
    value: any;
    constructor(initializer?: DropdownModel);
}
export declare class DorpDownRefValues {
    activeflag?: null;
    description?: null;
    displayorder?: number;
    displayvalue?: string;
    id?: string;
    insertedBy?: string;
    refkey?: string;
    updatedBy?: string;
}
export declare class MenuItem {
    assetname?: string;
    assettype?: number;
    id?: string;
    insertedBy?: string;
    insertedOn?: Date;
    parentassetid: any;
}
export declare class TabConfig {
    activeflag?: number;
    configjsonvalue: any;
    configtype?: string;
    id?: string;
    insertedBy?: string;
    insertedOn?: Date;
    purpose?: string;
    updatedBy?: string;
    updatedOn?: Date;
    title?: string;
    TabType?: string;
    parentId?: string;
}
export interface DynamicObject {
    [key: string]: any;
}
export declare class AttachmentUpload {
    encoding?: string;
    fieldname?: string;
    mimeType?: string;
    originalName?: string;
    path?: string;
    size?: number;
}
export declare class Alert {
    type?: AlertType;
    message?: string;
}
export declare enum AlertType {
    Success = 0,
    Error = 1,
    Info = 2,
    Warning = 3
}
export interface Theme {
    name: string;
    key: string;
    image: any;
    properties: any;
}
export interface FontSet {
    name: string;
    key: string;
    properties: any;
}
export interface AuthState {
    isAuthenticated: boolean;
    pages: any[];
}
export declare class UserDto {
    id?: number;
    name?: string;
    description?: string | null;
    priority?: number;
    order?: number;
    defaultpage?: UserRolePageDto;
    defaultpageid?: number;
    parentid?: number | null;
    parent?: UserRoleDto | null;
    constructor(data?: Partial<UserDto>);
}
export declare class UserRolePageDto {
    id?: number;
    name?: string;
    route?: string;
    icon?: string | null;
    order?: number;
    ismenu?: boolean;
    constructor(data?: Partial<UserRolePageDto>);
}
export declare class UserRoleDto {
    id?: number;
    name?: string;
    description?: string | null;
    priority?: number;
    order?: number;
    defaultpage?: UserRolePageDto;
    defaultpageid?: number;
    parentid?: number | null;
    parent?: UserRoleDto | null;
    constructor(data?: Partial<UserRoleDto>);
}
