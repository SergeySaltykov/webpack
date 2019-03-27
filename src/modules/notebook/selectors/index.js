import { notebookModule as moduleName } from 'app/reducer';

function selectorCatalogList(state) {
    return state[moduleName].data;
}

export {
    selectorCatalogList,
};
