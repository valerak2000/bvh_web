import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';
import UnderConstruct from '../../../components/UnderConstruct/UnderConstruct';

function AvailableCapacityMapView(props) {
    const theme = useTheme();
    const { card } = theme.app;

    return (
        <Card
            square = { true }
            sx = { card }
        >
            <CardHeader
                title = 'Карта доступной мощности'
                { ...props }
            />
            <CardContent
                sx = { card.text }
            >
                <UnderConstruct />
            </CardContent>
        </Card>
    );
}

AvailableCapacityMapView.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default AvailableCapacityMapView;
