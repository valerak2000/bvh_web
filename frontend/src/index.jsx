import React from 'react';
import ReactDOM from 'react-dom';
//import createHistory from 'history/createBrowserHistory';
import { createBrowserHistory } from 'history';
//import injectTapEventPlugin from 'react-tap-event-plugin';
//injectTapEventPlugin();
import initReactFastclick from 'react-fastclick';
initReactFastclick();
import { setConfig } from 'react-hot-loader';
setConfig({ logLevel: 'debug' });

import { GetBaseUrl } from './commons/commonFuncs';
import { authLoginUserSuccess } from './actions/auth';
import Root from './containers/Root/Root';
import configureStore from './store/configureStore';

const initialState = {};
//Update for Reserved proxy
const base = GetBaseUrl();
const history = createBrowserHistory({ basename: base });
//const history = createHistory();
const store = configureStore(initialState, history);

const token = sessionStorage.getItem('token');
let user = {};
try {
    user = JSON.parse(sessionStorage.getItem('user'));
} catch (e) {
    // Failed to parse
}

if (token !== null) {
    store.dispatch(authLoginUserSuccess(token, user));
}

const renderComponent = () => {
    ReactDOM.render(
        <Root
            store = { store }
            history = { history } 
        />,
        document.getElementById('root')
    );
};

renderComponent();

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept(); //() => { renderComponent(); });
}
