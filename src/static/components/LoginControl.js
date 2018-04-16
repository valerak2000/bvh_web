import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import muiThemeable from 'material-ui/styles/muiThemeable';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { authLogoutAndRedirect } from '../actions/auth';
import { SiteMenu } from './SiteMenu'

export function Login(props) {
//        (<SiteMenu />)
    return (
        (<FlatButton
            /*{...this.props}*/
            label = "Личный кабинет"
            icon = {
                <FontIcon
                    className = "fa fa-sign-in"
                />
            }
            onClick = {props.onClick}
        />)
    );
}

export function Logged(props) {
    return (
        <div>
            <SiteMenu />
            <IconMenu
                /*{...props}*/
                iconButtonElement={
                  <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
                <MenuItem
                    primaryText="Личная информация"
                    leftIcon={<FontIcon className="fa fa-lock" />}
                    onClick = {props.onClickProtected}
                />
                <Divider />
                <MenuItem
                    primaryText="Выйти"
                    leftIcon={<FontIcon className="fa fa-sign-out" />}
                    onClick = {props.onClickLogout}
                />
            </IconMenu>
        </div>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isAuthenticated: false};
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleProtectedClick = this.handleProtectedClick.bind(this);
    }

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
                onClickLogout={this.handleLogoutClick}
                onClickProtected={this.handleProtectedClick}
              />
            ) : (
              <Login onClick={this.handleLoginClick}/>
        );


        return (
            <div>
        <SiteMenu />
            </div>
        );
    }
}

/*
                 {appButtons}

            <div>
  <ToolbarGroup>
    <FlatButton label="Dashboard"/>
    <FlatButton label="Settings"/>
    <FlatButton label="Profile"/>
                {button}
  </ToolbarGroup>
            </div>

            <div style={{width: '100%',}}>
                <SiteMenu />
                {button}
            </div>
*/

const mapStateToProps = (state, ownProps) => {
    return {
    };
};

export default muiThemeable()(connect(mapStateToProps)(LoginControl));
