export class DynamicTabPageConfig {
    static EndPoint = {
        Page: {
            getActivePage: '/platform/page-designer/pageversion/{id}',
            getPage: '/platform/page-designer/page',
            getPageById: '/platform/page-designer/page/{id}',
            getResponseByPageId: '/solution/formresponse/{responseId}/getByPageId/{pageId}',
            createFormResponse: '/solution/formresponse/create',
            patchFormResponse: '/solution/formresponse',
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
            createAttachment: '/solution/formresponse-attachment/create'
        }
    };
}
export class RBACINFO {
    apiHost = '';
    tokenKey = '';
    others;
    orgID;
    environment;
}
export class Environment {
    mstrUsername;
    mstrPassword;
    mstrURL;
    mstrProjectID;
    applicationid;
    priority;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10YWItcGFnZS11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvZHluYW1pYy9zcmMvbGliL3BpY3MtZHluYW1pYy9AY29yZS91cmxzL2R5bmFtaWMtdGFiLXBhZ2UtdXJsLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sb0JBQW9CO0lBQ3hCLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDdkIsSUFBSSxFQUFFO1lBQ0osYUFBYSxFQUFFLDBDQUEwQztZQUN6RCxPQUFPLEVBQUUsOEJBQThCO1lBQ3ZDLFdBQVcsRUFBRSxtQ0FBbUM7WUFDaEQsbUJBQW1CLEVBQUUsMERBQTBEO1lBQy9FLGtCQUFrQixFQUFFLCtCQUErQjtZQUNuRCxpQkFBaUIsRUFBRSx3QkFBd0I7WUFDM0Msa0JBQWtCLEVBQUUsWUFBWTtTQUNqQztRQUNELFNBQVMsRUFBRTtZQUNULG1CQUFtQixFQUFFLCtCQUErQjtTQUNyRDtRQUNELFlBQVksRUFBRTtZQUNaLGtCQUFrQixFQUFFLHFEQUFxRDtTQUMxRTtRQUNELE9BQU8sRUFBRTtZQUNQLGNBQWMsRUFBRSw4QkFBOEI7WUFDOUMsY0FBYyxFQUFFLGlCQUFpQjtZQUNqQyxXQUFXLEVBQUUsaUJBQWlCO1NBQy9CO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsZ0JBQWdCLEVBQUUsMENBQTBDO1NBQzdEO0tBQ0YsQ0FBQzs7QUFFSixNQUFNLE9BQU8sUUFBUTtJQUNuQixPQUFPLEdBQUUsRUFBRSxDQUFDO0lBQ1osUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNkLE1BQU0sQ0FBTztJQUNiLEtBQUssQ0FBTztJQUNaLFdBQVcsQ0FBZTtDQUMzQjtBQUNELE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFlBQVksQ0FBVTtJQUN0QixZQUFZLENBQVU7SUFDdEIsT0FBTyxDQUFVO0lBQ2pCLGFBQWEsQ0FBVTtJQUN2QixhQUFhLENBQVU7SUFDdkIsUUFBUSxDQUFTO0NBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIER5bmFtaWNUYWJQYWdlQ29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgUGFnZToge1xyXG4gICAgICBnZXRBY3RpdmVQYWdlOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcGFnZXZlcnNpb24ve2lkfScsXHJcbiAgICAgIGdldFBhZ2U6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdlJyxcclxuICAgICAgZ2V0UGFnZUJ5SWQ6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdlL3tpZH0nLFxyXG4gICAgICBnZXRSZXNwb25zZUJ5UGFnZUlkOiAnL3NvbHV0aW9uL2Zvcm1yZXNwb25zZS97cmVzcG9uc2VJZH0vZ2V0QnlQYWdlSWQve3BhZ2VJZH0nLFxyXG4gICAgICBjcmVhdGVGb3JtUmVzcG9uc2U6ICcvc29sdXRpb24vZm9ybXJlc3BvbnNlL2NyZWF0ZScsXHJcbiAgICAgIHBhdGNoRm9ybVJlc3BvbnNlOiAnL3NvbHV0aW9uL2Zvcm1yZXNwb25zZScsXHJcbiAgICAgIHVwZGF0ZUZvcm1SZXNwb25zZTogJy9wYWdlZGF0YS8nXHJcbiAgICB9LFxyXG4gICAgTmFycmF0aXZlOiB7XHJcbiAgICAgIGdldEluY2lkZW50TGlzdEJ5SWQ6ICcvaW5jaWRlbnQvbGlzdEJ5U291cmNlSWQve2lkfSdcclxuICAgIH0sXHJcbiAgICBOb3RpZmljYXRpb246IHtcclxuICAgICAgY3JlYXRlU3VydmV5Q29uZmlnOiAnL3N1cnZleWNvbmZpZy91c2Vyc3VydmV5L3tpZH0ve3N0YXR1c30ve3BhZ2VkYXRhaWR9J1xyXG4gICAgfSxcclxuICAgIEZpbmFuY2U6IHtcclxuICAgICAgZXhwb3J0RG9jdW1lbnQ6ICcvaW50ZWdyYXRlZC9leHBvcnREb2N1bWVudHMvJyxcclxuICAgICAgdXBsb2FkRG9jdW1lbnQ6ICdkb2N1bWVudC91cGxvYWQnLFxyXG4gICAgICBnZXRVbmlxdWVJZDogJy91bmlxdWVJZExvZ2ljLydcclxuICAgIH0sXHJcbiAgICBBdHRhY2htZW50czoge1xyXG4gICAgICBjcmVhdGVBdHRhY2htZW50OiAnL3NvbHV0aW9uL2Zvcm1yZXNwb25zZS1hdHRhY2htZW50L2NyZWF0ZSdcclxuICAgIH1cclxuICB9O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBSQkFDSU5GTyB7XHJcbiAgYXBpSG9zdCA9Jyc7XHJcbiAgdG9rZW5LZXkgPSAnJztcclxuICBvdGhlcnM/OiBhbnk7XHJcbiAgb3JnSUQ/OiBhbnk7XHJcbiAgZW52aXJvbm1lbnQ/OiBFbnZpcm9ubWVudDtcclxufVxyXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xyXG4gIG1zdHJVc2VybmFtZT86IHN0cmluZztcclxuICBtc3RyUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgbXN0clVSTD86IHN0cmluZztcclxuICBtc3RyUHJvamVjdElEPzogc3RyaW5nO1xyXG4gIGFwcGxpY2F0aW9uaWQ/OiBzdHJpbmc7XHJcbiAgcHJpb3JpdHk/OiBzdHJpbmdcclxufSJdfQ==