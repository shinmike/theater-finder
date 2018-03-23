import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

class Map extends Component {

  constructor(){
    super()
    this.state = {
      map: null
    }
  }

  mapMoved(){
    console.log('mapMoved: ' + JSON.stringify(this.state.map.getCenter()))
  }

  zoomChanged(){
    console.log('zoomChanged:'+ this.state.map.getZoom())
  }

  mapLoaded(map){
    if (this.state.map != null) {
      return
    }
    this.setState({
      map: map
    })
  }

  render() {
    return ( 
      <GoogleMap
        ref={this.mapLoaded.bind(this)}
        onDragEnd={this.mapMoved.bind(this)}
        onZoomChanged={this.zoomChanged.bind(this)}
        defaultZoom={this.props.zoom}
        defaultCenter={this.props.center}>
        <Marker
          position={this.props.center}
        />
      </GoogleMap>
    )
  }
}

export default withGoogleMap(Map)