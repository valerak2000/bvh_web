import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import muiThemeable from 'material-ui/styles/muiThemeable';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    goToLogin = () => {
        console.log("login");
        this.props.dispatch(push('/login'));
    };

    render() {
        return (
            <FlatButton
                /*{...this.props}*/
                label = "Личный кабинет"
                icon = {
                    <FontIcon
                        className = "fa fa-sign-in"
                    />
                }
                onClick = {() => this.goToLogin()}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    };
};

export default muiThemeable()(connect(mapStateToProps)(Login));
