import React, { useState, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import {
    HOME_MENU,
    HOME_MENU_EP,
    HOME_MENU_BO,
    HOME_MENU_CM,
    HOME_MENU_FQ,
    HOME_MENU_MP,
    ABOUT_MENU,
    CUSTOMERS_MENU,
    NEWS_MENU
} from '../../constants';
import { MENU_HOME, MENU_ABOUT, MENU_CUSTOMERS, MENU_NEWS } from '../../constants/menuStruct';

const styles = (theme) => ({
    icon: {
        marginRight: 0,
        color: alpha(theme.palette.text.secondary, 0.64)
    },
    children: {
        paddingLeft: theme.spacing(4)
    }
});

const StyledDrawer = styled(Drawer)({
    position: 'relative'
});

function NavMenu(props) {
    const { items, onClick, initiallyFocused, expanded: expandedProp, classes } = props;
    const theme = useTheme();

    const initiallyFocusedValue =
        initiallyFocused === undefined || initiallyFocused == null
            ? items[0]?.key
            : initiallyFocused;

    // Создаем локальную копию expanded для управления состоянием открытия
    const [expandedState, setExpandedState] = useState(() => {
        const state = [];
        items.forEach((item) => {
            if (item.children?.length > 0) {
                const isOpen =
                    expandedProp?.some((menu) => menu.key === item.key && menu.open) ||
                    initiallyFocusedValue === item.key;
                state.push({ key: item.key, open: isOpen });
            }
        });
        return state;
    });

    const getOpenState = (key) => {
        const item = expandedState.find((menu) => menu.key === key);
        return item ? item.open : false;
    };

    const handleItemClick = (dataRoute, key, e, hasChildren) => {
        if (hasChildren) {
            setExpandedState((prev) =>
                prev.map((menu) => (menu.key === key ? { ...menu, open: !menu.open } : menu))
            );
        }
        onClick(dataRoute, key, e);
    };
    const iconStyle = useMemo(() => {
        return theme?.app?.icon || {};
    }, [theme]);

    const listItems = items.map((item, index) => {
        const open = getOpenState(item.key);
        const hasChildren = item.children !== undefined && item.children.length > 0;

        return (
            <React.Fragment key={index}>
                <ListItemButton
                    key={item.key}
                    disableGutters
                    selected={initiallyFocusedValue === item.key}
                    onClick={(e) => handleItemClick(item.dataRoute, item.key, e, hasChildren)}
                    disabled={item.disabled}
                >
                    {item.leftIcon && (
                        <ListItemIcon className={iconStyle}>{item.leftIcon}</ListItemIcon>
                    )}
                    <ListItemText
                        primary={item.primaryText}
                        primaryTypographyProps={{
                            variant: 'body1',
                            color: 'primary'
                        }}
                        secondary={item.secondaryText}
                        secondaryTypographyProps={{
                            variant: 'body2',
                            color: 'primary'
                        }}
                    />
                    {hasChildren && (open ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
                {hasChildren && (
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List disablePadding>
                            {item.children.map((ni, childIndex) => {
                                const childKey = `${item.key}_${ni.key}`;
                                const isSelected = initiallyFocusedValue === childKey;

                                return (
                                    <ListItemButton
                                        key={ni.key}
                                        disableGutters
                                        selected={isSelected}
                                        onClick={(e) => onClick(ni.dataRoute, ni.key, e)}
                                        className={classes.children}
                                        disabled={ni.disabled}
                                    >
                                        {ni.leftIcon && (
                                            <ListItemIcon className={iconStyle}>
                                                {ni.leftIcon}
                                            </ListItemIcon>
                                        )}
                                        <ListItemText
                                            primary={ni.primaryText}
                                            primaryTypographyProps={{
                                                variant: 'body1',
                                                color: 'primary'
                                            }}
                                            secondary={ni.secondaryText}
                                            secondaryTypographyProps={{
                                                variant: 'body2',
                                                color: 'primary'
                                            }}
                                        />
                                    </ListItemButton>
                                );
                            })}
                        </List>
                    </Collapse>
                )}
            </React.Fragment>
        );
    });

    return (
        <List component="nav" style={props.style}>
            {listItems}
        </List>
    );
}

NavMenu.propTypes = {
    items: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    initiallyFocused: PropTypes.string,
    expanded: PropTypes.array,
    style: PropTypes.object
};

function LeftNavMenu(props) {
    //const { isAuthenticated } = props;
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();

    const [activeMenuTop, setActiveMenuTop] = useState(HOME_MENU);
    const [activeMenuSecond, setActiveMenuSecond] = useState(null);
    const [activeMenuThird, setActiveMenuThird] = useState(null);
    const [expanded, setExpanded] = useState([]);

    // Анализ текущего пути при изменении location
    useEffect(() => {
        if (location?.pathname) {
            const urls = location.pathname.split('/');
            const currentMenuTop = urls[1] !== '' ? urls[1] : HOME_MENU;
            const currentMenuSecond = urls.length <= 2 || urls[2] === '' ? null : urls[2];
            const currentMenuThird = urls.length <= 3 || urls[3] === '' ? null : urls[3];

            setActiveMenuTop(currentMenuTop);
            setActiveMenuSecond(currentMenuSecond);
            setActiveMenuThird(currentMenuThird);

            // Если есть второй уровень меню, добавляем его в expanded
            if (currentMenuSecond && !expanded.some((item) => item.key === currentMenuSecond)) {
                setExpanded((prev) => [...prev, { key: currentMenuSecond, open: true }]);
            }
        }
    }, [location]);

    const handleMenuClick = useCallback(
        (dataRoute, key, e) => {
            const indexOfMenu = expanded.findIndex((i) => i.key === key);
            if (indexOfMenu > -1) {
                setExpanded((prev) =>
                    prev.map((item, idx) =>
                        idx === indexOfMenu ? { ...item, open: !item.open } : item
                    )
                );
            }
            navigate(dataRoute);
        },
        [expanded, navigate]
    );

    let initiallyFocused = null;
    if (activeMenuSecond !== null) {
        initiallyFocused =
            activeMenuSecond + (activeMenuThird != null ? '_' + activeMenuThird : '');
    }

    let leftmenu = null;
    switch (activeMenuTop) {
        case HOME_MENU:
            leftmenu = (
                <NavMenu
                    items={MENU_HOME}
                    onClick={handleMenuClick}
                    initiallyFocused={initiallyFocused}
                    expanded={expanded}
                />
            );
            break;
        case HOME_MENU_EP:
            leftmenu = (
                <NavMenu
                    items={MENU_HOME}
                    onClick={handleMenuClick}
                    initiallyFocused="elektronnaya_priemnaya"
                    expanded={expanded}
                />
            );
            break;
        case HOME_MENU_BO:
            leftmenu = (
                <NavMenu
                    items={MENU_HOME}
                    onClick={handleMenuClick}
                    initiallyFocused="blackouts"
                    expanded={expanded}
                />
            );
            break;
        case HOME_MENU_CM:
            leftmenu = (
                <NavMenu
                    items={MENU_HOME}
                    onClick={handleMenuClick}
                    initiallyFocused="available_capacity_map"
                    expanded={expanded}
                />
            );
            break;
        case HOME_MENU_FQ:
            leftmenu = (
                <NavMenu
                    items={MENU_HOME}
                    onClick={handleMenuClick}
                    initiallyFocused="faq"
                    expanded={expanded}
                />
            );
            break;
        case HOME_MENU_MP:
            leftmenu = (
                <NavMenu
                    items={MENU_HOME}
                    onClick={handleMenuClick}
                    initiallyFocused="map"
                    expanded={expanded}
                />
            );
            break;
        case ABOUT_MENU:
            leftmenu = (
                <NavMenu
                    items={MENU_ABOUT}
                    onClick={handleMenuClick}
                    initiallyFocused={initiallyFocused}
                    expanded={expanded}
                />
            );
            break;
        case CUSTOMERS_MENU:
            leftmenu = (
                <NavMenu
                    items={MENU_CUSTOMERS}
                    onClick={handleMenuClick}
                    initiallyFocused={initiallyFocused}
                    expanded={expanded}
                />
            );
            break;
        case NEWS_MENU:
            leftmenu = (
                <NavMenu
                    items={MENU_NEWS}
                    onClick={handleMenuClick}
                    initiallyFocused={initiallyFocused}
                    expanded={expanded}
                />
            );
            break;
        default:
            leftmenu = null;
    }

    /*     const leftNav = { ...theme.leftNav };
    if (leftmenu !== null) {
        leftNav.width = '20%';
    } else {
        leftNav.width = '0%';
    }
 */
    return <StyledDrawer variant="permanent">{leftmenu}</StyledDrawer>;
}

LeftNavMenu.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
};

export default LeftNavMenu;
