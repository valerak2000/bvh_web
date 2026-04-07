import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { GetBaseUrl } from './commons/commonFuncs.ts';
import { authLoginUserSuccess } from './actions/auth';
import ExceptionHandler from './components/ExceptionHandler';
import configureStore from './store/configureStore';
import indexRoutes from './routes/index.jsx';
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

// Create router for React Router v6
const router = createBrowserRouter(
  indexRoutes.map(route => ({
    path: route.path,
    element: React.createElement(route.component),
  })),
  {
    basename: base || '/',
  }
);

const root = createRoot(document.getElementById('root'));

const renderComponent = () => {
  root.render(
    <Provider store={store}>
      <ExceptionHandler global disabled={!isProd}>
        <RouterProvider router={router} />
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
