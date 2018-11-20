import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import withTheme from '@material-ui/core/styles/withTheme';

import appRoutes from '../../routes/App.jsx';

const switchRoutes = (
    <Switch>
    { 
        appRoutes.map((prop, key) =>
            prop.redirect ? (
                <Redirect 
                    from = { prop.path } 
                    to = { prop.to } 
                    key = { key } 
                />
            ) : (
                prop.path ? (
                    <Route 
                        exact
                        path = { prop.path }
                        component = { prop.component } 
                        key = { key } 
                    />
                ) : (
                    <Route 
                        component = { prop.component } 
                        key = { key } 
                    />
                )
            )
        )
    }
    </Switch>
);

class AppView extends Component {
    static propTypes = {
        //children: PropTypes.shape().isRequired,
        dispatch: PropTypes.func.isRequired,
        location: PropTypes.object.isRequired,
        theme: PropTypes.object.isRequired,
        router: PropTypes.object,
        isAuthenticated: PropTypes.bool.isRequired,
    };

    constructor(props, context) {
        super(props, context);
    }

    /*eslint no-console: ["error", { allow: ["info", "warn", "error"] }] */
    componentDidCatch(error, info) {
        /* Example stack information:
           in ComponentThatThrows (created by App)
           in ErrorBoundary (created by App)
           in div (created by App)
           in App
        */
        console.log(info.componentStack);
    }

    render() {
        var appStyle = { ...this.props.theme.app };

        if (this.props.location && this.props.location.pathname != null) {
            let urls = this.props.location.pathname.split('/');
            appStyle.width = urls.length <= 2 || urls[2] === '' ? '100%' : '80%';
        }

        return (
            <div
                style = { appStyle }
            >
                { switchRoutes }
                { this.props.children }
            </div>
        );
    }
}
/*
*/

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    };
};

export default withTheme()(connect(mapStateToProps)(AppView));
export { AppView as AppViewNotConnected };