import React from 'react';
import Grid from '@mui/material/Grid';

function GridContainer({ children, ...rest }) {
    return (
        <Grid
            container
            {...rest}
            sx={{
                margin: '0 -15px !important',
                width: 'unset'
            }}
        >
            {children}
        </Grid>
    );
}

export default GridContainer;
