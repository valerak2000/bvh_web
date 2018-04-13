import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import muiThemeable from 'material-ui/styles/muiThemeable';
//import { authLogoutAndRedirect } from '../actions/auth';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';

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
                    <MenuItem primaryText="Refresh" />
                    <MenuItem primaryText="Help" />
                    <MenuItem primaryText="Sign out" />
                </IconMenu>
                <FlatButton
                    /*{...this.props}*/
                    label = "Выйти"
                    onClick = {() => this.logout()}
                    icon = {
                        <FontIcon
                            className = "fa fa-sign-out"
                        />
                    }
                />
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