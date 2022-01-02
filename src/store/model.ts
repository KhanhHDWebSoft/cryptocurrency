import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import store from './store';

export type RootState = ReturnType<typeof store.getState>;
export type InjectSelector<T> = RootState & T;

type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
