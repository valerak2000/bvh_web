import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { pink } from '@mui/material/colors';

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
                currentTab = false;
                break;
            default:
                break;
        }
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
            <div>
                <Tabs
                    value = { activeTab }
                    onChange = { this.handleChange }
                    style = { menu }
                    classes = {{ indicator: classes.indicator, }}
                    //sx = { menu }
                    TabIndicatorProps={{
                        sx: {
                            backgroundColor: pink['A200'],
                        }
                    }}
                >
                    <Tab
                        value = 'about'
                        label = 'О компании'
                        component = { Link } to = '/about'
                        style = { menu.tab }
                        //sx = { menu.tab }
                    />
                    <Tab
                        value = 'customers'
                        label = 'Абонентам'
                        component = { Link } to = '/customers'
                        style = { menu.tab }
                        //sx = { menu.tab }
                    />
                    <Tab
                        value = 'news'
                        label = 'Новости'
                        component = { Link } to = '/news'
                        style = { menu.tab }
                        //sx = { menu.tab }
                    />
                </Tabs>
            </div>
        );
    }
}

const SiteMenuWithTheme = (props) => {
    const theme = useTheme();
    return <SiteMenu {...props} theme={theme} />;
};

export default SiteMenuWithTheme;
