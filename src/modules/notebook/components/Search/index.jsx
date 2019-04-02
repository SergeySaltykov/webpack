// @flow
import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

/* TODO сделать типизирование */
type TProps = {};


class Search extends React.Component<TProps> {
    handleSearchName = (e) => {
        const { catalog, update } = this.props;
        const currentValue = e.target.value.toLowerCase();

        const filter = catalog.filter(user => user.name.toLowerCase().includes(currentValue));
        console.log(filter);

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
