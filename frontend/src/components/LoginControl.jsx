import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

import withTheme from '@material-ui/core/styles/withTheme';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
//import FontIcon from 'material-ui/FontIcon';
import Divider from '@material-ui/core/Divider';
import Badge from '@material-ui/core/Badge';

import { authLogoutAndRedirect } from '../actions/auth';

//import { library } from '@fortawesome/fontawesome-svg-core';
//import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSignInAlt, faSignOutAlt, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/*library.add(
    fab,
    faCoffee,
    faCog,
    faSpinner,
    faQuoteLeft,
    faSquare,
    faSignInAlt
);*/

/*eslint no-console: ["error", { allow: ["info", "warn", "error"] }] */
export function Login(props) {
    return (
        <IconButton
        aria-label = 'Войти'
        onClick = { props.onClick }
        disableTouchRipple = { true }
        style = { props.style.button }
    >
        Войти    
        <FontAwesomeIcon
            icon = { faSignInAlt }
            style = { props.style.button.icon }
        />
    </IconButton>
);
}
/*
        <Button
            label = 'Войти'
            mini = { true }
            onClick = { props.onClick }
            clickable = { true }
            disableTouchRipple = { true }
            style = { props.style.button }
        >
            Войти
            <FontAwesomeIcon
                icon = { faSignInAlt }
                style = { props.style.button.icon }
            />
        </Button>


<Button
            label = 'Войти'
            labelPosition = 'before'
            labelStyle = { props.style.button.label }
            icon = { 
                <FontAwesomeIcon
                    icon = { faSignInAlt }
                    style = { props.style.button.icon }
                />
            }
            onClick = { props.onClick }
            disableTouchRipple = { true }
            style = { props.style.button }
            hoverColor = { props.style.button.hoverColor }
        />
*/

export function Logged(props) {
    return (
        <div></div>
    );
}
/*
        <IconMenu
            iconButtonElement = {
                <IconButton>
                    <MoreVertIcon />
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
    };

    constructor(props, context) {
        super(props, context);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleProtectedClick = this.handleProtectedClick.bind(this);
    }

    static defaultProps = {
        userName: '',
    };

    state = {
        isAuthenticated: false
    };

    handleLoginClick = (e) => {
        e.preventDefault();
        this.props.dispatch(push('/login'));
    };

    handleLogoutClick = (e) => {
        e.preventDefault();
        this.props.dispatch(authLogoutAndRedirect());
    };

    handleProtectedClick = (e) => {
        e.preventDefault();
        this.props.dispatch(push('/protected'));
    };

    render() {
        const { isAuthenticated, userName } = this.props;
        const login = this.props.theme.app.header.appBar.elementRight.login;
        const badge = this.props.theme.app.header.appBar.elementRight.login.badge;

        return (
            <Badge
                id = 'LoginControl'
                badgeContent = {
                    <div>
                        <span style = {{ fontWeight: 100, }}>Круглосуточный диспетчер:</span>
                        <span style = {{ fontWeight: 700, }}> 8 (86156) 35-117</span>
                    </div>
                }
                badge = { badge }
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
        );
    }
}
/*
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

LoginControl.muiName = 'Login';

export default withTheme()(connect(mapStateToProps)(LoginControl));
