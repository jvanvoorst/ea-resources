import React from 'react';
import PropTypes from 'prop-types';

class Facets extends React.Component {

    constructor(props) {
        super(props);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleCheckboxChange(event) {
        this.props.onCheckbox(event.target);
    }

    render() {
        return (
            <p>Universities</p>

            // {Object.keys(metaData).map((key) => {
            //     return (
            //         <div key={key}>
            //             <input
            //                 type="checkBox"
            //                 value={key}
            //                 onChange={this.handleCheckboxChange}
            //             />
            //             <label htmlFor={key}>{key}</label>
            //             <span>{metaData[key]}</span>
            //         </div>
            //     );
            // })};
        );
    }
}

Facets.propTypes = {
    onCheckbox: PropTypes.func.isRequired
};
