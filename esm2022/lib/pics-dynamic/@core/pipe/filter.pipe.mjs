import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class FilterPipe {
    transform(value, input) {
        if (input) {
            return value.filter(val => val.toLowerCase().indexOf(input.toLowerCase()) >= 0);
        }
        else {
            return value;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FilterPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FilterPipe, name: "FilterPipe" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FilterPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'FilterPipe'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9keW5hbWljL3NyYy9saWIvcGljcy1keW5hbWljL0Bjb3JlL3BpcGUvZmlsdGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBS3BELE1BQU0sT0FBTyxVQUFVO0lBQ3JCLFNBQVMsQ0FBQyxLQUFVLEVBQUUsS0FBVTtRQUM5QixJQUFJLEtBQUssRUFBRTtZQUNULE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDakY7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO3dHQVBVLFVBQVU7c0dBQVYsVUFBVTs7NEZBQVYsVUFBVTtrQkFIdEIsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsWUFBWTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ0ZpbHRlclBpcGUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGlucHV0OiBhbnkpOiBhbnkge1xyXG4gICAgaWYgKGlucHV0KSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZS5maWx0ZXIodmFsID0+IHZhbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoaW5wdXQudG9Mb3dlckNhc2UoKSkgPj0gMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==