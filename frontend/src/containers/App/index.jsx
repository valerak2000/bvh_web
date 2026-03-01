import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';

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
                    <Route exact path = { prop.path } key = { key } >
                        < prop.component />
                    </Route>
                ) : (
                    <Route key = { key } >
                        < prop.component />
                    </Route>
                )
            )
        )
    }
    </Switch>
);

function AppView(props) {
    const theme = useTheme();
    const { children, location } = props;

    let appStyle = { ...theme.app };

    /*if (location && location.pathname != null) {
        let urls = location.pathname.split('/');
        appStyle.width = urls.length <= 2 || urls[2] === '' ? '100%' : '80%';
    }*/

    return (
        <div
            style = { appStyle }
        >
            { switchRoutes }
            { children }
        </div>
    );
}

AppView.propTypes = {
    children: PropTypes.node,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    router: PropTypes.object,
    isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    };
};

export default connect(mapStateToProps)(AppView);
