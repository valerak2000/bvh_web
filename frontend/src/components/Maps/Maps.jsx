import React from 'react';
import { useTheme } from '@mui/material/styles';
//import { YMaps, Map, Placemark } from '@iminside/react-yandex-maps';

const YndxMaps = (props) => {
    const mapState = {
        center: [props.lat, props.lng],
        zoom: props.zoom,
        controls: ['zoomControl', 'fullscreenControl']
    };

    const apiKey = process.env.YANDEX_MAPS_API_KEY || '';

    return (
        <YMaps query={{ apikey: apiKey, lang: 'ru_RU' }}>
            <Map
                state={mapState}
                modules={['control.ZoomControl', 'control.FullscreenControl']}
                sx={{ height: '400px' }}
            >
                {props.isMarkerShown && (
                    <Placemark
                        modules={['geoObject.addon.balloon']}
                        defaultGeometry={mapState.center}
                        properties={{
                            hintContent: 'Главный офис',
                            balloonContent: props.balloonContent
                        }}
                    />
                )}
            </Map>
        </YMaps>
    );
};

const MapsWithTheme = (props) => {
    const theme = useTheme();
    return <YndxMaps {...props} theme={theme} />;
};

export default MapsWithTheme;
export { YndxMaps as Maps };
