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
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';

const styles = theme => ({
    text: {
        margin: 'auto auto auto 2rem',
    },
});

const news = [
    {
        id: '1',
        date: '31.12.2099',
        picture: '/static/images/water-glass-and-faucet.png',
        title: 'Тестовая новость',
        text: 'Содержание тестовой новости',
    },
];

function ListNews(props) {
    const { classes } = props;
    const listItems = props.items.map((item, index) => {
        return (
            <React.Fragment key = { index }>
            </React.Fragment>
        );
    });

    return (
        <React.Fragment key = 'News'>
            { props.items.length > 0 ? (
                <GridList cellHeight = { 180 } className = { classes.gridList }>
                    <GridListTile key = "Subheader" cols = { 2 } style = {{ height: 'auto' }}>
                        <ListSubheader component = "div">December</ListSubheader>
                    </GridListTile>
                </GridList>
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
            //expanded = [{ key: currentMenuSecond, open: true }];
            expanded = null;
        } else {
            expanded = state.expanded;
        }

        return {
            expanded: expanded,
        };
    }

    handleNewsClick = (dataRoute, key, e ) => {
        const indexOfmenu = this.state.expanded.findIndex(i => i.key === key);
        if (indexOfmenu > 0) {
            const expanded = this.state.expanded;
            expanded[indexOfmenu].open = !expanded[indexOfmenu].open;
        }
        this.setState({ activeItem: dataRoute });
        this.props.history.push(dataRoute);
    };

    render() {
        const { classes } = this.props;
        const { card } = this.props.theme.app;

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
                        { ...this.props }
                    />
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(null, { name: 'muiNewsView', flip: false, withTheme: true })(NewsView);
//export { NewsView as NewsViewNotConnected };
