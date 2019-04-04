// @flow
import type { TState } from 'app/types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.css';
import { getCatalogList, updateCatalog } from 'modules/notebook/actions';
import { selectorCatalogList, selectorUpdateCatalogList } from 'modules/notebook/selectors';
import { Search } from 'modules/notebook/components/Search';
import { FilterSelect } from 'modules/notebook/components/FilterSelect';
import { FilterCheckbox } from 'modules/notebook/components/filterCheckbox';

import type { TCatalog } from 'modules/notebook/type';
/*TODO function*/
type TProps = {
    catalog: Array<TCatalog>, /* or TCatalog[] упрощенный вид */
    filter: TCatalog[],
    // getCatalogList: ,
    // updateCatalog: ,
};

function mapStateToProps(state: TState): Object { /* for example */
    return {
        catalog: selectorCatalogList(state),
        filter: selectorUpdateCatalogList(state),
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
        console.log(getCatalogList);
        getCatalogList();
    }

    // componentDidUpdate(nextProps: TProps) {}

    render() {
        const { catalog, updateCatalog, filter } = this.props;

        if (!filter.length) {
            return null;
        }

        return (
            <div>
                <h1>NoteBookContainer</h1>
                <Search catalog={catalog} update={updateCatalog} />
                <FilterSelect catalog={catalog} update={updateCatalog} />
                <FilterCheckbox catalog={catalog} update={updateCatalog} />
                <br />
                {filter.map(({
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
