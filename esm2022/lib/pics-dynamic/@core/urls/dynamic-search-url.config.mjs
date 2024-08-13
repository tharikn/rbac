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
            delete: '/solution/formresponse/{id}/pageid',
            update: '/solution/formresponse/{id}/pageid',
            deleteRevoke: '/solution/formresponse/{id}/revokeDeleteByAdmin',
            updateByIdAndPageIdWithReason: '/solution/formresponse/{id}/updateByIdAndPageIdWithReason',
            checkDeleteStatus: '/solution/formresponse/checkDeleteStatus/{pageid}/{id}?name={primaryobject}',
            checkEditStatus: '/solution/formresponse/checkEditStatus/{pageid}/{id}'
        },
        provider: {
            providerData: '/provider'
        },
        criteria: {
            save: '/solution/dynamicsearchcriteria/save',
            getByPageId: '/solution/dynamicsearchcriteria/list/{pageId}'
        },
        rowversion: {
            copy: '/solution/dynamicsearch/rowversion'
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1zZWFyY2gtdXJsLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvQGNvcmUvdXJscy9keW5hbWljLXNlYXJjaC11cmwuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxnQkFBZ0I7SUFDcEIsTUFBTSxDQUFDLFNBQVMsR0FBRztRQUN4QixVQUFVLEVBQUU7WUFDVixhQUFhLEVBQUUsbUNBQW1DO1lBQ2xELGNBQWMsRUFBRSw4QkFBOEI7WUFDOUMsbUJBQW1CLEVBQUUsOENBQThDO1NBQ3BFO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsYUFBYSxFQUFFLHVCQUF1QjtZQUN0QyxXQUFXLEVBQUUscUJBQXFCO1NBQ25DO1FBQ0QsWUFBWSxFQUFFO1lBQ1osUUFBUSxFQUFFLHdCQUF3QjtTQUNuQztRQUNELE1BQU0sRUFBRTtZQUNOLGdCQUFnQixFQUFFLDJCQUEyQjtTQUM5QztRQUNELFVBQVUsRUFBRTtZQUNWLFdBQVcsRUFBRSxxQ0FBcUM7WUFDbEQsSUFBSSxFQUFFLDhCQUE4QjtZQUNwQyxVQUFVLEVBQUUsZ0JBQWdCO1NBQzdCO1FBQ0QsWUFBWSxFQUFFO1lBQ1osR0FBRyxFQUFFLDZDQUE2QztZQUNsRCxNQUFNLEVBQUUsb0NBQW9DO1lBQzVDLE1BQU0sRUFBRSxvQ0FBb0M7WUFDNUMsWUFBWSxFQUFFLGlEQUFpRDtZQUMvRCw2QkFBNkIsRUFBRSwyREFBMkQ7WUFDMUYsaUJBQWlCLEVBQUUsNkVBQTZFO1lBQ2hHLGVBQWUsRUFBRSxzREFBc0Q7U0FDeEU7UUFDRCxRQUFRLEVBQUU7WUFDUixZQUFZLEVBQUUsV0FBVztTQUMxQjtRQUNELFFBQVEsRUFBRTtZQUNSLElBQUksRUFBRSxzQ0FBc0M7WUFDNUMsV0FBVyxFQUFFLCtDQUErQztTQUM3RDtRQUNELFVBQVUsRUFBRTtZQUNWLElBQUksRUFBRSxvQ0FBb0M7U0FDM0M7S0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIER5bmFtaWNTZWFyY2hVUkwge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnRzID0ge1xyXG4gICAgdXNlckNvbmZpZzoge1xyXG4gICAgICBnZXRVc2VyQ29uZmlnOiAnL29yZy91c2VyL2dldFVzZXJQcmVmZXJlbmNlL1BBR0UvJyxcclxuICAgICAgc2F2ZVVzZXJDb25maWc6ICcvb3JnL3VzZXIvc2F2ZVVzZXJQcmVmZXJlbmNlJyxcclxuICAgICAgZ2V0U3RhdGljR3JpZENvbmZpZzogJy9vcmcvdXNlci9nZXRVc2VyUHJlZmVyZW5jZS9TVEFUSUNfR1JJRC97aWR9J1xyXG4gICAgfSxcclxuICAgIGRvY3VtZW50czoge1xyXG4gICAgICBnZW5lcmF0ZUV4Y2VsOiAnL2RvY3VtZW50L2V4cG9ydEV4Y2VsJyxcclxuICAgICAgZ2VuZXJhdGVQREY6ICcvZG9jdW1lbnQvZXhwb3J0UGRmJ1xyXG4gICAgfSxcclxuICAgIG5vdGlmaWNhdGlvbjoge1xyXG4gICAgICBzZW5kTWFpbDogJ2NvbW11bmljYXRpb24vc2VuZG1haWwnXHJcbiAgICB9LFxyXG4gICAgcmVwb3J0OiB7XHJcbiAgICAgIHNjaGVkdWxlcnRyaWdnZXI6ICcvc2NoZWR1bGVycmVwb3J0L3RyaWdnZXIvJ1xyXG4gICAgfSxcclxuICAgIHBhZ2VDb25maWc6IHtcclxuICAgICAgcGFnZVZlcnNpb246ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdldmVyc2lvbicsXHJcbiAgICAgIHBhZ2U6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdlJyxcclxuICAgICAgcG9zdEFwaXVybDogJy9hcGkvcGFnZWRhdGEvJ1xyXG4gICAgfSxcclxuICAgIGZvcm1SZXNwb25zZToge1xyXG4gICAgICBnZXQ6ICcvc29sdXRpb24vZm9ybXJlc3BvbnNlL2dldEJ5UGFnZUlkL3twYWdlaWR9JyxcclxuICAgICAgZGVsZXRlOiAnL3NvbHV0aW9uL2Zvcm1yZXNwb25zZS97aWR9L3BhZ2VpZCcsXHJcbiAgICAgIHVwZGF0ZTogJy9zb2x1dGlvbi9mb3JtcmVzcG9uc2Uve2lkfS9wYWdlaWQnLFxyXG4gICAgICBkZWxldGVSZXZva2U6ICcvc29sdXRpb24vZm9ybXJlc3BvbnNlL3tpZH0vcmV2b2tlRGVsZXRlQnlBZG1pbicsXHJcbiAgICAgIHVwZGF0ZUJ5SWRBbmRQYWdlSWRXaXRoUmVhc29uOiAnL3NvbHV0aW9uL2Zvcm1yZXNwb25zZS97aWR9L3VwZGF0ZUJ5SWRBbmRQYWdlSWRXaXRoUmVhc29uJyxcclxuICAgICAgY2hlY2tEZWxldGVTdGF0dXM6ICcvc29sdXRpb24vZm9ybXJlc3BvbnNlL2NoZWNrRGVsZXRlU3RhdHVzL3twYWdlaWR9L3tpZH0/bmFtZT17cHJpbWFyeW9iamVjdH0nLFxyXG4gICAgICBjaGVja0VkaXRTdGF0dXM6ICcvc29sdXRpb24vZm9ybXJlc3BvbnNlL2NoZWNrRWRpdFN0YXR1cy97cGFnZWlkfS97aWR9J1xyXG4gICAgfSxcclxuICAgIHByb3ZpZGVyOiB7XHJcbiAgICAgIHByb3ZpZGVyRGF0YTogJy9wcm92aWRlcidcclxuICAgIH0sXHJcbiAgICBjcml0ZXJpYToge1xyXG4gICAgICBzYXZlOiAnL3NvbHV0aW9uL2R5bmFtaWNzZWFyY2hjcml0ZXJpYS9zYXZlJyxcclxuICAgICAgZ2V0QnlQYWdlSWQ6ICcvc29sdXRpb24vZHluYW1pY3NlYXJjaGNyaXRlcmlhL2xpc3Qve3BhZ2VJZH0nXHJcbiAgICB9LFxyXG4gICAgcm93dmVyc2lvbjoge1xyXG4gICAgICBjb3B5OiAnL3NvbHV0aW9uL2R5bmFtaWNzZWFyY2gvcm93dmVyc2lvbidcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiJdfQ==