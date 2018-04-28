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

import './styles/main.scss';

const muiTheme = getMuiTheme({
    fontFamily: 'pfbeausanspro-reg, sans-serif',
    app: {
        maxWidth: '118rem',
        minWidth: '118rem',
        minHeight: '58rem',
        margin: '0 auto',
        fontSize: '16px',
        fontWeight: 500,
    },
    palette: {
        textColor: Colors.blue900,
        alternateTextColor: Colors.blue900,
        primary1Color: Colors.teal200,

        //backgroundColor: Colors.teal200,
        //selectedTextColor: Colors.blue900,
        //secondaryTextColor: Colors.blue900,
        //primary2Color: Colors.teal200,
        //accent1Color: Colors.teal200,
        //primary: Colors.blue900,
        //secondary: Colors.teal200,
        //color: Colors.teal200,
    },
    appBar: {
        height: 80,
        width: '100%',
        //textColor: Colors.blue900,
        //backgroundColor: Colors.lightGreen50,
        //color: Colors.teal200,
        ElementLeft: {
            width: '100%',
            height: 'inherit',
            margin: '0.5rem 0 -1rem 0',
            display: 'flex',
            iconStyleLeft: {
                width: '75rem',
                margin: '1.5rem 0 0rem 0',
            },
            Logo: {
                //2,646370023419204
                width: 220,
                height: 76,
                cursor: 'pointer',
                Pict: {
                    height: 'inherit',
                    width: 201,
                    objectFit: 'contain',
                    margin: '-2.5rem auto auto -1rem',
                },
            },
            Menu: {
                width: '100%',
                height: 'inherit',
                margin: 'auto auto auto',
                Tab: {
                    fontSize: 18,
                    fontWeight: 500,
                    textTransform: 'none',
                }
            },
        },
        titleStyle: {
            width: 'auto',
        },
        ElementRight: {
            width: '100%',
            height: 'inherit',
            margin: '-0.3rem auto',
            iconStyleRight: {
                width: 'auto',
            },
            Login: {
                top: '0rem',
                right: '3rem',
                height: 'inherit',
                width: '28rem',
                backgroundColor: 'inherit',
                fontSize: 14,
                //width: '100%',
                //height: 'inherit',
                //margin: 'auto',
                Button: {
                    margin: '0rem 0rem 0', //'1rem 1rem 0',
                    Label: {
                        fontSize: 18,
                        fontWeight: 500,
                    },
                },
                /*phoneHeader: {
                    //width: '100%',
                    //whiteSpace: 'nowrap',
                    //display: 'flex',

                    //margin: '0px 5px 0 0',
                    //float: 'unset',
                    //padding: '0 0 0 40px',
                    fontSize: 14,
                    fontWeight: 100,
                    fontFamily: 'pfbeausanspro-reg, sans-serif',
                },
                phone: {
                    fontSize: 14,
                    fontWeight: 700,
                    //width: 340,
                    //margin: '0 0 10px',
                    textDecoration: 'blink',
                    fontFamily: 'pfbeausanspro-bold, sans-serif',
                },*/
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
        //textColor: Colors.blue900,
        //backgroundColor: Colors.lightGreen50,
        //selectedTextColor: Colors.blue900,
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
