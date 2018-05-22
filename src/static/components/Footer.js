import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

class Footer extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        //children: PropTypes.shape().isRequired,
        dispatch: PropTypes.func.isRequired,
        location: PropTypes.shape({
            pathname: PropTypes.string
        })
    };

    static get contextTypes() {
        return {
            muiTheme: React.PropTypes.object.isRequired
        };
    }

    constructor(props) {
        super(props);
    }

    static defaultProps = {
        location: undefined
    };

    state = {
        selectedIndex: 0,
    };
    
    select = (index) => this.setState({selectedIndex: index});

    render() {
        return (
            <footer 
                style = { this.props.muiTheme.app.footer }
            >
                <BottomNavigation 
                    selectedIndex = { this.state.selectedIndex }
                    style = {{ position: 'inherit'}}
                >
                    <BottomNavigationItem
                        label="Recents"
                        icon={recentsIcon}
                        onClick={() => this.select(0)}
                    />
                    <BottomNavigationItem
                        label="Favorites"
                        icon={favoritesIcon}
                        onClick={() => this.select(1)}
                    />
                    <BottomNavigationItem
                        label="Nearby"
                        icon={nearbyIcon}
                        onClick={() => this.select(2)}
                    />
                </BottomNavigation>
            </footer>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        location: state.routing.location
    };
};

Footer.muiName = 'Footer';

export default muiThemeable()(connect(mapStateToProps)(Footer));
