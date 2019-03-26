// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.css';
import { testAction } from 'modules/notebook/actions';
import { testSelector } from 'modules/notebook/selectors';

/*TODO сделать типизирование*/
type TProps = {
    // selector: string,
    // testAction: func,
};

function mapStateToProps(state) {
    return {
        selector: testSelector(state),
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        testAction,
    }, dispatch);
}

class NoteBookContainer extends React.Component<TProps> {
    componentDidMount() {
        const { testAction } = this.props;
        testAction();
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>NoteBookContainer</h1>
            </div>
        );
    }
}

const NoteBookContainerHOC = connect(mapStateToProps, mapDispatchToProps)(NoteBookContainer);

export {
    NoteBookContainerHOC as NoteBookContainer,
};
