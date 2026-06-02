import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import LoginControl from '../../views/LoginControl';
import SiteMenu from '../../views/SiteMenu';

const bvhLogo = '/static/images/logo_bvh.png';

const Header = (props) => {
    const { isAuthenticated, ...rest } = props;
    const theme = useTheme();

    // Получаем appBar из темы
    const appBar = theme?.app?.header?.appBar || {};
    const toolbar = appBar?.toolbar || {};
    const logo = toolbar?.logo || {};
    const menu = toolbar?.menu || {};
    const login = appBar?.login || {};

    return (
        <AppBar position="static" style={appBar}>
            <Toolbar style={toolbar}>
                <Button
                    focusRipple={false}
                    aria-selected={false}
                    centerRipple={false}
                    disableRipple={true}
                    disableTouchRipple={true}
                    component={Link}
                    to="/"
                    style={logo}
                >
                    <img src={bvhLogo} alt="Главная" style={logo?.picture} />
                </Button>
                <SiteMenu style={menu} {...rest} />
                <LoginControl isAuthenticated={isAuthenticated} style={login} {...rest} />
            </Toolbar>
        </AppBar>
    );
};

Header.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
};

export default Header;
