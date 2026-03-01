import React, { Component } from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

class UnderConstruct extends Component {
    render() {
        return (
            <Typography
                variant = 'h3'
                color = 'textSecondary'
            >
                Раздел находится в разработке
            </Typography>
        );
    }
}

const UnderConstructWithTheme = (props) => {
    const theme = useTheme();
    return <UnderConstruct {...props} theme={theme} />;
};

export default UnderConstructWithTheme;
