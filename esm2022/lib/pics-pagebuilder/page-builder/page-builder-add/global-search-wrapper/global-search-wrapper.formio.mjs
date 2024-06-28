import { registerCustomFormioComponent } from '@formio/angular';
import { GlobalSearchWrapperComponent } from './global-search-wrapper.component';
// import { environment } from '@env/environment';
const COMPONENT_OPTIONS = {
    type: 'globalsearch',
    selector: 'app-globalserach',
    title: 'Global Search',
    group: 'basic',
    icon: 'fa fa-search',
    editForm: globalSearchForm,
    fieldOptions: ['schema', 'table', 'columns', 'responseColumns', 'label']
};
export function globalSearchForm() {
    const oid = sessionStorage.getItem('orgid');
    const environment = {};
    console.log(oid);
    return {
        components: [
            {
                key: 'type',
                type: 'hidden'
            },
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
                label: 'Schema',
                widget: 'choicesjs',
                tableView: true,
                dataSrc: 'url',
                data: {
                    url: `${environment.apiHost}/commonsearch/schemas/${oid}`,
                    headers: [
                        {
                            key: 'authorization',
                            value: 'Bearer {{sessionStorage.getItem(\'jwt-token\').toString()}}'
                        }
                    ]
                },
                valueProperty: 'name',
                template: '<span>{{ item.name }}</span>',
                key: 'schema',
                type: 'select',
                input: true,
                selectValues: 'data',
                disableLimit: false,
                placeholder: 'Select Schema',
                validate: {
                    required: false
                }
            },
            {
                weight: 10,
                label: 'Tables',
                widget: 'choicesjs',
                tableView: true,
                dataSrc: 'url',
                data: {
                    url: `${environment.apiHost}/commonsearch/tables/{{data[\'schema\']}}`,
                    headers: [
                        {
                            key: 'authorization',
                            value: 'Bearer {{sessionStorage.getItem(\'jwt-token\').toString()}}'
                        }
                    ]
                },
                valueProperty: 'name',
                template: '<span>{{ item.name }}</span>',
                refreshOn: 'schema',
                key: 'table',
                type: 'select',
                input: true,
                selectValues: 'data',
                disableLimit: false,
                placeholder: 'Select Table',
                validate: {
                    required: false
                }
            },
            {
                weight: 10,
                label: 'Columns',
                widget: 'choicesjs',
                tableView: true,
                multiple: true,
                dataSrc: 'url',
                data: {
                    url: `${environment.apiHost}/commonsearch/columns/{{data[\'table\']}}/{{data[\'schema\']}}`,
                    headers: [
                        {
                            key: 'authorization',
                            value: 'Bearer {{sessionStorage.getItem(\'jwt-token\').toString()}}'
                        }
                    ]
                },
                valueProperty: 'name',
                template: '<span>{{ item.name }}</span>',
                refreshOn: 'table',
                key: 'columns',
                type: 'select',
                selectValues: 'data',
                disableLimit: false,
                input: true,
                placeholder: 'Select columns',
                validate: {
                    required: false
                }
            },
            {
                weight: 10,
                label: 'Response Columns',
                widget: 'choicesjs',
                tableView: true,
                multiple: true,
                dataSrc: 'url',
                data: {
                    url: `${environment.apiHost}/commonsearch/columns/{{data[\'table\']}}/{{data[\'schema\']}}`,
                    headers: [
                        {
                            key: 'authorization',
                            value: 'Bearer {{sessionStorage.getItem(\'jwt-token\').toString()}}'
                        }
                    ]
                },
                valueProperty: 'name',
                template: '<span>{{ item.name }}</span>',
                refreshOn: 'table',
                key: 'responseColumns',
                type: 'select',
                selectValues: 'data',
                disableLimit: false,
                input: true,
                placeholder: 'Select Response Columns',
                validate: {
                    required: false
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
            }
        ]
    };
}
export function registerGlobalSearchComponent(injector) {
    console.log('Register global search component called...');
    try {
        registerCustomFormioComponent(COMPONENT_OPTIONS, GlobalSearchWrapperComponent, injector);
        console.log('Global search component registered');
    }
    catch (error) {
        console.log(error, 'Error in registering Global Search');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLXNlYXJjaC13cmFwcGVyLmZvcm1pby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL3BhZ2UtYnVpbGRlci9zcmMvbGliL3BpY3MtcGFnZWJ1aWxkZXIvcGFnZS1idWlsZGVyL3BhZ2UtYnVpbGRlci1hZGQvZ2xvYmFsLXNlYXJjaC13cmFwcGVyL2dsb2JhbC1zZWFyY2gtd3JhcHBlci5mb3JtaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUE2Qiw2QkFBNkIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pGLGtEQUFrRDtBQUdsRCxNQUFNLGlCQUFpQixHQUE4QjtJQUNuRCxJQUFJLEVBQUUsY0FBYztJQUNwQixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLEtBQUssRUFBRSxlQUFlO0lBQ3RCLEtBQUssRUFBRSxPQUFPO0lBQ2QsSUFBSSxFQUFFLGNBQWM7SUFDcEIsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxPQUFPLENBQUM7Q0FDekUsQ0FBQztBQUVGLE1BQU0sVUFBVSxnQkFBZ0I7SUFDOUIsTUFBTSxHQUFHLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxNQUFNLFdBQVcsR0FBUSxFQUFFLENBQUM7SUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixPQUFPO1FBQ0wsVUFBVSxFQUFFO1lBQ1Y7Z0JBQ0UsR0FBRyxFQUFFLE1BQU07Z0JBQ1gsSUFBSSxFQUFFLFFBQVE7YUFDZjtZQUNEO2dCQUNFLE1BQU0sRUFBRSxDQUFDO2dCQUNULElBQUksRUFBRSxXQUFXO2dCQUNqQixL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QUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsb0NBQW9DLENBQUMsQ0FBQztLQUMxRDtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtaW9DdXN0b21Db21wb25lbnRJbmZvLCByZWdpc3RlckN1c3RvbUZvcm1pb0NvbXBvbmVudCB9IGZyb20gJ0Bmb3JtaW8vYW5ndWxhcic7XHJcbmltcG9ydCB7IEdsb2JhbFNlYXJjaFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuL2dsb2JhbC1zZWFyY2gtd3JhcHBlci5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ0BlbnYvZW52aXJvbm1lbnQnO1xyXG5cclxuXHJcbmNvbnN0IENPTVBPTkVOVF9PUFRJT05TOiBGb3JtaW9DdXN0b21Db21wb25lbnRJbmZvID0ge1xyXG4gIHR5cGU6ICdnbG9iYWxzZWFyY2gnLFxyXG4gIHNlbGVjdG9yOiAnYXBwLWdsb2JhbHNlcmFjaCcsXHJcbiAgdGl0bGU6ICdHbG9iYWwgU2VhcmNoJyxcclxuICBncm91cDogJ2Jhc2ljJyxcclxuICBpY29uOiAnZmEgZmEtc2VhcmNoJyxcclxuICBlZGl0Rm9ybTogZ2xvYmFsU2VhcmNoRm9ybSxcclxuICBmaWVsZE9wdGlvbnM6IFsnc2NoZW1hJywgJ3RhYmxlJywgJ2NvbHVtbnMnLCAncmVzcG9uc2VDb2x1bW5zJywgJ2xhYmVsJ11cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnbG9iYWxTZWFyY2hGb3JtKCkge1xyXG4gIGNvbnN0IG9pZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ29yZ2lkJyk7XHJcbiAgY29uc3QgZW52aXJvbm1lbnQ6IGFueSA9IHt9O1xyXG4gIGNvbnNvbGUubG9nKG9pZCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNvbXBvbmVudHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGtleTogJ3R5cGUnLFxyXG4gICAgICAgIHR5cGU6ICdoaWRkZW4nXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB3ZWlnaHQ6IDAsXHJcbiAgICAgICAgdHlwZTogJ3RleHRmaWVsZCcsXHJcbiAgICAgICAgaW5wdXQ6IHRydWUsXHJcbiAgICAgICAga2V5OiAnbGFiZWwnLFxyXG4gICAgICAgIGxhYmVsOiAnTGFiZWwnLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnTGFiZWwnLFxyXG4gICAgICAgIHZhbGlkYXRlOiB7XHJcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHdlaWdodDogMTAsXHJcbiAgICAgICAgbGFiZWw6ICdTY2hlbWEnLFxyXG4gICAgICAgIHdpZGdldDogJ2Nob2ljZXNqcycsXHJcbiAgICAgICAgdGFibGVWaWV3OiB0cnVlLFxyXG4gICAgICAgIGRhdGFTcmM6ICd1cmwnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHVybDogYCR7ZW52aXJvbm1lbnQuYXBpSG9zdH0vY29tbW9uc2VhcmNoL3NjaGVtYXMvJHtvaWR9YCxcclxuICAgICAgICAgIGhlYWRlcnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGtleTogJ2F1dGhvcml6YXRpb24nLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiAnQmVhcmVyIHt7c2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcXCdqd3QtdG9rZW5cXCcpLnRvU3RyaW5nKCl9fSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWVQcm9wZXJ0eTogJ25hbWUnLFxyXG4gICAgICAgIHRlbXBsYXRlOiAnPHNwYW4+e3sgaXRlbS5uYW1lIH19PC9zcGFuPicsXHJcbiAgICAgICAga2V5OiAnc2NoZW1hJyxcclxuICAgICAgICB0eXBlOiAnc2VsZWN0JyxcclxuICAgICAgICBpbnB1dDogdHJ1ZSxcclxuICAgICAgICBzZWxlY3RWYWx1ZXM6ICdkYXRhJyxcclxuICAgICAgICBkaXNhYmxlTGltaXQ6IGZhbHNlLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnU2VsZWN0IFNjaGVtYScsXHJcbiAgICAgICAgdmFsaWRhdGU6IHtcclxuICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHdlaWdodDogMTAsXHJcbiAgICAgICAgbGFiZWw6ICdUYWJsZXMnLFxyXG4gICAgICAgIHdpZGdldDogJ2Nob2ljZXNqcycsXHJcbiAgICAgICAgdGFibGVWaWV3OiB0cnVlLFxyXG4gICAgICAgIGRhdGFTcmM6ICd1cmwnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHVybDogYCR7ZW52aXJvbm1lbnQuYXBpSG9zdH0vY29tbW9uc2VhcmNoL3RhYmxlcy97e2RhdGFbXFwnc2NoZW1hXFwnXX19YCxcclxuICAgICAgICAgIGhlYWRlcnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGtleTogJ2F1dGhvcml6YXRpb24nLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiAnQmVhcmVyIHt7c2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcXCdqd3QtdG9rZW5cXCcpLnRvU3RyaW5nKCl9fSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWVQcm9wZXJ0eTogJ25hbWUnLFxyXG4gICAgICAgIHRlbXBsYXRlOiAnPHNwYW4+e3sgaXRlbS5uYW1lIH19PC9zcGFuPicsXHJcbiAgICAgICAgcmVmcmVzaE9uOiAnc2NoZW1hJyxcclxuICAgICAgICBrZXk6ICd0YWJsZScsXHJcbiAgICAgICAgdHlwZTogJ3NlbGVjdCcsXHJcbiAgICAgICAgaW5wdXQ6IHRydWUsXHJcbiAgICAgICAgc2VsZWN0VmFsdWVzOiAnZGF0YScsXHJcbiAgICAgICAgZGlzYWJsZUxpbWl0OiBmYWxzZSxcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ1NlbGVjdCBUYWJsZScsXHJcbiAgICAgICAgdmFsaWRhdGU6IHtcclxuICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHdlaWdodDogMTAsXHJcbiAgICAgICAgbGFiZWw6ICdDb2x1bW5zJyxcclxuICAgICAgICB3aWRnZXQ6ICdjaG9pY2VzanMnLFxyXG4gICAgICAgIHRhYmxlVmlldzogdHJ1ZSxcclxuICAgICAgICBtdWx0aXBsZTogdHJ1ZSxcclxuICAgICAgICBkYXRhU3JjOiAndXJsJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB1cmw6IGAke2Vudmlyb25tZW50LmFwaUhvc3R9L2NvbW1vbnNlYXJjaC9jb2x1bW5zL3t7ZGF0YVtcXCd0YWJsZVxcJ119fS97e2RhdGFbXFwnc2NoZW1hXFwnXX19YCxcclxuICAgICAgICAgIGhlYWRlcnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGtleTogJ2F1dGhvcml6YXRpb24nLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiAnQmVhcmVyIHt7c2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcXCdqd3QtdG9rZW5cXCcpLnRvU3RyaW5nKCl9fSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWVQcm9wZXJ0eTogJ25hbWUnLFxyXG4gICAgICAgIHRlbXBsYXRlOiAnPHNwYW4+e3sgaXRlbS5uYW1lIH19PC9zcGFuPicsXHJcbiAgICAgICAgcmVmcmVzaE9uOiAndGFibGUnLFxyXG4gICAgICAgIGtleTogJ2NvbHVtbnMnLFxyXG4gICAgICAgIHR5cGU6ICdzZWxlY3QnLFxyXG4gICAgICAgIHNlbGVjdFZhbHVlczogJ2RhdGEnLFxyXG4gICAgICAgIGRpc2FibGVMaW1pdDogZmFsc2UsXHJcbiAgICAgICAgaW5wdXQ6IHRydWUsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWxlY3QgY29sdW1ucycsXHJcbiAgICAgICAgdmFsaWRhdGU6IHtcclxuICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHdlaWdodDogMTAsXHJcbiAgICAgICAgbGFiZWw6ICdSZXNwb25zZSBDb2x1bW5zJyxcclxuICAgICAgICB3aWRnZXQ6ICdjaG9pY2VzanMnLFxyXG4gICAgICAgIHRhYmxlVmlldzogdHJ1ZSxcclxuICAgICAgICBtdWx0aXBsZTogdHJ1ZSxcclxuICAgICAgICBkYXRhU3JjOiAndXJsJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB1cmw6IGAke2Vudmlyb25tZW50LmFwaUhvc3R9L2NvbW1vbnNlYXJjaC9jb2x1bW5zL3t7ZGF0YVtcXCd0YWJsZVxcJ119fS97e2RhdGFbXFwnc2NoZW1hXFwnXX19YCxcclxuICAgICAgICAgIGhlYWRlcnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGtleTogJ2F1dGhvcml6YXRpb24nLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiAnQmVhcmVyIHt7c2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcXCdqd3QtdG9rZW5cXCcpLnRvU3RyaW5nKCl9fSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWVQcm9wZXJ0eTogJ25hbWUnLFxyXG4gICAgICAgIHRlbXBsYXRlOiAnPHNwYW4+e3sgaXRlbS5uYW1lIH19PC9zcGFuPicsXHJcbiAgICAgICAgcmVmcmVzaE9uOiAndGFibGUnLFxyXG4gICAgICAgIGtleTogJ3Jlc3BvbnNlQ29sdW1ucycsXHJcbiAgICAgICAgdHlwZTogJ3NlbGVjdCcsXHJcbiAgICAgICAgc2VsZWN0VmFsdWVzOiAnZGF0YScsXHJcbiAgICAgICAgZGlzYWJsZUxpbWl0OiBmYWxzZSxcclxuICAgICAgICBpbnB1dDogdHJ1ZSxcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ1NlbGVjdCBSZXNwb25zZSBDb2x1bW5zJyxcclxuICAgICAgICB2YWxpZGF0ZToge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgd2VpZ2h0OiAxMCxcclxuICAgICAgICB0eXBlOiAndGV4dGZpZWxkJyxcclxuICAgICAgICBpbnB1dDogdHJ1ZSxcclxuICAgICAgICBrZXk6ICdrZXknLFxyXG4gICAgICAgIGxhYmVsOiAnQVBJIEtleScsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdGaWVsZCBDb2RlJyxcclxuICAgICAgICB0b29sdGlwOiAnVGhlIGNvZGUva2V5L0lEL25hbWUgb2YgdGhlIGZpZWxkLicsXHJcbiAgICAgICAgdmFsaWRhdGU6IHtcclxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgbWF4TGVuZ3RoOiAxMjgsXHJcbiAgICAgICAgICBwYXR0ZXJuOiAnW0EtWmEtel1cXFxcdyonLFxyXG4gICAgICAgICAgcGF0dGVybk1lc3NhZ2U6XHJcbiAgICAgICAgICAgICdUaGUgcHJvcGVydHkgbmFtZSBtdXN0IG9ubHkgY29udGFpbiBhbHBoYW51bWVyaWMgY2hhcmFjdGVycywgdW5kZXJzY29yZXMgYW5kIHNob3VsZCBvbmx5IGJlIHN0YXJ0ZWQgYnkgYW55IGxldHRlciBjaGFyYWN0ZXIuJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlckdsb2JhbFNlYXJjaENvbXBvbmVudChpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICBjb25zb2xlLmxvZygnUmVnaXN0ZXIgZ2xvYmFsIHNlYXJjaCBjb21wb25lbnQgY2FsbGVkLi4uJyk7XHJcbiAgdHJ5IHtcclxuICAgIHJlZ2lzdGVyQ3VzdG9tRm9ybWlvQ29tcG9uZW50KENPTVBPTkVOVF9PUFRJT05TLCBHbG9iYWxTZWFyY2hXcmFwcGVyQ29tcG9uZW50LCBpbmplY3Rvcik7XHJcbiAgICBjb25zb2xlLmxvZygnR2xvYmFsIHNlYXJjaCBjb21wb25lbnQgcmVnaXN0ZXJlZCcpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvciwgJ0Vycm9yIGluIHJlZ2lzdGVyaW5nIEdsb2JhbCBTZWFyY2gnKTtcclxuICB9XHJcbn1cclxuIl19