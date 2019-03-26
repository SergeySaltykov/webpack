import { createAction } from 'redux-act';

const actionLoading = createAction('loading');
const actionSuccess = createAction('success');
const actionFail = createAction('fail');

function testAction() {
    return async (dispatch) => {
        dispatch(actionLoading());

        try {
            const data = {
                test: 'test',
            };
            dispatch(actionSuccess(data));
        } catch (error) {
            dispatch(actionFail());

            throw error;
        }
    };
}

export {
    actionLoading,
    actionSuccess,
    actionFail,
    testAction,
};
