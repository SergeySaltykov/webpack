// @flow

import React from 'react';
import type {Props} from './types';
import './style.css';

class Component3 extends React.Component<Props> {
    render() {
        return (
            <div className="component3">
               <h1>Третий компонент</h1>
                <h2>{this.props.text}</h2>
            </div>
        );
    }
}

export {
    Component3,
};

