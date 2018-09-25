import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { push } from 'react-router-redux';
import t from 'tcomb-form';
import PropTypes from 'prop-types';
//import i18n from '../../../lib/i18n/ru.json';

import * as actionCreators from '../../actions/auth';

const Form = t.form.Form;

const Login = t.struct({
    email: t.String,
    password: t.String
});

const LoginFormOptions = {
    //auto: 'placeholders', //'placeholders', 'labels',
    //help: <i>Hint: a@a.com / qw</i>,
    fields: {
	email: {
        label: 'E-mail или Логин',
        //legend: 'E-mail или Логин'
            attrs: {
                autoFocus: true,
                placeholder: 'ivanov@mail.ru'
            }
        },
        password: {
        label: 'Пароль',
        //legend: 'Пароль',
            type: 'password'
        }
    },
    i18n: {
        Email: 'E-mail',
        Password: 'Пароль',
	optional: ' (необязательный)',
	required: ' *',
	add: 'Добавить',
        remove: 'Убрать',
        up: 'Вверх',
        down: 'Вниз'
    }
};

class LoginView extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool.isRequired,
        isAuthenticating: PropTypes.bool.isRequired,
        statusText: PropTypes.string,
        actions: PropTypes.shape({
            authLoginUser: PropTypes.func.isRequired
        }).isRequired,
        //location: PropTypes.shape({
        //    search: PropTypes.string.isRequired
        //})
    };

    static defaultProps = {
        statusText: '',
        //location: null
    };

    constructor(props, context) {
        super(props, context);

        const redirectRoute = this.props.location ? this.extractRedirect(this.props.location.search) || '/' : '/';
        this.state = {
            formValues: {
                email: '',
                password: ''
            },
            redirectTo: redirectRoute
        };
    }

    componentDidMount() {
        if (this.props.isAuthenticated) {
            this.props.dispatch(push('/'));
        }
    }

    onFormChange = (value) => {
        this.setState({ formValues: value });
    };

    extractRedirect = (string) => {
        const match = string.match(/next=(.*)/);
        return match ? match[1] : '/';
    };

    login = (e) => {
        e.preventDefault();
        const value = this.loginForm.getValue();
        if (value) {
            this.props.actions.authLoginUser(value.email, value.password, this.state.redirectTo);
        }
    };

    signup = (e) => {
        e.preventDefault();
        const value = this.loginForm.getValue();
        if (value) {
            this.props.actions.signupLoginUser(value.email, value.password, this.state.redirectTo);
        }
    };

    render() {
        let statusText = null;
        if (this.props.statusText) {
            const statusTextClassNames = classNames({
                'alert': true,
                'alert-danger': this.props.statusText.indexOf('Authentication Error') === 0,
                'alert-success': this.props.statusText.indexOf('Authentication Error') !== 0
            });

            statusText = (
                <div className="row">
                    <div className="col-sm-12">
                        <div className={statusTextClassNames}>
                            {this.props.statusText}
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="container login">
                <h1 className="text-center">Вход в личный кабинет</h1>
                <div className="login-container margin-top-medium">
                    {statusText}
                    <form onSubmit={this.login}>
                        <Form ref={(ref) => { this.loginForm = ref; }}
                            type={Login}
                            options={LoginFormOptions}
                            value={this.state.formValues}
                            onChange={this.onFormChange}
                            context={{locale: 'ru-RU'}}
                        />
                        <button disabled={this.props.isAuthenticating}
                            type="submit"
                            className="btn btn-default btn-primary btn-block"
                        >
                            Войти
                        </button>
                        <button disabled={this.props.isAuthenticating}
                            className="btn btn-block"
                            onClick={this.signup}
                        >
                            Зарегистрироваться
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isAuthenticating: state.auth.isAuthenticating,
        statusText: state.auth.statusText
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        actions: bindActionCreators(actionCreators, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
export { LoginView as LoginViewNotConnected };
