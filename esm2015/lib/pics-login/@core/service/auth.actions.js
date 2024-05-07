import { createAction, props } from '@ngrx/store';
export const authLogout = createAction('[Auth] Logout');
export const authLogin = createAction('[Auth] Login', props());
export const authLoginSuccess = createAction('[Auth] Login Success', props());
export const authLoginFailure = createAction('[Auth] Login Failure', props());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL2xvZ2luL3NyYy9saWIvcGljcy1sb2dpbi9AY29yZS9zZXJ2aWNlL2F1dGguYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVsRCxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRXhELE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRyxZQUFZLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBMEMsQ0FBQyxDQUFDO0FBRXZHLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLFlBQVksQ0FBQyxzQkFBc0IsRUFBRSxLQUFLLEVBQWdDLENBQUMsQ0FBQztBQUU1RyxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsc0JBQXNCLEVBQUUsS0FBSyxFQUE0QyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBY3Rpb24sIHByb3BzIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhMb2dvdXQgPSBjcmVhdGVBY3Rpb24oJ1tBdXRoXSBMb2dvdXQnKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoTG9naW4gPSBjcmVhdGVBY3Rpb24oJ1tBdXRoXSBMb2dpbicsIHByb3BzPHsgdXNlcm5hbWU6IHN0cmluZzsgcGFzc3dvcmQ6IHN0cmluZyB9PigpKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoTG9naW5TdWNjZXNzID0gY3JlYXRlQWN0aW9uKCdbQXV0aF0gTG9naW4gU3VjY2VzcycsIHByb3BzPHsgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuIH0+KCkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhMb2dpbkZhaWx1cmUgPSBjcmVhdGVBY3Rpb24oJ1tBdXRoXSBMb2dpbiBGYWlsdXJlJywgcHJvcHM8eyBpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47IGVycm9yOiBhbnkgfT4oKSk7XHJcbiJdfQ==