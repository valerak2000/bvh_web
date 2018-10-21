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
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import { HOME_MENU, HOME_MENU_EP, HOME_MENU_BO, HOME_MENU_CM, HOME_MENU_FQ, HOME_MENU_MP,
    ABOUT_MENU, CUSTOMERS_MENU, NEWS_MENU } from '../constants';
import { MENU_HOME, MENU_ABOUT, MENU_CUSTOMERS, MENU_NEWS } from '../constants/menuStruct';

const styles = theme => ({
    drawerPaper: {
        position: 'relative',
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

function NavMenu(props) {
    let initiallyFocused = (props.initiallyFocused === undefined || props.initiallyFocused == null)
        ? props.items[0].key 
        : props.initiallyFocused;
    
    const listItems = props.items.map((item, index) => {
        let initiallyOpenFirst = initiallyFocused === item.key ? true : false;

        if (item.nestedItems !== undefined && item.nestedItems.length > 0) {
            if (!props.expanded.some(menu => menu.key === item.key))
                props.expanded.push({ key: item.key, open: false });
        }

        return (
            <React.Fragment key = { index }>
                <ListItem
                    key = { item.key }
                    button
                    dense
                    disableGutters
                    selected = { initiallyOpenFirst }
                    onClick = { (e) => props.onClick(item.key, item.dataRoute, e) }
                >
                    { 
                        item.leftIcon
                        && <ListItemIcon>
                            { item.leftIcon }
                        </ListItemIcon>
                    }
                    <ListItemText 
                        primary = { item.primaryText } 
                        secondary = { item.secondaryText }
                        secondaryTypographyProps = {{ variant: 'body2' }}
                    />
                    {
                        item.nestedItems !== undefined && item.nestedItems.length > 0
                        && ( props.open ? <ExpandLess /> : <ExpandMore /> )
                    }
                </ListItem>
                { 
                    item.nestedItems !== undefined && item.nestedItems.length > 0
                    && (
                        <Collapse 
                            in = { props.expanded.filter(menu => menu.key === item.key)[0].open }
                            timeout = 'auto'
                            unmountOnExit
                        >
                            <List disablePadding>
                            {
                                item.nestedItems.map((ni, index) => {
                                    let initiallySelectedSecond = initiallyFocused === item.key + '_' + ni.key ? true : false;

                                    if (initiallySelectedSecond)
                                        initiallyOpenFirst = initiallySelectedSecond;

                                    return (
                                        <ListItem 
                                            key = { ni.key } 
                                            button
                                            dense
                                            disableGutters
                                            selected = { initiallySelectedSecond }
                                            onClick = { (e) => props.onClick(ni.dataRoute, e) }
                                            className = { props.classes.nested }
                                        >
                                            { 
                                                ni.leftIcon
                                                && <ListItemIcon>
                                                    { ni.leftIcon }
                                                </ListItemIcon>
                                            }
                                            <ListItemText 
                                                primary = { ni.primaryText } 
                                                secondary = { ni.secondaryText }
                                                secondaryTypographyProps = {{ variant: 'body2' }}
                                            />
                                        </ListItem>
                                    );
                                })
                            }
                            </List>
                        </Collapse>
                )}
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
/*
const Test = ({stations}) => (
  <>
    {stations.map(station => (
      <div className="station" key={station.call}>{station.call}</div>
    ))}
  </>
); 

 <Test stations={stations} />

var stations = [
  {call:'station one',frequency:'000'},
  {call:'station two',frequency:'001'}
]; 


props.items.map((d, index) => {
        let initiallyOpenFirst = initiallyFocused === d.key ? true : false;

    };


<ListItem
                            key = { d.key }
                            button
                            dense
                            disableGutters
                            selected = { initiallyOpenFirst }
                            onClick = { (e) => props.onClick(d.dataRoute, e) }
                        >
                            { 
                                d.leftIcon
                                && <ListItemIcon>
                                    { d.leftIcon }
                                </ListItemIcon>
                            }
                            <ListItemText 
                                primary = { d.primaryText } 
                                secondary = { d.secondaryText }
                                secondaryTypographyProps = {{ variant: 'body2' }}
                            />
                            {
                                d.nestedItems !== undefined && d.nestedItems.length > 0
                                && ( props.open ? <ExpandLess /> : <ExpandMore /> )
                            }
                        </ListItem>

                        { 
                            d.nestedItems !== undefined && d.nestedItems.length > 0
                            && (
                                <Collapse 
                                    in = { props.open }
                                    timeout = "auto"
                                    unmountOnExit
                                >
                                    <List disablePadding>
                                        {
                                            d.nestedItems.map((ni, index) => {
                                                let initiallySelectedSecond = initiallyFocused === d.key + '_' + ni.key ? true : false;
                                                if (initiallySelectedSecond)
                                                    initiallyOpenFirst = initiallySelectedSecond;

                                                <ListItem
                                                    key = { d.key }
                                                    button
                                                    dense
                                                    disableGutters
                                                    selected = { initiallyFocused === d.key ? true : false }
                                                    onClick = { (e) => props.onClick(d.dataRoute, e) }
                                                    className = { props.classes.nested }
                                                >
                                                    { 
                                                        d.leftIcon
                                                        && <ListItemIcon>
                                                            { d.leftIcon }
                                                        </ListItemIcon>
                                                    }
                                                    <ListItemText 
                                                        primary = { d.primaryText } 
                                                        secondary = { d.secondaryText }
                                                        secondaryTypographyProps = {{ variant: 'body2' }}
                                                    />
                                                    {
                                                        d.nestedItems !== undefined && d.nestedItems.length > 0
                                                        && ( props.open ? <ExpandLess /> : <ExpandMore /> )
                                                    }
                                                </ListItem>;
                                            })
                                        }
                                    </List>
                            </Collapse>
                        )}


{
                props.items.map((d, index) => {
                    let initiallyOpenFirst = initiallyFocused === d.key ? true : false;

                    return (

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
            expanded: [{ key: currentMenuSecond, open: true }],
        };
    }

    handleMenuClick = (key, dataRoute, e ) => {
        e.preventDefault();
        //console.log(dataRoute);
        const indexOfmenu = this.state.expanded.findIndex(i => i.key === key);
        const expanded = this.state.expanded;
        //const open = this.state.expanded[indexOfmenu].open;
        expanded[indexOfmenu].open = !expanded[indexOfmenu].open;
        //this.setState({ activeItem: dataRoute, expanded: expanded_tmp });
        this.setState({ activeItem: dataRoute });
        this.forceUpdate();
        this.props.dispatch(push(dataRoute));
    };
/*
props.expanded.filter(menu => menu.key === item.key)[0].open
onPress={() => {this.setState((prevState, props) => {
return {data: [new obj].concat(prevState.data) };
})}}
*/
    render() {
        const { activeMenuTop, activeMenuSecond, activeMenuThird, expanded, ...props } = this.state;
        const { classes } = this.props;
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
