export class AppConstants {
    static categoryname = 'REFERRAL_ATTACHMENTS';
    static changePasswordText = 'text';
    static changePasswordPassword = 'password';
    static regexEmail = '^[0-9a-zA-Z.-]+[@][0-9a-zA-Z.-]+[.][0-9a-zA-Z]{2,}$';
    static regexPhone = '^[2-9][0-9]{2}-[2-9][0-9]{2}-[0-9]{4}$';
    static regexName = '^[a-zA-Z]{2,}$';
    static regexZipcode = '^[3][0-9]{4}$';
    static regexSsn = '^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$';
    static regexSsnDigits = /^(\d{3}-?\d{2}-?\d{4}|XXX-XX-XXXX)$/;
    static regexForPhone = '/^[()s-]*(d{8,12}|d{3}[)s-]*d{3}[s-]*d{4}|d{10})[()s-]*$/';
    static formatDate = 'MM/DD/YYYY';
    static camalize = '/[^a-zA-Z0-9]+(.)/g';
    static checSchemaExistQuery = '/(?<=(as|AS)s)("*[a-zA-Zs#~_]*"*)(?=,|(from|FROM))/g';
    static URLVALIDATE = '/(ftp|http|https)://(w+:{0,1}w*@)?(S+)(:[0-9]+)?(/|/([w#!:.?+=&%@!-/]))?/';
    static EventURLValidate;
    static RegexUrlConstant = '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/';
    static statusComments = '/<[^>]*>/g';
    static regexEmailType2 = '^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$';
    static errorMessage = 'Something went wrong!';
    static accessDeniedMessage = 'Access Denied';
    static sessionExpired = 'Your session is expired.';
    static pages = [
        { page: 'admin', title: 'User Management' },
        { page: 'intake-worker', title: 'Dashboard' },
        { page: 'microstrategy', title: 'Analytics' },
        { page: 'form-builder', title: 'Low Code Configurator' },
        { page: 'tab-order', title: 'Low Code Configurator' },
        { page: 'workflow', title: 'Low Code Configurator' },
        { page: 'document-packetization', title: 'Document Packetization' },
        { page: 'email-template', title: 'Email Template' },
        { page: 'chat', title: 'Chat' },
        { page: 'help-desk', title: 'Help' },
        { page: 'ocr-validation', title: 'Referrals' },
        { page: 'event-scheduler', title: 'Event Scheduler' },
        { page: 'config-dashboard', title: 'Config Dashboard' },
        { page: 'config-dashboard-user', title: 'Config Dashboard User' },
        { page: 'forms', title: 'Forms ' },
        { page: 'page-design', title: 'Page Design' },
        { page: 'dashboard-design', title: 'Dashboard Design' },
        { page: 'main-notification', title: 'Notification' },
        { page: 'dynamicPages', title: '' },
        { page: 'profile', title: 'Profile' }
    ];
    static errorList = [
        'Have at least one (1) number',
        'Have at least one (1) special character',
        'Have at least one (1) upper case letter',
        'Have at least one (1) lower case letter',
        'Contain a minimum of eight (8) characters'
    ];
    static referralSource = [
        { value: 'law enforcement', label: 'Law Enforcement' },
        { value: 'citizen complaint', label: 'Citizen Complaint' }
    ];
    static generateNumber() {
        const crypto = window.crypto;
        const array = new Uint32Array(1);
        crypto.getRandomValues(array);
        return array[0];
    }
    static iconList = [
        { label: 'Apps', value: 'apps' },
        { label: 'Admin Settings', value: 'admin_panel_settings' },
        { label: 'Description', value: 'description' },
        { label: 'Analytics', value: 'analytics' },
        { label: 'Settings', value: 'settings' },
        { label: 'Library', value: 'library_books' },
        { label: 'Long Receipt', value: 'receipt_long' },
        { label: 'List', value: 'list' },
        { label: 'Layers', value: 'layers' },
        { label: 'Summarize', value: 'summarize' },
        { label: 'Featured List', value: 'featured_play_list' },
        { label: 'Contract', value: 'contract' },
        { label: 'List Add', value: 'list_alt_add' },
        { label: 'Inactive Order', value: 'inactive_order' },
        { label: 'Receipt', value: 'receipt' },
        { label: 'Dataset', value: 'dataset' },
        { label: 'Density', value: 'density_medium' },
        { label: 'Data Thresholding', value: 'data_thresholding' },
        { label: 'View Comfy', value: 'view_comfy_alt' },
        { label: 'View Compact', value: 'view_compact_alt' },
        { label: 'Rebase', value: 'rebase' },
        { label: 'Data Check', value: 'data_check' },
        { label: 'Check', value: 'check' },
        { label: 'Right Panel Close', value: 'right_panel_close' },
        { label: 'Toolbar', value: 'toolbar' },
        { label: 'User List', value: 'patient_list' },
        { label: 'Tabs', value: 'tabs' },
        { label: 'Single Tab', value: 'tab' },
        { label: 'Shelf Position', value: 'shelf_position' },
        { label: 'Call', value: 'call' },
        { label: 'Bookmark', value: 'bookmark' },
        { label: 'Map', value: 'map' },
        { label: 'Book', value: 'book' },
        { label: 'Box', value: 'box' },
        { label: 'Lock', value: 'lock' },
        { label: 'Star', value: 'star' },
        { label: 'Menu', value: 'menu' },
        { label: 'School', value: 'school' },
        { label: 'Calendar', value: 'calendar_month' },
        { label: 'Circle', value: 'circle' },
        { label: 'Home', value: 'home' },
        { label: 'Bulleted List', value: 'format_list_bulleted' },
        { label: 'Database', value: 'database' },
        { label: 'View Timeline', value: 'view_timeline' },
        { label: 'Settings Account Box', value: 'settings_account_box' },
        { label: 'Iframe', value: 'iframe' },
        { label: 'Bottom Panel Close', value: 'bottom_panel_close' },
        { label: 'Bubbles', value: 'bubbles' },
        { label: 'Task', value: 'task' },
        { label: 'Quiz', value: 'quiz' },
        { label: 'Contact Mail', value: 'contact_mail' },
        { label: 'File Copy', value: 'file_copy' },
        { label: 'Post Add', value: 'post_add' },
        { label: 'Import Contacts', value: 'import_contacts' },
        { label: 'Pending Actions', value: 'pending_actions' },
        { label: 'History Edu', value: 'history_edu' },
        { label: 'Space Dashboard', value: 'space_dashboard' },
        { label: 'Dashboard', value: 'dashboard' },
        { label: 'Table Chart', value: 'table_chart' },
        { label: 'Edit Document', value: 'edit_document' },
    ];
    static defaultVariables = [
        { name: 'User_Name' },
        { name: 'Email_Id' },
        { name: 'Referral_Id' },
        { name: 'Attachment_Details' },
    ];
    static onInput(event, fieldtype, label, required) {
        const validationConfig = [
            {
                type: 'username',
                pattern: {
                    regex: /^[a-zA-ZÀ-ÖØ-öø-ÿ][a-zA-ZÀ-ÖØ-öø-ÿ' -]*$/,
                    errormessage: 'Allowed input - Alphabetic, accented letters, apostrophe, and hyphens.',
                    errormessage2: 'First character should be Alphabetic or accented letters.'
                },
                length: { maxlength: '100', errormessage: 'Input limit - 100 characters.' }
            },
            {
                type: 'description',
                length: { maxlength: '500', errormessage: 'Input limit - 500 characters.' }
            },
            {
                type: 'name',
                pattern: { regex: /^[a-zA-Z0-9-_ ]+$/, errormessage: 'Allowed input - Alpha numeric, hyphen, underscore and space.' },
                length: { maxlength: '100', errormessage: 'Input limit - 100 characters.' }
            },
            {
                type: 'email',
                pattern: { regex: /^[a-zA-Z0-9_]+(?:[.+][a-zA-Z0-9_]+)*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, errormessage: 'Valid Email ID is Required' },
                length: { maxlength: '200', errormessage: 'Input limit - 200 characters.' }
            }
        ];
        const config = validationConfig.find(item => item.type === fieldtype);
        const value = event.target.value;
        if (value) {
            if (config) {
                if (config.pattern) {
                    const pattern = new RegExp(config.pattern.regex);
                    if (fieldtype == 'username') {
                        const firstLetterValid = /^[a-zA-ZÀ-ÖØ-öø-ÿ]/.test(value.charAt(0));
                        if (!firstLetterValid) {
                            return config.pattern.errormessage2;
                        }
                    }
                    const patternValid = pattern.test(value);
                    if (!patternValid) {
                        return config.pattern.errormessage;
                    }
                }
                const maxLength = parseInt(config.length.maxlength);
                if (value.length > maxLength) {
                    return `${label} ${config.length.errormessage}`;
                }
            }
        }
        else {
            if (required) {
                return `${label} is Required`;
            }
        }
        return null; // No error
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWNvbnN0YW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL3BhZ2UtYnVpbGRlci9zcmMvbGliL3BpY3MtcGFnZWJ1aWxkZXIvQGNvcmUvY29uc3RhbnRzL2FwcC1jb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLFlBQVk7SUFDaEIsTUFBTSxDQUFDLFlBQVksR0FBRyxzQkFBc0IsQ0FBQztJQUM3QyxNQUFNLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDO0lBQ25DLE1BQU0sQ0FBQyxzQkFBc0IsR0FBRyxVQUFVLENBQUM7SUFDM0MsTUFBTSxDQUFDLFVBQVUsR0FBRyxxREFBcUQsQ0FBQztJQUMxRSxNQUFNLENBQUMsVUFBVSxHQUFHLHdDQUF3QyxDQUFDO0lBQzdELE1BQU0sQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7SUFDcEMsTUFBTSxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUM7SUFDdEMsTUFBTSxDQUFDLFFBQVEsR0FBRyx5REFBeUQsQ0FBQztJQUM1RSxNQUFNLENBQUMsY0FBYyxHQUFHLHFDQUFxQyxDQUFDO0lBQzlELE1BQU0sQ0FBQyxhQUFhLEdBQUcsMkRBQTJELENBQUM7SUFDbkYsTUFBTSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUM7SUFDakMsTUFBTSxDQUFDLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQztJQUN4QyxNQUFNLENBQUMsb0JBQW9CLEdBQUcsc0RBQXNELENBQUM7SUFDckYsTUFBTSxDQUFDLFdBQVcsR0FBRywyRUFBMkUsQ0FBQztJQUNqRyxNQUFNLENBQUMsZ0JBQWdCLENBQTBEO0lBQ2pGLE1BQU0sQ0FBQyxnQkFBZ0IsR0FDNUIsNklBQTZJLENBQUM7SUFDekksTUFBTSxDQUFDLGNBQWMsR0FBRyxZQUFZLENBQUM7SUFDckMsTUFBTSxDQUFDLGVBQWUsR0FBRyxtQ0FBbUMsQ0FBQztJQUM3RCxNQUFNLENBQUMsWUFBWSxHQUFHLHVCQUF1QixDQUFDO0lBQzlDLE1BQU0sQ0FBQyxtQkFBbUIsR0FBRyxlQUFlLENBQUM7SUFDN0MsTUFBTSxDQUFDLGNBQWMsR0FBRywwQkFBMEIsQ0FBQztJQUNuRCxNQUFNLENBQUMsS0FBSyxHQUFHO1FBQ3BCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUU7UUFDM0MsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7UUFDN0MsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7UUFDN0MsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRTtRQUN4RCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFO1FBQ3JELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUU7UUFDcEQsRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUUsS0FBSyxFQUFFLHdCQUF3QixFQUFFO1FBQ25FLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRTtRQUNuRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtRQUMvQixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtRQUNwQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFO1FBQzlDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRTtRQUNyRCxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUU7UUFDdkQsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFO1FBQ2pFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO1FBQ2xDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFO1FBQzdDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRTtRQUN2RCxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFO1FBQ3BELEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ25DLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO0tBQ3RDLENBQUM7SUFFSyxNQUFNLENBQUMsU0FBUyxHQUFHO1FBQ3hCLDhCQUE4QjtRQUM5Qix5Q0FBeUM7UUFDekMseUNBQXlDO1FBQ3pDLHlDQUF5QztRQUN6QywyQ0FBMkM7S0FDNUMsQ0FBQztJQUVLLE1BQU0sQ0FBQyxjQUFjLEdBQUc7UUFDN0IsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFO1FBQ3RELEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRTtLQUMzRCxDQUFDO0lBRUssTUFBTSxDQUFDLGNBQWM7UUFDMUIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixNQUFNLEtBQUssR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFTSxNQUFNLENBQUMsUUFBUSxHQUFHO1FBQ3ZCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1FBQ2hDLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxzQkFBc0IsRUFBRTtRQUMxRCxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRTtRQUM5QyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtRQUN4QyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRTtRQUM1QyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRTtRQUNoRCxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtRQUNoQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtRQUNwQyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixFQUFFO1FBQ3ZELEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO1FBQ3hDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFO1FBQzVDLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRTtRQUNwRCxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtRQUN0QyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtRQUN0QyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFO1FBQzdDLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRTtRQUMxRCxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFO1FBQ2hELEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUU7UUFDcEQsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7UUFDcEMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUU7UUFDNUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7UUFDbEMsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFO1FBQzFELEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1FBQ3RDLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFO1FBQzdDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1FBQ2hDLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO1FBQ3JDLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRTtRQUNwRCxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtRQUNoQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtRQUN4QyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtRQUM5QixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtRQUNoQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtRQUM5QixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtRQUNoQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtRQUNoQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtRQUNoQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtRQUNwQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFO1FBQzlDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO1FBQ3BDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1FBQ2hDLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsc0JBQXNCLEVBQUU7UUFDekQsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7UUFDeEMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUU7UUFDbEQsRUFBRSxLQUFLLEVBQUUsc0JBQXNCLEVBQUUsS0FBSyxFQUFFLHNCQUFzQixFQUFFO1FBQ2hFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO1FBQ3BDLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRTtRQUM1RCxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtRQUN0QyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtRQUNoQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtRQUNoQyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRTtRQUNoRCxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtRQUN4QyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUU7UUFDdEQsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFO1FBQ3RELEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFO1FBQzlDLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRTtRQUN0RCxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtRQUMxQyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRTtRQUM5QyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRTtLQUNuRCxDQUFBO0lBQ00sTUFBTSxDQUFDLGdCQUFnQixHQUFHO1FBQy9CLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtRQUNyQixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7UUFDcEIsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO1FBQ3ZCLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFO0tBQy9CLENBQUE7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQVUsRUFBRSxTQUFjLEVBQUUsS0FBVSxFQUFFLFFBQWlCO1FBRTdFLE1BQU0sZ0JBQWdCLEdBQUc7WUFDdkI7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE9BQU8sRUFBRTtvQkFDUCxLQUFLLEVBQUUsMENBQTBDO29CQUNqRCxZQUFZLEVBQUUsd0VBQXdFO29CQUN0RixhQUFhLEVBQUUsMkRBQTJEO2lCQUMzRTtnQkFDRCxNQUFNLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSwrQkFBK0IsRUFBRTthQUM1RTtZQUNEO2dCQUNFLElBQUksRUFBRSxhQUFhO2dCQUNuQixNQUFNLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSwrQkFBK0IsRUFBRTthQUM1RTtZQUNEO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsOERBQThELEVBQUU7Z0JBQ3JILE1BQU0sRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLCtCQUErQixFQUFFO2FBQzVFO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLG9FQUFvRSxFQUFFLFlBQVksRUFBRSw0QkFBNEIsRUFBRTtnQkFDcEksTUFBTSxFQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsK0JBQStCLEVBQUU7YUFDNUU7U0FDRixDQUFDO1FBRUYsTUFBTSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQztRQUV0RSxNQUFNLEtBQUssR0FBSSxLQUFLLENBQUMsTUFBMkIsQ0FBQyxLQUFLLENBQUM7UUFFdkQsSUFBSSxLQUFLLEVBQUU7WUFFVCxJQUFJLE1BQU0sRUFBRTtnQkFFVixJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7b0JBQ2xCLE1BQU0sT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRWpELElBQUksU0FBUyxJQUFJLFVBQVUsRUFBRTt3QkFDM0IsTUFBTSxnQkFBZ0IsR0FBRyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7NEJBQ3JCLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7eUJBQ3JDO3FCQUNGO29CQUVELE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxZQUFZLEVBQUU7d0JBQ2pCLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7cUJBQ3BDO2lCQUNGO2dCQUVELE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUyxFQUFFO29CQUM1QixPQUFPLEdBQUcsS0FBSyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7aUJBQ2pEO2FBQ0Y7U0FFRjthQUFNO1lBQ0wsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osT0FBTyxHQUFHLEtBQUssY0FBYyxDQUFDO2FBQy9CO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQyxDQUFDLFdBQVc7SUFDMUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBcHBDb25zdGFudHMge1xyXG4gIHB1YmxpYyBzdGF0aWMgY2F0ZWdvcnluYW1lID0gJ1JFRkVSUkFMX0FUVEFDSE1FTlRTJztcclxuICBwdWJsaWMgc3RhdGljIGNoYW5nZVBhc3N3b3JkVGV4dCA9ICd0ZXh0JztcclxuICBwdWJsaWMgc3RhdGljIGNoYW5nZVBhc3N3b3JkUGFzc3dvcmQgPSAncGFzc3dvcmQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVnZXhFbWFpbCA9ICdeWzAtOWEtekEtWi4tXStbQF1bMC05YS16QS1aLi1dK1suXVswLTlhLXpBLVpdezIsfSQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVnZXhQaG9uZSA9ICdeWzItOV1bMC05XXsyfS1bMi05XVswLTldezJ9LVswLTldezR9JCc7XHJcbiAgcHVibGljIHN0YXRpYyByZWdleE5hbWUgPSAnXlthLXpBLVpdezIsfSQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVnZXhaaXBjb2RlID0gJ15bM11bMC05XXs0fSQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVnZXhTc24gPSAnXig/ITY2NnwwMDB8OVxcXFxkezJ9KVxcXFxkezN9LSg/ITAwKVxcXFxkezJ9LSg/ITB7NH0pXFxcXGR7NH0kJztcclxuICBwdWJsaWMgc3RhdGljIHJlZ2V4U3NuRGlnaXRzID0gL14oXFxkezN9LT9cXGR7Mn0tP1xcZHs0fXxYWFgtWFgtWFhYWCkkLztcclxuICBwdWJsaWMgc3RhdGljIHJlZ2V4Rm9yUGhvbmUgPSAnL15bKClzLV0qKGR7OCwxMn18ZHszfVspcy1dKmR7M31bcy1dKmR7NH18ZHsxMH0pWygpcy1dKiQvJztcclxuICBwdWJsaWMgc3RhdGljIGZvcm1hdERhdGUgPSAnTU0vREQvWVlZWSc7XHJcbiAgcHVibGljIHN0YXRpYyBjYW1hbGl6ZSA9ICcvW15hLXpBLVowLTldKyguKS9nJztcclxuICBwdWJsaWMgc3RhdGljIGNoZWNTY2hlbWFFeGlzdFF1ZXJ5ID0gJy8oPzw9KGFzfEFTKXMpKFwiKlthLXpBLVpzI35fXSpcIiopKD89LHwoZnJvbXxGUk9NKSkvZyc7XHJcbiAgcHVibGljIHN0YXRpYyBVUkxWQUxJREFURSA9ICcvKGZ0cHxodHRwfGh0dHBzKTovLyh3Kzp7MCwxfXcqQCk/KFMrKSg6WzAtOV0rKT8oL3wvKFt3IyE6Lj8rPSYlQCEtL10pKT8vJztcclxuICBwdWJsaWMgc3RhdGljIEV2ZW50VVJMVmFsaWRhdGU6ICcoaHR0cHM/Oi8vKT8oW1xcXFxkYS16Li1dKylcXFxcLihbYS16Ll17Miw2fSlbL1xcXFx3IC4tXSovPyc7XHJcbiAgcHVibGljIHN0YXRpYyBSZWdleFVybENvbnN0YW50ID1cclxuICAgICcvXigoW148PigpW11cXFxcLiw7OnNAXCJdKyguW148PigpW11cXFxcLiw7OnNAXCJdKykqKXwoXCIuK1wiKSlAKChbWzAtOV17MSwzfS5bMC05XXsxLDN9LlswLTldezEsM30uWzAtOV17MSwzfV0pfCgoW2EtekEtWi0wLTldKy4pK1thLXpBLVpdezIsfSkpJC8nO1xyXG4gIHB1YmxpYyBzdGF0aWMgc3RhdHVzQ29tbWVudHMgPSAnLzxbXj5dKj4vZyc7XHJcbiAgcHVibGljIHN0YXRpYyByZWdleEVtYWlsVHlwZTIgPSAnXlteXFxcXHNAXStAW15cXFxcc0BdK1xcXFwuW15cXFxcc0BdezIsfSQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgZXJyb3JNZXNzYWdlID0gJ1NvbWV0aGluZyB3ZW50IHdyb25nISc7XHJcbiAgcHVibGljIHN0YXRpYyBhY2Nlc3NEZW5pZWRNZXNzYWdlID0gJ0FjY2VzcyBEZW5pZWQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgc2Vzc2lvbkV4cGlyZWQgPSAnWW91ciBzZXNzaW9uIGlzIGV4cGlyZWQuJztcclxuICBwdWJsaWMgc3RhdGljIHBhZ2VzID0gW1xyXG4gICAgeyBwYWdlOiAnYWRtaW4nLCB0aXRsZTogJ1VzZXIgTWFuYWdlbWVudCcgfSxcclxuICAgIHsgcGFnZTogJ2ludGFrZS13b3JrZXInLCB0aXRsZTogJ0Rhc2hib2FyZCcgfSxcclxuICAgIHsgcGFnZTogJ21pY3Jvc3RyYXRlZ3knLCB0aXRsZTogJ0FuYWx5dGljcycgfSxcclxuICAgIHsgcGFnZTogJ2Zvcm0tYnVpbGRlcicsIHRpdGxlOiAnTG93IENvZGUgQ29uZmlndXJhdG9yJyB9LFxyXG4gICAgeyBwYWdlOiAndGFiLW9yZGVyJywgdGl0bGU6ICdMb3cgQ29kZSBDb25maWd1cmF0b3InIH0sXHJcbiAgICB7IHBhZ2U6ICd3b3JrZmxvdycsIHRpdGxlOiAnTG93IENvZGUgQ29uZmlndXJhdG9yJyB9LFxyXG4gICAgeyBwYWdlOiAnZG9jdW1lbnQtcGFja2V0aXphdGlvbicsIHRpdGxlOiAnRG9jdW1lbnQgUGFja2V0aXphdGlvbicgfSxcclxuICAgIHsgcGFnZTogJ2VtYWlsLXRlbXBsYXRlJywgdGl0bGU6ICdFbWFpbCBUZW1wbGF0ZScgfSxcclxuICAgIHsgcGFnZTogJ2NoYXQnLCB0aXRsZTogJ0NoYXQnIH0sXHJcbiAgICB7IHBhZ2U6ICdoZWxwLWRlc2snLCB0aXRsZTogJ0hlbHAnIH0sXHJcbiAgICB7IHBhZ2U6ICdvY3ItdmFsaWRhdGlvbicsIHRpdGxlOiAnUmVmZXJyYWxzJyB9LFxyXG4gICAgeyBwYWdlOiAnZXZlbnQtc2NoZWR1bGVyJywgdGl0bGU6ICdFdmVudCBTY2hlZHVsZXInIH0sXHJcbiAgICB7IHBhZ2U6ICdjb25maWctZGFzaGJvYXJkJywgdGl0bGU6ICdDb25maWcgRGFzaGJvYXJkJyB9LFxyXG4gICAgeyBwYWdlOiAnY29uZmlnLWRhc2hib2FyZC11c2VyJywgdGl0bGU6ICdDb25maWcgRGFzaGJvYXJkIFVzZXInIH0sXHJcbiAgICB7IHBhZ2U6ICdmb3JtcycsIHRpdGxlOiAnRm9ybXMgJyB9LFxyXG4gICAgeyBwYWdlOiAncGFnZS1kZXNpZ24nLCB0aXRsZTogJ1BhZ2UgRGVzaWduJyB9LFxyXG4gICAgeyBwYWdlOiAnZGFzaGJvYXJkLWRlc2lnbicsIHRpdGxlOiAnRGFzaGJvYXJkIERlc2lnbicgfSxcclxuICAgIHsgcGFnZTogJ21haW4tbm90aWZpY2F0aW9uJywgdGl0bGU6ICdOb3RpZmljYXRpb24nIH0sXHJcbiAgICB7IHBhZ2U6ICdkeW5hbWljUGFnZXMnLCB0aXRsZTogJycgfSxcclxuICAgIHsgcGFnZTogJ3Byb2ZpbGUnLCB0aXRsZTogJ1Byb2ZpbGUnIH1cclxuICBdO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGVycm9yTGlzdCA9IFtcclxuICAgICdIYXZlIGF0IGxlYXN0IG9uZSAoMSkgbnVtYmVyJyxcclxuICAgICdIYXZlIGF0IGxlYXN0IG9uZSAoMSkgc3BlY2lhbCBjaGFyYWN0ZXInLFxyXG4gICAgJ0hhdmUgYXQgbGVhc3Qgb25lICgxKSB1cHBlciBjYXNlIGxldHRlcicsXHJcbiAgICAnSGF2ZSBhdCBsZWFzdCBvbmUgKDEpIGxvd2VyIGNhc2UgbGV0dGVyJyxcclxuICAgICdDb250YWluIGEgbWluaW11bSBvZiBlaWdodCAoOCkgY2hhcmFjdGVycydcclxuICBdO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlZmVycmFsU291cmNlID0gW1xyXG4gICAgeyB2YWx1ZTogJ2xhdyBlbmZvcmNlbWVudCcsIGxhYmVsOiAnTGF3IEVuZm9yY2VtZW50JyB9LFxyXG4gICAgeyB2YWx1ZTogJ2NpdGl6ZW4gY29tcGxhaW50JywgbGFiZWw6ICdDaXRpemVuIENvbXBsYWludCcgfVxyXG4gIF07XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVOdW1iZXIoKTogYW55IHtcclxuICAgIGNvbnN0IGNyeXB0byA9IHdpbmRvdy5jcnlwdG87XHJcbiAgICBjb25zdCBhcnJheSA9IG5ldyBVaW50MzJBcnJheSgxKTtcclxuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYXJyYXkpO1xyXG4gICAgcmV0dXJuIGFycmF5WzBdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBpY29uTGlzdCA9IFtcclxuICAgIHsgbGFiZWw6ICdBcHBzJywgdmFsdWU6ICdhcHBzJyB9LFxyXG4gICAgeyBsYWJlbDogJ0FkbWluIFNldHRpbmdzJywgdmFsdWU6ICdhZG1pbl9wYW5lbF9zZXR0aW5ncycgfSxcclxuICAgIHsgbGFiZWw6ICdEZXNjcmlwdGlvbicsIHZhbHVlOiAnZGVzY3JpcHRpb24nIH0sXHJcbiAgICB7IGxhYmVsOiAnQW5hbHl0aWNzJywgdmFsdWU6ICdhbmFseXRpY3MnIH0sXHJcbiAgICB7IGxhYmVsOiAnU2V0dGluZ3MnLCB2YWx1ZTogJ3NldHRpbmdzJyB9LFxyXG4gICAgeyBsYWJlbDogJ0xpYnJhcnknLCB2YWx1ZTogJ2xpYnJhcnlfYm9va3MnIH0sXHJcbiAgICB7IGxhYmVsOiAnTG9uZyBSZWNlaXB0JywgdmFsdWU6ICdyZWNlaXB0X2xvbmcnIH0sXHJcbiAgICB7IGxhYmVsOiAnTGlzdCcsIHZhbHVlOiAnbGlzdCcgfSxcclxuICAgIHsgbGFiZWw6ICdMYXllcnMnLCB2YWx1ZTogJ2xheWVycycgfSxcclxuICAgIHsgbGFiZWw6ICdTdW1tYXJpemUnLCB2YWx1ZTogJ3N1bW1hcml6ZScgfSxcclxuICAgIHsgbGFiZWw6ICdGZWF0dXJlZCBMaXN0JywgdmFsdWU6ICdmZWF0dXJlZF9wbGF5X2xpc3QnIH0sXHJcbiAgICB7IGxhYmVsOiAnQ29udHJhY3QnLCB2YWx1ZTogJ2NvbnRyYWN0JyB9LFxyXG4gICAgeyBsYWJlbDogJ0xpc3QgQWRkJywgdmFsdWU6ICdsaXN0X2FsdF9hZGQnIH0sXHJcbiAgICB7IGxhYmVsOiAnSW5hY3RpdmUgT3JkZXInLCB2YWx1ZTogJ2luYWN0aXZlX29yZGVyJyB9LFxyXG4gICAgeyBsYWJlbDogJ1JlY2VpcHQnLCB2YWx1ZTogJ3JlY2VpcHQnIH0sXHJcbiAgICB7IGxhYmVsOiAnRGF0YXNldCcsIHZhbHVlOiAnZGF0YXNldCcgfSxcclxuICAgIHsgbGFiZWw6ICdEZW5zaXR5JywgdmFsdWU6ICdkZW5zaXR5X21lZGl1bScgfSxcclxuICAgIHsgbGFiZWw6ICdEYXRhIFRocmVzaG9sZGluZycsIHZhbHVlOiAnZGF0YV90aHJlc2hvbGRpbmcnIH0sXHJcbiAgICB7IGxhYmVsOiAnVmlldyBDb21meScsIHZhbHVlOiAndmlld19jb21meV9hbHQnIH0sXHJcbiAgICB7IGxhYmVsOiAnVmlldyBDb21wYWN0JywgdmFsdWU6ICd2aWV3X2NvbXBhY3RfYWx0JyB9LFxyXG4gICAgeyBsYWJlbDogJ1JlYmFzZScsIHZhbHVlOiAncmViYXNlJyB9LFxyXG4gICAgeyBsYWJlbDogJ0RhdGEgQ2hlY2snLCB2YWx1ZTogJ2RhdGFfY2hlY2snIH0sXHJcbiAgICB7IGxhYmVsOiAnQ2hlY2snLCB2YWx1ZTogJ2NoZWNrJyB9LFxyXG4gICAgeyBsYWJlbDogJ1JpZ2h0IFBhbmVsIENsb3NlJywgdmFsdWU6ICdyaWdodF9wYW5lbF9jbG9zZScgfSxcclxuICAgIHsgbGFiZWw6ICdUb29sYmFyJywgdmFsdWU6ICd0b29sYmFyJyB9LFxyXG4gICAgeyBsYWJlbDogJ1VzZXIgTGlzdCcsIHZhbHVlOiAncGF0aWVudF9saXN0JyB9LFxyXG4gICAgeyBsYWJlbDogJ1RhYnMnLCB2YWx1ZTogJ3RhYnMnIH0sXHJcbiAgICB7IGxhYmVsOiAnU2luZ2xlIFRhYicsIHZhbHVlOiAndGFiJyB9LFxyXG4gICAgeyBsYWJlbDogJ1NoZWxmIFBvc2l0aW9uJywgdmFsdWU6ICdzaGVsZl9wb3NpdGlvbicgfSxcclxuICAgIHsgbGFiZWw6ICdDYWxsJywgdmFsdWU6ICdjYWxsJyB9LFxyXG4gICAgeyBsYWJlbDogJ0Jvb2ttYXJrJywgdmFsdWU6ICdib29rbWFyaycgfSxcclxuICAgIHsgbGFiZWw6ICdNYXAnLCB2YWx1ZTogJ21hcCcgfSxcclxuICAgIHsgbGFiZWw6ICdCb29rJywgdmFsdWU6ICdib29rJyB9LFxyXG4gICAgeyBsYWJlbDogJ0JveCcsIHZhbHVlOiAnYm94JyB9LFxyXG4gICAgeyBsYWJlbDogJ0xvY2snLCB2YWx1ZTogJ2xvY2snIH0sXHJcbiAgICB7IGxhYmVsOiAnU3RhcicsIHZhbHVlOiAnc3RhcicgfSxcclxuICAgIHsgbGFiZWw6ICdNZW51JywgdmFsdWU6ICdtZW51JyB9LFxyXG4gICAgeyBsYWJlbDogJ1NjaG9vbCcsIHZhbHVlOiAnc2Nob29sJyB9LFxyXG4gICAgeyBsYWJlbDogJ0NhbGVuZGFyJywgdmFsdWU6ICdjYWxlbmRhcl9tb250aCcgfSxcclxuICAgIHsgbGFiZWw6ICdDaXJjbGUnLCB2YWx1ZTogJ2NpcmNsZScgfSxcclxuICAgIHsgbGFiZWw6ICdIb21lJywgdmFsdWU6ICdob21lJyB9LFxyXG4gICAgeyBsYWJlbDogJ0J1bGxldGVkIExpc3QnLCB2YWx1ZTogJ2Zvcm1hdF9saXN0X2J1bGxldGVkJyB9LFxyXG4gICAgeyBsYWJlbDogJ0RhdGFiYXNlJywgdmFsdWU6ICdkYXRhYmFzZScgfSxcclxuICAgIHsgbGFiZWw6ICdWaWV3IFRpbWVsaW5lJywgdmFsdWU6ICd2aWV3X3RpbWVsaW5lJyB9LFxyXG4gICAgeyBsYWJlbDogJ1NldHRpbmdzIEFjY291bnQgQm94JywgdmFsdWU6ICdzZXR0aW5nc19hY2NvdW50X2JveCcgfSxcclxuICAgIHsgbGFiZWw6ICdJZnJhbWUnLCB2YWx1ZTogJ2lmcmFtZScgfSxcclxuICAgIHsgbGFiZWw6ICdCb3R0b20gUGFuZWwgQ2xvc2UnLCB2YWx1ZTogJ2JvdHRvbV9wYW5lbF9jbG9zZScgfSxcclxuICAgIHsgbGFiZWw6ICdCdWJibGVzJywgdmFsdWU6ICdidWJibGVzJyB9LFxyXG4gICAgeyBsYWJlbDogJ1Rhc2snLCB2YWx1ZTogJ3Rhc2snIH0sXHJcbiAgICB7IGxhYmVsOiAnUXVpeicsIHZhbHVlOiAncXVpeicgfSxcclxuICAgIHsgbGFiZWw6ICdDb250YWN0IE1haWwnLCB2YWx1ZTogJ2NvbnRhY3RfbWFpbCcgfSxcclxuICAgIHsgbGFiZWw6ICdGaWxlIENvcHknLCB2YWx1ZTogJ2ZpbGVfY29weScgfSxcclxuICAgIHsgbGFiZWw6ICdQb3N0IEFkZCcsIHZhbHVlOiAncG9zdF9hZGQnIH0sXHJcbiAgICB7IGxhYmVsOiAnSW1wb3J0IENvbnRhY3RzJywgdmFsdWU6ICdpbXBvcnRfY29udGFjdHMnIH0sXHJcbiAgICB7IGxhYmVsOiAnUGVuZGluZyBBY3Rpb25zJywgdmFsdWU6ICdwZW5kaW5nX2FjdGlvbnMnIH0sXHJcbiAgICB7IGxhYmVsOiAnSGlzdG9yeSBFZHUnLCB2YWx1ZTogJ2hpc3RvcnlfZWR1JyB9LFxyXG4gICAgeyBsYWJlbDogJ1NwYWNlIERhc2hib2FyZCcsIHZhbHVlOiAnc3BhY2VfZGFzaGJvYXJkJyB9LFxyXG4gICAgeyBsYWJlbDogJ0Rhc2hib2FyZCcsIHZhbHVlOiAnZGFzaGJvYXJkJyB9LFxyXG4gICAgeyBsYWJlbDogJ1RhYmxlIENoYXJ0JywgdmFsdWU6ICd0YWJsZV9jaGFydCcgfSxcclxuICAgIHsgbGFiZWw6ICdFZGl0IERvY3VtZW50JywgdmFsdWU6ICdlZGl0X2RvY3VtZW50JyB9LFxyXG4gIF1cclxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRWYXJpYWJsZXMgPSBbXHJcbiAgICB7IG5hbWU6ICdVc2VyX05hbWUnIH0sXHJcbiAgICB7IG5hbWU6ICdFbWFpbF9JZCcgfSxcclxuICAgIHsgbmFtZTogJ1JlZmVycmFsX0lkJyB9LFxyXG4gICAgeyBuYW1lOiAnQXR0YWNobWVudF9EZXRhaWxzJyB9LFxyXG4gIF1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBvbklucHV0KGV2ZW50OiBhbnksIGZpZWxkdHlwZTogYW55LCBsYWJlbDogYW55LCByZXF1aXJlZDogYm9vbGVhbikge1xyXG5cclxuICAgIGNvbnN0IHZhbGlkYXRpb25Db25maWcgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiAndXNlcm5hbWUnLFxyXG4gICAgICAgIHBhdHRlcm46IHtcclxuICAgICAgICAgIHJlZ2V4OiAvXlthLXpBLVrDgC3DlsOYLcO2w7gtw79dW2EtekEtWsOALcOWw5gtw7bDuC3DvycgLV0qJC8sXHJcbiAgICAgICAgICBlcnJvcm1lc3NhZ2U6ICdBbGxvd2VkIGlucHV0IC0gQWxwaGFiZXRpYywgYWNjZW50ZWQgbGV0dGVycywgYXBvc3Ryb3BoZSwgYW5kIGh5cGhlbnMuJyxcclxuICAgICAgICAgIGVycm9ybWVzc2FnZTI6ICdGaXJzdCBjaGFyYWN0ZXIgc2hvdWxkIGJlIEFscGhhYmV0aWMgb3IgYWNjZW50ZWQgbGV0dGVycy4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsZW5ndGg6IHsgbWF4bGVuZ3RoOiAnMTAwJywgZXJyb3JtZXNzYWdlOiAnSW5wdXQgbGltaXQgLSAxMDAgY2hhcmFjdGVycy4nIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6ICdkZXNjcmlwdGlvbicsXHJcbiAgICAgICAgbGVuZ3RoOiB7IG1heGxlbmd0aDogJzUwMCcsIGVycm9ybWVzc2FnZTogJ0lucHV0IGxpbWl0IC0gNTAwIGNoYXJhY3RlcnMuJyB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiAnbmFtZScsXHJcbiAgICAgICAgcGF0dGVybjogeyByZWdleDogL15bYS16QS1aMC05LV8gXSskLywgZXJyb3JtZXNzYWdlOiAnQWxsb3dlZCBpbnB1dCAtIEFscGhhIG51bWVyaWMsIGh5cGhlbiwgdW5kZXJzY29yZSBhbmQgc3BhY2UuJyB9LFxyXG4gICAgICAgIGxlbmd0aDogeyBtYXhsZW5ndGg6ICcxMDAnLCBlcnJvcm1lc3NhZ2U6ICdJbnB1dCBsaW1pdCAtIDEwMCBjaGFyYWN0ZXJzLicgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogJ2VtYWlsJyxcclxuICAgICAgICBwYXR0ZXJuOiB7IHJlZ2V4OiAvXlthLXpBLVowLTlfXSsoPzpbLitdW2EtekEtWjAtOV9dKykqQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWl17Mix9JC8sIGVycm9ybWVzc2FnZTogJ1ZhbGlkIEVtYWlsIElEIGlzIFJlcXVpcmVkJyB9LFxyXG4gICAgICAgIGxlbmd0aDogeyBtYXhsZW5ndGg6ICcyMDAnLCBlcnJvcm1lc3NhZ2U6ICdJbnB1dCBsaW1pdCAtIDIwMCBjaGFyYWN0ZXJzLicgfVxyXG4gICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IGNvbmZpZyA9IHZhbGlkYXRpb25Db25maWcuZmluZChpdGVtID0+IGl0ZW0udHlwZSA9PT0gZmllbGR0eXBlKTtcclxuXHJcbiAgICBjb25zdCB2YWx1ZSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcblxyXG4gICAgaWYgKHZhbHVlKSB7XHJcblxyXG4gICAgICBpZiAoY29uZmlnKSB7XHJcblxyXG4gICAgICAgIGlmIChjb25maWcucGF0dGVybikge1xyXG4gICAgICAgICAgY29uc3QgcGF0dGVybiA9IG5ldyBSZWdFeHAoY29uZmlnLnBhdHRlcm4ucmVnZXgpO1xyXG5cclxuICAgICAgICAgIGlmIChmaWVsZHR5cGUgPT0gJ3VzZXJuYW1lJykge1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdExldHRlclZhbGlkID0gL15bYS16QS1aw4Atw5bDmC3DtsO4LcO/XS8udGVzdCh2YWx1ZS5jaGFyQXQoMCkpO1xyXG4gICAgICAgICAgICBpZiAoIWZpcnN0TGV0dGVyVmFsaWQpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gY29uZmlnLnBhdHRlcm4uZXJyb3JtZXNzYWdlMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IHBhdHRlcm5WYWxpZCA9IHBhdHRlcm4udGVzdCh2YWx1ZSk7XHJcbiAgICAgICAgICBpZiAoIXBhdHRlcm5WYWxpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29uZmlnLnBhdHRlcm4uZXJyb3JtZXNzYWdlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWF4TGVuZ3RoID0gcGFyc2VJbnQoY29uZmlnLmxlbmd0aC5tYXhsZW5ndGgpO1xyXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiBtYXhMZW5ndGgpIHtcclxuICAgICAgICAgIHJldHVybiBgJHtsYWJlbH0gJHtjb25maWcubGVuZ3RoLmVycm9ybWVzc2FnZX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChyZXF1aXJlZCkge1xyXG4gICAgICAgIHJldHVybiBgJHtsYWJlbH0gaXMgUmVxdWlyZWRgO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDsgLy8gTm8gZXJyb3JcclxuICB9XHJcbn1cclxuIl19