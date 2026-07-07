import React, { useEffect, useRef } from 'react';

interface MapRouteSchemaProps {
    apiKey: string;
    coordinates: [number, number]; // [Широта, Долгота]
    addressTitle?: string;
    addressDescription?: string;
}

interface YMapsMap {
    geoObjects: {
        add: (placemark: Record<string, unknown>) => void;
    };
    destroy: () => void;
}

interface YMapsStatic {
    ready: (callback: () => void) => void;
    Map: new (
        element: HTMLElement,
        state: {
            center: [number, number];
            zoom: number;
            controls: string[];
        }
    ) => YMapsMap;
    Placemark: new (
        coordinates: [number, number],
        properties: Record<string, string>,
        options: Record<string, string>
    ) => Record<string, unknown>;
}

const MapRouteSchema: React.FC<MapRouteSchemaProps> = ({
    apiKey,
    coordinates,
    addressTitle = 'Наш офис',
    addressDescription = 'Вход со двора, 2 этаж'
}) => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scriptId = 'yandex-maps-script';
        let script = document.getElementById(scriptId) as HTMLScriptElement | null;

        const initMap = (): void => {
            const ymaps = (window as unknown as { ymaps?: YMapsStatic }).ymaps;

            if (!ymaps || !mapContainerRef.current || mapContainerRef.current.innerHTML !== '') {
                return;
            }

            ymaps.ready(() => {
                if (!mapContainerRef.current) return;

                const map = new ymaps.Map(mapContainerRef.current, {
                    center: coordinates,
                    zoom: 16,
                    controls: ['zoomControl']
                });

                const placemark = new ymaps.Placemark(
                    coordinates,
                    {
                        balloonContent: `<strong>${addressTitle}</strong><br/>${addressDescription}`,
                        hintContent: 'Кликните, чтобы увидеть адрес'
                    },
                    {
                        preset: 'islands#redDotIcon'
                    }
                );

                map.geoObjects.add(placemark);
            });
        };

        if (!script) {
            script = document.createElement('script');
            script.id = scriptId;
            script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`;
            script.type = 'text/javascript';
            script.async = true;
            script.onload = initMap;
            document.head.appendChild(script);
        } else {
            const ymaps = (window as unknown as { ymaps?: YMapsStatic }).ymaps;
            if (ymaps) {
                initMap();
            } else {
                script.addEventListener('load', initMap);
            }
        }

        return () => {
            if (script) {
                script.removeEventListener('load', initMap);
            }
        };
    }, [apiKey, coordinates, addressTitle, addressDescription]);

    return (
        <div
            ref={mapContainerRef}
            style={{
                width: '100%',
                height: '400px',
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
                overflow: 'hidden'
            }}
        />
    );
};

export default MapRouteSchema;