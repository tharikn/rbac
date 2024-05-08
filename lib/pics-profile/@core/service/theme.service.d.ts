import { FontSet, Theme } from '../constants/common.entities';
import * as i0 from "@angular/core";
export declare class ThemeService {
    private active?;
    private activeFont?;
    constructor();
    setActiveTheme(theme: Theme): void;
    setActiveFont(Fontset: FontSet): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThemeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ThemeService>;
}
