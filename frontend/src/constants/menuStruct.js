import React from 'react';
import Home from '@material-ui/icons/Home';
import RssFeed from '@material-ui/icons/RssFeed';
import Announcement from '@material-ui/icons/Announcement';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import ContactMail from '@material-ui/icons/ContactMail';
import Contacts from '@material-ui/icons/Contacts';
import Place from '@material-ui/icons/Place';
import Map from '@material-ui/icons/Map';
import Info from '@material-ui/icons/Info';

export function LeaderShip(props) {
    const leaderShip = '/static/images/leadership.ico';

    return (
        <img
            src = { leaderShip }
            alt = 'Руководство'
            style = {{
                height: 24,
                width: 24,
                objectFit: 'contain',
                opacity: 0.64,
            }}
            { ...props }
        />
    );
}

export function ColdWather(props) {
    const leaderShip = '/static/images/tap-water.ico';

    return (
        <img
            src = { leaderShip }
            alt = 'Подключение к холодому водоснабжению'
            style = {{
                height: 24,
                width: 24,
                objectFit: 'contain',
                opacity: 0.64,
            }}
            { ...props }
        />
    );
}

export function WasteWather(props) {
    //const leaderShip = '/static/images/wastewater-stormw-streetlight.ico';
    const leaderShip = '/static/images/wastewater.ico';
    //const leaderShip = '/static/images/wastewater-separative-sewer-water-sewage.ico';

    return (
        <img
            src = { leaderShip }
            alt = 'Подключение к водоотведению'
            style = {{
                height: 24,
                width: 24,
                objectFit: 'contain',
                opacity: 0.64,
            }}
            { ...props }
        />
    );
}

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
        leftIcon: (<Info />),
        dataRoute: '/about/common_info',
    },
    {
        key: 'leadership',
        primaryText: 'Руководство компании',
        leftIcon: (<LeaderShip />),
        dataRoute: '/about/leadership',
    },
    {
        key: 'contacts',
        primaryText: 'Контакты',
        leftIcon: (<Contacts />),
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
        //dataRoute: '/about/zakupki_raskrytie_informacii',
        children: [
            {
                key: 'fin_reports',
                primaryText: 'Финансовая отчетность',
                leftIcon: null,
                dataRoute: '/about/zakupki_raskrytie_informacii/fin_reports',
            },
            {
                key: 'nal_reports',
                primaryText: 'Налоговая отчетность',
                leftIcon: null,
                dataRoute: '/about/zakupki_raskrytie_informacii/nal_reports',
            },
            {
                key: 'fz223',
                primaryText: '223-ФЗ',
                leftIcon: null,
                dataRoute: '/about/zakupki_raskrytie_informacii/fz223',
            },
        ]
    },
];

export const MENU_CUSTOMERS = [
    {
        key: 'connection',
        primaryText: 'Подключение',
        leftIcon: null,
        //dataRoute: '/customers/connection',
        children: [
            {
                key: 'connection_holvodosnabjenie',
                primaryText: 'Холодное водоснабжение',
                leftIcon: (<ColdWather />),
                dataRoute: '/customers/connection/connection_holvodosnabjenie',
            },
            {
                key: 'connection_vodootvedenie',
                primaryText: 'Водоотведение',
                leftIcon: (<WasteWather />),
                dataRoute: '/customers/connection/connection_vodootvedenie',
            },
/*
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
*/            
        ]
    },
    {
        key: 'fizlica',
        primaryText: 'Физические лица',
        children: [
            {
                key: 'zaklyuchenie_dogovorov_holvod_fizlica',
                primaryText: 'Заключение договоров на холодное водоснабжение',
                leftIcon: null,
                dataRoute: '/customers/fizlica/zaklyuchenie_dogovorov_holvod_fizlica',
            },
            {
                key: 'zaklyuchenie_dogovorov_vodootved_fizlica',
                primaryText: 'Заключение договоров на водоотведение',
                leftIcon: null,
                dataRoute: '/customers/fizlica/zaklyuchenie_dogovorov_vodootved_fizlica',
            },
            /*{
                key: 'perezaklyuchenie_dogovorov_vodootved_fizlica',
                primaryText: 'Перезаключение договора на нового собственника домовладения',
                secondaryText: 'для физических лиц- собственников индивидуальных жилых домов',
                leftIcon: null,
                dataRoute: '/customers/fizlica/perezaklyuchenie_dogovorov_vodootved_fizlica',
            },*/
            /*{
                key: 'zamena_vodomera_fizlica',
                primaryText: 'Замена счетчика (водомера)',
                leftIcon: null,
                dataRoute: '/customers/fizlica/zamena_vodomera_fizlica',
            },*/
            {
                key: 'payments_fizlica',
                primaryText: 'Способы оплаты',
                leftIcon: null,
                dataRoute: '/customers/fizlica/payments_fizlica',
            },
            {
                key: 'peredacha_pokazaniy_fizlica',
                primaryText: 'Передача показаний счетчиков',
                leftIcon: null,
                dataRoute: '/customers/fizlica/peredacha_pokazaniy_fizlica',
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
        disabled: false,
        children: [
            {
                key: 'zaklyuchenie_dogovorov_holvod_urlica',
                primaryText: 'Заключение договоров на холодное водоснабжение',
                leftIcon: null,
                dataRoute: '/customers/urlica/zaklyuchenie_dogovorov_holvod_urlica',
            },
            {
                key: 'zaklyuchenie_dogovorov_vodootved_urlica',
                primaryText: 'Заключение договоров на водоотведение',
                leftIcon: null,
                dataRoute: '/customers/urlica/zaklyuchenie_dogovorov_vodootved_urlica',
            },
            {
                key: 'peredacha_pokazaniy_urlica',
                primaryText: 'Передача показаний счетчиков',
                leftIcon: null,
                dataRoute: '/customers/urlica/peredacha_pokazaniy_urlica',
            },
/*
            {
                key: 'inspekcia_vodnyh_resursov',
                primaryText: 'Инспекция водных ресурсов',
                leftIcon: null,
                dataRoute: '/customers/urlica/inspekcia_vodnyh_resursov',
            },
*/
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
        disabled: true,
        cildren: [
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

export const MENU = [
    {
        key: 'homeRoot',
        primaryText: 'Основной раздел',
        children: [...MENU_HOME,],
    },
    {
        key: 'about',
        primaryText: 'О компании',
        children: [...MENU_ABOUT,],
    },
    {
        key: 'customers',
        primaryText: 'Абонентам',
        children: [...MENU_CUSTOMERS,],
    },
    {
        key: 'news',
        primaryText: 'Новости',
        children: [...MENU_NEWS,],
    }
];