import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
            focusRipple = { false }
            aria-label = 'Войти'
            aria-selected = { false }
            centerRipple = { false }
            disableRipple = { true }
            disableTouchRipple = { true }
            component = { Link } to = '/'
            sx = { props.style.button }
        >
            Войти
            <FontAwesomeIcon
                icon = { faSignInAlt }
                sx = { props.style.button.icon }
            />
        </Button>
    );
}

export function Logged(props) {
    const { anchorEl } = props;
    const isMenuOpen = Boolean(anchorEl);

    return (
        <Button
            focusRipple = { false }
            aria-owns= { isMenuOpen ? 'material-appbar' : undefined }
            aria-haspopup = 'true'
            aria-label = 'Profile'
            aria-selected = { false }
            centerRipple = { false }
            disableRipple = { true }
            disableTouchRipple = { true }
            onClick = { props.onClick }
            sx = { props.style.button }
        >
            <AccountCircle />
        </Button>
    );
}

class LoginControl extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        userName: PropTypes.string,
        dispatch: PropTypes.func.isRequired,
        location: PropTypes.object.isRequired,
    };

    constructor(props, context) {
        super(props, context);
        this.handleProfileMenuOpen = this.handleProfileMenuOpen.bind(this);
        this.handleMenuClose = this.handleMenuClose.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleProtectedClick = this.handleProtectedClick.bind(this);
    }

    static defaultProps = {
        userName: '',
    };

    state = {
        anchorEl: null,
        isAuthenticated: false
    };

    handleProfileMenuOpen = (e) => {
        this.setState({ anchorEl: e.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
    };

    handleLogoutClick = (e) => {
        e.preventDefault();
        this.handleMenuClose();
        this.props.dispatch(authLogoutAndRedirect());
    };

    handleLoginClick = (e) => {
        e.preventDefault();
        this.props.history.push('/');
    };

    handleProtectedClick = (e) => {
        e.preventDefault();
        this.props.history.push('/protected');
    };

    render() {
        const { isAuthenticated, userName } = this.props;
        const { anchorEl } = this.state;
        const login = this.props.theme.app.header.appBar.login;
        const isMenuOpen = Boolean(anchorEl);
        const renderMenuLogon = (
            <Menu
                anchorEl = { anchorEl }
                anchorOrigin = {{ vertical: 'top', horizontal: 'right' }}
                transformOrigin = {{ vertical: 'top', horizontal: 'right' }}
                open = { isMenuOpen }
                onClose = { this.handleMenuClose }
            >
                <MenuItem
                    component = { Link } to = '/protected'
                    onClick = { this.handleProtectedClick }
                >
                    <IconButton color = 'inherit' size="large">
                        <FontAwesomeIcon
                            icon = { faLock }
                            sx = { login.button.icon }
                        />
                    </IconButton>
                    Личный кабинет (Внести показания, узнать состояние баланса, заказать и оплатить услуги)
                </MenuItem>
                <Divider />
                <MenuItem
                    onClick = { this.handleLogoutClick }
                >
                    <IconButton color = 'inherit' size="large">
                        <FontAwesomeIcon
                            icon = { faSignOutAlt }
                            sx = { login.button.icon }
                        />
                    </IconButton>
                    { userName }
                </MenuItem>
            </Menu>
        );

        return (
            <span
                style = { login }
            >
                <span
                    style = { isAuthenticated ? ( login.badgeLogon ) : ( login.badge ) }
                >
                    <span
                        style = {{ fontWeight: 100, }}
                    >
                        Круглосуточный диспетчер:&nbsp;
                    </span>
                    <FontAwesomeIcon
                        icon = { faPhone }
                        flip = 'horizontal'
                        style = {{ fontSize: 12, }}
                    />
                    <span
                        style = {{ fontWeight: 700, }}
                    >
                        &nbsp;8 (86156) 35-117
                    </span>
                </span>
                {
                    isAuthenticated ? (
                        <Logged
                            userName = { userName }
                            onClick = { this.handleProfileMenuOpen }
                            style = { login.button }
                            { ...this.props }
                            { ...this.state }
                        />
                    ) : (
                        <Login
                            onClick = { this.handleLoginClick }
                            style = { login.button }
                            { ...this.props }
                        />
                    )
                }
                { renderMenuLogon }
            </span>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        userName: state.auth.userName,
    };
};

const LoginControlWithTheme = (props) => {
    const theme = useTheme();
    return <LoginControl {...props} theme={theme} />;
};

export default connect(mapStateToProps)(LoginControlWithTheme);
