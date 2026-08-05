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
    addressDescription = ''
}) => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Если ключ не задан — не загружаем скрипт, чтобы не получать ошибку "Invalid API key"
        if (!apiKey) {
            return;
        }

        const scriptId = 'yandex-maps-script';
        let script = document.getElementById(scriptId) as HTMLScriptElement | null;

        // Флаг успешной инициализации карты (чтобы таймаут не перезаписал карту сообщением об ошибке)
        let mapInitialized = false;
        // ID таймаута (объявляем заранее, чтобы избежать TDZ при обращении из initMap)
        let timeoutId: number | undefined;

        const showError = (): void => {
            // Если карта уже создана — не показываем ошибку
            if (mapInitialized || !mapContainerRef.current) {
                return;
            }
            mapContainerRef.current.innerHTML =
                '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#666;font-family:sans-serif;font-size:14px;text-align:center;padding:16px;">' +
                'Не удалось загрузить карту. Проверьте корректность API-ключа Яндекс.Карт.</div>';
        };

        const initMap = (): void => {
            const ymaps = (window as unknown as { ymaps?: YMapsStatic }).ymaps;

            if (!ymaps || !mapContainerRef.current || mapContainerRef.current.innerHTML !== '') {
                return;
            }

            ymaps.ready(() => {
                if (!mapContainerRef.current) return;

                try {
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

                    // Карта успешно создана — отменяем таймаут и помечаем инициализацию
                    mapInitialized = true;
                    if (timeoutId !== undefined) {
                        window.clearTimeout(timeoutId);
                    }
                } catch (err) {
                    // Невалидный ключ или другая ошибка инициализации карты
                    // eslint-disable-next-line no-console
                    console.log('[MapRouteSchema] ошибка создания карты:', err);
                    showError();
                }
            });
        };

        // Таймаут: если карта не инициализировалась за 10 секунд — показываем ошибку
        timeoutId = window.setTimeout(showError, 10000);

        if (!script) {
            script = document.createElement('script');
            script.id = scriptId;
            // Добавляем уникальный параметр, чтобы обойти кэш браузера при разработке
            script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU&_=${Date.now()}`;
            script.type = 'text/javascript';
            script.async = true;
            script.onload = initMap;
            script.onerror = showError;
            document.head.appendChild(script);
        } else {
            const ymaps = (window as unknown as { ymaps?: YMapsStatic }).ymaps;
            if (ymaps) {
                initMap();
            } else {
                script.addEventListener('load', initMap);
                script.addEventListener('error', showError);
            }
        }

        return () => {
            if (timeoutId !== undefined) {
                window.clearTimeout(timeoutId);
            }
            if (script) {
                script.removeEventListener('load', initMap);
                script.removeEventListener('error', showError);
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
