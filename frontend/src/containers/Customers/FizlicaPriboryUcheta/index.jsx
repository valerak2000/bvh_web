import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';
import UnderConstruct from '../../../components/UnderConstruct/UnderConstruct';

const FizlicaPriboryUchetaView = () => {
    const theme = useTheme();
    const card = theme.app?.card || {};

    return (
        <Card square sx={card}>
            <CardHeader title="Приборы учета" />
            <CardContent sx={card.text}>
                <UnderConstruct />
            </CardContent>
        </Card>
    );
};

export default FizlicaPriboryUchetaView;
