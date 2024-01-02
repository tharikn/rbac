import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class CapitalizePipe {
    transform(value) {
        if (!value)
            return value;
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
}
CapitalizePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CapitalizePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
CapitalizePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CapitalizePipe, name: "capitalize" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CapitalizePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'capitalize'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwaXRhbGl6ZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3JiYWMtdXNlcnMvc3JjL2xpYi9waWNzLXJiYWMtdXNlcnMvQGNvcmUvcGlwZS9jYXBpdGFsaXplLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBS3BELE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFFekIsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdEUsQ0FBQzs7NEdBTFUsY0FBYzswR0FBZCxjQUFjOzRGQUFkLGNBQWM7a0JBSDFCLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLFlBQVk7aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdjYXBpdGFsaXplJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FwaXRhbGl6ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXZhbHVlKSByZXR1cm4gdmFsdWU7XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcclxuICB9XHJcbn0iXX0=