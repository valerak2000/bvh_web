import React, { Component } from 'react';
import { push } from 'react-router-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import withTheme from '@material-ui/core/styles/withTheme';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';

import { HOME_MENU, HOME_MENU_EP, HOME_MENU_BO, HOME_MENU_CM, HOME_MENU_FQ, HOME_MENU_MP,
    ABOUT_MENU, CUSTOMERS_MENU, NEWS_MENU } from '../constants';
import { MENU_HOME, MENU_ABOUT, MENU_CUSTOMERS, MENU_NEWS } from '../constants/menuStruct';

const styles = theme => ({
    drawerPaper: {
        position: 'relative',
    },
});
  
  function Menu(props) {
    let initiallyFocused = (props.initiallyFocused === undefined || props.initiallyFocused == null)
        ? props.items[0].key 
        : props.initiallyFocused;

    return (
        <List
            component = 'nav'
            style = { props.style }
        >
            {
                props.items.map((d, index) => {
                    var nested = [];
                    let initiallyOpenFirst = initiallyFocused === d.key ? true : false;


                    return (
                        <ListItem
                            key = { d.key }
                            button
                            dense
                            disableGutters
                            selected = { initiallyFocused === d.key ? true : false }
                            onClick = { (e) => props.onClick(d.dataRoute, e) }
                        >
                            { 
                                d.leftIcon && 
                                <ListItemIcon>
                                    { d.leftIcon }
                                </ListItemIcon>
                            }
                            <ListItemText 
                                primary = { d.primaryText } 
                                secondary = { d.secondaryText }
                                secondaryTypographyProps = {{ variant: 'body2'}}
                            />
                        </ListItem>
                    );
                })
            }
        </List>
    );
}
/*

                            primaryText = { d.primaryText }
                            secondaryText = { d.secondaryText }
                            secondaryTextLines = { d.secondaryTextLines }
                            leftIcon = { d.leftIcon }
                            isKeyboardFocused = { initiallyFocused === d.key ? true : false }
                            onClick = { (e) => props.onClick(d.dataRoute, e) }
                            autoGenerateNestedIndicator = { true }
                            primaryTogglesNestedList = { true }
                            initiallyOpen = { initiallyOpenFirst }
                            nestedItems = { nested }


                    if (d.nestedItems !== undefined && d.nestedItems.length > 0) {
                        d.nestedItems.map((ni, index) => {
                            let initiallySelectedSecond = initiallyFocused === d.key + '_' + ni.key ? true : false;
                            if (initiallySelectedSecond)
                                initiallyOpenFirst = initiallySelectedSecond;

                            nested.push(
                                <ListItem 
                                    key = { ni.key } 
                                    primaryText = { ni.primaryText }
                                    secondaryText = { ni.secondaryText }
                                    secondaryTextLines = { ni.secondaryTextLines }
                                    leftIcon = { ni.leftIcon }
                                    isKeyboardFocused = { initiallySelectedSecond }
                                    onClick = { (e) => props.onClick(ni.dataRoute, e) }
                                />
                            );
                        });
                    }

*/

class LeftNavMenu extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    state = {
        activeMenuTop: HOME_MENU,
        activeMenuSecond: null,
        activeMenuThird: null,
        activeItem: null,
    };

    constructor(props, context) {
        super(props, context);
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        //console.log(props.location);
        //console.log(location.pathname);
        let currentMenuTop = null;
        let currentMenuSecond = null;
        let currentMenuThird = null;

        if (props.location !== null && props.location) {
            let urls = props.location.pathname.split('/');
            currentMenuTop = urls[1] !== '' ? urls[1] : HOME_MENU;
            currentMenuSecond = urls.length <= 2 || urls[2] === '' ? null : urls[2];
            currentMenuThird = urls.length <= 3 || urls[3] === '' ? null : urls[3];
        }

        return {
            activeMenuTop: currentMenuTop,
            activeMenuSecond: currentMenuSecond,
            activeMenuThird: currentMenuThird,
        };
    }

    handleMenuClick = (dataRoute, e ) => {
        e.preventDefault();
        //console.log(dataRoute);
        this.setState({ activeItem: dataRoute });
        this.props.dispatch(push(dataRoute));
    };

    render() {
        const { activeMenuTop, activeMenuSecond, activeMenuThird, ...props } = this.state;
        const { classes } = this.props;
        var initiallyFocused = null;

        if (activeMenuSecond !== null) {
            initiallyFocused = activeMenuSecond + (activeMenuThird != null ? '_' + activeMenuThird : '');
        }

        var leftmenu = null;
        switch (activeMenuTop) {
            case HOME_MENU:
                leftmenu =
                    <Menu 
                        items = { MENU_HOME }
                        onClick = { this.handleMenuClick }
                        initiallyFocused = { initiallyFocused }
                    />;
                break;
            case HOME_MENU_EP:
                leftmenu =
                    <Menu 
                        items = { MENU_HOME }
                        onClick = { this.handleMenuClick }
                        initiallyFocused = "elektronnaya_priemnaya"
                    />;
                break;
            case HOME_MENU_BO:
                leftmenu =
                    <Menu 
                        items = { MENU_HOME }
                        onClick = { this.handleMenuClick }
                        initiallyFocused = "blackouts"
                    />;
                break;
            case HOME_MENU_CM:
                leftmenu =
                    <Menu 
                        items = { MENU_HOME }
                        onClick = { this.handleMenuClick }
                        initiallyFocused = "available_capacity_map"
                    />;
                break;
                case HOME_MENU_FQ:
                leftmenu =
                    <Menu 
                        items = { MENU_HOME }
                        onClick = { this.handleMenuClick }
                        initiallyFocused = "faq"
                    />;
                break;
            case HOME_MENU_MP:
                leftmenu =
                    <Menu 
                        items = { MENU_HOME }
                        onClick = { this.handleMenuClick }
                        initiallyFocused = "map"
                    />;
                break;
            case ABOUT_MENU:
                leftmenu =
                    <Menu 
                        items = { MENU_ABOUT }
                        onClick = { this.handleMenuClick }
                        initiallyFocused = { initiallyFocused }
                    />;
                break;
            case CUSTOMERS_MENU:
                leftmenu =
                    <Menu 
                        items = { MENU_CUSTOMERS }
                        onClick = { this.handleMenuClick }
                        initiallyFocused = { initiallyFocused }
                    />;
                break;
            case NEWS_MENU:
                leftmenu =
                    <Menu 
                        items = { MENU_NEWS }
                        onClick = { this.handleMenuClick }
                        initiallyFocused = { initiallyFocused }
                    />;
                break;
        }

        var leftNav = { ...this.props.theme.app.leftNav };

        if (leftmenu !== null) {
            leftNav.width = '28%';
        } else {
            leftNav.width = '0%';
        }

        return (
            <Drawer
                variant = 'permanent'
                classes = {{
                    paper: classes.drawerPaper,
                }}
                style = { leftNav }
            >
                { leftmenu }
            </Drawer>
        );
    }
}
/*
*/

export default withStyles(styles, { name: 'muiLeftNavMenu', flip: false, withTheme: true })(LeftNavMenu);
