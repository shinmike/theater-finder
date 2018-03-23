import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';


class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { address: 'Vancouver, BC'}
    this.onChange = (address) => this.setState({address})
  }

  handleFormSubmit(event) {
    event.preventDefault()
    console.log("this.state.address", this.state.address)
    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
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

    return (
      <div className="search-bar">
        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <PlacesAutocomplete inputProps={inputProps} 
                              classNames={cssClasses}
                              // onEnterKeyDown={this.handleEnter}
                              />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;