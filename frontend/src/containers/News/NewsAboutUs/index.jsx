import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';

const styles = theme => ({
    text: {
        margin: 'auto auto auto 2rem',
    },
});

const brupress = '/static/images/brupress_ru.png';
const kbereg = '/static/images/kbereg_info.ico';
const news = [
    {
        id: '1',
        date: '06.03.2017',
        source: 'kbereg.info', 
        icon: kbereg, 
        title: 'Из отчетного доклада главы Брюховецкого района Владимира Мусатова на открытой сессии Совета муниципального образования Брюховецкий район.',
        url: 'http://kbereg.info/iz-otchetnogo-doklada-glavy-bryuhovetskogo-rajona-vladimira-musatova-na-otkry-toj-sessii-soveta-munitsipal-nogo-obrazovaniya-bryuhovetskij-rajon/'
    },
    {
        id: '2',
        date: '21.03.2018', 
        source: 'brupress.ru', 
        icon: brupress, 
        title: 'Свободненский участок «Брюховецкого водопроводного хозяйства» в нашем районе признан лучшим. Об этом говорят его дела.',
        url: 'http://brupress.ru/2018/03/21/svobodnenskij-uchastok-bryuhovetskogo-vodoprovodnogo-hozyajstva-v-nashem-rajone-priznan-luchshim-ob-etom-govoryat-ego-dela/'
    },
    {
        id: '3',
        date: '02.07.2018', 
        source: 'brupress.ru', 
        icon: brupress, 
        title: 'С 1 июля выросли тарифы ЖКХ и увеличится стоимость сотовой связи. Сколько теперь платить брюховчанам?',
        url: 'http://brupress.ru/2018/07/02/s-1-iyulya-vyrosli-tarify-zhkh-i-uvelichitsya-stoimost-sotovoj-svyazi-skolko-teper-platit-bryuhovchanam/'
    },
    {
        id: '4',
        date: '09.07.2018', 
        source: 'kbereg.info', 
        icon: kbereg, 
        title: 'Ответы главы Брюховецкого района Владимира Мусатова на вопросы граждан.',
        url: 'http://kbereg.info/otvety-glavy-bryuhovetskogo-rajona-vladimira-musatova-na-voprosy-grazhdan/'
    },
];

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
                    {
                        news.length > 0 ? (
                            <List>
                                { news.map(r => (
                                    <ListItem
                                        button
                                        key = { r.id }
                                        component = 'a'
                                        href = { r.url }
                                        target = '_blank'
                                    >
                                        <ListItemAvatar>
                                            <Avatar alt = 'Источник новости' src = { r.icon } />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary = { `${ r.date } ${ r.title }` }
                                            primaryTypographyProps = {{
                                                variant: 'body1',
                                                color: 'textSecondary'
                                            }}
                                            secondary = { r.source }
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <Typography
                                    variant = 'body1'
                                    color = 'textSecondary'
                                    className = { classes.text }
                                >
                                    Новостей о нас нет.
                                </Typography>
                            )
                    }
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, { name: 'muiNewsAboutUsView', flip: false, withTheme: true })(NewsAboutUsView);
//export { NewsAboutUsView as NewsAboutUsViewNotConnected };
/*
                            <React.Fragment key = 'news_about_us'>
                                <Table
                                    actionColumns = { configActionColumns }
                                    tableHeaderColor = 'primary'
                                    tableHead = {['Дата', 'Источник', 'Заголовок', 'Ссылка']}
                                    tableData = { news }
                                />
                            </React.Fragment>

*/