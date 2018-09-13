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
//import NavigationArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';
//import NavigationExpandLess from 'material-ui/svg-icons/navigation/expand-less';
//import AvRecentActors from 'material-ui/svg-icons/av/recent-actors';
import CommunicationBusiness from 'material-ui/svg-icons/communication/business';
//import * as Colors from 'material-ui/styles/colors';

const AuthorSign = '/static/images/author-sign.png';

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
            muiTheme: PropTypes.object.isRequired
        };
    }

    constructor(props) {
        super(props);
    }

    static defaultProps = {
        location: undefined,
    };

    state = {
        selectedIndex: 0,
    };
    
    selectBottomNavigationItem = (index) => {
        this.setState({ selectedIndex: index });

        switch(index) {
            case 0:
                return this.props.dispatch(push('/'));
            case 1:
                return this.props.dispatch(push('/map'));
            case 2:
                return window.open('http://brhts.ru/');
                //this.props.dispatch(push('/partners'));
            case 3:
                //window.location.href = "mailto:valera_k2000@inbox.ru";
                //return window.open("mailto:valera_k2000@inbox.ru");
                return this.props.dispatch(push('/creator'));
            default:
                return;
//                return this.props.dispatch(push('/'));
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
                        label = "Партнеры"
                        icon = { <CommunicationBusiness /> }
                        style = { this.props.muiTheme.app.footer.bottomNavigation.button }
                        onClick = { () => this.selectBottomNavigationItem(2) }
                    />
                </BottomNavigation>
                <div
                    style = { this.props.muiTheme.app.footer.bottomText }
                >
                    Разработка и поддержка <a 
                    href="http://www.valera-k2000.ru" 
                    target="_blank"
                    style = { this.props.muiTheme.app.footer.bottomText.link }
                    >
                        <img src = { AuthorSign } alt="valera_k2000" width="16" height="16"/> valera_k2000 </a>
                </div>
            </footer>
        );
    }
}
/*
                    <BottomNavigationItem
                        label = "Разработка и поддержка valera_k2000"
                        icon = {
                            <img
                                src = { AuthorSign }
                                alt = ''
                                style = { this.props.muiTheme.app.footer.bottomNavigation.button.icon }
                            />
                        }
                        onClick = { () => this.selectBottomNavigationItem(3) }
                        style = { this.props.muiTheme.app.footer.bottomNavigation.button }
                    />

                        href = 'http://brhts.ru/'
                        target = '_blank'

                    <BottomNavigationItem
                        label = ""
                        icon = { <NavigationArrowUpward /> }
                        onClick = { () => this.selectBottomNavigationItem(4) }
                        style = {{ 
                            position: 'absolute', 
                            margin: 'auto 25rem auto',
                            maxWidth: '7rem',
                        }}
                    />

label = {
                            <div>
                                <a href="mailto:valera_k2000@inbox.ru">Разработка сайта</a>
                            </div>
                        }

                    href = "mailto:valera_k2000@inbox.ru"
                    target = "_top"

"https://github.com/valerak2000/bvh_web"
                        onClick = { () => this.selectBottomNavigationItem(3) }

                            <div>
                            Партнеры
                            <ul>
                            <li><a href="http://brhts.ru/" target="_blank">Теплосети</a></li>
                            </ul>                    
                            </div>
*/

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        location: state.routing.location
    };
};

Footer.muiName = 'Footer';

export default muiThemeable()(connect(mapStateToProps)(Footer));
