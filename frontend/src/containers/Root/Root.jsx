import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import { compose } from 'recompose';
//import withStyles from '@material-ui/core/styles/withStyles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { white } from 'material-ui/styles/colors';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import NavigationArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';
//import Favicon from 'react-favicon';
// core components
import MessageBox from '../../components/MessageBox';
//import mainStyle from '../Main/mainStyle.jsx';
//Actions
import NotificationActions from '../../actions/Notifications';

import '../../styles/main.scss';
import { muiTheme } from '../../styles/styles';
import DevTools from './DevTools';
import AppView from '../App';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LeftNavMenu from '../../components/LeftNavMenu';
//import favicon from '../../../static/images/favicon.ico';

const isProd = process.env.NODE_ENV === 'production';

//Connect component to Redux store.
@connect(
  state => ({
    messageBox: state.messageBox || {},
    notifications: state.notifications || []
  }),
  dispatch => ({
    actions: bindActionCreators(NotificationActions, dispatch)
  })
)

class Root extends Component {
    static propTypes = {
        store: PropTypes.shape().isRequired,
        history: PropTypes.object.isRequired,
    };

    static defaultProps = {
        scrollStepInPx: 50,
        delayInMs: 16.66,
    };

    state = {
        intervalId: 0,
        goTopEnable: false,
    };
    
    //    <Favicon url = { favicon } />
    constructor(props, context) {
        super(props, context);
        this.scrollChange = this.scrollChange.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollChange);
        if (navigator.platform.indexOf('Win') <= -1) return;
    }

    componentDidUpdate(e) {
        if (e.history.location.pathname === e.location.pathname) return;
        //this.refs.mainPanel.scrollTop = 0;
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollChange);
    }

   /*eslint no-console: ["error", { allow: ["info", "warn", "error"] }] */
   componentDidCatch(error, info) {
    /* Example stack information:
       in ComponentThatThrows (created by App)
       in ErrorBoundary (created by App)
       in div (created by App)
       in App
    */
        console.log(info.componentStack);
    }

    onNotificationChange = items => {
        this.props.actions.addOrUpdateNotifications(items);
    };

    onNotificationDelete = items => {
        this.props.actions.deleteNotifications(items);
    };

    scrollChange() {
        const notTop = window.pageYOffset === 0 ? false : true;
        if (notTop !== this.state.goTopEnable) {
            this.setState({ goTopEnable: notTop });
        }
    }
    
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
    
    render() {
        const { notifications, messageBox, ...rest } = this.props;
        const { goTopEnable } = this.state;

        return (
            <div>
                <MuiThemeProvider muiTheme = { muiTheme }>
                    <div
                        style = { muiTheme.global }
                    >
                        <MessageBox { ...messageBox } open = { messageBox.open || false } />

                        <Header
                            { ...this.props }
                            { ...rest }
                        />
                        <div 
                            id = 'app'
                            style = {{ 
                                display: 'flex', 
                                width: '100%',
                            }}
                        >
                            <LeftNavMenu
                                { ...this.props }
                                { ...rest }
                            />
                            {
                                goTopEnable && 
                                <FloatingActionButton
                                    style = {{
                                        margin: 0,
                                        top: 'auto',
                                        right: 20,
                                        bottom: 20,
                                        left: 'auto',
                                        position: 'fixed',
                                    }}
                                    mini = { true }
                                    onClick = { () => this.scrollToTop() }
                                    zDepth= { 2 }
                                    backgroundColor = { white }
                                >
                                    <NavigationArrowUpward />
                                </FloatingActionButton>
                            }
                            <AppView 
                                { ...this.props }
                                { ...rest }
                            />
                        </div>
                        <Footer
                            { ...this.props }
                            { ...rest }
                        />
                        { !isProd && <DevTools /> }
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
/*
*/

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    };
};

function mapDispatchToProps (dispatch) {
    return {
    };
}

Root.muiName = 'Root';

//export default connect(mapStateToProps, mapDispatchToProps)(Root);
export default compose(
    //withStyles(mainStyle),
    connect(mapStateToProps, mapDispatchToProps)
)(Root);