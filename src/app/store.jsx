import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './app';
import { rootReducer } from 'app/reducer';

/* TODO middleware пока что нам не нужен */
// const middleware;

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

function RenderApp() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}


export default RenderApp;
