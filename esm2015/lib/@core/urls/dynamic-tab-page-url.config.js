export class DynamicTabPageConfig {
}
DynamicTabPageConfig.EndPoint = {
    Page: {
        getActivePage: '/pageversion/{id}',
        getPage: '/page',
        getPageById: '/page/{id}',
        getResponseByPageId: '/app/formresponse/{responseId}/getByPageId/{pageId}',
        createFormResponse: '/app/formresponse/create',
        patchFormResponse: '/app/formresponse',
        updateFormResponse: '/pagedata/'
    },
    Narrative: {
        getIncidentListById: '/incident/listBySourceId/{id}'
    },
    Notification: {
        createSurveyConfig: '/surveyconfig/usersurvey/{id}/{status}/{pagedataid}'
    },
    Finance: {
        exportDocument: '/integrated/exportDocuments/',
        uploadDocument: 'document/upload',
        getUniqueId: '/uniqueIdLogic/'
    },
    Attachments: {
        createAttachment: '/app/formresponseattachment/create'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10YWItcGFnZS11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2NvbmZpZy1sb2dpbi1zZXR0aW5ncy9zcmMvbGliL0Bjb3JlL3VybHMvZHluYW1pYy10YWItcGFnZS11cmwuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxvQkFBb0I7O0FBQ2pCLDZCQUFRLEdBQUc7SUFDdkIsSUFBSSxFQUFFO1FBQ0osYUFBYSxFQUFFLG1CQUFtQjtRQUNsQyxPQUFPLEVBQUUsT0FBTztRQUNoQixXQUFXLEVBQUUsWUFBWTtRQUN6QixtQkFBbUIsRUFBRSxxREFBcUQ7UUFDMUUsa0JBQWtCLEVBQUUsMEJBQTBCO1FBQzlDLGlCQUFpQixFQUFFLG1CQUFtQjtRQUN0QyxrQkFBa0IsRUFBRSxZQUFZO0tBQ2pDO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsbUJBQW1CLEVBQUUsK0JBQStCO0tBQ3JEO0lBQ0QsWUFBWSxFQUFFO1FBQ1osa0JBQWtCLEVBQUUscURBQXFEO0tBQzFFO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsY0FBYyxFQUFFLDhCQUE4QjtRQUM5QyxjQUFjLEVBQUUsaUJBQWlCO1FBQ2pDLFdBQVcsRUFBRSxpQkFBaUI7S0FDL0I7SUFDRCxXQUFXLEVBQUU7UUFDWCxnQkFBZ0IsRUFBRSxvQ0FBb0M7S0FDdkQ7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIER5bmFtaWNUYWJQYWdlQ29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgUGFnZToge1xyXG4gICAgICBnZXRBY3RpdmVQYWdlOiAnL3BhZ2V2ZXJzaW9uL3tpZH0nLFxyXG4gICAgICBnZXRQYWdlOiAnL3BhZ2UnLFxyXG4gICAgICBnZXRQYWdlQnlJZDogJy9wYWdlL3tpZH0nLFxyXG4gICAgICBnZXRSZXNwb25zZUJ5UGFnZUlkOiAnL2FwcC9mb3JtcmVzcG9uc2Uve3Jlc3BvbnNlSWR9L2dldEJ5UGFnZUlkL3twYWdlSWR9JyxcclxuICAgICAgY3JlYXRlRm9ybVJlc3BvbnNlOiAnL2FwcC9mb3JtcmVzcG9uc2UvY3JlYXRlJyxcclxuICAgICAgcGF0Y2hGb3JtUmVzcG9uc2U6ICcvYXBwL2Zvcm1yZXNwb25zZScsXHJcbiAgICAgIHVwZGF0ZUZvcm1SZXNwb25zZTogJy9wYWdlZGF0YS8nXHJcbiAgICB9LFxyXG4gICAgTmFycmF0aXZlOiB7XHJcbiAgICAgIGdldEluY2lkZW50TGlzdEJ5SWQ6ICcvaW5jaWRlbnQvbGlzdEJ5U291cmNlSWQve2lkfSdcclxuICAgIH0sXHJcbiAgICBOb3RpZmljYXRpb246IHtcclxuICAgICAgY3JlYXRlU3VydmV5Q29uZmlnOiAnL3N1cnZleWNvbmZpZy91c2Vyc3VydmV5L3tpZH0ve3N0YXR1c30ve3BhZ2VkYXRhaWR9J1xyXG4gICAgfSxcclxuICAgIEZpbmFuY2U6IHtcclxuICAgICAgZXhwb3J0RG9jdW1lbnQ6ICcvaW50ZWdyYXRlZC9leHBvcnREb2N1bWVudHMvJyxcclxuICAgICAgdXBsb2FkRG9jdW1lbnQ6ICdkb2N1bWVudC91cGxvYWQnLFxyXG4gICAgICBnZXRVbmlxdWVJZDogJy91bmlxdWVJZExvZ2ljLydcclxuICAgIH0sXHJcbiAgICBBdHRhY2htZW50czoge1xyXG4gICAgICBjcmVhdGVBdHRhY2htZW50OiAnL2FwcC9mb3JtcmVzcG9uc2VhdHRhY2htZW50L2NyZWF0ZSdcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiJdfQ==