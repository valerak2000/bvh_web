import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';
//import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
//import {FlatButton} from 'material-ui/FlatButton';
//import {FontIcon} from 'material-ui/FontIcon';
//import {IconButton} from 'material-ui/IconButton';
//import * as Colors from 'material-ui/styles/colors';
//import Slider from 'material-ui/Slider';

class SiteMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
    };

    static defaultProps = {
    };

    /*goToProtected = () => {
        this.props.dispatch(push('/protected'));
    };*/

    handleActive = (tab) => {
        console.log(tab);
        this.props.dispatch(push(tab.props['data-route']));
    };

    render() {
        return (
            <Tabs
                style = { this.props.style }
            >
                <Tab
                    id = 'main'
                    label = 'Главная'
                    style = { this.props.style.tab }
                    data-route = '/'
                    onActive = { this.handleActive }
                 />
                <Tab
                    id = 'about'
                    label = 'О компании'
                    style = { this.props.style.tab }
                    data-route = '/about'
                    onActive = { this.handleActive }
                 />
                <Tab
                    id = 'customers'
                    label = 'Абонентам'
                    style = { this.props.style.tab }
                    data-route = '/customers'
                    onActive = { this.handleActive }
                />
                <Tab
                    id = 'news'
                    label = 'Новости'
                    style = { this.props.style.tab }
                    data-route = '/news'
                    onActive = { this.handleActive }
                />
                <Tab
                    id = 'contacts'
                    label = 'Контакты'
                    style = { this.props.style.tab }
                    data-route = '/contacts'
                    onActive = { this.handleActive }
                />
            </Tabs>
        );
    }
}
/*
                value= { this.state.tabSelected }
                onChange= { this.handleChange }
*/

const mapStateToProps = (state, ownProps) => {
    return {
    };
};

SiteMenu.muiName = 'SiteMenu';

export default muiThemeable()(connect(mapStateToProps)(SiteMenu));
//export default withRouter()(connect(mapStateToProps)(SiteMenu));
