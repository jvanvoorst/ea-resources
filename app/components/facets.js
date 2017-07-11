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
            // if (key)
            return (
                <form key={key} className="form-inline">
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="checkBox"
                            value={key}
                            onChange={this.handleCheckboxChange}
                        />
                        <label className="label-text" htmlFor={key}>{key}</label>
                         <span>{metaData.university[key]}</span>
                     </div>
                </form>
            );
        });

        return (
            <div>
                <h4>Universities</h4>
                <hr></hr>
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
