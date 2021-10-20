// @material-ui/icons

import Loader from '../components/loaders';
import requireAuthentication from '../utils/requireAuthentication';

const HomePage = Loader(() =>
    import(/* webpackChunkName: "HomeView" */ '../containers/Home/Home/index.jsx')
);
const NotFoundPage = Loader(() =>
    import(/* webpackChunkName: "NotFoundView" */ '../containers/NotFound/index.jsx')
);
const UnderConstructPage = Loader(() =>
    import(/* webpackChunkName: "UnderConstructView" */ '../containers/UnderConstruct/index.jsx')
);
const LoginPage = Loader(() =>
    import(/* webpackChunkName: "LoginView" */ '../containers/Login/index.jsx')
);
const ProtectedPage = Loader(() =>
    import(/* webpackChunkName: "ProtectedView" */ '../containers/Protected/index.jsx')
);
const MapPage = Loader(() =>
    import(/* webpackChunkName: "MapView" */ '../containers/Sitemaps/index.jsx')
);
const ElektronnayaPriemnayaPage = Loader(() =>
    import(/* webpackChunkName: "ElektronnayaPriemnayaView" */ '../containers/Home/ElektronnayaPriemnaya/index.jsx')
);
const BlackoutsPage = Loader(() =>
    import(/* webpackChunkName: "BlackoutsView" */ '../containers/Home/Blackouts/index.jsx')
);
const AvailableCapacityMapPage = Loader(() =>
    import(/* webpackChunkName: "AvailableCapacityMapView" */ '../containers/Home/AvailableCapacityMap/index.jsx')
);
const FaqPage = Loader(() =>
    import(/* webpackChunkName: "FaqView" */ '../containers/Home/Faq/index.jsx')
);
const CommonInfoPage = Loader(() =>
    import(/* webpackChunkName: "CommonInfoView" */ '../containers/About/CommonInfo/index.jsx')
);
const LeadershipPage = Loader(() =>
    import(/* webpackChunkName: "LeadershipView" */ '../containers/About/Leadership/index.jsx')
);
const ContactsPage = Loader(() =>
    import(/* webpackChunkName: "ContactsView" */ '../containers/About/Contacts/index.jsx')
);
const VacanciesPage = Loader(() =>
    import(/* webpackChunkName: "VacanciesView" */ '../containers/About/Vacancies/index.jsx')
);
const OurHistoryPage = Loader(() =>
    import(/* webpackChunkName: "OurHistoryView" */ '../containers/About/OurHistory/index.jsx')
);
const ZakupkiRaskrytieFinPage = Loader(() =>
    import(/* webpackChunkName: "ZakupkiRaskrytieFinView" */ '../containers/About/ZakupkiRaskrytie/FinanceReports/index.jsx')
);
const ZakupkiRaskrytieNalPage = Loader(() =>
    import(/* webpackChunkName: "ZakupkiRaskrytieNalView" */ '../containers/About/ZakupkiRaskrytie/NalogReports/index.jsx')
);
const ZakupkiRaskrytieFz223Page = Loader(() =>
    import(/* webpackChunkName: "ZakupkiRaskrytieFz223View" */ '../containers/About/ZakupkiRaskrytie/Fz223/index.jsx')
);
const ConnectionHolodnoeVodosnabjeniePage = Loader(() =>
    import(/* webpackChunkName: "ConnectionHolodnoeVodosnabjenieView" */ '../containers/Customers/ConnectionHolodnoeVodosnabjenie/index.jsx')
);
const ConnectionVodootvedPage = Loader(() =>
    import(/* webpackChunkName: "ConnectionVodootvedView" */ '../containers/Customers/ConnectionVodootved/index.jsx')
);

//const PoluchenieTekhnicheskikhUsloviyPage = Loader(() =>
//    import(/* webpackChunkName: "PoluchenieTekhnicheskikhUsloviyView" */ '../containers/Customers/PoluchenieTekhnicheskikhUsloviy/index.jsx')
//);
//const OformlenieDogovoraOPodklyucheniiPage = Loader(() =>
//    import(/* webpackChunkName: "OformlenieDogovoraOPodklyucheniiView" */ '../containers/Customers/OformlenieDogovoraOPodklyuchenii/index.jsx')
//);
//const OformlenieAktovOPodklyucheniiPage = Loader(() =>
//    import(/* webpackChunkName: "OformlenieAktovOPodklyucheniiView" */ '../containers/Customers/OformlenieAktovOPodklyuchenii/index.jsx')
//);
const FizlicaZaklyuchenieDogovorovHolvodPage = Loader(() =>
    import(/* webpackChunkName: "FizlicaZaklyuchenieDogovorovHolvodView" */ '../containers/Customers/FizlicaZaklyuchenieDogovorovHolvod/index.jsx')
);
const FizlicaZaklyuchenieDogovorovVodootvedPage = Loader(() =>
    import(/* webpackChunkName: "FizlicaZaklyuchenieDogovorovVodootvedView" */ '../containers/Customers/FizlicaZaklyuchenieDogovorovVodootved/index.jsx')
);
const FizlicaPaymentsPage = Loader(() =>
    import(/* webpackChunkName: "FizlicaPaymentsView" */ '../containers/Customers/FizlicaPayments/index.jsx')
);
const FizlicaPeredachaPokazaniyPage = Loader(() =>
    import(/* webpackChunkName: "FizlicaPeredachaPokazaniyView" */ '../containers/Customers/FizlicaPeredachaPokazaniy/index.jsx')
);
const FizlicaPriboryUchetaPage = Loader(() =>
    import(/* webpackChunkName: "FizlicaPriboryUchetaView" */ '../containers/Customers/FizlicaPriboryUcheta/index.jsx')
);
const UrlicaZaklyuchenieDogovorovHolvodPage = Loader(() =>
    import(/* webpackChunkName: "UrlicaZaklyuchenieDogovorovHolvodView" */ '../containers/Customers/UrlicaZaklyuchenieDogovorovHolvod/index.jsx')
);
const UrlicaZaklyuchenieDogovorovVodootvedPage = Loader(() =>
    import(/* webpackChunkName: "UrlicaZaklyuchenieDogovorovVodootvedView" */ '../containers/Customers/UrlicaZaklyuchenieDogovorovVodootved/index.jsx')
);
const UrlicaPeredachaPokazaniyPage = Loader(() =>
    import(/* webpackChunkName: "UrlicaPeredachaPokazaniyView" */ '../containers/Customers/UrlicaPeredachaPokazaniy/index.jsx')
);
const UrlicaInspekciaVodnyhResursovPage = Loader(() =>
    import(/* webpackChunkName: "UrlicaInspekciaVodnyhResursovView" */ '../containers/Customers/UrlicaInspekciaVodnyhResursov/index.jsx')
);
const RegulatoryDocPage = Loader(() =>
    import(/* webpackChunkName: "RegulatoryDocView" */ '../containers/Customers/RegulatoryDoc/index.jsx')
);
const TarifsPage = Loader(() =>
    import(/* webpackChunkName: "TarifsView" */ '../containers/Customers/Tarifs/index.jsx')
);
const DebtorsPage = Loader(() =>
    import(/* webpackChunkName: "DebtorsView" */ '../containers/Customers/Debtors/index.jsx')
);
const VyvozZhidkihKommunalnyhStokovPage = Loader(() =>
    import(/* webpackChunkName: "VyvozZhidkihKommunalnyhStokovView" */ '../containers/Customers/VyvozZhidkihKommunalnyhStokov/index.jsx')
);
const PreyskurantUslugDlyaFizicheskihLicPage = Loader(() =>
    import(/* webpackChunkName: "PreyskurantUslugDlyaFizicheskihLicView" */ '../containers/Customers/PreyskurantUslugDlyaFizicheskihLic/index.jsx')
);
const PreyskurantUslugDlyaYuridicheskihLicPage = Loader(() =>
    import(/* webpackChunkName: "PreyskurantUslugDlyaYuridicheskihLicView" */ '../containers/Customers/PreyskurantUslugDlyaYuridicheskihLic/index.jsx')
);
const ProchieUslugiPage = Loader(() =>
    import(/* webpackChunkName: "ProchieUslugiView" */ '../containers/Customers/ProchieUslugi/index.jsx')
);
const NewsPage = Loader(() =>
    import(/* webpackChunkName: "NewsView" */ '../containers/News/News/index.jsx')
);
const NewsAboutUsPage = Loader(() =>
    import(/* webpackChunkName: "NewsAboutUsView" */ '../containers/News/NewsAboutUs/index.jsx')
);

