import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import { fade } from '@material-ui/core/styles/colorManipulator';

import CardHeader from '../../components/Card/CardHeaderImpl.jsx';
import { MENU } from '../../constants/menuStruct';

const styles = theme => ({
    text: {
        margin: 'auto auto auto 0.5rem',
        textAlign: 'justify',
        textIndent: '1.5em',
    },
    icon: {
        marginRight: 0,
        color: fade(theme.palette.text.secondary, 0.64),
    },
    children: {
        paddingLeft: theme.spacing.unit * 8,
    },
    mapItem: {
        paddingTop: 0,
        paddingBottom: 0,
    },
});

function ListSiteMaps(props) {
    const { classes } = props;
    const listItems = props.items.map((item, index) => {
        var itemMap = '';

        if ((item.dataRoute === undefined || item.dataRoute === null))
            itemMap = <ListItem 
                    key = { item.key } 
                    disableGutters
                    className = { props.classes.mapItem }
                >
                    { item.leftIcon
                        && <ListItemIcon className = { classes.icon }>
                            { item.leftIcon }
                        </ListItemIcon> }
                    { props.topLevel &&
                        <Typography
                            variant = 'body1'
                            color = 'textSecondary'
                            className = { classes.text }
                        >
                            <strong>{ `${ item.primaryText }` }</strong><br />
                        </Typography> }
                    { !props.topLevel &&
                        <ListItemText 
                            primary = { item.primaryText } 
                            primaryTypographyProps = {{
                                variant: 'body1',
                                color: 'textSecondary',
                            }}
                        /> }
                </ListItem>;
        else
            itemMap = <ListItem 
                    key = { item.key } 
                    button
                    disableGutters
                    className = { props.classes.mapItem }
                    onClick = { (e) => props.onClick(item.dataRoute, e) }
                >
                    { item.leftIcon
                        && <ListItemIcon className = { classes.icon }>
                            { item.leftIcon }
                        </ListItemIcon> }
                    <ListItemText 
                        primary = { item.primaryText } 
                        primaryTypographyProps = {{
                            variant: 'body1',
                            color: 'textSecondary',
                        }}
                    />
                </ListItem>;
        return (
            <React.Fragment key = { index }>
                { itemMap }
                { item.children !== undefined && item.children.length > 0
                    && ( <Collapse 
                            in = { true }
                            timeout = 'auto'
                            unmountOnExit
                            className = { classes.children }
                        >
                            <ListSiteMaps 
                                items = { item.children }
                                onClick = { props.onClick }
                                classes = { props.classes }
                            />
                        </Collapse>
                ) }
            </React.Fragment>
        );
    });

    return (
        <React.Fragment key = 'site_map'>
            { props.items.length > 0 ? (
                <List disablePadding>
                    { listItems }
                </List>
            ) : (
                <Typography
                    variant = 'body1'
                    color = 'textSecondary'
                    className = { classes.text }
                >
                    Карта сайта отсутствует.
                </Typography>
            )}
        </React.Fragment>
    );
}

class MapsView extends Component {
    static propTypes = {
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    constructor(props, context) {
        super(props, context);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (dataRoute, e ) => {
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
                    title = 'Карта сайта'
                    { ...this.props }
                />
                <CardContent>
                    <div 
                        style = {{ 
                            display: 'block',
                            margin: '-1rem auto',
                        }}
                    >
                        <ListSiteMaps 
                            items = { MENU }
                            onClick = { this.handleClick }
                            topLevel
                            { ...this.props }
                        />
                    </div>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles, { name: 'muiMapsView', flip: false, withTheme: true })(MapsView);
/*
*/
