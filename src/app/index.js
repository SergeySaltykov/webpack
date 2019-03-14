import Component from 'app/component';
import React from 'react';
import renderDom from 'react-dom';

const root = document.getElementById('root');

renderDom.hydrate(<Component/>, root);
