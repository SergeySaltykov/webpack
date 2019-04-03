import { notebookModule as moduleName } from 'app/reducer';

function selectorCatalogList(state) {
    return state[moduleName].data;
}

function selectorUpdateCatalogList(state) {
    return state[moduleName].filter;
}

export {
    selectorCatalogList,
    selectorUpdateCatalogList,
};
