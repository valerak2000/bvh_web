import React from 'react';
import ActionHome from 'material-ui/svg-icons/action/home';
import CommunicationRssFeed from 'material-ui/svg-icons/communication/rss-feed';

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
    {
        key: 'about',
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
        dataRoute: '/about/contacts',
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
        key: 'zakupki_raskrytie_informacii',
        primaryText: 'Закупки и раскрытие информации',
        leftIcon: null,
        dataRoute: '/about/zakupki_raskrytie_informacii',
    },
];

export const MENU_CUSTOMERS = [
    {
        key: 'common_info',
        primaryText: 'Подключение',
        leftIcon: null,
        dataRoute: '/customers',
    },
    {
        key: 'fizlica',
        primaryText: 'Физические лица',
        leftIcon: null,
        dataRoute: '/customers/fizlica',
    },
    {
        key: 'urlica',
        primaryText: 'Юридические лица',
        leftIcon: null,
        dataRoute: '/customers/urlica',
    },
    {
        key: 'regulatory_doc',
        primaryText: 'Нормативные документы',
        leftIcon: null,
        dataRoute: '/customers/regulatory_doc',
    },
    {
        key: 'tarifs',
        primaryText: 'Тарифы',
        leftIcon: null,
        dataRoute: '/customers/tarifs',
    },
    {
        key: 'services',
        primaryText: 'Услуги',
        leftIcon: null,
        dataRoute: '/customers/services',
    },
    {
        key: 'debtors',
        primaryText: 'Должники',
        leftIcon: null,
        dataRoute: '/customers/debtors',
    },
];

export const MENU_NEWS = [
    {
        key: 'news',
        primaryText: 'Новости',
        leftIcon: (<CommunicationRssFeed />),
        dataRoute: '/news',
    },
    {
        key: 'smi_o_nashey_rabote',
        primaryText: 'СМИ о нашей работе',
        leftIcon: null,
        dataRoute: '/news/smi_o_nashey_rabote',
    },
    {
        key: 'contactismi',
        primaryText: 'Контакты для СМИ',
        leftIcon: null,
        dataRoute: '/news/contactismi',
    },
];
