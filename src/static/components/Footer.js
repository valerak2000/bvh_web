import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import MapsMap from 'material-ui/svg-icons/maps/map';
import ActionHome from 'material-ui/svg-icons/action/home';
import SvgIcon from 'material-ui/SvgIcon';
import AuthorSign from '../images/author-sign.svg';

//const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
//const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
//const nearbyIcon = <MapsMap />;

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
    
    selectBottomNavigationItem = (index) => {
        this.setState({ selectedIndex: index });

        switch(index) {
            case 0:
                return browserHistory.push('/')
            case 1:
                return browserHistory.push('/map')
            case 2:
                return browserHistory.push('/creator')
            default:
                return browserHistory.push('/')
        }
    }

    render() {
        return (
            <footer 
                style = { this.props.muiTheme.app.footer }
            >
                <BottomNavigation 
                    selectedIndex = { this.state.selectedIndex }
                    style = {{ position: 'space-between' }}
                >
                    <BottomNavigationItem
                        label = "© 2018 ООО «Брюховецкое водопроводное хозяйство»"
                        icon = { <ActionHome /> }
                        onClick = { () => this.selectBottomNavigationItem(0) }
                    />
                    <BottomNavigationItem
                        label = "Карта сайта"
                        icon = { <MapsMap /> }
                        onClick = { () => this.selectBottomNavigationItem(1) }
                    />
                    <BottomNavigationItem
                        label = "Создание сайта — valera_k2000"
                        icon = {
                            <AuthorSign />
                        }
                        onClick = { () => this.selectBottomNavigationItem(2) }
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
