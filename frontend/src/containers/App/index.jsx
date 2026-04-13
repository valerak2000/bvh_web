import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withTheme } from '@mui/styles';
import { useTheme } from '@mui/material/styles';

import appRoutes from '../../routes/App.jsx';

const switchRoutes = (
    <Routes>
    {
        appRoutes.map((prop, key) =>
            prop.redirect ? (
                <Route
                    path={prop.path}
                    element={<Navigate to={prop.to} replace />}
                    key={key}
                />
            ) : (
                prop.path ? (
                    <Route
                        path={prop.path}
                        element={<prop.component />}
                        key={key}
                        end={prop.exact}
                    />
                ) : (
                    <Route
                        path="*"
                        element={<prop.component />}
                        key={key}
                    />
                )
            )
        )
    }
    </Routes>
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
