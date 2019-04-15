// @flow
import React from 'react';
import renderDom from 'react-dom';
import RenderApp from 'app/store';

const container = document.getElementById('root');

renderDom.hydrate(<RenderApp />, container);
