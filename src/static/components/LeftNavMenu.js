import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import classNames from 'classnames';
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
        <List>
            {
                props.items.map((d, index) => {
                    var nested = [];

                    if (d.nestedItems !== undefined && d.nestedItems.length > 0) {
                        d.nestedItems.map((ni, index) => {
                            nested.push(
                                <ListItem 
                                    key = { ni.key } 
                                    primaryText = { ni.primaryText }
                                    secondaryText = { ni.secondaryText }
                                    secondaryTextLines = { ni.secondaryTextLines }
                                    leftIcon = { ni.leftIcon }
                                    isKeyboardFocused = { initiallyFocused == ni.key ? true : false }
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
                            isKeyboardFocused = { initiallyFocused == d.key ? true : false }
                            onClick = { (e) => props.onClick(d.dataRoute, e) }
                            autoGenerateNestedIndicator = { true }
                            primaryTogglesNestedList = { true }
                            initiallyOpen = { initiallyFocused == d.key ? true : false }
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

        if (nextProps.location != null && nextProps.location.pathname) {
            let urls = nextProps.location.pathname.split('/');
            currentMenuTop = urls[1] !== '' ? urls[1] : HOME_MENU;
            currentMenuSecond = urls.length === 2 || urls[2] === '' ? null : urls[2];
        }

        this.setState({
            activeMenuTop: currentMenuTop,
            activeMenuSecond: currentMenuSecond,
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
        const { activeMenuTop, activeMenuSecond, ...props } = this.state;

        return (
            <div
                style = { this.props.muiTheme.app.leftNav }
            >
                { 
                    activeMenuTop === HOME_MENU 
                    && <Menu 
                            items = { MENU_HOME }
                            onClick = { this.handleMenuClick }
                            initiallyOpen = { activeMenuSecond }
                       />
                }
                { 
                    activeMenuTop === ABOUT_MENU 
                    && <Menu 
                            items = { MENU_ABOUT }
                            onClick = { this.handleMenuClick }
                            initiallyOpen = { activeMenuSecond }
                       />
                }
                { 
                    activeMenuTop === CUSTOMERS_MENU 
                    && <Menu 
                            items = { MENU_CUSTOMERS }
                            onClick = { this.handleMenuClick }
                            initiallyOpen = { activeMenuSecond }
                       />
                }
                { 
                    activeMenuTop === NEWS_MENU 
                    && <Menu 
                            items = { MENU_NEWS }
                            onClick = { this.handleMenuClick }
                            initiallyOpen = { activeMenuSecond }
                       />
                }
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