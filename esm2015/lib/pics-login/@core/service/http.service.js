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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2xvZ2luL3NyYy9saWIvcGljcy1sb2dpbi9AY29yZS9zZXJ2aWNlL2h0dHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlDLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFJckMsTUFBTSxPQUFPLFdBQVc7SUFlcEIsWUFBb0IsSUFBZ0IsRUFBVSxhQUErQjtRQUF6RCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBYjdFLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBRW5CLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFFTixZQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUU7YUFDL0IsR0FBRyxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQzthQUNqQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDO2FBQ3ZDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUUxQixnQkFBVyxHQUE2QixJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUM1RSx1QkFBa0IsR0FBNkIsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFJeEYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDckQs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WUFBWSxVQUFVLEVBQUU7WUFDckMscUJBQXFCO1lBQ3JCLFlBQVksR0FBRyxVQUFVLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEQ7YUFBTTtZQUNMLHFCQUFxQjtZQUNyQixZQUFZLEdBQUcsZUFBZSxLQUFLLENBQUMsTUFBTSxjQUN4QyxDQUFBLE1BQUEsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLEtBQUssMENBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQyxNQUFBLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxLQUFLLDBDQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQ3hELEVBQUUsQ0FBQztTQUNKO1FBQ0QsT0FBTyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNELFFBQVE7UUFDTixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDMUQsT0FBTyxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7O3lHQXJIUSxXQUFXOzZHQUFYLFdBQVc7NEZBQVgsV0FBVztrQkFEdkIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgeyB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL3Rocm93RXJyb3InO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIdHRwU2VydmljZSB7XHJcbiAgICBSQkFDT1JHOiBhbnk7XHJcbiAgICBvdmVycmlkZVVybCA9IHRydWU7XHJcbiAgICBlcnJvckRhdGEhOiBIdHRwRXJyb3JSZXNwb25zZTtcclxuICAgIGJhc2VVcmwgPSAnJztcclxuICAgIHRva2VuS2V5OiBhbnk7XHJcbiAgICBwdWJsaWMgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXHJcbiAgICAgIC5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJylcclxuICAgICAgLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKVxyXG4gICAgICAuc2V0KCdyb2xlJywgJ3JvbGU9Q1BfUFVCTElDJyk7XHJcblxyXG4gICAgcHVibGljIHNob3dTcGlubmVyOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIHB1YmxpYyBvdXRzaWRlU2hvd1NwaW5uZXI6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgdXJsMTogc3RyaW5nO1xyXG4gICAgdXJsOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZSkge1xyXG4gICAgICB0aGlzLl9zdG9yZXNlcnZpY2UuY3VycmVudFN0b3JlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAocmVzWydSQkFDT1JHJ10gJiYgcmVzWydSQkFDT1JHJ10gIT09ICcnKSB7XHJcbiAgICAgICAgICB0aGlzLlJCQUNPUkcgPSByZXNbJ1JCQUNPUkcnXTtcclxuICAgICAgICAgIHRoaXMudXJsID0gdGhpcy5SQkFDT1JHWydhcGlIb3N0J10gPyB0aGlzLlJCQUNPUkdbJ2FwaUhvc3QnXSA6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpJztcclxuICAgICAgICAgIHRoaXMudG9rZW5LZXkgPSB0aGlzLlJCQUNPUkdbJ3Rva2VuS2V5J107XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy51cmwxID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KGFwaVJvdXRlOiBzdHJpbmcpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cmwgKyBhcGlSb3V0ZX1gLCB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5nZXRIdHRwTmV3SGVhZGVycygpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc3QoYXBpUm91dGU6IHN0cmluZywgYm9keTogYW55KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVybCArIGFwaVJvdXRlfWAsIGJvZHksIHtcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLmdldEh0dHBOZXdIZWFkZXJzKClcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHV0KGFwaVJvdXRlOiBzdHJpbmcsIGJvZHk6IGFueSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnB1dChgJHt0aGlzLnVybCArIGFwaVJvdXRlfWAsIGJvZHksIHtcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLmdldEh0dHBOZXdIZWFkZXJzKClcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGF0Y2goYXBpUm91dGU6IHN0cmluZywgYm9keT86IGFueSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKGAke3RoaXMudXJsICsgYXBpUm91dGV9YCwgYm9keSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0SHR0cE5ld0hlYWRlcnMoKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUoYXBpUm91dGU6IHN0cmluZykge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShgJHt0aGlzLnVybCArIGFwaVJvdXRlfWAsIHtcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLmdldEh0dHBOZXdIZWFkZXJzKClcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SHR0cEhlYWRlcnMoKTogSHR0cEhlYWRlcnMge1xyXG4gICAgICByZXR1cm4gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdrZXknLCAndmFsdWUnKTtcclxuICAgIH1cclxuICAgIGdldEh0dHBOZXdIZWFkZXJzKCk6IEh0dHBIZWFkZXJzIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaGVhZGVycy5zZXQoJ0F1dGhvcml6YXRpb24nLCBgQmVhcmVyICR7dGhpcy5nZXRUb2tlbigpfWApO1xyXG4gICAgfVxyXG4gICAgZ2V0QXR0YWNobWVudEh0dHBIZWFkZXJzKGNvbnRlbnRUeXBlOiBhbnkpOiBIdHRwSGVhZGVycyB7XHJcbiAgICAgIHJldHVybiBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ0NvbnRlbnQtVHlwZScsIGNvbnRlbnRUeXBlKS5zZXQoJ3gtbXMtYmxvYi10eXBlJywgJ0Jsb2NrQmxvYicpO1xyXG4gICAgfVxyXG4gICAgcHV0VXBsb2FkKGFwaVJvdXRlOiBzdHJpbmcsIGJvZHk6IGFueSwgY29udGVudFR5cGU6IGFueSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnB1dChgJHt0aGlzLnVybDEgKyBhcGlSb3V0ZX1gLCBib2R5LCB7IGhlYWRlcnM6IHRoaXMuZ2V0QXR0YWNobWVudEh0dHBIZWFkZXJzKGNvbnRlbnRUeXBlKSB9KTtcclxuICAgIH1cclxuICAgIGdldEF1dGhWYWxpZGF0aW9uKGFwaVJvdXRlLHRva2VuKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJsICsgYXBpUm91dGV9YCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0SHR0cE5ld0hlYWRlcnMoKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGdldEF1dGhBY2Nlc3NLZXkoYXBpUm91dGUsIGJvZHkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMudXJsICsgYXBpUm91dGV9YCwgYm9keSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0SHR0cE5ld0hlYWRlcnMoKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1dHVwbG9hZDIoYXBpUm91dGU6IHN0cmluZywgYm9keTogYW55LCBjb250ZW50dHlwZTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgIC5wdXQoYCR7dGhpcy51cmwxICsgYXBpUm91dGV9YCwgYm9keSwge1xyXG4gICAgICAgICAgaGVhZGVyczogdGhpcy5nZXRBdHRhY2htZW50SHR0cEhlYWRlcnMoY29udGVudHR5cGUpLFxyXG4gICAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICBtYXAoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFwaVJvdXRlXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgZG93bmxvYWQgdGhlIHN0cmVhbSBmaWxlIGZyb20gdGhlIEFQSSBzZXJ2aWNlLlxyXG4gICAgICogTm8gSFRUUCByZXF1aXJlZCBmb3IgdGhpcyBzdHJlYW0uIFNvIHVzZWQgV2luZG93LmxvY2F0aW9uLmhyZWYgdG8gZG93bmxvYWQgdGhlIGZpbGVcclxuICAgICAqL1xyXG4gICAgZ2V0Rm9ybURvd25sb2FkZWQoYXBpUm91dGU6IHN0cmluZykge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke3RoaXMudXJsICsgYXBpUm91dGV9YDtcclxuICAgIH1cclxuICAgIC8vY29tbW9uIGh0dHAgc2VydmljZShvcHRpb25hbClcclxuXHJcbiAgICBoYW5kbGVFcnJvcihlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpIHtcclxuICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICBpZiAoZXJyb3IuZXJyb3IgaW5zdGFuY2VvZiBFcnJvckV2ZW50KSB7XHJcbiAgICAgICAgLy8gQ2xpZW50LXNpZGUgZXJyb3JzXHJcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gYEVycm9yOiAke2Vycm9yLmVycm9yLm1lc3NhZ2V9YDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBTZXJ2ZXItc2lkZSBlcnJvcnNcclxuICAgICAgICBlcnJvck1lc3NhZ2UgPSBgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9XFxuTWVzc2FnZTogJHtcclxuICAgICAgICAgIGVycm9yPy5lcnJvcj8ubWVzc2FnZSA/IGVycm9yPy5lcnJvcj8ubWVzc2FnZSA6IGVycm9yLm1lc3NhZ2VcclxuICAgICAgICB9YDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgZ2V0VG9rZW4oKTogYW55IHtcclxuICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLnRva2VuS2V5ID8gdGhpcy50b2tlbktleSA6ICdqd3QtdG9rZW4nO1xyXG4gICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSh0b2tlbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIl19