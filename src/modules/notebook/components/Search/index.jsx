// @flow
import React from 'react';

import type { TCatalog } from 'modules/notebook/type';

 /*TODO update: Function,*/
type TProps = {
    catalog: TCatalog[],
    update: Function,
};

class Search extends React.Component<TProps> {
    handleSearchName = (e) => {
        const { catalog, update } = this.props;
        const currentValue = e.target.value.toLowerCase();

        const filter = catalog.filter(user => user.name.toLowerCase().includes(currentValue));

        update(filter);
    };

    render() {
        return (
            <div className="search">
                <input
                    type="text"
                    placeholder="Search people by name..."
                    onChange={this.handleSearchName}
                />
            </div>
        );
    }
}

export {
    Search,
};
