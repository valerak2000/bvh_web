import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { UnderConstructView, NotFoundView, LoginView, ProtectedView, HomeView,
    ContactView, AboutView, OurHistoryView, CustomersView, NewsView } from './containers';
import requireAuthentication from './utils/requireAuthentication';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path = "/" component = { HomeView } />
                <Route exact path = "/about" component = { AboutView } />>
                <Route exact path = "/about/leadership" component = { UnderConstructView } />
                <Route exact path = "/about/contacts" component = { ContactView } />
                <Route exact path = "/about/vacancies" component = { UnderConstructView } />
                <Route exact path = "/about/history" component = { OurHistoryView } />
                <Route exact path = "/about/zakupki_raskrytie_informacii" component = { UnderConstructView } />
                <Route exact path = "/customers" component = { CustomersView } />
                <Route exact path = "/news" component = { NewsView } />
                <Route exact path = "/login" component = { LoginView } />
                <Route exact path = "/protected" component = { requireAuthentication(ProtectedView) } />
                <Route component = { NotFoundView } />
            </Switch>
        );
    }
}

export default Routes