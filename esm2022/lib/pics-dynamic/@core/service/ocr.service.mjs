import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class OCRService {
    listener = new Subject();
    FormIncrementer = 0;
    ocrIncrementer = 0;
    textractInput;
    // cloud_service_base_url = environment.cloud_service_base_url;
    constructor() {
        // This is intentional
    }
    sendResponse(message) {
        this.listener.next(message);
    }
    clearResponse() {
        this.listener.next();
    }
    getResponse() {
        return this.listener.asObservable();
    }
    sendForDoucumentAnalysis(_s3_bucket_path) {
        // This is intentional
    }
    prepare_form_data(ocrResponse, formioInputs) {
        const formData = {};
        if (ocrResponse && ocrResponse.forms) {
            const ocrforms = ocrResponse.forms;
            const formLength = formioInputs.length;
            let loopContinue = true;
            while (loopContinue) {
                const selectedInput = formioInputs[this.FormIncrementer];
                this.textractInput = ocrforms[this.ocrIncrementer];
                this.conditionSelectedInput(selectedInput, formData, ocrforms);
                if (formLength <= this.FormIncrementer) {
                    loopContinue = false;
                }
            }
        }
        return formData;
    }
    conditionSelectedInput(selectedInput, formData, ocrforms) {
        if (selectedInput.label.trim() == this.textractInput.label.trim()) {
            formData[selectedInput.key] = this.textractInput.value;
            this.FormIncrementer++;
            this.ocrIncrementer++;
        }
        else if ((selectedInput.type == 'radio' || selectedInput.type == 'selectboxes') &&
            (this.textractInput.value == 'SELECTED' || this.textractInput.value == 'NOT_SELECTED')) {
            const formValues = selectedInput.values;
            const selectionValue = {};
            console.log('****');
            this.conditionFormValues(formValues, ocrforms, selectedInput, selectionValue, formData);
            this.FormIncrementer++;
        }
        else {
            console.log('skipping input', selectedInput.label);
            console.log('ta', this.textractInput);
            if (selectedInput.type != 'radio' && selectedInput.type != 'selectboxes') {
                this.FormIncrementer++;
            }
            this.ocrIncrementer++;
        }
    }
    conditionFormValues(formValues, ocrforms, selectedInput, selectionValue, formData) {
        formValues.every(selecetionElement => {
            this.textractInput = ocrforms[this.ocrIncrementer];
            console.log(this.textractInput.label);
            if (selecetionElement.label == this.textractInput.label) {
                if (this.textractInput.value == 'SELECTED') {
                    if (selectedInput.type == 'radio') {
                        selectionValue = selecetionElement.value;
                    }
                    else {
                        selectionValue[selecetionElement.value] = true;
                    }
                }
                else {
                    if (selectedInput.type == 'selectboxes') {
                        selectionValue[selecetionElement.value] = false;
                    }
                }
                console.log('sv', selectionValue);
                formData[selectedInput.key] = selectionValue;
                this.ocrIncrementer++;
            }
            return true;
        });
    }
    prepare_from_data_v1(ocr_response, formioInputs) {
        let formData;
        if (ocr_response && ocr_response.forms) {
            ocr_response.forms.forEach(item => {
                if (item.value !== 'SELECTED' && item.value !== 'NOT_SELECTED') {
                    const selectedInput = formioInputs.find(input => input.label == item.label);
                    formData = this.getSelectedDate(item, selectedInput);
                }
            });
        }
        return formData;
    }
    getSelectedDate(item, selectedInput) {
        const formData = {};
        if (selectedInput && selectedInput.type === 'datetime') {
            const mdate = moment(item.value);
            if (mdate.isValid()) {
                item.value = mdate.format('YYYY-MM-DD');
            }
            else {
                item.value = null;
            }
            formData[selectedInput.key] = item.value;
        }
        return formData;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OCRService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OCRService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OCRService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL0Bjb3JlL3NlcnZpY2Uvb2NyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQVEzQyxNQUFNLE9BQU8sVUFBVTtJQUNiLFFBQVEsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUMvQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLGNBQWMsR0FBRyxDQUFDLENBQUM7SUFDbkIsYUFBYSxDQUFNO0lBQ25CLCtEQUErRDtJQUMvRDtRQUNFLHNCQUFzQjtJQUN4QixDQUFDO0lBQ0QsWUFBWSxDQUFDLE9BQVk7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCx3QkFBd0IsQ0FBQyxlQUFlO1FBQ3RDLHNCQUFzQjtJQUN4QixDQUFDO0lBRUQsaUJBQWlCLENBQUMsV0FBVyxFQUFFLFlBQVk7UUFDekMsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksV0FBVyxJQUFJLFdBQVcsQ0FBQyxLQUFLLEVBQUU7WUFDcEMsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUVuQyxNQUFNLFVBQVUsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQ3ZDLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQztZQUN4QixPQUFPLFlBQVksRUFBRTtnQkFDbkIsTUFBTSxhQUFhLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDekQsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDL0QsSUFBSSxVQUFVLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtvQkFDdEMsWUFBWSxHQUFHLEtBQUssQ0FBQztpQkFDdEI7YUFDRjtTQUNGO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUNELHNCQUFzQixDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsUUFBUTtRQUN0RCxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDakUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUN2RCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO2FBQU0sSUFDTCxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksT0FBTyxJQUFJLGFBQWEsQ0FBQyxJQUFJLElBQUksYUFBYSxDQUFDO1lBQ3RFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLElBQUksVUFBVSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxFQUN0RjtZQUNBLE1BQU0sVUFBVSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFDeEMsTUFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN4RixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEI7YUFBTTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN0QyxJQUFJLGFBQWEsQ0FBQyxJQUFJLElBQUksT0FBTyxJQUFJLGFBQWEsQ0FBQyxJQUFJLElBQUksYUFBYSxFQUFFO2dCQUN4RSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDeEI7WUFFRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBQ0QsbUJBQW1CLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLFFBQVE7UUFDL0UsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEMsSUFBSSxpQkFBaUIsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7Z0JBQ3ZELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLElBQUksVUFBVSxFQUFFO29CQUMxQyxJQUFJLGFBQWEsQ0FBQyxJQUFJLElBQUksT0FBTyxFQUFFO3dCQUNqQyxjQUFjLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDO3FCQUMxQzt5QkFBTTt3QkFDTCxjQUFjLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO3FCQUNoRDtpQkFDRjtxQkFBTTtvQkFDTCxJQUFJLGFBQWEsQ0FBQyxJQUFJLElBQUksYUFBYSxFQUFFO3dCQUN2QyxjQUFjLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO3FCQUNqRDtpQkFDRjtnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQztnQkFDbEMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxjQUFjLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN2QjtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsb0JBQW9CLENBQUMsWUFBWSxFQUFFLFlBQVk7UUFDN0MsSUFBSSxRQUFhLENBQUM7UUFDbEIsSUFBSSxZQUFZLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRTtZQUN0QyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDaEMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFVBQVUsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLGNBQWMsRUFBRTtvQkFDOUQsTUFBTSxhQUFhLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM1RSxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7aUJBQ3REO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxlQUFlLENBQUMsSUFBSSxFQUFFLGFBQWE7UUFDakMsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksYUFBYSxJQUFJLGFBQWEsQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO1lBQ3RELE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN6QztpQkFBTTtnQkFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzthQUNuQjtZQUNELFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUMxQztRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7d0dBcEhVLFVBQVU7NEdBQVYsVUFBVTs7NEZBQVYsVUFBVTtrQkFEdEIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuLy8gaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdzcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcclxuaW50ZXJmYWNlIF9JV2luZG93IHtcclxuICB3ZWJraXRTcGVlY2hSZWNvZ25pdGlvbjogYW55O1xyXG4gIFNwZWVjaFJlY29nbml0aW9uOiBhbnk7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE9DUlNlcnZpY2Uge1xyXG4gIHByaXZhdGUgbGlzdGVuZXI6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgRm9ybUluY3JlbWVudGVyID0gMDtcclxuICBvY3JJbmNyZW1lbnRlciA9IDA7XHJcbiAgdGV4dHJhY3RJbnB1dDogYW55O1xyXG4gIC8vIGNsb3VkX3NlcnZpY2VfYmFzZV91cmwgPSBlbnZpcm9ubWVudC5jbG91ZF9zZXJ2aWNlX2Jhc2VfdXJsO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbFxyXG4gIH1cclxuICBzZW5kUmVzcG9uc2UobWVzc2FnZTogYW55KSB7XHJcbiAgICB0aGlzLmxpc3RlbmVyLm5leHQobWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICBjbGVhclJlc3BvbnNlKCkge1xyXG4gICAgdGhpcy5saXN0ZW5lci5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBnZXRSZXNwb25zZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBzZW5kRm9yRG91Y3VtZW50QW5hbHlzaXMoX3MzX2J1Y2tldF9wYXRoKSB7XHJcbiAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsXHJcbiAgfVxyXG5cclxuICBwcmVwYXJlX2Zvcm1fZGF0YShvY3JSZXNwb25zZSwgZm9ybWlvSW5wdXRzKSB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IHt9O1xyXG4gICAgaWYgKG9jclJlc3BvbnNlICYmIG9jclJlc3BvbnNlLmZvcm1zKSB7XHJcbiAgICAgIGNvbnN0IG9jcmZvcm1zID0gb2NyUmVzcG9uc2UuZm9ybXM7XHJcblxyXG4gICAgICBjb25zdCBmb3JtTGVuZ3RoID0gZm9ybWlvSW5wdXRzLmxlbmd0aDtcclxuICAgICAgbGV0IGxvb3BDb250aW51ZSA9IHRydWU7XHJcbiAgICAgIHdoaWxlIChsb29wQ29udGludWUpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZElucHV0ID0gZm9ybWlvSW5wdXRzW3RoaXMuRm9ybUluY3JlbWVudGVyXTtcclxuICAgICAgICB0aGlzLnRleHRyYWN0SW5wdXQgPSBvY3Jmb3Jtc1t0aGlzLm9jckluY3JlbWVudGVyXTtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvblNlbGVjdGVkSW5wdXQoc2VsZWN0ZWRJbnB1dCwgZm9ybURhdGEsIG9jcmZvcm1zKTtcclxuICAgICAgICBpZiAoZm9ybUxlbmd0aCA8PSB0aGlzLkZvcm1JbmNyZW1lbnRlcikge1xyXG4gICAgICAgICAgbG9vcENvbnRpbnVlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZm9ybURhdGE7XHJcbiAgfVxyXG4gIGNvbmRpdGlvblNlbGVjdGVkSW5wdXQoc2VsZWN0ZWRJbnB1dCwgZm9ybURhdGEsIG9jcmZvcm1zKSB7XHJcbiAgICBpZiAoc2VsZWN0ZWRJbnB1dC5sYWJlbC50cmltKCkgPT0gdGhpcy50ZXh0cmFjdElucHV0LmxhYmVsLnRyaW0oKSkge1xyXG4gICAgICBmb3JtRGF0YVtzZWxlY3RlZElucHV0LmtleV0gPSB0aGlzLnRleHRyYWN0SW5wdXQudmFsdWU7XHJcbiAgICAgIHRoaXMuRm9ybUluY3JlbWVudGVyKys7XHJcbiAgICAgIHRoaXMub2NySW5jcmVtZW50ZXIrKztcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIChzZWxlY3RlZElucHV0LnR5cGUgPT0gJ3JhZGlvJyB8fCBzZWxlY3RlZElucHV0LnR5cGUgPT0gJ3NlbGVjdGJveGVzJykgJiZcclxuICAgICAgKHRoaXMudGV4dHJhY3RJbnB1dC52YWx1ZSA9PSAnU0VMRUNURUQnIHx8IHRoaXMudGV4dHJhY3RJbnB1dC52YWx1ZSA9PSAnTk9UX1NFTEVDVEVEJylcclxuICAgICkge1xyXG4gICAgICBjb25zdCBmb3JtVmFsdWVzID0gc2VsZWN0ZWRJbnB1dC52YWx1ZXM7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGlvblZhbHVlID0ge307XHJcbiAgICAgIGNvbnNvbGUubG9nKCcqKioqJyk7XHJcbiAgICAgIHRoaXMuY29uZGl0aW9uRm9ybVZhbHVlcyhmb3JtVmFsdWVzLCBvY3Jmb3Jtcywgc2VsZWN0ZWRJbnB1dCwgc2VsZWN0aW9uVmFsdWUsIGZvcm1EYXRhKTtcclxuICAgICAgdGhpcy5Gb3JtSW5jcmVtZW50ZXIrKztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdza2lwcGluZyBpbnB1dCcsIHNlbGVjdGVkSW5wdXQubGFiZWwpO1xyXG4gICAgICBjb25zb2xlLmxvZygndGEnLCB0aGlzLnRleHRyYWN0SW5wdXQpO1xyXG4gICAgICBpZiAoc2VsZWN0ZWRJbnB1dC50eXBlICE9ICdyYWRpbycgJiYgc2VsZWN0ZWRJbnB1dC50eXBlICE9ICdzZWxlY3Rib3hlcycpIHtcclxuICAgICAgICB0aGlzLkZvcm1JbmNyZW1lbnRlcisrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLm9jckluY3JlbWVudGVyKys7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbmRpdGlvbkZvcm1WYWx1ZXMoZm9ybVZhbHVlcywgb2NyZm9ybXMsIHNlbGVjdGVkSW5wdXQsIHNlbGVjdGlvblZhbHVlLCBmb3JtRGF0YSkge1xyXG4gICAgZm9ybVZhbHVlcy5ldmVyeShzZWxlY2V0aW9uRWxlbWVudCA9PiB7XHJcbiAgICAgIHRoaXMudGV4dHJhY3RJbnB1dCA9IG9jcmZvcm1zW3RoaXMub2NySW5jcmVtZW50ZXJdO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnRleHRyYWN0SW5wdXQubGFiZWwpO1xyXG4gICAgICBpZiAoc2VsZWNldGlvbkVsZW1lbnQubGFiZWwgPT0gdGhpcy50ZXh0cmFjdElucHV0LmxhYmVsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGV4dHJhY3RJbnB1dC52YWx1ZSA9PSAnU0VMRUNURUQnKSB7XHJcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRJbnB1dC50eXBlID09ICdyYWRpbycpIHtcclxuICAgICAgICAgICAgc2VsZWN0aW9uVmFsdWUgPSBzZWxlY2V0aW9uRWxlbWVudC52YWx1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGlvblZhbHVlW3NlbGVjZXRpb25FbGVtZW50LnZhbHVlXSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChzZWxlY3RlZElucHV0LnR5cGUgPT0gJ3NlbGVjdGJveGVzJykge1xyXG4gICAgICAgICAgICBzZWxlY3Rpb25WYWx1ZVtzZWxlY2V0aW9uRWxlbWVudC52YWx1ZV0gPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3N2Jywgc2VsZWN0aW9uVmFsdWUpO1xyXG4gICAgICAgIGZvcm1EYXRhW3NlbGVjdGVkSW5wdXQua2V5XSA9IHNlbGVjdGlvblZhbHVlO1xyXG4gICAgICAgIHRoaXMub2NySW5jcmVtZW50ZXIrKztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJlcGFyZV9mcm9tX2RhdGFfdjEob2NyX3Jlc3BvbnNlLCBmb3JtaW9JbnB1dHMpIHtcclxuICAgIGxldCBmb3JtRGF0YTogYW55O1xyXG4gICAgaWYgKG9jcl9yZXNwb25zZSAmJiBvY3JfcmVzcG9uc2UuZm9ybXMpIHtcclxuICAgICAgb2NyX3Jlc3BvbnNlLmZvcm1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0udmFsdWUgIT09ICdTRUxFQ1RFRCcgJiYgaXRlbS52YWx1ZSAhPT0gJ05PVF9TRUxFQ1RFRCcpIHtcclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSW5wdXQgPSBmb3JtaW9JbnB1dHMuZmluZChpbnB1dCA9PiBpbnB1dC5sYWJlbCA9PSBpdGVtLmxhYmVsKTtcclxuICAgICAgICAgIGZvcm1EYXRhID0gdGhpcy5nZXRTZWxlY3RlZERhdGUoaXRlbSwgc2VsZWN0ZWRJbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBmb3JtRGF0YTtcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGVkRGF0ZShpdGVtLCBzZWxlY3RlZElucHV0KSB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IHt9O1xyXG4gICAgaWYgKHNlbGVjdGVkSW5wdXQgJiYgc2VsZWN0ZWRJbnB1dC50eXBlID09PSAnZGF0ZXRpbWUnKSB7XHJcbiAgICAgIGNvbnN0IG1kYXRlID0gbW9tZW50KGl0ZW0udmFsdWUpO1xyXG4gICAgICBpZiAobWRhdGUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgaXRlbS52YWx1ZSA9IG1kYXRlLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGl0ZW0udmFsdWUgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcm1EYXRhW3NlbGVjdGVkSW5wdXQua2V5XSA9IGl0ZW0udmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZm9ybURhdGE7XHJcbiAgfVxyXG59XHJcbiJdfQ==