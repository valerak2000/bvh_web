// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import Person from '@material-ui/icons/Person';
import ContentPaste from '@material-ui/icons/Assessment';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import BubbleChart from '@material-ui/icons/BubbleChart';
import LocationOn from '@material-ui/icons/LocationOn';
import Notifications from '@material-ui/icons/Notifications';
import MessageBox from '@material-ui/icons/Message';
import Unarchive from '@material-ui/icons/Unarchive';

import Loader from '../components/loaders';
import requireAuthentication from '../utils/requireAuthentication';

const UnderConstructPage = Loader(() =>
    import(/* webpackChunkName: "UnderConstructView" */ '../containers/UnderConstruct')
);
const NotFoundPage = Loader(() =>
    import(/* webpackChunkName: "NotFoundView" */ '../containers/NotFound')
);
const LoginPage = Loader(() =>
    import(/* webpackChunkName: "LoginView" */ '../containers/Login')
);
const ProtectedPage = Loader(() =>
    import(/* webpackChunkName: "ProtectedView" */ '../containers/Protected')
);
const MapPage = Loader(() =>
    import(/* webpackChunkName: "MapView" */ '../containers/Map')
);
const HomePage = Loader(() =>
    import(/* webpackChunkName: "HomeView" */ '../containers/Home')
);
const ElektronnayaPriemnayaPage = Loader(() =>
    import(/* webpackChunkName: "ElektronnayaPriemnayaView" */ '../containers/ElektronnayaPriemnaya')
);
const BlackoutsPage = Loader(() =>
    import(/* webpackChunkName: "BlackoutsView" */ '../containers/Blackouts')
);
const AvailableCapacityMapPage = Loader(() =>
    import(/* webpackChunkName: "AvailableCapacityMapView" */ '../containers/AvailableCapacityMap')
);
const FaqPage = Loader(() =>
    import(/* webpackChunkName: "FaqView" */ '../containers/Faq')
);
const CommonInfoPage = Loader(() =>
    import(/* webpackChunkName: "CommonInfoView" */ '../containers/CommonInfo')
);
const LeadershipPage = Loader(() =>
    import(/* webpackChunkName: "LeadershipView" */ '../containers/Leadership')
);
const ContactsPage = Loader(() =>
    import(/* webpackChunkName: "ContactsView" */ '../containers/Contacts')
);
const VacanciesPage = Loader(() =>
    import(/* webpackChunkName: "VacanciesView" */ '../containers/Vacancies')
);
const OurHistoryPage = Loader(() =>
    import(/* webpackChunkName: "OurHistoryView" */ '../containers/OurHistory')
);
const ZakupkiRaskrytiePage = Loader(() =>
    import(/* webpackChunkName: "ZakupkiRaskrytieView" */ '../containers/ZakupkiRaskrytie')
);
const PoluchenieTekhnicheskikhUsloviyPage = Loader(() =>
    import(/* webpackChunkName: "PoluchenieTekhnicheskikhUsloviyView" */ '../containers/PoluchenieTekhnicheskikhUsloviy')
);
const OformlenieDogovoraOPodklyucheniiPage = Loader(() =>
    import(/* webpackChunkName: "OformlenieDogovoraOPodklyucheniiView" */ '../containers/OformlenieDogovoraOPodklyuchenii')
);
const OformlenieAktovOPodklyucheniiPage = Loader(() =>
    import(/* webpackChunkName: "OformlenieAktovOPodklyucheniiView" */ '../containers/OformlenieAktovOPodklyuchenii')
);
const FizlicaZaklyuchenieDogovorovPage = Loader(() =>
    import(/* webpackChunkName: "FizlicaZaklyuchenieDogovorovView" */ '../containers/FizlicaZaklyuchenieDogovorov')
);
const FizlicaPeredachaPokazaniyPage = Loader(() =>
    import(/* webpackChunkName: "FizlicaPeredachaPokazaniyView" */ '../containers/FizlicaPeredachaPokazaniy')
);
const FizlicaPriboryUchetaPage = Loader(() =>
    import(/* webpackChunkName: "FizlicaPriboryUchetaView" */ '../containers/FizlicaPriboryUcheta')
);
const UrlicaZaklyuchenieDogovorovPage = Loader(() =>
    import(/* webpackChunkName: "UrlicaZaklyuchenieDogovorovView" */ '../containers/UrlicaZaklyuchenieDogovorov')
);
const UrlicaPeredachaPokazaniyPage = Loader(() =>
    import(/* webpackChunkName: "UrlicaPeredachaPokazaniyView" */ '../containers/UrlicaPeredachaPokazaniy')
);
const UrlicaInspekciaVodnyhResursovPage = Loader(() =>
    import(/* webpackChunkName: "UrlicaInspekciaVodnyhResursovView" */ '../containers/UrlicaInspekciaVodnyhResursov')
);
const RegulatoryDocPage = Loader(() =>
    import(/* webpackChunkName: "RegulatoryDocView" */ '../containers/RegulatoryDoc')
);
const TarifsPage = Loader(() =>
    import(/* webpackChunkName: "TarifsView" */ '../containers/TarifsView')
);
const DebtorsPage = Loader(() =>
    import(/* webpackChunkName: "DebtorsView" */ '../containers/Debtors')
);
const VyvozZhidkihKommunalnyhStokovPage = Loader(() =>
    import(/* webpackChunkName: "VyvozZhidkihKommunalnyhStokovView" */ '../containers/VyvozZhidkihKommunalnyhStokov')
);
const PreyskurantUslugDlyaFizicheskihLicPage = Loader(() =>
    import(/* webpackChunkName: "PreyskurantUslugDlyaFizicheskihLicView" */ '../containers/PreyskurantUslugDlyaFizicheskihLic')
);
const PreyskurantUslugDlyaYuridicheskihLicPage = Loader(() =>
    import(/* webpackChunkName: "PreyskurantUslugDlyaYuridicheskihLicView" */ '../containers/PreyskurantUslugDlyaYuridicheskihLic')
);
const ProchieUslugiPage = Loader(() =>
    import(/* webpackChunkName: "ProchieUslugiView" */ '../containers/ProchieUslugi')
);
const NewsPage = Loader(() =>
    import(/* webpackChunkName: "NewsView" */ '../containers/News')
);
const NewsAboutUsPage = Loader(() =>
    import(/* webpackChunkName: "NewsAboutUsView" */ '../containers/NewsAboutUs')
);

