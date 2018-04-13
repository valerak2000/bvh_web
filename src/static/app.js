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
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import Login from './components/Login'
import Logged from './components/Logged'

import classNames from 'classnames';
import PropTypes from 'prop-types';

import { authLogoutAndRedirect } from './actions/auth';
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

        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    static defaultProps = {
        location: undefined
    };

    goToIndex = () => {
        this.props.dispatch(push('/'));
    };

    goToProtected = () => {
        this.props.dispatch(push('/protected'));
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
                     //title={<span style={this.props.muiTheme.palette.title}>ООО «БВХ»</span>}
                    titleStyle={this.props.muiTheme.palette.color}
                    onTitleClick={this.goToIndex}
                    showMenuIconButton={false}
                    iconElementLeft={<IconButton></IconButton>}
                    iconElementRight={this.props.isAuthenticated ? <Logged /> : <Login />}
                    style={this.props.muiTheme.palette.appBar}
                />

                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button"
                                className="navbar-toggle collapsed"
                                data-toggle="collapse"
                                data-target="#top-navbar"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Переключить навигацию</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <a className="navbar-brand" onClick={this.goToIndex}>
                                <div id="name-and-slogan">
                                  <div id="site-name" style={{
                                        fontSize: "24px",
                                        lineHeight: 0.7,
                                        width: "400px",
                                        height: "auto",
                                        padding: "20px 0 0",
                                        margin: 0,
                                        position: "relative"
                                    }}>
                                        <strong style={{
                                            fontWeight: "bold",
                                            fontFamily: "arial"
                                            }}>
                                            <span>ООО «Брюховецкое водопроводное хозяйство»</span>
                                        </strong>
                                  </div>
                                  <small>
                                      <div id="site-slogan">
                                        352750, Краснодарский край, ст. Брюховецкая, ул. О.Кошевого, 196
                                      </div>
                                  </small>
                                </div>
                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="top-navbar">
                            {this.props.isAuthenticated ?
                                <ul className="nav navbar-nav navbar-right">
                                    <li className={homeClass}>
                                        <a className="js-go-to-index-button" onClick={this.goToIndex}>
                                            <i className="fa fa-home" /> Главная
                                        </a>
                                    </li>
                                    <li className={protectedClass}>
                                        <a className="js-go-to-protected-button" onClick={this.goToProtected}>
                                            <i className="fa fa-lock" /> Личная информация
                                        </a>
                                    </li>
                                    <li>
                                        <a className="js-logout-button" onClick={this.logout}>
                                            <i className="fa fa-sign-out" /> Выйти
                                        </a>
                                    </li>
                                </ul>
                                :
                                <ul className="nav navbar-nav navbar-right">
                                    <li className={homeClass}>
                                        <a className="js-go-to-index-button" onClick={this.goToIndex}>
                                            <i className="fa fa-home" /> Главная
                                        </a>
                                    </li>
                                    <li className={loginClass}>
                                        <a className="js-login-button" onClick={this.goToLogin}>
                                            <i className="fa fa-sign-in" /> Личный кабинет
                                        </a>
                                    </li>
                                </ul>
                            }
                        </div>
                    </div>
                </nav>

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
