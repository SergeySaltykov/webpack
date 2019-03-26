import { createReducer } from 'redux-act';
import {
    actionLoading,
    actionSuccess,
    actionFail,
} from 'modules/notebook/actions';

const initialState = {
    data: {},
    isLoading: false,
};

const notebook = createReducer({
    [actionLoading]: state => ({
        ...state,
        isLoading: true,
    }),
    [actionSuccess]: (state, payload) => ({
        ...state,
        data: payload,
        isLoading: false,
    }),
    [actionFail]: (state, error) => ({
        ...state,
        ...error,
        isLoading: false,
    }),
}, initialState);

export default notebook;
