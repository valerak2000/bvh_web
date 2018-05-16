import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
//import { getStyles } from 'material-ui/AppBar/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {Tabs, Tab} from 'material-ui/Tabs';
//import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';

//import Footer from '../modules/common/Footer';
//import Header from '../modules/common/Header';
import LoginControl from './components/LoginControl'
import SiteMenu from './components/SiteMenu'
import bvhLogo from './images/logo_bvh.png';

class App extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        children: PropTypes.shape().isRequired,
        dispatch: PropTypes.func.isRequired,
        location: PropTypes.shape({
            pathname: PropTypes.string
        })
    };

    static get contextTypes() {
        return {
            muiTheme: React.PropTypes.object.isRequired
        };
    }

    constructor(props) {
        super(props);
    }

    static defaultProps = {
        location: undefined
    };

    goToIndex = () => {
        this.props.dispatch(push('/'));
    };

    render() {
        const homeClass = classNames({
            active: this.props.location && this.props.location.pathname === '/'
        });
        const protectedClass = classNames({
            active: this.props.location && this.props.location.pathname === '/protected'
        });
        const loginClass = classNames({
            active: this.props.location && this.props.location.pathname === '/login'
        });
        const aboutClass = classNames({
            active: this.props.location && this.props.location.pathname === '/about'
        });
        const customersClass = classNames({
            active: this.props.location && this.props.location.pathname === '/customers'
        });
        const newsClass = classNames({
            active: this.props.location && this.props.location.pathname === '/news'
        });
        const contactsClass = classNames({
            active: this.props.location && this.props.location.pathname === '/contacts'
        });

        return (
            <div
                className = 'app'
                style = { this.props.muiTheme.app }
            >
                <AppBar
                    titleStyle = { this.props.muiTheme.appBar.titleStyle }
                    iconElementLeft = {
                        <div
                            id = 'ElementLeft'
                            style = { this.props.muiTheme.appBar.ElementLeft }
                        >
                            <IconButton
                                style = { this.props.muiTheme.appBar.ElementLeft.Logo }
                                iconStyle = { this.props.muiTheme.appBar.ElementLeft.Logo.Pict }
                                onClick = { this.goToIndex }
                            >
                                <img
                                    src = { bvhLogo }
                                    alt = 'Главная'
                                />
                            </IconButton>
                            <SiteMenu
                                style = { this.props.muiTheme.appBar.ElementLeft.Menu }
                                { ...this.props }
                            />
                        </div>
                    }
                    iconStyleLeft = { this.props.muiTheme.appBar.ElementLeft.iconStyleLeft }
                    iconElementRight = {
                        <div
                            id = 'ElementRight'
                            style = { this.props.muiTheme.appBar.ElementRight }
                        >
                            <LoginControl
                                isAuthenticated = { this.props.isAuthenticated }
                                style = { this.props.muiTheme.appBar.ElementRight.Login }
                            />
                        </div>
                    }
                    iconStyleRight = { this.props.muiTheme.appBar.ElementLeft.iconStyleRight }
                />

                <div>
                    { this.props.children }
                </div>
            </div>
        );
    }
}
/*
                    style = { this.props.muiTheme.palette
                        {
                        textColor: Colors.blue900,
                        backgroundColor: Colors.lightGreen50,
                    }}

                    <AppBar
                    titleStyle = {{ width: 'auto' }}
                    iconElementLeft = {
                        <div id = "ElementLeft" style = { this.props.muiTheme.appBar.ElementLeft }>
                            <IconButton
                                style = { this.props.muiTheme.appBar.ElementLeft.Logo }
                                iconStyle = { this.props.muiTheme.appBar.ElementLeft.Logo.Pict }
                                onClick = { this.goToIndex }
                            >
                                <img
                                    src = { bvhLogo }
                                    alt = "ООО «Брюховецкое водопроводное хозяйство»"
                                />
                            </IconButton>
                            <SiteMenu
                                style = { this.props.muiTheme.appBar.ElementLeft.Menu }
                            />
                        </div>
                    }
                    iconStyleLeft = {{ width: '70rem' }}
                    iconElementRight = {
                        <div id = "ElementRight" style = { this.props.muiTheme.appBar.ElementRight }>
                            <LoginControl
                                isAuthenticated = { this.props.isAuthenticated }
                                style = { this.props.muiTheme.appBar.ElementRight.Login }
                            />
                        </div>
                    }
                    iconStyleRight = {{ width: 'auto' }}
                    style = {{
                        textColor: Colors.blue900,
                        backgroundColor: Colors.lightGreen50,
                    }}
                />

*/
const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        location: state.routing.location
    };
};

export default muiThemeable()(connect(mapStateToProps)(App));
export { App as AppNotConnected };
