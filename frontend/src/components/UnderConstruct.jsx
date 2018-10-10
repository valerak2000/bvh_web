import React, { Component } from 'react';
import withTheme from '@material-ui/core/styles/withTheme';
import Typography from '@material-ui/core/Typography';

class UnderConstruct extends Component {
    render() {
        return (
            <Typography
                variant = "subheading"
            >
                Раздел находится в раработке
            </Typography>
        );
    }
}

UnderConstruct.muiName = 'UnderConstruct';

export default withTheme()(UnderConstruct);
