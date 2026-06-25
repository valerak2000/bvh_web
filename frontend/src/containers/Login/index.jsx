import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
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

function LoginView(props) {
    const { dispatch, isAuthenticated, isAuthenticating, statusText, actions, location, history } = props;
    const [formValues, setFormValues] = React.useState({
        email: '',
        password: ''
    });
    const redirectRoute = location ? extractRedirect(location.search) || '/' : '/';
    const [redirectTo] = React.useState(redirectRoute);
    let loginForm = React.useRef(null);

    React.useEffect(() => {
        if (isAuthenticated) {
            history.push('/');
        }
    }, [isAuthenticated, history]);

    const onFormChange = (value) => {
        setFormValues(value);
    };

    const extractRedirect = (string) => {
        const match = string.match(/next=(.*)/);
        return match ? match[1] : '/';
    };

    const login = (e) => {
        e.preventDefault();
        const value = loginForm.current.getValue();
        if (value) {
            actions.authLoginUser(value.email, value.password, redirectTo);
        }
    };

    const signup = (e) => {
        e.preventDefault();
        const value = loginForm.current.getValue();
        if (value) {
            actions.signupLoginUser(value.email, value.password, redirectTo);
        }
    };

    let statusTextElement = null;
    if (statusText) {
        const statusTextClassNames = classNames({
            'alert': true,
            'alert-danger': statusText.indexOf('Authentication Error') === 0,
            'alert-success': statusText.indexOf('Authentication Error') !== 0
        });

        statusTextElement = (
            <div className = "row">
                <div className = "col-sm-12">
                    <div className = { statusTextClassNames }>
                        { statusText }
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className = "container login">
            <h1 className = "text-center">Вход в личный кабинет</h1>
            <div className = "login-container margin-top-medium">
                { statusTextElement }
                <form onSubmit = { login }>
                    <Form ref = { (ref) => { loginForm.current = ref; } }
                        type = { Login }
                        options = { LoginFormOptions }
                        value = { formValues }
                        onChange = {onFormChange }
                        context = {{ locale: 'ru-RU' }}
                    />
                    <button disabled = { isAuthenticating }
                        type = "submit"
                        className = "btn btn-default btn-primary btn-block"
                    >
                        Войти
                    </button>
                    <button disabled = { isAuthenticating }
                        className = "btn btn-block"
                        onClick = { signup }
                    >
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
    );
}

LoginView.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    isAuthenticating: PropTypes.bool.isRequired,
    statusText: PropTypes.string,
    actions: PropTypes.shape({
        authLoginUser: PropTypes.func.isRequired,
        signupLoginUser: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.object,
    history: PropTypes.object.isRequired,
};

LoginView.defaultProps = {
    statusText: '',
};

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
