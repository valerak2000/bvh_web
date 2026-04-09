import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Map from '@mui/icons-material/Map';
import Home from '@mui/icons-material/Home';
import Business from '@mui/icons-material/Business';

const AuthorSign = '/static/images/author-sign.png';

class Footer extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired,
        location: PropTypes.object.isRequired,
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
                        label = '© 2018 ООО «БВХ»'
                        icon = { <Home /> }
                        value = 'home'
                        component = { Link } to = '/'
                        style = { footer.bottomNavigation.button }
                        sx = {{
                            '& .MuiBottomNavigationAction-label': {
                                fontSize: 16,
                                textAlign: 'center'
                            }
                        }}
                    />
                    <BottomNavigationAction
                        label = 'Карта сайта'
                        icon = { <Map /> }
                        value = 'map'
                        component = { Link } to = '/map'
                        style = { footer.bottomNavigation.button }
                        sx = {{
                            '& .MuiBottomNavigationAction-label': {
                                fontSize: 16,
                                textAlign: 'center'
                            }
                        }}
                    />
                    <BottomNavigationAction
                        label = 'Партнеры'
                        icon = { <Business /> }
                        value = 'business'
                        href = 'http://www.brhts.ru'
                        target = '_blank'
                        style = { footer.bottomNavigation.button }
                        sx = {{
                            '& .MuiBottomNavigationAction-label': {
                                fontSize: 16,
                                textAlign: 'center'
                            }
                        }}
                    />
                </BottomNavigation>
                <address
                    style = { footer.bottomText }
                >
                    Разработка и поддержка <a
                        href = 'http://www.valera-k2000.ru'
                        target = '_blank'
                        style = { footer.bottomText.link }
                    >
                        <img src = { AuthorSign } alt = 'valera_k2000' width = '16' height = '16'/> valera_k2000 </a>
                </address>
            </footer>
        );
    }
}

const FooterWithTheme = (props) => {
    const theme = useTheme();
    return <Footer {...props} theme={theme} />;
};

export default FooterWithTheme;
