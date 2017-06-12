import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';

class ResourceTable extends React.Component {

    render() {
        return (
            <ul>
                {this.props.resources.map(function(resource) {
                    return (
                        <Row key={resource.collectiontitle.$t}>
                            <li>
                                <Col md={6}>
                                    <a href={resource.url.$t}>{resource.collectiontitle.$t}</a>
                                    <p>{resource.description.$t}</p>
                                </Col>
                                <Col md={6}>
                                    <h5>University</h5><p>{resource.university.$t}</p>
                                </Col>
                            </li>
                        </Row>
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
