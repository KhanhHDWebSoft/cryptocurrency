import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createInjectorsEnhancer } from 'redux-injectors';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

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
  middleware: [...getDefaultMiddleware(), ...middleWares],
  devTools: process.env.NODE_ENV !== 'production',
  enhancers,
});
sagaMiddleware.run(rootSaga);

export default store;
