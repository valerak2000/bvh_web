import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import PropTypes from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';

import routes from '../../routes';
import DevTools from './DevTools';
import App from '../../app';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import '../../styles/main.scss';
import { MUI_THEME } from '../../styles';
//import '../../styles/main.jsx';

export default class Root extends Component {
    static propTypes = {
        store: PropTypes.shape().isRequired,
        history: PropTypes.shape().isRequired
    };

    render() {
        const dev = (process.env.NODE_ENV === 'production');

        return (
            <MuiThemeProvider muiTheme = { MUI_THEME }>
                <Provider store = { this.props.store }>
                        <div>
                            <Header
                                { ...this.props }
                            />
                            <App>
                                <ConnectedRouter history = { this.props.history }>
                                    { routes }
                                </ConnectedRouter>
                            </App>
                            <Footer
                                { ...this.props }
                            />
                            { dev && <DevTools /> }
                        </div>
                </Provider>
            </MuiThemeProvider>
        );
    }
}
                            /*
                            <App>
                                <ConnectedRouter history = { this.props.history }>
                                    { routes }
                                </ConnectedRouter>
                            </App>
                            <Header
                                { ...this.props }
                            />
                            */
