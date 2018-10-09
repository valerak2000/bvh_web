import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withTheme from '@material-ui/core/styles/withTheme';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import LoginControl from './LoginControl';
import SiteMenu from './SiteMenu';
const bvhLogo = '/static/images/logo_bvh.png';

class Header extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired,
        location: PropTypes.object.isRequired,
        theme: PropTypes.object.isRequired,
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { appBar } = { ...this.props.theme.app.header };
        const { isAuthenticated } = this.props;

        return (
            <AppBar
                position = 'static'
                style = { appBar }
            >
                <Toolbar
                    style = {{ 
                        padding: '0 8px 8px 8px',
                    }}
                >
                    <Button
                        focusRipple = { false }
                        aria-selected = { false }
                        centerRipple = { false }
                        disableRipple = { true }
                        disableTouchRipple = { true }
                        component = { Link } to = '/'
                        style = { appBar.logo }
                    >
                        <img
                            src = { bvhLogo }
                            alt = 'Главная'
                            style = { appBar.logo.picture }
                        />
                    </Button>
                    <SiteMenu
                        style = { appBar.menu }
                        { ...this.props }
                    />
                    <LoginControl
                        isAuthenticated = { isAuthenticated }
                        style = { appBar.login }
                        { ...this.props }
                    />
                </Toolbar>
            </AppBar>
        );
    }
}

Header.muiName = 'Header';

export default withTheme()(Header);

/*

<AppBar
                    titleStyle = { header.appBar.titleStyle }
                    iconElementLeft = {
                        <div
                            id = 'ElementLeft'
                            style = { header.appBar.elementLeft }
                        >
                            <IconButton
                                style = { header.appBar.elementLeft.logo }
                                iconStyle = { header.appBar.elementLeft.logo.picture }
                                onClick = { this.goToIndex }
                            >
                                <img
                                    src = { bvhLogo }
                                    alt = 'Главная'
                                />
                            </IconButton>
                            <SiteMenu
                                style = { header.appBar.elementLeft.menu }
                                { ...this.props }
                            />
                        </div>
                    }
                    iconStyleLeft = { header.appBar.elementLeft.iconStyleLeft }
                    iconElementRight = {
                        <div
                            id = 'ElementRight'
                            style = { header.appBar.elementRight }
                        >
                            <LoginControl
                                isAuthenticated = { isAuthenticated }
                                style = { header.appBar.elementRight.login }
                            />
                        </div>
                    }
                    iconStyleRight = { header.appBar.elementLeft.iconStyleRight }
                    showMenuIconButton = { true }
                />
*/
