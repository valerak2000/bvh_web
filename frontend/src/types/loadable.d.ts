declare module '@loadable/component' {
    import * as React from 'react';

    interface LoadableOptions {
        fallback?: React.ReactNode;
        timeout?: number;
        delay?: number;
        ssr?: boolean;
    }

    interface LoadableComponent<P = Record<string, unknown>> {
        (props: P): React.ReactElement | null;
        preload: () => Promise<void>;
        load: () => Promise<unknown>;
    }

    function loadable<P = Record<string, unknown>>(
        loader: () => Promise<{ default: React.ComponentType<P> } | React.ComponentType<P>>,
        options?: LoadableOptions
    ): LoadableComponent<P>;

    export default loadable;
}
