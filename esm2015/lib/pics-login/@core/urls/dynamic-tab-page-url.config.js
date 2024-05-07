export class DynamicTabPageConfig {
}
DynamicTabPageConfig.EndPoint = {
    Page: {
        getActivePage: '/pageversion/{id}',
        getPage: '/page',
        getPageById: '/platform/page-designer/page/{id}',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10YWItcGFnZS11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2xvZ2luL3NyYy9saWIvcGljcy1sb2dpbi9AY29yZS91cmxzL2R5bmFtaWMtdGFiLXBhZ2UtdXJsLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sb0JBQW9COztBQUNqQiw2QkFBUSxHQUFHO0lBQ3ZCLElBQUksRUFBRTtRQUNKLGFBQWEsRUFBRSxtQkFBbUI7UUFDbEMsT0FBTyxFQUFFLE9BQU87UUFDaEIsV0FBVyxFQUFFLG1DQUFtQztRQUNoRCxtQkFBbUIsRUFBRSxxREFBcUQ7UUFDMUUsa0JBQWtCLEVBQUUsMEJBQTBCO1FBQzlDLGlCQUFpQixFQUFFLG1CQUFtQjtRQUN0QyxrQkFBa0IsRUFBRSxZQUFZO0tBQ2pDO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsbUJBQW1CLEVBQUUsK0JBQStCO0tBQ3JEO0lBQ0QsWUFBWSxFQUFFO1FBQ1osa0JBQWtCLEVBQUUscURBQXFEO0tBQzFFO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsY0FBYyxFQUFFLDhCQUE4QjtRQUM5QyxjQUFjLEVBQUUsaUJBQWlCO1FBQ2pDLFdBQVcsRUFBRSxpQkFBaUI7S0FDL0I7SUFDRCxXQUFXLEVBQUU7UUFDWCxnQkFBZ0IsRUFBRSxvQ0FBb0M7S0FDdkQ7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIER5bmFtaWNUYWJQYWdlQ29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgUGFnZToge1xyXG4gICAgICBnZXRBY3RpdmVQYWdlOiAnL3BhZ2V2ZXJzaW9uL3tpZH0nLFxyXG4gICAgICBnZXRQYWdlOiAnL3BhZ2UnLFxyXG4gICAgICBnZXRQYWdlQnlJZDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BhZ2Uve2lkfScsXHJcbiAgICAgIGdldFJlc3BvbnNlQnlQYWdlSWQ6ICcvYXBwL2Zvcm1yZXNwb25zZS97cmVzcG9uc2VJZH0vZ2V0QnlQYWdlSWQve3BhZ2VJZH0nLFxyXG4gICAgICBjcmVhdGVGb3JtUmVzcG9uc2U6ICcvYXBwL2Zvcm1yZXNwb25zZS9jcmVhdGUnLFxyXG4gICAgICBwYXRjaEZvcm1SZXNwb25zZTogJy9hcHAvZm9ybXJlc3BvbnNlJyxcclxuICAgICAgdXBkYXRlRm9ybVJlc3BvbnNlOiAnL3BhZ2VkYXRhLydcclxuICAgIH0sXHJcbiAgICBOYXJyYXRpdmU6IHtcclxuICAgICAgZ2V0SW5jaWRlbnRMaXN0QnlJZDogJy9pbmNpZGVudC9saXN0QnlTb3VyY2VJZC97aWR9J1xyXG4gICAgfSxcclxuICAgIE5vdGlmaWNhdGlvbjoge1xyXG4gICAgICBjcmVhdGVTdXJ2ZXlDb25maWc6ICcvc3VydmV5Y29uZmlnL3VzZXJzdXJ2ZXkve2lkfS97c3RhdHVzfS97cGFnZWRhdGFpZH0nXHJcbiAgICB9LFxyXG4gICAgRmluYW5jZToge1xyXG4gICAgICBleHBvcnREb2N1bWVudDogJy9pbnRlZ3JhdGVkL2V4cG9ydERvY3VtZW50cy8nLFxyXG4gICAgICB1cGxvYWREb2N1bWVudDogJ2RvY3VtZW50L3VwbG9hZCcsXHJcbiAgICAgIGdldFVuaXF1ZUlkOiAnL3VuaXF1ZUlkTG9naWMvJ1xyXG4gICAgfSxcclxuICAgIEF0dGFjaG1lbnRzOiB7XHJcbiAgICAgIGNyZWF0ZUF0dGFjaG1lbnQ6ICcvYXBwL2Zvcm1yZXNwb25zZWF0dGFjaG1lbnQvY3JlYXRlJ1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIl19