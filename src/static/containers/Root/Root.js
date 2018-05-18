import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import PropTypes from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '../../styles/main.scss';
import * as theme from '../../styles/styles';
import routes from '../../routes';
import DevTools from './DevTools';
import App from '../../app';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default class Root extends Component {
    static propTypes = {
        store: PropTypes.shape().isRequired,
        history: PropTypes.shape().isRequired
    };

    componentDidMount() {
    //    console.log('Root');
    }

    render() {
        const dev = (process.env.NODE_ENV === 'production');

        return (
            <Provider store = { this.props.store }>
                <MuiThemeProvider muiTheme = { theme.muiTheme }>
                    <div
                        style = { theme.muiTheme.app }
                    >
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
                </MuiThemeProvider>
            </Provider>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        location: state.routing.location,
    };
};

function mapDispatchToProps (dispatch) {
    return {
    }
}

/*
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

                            <App>
                                <ConnectedRouter history = { this.props.history }>
                                    { routes }
                                </ConnectedRouter>
                            </App>
                            <Header
                                { ...this.props }
                            />
                            */
