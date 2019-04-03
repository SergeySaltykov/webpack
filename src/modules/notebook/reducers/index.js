import { createReducer } from 'redux-act';
import {
    catalogListLoad,
    catalogListSuccess,
    catalogListFail,
    updateList,
} from 'modules/notebook/actions';

const initialState = {
    data: [],
    filter: [],
    isLoading: false,
};

const notebook = createReducer({
    [catalogListLoad]: state => ({
        ...state,
        isLoading: true,
    }),
    [catalogListSuccess]: (state, payload) => ({
        ...state,
        data: payload,
        filter: payload,
        isLoading: false,
    }),
    [catalogListFail]: (state, error) => ({
        ...state,
        ...error,
        isLoading: false,
    }),
    [updateList]: (state, filter) => ({
        ...state,
        filter,
    }),
}, initialState);

export default notebook;
