import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionsComponent } from './permissions/permissions.component';
// import { HttpClientModule } from '@angular/common/http';
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
import { MatRadioModule } from '@angular/material/radio';
import * as i0 from "@angular/core";
export class PicsRbacPermissionsModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsRbacPermissionsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: PicsRbacPermissionsModule, declarations: [PermissionsComponent], imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NgbModule,
            TabMenuModule,
            TabViewModule,
            TreeSelectModule,
            // HttpClientModule,
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
            AlertModule,
            MatRadioModule], exports: [PermissionsComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsRbacPermissionsModule, imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NgbModule,
            TabMenuModule,
            TabViewModule,
            TreeSelectModule,
            // HttpClientModule,
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
            AlertModule,
            MatRadioModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsRbacPermissionsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PermissionsComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgbModule,
                        TabMenuModule,
                        TabViewModule,
                        TreeSelectModule,
                        // HttpClientModule,
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
                        AlertModule,
                        MatRadioModule
                    ],
                    exports: [
                        PermissionsComponent
                    ],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljcy1yYmFjLXBlcm1pc3Npb25zLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9yYmFjLXBlcm1pc3Npb25zL3NyYy9saWIvcGljcy1yYmFjLXBlcm1pc3Npb25zL3BpY3MtcmJhYy1wZXJtaXNzaW9ucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsMkRBQTJEO0FBQzNELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFF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Qjt3QkFDakIscUJBQXFCO3dCQUNyQixlQUFlO3dCQUNmLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixZQUFZO3dCQUNaLGNBQWM7d0JBQ2QsVUFBVTt3QkFDVixhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQixnQkFBZ0I7d0JBQ2hCLFdBQVc7d0JBQ1gsY0FBYztxQkFDZjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asb0JBQW9CO3FCQUNyQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxzQkFBc0IsQ0FBQztpQkFDcEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOT19FUlJPUlNfU0NIRU1BLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uc0NvbXBvbmVudCB9IGZyb20gJy4vcGVybWlzc2lvbnMvcGVybWlzc2lvbnMuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgQWNjb3JkaW9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9hY2NvcmRpb24nO1xyXG5pbXBvcnQgeyBBdmF0YXJNb2R1bGUgfSBmcm9tICdwcmltZW5nL2F2YXRhcic7XHJcbmltcG9ydCB7IEJhZGdlTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9iYWRnZSc7XHJcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYnV0dG9uJztcclxuaW1wb3J0IHsgQ2FsZW5kYXJNb2R1bGUgfSBmcm9tICdwcmltZW5nL2NhbGVuZGFyJztcclxuaW1wb3J0IHsgQ2FyZE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvY2FyZCc7XHJcbmltcG9ydCB7IENoZWNrYm94TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9jaGVja2JveCc7XHJcbmltcG9ydCB7IENvbmZpcm1EaWFsb2dNb2R1bGUgfSBmcm9tICdwcmltZW5nL2NvbmZpcm1kaWFsb2cnO1xyXG5pbXBvcnQgeyBDb25maXJtUG9wdXBNb2R1bGUgfSBmcm9tICdwcmltZW5nL2NvbmZpcm1wb3B1cCc7XHJcbmltcG9ydCB7IENvbnRleHRNZW51TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9jb250ZXh0bWVudSc7XHJcbmltcG9ydCB7IERpYWxvZ01vZHVsZSB9IGZyb20gJ3ByaW1lbmcvZGlhbG9nJztcclxuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL2Ryb3Bkb3duJztcclxuaW1wb3J0IHsgRWRpdG9yTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9lZGl0b3InO1xyXG5pbXBvcnQgeyBGaWVsZHNldE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvZmllbGRzZXQnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9maWxldXBsb2FkJztcclxuaW1wb3J0IHsgSW5wdXRNYXNrTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9pbnB1dG1hc2snO1xyXG5pbXBvcnQgeyBJbnB1dFN3aXRjaE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvaW5wdXRzd2l0Y2gnO1xyXG5pbXBvcnQgeyBJbnB1dFRleHRNb2R1bGUgfSBmcm9tICdwcmltZW5nL2lucHV0dGV4dCc7XHJcbmltcG9ydCB7IElucHV0VGV4dGFyZWFNb2R1bGUgfSBmcm9tICdwcmltZW5nL2lucHV0dGV4dGFyZWEnO1xyXG5pbXBvcnQgeyBLbm9iTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9rbm9iJztcclxuaW1wb3J0IHsgTWVzc2FnZU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvbWVzc2FnZSc7XHJcbmltcG9ydCB7IE11bHRpU2VsZWN0TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9tdWx0aXNlbGVjdCc7XHJcbmltcG9ydCB7IE9yZGVyTGlzdE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvb3JkZXJsaXN0JztcclxuaW1wb3J0IHsgUGFzc3dvcmRNb2R1bGUgfSBmcm9tICdwcmltZW5nL3Bhc3N3b3JkJztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NTcGlubmVyTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcm9ncmVzc3NwaW5uZXInO1xyXG5pbXBvcnQgeyBSYWRpb0J1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcmFkaW9idXR0b24nO1xyXG5pbXBvcnQgeyBSaXBwbGVNb2R1bGUgfSBmcm9tICdwcmltZW5nL3JpcHBsZSc7XHJcbmltcG9ydCB7IFNpZGViYXJNb2R1bGUgfSBmcm9tICdwcmltZW5nL3NpZGViYXInO1xyXG5pbXBvcnQgeyBTcGVlZERpYWxNb2R1bGUgfSBmcm9tICdwcmltZW5nL3NwZWVkZGlhbCc7XHJcbmltcG9ydCB7IFN0ZXBzTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9zdGVwcyc7XHJcbmltcG9ydCB7IFRhYmxlTW9kdWxlIH0gZnJvbSAncHJpbWVuZy90YWJsZSc7XHJcbmltcG9ydCB7IFRhYk1lbnVNb2R1bGUgfSBmcm9tICdwcmltZW5nL3RhYm1lbnUnO1xyXG5pbXBvcnQgeyBUYWJWaWV3TW9kdWxlIH0gZnJvbSAncHJpbWVuZy90YWJ2aWV3JztcclxuaW1wb3J0IHsgVG9hc3RNb2R1bGUgfSBmcm9tICdwcmltZW5nL3RvYXN0JztcclxuaW1wb3J0IHsgVHJlZVNlbGVjdE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvdHJlZXNlbGVjdCc7XHJcbmltcG9ydCB7IERpcmVjdGl2ZXNNb2R1bGUgfSBmcm9tICcuL0Bjb3JlL2RpcmVjdGl2ZXMvZGlyZWN0aXZlcy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBBbGVydE1vZHVsZSB9IGZyb20gJy4vQHNoYXJlZC9hbGVydC9hbGVydC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNYXRSYWRpb01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFBlcm1pc3Npb25zQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBOZ2JNb2R1bGUsXHJcbiAgICBUYWJNZW51TW9kdWxlLFxyXG4gICAgVGFiVmlld01vZHVsZSxcclxuICAgIFRyZWVTZWxlY3RNb2R1bGUsXHJcbiAgICAvLyBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgQ2hlY2tib3hNb2R1bGUsXHJcbiAgICBEcm9wZG93bk1vZHVsZSxcclxuICAgIENhcmRNb2R1bGUsXHJcbiAgICBDb25maXJtRGlhbG9nTW9kdWxlLFxyXG4gICAgQWNjb3JkaW9uTW9kdWxlLFxyXG4gICAgTWVzc2FnZU1vZHVsZSxcclxuICAgIFRhYmxlTW9kdWxlLFxyXG4gICAgSW5wdXRUZXh0TW9kdWxlLFxyXG4gICAgQ2FsZW5kYXJNb2R1bGUsXHJcbiAgICBFZGl0b3JNb2R1bGUsXHJcbiAgICBGaWVsZHNldE1vZHVsZSxcclxuICAgIEJ1dHRvbk1vZHVsZSxcclxuICAgIFJhZGlvQnV0dG9uTW9kdWxlLFxyXG4gICAgSW5wdXRUZXh0YXJlYU1vZHVsZSxcclxuICAgIElucHV0TWFza01vZHVsZSxcclxuICAgIFN0ZXBzTW9kdWxlLFxyXG4gICAgVG9hc3RNb2R1bGUsXHJcbiAgICBSaXBwbGVNb2R1bGUsXHJcbiAgICBBdmF0YXJNb2R1bGUsXHJcbiAgICBCYWRnZU1vZHVsZSxcclxuICAgIE11bHRpU2VsZWN0TW9kdWxlLFxyXG4gICAgSW5wdXRTd2l0Y2hNb2R1bGUsXHJcbiAgICBQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXHJcbiAgICBTcGVlZERpYWxNb2R1bGUsXHJcbiAgICBPcmRlckxpc3RNb2R1bGUsXHJcbiAgICBGaWxlVXBsb2FkTW9kdWxlLFxyXG4gICAgRGlhbG9nTW9kdWxlLFxyXG4gICAgUGFzc3dvcmRNb2R1bGUsXHJcbiAgICBLbm9iTW9kdWxlLFxyXG4gICAgU2lkZWJhck1vZHVsZSxcclxuICAgIENvbnRleHRNZW51TW9kdWxlLFxyXG4gICAgQ29uZmlybVBvcHVwTW9kdWxlLFxyXG4gICAgRGlyZWN0aXZlc01vZHVsZSxcclxuICAgIEFsZXJ0TW9kdWxlLFxyXG4gICAgTWF0UmFkaW9Nb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFBlcm1pc3Npb25zQ29tcG9uZW50XHJcbiAgXSxcclxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBpY3NSYmFjUGVybWlzc2lvbnNNb2R1bGUgeyB9XHJcbiJdfQ==