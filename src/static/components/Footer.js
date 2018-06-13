import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
//import FontIcon from 'material-ui/FontIcon';
//import Paper from 'material-ui/Paper';
import MapsMap from 'material-ui/svg-icons/maps/map';
import ActionHome from 'material-ui/svg-icons/action/home';
import NavigationArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';
//import SvgIcon from 'material-ui/SvgIcon';
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
        location: undefined,
        scrollStepInPx: 50,
        delayInMs: 16.66,
    };

    state = {
        selectedIndex: 0,
        intervalId: 0
    };
    
    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
    
    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    }
    
    selectBottomNavigationItem = (index) => {
        this.setState({ selectedIndex: index });

        switch(index) {
            case 0:
                return this.props.dispatch(push('/'));
            case 1:
                return this.props.dispatch(push('/map'));
            case 2:
                return this.props.dispatch(push('/creator'));
            case 3:
                return this.scrollToTop();
            default:
                return this.props.dispatch(push('/'));
        }
    }

    render() {
        return (
            <footer 
                style = { this.props.muiTheme.app.footer }
            >
                <BottomNavigation 
                    selectedIndex = { this.state.selectedIndex }
                    style = { this.props.muiTheme.app.footer.bottomNavigation }
                >
                    <BottomNavigationItem
                        label = "© 2018 ООО «Брюховецкое водопроводное хозяйство»"
                        icon = { <ActionHome /> }
                        onClick = { () => this.selectBottomNavigationItem(0) }
                        style = { this.props.muiTheme.app.footer.bottomNavigation.button }
                    />
                    <BottomNavigationItem
                        label = "Карта сайта"
                        icon = { <MapsMap /> }
                        onClick = { () => this.selectBottomNavigationItem(1) }
                        style = { this.props.muiTheme.app.footer.bottomNavigation.button }
                    />
                    <BottomNavigationItem
                        label = "Разработка и поддержка — valera_k2000"
                        icon = {
                            <img
                                src = { AuthorSign }
                                alt = ''
                                style = { this.props.muiTheme.app.footer.bottomNavigation.button.icon }
                            />
                        }
                        onClick = { () => this.selectBottomNavigationItem(2) }
                        style = { this.props.muiTheme.app.footer.bottomNavigation.button }
                    />
                    <BottomNavigationItem
                        label = ""
                        icon = { <NavigationArrowUpward /> }
                        onClick = { () => this.selectBottomNavigationItem(3) }
                        style = {{ 
                            maxWidth: '7rem',
                            position: 'absolute', 
                            margin: 'auto 11rem auto',
                        }}
                    />
                    
                </BottomNavigation>
            </footer>
        );
    }
};
/*
*/

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        location: state.routing.location
    };
};

Footer.muiName = 'Footer';

export default muiThemeable()(connect(mapStateToProps)(Footer));
