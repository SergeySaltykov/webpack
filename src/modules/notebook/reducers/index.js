// @flow
import { createReducer } from 'redux-act';
import {
    catalogListLoad,
    catalogListSuccess,
    catalogListFail,
    updateList,
} from 'modules/notebook/actions';
import type{ TCatalog, TNoteBookState } from 'modules/notebook/type';
import type { TState } from 'app/types';


const initialState: TNoteBookState = {
    data: [],
    filter: [],
    error: {},
    isLoading: false,
};

const notebook = createReducer({
    [catalogListLoad]: (state: TNoteBookState): TNoteBookState => ({
        ...state,
        isLoading: true,
    }),
    [catalogListSuccess]: (state: TState, payload: TCatalog[]): TNoteBookState => ({
        ...state,
        data: payload,
        filter: payload,
        isLoading: false,
    }),
    [catalogListFail]: (state: TState, error: Object): TNoteBookState => ({
        ...state,
        error,
        isLoading: false,
    }),
    [updateList]: (state: TState, filter: TCatalog[]): TNoteBookState => ({
        ...state,
        filter,
    }),
}, initialState);

export default notebook;
