// @flow
import React from 'react';

/* TODO сделать типизирование */
type TProps = {};


class FilterSelect extends React.PureComponent<TProps> {
    handleFilterGroup = (e) => {
        const { catalog, update } = this.props;
        const currentValue = e.target.value.toLowerCase();

        if (currentValue !== 'all') {
            const curSelect = catalog.filter(user => user.group.toLowerCase().includes(currentValue));
            update(curSelect);
        } else {
            update(catalog);
        }
    };

    render() {
        const {
            catalog,
        } = this.props;

        return (
            <div className="filter">

                <select name="filter" id="filter" onChange={this.handleFilterGroup}>
                    <option value="all">All</option>
                    {catalog.map(({ group, id }) => (
                        <option key={id} value={group}>{group}</option>
                    ))}
                </select>
            </div>
        );
    }
}


export {
    FilterSelect,
};
