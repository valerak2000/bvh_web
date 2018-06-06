import React from 'react';
import ActionHome from 'material-ui/svg-icons/action/home';
import CommunicationRssFeed from 'material-ui/svg-icons/communication/rss-feed';

export const MENU_HOME = [
    {
        key: 'home',
        primaryText: 'Главная',
        leftIcon: (<ActionHome />),
        dataRoute: '/',
    },
    {
        key: 'elektronnaya_priemnaya',
        primaryText: 'Электронная приемная',
        leftIcon: null,
        dataRoute: '/home/elektronnaya_priemnaya',
    },
    {
        key: 'blackouts',
        primaryText: 'Отключения',
        secondaryText: 'Информация об аварийном отключении водоснабжения',
        secondaryTextLines: 2,
        leftIcon: null,
        dataRoute: '/home/blackouts',
    },
    {
        key: 'available_capacity_map',
        primaryText: 'Карта доступной мощности',
        leftIcon: null,
        dataRoute: '/home/available_capacity_map',
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
        //dataRoute: '/customers/connection',
        nestedItems: [
            {
                key: 'poluchenie_tekhnicheskikh_usloviy',
                primaryText: 'Получение технических условий',
                leftIcon: null,
                dataRoute: '/customers/connection/poluchenie_tekhnicheskikh_usloviy',
            },
            {
                key: 'oformlenie_dogovora_o_podklyuchenii',
                primaryText: 'Оформление договора о подключении',
                leftIcon: null,
                dataRoute: '/customers/connection/oformlenie_dogovora_o_podklyuchenii',
            },
            {
                key: 'oformlenie_aktov_o_podklyuchenii',
                primaryText: 'Оформление актов технической приемки',
                leftIcon: null,
                dataRoute: '/customers/connection/oformlenie_aktov_o_podklyuchenii',
            },
        ]
    },
    {
        key: 'fizlica',
        primaryText: 'Физические лица',
        leftIcon: null,
        //dataRoute: '/customers/fizlica',
        nestedItems: [
            {
                key: 'poluchenie_tekhnicheskikh_usloviy',
                primaryText: 'Заключение договоров на холодное водоснабжение и водоотведение',
                leftIcon: null,
                dataRoute: '/customers/fizlica/poluchenie_tekhnicheskikh_usloviy',
            },
            {
                key: 'oformlenie_dogovora_o_podklyuchenii',
                primaryText: 'Передача показаний счетчиков',
                leftIcon: null,
                dataRoute: '/customers/fizlica/oformlenie_dogovora_o_podklyuchenii',
            },
            {
                key: 'oformlenie_aktov_o_podklyuchenii',
                primaryText: 'Приборы учета',
                leftIcon: null,
                dataRoute: '/customers/fizlica/oformlenie_aktov_o_podklyuchenii',
            },
        ]
    },
    {
        key: 'urlica',
        primaryText: 'Юридические лица',
        leftIcon: null,
        //dataRoute: '/customers/urlica',
        nestedItems: [
            {
                key: 'poluchenie_tekhnicheskikh_usloviy',
                primaryText: 'Заключение договоров на холодное водоснабжение и водоотведение',
                leftIcon: null,
                dataRoute: '/customers/urlica/poluchenie_tekhnicheskikh_usloviy',
            },
            {
                key: 'oformlenie_aktov_o_podklyuchenii',
                primaryText: 'Инспекция водных ресурсов',
                leftIcon: null,
                dataRoute: '/customers/urlica/oformlenie_aktov_o_podklyuchenii',
            },
            {
                key: 'oformlenie_dogovora_o_podklyuchenii',
                primaryText: 'Передача показаний счетчиков',
                leftIcon: null,
                dataRoute: '/customers/urlica/oformlenie_dogovora_o_podklyuchenii',
            },
        ]
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
        //dataRoute: '/customers/services',
        nestedItems: [
            {
                key: 'vyvoz_zhidkih_kommunalnyh_stokov',
                primaryText: 'Вывоз жидких коммунальных стоков',
                leftIcon: null,
                dataRoute: '/customers/services/vyvoz_zhidkih_kommunalnyh_stokov',
            },
            {
                key: 'laboratornyy_analiz_vody',
                primaryText: 'Лабораторный анализ воды',
                leftIcon: null,
                dataRoute: '/customers/services/laboratornyy_analiz_vody',
            },
            {
                key: 'preyskurant_uslug_dlya_fizicheskih_lic',
                primaryText: 'Прейскурант услуг для физических лиц',
                leftIcon: null,
                dataRoute: '/customers/services/preyskurant_uslug_dlya_fizicheskih_lic',
            },
            {
                key: 'preyskurant_uslug_dlya_yuridicheskih_lic',
                primaryText: 'Прейскурант услуг для юридических лиц',
                leftIcon: null,
                dataRoute: '/customers/services/preyskurant_uslug_dlya_yuridicheskih_lic',
            },
            {
                key: 'prochie_uslugi',
                primaryText: 'Прочие услуги',
                leftIcon: null,
                dataRoute: '/customers/services/prochie_uslugi',
            },
        ]
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
];