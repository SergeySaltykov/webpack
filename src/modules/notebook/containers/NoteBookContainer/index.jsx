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
import type { SyntheticInputEvent, SyntheticEvent } from 'react';

type TProps = {
    catalog: Array<TCatalog>, /* or TCatalog[] упрощенный вид */
    filter: TCatalog[],
    getCatalogList: bindActionCreators<typeof getCatalogList>,
    updateCatalog: bindActionCreators<typeof updateCatalog>,
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

        getCatalogList();
    }

    // componentDidUpdate(nextProps: TProps) {}

    handleChangeSearchName = (e: SyntheticInputEvent<HTMLInputElement>): void => {
        const { catalog, updateCatalog } = this.props;
        const currentValue = e.target.value.toLowerCase();

        const filter = catalog.filter(user => user.name.toLowerCase().includes(currentValue));

        updateCatalog(filter);
    };

    handleChangeFilterGroup = (e: SyntheticEvent<HTMLSelectElement>):void => {
        const { catalog, updateCatalog } = this.props;
        const currentValue = e.target.value.toLowerCase();

        if (currentValue !== 'all') {
            const curSelect = catalog.filter(user => user.group.toLowerCase().includes(currentValue));
            updateCatalog(curSelect);
        } else {
            updateCatalog(catalog);
        }
    };

    handleChangeCheckbox = (e: SyntheticInputEvent<HTMLInputElement>):void => {
        const { catalog, updateCatalog } = this.props;
        const currentValue = e.currentTarget.checked;

        const checked = currentValue ? catalog.filter(user => user.select) : catalog;

        updateCatalog(checked);
    };

    render() {
        const { catalog, filter } = this.props;

        if (!filter.length) {
            return null;
        }

        return (
            <div>
                <h1>NoteBookContainer</h1>
                <Search onChange={this.handleChangeSearchName} />
                <FilterSelect catalog={catalog} onChange={this.handleChangeFilterGroup} />
                <FilterCheckbox onChange={this.handleChangeCheckbox} />
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
