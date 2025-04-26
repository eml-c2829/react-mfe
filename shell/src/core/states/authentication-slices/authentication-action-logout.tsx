import { WritableDraft } from "immer";
import { AuthenticationState } from "./authentication-state";

export default function logoutAction(state: WritableDraft<AuthenticationState>) : void {
    state.username = '';
    state.isAuthenticated = false;
    localStorage.removeItem('username');
}