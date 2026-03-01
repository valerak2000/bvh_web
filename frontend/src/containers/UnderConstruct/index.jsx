import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function UnderConstructView() {
    const theme = useTheme();
    const { card } = theme.app;

    return (
        <Card
            sx = { card }
        >
            <CardHeader
                title = 'Страница находится в разработке'
                sx = { card.title }
            />
        </Card>
    );
}

export default UnderConstructView;
