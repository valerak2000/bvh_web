import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';
import {List, ListItem} from 'material-ui/List';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info'

/*function defTop() {
    return (
        <List>
            <ListItem primaryText = "Обращение в приемную" leftIcon = {<ContentInbox />} />
            <ListItem primaryText = "Отключения" leftIcon = {<ActionGrade />} />
            <ListItem primaryText = "Карта доступной мощности" leftIcon = {<ContentSend />} />
        </List>
    )
}*/

const MENU_TOP = [
    {
        key: 'elektronnaya_priemnaya',
        text: 'Электронная приемная'
    },
    {
        key: 'blackouts',
        text: 'Отключения'
    },
    {
        key: 'available_capacity_map',
        text: 'Карта доступной мощности'
    },
];

const DEFAULT_MENU = 'default';

function Menu(props) {
    return (
        <div>
        <List>
            <ListItem key = "home" primaryText = "Главная" leftIcon = { <ActionHome /> } />
        </List>
        <div>
            {
                props.items.map(d => {
                    console.log(d.key);

                    return
                        <div
                            id = { d.key }
                        />;
                })
            }
        </div>
        </div>
    );
}
/*
                        <ListItem
                            key = { d.key }
                            primaryText = { d.text }
                        />;
*/
class LeftNavMenu extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        //dispatch: PropTypes.func.isRequired,
        location: PropTypes.shape({
            pathname: PropTypes.string
        })
    };

    static defaultProps = {
        location: undefined
    };

    state = {
        activeMenu: DEFAULT_MENU,
    };

    constructor(props) {
        super(props);
    }

    static get contextTypes() {
        return {
        };
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentWillReceiveProps(nextProps) {
        let currentMenu = (nextProps.location != null
            && nextProps.location.pathname
            && nextProps.location.pathname.split('/').pop() == '')
            ? DEFAULT_MENU : nextProps.location.pathname.split('/').pop();
        /*let currentPage = (nextProps.location != null
            && nextProps.location.pathname
            && nextProps.location.pathname.split('/').pop() == '')
            ? 'default' : nextProps.location.pathname.split('/').pop();
        */
        this.setState({ activeMenu: currentMenu });

        //const nextPath = windows.location.pathname
        // call onChange when path exactly matches /tabs
        //if (/^\/tabs$/.test(nextPath))
        //    this.onChange(nextProps.tabSelected)
    }

    handleChange = (event, value) => {
        this.setState({ activeTab: event });
    };

    handleActive = (tab) => {
        this.props.dispatch(push(tab.props['data-route']));
        //this.context.router.push(tab.props['data-route']);
	    //this.context.router.transitionTo(tab.props.route)
    };

    render() {
        const { activeMenu, ...props } = this.state;

        return (
            <Menu items = {MENU_TOP} />
        );
    }
}
//                <ListItem key = "home" primaryText = "Главная" leftIcon = {<ActionHome />} />
/*
            { activeMenu === DEFAULT_MENU && <Menu items = {MENU_TOP} /> }
*/

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        location: state.routing.location,
    };
};

function mapDispatchToProps (dispatch) {
    return {
    }
}

LeftNavMenu.muiName = 'LeftNavMenu';

export default muiThemeable()(connect(mapStateToProps, mapDispatchToProps)(LeftNavMenu));

/*
                    <ListItem primaryText="Отключения" leftIcon={<ActionGrade />} />
                    <ListItem primaryText="Карта доступной мощности" leftIcon={<ContentSend />} />

О компании
	Общая информация
	Руководство
	Нормативные документы
	Закупки и раскрытие информации
	Вакансии
	История
	Контакты

Абонентам(потребителям)
	Режим работы
	Для новых абонентов
	Передача показаний счетчиков
	Личный кабинет
	Формы договоров, заявок
	Приборы учета и их установка
	Тарифы и нормативы
	Должники
*/