import { BehaviorSubject, Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class AppService {
    currentState: Subject<any>;
    currentValue: BehaviorSubject<any>;
    getValue: import("rxjs").Observable<any>;
    addValue(key: string, value: string): void;
    setValue(key: string, value: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AppService>;
}
