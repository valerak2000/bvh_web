import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { setConfig } from 'react-hot-loader';
setConfig({ logLevel: 'debug' });

import { GetBaseUrl } from './commons/commonFuncs';
import { authLoginUserSuccess } from './actions/auth';
import ExceptionHandler from './components/ExceptionHandler';
import configureStore from './store/configureStore';
import indexRoutes from 'routes/index.jsx';

const initialState = {};
//Update for Reserved proxy
const base = GetBaseUrl();
const history = createBrowserHistory({ basename: base });
const store = configureStore(initialState, history);
const isProd = process.env.NODE_ENV === 'production';

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

const createRouter = () => {
    return (
        <BrowserRouter basename = { base || '/' }>
            <Router history = { history }>
                <Switch>
                {
                    indexRoutes.map((prop, key) => {
                        return (
                            <Route
                                path = { prop.path }
                                component = { prop.component }
                                key = { key }
                            />
                        );
                    })
                }
                </Switch>
            </Router>
        </BrowserRouter>
    );
};
  
const renderComponent = () => {
    ReactDOM.render(
        <Provider store = { store }>
            <ExceptionHandler global disabled = { !isProd }>
                { createRouter() }
            </ExceptionHandler>
        </Provider>,
        document.getElementById('root')
    );
};

renderComponent();

/* devblock:start */
// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./containers/Root/Root', () => {
        renderComponent();
    });
}
/* devblock:end */
