declare namespace NodeJS {
    interface ProcessEnv {
        YANDEX_MAPS_API_KEY?: string;
        NODE_ENV?: 'development' | 'production' | 'test';
        [key: string]: string | undefined;
    }
}

interface Process {
    env: NodeJS.ProcessEnv;
}

declare const process: Process;