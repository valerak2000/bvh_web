import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import {List, ListItem} from 'material-ui/List';
//import ActionGrade from 'material-ui/svg-icons/action/grade';
//import ContentSend from 'material-ui/svg-icons/content/send';
//import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
//import ActionInfo from 'material-ui/svg-icons/action/info';

import { HOME_MENU, ABOUT_MENU, CUSTOMERS_MENU, NEWS_MENU } from '../constants'
import { MENU_HOME, MENU_ABOUT, MENU_CUSTOMERS, MENU_NEWS } from '../constants/menuStruct'

function Menu(props) {
    let initiallyOpen = (props.initiallyOpen === undefined || props.initiallyOpen == null)
        ? props.items[0].key 
        : props.initiallyOpen;

    return (
        <List>
            {
                props.items.map((d, index) => {
                    return (
                        <ListItem
                            key = { d.key }
                            primaryText = { d.primaryText }
                            secondaryText = { d.secondaryText }
                            secondaryTextLines = { d.secondaryTextLines }
                            leftIcon = { d.leftIcon }
                            isKeyboardFocused = { initiallyOpen == d.key ? true : false }
                            onClick = { (e) => props.onClick(d.dataRoute, e) }
                        />
                    );
                })
            }
        </List>
    );
}
/*
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
            <div>
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