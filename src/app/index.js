import renderDom from 'react-dom';
import renderApp from './store';

// import React from 'react';
// import { renderApp } from './store';

const root = document.getElementById('root');

renderDom.hydrate(renderApp, root);
