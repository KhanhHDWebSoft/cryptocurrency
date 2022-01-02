import { createReducer } from '@reduxjs/toolkit';
import { authAction } from './action';
import { AuthState } from './model';

const initialState: AuthState = {
  isLogged: null,
};

const authReducer = createReducer(initialState, (builder) =>
  builder.addCase(authAction.setLogged, (state, action) => {
    state.isLogged = action.payload;
  })
);

export default authReducer;
