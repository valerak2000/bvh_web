import React from 'react';
import MapRouteSchema from './MapRouteSchema.d.ts';
import { useTheme } from '@mui/material/styles';

const YndxMaps = (props) => {
    const mapState = {
        title: props.title,
        balloonContent: props.balloonContent,
        center: [props.lat, props.lng],
        zoom: props.zoom,
        controls: ['zoomControl', 'fullscreenControl']
    };
    const apiKey = process.env.YANDEX_MAPS_API_KEY || '';

    return (
        <div style= {{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>Контакты </h1>
            <p> Мы находимся по адресу: { mapState.balloonContent } </p>
            <MapRouteSchema
                apiKey = { apiKey }
                coordinates = { mapState.center }
                addressTitle = { mapState.title }
                addressDescription = { mapState.balloonContent }/>
        </div>
    );

 /*    return (
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
 */
};

const MapsWithTheme = (props) => {
    const theme = useTheme();
    return <YndxMaps {...props} theme={theme} />;
};

export default MapsWithTheme;
export { YndxMaps as Maps };
