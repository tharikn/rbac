import { Component, Input } from '@angular/core';
import { RBACINFO } from './pics-rbac-org/organization/organization.component';
import * as i0 from "@angular/core";
import * as i1 from "./pics-rbac-org/organization/organization.component";
export class RbacOrgComponent {
    RBACORG = new RBACINFO();
    PERMISSION;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacOrgComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: RbacOrgComponent, selector: "rbac-org", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION" }, ngImport: i0, template: `
    <cardi-organization [RBACORG]="RBACORG" [PERMISSION]="PERMISSION"></cardi-organization>
  `, isInline: true, dependencies: [{ kind: "component", type: i1.OrganizationComponent, selector: "cardi-organization", inputs: ["RBACORG", "PERMISSION"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacOrgComponent, decorators: [{
            type: Component,
            args: [{ selector: 'rbac-org', template: `
    <cardi-organization [RBACORG]="RBACORG" [PERMISSION]="PERMISSION"></cardi-organization>
  ` }]
        }], propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy1vcmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3JiYWMtb3JnL3NyYy9saWIvcmJhYy1vcmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7O0FBVS9FLE1BQU0sT0FBTyxnQkFBZ0I7SUFDWCxPQUFPLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztJQUNuQyxVQUFVLENBQU07d0dBRnJCLGdCQUFnQjs0RkFBaEIsZ0JBQWdCLDBHQU5qQjs7R0FFVDs7NEZBSVUsZ0JBQWdCO2tCQVI1QixTQUFTOytCQUNFLFVBQVUsWUFDVjs7R0FFVDs4QkFLZSxPQUFPO3NCQUF0QixLQUFLO2dCQUNVLFVBQVU7c0JBQXpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUkJBQ0lORk8gfSBmcm9tICcuL3BpY3MtcmJhYy1vcmcvb3JnYW5pemF0aW9uL29yZ2FuaXphdGlvbi5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdyYmFjLW9yZycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxjYXJkaS1vcmdhbml6YXRpb24gW1JCQUNPUkddPVwiUkJBQ09SR1wiIFtQRVJNSVNTSU9OXT1cIlBFUk1JU1NJT05cIj48L2NhcmRpLW9yZ2FuaXphdGlvbj5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJiYWNPcmdDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBSQkFDT1JHOiBSQkFDSU5GTyA9IG5ldyBSQkFDSU5GTygpO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBQRVJNSVNTSU9OOiBhbnk7XHJcbn1cclxuIl19