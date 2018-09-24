import React, { Component } from 'react';
import { Provider } from 'react-redux';
//import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { compose } from 'recompose';
//import Favicon from 'react-favicon';

import '../../styles/main.scss';
import ExceptionHandler from '../../components/ExceptionHandler';
import { muiTheme } from '../../styles/styles';
import Routes from '../../routes/routes';
import DevTools from './DevTools';
import AppView from '../App';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LeftNavMenu from '../../components/LeftNavMenu';
//import favicon from '../../../static/images/favicon.ico';

const isProd = process.env.NODE_ENV === 'production';

class Root extends Component {
    static propTypes = {
        store: PropTypes.shape().isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    static defaultProps = {
        location: undefined
    };

    static get contextTypes() {
        return {
        };
    }
//    <Favicon url = { favicon } />

    render() {
        //const { match, location, history } = this.props;
        //<div>You are now at {location.pathname}</div>

        return (
            <div>
                <Provider store = { this.props.store }>
                    <ExceptionHandler global disabled = { !isProd }>
                        <MuiThemeProvider muiTheme = { muiTheme }>
                            <div
                                style = { muiTheme.global }
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
                                    <AppView>
                                        <Routes history = { this.props.history }/>
                                    </AppView>
                                    { !isProd && <DevTools /> }
                                </div>
                                <Footer
                                    { ...this.props }
                                />
                            </div>
                        </MuiThemeProvider>
                    </ExceptionHandler>
                </Provider>
            </div>
        );
    }
}
/*


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
        location: location
    };
};

function mapDispatchToProps (dispatch) {
    return {
    };
}

Root.muiName = 'Root';

//export default connect(mapStateToProps, mapDispatchToProps)(Root);
export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Root);