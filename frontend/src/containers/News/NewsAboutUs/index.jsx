import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
//import CardMedia from '@material-ui/core/CardMedia';
//import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';

class NewsAboutUsView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    render() {
        const { classes } = this.props;
        const { card } = this.props.theme.app;

        return (
            <Card
                style = { card }
            >
                <CardHeader
                    title = 'СМИ о нашей работе'
                    { ...this.props }
                />
                <CardContent
                    style = { card.text }
                >
                    <a 
                        href = "http://kbereg.info/iz-otchetnogo-doklada-glavy-bryuhovetskogo-rajona-vladimira-musatova-na-otkry-toj-sessii-soveta-munitsipal-nogo-obrazovaniya-bryuhovetskij-rajon/" 
                        target = "_blank"
                    >
                        06.03.2017. kbereg.info - Из отчетного доклада главы Брюховецкого района Владимира Мусатова на открытой сессии Совета муниципального образования Брюховецкий район.
                    </a>
                    <br/>
                    <a 
                        href = "http://brupress.ru/2018/03/21/svobodnenskij-uchastok-bryuhovetskogo-vodoprovodnogo-hozyajstva-v-nashem-rajone-priznan-luchshim-ob-etom-govoryat-ego-dela/" 
                        target = "_blank"
                    >
                        21.03.2018. brupress.ru - Свободненский участок «Брюховецкого водопроводного хозяйства» в нашем районе признан лучшим. Об этом говорят его дела.
                    </a>
                    <br/>
                    <a 
                        href = "http://kbereg.info/otvety-glavy-bryuhovetskogo-rajona-vladimira-musatova-na-voprosy-grazhdan/" 
                        target = "_blank"
                    >
                        09.07.2018. kbereg.info - Ответы главы Брюховецкого района Владимира Мусатова на вопросы граждан.
                    </a>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(null, { name: 'muiNewsAboutUsView', flip: false, withTheme: true })(NewsAboutUsView);
//export { NewsAboutUsView as NewsAboutUsViewNotConnected };
