import { HttpService } from './http.service';
import * as i0 from "@angular/core";
export declare class AttachmentsService {
    private http;
    constructor(http: HttpService);
    getAttachmentReferral(referralid: any): import("rxjs").Observable<Object>;
    getCategoryLookup(name: any): import("rxjs").Observable<Object>;
    uploadKey(objparams: any): import("rxjs").Observable<Object>;
    downloadKey(objparams: any): import("rxjs").Observable<Object>;
    postAttachment(objparams: any): import("rxjs").Observable<Object>;
    putAttachment(objparams: any, attachmentId: any): import("rxjs").Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AttachmentsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AttachmentsService>;
}
