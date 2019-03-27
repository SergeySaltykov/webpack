// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.css';
import { getCatalogList } from 'modules/notebook/actions';
import { selectorCatalogList } from 'modules/notebook/selectors';

/* TODO сделать типизирование */
type TProps = {
    // catalog: string,
    // getCatalogList: getCatalogList<typeof >,
};

function mapStateToProps(state) {
    return {
        catalog: selectorCatalogList(state),
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getCatalogList,
    }, dispatch);
}

class NoteBookContainer extends React.Component<TProps> {
    componentDidMount() {
        const { getCatalogList } = this.props;
        getCatalogList();
    }

    render() {
        const { catalog } = this.props;

        if (!catalog.length) {
            return null;
        }
        console.log(this.props);
        return (
            <div>
                <h1>NoteBookContainer</h1>
                {catalog.map(({
                    name, phone, birthday, group, id,
                }) => (
                    <div key={id}>
                        {name}
                        {' '}
                        |
                        {' '}
                        {phone}
                        {' '}
                        |
                        {' '}
                        {birthday}
                        {' '}
                        |
                        {' '}
                        {group}
                    </div>
                ))}
            </div>
        );
    }
}

const NoteBookContainerHOC = connect(mapStateToProps, mapDispatchToProps)(NoteBookContainer);

export {
    NoteBookContainerHOC as NoteBookContainer,
};
