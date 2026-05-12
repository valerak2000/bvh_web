import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { GetBaseUrl } from './commons/commonFuncs.ts';
import { authLoginUserSuccess } from './actions/auth';
import ExceptionHandler from './components/ExceptionHandler';
import configureStore from './store/configureStore';
import Root from './containers/Root/Root';
import { setNavigateFunction } from './utils/navigate';

const initialState = {};
const base = GetBaseUrl();
const store = configureStore(initialState);
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

const root = createRoot(document.getElementById('root'));

const renderComponent = () => {
  root.render(
    <Provider store={store}>
      <ExceptionHandler global disabled={!isProd}>
        <BrowserRouter basename={base || '/'} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Root />
        </BrowserRouter>
      </ExceptionHandler>
    </Provider>
  );
};

renderComponent();

if (module.hot) {
  module.hot.accept('./containers/Root/Root', () => {
    renderComponent();
  });
}
