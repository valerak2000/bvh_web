import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withTheme from '@material-ui/core/styles/withTheme';
import { card, cardHeader, cardMedia, cardContent } from '@material-ui/core';

import UnderConstruct from '../../../components/UnderConstruct/UnderConstruct';

class FizlicaPeredachaPokazaniyView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
    };

    static defaultProps = {
    };

    render() {
        const { card } = this.props.theme.app;

        return (
            <card
                square = { true }
                style = { card }
            >
                <cardHeader
                    title = 'Передача показаний счетчиков'
                    titleTypographyProps = { card.title }
                />
                <cardContent
                    style = { card.text }
                >
                    <UnderConstruct />
                </cardContent>
            </card>
        );
    }
}

export default withTheme()(FizlicaPeredachaPokazaniyView);
export { FizlicaPeredachaPokazaniyView as FizlicaPeredachaPokazaniyViewNotConnected };
