import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import withTheme from '@material-ui/core/styles/withTheme';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import pink from '@material-ui/core/colors/pink';

//import { HOME_MENU, ABOUT_MENU, CUSTOMERS_MENU, NEWS_MENU } from '../constants';

const styles = {
    indicator: {
        backgroundColor: pink['A200'], //rgb(255, 64, 129)
    },
};

class SiteMenu extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
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

    static getDerivedStateFromProps(props, state) {
        //console.log(props.location.pathname);
        let currentTab = false;

        if (props.location !== null && props.location) {
            let urls = props.location.pathname.split('/');
            currentTab = urls[1] !== '' ? urls[1] : false;
        }

        //страницы отсутствующие в табах
        switch(currentTab) {
            case 'elektronnaya_priemnaya':
            case 'blackouts':
            case 'available_capacity_map':
            case 'faq':
            case 'map':
            case 'blackouts':
                currentTab = false;
                break;
            default:
                break;
        }
        //console.log(currentTab);
        return {
            activeTab: currentTab,
        };
    }

    handleChange = (event, value) => {
        this.setState({ activeTab: value });
    };

    render() {
        const { classes } = this.props;
        const { activeTab, ...props } = this.state;
        const { menu } = this.props.theme.app.header.appBar;

        return (
            <Tabs
                value = { activeTab }
                onChange = { this.handleChange }
                style = { menu }
                classes = {{ indicator: classes.indicator, }}
            >
                <Tab
                    value = 'about'
                    label = 'О компании'
                    component = { Link } to = '/about'
                    style = { menu.tab }
                 />
                <Tab
                    value = 'customers'
                    label = 'Абонентам'
                    component = { Link } to = '/customers'
                    style = { menu.tab }
                />
                <Tab
                    value = 'news'
                    label = 'Новости'
                    component = { Link } to = '/news'
                    style = { menu.tab }
                />
            </Tabs>
        );
    }
}
/*
*/

export default withStyles(styles, { name: 'muiSiteMenu', flip: false, withTheme: true })(SiteMenu);
