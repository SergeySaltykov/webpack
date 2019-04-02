import { createReducer } from 'redux-act';
import {
    catalogListLoad,
    catalogListSuccess,
    catalogListFail,
    updateList,
} from 'modules/notebook/actions';

const initialState = {
    data: {},
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
        isLoading: false,
    }),
    [catalogListFail]: (state, error) => ({
        ...state,
        ...error,
        isLoading: false,
    }),
    [updateList]: (state, filter) => ({
        ...state,
        data: filter,
    }),
}, initialState);

export default notebook;
