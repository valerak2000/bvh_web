import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
//import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';

const styles = theme => ({
    text: {
        margin: 'auto auto auto 2rem',
    },
    heading: {
        fontSize: theme.typography.pxToRem(14),
        //flexBasis: '100%',
        //flexShrink: 0,
    },
    icon: {
//        color: 'rgba(255, 255, 255, 0.54)',
        color: 'white',
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 950,
        //height: 450,
        transform: 'translateZ(0)',
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
});

const brupress = '/static/images/brupress_ru.png';

const news = [
    {
        key: '1',
        date: '31.12.2089',
        picture: '/static/images/water-glass-and-faucet.png',
        title: 'Тестовая новость1',
        text: 'Содержание тестовой новости1',
    },
    {
        key: '2',
        date: '31.12.2091',
        picture: '/static/images/main_office1.webp',
        title: 'Длинная Тестовая новость2',
        text: 'Содержание длинной тестовой новости2<br />\
        Последствия разгрома группы боевиков "Ансар-аль-Тавад" в Северной Хаме.\
        Боевики в рамках спорадических боевых действий идущих по периметру Эль-Латаминского выступа попытались прощупать оборону сирийских войск.\
        По заявлениям боевиков, группа "Ансар-аль-Тавад" напала на один из блокпостов САА, в результате чего сирийцы потеряли от 18 до 40 убитыми и ранеными.\
        Сирийцы заявляют, что боевики преувеличивают их потери - пока что опубликовано 8 фотографий погибших сирийских военных и список из 16 погибших. Также показано 8 трупов убитых боевиков, которые были неплохо упакованы.\
        По итогам утреннего замеса, сирийская 122-152мм ствольная артиллерия усиленно долбила опорные пункты боевиков на Эль-Латаминском выступе. Потери противника в ходе ударов возмездия неизвестны.\
        Впрочем, существенных оперативных изменений по-прежнему нет.',
        cols: 2,
    },
    {
        key: '3',
        date: '31.12.2090',
        picture: '/static/images/main_office1.webp',
        title: 'Тестовая новость2',
        text: 'Содержание тестовой новости2',
    },
    {
        key: '4',
        date: '31.12.2092',
        picture: '/static/images/brupress_ru.png',
        title: 'Тестовая новость3',
        text: 'Содержание тестовой новости3',
    },
    {
        key: '5',
        date: '31.12.2093',
        picture: brupress,
        title: 'Тестовая новость4',
        text: 'Содержание тестовой новости4',
    },
];

function ListNews(props) {
    const { classes } = props;
    const listItems = props.items.map((item, index) => {
        if (!props.expanded.some(menu => menu.key === item.key))
            props.expanded.push({ key: item.key, open: false });

        let selectedItem = props.expanded.filter(menu => menu.key === item.key)[0];
        let open = selectedItem !== undefined && selectedItem.open !== undefined ? selectedItem.open : false;

        return (
            <GridListTile key = { index } cols = { item.cols || 1 }>
                <img src = { item.picture } alt = { item.title } />
                <GridListTileBar
                    title = { `${ item.date } ${ item.title }` }
                    actionIcon = {
                        <IconButton className = { classes.icon }>
                            <InfoIcon />
                        </IconButton>
                    }
                />
            </GridListTile>
        );
    });

    return (
        <React.Fragment key = 'News'>
            { props.items.length > 0 ? (
                <div className = { classes.root }>
                    <GridList
                        cols = { 3 }
                        cellHeight = { 180 }
                        className = { classes.gridList }
                    >
                        { listItems }
                    </GridList>
                </div>
            ) : (
                <Typography
                    variant = 'body1'
                    color = 'textSecondary'
                    className = { classes.text }
                >
                    Новостей нет.
                </Typography>
            )}
        </React.Fragment>
    );
}
/*
                <ExpansionPanel 
                    expanded = { open }
                    onChange = { (e) => props.onClick(item.key, e) }
                >
                    <ExpansionPanelSummary expandIcon = { <ExpandMoreIcon /> }>
                        <Avatar alt = 'Источник новости' src = { item.picture } />
                        <Typography 
                            variant = 'body1'
                            color = 'textSecondary'
                            className = { classes.heading }
                        >
                            { item.date } { item.title }
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography
                            variant = 'body2'
                            color = 'textSecondary'
                            className = { classes.text }
                        >
                            { item.text }
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <List>
                    { listItems }
                </List>

                <ListItem
                    button
                    key = { item.id }
                    component = 'a'
                    href = { item.url }
                    target = '_blank'
                >
                    <ListItemAvatar>
                        <Avatar alt = 'Источник новости' src = { item.icon } />
                    </ListItemAvatar>
                    <ListItemText
                        primary = { `${ item.date } ${ item.title }` }
                        primaryTypographyProps = {{
                            variant: 'body1',
                            color: 'textSecondary'
                        }}
                        secondary = { item.source }
                    />
                    { props.open ? <ExpandLess /> : <ExpandMore /> }
                </ListItem>
                <Collapse 
                    in = { props.expanded.filter(menu => menu.key === item.key)[0].open }
                    timeout = 'auto'
                    unmountOnExit
                >
                </Collapse>
*/

class NewsView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    state = {
        expanded: null,
    };

    constructor(props, context) {
        super(props, context);
        this.handleNewsClick = this.handleNewsClick.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        let expanded = null;

        if (state.expanded === null) {
            expanded = [{ key: news[0].key, open: false }];
            //expanded = null;
        } else {
            expanded = state.expanded;
        }

        return {
            expanded: expanded,
        };
    }

    handleNewsClick = (key, e ) => {
        const indexOfmenu = this.state.expanded.findIndex(i => i.key === key);
        if (indexOfmenu > -1) {
            const expanded = this.state.expanded;
            expanded[indexOfmenu].open = !expanded[indexOfmenu].open;
            this.setState({ expanded: expanded });
        }
        //this.props.history.push(id);
    };

    render() {
        const { classes } = this.props;
        const { card } = this.props.theme.app;
        const { expanded, ...props } = this.state;

        return (
            <Card
                square = { true }
                style = { card }
            >
                <CardHeader
                    title = 'Новости'
                    { ...this.props }
                />
                <CardContent
                    style = { card.text }
                >
                    <ListNews
                        items = { news }
                        onClick = { this.handleNewsClick }
                        expanded = { expanded }
                        { ...this.props }
                    />
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, { name: 'muiNewsView', flip: false, withTheme: true })(NewsView);
//export { NewsView as NewsViewNotConnected };
