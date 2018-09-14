import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
//import SvgIcon from 'material-ui/SvgIcon';
import Divider from 'material-ui/Divider';
import Badge from 'material-ui/Badge';
//import ActionInput from 'material-ui/svg-icons/action/input';
//import { grey50 }  from 'material-ui/styles/colors';

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
    //console.log({faSignInAlt});
    //console.log(faSignInAlt.icon[4]);
    return (
        <FlatButton
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
    );
}

/*
                <SvgIcon { ...props }>
                <path d={ faSignInAlt.icon[4] } />
              </SvgIcon>
                <FontAwesomeIcon
                    icon = { faSignInAlt }
                    size = '1x'
                    color = { Colors.grey50 }
                    style = { props.style.button.icon }
                />
                <FontIcon
                    className = 'fa fa-sign-in'
                    style = { props.style.button.icon }
                />

                <FontIcon 
                    className = "material-icons"
                    color = { Colors.grey50 }
                >
                    home
                </FontIcon>

                <ActionInput 
                    color = { Colors.grey50 }
                />

            icon = {
                <IconButton
                    style = { props.style.button.icon }
                >
                    <ActionInput />
                </IconButton>
            }
                    iconStyle={styles.largeIcon}

*/
export function Logged(props) {
    return (
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
                primaryText = { props.userName } /*'Выйти'*/
                leftIcon = { 
                    <FontAwesomeIcon
                        icon = { faSignOutAlt }
                        style = { props.style.button.icon }
                    />
                }
                onClick = { props.onClickLogout }
            />
        </IconMenu>
    );
}

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleProtectedClick = this.handleProtectedClick.bind(this);
    }

    static propTypes = {
        userName: PropTypes.string,
        dispatch: PropTypes.func.isRequired,
    };

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
        const login = this.props.muiTheme.app.header.appBar.elementRight.login;
        const badge = this.props.muiTheme.app.header.appBar.elementRight.login.badge;

        return (
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
        );
    }
}
/*
*/

const mapStateToProps = (state, ownProps) => {
    return {
        userName: state.auth.userName,
    };
};

LoginControl.muiName = 'Login';

export default muiThemeable()(connect(mapStateToProps)(LoginControl));