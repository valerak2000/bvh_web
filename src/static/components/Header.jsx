import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

import LoginControl from './LoginControl';
import SiteMenu from './SiteMenu';
import bvhLogo from '../images/logo_bvh.png';

class Header extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired,
        location: PropTypes.shape({
            pathname: PropTypes.string
        })
    };

    static get contextTypes() {
        return {
            muiTheme: PropTypes.object.isRequired
        };
    }

    static defaultProps = {
    };

    constructor(props) {
        super(props);
    }

    goToIndex = () => {
        this.props.dispatch(push('/'));
    };

    render() {

        return (
            <header 
                style = { this.props.muiTheme.app.header }
            >
                <AppBar
                    titleStyle = { this.props.muiTheme.app.header.appBar.titleStyle }
                    iconElementLeft = {
                        <div
                            id = 'ElementLeft'
                            style = { this.props.muiTheme.app.header.appBar.elementLeft }
                        >
                            <IconButton
                                style = { this.props.muiTheme.app.header.appBar.elementLeft.logo }
                                iconStyle = { this.props.muiTheme.app.header.appBar.elementLeft.logo.picture }
                                onClick = { this.goToIndex }
                            >
                                <img
                                    src = { bvhLogo }
                                    alt = 'Главная'
                                />
                            </IconButton>
                            <SiteMenu
                                style = { this.props.muiTheme.app.header.appBar.elementLeft.menu }
                                { ...this.props }
                            />
                        </div>
                    }
                    iconStyleLeft = { this.props.muiTheme.app.header.appBar.elementLeft.iconStyleLeft }
                    iconElementRight = {
                        <div
                            id = 'ElementRight'
                            style = { this.props.muiTheme.app.header.appBar.elementRight }
                        >
                            <LoginControl
                                isAuthenticated = { this.props.isAuthenticated }
                                style = { this.props.muiTheme.app.header.appBar.elementRight.login }
                            />
                        </div>
                    }
                    iconStyleRight = { this.props.muiTheme.app.header.appBar.elementLeft.iconStyleRight }
                    showMenuIconButton = { true }
                />
            </header>
        );
    }
}
/*
*/

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        location: state.routing.location
    };
};

/*function mapDispatchToProps (dispatch) {
    return {
    }
}*/

Header.muiName = 'Header';

export default muiThemeable()(connect(mapStateToProps)(Header));
//export default muiThemeable()(connect(mapStateToProps, mapDispatchToProps)(Header));

/*

<Paper style = {{
  display: 'inline-block',
  margin: '16px 32px 16px 0',
}}>
      <Menu>
        <MenuItem primaryText="Maps" />
        <MenuItem primaryText="Books" />
        <MenuItem primaryText="Flights" />
        <MenuItem primaryText="Apps" />
      </Menu>
    </Paper>

       <Drawer
          docked={true}
          open={true}
          swipeAreaWidth=30
          zDepth=0
          disableSwipeToOpen={false}
          openSecondary={false}
        >
          <MenuItem
            onTouchTap={() => { this.toggleDrawer() }}
            primaryText="Home"
          />
          <MenuItem
            onTouchTap={() => { this.toggleDrawer() }}
            primaryText="Some Component"
          />
        </Drawer>

*/
