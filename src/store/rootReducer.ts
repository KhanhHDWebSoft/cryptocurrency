import { combineReducers } from '@reduxjs/toolkit';
import { cryptoApi } from 'services/cryptoApis';
import { cryptoNewsApi } from 'services/cryptoNewsApis';
import authReducer from './auth/reducer';

export const rootReducer = (injectedReducers = {}) => {
  return combineReducers({
    ...injectedReducers,
    auth: authReducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer
  });
};
