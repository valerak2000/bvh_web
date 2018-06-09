import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';

import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer'
import { Link } from 'react-router'

class App extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        children: PropTypes.shape().isRequired,
        dispatch: PropTypes.func.isRequired,
        location: PropTypes.shape({
            pathname: PropTypes.string
        }),
        //history: PropTypes.shape().isRequired,
    };

    static defaultProps = {
        location: undefined
    };

    static get contextTypes() {
        return {
            muiTheme: React.PropTypes.object.isRequired,
            router: React.PropTypes.object
        };
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    //    console.log('App');
    }

    render() {
        const homeClass = classNames({
            active: this.props.location && this.props.location.pathname === '/'
        });
        const protectedClass = classNames({
            active: this.props.location && this.props.location.pathname === '/protected'
        });
        const loginClass = classNames({
            active: this.props.location && this.props.location.pathname === '/login'
        });
        /*const aboutClass = classNames({
            active: this.props.location && this.props.location.pathname === '/about'
        });
        const customersClass = classNames({
            active: this.props.location && this.props.location.pathname === '/customers'
        });
        const newsClass = classNames({
            active: this.props.location && this.props.location.pathname === '/news'
        });
        const contactsClass = classNames({
            active: this.props.location && this.props.location.pathname === '/contacts'
        });*/
        var appStyle = { ...this.props.muiTheme.app };

        if (this.props.location && this.props.location.pathname != null) {
            let urls = this.props.location.pathname.split('/');
            appStyle.width = urls.length <= 2 || urls[2] === '' ? '100%' : '80%';
        }

        return (
            <div
                style = { appStyle }
            >
                { this.props.children }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        location: state.routing.location
    };
};

export default muiThemeable()(connect(mapStateToProps)(App));
export { App as AppNotConnected };

/*
                    docked={true}
                    open={true}
                    swipeAreaWidth={0}
                    zDepth={0}
                    disableSwipeToOpen={false}
                    openSecondary={false}
                    
*/