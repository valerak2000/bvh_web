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

/*
npm i -D @yandex/ymaps3-types@latest
Используйте код с осторожностью.В файле tsconfig.json добавьте путь к типам, чтобы глобальное пространство имен ymaps3 стало доступно:json{
  "compilerOptions": {
    "typeRoots": ["./node_modules/@types", "./node_modules/@yandex/ymaps3-types"]
  }
}

import { useEffect, useRef, useState } from 'react';

interface MapComponentProps {
  apiKey: string;
  center: [number, number]; // [долгота, широта]
  markerCoords: [number, number];
  zoom?: number;
}

export default function YandexMapV3({
  apiKey,
  center,
  markerCoords,
  zoom = 10
}: MapComponentProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 1. Проверяем, не загружен ли скрипт уже
    if (!document.querySelector('#ymaps3-script')) {
      const script = document.createElement('script');
      script.id = 'ymaps3-script';
      script.src = `https://api-maps.yandex.ru/v3/?apikey=${apiKey}&lang=ru_RU`;
      script.async = true;
      script.onload = () => setIsLoaded(true);
      document.body.appendChild(script);
    } else if (window.ymaps3) {
      setIsLoaded(true);
    }
  }, [apiKey]);

  useEffect(() => {
    if (!isLoaded || !mapContainerRef.current || !window.ymaps3) return;

    let map: any = null;

    async function initMap() {
      const ymaps = window.ymaps3;
      
      // Ждем готовности API
      await ymaps.ready;

      // Импортируем стандартный модуль маркеров v3
      const { YMapDefaultMarker } = await ymaps.import('@yandex/ymaps3-markers@latest');

      if (!mapContainerRef.current) return;
      mapContainerRef.current.innerHTML = ''; // Очистка контейнера

      // Создаем карту
      map = new ymaps.YMap(mapContainerRef.current, {
        location: { center, zoom }
      });

      // Добавляем обязательные слои (схема и гео-объекты)
      map.addChild(new ymaps.YMapDefaultSchemeLayer({}));
      map.addChild(new ymaps.YMapDefaultFeaturesLayer({}));

      // Создаем и добавляем маркер
      const marker = new YMapDefaultMarker({
        coordinates: markerCoords,
        title: 'Наша геометка',
        subtitle: 'Описание точки',
        color: '#007afb' // Кастомный цвет маркера
      });
      
      map.addChild(marker);
    }

    initMap();

    // Корректное удаление карты при размонтировании компонента React 19
    return () => {
      if (map) {
        map.destroy();
      }
    };
  }, [isLoaded, center, markerCoords, zoom]);

  return (
    <div
      ref={mapContainerRef}
      style={{ width: '100%', height: '500px', borderRadius: '8px', overflow: 'hidden' }}
    />
  );
}

*/