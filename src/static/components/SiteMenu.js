import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
//import { withRouter } from 'react-router';
//import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'

import muiThemeable from 'material-ui/styles/muiThemeable';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';
//import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {FlatButton} from 'material-ui/FlatButton';
import {FontIcon} from 'material-ui/FontIcon';
import {IconButton} from 'material-ui/IconButton';
import * as Colors from 'material-ui/styles/colors';
import Slider from 'material-ui/Slider';

class SiteMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabSelected: 0,
        };
    }

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    static defaultProps = {
    };

    goToProtected = () => {
        this.props.dispatch(push('/protected'));
    };

    handleChange = (tab) => {
        //alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
        this.setState({
            tabSelected: tab,
        });
        /*this.props.history.push({
            pathname: path.join(this.props.match.url, tabSelected),
            state: { tabSelected }
        });*/
    };

    handleActive = (tab) => {
        alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
    };

    render() {
        return (
            <Tabs
                value= { this.state.tabSelected }
                style = { props.style }
            >
                <Tab
                    label = "О компании"
                    style = { props.style.tab }
                    data-route="/about"
                    onActive = { handleActive }
                 />
                <Tab
                    label = "Абонентам"
                    style = { props.style.tab }
                    data-route="/customers"
                />
                <Tab
                    label = "Новости"
                    style = { props.style.tab }
                    data-route="/news"
                />
                <Tab
                    label = "Контакты"
                    style = { props.style.tab }
                    data-route="/Home"
                />
            </Tabs>
        );
    }
}
/*
                onChange= { this.handleChange }
*/

const mapStateToProps = (state, ownProps) => {
    return {
    };
};

SiteMenu.muiName = 'SiteMenu';

export default muiThemeable()(connect(mapStateToProps)(SiteMenu));
//export default withRouter()(connect(mapStateToProps)(SiteMenu));