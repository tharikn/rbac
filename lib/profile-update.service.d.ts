import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ProfileUpdateService {
    private profilePictureSubject;
    profilePicture$: Observable<string>;
    updateProfilePicture(newPicturePath: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProfileUpdateService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProfileUpdateService>;
}
