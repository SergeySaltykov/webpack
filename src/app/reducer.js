import { combineReducers } from 'redux';
import notebook from 'modules/notebook/reducers';

const notebookModule = 'moduleNotebook';

const rootReducer = combineReducers({
    [notebookModule]: notebook,
});

export {
    notebookModule,
    rootReducer,
}
