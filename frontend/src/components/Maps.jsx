import React from 'react';
//import ReactDOM from 'react-dom';
import { compose, withProps, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import muiThemeable from 'material-ui/styles/muiThemeable';

export const Maps = compose(
    withProps({
      googleMapURL:
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyCROA6zZ20mgdxFsFf_4s47Nvwe5xRnOSE&v=3.exp&libraries=geometry,drawing,places',
      loadingElement: <div style = {{ height: '100%', width: '100%' }} />,
      containerElement: <div style = {{ height: '400px' }} />,
      mapElement: <div style = {{ height: '100%', width: '100%' }} />
    }),
    /*lifecycle({
        componentWillMount() {
        },
    }),*/
    withScriptjs,
    withGoogleMap,
    muiThemeable(),
    connect()
 )(props => (
    <GoogleMap defaultZoom = { props.zoom } defaultCenter = {{ lat: props.lat, lng: props.lng }}>
      {props.isMarkerShown && (
        <Marker position = {{ lat: props.lat, lng: props.lng }} />
      )}
    </GoogleMap>
  ));