import { NgModule } from '@angular/core';
import { MasterdataComponent } from './masterdata.component';
import { PicsMasterdataModule } from './pics-masterdata/pics-masterdata.module';
import { ConfirmationService } from 'primeng/api';
import { PermissionStore } from './pics-masterdata/@core/permissions/permission.store';
import { AlertService } from './pics-masterdata/@core/service/alert.service';
import { DataStoreService } from './pics-masterdata/@core/service/data-store.service';
import { RbacService } from './pics-masterdata/@core/service/rbac.service';
import * as i0 from "@angular/core";
export class MasterdataModule {
}
MasterdataModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MasterdataModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MasterdataModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MasterdataModule, declarations: [MasterdataComponent], imports: [PicsMasterdataModule], exports: [MasterdataComponent] });
MasterdataModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MasterdataModule, providers: [RbacService, AlertService, ConfirmationService, PermissionStore, DataStoreService], imports: [[
            PicsMasterdataModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MasterdataModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MasterdataComponent
                    ],
                    imports: [
                        PicsMasterdataModule
                    ],
                    exports: [
                        MasterdataComponent
                    ],
                    providers: [RbacService, AlertService, ConfirmationService, PermissionStore, DataStoreService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyZGF0YS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvbWFzdGVyZGF0YS9zcmMvbGliL21hc3RlcmRhdGEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDaEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUN2RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDdEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOztBQWdCM0UsTUFBTSxPQUFPLGdCQUFnQjs7OEdBQWhCLGdCQUFnQjsrR0FBaEIsZ0JBQWdCLGlCQVZ6QixtQkFBbUIsYUFHbkIsb0JBQW9CLGFBR3BCLG1CQUFtQjsrR0FJVixnQkFBZ0IsYUFGaEIsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQyxZQU5yRjtZQUNQLG9CQUFvQjtTQUNyQjs0RkFNVSxnQkFBZ0I7a0JBWjVCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLG1CQUFtQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG1CQUFtQjtxQkFDcEI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7aUJBQy9GIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWFzdGVyZGF0YUNvbXBvbmVudCB9IGZyb20gJy4vbWFzdGVyZGF0YS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQaWNzTWFzdGVyZGF0YU1vZHVsZSB9IGZyb20gJy4vcGljcy1tYXN0ZXJkYXRhL3BpY3MtbWFzdGVyZGF0YS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25TZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uU3RvcmUgfSBmcm9tICcuL3BpY3MtbWFzdGVyZGF0YS9AY29yZS9wZXJtaXNzaW9ucy9wZXJtaXNzaW9uLnN0b3JlJztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLW1hc3RlcmRhdGEvQGNvcmUvc2VydmljZS9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4vcGljcy1tYXN0ZXJkYXRhL0Bjb3JlL3NlcnZpY2UvZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmJhY1NlcnZpY2UgfSBmcm9tICcuL3BpY3MtbWFzdGVyZGF0YS9AY29yZS9zZXJ2aWNlL3JiYWMuc2VydmljZSc7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBNYXN0ZXJkYXRhQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBQaWNzTWFzdGVyZGF0YU1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTWFzdGVyZGF0YUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbUmJhY1NlcnZpY2UsIEFsZXJ0U2VydmljZSwgQ29uZmlybWF0aW9uU2VydmljZSwgUGVybWlzc2lvblN0b3JlLCBEYXRhU3RvcmVTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFzdGVyZGF0YU1vZHVsZSB7IH1cclxuIl19