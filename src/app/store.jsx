// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from 'app/reducer';
import type { TStore } from 'app/types';
import App from './app';

/* TODO middleware пока что нам не нужен */
// const middleware;

function configStore(): TStore {
    return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
}

function RenderApp() {
    return (
        <Provider store={configStore()}>
            <App />
        </Provider>
    );
}


export default RenderApp;
