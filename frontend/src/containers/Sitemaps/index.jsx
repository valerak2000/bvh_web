import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import CardHeader from '../../components/Card/CardHeaderImpl.jsx';
import { MENU } from '../../constants/menuStruct';

function ListSiteMaps(props) {
    const theme = useTheme();
    const listItems = props.items.map((item, index) => {
        var itemMap = '';

        if ((item.dataRoute === undefined || item.dataRoute === null || item.disabled === true))
            itemMap = <ListItem
                    key = { item.key }
                    disableGutters
                    sx = {{
                        paddingTop: 0,
                        paddingBottom: 0,
                    }}
                >
                    { item.leftIcon
                        && <ListItemIcon sx = {{
                            marginRight: 0,
                            color: alpha(theme.palette.text.secondary, 0.64),
                        }}>
                            { item.leftIcon }
                        </ListItemIcon> }
                    { props.topLevel &&
                        <Typography
                            variant = 'body1'
                            color = 'textSecondary'
                            sx = {{
                                margin: 'auto auto auto 0.5rem',
                                textAlign: 'justify',
                                textIndent: '1.5em',
                            }}
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
                    sx = {{
                        paddingTop: 0,
                        paddingBottom: 0,
                    }}
                    onClick = { (e) => props.onClick(item.dataRoute, e) }
                >
                    { item.leftIcon
                        && <ListItemIcon sx = {{
                            marginRight: 0,
                            color: alpha(theme.palette.text.secondary, 0.64),
                        }}>
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
                { item.children !== undefined && item.children.length > 0 && item.disabled !== true
                    && ( <Collapse
                            in = { true }
                            timeout = 'auto'
                            unmountOnExit
                            sx = {{
                                paddingLeft: theme.spacing(8),
                            }}
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
                    sx = {{
                        margin: 'auto auto auto 0.5rem',
                        textAlign: 'justify',
                        textIndent: '1.5em',
                    }}
                >
                    Карта сайта отсутствует.
                </Typography>
            )}
        </React.Fragment>
    );
}

function MapsView(props) {
    const theme = useTheme();
    const { card } = theme.app;

    const handleClick = (dataRoute, e ) => {
        props.history.push(dataRoute);
    };

    return (
        <Card
            square = { true }
            sx = { card }
        >
            <CardHeader
                title = 'Карта сайта'
                { ...props }
            />
            <CardContent>
                <div
                    sx = {{
                        display: 'block',
                        margin: '-1rem auto',
                    }}
                >
                    <ListSiteMaps
                        items = { MENU }
                        onClick = { handleClick }
                        topLevel
                        { ...props }
                    />
                </div>
            </CardContent>
        </Card>
    );
}

MapsView.propTypes = {
    theme: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export default MapsView;
