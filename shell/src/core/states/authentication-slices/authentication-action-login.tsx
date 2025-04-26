import { WritableDraft } from "immer";
import { AuthenticationState } from "./authentication-state";

type LoginPayload = {
    username: string,
    role: string
}

type LoginAction = {
    type: string,
    payload: LoginPayload
}

export default function loginAction(state: WritableDraft<AuthenticationState>, action: LoginAction) : void {
    state.username = action.payload.username;
    state.role = action.payload.role;
    state.isAuthenticated = true;
    localStorage.setItem('username', action.payload.username);
}