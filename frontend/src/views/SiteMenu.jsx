import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { pink } from '@mui/material/colors';

const styles = {
    style: {
        backgroundColor: pink['A200'], //rgb(255, 64, 129)
    }
};

const excludedTabs = [
    'elektronnaya_priemnaya',
    'blackouts',
    'available_capacity_map',
    'faq',
    'map'
];

function SiteMenu() {
    const location = useLocation();
    const theme = useTheme();
    
    const [activeTab, setActiveTab] = useState(false);

    // Определяем активную вкладку на основе текущего пути
    useEffect(() => {
        if (location?.pathname) {
            const urls = location.pathname.split('/');
            let currentTab = urls[1] !== '' ? urls[1] : false;
            
            // Исключаем страницы, которых нет в табах
            if (excludedTabs.includes(currentTab)) {
                currentTab = false;
            }
            
            setActiveTab(currentTab);
        }
    }, [location]);

    const handleChange = (event, value) => {
        setActiveTab(value);
    };

    const menuStyle = useMemo(() => {
        return theme?.app?.header?.appBar?.menu || {};
    }, [theme]);

    const tabStyle = useMemo(() => {
        return menuStyle.tab || {};
    }, [menuStyle]);

    return (
        <div>
            <Tabs
                value={activeTab}
                onChange={handleChange}
                style={menuStyle}
            >
                <Tab
                    value="about"
                    label="О компании"
                    component={Link}
                    to="/about"
                    style={tabStyle}
                />
                <Tab
                    value="customers"
                    label="Абонентам"
                    component={Link}
                    to="/customers"
                    style={tabStyle}
                />
                <Tab
                    value="news"
                    label="Новости"
                    component={Link}
                    to="/news"
                    style={tabStyle}
                />
            </Tabs>
        </div>
    );
}

SiteMenu.propTypes = {};

SiteMenu.defaultProps = {};

export default SiteMenu;
