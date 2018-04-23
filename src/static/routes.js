import React from 'react';
import { Route, Switch } from 'react-router';
import { HomeView, LoginView, ProtectedView, ContactsView, NotFoundView, UnderConstructView } from './containers';
import requireAuthentication from './utils/requireAuthentication';

export default(
    <Switch>
        <Route exact path = "/" component = { HomeView } />
        <Route path = "/about" component = { UnderConstructView } />
        <Route path = "/customers" component = { UnderConstructView } />
        <Route path = "/news" component = { UnderConstructView } />
        <Route path = "/contacts" component = { ContactsView } />
        <Route path = "/login" component = { LoginView } />
        <Route path = "/protected" component = { requireAuthentication(ProtectedView) } />
        <Route path = "*" component = { NotFoundView } />
    </Switch>
);
