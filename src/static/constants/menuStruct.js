import React from 'react';
import ActionHome from 'material-ui/svg-icons/action/home';

export const MENU_TOP = [
    /*{
        key: 'home',
        primaryText: 'Главная',
        leftIcon: (<ActionHome />),
        dataRoute: '/',
        onClick: null
    },*/
    {
        key: 'elektronnaya_priemnaya',
        primaryText: 'Электронная приемная',
        leftIcon: null,
        dataRoute: '/elektronnaya_priemnaya',
    },
    {
        key: 'blackouts',
        primaryText: 'Отключения',
        secondaryText: 'Информация об аварийном отключении водоснабжения',
        secondaryTextLines: 2,
        leftIcon: null,
        dataRoute: '/blackouts',
    },
    {
        key: 'available_capacity_map',
        primaryText: 'Карта доступной мощности',
        leftIcon: null,
        dataRoute: '/available_capacity_map',
    },
];

export const MENU_ABOUT = [
    /*{
        key: 'home',
        primaryText: 'Главная',
        leftIcon: (<ActionHome />),
        dataRoute: '/',
        onClick: null
    },*/
    {
        key: 'common_info',
        primaryText: 'Общая информация',
        leftIcon: null,
        dataRoute: '/about',
    },
    {
        key: 'leadership',
        primaryText: 'Руководство компании',
        leftIcon: null,
        dataRoute: '/about/leadership',
    },
    {
        key: 'contacts',
        primaryText: 'Контакты',
        leftIcon: null,
        dataRoute: '/contacts',
    },
    {
        key: 'vacancies',
        primaryText: 'Вакансии',
        leftIcon: null,
        dataRoute: '/about/vacancies',
    },
    {
        key: 'history',
        primaryText: 'Наша история',
        leftIcon: null,
        dataRoute: '/about/history',
    },
    {
        key: 'zakupki_raskrytie-informacii',
        primaryText: 'Закупки и раскрытие информации',
        leftIcon: null,
        dataRoute: '/about/zakupki_raskrytie-informacii',
    },
];

export const MENU_CUSTOMERS = [
    /*{
        key: 'home',
        primaryText: 'Главная',
        leftIcon: (<ActionHome />),
        dataRoute: '/',
        onClick: null
    },*/
    {
        key: 'common_info',
        primaryText: 'Подключение',
        leftIcon: null,
        dataRoute: '/customers',
    },
    {
        key: 'leadership',
        primaryText: 'Передача показаний счетчиков',
        leftIcon: null,
        dataRoute: '/about/leadership',
    },
    {
        key: 'regulatory_doc',
        primaryText: 'Физические лица',
        leftIcon: null,
        dataRoute: '/about/regulatory_doc',
    },
    {
        key: 'zakupki_raskrytie-informacii',
        primaryText: 'Юридические лица',
        leftIcon: null,
        dataRoute: '/about/zakupki_raskrytie-informacii',
    },
    {
        key: 'regulatory_doc',
        primaryText: 'Нормативные документы',
        leftIcon: null,
        dataRoute: '/about/regulatory_doc',
    },
    {
        key: 'history',
        primaryText: 'Тарифы',
        leftIcon: null,
        dataRoute: '/',
    },
    {
        key: 'history',
        primaryText: 'Услуги',
        leftIcon: null,
        dataRoute: '/',
    },
    {
        key: 'history',
        primaryText: 'Должники',
        leftIcon: null,
        dataRoute: '/',
    },
];
