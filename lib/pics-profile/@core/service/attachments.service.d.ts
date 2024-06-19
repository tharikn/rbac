import { DataStoreService } from './data-store.service';
import * as i0 from "@angular/core";
export declare class AttachmentsService {
    private _storeservice;
    http: any;
    constructor(_storeservice: DataStoreService);
    uploadKey(objparams: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<AttachmentsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AttachmentsService>;
}
