import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info'

class LeftNavMenu extends Component {
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
        //const { menu } = this.props.muiTheme.app.header.appBar.elementLeft;

        return (
            <List>
            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
            <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
            <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
            <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
            </List>
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

LeftNavMenu.muiName = 'LeftNavMenu';
/*SiteMenu.contextTypes = {
    router: React.PropTypes.object.isRequired
};*/

export default muiThemeable()(connect(mapStateToProps, mapDispatchToProps)(LeftNavMenu));
