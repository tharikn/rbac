import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
const credentialsKey = 'jwt-token';
/**
 * Provides storage for authentication credentials.
 * The Credentials interface should be replaced with proper implementation.
 */
export class CredentialsService {
    token = null;
    constructor() {
        const savedCredentials = sessionStorage.getItem(credentialsKey);
        if (savedCredentials) {
            this.token = savedCredentials;
        }
    }
    /**
     * Checks is the user is authenticated.
     * @return True if the user is authenticated.
     */
    isAuthenticated() {
        return !!this.credentials;
    }
    /**
     * Gets the user credentials.
     * @return The user credentials or null if the user is not authenticated.
     */
    get credentials() {
        const savedCredentials = sessionStorage.getItem(credentialsKey);
        if (savedCredentials) {
            this.token = savedCredentials;
        }
        return this.token;
    }
    /**
     * Sets the user credentials.
     * The credentials may be persisted across sessions by setting the `remember` parameter to true.
     * Otherwise, the credentials are only persisted for the current session.
     * @param credentials The user credentials.
     * @param remember True to remember credentials across sessions.
     */
    setCredentials(credentials) {
        this.token = credentials || null;
        if (credentials) {
            sessionStorage.setItem(credentialsKey, credentials);
        }
        else {
            sessionStorage.clear();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CredentialsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CredentialsService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CredentialsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlZGVudGlhbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL2R5bmFtaWMvc3JjL2xpYi9waWNzLWR5bmFtaWMvQGNvcmUvc2VydmljZS9jcmVkZW50aWFscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUTNDLE1BQU0sY0FBYyxHQUFHLFdBQVcsQ0FBQztBQUVuQzs7O0dBR0c7QUFJSCxNQUFNLE9BQU8sa0JBQWtCO0lBQ3JCLEtBQUssR0FBa0IsSUFBSSxDQUFDO0lBRXBDO1FBQ0UsTUFBTSxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksZ0JBQWdCLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBSSxXQUFXO1FBQ2IsTUFBTSxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksZ0JBQWdCLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztTQUMvQjtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsY0FBYyxDQUFDLFdBQW9CO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxJQUFJLElBQUksQ0FBQztRQUNqQyxJQUFJLFdBQVcsRUFBRTtZQUNmLGNBQWMsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3JEO2FBQU07WUFDTCxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO3dHQTVDVSxrQkFBa0I7NEdBQWxCLGtCQUFrQixjQUZqQixNQUFNOzs0RkFFUCxrQkFBa0I7a0JBSDlCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDcmVkZW50aWFscyB7XHJcbiAgLy8gQ3VzdG9taXplIHJlY2VpdmVkIGNyZWRlbnRpYWxzIGhlcmVcclxuICB1c2VybmFtZTogc3RyaW5nO1xyXG4gIHRva2VuOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IGNyZWRlbnRpYWxzS2V5ID0gJ2p3dC10b2tlbic7XHJcblxyXG4vKipcclxuICogUHJvdmlkZXMgc3RvcmFnZSBmb3IgYXV0aGVudGljYXRpb24gY3JlZGVudGlhbHMuXHJcbiAqIFRoZSBDcmVkZW50aWFscyBpbnRlcmZhY2Ugc2hvdWxkIGJlIHJlcGxhY2VkIHdpdGggcHJvcGVyIGltcGxlbWVudGF0aW9uLlxyXG4gKi9cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3JlZGVudGlhbHNTZXJ2aWNlIHtcclxuICBwcml2YXRlIHRva2VuOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBjb25zdCBzYXZlZENyZWRlbnRpYWxzID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShjcmVkZW50aWFsc0tleSk7XHJcbiAgICBpZiAoc2F2ZWRDcmVkZW50aWFscykge1xyXG4gICAgICB0aGlzLnRva2VuID0gc2F2ZWRDcmVkZW50aWFscztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpcyB0aGUgdXNlciBpcyBhdXRoZW50aWNhdGVkLlxyXG4gICAqIEByZXR1cm4gVHJ1ZSBpZiB0aGUgdXNlciBpcyBhdXRoZW50aWNhdGVkLlxyXG4gICAqL1xyXG4gIGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIXRoaXMuY3JlZGVudGlhbHM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSB1c2VyIGNyZWRlbnRpYWxzLlxyXG4gICAqIEByZXR1cm4gVGhlIHVzZXIgY3JlZGVudGlhbHMgb3IgbnVsbCBpZiB0aGUgdXNlciBpcyBub3QgYXV0aGVudGljYXRlZC5cclxuICAgKi9cclxuICBnZXQgY3JlZGVudGlhbHMoKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICBjb25zdCBzYXZlZENyZWRlbnRpYWxzID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShjcmVkZW50aWFsc0tleSk7XHJcbiAgICBpZiAoc2F2ZWRDcmVkZW50aWFscykge1xyXG4gICAgICB0aGlzLnRva2VuID0gc2F2ZWRDcmVkZW50aWFscztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnRva2VuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgdXNlciBjcmVkZW50aWFscy5cclxuICAgKiBUaGUgY3JlZGVudGlhbHMgbWF5IGJlIHBlcnNpc3RlZCBhY3Jvc3Mgc2Vzc2lvbnMgYnkgc2V0dGluZyB0aGUgYHJlbWVtYmVyYCBwYXJhbWV0ZXIgdG8gdHJ1ZS5cclxuICAgKiBPdGhlcndpc2UsIHRoZSBjcmVkZW50aWFscyBhcmUgb25seSBwZXJzaXN0ZWQgZm9yIHRoZSBjdXJyZW50IHNlc3Npb24uXHJcbiAgICogQHBhcmFtIGNyZWRlbnRpYWxzIFRoZSB1c2VyIGNyZWRlbnRpYWxzLlxyXG4gICAqIEBwYXJhbSByZW1lbWJlciBUcnVlIHRvIHJlbWVtYmVyIGNyZWRlbnRpYWxzIGFjcm9zcyBzZXNzaW9ucy5cclxuICAgKi9cclxuICBzZXRDcmVkZW50aWFscyhjcmVkZW50aWFscz86IHN0cmluZykge1xyXG4gICAgdGhpcy50b2tlbiA9IGNyZWRlbnRpYWxzIHx8IG51bGw7XHJcbiAgICBpZiAoY3JlZGVudGlhbHMpIHtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShjcmVkZW50aWFsc0tleSwgY3JlZGVudGlhbHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19