import React from 'react';
import PropTypes from 'prop-types';
import {Col} from 'react-bootstrap';

import ResourceTable from './resourceTable';
import SearchBox from './SearchBox';
import Facets from './facets';

import {filterResources} from '../utils/helperFunctions';

class FilterableResourceTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchText: '',
            selectedFacets: {
                university: []
            },
            filteredResources: this.props.resources
        };

        this.handleSearchTextInput = this.handleSearchTextInput.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleSearchTextInput(searchText) {
        this.setState({
            searchText: searchText,
            filteredResources: filterResources(this.props.resources, searchText)
        });
    }

    handleCheckboxChange(target) {
        if (target.checked) {
            this.setState((prevState) => {
                selectedFacets: {
                    university: prevState.facets.university.push(target.value)
                }
            });
        } else {
            this.setState((prevState) => {
                selectedFacets: {
                    university: prevState.filterObject.university.splice(prevState.filterObject.university.indexOf(target.value), 1)
                }
            });
        }

    }

    render() {
        return (
            <div>
                <Col md={3}>
                    <SearchBox
                        searchText={this.state.searchText}
                        onSearchTextInput={this.handleSearchTextInput}
                    />
                    <Facets
                        resources={this.state.filteredResources}
                        onCheckbox={this.handleCheckboxChange}
                    />
                </Col>
                <Col md={9}>
                    <ResourceTable
                        resources={this.state.filteredResources}
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
