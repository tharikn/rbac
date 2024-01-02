import { Injectable } from '@angular/core';
import { AttachmentConfig } from '../urls/rbac-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./http.service";
export class AttachmentsService {
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
}
AttachmentsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AttachmentsService, deps: [{ token: i1.HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
AttachmentsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AttachmentsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AttachmentsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0YWNobWVudHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9jb25maWctbG9naW4tc2V0dGluZ3Mvc3JjL2xpYi9AY29yZS9zZXJ2aWNlL2F0dGFjaG1lbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBSzNELE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsWUFBb0IsSUFBaUI7UUFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNsQyxzQkFBc0I7SUFDekIsQ0FBQztJQUVELHFCQUFxQixDQUFDLFVBQVU7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUN2RyxDQUFDO0lBQ0QsaUJBQWlCLENBQUMsSUFBSTtRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFDRCxTQUFTLENBQUMsU0FBUztRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFDRCxXQUFXLENBQUMsU0FBUztRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFDRCxjQUFjLENBQUMsU0FBUztRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFDRCxhQUFhLENBQUMsU0FBUyxFQUFFLFlBQVk7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsR0FBRyxHQUFHLEdBQUcsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2pHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEdBQUcsR0FBRyxHQUFHLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM5RyxDQUFDOztnSEF2QlUsa0JBQWtCO29IQUFsQixrQkFBa0IsY0FGakIsTUFBTTs0RkFFUCxrQkFBa0I7a0JBSDlCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXR0YWNobWVudENvbmZpZyB9IGZyb20gJy4uL3VybHMvcmJhYy11cmwuY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEF0dGFjaG1lbnRzU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwU2VydmljZSkge1xyXG4gICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxcclxuICB9XHJcblxyXG4gIGdldEF0dGFjaG1lbnRSZWZlcnJhbChyZWZlcnJhbGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChBdHRhY2htZW50Q29uZmlnLkVuZFBvaW50LkF0dGFjaG1lbnRzLkdldEF0dGFjaG1lbnRSZWZlcnJhbCArICcvJyArIHJlZmVycmFsaWQpO1xyXG4gIH1cclxuICBnZXRDYXRlZ29yeUxvb2t1cChuYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChBdHRhY2htZW50Q29uZmlnLkVuZFBvaW50LkF0dGFjaG1lbnRzLkdldENhdGVnb3J5TG9va3VwICsgJy8nICsgbmFtZSk7XHJcbiAgfVxyXG4gIHVwbG9hZEtleShvYmpwYXJhbXMpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChBdHRhY2htZW50Q29uZmlnLkVuZFBvaW50LkF0dGFjaG1lbnRzLlVwbG9hZEtleSwgb2JqcGFyYW1zKTtcclxuICB9XHJcbiAgZG93bmxvYWRLZXkob2JqcGFyYW1zKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoQXR0YWNobWVudENvbmZpZy5FbmRQb2ludC5BdHRhY2htZW50cy5Eb3dubG9hZEtleSwgb2JqcGFyYW1zKTtcclxuICB9XHJcbiAgcG9zdEF0dGFjaG1lbnQob2JqcGFyYW1zKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoQXR0YWNobWVudENvbmZpZy5FbmRQb2ludC5BdHRhY2htZW50cy5Qb3N0QXR0YWNobWVudCwgb2JqcGFyYW1zKTtcclxuICB9XHJcbiAgcHV0QXR0YWNobWVudChvYmpwYXJhbXMsIGF0dGFjaG1lbnRJZCkge1xyXG4gICAgY29uc29sZS5sb2coQXR0YWNobWVudENvbmZpZy5FbmRQb2ludC5BdHRhY2htZW50cy5QdXRBdHRhY2htZW50ICsgJy8nICsgYXR0YWNobWVudElkLCBvYmpwYXJhbXMpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaChBdHRhY2htZW50Q29uZmlnLkVuZFBvaW50LkF0dGFjaG1lbnRzLlB1dEF0dGFjaG1lbnQgKyAnLycgKyBhdHRhY2htZW50SWQsIG9ianBhcmFtcyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==