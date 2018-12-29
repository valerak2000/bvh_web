import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

//import Table from '../../../components/Table/Table.jsx';
import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';

const styles = theme => ({
    text: {
        margin: 'auto auto auto 2rem',
    },
});

const news = [
    [
        '06.03.2017', 'kbereg.info', 'Из отчетного доклада главы Брюховецкого района Владимира Мусатова на открытой сессии Совета муниципального образования Брюховецкий район.',
        'http://kbereg.info/iz-otchetnogo-doklada-glavy-bryuhovetskogo-rajona-vladimira-musatova-na-otkry-toj-sessii-soveta-munitsipal-nogo-obrazovaniya-bryuhovetskij-rajon/'
    ],
    [
        '21.03.2018', 'brupress.ru', 'Свободненский участок «Брюховецкого водопроводного хозяйства» в нашем районе признан лучшим. Об этом говорят его дела.',
        'http://brupress.ru/2018/03/21/svobodnenskij-uchastok-bryuhovetskogo-vodoprovodnogo-hozyajstva-v-nashem-rajone-priznan-luchshim-ob-etom-govoryat-ego-dela/'
    ],
    [
        '02.07.2018', 'brupress.ru', 'С 1 июля выросли тарифы ЖКХ и увеличится стоимость сотовой связи. Сколько теперь платить брюховчанам?',
        'http://brupress.ru/2018/07/02/s-1-iyulya-vyrosli-tarify-zhkh-i-uvelichitsya-stoimost-sotovoj-svyazi-skolko-teper-platit-bryuhovchanam/'],
    [
        '09.07.2018', 'kbereg.info', 'Ответы главы Брюховецкого района Владимира Мусатова на вопросы граждан.',
        'http://kbereg.info/otvety-glavy-bryuhovetskogo-rajona-vladimira-musatova-na-voprosy-grazhdan/'
    ],
    //['', '', '', ''],
];

const configActionColumns = [
/*
        <a 
            href = "http://kbereg.info/otvety-glavy-bryuhovetskogo-rajona-vladimira-musatova-na-voprosy-grazhdan/" 
            target = "_blank"
        >
            Ответы главы Брюховецкого района Владимира Мусатова на вопросы граждан.
        </a>

    { Icon: Add, Tooltip: 'Add', Color: 'success', Callback: onAddClick },
    { Icon: Edit, Tooltip: 'Edit', Color: 'primary', Callback: onEditClick }
*/
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
                            <List
                            >
                                { news.map(record => (
                                    <ListItem
                                        button
                                        to = {`/customers/${record.id}`}
                                        component = { Link }
                                        key={record.id}
                                    >
                                        <ListItemText
                                            primary={`${record.first_name} ${record.last_name}`}
                                            className={classes.listItemText}
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

<a 
                        href = 'http://kbereg.info/iz-otchetnogo-doklada-glavy-bryuhovetskogo-rajona-vladimira-musatova-na-otkry-toj-sessii-soveta-munitsipal-nogo-obrazovaniya-bryuhovetskij-rajon/'
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
                        href = "http://brupress.ru/2018/07/02/s-1-iyulya-vyrosli-tarify-zhkh-i-uvelichitsya-stoimost-sotovoj-svyazi-skolko-teper-platit-bryuhovchanam/" 
                        target = "_blank"
                    >
                        02.07.2018. brupress.ru - С 1 июля выросли тарифы ЖКХ и увеличится стоимость сотовой связи. Сколько теперь платить брюховчанам?
                    </a>
                    <br/>
                    <a 
                        href = "http://kbereg.info/otvety-glavy-bryuhovetskogo-rajona-vladimira-musatova-na-voprosy-grazhdan/" 
                        target = "_blank"
                    >
                        09.07.2018. kbereg.info - Ответы главы Брюховецкого района Владимира Мусатова на вопросы граждан.
                    </a>

*/