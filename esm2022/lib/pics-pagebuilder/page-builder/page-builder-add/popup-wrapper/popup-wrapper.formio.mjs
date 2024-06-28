import { registerCustomFormioComponent } from '@formio/angular';
import { PopupWrapperComponent } from './popup-wrapper.component';
const COMPONENT_OPTIONS = {
    type: 'mypopup',
    selector: 'my-popup',
    title: 'Popup',
    group: 'basic',
    icon: 'calendar'
};
export function registerPopupComponent(injector) {
    console.log('registerPopupComponent called...');
    try {
        registerCustomFormioComponent(COMPONENT_OPTIONS, PopupWrapperComponent, injector);
    }
    catch (err) {
        console.error('error occ in registercomp', err);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAtd3JhcHBlci5mb3JtaW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9wYWdlLWJ1aWxkZXIvc3JjL2xpYi9waWNzLXBhZ2VidWlsZGVyL3BhZ2UtYnVpbGRlci9wYWdlLWJ1aWxkZXItYWRkL3BvcHVwLXdyYXBwZXIvcG9wdXAtd3JhcHBlci5mb3JtaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUE2Qiw2QkFBNkIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWxFLE1BQU0saUJBQWlCLEdBQThCO0lBQ25ELElBQUksRUFBRSxTQUFTO0lBQ2YsUUFBUSxFQUFFLFVBQVU7SUFDcEIsS0FBSyxFQUFFLE9BQU87SUFDZCxLQUFLLEVBQUUsT0FBTztJQUNkLElBQUksRUFBRSxVQUFVO0NBQ2pCLENBQUM7QUFFRixNQUFNLFVBQVUsc0JBQXNCLENBQUMsUUFBa0I7SUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0lBQ2hELElBQUk7UUFDRiw2QkFBNkIsQ0FBQyxpQkFBaUIsRUFBRSxxQkFBcUIsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNuRjtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNqRDtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtaW9DdXN0b21Db21wb25lbnRJbmZvLCByZWdpc3RlckN1c3RvbUZvcm1pb0NvbXBvbmVudCB9IGZyb20gJ0Bmb3JtaW8vYW5ndWxhcic7XHJcbmltcG9ydCB7IFBvcHVwV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vcG9wdXAtd3JhcHBlci5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UX09QVElPTlM6IEZvcm1pb0N1c3RvbUNvbXBvbmVudEluZm8gPSB7XHJcbiAgdHlwZTogJ215cG9wdXAnLFxyXG4gIHNlbGVjdG9yOiAnbXktcG9wdXAnLFxyXG4gIHRpdGxlOiAnUG9wdXAnLFxyXG4gIGdyb3VwOiAnYmFzaWMnLFxyXG4gIGljb246ICdjYWxlbmRhcidcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclBvcHVwQ29tcG9uZW50KGluamVjdG9yOiBJbmplY3Rvcikge1xyXG4gIGNvbnNvbGUubG9nKCdyZWdpc3RlclBvcHVwQ29tcG9uZW50IGNhbGxlZC4uLicpO1xyXG4gIHRyeSB7XHJcbiAgICByZWdpc3RlckN1c3RvbUZvcm1pb0NvbXBvbmVudChDT01QT05FTlRfT1BUSU9OUywgUG9wdXBXcmFwcGVyQ29tcG9uZW50LCBpbmplY3Rvcik7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdlcnJvciBvY2MgaW4gcmVnaXN0ZXJjb21wJywgZXJyKTtcclxuICB9XHJcbn1cclxuIl19