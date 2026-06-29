import React from 'react';
import MapRouteSchema from './MapRouteSchema';

function Maps() {
    // Замените на ваши координаты [Широта, Долгота]
    const mapState = {
        center: [props.lat, props.lng],
        zoom: props.zoom,
        controls: ['zoomControl', 'fullscreenControl']
    };

    const officeCoords: [number, number] = [55.733974, 37.587093];
    const apiKey = process.env.YANDEX_MAPS_API_KEY || '';

    return (
        <div style= {{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>Контакты </h1>
            <p> Мы находимся по адресу: ул.Льва Толстого, 16 </p>
            < MapRouteSchema
                apiKey = { apiKey }
                coordinates = { officeCoords }
                addressTitle = "Главный офис"
                addressDescription = "ул. Льва Толстого, 16. Центральный вход."/>
        </div>
  );
}

export default Maps;