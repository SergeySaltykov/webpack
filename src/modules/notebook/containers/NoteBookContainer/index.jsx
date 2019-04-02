// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.css';
import { getCatalogList, updateCatalog } from 'modules/notebook/actions';
import { selectorCatalogList } from 'modules/notebook/selectors';
import { Search } from 'modules/notebook/components/Search';

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
        updateCatalog,
    }, dispatch);
}

class NoteBookContainer extends React.Component<TProps> {
    componentDidMount() {
        const { getCatalogList } = this.props;

        getCatalogList();
    }

    render() {
        const { catalog, updateCatalog } = this.props;

        if (!catalog.length) {
            return null;
        }

        return (
            <div>
                <h1>NoteBookContainer</h1>
                <Search catalog={catalog} update={updateCatalog} />
                <br />
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
