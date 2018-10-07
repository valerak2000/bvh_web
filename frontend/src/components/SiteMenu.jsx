import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import withTheme from '@material-ui/core/styles/withTheme';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { HOME_MENU, ABOUT_MENU, CUSTOMERS_MENU, NEWS_MENU } from '../constants';

class SiteMenu extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        theme: PropTypes.object.isRequired,
    };

    static defaultProps = {
        location: null
    };

    state = {
        activeTab: 0,
    };

    constructor(props, context) {
        super(props, context);
    }

    static shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps.location);
    }

    static getDerivedStateFromProps(props, state) {
        //console.log(props.location);
        //console.log(location);
        let currentTab = null;

        if (props.location !== null && props.location) {
            let urls = props.location.pathname.split('/');
            currentTab = urls[1] !== '' ? urls[1] : false;
        }

        return {
            activeTab: currentTab,
        };
    }

    handleChange = (event, value) => {
        this.setState({ activeTab: event });
    };

    render() {
        const { activeTab, ...props } = this.state;
        const { menu } = this.props.theme.app.header.appBar.elementLeft;

        return (
            <Tabs
                value = { activeTab }
                onChange = { this.handleChange }
                style = { menu }
            >
                <Tab
                    value = 'about'
                    label = 'О компании'
                    style = { menu.tab }
                    component = { Link } to = '/about'
                 />
                <Tab
                    value = 'customers'
                    label = 'Абонентам'
                    style = { menu.tab }
                    component = { Link } to = '/customers'
                />
                <Tab
                    value = 'news'
                    label = 'Новости'
                    style = { menu.tab }
                    component = { Link } to = '/news'
                />
            </Tabs>
        );
    }
}
/*
*/

SiteMenu.muiName = 'SiteMenu';

export default withTheme()(SiteMenu);
