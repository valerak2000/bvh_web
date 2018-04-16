import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import bvhLogo from './images/logo_bvh.png';

import muiThemeable from 'material-ui/styles/muiThemeable';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import * as Colors from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

import LoginControl from './components/LoginControl'

import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles/main.scss';

class App extends React.Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        children: PropTypes.shape().isRequired,
        dispatch: PropTypes.func.isRequired,
        location: PropTypes.shape({
            pathname: PropTypes.string
        })
    };

    constructor(props) {
        super(props);

        this.state = {
          isOpen: false
        };
    }

    static defaultProps = {
        location: undefined
    };

    goToIndex = () => {
        this.props.dispatch(push('/'));
    };

    render() {
        const homeClass = classNames({
            active: this.props.location && this.props.location.pathname === '/'
        });
        const protectedClass = classNames({
            active: this.props.location && this.props.location.pathname === '/protected'
        });
        const loginClass = classNames({
            active: this.props.location && this.props.location.pathname === '/login'
        });

        return (
            <div className="app">
                <AppBar
                    title={<img src={bvhLogo} style={this.props.muiTheme.appBar.logo} alt="ООО «Брюховецкое водопроводное хозяйство»"/>}
                    onTitleClick={this.goToIndex}
                    showMenuIconButton={false}
                    iconElementRight={<LoginControl isAuthenticated={this.props.isAuthenticated} />}
                />

                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        location: state.routing.location
    };
};

export default muiThemeable()(connect(mapStateToProps)(App));
export { App as AppNotConnected };
