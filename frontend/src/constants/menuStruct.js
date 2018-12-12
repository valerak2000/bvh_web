import React from 'react';
import Home from '@material-ui/icons/Home';
import RssFeed from '@material-ui/icons/RssFeed';
import Announcement from '@material-ui/icons/Announcement';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import ContactMail from '@material-ui/icons/ContactMail';
import Place from '@material-ui/icons/Place';
import Map from '@material-ui/icons/Map';

export const MENU_HOME = [
    {
        key: 'home',
        primaryText: 'Главная',
        leftIcon: (<Home />),
        dataRoute: '/',
    },
    {
        key: 'elektronnaya_priemnaya',
        primaryText: 'Электронная приемная',
        leftIcon: (<ContactMail />),
        dataRoute: '/elektronnaya_priemnaya',
    },
    {
        key: 'blackouts',
        primaryText: 'Отключения',
        secondaryText: 'Информация об аварийном отключении водоснабжения',
        leftIcon: (<Announcement />),
        dataRoute: '/blackouts',
    },
    {
        key: 'available_capacity_map',
        primaryText: 'Карта доступной мощности',
        leftIcon: (<Place />),
        dataRoute: '/available_capacity_map',
    },
    {
        key: 'faq',
        primaryText: 'Вопрос-ответ',
        leftIcon: (<QuestionAnswer />),
        dataRoute: '/faq',
    },
    {
        key: 'map',
        primaryText: 'Карта сайта',
        leftIcon: (<Map />),
        dataRoute: '/map',
    },
];

export const MENU_ABOUT = [
    {
        key: 'common_info',
        primaryText: 'Общая информация',
        leftIcon: null,
        dataRoute: '/about/common_info',
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
        primaryText: 'Раскрытие информации',
        leftIcon: null,
        dataRoute: '/about/zakupki_raskrytie_informacii',
    },
];

export const MENU_CUSTOMERS = [
    {
        key: 'connection',
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
                key: 'zaklyuchenie_dogovorov',
                primaryText: 'Заключение договоров на холодное водоснабжение и водоотведение',
                leftIcon: null,
                dataRoute: '/customers/fizlica/zaklyuchenie_dogovorov',
            },
            {
                key: 'peredacha_pokazaniy',
                primaryText: 'Передача показаний счетчиков',
                leftIcon: null,
                dataRoute: '/customers/fizlica/peredacha_pokazaniy',
            },
            {
                key: 'pribory_ucheta',
                primaryText: 'Приборы учета',
                leftIcon: null,
                dataRoute: '/customers/fizlica/pribory_ucheta',
            },
        ]
    },
    {
        key: 'urlica',
        primaryText: 'Юридические лица',
        leftIcon: null,
        //dataRoute: '/customers/urlica',
        disabled: true,
        nestedItems: [
            {
                key: 'zaklyuchenie_dogovorov',
                primaryText: 'Заключение договоров на холодное водоснабжение и водоотведение',
                leftIcon: null,
                dataRoute: '/customers/urlica/zaklyuchenie_dogovorov',
            },
            {
                key: 'peredacha_pokazaniy',
                primaryText: 'Передача показаний счетчиков',
                leftIcon: null,
                dataRoute: '/customers/urlica/peredacha_pokazaniy',
            },
            {
                key: 'inspekcia_vodnyh_resursov',
                primaryText: 'Инспекция водных ресурсов',
                leftIcon: null,
                dataRoute: '/customers/urlica/inspekcia_vodnyh_resursov',
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
        disabled: true,
        //dataRoute: '/customers/services',
        nestedItems: [
            {
                key: 'vyvoz_zhidkih_kommunalnyh_stokov',
                primaryText: 'Вывоз жидких коммунальных стоков',
                leftIcon: null,
                dataRoute: '/customers/services/vyvoz_zhidkih_kommunalnyh_stokov',
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
        leftIcon: (<RssFeed />),
        dataRoute: '/news',
    },
    {
        key: 'smi_o_nashey_rabote',
        primaryText: 'СМИ о нашей работе',
        leftIcon: null,
        dataRoute: '/news/smi_o_nashey_rabote',
    },
];