export default [
    {
        path: '/',
        exact: true,
        //sidebarName: '',
        //navbarName: '',
        //icon: Dashboard,
        component: HomePage
    },
    {
        path: '/about/common_info',
	    exact: true,
        component: CommonInfoPage
    },
    {
        path: '/about/leadership',
	    exact: true,
        component: LeadershipPage
    },
    {
        path: '/about/contacts',
	    exact: true,
        component: ContactsPage
    },
    {
        path: '/about/vacancies',
	    exact: true,
        component: VacanciesPage
    },
    {
        path: '/about/history',
	    exact: true,
        component: OurHistoryPage
    },
    {
        path: '/about/zakupki_raskrytie_informacii/fin_reports',
	    exact: true,
        component: ZakupkiRaskrytieFinPage
    },
    {
        path: '/about/zakupki_raskrytie_informacii/nal_reports',
	    exact: true,
        component: ZakupkiRaskrytieNalPage
    },
    {
        path: '/about/zakupki_raskrytie_informacii/Fz223',
	    exact: true,
        component: ZakupkiRaskrytieFz223Page
    },
    {
        redirect: true, 
        path: '/about', 
        to: '/about/common_info', 
        navbarName: 'Redirect' 
    },
    {
        path: '/customers/connection/connection_holvodosnabjenie',
	    exact: true,
        component: ConnectionHolodnoeVodosnabjeniePage
    },
    {
        path: '/customers/connection/connection_vodootvedenie',
	    exact: true,
        component: ConnectionVodootvedPage
    },
/*
    {
        path: '/customers/connection/poluchenie_tekhnicheskikh_usloviy',
	    exact: true,
        component: PoluchenieTekhnicheskikhUsloviyPage
    },
    {
        path: '/customers/connection/oformlenie_dogovora_o_podklyuchenii',
    	exact: true,
        component: OformlenieDogovoraOPodklyucheniiPage
    },
    {
        path: '/customers/connection/oformlenie_aktov_o_podklyuchenii',
	    exact: true,
        component: OformlenieAktovOPodklyucheniiPage
    },
*/
    {
        path: '/customers/fizlica/zaklyuchenie_dogovorov_holvod_fizlica',
    	exact: true,
        component: FizlicaZaklyuchenieDogovorovHolvodPage
    },
    {
        path: '/customers/fizlica/zaklyuchenie_dogovorov_vodootved_fizlica',
    	exact: true,
        component: FizlicaZaklyuchenieDogovorovVodootvedPage
    },
    {
        path: '/customers/fizlica/payments_fizlica',
	    exact: true,
        component: FizlicaPaymentsPage
    },
    {
        path: '/customers/fizlica/peredacha_pokazaniy_fizlica',
	    exact: true,
        component: FizlicaPeredachaPokazaniyPage
    },
    {
        path: '/customers/fizlica/pribory_ucheta',
	    exact: true,
        component: FizlicaPriboryUchetaPage
    },
    {
        path: '/customers/urlica/zaklyuchenie_dogovorov_holvod_urlica',
    	exact: true,
        component: UrlicaZaklyuchenieDogovorovHolvodPage
    },
    {
        path: '/customers/urlica/zaklyuchenie_dogovorov_vodootved_urlica',
    	exact: true,
        component: UrlicaZaklyuchenieDogovorovVodootvedPage
    },
    {
        path: '/customers/urlica/peredacha_pokazaniy_urlica',
	    exact: true,
        component: UrlicaPeredachaPokazaniyPage
    },
    {
        path: '/customers/urlica/inspekcia_vodnyh_resursov',
	    exact: true,
        component: UrlicaInspekciaVodnyhResursovPage
    },
    {
        path: '/customers/regulatory_doc',
	    exact: true,
        component: RegulatoryDocPage
    },
    {
        path: '/customers/tarifs',
	    exact: true,
        component: TarifsPage
    },
    {
        path: '/customers/debtors',
	    exact: true,
        component: DebtorsPage
    },
    {
        path: '/customers/services/vyvoz_zhidkih_kommunalnyh_stokov',
    	exact: true,
        component: VyvozZhidkihKommunalnyhStokovPage
    },
    {
        path: '/customers/services/preyskurant_uslug_dlya_fizicheskih_lic',
	    exact: true,
        component: PreyskurantUslugDlyaFizicheskihLicPage
    },
    {
        path: '/customers/services/preyskurant_uslug_dlya_yuridicheskih_lic',
	    exact: true,
        component: PreyskurantUslugDlyaYuridicheskihLicPage
    },
    {
        path: '/customers/services/prochie_uslugi',
	    exact: true,
        component: ProchieUslugiPage
    },
    {
        redirect: true, 
	    path: '/customers', 
	    to: '/customers/connection/connection_holvodosnabjenie', 
	    navbarName: 'Redirect' 
    },
    {
        redirect: true, 
        path: '/customers/connection', 
        to: '/customers/connection/connection_holvodosnabjenie', 
        navbarName: 'Redirect' 
    },
/*
    {
        redirect: true, 
        path: '/customers/fizlica', 
        to: '/customers/fizlica/zaklyuchenie_dogovorov', 
        navbarName: 'Redirect' 
    },
*/
    {
        redirect: true, 
        path: '/customers/urlica', 
        to: '/customers/urlica/zaklyuchenie_dogovorov', 
        navbarName: 'Redirect' 
    },
    {
        redirect: true, 
        path: '/customers/services', 
        to: '/customers/services/vyvoz_zhidkih_kommunalnyh_stokov', 
        navbarName: 'Redirect' 
    },
    {
        path: '/news',
	    exact: true,
        component: NewsPage
    },
    {
        path: '/news/smi_o_nashey_rabote',
	    exact: true,
        component: NewsAboutUsPage
    },
    {
        path: '/elektronnaya_priemnaya',
        component: ElektronnayaPriemnayaPage
    },
    {
        path: '/blackouts',
        component: BlackoutsPage
    },
    {
        path: '/available_capacity_map',
        component: AvailableCapacityMapPage
    },
    {
        path: '/map',
        component: MapPage
    },
    {
        path: '/faq',
        component: FaqPage
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/protected',
        component: requireAuthentication(ProtectedPage)
    },
    {
        path: '/partners',
        component: UnderConstructPage
    },
    {
        redirect: true, 
        path: '/partners', 
        to: 'http://brhts.ru/', 
        navbarName: 'Redirect' 
    },
    {
        path: '/creator',
        component: UnderConstructPage
    },
    {
        component: NotFoundPage
    },
];
