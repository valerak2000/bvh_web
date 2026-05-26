import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons/faSignOutAlt';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { authLogoutAndRedirect } from '../actions/auth';

/*eslint no-console: ["error", { allow: ["info", "warn", "error"] }] */
export function Login(props) {
    return (
        <Button
            focusRipple={false}
            aria-label="Войти"
            aria-selected={false}
            centerRipple={false}
            disableRipple={true}
            disableTouchRipple={true}
            component={Link}
            to="/"
            style={props.style?.button}
        >
            Войти
            <FontAwesomeIcon
                icon={faSignInAlt}
                style={props.style?.button?.icon}
            />
        </Button>
    );
}

export function Logged(props) {
    const { anchorEl } = props;
    const isMenuOpen = Boolean(anchorEl);

    return (
        <Button
            focusRipple={false}
            aria-owns={isMenuOpen ? 'material-appbar' : undefined}
            aria-haspopup="true"
            aria-label="Profile"
            aria-selected={false}
            centerRipple={false}
            disableRipple={true}
            disableTouchRipple={true}
            onClick={props.onClick}
            style={props.style?.button}
        >
            <AccountCircle />
        </Button>
    );
}

function LoginControl(props) {
    const { isAuthenticated } = props;
    const theme = useTheme();
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    
    const userName = useSelector(state => state.auth.userName);
    
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = useCallback((e) => {
        setAnchorEl(e.currentTarget);
    }, []);

    const handleMenuClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

    const handleLogoutClick = useCallback((e) => {
        e.preventDefault();
        handleMenuClose();
        dispatch(authLogoutAndRedirect());
    }, [dispatch, handleMenuClose]);

    const handleLoginClick = useCallback((e) => {
        e.preventDefault();
        navigate('/');
    }, [navigate]);

    const handleProtectedClick = useCallback((e) => {
        e.preventDefault();
        navigate('/protected');
    }, [navigate]);

    const loginStyle = theme?.app?.header?.appBar?.login || {};

    const renderMenuLogon = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem
                component={Link}
                to="/protected"
                onClick={handleProtectedClick}
            >
                <IconButton color="inherit" size="large">
                    <FontAwesomeIcon
                        icon={faLock}
                        style={loginStyle.button?.icon}
                    />
                </IconButton>
                Личный кабинет (Внести показания, узнать состояние баланса, заказать и оплатить услуги)
            </MenuItem>
            <Divider />
            <MenuItem
                onClick={handleLogoutClick}
            >
                <IconButton color="inherit" size="large">
                    <FontAwesomeIcon
                        icon={faSignOutAlt}
                        style={loginStyle.button?.icon}
                    />
                </IconButton>
                {userName}
            </MenuItem>
        </Menu>
    );

    return (
        <span
            style={loginStyle}
        >
            <span
                style={isAuthenticated ? (loginStyle.badgeLogon) : (loginStyle.badge)}
            >
                <span
                    style={{ fontWeight: 100 }}
                >
                    Круглосуточный диспетчер:&nbsp;
                </span>
                <FontAwesomeIcon
                    icon={faPhone}
                    flip="horizontal"
                    style={{ fontSize: 12 }}
                />
                <span
                    style={{ fontWeight: 700 }}
                >
                    &nbsp;8 (86156) 35-117
                </span>
            </span>
            {
                isAuthenticated ? (
                    <Logged
                        userName={userName}
                        onClick={handleProfileMenuOpen}
                        style={loginStyle.button}
                        anchorEl={anchorEl}
                    />
                ) : (
                    <Login
                        onClick={handleLoginClick}
                        style={loginStyle.button}
                    />
                )
            }
            {renderMenuLogon}
        </span>
    );
}

LoginControl.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};

export default LoginControl;
