import React, { Component } from 'react';
import { compose, withProps, lifecycle } from 'recompose';
import { useTheme } from '@mui/material/styles';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

export const YndxMaps = compose(
    withProps((props) => ({
        theme: props.theme
    })),
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
                sx = {{ height: '400px' }}
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

const MapsWithTheme = (props) => {
    const theme = useTheme();
    return <YndxMaps {...props} theme={theme} />;
};

export default MapsWithTheme;
export { YndxMaps as Maps };
