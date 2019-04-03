// @flow
import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

/* TODO сделать типизирование */
type TProps = {};


class FilterCheckbox extends React.Component<TProps> {
    handleSearchName = (e) => {
        const { catalog, update } = this.props;
        const currentValue = e.target.checked;

        const checked = currentValue ? catalog.filter(user => user.select) : catalog;

        update(checked);
    };

    render() {
        return (
            <div className="checkbox">
                <input
                    type="checkbox"
                    onChange={this.handleSearchName}
                />
            </div>
        );
    }
}


export {
    FilterCheckbox,
};
