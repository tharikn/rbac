import { Injectable } from '@angular/core';
import { AttachmentConfig } from '../url/auth-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./data-store.service";
export class AttachmentsService {
    _storeservice;
    http;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.http = res['HTTPSERVICE'];
            }
        });
    }
    getAttachmentReferral(referralid) {
        return this.http.get(AttachmentConfig.EndPoint.Attachments.GetAttachmentReferral + '/' + referralid);
    }
    getCategoryLookup(name) {
        return this.http.get(AttachmentConfig.EndPoint.Attachments.GetCategoryLookup + '/' + name);
    }
    uploadKey(objparams) {
        return this.http.post(AttachmentConfig.EndPoint.Attachments.UploadKey, objparams);
    }
    downloadKey(objparams) {
        return this.http.post(AttachmentConfig.EndPoint.Attachments.DownloadKey, objparams);
    }
    postAttachment(objparams) {
        return this.http.post(AttachmentConfig.EndPoint.Attachments.PostAttachment, objparams);
    }
    putAttachment(objparams, attachmentId) {
        console.log(AttachmentConfig.EndPoint.Attachments.PutAttachment + '/' + attachmentId, objparams);
        return this.http.patch(AttachmentConfig.EndPoint.Attachments.PutAttachment + '/' + attachmentId, objparams);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AttachmentsService, deps: [{ token: i1.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AttachmentsService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AttachmentsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0YWNobWVudHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL3BhZ2UtYnVpbGRlci9zcmMvbGliL3BpY3MtcGFnZWJ1aWxkZXIvQGNvcmUvc2VydmljZXMvYXR0YWNobWVudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFNMUQsTUFBTSxPQUFPLGtCQUFrQjtJQUVUO0lBRHBCLElBQUksQ0FBTTtJQUNWLFlBQW9CLGFBQStCO1FBQS9CLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNyRCxJQUFJLEdBQUcsRUFBRTtnQkFDUCxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTthQUMvQjtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdILHFCQUFxQixDQUFDLFVBQVU7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUN2RyxDQUFDO0lBQ0QsaUJBQWlCLENBQUMsSUFBSTtRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFDRCxTQUFTLENBQUMsU0FBUztRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFDRCxXQUFXLENBQUMsU0FBUztRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFDRCxjQUFjLENBQUMsU0FBUztRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFDRCxhQUFhLENBQUMsU0FBUyxFQUFFLFlBQVk7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsR0FBRyxHQUFHLEdBQUcsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2pHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEdBQUcsR0FBRyxHQUFHLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM5RyxDQUFDO3dHQTdCWSxrQkFBa0I7NEdBQWxCLGtCQUFrQixjQUZqQixNQUFNOzs0RkFFUCxrQkFBa0I7a0JBSDlCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBdHRhY2htZW50Q29uZmlnIH0gZnJvbSAnLi4vdXJsL2F1dGgtdXJsLmNvbmZpZyc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdHRhY2htZW50c1NlcnZpY2Uge1xyXG4gIGh0dHA6IGFueTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdG9yZXNlcnZpY2U6IERhdGFTdG9yZVNlcnZpY2UpIHtcclxuICAgIHRoaXMuX3N0b3Jlc2VydmljZS5jdXJyZW50U3RvcmUuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgdGhpcy5odHRwID0gcmVzWydIVFRQU0VSVklDRSddXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbmdldEF0dGFjaG1lbnRSZWZlcnJhbChyZWZlcnJhbGlkKSB7XHJcbiAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoQXR0YWNobWVudENvbmZpZy5FbmRQb2ludC5BdHRhY2htZW50cy5HZXRBdHRhY2htZW50UmVmZXJyYWwgKyAnLycgKyByZWZlcnJhbGlkKTtcclxufVxyXG5nZXRDYXRlZ29yeUxvb2t1cChuYW1lKSB7XHJcbiAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoQXR0YWNobWVudENvbmZpZy5FbmRQb2ludC5BdHRhY2htZW50cy5HZXRDYXRlZ29yeUxvb2t1cCArICcvJyArIG5hbWUpO1xyXG59XHJcbnVwbG9hZEtleShvYmpwYXJhbXMpIHtcclxuICByZXR1cm4gdGhpcy5odHRwLnBvc3QoQXR0YWNobWVudENvbmZpZy5FbmRQb2ludC5BdHRhY2htZW50cy5VcGxvYWRLZXksIG9ianBhcmFtcyk7XHJcbn1cclxuZG93bmxvYWRLZXkob2JqcGFyYW1zKSB7XHJcbiAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KEF0dGFjaG1lbnRDb25maWcuRW5kUG9pbnQuQXR0YWNobWVudHMuRG93bmxvYWRLZXksIG9ianBhcmFtcyk7XHJcbn1cclxucG9zdEF0dGFjaG1lbnQob2JqcGFyYW1zKSB7XHJcbiAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KEF0dGFjaG1lbnRDb25maWcuRW5kUG9pbnQuQXR0YWNobWVudHMuUG9zdEF0dGFjaG1lbnQsIG9ianBhcmFtcyk7XHJcbn1cclxucHV0QXR0YWNobWVudChvYmpwYXJhbXMsIGF0dGFjaG1lbnRJZCkge1xyXG4gIGNvbnNvbGUubG9nKEF0dGFjaG1lbnRDb25maWcuRW5kUG9pbnQuQXR0YWNobWVudHMuUHV0QXR0YWNobWVudCArICcvJyArIGF0dGFjaG1lbnRJZCwgb2JqcGFyYW1zKTtcclxuICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKEF0dGFjaG1lbnRDb25maWcuRW5kUG9pbnQuQXR0YWNobWVudHMuUHV0QXR0YWNobWVudCArICcvJyArIGF0dGFjaG1lbnRJZCwgb2JqcGFyYW1zKTtcclxufVxyXG59XHJcbiJdfQ==