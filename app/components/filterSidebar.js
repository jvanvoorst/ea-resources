import React from 'react';
import PropTypes from 'prop-types';

import {createMetaData} from '../utils/helperFunctions';

class FilterSidebar extends React.Component {

    constructor(props) {
        super(props);

        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleSearchTextChange(event) {
        this.props.onSearchTextInput(event.target.value);
    }

    handleCheckboxChange(event) {
        this.props.onCheckbox(event.target);
    }

    render() {
        let metaData = createMetaData(this.props.resources).university;
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search"
                    value={this.props.searchText}
                    onChange={this.handleSearchTextChange}
                />
                <p>Universities</p>
                {Object.keys(metaData).map((key) => {
                    return (
                        <div key={key}>
                            <input
                                type="checkBox"
                                value={key}
                                onChange={this.handleCheckboxChange}
                            />
                            <label htmlFor={key}>{key}</label>
                            <span>{metaData[key]}</span>
                        </div>
                    );
                })}
            </form>
        );
    }
}


FilterSidebar.propTypes = {
    searchText: PropTypes.string.isRequired,
    resources: PropTypes.array.isRequired,
    onSearchTextInput: PropTypes.func.isRequired,
    onCheckbox: PropTypes.func.isRequired
};

export default FilterSidebar;
