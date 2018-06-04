import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';

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
            muiTheme: React.PropTypes.object.isRequired
        };
    }

    componentWillReceiveProps(nextProps) {
        let currentTab = nextProps.location != null
            && nextProps.location.pathname
            && nextProps.location.pathname.split('/').pop() == ''
            ? 'default' : nextProps.location.pathname.split('/').pop();
        this.setState({ activeTab: currentTab });
        //const nextPath = windows.location.pathname
        // call onChange when path exactly matches /tabs
        //if (/^\/tabs$/.test(nextPath))
        //    this.onChange(nextProps.tabSelected)
    }

    handleChange = (event, value) => {
        this.setState({ activeTab: event });
    };

    handleActive = (tab) => {
        this.props.dispatch(push(tab.props['data-route']));
        //this.context.router.push(tab.props['data-route']);
	    //this.context.router.transitionTo(tab.props.route)
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
    }
}

SiteMenu.muiName = 'SiteMenu';

export default muiThemeable()(connect(mapStateToProps, mapDispatchToProps)(SiteMenu));
