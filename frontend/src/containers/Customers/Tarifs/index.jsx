import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTheme from '@material-ui/core/styles/withTheme';
import { Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';

import UnderConstruct from '../../../components/UnderConstruct/UnderConstruct';

class TarifsView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
    };

    static defaultProps = {
    };

    render() {
        const { сard } = this.props.theme.app;

        return (
            <Card
                square = { true }
                style = { сard }
            >
                <CardHeader
                    title = 'Тарифы'
                    titleTypographyProps = { сard.title }
                />
                <CardContent
                    style = { сard.text }
                >
                    <UnderConstruct />
                </CardContent>
            </Card>
        );
    }
}

export default withTheme()(TarifsView);
export { TarifsView as TarifsViewNotConnected };
