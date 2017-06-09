import React from 'react';
import PropTypes from 'prop-types';

class ResourceTable extends React.Component {

    render() {
        return (
            <ul>
                {this.props.resources.map(function(resource) {
                    return (
                        <li key={resource.collectiontitle.$t}>
                            {resource.collectiontitle.$t}
                        </li>
                    );
                })}
            </ul>
        );
    }
}

ResourceTable.propTypes = {
    resources: PropTypes.array.isRequired
};

export default ResourceTable;
