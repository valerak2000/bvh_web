import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';

class SiteMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
    };

    static defaultProps = {
    };

    handleActive = (tab) => {
        console.log(tab);
        this.props.dispatch(push(tab.props['data-route']));
    };

    render() {
        return (
            <Tabs
                style = { this.props.muiTheme.appBar.ElementLeft.Menu }
            >
                <Tab
                    id = 'main'
                    label = 'Главная'
                    style = { this.props.muiTheme.appBar.ElementLeft.Menu.tab }
                    data-route = '/'
                    onActive = { this.handleActive }
                 />
                <Tab
                    id = 'about'
                    label = 'О компании'
                    style = { this.props.muiTheme.appBar.ElementLeft.Menu.tab }
                    data-route = '/about'
                    onActive = { this.handleActive }
                 />
                <Tab
                    id = 'customers'
                    label = 'Абонентам'
                    style = { this.props.muiTheme.appBar.ElementLeft.Menu.tab }
                    data-route = '/customers'
                    onActive = { this.handleActive }
                />
                <Tab
                    id = 'news'
                    label = 'Новости'
                    style = { this.props.muiTheme.appBar.ElementLeft.Menu.tab }
                    data-route = '/news'
                    onActive = { this.handleActive }
                />
                <Tab
                    id = 'contacts'
                    label = 'Контакты'
                    style = { this.props.muiTheme.appBar.ElementLeft.Menu.tab }
                    data-route = '/contacts'
                    onActive = { this.handleActive }
                />
            </Tabs>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    };
};

SiteMenu.muiName = 'SiteMenu';

export default muiThemeable()(connect(mapStateToProps)(SiteMenu));
