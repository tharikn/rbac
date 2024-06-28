import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/permissions/permission.store";
export class ShowFieldDirective {
    templateRef;
    viewContainer;
    dataStore;
    showField;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ShowFieldDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: i1.PermissionStore }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: ShowFieldDirective, selector: "[showField]", inputs: { showField: "showField" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ShowFieldDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[showField]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.PermissionStore }]; }, propDecorators: { showField: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy1maWVsZC5kaXJlY3RpdmVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvcGFnZS1idWlsZGVyL3NyYy9saWIvcGljcy1wYWdlYnVpbGRlci9AY29yZS9kaXJlY3RpdmVzL3Nob3ctZmllbGQuZGlyZWN0aXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBeUMsTUFBTSxlQUFlLENBQUM7OztBQU14RixNQUFNLE9BQU8sa0JBQWtCO0lBSW5CO0lBQ0E7SUFDQTtJQUxELFNBQVMsQ0FBVTtJQUU1QixZQUNVLFdBQTZCLEVBQzdCLGFBQStCLEVBQy9CLFNBQTBCO1FBRjFCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3QixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDL0IsY0FBUyxHQUFULFNBQVMsQ0FBaUI7SUFDakMsQ0FBQztJQUVKLFFBQVE7UUFDTixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzVCO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN4RCxNQUFNLFNBQVMsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZELElBQUksU0FBUyxFQUFFO2dCQUNiLE1BQU0sYUFBYSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO3FCQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUM1QyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFO29CQUN4QixLQUFLLE1BQU0sTUFBTSxJQUFRLEtBQUssRUFBRTt3QkFDOUIsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7d0JBQ3ZDLElBQ0UsSUFBSSxLQUFLLElBQUksQ0FBQyxTQUFTOzRCQUN2QixhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzs0QkFDbEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFDeEI7NEJBQ0EsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt5QkFDNUI7cUJBQ0Y7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDTjtTQUNGO0lBQ0gsQ0FBQzt3R0FsQ1Usa0JBQWtCOzRGQUFsQixrQkFBa0I7OzRGQUFsQixrQkFBa0I7a0JBSDlCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7aUJBQ3hCOytKQUVVLFNBQVM7c0JBQWpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBlcm1pc3Npb25TdG9yZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3Blcm1pc3Npb25zL3Blcm1pc3Npb24uc3RvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbc2hvd0ZpZWxkXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNob3dGaWVsZERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgc2hvd0ZpZWxkITogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIGRhdGFTdG9yZTogUGVybWlzc2lvblN0b3JlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBlcm1pc3Npb25zID0gdGhpcy5kYXRhU3RvcmUuc3RhdGU7XHJcbiAgICBpZiAoIXBlcm1pc3Npb25zIHx8ICFwZXJtaXNzaW9uc1t0aGlzLnNob3dGaWVsZF0pIHtcclxuICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpO1xyXG4gICAgICBjb25zdCBsb29rdXBJZHMgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdMT09LVVBfSURTJyk7XHJcbiAgICAgIGlmIChsb29rdXBJZHMpIHtcclxuICAgICAgICBjb25zdCBsb29rdXBJZEFycmF5ID0gbG9va3VwSWRzLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXMocGVybWlzc2lvbnMpXHJcbiAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbVswXS5zdGFydHNXaXRoKCdHQUxLUF8nKSlcclxuICAgICAgICAgIC5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBfdmFsdWUgb2YgPFtdPnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgX2tleSA9IGtleS5yZXBsYWNlKCdHQUxLUF8nLCAnJyk7XHJcbiAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgX2tleSA9PT0gdGhpcy5zaG93RmllbGQgJiZcclxuICAgICAgICAgICAgICAgIGxvb2t1cElkQXJyYXkuaW5jbHVkZXMoU3RyaW5nKF92YWx1ZVsnbG9va3VwaWQnXSkpICYmXHJcbiAgICAgICAgICAgICAgICBfdmFsdWVbJ2FjdGlvbiddID09PSAnSCdcclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19