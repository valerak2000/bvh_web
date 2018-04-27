import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';

class SiteMenu extends React.Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        //children: PropTypes.shape().isRequired,
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

//    componentWillReceiveProps(nextProps) {
    componentWillMount() {
        //this.props.children.history.location.pathname;
        let currentTab = this.props.location != null && this.props.location.pathname ? 
            this.props.location.pathname.split('/').pop() : 'default';
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
	    //this.context.router.transitionTo(tab.props.route)
    };

    render() {
        const { activeTab, ...props } = this.state;
        const { Menu } = this.props.muiTheme.appBar.ElementLeft;

        return (
            <Tabs
                value = { activeTab }
                onChange = { this.handleChange }
                style = { Menu }
            >
                <Tab
                    value = 'default'
                    label = 'Главная'
                    style = { Menu.Tab }
                    data-route = '/'
                    onActive = { this.handleActive }
                 />
                <Tab
                    value = 'about'
                    label = 'О компании'
                    style = { Menu.Tab }
                    data-route = '/about'
                    onActive = { this.handleActive }
                 />
                <Tab
                    value = 'customers'
                    label = 'Абонентам'
                    style = { Menu.Tab }
                    data-route = '/customers'
                    onActive = { this.handleActive }
                />
                <Tab
                    value = 'news'
                    label = 'Новости'
                    style = { Menu.Tab }
                    data-route = '/news'
                    onActive = { this.handleActive }
                />
                <Tab
                    value = 'contact'
                    label = 'Контакты'
                    style = { Menu.Tab }
                    data-route = '/contact'
                    onActive = { this.handleActive }
                />
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

SiteMenu.muiName = 'SiteMenu';
/*SiteMenu.contextTypes = {
    router: React.PropTypes.object.isRequired
};*/

export default muiThemeable()(connect(mapStateToProps)(SiteMenu));
