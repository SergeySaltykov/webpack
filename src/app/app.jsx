// @flow
import { NoteBookContainer } from 'modules/notebook/containers/NoteBookContainer';
import React from 'react';

class App extends React.PureComponent {
    render() {
        return (
            <div>
                <h1>header</h1>
                <div>
                    <h1>wrapper</h1>
                    <NoteBookContainer />
                </div>
                <h1>footer</h1>
            </div>
        );
    }
}

export default App;
