import { Observable } from 'rxjs';
import { UserDto } from '../constants/common.entities';
import { HttpService } from './http.service';
import { AuthState } from './auth.state';
import { Store } from './store.service';
import * as i0 from "@angular/core";
export declare class AuthStore extends Store<AuthState> {
    private httpService;
    constructor(httpService: HttpService);
    addAuthInfo(user: UserDto): void;
    getAuthInfo(): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthStore>;
}
