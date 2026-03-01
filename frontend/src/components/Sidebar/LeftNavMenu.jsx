import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { alpha, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { HOME_MENU, HOME_MENU_EP, HOME_MENU_BO, HOME_MENU_CM, HOME_MENU_FQ, HOME_MENU_MP,
    ABOUT_MENU, CUSTOMERS_MENU, NEWS_MENU } from '../../constants';
import { MENU_HOME, MENU_ABOUT, MENU_CUSTOMERS, MENU_NEWS } from '../../constants/menuStruct';

function NavMenu(props) {
    let initiallyFocused = (props.initiallyFocused === undefined || props.initiallyFocused == null)
        ? props.items[0].key
        : props.initiallyFocused;

    const listItems = props.items.map((item, index) => {
        let initiallyOpenFirst = initiallyFocused === item.key ? true : false;

        if (item.children !== undefined && item.children.length > 0) {
            if (!props.expanded.some(menu => menu.key === item.key))
                props.expanded.push({ key: item.key, open: initiallyOpenFirst });
        }

        let selectedItem = props.expanded.filter(menu => menu.key === item.key)[0];
        let open = selectedItem !== undefined && selectedItem.open !== undefined ? selectedItem.open : false;

        return (
            <React.Fragment key = { index }>
                <ListItem
                    key = { item.key }
                    button
                    disableGutters
                    selected = { initiallyOpenFirst }
                    onClick = { (e) => props.onClick(item.dataRoute, item.key, e) }
                    disabled = { item.disabled }
                >
                    { item.leftIcon
                      && <ListItemIcon sx={{
                            marginRight: 0,
                            color: alpha(props.theme.palette.text.secondary, 0.64),
                        }}>
                            { item.leftIcon }
                        </ListItemIcon> }
                    <ListItemText
                        primary = { item.primaryText }
                        primaryTypographyProps = {{
                            variant: 'body1',
                            color: 'primary',
                        }}
                        secondary = { item.secondaryText }
                        secondaryTypographyProps = {{
                            variant: 'body2',
                            color: 'primary',
                        }}
                    />
                    { item.children !== undefined && item.children.length > 0
                      && ( open ? <ExpandLess /> : <ExpandMore /> ) }
                </ListItem>
                { item.children !== undefined && item.children.length > 0
                  && ( <Collapse
                           in = { open }
                           timeout = 'auto'
                           unmountOnExit
                        >
                            <List disablePadding>
                            { item.children.map((ni, index) => {
                                let initiallySelectedSecond = initiallyFocused === item.key + '_' + ni.key ? true : false;

                                if (initiallySelectedSecond)
                                    initiallyOpenFirst = initiallySelectedSecond;

                                return (
                                    <ListItem
                                        key = { ni.key }
                                        button
                                        disableGutters
                                        selected = { initiallySelectedSecond }
                                        onClick = { (e) => props.onClick(ni.dataRoute, ni.key, e) }
                                        sx={{
                                            paddingLeft: props.theme.spacing(4),
                                        }}
                                        disabled = { ni.disabled }
                                    >
                                        { ni.leftIcon
                                          && <ListItemIcon sx={{
                                                marginRight: 0,
                                                color: alpha(props.theme.palette.text.secondary, 0.64),
                                            }}>
                                                { ni.leftIcon }
                                            </ListItemIcon> }
                                        <ListItemText
                                            primary = { ni.primaryText }
                                            primaryTypographyProps = {{
                                                variant: 'body1',
                                                color: 'primary',
                                            }}
                                            secondary = { ni.secondaryText }
                                            secondaryTypographyProps = {{
                                                variant: 'body2',
                                                color: 'primary',
                                            }}
                                        />
                                    </ListItem>
                                );
                            }) }
                            </List>
                        </Collapse>
                ) }
            </React.Fragment>
        );
    });

    return (
        <List
            component = 'nav'
            style = { props.style }
        >
            { listItems }
        </List>
    );
}

class LeftNavMenu extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    };

    state = {
        activeMenuTop: HOME_MENU,
        activeMenuSecond: null,
        activeMenuThird: null,
        activeItem: null,
        expanded: null,
    };

    constructor(props, context) {
        super(props, context);
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        let currentMenuTop = null;
        let currentMenuSecond = null;
        let currentMenuThird = null;
        let expanded = null;

        if (props.location !== null && props.location) {
            let urls = props.location.pathname.split('/');
            currentMenuTop = urls[1] !== '' ? urls[1] : HOME_MENU;
            currentMenuSecond = urls.length <= 2 || urls[2] === '' ? null : urls[2];
            currentMenuThird = urls.length <= 3 || urls[3] === '' ? null : urls[3];
        }
        if (state.expanded === null) {
            expanded = [{ key: currentMenuSecond, open: true }];
        } else {
            expanded = state.expanded;
        }

        return {
            activeMenuTop: currentMenuTop,
            activeMenuSecond: currentMenuSecond,
            activeMenuThird: currentMenuThird,
            expanded: expanded,
        };
    }

    handleMenuClick = (dataRoute, key, e ) => {
        const indexOfmenu = this.state.expanded.findIndex(i => i.key === key);
        if (indexOfmenu > -1) {
            const expanded = this.state.expanded;
            expanded[indexOfmenu].open = !expanded[indexOfmenu].open;
        }
        this.setState({ activeItem: dataRoute });
        this.props.history.push(dataRoute);
    };

    render() {
        const { activeMenuTop, activeMenuSecond, activeMenuThird, expanded, ...props } = this.state;
        var initiallyFocused = null;

        if (activeMenuSecond !== null) {
            initiallyFocused = activeMenuSecond + (activeMenuThird != null ? '_' + activeMenuThird : '');
        }

        var leftmenu = null;
        switch (activeMenuTop) {
            case HOME_MENU:
                leftmenu =
                    <NavMenu
                        items = { MENU_HOME }
                        onClick = { this.handleMenuClick }
                        initiallyFocused = { initiallyFocused }
                        expanded = { expanded }
                        { ...this.props }
                    />;
                break;
            case HOME_MENU_EP:
                leftmenu =
                    <NavMenu
                        items = { MENU_HOME }
                        onClick = { this.handleMenuClick }
                        initiallyFocused = 'elektronnaya_priemnaya'
                        expanded = { expanded }
                        { ...this.props }
                    />;
                break;
            case HOME_MENU_BO:
                leftmenu =
                    <NavMenu
                        items = { MENU_HOME }
                        onClick = { this.handleMenuClick }
                        initiallyFocused = 'blackouts'
                        expanded = { expanded }
                        { ...this.props }
                    />;
                break;
            case HOME_MENU_CM:
                leftmenu =
                    <NavMenu
                        items = { MENU_HOME }
                        onClick = { this.handleMenuClick }
                        initiallyFocused = 'available_capacity_map'
                        expanded = { expanded }
                        { ...this.props }
                    />;
                break;
            case HOME_MENU_FQ:
                leftmenu =
                    <NavMenu
                        items = { MENU_HOME }
                        onClick = { this.handleMenuClick }
                        initiallyFocused = 'faq'
                        expanded = { expanded }
                        { ...this.props }
                    />;
                break;
            case HOME_MENU_MP:
                leftmenu =
                    <NavMenu
                        items = { MENU_HOME }
                        onClick = { this.handleMenuClick }
                        initiallyFocused = 'map'
                        expanded = { expanded }
                        { ...this.props }
                    />;
                break;
            case ABOUT_MENU:
                leftmenu =
                    <NavMenu
                        items = { MENU_ABOUT }
                        onClick = { this.handleMenuClick }
                        initiallyFocused = { initiallyFocused }
                        expanded = { expanded }
                        { ...this.props }
                    />;
                break;
            case CUSTOMERS_MENU:
                leftmenu =
                    <NavMenu
                        items = { MENU_CUSTOMERS }
                        onClick = { this.handleMenuClick }
                        initiallyFocused = { initiallyFocused }
                        expanded = { expanded }
                        { ...this.props }
                    />;
                break;
            case NEWS_MENU:
                leftmenu =
                    <NavMenu
                        items = { MENU_NEWS }
                        onClick = { this.handleMenuClick }
                        initiallyFocused = { initiallyFocused }
                        expanded = { expanded }
                        { ...this.props }
                    />;
                break;
        }

        var leftNav = { ...this.props.theme.app.leftNav };

        if (leftmenu !== null) {
            leftNav.width = '20%';
        } else {
            leftNav.width = '0%';
        }

        return (
            <Drawer
                variant = 'permanent'
                sx = {{
                    position: 'relative',
                    '& .MuiDrawer-paper': {
                        position: 'relative',
                    }
                }}
                style = { leftNav }
            >
                { leftmenu }
            </Drawer>
        );
    }
}

const LeftNavMenuWithTheme = (props) => {
    const theme = useTheme();
    return <LeftNavMenu {...props} theme={theme} />;
};

export default LeftNavMenuWithTheme;
