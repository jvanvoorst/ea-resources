import React from 'react';
import PropTypes from 'prop-types';

import {createFacetsCount} from '../utils/helperFunctions';

class Facets extends React.Component {

    constructor(props) {
        super(props);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleCheckboxChange(event) {
        this.props.onCheckboxChange(event.target);
    }

    render() {
        let metaData = createFacetsCount(this.props.resources, this.props.searchText);

        let facets = Object.keys(metaData.university).map((key) => {
            if (key)
            return (
                <div key={key}>
                    <input
                        type="checkBox"
                        value={key}
                        onChange={this.handleCheckboxChange}
                    />
                    <label htmlFor={key}>{key}</label>
                     <span>{metaData.university[key]}</span>
                </div>
            );
        });

        return (
            <div>
                <p>Universities</p>
                <div>
                    {facets}
                </div>
            </div>
        );
    }
}

Facets.propTypes = {
    onCheckboxChange: PropTypes.func.isRequired,
    resources: PropTypes.array.isRequired,
    searchText: PropTypes.string.isRequired
};

export default Facets;
