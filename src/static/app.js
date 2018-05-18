import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';

class App extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        children: PropTypes.shape().isRequired,
        dispatch: PropTypes.func.isRequired,
        location: PropTypes.shape({
            pathname: PropTypes.string
        }),
        //history: PropTypes.shape().isRequired,
    };

    static defaultProps = {
        location: undefined
    };

    static get contextTypes() {
        return {
            muiTheme: React.PropTypes.object.isRequired,
            router: React.PropTypes.object
        };
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    //    console.log('App');
    }

    render() {
        const homeClass = classNames({
            active: this.props.location && this.props.location.pathname === '/'
        });
        const protectedClass = classNames({
            active: this.props.location && this.props.location.pathname === '/protected'
        });
        const loginClass = classNames({
            active: this.props.location && this.props.location.pathname === '/login'
        });
        const aboutClass = classNames({
            active: this.props.location && this.props.location.pathname === '/about'
        });
        const customersClass = classNames({
            active: this.props.location && this.props.location.pathname === '/customers'
        });
        const newsClass = classNames({
            active: this.props.location && this.props.location.pathname === '/news'
        });
        const contactsClass = classNames({
            active: this.props.location && this.props.location.pathname === '/contacts'
        });

        return (
            <div>
                { this.props.children }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        location: state.routing.location
    };
};

export default muiThemeable()(connect(mapStateToProps)(App));
export { App as AppNotConnected };
