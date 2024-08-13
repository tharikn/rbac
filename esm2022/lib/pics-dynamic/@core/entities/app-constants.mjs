const CONFIGURATOR_TITLE = 'Low Code Configurator';
export class AppConstants {
    static categoryname = 'REFERRAL_ATTACHMENTS';
    static changePasswordText = 'text';
    static changePasswordPassword = 'password';
    static regexEmail = '^[0-9a-zA-Z.-]+[@][0-9a-zA-Z.-]+[.][0-9a-zA-Z]{2,}$';
    static regexPhone = '^[2-9][0-9]{2}-[2-9][0-9]{2}-[0-9]{4}$';
    static regexName = '^[a-zA-Z]{2,}$';
    static regexZipcode = '^[3][0-9]{4}$';
    static multiView = 'MV';
    static multiViewRoute = 'master-view';
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
    static providerError = 'Unable to Process the Request Contact support';
    static verificationSuccess = 'Verification code sent successfully';
    static emailVerificationSuccess = 'Link sent successfully. Please check your inbox for further instructions';
    static passwordNotMatch = 'Password does not match';
    static vaildEmail = 'Please enter a valid email';
    static requiredFields = 'Please fill all required fields!';
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
        { page: 'forms', title: 'Forms ' },
        { page: 'page-design', title: 'Page Design' },
        { page: 'dashboard-design', title: 'Dashboard Design' },
        { page: 'main-notification', title: 'Notification' },
        { page: 'dynamicPages', title: '' },
        { page: 'profile', title: 'Profile' }
    ];
    static errorList = [
        'Include at least one number',
        'Include at least one special character',
        'Include at least one upper case letter',
        'Include at least one lower case letter',
        'Be at least 8 characters in length',
        'Should not exceed sixteen (16) characters',
        'Space characters are invalid'
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
                const maxLength = parseInt(config.length.maxlength, 10);
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
        /* No error */
        return null;
    }
    static userTimeOut = 31;
    static userPing = 120;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWNvbnN0YW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvQGNvcmUvZW50aXRpZXMvYXBwLWNvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLGtCQUFrQixHQUFHLHVCQUF1QixDQUFDO0FBQ25ELE1BQU0sT0FBTyxZQUFZO0lBQ2hCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsc0JBQXNCLENBQUM7SUFDN0MsTUFBTSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQztJQUNuQyxNQUFNLENBQUMsc0JBQXNCLEdBQUcsVUFBVSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxVQUFVLEdBQUcscURBQXFELENBQUM7SUFDMUUsTUFBTSxDQUFDLFVBQVUsR0FBRyx3Q0FBd0MsQ0FBQztJQUM3RCxNQUFNLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO0lBQ3BDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsZUFBZSxDQUFDO0lBQ3RDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLE1BQU0sQ0FBQyxjQUFjLEdBQUUsYUFBYSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQyxRQUFRLEdBQUcseURBQXlELENBQUM7SUFDNUUsTUFBTSxDQUFDLGNBQWMsR0FBRyxxQ0FBcUMsQ0FBQztJQUM5RCxNQUFNLENBQUMsYUFBYSxHQUFHLDJEQUEyRCxDQUFDO0lBQ25GLE1BQU0sQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQyxRQUFRLEdBQUcscUJBQXFCLENBQUM7SUFDeEMsTUFBTSxDQUFDLG9CQUFvQixHQUFHLHNEQUFzRCxDQUFDO0lBQ3JGLE1BQU0sQ0FBQyxXQUFXLEdBQUcsMkVBQTJFLENBQUM7SUFDakcsTUFBTSxDQUFDLGdCQUFnQixDQUEwRDtJQUNqRixNQUFNLENBQUMs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QUMzQixNQUFNLGdCQUFnQixHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTs0QkFDckIsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQzt5QkFDckM7cUJBQ0Y7b0JBRUQsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLFlBQVksRUFBRTt3QkFDakIsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztxQkFDcEM7aUJBQ0Y7Z0JBRUQsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RCxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUyxFQUFFO29CQUM1QixPQUFPLEdBQUcsS0FBSyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7aUJBQ2pEO2FBQ0Y7U0FFRjthQUFNO1lBQ0wsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osT0FBTyxHQUFHLEtBQUssY0FBYyxDQUFDO2FBQy9CO1NBQ0Y7UUFDRCxjQUFjO1FBQ2QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ00sTUFBTSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDeEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDT05GSUdVUkFUT1JfVElUTEUgPSAnTG93IENvZGUgQ29uZmlndXJhdG9yJztcclxuZXhwb3J0IGNsYXNzIEFwcENvbnN0YW50cyB7XHJcbiAgcHVibGljIHN0YXRpYyBjYXRlZ29yeW5hbWUgPSAnUkVGRVJSQUxfQVRUQUNITUVOVFMnO1xyXG4gIHB1YmxpYyBzdGF0aWMgY2hhbmdlUGFzc3dvcmRUZXh0ID0gJ3RleHQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgY2hhbmdlUGFzc3dvcmRQYXNzd29yZCA9ICdwYXNzd29yZCc7XHJcbiAgcHVibGljIHN0YXRpYyByZWdleEVtYWlsID0gJ15bMC05YS16QS1aLi1dK1tAXVswLTlhLXpBLVouLV0rWy5dWzAtOWEtekEtWl17Mix9JCc7XHJcbiAgcHVibGljIHN0YXRpYyByZWdleFBob25lID0gJ15bMi05XVswLTldezJ9LVsyLTldWzAtOV17Mn0tWzAtOV17NH0kJztcclxuICBwdWJsaWMgc3RhdGljIHJlZ2V4TmFtZSA9ICdeW2EtekEtWl17Mix9JCc7XHJcbiAgcHVibGljIHN0YXRpYyByZWdleFppcGNvZGUgPSAnXlszXVswLTldezR9JCc7XHJcbiAgcHVibGljIHN0YXRpYyBtdWx0aVZpZXcgPSAnTVYnO1xyXG4gIHB1YmxpYyBzdGF0aWMgbXVsdGlWaWV3Um91dGUgPSdtYXN0ZXItdmlldyc7XHJcbiAgcHVibGljIHN0YXRpYyByZWdleFNzbiA9ICdeKD8hNjY2fDAwMHw5XFxcXGR7Mn0pXFxcXGR7M30tKD8hMDApXFxcXGR7Mn0tKD8hMHs0fSlcXFxcZHs0fSQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVnZXhTc25EaWdpdHMgPSAvXihcXGR7M30tP1xcZHsyfS0/XFxkezR9fFhYWC1YWC1YWFhYKSQvO1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVnZXhGb3JQaG9uZSA9ICcvXlsoKXMtXSooZHs4LDEyfXxkezN9WylzLV0qZHszfVtzLV0qZHs0fXxkezEwfSlbKClzLV0qJC8nO1xyXG4gIHB1YmxpYyBzdGF0aWMgZm9ybWF0RGF0ZSA9ICdNTS9ERC9ZWVlZJztcclxuICBwdWJsaWMgc3RhdGljIGNhbWFsaXplID0gJy9bXmEtekEtWjAtOV0rKC4pL2cnO1xyXG4gIHB1YmxpYyBzdGF0aWMgY2hlY1NjaGVtYUV4aXN0UXVlcnkgPSAnLyg/PD0oYXN8QVMpcykoXCIqW2EtekEtWnMjfl9dKlwiKikoPz0sfChmcm9tfEZST00pKS9nJztcclxuICBwdWJsaWMgc3RhdGljIFVSTFZBTElEQVRFID0gJy8oZnRwfGh0dHB8aHR0cHMpOi8vKHcrOnswLDF9dypAKT8oUyspKDpbMC05XSspPygvfC8oW3cjITouPys9JiVAIS0vXSkpPy8nO1xyXG4gIHB1YmxpYyBzdGF0aWMgRXZlbnRVUkxWYWxpZGF0ZTogJyhodHRwcz86Ly8pPyhbXFxcXGRhLXouLV0rKVxcXFwuKFthLXouXXsyLDZ9KVsvXFxcXHcgLi1dKi8/JztcclxuICBwdWJsaWMgc3RhdGljIFJlZ2V4VXJsQ29uc3RhbnQgPVxyXG4gICAgJy9eKChbXjw+KClbXVxcXFwuLDs6c0BcIl0rKC5bXjw+KClbXVxcXFwuLDs6c0BcIl0rKSopfChcIi4rXCIpKUAoKFtbMC05XXsxLDN9LlswLTldezEsM30uWzAtOV17MSwzfS5bMC05XXsxLDN9XSl8KChbYS16QS1aLTAtOV0rLikrW2EtekEtWl17Mix9KSkkLyc7XHJcbiAgcHVibGljIHN0YXRpYyBzdGF0dXNDb21tZW50cyA9ICcvPFtePl0qPi9nJztcclxuICBwdWJsaWMgc3RhdGljIHJlZ2V4RW1haWxUeXBlMiA9ICdeW15cXFxcc0BdK0BbXlxcXFxzQF0rXFxcXC5bXlxcXFxzQF17Mix9JCc7XHJcbiAgcHVibGljIHN0YXRpYyBlcnJvck1lc3NhZ2UgPSAnU29tZXRoaW5nIHdlbnQgd3JvbmchJztcclxuICBwdWJsaWMgc3RhdGljIGFjY2Vzc0RlbmllZE1lc3NhZ2UgPSAnQWNjZXNzIERlbmllZCc7XHJcbiAgcHVibGljIHN0YXRpYyBzZXNzaW9uRXhwaXJlZCA9ICdZb3VyIHNlc3Npb24gaXMgZXhwaXJlZC4nO1xyXG4gIHB1YmxpYyBzdGF0aWMgcHJvdmlkZXJFcnJvciA9ICdVbmFibGUgdG8gUHJvY2VzcyB0aGUgUmVxdWVzdCBDb250YWN0IHN1cHBvcnQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgdmVyaWZpY2F0aW9uU3VjY2VzcyA9ICdWZXJpZmljYXRpb24gY29kZSBzZW50IHN1Y2Nlc3NmdWxseSc7XHJcbiAgcHVibGljIHN0YXRpYyBlbWFpbFZlcmlmaWNhdGlvblN1Y2Nlc3MgPSAnTGluayBzZW50IHN1Y2Nlc3NmdWxseS4gUGxlYXNlIGNoZWNrIHlvdXIgaW5ib3ggZm9yIGZ1cnRoZXIgaW5zdHJ1Y3Rpb25zJztcclxuICBwdWJsaWMgc3RhdGljIHBhc3N3b3JkTm90TWF0Y2ggPSAnUGFzc3dvcmQgZG9lcyBub3QgbWF0Y2gnO1xyXG4gIHB1YmxpYyBzdGF0aWMgdmFpbGRFbWFpbCA9ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCc7XHJcbiAgcHVibGljIHN0YXRpYyByZXF1aXJlZEZpZWxkcyA9ICdQbGVhc2UgZmlsbCBhbGwgcmVxdWlyZWQgZmllbGRzISc7XHJcbiAgcHVibGljIHN0YXRpYyBwYWdlcyA9IFtcclxuICAgIHsgcGFnZTogJ2FkbWluJywgdGl0bGU6ICdVc2VyIE1hbmFnZW1lbnQnIH0sXHJcbiAgICB7IHBhZ2U6ICdpbnRha2Utd29ya2VyJywgdGl0bGU6ICdEYXNoYm9hcmQnIH0sXHJcbiAgICB7IHBhZ2U6ICdtaWNyb3N0cmF0ZWd5JywgdGl0bGU6ICdBbmFseXRpY3MnIH0sXHJcbiAgICB7IHBhZ2U6ICdmb3JtLWJ1aWxkZXInLCB0aXRsZTogJ0xvdyBDb2RlIENvbmZpZ3VyYXRvcicgfSxcclxuICAgIHsgcGFnZTogJ3RhYi1vcmRlcicsIHRpdGxlOiAnTG93IENvZGUgQ29uZmlndXJhdG9yJyB9LFxyXG4gICAgeyBwYWdlOiAnd29ya2Zsb3cnLCB0aXRsZTogJ0xvdyBDb2RlIENvbmZpZ3VyYXRvcicgfSxcclxuICAgIHsgcGFnZTogJ2RvY3VtZW50LXBhY2tldGl6YXRpb24nLCB0aXRsZTogJ0RvY3VtZW50IFBhY2tldGl6YXRpb24nIH0sXHJcbiAgICB7IHBhZ2U6ICdlbWFpbC10ZW1wbGF0ZScsIHRpdGxlOiAnRW1haWwgVGVtcGxhdGUnIH0sXHJcbiAgICB7IHBhZ2U6ICdjaGF0JywgdGl0bGU6ICdDaGF0JyB9LFxyXG4gICAgeyBwYWdlOiAnaGVscC1kZXNrJywgdGl0bGU6ICdIZWxwJyB9LFxyXG4gICAgeyBwYWdlOiAnb2NyLXZhbGlkYXRpb24nLCB0aXRsZTogJ1JlZmVycmFscycgfSxcclxuICAgIHsgcGFnZTogJ2V2ZW50LXNjaGVkdWxlcicsIHRpdGxlOiAnRXZlbnQgU2NoZWR1bGVyJyB9LFxyXG4gICAgeyBwYWdlOiAnY29uZmlnLWRhc2hib2FyZCcsIHRpdGxlOiAnQ29uZmlnIERhc2hib2FyZCcgfSxcclxuICAgIHsgcGFnZTogJ2Zvcm1zJywgdGl0bGU6ICdGb3JtcyAnIH0sXHJcbiAgICB7IHBhZ2U6ICdwYWdlLWRlc2lnbicsIHRpdGxlOiAnUGFnZSBEZXNpZ24nIH0sXHJcbiAgICB7IHBhZ2U6ICdkYXNoYm9hcmQtZGVzaWduJywgdGl0bGU6ICdEYXNoYm9hcmQgRGVzaWduJyB9LFxyXG4gICAgeyBwYWdlOiAnbWFpbi1ub3RpZmljYXRpb24nLCB0aXRsZTogJ05vdGlmaWNhdGlvbicgfSxcclxuICAgIHsgcGFnZTogJ2R5bmFtaWNQYWdlcycsIHRpdGxlOiAnJyB9LFxyXG4gICAgeyBwYWdlOiAncHJvZmlsZScsIHRpdGxlOiAnUHJvZmlsZScgfVxyXG4gIF07XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZXJyb3JMaXN0ID0gW1xyXG4gICAgJ0luY2x1ZGUgYXQgbGVhc3Qgb25lIG51bWJlcicsXHJcbiAgICAnSW5jbHVkZSBhdCBsZWFzdCBvbmUgc3BlY2lhbCBjaGFyYWN0ZXInLFxyXG4gICAgJ0luY2x1ZGUgYXQgbGVhc3Qgb25lIHVwcGVyIGNhc2UgbGV0dGVyJyxcclxuICAgICdJbmNsdWRlIGF0IGxlYXN0IG9uZSBsb3dlciBjYXNlIGxldHRlcicsXHJcbiAgICAnQmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzIGluIGxlbmd0aCcsXHJcbiAgICAnU2hvdWxkIG5vdCBleGNlZWQgc2l4dGVlbiAoMTYpIGNoYXJhY3RlcnMnLFxyXG4gICAgJ1NwYWNlIGNoYXJhY3RlcnMgYXJlIGludmFsaWQnXHJcbiAgXTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyByZWZlcnJhbFNvdXJjZSA9IFtcclxuICAgIHsgdmFsdWU6ICdsYXcgZW5mb3JjZW1lbnQnLCBsYWJlbDogJ0xhdyBFbmZvcmNlbWVudCcgfSxcclxuICAgIHsgdmFsdWU6ICdjaXRpemVuIGNvbXBsYWludCcsIGxhYmVsOiAnQ2l0aXplbiBDb21wbGFpbnQnIH1cclxuICBdO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlTnVtYmVyKCk6IGFueSB7XHJcbiAgICBjb25zdCBjcnlwdG8gPSB3aW5kb3cuY3J5cHRvO1xyXG4gICAgY29uc3QgYXJyYXkgPSBuZXcgVWludDMyQXJyYXkoMSk7XHJcbiAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGFycmF5KTtcclxuICAgIHJldHVybiBhcnJheVswXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaWNvbkxpc3QgPSBbXHJcbiAgICB7IGxhYmVsOiAnQXBwcycsIHZhbHVlOiAnYXBwcycgfSxcclxuICAgIHsgbGFiZWw6ICdBZG1pbiBTZXR0aW5ncycsIHZhbHVlOiAnYWRtaW5fcGFuZWxfc2V0dGluZ3MnIH0sXHJcbiAgICB7IGxhYmVsOiAnRGVzY3JpcHRpb24nLCB2YWx1ZTogJ2Rlc2NyaXB0aW9uJyB9LFxyXG4gICAgeyBsYWJlbDogJ0FuYWx5dGljcycsIHZhbHVlOiAnYW5hbHl0aWNzJyB9LFxyXG4gICAgeyBsYWJlbDogJ1NldHRpbmdzJywgdmFsdWU6ICdzZXR0aW5ncycgfSxcclxuICAgIHsgbGFiZWw6ICdMaWJyYXJ5JywgdmFsdWU6ICdsaWJyYXJ5X2Jvb2tzJyB9LFxyXG4gICAgeyBsYWJlbDogJ0xvbmcgUmVjZWlwdCcsIHZhbHVlOiAncmVjZWlwdF9sb25nJyB9LFxyXG4gICAgeyBsYWJlbDogJ0xpc3QnLCB2YWx1ZTogJ2xpc3QnIH0sXHJcbiAgICB7IGxhYmVsOiAnTGF5ZXJzJywgdmFsdWU6ICdsYXllcnMnIH0sXHJcbiAgICB7IGxhYmVsOiAnU3VtbWFyaXplJywgdmFsdWU6ICdzdW1tYXJpemUnIH0sXHJcbiAgICB7IGxhYmVsOiAnRmVhdHVyZWQgTGlzdCcsIHZhbHVlOiAnZmVhdHVyZWRfcGxheV9saXN0JyB9LFxyXG4gICAgeyBsYWJlbDogJ0NvbnRyYWN0JywgdmFsdWU6ICdjb250cmFjdCcgfSxcclxuICAgIHsgbGFiZWw6ICdMaXN0IEFkZCcsIHZhbHVlOiAnbGlzdF9hbHRfYWRkJyB9LFxyXG4gICAgeyBsYWJlbDogJ0luYWN0aXZlIE9yZGVyJywgdmFsdWU6ICdpbmFjdGl2ZV9vcmRlcicgfSxcclxuICAgIHsgbGFiZWw6ICdSZWNlaXB0JywgdmFsdWU6ICdyZWNlaXB0JyB9LFxyXG4gICAgeyBsYWJlbDogJ0RhdGFzZXQnLCB2YWx1ZTogJ2RhdGFzZXQnIH0sXHJcbiAgICB7IGxhYmVsOiAnRGVuc2l0eScsIHZhbHVlOiAnZGVuc2l0eV9tZWRpdW0nIH0sXHJcbiAgICB7IGxhYmVsOiAnRGF0YSBUaHJlc2hvbGRpbmcnLCB2YWx1ZTogJ2RhdGFfdGhyZXNob2xkaW5nJyB9LFxyXG4gICAgeyBsYWJlbDogJ1ZpZXcgQ29tZnknLCB2YWx1ZTogJ3ZpZXdfY29tZnlfYWx0JyB9LFxyXG4gICAgeyBsYWJlbDogJ1ZpZXcgQ29tcGFjdCcsIHZhbHVlOiAndmlld19jb21wYWN0X2FsdCcgfSxcclxuICAgIHsgbGFiZWw6ICdSZWJhc2UnLCB2YWx1ZTogJ3JlYmFzZScgfSxcclxuICAgIHsgbGFiZWw6ICdEYXRhIENoZWNrJywgdmFsdWU6ICdkYXRhX2NoZWNrJyB9LFxyXG4gICAgeyBsYWJlbDogJ0NoZWNrJywgdmFsdWU6ICdjaGVjaycgfSxcclxuICAgIHsgbGFiZWw6ICdSaWdodCBQYW5lbCBDbG9zZScsIHZhbHVlOiAncmlnaHRfcGFuZWxfY2xvc2UnIH0sXHJcbiAgICB7IGxhYmVsOiAnVG9vbGJhcicsIHZhbHVlOiAndG9vbGJhcicgfSxcclxuICAgIHsgbGFiZWw6ICdVc2VyIExpc3QnLCB2YWx1ZTogJ3BhdGllbnRfbGlzdCcgfSxcclxuICAgIHsgbGFiZWw6ICdUYWJzJywgdmFsdWU6ICd0YWJzJyB9LFxyXG4gICAgeyBsYWJlbDogJ1NpbmdsZSBUYWInLCB2YWx1ZTogJ3RhYicgfSxcclxuICAgIHsgbGFiZWw6ICdTaGVsZiBQb3NpdGlvbicsIHZhbHVlOiAnc2hlbGZfcG9zaXRpb24nIH0sXHJcbiAgICB7IGxhYmVsOiAnQ2FsbCcsIHZhbHVlOiAnY2FsbCcgfSxcclxuICAgIHsgbGFiZWw6ICdCb29rbWFyaycsIHZhbHVlOiAnYm9va21hcmsnIH0sXHJcbiAgICB7IGxhYmVsOiAnTWFwJywgdmFsdWU6ICdtYXAnIH0sXHJcbiAgICB7IGxhYmVsOiAnQm9vaycsIHZhbHVlOiAnYm9vaycgfSxcclxuICAgIHsgbGFiZWw6ICdCb3gnLCB2YWx1ZTogJ2JveCcgfSxcclxuICAgIHsgbGFiZWw6ICdMb2NrJywgdmFsdWU6ICdsb2NrJyB9LFxyXG4gICAgeyBsYWJlbDogJ1N0YXInLCB2YWx1ZTogJ3N0YXInIH0sXHJcbiAgICB7IGxhYmVsOiAnTWVudScsIHZhbHVlOiAnbWVudScgfSxcclxuICAgIHsgbGFiZWw6ICdTY2hvb2wnLCB2YWx1ZTogJ3NjaG9vbCcgfSxcclxuICAgIHsgbGFiZWw6ICdDYWxlbmRhcicsIHZhbHVlOiAnY2FsZW5kYXJfbW9udGgnIH0sXHJcbiAgICB7IGxhYmVsOiAnQ2lyY2xlJywgdmFsdWU6ICdjaXJjbGUnIH0sXHJcbiAgICB7IGxhYmVsOiAnSG9tZScsIHZhbHVlOiAnaG9tZScgfSxcclxuICAgIHsgbGFiZWw6ICdCdWxsZXRlZCBMaXN0JywgdmFsdWU6ICdmb3JtYXRfbGlzdF9idWxsZXRlZCcgfSxcclxuICAgIHsgbGFiZWw6ICdEYXRhYmFzZScsIHZhbHVlOiAnZGF0YWJhc2UnIH0sXHJcbiAgICB7IGxhYmVsOiAnVmlldyBUaW1lbGluZScsIHZhbHVlOiAndmlld190aW1lbGluZScgfSxcclxuICAgIHsgbGFiZWw6ICdTZXR0aW5ncyBBY2NvdW50IEJveCcsIHZhbHVlOiAnc2V0dGluZ3NfYWNjb3VudF9ib3gnIH0sXHJcbiAgICB7IGxhYmVsOiAnSWZyYW1lJywgdmFsdWU6ICdpZnJhbWUnIH0sXHJcbiAgICB7IGxhYmVsOiAnQm90dG9tIFBhbmVsIENsb3NlJywgdmFsdWU6ICdib3R0b21fcGFuZWxfY2xvc2UnIH0sXHJcbiAgICB7IGxhYmVsOiAnQnViYmxlcycsIHZhbHVlOiAnYnViYmxlcycgfSxcclxuICAgIHsgbGFiZWw6ICdUYXNrJywgdmFsdWU6ICd0YXNrJyB9LFxyXG4gICAgeyBsYWJlbDogJ1F1aXonLCB2YWx1ZTogJ3F1aXonIH0sXHJcbiAgICB7IGxhYmVsOiAnQ29udGFjdCBNYWlsJywgdmFsdWU6ICdjb250YWN0X21haWwnIH0sXHJcbiAgICB7IGxhYmVsOiAnRmlsZSBDb3B5JywgdmFsdWU6ICdmaWxlX2NvcHknIH0sXHJcbiAgICB7IGxhYmVsOiAnUG9zdCBBZGQnLCB2YWx1ZTogJ3Bvc3RfYWRkJyB9LFxyXG4gICAgeyBsYWJlbDogJ0ltcG9ydCBDb250YWN0cycsIHZhbHVlOiAnaW1wb3J0X2NvbnRhY3RzJyB9LFxyXG4gICAgeyBsYWJlbDogJ1BlbmRpbmcgQWN0aW9ucycsIHZhbHVlOiAncGVuZGluZ19hY3Rpb25zJyB9LFxyXG4gICAgeyBsYWJlbDogJ0hpc3RvcnkgRWR1JywgdmFsdWU6ICdoaXN0b3J5X2VkdScgfSxcclxuICAgIHsgbGFiZWw6ICdTcGFjZSBEYXNoYm9hcmQnLCB2YWx1ZTogJ3NwYWNlX2Rhc2hib2FyZCcgfSxcclxuICAgIHsgbGFiZWw6ICdEYXNoYm9hcmQnLCB2YWx1ZTogJ2Rhc2hib2FyZCcgfSxcclxuICAgIHsgbGFiZWw6ICdUYWJsZSBDaGFydCcsIHZhbHVlOiAndGFibGVfY2hhcnQnIH0sXHJcbiAgICB7IGxhYmVsOiAnRWRpdCBEb2N1bWVudCcsIHZhbHVlOiAnZWRpdF9kb2N1bWVudCcgfSxcclxuICBdXHJcbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0VmFyaWFibGVzID0gW1xyXG4gICAgeyBuYW1lOiAnVXNlcl9OYW1lJyB9LFxyXG4gICAgeyBuYW1lOiAnRW1haWxfSWQnIH0sXHJcbiAgICB7IG5hbWU6ICdSZWZlcnJhbF9JZCcgfSxcclxuICAgIHsgbmFtZTogJ0F0dGFjaG1lbnRfRGV0YWlscycgfSxcclxuICBdXHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgb25JbnB1dChldmVudDogYW55LCBmaWVsZHR5cGU6IGFueSwgbGFiZWw6IGFueSwgcmVxdWlyZWQ6IGJvb2xlYW4pIHtcclxuXHJcbiAgICBjb25zdCB2YWxpZGF0aW9uQ29uZmlnID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgICB0eXBlOiAndXNlcm5hbWUnLFxyXG4gICAgICAgICAgcGF0dGVybjoge1xyXG4gICAgICAgICAgICAgIHJlZ2V4OiAvXlthLXpBLVrDgC3DlsOYLcO2w7gtw79dW2EtekEtWsOALcOWw5gtw7bDuC3DvycgLV0qJC8sXHJcbiAgICAgICAgICAgICAgZXJyb3JtZXNzYWdlOiAnQWxsb3dlZCBpbnB1dCAtIEFscGhhYmV0aWMsIGFjY2VudGVkIGxldHRlcnMsIGFwb3N0cm9waGUsIGFuZCBoeXBoZW5zLicsXHJcbiAgICAgICAgICAgICAgZXJyb3JtZXNzYWdlMjogJ0ZpcnN0IGNoYXJhY3RlciBzaG91bGQgYmUgQWxwaGFiZXRpYyBvciBhY2NlbnRlZCBsZXR0ZXJzLidcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBsZW5ndGg6IHsgbWF4bGVuZ3RoOiAnMTAwJywgZXJyb3JtZXNzYWdlOiAnSW5wdXQgbGltaXQgLSAxMDAgY2hhcmFjdGVycy4nIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICAgdHlwZTogJ2Rlc2NyaXB0aW9uJyxcclxuICAgICAgICAgIGxlbmd0aDogeyBtYXhsZW5ndGg6ICc1MDAnLCBlcnJvcm1lc3NhZ2U6ICdJbnB1dCBsaW1pdCAtIDUwMCBjaGFyYWN0ZXJzLicgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgICB0eXBlOiAnbmFtZScsXHJcbiAgICAgICAgICBwYXR0ZXJuOiB7IHJlZ2V4OiAvXlthLXpBLVowLTktXyBdKyQvLCBlcnJvcm1lc3NhZ2U6ICdBbGxvd2VkIGlucHV0IC0gQWxwaGEgbnVtZXJpYywgaHlwaGVuLCB1bmRlcnNjb3JlIGFuZCBzcGFjZS4nIH0sXHJcbiAgICAgICAgICBsZW5ndGg6IHsgbWF4bGVuZ3RoOiAnMTAwJywgZXJyb3JtZXNzYWdlOiAnSW5wdXQgbGltaXQgLSAxMDAgY2hhcmFjdGVycy4nIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICAgdHlwZTogJ2VtYWlsJyxcclxuICAgICAgICAgIHBhdHRlcm46IHsgcmVnZXg6IC9eW2EtekEtWjAtOV9dKyg/OlsuK11bYS16QS1aMC05X10rKSpAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aXXsyLH0kLywgZXJyb3JtZXNzYWdlOiAnVmFsaWQgRW1haWwgSUQgaXMgUmVxdWlyZWQnIH0sXHJcbiAgICAgICAgICBsZW5ndGg6IHsgbWF4bGVuZ3RoOiAnMjAwJywgZXJyb3JtZXNzYWdlOiAnSW5wdXQgbGltaXQgLSAyMDAgY2hhcmFjdGVycy4nIH1cclxuICAgICAgfVxyXG4gIF07XHJcblxyXG4gICAgY29uc3QgY29uZmlnID0gdmFsaWRhdGlvbkNvbmZpZy5maW5kKGl0ZW0gPT4gaXRlbS50eXBlID09PSBmaWVsZHR5cGUpO1xyXG5cclxuICAgIGNvbnN0IHZhbHVlID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuXHJcbiAgICBpZiAodmFsdWUpIHtcclxuXHJcbiAgICAgIGlmIChjb25maWcpIHtcclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5wYXR0ZXJuKSB7XHJcbiAgICAgICAgICBjb25zdCBwYXR0ZXJuID0gbmV3IFJlZ0V4cChjb25maWcucGF0dGVybi5yZWdleCk7XHJcblxyXG4gICAgICAgICAgaWYgKGZpZWxkdHlwZSA9PSAndXNlcm5hbWUnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0TGV0dGVyVmFsaWQgPSAvXlthLXpBLVrDgC3DlsOYLcO2w7gtw79dLy50ZXN0KHZhbHVlLmNoYXJBdCgwKSk7XHJcbiAgICAgICAgICAgIGlmICghZmlyc3RMZXR0ZXJWYWxpZCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBjb25maWcucGF0dGVybi5lcnJvcm1lc3NhZ2UyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29uc3QgcGF0dGVyblZhbGlkID0gcGF0dGVybi50ZXN0KHZhbHVlKTtcclxuICAgICAgICAgIGlmICghcGF0dGVyblZhbGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25maWcucGF0dGVybi5lcnJvcm1lc3NhZ2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtYXhMZW5ndGggPSBwYXJzZUludChjb25maWcubGVuZ3RoLm1heGxlbmd0aCwxMCk7XHJcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IG1heExlbmd0aCkge1xyXG4gICAgICAgICAgcmV0dXJuIGAke2xhYmVsfSAke2NvbmZpZy5sZW5ndGguZXJyb3JtZXNzYWdlfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHJlcXVpcmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke2xhYmVsfSBpcyBSZXF1aXJlZGA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIE5vIGVycm9yICovXHJcbiAgICByZXR1cm4gbnVsbDsgXHJcbiAgfVxyXG4gIHB1YmxpYyBzdGF0aWMgdXNlclRpbWVPdXQgPSAzMTtcclxuICBwdWJsaWMgc3RhdGljIHVzZXJQaW5nID0gMTIwO1xyXG59XHJcbiJdfQ==