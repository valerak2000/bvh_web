import React from 'react';
import { Route, Switch } from 'react-router';
import { UnderConstructView, NotFoundView, LoginView, ProtectedView, HomeView,
    ContactView, AboutView } from './containers';
import requireAuthentication from './utils/requireAuthentication';

export default(
    <Switch>
        <Route exact path = "/" component = { HomeView } />
        <Route path = "/about" component = { AboutView } />
        <Route path = "/customers" component = { UnderConstructView } />
        <Route path = "/news" component = { UnderConstructView } />
        <Route path = "/contact" component = { ContactView } />
        <Route path = "/login" component = { LoginView } />
        <Route path = "/protected" component = { requireAuthentication(ProtectedView) } />
        <Route path = "*" component = { NotFoundView } />
    </Switch>
);
