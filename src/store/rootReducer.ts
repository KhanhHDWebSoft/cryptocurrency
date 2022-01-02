import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/reducer';

export const rootReducer = (injectedReducers = {}) => {
  return combineReducers({
    ...injectedReducers,
    auth: authReducer,
  });
};
