import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
// core components
import MessageBox from '../components/MessageBox';
import mainRoutes from 'routes/Main.jsx';

//Actions
import NotificationActions from '../actions/Notifications';

import { getImgSrc } from '../commons/commonFuncs';
//Import may not working with Reserved proxy so using require instead.

const switchRoutes = (
    <Switch>
        { 
            mainRoutes.map((prop, key) =>
                prop.redirect ? (
                <Redirect from = { prop.path } to = { prop.to } key={ key } />
                ) : (
                <Route path = { prop.path } component = { prop.component } key = { key } />
                )
            )
        }
    </Switch>
);

//Connect component to Redux store.
@connect(
  state => ({
    messageBox: state.messageBox || {},
    notifications: state.notifications || []
  }),
  dispatch => ({
    actions: bindActionCreators(NotificationActions, dispatch)
  })
)
class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      mobileOpen: false
    };
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  getRoute() {
    return this.props.location.pathname !== '/maps';
  }
  componentDidMount() {
    if (navigator.platform.indexOf('Win') <= -1) return;
  }
  componentDidUpdate(e) {
    if (e.history.location.pathname === e.location.pathname) return;

    this.refs.mainPanel.scrollTop = 0;
    if (this.state.mobileOpen) this.setState({ mobileOpen: false });
  }

  onNotificationChange = items => {
    this.props.actions.addOrUpdateNotifications(items);
  };

  onNotificationDelete = items => {
    this.props.actions.deleteNotifications(items);
  };

  render() {
    const { classes, notifications, messageBox, ...rest } = this.props;
    return (
      <div>
        <MessageBox {...messageBox} open={messageBox.open || false} />

        <div />
      </div>
    );
  }
}

App.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default App;
