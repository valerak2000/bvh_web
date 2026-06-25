import React, { useEffect, useRef } from 'react';

interface MapRouteSchemaProps {
    apiKey: string;
    coordinates: [number, number]; // [Широта, Долгота]
    addressTitle?: string;
    addressDescription?: string;
}

const MapRouteSchema: React.FC<MapRouteSchemaProps> = ({
    apiKey,
    coordinates,
    addressTitle = 'Наш офис',
    addressDescription = 'Вход со двора, 2 этаж',
}) => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scriptId = 'yandex-maps-script';
        let script = document.getElementById(scriptId) as HTMLScriptElement | null;

        const initMap = (): void => {
            // Защита от повторной инициализации, если контейнер уже заполнен или API не готов
            if (!window.ymaps || !mapContainerRef.current || mapContainerRef.current.innerHTML !== '') {
                return;
            }

            window.ymaps.ready(() => {
                if (!mapContainerRef.current) return;

                // Инициализация карты
                const map = new window.ymaps!.Map(mapContainerRef.current, {
                    center: coordinates,
                    zoom: 16,
                    controls: ['zoomControl'], // Только кнопки масштаба, карту ничего не перегружает
                });

                // Создание единственной метки (точки)
                const placemark = new window.ymaps!.Placemark(
                    coordinates,
                    {
                        balloonContent: `<strong>${addressTitle}</strong><br/>${addressDescription}`,
                        hintContent: 'Кликните, чтобы увидеть адрес',
                    },
                    {
                        preset: 'islands#redDotIcon', // Классическая красная точка
                    }
                );

                // Добавление точки на карту
                map.geoObjects.add(placemark);
            });
        };

        if (!script) {
            // Если скрипт еще не был внедрен в head, создаем его
            script = document.createElement('script');
            script.id = scriptId;
            script.src = `https://yandex.ru{apiKey}`;
            script.type = 'text/javascript';
            script.async = true;
            script.onload = initMap;
            document.head.appendChild(script);
        } else {
            // Если скрипт уже загружен в другом компоненте, просто инициализируем карту
            if (window.ymaps) {
                initMap();
            } else {
                script.addEventListener('load', initMap);
            }
        }

        // Анмаунт: очищаем слушатели событий
        return () => {
            if (script) {
                script.removeEventListener('load', initMap);
            }
        };
    }, [apiKey, coordinates, addressTitle, addressDescription]);

    return (
        <div
      ref= { mapContainerRef }
    style = {{
        width: '100%',
            height: '400px',
                backgroundColor: '#f5f5f5',
                    borderRadius: '8px',
                        overflow: 'hidden',
      }
}
    />
  );
};

export default MapRouteSchema;
