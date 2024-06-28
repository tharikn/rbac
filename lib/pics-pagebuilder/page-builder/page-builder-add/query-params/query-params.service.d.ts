import { DataStoreService } from '../../../@core/services/data-store.service';
import * as i0 from "@angular/core";
export declare class QueryParamsService {
    private _storeservice;
    httpService: any;
    constructor(_storeservice: DataStoreService);
    getSchemaList(orgid: any, dbAliasName: string): any;
    getTableBySchemaName(schema: string, dbAliasName: string): any;
    getTableFields(schema: string, table: string, dbAliasName: string, pageType: string): any;
    getColumnsOfRelatedTables(relatedTables: Array<any>): any;
    getRelatedTableFields(table: string, schema: string, dbAliasName: string): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<QueryParamsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<QueryParamsService>;
}
