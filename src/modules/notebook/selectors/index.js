import { notebookModule as moduleName } from 'app/reducer';

function testSelector(state) {
    return state[moduleName].data;
}

export {
    testSelector,
};
