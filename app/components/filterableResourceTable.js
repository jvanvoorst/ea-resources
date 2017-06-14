import React from 'react';
import PropTypes from 'prop-types';
import {Col} from 'react-bootstrap';

import ResourceTable from './resourceTable';
import FilterSidebar from './filterSidebar';

class FilterableResourceTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchText: '',
            filterObject: {
                university: []
            }
            // metaData: createMetaData(this.props.resources)
        };

        this.handleSearchTextInput = this.handleSearchTextInput.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleSearchTextInput(searchText) {
        this.setState({
            searchText: searchText
        });
    }

    handleCheckboxChange(target) {
        if (target.checked) {
            this.setState((prevState) => {
                filterObject: {
                    university: prevState.filterObject.university.push(target.value);
                }
            });
        } else {
            this.setState((prevState) => {
                filterObject: {
                    university: prevState.filterObject.university.splice(prevState.filterObject.university.indexOf(target.value), 1)
                }
            });
        }

    }

    render() {
        return (
            <div>
                <Col md={3}>
                    <FilterSidebar
                        searchText={this.state.searchText}
                        metaData={this.state.metaData}
                        resources={this.props.resources}
                        onSearchTextInput={this.handleSearchTextInput}
                        onCheckbox={this.handleCheckboxChange}
                    />
                </Col>
                <Col md={9}>
                    <ResourceTable
                        resources={this.props.resources}
                        searchText={this.state.searchText}
                        filterObject={this.state.filterObject}
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
