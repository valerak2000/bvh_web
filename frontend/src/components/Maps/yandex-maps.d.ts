export {};

declare global {
    interface Window {
        ymaps?: {
            ready: (callback: () => void) => void;
            Map: new (
                element: HTMLElement | string,
                state: {
                    center: [number, number];
                    zoom: number;
                    controls?: string[];
                }
            ) => any;
            Placemark: new (
                geometry: [number, number],
                properties?: {
                    balloonContent?: string;
                    hintContent?: string;
                },
                options?: {
                    preset?: string;
                }
            ) => any;
        };
    }
}