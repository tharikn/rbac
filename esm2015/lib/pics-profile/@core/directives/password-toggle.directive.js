import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class PasswordToggleDirective {
    constructor(el) {
        this.el = el;
        this.iconForPasswordType = 'pi-eye-slash';
        this.iconForTextType = 'pi-eye';
        this.currentType = 'password';
    }
    ngOnInit() {
        this.passwordField.type = this.currentType;
        this.changeIcon();
    }
    onIconClicked() {
        this.currentType = this.currentType === 'password' ? 'text' : 'password';
        this.passwordField.type = this.currentType;
        this.changeIcon();
    }
    changeIcon() {
        this.el.nativeElement.classList.remove(this.iconForPasswordType, this.iconForTextType);
        this.el.nativeElement.classList.add(this.currentType === 'password' ? this.iconForPasswordType : this.iconForTextType);
    }
}
PasswordToggleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PasswordToggleDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
PasswordToggleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: PasswordToggleDirective, selector: "[appPasswordToggle]", inputs: { passwordField: "passwordField", iconForPasswordType: "iconForPasswordType", iconForTextType: "iconForTextType" }, host: { listeners: { "click": "onIconClicked()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PasswordToggleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appPasswordToggle]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { passwordField: [{
                type: Input
            }], iconForPasswordType: [{
                type: Input
            }], iconForTextType: [{
                type: Input
            }], onIconClicked: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQtdG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9wcm9maWxlL3NyYy9saWIvcGljcy1wcm9maWxlL0Bjb3JlL2RpcmVjdGl2ZXMvcGFzc3dvcmQtdG9nZ2xlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7O0FBS25GLE1BQU0sT0FBTyx1QkFBdUI7SUFTbEMsWUFDVSxFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQU5mLHdCQUFtQixHQUFHLGNBQWMsQ0FBQztRQUNyQyxvQkFBZSxHQUFHLFFBQVEsQ0FBQztRQUVwQyxnQkFBVyxHQUF3QixVQUFVLENBQUM7SUFJMUMsQ0FBQztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBR0QsYUFBYTtRQUNYLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQ3pFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDM0MsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3pILENBQUM7O3FIQTVCVSx1QkFBdUI7eUdBQXZCLHVCQUF1Qjs0RkFBdkIsdUJBQXVCO2tCQUhuQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7aUJBQ2hDO2lHQUdVLGFBQWE7c0JBQXJCLEtBQUs7Z0JBRUcsbUJBQW1CO3NCQUEzQixLQUFLO2dCQUNHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBY04sYUFBYTtzQkFEWixZQUFZO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBwUGFzc3dvcmRUb2dnbGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRUb2dnbGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBwYXNzd29yZEZpZWxkOiBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICBASW5wdXQoKSBpY29uRm9yUGFzc3dvcmRUeXBlID0gJ3BpLWV5ZS1zbGFzaCc7XHJcbiAgQElucHV0KCkgaWNvbkZvclRleHRUeXBlID0gJ3BpLWV5ZSc7XHJcblxyXG4gIGN1cnJlbnRUeXBlOiAncGFzc3dvcmQnIHwgJ3RleHQnID0gJ3Bhc3N3b3JkJztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnBhc3N3b3JkRmllbGQudHlwZSA9IHRoaXMuY3VycmVudFR5cGU7XHJcbiAgICB0aGlzLmNoYW5nZUljb24oKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICBvbkljb25DbGlja2VkKCkge1xyXG4gICAgdGhpcy5jdXJyZW50VHlwZSA9IHRoaXMuY3VycmVudFR5cGUgPT09ICdwYXNzd29yZCcgPyAndGV4dCcgOiAncGFzc3dvcmQnO1xyXG4gICAgdGhpcy5wYXNzd29yZEZpZWxkLnR5cGUgPSB0aGlzLmN1cnJlbnRUeXBlO1xyXG4gICAgdGhpcy5jaGFuZ2VJY29uKCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VJY29uKCkge1xyXG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5pY29uRm9yUGFzc3dvcmRUeXBlLCB0aGlzLmljb25Gb3JUZXh0VHlwZSk7XHJcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmN1cnJlbnRUeXBlID09PSAncGFzc3dvcmQnID8gdGhpcy5pY29uRm9yUGFzc3dvcmRUeXBlIDogdGhpcy5pY29uRm9yVGV4dFR5cGUpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19