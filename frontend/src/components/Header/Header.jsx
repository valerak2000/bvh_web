import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import LoginControl from '../../views/LoginControl';
import SiteMenu from '../../views/SiteMenu';
const bvhLogo = '/static/images/logo_bvh.png';

class Header extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired,
        location: PropTypes.object.isRequired,
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
                    sx = {{
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
                        sx = { appBar.logo }
                    >
                        <img
                            src = { bvhLogo }
                            alt = 'Главная'
                            sx = { appBar.logo.picture }
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

const HeaderWithTheme = (props) => {
    const theme = useTheme();
    return <Header {...props} theme={theme} />;
};

export default HeaderWithTheme;
