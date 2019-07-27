import { notebookModule as moduleName } from 'app/reducer';
import { TState } from 'app/types';
import type { TCatalog } from 'modules/notebook/type';

function selectorCatalogList(state: TState): TCatalog[] {
    return state[moduleName].data;
}

function selectorUpdateCatalogList(state: TState): TCatalog[] {
    return state[moduleName].filter;
}

export {
    selectorCatalogList,
    selectorUpdateCatalogList,
};
