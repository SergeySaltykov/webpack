// @flow

import { TRootReducer } from 'app/reducer';
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

type ExtractReturnFunction = <V>(() => V) => V;

export type TActionDefault = {
    payload?: {},
    type: string,
};

export type TState = $ObjMap<TRootReducer, ExtractReturnFunction>;
export type TGetState = () => TState;
export type TStore = ReduxStore<TState, TActionDefault>;
export type TDispatch =
    & ReduxDispatch<TActionDefault>
    & TThunk<TActionDefault>
export type TThunk<A> = ((TDispatch, TGetState) => Promise<void> | void) => A;
