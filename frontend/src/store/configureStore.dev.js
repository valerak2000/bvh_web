/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

import { thunk } from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const logger = createLogger();

    const middleware = applyMiddleware(thunk, logger);

    // Используем стандартные Redux DevTools вместо кастомных
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middlewareWithDevTools = composeEnhancers(middleware);

    const store = createStore(rootReducer, initialState, middlewareWithDevTools);

    if (module.hot) {
        module.hot
            .accept('../reducers', () => {
                const nextRootReducer = require('../reducers/index');

                store.replaceReducer(nextRootReducer);
            });
    }

    return store;
}
