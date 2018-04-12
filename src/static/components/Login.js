import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import muiThemeable from 'material-ui/styles/muiThemeable';

class Login extends React.Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Личный кабинет" />
    );
  }
}

export default muiThemeable()(Login);