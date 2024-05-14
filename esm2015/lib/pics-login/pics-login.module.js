import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KnobModule } from 'primeng/knob';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { SpeedDialModule } from 'primeng/speeddial';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { TreeSelectModule } from 'primeng/treeselect';
import { DirectivesModule } from './@core/directives/directives.module';
import { AlertModule } from './@shared/alert/alert.module';
import * as i0 from "@angular/core";
export class PicsLoginModule {
}
PicsLoginModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsLoginModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PicsLoginModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsLoginModule, declarations: [LoginComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        TabMenuModule,
        TabViewModule,
        TreeSelectModule,
        HttpClientModule,
        CheckboxModule,
        DropdownModule,
        CardModule,
        ConfirmDialogModule,
        AccordionModule,
        MessageModule,
        TableModule,
        InputTextModule,
        CalendarModule,
        EditorModule,
        FieldsetModule,
        ButtonModule,
        RadioButtonModule,
        InputTextareaModule,
        InputMaskModule,
        StepsModule,
        ToastModule,
        RippleModule,
        AvatarModule,
        BadgeModule,
        MultiSelectModule,
        InputSwitchModule,
        ProgressSpinnerModule,
        SpeedDialModule,
        OrderListModule,
        FileUploadModule,
        DialogModule,
        PasswordModule,
        KnobModule,
        SidebarModule,
        ContextMenuModule,
        ConfirmPopupModule,
        DirectivesModule,
        AlertModule], exports: [LoginComponent] });
PicsLoginModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsLoginModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NgbModule,
            TabMenuModule,
            TabViewModule,
            TreeSelectModule,
            HttpClientModule,
            CheckboxModule,
            DropdownModule,
            CardModule,
            ConfirmDialogModule,
            AccordionModule,
            MessageModule,
            TableModule,
            InputTextModule,
            CalendarModule,
            EditorModule,
            FieldsetModule,
            ButtonModule,
            RadioButtonModule,
            InputTextareaModule,
            InputMaskModule,
            StepsModule,
            ToastModule,
            RippleModule,
            AvatarModule,
            BadgeModule,
            MultiSelectModule,
            InputSwitchModule,
            ProgressSpinnerModule,
            SpeedDialModule,
            OrderListModule,
            FileUploadModule,
            DialogModule,
            PasswordModule,
            KnobModule,
            SidebarModule,
            ContextMenuModule,
            ConfirmPopupModule,
            DirectivesModule,
            AlertModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsLoginModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LoginComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgbModule,
                        TabMenuModule,
                        TabViewModule,
                        TreeSelectModule,
                        HttpClientModule,
                        CheckboxModule,
                        DropdownModule,
                        CardModule,
                        ConfirmDialogModule,
                        AccordionModule,
                        MessageModule,
                        TableModule,
                        InputTextModule,
                        CalendarModule,
                        EditorModule,
                        FieldsetModule,
                        ButtonModule,
                        RadioButtonModule,
                        InputTextareaModule,
                        InputMaskModule,
                        StepsModule,
                        ToastModule,
                        RippleModule,
                        AvatarModule,
                        BadgeModule,
                        MultiSelectModule,
                        InputSwitchModule,
                        ProgressSpinnerModule,
                        SpeedDialModule,
                        OrderListModule,
                        FileUploadModule,
                        DialogModule,
                        PasswordModule,
                        KnobModule,
                        SidebarModule,
                        ContextMenuModule,
                        ConfirmPopupModule,
                        DirectivesModule,
                        AlertModule
                    ],
                    exports: [
                        LoginComponent
                    ],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljcy1sb2dpbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvbG9naW4vc3JjL2xpYi9waWNzLWxvZ2luL3BpY3MtbG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBeUQzRCxNQUFNLE9BQU8sZUFBZTs7NkdBQWYsZUFBZTs4R0FBZixlQUFlLGlCQW5EeEIsY0FBYyxhQUdkLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLFNBQVM7UUFDVCxhQUFhO1FBQ2IsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGNBQWM7UUFDZCxVQUFVO1FBQ1YsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixhQUFhO1FBQ2IsV0FBVztRQUNYLGVBQWU7UUFDZixjQUFjO1FBQ2QsWUFBWTtRQUNaLGNBQWM7UUFDZCxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsV0FBVztRQUNYLFdBQVc7UUFDWCxZQUFZO1FBQ1osWUFBWTtRQUNaLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQixlQUFlO1FBQ2YsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osY0FBYztRQUNkLFVBQVU7UUFDVixhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsV0FBVyxhQUdYLGNBQWM7OEdBSUwsZUFBZSxZQWpEakI7WUFDUCxZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtZQUNuQixTQUFTO1lBQ1QsYUFBYTtZQUNiLGFBQWE7WUFDYixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCxjQUFjO1lBQ2QsVUFBVTtZQUNWLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2YsYUFBYTtZQUNiLFdBQVc7WUFDWCxlQUFlO1lBQ2YsY0FBYztZQUNkLFlBQVk7WUFDWixjQUFjO1lBQ2QsWUFBWTtZQUNaLGlCQUFpQjtZQUNqQixtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLFdBQVc7WUFDWCxXQUFXO1lBQ1gsWUFBWTtZQUNaLFlBQVk7WUFDWixXQUFXO1lBQ1gsaUJBQWlCO1lBQ2pCLGlCQUFpQjtZQUNqQixxQkFBcUI7WUFDckIsZUFBZTtZQUNmLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsWUFBWTtZQUNaLGNBQWM7WUFDZCxVQUFVO1lBQ1YsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixrQkFBa0I7WUFDbEIsZ0JBQWdCO1lBQ2hCLFdBQVc7U0FDWjs0RkFNVSxlQUFlO2tCQXJEM0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osY0FBYztxQkFDZjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsU0FBUzt3QkFDVCxhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixnQkFBZ0I7d0JBQ2hCLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxVQUFVO3dCQUNWLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixhQUFhO3dCQUNiLFdBQVc7d0JBQ1gsZUFBZTt3QkFDZixjQUFjO3dCQUNkLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxZQUFZO3dCQUNaLGlCQUFpQjt3QkFDakIsbUJBQW1CO3dCQUNuQixlQUFlO3dCQUNmLFdBQVc7d0JBQ1gsV0FBVzt3QkFDWCxZQUFZO3dCQUNaLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIscUJBQXFCO3dCQUNyQixlQUFlO3dCQUNmLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixZQUFZO3dCQUNaLGNBQWM7d0JBQ2QsVUFBVTt3QkFDVixhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQixnQkFBZ0I7d0JBQ2hCLFdBQVc7cUJBQ1o7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGNBQWM7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsc0JBQXNCLENBQUM7aUJBQ3BEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTk9fRVJST1JTX1NDSEVNQSwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEFjY29yZGlvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYWNjb3JkaW9uJztcclxuaW1wb3J0IHsgQXZhdGFyTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9hdmF0YXInO1xyXG5pbXBvcnQgeyBCYWRnZU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYmFkZ2UnO1xyXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL2J1dHRvbic7XHJcbmltcG9ydCB7IENhbGVuZGFyTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9jYWxlbmRhcic7XHJcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICdwcmltZW5nL2NhcmQnO1xyXG5pbXBvcnQgeyBDaGVja2JveE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvY2hlY2tib3gnO1xyXG5pbXBvcnQgeyBDb25maXJtRGlhbG9nTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9jb25maXJtZGlhbG9nJztcclxuaW1wb3J0IHsgQ29uZmlybVBvcHVwTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9jb25maXJtcG9wdXAnO1xyXG5pbXBvcnQgeyBDb250ZXh0TWVudU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvY29udGV4dG1lbnUnO1xyXG5pbXBvcnQgeyBEaWFsb2dNb2R1bGUgfSBmcm9tICdwcmltZW5nL2RpYWxvZyc7XHJcbmltcG9ydCB7IERyb3Bkb3duTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9kcm9wZG93bic7XHJcbmltcG9ydCB7IEVkaXRvck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvZWRpdG9yJztcclxuaW1wb3J0IHsgRmllbGRzZXRNb2R1bGUgfSBmcm9tICdwcmltZW5nL2ZpZWxkc2V0JztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvZmlsZXVwbG9hZCc7XHJcbmltcG9ydCB7IElucHV0TWFza01vZHVsZSB9IGZyb20gJ3ByaW1lbmcvaW5wdXRtYXNrJztcclxuaW1wb3J0IHsgSW5wdXRTd2l0Y2hNb2R1bGUgfSBmcm9tICdwcmltZW5nL2lucHV0c3dpdGNoJztcclxuaW1wb3J0IHsgSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9pbnB1dHRleHQnO1xyXG5pbXBvcnQgeyBJbnB1dFRleHRhcmVhTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9pbnB1dHRleHRhcmVhJztcclxuaW1wb3J0IHsgS25vYk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcva25vYic7XHJcbmltcG9ydCB7IE1lc3NhZ2VNb2R1bGUgfSBmcm9tICdwcmltZW5nL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBNdWx0aVNlbGVjdE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvbXVsdGlzZWxlY3QnO1xyXG5pbXBvcnQgeyBPcmRlckxpc3RNb2R1bGUgfSBmcm9tICdwcmltZW5nL29yZGVybGlzdCc7XHJcbmltcG9ydCB7IFBhc3N3b3JkTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wYXNzd29yZCc7XHJcbmltcG9ydCB7IFByb2dyZXNzU3Bpbm5lck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJvZ3Jlc3NzcGlubmVyJztcclxuaW1wb3J0IHsgUmFkaW9CdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL3JhZGlvYnV0dG9uJztcclxuaW1wb3J0IHsgUmlwcGxlTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9yaXBwbGUnO1xyXG5pbXBvcnQgeyBTaWRlYmFyTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9zaWRlYmFyJztcclxuaW1wb3J0IHsgU3BlZWREaWFsTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9zcGVlZGRpYWwnO1xyXG5pbXBvcnQgeyBTdGVwc01vZHVsZSB9IGZyb20gJ3ByaW1lbmcvc3RlcHMnO1xyXG5pbXBvcnQgeyBUYWJsZU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvdGFibGUnO1xyXG5pbXBvcnQgeyBUYWJNZW51TW9kdWxlIH0gZnJvbSAncHJpbWVuZy90YWJtZW51JztcclxuaW1wb3J0IHsgVGFiVmlld01vZHVsZSB9IGZyb20gJ3ByaW1lbmcvdGFidmlldyc7XHJcbmltcG9ydCB7IFRvYXN0TW9kdWxlIH0gZnJvbSAncHJpbWVuZy90b2FzdCc7XHJcbmltcG9ydCB7IFRyZWVTZWxlY3RNb2R1bGUgfSBmcm9tICdwcmltZW5nL3RyZWVzZWxlY3QnO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmVzTW9kdWxlIH0gZnJvbSAnLi9AY29yZS9kaXJlY3RpdmVzL2RpcmVjdGl2ZXMubW9kdWxlJztcclxuaW1wb3J0IHsgQWxlcnRNb2R1bGUgfSBmcm9tICcuL0BzaGFyZWQvYWxlcnQvYWxlcnQubW9kdWxlJztcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIExvZ2luQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBOZ2JNb2R1bGUsXHJcbiAgICBUYWJNZW51TW9kdWxlLFxyXG4gICAgVGFiVmlld01vZHVsZSxcclxuICAgIFRyZWVTZWxlY3RNb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgQ2hlY2tib3hNb2R1bGUsXHJcbiAgICBEcm9wZG93bk1vZHVsZSxcclxuICAgIENhcmRNb2R1bGUsXHJcbiAgICBDb25maXJtRGlhbG9nTW9kdWxlLFxyXG4gICAgQWNjb3JkaW9uTW9kdWxlLFxyXG4gICAgTWVzc2FnZU1vZHVsZSxcclxuICAgIFRhYmxlTW9kdWxlLFxyXG4gICAgSW5wdXRUZXh0TW9kdWxlLFxyXG4gICAgQ2FsZW5kYXJNb2R1bGUsXHJcbiAgICBFZGl0b3JNb2R1bGUsXHJcbiAgICBGaWVsZHNldE1vZHVsZSxcclxuICAgIEJ1dHRvbk1vZHVsZSxcclxuICAgIFJhZGlvQnV0dG9uTW9kdWxlLFxyXG4gICAgSW5wdXRUZXh0YXJlYU1vZHVsZSxcclxuICAgIElucHV0TWFza01vZHVsZSxcclxuICAgIFN0ZXBzTW9kdWxlLFxyXG4gICAgVG9hc3RNb2R1bGUsXHJcbiAgICBSaXBwbGVNb2R1bGUsXHJcbiAgICBBdmF0YXJNb2R1bGUsXHJcbiAgICBCYWRnZU1vZHVsZSxcclxuICAgIE11bHRpU2VsZWN0TW9kdWxlLFxyXG4gICAgSW5wdXRTd2l0Y2hNb2R1bGUsXHJcbiAgICBQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXHJcbiAgICBTcGVlZERpYWxNb2R1bGUsXHJcbiAgICBPcmRlckxpc3RNb2R1bGUsXHJcbiAgICBGaWxlVXBsb2FkTW9kdWxlLFxyXG4gICAgRGlhbG9nTW9kdWxlLFxyXG4gICAgUGFzc3dvcmRNb2R1bGUsXHJcbiAgICBLbm9iTW9kdWxlLFxyXG4gICAgU2lkZWJhck1vZHVsZSxcclxuICAgIENvbnRleHRNZW51TW9kdWxlLFxyXG4gICAgQ29uZmlybVBvcHVwTW9kdWxlLFxyXG4gICAgRGlyZWN0aXZlc01vZHVsZSxcclxuICAgIEFsZXJ0TW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBMb2dpbkNvbXBvbmVudFxyXG4gIF0sXHJcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUEsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUFdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGljc0xvZ2luTW9kdWxlIHsgfVxyXG4iXX0=