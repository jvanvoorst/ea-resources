import React from 'react';
import PropTypes from 'prop-types';
// import {Row, Col} from 'react-bootstrap';

class ResourceTable extends React.Component {


    render() {
        function filter(title, description, search) {
            title = title.toLowerCase();
            description = description.toLowerCase();
            let searchText = search.toLowerCase();

            if (title.indexOf(searchText) === -1 && description.indexOf(searchText) === -1) {
                return true;
            }
        }

        return (
            <table className="table">
                <tbody>
                    {this.props.resources.map((resource) => {
                        if (filter(resource.collectiontitle.$t, resource.description.$t, this.props.searchText)) {
                            return;
                        }
                        return (
                            <tr key={resource.collectiontitle.$t}>
                                <td>
                                    <a href={resource.url.$t}><h5>{resource.collectiontitle.$t}</h5></a>
                                    <p>{resource.description.$t}</p>
                                    <p>{resource.university.$t}</p>
                                    <div className="meta-data">
                                        <div><h5>Geographic Area </h5><span>{resource.geographicareatopic.$t}</span></div>
                                        <div><h5>Language </h5><span>{resource.language.$t}</span></div>
                                        <div><h5>Period </h5><span>{resource.period.$t}</span></div>
                                        <div><h5>Subject </h5><span>{resource.subject.$t}</span></div>
                                        <div><h5>Material </h5><span>{resource.newtypeofmaterial.$t}</span></div>
                                    </div>
                                    <div className="meta-data">
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

ResourceTable.propTypes = {
    resources: PropTypes.array.isRequired,
    searchText: PropTypes.string.isRequired
};

export default ResourceTable;
