import React from 'react';
import { Route, Switch } from 'react-router';
import { UnderConstructView, NotFoundView, LoginView, ProtectedView, HomeView,
    ContactView, AboutView, CustomersView, NewsView } from './containers';
import requireAuthentication from './utils/requireAuthentication';

export default(
    <Switch>
        <Route exact path = "/" component = { HomeView } />>
        <Route path = "/about" component = { AboutView } />
        <Route path = "/customers" component = { CustomersView } />
        <Route path = "/news" component = { NewsView } />
        <Route path = "/contacts" component = { ContactView } />
        <Route path = "/login" component = { LoginView } />
        <Route path = "/protected" component = { requireAuthentication(ProtectedView) } />
        <Route component = { NotFoundView } />
    </Switch>
);

/*
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

<Router history={hashHistory}>
    <Route path="/" component={App}>

      <IndexRoute component={Home}/>

      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
*/