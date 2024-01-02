import { OnInit } from '@angular/core';
import { MicrostrategyService } from '../../@core/service/microstrategy.service';
import { LocalService } from '../../@core/service/local.service';
import { DataStoreService } from '../../@core/service/data-store.service';
import { RBACINFO } from '../../@core/urls/analytics-url.config';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class AnalyticsComponent implements OnInit {
    private mstrService;
    private localstore;
    private _storeservice;
    environment: any;
    RBACORG: RBACINFO;
    orgSubs: Subscription;
    orgId: any;
    constructor(mstrService: MicrostrategyService, localstore: LocalService, _storeservice: DataStoreService);
    ngOnInit(): void;
    getDossier(): Promise<void>;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AnalyticsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AnalyticsComponent, "lib-analytics", never, {}, {}, never, never>;
}
