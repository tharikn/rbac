import { Component, ViewChild } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { forkJoin, Subject } from 'rxjs';
import { filter, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { LocalService } from '../../@core/service/local.service';
import * as i0 from "@angular/core";
import * as i1 from "../../@core/service/dynamic-tab-page-service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "primeng/tabmenu";
export class DynamicTabComponent {
    dynamicTabPageService;
    route;
    router;
    items = [];
    pages = [];
    activeItem;
    tabPageId;
    formId;
    currentRouterLink;
    localstorage;
    navigateData;
    parentGridPage;
    destroy$ = new Subject();
    tab;
    showTabs = false;
    constructor(injector, dynamicTabPageService, route, router) {
        this.dynamicTabPageService = dynamicTabPageService;
        this.route = route;
        this.router = router;
        this.tabPageId = this.route.snapshot.paramMap.get('tabId');
        this.localstorage = injector.get(LocalService);
        this.navigateData = this.router?.getCurrentNavigation()?.extras?.state;
        if (this.tabPageId) {
            this.localstorage.setItem('tabpageid', this.tabPageId);
        }
    }
    ngOnInit() {
        this.route.params
            .pipe(filter(params => !isNaN(params['tabId'])), tap(params => (this.tabPageId = params['tabId'])), takeUntil(this.destroy$))
            .subscribe(_ => this.getDynamicTab());
        this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((_) => {
            setTimeout(() => {
                const index = this.items.findIndex((t) => t.id === this.activeItem.id);
                [...this.tab.content.nativeElement.querySelectorAll('ul li')].forEach((e) => e.classList.remove('p-highlight'));
                [...this.tab.content.nativeElement.querySelectorAll('ul li a')].forEach((e) => e.classList.remove('p-menuitem-link-active'));
                if (index > -1) {
                    this.tab.content.nativeElement.querySelector(`ul li:nth-child(${index + 1})`).classList.add('p-highlight');
                    this.tab.content.nativeElement.querySelector(`ul li:nth-child(${index + 1}) a`).classList.add('p-menuitem-link-active');
                }
            }, 200);
        });
    }
    routeToLandingPage() {
        const tabIndex = this.localstorage.getItem('tabIndex') ? this.localstorage.getItem('tabIndex') : '0';
        //Prevent Navigation failing while access to diffrent tabpages with diffrent tabindex.
        const currentRoute = this.items[Number(tabIndex)] ? this.items[Number(tabIndex)] : this.items[0];
        this.currentRouterLink = currentRoute?.routerLink;
        const backToGridPage = this.localstorage.getItem('backToGridPage');
        if (backToGridPage) {
            this.parentGridPage = JSON.parse(backToGridPage)?.name;
        }
        this.localstorage.setItem('navigationState', JSON.stringify(this.navigateData));
        this.activeItem = currentRoute;
        this.router.navigate([`${currentRoute.routerLink}`], { relativeTo: this.route, state: this.navigateData });
    }
    getDynamicTab() {
        this.dynamicTabPageService
            .getActivePage(this.tabPageId)
            .pipe(filter((response) => !!response.data.tabconfig), map((response) => JSON.parse(response.data.tabconfig)), tap((tabConfig) => {
            this.pages = tabConfig.map(page => {
                return {
                    id: page.id,
                    label: page.name,
                    routerLink: '',
                    icon: page?.icon ? page?.icon : ''
                };
            });
        }), switchMap((tabConfig) => {
            const observables = tabConfig.map(page => {
                return this.getActiveVersion(page);
            });
            return forkJoin(observables);
        }), takeUntil(this.destroy$))
            .subscribe(_ => {
            this.showTabs = true;
            this.routeToLandingPage();
        });
    }
    getActiveVersion(page) {
        return this.dynamicTabPageService.getDynamicPage(page.id).pipe(tap(response => this.setRoutetoTabs(response['data'], page.id)), takeUntil(this.destroy$));
    }
    setRoutetoTabs(rows, pageId) {
        this.items = this.pages
            .map(a => {
            if (a.id === pageId && a.routerLink === '') {
                if (rows[0].pagetype === 'BGP') {
                    a.routerLink = a.id === rows[0].id ? `dynamic-search/${rows[0].activeVersion.id}` : '';
                }
                else {
                    a.routerLink = a.id === rows[0].id ? `page/${pageId}` : '';
                }
            }
            return a; // Return the modified item
        })
            .filter(x => x.routerLink !== ''); // Filter out items with an empty routerLink
    }
    redirect() {
        const id = this.localstorage.getItem('version-id');
        this.router.navigate([`pages/page-design/versions/${id}`]);
        const parentGridPageInfo = JSON.parse(this.localstorage.getItem('backToGridPage'));
        this.router.navigate([`/pages/dynamic-search/search/${parentGridPageInfo.id}`], { relativeTo: this.route });
    }
    ngOnDestroy() {
        this.localstorage.removeItem('YouthID');
        this.localstorage.removeItem('navigationState');
        this.destroy$.next();
        this.destroy$.complete();
    }
    onTabItemClick(tab) {
        this.activeItem = this.items.find((t) => t.id === tab?.activeItem?.id);
        this.router.navigate([`${tab.activeItem.routerLink}`], {
            relativeTo: this.route,
            state: this.navigateData
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabComponent, deps: [{ token: i0.Injector }, { token: i1.DynamicTabPageService }, { token: i2.ActivatedRoute }, { token: i2.Router }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DynamicTabComponent, selector: "app-dynamic-tab", viewQueries: [{ propertyName: "tab", first: true, predicate: ["tab"], descendants: true }], ngImport: i0, template: "<div class=\"rbac-tab\" *ngIf=\"showTabs\">\r\n  <p-tabMenu\r\n    [model]=\"items\"\r\n    #tab\r\n    (click)=\"onTabItemClick(tab)\"\r\n    [scrollable]=\"true\"\r\n    [activeItem]=\"activeItem\"></p-tabMenu>\r\n</div>\r\n<router-outlet></router-outlet>\r\n", styles: [".rbac-tab .p-tabmenu-nav .p-menuitem-text{line-height:1;font-size:13px}.rbac-tab .p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link{background:#fff;border-color:#2c2863;color:#2c2863;font-weight:700}\n"], dependencies: [{ kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.RouterOutlet, selector: "router-outlet", inputs: ["name"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }, { kind: "component", type: i4.TabMenu, selector: "p-tabMenu", inputs: ["model", "activeItem", "scrollable", "popup", "style", "styleClass", "ariaLabel", "ariaLabelledBy"], outputs: ["activeItemChange"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-dynamic-tab', template: "<div class=\"rbac-tab\" *ngIf=\"showTabs\">\r\n  <p-tabMenu\r\n    [model]=\"items\"\r\n    #tab\r\n    (click)=\"onTabItemClick(tab)\"\r\n    [scrollable]=\"true\"\r\n    [activeItem]=\"activeItem\"></p-tabMenu>\r\n</div>\r\n<router-outlet></router-outlet>\r\n", styles: [".rbac-tab .p-tabmenu-nav .p-menuitem-text{line-height:1;font-size:13px}.rbac-tab .p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link{background:#fff;border-color:#2c2863;color:#2c2863;font-weight:700}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.DynamicTabPageService }, { type: i2.ActivatedRoute }, { type: i2.Router }]; }, propDecorators: { tab: [{
                type: ViewChild,
                args: ['tab']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10YWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9keW5hbWljLXRhYi1wYWdlL2R5bmFtaWMtdGFiL2R5bmFtaWMtdGFiLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvZHluYW1pYy10YWItcGFnZS9keW5hbWljLXRhYi9keW5hbWljLXRhYi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUErQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFrQixhQUFhLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUd4RSxPQUFPLEVBQUUsUUFBUSxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7O0FBUWpFLE1BQU0sT0FBTyxtQkFBbUI7SUFnQnBCO0lBQ0E7SUFDQTtJQWpCVixLQUFLLEdBQWUsRUFBRSxDQUFDO0lBQ3ZCLEtBQUssR0FBZSxFQUFFLENBQUM7SUFDdkIsVUFBVSxDQUFZO0lBQ3RCLFNBQVMsQ0FBUztJQUNsQixNQUFNLENBQVM7SUFDZixpQkFBaUIsQ0FBUztJQUMxQixZQUFZLENBQWU7SUFDM0IsWUFBWSxDQUFNO0lBQ2xCLGNBQWMsQ0FBTTtJQUNaLFFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBQ3JCLEdBQUcsQ0FBVTtJQUMvQixR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QUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRTtZQUNyRCxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDdEIsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZO1NBQ3pCLENBQUMsQ0FBQztJQUNMLENBQUM7d0dBbEpVLG1CQUFtQjs0RkFBbkIsbUJBQW1CLG1KQ2RoQyx1UUFTQTs7NEZES2EsbUJBQW1CO2tCQUwvQixTQUFTOytCQUNFLGlCQUFpQjtxTEFlVCxHQUFHO3NCQUFwQixTQUFTO3VCQUFDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdG9yLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcclxuaW1wb3J0IHsgVGFiTWVudSB9IGZyb20gJ3ByaW1lbmcvdGFibWVudSc7XHJcbmltcG9ydCB7IGZvcmtKb2luLCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBMb2NhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2xvY2FsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEeW5hbWljVGFiUGFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9AY29yZS9zZXJ2aWNlL2R5bmFtaWMtdGFiLXBhZ2Utc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1keW5hbWljLXRhYicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2R5bmFtaWMtdGFiLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9keW5hbWljLXRhYi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGl0ZW1zOiBNZW51SXRlbVtdID0gW107XHJcbiAgcGFnZXM6IE1lbnVJdGVtW10gPSBbXTtcclxuICBhY3RpdmVJdGVtITogTWVudUl0ZW07XHJcbiAgdGFiUGFnZUlkOiBzdHJpbmc7XHJcbiAgZm9ybUlkOiBzdHJpbmc7XHJcbiAgY3VycmVudFJvdXRlckxpbms6IHN0cmluZztcclxuICBsb2NhbHN0b3JhZ2U6IExvY2FsU2VydmljZTtcclxuICBuYXZpZ2F0ZURhdGE6IGFueTtcclxuICBwYXJlbnRHcmlkUGFnZTogYW55O1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIEBWaWV3Q2hpbGQoJ3RhYicpIHRhYjogVGFiTWVudTtcclxuICBzaG93VGFicyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIHByaXZhdGUgZHluYW1pY1RhYlBhZ2VTZXJ2aWNlOiBEeW5hbWljVGFiUGFnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcclxuICApIHtcclxuICAgIHRoaXMudGFiUGFnZUlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3RhYklkJyk7XHJcbiAgICB0aGlzLmxvY2Fsc3RvcmFnZSA9IGluamVjdG9yLmdldDxMb2NhbFNlcnZpY2U+KExvY2FsU2VydmljZSk7XHJcbiAgICB0aGlzLm5hdmlnYXRlRGF0YSA9IHRoaXMucm91dGVyPy5nZXRDdXJyZW50TmF2aWdhdGlvbigpPy5leHRyYXM/LnN0YXRlO1xyXG4gICAgaWYgKHRoaXMudGFiUGFnZUlkKSB7XHJcbiAgICAgIHRoaXMubG9jYWxzdG9yYWdlLnNldEl0ZW0oJ3RhYnBhZ2VpZCcsIHRoaXMudGFiUGFnZUlkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXNcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKHBhcmFtcyA9PlxyXG4gICAgICAgICAgICFpc05hTihwYXJhbXNbJ3RhYklkJ10pXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgIHRhcChwYXJhbXMgPT4gXHJcbiAgICAgICAgICAodGhpcy50YWJQYWdlSWQgPSBwYXJhbXNbJ3RhYklkJ10pXHJcbiAgICAgICAgKSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKF8gPT4gXHJcbiAgICAgICAgdGhpcy5nZXREeW5hbWljVGFiKClcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKChldmVudCkgPT4gXHJcbiAgICAgICAgICBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmRcclxuICAgICAgKVxyXG4gICAgICApLnN1YnNjcmliZSgoXykgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLml0ZW1zLmZpbmRJbmRleCgodCkgPT4gdC5pZCA9PT0gdGhpcy5hY3RpdmVJdGVtLmlkKTtcclxuICAgICAgICAgIFsuLi50aGlzLnRhYi5jb250ZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgndWwgbGknKV0uZm9yRWFjaCgoZSkgPT4gZS5jbGFzc0xpc3QucmVtb3ZlKCdwLWhpZ2hsaWdodCcpKTtcclxuICAgICAgICAgIFsuLi50aGlzLnRhYi5jb250ZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgndWwgbGkgYScpXS5mb3JFYWNoKChlKSA9PiBlLmNsYXNzTGlzdC5yZW1vdmUoJ3AtbWVudWl0ZW0tbGluay1hY3RpdmUnKSk7XHJcbiAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYi5jb250ZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihgdWwgbGk6bnRoLWNoaWxkKCR7aW5kZXggKyAxfSlgKS5jbGFzc0xpc3QuYWRkKCdwLWhpZ2hsaWdodCcpO1xyXG4gICAgICAgICAgICB0aGlzLnRhYi5jb250ZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihgdWwgbGk6bnRoLWNoaWxkKCR7aW5kZXggKyAxfSkgYWApLmNsYXNzTGlzdC5hZGQoJ3AtbWVudWl0ZW0tbGluay1hY3RpdmUnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCAyMDApO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHJvdXRlVG9MYW5kaW5nUGFnZSgpIHtcclxuICAgIGNvbnN0IHRhYkluZGV4ID0gdGhpcy5sb2NhbHN0b3JhZ2UuZ2V0SXRlbSgndGFiSW5kZXgnKSA/IHRoaXMubG9jYWxzdG9yYWdlLmdldEl0ZW0oJ3RhYkluZGV4JykgOiAnMCc7XHJcbiAgICAvL1ByZXZlbnQgTmF2aWdhdGlvbiBmYWlsaW5nIHdoaWxlIGFjY2VzcyB0byBkaWZmcmVudCB0YWJwYWdlcyB3aXRoIGRpZmZyZW50IHRhYmluZGV4LlxyXG4gICAgY29uc3QgY3VycmVudFJvdXRlID0gdGhpcy5pdGVtc1tOdW1iZXIodGFiSW5kZXgpXSA/IHRoaXMuaXRlbXNbTnVtYmVyKHRhYkluZGV4KV0gOiB0aGlzLml0ZW1zWzBdO1xyXG4gICAgdGhpcy5jdXJyZW50Um91dGVyTGluayA9IGN1cnJlbnRSb3V0ZT8ucm91dGVyTGluaztcclxuICAgIGNvbnN0IGJhY2tUb0dyaWRQYWdlID0gdGhpcy5sb2NhbHN0b3JhZ2UuZ2V0SXRlbSgnYmFja1RvR3JpZFBhZ2UnKTtcclxuICAgIGlmIChiYWNrVG9HcmlkUGFnZSkge1xyXG4gICAgICB0aGlzLnBhcmVudEdyaWRQYWdlID0gSlNPTi5wYXJzZShiYWNrVG9HcmlkUGFnZSk/Lm5hbWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxvY2Fsc3RvcmFnZS5zZXRJdGVtKCduYXZpZ2F0aW9uU3RhdGUnLCBKU09OLnN0cmluZ2lmeSh0aGlzLm5hdmlnYXRlRGF0YSkpO1xyXG4gICAgdGhpcy5hY3RpdmVJdGVtID0gY3VycmVudFJvdXRlO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2Ake2N1cnJlbnRSb3V0ZS5yb3V0ZXJMaW5rfWBdLCB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUsIHN0YXRlOiB0aGlzLm5hdmlnYXRlRGF0YSB9KTtcclxuICB9XHJcblxyXG4gIGdldER5bmFtaWNUYWIoKSB7XHJcbiAgICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZVxyXG4gICAgICAuZ2V0QWN0aXZlUGFnZSh0aGlzLnRhYlBhZ2VJZClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKChyZXNwb25zZTogYW55KSA9PiAhIXJlc3BvbnNlLmRhdGEudGFiY29uZmlnKSxcclxuICAgICAgICBtYXAoKHJlc3BvbnNlOmFueSkgPT4gSlNPTi5wYXJzZShyZXNwb25zZS5kYXRhLnRhYmNvbmZpZykpLFxyXG4gICAgICAgIHRhcCgodGFiQ29uZmlnOiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMucGFnZXMgPSB0YWJDb25maWcubWFwKHBhZ2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGlkOiBwYWdlLmlkLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiBwYWdlLm5hbWUsXHJcbiAgICAgICAgICAgICAgcm91dGVyTGluazogJycsXHJcbiAgICAgICAgICAgICAgaWNvbjogcGFnZT8uaWNvbiA/IHBhZ2U/Lmljb24gOiAnJ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc3dpdGNoTWFwKCh0YWJDb25maWc6IGFueSkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZXMgPSB0YWJDb25maWcubWFwKHBhZ2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRBY3RpdmVWZXJzaW9uKHBhZ2UpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gZm9ya0pvaW4ob2JzZXJ2YWJsZXMpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoXyA9PiB7XHJcbiAgICAgICAgdGhpcy5zaG93VGFicyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5yb3V0ZVRvTGFuZGluZ1BhZ2UoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRBY3RpdmVWZXJzaW9uKHBhZ2UpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmdldER5bmFtaWNQYWdlKHBhZ2UuaWQpLnBpcGUoXHJcbiAgICAgIHRhcChyZXNwb25zZSA9PiB0aGlzLnNldFJvdXRldG9UYWJzKHJlc3BvbnNlWydkYXRhJ10sIHBhZ2UuaWQpKSxcclxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc2V0Um91dGV0b1RhYnMocm93czogYW55LCBwYWdlSWQpIHtcclxuICAgIHRoaXMuaXRlbXMgPSB0aGlzLnBhZ2VzXHJcbiAgLm1hcChhID0+IHtcclxuICAgIGlmIChhLmlkID09PSBwYWdlSWQgJiYgYS5yb3V0ZXJMaW5rID09PSAnJykge1xyXG4gICAgICBpZiAocm93c1swXS5wYWdldHlwZSA9PT0gJ0JHUCcpIHtcclxuICAgICAgICBhLnJvdXRlckxpbmsgPSBhLmlkID09PSByb3dzWzBdLmlkID8gYGR5bmFtaWMtc2VhcmNoLyR7cm93c1swXS5hY3RpdmVWZXJzaW9uLmlkfWAgOiAnJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhLnJvdXRlckxpbmsgPSBhLmlkID09PSByb3dzWzBdLmlkID8gYHBhZ2UvJHtwYWdlSWR9YCA6ICcnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYTsgLy8gUmV0dXJuIHRoZSBtb2RpZmllZCBpdGVtXHJcbiAgfSlcclxuICAuZmlsdGVyKHggPT4geC5yb3V0ZXJMaW5rICE9PSAnJyk7IC8vIEZpbHRlciBvdXQgaXRlbXMgd2l0aCBhbiBlbXB0eSByb3V0ZXJMaW5rXHJcblxyXG4gIH1cclxuXHJcbiAgcmVkaXJlY3QoKSB7XHJcbiAgICBjb25zdCBpZCA9IHRoaXMubG9jYWxzdG9yYWdlLmdldEl0ZW0oJ3ZlcnNpb24taWQnKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgcGFnZXMvcGFnZS1kZXNpZ24vdmVyc2lvbnMvJHtpZH1gXSk7XHJcbiAgICBjb25zdCBwYXJlbnRHcmlkUGFnZUluZm8gPSBKU09OLnBhcnNlKHRoaXMubG9jYWxzdG9yYWdlLmdldEl0ZW0oJ2JhY2tUb0dyaWRQYWdlJykpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2AvcGFnZXMvZHluYW1pYy1zZWFyY2gvc2VhcmNoLyR7cGFyZW50R3JpZFBhZ2VJbmZvLmlkfWBdLCB7IHJlbGF0aXZlVG86IHRoaXMucm91dGUgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMubG9jYWxzdG9yYWdlLnJlbW92ZUl0ZW0oJ1lvdXRoSUQnKTtcclxuICAgIHRoaXMubG9jYWxzdG9yYWdlLnJlbW92ZUl0ZW0oJ25hdmlnYXRpb25TdGF0ZScpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBvblRhYkl0ZW1DbGljayh0YWI6IGFueSkge1xyXG4gICAgdGhpcy5hY3RpdmVJdGVtID0gdGhpcy5pdGVtcy5maW5kKCh0KSA9PiB0LmlkID09PSB0YWI/LmFjdGl2ZUl0ZW0/LmlkKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgJHt0YWIuYWN0aXZlSXRlbS5yb3V0ZXJMaW5rfWBdLCB7XHJcbiAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGUsXHJcbiAgICAgIHN0YXRlOiB0aGlzLm5hdmlnYXRlRGF0YVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJyYmFjLXRhYlwiICpuZ0lmPVwic2hvd1RhYnNcIj5cclxuICA8cC10YWJNZW51XHJcbiAgICBbbW9kZWxdPVwiaXRlbXNcIlxyXG4gICAgI3RhYlxyXG4gICAgKGNsaWNrKT1cIm9uVGFiSXRlbUNsaWNrKHRhYilcIlxyXG4gICAgW3Njcm9sbGFibGVdPVwidHJ1ZVwiXHJcbiAgICBbYWN0aXZlSXRlbV09XCJhY3RpdmVJdGVtXCI+PC9wLXRhYk1lbnU+XHJcbjwvZGl2PlxyXG48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiJdfQ==