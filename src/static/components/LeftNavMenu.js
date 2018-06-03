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

import { DEFAULT_MENU, ABOUT_MENU, CUSTOMERS_MENU, NEWS_MENU } from '../constants'
import { MENU_TOP, MENU_ABOUT, MENU_CUSTOMERS, MENU_NEWS } from '../constants/menuStruct'

function Menu(props) {
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
                            initiallyOpen = { index == 0 ? true: false }
                            isKeyboardFocused = { index == 0 ? true: false }
                            onClick = { (e) => props.onClick(d.dataRoute, e) }
                        />
                    );
                })
            }
        </List>
    );
}
/*
*/

class LeftNavMenu extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        //dispatch: PropTypes.func.isRequired,
        location: PropTypes.shape({
            pathname: PropTypes.string
        })
    };

    static defaultProps = {
        location: undefined
    };

    state = {
        activeMenu: DEFAULT_MENU,
    };

    constructor(props) {
        super(props);
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    static get contextTypes() {
        return {
        };
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentWillReceiveProps(nextProps) {
        let currentMenu = (nextProps.location != null
            && nextProps.location.pathname
            && nextProps.location.pathname.split('/').pop() == '')
            ? DEFAULT_MENU : nextProps.location.pathname.split('/').pop();
        /*let currentPage = (nextProps.location != null
            && nextProps.location.pathname
            && nextProps.location.pathname.split('/').pop() == '')
            ? 'default' : nextProps.location.pathname.split('/').pop();
        */
        this.setState({ activeMenu: currentMenu });

        //const nextPath = windows.location.pathname
        // call onChange when path exactly matches /tabs
        //if (/^\/tabs$/.test(nextPath))
        //    this.onChange(nextProps.tabSelected)
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
        const { activeMenu, ...props } = this.state;

        return (
            <div>
                { activeMenu === DEFAULT_MENU 
                    && <Menu 
                        items = { MENU_TOP }
                        onClick = { this.handleMenuClick }
                       />
                }
                { activeMenu === ABOUT_MENU 
                    && <Menu 
                        items = { MENU_ABOUT }
                        onClick = { this.handleMenuClick }
                       />
                }
            </div>
        );
    }
}
/*
*/

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        location: state.routing.location,
    };
};

function mapDispatchToProps (dispatch) {
    return {
    }
}

LeftNavMenu.muiName = 'LeftNavMenu';

export default muiThemeable()(connect(mapStateToProps, mapDispatchToProps)(LeftNavMenu));
