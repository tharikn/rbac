import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppConstants } from '../../@core/entities/app-constants';
import { FormControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/service/http.service";
import * as i2 from "../../@core/service/alert.service";
import * as i3 from "@angular/material/dialog";
export class DeleteComponent {
    httpService;
    alert;
    dialogRef;
    deleteId;
    message;
    url;
    portConfig;
    successMsg;
    action;
    data;
    value;
    reasonStatus;
    enteredReason;
    isDisabled = false;
    reasonFormControl;
    rowData = {};
    constructor(httpService, alert, dialogRef, data) {
        this.httpService = httpService;
        this.alert = alert;
        this.dialogRef = dialogRef;
        if (data?.deleteId && data?.deleteId !== '' && data?.url && data?.url !== '') {
            this.deleteId = data.deleteId;
            this.action = data.action;
            this.reasonStatus = data.reasonStatus ?? false;
            this.message = data?.message ? data.message : 'Are you sure want to delete this record ?';
            this.url = data.url;
            this.portConfig = data.portConfig;
            this.successMsg = data?.successMsg ? data.successMsg : 'Deleted Successfully';
            this.data = data;
            this.enteredReason = '';
            this.rowData = { 'data': data.rowData };
            if (this.reasonStatus) {
                this.isDisabled = true;
            }
        }
    }
    ngOnInit() {
        this.reasonFormControl = new FormControl('', Validators.required);
    }
    deleteRecord() {
        if (this.action === 'update_activation') {
            this.updateActivation();
        }
        else if (this.action === 'update') {
            this.updateRecord();
        }
        else if (this.action === 'complete') {
            this.completeRecord();
        }
        else if (this.action === 'page_activation') {
            this.deactivatePage();
        }
        else {
            if (this.reasonStatus) {
                this.rowData = { ...this.rowData, 'reason': this.enteredReason };
                this.httpService.post(`${this.url}/${this.deleteId}`, this.rowData).subscribe(_result1 => {
                    this.closePopup('yes');
                    this.alert.success(this.successMsg);
                }, _error => {
                    this.closePopup();
                    this.alert.error(AppConstants.errorMessage);
                });
            }
            else {
                this.httpService.delete(`${this.url}/${this.deleteId}`).subscribe(_result => {
                    this.closePopup('yes');
                }, _error => {
                    this.closePopup();
                    this.alert.error(AppConstants.errorMessage);
                });
            }
        }
    }
    deactivatePage() {
        this.httpService.patch(this.url).subscribe(_result => {
            this.closePopup('yes');
            this.alert.success(this.successMsg);
        }, error => {
            this.closePopup();
            this.alert.error('Failed to deactivate page. Please try again.');
        });
    }
    updateRecord() {
        this.httpService.put(this.url, this.deleteId).subscribe(_result => {
            this.closePopup();
            this.alert.success(this.successMsg);
        }, _error => {
            this.closePopup();
            this.alert.error(AppConstants.errorMessage);
        });
    }
    closePopup(deleteData = null) {
        this.dialogRef.close({ data: deleteData });
    }
    completeRecord() {
        this.data.data.status = 'Closed';
        this.data.data.statuskey = '81C';
        this.data.data.completeddate = new Date().toISOString();
        this.httpService
            .post(this.url, {
            data: this.data.data
        })
            .subscribe(_result => {
            this.closePopup();
            this.alert.success(this.successMsg);
        }, _error => {
            this.closePopup();
            this.alert.error(AppConstants.errorMessage);
        });
    }
    updateActivation() {
        const userData = this.data.data;
        userData.isactive = userData.isactive === true ? false : true;
        this.httpService.post(this.url, [userData]).subscribe(_result => {
            this.closePopup();
            this.alert.success(this.successMsg);
        }, error => {
            this.closePopup();
            console.log(error);
        });
    }
    checkIsDisabled(text) {
        if (text && text.trim() != '') {
            this.isDisabled = false;
            this.enteredReason = text;
        }
        else {
            this.isDisabled = true;
            this.enteredReason = text;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DeleteComponent, deps: [{ token: i1.HttpService }, { token: i2.AlertService }, { token: i3.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DeleteComponent, selector: "app-delete", ngImport: i0, template: "<div class=\"modal-body\">\r\n  <p>{{ message }}</p>\r\n\r\n  <div class=\"text-right\">\r\n    <button class=\"btn btn-cancel mr-2\" mat-button (click)=\"closePopup()\">No</button>\r\n    <button class=\"btn btn-primary\" mat-button (click)=\"deleteRecord()\">Yes</button>\r\n  </div>\r\n</div>\r\n", styles: [".modal-body{padding:45px 30px 30px;text-align:center;width:500px}.modal-body p{color:var(--text-dark);font-size:var(--font-15);font-weight:500;margin-bottom:34px}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DeleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-delete', template: "<div class=\"modal-body\">\r\n  <p>{{ message }}</p>\r\n\r\n  <div class=\"text-right\">\r\n    <button class=\"btn btn-cancel mr-2\" mat-button (click)=\"closePopup()\">No</button>\r\n    <button class=\"btn btn-primary\" mat-button (click)=\"deleteRecord()\">Yes</button>\r\n  </div>\r\n</div>\r\n", styles: [".modal-body{padding:45px 30px 30px;text-align:center;width:500px}.modal-body p{color:var(--text-dark);font-size:var(--font-15);font-weight:500;margin-bottom:34px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.HttpService }, { type: i2.AlertService }, { type: i3.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvbW9kdWxlcy9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvbW9kdWxlcy9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sMEJBQTBCLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBR2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBT3pELE1BQU0sT0FBTyxlQUFlO0lBZ0JoQjtJQUNBO0lBQ0Q7SUFqQlQsUUFBUSxDQUFTO0lBQ2pCLE9BQU8sQ0FBUztJQUNoQixHQUFHLENBQVM7SUFDWixVQUFVLENBQVM7SUFDbkIsVUFBVSxDQUFTO0lBQ25CLE1BQU0sQ0FBUztJQUNmLElBQUksQ0FBTTtJQUNWLEtBQUssQ0FBTTtJQUNYLFlBQVksQ0FBVTtJQUN0QixhQUFhLENBQVM7SUFDdEIsVUFBVSxHQUFZLEtBQUssQ0FBQztJQUM1QixpQkFBaUIsQ0FBYztJQUMvQixPQUFPLEdBQVEsRUFBRSxDQUFDO0lBRWxCLFlBQ1UsV0FBd0IsRUFDeEIsS0FBbUIsRUFDcEIsU0FBd0MsRUFDdEIsSUFBSTtRQUhyQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQ3BCLGNBQVMsR0FBVCxTQUFT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QUFJLENBQUM7UUFDOUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUNuRCxPQUFPLENBQUMsRUFBRTtZQUNSLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxFQUNELEtBQUssQ0FBQyxFQUFFO1lBQ04sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsZUFBZSxDQUFDLElBQVk7UUFDMUIsSUFBRyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBQztZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUMzQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDM0I7SUFDSCxDQUFDO3dHQXJKVSxlQUFlLHFHQW1CaEIsZUFBZTs0RkFuQmQsZUFBZSxrRENaNUIsNlNBUUE7OzRGRElhLGVBQWU7a0JBTDNCLFNBQVM7K0JBQ0UsWUFBWTs7MEJBdUJuQixNQUFNOzJCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IEFwcENvbnN0YW50cyB9IGZyb20gJy4uLy4uL0Bjb3JlL2VudGl0aWVzL2FwcC1jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2UvaHR0cC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vQGNvcmUvc2VydmljZS9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1kZWxldGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kZWxldGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RlbGV0ZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWxldGVDb21wb25lbnQge1xyXG4gIGRlbGV0ZUlkOiBzdHJpbmc7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIHBvcnRDb25maWc6IHN0cmluZztcclxuICBzdWNjZXNzTXNnOiBzdHJpbmc7XHJcbiAgYWN0aW9uOiBzdHJpbmc7XHJcbiAgZGF0YTogYW55O1xyXG4gIHZhbHVlOiBhbnk7XHJcbiAgcmVhc29uU3RhdHVzOiBib29sZWFuO1xyXG4gIGVudGVyZWRSZWFzb246IHN0cmluZztcclxuICBpc0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcmVhc29uRm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xyXG4gIHJvd0RhdGE6IGFueSA9IHt9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBhbGVydDogQWxlcnRTZXJ2aWNlLFxyXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERlbGV0ZUNvbXBvbmVudD4sXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgZGF0YVxyXG4gICkge1xyXG4gICAgaWYgKGRhdGE/LmRlbGV0ZUlkICYmIGRhdGE/LmRlbGV0ZUlkICE9PSAnJyAmJiBkYXRhPy51cmwgJiYgZGF0YT8udXJsICE9PSAnJykge1xyXG4gICAgICB0aGlzLmRlbGV0ZUlkID0gZGF0YS5kZWxldGVJZDtcclxuICAgICAgdGhpcy5hY3Rpb24gPSBkYXRhLmFjdGlvbjtcclxuICAgICAgdGhpcy5yZWFzb25TdGF0dXMgPSBkYXRhLnJlYXNvblN0YXR1cyA/PyBmYWxzZTtcclxuICAgICAgdGhpcy5tZXNzYWdlID0gZGF0YT8ubWVzc2FnZSA/IGRhdGEubWVzc2FnZSA6ICdBcmUgeW91IHN1cmUgd2FudCB0byBkZWxldGUgdGhpcyByZWNvcmQgPyc7XHJcbiAgICAgIHRoaXMudXJsID0gZGF0YS51cmw7XHJcbiAgICAgIHRoaXMucG9ydENvbmZpZyA9IGRhdGEucG9ydENvbmZpZztcclxuICAgICAgdGhpcy5zdWNjZXNzTXNnID0gZGF0YT8uc3VjY2Vzc01zZyA/IGRhdGEuc3VjY2Vzc01zZyA6ICdEZWxldGVkIFN1Y2Nlc3NmdWxseSc7XHJcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgIHRoaXMuZW50ZXJlZFJlYXNvbiA9ICcnO1xyXG4gICAgICB0aGlzLnJvd0RhdGEgPSB7J2RhdGEnOiBkYXRhLnJvd0RhdGF9O1xyXG4gICAgICBpZih0aGlzLnJlYXNvblN0YXR1cyl7XHJcbiAgICAgICAgdGhpcy5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlYXNvbkZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVJlY29yZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmFjdGlvbiA9PT0gJ3VwZGF0ZV9hY3RpdmF0aW9uJykge1xyXG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRpb24oKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5hY3Rpb24gPT09ICd1cGRhdGUnKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlUmVjb3JkKCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aW9uID09PSAnY29tcGxldGUnKSB7XHJcbiAgICAgIHRoaXMuY29tcGxldGVSZWNvcmQoKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5hY3Rpb24gPT09ICdwYWdlX2FjdGl2YXRpb24nKSB7XHJcbiAgICAgIHRoaXMuZGVhY3RpdmF0ZVBhZ2UoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmKHRoaXMucmVhc29uU3RhdHVzKXtcclxuICAgICAgICB0aGlzLnJvd0RhdGEgPSB7Li4udGhpcy5yb3dEYXRhLCAncmVhc29uJyA6dGhpcy5lbnRlcmVkUmVhc29ufTtcclxuICAgICAgICAgICAgdGhpcy5odHRwU2VydmljZS5wb3N0KGAke3RoaXMudXJsfS8ke3RoaXMuZGVsZXRlSWR9YCwgdGhpcy5yb3dEYXRhKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgX3Jlc3VsdDEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCd5ZXMnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQuc3VjY2Vzcyh0aGlzLnN1Y2Nlc3NNc2cpO1xyXG4gICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgIF9lcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQuZXJyb3IoQXBwQ29uc3RhbnRzLmVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UuZGVsZXRlKGAke3RoaXMudXJsfS8ke3RoaXMuZGVsZXRlSWR9YCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgX3Jlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCgneWVzJyk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgX2Vycm9yID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWxlcnQuZXJyb3IoQXBwQ29uc3RhbnRzLmVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBkZWFjdGl2YXRlUGFnZSgpIHtcclxuICAgIHRoaXMuaHR0cFNlcnZpY2UucGF0Y2godGhpcy51cmwpLnN1YnNjcmliZShcclxuICAgICAgX3Jlc3VsdCA9PiB7XHJcbiAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCd5ZXMnKTtcclxuICAgICAgICB0aGlzLmFsZXJ0LnN1Y2Nlc3ModGhpcy5zdWNjZXNzTXNnKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xyXG4gICAgICAgIHRoaXMuYWxlcnQuZXJyb3IoJ0ZhaWxlZCB0byBkZWFjdGl2YXRlIHBhZ2UuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVSZWNvcmQoKSB7XHJcbiAgICB0aGlzLmh0dHBTZXJ2aWNlLnB1dCh0aGlzLnVybCwgdGhpcy5kZWxldGVJZCkuc3Vic2NyaWJlKFxyXG4gICAgICBfcmVzdWx0ID0+IHtcclxuICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcclxuICAgICAgICB0aGlzLmFsZXJ0LnN1Y2Nlc3ModGhpcy5zdWNjZXNzTXNnKTtcclxuICAgICAgfSxcclxuICAgICAgX2Vycm9yID0+IHtcclxuICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcclxuICAgICAgICB0aGlzLmFsZXJ0LmVycm9yKEFwcENvbnN0YW50cy5lcnJvck1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuICBjbG9zZVBvcHVwKGRlbGV0ZURhdGEgPSBudWxsKSB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh7IGRhdGE6IGRlbGV0ZURhdGEgfSk7XHJcbiAgfVxyXG5cclxuICBjb21wbGV0ZVJlY29yZCgpIHtcclxuICAgIHRoaXMuZGF0YS5kYXRhLnN0YXR1cyA9ICdDbG9zZWQnO1xyXG4gICAgdGhpcy5kYXRhLmRhdGEuc3RhdHVza2V5ID0gJzgxQyc7XHJcbiAgICB0aGlzLmRhdGEuZGF0YS5jb21wbGV0ZWRkYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xyXG4gICAgdGhpcy5odHRwU2VydmljZVxyXG4gICAgICAucG9zdCh0aGlzLnVybCwge1xyXG4gICAgICAgIGRhdGE6IHRoaXMuZGF0YS5kYXRhXHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgX3Jlc3VsdCA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcclxuICAgICAgICAgIHRoaXMuYWxlcnQuc3VjY2Vzcyh0aGlzLnN1Y2Nlc3NNc2cpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX2Vycm9yID0+IHtcclxuICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xyXG4gICAgICAgICAgdGhpcy5hbGVydC5lcnJvcihBcHBDb25zdGFudHMuZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgfVxyXG4gIHVwZGF0ZUFjdGl2YXRpb24oKSB7XHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IHRoaXMuZGF0YS5kYXRhO1xyXG4gICAgdXNlckRhdGEuaXNhY3RpdmUgPSB1c2VyRGF0YS5pc2FjdGl2ZSA9PT0gdHJ1ZSA/IGZhbHNlIDogdHJ1ZTtcclxuICAgIHRoaXMuaHR0cFNlcnZpY2UucG9zdCh0aGlzLnVybCwgW3VzZXJEYXRhXSkuc3Vic2NyaWJlKFxyXG4gICAgICBfcmVzdWx0ID0+IHtcclxuICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcclxuICAgICAgICB0aGlzLmFsZXJ0LnN1Y2Nlc3ModGhpcy5zdWNjZXNzTXNnKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNoZWNrSXNEaXNhYmxlZCh0ZXh0OiBzdHJpbmcpe1xyXG4gICAgaWYodGV4dCAmJiB0ZXh0LnRyaW0oKSAhPSAnJyl7XHJcbiAgICAgIHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmVudGVyZWRSZWFzb24gPSB0ZXh0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5lbnRlcmVkUmVhc29uID0gdGV4dDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cclxuICA8cD57eyBtZXNzYWdlIH19PC9wPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodFwiPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tY2FuY2VsIG1yLTJcIiBtYXQtYnV0dG9uIChjbGljayk9XCJjbG9zZVBvcHVwKClcIj5ObzwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIG1hdC1idXR0b24gKGNsaWNrKT1cImRlbGV0ZVJlY29yZCgpXCI+WWVzPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=