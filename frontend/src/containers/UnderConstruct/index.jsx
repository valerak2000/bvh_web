import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withTheme from '@material-ui/core/styles/withTheme';
import { Card, CardHeader } from '@material-ui/core';

class UnderConstructView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { сard } = this.props.theme.app;
        
        return (
            <Card
                style = { сard }
            >
                <CardHeader
                    title = 'Страница находится в разработке'
                    titleStyle = { сard.title }
                />
            </Card>
        );
    }
}

export default withTheme()(UnderConstructView);
export { UnderConstructView as UnderConstructViewNotConnected };