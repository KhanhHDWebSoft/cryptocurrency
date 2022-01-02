import { createAction } from '@reduxjs/toolkit';
import { AuthState } from './model';

enum AuthAction {
  runAuthFlow = '@auth/RUN_AUTHENTICATED_FLOW',
  updateMyProfile = '@auth/UPDATE_MY_PROFILE',
  getProfile = '@auth/getProfile',
  setLogged = '@auth/setLogged',
}

const runAuthenticatedFlow = createAction(AuthAction.runAuthFlow);
const updateMyProfile = createAction(AuthAction.updateMyProfile);
const getMyProfile = createAction(AuthAction.getProfile);
const setLogged = createAction<AuthState['isLogged']>(AuthAction.setLogged);
export const authAction = {
  runAuthenticatedFlow,
  updateMyProfile,
  getMyProfile,
  setLogged,
};
