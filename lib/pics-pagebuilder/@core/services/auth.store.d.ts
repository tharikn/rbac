import { UserDto } from '../services/alert.service';
import { Store } from '../services/store.service';
import { AuthState } from './auth.state';
import { DataStoreService } from './data-store.service';
import * as i0 from "@angular/core";
export declare class AuthStore extends Store<AuthState> {
    private _storeservice;
    constructor(_storeservice: DataStoreService);
    addAuthInfo(user: UserDto): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthStore>;
}
