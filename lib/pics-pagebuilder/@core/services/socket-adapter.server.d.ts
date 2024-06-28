import { Observable } from 'rxjs';
import { Socket } from 'socket.io-client';
import { Router } from '@angular/router';
import { LocalService } from './local.service';
import * as i0 from "@angular/core";
export declare class SocketAdapterService {
    router: Router;
    localstorage: LocalService;
    private socketOption;
    socket: Socket;
    constructor(router: Router, localstorage: LocalService);
    joinRoom(roomData: any): void;
    leaveRoom(roomData: any): void;
    onConnect(): Observable<any>;
    onReConnect(): Observable<any>;
    receivePageData(): Observable<any>;
    onlineEditPageUsers(): Observable<any>;
    sendPageData(payload: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SocketAdapterService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SocketAdapterService>;
}
