import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './app';

const reducers = {};
const middleware = [];
/*TODO доделать  редюсер*/
/*TODO далее разбить на отдельные файлы для combineReducers(reducers), middleware*/
const store = createStore(combineReducers(reducers), composeWithDevTools(applyMiddleware(thunk)));

function renderApp() {
    return render(
        <Provider store={store}>
            <App />
        </Provider>,
    );
}

export default renderApp;
