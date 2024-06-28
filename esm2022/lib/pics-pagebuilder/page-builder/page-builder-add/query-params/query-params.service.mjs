import { Injectable } from '@angular/core';
import { PageBuilderAddURL } from '../../../@core/url/page-builder-add-url.config';
import * as i0 from "@angular/core";
import * as i1 from "../../../@core/services/data-store.service";
export class QueryParamsService {
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
    getSchemaList(orgid, dbAliasName) {
        return this.httpService.get(PageBuilderAddURL.EndPoints.db.schemaList.replace('{organizationid}', orgid).replace('{dbstring}', dbAliasName));
    }
    getTableBySchemaName(schema, dbAliasName) {
        return this.httpService.get(PageBuilderAddURL.EndPoints.db.tableBySchemaName.replace('{schema}', schema).replace('{dbstring}', dbAliasName));
    }
    getTableFields(schema, table, dbAliasName, pageType) {
        let url;
        url = PageBuilderAddURL.EndPoints.db.tableFields
            .replace('{table}', table)
            .replace('{schema}', schema)
            .replace('{dbstring}', dbAliasName)
            .concat('?includeAutoIncrementColumn=true&includeCreateColumns=true&includeUpdateColumns=true');
        return this.httpService.get(url);
    }
    getColumnsOfRelatedTables(relatedTables) {
        return this.httpService.post(PageBuilderAddURL.EndPoints.db.fieldsOfRelatedTable, relatedTables);
    }
    getRelatedTableFields(table, schema, dbAliasName) {
        return this.httpService.get(PageBuilderAddURL.EndPoints.db.relatedTableFields.replace('{table}', table).replace('{schema}', schema).replace('{dbstring}', dbAliasName));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: QueryParamsService, deps: [{ token: i1.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: QueryParamsService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: QueryParamsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktcGFyYW1zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9wYWdlLWJ1aWxkZXIvc3JjL2xpYi9waWNzLXBhZ2VidWlsZGVyL3BhZ2UtYnVpbGRlci9wYWdlLWJ1aWxkZXItYWRkL3F1ZXJ5LXBhcmFtcy9xdWVyeS1wYXJhbXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOzs7QUFLbkYsTUFBTSxPQUFPLGtCQUFrQjtJQUVUO0lBRHBCLFdBQVcsQ0FBTTtJQUNqQixZQUFvQixhQUErQjtRQUEvQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDckQsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7YUFDdEM7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUVKLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBSyxFQUFFLFdBQW1CO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUMvSSxDQUFDO0lBRUQsb0JBQW9CLENBQUMsTUFBYyxFQUFFLFdBQW1CO1FBQ3RELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUMvSSxDQUFDO0lBRUQsY0FBYyxDQUFDLE1BQWMsRUFBRSxLQUFhLEVBQUUsV0FBbUIsRUFBRSxRQUFnQjtRQUNqRixJQUFJLEdBQVEsQ0FBQztRQUNiLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFdBQVc7YUFDN0MsT0FBTyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7YUFDekIsT0FBTyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUM7YUFDM0IsT0FBTyxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUM7YUFDbEMsTUFBTSxDQUFDLHNGQUFzRixDQUFDLENBQUM7UUFDbEcsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQseUJBQXlCLENBQUMsYUFBeUI7UUFDakQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLG9CQUFvQixFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxLQUFhLEVBQUUsTUFBYyxFQUFFLFdBQW1CO1FBQ3RFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQ3pCLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLENBQzNJLENBQUM7SUFDSixDQUFDO3dHQXJDVSxrQkFBa0I7NEdBQWxCLGtCQUFrQixjQUZqQixNQUFNOzs0RkFFUCxrQkFBa0I7a0JBSDlCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvc2VydmljZXMvZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGFnZUJ1aWxkZXJBZGRVUkwgfSBmcm9tICcuLi8uLi8uLi9AY29yZS91cmwvcGFnZS1idWlsZGVyLWFkZC11cmwuY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFF1ZXJ5UGFyYW1zU2VydmljZSB7XHJcbiAgaHR0cFNlcnZpY2U6IGFueTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdG9yZXNlcnZpY2U6IERhdGFTdG9yZVNlcnZpY2UpIHtcclxuICAgIHRoaXMuX3N0b3Jlc2VydmljZS5jdXJyZW50U3RvcmUuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgdGhpcy5odHRwU2VydmljZSA9IHJlc1snSFRUUFNFUlZJQ0UnXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICB9XHJcblxyXG4gIGdldFNjaGVtYUxpc3Qob3JnaWQsIGRiQWxpYXNOYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChQYWdlQnVpbGRlckFkZFVSTC5FbmRQb2ludHMuZGIuc2NoZW1hTGlzdC5yZXBsYWNlKCd7b3JnYW5pemF0aW9uaWR9Jywgb3JnaWQpLnJlcGxhY2UoJ3tkYnN0cmluZ30nLCBkYkFsaWFzTmFtZSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGFibGVCeVNjaGVtYU5hbWUoc2NoZW1hOiBzdHJpbmcsIGRiQWxpYXNOYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChQYWdlQnVpbGRlckFkZFVSTC5FbmRQb2ludHMuZGIudGFibGVCeVNjaGVtYU5hbWUucmVwbGFjZSgne3NjaGVtYX0nLCBzY2hlbWEpLnJlcGxhY2UoJ3tkYnN0cmluZ30nLCBkYkFsaWFzTmFtZSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGFibGVGaWVsZHMoc2NoZW1hOiBzdHJpbmcsIHRhYmxlOiBzdHJpbmcsIGRiQWxpYXNOYW1lOiBzdHJpbmcsIHBhZ2VUeXBlOiBzdHJpbmcpIHtcclxuICAgIGxldCB1cmw6IGFueTtcclxuICAgIHVybCA9IFBhZ2VCdWlsZGVyQWRkVVJMLkVuZFBvaW50cy5kYi50YWJsZUZpZWxkc1xyXG4gICAgICAucmVwbGFjZSgne3RhYmxlfScsIHRhYmxlKVxyXG4gICAgICAucmVwbGFjZSgne3NjaGVtYX0nLCBzY2hlbWEpXHJcbiAgICAgIC5yZXBsYWNlKCd7ZGJzdHJpbmd9JywgZGJBbGlhc05hbWUpXHJcbiAgICAgIC5jb25jYXQoJz9pbmNsdWRlQXV0b0luY3JlbWVudENvbHVtbj10cnVlJmluY2x1ZGVDcmVhdGVDb2x1bW5zPXRydWUmaW5jbHVkZVVwZGF0ZUNvbHVtbnM9dHJ1ZScpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KHVybCk7XHJcbiAgfVxyXG5cclxuICBnZXRDb2x1bW5zT2ZSZWxhdGVkVGFibGVzKHJlbGF0ZWRUYWJsZXM6IEFycmF5PGFueT4pIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoUGFnZUJ1aWxkZXJBZGRVUkwuRW5kUG9pbnRzLmRiLmZpZWxkc09mUmVsYXRlZFRhYmxlLCByZWxhdGVkVGFibGVzKTtcclxuICB9XHJcblxyXG4gIGdldFJlbGF0ZWRUYWJsZUZpZWxkcyh0YWJsZTogc3RyaW5nLCBzY2hlbWE6IHN0cmluZywgZGJBbGlhc05hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KFxyXG4gICAgICBQYWdlQnVpbGRlckFkZFVSTC5FbmRQb2ludHMuZGIucmVsYXRlZFRhYmxlRmllbGRzLnJlcGxhY2UoJ3t0YWJsZX0nLCB0YWJsZSkucmVwbGFjZSgne3NjaGVtYX0nLCBzY2hlbWEpLnJlcGxhY2UoJ3tkYnN0cmluZ30nLCBkYkFsaWFzTmFtZSlcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==