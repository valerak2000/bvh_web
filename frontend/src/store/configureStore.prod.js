import { thunk } from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const middleware = applyMiddleware(thunk);

    return createStore(rootReducer, initialState, middleware);
}
