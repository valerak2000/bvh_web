import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';

injectTapEventPlugin();

import { authLoginUserSuccess } from './actions/auth';
import Root from './containers/Root/Root';
import configureStore from './store/configureStore';

const initialState = {};
const target = document.getElementById('root');
const history = createHistory();
const store = configureStore(initialState, history);

//import './styles/main.scss';

const muiTheme = getMuiTheme({
    app: {
        maxWidth: '128rem',
        minWidth: '128rem',
        margin: 'auto',
        fontSize: '16px',
        fontWeight: 500,
    },
    palette: {
        textColor: Colors.blue900,
        backgroundColor: Colors.lightGreen50,
    },
    appBar: {
        height: 60,
        width: '100%',
        textColor: Colors.blue900,
        backgroundColor: Colors.lightGreen50,
        ElementLeft: {
            width: '100%',
            height: 'inherit',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'flex',
            iconStyleLeft: {
                width: '70rem'
            },
            Logo: {
                height: 56,
                width: 172,
                cursor: 'pointer',
                Pict: {
                    height: 'inherit',
                    width: 148,
                    objectFit: 'contain',
                    marginTop: -14,
                },
            },
            Menu: {
                width: '100%',
                height: 'inherit',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 'auto',
                tab: {
                    fontSize: 18,
                    fontWeight: 500,
                    textTransform: 'none',
                }
            },
        },
        titleStyle: {
            width: 'auto'
        },
        ElementRight: {
            width: '100%',
            height: 'inherit',
            marginLeft: 'auto',
            marginRight: '2rem',
            marginTop: 'inherit',
            iconStyleRight: {
                width: 'auto'
            },
            Login: {
                marginTop: 4,
                label: {
                    fontSize: 18,
                    fontWeight: 500,
                },
            }
        },
        flexWrap: 'wrap',
    },
    title: {
        cursor: 'pointer',
    },
    button: {
        textTransform: 'none',
    },
    tabs: {
        textColor: Colors.blue900,
        backgroundColor: Colors.lightGreen50,
        selectedTextColor: Colors.blue900,
        width: '100%',
        paddingLeft: 20,
        tab: {
            textTransform: 'none',
        },
    },
});

const node = (
    <MuiThemeProvider muiTheme = {muiTheme}>
        <Root store = {store} history = {history} />
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
