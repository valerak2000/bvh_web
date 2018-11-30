import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withTheme from '@material-ui/core/styles/withTheme';
import { Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';
//import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import UnderConstruct from '../../../components/UnderConstruct/UnderConstruct';

class NewsAboutUsView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
    };

    static defaultProps = {
    };

    render() {
        const { card } = this.props.theme.app;

        return (
            <Card
                style = { card }
            >
                <CardHeader
                    title = 'СМИ о нашей работе'
                    titleTypographyProps = { card.title }
                />
                <CardContent
                    style = { card.text }
                >
                    <a 
                        href="http://kbereg.info/iz-otchetnogo-doklada-glavy-bryuhovetskogo-rajona-vladimira-musatova-na-otkry-toj-sessii-soveta-munitsipal-nogo-obrazovaniya-bryuhovetskij-rajon/" 
                        target = "_blank"
                    >
                        06.03.2017. kbereg.info - Из отчетного доклада главы Брюховецкого района Владимира Мусатова на открытой сессии Совета муниципального образования Брюховецкий район.
                    </a>
                    <br/>
                    <a 
                        href="http://kbereg.info/otvety-glavy-bryuhovetskogo-rajona-vladimira-musatova-na-voprosy-grazhdan/" 
                        target = "_blank"
                    >
                        09.07.2018. kbereg.info - Ответы главы Брюховецкого района Владимира Мусатова на вопросы граждан.
                    </a>
                </CardContent>
            </Card>
        );
    }
}

export default withTheme()(NewsAboutUsView);
export { NewsAboutUsView as NewsAboutUsViewNotConnected };
