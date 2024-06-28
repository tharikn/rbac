import { DataStoreService } from './data-store.service';
import * as i0 from "@angular/core";
export declare class DataSourceService {
    private _storeservice;
    httpService: any;
    constructor(_storeservice: DataStoreService);
    getOrganizationDbs(): any;
    getSchema(dbAliasName: string): any;
    SchemaCheck(id: any, dbaliasname: any): any;
    updateData(data: any): any;
    updateSchemaList(data: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataSourceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DataSourceService>;
}
