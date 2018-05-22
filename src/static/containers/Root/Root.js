import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import PropTypes from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '../../styles/main.scss';
import * as theme from '../../styles/styles';
import routes from '../../routes';
import DevTools from './DevTools';
import App from '../../app';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LeftNavMenu from '../../components/LeftNavMenu';

export default class Root extends Component {
    static propTypes = {
        store: PropTypes.shape().isRequired,
        history: PropTypes.shape().isRequired
    };

    componentDidMount() {
    //    console.log('Root');
    }

    render() {
        const dev = (process.env.NODE_ENV === 'production');

        return (
            <Provider store = { this.props.store }>
                <MuiThemeProvider muiTheme = { theme.muiTheme }>
                    <div
                        style = { theme.muiTheme.global }
                    >
                        <Header
                            { ...this.props }
                        />
                        <div style={{ display: 'flex', width: '100%'}}>
                            <LeftNavMenu
                                { ...this.props }
                            />
                            <App>
                                <ConnectedRouter history = { this.props.history }>
                                    { routes }
                                </ConnectedRouter>
                            </App>
                        </div>
                        <Footer
                            { ...this.props }
                        />
                        { dev && <DevTools /> }
                    </div>
                </MuiThemeProvider>
            </Provider>
        );
    }
}
/*
    <div style={{ display: 'flex', width: '10%' }}>
        <List>
        <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
        <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
        <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
        <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
        <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
        </List>
    </div>
    <div style={{ display: 'flex', width: '90%' }}>
                        <App>
                            <ConnectedRouter history = { this.props.history }>
                                { routes }
                            </ConnectedRouter>
                        </App>
    </div>

//        containerStyle={{height: 'calc(100% - 94px)', top: 95}} docked={true} width={150} open={true} zDepth={1}
                <Drawer
                    docked={true} width={150} open={true} zDepth={1}
                >
                    <MenuItem
                        onTouchTap={() => {  }}
                        primaryText="Home"
                    />
                    <MenuItem
                        onTouchTap={() => {  }}
                        primaryText="Some Component"
                    />
                </Drawer>
import {List, ListItem} from 'material-ui/List';
*/

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

/*
                        <Header
                            { ...this.props }
                        />
                        <App>
                            <ConnectedRouter history = { this.props.history }>
                                { routes }
                            </ConnectedRouter>
                        </App>
                        <Footer
                            { ...this.props }
                        />

                            <App>
                                <ConnectedRouter history = { this.props.history }>
                                    { routes }
                                </ConnectedRouter>
                            </App>
                            <Header
                                { ...this.props }
                            />
                            */
