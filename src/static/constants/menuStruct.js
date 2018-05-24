import React from 'react';
import ActionHome from 'material-ui/svg-icons/action/home';

export const MENU_TOP = [
    {
        key: 'home',
        primaryText: 'Главная',
        leftIcon: (<ActionHome />),
        dataRoute: '/',
        onClick: null
    },
    {
        key: 'elektronnaya_priemnaya',
        primaryText: 'Электронная приемная',
        leftIcon: null,
        dataRoute: '/elektronnaya_priemnaya',
        onClick: null
    },
    {
        key: 'blackouts',
        primaryText: 'Отключения',
        secondaryText: 'Информация об аварийном отключении водоснабжения',
        secondaryTextLines: 2,
        leftIcon: null,
        dataRoute: '/blackouts',
        onClick: null
    },
    {
        key: 'available_capacity_map',
        primaryText: 'Карта доступной мощности',
        leftIcon: null,
        dataRoute: '/available_capacity_map',
        onClick: null
    },
];

export const MENU_ABOUT = [
    {
        key: 'home',
        primaryText: 'Главная',
        leftIcon: (<ActionHome />),
        dataRoute: '/',
        onClick: null
    },
    {
        key: 'common_info',
        primaryText: 'Общая информация',
        leftIcon: null,
        dataRoute: '/about',
        onClick: null
    },
    {
        key: 'leadership',
        primaryText: 'Руководство компании',
        leftIcon: null,
        dataRoute: '/about/leadership',
        onClick: null
    },
    {
        key: 'contacts',
        primaryText: 'Контакты',
        leftIcon: null,
        dataRoute: '/contacts',
        onClick: null
    },
    {
        key: 'vacancies',
        primaryText: 'Вакансии',
        leftIcon: null,
        dataRoute: '/about/vacancies',
        onClick: null
    },
    {
        key: 'history',
        primaryText: 'Наша история',
        leftIcon: null,
        dataRoute: '/about/history',
        onClick: null
    },
    {
        key: 'zakupki_raskrytie-informacii',
        primaryText: 'Закупки и раскрытие информации',
        leftIcon: null,
        dataRoute: '/about/zakupki_raskrytie-informacii',
        onClick: null
    },
];

export const MENU_CUSTOMERS = [
    {
        key: 'home',
        primaryText: 'Главная',
        leftIcon: (<ActionHome />),
        dataRoute: '/',
        onClick: null
    },
    {
        key: 'common_info',
        primaryText: 'Подключение',
        leftIcon: null,
        dataRoute: '/customers',
        onClick: null
    },
    {
        key: 'leadership',
        primaryText: 'Передача показаний счетчиков',
        leftIcon: null,
        dataRoute: '/about/leadership',
        onClick: null
    },
    {
        key: 'regulatory_doc',
        primaryText: 'Физические лица',
        leftIcon: null,
        dataRoute: '/about/regulatory_doc',
        onClick: null
    },
    {
        key: 'zakupki_raskrytie-informacii',
        primaryText: 'Юридические лица',
        leftIcon: null,
        dataRoute: '/about/zakupki_raskrytie-informacii',
        onClick: null
    },
    {
        key: 'regulatory_doc',
        primaryText: 'Нормативные документы',
        leftIcon: null,
        dataRoute: '/about/regulatory_doc',
        onClick: null
    },
    {
        key: 'history',
        primaryText: 'Тарифы',
        leftIcon: null,
        dataRoute: '/',
        onClick: null
    },
    {
        key: 'history',
        primaryText: 'Услуги',
        leftIcon: null,
        dataRoute: '/',
        onClick: null
    },
    {
        key: 'history',
        primaryText: 'Должники',
        leftIcon: null,
        dataRoute: '/',
        onClick: null
    },
];
