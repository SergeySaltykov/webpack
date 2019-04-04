// @flow
import { createAction } from 'redux-act';
import { fetch } from 'whatwg-fetch';

import type { TDispatch, TGetState } from 'app/types';
import type { TCatalog } from 'modules/notebook/type';

const catalogListLoad = createAction('Catalog list load');
const catalogListSuccess = createAction('Catalog list load success');
const catalogListFail = createAction('Catalog list load fail');
const updateList = createAction('Update list');

function getCatalogList() {
    return async (dispatch: TDispatch, getState: TGetState) => { /* for example */
        dispatch(catalogListLoad());

        try {
            const { data } = await fetch('/api/catalog.json').then(r => r.json());
            console.log(data);
            dispatch(catalogListSuccess(data));
        } catch (error) {
            dispatch(catalogListFail());

            throw error;
        }
    };
}

function updateCatalog(data: TCatalog[]) {
    return async (dispatch: TDispatch, getState: TGetState) => {
        dispatch(updateList(data));
    };
}

export {
    catalogListFail,
    catalogListLoad,
    catalogListSuccess,
    getCatalogList,
    updateCatalog,
    updateList,
};
