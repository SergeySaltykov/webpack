// @flow
import React from 'react';

type TProps = {
    onChange: (e: HTMLInputElement) => void,
};

class Search extends React.Component<TProps> {
    render() {
        const { onChange } = this.props;

        return (
            <div className="search">
                <input
                    type="text"
                    placeholder="Search people by name..."
                    onChange={onChange}
                />
            </div>
        );
    }
}

export {
    Search,
};
