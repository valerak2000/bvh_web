import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import { common } from '@mui/material/colors';
// core components
import MessageBox from '../../components/MessageBox';
//Actions
import NotificationActions from '../../actions/Notifications';
import '../../styles/main.scss';
import { muiTheme } from '../../styles/styles';
import DevTools from './DevTools';
import AppView from '../App';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import LeftNavMenu from '../../components/Sidebar/LeftNavMenu';

const isProd = process.env.NODE_ENV === 'production';

const Root = (props) => {
    const { scrollStepInPx = 50, delayInMs = 16.66 } = props;

    // Redux state
    const messageBox = useSelector((state) => state.messageBox || {});
    const notifications = useSelector((state) => state.notifications || []);
    const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);
    const dispatch = useDispatch();

    // Local state
    const [intervalId, setIntervalId] = useState(0);
    const [goTopEnable, setGoTopEnable] = useState(false);

    // Event handlers
    const onNotificationChange = useCallback(
        (items) => {
            dispatch(NotificationActions.addOrUpdateNotifications(items));
        },
        [dispatch]
    );

    const onNotificationDelete = useCallback(
        (items) => {
            dispatch(NotificationActions.deleteNotifications(items));
        },
        [dispatch]
    );

    // Scroll handling
    const scrollChange = useCallback(() => {
        const notTop = window.pageYOffset !== 0;
        if (notTop !== goTopEnable) {
            setGoTopEnable(notTop);
        }
    }, [goTopEnable]);

    const scrollStep = useCallback(() => {
        if (window.pageYOffset === 0) {
            clearInterval(intervalId);
            setIntervalId(0);
        }
        window.scroll(0, window.pageYOffset - scrollStepInPx);
    }, [intervalId, scrollStepInPx]);

    const scrollToTop = useCallback(() => {
        if (intervalId) {
            clearInterval(intervalId);
        }
        const id = setInterval(scrollStep, delayInMs);
        setIntervalId(id);
    }, [intervalId, scrollStep, delayInMs]);

    // Lifecycle effects
    useEffect(() => {
        window.addEventListener('scroll', scrollChange);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', scrollChange);
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [scrollChange, intervalId]);

    return (
        <div>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={muiTheme}>
                    <div style={muiTheme.global}>
                        <MessageBox {...messageBox} open={messageBox.open || false} />

                        <Header
                            {...props}
                            isAuthenticated={isAuthenticated}
                            onNotificationChange={onNotificationChange}
                            onNotificationDelete={onNotificationDelete}
                            notifications={notifications}
                        />

                        <div
                            id="app"
                            style={{
                                display: 'flex',
                                width: '100%'
                            }}
                        >
                            <LeftNavMenu
                                {...props}
                                isAuthenticated={isAuthenticated}
                                onNotificationChange={onNotificationChange}
                                onNotificationDelete={onNotificationDelete}
                                notifications={notifications}
                            />
                            {goTopEnable && (
                                <Fab
                                    aria-label="Top"
                                    size="small"
                                    onClick={() => scrollToTop()}
                                    style={{
                                        margin: 0,
                                        top: 'auto',
                                        right: 20,
                                        bottom: 20,
                                        left: 'auto',
                                        position: 'fixed',
                                        backgroundColor: common['white']
                                    }}
                                >
                                    <ArrowUpward />
                                </Fab>
                            )}
                            <AppView
                                {...props}
                                isAuthenticated={isAuthenticated}
                                onNotificationChange={onNotificationChange}
                                onNotificationDelete={onNotificationDelete}
                                notifications={notifications}
                            />
                        </div>

                        <Footer {...props} />
                        {!isProd && <DevTools />}
                    </div>
                </ThemeProvider>
            </StyledEngineProvider>
        </div>
    );
};

Root.propTypes = {
    scrollStepInPx: PropTypes.number,
    delayInMs: PropTypes.number
};

Root.defaultProps = {
    scrollStepInPx: 50,
    delayInMs: 16.66
};

export default Root;
