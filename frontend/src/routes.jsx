import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { UnderConstructView, NotFoundView, LoginView, ProtectedView, MapView } from './containers';
import { HomeView, ElektronnayaPriemnayaView, BlackoutsView, AvailableCapacityMapView, FaqView } from './containers';
import { CommonInfoView, LeadershipView, ContactsView, VacanciesView, OurHistoryView, ZakupkiRaskrytieView } from './containers';
import { PoluchenieTekhnicheskikhUsloviyView, OformlenieDogovoraOPodklyucheniiView, OformlenieAktovOPodklyucheniiView, 
    FizlicaZaklyuchenieDogovorovView, FizlicaPeredachaPokazaniyView, FizlicaPriboryUchetaView,
    UrlicaZaklyuchenieDogovorovView, UrlicaPeredachaPokazaniyView, UrlicaInspekciaVodnyhResursovView,
    RegulatoryDocView, TarifsView, DebtorsView,
    VyvozZhidkihKommunalnyhStokovView, LaboratornyyAnalizVodyView, 
    PreyskurantUslugDlyaFizicheskihLicView, PreyskurantUslugDlyaYuridicheskihLicView, 
    ProchieUslugiView } from './containers';
import { NewsView, NewsAboutUsView } from './containers';
import requireAuthentication from './utils/requireAuthentication';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path = "/" component = { HomeView } />
                <Route exact path = "/about" render={() => (<Redirect to = "/about/common_info"/>)}/>
                <Route exact path = "/about/common_info" component = { CommonInfoView } />>
                <Route exact path = "/about/leadership" component = { LeadershipView } />
                <Route exact path = "/about/contacts" component = { ContactsView } />
                <Route exact path = "/about/vacancies" component = { VacanciesView } />
                <Route exact path = "/about/history" component = { OurHistoryView } />
                <Route exact path = "/about/zakupki_raskrytie_informacii" component = { ZakupkiRaskrytieView } />
                <Route exact path = "/customers" render={() => (<Redirect to="/customers/connection/poluchenie_tekhnicheskikh_usloviy"/>)}/>
                <Route exact path = "/customers/connection" render={() => (<Redirect to = "/customers/connection/poluchenie_tekhnicheskikh_usloviy"/>)}/>
                <Route exact path = "/customers/connection/poluchenie_tekhnicheskikh_usloviy" component = { PoluchenieTekhnicheskikhUsloviyView } />
                <Route exact path = "/customers/connection/oformlenie_dogovora_o_podklyuchenii" component = { OformlenieDogovoraOPodklyucheniiView } />
                <Route exact path = "/customers/connection/oformlenie_aktov_o_podklyuchenii" component = { OformlenieAktovOPodklyucheniiView } />
                <Route exact path = "/customers/fizlica" render={() => (<Redirect to = "/customers/fizlica/zaklyuchenie_dogovorov"/>)}/>
                <Route exact path = "/customers/fizlica/zaklyuchenie_dogovorov" component = { FizlicaZaklyuchenieDogovorovView } />
                <Route exact path = "/customers/fizlica/peredacha_pokazaniy" component = { FizlicaPeredachaPokazaniyView } />
                <Route exact path = "/customers/fizlica/pribory_ucheta" component = { FizlicaPriboryUchetaView } />
                <Route exact path = "/customers/urlica" render={() => (<Redirect to = "/customers/urlica/zaklyuchenie_dogovorov"/>)}/>
                <Route exact path = "/customers/urlica/zaklyuchenie_dogovorov" component = { UrlicaZaklyuchenieDogovorovView } />
                <Route exact path = "/customers/urlica/peredacha_pokazaniy" component = { UrlicaPeredachaPokazaniyView } />
                <Route exact path = "/customers/urlica/inspekcia_vodnyh_resursov" component = { UrlicaInspekciaVodnyhResursovView } />
                <Route exact path = "/customers/regulatory_doc" component = { RegulatoryDocView } />
                <Route exact path = "/customers/tarifs" component = { TarifsView } />
                <Route exact path = "/customers/debtors" component = { DebtorsView } />
                <Route exact path = "/customers/services" render={() => (<Redirect to = "/customers/services/vyvoz_zhidkih_kommunalnyh_stokov"/>)}/>
                <Route exact path = "/customers/services/vyvoz_zhidkih_kommunalnyh_stokov" component = { VyvozZhidkihKommunalnyhStokovView } />
                <Route exact path = "/customers/services/laboratornyy_analiz_vody" component = { LaboratornyyAnalizVodyView } />
                <Route exact path = "/customers/services/preyskurant_uslug_dlya_fizicheskih_lic" component = { PreyskurantUslugDlyaFizicheskihLicView } />
                <Route exact path = "/customers/services/preyskurant_uslug_dlya_yuridicheskih_lic" component = { PreyskurantUslugDlyaYuridicheskihLicView } />
                <Route exact path = "/customers/services/prochie_uslugi" component = { ProchieUslugiView } />
                <Route exact path = "/news" component = { NewsView } />
                <Route exact path = "/news/smi_o_nashey_rabote" component = { NewsAboutUsView } />
                <Route path = "/elektronnaya_priemnaya" component = { ElektronnayaPriemnayaView } />
                <Route path = "/blackouts" component = { BlackoutsView } />
                <Route path = "/available_capacity_map" component = { AvailableCapacityMapView } />
                <Route path = "/map" component = { MapView } />
                <Route path = "/creator" component = { UnderConstructView } />
                <Route path = "/faq" component = { FaqView } />
                <Route path = "/login" component = { LoginView } />
                <Route path = "/protected" component = { requireAuthentication(ProtectedView) } />
                <Route component = { NotFoundView } />
            </Switch>
        );
    }
}

export default Routes;
//<Route path = '/partners' component = { () => window.location = 'http://brhts.ru/' }/>
//                <Redirect push={ true } to="/pathtoredirect" />
/*

*/