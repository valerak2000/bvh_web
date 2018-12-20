import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { push } from 'react-router-redux';
import Link from 'react-router-dom/Link';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
//import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
//import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons/faSignOutAlt';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';

import { authLogoutAndRedirect } from '../actions/auth';

const styles = theme => ({
});

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
            component = { Link } to = '/login'
            style = { props.style.button }
        >
            Войти    
            <FontAwesomeIcon
                icon = { faSignInAlt }
                style = { props.style.button.icon }
            />
        </Button>
    );
}
//            onClick = { props.onClick }

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
            style = { props.style.button }
        >
            <AccountCircle />
        </Button>
    );
}
/*
        <IconMenu
            iconButtonElement = {
                <IconButton>
                    <AccountCircle />
                </IconButton>
            }
            anchorOrigin = {{ horizontal: 'right', vertical: 'top' }}
            targetOrigin = {{ horizontal: 'right', vertical: 'top' }}
            style = { props.style.button }
            iconStyle = { props.style.button.iconMenu }
        >
            <MenuItem
                primaryText = 'Личный кабинет (Внести показания, узнать состояние баланса, заказать и оплатить услуги)'
                secondaryText = '123'
                leftIcon = {
                    <FontAwesomeIcon
                        icon = { faLock }
                        style = { props.style.button.icon }
                    />
                }
                onClick = { props.onClickProtected }
            />
            <Divider />
            <MenuItem
                primaryText = { props.userName }
                leftIcon = { 
                    <FontAwesomeIcon
                        icon = { faSignOutAlt }
                        style = { props.style.button.icon }
                    />
                }
                onClick = { props.onClickLogout }
            />
        </IconMenu>
*/

class LoginControl extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        userName: PropTypes.string,
        dispatch: PropTypes.func.isRequired,
        location: PropTypes.object.isRequired,
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    constructor(props, context) {
        super(props, context);
        this.handleProfileMenuOpen = this.handleProfileMenuOpen.bind(this);
        this.handleMenuClose = this.handleMenuClose.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        //this.handleProtectedClick = this.handleProtectedClick.bind(this);
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
        this.props.history.push('/login');
    };

    /*handleProtectedClick = (e) => {
        e.preventDefault();
        this.props.history.push('/protected');
    };*/

    render() {
        const { classes } = this.props;
        const { isAuthenticated, userName } = this.props;
        const { anchorEl } = this.state;
        const login = this.props.theme.app.header.appBar.login;
        const isMenuOpen = Boolean(anchorEl);
        const renderMenu = (
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
                    <IconButton color = 'inherit'>
                        <FontAwesomeIcon
                            icon = { faLock }
                            style = { login.button.icon }
                        />
                    </IconButton>
                    Личный кабинет (Внести показания, узнать состояние баланса, заказать и оплатить услуги)
                </MenuItem>
                <Divider />
                <MenuItem
                    onClick = { this.handleLogoutClick }
                >
                    <IconButton color = 'inherit'>
                        <FontAwesomeIcon
                            icon = { faSignOutAlt }
                            style = { login.button.icon }
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
                { renderMenu }
            </span>
        );
    }
}
/*
                            link = '/login'
            <Badge
                id = 'LoginControl'
                badgeContent = {
                    <div>
                        <span style = {{ fontWeight: 100, }}>Круглосуточный диспетчер:</span>
                        <span style = {{ fontWeight: 700, }}> 8 (86156) 35-117</span>
                    </div>
                }
                badge = {{ fontWeight: 100, }}
                style = { login.badge }
            >
            {
                isAuthenticated ? (
                    <Logged
                        userName = { userName }
                        onClickLogout = { this.handleLogoutClick }
                        onClickProtected = { this.handleProtectedClick }
                        style = { login }
                        { ...this.props }
                    />
                ) : (
                    <Login
                        onClick = { this.handleLoginClick }
                        style = { login }
                        { ...this.props }
                    />
                )
            }
            </Badge>

            <Badge
                id = 'LoginControl'
                badgeContent = {
                    <div>
                        <span style = {{ fontWeight: 100, }}>Круглосуточный диспетчер:</span>
                        <span style = {{ fontWeight: 700, }}> 8 (86156) 35-117</span>
                    </div>
                }
                badgeStyle = { badge }
            >
            {
                isAuthenticated ? (
                    <Logged
                        userName = { userName }
                        onClickLogout = { this.handleLogoutClick }
                        onClickProtected = { this.handleProtectedClick }
                        style = { login }
                    />
                ) : (
                    <Login
                        onClick = { this.handleLoginClick }
                        style = { login }
                    />
                )
            }
            </Badge>
*/

const mapStateToProps = (state, ownProps) => {
    return {
        userName: state.auth.userName,
    };
};

export default withStyles(styles, { name: 'LoginControl', flip: false, withTheme: true })(connect(mapStateToProps)(LoginControl));
