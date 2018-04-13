import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';

import { authLoginUserSuccess } from './actions/auth';
import Root from './containers/Root/Root';
import configureStore from './store/configureStore';


const initialState = {};
const target = document.getElementById('root');

const history = createHistory();
const store = configureStore(initialState, history);

const muiTheme = getMuiTheme({
  palette: {
    textColor: Colors.blue900,
  },
  appBar: {
    height: 50,
    color: Colors.lightGreen50,
    logo: {
        height: 50,
        objectFit: 'contain'
    }
  },
  title: {
    cursor: 'pointer'
  },
});

const node = (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Root store={store} history={history} />
    </MuiThemeProvider>
);

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

ReactDOM.render(node, target);
