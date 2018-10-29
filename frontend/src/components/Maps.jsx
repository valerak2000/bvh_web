import React, { Component } from 'react';
import { compose, withProps, lifecycle } from 'recompose';
import withTheme from '@material-ui/core/styles/withTheme';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

export const YndxMaps = compose(
    withTheme(),
)(props => {
    const mapState = {
        center: [props.lat, props.lng],
        zoom: props.zoom,
        controls: ['zoomControl', 'fullscreenControl'],
    };

    return (
        <YMaps >
            <Map
                state = { mapState }
                modules= { ['control.ZoomControl', 'control.FullscreenControl'] }
                style = {{ height: '400px' }}
            >
            { 
                props.isMarkerShown 
                && (<Placemark
                        modules = { ['geoObject.addon.balloon'] }
                        defaultGeometry = { mapState.center }
                        properties = {{
                            hintContent: 'Главный офис',
                            balloonContent: props.balloonContent
                        }}
                    />)
            }
            </Map>
        </YMaps>
    );
});
//const Maps = Loader(YndxMaps);

export default YndxMaps;
export { YndxMaps as Maps };

/*
export const Maps = compose(
    withProps({
      googleMapURL:
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyCROA6zZ20mgdxFsFf_4s47Nvwe5xRnOSE&v=3.exp&libraries=geometry,drawing,places',
      loadingElement: <div style = {{ height: '100%', width: '100%' }} />,
      containerElement: <div style = {{ height: '400px' }} />,
      mapElement: <div style = {{ height: '100%', width: '100%' }} />
    }),
    withScriptjs,
    withGoogleMap,
    withTheme(),
 )(props => (
    <GoogleMap
        defaultZoom = { props.zoom }
        defaultCenter = {{ lat: props.lat, lng: props.lng }}
    >
    { 
        props.isMarkerShown 
        && (<Marker
                position = {{ lat: props.lat, lng: props.lng }}
            />)
    }
    </GoogleMap>
  ));

*/