import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
//import FlatButton from 'material-ui/FlatButton';
//import FontIcon from 'material-ui/FontIcon';

import LoginControl from './LoginControl'
import SiteMenu from './SiteMenu'
import bvhLogo from '../images/logo_bvh.png';

class Header extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        //children: PropTypes.shape().isRequired,
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
        //location: undefined
    };

    goToIndex = () => {
        this.props.dispatch(push('/'));
    };

    render() {
        //console.log(this.props.muiTheme);

        return (
            <header 
                style = { this.props.muiTheme.app.header }
            >
                <AppBar
                    titleStyle = { this.props.muiTheme.app.header.appBar.titleStyle }
                    iconElementLeft = {
                        <div
                            id = 'ElementLeft'
                            style = { this.props.muiTheme.app.header.appBar.elementLeft }
                        >
                            <IconButton
                                style = { this.props.muiTheme.app.header.appBar.elementLeft.logo }
                                iconStyle = { this.props.muiTheme.app.header.appBar.elementLeft.logo.picture }
                                onClick = { this.goToIndex }
                            >
                                <img
                                    src = { bvhLogo }
                                    alt = 'Главная'
                                />
                            </IconButton>
                            <SiteMenu
                                style = { this.props.muiTheme.app.header.appBar.elementLeft.menu }
                                { ...this.props }
                            />
                        </div>
                    }
                    iconStyleLeft = { this.props.muiTheme.app.header.appBar.elementLeft.iconStyleLeft }
                    iconElementRight = {
                        <div
                            id = 'ElementRight'
                            style = { this.props.muiTheme.app.header.appBar.elementRight }
                        >
                            <LoginControl
                                isAuthenticated = { this.props.isAuthenticated }
                                style = { this.props.muiTheme.app.header.appBar.elementRight.login }
                            />
                        </div>
                    }
                    iconStyleRight = { this.props.muiTheme.app.header.appBar.elementLeft.iconStyleRight }
                />
            </header>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        location: state.routing.location
    };
};

Header.muiName = 'Header';

export default muiThemeable()(connect(mapStateToProps)(Header));
