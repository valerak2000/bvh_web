import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
//import classNames from 'classnames';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import {List, ListItem} from 'material-ui/List';
//import Divider from 'material-ui/Divider';

import { HOME_MENU, ABOUT_MENU, CUSTOMERS_MENU, NEWS_MENU } from '../constants'
import { MENU_HOME, MENU_ABOUT, MENU_CUSTOMERS, MENU_NEWS } from '../constants/menuStruct'

function Menu(props) {
    let initiallyFocused = (props.initiallyFocused === undefined || props.initiallyFocused == null)
        ? props.items[0].key 
        : props.initiallyFocused;

    return (
        <List
            style = { props.style }
        >
            {
                props.items.map((d, index) => {
                    var nested = [];
                    let initiallyOpenFirst = initiallyFocused === d.key ? true : false;

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
                            )
                        });
                    }

                    return (
                        <ListItem
                            key = { d.key }
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
                        />
                    );
                })
            }
        </List>
    );
}
/*
{
    (d.nestedItems.length > 0)
    && (nestedItems = {[
        <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
    ]})
}

<ListItem
                  key={3}
                  primaryText="Inbox"
                  leftIcon={<ContentInbox />}
                  open={this.state.open}
                  onNestedListToggle={this.handleNestedListToggle}
                  nestedItems={[
                    <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                  ]}
                />,

*/

class LeftNavMenu extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired,
        location: PropTypes.shape({
            pathname: PropTypes.string
        })
    };

    static defaultProps = {
        location: undefined
    };

    state = {
        activeMenuTop: HOME_MENU,
        activeMenuSecond: null,
        activeMenuThird: null,
    };

    constructor(props) {
        super(props);
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    static get contextTypes() {
        return {
            muiTheme: React.PropTypes.object.isRequired
        };
    }

    componentWillReceiveProps(nextProps) {
        let currentMenuTop = null;
        let currentMenuSecond = null;
        let currentMenuThird = null;

        if (nextProps.location != null && nextProps.location.pathname) {
            let urls = nextProps.location.pathname.split('/');
            currentMenuTop = urls[1] !== '' ? urls[1] : HOME_MENU;
            currentMenuSecond = urls.length <= 2 || urls[2] === '' ? null : urls[2];
            currentMenuThird = urls.length <= 3 || urls[3] === '' ? null : urls[3];
        }

        this.setState({
            activeMenuTop: currentMenuTop,
            activeMenuSecond: currentMenuSecond,
            activeMenuThird: currentMenuThird,
        });
    }

    /*handleChange = (event, value) => {
        this.setState({ activeTab: event });
    };*/

    handleMenuClick = (dataRoute, e ) => {
        e.preventDefault();
        console.log(dataRoute);
        this.props.dispatch(push(dataRoute));
    };

    render() {
        const { activeMenuTop, activeMenuSecond, activeMenuThird, ...props } = this.state;
        var initiallyFocused = null;

        if (activeMenuSecond != null) {
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
                    />
                break;
        }

        var leftNav = { ...this.props.muiTheme.app.leftNav };

        if (leftmenu != null) {
            leftNav.width = '20%';
        } else {
            leftNav.width = '0%';
        }

        return (
            <div 
                style = { leftNav }
            >
                { leftmenu }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        location: state.routing.location,
    };
};

LeftNavMenu.muiName = 'LeftNavMenu';
export default muiThemeable()(connect(mapStateToProps)(LeftNavMenu));

/*
*/