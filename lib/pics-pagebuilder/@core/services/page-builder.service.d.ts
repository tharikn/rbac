import { Observable } from 'rxjs';
import { DataStoreService } from './data-store.service';
import * as i0 from "@angular/core";
export declare class PageBuilderService {
    private _storeservice;
    httpService: any;
    constructor(_storeservice: DataStoreService);
    getAllPageDesigns(id: any): any;
    duplicateDesignPage(data: any, id: any): any;
    activatePage(pageId: string): any;
    deactivatePage(pageId: string): any;
    getVersionList(pageId?: number | string): Observable<any>;
    activateVersion(versionId?: number | string): Observable<any>;
    updatePageVersion(versionId?: number | string, formData?: any, createPage?: boolean): Observable<any>;
    copyPageVersion(data: any, id: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<PageBuilderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PageBuilderService>;
}
