// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
/*
import Person from '@material-ui/icons/Person';
import ContentPaste from '@material-ui/icons/Assessment';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import BubbleChart from '@material-ui/icons/BubbleChart';
import LocationOn from '@material-ui/icons/LocationOn';
import Notifications from '@material-ui/icons/Notifications';
import MessageBox from '@material-ui/icons/Message';
import Unarchive from '@material-ui/icons/Unarchive';
*/
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
    import(/* webpackChunkName: "MapView" */ '../containers/Map/index.jsx')
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
const ZakupkiRaskrytiePage = Loader(() =>
    import(/* webpackChunkName: "ZakupkiRaskrytieView" */ '../containers/About/ZakupkiRaskrytie/index.jsx')
);
const PoluchenieTekhnicheskikhUsloviyPage = Loader(() =>
    import(/* webpackChunkName: "PoluchenieTekhnicheskikhUsloviyView" */ '../containers/Customers/PoluchenieTekhnicheskikhUsloviy/index.jsx')
);
const OformlenieDogovoraOPodklyucheniiPage = Loader(() =>
    import(/* webpackChunkName: "OformlenieDogovoraOPodklyucheniiView" */ '../containers/Customers/OformlenieDogovoraOPodklyuchenii/index.jsx')
);
const OformlenieAktovOPodklyucheniiPage = Loader(() =>
    import(/* webpackChunkName: "OformlenieAktovOPodklyucheniiView" */ '../containers/Customers/OformlenieAktovOPodklyuchenii/index.jsx')
);
const FizlicaZaklyuchenieDogovorovPage = Loader(() =>
    import(/* webpackChunkName: "FizlicaZaklyuchenieDogovorovView" */ '../containers/Customers/FizlicaZaklyuchenieDogovorov/index.jsx')
);
const FizlicaPeredachaPokazaniyPage = Loader(() =>
    import(/* webpackChunkName: "FizlicaPeredachaPokazaniyView" */ '../containers/Customers/FizlicaPeredachaPokazaniy/index.jsx')
);
const FizlicaPriboryUchetaPage = Loader(() =>
    import(/* webpackChunkName: "FizlicaPriboryUchetaView" */ '../containers/Customers/FizlicaPriboryUcheta/index.jsx')
);
const UrlicaZaklyuchenieDogovorovPage = Loader(() =>
    import(/* webpackChunkName: "UrlicaZaklyuchenieDogovorovView" */ '../containers/Customers/UrlicaZaklyuchenieDogovorov/index.jsx')
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
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: HomePage
    },
    {
        path: '/about/common_info',
	    exact: true,
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: CommonInfoPage
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
        redirect: true, 
        path: '/about', 
        to: '/about/common_info', 
        navbarName: 'Redirect' 
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
        redirect: true, 
        path: '/customers/fizlica', 
        to: '/customers/fizlica/zaklyuchenie_dogovorov', 
        navbarName: 'Redirect' 
    },
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
    {
        path: '/partners',
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
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
        sidebarName: '',
        navbarName: '',
        icon: Dashboard,
        component: UnderConstructPage
    },
    {
        component: NotFoundPage
    },
];

/*
*/
