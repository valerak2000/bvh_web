import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Map from '@material-ui/icons/Map';
import Home from '@material-ui/icons/Home';
import Business from '@material-ui/icons/Business';

const AuthorSign = '/static/images/author-sign.png';

const styles = {
    label: {
        fontSize: 16,
        textAlign: 'center'
    },
};    

class Footer extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired,
        location: PropTypes.object.isRequired,
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
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
        const { classes } = this.props;
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
                        label = '© 2018 ООО «БВХ», ООО «БООС»'
                        icon = { <Home /> }
                        value = 'home'
                        component = { Link } to = '/'
                        style = { footer.bottomNavigation.button }
                        classes = {{ label: classes.label, }}
                    />
                    <BottomNavigationAction
                        label = 'Карта сайта'
                        icon = { <Map /> }
                        value = 'map'
                        component = { Link } to = '/map'
                        style = { footer.bottomNavigation.button }
                        classes = {{ label: classes.label, }}
                    />
                    <BottomNavigationAction
                        label = 'Партнеры'
                        icon = { <Business /> }
                        value = 'business'
                        href = "http://www.brhts.ru"
                        target = "_blank"
                        style = { footer.bottomNavigation.button }
                        classes = {{ label: classes.label, }}
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
/*
*/

export default withStyles(styles, { name: 'muiFooter', flip: false, withTheme: true })(Footer);
