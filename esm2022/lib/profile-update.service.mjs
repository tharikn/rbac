// Inside your npm package (ProfileService)
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class ProfileUpdateService {
    profilePictureSubject = new BehaviorSubject('/path/to/default-profile.jpg');
    profilePicture$ = this.profilePictureSubject.asObservable();
    updateProfilePicture(newPicturePath) {
        this.profilePictureSubject.next(newPicturePath);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileUpdateService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileUpdateService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProfileUpdateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS11cGRhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9wcm9maWxlL3NyYy9saWIvcHJvZmlsZS11cGRhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDOztBQUtuRCxNQUFNLE9BQU8sb0JBQW9CO0lBQ3ZCLHFCQUFxQixHQUFHLElBQUksZUFBZSxDQUFTLDhCQUE4QixDQUFDLENBQUM7SUFFNUYsZUFBZSxHQUF1QixJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFaEYsb0JBQW9CLENBQUMsY0FBc0I7UUFDekMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNsRCxDQUFDO3dHQVBVLG9CQUFvQjs0R0FBcEIsb0JBQW9CLGNBRm5CLE1BQU07OzRGQUVQLG9CQUFvQjtrQkFIaEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbnNpZGUgeW91ciBucG0gcGFja2FnZSAoUHJvZmlsZVNlcnZpY2UpXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZVVwZGF0ZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcHJvZmlsZVBpY3R1cmVTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcvcGF0aC90by9kZWZhdWx0LXByb2ZpbGUuanBnJyk7XHJcblxyXG4gIHByb2ZpbGVQaWN0dXJlJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5wcm9maWxlUGljdHVyZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIHVwZGF0ZVByb2ZpbGVQaWN0dXJlKG5ld1BpY3R1cmVQYXRoOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucHJvZmlsZVBpY3R1cmVTdWJqZWN0Lm5leHQobmV3UGljdHVyZVBhdGgpO1xyXG4gIH1cclxufVxyXG4iXX0=