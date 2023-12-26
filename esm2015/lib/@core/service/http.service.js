import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import { throwError } from 'rxjs/internal/observable/throwError';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./data-store.service";
export class HttpService {
    constructor(http, _storeservice) {
        this.http = http;
        this._storeservice = _storeservice;
        this.overrideUrl = true;
        this.baseUrl = '';
        this.headers = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('role', 'role=CP_PUBLIC');
        this.showSpinner = new BehaviorSubject(false);
        this.outsideShowSpinner = new BehaviorSubject(false);
        this._storeservice.currentStore.subscribe((res) => {
            if (res['RBACORG'] && res['RBACORG'] !== '') {
                this.RBACORG = res['RBACORG'];
                this.url = this.RBACORG['apiHost'] ? this.RBACORG['apiHost'] : 'http://localhost:3000/api';
                this.tokenKey = this.RBACORG['tokenKey'];
            }
        });
        this.url1 = '';
    }
    get(apiRoute) {
        return this.http.get(`${this.url + apiRoute}`, {
            headers: this.getHttpNewHeaders()
        });
    }
    post(apiRoute, body) {
        return this.http.post(`${this.url + apiRoute}`, body, {
            headers: this.getHttpNewHeaders()
        });
    }
    put(apiRoute, body) {
        return this.http.put(`${this.url + apiRoute}`, body, {
            headers: this.getHttpNewHeaders()
        });
    }
    patch(apiRoute, body) {
        return this.http.patch(`${this.url + apiRoute}`, body, {
            headers: this.getHttpNewHeaders()
        });
    }
    delete(apiRoute) {
        return this.http.delete(`${this.url + apiRoute}`, {
            headers: this.getHttpNewHeaders()
        });
    }
    getHttpHeaders() {
        return new HttpHeaders().set('key', 'value');
    }
    getHttpNewHeaders() {
        return this.headers.set('Authorization', `Bearer ${this.getToken()}`);
    }
    getAttachmentHttpHeaders(contentType) {
        return new HttpHeaders().set('Content-Type', contentType).set('x-ms-blob-type', 'BlockBlob');
    }
    putUpload(apiRoute, body, contentType) {
        return this.http.put(`${this.url1 + apiRoute}`, body, { headers: this.getAttachmentHttpHeaders(contentType) });
    }
    getAuthValidation(apiRoute, token) {
        return this.http.get(`${this.url + apiRoute}`, {
            headers: this.getHttpNewHeaders()
        });
    }
    getAuthAccessKey(apiRoute, body) {
        return this.http.post(`${this.url + apiRoute}`, body, {
            headers: this.getHttpNewHeaders()
        });
    }
    putupload2(apiRoute, body, contenttype) {
        return this.http
            .put(`${this.url1 + apiRoute}`, body, {
            headers: this.getAttachmentHttpHeaders(contenttype),
            observe: 'response'
        })
            .pipe(map(data => {
            return data;
        }));
    }
    /**
     *
     * @param apiRoute
     * This function will download the stream file from the API service.
     * No HTTP required for this stream. So used Window.location.href to download the file
     */
    getFormDownloaded(apiRoute) {
        window.location.href = `${this.url + apiRoute}`;
    }
    //common http service(optional)
    handleError(error) {
        var _a, _b;
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message) ? (_b = error === null || error === void 0 ? void 0 : error.error) === null || _b === void 0 ? void 0 : _b.message : error.message}`;
        }
        return throwError(errorMessage);
    }
    getToken() {
        const token = this.tokenKey ? this.tokenKey : 'jwt-token';
        return sessionStorage.getItem(token);
    }
}
HttpService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HttpService, deps: [{ token: i1.HttpClient }, { token: i2.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
HttpService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HttpService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HttpService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2NvbmZpZy1sb2dpbi1zZXR0aW5ncy9zcmMvbGliL0Bjb3JlL3NlcnZpY2UvaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUlyQyxNQUFNLE9BQU8sV0FBVztJQWVwQixZQUFvQixJQUFnQixFQUFVLGFBQStCO1FBQXpELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFiN0UsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFFbkIsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUVOLFlBQU8sR0FBRyxJQUFJLFdBQVcsRUFBRTthQUMvQixHQUFHLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDO2FBQ2pDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUM7YUFDdkMsR0FBRyxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBRTFCLGdCQUFXLEdBQTZCLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBQzVFLHVCQUFrQixHQUE2QixJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUl4RixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNy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SyxZQUFZLFVBQVUsRUFBRTtZQUNyQyxxQkFBcUI7WUFDckIsWUFBWSxHQUFHLFVBQVUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoRDthQUFNO1lBQ0wscUJBQXFCO1lBQ3JCLFlBQVksR0FBRyxlQUFlLEtBQUssQ0FBQyxNQUFNLGNBQ3hDLENBQUEsTUFBQSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsS0FBSywwQ0FBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDLE1BQUEsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLEtBQUssMENBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FDeEQsRUFBRSxDQUFDO1NBQ0o7UUFDRCxPQUFPLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsUUFBUTtRQUNOLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUMxRCxPQUFPLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7eUdBckhRLFdBQVc7NkdBQVgsV0FBVzs0RkFBWCxXQUFXO2tCQUR2QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCB7IHRocm93RXJyb3IgfSBmcm9tICdyeGpzL2ludGVybmFsL29ic2VydmFibGUvdGhyb3dFcnJvcic7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4vZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEh0dHBTZXJ2aWNlIHtcclxuICAgIFJCQUNPUkc6IGFueTtcclxuICAgIG92ZXJyaWRlVXJsID0gdHJ1ZTtcclxuICAgIGVycm9yRGF0YSE6IEh0dHBFcnJvclJlc3BvbnNlO1xyXG4gICAgYmFzZVVybCA9ICcnO1xyXG4gICAgdG9rZW5LZXk6IGFueTtcclxuICAgIHB1YmxpYyBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcclxuICAgICAgLnNldCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKVxyXG4gICAgICAuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpXHJcbiAgICAgIC5zZXQoJ3JvbGUnLCAncm9sZT1DUF9QVUJMSUMnKTtcclxuXHJcbiAgICBwdWJsaWMgc2hvd1NwaW5uZXI6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgcHVibGljIG91dHNpZGVTaG93U3Bpbm5lcjogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgICB1cmwxOiBzdHJpbmc7XHJcbiAgICB1cmw6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBfc3RvcmVzZXJ2aWNlOiBEYXRhU3RvcmVTZXJ2aWNlKSB7XHJcbiAgICAgIHRoaXMuX3N0b3Jlc2VydmljZS5jdXJyZW50U3RvcmUuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNbJ1JCQUNPUkcnXSAmJiByZXNbJ1JCQUNPUkcnXSAhPT0gJycpIHtcclxuICAgICAgICAgIHRoaXMuUkJBQ09SRyA9IHJlc1snUkJBQ09SRyddO1xyXG4gICAgICAgICAgdGhpcy51cmwgPSB0aGlzLlJCQUNPUkdbJ2FwaUhvc3QnXSA/IHRoaXMuUkJBQ09SR1snYXBpSG9zdCddIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGknO1xyXG4gICAgICAgICAgdGhpcy50b2tlbktleSA9IHRoaXMuUkJBQ09SR1sndG9rZW5LZXknXTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnVybDEgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBnZXQoYXBpUm91dGU6IHN0cmluZykge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVybCArIGFwaVJvdXRlfWAsIHtcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLmdldEh0dHBOZXdIZWFkZXJzKClcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zdChhcGlSb3V0ZTogc3RyaW5nLCBib2R5OiBhbnkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMudXJsICsgYXBpUm91dGV9YCwgYm9keSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0SHR0cE5ld0hlYWRlcnMoKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdXQoYXBpUm91dGU6IHN0cmluZywgYm9keTogYW55KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KGAke3RoaXMudXJsICsgYXBpUm91dGV9YCwgYm9keSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0SHR0cE5ld0hlYWRlcnMoKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwYXRjaChhcGlSb3V0ZTogc3RyaW5nLCBib2R5PzogYW55KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2goYCR7dGhpcy51cmwgKyBhcGlSb3V0ZX1gLCBib2R5LCB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5nZXRIdHRwTmV3SGVhZGVycygpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZShhcGlSb3V0ZTogc3RyaW5nKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKGAke3RoaXMudXJsICsgYXBpUm91dGV9YCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0SHR0cE5ld0hlYWRlcnMoKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRIdHRwSGVhZGVycygpOiBIdHRwSGVhZGVycyB7XHJcbiAgICAgIHJldHVybiBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ2tleScsICd2YWx1ZScpO1xyXG4gICAgfVxyXG4gICAgZ2V0SHR0cE5ld0hlYWRlcnMoKTogSHR0cEhlYWRlcnMge1xyXG4gICAgICByZXR1cm4gdGhpcy5oZWFkZXJzLnNldCgnQXV0aG9yaXphdGlvbicsIGBCZWFyZXIgJHt0aGlzLmdldFRva2VuKCl9YCk7XHJcbiAgICB9XHJcbiAgICBnZXRBdHRhY2htZW50SHR0cEhlYWRlcnMoY29udGVudFR5cGU6IGFueSk6IEh0dHBIZWFkZXJzIHtcclxuICAgICAgcmV0dXJuIG5ldyBIdHRwSGVhZGVycygpLnNldCgnQ29udGVudC1UeXBlJywgY29udGVudFR5cGUpLnNldCgneC1tcy1ibG9iLXR5cGUnLCAnQmxvY2tCbG9iJyk7XHJcbiAgICB9XHJcbiAgICBwdXRVcGxvYWQoYXBpUm91dGU6IHN0cmluZywgYm9keTogYW55LCBjb250ZW50VHlwZTogYW55KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KGAke3RoaXMudXJsMSArIGFwaVJvdXRlfWAsIGJvZHksIHsgaGVhZGVyczogdGhpcy5nZXRBdHRhY2htZW50SHR0cEhlYWRlcnMoY29udGVudFR5cGUpIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0QXV0aFZhbGlkYXRpb24oYXBpUm91dGUsdG9rZW4pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cmwgKyBhcGlSb3V0ZX1gLCB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5nZXRIdHRwTmV3SGVhZGVycygpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0QXV0aEFjY2Vzc0tleShhcGlSb3V0ZSwgYm9keSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cmwgKyBhcGlSb3V0ZX1gLCBib2R5LCB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5nZXRIdHRwTmV3SGVhZGVycygpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHV0dXBsb2FkMihhcGlSb3V0ZTogc3RyaW5nLCBib2R5OiBhbnksIGNvbnRlbnR0eXBlOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgLnB1dChgJHt0aGlzLnVybDEgKyBhcGlSb3V0ZX1gLCBib2R5LCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB0aGlzLmdldEF0dGFjaG1lbnRIdHRwSGVhZGVycyhjb250ZW50dHlwZSksXHJcbiAgICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIG1hcChkYXRhID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXBpUm91dGVcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gd2lsbCBkb3dubG9hZCB0aGUgc3RyZWFtIGZpbGUgZnJvbSB0aGUgQVBJIHNlcnZpY2UuXHJcbiAgICAgKiBObyBIVFRQIHJlcXVpcmVkIGZvciB0aGlzIHN0cmVhbS4gU28gdXNlZCBXaW5kb3cubG9jYXRpb24uaHJlZiB0byBkb3dubG9hZCB0aGUgZmlsZVxyXG4gICAgICovXHJcbiAgICBnZXRGb3JtRG93bmxvYWRlZChhcGlSb3V0ZTogc3RyaW5nKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7dGhpcy51cmwgKyBhcGlSb3V0ZX1gO1xyXG4gICAgfVxyXG4gICAgLy9jb21tb24gaHR0cCBzZXJ2aWNlKG9wdGlvbmFsKVxyXG5cclxuICAgIGhhbmRsZUVycm9yKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkge1xyXG4gICAgICBsZXQgZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgIGlmIChlcnJvci5lcnJvciBpbnN0YW5jZW9mIEVycm9yRXZlbnQpIHtcclxuICAgICAgICAvLyBDbGllbnQtc2lkZSBlcnJvcnNcclxuICAgICAgICBlcnJvck1lc3NhZ2UgPSBgRXJyb3I6ICR7ZXJyb3IuZXJyb3IubWVzc2FnZX1gO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFNlcnZlci1zaWRlIGVycm9yc1xyXG4gICAgICAgIGVycm9yTWVzc2FnZSA9IGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c31cXG5NZXNzYWdlOiAke1xyXG4gICAgICAgICAgZXJyb3I/LmVycm9yPy5tZXNzYWdlID8gZXJyb3I/LmVycm9yPy5tZXNzYWdlIDogZXJyb3IubWVzc2FnZVxyXG4gICAgICAgIH1gO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yTWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBnZXRUb2tlbigpOiBhbnkge1xyXG4gICAgICBjb25zdCB0b2tlbiA9IHRoaXMudG9rZW5LZXkgPyB0aGlzLnRva2VuS2V5IDogJ2p3dC10b2tlbic7XHJcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKHRva2VuKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4iXX0=