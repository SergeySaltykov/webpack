// @flow
import React from 'react';

import type { TCatalog } from 'modules/notebook/type';

type TProps = {
    catalog: TCatalog[],
    onChange: (e: HTMLSelectElement) => void,
};

class FilterSelect extends React.PureComponent<TProps> {
    render() {
        const {
            catalog,
            onChange,
        } = this.props;

        return (
            <div className="filter">
                <select name="filter" id="filter" onChange={onChange}>
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
