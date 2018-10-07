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
        return (
            <Card
                style = { this.props.theme.app.сard }
            >
                <CardHeader
                    title = 'Страница находится в разработке'
                    titleStyle = { this.props.theme.app.сard.title }
                />
            </Card>
        );
    }
}

export default withTheme()(UnderConstructView);
export { UnderConstructView as UnderConstructViewNotConnected };
