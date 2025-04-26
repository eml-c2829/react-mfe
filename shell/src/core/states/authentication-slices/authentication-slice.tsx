import { createSlice } from '@reduxjs/toolkit';
import { AuthenticationState } from './authentication-state';
import loginAction from './authentication-action-login';
import logoutAction from './authentication-action-logout';


const initialState: AuthenticationState = {
  username: localStorage.getItem('username') || undefined,
  isAuthenticated: !!localStorage.getItem('username'),
  role: localStorage.getItem('role') || undefined
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: loginAction,
    logout: logoutAction
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
