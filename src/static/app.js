import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
//import { getStyles } from 'material-ui/AppBar/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {Tabs, Tab} from 'material-ui/Tabs';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';

import LoginControl from './components/LoginControl'
import { SiteMenu } from './components/SiteMenu'
import bvhLogo from './images/logo_bvh.png';

//import './styles/main.scss';

class App extends React.Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        children: PropTypes.shape().isRequired,
        dispatch: PropTypes.func.isRequired,
        location: PropTypes.shape({
            pathname: PropTypes.string
        })
    };

    static get contextTypes() {
        return { muiTheme: React.PropTypes.object.isRequired };
    }

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

/*
    const styles = getStyles(this.props, this.context);
    const styles = getStyles(this.props, this.context);
      styles.flatButton.top = -styles.flatButton.marginTop;
      styles.flatButton.marginTop = 0;
      styles.iconButtonStyle.top = -styles.iconButtonStyle.marginTop;
      styles.iconButtonStyle.marginTop = 0;

                    title={<img src={bvhLogo} style={this.props.muiTheme.appBar.logo} alt="ООО «Брюховецкое водопроводное хозяйство»"/>}
                    onTitleClick={this.goToIndex}
                    iconElementLeft={<SiteMenu />}
                    iconElementRight={<LoginControl isAuthenticated={this.props.isAuthenticated} />}
                    showMenuIconButton={false}
                    style={{
                            textColor: Colors.blue900,
                            backgroundColor: Colors.lightGreen50,
                    }}

    <FlatButton
        style={{ width: '200', height: '56'}}
        icon={<ActionAndroid />}
        onClick={this.goToIndex}
    />

                    onLeftIconButtonClick = {this.goToIndex}
    <div>
                        <FlatButton label="Save" style={styles.flatButton}/>
                        <FlatButton label="Save1" style={styles.flatButton} />
    </div>
                    <IconButton onClick={this.goToIndex} style={styles.iconButtonStyle} iconStyle={{ width: 148, height: 56, objectFit: 'contain', cursor: 'pointer'}}>
<img src={bvhLogo} alt="ООО «Брюховецкое водопроводное хозяйство»"/>
</IconButton>

                        <div>
                            <IconButton
                                iconStyle = {{ width: 148, height: 56, objectFit: 'contain', cursor: 'pointer'}}
                                onClick = {this.goToIndex}
                            >
                                <img
                                    src = {bvhLogo}
                                    alt = "ООО «Брюховецкое водопроводное хозяйство»"
                                />
                            </IconButton>
                            <SiteMenu />
                        </div>

                                muiTheme = { this.props.muiTheme.appBar.ElementRight.Login }

*/
        return (
            <div className="app">
                <AppBar
                    titleStyle = {{ width: 0 }}
                    iconElementLeft = {
                        <div id = "ElementLeft" style = { this.props.muiTheme.appBar.ElementLeft }>
                            <IconButton
                                style = { this.props.muiTheme.appBar.ElementLeft.Logo }
                                iconStyle = { this.props.muiTheme.appBar.ElementLeft.Logo.Pict }
                                onClick = { this.goToIndex }
                            >
                                <img
                                    src = { bvhLogo }
                                    alt = "ООО «Брюховецкое водопроводное хозяйство»"
                                />
                            </IconButton>
                            <SiteMenu muiTheme = { this.props.muiTheme.appBar.ElementLeft.Menu } />
                        </div>
                    }
                    iconStyleLeft = {{ width: '60%' }}
                    iconElementRight = {
                        <div id = "ElementRight" style = { this.props.muiTheme.appBar.ElementRight }>
                            <LoginControl
                                isAuthenticated = { this.props.isAuthenticated }
                                muiTheme = { this.props.muiTheme.appBar.ElementRight.Login }
                            />
                        </div>
                    }
                    iconStyleRight = {{ width: 'auto' }}
                    style = {{
                        textColor: Colors.blue900,
                        backgroundColor: Colors.lightGreen50,
                    }}
                />

                <div>
                    { this.props.children }
                </div>
            </div>
        );
    }
}
//this.props.muiTheme.appBar
const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        location: state.routing.location
    };
};

export default muiThemeable()(connect(mapStateToProps)(App));
export { App as AppNotConnected };
