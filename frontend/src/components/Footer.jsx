import React, { Component } from 'react';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withTheme from '@material-ui/core/styles/withTheme';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
//import FontIcon from 'material-ui/FontIcon';
//import Paper from 'material-ui/Paper';
import Map from '@material-ui/icons/Map';
import Home from '@material-ui/icons/Home';
//import NavigationArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';
//import NavigationExpandLess from 'material-ui/svg-icons/navigation/expand-less';
//import AvRecentActors from 'material-ui/svg-icons/av/recent-actors';
import Business from '@material-ui/icons/Business';
//import * as Colors from 'material-ui/styles/colors';

const AuthorSign = '/static/images/author-sign.png';

//const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
//const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
//const nearbyIcon = <MapsMap />;

class Footer extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired,
        location: PropTypes.object.isRequired,
        theme: PropTypes.object.isRequired,
    };

    constructor(props, context) {
        super(props, context);
    }

    state = {
        selectedIndex: 0,
    };
    
    handleChange = (event, value) => {
        this.setState({ value });
    };
    
    /*selectBottomNavigationAction = (index) => {
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
    }*/

    render() {
        const { footer } = { ...this.props.theme.app };
        const { value } = this.state;

        return (
            <footer 
                style = { footer }
            >
                <BottomNavigation 
                    value = { value }
                    onChange = { this.handleChange }
                    showLabels
                    style = { footer.bottomNavigation }
                >
                    <BottomNavigationAction
                        label = '© 2018 ООО «Брюховецкое водопроводное хозяйство»'
                        icon = { <Home /> }
                        value = 'home'
                        component = { Link } to = '/'
                        style = { footer.bottomNavigation.button }
                    />
                    <BottomNavigationAction
                        label = 'Карта сайта'
                        icon = { <Map /> }
                        value = 'map'
                        component = { Link } to = '/map'
                        style = { footer.bottomNavigation.button }
                    />
                    <BottomNavigationAction
                        label = 'Партнеры'
                        icon = { <Business /> }
                        value = 'business'
                        href = "http://www.brhts.ru" 
                        target = "_blank"
                        style = { footer.bottomNavigation.button }
                    />
                </BottomNavigation>
                <div
                    style = { footer.bottomText }
                >
                    Разработка и поддержка <a 
                    href = 'http://www.valera-k2000.ru'
                    target = '_blank'
                    style = { footer.bottomText.link }
                    >
                        <img src = { AuthorSign } alt = 'valera_k2000' width = '16' height = '16'/> valera_k2000 </a>
                </div>
            </footer>
        );
    }
}
/*
                    selectedIndex = { this.state.selectedIndex }

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

Footer.muiName = 'Footer';

export default withTheme()(Footer);
