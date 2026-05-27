import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Map from '@mui/icons-material/Map';
import Home from '@mui/icons-material/Home';
import Business from '@mui/icons-material/Business';

const AuthorSign = '/static/images/author-sign.png';

const Footer = () => {
    const [value, setValue] = useState(0);
    const theme = useTheme();
    const footer = theme?.app?.footer || {};

    return (
        <footer style={footer}>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                showLabels
                style={footer?.bottomNavigation}
            >
                <BottomNavigationAction
                    label='© 2018 ООО «БВХ»'
                    icon={<Home />}
                    value='home'
                    component={Link}
                    to='/'
                    style={footer?.bottomNavigation?.button}
                />
                <BottomNavigationAction
                    label='Карта сайта'
                    icon={<Map />}
                    value='map'
                    component={Link}
                    to='/map'
                    style={footer?.bottomNavigation?.button}
                />
                <BottomNavigationAction
                    label='Партнеры'
                    icon={<Business />}
                    value='business'
                    href='http://www.brhts.ru'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={footer?.bottomNavigation?.button}
                />
            </BottomNavigation>
            <address style={footer?.bottomText}>
                Разработка и поддержка{' '}
                <a
                    href='http://www.valera-k2000.ru'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={footer?.bottomText?.link}
                >
                    <img
                        src={AuthorSign}
                        alt='valera_k2000'
                        width='16'
                        height='16'
                    />{' '}
                    valera_k2000
                </a>
            </address>
        </footer>
    );
};

export default Footer;
