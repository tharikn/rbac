export class DynamicSearchURL {
    static EndPoints = {
        userConfig: {
            getUserConfig: '/org/user/getUserPreference/PAGE/',
            saveUserConfig: '/org/user/saveUserPreference',
            getStaticGridConfig: '/org/user/getUserPreference/STATIC_GRID/{id}'
        },
        documents: {
            generateExcel: '/document/exportExcel',
            generatePDF: '/document/exportPdf'
        },
        notification: {
            sendMail: 'communication/sendmail'
        },
        report: {
            schedulertrigger: '/schedulerreport/trigger/'
        },
        pageConfig: {
            pageVersion: '/platform/page-designer/pageversion',
            page: '/platform/page-designer/page',
            postApiurl: '/api/pagedata/'
        },
        formResponse: {
            get: '/solution/formresponse/getByPageId/{pageid}',
            delete: '/solution/formresponse/{id}/pageid'
        },
        provider: {
            providerData: '/provider'
        },
        criteria: {
            save: '/solution/dynamicsearchcriteria/save',
            getByPageId: '/solution/dynamicsearchcriteria/list/{pageId}'
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1zZWFyY2gtdXJsLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL3BhZ2UtYnVpbGRlci9zcmMvbGliL3BpY3MtcGFnZWJ1aWxkZXIvQGNvcmUvdXJsL2R5bmFtaWMtc2VhcmNoLXVybC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLGdCQUFnQjtJQUNsQixNQUFNLENBQUMsU0FBUyxHQUFHO1FBQ3hCLFVBQVUsRUFBRTtZQUNWLGFBQWEsRUFBRSxtQ0FBbUM7WUFDbEQsY0FBYyxFQUFFLDhCQUE4QjtZQUM5QyxtQkFBbUIsRUFBRSw4Q0FBOEM7U0FDcEU7UUFDRCxTQUFTLEVBQUU7WUFDVCxhQUFhLEVBQUUsdUJBQXVCO1lBQ3RDLFdBQVcsRUFBRSxxQkFBcUI7U0FDbkM7UUFDRCxZQUFZLEVBQUU7WUFDWixRQUFRLEVBQUUsd0JBQXdCO1NBQ25DO1FBQ0QsTUFBTSxFQUFFO1lBQ04sZ0JBQWdCLEVBQUUsMkJBQTJCO1NBQzlDO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsV0FBVyxFQUFFLHFDQUFxQztZQUNsRCxJQUFJLEVBQUUsOEJBQThCO1lBQ3BDLFVBQVUsRUFBRSxnQkFBZ0I7U0FDN0I7UUFDRCxZQUFZLEVBQUU7WUFDWixHQUFHLEVBQUUsNkNBQTZDO1lBQ2xELE1BQU0sRUFBRSxvQ0FBb0M7U0FDN0M7UUFDRCxRQUFRLEVBQUU7WUFDUixZQUFZLEVBQUUsV0FBVztTQUMxQjtRQUNELFFBQVEsRUFBRTtZQUNSLElBQUksRUFBRSxzQ0FBc0M7WUFDNUMsV0FBVyxFQUFFLCtDQUErQztTQUM3RDtLQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRHluYW1pY1NlYXJjaFVSTCB7XHJcbiAgICBwdWJsaWMgc3RhdGljIEVuZFBvaW50cyA9IHtcclxuICAgICAgdXNlckNvbmZpZzoge1xyXG4gICAgICAgIGdldFVzZXJDb25maWc6ICcvb3JnL3VzZXIvZ2V0VXNlclByZWZlcmVuY2UvUEFHRS8nLFxyXG4gICAgICAgIHNhdmVVc2VyQ29uZmlnOiAnL29yZy91c2VyL3NhdmVVc2VyUHJlZmVyZW5jZScsXHJcbiAgICAgICAgZ2V0U3RhdGljR3JpZENvbmZpZzogJy9vcmcvdXNlci9nZXRVc2VyUHJlZmVyZW5jZS9TVEFUSUNfR1JJRC97aWR9J1xyXG4gICAgICB9LFxyXG4gICAgICBkb2N1bWVudHM6IHtcclxuICAgICAgICBnZW5lcmF0ZUV4Y2VsOiAnL2RvY3VtZW50L2V4cG9ydEV4Y2VsJyxcclxuICAgICAgICBnZW5lcmF0ZVBERjogJy9kb2N1bWVudC9leHBvcnRQZGYnXHJcbiAgICAgIH0sXHJcbiAgICAgIG5vdGlmaWNhdGlvbjoge1xyXG4gICAgICAgIHNlbmRNYWlsOiAnY29tbXVuaWNhdGlvbi9zZW5kbWFpbCdcclxuICAgICAgfSxcclxuICAgICAgcmVwb3J0OiB7XHJcbiAgICAgICAgc2NoZWR1bGVydHJpZ2dlcjogJy9zY2hlZHVsZXJyZXBvcnQvdHJpZ2dlci8nXHJcbiAgICAgIH0sXHJcbiAgICAgIHBhZ2VDb25maWc6IHtcclxuICAgICAgICBwYWdlVmVyc2lvbjogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BhZ2V2ZXJzaW9uJyxcclxuICAgICAgICBwYWdlOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcGFnZScsXHJcbiAgICAgICAgcG9zdEFwaXVybDogJy9hcGkvcGFnZWRhdGEvJ1xyXG4gICAgICB9LFxyXG4gICAgICBmb3JtUmVzcG9uc2U6IHtcclxuICAgICAgICBnZXQ6ICcvc29sdXRpb24vZm9ybXJlc3BvbnNlL2dldEJ5UGFnZUlkL3twYWdlaWR9JyxcclxuICAgICAgICBkZWxldGU6ICcvc29sdXRpb24vZm9ybXJlc3BvbnNlL3tpZH0vcGFnZWlkJ1xyXG4gICAgICB9LFxyXG4gICAgICBwcm92aWRlcjoge1xyXG4gICAgICAgIHByb3ZpZGVyRGF0YTogJy9wcm92aWRlcidcclxuICAgICAgfSxcclxuICAgICAgY3JpdGVyaWE6IHtcclxuICAgICAgICBzYXZlOiAnL3NvbHV0aW9uL2R5bmFtaWNzZWFyY2hjcml0ZXJpYS9zYXZlJyxcclxuICAgICAgICBnZXRCeVBhZ2VJZDogJy9zb2x1dGlvbi9keW5hbWljc2VhcmNoY3JpdGVyaWEvbGlzdC97cGFnZUlkfSdcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbiAgIl19