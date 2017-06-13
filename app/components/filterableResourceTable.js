import React from 'react';
import PropTypes from 'prop-types';
import {Col} from 'react-bootstrap';

import ResourceTable from './resourceTable';
import Filter from './filter';

class FilterableResourceTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchText: ''
        };

        this.handleSearchTextInput = this.handleSearchTextInput.bind(this);
    }

    handleSearchTextInput(searchText) {
        this.setState({
            searchText: searchText
        });
    }

    render() {
        return (
            <div>
                <Col md={3}>
                    <Filter
                        searchText={this.state.searchText}
                        onSearchTextInput={this.handleSearchTextInput}
                    />
                </Col>
                <Col md={9}>
                    <ResourceTable
                        resources={this.props.resources}
                        searchText={this.state.searchText}
                    />
                </Col>
            </div>
        );
    }
}

FilterableResourceTable.propTypes = {
    resources: PropTypes.array.isRequired
};

export default FilterableResourceTable;
