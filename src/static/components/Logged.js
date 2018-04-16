import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import muiThemeable from 'material-ui/styles/muiThemeable';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { authLogoutAndRedirect } from '../actions/auth';

class Logged extends React.Component {
    logout = () => {
        console.log("logout");
        this.props.dispatch(authLogoutAndRedirect());
    };

    render() {
        return (
            <div>
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
                    />
                    <Divider />
                    <MenuItem
                        primaryText="Выйти"
                        leftIcon={<FontIcon className="fa fa-sign-out" />}
                        onClick = {() => this.logout()}
                    />
                </IconMenu>
            </div>
        );
    }
}

/*const Logged = (props) => (
);*/
const mapStateToProps = (state, ownProps) => {
    return {
    };
};

Logged.muiName = 'IconMenu';

export default muiThemeable()(connect(mapStateToProps)(Logged));