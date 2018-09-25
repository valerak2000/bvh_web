import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { push } from 'react-router-redux';
//import classNames from 'classnames';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import * as Colors from 'material-ui/styles/colors';

/*
import Paper from 'material-ui/Paper';
/import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer'
*/
import FloatingActionButton from 'material-ui/FloatingActionButton';
import NavigationArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';

class App extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        children: PropTypes.shape().isRequired,
        dispatch: PropTypes.func.isRequired,
        location: PropTypes.string,
        //history: PropTypes.object.isRequired
    };

    static defaultProps = {
        location: null,
        scrollStepInPx: 50,
        delayInMs: 16.66,
    };

    state = {
        intervalId: 0,
        goTopEnable: false,
    };
    
    static get contextTypes() {
        return {
            muiTheme: PropTypes.object.isRequired,
            router: PropTypes.object
        };
    }

    constructor(props, context) {
        super(props, context);
        this.scrollChange = this.scrollChange.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollChange);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollChange);
    }

    /*eslint no-console: ["error", { allow: ["info", "warn", "error"] }] */
    componentDidCatch(error, info) {

        /* Example stack information:
           in ComponentThatThrows (created by App)
           in ErrorBoundary (created by App)
           in div (created by App)
           in App
        */
        //console.log(info.componentStack);
    }

    scrollChange() {
        const notTop = window.pageYOffset === 0 ? false : true;
        if (notTop !== this.state.goTopEnable) {
            this.setState({ goTopEnable: notTop });
        }
    }
    
    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
    
    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    }
    
    render() {
        const { goTopEnable } = this.state;
        /*const homeClass = classNames({
            active: this.props.location && this.props.location.pathname === '/'
        });
        const protectedClass = classNames({
            active: this.props.location && this.props.location.pathname === '/protected'
        });
        const loginClass = classNames({
            active: this.props.location && this.props.location.pathname === '/login'
        });
        const aboutClass = classNames({
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
                { 
                    goTopEnable && 
                    <FloatingActionButton
                        style = {{
                            margin: 0,
                            top: 'auto',
                            right: 20,
                            bottom: 20,
                            left: 'auto',
                            position: 'fixed',
                        }}
                        mini = { true }
                        onClick = { () => this.scrollToTop() }
                        zDepth= { 2 }
                        backgroundColor = { Colors.white }
                    >
                        <NavigationArrowUpward />
                    </FloatingActionButton>
                }
                { this.props.children }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        location: location.pathname
        //location: state.routing.location
    };
};

export default muiThemeable()(connect(mapStateToProps)(App));
export { App as AppNotConnected };
