// @flow
import React from 'react';

type TProps = {
    onChange: (e: HTMLInputElement) => void,
};

class FilterCheckbox extends React.Component<TProps> {
    render() {
        const { onChange } = this.props;

        return (
            <div className="checkbox">
                <input
                    type="checkbox"
                    onChange={onChange}
                />
            </div>
        );
    }
}

export {
    FilterCheckbox,
};
