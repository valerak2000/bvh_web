import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import PropTypes from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';

import routes from '../../routes';
import DevTools from './DevTools';
import App from '../../app';

import '../../styles/main.scss';
import muiTheme from '../../styles/main';

export default class Root extends React.Component {
    static propTypes = {
        store: PropTypes.shape().isRequired,
        history: PropTypes.shape().isRequired
    };

    render() {
	const dev = (process.env.NODE_ENV === 'production');
        return (
            <MuiThemeProvider muiTheme = { muiTheme }>
                <Provider store = { this.props.store }>
                        <div>
                            <App>
                                <ConnectedRouter history={ this.props.history }>
                                        { routes }
                                </ConnectedRouter>
                            </App>
                            { dev && <DevTools /> }
                        </div>
                </Provider>
            </MuiThemeProvider>
        );
    }
}
