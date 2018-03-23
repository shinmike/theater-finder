/*global google*/
import React, { Component } from 'react'

var INITIAL_LOCATION = {
  address: 'Vancouver, BC, Canada',
  position: {
    latitude: 49.2827,
    longitude: -123.1207
  }
};

var INITIAL_MAP_ZOOM_LEVEL = 8;

var ATLANTIC_OCEAN = {
  latitude: 29.532804,
  longitude: -55.491477
};

class Test extends Component {

  constructor() {
    super()
    this.state = {
      isGeocodingError: false,
      foundAddress: INITIAL_LOCATION.address
    }
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.mapElement, {
      zoom: INITIAL_MAP_ZOOM_LEVEL,
      center: {
        lat: INITIAL_LOCATION.position.latitude,
        lng: INITIAL_LOCATION.position.longitude
      }
    });
    this.marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: INITIAL_LOCATION.position.latitude,
        lng: INITIAL_LOCATION.position.longitude
      }
    });
    this.geocoder = new google.maps.Geocoder()
  }

  setMapElementReference(mapElementReference) {
    this.mapElement = mapElementReference;
  }

  handleFormSubmit(submitEvent) {
    submitEvent.preventDefault();
    var address = this.searchInputElement.value;
    this.geocodeAddress(address);
  }

  setSearchInputElementReference(inputReference) {
    this.searchInputElement = inputReference;
  }

  geocodeAddress(address) {
    this.geocoder.geocode({ 'address': address }, function handleResults(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        this.setState({
          foundAddress: results[0].formatted_address,
          isGeocodingError: false
        });
        this.map.setCenter(results[0].geometry.location);
        this.marker.setPosition(results[0].geometry.location);
        return;
      }
      this.map.setCenter({
        lat: ATLANTIC_OCEAN.latitude,
        lng: ATLANTIC_OCEAN.longitude
      });
      this.marker.setPosition({
        lat: ATLANTIC_OCEAN.latitude,
        lng: ATLANTIC_OCEAN.longitude
      });
    }.bind(this));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">

            <form className="form-inline" onSubmit={this.handleFormSubmit.bind(this)}>
              <div className="row">
                <div className="col-xs-8 col-sm-10">
                  <div className="form-group">
                    <label className="sr-only" htmlFor="address">Address</label>
                    <input type="text"
                      className="form-control input-lg"
                      id="address"
                      placeholder="Vancouver, BC, Canada"
                      ref={this.setSearchInputElementReference.bind(this)}
                      required />
                  </div>
                </div>
                <div className="col-xs-4 col-sm-2">
                  <button type="submit" className="btn btn-default btn-lg">
                    <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                  </button>
                </div>
              </div>
            </form>

            <br />

            {
              this.state.isGeocodingError
                ?
                <p className="bg-danger">Address not found.</p>
                :
                <p className="bg-info">{this.state.foundAddress}</p>
            }

            <div style={{ width: '100%', height: '100vh' }} className="map" ref={this.setMapElementReference.bind(this)}></div>

          </div>
        </div>
      </div>
    )
  }

}

export default Test;