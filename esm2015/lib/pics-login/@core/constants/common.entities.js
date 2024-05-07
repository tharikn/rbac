import { initializeObject } from "./initializer";
export class ListDataItem {
}
export class DropdownModel {
    constructor(initializer) {
        initializeObject(this, initializer);
    }
}
export class DorpDownRefValues {
}
export class MenuItem {
}
export class TabConfig {
}
export class AttachmentUpload {
}
export class Alert {
}
export var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));
export class UserDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
export class UserRolePageDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
export class UserRoleDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmVudGl0aWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2xvZ2luL3NyYy9saWIvcGljcy1sb2dpbi9AY29yZS9jb25zdGFudHMvY29tbW9uLmVudGl0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxNQUFNLE9BQU8sWUFBWTtDQVN4QjtBQUVELE1BQU0sT0FBTyxhQUFhO0lBR3hCLFlBQVksV0FBMkI7UUFDckMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxpQkFBaUI7Q0FTN0I7QUFFRCxNQUFNLE9BQU8sUUFBUTtDQU9wQjtBQUVELE1BQU0sT0FBTyxTQUFTO0NBYXJCO0FBSUQsTUFBTSxPQUFPLGdCQUFnQjtDQU81QjtBQUVELE1BQU0sT0FBTyxLQUFLO0NBR2pCO0FBRUQsTUFBTSxDQUFOLElBQVksU0FLWDtBQUxELFdBQVksU0FBUztJQUNuQiwrQ0FBTyxDQUFBO0lBQ1AsMkNBQUssQ0FBQTtJQUNMLHlDQUFJLENBQUE7SUFDSiwrQ0FBTyxDQUFBO0FBQ1QsQ0FBQyxFQUxXLFNBQVMsS0FBVCxTQUFTLFFBS3BCO0FBbUJELE1BQU0sT0FBTyxPQUFPO0lBVWxCLFlBQVksSUFBdUI7UUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBQ0QsTUFBTSxPQUFPLGVBQWU7SUFPMUIsWUFBWSxJQUErQjtRQUN6QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7QUFDRCxNQUFNLE9BQU8sV0FBVztJQVV0QixZQUFZLElBQTJCO1FBQ3JDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVPYmplY3QgfSBmcm9tIFwiLi9pbml0aWFsaXplclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExpc3REYXRhSXRlbTxUPiB7XHJcbiAgZGF0YT86IFRbXTtcclxuICBjb3VudD86IG51bWJlcjtcclxuICBwYWdlSWQ6IGFueTtcclxuICBzdGF0dXNrZXk/OiBzdHJpbmc7XHJcbiAgaW50YWtlOiBhbnk7XHJcbiAgY2FzZW51bWJlcjogYW55O1xyXG4gIGR1ZURhdGU6IGFueTtcclxuICBub09mRHVlRGF5czogYW55O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Nb2RlbCB7XHJcbiAgdGV4dD86IHN0cmluZztcclxuICB2YWx1ZTogYW55O1xyXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxpemVyPzogRHJvcGRvd25Nb2RlbCkge1xyXG4gICAgaW5pdGlhbGl6ZU9iamVjdCh0aGlzLCBpbml0aWFsaXplcik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRG9ycERvd25SZWZWYWx1ZXMge1xyXG4gIGFjdGl2ZWZsYWc/OiBudWxsO1xyXG4gIGRlc2NyaXB0aW9uPzogbnVsbDtcclxuICBkaXNwbGF5b3JkZXI/OiBudW1iZXI7XHJcbiAgZGlzcGxheXZhbHVlPzogc3RyaW5nO1xyXG4gIGlkPzogc3RyaW5nO1xyXG4gIGluc2VydGVkQnk/OiBzdHJpbmc7XHJcbiAgcmVma2V5Pzogc3RyaW5nO1xyXG4gIHVwZGF0ZWRCeT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVJdGVtIHtcclxuICBhc3NldG5hbWU/OiBzdHJpbmc7XHJcbiAgYXNzZXR0eXBlPzogbnVtYmVyO1xyXG4gIGlkPzogc3RyaW5nO1xyXG4gIGluc2VydGVkQnk/OiBzdHJpbmc7XHJcbiAgaW5zZXJ0ZWRPbj86IERhdGU7XHJcbiAgcGFyZW50YXNzZXRpZDogYW55O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFiQ29uZmlnIHtcclxuICBhY3RpdmVmbGFnPzogbnVtYmVyO1xyXG4gIGNvbmZpZ2pzb252YWx1ZTogYW55O1xyXG4gIGNvbmZpZ3R5cGU/OiBzdHJpbmc7XHJcbiAgaWQ/OiBzdHJpbmc7XHJcbiAgaW5zZXJ0ZWRCeT86IHN0cmluZztcclxuICBpbnNlcnRlZE9uPzogRGF0ZTtcclxuICBwdXJwb3NlPzogc3RyaW5nO1xyXG4gIHVwZGF0ZWRCeT86IHN0cmluZztcclxuICB1cGRhdGVkT24/OiBEYXRlO1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIFRhYlR5cGU/OiBzdHJpbmc7XHJcbiAgcGFyZW50SWQ/OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBEeW5hbWljT2JqZWN0IHtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEF0dGFjaG1lbnRVcGxvYWQge1xyXG4gIGVuY29kaW5nPzogc3RyaW5nO1xyXG4gIGZpZWxkbmFtZT86IHN0cmluZztcclxuICBtaW1lVHlwZT86IHN0cmluZztcclxuICBvcmlnaW5hbE5hbWU/OiBzdHJpbmc7XHJcbiAgcGF0aD86IHN0cmluZztcclxuICBzaXplPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWxlcnQge1xyXG4gIHR5cGU/OiBBbGVydFR5cGU7XHJcbiAgbWVzc2FnZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQWxlcnRUeXBlIHtcclxuICBTdWNjZXNzLFxyXG4gIEVycm9yLFxyXG4gIEluZm8sXHJcbiAgV2FybmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRoZW1lIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAga2V5OiBzdHJpbmc7XHJcbiAgaW1hZ2U6IGFueTtcclxuICBwcm9wZXJ0aWVzOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9udFNldCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGtleTogc3RyaW5nO1xyXG4gIHByb3BlcnRpZXM6IGFueTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhTdGF0ZSB7XHJcbiAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xyXG4gIHBhZ2VzOiBhbnlbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJEdG8ge1xyXG4gIGlkPzogbnVtYmVyO1xyXG4gIG5hbWU/OiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCBudWxsO1xyXG4gIHByaW9yaXR5PzogbnVtYmVyO1xyXG4gIG9yZGVyPzogbnVtYmVyO1xyXG4gIGRlZmF1bHRwYWdlPzogVXNlclJvbGVQYWdlRHRvO1xyXG4gIGRlZmF1bHRwYWdlaWQ/OiBudW1iZXI7XHJcbiAgcGFyZW50aWQ/OiBudW1iZXIgfCBudWxsO1xyXG4gIHBhcmVudD86IFVzZXJSb2xlRHRvIHwgbnVsbDtcclxuICBjb25zdHJ1Y3RvcihkYXRhPzogUGFydGlhbDxVc2VyRHRvPikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVzZXJSb2xlUGFnZUR0byB7XHJcbiAgaWQ/OiBudW1iZXI7XHJcbiAgbmFtZT86IHN0cmluZztcclxuICByb3V0ZT86IHN0cmluZztcclxuICBpY29uPzogc3RyaW5nIHwgbnVsbDtcclxuICBvcmRlcj86IG51bWJlcjtcclxuICBpc21lbnU/OiBib29sZWFuO1xyXG4gIGNvbnN0cnVjdG9yKGRhdGE/OiBQYXJ0aWFsPFVzZXJSb2xlUGFnZUR0bz4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBVc2VyUm9sZUR0byB7XHJcbiAgaWQ/OiBudW1iZXI7XHJcbiAgbmFtZT86IHN0cmluZztcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZyB8IG51bGw7XHJcbiAgcHJpb3JpdHk/OiBudW1iZXI7XHJcbiAgb3JkZXI/OiBudW1iZXI7XHJcbiAgZGVmYXVsdHBhZ2U/OiBVc2VyUm9sZVBhZ2VEdG87XHJcbiAgZGVmYXVsdHBhZ2VpZD86IG51bWJlcjtcclxuICBwYXJlbnRpZD86IG51bWJlciB8IG51bGw7XHJcbiAgcGFyZW50PzogVXNlclJvbGVEdG8gfCBudWxsO1xyXG4gIGNvbnN0cnVjdG9yKGRhdGE/OiBQYXJ0aWFsPFVzZXJSb2xlRHRvPikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcclxuICB9XHJcbn1cclxuIl19