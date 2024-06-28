import { DataStoreService } from './data-store.service';
import * as i0 from "@angular/core";
export declare class CommonDropdownsService {
    private _storeservice;
    httpService: any;
    constructor(_storeservice: DataStoreService);
    getDropDownValues(refUrl: any): any;
    getDropDownWithoutValues(refUrl: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<CommonDropdownsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CommonDropdownsService>;
}
