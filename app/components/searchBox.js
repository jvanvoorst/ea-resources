import React from 'react';
import PropTypes from 'prop-types';

class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    }

    handleSearchTextChange(event) {
        this.props.onSearchTextInput(event.target.value);
    }



    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search"
                    value={this.props.searchText}
                    onChange={this.handleSearchTextChange}
                />
            </form>
        );
    }
}


SearchBox.propTypes = {
    searchText: PropTypes.string.isRequired,
    onSearchTextInput: PropTypes.func.isRequired,
};

export default SearchBox;
