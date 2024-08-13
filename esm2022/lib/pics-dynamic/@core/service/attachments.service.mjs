import { Injectable } from '@angular/core';
import { AttachmentConfig } from '../config/common-url.config';
import * as i0 from "@angular/core";
import * as i1 from "../service/http.service";
export class AttachmentsService {
    http;
    constructor(http) {
        this.http = http;
        // This is intentional
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AttachmentsService, deps: [{ token: i1.HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AttachmentsService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AttachmentsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0YWNobWVudHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvQGNvcmUvc2VydmljZS9hdHRhY2htZW50cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7OztBQUsvRCxNQUFNLE9BQU8sa0JBQWtCO0lBQ1Q7SUFBcEIsWUFBb0IsSUFBaUI7UUFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNsQyxzQkFBc0I7SUFDekIsQ0FBQztJQUVELHFCQUFxQixDQUFDLFVBQVU7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUN2RyxDQUFDO0lBQ0QsaUJBQWlCLENBQUMsSUFBSTtRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFDRCxTQUFTLENBQUMsU0FBUztRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFDRCxXQUFXLENBQUMsU0FBUztRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFDRCxjQUFjLENBQUMsU0FBUztRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFDRCxhQUFhLENBQUMsU0FBUyxFQUFFLFlBQVk7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsR0FBRyxHQUFHLEdBQUcsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2pHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEdBQUcsR0FBRyxHQUFHLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM5RyxDQUFDO3dHQXZCVSxrQkFBa0I7NEdBQWxCLGtCQUFrQixjQUZqQixNQUFNOzs0RkFFUCxrQkFBa0I7a0JBSDlCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvaHR0cC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXR0YWNobWVudENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb21tb24tdXJsLmNvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdHRhY2htZW50c1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cFNlcnZpY2UpIHtcclxuICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsXHJcbiAgfVxyXG5cclxuICBnZXRBdHRhY2htZW50UmVmZXJyYWwocmVmZXJyYWxpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoQXR0YWNobWVudENvbmZpZy5FbmRQb2ludC5BdHRhY2htZW50cy5HZXRBdHRhY2htZW50UmVmZXJyYWwgKyAnLycgKyByZWZlcnJhbGlkKTtcclxuICB9XHJcbiAgZ2V0Q2F0ZWdvcnlMb29rdXAobmFtZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoQXR0YWNobWVudENvbmZpZy5FbmRQb2ludC5BdHRhY2htZW50cy5HZXRDYXRlZ29yeUxvb2t1cCArICcvJyArIG5hbWUpO1xyXG4gIH1cclxuICB1cGxvYWRLZXkob2JqcGFyYW1zKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoQXR0YWNobWVudENvbmZpZy5FbmRQb2ludC5BdHRhY2htZW50cy5VcGxvYWRLZXksIG9ianBhcmFtcyk7XHJcbiAgfVxyXG4gIGRvd25sb2FkS2V5KG9ianBhcmFtcykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KEF0dGFjaG1lbnRDb25maWcuRW5kUG9pbnQuQXR0YWNobWVudHMuRG93bmxvYWRLZXksIG9ianBhcmFtcyk7XHJcbiAgfVxyXG4gIHBvc3RBdHRhY2htZW50KG9ianBhcmFtcykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KEF0dGFjaG1lbnRDb25maWcuRW5kUG9pbnQuQXR0YWNobWVudHMuUG9zdEF0dGFjaG1lbnQsIG9ianBhcmFtcyk7XHJcbiAgfVxyXG4gIHB1dEF0dGFjaG1lbnQob2JqcGFyYW1zLCBhdHRhY2htZW50SWQpIHtcclxuICAgIGNvbnNvbGUubG9nKEF0dGFjaG1lbnRDb25maWcuRW5kUG9pbnQuQXR0YWNobWVudHMuUHV0QXR0YWNobWVudCArICcvJyArIGF0dGFjaG1lbnRJZCwgb2JqcGFyYW1zKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2goQXR0YWNobWVudENvbmZpZy5FbmRQb2ludC5BdHRhY2htZW50cy5QdXRBdHRhY2htZW50ICsgJy8nICsgYXR0YWNobWVudElkLCBvYmpwYXJhbXMpO1xyXG4gIH1cclxufVxyXG4iXX0=