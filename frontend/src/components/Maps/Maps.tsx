import React from 'react';
import MapRouteSchema from './MapRouteSchema';
import { useTheme } from '@mui/material/styles';

interface YndxMapsProps {
    title: string;
    balloonContent: string;
    lat: number;
    lng: number;
    zoom: number;
    isMarkerShown?: boolean;
    apiKey?: string;
    theme?: unknown;
}

const YndxMaps: React.FC<YndxMapsProps> = (props) => {
    const mapState = {
        title: props.title,
        balloonContent: props.balloonContent,
        center: [props.lat, props.lng] as [number, number],
        zoom: props.zoom,
        controls: ['zoomControl', 'fullscreenControl']
    };
    const apiKey =
        props.apiKey ||
        (typeof process !== 'undefined' && process.env && process.env.YANDEX_MAPS_API_KEY) ||
        '';

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>Контакты</h1>
            <p>Мы находимся по адресу: {mapState.balloonContent}</p>
            <MapRouteSchema
                apiKey={apiKey}
                coordinates={mapState.center}
                addressTitle={mapState.title}
                addressDescription={mapState.balloonContent}
            />
        </div>
    );
};

interface MapsWithThemeProps {
    title: string;
    balloonContent: string;
    lat: number;
    lng: number;
    zoom: number;
    isMarkerShown?: boolean;
    apiKey?: string;
}

const MapsWithTheme: React.FC<MapsWithThemeProps> = (props) => {
    const theme = useTheme();
    return <YndxMaps {...props} theme={theme} />;
};

export default MapsWithTheme;
export { YndxMaps as Maps };
