export class PageBuilderAddURL {
    static EndPoints = {
        page_config: {
            pageVersion: '/platform/page-designer/pageversion/{id}',
            page: '/platform/page-designer/page',
            dbSchema: '/database/',
            page_lock: '/platform/page-designer/page/{id}/lock',
            assetByVersion: '/platform/page-designer/asset/batch/{pageid}/version/{versionid}',
            pageExist: '/platform/page-designer/page/{pagename}/{orgid}',
            pageaudit: '/platform/page-designer/page/audit/pageaudit/{id}/{id2}',
            orgPageList: '/platform/page-designer/page/organization/{orgid}?returnUserPage=false&excludeNoActiveVersionPages=true'
        },
        rbac: {
            asset: {
                listByPageID: '/asset/getpagebyid',
                batch: '/asset/batch/'
            },
            organization: {
                list: '/platform/page-designer/page/organization/'
            }
        },
        report: {
            report: '/report'
        },
        db: {
            schemaList: '/database/organization/{organizationid}/{dbstring}',
            tableBySchemaName: '/database/{schema}/{dbstring}',
            relatedTableFields: '/database/{table}/{schema}/{dbstring}/related',
            columnsOfRelatedTables: '/database/{table}/related',
            fieldsOfRelatedTable: '/database/related',
            tableFields: '/database/{table}/{schema}/{dbstring}/validColumn'
        },
        attachment: {
            uploadKey: '/common/files/upload-key',
            list: '/solution/formresponse-attachment/{formid}/{responseid}',
            delete: '/solution/formresponse-attachment/{fileid}',
            downloadKey: '/file/download-key'
        }
    };
}
export class RBACINFO {
    unsubscribe() {
        throw new Error('Method not implemented.');
    }
    apiHost = '';
    tokenKey = '';
    others;
    orgID;
    chatServer;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1idWlsZGVyLWFkZC11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvcGFnZS1idWlsZGVyL3NyYy9saWIvcGljcy1wYWdlYnVpbGRlci9AY29yZS91cmwvcGFnZS1idWlsZGVyLWFkZC11cmwuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxpQkFBaUI7SUFDckIsTUFBTSxDQUFDLFNBQVMsR0FBRztRQUN4QixXQUFXLEVBQUU7WUFDWCxXQUFXLEVBQUUsMENBQTBDO1lBQ3ZELElBQUksRUFBRSw4QkFBOEI7WUFDcEMsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFLHdDQUF3QztZQUNuRCxjQUFjLEVBQUUsa0VBQWtFO1lBQ2xGLFNBQVMsRUFBRSxpREFBaUQ7WUFDNUQsU0FBUyxFQUFFLHlEQUF5RDtZQUNwRSxXQUFXLEVBQUUseUdBQXlHO1NBQ3ZIO1FBQ0QsSUFBSSxFQUFFO1lBQ0osS0FBSyxFQUFFO2dCQUNMLFlBQVksRUFBRSxvQkFBb0I7Z0JBQ2xDLEtBQUssRUFBRSxlQUFlO2FBQ3ZCO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLElBQUksRUFBRSw0Q0FBNEM7YUFDbkQ7U0FDRjtRQUNELE1BQU0sRUFBRTtZQUNOLE1BQU0sRUFBRSxTQUFTO1NBQ2xCO1FBQ0QsRUFBRSxFQUFFO1lBQ0YsVUFBVSxFQUFFLG9EQUFvRDtZQUNoRSxpQkFBaUIsRUFBRSwrQkFBK0I7WUFDbEQsa0JBQWtCLEVBQUUsK0NBQStDO1lBQ25FLHNCQUFzQixFQUFFLDJCQUEyQjtZQUNuRCxvQkFBb0IsRUFBRSxtQkFBbUI7WUFDekMsV0FBVyxFQUFFLG1EQUFtRDtTQUNqRTtRQUNELFVBQVUsRUFBRTtZQUNWLFNBQVMsRUFBRSwwQkFBMEI7WUFDckMsSUFBSSxFQUFFLHlEQUF5RDtZQUMvRCxNQUFNLEVBQUUsNENBQTRDO1lBQ3BELFdBQVcsRUFBRSxvQkFBb0I7U0FDbEM7S0FDRixDQUFDOztBQUVKLE1BQU0sT0FBTyxRQUFRO0lBQ25CLFdBQVc7UUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELE9BQU8sR0FBRSxFQUFFLENBQUM7SUFDWixRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ2QsTUFBTSxDQUFPO0lBQ2IsS0FBSyxDQUFPO0lBQ1osVUFBVSxDQUFVO0lBQ3BCLFdBQVcsQ0FBZTtDQUMzQjtBQUNELE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFlBQVksQ0FBVTtJQUN0QixZQUFZLENBQVU7SUFDdEIsT0FBTyxDQUFVO0lBQ2pCLGFBQWEsQ0FBVTtJQUN2QixhQUFhLENBQVU7SUFDdkIsUUFBUSxDQUFTO0NBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBhZ2VCdWlsZGVyQWRkVVJMIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50cyA9IHtcclxuICAgIHBhZ2VfY29uZmlnOiB7XHJcbiAgICAgIHBhZ2VWZXJzaW9uOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcGFnZXZlcnNpb24ve2lkfScsXHJcbiAgICAgIHBhZ2U6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdlJyxcclxuICAgICAgZGJTY2hlbWE6ICcvZGF0YWJhc2UvJyxcclxuICAgICAgcGFnZV9sb2NrOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcGFnZS97aWR9L2xvY2snLFxyXG4gICAgICBhc3NldEJ5VmVyc2lvbjogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL2Fzc2V0L2JhdGNoL3twYWdlaWR9L3ZlcnNpb24ve3ZlcnNpb25pZH0nLFxyXG4gICAgICBwYWdlRXhpc3Q6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdlL3twYWdlbmFtZX0ve29yZ2lkfScsXHJcbiAgICAgIHBhZ2VhdWRpdDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BhZ2UvYXVkaXQvcGFnZWF1ZGl0L3tpZH0ve2lkMn0nLFxyXG4gICAgICBvcmdQYWdlTGlzdDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BhZ2Uvb3JnYW5pemF0aW9uL3tvcmdpZH0/cmV0dXJuVXNlclBhZ2U9ZmFsc2UmZXhjbHVkZU5vQWN0aXZlVmVyc2lvblBhZ2VzPXRydWUnXHJcbiAgICB9LFxyXG4gICAgcmJhYzoge1xyXG4gICAgICBhc3NldDoge1xyXG4gICAgICAgIGxpc3RCeVBhZ2VJRDogJy9hc3NldC9nZXRwYWdlYnlpZCcsXHJcbiAgICAgICAgYmF0Y2g6ICcvYXNzZXQvYmF0Y2gvJ1xyXG4gICAgICB9LFxyXG4gICAgICBvcmdhbml6YXRpb246IHtcclxuICAgICAgICBsaXN0OiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcGFnZS9vcmdhbml6YXRpb24vJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVwb3J0OiB7XHJcbiAgICAgIHJlcG9ydDogJy9yZXBvcnQnXHJcbiAgICB9LFxyXG4gICAgZGI6IHtcclxuICAgICAgc2NoZW1hTGlzdDogJy9kYXRhYmFzZS9vcmdhbml6YXRpb24ve29yZ2FuaXphdGlvbmlkfS97ZGJzdHJpbmd9JyxcclxuICAgICAgdGFibGVCeVNjaGVtYU5hbWU6ICcvZGF0YWJhc2Uve3NjaGVtYX0ve2Ric3RyaW5nfScsXHJcbiAgICAgIHJlbGF0ZWRUYWJsZUZpZWxkczogJy9kYXRhYmFzZS97dGFibGV9L3tzY2hlbWF9L3tkYnN0cmluZ30vcmVsYXRlZCcsXHJcbiAgICAgIGNvbHVtbnNPZlJlbGF0ZWRUYWJsZXM6ICcvZGF0YWJhc2Uve3RhYmxlfS9yZWxhdGVkJyxcclxuICAgICAgZmllbGRzT2ZSZWxhdGVkVGFibGU6ICcvZGF0YWJhc2UvcmVsYXRlZCcsXHJcbiAgICAgIHRhYmxlRmllbGRzOiAnL2RhdGFiYXNlL3t0YWJsZX0ve3NjaGVtYX0ve2Ric3RyaW5nfS92YWxpZENvbHVtbidcclxuICAgIH0sXHJcbiAgICBhdHRhY2htZW50OiB7XHJcbiAgICAgIHVwbG9hZEtleTogJy9jb21tb24vZmlsZXMvdXBsb2FkLWtleScsXHJcbiAgICAgIGxpc3Q6ICcvc29sdXRpb24vZm9ybXJlc3BvbnNlLWF0dGFjaG1lbnQve2Zvcm1pZH0ve3Jlc3BvbnNlaWR9JyxcclxuICAgICAgZGVsZXRlOiAnL3NvbHV0aW9uL2Zvcm1yZXNwb25zZS1hdHRhY2htZW50L3tmaWxlaWR9JyxcclxuICAgICAgZG93bmxvYWRLZXk6ICcvZmlsZS9kb3dubG9hZC1rZXknXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5leHBvcnQgY2xhc3MgUkJBQ0lORk8ge1xyXG4gIHVuc3Vic2NyaWJlKCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xyXG4gIH1cclxuICBhcGlIb3N0ID0nJztcclxuICB0b2tlbktleSA9ICcnO1xyXG4gIG90aGVycz86IGFueTtcclxuICBvcmdJRD86IGFueTtcclxuICBjaGF0U2VydmVyPzogc3RyaW5nO1xyXG4gIGVudmlyb25tZW50PzogRW52aXJvbm1lbnQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcclxuICBtc3RyVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgbXN0clBhc3N3b3JkPzogc3RyaW5nO1xyXG4gIG1zdHJVUkw/OiBzdHJpbmc7XHJcbiAgbXN0clByb2plY3RJRD86IHN0cmluZztcclxuICBhcHBsaWNhdGlvbmlkPzogc3RyaW5nO1xyXG4gIHByaW9yaXR5Pzogc3RyaW5nXHJcbn1cclxuXHJcbiJdfQ==