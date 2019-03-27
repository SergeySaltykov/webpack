import { createAction } from 'redux-act';
import { fetch } from 'whatwg-fetch';

const catalogListLoad = createAction('Catalog list load');
const catalogListSuccess = createAction('Catalog list load success');
const catalogListFail = createAction('Catalog list load fail');

function getCatalogList() {
    return async (dispatch) => {
        dispatch(catalogListLoad());

        try {
            const { data } = await fetch('/api/catalog.json').then(r => r.json());

            dispatch(catalogListSuccess(data));
        } catch (error) {
            dispatch(catalogListFail());

            throw error;
        }
    };
}

export {
    catalogListLoad,
    catalogListSuccess,
    catalogListFail,
    getCatalogList,
};
