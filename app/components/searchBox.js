import React from 'react';
import PropTypes from 'prop-types';

class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    }

    handleSearchTextChange(event) {
        this.props.onSearchTextChange(event.target.value);
    }

    render() {
        return (
            <form className="form-inline">
                <div className="form-group">
                    <input
                        className="form-control search-box"
                        type="text"
                        placeholder="Search"
                        value={this.props.searchText}
                        onChange={this.handleSearchTextChange}
                    />
                    <label className="search-label">Search Title and Description</label>
                </div>
            </form>
        );
    }
}

SearchBox.propTypes = {
    searchText: PropTypes.string.isRequired,
    onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBox;