export default [
    {
        path: '/',
    	exact: true,
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: HomePage
    },
    {
        path: '/about',
	    exact: true,
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: CommonInfoPage
    },
    {
        redirect: true, 
        path: '/about', 
        to: '/about/common_info', 
        navbarName: 'Redirect' 
    },
    {
        path: '/about/leadership',
	    exact: true,
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: LeadershipPage
    },
    {
        path: '/about/contacts',
	    exact: true,
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: ContactsPage
    },
    {
        path: '/about/vacancies',
	    exact: true,
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: VacanciesPage
    },
    {
        path: '/about/history',
	    exact: true,
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: OurHistoryPage
    },
    {
        path: '/about/zakupki_raskrytie_informacii',
	    exact: true,
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: ZakupkiRaskrytiePage
    },
    {
        path: '/customers/connection/poluchenie_tekhnicheskikh_usloviy',
	    exact: true,
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: PoluchenieTekhnicheskikhUsloviyPage
    },
    {
        redirect: true, 
	    path: '/customers', 
	    to: '/customers/connection/poluchenie_tekhnicheskikh_usloviy', 
	    navbarName: 'Redirect' 
    },
    {
        redirect: true, 
        path: '/customers/connection', 
        to: '/customers/connection/poluchenie_tekhnicheskikh_usloviy', 
        navbarName: 'Redirect' 
    },
    {
        path: '/customers/connection/oformlenie_dogovora_o_podklyuchenii',
    	exact: true,
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: OformlenieDogovoraOPodklyucheniiPage
    },
    {
        path: '/customers/connection/oformlenie_aktov_o_podklyuchenii',
	    exact: true,
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: OformlenieAktovOPodklyucheniiPage
    },
    {
        redirect: true, 
        path: '/customers/fizlica', 
        to: '/customers/fizlica/zaklyuchenie_dogovorov', 
        navbarName: 'Redirect' 
    },
    {
        path: '/customers/fizlica/zaklyuchenie_dogovorov',
    	exact: true,
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: FizlicaZaklyuchenieDogovorovPage
    },
    {
        path: '/customers/fizlica/peredacha_pokazaniy',
	    exact: true,
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: FizlicaPeredachaPokazaniyPage
    },
    {
        path: '/customers/fizlica/pribory_ucheta',
	    exact: true,
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: FizlicaPriboryUchetaPage
    },
    {
        redirect: true, 
        path: '/customers/urlica', 
        to: '/customers/urlica/zaklyuchenie_dogovorov', 
        navbarName: 'Redirect' 
    },
    {
        path: '/customers/urlica/zaklyuchenie_dogovorov',
    	exact: true,
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: UrlicaZaklyuchenieDogovorovPage
    },
    {
        path: '/customers/urlica/peredacha_pokazaniy',
	    exact: true,
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: UrlicaPeredachaPokazaniyPage
    },
    {
        path: '/customers/urlica/inspekcia_vodnyh_resursov',
	    exact: true,
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: UrlicaInspekciaVodnyhResursovPage
    },
    {
        path: '/customers/regulatory_doc',
	    exact: true,
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: RegulatoryDocPage
    },
    {
        path: '/customers/tarifs',
	    exact: true,
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: TarifsPage
    },
    {
        path: '/customers/debtors',
	    exact: true,
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: DebtorsPage
    },
    {
        redirect: true, 
        path: '/customers/services', 
        to: '/customers/services/vyvoz_zhidkih_kommunalnyh_stokov', 
        navbarName: 'Redirect' 
    },
    {
        path: '/customers/services/vyvoz_zhidkih_kommunalnyh_stokov',
    	exact: true,
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: VyvozZhidkihKommunalnyhStokovPage
    },
    {
        path: '/customers/services/preyskurant_uslug_dlya_fizicheskih_lic',
	    exact: true,
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: PreyskurantUslugDlyaFizicheskihLicPage
    },
    {
        path: '/customers/services/preyskurant_uslug_dlya_yuridicheskih_lic',
	    exact: true,
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: PreyskurantUslugDlyaYuridicheskihLicPage
    },
    {
        path: '/customers/services/prochie_uslugi',
	    exact: true,
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: ProchieUslugiPage
    },
    {
        path: '/news',
	    exact: true,
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: NewsPage
    },
    {
        path: '/news/smi_o_nashey_rabote',
	    exact: true,
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: NewsAboutUsPage
    },
    {
        path: '/elektronnaya_priemnaya',
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: ElektronnayaPriemnayaPage
    },
    {
        path: '/blackouts',
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: BlackoutsPage
    },
    {
        path: '/available_capacity_map',
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: AvailableCapacityMapPage
    },
    {
        path: '/map',
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: MapPage
    },
    {
        path: '/faq',
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: FaqPage
    },
    {
        path: '/creator',
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: UnderConstructPage
    },
    {
        path: '/login',
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: LoginPage
    },
    {
        path: '/protected',
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: requireAuthentication(ProtectedPage)
    },
];
