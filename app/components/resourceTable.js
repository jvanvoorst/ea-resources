import React from 'react';
import PropTypes from 'prop-types';

class ResourceTable extends React.Component {

    render() {
        return (
            <table className="table">
                <tbody>
                    {this.props.resources.map((resource) => {
                        let title = resource.title.toLowerCase();
                        let description = resource.description.toLowerCase();
                        let search = this.props.searchText.toLowerCase();

                        if (title.indexOf(search) === -1 && description.indexOf(search) === -1) {
                            return;
                        }

                        if (this.props.selectedFacets.university.length) {
                            if (this.props.selectedFacets.university.indexOf(resource.university) === -1) {
                                return;
                            }
                        }

                        return (
                            <tr key={resource.title}>
                                <td>
                                    <a href={resource.url}><h5>{resource.title}</h5></a>
                                    <p>{resource.description}</p>
                                    <p>{resource.university}</p>
                                    <div className="meta-data">
                                        <div><h5>Geographic Area </h5><span>{resource.geographicArea}</span></div>
                                        <div><h5>Language </h5><span>{resource.language}</span></div>
                                        <div><h5>Period </h5><span>{resource.period}</span></div>
                                        <div><h5>Subject </h5><span>{resource.subject}</span></div>
                                        <div><h5>Material </h5><span>{resource.newMaterial}</span></div>
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
    searchText: PropTypes.string.isRequired,
    selectedFacets: PropTypes.object.isRequired
};

export default ResourceTable;
