import React from 'react';
import { Route, Switch } from 'react-router';
import { UnderConstructView, NotFoundView, LoginView, ProtectedView, HomeView,
    ContactView, AboutView, CustomersView, NewsView } from './containers';
import requireAuthentication from './utils/requireAuthentication';

export default(
    <Switch>
        <Route exact path = "/" component = { HomeView } />
        <Route path = "/about" component = { AboutView } />
        <Route path = "/customers" component = { CustomersView } />
        <Route path = "/news" component = { NewsView } />
        <Route path = "/contact" component = { ContactView } />
        <Route path = "/login" component = { LoginView } />
        <Route path = "/protected" component = { requireAuthentication(ProtectedView) } />
        <Route component = { NotFoundView } />
    </Switch>
);
