import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';

import { HOME_MENU, ABOUT_MENU, CUSTOMERS_MENU, NEWS_MENU } from '../constants'

class SiteMenu extends Component {
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
        activeTab: 0,
    };

    constructor(props) {
        super(props);
    }

    static get contextTypes() {
        return {
            muiTheme: PropTypes.object.isRequired
        };
    }

    componentWillReceiveProps(nextProps) {
        let currentTab = null;

        if (nextProps.location != null && nextProps.location.pathname) {
            let urls = nextProps.location.pathname.split('/');
            currentTab = urls[1] !== '' ? urls[1] : HOME_MENU;
        }

        this.setState({ activeTab: currentTab });
    }

    handleChange = (event, value) => {
        this.setState({ activeTab: event });
    };

    handleActive = (tab) => {
        this.props.dispatch(push(tab.props['data-route']));
    };

    render() {
        const { activeTab, ...props } = this.state;
        const { menu } = this.props.muiTheme.app.header.appBar.elementLeft;

        return (
            <Tabs
                value = { activeTab }
                onChange = { this.handleChange }
                style = { menu }
            >
                {/*<Tab
                    value = 'default'
                    label = 'Главная'
                    style = { menu.tab }
                    data-route = '/'
                    onActive = { this.handleActive }
                />*/}
                <Tab
                    value = 'about'
                    label = 'О компании'
                    style = { menu.tab }
                    data-route = '/about'
                    onActive = { this.handleActive }
                 />
                <Tab
                    value = 'customers'
                    label = 'Абонентам'
                    style = { menu.tab }
                    data-route = '/customers'
                    onActive = { this.handleActive }
                />
                <Tab
                    value = 'news'
                    label = 'Новости'
                    style = { menu.tab }
                    data-route = '/news'
                    onActive = { this.handleActive }
                />
                {/*<Tab
                    value = 'contacts'
                    label = 'Контакты'
                    style = { menu.tab }
                    data-route = '/contacts'
                    onActive = { this.handleActive }
                />*/}
            </Tabs>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        location: state.routing.location,
    };
};

function mapDispatchToProps (dispatch) {
    return {
    };
}

SiteMenu.muiName = 'SiteMenu';

export default muiThemeable()(connect(mapStateToProps, mapDispatchToProps)(SiteMenu));
