import React, { Component } from 'react';
import withTheme from '@material-ui/core/styles/withTheme';

class UnderConstruct extends Component {
    render() {
        return (
            <div>
                <p>Раздел находится в раработке</p>
            </div>
        );
    }
}

UnderConstruct.muiName = 'UnderConstruct';

export default withTheme()(UnderConstruct);
