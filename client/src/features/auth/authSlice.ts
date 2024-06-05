import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AuthState } from '../../app/types';

const initialState: AuthState = {
  tokens: {
    access_token: null,
    id_token: null,
  },
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens: (state, action: PayloadAction<AuthState>) => {
      console.log('action.payload: ', action.payload);
      state.tokens = action.payload.tokens;
      console.log('state: ', state);
    },
    clearTokens: (state) => {
      state.tokens.access_token = null;
      state.tokens.id_token = null;
    },
  },
});

export const { setTokens, clearTokens } = authSlice.actions;
export default authSlice.reducer;
