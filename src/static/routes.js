import React from 'react';
import { Route, Switch } from 'react-router';
import { HomeView, LoginView, ProtectedView, NotFoundView, UnderConstruct } from './containers';
import requireAuthentication from './utils/requireAuthentication';
//import injectTapEventPlugin from 'react-tap-event-plugin';
//import Router, { Route, DefaultRoute, NotFoundRoute, Redirect, Link } from 'react-router';

//injectTapEventPlugin();

export default(
    <Switch>
        <Route exact path = "/" component = { HomeView } />
        <Route path = "/about" component = { NotFoundView } />
        <Route path = "/customers" component = { HomeView } />
        <Route path = "/news" component = { HomeView } />
        <Route path = "/contacts" component = { HomeView } />
        <Route path = "/login" component = { LoginView } />
        <Route path = "/protected" component = { requireAuthentication(ProtectedView) } />
        <Route path = "*" component = { NotFoundView } />
    </Switch>
);
