import { ElementRef, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PasswordToggleDirective implements OnInit {
    private el;
    passwordField: HTMLInputElement;
    iconForPasswordType: string;
    iconForTextType: string;
    currentType: 'password' | 'text';
    constructor(el: ElementRef);
    ngOnInit(): void;
    onIconClicked(): void;
    changeIcon(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PasswordToggleDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PasswordToggleDirective, "[appPasswordToggle]", never, { "passwordField": "passwordField"; "iconForPasswordType": "iconForPasswordType"; "iconForTextType": "iconForTextType"; }, {}, never>;
}
