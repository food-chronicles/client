import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { useState } from 'react'
import React, {Component} from "react";
export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAVwNowxQbWmi9tjKODixI_lXesf6ISsZw'
})(MapContainer)