import React from 'react';
import PropTypes from 'prop-types';
import {Col} from 'react-bootstrap';

import ResourceTable from './resourceTable';

class FilterableResourceTable extends React.Component {

    render() {
        return (
            <div>
                <Col md={3}>
                    <h3>filters</h3>
                </Col>
                <Col md={9}>
                    <ResourceTable resources={this.props.resources}/>
                </Col>
            </div>
        );
    }
}

FilterableResourceTable.propTypes = {
    resources: PropTypes.array.isRequired
};

export default FilterableResourceTable;
