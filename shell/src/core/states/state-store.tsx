import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authentication-slices/authentication-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;