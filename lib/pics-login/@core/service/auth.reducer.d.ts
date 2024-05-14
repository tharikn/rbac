import { AuthState } from '../constants/common.entities';
import { Action } from '@ngrx/store';
export declare const initialState: AuthState;
export declare function authReducer(state: AuthState | undefined, action: Action): AuthState;
