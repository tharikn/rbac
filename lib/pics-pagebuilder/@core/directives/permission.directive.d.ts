import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { PermissionStore } from '../permissions/permission.store';
import * as i0 from "@angular/core";
export declare class PermissionDirective implements AfterViewInit {
    private readonly renderer;
    private elementRef;
    private dataStore;
    fieldKey: string;
    constructor(renderer: Renderer2, elementRef: ElementRef, dataStore: PermissionStore);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PermissionDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PermissionDirective, "[fieldKey]", never, { "fieldKey": { "alias": "fieldKey"; "required": false; }; }, {}, never, never, false, never>;
}
