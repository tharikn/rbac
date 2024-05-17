export class DynamicTabPageConfig {
    static EndPoint = {
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10YWItcGFnZS11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2xvZ2luL3NyYy9saWIvcGljcy1sb2dpbi9AY29yZS91cmxzL2R5bmFtaWMtdGFiLXBhZ2UtdXJsLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sb0JBQW9CO0lBQ3hCLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDdkIsSUFBSSxFQUFFO1lBQ0osYUFBYSxFQUFFLG1CQUFtQjtZQUNsQyxPQUFPLEVBQUUsT0FBTztZQUNoQixXQUFXLEVBQUUsbUNBQW1DO1lBQ2hELG1CQUFtQixFQUFFLHFEQUFxRDtZQUMxRSxrQkFBa0IsRUFBRSwwQkFBMEI7WUFDOUMsaUJBQWlCLEVBQUUsbUJBQW1CO1lBQ3RDLGtCQUFrQixFQUFFLFlBQVk7U0FDakM7UUFDRCxTQUFTLEVBQUU7WUFDVCxtQkFBbUIsRUFBRSwrQkFBK0I7U0FDckQ7UUFDRCxZQUFZLEVBQUU7WUFDWixrQkFBa0IsRUFBRSxxREFBcUQ7U0FDMUU7UUFDRCxPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsOEJBQThCO1lBQzlDLGNBQWMsRUFBRSxpQkFBaUI7WUFDakMsV0FBVyxFQUFFLGlCQUFpQjtTQUMvQjtRQUNELFdBQVcsRUFBRTtZQUNYLGdCQUFnQixFQUFFLG9DQUFvQztTQUN2RDtLQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRHluYW1pY1RhYlBhZ2VDb25maWcge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnQgPSB7XHJcbiAgICBQYWdlOiB7XHJcbiAgICAgIGdldEFjdGl2ZVBhZ2U6ICcvcGFnZXZlcnNpb24ve2lkfScsXHJcbiAgICAgIGdldFBhZ2U6ICcvcGFnZScsXHJcbiAgICAgIGdldFBhZ2VCeUlkOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcGFnZS97aWR9JyxcclxuICAgICAgZ2V0UmVzcG9uc2VCeVBhZ2VJZDogJy9hcHAvZm9ybXJlc3BvbnNlL3tyZXNwb25zZUlkfS9nZXRCeVBhZ2VJZC97cGFnZUlkfScsXHJcbiAgICAgIGNyZWF0ZUZvcm1SZXNwb25zZTogJy9hcHAvZm9ybXJlc3BvbnNlL2NyZWF0ZScsXHJcbiAgICAgIHBhdGNoRm9ybVJlc3BvbnNlOiAnL2FwcC9mb3JtcmVzcG9uc2UnLFxyXG4gICAgICB1cGRhdGVGb3JtUmVzcG9uc2U6ICcvcGFnZWRhdGEvJ1xyXG4gICAgfSxcclxuICAgIE5hcnJhdGl2ZToge1xyXG4gICAgICBnZXRJbmNpZGVudExpc3RCeUlkOiAnL2luY2lkZW50L2xpc3RCeVNvdXJjZUlkL3tpZH0nXHJcbiAgICB9LFxyXG4gICAgTm90aWZpY2F0aW9uOiB7XHJcbiAgICAgIGNyZWF0ZVN1cnZleUNvbmZpZzogJy9zdXJ2ZXljb25maWcvdXNlcnN1cnZleS97aWR9L3tzdGF0dXN9L3twYWdlZGF0YWlkfSdcclxuICAgIH0sXHJcbiAgICBGaW5hbmNlOiB7XHJcbiAgICAgIGV4cG9ydERvY3VtZW50OiAnL2ludGVncmF0ZWQvZXhwb3J0RG9jdW1lbnRzLycsXHJcbiAgICAgIHVwbG9hZERvY3VtZW50OiAnZG9jdW1lbnQvdXBsb2FkJyxcclxuICAgICAgZ2V0VW5pcXVlSWQ6ICcvdW5pcXVlSWRMb2dpYy8nXHJcbiAgICB9LFxyXG4gICAgQXR0YWNobWVudHM6IHtcclxuICAgICAgY3JlYXRlQXR0YWNobWVudDogJy9hcHAvZm9ybXJlc3BvbnNlYXR0YWNobWVudC9jcmVhdGUnXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iXX0=