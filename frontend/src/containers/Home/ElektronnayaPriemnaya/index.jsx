import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';
import UnderConstruct from '../../../components/UnderConstruct/UnderConstruct';

function ElektronnayaPriemnayaView(props) {
    const theme = useTheme();
    const { card } = theme.app;

    return (
        <Card
            square = { true }
            sx = { card }
        >
            <CardHeader
                title = 'Электронная приемная'
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

ElektronnayaPriemnayaView.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default ElektronnayaPriemnayaView;
