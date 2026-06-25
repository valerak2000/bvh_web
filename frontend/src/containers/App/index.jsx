// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';

import appRoutes from '../../routes/App.jsx';

const switchRoutes = (
    <Routes>
        {appRoutes.map((prop, key) =>
            prop.redirect ? (
                <Route path={prop.path} element={<Navigate to={prop.to} replace />} key={key} />
            ) : prop.path ? (
                <Route path={prop.path} element={<prop.component />} key={key} end={prop.exact} />
            ) : (
                <Route path="*" element={<prop.component />} key={key} />
            )
        )}
    </Routes>
);

function AppView(props) {
    const theme = useTheme();
    const { children } = props;

    let appStyle = { ...theme.app };

    /*if (props.location && props.location.pathname != null) {
        let urls = props.location.pathname.split('/');
        appStyle.width = urls.length <= 2 || urls[2] === '' ? '100%' : '80%';
    }*/

    return (
        <div style={appStyle}>
            {switchRoutes}
            {children}
        </div>
    );
}

AppView.propTypes = {
    children: PropTypes.node,
    location: PropTypes.object.isRequired
};

export default AppView;
