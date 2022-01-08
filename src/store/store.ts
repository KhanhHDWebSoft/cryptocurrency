import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createInjectorsEnhancer } from 'redux-injectors';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';
import { cryptoApi } from 'services/cryptoApis';
import { cryptoNewsApi } from 'services/cryptoNewsApis';

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];
const { run: runSaga } = sagaMiddleware;

const enhancers = [
  createInjectorsEnhancer({
    createReducer: rootReducer,
    runSaga,
  }),
];

const store = configureStore({
  reducer: rootReducer(),
  middleware: [cryptoApi.middleware, cryptoNewsApi.middleware ,...getDefaultMiddleware(), ...middleWares],
  devTools: process.env.NODE_ENV !== 'production',
  enhancers,
});
sagaMiddleware.run(rootSaga);

export default store;
