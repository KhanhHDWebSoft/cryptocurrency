import { PayloadAction } from '@reduxjs/toolkit';
import { call, ForkEffect, put, select, takeLatest } from 'redux-saga/effects';
import { RootState } from '../model';
import { authAction } from './action';

function* watchAuthenticateFlow(action: PayloadAction<any>) {
  console.log('watch auth');
}

function* implementGetProfile() {
  try {
    if (localStorage.getItem('user')) {
      yield put(authAction.setLogged(true));

      // call get profile
      // const profile: User = yield call([apiIns.user, apiIns.user.me]);
      yield put(authAction.runAuthenticatedFlow());
      // yield put(authAction.setLogged(true));
    } else {
      yield put(authAction.setLogged(false));
      localStorage.clear();
    }
  } catch (error) {
    yield put(authAction.setLogged(false));
    localStorage.clear();
  }
}

function* authSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(authAction.runAuthenticatedFlow.type, watchAuthenticateFlow);
  yield takeLatest(authAction.getMyProfile.type, implementGetProfile);
}

export default authSaga;
