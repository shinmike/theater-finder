import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';


class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { address: 'Vancouver, BC'}
    this.onChange = (address) => this.setState({address})
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }
    const cssClasses = {
      root: {
        position: 'relative',
        paddingBottom: '0px',
        backgroundColor: 'red',
      },
      input: {
        display: 'inline-block',
        width: '100%',
        padding: '30px',
      },
      autocompleteContainer: {
        position: 'absolute',
        top: '100%',
        backgroundColor: 'red',
        border: '1px solid #555555',
        width: '100%',
      },
      autocompleteItem: {
        backgroundColor: 'red',
        padding: '10px',
        color: '#555555',
        cursor: 'pointer',
      },
      autocompleteItemActive: {
        backgroundColor: 'red',
      },
    }
    const handleSelect = (address, placeId) => {
      this.setState({ address, placeId})
    }
    return (
      <div className="search-bar">
        <form onSubmit={this.handleFormSubmit}>
          <PlacesAutocomplete inputProps={inputProps} 
                              classNames={cssClasses}
                              onSelect={this.handleSelect}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;