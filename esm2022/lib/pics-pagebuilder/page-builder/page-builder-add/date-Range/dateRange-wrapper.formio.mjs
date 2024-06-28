import { registerCustomFormioComponent } from '@formio/angular';
import { DateRangeWrapperComponent } from './dateRange-wrapper.component';
const COMPONENT_OPTIONS = {
    type: 'dateWithRange',
    selector: 'date-angular',
    title: 'Date Range Angular',
    group: 'advanced',
    icon: 'calendar',
    editForm: minimalEditForm,
    fieldOptions: ['startDateKey', 'endDateKey'],
    schema: {
        validate: {
            required: true
        }
    }
};
export function minimalEditForm() {
    return {
        components: [
            { key: 'type', type: 'hidden' },
            {
                weight: 0,
                type: 'textfield',
                input: true,
                key: 'label',
                label: 'Label',
                placeholder: 'Label',
                validate: {
                    required: true
                }
            },
            {
                weight: 10,
                type: 'textfield',
                input: true,
                key: 'key',
                label: 'API Key',
                placeholder: 'Field Code',
                tooltip: 'The code/key/ID/name of the field.',
                validate: {
                    required: true,
                    maxLength: 128,
                    pattern: '[A-Za-z]\\w*',
                    patternMessage: 'The property name must only contain alphanumeric characters, underscores and should only be started by any letter character.'
                }
            },
            {
                weight: 20,
                type: 'textfield',
                input: true,
                key: 'startDateKey',
                label: 'Start Date Key',
                placeholder: 'Start Date Key',
                tooltip: 'The code/key/ID/name of the start date.',
                validate: {
                    required: true,
                    maxLength: 128,
                    pattern: '[A-Za-z]\\w*',
                    patternMessage: 'The property name must only contain alphanumeric characters, underscores and should only be started by any letter character.'
                }
            },
            {
                weight: 30,
                type: 'textfield',
                input: true,
                key: 'endDateKey',
                label: 'End Date Key',
                placeholder: 'End Date Key',
                tooltip: 'The code/key/ID/name of the end date.',
                validate: {
                    required: true,
                    maxLength: 128,
                    pattern: '[A-Za-z]\\w*',
                    patternMessage: 'The property name must only contain alphanumeric characters, underscores and should only be started by any letter character.'
                }
            },
            {
                weight: 413,
                type: 'checkbox',
                input: true,
                key: 'validate.required',
                label: 'Required'
            }
        ]
    };
}
export function registerDateRangeComponent(injector) {
    console.log('registerDateRangeComponent called...');
    try {
        registerCustomFormioComponent(COMPONENT_OPTIONS, DateRangeWrapperComponent, injector);
        console.log('registerDateRangeComponent complete...');
    }
    catch (err) {
        console.error('error occ in registercomp', err);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZVJhbmdlLXdyYXBwZXIuZm9ybWlvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvcGFnZS1idWlsZGVyL3NyYy9saWIvcGljcy1wYWdlYnVpbGRlci9wYWdlLWJ1aWxkZXIvcGFnZS1idWlsZGVyLWFkZC9kYXRlLVJhbmdlL2RhdGVSYW5nZS13cmFwcGVyLmZvcm1pby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQTZCLDZCQUE2QixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0YsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFMUUsTUFBTSxpQkFBaUIsR0FBOEI7SUFDbkQsSUFBSSxFQUFFLGVBQWU7SUFDckIsUUFBUSxFQUFFLGNBQWM7SUFDeEIsS0FBSyxFQUFFLG9CQUFvQjtJQUMzQixLQUFLLEVBQUUsVUFBVTtJQUNqQixJQUFJLEVBQUUsVUFBVTtJQUNoQixRQUFRLEVBQUUsZUFBZTtJQUN6QixZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDO0lBQzVDLE1BQU0sRUFBRTtRQUNOLFFBQVEsRUFBRTtZQUNSLFFBQVEsRUFBRSxJQUFJO1NBQ2Y7S0FDRjtDQUNGLENBQUM7QUFFRixNQUFNLFVBQVUsZUFBZTtJQUM3QixPQUFPO1FBQ0wsVUFBVSxFQUFFO1lBQ1YsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7WUFDL0I7Z0JBQ0UsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLEtBQUssRUFBRSxJQUFJO2dCQUNYLEdBQUcsRUFBRSxPQUFPO2dCQUNaLEtBQUssRUFBRSxPQUFPO2dCQUNkLFdBQVcsRUFBRSxPQUFPO2dCQUNwQixRQUFRLEVBQUU7b0JBQ1IsUUFBUSxFQUFFLElBQUk7aUJBQ2Y7YUFDRjtZQUNEO2dCQUNFLE1BQU0sRUFBRSxFQUFFO2dCQUNWLElBQUksRUFBRSxXQUFXO2dCQUNqQixLQUFLLEVBQUUsSUFBSTtnQkFDWCxHQUFHLEVBQUUsS0FBSztnQkFDVixLQUFLLEVBQUUsU0FBUztnQkFDaEIsV0FBVyxFQUFFLFlBQVk7Z0JBQ3pCLE9BQU8sRUFBRSxvQ0FBb0M7Z0JBQzdDLFFBQVEsRUFBRTtvQkFDUixRQUFRLEVBQUUsSUFBSTtvQkFDZCxTQUFTLEVBQUUsR0FBRztvQkFDZCxPQUFPLEVBQUUsY0FBYztvQkFDdkIsY0FBYyxFQUNaLDhIQUE4SDtpQkFDakk7YUFDRjtZQUNEO2dCQUNFLE1BQU0sRUFBRSxFQUFFO2dCQUNWLElBQUksRUFBRSxXQUFXO2dCQUNqQixLQUFLLEVBQUUsSUFBSTtnQkFDWCxHQUFHLEVBQUUsY0FBYztnQkFDbkIsS0FBSyxFQUFFLGdCQUFnQjtnQkFDdkIsV0FBVyxFQUFFLGdCQUFnQjtnQkFDN0IsT0FBTyxFQUFFLHlDQUF5QztnQkFDbEQsUUFBUSxFQUFFO29CQUNSLFFBQVEsRUFBRSxJQUFJO29CQUNkLFNBQVMsRUFBRSxHQUFHO29CQUNkLE9BQU8sRUFBRSxjQUFjO29CQUN2QixjQUFjLEVBQ1osOEhBQThIO2lCQUNqSTthQUNGO1lBQ0Q7Z0JBQ0UsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLEtBQUssRUFBRSxJQUFJO2dCQUNYLEdBQUcsRUFBRSxZQUFZO2dCQUNqQixLQUFLLEVBQUUsY0FBYztnQkFDckIsV0FBVyxFQUFFLGNBQWM7Z0JBQzNCLE9BQU8sRUFBRSx1Q0FBdUM7Z0JBQ2hELFFBQVEsRUFBRTtvQkFDUixRQUFRLEVBQUUsSUFBSTtvQkFDZCxTQUFTLEVBQUUsR0FBRztvQkFDZCxPQUFPLEVBQUUsY0FBYztvQkFDdkIsY0FBYyxFQUNaLDhIQUE4SDtpQkFDakk7YUFDRjtZQUNEO2dCQUNFLE1BQU0sRUFBRSxHQUFHO2dCQUNYLElBQUksRUFBRSxVQUFVO2dCQUNoQixLQUFLLEVBQUUsSUFBSTtnQkFDWCxHQUFHLEVBQUUsbUJBQW1CO2dCQUN4QixLQUFLLEVBQUUsVUFBVTthQUNsQjtTQUNGO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsMEJBQTBCLENBQUMsUUFBa0I7SUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0lBQ3BELElBQUk7UUFDRiw2QkFBNkIsQ0FBQyxpQkFBaUIsRUFBRSx5QkFBeUIsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN0RixPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7S0FDdkQ7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDakQ7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWlvQ3VzdG9tQ29tcG9uZW50SW5mbywgcmVnaXN0ZXJDdXN0b21Gb3JtaW9Db21wb25lbnQgfSBmcm9tICdAZm9ybWlvL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBEYXRlUmFuZ2VXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlUmFuZ2Utd3JhcHBlci5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UX09QVElPTlM6IEZvcm1pb0N1c3RvbUNvbXBvbmVudEluZm8gPSB7XHJcbiAgdHlwZTogJ2RhdGVXaXRoUmFuZ2UnLFxyXG4gIHNlbGVjdG9yOiAnZGF0ZS1hbmd1bGFyJyxcclxuICB0aXRsZTogJ0RhdGUgUmFuZ2UgQW5ndWxhcicsXHJcbiAgZ3JvdXA6ICdhZHZhbmNlZCcsXHJcbiAgaWNvbjogJ2NhbGVuZGFyJyxcclxuICBlZGl0Rm9ybTogbWluaW1hbEVkaXRGb3JtLFxyXG4gIGZpZWxkT3B0aW9uczogWydzdGFydERhdGVLZXknLCAnZW5kRGF0ZUtleSddLFxyXG4gIHNjaGVtYToge1xyXG4gICAgdmFsaWRhdGU6IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWluaW1hbEVkaXRGb3JtKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBjb21wb25lbnRzOiBbXHJcbiAgICAgIHsga2V5OiAndHlwZScsIHR5cGU6ICdoaWRkZW4nIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB3ZWlnaHQ6IDAsXHJcbiAgICAgICAgdHlwZTogJ3RleHRmaWVsZCcsXHJcbiAgICAgICAgaW5wdXQ6IHRydWUsXHJcbiAgICAgICAga2V5OiAnbGFiZWwnLFxyXG4gICAgICAgIGxhYmVsOiAnTGFiZWwnLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnTGFiZWwnLFxyXG4gICAgICAgIHZhbGlkYXRlOiB7XHJcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHdlaWdodDogMTAsXHJcbiAgICAgICAgdHlwZTogJ3RleHRmaWVsZCcsXHJcbiAgICAgICAgaW5wdXQ6IHRydWUsXHJcbiAgICAgICAga2V5OiAna2V5JyxcclxuICAgICAgICBsYWJlbDogJ0FQSSBLZXknLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRmllbGQgQ29kZScsXHJcbiAgICAgICAgdG9vbHRpcDogJ1RoZSBjb2RlL2tleS9JRC9uYW1lIG9mIHRoZSBmaWVsZC4nLFxyXG4gICAgICAgIHZhbGlkYXRlOiB7XHJcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgIG1heExlbmd0aDogMTI4LFxyXG4gICAgICAgICAgcGF0dGVybjogJ1tBLVphLXpdXFxcXHcqJyxcclxuICAgICAgICAgIHBhdHRlcm5NZXNzYWdlOlxyXG4gICAgICAgICAgICAnVGhlIHByb3BlcnR5IG5hbWUgbXVzdCBvbmx5IGNvbnRhaW4gYWxwaGFudW1lcmljIGNoYXJhY3RlcnMsIHVuZGVyc2NvcmVzIGFuZCBzaG91bGQgb25seSBiZSBzdGFydGVkIGJ5IGFueSBsZXR0ZXIgY2hhcmFjdGVyLidcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB3ZWlnaHQ6IDIwLFxyXG4gICAgICAgIHR5cGU6ICd0ZXh0ZmllbGQnLFxyXG4gICAgICAgIGlucHV0OiB0cnVlLFxyXG4gICAgICAgIGtleTogJ3N0YXJ0RGF0ZUtleScsXHJcbiAgICAgICAgbGFiZWw6ICdTdGFydCBEYXRlIEtleScsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdTdGFydCBEYXRlIEtleScsXHJcbiAgICAgICAgdG9vbHRpcDogJ1RoZSBjb2RlL2tleS9JRC9uYW1lIG9mIHRoZSBzdGFydCBkYXRlLicsXHJcbiAgICAgICAgdmFsaWRhdGU6IHtcclxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgbWF4TGVuZ3RoOiAxMjgsXHJcbiAgICAgICAgICBwYXR0ZXJuOiAnW0EtWmEtel1cXFxcdyonLFxyXG4gICAgICAgICAgcGF0dGVybk1lc3NhZ2U6XHJcbiAgICAgICAgICAgICdUaGUgcHJvcGVydHkgbmFtZSBtdXN0IG9ubHkgY29udGFpbiBhbHBoYW51bWVyaWMgY2hhcmFjdGVycywgdW5kZXJzY29yZXMgYW5kIHNob3VsZCBvbmx5IGJlIHN0YXJ0ZWQgYnkgYW55IGxldHRlciBjaGFyYWN0ZXIuJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHdlaWdodDogMzAsXHJcbiAgICAgICAgdHlwZTogJ3RleHRmaWVsZCcsXHJcbiAgICAgICAgaW5wdXQ6IHRydWUsXHJcbiAgICAgICAga2V5OiAnZW5kRGF0ZUtleScsXHJcbiAgICAgICAgbGFiZWw6ICdFbmQgRGF0ZSBLZXknLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRW5kIERhdGUgS2V5JyxcclxuICAgICAgICB0b29sdGlwOiAnVGhlIGNvZGUva2V5L0lEL25hbWUgb2YgdGhlIGVuZCBkYXRlLicsXHJcbiAgICAgICAgdmFsaWRhdGU6IHtcclxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgbWF4TGVuZ3RoOiAxMjgsXHJcbiAgICAgICAgICBwYXR0ZXJuOiAnW0EtWmEtel1cXFxcdyonLFxyXG4gICAgICAgICAgcGF0dGVybk1lc3NhZ2U6XHJcbiAgICAgICAgICAgICdUaGUgcHJvcGVydHkgbmFtZSBtdXN0IG9ubHkgY29udGFpbiBhbHBoYW51bWVyaWMgY2hhcmFjdGVycywgdW5kZXJzY29yZXMgYW5kIHNob3VsZCBvbmx5IGJlIHN0YXJ0ZWQgYnkgYW55IGxldHRlciBjaGFyYWN0ZXIuJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHdlaWdodDogNDEzLFxyXG4gICAgICAgIHR5cGU6ICdjaGVja2JveCcsXHJcbiAgICAgICAgaW5wdXQ6IHRydWUsXHJcbiAgICAgICAga2V5OiAndmFsaWRhdGUucmVxdWlyZWQnLFxyXG4gICAgICAgIGxhYmVsOiAnUmVxdWlyZWQnXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJEYXRlUmFuZ2VDb21wb25lbnQoaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgY29uc29sZS5sb2coJ3JlZ2lzdGVyRGF0ZVJhbmdlQ29tcG9uZW50IGNhbGxlZC4uLicpO1xyXG4gIHRyeSB7XHJcbiAgICByZWdpc3RlckN1c3RvbUZvcm1pb0NvbXBvbmVudChDT01QT05FTlRfT1BUSU9OUywgRGF0ZVJhbmdlV3JhcHBlckNvbXBvbmVudCwgaW5qZWN0b3IpO1xyXG4gICAgY29uc29sZS5sb2coJ3JlZ2lzdGVyRGF0ZVJhbmdlQ29tcG9uZW50IGNvbXBsZXRlLi4uJyk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdlcnJvciBvY2MgaW4gcmVnaXN0ZXJjb21wJywgZXJyKTtcclxuICB9XHJcbn1cclxuIl19