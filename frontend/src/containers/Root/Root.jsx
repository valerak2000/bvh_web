import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, BrowserRouter } from 'react-router-dom';
//import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { compose } from 'recompose';
//import Favicon from 'react-favicon';

import '../../styles/main.scss';
import { GetBaseUrl } from '../../commons/commonFuncs';
import { muiTheme } from '../../styles/styles';
import routes from '../../routes/routes';
import DevTools from './DevTools';
import AppView from '../App';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LeftNavMenu from '../../components/LeftNavMenu';
//import favicon from '../../../static/images/favicon.ico';

const isProd = process.env.NODE_ENV === 'production';
const base = GetBaseUrl();

class Root extends Component {
    static propTypes = {
        store: PropTypes.shape().isRequired,
        history: PropTypes.object.isRequired,
        //location: PropTypes.string,
    };

    static defaultProps = {
        //location: undefined
    };

    static get contextTypes() {
        return {
        };
    }
//    <Favicon url = { favicon } />

    render() {

        return (
            <div>
                <MuiThemeProvider muiTheme = { muiTheme }>
                    <div
                        style = { muiTheme.global }
                    >
                    <React.StrictMode>
                        <Header
                            { ...this.props }
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
                            />
                            <AppView />
                            { !isProd && <DevTools /> }
                        </div>
                        <Footer
                            { ...this.props }
                        />
                    </React.StrictMode>
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
        //location: location.pathname
    };
};

function mapDispatchToProps (dispatch) {
    return {
    };
}

Root.muiName = 'Root';

//export default connect(mapStateToProps, mapDispatchToProps)(Root);
export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Root);