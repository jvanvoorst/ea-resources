import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'react-bootstrap';

import ResourceTable from './resourceTable';
import SearchBox from './SearchBox';
import Facets from './facets';

class FilterableResourceTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchText: '',
            selectedFacets: {
                university: []
            }
        };

        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleSearchTextChange(searchText) {
        this.setState({
            searchText: searchText,
        });
    }

    handleCheckboxChange(target) {
        if (target.checked) {
            this.setState((prevState) => {
                selectedFacets: {
                    university: prevState.selectedFacets.university.push(target.value)
                }
            });
        } else {
            this.setState((prevState) => {
                selectedFacets: {
                    university: prevState.selectedFacets.university.splice(prevState.selectedFacets.university.indexOf(target.value), 1)
                }
            });
        }

    }

    render() {
        return (
            <div>
                <Row>
                    <Col md={9} mdOffset={3}>
                        <SearchBox
                            searchText={this.state.searchText}
                            onSearchTextChange={this.handleSearchTextChange}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <Facets
                            resources={this.props.resources}
                            searchText={this.state.searchText}
                            onCheckboxChange={this.handleCheckboxChange}
                        />
                    </Col>
                    <Col md={9}>
                        <ResourceTable
                            resources={this.props.resources}
                            searchText={this.state.searchText}
                            selectedFacets={this.state.selectedFacets}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

FilterableResourceTable.propTypes = {
    resources: PropTypes.array.isRequired
};

export default FilterableResourceTable;
