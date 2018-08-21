import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Favicon from 'react-favicon';

import '../../styles/main.scss';
import * as theme from '../../styles/styles';
import Routes from '../../routes';
import DevTools from './DevTools';
import App from '../../app';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LeftNavMenu from '../../components/LeftNavMenu';
import vodokanalLogo from '../../images/Vodokanal_Logo.ico';

class Root extends Component {
    static propTypes = {
        store: PropTypes.shape().isRequired,
        history: PropTypes.shape().isRequired
    };

    componentDidMount() {
    //    console.log('Root');
    }

    static get contextTypes() {
        return {
        };
    }

    render() {
        const dev = (process.env.NODE_ENV != 'production');

        return (
            <div>
                <Favicon url = { vodokanalLogo } />
                <Provider store = { this.props.store }>
                    <MuiThemeProvider muiTheme = { theme.muiTheme }>
                        <div
                            style = { theme.muiTheme.global }
                        >
                            <Header
                                { ...this.props }
                            />
                            <div 
                                id = 'app'
                                style = {{ 
                                    display: 'flex', 
                                    width: '100%',
                                }}
                            >
                                <LeftNavMenu
                                    { ...this.props }
                                />
                                <App>
                                    <ConnectedRouter history = { this.props.history }>
                                        <Routes />
                                    </ConnectedRouter>
                                </App>
                            </div>
                            <Footer
                                { ...this.props }
                            />
                        </div>
                    </MuiThemeProvider>
                </Provider>
            </div>
        );
    }
}
/*
                            { dev && <DevTools /> }

<div class="breadcrumb-bg"
                                style = {{ 
                                    width: '100%',
                                    background: `url(${bgHeader}) no-repeat 0px 0px`,
                                    padding: 0,
                                    margin: '0 auto',
                                    height: '300px',
                                    backgroundSize: 'cover',
                                    position: 'absolute'
                                }}
                            ></div>

<div style={{ display: 'flex', width: '90%' }}>
                        <App>
                            <ConnectedRouter history = { this.props.history }>
                                { routes }
                            </ConnectedRouter>
                        </App>
    </div>

//        containerStyle={{height: 'calc(100% - 94px)', top: 95}} docked={true} width={150} open={true} zDepth={1}
                <Drawer
                    docked={true} width={150} open={true} zDepth={1}
                >
                    <MenuItem
                        onTouchTap={() => {  }}
                        primaryText="Home"
                    />
                    <MenuItem
                        onTouchTap={() => {  }}
                        primaryText="Some Component"
                    />
                </Drawer>
import {List, ListItem} from 'material-ui/List';
*/

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

Root.muiName = 'Root';

export default connect(mapStateToProps, mapDispatchToProps)(Root);
