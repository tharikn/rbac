import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../permissions/permission.store";
export class ShowFieldDirective {
    constructor(templateRef, viewContainer, dataStore) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.dataStore = dataStore;
    }
    ngOnInit() {
        const permissions = this.dataStore.state;
        if (!permissions || !permissions[this.showField]) {
            this.viewContainer.clear();
        }
        else {
            this.viewContainer.createEmbeddedView(this.templateRef);
            const lookupIds = sessionStorage.getItem('LOOKUP_IDS');
            if (lookupIds) {
                const lookupIdArray = lookupIds.split(',');
                Object.entries(permissions)
                    .filter(item => item[0].startsWith('GALKP_'))
                    .forEach(([key, value]) => {
                    for (const _value of value) {
                        const _key = key.replace('GALKP_', '');
                        if (_key === this.showField &&
                            lookupIdArray.includes(String(_value['lookupid'])) &&
                            _value['action'] === 'H') {
                            this.viewContainer.clear();
                        }
                    }
                });
            }
        }
    }
}
ShowFieldDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShowFieldDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.PermissionStore }], target: i0.ɵɵFactoryTarget.Directive });
ShowFieldDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: ShowFieldDirective, selector: "[showField]", inputs: { showField: "showField" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShowFieldDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[showField]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.PermissionStore }]; }, propDecorators: { showField: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy1maWVsZC5kaXJlY3RpdmVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2xvZ2luL3NyYy9saWIvcGljcy1sb2dpbi9AY29yZS9kaXJlY3RpdmVzL3Nob3ctZmllbGQuZGlyZWN0aXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBeUMsTUFBTSxlQUFlLENBQUM7OztBQU14RixNQUFNLE9BQU8sa0JBQWtCO0lBRzdCLFlBQ1UsV0FBNkIsRUFDN0IsYUFBK0IsRUFDL0IsU0FBMEI7UUFGMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUMvQixjQUFTLEdBQVQsU0FBUyxDQUFpQjtJQUNqQyxDQUFDO0lBRUosUUFBUTtRQUNOLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDNUI7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3hELE1BQU0sU0FBUyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkQsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsTUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7cUJBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQzVDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUU7b0JBQ3hCLEtBQUssTUFBTSxNQUFNLElBQVEsS0FBSyxFQUFFO3dCQUM5QixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFDdkMsSUFDRSxJQUFJLEtBQUssSUFBSSxDQUFDLFNBQVM7NEJBQ3ZCLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzRCQUNsRCxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxFQUN4Qjs0QkFDQSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO3lCQUM1QjtxQkFDRjtnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNOO1NBQ0Y7SUFDSCxDQUFDOztnSEFsQ1Usa0JBQWtCO29HQUFsQixrQkFBa0I7NEZBQWxCLGtCQUFrQjtrQkFIOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtpQkFDeEI7K0pBRVUsU0FBUztzQkFBakIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGVybWlzc2lvblN0b3JlIH0gZnJvbSAnLi4vcGVybWlzc2lvbnMvcGVybWlzc2lvbi5zdG9yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tzaG93RmllbGRdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hvd0ZpZWxkRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBzaG93RmllbGQhOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgZGF0YVN0b3JlOiBQZXJtaXNzaW9uU3RvcmVcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgcGVybWlzc2lvbnMgPSB0aGlzLmRhdGFTdG9yZS5zdGF0ZTtcclxuICAgIGlmICghcGVybWlzc2lvbnMgfHwgIXBlcm1pc3Npb25zW3RoaXMuc2hvd0ZpZWxkXSkge1xyXG4gICAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7XHJcbiAgICAgIGNvbnN0IGxvb2t1cElkcyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ0xPT0tVUF9JRFMnKTtcclxuICAgICAgaWYgKGxvb2t1cElkcykge1xyXG4gICAgICAgIGNvbnN0IGxvb2t1cElkQXJyYXkgPSBsb29rdXBJZHMuc3BsaXQoJywnKTtcclxuICAgICAgICBPYmplY3QuZW50cmllcyhwZXJtaXNzaW9ucylcclxuICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtWzBdLnN0YXJ0c1dpdGgoJ0dBTEtQXycpKVxyXG4gICAgICAgICAgLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IF92YWx1ZSBvZiA8W10+dmFsdWUpIHtcclxuICAgICAgICAgICAgICBjb25zdCBfa2V5ID0ga2V5LnJlcGxhY2UoJ0dBTEtQXycsICcnKTtcclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBfa2V5ID09PSB0aGlzLnNob3dGaWVsZCAmJlxyXG4gICAgICAgICAgICAgICAgbG9va3VwSWRBcnJheS5pbmNsdWRlcyhTdHJpbmcoX3ZhbHVlWydsb29rdXBpZCddKSkgJiZcclxuICAgICAgICAgICAgICAgIF92YWx1ZVsnYWN0aW9uJ10gPT09ICdIJ1xyXG4gICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=