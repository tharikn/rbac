import { Injectable } from '@angular/core';
import { DataSourceServiceConfig } from '../url/data-source-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./data-store.service";
export class DataSourceService {
    _storeservice;
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    getOrganizationDbs() {
        return this.httpService.get(DataSourceServiceConfig.EndPoint.Setting.getOrganizationDbs);
    }
    getSchema(dbAliasName) {
        return this.httpService.get(DataSourceServiceConfig.EndPoint.Setting.getList.replace('{dbaliasname}', dbAliasName));
    }
    SchemaCheck(id, dbaliasname) {
        return this.httpService.get(DataSourceServiceConfig.EndPoint.Setting.schemaCheck.replace('{organizationid}', id).replace('{dbaliasname}', dbaliasname));
    }
    updateData(data) {
        return this.httpService.post(DataSourceServiceConfig.EndPoint.Setting.updateData, data);
    }
    updateSchemaList(data) {
        return this.httpService.post(DataSourceServiceConfig.EndPoint.Setting.updateSchema, data);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataSourceService, deps: [{ token: i1.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataSourceService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataSourceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zb3VyY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL3BhZ2UtYnVpbGRlci9zcmMvbGliL3BpY3MtcGFnZWJ1aWxkZXIvQGNvcmUvc2VydmljZXMvZGF0YS1zb3VyY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7QUFNeEUsTUFBTSxPQUFPLGlCQUFpQjtJQUdSO0lBRmxCLFdBQVcsQ0FBTTtJQUVuQixZQUFvQixhQUErQjtRQUEvQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDbkQsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7YUFDdEM7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNQLENBQUM7SUFDRCxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUNELFNBQVMsQ0FBQyxXQUFrQjtRQUMxQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUN0SCxDQUFDO0lBQ0QsV0FBVyxDQUFDLEVBQUUsRUFBQyxXQUFXO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUMxSixDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQUk7UUFDWCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFDRCxnQkFBZ0IsQ0FBQyxJQUFJO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUYsQ0FBQzt3R0F4QlcsaUJBQWlCOzRHQUFqQixpQkFBaUIsY0FGaEIsTUFBTTs7NEZBRVAsaUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZVNlcnZpY2VDb25maWcgfSBmcm9tICcuLi91cmwvZGF0YS1zb3VyY2UtdXJsLmNvbmZpZyc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRhU291cmNlU2VydmljZSB7XHJcbiAgICBodHRwU2VydmljZTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdG9yZXNlcnZpY2U6IERhdGFTdG9yZVNlcnZpY2UpIHtcclxuICAgIHRoaXMuX3N0b3Jlc2VydmljZS5jdXJyZW50U3RvcmUuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgIHRoaXMuaHR0cFNlcnZpY2UgPSByZXNbJ0hUVFBTRVJWSUNFJ11cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiB9XHJcbiBnZXRPcmdhbml6YXRpb25EYnMoKSB7XHJcbiAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChEYXRhU291cmNlU2VydmljZUNvbmZpZy5FbmRQb2ludC5TZXR0aW5nLmdldE9yZ2FuaXphdGlvbkRicyk7XHJcbiB9XHJcbiBnZXRTY2hlbWEoZGJBbGlhc05hbWU6c3RyaW5nKSB7XHJcbiAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChEYXRhU291cmNlU2VydmljZUNvbmZpZy5FbmRQb2ludC5TZXR0aW5nLmdldExpc3QucmVwbGFjZSgne2RiYWxpYXNuYW1lfScsIGRiQWxpYXNOYW1lKSk7XHJcbiB9XHJcbiBTY2hlbWFDaGVjayhpZCxkYmFsaWFzbmFtZSl7XHJcbiAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChEYXRhU291cmNlU2VydmljZUNvbmZpZy5FbmRQb2ludC5TZXR0aW5nLnNjaGVtYUNoZWNrLnJlcGxhY2UoJ3tvcmdhbml6YXRpb25pZH0nLCBpZCkucmVwbGFjZSgne2RiYWxpYXNuYW1lfScsIGRiYWxpYXNuYW1lKSk7XHJcbiB9XHJcbiB1cGRhdGVEYXRhKGRhdGEpe1xyXG4gICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoRGF0YVNvdXJjZVNlcnZpY2VDb25maWcuRW5kUG9pbnQuU2V0dGluZy51cGRhdGVEYXRhLCBkYXRhKTtcclxuIH1cclxuIHVwZGF0ZVNjaGVtYUxpc3QoZGF0YSl7XHJcbiAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoRGF0YVNvdXJjZVNlcnZpY2VDb25maWcuRW5kUG9pbnQuU2V0dGluZy51cGRhdGVTY2hlbWEsIGRhdGEpO1xyXG4gfVxyXG59XHJcbiJdfQ==