import React from 'react';
import PropTypes from 'prop-types';

import ResourceTable from './resourceTable';

class FilterableResourceTable extends React.Component {

    render() {
        return (
            <ResourceTable resources={this.props.resources}/>
        );
    }
}

FilterableResourceTable.propTypes = {
    resources: PropTypes.array.isRequired
};

export default FilterableResourceTable;
