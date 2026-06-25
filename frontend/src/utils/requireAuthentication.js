import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { navigateTo } from './navigate';

export default function requireAuthentication(Component) {
    class AuthenticatedComponent extends Component {
        static propTypes = {
            isAuthenticated: PropTypes.bool.isRequired,
            location: PropTypes.shape({
                pathname: PropTypes.string.isRequired
            }).isRequired,
            dispatch: PropTypes.func.isRequired
        };

        componentDidMount() {
            this.checkAuth();
        }

        componentWillReceiveProps(nextProps) {
            this.checkAuth();
        }

        checkAuth() {
            if (!this.props.isAuthenticated) {
                const redirectAfterLogin = this.props.location.pathname;
                navigateTo(`/login?next=${redirectAfterLogin}`);
            }
        }

        render() {
            return (
                <div>
                    {this.props.isAuthenticated === true
                        ? <Component {...this.props} />
                        : null
                    }
                </div>
            );
        }
    }

    const mapStateToProps = (state) => {
        return {
            isAuthenticated: state.auth.isAuthenticated,
            token: state.auth.token
        };
    };

    return connect(mapStateToProps)(AuthenticatedComponent);
}
