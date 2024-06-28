import { registerCustomFormioComponent } from '@formio/angular';
import { RatingWrapperComponent } from './rating-wrapper.component';
const COMPONENT_OPTIONS = {
    type: 'myrating',
    selector: 'my-rating',
    title: 'Rating',
    group: 'basic',
    icon: 'fa fa-star'
    // editForm: minimalEditForm,
    // template: 'dateTime'
};
function _minimalEditForm() {
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
                label: 'Field Code',
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
                key: 'customOptions.myOption',
                label: 'My Custom Option',
                placeholder: 'My Custom Option',
                validate: {
                    required: true
                }
            }
        ]
    };
}
export function registerRatingComponent(injector) {
    console.log('registerPopupComponent called...');
    try {
        registerCustomFormioComponent(COMPONENT_OPTIONS, RatingWrapperComponent, injector);
        console.log('registerPopupComponent complete...');
    }
    catch (err) {
        console.error('error occ in registercomp', err);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLXdyYXBwZXIuZm9ybWlvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvcGFnZS1idWlsZGVyL3NyYy9saWIvcGljcy1wYWdlYnVpbGRlci9wYWdlLWJ1aWxkZXIvcGFnZS1idWlsZGVyLWFkZC9yYXRpbmctd3JhcHBlci9yYXRpbmctd3JhcHBlci5mb3JtaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUE2Qiw2QkFBNkIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXBFLE1BQU0saUJBQWlCLEdBQThCO0lBQ25ELElBQUksRUFBRSxVQUFVO0lBQ2hCLFFBQVEsRUFBRSxXQUFXO0lBQ3JCLEtBQUssRUFBRSxRQUFRO0lBQ2YsS0FBSyxFQUFFLE9BQU87SUFDZCxJQUFJLEVBQUUsWUFBWTtJQUNsQiw2QkFBNkI7SUFDN0IsdUJBQXVCO0NBQ3hCLENBQUM7QUFFRixTQUFTLGdCQUFnQjtJQUN2QixPQUFPO1FBQ0wsVUFBVSxFQUFFO1lBQ1YsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7WUFDL0I7Z0JBQ0UsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLEtBQUssRUFBRSxJQUFJO2dCQUNYLEdBQUcsRUFBRSxPQUFPO2dCQUNaLEtBQUssRUFBRSxPQUFPO2dCQUNkLFdBQVcsRUFBRSxPQUFPO2dCQUNwQixRQUFRLEVBQUU7b0JBQ1IsUUFBUSxFQUFFLElBQUk7aUJBQ2Y7YUFDRjtZQUNEO2dCQUNFLE1BQU0sRUFBRSxFQUFFO2dCQUNWLElBQUksRUFBRSxXQUFXO2dCQUNqQixLQUFLLEVBQUUsSUFBSTtnQkFDWCxHQUFHLEVBQUUsS0FBSztnQkFDVixLQUFLLEVBQUUsWUFBWTtnQkFDbkIsV0FBVyxFQUFFLFlBQVk7Z0JBQ3pCLE9BQU8sRUFBRSxvQ0FBb0M7Z0JBQzdDLFFBQVEsRUFBRTtvQkFDUixRQUFRLEVBQUUsSUFBSTtvQkFDZCxTQUFTLEVBQUUsR0FBRztvQkFDZCxPQUFPLEVBQUUsY0FBYztvQkFDdkIsY0FBYyxFQUNaLDhIQUE4SDtpQkFDakk7YUFDRjtZQUNEO2dCQUNFLE1BQU0sRUFBRSxFQUFFO2dCQUNWLElBQUksRUFBRSxXQUFXO2dCQUNqQixLQUFLLEVBQUUsSUFBSTtnQkFDWCxHQUFHLEVBQUUsd0JBQXdCO2dCQUM3QixLQUFLLEVBQUUsa0JBQWtCO2dCQUN6QixXQUFXLEVBQUUsa0JBQWtCO2dCQUMvQixRQUFRLEVBQUU7b0JBQ1IsUUFBUSxFQUFFLElBQUk7aUJBQ2Y7YUFDRjtTQUNGO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsUUFBa0I7SUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0lBQ2hELElBQUk7UUFDRiw2QkFBNkIsQ0FBQyxpQkFBaUIsRUFBRSxzQkFBc0IsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNuRixPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7S0FDbkQ7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDakQ7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWlvQ3VzdG9tQ29tcG9uZW50SW5mbywgcmVnaXN0ZXJDdXN0b21Gb3JtaW9Db21wb25lbnQgfSBmcm9tICdAZm9ybWlvL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBSYXRpbmdXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9yYXRpbmctd3JhcHBlci5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UX09QVElPTlM6IEZvcm1pb0N1c3RvbUNvbXBvbmVudEluZm8gPSB7XHJcbiAgdHlwZTogJ215cmF0aW5nJyxcclxuICBzZWxlY3RvcjogJ215LXJhdGluZycsXHJcbiAgdGl0bGU6ICdSYXRpbmcnLFxyXG4gIGdyb3VwOiAnYmFzaWMnLFxyXG4gIGljb246ICdmYSBmYS1zdGFyJ1xyXG4gIC8vIGVkaXRGb3JtOiBtaW5pbWFsRWRpdEZvcm0sXHJcbiAgLy8gdGVtcGxhdGU6ICdkYXRlVGltZSdcclxufTtcclxuXHJcbmZ1bmN0aW9uIF9taW5pbWFsRWRpdEZvcm0oKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNvbXBvbmVudHM6IFtcclxuICAgICAgeyBrZXk6ICd0eXBlJywgdHlwZTogJ2hpZGRlbicgfSxcclxuICAgICAge1xyXG4gICAgICAgIHdlaWdodDogMCxcclxuICAgICAgICB0eXBlOiAndGV4dGZpZWxkJyxcclxuICAgICAgICBpbnB1dDogdHJ1ZSxcclxuICAgICAgICBrZXk6ICdsYWJlbCcsXHJcbiAgICAgICAgbGFiZWw6ICdMYWJlbCcsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdMYWJlbCcsXHJcbiAgICAgICAgdmFsaWRhdGU6IHtcclxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgd2VpZ2h0OiAxMCxcclxuICAgICAgICB0eXBlOiAndGV4dGZpZWxkJyxcclxuICAgICAgICBpbnB1dDogdHJ1ZSxcclxuICAgICAgICBrZXk6ICdrZXknLFxyXG4gICAgICAgIGxhYmVsOiAnRmllbGQgQ29kZScsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdGaWVsZCBDb2RlJyxcclxuICAgICAgICB0b29sdGlwOiAnVGhlIGNvZGUva2V5L0lEL25hbWUgb2YgdGhlIGZpZWxkLicsXHJcbiAgICAgICAgdmFsaWRhdGU6IHtcclxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgbWF4TGVuZ3RoOiAxMjgsXHJcbiAgICAgICAgICBwYXR0ZXJuOiAnW0EtWmEtel1cXFxcdyonLFxyXG4gICAgICAgICAgcGF0dGVybk1lc3NhZ2U6XHJcbiAgICAgICAgICAgICdUaGUgcHJvcGVydHkgbmFtZSBtdXN0IG9ubHkgY29udGFpbiBhbHBoYW51bWVyaWMgY2hhcmFjdGVycywgdW5kZXJzY29yZXMgYW5kIHNob3VsZCBvbmx5IGJlIHN0YXJ0ZWQgYnkgYW55IGxldHRlciBjaGFyYWN0ZXIuJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHdlaWdodDogMjAsXHJcbiAgICAgICAgdHlwZTogJ3RleHRmaWVsZCcsXHJcbiAgICAgICAgaW5wdXQ6IHRydWUsXHJcbiAgICAgICAga2V5OiAnY3VzdG9tT3B0aW9ucy5teU9wdGlvbicsXHJcbiAgICAgICAgbGFiZWw6ICdNeSBDdXN0b20gT3B0aW9uJyxcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ015IEN1c3RvbSBPcHRpb24nLFxyXG4gICAgICAgIHZhbGlkYXRlOiB7XHJcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclJhdGluZ0NvbXBvbmVudChpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICBjb25zb2xlLmxvZygncmVnaXN0ZXJQb3B1cENvbXBvbmVudCBjYWxsZWQuLi4nKTtcclxuICB0cnkge1xyXG4gICAgcmVnaXN0ZXJDdXN0b21Gb3JtaW9Db21wb25lbnQoQ09NUE9ORU5UX09QVElPTlMsIFJhdGluZ1dyYXBwZXJDb21wb25lbnQsIGluamVjdG9yKTtcclxuICAgIGNvbnNvbGUubG9nKCdyZWdpc3RlclBvcHVwQ29tcG9uZW50IGNvbXBsZXRlLi4uJyk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdlcnJvciBvY2MgaW4gcmVnaXN0ZXJjb21wJywgZXJyKTtcclxuICB9XHJcbn1cclxuIl19