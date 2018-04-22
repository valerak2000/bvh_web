import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
//import { getStyles } from 'material-ui/AppBar/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
//import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import muiThemeable from 'material-ui/styles/muiThemeable';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { authLogoutAndRedirect } from '../actions/auth';

export function Login(props) {
    return (
        <FlatButton
            label = 'Личный кабинет'
            labelPosition = 'before'
            labelStyle = { props.style.label }
            icon = {
                <FontIcon
                    className = 'fa fa-sign-in'
                />
            }
            onClick = { props.onClick }
            style = { props.style }
        />
    );
}

export function Logged(props) {
    return (
        <IconMenu
            /*{...props}*/
            iconButtonElement = {
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin = {{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin = {{ horizontal: 'right', vertical: 'top' }}
        >
            <MenuItem
                primaryText = 'Личная информация'
                leftIcon = { <FontIcon className='fa fa-lock' /> }
                onClick = { props.onClickProtected }
            />
            <Divider />
            <MenuItem
                primaryText = { props.userName } /*'Выйти'*/
                rightIcon = { <FontIcon className='fa fa-sign-out' /> }
                onClick = { props.onClickLogout }
            />
        </IconMenu>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isAuthenticated: false };
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleProtectedClick = this.handleProtectedClick.bind(this);
    }

    static propTypes = {
        userName: PropTypes.string,
        dispatch: PropTypes.func.isRequired
    };

    static defaultProps = {
        userName: ''
    };


    handleLoginClick = () => {
        this.props.dispatch(push('/login'));
    };

    handleLogoutClick = () => {
        this.props.dispatch(authLogoutAndRedirect());
    };

    handleProtectedClick = () => {
        this.props.dispatch(push('/protected'));
    };

    render() {
        const isAuthenticated = this.props.isAuthenticated;
        const appButtons = isAuthenticated ? (
              <Logged
                userName = { this.props.userName }
                onClickLogout = { this.handleLogoutClick }
                onClickProtected = { this.handleProtectedClick }
                style = { this.props.style }
              />
            ) : (
              <Login
                onClick = { this.handleLoginClick }
                style = { this.props.style }
              />
        );

        return (
            <div id = 'LoginControl' style = { this.props.style } >
                { appButtons }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        userName: state.auth.userName,
    };
};

LoginControl.muiName = 'Login';

export default muiThemeable()(connect(mapStateToProps)(LoginControl));
